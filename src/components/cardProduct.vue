<script setup>
defineProps(['image'])

</script>

<template>
  <div class="card-product">
    <span class="name">Big Burguer</span>
    <img :src="image" alt="imagem 3">
    <div class="details">
      <span class="price">
        R$ 30,00
      </span>
      <span class="description">
        Pão de brioche, hamburger 200g, creme de gongonzola, queijo prato, tomate, maionese do reino
      </span>
      <button class="btnAdd">
        adicionar ao carrinho
        <i class="ri-add-box-line"></i>
      </button>
    </div>
  </div>
</template>

<style scoped>
.card-product {
  position: relative;
  --minWidthCardProduct: 100%;
  --minHeightCardProduct: 300px;

  --minWidthCardProduct: 100%;
  --minHeightCardProductsDetailsMobile: 160px;
  background-color: aliceblue;
  overflow: hidden;


  min-width: var(--minWidthCardProduct);
  max-width: var(--minWidthCardProduct);
  min-height: var(--minHeightCardProduct);
  max-height: var(--minHeightCardProduct);

  display: flex;

  & .name {
    position: absolute;
    top: 6px;
    left: 0;
    z-index: 2;

    display: flex;
    background-color: var(--dark3);
    padding: 4px 16px 4px 12px;
    border-radius: 0 25px 25px 0;
    font-weight: bold;
    text-transform: uppercase;
  }

  & img {
    min-width: calc(var(--minWidthCardProduct) / 2);
    max-width: calc(var(--minWidthCardProduct) / 2);
    min-height: var(--minHeightCardProduct);
    max-height: var(--minHeightCardProduct);

    object-fit: cover;
  }

  & .details {
    min-width: calc(var(--minWidthCardProduct) / 2);
    max-width: calc(var(--minWidthCardProduct) / 2);
    min-height: var(--minHeightCardProduct);
    max-height: var(--minHeightCardProduct);

    background-color: var(--dark3);
    display: flex;
    flex-direction: column;
    padding: 12px;
    
    & .price {
      font-size: 22px;
      font-weight: bold;
      display: flex;
      justify-content: flex-end;
      padding: 0 16px;
    }

    & .description {
      flex: 1;
      display: flex;
      align-items: flex-end;
      padding: 20px 0;
    }

    & .btnAdd {
      background-color: var(--yellow);
      border: solid 1px var(--yellow);
      border-radius: 3px;
      font-size: 14px;
      font-weight: bold;
      padding: 12px 12px;
      margin-right: 12px;
      text-transform: uppercase;
  
      color: var(--white);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
    }

    & .btnAdd:hover {
      transition: all ease .4s;
      opacity: .92;
      cursor: pointer;
    }

    & .btnAdd:active {
      scale: .92;
    }
  }
}

@media only screen and (max-width: 618px) {
  .card-product {
  position: relative;
  --minWidthCardProduct: 100%;
  --minHeightCardProduct: 300px;
  background-color: aliceblue;


  min-width: var(--minWidthCardProduct);
  max-width: var(--minWidthCardProduct);
  min-height: var(--minHeightCardProduct);
  max-height: var(--minHeightCardProduct);

  display: flex;

  & .name {
    position: absolute;
    top: 6px;
    left: 0;
    z-index: 2;

    display: flex;
    background-color: var(--dark3);
    padding: 4px 16px 4px 12px;
    border-radius: 0 25px 25px 0;
    font-weight: bold;
    text-transform: uppercase;
  }

  & img {
    min-width: var(--minWidthCardProduct);
    max-width: var(--minWidthCardProduct);
    min-height: var(--minHeightCardProduct);
    max-height: var(--minHeightCardProduct);

    object-fit: cover;
  }

  & .details {
    position: absolute;
    bottom: 0;
    left: 0;

    min-width: var(--minWidthCardProduct);
    max-width: var(--minWidthCardProduct);
    min-height: var(--minHeightCardProductsDetailsMobile);
    max-height: var(--minHeightCardProductsDetailsMobile);

    background-color: var(--dark3a);
    display: flex;

    & .price {
      font-size: 22px;
      font-weight: bold;
      display: flex;
      justify-content: flex-end;
      padding: 0 16px;
    }

    & .description {
      flex: 1;
      display: flex;
      align-items: flex-end;
      padding: 10px 0;
      font-size: 12px;
    }
  }
}
}
</style>