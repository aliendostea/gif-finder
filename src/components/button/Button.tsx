import style from "./Button.module.scss";

interface ButtonProps {
  theme?: string;
  disabled?: boolean;
  btnLoader?: boolean;
  onClick?: () => void;
  children: JSX.Element;
}

const Button = ({ theme, disabled, children, onClick }: ButtonProps) => {
  if (theme === "light") {
    return (
      <button
        className={`${style.btn} ${style["btn-light"]}`}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }

  return (
    <button className={style.btn} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
