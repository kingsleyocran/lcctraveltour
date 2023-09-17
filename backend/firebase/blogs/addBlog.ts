import { ref, getDownloadURL, uploadString } from "@firebase/storage";
import { db, storage } from "../../../firebase";
import {
  addDoc,
  serverTimestamp,
  updateDoc,
  collection,
  doc,
  QueryDocumentSnapshot,
  DocumentData,
  query,
  where,
  limit,
  getDocs,
  orderBy,
} from "@firebase/firestore";

const blogCollection = collection(db, "blog");

export default async function addNewBlog (selectedFile: any, data:any) {
  //Create post aond add to firestore
  //Get post ID
  //Upload the image with post ID
  //Get download URL
  
  try {
    const docRef = await addDoc(blogCollection, {
      
      ...data,
      dateCreated: serverTimestamp(),
    });
  
    const imageRef = ref(storage, `blog/${docRef.id}`);
  
    await uploadString(imageRef, selectedFile, "data_url").then(
      async (snapshot) => {
        const downloadURL = await getDownloadURL(imageRef);
  
        await updateDoc(doc(db, "blog", docRef.id), {
          imageUrl: downloadURL,
        });
      }
    );
  } catch (error) {
    console.log(error)
  }
};
