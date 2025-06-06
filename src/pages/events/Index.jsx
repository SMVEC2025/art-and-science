import React from 'react'
import Navbar from '../../components/header/Navbar'
import BreadcrumbTwo from '../../components/breadcrumb/BreadCrumb'
import Footer from '../../components/footer/Footer'
import AllEventSection from './components/AllEventSection'
import './styles/Event.css'
function Index() {
    const event =[
  {
    _id: '1798a11e-b8d2-487d-9297-9021d34657ac',
    category: 'music',
    color: 'orange',
    desc: "Get ready for a boot-stompin' good time at the Country Music Festival in Nashville. Experience live performances of your favorite country hits and enjoy the vibrant atmosphere.",
    imgSrc: {
      alt: 'event 9',
      image: 'https://cdn.sanity.io/images/1a142z34/production/3f4a6e2d948192addea8d3189ff191bc0c394274-1750x900.png'
    },
    location: 'Nashville, USA',
    longTitle: 'Country Music Festival - A Night of Country Hits',
    organizer: 'Sarah Johnson',
    price: 65,
    slug: 'country-music-festival',
    time: '08.00 pm - 11.00 pm',
    title: 'Country Music Festival'
  },
  {
    _id: '1fb59e4b-f5b0-4739-86b3-9dd9b11d30a0',
    category: 'music',
    color: 'orange',
    desc: 'Experience the magic of live music in the heart of New York City. This concert features some of the most talented musicians performing your favorite songs. Get ready for a night to remember!',
    imgSrc: {
      alt: 'event 2',
      image: 'https://cdn.sanity.io/images/1a142z34/production/2a7b277c42bdba1468d33f95ed777bc20d4a2945-1750x900.png'
    },
    location: 'New York, USA',
    longTitle: 'Live Music Concert - An Unforgettable Night of Music',
    organizer: 'Sarah Johnson',
    price: 60,
    slug: 'live-music-concert',
    time: '07.30 pm - 11.00 pm',
    title: 'Live Music Concert'
  },
  {
    _id: '43973284-4b7f-42b8-aa31-62bf80d81499',
    category: 'school',
    color: 'blue',
    desc: "Join us for a day of exciting outdoor activities and games in the beautiful Dhaka, Bangladesh. Whether you're a student or just looking for some outdoor fun, this event is perfect for you.", 
    imgSrc: {
      alt: 'event 1',
      image: 'https://cdn.sanity.io/images/1a142z34/production/7702a7a135fab335f5716869ec5858ccbdc916ca-1750x900.png'
    },
    location: 'Dhaka, Bangladesh',
    longTitle: 'Outdoor This Games - A Fun Day of Outdoor Activities',
    organizer: 'hasan mahmud',
    price: 50,
    slug: 'outdoor-this-games',
    time: '08.00 am - 10.00 am',
    title: 'Outdoor This Games'
  },
  {
    _id: '4f29576a-a40f-4699-a0eb-a2bebe9f8ba0',
    category: 'food',
    color: 'blue',
    desc: 'Calling all food lovers! Join us for a culinary adventure at the Paris Gourmet Food Festival. Sample a diverse range of gourmet dishes from around the world and satisfy your taste buds!',    
    imgSrc: {
      alt: 'event 5',
      image: 'https://cdn.sanity.io/images/1a142z34/production/ee1ad4caea0f83760bf29694d36b3ef2e7059058-1750x900.png'
    },
    location: 'Paris, France',
    longTitle: 'Gourmet Food Festival - A Culinary Adventure',
    organizer: 'Julie Martin',
    price: 45,
    slug: 'gourmet-food-festival',
    time: '06.00 pm - 09.00 pm',
    title: 'Gourmet Food Festival'
  },
  {
    _id: '6993480d-caf3-47db-8c25-eba08c679a1b',
    category: 'technology',
    color: 'blue',
    desc: "Tech enthusiasts, don't miss the Tech Innovators Conference in San Francisco. Dive into discussions on the latest tech trends, network with industry experts, and gain valuable insights.",    
    imgSrc: {
      alt: 'event 8',
      image: 'https://cdn.sanity.io/images/1a142z34/production/5734291503385efaa2a5e42ace2b415e57f8b01e-1750x900.png'
    },
    location: 'San Francisco, USA',
    longTitle: 'Tech Innovators Conference - Explore the Latest Tech Trends',
    organizer: 'John Doe',
    price: 75,
    slug: 'tech-innovators-conference',
    time: '11.00 am - 01.00 pm',
    title: 'Tech Innovators Conference'
  },
  {
    _id: '8435a1fb-fed1-49b4-a811-0a2b77c9eea0',
    category: 'science',
    color: 'red',
    desc: 'Discover the mysteries of the cosmos at the Astronomy Workshop in Boston. Learn about stars, planets, and galaxies, and gaze at the night sky through telescopes.',
    imgSrc: {
      alt: 'event 11',
      image: 'https://cdn.sanity.io/images/1a142z34/production/bf3974ce4c4a9bb87c2ef03cedce354441b551f1-1750x900.png'
    },
    location: 'Boston, USA',
    longTitle: 'Astronomy Workshop - Explore the Cosmos',
    organizer: 'Linda Anderson',
    price: 20,
    slug: 'astronomy-workshop',
    time: '10.00 am - 12.00 pm',
    title: 'Astronomy Workshop'
  },
  {
    _id: 'a2e2fe1a-c385-4a5b-9dec-9e69fe46f02e',
    category: 'art',
    color: 'green',
    desc: 'Immerse yourself in the world of contemporary art at our gallery exhibition in London. Discover the creativity of local artists and explore the beauty of their unique artworks.',
    imgSrc: {
      alt: 'event 6',
      image: 'https://cdn.sanity.io/images/1a142z34/production/7c347dd2bc976b147f38a281d571642915aedb65-1750x900.png'
    },
    location: 'London, UK',
    longTitle: 'Art Exhibition - Explore Contemporary Art',
    organizer: 'David Wilson',
    price: 25,
    slug: 'art-exhibition',
    time: '02.00 pm - 05.00 pm',
    title: 'Art Exhibition'
  },
  {
    _id: 'aa9315bd-70f0-46dc-877d-a2261d6fae9b',
    category: 'sports',
    color: 'green',
    desc: "Calling all basketball enthusiasts! Join us for our annual basketball tournament in Los Angeles. It's your chance to showcase your skills, compete with others, and have a great time!",       
    imgSrc: {
      alt: 'event 3',
      image: 'https://cdn.sanity.io/images/1a142z34/production/332d4080fe44eeb5f4fefbf80c44e9f3a282f19c-1750x900.png'
    },
    location: 'Los Angeles, USA',
    longTitle: 'Basketball Tournament - Showcase Your Skills on the Court',
    organizer: 'Michael Smith',
    price: 35,
    slug: 'basketball-tournament',
    time: '10.00 am - 12.00 pm',
    title: 'Basketball Tournament'
  },
  {
    _id: 'edbc0cc7-ce19-4413-8f46-28eafa3a8754',
    category: 'fitness',
    color: 'orange',
    desc: 'Take a break from the hustle and bustle of life and join us for a rejuvenating yoga and wellness retreat in the serene surroundings of Sydney, Australia. Recharge your mind and body!"',      
    imgSrc: {
      alt: 'event 7',
      image: 'https://cdn.sanity.io/images/1a142z34/production/982102fba5b964b1cbccf3d6fccd2392452faf20-1750x900.png'
    },
    location: 'Sydney, Australia',
    longTitle: 'Yoga and Wellness Retreat - Refresh Your Mind and Body',
    organizer: 'Emily Davis',
    price: 55,
    slug: 'yoga-and-wellness-retreat',
    time: '07.00 am - 09.00 am',
    title: 'Yoga and Wellness Retreat'
  },
  {
    _id: 'edc60df3-1cdd-4110-9d0a-cea3bcd4ee52',
    category: 'science',
    color: 'red',
    desc: 'Curious about the world of science? Join us at the Chicago Science Fair and embark on a journey of discovery. This family-friendly event promises fun and learning for everyone!',
    imgSrc: {
      alt: 'event 4',
      image: 'https://cdn.sanity.io/images/1a142z34/production/58a44d32064faa68b2ca5110837068f90b4da8bb-1750x900.png'
    },
    location: 'Chicago, USA',
    longTitle: 'Science Fair - Explore the Wonders of Science',
    organizer: 'Linda Anderson',
    price: 15,
    slug: 'science-fair',
    time: '09.30 am - 11.30 am',
    title: 'Science Fair'
  },
  {
    _id: 'fd0168f3-3cda-4db1-8d42-9c0106312cd5',
    category: 'sports',
    color: 'green',
    desc: 'Bump, set, and spike your way to victory at the Beach Volleyball Tournament in Miami. Join fellow volleyball enthusiasts for a day of fun and competitive play on the beach.',
    imgSrc: {
      alt: 'event 10',
      image: 'https://cdn.sanity.io/images/1a142z34/production/0831968c193655a9d680c7eb8a0dd334813451bb-1750x900.png'
    },
    location: 'Miami, USA',
    longTitle: 'Beach Volleyball Tournament - Spike Your Way to Victory',
    organizer: 'Michael Smith',
    price: 40,
    slug: 'beach-volleyball-tournament',
    time: '09.00 am - 12.00 pm',
    title: 'Beach Volleyball Tournament'
  }
]
 
  return (
    <>
    
    <BreadcrumbTwo title="Events" subtitle="Events"/>
    <AllEventSection eventData={event}/>
    
    </>
  )
}

export default Index