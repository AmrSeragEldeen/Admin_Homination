const Datarejectprovider = ({users}) => {
   const deleteProvider = async (id,username) => {
    try {
        const res = await fetch(`http://localhost:5000/requests/${id}`, {
            method:"DELETE",
            body:JSON.stringify({username})
      
          })
      
          
        const data = await res.json();
        console.log(data);
       
    } catch (e) {
        console.error(e);
    }
} 
    return (
      <>
        {
          users.map((curUser) => {
            const {_id, status, name, email, address} = curUser;
  
            // Check if the current user's status is "accepted"
            if (status === "rejected") {
              return (
                <tr key={_id}>
                  <td>{status}</td>
                  <td>{_id}</td>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{address}</td>
                  
                </tr>
              );
            } else {
              // If the current user's status is not "accepted", return null
              return null;
            }
          })
        }
      </>
    );
  };
  
  export default Datarejectprovider;