import '../src/App.css'
import Card from '../src/components/Card'
import Triki from '../src/components/Triki'


function App() {
  return (
    <div className='App'>
      <Card
      comment = "Se todo sobre el mundo de los videojuegos"
      imagen = "witcher"
      nombre = "JACK JHONSON"
      cargo = "Videojugador profesional"
      />
      <Card
      comment = "Sistemas, programas y maquinas, esas es mi pasion"
      imagen = "sniper"
      nombre = "VICTOR STRONHEIM"
      cargo = "Ingeniero en sistemas"
      />
      <Triki 
       imagen1 = "hero"
       title1 = "ORDER SUMMARY"
       text1 = "You can now listen to millions of songs, audiobooks and podcasts on any device , anywhere you like!"
       imagen2 = "music"
       title2 = "Annual Plan"
       price = "$59.99/year"
       txtbtn1 = "Change"
       title3 = "Proceed to payment"
       title4 = "Cancel order"
      />
      
  </div>
  );
}

export default App;

