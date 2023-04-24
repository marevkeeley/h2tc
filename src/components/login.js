import React, {useState} from 'react';

/**
 * The allows users to log in with a password.
 * @param {*} props takes the input from the log in and checks it with the password.
 * @returns A screen to enter a password and log in.
 */
const Login = (props) => {
    const [pass, setPass] = useState("");
    const handleSubmit = (e) => {
        if (pass ===  "h2future") {
            /**
             * checks if the value entered into the text box and recorded into state matches the 
             * set password. If not it returns an alert telling users that the password is wrong.
             */
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