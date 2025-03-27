 const KEY = '1410f2eb8a134eaf81404439252703';
 
 
 const fetchData = async (city) => {
    const url = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`;
    
    const fetchResponse = await fetch(url);
 };

 export default fetchData;