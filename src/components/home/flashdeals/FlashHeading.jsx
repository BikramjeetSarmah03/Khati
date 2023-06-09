import { BsLightningFill } from "react-icons/bs";
import Countdown from "./Countdown";

export default function FlashHeading() {
  return (
    <div className="flex items-center justify-between p-4 font-bold text-white bg-yellow-400">
      <h1 className="flex items-center">
        <span className="text-sm sm:mr-2 sm:text-3xl">Flash Sale</span>
        <BsLightningFill size={24} className="hidden sm:block" />
      </h1>

      <Countdown date={new Date("08/03/2023 00:00:00")} />
    </div>
  );
}
