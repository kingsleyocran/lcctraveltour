import { ref, getDownloadURL, uploadString } from "@firebase/storage";
import { db, storage } from "../../../../firebase";
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

const teamCollection = collection(db, "team");

export default async function addNewTeamMember (selectedFile: any, data:any) {
  //Create post aond add to firestore
  //Get post ID
  //Upload the image with post ID
  //Get download URL
  
  try {
    const docRef = await addDoc(teamCollection, {
      dateCreated: serverTimestamp(),
      ...data
    });
  
    const imageRef = ref(storage, `team/${docRef.id}`);
  
    await uploadString(imageRef, selectedFile, "data_url").then(
      async (snapshot) => {
        const downloadURL = await getDownloadURL(imageRef);
  
        await updateDoc(doc(db, "team", docRef.id), {
          imageUrl: downloadURL,
        });
      }
    );
  } catch (error) {
    
  }
};
