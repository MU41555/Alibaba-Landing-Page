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
import { border, borderColor, } from '@mui/system';


export default function BasicGrid() {
  return (
    
      <Grid container spacing={0} className="parent">
        <Grid item xs={2} className="child_6">
          <div><img className="" style={{ width: "12rem" }} src="https://s.alicdn.com/@img/tfs/TB1pDDmmF67gK0jSZPfXXahhFXa-2814-380.png" alt="" srcset="" /></div>
        </Grid>
        <Grid item xs={7}>
          <div className="child_1">
            <select name="" id="" className="child_5 ">
              <option value="">Products</option>
              <option value="">Suppliers</option>
            </select>
            <input className="child_2" type="text" placeholder="What are you looking for..." />
            <CameraAltOutlinedIcon sx={{ height: "40px",width:"2rem", color:"gray", marginBottom:"3px",paddingRight:"7px", border: "2px solid orangered", borderLeft:"none" }} />
            <Button className="child_3" sx={{color:"white", height: "40px",width:"8rem",marginBottom:"3px", background: "#ff6f00", border: "orangered", borderBottomRightRadius: "50px", borderTopRightRadius:"50px" }} variant="outlined" startIcon={<SearchIcon />}>
              Search
            </Button>
          </div>
        </Grid>
        <Grid item xs={1} className="child_4">
          <div><PersonOutlineOutlinedIcon sx={{fontSize:"2.7rem", fontWeight:""}}/></div>
          <div className="design_1"><p>Sign in <br />Join free</p></div>
        </Grid>
        <Grid item xs={.5} className="child_">
          <div  className="design_2"><i class="fas fa-comment-alt-dots"></i><p>Messages</p></div>
        </Grid>
        <Grid item xs={.7} className="child_">
          <div className="design_2"><i class="fas fa-hand-holding-usd"></i><p>Orders</p></div>
        </Grid>
        <Grid item xs={.3} className="child_">
          <div className="design_2"><ShoppingCartOutlinedIcon /><p>Cart</p></div>
        </Grid>
      </Grid>
    
  );
}
