import DashboardPageLayout from "../pages/new provider/DashboardPageLayout";
import { RouteType } from "./config";

import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import Approveprovider from "../pages/new provider/Approv_provider";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Rejectprovider from "../pages/new provider/reject_provider";
import ComponentPageLayout from "../pages/component/ComponentPageLayout";
import AddHomeOutlinedIcon from '@mui/icons-material/AddHomeOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import AlertPage from "../pages/component/proposal_approve";
import ButtonPage from "../pages/component/propsal_reject";
import Appending from "../pages/new provider/DefaultPage";
import Home from "../pages/HOME/The_Home";
import Allpropasal from "../pages/component/Allpropasal";
import Showallprovider from "../pages/regestration/Show_allprovider";
const appRoutes: RouteType[] = [
   
  {
    path: "/Home",
    element: <Home />,
    state: "Home",
    sidebarProps: {
      displayText: "Home",
      icon: <AddHomeOutlinedIcon />
    }
  },
  {
    path: "/dashboard",
    element: <DashboardPageLayout />,
    state: "dashboard",
    sidebarProps: {
      displayText: "New Provider",
      icon: <SupervisorAccountOutlinedIcon />
    },
    child: [
      
      {
        path: "/dashboard/Appending",
        element: <Appending />,
        state: "dashboard.Appending",
        sidebarProps: {
          displayText: "All New"
        },
      },
      // {
      //   path: "/dashboard/approveprovider",
      //   element: <Approveprovider />,
      //   state: "dashboard.Approveprovider",
      //   sidebarProps: {
      //     displayText: "pending"
      //   }
      // },
      {
        path: "/dashboard/Rejectprovider",
        element: <Rejectprovider/>,
        state: "dashboard.Rejectprovider",
        sidebarProps: {
          displayText: "Rejected"
        }
      }
    ]
  },
  //------------------------------------------//
  {
    path: "/Showallprovider",
    element: <Showallprovider />,
    state: "Home",
    sidebarProps: {
      displayText: "Providers",
      icon: <PersonAddIcon />
    }
  },
  // {
  //   path: "/dashboard",
  //   element: <DashboardPageLayout />,
  //   state: "dashboard",
  //   sidebarProps: {
  //     displayText: "registed provider",
  //     icon: <SupervisorAccountOutlinedIcon />
  //   },
  //   child: [
      
  //     {
  //       path: "/dashboard/Showallprovider",
  //       element: <Showallprovider />,
  //       state: "dashboard.Showallprovider",
  //       sidebarProps: {
  //         displayText: "All provider"
  //       },
  //     },
      
  //   ]
  // },
  {
    path: "/component",
    element: <ComponentPageLayout />,
    state: "component",
    sidebarProps: {
      displayText: "Proposal",
      icon: <ReceiptLongOutlinedIcon />
    },
    child: [
      {
        path: "/component/Allpropsal",
        element: <Allpropasal />,
        state: "Proposal.Allpropasal",
        sidebarProps: {
          displayText: "AllPropasol"
        }
      
      }
      ,
      {
        path: "/component/Approved",
        element: <AlertPage />,
        state: "component.Approved",
        sidebarProps: {
          displayText: "Approved"
        },
      },
      {
        path: "/component/button",
        element: <ButtonPage />,
        state: "component.button",
        sidebarProps: {
          displayText: "Rejected"
        }
      }
    ]
  },
  


];

export default appRoutes;