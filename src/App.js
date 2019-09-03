import React from 'react';
import { Link } from 'react-router-dom';
import { Store } from './store/Store';

const App = (props) => {
  const { state } = React.useContext(Store);
  console.log(state);
  
  return (
    <>
      <header className="header">
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick your favourite episodes</p>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/faves">Favourite {state.favourites.length}</Link>
        </div>
      </header>
      {props.children}
    </>
  );
}

export default App;
