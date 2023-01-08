import { Meta, moduleMetadata, StoryFn } from "@storybook/angular";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { LibHeaderComponent } from "./header.component";
import { LibHeaderModule } from "./header.module";
import { RouterTestingModule } from "@angular/router/testing";
//import { sitePackDecorator } from "../../decorator";
import '../../test-styling.scss';

export default {
  title: "Components/Header",
  component: LibHeaderComponent,
  styleUrls: ["../../test-styling.scss"],
  decorators: [
    //sitePackDecorator,
    moduleMetadata({
      imports: [
        LibHeaderModule,
        RouterTestingModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule
      ]
    }),

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

const Template: StoryFn<LibHeaderComponent> = (args: LibHeaderComponent) => ({
  props: args,
  template: `
  <div style={{ padding: 10px;}}>
  <lib-header></lib-header>
  <div>
  `

});

export const Header = Template.bind({});
Header.parameters = {
  customLayout: true,
};
Header.args = {
  title: "MAPS",
  menuItems: [
    {
      path: "/leaderboard",
      title: "Leaderboard",
      icon: "leaderboard",
      ariaLabel: "To the 'Leaderboard' page"
    },
    {
      path: "/other-games",
      title: "Other games",
      icon: "apps",
      ariaLabel: "To the 'Other games' page"
    },
    {
      path: "/help",
      title: "Help",
      icon: "help",
      ariaLabel: "To the 'Help' page",
    },
    {
      path: "/settings",
      title: "Settings",
      icon: "settings",
      ariaLabel: "To the 'Settings' page"
    }
  ]
};

export const HeaderTwo = Template.bind({});
HeaderTwo.args = {
  title: "HELLO",
  menuItems: [
    {
      path: "/leaderboard",
      title: "Leaderboard",
      icon: "leaderboard",
      ariaLabel: "To the 'Leaderboard' page"
    },
    {
      path: "/other-games",
      title: "Other games",
      icon: "apps",
      ariaLabel: "To the 'Other games' page"
    },
    {
      path: "/help",
      title: "Help",
      icon: "help",
      ariaLabel: "To the 'Help' page",
    },
    {
      path: "/settings",
      title: "Settings",
      icon: "settings",
      ariaLabel: "To the 'Settings' page"
    }
  ]
};