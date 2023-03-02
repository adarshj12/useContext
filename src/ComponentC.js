import React, { useContext } from 'react'
import { FirstName,LastName } from './App'

function ComponentC() {
    const fname =useContext(FirstName);
    const lname = useContext(LastName);
  return (
    <div>
        <h4><em>My name is {fname} {lname}</em></h4>
    </div>
  )
}

export default ComponentC