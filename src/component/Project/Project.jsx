import "./Project.css";
import con from "../../assets/image/const.png";
import github from "../../assets/image/github.svg";
import demoicon from "../../assets/image/demoicon.png";
import offit from "../../assets/image/offit.png";

function Project() {
  return (
    <div className="">
      <h2> ABOUT MY ℙℝ𝕆𝕁𝔼ℂ𝕋</h2>
      <br />
      <div className="list-card">
        <div className="card">
          <img className="card-image" src={con} alt="John" height="220px" />
          <h3>โครงการก่อสร้างชลประทานที่ 17</h3>
          <p>
            เว็บไซต์โครงการก่อร้าง สำนักงานชลประทานที่ 17 สร้างโดย HTML CSS และ
            BOOTSTRAB{" "}
          </p>
          <p>
            <a href="http://irrigation.rid.go.th/rid17/Construction17/home.html">
              <button>
                <img className="image-icon" src={github} />
              </button>
            </a>{" "}
            <a href="https://github.com/Patma12">
              <button>
                <img src={demoicon} />
              </button>
            </a>
          </p>
        </div>

        {/* <div className="card">
          <img className="card-image" src={offit} alt="John" height="220px" />
          <h3>offit</h3>
          <p>
            A website for users to managing exercises. By using React, NPM,
            Vercek, Mongodb, Express, node.js.
          </p>
          <p>
            <a href="http://irrigation.rid.go.th/rid17/Construction17/home.html">
              <button>
                <img className="image-icon" src={github} />
              </button>
            </a>{" "}
            <a href="https://offit.vercel.app/">
              <button>
                <img src={demoicon} />
              </button>
            </a>
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default Project;
