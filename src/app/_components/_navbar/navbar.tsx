import { FaSearch, FaUserAlt, FaHeart, FaShoppingCart } from "react-icons/fa";

interface NavbarProps {
  title_logo: string;
  img_logo: string;
  isDark: boolean;
  navList: { title: string; link: string }[];
  navIcon: { icon: React.ReactNode; link: string }[]; // Change here
}

const Navbar = (props: NavbarProps) => {
  const { title_logo, img_logo, isDark, navList, navIcon } = props;

  return (
    <nav
      className={`shadow-md ${
        isDark ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img src={img_logo} alt="Furniro" className="h-8 mr-4" />
          <h1 className="text-2xl font-semibold text-gray-800">{title_logo}</h1>
        </div>
        <ul className="flex space-x-10 mx-auto items-center font-bold p-4 sm:p-0">
          {navList.map((item, index) => (
            <li key={index}>
              <a href={item.link} className="text-gray-600 hover:text-gray-800">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center space-x-4">
          {navIcon.map((iconItem, index) => (
            <div key={index} className="cursor-pointer">
              {iconItem.icon}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
