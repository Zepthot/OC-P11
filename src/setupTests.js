import { cleanup } from "@testing-library/react";

afterEach(() => {
  cleanup(); // Nettoie le DOM entre les tests.
  jest.clearAllMocks(); // Réinitialise les mocks Jest.
  jest.useRealTimers(); // Réinitialise les timers si modifiés.
  window.history.pushState({}, "", "/"); // Réinitialise l'URL.
});
