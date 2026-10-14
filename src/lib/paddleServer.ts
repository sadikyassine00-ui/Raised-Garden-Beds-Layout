import { Environment, LogLevel, Paddle } from '@paddle/paddle-node-sdk';

/**
 * Server-side Paddle SDK client singleton
 */
let paddleServerInstance: Paddle | null = null;

export function getPaddleServerInstance(): Paddle | null {
  if (paddleServerInstance) {
    return paddleServerInstance;
  }

  const apiKey =
    process.env.PADDLE_API_KEY ||
    process.env.PADDLE_SANDBOX_API_KEY ||
    process.env.PADDLE_SECRET_KEY;

  if (!apiKey) {
    return null;
  }

  const isProduction = process.env.NEXT_PUBLIC_PADDLE_ENV === 'production';

  paddleServerInstance = new Paddle(apiKey, {
    environment: isProduction ? Environment.production : Environment.sandbox,
    logLevel: LogLevel.error,
  });

  return paddleServerInstance;
}
