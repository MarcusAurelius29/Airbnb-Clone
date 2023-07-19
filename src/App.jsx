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
    <Card img={Eminem} rating="5(5)" name="Life lessons with Eminem" price={136}/>
    <Card img={Snopp} rating="4.8(5)" name="Life lessons with Snopp Dogg" price={126}/>
    <Card img={Rock} rating="4.7(5)" name="Life lessons with The Rock" price={145}/>
    <Card img={Mike} rating="5(5)" name="Life lessons with Mike Tyson" price={150}/>
    </div>
    </div>
  )
}

export default App
