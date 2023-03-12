import { useQuery } from "@apollo/client";
import Link from "next/link"
import { useContext } from "react";
import { LoginContext } from "../../../contexts";
import { CUSTOMERS_COUNT } from "./CUSTOMERS_COUNT";

export default function CustomersCount() {

    const {username, password} = useContext(LoginContext)

    const { loading, error, data } = useQuery(CUSTOMERS_COUNT, {
        variables: {
            username, wif: password
        }
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
        <div class="col-xl-12">
            <section class="card card-featured-left card-featured-primary mb-3">
                <div class="card-body">
                    <div class="widget-summary">
                        <div class="widget-summary-col widget-summary-col-icon">
                            <div class="summary-icon bg-primary">
                                <i class="fas fa-users"></i>
                            </div>
                        </div>
                        <div class="widget-summary-col">
                            <div class="summary">
                                <h4 class="title">Total Referrals</h4>
                                <div class="info">
                                    <strong class="amount">{data.get_customers_info.LT}</strong>
                                </div>
                            </div>
                            <div class="summary-footer">
                                <Link href="/referrals">
                                    <a class="text-muted text-uppercase">(view all)</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
