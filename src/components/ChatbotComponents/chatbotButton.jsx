import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import ChatBot from './chatbot';
import Image from "react-bootstrap/Image";
import RobotImage from "./res/robot.png";

class ChatBotButton extends Component {
    state = {  }
    render() { 
        return (

  <Popup trigger={<Image
        style={{
          position: "sticky",
          right: 30,
          bottom: 30,
          maxHeight: "70px",
          maxWidth: "70px",
          backgroundColor: "orange",
          border: "5px solid #8a795d",
          display: "block",
          zIndex:10,
          float:"right"
      }}
        src={RobotImage}
        roundedCircle
    />} position="top right">
    <div><ChatBot/></div>
  </Popup>
         );
    }
}
 
export default ChatBotButton;