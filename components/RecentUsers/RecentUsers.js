import { useContext, useEffect, useState } from 'react'
import Head from 'next/head'
import { LoginContext } from '../../contexts';
import { useQuery } from '@apollo/client';
import { RECENT_USERS_PAGINATE } from './RECENT_USERS_PAGINATE';
import TimeAgo from 'timeago-react';

export default function RecentUsers() {
    const [page, setPage] = useState(1)
    const { loading, error, data, refetch } = useQuery(RECENT_USERS_PAGINATE,
        { 
            variables: { page, limit: 20 } 
        });

    useEffect(() => {
        refetch({ 
            variables: { page, limit: 20 } 
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

						<h2 class="card-title">Recently joined Users</h2>
					</header>
					<div class="card-body">
                        <table class="table table-bordered table-striped mb-0" id="datatable-details">
							<thead>
								<tr>
									<th>Username</th>
									<th>Invited By</th>
									<th>Joined</th>
								</tr>
							</thead>
							<tbody>
							{data.get_recent_users.docs.map((comm, i) => (
                              <tr key={i}>
                                <td><a class="text-primary" href={`https://social.voilk.com/@${comm.invitee}`}>@{comm.invitee}</a></td>
                                <td><a class="text-info" href={`https://social.voilk.com/@${comm.inviter}`}>@{comm.inviter}</a></td>
                                <td><TimeAgo
                                datetime={comm.creation_time}
                                /></td>

                            </tr> 
                           )) }
								
							</tbody>

						</table>
						<ul class="pagination mt-5">
                        {data.get_recent_users.hasPrevPage?
                    <li class="page-item"><a class="page-link"
                    onClick={(e) =>{
                        e.preventDefault()
                        setPage(data.get_recent_users.prevPage)
                    }}
                    >«</a></li>:
                    null    
                    }

            
           <li class="page-item active"><a class="page-link">{data.get_recent_users.page}</a></li>
            {data.get_recent_users.hasNextPage?
                    <li class="page-item"><a class="page-link"
                    onClick={(e) =>{
                        e.preventDefault()
                        setPage(data.get_recent_users.nextPage)
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
