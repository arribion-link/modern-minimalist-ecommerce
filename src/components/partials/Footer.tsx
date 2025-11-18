const Footer = () => {
  return (
    <>
      <footer className="p-4 min-h-[50vh] pt-[10em]">
         <hr />
        <div className="flex justify-around py-20">
          <div>

            <h1>ABOUT US</h1>
            <p className="">
              &copy; <span>{new Date().getFullYear()}</span> Arribion Last Dance
              Became First. All Rights Reserved.
            </p>
          </div>
          <div>
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
        <hr />
      </footer>
    </>
  );
}

export default Footer
