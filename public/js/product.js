const activeLink = () => {
    var header = document.getElementById("product-menu");
    var btns = header.getElementsByClassName("product-link");
    console.log('a', btns);
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        console.log('btn', current);
        if (current.length > 0) {
          current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
      });
    }
  };
  activeLink();