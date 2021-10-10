import { useQuery } from '@apollo/client';
import { useContext, useState } from 'react'
import { LoginContext } from '../../contexts';
import WithdrawForm from './WithdrawForm/WithdrawForm'
import { GET_WITHDRAWAL_HISTORY } from './WithdrawHistory/GET_WITHDRAWAL_HISTORY';
import WithdrawHistory from './WithdrawHistory/WithdrawHistory'

export default function Withdraw() {
	const {username, password} = useContext(LoginContext)
    const { loading, error, data, refetch } = useQuery(GET_WITHDRAWAL_HISTORY,
		{variables: {
			username, wif: password
		}}) 
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

	return (
		<>
		<WithdrawForm refetch={refetch} />
		<WithdrawHistory data={data} refetch={refetch} />
		</>
	)
}
