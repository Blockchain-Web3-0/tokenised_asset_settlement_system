const { expect } = require("chai");

describe("AssetToken", function() {
    let Token, token, owner, addr1, addr2;

    beforeEach(async function() {
        Token = await ethers.getContractFactory("AssetToken");
        [owner, addr1, addr2] = await ethers.getSigners();
        token = await Token.deploy(ethers.utils.parseUnits("1000000", 18));
    });

    it("Should deploy with correct initial supply", async function() {
        expect(await token.totalSupply()).to.equal(ethers.utils.parseUnits("1000000", 18));
    });

    it("Should transfer assets correctly", async function() {
        await token.transfer(addr1.address, ethers.utils.parseUnits("100", 18));
        expect(await token.balanceOf(addr1.address)).to.equal(ethers.utils.parseUnits("100", 18));
    });

    it("Should batch settle assets correctly", async function() {
        await token.transfer(addr1.address, ethers.utils.parseUnits("500", 18));
        await token.connect(owner).batchSettle([addr1.address], [addr2.address], [ethers.utils.parseUnits("100", 18)]);
        expect(await token.balanceOf(addr2.address)).to.equal(ethers.utils.parseUnits("100", 18));
    });
});