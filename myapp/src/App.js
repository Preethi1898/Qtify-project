import { useEffect, useState } from "react";
import "./App.css";
import Hero  from "./Hero/Hero";
import Card from "./Card/Card";
//@ts-ignore
import NavBar from "./Navbar/Navbar";
import axios from "axios";


function App() {
  
  const [topAlbums, settopAlbums] = useState([]);
   const url = "https://qtify-backend-labs.crio.do"
 const fetchTopAlbums = async() =>{
    try{
const res = await axios.get(`${url}/albums/top`)
return res.data;
    }catch(err){
console.error(err)
    }
}
  const generateTopAlbumData = async () => {
    const data = await fetchTopAlbums();
    console.log(data);
    settopAlbums(data);
  };
  useEffect(() => {
    generateTopAlbumData();
  }, []);
  console.log(topAlbums, "topAlbumData");
  return (
    <div className="App">
      <NavBar/>
      <Hero/>     
       <div className="cardContainer">
      {topAlbums.map((item) => {
        return <Card key={item.id} data={item} type="album" />;
      })}
      </div> 
    </div>
  );
}

export default App;