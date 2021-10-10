import { useQuery } from '@apollo/client';
import { useContext, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { LoginContext } from '../../contexts';
import { COMMISSION_CHART } from './COMMISSION_CHART';

export default function SChart() {
    const {username, password} = useContext(LoginContext)

    const { loading, error, data } = useQuery(COMMISSION_CHART,
    {variables: {
        username, wif: password
    }}    
    );
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
        console.log(data.get_commissions_data)
    return (
        <div class="row">
            <div class="col">
                <div class="chart chart-md chart-bar-stacked-sm my-3" id="revenueChart" style={{ height: "409px" }}>
                    <Bar data={{
                        datasets: [{
                            label: 'Customers',
                            backgroundColor: 'rgb(255, 99, 132)',
                            borderColor: 'rgb(255, 99, 132)',
                            data: data.get_commissions_data,
                        }]
                    }} />
                </div>
            </div>
        </div>
    )
}
