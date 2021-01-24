/**
 * @author: zhangling
 * @date: 2021/1/24
 * @description:
 */

const {
	override,
	addLessLoader,
} = require('customize-cra');

module.exports = override(
	// 添加 less-loader
	addLessLoader({
		lessOptions: {
			javascriptEnabled: true
		},
	})
);
