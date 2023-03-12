import React from 'react'

export default function Faq() {
    return (
        
            <div class="row">
                <div class="col">
                    <h3>Fequently Asked questions</h3>

                    <h4 class="font-weight-bold text-dark">FAQ</h4>
                    <div class="toggle toggle-primary" data-plugin-toggle>
                        <section class="toggle">
                            <label>What is Voilk?</label>
                            <p>
                                Voilk is a blockchain based, decentralized, rewarding, crypto social network. Where you get rewarded in Voilk cryptocurrency,
                                from every like that you give or receive to a post.

                            </p>
                        </section>

                        <section class="toggle">
                            <label>How to participate in the Airdrop program?</label>
                            <p>
                                Visit our telegram bot, to participate in the airdrop program.
                                <a href="https://t.me/VoilkNetworkBot">https://t.me/VoilkNetworkBot</a>
                            </p>
                        </section>

                        <section class="toggle">
                            <label>How much is the total VOILK supply?</label>
                            <p>You can visit the <a href="https://explorer.voilk.com/chainprops">blockchain explorer </a> and check it yourself.</p>
                        </section>
                    </div>
                </div>
            </div>
        
    )
}
