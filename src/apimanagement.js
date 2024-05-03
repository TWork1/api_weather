
 async function getWeatherData (search) {
 const rawData = await fetch (`http://api.weatherapi.com/v1/current.json?key=f7c67a4cd2304b8a888132639242604&q=${search}`,{ mode: 'cors'});
 const cleanData = await rawData.json();

 const button = document.createElement('button');
 button.addEventListener('click',()=>{
    if(document.querySelector('.Temp').textContent == `${cleanData.current.temp_c}°C`){
        document.querySelector('.Temp').textContent = `${cleanData.current.temp_f}°F`
    }else{document.querySelector('.Temp').textContent = `${cleanData.current.temp_c}°C`}
 })
 document.querySelector('.Temp').textContent = `${cleanData.current.temp_c}°C`
 document.querySelector('.humidity').textContent = cleanData.current.humidity
 document.querySelector('.weather').textContent = cleanData.current.condition.text
 button.textContent = 'measurement change'
document.querySelector('body').appendChild(button)

 return (cleanData)
}

const searchbar = document.querySelector('#Searchbar');
searchbar.addEventListener('keypress',(e)=>{
    if(e.key == 'Enter'){
        try{
        const newdata = getWeatherData(searchbar.value)
        console.log(newdata)} catch(error){console.error(error)}
    }})

