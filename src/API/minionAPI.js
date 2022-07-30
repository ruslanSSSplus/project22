import axios from "axios";

//
// export const minionAPI = {
//     getMinion(text) {
//     return axios.get(`https://api.funtranslations.com/translate/minion.json?text=${text}`,).then(res=>console.log(res.data))
// },
// }
//
export const minionAPI = async (text) => {
    return await fetch(`https://api.funtranslations.com/translate/minion.json?text=${text}`).then(response => response.json())
}