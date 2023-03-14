const createNav = () => {
  let nav = document.querySelector(".nav-bar");

  nav.innerHTML = `
    <nav class="navbar navbar-expand-sm navbar-dark bg-white fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.html"
            ><img src="image/logo.png" alt="Avatar Logo" style="width: 300px"
          /></a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
          <i class="bi bi-list" style="color:black"></i>
          </button>
          <div class="collapse navbar-collapse" id="mynavbar">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <div class="nav-link">
                  <div id="search-container" class="input-group flex-nowrap">
                    <span class="input-group-text" id="addon-wrapping"
                      ><i class="bi bi-search"></i
                    ></span>
                    <input
                      id="search-box"
                      aria-describedby="addon-wrapping"
                      class="form-control"
                      type="text"
                      placeholder="Tìm kiếm..."
                    />
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class="bi bi-cart2"></i>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><i class="bi bi-bell"></i></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><i class="bi bi-envelope"></i></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><i class="bi bi-chat"></i></a>
              </li>
              <li class="nav-item">
                <a class="navbar-brand" href="#">
                  <img
                    src="image/dog.png"
                    alt="Avatar Logo"
                    style="width: 40px"
                    class="rounded-pill"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
         `;
};

createNav();
