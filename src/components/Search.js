import React, { Fragment, useState } from "react";

const Search = ({handleSearch}) => {
  
  

  const [datos, setDatos] = useState({
    radio: "",
    keywords: ""
  })  

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name] : event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(datos.radio, datos.keywords)
  }

  return (

    <Fragment>
      <div className="container">
        <p>Choose who, when or where and search:</p>
        <form onSubmit={handleSubmit}>
          <div className="row m-3 justify-content-center">
            <div className="form-check col-md-3">
              <input 
                type="radio" 
                id="character" 
                value="character" 
                name="radio"
                className="form-check-input" 
                onChange={handleInputChange}
              />
              <label 
                htmlFor="character"
                className="form-check-label"
              >Character</label>
            </div>
            <div className="form-check col-md-3">
              <input 
                type="radio" 
                id="episode" 
                value="episode" 
                name="radio"
                className="form-check-input"
                onChange={handleInputChange}
              />
              <label 
                htmlFor="episode"
                className="form-check-label"
                >Episode</label>
            </div>
            <div className="form-check col-md-3">
              <input 
                type="radio" 
                id="location" 
                value="location" 
                name="radio"
                className="form-check-input" 
                onChange={handleInputChange}
              />
              <label 
                htmlFor="location"
                className="form-check-label"
              >Location</label>
            </div>    
          </div>  

          <div className="row mb-4 justify-content-center">
              <input
                name="keywords"
                type="text"
                className="form-control m-1"
                placeholder="Search here..." 
                onChange={handleInputChange}
              />
          </div>  

          <div className="row justify-content-center">
              <input 
                type="submit"
                value="Go!" 
                className="btn btn-primary m-1"
              />
          </div>
        </form>
      </div>
    </Fragment>
  )
}

export default Search;