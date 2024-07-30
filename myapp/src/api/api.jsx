import axios from "axios";

export const BACK_ENDPOINT = "https://qtify-backend-labs.crio.do"
export const fetchTopAlbums = async() =>{
    try{
const res = await axios.get(`${BACK_ENDPOINT}/albums/top`)
return res.data
    }catch(err){
console.error(err)
    }
}
export const fetchNewAlbums = async() =>{
    try{
const res = await axios.get(`${BACK_ENDPOINT}/albums/new`)
return res.data
    }catch(err){
console.error(err)
    }
}


