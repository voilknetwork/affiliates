import { useMutation } from '@apollo/client';
import React, { useContext } from 'react'
import { toast } from 'react-toastify';
import { LoginContext } from '../../contexts';
import { REJECT_TRX } from './REJECT_TRX';

export default function Reject({id, refetch}) {
    const {username, password} = useContext(LoginContext)
    const [rejectTransaction, {loading, data, error}] = useMutation(REJECT_TRX);
    if(loading) return "Rejecting"
    return (
        <button 
        onClick={(e) => {
            e.preventDefault()
            const options = { 
                variables: { 
                    username: username, 
                    wif: password,
                    trx_id: id
                } 
            }
            rejectTransaction(options)
            .then(x => {
                if(x && x.data && x.data.reject_transaction && x.data.reject_transaction.username){
                    
                    toast.success("Success: Transaction rejected.")
                    refetch({
                        variables: { username, wif: password, page: 1, limit: 10 }
                    })
                }
                else {
                    toast.error("Error: There was some error")
                }
            })
            .catch(e => {
                toast.error("Error: " + e.message)
            })
        }}
        class="btn btn-danger btn-sm">Reject</button>
    )
}
