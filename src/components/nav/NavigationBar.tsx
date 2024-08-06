import React, { useState } from "react";
import menuBtn from "../../assets/menu_light.png";
import netflixLogo from "../../assets/netflix_nobg.png";
import "../../styles/sidenav-animation.css";
import "../../styles/search-animation.css";

const VerticalSecondaryContent = () => {
  return [
    "Sign Out of Netflix",
    "Help Center",
    "Home",
    "My List",
    "Thrillers",
    "Kids & Family",
    "Filipino Movies & TV",
    "Reality TV",
    "Action",
    "Anime",
    "Comedies",
    "Fantasy",
    "Sci-fi",
    "Horror",
    "K-Dramas",
    "Stand-Up Comedy",
    "Documentaries",
    "Hollywood Movies",
    "Music & Musicals",
    "Romance",
    "Dramas",
  ];
};

const HorizontalContent = () => {
  return [
    "Home",
    "TV Shows",
    "Movies",
    "New & Popular",
    "My List",
    "Browse by Languages",
  ];
};

// TODO: Pass the compoenent via props.
function NavigationBar() {
  const [toggle, setToggle] = useState(true);
  const [hoverText, setHoverText] = useState<number | null>(null);

  const changeState = () => {
    setToggle(!toggle);
  };

  const handleTextHover = (index: number) => {
    setHoverText(index);
  };

  return (
    <>
      <nav className="relative">
        <div className="bg-black pt-2 px-14 h-20  items-center hidden lg:flex">
          <div>
            <a href="#">
              <img src={netflixLogo} className="h-12" />
            </a>
          </div>
          <div className="flex gap-5 px-5">
            {HorizontalContent().map((content, index) => (
              <div
                key={index}
                className="text-white text-sm hover:text-gray-300 ease-out duration-300"
              >
                <a href="#">{content}</a>
              </div>
            ))}
          </div>
          <div className="flex items-center ml-auto gap-5">
            <div className="text-white text-sm cursor-pointer ">
              <table className="table">
                <thead>
                  <tr>
                    <td
                      className={`${
                        !toggle ? "search-in block" : "search-out hidden"
                      } px-3 relative border`}
                    >
                      <input
                        type="search"
                        placeholder="Titles, people, genres"
                        className={`${
                          toggle ? "search-out" : "search-in"
                        } h-7 px-7 py-5 bg-black text-white focus:outline-none`}
                      />
                      <div
                        className={`${
                          !toggle ? "absolute" : "hidden"
                        }  inset-y-0 start-0 p-2 text-white text-xl`}
                      >
                        <i className="bi bi-search" onClick={changeState}></i>
                      </div>
                    </td>
                    <td>
                      <i
                        className={`${
                          toggle ? "block" : "hidden"
                        } bi bi-search text-white text-xl`}
                        onClick={changeState}
                      ></i>
                    </td>
                  </tr>
                </thead>
              </table>
            </div>
            <div className="text-white text-sm">
              <a>Kids</a>
            </div>
            <div className="text-white text-sm">
              <a>
                <i className="bi bi-bell text-white text-xl"></i>
              </a>
            </div>
            {/* 
                  To create a animation effect on hover using a table tag, we can use the following classes:
                  1. flex [&>*:nth-child(even)]:hover:rotate-180
                  2. flex [&>*:nth-child(even)]:ease-in
                  3. flex [&>*:nth-child(even)]:duration-300
                  
                  This will select all the even children of the table row and apply the animation effect on hover.
                  Also called as arbitrary child selector.
                  
                  */}
            <div className="flex items-center gap-2">
              <table className=" table-auto w-full">
                <tbody>
                  <tr className="flex [&>*:nth-child(even)]:hover:rotate-180 [&>*:nth-child(even)]:ease-in [&>*:nth-child(even)]:duration-200 gap-1">
                    <td className="flex items-center gap-2">
                      <a>
                        <i
                          className={`bi bi-person-circle text-3xl text-white`}
                        ></i>
                      </a>
                    </td>
                    <td className="flex items-center gap-2">
                      <a>
                        <i className={`bi bi-caret-down-fill text-white`}></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Smaller size navigation bar starts here */}
        <div className="relative lg:hidden">
          <div className="bg-black pt-2 px-5">
            <ul className="flex h-20 justify-between items-center">
              <li>
                <img src={menuBtn} className="h-7" onClick={changeState} />
              </li>
              <li>
                <a href="#">
                  <img src={netflixLogo} className="h-12" />
                </a>
              </li>
              <li>
                <a href="#">
                  <input
                    type="search"
                    placeholder="Search"
                    className="h-7 w-28 p-3 "
                    style={{ background: "#191919" }}
                  />
                </a>
              </li>
            </ul>
          </div>
          <div
            className={`${
              !toggle ? "slide-in" : "slide-out"
            } absolute left-0 bg-black w-64 font-bold z-50`}
          >
            <div className="flex gap-2 px-5" style={{ color: "#808080" }}>
              <div>
                <i className={`bi bi-person-circle text-3xl text-white`}></i>
              </div>
              <div className="items-center">
                <p className="m-0 p-0 flex text-md">Rafael Martinez</p>
                <small className="m-0 p-0 flex text-xs font-normal">
                  Switch Profiles
                </small>
              </div>
            </div>
            {VerticalSecondaryContent().map((content, index) => (
              <React.Fragment key={index}>
                <div
                  key={index}
                  className={`${
                    hoverText === index ? "text-white" : "text-gray-500"
                  } flex py-1`}
                >
                  <div
                    className={`${
                      hoverText === index
                        ? "bg-red-600 h-auto w-1"
                        : "invisible w-1"
                    }`}
                  ></div>
                  <p className="px-5" onClick={() => handleTextHover(index)}>
                    {content}
                  </p>
                </div>
                {index === 1 && <hr className="mt-4" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavigationBar;
