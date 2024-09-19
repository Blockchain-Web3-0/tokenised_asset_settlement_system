# Tokenized Asset Settlement System (TASS)

## Overview
This project represents a blockchain-based settlement system using ERC-20 tokens for tokenized assets. It includes batch settlement and clearance, and incorporates optimizations for gas fees and security.

### Key Features
- ERC-20 token contract with batch settlement functionality
- Secure role-based management for asset issuance
- Batch processing of asset transfers
- Optimized for gas efficiency

### Technology Stack
- Solidity
- Hardhat (Testing & Deployment)
- Web3.js (Frontend Interaction)
- OpenZeppelin (Security)
- Slither & MythX (Security Auditing)

### How to Run
1. Install dependencies:
    ```bash
    npm install
    ```

2. Compile contracts:
    ```bash
    npx hardhat compile
    ```

3. Run tests:
    ```bash
    npx hardhat test
    ```

4. Deploy on Rinkeby:
    ```bash
    npx hardhat run scripts/deploy.js --network rinkeby
    ```

5. Run frontend:
   Simply open `index.html` in your browser.
