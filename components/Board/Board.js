import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'

import { BOARD_HISTORY } from './BOARD_HISTORY';

export default function Board() {
    const { loading, error, data } = useQuery(BOARD_HISTORY);

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

                        <h2 class="card-title">Inviters Leader Board</h2>
                    </header>
                    <div class="card-body">
                        <h3>Here you see active inviters.</h3>

                        <table class="table table-responsive-md table-striped mb-0">
                            <thead>
                                <tr>
                                    <th>SR.</th>
                                    <th>Username</th>
                                    <th>Inviter count</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.get_board_history.map((pack, i) => (<tr key={i}>
                                    <th> {i +1}</th>
                                    <td>{pack._id}</td>
                                    <td>{pack.count}</td>

                                </tr>))}

                            </tbody>
                        </table>
                        
                    </div>
                </section>
            </div>
        </div>

    )
}
