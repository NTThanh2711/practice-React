import axios from "axios"

const fetchAllUser =() => {
    return axios.get("https://reqres.in/api/users?page=1");
    // trả ra một promis, mình hpải làm việc với await, async
}
export {fetchAllUser}; // trả về object thì mình export bao nhiêu biến cũng được