const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-8 px-6 w-full">
      <div className="border-t border-gray-200 mt-8 pt-4 text-center text-sm">
        © {new Date().getFullYear()} The Toolsmith. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;