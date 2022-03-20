import React from 'react'

const UncontrolledForm = () => {
  const nameInput = React.createRef();
  const ageInput = React.createRef();
  const hairColorInput = React.createRef();

  const handleSubmit = (e) => {
    // 阻止表单提交时默认行为
    e.preventDefault();
    console.log(nameInput.current.value);
    console.log(ageInput.current.value);
    console.log(hairColorInput.current.value);
  }

  return (
    <>
      <h2>Uncontrolled Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder='Name' ref={nameInput}/>
        <input type="number" name="age" placeholder='Age' ref={ageInput}/>
        <input type="text" name="hairColor" placeholder='Hair Color' ref={hairColorInput}/>
        <input type="submit" value={"submit"} />
      </form>
    </>
  )
}

export default UncontrolledForm