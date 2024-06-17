import { React, useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import axios from 'axios';


export default function ReadValue() {
    
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://666fc1610900b5f872481ed7.mockapi.io/Login`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])
    return (
        <div className='bdy'>
            <h1>Data</h1>
            <Table>
                <tbody>
  {APIData.map((data) => {
     return (
       <tr>
          <td>{data.Email}</td>
           <td>{data.Password}</td>
           
           </tr>
   )})}
   </tbody>
</Table>
        </div>
    )
}
