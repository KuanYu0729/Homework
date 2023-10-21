<script lang="ts">
	export let title: string = "";
	export let placeholder: string = "";
	export let value: string = "";
</script>

<span class="d-flex flex-column w-100 pe-2">
	<div>{title}</div>
	<div class="mt-2 d-flex flex-row justify-content-start align-items-center flex-fill">
		<input class="rounded col-12" type="text" {placeholder} bind:value />
	</div>
</span>
