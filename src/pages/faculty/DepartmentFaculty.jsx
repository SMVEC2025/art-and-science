import React, { useEffect, useState } from 'react'
import TeamItem from './component/TeamItem';
import BreadcrumbTwo from '../../components/breadcrumb/BreadCrumb';
import Navbar from '../../components/header/Navbar';
import Footer from '../../components/footer/Footer';
import { useParams } from 'react-router-dom';
function DepartmentFaculty() {
 const { dept } = useParams();
    const decodedDept = decodeURIComponent(dept);
    const [filteredDepartment, setFilteredDepartment] = useState([])
   

 const leadership_data  = [
  {
    id: 8,
    image: "/assets/img/leadership/leadership-thumb-1.jpg",
    title: "Principal",
    name: "Courtney Henry",
    department:"Department of Basic Sciences",
    socials: [
      { id: 1, iconCls: 'fa-brands fa-facebook-f', link: "https://www.facebook.com/" },
      { id: 2, iconCls: 'fa-brands fa-twitter', link: "https://twitter.com/" },
    ],
  },
  {
    id: 9,
    image: "/assets/img/leadership/leadership-thumb-2.jpg",
    title: "Athletic Assistant",
    name: "Kristin Watson",
    socials: [
      { id: 1, iconCls: 'fa-brands fa-facebook-f', link: "https://www.facebook.com/" },
      { id: 2, iconCls: 'fa-brands fa-twitter', link: "https://twitter.com/" },
    ],
  },
  {
    id: 10,
    image: "/assets/img/leadership/leadership-thumb-3.jpg",
    title: "Principal",
    name: "Chea-Lene Chang",
    socials: [
      { id: 1, iconCls: 'fa-brands fa-facebook-f', link: "https://www.facebook.com/" },
      { id: 2, iconCls: 'fa-brands fa-twitter', link: "https://twitter.com/" },
    ],
  },
  {
    id: 11,
    image: "/assets/img/leadership/leadership-thumb-4.jpg",
    title: "Owner & Founder",
    name: "James Warren",
    socials: [
      { id: 1, iconCls: 'fa-brands fa-facebook-f', link: "https://www.facebook.com/" },
      { id: 2, iconCls: 'fa-brands fa-twitter', link: "https://twitter.com/" },
    ],
  },
  {
    id: 12,
    image: "/assets/img/leadership/leadership-thumb-5.jpg",
    title: "Counselor",
    name: "Johanna Chen",
    socials: [
      { id: 1, iconCls: 'fa-brands fa-facebook-f', link: "https://www.facebook.com/" },
      { id: 2, iconCls: 'fa-brands fa-twitter', link: "https://twitter.com/" },
    ],
  },
  {
    id: 13,
    image: "/assets/img/leadership/leadership-thumb-6.jpg",
    title: "Teacher, History",
    name: "Leticia Aleman",
    socials: [
      { id: 1, iconCls: 'fa-brands fa-facebook-f', link: "https://www.facebook.com/" },
      { id: 2, iconCls: 'fa-brands fa-twitter', link: "https://twitter.com/" },
    ],
  },
  {
    id: 14,
    image: "/assets/img/leadership/leadership-thumb-7.jpg",
    title: "Assistant Teacher",
    name: "Fernando Davila",
    socials: [
      { id: 1, iconCls: 'fa-brands fa-facebook-f', link: "https://www.facebook.com/" },
      { id: 2, iconCls: 'fa-brands fa-twitter', link: "https://twitter.com/" },
    ],
  },
  {
    id: 15,
    image: "/assets/img/leadership/leadership-thumb-8.jpg",
    title: "Athletic Assistant",
    name: "Brennan Davis",
    socials: [
      { id: 1, iconCls: 'fa-brands fa-facebook-f', link: "https://www.facebook.com/" },
      { id: 2, iconCls: 'fa-brands fa-twitter', link: "https://twitter.com/" },
    ],
  },
  {
    id: 16,
    image: "/assets/img/leadership/leadership-thumb-9.jpg",
    title: "Teacher, 1st grade",
    name: "Connie Dodge",
    socials: [
      { id: 1, iconCls: 'fa-brands fa-facebook-f', link: "https://www.facebook.com/" },
      { id: 2, iconCls: 'fa-brands fa-twitter', link: "https://twitter.com/" },
    ],
  },
  {
    id: 17,
    image: "/assets/img/leadership/leadership-thumb-10.jpg",
    title: "Head of School",
    name: "Kristin Watson",
    socials: [
      { id: 1, iconCls: 'fa-brands fa-facebook-f', link: "https://www.facebook.com/" },
      { id: 2, iconCls: 'fa-brands fa-twitter', link: "https://twitter.com/" },
    ],
  },
  {
    id: 18,
    image: "/assets/img/leadership/leadership-thumb-11.jpg",
    title: "Assistant Principal",
    name: "Mike Tyson",
    socials: [
      { id: 1, iconCls: 'fa-brands fa-facebook-f', link: "https://www.facebook.com/" },
      { id: 2, iconCls: 'fa-brands fa-twitter', link: "https://twitter.com/" },
    ],
  },
  {
    id: 19,
    image: "/assets/img/leadership/leadership-thumb-12.jpg",
    title: "Counselor",
    name: "Johanna Chen",
    socials: [
      { id: 1, iconCls: 'fa-brands fa-facebook-f', link: "https://www.facebook.com/" },
      { id: 2, iconCls: 'fa-brands fa-twitter', link: "https://twitter.com/" },
    ],
  }
];


    useEffect(() => {
        const filter = leadership_data.filter(faculty => faculty.department == decodedDept)
        setFilteredDepartment(filter)
        console.log("decodedDept", decodedDept)
    }, [])



  return (
    <>
    
    <BreadcrumbTwo title={`Faculty of ${decodedDept}`}
        subtitle={`Faculty of ${decodedDept}`}/>

     <section className="tp-event-inner-area tp-event-inner-p pt-100 pb-50">
        <div className="container">
          <div className="row">
            {filteredDepartment?.map((item, i) => {
              const delay = i > 9 ? "0.1s" : `.${(i + 1) * 0.1}s`;
              return (
                <div
                  key={item.id}
                  className="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp"
                  data-wow-delay={delay}
                >
                  <TeamItem item={item} instructor={true} />
                </div>
              );
            })}
          </div>
        </div>
      </section> 
      
    </>
   
       )
}

export default DepartmentFaculty