import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);

import { makeDecorator } from "@storybook/addons";
export const withCustomLayout = makeDecorator({
  name: 'withCustomLayout',
  parameterName: 'customLayout',
  skipIfNoParametersOrOptions: true,
  wrapper: (storyFn, context, { parameters }) => {
    let story = storyFn(context).template;
    story = `
      <style>
        :root {
          --accent: yellow;
        }
      </style>
      <script>
        console.log('custom script');
      </script>
      <div>
        ${ story }
      </div>
    `;
    // get a reference to the active story
   
    console.log(story)
    // modify the story's content as a string
    
    // return the modified story
    return storyFn(context);
  }
});
/* 
const withThemeProvider=(Story,context)=>{
  console.log(context.globals.theme);
  const story = context;
  // modify the story's content as a string
  const decoratedStory = `
    <style>
      .custom-wrapper {
        border: 2px solid red;
      }
    </style>
    <script>
      console.log('custom script');
    </script>
    <div class="custom-wrapper">
      ${ story }
    </div>
  `;
  // return the modified story
  return decoratedStory;
}
export const decorators = [withCustomLayout];

export const globalTypes = {
  theme: {
    name: "Themes",
    description: "Toogle themes",
    toolbar: {
      items: ["hej", "hj"]
    }
  }
} */

export const decorators = [withCustomLayout];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*|.*Create|.*Select|.*Delete|.*Click|.*Toggle" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  }
}