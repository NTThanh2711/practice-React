// import axios from "axios"
import axios from "./customize-axios";// không cần phải import instance vì bên file customize-axios chỉ xuất ra một biến thôi vậy nên mình có thể đặt là axios ỏ là gì tùy ý nè
const fetchAllUser =(page) => {
    return axios.get(`/api/users?page=${page}`);// được nối với base url bên file customize-axios
    // trả ra một promis, mình hpải làm việc với await, async
}
export {fetchAllUser}; // trả về object thì mình export bao nhiêu biến cũng được