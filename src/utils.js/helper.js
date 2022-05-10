const helpers = {
  isDesktop: () => {
    let isDesktop =
      Platform.OS == "web"
        ? process.browser
          ? Dimensions.get("window").width > 991
            ? true
            : false
          : process.helperWebType?.isDesktop
          ? true
          : false
        : false;
    return isDesktop;
  },
};
export { helpers };
