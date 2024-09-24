// Donation btn
document.getElementById("donation-btn").addEventListener("click", function () {
  document.getElementById("donation-btn").classList.add("bg-primary", "text-text-main");
  document.getElementById("donation-btn").classList.remove("bg-white", "border", "text-text-sub");
  document.getElementById("history-btn").classList.add("bg-white", "border", "text-text-sub");
  document.getElementById("history-btn").classList.remove("bg-primary", "text-text-main");
  document.getElementById("donation").classList.add("block");
  document.getElementById("donation").classList.remove("hidden");
  document.getElementById("history").classList.add("hidden");
  document.getElementById("history").classList.remove("block");
});

// History btn
document.getElementById("history-btn").addEventListener("click", function () {
  document.getElementById("history-btn").classList.add("bg-primary", "text-text-main");
  document.getElementById("history-btn").classList.remove("bg-white", "border", "text-text-sub");
  document.getElementById("donation-btn").classList.add("bg-white", "border", "text-text-sub");
  document.getElementById("donation-btn").classList.remove("bg-primary", "text-text-main");
  document.getElementById("history").classList.add("block");
  document.getElementById("history").classList.remove("hidden");
  document.getElementById("donation").classList.add("hidden");
  document.getElementById("donation").classList.remove("block");
});

let mainBalance = getBalanceById("money");

// Noakhali donate
document.getElementById("noa-btn").addEventListener("click", function () {
  const noaDonateAmount = getInputValue("noa-input");

  if (noaDonateAmount > mainBalance || isNaN(noaDonateAmount) || noaDonateAmount <= 0) {
    alert("Invalid amount. Please try again");
    return;
  }

  mainBalance -= noaDonateAmount;
  document.getElementById("money").innerText = mainBalance;
  let noaMoney = getBalanceById("noa-money");
  noaMoney += noaDonateAmount;
  document.getElementById("noa-money").innerText = noaMoney;
  my_modal_5.showModal();
});

// Feni donate
document.getElementById("feni-btn").addEventListener("click", function () {
  const feniDonateAmount = getInputValue("feni-input");

  if (feniDonateAmount > mainBalance || isNaN(feniDonateAmount) || feniDonateAmount <= 0) {
    alert("Invalid amount. Please try again");
    return;
  }

  mainBalance -= feniDonateAmount;
  document.getElementById("money").innerText = mainBalance;
  let feniMoney = getBalanceById("feni-money");
  feniMoney += feniDonateAmount;
  document.getElementById("feni-money").innerText = feniMoney;
  my_modal_5.showModal();
});

// Quota donate
document.getElementById("quota-btn").addEventListener("click", function () {
  const quotaDonateAmount = getInputValue("quota-input");

  if (quotaDonateAmount > mainBalance || isNaN(quotaDonateAmount) || quotaDonateAmount <= 0) {
    alert("Invalid amount. Please try again");
    return;
  }

  mainBalance -= quotaDonateAmount;
  document.getElementById("money").innerText = mainBalance;
  let quotaMoney = getBalanceById("quota-money");
  quotaMoney += quotaDonateAmount;
  document.getElementById("quota-money").innerText = quotaMoney;
  my_modal_5.showModal();
});
