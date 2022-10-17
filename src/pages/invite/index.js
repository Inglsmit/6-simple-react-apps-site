import React from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';

// Тут список пользователей: https://reqres.in/api/users

function Invite () {
	const [ users, setUsers ] = React.useState( [] );
	const [ invited, setInvite ] = React.useState( [] );
	const [ isLoading, setLoading ] = React.useState( true );
	const [ succes, setSucces ] = React.useState( false );
	const [ searchValue, setSearchValue ] = React.useState( '' );

	const onChageSearchValue = ( e ) => {
		setSearchValue( e.target.value )
	}

	const onClickSucces = () => {
		setSucces( true );
	}

	const onClickInvite = ( id ) => {
		if ( invited.includes( id ) ) {
			setInvite( prev => prev.filter( _id => _id !== id ) )
		} else {
			setInvite( prev => [ ...prev, id ] )
		}
	}

	React.useEffect( () => {
		fetch( 'https://reqres.in/api/users' )
			.then( res => res.json() )
			.then( json => {
				setUsers( json.data );
			} )
			.catch( error => console.warn( error ) )
			.finally( () => setLoading( false ) )

	}, [] )

	return (
		<div className="invite-wrapp">
			{ succes ? (
				<Success />
			) : (
				<Users
					searchValue={ searchValue }
					onChageSearchValue={ onChageSearchValue }
					items={ users }
					isLoading={ isLoading }
					invited={ invited }
					onClickInvite={ onClickInvite }
					onClickSucces={ onClickSucces }
				/>
			) }
		</div>
	);
}

export default Invite;
