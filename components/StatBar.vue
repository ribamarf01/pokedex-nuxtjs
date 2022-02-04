<template>
	<div class="w-full mb-2 flex items-center">
		<span class="mx-3 w-1/6 capitalize">{{ stat }} </span>
		<div class="w-5/6 rounded-xl" :class="'bg-' + abbr + '_fade'">
			<div class="rounded-xl text-center" v-bind:style="widthStyling()" :class="'bg-'+ abbr">
				<span class="text-gray-100">{{ value }}</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['value', 'stat', 'abbr'],
	methods: {
		widthStyling() {
			return (this.value / 2) > 3 ? `width: ${this.value / 2}%` : `width: 3%`
		}
	}
	
}
</script>

<style>

</style>