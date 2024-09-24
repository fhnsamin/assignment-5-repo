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
