const Footer = () => {
  return (
    <footer className="footer mt-auto py-1">
      <div className="container">
        <p className="text-center mt-3">
          &copy; {new Date().getFullYear()} Your Website. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
