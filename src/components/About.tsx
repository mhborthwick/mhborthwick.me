/**
 * About component for the home page.
 * Displays information about Mike Borthwick.
 *
 * @remarks
 * - Uses semantic article element
 * - Mobile-friendly responsive design
 * - Consistent styling with Header and Footer components
 */

export default function About() {
	return (
		<article className="flex justify-center px-4">
			<div className="max-w-[37.5rem] w-full px-4 my-12 mx-auto">
				<h2 className="text-5xl sm:text-4xl font-bold text-gray-800 m-0 mb-8 leading-tight">
					About
				</h2>

				<div className="flex flex-col gap-6">
					<p className="text-lg leading-relaxed text-gray-700 m-0">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</p>

					<p className="text-lg leading-relaxed text-gray-700 m-0">
						Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
						cupidatat non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum.
					</p>

					<p className="text-lg leading-relaxed text-gray-700 m-0">
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
						quae ab illo inventore veritatis et quasi architecto beatae vitae
						dicta sunt explicabo.
					</p>
				</div>
			</div>
		</article>
	);
}
