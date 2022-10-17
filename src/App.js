import { Link, Route, Routes } from 'react-router-dom';
import { Counter } from './pages/counter/Counter';
import { Home } from './pages/Home';
import Invite from './pages/invite';
import Modal from './pages/modal/Modal';
import Quizz from './pages/quizz/Quizz';


function App () {
	return (
		<div className="App">
			<Link to="/simple-react-apps/">HOME</Link>
			<div className="content">
				<Routes>
					<Route path="/simple-react-apps/" element={ <Home /> } />
					<Route path="/simple-react-apps/counter/" element={ <Counter /> } />
					<Route path="/simple-react-apps/modal/" element={ <Modal /> } />
					<Route path="/simple-react-apps/quizz/" element={ <Quizz /> } />
					<Route path="/simple-react-apps/invite/" element={ <Invite /> } />
				</Routes>
			</div>
		</div>
	);
}

export default App;
