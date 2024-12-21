"use strict";

// send data requests to http://www.omdbapi.com/?s=${movieSearchResults}&apikey=c52d83f7
// Poster API requests http://img.omdbapi.com/?apikey=c52d83f7&t=
// apikey=c52d83f7


document.getElementById("submit").addEventListener("click", searchResults);

function searchResults () {
    const userSearch = document.getElementById("search-box").value;
     
    fetch('http://www.omdbapi.com/?s=${userSearch}&apikey=c52d83f7')
    // This returns a promise - an object that represents the eventual completion (or failure) of an operation
    .then((response) => { // This handles the promise from the fetch request
        if (!response.ok) { // If the promise fails... (usually a 4xx or 5xx status code)
        // Do something if the promise does not succeed
        const errorMessage = "500 Internal Server Error."
        console.log(errorMessage);
        throw new Error(errorMessage);
        }
        // Processes the successful response (usually a 2xx status code)
        const successMessage = "202 Accepted"
        console.log(successMessage);
        return response.json(); // This also returns a promise that resolves to the JSON object when parsing is complete
    })
    .then((data) => {
        // handles the promise that was given by the return statement
        console.log(data)
        document.getElementsByClassName("resultsDivs")[0].innerHTML = data.Title
    })
   .catch(error => {
    console.error('Error:', error);
   });
}

// !below is from cluade to make full search work BLEOW DONW
// adding this starting at line 27, last "then" stmnt
// .then((data) => {
//     console.log(data); // Check what the API returns
        
//     const resultsContainer = document.querySelector(".resultsDivs");
//     resultsContainer.innerHTML = ''; // Clear previous results
    
//     // Check if we got results
//     if (data.Search && data.Search.length > 0) {
//         // Loop through each movie in the results
//         data.Search.forEach(movie => {
//             // Create HTML for each movie
//             const movieHtml = `
//                 <div class="movie-card">
//                     <h3>${movie.Title}</h3>
//                     <img src="${movie.Poster}" alt="${movie.Title}" 
//                         onerror="this.src='placeholder-image.jpg'">
//                     <p>Year: ${movie.Year}</p>
//                     <p>Type: ${movie.Type}</p>
//                     <p>IMDB ID: ${movie.imdbID}</p>
//                 </div>
//             `;
//             resultsContainer.innerHTML += movieHtml;
//         });
//     } else {
//         resultsContainer.innerHTML = '<p>No results found</p>';
//     }
// })
// .catch(error => {
//     console.error('Error:', error);
// });
// }




//-------NOTES-------- //
//   document.getElementById("submit").addEventListener("click", () => {
    // let userSearch = document.getElementById("search-box").value;
    //     fetch(`http://www.omdbapi.com/?s=${userSearch}&apikey=c52d83f7`)
    //       .then ((response1) => {
    //         // display the poster img and movie info
    //         console.log(response1);
    //         if (!response1.ok) { 
    //             // write an error message by alert?
    //           console.log(response1.status);
    //         }
    //         return response1.json();
    //       })
    //       .then((res) => {

    //         res.Search.forEach(element => {
    //             console.log(element.Title)
    //         });
    //         // for each element of array returned from the DB, display it on screen;
    //       console.log(res.Search)} );
          
    //   })
// write a new fetch / then for the poster imgs ?



// fetch(api.link) // This returns a promise - an object that represents the eventual completion (or failure) of an operation
//     .then((response) => { // This handles the promise from the fetch request
//         if (!response.ok) { // If the promise fails... (usually a 4xx or 5xx status code)
//         // Do something if the promise does not succeed
//         }
//         // Processes the successful response (usually a 2xx status code)
//         return response.json(); // This also returns a promise that resolves to the JSON object when parsing is complete
//     })
//     .then((response) => {
//         // handles the promise that was given by the return statement
//     });

//     async function getText(file) {
//         let myObject = await fetch(file);
//         let myText = await myObject.text();
//         myDisplay(myText);
//       }

      // ------------------------------------------------------------------
    //   document.getElementById("submit").addEventListener("click", () => {
    //     fetch("https://jsonplaceholder.typicode.com/posts/1") // jsonplaceholder is a free API for testing
    //       .then((response) => { // This handles the promise from the fetch
    //         console.log(response); // Logs the promise object
    //         if (!response.ok) { // If the promise failed...
    //           console.log(response.status); // Log its status
    //         }
    //         return response.json(); // This parses the response as a JSON, which also returns a promise
    //       })
    //       .then((res) => console.log(res)); // handles the promise given by the return statement
    //   });