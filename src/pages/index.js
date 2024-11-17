import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ServicesCard from "@/Componets/Services/ServicesCart";
import Footer from "@/Componets/Footer/Footer";
import Hero from "@/Componets/Hero/Hero";
import Nav from "@/Componets/Nav/Nav";
import Review from "@/Componets/Review/Review";
import Services from "@/Componets/Services/Services";
import Turst from "@/Componets/Turst/Turst";
import Pricing from "@/Componets/Pricing/Pricing";
import {getDemoData} from '../Helper/getStaticData';
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>

//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export default function Home() {
  const {aboutData, reviewData,navData,footerData,trustData,serviceData,heroData,pricingPlansData} = getDemoData();
  return (
    <>
      <Nav staticContent={navData} />
      <Hero staticContent={heroData} />
      <div className="my-[70px]"></div>
      <Turst staticContent={trustData}/>
      <div className="my-[70px]"></div>
      <ServicesCard staticContent={aboutData} aboutSection />
      <div className="my-[70px]"></div>
      <Services title={"Our Services"} staticContent={serviceData} />
      <div className="my-[70px]"></div>
      <Pricing title = {'Choose Right Plan to get Stronger'} staticContent={pricingPlansData}/>
      <div className="my-[70px]"></div>
      <Review
       staticContent={reviewData}
       title={'Real stories Real results'}
       />
      <div className="my-[70px]"></div>
      <Footer staticContent={footerData} />
    </>
  );
}
