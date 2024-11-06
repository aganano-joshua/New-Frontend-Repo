import Card from "./Card/Hint_Data";
import "./first.css";
import { CardStackMinusIcon } from "@radix-ui/react-icons";
import { assets } from "Images/asset";

const Audio = () => {
  return (
    <main className="body grid place-content-center w-screen h-screen bg-gray-50">
      {/* Settings Container */}
      <div className="relative flex px-24 py-20 flex-col items-center w-[80vw] max-w-[90vh] bg-white border-4 border-[#008183] rounded-lg shadow-lg p-4">
        {/* Back Arrow */}
        <div className="absolute top-5 left-5">
          <img src={assets.vec} alt="Back Arrow" />
        </div>

        <div className="flex flex-col items-center w-[50vw] max-w-[250px]">
          {/* Cloud-like Header with "SETTINGS" */}
          <div className="relative flex items-center justify-center w-full mb-6">
            <img src={assets.union} alt="Cloud" className="w-48 h-24" />
            <img src={assets.settings} alt="Settings Text" className="absolute" />
          </div>
          <h1 className="text-teal-500 my-5 text-xl font-bold">Hints</h1>
          <Card />

          {/* Help Icon at the Bottom */}
          <div className="mt-8">
            <img src={assets.image42} alt="Help Icon" className="w-8 h-8" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Audio;
