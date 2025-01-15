<<<<<<< HEAD:src/components/Layout.jsx
import Navbar from './Navbar';
import Line from './Line';
=======
import Frame from '../components/Frame';
>>>>>>> d8d427380b3fdb6690ee1e8726a14382592b7ea4:src/pages/Layout.jsx

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
<<<<<<< HEAD:src/components/Layout.jsx
    <div className="absolute min-h-screen w-full bg-black-background">
      <div className="absolute left-0 top-0 z-10 w-full">
        <Navbar />
      </div>

      <div className="absolute left-0 top-0 z-0 w-full">
        <Line />
      </div>

      <main className="absolute z-40 mt-[155px] pt-[200px]">{children}</main>
=======
    <div className="relative min-h-screen w-full bg-black-background">
      <Frame></Frame>

      <main className="relative z-40">{children}</main>
>>>>>>> d8d427380b3fdb6690ee1e8726a14382592b7ea4:src/pages/Layout.jsx
    </div>
  );
};

export default Layout;
