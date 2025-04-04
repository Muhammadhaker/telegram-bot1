import './button.css';

const Button = (props) => {
  const { type, title, onClick, disabled } = props;

  const typeClass =
    (type === 'add' && 'add') ||
    (type === 'remove' && 'remove') ||
    (type === 'checkout' && 'checkout');

  return (
    <button
      className={`btn ${typeClass} ${disabled ? 'disabled' : ''}`}
      onClick={onClick}
      disabled={disabled}
      
    >
      {title}
    </button>
  );
};

export default Button;
