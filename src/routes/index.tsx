import {component$} from '@builder.io/qwik';
import type {DocumentHead} from '@builder.io/qwik-city';
import Section1 from '~/components/section1/section1';

export default component$(() => {
	return (
		<main class="w-full flex flex-col items-center">
			<Section1 />
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
