const Dataapproveprovider = ({users}) => {


  const deleteProvider = async (id,username) => {
    try {
        const res = await fetch(`https://homination.onrender.com/providers/${id}`, {
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
            const {_id,    name, email, address,username} = curUser;
  
            // Check if the current user's status is "accepted"
            return( <tr key={_id}>
              
              <td>{_id}</td>
              <td>{name}</td>
              <td>{email}</td>
              <td>{address}</td>
              <td>
                    <button className="btn btn-danger" onClick={()=>deleteProvider(_id,username)}>Delete</button>
                    </td>
            </tr>)
              
              
            
              // If the current user's status is not "accepted", return null
            
            }
          )
        }
      </>
    );
  };
  
  export default Dataapproveprovider;