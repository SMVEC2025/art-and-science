import React from 'react'
import Home from '../component/Home'
import Footer from '../../../components/footer/Footer'
import About from '../component/About'
import Program from '../../home/component/Program'
import HomeCta from '../../home/component/HomeCta'
import HomeNewsAndEvents from '../../home/component/HomeNewsAndEvents'
import MissionVision from '../component/MissionAndVision'
import Navbar from '../../../components/header/Navbar'

function BasicScience() {

  const aboutData={
    heading:"Department of Basic Science",
    para:"The Department of Professional Studies at Sri Manakula Vinayagar Engineering College is a hub for excellence in career-focused education, designed to align students with industry standards and future career paths. Established with the vision to offer programs that combine academic rigor with real-world applicability, the department empowers students through a curriculum that integrates professional certifications, experiential learning, and industry exposure.At SMVEC, the Department of Professional Studies offers specialized undergraduate programs that blend foundational knowledge in arts and science with professional disciplines like Business Analytics, Digital Marketing, FinTech, Data Science, Aviation, Hospitality Management, and more. The programs are structured to meet the needs of today’s fast-evolving job markets, where interdisciplinary skills and adaptability are crucial."
  }
  const programDetails=[
    {
      id:1,
      name:"B.sc Physics",
      type:"UG",
      duration:"3",
      dept:"Department of Basic Science"
    },
     {
      id:2,
      name:"B.sc Chemistry",
      type:"UG",
      duration:"3",
      dept:"Department of Basic Science"

    },
     {
      id:3,
      name:"B.sc Mathematics",
      type:"UG",
      duration:"3",
      dept:"Department of Basic Science"

    }
  ]
  return (
   <>
   
    <Home title="Department of Basic Science"/>
    <About data={aboutData}/>
    <MissionVision/>
    <Program programDetail={programDetails}/>
    <HomeNewsAndEvents title="SMVEC Events"/>
    <HomeCta/>
    
   </>
  )
}

export default BasicScience