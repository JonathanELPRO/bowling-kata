import Game from "./bowlingKata.js";

describe("bowlingKata", () => {
  it("Debería crearse la clase juego pero vacía", () => {
    const myGame = new Game();
    expect(myGame).toBeDefined();
  });
  const g = new Game();
  it("Debería tirar 20 veces el jugador derribando cero pinos en cada tiro obteniendo un score de 0", () => {
    let n=20
    let pins=0
    for (let i=0;i<n;i++)
    {
      g.roll(pins);
    }
    expect(g.score()).toEqual(0);
  });
  it("Debería tirar 20 veces el jugador derribando un pino en cada tiro obteniendo un score de 20", () => {
    
    for (let i=0;i<20;i++)
    {
      g.roll(1);
    }
    expect(g.score()).toEqual(20);
  });
});