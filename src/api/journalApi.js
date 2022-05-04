import axios from 'axios'

const journalApi = axios.create({
    baseURL : 'https://vue-daybook-d9193-default-rtdb.firebaseio.com'
})

export default journalApi