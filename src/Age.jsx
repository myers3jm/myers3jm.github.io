import { useState } from 'react'
import '../custom.css'

async function guessAge() {
    const name = document.getElementById("firstName").value;
    const response = await fetch("https://api.agify.io/?name="+name);
    const result = await response.json();
    document.getElementById("age").innerHTML = "Hi " + name + ", your age should be " + result.age;
}

function Age() {
  return (
    <>
      <input onkeypress="console.log('You have pressed a key')" id="firstName" placeholder="Name"/>
      <button onClick={guessAge} class="react">Guess Age</button>
      <p id="age" class="react"></p>
    </>
  )
}

export default Age

