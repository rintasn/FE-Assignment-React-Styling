import { FaSearch, FaUserAlt, FaHeart, FaShoppingCart } from 'react-icons/fa';
import Navbar from "./_components/_navbar/navbar";
import Banner from "./_components/_banner/banner";
import ContentBrowse from "./_components/_content/content_browse";
import ContentProduct from "./_components/_content/content_product";
import ContentPortfolio from "./_components/_content/content_portfolio";

export default function Home() {
  const title_logo = "Furniro";
  const img_logo = "/icon.png";
  const img_banner = "https://i0.wp.com/media.dekoruma.com/article/2020/01/09102748/wallpaper-dinding-ruang-tamu-minimalis-dengan-motif-bata-ekspos.jpg?fit=1000%2C885&ssl=1";

  const products = [
    {
      image: "/dining.png",
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp. 2.500.000"
    },
    {
      image: "/living.png",
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: "Rp. 2.500.000"
    },
    {
      image: "/bedroom.png",
      name: "Lolito",
      description: "Luxury big sofa",
      price: "Rp. 7.000.000"
    },
    {
      image: "/bedroom.png",
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: "Rp. 500.000"
    },

    {
        image: "/dining.png",
        name: "Grifo",
        description: "Night lamp",
        price: "Rp. 2.500.000"
      },
      {
        image: "/living.png",
        name: "Muggo",
        description: "Small mug",
        price: "Rp. 2.500.000"
      },
      {
        image: "/bedroom.png",
        name: "Pingky",
        description: "Cute bed set",
        price: "Rp. 7.000.000"
      },
      {
        image: "/bedroom.png",
        name: "Potty",
        description: "Minimalist flower pot",
        price: "Rp. 500.000"
      }
  ];

  const navList = [
    {
      title: "Home",
      link: "#"
    },
    {
      title: "Shop",
      link: "#"
    },
    {
      title: "About",
      link: "#"
    },
    {
      title: "Contact",
      link: "#"
    }
  ];

  const navIcon = [
    {
      icon: <FaUserAlt className="text-gray-500 hover:text-gray-800" />,
      link: "#"
    },
    {
      icon: <FaSearch className="text-gray-500 hover:text-gray-800" />,
      link: "#"
    },
    {
      icon: <FaHeart className="text-gray-500 hover:text-gray-800" />,
      link: "#"
    },
    {
      icon: <FaShoppingCart className="text-gray-500 hover:text-gray-800" />,
      link: "#"
    }
  ];

  return (
    <div className='flex flex-col gap-0 w-full'>
      <div>
        <Navbar title_logo={title_logo} img_logo={img_logo} isDark={false} navList={navList} navIcon={navIcon} />
      </div>
      <div>
        <Banner img_banner={img_banner} />
      </div>
      <div>
        <ContentBrowse />
      </div>
      <div>
        <ContentProduct products={products} />
      </div>
      <div>
        <ContentPortfolio />
      </div>
    </div>
  );
}
