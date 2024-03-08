import { useState } from 'react'
import './App.css'

function App() {

 const[counter, setcounter]= useState(15)

 const addvalue=()=>
 {
 
  setcounter((prevcounter) =>prevcounter+1)
  setcounter((prevcounter) =>prevcounter+1)
  setcounter((prevcounter) =>prevcounter+1)
  setcounter((prevcounter) =>prevcounter+1)
  
 }
    
  function removevalue()
  {
    setcounter(counter-1);
    console.log(counter);
  }
  

  return (
    <>
     <h1>Craete our own{" "}{counter}</h1> 
     <h2>Counter value</h2>
     <button 
     onClick={addvalue}
     
     >Add value</button> {" "}
     <button onClick={removevalue}> 
     remove value</button>
    </>
  )
}

export default App

//in this code we have did a Hook method which is used for dynamic value updating also known as state
