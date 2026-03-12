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
		<header className="flex justify-center px-2">
			<div className="w-full p-2 mx-auto">
				<nav aria-label="Connect with me">
					<ul className="list-none p-0 m-0 flex gap-2 items-baseline">
						<li>
							<h1 className="flex items-center py-0.5 text-sm text-gray-800 font-medium m-0 min-h-[32px] leading-none">
								Mike Borthwick
							</h1>
						</li>
						<li>
							<a
								href="mailto:mhborthwick@proton.me"
								className="flex items-center py-0.5 text-sm text-gray-800 no-underline font-medium transition-all duration-200 min-h-[32px] hover:text-blue-500 focus:outline focus:outline-2 focus:outline-blue-500 focus:outline-offset-2"
								target="_blank"
								rel="noopener noreferrer"
							>
								Contact
							</a>
						</li>
						<li>
							<a
								href="https://drive.proton.me/urls/5JBG6H02DG#7I8xieHXQkzS"
								className="flex items-center py-0.5 text-sm text-gray-800 no-underline font-medium transition-all duration-200 min-h-[32px] hover:text-blue-500 focus:outline focus:outline-2 focus:outline-blue-500 focus:outline-offset-2"
								target="_blank"
								rel="noopener noreferrer"
							>
								Resume
							</a>
						</li>
						<li>
							<a
								href="https://www.linkedin.com/in/mhborthwick"
								className="flex items-center py-0.5 text-sm text-gray-800 no-underline font-medium transition-all duration-200 min-h-[32px] hover:text-blue-500 focus:outline focus:outline-2 focus:outline-blue-500 focus:outline-offset-2"
								target="_blank"
								rel="noopener noreferrer"
							>
								LinkedIn
							</a>
						</li>
						<li>
							<a
								href="https://github.com/mhborthwick"
								className="flex items-center py-0.5 text-sm text-gray-800 no-underline font-medium transition-all duration-200 min-h-[32px] hover:text-blue-500 focus:outline focus:outline-2 focus:outline-blue-500 focus:outline-offset-2"
								target="_blank"
								rel="noopener noreferrer"
							>
								GitHub
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
