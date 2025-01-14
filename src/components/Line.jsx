import rowLine from '../assets/image/rowLine.svg';
import columnLine from '../assets/image/columnLine.svg';

const Line = () => {
  return (
    <div className="absolute h-screen w-full text-white"> {/*원래 relative였던걸 absolute로 바꾸니까 문제 해결결*/}
      {/* 세로줄 (columnLine) */}
      <img
        src={columnLine}
        alt="columnLine"
        className="absolute top-[15rem] left-[17rem] right-[30rem] h-[100%] -translate-y-1/3"
      />

      {/* 가로줄 (rowLine) */}
      <img
        src={rowLine}
        alt="rowLine"
        className="absolute top-[9rem] left-[28.5rem] right-[30rem] w-[130%] -translate-x-1/3"
      />
    </div>
  );
};

export default Line;
