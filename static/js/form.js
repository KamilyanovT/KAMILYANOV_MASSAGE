async function fetchServices(masterId) {
      const url = `/get_services_by_master/${masterId}/`; 
      const response = await fetch(url);
      const data = await response.json();
      return data.services;
}
  
function updateServiceOptions(services) {
      const serviceSelect = document.getElementById("id_services");
  
      serviceSelect.innerHTML = "";
  
      services.forEach(function (service) {
          const option = document.createElement("option");
          option.value = service.id;
          option.text = service.name;
          serviceSelect.appendChild(option);
      });
}
  
function setupServiceSelectListener() {
      const masterSelect = document.getElementById("id_master");
      
      masterSelect.addEventListener("change", async function () {
          const masterId = masterSelect.value;
          const services = await fetchServices(masterId);
          updateServiceOptions(services);
      });
}
  
  document.addEventListener("DOMContentLoaded", function () {
      setupServiceSelectListener();
});
  