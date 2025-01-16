import '../src/index.css';

export const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <>
        <div>
          <Story />
        </div>
      </>
    ),
  ],
};
