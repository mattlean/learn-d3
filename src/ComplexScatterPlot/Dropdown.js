function Dropdown({ id, onSelectedValueChange, options, selectedValue }) {
  return (
    <select
      id={id}
      value={selectedValue}
      onChange={(e) => onSelectedValueChange(e.target.value)}
    >
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  )
}

export default Dropdown
