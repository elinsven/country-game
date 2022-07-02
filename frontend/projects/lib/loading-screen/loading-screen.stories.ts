import { Meta, Story, moduleMetadata } from "@storybook/angular";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { LibLoadingScreenComponent } from "./loading-screen.component";
import { LibLoadingScreenModule } from "./loading-screen.module";

export default {
  title: "Lib/Loading Screen",
  component: LibLoadingScreenComponent,
  decorators: [
    moduleMetadata({
      imports: [
        LibLoadingScreenModule,
        MatProgressSpinnerModule
      ]
    })
  ]
} as Meta;

const Template: Story<LibLoadingScreenComponent> = (args: LibLoadingScreenComponent) => ({
  props: args
});

export const Primary = Template.bind({});
Primary.args = {
  isLoading: true,
  loadingText: "LOADING",
  spinnerColor: "primary"
};

export const Accent = Template.bind({});
Accent.args = {
  ...Primary.args,
  spinnerColor: "accent"
};