import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
	return (
		<>
			<Link to="/simple-apps/counter/">Counter</Link><br />
			<Link to="/simple-apps/modal/">Modal</Link><br />
			<Link to="/simple-apps/quizz/">Quizz</Link><br />
			<Link to="/simple-apps/invite/">Invite</Link><br />
		</>
	)
}
