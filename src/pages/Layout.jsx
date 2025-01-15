import Frame from '../components/Frame';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full bg-black-background">
      <Frame></Frame>

      <main className="relative z-40">{children}</main>
    </div>
  );
};

export default Layout;
