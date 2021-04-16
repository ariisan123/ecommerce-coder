import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/Navbar/NavBar';

function App() {
  return (
    <div className="app">
      <NavBar />
      <ItemListContainer greeting="Hola Coders!" />
    </div>
  );
}

export default App;
