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
        className="text-white bg-blue-500 border-2 border-blue-500 rounded-lg px-5 py-5 text-lg w-full"
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

function KanaOptionsComponent() {
  const [selectedOption, setSelectedOption] = useState(KanaOptions.Hiragana);

  return (
    <div className="grid grid-col-4 grid-flow-row gap-4">
      <div className="col-span-2">
        <Button
          isSelected={selectedOption === KanaOptions.Hiragana}
          onClick={() => {
            setSelectedOption(KanaOptions.Hiragana);
          }}
        >
          Practice Hiragana
        </Button>
      </div>
      <div className="col-span-2">
        <Button
          isSelected={selectedOption === KanaOptions.Katakana}
          onClick={() => {
            setSelectedOption(KanaOptions.Katakana);
          }}
        >
          Practice Katakana
        </Button>
      </div>
      <div className="col-span-4">
        <Button
          isSelected={selectedOption === KanaOptions.AllKana}
          onClick={() => setSelectedOption(KanaOptions.AllKana)}
        >
          Practice All Kana
        </Button>
      </div>
    </div>
  );
}

const hiraganaArray = [
  "あ/a",
  "か/ka",
  "さ/sa",
  "た/ta",
  "な/na",
  "は/ha",
  "ま/ma",
  "や/ya",
  "ら/ra",
  "わ/wa",
];

const hiraganaDakutenArray = ["が/ga", "ざ/za", "だ/da", "ば/ba", "ぱ/pa"];

const hiraganaCombinationsArray = [
  "きゃ/kya",
  "ぎゃ/gya",
  "しゃ/sha",
  "じゃ/ja",
  "ちゃ/cha",
  "ぢゃ/ja",
  "にゃ/nya",
  "ひゃ/hya",
  "びゃ/bya",
  "ぴゃ/pya",
  "みゃ/mya",
  "りゃ/rya",
];

enum ItemsSelectedEnum {
  AllMainKana,
  AllDakutenKana,
  AllCombinationKana,
}

function App() {
  const [itemsSelected, setItemsSelected] = useState<Array<ItemsSelectedEnum>>(
    []
  );

  return (
    <>
      <div className="container py-4 mx-auto flex flex-col gap-9">
        <KanaOptionsComponent />

        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-4xl text-blue-500 text-center">Main Kana</p>

            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <Button
                  isSelected={itemsSelected.includes(
                    ItemsSelectedEnum.AllMainKana
                  )}
                  onClick={() => {
                    const index = itemsSelected.indexOf(
                      ItemsSelectedEnum.AllMainKana
                    );
                    if (index !== -1) {
                      setItemsSelected((prevState) => {
                        return prevState.filter(
                          (p) => p !== ItemsSelectedEnum.AllMainKana
                        );
                      });
                      return;
                    }

                    setItemsSelected([
                      ...itemsSelected,
                      ItemsSelectedEnum.AllMainKana,
                    ]);
                  }}
                >
                  All Main Kana
                </Button>
              </div>
              {hiraganaArray.map((hatakana) => {
                return (
                  <Button
                    isSelected={
                      false ||
                      itemsSelected.includes(ItemsSelectedEnum.AllMainKana)
                    }
                    onClick={() => {}}
                  >
                    {hatakana}
                  </Button>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-4xl text-blue-500 text-center">Dakuten Kana</p>
            <div className="grid grid-cols-1 gap-4">
              <Button
                isSelected={
                  false ||
                  itemsSelected.includes(ItemsSelectedEnum.AllDakutenKana)
                }
                onClick={() => {
                  const index = itemsSelected.indexOf(
                    ItemsSelectedEnum.AllDakutenKana
                  );
                  if (index !== -1) {
                    setItemsSelected((prevState) => {
                      return prevState.filter(
                        (p) => p !== ItemsSelectedEnum.AllDakutenKana
                      );
                    });
                    return;
                  }

                  setItemsSelected([
                    ...itemsSelected,
                    ItemsSelectedEnum.AllDakutenKana,
                  ]);
                }}
              >
                All Dakuten Kana
              </Button>
              {hiraganaDakutenArray.map((hatakana) => {
                return (
                  <Button
                    isSelected={
                      false ||
                      itemsSelected.includes(ItemsSelectedEnum.AllDakutenKana)
                    }
                    onClick={() => {}}
                  >
                    {hatakana}
                  </Button>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-4xl text-blue-500 text-center">Combination Kana</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <Button
                  isSelected={itemsSelected.includes(
                    ItemsSelectedEnum.AllCombinationKana
                  )}
                  onClick={() => {
                    const index = itemsSelected.indexOf(
                      ItemsSelectedEnum.AllCombinationKana
                    );
                    if (index !== -1) {
                      setItemsSelected((prevState) => {
                        return prevState.filter(
                          (p) => p !== ItemsSelectedEnum.AllCombinationKana
                        );
                      });
                      return;
                    }

                    setItemsSelected([
                      ...itemsSelected,
                      ItemsSelectedEnum.AllCombinationKana,
                    ]);
                  }}
                >
                  All Combination Kana
                </Button>
              </div>
              {hiraganaCombinationsArray.map((hatakana) => {
                return (
                  <Button
                    isSelected={
                      false ||
                      itemsSelected.includes(
                        ItemsSelectedEnum.AllCombinationKana
                      )
                    }
                    onClick={() => {}}
                  >
                    {hatakana}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div>
            <Button isSelected onClick={() => {}}>
              Start Quiz
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
