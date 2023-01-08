import { Meta, StoryFn, moduleMetadata } from "@storybook/angular";
import { LibSettingsComponent } from "./settings.component";
import { LibSettingsModule } from "./settings.module";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";

export default {
  title: "Components/Settings",
  component: LibSettingsComponent,
  decorators: [
    moduleMetadata({
      imports: [
        LibSettingsModule,
        MatSlideToggleModule
      ]
    })
  ],
  argTypes: {
    ngOnInit: {
      table: {
        disable: true,
      },
    },
  }
} as Meta;

const Template: StoryFn<LibSettingsComponent> = (args: LibSettingsComponent) => ({
  props: args
});

export const Settings = Template.bind({});
Settings.args = {

};