import TransactionItem from './TransactionItem'

function TransactionList({ transactions, onDelete }) {
  if (transactions.length === 0) {
    return <p className="empty-list">Aucune transaction à afficher.</p>
  }

  return (
    <div className="transaction-list">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Titre</th>
            <th>Type</th>
            <th>Montant</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <TransactionItem key={t.id} transaction={t} onDelete={onDelete} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TransactionList
