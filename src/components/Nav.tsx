/**
 * Main navigation component for the site.
 * Provides accessible navigation links with current page indication.
 *
 * @remarks
 * - Uses semantic nav element with ARIA label
 * - Indicates current page with aria-current="page"
 * - Keyboard accessible with visible focus states
 * - Mobile-friendly responsive design
 * - Meets WCAG AA color contrast requirements
 */

/**
 * Navigation link item
 */
interface NavLink {
	/** Display text for the link */
	label: string;
	/** URL path for the link */
	href: string;
}

interface NavProps {
	/** Current page path for determining active link */
	currentPath: string;
}

const navLinks: NavLink[] = [
	{ label: "Home", href: "/" },
	{ label: "About", href: "/about" },
];

/**
 * Checks if the given path matches the current page
 * @param href - The path to check
 * @param currentPath - The current page path
 * @returns True if the path matches the current page
 */
function isCurrentPage(href: string, currentPath: string): boolean {
	// Normalize paths for comparison
	const normalizedCurrent =
		currentPath === "/" ? "/" : currentPath.replace(/\/$/, "");
	const normalizedHref = href === "/" ? "/" : href.replace(/\/$/, "");
	return normalizedCurrent === normalizedHref;
}

export default function Nav({ currentPath }: NavProps) {
	return (
		<nav aria-label="Main navigation" className="p-4 border-b border-gray-200">
			<ul className="flex flex-col gap-2 list-none m-0 p-0 max-w-screen-xl mx-auto sm:flex-row sm:flex-wrap sm:gap-6">
				{navLinks.map((link) => (
					<li key={link.href} className="m-0">
						<a
							href={link.href}
							className={`
								inline-flex items-center justify-center
								px-4 py-2 min-h-[44px] min-w-[44px]
								font-medium rounded-md
								transition-all duration-200
								no-underline w-full sm:w-auto
								${
									isCurrentPage(link.href, currentPath)
										? "text-gray-800 bg-gray-200 font-semibold"
										: "text-gray-700 hover:bg-gray-100 hover:text-gray-800"
								}
								focus:outline focus:outline-2 focus:outline-blue-500 focus:outline-offset-2
							`}
							aria-current={
								isCurrentPage(link.href, currentPath) ? "page" : undefined
							}
						>
							{link.label}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
}
