module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '60510544ce2eaa7b66497b712ccd5641'),
  },
});
