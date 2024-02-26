<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="navLeft">
    <div class="actions">
      <RouterLink to="/" class="nav-link" active-class="active">
        <img src="../assets/star.png" alt="star" />
        <span>DESTAQUES</span>
      </RouterLink>
      <RouterLink to="/burgers" class="nav-link" active-class="active">
        <img src="../assets/hamburguer.png" alt="star" />
        <span>HAMBURGER</span>
      </RouterLink>
      <RouterLink to="/portions" class="nav-link" active-class="active">
        <img src="../assets/porções.png" alt="star" />
        <span>PORÇÕES</span>
      </RouterLink>
      <RouterLink to="/pizzas" class="nav-link" active-class="active">
        <img src="../assets/pizza.png" alt="star" />
        <span>PIZZA</span>
      </RouterLink>
      <RouterLink to="/softDrinks" class="nav-link" active-class="active">
        <img src="../assets/refrigerante.png" alt="star" />
        <span>REFRIGERANTE</span>
      </RouterLink>
      <RouterLink to="/drinks" class="nav-link" active-class="active">
        <img src="../assets/cerveja.png" alt="star" />
        <span>ALCOÓLICAS</span>
      </RouterLink>
    </div>

    <div class="assignment">
      <span>by Luposki</span>
    </div>
  </nav>
</template>

<style scoped>
.navLeft {
  min-width: var(--minMax_widthNavLeft);
  max-width: var(--minMax_widthNavLeft);
  min-height: var(--minMax_heightNavLeft);
  max-height: var(--minMax_heightNavLeft);

  overflow: hidden;
  background-color: var(--dark2);

  display: flex;
  flex-direction: column;
  --minMaxHeightAssignment: 20px;
  & .actions {
    min-height: calc(
      var(--minMax_heightNavLeft) - var(--minMaxHeightAssignment)
    );
    max-height: calc(
      var(--minMax_heightNavLeft) - var(--minMaxHeightAssignment)
    );
    overflow-x: hidden;
    overflow-y: auto;

    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 2px;
    
    --minMaxWidthHeightImgNavLink: 50px;
    --minMaxWidthHeightNavLink: var(--minMax_widthNavLeft);

    & .nav-link {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      min-width: var(--minMaxWidthHeightNavLink);
      max-width: var(--minMaxWidthHeightNavLink);
      min-height: var(--minMaxWidthHeightNavLink);
      max-height: var(--minMaxWidthHeightNavLink);
      overflow: hidden;

      background-color: var(--dark2);
      text-decoration: none;
      color: var(--white);
      gap: 12px;

      padding: 12px;
      cursor: pointer;

      & img {
        min-width: var(--minMaxWidthHeightImgNavLink);
        max-width: var(--minMaxWidthHeightImgNavLink);
        min-height: var(--minMaxWidthHeightImgNavLink);
        max-height: var(--minMaxWidthHeightImgNavLink);

        object-fit: contain;
      }

      & span {
        font-size: 12px;
      }
    }
    & .active {
      background-color: var(--tomato);
    }

    & .nav-link:hover {
      transition: color ease 0.4s;
      background-color: var(--yellow);
      color: var(--dark1);
      font-weight: bold;
    }

    & .nav-link:active {
      scale: 0.98;
    }
  }

  & .assignment {
    min-height: var(--minMaxHeightAssignment);
    max-height: var(--minMaxHeightAssignment);

    border-top: solid 1px var(--dark1);

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
  }
}

@media only screen and (max-width: 618px) {
  .navLeft {
    min-width: var(--minMax_widthNavLeftMobile);
    max-width: var(--minMax_widthNavLeftMobile);
    & .actions {
      & .nav-link {
        min-width: var(--minMaxWidthHeightNavLinkMobile);
        max-width: var(--minMaxWidthHeightNavLinkMobile);
        min-height: var(--minMaxWidthHeightNavLinkMobile);
        max-height: var(--minMaxWidthHeightNavLinkMobile);
        gap: 2px;
        & img {
          min-width: var(--minMaxWidthHeightImgNavLinkMobile);
          max-width: var(--minMaxWidthHeightImgNavLinkMobile);
          min-height: var(--minMaxWidthHeightImgNavLinkMobile);
          max-height: var(--minMaxWidthHeightImgNavLinkMobile);
        }

        & span {
          font-size: 7px;
        }
      }
    }
    & .assignment {
      font-size: 8px;
    }
  }

}
</style>
