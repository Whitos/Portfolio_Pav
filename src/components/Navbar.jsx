
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
  return <>
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className='text-white m-8 flex items-center justify-center gap-4 text-2xl'>
        <FaLinkedin />
        <FaGithub />
      </div>
    </nav>
  </>
}

export default Navbar