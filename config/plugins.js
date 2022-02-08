module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'vanquynh6894@gmail.com',
        defaultReplyTo: 'vanquynh6894@gmail.com',
        testAddress: 'vanquynh6894@gmail.com',
      },
    },
  },
  // ...
});
