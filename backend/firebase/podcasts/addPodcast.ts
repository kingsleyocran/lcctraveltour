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

const podcastCollection = collection(db, "podcast");

export default async function addNewPodcast (selectedFile: any, selectedBannerFile: any,  data:any) {
  //Create post aond add to firestore
  //Get post ID
  //Upload the image with post ID
  //Get download URL
  
  try {
    const docRef = await addDoc(podcastCollection, {
      dateCreated: serverTimestamp(),
      ...data
    });
  
    const imageCoverRef = ref(storage, `podcast/cover-${docRef.id}`);
    const imageBannerRef = ref(storage, `podcast/banner-${docRef.id}`);
  
    //add cover image
    await uploadString(imageCoverRef, selectedFile, "data_url").then(
      async (snapshot) => {
        const downloadURL = await getDownloadURL(imageCoverRef);
  
        await updateDoc(doc(db, "podcast", docRef.id), {
          imageUrl: downloadURL,
        });
      }
    );

    //add banner image
    await uploadString(imageBannerRef, selectedBannerFile, "data_url").then(
      async (snapshot) => {
        const downloadURL = await getDownloadURL(imageBannerRef);
  
        await updateDoc(doc(db, "podcast", docRef.id), {
          imageBannerUrl: downloadURL,
        });
      }
    );
  } catch (error) {
    console.log(error)
  }
};
