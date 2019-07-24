import React, { Component } from 'react';
import shortid from 'shortid';
import Balance from '../Balance/Balance';
import Controls from '../Controls/Controls';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

class Dashboard extends Component {
  state = {
    transactions: [],
    balance: {
      current: 0,
      deposit: 0,
      withdrawal: 0,
    },
  };

  addDepositAmmount = balance => {
    if (balance.type === 'Deposit') {
      this.setState(state => ({
        balance: {
          current: state.balance.current + Number(balance.amount),
          deposit: state.balance.deposit + Number(balance.amount),
          withdrawal: state.balance.withdrawal,
        },
      }));
    } else {
      this.setState(state => ({
        balance: {
          current: state.balance.current - Number(balance.amount),
          deposit: state.balance.deposit,
          withdrawal: state.balance.withdrawal + Number(balance.amount),
        },
      }));
    }
  };

  handleControls = balance => {
    const { transactions } = this.state;

    // BALANCE
    this.addDepositAmmount(balance);

    // TRANSACTIONS
    const newArr = [
      ...transactions,
      {
        ...balance,
        id: shortid(),
        date: `${new Date().toLocaleString()}`,
      },
    ];

    this.setState({ transactions: newArr });
  };

  render() {
    const { transactions } = this.state;
    const { balance } = this.state;
    return (
      <>
        <Controls onState={balance.current} onControls={this.handleControls} />
        <Balance
          withdrawal={balance.withdrawal}
          deposit={balance.deposit}
          current={balance.current}
        />
        <TransactionHistory items={transactions} />
      </>
    );
  }
}

export default Dashboard;
