const Footer = () => {
  return (
    <>
      <footer className="min-h-[80vh] pt-[10em]">
        <hr className="my-18 text-slate-500/50" />
        <div className="grid gap-5 mx-4 mb-6 md:grid-cols-3 ">
          <div>
            <h1 className="font-bold text-2xl mb-3">ABOUT US</h1>
            <p className="">
              &copy; <span>{new Date().getFullYear()}</span> Arribion Last Dance
              Became First. <br /> All Rights Reserved.
            </p>
          </div>
          <div>
            <h1 className="font-bold text-2xl mb-3">Quick Links</h1>
            <ul>
              <li>
                <a href="">HOME</a>
              </li>
              <li>
                <a href="">PRODUCTS</a>
              </li>
              <li>
                <a href="">ABOUT US</a>
              </li>
              <li>
                <a href="">SERVICES</a>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold text-2xl mb-3">Company</h1>
            <ul>
              <li>
                <a href="">PRIVATE POLICY</a>
              </li>
              <li>
                <a href="">TERMS & CONDITIONS</a>
              </li>
              <li>
                <a href="">ABOUT</a>
              </li>
              <li>
                <a href="">arribion</a>
              </li>
              <li>
                <a href="">codnify.dev</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full bg-black p-4 text-white">
          <h1 className="text-center">Jeff Muethia Ntongai</h1>
        </div>
      </footer>
    </>
  );
}

export default Footer
