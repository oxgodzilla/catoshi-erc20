const { expect } = require("chai");

describe("CATS", function() {
  it("Should return the new greeting once it's changed", async function() {
    const CATS = await ethers.getContractFactory("Catoshi");
    const cts = await CATS.deploy("Hello, world!");

    await cts.deployed();
    // expect(await bclnc.greet()).to.equal("Hello, world!");

    // await bclnc.setGreeting("Hola, mundo!");
    // expect(await bclnc.greet()).to.equal("Hola, mundo!");
  });
});
