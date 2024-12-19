"use strict";

fetch(api.link) // This returns a promise - an object that represents the eventual completion (or failure) of an operation
    .then((response) => { // This handles the promise from the fetch request
        if (!response.ok) { // If the promise fails... (usually a 4xx or 5xx status code)
        // Do something if the promise does not succeed
        }
        // Processes the successful response (usually a 2xx status code)
        return response.json(); // This also returns a promise that resolves to the JSON object when parsing is complete
    })
    .then((response) => {
        // handles the promise that was given by the return statement
    });

    async function getText(file) {
        let myObject = await fetch(file);
        let myText = await myObject.text();
        myDisplay(myText);
      }

      // ------------------------------------------------------------------
      document.getElementById("getF").addEventListener("click", () => {
        fetch("https://jsonplaceholder.typicode.com/posts/1") // jsonplaceholder is a free API for testing
          .then((response) => { // This handles the promise from the fetch
            console.log(response); // Logs the promise object
            if (!response.ok) { // If the promise failed...
              console.log(response.status); // Log its status
            }
            return response.json(); // This parses the response as a JSON, which also returns a promise
          })
          .then((res) => console.log(res)); // handles the promise given by the return statement
      });

      let userSearch = "inception"

      document.getElementById("search").addEventListener("click", () => {
        fetch(`http://www.omdbapi.com/?t=${userSearch}&apikey=c52d83f7`)
          .then ((response) => {
            console.log(response);
            if (!response.ok) {
              console.log(response.status);
            }
            return response.json();
          })
          .then((res) => console.log(res));
      })

      // ------------------------------------------------------------------
      document.getElementById("postF").addEventListener("click", () => {
        let me = { first: "John", last: "Smith" };
        let headers = new Headers(); // Creates a headers object
        headers.append("Content-Type", "application/json"); // Tells the API that the request's content type is JSON
        fetch("https://jsonplaceholder.typicode.com/posts/", {
          method: "POST", // POST submits data to the server
          body: JSON.stringify(me), // Turns the 'me' object into a JSON string to give to the server
          headers: headers, // Sets the headers for the request
        })
          .then((response) => response.json()) // Returns a promise
          .then((response) => console.log(response)); // Handles the promise
      });