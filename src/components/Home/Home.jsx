import avater from "../../../public//image/avataaars.svg";
import "./home.css";
export default function Home() {
  return (
    <>
      <div className="container-fluid m-0 p-0 text-white ">
        <div className="item min-vh-100 d-flex justify-content-center align-items-center">
          <div className="img text-center pt-5">
            <img src={avater} alt="my imge" />

            <div className="item-cap text-center pt-3">
              <h2>START FRAMEWORK</h2>

              <div className="d-flex align-items-center justify-content-center my-2 px-2">
                <div className="border-top border-3 line-bord "></div>

                <i class="fa-solid fa-star icons px-2 pb-1"></i>
                <div className="border-top border-3 line-bord"></div>
              </div>
            </div>
            <p className="mt-3 pb-5 mb-0">
              Graphic Artist - Web Designer - Illustrator
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid miditeem py-5 text-center text-white">
        <div className="row gy-5">
          <div className="col-md-4">
            <div className="itemmid py-5">
              <h2>LOCATION</h2>
              <p>2215 John Daniel Drive</p>
              <span>Clark, MO 65243</span>
            </div>
          </div>

          <div className="col-md-4">
            <div className="itemmid py-5">
              <h2>AROUD THE WEB</h2>
              <div>
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
