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
    <div className="app-container">
      <h1 className="app-title">MON€Y</h1>
      <Balance transactions={transactions} />
      <Filter filter={filter} setFilter={setFilter} />
      <TransactionForm addTransaction={addTransaction} />
      <TransactionList transactions={filteredTransactions} onDelete={deleteTransaction} />
    </div>
  )
}

export default App
