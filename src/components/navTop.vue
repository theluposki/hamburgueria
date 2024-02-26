<script setup>
import { RouterLink } from "vue-router";
import { ref } from 'vue';

const editableContent = ref('BUSCAR');

const clearText = () => {
  const editableSpan = document.querySelector("[contenteditable='true']");
  if (editableContent.value === 'BUSCAR') {
    editableContent.value = '';
    editableSpan.innerText = '';
  }
};

const resetText = () => {
  const editableSpan = document.querySelector("[contenteditable='true']");
  if (!editableContent.value) {
    editableContent.value = 'BUSCAR';
    editableSpan.innerText = 'BUSCAR';
  }
};

const updateContent = () => {
  const editableSpan = document.querySelector("[contenteditable='true']");
  editableContent.value = editableSpan.innerText;
};
</script>
<template>
  <nav class="navTop">
    
    <RouterLink to="/" class="logo">
      <img src="../assets/logo.png" alt="logo">
    </RouterLink>
    

    <div class="right">
      <div class="table_identifier">
        <span class="text">MESA 5</span>
      </div>

      <div class="searchProducts">
        <i class="ri-search-2-line"></i>
        <span
        ref="editableSpan"
      contenteditable="true"
      @focus="clearText"
      @blur="resetText"
      @input="updateContent"
      @paste="handlePaste"
    >BUSCAR</span>
      </div>

      <div class="actions">
        <RouterLink to="/callWaiter" class="nav-link" exact-active-class="active">
          <i class="ri-notification-3-line"></i>
          <span>CHAMAR GARÇOM</span>
        </RouterLink>
        <RouterLink to="/myAccount" class="nav-link" exact-active-class="active">
          <i class="ri-wallet-3-line"></i>
          <span>MINHA CONTA</span>
        </RouterLink>
        <RouterLink to="/cart" class="nav-link" exact-active-class="active">
          <i class="ri-shopping-cart-line"></i>
          <span>CARRINHO</span>
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navTop {
  background-color: var(--dark2);
  min-height: var(--minMax_height-navTop);
  max-height: var(--minMax_height-navTop);

  display: flex;
  justify-content: space-between;

  & .logo {
    min-width: var(--minMax_widthLogo);
    max-width: var(--minMax_widthLogo);
    
    display: flex;
    align-items: center;
    justify-content: center;
    --widthHeightImg: 130px;

    & img {
      width: var(--widthHeightImg);
      height: var(--widthHeightImg);
    }
  }

  & .right {
    flex: 1;
    display: flex;
    justify-content: flex-end;

    background-color: transparent;
  }
}

.table_identifier {
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  cursor: pointer;
  & .text {
      background-color: var(--dark1);
      padding: 5px;
      border-radius: 3px;
      font-size: 12px;
      font-weight: bold;

      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 60px;
  }
}

.searchProducts {
  min-width: var(--width_searchProducts);
  max-width: var(--width_searchProducts);

  background-color: transparent;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  padding: 0 12px;
  font-size: 12px;
  cursor: pointer;

  & span {
    --minMaxWidthSpanSearch: 60px;
    --minMaxHeightSpanSearch: 20px;
    
    min-width: var(--minMaxWidthSpanSearch);
    max-width: var(--minMaxWidthSpanSearch);
    min-height: var(--minMaxHeightSpanSearch);
    max-height: var(--minMaxHeightSpanSearch);
    font-size: 12px;

    display: flex;
    align-items: center;
  }
  & span:focus {
    cursor: text;
  }
}

.actions {
  display: flex;
  gap: 2px;
  background-color: var(--dark3);

  & .nav-link {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--yellow);
    text-decoration: none;
    color: var(--white);
    gap: 12px;
    
    padding: 12px;
    cursor: pointer;
    
    & i {
      font-size: 22px;
    }
    
    & span {
      font-size: 12px;
    }
  }

  & .nav-link:hover {
    transition: color ease .4s;
    color: var(--dark1);
    font-weight: bold;
  }

  & .nav-link:active {
    scale: .98;
  }

  & .active {
    background-color: var(--tomato);
  }
}

@media only screen and (max-width: 618px) {

.actions {
  & .nav-link {
    & span {
      display: none;
    }
  }
}
}
</style>