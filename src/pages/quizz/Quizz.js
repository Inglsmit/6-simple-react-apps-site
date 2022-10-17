import { useState } from 'react';
import './index.scss';

const questions = [
	{
		title: 'React - this is ... ?',
		variants: [ 'lib', 'framework', 'app' ],
		correct: 0,
	},
	{
		title: 'Component - this is  ... ',
		variants: [ 'app', 'part of app or page', 'no one know it' ],
		correct: 1,
	},
	{
		title: 'What is JSX?',
		variants: [
			'This is just HTML',
			'This is function',
			'This is the same as HTML, but with ability execute JS-code',
		],
		correct: 2,
	},
];

function Result ( { rightAnswers } ) {
	return (
		<div className="result">
			<img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
			<h2>You answered correctly { rightAnswers } times from { questions.length }</h2>
			<a href='/simple-apps/quizz/'>
				<button>Try again</button>
			</a>
		</div>
	);
}

function Game ( { step, question, onClickVariant } ) {
	const percentage = Math.round( ( step / questions.length ) * 100 );

	return (
		<>
			<div className="progress">
				<div style={ { width: `${ percentage }%` } } className="progress__inner"></div>
			</div>
			<h1>{ question.title }</h1>
			<ul>
				{
					question.variants.map( ( answer, i ) => (
						<li key={ i } onClick={ () => onClickVariant( i ) }>{ answer }</li>
					) )
				}
			</ul>
		</>
	);
}

function Quizz () {
	const [ step, setStep ] = useState( 0 );
	const [ rightAnswers, setRightAnswers ] = useState( 0 );

	const question = questions[ step ];
	const onClickVariant = ( i ) => {
		if ( i === question.correct ) setRightAnswers( rightAnswers + 1 );
		setStep( step + 1 );
	}

	return (
		<div className="quizz-wrap">
			{ step !== questions.length ? (
				<Game step={ step } question={ question } onClickVariant={ onClickVariant } />
			) : (
				<Result rightAnswers={ rightAnswers } />
			) }
		</div>
	);
}

export default Quizz;
