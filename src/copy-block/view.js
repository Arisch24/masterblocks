/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

/* eslint-disable no-console */
document.addEventListener("DOMContentLoaded", function () {
	let copyBtn = document.querySelectorAll(
		".wp-block-masterblocks-copy-block .wp-element-button",
	);

	if (!navigator.clipboard) {
		// Clipboard API not available
		console.error("Clipboard API not available in this browser.");
		return;
	}
	copyBtn.forEach((el) => {
		el.addEventListener("click", function (e) {
			let jsonData = e.target.getAttribute("data-json");
			let oldText = this.textContent.trim();
			let newText = "Copied!";

			navigator.clipboard.writeText(jsonData).then(
				() => {
					this.textContent = newText;
					this.setAttribute("aria-label", newText);
					setTimeout(() => {
						this.textContent = oldText;
						this.setAttribute("aria-label", oldText);
					}, 1000);
				},
				() => {
					console.error("Error copying JSON to clipboard");
				},
			);
		});
	});
});
/* eslint-enable no-console */
