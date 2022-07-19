// *** Modules: Import / Export ***
// Tạo 1 module logger. Trước tiên thêm type = 'module' vào thẻ script trong html.

// *** import default ***
import logger from './logger.js'

logger('Message', 'log');
logger('Warning', 'warn');
logger('Error', 'error');


// *** import value ***

import {
    TYPE_LOG,
    TYPE_WARN,
    TYPE_ERROR
} from './constants.js'


logger('Message', TYPE_LOG);
logger('Message', TYPE_WARN);
logger('Message', TYPE_ERROR);


import * as constants from './constants.js';

logger('Message', constants.TYPE_LOG);
logger('Message', constants.TYPE_WARN);
logger('Message', constants.TYPE_ERROR);