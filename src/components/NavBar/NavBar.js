import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <div>
      <img className='netflixLogo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
      <div className='iconDiv'>

      <i class="bi bi-search searchIcon"></i>
      <i className="bi bi-bell bellIcon"></i>
      </div>
      <img className='avatarLogo' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" />
    </div>
  )
}

export default NavBar

