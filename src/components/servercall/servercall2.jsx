import axios from "axios"
import { useState, React, useEffect } from "react"
import { useParams } from "react-router-dom"



function DataDetail() {
    const { id } = useParams();
    const [data, setdata] = useState([]);
    useEffect(() => {


        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => {
                setdata(res.data)
                
            })
            .catch((error)=>{
                console.log('error')
            })
    },[id])
    return <div className="divprnt">

        <div className="datacrd">
            <h3>Id: {data.id}</h3>
            <h1>NAME: {data.name}</h1>
            <p>email: {data.email}</p>
            <p>Phone: {data.phone}</p>
            <p>Website: {data.website}</p>
        </div>


    </div>
}

export default DataDetail