import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    :root {
        /* Colours */
        /* Each brand colour will have four variants. The darkest of which gets the variable name, and the lighter variants will go from darkest (22), to lightest (44). This is not based on any naming convention, it just seems easy to follow, and feels cooler than (1, 2, 3), or (light, lighter, lightest), etc... */

        --green: #80bc00;
        --green-22: #9bca37;
        --green-33: #b6d86c;
        --green-44: #cee59c;

        --dark-grey: #383838;
        --dark-grey-22: #59585b;
        --dark-grey-33: #717073;
        --dark-grey-44: #7b7b7d;

        --grey: #96999e;
        --grey-22: #bbbdc0;
        --grey-33: #d5d6d8;
        --grey-44: #eaebec;

        --red: #FF4949;
        --black: #000;
        --yellow: #ffc600;
        --white: #fff;
    }

    .gatsby-image-wrapper img[src*=base64\\,] {
        image-rendering: -moz-crisp-edges;
        image-rendering: pixelated;
    }
`

export default GlobalStyles
