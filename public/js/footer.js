const createFooter = () => {
  let nav = document.querySelector(".footer");

  nav.innerHTML = `
    <div class="container-fluid">
    <div class="row g-2 align-items-start">
      <div id="first-column" class="col-sm-4 align-self-center">
        <img class="logo" src="image/logo.png" alt="logo" />
        <div class="footer-category">
          <p>77/50 Tân Lập 2, Phường Hiệp Phú, Q9</p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              fill="currentColor"
              class="bi bi-envelope"
              viewBox="0 0 16 16"
            >
              <path
                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"
              />
            </svg>
            hikids.hcm@hk.edu.vn
          </p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              fill="currentColor"
              class="bi bi-headset"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z"
              />
            </svg>
            (028) 7300 5588
          </p>
          <a href="#"><i style="font-size: 27px;" class="bi bi-facebook"></i></a>
          <a href="#"><i style="font-size: 27px;" class="bi bi-instagram"></i></a>
        </div>
      </div>
      <div id="second-column" class="col-sm-3 align-self-center">
        <div>
          <ul>
            <li style="font-weight: 800">Menu</li>
            <li><a href="index.html">Trang chủ</a></li>
            <li><a href="program.html">Chương trình đào tạo</a></li>
            <li><a href="#">Về chúng tôi</a></li>
            <li><a href="#">Tình trạng sức khỏe</a></li>
            <li><a href="#">Liên hệ</a></li>
          </ul>
        </div>
      </div>

      <div id="third-column" class="col-sm-4 align-self-center">
        <p style="font-weight: 800">Sản phẩm</p>
        <div class="footer-items">
          <img src="image/footer1.png" />
          <img src="image/footer2.png" />
          <img src="image/footer3.png" />
          <img src="image/footer4.png" />
        </div>
      </div>
    </div>
  </div>
           `;
};

createFooter();
