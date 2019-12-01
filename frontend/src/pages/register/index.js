import React from 'react';
import endpoint from '../../config/endpoint.json';

const Register = () => (
  <div>
    <h2>Register page</h2>
    <form method="POST" action={endpoint.register}>
      <br/>
      <label>First name:</label>
      <input type='text' name='firstname' />
      <br/>
      <label>Last name:</label>
      <input type='text' name='lastname' />
      <br/>
      <label>Email:</label>
      <input type='email' name='email' />
      <br/>
      <label>Password:</label>
      <input type='password' name='password' />
      <br/>
      <label>Re-type password</label>
      <input type='password' name='passwordMatch' />
      <br/>
      <input type='submit' value='Submit' />
    </form>
  </div>
);

export default Register;