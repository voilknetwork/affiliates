import { useContext, useEffect, useState } from 'react'
import Head from 'next/head'
import { LoginContext } from '../../contexts';
import { useQuery } from '@apollo/client';
import { CUSTOMERS_HISTORY_PAGINATE } from './CUSTOMERS_HISTORY_PAGINATE';
import TimeAgo from 'timeago-react';

export default function SearchContent() {
	const {username, password} = useContext(LoginContext)
    const [page, setPage] = useState(1)
    const { loading, error, data, refetch } = useQuery(CUSTOMERS_HISTORY_PAGINATE,
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

						<h2 class="card-title">Customer Details</h2>
					</header>
					<div class="card-body">
                    <h3>Referral link: <span class="text-success">https://register.voilk.com/register?ref={username}</span></h3>
						<table class="table table-bordered table-striped mb-0" id="datatable-details">
							<thead>
								<tr>
									<th>Username</th>
									<th>Joined</th>
									<th>Visit</th>
								</tr>
							</thead>
							<tbody>
							{data.get_customers_history_p.docs.map((comm, i) => (
                              <tr key={i}>
                                <td>@{comm.invitee}</td>
                                <td><TimeAgo
                                datetime={comm.creation_time}
                                /></td>
								<td><a href={`https://mysharespay.com/@${comm.invitee}`}>Visit Blog</a></td>

                            </tr> 
                           )) }
								
							</tbody>

						</table>
						<ul class="pagination mt-5">
                        {data.get_customers_history_p.hasPrevPage?
                    <li class="page-item"><a class="page-link"
                    onClick={(e) =>{
                        e.preventDefault()
                        setPage(data.get_customers_history_p.prevPage)
                    }}
                    >«</a></li>:
                    null    
                    }

            
           <li class="page-item active"><a class="page-link">{data.get_customers_history_p.page}</a></li>
            {data.get_customers_history_p.hasNextPage?
                    <li class="page-item"><a class="page-link"
                    onClick={(e) =>{
                        e.preventDefault()
                        setPage(data.get_customers_history_p.nextPage)
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
