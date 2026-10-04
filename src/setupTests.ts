// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/vitest';

// The installed observer test utilities expose their mocks through the Jest API.
import { vi } from 'vitest';
Object.assign(globalThis, {
  jest: {
    fn: (implementation?: (...args: unknown[]) => unknown) =>
      vi.fn(function (...args: unknown[]) {
        return implementation?.(...args);
      }),
  },
});
