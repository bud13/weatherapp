import axios from "axios"
import {useState} from "react"

function App(){

    const [degree,setDegree] = useState("23")
    const [city,setCity] = useState("France")
    const [weather,setWeather] = useState("Raining")
    const [enteredCity,setenteredcity] = useState("")

    function handleInput(event){
        
        setenteredcity(event.target.value)
        //console.log(event.target.value)
    }

function getData(){
    var weather = axios(`https://api.openweathermap.org/data/2.5/weather?q=${enteredCity}&appid=843916befa88cade4a6f2d1366e50383`)

    weather.then(function(data){
        console.log(data.data)
        setDegree(data.data.main.temp)
        setCity(data.data.name)
        setWeather(data.data.weather[0].main)
    }).catch(function(){
        console.log("error")
    })

}
    return(
        <div className = "flex flex-row justify-center h-[100vh] items-center" >
    <div style = {{backgroundImage: "linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)"}} className = "p-2 rounded-md shadow">
        <h2 className = "font-medium">Hey! ⛅</h2>
    <p className = "text-xs"> Do you want to know the weather report:</p>
    <input onChange = {handleInput} type = "text" className = "rounded-md h-6 text-sm mt-2 p-1 outline-none" placeholder="City Name?"/><br/>
    <button onClick= {getData} className = "bg-black text-xs text-white rounded-lg p-1 mt-2"> Get report ⚡ </button>
    <p  className = "text-xs mt-2"> Degree : {degree} | City: {city} | weather: {weather}</p>
    </div>
    </div>
)
}

export default App