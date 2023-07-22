setTimeout(() => {
  sendNotification("success", "Tout est prêt");
  document.cookie = "testing=cookies_enabled_nouid; path=/";
  if(document.cookie.indexOf("testing=cookies_enabled_nouid") < 0)
  {
      sendNotification("warning", "Les Cookies sont bloquées.");
  }
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    sendNotification("blacknotif", "Le mode Sombre est activé.");
  }
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    sendNotification("purplenotif", "Le mode Claire est activé.");
  }
}, 200);
function makeid(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-_';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}
function makeidnum(length) {
  let result1 = '';
  const characters1 = '0123456789';
  const charactersLength1 = characters1.length;
  let counter1 = 0;
  while (counter1 < length) {
    result1 += characters1.charAt(Math.floor(Math.random() * charactersLength1));
    counter1 += 1;
  }
  return result1;
}
function sendNotification(type, text) {
    let notificationBox = document.getElementById("notification-box");
    const alerts = {
      info: {
        icon: `<svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" width="20" height="20" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>`,
        color: "blue-500"
      },
      error: {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2" fill="none" width="20" height="20" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>`,
        color: "red-500"
      },
      warning: {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2" fill="none" width="20" height="20" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>`,
        color: "yellow-500"
      },
      success: {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2" fill="none" width="20" height="20" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>`,
        color: "green-500"
      },
      purplenotif: {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2" fill="none" width="20" height="20" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>`,
        color: "purple-500"
      },
      blacknotif: {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2" fill="none" width="20" height="20" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>`,
        color: "black-500"
      }
    };
    let component = document.createElement("div");
    component.className = `${alerts[type].color}`;
    component.innerHTML = `${alerts[type].icon}<br><p>${text}</p>`;
    notificationBox.appendChild(component);

    setTimeout(() => {
      component.classList.remove("right-0");
      component.classList.remove("opacity-0");
      component.classList.add("opacity-1");
    }, 10);
    setTimeout(() => {
      component.classList.remove("opacity-1");
      component.classList.add("opacity-0");
      component.classList.add("right-0");

    }, 5200);
    setTimeout(() => {
      component.innerHTML = "<br><br>Supression de cache...<br><br>";
    }, 6000);
    setTimeout(() => {
      notificationBox.removeChild(component);
    }, 6200);
  }
