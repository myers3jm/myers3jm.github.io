import { useState } from 'react'
import '../custom.css'

var shown = false;
function toggleEmail() {
    if (shown) {
        document.getElementById("email").innerHTML = "";
    } else {
        document.getElementById("email").innerHTML = "<p>myers3jm@mail.uc.edu</p>";
    }
    shown = !shown;
}

function ShowEmail() {
  return (
    <>
      <button onClick={toggleEmail} class="react">View Email</button>
      <p id="email" class="react"></p>
    </>
  )
}

export default ShowEmail
