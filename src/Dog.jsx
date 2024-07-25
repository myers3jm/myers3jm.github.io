import { useState } from 'react'
import '../custom.css'

async function getDog() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");

    const result = await response.json();
    document.getElementById("dog").innerHTML = "<img src=\"" + result.message + "\">";
}

function Dog() {
  return (
    <>
      <button onClick={getDog} class="react">Get Dog</button>
      <div id="dog" class="react"></div>
    </>
  )
}

export default Dog

