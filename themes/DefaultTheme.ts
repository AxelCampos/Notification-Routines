import {
  Theme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';

export const DefaultTheme: Theme = {
  ...NavigationDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    primary: 'rgb(52, 120, 246)',
    background: 'rgb(245, 245, 245)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(40, 40, 40)',
    border: 'rgb(200, 200, 200)',
    notification: 'rgb(255, 99, 71)',
  },
};
