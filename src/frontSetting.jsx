const FrontSetting = () => {
  return (
    <div className="flex h-10 w-full items-center justify-between px-4">
      {/* Start */}
      <div className="ml-4 flex items-center">
        <div className="relative ml-4 flex items-center">
          <span className="absolute -left-10 top-1/2 -translate-y-1/2 transform text-[1.5rem] text-blue-main">
            Start
          </span>
        </div>
      </div>

      {/* 점선 (부모 컨테이너 역할) */}
      <div className="relative mx-4 flex flex-1 items-center">
        {/* 점선 */}
        <div className="h-1 w-full border-t-2 border-dashed border-green-main"></div>

        {/* 중간 점 */}
        <div
          className="absolute top-1/2 -translate-y-1/2 transform"
          style={{ left: '0%' }}
        >
          <div className="h-4 w-4 rounded-full bg-blue-main"></div>
        </div>

        <div
          className="absolute top-1/2 -translate-y-1/2 transform"
          style={{ left: '20%' }}
        >
          {/* 큰 원 */}
          <div className="absolute -inset-1 rounded-full bg-green-main opacity-50"></div>
          {/* 중간 점 */}
          <div className="h-4 w-4 rounded-full bg-green-main"></div>
        </div>

        <div
          className="absolute top-1/2 -translate-y-1/2 transform"
          style={{ left: '40%' }}
        >
          {/* 큰 원 */}
          <div className="absolute -inset-1 rounded-full bg-green-main opacity-50"></div>
          {/* 중간 점 */}
          <div className="h-4 w-4 rounded-full bg-green-main"></div>
        </div>

        <div
          className="absolute top-1/2 -translate-y-1/2 transform"
          style={{ left: '60%' }}
        >
          {/* 큰 원 */}
          <div className="absolute -inset-1 rounded-full bg-green-main opacity-50"></div>
          {/* 중간 점 */}
          <div className="h-4 w-4 rounded-full bg-green-main"></div>
        </div>

        <div
          className="absolute top-1/2 -translate-y-1/2 transform"
          style={{ left: '80%' }}
        >
          {/* 큰 원 */}
          <div className="absolute -inset-1 rounded-full bg-green-main opacity-50"></div>
          {/* 중간 점 */}
          <div className="h-4 w-4 rounded-full bg-green-main"></div>
        </div>

        {/* 화살표 */}
        <div
          className="absolute top-1/2 -translate-y-1/2 transform"
          style={{ right: '0%' }}
        >
          <div className="h-4 w-4 rotate-45 transform border-r-2 border-t-2 border-green-main"></div>
        </div>
      </div>

      {/* End (점선 컨테이너 외부) */}
      <div className="ml-0 flex items-center">
        <span className="text-[1.5rem] text-green-main">End</span>
      </div>
    </div>
  );
};

export default FrontSetting;
