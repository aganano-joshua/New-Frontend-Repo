import React from "react";
import logo from "../../assets/Group 53.png";
import logo1 from "../../assets/Group 55.png";
import paper from "../../assets/image 42.png";
import union from "../../assets/Union.png";
import arror from "../../assets/vec.png";
import arror1 from "../../assets/w.png";
import set from "../../assets/SETTINGS.png";
import frame from "../../assets/Frame.png";
import frame1 from "../../assets/Frame1.png";
import frame2 from "../../assets/Frame2.png";
import frame3 from "../../assets/Frame3.png";
import "./first.css";

const Setting = () => {
  return (
    <main className="body grid place-content-center w-screen h-screen bg-gray-50">
      {/* Settings Container */}
      <div className="relative flex px-24 py-20 flex-col items-center w-[80vw] max-w-[90vh] bg-white border-4 border-[#008183] rounded-lg shadow-lg p-4">
        {/* Back Arrow */}
        <div className="absolute top-5 left-5">
          <img src={arror} alt="Back Arrow" />
        </div>

        <div className="flex flex-col items-center w-[80vw] max-w-[400px]">
          {/* Cloud-like Header with "SETTINGS" */}
          <div className="relative flex items-center justify-center w-full mb-6">
            <img src={union} alt="Cloud" className="w-48 h-24" />
            <img src={set} alt="Settings Text" className="absolute" />
          </div>

          {/* My Account Section */}
          <div className="flex items-center bg-cyan-200 rounded-md px-4 py-2 mb-6 w-3/4">
            <img
              src={logo1}
              alt="Avatar"
              className="w-10 h-10 rounded-full mr-2"
            />
            <span className="text-lg font-semibold text-blue-900">
              My Account
            </span>
          </div>

          {/* Options List */}
          <div className="space-y-4 w-full px-6">
            {/* Option 1: Audio */}
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img src={frame} alt="Audio Icon" className="w-6 h-6 mr-2" />
                <span className="text-lg">Audio</span>
              </div>
              <img src={arror1} alt="Arrow" className="w-4 h-4" />
            </div>

            {/* Option 2: Challenge */}
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src={frame1}
                  alt="Challenge Icon"
                  className="w-6 h-6 mr-2"
                />
                <span className="text-lg">Challenge</span>
              </div>
              <img src={arror1} alt="Arrow" className="w-4 h-4" />
            </div>

            {/* Option 3: History */}
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img src={frame2} alt="History Icon" className="w-6 h-6 mr-2" />
                <span className="text-lg">History</span>
              </div>
              <img src={arror1} alt="Arrow" className="w-4 h-4" />
            </div>

            {/* Option 4: Accessibility */}
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src={frame3}
                  alt="Accessibility Icon"
                  className="w-6 h-6 mr-2"
                />
                <span className="text-lg">Accessibility</span>
              </div>
              <img src={arror1} alt="Arrow" className="w-4 h-4" />
            </div>
          </div>

          {/* Help Icon at the Bottom */}
          <div className="mt-8">
            <img src={paper} alt="Help Icon" className="w-8 h-8" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Setting;
