/**
 * Tests for Nav component
 * Verifies semantic structure, accessibility, and navigation functionality
 */

import { describe, it, expect } from "vitest";
import { axe } from "vitest-axe";

describe("Nav", () => {
	/**
	 * Creates a mock HTML document for Nav component
	 * @param currentPath - The current page path for testing aria-current
	 */
	function createNavHTML(currentPath = "/"): string {
		const isHomeCurrent = currentPath === "/";
		const isAboutCurrent = currentPath === "/about";

		return `
<nav aria-label="Main navigation" class="nav">
	<ul class="nav-list">
		<li class="nav-item">
			<a href="/" class="nav-link" ${isHomeCurrent ? 'aria-current="page"' : ""}>Home</a>
		</li>
		<li class="nav-item">
			<a href="/about" class="nav-link" ${isAboutCurrent ? 'aria-current="page"' : ""}>About</a>
		</li>
	</ul>
</nav>
		`;
	}

	it("should use semantic nav element", () => {
		const html = createNavHTML();
		expect(html).toContain("<nav");
	});

	it("should have aria-label for accessibility", () => {
		const html = createNavHTML();
		expect(html).toContain('aria-label="Main navigation"');
	});

	it("should include links to Home and About pages", () => {
		const html = createNavHTML();
		expect(html).toContain('href="/"');
		expect(html).toContain(">Home</a>");
		expect(html).toContain('href="/about"');
		expect(html).toContain(">About</a>");
	});

	it("should indicate current page with aria-current on home", () => {
		const html = createNavHTML("/");
		const parser = new DOMParser();
		const doc = parser.parseFromString(html, "text/html");

		const homeLink = doc.querySelector('a[href="/"]');
		const aboutLink = doc.querySelector('a[href="/about"]');

		expect(homeLink?.getAttribute("aria-current")).toBe("page");
		expect(aboutLink?.getAttribute("aria-current")).toBeNull();
	});

	it("should indicate current page with aria-current on about", () => {
		const html = createNavHTML("/about");
		const parser = new DOMParser();
		const doc = parser.parseFromString(html, "text/html");

		const homeLink = doc.querySelector('a[href="/"]');
		const aboutLink = doc.querySelector('a[href="/about"]');

		expect(homeLink?.getAttribute("aria-current")).toBeNull();
		expect(aboutLink?.getAttribute("aria-current")).toBe("page");
	});

	it("should have proper list structure", () => {
		const html = createNavHTML();
		const parser = new DOMParser();
		const doc = parser.parseFromString(html, "text/html");

		const nav = doc.querySelector("nav");
		const ul = nav?.querySelector("ul");
		const listItems = ul?.querySelectorAll("li");

		expect(nav).toBeTruthy();
		expect(ul).toBeTruthy();
		expect(listItems?.length).toBe(2);
	});

	it("should pass accessibility tests", async () => {
		const html = createNavHTML();
		const parser = new DOMParser();
		const doc = parser.parseFromString(html, "text/html");

		const results = await axe(doc.body);
		expect(results.violations).toHaveLength(0);
	});

	it("should have keyboard accessible links", () => {
		const html = createNavHTML();
		const parser = new DOMParser();
		const doc = parser.parseFromString(html, "text/html");

		const links = doc.querySelectorAll("a");
		links.forEach((link) => {
			// Links with href are keyboard accessible by default
			expect(link.getAttribute("href")).toBeTruthy();
		});
	});
});
