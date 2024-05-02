import { getWeatherData } from "./apimanagement";
import './base.css'

const searchbar = document.querySelector('#Searchbar');
searchbar.addEventListener('keypress',(e)=>{
    if(e.key == 'Enter'){
        const data = getWeatherData(searchbar.value)
        console.log(data)
    }
})
