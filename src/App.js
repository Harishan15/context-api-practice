// import './App.css';
import React, { useState, useCallback } from "react";

function App() {
	const [input, setInput] = useState("");
	const [messages, setMessages] = useState([]);

	const submitMessage = () => {
		messages.push(input);
	};

	const handleChange = useCallback((event) => {
		const { value } = event.target;
		setInput({ ...input, value });
	});

	return (
		<div className="App">
			<h2>Type any messages</h2>
			<input type="type" onChange={handleChange} />
			<ul>
				<li>{}</li>
			</ul>
			<button type="Submit" onChange={submitMessage}>
				Submit
			</button>
		</div>
	);
}

export default App;
