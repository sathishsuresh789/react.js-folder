import axios from "axios"
import { useEffect, useState, React } from "react"
import { Link } from "react-router-dom"





function ServerCall() {

    const [data, setdata] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users/')
            .then((res) => {
                setdata(res.data)
                
            })
            .catch((error)=>{
                console.log('error')
            })
    },[])
    return <div>
        <h1>Names</h1>
   { data.map((ele)=>{
        return <div className="elems" key={ele.id}>
            <Link to={`/${ele.id}`} >{ele.id}.{ele.username}</Link> 
        </div>
    })
    }

    </div>

}

export default ServerCall