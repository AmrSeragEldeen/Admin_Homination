const Dataallpropsal = ({users}) => {
    return (
        <>
            {
                users.map((curUser) => {
                    const {_id, status,client_Name ,provider_Name,service_Name} = curUser;
                    

                    return (
                        <tr key={_id}>
                        <td>{status}</td>
                        <td>{_id}</td>
                        <td>{client_Name}</td>
                        <td>{provider_Name}</td>
                        <td>{service_Name}</td>

                        
                        </tr>
                    )
                })

            }
        </>
    )
}
export default Dataallpropsal;