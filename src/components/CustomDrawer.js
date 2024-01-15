import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import SettingsIcon from '@mui/icons-material/Settings';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import List from '@mui/material/List';
import CloseIcon from '@mui/icons-material/Close';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import { Divider, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function CustomDrawer() {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 350 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box component="div" sx={{ display: "flex", paddingLeft: "15px", paddingRight: "20px", margin: "20px 0px", justifyContent: "space-between" }}>
        <Box component="div" sx={{ flexDirection: "row", display: "flex" }} >
          <SettingsIcon />
          <Typography sx={{ paddingLeft: "4px" }}>Settings</Typography>
        </Box>
        <CloseIcon sx={{ cursor: "pointer" }} />
      </Box>
      <Typography sx={{ fontSize: "12px", paddingLeft: "18px", color: "#878787", marginBottom: "10px" }}>Rawalpindi, Punjab Weather</Typography>
      <Divider variant="middle" />

      <List>
        {['Today', 'AirQuality', 'Health&Services'].map((text, index) => (
          <ListItem key={text} sx={{ color: '#878787' }} disablePadding>
            <ListItemButton component={Link} to={index === 0 ? '/' : `/${text}`}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

    </Box>
  );

  return (
    <div>
      <ToggleButtonGroup

        value={state.right ? 'right' : undefined}
        exclusive
        onChange={() => setState({ ...state, right: !state.right })}
        aria-label="text alignment"
      >
        <ToggleButton style={{ padding: 0 }} value="right" aria-label="right aligned">
          <FormatAlignRightIcon style={{ color: "white" }} />
        </ToggleButton>
      </ToggleButtonGroup>

      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer('right', false)}
      >
        {list('right')}
      </Drawer>
    </div>
  );
}
