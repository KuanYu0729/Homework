export function getDisplayPrice(price: number): string {
	if (typeof price !== "number" || isNaN(price)) {
		price = 0;
	}
	const parts = price.toString().split(".");
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	return parts.join(".");
}