
<!-- ========================= -->
<!-- common.js -->
<!-- ========================= -->

const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
<script>

const menuToggle = document.getElementById("menu-toggle");

const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {

  navbar.classList.toggle("active");

});

</script>
