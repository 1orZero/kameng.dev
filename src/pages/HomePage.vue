<template>
	<main
		class="p-[6rem] text-white grid grid-cols-[1fr_2fr] bg-gradient-to-b from-deepBlue-500 to-deepBlue-300 justify-items-center w-screen h-full auto-rows-[max-content]"
	>
		<!-- TOP -->
		<div class="h-full grid-flow-row auto-rows-max grid">
			<Hexagon class=""></Hexagon>
			<div class="text-center w-full mb-[2rem]">Programmer</div>
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
</script>
