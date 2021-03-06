import { useQuery } from '@apollo/client'
import { GET_MEMBERSHIPS } from './GET_MEMBERSHIPS'

import Activate from './Activate';
export default function Packages() {


    const {loading, data, error} = useQuery(GET_MEMBERSHIPS)
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
        <div class="pricing-table row no-gutters mt-3 mb-3">
        <h3>Choose a package that fulfills your needs and click activate now button.</h3>
       {data.get_memberships.map((mem,i) => ( <div key={i} class="col-lg-3 col-sm-6">
            <div class="plan">
                <h3>{mem.type}<span>${mem.cost}</span></h3>
                <Activate mem={mem}/>
                <ul>
                    <li><strong>{mem.increment}</strong> Invitation Increment</li>
                    <li><strong>{mem.max_commission} Max</strong>  Commission/Sale</li>
                    <li><strong>{mem.buyer_share} VOILK</strong> You get</li>
                    <li><strong>{mem.promoter_share} VOILK</strong> Promoter gets</li>
                    <li><strong>{mem.company_share} VOILK</strong> Company gets</li>
                    <li><strong>{mem.max_withdrawal}$</strong> Withdrawal Limit/month</li>
                </ul>
            </div>
        </div>))}
    </div>

    )
}
