const hre = require("hardhat");

async function main() {
  console.log("🔨 Deploying MalanaToken...");

  const initialSupply = 1000000; // 1 juta token
  const MalanaToken = await hre.ethers.getContractFactory("MalanaToken");
  const malana = await MalanaToken.deploy(initialSupply);

  await malana.deployed();

  console.log("✅ MalanaToken deployed successfully!");
  console.log("📜 Contract address:", malana.address);
}

main().catch((error) => {
  console.error("❌ Error during deployment:", error);
  process.exitCode = 1;
});
