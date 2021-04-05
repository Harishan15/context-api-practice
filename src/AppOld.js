import React, { useState, createContext } from "react";

const ADD = "ADD";
const addMessageAction = (message) => {
	return {
		type: ADD,
		message,
	};
};

const messageReducer = (state = [], action) => {
	switch (action.type) {
		case ADD:
			return [...state, action.message];
		default:
			return state;
	}
};

const MessageContext = createContext(messageReducer); //creating the context
const { Provider, Consumer } = MessageContext;

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

const DisplayMessage = (props) => {
	const [input, setInput] = useState("");
	const [messages, setMessages] = useState([]);

	const handleChange = (e) => {
		setInput(e.target.value);
		setMessages(messages);
	};

	const submitMessage = () => {
		// props.submitNewMessage(messages);
		// console.log(props);
		setMessages([...messages, input]);
		setInput("");
	};
	console.log("prop-value", props.value);

	// const value = useContext(MessageContext);

	return (
		<div>
			{/* <Consumer>{(value) => <div>The answer is {value}.</div>}</Consumer> */}
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

function App() {
	return (
		<Provider value={(mapStateToProps(), mapDispatchToProps())}>
			<DisplayMessage />
		</Provider>
	);
}

export default App;
