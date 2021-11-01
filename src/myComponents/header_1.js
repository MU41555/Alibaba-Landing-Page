import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Item><img className="" style={{width : "10rem"}} src="https://s.alicdn.com/@img/tfs/TB1pDDmmF67gK0jSZPfXXahhFXa-2814-380.png" alt="" srcset="" /></Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
              <select name="" id="">
                  <option value="">Products</option>
                  <option value="">Suppliers</option>
              </select>
              <input type="text" value="What are you looking for..."/> <CameraAltOutlinedIcon />
              <Button variant="outlined" startIcon={<SearchIcon />}>
        Search
      </Button>
          </Item>
        </Grid>
        <Grid item xs={1}>
          <Item><PersonOutlineOutlinedIcon /><p>Sign in <br/>Join free</p></Item>
        </Grid>
        <Grid item xs={1}>
          <Item><i class="fas fa-comment-alt-dots"></i><p>Messages</p></Item>
        </Grid>
        <Grid item xs={1}>
          <Item><i class="fas fa-hand-holding-usd"></i><p>Orders</p></Item>
        </Grid>
        <Grid item xs={1}>
          <Item><ShoppingCartOutlinedIcon /><p>Cart</p></Item>
        </Grid>
      </Grid>
    </Box>
  );
}
