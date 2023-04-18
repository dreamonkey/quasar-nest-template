import { ConfigType, registerAs } from '@nestjs/config';

// These are just examples
const APP_PROTOCOL = 'http';
const APP_HOST = 'localhost';
const SERVER_PORT = '3000';
const ENABLE_CORS = true;

export type RootConfiguration = ConfigType<typeof rootConfiguration>;

export const rootConfiguration = registerAs('root', () => ({
  port: parseInt(SERVER_PORT, 10),
  host: APP_HOST,
  enableCors: ENABLE_CORS,
  protocol: APP_PROTOCOL,
}));
