import { useState, useEffect } from 'react';
import './ColorSelector.css';

const quickColors = [
  { name: 'Red', hex: '#ff1744' },
  { name: 'Green', hex: '#22c55e' },
  { name: 'Blue', hex: '#0057ff' },
  { name: 'Yellow', hex: '#ffd600' },
  { name: 'Purple', hex: '#8b5cf6' },
  { name: 'Pink', hex: '#ff75b5' },
];

function ColorSelector({ color, onColorChange, onColorPreview }) {

  const [hexInput, setHexInput] = useState(color);

  useEffect(() => {
    setHexInput(color.toUpperCase());
  }, [color]);

  const handleHexInput = (value) => {
    setHexInput(value);

    const validHex = /^#[0-9A-Fa-f]{6}$/;

    if (validHex.test(value)) {
      onColorChange(value);
    }
  };

  return (
    <section className="controls">

      <div className="control-card">
        <h3>
          <span>◈</span> Choose from Menu
        </h3>

        <select
          value={
            quickColors.some((item) => item.hex === color)
              ? color
              : ''
          }
          onChange={(e) => onColorChange(e.target.value)}
        >
          <option value="" disabled>
            Choose a Color
          </option>

          {quickColors.map((item) => (
            <option key={item.hex} value={item.hex}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <div className="control-card">

        <h3>
          <span>✎</span> Create Your Own Color
        </h3>

        <p className="control-description">
          Enter a HEX code or use the color picker.
        </p>

        <div className="hex-input-group">

          <input
            type="text"
            placeholder="#8b5cf6"
            value={hexInput}
            maxLength={7}
            onChange={(e) =>
              handleHexInput(e.target.value)
            }
            aria-label="HEX color code"
          />
          <input
            type="color"
            value={color}
            onChange={(e) => {
              onColorPreview(e.target.value);
            }}
            onBlur={(e) => {
              onColorChange(e.target.value);
            }}
            title="Open color picker"
            aria-label="Choose a custom color"
            className="native-picker"
          />

        </div>

        <p className="input-hint">
          Example: #ff6600
        </p>

        <div className="quick-colors-header">
          <h3>
            <span>✧</span> Quick Colors
          </h3>
        </div>

        <div className="quick-colors">

          {quickColors.map((item) => (
            <button
              key={item.hex}
              type="button"
              className={`color-swatch ${
                color === item.hex ? 'active' : ''
              }`}
              style={{ backgroundColor: item.hex }}
              onClick={() => onColorChange(item.hex)}
              title={item.name}
              aria-label={`Select ${item.name}`}
              aria-pressed={color === item.hex}
            >
              {color === item.hex && (
                <span className="check-icon">✓</span>
              )}
            </button>
          ))}

        </div>

      </div>

    </section>
  );
}

export default ColorSelector;