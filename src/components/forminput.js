import { useState } from 'react'
//custom hook for handling form input logic 
// 1: create a export deafult function with "use" prefix take the initial values in the parameter to set the initialvalues
//2:  initialize -> apply logic _> useeffect for fetching urls , handlechange etc for other logics based on your need
// return {variable , function (with logic)}
export default function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue)

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  // Returns an object with value and onChange properties
  return {
    value,
    onChange: handleChange
  }
}