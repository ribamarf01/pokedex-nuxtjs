<template>
	<div>
		<StatBar
			stat="HP"
			abbr="hp"
			:value="hp"
		/>
		<StatBar
			stat="attack"
			abbr="attack"
			:value="attack"
		/>
		<StatBar
			stat="defense"
			abbr="defense"
			:value="defense"
		/>
		<StatBar
			stat="sp Atk"
			abbr="sp_atk"
			:value="spAtk"
		/>
		<StatBar
			stat="sp Def"
			abbr="sp_def"
			:value="spDef"
		/>
		<StatBar
			stat="speed"
			abbr="speed"
			:value="speed"
		/>
	</div>
</template>

<script>
import StatBar from "./StatBar.vue";
export default {
    props: ["hp", "attack", "defense", "spAtk", "spDef", "speed"],
    components: { StatBar }
}
</script>

<style>

</style>