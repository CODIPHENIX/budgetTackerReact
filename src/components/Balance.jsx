function Balance({ transactions }) {
  const totalIncome = transactions
    .filter((t) => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0)

  const totalExpense = transactions
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0)

  const balance = totalIncome - totalExpense

  return (
    <div className="balance">
      <div className="balance-card total">
        <span className="label">Solde</span>
        <span className={`value ${balance >= 0 ? 'positive' : 'negative'}`}>
          {balance >= 0 ? '+' : ''}{balance.toFixed(2)} €
        </span>
      </div>
      <div className="balance-card income">
        <span className="label">Revenus</span>
        <span className="value positive">+{totalIncome.toFixed(2)} €</span>
      </div>
      <div className="balance-card expense">
        <span className="label">Dépenses</span>
        <span className="value negative">-{totalExpense.toFixed(2)} €</span>
      </div>
    </div>
  )
}

export default Balance
