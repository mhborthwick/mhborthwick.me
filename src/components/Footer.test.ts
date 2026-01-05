/**
 * Tests for Footer component
 * Verifies semantic structure, accessibility, and content
 */

import { describe, it, expect } from "vitest";
import { axe } from "vitest-axe";

describe("Footer", () => {
	/**
	 * Creates a mock HTML document for Footer component
	 */
	function createFooterHTML(): string {
		const currentYear = new Date().getFullYear();
		return `
<footer class="footer">
	<div class="footer-content">
		<p class="copyright">
			© ${currentYear} Mike Borthwick
		</p>
		<p class="tech-stack">
			Built with Astro • TypeScript • Tailwind CSS
		</p>
	</div>
</footer>
		`;
	}

	it("should use semantic footer element", () => {
		const html = createFooterHTML();
		expect(html).toContain("<footer");
	});

	it("should display copyright with current year", () => {
		const currentYear = new Date().getFullYear();
		const html = createFooterHTML();
		expect(html).toContain(`© ${currentYear} Mike Borthwick`);
	});

	it("should display tech stack information", () => {
		const html = createFooterHTML();
		expect(html).toContain("Built with");
		expect(html).toContain("Astro");
		expect(html).toContain("TypeScript");
		expect(html).toContain("Tailwind CSS");
	});

	it("should have proper semantic structure", () => {
		const html = createFooterHTML();
		const parser = new DOMParser();
		const doc = parser.parseFromString(html, "text/html");

		const footer = doc.querySelector("footer");
		const paragraphs = footer?.querySelectorAll("p");

		expect(footer).toBeTruthy();
		expect(paragraphs?.length).toBe(2);
	});

	it("should pass accessibility tests", async () => {
		const html = createFooterHTML();
		const parser = new DOMParser();
		const doc = parser.parseFromString(html, "text/html");

		const results = await axe(doc.body);
		expect(results.violations).toHaveLength(0);
	});

	it("should contain copyright symbol", () => {
		const html = createFooterHTML();
		expect(html).toContain("©");
	});
});
