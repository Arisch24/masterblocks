<?php
/**
 * Dynamic Block Template.
 *
 * @param   array $attributes - A clean associative array of block attributes.
 * @param   array $block - All the block settings and attributes.
 * @param   string $content - The block inner HTML (usually empty unless using inner blocks).
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 *
 * @package MasterBlocks
 */

$masterblocks_button_name = $attributes['buttonName'];
$masterblocks_json_data   = $attributes['jsonData'] === '' ? '' : $attributes['jsonData'];

?>
<div <?php echo esc_attr( get_block_wrapper_attributes() ); ?>>
	<button class="wp-element-button" data-json="<?php echo esc_attr( $masterblocks_json_data ); ?>" tabindex="0" role="button"><?php echo esc_html( $masterblocks_button_name ); ?>
	</button>
</div>