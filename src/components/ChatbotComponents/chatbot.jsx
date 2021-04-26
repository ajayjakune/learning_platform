import React, { Component } from 'react';
import Chatbot from "react-chatbot-kit"
import "./css/chatbot.css";

import ActionProvider from './actionProvider';
import MessageParser from './messageParser';
import Config from './config';

class ChatBot extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container">
                <div className="row justify-content-conter">
                <Chatbot config={Config} actionProvider={ActionProvider} messageParser={MessageParser} />
                </div>
            </div>

         );
    }
}
 
export default ChatBot;