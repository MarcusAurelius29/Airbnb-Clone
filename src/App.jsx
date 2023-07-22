import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
import Card from './components/Card'
import './App.css'
import NameData from './components/NameData'


function App() {
    
  const nameElement = NameData.map( (name1) => {
      return <Card 
      key = {name1.id}
      name = {name1}
      />
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
