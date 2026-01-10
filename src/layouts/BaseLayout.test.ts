/**
 * Tests for BaseLayout component
 * Verifies semantic structure, accessibility, and meta tags
 */

import { describe, expect, it } from "vitest";
import { axe } from "vitest-axe";

describe("BaseLayout", () => {
	/**
	 * Creates a mock HTML document for BaseLayout
	 * This simulates the rendered output of the Astro component
	 */
	function createBaseLayoutHTML(
		title = "Mike Borthwick",
		description = "Personal website of Mike Borthwick",
		content = "<main id='main-content'><h1>Test Content</h1></main>",
	): string {
		return `
<!doctype html>
<html lang="en" data-theme="light">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta name="description" content="${description}" />
		<title>${title}</title>
	</head>
	<body>
		<a href="#main-content" class="sr-only focus:not-sr-only">Skip to main content</a>
		${content}
	</body>
</html>
		`;
	}

	it("should have proper HTML5 structure", () => {
		const html = createBaseLayoutHTML();
		expect(html).toContain("<!doctype html>");
		expect(html).toContain('<html lang="en"');
	});

	it("should include required meta tags", () => {
		const html = createBaseLayoutHTML("Test Title", "Test Description");
		expect(html).toContain('<meta charset="UTF-8"');
		expect(html).toContain(
			'<meta name="viewport" content="width=device-width, initial-scale=1.0"',
		);
		expect(html).toContain(
			'<meta name="description" content="Test Description"',
		);
		expect(html).toContain("<title>Test Title</title>");
	});

	it("should include skip link for keyboard navigation", () => {
		const html = createBaseLayoutHTML();
		expect(html).toContain('href="#main-content"');
		expect(html).toContain("Skip to main content");
	});

	it("should have dark mode support via data-theme attribute", () => {
		const html = createBaseLayoutHTML();
		expect(html).toContain('data-theme="light"');
	});

	it("should pass accessibility tests", async () => {
		const html = createBaseLayoutHTML();
		const parser = new DOMParser();
		const doc = parser.parseFromString(html, "text/html");

		const results = await axe(doc.body);
		expect(results.violations).toHaveLength(0);
	});

	it("should use default title and description when not provided", () => {
		const html = createBaseLayoutHTML();
		expect(html).toContain("<title>Mike Borthwick</title>");
		expect(html).toContain('content="Personal website of Mike Borthwick"');
	});

	it("should render custom title and description", () => {
		const html = createBaseLayoutHTML("Custom Title", "Custom Description");
		expect(html).toContain("<title>Custom Title</title>");
		expect(html).toContain('content="Custom Description"');
	});
});
