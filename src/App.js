import { Link, Route, Routes } from 'react-router-dom';
import { Counter } from './pages/counter/Counter';
import { Home } from './pages/Home';
import Invite from './pages/invite';
import Modal from './pages/modal/Modal';
import Quizz from './pages/quizz/Quizz';


function App () {
	return (
		<div className="App">
			<Link to="/simple-apps/">HOME</Link>
			<div className="content">
				<Routes>
					<Route path="/simple-apps/" element={ <Home /> } />
					<Route path="/simple-apps/counter/" element={ <Counter /> } />
					<Route path="/simple-apps/modal/" element={ <Modal /> } />
					<Route path="/simple-apps/quizz/" element={ <Quizz /> } />
					<Route path="/simple-apps/invite/" element={ <Invite /> } />
				</Routes>
			</div>
		</div>
	);
}

export default App;
