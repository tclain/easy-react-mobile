import { Platform } from "react-native";

let styled;
if (Platform.OS === "web") {
  styled = require("styled-components").default;
} else {
  styled = require("styled-components/native").default;
}
export default styled;
