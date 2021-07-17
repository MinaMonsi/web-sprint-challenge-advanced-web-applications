import React, {useState} from "react";
import { axiosWithAuth } from '../helpers/axiosWithAuth';

const Login = () => {
  const [form, setForm] = useState({username:'', password:''})
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
    .post('/login',form)
    .then((res) => {
      console.log(res) //console.log your res to see the data in the console when you enter credentials
      localStorage.setItem('token', res.data.payload);  //token & payload will be stored in localStorage

    })
    .catch(err => console.log(err));
  };

  const error ='';
  //replace with error state

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor='username'>Username: </label>
            <input id='username' name='username' value={form.username} onChange={handleChange}/>
          
          <label htmlFor='password'>Password: </label>
            <input id='password' name='password' value={form.password} onChange={handleChange} type='password' />
          <br/>
          <button id='submit' type='submit'>Login</button>
        </form>
      </div>
      <p id="error" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"