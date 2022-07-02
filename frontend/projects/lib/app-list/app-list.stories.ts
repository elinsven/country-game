import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { LibAppListComponent } from "./app-list.component";
import { LibAppListModule } from "./app-list.module";

export default {
  title: "Lib/App List",
  component: LibAppListComponent,
  decorators: [
    moduleMetadata({
      imports: [
        LibAppListModule
      ]
    })
  ]
} as Meta;

const Template: Story<LibAppListComponent> = (args: LibAppListComponent) => ({
  props: args
});

export const Default = Template.bind({});
Default.args = {
  applications: [
    {
      img: "https://picsum.photos/200",
      title: "MAPS",
      path: "/maps",
      playable: true
    },
    {
      img: "https://picsum.photos/200",
      title: "FLAGS",
      path: "/flags",
      playable: false
    },
    {
      img: "https://picsum.photos/200",
      title: "LANGUAGES",
      path: "/flags",
      playable: false
    },
    {
      img: "https://picsum.photos/200",
      title: "CITIES",
      path: "/flags",
      playable: false
    }
  ]
};