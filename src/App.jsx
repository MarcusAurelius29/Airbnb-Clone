import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
import Card from './components/Card'
import './App.css'
import NameData from './components/NameData'


function App() {
    
  const nameElement = NameData.map( (name1) => {
      return <Card key = {name1.id} img={name1.img} rating={name1.rating} name={name1.name} price={name1.rating} openSpots={name1.openSpots} location={name1.location} />
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
