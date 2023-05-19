const  Dataprovider = ({ users }) => {


    const acceptProvider = async (id) => {
        
    try {
            const res = await fetch(`http://localhost:5000/newproviders/accept/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ status: "accepted" })
            });
            const data = await res.json();
            console.log(data);
            window.location.reload();
        } catch (e) {
            console.error(e);
        }
    }

    const rejectProvider = async (id) => {
        try {
            const res = await fetch(`http://localhost:5000/newproviders/reject/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ status: "rejected" })
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
                    const { _id,  name, email, address } = curUser;
                    
                    
                    return (
                        <tr key={_id}>
                            
                            <td>{_id}</td>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>{address}</td>
                           

                        </tr>
                    )
                })

            }
        </>
    )
}

export default Dataprovider;