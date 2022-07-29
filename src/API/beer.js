import axios from "axios";


export const yesNoAPI = {
    getYesNo() {
    return axios.get(`https://yesno.wtf/api`).then(res=>res.data.image)
},
}

