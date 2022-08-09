import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { AuthLoginComponent } from './auth-login.component';

export default {
  title: 'AuthLoginComponent',
  component: AuthLoginComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<AuthLoginComponent>;

const Template: Story<AuthLoginComponent> = (args: AuthLoginComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
