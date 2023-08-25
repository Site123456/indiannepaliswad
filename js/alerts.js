setTimeout(() => {
  document.cookie = "testing=cookies_enabled_nouid; path=/";
  if(document.cookie.indexOf("testing=cookies_enabled_nouid") < 0)
  {
      sendNotification("error", "Veillez activer Cookies.");
  }
}, 1000);
$(document).ready(function(){
  $("#filternav").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#tofilternavbar li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
$(window).on( "load", function() {
  let theme = getCookie("usertheme");
  if (theme == "") {
    if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      body.classList.add("dark");
      modeText.title = "Mode sombre";
      document.querySelector("html").setAttribute("data-bs-theme", "dark");
      sendNotification("success", "Système : Mode sombre.");
      setCookie("usertheme", "dark", 30);
    } else {
      modeText.innerText = "Mode claire";
      modeText.title = "Mode claire";
      body.classList.remove("dark");
      document.querySelector("html").setAttribute("data-bs-theme", "light");
      sendNotification("success", "Système : Mode claire.");
      setCookie("usertheme", "light", 30);
    }
  }
  if (theme != "") {
    if(theme == "light") {
      if(window.matchMedia('(prefers-color-scheme: light)')) {
        modeText.innerText = "Mode claire";
        modeText.title = "Mode claire";
        body.classList.remove("dark");
        document.querySelector("html").setAttribute("data-bs-theme", "light");
        sendNotification("success", "Utilisateur : Mode claire.");
      }
    }
    if(theme == "dark") {
      if(window.matchMedia('(prefers-color-scheme: dark)')) {
        modeText.innerText = "Mode sombre";
        modeText.title = "Mode sombre";
        body.classList.add("dark");
        document.querySelector("html").setAttribute("data-bs-theme", "dark");
        sendNotification("success", "Utilisateur : Mode sombre.");
      }
    }
  }
});
function sendNotification(type, text) {
  let notificationBox = document.getElementById("notification-box");
  const alerts = {
    info: {
      icon: `fa-circle-check`,
      color: "blue-500 d-flex"
    },
    error: {
      icon: `fa-circle-xmark`,
      color: "red-500 d-flex"
    },
    warning: {
      icon: `fa-triangle-exclamation`,
      color: "yellow-500 d-flex"
    },
    success: {
      icon: `fa-circle-info`,
      color: "green-500 d-flex"
    }
  };
  let component = document.createElement("li");
  component.className = `toast ${alerts[type].color}`;
  component.innerHTML = `
  <div class="column">
    <i class="fa ${alerts[type].icon}"></i><div class="textclassalert">${text}</div>
  </div>`;
  notificationBox.appendChild(component);
  console.log("Notification : " + `${text}`);
  var a = "ok";
  setTimeout(() => {
    component.classList.remove("opacity-0");
    component.classList.add("opacity-1");
    component.classList.add("scalemore");
    component.onclick = function(){
      component.classList.remove("scalemore");
      component.classList.add("hide");
      a = "";
      setTimeout(() => {
        console.log("Cache terminé pour : " + `${text}`);
        notificationBox.removeChild(component);
      }, 1000);
    };
  }, 10);
  setTimeout(() => {
    component.classList.remove("scalemore");
    component.classList.remove("opacity-1");
    component.classList.add("opacity-0");
    component.classList.add("hide");
    component.innerHTML = "Suppression de cache...";
  }, 5200);
  setTimeout(() => {
    if(a == "ok") {
      console.log("Cache terminé pour : " + `${text}`);
      notificationBox.removeChild(component);
    }
  }, 6200);
}
console.log("INDIAN NEPALI SWAD, 2023.");
console.log("Restaurant INDIAN NEPALI SWAD : https://www.indian-nepaliswad.fr. \n Notification :");
$(function() {
  jQuery(document).ready(function() {
      sendNotification("info", "Finalisation d&apos;interface utilisateur...");
      const cookieBox = document.querySelector(".wrapper"),
      acceptBtn = cookieBox.querySelector("#acceptcookies");
      acceptBtn.onclick = ()=>{
        document.cookie = "Cookies=Allowed; max-age="+60*60*24*30;
        if(document.cookie){
          cookieBox.classList.add("hide");
        }else{
          sendNotification("error", "Ooups une erreur s'est produite durant le chargement du site.");
          setTimeout(() => {
            sendNotification("warning", "Actualisation du site en :");
            sendNotification("error", "3s");
            setTimeout(() => {
              sendNotification("error", "2s");
              setTimeout(() => {
                sendNotification("error", "1s");
                setTimeout(() => {
                  window.location.reload();
                }, 1000);
              }, 1000);
            }, 1000);
          }, 100);
        }
      }
      let checkCookie = document.cookie.indexOf("Cookies=Allowed");
      checkCookie != -1 ? cookieBox.classList.add("hide") : cookieBox.classList.remove("hide");
      setTimeout(function() { 
        $('.preloader').fadeOut('slow');
      }, 800);
  });
});
function deleteAllCookies() {
  const cookies = document.cookie.split(";");
  sendNotification("warning", "Supppression de vos Cookies...");
  for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
  sendNotification("warning", "Supppression de vos données...");
  sendNotification("warning", "Actualisation du page web en :");
  sendNotification("error", "3");
  setTimeout(() => {
    sendNotification("error", "2");
    setTimeout(() => {
      sendNotification("error", "1");
      setTimeout(() => {
        window.location.reload();
        errorcall();
      }, 1000);
    }, 1000);
  }, 1000);
  
  return false;
}
function errorcall() {
  sendNotification("error", "INDIAN NEPALI SWAD");
  sendNotification("error", "Refresh or language ERROR.");
  sendNotification("error", "Cette erreur peut bloquer les performances de votre appareil, veuillez actualiser.");
  sendNotification("error", "This error can crash your device performance plese refresh.");
  sendNotification("error", "Fr : Une erreur inattendue s'est produite. Veuillez, actualiser la page Web.");
  sendNotification("error", "En : An unexpected error occurred. Please, refresh the web page.");
  setInterval(() => {
    sendNotification("error", "INDIAN NEPALI SWAD");
    sendNotification("error", "Refresh or language ERROR.");
    sendNotification("error", "Cette erreur peut bloquer les performances de votre appareil, veuillez actualiser.");
    sendNotification("error", "This error can crash your device performance plese refresh.");
    sendNotification("error", "Fr : Une erreur inattendue s'est produite. Veuillez, actualiser la page Web.");
    sendNotification("error", "En : An unexpected error occurred. Please, refresh the web page.");
  }, 5000);
}
const disabledKeys = ["u", "U", "i", "I"];
const focusinputmain = [":", "/"];

document.addEventListener("contextmenu", e => {
    console.log("© INDIAN NEPALI SWAD, 2023.");
});

document.addEventListener("keydown", e => {
  if (e.ctrlKey && disabledKeys.includes(e.key) || e.key === "F12") {
    e.preventDefault();
    showAlert(e);
  }
  if (e.ctrlKey && focusinputmain.includes(e.key)) {
    $("#searchbar").focus();
    
  }
});
$( function() {
  $( "#searchbar" ).on( "focus", function() {
    sendNotification("info", "INFO : BETA Version.");
  });
});
const showAlert = e => {
  return sendNotification("error", "Certains touches sont désactivé.");
}
window.addEventListener('online', () => sendNotification("success", "La connection à été rétable."));
window.addEventListener('offline', () => sendNotification("error", "La connection à été perdue."));
window.addEventListener("load", () => {
  fetch(
    "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
    { method: "HEAD", mode: "no-cors", cache: "no-store" }
  )
  .then(res => sendNotification("success","Tout est prêt."))
  .catch(err => sendNotification("info","ADBlock à été détecté, si quelque chose ne se charge pas correctement veillez le désactiver."));
});