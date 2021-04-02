import React, { useState } from "react";

function App() {
	const [input, setInput] = useState("");
	const [messages, setMessages] = useState([]);

	const handleChange = (e) => {
		setInput(e.target.value);
		setMessages(messages);
	};

	const submitMessage = () => {
		setMessages([...messages, input]);
		setInput("");
	};

	return (
		<div>
			<h3>Type in a new Message:</h3>
			<input
				type="text"
				onChange={handleChange}
				value={input}
				placeholder="Your message"
			/>
			<button type="submit" onClick={submitMessage}>
				Submit
			</button>

			<ul>
				{messages.map((x, i) => {
					return <li key={i}>{x}</li>;
				})}
			</ul>
		</div>
	);
}

export default App;
