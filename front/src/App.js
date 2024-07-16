import axios from "axios";
import { useEffect, useState } from "react";


function App() {

  let [enter,setenter]=useState("")
  let [saved,setsaved]=useState([])

  // axios.get("http://localhost:6000/fruit").then(function(data){
  //   console.log(data)
  // })

  useEffect(function(){
    axios.get("http://localhost:6001/fruit").then(function(data){
     
      console.log(data.data)
      setsaved(data.data)
    })

  },[])

  function handleEnter(eve){
    setenter(eve.target.value)
  }

  function handleSave(){
    axios.post("http://localhost:6001/addfruit",{newfruit:enter})

    setsaved([...saved,{name:enter}])
    setenter("")
  }
  return (
    <div>
      <input value={enter} onChange={handleEnter}></input>
      <button onClick={handleSave} >ADD</button>

      {
        saved.map(function(data,index){
          return(
            <h1 key={index}>{data.name}</h1>
          )
        })
      }
     

    </div>
  );
}

export default App;
