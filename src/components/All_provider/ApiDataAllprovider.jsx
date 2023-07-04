import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from "react";
import UserData from './userDataAllprovider';
import Table from 'react-bootstrap/Table';

const API = "https://homination.onrender.com/newproviders/";
const ApiData = () => {
  const [users, setUsers] = useState([]);
  const fetchUsers = async (url) => {
      try {
          const res = await fetch(url);
          const data = await res.json();
          
          if (data.length > 0) {
              setUsers(data);
          }
          console.log(data);
      } catch (e) {
          console.error(e)
      }
  }
  useEffect(() => {
    fetchUsers(API);
}, [])
  return (
    <div>
    

    <Table striped bordered hover>
      <thead>
        <tr>
        
          <th>id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Action</th>
         
          

        </tr>
      </thead>
      <tbody>
      <UserData users={users}/>
        
      </tbody>
    </Table>
    
    </div>
  );
};

export default ApiData;