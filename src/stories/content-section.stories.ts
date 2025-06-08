import { ContentSectionComponent } from '../app/shared/content-section/content-section.component';
import { Meta, StoryObj } from '@storybook/angular';

const meta: Meta<ContentSectionComponent> = {
  title     : "Example/Content-Section",
  component : ContentSectionComponent,
  tags      : ["autodocs"],
  argTypes  : {
    title: {
      name    : "Title",
      control : "text"
    },
    expanded: {
      name    : "Is Expanded",
      control : "boolean"
    }
  },
  args: {
    title    : "Project Title",
    expanded : true
  }
};

export default meta;
type Story = StoryObj<ContentSectionComponent>;

export const Default: Story = {
  args: {
    title    : "Project Title",
    expanded : true
  }
};
