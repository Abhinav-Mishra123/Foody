import React from 'react';
import "../Styles/Menu.css";
import StarRating from './StarRating';


const testData = [
    {
        id:"1",
        name:"John D.",
        ratinng:5,
        desc:"I've been ordering from this food delivery service for months, and I'm always impressed. The food arrives hot and fresh, and the delivery is prompt. Their extensive menu offers something for everyone. Highly recommended!",
        img:"https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.2.182985599.1692083476&semt=ais",
        outline:"first"
    },
    {
        id:"2",
        name:"Sarah M.",
        ratinng:4,
        desc:"I love the convenience of ordering online, and this service never disappoints. The food quality is great, and they have excellent customer support. A reliable choice for busy evenings.",
        img:"https://img.freepik.com/premium-photo/beauty-fashion-portrait-young-beautiful-brunette-woman-with-long-black-hair-green-eyes_333900-2852.jpg?size=626&ext=jpg&ga=GA1.2.182985599.1692083476&semt=ais",
        color:"#fdc548",
        outline:"second"
    },
    {
        id:"3",
        name:"David W.",
        ratinng:5,
        desc:"Wow, what a find! The variety of cuisines available is mind-blowing. The website is user-friendly, and the delivery is faster than I expected. My taste buds are always satisfied. Can't get enough!",
        img:"https://img.freepik.com/premium-photo/portrait-happy-young-casual-man-standing_171337-29744.jpg?size=626&ext=jpg&ga=GA1.2.182985599.1692083476&semt=ais",
        outline:"third"
    },
        {
        id:"4",
        name:"Michael S.",
        ratinng:5,
        desc:"As a foodie, I'm picky about my meals. This service consistently meets my high standards. The food is flavorful, portions are generous, and prices are reasonable. It's my go-to for quality food at home.",
        img:"https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?size=626&ext=jpg&ga=GA1.2.182985599.1692083476&semt=ais",
        outline:"fourth"
    },
    {
        id:"5",
        name:"Emily R.",
        ratinng:4.5,
        desc:"This food delivery service has saved my dinner plans more times than I can count. Whether it's a lazy night or a special occasion, I can trust them to bring delicious meals to my doorstep.",
        img:"https://img.freepik.com/premium-photo/brunette-girl-with-glasses_58409-14928.jpg?size=626&ext=jpg&ga=GA1.2.182985599.1692083476&semt=ais",
        outline:"fifth"
    },
    {
        id:"6",
        name:"Linda B.",
        ratinng:4.5,
        desc:"I appreciate the attention to detail and hygiene this service maintains. They take safety seriously, and it shows. Plus, their drivers are courteous and follow contactless delivery instructions. Great service!",
        img:"https://img.freepik.com/free-photo/young-beautiful-girl-posing-black-leather-jacket-park_1153-8104.jpg?size=626&ext=jpg&ga=GA1.2.182985599.1692083476&semt=ais",
        outline:"six"
    },

]

function Testimonial(){
    return (
        <>
        <div className='container'>
                <h2 className='text-center'>What Customer Say</h2>
            <div className='row mt-5'>
                {testData.map((testimonial) => (
                    <div className='col-md-6 col-lg-6 col-sm-12 mb-5' key={testimonial.id}>
                    <div className='testimonial-content'>
                        <div className='testimonial-left'>
                            <div className='customer-img'>
                                <img src={testimonial.img} alt='customer' className={testimonial.outline}></img>
                            </div>
                        </div>
                        <div className='testimonial-right'>
                            <p className='customer_name'>{testimonial.name}</p>
                            <StarRating rating={testimonial.ratinng} />
                            <p className='customer_feedback'>{testimonial.desc}</p>
                        </div>
                    </div>
                </div>
                    ))}
            </div>
        </div>
        </>
    )
}

export default Testimonial;