import TimeAgo from 'timeago-react';

export default function WithdrawHistory({data, refetch}) {
    return (
        <div className="row">
        <section class="card">
            <header class="card-header">
                <div class="card-actions">
                    <a href="#" class="card-action card-action-toggle" data-card-toggle></a>
                    <a href="#" class="card-action card-action-dismiss" data-card-dismiss></a>
                </div>

                <h2 class="card-title">Withdrawal Requests.</h2>
            </header>
            <div class="card-body">
                <table class="table table-responsive-md mb-0">
                    <thead>
                        <tr>
                            <th>Method</th>

                            <th>Deposo</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                    {data.get_withdrawal_history.map((item, i) =>(<tr key={i}>
                            <td>{item.method}</td>
                            <td>{item.deposo}</td>
                            <td>{item.amount}</td>
                            <td>{item.status}</td>
                            <td><TimeAgo datetime={item.created_at}></TimeAgo></td>
                        </tr>))}
                        
                    </tbody>
                </table>
            </div>
        </section>
    </div>

    )
}
