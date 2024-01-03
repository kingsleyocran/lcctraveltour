import { ref, deleteObject } from "@firebase/storage";
import { db, storage } from "../../../../firebase";
import { doc, deleteDoc } from "@firebase/firestore";

export default async function deleteTour(id: any) {
  try {
    await deleteDoc(doc(db, "tours", id));
    await deleteFromBlogsImageFolder(id);
  } catch (error) {
    console.error(error);
  }
}

export async function deleteFromBlogsImageFolder(id: string) {
  try {
    const imageRef = ref(storage, `tours/${id}`);
    await deleteObject(imageRef);
  } catch (error) {
    console.error(error);
  }
}
