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
		".wp-block-masterblocks-copy-block button",
	);

	if (!navigator.clipboard) {
		console.error("Clipboard API not available");
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
					setTimeout(() => {
						this.textContent = oldText;
					}, 1000);
				},
				(err) => {
					console.error("Error copying JSON to clipboard", err);
				},
			);
		});
	});
});
/* eslint-enable no-console */
