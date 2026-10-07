
import './ColorHistory.css';

function ColorHistory({ history, onSelect, onClear }) {
  return (
    <section className="history-card">

      <div className="history-header">

        
      <h3>
        <span>↺</span> Your recently selected colors.
      </h3>        

        <button
          className="clear-button"
          onClick={onClear}
          disabled={history.length === 0}
        >
          Clear History
        </button>

      </div>

      <div className="history-colors">

        {history.length === 0 ? (
          <p className="empty-history">
            No colors in history yet.
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
