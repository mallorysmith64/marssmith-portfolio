function Footer() {
  let getYear = new Date().getFullYear();

  return (
    <>
      <footer className="page-footer-container">
        <section className="copyright">
          <p>Copyright Mallory A. Smith {getYear}</p>
        </section>
        <div className="wave-container">
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
      </footer>
    </>
  );
}

export default Footer;