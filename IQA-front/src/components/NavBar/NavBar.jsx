import React from 'react'
import {Stack} from '@mui/material';
import {Link} from 'react-router-dom';
import logo from './LogoQA.png';
import { cybersecurityServices } from "../helpers/constants.js";




const NavBar = () => (
  <Stack direction ="row" 
  alignItems="center" 
  p={2} 
  sx={{position:'sticky', background: 'FFFFFF', top:0, justifyContent: 'space-between'}}>


    <Link to="/" style={{display: 'flex', alignItems:'center'}}>
      <img src={logo} alt="logo" height={30} />
    </Link>

{/* Mapear las categorias desde el helper */}
    {cybersecurityServices.map((category) => (
      <button
      className="category-btn">
        <span>{category.icon}</span>
        <span>{category.icon}</span>

      </button>
    ))}

  </Stack>
)

export default NavBar;