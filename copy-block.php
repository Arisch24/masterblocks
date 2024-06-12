<?php

/**
 * Plugin Name:       MasterBlocks
 * Description:       Custom blocks to enhance the gutenberg editing experience.
 * Requires at least: 6.1
 * Requires PHP:      8.0
 * Version:           0.1.0
 * Author:            Arischvaran Puvanesvaran
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       masterblocks
 *
 * @package MasterBlocks
 */

namespace MasterBlocks;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

define( 'MASTERBLOCKS_VERSION', '0.1.0' );
define( 'MASTERBLOCKS_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
define( 'MASTERBLOCKS_PLUGIN_URL', plugin_dir_url( __FILE__ ) );

function masterblocks_init() {
	$directory_path = MASTERBLOCKS_PLUGIN_DIR . 'src/';
	$directories    = scandir( $directory_path, SCANDIR_SORT_NONE );

	foreach ( $directories as $directory ) {
		// Skip '.' and '..'
		if ( '.' === $directory || '..' === $directory ) {
			continue;
		}

		$file_path = $directory_path . $directory;

		// Check if directory and name is valid
		if ( is_dir( $file_path ) && preg_match( '/^[a-zA-Z0-9_-]+$/', $directory ) ) {
			if ( ! register_block_type( __DIR__ . '/' . 'build' . '/' . $directory ) ) {
				error_log( 'Failed to register block: ' . $directory );
			}
		}
	}
}
add_action( 'init', __NAMESPACE__ . '\masterblocks_init' );