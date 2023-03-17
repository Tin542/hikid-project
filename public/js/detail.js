const productImage = document.querySelectorAll(".product-images img"); //select all image thumbs
const productImageSlide = document.querySelector(".image-slider"); //select image slider element

let activeImageSlide = 0; // default slider image position

productImage.forEach((item, i) => {
  item.addEventListener("click", () => {
    // add click event to each image thumb
    productImage[activeImageSlide].classList.remove("active"); //removing active classfrom current image
    item.classList.add("active"); //add active class to current image or click image thumb

    // console.log(item.src);
    // console.log(i);

    productImageSlide.style.backgroundImage = `url('${item.src}')`; // setting up image slider's background image

    activeImageSlide = i; // updating the image slider variable to track current thumb
  });
});

function increaseValue() {
  var value = parseInt(document.getElementById("number").value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById("number").value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById("number").value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? (value = 1) : "";
  value--;
  document.getElementById("number").value = value;
}

const colorChosen = () => {
  var header = document.getElementById("color-container");
  var btns = header.getElementsByClassName("btn-color");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      if (current.length > 0) {
        current[2].className = current[2].className.replace(" active", "");
      }
      this.className += " active";
    });
  }
};
colorChosen();

function handleButtonClick() {
  window.location.href = "cart.html";
}
