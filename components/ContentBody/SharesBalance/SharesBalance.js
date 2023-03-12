import Link from "next/link"
import { useContext } from "react";
import { UserContext } from "../../../contexts";

export default function SharesBalance() {

    const {isLoading, userdata} = useContext(UserContext)

    if(isLoading) return <p>Loading...</p>;
    return (
        <div class="col-xl-12">
        <section class="card card-featured-left card-featured-quaternary">
            <div class="card-body">
                <div class="widget-summary">
                    <div class="widget-summary-col widget-summary-col-icon">
                        <div class="summary-icon bg-secondary">
                            <i class="fas fa-coins"></i>
                        </div>
                    </div>
                    <div class="widget-summary-col">
                        <div class="summary">
                            <h4 class="title">VOILK</h4>
                            <div class="info">
                                <strong class="amount">{userdata.balance}</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}
