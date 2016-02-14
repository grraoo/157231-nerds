var form = document.querySelector(".contacts .btn");
      var popup = document.querySelector(".write-us");
      var close = popup.querySelector(".close");
      var login = popup.querySelector("[name=login]");
      var popupBg = document.querySelector(".popup-bg")


      form.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("popup-show");
        popup.classList.add("form-show");
        popupBg.classList.toggle("popup-show");
        popupBg.classList.add("bg-show");
        login.focus();
      });

      close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.toggle("popup-show");
        popupBg.classList.toggle("popup-show");
      });

      popupBg.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.toggle("popup-show");
        popupBg.classList.toggle("popup-show");
      });

      window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (popup.classList.contains("popup-show")) {
            popup.classList.remove("popup-show");
            popupBg.classList.remove("popup-show");
            popup.classList.remove("modal-error");
          }
        }
      });