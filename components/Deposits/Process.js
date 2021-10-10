import { useMutation } from '@apollo/client';
import React, { useContext } from 'react'
import { toast } from 'react-toastify';
import { LoginContext } from '../../contexts';
import { PROCESS_TRX } from './PROCESS_TRX';

export default function Process({id, refetch}) {
    const {username, password} = useContext(LoginContext)
    const [processTransaction, {loading, data, error}] = useMutation(PROCESS_TRX);
    if(loading) return "Processing"
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
            processTransaction(options)
            .then(x => {
                if(x && x.data && x.data.process_transaction && x.data.process_transaction.username){
                    
                    toast.success("Success: Transaction processed.")
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
        class="btn btn-primary btn-sm">Process</button>
    )
}
