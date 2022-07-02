import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { LibLayoutComponent } from "./layout.component";
import { LibLayoutModule } from "./layout.module";
import { RouterTestingModule } from "@angular/router/testing";

export default {
  title: "Lib/Layout",
  component: LibLayoutComponent,
  decorators: [
    moduleMetadata({
      imports: [
        LibLayoutModule,
        RouterTestingModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule
      ]
    })
  ]
} as Meta;

const Template: Story<LibLayoutComponent> = (args: LibLayoutComponent) => ({
  props: args
});

export const MAPS = Template.bind({});
MAPS.args = {
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