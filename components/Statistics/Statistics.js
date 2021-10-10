import Link from 'next/link'
import { useContext } from 'react'
import UserContext from '../../contexts/UserContext/UserContext'
import SChart from './SChart'
import SCommission from './SCommission'
import SCustomers from './SCustomers'
import SRevenue from './SRevenue'

export default function Statistics() {

	const {isLoading, userdata} = useContext(UserContext)

	if(isLoading) return "";

	return (
		<div class="row">
			<div class="col-lg-12 col-xl-4">

				<div class="row">
					<div class="col-12">
						<div class="card card-modern">
							<div class="card-body p-0">
								<div class="widget-user-info">
									<div class="widget-user-info-header">
										<h2 class="font-weight-bold text-color-dark text-5">Hello, @{userdata.name}</h2>
										<p class="mb-0">{userdata.membership.membership}</p>

										<div class="widget-user-acrostic bg-primary">
											<img width="65px" src={userdata.json_metadata.profile_image}></img>
										</div>
									</div>
									<div class="widget-user-info-body">
										<div class="row">
											<div class="col-auto">
												<strong class="text-color-dark text-5">${userdata.vsd_balance.split(" ")[0]}</strong>
												<h3 class="text-4-1">User Balance</h3>
											</div>
											<div class="col-auto">
												<strong class="text-color-dark text-5">{userdata.balance}</strong>
												<h3 class="text-4-1">Shares</h3>
											</div>
										</div>
										<div class="row">
											<div class="col">
													<a
														href={`https://mysharespay.com/@${userdata.name}`}
														class="btn btn-light btn-xl border font-weight-semibold text-color-dark text-3 mt-4">
														View Profile
													</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<br />
				<div class="row">
					<SCustomers />
					<SCommission />
					
				</div>
			</div>
			<div class="col-lg-12 col-xl-8 pt-2 pt-xl-0 mt-4 mt-xl-0">

				<div class="row">
					<div class="col">
						<div class="card card-modern">
							<div class="card-header">
								<div class="card-actions">
									<a href="#" class="card-action card-action-toggle" data-card-toggle></a>
								</div>
								<h2 class="card-title">Revenue</h2>
							</div>
							<div class="card-body">
								<SRevenue />
								<SChart />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
