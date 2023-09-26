import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import WelcomeScreen from "./MobileCombat/screens/WelcomeScreen";
import RuleScreen from "./MobileCombat/screens/RuleScreen";
import GameScreen from "./MobileCombat/screens/GameScreen";



const navigator = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    Rules : RuleScreen,
    Game: GameScreen
  },
  {
    initialRouteName: "Welcome",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
