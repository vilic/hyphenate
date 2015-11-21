(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", '../index'], factory);
    }
})(function (require, exports) {
    var index_1 = require('../index');
    var caseGroups = [
        {
            name: 'camel case',
            cases: [
                {
                    original: 'camelCaseString',
                    hyphenated: 'camel-case-string'
                },
                {
                    original: 'standalone',
                    hyphenated: 'standalone'
                },
                {
                    original: 'CapitalizedCase',
                    hyphenated: 'capitalized-case'
                },
                {
                    original: 'CapitalizedCase',
                    hyphenated: 'capitalized-case'
                },
                {
                    original: 'CapitalizedXCase',
                    hyphenated: 'capitalized-x-case'
                },
                {
                    original: 'JSONFile',
                    hyphenated: 'json-file'
                },
                {
                    original: 'HelloWORLD',
                    hyphenated: 'hello-world'
                },
                {
                    original: 'HowAREYou',
                    hyphenated: 'how-are-you'
                }
            ]
        },
        {
            name: 'phrase with number',
            cases: [
                {
                    original: 'camelCaseString8',
                    hyphenated: 'camel-case-string8'
                },
                {
                    original: '7Days',
                    hyphenated: '7-days'
                }
            ]
        },
        {
            name: 'splitted',
            cases: [
                {
                    original: '-hello,world',
                    hyphenated: 'hello-world'
                },
                {
                    original: '--hello,world-',
                    hyphenated: 'hello-world'
                },
                {
                    original: 'already[]splitted_by;;something',
                    hyphenated: 'already-splitted-by-something'
                },
                {
                    original: '[]And yes, man~',
                    hyphenated: 'and-yes-man'
                }
            ]
        },
        {
            name: 'with given connector',
            cases: [
                {
                    original: 'someText',
                    hyphenated: 'some_text'
                },
                {
                    original: '_hello__world',
                    hyphenated: 'hello_world'
                }
            ],
            connector: '_'
        }
    ];
    describe('hyphenate', function () {
        it('should export `default` as well as `hyphenate`', function () {
            index_1.default.should.equal(index_1.hyphenate);
        });
        var _loop_1 = function(caseGroup) {
            it('should hyphenate ' + caseGroup.name, function () {
                for (var _i = 0, _a = caseGroup.cases; _i < _a.length; _i++) {
                    var oneCase = _a[_i];
                    index_1.default(oneCase.original, caseGroup.connector).should.equal(oneCase.hyphenated);
                }
            });
        };
        for (var _i = 0, caseGroups_1 = caseGroups; _i < caseGroups_1.length; _i++) {
            var caseGroup = caseGroups_1[_i];
            _loop_1(caseGroup);
        }
    });
});
//# sourceMappingURL=test.js.map