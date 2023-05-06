<?php
/**
 * Plugin Name:       A Package Study Block
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Zakaria Binsaifullah
 * Author URI:        https://makegutenblock.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       boilerplate
 *
 * @package           @wordpress/create-block 
 */

 /**
  * @package Zero Configuration with @wordpress/create-block
  *  [boilerplate] && [BOILERPLATE] ===> Prefix
  */

// Stop Direct Access 
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Blocks Final Class
 */

final class BOILERPLATE_BLOCKS_CLASS {
	public function __construct() {

		// define constants
		$this->boilerplate_define_constants();

		// block initialization
		// add_action( 'init', [ $this, 'boilerplate_blocks_init' ] );

		// blocks category
		if( version_compare( $GLOBALS['wp_version'], '5.7', '<' ) ) {
			add_filter( 'block_categories', [ $this, 'boilerplate_register_block_category' ], 10, 2 );
		} else {
			add_filter( 'block_categories_all', [ $this, 'boilerplate_register_block_category' ], 10, 2 );
		}

		// enqueue block assets
		add_action( 'enqueue_block_assets', [ $this, 'boilerplate_external_libraries' ] );

		// enqueue_block_editor_assets 
		add_action( 'enqueue_block_editor_assets', [ $this, 'editor_blocks_assets' ] );

		// common scripts/styles
		// add_action('enqueue_block_assets', array($this, 'block_assets_loader'));
	}



	/**
	 * Enqueue Block Editor Assets
	 */
	public function editor_blocks_assets() {

		// dependencies
		$blocks_dependencies_file = require_once( plugin_dir_path( __FILE__ ) . 'build/index.asset.php' );
		$blocks_dependencies = isset( $blocks_dependencies_file['dependencies'] ) ? $blocks_dependencies_file['dependencies'] : array();
		$blocks_version = isset( $blocks_dependencies_file['version'] ) ? $blocks_dependencies_file['version'] : BOILERPLATE_VERSION;

		// $global_dependencies_file = require_once( plugin_dir_path( __FILE__ ) . 'build/global.asset.php' );
		// $global_dependencies = $global_dependencies_file['dependencies'];
		// $global_version = $global_dependencies_file['version'];

		/**
		 * Blocks scripts and styles
		 */
		wp_enqueue_script('blocks-scripts', plugin_dir_url( __FILE__ ) . 'build/index.js', $blocks_dependencies, $blocks_version, true);
		wp_enqueue_style('blocks-editor-only-styles', plugin_dir_url( __FILE__ ) . 'build/index.css', array('blocks-styles'), BOILERPLATE_VERSION);

		/**
		 * Global scripts
		 */
		// wp_enqueue_script('global-scripts', plugin_dir_url( __FILE__ ) . 'build/global.js', $blocks_dependencies, $blocks_version, true);

		// helper scripts
		wp_enqueue_script('helper-scripts', plugin_dir_url( __FILE__ ) . 'dist/helper.js', $blocks_dependencies, $blocks_version, true);
	}

	/**
	 * Common scripts and styles
	 */
	public function block_assets_loader() {
		wp_enqueue_style('blocks-styles', plugin_dir_url( __FILE__ ) . 'build/style-index.css', array(), BOILERPLATE_VERSION);
	}

	/**
	 * Initialize the plugin
	 */

	public static function init(){
		static $instance = false; 
		if( ! $instance ) {
			$instance = new self();
		}
		return $instance;
	}

	/**
	 * Define the plugin constants
	 */
	private function boilerplate_define_constants() {
		define( 'BOILERPLATE_VERSION', '1.0.0' );
		define( 'BOILERPLATE_URL', plugin_dir_url( __FILE__ ) );
		define( 'BOILERPLATE_INC_URL', BOILERPLATE_URL . 'includes/' );		
	}

	/**
	 * Blocks Registration 
	 */

	// public function boilerplate_register_block( $name, $options = array() ) {
	// 	register_block_type( __DIR__ . '/build/blocks/' . $name, $options );
	//  }

	/**
	 * Blocks Initialization
	*/
	// public function boilerplate_blocks_init() {
	// 	// register single block
	// 	$this->boilerplate_register_block( 'bootstrap', [
	// 		'render_callback' => [ $this, 'boilerplate_render_callback']
	// 	] );
	// 	$this->boilerplate_register_block( 'test' );
	// }

	// public function boilerplate_render_callback( $attributes, $content ) {
		
	// 	var_dump( $attributes );

	// 	return strtoupper( $content );
	// }

	/**
	 * Register Block Category
	 */

	public function boilerplate_register_block_category( $categories, $post ) {
		return array_merge(
			array(
				array(
					'slug'  => 'boilerplate',
					'title' => __( 'Boilerplate', 'boilerplate' ),
				),
			),
			$categories,
		);
	}

	/**
	 * Enqueue Block Assets
	 */
	public function boilerplate_external_libraries() {
		// enqueue JS
		wp_enqueue_script( 'boilerplate-lib', BOILERPLATE_INC_URL . 'js/plugin.js', array(), BOILERPLATE_VERSION, true );
	}
}

/**
 * Kickoff
*/

BOILERPLATE_BLOCKS_CLASS::init();
