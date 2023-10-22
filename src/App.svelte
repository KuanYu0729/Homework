<script lang="ts">
  import Home from "./views/home/Home.svelte";
  import OrderRecord from "./views/order/OrderRecord.svelte";
  import Voucher from "./views/voucher/Voucher.svelte";
    import WishList from "./views/wishlist/WishList.svelte";
  let page: string | undefined;
  function onClick(_: string) {
    page = _;
  }
</script>

<div class="w-100 h-100">
  {#if page === "home"}
    <!-- 首頁 -->
    <Home />
  {:else if page === "order"}
    <!-- 下單記錄 -->
    <OrderRecord />
  {:else if page === "voucher"}
    <!-- 優惠卷 -->
    <Voucher />
  {:else if page === "wishlist"}
    <!-- 優惠卷 -->
    <WishList/>
  {:else}
    <div class="row mx-auto py-2">
      <button
        type="button"
        class="btn btn-primary col-3 mx-2 mt-2"
        on:click={() => {
          onClick("home");
        }}
      >
        首頁
      </button>
      <button
        type="button"
        class="btn btn-primary col-3 mx-2 mt-2"
        on:click={() => {
          onClick("order");
        }}
      >
        下單記錄
      </button>
      <button
        type="button"
        class="btn btn-primary col-3 mx-2 mt-2"
        on:click={() => {
          onClick("voucher");
        }}
      >
        優惠卷
      </button>
      <button
        type="button"
        class="btn btn-primary col-3 mx-2 mt-2"
        on:click={() => {
          onClick("wishlist");
        }}
      >
        我的最愛
      </button>
    </div>
  {/if}
</div>
