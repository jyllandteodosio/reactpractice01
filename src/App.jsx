import UseState from './UseState'
import UseEffect from './UseEffect'
import HigherOrderComponents from './HigherOrderComponents'
import UseRef from './UseRef'
import Events from './Events'
import './App.css'

function App() {

	return (
		<>
			<div id="navigation">
				<ul id="navigation-list">
					<li>Navigation:</li>
					<li><a href="#use-state">UseState</a></li>
					<li><a href="#use-effect">UseEffect</a></li>
					<li><a href="#hoc">HigherOrderComponents</a></li>
					<li><a href="#use-ref">UseRef</a></li>
					<li><a href="#events">Events</a></li>
				</ul>
			</div>
			<div id="use-state">
				<UseState />
			</div>
			<div id="use-effect">
				<UseEffect />
			</div>
			<div id="hoc">
				<HigherOrderComponents />
			</div>
			<div id="use-ref">
				<UseRef />
			</div>
			<div id="events">
				<Events />
			</div>
		</>
	)
}

export default App
