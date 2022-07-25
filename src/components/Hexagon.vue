<template>
	<div class="z-[1]">
		<div class="hexagon">
			<div class="text-white text-[2rem]">text</div>
		</div>
	</div>
</template>

<script setup lang="ts"></script>
<style scoped>
.hexagon {
	@apply w-[16rem] h-[16rem] p-[2.5rem] block relative;

	background: linear-gradient(
		143deg,
		rgba(35, 57, 93, 1) 0%,
		rgba(32, 51, 84, 1) 19%,
		rgba(28, 46, 74, 1) 41%,
		rgba(25, 40, 65, 1) 54%,
		rgba(54, 116, 133, 1) 100%
	);
	animation: steam 4s linear infinite;
	clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
}
.hexagon::before {
	@apply top-[-.4rem] left-[-.4rem] w-[17rem] h-[17rem] absolute z-[-1];
	background-color: red;
}

@keyframes steam {
	0% {
		background-position: 0 0;
		filter: blur(25px);
	}

	50% {
		background-position: 400% 0;
		filter: blur(50px);
	}
	100% {
		background-position: 0 0;
		filter: blur(25px);
	}
}
</style>
