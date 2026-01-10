/**
 * Tests for About component
 * Verifies semantic structure, accessibility, and content
 */

import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { axe } from "vitest-axe";
import About from "./About";

describe("About", () => {
	afterEach(() => {
		cleanup();
	});

	it("should use semantic article element", () => {
		const { container } = render(<About />);
		const article = container.querySelector("article");
		expect(article).toBeTruthy();
	});

	it("should display heading with correct text", () => {
		const { container } = render(<About />);
		const h2 = container.querySelector("h2");
		expect(h2?.textContent).toBe("About");
	});

	it("should display multiple paragraphs of content", () => {
		const { container } = render(<About />);
		const paragraphs = container.querySelectorAll("p");
		expect(paragraphs.length).toBeGreaterThan(0);
	});

	it("should have proper semantic structure", () => {
		const { container } = render(<About />);

		const article = container.querySelector("article");
		const h2 = article?.querySelector("h2");
		const contentDiv = article?.querySelector("div");

		expect(article).toBeTruthy();
		expect(h2).toBeTruthy();
		expect(contentDiv).toBeTruthy();
	});

	it("should pass accessibility tests", async () => {
		const { container } = render(<About />);
		const results = await axe(container);
		expect(results.violations).toHaveLength(0);
	});
});
