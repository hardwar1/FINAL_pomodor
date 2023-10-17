
import './plusbtn.scss';

interface PlusBtn {
  parrentClass?: string;
  ariaLabel?: string;
  mode?: string; 
}

export function PlusBtn({ parrentClass, ariaLabel, mode }: PlusBtn) {
  return (
    <button
      className={`${parrentClass ? parrentClass + '__plusBtn' : ''} plusBtn ${mode ? 'plusBtn--' + mode : ''} `}
      aria-label={ariaLabel}
    ></button>
  );
}
