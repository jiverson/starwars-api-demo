import * as React from 'react';
import Button from '@material-ui/core/Button'
import './Hello.css';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

function Hello({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: Props) {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
      <div>
        <Button variant="contained" color="primary" onClick={onDecrement}>-</Button>
        <Button variant="contained" color="primary" onClick={onIncrement}>+</Button>
      </div>
    </div>
  );
}

export default Hello;

// helpers
function getExclamationMarks(numChars: number) {
  return '!'.repeat(numChars);
}
