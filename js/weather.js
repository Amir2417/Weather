const Api_Keys = `ca197ed6712b1d256ef3c5d319382343`;


const searchByName = () =>{

    const inputText = document.getElementById('inputField').value;
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=${Api_Keys}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTheResult(data));
    
}

const setTheResult = (id,text) => {
    document.getElementById(id).innerText = text;
}

const displayTheResult = Temparature => {
   
    setTheResult('cityName',Temparature.name);
    setTheResult('temperature', Temparature.main.temp);
    setTheResult('condition', Temparature.weather[0].main);
    // console.log(Temparature);
    const imgSrc = `https://openweathermap.org/img/wn/${Temparature.weather[0].icon}.png`;
    const ImgIcon = document.getElementById('weather-icon');
    ImgIcon.setAttribute('src',imgSrc);
    

   
}