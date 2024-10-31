const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-60">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
