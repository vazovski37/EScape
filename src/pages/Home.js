import React from 'react'
import { useState, useEffect } from 'react'
import { addDoc } from 'firebase/firestore'
import {db, auth, storage } from '../firebase-config'
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { v4 } from "uuid";

function Home() {
  const [imageUrls, setImageUrls] = useState([]);
  const imagesListRef = ref(storage, "projectFiles/");
  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);


  return (
    <div>Home

      {imageUrls.map((url) => {
        return <img src={url}  style={{ width: '200px', }}  />;
      })}
    </div>
  )
}

export default Home