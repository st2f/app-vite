import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { speechToText } from './speech.js'



document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    
    <div class="card">
      <button id="speak" type="button">Speak</button>
    </div>
    <p class="hints"></p>
    <div>
        <p class="output"><em>...diagnostic messages</em></p>
    </div>
    
  </div>
`

setupCounter(document.querySelector('#counter'))
speechToText(document.querySelector('#speak'))
()

