/* eslint-disable no-undef */
const API ='https://api.nasa.gov/planetary/apod?api_key=';
const API_TOKEN ='8ATjloX5XTaiDITot9kArVzUhb0lhJxtNFwWTmnY';  

export async function  get(path){
     return await  fetch(API  +API_TOKEN + path)
       
        
       .then( (resul) => resul.json())
        
    
}