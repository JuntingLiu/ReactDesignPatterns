import React from 'react'
// import useCurrentUser from './useCurrentUser'
// import useUser from './useUser'
import useResource from './useResource'

const UserInfo = ({userId}) => {
  const user = useResource(`/users/${userId}`);
  const { name, age, hairColor, hobbies } = user || {}

  return user ? (
    <>
      <h3>{name}</h3>
      <p>Age: {age} years</p>
      <p>Hair Color: {hairColor}</p>
      <h4>Hobbies:</h4>
      <ul>
        {
          hobbies.map(hobby => <li key={hobby}>{hobby}</li>)
        }
      </ul>
    </>
  ) : <p>Loading...</p>
}

export default UserInfo