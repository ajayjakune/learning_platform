// ActionProvider starter code
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
      }
      
      greet() {
        const greetingMessage = this.createChatBotMessage("Hi, friend. How may I help you?? Choose any of the following options",
        {
          widget: "mainOptions",
        });
        this.updateChatbotState(greetingMessage);
      }

      introduction() {
        const message = this.createChatBotMessage("Hello, Im Gurukul bot. I was made by 11 bright interns at Persistent Systems to help you on issues using Gurukul website.");
        this.updateChatbotState(message);
        const greetingMessage = this.createChatBotMessage("You can start with some of these options",
        {
          widget: "mainOptions",
        });
        this.updateChatbotState(greetingMessage);
      }

      extra() {
        const greetingMessage = this.createChatBotMessage("Hi, friend. I am doing good. Hope you're in good health too. How may I help you?? Choose any of the following options",
        {
          widget: "mainOptions",
        });
        this.updateChatbotState(greetingMessage);
      }

      nothing() {
        const greetingMessage = this.createChatBotMessage("Im sorry, I didn't get that. Do you want help on any of the following?",
        {
          widget: "mainOptions",
        });
        this.updateChatbotState(greetingMessage);

        const greetingMessage1 = this.createChatBotMessage("If not, I guess your query will be best addressed by a Human.",
        {
          widget: "complaintsSuggestionsLinks",
        });
        this.updateChatbotState(greetingMessage1);
      }

      course() {
        const greetingMessage = this.createChatBotMessage(
          "Ok, Is your issue one of the following?",
          {
            widget: "courseOptions",
          }
        );
        this.updateChatbotState(greetingMessage);
      }

      resource() {
        const greetingMessage = this.createChatBotMessage(
          "Ok, Trying to understand your issue better, is it one of the following?",
          {
            widget: "resourcesOptions",
          }
        );
        this.updateChatbotState(greetingMessage);
      }

      quize() {
        const greetingMessage = this.createChatBotMessage(
          "Ok, Trying to understand your issue better, is it one of the following?",
          {
            widget: "quizesOptions",
          }
        );
        this.updateChatbotState(greetingMessage);
      }

      certificate() {
        const greetingMessage = this.createChatBotMessage(
          "Ok, Trying to understand your issue better, is it one of the following?",
          {
            widget: "certificatesOptions",
          }
        );
        this.updateChatbotState(greetingMessage);
      }

      profile() {
        const greetingMessage = this.createChatBotMessage(
          "Ok, Is your issue one of the following?",
          {
            widget: "profileOptions",
          }
        );
        this.updateChatbotState(greetingMessage);
      }

      login() {
        const greetingMessage = this.createChatBotMessage(
          "Ok, Is your issue one of the following?",
          {
            widget: "loginOptions",
          }
        );
        this.updateChatbotState(greetingMessage);
      }

      complaintSuggestion() {
        const greetingMessage = this.createChatBotMessage(
          "Complaints/Suggestions are best handled by a Human. Here are some links to get you help",
          {
            widget: "complaintsSuggestionsLinks",
          }
        );
        this.updateChatbotState(greetingMessage);
      }

      handleCourseOptions = () => {
        const message = this.createChatBotMessage(
          "Ok, Is your issue one of the following?",
          {
            widget: "courseOptions",
          }
        );
    
        this.updateChatbotState(message);
      };

      handleProfileOptions = () => {
        const message = this.createChatBotMessage(
          "Ok, Is your issue one of the following?",
          {
            widget: "profileOptions",
          }
        );
    
        this.updateChatbotState(message);
      };

      handleLoginOptions = () => {
        const message = this.createChatBotMessage(
          "Ok, Is your issue one of the following?",
          {
            widget: "loginOptions",
          }
        );
    
        this.updateChatbotState(message);
      };

      handleComplaintsSuggestionsOptions = () => {
        const message = this.createChatBotMessage(
          "Complaints/Suggestions are best handled by a Human. Here are some links to get you help",
          {
            widget: "complaintsSuggestionsLinks",
          }
        );
    
        this.updateChatbotState(message);
      };

      handleResourcesOptions = () => {
        const message = this.createChatBotMessage(
          "Ok, Trying to understand your issue better, is it one of the following?",
          {
            widget: "resourcesOptions",
          }
        );
    
        this.updateChatbotState(message);
      };

      handleResourcesFirstOptions = () => {
        const message1 = this.createChatBotMessage(
          "Every Chapter of a course contains a resource tab which will have the resources related to your current chapter"
        );
        this.updateChatbotState(message1);

        const message2 = this.createChatBotMessage(
          "Some courses have resources posted at the end of the course. Check out there too"
        );
        this.updateChatbotState(message2);
      };

      handleResourcesSecondOptions = () => {
        const message = this.createChatBotMessage(
          "Im glad to know that you want more resources!!",
          {
            widget: "archiveLinks",
          }
        );
    
        this.updateChatbotState(message);
      };

      handleResourcesThirdOptions = () => {
        const message = this.createChatBotMessage(
          "Ohhh, Sorry for the inconvenience",
          {
            widget: "complaintsLinks",
          }
        );
    
        this.updateChatbotState(message);
      };

      handleQuizesOptions = () => {
        const message = this.createChatBotMessage(
          "Ok, Trying to understand your issue better, is it one of the following?",
          {
            widget: "quizesOptions",
          }
        );
    
        this.updateChatbotState(message);
      };

      handleQuizesFirstOptions = () => {
        const message = this.createChatBotMessage(
          "Attempted quizes may take a while to reflect your score. Try refreshing the page or wait for some time"
        );
        this.updateChatbotState(message);
      };

      handleQuizesSecondOptions = () => {
        const message = this.createChatBotMessage(
          "Quizes require strong network connection to record your responses correctly. Try connecting to a stronger network"
        );
        this.updateChatbotState(message);
      };

      handleQuizesThirdOptions = () => {
        const message = this.createChatBotMessage(
          "Ohhh, Sorry for the inconvenience",
          {
            widget: "complaintsLinks",
          }
        );
    
        this.updateChatbotState(message);
      };

      handleCertificatesOptions = () => {
        const message = this.createChatBotMessage(
          "Ok, Trying to understand your issue better, is it one of the following?",
          {
            widget: "certificatesOptions",
          }
        );
    
        this.updateChatbotState(message);
      };

      handleCertificatesFirstOptions = () => {
        const message = this.createChatBotMessage(
          "Certificates may take a while to generate. Try refreshing the page or wait for some time"
        );
        this.updateChatbotState(message);
      };

      handleCertificatesSecondOptions = () => {
        const message = this.createChatBotMessage(
          "Try refreshing the page or check if your browser is one of Chrome/Firefox. IE may cause issues while downloading"
        );
        this.updateChatbotState(message);
      };

      handleCertificatesThirdOptions = () => {
        const message = this.createChatBotMessage(
          "Certificate details are directly fetched from your profile. You can change your details there. If, details are completely different please write to us",
          {
            widget: "complaintsLinks",
          }
        );
    
        this.updateChatbotState(message);
      };

      handleProfilesFirstOptions = () => {
        const message = this.createChatBotMessage(
          "Profile Details are directly fetched from Persistent Systems data. You can't change them manually. However if you require a change, please write to Gurukul Support",
          {
            widget: "complaintsLinks",
          }
        );
        this.updateChatbotState(message);
      };

      handleProfilesSecondOptions = () => {
        const message1 = this.createChatBotMessage(
          "Check if you have actually enrolled in the course or instead added in wishlist"
        );
    
        this.updateChatbotState(message1);

        const message2 = this.createChatBotMessage(
          "If above method doesn't work, try re-enrolling in the course"
        );
    
        this.updateChatbotState(message2);
      };

      handleProfilesThirdOptions = () => {
        const message1 = this.createChatBotMessage(
          "Check if you have completed all the quizes in the course and that you have passed in all"
        );
    
        this.updateChatbotState(message1);

        const message2 = this.createChatBotMessage(
          "If the above method doesn't work, check if you have visited all the modules in the course for 100% completion"
        );
    
        this.updateChatbotState(message2);
      };

      handleLoginsFirstOptions = () => {
        const message1 = this.createChatBotMessage(
          "Please check your username and password. However if you are still unable to login try reseting the password"
        );
        this.updateChatbotState(message1);

        const message2 = this.createChatBotMessage(
          "If above methods doesn't work, please write to Gurukul Support",
          {
            widget: "complaintsLinks",
          }
        );
        this.updateChatbotState(message2);
      };

      handleLoginsSecondOptions = () => {
        const message1 = this.createChatBotMessage(
          "This might occur due to low network connectivity. Please try with a stronger network connection"
        );
    
        this.updateChatbotState(message1);

        const message2 = this.createChatBotMessage(
          "If you're connected to strong network, this issue might occur if the services are under maintainance. Please try after some time. If the issue still persists, please write to Gurukul Support",
          {
            widget: "complaintsLinks",
          }
        );
    
        this.updateChatbotState(message2);
      };
      
      updateChatbotState(message) {
     
    // NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.
     
        
       this.setState(prevState => ({
            ...prevState, messages: [...prevState.messages, message]
        }))
      }
    }
  
  export default ActionProvider;