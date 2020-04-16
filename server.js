import { Client, Pool } from 'pg';
//const Pool = require('pg').Pool
const express = require('express');
const app = express();
app.use(express.json())

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'sick_time',
    password: 'Colby5892::PG',
    port: 5432,
})

const enterNewRequest = (request, response) => {

    const { FirstName, LastName, StoreNum, selectedDate, Shift, HoursUsed } = request.body;

    pool.query('INSERT INTO sick_time(firstname, lastname, storenum, requestdate, shift, requestedhours) VALUES($1, $2, $3, $4, $5, $6)', 
                [FirstName, LastName, StoreNum, selectedDate, Shift, HoursUsed], 
                (error,result) => {
                    if (error) {
                        throw error
                    }
                    response.status(201).send(`User added with name: ${result.FirstName} ${result.LastName}`)
                })
}

const deleteRequest = (request, response) => {
    
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM sick_time WHERE id = $1', [id], (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User deleted with ID: ${id}`)
      })
}

const getRequestByName = (request, response) => {
    const { FirstName, LastName, StoreNum } = request.body;
  
    pool.query('SELECT * FROM sick_time WHERE firstname = $1, lastname = $2, storenum = $3', 
		  [FirstName, LastName, StoreNum], (error, results) => {
		  if (error) {
			  throw error
		  }
		  response.status(200).json(results.rows)
		  })
}

module.exports = {
    getRequestByName,
    deleteRequest,
    enterNewRequest
}

app.listen(3000, () => console.log("listening on port 3000"))


