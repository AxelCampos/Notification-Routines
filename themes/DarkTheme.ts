import {
  Theme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';

export const DarkTheme: Theme = {
  ...NavigationDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    primary: 'rgb(75, 156, 151)',
    background: 'rgb(34, 34, 34)',
    card: 'rgb(44, 44, 44)',
    text: 'rgb(220, 220, 220)',
    border: 'rgb(60, 60, 60)',
    notification: 'rgb(255, 99, 71)',
  },
};
