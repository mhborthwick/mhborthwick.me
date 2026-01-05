/**
 * Tests for Footer component
 * Verifies semantic structure, accessibility, and content
 */

import { describe, it, expect, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import { axe } from "vitest-axe";
import Footer from "./Footer";

describe("Footer", () => {
	afterEach(() => {
		cleanup();
	});

	it("should use semantic footer element", () => {
		const { container } = render(<Footer />);
		const footer = container.querySelector("footer");
		expect(footer).toBeTruthy();
	});

	it("should display copyright with current year", () => {
		const currentYear = new Date().getFullYear();
		const { container } = render(<Footer />);
		expect(container.textContent).toContain(`© ${currentYear} Mike Borthwick`);
	});

	it("should display tech stack information", () => {
		const { container } = render(<Footer />);
		expect(container.textContent).toContain("Built with");
		expect(container.textContent).toContain("Astro");
		expect(container.textContent).toContain("TypeScript");
		expect(container.textContent).toContain("Tailwind CSS");
	});

	it("should have proper semantic structure", () => {
		const { container } = render(<Footer />);

		const footer = container.querySelector("footer");
		const paragraphs = footer?.querySelectorAll("p");

		expect(footer).toBeTruthy();
		expect(paragraphs?.length).toBe(2);
	});

	it("should pass accessibility tests", async () => {
		const { container } = render(<Footer />);
		const results = await axe(container);
		expect(results.violations).toHaveLength(0);
	});

	it("should contain copyright symbol", () => {
		const { container } = render(<Footer />);
		expect(container.textContent).toContain("©");
	});
});
