import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    basicWidth: string;
    colors: {
      'palette-primary': string;
      'palette-red': string;
      'palette-gray': string;
      'palette-lightGray': string;
      'palette-white': string;
      'palette-black': string;
      'text-primary': string;
      'text-secondary': string;
      'text-subtitle': string;
    };
  }
}
