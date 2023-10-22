<script lang="ts">
    import Ticket from "./Ticket.svelte";

</script>

<div class="d-flex flex-column w-100 h-100 p-sm-5">
	<h4 class="p-3">VOUCHER | 優惠卷</h4>
	<div class="d-flex flex-column flex-fill w-100 overflow">
		<!-- header -->
		<div class="d-flex flex-row justify-content-start align-items-center bg-dark text-white p-1 p-sm-5">
			<div class="d-flex flex-column justify-content-around align-items-center flex-fill">
				<div class="d-flex flex-row justify-content-center align-items-center">優惠卷</div>
				<div class="d-flex flex-row justify-content-center align-items-center">12</div>
			</div>
			<div class="d-flex flex-column justify-content-around align-items-center flex-fill">
				<div class="d-flex flex-row justify-content-center align-items-center">最高優惠</div>
				<div class="d-flex flex-row justify-content-center align-items-center">75% OFF</div>
			</div>
			<div class="d-flex flex-column justify-content-around align-items-center flex-fill">
				<div class="d-flex flex-row justify-content-center align-items-center">已累積省下</div>
				<div class="d-flex flex-row justify-content-center align-items-center">NT $1,000</div>
			</div>
			<div class="d-flex flex-column justify-content-around align-items-center flex-fill">
				<button type="button" class="btn btn-success px-2 px-sm-4 py-1 py-sm-2">一鍵領取</button>
			</div>
		</div>
		<div class="w-100 row mx-0">
			<div class="my-2 col-12 col-sm-6">
				<Ticket></Ticket>
			</div>
			<div class="my-2 col-12 col-sm-6">
				<Ticket></Ticket>
			</div>
			<div class="my-2 col-12 col-sm-6">
				<Ticket></Ticket>
			</div>
			<div class="my-2 col-12 col-sm-6">
				<Ticket></Ticket>
			</div>

		</div>
		<!-- #D1EF1A -->
	</div>
	<div class="d-flex flex-row justify-content-center align-items-center p-3" />
</div>
