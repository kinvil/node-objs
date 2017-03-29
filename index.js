'use strict';

function isPlainObject(obj) {
    if (obj !== null && typeof obj === 'object') {
        return true;
    }
    return false;
}

function clone(obj) {
    var newObj, i = 0, length;

    if (!isPlainObject(obj)) {
        return obj;
    }

    if (Array.isArray(obj)) {
        newObj = [];
        length = obj.length
        for (; i < length; i += 1) {
            newObj[i] = clone(obj[i]);
        }
        return newObj;
    }

    newObj = {};
    var keys = Object.keys(obj)
    i = 0;
    length = keys.length
    for (; i < length; i += 1) {
        if (obj.hasOwnProperty(keys[i])) {
            newObj[keys[i]] = clone(obj[keys[i]]);
        }
    }
    return newObj;
}

function isEqual(obj1, obj2) {
    if (obj1 === null || typeof obj1 !== 'object' || obj2 === null || typeof obj2 !== 'object') {
        return false
    }
    var obj1Keys = Object.keys(obj1);
    var i = 0, lengthi = obj1Keys.length
    for (; i < lengthi; i += 1) {
        if (!obj2.hasOwnProperty(obj1Keys[i])) {
            return false;
        } else if (obj2[obj1Keys[i]] !== null && typeof obj2[obj1Keys[i]] === 'object' && Array.isArray(obj2[obj1Keys[i]])) {
            if (obj1[obj1Keys[i]].length !== obj2[obj1Keys[i]].length) {
                return false;
            }
            var j = 0, lengthj = obj1[obj1Keys[i]].length
            for (; j < lengthj; j += 1) {
                if (!isEqual(obj1[obj1Keys[i]][j], obj2[obj1Keys[i]][j])) {
                    return false;
                }
            }
        } else if (obj2[obj1Keys[i]] !== null && typeof obj2[obj1Keys[i]] === 'object' && !Array.isArray(obj2[obj1Keys[i]])) {
            if (!isEqual(obj1[obj1Keys[i]], obj2[obj1Keys[i]])) {
                return false;
            }
        } else if (obj1[obj1Keys[i]] !== obj2[obj1Keys[i]]) {
            return false;
        }
    }
    return true;
}

module.exports = {
    isPlainObject: isPlainObject,
    clone: clone,
    isEqual: isEqual
}
