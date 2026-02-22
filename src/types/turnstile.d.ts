export {};

declare global {
  interface Window {
    turnstile: {
      render: (container: HTMLElement, options: TurnstileOptions) => string;
      reset: (container: HTMLElement) => void;
    };
    handleTurnstileCallback?: (token: string) => void;
  }
}

export interface TurnstileOptions {
  sitekey: string;
  callback?: string | ((token: string) => void);
  'expired-callback'?: string | (() => void);
  'error-callback'?: string | (() => void);
  theme?: 'light' | 'dark';
  size?: 'normal' | 'compact' | 'invisible';
  tabindex?: number;
  'refresh-expired'?: 'auto' | 'manual';
  appearance?: 'always' | 'execute' | 'interaction-only';
}
