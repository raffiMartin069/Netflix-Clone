function Footer() {
  return (
    <>
      <div className="pt-20 md:flex md:justify-center">
          <footer className="">
            <span className="flex gap-5 text-white px-5 md:px-0 pb-2">
              <div>
                <a href="https://www.facebook.com/netflixph"><i className="bi bi-facebook"></i></a>
              </div>
              <div>
                <a href="https://www.instagram.com/netflix/"><i className="bi bi-instagram"></i></a>
              </div>
              <div>
                <a href="https://x.com/NetflixAsia">
                    <i className="bi bi-twitter"></i> |{" "}
                    <i className="bi bi-twitter-x"></i>
                </a>
              </div>
              <div>
                <a href="https://www.youtube.com/channel/UCZoC-XeDO7HxbAdeCaRPPCw/videos"><i className="bi bi-youtube"></i></a>
              </div>
            </span>
            <section className="grid grid-cols-2 md:grid-cols-3 gap-2 lg:gap-x-52 px-3 font-normal" style={{color: '#808080'}}>
                <div>Audio Description</div>
                <div>Help Center</div>
                <div>Gift Cards</div>
                <div>Media Center</div>
                <div>Investor Relations</div>
                <div>Jobs</div>
                <div>Terms of Use</div>
                <div>Privacy</div>
                <div>Legal Notices</div>
                <div>Cookie Preferences</div>
                <div>Corporate Information</div>
                <div>Contact Us</div>
                <div className="mt-5 flex">
                    <button type="button" className="border text-center p-1 font-thin" style={{border: '1px solid #808080'}}>Service Code</button>
                </div>
            </section>
            <div className="px-3 mt-5">
                <small className="text-white" style={{color: '#808080'}}>
                    © 1997-2021 Netflix, Inc.
                </small>
                <br />
                <small className="text-white" style={{color: '#808080'}}>
                    Made By: Rafael Martinez
                </small>
            </div>
          </footer>
      </div>
    </>
  );
}

export default Footer;
