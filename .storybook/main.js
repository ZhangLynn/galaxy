const path = require('path')
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ],
	"webpackFinal": async (defaultConfig, { configType }) => {
		defaultConfig.module.rules.push(
			{
				test: /\.less$/,
				loaders: ['style-loader', 'css-loader', 'less-loader'],
				include: path.resolve(__dirname, '../src')
			}
		)
		defaultConfig.module.rules.map(rule => {
			console.log('<----' + JSON.stringify(rule) + '---->')
		})

		return defaultConfig
	},
}
