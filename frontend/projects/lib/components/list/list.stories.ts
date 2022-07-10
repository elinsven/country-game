import { Meta, moduleMetadata, Story } from "@storybook/angular";
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

const Template: Story<LibListComponent> = (args: LibListComponent) => ({
  props: args
});

export const List = Template.bind({});
List.args = {
  games: [
    {
      img: "../assets/maps_game_icon.png",
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