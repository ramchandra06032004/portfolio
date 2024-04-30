import React, { useEffect } from "react";
import "../styles/FeelFree.css";
import LoginImage from "../assets/Screenshot 2024-04-29 174950.png";
import LoginImage2 from "../assets/Screenshot 2024-04-29 175007.png";
import ProfileImage from "../assets//profile.png";
import Docinterface from "../assets/docInterface.png";
import suicide from "../assets/suicide.png";
import appoinmentPage from "../assets/appoinmentBook.png";
import DoctorPage from "../assets/docPage.png";
import trauma from "../assets/trauma.png";

const FeelFree = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="FeelFreeContainer">
      <div className="heroDiv projectDiv">
        <div className="proInfo">
          <div className="ProHead">FeelFree.org</div>
          Empowering those facing mental health challenges, our MERN stack
          website offers secure authentication, a wealth of free educational
          resources, and seamless appointment booking with experienced doctors.
          Designed with empathy and expertise, this platform is a beacon of
          support and guidance for those on their journey towards mental
          wellness.
        </div>
        <div className="Features">Features</div>
        {/* column one */}
        <div className="projectImageColumn">
          <div className="leftImage ">
            <div className="greenBox">
              <img src={LoginImage} alt="" />
            </div>
            <div className="proJectInfo">
              <div className="FeatureHead">Secure Authentication</div>
              <div>
                FeelFree.org offers secure authentication, ensuring that users
                can trust the platform with their personal information.
              </div>
            </div>
          </div>
          <div className="RightImage greenBox">
            <img src={LoginImage2} alt="" />
          </div>
        </div>
        <div className="projectImageColumn mar">
          <div className="leftImage ">
            <div className="greenBox">
              <img src={DoctorPage} alt="" />
            </div>
            <div className="proJectInfo">
              <div className="FeatureHead">Book Appointment</div>
              <div>
                Users have the capability to choose from a variety of medical
                professionals and schedule consultations as per their
                convenience
              </div>
            </div>
          </div>
          <div className="RightImage greenBox">
            <img src={appoinmentPage} alt="" />
          </div>
        </div>
      </div>
      <div className="greenMainDiv heroDivBlack">
        {/* column 2 */}

        {/* colum 3 */}
        <div className="projectImageColumn">
          <div className="leftImage ">
            <div className="greenBox">
              <img src={suicide} alt="" />
            </div>
            <div className="proJectInfo">
              <div className="FeatureHead">Free Resources</div>
              <div>
                The website provides a wealth of free educational resources to
                support users in their mental health journey.
              </div>
            </div>
          </div>
          <div className="RightImage greenBox">
            <img src={trauma} alt="" />
          </div>
        </div>
        {/* column 3 */}
        <div className="projectImageColumn mar">
          <div className="leftImage ">
            <div className="greenBox">
              <img src={Docinterface} alt="" />
            </div>
            <div className="proJectInfo">
              <div className="FeatureHead">Track Appointment Status</div>
              <div>
                Both doctors and patients can track appointment statuses, with
                doctors having the additional ability to update them.
              </div>
            </div>
          </div>
          <div className="RightImage greenBox">
            <img src={ProfileImage} alt="" />
          </div>
        </div>
        {/* column 4 */}
      </div>
    </div>
  );
};

export default FeelFree;
