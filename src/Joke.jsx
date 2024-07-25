import { useState } from 'react'
import '../custom.css'

async function getJoke() {
    const response = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");

    const result = await response.json();
    document.getElementById("joke").innerHTML = result.joke;
}

function Joke() {
  return (
    <>
      <button onClick={getJoke} class="react">Get Joke</button>
      <p id="joke" class="react"></p>
    </>
  )
}

export default Joke

