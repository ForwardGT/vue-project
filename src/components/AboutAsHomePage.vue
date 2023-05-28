<script setup></script>

<template>
  <div class="background-img-b">
    <div class="container-b">
      <div class="aboutAsHome ">
        ECOPOL Company means more than 25 years of work under the sign of high
        quality and continuous improvement. Implementation of complex projects,
        solution of challenging tasks, and continuous movement forward are a
        story of our Company success and development of the coating industry in
        Russia.
        <button @click="">For details</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background-img-b {
  width: 100%;
  height: 34vh;
  background-image: url(fabric.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: fixed;
}
.aboutAsHome {
  color: white;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  width: 35%;
  background-color: rgba(36, 20, 24, 0.5);
  border-radius: 10px;
  backdrop-filter: blur(1px);
  /* display: flex; */
  /* background-clip: padding-box; */
}
.container-b {
  display: flex;
  justify-content: space-between;
  margin-top: 1%;
  margin-left: 1%;
}
</style>
