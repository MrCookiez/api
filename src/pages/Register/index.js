import React from 'react';
import endpoint from '../../config/endpoint.json';
import Layout from '../../layout/Basic';

const Register = () => (
  <Layout>
    <h2>Register page</h2>
    <form method="POST" action={endpoint.register}>
      <br />
      <label htmlFor="firstname">First name:</label>
      <input type="text" name="firstname" />
      <br />
      <label htmlFor="lastname">Last name:</label>
      <input type="text" name="lastname" />
      <br />
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" />
      <br />
      <label htmlFor="password">Password:</label>
      <input type="password" name="password" />
      <br />
      <label htmlFor="passwordMatch">Re-type password</label>
      <input type="password" name="passwordMatch" />
      <br />
      <input type="submit" value="Submit" />
    </form>
  </Layout>
);

export default Register;
