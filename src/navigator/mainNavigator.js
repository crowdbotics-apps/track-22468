import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps170361Navigator from '../features/Maps170361/navigator';
import Settings170339Navigator from '../features/Settings170339/navigator';
import Settings170324Navigator from '../features/Settings170324/navigator';
import NotificationList170323Navigator from '../features/NotificationList170323/navigator';
import Maps170322Navigator from '../features/Maps170322/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps170361: { screen: Maps170361Navigator },
Settings170339: { screen: Settings170339Navigator },
Settings170324: { screen: Settings170324Navigator },
NotificationList170323: { screen: NotificationList170323Navigator },
Maps170322: { screen: Maps170322Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
