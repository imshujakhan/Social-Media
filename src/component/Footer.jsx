const Footer = () => {
  return (
    <footer className="py-3 mt-auto border-top">
      <div className="container text-center">
        <p className="text-muted mb-0">
          © {new Date().getFullYear()} Social Media App. Built with React & Bootstrap.
        </p>
      </div>
    </footer>
  );
};

export default Footer;