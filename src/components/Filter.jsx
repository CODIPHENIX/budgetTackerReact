const filters = [
  { value: 'all', label: 'Tous' },
  { value: 'income', label: 'Revenus' },
  { value: 'expense', label: 'Dépenses' },
]

function Filter({ filter, onFilterChange }) {
  return (
    <div className="filter">
      <span className="filter-label">Filtrer :</span>
      {filters.map((f) => (
        <button
          key={f.value}
          className={`filter-btn ${filter === f.value ? 'active' : ''}`}
          onClick={() => onFilterChange(f.value)}
        >
          {f.label}
        </button>
      ))}
    </div>
  )
}

export default Filter
