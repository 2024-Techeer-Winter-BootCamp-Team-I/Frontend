import Navbar from '../components/Navbar';
import Line from '../components/Line';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full bg-black-background">
      <div className="absolute left-0 top-0 z-20 w-full">
        <Navbar />
      </div>

      <div className="absolute left-0 top-0 z-30 w-full">
        <Line />
      </div>

      <main className="absolute z-40 mt-[155px] pt-[200px]">{children}</main>
    </div>
  );
};

export default Layout;
