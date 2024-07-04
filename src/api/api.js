import axios from "axios";


export const api = axios.create({
    baseURL:`http://localhost:3000`
})



// export let dialogs = axios.get('http://localhost:3000/dialogs').then((respons)=>{return respons.data});
