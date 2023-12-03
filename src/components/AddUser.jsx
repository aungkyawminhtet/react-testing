import React, { useRef } from 'react'

const AddUser = (props) => {
    const namRef = useRef();
    const passRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
        let user = {
            name : namRef.current.value,
            password : passRef.current.value,
        }
        props.addUser(user);
    }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h3 className='text-center'>Use Ref</h3>
        <div className='mb-2'>
            <label htmlFor="name" className='label-control'>UserName</label>
            <input type="text" className='form-control' id='name' ref={namRef} />
        </div>
        <div className='mb-2'>
            <label htmlFor="pass" className='label-control'>Password</label>
            <input type="password" className='form-control' id='pass' ref={passRef} />
        </div>
        <button className='btn btn-primary'>Submit</button>
      </form>
    </div>
  )
}

export default AddUser
