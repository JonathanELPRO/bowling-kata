import Game from "./bowlingKata.js";

describe("bowlingKata", () => {
  it("Debería crearse la clase juego pero vacía", () => {
    // Crear una instancia de la clase Game
    const myGame = new Game();

    // Verificar que la instancia está definida
    expect(myGame).toBeDefined();
  });
});