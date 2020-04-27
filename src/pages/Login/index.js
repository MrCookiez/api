import React from 'react';
import Layout from '../../layout/Basic';
import endpoint from '../../config/endpoint.json';

const Login = () => (
  <Layout>
    <h2>Hello World Login</h2>
    <form method="POST" action={endpoint.login}>
      <br />
      <label htmlFor="email">Email:</label>
      <input name="email" type="email" />
      <br />
      <label htmlFor="password">Password:</label>
      <input type="password" name="password" />
      <br />
      <br />
      <input type="submit" value="Submit" />
    </form>
  </Layout>
);

export default Login;
