module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '150447c9e3d255a889b8453bf15470b2'),
  },
});
