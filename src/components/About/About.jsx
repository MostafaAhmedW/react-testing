import "./about.css";
export default function About() {
  return (
    <>
        <div className="container-fluid py-5 about-bages text-white">
        <div className="about-item d-flex justify-content-center align-items-center min-vh-100">
          <div className="cap text-center">
            <h1 className="fw-bolder ">ABOUT COMPONENT</h1>

            <div className="d-flex align-items-center justify-content-center my-2 px-2">
              <div className="border-top border-3 line-star "></div>

              <i className="fa-solid fa-star icons px-2 pb-1"></i>

              <div className="border-top border-3 line-star"></div>
            </div>

            <div className="row gy-3">
              <div className="col-md-6">
                <div className="item-about  py-3 px-2 mt-2">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </div>
              </div>

              <div className="col-md-6">
                <div className="item-about  py-3 px-2 mt-2">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid miditeem py-5 text-center text-white ">
        <div className="row gy-5">
          <div className="col-md-4">
            <div className="itemmid py-5 ">
              <h2>LOCATION</h2>
              <p>2215 John Daniel Drive</p>
              <span>Clark, MO 65243</span>
            </div>
          </div>

          <div className="col-md-4">
            <div className="itemmid py-5">
              <h2>AROUD THE WEB</h2>
              <div className="">
                <i class="fa-brands fa-facebook-f fs-5 px-2 py-1 border border-1 rounded-circle mx-1 "></i>
                <i class="fa-brands fa-twitter fs-5  px-2 py-1 border border-1 rounded-circle mx-1 "></i>
                <i class="fa-brands fa-linkedin-in fs-5 px-2 py-1 border border-1 rounded-circle mx-1  "></i>
                <i class="fa-solid fa-earth-americas fs-5 px-2 py-1 border border-1 rounded-circle mx-1 "></i>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="itemmid py-5">
              <h2>ABOUT FREELANCER</h2>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid footer-homes m-0 p-0 text-white">
        <div className="text-center py-4 fs-6 ">
          <p>Copyright © Your Website 2021</p>
        </div>
      </div>
    </>
  );
}
