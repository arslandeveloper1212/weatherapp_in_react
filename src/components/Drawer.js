import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import List from '@mui/material/List';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemText from '@mui/material/ListItemText';

import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';

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
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Today', 'Air Quality', 'Health & Services'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
             
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
        <ToggleButton style={{padding:0}} value="right" aria-label="right aligned">
          <FormatAlignRightIcon style={{color: "white"}} />
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
