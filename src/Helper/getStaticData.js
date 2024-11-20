import instaIcon from '../../public/instagram.png';
import linkedinIcon from '../../public/linkedin.png';
import facebookIcon from '../../public/facebook.png';
import locationIcon from '../../public/location.png';
import phoneIcon from '../../public/phone.png';
import client from '../../public/clientImg1.jpg';
import client2 from '../../public/clientImg2.jpg';
import serviceImg1 from '../../public/personalTraining.jpg';
import serviceImg2 from '../../public/groupWorkout.jpg';
import serviceImg3 from '../../public/stranghtTraining.jpg';
import serviceImg4 from '../../public/nutritionCoaching.jpg';
import serviceImg5 from '../../public/onlineCoaching.webp';
import aboutImg1 from '../../public/about.webp'
import aboutImg4 from '../../public/aboutImg4.jpg';
import aboutImg5 from '../../public/aboutImg5.jpg';

export const getDemoData = () => {

    const navData = {
        // logo: logoImg,
        navList: [
            {
                id: 1,
                text: 'home',
                link: '/'
            },
            {
                id: 2,
                text: 'Services',
                link: '#services'
            },
            {  id: 3,
                text: 'Pricing',
                link: '#pricing'
            },
            {
                id: 4,
                text: 'Reviews',
                link: '#reviews'
            },
            {
                id: 5,
                buttonText: 'contact',
                link: ''
            },
        ]
    }
    const heroData = {
        headerBeforeText: 'Sweat Today.',
        colorText: 'Shine',
        headerAfterText: 'Tomorrow.',
        subtext: 'Push yourself today for the results you deserve tomorrow. Every drop of sweat is a step closer to your goals. Transform your body, elevate your mindset, and own your strength.',
        btnText: "Get Fit Now"
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
            des: 'Focus on Results Weekly'
        },
        {
            id: 3,
            blodText: "10",
            subText: 'certified trainers',
            des: 'Results-Driven Coaching'
        },
        {
            id: 4,
            blodText: "99%",
            subText: 'custonmers satisfaction',
            des: 'Focused on Member Needs'
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
            id: 40,
            fTitle: 'Demo',
            primary: true,
            fDescription: [
                {
                    id: 2,
                    text: 'demo content  a weekly schedule of classes for every level. Whether you want to dial up the intensity or take a more relaxed approach, we’ve got a class with a spot just for you.'
                },
                {
                    id: 3,
                    text: 'Create your own personalized schedule by choosing the classes that suit your needs'
                },
                {
                    id: 4,
                    buttonText: 'Vist our recent work'
                },
            ]
        },
        {
            id: 10,
            fTitle: 'Important Links',
            fDescription: [
                {
                    id: 5,
                    text: 'Home'
                },
                {
                    id: 6,
                    text: 'About'
                },
                {
                    id: 7,
                    text: 'Product',
                },
                {
                    id: 8,
                    text: 'Blog',
                },
            ]
        },
        {
            id: 20,
            fTitle: 'Quick Links',
            fDescription: [
                {
                    id: 9,
                    text: 'Home',
                    link:'/'
                },
                {
                    id: 10,
                    text: 'About',
                    link:'#about'
                },
                {
                    id: 11,
                    text: 'Services',
                     link:'#services'
                },
                {
                    id: 12,
                    text: 'Pricings Plans',
                    link:"#pricing"
                },
            ]
        },
        {
            id: 30,
            fTitle: 'Address',
            fDescription: [
                {
                    id: 13,
                    text: 'madurai tamilnadu',
                    icon: locationIcon,
                },
                {
                    id: 14,
                    text: '+91 8368379373',
                    icon: phoneIcon,
                },
                {
                    id: 15,
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
            name: 'Jake Mitchell',
            review: 'This gym has everything I need—state-of-the-art equipment, spacious workout areas, and helpful trainers. I’ve seen amazing results since I joined. Highly recommend for anyone serious about their fitness journey!'
        },
        {
            id: 2,
            img: client2,
            name: 'Olivia Brown',
            review: 'I started at this gym as a beginner, and the trainers have been incredibly supportive. I’ve learned so much about proper form and technique. Plus, the gym is always clean and well-maintained!'
        },
        {
            id: 3,
            img: client,
            name: ' Mark Stevens',
            review: 'achieve both physical and mental well-being. With this you can develop a strong physique that well-being. With this you can develop a strong physique that'
        },
        {
            id: 4,
            img: client2,
            name: 'Emily Clark',
            review: 'The gym itself is great, and the personal trainers are top-notch. The only thing I would improve is the parking situation during peak hours, but other than that, I love coming here!'
        },
    ]
    const aboutData = {
        title: 'About us',
        description: `Welcome to [Your Gym Name], your premier fitness destination dedicated to helping you achieve your health and wellness goals. Our state-of-the-art facilities, expert trainers, and personalized programs ensure that every workout is tailored to meet your unique needs. Whether you’re looking to build strength, lose weight, or improve overall fitness, we’ve got you covered.`,
        description2: 'We believe in creating a supportive and motivating environment where everyone can thrive. Join us today and experience fitness like never before. Let’s work together to unlock your full potential!',
        aboutImgList: [
            aboutImg4,
            aboutImg1,
            aboutImg5,
        ]
    }
    const pricingPlansData = [
        {
            planName: "Basic Membership",
            price: "$29",
            description: "Ideal for occasional gym-goers.",
            features: [
                "Access to all gym equipment",
                "Group classes included",
                "1 personal training session/month",
                "Locker room & shower access"
            ],
            contactButton: "Get Started"
        },
        {
            planName: "Premium Membership",
            price: "$79",
            description: "For committed fitness goals and results.",
            features: [
                "All gym facilities included",
                "Unlimited group & private classes",
                "4 personal training sessions/month",
                "Priority booking for classes",
                "Access to spa and wellness center"
            ],
            contactButton: "Get Started",
            primary: true
        },
        {
            planName: "Standard Membership",
            price: "$49",
            description: "Perfect for regular fitness enthusiasts.",
            features: [
                "All equipment access",
                "Unlimited group classes",
                "2 personal training sessions/month",
                "Free Wi-Fi and water refill",
                "Discount on store products"
            ],
            contactButton: "Get Started"
        },

    ];
    return {
        aboutData,
        reviewData,
        navData,
        footerData,
        trustData,
        serviceData,
        heroData,
        pricingPlansData
    }
}


