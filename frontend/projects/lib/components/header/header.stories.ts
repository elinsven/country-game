import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { LibHeaderComponent } from "./header.component";
import { LibHeaderModule } from "./header.module";
import { RouterTestingModule } from "@angular/router/testing";

export default {
  title: "Components/Header",
  component: LibHeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [
        LibHeaderModule,
        RouterTestingModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule
      ]
    })
  ],
  argTypes: {
    ngOnInit: {
      table: {
        disable: true,
      },
    },
    pageChange: {
      table: {
        disable: true,
      },
    },
  }
} as Meta;

const Template: Story<LibHeaderComponent> = (args: LibHeaderComponent) => ({
  props: args
});

export const Header = Template.bind({});
Header.args = {
  menuItems: [
    {
      path: "/",
      icon: "help"
    },
    {
      path: "/",
      icon: "apps"
    },
    {
      path: "/",
      title: "MAPS"
    },
    {
      path: "/",
      icon: "leaderboard"
    },
    {
      path: "/",
      icon: "settings"
    }
  ]
};