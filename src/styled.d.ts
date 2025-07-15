import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primaryBackground: string;
            secondaryBackground: string;
            textBackground: string;
            primaryTextColor: string;
            secondaryTextColor: string;
            mainScreenBgc: string;
            switchBgc: string;
            switchBgcHover: string;
        };
    }
}
