import React from 'react'

function Header({title}) {
  return (
    <div className='home-header'>
        <h1 className='title'>{title}</h1>
    </div>
  )
}

export default Header