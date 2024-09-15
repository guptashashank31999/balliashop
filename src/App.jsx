import { useState } from 'react'
import './styles.css'
import CarosalSection from './Components/CarosalSection'
import 'bootstrap/dist/css/bootstrap.min.css';
import BodySectionParent from './Components/BodySection/BodySectionParent';
import YouTubeFrame from './Components/YouTubeFrame';
import Footer from './Components/Footer';
function App() {
  

  return (
    <>
    <div style={{width:"100vw",}}>
        <CarosalSection/>
        <YouTubeFrame/>
        <BodySectionParent/>
        <Footer/>
    </div>   

    </>
  )
}

export default App
