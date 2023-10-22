<script lang="ts">
	export let seq: string = "";
	export let date: string = "";
	export let status: string = "";
	export let price: string = "";
	let detailContainer: HTMLElement;
	let isExpand: boolean = false;
	let timer: NodeJS.Timeout;
	function onClick() {
		isExpand = !isExpand;
		if (typeof timer !== "undefined") {
			clearInterval(timer);
		}
		let count: number = 0;
		timer = setInterval(() => {
			if (isExpand) {
				detailContainer.style.maxHeight = `${detailContainer.scrollHeight}px`;
			} else {
				detailContainer.style.maxHeight = ``;
			}
			if (count > 10) {
				clearInterval(count);
			}
		}, 20);
	}
</script>

<table class="border border-1 border-secondary w-100">
	<thead>
		<tr>
			<th class="p-3 bg-dark text-white">訂單編號</th>
			<th class="p-3 bg-dark text-white">訂單日期</th>
			<th class="p-3 bg-dark text-white">訂單狀態</th>
			<th class="p-3 bg-dark text-white">訂單總額</th>
			<th class="p-3 bg-dark text-white">訂單總額</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="p-3">{seq}</td>
			<td class="p-3">{date}</td>
			<td class="p-3">{status}</td>
			<td class="p-3">{price}</td>
			<td class="p-3">
				<button type="button" class="btn btn-secondary" on:click={onClick}> 商品明細 </button>
			</td>
		</tr>
		<tr>
			<td class="p-3" colspan="5">
				<div class="detail-row" bind:this={detailContainer}>
					<table class="border border-1 border-secondary w-100">
						<thead>
							<tr>
								<th class="p-3 bg-secondary text-white">商品</th>
								<th class="p-3 bg-secondary text-white">優惠</th>
								<th class="p-3 bg-secondary text-white">單價</th>
								<th class="p-3 bg-secondary text-white">數量</th>
								<th class="p-3 bg-secondary text-white">小記</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td class="p-3">漁夫帽</td>
								<td class="p-3">夏日歡慶95折</td>
								<td class="p-3">2,000</td>
								<td class="p-3">1</td>
								<td class="p-3">1,700</td>
							</tr>
							<tr>
								<td class="p-3">鈦金屬個人鍋組</td>
								<td class="p-3" />
								<td class="p-3">3,200</td>
								<td class="p-3">1</td>
								<td class="p-3">3,200</td>
							</tr>
							<tr>
								<td class="p-3">廳帳</td>
								<td class="p-3" />
								<td class="p-3">32,000</td>
								<td class="p-3">1</td>
								<td class="p-3">32,000</td>
							</tr>
						</tbody>
					</table>
				</div>
			</td>
		</tr>
	</tbody>
</table>

<style lang="less">
	.detail-row {
		overflow: hidden;
		max-height: 0px;
		transition: max-height 0.2s ease-out;
	}
</style>
