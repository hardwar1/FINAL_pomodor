import  './btn.scss';

interface IBtn {
  parrentClass?: string;
  onClick?: () => void;
  text?: string;
  ariaText?: string;
  mode?: string;
  type?: "button" | "submit" | "reset" | undefined; 
}

export function Btn({ parrentClass, onClick, text, ariaText, mode, type }: IBtn) {
  return (
    <button
      className={`${parrentClass ? parrentClass + '__btn' : ''} btn ${mode ? 'btn--' + mode : ''}`}
      onClick={onClick}
      aria-label={ariaText}
      type={type}
    >
      {text}
    </button>
  );
}
