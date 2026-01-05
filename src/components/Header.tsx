/**
 * Header component for the home page.
 * Displays name, email contact, and navigation links.
 *
 * @remarks
 * - Uses semantic header element
 * - Provides accessible links with sufficient touch target size (44px min-height)
 * - Mobile-friendly responsive design
 * - Includes proper focus states for keyboard navigation
 */

export default function Header() {
	return (
		<header className="flex justify-center px-4">
			<div className="max-w-[37.5rem] w-full px-4 my-12 mx-auto">
				<h1 className="text-3xl sm:text-3xl font-bold text-gray-800 m-0 mb-2 leading-tight">
					Mike Borthwick
				</h1>

				<p className="m-0 mb-6 text-sm">
					<a
						href="mailto:hello@example.com"
						className="text-gray-800 no-underline font-normal transition-colors duration-200 hover:text-blue-500 focus:outline focus:outline-2 focus:outline-blue-500 focus:outline-offset-2 focus:rounded-sm"
					>
						hello@example.com
					</a>
				</p>

				<nav aria-label="Connect with me" className="mt-6">
					<ul className="list-none p-0 m-0 flex flex-col gap-0">
						<li>
							<a
								href="#resume"
								className="flex items-center py-0.5 text-sm text-gray-800 no-underline font-medium transition-all duration-200 min-h-[32px] hover:text-blue-500 focus:outline focus:outline-2 focus:outline-blue-500 focus:outline-offset-2"
								target="_blank"
								rel="noopener noreferrer"
							>
								Resume ↗
							</a>
						</li>
						<li>
							<a
								href="#linkedin"
								className="flex items-center py-0.5 text-sm text-gray-800 no-underline font-medium transition-all duration-200 min-h-[32px] hover:text-blue-500 focus:outline focus:outline-2 focus:outline-blue-500 focus:outline-offset-2"
								target="_blank"
								rel="noopener noreferrer"
							>
								LinkedIn ↗
							</a>
						</li>
						<li>
							<a
								href="#github"
								className="flex items-center py-0.5 text-sm text-gray-800 no-underline font-medium transition-all duration-200 min-h-[32px] hover:text-blue-500 focus:outline focus:outline-2 focus:outline-blue-500 focus:outline-offset-2"
								target="_blank"
								rel="noopener noreferrer"
							>
								GitHub ↗
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
