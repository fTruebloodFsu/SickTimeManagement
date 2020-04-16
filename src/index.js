import React from 'react'; 
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const DBentries = require('./server.js');
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.post('/newEntry', DBentries.enterNewRequest);
app.delete('/delete', DBentries.deleteRequest);
app.get('/requets', DBentries.getRequestByName);

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})


ReactDOM.render(<BrowserRouter>
                  <App />
                </BrowserRouter>, 
                document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
