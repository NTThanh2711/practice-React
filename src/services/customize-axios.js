import axios from "axios";
// việc gọi instance là việc quy định công việc gọi api sau bao lâu thì cancel, tức là phải set timeout cho lời gọi api
// tức là mình sẽ tạo ra một phiên bản axios, hoạt động theo ý muốn của mình bằng cách lập trình và có thể tái sử dụng lại phiên bản ấy
const instance = axios.create({//sau nàymình thay dổi đường link backend thì chỉ cần thay đổi trong file này thôi
    baseURL: 'https://reqres.in',// dòng này tức là mình sẽ quy định được sever backend, sau này có thay đổi sever backend thì chỉ cần sửa ngay chỗ này thôi
    // timeout : 1000, //đon vị là mili giấy vây nên k cần 
    // headers : {'X-Custom-Header':'foobar'} //chưa cần quan tâm tới cái này vì khi sau khi mình gọi data phía backend của mình quy định data như thế nào thì ms cần customize lại thôi
  });


instance.interceptors.response.use(function (response) {
  return response.data;// trả về như thế này chỉ để lấy không bị thừa data, vì thg axios sẽ trả về những data thừa, cái mình cần chỉ là data.data
}, function (error) {
  return Promise.reject(error);
});  
  export default instance;