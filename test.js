var expect = require('expect.js');
var isPlainObject = require('./index').isPlainObject;
var clone = require('./index').clone;
var isEqual = require('./index').isEqual;
var obj, cloneObj;

describe('test clone object', function () {
    before(function () {
        obj = {
            "list": {
                "0oVwOM": {
                    "id": "0oVwOM",
                    "parent": "pTlmbh",
                    "name": "New node",
                    "created_at": 1384289621
                },
                "aHxe8k": {
                    "id": "aHxe8k",
                    "parent": "Fhs2hL",
                    "name": "hjkhjkhjk",
                    "created_at": 1384354593
                },
                "Fhs2hL": {
                    "id": "Fhs2hL",
                    "parent": "root",
                    "name": "test",
                    "created_at": 1383403881
                },
                "HYPSgv": {
                    "id": "HYPSgv",
                    "parent": "0oVwOM",
                    "name": "New node",
                    "created_at": 1384342657
                },
                "osFIMf": {
                    "id": "osFIMf",
                    "parent": "root",
                    "name": "New node",
                    "created_at": 1384354584
                },
                "PsovXE": {
                    "id": "PsovXE",
                    "parent": "root",
                    "name": "hjkhjkhjk",
                    "created_at": 1384354589
                },
                "pTlmbh": {
                    "id": "pTlmbh",
                    "parent": "Fhs2hL",
                    "name": "New node",
                    "created_at": 1384289277
                },
                "RbXhdJ": {
                    "id": "RbXhdJ",
                    "parent": "root",
                    "name": "empty",
                    "created_at": 1384359806
                }
            },
            "maps": {
                "parent": {
                    "pTlmbh": {
                        "0oVwOM": {
                            "id": "0oVwOM",
                            "parent": "pTlmbh",
                            "name": "New node",
                            "created_at": 1384289621
                        }
                    },
                    "Fhs2hL": {
                        "aHxe8k": {
                            "id": "aHxe8k",
                            "parent": "Fhs2hL",
                            "name": "hjkhjkhjk",
                            "created_at": 1384354593
                        },
                        "pTlmbh": {
                            "id": "pTlmbh",
                            "parent": "Fhs2hL",
                            "name": "New node",
                            "created_at": 1384289277
                        }
                    },
                    "root": {
                        "Fhs2hL": {
                            "id": "Fhs2hL",
                            "parent": "root",
                            "name": "test",
                            "created_at": 1383403881
                        },
                        "osFIMf": {
                            "id": "osFIMf",
                            "parent": "root",
                            "name": "New node",
                            "created_at": 1384354584
                        },
                        "PsovXE": {
                            "id": "PsovXE",
                            "parent": "root",
                            "name": "hjkhjkhjk",
                            "created_at": 1384354589
                        },
                        "RbXhdJ": {
                            "id": "RbXhdJ",
                            "parent": "root",
                            "name": "empty",
                            "created_at": 1384359806
                        }
                    },
                    "0oVwOM": {
                        "HYPSgv": {
                            "id": "HYPSgv",
                            "parent": "0oVwOM",
                            "name": "New node",
                            "created_at": 1384342657
                        }
                    }
                },
                "path": [
                    ["Fhs2hL"],
                    ["Fhs2hL", "aHxe8k"],
                    ["Fhs2hL", "pTlmbh"],
                    ["Fhs2hL", "pTlmbh", "0oVwOM"],
                    ["Fhs2hL", "pTlmbh", "0oVwOM", "HYPSgv"],
                    ["osFIMf"],
                    ["PsovXE"],
                    ["RbXhdJ"]
                ]
            }
        };
        cloneObj = clone(obj);
    });

    it('copy object\'s type should be "object"', function () {
        expect(typeof cloneObj).to.be('object');
        expect(isPlainObject(cloneObj)).to.be(true)
    });

    it('copy object\'s keys should equal to origin object', function () {
        var cloneObjKeylength = Object.keys(cloneObj).length;
        var objKeyLength = Object.keys(obj).length;
        expect(cloneObjKeylength).to.eql(objKeyLength);
    });

    it('copy object should equal origin object', function () {
        var stringify1 = JSON.stringify(cloneObj);
        var stringify2 = JSON.stringify(obj);
        expect(stringify1).to.eql(stringify2);
        isEqual(obj, cloneObj);
        expect(isEqual(obj, cloneObj)).to.be(true);
    });

    it('copy object change value will not change origin object value', function () {
        cloneObj.list.aHxe8k.id = 'abcde';
        var id1 = cloneObj.list.aHxe8k.id;
        var id2 = obj.list.aHxe8k.id;
        expect(id1).not.to.eql(id2);
        expect(isEqual(obj, cloneObj)).to.be(false);
    });
})