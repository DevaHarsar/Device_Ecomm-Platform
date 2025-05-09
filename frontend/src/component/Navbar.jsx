import React, { useState } from 'react'
import { Menu, ShoppingCart } from "lucide-react";


const Navbar = () => {
    
  return (
    <div className='flex h-10 w-full  justify-between items-center whitespace-normal'>
          <div className='gap-2 flex items-center'>
           <Menu></Menu>
           <h1>Dev Ecommerce</h1>
          </div>
           <ShoppingCart></ShoppingCart>
         
    </div>
  )
}

export default Navbar