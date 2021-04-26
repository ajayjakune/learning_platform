// Config starter code
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import MainOptions from "./mainOptions";
import CourseOptions from "./courseOptions";
import ProfileOptions from "./profileOptions";
import LoginOptions from "./loginOptions";
import ResourcesOptions from "./resourcesOptions";
import QuizesOptions from "./quizesOptions";
import CertificatesOptions from "./certifficateOptions";
import LinkList from "./linkList";

const config = { 
    botName: "Gurukul Bot",
    initialMessages: [createChatBotMessage("Hello. Which section would you like me to help you?", {widget: "mainOptions",}),],
    // customStyles: {
    //   botMessageBox: {
    //     backgroundColor: "#376B7E",
    //   },
    //   chatButton: {
    //     backgroundColor: "#376B7E",
    //   },
    // },

    widgets: [
        {
            widgetName: "mainOptions",
            widgetFunc: (props) => <MainOptions {...props}/>,
        },
        {
          widgetName: "courseOptions",
          widgetFunc: (props) => <CourseOptions {...props} />,
        },
        {
          widgetName: "profileOptions",
          widgetFunc: (props) => <ProfileOptions {...props} />,
        },
        {
          widgetName: "loginOptions",
          widgetFunc: (props) => <LoginOptions {...props} />,
        },
        {
          widgetName: "resourcesOptions",
          widgetFunc: (props) => <ResourcesOptions {...props} />,
        },
        {
          widgetName: "quizesOptions",
          widgetFunc: (props) => <QuizesOptions {...props} />,
        },
        {
          widgetName: "certificatesOptions",
          widgetFunc: (props) => <CertificatesOptions {...props} />,
        },
        {
            widgetName: "complaintsSuggestionsLinks",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                  {
                    text: "For Complaints, write to:- Gurukul Support",
                    url:
                      "mailto:support.gurukul@persistent.com",
                    id: 1,
                  },
                  {
                    text: "For Suggestions, write to:- Gurukul Experiences",
                    url:
                      "mailto:experiences.gurukul@persistent.com",
                    id: 2,
                  },
                  {
                    text: "Or talk to our Human Representatives",
                    url: "tel:+918104837750",
                    id: 3,
                  },
                ],
            }
        },
        {
          widgetName: "archiveLinks",
          widgetFunc: (props) => <LinkList {...props} />,
          props: {
              options: [
                {
                  text: "Head over to our Gurukul Archives",
                  url:
                    "https://www.google.com",
                  id: 1,
                },
              ],
          }
      },
      {
        widgetName: "complaintsLinks",
        widgetFunc: (props) => <LinkList {...props} />,
        props: {
            options: [
              {
                text: "For Complaints/Issues, write to:- Gurukul Support",
                url:
                  "mailto:support.gurukul@persistent.com",
                id: 1,
              },
            ],
        }
    },
    ]
  }
  

export default config