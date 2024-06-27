import "./Expereince.css";
import generation from "../../assets/image/generation.jpg";
import uncle2 from "../../assets/image/uncle2.jpg";
import rpu from "../../assets/image/rpu.jpg";
import generation2 from "../../assets/image/generation.jpg";
import workmate from "../../assets/image/workmate.jpg";
import rid17 from "../../assets/image/rid17.jpg";
import tele from "../../assets/image/tele.jpg";
import trancosmos from "../../assets/image/trancosmos.jpg";
import jemies from "../../assets/image/jemies.jpg";

function Expereinces() {
  return (
    <div className="container-box">
      <div>
        <h2>ABOUT MY EDUCATION AND EXPERIENCES</h2>
        <p>
          “Protons give an atom its identity, electrons its personality.”
          <br />- Bill Bryson, A short history of nearly everything
        </p>
      </div>
      <div>
        <div className="timeline">
          <div className="container right">
            <div className="content2">
              <h3>TRAINNING</h3>
            </div>
          </div>

          <div className="container right">
            <div className="content">
              <img src={generation2} alt="generation" width="50px" />
              <h4>🎓 Generation Thailand Jun 2022 - Aug 2022</h4>
              <p>
                Full-time Junior software developer program 12 week to learn
                about Technical skill MERN stack and soft skill like design
                thinking, agile, acrum process etc.
              </p>
            </div>
          </div>
          <div className="container right">
            <div className="content">
              <img src={uncle2} alt="uncle2" width="75px" />
              <h4>🎓 page ลุงวิศวกรสอนคำนวน by Uncle Engineer</h4>
              <p>
                Online course to learn about:👉 Python Django 50 hrs 👉Python
                websraping 👉Python GUI
              </p>
            </div>
          </div>

          <div className="container right">
            <div className="content2">
              <h3>GRADUATE</h3>
            </div>
          </div>

          <div className="container right">
            <div className="content">
              <img src={rpu} alt="rpu" width="50px" />
              <h4>🎓 Ratchapruk University Graduated 2017</h4>
              <p>
                Bachelor of Business Adminitrator : Hotel and Tourins Management
              </p>
            </div>
          </div>

          <div className="container right">
            <div className="content2">
              <h3>EXPERIENCES</h3>
            </div>
          </div>

          <div className="container right">
            <div className="content">
              <h4>
                🚩 Call center | Nov 2023 - June 2024 <br />
                AWP Services (Thailand) Co., Ltd.(Bangkok){" "}
              </h4>

              <p>
                {" "}
                Delivered exceptional customer service to every customer by
                leveraging extensive knowledge of products and services and
                creating welcoming, positive experiences.
              </p>
            </div>
          </div>

          <div className="container right">
            <div className="content">
              <img src={workmate} alt="workmate" width="50px" />
              <h4>
                🚩 Menu Content Creator | Jun 2021 - Jan 2022 <br />
                Workmate Thailand, Bangkok (wfh){" "}
              </h4>
              <p>
                Collaborated with team members to achieve target results,create,
                verify and update shop details and menu into backend server.and
                translate menu
              </p>
            </div>
          </div>
          <div className="container right">
            <div className="content">
              <img src={rid17} alt="rid17" width="70px" />
              <h4>
                🚩 Temporary Staff | Feb 2021 - May 2021 <br />
                โครงการก่อสร้าง สำนักงานชลประทานที่ 17, Narathiwat
              </h4>
              <p>
                Update news on the organization's website and provide Gis data
                through ArcGIS program for team.
              </p>
            </div>
          </div>

          {/* <div className="container right">
            <div className="content">
              <img src={tele} alt="tele" width="70px" />
              <h4>
                🚩 Call Center Agent | May 2020 - Oct 2020
                <br />
                Teleinfomidia, Bangkok{" "}
              </h4>
              <p>
                Delivered exceptional customer service to every customer by
                leveraging extensive knowledge of products and services and
                creating welcoming, positive experiences.
              </p>
            </div>
          </div> */}
          <div className="container right">
            <div className="content">
              <img src={trancosmos} alt="trancosmos" width="70px" />
              <h4>
                🚩 Call Center Agent | Dec 2019 - Apr 2020
                <br />
                Transcosmos Thailand, Bangkok
              </h4>
              <p>
                Maintained and encouraged customer loyalty through courteous and
                efficient resolution of disputes, complaints discrepancies.and
                resolved over 70-90 customer issues per shift.
              </p>
            </div>
          </div>
          <div className="container right">
            <div className="content">
              <img src={jemies} alt="html" width="50px" />
              <h4>
                🚩 Waitress | 2017 - 2019 <br />
                Jamie's Italian siamdiscovery, Bangkok{" "}
              </h4>
              <p>
                Shared knowledge of menu items and flavors, enabling customers
                to make personal decisions based on taste and interest and
                remained calm, poised when dealing with difficult customers or
                during busy shifts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expereinces;
