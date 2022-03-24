import React, { useEffect, useState } from 'react'
import axios from 'axios'

const withEditableUser = (Component, userId) => {
  return props => {
    const [originalUser, setOriginalUser] = useState(null)
    const [user, setUser] = useState(null)

    useEffect(() => {
      (async () => {
        const response = await axios.get(`/users/${userId}`)
        setOriginalUser(response.data)
        setUser(response.data)
      })()
    }, [])

    const onChangeUser = changes => {
      setUser({...user, ...changes})
    }

    const onSaveUser = async (e) => {
      e.preventDefault();
      const response = await axios.post(`/users/${userId}`, { user });
      setOriginalUser(response.data);
      setUser(response.data);
    }

    const onResetUser = (e) => {
      e.preventDefault();
      setUser(originalUser)
    }

    return (
      <Component
        {...props}
        user={user}
        onChangeUser={onChangeUser}
        onSaveUser={onSaveUser}
        onResetUser={onResetUser} />
    )
  }
}

export default withEditableUser