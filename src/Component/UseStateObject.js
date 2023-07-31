import React, { useState } from 'react'

 const UseStateObject = () => {

    const [myObject, setMyObject] = useState({
        myName:"Raju das", class:5,
    });
    const ChangeObject = () =>{
       setMyObject({...myObject, myName:"Rahul Bose"})
    }

  return (
    <>
    <div>
       <h1 className='header'> Name:{myObject.myName} $ class: {myObject.class} </h1>
       <button className='btn' onClick={ChangeObject}>Update</button>
    </div>
    </>
    
  )
}

export default UseStateObject