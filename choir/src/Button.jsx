import './Button.css'

const Button = ({ type = 'button', visual, onClick, children }) => {
  const className = `button ${visual === 'link' ? 'button-link' : 'button-normal'}`;
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
