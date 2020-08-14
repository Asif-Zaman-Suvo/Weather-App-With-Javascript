class Weather{
    constructor(city){
        this.city = city;
        this.appid='518febc54688890850e1595ebd58d0b9'

        
    }

    // fetch weather info from API 

    async getWeather(){
        const resData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.appid}`);

        const resultData=await resData.json();

        return resultData;
    }
}

