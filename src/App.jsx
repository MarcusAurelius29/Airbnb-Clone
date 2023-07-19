import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
import Card from './components/Card'
import './App.css'
import Eminem from '../src/images/eminem.jfif'
import Rock from '../src/images/therock.jfif'
import Snopp from '../src/images/snopp.jfif'
import Mike from '../src/images/mike.jfif'
function App() {
 
  return (
    <div>
    <Navbar />
    <MainContent />
    <div className='card-array'>
    <Card img={Eminem} rating="5.0(5) - USA" name="Life lessons with Eminem" price="136$/person"/>
    <Card img={Snopp} rating="4.8(5) - USA" name="Life lessons with Snopp Dogg" price="126$/person"/>
    <Card img={Rock} rating="4.5(5) - USA" name="Life lessons with The Rock" price="13$/person"/>
    <Card img={Mike} rating="5.0(5) - USA" name="Life lessons with Mike Tyson" price="150$/person"/>
    </div>
    </div>
  )
}

export default App
