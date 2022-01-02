export const TimerDisplay = ({ start, end, counter }) => {
  return (
    <div>
      <h3>
        Counting from {start} to {end}
      </h3>
      <h3>{counter}</h3>
    </div>
  );
};
