"use strict";angular.module("icnfnt.services",["ngResource"]).factory("Glyph",function(e){return e("app/data/glyphs.json",{},{query:{method:"GET",isArray:!0}})});