import axios from "axios";

export const url = "https://qtify-backend-labs.crio.do"
export const fetchTopAlbums = async() =>{
    try{
const res = await axios.get(`${url}/albums/top`)
console.log(res.data);
return res.data
    }catch(err){
console.error(err)
    }
}
export const fetchNewAlbums = async() =>{
    try{
const res = await axios.get(`${url}/albums/new`)
return res.data
    }catch(err){
console.error(err)
    }
}
export const fetchSongs = async() =>{
    try{
const res = await axios.get(`${url}/songs`)
return res.data
    }catch(err){
console.error(err)
    }
}
export const fetchGenre = async() =>{
    try{
const res = await axios.get(`${url}/genres`)
return res.data
    }catch(err){
console.error(err)
    }
}


