import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ServicesCard from "@/Componets/Services/ServicesCart";
import Footer from "@/Componets/Footer/Footer";
import Hero from "@/Componets/Hero/Hero";
import Nav from "@/Componets/Nav/Nav";
import Review from "@/Componets/Review/Review";
import instaIcon from '../../public/instagram.png';
import linkedinIcon from '../../public/linkedin.png';
import facebookIcon from '../../public/facebook.png';
import locationIcon from '../../public/location.png';
import phoneIcon from '../../public/phone.png';
import logoImg from '../../public/logo.png';
import client from '../../public/clientImg1.jpg';
import client2 from '../../public/clientImg2.jpg';
import Services from "@/Componets/Services/Services";

<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>


// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
const navData = {
  logo: logoImg,
  navList: [
    {
      id: 1,
      text: 'home',
      link: ''
    },
    {
      id: 2,
      text: 'Services',
      link: ''
    },
    {
      id: 3,
      text: 'Reviews',
      link: ''
    },
    {
      id: 4,
      buttonText: 'contact',
      link: ''
    },
  ]
}


const footerData = [
  //  . 
  {
    id: 1,
    fTitle: 'Vivify Fitness Studio',
    primary:true,
    fDescription: [
      {
        id: 1,
        text: 'Vivify offers a weekly schedule of classes for every level. Whether you want to dial up the intensity or take a more relaxed approach, we’ve got a class with a spot just for you.'
      },
      {
        id: 2,
        text: 'Create your own personalized schedule by choosing the classes that suit your needs'
      },
      {
        id: 3,
        buttonText: 'Vist our recent work'
      },
    ]
  },
  {
    id: 2,
    fTitle: 'Important Links',
    fDescription: [
      {
        id: 1,
        text: 'Home'
      },
      {
        id: 2,
        text: 'About'
      },
      {
        id: 3,
        text: 'Product',
      },
      {
        id: 4,
        text: 'Blog',
      },
    ]
  },
  {
    id: 3,
    fTitle: 'Quick Links',
    fDescription: [
      {
        id: 1,
        text: 'Home'
      },
      {
        id: 2,
        text: 'About'
      },
      {
        id: 3,
        text: 'Product',
      },
      {
        id: 4,
        text: 'Blog',
      },
    ]
  },
  {
    id: 4,
    fTitle: 'Address',
    fDescription: [
      {
        id: 1,
        text: 'madurai tamilnadu',
        icon: locationIcon,
      },
      {
        id: 2,
        text: '+91 8368379373',
        icon: phoneIcon,
      },
      {
        id: 3,
        iconList: [
          instaIcon,
          linkedinIcon,
          facebookIcon
        ]
      },
    ]
  }
]
const reviewData = [
  {
    id:1,
    img:client,
    name:'praveen',
    review:'achieve both physical and mental well-being. With this you can develop a strong physique that'
  },
  {
    id:1,
    img:client2,
    name:'karthick',
    review:'achieve both physical and mental well-being. With this you can develop a strong physique that'
  },
  {
    id:1,
    img:client,
    name:'deepak',
    review:'achieve both physical and mental well-being. With this you can develop a strong physique that well-being. With this you can develop a strong physique that'
  },
  {
    id:1,
    img:client2,
    name:'praveen',
    review:'achieve both physical and mental well-being. With this you can develop a strong physique that well-being. With this you can develop a strong physique thatwell-being. With this you can develop a strong physique that'
  },
]

export default function Home() {
  return (
    <>
      <Nav staticContent={navData} />
      <Hero />
      <div className="my-[50px]"></div>
      <Services title={"Our Services"}/>
      <div className="my-[50px]"></div>
      <Review
       staticContent={reviewData}
       title={'Real stories Real results'}/>
      <div className="my-[50px]"></div>
      <Footer staticContent={footerData} />
    </>
  );
}
