import React, {useState} from 'react';

const Login = (props) => {
    const [pass, setPass] = useState("");
    const handleSubmit = (e) => {
        if (pass ===  "h2future") {
            e.preventDefault();
            props.onFormSwitch('home')
        } else {
             alert("Sorry, that's not it")
        }
    }

    return (
      <body className="App-header">
         <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
      </body>
    );
  }
  
  export default Login;