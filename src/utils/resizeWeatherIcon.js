//根据窗口宽度判断icon的大小
export const resizeWeatherIcon = (windowSize, section) => {
  if (section === "current") {
    if (windowSize.innerWidth < 768) {
      return 64;
    }
    if (windowSize.innerWidth < 1200) {
      return 128;
    }
    if (windowSize.innerWidth < 1440) {
      return 128;
    }
    if (windowSize.innerWidth >= 1440) {
      return 128;
    }
  } else {
    if (windowSize.innerWidth < 768) {
      return 32;
    }
    if (windowSize.innerWidth < 1200) {
      return 64;
    }
    if (windowSize.innerWidth < 1440) {
      return 64;
    }
    if (windowSize.innerWidth >= 1440) {
      return 64;
    }
  }
};
