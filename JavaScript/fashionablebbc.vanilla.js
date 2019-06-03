"use strict";
// MIT License
// 
// Copyright (c) 2019 YourNetworkNerd (https://twitter.com/YourNetworkNerd)
// 
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
// ===============================================================================
// This script was inspired by Taylor. The Gay Fasionista Ram
// ===============================================================================
// Requires: This script requires no Node Modules
// ===============================================================================
let bbCodes = {
    'br': {
        code: '\\[br\\]',
        sub: '<br>'
    },
    'b': {
        code: '\\[b\\](.+?)\\[/b\\]',
        sub: '<strong>$1</strong>'
    },
    'i': {
        code: '\\[i\\](.+?)\\[/i\\]',
        sub: '<i>$1</i>'
    },
    'u': {
        code: '\\[u\\](.+?)\\[/u\\]',
        sub: '<u>$1</u>'
    },
    's': {
        code: '\\[s\\](.+?)\\[/s\\]',
        sub: '<s>$1</s>'
    },
    'img': {
        code: '\\[img\\](.+?)\\[/img\\]',
        sub: '<img src="$1">'
    },
    'email': {
        code: '\\[email\\](.+?)\\[/email\\]',
        sub: '<a href="mailto:$1">$1</a>'
    },
    'a': {
        code: '\\[url\\](.+?)\\[/url\\]',
        sub: '<a href="$1">$1</a>'
    },
    'url': {
        code: '\\[url\\](.+?)\\[/url\\]',
        sub: '<a href="$1">$1</a>'
    },
    'color': {
        code: '\\[color=(.+?)\\](.+?)\\[/color\\]',
        sub: '<span style="color:$1">$2</span>'
    },
    'size': {
        code: '\\[size=([0-9]+)\\](.+?)\\[/size\\]',
        sub: '<span style="font-size:$1px">$2</span>'
    }
};
class FashionableBBC {
    constructor(options) {
        this.default = ['b', 'i', 's', 'u'];
        this.tags = (!options.tags) ? this.default : options.tags;
    }
    _parseBBCode(tag, input) {
        let thisCode = bbCodes[tag];
        let tempRegExp = new RegExp(thisCode.code, 'gmi');
        return input.replace(tempRegExp, thisCode.sub);
    }
    parse(input) {
        for (let i = 0; i < this.tags.length; i++) {
            input = this._parseBBCode(this.tags[i], input);
        }
        return input;
    }
}
//# sourceMappingURL=fashionablebbc.vanilla.js.map