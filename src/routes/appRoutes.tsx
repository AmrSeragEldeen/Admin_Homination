import DashboardPageLayout from "../pages/new provider/DashboardPageLayout";
import { RouteType } from "./config";
import DefaultPage from "../pages/new provider/DefaultPage";
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import AnalyticsPage from "../pages/new provider/Approv_provider";
import SaasPage from "../pages/new provider/reject_provider";
import ComponentPageLayout from "../pages/component/ComponentPageLayout";
import AddHomeOutlinedIcon from '@mui/icons-material/AddHomeOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import AlertPage from "../pages/component/proposal_approve";
import ButtonPage from "../pages/component/propsal_reject";
import Home from "../pages/HOME/The_Home";
import Allpropasal from "../pages/component/Allpropasal";
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
        path: "/dashboard/default",
        element: <DefaultPage />,
        state: "dashboard.default",
        sidebarProps: {
          displayText: "All provider"
        },
      },
      {
        path: "/dashboard/analytics",
        element: <AnalyticsPage />,
        state: "dashboard.analytics",
        sidebarProps: {
          displayText: "Approved"
        }
      },
      {
        path: "/dashboard/saas",
        element: <SaasPage />,
        state: "dashboard.saas",
        sidebarProps: {
          displayText: "Rejected"
        }
      }
    ]
  },
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