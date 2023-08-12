import { useState } from "react";
import "./App.css";

enum KanaOptions {
  Hiragana,
  Katakana,
  AllKana,
}

interface ButtonProperties {
  isSelected: boolean;
  children: React.ReactNode;
  onClick(): void;
}

const Button: React.FC<ButtonProperties> = ({
  isSelected,
  children,
  onClick,
}) => {
  if (isSelected) {
    return (
      <button
        className="text-white bg-blue-500 rounded-lg px-5 py-5 text-l w-full"
        onClick={onClick}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className="text-blue-500 bg-white border-2 border-blue-500 rounded-lg px-5 py-5 text-lg w-full"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

function App() {
  const [selectedOption, setSelectedOption] = useState(KanaOptions.Hiragana);

  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-row justify-center space-x-4">
          <Button
            isSelected={selectedOption === KanaOptions.Hiragana}
            onClick={() => {
              setSelectedOption(KanaOptions.Hiragana);
            }}
          >
            Practice Hiragana
          </Button>

          <Button
            isSelected={selectedOption === KanaOptions.Katakana}
            onClick={() => {
              setSelectedOption(KanaOptions.Katakana);
            }}
          >
            Practice Katakana
          </Button>

          <Button
            isSelected={selectedOption === KanaOptions.AllKana}
            onClick={() => setSelectedOption(KanaOptions.AllKana)}
          >
            Practice All Kana
          </Button>

          {/* {selectedOption === KanaOptions.Hiragana} */}
        </div>
      </div>
    </>
  );
}

export default App;
