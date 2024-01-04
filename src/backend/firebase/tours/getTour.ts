import { db } from "../../../../firebase";
import {
  doc, getDoc
} from "@firebase/firestore";

export default async function getTourById(blogId: string) {
  try {
    const docRef = doc(db, "tours", blogId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const blogData = docSnap.data();
      return blogData;
    } else {
      console.log("No blog found with ID:", blogId);
      return null; 
    }
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
}
