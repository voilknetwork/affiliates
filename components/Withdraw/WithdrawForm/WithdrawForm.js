import { useMutation } from '@apollo/client';
import React, { useContext, useState } from 'react'
import { LoginContext, UserContext } from '../../../contexts';
import { CREATE_WITHDRAW } from './CREATE_WITHDRAW';
import { toast } from 'react-toastify';

export default function WithdrawForm({refetch}) {
    const [address, setAddress] = useState("")
	const [wAmount, setWAmount] = useState(0)
	const [withdrawMethod, setWithdrawMethod] = useState("skrill")
	const {username, password} = useContext(LoginContext)
	const [createWithdraw, { data, loading, error }] = useMutation(CREATE_WITHDRAW);
	const {isLoading, userdata} = useContext(UserContext)

    if(isLoading) return <p>Loading...</p>;
    return (
        <div className="row">
				<div class="col-lg-12">
					<form
						onSubmit={(e) => {
							e.preventDefault()
							const options = { 
								variables: { 
									username: username, 
									wif: password, 
									method: withdrawMethod, 
									deposo: address,
									amount: wAmount
								} 
							}
							console.log(options)
							createWithdraw(options)
							.then(x => {
								if(x && x.data && x.data.create_withdraw && x.data.create_withdraw._id){
									refetch()
									toast.success("Success: Created Withdrawal Request.")
									setAddress("")
									setWAmount(0)
								}
								else {
									toast.error("Error: There was some error. contact support")
								}
							})
							.catch(e => {
								toast.error("Error: " + e.message)
							})
			
						}}					
					>
						<section class="card">
							<header class="card-header">
								<div class="card-actions">
									<a href="#" class="card-action card-action-toggle" data-card-toggle></a>
									<a href="#" class="card-action card-action-dismiss" data-card-dismiss></a>
								</div>

								<h2 class="card-title">Withdrawal Form</h2>

								<p class="card-subtitle">
									It can take upto 24 hours, for a withdrawal process to complete, kindly be patient.
								</p>
							</header>
							<div class="card-body">
								<div class="form-group row pb-3">
									<label class="col-sm-3 control-label text-sm-end pt-2">Choose a Deposit Method <span class="required">*</span></label>
									<div class="col-sm-3">
                                <div class="radio-custom radio-primary">
                                    <input id="skrill" name="porto_is" type="radio" value="skrill"
                                        checked={withdrawMethod === "skrill"}
                                        onClick={(e) => {
                                            setWithdrawMethod("skrill")
                                        }}
                                        required />
                                    <label for="skrill">Skrill</label>
                                </div>
                                <div class="radio-custom radio-primary">
                                    <input id="neteller" name="porto_is" type="radio"
                                        value="neteller"
                                        checked={withdrawMethod === "neteller"}
                                        onClick={(e) => {
                                            setWithdrawMethod("neteller")
                                            
                                        }}
                                    />
                                    <label for="neteller">Neteller</label>
                                </div>
                                
                                <div class="radio-custom radio-primary">
                                    <input id="perfectmoney" name="porto_is" type="radio"
                                        checked={withdrawMethod === "perfectmoney"}
                                        onClick={(e) => {
                                            setWithdrawMethod("perfectmoney")
                                        }}
                                        value="perfectmoney" />
                                    <label for="perfectmoney">Perfect Money</label>
                                </div>
                                <div class="radio-custom radio-primary">
                                    <input id="tetherETH" name="porto_is" type="radio"
                                        checked={withdrawMethod === "tetherETH"}
                                        onClick={(e) => {
                                            setWithdrawMethod("tetherETH")
                                        }}
                                        value="tetherETH" />
                                    <label for="tetherETH">Tether USD (ERC-20)</label>
                                </div>
                                <div class="radio-custom radio-primary">
                                    <input id="tetherTRON" name="porto_is" type="radio"
                                        checked={withdrawMethod === "tetherTRON"}
                                        onClick={(e) => {
                                            setWithdrawMethod("tetherTRON")
                                        }}
                                        value="tetherTRON" />
                                    <label for="tetherTRON">Tether USD (TRC-20)</label>
                                </div>

                                <label class="error" for="porto_is"></label>
                            </div>
                            <div class="col-sm-3">
                                <div class="radio-custom radio-primary">
                                    <input id="BitcoinCash" name="porto_is" type="radio"
                                        checked={withdrawMethod === "BitcoinCash"}
                                        onClick={(e) => {
                                            setWithdrawMethod("BitcoinCash")
                                        }}
                                        value="BitcoinCash" required />
                                    <label for="BitcoinCash">BitcoinCash (BCH)</label>
                                </div>
                                <div class="radio-custom radio-primary">
                                    <input id="bitcoinSV" name="porto_is" type="radio"
                                        checked={withdrawMethod === "bitcoinSV"}
                                        onClick={(e) => {
                                            setWithdrawMethod("bitcoinSV")
                                        }}
                                        value="bitcoinSV" />
                                    <label for="bitcoinSV">Bitcoin SV (BSV)</label>
                                </div>
                                <div class="radio-custom radio-primary">
                                    <input id="Litecoin" name="porto_is" type="radio"
                                        checked={withdrawMethod === "Litecoin"}
                                        onClick={(e) => {
                                            setWithdrawMethod("Litecoin")
                                        }}
                                        value="Litecoin" />
                                    <label for="Litecoin">Litecoin (LTC)</label>
                                </div>
                                <div class="radio-custom radio-primary">
                                    <input id="Dash" name="porto_is" type="radio"
                                        checked={withdrawMethod === "Dash"}
                                        onClick={(e) => {
                                            setWithdrawMethod("Dash")
                                        }}
                                        value="Dash" />
                                    <label for="Dash">Dash</label>
                                </div>
                                <div class="radio-custom radio-primary">
                                    <input id="BitcoinGold" name="porto_is" type="radio"
                                        checked={withdrawMethod === "BitcoinGold"}
                                        onClick={(e) => {
                                            setWithdrawMethod("BitcoinGold")
                                        }}
                                        value="BitcoinGold" />
                                    <label for="BitcoinGold">Bitcoin Gold (BTG)</label>
                                </div>
                                <div class="radio-custom radio-primary">
                                    <input id="Digibyte" name="porto_is" type="radio"
                                        checked={withdrawMethod === "Digibyte"}
                                        onClick={(e) => {
                                            setWithdrawMethod("Digibyte")
                                        }}
                                        value="Digibyte" />
                                    <label for="Digibyte">DigiByte (DGB)</label>
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div class="radio-custom radio-primary">
                                    <input id="BNB" name="porto_is" type="radio"
                                        checked={withdrawMethod === "BNB"}
                                        onClick={(e) => {
                                            setWithdrawMethod("BNB")
                                        }}
                                        value="BNB" />
                                    <label for="BNB">BNB</label>
                                </div>
                                <div class="radio-custom radio-primary">
                                    <input id="Dogecoin" name="porto_is" type="radio"
                                        checked={withdrawMethod === "Dogecoin"}
                                        onClick={(e) => {
                                            setWithdrawMethod("Dogecoin")
                                        }}
                                        value="Dogecoin" required />
                                    <label for="Dogecoin">Dogecoin (DOGE)</label>
                                </div>
                                <div class="radio-custom radio-primary">
                                    <input id="ZCash" name="porto_is" type="radio"
                                        checked={withdrawMethod === "ZCash"}
                                        onClick={(e) => {
                                            setWithdrawMethod("ZCash")
                                        }}
                                        value="ZCash" />
                                    <label for="ZCash">Zcash (ZEC)</label>
                                </div>
                                <div class="radio-custom radio-primary">
                                    <input id="Tron" name="porto_is" type="radio"
                                        checked={withdrawMethod === "Tron"}
                                        onClick={(e) => {
                                            setWithdrawMethod("Tron")
                                        }}
                                        value="Tron" />
                                    <label for="Tron">Tron (TRX)</label>
                                </div>
                                <div class="radio-custom radio-primary">
                                    <input id="Ethereum" name="porto_is" type="radio"
                                        checked={withdrawMethod === "Ethereum"}
                                        onClick={(e) => {
                                            setWithdrawMethod("Ethereum")
                                        }}
                                        value="Ethereum" />
                                    <label for="Ethereum">Ethereum (ETH)</label>
                                </div>
                                <div class="radio-custom radio-primary">
                                    <input id="Bitcoin" name="porto_is" type="radio"
                                        checked={withdrawMethod === "Bitcoin"}
                                        onClick={(e) => {
                                            setWithdrawMethod("Bitcoin")
                                        }}
                                        value="Bitcoin" />
                                    <label for="Bitcoin">Bitcoin (BTC)</label>
                                </div>

                            </div>
                       </div>
								<div class="form-group row pb-3">
									<table class="table table-responsive-md mb-0">
										<thead>
										</thead>
										<tbody>
											<tr>
												<th>Withdrawal Method</th>
												<td>{withdrawMethod}</td>
											</tr>
											<tr>
												<th>Min Withdrawal</th>
												<td>50$</td>
											</tr>
											<tr>
												<th>Balance</th>
												<td>{userdata.vsd_balance}</td>
											</tr>
											<tr>
												<th>Withdrawal Address</th>
												<td><input type="text" name="withdraw"
													value={address}
													onChange={(e) => setAddress(e.target.value)}
													placeholder="Type withdrawal address here." /></td>
											</tr>
											<tr>
												<th>Withdrawal Amount</th>
												<td><input type="text" name="amount"
													value={wAmount}
													onChange={(e) => setWAmount(e.target.value)}
													placeholder="Type amount here." /></td>
											</tr>
										</tbody>
									</table>
								</div>

							</div>
							<footer class="card-footer">
								<div class="row justify-content-end">
									<div class="col-sm-12">
										{loading?<p>Creating request..</p>:
										<button type="submit" class="btn btn-success">Withdraw</button>}
									</div>
								</div>
							</footer>
						</section>
					</form>
				</div>
			</div>
			
    )
}
