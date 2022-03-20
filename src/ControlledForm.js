import React, { useState, useEffect } from 'react'

const ControlledForm = () => {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [hairColor, setHairColor] = useState("")
  const [nameInputError, setNameInputError] = useState("")

  useEffect(() => {

    return () => {
      if (name.length < 2) {
        setNameInputError("Name must be two or more characters.");
      } else {
        setNameInputError("")
      }
    }
  }, [name, age, hairColor])


  return (
    <>
      <h2>Controlled Form</h2>
      <form>
        <input
          name="name"
          type="text"
          placeholder='Name'
          value={name}
          onChange={e => setName(e.target.value)}
        />
        {nameInputError && <p>{nameInputError}</p>}
        <input
          name="age"
          type="number"
          placeholder='Age'
          value={age}
          onChange={e => setAge(e.target.value)}
        />
        <input
          name="hairColor"
          type="text"
          placeholder='Hair Color'
          value={hairColor}
          onChange={e => setHairColor(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </>
  )
}

export default ControlledForm