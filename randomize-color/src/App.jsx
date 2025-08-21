import Title from "./components/Title";
import { useState } from "react";

const generalBtnStyle = "w-full border-1 rounded-2xl py-2 cursor-pointer";
const availableBtnBgColors = [
  "bg-blue-400",
  "bg-amber-400",
  "bg-cyan-400",
  "bg-green-400",
  "bg-orange-400",
];
const availableBg = [
  "bg-blue-400",
  "bg-amber-400",
  "bg-cyan-400",
  "bg-green-400",
  "bg-orange-400",
];
const availableBtnTxtColors = [
  "text-red-400",
  "text-green-400",
  "text-blue-400",
  "text-yellow-400",
  "text-emerald-400",
  "text-fuchsia-400",
];
const availableTitleColors = [
  "text-red-400",
  "text-green-400",
  "text-blue-400",
  "text-yellow-400",
  "text-emerald-400",
  "text-fuchsia-400",
];

const RandomizeColor = () => {
  const [styleBtn1, setStyleBtn1] = useState({
    bgColor: "",
    txtColor: "",
  });
  const [styleBtn2, setStyleBtn2] = useState({
    bgColor: "",
    txtColor: "",
  });
  const [styleBtn3, setStyleBtn3] = useState({
    bgColor: "",
    txtColor: "",
  });
  const [styleBtn4, setStyleBtn4] = useState({
    bgColor: "",
    txtColor: "",
  });
  const [styleTitle, setStyleTitle] = useState("");
  const [styleBg, setStyleBg] = useState("");

  let randomBtnBg = Math.floor(Math.random() * availableBtnBgColors.length);
  let randomBtnTxt = Math.floor(Math.random() * availableBtnTxtColors.length);
  let randomTitle = Math.floor(Math.random() * availableTitleColors.length);
  let randomBg = Math.floor(Math.random() * availableTitleColors.length);

  const handleClickBtn1 = () => {
    setStyleBtn1({
      bgColor: availableBtnBgColors[randomBtnBg],
      txtColor: availableBtnTxtColors[randomBtnTxt],
    });
    setStyleTitle(availableTitleColors[randomTitle]);
    setStyleBg(availableBg[randomBg]);
  };

  const handleClickBtn2 = () => {
    setStyleBtn2({
      bgColor: availableBtnBgColors[randomBtnBg],
      txtColor: availableBtnTxtColors[randomBtnTxt],
    });
    setStyleTitle(availableTitleColors[randomTitle]);
    setStyleBg(availableBg[randomBg]);
  };

  const handleClickBtn3 = () => {
    setStyleBtn3({
      bgColor: availableBtnBgColors[randomBtnBg],
      txtColor: availableBtnTxtColors[randomBtnTxt],
    });
    setStyleTitle(availableTitleColors[randomTitle]);
    setStyleBg(availableBg[randomBg]);
  };

  const handleClickBtn4 = () => {
    setStyleBtn4({
      bgColor: availableBtnBgColors[randomBtnBg],
      txtColor: availableBtnTxtColors[randomBtnTxt],
    });
    setStyleTitle(availableTitleColors[randomTitle]);
    setStyleBg(availableBg[randomBg]);
  };

  return (
    <div className={`w-full h-screen ${styleBg} transition-all duration-500`}>
      <div className={styleTitle}>
        <Title></Title>
      </div>
      <div className="grid-btn">
        <button
          className={
            styleBtn1.bgColor && styleBtn1.txtColor
              ? generalBtnStyle +
                " " +
                styleBtn1.bgColor +
                " " +
                styleBtn1.txtColor
              : generalBtnStyle + " bg-amber-100" + " text-black"
          }
          onClick={handleClickBtn1}
        >
          Click Me
        </button>
        <button
          className={
            styleBtn2.bgColor && styleBtn2.txtColor
              ? generalBtnStyle +
                " " +
                styleBtn2.bgColor +
                " " +
                styleBtn2.txtColor
              : generalBtnStyle + " bg-amber-100" + " text-black"
          }
          onClick={handleClickBtn2}
        >
          Me too
        </button>
        <button
          className={
            styleBtn3.bgColor && styleBtn3.txtColor
              ? generalBtnStyle +
                " " +
                styleBtn3.bgColor +
                " " +
                styleBtn3.txtColor
              : generalBtnStyle + " bg-amber-100" + " text-black"
          }
          onClick={handleClickBtn3}
        >
          Me three
        </button>
        <button
          className={
            styleBtn4.bgColor && styleBtn4.txtColor
              ? generalBtnStyle +
                " " +
                styleBtn4.bgColor +
                " " +
                styleBtn4.txtColor
              : generalBtnStyle + " bg-amber-100" + " text-black"
          }
          onClick={handleClickBtn4}
        >
          Don't
        </button>
      </div>
    </div>
  );
};

export default RandomizeColor;
