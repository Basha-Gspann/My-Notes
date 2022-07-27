import React,{useState} from 'react';

const OnChange = () => {

    const [user,setUser] = useState('');
    const handle = e =>{
        setUser(e.target.value)
    }

  return (
    <div>
        <input type="text" placeholder="Please Enter" value={user} name="user" onChange={handle} />
        <br/>
        {user}
    </div>
  )
}

export default OnChange