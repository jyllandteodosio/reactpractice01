import './App.css'

const WithAuth = (WrappedComponent) => {

	return (props) => {
		if (props.isAuthorized) {
			return <WrappedComponent {...props} />
		} else {
			return <div>Hello {props.name}! Access Denied!</div>
		}
	}
}

export default WithAuth
