// Write your code here
import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem/index'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  withdrawRupees = clickValue => {
    this.setState(prevState => ({
      balance: prevState.balance - clickValue,
    }))
  }

  render() {
    const {denominationsList} = this.props

    const {balance} = this.state

    return (
      <div className="app-container">
        <div className="main-container">
          <div className="name-container mb-5">
            <div className="letter-container">
              <p className="letter">s</p>
            </div>
            <h1 className="name ml-4">Sarah Williams</h1>
          </div>
          <div className="balance-container mb-5">
            <p className="balance-desc">Your Balance</p>
            <div className="rupees-container">
              <p className="rupees-num">{balance}</p>
              <p className="rupees-desc mt-2">In Rupees</p>
            </div>
          </div>
          <p className="withdraw-text mb-4">Withdraw</p>
          <p className="choose-sum-text">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denomination-item-container mt-4">
            {denominationsList.map(eachList => (
              <DenominationItem
                key={eachList.id}
                listDetails={eachList}
                withdrawRupees={this.withdrawRupees}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
