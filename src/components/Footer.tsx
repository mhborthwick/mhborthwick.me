/**
 * Footer component for the site.
 * Displays copyright information.
 *
 * @remarks
 * - Uses semantic footer element
 * - Dynamically displays current year
 * - Mobile-friendly responsive design
 * - Meets WCAG AA color contrast requirements
 */

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="mt-auto">
			<div className="max-w-[37.5rem] px-4 my-12 mx-auto flex items-center justify-center text-center">
				<p className="m-0 text-gray-700 text-sm leading-normal font-medium">
					&copy; {currentYear} Mike Borthwick
				</p>
			</div>
		</footer>
	);
}
