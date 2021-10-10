import { CHART_DATA } from './CHART_DATA';
import { useQuery } from '@apollo/client';
import { useContext, useEffect, useState } from 'react'
import { Doughnut, Line } from 'react-chartjs-2';
import { LoginContext } from '../../../contexts';
export default function CustomersChart() {

    const {username, password} = useContext(LoginContext)

    const { loading, error, data } = useQuery(CHART_DATA,
    {variables: {
        username, wif: password
    }}    
    );
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
        <div id="salesSelectorItems" class="chart-data-selector-items mt-3">
            <Line data={{

                datasets: [{
                    label: 'Customers',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: data.get_customers_data,
                }]
            }} />
        </div>
    )
}
