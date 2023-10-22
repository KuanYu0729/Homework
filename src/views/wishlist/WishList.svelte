<script lang="ts">
    import Item from "./Item.svelte";


</script>

<div class="d-flex flex-column w-100 h-100 p-sm-5">
<h4 class="p-3">WISH LIST | 我的最愛</h4>
<div class="d-flex flex-column flex-fill w-100 overflow">
	<!-- header -->
	<div class="d-flex flex-row justify-content-start align-items-center text-white w-100">
		<div class="d-flex flex-column justify-content-around align-items-center flex-fill bg-dark p-3 p-sm-5">
			<div class="d-flex flex-row justify-content-center align-items-center text-white w-100">
				商品最愛
			</div>
			<div class="d-flex flex-row justify-content-center align-items-center text-white w-100">
				58
			</div>
		</div>
		<div class="d-flex flex-column justify-content-around align-items-center flex-fill bg-secondary p-3 p-sm-5">
			<div class="d-flex flex-row justify-content-center align-items-center text-white w-100">
				營地最愛
			</div>
			<div class="d-flex flex-row justify-content-center align-items-center text-white w-100">
				100
			</div>
		</div>
	</div>
	<div class="w-100 row mx-0">
		<div class="mt-2 col-12 col-sm-3">
			<Item name="拱型帳天幕(SET-250RH)" price={18300}></Item>
		</div>
		<div class="mt-2 col-12 col-sm-3">
			<Item name="拱型帳天幕(SET-250RH)" price={18300}></Item>
		</div>
		<div class="mt-2 col-12 col-sm-3">
			<Item name="拱型帳天幕(SET-250RH)" price={18300}></Item>
		</div>
		<div class="mt-2 col-12 col-sm-3">
			<Item name="拱型帳天幕(SET-250RH)" price={18300}></Item>
		</div>
		<div class="mt-2 col-12 col-sm-3">
			<Item name="拱型帳天幕(SET-250RH)" price={18300}></Item>
		</div>
		<div class="mt-2 col-12 col-sm-3">
			<Item name="拱型帳天幕(SET-250RH)" price={18300}></Item>
		</div>
		<div class="mt-2 col-12 col-sm-3">
			<Item name="拱型帳天幕(SET-250RH)" price={18300}></Item>
		</div>
	</div>
</div>
<div class="d-flex flex-row justify-content-center align-items-center p-3" />
</div>
