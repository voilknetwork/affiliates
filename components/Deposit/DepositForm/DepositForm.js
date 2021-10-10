import { useMutation } from '@apollo/client'
import React, { useContext, useState } from 'react'
import { DepositMTD } from '../../../constants/deposit_addresses'
import { LoginContext } from '../../../contexts'
import { CREATE_DEPOSIT } from './CREATE_DEPOSIT'
import { toast } from 'react-toastify';
export default function DepositForm({refetch}) {

    const {username, password} = useContext(LoginContext)

    const [depositMethod, setDepositMethod] = useState(DepositMTD[0].deposit_system)
	const [depositMin, setDepositMin] = useState(DepositMTD[0].deposit_min)
	const [depositAddress, setDepositAddress] = useState(DepositMTD[0].deposit_address)
	const [depositFee, setDepositFee] = useState(DepositMTD[0].deposit_fee)

    const [deposo, setDeposo] = useState("")
    const [amount, setAmount] = useState(0)
    const [createDeposit, { data, loading, error }] = useMutation(CREATE_DEPOSIT);
    
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
                        method: depositMethod, 
                        deposo: deposo,
                        amount: amount
                    } 
                }
                console.log(options)
                createDeposit(options)
                .then(x => {
                    if(x && x.data && x.data.create_deposit && x.data.create_deposit._id){
                        refetch()
                        toast.success("Success: Created deposit request successfully.")
                        setDeposo("")
                        setAmount(0)
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

                        <h2 class="card-title">Deposit Form</h2>

                        <p class="card-subtitle">
                            We will exhange your Cryptocurrency deposits against USDT and credit the amount in USD to your wallet.
                            Normally we credit your deposit as soon as payment is confirmed but some cases it can take upto 24 hours.
                            In case of any problem contact us support@mysharespay.com
                        </p>
                    </header>
                    <div class="card-body">
                        <div class="form-group row pb-3">
                            <label class="col-sm-3 control-label text-sm-end pt-2">Choose a Deposit Method <span class="required">*</span></label>
                            <div class="col-sm-3">
                                <div class="radio-custom radio-primary">
                                    <input id="skrill" name="porto_is" type="radio" value="skrill"
                                        checked={depositMethod === "skrill"}
                                        onClick={(e) => {
                                            setDepositMethod(DepositMTD[0].deposit_system)
                                            setDepositMin(DepositMTD[0].deposit_min)
                                            setDepositAddress(DepositMTD[0].deposit_address)
                                            setDepositFee(DepositMTD[0].deposit_fee)
                                        }}
                                        required />
                                    <label for="skrill">Skrill</label>
                                </div>
                                <div class="radio-custom radio-primary">
                                    <input id="neteller" name="porto_is" type="radio"
                                        value="neteller"
                                        checked={depositMethod === "neteller"}
                                        onClick={(e) => {
                                            setDepositMethod(DepositMTD[1].deposit_system)
                                            setDepositMin(DepositMTD[1].deposit_min)
                                            setDepositAddress(DepositMTD[1].deposit_address)
                                            setDepositFee(DepositMTD[1].deposit_fee)
                                        }}
                                    />
                                    <label for="neteller">Neteller</label>
                                </div>
                                <div class="radio-custom radio-primary">
                                    <input id="perfectmoney" name="porto_is" type="radio"
                                        checked={depositMethod === "perfectmoney"}
                                        onClick={(e) => {
                                            setDepositMethod(DepositMTD[3].deposit_system)
                                            setDepositMin(DepositMTD[3].deposit_min)
                                            setDepositAddress(DepositMTD[3].deposit_address)
                                            setDepositFee(DepositMTD[3].deposit_fee)
                                        }}
                                        value="perfectmoney" />
                                    <label for="perfectmoney">Perfect Money</label>
                                </div>
                                <div class="radio-custom radio-primary">
                                    <input id="tetherETH" name="porto_is" type="radio"
                                        checked={depositMethod === "tetherETH"}
                                        onClick={(e) => {
                                            setDepositMethod(DepositMTD[4].deposit_system)
                                            setDepositMin(DepositMTD[4].deposit_min)
                                            setDepositAddress(DepositMTD[4].deposit_address)
                                            setDepositFee(DepositMTD[4].deposit_fee)
                                        }}
                                        value="tetherETH" />
                                    <label for="tetherETH">Tether USD (ERC-20)</label>
                                </div>
                                <div class="radio-custom radio-primary">
                                    <input id="tetherTRON" name="porto_is" type="radio"
                                        checked={depositMethod === "tetherTRON"}
                                        onClick={(e) => {
                                            setDepositMethod(DepositMTD[5].deposit_system)
                                            setDepositMin(DepositMTD[5].deposit_min)
                                            setDepositAddress(DepositMTD[5].deposit_address)
                                            setDepositFee(DepositMTD[5].deposit_fee)
                                        }}
                                        value="tetherTRON" />
                                    <label for="tetherTRON">Tether USD (TRC-20)</label>
                                </div>

                                <label class="error" for="porto_is"></label>
                            </div>
                            <div class="col-sm-3">
                                <div class="radio-custom radio-primary">
                                    <input id="BitcoinCash" name="porto_is" type="radio"
                                        checked={depositMethod === "BitcoinCash"}
                                        onClick={(e) => {
                                            setDepositMethod(DepositMTD[6].deposit_system)
                                            setDepositMin(DepositMTD[6].deposit_min)
                                            setDepositAddress(DepositMTD[6].deposit_address)
                                            setDepositFee(DepositMTD[6].deposit_fee)
                                        }}
                                        value="BitcoinCash" required />
                                    <label for="BitcoinCash">BitcoinCash (BCH)</label>
                                </div>
                                <div class="radio-custom radio-primary">
                                    <input id="bitcoinSV" name="porto_is" type="radio"
                                        checked={depositMethod === "bitcoinSV"}
                                        onClick={(e) => {
                                            setDepositMethod(DepositMTD[7].deposit_system)
                                            setDepositMin(DepositMTD[7].deposit_min)
                                            setDepositAddress(DepositMTD[7].deposit_address)
                                            setDepositFee(DepositMTD[7].deposit_fee)
                                        }}
                                        value="bitcoinSV" />
                                    <label for="bitcoinSV">Bitcoin SV (BSV)</label>
                                </div>
                                <div class="radio-custom radio-primary">
                                    <input id="Litecoin" name="porto_is" type="radio"
                                        checked={depositMethod === "Litecoin"}
                                        onClick={(e) => {
                                            setDepositMethod(DepositMTD[8].deposit_system)
                                            setDepositMin(DepositMTD[8].deposit_min)
                                            setDepositAddress(DepositMTD[8].deposit_address)
                                            setDepositFee(DepositMTD[8].deposit_fee)
                                        }}
                                        value="Litecoin" />
                                    <label for="Litecoin">Litecoin (LTC)</label>
                                </div>
                                <div class="radio-custom radio-primary">
                                    <input id="Dash" name="porto_is" type="radio"
                                        checked={depositMethod === "Dash"}
                                        onClick={(e) => {
                                            setDepositMethod(DepositMTD[9].deposit_system)
                                            setDepositMin(DepositMTD[9].deposit_min)
                                            setDepositAddress(DepositMTD[9].deposit_address)
                                            setDepositFee(DepositMTD[9].deposit_fee)
                                        }}
                                        value="Dash" />
                                    <label for="Dash">Dash</label>
                                </div>
                                <div class="radio-custom radio-primary">
                                    <input id="BitcoinGold" name="porto_is" type="radio"
                                        checked={depositMethod === "BitcoinGold"}
                                        onClick={(e) => {
                                            setDepositMethod(DepositMTD[10].deposit_system)
                                            setDepositMin(DepositMTD[10].deposit_min)
                                            setDepositAddress(DepositMTD[10].deposit_address)
                                            setDepositFee(DepositMTD[10].deposit_fee)
                                        }}
                                        value="BitcoinGold" />
                                    <label for="BitcoinGold">Bitcoin Gold (BTG)</label>
                                </div>
                                <div class="radio-custom radio-primary">
                                    <input id="Digibyte" name="porto_is" type="radio"
                                        checked={depositMethod === "Digibyte"}
                                        onClick={(e) => {
                                            setDepositMethod(DepositMTD[11].deposit_system)
                                            setDepositMin(DepositMTD[11].deposit_min)
                                            setDepositAddress(DepositMTD[11].deposit_address)
                                            setDepositFee(DepositMTD[11].deposit_fee)
                                        }}
                                        value="Digibyte" />
                                    <label for="Digibyte">DigiByte (DGB)</label>
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div class="radio-custom radio-primary">
                                    <input id="BNB" name="porto_is" type="radio"
                                        checked={depositMethod === "BNB"}
                                        onClick={(e) => {
                                            setDepositMethod(DepositMTD[12].deposit_system)
                                            setDepositMin(DepositMTD[12].deposit_min)
                                            setDepositAddress(DepositMTD[12].deposit_address)
                                            setDepositFee(DepositMTD[12].deposit_fee)
                                        }}
                                        value="BNB" />
                                    <label for="BNB">BNB</label>
                                </div>
                                <div class="radio-custom radio-primary">
                                    <input id="Dogecoin" name="porto_is" type="radio"
                                        checked={depositMethod === "Dogecoin"}
                                        onClick={(e) => {
                                            setDepositMethod(DepositMTD[13].deposit_system)
                                            setDepositMin(DepositMTD[13].deposit_min)
                                            setDepositAddress(DepositMTD[13].deposit_address)
                                            setDepositFee(DepositMTD[13].deposit_fee)
                                        }}
                                        value="Dogecoin" required />
                                    <label for="Dogecoin">Dogecoin (DOGE)</label>
                                </div>
                                <div class="radio-custom radio-primary">
                                    <input id="ZCash" name="porto_is" type="radio"
                                        checked={depositMethod === "ZCash"}
                                        onClick={(e) => {
                                            setDepositMethod(DepositMTD[14].deposit_system)
                                            setDepositMin(DepositMTD[14].deposit_min)
                                            setDepositAddress(DepositMTD[14].deposit_address)
                                            setDepositFee(DepositMTD[14].deposit_fee)
                                        }}
                                        value="ZCash" />
                                    <label for="ZCash">Zcash (ZEC)</label>
                                </div>
                                <div class="radio-custom radio-primary">
                                    <input id="Tron" name="porto_is" type="radio"
                                        checked={depositMethod === "Tron"}
                                        onClick={(e) => {
                                            setDepositMethod(DepositMTD[15].deposit_system)
                                            setDepositMin(DepositMTD[15].deposit_min)
                                            setDepositAddress(DepositMTD[15].deposit_address)
                                            setDepositFee(DepositMTD[15].deposit_fee)
                                        }}
                                        value="Tron" />
                                    <label for="Tron">Tron (TRX)</label>
                                </div>
                                <div class="radio-custom radio-primary">
                                    <input id="Ethereum" name="porto_is" type="radio"
                                        checked={depositMethod === "Ethereum"}
                                        onClick={(e) => {
                                            setDepositMethod(DepositMTD[16].deposit_system)
                                            setDepositMin(DepositMTD[16].deposit_min)
                                            setDepositAddress(DepositMTD[16].deposit_address)
                                            setDepositFee(DepositMTD[16].deposit_fee)
                                        }}
                                        value="Ethereum" />
                                    <label for="Ethereum">Ethereum (ETH)</label>
                                </div>
                                <div class="radio-custom radio-primary">
                                    <input id="Bitcoin" name="porto_is" type="radio"
                                        checked={depositMethod === "Bitcoin"}
                                        onClick={(e) => {
                                            setDepositMethod(DepositMTD[17].deposit_system)
                                            setDepositMin(DepositMTD[17].deposit_min)
                                            setDepositAddress(DepositMTD[17].deposit_address)
                                            setDepositFee(DepositMTD[17].deposit_fee)
                                        }}
                                        value="Bitcoin" />
                                    <label for="Bitcoin">Bitcoin (BTC)</label>
                                </div>

                            </div>
                        </div>
                        <div class="form-group row pb-3">

                            <div class="col-sm-6">
                                <table class="table table-responsive-md mb-0">
                                    <thead>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>Deposit Method</th>
                                            <td>{depositMethod}</td>
                                        </tr>
                                        <tr>
                                            <th>Min Deposit</th>
                                            <td>{depositMin}</td>
                                        </tr>
                                        <tr>
                                            <th>Deposit Address</th>
                                            <td><strong>{depositAddress}</strong></td>
                                        </tr>
                                        <tr>
                                            <th>Fee</th>
                                            <td>{depositFee}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="col-sm-6">
                                <p>Make a payment to the <strong>Deposit address</strong>, after making the payment, fill this form and submit it.
                                    We will credit USD against your deposit to your account, as soon as possible.
                                    <ul>
                                        <li> Make sure you send more than Minimum deposit</li>
                                        <li> Type exact amount that you sent down below.
                                            <br />
                                            <label class="control-label text-sm-end pt-2">Amount: <span class="required">*</span></label>
                                            <input type="text" name="amount" 
                                            value={amount}
                                            onChange={(e) => {
                                                setAmount(e.target.value)
                                            }}
                                            placeholder="Insert amount to deposit" />
                                        </li>
                                        <li> Type transaction id or the address from where you made the payment.
                                            <br />
                                            <label class="control-label text-sm-end pt-2">Deposo: <span class="required">*</span></label>
                                            <input type="text" name="info" 
                                            value={deposo}
                                            onChange={(e) => setDeposo(e.target.value)}
                                            placeholder="Insert transaction id, or address from where you sent the payment"/>

                                        </li>
                                        <li> Do not forget to click the Create Request button. </li>
                                    </ul>
                                </p>


                            </div>
                        </div>

                    </div>
                    <footer class="card-footer">
                        <div class="row justify-content-end">
                            {loading?<p>Submitting...</p>:null}
                            <div class="col-sm-3">
                                <button type="submit" class="btn btn-success">Create Request</button>
                            </div>
                        </div>
                    </footer>
                </section>
            </form>
        </div>
    </div>
    )
}
