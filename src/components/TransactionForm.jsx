import { useState } from 'react'

const defaultForm = {
  title: '',
  amount: '',
  type: 'income',
  date: new Date().toISOString().split('T')[0],
}

function TransactionForm({ onAdd }) {
  const [form, setForm] = useState(defaultForm)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const validate = () => {
    if (!form.title.trim()) return 'Le titre est requis.'
    if (!form.amount || isNaN(form.amount) || Number(form.amount) <= 0)
      return 'Le montant doit être un nombre positif.'
    if (!form.date) return 'La date est requise.'
    return ''
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const err = validate()
    if (err) {
      setError(err)
      return
    }
    setError('')
    onAdd({ ...form, amount: parseFloat(form.amount) })
    setForm(defaultForm)
  }

  return (
    <form className="transaction-form" onSubmit={handleSubmit}>
      <h2>Ajouter une transaction</h2>

      {error && <p className="form-error">{error}</p>}

      <div className="form-group">
        <label htmlFor="title">Titre</label>
        <input
          id="title"
          name="title"
          type="text"
          placeholder="Ex : Salaire, Loyer..."
          value={form.title}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="amount">Montant (€)</label>
        <input
          id="amount"
          name="amount"
          type="number"
          min="0.01"
          step="0.01"
          placeholder="0.00"
          value={form.amount}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="type">Type</label>
        <select id="type" name="type" value={form.type} onChange={handleChange}>
          <option value="income">Revenu</option>
          <option value="expense">Dépense</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="date">Date</label>
        <input
          id="date"
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn-add">
        Ajouter
      </button>
    </form>
  )
}

export default TransactionForm
