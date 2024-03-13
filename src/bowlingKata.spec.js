import Game from "./bowlingKata.js";

describe("bowlingKata", () => {
  it("Debería crearse la clase juego pero vacía", () => {
    const myGame = new Game();
    expect(myGame).toBeDefined();
  });
  it("Debería crearse la clase juego pero vacía", () => {
    const g = new Game();
    for (let i=0;i<20;i++)
    {
      g.roll(0);
    }
    expect(g.score()).toEqual(0);
  });
});