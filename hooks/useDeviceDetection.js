import { useState, useEffect } from "react";

/**
 * This hook detects whether the currently used device is a
 * mobile, tablet or desktop device.
 *
 * @returns string (Mobile, Tablet or Desktop) - indicating what kind of devices is currently used
 */
const useDeviceDetection = () => {
  const [device, setDevice] = useState("");

  useEffect(() => {
    const handleDeviceDetection = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobile =
        /iphone|ipad|ipod|android|blackberry|windows phone/g.test(userAgent);
      const isTablet =
        /(ipad|tablet|playbook|silk)|(android(?!.*mobile))/g.test(userAgent);

      if (isMobile) {
        setDevice("Mobile");
      } else if (isTablet) {
        setDevice("Tablet");
      } else {
        setDevice("Desktop");
      }
    };

    handleDeviceDetection();
    window.addEventListener("resize", handleDeviceDetection);

    return () => {
      window.removeEventListener("resize", handleDeviceDetection);
    };
  }, []);

  return device;
};

/**
 * This hook detects whether the currently used device is
 * a mobile device.
 *
 * @returns boolean - currenct device is a mobile device
 */
const useIsMobile = () => {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const userAgent =
      typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const mobile = Boolean(
      userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      )
    );
    setMobile(mobile);
  }, []);

  return { isMobile };
};

export { useDeviceDetection, useIsMobile };
