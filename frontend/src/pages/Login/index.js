import React from 'react';
import endpoints from '../../config/endpoints.json';

const Login = () => (
    <div>
        <h2>Hello World Login</h2>
        <form method='POST' action={endpoints.login}>
            <br/>
            <label>Email:</label>
            <input type='email' name='email' />
            <br/>
            <label>Password:</label>
            <input type='password' name='password' />
            <br/>
            <br/>
            <input type='submit' value='Submit' />
        </form>
    </div>
);

export default Login;