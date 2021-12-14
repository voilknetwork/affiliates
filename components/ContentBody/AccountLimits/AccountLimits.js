import { useQuery } from '@apollo/client';
import React, { useContext } from 'react'
import { LoginContext, UserContext } from '../../../contexts';
import { GET_MEMBERSHIP_INFO } from './GET_MEMBERSHIP_INFO';

export default function AccountLimits() {
    const {username, password} = useContext(LoginContext)

    const { loading, error, data } = useQuery(GET_MEMBERSHIP_INFO, 
        { 
            variables: { username, wif: password } 
        });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const ci = data.get_membership_info.max_invites
    const cii = data.get_membership_info.current_invites
    const cw = data.get_membership_info.max_withdrawal
    const cww = data.get_membership_info.current_withdrawal
    const cc = data.get_membership_info.max_commission
    const ccc = data.get_membership_info.current_commission

    const ciP = ((cii * 100)/ci).toFixed()
    const cwP = ((cww * 100)/cw).toFixed()
    const ccP = ((cc * 100)/ccc).toFixed()

    console.log("Current", cii)
    console.log("Max", ci)
    console.log("Percentage", ciP)
    return (
        <div class="col-lg-12 col-xl-4 pt-2 pt-xl-0 mt-4 mt-lg-0">
        <div class="card card-modern">
            <div class="card-header">
                <div class="card-actions">
                    <a href="#" class="card-action card-action-toggle" data-card-toggle></a>
                </div>
                <h2 class="card-title">Membership: {data.get_membership_info.membership}</h2>
            </div>
            <div class="card-body">
                <label>Maximum Invites ({cii}/{ci})</label>
                <div class="progress progress-xs mb-4 light rounded-0">
                    <div class="progress-bar progress-bar-warning rounded-0" role="progressbar" 
                    aria-valuenow={`${cii}`} 
                    aria-valuemin="0" 
                    aria-valuemax={`${ci}`} 
                    style={{ width: `${ciP}%` }}>
                        <span class="sr-only">{ciP}%</span>
                    </div>
                </div>
                <label>Withdrawal Limit ({cww}$/{data.get_membership_info.max_withdrawal}$) /month</label>
                <div class="progress progress-xs mb-4 light rounded-0">
                <div class="progress-bar progress-bar-success rounded-0" role="progressbar" 
                    aria-valuenow={`${cww}`} 
                    aria-valuemin="0" 
                    aria-valuemax={`${cw}`} 
                    style={{ width: `${cwP}%` }}>
                        <span class="sr-only">{cwP}%</span>
                    </div>
                </div>
                <label>Maximum Commission/Sale ({cc}/{data.get_membership_info.max_commission} VOILK)</label>
                <div class="progress progress-xs mb-4 light rounded-0">
                <div class="progress-bar progress-bar-info rounded-0" role="progressbar" 
                    aria-valuenow={`${cc}`} 
                    aria-valuemin="0" 
                    aria-valuemax={`${ccc}`} 
                    style={{ width: `${ccP}%` }}>
                        <span class="sr-only">{ccP}%</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}
