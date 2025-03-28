import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function myApp() {
  return (
    <div>
      <h1>CustomApp</h1>
    </div>
  );
}

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
);

ReactDOM.createRoot(document.getElementById('root')).render(

  anotherElement

);
