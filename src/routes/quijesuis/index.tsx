import {component$} from '@builder.io/qwik';
import FooterBottom from '~/components/footer-bottom';

export default component$(() => {
	return (
		<>
			<main class="w-full flex flex-col">
				<div class="w-full flex flex-col md:flex-row items-center p-12">
					<img src="/images/etienne.webp" alt='Etienne' width={380} height={627} />
					<div class="w-full flex flex-col gap-16 p-12">
						<h1 class="text-2xl md:text-7xl font-extrabold">
							Bienvenue chez<br/>
							<span class="text-primary">CODET</span><span class="text-secondary">DOG</span>
						</h1>
						<p class="text-xl md:text-5xl">
							Je m’apelle Etienne Etienne Codet.<br/>
							Je suis éducateur comportementaliste canin
						</p>
						<p class="text-xl md:text-5xl">07 83 65 91 80</p>
					</div>
				</div>
				<p class="w-full p-12 text-xl md:text-2xl font-extrabold">
					Je réalise avec vous, dès notre première rencontre, une étude de comportement à 30 €, afin de cibler au mieux les difficultés rencontrées,
					quelle que soit la situation.
					<br/><br/>
					J'interviens sur le Pallet et ses environs, autour de 30 km. Contactez-moi pour toute distance supplémentaire.
					<br/><br/>
					Je pratique des séances personnalisées, éducatives,collectives et des sports canins . Je me déplace à domicile ou en extérieur.
					<br/><br/>
					J'utilise une méthode positive mais pas permissive, dans le respect de votre chien de toute race et de tout âge (dès 2 mois jusqu'à 10 ans
					et plus), sans utiliser de collier étrangleur, torquatus ou collier électrique.
				</p>
				<p class="w-full text-center pt-16 text-xl md:text-5xl">Ouvert du Lundi au Samedi de 9h00 - 20h00</p>
				<div class="w-full flex flex-row justify-end pr-16">
					<img src='/images/quijesuis-dog.webp' alt='Chien Google Map' width={407} height={224} />
				</div>
				{ /* eslint-disable-next-line max-len */}
				<iframe class="w-full px-12 pb-16" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2713.89125871556!2d-1.342659127716454!3d47.140396420060604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480661dcfc53be6f%3A0x9e1b5819a0bd551f!2sCODETDOG%20-%20Educateur%20Comportementaliste%20canin!5e0!3m2!1sen!2sfr!4v1688043527206!5m2!1sen!2sfr" width="600" height="450" style="border:0;" loading="lazy"></iframe>
			</main>
			<footer class="p-12">
				<FooterBottom />
			</footer>
		</>
	);
});
