import React, { useState, useReducer } from "react";

const ADD = "ADD";

const addMessage = (message) => {
	return {
		type: ADD,
		message: message,
	};
};

function messageReducer(state, action) {
	switch (action.type) {
		case ADD:
			return [...state, action.message];
		default:
			return state;
	}
}

const App = () => {
	const [input, setInput] = useState(""); //local state
	const [messages, setMessages] = useState([]); //local state

	const initialState = "";

	const handleChange = (e) => {
		setInput(e.target.value);
		setMessages(messages); //no need this in context (comment it)
	};

	const submitMessage = () => {
		setMessages([...messages, input]);
		setInput("");
	};

	const [state, dispatch] = useReducer(messageReducer, initialState);

	return (
		<div>
			<h1>Context Api Practices</h1>
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
};

export default App;
