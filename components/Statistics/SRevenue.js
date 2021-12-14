import { useQuery } from '@apollo/client';
import React, { useContext } from 'react'
import { LoginContext } from '../../contexts';
import { COMMISSION_SUM } from './COMMISSION_SUM';

export default function SRevenue() {
    const {username, password} = useContext(LoginContext)

    const { loading, error, data } = useQuery(COMMISSION_SUM, {
        variables: {
            username, wif: password
        }
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
        <div class="row">
            <div class="col-auto">
                <strong class="text-color-dark text-6">{data.get_commissions_info.H24} VOILK</strong>
                <h3 class="text-4 mt-0 mb-2">Past 24 Hours</h3>
            </div>
            <div class="col-auto">
                <strong class="text-color-dark text-6">{data.get_commissions_info.D30} VOILK</strong>
                <h3 class="text-4 mt-0 mb-2">Past 30 Days</h3>
            </div>
            <div class="col-auto">
                <strong class="text-color-dark text-6">{data.get_commissions_info.Y1} VOILK</strong>
                <h3 class="text-4 mt-0 mb-2">Past 1 Year</h3>
            </div>
            <div class="col-auto">
                <strong class="text-color-dark text-6">{data.get_commissions_info.LT} VOILK</strong>
                <h3 class="text-4 mt-0 mb-2">Total Profit</h3>
            </div>
        </div>
    )
}
