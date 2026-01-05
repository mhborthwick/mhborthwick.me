/**
 * Tests for Nav component
 * Verifies semantic structure, accessibility, and navigation functionality
 */

import { describe, it, expect, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import { axe } from "vitest-axe";
import Nav from "./Nav";

describe("Nav", () => {
	afterEach(() => {
		cleanup();
	});

	it("should use semantic nav element", () => {
		const { container } = render(<Nav currentPath="/" />);
		const nav = container.querySelector("nav");
		expect(nav).toBeTruthy();
	});

	it("should have aria-label for accessibility", () => {
		const { container } = render(<Nav currentPath="/" />);
		const nav = container.querySelector("nav");
		expect(nav?.getAttribute("aria-label")).toBe("Main navigation");
	});

	it("should include links to Home and About pages", () => {
		const { container } = render(<Nav currentPath="/" />);

		const homeLink = container.querySelector('a[href="/"]');
		const aboutLink = container.querySelector('a[href="/about"]');

		expect(homeLink?.textContent).toBe("Home");
		expect(aboutLink?.textContent).toBe("About");
	});

	it("should indicate current page with aria-current on home", () => {
		const { container } = render(<Nav currentPath="/" />);

		const homeLink = container.querySelector('a[href="/"]');
		const aboutLink = container.querySelector('a[href="/about"]');

		expect(homeLink?.getAttribute("aria-current")).toBe("page");
		expect(aboutLink?.getAttribute("aria-current")).toBeNull();
	});

	it("should indicate current page with aria-current on about", () => {
		const { container } = render(<Nav currentPath="/about" />);

		const homeLink = container.querySelector('a[href="/"]');
		const aboutLink = container.querySelector('a[href="/about"]');

		expect(homeLink?.getAttribute("aria-current")).toBeNull();
		expect(aboutLink?.getAttribute("aria-current")).toBe("page");
	});

	it("should have proper list structure", () => {
		const { container } = render(<Nav currentPath="/" />);

		const nav = container.querySelector("nav");
		const ul = nav?.querySelector("ul");
		const listItems = ul?.querySelectorAll("li");

		expect(nav).toBeTruthy();
		expect(ul).toBeTruthy();
		expect(listItems?.length).toBe(2);
	});

	it("should pass accessibility tests", async () => {
		const { container } = render(<Nav currentPath="/" />);
		const results = await axe(container);
		expect(results.violations).toHaveLength(0);
	});

	it("should have keyboard accessible links", () => {
		const { container } = render(<Nav currentPath="/" />);

		const links = container.querySelectorAll("a");
		links.forEach((link) => {
			// Links with href are keyboard accessible by default
			expect(link.getAttribute("href")).toBeTruthy();
		});
	});
});
