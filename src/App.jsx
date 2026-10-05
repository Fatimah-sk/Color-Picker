
import { useState } from 'react';
import ColorSelector from './components/ColorSelector';
import ColorBox from './components/ColorBox';
import ColorHistory from './components/ColorHistory';
import './App.css';

const initialColor = '#8b5cf6';

const colorNames = {
  '#ff1744': 'Red',
  '#22c55e': 'Green',
  '#0057ff': 'Blue',
  '#ffd600': 'Yellow',
  '#8b5cf6': 'Purple',
  '#ff75b5': 'Pink',
  '#ffffff': 'White',
  '#000000': 'Black',
};

function App() {
  const [color, setColor] = useState(initialColor);
  const [history, setHistory] = useState([initialColor]);
  const [copied, setCopied] = useState(false);

  const handleColorChange = (newColor) => {
    const normalizedColor = newColor.toLowerCase();

    setColor(normalizedColor);
    setCopied(false);

    setHistory((prev) => [
      normalizedColor,
      ...prev.filter((item) => item !== normalizedColor),
    ].slice(0, 14));
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(color);
      setCopied(true);
    } catch (error) {
      console.error('Could not copy color:', error);
      setCopied(false);
    }
  };

  const selectedName = colorNames[color] || 'Custom Color';

  return (
    <main className="app">

      <div className="app-container">

        <header className="app-header">
          <div className="header-icon">🎨</div>

          <h1>
            React <span>Color</span> Picker
          </h1>

          <p>
            Velg en farge, eller lag din egen!
          </p>

          <span className="react-badge">
            ♥ Built with React
          </span>
        </header>

        <div className="workspace">

          <ColorSelector
            color={color}
            onColorChange={handleColorChange}
          />

          <ColorBox
            color={color}
            name={selectedName}
            onCopy={handleCopy}
            copied={copied}
          />

        </div>

        <ColorHistory
          history={history}
          onSelect={handleColorChange}
          onClear={() => setHistory([])}
        />

        <footer className="app-footer">
          Designed & Developed by Fatimah SK
          <span> • React + Vite</span>
        </footer>

      </div>

    </main>
  );
}

export default App;
