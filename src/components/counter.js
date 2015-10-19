const counterFactory = (React) => {
const { number, func } = React.PropTypes;

  return function Counter (props) {
    this.propTypes = {
      increment: func.isRequired,
      incrementIfOdd: func.isRequired,
      incrementAsync: func.isRequired,
      decrement: func.isRequired,
      counter: number.isRequired
    };

    const { increment, incrementIfOdd, incrementAsync, decrement, counter } = props;
    return (
      <div className="counter">
        <h1 className="counter__value">{counter}</h1>
        <button className="counter__increment" onClick={increment}>+</button>
        <button className="counter__decrement" onClick={decrement}>-</button>
        <button className="counter__odd" onClick={incrementIfOdd}>
          Increment if odd
        </button>
      </div>
    );
  };
};

export default counterFactory;
