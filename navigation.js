import mail from "./mail";
import home from "./home";
import drawer from "./drawer";

import {
  createDrawerNavigator,
  createMaterialTopTabNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

const StackNavigator = createStackNavigator({
  Home: home,
  Mail: mail
});

const Tab = createMaterialTopTabNavigator({
  Mail: mail,
  Drawer: drawer
});

const DrawerNavigator = createDrawerNavigator({
  Home: StackNavigator,
  Drawer: Tab
});

const Navigator = createAppContainer(DrawerNavigator);

export default Navigator;
