import React from 'react'
import withEditTableUser from './withEditTableUser'

const UserInfoForm = withEditTableUser(({ user, onChangeUser, onSaveUser, onResetUser }) => {
  const { name, age, hairColor } = user || {}

  return user ? (
    <form>
      <label>
        Name:
        <input type="text" value={name} onChange={e => onChangeUser({ name: e.target.value })}/>
      </label>
      <label>
        age:
        <input type="number" value={age} onChange={e => onChangeUser({ age: e.target.value })}/>
      </label>
      <label>
        Hair Color:
        <input type="text" value={hairColor} onChange={e => onChangeUser({ hairColor: e.target.value })}/>
      </label>
      <button onClick={onSaveUser}>Save</button>
      <button onClick={onResetUser}>Reset</button>
    </form>
  ) : <p>loading...</p>

}, '123')

export default UserInfoForm