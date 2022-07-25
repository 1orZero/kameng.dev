<template>
	<div class="">
		<div class="hexagon">
			<div class="text-white text-[2rem]">text</div>
		</div>
		<div class="box"></div>
	</div>
</template>

<script setup lang="ts"></script>
<style scoped>
.hexagon {
	@apply w-[16rem] h-[16rem] p-[2.5rem] flex relative;

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

.box {
	/* @apply bg-black w-[16rem] h-[16rem] p-[2.5rem] flex relative; */
	/* background: linear-gradient(
		143deg,
		rgba(35, 57, 93, 1) 0%,
		rgba(32, 51, 84, 1) 19%,
		rgba(28, 46, 74, 1) 41%,
		rgba(25, 40, 65, 1) 54%,
		rgba(54, 116, 133, 1) 100%
	); */
	position: relative;
	width: 300px;
	height: 450px;
	display: flex;
	justify-content: center;
	align-content: center;
	background: #060c21;
	padding: 25px;
}
.box::before {
	content: "";
	position: absolute;
	top: -2px;
	bottom: -2px;
	left: -2px;
	right: -2px;
	background: #ffffff;
	z-index: -1;
	height: 100px;
	width: 100px;
	/* content: "";
	@apply bg-white absolute top-[-.8rem] bottom-[-.8rem] left-[-.8rem] right-[-.8rem] z-[-1]; */
}
/* .box::after {
	content: "";
	position: absolute;
	top: -2px;
	bottom: -2px;
	left: -2px;
	right: -2px;
	background: #ffffff;
	z-index: -1;
	filter: blur(40px);
} */
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
