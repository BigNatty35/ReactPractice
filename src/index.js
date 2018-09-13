import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component. This component should produce
//some HTML

const App = () =>  {
  return <div>Hi!</div>;
};


const root = document.getElementById('root');

ReactDOM.render(<App />, root);
// take this component's generated HTML and put it in on the page (in the DOM)

