import { useState } from "react";

/**
 * This function allows you to force update a component and all its children in
 * the DOM. This function is usefull if you have a component that has a ref or a
 * context as value displayed and you want it to be updated.
 *
 * @returns a toggle function that updates the component and all its children
 */
const useForceUpdate = () => {
  const [, setToggle] = useState(false);
  return () => setToggle((toggle) => !toggle);
};

export default useForceUpdate;
