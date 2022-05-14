import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from './firebase';

import './Login.css'
function Login ()
{
    const navigate = useNavigate();
    const [ email, setEmail ] = useState( '' );
    const [ password, setPassword ] = useState( '' );

    const signIn = e =>
    {
        e.preventDefault();

        auth.signInWithEmailAndPassword( email, password )
            .then( auth =>
            {
                navigate( '/' )
            } )
            .catch( error => alert( error.message ) )

    }

    const register = e =>
    {
        e.preventDefault();
        auth.createUserWithEmailAndPassword( email, password ).then( ( auth ) =>
        {
            // it succesfully created a new user with email and password 
            console.log( auth );
            if ( auth )
            {
                navigate( '/' )
            }
        } ).catch( error => alert( error.message ) )

    }
    return (
        <div className='login' >
            <Link to='/'>
                <img className='login__image' src="https://logowik.com/content/uploads/images/571_amazoncom.jpg " />
            </Link>

            <div className='login__container'>
                <h1>Sign In </h1>
                <form>
                    <h5>E-Mail</h5>
                    <input type='text' value={ email } onChange={ e => setEmail( e.target.value ) } />

                    <h5>Password</h5>
                    <input type='password' value={ password } onChange={ e => setPassword( e.target.value ) } />
                    <button onClick={ signIn } className='login__signInButton'> Sign In </button>
                </form>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas molestiae repellat, doloremque veritatis ullam assumenda est. Enim aut rerum consectetur. Cupiditate doloremque possimus neque ipsum iste vero impedit dicta quisquam!
                </p>

                <button onClick={ register }
                    className='login__registerButton'> Create Your own Amazon Account </button>
            </div>
        </div>
    )
};

export default Login;