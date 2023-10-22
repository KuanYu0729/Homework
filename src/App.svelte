<script lang="ts">
  import Home from "./views/home/Home.svelte";
  import OrderRecord from "./views/order/OrderRecord.svelte";
    import Voucher from "./views/voucher/Voucher.svelte";
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
  {:else}
    <div class="d-flex flex-row justify-content-around align-items-center">
      <button
        type="button"
        class="btn btn-primary"
        on:click={() => {
          onClick("home");
        }}
      >
        首頁
      </button>
      <button
        type="button"
        class="btn btn-primary"
        on:click={() => {
          onClick("order");
        }}
      >
        下單記錄
      </button>
      <button
        type="button"
        class="btn btn-primary"
        on:click={() => {
          onClick("voucher");
        }}
      >
        優惠卷
      </button>
    </div>
  {/if}
</div>

<style lang="less">
  .btn {
    width: 100px;
  }
</style>
