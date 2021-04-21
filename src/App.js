import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Body from './components/course_enrollment_component/body';

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
