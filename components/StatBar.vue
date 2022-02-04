<template>
	<div class="w-full mb-2 flex items-center">
		<span class="mx-3 w-1/6 capitalize">{{ stat }} </span>
		<div class="w-5/6 rounded-xl" :class="'bg-' + abbr + '_fade'">
			<div class="rounded-xl text-center" :style="width" :class="'bg-'+ abbr">
				<span class="text-gray-100">{{ value }}</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['value', 'stat', 'abbr'],
	data: () => {
		width: ""
	},
	methods: {
		widthStyling() { // Max value 200
			this.width = `width: ${this.value / 2}%`;
		}
	},
	created() {
		this.widthStyling()
	}
}
</script>

<style>

</style>