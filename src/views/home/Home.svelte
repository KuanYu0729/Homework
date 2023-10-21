<script lang="ts">
	import Field from "./Field.svelte";
</script>

<div class="d-flex flex-column">
	<h4 class="px-3">MEMBER CENTER | 會員資訊</h4>
	<div class="mt-3 p-3 mx-3 mx-sm-0 bg-black text-white">基本資料</div>
	<div class="w-100 px-3">
		<div class="mt-2 d-flex flex-column flex-sm-row justify-content-start align-items-center w-100">
			<span class="d-flex flex-row justify-content-start align-items-center flex-sm-fill col-12 col-sm-auto">
				<Field title="姓名" placeholder="姓名" />
			</span>
			<span class="d-flex flex-row justify-content-start align-items-center flex-sm-fill col-12 col-sm-auto">
				<Field title="暱稱" placeholder="暱稱" />
			</span>
		</div>
		<div class="mt-2 d-flex flex-column flex-sm-row justify-content-start align-items-center w-100">
			<span class="d-flex flex-row justify-content-start align-items-center flex-sm-fill col-12 col-sm-auto">
				<Field title="聯絡電話" placeholder="聯絡電話" />
			</span>
			<span class="d-flex flex-row justify-content-start align-items-center flex-sm-fill col-12 col-sm-auto">
				<Field title="生日" placeholder="生日" />
			</span>
		</div>
		<div class="mt-2 d-flex flex-column flex-sm-row justify-content-start align-items-center w-100">
			<span class="d-flex flex-row justify-content-start align-items-center flex-sm-fill col-12 col-sm-auto">
				<Field title="信箱" placeholder="信箱" />
			</span>
			<span class="d-flex flex-row justify-content-start align-items-center flex-sm-fill col-12 col-sm-auto">
				
			</span>
		</div>
		<div class="d-flex flex-column w-100">
			<div class="mt-2 w-100 d-none d-sm-flex flex-row justify-content-start align-items-center">地址</div>
			<div class="mt-2 p-3 w-100 d-flex d-sm-none flex-row justify-content-start align-items-center bg-black text-white">地址</div>
			<div class="mt-2 d-flex flex-column flex-sm-row justify-content-start align-items-start align-sm-items-center">
				<div class="d-flex flex-row justify-content-start align-items-center flex-fill me-2">
					<input class="rounded w-100" type="text" placeholder="城市/縣" />
				</div>
				<div class="d-flex flex-row justify-content-start align-items-center flex-fill">
					<input class="rounded w-100" type="text" placeholder="地區" />
				</div>
			</div>
			<div class="mt-2 d-flex flex-row justify-content-start align-items-center col-12 col-sm-6">
				<input class="rounded w-100" type="text" placeholder="收件人地址" />
			</div>
		</div>
	</div>
</div>
