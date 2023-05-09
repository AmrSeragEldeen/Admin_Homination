const UserData = ({users}) => {
    return (
        <>
            {
                users.map((curUser) => {
                    const {_id, status,name ,email,address} = curUser;
                    

                    return (
                        <tr key={_id}>
                        <td>{status}</td>
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
export default UserData;