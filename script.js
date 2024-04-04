dayjs.extend(dayjs_plugin_duration);

function activate() {
    let element=document.getElementById("mycountdown");
    const dateInput = document.querySelector(".enterdate input[type='text']");
    const dateString = dateInput.value;
  
    if (!dateString) {
      // Handle empty date input (optional)
      return;
    }
  
    const targetDate = dayjs(dateString);
    element.querySelector(".until_event").textContent = `Until ${targetDate.format('DD MM YYYY') }`;
  
    setInterval(() => {
      const now = dayjs();
      const duration = dayjs.duration(targetDate.diff(now));
  
      // for past days below line keeps it to zero and not make it negative
      // if(duration.asMilliseconds() <=0) return;
  
      element.querySelector(".until_numeric_seconds").textContent = duration.seconds().toString().padStart(2, "0");
      element.querySelector(".until_numeric_minutes").textContent = duration.minutes().toString().padStart(2, "0");
      element.querySelector(".until_numeric_hours").textContent = duration.hours().toString().padStart(2, "0");
      element.querySelector(".until_numeric_days").textContent = duration.days().toFixed(0).toString().padStart(2, "0");
      element.querySelector(".until_numeric_months").textContent = duration.months().toFixed(0).toString().padStart(2, "0");
    }, 500);
  }