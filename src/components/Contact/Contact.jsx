import "./contact.css";

export default function Contact() {
  return (
    <>
      <div className="head-contact py-5 text-center">
        <h1 className=" fw-bolder pt-5 mt-5 pb-3">CONATCT SECTION</h1>

        <div className="d-flex align-items-center justify-content-center">
          <div className=" line-contact "></div>

          <i class="fa-solid fa-star icons px-2 pb-1"></i>
          <div className=" line-contact"></div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="item-contact mt-3 text-center">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="userName"
                className="input-contact form-control w-75 border-0 px-3 py-2 shadow-sm rounded-3 mx-auto  rounded-3 rounded-3"
              />
            </div>
          </div>

          <div className="col-12">
            <div className="item-contact mt-3 text-center">
              <input
                type="text"
                id="age"
                name="age"
                placeholder="userAge"
                className="input-contact form-control w-75 border-0 px-3 py-2 shadow-sm rounded-3 mx-auto  rounded-3"
              />
            </div>
          </div>

          <div className="col-12">
            <div className="item-contact mt-3 text-center">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="userEmail"
                className="input-contact w-75 form-control border-0 px-3 py-2 shadow-sm rounded-3 mx-auto  rounded-3"
              />
            </div>
          </div>

          <div className="col-12">
            <div className="item-contact mt-3 text-center">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="userPassword"
                className="input-contact form-control w-75 border-0 px-3 py-2 shadow-sm rounded-3 mx-auto  rounded-3"
              />
            </div>
          </div>

          <button className="btn-contact w-auto mt-4 mx-auto  rounded-3 border-0 py-2 px-2 text-white mb-3 ">
            send Message
          </button>
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
