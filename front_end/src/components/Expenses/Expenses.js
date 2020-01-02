import React, { Component } from 'react';

class expensesData extends Component {
    state = {
        expenses: [],
        name: '',
        amount: 0
    }


    deleteExpenses = (id, index) => {
        fetch('expenses/' + id, {
            method: 'DELETE'
        }).then((data) => {
            this.setState({
                expenses: [...this.state.expenses.slice(0, index), ...this.state.expenses.slice(index + 1)]
            });
        });
    }


    render() {
        <div className="expenses-data-container">
            <h3>All Expenses</h3>

            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.expenses.map((expenses, index) => {
                        return (
                            <tr>
                                <th scope="row">{this.state.name}</th>

                                <td>{this.state.amount}</td>

                                <td onClick={() => this.deleteExpenses(Expense._id, index)}><span className="delete-btn">Delete</span> </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    }

}

export default expensesData;