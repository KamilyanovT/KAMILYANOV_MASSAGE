document.addEventListener("DOMContentLoaded", function() {
      // Находим элементы формы
      const masterSelect = document.querySelector('select[name="master"]');
      const serviceSelect = document.querySelector('select[name="services"]');
  
      if (masterSelect && serviceSelect) {
          masterSelect.addEventListener("change", async function() {
              try {
                  const masterId = this.value;
                  const response = await fetch(`/get_services_by_master/${masterId}/`);
                  const data = await response.json();
                  
                  // Очищаем текущие опции
                  serviceSelect.innerHTML = '';
                  
                  // Добавляем новые опции
                  data.services.forEach(service => {
                      const option = document.createElement('option');
                      option.value = service.id;
                      option.textContent = service.name;
                      serviceSelect.appendChild(option);
                  });
              } catch (error) {
                  console.log('Ошибка при загрузке услуг:', error);
              }
          });
      }
  });