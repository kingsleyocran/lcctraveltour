import { ref, deleteObject } from "@firebase/storage";
import { db, storage } from "../../../../firebase";
import { doc, deleteDoc } from "@firebase/firestore";

export default async function deleteTestimonial(id: any) {
  try {
    await deleteDoc(doc(db, "testimonials", id));
    await deleteFromTestimonialsImageFolder(id);
  } catch (error) {
    console.error(error);
  }
}

export async function deleteFromTestimonialsImageFolder(id: string) {
  try {
    const imageRef = ref(storage, `testimonials/${id}`);
    await deleteObject(imageRef);
  } catch (error) {
    console.error(error);
  }
}
