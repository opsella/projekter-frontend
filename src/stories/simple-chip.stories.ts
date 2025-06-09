import type { Meta, StoryObj } from "@storybook/angular";
import { SimpleChipComponent } from "../app/shared/simple-chip/simple-chip.component";

const meta: Meta<SimpleChipComponent> = {
  title     : "Shared/Simple Chip",
  component : SimpleChipComponent,
  tags      : ["autodocs"],
  argTypes  : {
    content: {
      type: "string"
    }
  },
  args: {
    content: "Example"
  }
};

export default meta;
type Story = StoryObj<SimpleChipComponent>;

export const Default: Story = {
  args: {
    content: "Example"
  },
  render: (args: { content: string }) => {
    return {
      template: `<app-simple-chip>${args.content}</app-simple-chip>`
    };
  },
}
