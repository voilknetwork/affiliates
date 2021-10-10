import { useQuery } from '@apollo/client';
import { useContext } from 'react';
import TimeAgo from 'timeago-react';
import { LoginContext } from '../../../contexts';
import { GET_COMMISSION_ACTIVITY } from './GET_COMMISSION_ACTIVITY';

export default function CommissionActivity() {
    const {username, password} = useContext(LoginContext)
    const { loading, error, data } = useQuery(GET_COMMISSION_ACTIVITY,
        { 
            variables: { username, wif: password } 
        });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
        <div class="col-lg-6 col-xl-4 pt-2 pt-lg-0 mt-4 mt-lg-0">
        <div class="card card-modern">
            <div class="card-header">
                <div class="card-actions">
                    <a href="#" class="card-action card-action-toggle" data-card-toggle></a>
                </div>
                <h2 class="card-title">Last 5 Commissions</h2>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-ecommerce-simple table-borderless table-striped mb-1">
                        <thead>
                            <tr>
                                <th>User</th>
                                <th>Shares</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                           {data.get_commission_history.map((comm, i) => (
                              <tr key={i}>
                                <td>@{comm.from}</td>
                                <td>{comm.commission} Shares</td>
                                <td><TimeAgo
                                datetime={comm.created_at}
                                /></td>

                            </tr> 
                           )) }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    )
}
