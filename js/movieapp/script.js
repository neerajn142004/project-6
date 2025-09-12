let defaultval="avenger";
/*
http://www.omdbapi.com/?i=tt3896198&apikey=cdfdac5c
let apiUrl = " http://www.omdbapi.com/?i=tt3896198&apikey=cdfdac5c"
let apiUrl = "http://www.omdbapi.com/?s=${defaultval}&apikey=cdfdac5c')
*/

async function getMovie(){
    let movies =await fetch(`http://www.omdbapi.com/?s=${defaultval}&apikey=cdfdac5c`)
    console.log(movies)
    movies =await movies.json()
    console.log(movies)
    console.log(movies.Search)


    let omdMovies =document.getElementById("showmoviedetails");
  omdMovies.innerHTML="";
  /*`<h1> Hello world</h1>
    <p> tow are used </p>
    `;
  movies.Search.map((movie)=>{
        console.innerHTML=`
        <div class ="moviecard">
        <div><h3>${movie.Title}</h3></div>
        </div>
        `*/
        movies.Search.map((movie)=>{
            return omdMovies.innerHTML+=
            `<div class ="moviecard">
  <div>
    <h3>${movie.Title}</h3>
  </div>
  <div class="movieimg">
    <img src="${movie.Poster==="N/A"?"./no-image-available.jpg":movie.Poster}" alt="">
  </div>
  <div>2010</div>
</div>
            `
        
      })
}

getMovie()