const mergeUrl = require('./mergeUrl');
const parseURL = require('./parseURL');
const parseData = require('./parseData');
const dispatchRequest = require('./dispatchRequest');
const responseError = require('./createErrorObject');
const createResponse = require('./createResponse');
const mergeConfig = require('./mergeConfig');
const parseHeaders = require('./parseHeaders');
module.exports = {
	mergeUrl,
	parseURL,
	parseData,
	dispatchRequest,
	responseError,
	createResponse,
	mergeConfig,
	parseHeaders,
};
