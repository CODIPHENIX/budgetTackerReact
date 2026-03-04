import { useState, useEffect } from 'react'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'
import Balance from './components/Balance'
import Filter from './components/Filter'
import './App.css'

function App() {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem('transactions')
    return saved ? JSON.parse(saved) : []
  })
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions))
  }, [transactions])

  const addTransaction = (transaction) => {
    setTransactions([{ ...transaction, id: Date.now() }, ...transactions])
  }

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id))
  }

  const filteredTransactions = transactions.filter((t) => {
    if (filter === 'income') return t.type === 'income'
    if (filter === 'expense') return t.type === 'expense'
    return true
  })

  return (
    <div className="app">
      <h1>Budget Tracker</h1>
      <Balance transactions={transactions} />
      <div className="main-content">
        <TransactionForm onAdd={addTransaction} />
        <div className="list-section">
          <Filter filter={filter} onFilterChange={setFilter} />
          <TransactionList
            transactions={filteredTransactions}
            onDelete={deleteTransaction}
          />
        </div>
      </div>
    </div>
  )
}

export default App
