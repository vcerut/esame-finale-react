import "./navbar.scss";
import logo from "../img/ouroboros-logo.png";

const Navbar = () => {
  return (
    <nav className='h-20 bg-black my-4 mx-0 px-4 flex flex-row justify-between items-center w-full'>
      <div>
        <a href='/'>
          <img src={logo} alt='' className='h-16' />
        </a>
      </div>
      <div className='flex flex-col justify-center'>
        <a
          href='/login'
          className='text-white font-bold transition ease-in-out delay-150 hover:text-[#7EB2E1]'
        >
          Login
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
