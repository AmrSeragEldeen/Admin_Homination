
const Dataallpropsal = ({ users }) => {
  return (
    <>
      {users.map((curUser) => {
        const { _id, status, client_Name, provider_Name, service_Name } =
          curUser;

        let button = null;
        if (status === "pending") {
          button = (
            <>
            <div className="btn-group  ">
            <button className="btn btn-primary">Approve</button>
            <button className="btn btn-danger">Reject</button>
            </div>
           
            </>
          );
        } else if (status === "rejected" || status === "accepted") {
          button = <button className = "btn btn-danger"> Delete</button>;
        }

        return (
          <tr key={_id}>
            <td>{status}</td>
            <td>{_id}</td>
            <td>{client_Name}</td>
            <td>{provider_Name}</td>
            <td>{service_Name}</td>
            <td>{button}</td>
          </tr>
        );
      })}
    </>
  );
};

export default Dataallpropsal;
