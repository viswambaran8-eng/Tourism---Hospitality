// Generate sample data
const days = Array.from({ length: 30 }, (_, i) => i + 1);
const visitors = days.map(d => Math.round(30000 + Math.sin(d / 3) * 8000 + Math.random() * 5000));

document.getElementById("visitorsTotal").textContent = visitors.reduce((a, b) => a + b, 0).toLocaleString();
/* Visitors Line Chart */
const visitorsCtx = document.getElementById("visitorsLine");
new Chart(visitorsCtx, {
  type: "line",
  data: {
    labels: days.map(d => "Day " + d),
    datasets: [{ label: "Daily Visitors", data: visitors, fill: true, tension: 0.3 }],
  },
  options: { plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } },
});
/* Occupancy Donut */
const occCtx = document.getElementById("occupancyDonut");
new Chart(occCtx, {
  type: "doughnut",
  data: { labels: ["Occupied", "Available"], datasets: [{ data: [78, 22] }] },
  options: { plugins: { legend: { position: "bottom" } } },
});
/* Revenue Bar */
const revCtx = document.getElementById("revenueBar");
new Chart(revCtx, {
  type: "bar",
  data: {
    labels: ["Rooms", "F&B", "Tours", "Events"],
    datasets: [{ label: "Revenue ($k)", data: [2670, 1075, 430, 125], barPercentage: 0.6 }],
  },
  options: { scales: { y: { beginAtZero: true } } },
});
/* Radar Chart */
const radCtx = document.getElementById("sentimentRadar");
new Chart(radCtx, {
  type: "radar",
  data: {
    labels: ["Cleanliness", "Service", "Value", "Local Experience", "Food"],
    datasets: [{ label: "Avg Score", data: [4.7, 4.6, 4.2, 4.6, 4.5], fill: true }],
  },
  options: { scales: { r: { min: 0, max: 5, ticks: { stepSize: 1 } } } },
});
