// const UserData = ({ users }) => {


//     const acceptProvider = async (id) => {
//         try {
//             const res = await fetch(`http://localhost:5000/providers/accept/${id}`, {
//                 method: "PUT",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({ status: "accepted" })
//             });
//             const data = await res.json();
//             console.log(data);
//             window.location.reload();
//         } catch (e) {
//             console.error(e);
//         }
//     }
//     const rejectProvider = async (id) => {
//         try {
//             const res = await fetch(`http://localhost:5000/providers/reject/${id}`, {
//                 method: "PUT",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({ status: "rejected" })
//             });
//             const data = await res.json();
//             console.log(data);
//             window.location.reload();
//         } catch (e) {
//             console.error(e);
//         }
//     }


//     return (
//         <>
//             {   
//                 users.map((curUser) => {
//                     const { _id, status, name, email, address } = curUser;
//                     let button = null;
//                     if (status === "pending") {
//                         button = (
//                             <>
//                                 <div className="btn-group  ">
//                                     <button className="btn btn-primary">Approve</button>
//                                     <button className="btn btn-danger">Reject</button>
//                                 </div>

//                             </>
//                         );
//                     } else if (status === "accepted") {
//                         button = <button className="btn btn-danger" onClick={() => rejectProvider(_id)}> Reject</button>;
//                     }
//                     else if (status === "rejected") {
//                         button = <button className="btn btn-primary" onClick={() => acceptProvider(_id)}> Accept</button>;
//                     }
//                     return (
//                         <tr key={_id}>
//                             <td>{status}</td>
//                             <td>{_id}</td>
//                             <td>{name}</td>
//                             <td>{email}</td>
//                             <td>{address}</td>
//                             <td>{button}</td>

//                         </tr>
//                     )
//                 })

//             }
//         </>
//     )
// }
// export default UserData;