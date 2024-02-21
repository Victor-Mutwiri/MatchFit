'use strict';

/**
 * jobseeker service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::jobseeker.jobseeker');
