import Footer from "../../components/footer/Footer"
import Navbar from "../../components/header/Navbar"
import TopHeader from "../../components/header/TopHeader"
import About from "./component/About"
import Counter from "./component/Counter"
import Hero from "./component/Hero"
import HomeCampus from "./component/HomeCampus"
import HomeCta from "./component/HomeCta"
import HomeNewsAndEvents from "./component/HomeNewsAndEvents"
import HomeSocial from "./component/HomeSocial"
import Program from "./component/Program"
import './Home.scss'
function Index() {
  return (
    <div>       
       <Hero/>
       <About/>
       <Counter/>
       <Program/>
       <HomeNewsAndEvents/>
       <HomeCampus/>
       <HomeSocial/>
       <HomeCta/>
       

    </div>
  )
}

export default Index