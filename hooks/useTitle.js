import { useEffect } from "react";

/**
 * This hook allows you to change the title of the index page to whatever
 * title you want.
 *
 * @param {String} title defines the title of the current window
 */
const useTitle = (title) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    return () => (document.title = prevTitle);
  }, [title]);
};

export default useTitle;
