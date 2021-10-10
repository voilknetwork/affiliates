
import { useContext } from 'react';
import TimeAgo from 'timeago-react';
import { LoginContext } from '../../../contexts';
import { DELETE_DEPOSIT } from './DELETE_DEPOSIT';
import { toast } from 'react-toastify';
import { useMutation } from '@apollo/client';
export default function DepositHistory({data, refetch}) {

    const {username, password} = useContext(LoginContext)
    const [deleteDeposit, { loading, error }] = useMutation(DELETE_DEPOSIT);

    return (
        <div className="row">
        <section class="card">
            <header class="card-header">
                <div class="card-actions">
                    <a href="#" class="card-action card-action-toggle" data-card-toggle></a>
                    <a href="#" class="card-action card-action-dismiss" data-card-dismiss></a>
                </div>

                <h2 class="card-title">Deposit Requests.</h2>
            </header>
            <div class="card-body">
                <table class="table table-responsive-md mb-0">
                    <thead>
                        <tr>
                            <th>Method</th>

                            <th>Deposo</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.get_deposit_history.map((item, i) =>(<tr key={i}>
                            <td>{item.method}</td>
                            <td>{item.deposo}</td>
                            <td>{item.amount}</td>
                            <td>{item.status}</td>
                            <td><TimeAgo datetime={item.created_at}></TimeAgo></td>
                            <td class="actions">
                                {item.status === "pending"?<a 
                                onClick={(e) => {
                                    e.preventDefault()
                                    deleteDeposit({variables: {
                                        username,
                                        wif: password,
                                        trx_id: item._id
                                    }}).then(x => {

                                        if(x && x.data && x.data.delete_deposit && 
                                            x.data.delete_deposit.deletedCount &&
                                            x.data.delete_deposit.deletedCount === 1){
                                        refetch()
                                        toast.success("Successfully deleted")
                                        }else {
                                            toast.error("Error: Could not deleted.")
                                        }

                                    }).catch(e => {
                                        toast.error("Error: " + e.message)

                                    })
                                }}
                                class="delete-row"><i class="far fa-trash-alt"></i></a>: null}
                            </td>
                        </tr>))}
                        
                    </tbody>
                </table>
            </div>
        </section>
    </div>

    )
}
