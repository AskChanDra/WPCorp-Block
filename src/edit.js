/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * Retrieves the WP Editor Elements & Components
 * 
 */
import { MediaUpload, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, IconButton } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @param {Object} [props]           Properties passed from the editor.
 * @param {string} [props.className] Class name generated for the block.
 *
 * @return {WPElement} Element to render.
 */
 function LogoGridEdit( props ) {

	const { logos } = props.attributes;

	const inspectorControls = (
		<InspectorControls>
			<PanelBody title={ __( 'Logo Grid Setting' ) }>
				<TextControl
					label={ __( 'Column Count' ) }
					type="text"
					value={ props.attributes.col_count }
					onChange={ ( col_count ) => props.setAttributes( { col_count } ) }
				/>
			</PanelBody>
		</InspectorControls>
	);

	if (!props.attributes.id) {
		const id = `slide${Math.floor(Math.random() * 100)}`;
		props.setAttributes({
			id
		});
	}

	const logoList = logos
		.sort((a, b) => a.index - b.index)
		.map(logo => {
			return (
				<div className="wpcorp-logo-block">

						<div className="image-block-container">

							<IconButton
								className="trash-icon"
								onClick={open}
								icon="trash"
								onClick={() => {
									const newLogos = logos
										.filter(item => item.index != logo.index)
										.map(t => {
											if (t.index > logo.index) {
												t.index -= 1;
											}
											return t;
										});

									props.setAttributes({
										logos: newLogos
									});
								}}
								showTooltip="true"
								label={__("Rmove Logo", "wpcorp-block")}
							/> 

							<MediaUpload
								onSelect={media => {
									const image = media.sizes.medium
										? media.sizes.medium.url
										: media.url;
									const newObject = Object.assign({}, logo, {
										image: image
									});
									props.setAttributes({
										logos: [
											...logos.filter(
												item => item.index != logo.index
											),
											newObject
										]
									});
								}}
								type="image"
								value={logo.image}
								render={({ open }) =>
									!!logo.image ? (
										<div>
											<img className="logo_image" src={logo.image}  onClick={open} />
										</div>
									) : (
										<IconButton
										onClick={open}
										icon="format-image"
										showTooltip="true"
										label={__("Select logo", "wpcorp-block")}
											/> 
									)
								}
							/>
						</div>
						
				</div>
			);
		});

	return ([
		inspectorControls,	    	
		<div className={props.className}>
			{logoList}
			<button
				className="add-more-logo"
				onClick={content =>
					props.setAttributes({
						logos: [
							...props.attributes.logos,
							{
								index: props.attributes.logos.length,
								content: content,
							}
						]
					})
				}
			>
				+
			</button>
		</div>
	]);
}

export { LogoGridEdit };