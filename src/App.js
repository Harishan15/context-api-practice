import React, { useState, createContext } from "react";

const ADD = "ADD";
const addMessageAction = (message) => {
	return {
		type: ADD,
		message,
	};
};

const messageReducer = (state = [], action) => {
	// Use switch statement to lay out the reducer logic in response to different action type
	switch (action.type) {
		case ADD:
			return [...state, action.message];
		default:
			return state;
	}
};

const MessageContext = createContext(messageReducer); //creating the context

//context api ends here

const mapStateToProps = (state) => {
	return { messages: state };
};

const mapDispatchToProps = (dispatch) => {
	return {
		submitNewMessage: (message) => {
			dispatch(addMessageAction(message));
		},
	};
};

function App() {
	return (
		<MessageContext.Provider value={(mapStateToProps(), mapDispatchToProps())}>
			<DisplayMessage />
		</MessageContext.Provider>
	);
}

const DisplayMessage = () => {
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
};

export default App;
