import React, { useState } from 'react';
import './assets/scss/index.scss';

const Popup = ( { isShowModal, setShowModal, children } ) => (
	<div className={ `overlay animated ${ isShowModal ? 'show' : '' }` }>
		<div className="modal">
			<svg onClick={ () => setShowModal( false ) } height="200" viewBox="0 0 200 200" width="200">
				<title />
				<path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
			</svg>
			{ children }
		</div>
	</div>

)

function Modal () {
	const [ isShowModal, setShowModal ] = useState( false );

	const onClickShowModal = () => {
		setShowModal( !isShowModal )
	}

	return (
		<div className="modal-wrapp">
			<button onClick={ onClickShowModal } className="open-modal-btn">✨ Открыть окно</button>

			<Popup isShowModal={ isShowModal } setShowModal={ setShowModal }>
				<img alt="" src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
				<h2>Modal</h2>
			</Popup>

		</div >
	);
}

export default Modal;
