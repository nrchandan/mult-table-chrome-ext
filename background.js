// Copyright 2020 LWD-2020. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onInstalled.addListener(function() {
  let number = 9;
  chrome.storage.sync.set({number: number}, function() {
    console.log("Default number is ", number);
  });

  chrome.storage.sync.get('number', function(data) {
    console.log('New number is ' + data.number);
  });
});
