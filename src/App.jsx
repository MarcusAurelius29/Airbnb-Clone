import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
import Card from './components/Card'
import './App.css'
import Eminem from '../src/images/eminem.jfif'
import Rock from '../src/images/therock.jfif'
import Snopp from '../src/images/snopp.jfif'
import Mike from '../src/images/mike.jfif'
import NameData from './components/NameData'


function App() {
    const nameElement = NameData.map( (name1) => {
      return <Card key = {name1.id} img={name1.img} rating={name1.rating} name={name1.name} price={name1.rating} />
    })
  return (
    <div>
    <Navbar />
    <MainContent />
    <div className='card-array'>
    {nameElement}
    </div>
    </div>
  )
}

export default App
