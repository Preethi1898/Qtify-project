import { useEffect, useState } from "react";
import "./App.css";
import Hero  from "./Hero/Hero";
import Section from "./Section/Section";
//@ts-ignore
import NavBar from "./Navbar/Navbar";
import { fetchTopAlbums, fetchNewAlbums,fetchSongs, fetchGenre } from "./api/api";
import TabSection from "./Tabs/Tab";



function App() {
  
  const [topAlbums, settopAlbums] = useState([]);
  const [newAlbums,setnewAlbums]= useState([]);
  const [songData,setsongData]=useState([]);
  const [genres,setGenres]=useState([]);
   
  const generateTopAlbumData = async () => {
    const data = await fetchTopAlbums();
    console.log(data);
    settopAlbums(data);
  };
  const generateNewAlbumData = async() => {
    const data= await fetchNewAlbums();
    setnewAlbums(data);
  }
  const generateSongData = async() => {
    const data= await fetchSongs();
    setsongData(data);
  }
  const generateGenres = async() => {
    const data= await fetchGenre();
    setGenres(data);
  }
  useEffect(() => {
    generateTopAlbumData();
    generateNewAlbumData();
    generateSongData();
    generateGenres();
  }, []);
  console.log(topAlbums, "topAlbumData");
  return (
    <div className="App">
      <NavBar/>
      <Hero/>     
      <div className="sectionWrapper" >
      <Section type="album" title="Top Albums" data={topAlbums} />
      <Section type="album" title="New Albums" data={newAlbums} />
      <TabSection title="Songs" data={songData} genres={genres} />
      </div>
    </div>
  );
}

export default App;