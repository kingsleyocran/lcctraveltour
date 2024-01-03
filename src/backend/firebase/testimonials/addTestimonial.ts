import { ref, getDownloadURL, uploadString } from "@firebase/storage";
import { db, storage } from "../../../../firebase";
import {
  addDoc,
  serverTimestamp,
  updateDoc,
  collection,
  doc,
} from "@firebase/firestore";

export default async function addTestimonial(selectedFile: any, data: any) {
  try {
    const docRef = await addDoc(collection(db, "testimonials"), {
      dateCreated: serverTimestamp(),
      ...data,
    });

    const imageRef = ref(storage, `testimonials/${docRef.id}`);

    await uploadString(imageRef, selectedFile, "data_url").then(
      async (snapshot) => {
        const downloadURL = await getDownloadURL(imageRef);

        await updateDoc(doc(db, "testimonials", docRef.id), {
          imageUrl: downloadURL,
        });
      }
    );
  } catch (error) {
    console.error(error);
  }
}
