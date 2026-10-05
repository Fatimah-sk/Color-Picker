
import './ColorBox.css';

function ColorBox({ color, name, onCopy, copied }) {
  return (
    <section
      className="color-preview"
      style={{ backgroundColor: color }}
    >

      <button
        className="copy-button"
        onClick={onCopy}
        title="Copy HEX code"
        aria-label="Copy HEX code"
      >
        {copied ? '✓' : '▢'}
      </button>

      <div className="preview-content">

        <p>VALGT FARGE</p>

        <h2>{name}</h2>

        <div className="hex-badge">
          {color.toUpperCase()}
        </div>

        {copied && (
          <span className="copy-message">
            Copied to clipboard!
          </span>
        )}

      </div>

      <div className="preview-bottom">
        LIVE COLOR PREVIEW
      </div>

    </section>
  );
}

export default ColorBox;
