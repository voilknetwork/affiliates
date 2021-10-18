import { useQuery } from "@apollo/client";
import Link from "next/link"
import { useContext } from "react";
import { LoginContext } from "../../../contexts";
import { SALES_COUNT } from "./SALES_COUNT";

export default function TodaySales() {
    const {username, password} = useContext(LoginContext)

    const { loading, error, data } = useQuery(SALES_COUNT, {
        variables: {
            username, wif: password
        }
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
        <div class="col-xl-6">
        <section class="card card-featured-left card-featured-tertiary mb-3">
            <div class="card-body">
                <div class="widget-summary">
                    <div class="widget-summary-col widget-summary-col-icon">
                        <div class="summary-icon bg-primary">
                            <i class="fas fa-shopping-cart"></i>
                        </div>
                    </div>
                    <div class="widget-summary-col">
                        <div class="summary">
                            <h4 class="title">Total Sales</h4>
                            <div class="info">
                                <strong class="amount">{data.get_sales_info.LT}</strong>
                            </div>
                        </div>
                        <div class="summary-footer">
                            <Link href="/history">
                                <a class="text-muted text-uppercase">(statement)</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}
