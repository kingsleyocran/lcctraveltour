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

export default async function updatePodcast(data: any) {
  // update the doc by setting done to true
  try {
    await updateDoc(doc(db, "podcast", data.id), {
      ...data,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function updateImageCover(selectedFile: any, data: any) {
  try {
    const imageRef = ref(storage, `podcast/cover-${data.id}`);

    await uploadString(imageRef, selectedFile, "data_url").then(
      async (snapshot) => {
        const downloadURL = await getDownloadURL(imageRef);

        await updateDoc(doc(db, "podcast", data.id), {
          imageUrl: downloadURL,
        });
      }
    );
  } catch (error) {
    console.log(error);
  }
}

export async function updateImageBanner(selectedFile: any, data: any) {
  try {
    const imageRef = ref(storage, `podcast/banner-${data.id}`);

    await uploadString(imageRef, selectedFile, "data_url").then(
      async (snapshot) => {
        const downloadURL = await getDownloadURL(imageRef);

        await updateDoc(doc(db, "podcast", data.id), {
          imageBannerUrl: downloadURL,
        });
      }
    );
  } catch (error) {
    console.log(error);
  }
}
