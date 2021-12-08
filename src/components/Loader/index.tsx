import "./index.css";

const Loader = ({ propsMessage }: { propsMessage: string }) => {
  console.log(propsMessage + "Loader");
  return <div className="loader"></div>;
};

export default Loader;
