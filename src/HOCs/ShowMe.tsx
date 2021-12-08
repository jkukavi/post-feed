import { useState } from "react";

interface showMeProps {
  children: JSX.Element;
  initiallyShown: boolean;
  showMeButtonText: string;
  propsMessage?: string;
}

const ShowMe = ({
  children,
  initiallyShown,
  showMeButtonText,
  propsMessage,
}: showMeProps) => {
  console.log(propsMessage + "ShowMe");
  const [shown, setShown] = useState(initiallyShown);

  const toggleShow = (e: any) => {
    e.stopPropagation();
    setShown(true);
  };

  return shown ? (
    children
  ) : (
    <button onClick={toggleShow}>{showMeButtonText}</button>
  );
};

export default ShowMe;
