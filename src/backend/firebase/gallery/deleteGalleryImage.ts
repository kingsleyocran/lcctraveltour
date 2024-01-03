import { ref, deleteObject } from "@firebase/storage";
import { db, storage } from "../../../../firebase";
import { doc, deleteDoc } from "@firebase/firestore";

export default async function deleteGalleryImage(id: any) {
  try {
    await deleteDoc(doc(db, "gallery", id));
    await deleteFromGalleryImageFolder(id);
  } catch (error) {
    console.error(error);
  }
}

export async function deleteFromGalleryImageFolder(id: string) {
  try {
    const imageRef = ref(storage, `gallery/${id}`);
    await deleteObject(imageRef);
  } catch (error) {
    console.error(error);
  }
}
