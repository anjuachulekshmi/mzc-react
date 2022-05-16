import React, { useState } from 'react'

const Profile = () => {
    var[name,setName]=useState("Anju")
    const changeName=()=>
    {
        setName(
            name="Lekshmi"
        )
    }
  return (
    <div>logged in as {name}
    <button onClick={changeName} className='btn btn-success'>Change Name</button></div>
  )
}

export default Profile