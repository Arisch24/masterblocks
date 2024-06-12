<?php

/**
 *
 * Dynamic Block Template.
 * @param   array $attributes - A clean associative array of block attributes.
 * @param   array $block - All the block settings and attributes.
 * @param   string $content - The block inner HTML (usually empty unless using inner blocks).
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

$button_name = $attributes['buttonName'];
$json_data   = $attributes['jsonData'];

?>
<div <?php echo get_block_wrapper_attributes(); ?>>
	<button class="wp-element-button" data-json="<?php echo esc_attr( $json_data ); ?>" tabindex="0" role="button"><?php echo esc_html( $button_name ); ?>
	</button>
</div>