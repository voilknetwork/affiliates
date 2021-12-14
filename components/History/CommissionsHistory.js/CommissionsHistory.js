import { useQuery } from '@apollo/client';
import { useContext, useEffect, useState } from 'react';
import TimeAgo from 'timeago-react';
import { LoginContext } from '../../../contexts';
import { COMMISSION_HISTORY_PAGINATE } from './COMMISSION_HISTORY_PAGINATE';

export default function CommissionsHistory() {
    const { username, password } = useContext(LoginContext)
    const [page, setPage] = useState(1)
    const { loading, error, data, refetch } = useQuery(COMMISSION_HISTORY_PAGINATE,
        {
            variables: { username, wif: password, page, limit: 5 }
        });

    useEffect(() => {
        refetch({
            variables: { username, wif: password, page, limit: 5 }
        })
    }, [page])

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
        <div class="row">
            <div class="col">
                <section class="card">
                    <header class="card-header">
                        <div class="card-actions">
                            <a href="#" class="card-action card-action-toggle" data-card-toggle></a>
                            <a href="#" class="card-action card-action-dismiss" data-card-dismiss></a>
                        </div>

                        <h2 class="card-title">Commissions History</h2>
                    </header>
                    <div class="card-body">
                        <h3>You can see your commissions in VOILK, that you received here.
                            You can exchange your VOILK against the $$ via the internal market on our social network,
                            Where people trade the VOILK against the dollars.</h3>
                        <table class="table table-responsive-md table-striped mb-0">
                            <thead>
                                <tr>
                                    <th>Username</th>
                                    <th>Commission</th>
                                    <th>Paid at</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.get_commission_history_p.docs.map((comm, i) => (
                                    <tr key={i}>
                                        <td>@{comm.from}</td>
                                        <td>{comm.commission} VOILK</td>
                                        <td><TimeAgo
                                            datetime={comm.created_at}
                                        /></td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <ul class="pagination mt-5">
                            {data.get_commission_history_p.hasPrevPage ?
                                <li class="page-item"><a class="page-link"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        setPage(data.get_commission_history_p.prevPage)
                                    }}
                                >«</a></li> :
                                null
                            }


                            <li class="page-item active"><a class="page-link">{data.get_commission_history_p.page}</a></li>
                            {data.get_commission_history_p.hasNextPage ?
                                <li class="page-item"><a class="page-link"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        setPage(data.get_commission_history_p.nextPage)
                                    }}
                                >»</a></li> :
                                null
                            }
                        </ul>
                    </div>
                </section>
            </div>
        </div>

    )
}
