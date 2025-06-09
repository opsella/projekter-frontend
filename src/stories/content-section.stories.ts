import { ContentSectionComponent } from '../app/shared/content-section/content-section.component';
import { Meta, StoryObj } from '@storybook/angular';

const meta: Meta<ContentSectionComponent> = {
  title     : "Example/Content-Section",
  component : ContentSectionComponent,
  tags      : ["autodocs"],
  argTypes  : {
    title: {
      control : "text"
    },
    expanded: {
      control : "boolean"
    },
    expandable: {
      control : "boolean"
    }
  },
  args: {
    title      : "Project Title",
    expanded   : true,
    expandable : true,
  }
};

export default meta;
type Story = StoryObj<ContentSectionComponent>;

export const Default: Story = {
  args: {
    title      : "Project Title",
    expanded   : true,
    expandable : true
  }
};

export const LockedExpanded: Story = {
  args: {
    title      : "Project Title",
    expanded   : true,
    expandable : false,
  }
}
