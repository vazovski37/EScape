import { Form } from 'react-router-dom'
import { async } from '@firebase/util'
import React, { useState, useEffect } from 'react'
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

function Admin() {

  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, "projectFiles/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `projectFiles/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };


  console.log(imageUrls)

  return (
    <div>
      <h1>upload img</h1>

      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button onClick={uploadFile}> Upload Image</button>


    </div>
  )
}

export default Admin

