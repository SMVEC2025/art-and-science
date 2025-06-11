import React from 'react'
import { useNavigate } from 'react-router-dom'

function TopHeader() {
   const navigate = useNavigate();

   const handleNavigate=(val)=>{
      navigate(val)
   }
  return (
    <div className='top_header-main'>
 <div className='left'>
    <span>help@smvec.ac.in</span>
    <span>+(402) 763 282 46</span>
 </div>
 <div className='right'>
    <span onClick={()=>handleNavigate('/campus')}>Campus</span>
    <span  onClick={()=>handleNavigate('/department/commerce')}>Departments</span>
    <span  onClick={()=>handleNavigate('/faculty')}>Faculty</span>
    <span  onClick={()=>handleNavigate('')}>SMVEC</span>
    <span  onClick={()=>handleNavigate('/contact-us')}>Contact</span>
 </div>
    </div>
  )
}

export default TopHeader