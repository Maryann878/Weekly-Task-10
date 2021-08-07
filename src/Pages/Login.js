import React from 'react'


export default function Login() {
    return (
        <div>
            <form>
<label for= "uname">Username</label>
<input placeholder="username" class="user" type="text"></input>
<label for= "pword">Password</label>
<input placeholder= "password" class= "pword" type= "text"></input>
<button>Submit</button>
<p>Please login with your username and password</p>

            </form>
        </div>
    )
}

