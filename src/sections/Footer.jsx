const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-black-300 flex justify-between items-center text-20">
      <p className="text-white-500 md:text-sm text-xs">
        © 2024 Sepehr. All rights reserved.
      </p>
      <div className="flex gap-3 pr-2 justify-items-end">
        <div className="social-icon">
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </div>
        <div className="social-icon">
          <img
            src="/assets/twitter.svg"
            alt="twitter"
            className="w-1/2 h-1/2"
          />
        </div>
        <div className="social-icon">
          <img
            src="/assets/instagram.svg"
            alt="instagram"
            className="w-1/2 h-1/2"
          />
        </div>
      </div>
    </section>
  );
};

export default Footer;
