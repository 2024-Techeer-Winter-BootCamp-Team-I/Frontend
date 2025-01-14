import Navbar from './Navbar';
import Line from './Line';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div className="absolute min-h-screen w-full bg-black-background">
      <div className="absolute left-0 top-0 z-10 w-full">
        <Navbar />
      </div>

      <div className="absolute left-0 top-0 z-0 w-full">
        <Line />
      </div>

      <main className="absolute z-40 mt-[155px] pt-[200px]">{children}</main>
    </div>
  );
};

export default Layout;
