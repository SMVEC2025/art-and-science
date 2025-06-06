import { FaUniversity } from "react-icons/fa";


const tutorData = [
  {
    id: 1,
    icon: <FaUniversity />,
    title: "Professional Educators",
    description: "Get one-on-one help from our subject matter experts.",
    delay: ".3s",
  },
  {
    id: 2,
    icon: <FaUniversity />,
    title: "Real-Time Support",
    description: "Ask questions over live chat or schedule a virtual meeting.",
    delay: ".5s",
  },
  {
    id: 3,
    icon: <FaUniversity />,
    title: "Free Access",
    description: "Every course offers online tutoring at no additional charge.",
    delay: ".7s",
  },
];


export default function SectionTwo() {
  return (
    <section className="tp-about-tutor-area pt-110 pb-90">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-6">
            <div className="tp-about-tutor-heading mb-130">
              {/* <div className="tp-about-tutor-subtitle d-flex align-items-center">
                <span><WorldSvg /></span>
                <p>Know about classes</p>
              </div> */}
              <h3 className="tp-about-tutor-title">We create unique <br />
                digital media experiences.</h3>
            </div>
          </div>
         
        </div>
        <div className="row">
          {tutorData.map((item, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay={item.delay}
            >
              <div className="tp-tutor-item about text-center mb-30">
                <div className="tp-tutor-icon">
                  <span style={{color:"white"}}>{item.icon}</span>
                </div>
                <div className="tp-tutor-content">
                  <h4 className="tp-tutor-title">
                    <a href="#">{item.title}</a>
                  </h4>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
