import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { fetchAllUser } from '../services/UserService';
const TableUsers = () => {
  

    // để sử dụng được dữ liệu thì mình cần tới stage của thg react
    const [listUsers, setListUsers] = useState([]);// khởi tạo listUser cont với hàm để cập nhập được biến này là setlistuser
    useEffect(() => {// này là hook của thằng react để có thể gọi api
        //call api
        getUser();// gọi api, sau đó sẽ gọi đến hàm setlistUser ở dưới, ngay lập tức nó sẽ trigger rerender ở trên
    },[])
    
    const getUser = async () =>{ // khi sử dụng await ở dưới thì phải thêm key async ở đây để chờ hành động này
        let res = await fetchAllUser();
        // vì mình sử dụng promise thì phải sử dụng await, async để lấy ra data
        // thằng javascript là bất đồng bộ vì vậy những hành động như gọi API mình phải sử dụng await
        if (res && res.data && res.data.data){//.data đầu tiên là của thg axio, data thứ hai chính của của api trả về 
          //khi api không trả về res thì res.data sẽ sinh ra lỗi từ đó ứng dụng sẽ chhết thẳng cẳng, để check cho mình 
            setListUsers(res.data.data)
        }
    }
    //để kiểm soát được dữ liệu chúng ta sẻ cần sử dụng đến state cảu react
    console.log(listUsers)// lần đầu sẽ in ra mảng rỗng
    return(<>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>email</th>
          <th>Last Name</th>
          <th>first_name</th>
        </tr>
      </thead>
      <tbody>
        {listUsers && listUsers.length >0 && // check có tồn tại biến, và chiều rộng lớn hơn không
        listUsers.map((item , index) =>{// mình sẽ xài map, và bên trongg là map từng cái item và phần tử của nó thôi
                      // item có thể được đặt là  a b c x y z gì cũng dc nè
          return(// trả về một cái table row
                // thêm cho nó vài tham số, ở đây có key tác dụng của nó
                // đó chính là giúp ứng dụng của mình hiệu năng cao hơn, nếu như sau này có sort lại phần tử
                // đừng dùng key là biến index, mất warning của thằng react, sau này sẽ có những cái bug khá thốn 
                //để tránh thì nên thêm vài keyword miễn sao keyword không trùng với chỉ số của mảng
                // key ở đây mình đặt thành chuỗi nha, dấu `` chứ k phải ''
                // lấy trường ở trong phần console.log(listUsers) hiện trong web khi f12
                <tr key ={`users-${index}`}> 
                  <td>{item.id}</td>
                  <td>{item.email}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                </tr>
            )
        })
        }
        
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    
    </>)
}
export default TableUsers;