import { ref, deleteObject } from "@firebase/storage";
import { db, storage } from "../../../../firebase";
import { doc, deleteDoc } from "@firebase/firestore";

export default async function deleteBlog(id: any) {
  try {
    await deleteDoc(doc(db, "blogs", id));
    await deleteFromBlogsImageFolder(id);
  } catch (error) {
    console.error(error);
  }
}

export async function deleteFromBlogsImageFolder(id: string) {
  try {
    const imageRef = ref(storage, `blogs/${id}`);
    await deleteObject(imageRef);
  } catch (error) {
    console.error(error);
  }
}
