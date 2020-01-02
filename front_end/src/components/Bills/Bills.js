class billsData extends Component {
    state = {
        bills: [],
        name: '',
        amount: 0,
        isPaid: false
    }

    deleteBill = (id, index) => {
        fetch('bills/' + id, {
            method: 'DELETE'
        }).then((data) => {
            this.setState({
                bills: [...this.state.bills.slice(0, index), ...this.state.bills.slice(index + 1)]
            });
        });
    }

    render() {
        <div className="billsdata-container">
            <h3>All Bills</h3>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Paid?</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.bills.map((bills, index) => {
                        return (
                            <tr>
                                <th scope="row">{this.state.name}</th>
                                <td>{this.state.amount}</td>
                                <td>{this.state.isPaid}</td>
                                <td onClick={() => this.deleteBill(bill._id, index)}><span className="delete-btn">Delete</span> </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    }

}

export default billsData;