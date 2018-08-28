/* Module header based on https://github.com/umdjs/umd/blob/master/templates/returnExports.js
 */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals (root is window)
        root.igv = factory(root.jQuery);
    }
 }(this, function ($) {
    var jQuery = $;
//
//     // Just return a value to define the module export.
//     // This example returns an object, but the module
//     // can return a function as the exported value.
//     return igv;
//
// }));

