import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className=''>
        <Link to='/'>Home</Link>
        <Link to='/Services/:id'>ForSale</Link>
        <Link to='/Services/:id'>ForRent</Link>
        <Link to='/Services/:id'>PaymentService</Link>
        <Link to='/Appointment'>Appointment</Link>
        <Link to='/About'>About</Link>
        <Link to='/Contact'>Contact</Link>
    </nav>
  )
}

export default Navbar