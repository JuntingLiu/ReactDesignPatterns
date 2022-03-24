import React, { useCallback } from 'react'
import axios from 'axios'
// import useCurrentUser from './useCurrentUser'
// import useUser from './useUser'
// import useResource from './useResource'
import useDataResource from './useDataResource'


const serverResource = resourceUrl => async () => {
  const response  = await axios.get(resourceUrl)
  return response.data
}

// const localStorageResource = key => () => {
//   return localStorage.getItem(key);
// }

const UserInfo = ({userId}) => {
  // 注意
  const handleServerResource = useCallback(serverResource(`/users/${userId}`), [userId]);
  const user = useDataResource(handleServerResource);
  console.log("🚀 ~ file: UserInfo.js ~ line 20 ~ UserInfo ~ user", user)
  // const message = useDataResource(localStorageResource('message'))

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