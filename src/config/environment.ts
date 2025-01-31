import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

interface Environment {
  NODE_ENV: string;
  PORT: number;
  API_URL: string;
  API_TIMEOUT: number;
  DB_CONFIG: {
    host: string;
    port: number;
    database: string;
    user: string;
    password: string;
  };
  TEST_CONFIG: {
    baseUrl: string;
    headless: boolean;
  };
  JWT_CONFIG: {
    secret: string;
    expiryTime: string;
  };
}

export const environment: Environment = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: parseInt(process.env.PORT || '3000', 10),
  API_URL: process.env.API_URL || 'http://localhost:3000',
  API_TIMEOUT: parseInt(process.env.API_TIMEOUT || '30000', 10),
  DB_CONFIG: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432', 10),
    database: process.env.DB_NAME || 'nopcommerce',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || '',
  },
  TEST_CONFIG: {
    baseUrl: process.env.TEST_BASE_URL || 'http://localhost:3000',
    headless: process.env.HEADLESS === 'true',
  },
  JWT_CONFIG: {
    secret: process.env.JWT_SECRET || 'default_development_secret',
    expiryTime: process.env.JWT_EXPIRY || '24h',
  },
};

// Validate required environment variables
const requiredEnvVars = ['NODE_ENV', 'DB_HOST', 'DB_USER', 'DB_PASSWORD', 'JWT_SECRET'];

for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    throw new Error(`Missing required environment variable: ${envVar}`);
  }
}
