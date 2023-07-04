import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from "react";
import Dataallpropsal from './dataallpropsal';
import Table from 'react-bootstrap/Table';
const API = "https://homination.onrender.com/requests";
const ApiData_allpropsal = () => {
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
          <th>status</th>
          <th>id</th>
          <th>client_Name</th>
          <th>provider_Name</th>
          <th>service_Name</th>
          <th>Action</th>
          

        </tr>
      </thead>
      <tbody>
      <Dataallpropsal users={users}/>
        
      </tbody>
    </Table>
    
    </div>
  );
};

export default ApiData_allpropsal;