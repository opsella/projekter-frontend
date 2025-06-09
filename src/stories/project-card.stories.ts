import type { Meta, StoryObj } from "@storybook/angular";
import { ProjectCardComponent } from "../app/projects/project-card/project-card.component";

const meta: Meta<ProjectCardComponent> = {
  title     : "Projects/Project Card",
  component : ProjectCardComponent,
  tags      : ["autodocs"],
  argTypes  : {
    photo: {
      type: "string",
    },
    status: {
      type: "string"
    },
    alerts: {
      type: "number"
    }
  },
  args: {
    title  : "Hammond Estates",
    photo  : new URL("https://www.wjhl.com/wp-content/uploads/sites/98/2023/02/vlcsnap-2023-02-22-18h30m52s817.jpg?strip=1"),
    alerts : 0
  }
};

export default meta;
type Story = StoryObj<ProjectCardComponent>;

export const Default: Story = {
  args: {
    title : "Hammond Estates",
    photo : new URL("https://www.wjhl.com/wp-content/uploads/sites/98/2023/02/vlcsnap-2023-02-22-18h30m52s817.jpg?strip=1")
  }
}

export const WithAlerts: Story = {
  args: {
    title  : "Hammond Estates",
    photo  : new URL("https://www.wjhl.com/wp-content/uploads/sites/98/2023/02/vlcsnap-2023-02-22-18h30m52s817.jpg?strip=1"),
    alerts : 4
  }
}
