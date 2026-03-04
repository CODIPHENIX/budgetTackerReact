function TransactionItem({ transaction, onDelete }) {
  const { id, title, amount, type, date } = transaction

  return (
    <tr className={`transaction-item ${type}`}>
      <td>{date}</td>
      <td>{title}</td>
      <td className="type-badge">
        <span className={`badge ${type}`}>
          {type === 'income' ? 'Revenu' : 'Dépense'}
        </span>
      </td>
      <td className={`amount ${type}`}>
        {type === 'income' ? '+' : '-'}{amount.toFixed(2)} €
      </td>
      <td>
        <button className="btn-delete" onClick={() => onDelete(id)}>
          Supprimer
        </button>
      </td>
    </tr>
  )
}

export default TransactionItem
