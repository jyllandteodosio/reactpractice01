import TempComponent from "./TempComponent"
import AuthComponent from "./AuthComponent"
import WithLogger from "./WithLogger"
import WithAuth from "./WithAuth"
import './App.css'

const ComponentWithLogger = WithLogger(TempComponent)

const ComponentWithAuth = WithAuth(AuthComponent)

function HigherOrderComponents() {
	return (
		<>
			<h1>Higher Order Components</h1>
			<div>
				<h2>Exercise 1: Logging HOC</h2>
				<ComponentWithLogger name="Jylland"/>
				<br />
				<hr />
			</div>

			<div>
				<h2>Exercise 2: Authorization HOC</h2>
				<ComponentWithAuth name="Jylland" isAuthorized={true}/>
				<ComponentWithAuth name="Kaizer" isAuthorized={false}/>
				<br />
				<hr />
			</div>
		</>
	)
}

export default HigherOrderComponents
