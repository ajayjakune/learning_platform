import './App.css';
import { HashRouter } from 'react-router-dom';
// import { Container } from 'react-bootstrap';
import Body from './components/body';


function App() {
  return (
    <HashRouter>
        {/* <Header /> */}
        <Body />
        {/* <Footer /> */}
    </HashRouter >
  );
}

export default App;
