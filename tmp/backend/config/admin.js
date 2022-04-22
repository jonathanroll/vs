module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6121bfab7e8410704bb7a87dedf1e9d7'),
  },
});
