import BackendAPIService from '../../../shared/api/service/BackendAPIService'
import { useState, useEffect } from 'react'
import { iCreateNewUser } from '../../../shared/interface/Interface';


export const ExpertisView = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [newUser, setNewUser] = useState<iCreateNewUser>({
        username: 'Mowgli',
        password: 'dsdsdd'
    })

    const create = async () => {
        try {
            setLoading(true)
            await BackendAPIService.createUser(newUser)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }

    }

    const fecthData = async () => {
        const response = await BackendAPIService.getAllUsers()
        setUsers(response.data)
    }

    useEffect(() => {
        fecthData()
    }, [loading])

    return (
        <div>
            <h1>BACKEND API</h1>
            <p>USERNAME</p><input onChange={(event) => setNewUser({...newUser, username: event.target.value})}/><br />
            <p>PASSWORD</p><input onChange={(event) => setNewUser({...newUser, password: event.target.value})} /><br />
            <p>AGE</p><input /><br />
            <button onClick={() => create()}>Create user</button><br />
            <hr />
            <h1>Displaying all users</h1>
            {users.map((x: any) => <div><span>{x.username}</span></div>)}
        </div>
    );
}
