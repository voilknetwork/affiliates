
import { useQuery } from '@apollo/client';
import { useContext } from 'react';
import { LoginContext } from '../../contexts';
import DepositForm from './DepositForm/DepositForm'
import DepositHistory from './DepositHistory/DepositHistory'
import { GET_DEPOSIT_HISTORY } from './DepositHistory/GET_DEPOSIT_HISTORY';

export default function Deposit() {
    const {username, password} = useContext(LoginContext)

    const { loading, error, data, refetch } = useQuery(GET_DEPOSIT_HISTORY, {
        variables: {
            username, wif: password
        }
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;


	return (
		<>
			<DepositForm refetch={refetch}/>
			<DepositHistory data={data} refetch={refetch}/>
		</>
	)
}
