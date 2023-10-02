import './App.css';
import { useState } from 'react';
import { Text } from './Text';

/* Component Lifecycle */
function App() {
	const [showText, setShowText] = useState(false);

	return (
		<div className="App"> 
		<button onClick={() => {
			setShowText(!showText);
		}}
		>
			Show Text
		</button>

		{showText && <Text />}
		</div>
	);
}


export default App;

/* Test this app with the inspect element open */

/* Mounting stage */
// Component starting to appear in the screen
// Component starting to exist

/* Updating stage */
// Component changing

/* Unmounting stage */
// Opposite of mounting

