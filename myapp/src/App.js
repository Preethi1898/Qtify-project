import { useEffect, useState } from "react";
import "./App.css";
import Hero  from "./Hero/Hero";
import Section from "./Section/Section";
//@ts-ignore
import NavBar from "./Navbar/Navbar";
import { fetchTopAlbums, fetchNewAlbums } from "./api/api";



function App() {
  
  const [topAlbums, settopAlbums] = useState([]);
  const [newAlbums,setnewAlbums]= useState([]);
   
  const generateTopAlbumData = async () => {
    const data = await fetchTopAlbums();
    console.log(data);
    settopAlbums(data);
  };
  const generateNewAlbumData = async() => {
    const data= await fetchNewAlbums();
    setnewAlbums(data);
  }
  useEffect(() => {
    generateTopAlbumData();
    generateNewAlbumData();
  }, []);
  console.log(topAlbums, "topAlbumData");
  return (
    <div className="App">
      <NavBar/>
      <Hero/>     
      <div className="sectionWrapper" >
      <Section type="album" title="Top Albums" data={topAlbums} />
      <Section type="album" title="New Albums" data={newAlbums} />
      </div>
    </div>
  );
}

export default App;