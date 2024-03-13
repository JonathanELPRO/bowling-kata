import Game from "./bowlingKata.js";

describe("bowlingKata", () => {
  it("Debería crearse la clase juego pero vacía", () => {
    const myGame = new Game();
    expect(myGame).toBeDefined();
  });
  it("Debería tirar 20 veces el jugador derribando cero pinos en cada tiro obteniendo un score de 0", () => {
    const g = new Game();
    for (let i=0;i<20;i++)
    {
      g.roll(0);
    }
    expect(g.score()).toEqual(0);
  });
  it("Debería tirar 20 veces el jugador derribando un pino en cada tiro obteniendo un score de 20", () => {
    const g = new Game();
    for (let i=0;i<20;i++)
    {
      g.roll(1);
    }
    expect(g.score()).toEqual(20);
  });
});