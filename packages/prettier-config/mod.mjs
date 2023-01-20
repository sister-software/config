/**
 * @copyright Sister Software. All rights reserved.
 * @author Teffen Ellis, et al.
 * @license
 * See LICENSE file in the project root for full license information.
 */

import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const prettierConfig = require('./mod.cjs')

export default prettierConfig
