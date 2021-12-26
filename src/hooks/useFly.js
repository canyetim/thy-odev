import { useContext } from "react";
import ContextFly from "./context";

const useFly = () => {
  return useContext(ContextFly);
};

export default useFly;
