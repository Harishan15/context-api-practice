// import './App.css';
import React, { useState } from "react";

function App() {
	const [input, setInput] = useState("");
	const [messages, setMessages] = useState([]);

	const handleChange = () => {
		console.log("Hello : ", this);
	};

	return (
		<div className="App">
			<h2>Type any messages</h2>
			<input type="type" onChange={handleChange.bind(this)} />
			<ul>
				<li>{}</li>
			</ul>
			<button type="Submit">Submit</button>
		</div>
	);
}

export default App;
