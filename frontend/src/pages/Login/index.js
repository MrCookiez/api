import React from 'react';
import endpoint from '../../config/endpoint.json';

const Login = () => (
    <div>
        <h2>Hello World Login</h2>
        {/* action={endpoint.login} */}
        <form method='POST' > 
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