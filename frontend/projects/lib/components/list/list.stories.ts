import { Meta, moduleMetadata, StoryFn } from "@storybook/angular";
import { LibListComponent } from "./list.component";
import { LibListModule } from "./list.module";

export default {
  title: "Components/List",
  component: LibListComponent,
  decorators: [
    moduleMetadata({
      imports: [
        LibListModule
      ]
    })
  ],
  argTypes: {
    ngOnInit: {
      table: {
        disable: true,
      },
    },
    gameSelect: {
      table: {
        disable: true,
      },
    },
  }
} as Meta;

const Template: StoryFn<LibListComponent> = (args: LibListComponent) => ({
  props: args
});

export const List = Template.bind({});
List.args = {
  games: [
    {
      img: "../assets/bonbon-planet-earth.png",
      title: "MAPS",
      path: "/maps",
      playable: true
    },
    {
      img: "../assets/bonbon-blue-flag.png",
      title: "FLAGS",
      path: "/flags",
      playable: false
    },
    {
      img: "../assets/bonbon-planet-earth.png",
      title: "LANGUAGES",
      path: "/flags",
      playable: false
    },
    {
      img: "../assets/bonbon-planet-earth.png",
      title: "CITIES",
      path: "/flags",
      playable: false
    }
  ]
};