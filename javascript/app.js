// init UI 

const ui=new UI;


async function getCity(){
    const city=await fetch(`https://ipapi.co/json`);
    const data=await city.json();

    return data;
}

getCity().then(data=>{
//    init weather 

const weather=new Weather(data.city);
console.log(data.city);

weather.getWeather().then(data=> {
    console.log(data);

    ui.paint(data);
}).catch(err =>{
    console.log(err);
    ui.notFound();
});
});


document.getElementById('w-change-btn').addEventListener('click', function(){
    const city=document.getElementById('city').value;

    if(city===''){

        alert('You must write a valid city name')

    }

    else{

        //    init weather 

        const weather=new Weather(city);
    

    weather.getWeather().then(data=> {
        console.log(data);

        ui.paint(data);
}).catch(err=> {
    console.log(err);
    ui.notFound();
});
        
    }

})