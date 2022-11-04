function App() {
  return (
    <div className="app">
      <div className="content-grid">
        <header className="app-header">Oszacowywacz kredytu</header>
        <div className="variable-field">
          <label>Waluta kredytu:</label>
          <select className="input-field">
            <option value="pln">PLN</option>
            <option value="chf">CHF</option>
            <option value="eur">EUR</option>
          </select>
        </div>
        <div className="variable-field">
          <label>Podaj kwotę kredytu w zł:</label>
          <input type="text" className="input-field" />
        </div>
        <div className="variable-field">
          <label>Podaj datę uruchomienia kredytu:</label>
          <input type="date" className="input-field" />
        </div>
        <div className="variable-field">
          <label>Podaj dzień płatności raty:</label>
          <input type="text" className="input-field" />
        </div>
        <div className="variable-field">
          <label>Szacowana suma spłaconych rat:</label>
          <input type="text" className="input-field" />
        </div>
      </div>
    </div>
  )
}

export default App
