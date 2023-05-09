const Dataapproveprovider = ({users}) => {
    return (
      <>
        {
          users.map((curUser) => {
            const {_id, status, name, email, address} = curUser;
  
            // Check if the current user's status is "accepted"
            if (status === "accepted") {
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
  
  export default Dataapproveprovider;