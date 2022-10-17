import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
	return (
		<>
			<Link to="/simple-react-apps/counter/">Counter</Link><br />
			<Link to="/simple-react-apps/modal/">Modal</Link><br />
			<Link to="/simple-react-apps/quizz/">Quizz</Link><br />
			<Link to="/simple-react-apps/invite/">Invite</Link><br />
		</>
	)
}
