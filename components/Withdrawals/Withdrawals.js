import { useQuery } from '@apollo/client';
import React, { useContext, useEffect, useState } from 'react'
import TimeAgo from 'timeago-react'
import { LoginContext } from '../../contexts';
import Process from '../Deposits/Process';
import Reject from '../Deposits/Reject';
import { WITHDRAWAL_REQS } from './WITHDRAWAL_REQS';
import WStats from './WStats';

export default function Withdrawals() {
    const { username, password } = useContext(LoginContext)
    const [page, setPage] = useState(1)
    const { loading, error, data, refetch } = useQuery(WITHDRAWAL_REQS,
        {
            variables: { username, wif: password, page, limit: 5 }
        });

    useEffect(() => {
        refetch({
            variables: { username, wif: password, page, limit: 10 }
        })
    }, [page])

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
        <>
        <WStats />
        <div className="row">
        <section class="card">
            <header class="card-header">
                <div class="card-actions">
                    <a href="#" class="card-action card-action-toggle" data-card-toggle></a>
                    <a href="#" class="card-action card-action-dismiss" data-card-dismiss></a>
                </div>

                <h2 class="card-title">Withdrawal Requests.</h2>
            </header>
            <div class="card-body">
                <table class="table table-responsive-md mb-0">
                    <thead>
                        <tr>
                            <th>username</th>
                            <th>Method</th>

                            <th>Deposo</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {data.get_withdrawal_requests.docs.map((depo, i) => (
                                    <tr key={i}>
                                    <td>{depo.username}</td>
                                    <td>{depo.method}</td>
                                    <td>{depo.deposo}</td>
                                    <td>{depo.amount}</td>
                                    <td>{depo.status}</td>
                                    <td><TimeAgo datetime={depo.created_at}></TimeAgo></td>
                                    <td class="actions">
                                        <Process id={depo._id} refetch={refetch} />{" "}
                                        <Reject id={depo._id} refetch={refetch} />
                                    </td>
                                </tr>
                                ))}
                        
                    </tbody>
                </table>
                <ul class="pagination mt-5">
                            {data.get_withdrawal_requests.hasPrevPage ?
                                <li class="page-item"><a class="page-link"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        setPage(data.get_withdrawal_requests.prevPage)
                                    }}
                                >«</a></li> :
                                null
                            }


                            <li class="page-item active"><a class="page-link">{data.get_withdrawal_requests.page}</a></li>
                            {data.get_withdrawal_requests.hasNextPage ?
                                <li class="page-item"><a class="page-link"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        setPage(data.get_withdrawal_requests.nextPage)
                                    }}
                                >»</a></li> :
                                null
                            }
                        </ul>
            </div>
        </section>
    </div>
    </>
    )
}
