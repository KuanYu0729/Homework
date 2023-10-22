<script lang="ts">
	import Row from "./Row.svelte";
</script>

<div class="d-flex flex-column w-100 h-100 p-5">
	<h4 class="p-3">ORDER RECORD | 訂單記錄</h4>
	<div class="d-flex flex-column flex-fill w-100 overflow">
		<div class="w-100 mt-5">
			<Row seq="23071870987771" date="2023/08/18 21:29" status="已完成" price="36,900" />
		</div>
		<div class="w-100 mt-5">
			<Row seq="23071870987771" date="2023/08/18 21:29" status="已完成" price="36,900" />
		</div>
		<div class="w-100 mt-5">
			<Row seq="23071870987771" date="2023/08/18 21:29" status="已完成" price="36,900" />
		</div>
	</div>
	<div class="d-flex flex-row justify-content-center align-items-center p-3" />
</div>
