
import Link from "next/link"
import AccountLimits from "./AccountLimits/AccountLimits"
import CommissionActivity from "./CommissionActivity/CommissionActivity"
import CustomersChart from "./CustomersChart/CustomersChart"
import CustomersCount from "./CustomersCount/CustomersCount"
import PackageActivity from "./PackageActivity/PackageActivity"
import SharesBalance from "./SharesBalance/SharesBalance"
import TodaySales from "./TodaySales/TodaySales"
import UserBalance from "./UserBalance/UserBalance"


export default function ContentBody() {



    return (
        <>

            <div class="row">
                <div class="col-lg-6 mb-3">
                
                    <section class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-xl-12">
                                    <div id="salesSelectorWrapper">
                                        <h2>
                                            Referrals Report
                                        </h2>
                                        <CustomersChart />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div class="col-lg-6">
                    <div class="row mb-3">
                        <UserBalance />
                    </div>
                    <div class="row">
                        <SharesBalance />
                    </div>
                    <br />
                    <div class="row">
                        <CustomersCount />
                    </div>
                </div>
            </div>

        </>

    )
}
