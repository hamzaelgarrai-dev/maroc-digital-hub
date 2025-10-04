import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-[#1E293B] text-white pt-16 pb-6">
      <div className="max-w-[1050px] mx-auto flex flex-col md:flex-row md:justify-between gap-10 px-6 mb-8">
        {/* Logo + description */}
        <div className="flex flex-col items-start">
          <h2 className="text-[22px] font-bold mb-4">Maroc DH</h2>
          <p className="max-w-[220px] text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            tempora laudantium soluta.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col items-start">
          <h3 className="font-semibold mb-4">Links</h3>
          <p className="text-[#268BFF] cursor-pointer">Home</p>
          <p className="text-[#268BFF] cursor-pointer">Events</p>
          <p className="text-[#268BFF] cursor-pointer">Networking</p>
          <p className="text-[#268BFF] cursor-pointer">My Event</p>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-start">
          <h3 className="font-semibold mb-4">Contact-Us</h3>
          <p>marocdh@gmail.com</p>
          <p>+212-649-537-454</p>
          <p>
            Av Abdelmoumen,<br /> CasaBlanca – Morocco
          </p>
        </div>

        {/* Social */}
        <div className="flex flex-col items-start">
          <h3 className="font-semibold mb-4">Social</h3>
          <p className="text-[#268BFF] cursor-pointer">Linkedin</p>
          <p className="text-[#268BFF] cursor-pointer">Twitter</p>
          <p className="text-[#268BFF] cursor-pointer">Instagram</p>
          <p className="text-[#268BFF] cursor-pointer">Facebook</p>
        </div>
      </div>

      {/* Divider */}
      <div className="bg-gray-300 h-[1px] w-full mb-4"></div>

      {/* Copyright */}
      <p className="text-center text-sm">Copyright &copy; 2025</p>
    </footer>
  );
}

export default Footer;
