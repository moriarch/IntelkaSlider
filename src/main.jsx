import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


document.querySelectorAll('[data-slider="mainProducts"]').forEach(widget=>{
  ReactDOM.createRoot(widget).render(
    <React.StrictMode>
      <App url={widget.dataset.url}/>
    </React.StrictMode>,
  )
})


