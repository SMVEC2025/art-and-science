import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { 
  FaBriefcase, FaChartLine, FaCoins, FaFileSignature, FaGavel,
  FaUserTie, FaChartBar, FaLaptopCode, FaDesktop, FaKeyboard, FaBrain,
  FaAtom, FaMicroscope, FaBookOpen, FaUsers, FaDna, FaLeaf,
  FaAppleAlt, FaUtensils, FaVideo, FaNewspaper
} from 'react-icons/fa'
function Home({title}) {
    const { program } = useParams();
    const decodedProgram = decodeURIComponent(program);
    const [currentProgram, setCurrentProgram] = useState("");
    const [programBar,setProgramBar]=useState(false)
    const navigate = useNavigate();
    const ugPrograms = [
        {
            department: "Department of Professional Studies",
            icons: <FaChartLine />,
            programs: [
                "B.Com Professional Accounting",
                "B.Com Cost and Management Accounting"
            ]
        },
        {
            department: "Department of Commerce",
            icons: <FaCoins  />,
            programs: [
                "B.Com",
                "B.Com Accounting and Finance"
            ]
        },
        {
            department: "Department of Corporate Secretary Ship",
            icons: <FaFileSignature  />,
            programs: [
                "B.Com Corporate Secretaryship",
                "B.Com Computer Applications"
            ]
        },
        {
            department: "Department of Management",
            icons: <FaUserTie  />,
            programs: [
                "BBA",
                "BBA Fintech and Digital Banking"
            ]
        },
        {
            department: "Department of Computer Science",
            icons: <FaLaptopCode  />,
            programs: [
                "B.Sc Computer Science",
                "B.Sc Data Science and Analytics"
            ]
        },
        {
            department: "Department of Computer Applications",
            icons: <FaKeyboard  />,
            programs: [
                "BCA"
            ]
        },
        {
            department: "Department of Basic Sciences",
            icons: <FaAtom />,
            programs: [
                "B.Sc. Physics",
                "B.Sc. Chemistry",
                "B.Sc Mathematics"
            ]
        },
        {
            department: "Department of Humanities",
            icons: <FaBookOpen  />,
            programs: [
                "Tamil",
                "English",
                "French"
            ]
        },
        {
            department: "Department of Bio Sciences",
            icons: <FaDna  />,
            programs: [
                "B.Sc Biotechnology",
                "B.Sc Microbiology"
            ]
        },
        {
            department: "Department of Food Sciences",
            icons: <FaAppleAlt  />,
            programs: [
                "B.Sc Nutrition and Dietetics"
            ]
        },
        {
            department: "Department of Media Studies",
            icons: <FaVideo  />,
            programs: [
                "B.Sc. Visual Communication",
                "B.A Journalism & Mass communication"
            ]
        }
    ];
    const handleProgramClick = (programName) => {
        const formatted = encodeURIComponent(programName);
        navigate(`/departments/${formatted}`);
    };

    return (
        <header className='ug-header-main' style={{backgroundImage:"url('https://smvec.ac.in/wp-content/uploads/2024/06/Infrastructure_2.webp')"}}>
            <div className="content">
                <h2>{title}</h2>
                <p>This department fosters professional growth through industry-relevant training and real-world skill development. </p>
                <div className="button-container">
                   <button>Enquire Now</button>
                </div>
            </div>


           <div className="layer"></div>
            {/* <div className='programs-container'>
                {ugPrograms.map((program, index) => (
                    <div onClick={() => { handleProgramClick(program.department) }} className="items">{program.department}</div>
                ))}
            </div> */}
          <div className="programbar">
             <div className={`btn ${programBar?"true":""}`} onMouseEnter={()=>setProgramBar(true)} >
                Program
             </div>
              <div  className={`content ${programBar?"open":"close"}`} onMouseLeave={()=>setProgramBar(false)}>
                <h1>Programs</h1>
                  <div className='items'>
                    
                {ugPrograms.map((program, index) => (
                    <div onClick={() => { handleProgramClick(program.department) }} className="itemlist">
                        <div className="icons">
                            {program.icons}
                        </div>
                        <h3>
                            {program.department}
                        </h3>
                    </div>
                ))}
            </div>
              </div>
          </div>
        </header>
    )
}

export default Home