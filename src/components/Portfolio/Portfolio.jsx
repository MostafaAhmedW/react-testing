import poertone from'../../../public/image/poert1.png'
import poerttwo from'../../../public/image/port2.png'
import poertthree from'../../../public/image/port3.png'
import './portfolio.css'

export default function Portfolio() {
    
  function showPopup(imgSrc) {
  document.getElementById("popup-img").src = imgSrc;
  document.getElementById("popup").classList.remove("d-none");
}
  return (
    <>

       <div className="cap-port  text-center mt-5 py-5" >
        <h1 className="pt-5 fw-bolder">PORTFOLIO COMPONENT</h1>

              <div className="d-flex align-items-center justify-content-center">
                <div className="  line-port "></div>

                <i class="fa-solid fa-star icons px-2 pb-1"></i>
                <div className=" line-port"></div>
              </div>

       </div>

       <div className="container">
        <div className="row gy-5">

            <div className="col-md-6 col-lg-4">

                <div className="item-port ">

                    <div className="img-port w-100 d-block position-relative">

                        <img src={poertone} alt="poert" />

                        <div className="layer-port d-flex align-items-center justify-content-center text-white " onClick={() => showPopup(poertone)}>

                            <i class="fa-solid fa-plus"></i>

                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-6 col-lg-4">

                <div className="item-port ">

                    <div className="img-port w-100 d-block position-relative">

                        <img src={poerttwo} alt="poert" />

                        <div className="layer-port d-flex align-items-center justify-content-center text-white " onClick={() => showPopup(poerttwo)}>

                            <i class="fa-solid fa-plus"></i>

                        </div>
                    </div>
                </div>
            </div>

             <div className="col-md-6 col-lg-4">

                <div className="item-port ">

                    <div className="img-port w-100 d-block position-relative">

                        <img src={poertthree} alt="poert" />

                        <div className="layer-port d-flex align-items-center justify-content-center text-white " onClick={() => showPopup(poertthree)}>

                            <i class="fa-solid fa-plus"></i>

                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-6 col-lg-4">

                <div className="item-port ">

                    <div className="img-port w-100 d-block position-relative">

                        <img src={poertone} alt="poert" />

                        <div className="layer-port d-flex align-items-center justify-content-center text-white " onClick={() => showPopup(poertone)}>

                            <i class="fa-solid fa-plus"></i>

                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-6 col-lg-4">

                <div className="item-port ">

                    <div className="img-port w-100 d-block position-relative">

                        <img src={poerttwo} alt="poert" />

                        <div className="layer-port d-flex align-items-center justify-content-center text-white " onClick={() => showPopup(poerttwo)}>

                            <i class="fa-solid fa-plus"></i>

                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-6 col-lg-4">

                <div className="item-port ">

                    <div className="img-port w-100 d-block position-relative">

                        <img src={poertthree} alt="poert" />

                        <div className="layer-port d-flex align-items-center justify-content-center text-white " onClick={() => showPopup(poertthree)}>

                            <i class="fa-solid fa-plus"></i>

                        </div>
                    </div>
                </div>
            </div>

        </div>
       </div>

       <div
  id="popup"
  className="d-none position-fixed top-0 start-0 w-100 h-100 bg-black bg-opacity-75 d-flex justify-content-center align-items-center"
  onClick={(e) => {
    if (e.target.id === "popup") {
      document.getElementById("popup").classList.add("d-none");
    }
  }}
  style={{ zIndex: 9999 }}
>
  <img id="popup-img" src="" className="img-fluid" style={{ maxHeight: "90%", maxWidth: "90%" }} />
       </div>

      <div className="container-fluid miditeem py-5 text-center text-white mt-4 ">
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
  )
}
