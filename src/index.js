/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import {  LogoGridEdit } from './edit';
import {  LogoGridSave } from './save';


/**
 * Register Logo Grid Block
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType( 'create-block/wpcorp-block', {
	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __( 'Logo Grid Block', 'wpcorp-block' ),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __(
		'Display client logo in gird.',
		'wpcorp-block'
	),

	/**
	 * Blocks are grouped into categories to help users browse and discover them.
	 * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
	 * Custom Cateogry : `wpcorp`
	 */
	category: 'media',

	/**
	 * An icon property should be specified to make it easier to identify a block.
	 * These can be any of WordPress’ Dashicons, or a custom svg element.
	 */
	icon: 'archive',

	/**
	 * Optional block extended support features.
	 */
	supports: {
		// Removes support for an HTML mode.
		html: true,
	},

	/**
	 * Attributes
	 */
	attributes: {
		id: {
			source: "attribute",
			selector: ".grid-widget",
			attribute: "id"
		},
		logos : {
			source: "query",
			default: [],
			selector: ".cell-content",
			query: {
				image: {
					source: "attribute",
					selector: "img",
					attribute: "src"
				}
			}
		},
		logo_count: {
			type: 'string',
			default: '4',
		},
	},

	/**
	 * @see ./edit.js
	 */
	edit: LogoGridEdit,

	/**
	 * @see ./save.js
	 */
	save: LogoGridSave,
} );
