<template>
	<main
		class="p-[6rem] text-white grid grid-cols-[1fr_2fr] bg-gradient-to-b from-deepBlue-500 to-deepBlue-100 justify-items-center w-screen h-full auto-rows-[max-content] bg-fixed animationClass overflow-scroll"
	>
		<!-- TOP -->
		<div class="h-full grid-flow-row auto-rows-max grid">
			<Hexagon class="" :icon="myIcon"></Hexagon>
			<div
				class="text-center w-full mb-[2rem] font-jetBrainMono font-medium text-[2rem]"
			>
				Programmer
			</div>
		</div>
		<div class=""></div>
		<hr class="col-span-2 w-full mt-[2rem]" />

		<!-- LEFT -->
		<section class="border-r-[.1rem] border-gray-500 h-[60rem] w-full">
			left
		</section>
		<!-- RIGHT -->
		<section class="w-full px-[4rem]">
			<div class="h-[15rem]">1</div>
			<hr class="w-full" />
			<div class="h-[30rem]">2</div>
			<hr class="w-full" />
			<div class=""></div>
		</section>
	</main>
</template>

<script setup lang="ts">
import Hexagon from "../components/Hexagon.vue";
import myIcon from "icons/myIcon.jpeg";
</script>

<style scoped>
.animationClass {
	background-image: linear-gradient(-45deg, var(--tw-gradient-stops));
	background-size: 300% 300%;
	animation: AnimateBG 10s ease infinite;
}
@keyframes AnimateBG {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
</style>
