import { useEffect } from 'react'
import './App.css'

const WithLogger = (WrappedComponent) => {
	return (props) => {
		useEffect(() => {
			console.log(`${WrappedComponent.name} mounted`)

			return () => {
				console.log(`${WrappedComponent.name} unmounted`)
			}
		}, [])

		return <WrappedComponent {...props} />
	}
}

export default WithLogger
