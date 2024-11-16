import instaIcon from '../../public/instagram.png';
import linkedinIcon from '../../public/linkedin.png';
import facebookIcon from '../../public/facebook.png';
import locationIcon from '../../public/location.png';
import phoneIcon from '../../public/phone.png';
import logoImg from '../../public/logo.png';
import client from '../../public/clientImg1.jpg';
import client2 from '../../public/clientImg2.jpg';
import aboutImg from '../../public/about.webp';
import serviceImg1 from '../../public/personalTraining.jpg';
import serviceImg2 from '../../public/groupWorkout.jpg';
import serviceImg3 from '../../public/stranghtTraining.jpg';
import serviceImg4 from '../../public/nutritionCoaching.jpg';
import serviceImg5 from '../../public/onlineCoaching.webp';

export const getDemoData = () => {
  
    const navData = {
        // logo: logoImg,
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
    const heroData = {
        headerBeforeText:'Sweat Today.',
        colorText:'Shine',
        headerAfterText:'Tomorrow.',
        subtext:'Push yourself today for the results you deserve tomorrow. Every drop of sweat is a step closer to your goals. Transform your body, elevate your mindset, and own your strength.',
        btnText:"Get Fit Now"
        }
    const trustData = [
        {
            id: 1,
            blodText: "500+",
            subText: 'happy Members',
            des: 'Our community growing fast'
        },
        {
            id: 2,
            blodText: "30+",
            subText: 'weekly class',
            des: 'Our community growing fast'
        },
        {
            id: 1,
            blodText: "10",
            subText: 'certified trainers',
            des: 'Our community growing fast'
        },
        {
            id: 1,
            blodText: "99%",
            subText: 'custonmers satisfaction',
            des: 'Our community growing fast'
        },
    
    ]
    const serviceData = [
        {
            title: 'Strength Training',
            description: 'Our Strength Training programs focus on building muscle, increasing strength, and improving athletic performance. Whether you’re using free weights, resistance machines, or engaging in functional training, our expert trainers will guide you through every movement to help you achieve your best results.',
            img: serviceImg3
        },
        {
            title: 'Personal Training',
            description: `Our Personal Training service offers customized workout plans and dedicated one-on-one guidance from certified trainers. Whether you're new to fitness or a seasoned athlete, our trainers will tailor each session to your unique goals, ensuring that you get the most out of every workout.`,
            img: serviceImg1
        },
        {
            title: 'Group Fitness Classes',
            description: `Join our Group Fitness Classes to experience a motivating and energizing atmosphere. From high-intensity interval training (HIIT) to calming yoga, heart-pumping spin, and strength-building boxing, we offer a variety of classes that cater to different fitness levels and interests. It’s a great way to stay challenged while connecting with others who share your fitness journey.​`,
            img: serviceImg2
        },
        {
            title: 'Nutrition Coaching',
            description: "Fuel your fitness progress with our Nutrition Coaching services. Our certified nutritionists will work with you to create a personalized meal plan that complements your goals, whether it’s losing weight, gaining muscle, or simply maintaining a healthy, balanced diet. We’ll help you make better food choices and understand how to fuel your body for peak performance.",
            img: serviceImg4
        },
        {
            title: 'Online Coaching',
            description: "If you can’t make it to the gym, our Online Coaching allows you to stay on track with personalized training plans and virtual coaching. Our online programs are designed to fit your lifestyle, offering flexibility and convenience, whether you're at home, traveling, or on the go. You’ll receive continuous support and guidance to help you reach your fitness goals from anywhere.",
            img: serviceImg5
        }
    ]
    const footerData = [ 
        {
            id: 1,
            fTitle: 'Demo',
            primary: true,
            fDescription: [
                {
                    id: 1,
                    text: 'demo content  a weekly schedule of classes for every level. Whether you want to dial up the intensity or take a more relaxed approach, we’ve got a class with a spot just for you.'
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
            id: 1,
            img: client,
            name: 'praveen',
            review: 'achieve both physical and mental well-being. With this you can develop a strong physique that'
        },
        {
            id: 1,
            img: client2,
            name: 'karthick',
            review: 'achieve both physical and mental well-being. With this you can develop a strong physique that'
        },
        {
            id: 1,
            img: client,
            name: 'deepak',
            review: 'achieve both physical and mental well-being. With this you can develop a strong physique that well-being. With this you can develop a strong physique that'
        },
        {
            id: 1,
            img: client2,
            name: 'praveen',
            review: 'achieve both physical and mental well-being. With this you can develop a strong physique that well-being. With this you can develop a strong physique thatwell-being. With this you can develop a strong physique that'
        },
    ]
    const aboutData = {
        title: 'About us',
        description: `Welcome to [Your Gym Name], your premier fitness destination dedicated to helping you achieve your health and wellness goals. Our state-of-the-art facilities, expert trainers, and personalized programs ensure that every workout is tailored to meet your unique needs. Whether you’re looking to build strength, lose weight, or improve overall fitness, we’ve got you covered.`,
        description2:'We believe in creating a supportive and motivating environment where everyone can thrive. Join us today and experience fitness like never before. Let’s work together to unlock your full potential!',
        img: aboutImg
    }
    return {
        aboutData,
        reviewData,
        navData,
        footerData,
        trustData,
        serviceData,
        heroData
        
    }
}


