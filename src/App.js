import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Body from './components/body';


function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Body />
      {/* <Footer /> */}
    </BrowserRouter >
  );
}

export default App;
