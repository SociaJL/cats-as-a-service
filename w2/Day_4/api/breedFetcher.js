// intall request via npm

// npm init -y
// npm install request

// create .gitignore file & add noide_modules (single line -> node_modules/)

// find API docs for the API URL/endpoint which will return cat breeds

// https://api.thecatapi.com/v1/breeds/search


// JSON.parse() will take a srting and turn it into an object. 
// JSON.stringify() will do the opposite. 




const request = require('request');

const userSearch = process.argv[2]

request(`https://api.thecatapi.com/v1/breeds/search?q=${userSearch}`, function (error, response, body) {
  
  if (error) {
    console.log(`Here is your ${error}`)
    return
  }
  
  const data = JSON.parse(body);
  if (!data[0]) {
    console.log("This breed does not exist")
  } else {
    console.log(data[0].description)
  }
  
  
});  

// response?
// edge cases? if breed not found. 
// error: define return 



//console.log(data);
// console.log(typeof data);

//console.log(data)
// console.log(data[0]["description"])
