

import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { Box, InputBase, IconButton, useTheme } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { ColorModeContext, tokens } from "../theme/Theme";

const Navbar = ({ toggleSidebar }) => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const colors = tokens(theme?.palette?.mode || "light");

  const textColor = theme.palette.mode === "light" ? colors.grey[900] : colors.grey[100];

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" p={2} bgcolor={colors.primary[400]}>
      {/* Toggle Sidebar Button (Only on smaller screens) */}
      <IconButton onClick={toggleSidebar} className="lg:hidden">
        <FaBars />
      </IconButton>

      {/* Search Box */}
      <Box display="flex" justifyContent="center" flexGrow={1}>
        <Box
          display="flex"
          alignItems="center"
          borderRadius="4px"
          bgcolor={colors.primary[600]}
          px={4}
          py={1}
          width="50%"
          maxWidth="400px"
        >
          <InputBase placeholder="Search..." sx={{ flex: 1, px: 1, color: textColor }} />
          <IconButton>
            <SearchIcon sx={{ color: textColor }} />
          </IconButton>
        </Box>
      </Box>

      {/* Right Side Icons */}
      <Box display="flex" alignItems="center" gap={2}>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon sx={{ color: textColor }} />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon sx={{ color: textColor }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Navbar;

