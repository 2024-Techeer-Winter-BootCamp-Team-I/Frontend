import Frame from '../components/Frame';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full bg-black-background">
      <Frame></Frame>

      <main className="absolute z-40 mt-[155px] pt-[200px]">{children}</main>
    </div>
  );
};

export default Layout;
