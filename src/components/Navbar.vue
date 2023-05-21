<script setup></script>

<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"
        ><img
          class="img-fluid"
          src="/logoFullSize.png"
          alt="logoEcopol"
          width="163"
          height="auto"
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0 mx-auto grid gap-lg-5">
          <li class="nav-item">
            <a class="nav-link" href="#">About us</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Production
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Autorefinish</a></li>
              <li><a class="dropdown-item" href="#">Industrial coatings</a></li>
              <li><a class="dropdown-item" href="#">Wood coatings</a></li>
              <li><a class="dropdown-item" href="#">Automotive paints</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">News</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Feedback</a>
          </li>
        </ul>
        <div class="d-flex float-end">
          <div class="contacts">
            <a href="https://vk.com/ecopol2014" target="_blank">
              <iconify class="ico-vk" icon="basil:vk-solid" />
            </a>
            <a href="https://www.youtube.com/channel/UCu_TwYjXgof86zbE4CzTSYg/feed" target="_blank">
              <iconify class="ico-youtube" icon="uil:youtube"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.navbar {
  background-color: var(--color2);
  box-shadow: 2px 2px 4px rgb(70, 70, 70);
}
.nav-link:hover {
  color: var(--color3);
}
.ico-vk {
  color: black;
  font-size: 2.5em;
  &:hover{color: blue;}
}
.ico-youtube {
  color: black;
  font-size: 2.5em;
  &:hover{color:red}
}
.contacts a {
  margin-left: 2px;
}
</style>
