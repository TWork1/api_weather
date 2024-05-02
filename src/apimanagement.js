export async function getWeatherData (search) {
 const rawData = await fetch (`http://api.weatherapi.com/v1/current.json?key=f7c67a4cd2304b8a888132639242604&q=${search}`,{ mode: 'cors'});
 const cleanData = await rawData.json();

 const
 feelslikeC = cleanData.current.feelslike_c,
 feelslikeF = cleanData.current.feelslike_f,
 humidity = cleanData.current.humidity,
 day = cleanData.current.is_day,
 percipin = cleanData.current.precip_in,
 precipmm = cleanData.current.precip_mm,
 tempC = cleanData.current.temp_c,
 tempF = cleanData.current.temp_f,
 uv = cleanData.current.uv,
 windkph = cleanData.current.wind_khp,
 windmph = cleanData.current.wind_mph,
 location = cleanData.location.region,
 position = cleanData.location.lat

 const data = {
    realfeel:[{
        American: feelslikeF,
        Imperial: feelslikeC
    }],
    humid: humidity,
    nightorday: day,
    percipitation:[{
        American: percipin,
        Imperial: precipmm
    }],
    temperature:[{
        American: tempF,
        Imperial: tempC 
    }],
    ultraviolet: uv,
    windspeed:[{
        American: windmph,
        Imperial: windkph
    }],
    local: location,
    pos: position
 }

 return (data)
}