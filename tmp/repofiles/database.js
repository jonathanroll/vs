module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '194.163.46.9'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'u199641847_demodb'),
      user: env('DATABASE_USERNAME', 'u199641847_demodb'),
      password: env('DATABASE_PASSWORD', 'leptuNbovjyr6mixqY'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
