import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './SpecificSlide.css';



SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

function SpecificDash() {
 

  const slides = [];
  for (let i = 0; i < 5; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} title={"Web DEv"}>
        <div className="row" >
          <div className="col-4" style={{ marginTop: "1.5vh", height: "77vh", borderRadius : "20px", borderColor: "azure", borderStyle: "solid", backgroundColor: "#9DF9EF", marginLeft: "-5px"}}>
              <img src="https://miro.medium.com/max/875/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" alt={`slide ${i}`} className="rounded-circle" style={{ width: "300px", height: "250px", marginTop: "18vh", marginLeft: "3vw", boxShadow: "0 8px 16px 0 rgba(0,100,200,0.5)"}}></img>
              <h4 className="text-center" style={{ marginTop: "30px" }}>WEB DEV</h4>
          </div>
          <div className="col-7" style={{ marginTop: "1.5vh", marginLeft: "10px" ,height: "77vh", borderRadius : "20px", borderColor: "azure", borderStyle: "solid", backgroundColor: "#9DF9EF"}}>
            <div className="col-10 offset-1" style={{ height: "50%", backgroundColor: "#EDF7F6"}}>
             Chart 1
            </div>
            <div className="col-10 offset-1" style={{ height: "50%", backgroundColor: "pink"}}>
            Chart 2
            </div>
          </div>
        </div>
      </SwiperSlide>
    );
  }

 
  return (
    <React.Fragment>
      <div style={{ marginBottom: "1vh", marginTop: "2vh"}}>
      <div className="container">
        <h1 style= {{ marginBottom: "15px"}}>Domain Statistics:</h1>
      </div>
      

        <Swiper style={{ backgroundColor: "#EEFBFB" , borderRadius: "20px"}}
        id="main"
        tag="section"
        wrapperTag="ul"
        navigation
        pagination
        spaceBetween={0}
        slidesPerView={1}
      >
        
        <SwiperSlide key={'1'}>
        <div className="row" >
          <div className="col-4" style={{ marginTop: "1.5vh", height: "77vh", borderRadius : "20px", borderColor: "azure", borderStyle: "solid", backgroundColor: "#9DF9EF", marginLeft: "-5px"}}>
              <img src="https://miro.medium.com/max/875/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" alt={`slide 1`} className="rounded-circle" style={{ width: "300px", height: "250px", marginTop: "18vh", marginLeft: "3vw", boxShadow: "0 8px 16px 0 rgba(0,100,200,0.5)"}}></img>
              <h4 className="text-center" style={{ marginTop: "30px" }}>WEB DEV</h4>
          </div>
          <div className="col-7" style={{ marginTop: "1.5vh", marginLeft: "10px" ,height: "77vh", borderRadius : "20px", borderColor: "azure", borderStyle: "solid", backgroundColor: "#9DF9EF"}}>
            <div className="col-10 offset-1" style={{ height: "50%", backgroundColor: "#EDF7F6"}}>
             Chart 1
            </div>
            <div className="col-10 offset-1" style={{ height: "50%", backgroundColor: "pink"}}>
            Chart 2
            </div>
          </div>
        </div>
        </SwiperSlide>

        <SwiperSlide key={'2'}>
        <div className="row" >
          <div className="col-4" style={{ marginTop: "1.5vh", height: "77vh", borderRadius : "20px", borderColor: "azure", borderStyle: "solid", backgroundColor: "#9DF9EF", marginLeft: "-5px"}}>
              <img src="https://miro.medium.com/max/875/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" alt={`slide 1`} className="rounded-circle" style={{ width: "300px", height: "250px", marginTop: "18vh", marginLeft: "3vw", boxShadow: "0 8px 16px 0 rgba(0,100,200,0.5)"}}></img>
              <h4 className="text-center" style={{ marginTop: "30px" }}>WEB DEV</h4>
          </div>
          <div className="col-7" style={{ marginTop: "1.5vh", marginLeft: "10px" ,height: "77vh", borderRadius : "20px", borderColor: "azure", borderStyle: "solid", backgroundColor: "#9DF9EF"}}>
            <div className="col-10 offset-1" style={{ height: "50%", backgroundColor: "#EDF7F6"}}>
             Chart 1
            </div>
            <div className="col-10 offset-1" style={{ height: "50%", backgroundColor: "pink"}}>
            Chart 2
            </div>
          </div>
        </div>
        </SwiperSlide>

        <SwiperSlide key={'3'}>
        <div className="row" >
          <div className="col-4" style={{ marginTop: "1.5vh", height: "77vh", borderRadius : "20px", borderColor: "azure", borderStyle: "solid", backgroundColor: "#9DF9EF", marginLeft: "-5px"}}>
              <img src="https://miro.medium.com/max/875/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" alt={`slide 1`} className="rounded-circle" style={{ width: "300px", height: "250px", marginTop: "18vh", marginLeft: "3vw", boxShadow: "0 8px 16px 0 rgba(0,100,200,0.5)"}}></img>
              <h4 className="text-center" style={{ marginTop: "30px" }}>WEB DEV</h4>
          </div>
          <div className="col-7" style={{ marginTop: "1.5vh", marginLeft: "10px" ,height: "77vh", borderRadius : "20px", borderColor: "azure", borderStyle: "solid", backgroundColor: "#9DF9EF"}}>
            <div className="col-10 offset-1" style={{ height: "50%", backgroundColor: "#EDF7F6"}}>
             Chart 1
            </div>
            <div className="col-10 offset-1" style={{ height: "50%", backgroundColor: "pink"}}>
            Chart 2
            </div>
          </div>
        </div>
        </SwiperSlide>

        <SwiperSlide key={'4'}>
        <div className="row" >
          <div className="col-4" style={{ marginTop: "1.5vh", height: "77vh", borderRadius : "20px", borderColor: "azure", borderStyle: "solid", backgroundColor: "#9DF9EF", marginLeft: "-5px"}}>
              <img src="https://miro.medium.com/max/875/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" alt={`slide 1`} className="rounded-circle" style={{ width: "300px", height: "250px", marginTop: "18vh", marginLeft: "3vw", boxShadow: "0 8px 16px 0 rgba(0,100,200,0.5)"}}></img>
              <h4 className="text-center" style={{ marginTop: "30px" }}>WEB DEV</h4>
          </div>
          <div className="col-7" style={{ marginTop: "1.5vh", marginLeft: "10px" ,height: "77vh", borderRadius : "20px", borderColor: "azure", borderStyle: "solid", backgroundColor: "#9DF9EF"}}>
            <div className="col-10 offset-1" style={{ height: "50%", backgroundColor: "#EDF7F6"}}>
             Chart 1
            </div>
            <div className="col-10 offset-1" style={{ height: "50%", backgroundColor: "pink"}}>
            Chart 2
            </div>
          </div>
        </div>
        </SwiperSlide>

        <SwiperSlide key={'5'}>
        <div className="row" >
          <div className="col-4" style={{ marginTop: "1.5vh", height: "77vh", borderRadius : "20px", borderColor: "azure", borderStyle: "solid", backgroundColor: "#9DF9EF", marginLeft: "-5px"}}>
              <img src="https://miro.medium.com/max/875/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" alt={`slide 1`} className="rounded-circle" style={{ width: "300px", height: "250px", marginTop: "18vh", marginLeft: "3vw", boxShadow: "0 8px 16px 0 rgba(0,100,200,0.5)"}}></img>
              <h4 className="text-center" style={{ marginTop: "30px" }}>WEB DEV</h4>
          </div>
          <div className="col-7" style={{ marginTop: "1.5vh", marginLeft: "10px" ,height: "77vh", borderRadius : "20px", borderColor: "azure", borderStyle: "solid", backgroundColor: "#9DF9EF"}}>
            <div className="col-10 offset-1" style={{ height: "50%", backgroundColor: "#EDF7F6"}}>
             Chart 1
            </div>
            <div className="col-10 offset-1" style={{ height: "50%", backgroundColor: "pink"}}>
            Chart 2
            </div>
          </div>
        </div>
        </SwiperSlide>

        <SwiperSlide key={'6'}>
        <div className="row" >
          <div className="col-4" style={{ marginTop: "1.5vh", height: "77vh", borderRadius : "20px", borderColor: "azure", borderStyle: "solid", backgroundColor: "#9DF9EF", marginLeft: "-5px"}}>
              <img src="https://miro.medium.com/max/875/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" alt={`slide 1`} className="rounded-circle" style={{ width: "300px", height: "250px", marginTop: "18vh", marginLeft: "3vw", boxShadow: "0 8px 16px 0 rgba(0,100,200,0.5)"}}></img>
              <h4 className="text-center" style={{ marginTop: "30px" }}>WEB DEV</h4>
          </div>
          <div className="col-7" style={{ marginTop: "1.5vh", marginLeft: "10px" ,height: "77vh", borderRadius : "20px", borderColor: "azure", borderStyle: "solid", backgroundColor: "#9DF9EF"}}>
            <div className="col-10 offset-1" style={{ height: "50%", backgroundColor: "#EDF7F6"}}>
             Chart 1
            </div>
            <div className="col-10 offset-1" style={{ height: "50%", backgroundColor: "pink"}}>
            Chart 2
            </div>
          </div>
        </div>
        </SwiperSlide>
        

      </Swiper>
      </div>  
    </React.Fragment>
  );
}

export default SpecificDash;
