require('dotenv').config();



async function getImages(query){
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
    const response = await fetch(endpoint);
    const data = await response.json();
   // console.log(data);
    console.log(data.data[0].url)
    return data.data[0].url
}

getImages('money')
// Print out value of API key stored in .env file
