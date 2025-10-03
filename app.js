// Fleet data (from your App.tsx)
const vehicles = [
  { plate: "NGX 4853", whereabouts: "Batangas City", history: [] },
  { plate: "NGX 4856", whereabouts: "Batangas City", history: [] },
  { plate: "NFZ 2848", whereabouts: "Batangas City", history: [] },
  { plate: "CBP 5511", whereabouts: "Batangas City", history: [] },
  { plate: "CBP 1336", whereabouts: "Batangas City", history: [] },
];

// Details mapping
const details = {
  "NGX 4853": { model: "Mitsubishi L300", yearBought: "2022", status: "Active" },
  "NGX 4856": { model: "Mitsubishi L300", yearBought: "2021", status: "Active" },
  "NFZ 2848": { model: "Isuzu Traviz", yearBought: "2023", status: "Under Maintenance" },
  "CBP 5511": { model: "Isuzu Elf Truck", yearBought: "2021", status: "Active" },
  "CBP 1336": { model: "Isuzu Elf Truck", yearBought: "2023", status: "Under Maintenance" }
};

const app = document.getElementById("app");

// Clock
function updateClock() {
  document.getElementById("clock").textContent = new Date().toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// Render vehicles
function renderVehicleList() {
  app.innerHTML = "";
  const grid = document.createElement("div");
  grid.style.display = "grid";
  grid.style.gridTemplateColumns = "repeat(auto-fill, minmax(200px, 1fr))";
  grid.style.gap = "16px";

  vehicles.forEach(v => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="https://www.mitsubishi-motors.com.ph/content/dam/mitsubishi-motors-ph/images/site-images/cars/l300/2020/L300-FB_1080_FL.png" alt="vehicle"/>
      <h2>${v.plate}</h2>
      <p>Whereabouts: ${v.whereabouts}</p>
    `;
    card.onclick = () => renderVehicleDetails(v);
    grid.appendChild(card);
  });

  app.appendChild(grid);
}

function renderVehicleDetails(vehicle) {
  app.innerHTML = `
    <button onclick="renderVehicleList()">← Back</button>
    <h1>${vehicle.plate}</h1>
    <p><strong>Model:</strong> ${details[vehicle.plate]?.model || "N/A"}</p>
    <p><strong>Year Bought:</strong> ${details[vehicle.plate]?.yearBought || "N/A"}</p>
    <p><strong>Status:</strong> ${details[vehicle.plate]?.status || "N/A"}</p>
    <p><strong>Whereabouts:</strong> ${vehicle.whereabouts}</p>
  `;
}

renderVehicleList();
