import React, { useState } from "react";

const SignUp = () => {
    const [data,setData] = useState({
        username : '',
        email : '',
        password : '',
        confirmpassword : '',
    })
    const {username,email,password,confirmpassword} = data;
    const changeHandler = e =>{
        setData({...data,[e.target.name] : [e.target.value]})
    }
    const submitHandler = e =>{
        e.preventDefault();
        console.log(data);
    }
  return (
    <>
      <form onSubmit={submitHandler}>
        <input type='text' name="username" value={username} onChange={changeHandler} /> <br/><br/>
        <input type='emil' name="email" value={email} onChange={changeHandler} /> <br/><br/>
        <input type='password' name="password" value={password} onChange={changeHandler} /> <br/><br/>
        <input type='password' name="confirmpassword" value={confirmpassword} onChange={changeHandler} /> <br/><br/>
        <input type='submit' name='submit' />
      </form>
    </>
  );
};

export default SignUp;
