import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
const ApiDataChart = () => {
    const API = "https://homination.onrender.com/requests";
    const [users, setUsers] = useState([]);
  
    const fetchUsers = async (url) => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        if (data.length > 0) {
          setUsers(data);
        }
        console.log(data);
      } catch (e) {
        console.error(e);
      }
    };
  
    useEffect(() => {
      fetchUsers(API);
    }, []);
  
    // Calculate the counts for each status


    const newProvidersCount = users.filter(
      (user) => user.status === "pending"
    ).length;
    const acceptedProvidersCount = users.filter(
      (user) => user.status === "accepted"
    ).length;
    const rejectedProvidersCount = users.filter(
      (user) => user.status === "rejected"
    ).length;
  
    // Prepare data for the pie chart


    const pieChartData = {
      labels: ["New Providers", "Accepted Providers", "Rejected Providers"],
      datasets: [
        {
          data: [newProvidersCount, acceptedProvidersCount, rejectedProvidersCount],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        },
      ],
    };
  
    return (
      <div>
    
  
        <Doughnut data={pieChartData} />
      </div>
    );
  };
  
export default ApiDataChart;