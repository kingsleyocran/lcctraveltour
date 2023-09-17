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

export default async function updateBanner(data: any) {
  // update the doc by setting done to true
  await updateDoc(doc(db, "banner", data.id), {
    ...data,
  });
}

export async function updateImageDesktop(selectedFile: any, data: any) {
  try {
    const imageRef = ref(storage, `banner/desktop-${data.id}`);

    await uploadString(imageRef, selectedFile, "data_url").then(
      async (snapshot) => {
        const downloadURL = await getDownloadURL(imageRef);
  
        await updateDoc(doc(db, "banner", data.id), {
          desktopUrl: downloadURL,
        });
      }
    );
  } catch (error) {
    console.log(error);
  }
}

export async function updateImageMobile(selectedFile: any, data: any) {
  try {
    const imageRef = ref(storage, `banner/mobile-${data.id}`);

    await uploadString(imageRef, selectedFile, "data_url").then(
      async (snapshot) => {
        const downloadURL = await getDownloadURL(imageRef);
  
        await updateDoc(doc(db, "banner", data.id), {
          mobileUrl: downloadURL,
        });
      }
    );
  } catch (error) {
    console.log(error);
  }
}

