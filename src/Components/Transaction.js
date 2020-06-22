import React from 'react'

export default function Transaction() {
    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
       //  {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
      </li>
    )
}
