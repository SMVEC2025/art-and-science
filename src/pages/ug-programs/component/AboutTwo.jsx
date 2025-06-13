import mainimg from  "/assets/img/board/auditorium.jpg"



export default function AboutTwo({spacing='pt-115 pb-90'}) {
  return (
    <section className={`about-area ${spacing} grey-bg `}>
                     <img className="mainimage" src={mainimg} alt="thumb-img" style={{height:'auto'}}/>
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="tp-about-4-wrapper mb-75 wow fadeInUp" data-wow-delay=".3s">
                     <h2 className="tp-about-4-headerone text-center">Diverse and Industry-Aligned Programs</h2>
                     <p className="text-center">At SMVEC School of Arts and Science, we offer a wide range of undergraduate and postgraduate programs across Arts, Commerce, Management, and Science disciplines. Each program is thoughtfully designed to combine academic rigor with practical exposure, ensuring students gain the skills and confidence needed to thrive in today’s competitive world. Our curriculum is regularly updated to meet industry standards and foster interdisciplinary learning.

</p>
                  </div>
               </div>
            </div>
            
         </div>
      </section>
  )
}
