"use client";

import { useEffect, useState } from "react";
// import { Auth } from "../../components/auth";
// import { db, auth, storage } from "../../firebase";
// import {useNavigate} from "react-router-dom";

import { auth } from "@firebase/firebase";
import { db  } from "@firebase/firebase";

import {
  getDocs,
  collection,
  addDoc,
  setDoc,
  deleteDoc,
  updateDoc,
  doc,
  Timestamp,
} from "firebase/firestore";


import "./gallery.css";
// import Navbar from "../../components/navBar/NavBar";


function DesignGallery() {
//   const navigate = useNavigate();
  const [movieList, setMovieList] = useState([]);

  const moviesCollectionRef = collection(db, "gallery");

  const getMovieList = async () => {
    try {
      console.log('calling data');
      const data = await getDocs(moviesCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        // id: doc.id,
       
      }));
      setMovieList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getMovieList();
  }, []);


  return (
    <div className="App">
      {/* <Navbar/>
      <br/> */}
      <div>
        <br/>
        <h6 className="text-lg"  style= { { fontSize: 50 }}>Gallery</h6>
        <br/>
        {/* <span>If you’re on the lookout for simple home interior designs, look no further than HomeLane for end- to-end interior design services.</span>
       */}
      </div>
      <div className=" flex-between about-section-row">
        {movieList.map((movie) => (
          // onClick={()=>navigate(`/product/${movie.id}`)}
          <div  key={movie.productId} className="paddings">
            <div key={movie.productId} className="flex bgImage paddings w-[350px] h-[400px]"  style={{ backgroundImage: `url(${movie._imageUrls[0]})`, backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <h2 style={{fontSize: 28, color: movie.approved ? "white" : "red" }}>
              {movie.productName}
            </h2>
           
            {/* <img src={movie.imageUrl}
            height={300}
            width={300}
            ></img> */}
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DesignGallery;