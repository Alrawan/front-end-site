import React,{useEffect, useState} from "react"
import axios from 'axios';

const IndexPage = () => {
  const [albums,setAlbums] = useState({})
  const [photos,setPhotos] = useState({})


useEffect(()=>{
console.log("HEY")
axios.get(`https://jsonplaceholder.typicode.com/albums`)
.then(res => {
  const data = res.data;
  setAlbums( data );
})
axios.get(`https://jsonplaceholder.typicode.com/photos`)
.then(res => {
  const data = res.data;
  setPhotos( data );
})

  },[])
  return (
    <main>
      {console.log("DATA !",albums)}
      {console.log("DATA 2",photos)}
      <h1>GATSBY</h1>
    </main>
  )
}

export default IndexPage
