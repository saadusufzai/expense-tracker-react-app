import React from 'react'

export  function IncomeExpences() {
    return (
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">+0.00 Rs.</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">-0.00 Rs.</p>
        </div>
      </div>

    )
}
