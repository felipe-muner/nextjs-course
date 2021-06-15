// In Node.js
const Web3 = require("web3");

const url = "HTTP://127.0.0.1:7545";

const web3 = new Web3(url);

const address = "0x5C23BCc61c38E196f4d776dB8f5281026d14D096";
const pass = "95ededdbd6fe205f82a92e654b1b2c26476e3785c5bbb473b118f089672a471e";

(async function () {
  // const balance = await web3.eth.getBalance(address);
  // console.log(balance);
  // console.log(web3.utils.fromWei(balance))

  // const accounts = await web3.eth.getAccounts();
  // console.log(accounts);
  console.log(
    await web3.eth.getBalance("0x9112Bf2c2Fd021C311E23dbba7f7DBB96723119b")
  );
  console.log(
    await web3.eth.getBalance("0x5C23BCc61c38E196f4d776dB8f5281026d14D096")
  );

  // console.log(web3.eth)
  const amount = await web3.utils.toWei("7", "ether");
  // console.log(typeof amount)
  // console.log(amount)
  // await web3.eth.unlockAccount(address, pass)
  await web3.eth.sendTransaction({
    to: "0x9112Bf2c2Fd021C311E23dbba7f7DBB96723119b",
    from: "0x5C23BCc61c38E196f4d776dB8f5281026d14D096",
    value: amount,
  });

  console.log(
    await web3.eth.getBalance("0x9112Bf2c2Fd021C311E23dbba7f7DBB96723119b")
  );
  console.log(
    await web3.eth.getBalance("0x5C23BCc61c38E196f4d776dB8f5281026d14D096")
  );
})();

// web3.eth.getBalance(address, (err, bal) => {
//   const balance = bal;
//   console.log(balance)
//   console.log(web3.utils.fromWei(balance))
//   console.log(web3.utils.fromWei(balance, 'ether')) //same as empty param
//   console.log(web3.utils.fromWei(balance, 'gwei'))
// });

// const account = web3.eth.accounts.create()
// console.log(account)
