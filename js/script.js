// Donation btn
document.getElementById("donation-btn").addEventListener("click", function () {
  document.getElementById("donation-btn").classList.add("bg-primary", "text-text-main");
  document.getElementById("donation-btn").classList.remove("bg-white", "border", "text-text-sub");
  document.getElementById("history-btn").classList.add("bg-white", "border", "text-text-sub");
  document.getElementById("history-btn").classList.remove("bg-primary", "text-text-main");
  document.getElementById("donation").classList.add("block");
  document.getElementById("donation").classList.remove("hidden");
  document.getElementById("history-list").classList.add("hidden");
  document.getElementById("history-list").classList.remove("block");
});

// History btn
document.getElementById("history-btn").addEventListener("click", function () {
  document.getElementById("history-btn").classList.add("bg-primary", "text-text-main");
  document.getElementById("history-btn").classList.remove("bg-white", "border", "text-text-sub");
  document.getElementById("donation-btn").classList.add("bg-white", "border", "text-text-sub");
  document.getElementById("donation-btn").classList.remove("bg-primary", "text-text-main");
  document.getElementById("history-list").classList.add("block");
  document.getElementById("history-list").classList.remove("hidden");
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

  // Clearing input field
  document.getElementById("noa-input").value = "";

  // For adding history
  const newHistoryCard = document.createElement("div");
  newHistoryCard.className = "mx-auto w-full space-y-3 rounded-2xl border-2 p-4 sm:p-8";

  // Adding to history
  newHistoryCard.innerHTML = `
  <h3 class="text-text-main text-xl font-bold">
  ${noaDonateAmount} Taka is Donated for Flood Relief at Noakhali, Bangladesh
  </h3>
  <p class="text-text-sub font-light">
  Date : ${new Date().toString()}
  </p>
  `;

  const historyList = document.getElementById("history-list");
  historyList.insertBefore(newHistoryCard, historyList.firstChild);
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

  // Clearing input field
  document.getElementById("feni-input").value = "";

  // For adding history
  const newHistoryCard = document.createElement("div");
  newHistoryCard.className = "mx-auto w-full space-y-3 rounded-2xl border-2 p-4 sm:p-8";

  // Adding to history
  newHistoryCard.innerHTML = `
  <h3 class="text-text-main text-xl font-bold">
  ${feniDonateAmount} Taka is Donated for Flood Relief at Feni, Bangladesh
  </h3>
  <p class="text-text-sub font-light">
  Date : ${new Date().toString()}
  </p>
  `;

  const historyList = document.getElementById("history-list");
  historyList.insertBefore(newHistoryCard, historyList.firstChild);
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

  // Clearing input field
  document.getElementById("quota-input").value = "";

  // For adding history
  const newHistoryCard = document.createElement("div");
  newHistoryCard.className = "mx-auto w-full space-y-3 rounded-2xl border-2 p-4 sm:p-8";

  // Adding to history
  newHistoryCard.innerHTML = `
  <h3 class="text-text-main text-xl font-bold">
  ${quotaDonateAmount} Taka is Donated for aid for injured in the quota 
  movement, Bangladesh
  </h3>
  <p class="text-text-sub font-light">
  Date : ${new Date().toString()}
  </p>
  `;

  const historyList = document.getElementById("history-list");
  historyList.insertBefore(newHistoryCard, historyList.firstChild);
});
