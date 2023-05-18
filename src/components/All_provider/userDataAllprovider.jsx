import axios from "axios";

const UserData = ({ users }) => {


    const acceptProvider = async (id) => {
        try {
            const res = await axios.put(`http://localhost:5000/providers/accept/${id}`, {})
            const data = await res.json();
            console.log(data);
            window.location.reload();
        } catch (e) {
            console.error(e);
        }
    }
    const rejectProvider = async (id) => {
        try {
            const res = await axios.put(`http://localhost:5000/requests/${id}/reject`)
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
                    const { _id, status, name, email, } = curUser;
                    let button = null;
                    if (status === "pending") {
                        button = (
                            
                                <div className="btn-group  ">
                                    <button className="btn btn-primary">Approve</button>
                                    <button className="btn btn-danger">Reject</button>
                                </div>
                         )
                        
                
                        
    
     
       
                        
                    } else if (status === "accepted") {
                        button = <button className="btn btn-danger" onClick={() => rejectProvider(_id)}> Reject</button>;
                    }
                    else if (status === "rejected") {
                        button = <button className="btn btn-primary" onClick={() => acceptProvider(_id)}> Accept</button>;
                    }
                    return (
                        <tr key={_id}>
                            
                            <td>{_id}</td>
                            <td>{name}</td>
                            <td>{email}</td>
                            
                            <td>{button}</td>

                        </tr>
                    )
                })

            }
        </>
    )
}
export default UserData;