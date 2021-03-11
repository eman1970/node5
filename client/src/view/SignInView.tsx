
import { useState, useContext } from 'react'
import { loginCredentials } from '../shared/interface/Interface'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../routes/RoutingPath'
import { UserContext } from '../shared/provider/UserProvider'
import './SignInView.css'



export const SignInView = () => {

    const history = useHistory()
    const [loginCredentials, setLoginCredentials] = useState<loginCredentials>({ username: '', password: '' })
    const [authUser, setAuthUser] = useContext(UserContext)

    const signIn = () => {
        localStorage.setItem('user', loginCredentials.username)
        setAuthUser(loginCredentials)
        history.push(RoutingPath.homeView)


    }


    const handleChange = (event: any) => {
        setLoginCredentials({ ...loginCredentials, [event.target.name]: event.target.value });
        
    };

    return (

        <div>
            <br />

            <form>

              <h1>SignInView</h1>
                <input className="signInForm" placeholder='username'
                    type="text" name="username" onChange={handleChange} /><br />
                <input className="signInForm" placeholder='password'
                    type="text" name="password" onChange={handleChange} />
                <button onClick={() => signIn()}>Sign in</button>
            </form>

        </div>


    )
}