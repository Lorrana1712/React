
import './App.css'
import MeuComponent from './components/MeuComponent'
import Title from './components/Title';

function App() {

    const n = 13;

    const redTitle = false;

  return (
   <div className='App'>
     <h1>Css no React</h1>



     <MeuComponent/>

     <p style={{color:"blue",padding:"25px", borderTop:"1px solid black"}}>
      Este parágrafo foi estilizado com CSS inline!
     </p>

     <h2 style={n >10 ? {color:"purple"} :{color:"red"}}>
      Css Dinâmico
     </h2>

     <h2 className={redTitle ? "red-title":"title"}>
      Usando Classes Dinâmicas no CSS externo
     </h2>

     <Title/>
   </div>
  )
}

export default App
