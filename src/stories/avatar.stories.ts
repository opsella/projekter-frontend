import type { Meta, StoryObj } from '@storybook/angular';
import { AvatarComponent } from '../app/shared/avatar/avatar.component';

const meta: Meta<AvatarComponent> = {
  title     : "Shared/Avatar",
  component : AvatarComponent,
  tags      : ["autodocs"],
  argTypes  : {
    photo: {
      type: "string"
    }
  }
};

export default meta;
type Story = StoryObj<AvatarComponent>;

export const Default: Story = {
  args: {
    photo: ""
  }
}

export const WithPhoto: Story = {
  args: {
    photo: "https://s.gravatar.com/avatar/f85cb79695d36c465a0fc2cdaa7c8c09?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fka.png"
  }
}
