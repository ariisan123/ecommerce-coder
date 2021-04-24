import React from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/Navbar/NavBar';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <ItemListContainer />
    </React.Fragment>
  );
}

export default App;
