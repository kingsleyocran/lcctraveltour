import { ref, getDownloadURL, uploadString } from "@firebase/storage";
import { db, storage } from "../../../../firebase";
import {
  addDoc,
  serverTimestamp,
  updateDoc,
  collection,
  doc,
} from "@firebase/firestore";

const galleryCollection = collection(db, "gallery");

export default async function addNewGalleryImage(selectedFile: any, data: any) {
  try {
    const docRef = await addDoc(galleryCollection, {
      dateCreated: serverTimestamp(),
      ...data,
    });

    const imageRef = ref(storage, `gallery/${docRef.id}`);

    await uploadString(imageRef, selectedFile, "data_url").then(
      async (snapshot) => {
        const downloadURL = await getDownloadURL(imageRef);

        await updateDoc(doc(db, "gallery", docRef.id), {
          imageUrl: downloadURL,
        });
      }
    );
  } catch (error) {
    console.error(error);
  }
}
