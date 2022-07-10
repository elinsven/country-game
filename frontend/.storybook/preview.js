import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);

/**
 * Not working with Angular 13
 * import "!style-loader!css-loader!sass-loader!./light-theme.scss";
 * https://github.com/storybookjs/storybook/issues/16950
 */

//Workaround for adding global styles to Storybook
import GlobalStyles from '!sass-loader!./light-theme.scss';
const storybookStyles = document.createElement("style");
storybookStyles.innerHTML = GlobalStyles;
document.body.appendChild(storybookStyles);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*|.*Create|.*Select|.*Delete|.*Click" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  }
}