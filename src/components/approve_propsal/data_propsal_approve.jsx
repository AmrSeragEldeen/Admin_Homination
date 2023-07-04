
const DataApprovePropsal = ({users}) => {


  
  const deleteProvider = async (id,username) => {
    try {
        const res = await fetch(`https://homination.onrender.com/requests/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
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
            const {_id, status,client_Name ,provider_Name,service_Name} = curUser;
  
            
            if (status === "accepted") {
              return (
                <tr key={_id}>
                        <td>{status}</td>
                        <td>{_id}</td>
                        <td>{client_Name}</td>
                        <td>{provider_Name}</td>
                        <td>{service_Name}</td>
                        <td>  
                        <button className="btn btn-danger" onClick={() => deleteProvider(_id,provider_Name)}>Delete</button>
                        </td>
                        
                </tr>
              );
            } else {
              
              return null;
            }
          })
        }
      </>
    );
  };
  
  export default DataApprovePropsal;