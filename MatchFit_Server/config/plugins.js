module.exports = ({ env }) => ({
    // Users & Permissions (users-permissions) plugin configuration
    'users-permissions': {
      // Authentication strategies configuration
      email: {
        enabled: true, // Enable the email authentication strategy
      },
      jwt: {
        secret: env('JWT_SECRET', 'my-secret-key'), // Secret key for signing JWT tokens
        expiresIn: '3h', // Expiration time for JWT tokens
      },
    },
  });
  