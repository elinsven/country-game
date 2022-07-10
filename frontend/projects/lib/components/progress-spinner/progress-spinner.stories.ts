import { Meta, Story, moduleMetadata } from "@storybook/angular";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { LibProgressSpinnerComponent } from "./progress-spinner.component";
import { LibProgressSpinnerModule } from "./progress-spinner.module";

export default {
  title: "Components/ProgressSpinner",
  component: LibProgressSpinnerComponent,
  decorators: [
    moduleMetadata({
      imports: [
        LibProgressSpinnerModule,
        MatProgressSpinnerModule
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

const Template: Story<LibProgressSpinnerComponent> = (args: LibProgressSpinnerComponent) => ({
  props: args
});

export const ProgressSpinner = Template.bind({});
ProgressSpinner.args = {
  isLoading: true,
  loadingText: "LOADING",
  spinnerColor: "primary"
};