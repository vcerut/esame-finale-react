import "./navbar.scss";
import logo from "../img/ouroboros-logo.png";

const Navbar = () => {
  return (
    <nav className='h-20 bg-black my-4 mx-4 flex flex-row justify-between'>
      <div>
        <a href='/'>
          <img src={logo} alt='' className='h-16' />
        </a>
      </div>
      <div className='flex flex-row gap-x-8'>
        <p>Login</p>
        <p>Your reservations</p>
      </div>
    </nav>
  );
};

export default Navbar;
