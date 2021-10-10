import { useQuery } from '@apollo/client';
import React, { useContext } from 'react'
import { LoginContext } from '../../contexts';
import { DEPOSIT_STATS } from './DEPOSIT_STATS';

export default function DStats() {
    const { username, password } = useContext(LoginContext)
    const { loading, error, data, refetch } = useQuery(DEPOSIT_STATS,
        {
            variables: { username, wif: password }
        });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
        <div class="row">
                <div class="col-lg-12">
                    <div class="row mb-3">
                        <div class="col-xl-4">
                            <section class="card card-featured-left card-featured-primary mb-3">
                                <div class="card-body">
                                    <div class="widget-summary">
                                        <div class="widget-summary-col widget-summary-col-icon">
                                            <div class="summary-icon bg-primary">
                                                <i class="fas fa-life-ring"></i>
                                            </div>
                                        </div>
                                        <div class="widget-summary-col">
                                            <div class="summary">
                                                <h4 class="title">Pending (<a onClick={(e) => {
                                                    e.preventDefault()
                                                    refetch()
                                                }}>Refresh</a>)</h4>
                                                <div class="info">
                                                    <strong class="amount">{data.get_deposits_stats.pending}</strong>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div class="col-xl-4">
                            <section class="card card-featured-left card-featured-secondary">
                                <div class="card-body">
                                    <div class="widget-summary">
                                        <div class="widget-summary-col widget-summary-col-icon">
                                            <div class="summary-icon bg-secondary">
                                                <i class="fas fa-dollar-sign"></i>
                                            </div>
                                        </div>
                                        <div class="widget-summary-col">
                                            <div class="summary">
                                                <h4 class="title">Processed</h4>
                                                <div class="info">
                                                    <strong class="amount">{data.get_deposits_stats.processed}</strong>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                        <div class="col-xl-4">
                            <section class="card card-featured-left card-featured-primary mb-3">
                                <div class="card-body">
                                    <div class="widget-summary">
                                        <div class="widget-summary-col widget-summary-col-icon">
                                            <div class="summary-icon bg-primary">
                                                <i class="fas fa-plane"></i>
                                            </div>
                                        </div>
                                        <div class="widget-summary-col">
                                            <div class="summary">
                                                <h4 class="title">Rejected</h4>
                                                <div class="info">
                                                    <strong class="amount">{data.get_deposits_stats.rejected}</strong>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
    )
}
