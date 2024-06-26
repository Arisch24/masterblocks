/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	RichText,
	InspectorControls,
} from "@wordpress/block-editor";

import {
	PanelBody,
	PanelRow,
	TextareaControl,
	ColorPicker,
	BaseControl,
} from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	return (
		<>
			{/* Begin InspectorControls Zone */}
			<InspectorControls>
				<PanelBody title={__("Extras")}>
					<PanelRow>
						<TextareaControl
							label={__("JSON Data")}
							help={__("Enter your JSON data")}
							onChange={(jsonData) => {
								setAttributes({ jsonData });
							}}
							value={__(attributes.jsonData)}
						></TextareaControl>
					</PanelRow>
					<PanelRow>
						<BaseControl label={__("Button Text Color")}>
							<ColorPicker
								onChange={(btnTextColor) => {
									setAttributes({ btnTextColor });
								}}
								color={
									attributes.btnTextColor === ""
										? attributes.btnTextColor.default
										: attributes.btnTextColor
								}
							></ColorPicker>
						</BaseControl>
					</PanelRow>
					<PanelRow>
						<BaseControl label={__("Button Background Color")}>
							<ColorPicker
								onChange={(btnBgColor) => {
									setAttributes({ btnBgColor });
								}}
								color={
									attributes.btnBgColor === ""
										? attributes.btnBgColor.default
										: attributes.btnBgColor
								}
							></ColorPicker>
						</BaseControl>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			{/* End InspectorControls Zone */}
			<div {...useBlockProps()}>
				<div className="is-layout-flex">
					<RichText
						value={
							attributes.buttonName !== "" ? attributes.buttonName : "Click Me"
						}
						className="wp-element-button"
						placeholder={__("Button text")}
						onChange={(buttonName) => {
							setAttributes({
								buttonName,
							});
						}}
						style={{
							color: attributes.btnTextColor,
							backgroundColor: attributes.btnBgColor,
						}}
					></RichText>
				</div>
			</div>
		</>
	);
}
