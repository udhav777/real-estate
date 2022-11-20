import React,{useState} from 'react'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'
import {BsFillHouseFill} from 'react-icons/bs'
import './Navbar.css'

function Navbar() {
    const[click,setClick]=useState(false);
    const handleClick=()=>setClick(!click)
  return (
    <div className='navbar'>
        <div className='container'>
            <h1><span><BsFillHouseFill/>Real</span>Estate</h1>
            
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li><a href='#'>Home</a> </li>
                <li><a href='#'>Search</a> </li>
                <li><a href='#'>About</a> </li>
                <li><a href='#'>Contact</a> </li>
            </ul>
            <button className='btn'>Sign In</button>
            <button className='btn'>Login In</button>
            <div className='div' onClick={handleClick}>
                {
                    click?(<FaRegTimesCircle className='icon'/>):(<HiOutlineMenuAlt4 className='icon' />)
                }
            </div>

        </div>

    </div>
  )
}

export default Navbar