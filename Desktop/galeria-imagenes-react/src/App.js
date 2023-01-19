import './App.css';
import Header from './Components/Header';
import Card from './Components/Card';
import Footer from './Components/Footer';

import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
    <div className="App container">
          <Header
          subtitle = "Primera generación"
          title = "Pokédex"
          />
          <div className="row">
          <Card
          title = "Pikachu N.º 0025" 
          desc ="Cuando se enfada, este Pokémon descarga la energía que almacena en el interior de las bolsas de las mejillas."  
          photo="https://i0.wp.com/eltallerdehector.com/wp-content/uploads/2022/06/ab82e-pikachu-cute-png.png?resize=900%2C900&ssl=1"/>
           <Card
          title = "Psyduck N.º 0054" 
          desc ="Padece continuamente dolores de cabeza. Cuando son muy fuertes, empieza a usar misteriosos poderes."  
          photo="https://www.megaidea.net/wp-content/uploads/2021/08/pokemon26.png"/>
           <Card
          title = "Meowth N.º 0052" 
          desc ="Durante el día, se dedica a dormir. De noche, vigila su territorio con un brillo en los ojos."  
          photo="https://i.pinimg.com/736x/f9/35/4a/f9354ab7e8e462ed14a267507df1f548.jpg"/>
          </div>
    </div>
     <Footer desc="Pokémon 2023"></Footer>
     </>
      );
    }

export default App;
