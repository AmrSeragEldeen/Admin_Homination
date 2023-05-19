import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from "react";
import Dataprovider from './data_provider';
import Table from 'react-bootstrap/Table';

const API = "http://localhost:5000/newproviders/";
const ApiDataprovider = () => {
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
          
         
          

        </tr>
      </thead>
      <tbody>
      <Dataprovider users={users}/>
        
      </tbody>
    </Table>
    
    </div>
  );
};

export default ApiDataprovider;