/**
 * Footer component for the site.
 * Displays copyright information and tech stack.
 *
 * @remarks
 * - Uses semantic footer element
 * - Dynamically displays current year
 * - Lists technologies used to build the site
 * - Mobile-friendly responsive design
 * - Meets WCAG AA color contrast requirements
 */

export default function Footer() {
	const currentYear = new Date().getFullYear();
	const techStack = ["Astro", "TypeScript", "Tailwind CSS"];

	return (
		<footer className="mt-auto border-t border-gray-200 bg-gray-50">
			<div className="max-w-[37.5rem] px-4 my-12 mx-auto flex flex-col md:flex-row items-center md:justify-between gap-2 md:gap-3 text-center md:text-left">
				<p className="m-0 text-gray-700 text-sm leading-normal font-medium">
					&copy; {currentYear} Mike Borthwick
				</p>
				<p className="m-0 text-gray-500 text-sm leading-normal">
					Built with {techStack.join(" • ")}
				</p>
			</div>
		</footer>
	);
}
