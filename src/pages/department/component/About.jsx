import React from 'react'

function About({data}) {
  return (
    <div className='ug-about'>
        <div className='left'>
         <img src="https://images.pexels.com/photos/4476375/pexels-photo-4476375.jpeg" alt="" />
        </div>
        <div className='right'>
            <h3>{data.heading}</h3>
            <p>
              {data.para}
            </p>
            <button>HOD and faculties</button>
            <button>Events</button>
        </div>
    </div>
  )
}

export default About