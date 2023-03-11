import './App.css'
import Card from './components/Card'

function App() {

  const usuario = { 
    nome: "Fábio H R Souza", 
    idade: 43, 
    foto: "https://avatars.githubusercontent.com/u/92132323?s=400&u=ee2fe1703475d8bbaf9fab62cc3e826465e79090&v=4", 
    github: "https://github.com/FabioHRSouza", 
    linkedin: "https://www.linkedin.com/in/fabiohrsouza" }

  return (
    <div>
      <Card usuario={usuario} />
    </div>
  )
}

export default App
