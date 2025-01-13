import { useState, useEffect, useRef } from 'react'
import './App.css'


function UseRef() {
	// Exercise 1

	const focusInput = useRef(null)

	const triggerFocus = () => {
		focusInput.current.focus();
	}

	// Exercise 2

	const [counter, setCounter] = useState(0)
	let prevCountRef = useRef(0)
	const prevCount = prevCountRef.current

	useEffect(() => {
		prevCountRef.current = counter
	}, [counter])

	const addCount = () => {
		setCounter(counter + 1)
	}

	const removeCount = () => {
		setCounter(counter - 1)
	}

	// Exercise 3

	const canvasRef = useRef(null)
	const contextRef = useRef(null)
	const [isDrawing, setIsDrawing] = useState(false)

	useEffect(() => {
		const canvas = canvasRef.current
		const context = canvas.getContext("2d")

		// Set canvas dimensions
		canvas.width = window.innerWidth * 0.8;
		canvas.height = window.innerHeight * 0.6;

		context.lineCap = 'round';
		context.strokeStyle = 'pink';
		context.lineWidth = 5;
		contextRef.current = context;
	}, [])

	// Helper function to calculate the corrected mouse position
	const getCorrectedPosition = (nativeEvent) => {
		const canvas = canvasRef.current;
		const rect = canvas.getBoundingClientRect(); // Get canvas position and dimensions
		const scaleX = canvas.width / rect.width; // Adjust for CSS scaling
		const scaleY = canvas.height / rect.height;

		return {
			x: (nativeEvent.clientX - rect.left) * scaleX,
			y: (nativeEvent.clientY - rect.top) * scaleY,
		};
	};

	const start = ({ nativeEvent }) => {
		const { x, y } = getCorrectedPosition(nativeEvent);
		contextRef.current.beginPath()
		contextRef.current.moveTo(x, y)
		setIsDrawing(true)
	}

	const draw = ({ nativeEvent }) => {
		if (!isDrawing) return
		const { x, y } = getCorrectedPosition(nativeEvent);
		contextRef.current.lineTo(x, y)
		contextRef.current.stroke()
	}

	const stop = () => {
		contextRef.current.closePath()
		setIsDrawing(false)
	}

	const clearCanvas = () => {
		contextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
	};

	return (
		<>
			<h1>UseRef</h1>
			<div>
				<h2>Exercise 1: Focus Input</h2>
				<p><input type="text" id="focus-input" ref={focusInput} /></p>
				<p><button id="focus-btn" onClick={triggerFocus}>Focus on Input Field</button></p>
				<br />
				<hr />
			</div>

			<div>
				<h2>Exercise 2: Track Previous State</h2>
				<p>Previous Count: {prevCount}</p>
				<p>Current Count: {counter}</p>
				<p>
					<button id="add-counter-btn" onClick={addCount}>Add Count</button>{" "}
					<button id="remove-counter-btn" onClick={removeCount}>Remove Count</button>
				</p>
				<br />
				<hr />
			</div>

			<div>
				<h2>Exercise 3: Canvas Drawing</h2>
				<div id="canvas-container">
					<canvas
						ref={canvasRef}
						onMouseDown={start}
						onMouseMove={draw}
						onMouseUp={stop}
						onMouseLeave={stop}
					>
					</canvas>
				</div>
				<p><button id="clear-canvas-btn" onClick={clearCanvas}>Clear Canvas</button></p>
				<br />
				<hr />
			</div>
		</>
	)
}

export default UseRef
