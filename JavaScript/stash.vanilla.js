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
// This script was inspired by my lovely ladies Pot Smoker Maned Wolf - Maxxie
// ===============================================================================
// Requires: This Module Requires No Node Modules
// ===============================================================================
class Stash {
    constructor(prefix) {
        this.prefix = (!prefix) ? 'stash:' : prefix;
    }
    store(key, value) {
        if (typeof value !== 'string') {
            let toSave = JSON.stringify(value);
            localStorage.setItem(`${this.prefix}${key}`, toSave);
        }
        else {
            localStorage.setItem(`${this.prefix}${key}`, value);
        }
    }
    fetch(key) {
        if (key.startsWith(this.prefix)) {
            if (localStorage.getItem(key)) {
                let data = localStorage.getItem(key);
                try {
                    let thisData = JSON.parse(data);
                    if (thisData && typeof thisData == 'object') {
                        return thisData;
                    }
                }
                catch (e) {
                    return data;
                }
            }
            else {
                return undefined;
            }
        }
        else {
            let fullKey = this.prefix + key;
            if (localStorage.getItem(fullKey)) {
                let data = localStorage.getItem(fullKey);
                try {
                    let thisData = JSON.parse(data);
                    if (thisData && typeof thisData == 'object') {
                        return thisData;
                    }
                }
                catch (e) {
                    return data;
                }
            }
            else {
                return undefined;
            }
        }
    }
    empty() {
        let thisStashKeys = [];
        for (let key in localStorage) {
            if (key.startsWith(this.prefix)) {
                thisStashKeys.push(key);
            }
        }
        thisStashKeys.forEach((key) => {
            localStorage.removeItem(key);
        });
    }
}
