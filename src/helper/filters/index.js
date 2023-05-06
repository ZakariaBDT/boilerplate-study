wp.hooks.addFilter(
	'blocks.registerBlockType',
	'my-plugin/my-block',
	(settings, name) => {
		if (name === 'boilerplate/test') {
			// eslint-disable-next-line no-console
			console.log(settings);
			settings.supports = {
				...settings.supports,
				align: ['wide', 'full'],
			};
		}
		return settings;
	}
);
