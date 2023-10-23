
import './plusbtn.scss';

interface PlusBtn {
  parrentClass?: string;
  ariaLabel?: string;
  mode?: string; 
  addMinute: ()=> void;
}

export function PlusBtn({ parrentClass, ariaLabel, mode, addMinute }: PlusBtn) {
  return (
    <button
      onClick={addMinute}
      className={`${parrentClass ? parrentClass + '__plusBtn' : ''} plusBtn ${mode ? 'plusBtn--' + mode : ''} `}
      aria-label={ariaLabel}
    ></button>
  );
}
