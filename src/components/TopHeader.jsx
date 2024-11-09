function TopHeader() {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-5/6 socialMedia-Section flex p-4">
          <div className="w-1/2 contactDetails">
            <div className="flex w-1/2 justify-around">
              <a href="#" className="contactNumber">
                {" "}
                <i className="fa-solid fa-phone"></i>
                +91 8920115852
              </a>
              <a href="#" className="contactEmail">
                {" "}
                <i className="fa-solid fa-envelope"></i>
                hs386778@gmail.com
              </a>
            </div>
          </div>
          <div className="w-1/2 socialMedia flex justify-end">
            <ul className="socialDetails w-1/2 flex justify-around">
              <li className="socialItems">
                <a href="#" className="socialLinks facebook">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li className="socialItems">
                <a href="#" className="socialLinks youtube">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>
              <li className="socialItems">
                <a href="#" className="socialLinks linkedin">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li className="socialItems">
                <a href="#" className="socialLinks instagram">
                  <i className="fa-brands fa-square-instagram"></i>
                </a>
              </li>
              <li className="socialItems">
                <a href="#" className="socialLinks twitter">
                  <i className="fa-brands fa-square-x-twitter"></i>
                </a>
              </li>
              <li className="socialItems">
                <a href="#" className="socialLinks whatsapp">
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopHeader;
