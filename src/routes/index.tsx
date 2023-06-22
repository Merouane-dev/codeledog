import {component$} from '@builder.io/qwik';
import type {DocumentHead} from '@builder.io/qwik-city';
import Section1 from '~/components/section1/section1';
import Section2 from '~/components/section2/section2';
import Section3 from '~/components/section3/section3';

export default component$(() => {
	return (
		<main class="w-full flex flex-col items-center">
			<Section1 />
			<Section2 />
			<Section3 />
		</main>
	);
});

export const head: DocumentHead = {
	title: 'Welcome to Qwik',
	meta: [
		{
			name: 'description',
			content: 'Qwik site description',
		},
	],
};
