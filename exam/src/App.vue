<template>
    <div id="app">
        <nav class="navbar navbar-light bg-light">
            <div class="container">
                <span class="navbar-brand mb-0 h2">Minter JS SDK Examples</span>
                <a class="text-white" href="https://github.com/MinterTeam/minter-js-sdk" target="_blank">Github</a>
            </div>
        </nav>
        <div class="container body">


            <div class="shadow-sm p-3 mb-5 bg-white rounded">
                <h4>Notes</h4>
                <ul class="mb-0">
                    <li>Each tx has custom field "data" which can be user-defined, max 128 bytes</li>
                    <li>Minter JS SDK works with Bip, but Minter Node API works with Pip, so all values are converted from Bip to Pip under the hood. 1 Bip = 10^18 Pip.</li>
                </ul>
            </div>

            <!--<h2>Commissions</h2>
            <div class="shadow-sm p-3 mb-5 bg-white rounded">
                All commissions are divided by 10^18. <br>
                Actual commission is SendTx * 10^18 = 1 000 000 000 000 000 000 PIP = 0,000000000000000001 BIP. <br><br>
                <ul class="mb-0">
                    <li>SendTx = 1000</li>
                    <li>ConvertTx = 10000</li>
                    <li>CreateTx = 100000</li>
                    <li>DeclareCandidacyTx = 100000</li>
                    <li>DelegateTx = 10000</li>
                    <li>UnbondTx = 10000</li>
                    <li>RedeemCheckTx = 1000</li>
                    <li>PayloadByte = 500</li>
                    <li>ToggleCandidateStatus = 1000</li>
                </ul>
            </div>-->

            <h2>Wallet</h2>

            <div class="shadow-sm p-3 mb-5 bg-white rounded">
                <h4>Generate wallet</h4>

                <div>
                    Generates wallet from a random BIP39 mnemonic phrase (uses bip39.generateMnemonic under the hood). <br>
                    So wallet instance will contain:
                    <ul>
                        <li><b>Private key</b> - random 64 bytes</li>
                        <li><b>Mnemonic phrase</b> - random 12 words</li>
                    </ul>
                </div>
            </div>

            <div class="shadow-sm p-3 mb-5 bg-white rounded">
                <h4>Export wallet</h4>

                <div>
                    There are 3 ways of exporting a wallet:
                    <ul>
                        <li>Export <b>Private key</b> - random 64 bytes</li>
                        <li>Export <b>Mnemonic phrase</b> - random 12 words</li>
                        <li>Export <b>Vault file</b></li>
                    </ul>
                </div>
            </div>

            <div class="shadow-sm p-3 mb-5 bg-white rounded">
                <h4>Import wallet</h4>

                <div>
                    There are 3 ways of importing a wallet:
                    <ul>
                        <li>Import <b>Private key</b> - random 64 bytes</li>
                        <li>Import <b>Mnemonic phrase</b> - random 12 words</li>
                        <li>Import <b>Vault file</b></li>
                    </ul>
                </div>
            </div>

            <div class="shadow-sm p-3 mb-5 bg-white rounded">
                <h4>Show transaction (s)</h4>

                <div>
                    <table class="table table-borderless">
                        <tr>
                            <th>Hash</th>
                            <td>Mt44f31...a9216</td>
                        </tr>
                        <tr>
                            <th>Block</th>
                            <td>233</td>
                        </tr>
                        <tr>
                            <th>From</th>
                            <td>Mxa9316...49409f</td>
                        </tr>
                        <tr>
                            <th>Type</th>
                            <td>Send</td>
                        </tr>
                        <tr>
                            <th>Message (payload)</th>
                            <td>Hi there</td>
                        </tr>
                        <tr>
                            <th>Commission</th>
                            <td>0.00000001 MNT</td>
                        </tr>
                        <tr>
                            <th>Data</th>
                            <td>
                                Data depends on type of transaction. <br><br>

                                Type <b>Send</b>
                                <ul>
                                    <li>To</li>
                                    <li>Coin</li>
                                    <li>Value</li>
                                </ul>

                                Type <b>Convert</b>
                                <ul>
                                    <li>From Coin</li>
                                    <li>To Coin</li>
                                    <li>Value</li>
                                </ul>

                                Type <b>Create Coin</b>
                                <ul>
                                    <li>Name</li>
                                    <li>Symbol</li>
                                    <li>Initial Amount</li>
                                    <li>Initial Reserve</li>
                                    <li>CRR</li>
                                </ul>

                                Type <b>Declare Candidacy</b>
                                <ul>
                                    <li>Address</li>
                                    <li>PubKey</li>
                                    <li>Commission</li>
                                    <li>Coin</li>
                                    <li>Stake</li>
                                </ul>

                                Type <b>Delegate</b>
                                <ul>
                                    <li>PubKey</li>
                                    <li>Coin</li>
                                    <li>Stake</li>
                                </ul>

                                Type <b>Unbond</b>
                                <ul>
                                    <li>PubKey</li>
                                    <li>Coin</li>
                                    <li>Stake</li>
                                </ul>

                                Type <b>Redeem Check</b>
                                <ul>
                                    <li>Check</li>
                                    <li>Proof</li>
                                </ul>

                                Type <b>Set candidate online/offline</b>
                                <ul>
                                    <li>PubKey</li>
                                </ul>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>


            <hr>

            <h2>Coins</h2>

            <div class="shadow-sm p-3 mb-5 bg-white rounded">
                <h4>Coin info</h4>

                <table class="table table-borderless">
                    <tr>
                        <th>Name</th>
                        <td>MacCoin</td>
                    </tr>
                    <tr>
                        <th>Symbol</th>
                        <td>MCC</td>
                    </tr>
                    <tr>
                        <th>CRR</th>
                        <td>20%</td>
                    </tr>
                    <tr>
                        <th>Reserve</th>
                        <td>1,000 bip</td>
                    </tr>
                    <tr>
                        <th>Volume</th>
                        <td>1,000 MCC</td>
                    </tr>
                    <tr>
                        <th>Creator</th>
                        <td>Mxa9316...49409f</td>
                    </tr>
                </table>
            </div>

            <div class="shadow-sm p-3 mb-5 bg-white rounded">
                <h4>Send coins</h4>
                <form class="form mb-0" onsubmit="return false">
                    <div class="form-group">
                        <label>Address</label>
                        <input type="text" class="form-control" placeholder="Mx...">
                    </div>
                    <div class="form-row">
                        <div class="col">
                            <div class="form-group">
                                <label>Amount</label>
                                <input type="text" class="form-control" placeholder="0">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <label>Coin</label>
                                <select class="form-control">
                                    <option>BIP</option>
                                    <option>ABC</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Message</label>
                        <input type="text" class="form-control" placeholder="">
                    </div>
                    <button type="submit" class="btn btn-dark">Submit</button>
                    <small class="form-text text-muted">Fee: 0.00001 MNT</small>
                </form>
            </div>

            <div class="shadow-sm p-3 mb-5 bg-white rounded">
                <h4>Exchange coins</h4>
                <form class="form mb-0" onsubmit="return false">

                    <div class="form-row">
                        <div class="col">
                            <div class="form-group">
                                <label>Amount</label>
                                <input type="text" class="form-control" placeholder="0">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <label>From Coin</label>
                                <select class="form-control">
                                    <option>BIP</option>
                                    <option>ABC</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <label>To Coin</label>
                        <select class="form-control">
                            <option>BIP</option>
                            <option>ABC</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label>Message</label>
                        <input type="text" class="form-control" placeholder="">
                    </div>
                    <button type="submit" class="btn btn-dark">Submit</button>
                    <small class="form-text text-muted">Fee: 0.00001 MNT</small>
                </form>
            </div>

            <div class="shadow-sm p-3 mb-5 bg-white rounded">
                <h4>Create coin</h4>
                <form class="form mb-0" onsubmit="return false">
                    <div class="form-row">
                        <div class="col">
                            <div class="form-group">
                                <label>Name</label>
                                <input type="text" class="form-control" placeholder="">
                                <small class="form-text text-muted">Example: My Coin</small>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Symbol</label>
                                <input maxlength="10" type="text" class="form-control" placeholder="">
                                <small class="form-text text-muted">Uppercase, min 3 letters, max 10 letters (Example: MCNT)
                                </small>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <label>Initial Amount:</label>
                        <input type="text" class="form-control" placeholder="0">
                    </div>

                    <div class="form-row">
                        <div class="col">
                            <div class="form-group">
                                <label>CRR:</label>
                                <input type="text" class="form-control" placeholder="">
                                <small class="form-text text-muted">From 1 to 100% (Example: 10)</small>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Initial Reserve (in base coin):</label>
                                <input maxlength="10" type="text" class="form-control" placeholder="">
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <label>Message</label>
                        <input type="text" class="form-control" placeholder="">
                    </div>
                    <button type="submit" class="btn btn-dark">Submit</button>
                    <small class="form-text text-muted">Fee: 0.00001 MNT</small>
                </form>
            </div>

            <hr>

            <h2>Checks</h2>

            <div class="shadow-sm p-3 mb-5 bg-white rounded">
                <h4>Issue Check</h4>
                <form class="form mb-0" onsubmit="return false">
                    <div class="form-group">
                        <label>Nonce</label>
                        <input type="text" class="form-control" placeholder="0">
                    </div>
                    <div class="form-row">
                        <div class="col">
                            <div class="form-group">
                                <label>Amount</label>
                                <input type="text" class="form-control" placeholder="0">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <label>Coin</label>
                                <select class="form-control">
                                    <option>BIP</option>
                                    <option>ABC</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="text" class="form-control" placeholder="">
                    </div>
                    <button type="submit" class="btn btn-dark">Submit</button>
                </form>
            </div>

            <div class="shadow-sm p-3 mb-5 bg-white rounded">
                <h4>Redeem Check</h4>
                <form class="form mb-0" onsubmit="return false">
                    <div class="form-group">
                        <label>Check</label>
                        <input type="text" class="form-control" placeholder="Mx...">
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="text" class="form-control" placeholder="">
                    </div>
                    <button type="submit" class="btn btn-dark">Submit</button>
                </form>
            </div>

            <hr>

            <h2>Validators</h2>

            <div class="shadow-sm p-3 mb-5 bg-white rounded">
                <h4>Show candidate (s)</h4>

                <table class="table table-borderless">
                    <tr>
                        <th>Address</th>
                        <td>Mxa93163fdf10724dc4785ff5cbfb9ac0b5949409f</td>
                    </tr>
                    <tr>
                        <th>Public key</th>
                        <td>Mpaaee1dd...6f5dae3979</td>
                    </tr>
                    <tr>
                        <th>Total Stake</th>
                        <td>1,000,000 bips (14%)</td>
                    </tr>
                    <tr>
                        <th>Stakes</th>
                        <td>
                            Mxa9316...49409f: 100,000 MNT <br>
                            Mxa9316...49409f: 100,000 MNT
                        </td>
                    </tr>
                    <tr>
                        <th>Status</th>
                        <td>
                            <ul>
                                <li><b>Active</b> - candidate is active and working</li>
                                <li><b>Pending</b> - candidate is active, but stake is too small to be included in validators
                                    list
                                </li>
                                <li><b>Failed</b> - candidate is missing blocks</li>
                                <li><b>Offline</b> - candidate is not active</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th>Missed blocks</th>
                        <td>0..12</td>
                    </tr>
                </table>
            </div>

            <div class="shadow-sm p-3 mb-5 bg-white rounded">
                <h4>Declare Candidacy</h4>
                <form class="form mb-0" onsubmit="return false">
                    <div class="form-group">
                        <label>Address</label>
                        <input type="text" class="form-control" placeholder="Mx...">
                    </div>
                    <div class="form-group">
                        <label>Public key</label>
                        <input type="text" class="form-control" placeholder="Mp...">
                    </div>
                    <div class="form-group">
                        <label>Commission (%)</label>
                        <input type="text" class="form-control" placeholder="20">
                    </div>
                    <div class="form-row">
                        <div class="col">
                            <div class="form-group">
                                <label>Initial Stake</label>
                                <input type="text" class="form-control" placeholder="0">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <label>Coin</label>
                                <select class="form-control">
                                    <option>BIP</option>
                                    <option>ABC</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Message</label>
                        <input type="text" class="form-control" placeholder="">
                    </div>
                    <button type="submit" class="btn btn-dark">Submit</button>
                    <small class="form-text text-muted">Fee: 0.00001 MNT</small>
                </form>
            </div>

            <div class="shadow-sm p-3 mb-5 bg-white rounded">
                <h4>Delegate</h4>
                <form class="form mb-0" onsubmit="return false">
                    <div class="form-group">
                        <label>Public key</label>
                        <input type="text" class="form-control" placeholder="Mp...">
                    </div>
                    <div class="form-row">
                        <div class="col">
                            <div class="form-group">
                                <label>Stake</label>
                                <input type="text" class="form-control" placeholder="0">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <label>Coin</label>
                                <select class="form-control">
                                    <option>BIP</option>
                                    <option>ABC</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Message</label>
                        <input type="text" class="form-control" placeholder="">
                    </div>
                    <button type="submit" class="btn btn-dark">Submit</button>
                    <small class="form-text text-muted">Fee: 0.00001 MNT</small>
                </form>
            </div>

            <div class="shadow-sm p-3 mb-5 bg-white rounded">
                <h4>Unbond</h4>
                <form class="form mb-0" onsubmit="return false">
                    <div class="form-group">
                        <label>Public key</label>
                        <input type="text" class="form-control" placeholder="Mp...">
                    </div>
                    <div class="form-row">
                        <div class="col">
                            <div class="form-group">
                                <label>Stake</label>
                                <input type="text" class="form-control" placeholder="0">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <label>Coin</label>
                                <select class="form-control">
                                    <option>BIP</option>
                                    <option>ABC</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Message</label>
                        <input type="text" class="form-control" placeholder="">
                    </div>
                    <button type="submit" class="btn btn-dark">Submit</button>
                    <small class="form-text text-muted">Fee: 0.00001 MNT</small>
                </form>
            </div>

            <div class="shadow-sm p-3 mb-5 bg-white rounded">
                <h4>Set Candidate On/Off</h4>
                <form class="form mb-0" onsubmit="return false">
                    <div class="form-group">
                        <label>Public key</label>
                        <input type="text" class="form-control" placeholder="Mp...">
                    </div>
                    <div class="form-group">
                        <label>Message</label>
                        <input type="text" class="form-control" placeholder="">
                    </div>
                    <button type="submit" class="btn btn-dark">Submit</button>
                    <small class="form-text text-muted">Fee: 0.00001 MNT</small>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'

    export default {
        name: 'app',
        components: {
            HelloWorld
        }
    }
</script>

<style>
    .body {
        margin-top: 30px;
    }
    .bg-light.navbar-light {
        background-color: #474849 !important;
    }
    .navbar-brand {
        color: white !important;
    }
    .container {
        max-width: 1000px;
    }
</style>
