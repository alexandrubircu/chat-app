import axios from "axios";

export let users = axios.get('http://localhost:3000/user').then((respons)=>{return respons.data});
export let dialogs = axios.get('http://localhost:3000/dialogs').then((respons)=>{return respons.data});
