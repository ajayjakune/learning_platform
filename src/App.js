import React, {useState} from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Homepage from './components/Homepage/Homepage';



function App() {

  const [selectedCard, setselectedCard] = useState('')

  console.log(selectedCard)

  return (
    <div>
      <Header />

        <Homepage setselectedCard={setselectedCard}/>
  
      <Footer/> 

    </div>
  );
}

export default App;
