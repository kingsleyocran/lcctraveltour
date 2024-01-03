import { ref, getDownloadURL, uploadString } from "@firebase/storage";
import { db, storage } from "../../../../firebase";
import { updateDoc, doc } from "@firebase/firestore";

export default async function updateGalleryImage(data: any) {
  try {
    await updateDoc(doc(db, "gallery", data.id), {
      ...data,
    });
  } catch (error) {
    console.error(error);
  }
}

export async function updateImage(selectedFile: any, data: any) {
  try {
    const imageRef = ref(storage, `gallery/${data.id}`);

    await uploadString(imageRef, selectedFile, "data_url").then(
      async (snapshot) => {
        const downloadURL = await getDownloadURL(imageRef);

        await updateDoc(doc(db, "gallery", data.id), {
          imageUrl: downloadURL,
        });
      }
    );
  } catch (error) {
    console.error(error);
  }
}
