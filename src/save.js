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
 function LogoGridSave(props) {
	const { id, logos } = props.attributes;
	    
	const logoList = logos.map(function(logo) {
		
		return (
			<>
			{logo.image && (
				<div class="grid-cell">
					<div class="cell-content">            
						<img src={logo.image} />
					</div>
				</div>              
			)}
			</>
		);
	});
	if (logos.length > 0) {
		return (
			<div className="grid-widget" id={id}>
					<div className="grid"  data-count={ props.attributes.logo_count }>
						{logoList}
					</div>
				</div>
		);
	} else return null;
}

export { LogoGridSave } ;
