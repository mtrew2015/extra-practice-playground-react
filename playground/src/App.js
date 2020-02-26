import React, {useContext} from 'react';
import './App.css';
import NewComponent from './NewComponent';
import NameContext from './NameContext';


// then create provider component

function App() {
  const nameContext = useContext(NameContext)
	return (
		<div className="App">
			<h1>Context API Practice</h1>
      {nameContext.name}
      <NewComponent/>
		</div>
	);
}

export default App;
