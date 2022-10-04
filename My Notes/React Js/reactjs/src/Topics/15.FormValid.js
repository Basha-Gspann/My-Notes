import React, { useState } from "react";

const FormValid = () => {
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
        if(username.length < 5){
            alert("username must be atlest 5 characters");
        }
        else if(password !== confirmpassword){
            alert("passwors are not mattching")
        }
        else{
            console.log(data);
        }
    }
  return (
    <>
      <form onSubmit={submitHandler}>
        <input type='text' name="username" value={username} onChange={changeHandler} /> <br/><br/>
        <input type='emil' name="email" value={email} onChange={changeHandler} /> <br/><br/>
        <input type='password' name="password" value={password} onChange={changeHandler} /> <br/><br/>
        <input type='password' name="confirmpassword" value={confirmpassword} onChange={changeHandler} /> <br/><br/>
        {password !== confirmpassword ?<p>passwords are not mattching</p>:null}
        <input type='submit' name='submit' />
      </form>
    </>
  );
};

export default FormValid
