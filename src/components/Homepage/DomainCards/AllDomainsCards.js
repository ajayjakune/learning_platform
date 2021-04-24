import axios from 'axios';
import React,{useState, useEffect} from 'react'
import SingleCard from './SingleCard'
// import "./Cards.css"


const AllDomainsCards = () => {

    const[domainData, setDomainData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/domain/all')
        .then(res => setDomainData(res.data))
        .catch(err => console.log(err));
    }, [])
    
    // const domainData = [
    //     {
    //         "_id": "60812e6861869f3620452d11",
    //         "domain_name": "AI",
    //         "domain_description": "Artificial intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions. The term may also be applied to any machine that exhibits traits associated with a human mind such as learning and problem-solving.",
    //         "domain_photo": "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1129869424%2F960x0.jpg%3Ffit%3Dscale"
    //     },
    //     {
    //         "_id": "60815a1b4643754a9c2f382b",
    //         "domain_name": "Web Development",
    //         "domain_description": "Web development is the building and maintenance of websites; it's the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience.",
    //         "domain_photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO3abk_X67V6coNsK1sH6jX2134EVcmghK2w&usqp=CAU"
    //     },
    //     {
    //         "_id": "60815b1b4643754a9c2f382c",
    //         "domain_name": "Android Development",
    //         "domain_description": "Android software development is the process by which applications are created for devices running the Android operating system.",
    //         "domain_photo": "https://s3-ap-southeast-1.amazonaws.com/blog.internshala.com/wp-content/uploads/2018/06/how-to-learn-android-app-development.jpg"
    //     },
    //     {
    //         "_id": "60815bed4643754a9c2f382d",
    //         "domain_name": "Internet of Things",
    //         "domain_description": "The Internet of Things (IoT) refers to a system of interrelated, internet-connected objects that are able to collect and transfer data over a wireless network without human intervention. The personal or business possibilities are endless.",
    //         "domain_photo": "https://miro.medium.com/max/860/1*vUFNgofROTwY_rGd4_7Qsw.jpeg"
    //     }
    // ]

    return (
        <div >
            <div className="container" style={{ marginTop: "17px"}}>
        
                <h2 style={{ color: "black" }}>
                    Domains
                </h2>
                <hr/>
                
                <div className="row"> 
                
                {
                    domainData.map( (domain, index) => 
                        <SingleCard key={index} for='domain' title={domain.domain_name} description={domain.domain_description} imageUrl={domain.domain_photo} cardId={domain._id} buttonText={"Explore !"}/>
                    )
                }

                </div>
            <div/>
        </div>
       </div> 
    )
}

export default AllDomainsCards
