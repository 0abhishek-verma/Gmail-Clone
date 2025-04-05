import axios from 'axios';


const API_URL='http://localhost:8000'

const API_GMAIL =async(urlObject,payLoad)=>{
    return await axios ({
        method:urlObject.method,
        url: `${API_URL}/${urlObject.endpoint}`,
        data:payLoad,
    })
}


export default API_GMAIL;