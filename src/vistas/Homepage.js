import React from 'react'
import Logout from '../components/Logout'


export default function Homepage({handleLogout}) {
    return (
        <div>
            <Logout handleLogout={handleLogout}/>
        </div>
    )
}
