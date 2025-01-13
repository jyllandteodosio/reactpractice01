import { useState, useEffect } from 'react'
import './App.css'

function Timer() {
	const [timer, setTimer] = useState(0)
	const [timerActive, setTimerActive] = useState(false)

	useEffect(() => {
		if (!timer) return

		if (timer && timerActive) {
			const internalTimer = setInterval(() => {
				setTimer(timer - 1)
			}, 1000)
	
			return () => clearInterval(internalTimer)
		}
	}, [timerActive, timer])

	const startTimer = () => {
		const timerInput = document.getElementById("timer-input").value

		console.log(timerInput)

		setTimer(timerInput)
		setTimerActive(!timerActive)
	}

	return (
		<>
			<div id="seconds-timer">
				<p>Enter countdown timer in seconds:</p>
				<p>
					<input id="timer-input" type="number" min="0" />
					{" "}
					<button onClick={startTimer}>Start Timer</button>
				</p>
				<h4>Countdown</h4>
				<p className="timer-number">{timer}</p>
			</div>
		</>
	)
}

export default Timer