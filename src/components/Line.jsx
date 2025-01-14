import rowLine from '../assets/image/rowLine.svg';
import columnLine from '../assets/image/columnLine.svg';

const Line = () => {
  return (
    <div className="relative h-screen w-full bg-black-background text-white">
      {/* 세로줄 (columnLine) */}
      <img
        src={columnLine}
        alt="columnLine"
        className="absolute left-[300px] top-1/2 h-[90%] -translate-y-1/2"
      />

      {/* 가로줄 (rowLine) */}
      <img
        src={rowLine}
        alt="rowLine"
        className="absolute left-1/2 top-[150px] w-[90%] -translate-x-1/2"
      />
    </div>
  );
};

export default Line;
