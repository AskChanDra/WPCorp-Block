/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
 function BasicSave() {
	return (
		<p>
			{ __(
				'WPCorp Save !',
				'wpcorp-block'
			) }
		</p>
	);
}

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
 function LogoGridSave() {
	return (
		<p>
			{ __(
				'Logo Grid Save',
				'wpcorp-block'
			) }
		</p>
	);
}

export { BasicSave, LogoGridSave } ;
