/**
 * Tests for Header component
 * Verifies semantic structure, accessibility, and content
 */

import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { axe } from "vitest-axe";
import Header from "./Header";

describe("Header", () => {
	afterEach(() => {
		cleanup();
	});

	it("should use semantic header element", () => {
		const { container } = render(<Header />);
		const header = container.querySelector("header");
		expect(header).toBeTruthy();
	});

	it("should display main heading with name", () => {
		const { container } = render(<Header />);
		const h1 = container.querySelector("h1");
		expect(h1?.textContent).toBe("Mike Borthwick");
	});

	it("should display email link with correct href", () => {
		const { container } = render(<Header />);
		const emailLink = container.querySelector(
			'a[href="mailto:mhborthwick@proton.me"]',
		);
		expect(emailLink).toBeTruthy();
		expect(emailLink?.textContent).toBe("mhborthwick@proton.me");
	});

	it("should have navigation with proper aria-label", () => {
		const { container } = render(<Header />);
		const nav = container.querySelector('nav[aria-label="Connect with me"]');
		expect(nav).toBeTruthy();
	});

	it("should display all three navigation links", () => {
		const { container } = render(<Header />);
		const links = container.querySelectorAll("nav a");
		expect(links.length).toBe(3);
	});

	it("should have navigation links with correct attributes", () => {
		const { container } = render(<Header />);
		const resumeLink = container.querySelector(
			'a[href="https://drive.proton.me/urls/5JBG6H02DG#7I8xieHXQkzS"]',
		);
		const linkedinLink = container.querySelector(
			'a[href="https://www.linkedin.com/in/mhborthwick"]',
		);
		const githubLink = container.querySelector(
			'a[href="https://github.com/mhborthwick"]',
		);

		expect(resumeLink).toBeTruthy();
		expect(resumeLink?.getAttribute("target")).toBe("_blank");
		expect(resumeLink?.getAttribute("rel")).toBe("noopener noreferrer");
		expect(resumeLink?.textContent).toContain("Resume");

		expect(linkedinLink).toBeTruthy();
		expect(linkedinLink?.getAttribute("target")).toBe("_blank");
		expect(linkedinLink?.getAttribute("rel")).toBe("noopener noreferrer");
		expect(linkedinLink?.textContent).toContain("LinkedIn");

		expect(githubLink).toBeTruthy();
		expect(githubLink?.getAttribute("target")).toBe("_blank");
		expect(githubLink?.getAttribute("rel")).toBe("noopener noreferrer");
		expect(githubLink?.textContent).toContain("GitHub");
	});

	it("should have proper semantic structure", () => {
		const { container } = render(<Header />);

		const header = container.querySelector("header");
		const h1 = header?.querySelector("h1");
		const nav = header?.querySelector("nav");
		const ul = nav?.querySelector("ul");

		expect(header).toBeTruthy();
		expect(h1).toBeTruthy();
		expect(nav).toBeTruthy();
		expect(ul).toBeTruthy();
	});

	it("should pass accessibility tests", async () => {
		const { container } = render(<Header />);
		const results = await axe(container);
		expect(results.violations).toHaveLength(0);
	});
});
