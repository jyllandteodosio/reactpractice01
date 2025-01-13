import { useState, useEffect } from 'react'
import Timer from "./Timer"
import './App.css'

function UseEffect() {

	const [resourceData, setResourceData] = useState([])
	const [darkModeToggle, setDarkModeToggle] = useState(false)
	const [windowSize, setWindowSize] = useState(0)
	const root = document.getElementById("root")

	useEffect(() => {
		fetch('https://dummyjson.com/posts/?limit=12')
			.then((response) => response.json())
			.then((data) => setResourceData(data));
	}, [])

	useEffect(() => {
		root.classList.toggle("dark-mode", darkModeToggle)
	}, [darkModeToggle])

	const toggleDarkMode = () => {
		setDarkModeToggle(!darkModeToggle)
	}

	useEffect(() => {
		window.addEventListener("resize", updateWindowSize)

		updateWindowSize()

		return () => window.removeEventListener("resize", updateWindowSize);
	}, [])
	
	// when do we need to add dependencies 
	// - no dependency if we only want to run the effect on mount (on first render)
	// - use dependency if we have a dependency on a variable to re-render an element

	// when do we need to cleanup
	// - to avoid memory leaks
	// - to avoid duplicate or unwanted side effects

	const updateWindowSize = () => setWindowSize(window.innerWidth)

	return (
		<>
			<h1>UseEffect</h1>
			<div>
				<h2>Exercise 1: Fetch Data</h2>
				<div id="resource-data">
					{resourceData.posts && resourceData.posts.map(resource => (
						<div className="resource" key={resource.id}>
							<h5 className="resource-title">{resource.title}</h5>
							<p className="resource-body">{resource.body}</p>
						</div>
					))
					}
				</div>
				<br />
				<hr />
			</div>

			<div>
				<h2>Exercise 2: Countdown Timer</h2>
				<Timer />
				<br />
				<hr />
			</div>

			<div>
				<h2>Exercise 3: Dark Mode</h2>
				<p>
					<button id="dark-mode-toggle" onClick={toggleDarkMode}>{darkModeToggle ? "Disable" : "Enable"} Dark Mode</button>
				</p>
				<br />
				<hr />
			</div>

			<div>
				<h2>Exercise 4: Window Resizer</h2>
				<p>
					Window Width: {windowSize} px
				</p>
				<br />
				<hr />
			</div>
		</>
	)
}

export default UseEffect
