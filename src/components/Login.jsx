import React, { useState } from 'react'

const Login = (props) => {
    let [name, setName] = useState("");
    let [password, setPassword] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        let user = {
            name,
            password
        }
        props.addUser(user);
    }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <h2 className='text-center'>Login</h2>
        <div className='mb-2'>
            <label htmlFor="name">UserName</label>
            <input type="text" className='form-control' id='name' value={name} onChange={(e)=>setName(e.target.value)} />
        </div>
        <div className='mb-2'>
            <label htmlFor="password">Password</label>
            <input type="password" className='form-control' id='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <button className='btn btn-primary '>Submit</button>
      </form>
    </div>
  )
}

export default Login
