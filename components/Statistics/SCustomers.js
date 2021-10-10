import { useQuery } from '@apollo/client';
import React, { useContext } from 'react'
import { LoginContext } from '../../contexts';
import { CUSTOMERS_COUNT } from '../ContentBody/CustomersCount/CUSTOMERS_COUNT';

export default function SCustomers() {
    const { username, password } = useContext(LoginContext)

    const { loading, error, data } = useQuery(CUSTOMERS_COUNT, {
        variables: {
            username, wif: password
        }
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
        <div class="col-lg-6 col-xl-12 pb-2 pb-lg-0 mb-4 mb-lg-0">
            <div class="card card-modern">
                <div class="card-body py-4">
                    <div class="row align-items-center">
                        <div class="col-6 col-md-4">
                            <h3 class="text-4-1 my-0">Customers</h3>
                            <strong class="text-6 text-color-dark">{data.get_customers_info.LT}</strong>
                        </div>
                        <div class="col-6 col-md-4 border border-top-0 border-end-0 border-bottom-0 border-color-light-grey py-3">
                            <h3 class="text-4-1 text-color-success line-height-2 my-0">Past 24 Hours</h3>
                            <span>{data.get_customers_info.H24}</span>
                        </div>
                        <div class="col-md-4 text-left text-md-right pe-md-4 mt-4 mt-md-0">
                            <i class="bx bx-cart-alt icon icon-inline icon-xl bg-primary rounded-circle text-color-light"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
