import { AppBar, Toolbar, Typography } from "@mui/material";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import '../common/app.css'
const Topbar = () => {
  return (
    <AppBar 
      position="fixed"
      sx={{
        width: `calc(100% - ${sizeConfigs.sidebar.width})`,
        ml: sizeConfigs.sidebar.width,
        boxShadow: "unset",
        backgroundColor: colorConfigs.topbar.bg,
        color: colorConfigs.topbar.color
      }}
    >
      <Toolbar >
        <Typography variant="h6" >
          <div className="adminword">Welcome To Admin Panal ...</div>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;