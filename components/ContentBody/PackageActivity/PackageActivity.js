import { useQuery } from '@apollo/client';
import React, { useContext } from 'react'
import TimeAgo from 'timeago-react';
import { LoginContext } from '../../../contexts';
import { GET_PACKAGE_ACTIVITY } from './GET_PACKAGE_ACTIVITY';

export default function PackageActivity() {
    const {username, password} = useContext(LoginContext)

    const { loading, error, data } = useQuery(GET_PACKAGE_ACTIVITY,
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
                <h2 class="card-title">Package Activity</h2>
            </div>
            <div class="card-body">
                <ul class="list list-unstyled mb-0">
                    {data.get_package_history.map((pack, i) => (<li class="activity-item">
                        <span class="activity-time"><TimeAgo
                                datetime={pack.created_at}
                                /></span> <i class="fas fa-chevron-right text-color-primary"></i>
                        <span class="activity-description">
                            <a href="#" class="text-color-dark"><strong>{pack.type}</strong></a> plan activated for {pack.cost}$.
                        </span>
                    </li>))}
                </ul>

            </div>
        </div>
    </div>

    )
}
