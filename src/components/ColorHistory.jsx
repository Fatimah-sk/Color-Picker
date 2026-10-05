
import './ColorHistory.css';

function ColorHistory({ history, onSelect, onClear }) {
  return (
    <section className="history-card">

      <div className="history-header">

        <h3>
          <span>↺</span> Dine siste valgte farger i denne økten.
        </h3>

        <button
          className="clear-button"
          onClick={onClear}
          disabled={history.length === 0}
        >
          Tøm historikk
        </button>

      </div>

      <div className="history-colors">

        {history.length === 0 ? (
          <p className="empty-history">
            Ingen farger i historikken ennå.
          </p>
        ) : (
          history.map((item) => (
            <button
              key={item}
              className="history-swatch"
              style={{ backgroundColor: item }}
              onClick={() => onSelect(item)}
              title={item}
              aria-label={`Select previous color ${item}`}
            />
          ))
        )}

      </div>

    </section>
  );
}

export default ColorHistory;
