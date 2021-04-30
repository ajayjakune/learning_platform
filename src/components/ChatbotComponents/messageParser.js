// MessageParser starter code
class MessageParser {
    constructor(actionProvider) {
        this.actionProvider = actionProvider;
      }
    
      parse(message) {
        const lowerCaseMessage = message.toLowerCase()
        
        if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
          this.actionProvider.greet()
        }
        else if (lowerCaseMessage.includes("who are you") || lowerCaseMessage.includes("your name") || lowerCaseMessage.includes("made you")) {
          this.actionProvider.introduction()
        }
        else if (lowerCaseMessage.includes("how are you")) {
          this.actionProvider.extra()
        }
        else if (lowerCaseMessage.includes("course")) {
          this.actionProvider.course()
        }
        else if (lowerCaseMessage.includes("resource")) {
          this.actionProvider.resource()
        }
        else if (lowerCaseMessage.includes("quize")) {
          this.actionProvider.quize()
        }
        else if (lowerCaseMessage.includes("certificate")) {
          this.actionProvider.certificate()
        }
        else if (lowerCaseMessage.includes("profile") || lowerCaseMessage.includes("dashboard") || lowerCaseMessage.includes("ongoing") || lowerCaseMessage.includes("completed")) {
          this.actionProvider.profile()
        }
        else if (lowerCaseMessage.includes("login") || lowerCaseMessage.includes("username") || lowerCaseMessage.includes("password")) {
          this.actionProvider.login()
        }
        else if (lowerCaseMessage.includes("complain") || lowerCaseMessage.includes("suggestion") || lowerCaseMessage.includes("tell")) {
          this.actionProvider.complaintSuggestion()
        }
        else {
          this.actionProvider.nothing()
        }
      }
    }
  
  export default MessageParser;