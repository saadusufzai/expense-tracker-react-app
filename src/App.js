import React from 'react'
import {Header} from './Components/Header'
import {Balance} from './Components/Balance'
import {IncomeExpences} from './Components/IncomeExpences'
import TransactionList from './Components/TransactionList'
import AddTransaction from './Components/AddTransaction'

import './App.css'


 export default function App(){
     return(
        <div>
            <Header />
            <div className='container'>
                <Balance />
                <IncomeExpences />
                <TransactionList />
                <AddTransaction />
            </div>
        </div>
        
        )
 } 