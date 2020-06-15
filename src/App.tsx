import React, { useState, useCallback } from 'react';

import GlobalStyle, {
  Container,
  Display,
  ContainerKeyboard,
  TheKeyBoard,
  KeyBtn,
} from './styles';

const App: React.FC = () => {
  const [display, setDisplay] = useState('');
  const [currentValue, setCurrentValue] = useState(0);
  const [firstValue, setFirstValue] = useState(0);
  // const [secondValue, setSecondValue] = useState(0);
  const [result, setResult] = useState(0);
  const [operation, setOperation] = useState('');

  const handleNumClick = useCallback(
    (numberEntry: string) => {
      let newNumber;

      if (display.length < 8) {
        newNumber = display + numberEntry;

        setDisplay(newNumber);
        setCurrentValue(Number(newNumber));
      }

      newNumber = display;
    },
    [display]
  );

  const handleOperationClick = useCallback(
    (operationEntry: string) => {
      setOperation(operationEntry);

      setFirstValue(currentValue);

      setCurrentValue(0);

      setDisplay('');
    },
    [currentValue]
  );

  const handleEqualClick = useCallback(() => {
    // setSecondValue(currentValue);
    const secondValue = currentValue;

    let rst;

    switch (operation) {
      case '+':
        rst = firstValue + secondValue;
        setResult(rst);
        break;

      case '-':
        rst = firstValue - secondValue;
        setResult(rst);
        break;

      case '*':
        rst = firstValue * secondValue;
        setResult(rst);
        break;

      case '/':
        if (secondValue === 0) {
          setDisplay('Err');
          break;
        }
        rst = firstValue / secondValue;
        setResult(rst);
        break;

      default:
        setDisplay('Err');
    }

    const stringRst = String(rst);

    if (stringRst.length <= 8) {
      setDisplay(stringRst);
    } else {
      setDisplay('Err');
    }
  }, [currentValue, firstValue, operation]);

  const handleClear = useCallback(() => {
    setCurrentValue(0);
    setDisplay('');
  }, []);

  const handleCleanAll = useCallback(() => {
    setFirstValue(0);
    setResult(0);
    setOperation('');
    setCurrentValue(0);
    setDisplay('');
  }, []);

  return (
    <>
      <GlobalStyle />

      <Container>
        <Display>
          <p>{display}</p>
        </Display>

        <ContainerKeyboard>
          <TheKeyBoard>
            <KeyBtn onClick={handleCleanAll}>AC</KeyBtn>
            <KeyBtn disabled>+/-</KeyBtn>
            <KeyBtn disabled>%</KeyBtn>
            <KeyBtn onClick={() => handleOperationClick('/')}>/</KeyBtn>
            <KeyBtn onClick={() => handleNumClick('7')}>7</KeyBtn>
            <KeyBtn onClick={() => handleNumClick('8')}>8</KeyBtn>
            <KeyBtn onClick={() => handleNumClick('9')}>9</KeyBtn>
            <KeyBtn onClick={() => handleOperationClick('*')}>*</KeyBtn>
            <KeyBtn onClick={() => handleNumClick('4')}>4</KeyBtn>
            <KeyBtn onClick={() => handleNumClick('5')}>5</KeyBtn>
            <KeyBtn onClick={() => handleNumClick('6')}>6</KeyBtn>
            <KeyBtn onClick={() => handleOperationClick('-')}>-</KeyBtn>
            <KeyBtn onClick={() => handleNumClick('1')}>1</KeyBtn>
            <KeyBtn onClick={() => handleNumClick('2')}>2</KeyBtn>
            <KeyBtn onClick={() => handleNumClick('3')}>3</KeyBtn>
            <KeyBtn onClick={() => handleOperationClick('+')}>+</KeyBtn>
            <KeyBtn onClick={() => handleNumClick('0')}>0</KeyBtn>
            <KeyBtn disabled>.</KeyBtn>
            <KeyBtn onClick={handleClear}>C</KeyBtn>
            <KeyBtn onClick={handleEqualClick}>=</KeyBtn>
          </TheKeyBoard>
        </ContainerKeyboard>
      </Container>
    </>
  );
};

export default App;
