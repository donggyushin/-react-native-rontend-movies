import { Font } from "expo";

export const _cacheResourcesAsync = async () => {
  await Font.loadAsync({
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "open-sans-light": require("./assets/fonts/OpenSans-Light.ttf"),
    "open-sans-regular": require("./assets/fonts/OpenSans-Regular.ttf")
  });
};
