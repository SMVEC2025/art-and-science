import React from 'react'

function HodSection({hodData}) {
  return (
    <div className='hod_main'>
        <div className='container'>
        <div className='left'>
             <img src="https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2022/05/5-1-scaled.jpg" alt="" />
             <h3>Dr.Kavitha A</h3>
             <p>Head of the Deparrtment</p>
        </div>
        <div className='right'>
            <h2>Welcome Message</h2>
            <p>The Department of Commerce has consistently improved its academic, research, and placement success. It provides a variety of innovatively created programs, with curricula that are continually updated to meet the changing needs of the industry and main stakeholders. Students are encouraged to participate in Internships and micro Projects as part of their curriculum to enhance their academic knowledge with real-world experience and are motivated to conduct and participate in events and get involved in activities of social relevance. With such inputs, our students are hardworking, practical-oriented, and effective in any work environment. The distinguished faculty members combine their academic excellence and real-world experience with dedication and commitment. I welcome you to be a part of our journey towards being a world-class center of excellence in education and research.</p>
        </div>
        </div>
    </div>
  )
}

export default HodSection