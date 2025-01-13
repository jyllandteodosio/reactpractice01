import { useState } from 'react'
import './App.css'

function Events() {

	// Exercise 1

	const buttonClicked = () => {
		alert("Button Clicked!")
	}


	// Exercise 2

	const [message, setMessage] = useState("")

	const submitForm = (event) => {
		event.preventDefault()
		const name = document.getElementById("event-name").value
		const email = document.getElementById("event-email").value

		setMessage(
			<div>
				<p>Name: {name} </p><p>Email: {email}</p>
			</div>
		)
	}


	// Exercise 3

	const [keyPressed, setKeyPressed] = useState(null)

	document.addEventListener("keydown", (event) => {
		setKeyPressed(event.key)
	})


	// Exercise 4

	const boxes = ["box1", "box2"]
	const [items, setitems] = useState([
		{ id: 1, box: boxes[0], value: "Item A" },
		{ id: 2, box: boxes[0], value: "Item B" },
		{ id: 3, box: boxes[0], value: "Item C" },
	])

	const [dragging, setDragging] = useState()

	const handleDragStart = (e) => {
		setDragging(e.target)
	}

	const handleDragEnter = (e, box) => {
		setitems([...items, (items[dragging.id - 1].box = box)])
	}

	return (
		<>
			<h1>Events</h1>
			<div>
				<h2>Exercise 1: Button Click</h2>
				<p>
					<button onClick={buttonClicked}>Button</button>
				</p>
				<br />
				<hr />
			</div>

			<div>
				<h2>Exercise 2: Form Submission</h2>
				<form id="event-form" onSubmit={submitForm}>
					<p>
						<label htmlFor="event-name">Name: </label>
						<input type="text" id="event-name"></input></p>
					<p>
						<label htmlFor="event-email">Email: </label>
						<input type="email" id="event-email"></input></p>
					<p>
						<button type="submit">Submit</button></p>
				</form>
				<h4>Message</h4>
				<div id="event-message">{message}</div>
				<br />
				<hr />
			</div>

			<div>
				<h2>Exercise 3: Keyboard Events</h2>
				<p>Key Pressed: {keyPressed}</p>
				<br />
				<hr />
			</div>

			<div>
				<h2>Exercise 4: Drag and Drop</h2>
				<div id="drag-drop">
					{boxes.map((box) => (
						<div
							className="box"
							key={box}
							onDragEnter={(e) => handleDragEnter(e, box)}>
							<p className="title">{box}</p>
							<div>
								{items.filter((item) => item.box === box)
									.map((item) => (
										<div
											draggable
											key={item.id}
											id={item.id}
											className="item"
											onDragStart={(e) => handleDragStart(e)}>
											{item.value}
										</div>
									))}
							</div>
						</div>
					))}
				</div>
				<br />
				<hr />
			</div>


		</>
	)
}

export default Events
