import React, {useEffect, useState} from "react";
import Search from "./components/Search";
import List from "./components/List";
function App() {
  
  const[choice, setChoice] = useState([])

  const apiUrl = "https://rickandmortyapi.com/api/"

  const getChoiceApi = async (endpoint,keywords) => {
    const choiceApi = await fetch(apiUrl+endpoint+"/?name="+keywords)
    console.log(choiceApi)
    const choiceApiJSON = await choiceApi.json()
    setChoice(choiceApiJSON.results)
  }

  return (
    <div className="container mt-5 bgimg bgcolor">
        <h1>Rick & Morty's directory</h1>
        <p>(API from <a href="https://rickandmortyapi.com" target="blank_">HERE</a>)</p>
        <Search handleSearch={getChoiceApi}/>
        <List choice={choice}/> 
        
    </div>
  );
}

export default App;
