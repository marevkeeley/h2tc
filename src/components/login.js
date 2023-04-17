import React, {useState} from 'react';
import secureLocalStorage from 'react-secure-storage';

const Login = (props) => {
    const [pass, setPass] = useState("");
    secureLocalStorage.setItem("password", "h2future")
    const handleSubmit = (e) => {
        const check = secureLocalStorage.getItem("password")
        console.log(check)
        console.log(pass)
        console.log(pass === check)
        if (pass ===  check) {
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