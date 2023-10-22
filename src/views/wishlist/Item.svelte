<script lang="ts">
	import Cart from "../../component/icon/Cart.svelte";
	import { getDisplayPrice } from "../../util/date";

	export let name: string = "";
	export let price: number = 0;
</script>

<div class="w-100 border border-1 rounded">
	<div class="bg-secondary text-white d-flex flex-row justify-content-center align-items-center" style="height: 200px">圖片</div>
	<div class="d-flex flex-column bg-dark text-white p-2">
		<div class="d-flex flex-row justify-content-start align-items-center mt-3">
			{name}
		</div>
		<div class="d-flex flex-row justify-content-start align-items-center mt-3">
			NT $ {getDisplayPrice(price)}
		</div>
		<div class="d-flex flex-row justify-content-start align-items-center mt-3">
			<div class="d-flex flex-row justify-content-around align-items-center flex-fill">
				<button type="button" class="btn btn-success text-nowrap">
					<small> 30% OFF </small>
				</button>
				<button type="button" class="btn btn-success text-nowrap">
					<small> new </small>
				</button>
				<span class="border border-0 rounded-circle bg-secondary p-1">
					<Cart />
				</span>
			</div>
		</div>
	</div>
</div>
