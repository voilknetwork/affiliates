import { useQuery } from '@apollo/client';
import React, { useContext, useEffect, useState } from 'react'
import TimeAgo from 'timeago-react';
import { LoginContext } from '../../../contexts';
import { PACKAGE_HISTORY_PAGINATE } from './PACKAGE_HISTORY_PAGINATE';

export default function PackagesHistory() {
    const {username, password} = useContext(LoginContext)
    const [page, setPage] = useState(1)
    const { loading, error, data, refetch } = useQuery(PACKAGE_HISTORY_PAGINATE,
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

                        <h2 class="card-title">Packages History</h2>
                    </header>
                    <div class="card-body">
                        <h3>Below is the history of all the packages that you activated. You can also find commissions history down below.</h3>

                        <table class="table table-responsive-md table-striped mb-0">
                            <thead>
                                <tr>
                                    <th>Package Name</th>
                                    <th>Cost Paid</th>
                                    <th>Activated at</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.get_package_history_p.docs.map((pack, i) => (<tr key={i}>
                                    <td>{pack.type}</td>
                                    <td>{pack.cost}$</td>
                                    <td><span class="badge badge-success"><TimeAgo
                                        datetime={pack.created_at}
                                    /></span></td>

                                </tr>))}

                            </tbody>
                        </table>
                        <ul class="pagination mt-5">
                        {data.get_package_history_p.hasPrevPage?
                    <li class="page-item"><a class="page-link"
                    onClick={(e) =>{
                        e.preventDefault()
                        setPage(data.get_package_history_p.prevPage)
                    }}
                    >«</a></li>:
                    null    
                    }

            
           <li class="page-item active"><a class="page-link">{data.get_package_history_p.page}</a></li>
            {data.get_package_history_p.hasNextPage?
                    <li class="page-item"><a class="page-link"
                    onClick={(e) =>{
                        e.preventDefault()
                        setPage(data.get_package_history_p.nextPage)
                    }}
                    >»</a></li>:
                    null    
                    }
        </ul>
                    </div>
                </section>
            </div>
        </div>

    )
}
