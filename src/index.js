import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDlqKtm6JTx1zpSKSa9ijuEcbnMuse_n2k';

// Create a new component. This component should produce
//some HTML

const App = () =>  {
  return ( 
  <div>
    <SearchBar />
  </div>
  );
};


// take this component's generated HTML and put it in on the page (in the DOM)
const root = document.getElementById('root');

ReactDOM.render(<App />, root);

