import { ThreeDots } from "react-loader-spinner";

function Loader({color}) {
  return (
    <ThreeDots
      color={color}
      height={45}
      ariaLabel="three-dots-loading"
      visible={true}
      wrapperStyle={{ margin: "auto" }}
    />
  );
}

export default Loader;
