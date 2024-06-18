import { React, useEffect, useState } from 'react'
import axios from 'axios';


export default function ReadValue() {

    const [ReadData, setReadData] = useState([]);
    useEffect(() => {
        axios.get(`https://666fc1610900b5f872481ed7.mockapi.io/Login`)
            .then((response) => {
                setReadData(response.data);
            })
    }, [])
    return (
        <div className='bdy'>
            <center><h1>Active accounts </h1></center>

            {ReadData.map((data) => {
                return (
                    <ul>
                        <li>{data.email}</li>
                    </ul>
                )
            })}

        </div>
    )
}
