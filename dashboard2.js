// Visitors Trend Chart
new Chart(document.getElementById("visitorsTrend"), {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Visitors (in millions)",
        data: [0.9, 1.1, 1.0, 1.3, 1.4, 1.7, 1.8, 1.6, 1.5, 1.4, 1.2, 1.3],
        borderWidth: 3,
        borderColor: "#1976d2",
        fill: true,
        backgroundColor: "rgba(25,118,210,0.2)",
      }
    ]
  },
  options: {
    responsive: true
  }
});

// Hotel Occupancy Donut
new Chart(document.getElementById("occupancyDonut"), {
  type: "doughnut",
  data: {
    labels: ["Luxury", "Boutique", "Homestays", "Budget"],
    datasets: [{
      data: [35, 25, 20, 20],
      backgroundColor: ["#d32f2f", "#0288d1", "#388e3c", "#fbc02d"]
    }]
  }
});

// Revenue Bar Chart
new Chart(document.getElementById("revenueBar"), {
  type: "bar",
  data: {
    labels: ["Rooms", "F&B", "Tours", "Events"],
    datasets: [{
      label: "Revenue ($M)",
      data: [2.1, 1.2, 0.7, 0.3],
      backgroundColor: ["#1976d2", "#d32f2f", "#388e3c", "#fbc02d"]
    }]
  },
  options: {
    plugins: { legend: { display: false } },
    responsive: true
  }
});

// Sentiment Radar
new Chart(document.getElementById("sentimentRadar"), {
  type: "radar",
  data: {
    labels: ["Cleanliness", "Food", "Service", "Location", "Value"],
    datasets: [{
      label: "Rating / 10",
      data: [8.85, 8.85, 9.85, 7.85, 8.95],
      borderColor: "#0288d1",
      backgroundColor: "rgba(2,136,209,0.3)"
    }]
  }
});
