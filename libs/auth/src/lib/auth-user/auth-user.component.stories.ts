import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { AuthUserComponent } from './auth-user.component';

export default {
  title: 'AuthUserComponent',
  component: AuthUserComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<AuthUserComponent>;

const Template: Story<AuthUserComponent> = (args: AuthUserComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
