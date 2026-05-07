/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

var hasMatch = function(s, p) {
    let starIndex = p.indexOf('*');

    let prefix = p.substring(0, starIndex);
    let suffix = p.substring(starIndex + 1);

    for (let i = 0; i <= s.length - prefix.length; i++) {

        if (s.substring(i, i + prefix.length) === prefix) {

            let remaining = s.substring(i + prefix.length);

            if (remaining.includes(suffix)) {
                return true;
            }
        }
    }

    return false;
};