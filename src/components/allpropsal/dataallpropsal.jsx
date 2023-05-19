
const Dataallpropsal = ({ users }) => {
  const acceptProposal = async (id,provider) => {
    try {
        const res = await fetch(`http://localhost:5000/requests/${id}/accept`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            
            body: JSON.stringify({ provider , status: "accepted" })
            
        });
        const data =  res.json();
        console.log(data);
       
    } catch (e) {
        console.error(e);
    }
}
const rejectProposal = async (id,provider) => {
    try {
        const res = await fetch(`http://localhost:5000/requests/${id}/reject/`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ provider,status: "rejected" })
        });
        const data = await res.json();
        console.log(data);
        window.location.reload();
    } catch (e) {
        console.error(e);
    }
}
  return (
    <>
    {   
        users.map((curUser) => {
            const { _id, status, client_Name, service_Name, provider_Name,  } = curUser;
            let button = null;
            if (status === "pending") {
                button = (
                    <>
                        <div className="btn-group  ">
                            <button className="btn btn-outline-primary" onClick={() => acceptProposal(_id,provider_Name)}>Approve</button>
                            <button className="btn btn-outline-danger" onClick={() => rejectProposal(_id,provider_Name)}>Reject</button>
                        </div>

                    </>
                );
            } else if (status === "accepted") {
              button = <button className="btn btn-outline-danger" onClick={() => rejectProposal(_id,provider_Name)}> Reject </button>;
          }
           
            else if (status === "rejected") {
                button = <button className="btn btn-outline-primary" onClick={() => acceptProposal(_id,provider_Name)}> Accept</button>
            };
            return (
              <tr key={_id}>
              <td>{status}</td>
              <td>{_id}</td>
              <td>{client_Name}</td>
              <td>{provider_Name}</td>
              <td>{service_Name}</td>
              <td>{button}</td>
            </tr>
            )
        })

    }
</>
)
}

export default Dataallpropsal;
