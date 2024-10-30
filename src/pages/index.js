import Image from "next/image";
import localFont from "next/font/local";
import Services from "@/Componets/Services/Services";
import serviceImg1 from '../../public/zumba.jpg';
import serviceImg2 from '../../public/cardio.jpg';
import serviceImg3 from '../../public/aerobics.jpg';
import serviceImg4 from '../../public/wightloss.jpg';
import instaIcon from '../../public/instagram.png';
import linkedinIcon from '../../public/linkedin.png';
import facebookIcon from '../../public/facebook.png';
import Footer from "@/Componets/Footer/Footer";

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
const footerData = {
  text:'Vivify offers a weekly schedule of classes for every level. Whether you want to dial up the intensity or take a more relaxed approach, we’ve got a class with a spot just for you. Create your own personalized schedule by choosing the classes that suit your needs',
  iconList:[
    {
      id:1,
      icon:instaIcon,
      link:''
    },
    {
      id:2,
      icon:linkedinIcon,
      link:''
    },
    {
      id:3,
      icon:facebookIcon,
      link:''
    },
  ]
}
const ServicesData1 = {
  title:'ZUMBA',
  description:` Zumba is a fitness program that combines Latin and international music with dance moves. Zumba routines incorporate interval training — alternating fast and slow rhythms — to help improve cardiovascular fitness .`,
  img:serviceImg1
}
const ServicesData2 = {
  title:'CARDIO',
  description:`Cardiovascular exercise is essential for maintaining a healthy heart, improving stamina, and boosting overall well-being.
 Regular cardio exercise can reduce the risk of chronic diseases, help manage weight, and improve mood and sleep quality.​`,
  img:serviceImg2
}
const ServicesData3 = {
  title:'AEROBICS',
  description:`​Aerobics is a form of physical exercise that combines rhythmic aerobic exercise with stretching and strength training routines. 
The primary goal is to improve all elements of fitness, including flexibility, muscular strength, and cardiovascular fitness.​`,
  img:serviceImg3
}
const ServicesData4 = {
  title:'WEIGHT LOSS / GAIN',
  description:`​﻿Join us to achieve both physical and mental well-being. With this you can develop a strong physique that will enable them to go into more advanced phases, such as a variety of 
coordination and adjustments to fit a range of skill levels, from beginner to advanced. Make a reservation right now and pamper yourself; you deserve it!`,
  img:serviceImg4
}

export default function Home() {
  return (
  <>
  <Services staticContent = {ServicesData1}/>
  <div className="my-[50px]"></div>
  <Services staticContent = {ServicesData2} changeOrder={true}/>
  <div className="my-[50px]"></div>
  <Services staticContent = {ServicesData3} />
  <div className="my-[50px]"></div>
  <Services staticContent = {ServicesData4} changeOrder={true}/>
  <div className="my-[50px]"></div>
  <Footer staticContent={footerData}/>
  </>
  );
}
