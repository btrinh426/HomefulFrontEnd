import React from "react";
import styles from "../../sass/createacc.module.scss";

const AreaChoice = ({
  setOnAreaChoiceContent,
  setOnIdealAreaTab,
  setOnIdealAreaContent,
}) => {
  const handleNext = () => {
    setOnAreaChoiceContent(false);
    setOnIdealAreaTab(true);
    setOnIdealAreaContent(true);
  };

  return (
    <>
      <button onClick={handleNext}>Next</button>
    </>
  );
};

export default AreaChoice;
