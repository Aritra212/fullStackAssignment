import logo from "../assets/logo.svg";

function Footer() {
  return (
    <div className="w-full bg-black text-white">
      <div className=" w-11/12 py-8 mx-auto flex justify-between md:justify-evenly flex-col sm:flex-row text-center">
        <div>
          <p className="font-bold text-xl mb-2">Abstract</p>
          <ul className="text-sm">
            <li className="cursor-pointer">Branches</li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-xl mb-2">Resources</p>
          <ul className="text-sm">
            <li className="cursor-pointer">Blog</li>
            <li className="cursor-pointer">Help Center</li>
            <li className="cursor-pointer">Relase Notes</li>
            <li className="cursor-pointer">Status</li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-xl mb-2">Community</p>
          <ul className="text-sm">
            <li className="cursor-pointer">Twitter</li>
            <li className="cursor-pointer">LinkedIn</li>
            <li className="cursor-pointer">Facebook</li>
            <li className="cursor-pointer">Dribble</li>
            <li className="cursor-pointer">Podcast</li>
          </ul>
        </div>
        <div>
          <div>
            <p className="font-bold text-xl mb-2">Company</p>
            <ul className="text-sm">
              <li className="cursor-pointer">About Us</li>
              <li className="cursor-pointer">Carees</li>
              <li className="cursor-pointer">Legal</li>
            </ul>
          </div>
          <div>
            <p>Contact Us</p>
            <ul className="text-sm">
              <li className="cursor-pointer">info@bstract.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 sm:mt-8">
          <img src={logo} alt="Company Logo" className="w-10 h-10 mx-auto " />
          <p className="text-sm">
            &copy; Copyright 2024 <br /> Abstract Studio Design Inc.
          </p>
          <p className="text-sm">All rights reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
