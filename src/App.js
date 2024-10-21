import { useState } from 'react';
import './App.css';

function App() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showInput, setShowInput] = useState(true);
  const [msg, setMsg] = useState("");
  const [showMsg, setShowMsg] = useState(false);
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(username==="user" && password==="password"){
      setMsg("Welcome, user!");
      setShowInput(false);
    }else{
      setMsg("Invalid username or password");
    }    
    setShowMsg(true);
  };
  return (
    <div className="App">
       <div>
        <h3>Login Page</h3>
        {showMsg && <p>{msg}</p>}
        {showInput && 
        <form onSubmit={handleSubmit}>
          <div>
            <label for="username">Username : </label>
            <input type="text" id="username" onInput={(e)=>setUsername(e.target.value)} value={username} required/>
          </div>
          <div>
            <label for="password">Password : </label>
            <input type="password" id="password" onInput={(e)=>setPassword(e.target.value)} value={password} required/>
          </div>
          <div> 
            <button type="submit">Submit</button>
          </div>
        </form>
        }
       </div>
    </div>
  );
}

export default App;
