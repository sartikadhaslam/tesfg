import Image from 'next/image';
import NavItem from './NavItem';

interface NavbarFooterLayoutProps {
  children: React.ReactNode;
}

export default function NavbarFooterHomeLayout(props: NavbarFooterLayoutProps) {
  return (
    <>
    <div className="grid-flow-col-dense">
      {/* header */}
      <nav className="relative flex items-center justify-between px-2 bg-[#EC407A]">
        <div className="container px-4 mx-auto flex items-center justify-between">
          {/* logo */}
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              href="https://femalegeek.org/"
              className="flex items-center md:py-4 py-2"
            >
              <Image 
              src="/logo.png"
              className="h-20 rounded-full"
              alt="logo fg"
              width={80}
              height={40}
              />
            </a>
          </div>

          {/* menu */}
          <div
            className={
              "hidden lg:flex flex-grow items-center" 
            }
            id="femalegeek-logo"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <NavItem href={'#'} label={'Home'} />
              <NavItem href={'#about-us'} label={'About Us'} />
              <NavItem href={'#regional'} label={'Regional'} />
              <NavItem href={'#event'} label={'Event'} />
              <NavItem href={'#contact'} label={'Contact'} />
            </ul>
          </div>

          <div className="flex lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </div>
      </nav>
      

      {/* children */}
      {props.children}
      

      {/* footer */}
      <div className="h-10 bg-white" id="contact">
        <div className="grid grid-cols-1 md:grid-cols-2 p-5 gap-4">
          <div className="text-center md:text-left order-2 md:order-1">
            <h1 className="text-md font-montserrat">
              <strong>
                Copyright &copy; 2022 Femalegeek Dev Team. All rights reserved.
              </strong>
            </h1>
          </div>
          <div className="text-center md:text-right order-1 md:order-2">
            {/* mail logo */}
            <a href="mailto:femalegeekorg@gmail.com" target="_blank" rel="noopener noreferrer">
              <button className="inline-flex items-center justify-center w-12 h-12 mr-2 text-white bg-[#EC407A] rounded-full hover:bg-pink-300">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth="1.5" 
                  stroke="currentColor" 
                  className="w-7 h-7"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </button>
            </a>

            {/* facebook logo */}
            <a href="https://www.facebook.com/femalegeek" target="_blank" rel="noopener noreferrer">
              <button className="inline-flex items-center justify-center w-12 h-12 mr-2 text-white bg-[#EC407A] rounded-full hover:bg-pink-300">
                <svg
                  className="w-7 h-7 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                  />
                </svg>
              </button>
            </a>

            {/* instagram logo */}
            <a href="https://www.instagram.com/femalegeek_org/" target="_blank" rel="noopener noreferrer">
              <button className="inline-flex items-center justify-center w-12 h-12 mr-2 text-white bg-[#EC407A] rounded-full hover:bg-pink-300">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 448 512" 
                  className="w-7 h-7"
                >
                  <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
