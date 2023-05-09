const DataRejectPropsal = ({users}) => {
    return (
      <>
        {
          users.map((curUser) => {
            const {_id, status,client_Name ,provider_Name,service_Name} = curUser;
  
            // Check if the current user's status is "accepted"
            if (status === "rejected") {
              return (
                <tr key={_id}>
                        <td>{status}</td>
                        <td>{_id}</td>
                        <td>{client_Name}</td>
                        <td>{provider_Name}</td>
                        <td>{service_Name}</td>
                        <td>
                        <button className="btn btn-danger">Delete</button>
                        </td>
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
  
  export default DataRejectPropsal;