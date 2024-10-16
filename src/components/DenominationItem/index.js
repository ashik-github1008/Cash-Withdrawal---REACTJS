// Write your code here

import './index.css'

const DenominationItem = props => {
  const {listDetails, withdrawRupees} = props

  const {value} = listDetails

  const onDecrease = event => {
    const clickValue = event.target.value
    console.log(clickValue)
    withdrawRupees(clickValue)
  }

  return (
    <li className="mr-3 mb-4">
      <button
        className="denomination-btn"
        value={value}
        onClick={onDecrease}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
