import Container from 'react-bootstrap/Container'
import Footer from './components/Footer/Footer'
import HomeCarousel from './components/Homepage/HomepageCarousel/HomeCarousel'
import Header from './components/Header/Header'
import AllDomainsCards from './components/Homepage/DomainCards/AllDomainsCards'


function App() {
  return (
    <div>
      <Header />
      {/* <Container> */}
        <HomeCarousel/>
        <AllDomainsCards/>
        {/* <AllCoursesCards/> */}
        {/* <CourseList/> */}
        <Footer/> 
      {/* </Container> */}
    </div>
  );
}

export default App;
