var wwc_keycode = "8d3fa467dd86a3204b3451caa695811b";
(() => {
  var _0x134417 = {
    "./node_modules/.pnpm/@colyseus+schema@2.0.37/node_modules/@colyseus/schema/build/umd/index.js": function (_0xad32df, _0x4d176b) {
      (function (_0x5118b5, _0x1ef4eb) {
        if (true) {
          _0x1ef4eb(_0x4d176b);
        } else {
          0;
        }
      })(this, function (_0x39914a) {
        'use strict';

        function _0xfc630f(_0x53c03c, _0x283aee) {
          _0xfc630f = Object.setPrototypeOf || {
            "__proto__": []
          } instanceof Array && function (_0xc8277a, _0x50a363) {
            _0xc8277a.__proto__ = _0x50a363;
          } || function (_0x3711c1, _0x180a0b) {
            for (var _0x2b2ac3 in _0x180a0b) {
              if (Object.prototype.hasOwnProperty.call(_0x180a0b, _0x2b2ac3)) {
                _0x3711c1[_0x2b2ac3] = _0x180a0b[_0x2b2ac3];
              }
            }
          };
          return _0xfc630f(_0x53c03c, _0x283aee);
        }
        function _0x18872e(_0x33fa4e, _0x429577) {
          if (typeof _0x429577 !== "function" && _0x429577 !== null) {
            throw new TypeError("Class extends value " + String(_0x429577) + " is not a constructor or null");
          }
          _0xfc630f(_0x33fa4e, _0x429577);
          function _0xe0a4ec() {
            this.constructor = _0x33fa4e;
          }
          _0x33fa4e.prototype = _0x429577 === null ? Object.create(_0x429577) : (_0xe0a4ec.prototype = _0x429577.prototype, new _0xe0a4ec());
        }
        function _0x4d51b1(_0x34691b, _0x126592, _0x2b6e26, _0x543362) {
          var _0x40463b = arguments.length;
          var _0x57bb09 = _0x40463b < 3 ? _0x126592 : _0x543362 === null ? _0x543362 = Object.getOwnPropertyDescriptor(_0x126592, _0x2b6e26) : _0x543362;
          var _0x45ec97;
          if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
            _0x57bb09 = Reflect.decorate(_0x34691b, _0x126592, _0x2b6e26, _0x543362);
          } else {
            for (var _0x1fb7cd = _0x34691b.length - 1; _0x1fb7cd >= 0; _0x1fb7cd--) {
              if (_0x45ec97 = _0x34691b[_0x1fb7cd]) {
                _0x57bb09 = (_0x40463b < 3 ? _0x45ec97(_0x57bb09) : _0x40463b > 3 ? _0x45ec97(_0x126592, _0x2b6e26, _0x57bb09) : _0x45ec97(_0x126592, _0x2b6e26)) || _0x57bb09;
              }
            }
          }
          if (_0x40463b > 3 && _0x57bb09) {
            Object.defineProperty(_0x126592, _0x2b6e26, _0x57bb09);
          }
          return _0x57bb09;
        }
        function _0x4f2579(_0x496d19, _0xa357ea, _0x3020a5) {
          if (_0x3020a5 || arguments.length === 2) {
            for (var _0x3dcea9 = 0, _0x2365f6 = _0xa357ea.length, _0x347ddf; _0x3dcea9 < _0x2365f6; _0x3dcea9++) {
              if (_0x347ddf || !(_0x3dcea9 in _0xa357ea)) {
                if (!_0x347ddf) {
                  _0x347ddf = Array.prototype.slice.call(_0xa357ea, 0, _0x3dcea9);
                }
                _0x347ddf[_0x3dcea9] = _0xa357ea[_0x3dcea9];
              }
            }
          }
          return _0x496d19.concat(_0x347ddf || Array.prototype.slice.call(_0xa357ea));
        }
        if (typeof SuppressedError === "function") {
          SuppressedError;
        } else {
          (function (_0x170c61, _0x32c4c2, _0x1f14aa) {
            var _0x54b320 = new Error(_0x1f14aa);
            _0x54b320.name = "SuppressedError";
            _0x54b320.error = _0x170c61;
            _0x54b320.suppressed = _0x32c4c2;
            return _0x54b320;
          });
        }
        var _0x21580f = 255;
        var _0x68369b = 213;
        _0x39914a.OPERATION = undefined;
        (function (_0x4ed6c2) {
          _0x4ed6c2[_0x4ed6c2.ADD = 128] = "ADD";
          _0x4ed6c2[_0x4ed6c2.REPLACE = 0] = "REPLACE";
          _0x4ed6c2[_0x4ed6c2.DELETE = 64] = "DELETE";
          _0x4ed6c2[_0x4ed6c2.DELETE_AND_ADD = 192] = "DELETE_AND_ADD";
          _0x4ed6c2[_0x4ed6c2.TOUCH = 1] = "TOUCH";
          _0x4ed6c2[_0x4ed6c2.CLEAR = 10] = "CLEAR";
        })(_0x39914a.OPERATION ||= {});
        var _0x4408f8 = function () {
          function _0x4dce13(_0x41c829, _0x587eab, _0x412e3f) {
            this.changed = false;
            this.changes = new Map();
            this.allChanges = new Set();
            this.caches = {};
            this.currentCustomOperation = 0;
            this.ref = _0x41c829;
            this.setParent(_0x587eab, _0x412e3f);
          }
          _0x4dce13.prototype.setParent = function (_0xf0122e, _0xa9cca, _0x1a81c9) {
            var _0x5191a1 = this;
            if (!this.indexes) {
              this.indexes = this.ref instanceof _0x456512 ? this.ref._definition.indexes : {};
            }
            this.parent = _0xf0122e;
            this.parentIndex = _0x1a81c9;
            if (!_0xa9cca) {
              return;
            }
            this.root = _0xa9cca;
            if (this.ref instanceof _0x456512) {
              var _0x2c90fb = this.ref._definition;
              for (var _0x4cd8ff in _0x2c90fb.schema) {
                var _0x1e400e = this.ref[_0x4cd8ff];
                if (_0x1e400e && _0x1e400e.$changes) {
                  var _0x2d70b8 = _0x2c90fb.indexes[_0x4cd8ff];
                  _0x1e400e.$changes.setParent(this.ref, _0xa9cca, _0x2d70b8);
                }
              }
            } else if (typeof this.ref === "object") {
              this.ref.forEach(function (_0x471fc4, _0x29611d) {
                if (_0x471fc4 instanceof _0x456512) {
                  var _0x4b91bc = _0x471fc4.$changes;
                  var _0x482da5 = _0x5191a1.ref.$changes.indexes[_0x29611d];
                  _0x4b91bc.setParent(_0x5191a1.ref, _0x5191a1.root, _0x482da5);
                }
              });
            }
          };
          _0x4dce13.prototype.operation = function (_0x45fb05) {
            this.changes.set(--this.currentCustomOperation, _0x45fb05);
          };
          _0x4dce13.prototype.change = function (_0x5ee595, _0xad4c61 = _0x39914a.OPERATION.ADD) {
            var _0x3f192f = typeof _0x5ee595 === "number" ? _0x5ee595 : this.indexes[_0x5ee595];
            this.assertValidIndex(_0x3f192f, _0x5ee595);
            var _0x1d4170 = this.changes.get(_0x3f192f);
            if (!_0x1d4170 || _0x1d4170.op === _0x39914a.OPERATION.DELETE || _0x1d4170.op === _0x39914a.OPERATION.TOUCH) {
              this.changes.set(_0x3f192f, {
                op: !_0x1d4170 ? _0xad4c61 : _0x1d4170.op === _0x39914a.OPERATION.DELETE ? _0x39914a.OPERATION.DELETE_AND_ADD : _0xad4c61,
                index: _0x3f192f
              });
            }
            this.allChanges.add(_0x3f192f);
            this.changed = true;
            this.touchParents();
          };
          _0x4dce13.prototype.touch = function (_0x353721) {
            var _0xbdeaf7 = typeof _0x353721 === "number" ? _0x353721 : this.indexes[_0x353721];
            this.assertValidIndex(_0xbdeaf7, _0x353721);
            if (!this.changes.has(_0xbdeaf7)) {
              this.changes.set(_0xbdeaf7, {
                op: _0x39914a.OPERATION.TOUCH,
                index: _0xbdeaf7
              });
            }
            this.allChanges.add(_0xbdeaf7);
            this.touchParents();
          };
          _0x4dce13.prototype.touchParents = function () {
            if (this.parent) {
              this.parent.$changes.touch(this.parentIndex);
            }
          };
          _0x4dce13.prototype.getType = function (_0x206c74) {
            if (this.ref._definition) {
              var _0x17bc50 = this.ref._definition;
              return _0x17bc50.schema[_0x17bc50.fieldsByIndex[_0x206c74]];
            } else {
              var _0x17bc50 = this.parent._definition;
              var _0x4b90b6 = _0x17bc50.schema[_0x17bc50.fieldsByIndex[this.parentIndex]];
              return Object.values(_0x4b90b6)[0];
            }
          };
          _0x4dce13.prototype.getChildrenFilter = function () {
            var _0x17ab38 = this.parent._definition.childFilters;
            return _0x17ab38 && _0x17ab38[this.parentIndex];
          };
          _0x4dce13.prototype.getValue = function (_0x1c4087) {
            return this.ref.getByIndex(_0x1c4087);
          };
          _0x4dce13.prototype.delete = function (_0x3bb97e) {
            var _0x354074 = typeof _0x3bb97e === "number" ? _0x3bb97e : this.indexes[_0x3bb97e];
            if (_0x354074 === undefined) {
              console.warn(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index: ${_0x3bb97e} (${_0x354074})`);
              return;
            }
            var _0x53b07a = this.getValue(_0x354074);
            this.changes.set(_0x354074, {
              op: _0x39914a.OPERATION.DELETE,
              index: _0x354074
            });
            this.allChanges.delete(_0x354074);
            delete this.caches[_0x354074];
            if (_0x53b07a && _0x53b07a.$changes) {
              _0x53b07a.$changes.parent = undefined;
            }
            this.changed = true;
            this.touchParents();
          };
          _0x4dce13.prototype.discard = function (_0x7efa9e, _0x2f801c) {
            var _0x187a8b = this;
            if (_0x7efa9e === undefined) {
              _0x7efa9e = false;
            }
            if (_0x2f801c === undefined) {
              _0x2f801c = false;
            }
            if (!(this.ref instanceof _0x456512)) {
              this.changes.forEach(function (_0x2a2e5a) {
                if (_0x2a2e5a.op === _0x39914a.OPERATION.DELETE) {
                  var _0xc0556 = _0x187a8b.ref.getIndex(_0x2a2e5a.index);
                  delete _0x187a8b.indexes[_0xc0556];
                }
              });
            }
            this.changes.clear();
            this.changed = _0x7efa9e;
            if (_0x2f801c) {
              this.allChanges.clear();
            }
            this.currentCustomOperation = 0;
          };
          _0x4dce13.prototype.discardAll = function () {
            var _0x1b98c7 = this;
            this.changes.forEach(function (_0x156ed8) {
              var _0x3df057 = _0x1b98c7.getValue(_0x156ed8.index);
              if (_0x3df057 && _0x3df057.$changes) {
                _0x3df057.$changes.discardAll();
              }
            });
            this.discard();
          };
          _0x4dce13.prototype.cache = function (_0x3288fe, _0x5b44b6) {
            this.caches[_0x3288fe] = _0x5b44b6;
          };
          _0x4dce13.prototype.clone = function () {
            return new _0x4dce13(this.ref, this.parent, this.root);
          };
          _0x4dce13.prototype.ensureRefId = function () {
            if (this.refId !== undefined) {
              return;
            }
            this.refId = this.root.getNextUniqueId();
          };
          _0x4dce13.prototype.assertValidIndex = function (_0x2a49b7, _0x58cf3f) {
            if (_0x2a49b7 === undefined) {
              throw new Error(`ChangeTree: missing index for field "${_0x58cf3f}"`);
            }
          };
          return _0x4dce13;
        }();
        function _0x162952(_0xf2c9bd, _0x2ffe6e, _0x50f090, _0x12e887) {
          if (!_0xf2c9bd[_0x2ffe6e]) {
            _0xf2c9bd[_0x2ffe6e] = [];
          }
          _0xf2c9bd[_0x2ffe6e].push(_0x50f090);
          if (_0x12e887 === null || _0x12e887 === undefined) {
            undefined;
          } else {
            _0x12e887.forEach(function (_0x531b94, _0x1cf066) {
              return _0x50f090(_0x531b94, _0x1cf066);
            });
          }
          return function () {
            return _0x129b8e(_0xf2c9bd[_0x2ffe6e], _0xf2c9bd[_0x2ffe6e].indexOf(_0x50f090));
          };
        }
        function _0x26bf06(_0x206110) {
          var _0x2c1b15 = this;
          var _0xe03294 = typeof this.$changes.getType() !== "string";
          this.$items.forEach(function (_0x189276, _0x5b9da9) {
            _0x206110.push({
              refId: _0x2c1b15.$changes.refId,
              op: _0x39914a.OPERATION.DELETE,
              field: _0x5b9da9,
              value: undefined,
              previousValue: _0x189276
            });
            if (_0xe03294) {
              _0x2c1b15.$changes.root.removeRef(_0x189276.$changes.refId);
            }
          });
        }
        function _0x129b8e(_0x25edbb, _0xdd318b) {
          if (_0xdd318b === -1 || _0xdd318b >= _0x25edbb.length) {
            return false;
          }
          var _0x564c65 = _0x25edbb.length - 1;
          for (var _0x3a7911 = _0xdd318b; _0x3a7911 < _0x564c65; _0x3a7911++) {
            _0x25edbb[_0x3a7911] = _0x25edbb[_0x3a7911 + 1];
          }
          _0x25edbb.length = _0x564c65;
          return true;
        }
        function _0x24be50(_0x2c1464, _0x5c3c42) {
          var _0x5cc999 = _0x2c1464.toString();
          var _0x1e3a4c = _0x5c3c42.toString();
          if (_0x5cc999 < _0x1e3a4c) {
            return -1;
          } else if (_0x5cc999 > _0x1e3a4c) {
            return 1;
          } else {
            return 0;
          }
        }
        function _0x462239(_0x20b3f6) {
          _0x20b3f6.$proxy = true;
          _0x20b3f6 = new Proxy(_0x20b3f6, {
            get: function (_0x406d44, _0x41ea86) {
              if (typeof _0x41ea86 !== "symbol" && !isNaN(_0x41ea86)) {
                return _0x406d44.at(_0x41ea86);
              } else {
                return _0x406d44[_0x41ea86];
              }
            },
            set: function (_0x1edaf6, _0x26ce35, _0x4c2306) {
              if (typeof _0x26ce35 !== "symbol" && !isNaN(_0x26ce35)) {
                var _0x5ee853 = Array.from(_0x1edaf6.$items.keys());
                var _0x3d4c4d = parseInt(_0x5ee853[_0x26ce35] || _0x26ce35);
                if (_0x4c2306 === undefined || _0x4c2306 === null) {
                  _0x1edaf6.deleteAt(_0x3d4c4d);
                } else {
                  _0x1edaf6.setAt(_0x3d4c4d, _0x4c2306);
                }
              } else {
                _0x1edaf6[_0x26ce35] = _0x4c2306;
              }
              return true;
            },
            deleteProperty: function (_0x46b1ef, _0xf6d1d7) {
              if (typeof _0xf6d1d7 === "number") {
                _0x46b1ef.deleteAt(_0xf6d1d7);
              } else {
                delete _0x46b1ef[_0xf6d1d7];
              }
              return true;
            },
            has: function (_0x1b7aa8, _0x2be917) {
              if (typeof _0x2be917 !== "symbol" && !isNaN(Number(_0x2be917))) {
                return _0x1b7aa8.$items.has(Number(_0x2be917));
              }
              return Reflect.has(_0x1b7aa8, _0x2be917);
            }
          });
          return _0x20b3f6;
        }
        var _0x426507 = function () {
          function _0x457574() {
            var _0x12cc47 = [];
            for (var _0x45f64f = 0; _0x45f64f < arguments.length; _0x45f64f++) {
              _0x12cc47[_0x45f64f] = arguments[_0x45f64f];
            }
            this.$changes = new _0x4408f8(this);
            this.$items = new Map();
            this.$indexes = new Map();
            this.$refId = 0;
            this.push.apply(this, _0x12cc47);
          }
          _0x457574.prototype.onAdd = function (_0x3714bb, _0xa5ef32 = true) {
            return _0x162952(this.$callbacks ||= {}, _0x39914a.OPERATION.ADD, _0x3714bb, _0xa5ef32 ? this.$items : undefined);
          };
          _0x457574.prototype.onRemove = function (_0x7341ad) {
            return _0x162952(this.$callbacks ||= {}, _0x39914a.OPERATION.DELETE, _0x7341ad);
          };
          _0x457574.prototype.onChange = function (_0x582a9b) {
            return _0x162952(this.$callbacks ||= {}, _0x39914a.OPERATION.REPLACE, _0x582a9b);
          };
          _0x457574.is = function (_0x2debc3) {
            return Array.isArray(_0x2debc3) || _0x2debc3.array !== undefined;
          };
          Object.defineProperty(_0x457574.prototype, "length", {
            get: function () {
              return this.$items.size;
            },
            set: function (_0x15aebc) {
              if (_0x15aebc === 0) {
                this.clear();
              } else {
                this.splice(_0x15aebc, this.length - _0x15aebc);
              }
            },
            enumerable: false,
            configurable: true
          });
          _0x457574.prototype.push = function () {
            var _0x205339 = this;
            var _0x250003 = [];
            for (var _0x55b8b2 = 0; _0x55b8b2 < arguments.length; _0x55b8b2++) {
              _0x250003[_0x55b8b2] = arguments[_0x55b8b2];
            }
            var _0x418a6a;
            _0x250003.forEach(function (_0x590591) {
              _0x418a6a = _0x205339.$refId++;
              _0x205339.setAt(_0x418a6a, _0x590591);
            });
            return _0x418a6a;
          };
          _0x457574.prototype.pop = function () {
            var _0x117718 = Array.from(this.$indexes.values()).pop();
            if (_0x117718 === undefined) {
              return undefined;
            }
            this.$changes.delete(_0x117718);
            this.$indexes.delete(_0x117718);
            var _0x58b870 = this.$items.get(_0x117718);
            this.$items.delete(_0x117718);
            return _0x58b870;
          };
          _0x457574.prototype.at = function (_0x58242a) {
            _0x58242a = Math.trunc(_0x58242a) || 0;
            if (_0x58242a < 0) {
              _0x58242a += this.length;
            }
            if (_0x58242a < 0 || _0x58242a >= this.length) {
              return undefined;
            }
            var _0x2f94dc = Array.from(this.$items.keys())[_0x58242a];
            return this.$items.get(_0x2f94dc);
          };
          _0x457574.prototype.setAt = function (_0x52bfa1, _0x1e5ae3) {
            if (_0x1e5ae3 === undefined || _0x1e5ae3 === null) {
              console.error("ArraySchema items cannot be null nor undefined; Use `deleteAt(index)` instead.");
              return;
            }
            if (this.$items.get(_0x52bfa1) === _0x1e5ae3) {
              return;
            }
            if (_0x1e5ae3.$changes !== undefined) {
              _0x1e5ae3.$changes.setParent(this, this.$changes.root, _0x52bfa1);
            }
            var _0x2f80e1 = this.$changes.indexes[_0x52bfa1]?.op ?? _0x39914a.OPERATION.ADD;
            this.$changes.indexes[_0x52bfa1] = _0x52bfa1;
            this.$indexes.set(_0x52bfa1, _0x52bfa1);
            this.$items.set(_0x52bfa1, _0x1e5ae3);
            this.$changes.change(_0x52bfa1, _0x2f80e1);
          };
          _0x457574.prototype.deleteAt = function (_0x4a66fe) {
            var _0x483324 = Array.from(this.$items.keys())[_0x4a66fe];
            if (_0x483324 === undefined) {
              return false;
            }
            return this.$deleteAt(_0x483324);
          };
          _0x457574.prototype.$deleteAt = function (_0x3af1d1) {
            this.$changes.delete(_0x3af1d1);
            this.$indexes.delete(_0x3af1d1);
            return this.$items.delete(_0x3af1d1);
          };
          _0x457574.prototype.clear = function (_0x2bdb12) {
            this.$changes.discard(true, true);
            this.$changes.indexes = {};
            this.$indexes.clear();
            if (_0x2bdb12) {
              _0x26bf06.call(this, _0x2bdb12);
            }
            this.$items.clear();
            this.$changes.operation({
              index: 0,
              op: _0x39914a.OPERATION.CLEAR
            });
            this.$changes.touchParents();
          };
          _0x457574.prototype.concat = function () {
            var _0x3e8baa;
            var _0x338aa4 = [];
            for (var _0x3898b0 = 0; _0x3898b0 < arguments.length; _0x3898b0++) {
              _0x338aa4[_0x3898b0] = arguments[_0x3898b0];
            }
            return new (_0x457574.bind.apply(_0x457574, _0x4f2579([undefined], (_0x3e8baa = Array.from(this.$items.values())).concat.apply(_0x3e8baa, _0x338aa4), false)))();
          };
          _0x457574.prototype.join = function (_0x4931ce) {
            return Array.from(this.$items.values()).join(_0x4931ce);
          };
          _0x457574.prototype.reverse = function () {
            var _0x344267 = this;
            var _0x591d33 = Array.from(this.$items.keys());
            var _0x188355 = Array.from(this.$items.values()).reverse();
            _0x188355.forEach(function (_0x734f40, _0x478a27) {
              _0x344267.setAt(_0x591d33[_0x478a27], _0x734f40);
            });
            return this;
          };
          _0x457574.prototype.shift = function () {
            var _0x3f3000 = Array.from(this.$items.keys());
            var _0x58bf1c = _0x3f3000.shift();
            if (_0x58bf1c === undefined) {
              return undefined;
            }
            var _0x20b55e = this.$items.get(_0x58bf1c);
            this.$deleteAt(_0x58bf1c);
            return _0x20b55e;
          };
          _0x457574.prototype.slice = function (_0x56bae7, _0x42673f) {
            var _0x5d5924 = new _0x457574();
            _0x5d5924.push.apply(_0x5d5924, Array.from(this.$items.values()).slice(_0x56bae7, _0x42673f));
            return _0x5d5924;
          };
          _0x457574.prototype.sort = function (_0x33b469) {
            var _0x1b0ad5 = this;
            if (_0x33b469 === undefined) {
              _0x33b469 = _0x24be50;
            }
            var _0xc97f3e = Array.from(this.$items.keys());
            var _0x429c69 = Array.from(this.$items.values()).sort(_0x33b469);
            _0x429c69.forEach(function (_0x19dae8, _0x4ac5ce) {
              _0x1b0ad5.setAt(_0xc97f3e[_0x4ac5ce], _0x19dae8);
            });
            return this;
          };
          _0x457574.prototype.splice = function (_0x23e881, _0x3dccc4 = this.length - _0x23e881) {
            var _0xed7461 = [];
            for (var _0x2b1ebc = 2; _0x2b1ebc < arguments.length; _0x2b1ebc++) {
              _0xed7461[_0x2b1ebc - 2] = arguments[_0x2b1ebc];
            }
            var _0x89800f = Array.from(this.$items.keys());
            var _0x271cda = [];
            for (var _0x581c53 = _0x23e881; _0x581c53 < _0x23e881 + _0x3dccc4; _0x581c53++) {
              _0x271cda.push(this.$items.get(_0x89800f[_0x581c53]));
              this.$deleteAt(_0x89800f[_0x581c53]);
            }
            for (var _0x581c53 = 0; _0x581c53 < _0xed7461.length; _0x581c53++) {
              this.setAt(_0x23e881 + _0x581c53, _0xed7461[_0x581c53]);
            }
            return _0x271cda;
          };
          _0x457574.prototype.unshift = function () {
            var _0x379e3a = this;
            var _0x2b1721 = [];
            for (var _0x181059 = 0; _0x181059 < arguments.length; _0x181059++) {
              _0x2b1721[_0x181059] = arguments[_0x181059];
            }
            var _0x356154 = this.length;
            var _0x27d1f8 = _0x2b1721.length;
            var _0x50f4aa = Array.from(this.$items.values());
            _0x2b1721.forEach(function (_0x3732c0, _0x58659f) {
              _0x379e3a.setAt(_0x58659f, _0x3732c0);
            });
            _0x50f4aa.forEach(function (_0x1c7649, _0x3044d4) {
              _0x379e3a.setAt(_0x27d1f8 + _0x3044d4, _0x1c7649);
            });
            return _0x356154 + _0x27d1f8;
          };
          _0x457574.prototype.indexOf = function (_0x689077, _0x508d45) {
            return Array.from(this.$items.values()).indexOf(_0x689077, _0x508d45);
          };
          _0x457574.prototype.lastIndexOf = function (_0x490589, _0x46142b = this.length - 1) {
            return Array.from(this.$items.values()).lastIndexOf(_0x490589, _0x46142b);
          };
          _0x457574.prototype.every = function (_0x5eb9c7, _0x500038) {
            return Array.from(this.$items.values()).every(_0x5eb9c7, _0x500038);
          };
          _0x457574.prototype.some = function (_0x204731, _0x26d025) {
            return Array.from(this.$items.values()).some(_0x204731, _0x26d025);
          };
          _0x457574.prototype.forEach = function (_0x10df8f, _0x497ced) {
            Array.from(this.$items.values()).forEach(_0x10df8f, _0x497ced);
          };
          _0x457574.prototype.map = function (_0x5d4d61, _0x25b683) {
            return Array.from(this.$items.values()).map(_0x5d4d61, _0x25b683);
          };
          _0x457574.prototype.filter = function (_0x3cd6c1, _0x3e00fe) {
            return Array.from(this.$items.values()).filter(_0x3cd6c1, _0x3e00fe);
          };
          _0x457574.prototype.reduce = function (_0x55efd3, _0x576f95) {
            return Array.prototype.reduce.apply(Array.from(this.$items.values()), arguments);
          };
          _0x457574.prototype.reduceRight = function (_0x32eef1, _0x11280d) {
            return Array.prototype.reduceRight.apply(Array.from(this.$items.values()), arguments);
          };
          _0x457574.prototype.find = function (_0x14dac2, _0x4d395e) {
            return Array.from(this.$items.values()).find(_0x14dac2, _0x4d395e);
          };
          _0x457574.prototype.findIndex = function (_0x4ae2df, _0x5ada06) {
            return Array.from(this.$items.values()).findIndex(_0x4ae2df, _0x5ada06);
          };
          _0x457574.prototype.fill = function (_0x3bbc1b, _0x3c1148, _0x581d90) {
            throw new Error("ArraySchema#fill() not implemented");
          };
          _0x457574.prototype.copyWithin = function (_0x5767ff, _0x103503, _0xaf9597) {
            throw new Error("ArraySchema#copyWithin() not implemented");
          };
          _0x457574.prototype.toString = function () {
            return this.$items.toString();
          };
          _0x457574.prototype.toLocaleString = function () {
            return this.$items.toLocaleString();
          };
          _0x457574.prototype[Symbol.iterator] = function () {
            return Array.from(this.$items.values())[Symbol.iterator]();
          };
          Object.defineProperty(_0x457574, Symbol.species, {
            get: function () {
              return _0x457574;
            },
            enumerable: false,
            configurable: true
          });
          _0x457574.prototype.entries = function () {
            return this.$items.entries();
          };
          _0x457574.prototype.keys = function () {
            return this.$items.keys();
          };
          _0x457574.prototype.values = function () {
            return this.$items.values();
          };
          _0x457574.prototype.includes = function (_0x5008af, _0x64f76) {
            return Array.from(this.$items.values()).includes(_0x5008af, _0x64f76);
          };
          _0x457574.prototype.flatMap = function (_0x3b2813, _0x384680) {
            throw new Error("ArraySchema#flatMap() is not supported.");
          };
          _0x457574.prototype.flat = function (_0xc6e77d) {
            throw new Error("ArraySchema#flat() is not supported.");
          };
          _0x457574.prototype.findLast = function () {
            var _0x4a9e2d = Array.from(this.$items.values());
            return _0x4a9e2d.findLast.apply(_0x4a9e2d, arguments);
          };
          _0x457574.prototype.findLastIndex = function () {
            var _0x5289c7 = Array.from(this.$items.values());
            return _0x5289c7.findLastIndex.apply(_0x5289c7, arguments);
          };
          _0x457574.prototype.with = function (_0x318163, _0x33913f) {
            var _0xb9384a = Array.from(this.$items.values());
            _0xb9384a[_0x318163] = _0x33913f;
            return new (_0x457574.bind.apply(_0x457574, _0x4f2579([undefined], _0xb9384a, false)))();
          };
          _0x457574.prototype.toReversed = function () {
            return Array.from(this.$items.values()).reverse();
          };
          _0x457574.prototype.toSorted = function (_0x53a806) {
            return Array.from(this.$items.values()).sort(_0x53a806);
          };
          _0x457574.prototype.toSpliced = function (_0x2a3d79, _0x3c7352) {
            var _0x3ef987 = Array.from(this.$items.values());
            return _0x3ef987.toSpliced.apply(_0x3ef987, arguments);
          };
          _0x457574.prototype.setIndex = function (_0x120032, _0x576c36) {
            this.$indexes.set(_0x120032, _0x576c36);
          };
          _0x457574.prototype.getIndex = function (_0x1e11ff) {
            return this.$indexes.get(_0x1e11ff);
          };
          _0x457574.prototype.getByIndex = function (_0x3204d6) {
            return this.$items.get(this.$indexes.get(_0x3204d6));
          };
          _0x457574.prototype.deleteByIndex = function (_0x116226) {
            var _0x299f87 = this.$indexes.get(_0x116226);
            this.$items.delete(_0x299f87);
            this.$indexes.delete(_0x116226);
          };
          _0x457574.prototype.toArray = function () {
            return Array.from(this.$items.values());
          };
          _0x457574.prototype.toJSON = function () {
            return this.toArray().map(function (_0x29d8be) {
              if (typeof _0x29d8be.toJSON === "function") {
                return _0x29d8be.toJSON();
              } else {
                return _0x29d8be;
              }
            });
          };
          _0x457574.prototype.clone = function (_0x32e843) {
            var _0x3bcdce;
            if (_0x32e843) {
              _0x3bcdce = new (_0x457574.bind.apply(_0x457574, _0x4f2579([undefined], Array.from(this.$items.values()), false)))();
            } else {
              _0x3bcdce = new (_0x457574.bind.apply(_0x457574, _0x4f2579([undefined], this.map(function (_0x121a1b) {
                if (_0x121a1b.$changes) {
                  return _0x121a1b.clone();
                } else {
                  return _0x121a1b;
                }
              }), false)))();
            }
            return _0x3bcdce;
          };
          return _0x457574;
        }();
        function _0x411bb4(_0x29d197) {
          _0x29d197.$proxy = true;
          _0x29d197 = new Proxy(_0x29d197, {
            get: function (_0x30fb50, _0x3bf3ec) {
              if (typeof _0x3bf3ec !== "symbol" && typeof _0x30fb50[_0x3bf3ec] === "undefined") {
                return _0x30fb50.get(_0x3bf3ec);
              } else {
                return _0x30fb50[_0x3bf3ec];
              }
            },
            set: function (_0x599ad3, _0x5a63e6, _0x3c5f09) {
              if (typeof _0x5a63e6 !== "symbol" && _0x5a63e6.indexOf("$") === -1 && _0x5a63e6 !== "onAdd" && _0x5a63e6 !== "onRemove" && _0x5a63e6 !== "onChange") {
                _0x599ad3.set(_0x5a63e6, _0x3c5f09);
              } else {
                _0x599ad3[_0x5a63e6] = _0x3c5f09;
              }
              return true;
            },
            deleteProperty: function (_0x88b40d, _0x549ec9) {
              _0x88b40d.delete(_0x549ec9);
              return true;
            }
          });
          return _0x29d197;
        }
        var _0x6823b = function () {
          function _0x45c585(_0x45abf0) {
            var _0x3006b9 = this;
            this.$changes = new _0x4408f8(this);
            this.$items = new Map();
            this.$indexes = new Map();
            this.$refId = 0;
            if (_0x45abf0) {
              if (_0x45abf0 instanceof Map || _0x45abf0 instanceof _0x45c585) {
                _0x45abf0.forEach(function (_0x5458eb, _0x1a5f43) {
                  return _0x3006b9.set(_0x1a5f43, _0x5458eb);
                });
              } else {
                for (var _0x45700f in _0x45abf0) {
                  this.set(_0x45700f, _0x45abf0[_0x45700f]);
                }
              }
            }
          }
          _0x45c585.prototype.onAdd = function (_0x5b1eb1, _0x2b4977 = true) {
            return _0x162952(this.$callbacks ||= {}, _0x39914a.OPERATION.ADD, _0x5b1eb1, _0x2b4977 ? this.$items : undefined);
          };
          _0x45c585.prototype.onRemove = function (_0x5768a4) {
            return _0x162952(this.$callbacks ||= {}, _0x39914a.OPERATION.DELETE, _0x5768a4);
          };
          _0x45c585.prototype.onChange = function (_0x5048a2) {
            return _0x162952(this.$callbacks ||= {}, _0x39914a.OPERATION.REPLACE, _0x5048a2);
          };
          _0x45c585.is = function (_0x1c4440) {
            return _0x1c4440.map !== undefined;
          };
          _0x45c585.prototype[Symbol.iterator] = function () {
            return this.$items[Symbol.iterator]();
          };
          Object.defineProperty(_0x45c585.prototype, Symbol.toStringTag, {
            get: function () {
              return this.$items[Symbol.toStringTag];
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(_0x45c585, Symbol.species, {
            get: function () {
              return _0x45c585;
            },
            enumerable: false,
            configurable: true
          });
          _0x45c585.prototype.set = function (_0x355644, _0x86e761) {
            if (_0x86e761 === undefined || _0x86e761 === null) {
              throw new Error(`MapSchema#set('${_0x355644}', ${_0x86e761}): trying to set ${_0x86e761} value on '${_0x355644}'.`);
            }
            _0x355644 = _0x355644.toString();
            var _0x3c5e12 = typeof this.$changes.indexes[_0x355644] !== "undefined";
            var _0x59b8b4 = _0x3c5e12 ? this.$changes.indexes[_0x355644] : this.$refId++;
            var _0x378141 = _0x3c5e12 ? _0x39914a.OPERATION.REPLACE : _0x39914a.OPERATION.ADD;
            var _0x49534a = _0x86e761.$changes !== undefined;
            if (_0x49534a) {
              _0x86e761.$changes.setParent(this, this.$changes.root, _0x59b8b4);
            }
            if (!_0x3c5e12) {
              this.$changes.indexes[_0x355644] = _0x59b8b4;
              this.$indexes.set(_0x59b8b4, _0x355644);
            } else if (!_0x49534a && this.$items.get(_0x355644) === _0x86e761) {
              return;
            } else if (_0x49534a && this.$items.get(_0x355644) !== _0x86e761) {
              _0x378141 = _0x39914a.OPERATION.ADD;
            }
            this.$items.set(_0x355644, _0x86e761);
            this.$changes.change(_0x355644, _0x378141);
            return this;
          };
          _0x45c585.prototype.get = function (_0x45a7ae) {
            return this.$items.get(_0x45a7ae);
          };
          _0x45c585.prototype.delete = function (_0x282611) {
            this.$changes.delete(_0x282611.toString());
            return this.$items.delete(_0x282611);
          };
          _0x45c585.prototype.clear = function (_0x10af74) {
            this.$changes.discard(true, true);
            this.$changes.indexes = {};
            this.$indexes.clear();
            if (_0x10af74) {
              _0x26bf06.call(this, _0x10af74);
            }
            this.$items.clear();
            this.$changes.operation({
              index: 0,
              op: _0x39914a.OPERATION.CLEAR
            });
            this.$changes.touchParents();
          };
          _0x45c585.prototype.has = function (_0x49f5f5) {
            return this.$items.has(_0x49f5f5);
          };
          _0x45c585.prototype.forEach = function (_0x5890e8) {
            this.$items.forEach(_0x5890e8);
          };
          _0x45c585.prototype.entries = function () {
            return this.$items.entries();
          };
          _0x45c585.prototype.keys = function () {
            return this.$items.keys();
          };
          _0x45c585.prototype.values = function () {
            return this.$items.values();
          };
          Object.defineProperty(_0x45c585.prototype, "size", {
            get: function () {
              return this.$items.size;
            },
            enumerable: false,
            configurable: true
          });
          _0x45c585.prototype.setIndex = function (_0x3783e3, _0x33680f) {
            this.$indexes.set(_0x3783e3, _0x33680f);
          };
          _0x45c585.prototype.getIndex = function (_0x332c7c) {
            return this.$indexes.get(_0x332c7c);
          };
          _0x45c585.prototype.getByIndex = function (_0x3f85ab) {
            return this.$items.get(this.$indexes.get(_0x3f85ab));
          };
          _0x45c585.prototype.deleteByIndex = function (_0x50e945) {
            var _0x4b2a6d = this.$indexes.get(_0x50e945);
            this.$items.delete(_0x4b2a6d);
            this.$indexes.delete(_0x50e945);
          };
          _0x45c585.prototype.toJSON = function () {
            var _0x2484bb = {};
            this.forEach(function (_0x5d2470, _0x40d223) {
              _0x2484bb[_0x40d223] = typeof _0x5d2470.toJSON === "function" ? _0x5d2470.toJSON() : _0x5d2470;
            });
            return _0x2484bb;
          };
          _0x45c585.prototype.clone = function (_0x3ddd46) {
            var _0x1c1c5b;
            if (_0x3ddd46) {
              _0x1c1c5b = Object.assign(new _0x45c585(), this);
            } else {
              _0x1c1c5b = new _0x45c585();
              this.forEach(function (_0x5bd971, _0x3224a2) {
                if (_0x5bd971.$changes) {
                  _0x1c1c5b.set(_0x3224a2, _0x5bd971.clone());
                } else {
                  _0x1c1c5b.set(_0x3224a2, _0x5bd971);
                }
              });
            }
            return _0x1c1c5b;
          };
          return _0x45c585;
        }();
        var _0x42b2b3 = {};
        function _0xb2c661(_0x4276ab, _0x43f089) {
          _0x42b2b3[_0x4276ab] = _0x43f089;
        }
        function _0x4bfd62(_0x13db59) {
          return _0x42b2b3[_0x13db59];
        }
        var _0x39d16c = function () {
          function _0x3bb05d() {
            this.indexes = {};
            this.fieldsByIndex = {};
            this.deprecated = {};
            this.descriptors = {};
          }
          _0x3bb05d.create = function (_0x2a530f) {
            var _0x42cac8 = new _0x3bb05d();
            _0x42cac8.schema = Object.assign({}, _0x2a530f && _0x2a530f.schema || {});
            _0x42cac8.indexes = Object.assign({}, _0x2a530f && _0x2a530f.indexes || {});
            _0x42cac8.fieldsByIndex = Object.assign({}, _0x2a530f && _0x2a530f.fieldsByIndex || {});
            _0x42cac8.descriptors = Object.assign({}, _0x2a530f && _0x2a530f.descriptors || {});
            _0x42cac8.deprecated = Object.assign({}, _0x2a530f && _0x2a530f.deprecated || {});
            return _0x42cac8;
          };
          _0x3bb05d.prototype.addField = function (_0x46907c, _0x264853) {
            var _0x4384a8 = this.getNextFieldIndex();
            this.fieldsByIndex[_0x4384a8] = _0x46907c;
            this.indexes[_0x46907c] = _0x4384a8;
            this.schema[_0x46907c] = Array.isArray(_0x264853) ? {
              array: _0x264853[0]
            } : _0x264853;
          };
          _0x3bb05d.prototype.hasField = function (_0x51d2b9) {
            return this.indexes[_0x51d2b9] !== undefined;
          };
          _0x3bb05d.prototype.addFilter = function (_0xfd240c, _0x387b14) {
            if (!this.filters) {
              this.filters = {};
              this.indexesWithFilters = [];
            }
            this.filters[this.indexes[_0xfd240c]] = _0x387b14;
            this.indexesWithFilters.push(this.indexes[_0xfd240c]);
            return true;
          };
          _0x3bb05d.prototype.addChildrenFilter = function (_0x2734a5, _0x594528) {
            var _0x2553e4 = this.indexes[_0x2734a5];
            var _0x3fa610 = this.schema[_0x2734a5];
            if (_0x4bfd62(Object.keys(_0x3fa610)[0])) {
              if (!this.childFilters) {
                this.childFilters = {};
              }
              this.childFilters[_0x2553e4] = _0x594528;
              return true;
            } else {
              console.warn(`@filterChildren: field '${_0x2734a5}' can't have children. Ignoring filter.`);
            }
          };
          _0x3bb05d.prototype.getChildrenFilter = function (_0x26e529) {
            return this.childFilters && this.childFilters[this.indexes[_0x26e529]];
          };
          _0x3bb05d.prototype.getNextFieldIndex = function () {
            return Object.keys(this.schema || {}).length;
          };
          return _0x3bb05d;
        }();
        function _0xb7d3d6(_0x3b89f1) {
          return _0x3b89f1._context && _0x3b89f1._context.useFilters;
        }
        var _0x1388c7 = function () {
          function _0x340925() {
            this.types = {};
            this.schemas = new Map();
            this.useFilters = false;
          }
          _0x340925.prototype.has = function (_0x131246) {
            return this.schemas.has(_0x131246);
          };
          _0x340925.prototype.get = function (_0x31e596) {
            return this.types[_0x31e596];
          };
          _0x340925.prototype.add = function (_0x4912b7, _0x140484 = this.schemas.size) {
            _0x4912b7._definition = _0x39d16c.create(_0x4912b7._definition);
            _0x4912b7._typeid = _0x140484;
            this.types[_0x140484] = _0x4912b7;
            this.schemas.set(_0x4912b7, _0x140484);
          };
          _0x340925.create = function (_0x1f6e45 = {}) {
            return function (_0x2a00a7) {
              if (!_0x1f6e45.context) {
                _0x1f6e45.context = new _0x340925();
              }
              return _0x257c0a(_0x2a00a7, _0x1f6e45);
            };
          };
          return _0x340925;
        }();
        var _0x3f866c = new _0x1388c7();
        function _0x257c0a(_0x109c35, _0x156024 = {}) {
          return function (_0x4c346f, _0x37415a) {
            var _0x4339c3 = _0x156024.context || _0x3f866c;
            var _0x5c5059 = _0x4c346f.constructor;
            _0x5c5059._context = _0x4339c3;
            if (!_0x109c35) {
              throw new Error(`${_0x5c5059.name}: @type() reference provided for "${_0x37415a}" is undefined. Make sure you don't have any circular dependencies.`);
            }
            if (!_0x4339c3.has(_0x5c5059)) {
              _0x4339c3.add(_0x5c5059);
            }
            var _0x216a79 = _0x5c5059._definition;
            _0x216a79.addField(_0x37415a, _0x109c35);
            if (_0x216a79.descriptors[_0x37415a]) {
              if (_0x216a79.deprecated[_0x37415a]) {
                return;
              } else {
                try {
                  throw new Error(`@colyseus/schema: Duplicate '${_0x37415a}' definition on '${_0x5c5059.name}'.
Check @type() annotation`);
                } catch (_0x556084) {
                  var _0x595242 = _0x556084.stack.split("\n")[4].trim();
                  throw new Error(`${_0x556084.message} ${_0x595242}`);
                }
              }
            }
            var _0x5b3c24 = _0x426507.is(_0x109c35);
            var _0x348730 = !_0x5b3c24 && _0x6823b.is(_0x109c35);
            if (typeof _0x109c35 !== "string" && !_0x456512.is(_0x109c35)) {
              var _0x2709e3 = Object.values(_0x109c35)[0];
              if (typeof _0x2709e3 !== "string" && !_0x4339c3.has(_0x2709e3)) {
                _0x4339c3.add(_0x2709e3);
              }
            }
            if (_0x156024.manual) {
              _0x216a79.descriptors[_0x37415a] = {
                enumerable: true,
                configurable: true,
                writable: true
              };
              return;
            }
            var _0x34eb60 = `_${_0x37415a}`;
            _0x216a79.descriptors[_0x34eb60] = {
              enumerable: false,
              configurable: false,
              writable: true
            };
            _0x216a79.descriptors[_0x37415a] = {
              get: function () {
                return this[_0x34eb60];
              },
              set: function (_0x5e725a) {
                if (_0x5e725a === this[_0x34eb60]) {
                  return;
                }
                if (_0x5e725a !== undefined && _0x5e725a !== null) {
                  if (_0x5b3c24 && !(_0x5e725a instanceof _0x426507)) {
                    _0x5e725a = new (_0x426507.bind.apply(_0x426507, _0x4f2579([undefined], _0x5e725a, false)))();
                  }
                  if (_0x348730 && !(_0x5e725a instanceof _0x6823b)) {
                    _0x5e725a = new _0x6823b(_0x5e725a);
                  }
                  if (_0x5e725a.$proxy === undefined) {
                    if (_0x348730) {
                      _0x5e725a = _0x411bb4(_0x5e725a);
                    } else if (_0x5b3c24) {
                      _0x5e725a = _0x462239(_0x5e725a);
                    }
                  }
                  this.$changes.change(_0x37415a);
                  if (_0x5e725a.$changes) {
                    _0x5e725a.$changes.setParent(this, this.$changes.root, this._definition.indexes[_0x37415a]);
                  }
                } else if (this[_0x34eb60] !== undefined) {
                  this.$changes.delete(_0x37415a);
                }
                this[_0x34eb60] = _0x5e725a;
              },
              enumerable: true,
              configurable: true
            };
          };
        }
        function _0x3fe92c(_0x437bdb) {
          return function (_0x56d70f, _0x59e5e5) {
            var _0x41e62c = _0x56d70f.constructor;
            var _0x28570f = _0x41e62c._definition;
            if (_0x28570f.addFilter(_0x59e5e5, _0x437bdb)) {
              _0x41e62c._context.useFilters = true;
            }
          };
        }
        function _0x1b4c71(_0x2f3c25) {
          return function (_0x2c033f, _0x3c674b) {
            var _0x2b4ae2 = _0x2c033f.constructor;
            var _0x4a4b54 = _0x2b4ae2._definition;
            if (_0x4a4b54.addChildrenFilter(_0x3c674b, _0x2f3c25)) {
              _0x2b4ae2._context.useFilters = true;
            }
          };
        }
        function _0x1524cb(_0x4d0b89 = true) {
          return function (_0x838be8, _0xd0c0be) {
            var _0x401e1d = _0x838be8.constructor;
            var _0x666f14 = _0x401e1d._definition;
            _0x666f14.deprecated[_0xd0c0be] = true;
            if (_0x4d0b89) {
              _0x666f14.descriptors[_0xd0c0be] = {
                get: function () {
                  throw new Error(`${_0xd0c0be} is deprecated.`);
                },
                set: function (_0x1683e5) {},
                enumerable: false,
                configurable: true
              };
            }
          };
        }
        function _0x549e7d(_0x387532, _0x3c13b6, _0x7c66e1 = {}) {
          if (!_0x7c66e1.context) {
            _0x7c66e1.context = _0x387532._context || _0x7c66e1.context || _0x3f866c;
          }
          for (var _0x1ca177 in _0x3c13b6) {
            _0x257c0a(_0x3c13b6[_0x1ca177], _0x7c66e1)(_0x387532.prototype, _0x1ca177);
          }
          return _0x387532;
        }
        function _0x116dd0(_0x72478d) {
          var _0x2a42cf = 0;
          var _0x2432b7 = 0;
          for (var _0x311a30 = 0, _0x400cbe = _0x72478d.length; _0x311a30 < _0x400cbe; _0x311a30++) {
            _0x2a42cf = _0x72478d.charCodeAt(_0x311a30);
            if (_0x2a42cf < 128) {
              _0x2432b7 += 1;
            } else if (_0x2a42cf < 2048) {
              _0x2432b7 += 2;
            } else if (_0x2a42cf < 55296 || _0x2a42cf >= 57344) {
              _0x2432b7 += 3;
            } else {
              _0x311a30++;
              _0x2432b7 += 4;
            }
          }
          return _0x2432b7;
        }
        function _0x3b89f3(_0x4f3b4a, _0x287a61, _0x19e737) {
          var _0x53d77b = 0;
          for (var _0x41ace4 = 0, _0x290111 = _0x19e737.length; _0x41ace4 < _0x290111; _0x41ace4++) {
            _0x53d77b = _0x19e737.charCodeAt(_0x41ace4);
            if (_0x53d77b < 128) {
              _0x4f3b4a[_0x287a61++] = _0x53d77b;
            } else if (_0x53d77b < 2048) {
              _0x4f3b4a[_0x287a61++] = _0x53d77b >> 6 | 192;
              _0x4f3b4a[_0x287a61++] = _0x53d77b & 63 | 128;
            } else if (_0x53d77b < 55296 || _0x53d77b >= 57344) {
              _0x4f3b4a[_0x287a61++] = _0x53d77b >> 12 | 224;
              _0x4f3b4a[_0x287a61++] = _0x53d77b >> 6 & 63 | 128;
              _0x4f3b4a[_0x287a61++] = _0x53d77b & 63 | 128;
            } else {
              _0x41ace4++;
              _0x53d77b = 65536 + ((_0x53d77b & 1023) << 10 | _0x19e737.charCodeAt(_0x41ace4) & 1023);
              _0x4f3b4a[_0x287a61++] = _0x53d77b >> 18 | 240;
              _0x4f3b4a[_0x287a61++] = _0x53d77b >> 12 & 63 | 128;
              _0x4f3b4a[_0x287a61++] = _0x53d77b >> 6 & 63 | 128;
              _0x4f3b4a[_0x287a61++] = _0x53d77b & 63 | 128;
            }
          }
        }
        function _0x4ef10b(_0x1ea33f, _0x46f722) {
          _0x1ea33f.push(_0x46f722 & 255);
        }
        function _0x2b0570(_0x532b82, _0x87fc3) {
          _0x532b82.push(_0x87fc3 & 255);
        }
        function _0x1d17bf(_0x17efb1, _0x8f7f87) {
          _0x17efb1.push(_0x8f7f87 & 255);
          _0x17efb1.push(_0x8f7f87 >> 8 & 255);
        }
        function _0x22195d(_0x3dd741, _0x423626) {
          _0x3dd741.push(_0x423626 & 255);
          _0x3dd741.push(_0x423626 >> 8 & 255);
        }
        function _0x5aef28(_0x4e6198, _0x47c313) {
          _0x4e6198.push(_0x47c313 & 255);
          _0x4e6198.push(_0x47c313 >> 8 & 255);
          _0x4e6198.push(_0x47c313 >> 16 & 255);
          _0x4e6198.push(_0x47c313 >> 24 & 255);
        }
        function _0x339e38(_0x117f06, _0x2ccc31) {
          var _0x35af85 = _0x2ccc31 >> 24;
          var _0x29743d = _0x2ccc31 >> 16;
          var _0x28cb5e = _0x2ccc31 >> 8;
          var _0x37fd94 = _0x2ccc31;
          _0x117f06.push(_0x37fd94 & 255);
          _0x117f06.push(_0x28cb5e & 255);
          _0x117f06.push(_0x29743d & 255);
          _0x117f06.push(_0x35af85 & 255);
        }
        function _0x5b8f77(_0x2738ee, _0x343f7a) {
          var _0xac2b63 = Math.floor(_0x343f7a / Math.pow(2, 32));
          var _0x22a7aa = _0x343f7a >>> 0;
          _0x339e38(_0x2738ee, _0x22a7aa);
          _0x339e38(_0x2738ee, _0xac2b63);
        }
        function _0x4eb65b(_0x7833a0, _0x2b744b) {
          var _0x5eba98 = _0x2b744b / Math.pow(2, 32) >> 0;
          var _0x2b0833 = _0x2b744b >>> 0;
          _0x339e38(_0x7833a0, _0x2b0833);
          _0x339e38(_0x7833a0, _0x5eba98);
        }
        function _0x29157e(_0x489eb3, _0x2d2978) {
          _0x17ec54(_0x489eb3, _0x2d2978);
        }
        function _0x2a4abf(_0x40222e, _0x424322) {
          _0x42e252(_0x40222e, _0x424322);
        }
        var _0x3d148f = new Int32Array(2);
        var _0x53e919 = new Float32Array(_0x3d148f.buffer);
        var _0x515815 = new Float64Array(_0x3d148f.buffer);
        function _0x17ec54(_0x29d3cf, _0x5243ea) {
          _0x53e919[0] = _0x5243ea;
          _0x5aef28(_0x29d3cf, _0x3d148f[0]);
        }
        function _0x42e252(_0x3154fe, _0x3cb2fa) {
          _0x515815[0] = _0x3cb2fa;
          _0x5aef28(_0x3154fe, _0x3d148f[0]);
          _0x5aef28(_0x3154fe, _0x3d148f[1]);
        }
        function _0x50c727(_0x533d34, _0x4a4cf4) {
          return _0x2b0570(_0x533d34, _0x4a4cf4 ? 1 : 0);
        }
        function _0x12f9e1(_0x1b7206, _0x2dda12) {
          if (!_0x2dda12) {
            _0x2dda12 = "";
          }
          var _0x4d2c99 = _0x116dd0(_0x2dda12);
          var _0xae5e2f = 0;
          if (_0x4d2c99 < 32) {
            _0x1b7206.push(_0x4d2c99 | 160);
            _0xae5e2f = 1;
          } else if (_0x4d2c99 < 256) {
            _0x1b7206.push(217);
            _0x2b0570(_0x1b7206, _0x4d2c99);
            _0xae5e2f = 2;
          } else if (_0x4d2c99 < 65536) {
            _0x1b7206.push(218);
            _0x22195d(_0x1b7206, _0x4d2c99);
            _0xae5e2f = 3;
          } else if (_0x4d2c99 < 4294967296) {
            _0x1b7206.push(219);
            _0x339e38(_0x1b7206, _0x4d2c99);
            _0xae5e2f = 5;
          } else {
            throw new Error("String too long");
          }
          _0x3b89f3(_0x1b7206, _0x1b7206.length, _0x2dda12);
          return _0xae5e2f + _0x4d2c99;
        }
        function _0x1fbe17(_0x1cf66b, _0x41baeb) {
          if (isNaN(_0x41baeb)) {
            return _0x1fbe17(_0x1cf66b, 0);
          } else if (!isFinite(_0x41baeb)) {
            return _0x1fbe17(_0x1cf66b, _0x41baeb > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER);
          } else if (_0x41baeb !== (_0x41baeb | 0)) {
            _0x1cf66b.push(203);
            _0x42e252(_0x1cf66b, _0x41baeb);
            return 9;
          }
          if (_0x41baeb >= 0) {
            if (_0x41baeb < 128) {
              _0x2b0570(_0x1cf66b, _0x41baeb);
              return 1;
            }
            if (_0x41baeb < 256) {
              _0x1cf66b.push(204);
              _0x2b0570(_0x1cf66b, _0x41baeb);
              return 2;
            }
            if (_0x41baeb < 65536) {
              _0x1cf66b.push(205);
              _0x22195d(_0x1cf66b, _0x41baeb);
              return 3;
            }
            if (_0x41baeb < 4294967296) {
              _0x1cf66b.push(206);
              _0x339e38(_0x1cf66b, _0x41baeb);
              return 5;
            }
            _0x1cf66b.push(207);
            _0x4eb65b(_0x1cf66b, _0x41baeb);
            return 9;
          } else {
            if (_0x41baeb >= -32) {
              _0x1cf66b.push(_0x41baeb + 32 | 224);
              return 1;
            }
            if (_0x41baeb >= -128) {
              _0x1cf66b.push(208);
              _0x4ef10b(_0x1cf66b, _0x41baeb);
              return 2;
            }
            if (_0x41baeb >= -32768) {
              _0x1cf66b.push(209);
              _0x1d17bf(_0x1cf66b, _0x41baeb);
              return 3;
            }
            if (_0x41baeb >= -2147483648) {
              _0x1cf66b.push(210);
              _0x5aef28(_0x1cf66b, _0x41baeb);
              return 5;
            }
            _0x1cf66b.push(211);
            _0x5b8f77(_0x1cf66b, _0x41baeb);
            return 9;
          }
        }
        var _0x48a70a = Object.freeze({
          "__proto__": null,
          boolean: _0x50c727,
          float32: _0x29157e,
          float64: _0x2a4abf,
          int16: _0x1d17bf,
          int32: _0x5aef28,
          int64: _0x5b8f77,
          int8: _0x4ef10b,
          number: _0x1fbe17,
          string: _0x12f9e1,
          uint16: _0x22195d,
          uint32: _0x339e38,
          uint64: _0x4eb65b,
          uint8: _0x2b0570,
          utf8Write: _0x3b89f3,
          writeFloat32: _0x17ec54,
          writeFloat64: _0x42e252
        });
        function _0x168b9e(_0x441bb0, _0xd3dd8f, _0x1df01b) {
          var _0x23b43a = "";
          var _0x51fb60 = 0;
          for (var _0x4c54c4 = _0xd3dd8f, _0x31ca0b = _0xd3dd8f + _0x1df01b; _0x4c54c4 < _0x31ca0b; _0x4c54c4++) {
            var _0x1d1d23 = _0x441bb0[_0x4c54c4];
            if ((_0x1d1d23 & 128) === 0) {
              _0x23b43a += String.fromCharCode(_0x1d1d23);
              continue;
            }
            if ((_0x1d1d23 & 224) === 192) {
              _0x23b43a += String.fromCharCode((_0x1d1d23 & 31) << 6 | _0x441bb0[++_0x4c54c4] & 63);
              continue;
            }
            if ((_0x1d1d23 & 240) === 224) {
              _0x23b43a += String.fromCharCode((_0x1d1d23 & 15) << 12 | (_0x441bb0[++_0x4c54c4] & 63) << 6 | (_0x441bb0[++_0x4c54c4] & 63) << 0);
              continue;
            }
            if ((_0x1d1d23 & 248) === 240) {
              _0x51fb60 = (_0x1d1d23 & 7) << 18 | (_0x441bb0[++_0x4c54c4] & 63) << 12 | (_0x441bb0[++_0x4c54c4] & 63) << 6 | (_0x441bb0[++_0x4c54c4] & 63) << 0;
              if (_0x51fb60 >= 65536) {
                _0x51fb60 -= 65536;
                _0x23b43a += String.fromCharCode((_0x51fb60 >>> 10) + 55296, (_0x51fb60 & 1023) + 56320);
              } else {
                _0x23b43a += String.fromCharCode(_0x51fb60);
              }
              continue;
            }
            console.error("Invalid byte " + _0x1d1d23.toString(16));
          }
          return _0x23b43a;
        }
        function _0x2b5741(_0x311799, _0x53e896) {
          return _0x3887a7(_0x311799, _0x53e896) << 24 >> 24;
        }
        function _0x3887a7(_0x3b6f39, _0x643c38) {
          return _0x3b6f39[_0x643c38.offset++];
        }
        function _0x42e35b(_0x344299, _0x21a896) {
          return _0x273f04(_0x344299, _0x21a896) << 16 >> 16;
        }
        function _0x273f04(_0x4c65b1, _0x2d1cb4) {
          return _0x4c65b1[_0x2d1cb4.offset++] | _0x4c65b1[_0x2d1cb4.offset++] << 8;
        }
        function _0x220acc(_0x18e8e6, _0x320da1) {
          return _0x18e8e6[_0x320da1.offset++] | _0x18e8e6[_0x320da1.offset++] << 8 | _0x18e8e6[_0x320da1.offset++] << 16 | _0x18e8e6[_0x320da1.offset++] << 24;
        }
        function _0x38c666(_0x7d1604, _0x5a89c3) {
          return _0x220acc(_0x7d1604, _0x5a89c3) >>> 0;
        }
        function _0x265680(_0x55a3bf, _0x541cc4) {
          return _0x219d60(_0x55a3bf, _0x541cc4);
        }
        function _0x1c6284(_0x5984fb, _0x4fc10d) {
          return _0x104020(_0x5984fb, _0x4fc10d);
        }
        function _0x191c82(_0xf5a2ac, _0x5687b0) {
          var _0x3cbfc8 = _0x38c666(_0xf5a2ac, _0x5687b0);
          var _0x42096e = _0x220acc(_0xf5a2ac, _0x5687b0) * Math.pow(2, 32);
          return _0x42096e + _0x3cbfc8;
        }
        function _0x3d53c8(_0x1407e8, _0x38724b) {
          var _0xfeaa3f = _0x38c666(_0x1407e8, _0x38724b);
          var _0x317fc2 = _0x38c666(_0x1407e8, _0x38724b) * Math.pow(2, 32);
          return _0x317fc2 + _0xfeaa3f;
        }
        var _0x5cfbec = new Int32Array(2);
        var _0x2a83a9 = new Float32Array(_0x5cfbec.buffer);
        var _0x55dc79 = new Float64Array(_0x5cfbec.buffer);
        function _0x219d60(_0x16bfb6, _0x470dde) {
          _0x5cfbec[0] = _0x220acc(_0x16bfb6, _0x470dde);
          return _0x2a83a9[0];
        }
        function _0x104020(_0x26ce2d, _0x5ddcc2) {
          _0x5cfbec[0] = _0x220acc(_0x26ce2d, _0x5ddcc2);
          _0x5cfbec[1] = _0x220acc(_0x26ce2d, _0x5ddcc2);
          return _0x55dc79[0];
        }
        function _0x3550ba(_0x3f6d04, _0x1d8df6) {
          return _0x3887a7(_0x3f6d04, _0x1d8df6) > 0;
        }
        function _0x260bd8(_0x232b9c, _0x32315d) {
          var _0x565e2f = _0x232b9c[_0x32315d.offset++];
          var _0x1edc9c;
          if (_0x565e2f < 192) {
            _0x1edc9c = _0x565e2f & 31;
          } else if (_0x565e2f === 217) {
            _0x1edc9c = _0x3887a7(_0x232b9c, _0x32315d);
          } else if (_0x565e2f === 218) {
            _0x1edc9c = _0x273f04(_0x232b9c, _0x32315d);
          } else if (_0x565e2f === 219) {
            _0x1edc9c = _0x38c666(_0x232b9c, _0x32315d);
          }
          var _0x4c07cc = _0x168b9e(_0x232b9c, _0x32315d.offset, _0x1edc9c);
          _0x32315d.offset += _0x1edc9c;
          return _0x4c07cc;
        }
        function _0x587ca8(_0x38d4a7, _0x4b1702) {
          var _0x23e042 = _0x38d4a7[_0x4b1702.offset];
          return _0x23e042 < 192 && _0x23e042 > 160 || _0x23e042 === 217 || _0x23e042 === 218 || _0x23e042 === 219;
        }
        function _0x5bb8aa(_0x1dc645, _0x2d937c) {
          var _0x2f15c9 = _0x1dc645[_0x2d937c.offset++];
          if (_0x2f15c9 < 128) {
            return _0x2f15c9;
          } else if (_0x2f15c9 === 202) {
            return _0x219d60(_0x1dc645, _0x2d937c);
          } else if (_0x2f15c9 === 203) {
            return _0x104020(_0x1dc645, _0x2d937c);
          } else if (_0x2f15c9 === 204) {
            return _0x3887a7(_0x1dc645, _0x2d937c);
          } else if (_0x2f15c9 === 205) {
            return _0x273f04(_0x1dc645, _0x2d937c);
          } else if (_0x2f15c9 === 206) {
            return _0x38c666(_0x1dc645, _0x2d937c);
          } else if (_0x2f15c9 === 207) {
            return _0x3d53c8(_0x1dc645, _0x2d937c);
          } else if (_0x2f15c9 === 208) {
            return _0x2b5741(_0x1dc645, _0x2d937c);
          } else if (_0x2f15c9 === 209) {
            return _0x42e35b(_0x1dc645, _0x2d937c);
          } else if (_0x2f15c9 === 210) {
            return _0x220acc(_0x1dc645, _0x2d937c);
          } else if (_0x2f15c9 === 211) {
            return _0x191c82(_0x1dc645, _0x2d937c);
          } else if (_0x2f15c9 > 223) {
            return (255 - _0x2f15c9 + 1) * -1;
          }
        }
        function _0x2d7a28(_0xa40269, _0xd1c16c) {
          var _0x1406c2 = _0xa40269[_0xd1c16c.offset];
          return _0x1406c2 < 128 || _0x1406c2 >= 202 && _0x1406c2 <= 211;
        }
        function _0xba20b1(_0x36568b, _0x416420) {
          return _0x36568b[_0x416420.offset] < 160;
        }
        function _0x43b4b7(_0x5303a0, _0x17bddc) {
          return _0x5303a0[_0x17bddc.offset - 1] === _0x21580f && (_0x5303a0[_0x17bddc.offset] < 128 || _0x5303a0[_0x17bddc.offset] >= 202 && _0x5303a0[_0x17bddc.offset] <= 211);
        }
        var _0x3455a9 = Object.freeze({
          "__proto__": null,
          arrayCheck: _0xba20b1,
          boolean: _0x3550ba,
          float32: _0x265680,
          float64: _0x1c6284,
          int16: _0x42e35b,
          int32: _0x220acc,
          int64: _0x191c82,
          int8: _0x2b5741,
          number: _0x5bb8aa,
          numberCheck: _0x2d7a28,
          readFloat32: _0x219d60,
          readFloat64: _0x104020,
          string: _0x260bd8,
          stringCheck: _0x587ca8,
          switchStructureCheck: _0x43b4b7,
          uint16: _0x273f04,
          uint32: _0x38c666,
          uint64: _0x3d53c8,
          uint8: _0x3887a7
        });
        var _0x268a4d = function () {
          function _0x49fe03(_0x2390f2) {
            var _0x223944 = this;
            this.$changes = new _0x4408f8(this);
            this.$items = new Map();
            this.$indexes = new Map();
            this.$refId = 0;
            if (_0x2390f2) {
              _0x2390f2.forEach(function (_0x34b4ee) {
                return _0x223944.add(_0x34b4ee);
              });
            }
          }
          _0x49fe03.prototype.onAdd = function (_0x216144, _0x4dbd7c = true) {
            return _0x162952(this.$callbacks ||= [], _0x39914a.OPERATION.ADD, _0x216144, _0x4dbd7c ? this.$items : undefined);
          };
          _0x49fe03.prototype.onRemove = function (_0xf41b94) {
            return _0x162952(this.$callbacks ||= [], _0x39914a.OPERATION.DELETE, _0xf41b94);
          };
          _0x49fe03.prototype.onChange = function (_0x53cca2) {
            return _0x162952(this.$callbacks ||= [], _0x39914a.OPERATION.REPLACE, _0x53cca2);
          };
          _0x49fe03.is = function (_0x1cc9bf) {
            return _0x1cc9bf.collection !== undefined;
          };
          _0x49fe03.prototype.add = function (_0x5c2c03) {
            var _0x3e8f11 = this.$refId++;
            var _0x1a7f0c = _0x5c2c03.$changes !== undefined;
            if (_0x1a7f0c) {
              _0x5c2c03.$changes.setParent(this, this.$changes.root, _0x3e8f11);
            }
            this.$changes.indexes[_0x3e8f11] = _0x3e8f11;
            this.$indexes.set(_0x3e8f11, _0x3e8f11);
            this.$items.set(_0x3e8f11, _0x5c2c03);
            this.$changes.change(_0x3e8f11);
            return _0x3e8f11;
          };
          _0x49fe03.prototype.at = function (_0x1d889f) {
            var _0x3ca83a = Array.from(this.$items.keys())[_0x1d889f];
            return this.$items.get(_0x3ca83a);
          };
          _0x49fe03.prototype.entries = function () {
            return this.$items.entries();
          };
          _0x49fe03.prototype.delete = function (_0x292d53) {
            var _0x3d2a15 = this.$items.entries();
            var _0x52c240;
            var _0x4e0e66;
            while (_0x4e0e66 = _0x3d2a15.next()) {
              if (_0x4e0e66.done) {
                break;
              }
              if (_0x292d53 === _0x4e0e66.value[1]) {
                _0x52c240 = _0x4e0e66.value[0];
                break;
              }
            }
            if (_0x52c240 === undefined) {
              return false;
            }
            this.$changes.delete(_0x52c240);
            this.$indexes.delete(_0x52c240);
            return this.$items.delete(_0x52c240);
          };
          _0x49fe03.prototype.clear = function (_0x2e2699) {
            this.$changes.discard(true, true);
            this.$changes.indexes = {};
            this.$indexes.clear();
            if (_0x2e2699) {
              _0x26bf06.call(this, _0x2e2699);
            }
            this.$items.clear();
            this.$changes.operation({
              index: 0,
              op: _0x39914a.OPERATION.CLEAR
            });
            this.$changes.touchParents();
          };
          _0x49fe03.prototype.has = function (_0x581361) {
            return Array.from(this.$items.values()).some(function (_0x4cd235) {
              return _0x4cd235 === _0x581361;
            });
          };
          _0x49fe03.prototype.forEach = function (_0x40c39d) {
            var _0x4bf1cb = this;
            this.$items.forEach(function (_0x5f0604, _0x389d02, _0x257f86) {
              return _0x40c39d(_0x5f0604, _0x389d02, _0x4bf1cb);
            });
          };
          _0x49fe03.prototype.values = function () {
            return this.$items.values();
          };
          Object.defineProperty(_0x49fe03.prototype, "size", {
            get: function () {
              return this.$items.size;
            },
            enumerable: false,
            configurable: true
          });
          _0x49fe03.prototype.setIndex = function (_0x47adad, _0x10707c) {
            this.$indexes.set(_0x47adad, _0x10707c);
          };
          _0x49fe03.prototype.getIndex = function (_0x2cb451) {
            return this.$indexes.get(_0x2cb451);
          };
          _0x49fe03.prototype.getByIndex = function (_0x235d17) {
            return this.$items.get(this.$indexes.get(_0x235d17));
          };
          _0x49fe03.prototype.deleteByIndex = function (_0x3bc8bd) {
            var _0x23fe1b = this.$indexes.get(_0x3bc8bd);
            this.$items.delete(_0x23fe1b);
            this.$indexes.delete(_0x3bc8bd);
          };
          _0x49fe03.prototype.toArray = function () {
            return Array.from(this.$items.values());
          };
          _0x49fe03.prototype.toJSON = function () {
            var _0x7b6cbf = [];
            this.forEach(function (_0x16252d, _0x2c027e) {
              _0x7b6cbf.push(typeof _0x16252d.toJSON === "function" ? _0x16252d.toJSON() : _0x16252d);
            });
            return _0x7b6cbf;
          };
          _0x49fe03.prototype.clone = function (_0x2e1b0d) {
            var _0x115650;
            if (_0x2e1b0d) {
              _0x115650 = Object.assign(new _0x49fe03(), this);
            } else {
              _0x115650 = new _0x49fe03();
              this.forEach(function (_0x13c221) {
                if (_0x13c221.$changes) {
                  _0x115650.add(_0x13c221.clone());
                } else {
                  _0x115650.add(_0x13c221);
                }
              });
            }
            return _0x115650;
          };
          return _0x49fe03;
        }();
        var _0x16b015 = function () {
          function _0x5615a3(_0x22ab38) {
            var _0x106c52 = this;
            this.$changes = new _0x4408f8(this);
            this.$items = new Map();
            this.$indexes = new Map();
            this.$refId = 0;
            if (_0x22ab38) {
              _0x22ab38.forEach(function (_0x48ce3e) {
                return _0x106c52.add(_0x48ce3e);
              });
            }
          }
          _0x5615a3.prototype.onAdd = function (_0x232707, _0x208eea = true) {
            return _0x162952(this.$callbacks ||= [], _0x39914a.OPERATION.ADD, _0x232707, _0x208eea ? this.$items : undefined);
          };
          _0x5615a3.prototype.onRemove = function (_0x5a74bb) {
            return _0x162952(this.$callbacks ||= [], _0x39914a.OPERATION.DELETE, _0x5a74bb);
          };
          _0x5615a3.prototype.onChange = function (_0x1439d0) {
            return _0x162952(this.$callbacks ||= [], _0x39914a.OPERATION.REPLACE, _0x1439d0);
          };
          _0x5615a3.is = function (_0x2f5b1f) {
            return _0x2f5b1f.set !== undefined;
          };
          _0x5615a3.prototype.add = function (_0x2ae433) {
            if (this.has(_0x2ae433)) {
              return false;
            }
            var _0x3a62bc = this.$refId++;
            if (_0x2ae433.$changes !== undefined) {
              _0x2ae433.$changes.setParent(this, this.$changes.root, _0x3a62bc);
            }
            var _0x13b2d3 = this.$changes.indexes[_0x3a62bc]?.op ?? _0x39914a.OPERATION.ADD;
            this.$changes.indexes[_0x3a62bc] = _0x3a62bc;
            this.$indexes.set(_0x3a62bc, _0x3a62bc);
            this.$items.set(_0x3a62bc, _0x2ae433);
            this.$changes.change(_0x3a62bc, _0x13b2d3);
            return _0x3a62bc;
          };
          _0x5615a3.prototype.entries = function () {
            return this.$items.entries();
          };
          _0x5615a3.prototype.delete = function (_0x53383d) {
            var _0x3bcba8 = this.$items.entries();
            var _0x10c19a;
            var _0x1ade4d;
            while (_0x1ade4d = _0x3bcba8.next()) {
              if (_0x1ade4d.done) {
                break;
              }
              if (_0x53383d === _0x1ade4d.value[1]) {
                _0x10c19a = _0x1ade4d.value[0];
                break;
              }
            }
            if (_0x10c19a === undefined) {
              return false;
            }
            this.$changes.delete(_0x10c19a);
            this.$indexes.delete(_0x10c19a);
            return this.$items.delete(_0x10c19a);
          };
          _0x5615a3.prototype.clear = function (_0x18c69e) {
            this.$changes.discard(true, true);
            this.$changes.indexes = {};
            this.$indexes.clear();
            if (_0x18c69e) {
              _0x26bf06.call(this, _0x18c69e);
            }
            this.$items.clear();
            this.$changes.operation({
              index: 0,
              op: _0x39914a.OPERATION.CLEAR
            });
            this.$changes.touchParents();
          };
          _0x5615a3.prototype.has = function (_0x5a5512) {
            var _0x419018 = this.$items.values();
            var _0x2edf24 = false;
            var _0x110943;
            while (_0x110943 = _0x419018.next()) {
              if (_0x110943.done) {
                break;
              }
              if (_0x5a5512 === _0x110943.value) {
                _0x2edf24 = true;
                break;
              }
            }
            return _0x2edf24;
          };
          _0x5615a3.prototype.forEach = function (_0x149f1a) {
            var _0x494049 = this;
            this.$items.forEach(function (_0x1f7086, _0x36f7a6, _0x1a74d2) {
              return _0x149f1a(_0x1f7086, _0x36f7a6, _0x494049);
            });
          };
          _0x5615a3.prototype.values = function () {
            return this.$items.values();
          };
          Object.defineProperty(_0x5615a3.prototype, "size", {
            get: function () {
              return this.$items.size;
            },
            enumerable: false,
            configurable: true
          });
          _0x5615a3.prototype.setIndex = function (_0x11afec, _0x25e4e3) {
            this.$indexes.set(_0x11afec, _0x25e4e3);
          };
          _0x5615a3.prototype.getIndex = function (_0x321a9b) {
            return this.$indexes.get(_0x321a9b);
          };
          _0x5615a3.prototype.getByIndex = function (_0x58aaaf) {
            return this.$items.get(this.$indexes.get(_0x58aaaf));
          };
          _0x5615a3.prototype.deleteByIndex = function (_0x34a57f) {
            var _0x2ddcbb = this.$indexes.get(_0x34a57f);
            this.$items.delete(_0x2ddcbb);
            this.$indexes.delete(_0x34a57f);
          };
          _0x5615a3.prototype.toArray = function () {
            return Array.from(this.$items.values());
          };
          _0x5615a3.prototype.toJSON = function () {
            var _0x15babc = [];
            this.forEach(function (_0x356cab, _0x3ecdfb) {
              _0x15babc.push(typeof _0x356cab.toJSON === "function" ? _0x356cab.toJSON() : _0x356cab);
            });
            return _0x15babc;
          };
          _0x5615a3.prototype.clone = function (_0x283e56) {
            var _0x4b954d;
            if (_0x283e56) {
              _0x4b954d = Object.assign(new _0x5615a3(), this);
            } else {
              _0x4b954d = new _0x5615a3();
              this.forEach(function (_0x3fa030) {
                if (_0x3fa030.$changes) {
                  _0x4b954d.add(_0x3fa030.clone());
                } else {
                  _0x4b954d.add(_0x3fa030);
                }
              });
            }
            return _0x4b954d;
          };
          return _0x5615a3;
        }();
        var _0x59744f = function () {
          function _0x7a9036() {
            this.refIds = new WeakSet();
            this.containerIndexes = new WeakMap();
          }
          _0x7a9036.prototype.addRefId = function (_0x3cf586) {
            if (!this.refIds.has(_0x3cf586)) {
              this.refIds.add(_0x3cf586);
              this.containerIndexes.set(_0x3cf586, new Set());
            }
          };
          _0x7a9036.get = function (_0x1b6402) {
            if (_0x1b6402.$filterState === undefined) {
              _0x1b6402.$filterState = new _0x7a9036();
            }
            return _0x1b6402.$filterState;
          };
          return _0x7a9036;
        }();
        var _0x5dc6f3 = function () {
          function _0x91fcca() {
            this.refs = new Map();
            this.refCounts = {};
            this.deletedRefs = new Set();
            this.nextUniqueId = 0;
          }
          _0x91fcca.prototype.getNextUniqueId = function () {
            return this.nextUniqueId++;
          };
          _0x91fcca.prototype.addRef = function (_0x408258, _0x2dcbff, _0x5b495c = true) {
            this.refs.set(_0x408258, _0x2dcbff);
            if (_0x5b495c) {
              this.refCounts[_0x408258] = (this.refCounts[_0x408258] || 0) + 1;
            }
          };
          _0x91fcca.prototype.removeRef = function (_0x21c667) {
            var _0x59d30d = this.refCounts[_0x21c667];
            if (_0x59d30d === undefined) {
              console.warn(`trying to remove reference ${_0x21c667} that doesn't exist`);
              return;
            }
            if (_0x59d30d === 0) {
              console.warn(`trying to remove reference ${_0x21c667} with 0 refCount`);
              return;
            }
            this.refCounts[_0x21c667] = _0x59d30d - 1;
            this.deletedRefs.add(_0x21c667);
          };
          _0x91fcca.prototype.clearRefs = function () {
            this.refs.clear();
            this.deletedRefs.clear();
            this.refCounts = {};
          };
          _0x91fcca.prototype.garbageCollectDeletedRefs = function () {
            var _0x52b041 = this;
            this.deletedRefs.forEach(function (_0xfd81fa) {
              if (_0x52b041.refCounts[_0xfd81fa] > 0) {
                return;
              }
              var _0xbb2ca6 = _0x52b041.refs.get(_0xfd81fa);
              if (_0xbb2ca6 instanceof _0x456512) {
                for (var _0x3417e2 in _0xbb2ca6._definition.schema) {
                  if (typeof _0xbb2ca6._definition.schema[_0x3417e2] !== "string" && _0xbb2ca6[_0x3417e2] && _0xbb2ca6[_0x3417e2].$changes) {
                    _0x52b041.removeRef(_0xbb2ca6[_0x3417e2].$changes.refId);
                  }
                }
              } else {
                var _0x576d15 = _0xbb2ca6.$changes.parent._definition;
                var _0x4f9226 = _0x576d15.schema[_0x576d15.fieldsByIndex[_0xbb2ca6.$changes.parentIndex]];
                if (typeof Object.values(_0x4f9226)[0] === "function") {
                  Array.from(_0xbb2ca6.values()).forEach(function (_0x516f2b) {
                    return _0x52b041.removeRef(_0x516f2b.$changes.refId);
                  });
                }
              }
              _0x52b041.refs.delete(_0xfd81fa);
              delete _0x52b041.refCounts[_0xfd81fa];
            });
            this.deletedRefs.clear();
          };
          return _0x91fcca;
        }();
        var _0xa5809a = function (_0x2e63d2) {
          _0x18872e(_0x5de40f, _0x2e63d2);
          function _0x5de40f() {
            return _0x2e63d2 !== null && _0x2e63d2.apply(this, arguments) || this;
          }
          return _0x5de40f;
        }(Error);
        function _0x291106(_0x1e67ce, _0xdef496, _0x553275, _0x2d9f8e) {
          var _0x1bb2da;
          var _0x5ea4da = false;
          switch (_0xdef496) {
            case "number":
            case "int8":
            case "uint8":
            case "int16":
            case "uint16":
            case "int32":
            case "uint32":
            case "int64":
            case "uint64":
            case "float32":
            case "float64":
              _0x1bb2da = "number";
              if (isNaN(_0x1e67ce)) {
                console.log(`trying to encode "NaN" in ${_0x553275.constructor.name}#${_0x2d9f8e}`);
              }
              break;
            case "string":
              _0x1bb2da = "string";
              _0x5ea4da = true;
              break;
            case "boolean":
              return;
          }
          if (typeof _0x1e67ce !== _0x1bb2da && (!_0x5ea4da || _0x5ea4da && _0x1e67ce !== null)) {
            var _0x46809b = `'${JSON.stringify(_0x1e67ce)}'${_0x1e67ce && _0x1e67ce.constructor && ` (${_0x1e67ce.constructor.name})` || ""}`;
            throw new _0xa5809a(`a '${_0x1bb2da}' was expected, but ${_0x46809b} was provided in ${_0x553275.constructor.name}#${_0x2d9f8e}`);
          }
        }
        function _0x3b083d(_0x5ccb21, _0x357fd6, _0x12a5d3, _0x301ccc) {
          if (!(_0x5ccb21 instanceof _0x357fd6)) {
            throw new _0xa5809a(`a '${_0x357fd6.name}' was expected, but '${_0x5ccb21.constructor.name}' was provided in ${_0x12a5d3.constructor.name}#${_0x301ccc}`);
          }
        }
        function _0x3bc1da(_0xdd4d56, _0xe62705, _0x19f958, _0x259839, _0xbe933c) {
          _0x291106(_0x19f958, _0xdd4d56, _0x259839, _0xbe933c);
          var _0x214bf4 = _0x48a70a[_0xdd4d56];
          if (_0x214bf4) {
            _0x214bf4(_0xe62705, _0x19f958);
          } else {
            throw new _0xa5809a(`a '${_0xdd4d56}' was expected, but ${_0x19f958} was provided in ${_0x259839.constructor.name}#${_0xbe933c}`);
          }
        }
        function _0x1fd25b(_0xc85549, _0x1d6863, _0x50d37c) {
          return _0x3455a9[_0xc85549](_0x1d6863, _0x50d37c);
        }
        var _0x456512 = function () {
          function _0x14731e() {
            var _0x550284 = [];
            for (var _0x4d7d0a = 0; _0x4d7d0a < arguments.length; _0x4d7d0a++) {
              _0x550284[_0x4d7d0a] = arguments[_0x4d7d0a];
            }
            Object.defineProperties(this, {
              $changes: {
                value: new _0x4408f8(this, undefined, new _0x5dc6f3()),
                enumerable: false,
                writable: true
              },
              $callbacks: {
                value: undefined,
                enumerable: false,
                writable: true
              }
            });
            var _0x55b073 = this._definition.descriptors;
            if (_0x55b073) {
              Object.defineProperties(this, _0x55b073);
            }
            if (_0x550284[0]) {
              this.assign(_0x550284[0]);
            }
          }
          _0x14731e.onError = function (_0x162bfe) {
            console.error(_0x162bfe);
          };
          _0x14731e.is = function (_0x3fc383) {
            return _0x3fc383._definition && _0x3fc383._definition.schema !== undefined;
          };
          _0x14731e.prototype.onChange = function (_0x5b7349) {
            return _0x162952(this.$callbacks ||= {}, _0x39914a.OPERATION.REPLACE, _0x5b7349);
          };
          _0x14731e.prototype.onRemove = function (_0x13a54d) {
            return _0x162952(this.$callbacks ||= {}, _0x39914a.OPERATION.DELETE, _0x13a54d);
          };
          _0x14731e.prototype.assign = function (_0xc00a4c) {
            Object.assign(this, _0xc00a4c);
            return this;
          };
          Object.defineProperty(_0x14731e.prototype, "_definition", {
            get: function () {
              return this.constructor._definition;
            },
            enumerable: false,
            configurable: true
          });
          _0x14731e.prototype.setDirty = function (_0x4308ff, _0xd9a956) {
            this.$changes.change(_0x4308ff, _0xd9a956);
          };
          _0x14731e.prototype.listen = function (_0x368ea7, _0x55d138, _0x4d1146) {
            var _0x13b288 = this;
            if (_0x4d1146 === undefined) {
              _0x4d1146 = true;
            }
            if (!this.$callbacks) {
              this.$callbacks = {};
            }
            if (!this.$callbacks[_0x368ea7]) {
              this.$callbacks[_0x368ea7] = [];
            }
            this.$callbacks[_0x368ea7].push(_0x55d138);
            if (_0x4d1146 && this[_0x368ea7] !== undefined) {
              _0x55d138(this[_0x368ea7], undefined);
            }
            return function () {
              return _0x129b8e(_0x13b288.$callbacks[_0x368ea7], _0x13b288.$callbacks[_0x368ea7].indexOf(_0x55d138));
            };
          };
          _0x14731e.prototype.decode = function (_0x21742b, _0x436352 = {
            offset: 0
          }, _0x5ede21 = this) {
            var _0x2ebf72 = [];
            var _0x2c5d80 = this.$changes.root;
            var _0x569ae1 = _0x21742b.length;
            var _0x389d77 = 0;
            _0x2c5d80.refs.set(_0x389d77, this);
            while (_0x436352.offset < _0x569ae1) {
              var _0x35a2b8 = _0x21742b[_0x436352.offset++];
              if (_0x35a2b8 == _0x21580f) {
                _0x389d77 = _0x5bb8aa(_0x21742b, _0x436352);
                var _0x1ab55f = _0x2c5d80.refs.get(_0x389d77);
                if (!_0x1ab55f) {
                  throw new Error(`"refId" not found: ${_0x389d77}`);
                }
                _0x5ede21 = _0x1ab55f;
                continue;
              }
              var _0x19efe1 = _0x5ede21.$changes;
              var _0x7955f8 = _0x5ede21._definition !== undefined;
              var _0x58b440 = _0x7955f8 ? _0x35a2b8 >> 6 << 6 : _0x35a2b8;
              if (_0x58b440 === _0x39914a.OPERATION.CLEAR) {
                _0x5ede21.clear(_0x2ebf72);
                continue;
              }
              var _0x1d6082 = _0x7955f8 ? _0x35a2b8 % (_0x58b440 || 255) : _0x5bb8aa(_0x21742b, _0x436352);
              var _0x5eafaa = _0x7955f8 ? _0x5ede21._definition.fieldsByIndex[_0x1d6082] : "";
              var _0x107111 = _0x19efe1.getType(_0x1d6082);
              var _0x38c2e4 = undefined;
              var _0x4785c6 = undefined;
              var _0x1b82df = undefined;
              if (!_0x7955f8) {
                _0x4785c6 = _0x5ede21.getByIndex(_0x1d6082);
                if ((_0x58b440 & _0x39914a.OPERATION.ADD) === _0x39914a.OPERATION.ADD) {
                  _0x1b82df = _0x5ede21 instanceof _0x6823b ? _0x260bd8(_0x21742b, _0x436352) : _0x1d6082;
                  _0x5ede21.setIndex(_0x1d6082, _0x1b82df);
                } else {
                  _0x1b82df = _0x5ede21.getIndex(_0x1d6082);
                }
              } else {
                _0x4785c6 = _0x5ede21[`_${_0x5eafaa}`];
              }
              if ((_0x58b440 & _0x39914a.OPERATION.DELETE) === _0x39914a.OPERATION.DELETE) {
                if (_0x58b440 !== _0x39914a.OPERATION.DELETE_AND_ADD) {
                  _0x5ede21.deleteByIndex(_0x1d6082);
                }
                if (_0x4785c6 && _0x4785c6.$changes) {
                  _0x2c5d80.removeRef(_0x4785c6.$changes.refId);
                }
                _0x38c2e4 = null;
              }
              if (_0x5eafaa === undefined) {
                console.warn("@colyseus/schema: definition mismatch");
                var _0xfbe70d = {
                  offset: _0x436352.offset
                };
                while (_0x436352.offset < _0x569ae1) {
                  if (_0x43b4b7(_0x21742b, _0x436352)) {
                    _0xfbe70d.offset = _0x436352.offset + 1;
                    if (_0x2c5d80.refs.has(_0x5bb8aa(_0x21742b, _0xfbe70d))) {
                      break;
                    }
                  }
                  _0x436352.offset++;
                }
                continue;
              } else if (_0x58b440 === _0x39914a.OPERATION.DELETE) ;else if (_0x14731e.is(_0x107111)) {
                var _0x17a42d = _0x5bb8aa(_0x21742b, _0x436352);
                _0x38c2e4 = _0x2c5d80.refs.get(_0x17a42d);
                if (_0x58b440 !== _0x39914a.OPERATION.REPLACE) {
                  var _0x1d72cb = this.getSchemaType(_0x21742b, _0x436352, _0x107111);
                  if (!_0x38c2e4) {
                    _0x38c2e4 = this.createTypeInstance(_0x1d72cb);
                    _0x38c2e4.$changes.refId = _0x17a42d;
                    if (_0x4785c6) {
                      _0x38c2e4.$callbacks = _0x4785c6.$callbacks;
                      if (_0x4785c6.$changes.refId && _0x17a42d !== _0x4785c6.$changes.refId) {
                        _0x2c5d80.removeRef(_0x4785c6.$changes.refId);
                      }
                    }
                  }
                  _0x2c5d80.addRef(_0x17a42d, _0x38c2e4, _0x38c2e4 !== _0x4785c6);
                }
              } else if (typeof _0x107111 === "string") {
                _0x38c2e4 = _0x1fd25b(_0x107111, _0x21742b, _0x436352);
              } else {
                var _0x34b73b = _0x4bfd62(Object.keys(_0x107111)[0]);
                var _0x324894 = _0x5bb8aa(_0x21742b, _0x436352);
                var _0x5ee6db = _0x2c5d80.refs.has(_0x324894) ? _0x4785c6 || _0x2c5d80.refs.get(_0x324894) : new _0x34b73b.constructor();
                _0x38c2e4 = _0x5ee6db.clone(true);
                _0x38c2e4.$changes.refId = _0x324894;
                if (_0x4785c6) {
                  _0x38c2e4.$callbacks = _0x4785c6.$callbacks;
                  if (_0x4785c6.$changes.refId && _0x324894 !== _0x4785c6.$changes.refId) {
                    _0x2c5d80.removeRef(_0x4785c6.$changes.refId);
                    var _0x491c62 = _0x4785c6.entries();
                    var _0x500399 = undefined;
                    while ((_0x500399 = _0x491c62.next()) && !_0x500399.done) {
                      var _0xf35230 = _0x500399.value;
                      var _0x1d5a65 = _0xf35230[0];
                      var _0x519409 = _0xf35230[1];
                      _0x2ebf72.push({
                        refId: _0x324894,
                        op: _0x39914a.OPERATION.DELETE,
                        field: _0x1d5a65,
                        value: undefined,
                        previousValue: _0x519409
                      });
                    }
                  }
                }
                _0x2c5d80.addRef(_0x324894, _0x38c2e4, _0x5ee6db !== _0x4785c6);
              }
              if (_0x38c2e4 !== null && _0x38c2e4 !== undefined) {
                if (_0x38c2e4.$changes) {
                  _0x38c2e4.$changes.setParent(_0x19efe1.ref, _0x19efe1.root, _0x1d6082);
                }
                if (_0x5ede21 instanceof _0x14731e) {
                  _0x5ede21[_0x5eafaa] = _0x38c2e4;
                } else if (_0x5ede21 instanceof _0x6823b) {
                  var _0x1d5a65 = _0x1b82df;
                  _0x5ede21.$items.set(_0x1d5a65, _0x38c2e4);
                  _0x5ede21.$changes.allChanges.add(_0x1d6082);
                } else if (_0x5ede21 instanceof _0x426507) {
                  _0x5ede21.setAt(_0x1d6082, _0x38c2e4);
                } else if (_0x5ede21 instanceof _0x268a4d) {
                  var _0x572b91 = _0x5ede21.add(_0x38c2e4);
                  _0x5ede21.setIndex(_0x1d6082, _0x572b91);
                } else if (_0x5ede21 instanceof _0x16b015) {
                  var _0x572b91 = _0x5ede21.add(_0x38c2e4);
                  if (_0x572b91 !== false) {
                    _0x5ede21.setIndex(_0x1d6082, _0x572b91);
                  }
                }
              }
              if (_0x4785c6 !== _0x38c2e4) {
                _0x2ebf72.push({
                  refId: _0x389d77,
                  op: _0x58b440,
                  field: _0x5eafaa,
                  dynamicIndex: _0x1b82df,
                  value: _0x38c2e4,
                  previousValue: _0x4785c6
                });
              }
            }
            this._triggerChanges(_0x2ebf72);
            _0x2c5d80.garbageCollectDeletedRefs();
            return _0x2ebf72;
          };
          _0x14731e.prototype.encode = function (_0x32f91e = false, _0x2f5e84 = [], _0x329925 = false) {
            var _0x1bf22d = this.$changes;
            var _0x12cb38 = new WeakSet();
            var _0x5b8ea3 = [_0x1bf22d];
            var _0x1c87fd = 1;
            for (var _0x493360 = 0; _0x493360 < _0x1c87fd; _0x493360++) {
              var _0x273be7 = _0x5b8ea3[_0x493360];
              var _0x111995 = _0x273be7.ref;
              var _0x5b13c6 = _0x111995 instanceof _0x14731e;
              _0x273be7.ensureRefId();
              _0x12cb38.add(_0x273be7);
              if (_0x273be7 !== _0x1bf22d && (_0x273be7.changed || _0x32f91e)) {
                _0x2b0570(_0x2f5e84, _0x21580f);
                _0x1fbe17(_0x2f5e84, _0x273be7.refId);
              }
              var _0xc97cdb = _0x32f91e ? Array.from(_0x273be7.allChanges) : Array.from(_0x273be7.changes.values());
              for (var _0x581450 = 0, _0x365293 = _0xc97cdb.length; _0x581450 < _0x365293; _0x581450++) {
                var _0x30a932 = _0x32f91e ? {
                  op: _0x39914a.OPERATION.ADD,
                  index: _0xc97cdb[_0x581450]
                } : _0xc97cdb[_0x581450];
                var _0x3128b9 = _0x30a932.index;
                var _0x472e84 = _0x5b13c6 ? _0x111995._definition.fieldsByIndex && _0x111995._definition.fieldsByIndex[_0x3128b9] : _0x3128b9;
                var _0x1dd735 = _0x2f5e84.length;
                if (_0x30a932.op !== _0x39914a.OPERATION.TOUCH) {
                  if (_0x5b13c6) {
                    _0x2b0570(_0x2f5e84, _0x3128b9 | _0x30a932.op);
                  } else {
                    _0x2b0570(_0x2f5e84, _0x30a932.op);
                    if (_0x30a932.op === _0x39914a.OPERATION.CLEAR) {
                      continue;
                    }
                    _0x1fbe17(_0x2f5e84, _0x3128b9);
                  }
                }
                if (!_0x5b13c6 && (_0x30a932.op & _0x39914a.OPERATION.ADD) == _0x39914a.OPERATION.ADD) {
                  if (_0x111995 instanceof _0x6823b) {
                    var _0x208660 = _0x273be7.ref.$indexes.get(_0x3128b9);
                    _0x12f9e1(_0x2f5e84, _0x208660);
                  }
                }
                if (_0x30a932.op === _0x39914a.OPERATION.DELETE) {
                  continue;
                }
                var _0x318757 = _0x273be7.getType(_0x3128b9);
                var _0x56b600 = _0x273be7.getValue(_0x3128b9);
                if (_0x56b600 && _0x56b600.$changes && !_0x12cb38.has(_0x56b600.$changes)) {
                  _0x5b8ea3.push(_0x56b600.$changes);
                  _0x56b600.$changes.ensureRefId();
                  _0x1c87fd++;
                }
                if (_0x30a932.op === _0x39914a.OPERATION.TOUCH) {
                  continue;
                }
                if (_0x14731e.is(_0x318757)) {
                  _0x3b083d(_0x56b600, _0x318757, _0x111995, _0x472e84);
                  _0x1fbe17(_0x2f5e84, _0x56b600.$changes.refId);
                  if ((_0x30a932.op & _0x39914a.OPERATION.ADD) === _0x39914a.OPERATION.ADD) {
                    this.tryEncodeTypeId(_0x2f5e84, _0x318757, _0x56b600.constructor);
                  }
                } else if (typeof _0x318757 === "string") {
                  _0x3bc1da(_0x318757, _0x2f5e84, _0x56b600, _0x111995, _0x472e84);
                } else {
                  var _0xb95190 = _0x4bfd62(Object.keys(_0x318757)[0]);
                  _0x3b083d(_0x111995[`_${_0x472e84}`], _0xb95190.constructor, _0x111995, _0x472e84);
                  _0x1fbe17(_0x2f5e84, _0x56b600.$changes.refId);
                }
                if (_0x329925) {
                  _0x273be7.cache(_0x3128b9, _0x2f5e84.slice(_0x1dd735));
                }
              }
              if (!_0x32f91e && !_0x329925) {
                _0x273be7.discard();
              }
            }
            return _0x2f5e84;
          };
          _0x14731e.prototype.encodeAll = function (_0x146591) {
            return this.encode(true, [], _0x146591);
          };
          _0x14731e.prototype.applyFilters = function (_0x44d6f3, _0x4aba50) {
            if (_0x4aba50 === undefined) {
              _0x4aba50 = false;
            }
            var _0x5bfe4a = this;
            var _0x3dc837 = new Set();
            var _0x3ba27b = _0x59744f.get(_0x44d6f3);
            var _0x48eb28 = [this.$changes];
            var _0x5c1686 = 1;
            var _0x382062 = [];
            function _0x8884b5(_0x186713) {
              var _0x2e040d = _0x48eb28[_0x186713];
              if (_0x3dc837.has(_0x2e040d.refId)) {
                return "continue";
              }
              var _0x31754a = _0x2e040d.ref;
              var _0x2dc1b8 = _0x31754a instanceof _0x14731e;
              _0x2b0570(_0x382062, _0x21580f);
              _0x1fbe17(_0x382062, _0x2e040d.refId);
              var _0xef3edf = _0x3ba27b.refIds.has(_0x2e040d);
              var _0x1065a9 = _0x4aba50 || !_0xef3edf;
              _0x3ba27b.addRefId(_0x2e040d);
              var _0x420ad5 = _0x3ba27b.containerIndexes.get(_0x2e040d);
              var _0x301412 = _0x1065a9 ? Array.from(_0x2e040d.allChanges) : Array.from(_0x2e040d.changes.values());
              if (!_0x4aba50 && _0x2dc1b8 && _0x31754a._definition.indexesWithFilters) {
                var _0x20bba6 = _0x31754a._definition.indexesWithFilters;
                _0x20bba6.forEach(function (_0x1b20b9) {
                  if (!_0x420ad5.has(_0x1b20b9) && _0x2e040d.allChanges.has(_0x1b20b9)) {
                    if (_0x1065a9) {
                      _0x301412.push(_0x1b20b9);
                    } else {
                      _0x301412.push({
                        op: _0x39914a.OPERATION.ADD,
                        index: _0x1b20b9
                      });
                    }
                  }
                });
              }
              for (var _0x15d912 = 0, _0x470793 = _0x301412.length; _0x15d912 < _0x470793; _0x15d912++) {
                var _0x5a7e1d = _0x1065a9 ? {
                  op: _0x39914a.OPERATION.ADD,
                  index: _0x301412[_0x15d912]
                } : _0x301412[_0x15d912];
                if (_0x5a7e1d.op === _0x39914a.OPERATION.CLEAR) {
                  _0x2b0570(_0x382062, _0x5a7e1d.op);
                  continue;
                }
                var _0x5547a4 = _0x5a7e1d.index;
                if (_0x5a7e1d.op === _0x39914a.OPERATION.DELETE) {
                  if (_0x2dc1b8) {
                    _0x2b0570(_0x382062, _0x5a7e1d.op | _0x5547a4);
                  } else {
                    _0x2b0570(_0x382062, _0x5a7e1d.op);
                    _0x1fbe17(_0x382062, _0x5547a4);
                  }
                  continue;
                }
                var _0x30762a = _0x2e040d.getValue(_0x5547a4);
                var _0x507b7b = _0x2e040d.getType(_0x5547a4);
                if (_0x2dc1b8) {
                  var _0x86b339 = _0x31754a._definition.filters && _0x31754a._definition.filters[_0x5547a4];
                  if (_0x86b339 && !_0x86b339.call(_0x31754a, _0x44d6f3, _0x30762a, _0x5bfe4a)) {
                    if (_0x30762a && _0x30762a.$changes) {
                      _0x3dc837.add(_0x30762a.$changes.refId);
                    }
                    continue;
                  }
                } else {
                  var _0x456129 = _0x2e040d.parent;
                  var _0x86b339 = _0x2e040d.getChildrenFilter();
                  if (_0x86b339 && !_0x86b339.call(_0x456129, _0x44d6f3, _0x31754a.$indexes.get(_0x5547a4), _0x30762a, _0x5bfe4a)) {
                    if (_0x30762a && _0x30762a.$changes) {
                      _0x3dc837.add(_0x30762a.$changes.refId);
                    }
                    continue;
                  }
                }
                if (_0x30762a.$changes) {
                  _0x48eb28.push(_0x30762a.$changes);
                  _0x5c1686++;
                }
                if (_0x5a7e1d.op !== _0x39914a.OPERATION.TOUCH) {
                  if (_0x5a7e1d.op === _0x39914a.OPERATION.ADD || _0x2dc1b8) {
                    _0x382062.push.apply(_0x382062, _0x2e040d.caches[_0x5547a4] ?? []);
                    _0x420ad5.add(_0x5547a4);
                  } else if (_0x420ad5.has(_0x5547a4)) {
                    _0x382062.push.apply(_0x382062, _0x2e040d.caches[_0x5547a4] ?? []);
                  } else {
                    _0x420ad5.add(_0x5547a4);
                    _0x2b0570(_0x382062, _0x39914a.OPERATION.ADD);
                    _0x1fbe17(_0x382062, _0x5547a4);
                    if (_0x31754a instanceof _0x6823b) {
                      var _0x1c5980 = _0x2e040d.ref.$indexes.get(_0x5547a4);
                      _0x12f9e1(_0x382062, _0x1c5980);
                    }
                    if (_0x30762a.$changes) {
                      _0x1fbe17(_0x382062, _0x30762a.$changes.refId);
                    } else {
                      _0x48a70a[_0x507b7b](_0x382062, _0x30762a);
                    }
                  }
                } else if (_0x30762a.$changes && !_0x2dc1b8) {
                  _0x2b0570(_0x382062, _0x39914a.OPERATION.ADD);
                  _0x1fbe17(_0x382062, _0x5547a4);
                  if (_0x31754a instanceof _0x6823b) {
                    var _0x1c5980 = _0x2e040d.ref.$indexes.get(_0x5547a4);
                    _0x12f9e1(_0x382062, _0x1c5980);
                  }
                  _0x1fbe17(_0x382062, _0x30762a.$changes.refId);
                }
              }
            }
            for (var _0x56890c = 0; _0x56890c < _0x5c1686; _0x56890c++) {
              _0x8884b5(_0x56890c);
            }
            return _0x382062;
          };
          _0x14731e.prototype.clone = function () {
            var _0x1caf8b = new this.constructor();
            var _0x48bf15 = this._definition.schema;
            for (var _0x21b043 in _0x48bf15) {
              if (typeof this[_0x21b043] === "object" && typeof this[_0x21b043]?.clone === "function") {
                _0x1caf8b[_0x21b043] = this[_0x21b043].clone();
              } else {
                _0x1caf8b[_0x21b043] = this[_0x21b043];
              }
            }
            return _0x1caf8b;
          };
          _0x14731e.prototype.toJSON = function () {
            var _0xb3d6f6 = this._definition.schema;
            var _0x3d0d49 = this._definition.deprecated;
            var _0x5bf5b6 = {};
            for (var _0x517b6d in _0xb3d6f6) {
              if (!_0x3d0d49[_0x517b6d] && this[_0x517b6d] !== null && typeof this[_0x517b6d] !== "undefined") {
                _0x5bf5b6[_0x517b6d] = typeof this[_0x517b6d].toJSON === "function" ? this[_0x517b6d].toJSON() : this[`_${_0x517b6d}`];
              }
            }
            return _0x5bf5b6;
          };
          _0x14731e.prototype.discardAllChanges = function () {
            this.$changes.discardAll();
          };
          _0x14731e.prototype.getByIndex = function (_0x31e29c) {
            return this[this._definition.fieldsByIndex[_0x31e29c]];
          };
          _0x14731e.prototype.deleteByIndex = function (_0x3b812f) {
            this[this._definition.fieldsByIndex[_0x3b812f]] = undefined;
          };
          _0x14731e.prototype.tryEncodeTypeId = function (_0x1809a9, _0x531caa, _0x4a5507) {
            if (_0x531caa._typeid !== _0x4a5507._typeid) {
              _0x2b0570(_0x1809a9, _0x68369b);
              _0x1fbe17(_0x1809a9, _0x4a5507._typeid);
            }
          };
          _0x14731e.prototype.getSchemaType = function (_0x5c4f7e, _0x570714, _0x359d2) {
            var _0x51e45c;
            if (_0x5c4f7e[_0x570714.offset] === _0x68369b) {
              _0x570714.offset++;
              _0x51e45c = this.constructor._context.get(_0x5bb8aa(_0x5c4f7e, _0x570714));
            }
            return _0x51e45c || _0x359d2;
          };
          _0x14731e.prototype.createTypeInstance = function (_0x1264cf) {
            var _0x580fae = new _0x1264cf();
            _0x580fae.$changes.root = this.$changes.root;
            return _0x580fae;
          };
          _0x14731e.prototype._triggerChanges = function (_0x56b5fd) {
            var _0x5a0702;
            var _0x278c02;
            var _0x37f8f1;
            var _0x42b7cc;
            var _0x2945e;
            var _0x35a7dd;
            var _0x15a3f6;
            var _0x33a1c7;
            var _0x1d1bcb = new Set();
            var _0x508e42 = this.$changes.root.refs;
            function _0x4f2800(_0x3cc734) {
              var _0x218416 = _0x56b5fd[_0x3cc734];
              var _0xd95565 = _0x218416.refId;
              var _0x56a70b = _0x508e42.get(_0xd95565);
              var _0x1c3a8e = _0x56a70b.$callbacks;
              if ((_0x218416.op & _0x39914a.OPERATION.DELETE) === _0x39914a.OPERATION.DELETE && _0x218416.previousValue instanceof _0x14731e) {
                if ((_0x5a0702 = _0x218416.previousValue.$callbacks?.[_0x39914a.OPERATION.DELETE]) === null || _0x5a0702 === undefined) {
                  undefined;
                } else {
                  _0x5a0702.forEach(function (_0x32e007) {
                    return _0x32e007();
                  });
                }
              }
              if (!_0x1c3a8e) {
                return "continue";
              }
              if (_0x56a70b instanceof _0x14731e) {
                if (!_0x1d1bcb.has(_0xd95565)) {
                  try {
                    if ((_0x278c02 = _0x1c3a8e?.[_0x39914a.OPERATION.REPLACE]) === null || _0x278c02 === undefined) {
                      undefined;
                    } else {
                      _0x278c02.forEach(function (_0x8f609f) {
                        return _0x8f609f();
                      });
                    }
                  } catch (_0x3e4115) {
                    _0x14731e.onError(_0x3e4115);
                  }
                }
                try {
                  if (_0x1c3a8e.hasOwnProperty(_0x218416.field)) {
                    if ((_0x37f8f1 = _0x1c3a8e[_0x218416.field]) === null || _0x37f8f1 === undefined) {
                      undefined;
                    } else {
                      _0x37f8f1.forEach(function (_0x210236) {
                        return _0x210236(_0x218416.value, _0x218416.previousValue);
                      });
                    }
                  }
                } catch (_0x18edc9) {
                  _0x14731e.onError(_0x18edc9);
                }
              } else {
                if (_0x218416.op === _0x39914a.OPERATION.ADD && _0x218416.previousValue === undefined) {
                  if ((_0x42b7cc = _0x1c3a8e[_0x39914a.OPERATION.ADD]) === null || _0x42b7cc === undefined) {
                    undefined;
                  } else {
                    _0x42b7cc.forEach(function (_0x4e66ed) {
                      return _0x4e66ed(_0x218416.value, _0x218416.dynamicIndex ?? _0x218416.field);
                    });
                  }
                } else if (_0x218416.op === _0x39914a.OPERATION.DELETE) {
                  if (_0x218416.previousValue !== undefined) {
                    if ((_0x2945e = _0x1c3a8e[_0x39914a.OPERATION.DELETE]) === null || _0x2945e === undefined) {
                      undefined;
                    } else {
                      _0x2945e.forEach(function (_0x43f627) {
                        return _0x43f627(_0x218416.previousValue, _0x218416.dynamicIndex ?? _0x218416.field);
                      });
                    }
                  }
                } else if (_0x218416.op === _0x39914a.OPERATION.DELETE_AND_ADD) {
                  if (_0x218416.previousValue !== undefined) {
                    if ((_0x35a7dd = _0x1c3a8e[_0x39914a.OPERATION.DELETE]) === null || _0x35a7dd === undefined) {
                      undefined;
                    } else {
                      _0x35a7dd.forEach(function (_0x26b6f9) {
                        return _0x26b6f9(_0x218416.previousValue, _0x218416.dynamicIndex ?? _0x218416.field);
                      });
                    }
                  }
                  if ((_0x15a3f6 = _0x1c3a8e[_0x39914a.OPERATION.ADD]) === null || _0x15a3f6 === undefined) {
                    undefined;
                  } else {
                    _0x15a3f6.forEach(function (_0x17ccaa) {
                      return _0x17ccaa(_0x218416.value, _0x218416.dynamicIndex ?? _0x218416.field);
                    });
                  }
                }
                if (_0x218416.value !== _0x218416.previousValue) {
                  if ((_0x33a1c7 = _0x1c3a8e[_0x39914a.OPERATION.REPLACE]) === null || _0x33a1c7 === undefined) {
                    undefined;
                  } else {
                    _0x33a1c7.forEach(function (_0x55d50a) {
                      return _0x55d50a(_0x218416.value, _0x218416.dynamicIndex ?? _0x218416.field);
                    });
                  }
                }
              }
              _0x1d1bcb.add(_0xd95565);
            }
            for (var _0x176641 = 0; _0x176641 < _0x56b5fd.length; _0x176641++) {
              _0x4f2800(_0x176641);
            }
          };
          _0x14731e._definition = _0x39d16c.create();
          return _0x14731e;
        }();
        function _0x3e1219(_0x28d2dd) {
          var _0x2bfa22 = [_0x28d2dd.$changes];
          var _0x58f4e2 = 1;
          var _0x5c9806 = {};
          var _0x11765c = _0x5c9806;
          function _0x2754cd(_0xf4e7cf) {
            var _0x4f1007 = _0x2bfa22[_0xf4e7cf];
            _0x4f1007.changes.forEach(function (_0x5414ca) {
              var _0x59b2c7 = _0x4f1007.ref;
              var _0x88e155 = _0x5414ca.index;
              var _0x49a0ed = _0x59b2c7._definition ? _0x59b2c7._definition.fieldsByIndex[_0x88e155] : _0x59b2c7.$indexes.get(_0x88e155);
              _0x11765c[_0x49a0ed] = _0x4f1007.getValue(_0x88e155);
            });
          }
          for (var _0x1091b9 = 0; _0x1091b9 < _0x58f4e2; _0x1091b9++) {
            _0x2754cd(_0x1091b9);
          }
          return _0x5c9806;
        }
        var _0x34f1ca = {
          context: new _0x1388c7()
        };
        var _0x192c90 = function (_0xdeb6d6) {
          _0x18872e(_0x17cc06, _0xdeb6d6);
          function _0x17cc06() {
            return _0xdeb6d6 !== null && _0xdeb6d6.apply(this, arguments) || this;
          }
          _0x4d51b1([_0x257c0a("string", _0x34f1ca)], _0x17cc06.prototype, "name", undefined);
          _0x4d51b1([_0x257c0a("string", _0x34f1ca)], _0x17cc06.prototype, "type", undefined);
          _0x4d51b1([_0x257c0a("number", _0x34f1ca)], _0x17cc06.prototype, "referencedType", undefined);
          return _0x17cc06;
        }(_0x456512);
        var _0x25ec9a = function (_0x1d176b) {
          _0x18872e(_0x427b00, _0x1d176b);
          function _0x427b00() {
            var _0x1594a9 = _0x1d176b !== null && _0x1d176b.apply(this, arguments) || this;
            _0x1594a9.fields = new _0x426507();
            return _0x1594a9;
          }
          _0x4d51b1([_0x257c0a("number", _0x34f1ca)], _0x427b00.prototype, "id", undefined);
          _0x4d51b1([_0x257c0a([_0x192c90], _0x34f1ca)], _0x427b00.prototype, "fields", undefined);
          return _0x427b00;
        }(_0x456512);
        var _0x471e44 = function (_0x2d7358) {
          _0x18872e(_0x50f5e1, _0x2d7358);
          function _0x50f5e1() {
            var _0x3c0257 = _0x2d7358 !== null && _0x2d7358.apply(this, arguments) || this;
            _0x3c0257.types = new _0x426507();
            return _0x3c0257;
          }
          _0x50f5e1.encode = function (_0x4070e8) {
            var _0x1bd57b = _0x4070e8.constructor;
            var _0x9fe93e = new _0x50f5e1();
            _0x9fe93e.rootType = _0x1bd57b._typeid;
            function _0x4e1dd8(_0x33b700, _0x461348) {
              for (var _0xaa757a in _0x461348) {
                var _0x5e371d = new _0x192c90();
                _0x5e371d.name = _0xaa757a;
                var _0x4bf57f = undefined;
                if (typeof _0x461348[_0xaa757a] === "string") {
                  _0x4bf57f = _0x461348[_0xaa757a];
                } else {
                  var _0x4d70ca = _0x461348[_0xaa757a];
                  var _0x324f10 = undefined;
                  if (_0x456512.is(_0x4d70ca)) {
                    _0x4bf57f = "ref";
                    _0x324f10 = _0x461348[_0xaa757a];
                  } else {
                    _0x4bf57f = Object.keys(_0x4d70ca)[0];
                    if (typeof _0x4d70ca[_0x4bf57f] === "string") {
                      _0x4bf57f += ":" + _0x4d70ca[_0x4bf57f];
                    } else {
                      _0x324f10 = _0x4d70ca[_0x4bf57f];
                    }
                  }
                  _0x5e371d.referencedType = _0x324f10 ? _0x324f10._typeid : -1;
                }
                _0x5e371d.type = _0x4bf57f;
                _0x33b700.fields.push(_0x5e371d);
              }
              _0x9fe93e.types.push(_0x33b700);
            }
            var _0x10c234 = _0x1bd57b._context?.types;
            for (var _0x5a6df1 in _0x10c234) {
              var _0x42c722 = new _0x25ec9a();
              _0x42c722.id = Number(_0x5a6df1);
              _0x4e1dd8(_0x42c722, _0x10c234[_0x5a6df1]._definition.schema);
            }
            return _0x9fe93e.encodeAll();
          };
          _0x50f5e1.decode = function (_0x38e621, _0x2998c3) {
            var _0x140bfe = new _0x1388c7();
            var _0x27be06 = new _0x50f5e1();
            _0x27be06.decode(_0x38e621, _0x2998c3);
            var _0x30c49e = _0x27be06.types.reduce(function (_0x343feb, _0xff1419) {
              var _0xc37bda = function (_0x240f57) {
                _0x18872e(_0x5ba83e, _0x240f57);
                function _0x5ba83e() {
                  return _0x240f57 !== null && _0x240f57.apply(this, arguments) || this;
                }
                return _0x5ba83e;
              }(_0x456512);
              var _0xd55d6c = _0xff1419.id;
              _0x343feb[_0xd55d6c] = _0xc37bda;
              _0x140bfe.add(_0xc37bda, _0xd55d6c);
              return _0x343feb;
            }, {});
            _0x27be06.types.forEach(function (_0x20dc17) {
              var _0x262da9 = _0x30c49e[_0x20dc17.id];
              _0x20dc17.fields.forEach(function (_0x4cc20b) {
                var _0x2bc370;
                if (_0x4cc20b.referencedType !== undefined) {
                  var _0x91ee2f = _0x4cc20b.type;
                  var _0x14bb48 = _0x30c49e[_0x4cc20b.referencedType];
                  if (!_0x14bb48) {
                    var _0x1eb3a4 = _0x4cc20b.type.split(":");
                    _0x91ee2f = _0x1eb3a4[0];
                    _0x14bb48 = _0x1eb3a4[1];
                  }
                  if (_0x91ee2f === "ref") {
                    _0x257c0a(_0x14bb48, {
                      context: _0x140bfe
                    })(_0x262da9.prototype, _0x4cc20b.name);
                  } else {
                    _0x257c0a((_0x2bc370 = {}, _0x2bc370[_0x91ee2f] = _0x14bb48, _0x2bc370), {
                      context: _0x140bfe
                    })(_0x262da9.prototype, _0x4cc20b.name);
                  }
                } else {
                  _0x257c0a(_0x4cc20b.type, {
                    context: _0x140bfe
                  })(_0x262da9.prototype, _0x4cc20b.name);
                }
              });
            });
            var _0x2d163f = _0x30c49e[_0x27be06.rootType];
            var _0x36616a = new _0x2d163f();
            for (var _0x45ae82 in _0x2d163f._definition.schema) {
              var _0x3ffcca = _0x2d163f._definition.schema[_0x45ae82];
              if (typeof _0x3ffcca !== "string") {
                _0x36616a[_0x45ae82] = typeof _0x3ffcca === "function" ? new _0x3ffcca() : new (_0x4bfd62(Object.keys(_0x3ffcca)[0]).constructor)();
              }
            }
            return _0x36616a;
          };
          _0x4d51b1([_0x257c0a([_0x25ec9a], _0x34f1ca)], _0x50f5e1.prototype, "types", undefined);
          _0x4d51b1([_0x257c0a("number", _0x34f1ca)], _0x50f5e1.prototype, "rootType", undefined);
          return _0x50f5e1;
        }(_0x456512);
        _0xb2c661("map", {
          constructor: _0x6823b
        });
        _0xb2c661("array", {
          constructor: _0x426507
        });
        _0xb2c661("set", {
          constructor: _0x16b015
        });
        _0xb2c661("collection", {
          constructor: _0x268a4d
        });
        _0x39914a.ArraySchema = _0x426507;
        _0x39914a.CollectionSchema = _0x268a4d;
        _0x39914a.Context = _0x1388c7;
        _0x39914a.MapSchema = _0x6823b;
        _0x39914a.Reflection = _0x471e44;
        _0x39914a.ReflectionField = _0x192c90;
        _0x39914a.ReflectionType = _0x25ec9a;
        _0x39914a.Schema = _0x456512;
        _0x39914a.SchemaDefinition = _0x39d16c;
        _0x39914a.SetSchema = _0x16b015;
        _0x39914a.decode = _0x3455a9;
        _0x39914a.defineTypes = _0x549e7d;
        _0x39914a.deprecated = _0x1524cb;
        _0x39914a.dumpChanges = _0x3e1219;
        _0x39914a.encode = _0x48a70a;
        _0x39914a.filter = _0x3fe92c;
        _0x39914a.filterChildren = _0x1b4c71;
        _0x39914a.hasFilter = _0xb7d3d6;
        _0x39914a.registerType = _0xb2c661;
        _0x39914a.type = _0x257c0a;
      });
    },
    "./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/3rd_party/discord.js": (_0x13137a, _0x2e4f98) => {
      'use strict';

      Object.defineProperty(_0x2e4f98, "__esModule", {
        value: true
      });
      _0x2e4f98.discordURLBuilder = undefined;
      function _0x5925f0(_0x88619c) {
        const _0x41cc37 = window?.location?.hostname || "localhost";
        const _0x5d1db7 = _0x88619c.hostname.split(".");
        const _0x3f3984 = !_0x88619c.hostname.includes("trycloudflare.com") && !_0x88619c.hostname.includes("discordsays.com") && _0x5d1db7.length > 2 ? "/" + _0x5d1db7[0] : "";
        if (_0x88619c.pathname.startsWith("/.proxy")) {
          return _0x88619c.protocol + "//" + _0x41cc37 + _0x3f3984 + _0x88619c.pathname + _0x88619c.search;
        } else {
          return _0x88619c.protocol + "//" + _0x41cc37 + "/.proxy/colyseus" + _0x3f3984 + _0x88619c.pathname + _0x88619c.search;
        }
      }
      _0x2e4f98.discordURLBuilder = _0x5925f0;
    },
    "./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/Auth.js": function (_0x12b8e7, _0x2ce68e, _0x4ee896) {
      'use strict';

      var _0x26b5b4 = this && this.__awaiter || function (_0x300bd3, _0x37a7c9, _0x195978, _0x3e32f7) {
        function _0x52f66b(_0x48d05b) {
          if (_0x48d05b instanceof _0x195978) {
            return _0x48d05b;
          } else {
            return new _0x195978(function (_0x4a862f) {
              _0x4a862f(_0x48d05b);
            });
          }
        }
        return new (_0x195978 ||= Promise)(function (_0x100e94, _0x37fdc7) {
          function _0x5f5469(_0x27c2da) {
            try {
              _0x242175(_0x3e32f7.next(_0x27c2da));
            } catch (_0x1a0644) {
              _0x37fdc7(_0x1a0644);
            }
          }
          function _0x7f1834(_0x1387c0) {
            try {
              _0x242175(_0x3e32f7.throw(_0x1387c0));
            } catch (_0x6c300e) {
              _0x37fdc7(_0x6c300e);
            }
          }
          function _0x242175(_0x42312e) {
            if (_0x42312e.done) {
              _0x100e94(_0x42312e.value);
            } else {
              _0x52f66b(_0x42312e.value).then(_0x5f5469, _0x7f1834);
            }
          }
          _0x242175((_0x3e32f7 = _0x3e32f7.apply(_0x300bd3, _0x37a7c9 || [])).next());
        });
      };
      var _0x34528a = this && this.__classPrivateFieldGet || function (_0x41068e, _0x5e8608, _0xb7f245, _0x2aeb7e) {
        if (_0xb7f245 === "a" && !_0x2aeb7e) {
          throw new TypeError("Private accessor was defined without a getter");
        }
        if (typeof _0x5e8608 === "function" ? _0x41068e !== _0x5e8608 || !_0x2aeb7e : !_0x5e8608.has(_0x41068e)) {
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
        }
        if (_0xb7f245 === "m") {
          return _0x2aeb7e;
        } else if (_0xb7f245 === "a") {
          return _0x2aeb7e.call(_0x41068e);
        } else if (_0x2aeb7e) {
          return _0x2aeb7e.value;
        } else {
          return _0x5e8608.get(_0x41068e);
        }
      };
      var _0x462a4d = this && this.__classPrivateFieldSet || function (_0x3f7bb5, _0x16c969, _0xe9abb9, _0x3be815, _0x287d05) {
        if (_0x3be815 === "m") {
          throw new TypeError("Private method is not writable");
        }
        if (_0x3be815 === "a" && !_0x287d05) {
          throw new TypeError("Private accessor was defined without a setter");
        }
        if (typeof _0x16c969 === "function" ? _0x3f7bb5 !== _0x16c969 || !_0x287d05 : !_0x16c969.has(_0x3f7bb5)) {
          throw new TypeError("Cannot write private member to an object whose class did not declare it");
        }
        if (_0x3be815 === "a") {
          _0x287d05.call(_0x3f7bb5, _0xe9abb9);
        } else if (_0x287d05) {
          _0x287d05.value = _0xe9abb9;
        } else {
          _0x16c969.set(_0x3f7bb5, _0xe9abb9);
        }
        return _0xe9abb9;
      };
      var _0x5e252c;
      var _0xe9b741;
      var _0x368257;
      var _0x2ab704;
      Object.defineProperty(_0x2ce68e, "__esModule", {
        value: true
      });
      _0x2ce68e.Auth = undefined;
      const _0x4f71a2 = _0x4ee896("./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/Storage.js");
      const _0x1d38c3 = _0x4ee896("./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/core/nanoevents.js");
      class _0x11b4c1 {
        constructor(_0x41f58f) {
          this.http = _0x41f58f;
          this.settings = {
            path: "/auth",
            key: "colyseus-auth-token"
          };
          _0x5e252c.set(this, false);
          _0xe9b741.set(this, undefined);
          _0x368257.set(this, undefined);
          _0x2ab704.set(this, (0, _0x1d38c3.createNanoEvents)());
          (0, _0x4f71a2.getItem)(this.settings.key, _0xa93d22 => this.token = _0xa93d22);
        }
        set token(_0x291ccb) {
          this.http.authToken = _0x291ccb;
        }
        get token() {
          return this.http.authToken;
        }
        onChange(_0x2338bc) {
          const _0x1fa7f8 = _0x34528a(this, _0x2ab704, "f").on("change", _0x2338bc);
          if (!_0x34528a(this, _0x5e252c, "f")) {
            _0x462a4d(this, _0xe9b741, new Promise((_0x2452ff, _0xbd168c) => {
              this.getUserData().then(_0x114d68 => {
                this.emitChange(Object.assign(Object.assign({}, _0x114d68), {
                  token: this.token
                }));
              }).catch(_0xc4c165 => {
                this.emitChange({
                  user: null,
                  token: undefined
                });
              }).finally(() => {
                _0x2452ff();
              });
            }), "f");
          }
          _0x462a4d(this, _0x5e252c, true, "f");
          return _0x1fa7f8;
        }
        getUserData() {
          return _0x26b5b4(this, undefined, undefined, function* () {
            if (this.token) {
              return (yield this.http.get(this.settings.path + "/userdata")).data;
            } else {
              throw new Error("missing auth.token");
            }
          });
        }
        registerWithEmailAndPassword(_0x22d61b, _0x55c22d, _0x3042dd) {
          return _0x26b5b4(this, undefined, undefined, function* () {
            const _0x423bd0 = (yield this.http.post(this.settings.path + "/register", {
              body: {
                email: _0x22d61b,
                password: _0x55c22d,
                options: _0x3042dd
              }
            })).data;
            this.emitChange(_0x423bd0);
            return _0x423bd0;
          });
        }
        signInWithEmailAndPassword(_0x398672, _0x14b95f) {
          return _0x26b5b4(this, undefined, undefined, function* () {
            const _0x401537 = (yield this.http.post(this.settings.path + "/login", {
              body: {
                email: _0x398672,
                password: _0x14b95f
              }
            })).data;
            this.emitChange(_0x401537);
            return _0x401537;
          });
        }
        signInAnonymously(_0x4685ca) {
          return _0x26b5b4(this, undefined, undefined, function* () {
            const _0x3f6937 = (yield this.http.post(this.settings.path + "/anonymous", {
              body: {
                options: _0x4685ca
              }
            })).data;
            this.emitChange(_0x3f6937);
            return _0x3f6937;
          });
        }
        sendPasswordResetEmail(_0x7a5463) {
          return _0x26b5b4(this, undefined, undefined, function* () {
            return (yield this.http.post(this.settings.path + "/forgot-password", {
              body: {
                email: _0x7a5463
              }
            })).data;
          });
        }
        signInWithProvider(_0x3741b3, _0x10bef2 = {}) {
          return _0x26b5b4(this, undefined, undefined, function* () {
            return new Promise((_0x11742, _0x44e9ae) => {
              const _0x1a9705 = _0x10bef2.width || 480;
              const _0x204f9d = _0x10bef2.height || 768;
              const _0x2e57de = this.token ? "?token=" + this.token : "";
              const _0x495179 = "Login with " + (_0x3741b3[0].toUpperCase() + _0x3741b3.substring(1));
              const _0xbb5b7b = this.http.client.getHttpEndpoint((_0x10bef2.prefix || this.settings.path + "/provider") + "/" + _0x3741b3 + _0x2e57de);
              const _0x3b2fa9 = screen.width / 2 - _0x1a9705 / 2;
              const _0x3f7f7a = screen.height / 2 - _0x204f9d / 2;
              _0x462a4d(this, _0x368257, window.open(_0xbb5b7b, _0x495179, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + _0x1a9705 + ", height=" + _0x204f9d + ", top=" + _0x3f7f7a + ", left=" + _0x3b2fa9), "f");
              const _0x1ae6f8 = _0x1355e4 => {
                if (_0x1355e4.data.user === undefined && _0x1355e4.data.token === undefined) {
                  return;
                }
                clearInterval(_0x53be87);
                _0x34528a(this, _0x368257, "f").close();
                _0x462a4d(this, _0x368257, undefined, "f");
                window.removeEventListener("message", _0x1ae6f8);
                if (_0x1355e4.data.error !== undefined) {
                  _0x44e9ae(_0x1355e4.data.error);
                } else {
                  _0x11742(_0x1355e4.data);
                  this.emitChange(_0x1355e4.data);
                }
              };
              const _0x53be87 = setInterval(() => {
                if (!_0x34528a(this, _0x368257, "f") || _0x34528a(this, _0x368257, "f").closed) {
                  _0x462a4d(this, _0x368257, undefined, "f");
                  _0x44e9ae("cancelled");
                  window.removeEventListener("message", _0x1ae6f8);
                }
              }, 200);
              window.addEventListener("message", _0x1ae6f8);
            });
          });
        }
        signOut() {
          return _0x26b5b4(this, undefined, undefined, function* () {
            this.emitChange({
              user: null,
              token: null
            });
          });
        }
        emitChange(_0x3ecae6) {
          if (_0x3ecae6.token !== undefined) {
            this.token = _0x3ecae6.token;
            if (_0x3ecae6.token === null) {
              (0, _0x4f71a2.removeItem)(this.settings.key);
            } else {
              (0, _0x4f71a2.setItem)(this.settings.key, _0x3ecae6.token);
            }
          }
          _0x34528a(this, _0x2ab704, "f").emit("change", _0x3ecae6);
        }
      }
      _0x2ce68e.Auth = _0x11b4c1;
      _0x5e252c = new WeakMap();
      _0xe9b741 = new WeakMap();
      _0x368257 = new WeakMap();
      _0x2ab704 = new WeakMap();
    },
    "./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/Client.js": function (_0x3624ef, _0x9a7a6f, _0x4d82e0) {
      'use strict';

      var _0x5ad180 = this && this.__awaiter || function (_0x3306fd, _0x34d102, _0x43bdbe, _0x27b657) {
        function _0xc8b951(_0x49bad1) {
          if (_0x49bad1 instanceof _0x43bdbe) {
            return _0x49bad1;
          } else {
            return new _0x43bdbe(function (_0x3c438a) {
              _0x3c438a(_0x49bad1);
            });
          }
        }
        return new (_0x43bdbe ||= Promise)(function (_0x3513c1, _0x28c75e) {
          function _0x2e40ae(_0x3957f2) {
            try {
              _0x548c31(_0x27b657.next(_0x3957f2));
            } catch (_0x28c751) {
              _0x28c75e(_0x28c751);
            }
          }
          function _0x3b315d(_0x302740) {
            try {
              _0x548c31(_0x27b657.throw(_0x302740));
            } catch (_0x28d332) {
              _0x28c75e(_0x28d332);
            }
          }
          function _0x548c31(_0x4225ef) {
            if (_0x4225ef.done) {
              _0x3513c1(_0x4225ef.value);
            } else {
              _0xc8b951(_0x4225ef.value).then(_0x2e40ae, _0x3b315d);
            }
          }
          _0x548c31((_0x27b657 = _0x27b657.apply(_0x3306fd, _0x34d102 || [])).next());
        });
      };
      Object.defineProperty(_0x9a7a6f, "__esModule", {
        value: true
      });
      _0x9a7a6f.Client = _0x9a7a6f.MatchMakeError = undefined;
      const _0xe06788 = _0x4d82e0("./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/errors/ServerError.js");
      const _0xcbbfd5 = _0x4d82e0("./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/Room.js");
      const _0x280c31 = _0x4d82e0("./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/HTTP.js");
      const _0x4a9eb5 = _0x4d82e0("./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/Auth.js");
      const _0x1ffd18 = _0x4d82e0("./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/3rd_party/discord.js");
      class _0x1524bc extends Error {
        constructor(_0x400270, _0x111eaf) {
          super(_0x400270);
          this.code = _0x111eaf;
          Object.setPrototypeOf(this, _0x1524bc.prototype);
        }
      }
      _0x9a7a6f.MatchMakeError = _0x1524bc;
      const _0x3ed9a2 = typeof window !== "undefined" && typeof window?.location?.hostname !== "undefined" ? window.location.protocol.replace("http", "ws") + "//" + window.location.hostname + (window.location.port && ":" + window.location.port) : "ws://127.0.0.1:2567";
      class _0x526ab0 {
        constructor(_0x442611 = _0x3ed9a2, _0x1306a0) {
          var _0xe06b2e;
          if (typeof _0x442611 === "string") {
            const _0x268db4 = _0x442611.startsWith("/") ? new URL(_0x442611, _0x3ed9a2) : new URL(_0x442611);
            const _0x468e98 = _0x268db4.protocol === "https:" || _0x268db4.protocol === "wss:";
            const _0x2505b6 = Number(_0x268db4.port || (_0x468e98 ? 443 : 80));
            this.settings = {
              hostname: _0x268db4.hostname,
              pathname: _0x268db4.pathname,
              port: _0x2505b6,
              secure: _0x468e98
            };
          } else {
            if (_0x442611.port === undefined) {
              _0x442611.port = _0x442611.secure ? 443 : 80;
            }
            if (_0x442611.pathname === undefined) {
              _0x442611.pathname = "";
            }
            this.settings = _0x442611;
          }
          if (this.settings.pathname.endsWith("/")) {
            this.settings.pathname = this.settings.pathname.slice(0, -1);
          }
          this.http = new _0x280c31.HTTP(this, _0x1306a0?.headers || {});
          this.auth = new _0x4a9eb5.Auth(this.http);
          this.urlBuilder = _0x1306a0?.urlBuilder;
          if (!this.urlBuilder && typeof window !== "undefined" && ((_0xe06b2e = window?.location?.hostname) === null || _0xe06b2e === undefined ? undefined : _0xe06b2e.includes("discordsays.com"))) {
            this.urlBuilder = _0x1ffd18.discordURLBuilder;
            console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder.");
          }
        }
        joinOrCreate(_0x2e9a43, _0x59a505 = {}, _0x4933ac) {
          return _0x5ad180(this, undefined, undefined, function* () {
            return yield this.createMatchMakeRequest("joinOrCreate", _0x2e9a43, _0x59a505, _0x4933ac);
          });
        }
        create(_0x1b9bf6, _0x613dbf = {}, _0x97507c) {
          return _0x5ad180(this, undefined, undefined, function* () {
            return yield this.createMatchMakeRequest("create", _0x1b9bf6, _0x613dbf, _0x97507c);
          });
        }
        join(_0x30b9b4, _0x1bfb6e = {}, _0x42a261) {
          return _0x5ad180(this, undefined, undefined, function* () {
            return yield this.createMatchMakeRequest("join", _0x30b9b4, _0x1bfb6e, _0x42a261);
          });
        }
        joinById(_0x203c38, _0x47633c = {}, _0x2d17bf) {
          return _0x5ad180(this, undefined, undefined, function* () {
            return yield this.createMatchMakeRequest("joinById", _0x203c38, _0x47633c, _0x2d17bf);
          });
        }
        reconnect(_0x333a25, _0x51204f) {
          return _0x5ad180(this, undefined, undefined, function* () {
            if (typeof _0x333a25 === "string" && typeof _0x51204f === "string") {
              throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");
            }
            const [_0xa5ba8, _0x118d6e] = _0x333a25.split(":");
            if (!_0xa5ba8 || !_0x118d6e) {
              throw new Error("Invalid reconnection token format.\nThe format should be roomId:reconnectionToken");
            }
            return yield this.createMatchMakeRequest("reconnect", _0xa5ba8, {
              reconnectionToken: _0x118d6e
            }, _0x51204f);
          });
        }
        getAvailableRooms(_0x4be7bb = "") {
          return _0x5ad180(this, undefined, undefined, function* () {
            return (yield this.http.get("matchmake/" + _0x4be7bb, {
              headers: {
                Accept: "application/json"
              }
            })).data;
          });
        }
        consumeSeatReservation(_0x14163b, _0x4b34ef, _0xaf6da8) {
          return _0x5ad180(this, undefined, undefined, function* () {
            const _0x4c820c = this.createRoom(_0x14163b.room.name, _0x4b34ef);
            _0x4c820c.roomId = _0x14163b.room.roomId;
            _0x4c820c.sessionId = _0x14163b.sessionId;
            const _0x54c7d1 = {
              sessionId: _0x4c820c.sessionId
            };
            if (_0x14163b.reconnectionToken) {
              _0x54c7d1.reconnectionToken = _0x14163b.reconnectionToken;
            }
            const _0xb020e1 = _0xaf6da8 || _0x4c820c;
            _0x4c820c.connect(this.buildEndpoint(_0x14163b.room, _0x54c7d1), _0x14163b.devMode && (() => _0x5ad180(this, undefined, undefined, function* () {
              console.info("[Colyseus devMode]: " + String.fromCodePoint(128260) + " Re-establishing connection with room id '" + _0x4c820c.roomId + "'...");
              let _0x80f934 = 0;
              let _0x23e28b = 8;
              const _0x52bfc3 = () => _0x5ad180(this, undefined, undefined, function* () {
                _0x80f934++;
                try {
                  yield this.consumeSeatReservation(_0x14163b, _0x4b34ef, _0xb020e1);
                  console.info("[Colyseus devMode]: " + String.fromCodePoint(9989) + " Successfully re-established connection with room '" + _0x4c820c.roomId + "'");
                } catch (_0x4f4148) {
                  if (_0x80f934 < _0x23e28b) {
                    console.info("[Colyseus devMode]: " + String.fromCodePoint(128260) + " retrying... (" + _0x80f934 + " out of " + _0x23e28b + ")");
                    setTimeout(_0x52bfc3, 2000);
                  } else {
                    console.info("[Colyseus devMode]: " + String.fromCodePoint(10060) + " Failed to reconnect. Is your server running? Please check server logs.");
                  }
                }
              });
              setTimeout(_0x52bfc3, 2000);
            })), _0xb020e1, this.http.headers);
            return new Promise((_0x13734c, _0x2429ca) => {
              const _0x30efae = (_0x4b627d, _0x39be4e) => _0x2429ca(new _0xe06788.ServerError(_0x4b627d, _0x39be4e));
              _0xb020e1.onError.once(_0x30efae);
              _0xb020e1.onJoin.once(() => {
                _0xb020e1.onError.remove(_0x30efae);
                _0x13734c(_0xb020e1);
              });
            });
          });
        }
        createMatchMakeRequest(_0x11703b, _0x186283, _0xce76ae = {}, _0x3f5bb0, _0x46039c) {
          return _0x5ad180(this, undefined, undefined, function* () {
            const _0x425776 = (yield this.http.post("matchmake/" + _0x11703b + "/" + _0x186283, {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              },
              body: JSON.stringify(_0xce76ae)
            })).data;
            if (_0x425776.error) {
              throw new _0x1524bc(_0x425776.error, _0x425776.code);
            }
            if (_0x11703b === "reconnect") {
              _0x425776.reconnectionToken = _0xce76ae.reconnectionToken;
            }
            return yield this.consumeSeatReservation(_0x425776, _0x3f5bb0, _0x46039c);
          });
        }
        createRoom(_0x462b4d, _0x54500a) {
          return new _0xcbbfd5.Room(_0x462b4d, _0x54500a);
        }
        buildEndpoint(_0x4db9fc, _0x169f07 = {}) {
          const _0x2c8450 = [];
          for (const _0x292989 in _0x169f07) {
            if (!_0x169f07.hasOwnProperty(_0x292989)) {
              continue;
            }
            _0x2c8450.push(_0x292989 + "=" + _0x169f07[_0x292989]);
          }
          let _0x38e2dd = this.settings.secure ? "wss://" : "ws://";
          if (_0x4db9fc.publicAddress) {
            _0x38e2dd += "" + _0x4db9fc.publicAddress;
          } else {
            _0x38e2dd += "" + this.settings.hostname + this.getEndpointPort() + this.settings.pathname;
          }
          const _0x54b9e4 = _0x38e2dd + "/" + _0x4db9fc.processId + "/" + _0x4db9fc.roomId + "?" + _0x2c8450.join("&");
          if (this.urlBuilder) {
            return this.urlBuilder(new URL(_0x54b9e4));
          } else {
            return _0x54b9e4;
          }
        }
        getHttpEndpoint(_0x7ee7ae = "") {
          const _0x59dd98 = _0x7ee7ae.startsWith("/") ? _0x7ee7ae : "/" + _0x7ee7ae;
          const _0x2d9bcb = (this.settings.secure ? "https" : "http") + "://" + this.settings.hostname + this.getEndpointPort() + this.settings.pathname + _0x59dd98;
          if (this.urlBuilder) {
            return this.urlBuilder(new URL(_0x2d9bcb));
          } else {
            return _0x2d9bcb;
          }
        }
        getEndpointPort() {
          if (this.settings.port !== 80 && this.settings.port !== 443) {
            return ":" + this.settings.port;
          } else {
            return "";
          }
        }
      }
      _0x9a7a6f.Client = _0x526ab0;
    },
    "./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/Connection.js": (_0x5287af, _0x39d17c, _0x191ef0) => {
      'use strict';

      Object.defineProperty(_0x39d17c, "__esModule", {
        value: true
      });
      _0x39d17c.Connection = undefined;
      const _0x2973ce = _0x191ef0("./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/transport/WebSocketTransport.js");
      class _0x5c6f37 {
        constructor() {
          this.events = {};
          this.transport = new _0x2973ce.WebSocketTransport(this.events);
        }
        send(_0x42359f) {
          this.transport.send(_0x42359f);
        }
        connect(_0x65f4d4, _0x4a4bfa) {
          this.transport.connect(_0x65f4d4, _0x4a4bfa);
        }
        close(_0x32fd7d, _0x5ef1eb) {
          this.transport.close(_0x32fd7d, _0x5ef1eb);
        }
        get isOpen() {
          return this.transport.isOpen;
        }
      }
      _0x39d17c.Connection = _0x5c6f37;
    },
    "./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/HTTP.js": function (_0x42376c, _0x50f03d, _0x8370bb) {
      'use strict';

      var _0x265510 = this && this.__createBinding || (Object.create ? function (_0xb6c785, _0x44622a, _0x41d9d9, _0x19c070 = _0x41d9d9) {
        var _0x499efb = Object.getOwnPropertyDescriptor(_0x44622a, _0x41d9d9);
        if (!_0x499efb || ("get" in _0x499efb ? !_0x44622a.__esModule : _0x499efb.writable || _0x499efb.configurable)) {
          _0x499efb = {
            enumerable: true,
            get: function () {
              return _0x44622a[_0x41d9d9];
            }
          };
        }
        Object.defineProperty(_0xb6c785, _0x19c070, _0x499efb);
      } : function (_0x563fa1, _0x5c376f, _0x128cb2, _0x5baca0 = _0x128cb2) {
        _0x563fa1[_0x5baca0] = _0x5c376f[_0x128cb2];
      });
      var _0x35e159 = this && this.__setModuleDefault || (Object.create ? function (_0x46fd21, _0x3366df) {
        Object.defineProperty(_0x46fd21, "default", {
          enumerable: true,
          value: _0x3366df
        });
      } : function (_0x11923a, _0x455d11) {
        _0x11923a.default = _0x455d11;
      });
      var _0x30d613 = this && this.__importStar || function (_0xdc43e5) {
        if (_0xdc43e5 && _0xdc43e5.__esModule) {
          return _0xdc43e5;
        }
        var _0x543fcf = {};
        if (_0xdc43e5 != null) {
          for (var _0x3a8f4d in _0xdc43e5) {
            if (_0x3a8f4d !== "default" && Object.prototype.hasOwnProperty.call(_0xdc43e5, _0x3a8f4d)) {
              _0x265510(_0x543fcf, _0xdc43e5, _0x3a8f4d);
            }
          }
        }
        _0x35e159(_0x543fcf, _0xdc43e5);
        return _0x543fcf;
      };
      Object.defineProperty(_0x50f03d, "__esModule", {
        value: true
      });
      _0x50f03d.HTTP = undefined;
      const _0x499d44 = _0x8370bb("./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/errors/ServerError.js");
      const _0x33370d = _0x30d613(_0x8370bb("./node_modules/.pnpm/httpie@2.0.0-next.13/node_modules/httpie/xhr/index.mjs"));
      class _0x7a877e {
        constructor(_0x3d89ed, _0x4c1c5b = {}) {
          this.client = _0x3d89ed;
          this.headers = _0x4c1c5b;
        }
        get(_0x11bb01, _0x4f0645 = {}) {
          return this.request("get", _0x11bb01, _0x4f0645);
        }
        post(_0x31fc79, _0x17134e = {}) {
          return this.request("post", _0x31fc79, _0x17134e);
        }
        del(_0x41493e, _0x4a2c82 = {}) {
          return this.request("del", _0x41493e, _0x4a2c82);
        }
        put(_0x478ecc, _0x5eccc6 = {}) {
          return this.request("put", _0x478ecc, _0x5eccc6);
        }
        request(_0x4b567b, _0xb10650, _0x285e45 = {}) {
          return _0x33370d[_0x4b567b](this.client.getHttpEndpoint(_0xb10650), this.getOptions(_0x285e45)).catch(_0x273ae4 => {
            const _0xed81d = _0x273ae4.statusCode;
            const _0x29adf9 = _0x273ae4.data?.error || _0x273ae4.statusMessage || _0x273ae4.message;
            if (!_0xed81d && !_0x29adf9) {
              throw _0x273ae4;
            }
            throw new _0x499d44.ServerError(_0xed81d, _0x29adf9);
          });
        }
        getOptions(_0x5e6506) {
          _0x5e6506.headers = Object.assign({}, this.headers, _0x5e6506.headers);
          if (this.authToken) {
            _0x5e6506.headers.Authorization = "Bearer " + this.authToken;
          }
          if (typeof cc !== "undefined" && cc.sys && cc.sys.isNative) {} else {
            _0x5e6506.withCredentials = true;
          }
          return _0x5e6506;
        }
      }
      _0x50f03d.HTTP = _0x7a877e;
    },
    "./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/Protocol.js": (_0x18018b, _0x483959) => {
      'use strict';

      Object.defineProperty(_0x483959, "__esModule", {
        value: true
      });
      _0x483959.utf8Length = _0x483959.utf8Read = _0x483959.ErrorCode = _0x483959.Protocol = undefined;
      var _0x49f811;
      (function (_0xf945f8) {
        _0xf945f8[_0xf945f8.HANDSHAKE = 9] = "HANDSHAKE";
        _0xf945f8[_0xf945f8.JOIN_ROOM = 10] = "JOIN_ROOM";
        _0xf945f8[_0xf945f8.ERROR = 11] = "ERROR";
        _0xf945f8[_0xf945f8.LEAVE_ROOM = 12] = "LEAVE_ROOM";
        _0xf945f8[_0xf945f8.ROOM_DATA = 13] = "ROOM_DATA";
        _0xf945f8[_0xf945f8.ROOM_STATE = 14] = "ROOM_STATE";
        _0xf945f8[_0xf945f8.ROOM_STATE_PATCH = 15] = "ROOM_STATE_PATCH";
        _0xf945f8[_0xf945f8.ROOM_DATA_SCHEMA = 16] = "ROOM_DATA_SCHEMA";
        _0xf945f8[_0xf945f8.ROOM_DATA_BYTES = 17] = "ROOM_DATA_BYTES";
      })(_0x49f811 = _0x483959.Protocol ||= {});
      var _0x33a3f8;
      (function (_0x510421) {
        _0x510421[_0x510421.MATCHMAKE_NO_HANDLER = 4210] = "MATCHMAKE_NO_HANDLER";
        _0x510421[_0x510421.MATCHMAKE_INVALID_CRITERIA = 4211] = "MATCHMAKE_INVALID_CRITERIA";
        _0x510421[_0x510421.MATCHMAKE_INVALID_ROOM_ID = 4212] = "MATCHMAKE_INVALID_ROOM_ID";
        _0x510421[_0x510421.MATCHMAKE_UNHANDLED = 4213] = "MATCHMAKE_UNHANDLED";
        _0x510421[_0x510421.MATCHMAKE_EXPIRED = 4214] = "MATCHMAKE_EXPIRED";
        _0x510421[_0x510421.AUTH_FAILED = 4215] = "AUTH_FAILED";
        _0x510421[_0x510421.APPLICATION_ERROR = 4216] = "APPLICATION_ERROR";
      })(_0x33a3f8 = _0x483959.ErrorCode ||= {});
      function _0x3a57b1(_0x12bc96, _0xc0bbfb) {
        const _0x5189b3 = _0x12bc96[_0xc0bbfb++];
        var _0x19e511 = "";
        var _0x351347 = 0;
        for (var _0x4ebbd6 = _0xc0bbfb, _0x3778f5 = _0xc0bbfb + _0x5189b3; _0x4ebbd6 < _0x3778f5; _0x4ebbd6++) {
          var _0x1256e5 = _0x12bc96[_0x4ebbd6];
          if ((_0x1256e5 & 128) === 0) {
            _0x19e511 += String.fromCharCode(_0x1256e5);
            continue;
          }
          if ((_0x1256e5 & 224) === 192) {
            _0x19e511 += String.fromCharCode((_0x1256e5 & 31) << 6 | _0x12bc96[++_0x4ebbd6] & 63);
            continue;
          }
          if ((_0x1256e5 & 240) === 224) {
            _0x19e511 += String.fromCharCode((_0x1256e5 & 15) << 12 | (_0x12bc96[++_0x4ebbd6] & 63) << 6 | (_0x12bc96[++_0x4ebbd6] & 63) << 0);
            continue;
          }
          if ((_0x1256e5 & 248) === 240) {
            _0x351347 = (_0x1256e5 & 7) << 18 | (_0x12bc96[++_0x4ebbd6] & 63) << 12 | (_0x12bc96[++_0x4ebbd6] & 63) << 6 | (_0x12bc96[++_0x4ebbd6] & 63) << 0;
            if (_0x351347 >= 65536) {
              _0x351347 -= 65536;
              _0x19e511 += String.fromCharCode((_0x351347 >>> 10) + 55296, (_0x351347 & 1023) + 56320);
            } else {
              _0x19e511 += String.fromCharCode(_0x351347);
            }
            continue;
          }
          throw new Error("Invalid byte " + _0x1256e5.toString(16));
        }
        return _0x19e511;
      }
      _0x483959.utf8Read = _0x3a57b1;
      function _0x5b7a43(_0x3b49d5 = "") {
        let _0x3524d8 = 0;
        let _0x5e9181 = 0;
        for (let _0x14e48c = 0, _0x169d4b = _0x3b49d5.length; _0x14e48c < _0x169d4b; _0x14e48c++) {
          _0x3524d8 = _0x3b49d5.charCodeAt(_0x14e48c);
          if (_0x3524d8 < 128) {
            _0x5e9181 += 1;
          } else if (_0x3524d8 < 2048) {
            _0x5e9181 += 2;
          } else if (_0x3524d8 < 55296 || _0x3524d8 >= 57344) {
            _0x5e9181 += 3;
          } else {
            _0x14e48c++;
            _0x5e9181 += 4;
          }
        }
        return _0x5e9181 + 1;
      }
      _0x483959.utf8Length = _0x5b7a43;
    },
    "./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/Room.js": function (_0x24a2bc, _0x48b0a8, _0x160867) {
      'use strict';

      var _0xb35642 = this && this.__createBinding || (Object.create ? function (_0xb12646, _0x22cec7, _0x20fe03, _0x3c2a3e = _0x20fe03) {
        var _0x48e527 = Object.getOwnPropertyDescriptor(_0x22cec7, _0x20fe03);
        if (!_0x48e527 || ("get" in _0x48e527 ? !_0x22cec7.__esModule : _0x48e527.writable || _0x48e527.configurable)) {
          _0x48e527 = {
            enumerable: true,
            get: function () {
              return _0x22cec7[_0x20fe03];
            }
          };
        }
        Object.defineProperty(_0xb12646, _0x3c2a3e, _0x48e527);
      } : function (_0x100f78, _0x18b73f, _0x217cb6, _0x820d15 = _0x217cb6) {
        _0x100f78[_0x820d15] = _0x18b73f[_0x217cb6];
      });
      var _0x322fc2 = this && this.__setModuleDefault || (Object.create ? function (_0x604b0c, _0x5cbdcb) {
        Object.defineProperty(_0x604b0c, "default", {
          enumerable: true,
          value: _0x5cbdcb
        });
      } : function (_0x28fad6, _0x2940d0) {
        _0x28fad6.default = _0x2940d0;
      });
      var _0x20d6e0 = this && this.__importStar || function (_0x2cb45a) {
        if (_0x2cb45a && _0x2cb45a.__esModule) {
          return _0x2cb45a;
        }
        var _0x4dd82a = {};
        if (_0x2cb45a != null) {
          for (var _0x24740e in _0x2cb45a) {
            if (_0x24740e !== "default" && Object.prototype.hasOwnProperty.call(_0x2cb45a, _0x24740e)) {
              _0xb35642(_0x4dd82a, _0x2cb45a, _0x24740e);
            }
          }
        }
        _0x322fc2(_0x4dd82a, _0x2cb45a);
        return _0x4dd82a;
      };
      Object.defineProperty(_0x48b0a8, "__esModule", {
        value: true
      });
      _0x48b0a8.Room = undefined;
      const _0x84a1f1 = _0x20d6e0(_0x160867("./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/msgpack/index.js"));
      const _0x642c7c = _0x160867("./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/Connection.js");
      const _0x4cc7ad = _0x160867("./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/Protocol.js");
      const _0x363075 = _0x160867("./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/serializer/Serializer.js");
      const _0x1db54f = _0x160867("./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/core/nanoevents.js");
      const _0x21421b = _0x160867("./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/core/signal.js");
      const _0x39a128 = _0x160867("./node_modules/.pnpm/@colyseus+schema@2.0.37/node_modules/@colyseus/schema/build/umd/index.js");
      const _0x17cb15 = _0x160867("./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/errors/ServerError.js");
      class _0x5c0e5e {
        constructor(_0x3b52c7, _0x3f8b88) {
          this.onStateChange = (0, _0x21421b.createSignal)();
          this.onError = (0, _0x21421b.createSignal)();
          this.onLeave = (0, _0x21421b.createSignal)();
          this.onJoin = (0, _0x21421b.createSignal)();
          this.hasJoined = false;
          this.onMessageHandlers = (0, _0x1db54f.createNanoEvents)();
          this.roomId = null;
          this.name = _0x3b52c7;
          if (_0x3f8b88) {
            this.serializer = new ((0, _0x363075.getSerializer)("schema"))();
            this.rootSchema = _0x3f8b88;
            this.serializer.state = new _0x3f8b88();
          }
          this.onError((_0x5ea76e, _0x383747) => {
            var _0x160be4;
            if ((_0x160be4 = console.warn) === null || _0x160be4 === undefined) {
              return undefined;
            } else {
              return _0x160be4.call(console, "colyseus.js - onError => (" + _0x5ea76e + ") " + _0x383747);
            }
          });
          this.onLeave(() => this.removeAllListeners());
        }
        get id() {
          return this.roomId;
        }
        connect(_0x46efbd, _0x201b72, _0x3569a0 = this, _0x2955ec) {
          const _0x19be42 = new _0x642c7c.Connection();
          _0x3569a0.connection = _0x19be42;
          _0x19be42.events.onmessage = _0x5c0e5e.prototype.onMessageCallback.bind(_0x3569a0);
          _0x19be42.events.onclose = function (_0x3c1c97) {
            var _0x2c588c;
            if (!_0x3569a0.hasJoined) {
              if ((_0x2c588c = console.warn) === null || _0x2c588c === undefined) {
                undefined;
              } else {
                _0x2c588c.call(console, "Room connection was closed unexpectedly (" + _0x3c1c97.code + "): " + _0x3c1c97.reason);
              }
              _0x3569a0.onError.invoke(_0x3c1c97.code, _0x3c1c97.reason);
              return;
            }
            if (_0x3c1c97.code === _0x17cb15.CloseCode.DEVMODE_RESTART && _0x201b72) {
              _0x201b72();
            } else {
              _0x3569a0.onLeave.invoke(_0x3c1c97.code, _0x3c1c97.reason);
              _0x3569a0.destroy();
            }
          };
          _0x19be42.events.onerror = function (_0x4e8ca8) {
            var _0x4dedcb;
            if ((_0x4dedcb = console.warn) === null || _0x4dedcb === undefined) {
              undefined;
            } else {
              _0x4dedcb.call(console, "Room, onError (" + _0x4e8ca8.code + "): " + _0x4e8ca8.reason);
            }
            _0x3569a0.onError.invoke(_0x4e8ca8.code, _0x4e8ca8.reason);
          };
          _0x19be42.connect(_0x46efbd, _0x2955ec);
        }
        leave(_0x93db3f = true) {
          return new Promise(_0x180279 => {
            this.onLeave(_0x4c5ef9 => _0x180279(_0x4c5ef9));
            if (this.connection) {
              if (_0x93db3f) {
                this.connection.send([_0x4cc7ad.Protocol.LEAVE_ROOM]);
              } else {
                this.connection.close();
              }
            } else {
              this.onLeave.invoke(_0x17cb15.CloseCode.CONSENTED);
            }
          });
        }
        onMessage(_0x2fd541, _0x566c56) {
          return this.onMessageHandlers.on(this.getMessageHandlerKey(_0x2fd541), _0x566c56);
        }
        send(_0x27088c, _0xfa3297) {
          const _0x39d202 = [_0x4cc7ad.Protocol.ROOM_DATA];
          if (typeof _0x27088c === "string") {
            _0x39a128.encode.string(_0x39d202, _0x27088c);
          } else {
            _0x39a128.encode.number(_0x39d202, _0x27088c);
          }
          let _0x34e5b0;
          if (_0xfa3297 !== undefined) {
            const _0x5465c9 = _0x84a1f1.encode(_0xfa3297);
            _0x34e5b0 = new Uint8Array(_0x39d202.length + _0x5465c9.byteLength);
            _0x34e5b0.set(new Uint8Array(_0x39d202), 0);
            _0x34e5b0.set(new Uint8Array(_0x5465c9), _0x39d202.length);
          } else {
            _0x34e5b0 = new Uint8Array(_0x39d202);
          }
          this.connection.send(_0x34e5b0.buffer);
        }
        sendBytes(_0x7ae9f9, _0x231bc8) {
          const _0x1dcb41 = [_0x4cc7ad.Protocol.ROOM_DATA_BYTES];
          if (typeof _0x7ae9f9 === "string") {
            _0x39a128.encode.string(_0x1dcb41, _0x7ae9f9);
          } else {
            _0x39a128.encode.number(_0x1dcb41, _0x7ae9f9);
          }
          let _0x1eafc8;
          _0x1eafc8 = new Uint8Array(_0x1dcb41.length + (_0x231bc8.byteLength || _0x231bc8.length));
          _0x1eafc8.set(new Uint8Array(_0x1dcb41), 0);
          _0x1eafc8.set(new Uint8Array(_0x231bc8), _0x1dcb41.length);
          this.connection.send(_0x1eafc8.buffer);
        }
        get state() {
          return this.serializer.getState();
        }
        removeAllListeners() {
          this.onJoin.clear();
          this.onStateChange.clear();
          this.onError.clear();
          this.onLeave.clear();
          this.onMessageHandlers.events = {};
        }
        onMessageCallback(_0x402450) {
          const _0x8ef0fb = Array.from(new Uint8Array(_0x402450.data));
          const _0x28d6f9 = _0x8ef0fb[0];
          if (_0x28d6f9 === _0x4cc7ad.Protocol.JOIN_ROOM) {
            let _0x2ca308 = 1;
            const _0x120146 = (0, _0x4cc7ad.utf8Read)(_0x8ef0fb, _0x2ca308);
            _0x2ca308 += (0, _0x4cc7ad.utf8Length)(_0x120146);
            this.serializerId = (0, _0x4cc7ad.utf8Read)(_0x8ef0fb, _0x2ca308);
            _0x2ca308 += (0, _0x4cc7ad.utf8Length)(this.serializerId);
            if (!this.serializer) {
              const _0x30b552 = (0, _0x363075.getSerializer)(this.serializerId);
              this.serializer = new _0x30b552();
            }
            if (_0x8ef0fb.length > _0x2ca308 && this.serializer.handshake) {
              this.serializer.handshake(_0x8ef0fb, {
                offset: _0x2ca308
              });
            }
            this.reconnectionToken = this.roomId + ":" + _0x120146;
            this.hasJoined = true;
            this.onJoin.invoke();
            this.connection.send([_0x4cc7ad.Protocol.JOIN_ROOM]);
          } else if (_0x28d6f9 === _0x4cc7ad.Protocol.ERROR) {
            const _0x1b9e8b = {
              offset: 1
            };
            const _0xb2eb97 = _0x39a128.decode.number(_0x8ef0fb, _0x1b9e8b);
            const _0x43dda9 = _0x39a128.decode.string(_0x8ef0fb, _0x1b9e8b);
            this.onError.invoke(_0xb2eb97, _0x43dda9);
          } else if (_0x28d6f9 === _0x4cc7ad.Protocol.LEAVE_ROOM) {
            this.leave();
          } else if (_0x28d6f9 === _0x4cc7ad.Protocol.ROOM_DATA_SCHEMA) {
            const _0xce4ad1 = {
              offset: 1
            };
            const _0x3bf519 = this.serializer.getState().constructor._context;
            const _0x31e460 = _0x3bf519.get(_0x39a128.decode.number(_0x8ef0fb, _0xce4ad1));
            const _0x318453 = new _0x31e460();
            _0x318453.decode(_0x8ef0fb, _0xce4ad1);
            this.dispatchMessage(_0x31e460, _0x318453);
          } else if (_0x28d6f9 === _0x4cc7ad.Protocol.ROOM_STATE) {
            _0x8ef0fb.shift();
            this.setState(_0x8ef0fb);
          } else if (_0x28d6f9 === _0x4cc7ad.Protocol.ROOM_STATE_PATCH) {
            _0x8ef0fb.shift();
            this.patch(_0x8ef0fb);
          } else if (_0x28d6f9 === _0x4cc7ad.Protocol.ROOM_DATA) {
            const _0x285a9f = {
              offset: 1
            };
            const _0x2e1e49 = _0x39a128.decode.stringCheck(_0x8ef0fb, _0x285a9f) ? _0x39a128.decode.string(_0x8ef0fb, _0x285a9f) : _0x39a128.decode.number(_0x8ef0fb, _0x285a9f);
            const _0x1e190b = _0x8ef0fb.length > _0x285a9f.offset ? _0x84a1f1.decode(_0x402450.data, _0x285a9f.offset) : undefined;
            this.dispatchMessage(_0x2e1e49, _0x1e190b);
          } else if (_0x28d6f9 === _0x4cc7ad.Protocol.ROOM_DATA_BYTES) {
            const _0x53e7a5 = {
              offset: 1
            };
            const _0xc24432 = _0x39a128.decode.stringCheck(_0x8ef0fb, _0x53e7a5) ? _0x39a128.decode.string(_0x8ef0fb, _0x53e7a5) : _0x39a128.decode.number(_0x8ef0fb, _0x53e7a5);
            this.dispatchMessage(_0xc24432, new Uint8Array(_0x8ef0fb.slice(_0x53e7a5.offset)));
          }
        }
        setState(_0x5f01af) {
          this.serializer.setState(_0x5f01af);
          this.onStateChange.invoke(this.serializer.getState());
        }
        patch(_0x4f1db5) {
          this.serializer.patch(_0x4f1db5);
          this.onStateChange.invoke(this.serializer.getState());
        }
        dispatchMessage(_0x4cf982, _0x14727b) {
          var _0x53776c;
          const _0x27e503 = this.getMessageHandlerKey(_0x4cf982);
          if (this.onMessageHandlers.events[_0x27e503]) {
            this.onMessageHandlers.emit(_0x27e503, _0x14727b);
          } else if (this.onMessageHandlers.events["*"]) {
            this.onMessageHandlers.emit("*", _0x4cf982, _0x14727b);
          } else if ((_0x53776c = console.warn) === null || _0x53776c === undefined) {
            undefined;
          } else {
            _0x53776c.call(console, "colyseus.js: onMessage() not registered for type '" + _0x4cf982 + "'.");
          }
        }
        destroy() {
          if (this.serializer) {
            this.serializer.teardown();
          }
        }
        getMessageHandlerKey(_0x7c5f03) {
          switch (typeof _0x7c5f03) {
            case "function":
              return "$" + _0x7c5f03._typeid;
            case "string":
              return _0x7c5f03;
            case "number":
              return "i" + _0x7c5f03;
            default:
              throw new Error("invalid message type.");
          }
        }
      }
      _0x48b0a8.Room = _0x5c0e5e;
    },
    "./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/Storage.js": (_0x4aebe2, _0x412994) => {
      'use strict';

      Object.defineProperty(_0x412994, "__esModule", {
        value: true
      });
      _0x412994.getItem = _0x412994.removeItem = _0x412994.setItem = undefined;
      let _0x469bf4;
      function _0x40ef70() {
        if (!_0x469bf4) {
          try {
            _0x469bf4 = typeof cc !== "undefined" && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : window.localStorage;
          } catch (_0x45f80c) {}
        }
        if (!_0x469bf4) {
          _0x469bf4 = {
            cache: {},
            setItem: function (_0x3e8e47, _0x827a0d) {
              this.cache[_0x3e8e47] = _0x827a0d;
            },
            getItem: function (_0x25a96f) {
              this.cache[_0x25a96f];
            },
            removeItem: function (_0x3984de) {
              delete this.cache[_0x3984de];
            }
          };
        }
        return _0x469bf4;
      }
      function _0x17f43f(_0x34d61, _0xc64c43) {
        _0x40ef70().setItem(_0x34d61, _0xc64c43);
      }
      _0x412994.setItem = _0x17f43f;
      function _0x3ba3c9(_0x2a9a6b) {
        _0x40ef70().removeItem(_0x2a9a6b);
      }
      _0x412994.removeItem = _0x3ba3c9;
      function _0x376968(_0x207997, _0x5544f4) {
        const _0x18f113 = _0x40ef70().getItem(_0x207997);
        if (typeof Promise === "undefined" || !(_0x18f113 instanceof Promise)) {
          _0x5544f4(_0x18f113);
        } else {
          _0x18f113.then(_0x15f9ce => _0x5544f4(_0x15f9ce));
        }
      }
      _0x412994.getItem = _0x376968;
    },
    "./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/core/nanoevents.js": (_0x4d1e48, _0x27729a) => {
      'use strict';

      Object.defineProperty(_0x27729a, "__esModule", {
        value: true
      });
      _0x27729a.createNanoEvents = undefined;
      const _0x5c8e0b = () => ({
        emit(_0x495a0a, ..._0x5732ad) {
          let _0x1fefcc = this.events[_0x495a0a] || [];
          for (let _0x4adb1b = 0, _0x55dec2 = _0x1fefcc.length; _0x4adb1b < _0x55dec2; _0x4adb1b++) {
            _0x1fefcc[_0x4adb1b](..._0x5732ad);
          }
        },
        events: {},
        on(_0x12fc46, _0x375f6f) {
          var _0x55cef4;
          if (!((_0x55cef4 = this.events[_0x12fc46]) === null || _0x55cef4 === undefined ? undefined : _0x55cef4.push(_0x375f6f))) {
            this.events[_0x12fc46] = [_0x375f6f];
          }
          return () => {
            var _0x322a05;
            this.events[_0x12fc46] = (_0x322a05 = this.events[_0x12fc46]) === null || _0x322a05 === undefined ? undefined : _0x322a05.filter(_0x9476b0 => _0x375f6f !== _0x9476b0);
          };
        }
      });
      _0x27729a.createNanoEvents = _0x5c8e0b;
    },
    "./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/core/signal.js": (_0x3b14b3, _0x46bd3a) => {
      'use strict';

      Object.defineProperty(_0x46bd3a, "__esModule", {
        value: true
      });
      _0x46bd3a.createSignal = _0x46bd3a.EventEmitter = undefined;
      class _0x5d3fff {
        constructor() {
          this.handlers = [];
        }
        register(_0x5358b5, _0x3e1d7b = false) {
          this.handlers.push(_0x5358b5);
          return this;
        }
        invoke(..._0x4fc088) {
          this.handlers.forEach(_0x1337f6 => _0x1337f6.apply(this, _0x4fc088));
        }
        invokeAsync(..._0xfd4b23) {
          return Promise.all(this.handlers.map(_0x56fbc8 => _0x56fbc8.apply(this, _0xfd4b23)));
        }
        remove(_0x180e95) {
          const _0x170e68 = this.handlers.indexOf(_0x180e95);
          this.handlers[_0x170e68] = this.handlers[this.handlers.length - 1];
          this.handlers.pop();
        }
        clear() {
          this.handlers = [];
        }
      }
      _0x46bd3a.EventEmitter = _0x5d3fff;
      function _0x3223a0() {
        const _0x11107d = new _0x5d3fff();
        function _0x263f68(_0xfaa83b) {
          return _0x11107d.register(_0xfaa83b, this === null);
        }
        ;
        _0x263f68.once = _0x2cfa3f => {
          const _0x637fc4 = function (..._0x238927) {
            _0x2cfa3f.apply(this, _0x238927);
            _0x11107d.remove(_0x637fc4);
          };
          _0x11107d.register(_0x637fc4);
        };
        _0x263f68.remove = _0x498356 => _0x11107d.remove(_0x498356);
        _0x263f68.invoke = (..._0x1b5bbe) => _0x11107d.invoke(..._0x1b5bbe);
        _0x263f68.invokeAsync = (..._0x10db9d) => _0x11107d.invokeAsync(..._0x10db9d);
        _0x263f68.clear = () => _0x11107d.clear();
        return _0x263f68;
      }
      _0x46bd3a.createSignal = _0x3223a0;
    },
    "./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/errors/ServerError.js": (_0x2d7f14, _0xd1895) => {
      'use strict';

      Object.defineProperty(_0xd1895, "__esModule", {
        value: true
      });
      _0xd1895.ServerError = _0xd1895.CloseCode = undefined;
      var _0x5a9ee3;
      (function (_0x67f826) {
        _0x67f826[_0x67f826.CONSENTED = 4000] = "CONSENTED";
        _0x67f826[_0x67f826.DEVMODE_RESTART = 4010] = "DEVMODE_RESTART";
      })(_0x5a9ee3 = _0xd1895.CloseCode ||= {});
      class _0x1ae867 extends Error {
        constructor(_0x1892dd, _0xb7c1e8) {
          super(_0xb7c1e8);
          this.name = "ServerError";
          this.code = _0x1892dd;
        }
      }
      _0xd1895.ServerError = _0x1ae867;
    },
    "./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/index.js": (_0x1083b7, _0x499de3, _0x122012) => {
      'use strict';

      Object.defineProperty(_0x499de3, "__esModule", {
        value: true
      });
      _0x499de3.SchemaSerializer = _0x499de3.registerSerializer = _0x499de3.Auth = _0x499de3.Room = _0x499de3.ErrorCode = _0x499de3.Protocol = _0x499de3.MatchMakeError = _0x499de3.Client = undefined;
      _0x122012("./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/legacy.js");
      var _0x477c25 = _0x122012("./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/Client.js");
      Object.defineProperty(_0x499de3, "Client", {
        enumerable: true,
        get: function () {
          return _0x477c25.Client;
        }
      });
      Object.defineProperty(_0x499de3, "MatchMakeError", {
        enumerable: true,
        get: function () {
          return _0x477c25.MatchMakeError;
        }
      });
      var _0x148d28 = _0x122012("./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/Protocol.js");
      Object.defineProperty(_0x499de3, "Protocol", {
        enumerable: true,
        get: function () {
          return _0x148d28.Protocol;
        }
      });
      Object.defineProperty(_0x499de3, "ErrorCode", {
        enumerable: true,
        get: function () {
          return _0x148d28.ErrorCode;
        }
      });
      var _0x4217ed = _0x122012("./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/Room.js");
      Object.defineProperty(_0x499de3, "Room", {
        enumerable: true,
        get: function () {
          return _0x4217ed.Room;
        }
      });
      var _0x3ae3f9 = _0x122012("./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/Auth.js");
      Object.defineProperty(_0x499de3, "Auth", {
        enumerable: true,
        get: function () {
          return _0x3ae3f9.Auth;
        }
      });
      const _0x31fc31 = _0x122012("./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/serializer/SchemaSerializer.js");
      Object.defineProperty(_0x499de3, "SchemaSerializer", {
        enumerable: true,
        get: function () {
          return _0x31fc31.SchemaSerializer;
        }
      });
      const _0x10b22b = _0x122012("./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/serializer/NoneSerializer.js");
      const _0x35e032 = _0x122012("./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/serializer/Serializer.js");
      Object.defineProperty(_0x499de3, "registerSerializer", {
        enumerable: true,
        get: function () {
          return _0x35e032.registerSerializer;
        }
      });
      (0, _0x35e032.registerSerializer)("schema", _0x31fc31.SchemaSerializer);
      (0, _0x35e032.registerSerializer)("none", _0x10b22b.NoneSerializer);
    },
    "./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/legacy.js": () => {
      if (!ArrayBuffer.isView) {
        ArrayBuffer.isView = _0xa744e3 => {
          return _0xa744e3 !== null && typeof _0xa744e3 === "object" && _0xa744e3.buffer instanceof ArrayBuffer;
        };
      }
      if (typeof globalThis === "undefined" && typeof window !== "undefined") {
        window.globalThis = window;
      }
    },
    "./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/msgpack/index.js": (_0x1d7f78, _0x395894) => {
      'use strict';

      Object.defineProperty(_0x395894, "__esModule", {
        value: true
      });
      _0x395894.decode = _0x395894.encode = undefined;
      function _0x4c8be0(_0x5152f1, _0x3d21a0) {
        this._offset = _0x3d21a0;
        if (_0x5152f1 instanceof ArrayBuffer) {
          this._buffer = _0x5152f1;
          this._view = new DataView(this._buffer);
        } else if (ArrayBuffer.isView(_0x5152f1)) {
          this._buffer = _0x5152f1.buffer;
          this._view = new DataView(this._buffer, _0x5152f1.byteOffset, _0x5152f1.byteLength);
        } else {
          throw new Error("Invalid argument");
        }
      }
      function _0x70f235(_0x20cfc7, _0x42f670, _0x565965) {
        var _0x4ff099 = "";
        var _0x455757 = 0;
        for (var _0x11f071 = _0x42f670, _0xfb5e58 = _0x42f670 + _0x565965; _0x11f071 < _0xfb5e58; _0x11f071++) {
          var _0x5ae3bd = _0x20cfc7.getUint8(_0x11f071);
          if ((_0x5ae3bd & 128) === 0) {
            _0x4ff099 += String.fromCharCode(_0x5ae3bd);
            continue;
          }
          if ((_0x5ae3bd & 224) === 192) {
            _0x4ff099 += String.fromCharCode((_0x5ae3bd & 31) << 6 | _0x20cfc7.getUint8(++_0x11f071) & 63);
            continue;
          }
          if ((_0x5ae3bd & 240) === 224) {
            _0x4ff099 += String.fromCharCode((_0x5ae3bd & 15) << 12 | (_0x20cfc7.getUint8(++_0x11f071) & 63) << 6 | (_0x20cfc7.getUint8(++_0x11f071) & 63) << 0);
            continue;
          }
          if ((_0x5ae3bd & 248) === 240) {
            _0x455757 = (_0x5ae3bd & 7) << 18 | (_0x20cfc7.getUint8(++_0x11f071) & 63) << 12 | (_0x20cfc7.getUint8(++_0x11f071) & 63) << 6 | (_0x20cfc7.getUint8(++_0x11f071) & 63) << 0;
            if (_0x455757 >= 65536) {
              _0x455757 -= 65536;
              _0x4ff099 += String.fromCharCode((_0x455757 >>> 10) + 55296, (_0x455757 & 1023) + 56320);
            } else {
              _0x4ff099 += String.fromCharCode(_0x455757);
            }
            continue;
          }
          throw new Error("Invalid byte " + _0x5ae3bd.toString(16));
        }
        return _0x4ff099;
      }
      _0x4c8be0.prototype._array = function (_0x354041) {
        var _0x31c63c = new Array(_0x354041);
        for (var _0x43ca4c = 0; _0x43ca4c < _0x354041; _0x43ca4c++) {
          _0x31c63c[_0x43ca4c] = this._parse();
        }
        return _0x31c63c;
      };
      _0x4c8be0.prototype._map = function (_0x5b824f) {
        var _0x3fc0a5 = "";
        var _0x1e8560 = {};
        for (var _0x38f14c = 0; _0x38f14c < _0x5b824f; _0x38f14c++) {
          _0x3fc0a5 = this._parse();
          _0x1e8560[_0x3fc0a5] = this._parse();
        }
        return _0x1e8560;
      };
      _0x4c8be0.prototype._str = function (_0xf48e37) {
        var _0x226222 = _0x70f235(this._view, this._offset, _0xf48e37);
        this._offset += _0xf48e37;
        return _0x226222;
      };
      _0x4c8be0.prototype._bin = function (_0x3d2b1) {
        var _0x21eee9 = this._buffer.slice(this._offset, this._offset + _0x3d2b1);
        this._offset += _0x3d2b1;
        return _0x21eee9;
      };
      _0x4c8be0.prototype._parse = function () {
        var _0x3c5922 = this._view.getUint8(this._offset++);
        var _0x3b6524;
        var _0xda9c79 = 0;
        var _0x3cb3f7 = 0;
        var _0x17e092 = 0;
        var _0x50074a = 0;
        if (_0x3c5922 < 192) {
          if (_0x3c5922 < 128) {
            return _0x3c5922;
          }
          if (_0x3c5922 < 144) {
            return this._map(_0x3c5922 & 15);
          }
          if (_0x3c5922 < 160) {
            return this._array(_0x3c5922 & 15);
          }
          return this._str(_0x3c5922 & 31);
        }
        if (_0x3c5922 > 223) {
          return (255 - _0x3c5922 + 1) * -1;
        }
        switch (_0x3c5922) {
          case 192:
            return null;
          case 194:
            return false;
          case 195:
            return true;
          case 196:
            _0xda9c79 = this._view.getUint8(this._offset);
            this._offset += 1;
            return this._bin(_0xda9c79);
          case 197:
            _0xda9c79 = this._view.getUint16(this._offset);
            this._offset += 2;
            return this._bin(_0xda9c79);
          case 198:
            _0xda9c79 = this._view.getUint32(this._offset);
            this._offset += 4;
            return this._bin(_0xda9c79);
          case 199:
            _0xda9c79 = this._view.getUint8(this._offset);
            _0x3cb3f7 = this._view.getInt8(this._offset + 1);
            this._offset += 2;
            if (_0x3cb3f7 === -1) {
              var _0x33097a = this._view.getUint32(this._offset);
              _0x17e092 = this._view.getInt32(this._offset + 4);
              _0x50074a = this._view.getUint32(this._offset + 8);
              this._offset += 12;
              return new Date((_0x17e092 * 4294967296 + _0x50074a) * 1000 + _0x33097a / 1000000);
            }
            return [_0x3cb3f7, this._bin(_0xda9c79)];
          case 200:
            _0xda9c79 = this._view.getUint16(this._offset);
            _0x3cb3f7 = this._view.getInt8(this._offset + 2);
            this._offset += 3;
            return [_0x3cb3f7, this._bin(_0xda9c79)];
          case 201:
            _0xda9c79 = this._view.getUint32(this._offset);
            _0x3cb3f7 = this._view.getInt8(this._offset + 4);
            this._offset += 5;
            return [_0x3cb3f7, this._bin(_0xda9c79)];
          case 202:
            _0x3b6524 = this._view.getFloat32(this._offset);
            this._offset += 4;
            return _0x3b6524;
          case 203:
            _0x3b6524 = this._view.getFloat64(this._offset);
            this._offset += 8;
            return _0x3b6524;
          case 204:
            _0x3b6524 = this._view.getUint8(this._offset);
            this._offset += 1;
            return _0x3b6524;
          case 205:
            _0x3b6524 = this._view.getUint16(this._offset);
            this._offset += 2;
            return _0x3b6524;
          case 206:
            _0x3b6524 = this._view.getUint32(this._offset);
            this._offset += 4;
            return _0x3b6524;
          case 207:
            _0x17e092 = this._view.getUint32(this._offset) * Math.pow(2, 32);
            _0x50074a = this._view.getUint32(this._offset + 4);
            this._offset += 8;
            return _0x17e092 + _0x50074a;
          case 208:
            _0x3b6524 = this._view.getInt8(this._offset);
            this._offset += 1;
            return _0x3b6524;
          case 209:
            _0x3b6524 = this._view.getInt16(this._offset);
            this._offset += 2;
            return _0x3b6524;
          case 210:
            _0x3b6524 = this._view.getInt32(this._offset);
            this._offset += 4;
            return _0x3b6524;
          case 211:
            _0x17e092 = this._view.getInt32(this._offset) * Math.pow(2, 32);
            _0x50074a = this._view.getUint32(this._offset + 4);
            this._offset += 8;
            return _0x17e092 + _0x50074a;
          case 212:
            _0x3cb3f7 = this._view.getInt8(this._offset);
            this._offset += 1;
            if (_0x3cb3f7 === 0) {
              this._offset += 1;
              return undefined;
            }
            return [_0x3cb3f7, this._bin(1)];
          case 213:
            _0x3cb3f7 = this._view.getInt8(this._offset);
            this._offset += 1;
            return [_0x3cb3f7, this._bin(2)];
          case 214:
            _0x3cb3f7 = this._view.getInt8(this._offset);
            this._offset += 1;
            if (_0x3cb3f7 === -1) {
              _0x3b6524 = this._view.getUint32(this._offset);
              this._offset += 4;
              return new Date(_0x3b6524 * 1000);
            }
            return [_0x3cb3f7, this._bin(4)];
          case 215:
            _0x3cb3f7 = this._view.getInt8(this._offset);
            this._offset += 1;
            if (_0x3cb3f7 === 0) {
              _0x17e092 = this._view.getInt32(this._offset) * Math.pow(2, 32);
              _0x50074a = this._view.getUint32(this._offset + 4);
              this._offset += 8;
              return new Date(_0x17e092 + _0x50074a);
            }
            if (_0x3cb3f7 === -1) {
              _0x17e092 = this._view.getUint32(this._offset);
              _0x50074a = this._view.getUint32(this._offset + 4);
              this._offset += 8;
              var _0x3b5d02 = (_0x17e092 & 3) * 4294967296 + _0x50074a;
              return new Date(_0x3b5d02 * 1000 + (_0x17e092 >>> 2) / 1000000);
            }
            return [_0x3cb3f7, this._bin(8)];
          case 216:
            _0x3cb3f7 = this._view.getInt8(this._offset);
            this._offset += 1;
            return [_0x3cb3f7, this._bin(16)];
          case 217:
            _0xda9c79 = this._view.getUint8(this._offset);
            this._offset += 1;
            return this._str(_0xda9c79);
          case 218:
            _0xda9c79 = this._view.getUint16(this._offset);
            this._offset += 2;
            return this._str(_0xda9c79);
          case 219:
            _0xda9c79 = this._view.getUint32(this._offset);
            this._offset += 4;
            return this._str(_0xda9c79);
          case 220:
            _0xda9c79 = this._view.getUint16(this._offset);
            this._offset += 2;
            return this._array(_0xda9c79);
          case 221:
            _0xda9c79 = this._view.getUint32(this._offset);
            this._offset += 4;
            return this._array(_0xda9c79);
          case 222:
            _0xda9c79 = this._view.getUint16(this._offset);
            this._offset += 2;
            return this._map(_0xda9c79);
          case 223:
            _0xda9c79 = this._view.getUint32(this._offset);
            this._offset += 4;
            return this._map(_0xda9c79);
        }
        throw new Error("Could not parse");
      };
      function _0x2a92f3(_0x4c839b, _0x1b174d = 0) {
        var _0x1308ab = new _0x4c8be0(_0x4c839b, _0x1b174d);
        var _0x518ce5 = _0x1308ab._parse();
        if (_0x1308ab._offset !== _0x4c839b.byteLength) {
          throw new Error(_0x4c839b.byteLength - _0x1308ab._offset + " trailing bytes");
        }
        return _0x518ce5;
      }
      _0x395894.decode = _0x2a92f3;
      var _0x42be0f = 4294967295;
      var _0x5ecce9 = 17179869183;
      function _0x48ad87(_0x52ca04, _0x227b1e, _0x5b445d) {
        var _0x4c70f0 = 0;
        for (var _0x611cff = 0, _0x5a98f4 = _0x5b445d.length; _0x611cff < _0x5a98f4; _0x611cff++) {
          _0x4c70f0 = _0x5b445d.charCodeAt(_0x611cff);
          if (_0x4c70f0 < 128) {
            _0x52ca04.setUint8(_0x227b1e++, _0x4c70f0);
          } else if (_0x4c70f0 < 2048) {
            _0x52ca04.setUint8(_0x227b1e++, _0x4c70f0 >> 6 | 192);
            _0x52ca04.setUint8(_0x227b1e++, _0x4c70f0 & 63 | 128);
          } else if (_0x4c70f0 < 55296 || _0x4c70f0 >= 57344) {
            _0x52ca04.setUint8(_0x227b1e++, _0x4c70f0 >> 12 | 224);
            _0x52ca04.setUint8(_0x227b1e++, _0x4c70f0 >> 6 & 63 | 128);
            _0x52ca04.setUint8(_0x227b1e++, _0x4c70f0 & 63 | 128);
          } else {
            _0x611cff++;
            _0x4c70f0 = 65536 + ((_0x4c70f0 & 1023) << 10 | _0x5b445d.charCodeAt(_0x611cff) & 1023);
            _0x52ca04.setUint8(_0x227b1e++, _0x4c70f0 >> 18 | 240);
            _0x52ca04.setUint8(_0x227b1e++, _0x4c70f0 >> 12 & 63 | 128);
            _0x52ca04.setUint8(_0x227b1e++, _0x4c70f0 >> 6 & 63 | 128);
            _0x52ca04.setUint8(_0x227b1e++, _0x4c70f0 & 63 | 128);
          }
        }
      }
      function _0x547e2e(_0x53f187) {
        var _0x464d61 = 0;
        var _0x2c9c12 = 0;
        for (var _0x3d4b04 = 0, _0x25db37 = _0x53f187.length; _0x3d4b04 < _0x25db37; _0x3d4b04++) {
          _0x464d61 = _0x53f187.charCodeAt(_0x3d4b04);
          if (_0x464d61 < 128) {
            _0x2c9c12 += 1;
          } else if (_0x464d61 < 2048) {
            _0x2c9c12 += 2;
          } else if (_0x464d61 < 55296 || _0x464d61 >= 57344) {
            _0x2c9c12 += 3;
          } else {
            _0x3d4b04++;
            _0x2c9c12 += 4;
          }
        }
        return _0x2c9c12;
      }
      function _0x5589ed(_0x5c96a0, _0x28d3aa, _0x4218d7) {
        var _0xb15e8b = typeof _0x4218d7;
        var _0xc4af1a = 0;
        var _0x415bae = 0;
        var _0x5371d4 = 0;
        var _0x152058 = 0;
        var _0x49598b = 0;
        var _0x4c0724 = 0;
        if (_0xb15e8b === "string") {
          _0x49598b = _0x547e2e(_0x4218d7);
          if (_0x49598b < 32) {
            _0x5c96a0.push(_0x49598b | 160);
            _0x4c0724 = 1;
          } else if (_0x49598b < 256) {
            _0x5c96a0.push(217, _0x49598b);
            _0x4c0724 = 2;
          } else if (_0x49598b < 65536) {
            _0x5c96a0.push(218, _0x49598b >> 8, _0x49598b);
            _0x4c0724 = 3;
          } else if (_0x49598b < 4294967296) {
            _0x5c96a0.push(219, _0x49598b >> 24, _0x49598b >> 16, _0x49598b >> 8, _0x49598b);
            _0x4c0724 = 5;
          } else {
            throw new Error("String too long");
          }
          _0x28d3aa.push({
            _str: _0x4218d7,
            _length: _0x49598b,
            _offset: _0x5c96a0.length
          });
          return _0x4c0724 + _0x49598b;
        }
        if (_0xb15e8b === "number") {
          if (Math.floor(_0x4218d7) !== _0x4218d7 || !isFinite(_0x4218d7)) {
            _0x5c96a0.push(203);
            _0x28d3aa.push({
              _float: _0x4218d7,
              _length: 8,
              _offset: _0x5c96a0.length
            });
            return 9;
          }
          if (_0x4218d7 >= 0) {
            if (_0x4218d7 < 128) {
              _0x5c96a0.push(_0x4218d7);
              return 1;
            }
            if (_0x4218d7 < 256) {
              _0x5c96a0.push(204, _0x4218d7);
              return 2;
            }
            if (_0x4218d7 < 65536) {
              _0x5c96a0.push(205, _0x4218d7 >> 8, _0x4218d7);
              return 3;
            }
            if (_0x4218d7 < 4294967296) {
              _0x5c96a0.push(206, _0x4218d7 >> 24, _0x4218d7 >> 16, _0x4218d7 >> 8, _0x4218d7);
              return 5;
            }
            _0x5371d4 = _0x4218d7 / Math.pow(2, 32) >> 0;
            _0x152058 = _0x4218d7 >>> 0;
            _0x5c96a0.push(207, _0x5371d4 >> 24, _0x5371d4 >> 16, _0x5371d4 >> 8, _0x5371d4, _0x152058 >> 24, _0x152058 >> 16, _0x152058 >> 8, _0x152058);
            return 9;
          } else {
            if (_0x4218d7 >= -32) {
              _0x5c96a0.push(_0x4218d7);
              return 1;
            }
            if (_0x4218d7 >= -128) {
              _0x5c96a0.push(208, _0x4218d7);
              return 2;
            }
            if (_0x4218d7 >= -32768) {
              _0x5c96a0.push(209, _0x4218d7 >> 8, _0x4218d7);
              return 3;
            }
            if (_0x4218d7 >= -2147483648) {
              _0x5c96a0.push(210, _0x4218d7 >> 24, _0x4218d7 >> 16, _0x4218d7 >> 8, _0x4218d7);
              return 5;
            }
            _0x5371d4 = Math.floor(_0x4218d7 / Math.pow(2, 32));
            _0x152058 = _0x4218d7 >>> 0;
            _0x5c96a0.push(211, _0x5371d4 >> 24, _0x5371d4 >> 16, _0x5371d4 >> 8, _0x5371d4, _0x152058 >> 24, _0x152058 >> 16, _0x152058 >> 8, _0x152058);
            return 9;
          }
        }
        if (_0xb15e8b === "object") {
          if (_0x4218d7 === null) {
            _0x5c96a0.push(192);
            return 1;
          }
          if (Array.isArray(_0x4218d7)) {
            _0x49598b = _0x4218d7.length;
            if (_0x49598b < 16) {
              _0x5c96a0.push(_0x49598b | 144);
              _0x4c0724 = 1;
            } else if (_0x49598b < 65536) {
              _0x5c96a0.push(220, _0x49598b >> 8, _0x49598b);
              _0x4c0724 = 3;
            } else if (_0x49598b < 4294967296) {
              _0x5c96a0.push(221, _0x49598b >> 24, _0x49598b >> 16, _0x49598b >> 8, _0x49598b);
              _0x4c0724 = 5;
            } else {
              throw new Error("Array too large");
            }
            for (_0xc4af1a = 0; _0xc4af1a < _0x49598b; _0xc4af1a++) {
              _0x4c0724 += _0x5589ed(_0x5c96a0, _0x28d3aa, _0x4218d7[_0xc4af1a]);
            }
            return _0x4c0724;
          }
          if (_0x4218d7 instanceof Date) {
            var _0x376fb4 = _0x4218d7.getTime();
            var _0x4c095a = Math.floor(_0x376fb4 / 1000);
            var _0x49574f = (_0x376fb4 - _0x4c095a * 1000) * 1000000;
            if (_0x4c095a >= 0 && _0x49574f >= 0 && _0x4c095a <= _0x5ecce9) {
              if (_0x49574f === 0 && _0x4c095a <= _0x42be0f) {
                _0x5c96a0.push(214, 255, _0x4c095a >> 24, _0x4c095a >> 16, _0x4c095a >> 8, _0x4c095a);
                return 6;
              } else {
                _0x5371d4 = _0x4c095a / 4294967296;
                _0x152058 = _0x4c095a & -1;
                _0x5c96a0.push(215, 255, _0x49574f >> 22, _0x49574f >> 14, _0x49574f >> 6, _0x5371d4, _0x152058 >> 24, _0x152058 >> 16, _0x152058 >> 8, _0x152058);
                return 10;
              }
            } else {
              _0x5371d4 = Math.floor(_0x4c095a / 4294967296);
              _0x152058 = _0x4c095a >>> 0;
              _0x5c96a0.push(199, 12, 255, _0x49574f >> 24, _0x49574f >> 16, _0x49574f >> 8, _0x49574f, _0x5371d4 >> 24, _0x5371d4 >> 16, _0x5371d4 >> 8, _0x5371d4, _0x152058 >> 24, _0x152058 >> 16, _0x152058 >> 8, _0x152058);
              return 15;
            }
          }
          if (_0x4218d7 instanceof ArrayBuffer) {
            _0x49598b = _0x4218d7.byteLength;
            if (_0x49598b < 256) {
              _0x5c96a0.push(196, _0x49598b);
              _0x4c0724 = 2;
            } else if (_0x49598b < 65536) {
              _0x5c96a0.push(197, _0x49598b >> 8, _0x49598b);
              _0x4c0724 = 3;
            } else if (_0x49598b < 4294967296) {
              _0x5c96a0.push(198, _0x49598b >> 24, _0x49598b >> 16, _0x49598b >> 8, _0x49598b);
              _0x4c0724 = 5;
            } else {
              throw new Error("Buffer too large");
            }
            _0x28d3aa.push({
              _bin: _0x4218d7,
              _length: _0x49598b,
              _offset: _0x5c96a0.length
            });
            return _0x4c0724 + _0x49598b;
          }
          if (typeof _0x4218d7.toJSON === "function") {
            return _0x5589ed(_0x5c96a0, _0x28d3aa, _0x4218d7.toJSON());
          }
          var _0x3f2bfa = [];
          var _0x5468a5 = "";
          var _0x4920ec = Object.keys(_0x4218d7);
          _0xc4af1a = 0;
          _0x415bae = _0x4920ec.length;
          for (; _0xc4af1a < _0x415bae; _0xc4af1a++) {
            _0x5468a5 = _0x4920ec[_0xc4af1a];
            if (_0x4218d7[_0x5468a5] !== undefined && typeof _0x4218d7[_0x5468a5] !== "function") {
              _0x3f2bfa.push(_0x5468a5);
            }
          }
          _0x49598b = _0x3f2bfa.length;
          if (_0x49598b < 16) {
            _0x5c96a0.push(_0x49598b | 128);
            _0x4c0724 = 1;
          } else if (_0x49598b < 65536) {
            _0x5c96a0.push(222, _0x49598b >> 8, _0x49598b);
            _0x4c0724 = 3;
          } else if (_0x49598b < 4294967296) {
            _0x5c96a0.push(223, _0x49598b >> 24, _0x49598b >> 16, _0x49598b >> 8, _0x49598b);
            _0x4c0724 = 5;
          } else {
            throw new Error("Object too large");
          }
          for (_0xc4af1a = 0; _0xc4af1a < _0x49598b; _0xc4af1a++) {
            _0x5468a5 = _0x3f2bfa[_0xc4af1a];
            _0x4c0724 += _0x5589ed(_0x5c96a0, _0x28d3aa, _0x5468a5);
            _0x4c0724 += _0x5589ed(_0x5c96a0, _0x28d3aa, _0x4218d7[_0x5468a5]);
          }
          return _0x4c0724;
        }
        if (_0xb15e8b === "boolean") {
          _0x5c96a0.push(_0x4218d7 ? 195 : 194);
          return 1;
        }
        if (_0xb15e8b === "undefined") {
          _0x5c96a0.push(192);
          return 1;
        }
        if (typeof _0x4218d7.toJSON === "function") {
          return _0x5589ed(_0x5c96a0, _0x28d3aa, _0x4218d7.toJSON());
        }
        throw new Error("Could not encode");
      }
      function _0x5e7783(_0x206289) {
        var _0x1f9d82 = [];
        var _0x287068 = [];
        var _0x5a857b = _0x5589ed(_0x1f9d82, _0x287068, _0x206289);
        var _0x3bf8dd = new ArrayBuffer(_0x5a857b);
        var _0x207873 = new DataView(_0x3bf8dd);
        var _0x74fd94 = 0;
        var _0x50dce8 = 0;
        var _0x26e545 = -1;
        if (_0x287068.length > 0) {
          _0x26e545 = _0x287068[0]._offset;
        }
        var _0x2f4c65;
        var _0x56d0de = 0;
        var _0x55ccac = 0;
        for (var _0x2e9ff1 = 0, _0x14f635 = _0x1f9d82.length; _0x2e9ff1 < _0x14f635; _0x2e9ff1++) {
          _0x207873.setUint8(_0x50dce8 + _0x2e9ff1, _0x1f9d82[_0x2e9ff1]);
          if (_0x2e9ff1 + 1 !== _0x26e545) {
            continue;
          }
          _0x2f4c65 = _0x287068[_0x74fd94];
          _0x56d0de = _0x2f4c65._length;
          _0x55ccac = _0x50dce8 + _0x26e545;
          if (_0x2f4c65._bin) {
            var _0x5526fd = new Uint8Array(_0x2f4c65._bin);
            for (var _0x89a26d = 0; _0x89a26d < _0x56d0de; _0x89a26d++) {
              _0x207873.setUint8(_0x55ccac + _0x89a26d, _0x5526fd[_0x89a26d]);
            }
          } else if (_0x2f4c65._str) {
            _0x48ad87(_0x207873, _0x55ccac, _0x2f4c65._str);
          } else if (_0x2f4c65._float !== undefined) {
            _0x207873.setFloat64(_0x55ccac, _0x2f4c65._float);
          }
          _0x74fd94++;
          _0x50dce8 += _0x56d0de;
          if (_0x287068[_0x74fd94]) {
            _0x26e545 = _0x287068[_0x74fd94]._offset;
          }
        }
        return _0x3bf8dd;
      }
      _0x395894.encode = _0x5e7783;
    },
    "./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/serializer/NoneSerializer.js": (_0x423f77, _0xe5051e) => {
      'use strict';

      Object.defineProperty(_0xe5051e, "__esModule", {
        value: true
      });
      _0xe5051e.NoneSerializer = undefined;
      class _0x117f76 {
        setState(_0xf9e245) {}
        getState() {
          return null;
        }
        patch(_0x494018) {}
        teardown() {}
        handshake(_0x2eadc8) {}
      }
      _0xe5051e.NoneSerializer = _0x117f76;
    },
    "./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/serializer/SchemaSerializer.js": (_0x32b7ca, _0x536666, _0x15c4e7) => {
      'use strict';

      Object.defineProperty(_0x536666, "__esModule", {
        value: true
      });
      _0x536666.SchemaSerializer = undefined;
      const _0x5b31cc = _0x15c4e7("./node_modules/.pnpm/@colyseus+schema@2.0.37/node_modules/@colyseus/schema/build/umd/index.js");
      class _0x1f4a01 {
        setState(_0x5a3bc9) {
          return this.state.decode(_0x5a3bc9);
        }
        getState() {
          return this.state;
        }
        patch(_0x8983e8) {
          return this.state.decode(_0x8983e8);
        }
        teardown() {
          var _0x4bacf3;
          if ((_0x4bacf3 = this.state?.$changes) === null || _0x4bacf3 === undefined) {
            undefined;
          } else {
            _0x4bacf3.root.clearRefs();
          }
        }
        handshake(_0x44eac2, _0xb5812) {
          if (this.state) {
            const _0x339cc3 = new _0x5b31cc.Reflection();
            _0x339cc3.decode(_0x44eac2, _0xb5812);
          } else {
            this.state = _0x5b31cc.Reflection.decode(_0x44eac2, _0xb5812);
          }
        }
      }
      _0x536666.SchemaSerializer = _0x1f4a01;
    },
    "./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/serializer/Serializer.js": (_0x1fabcf, _0x3da851) => {
      'use strict';

      Object.defineProperty(_0x3da851, "__esModule", {
        value: true
      });
      _0x3da851.getSerializer = _0x3da851.registerSerializer = undefined;
      const _0x59efaa = {};
      function _0x239220(_0x599716, _0xd9588a) {
        _0x59efaa[_0x599716] = _0xd9588a;
      }
      _0x3da851.registerSerializer = _0x239220;
      function _0x55c4c6(_0x8dc860) {
        const _0x3a5e5d = _0x59efaa[_0x8dc860];
        if (!_0x3a5e5d) {
          throw new Error("missing serializer: " + _0x8dc860);
        }
        return _0x3a5e5d;
      }
      _0x3da851.getSerializer = _0x55c4c6;
    },
    "./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/transport/WebSocketTransport.js": function (_0x15fce4, _0x418df6, _0x26be0d) {
      'use strict';

      var _0x1d3920 = this && this.__importDefault || function (_0x2ed9b9) {
        if (_0x2ed9b9 && _0x2ed9b9.__esModule) {
          return _0x2ed9b9;
        } else {
          return {
            default: _0x2ed9b9
          };
        }
      };
      Object.defineProperty(_0x418df6, "__esModule", {
        value: true
      });
      _0x418df6.WebSocketTransport = undefined;
      const _0x50ff80 = _0x1d3920(_0x26be0d("./node_modules/.pnpm/ws@8.17.1/node_modules/ws/browser.js"));
      const _0x1fbe12 = globalThis.WebSocket || _0x50ff80.default;
      class _0x4b12f0 {
        constructor(_0x1464f8) {
          this.events = _0x1464f8;
        }
        send(_0xd35619) {
          if (_0xd35619 instanceof ArrayBuffer) {
            this.ws.send(_0xd35619);
          } else if (Array.isArray(_0xd35619)) {
            this.ws.send(new Uint8Array(_0xd35619).buffer);
          }
        }
        connect(_0x272bdc, _0x3c5fc8) {
          try {
            this.ws = new _0x1fbe12(_0x272bdc, {
              headers: _0x3c5fc8,
              protocols: this.protocols
            });
          } catch (_0x504eb1) {
            this.ws = new _0x1fbe12(_0x272bdc, this.protocols);
          }
          this.ws.binaryType = "arraybuffer";
          this.ws.onopen = this.events.onopen;
          this.ws.onmessage = this.events.onmessage;
          this.ws.onclose = this.events.onclose;
          this.ws.onerror = this.events.onerror;
        }
        close(_0xb91486, _0x1e15e1) {
          this.ws.close(_0xb91486, _0x1e15e1);
        }
        get isOpen() {
          return this.ws.readyState === _0x1fbe12.OPEN;
        }
      }
      _0x418df6.WebSocketTransport = _0x4b12f0;
    },
    "./node_modules/.pnpm/howler@2.2.4/node_modules/howler/dist/howler.js": (_0x136285, _0x409e05, _0x413d26) => {
      var _0x219ab3;
      var _0x455750;
      (function () {
        'use strict';

        function _0x184b3b() {
          this.init();
        }
        _0x184b3b.prototype = {
          init: function () {
            var _0x426cdf = this || _0x37957d;
            _0x426cdf._counter = 1000;
            _0x426cdf._html5AudioPool = [];
            _0x426cdf.html5PoolSize = 10;
            _0x426cdf._codecs = {};
            _0x426cdf._howls = [];
            _0x426cdf._muted = false;
            _0x426cdf._volume = 1;
            _0x426cdf._canPlayEvent = "canplaythrough";
            _0x426cdf._navigator = typeof window !== "undefined" && window.navigator ? window.navigator : null;
            _0x426cdf.masterGain = null;
            _0x426cdf.noAudio = false;
            _0x426cdf.usingWebAudio = true;
            _0x426cdf.autoSuspend = true;
            _0x426cdf.ctx = null;
            _0x426cdf.autoUnlock = true;
            _0x426cdf._setup();
            return _0x426cdf;
          },
          volume: function (_0x3ed361) {
            var _0x319198 = this || _0x37957d;
            _0x3ed361 = parseFloat(_0x3ed361);
            if (!_0x319198.ctx) {
              _0x133659();
            }
            if (typeof _0x3ed361 !== "undefined" && _0x3ed361 >= 0 && _0x3ed361 <= 1) {
              _0x319198._volume = _0x3ed361;
              if (_0x319198._muted) {
                return _0x319198;
              }
              if (_0x319198.usingWebAudio) {
                _0x319198.masterGain.gain.setValueAtTime(_0x3ed361, _0x37957d.ctx.currentTime);
              }
              for (var _0x5a403d = 0; _0x5a403d < _0x319198._howls.length; _0x5a403d++) {
                if (!_0x319198._howls[_0x5a403d]._webAudio) {
                  var _0x462f94 = _0x319198._howls[_0x5a403d]._getSoundIds();
                  for (var _0xbd25ec = 0; _0xbd25ec < _0x462f94.length; _0xbd25ec++) {
                    var _0x572a13 = _0x319198._howls[_0x5a403d]._soundById(_0x462f94[_0xbd25ec]);
                    if (_0x572a13 && _0x572a13._node) {
                      _0x572a13._node.volume = _0x572a13._volume * _0x3ed361;
                    }
                  }
                }
              }
              return _0x319198;
            }
            return _0x319198._volume;
          },
          mute: function (_0xa4f2f7) {
            var _0xdfaf29 = this || _0x37957d;
            if (!_0xdfaf29.ctx) {
              _0x133659();
            }
            _0xdfaf29._muted = _0xa4f2f7;
            if (_0xdfaf29.usingWebAudio) {
              _0xdfaf29.masterGain.gain.setValueAtTime(_0xa4f2f7 ? 0 : _0xdfaf29._volume, _0x37957d.ctx.currentTime);
            }
            for (var _0x122351 = 0; _0x122351 < _0xdfaf29._howls.length; _0x122351++) {
              if (!_0xdfaf29._howls[_0x122351]._webAudio) {
                var _0x4c02fd = _0xdfaf29._howls[_0x122351]._getSoundIds();
                for (var _0x36f101 = 0; _0x36f101 < _0x4c02fd.length; _0x36f101++) {
                  var _0x366fdb = _0xdfaf29._howls[_0x122351]._soundById(_0x4c02fd[_0x36f101]);
                  if (_0x366fdb && _0x366fdb._node) {
                    _0x366fdb._node.muted = _0xa4f2f7 ? true : _0x366fdb._muted;
                  }
                }
              }
            }
            return _0xdfaf29;
          },
          stop: function () {
            var _0x44aac3 = this || _0x37957d;
            for (var _0x4b8e4c = 0; _0x4b8e4c < _0x44aac3._howls.length; _0x4b8e4c++) {
              _0x44aac3._howls[_0x4b8e4c].stop();
            }
            return _0x44aac3;
          },
          unload: function () {
            var _0x458e64 = this || _0x37957d;
            for (var _0x42c7f8 = _0x458e64._howls.length - 1; _0x42c7f8 >= 0; _0x42c7f8--) {
              _0x458e64._howls[_0x42c7f8].unload();
            }
            if (_0x458e64.usingWebAudio && _0x458e64.ctx && typeof _0x458e64.ctx.close !== "undefined") {
              _0x458e64.ctx.close();
              _0x458e64.ctx = null;
              _0x133659();
            }
            return _0x458e64;
          },
          codecs: function (_0x2a2217) {
            return (this || _0x37957d)._codecs[_0x2a2217.replace(/^x-/, "")];
          },
          _setup: function () {
            var _0x28848a = this || _0x37957d;
            _0x28848a.state = _0x28848a.ctx ? _0x28848a.ctx.state || "suspended" : "suspended";
            _0x28848a._autoSuspend();
            if (!_0x28848a.usingWebAudio) {
              if (typeof Audio !== "undefined") {
                try {
                  var _0x1a4a2 = new Audio();
                  if (typeof _0x1a4a2.oncanplaythrough === "undefined") {
                    _0x28848a._canPlayEvent = "canplay";
                  }
                } catch (_0x202416) {
                  _0x28848a.noAudio = true;
                }
              } else {
                _0x28848a.noAudio = true;
              }
            }
            try {
              var _0x1a4a2 = new Audio();
              if (_0x1a4a2.muted) {
                _0x28848a.noAudio = true;
              }
            } catch (_0x381b9f) {}
            if (!_0x28848a.noAudio) {
              _0x28848a._setupCodecs();
            }
            return _0x28848a;
          },
          _setupCodecs: function () {
            var _0x40c583 = this || _0x37957d;
            var _0x298795 = null;
            try {
              _0x298795 = typeof Audio !== "undefined" ? new Audio() : null;
            } catch (_0x4cc577) {
              return _0x40c583;
            }
            if (!_0x298795 || typeof _0x298795.canPlayType !== "function") {
              return _0x40c583;
            }
            var _0x2a763a = _0x298795.canPlayType("audio/mpeg;").replace(/^no$/, "");
            var _0x19da8a = _0x40c583._navigator ? _0x40c583._navigator.userAgent : "";
            var _0x233f9f = _0x19da8a.match(/OPR\/(\d+)/g);
            var _0x4aad22 = _0x233f9f && parseInt(_0x233f9f[0].split("/")[1], 10) < 33;
            var _0xa0914b = _0x19da8a.indexOf("Safari") !== -1 && _0x19da8a.indexOf("Chrome") === -1;
            var _0x38386c = _0x19da8a.match(/Version\/(.*?) /);
            var _0xce638d = _0xa0914b && _0x38386c && parseInt(_0x38386c[1], 10) < 15;
            _0x40c583._codecs = {
              mp3: !_0x4aad22 && (!!_0x2a763a || !!_0x298795.canPlayType("audio/mp3;").replace(/^no$/, "")),
              mpeg: !!_0x2a763a,
              opus: !!_0x298795.canPlayType("audio/ogg; codecs=\"opus\"").replace(/^no$/, ""),
              ogg: !!_0x298795.canPlayType("audio/ogg; codecs=\"vorbis\"").replace(/^no$/, ""),
              oga: !!_0x298795.canPlayType("audio/ogg; codecs=\"vorbis\"").replace(/^no$/, ""),
              wav: !!(_0x298795.canPlayType("audio/wav; codecs=\"1\"") || _0x298795.canPlayType("audio/wav")).replace(/^no$/, ""),
              aac: !!_0x298795.canPlayType("audio/aac;").replace(/^no$/, ""),
              caf: !!_0x298795.canPlayType("audio/x-caf;").replace(/^no$/, ""),
              m4a: !!(_0x298795.canPlayType("audio/x-m4a;") || _0x298795.canPlayType("audio/m4a;") || _0x298795.canPlayType("audio/aac;")).replace(/^no$/, ""),
              m4b: !!(_0x298795.canPlayType("audio/x-m4b;") || _0x298795.canPlayType("audio/m4b;") || _0x298795.canPlayType("audio/aac;")).replace(/^no$/, ""),
              mp4: !!(_0x298795.canPlayType("audio/x-mp4;") || _0x298795.canPlayType("audio/mp4;") || _0x298795.canPlayType("audio/aac;")).replace(/^no$/, ""),
              weba: !_0xce638d && !!_0x298795.canPlayType("audio/webm; codecs=\"vorbis\"").replace(/^no$/, ""),
              webm: !_0xce638d && !!_0x298795.canPlayType("audio/webm; codecs=\"vorbis\"").replace(/^no$/, ""),
              dolby: !!_0x298795.canPlayType("audio/mp4; codecs=\"ec-3\"").replace(/^no$/, ""),
              flac: !!(_0x298795.canPlayType("audio/x-flac;") || _0x298795.canPlayType("audio/flac;")).replace(/^no$/, "")
            };
            return _0x40c583;
          },
          _unlockAudio: function () {
            var _0xdc9103 = this || _0x37957d;
            if (_0xdc9103._audioUnlocked || !_0xdc9103.ctx) {
              return;
            }
            _0xdc9103._audioUnlocked = false;
            _0xdc9103.autoUnlock = false;
            if (!_0xdc9103._mobileUnloaded && _0xdc9103.ctx.sampleRate !== 44100) {
              _0xdc9103._mobileUnloaded = true;
              _0xdc9103.unload();
            }
            _0xdc9103._scratchBuffer = _0xdc9103.ctx.createBuffer(1, 1, 22050);
            function _0x3e3474(_0x12118b) {
              while (_0xdc9103._html5AudioPool.length < _0xdc9103.html5PoolSize) {
                try {
                  var _0x4e484d = new Audio();
                  _0x4e484d._unlocked = true;
                  _0xdc9103._releaseHtml5Audio(_0x4e484d);
                } catch (_0x146eb9) {
                  _0xdc9103.noAudio = true;
                  break;
                }
              }
              for (var _0x402eee = 0; _0x402eee < _0xdc9103._howls.length; _0x402eee++) {
                if (!_0xdc9103._howls[_0x402eee]._webAudio) {
                  var _0x1a960d = _0xdc9103._howls[_0x402eee]._getSoundIds();
                  for (var _0x221f5f = 0; _0x221f5f < _0x1a960d.length; _0x221f5f++) {
                    var _0x3fa6fa = _0xdc9103._howls[_0x402eee]._soundById(_0x1a960d[_0x221f5f]);
                    if (_0x3fa6fa && _0x3fa6fa._node && !_0x3fa6fa._node._unlocked) {
                      _0x3fa6fa._node._unlocked = true;
                      _0x3fa6fa._node.load();
                    }
                  }
                }
              }
              _0xdc9103._autoResume();
              var _0x5016e7 = _0xdc9103.ctx.createBufferSource();
              _0x5016e7.buffer = _0xdc9103._scratchBuffer;
              _0x5016e7.connect(_0xdc9103.ctx.destination);
              if (typeof _0x5016e7.start === "undefined") {
                _0x5016e7.noteOn(0);
              } else {
                _0x5016e7.start(0);
              }
              if (typeof _0xdc9103.ctx.resume === "function") {
                _0xdc9103.ctx.resume();
              }
              _0x5016e7.onended = function () {
                _0x5016e7.disconnect(0);
                _0xdc9103._audioUnlocked = true;
                document.removeEventListener("touchstart", _0x3e3474, true);
                document.removeEventListener("touchend", _0x3e3474, true);
                document.removeEventListener("click", _0x3e3474, true);
                document.removeEventListener("keydown", _0x3e3474, true);
                for (var _0x3e8930 = 0; _0x3e8930 < _0xdc9103._howls.length; _0x3e8930++) {
                  _0xdc9103._howls[_0x3e8930]._emit("unlock");
                }
              };
            }
            document.addEventListener("touchstart", _0x3e3474, true);
            document.addEventListener("touchend", _0x3e3474, true);
            document.addEventListener("click", _0x3e3474, true);
            document.addEventListener("keydown", _0x3e3474, true);
            return _0xdc9103;
          },
          _obtainHtml5Audio: function () {
            var _0x2d5598 = this || _0x37957d;
            if (_0x2d5598._html5AudioPool.length) {
              return _0x2d5598._html5AudioPool.pop();
            }
            var _0x2cdc0e = new Audio().play();
            if (_0x2cdc0e && typeof Promise !== "undefined" && (_0x2cdc0e instanceof Promise || typeof _0x2cdc0e.then === "function")) {
              _0x2cdc0e.catch(function () {
                console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.");
              });
            }
            return new Audio();
          },
          _releaseHtml5Audio: function (_0x328683) {
            var _0x52bc2 = this || _0x37957d;
            if (_0x328683._unlocked) {
              _0x52bc2._html5AudioPool.push(_0x328683);
            }
            return _0x52bc2;
          },
          _autoSuspend: function () {
            var _0x231df5 = this;
            if (!_0x231df5.autoSuspend || !_0x231df5.ctx || typeof _0x231df5.ctx.suspend === "undefined" || !_0x37957d.usingWebAudio) {
              return;
            }
            for (var _0x2c7c28 = 0; _0x2c7c28 < _0x231df5._howls.length; _0x2c7c28++) {
              if (_0x231df5._howls[_0x2c7c28]._webAudio) {
                for (var _0x498346 = 0; _0x498346 < _0x231df5._howls[_0x2c7c28]._sounds.length; _0x498346++) {
                  if (!_0x231df5._howls[_0x2c7c28]._sounds[_0x498346]._paused) {
                    return _0x231df5;
                  }
                }
              }
            }
            if (_0x231df5._suspendTimer) {
              clearTimeout(_0x231df5._suspendTimer);
            }
            _0x231df5._suspendTimer = setTimeout(function () {
              if (!_0x231df5.autoSuspend) {
                return;
              }
              _0x231df5._suspendTimer = null;
              _0x231df5.state = "suspending";
              function _0x5f493f() {
                _0x231df5.state = "suspended";
                if (_0x231df5._resumeAfterSuspend) {
                  delete _0x231df5._resumeAfterSuspend;
                  _0x231df5._autoResume();
                }
              }
              _0x231df5.ctx.suspend().then(_0x5f493f, _0x5f493f);
            }, 30000);
            return _0x231df5;
          },
          _autoResume: function () {
            var _0x26df31 = this;
            if (!_0x26df31.ctx || typeof _0x26df31.ctx.resume === "undefined" || !_0x37957d.usingWebAudio) {
              return;
            }
            if (_0x26df31.state === "running" && _0x26df31.ctx.state !== "interrupted" && _0x26df31._suspendTimer) {
              clearTimeout(_0x26df31._suspendTimer);
              _0x26df31._suspendTimer = null;
            } else if (_0x26df31.state === "suspended" || _0x26df31.state === "running" && _0x26df31.ctx.state === "interrupted") {
              _0x26df31.ctx.resume().then(function () {
                _0x26df31.state = "running";
                for (var _0x445794 = 0; _0x445794 < _0x26df31._howls.length; _0x445794++) {
                  _0x26df31._howls[_0x445794]._emit("resume");
                }
              });
              if (_0x26df31._suspendTimer) {
                clearTimeout(_0x26df31._suspendTimer);
                _0x26df31._suspendTimer = null;
              }
            } else if (_0x26df31.state === "suspending") {
              _0x26df31._resumeAfterSuspend = true;
            }
            return _0x26df31;
          }
        };
        var _0x37957d = new _0x184b3b();
        function _0x5a5198(_0x418010) {
          var _0xa6adc8 = this;
          if (!_0x418010.src || _0x418010.src.length === 0) {
            console.error("An array of source files must be passed with any new Howl.");
            return;
          }
          _0xa6adc8.init(_0x418010);
        }
        _0x5a5198.prototype = {
          init: function (_0x37a0c2) {
            var _0x2f13c7 = this;
            if (!_0x37957d.ctx) {
              _0x133659();
            }
            _0x2f13c7._autoplay = _0x37a0c2.autoplay || false;
            _0x2f13c7._format = typeof _0x37a0c2.format !== "string" ? _0x37a0c2.format : [_0x37a0c2.format];
            _0x2f13c7._html5 = _0x37a0c2.html5 || false;
            _0x2f13c7._muted = _0x37a0c2.mute || false;
            _0x2f13c7._loop = _0x37a0c2.loop || false;
            _0x2f13c7._pool = _0x37a0c2.pool || 5;
            _0x2f13c7._preload = typeof _0x37a0c2.preload === "boolean" || _0x37a0c2.preload === "metadata" ? _0x37a0c2.preload : true;
            _0x2f13c7._rate = _0x37a0c2.rate || 1;
            _0x2f13c7._sprite = _0x37a0c2.sprite || {};
            _0x2f13c7._src = typeof _0x37a0c2.src !== "string" ? _0x37a0c2.src : [_0x37a0c2.src];
            _0x2f13c7._volume = _0x37a0c2.volume !== undefined ? _0x37a0c2.volume : 1;
            _0x2f13c7._xhr = {
              method: _0x37a0c2.xhr && _0x37a0c2.xhr.method ? _0x37a0c2.xhr.method : "GET",
              headers: _0x37a0c2.xhr && _0x37a0c2.xhr.headers ? _0x37a0c2.xhr.headers : null,
              withCredentials: _0x37a0c2.xhr && _0x37a0c2.xhr.withCredentials ? _0x37a0c2.xhr.withCredentials : false
            };
            _0x2f13c7._duration = 0;
            _0x2f13c7._state = "unloaded";
            _0x2f13c7._sounds = [];
            _0x2f13c7._endTimers = {};
            _0x2f13c7._queue = [];
            _0x2f13c7._playLock = false;
            _0x2f13c7._onend = _0x37a0c2.onend ? [{
              fn: _0x37a0c2.onend
            }] : [];
            _0x2f13c7._onfade = _0x37a0c2.onfade ? [{
              fn: _0x37a0c2.onfade
            }] : [];
            _0x2f13c7._onload = _0x37a0c2.onload ? [{
              fn: _0x37a0c2.onload
            }] : [];
            _0x2f13c7._onloaderror = _0x37a0c2.onloaderror ? [{
              fn: _0x37a0c2.onloaderror
            }] : [];
            _0x2f13c7._onplayerror = _0x37a0c2.onplayerror ? [{
              fn: _0x37a0c2.onplayerror
            }] : [];
            _0x2f13c7._onpause = _0x37a0c2.onpause ? [{
              fn: _0x37a0c2.onpause
            }] : [];
            _0x2f13c7._onplay = _0x37a0c2.onplay ? [{
              fn: _0x37a0c2.onplay
            }] : [];
            _0x2f13c7._onstop = _0x37a0c2.onstop ? [{
              fn: _0x37a0c2.onstop
            }] : [];
            _0x2f13c7._onmute = _0x37a0c2.onmute ? [{
              fn: _0x37a0c2.onmute
            }] : [];
            _0x2f13c7._onvolume = _0x37a0c2.onvolume ? [{
              fn: _0x37a0c2.onvolume
            }] : [];
            _0x2f13c7._onrate = _0x37a0c2.onrate ? [{
              fn: _0x37a0c2.onrate
            }] : [];
            _0x2f13c7._onseek = _0x37a0c2.onseek ? [{
              fn: _0x37a0c2.onseek
            }] : [];
            _0x2f13c7._onunlock = _0x37a0c2.onunlock ? [{
              fn: _0x37a0c2.onunlock
            }] : [];
            _0x2f13c7._onresume = [];
            _0x2f13c7._webAudio = _0x37957d.usingWebAudio && !_0x2f13c7._html5;
            if (typeof _0x37957d.ctx !== "undefined" && _0x37957d.ctx && _0x37957d.autoUnlock) {
              _0x37957d._unlockAudio();
            }
            _0x37957d._howls.push(_0x2f13c7);
            if (_0x2f13c7._autoplay) {
              _0x2f13c7._queue.push({
                event: "play",
                action: function () {
                  _0x2f13c7.play();
                }
              });
            }
            if (_0x2f13c7._preload && _0x2f13c7._preload !== "none") {
              _0x2f13c7.load();
            }
            return _0x2f13c7;
          },
          load: function () {
            var _0x2454a1 = this;
            var _0x44af99 = null;
            if (_0x37957d.noAudio) {
              _0x2454a1._emit("loaderror", null, "No audio support.");
              return;
            }
            if (typeof _0x2454a1._src === "string") {
              _0x2454a1._src = [_0x2454a1._src];
            }
            for (var _0x5bd688 = 0; _0x5bd688 < _0x2454a1._src.length; _0x5bd688++) {
              var _0xb1b741;
              var _0x490d57;
              if (_0x2454a1._format && _0x2454a1._format[_0x5bd688]) {
                _0xb1b741 = _0x2454a1._format[_0x5bd688];
              } else {
                _0x490d57 = _0x2454a1._src[_0x5bd688];
                if (typeof _0x490d57 !== "string") {
                  _0x2454a1._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                  continue;
                }
                _0xb1b741 = /^data:audio\/([^;,]+);/i.exec(_0x490d57);
                if (!_0xb1b741) {
                  _0xb1b741 = /\.([^.]+)$/.exec(_0x490d57.split("?", 1)[0]);
                }
                _0xb1b741 &&= _0xb1b741[1].toLowerCase();
              }
              if (!_0xb1b741) {
                console.warn("No file extension was found. Consider using the \"format\" property or specify an extension.");
              }
              if (_0xb1b741 && _0x37957d.codecs(_0xb1b741)) {
                _0x44af99 = _0x2454a1._src[_0x5bd688];
                break;
              }
            }
            if (!_0x44af99) {
              _0x2454a1._emit("loaderror", null, "No codec support for selected audio sources.");
              return;
            }
            _0x2454a1._src = _0x44af99;
            _0x2454a1._state = "loading";
            if (window.location.protocol === "https:" && _0x44af99.slice(0, 5) === "http:") {
              _0x2454a1._html5 = true;
              _0x2454a1._webAudio = false;
            }
            new _0x207120(_0x2454a1);
            if (_0x2454a1._webAudio) {
              _0x3a3055(_0x2454a1);
            }
            return _0x2454a1;
          },
          play: function (_0x3d98c0, _0xad8c63) {
            var _0x511488 = this;
            var _0x2385ae = null;
            if (typeof _0x3d98c0 === "number") {
              _0x2385ae = _0x3d98c0;
              _0x3d98c0 = null;
            } else if (typeof _0x3d98c0 === "string" && _0x511488._state === "loaded" && !_0x511488._sprite[_0x3d98c0]) {
              return null;
            } else if (typeof _0x3d98c0 === "undefined") {
              _0x3d98c0 = "__default";
              if (!_0x511488._playLock) {
                var _0x24c0d3 = 0;
                for (var _0x4b7d25 = 0; _0x4b7d25 < _0x511488._sounds.length; _0x4b7d25++) {
                  if (_0x511488._sounds[_0x4b7d25]._paused && !_0x511488._sounds[_0x4b7d25]._ended) {
                    _0x24c0d3++;
                    _0x2385ae = _0x511488._sounds[_0x4b7d25]._id;
                  }
                }
                if (_0x24c0d3 === 1) {
                  _0x3d98c0 = null;
                } else {
                  _0x2385ae = null;
                }
              }
            }
            var _0x9ae800 = _0x2385ae ? _0x511488._soundById(_0x2385ae) : _0x511488._inactiveSound();
            if (!_0x9ae800) {
              return null;
            }
            if (_0x2385ae && !_0x3d98c0) {
              _0x3d98c0 = _0x9ae800._sprite || "__default";
            }
            if (_0x511488._state !== "loaded") {
              _0x9ae800._sprite = _0x3d98c0;
              _0x9ae800._ended = false;
              var _0x410b0e = _0x9ae800._id;
              _0x511488._queue.push({
                event: "play",
                action: function () {
                  _0x511488.play(_0x410b0e);
                }
              });
              return _0x410b0e;
            }
            if (_0x2385ae && !_0x9ae800._paused) {
              if (!_0xad8c63) {
                _0x511488._loadQueue("play");
              }
              return _0x9ae800._id;
            }
            if (_0x511488._webAudio) {
              _0x37957d._autoResume();
            }
            var _0x7d8c57 = Math.max(0, _0x9ae800._seek > 0 ? _0x9ae800._seek : _0x511488._sprite[_0x3d98c0][0] / 1000);
            var _0x5ab344 = Math.max(0, (_0x511488._sprite[_0x3d98c0][0] + _0x511488._sprite[_0x3d98c0][1]) / 1000 - _0x7d8c57);
            var _0x4e98b0 = _0x5ab344 * 1000 / Math.abs(_0x9ae800._rate);
            var _0x3f4557 = _0x511488._sprite[_0x3d98c0][0] / 1000;
            var _0x3d0db5 = (_0x511488._sprite[_0x3d98c0][0] + _0x511488._sprite[_0x3d98c0][1]) / 1000;
            _0x9ae800._sprite = _0x3d98c0;
            _0x9ae800._ended = false;
            function _0x312777() {
              _0x9ae800._paused = false;
              _0x9ae800._seek = _0x7d8c57;
              _0x9ae800._start = _0x3f4557;
              _0x9ae800._stop = _0x3d0db5;
              _0x9ae800._loop = !!_0x9ae800._loop || !!_0x511488._sprite[_0x3d98c0][2];
            }
            if (_0x7d8c57 >= _0x3d0db5) {
              _0x511488._ended(_0x9ae800);
              return;
            }
            var _0x3bf08b = _0x9ae800._node;
            if (_0x511488._webAudio) {
              function _0x1f7d2f() {
                _0x511488._playLock = false;
                _0x312777();
                _0x511488._refreshBuffer(_0x9ae800);
                var _0x570e52 = _0x9ae800._muted || _0x511488._muted ? 0 : _0x9ae800._volume;
                _0x3bf08b.gain.setValueAtTime(_0x570e52, _0x37957d.ctx.currentTime);
                _0x9ae800._playStart = _0x37957d.ctx.currentTime;
                if (typeof _0x3bf08b.bufferSource.start === "undefined") {
                  if (_0x9ae800._loop) {
                    _0x3bf08b.bufferSource.noteGrainOn(0, _0x7d8c57, 86400);
                  } else {
                    _0x3bf08b.bufferSource.noteGrainOn(0, _0x7d8c57, _0x5ab344);
                  }
                } else if (_0x9ae800._loop) {
                  _0x3bf08b.bufferSource.start(0, _0x7d8c57, 86400);
                } else {
                  _0x3bf08b.bufferSource.start(0, _0x7d8c57, _0x5ab344);
                }
                if (_0x4e98b0 !== Infinity) {
                  _0x511488._endTimers[_0x9ae800._id] = setTimeout(_0x511488._ended.bind(_0x511488, _0x9ae800), _0x4e98b0);
                }
                if (!_0xad8c63) {
                  setTimeout(function () {
                    _0x511488._emit("play", _0x9ae800._id);
                    _0x511488._loadQueue();
                  }, 0);
                }
              }
              if (_0x37957d.state === "running" && _0x37957d.ctx.state !== "interrupted") {
                _0x1f7d2f();
              } else {
                _0x511488._playLock = true;
                _0x511488.once("resume", _0x1f7d2f);
                _0x511488._clearTimer(_0x9ae800._id);
              }
            } else {
              function _0xa378d9() {
                _0x3bf08b.currentTime = _0x7d8c57;
                _0x3bf08b.muted = _0x9ae800._muted || _0x511488._muted || _0x37957d._muted || _0x3bf08b.muted;
                _0x3bf08b.volume = _0x9ae800._volume * _0x37957d.volume();
                _0x3bf08b.playbackRate = _0x9ae800._rate;
                try {
                  var _0x3eff84 = _0x3bf08b.play();
                  if (_0x3eff84 && typeof Promise !== "undefined" && (_0x3eff84 instanceof Promise || typeof _0x3eff84.then === "function")) {
                    _0x511488._playLock = true;
                    _0x312777();
                    _0x3eff84.then(function () {
                      _0x511488._playLock = false;
                      _0x3bf08b._unlocked = true;
                      if (!_0xad8c63) {
                        _0x511488._emit("play", _0x9ae800._id);
                      } else {
                        _0x511488._loadQueue();
                      }
                    }).catch(function () {
                      _0x511488._playLock = false;
                      _0x511488._emit("playerror", _0x9ae800._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                      _0x9ae800._ended = true;
                      _0x9ae800._paused = true;
                    });
                  } else if (!_0xad8c63) {
                    _0x511488._playLock = false;
                    _0x312777();
                    _0x511488._emit("play", _0x9ae800._id);
                  }
                  _0x3bf08b.playbackRate = _0x9ae800._rate;
                  if (_0x3bf08b.paused) {
                    _0x511488._emit("playerror", _0x9ae800._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                    return;
                  }
                  if (_0x3d98c0 !== "__default" || _0x9ae800._loop) {
                    _0x511488._endTimers[_0x9ae800._id] = setTimeout(_0x511488._ended.bind(_0x511488, _0x9ae800), _0x4e98b0);
                  } else {
                    _0x511488._endTimers[_0x9ae800._id] = function () {
                      _0x511488._ended(_0x9ae800);
                      _0x3bf08b.removeEventListener("ended", _0x511488._endTimers[_0x9ae800._id], false);
                    };
                    _0x3bf08b.addEventListener("ended", _0x511488._endTimers[_0x9ae800._id], false);
                  }
                } catch (_0x237ca6) {
                  _0x511488._emit("playerror", _0x9ae800._id, _0x237ca6);
                }
              }
              if (_0x3bf08b.src === "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA") {
                _0x3bf08b.src = _0x511488._src;
                _0x3bf08b.load();
              }
              var _0x5ea5ec = window && window.ejecta || !_0x3bf08b.readyState && _0x37957d._navigator.isCocoonJS;
              if (_0x3bf08b.readyState >= 3 || _0x5ea5ec) {
                _0xa378d9();
              } else {
                _0x511488._playLock = true;
                _0x511488._state = "loading";
                function _0x5167b4() {
                  _0x511488._state = "loaded";
                  _0xa378d9();
                  _0x3bf08b.removeEventListener(_0x37957d._canPlayEvent, _0x5167b4, false);
                }
                _0x3bf08b.addEventListener(_0x37957d._canPlayEvent, _0x5167b4, false);
                _0x511488._clearTimer(_0x9ae800._id);
              }
            }
            return _0x9ae800._id;
          },
          pause: function (_0x357d6a) {
            var _0x39f269 = this;
            if (_0x39f269._state !== "loaded" || _0x39f269._playLock) {
              _0x39f269._queue.push({
                event: "pause",
                action: function () {
                  _0x39f269.pause(_0x357d6a);
                }
              });
              return _0x39f269;
            }
            var _0x93afbb = _0x39f269._getSoundIds(_0x357d6a);
            for (var _0x28f22f = 0; _0x28f22f < _0x93afbb.length; _0x28f22f++) {
              _0x39f269._clearTimer(_0x93afbb[_0x28f22f]);
              var _0x157a04 = _0x39f269._soundById(_0x93afbb[_0x28f22f]);
              if (_0x157a04 && !_0x157a04._paused) {
                _0x157a04._seek = _0x39f269.seek(_0x93afbb[_0x28f22f]);
                _0x157a04._rateSeek = 0;
                _0x157a04._paused = true;
                _0x39f269._stopFade(_0x93afbb[_0x28f22f]);
                if (_0x157a04._node) {
                  if (_0x39f269._webAudio) {
                    if (!_0x157a04._node.bufferSource) {
                      continue;
                    }
                    if (typeof _0x157a04._node.bufferSource.stop === "undefined") {
                      _0x157a04._node.bufferSource.noteOff(0);
                    } else {
                      _0x157a04._node.bufferSource.stop(0);
                    }
                    _0x39f269._cleanBuffer(_0x157a04._node);
                  } else if (!isNaN(_0x157a04._node.duration) || _0x157a04._node.duration === Infinity) {
                    _0x157a04._node.pause();
                  }
                }
              }
              if (!arguments[1]) {
                _0x39f269._emit("pause", _0x157a04 ? _0x157a04._id : null);
              }
            }
            return _0x39f269;
          },
          stop: function (_0x37bc0a, _0x12e6d0) {
            var _0x4bd84b = this;
            if (_0x4bd84b._state !== "loaded" || _0x4bd84b._playLock) {
              _0x4bd84b._queue.push({
                event: "stop",
                action: function () {
                  _0x4bd84b.stop(_0x37bc0a);
                }
              });
              return _0x4bd84b;
            }
            var _0x151558 = _0x4bd84b._getSoundIds(_0x37bc0a);
            for (var _0x4567ae = 0; _0x4567ae < _0x151558.length; _0x4567ae++) {
              _0x4bd84b._clearTimer(_0x151558[_0x4567ae]);
              var _0x534257 = _0x4bd84b._soundById(_0x151558[_0x4567ae]);
              if (_0x534257) {
                _0x534257._seek = _0x534257._start || 0;
                _0x534257._rateSeek = 0;
                _0x534257._paused = true;
                _0x534257._ended = true;
                _0x4bd84b._stopFade(_0x151558[_0x4567ae]);
                if (_0x534257._node) {
                  if (_0x4bd84b._webAudio) {
                    if (_0x534257._node.bufferSource) {
                      if (typeof _0x534257._node.bufferSource.stop === "undefined") {
                        _0x534257._node.bufferSource.noteOff(0);
                      } else {
                        _0x534257._node.bufferSource.stop(0);
                      }
                      _0x4bd84b._cleanBuffer(_0x534257._node);
                    }
                  } else if (!isNaN(_0x534257._node.duration) || _0x534257._node.duration === Infinity) {
                    _0x534257._node.currentTime = _0x534257._start || 0;
                    _0x534257._node.pause();
                    if (_0x534257._node.duration === Infinity) {
                      _0x4bd84b._clearSound(_0x534257._node);
                    }
                  }
                }
                if (!_0x12e6d0) {
                  _0x4bd84b._emit("stop", _0x534257._id);
                }
              }
            }
            return _0x4bd84b;
          },
          mute: function (_0x219217, _0x3f179d) {
            var _0x2627ec = this;
            if (_0x2627ec._state !== "loaded" || _0x2627ec._playLock) {
              _0x2627ec._queue.push({
                event: "mute",
                action: function () {
                  _0x2627ec.mute(_0x219217, _0x3f179d);
                }
              });
              return _0x2627ec;
            }
            if (typeof _0x3f179d === "undefined") {
              if (typeof _0x219217 === "boolean") {
                _0x2627ec._muted = _0x219217;
              } else {
                return _0x2627ec._muted;
              }
            }
            var _0x3dd8a3 = _0x2627ec._getSoundIds(_0x3f179d);
            for (var _0x459af3 = 0; _0x459af3 < _0x3dd8a3.length; _0x459af3++) {
              var _0x139e1b = _0x2627ec._soundById(_0x3dd8a3[_0x459af3]);
              if (_0x139e1b) {
                _0x139e1b._muted = _0x219217;
                if (_0x139e1b._interval) {
                  _0x2627ec._stopFade(_0x139e1b._id);
                }
                if (_0x2627ec._webAudio && _0x139e1b._node) {
                  _0x139e1b._node.gain.setValueAtTime(_0x219217 ? 0 : _0x139e1b._volume, _0x37957d.ctx.currentTime);
                } else if (_0x139e1b._node) {
                  _0x139e1b._node.muted = _0x37957d._muted ? true : _0x219217;
                }
                _0x2627ec._emit("mute", _0x139e1b._id);
              }
            }
            return _0x2627ec;
          },
          volume: function () {
            var _0x223e9e = this;
            var _0x5ea397 = arguments;
            var _0x247b67;
            var _0x3879da;
            if (_0x5ea397.length === 0) {
              return _0x223e9e._volume;
            } else if (_0x5ea397.length === 1 || _0x5ea397.length === 2 && typeof _0x5ea397[1] === "undefined") {
              var _0x28ec5c = _0x223e9e._getSoundIds();
              var _0x4f41d2 = _0x28ec5c.indexOf(_0x5ea397[0]);
              if (_0x4f41d2 >= 0) {
                _0x3879da = parseInt(_0x5ea397[0], 10);
              } else {
                _0x247b67 = parseFloat(_0x5ea397[0]);
              }
            } else if (_0x5ea397.length >= 2) {
              _0x247b67 = parseFloat(_0x5ea397[0]);
              _0x3879da = parseInt(_0x5ea397[1], 10);
            }
            var _0x156152;
            if (typeof _0x247b67 !== "undefined" && _0x247b67 >= 0 && _0x247b67 <= 1) {
              if (_0x223e9e._state !== "loaded" || _0x223e9e._playLock) {
                _0x223e9e._queue.push({
                  event: "volume",
                  action: function () {
                    _0x223e9e.volume.apply(_0x223e9e, _0x5ea397);
                  }
                });
                return _0x223e9e;
              }
              if (typeof _0x3879da === "undefined") {
                _0x223e9e._volume = _0x247b67;
              }
              _0x3879da = _0x223e9e._getSoundIds(_0x3879da);
              for (var _0x5a347e = 0; _0x5a347e < _0x3879da.length; _0x5a347e++) {
                _0x156152 = _0x223e9e._soundById(_0x3879da[_0x5a347e]);
                if (_0x156152) {
                  _0x156152._volume = _0x247b67;
                  if (!_0x5ea397[2]) {
                    _0x223e9e._stopFade(_0x3879da[_0x5a347e]);
                  }
                  if (_0x223e9e._webAudio && _0x156152._node && !_0x156152._muted) {
                    _0x156152._node.gain.setValueAtTime(_0x247b67, _0x37957d.ctx.currentTime);
                  } else if (_0x156152._node && !_0x156152._muted) {
                    _0x156152._node.volume = _0x247b67 * _0x37957d.volume();
                  }
                  _0x223e9e._emit("volume", _0x156152._id);
                }
              }
            } else {
              _0x156152 = _0x3879da ? _0x223e9e._soundById(_0x3879da) : _0x223e9e._sounds[0];
              if (_0x156152) {
                return _0x156152._volume;
              } else {
                return 0;
              }
            }
            return _0x223e9e;
          },
          fade: function (_0x29e955, _0x22eb76, _0x2771b2, _0x4a0c33) {
            var _0xa87467 = this;
            if (_0xa87467._state !== "loaded" || _0xa87467._playLock) {
              _0xa87467._queue.push({
                event: "fade",
                action: function () {
                  _0xa87467.fade(_0x29e955, _0x22eb76, _0x2771b2, _0x4a0c33);
                }
              });
              return _0xa87467;
            }
            _0x29e955 = Math.min(Math.max(0, parseFloat(_0x29e955)), 1);
            _0x22eb76 = Math.min(Math.max(0, parseFloat(_0x22eb76)), 1);
            _0x2771b2 = parseFloat(_0x2771b2);
            _0xa87467.volume(_0x29e955, _0x4a0c33);
            var _0x103bdc = _0xa87467._getSoundIds(_0x4a0c33);
            for (var _0x445b15 = 0; _0x445b15 < _0x103bdc.length; _0x445b15++) {
              var _0x388926 = _0xa87467._soundById(_0x103bdc[_0x445b15]);
              if (_0x388926) {
                if (!_0x4a0c33) {
                  _0xa87467._stopFade(_0x103bdc[_0x445b15]);
                }
                if (_0xa87467._webAudio && !_0x388926._muted) {
                  var _0x1ce441 = _0x37957d.ctx.currentTime;
                  var _0x2ee1ba = _0x1ce441 + _0x2771b2 / 1000;
                  _0x388926._volume = _0x29e955;
                  _0x388926._node.gain.setValueAtTime(_0x29e955, _0x1ce441);
                  _0x388926._node.gain.linearRampToValueAtTime(_0x22eb76, _0x2ee1ba);
                }
                _0xa87467._startFadeInterval(_0x388926, _0x29e955, _0x22eb76, _0x2771b2, _0x103bdc[_0x445b15], typeof _0x4a0c33 === "undefined");
              }
            }
            return _0xa87467;
          },
          _startFadeInterval: function (_0x15cbc3, _0x39aa06, _0x401d0d, _0x3037b9, _0x2c396e, _0x3d1156) {
            var _0x1c19ab = this;
            var _0x3b765b = _0x39aa06;
            var _0x5f8ae3 = _0x401d0d - _0x39aa06;
            var _0x45364c = Math.abs(_0x5f8ae3 / 0.01);
            var _0x448b = Math.max(4, _0x45364c > 0 ? _0x3037b9 / _0x45364c : _0x3037b9);
            var _0x1b9f78 = Date.now();
            _0x15cbc3._fadeTo = _0x401d0d;
            _0x15cbc3._interval = setInterval(function () {
              var _0x492252 = (Date.now() - _0x1b9f78) / _0x3037b9;
              _0x1b9f78 = Date.now();
              _0x3b765b += _0x5f8ae3 * _0x492252;
              _0x3b765b = Math.round(_0x3b765b * 100) / 100;
              if (_0x5f8ae3 < 0) {
                _0x3b765b = Math.max(_0x401d0d, _0x3b765b);
              } else {
                _0x3b765b = Math.min(_0x401d0d, _0x3b765b);
              }
              if (_0x1c19ab._webAudio) {
                _0x15cbc3._volume = _0x3b765b;
              } else {
                _0x1c19ab.volume(_0x3b765b, _0x15cbc3._id, true);
              }
              if (_0x3d1156) {
                _0x1c19ab._volume = _0x3b765b;
              }
              if (_0x401d0d < _0x39aa06 && _0x3b765b <= _0x401d0d || _0x401d0d > _0x39aa06 && _0x3b765b >= _0x401d0d) {
                clearInterval(_0x15cbc3._interval);
                _0x15cbc3._interval = null;
                _0x15cbc3._fadeTo = null;
                _0x1c19ab.volume(_0x401d0d, _0x15cbc3._id);
                _0x1c19ab._emit("fade", _0x15cbc3._id);
              }
            }, _0x448b);
          },
          _stopFade: function (_0x58cdd9) {
            var _0x2555d3 = this;
            var _0xa37be3 = _0x2555d3._soundById(_0x58cdd9);
            if (_0xa37be3 && _0xa37be3._interval) {
              if (_0x2555d3._webAudio) {
                _0xa37be3._node.gain.cancelScheduledValues(_0x37957d.ctx.currentTime);
              }
              clearInterval(_0xa37be3._interval);
              _0xa37be3._interval = null;
              _0x2555d3.volume(_0xa37be3._fadeTo, _0x58cdd9);
              _0xa37be3._fadeTo = null;
              _0x2555d3._emit("fade", _0x58cdd9);
            }
            return _0x2555d3;
          },
          loop: function () {
            var _0x21ab26 = this;
            var _0x5c7694 = arguments;
            var _0x463671;
            var _0x5e97ab;
            var _0x44cb57;
            if (_0x5c7694.length === 0) {
              return _0x21ab26._loop;
            } else if (_0x5c7694.length === 1) {
              if (typeof _0x5c7694[0] === "boolean") {
                _0x463671 = _0x5c7694[0];
                _0x21ab26._loop = _0x463671;
              } else {
                _0x44cb57 = _0x21ab26._soundById(parseInt(_0x5c7694[0], 10));
                if (_0x44cb57) {
                  return _0x44cb57._loop;
                } else {
                  return false;
                }
              }
            } else if (_0x5c7694.length === 2) {
              _0x463671 = _0x5c7694[0];
              _0x5e97ab = parseInt(_0x5c7694[1], 10);
            }
            var _0x2d1558 = _0x21ab26._getSoundIds(_0x5e97ab);
            for (var _0x3e4c9c = 0; _0x3e4c9c < _0x2d1558.length; _0x3e4c9c++) {
              _0x44cb57 = _0x21ab26._soundById(_0x2d1558[_0x3e4c9c]);
              if (_0x44cb57) {
                _0x44cb57._loop = _0x463671;
                if (_0x21ab26._webAudio && _0x44cb57._node && _0x44cb57._node.bufferSource) {
                  _0x44cb57._node.bufferSource.loop = _0x463671;
                  if (_0x463671) {
                    _0x44cb57._node.bufferSource.loopStart = _0x44cb57._start || 0;
                    _0x44cb57._node.bufferSource.loopEnd = _0x44cb57._stop;
                    if (_0x21ab26.playing(_0x2d1558[_0x3e4c9c])) {
                      _0x21ab26.pause(_0x2d1558[_0x3e4c9c], true);
                      _0x21ab26.play(_0x2d1558[_0x3e4c9c], true);
                    }
                  }
                }
              }
            }
            return _0x21ab26;
          },
          rate: function () {
            var _0x2adb29 = this;
            var _0x43a26c = arguments;
            var _0x3f8208;
            var _0x1a44c0;
            if (_0x43a26c.length === 0) {
              _0x1a44c0 = _0x2adb29._sounds[0]._id;
            } else if (_0x43a26c.length === 1) {
              var _0x33d86d = _0x2adb29._getSoundIds();
              var _0x53a151 = _0x33d86d.indexOf(_0x43a26c[0]);
              if (_0x53a151 >= 0) {
                _0x1a44c0 = parseInt(_0x43a26c[0], 10);
              } else {
                _0x3f8208 = parseFloat(_0x43a26c[0]);
              }
            } else if (_0x43a26c.length === 2) {
              _0x3f8208 = parseFloat(_0x43a26c[0]);
              _0x1a44c0 = parseInt(_0x43a26c[1], 10);
            }
            var _0x37fc2d;
            if (typeof _0x3f8208 === "number") {
              if (_0x2adb29._state !== "loaded" || _0x2adb29._playLock) {
                _0x2adb29._queue.push({
                  event: "rate",
                  action: function () {
                    _0x2adb29.rate.apply(_0x2adb29, _0x43a26c);
                  }
                });
                return _0x2adb29;
              }
              if (typeof _0x1a44c0 === "undefined") {
                _0x2adb29._rate = _0x3f8208;
              }
              _0x1a44c0 = _0x2adb29._getSoundIds(_0x1a44c0);
              for (var _0x4253cd = 0; _0x4253cd < _0x1a44c0.length; _0x4253cd++) {
                _0x37fc2d = _0x2adb29._soundById(_0x1a44c0[_0x4253cd]);
                if (_0x37fc2d) {
                  if (_0x2adb29.playing(_0x1a44c0[_0x4253cd])) {
                    _0x37fc2d._rateSeek = _0x2adb29.seek(_0x1a44c0[_0x4253cd]);
                    _0x37fc2d._playStart = _0x2adb29._webAudio ? _0x37957d.ctx.currentTime : _0x37fc2d._playStart;
                  }
                  _0x37fc2d._rate = _0x3f8208;
                  if (_0x2adb29._webAudio && _0x37fc2d._node && _0x37fc2d._node.bufferSource) {
                    _0x37fc2d._node.bufferSource.playbackRate.setValueAtTime(_0x3f8208, _0x37957d.ctx.currentTime);
                  } else if (_0x37fc2d._node) {
                    _0x37fc2d._node.playbackRate = _0x3f8208;
                  }
                  var _0xf057f9 = _0x2adb29.seek(_0x1a44c0[_0x4253cd]);
                  var _0x1449e0 = (_0x2adb29._sprite[_0x37fc2d._sprite][0] + _0x2adb29._sprite[_0x37fc2d._sprite][1]) / 1000 - _0xf057f9;
                  var _0x161be1 = _0x1449e0 * 1000 / Math.abs(_0x37fc2d._rate);
                  if (_0x2adb29._endTimers[_0x1a44c0[_0x4253cd]] || !_0x37fc2d._paused) {
                    _0x2adb29._clearTimer(_0x1a44c0[_0x4253cd]);
                    _0x2adb29._endTimers[_0x1a44c0[_0x4253cd]] = setTimeout(_0x2adb29._ended.bind(_0x2adb29, _0x37fc2d), _0x161be1);
                  }
                  _0x2adb29._emit("rate", _0x37fc2d._id);
                }
              }
            } else {
              _0x37fc2d = _0x2adb29._soundById(_0x1a44c0);
              if (_0x37fc2d) {
                return _0x37fc2d._rate;
              } else {
                return _0x2adb29._rate;
              }
            }
            return _0x2adb29;
          },
          seek: function () {
            var _0x2ad651 = this;
            var _0x557edb = arguments;
            var _0x173d78;
            var _0x11fd95;
            if (_0x557edb.length === 0) {
              if (_0x2ad651._sounds.length) {
                _0x11fd95 = _0x2ad651._sounds[0]._id;
              }
            } else if (_0x557edb.length === 1) {
              var _0x41b2cb = _0x2ad651._getSoundIds();
              var _0x34de33 = _0x41b2cb.indexOf(_0x557edb[0]);
              if (_0x34de33 >= 0) {
                _0x11fd95 = parseInt(_0x557edb[0], 10);
              } else if (_0x2ad651._sounds.length) {
                _0x11fd95 = _0x2ad651._sounds[0]._id;
                _0x173d78 = parseFloat(_0x557edb[0]);
              }
            } else if (_0x557edb.length === 2) {
              _0x173d78 = parseFloat(_0x557edb[0]);
              _0x11fd95 = parseInt(_0x557edb[1], 10);
            }
            if (typeof _0x11fd95 === "undefined") {
              return 0;
            }
            if (typeof _0x173d78 === "number" && (_0x2ad651._state !== "loaded" || _0x2ad651._playLock)) {
              _0x2ad651._queue.push({
                event: "seek",
                action: function () {
                  _0x2ad651.seek.apply(_0x2ad651, _0x557edb);
                }
              });
              return _0x2ad651;
            }
            var _0x1b7673 = _0x2ad651._soundById(_0x11fd95);
            if (_0x1b7673) {
              if (typeof _0x173d78 === "number" && _0x173d78 >= 0) {
                var _0x44e725 = _0x2ad651.playing(_0x11fd95);
                if (_0x44e725) {
                  _0x2ad651.pause(_0x11fd95, true);
                }
                _0x1b7673._seek = _0x173d78;
                _0x1b7673._ended = false;
                _0x2ad651._clearTimer(_0x11fd95);
                if (!_0x2ad651._webAudio && _0x1b7673._node && !isNaN(_0x1b7673._node.duration)) {
                  _0x1b7673._node.currentTime = _0x173d78;
                }
                function _0x4edd43() {
                  if (_0x44e725) {
                    _0x2ad651.play(_0x11fd95, true);
                  }
                  _0x2ad651._emit("seek", _0x11fd95);
                }
                if (_0x44e725 && !_0x2ad651._webAudio) {
                  function _0x374ce3() {
                    if (!_0x2ad651._playLock) {
                      _0x4edd43();
                    } else {
                      setTimeout(_0x374ce3, 0);
                    }
                  }
                  setTimeout(_0x374ce3, 0);
                } else {
                  _0x4edd43();
                }
              } else if (_0x2ad651._webAudio) {
                var _0xe8e81c = _0x2ad651.playing(_0x11fd95) ? _0x37957d.ctx.currentTime - _0x1b7673._playStart : 0;
                var _0x55a891 = _0x1b7673._rateSeek ? _0x1b7673._rateSeek - _0x1b7673._seek : 0;
                return _0x1b7673._seek + (_0x55a891 + _0xe8e81c * Math.abs(_0x1b7673._rate));
              } else {
                return _0x1b7673._node.currentTime;
              }
            }
            return _0x2ad651;
          },
          playing: function (_0x6bfd44) {
            var _0x2968b2 = this;
            if (typeof _0x6bfd44 === "number") {
              var _0x5c5f16 = _0x2968b2._soundById(_0x6bfd44);
              if (_0x5c5f16) {
                return !_0x5c5f16._paused;
              } else {
                return false;
              }
            }
            for (var _0x521bbd = 0; _0x521bbd < _0x2968b2._sounds.length; _0x521bbd++) {
              if (!_0x2968b2._sounds[_0x521bbd]._paused) {
                return true;
              }
            }
            return false;
          },
          duration: function (_0x176bdf) {
            var _0x497f90 = this;
            var _0x56f95f = _0x497f90._duration;
            var _0x4dedf0 = _0x497f90._soundById(_0x176bdf);
            if (_0x4dedf0) {
              _0x56f95f = _0x497f90._sprite[_0x4dedf0._sprite][1] / 1000;
            }
            return _0x56f95f;
          },
          state: function () {
            return this._state;
          },
          unload: function () {
            var _0x1b4811 = this;
            var _0x39aa18 = _0x1b4811._sounds;
            for (var _0xe15bd7 = 0; _0xe15bd7 < _0x39aa18.length; _0xe15bd7++) {
              if (!_0x39aa18[_0xe15bd7]._paused) {
                _0x1b4811.stop(_0x39aa18[_0xe15bd7]._id);
              }
              if (!_0x1b4811._webAudio) {
                _0x1b4811._clearSound(_0x39aa18[_0xe15bd7]._node);
                _0x39aa18[_0xe15bd7]._node.removeEventListener("error", _0x39aa18[_0xe15bd7]._errorFn, false);
                _0x39aa18[_0xe15bd7]._node.removeEventListener(_0x37957d._canPlayEvent, _0x39aa18[_0xe15bd7]._loadFn, false);
                _0x39aa18[_0xe15bd7]._node.removeEventListener("ended", _0x39aa18[_0xe15bd7]._endFn, false);
                _0x37957d._releaseHtml5Audio(_0x39aa18[_0xe15bd7]._node);
              }
              delete _0x39aa18[_0xe15bd7]._node;
              _0x1b4811._clearTimer(_0x39aa18[_0xe15bd7]._id);
            }
            var _0x1e4c0f = _0x37957d._howls.indexOf(_0x1b4811);
            if (_0x1e4c0f >= 0) {
              _0x37957d._howls.splice(_0x1e4c0f, 1);
            }
            var _0x7f2f45 = true;
            for (_0xe15bd7 = 0; _0xe15bd7 < _0x37957d._howls.length; _0xe15bd7++) {
              if (_0x37957d._howls[_0xe15bd7]._src === _0x1b4811._src || _0x1b4811._src.indexOf(_0x37957d._howls[_0xe15bd7]._src) >= 0) {
                _0x7f2f45 = false;
                break;
              }
            }
            if (_0x3afdb9 && _0x7f2f45) {
              delete _0x3afdb9[_0x1b4811._src];
            }
            _0x37957d.noAudio = false;
            _0x1b4811._state = "unloaded";
            _0x1b4811._sounds = [];
            _0x1b4811 = null;
            return null;
          },
          on: function (_0x22b66f, _0x568f6b, _0x34eb3a, _0x377625) {
            var _0x4c9703 = this;
            var _0x53affa = _0x4c9703["_on" + _0x22b66f];
            if (typeof _0x568f6b === "function") {
              _0x53affa.push(_0x377625 ? {
                id: _0x34eb3a,
                fn: _0x568f6b,
                once: _0x377625
              } : {
                id: _0x34eb3a,
                fn: _0x568f6b
              });
            }
            return _0x4c9703;
          },
          off: function (_0x1e00f5, _0x51267c, _0x53cace) {
            var _0x31e0f7 = this;
            var _0x2dcde4 = _0x31e0f7["_on" + _0x1e00f5];
            var _0x533db8 = 0;
            if (typeof _0x51267c === "number") {
              _0x53cace = _0x51267c;
              _0x51267c = null;
            }
            if (_0x51267c || _0x53cace) {
              for (_0x533db8 = 0; _0x533db8 < _0x2dcde4.length; _0x533db8++) {
                var _0x2e517d = _0x53cace === _0x2dcde4[_0x533db8].id;
                if (_0x51267c === _0x2dcde4[_0x533db8].fn && _0x2e517d || !_0x51267c && _0x2e517d) {
                  _0x2dcde4.splice(_0x533db8, 1);
                  break;
                }
              }
            } else if (_0x1e00f5) {
              _0x31e0f7["_on" + _0x1e00f5] = [];
            } else {
              var _0x4ca424 = Object.keys(_0x31e0f7);
              for (_0x533db8 = 0; _0x533db8 < _0x4ca424.length; _0x533db8++) {
                if (_0x4ca424[_0x533db8].indexOf("_on") === 0 && Array.isArray(_0x31e0f7[_0x4ca424[_0x533db8]])) {
                  _0x31e0f7[_0x4ca424[_0x533db8]] = [];
                }
              }
            }
            return _0x31e0f7;
          },
          once: function (_0x2e7d1b, _0x128e0f, _0x9cbc0f) {
            var _0x2a423e = this;
            _0x2a423e.on(_0x2e7d1b, _0x128e0f, _0x9cbc0f, 1);
            return _0x2a423e;
          },
          _emit: function (_0x3b99ed, _0x4b92ba, _0x52a4f7) {
            var _0x5be33b = this;
            var _0x1e2914 = _0x5be33b["_on" + _0x3b99ed];
            for (var _0x2d1d53 = _0x1e2914.length - 1; _0x2d1d53 >= 0; _0x2d1d53--) {
              if (!_0x1e2914[_0x2d1d53].id || _0x1e2914[_0x2d1d53].id === _0x4b92ba || _0x3b99ed === "load") {
                setTimeout(function (_0x591130) {
                  _0x591130.call(this, _0x4b92ba, _0x52a4f7);
                }.bind(_0x5be33b, _0x1e2914[_0x2d1d53].fn), 0);
                if (_0x1e2914[_0x2d1d53].once) {
                  _0x5be33b.off(_0x3b99ed, _0x1e2914[_0x2d1d53].fn, _0x1e2914[_0x2d1d53].id);
                }
              }
            }
            _0x5be33b._loadQueue(_0x3b99ed);
            return _0x5be33b;
          },
          _loadQueue: function (_0x302085) {
            var _0x563c46 = this;
            if (_0x563c46._queue.length > 0) {
              var _0xf80860 = _0x563c46._queue[0];
              if (_0xf80860.event === _0x302085) {
                _0x563c46._queue.shift();
                _0x563c46._loadQueue();
              }
              if (!_0x302085) {
                _0xf80860.action();
              }
            }
            return _0x563c46;
          },
          _ended: function (_0x705863) {
            var _0x59fa17 = this;
            var _0x385754 = _0x705863._sprite;
            if (!_0x59fa17._webAudio && _0x705863._node && !_0x705863._node.paused && !_0x705863._node.ended && _0x705863._node.currentTime < _0x705863._stop) {
              setTimeout(_0x59fa17._ended.bind(_0x59fa17, _0x705863), 100);
              return _0x59fa17;
            }
            var _0x31332b = !!_0x705863._loop || !!_0x59fa17._sprite[_0x385754][2];
            _0x59fa17._emit("end", _0x705863._id);
            if (!_0x59fa17._webAudio && _0x31332b) {
              _0x59fa17.stop(_0x705863._id, true).play(_0x705863._id);
            }
            if (_0x59fa17._webAudio && _0x31332b) {
              _0x59fa17._emit("play", _0x705863._id);
              _0x705863._seek = _0x705863._start || 0;
              _0x705863._rateSeek = 0;
              _0x705863._playStart = _0x37957d.ctx.currentTime;
              var _0x28513e = (_0x705863._stop - _0x705863._start) * 1000 / Math.abs(_0x705863._rate);
              _0x59fa17._endTimers[_0x705863._id] = setTimeout(_0x59fa17._ended.bind(_0x59fa17, _0x705863), _0x28513e);
            }
            if (_0x59fa17._webAudio && !_0x31332b) {
              _0x705863._paused = true;
              _0x705863._ended = true;
              _0x705863._seek = _0x705863._start || 0;
              _0x705863._rateSeek = 0;
              _0x59fa17._clearTimer(_0x705863._id);
              _0x59fa17._cleanBuffer(_0x705863._node);
              _0x37957d._autoSuspend();
            }
            if (!_0x59fa17._webAudio && !_0x31332b) {
              _0x59fa17.stop(_0x705863._id, true);
            }
            return _0x59fa17;
          },
          _clearTimer: function (_0x246e25) {
            var _0x3295ce = this;
            if (_0x3295ce._endTimers[_0x246e25]) {
              if (typeof _0x3295ce._endTimers[_0x246e25] !== "function") {
                clearTimeout(_0x3295ce._endTimers[_0x246e25]);
              } else {
                var _0x274dbf = _0x3295ce._soundById(_0x246e25);
                if (_0x274dbf && _0x274dbf._node) {
                  _0x274dbf._node.removeEventListener("ended", _0x3295ce._endTimers[_0x246e25], false);
                }
              }
              delete _0x3295ce._endTimers[_0x246e25];
            }
            return _0x3295ce;
          },
          _soundById: function (_0x4d40a8) {
            var _0x1ee59d = this;
            for (var _0x3d415a = 0; _0x3d415a < _0x1ee59d._sounds.length; _0x3d415a++) {
              if (_0x4d40a8 === _0x1ee59d._sounds[_0x3d415a]._id) {
                return _0x1ee59d._sounds[_0x3d415a];
              }
            }
            return null;
          },
          _inactiveSound: function () {
            var _0x365f66 = this;
            _0x365f66._drain();
            for (var _0x30ed09 = 0; _0x30ed09 < _0x365f66._sounds.length; _0x30ed09++) {
              if (_0x365f66._sounds[_0x30ed09]._ended) {
                return _0x365f66._sounds[_0x30ed09].reset();
              }
            }
            return new _0x207120(_0x365f66);
          },
          _drain: function () {
            var _0x59d864 = this;
            var _0x43a6ad = _0x59d864._pool;
            var _0x39b07d = 0;
            var _0x3b6c6c = 0;
            if (_0x59d864._sounds.length < _0x43a6ad) {
              return;
            }
            for (_0x3b6c6c = 0; _0x3b6c6c < _0x59d864._sounds.length; _0x3b6c6c++) {
              if (_0x59d864._sounds[_0x3b6c6c]._ended) {
                _0x39b07d++;
              }
            }
            for (_0x3b6c6c = _0x59d864._sounds.length - 1; _0x3b6c6c >= 0; _0x3b6c6c--) {
              if (_0x39b07d <= _0x43a6ad) {
                return;
              }
              if (_0x59d864._sounds[_0x3b6c6c]._ended) {
                if (_0x59d864._webAudio && _0x59d864._sounds[_0x3b6c6c]._node) {
                  _0x59d864._sounds[_0x3b6c6c]._node.disconnect(0);
                }
                _0x59d864._sounds.splice(_0x3b6c6c, 1);
                _0x39b07d--;
              }
            }
          },
          _getSoundIds: function (_0x308345) {
            var _0x12738a = this;
            if (typeof _0x308345 === "undefined") {
              var _0x26e7f9 = [];
              for (var _0x50b47a = 0; _0x50b47a < _0x12738a._sounds.length; _0x50b47a++) {
                _0x26e7f9.push(_0x12738a._sounds[_0x50b47a]._id);
              }
              return _0x26e7f9;
            } else {
              return [_0x308345];
            }
          },
          _refreshBuffer: function (_0x3ad848) {
            var _0x4a6ff0 = this;
            _0x3ad848._node.bufferSource = _0x37957d.ctx.createBufferSource();
            _0x3ad848._node.bufferSource.buffer = _0x3afdb9[_0x4a6ff0._src];
            if (_0x3ad848._panner) {
              _0x3ad848._node.bufferSource.connect(_0x3ad848._panner);
            } else {
              _0x3ad848._node.bufferSource.connect(_0x3ad848._node);
            }
            _0x3ad848._node.bufferSource.loop = _0x3ad848._loop;
            if (_0x3ad848._loop) {
              _0x3ad848._node.bufferSource.loopStart = _0x3ad848._start || 0;
              _0x3ad848._node.bufferSource.loopEnd = _0x3ad848._stop || 0;
            }
            _0x3ad848._node.bufferSource.playbackRate.setValueAtTime(_0x3ad848._rate, _0x37957d.ctx.currentTime);
            return _0x4a6ff0;
          },
          _cleanBuffer: function (_0x17e7cc) {
            var _0x4c8e80 = this;
            var _0x154dd2 = _0x37957d._navigator && _0x37957d._navigator.vendor.indexOf("Apple") >= 0;
            if (!_0x17e7cc.bufferSource) {
              return _0x4c8e80;
            }
            if (_0x37957d._scratchBuffer && _0x17e7cc.bufferSource) {
              _0x17e7cc.bufferSource.onended = null;
              _0x17e7cc.bufferSource.disconnect(0);
              if (_0x154dd2) {
                try {
                  _0x17e7cc.bufferSource.buffer = _0x37957d._scratchBuffer;
                } catch (_0x43d5e4) {}
              }
            }
            _0x17e7cc.bufferSource = null;
            return _0x4c8e80;
          },
          _clearSound: function (_0x586367) {
            var _0x4a0740 = /MSIE |Trident\//.test(_0x37957d._navigator && _0x37957d._navigator.userAgent);
            if (!_0x4a0740) {
              _0x586367.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA";
            }
          }
        };
        function _0x207120(_0x32ac6e) {
          this._parent = _0x32ac6e;
          this.init();
        }
        _0x207120.prototype = {
          init: function () {
            var _0x33fed2 = this;
            var _0x129641 = _0x33fed2._parent;
            _0x33fed2._muted = _0x129641._muted;
            _0x33fed2._loop = _0x129641._loop;
            _0x33fed2._volume = _0x129641._volume;
            _0x33fed2._rate = _0x129641._rate;
            _0x33fed2._seek = 0;
            _0x33fed2._paused = true;
            _0x33fed2._ended = true;
            _0x33fed2._sprite = "__default";
            _0x33fed2._id = ++_0x37957d._counter;
            _0x129641._sounds.push(_0x33fed2);
            _0x33fed2.create();
            return _0x33fed2;
          },
          create: function () {
            var _0x5deb46 = this;
            var _0xab66dd = _0x5deb46._parent;
            var _0x3f5729 = _0x37957d._muted || _0x5deb46._muted || _0x5deb46._parent._muted ? 0 : _0x5deb46._volume;
            if (_0xab66dd._webAudio) {
              _0x5deb46._node = typeof _0x37957d.ctx.createGain === "undefined" ? _0x37957d.ctx.createGainNode() : _0x37957d.ctx.createGain();
              _0x5deb46._node.gain.setValueAtTime(_0x3f5729, _0x37957d.ctx.currentTime);
              _0x5deb46._node.paused = true;
              _0x5deb46._node.connect(_0x37957d.masterGain);
            } else if (!_0x37957d.noAudio) {
              _0x5deb46._node = _0x37957d._obtainHtml5Audio();
              _0x5deb46._errorFn = _0x5deb46._errorListener.bind(_0x5deb46);
              _0x5deb46._node.addEventListener("error", _0x5deb46._errorFn, false);
              _0x5deb46._loadFn = _0x5deb46._loadListener.bind(_0x5deb46);
              _0x5deb46._node.addEventListener(_0x37957d._canPlayEvent, _0x5deb46._loadFn, false);
              _0x5deb46._endFn = _0x5deb46._endListener.bind(_0x5deb46);
              _0x5deb46._node.addEventListener("ended", _0x5deb46._endFn, false);
              _0x5deb46._node.src = _0xab66dd._src;
              _0x5deb46._node.preload = _0xab66dd._preload === true ? "auto" : _0xab66dd._preload;
              _0x5deb46._node.volume = _0x3f5729 * _0x37957d.volume();
              _0x5deb46._node.load();
            }
            return _0x5deb46;
          },
          reset: function () {
            var _0x1be08f = this;
            var _0x367517 = _0x1be08f._parent;
            _0x1be08f._muted = _0x367517._muted;
            _0x1be08f._loop = _0x367517._loop;
            _0x1be08f._volume = _0x367517._volume;
            _0x1be08f._rate = _0x367517._rate;
            _0x1be08f._seek = 0;
            _0x1be08f._rateSeek = 0;
            _0x1be08f._paused = true;
            _0x1be08f._ended = true;
            _0x1be08f._sprite = "__default";
            _0x1be08f._id = ++_0x37957d._counter;
            return _0x1be08f;
          },
          _errorListener: function () {
            var _0x25ba48 = this;
            _0x25ba48._parent._emit("loaderror", _0x25ba48._id, _0x25ba48._node.error ? _0x25ba48._node.error.code : 0);
            _0x25ba48._node.removeEventListener("error", _0x25ba48._errorFn, false);
          },
          _loadListener: function () {
            var _0x2d2c75 = this;
            var _0x19c3cc = _0x2d2c75._parent;
            _0x19c3cc._duration = Math.ceil(_0x2d2c75._node.duration * 10) / 10;
            if (Object.keys(_0x19c3cc._sprite).length === 0) {
              _0x19c3cc._sprite = {
                __default: [0, _0x19c3cc._duration * 1000]
              };
            }
            if (_0x19c3cc._state !== "loaded") {
              _0x19c3cc._state = "loaded";
              _0x19c3cc._emit("load");
              _0x19c3cc._loadQueue();
            }
            _0x2d2c75._node.removeEventListener(_0x37957d._canPlayEvent, _0x2d2c75._loadFn, false);
          },
          _endListener: function () {
            var _0xceaf54 = this;
            var _0x18c58d = _0xceaf54._parent;
            if (_0x18c58d._duration === Infinity) {
              _0x18c58d._duration = Math.ceil(_0xceaf54._node.duration * 10) / 10;
              if (_0x18c58d._sprite.__default[1] === Infinity) {
                _0x18c58d._sprite.__default[1] = _0x18c58d._duration * 1000;
              }
              _0x18c58d._ended(_0xceaf54);
            }
            _0xceaf54._node.removeEventListener("ended", _0xceaf54._endFn, false);
          }
        };
        var _0x3afdb9 = {};
        function _0x3a3055(_0x49eed3) {
          var _0xbc5164 = _0x49eed3._src;
          if (_0x3afdb9[_0xbc5164]) {
            _0x49eed3._duration = _0x3afdb9[_0xbc5164].duration;
            _0x321d84(_0x49eed3);
            return;
          }
          if (/^data:[^;]+;base64,/.test(_0xbc5164)) {
            var _0x3b95a6 = atob(_0xbc5164.split(",")[1]);
            var _0x979ad6 = new Uint8Array(_0x3b95a6.length);
            for (var _0x258c70 = 0; _0x258c70 < _0x3b95a6.length; ++_0x258c70) {
              _0x979ad6[_0x258c70] = _0x3b95a6.charCodeAt(_0x258c70);
            }
            _0x484bbd(_0x979ad6.buffer, _0x49eed3);
          } else {
            var _0x22c6f9 = new XMLHttpRequest();
            _0x22c6f9.open(_0x49eed3._xhr.method, _0xbc5164, true);
            _0x22c6f9.withCredentials = _0x49eed3._xhr.withCredentials;
            _0x22c6f9.responseType = "arraybuffer";
            if (_0x49eed3._xhr.headers) {
              Object.keys(_0x49eed3._xhr.headers).forEach(function (_0x23a1ef) {
                _0x22c6f9.setRequestHeader(_0x23a1ef, _0x49eed3._xhr.headers[_0x23a1ef]);
              });
            }
            _0x22c6f9.onload = function () {
              var _0x2e27a3 = (_0x22c6f9.status + "")[0];
              if (_0x2e27a3 !== "0" && _0x2e27a3 !== "2" && _0x2e27a3 !== "3") {
                _0x49eed3._emit("loaderror", null, "Failed loading audio file with status: " + _0x22c6f9.status + ".");
                return;
              }
              _0x484bbd(_0x22c6f9.response, _0x49eed3);
            };
            _0x22c6f9.onerror = function () {
              if (_0x49eed3._webAudio) {
                _0x49eed3._html5 = true;
                _0x49eed3._webAudio = false;
                _0x49eed3._sounds = [];
                delete _0x3afdb9[_0xbc5164];
                _0x49eed3.load();
              }
            };
            _0x474805(_0x22c6f9);
          }
        }
        function _0x474805(_0x492723) {
          try {
            _0x492723.send();
          } catch (_0x201335) {
            _0x492723.onerror();
          }
        }
        function _0x484bbd(_0x59d3c4, _0x2faf3f) {
          function _0x5d64e4() {
            _0x2faf3f._emit("loaderror", null, "Decoding audio data failed.");
          }
          function _0x1665aa(_0x227366) {
            if (_0x227366 && _0x2faf3f._sounds.length > 0) {
              _0x3afdb9[_0x2faf3f._src] = _0x227366;
              _0x321d84(_0x2faf3f, _0x227366);
            } else {
              _0x5d64e4();
            }
          }
          if (typeof Promise !== "undefined" && _0x37957d.ctx.decodeAudioData.length === 1) {
            _0x37957d.ctx.decodeAudioData(_0x59d3c4).then(_0x1665aa).catch(_0x5d64e4);
          } else {
            _0x37957d.ctx.decodeAudioData(_0x59d3c4, _0x1665aa, _0x5d64e4);
          }
        }
        function _0x321d84(_0x3779df, _0x3bdd3b) {
          if (_0x3bdd3b && !_0x3779df._duration) {
            _0x3779df._duration = _0x3bdd3b.duration;
          }
          if (Object.keys(_0x3779df._sprite).length === 0) {
            _0x3779df._sprite = {
              __default: [0, _0x3779df._duration * 1000]
            };
          }
          if (_0x3779df._state !== "loaded") {
            _0x3779df._state = "loaded";
            _0x3779df._emit("load");
            _0x3779df._loadQueue();
          }
        }
        function _0x133659() {
          if (!_0x37957d.usingWebAudio) {
            return;
          }
          try {
            if (typeof AudioContext !== "undefined") {
              _0x37957d.ctx = new AudioContext();
            } else if (typeof webkitAudioContext !== "undefined") {
              _0x37957d.ctx = new webkitAudioContext();
            } else {
              _0x37957d.usingWebAudio = false;
            }
          } catch (_0xf8a2f0) {
            _0x37957d.usingWebAudio = false;
          }
          if (!_0x37957d.ctx) {
            _0x37957d.usingWebAudio = false;
          }
          var _0x1c7c9e = /iP(hone|od|ad)/.test(_0x37957d._navigator && _0x37957d._navigator.platform);
          var _0x241868 = _0x37957d._navigator && _0x37957d._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
          var _0x194cad = _0x241868 ? parseInt(_0x241868[1], 10) : null;
          if (_0x1c7c9e && _0x194cad && _0x194cad < 9) {
            var _0x10f3c4 = /safari/.test(_0x37957d._navigator && _0x37957d._navigator.userAgent.toLowerCase());
            if (_0x37957d._navigator && !_0x10f3c4) {
              _0x37957d.usingWebAudio = false;
            }
          }
          if (_0x37957d.usingWebAudio) {
            _0x37957d.masterGain = typeof _0x37957d.ctx.createGain === "undefined" ? _0x37957d.ctx.createGainNode() : _0x37957d.ctx.createGain();
            _0x37957d.masterGain.gain.setValueAtTime(_0x37957d._muted ? 0 : _0x37957d._volume, _0x37957d.ctx.currentTime);
            _0x37957d.masterGain.connect(_0x37957d.ctx.destination);
          }
          _0x37957d._setup();
        }
        if (true) {
          _0x219ab3 = [];
          _0x455750 = function () {
            return {
              Howler: _0x37957d,
              Howl: _0x5a5198
            };
          }.apply(_0x409e05, _0x219ab3);
          if (_0x455750 !== undefined) {
            _0x136285.exports = _0x455750;
          }
        }
        if (true) {
          _0x409e05.Howler = _0x37957d;
          _0x409e05.Howl = _0x5a5198;
        }
        if (typeof _0x413d26.g !== "undefined") {
          _0x413d26.g.HowlerGlobal = _0x184b3b;
          _0x413d26.g.Howler = _0x37957d;
          _0x413d26.g.Howl = _0x5a5198;
          _0x413d26.g.Sound = _0x207120;
        } else if (typeof window !== "undefined") {
          window.HowlerGlobal = _0x184b3b;
          window.Howler = _0x37957d;
          window.Howl = _0x5a5198;
          window.Sound = _0x207120;
        }
      })();
      (function () {
        'use strict';

        HowlerGlobal.prototype._pos = [0, 0, 0];
        HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];
        HowlerGlobal.prototype.stereo = function (_0x200fc2) {
          var _0x488595 = this;
          if (!_0x488595.ctx || !_0x488595.ctx.listener) {
            return _0x488595;
          }
          for (var _0x242a30 = _0x488595._howls.length - 1; _0x242a30 >= 0; _0x242a30--) {
            _0x488595._howls[_0x242a30].stereo(_0x200fc2);
          }
          return _0x488595;
        };
        HowlerGlobal.prototype.pos = function (_0x3b8fee, _0x1df8da, _0x58e874) {
          var _0x571ba4 = this;
          if (!_0x571ba4.ctx || !_0x571ba4.ctx.listener) {
            return _0x571ba4;
          }
          _0x1df8da = typeof _0x1df8da !== "number" ? _0x571ba4._pos[1] : _0x1df8da;
          _0x58e874 = typeof _0x58e874 !== "number" ? _0x571ba4._pos[2] : _0x58e874;
          if (typeof _0x3b8fee === "number") {
            _0x571ba4._pos = [_0x3b8fee, _0x1df8da, _0x58e874];
            if (typeof _0x571ba4.ctx.listener.positionX !== "undefined") {
              _0x571ba4.ctx.listener.positionX.setTargetAtTime(_0x571ba4._pos[0], Howler.ctx.currentTime, 0.1);
              _0x571ba4.ctx.listener.positionY.setTargetAtTime(_0x571ba4._pos[1], Howler.ctx.currentTime, 0.1);
              _0x571ba4.ctx.listener.positionZ.setTargetAtTime(_0x571ba4._pos[2], Howler.ctx.currentTime, 0.1);
            } else {
              _0x571ba4.ctx.listener.setPosition(_0x571ba4._pos[0], _0x571ba4._pos[1], _0x571ba4._pos[2]);
            }
          } else {
            return _0x571ba4._pos;
          }
          return _0x571ba4;
        };
        HowlerGlobal.prototype.orientation = function (_0x265ea4, _0x4c476d, _0x5b9799, _0x42738f, _0x139324, _0x2ea69f) {
          var _0x1122f0 = this;
          if (!_0x1122f0.ctx || !_0x1122f0.ctx.listener) {
            return _0x1122f0;
          }
          var _0x4f8595 = _0x1122f0._orientation;
          _0x4c476d = typeof _0x4c476d !== "number" ? _0x4f8595[1] : _0x4c476d;
          _0x5b9799 = typeof _0x5b9799 !== "number" ? _0x4f8595[2] : _0x5b9799;
          _0x42738f = typeof _0x42738f !== "number" ? _0x4f8595[3] : _0x42738f;
          _0x139324 = typeof _0x139324 !== "number" ? _0x4f8595[4] : _0x139324;
          _0x2ea69f = typeof _0x2ea69f !== "number" ? _0x4f8595[5] : _0x2ea69f;
          if (typeof _0x265ea4 === "number") {
            _0x1122f0._orientation = [_0x265ea4, _0x4c476d, _0x5b9799, _0x42738f, _0x139324, _0x2ea69f];
            if (typeof _0x1122f0.ctx.listener.forwardX !== "undefined") {
              _0x1122f0.ctx.listener.forwardX.setTargetAtTime(_0x265ea4, Howler.ctx.currentTime, 0.1);
              _0x1122f0.ctx.listener.forwardY.setTargetAtTime(_0x4c476d, Howler.ctx.currentTime, 0.1);
              _0x1122f0.ctx.listener.forwardZ.setTargetAtTime(_0x5b9799, Howler.ctx.currentTime, 0.1);
              _0x1122f0.ctx.listener.upX.setTargetAtTime(_0x42738f, Howler.ctx.currentTime, 0.1);
              _0x1122f0.ctx.listener.upY.setTargetAtTime(_0x139324, Howler.ctx.currentTime, 0.1);
              _0x1122f0.ctx.listener.upZ.setTargetAtTime(_0x2ea69f, Howler.ctx.currentTime, 0.1);
            } else {
              _0x1122f0.ctx.listener.setOrientation(_0x265ea4, _0x4c476d, _0x5b9799, _0x42738f, _0x139324, _0x2ea69f);
            }
          } else {
            return _0x4f8595;
          }
          return _0x1122f0;
        };
        Howl.prototype.init = function (_0x2a0f6e) {
          return function (_0x3be649) {
            var _0x36fa8c = this;
            _0x36fa8c._orientation = _0x3be649.orientation || [1, 0, 0];
            _0x36fa8c._stereo = _0x3be649.stereo || null;
            _0x36fa8c._pos = _0x3be649.pos || null;
            _0x36fa8c._pannerAttr = {
              coneInnerAngle: typeof _0x3be649.coneInnerAngle !== "undefined" ? _0x3be649.coneInnerAngle : 360,
              coneOuterAngle: typeof _0x3be649.coneOuterAngle !== "undefined" ? _0x3be649.coneOuterAngle : 360,
              coneOuterGain: typeof _0x3be649.coneOuterGain !== "undefined" ? _0x3be649.coneOuterGain : 0,
              distanceModel: typeof _0x3be649.distanceModel !== "undefined" ? _0x3be649.distanceModel : "inverse",
              maxDistance: typeof _0x3be649.maxDistance !== "undefined" ? _0x3be649.maxDistance : 10000,
              panningModel: typeof _0x3be649.panningModel !== "undefined" ? _0x3be649.panningModel : "HRTF",
              refDistance: typeof _0x3be649.refDistance !== "undefined" ? _0x3be649.refDistance : 1,
              rolloffFactor: typeof _0x3be649.rolloffFactor !== "undefined" ? _0x3be649.rolloffFactor : 1
            };
            _0x36fa8c._onstereo = _0x3be649.onstereo ? [{
              fn: _0x3be649.onstereo
            }] : [];
            _0x36fa8c._onpos = _0x3be649.onpos ? [{
              fn: _0x3be649.onpos
            }] : [];
            _0x36fa8c._onorientation = _0x3be649.onorientation ? [{
              fn: _0x3be649.onorientation
            }] : [];
            return _0x2a0f6e.call(this, _0x3be649);
          };
        }(Howl.prototype.init);
        Howl.prototype.stereo = function (_0x3be57d, _0x42c5d0) {
          var _0x1cf5f4 = this;
          if (!_0x1cf5f4._webAudio) {
            return _0x1cf5f4;
          }
          if (_0x1cf5f4._state !== "loaded") {
            _0x1cf5f4._queue.push({
              event: "stereo",
              action: function () {
                _0x1cf5f4.stereo(_0x3be57d, _0x42c5d0);
              }
            });
            return _0x1cf5f4;
          }
          var _0x320aea = typeof Howler.ctx.createStereoPanner === "undefined" ? "spatial" : "stereo";
          if (typeof _0x42c5d0 === "undefined") {
            if (typeof _0x3be57d === "number") {
              _0x1cf5f4._stereo = _0x3be57d;
              _0x1cf5f4._pos = [_0x3be57d, 0, 0];
            } else {
              return _0x1cf5f4._stereo;
            }
          }
          var _0x173707 = _0x1cf5f4._getSoundIds(_0x42c5d0);
          for (var _0x59bc6e = 0; _0x59bc6e < _0x173707.length; _0x59bc6e++) {
            var _0x321bbc = _0x1cf5f4._soundById(_0x173707[_0x59bc6e]);
            if (_0x321bbc) {
              if (typeof _0x3be57d === "number") {
                _0x321bbc._stereo = _0x3be57d;
                _0x321bbc._pos = [_0x3be57d, 0, 0];
                if (_0x321bbc._node) {
                  _0x321bbc._pannerAttr.panningModel = "equalpower";
                  if (!_0x321bbc._panner || !_0x321bbc._panner.pan) {
                    _0x4054fb(_0x321bbc, _0x320aea);
                  }
                  if (_0x320aea === "spatial") {
                    if (typeof _0x321bbc._panner.positionX !== "undefined") {
                      _0x321bbc._panner.positionX.setValueAtTime(_0x3be57d, Howler.ctx.currentTime);
                      _0x321bbc._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime);
                      _0x321bbc._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime);
                    } else {
                      _0x321bbc._panner.setPosition(_0x3be57d, 0, 0);
                    }
                  } else {
                    _0x321bbc._panner.pan.setValueAtTime(_0x3be57d, Howler.ctx.currentTime);
                  }
                }
                _0x1cf5f4._emit("stereo", _0x321bbc._id);
              } else {
                return _0x321bbc._stereo;
              }
            }
          }
          return _0x1cf5f4;
        };
        Howl.prototype.pos = function (_0x134f3c, _0x1ad78a, _0x1481e5, _0x4e1ed9) {
          var _0x64a989 = this;
          if (!_0x64a989._webAudio) {
            return _0x64a989;
          }
          if (_0x64a989._state !== "loaded") {
            _0x64a989._queue.push({
              event: "pos",
              action: function () {
                _0x64a989.pos(_0x134f3c, _0x1ad78a, _0x1481e5, _0x4e1ed9);
              }
            });
            return _0x64a989;
          }
          _0x1ad78a = typeof _0x1ad78a !== "number" ? 0 : _0x1ad78a;
          _0x1481e5 = typeof _0x1481e5 !== "number" ? -0.5 : _0x1481e5;
          if (typeof _0x4e1ed9 === "undefined") {
            if (typeof _0x134f3c === "number") {
              _0x64a989._pos = [_0x134f3c, _0x1ad78a, _0x1481e5];
            } else {
              return _0x64a989._pos;
            }
          }
          var _0x294713 = _0x64a989._getSoundIds(_0x4e1ed9);
          for (var _0x322f4d = 0; _0x322f4d < _0x294713.length; _0x322f4d++) {
            var _0x52d0a5 = _0x64a989._soundById(_0x294713[_0x322f4d]);
            if (_0x52d0a5) {
              if (typeof _0x134f3c === "number") {
                _0x52d0a5._pos = [_0x134f3c, _0x1ad78a, _0x1481e5];
                if (_0x52d0a5._node) {
                  if (!_0x52d0a5._panner || _0x52d0a5._panner.pan) {
                    _0x4054fb(_0x52d0a5, "spatial");
                  }
                  if (typeof _0x52d0a5._panner.positionX !== "undefined") {
                    _0x52d0a5._panner.positionX.setValueAtTime(_0x134f3c, Howler.ctx.currentTime);
                    _0x52d0a5._panner.positionY.setValueAtTime(_0x1ad78a, Howler.ctx.currentTime);
                    _0x52d0a5._panner.positionZ.setValueAtTime(_0x1481e5, Howler.ctx.currentTime);
                  } else {
                    _0x52d0a5._panner.setPosition(_0x134f3c, _0x1ad78a, _0x1481e5);
                  }
                }
                _0x64a989._emit("pos", _0x52d0a5._id);
              } else {
                return _0x52d0a5._pos;
              }
            }
          }
          return _0x64a989;
        };
        Howl.prototype.orientation = function (_0x1b7e65, _0x104f97, _0x1ba8d3, _0x12632a) {
          var _0x5c4bae = this;
          if (!_0x5c4bae._webAudio) {
            return _0x5c4bae;
          }
          if (_0x5c4bae._state !== "loaded") {
            _0x5c4bae._queue.push({
              event: "orientation",
              action: function () {
                _0x5c4bae.orientation(_0x1b7e65, _0x104f97, _0x1ba8d3, _0x12632a);
              }
            });
            return _0x5c4bae;
          }
          _0x104f97 = typeof _0x104f97 !== "number" ? _0x5c4bae._orientation[1] : _0x104f97;
          _0x1ba8d3 = typeof _0x1ba8d3 !== "number" ? _0x5c4bae._orientation[2] : _0x1ba8d3;
          if (typeof _0x12632a === "undefined") {
            if (typeof _0x1b7e65 === "number") {
              _0x5c4bae._orientation = [_0x1b7e65, _0x104f97, _0x1ba8d3];
            } else {
              return _0x5c4bae._orientation;
            }
          }
          var _0x4a5845 = _0x5c4bae._getSoundIds(_0x12632a);
          for (var _0x8515bf = 0; _0x8515bf < _0x4a5845.length; _0x8515bf++) {
            var _0x3ef6fe = _0x5c4bae._soundById(_0x4a5845[_0x8515bf]);
            if (_0x3ef6fe) {
              if (typeof _0x1b7e65 === "number") {
                _0x3ef6fe._orientation = [_0x1b7e65, _0x104f97, _0x1ba8d3];
                if (_0x3ef6fe._node) {
                  if (!_0x3ef6fe._panner) {
                    if (!_0x3ef6fe._pos) {
                      _0x3ef6fe._pos = _0x5c4bae._pos || [0, 0, -0.5];
                    }
                    _0x4054fb(_0x3ef6fe, "spatial");
                  }
                  if (typeof _0x3ef6fe._panner.orientationX !== "undefined") {
                    _0x3ef6fe._panner.orientationX.setValueAtTime(_0x1b7e65, Howler.ctx.currentTime);
                    _0x3ef6fe._panner.orientationY.setValueAtTime(_0x104f97, Howler.ctx.currentTime);
                    _0x3ef6fe._panner.orientationZ.setValueAtTime(_0x1ba8d3, Howler.ctx.currentTime);
                  } else {
                    _0x3ef6fe._panner.setOrientation(_0x1b7e65, _0x104f97, _0x1ba8d3);
                  }
                }
                _0x5c4bae._emit("orientation", _0x3ef6fe._id);
              } else {
                return _0x3ef6fe._orientation;
              }
            }
          }
          return _0x5c4bae;
        };
        Howl.prototype.pannerAttr = function () {
          var _0x887ec1 = this;
          var _0x22ee5c = arguments;
          var _0x18853d;
          var _0x4eb8ba;
          var _0x51fc15;
          if (!_0x887ec1._webAudio) {
            return _0x887ec1;
          }
          if (_0x22ee5c.length === 0) {
            return _0x887ec1._pannerAttr;
          } else if (_0x22ee5c.length === 1) {
            if (typeof _0x22ee5c[0] === "object") {
              _0x18853d = _0x22ee5c[0];
              if (typeof _0x4eb8ba === "undefined") {
                if (!_0x18853d.pannerAttr) {
                  _0x18853d.pannerAttr = {
                    coneInnerAngle: _0x18853d.coneInnerAngle,
                    coneOuterAngle: _0x18853d.coneOuterAngle,
                    coneOuterGain: _0x18853d.coneOuterGain,
                    distanceModel: _0x18853d.distanceModel,
                    maxDistance: _0x18853d.maxDistance,
                    refDistance: _0x18853d.refDistance,
                    rolloffFactor: _0x18853d.rolloffFactor,
                    panningModel: _0x18853d.panningModel
                  };
                }
                _0x887ec1._pannerAttr = {
                  coneInnerAngle: typeof _0x18853d.pannerAttr.coneInnerAngle !== "undefined" ? _0x18853d.pannerAttr.coneInnerAngle : _0x887ec1._coneInnerAngle,
                  coneOuterAngle: typeof _0x18853d.pannerAttr.coneOuterAngle !== "undefined" ? _0x18853d.pannerAttr.coneOuterAngle : _0x887ec1._coneOuterAngle,
                  coneOuterGain: typeof _0x18853d.pannerAttr.coneOuterGain !== "undefined" ? _0x18853d.pannerAttr.coneOuterGain : _0x887ec1._coneOuterGain,
                  distanceModel: typeof _0x18853d.pannerAttr.distanceModel !== "undefined" ? _0x18853d.pannerAttr.distanceModel : _0x887ec1._distanceModel,
                  maxDistance: typeof _0x18853d.pannerAttr.maxDistance !== "undefined" ? _0x18853d.pannerAttr.maxDistance : _0x887ec1._maxDistance,
                  refDistance: typeof _0x18853d.pannerAttr.refDistance !== "undefined" ? _0x18853d.pannerAttr.refDistance : _0x887ec1._refDistance,
                  rolloffFactor: typeof _0x18853d.pannerAttr.rolloffFactor !== "undefined" ? _0x18853d.pannerAttr.rolloffFactor : _0x887ec1._rolloffFactor,
                  panningModel: typeof _0x18853d.pannerAttr.panningModel !== "undefined" ? _0x18853d.pannerAttr.panningModel : _0x887ec1._panningModel
                };
              }
            } else {
              _0x51fc15 = _0x887ec1._soundById(parseInt(_0x22ee5c[0], 10));
              if (_0x51fc15) {
                return _0x51fc15._pannerAttr;
              } else {
                return _0x887ec1._pannerAttr;
              }
            }
          } else if (_0x22ee5c.length === 2) {
            _0x18853d = _0x22ee5c[0];
            _0x4eb8ba = parseInt(_0x22ee5c[1], 10);
          }
          var _0x43bb60 = _0x887ec1._getSoundIds(_0x4eb8ba);
          for (var _0x5e91c2 = 0; _0x5e91c2 < _0x43bb60.length; _0x5e91c2++) {
            _0x51fc15 = _0x887ec1._soundById(_0x43bb60[_0x5e91c2]);
            if (_0x51fc15) {
              var _0x519642 = _0x51fc15._pannerAttr;
              _0x519642 = {
                coneInnerAngle: typeof _0x18853d.coneInnerAngle !== "undefined" ? _0x18853d.coneInnerAngle : _0x519642.coneInnerAngle,
                coneOuterAngle: typeof _0x18853d.coneOuterAngle !== "undefined" ? _0x18853d.coneOuterAngle : _0x519642.coneOuterAngle,
                coneOuterGain: typeof _0x18853d.coneOuterGain !== "undefined" ? _0x18853d.coneOuterGain : _0x519642.coneOuterGain,
                distanceModel: typeof _0x18853d.distanceModel !== "undefined" ? _0x18853d.distanceModel : _0x519642.distanceModel,
                maxDistance: typeof _0x18853d.maxDistance !== "undefined" ? _0x18853d.maxDistance : _0x519642.maxDistance,
                refDistance: typeof _0x18853d.refDistance !== "undefined" ? _0x18853d.refDistance : _0x519642.refDistance,
                rolloffFactor: typeof _0x18853d.rolloffFactor !== "undefined" ? _0x18853d.rolloffFactor : _0x519642.rolloffFactor,
                panningModel: typeof _0x18853d.panningModel !== "undefined" ? _0x18853d.panningModel : _0x519642.panningModel
              };
              var _0x3dda8f = _0x51fc15._panner;
              if (!_0x3dda8f) {
                if (!_0x51fc15._pos) {
                  _0x51fc15._pos = _0x887ec1._pos || [0, 0, -0.5];
                }
                _0x4054fb(_0x51fc15, "spatial");
                _0x3dda8f = _0x51fc15._panner;
              }
              _0x3dda8f.coneInnerAngle = _0x519642.coneInnerAngle;
              _0x3dda8f.coneOuterAngle = _0x519642.coneOuterAngle;
              _0x3dda8f.coneOuterGain = _0x519642.coneOuterGain;
              _0x3dda8f.distanceModel = _0x519642.distanceModel;
              _0x3dda8f.maxDistance = _0x519642.maxDistance;
              _0x3dda8f.refDistance = _0x519642.refDistance;
              _0x3dda8f.rolloffFactor = _0x519642.rolloffFactor;
              _0x3dda8f.panningModel = _0x519642.panningModel;
            }
          }
          return _0x887ec1;
        };
        Sound.prototype.init = function (_0x49070e) {
          return function () {
            var _0x5581c4 = this;
            var _0x2d1b1f = _0x5581c4._parent;
            _0x5581c4._orientation = _0x2d1b1f._orientation;
            _0x5581c4._stereo = _0x2d1b1f._stereo;
            _0x5581c4._pos = _0x2d1b1f._pos;
            _0x5581c4._pannerAttr = _0x2d1b1f._pannerAttr;
            _0x49070e.call(this);
            if (_0x5581c4._stereo) {
              _0x2d1b1f.stereo(_0x5581c4._stereo);
            } else if (_0x5581c4._pos) {
              _0x2d1b1f.pos(_0x5581c4._pos[0], _0x5581c4._pos[1], _0x5581c4._pos[2], _0x5581c4._id);
            }
          };
        }(Sound.prototype.init);
        Sound.prototype.reset = function (_0x2675c7) {
          return function () {
            var _0x5216e3 = this;
            var _0x5c3258 = _0x5216e3._parent;
            _0x5216e3._orientation = _0x5c3258._orientation;
            _0x5216e3._stereo = _0x5c3258._stereo;
            _0x5216e3._pos = _0x5c3258._pos;
            _0x5216e3._pannerAttr = _0x5c3258._pannerAttr;
            if (_0x5216e3._stereo) {
              _0x5c3258.stereo(_0x5216e3._stereo);
            } else if (_0x5216e3._pos) {
              _0x5c3258.pos(_0x5216e3._pos[0], _0x5216e3._pos[1], _0x5216e3._pos[2], _0x5216e3._id);
            } else if (_0x5216e3._panner) {
              _0x5216e3._panner.disconnect(0);
              _0x5216e3._panner = undefined;
              _0x5c3258._refreshBuffer(_0x5216e3);
            }
            return _0x2675c7.call(this);
          };
        }(Sound.prototype.reset);
        function _0x4054fb(_0x478e57, _0x33a2e5) {
          _0x33a2e5 = _0x33a2e5 || "spatial";
          if (_0x33a2e5 === "spatial") {
            _0x478e57._panner = Howler.ctx.createPanner();
            _0x478e57._panner.coneInnerAngle = _0x478e57._pannerAttr.coneInnerAngle;
            _0x478e57._panner.coneOuterAngle = _0x478e57._pannerAttr.coneOuterAngle;
            _0x478e57._panner.coneOuterGain = _0x478e57._pannerAttr.coneOuterGain;
            _0x478e57._panner.distanceModel = _0x478e57._pannerAttr.distanceModel;
            _0x478e57._panner.maxDistance = _0x478e57._pannerAttr.maxDistance;
            _0x478e57._panner.refDistance = _0x478e57._pannerAttr.refDistance;
            _0x478e57._panner.rolloffFactor = _0x478e57._pannerAttr.rolloffFactor;
            _0x478e57._panner.panningModel = _0x478e57._pannerAttr.panningModel;
            if (typeof _0x478e57._panner.positionX !== "undefined") {
              _0x478e57._panner.positionX.setValueAtTime(_0x478e57._pos[0], Howler.ctx.currentTime);
              _0x478e57._panner.positionY.setValueAtTime(_0x478e57._pos[1], Howler.ctx.currentTime);
              _0x478e57._panner.positionZ.setValueAtTime(_0x478e57._pos[2], Howler.ctx.currentTime);
            } else {
              _0x478e57._panner.setPosition(_0x478e57._pos[0], _0x478e57._pos[1], _0x478e57._pos[2]);
            }
            if (typeof _0x478e57._panner.orientationX !== "undefined") {
              _0x478e57._panner.orientationX.setValueAtTime(_0x478e57._orientation[0], Howler.ctx.currentTime);
              _0x478e57._panner.orientationY.setValueAtTime(_0x478e57._orientation[1], Howler.ctx.currentTime);
              _0x478e57._panner.orientationZ.setValueAtTime(_0x478e57._orientation[2], Howler.ctx.currentTime);
            } else {
              _0x478e57._panner.setOrientation(_0x478e57._orientation[0], _0x478e57._orientation[1], _0x478e57._orientation[2]);
            }
          } else {
            _0x478e57._panner = Howler.ctx.createStereoPanner();
            _0x478e57._panner.pan.setValueAtTime(_0x478e57._stereo, Howler.ctx.currentTime);
          }
          _0x478e57._panner.connect(_0x478e57._node);
          if (!_0x478e57._paused) {
            _0x478e57._parent.pause(_0x478e57._id, true).play(_0x478e57._id, true);
          }
        }
      })();
    },
    "./node_modules/.pnpm/httpie@2.0.0-next.13/node_modules/httpie/xhr/index.mjs": (_0x347071, _0x33e5ef, _0x2a1f5c) => {
      'use strict';

      _0x2a1f5c.r(_0x33e5ef);
      _0x2a1f5c.d(_0x33e5ef, {
        del: () => _0x5c91e,
        get: () => _0x23280d,
        patch: () => _0x5890ad,
        post: () => _0x1f484a,
        put: () => _0x3c9ccb,
        send: () => _0x2e34ad
      });
      function _0x2044b4(_0x527c2f, _0x3e888a) {
        _0x3e888a.headers = _0x527c2f.headers || {};
        _0x3e888a.statusMessage = _0x527c2f.statusText;
        _0x3e888a.statusCode = _0x527c2f.status;
        _0x3e888a.data = _0x527c2f.response;
      }
      function _0x2e34ad(_0x220c00, _0x1bb40b, _0x12435c) {
        return new Promise(function (_0x4755f5, _0x434990) {
          _0x12435c = _0x12435c || {};
          var _0x3f5138 = new XMLHttpRequest();
          var _0x1e32cb;
          var _0x1e8860;
          var _0x54de9c;
          var _0x160f7c = _0x12435c.body;
          var _0x3aa82a = _0x12435c.headers || {};
          if (_0x12435c.timeout) {
            _0x3f5138.timeout = _0x12435c.timeout;
          }
          _0x3f5138.ontimeout = _0x3f5138.onerror = function (_0x24488e) {
            _0x24488e.timeout = _0x24488e.type == "timeout";
            _0x434990(_0x24488e);
          };
          _0x3f5138.open(_0x220c00, _0x1bb40b.href || _0x1bb40b);
          _0x3f5138.onload = function () {
            _0x54de9c = _0x3f5138.getAllResponseHeaders().trim().split(/[\r\n]+/);
            _0x2044b4(_0x3f5138, _0x3f5138);
            while (_0x1e8860 = _0x54de9c.shift()) {
              _0x1e8860 = _0x1e8860.split(": ");
              _0x3f5138.headers[_0x1e8860.shift().toLowerCase()] = _0x1e8860.join(": ");
            }
            _0x1e8860 = _0x3f5138.headers["content-type"];
            if (_0x1e8860 && !!~_0x1e8860.indexOf("application/json")) {
              try {
                _0x3f5138.data = JSON.parse(_0x3f5138.data, _0x12435c.reviver);
              } catch (_0x4fe3d6) {
                _0x2044b4(_0x3f5138, _0x4fe3d6);
                return _0x434990(_0x4fe3d6);
              }
            }
            (_0x3f5138.status >= 400 ? _0x434990 : _0x4755f5)(_0x3f5138);
          };
          if (typeof FormData !== "undefined" && _0x160f7c instanceof FormData) {} else if (_0x160f7c && typeof _0x160f7c == "object") {
            _0x3aa82a["content-type"] = "application/json";
            _0x160f7c = JSON.stringify(_0x160f7c);
          }
          _0x3f5138.withCredentials = !!_0x12435c.withCredentials;
          for (_0x1e32cb in _0x3aa82a) {
            _0x3f5138.setRequestHeader(_0x1e32cb, _0x3aa82a[_0x1e32cb]);
          }
          _0x3f5138.send(_0x160f7c);
        });
      }
      var _0x23280d = _0x2e34ad.bind(_0x2e34ad, "GET");
      var _0x1f484a = _0x2e34ad.bind(_0x2e34ad, "POST");
      var _0x5890ad = _0x2e34ad.bind(_0x2e34ad, "PATCH");
      var _0x5c91e = _0x2e34ad.bind(_0x2e34ad, "DELETE");
      var _0x3c9ccb = _0x2e34ad.bind(_0x2e34ad, "PUT");
    },
    "./node_modules/.pnpm/ws@8.17.1/node_modules/ws/browser.js": _0x472909 => {
      'use strict';

      _0x472909.exports = function () {
        throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object");
      };
    },
    "./src/temp.js": (_0x8363ad, _0xf8e7e2, _0x48814e) => {
      'use strict';

      _0x48814e.r(_0xf8e7e2);
      var _0x48b9e9 = _0x48814e("./node_modules/.pnpm/howler@2.2.4/node_modules/howler/dist/howler.js");
      var _0x3d0aeb = _0x48814e.n(_0x48b9e9);
      var _0x223eb3 = _0x48814e("./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/index.js");
      _0x8363ad = _0x48814e.hmd(_0x8363ad);
      function _0x3da663(_0x1df35e, _0x2bfa90) {
        if (!(_0x1df35e instanceof _0x2bfa90)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _0x4a84d1(_0x1e03ab, _0x3807b8) {
        for (var _0x2a981b = 0; _0x2a981b < _0x3807b8.length; _0x2a981b++) {
          var _0x3704de = _0x3807b8[_0x2a981b];
          _0x3704de.enumerable = _0x3704de.enumerable || false;
          _0x3704de.configurable = true;
          if ("value" in _0x3704de) {
            _0x3704de.writable = true;
          }
          Object.defineProperty(_0x1e03ab, _0x4f9a3a(_0x3704de.key), _0x3704de);
        }
      }
      function _0x549521(_0x599547, _0x1a098b, _0x4f3539) {
        if (_0x1a098b) {
          _0x4a84d1(_0x599547.prototype, _0x1a098b);
        }
        if (_0x4f3539) {
          _0x4a84d1(_0x599547, _0x4f3539);
        }
        Object.defineProperty(_0x599547, "prototype", {
          writable: false
        });
        return _0x599547;
      }
      function _0x40ebbe(_0x5374b7) {
        return _0x5423ea(_0x5374b7) || _0x25396d(_0x5374b7) || _0x3bc9c2(_0x5374b7) || _0x41ce86();
      }
      function _0x41ce86() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _0x25396d(_0x29277b) {
        if (typeof Symbol != "undefined" && _0x29277b[Symbol.iterator] != null || _0x29277b["@@iterator"] != null) {
          return Array.from(_0x29277b);
        }
      }
      function _0x5423ea(_0x313674) {
        if (Array.isArray(_0x313674)) {
          return _0x5813f7(_0x313674);
        }
      }
      function _0x2bb08e(_0x17502f, _0x31d0a4) {
        var _0x28a4ed = typeof Symbol != "undefined" && _0x17502f[Symbol.iterator] || _0x17502f["@@iterator"];
        if (!_0x28a4ed) {
          if (Array.isArray(_0x17502f) || (_0x28a4ed = _0x3bc9c2(_0x17502f)) || _0x31d0a4 && _0x17502f && typeof _0x17502f.length == "number") {
            if (_0x28a4ed) {
              _0x17502f = _0x28a4ed;
            }
            var _0x45abcd = 0;
            var _0x27833d = function _0x333b08() {};
            return {
              s: _0x27833d,
              n: function (_0x5eca79) {
                function _0x4b3668() {
                  return _0x5eca79.apply(this, arguments);
                }
                _0x4b3668.toString = function () {
                  return _0x5eca79.toString();
                };
                return _0x4b3668;
              }(function () {
                if (_0x45abcd >= _0x17502f.length) {
                  return {
                    done: true
                  };
                } else {
                  return {
                    done: false,
                    value: _0x17502f[_0x45abcd++]
                  };
                }
              }),
              e: function _0xf542e1(_0x170d7d) {
                throw _0x170d7d;
              },
              f: _0x27833d
            };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var _0x27535f;
        var _0x2a5f79 = true;
        var _0x2ab12f = false;
        return {
          s: function _0x5780c3() {
            _0x28a4ed = _0x28a4ed.call(_0x17502f);
          },
          n: function _0x2e250a() {
            var _0x4c82b0 = _0x28a4ed.next();
            _0x2a5f79 = _0x4c82b0.done;
            return _0x4c82b0;
          },
          e: function _0x5a9419(_0x28d447) {
            _0x2ab12f = true;
            _0x27535f = _0x28d447;
          },
          f: function _0x23f8ae() {
            try {
              if (!_0x2a5f79 && _0x28a4ed.return != null) {
                _0x28a4ed.return();
              }
            } finally {
              if (_0x2ab12f) {
                throw _0x27535f;
              }
            }
          }
        };
      }
      function _0x3bc9c2(_0x460d8e, _0x36067b) {
        if (_0x460d8e) {
          if (typeof _0x460d8e == "string") {
            return _0x5813f7(_0x460d8e, _0x36067b);
          }
          var _0x187d04 = {}.toString.call(_0x460d8e).slice(8, -1);
          if (_0x187d04 === "Object" && _0x460d8e.constructor) {
            _0x187d04 = _0x460d8e.constructor.name;
          }
          if (_0x187d04 === "Map" || _0x187d04 === "Set") {
            return Array.from(_0x460d8e);
          } else if (_0x187d04 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_0x187d04)) {
            return _0x5813f7(_0x460d8e, _0x36067b);
          } else {
            return undefined;
          }
        }
      }
      function _0x5813f7(_0x30d000, _0x513d60) {
        if (_0x513d60 == null || _0x513d60 > _0x30d000.length) {
          _0x513d60 = _0x30d000.length;
        }
        for (var _0x5354e5 = 0, _0x4704f5 = Array(_0x513d60); _0x5354e5 < _0x513d60; _0x5354e5++) {
          _0x4704f5[_0x5354e5] = _0x30d000[_0x5354e5];
        }
        return _0x4704f5;
      }
      function _0x7a68e(_0x46c3b8, _0x596dc2) {
        var _0x1062c6 = Object.keys(_0x46c3b8);
        if (Object.getOwnPropertySymbols) {
          var _0x3357fe = Object.getOwnPropertySymbols(_0x46c3b8);
          if (_0x596dc2) {
            _0x3357fe = _0x3357fe.filter(function (_0x543f6f) {
              return Object.getOwnPropertyDescriptor(_0x46c3b8, _0x543f6f).enumerable;
            });
          }
          _0x1062c6.push.apply(_0x1062c6, _0x3357fe);
        }
        return _0x1062c6;
      }
      function _0x66b726(_0x4b81e1) {
        for (var _0x1df0df = 1; _0x1df0df < arguments.length; _0x1df0df++) {
          var _0x350e9f = arguments[_0x1df0df] ?? {};
          if (_0x1df0df % 2) {
            _0x7a68e(Object(_0x350e9f), true).forEach(function (_0x563831) {
              _0x249fc9(_0x4b81e1, _0x563831, _0x350e9f[_0x563831]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(_0x4b81e1, Object.getOwnPropertyDescriptors(_0x350e9f));
          } else {
            _0x7a68e(Object(_0x350e9f)).forEach(function (_0x4fe77c) {
              Object.defineProperty(_0x4b81e1, _0x4fe77c, Object.getOwnPropertyDescriptor(_0x350e9f, _0x4fe77c));
            });
          }
        }
        return _0x4b81e1;
      }
      function _0x249fc9(_0x20087a, _0x317790, _0x5e505a) {
        if ((_0x317790 = _0x4f9a3a(_0x317790)) in _0x20087a) {
          Object.defineProperty(_0x20087a, _0x317790, {
            value: _0x5e505a,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          _0x20087a[_0x317790] = _0x5e505a;
        }
        return _0x20087a;
      }
      function _0x4f9a3a(_0x5689e3) {
        var _0x5a898f = _0x14fe2e(_0x5689e3, "string");
        if (_0x115510(_0x5a898f) == "symbol") {
          return _0x5a898f;
        } else {
          return _0x5a898f + "";
        }
      }
      function _0x14fe2e(_0x310207, _0x412e0d) {
        if (_0x115510(_0x310207) != "object" || !_0x310207) {
          return _0x310207;
        }
        var _0x4cf046 = _0x310207[Symbol.toPrimitive];
        if (_0x4cf046 !== undefined) {
          var _0x16d6dd = _0x4cf046.call(_0x310207, _0x412e0d || "default");
          if (_0x115510(_0x16d6dd) != "object") {
            return _0x16d6dd;
          }
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (_0x412e0d === "string" ? String : Number)(_0x310207);
      }
      function _0xeb30a() {
        var _0x1fb083;
        var _0x56ec79;
        var _0xdb3d32 = typeof Symbol == "function" ? Symbol : {};
        var _0x3c7354 = _0xdb3d32.iterator || "@@iterator";
        var _0x2efa9a = _0xdb3d32.toStringTag || "@@toStringTag";
        function _0x33aa46(_0x1e9e2c, _0x13dbe3, _0x8066c2, _0x1f67ca) {
          var _0x3e2784 = _0x13dbe3 && _0x13dbe3.prototype instanceof _0x28b674 ? _0x13dbe3 : _0x28b674;
          var _0x14bffa = Object.create(_0x3e2784.prototype);
          _0x244964(_0x14bffa, "_invoke", function (_0x4925fa, _0x1652b6, _0xa55a66) {
            var _0x5ab7b9;
            var _0x2e25ce;
            var _0x4703b3;
            var _0x199365 = 0;
            var _0x331a36 = _0xa55a66 || [];
            var _0x344045 = false;
            var _0x12616f = {
              p: 0,
              n: 0,
              v: _0x1fb083,
              a: _0x93dcd0,
              f: _0x93dcd0.bind(_0x1fb083, 4),
              d: function _0x3401fc(_0xe4566a, _0x271cd1) {
                _0x5ab7b9 = _0xe4566a;
                _0x2e25ce = 0;
                _0x4703b3 = _0x1fb083;
                _0x12616f.n = _0x271cd1;
                return _0x45368d;
              }
            };
            function _0x93dcd0(_0x1b1881, _0x2ce87c) {
              _0x2e25ce = _0x1b1881;
              _0x4703b3 = _0x2ce87c;
              _0x56ec79 = 0;
              for (; !_0x344045 && _0x199365 && !_0x4f132b && _0x56ec79 < _0x331a36.length; _0x56ec79++) {
                var _0x4f132b;
                var _0x485b15 = _0x331a36[_0x56ec79];
                var _0xf9d76d = _0x12616f.p;
                var _0x53249e = _0x485b15[2];
                if (_0x1b1881 > 3) {
                  if (_0x4f132b = _0x53249e === _0x2ce87c) {
                    _0x4703b3 = _0x485b15[(_0x2e25ce = _0x485b15[4]) ? 5 : (_0x2e25ce = 3, 3)];
                    _0x485b15[4] = _0x485b15[5] = _0x1fb083;
                  }
                } else if (_0x485b15[0] <= _0xf9d76d) {
                  if (_0x4f132b = _0x1b1881 < 2 && _0xf9d76d < _0x485b15[1]) {
                    _0x2e25ce = 0;
                    _0x12616f.v = _0x2ce87c;
                    _0x12616f.n = _0x485b15[1];
                  } else if (_0xf9d76d < _0x53249e && (_0x4f132b = _0x1b1881 < 3 || _0x485b15[0] > _0x2ce87c || _0x2ce87c > _0x53249e)) {
                    _0x485b15[4] = _0x1b1881;
                    _0x485b15[5] = _0x2ce87c;
                    _0x12616f.n = _0x53249e;
                    _0x2e25ce = 0;
                  }
                }
              }
              if (_0x4f132b || _0x1b1881 > 1) {
                return _0x45368d;
              }
              _0x344045 = true;
              throw _0x2ce87c;
            }
            return function (_0x2e9dcd, _0xa77d7, _0x2bdba4) {
              if (_0x199365 > 1) {
                throw TypeError("Generator is already running");
              }
              if (_0x344045 && _0xa77d7 === 1) {
                _0x93dcd0(_0xa77d7, _0x2bdba4);
              }
              _0x2e25ce = _0xa77d7;
              _0x4703b3 = _0x2bdba4;
              while ((_0x56ec79 = _0x2e25ce < 2 ? _0x1fb083 : _0x4703b3) || !_0x344045) {
                if (!_0x5ab7b9) {
                  if (_0x2e25ce) {
                    if (_0x2e25ce < 3) {
                      if (_0x2e25ce > 1) {
                        _0x12616f.n = -1;
                      }
                      _0x93dcd0(_0x2e25ce, _0x4703b3);
                    } else {
                      _0x12616f.n = _0x4703b3;
                    }
                  } else {
                    _0x12616f.v = _0x4703b3;
                  }
                }
                try {
                  _0x199365 = 2;
                  if (_0x5ab7b9) {
                    if (!_0x2e25ce) {
                      _0x2e9dcd = "next";
                    }
                    if (_0x56ec79 = _0x5ab7b9[_0x2e9dcd]) {
                      if (!(_0x56ec79 = _0x56ec79.call(_0x5ab7b9, _0x4703b3))) {
                        throw TypeError("iterator result is not an object");
                      }
                      if (!_0x56ec79.done) {
                        return _0x56ec79;
                      }
                      _0x4703b3 = _0x56ec79.value;
                      if (_0x2e25ce < 2) {
                        _0x2e25ce = 0;
                      }
                    } else {
                      if (_0x2e25ce === 1 && (_0x56ec79 = _0x5ab7b9.return)) {
                        _0x56ec79.call(_0x5ab7b9);
                      }
                      if (_0x2e25ce < 2) {
                        _0x4703b3 = TypeError("The iterator does not provide a '" + _0x2e9dcd + "' method");
                        _0x2e25ce = 1;
                      }
                    }
                    _0x5ab7b9 = _0x1fb083;
                  } else if ((_0x56ec79 = (_0x344045 = _0x12616f.n < 0) ? _0x4703b3 : _0x4925fa.call(_0x1652b6, _0x12616f)) !== _0x45368d) {
                    break;
                  }
                } catch (_0x5cbc74) {
                  _0x5ab7b9 = _0x1fb083;
                  _0x2e25ce = 1;
                  _0x4703b3 = _0x5cbc74;
                } finally {
                  _0x199365 = 1;
                }
              }
              return {
                value: _0x56ec79,
                done: _0x344045
              };
            };
          }(_0x1e9e2c, _0x8066c2, _0x1f67ca), true);
          return _0x14bffa;
        }
        var _0x45368d = {};
        function _0x28b674() {}
        function _0x53df93() {}
        function _0x101b45() {}
        _0x56ec79 = Object.getPrototypeOf;
        var _0x2212f1 = [][_0x3c7354] ? _0x56ec79(_0x56ec79([][_0x3c7354]())) : (_0x244964(_0x56ec79 = {}, _0x3c7354, function () {
          return this;
        }), _0x56ec79);
        var _0x541aba = _0x101b45.prototype = _0x28b674.prototype = Object.create(_0x2212f1);
        function _0x161d5(_0x219729) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(_0x219729, _0x101b45);
          } else {
            _0x219729.__proto__ = _0x101b45;
            _0x244964(_0x219729, _0x2efa9a, "GeneratorFunction");
          }
          _0x219729.prototype = Object.create(_0x541aba);
          return _0x219729;
        }
        _0x53df93.prototype = _0x101b45;
        _0x244964(_0x541aba, "constructor", _0x101b45);
        _0x244964(_0x101b45, "constructor", _0x53df93);
        _0x53df93.displayName = "GeneratorFunction";
        _0x244964(_0x101b45, _0x2efa9a, "GeneratorFunction");
        _0x244964(_0x541aba);
        _0x244964(_0x541aba, _0x2efa9a, "Generator");
        _0x244964(_0x541aba, _0x3c7354, function () {
          return this;
        });
        _0x244964(_0x541aba, "toString", function () {
          return "[object Generator]";
        });
        return (_0xeb30a = function _0x245b50() {
          return {
            w: _0x33aa46,
            m: _0x161d5
          };
        })();
      }
      function _0x244964(_0x1ed426, _0x207bea, _0x317f45, _0x4f6bb8) {
        var _0xf900af = Object.defineProperty;
        try {
          _0xf900af({}, "", {});
        } catch (_0x46d141) {
          _0xf900af = 0;
        }
        _0x244964 = function _0x202481(_0x23afe1, _0x5f0deb, _0x45a66e, _0x313c6f) {
          function _0x45b7bf(_0x59fb86, _0x3845f2) {
            _0x244964(_0x23afe1, _0x59fb86, function (_0x319c4a) {
              return this._invoke(_0x59fb86, _0x3845f2, _0x319c4a);
            });
          }
          if (_0x5f0deb) {
            if (_0xf900af) {
              _0xf900af(_0x23afe1, _0x5f0deb, {
                value: _0x45a66e,
                enumerable: !_0x313c6f,
                configurable: !_0x313c6f,
                writable: !_0x313c6f
              });
            } else {
              _0x23afe1[_0x5f0deb] = _0x45a66e;
            }
          } else {
            _0x45b7bf("next", 0);
            _0x45b7bf("throw", 1);
            _0x45b7bf("return", 2);
          }
        };
        _0x244964(_0x1ed426, _0x207bea, _0x317f45, _0x4f6bb8);
      }
      function _0x88a336(_0x1c619d, _0x10b19f, _0x22809a, _0x486773, _0x264d06, _0x2b35e6, _0x1c3359) {
        try {
          var _0x2f7cde = _0x1c619d[_0x2b35e6](_0x1c3359);
          var _0x5938dd = _0x2f7cde.value;
        } catch (_0x2aa114) {
          _0x22809a(_0x2aa114);
          return;
        }
        if (_0x2f7cde.done) {
          _0x10b19f(_0x5938dd);
        } else {
          Promise.resolve(_0x5938dd).then(_0x486773, _0x264d06);
        }
      }
      function _0x1e9522(_0x2f8807) {
        return function () {
          var _0x45dd43 = this;
          var _0x41c086 = arguments;
          return new Promise(function (_0x1b1f5f, _0x36a53c) {
            var _0x68bfb3 = _0x2f8807.apply(_0x45dd43, _0x41c086);
            function _0x290064(_0x1b64c0) {
              _0x88a336(_0x68bfb3, _0x1b1f5f, _0x36a53c, _0x290064, _0x362ad2, "next", _0x1b64c0);
            }
            function _0x362ad2(_0x413f56) {
              _0x88a336(_0x68bfb3, _0x1b1f5f, _0x36a53c, _0x290064, _0x362ad2, "throw", _0x413f56);
            }
            _0x290064(undefined);
          });
        };
      }
      function _0x115510(_0x45a469) {
        '@babel/helpers - typeof';

        _0x115510 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (_0x7f8bc) {
          return typeof _0x7f8bc;
        } : function (_0x43c9c9) {
          if (_0x43c9c9 && typeof Symbol == "function" && _0x43c9c9.constructor === Symbol && _0x43c9c9 !== Symbol.prototype) {
            return "symbol";
          } else {
            return typeof _0x43c9c9;
          }
        };
        return _0x115510(_0x45a469);
      }
      var _0x315640 = 0;
      window.URLSERV_WORMWORLD = _0x315640 ? "http://localhost:3102" : "https://wormworld.io/extension";
      window.URL_CDN = _0x315640 ? "http://localhost:3000" : "https://asserts.wormworld.io";
      window.URL_CDN_B = _0x315640 ? "localhost:3000" : "asserts.wormworld.io";
      window.URL_CDN_C = _0x315640;
      window.URL_CDN_IKIT = "https://ik.imagekit.io/jdfnxk119";
      var _0x437a97 = /(.{18})(([AB])([0-9A-Za-z_]{2})([0-9A-Za-z]{3})([0-9A-Z_]{2})([0-9A-Z_]{2})([0-9A-Z_]{2})([0-9A-Z_]{2}))/;
      var _0x5b7815 = true;
      var _0x12c7cd = true;
      var _0x4605ac = false;
      var _0x4935f5 = 18;
      window.backgroundArena = [{
        nome: "Default",
        uri: window.URL_CDN + "/backgrounds/bkgnd0.png"
      }, {
        nome: "Green",
        uri: window.URL_CDN + "/backgrounds/bkgnd8.png"
      }, {
        nome: "Blue",
        uri: window.URL_CDN + "/backgrounds/bkgnd9.png"
      }, {
        nome: "Blue Black",
        uri: window.URL_CDN + "/backgrounds/bkgnd10.png"
      }, {
        nome: "Blue Light",
        uri: window.URL_CDN + "/backgrounds/bkgnd6.png"
      }, {
        nome: "Desert",
        uri: window.URL_CDN + "/backgrounds/bkgnd7.png"
      }, {
        nome: "Textil",
        uri: window.URL_CDN + "/backgrounds/bkgnd11.png"
      }, {
        nome: "Sky Blue",
        uri: window.URL_CDN + "/backgrounds/bg_sky_1.png"
      }, {
        nome: "Sky Purp",
        uri: window.URL_CDN + "/backgrounds/bg_sky_2.png"
      }, {
        nome: "Sky Violet",
        uri: window.URL_CDN + "/backgrounds/bg_sky_3.png"
      }, {
        nome: "Sky Orange",
        uri: window.URL_CDN + "/backgrounds/bg_sky_4.png"
      }, {
        nome: "Sky Write",
        uri: window.URL_CDN + "/backgrounds/bg_sky_5.png"
      }, {
        nome: "Arena 1",
        uri: window.URL_CDN + "/backgrounds/arena01.png",
        w: 1100,
        h: 1100
      }, {
        nome: "Arena 2",
        uri: window.URL_CDN + "/backgrounds/arena02.png",
        w: 1100,
        h: 1100
      }, {
        nome: "Arena 3",
        uri: window.URL_CDN + "/backgrounds/arena03.png",
        w: 1100,
        h: 1100
      }, {
        nome: "Arena 4",
        uri: window.URL_CDN + "/backgrounds/arena04.png",
        w: 1100,
        h: 1100
      }];
      (function (_0x1130f1) {
        if ((typeof exports === "undefined" ? "undefined" : _0x115510(exports)) === "object" && "object" !== "undefined") {
          _0x8363ad.exports = _0x1130f1();
        } else if (typeof define === "function" && _0x48814e.amdO) {
          define([], _0x1130f1);
        } else {
          var _0x20220f;
          if (typeof window !== "undefined") {
            _0x20220f = window;
          } else if (typeof _0x48814e.g !== "undefined") {
            _0x20220f = _0x48814e.g;
          } else if (typeof self !== "undefined") {
            _0x20220f = self;
          } else {
            _0x20220f = this;
          }
          _0x20220f.nipplejs = _0x1130f1();
        }
      })(function () {
        var _0x31e6c1;
        var _0x214614;
        var _0x1ce096;
        "use strict";
        var _0x34e85a = !!("ontouchstart" in window);
        var _0x546dd1 = window.PointerEvent ? true : false;
        var _0x50d25f = window.MSPointerEvent ? true : false;
        var _0x437ceb = {
          touch: {
            start: "touchstart",
            move: "touchmove",
            end: "touchend, touchcancel"
          },
          mouse: {
            start: "mousedown",
            move: "mousemove",
            end: "mouseup"
          },
          pointer: {
            start: "pointerdown",
            move: "pointermove",
            end: "pointerup, pointercancel"
          },
          MSPointer: {
            start: "MSPointerDown",
            move: "MSPointerMove",
            end: "MSPointerUp"
          }
        };
        var _0x507989;
        var _0x53826d = {};
        if (_0x546dd1) {
          _0x507989 = _0x437ceb.pointer;
        } else if (_0x50d25f) {
          _0x507989 = _0x437ceb.MSPointer;
        } else if (_0x34e85a) {
          _0x507989 = _0x437ceb.touch;
          _0x53826d = _0x437ceb.mouse;
        } else {
          _0x507989 = _0x437ceb.mouse;
        }
        var _0x4eb62d = {};
        _0x4eb62d.distance = function (_0x5889ab, _0x2f7f36) {
          var _0x30db32 = _0x2f7f36.x - _0x5889ab.x;
          var _0x42de41 = _0x2f7f36.y - _0x5889ab.y;
          return Math.sqrt(_0x30db32 * _0x30db32 + _0x42de41 * _0x42de41);
        };
        _0x4eb62d.angle = function (_0x31d031, _0x2a573b) {
          var _0x5bbd07 = _0x2a573b.x - _0x31d031.x;
          var _0x2e51d0 = _0x2a573b.y - _0x31d031.y;
          return _0x4eb62d.degrees(Math.atan2(_0x2e51d0, _0x5bbd07));
        };
        _0x4eb62d.findCoord = function (_0x4a8ac8, _0x40af94, _0x410448) {
          var _0x35eacd = {
            x: 0,
            y: 0
          };
          _0x410448 = _0x4eb62d.radians(_0x410448);
          _0x35eacd.x = _0x4a8ac8.x - _0x40af94 * Math.cos(_0x410448);
          _0x35eacd.y = _0x4a8ac8.y - _0x40af94 * Math.sin(_0x410448);
          return _0x35eacd;
        };
        _0x4eb62d.radians = function (_0x28db0b) {
          return _0x28db0b * (Math.PI / 180);
        };
        _0x4eb62d.degrees = function (_0x4d84ed) {
          return _0x4d84ed * (180 / Math.PI);
        };
        _0x4eb62d.bindEvt = function (_0x7538bc, _0x3024c7, _0x3a6b74) {
          var _0x4888fe = _0x3024c7.split(/[ ,]+/g);
          var _0x436b03;
          for (var _0x1f2f1e = 0; _0x1f2f1e < _0x4888fe.length; _0x1f2f1e += 1) {
            _0x436b03 = _0x4888fe[_0x1f2f1e];
            if (_0x7538bc.addEventListener) {
              _0x7538bc.addEventListener(_0x436b03, _0x3a6b74, false);
            } else if (_0x7538bc.attachEvent) {
              _0x7538bc.attachEvent(_0x436b03, _0x3a6b74);
            }
          }
        };
        _0x4eb62d.unbindEvt = function (_0x29f437, _0x1432fe, _0x55f4ca) {
          var _0x3261bf = _0x1432fe.split(/[ ,]+/g);
          var _0x57b7eb;
          for (var _0x3da68b = 0; _0x3da68b < _0x3261bf.length; _0x3da68b += 1) {
            _0x57b7eb = _0x3261bf[_0x3da68b];
            if (_0x29f437.removeEventListener) {
              _0x29f437.removeEventListener(_0x57b7eb, _0x55f4ca);
            } else if (_0x29f437.detachEvent) {
              _0x29f437.detachEvent(_0x57b7eb, _0x55f4ca);
            }
          }
        };
        _0x4eb62d.trigger = function (_0x5dab0c, _0x30a0a3, _0x59ce08) {
          var _0x40395f = new CustomEvent(_0x30a0a3, _0x59ce08);
          _0x5dab0c.dispatchEvent(_0x40395f);
        };
        _0x4eb62d.prepareEvent = function (_0x366b9c) {
          _0x366b9c.preventDefault();
          if (_0x366b9c.type.match(/^touch/)) {
            return _0x366b9c.changedTouches;
          } else {
            return _0x366b9c;
          }
        };
        _0x4eb62d.getScroll = function () {
          var _0x38ec54 = window.pageXOffset !== undefined ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
          var _0x46e0d8 = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
          return {
            x: _0x38ec54,
            y: _0x46e0d8
          };
        };
        _0x4eb62d.applyPosition = function (_0x5e7efe, _0x11d961) {
          if (_0x11d961.top || _0x11d961.right || _0x11d961.bottom || _0x11d961.left) {
            _0x5e7efe.style.top = _0x11d961.top;
            _0x5e7efe.style.right = _0x11d961.right;
            _0x5e7efe.style.bottom = _0x11d961.bottom;
            _0x5e7efe.style.left = _0x11d961.left;
          } else {
            _0x5e7efe.style.left = _0x11d961.x + "px";
            _0x5e7efe.style.top = _0x11d961.y + "px";
          }
        };
        _0x4eb62d.getTransitionStyle = function (_0x36f553, _0x51668f, _0x8e19e0) {
          var _0x968ee8 = _0x4eb62d.configStylePropertyObject(_0x36f553);
          for (var _0x2d9348 in _0x968ee8) {
            if (_0x968ee8.hasOwnProperty(_0x2d9348)) {
              if (typeof _0x51668f === "string") {
                _0x968ee8[_0x2d9348] = _0x51668f + " " + _0x8e19e0;
              } else {
                var _0x540734 = "";
                for (var _0x59a1f4 = 0, _0x4a830d = _0x51668f.length; _0x59a1f4 < _0x4a830d; _0x59a1f4 += 1) {
                  _0x540734 += _0x51668f[_0x59a1f4] + " " + _0x8e19e0 + ", ";
                }
                _0x968ee8[_0x2d9348] = _0x540734.slice(0, -2);
              }
            }
          }
          return _0x968ee8;
        };
        _0x4eb62d.getVendorStyle = function (_0x2e2129, _0x2f213b) {
          var _0x5d0b9c = _0x4eb62d.configStylePropertyObject(_0x2e2129);
          for (var _0x48e36c in _0x5d0b9c) {
            if (_0x5d0b9c.hasOwnProperty(_0x48e36c)) {
              _0x5d0b9c[_0x48e36c] = _0x2f213b;
            }
          }
          return _0x5d0b9c;
        };
        _0x4eb62d.configStylePropertyObject = function (_0x27e84f) {
          var _0x251589 = {
            [_0x27e84f]: ""
          };
          var _0x1ec5a8 = ["webkit", "Moz", "o"];
          _0x1ec5a8.forEach(function (_0x52b2c1) {
            _0x251589[_0x52b2c1 + _0x27e84f.charAt(0).toUpperCase() + _0x27e84f.slice(1)] = "";
          });
          return _0x251589;
        };
        _0x4eb62d.extend = function (_0x22196a, _0x814e53) {
          for (var _0x16f2ab in _0x814e53) {
            if (_0x814e53.hasOwnProperty(_0x16f2ab)) {
              _0x22196a[_0x16f2ab] = _0x814e53[_0x16f2ab];
            }
          }
          return _0x22196a;
        };
        _0x4eb62d.safeExtend = function (_0x1b334d, _0x573c0d) {
          var _0x3f79a8 = {};
          for (var _0x3964e6 in _0x1b334d) {
            if (_0x1b334d.hasOwnProperty(_0x3964e6) && _0x573c0d.hasOwnProperty(_0x3964e6)) {
              _0x3f79a8[_0x3964e6] = _0x573c0d[_0x3964e6];
            } else if (_0x1b334d.hasOwnProperty(_0x3964e6)) {
              _0x3f79a8[_0x3964e6] = _0x1b334d[_0x3964e6];
            }
          }
          return _0x3f79a8;
        };
        _0x4eb62d.map = function (_0x466a79, _0x784283) {
          if (_0x466a79.length) {
            for (var _0x3fe185 = 0, _0x21437e = _0x466a79.length; _0x3fe185 < _0x21437e; _0x3fe185 += 1) {
              _0x784283(_0x466a79[_0x3fe185]);
            }
          } else {
            _0x784283(_0x466a79);
          }
        };
        function _0x31fa81() {}
        ;
        _0x31fa81.prototype.on = function (_0x5c5b57, _0x3baf5e) {
          var _0x580462 = this;
          var _0x491c7c = _0x5c5b57.split(/[ ,]+/g);
          var _0xc296e0;
          _0x580462._handlers_ = _0x580462._handlers_ || {};
          for (var _0x54639f = 0; _0x54639f < _0x491c7c.length; _0x54639f += 1) {
            _0xc296e0 = _0x491c7c[_0x54639f];
            _0x580462._handlers_[_0xc296e0] = _0x580462._handlers_[_0xc296e0] || [];
            _0x580462._handlers_[_0xc296e0].push(_0x3baf5e);
          }
          return _0x580462;
        };
        _0x31fa81.prototype.off = function (_0x811c29, _0x4ae2e1) {
          var _0x903f80 = this;
          _0x903f80._handlers_ = _0x903f80._handlers_ || {};
          if (_0x811c29 === undefined) {
            _0x903f80._handlers_ = {};
          } else if (_0x4ae2e1 === undefined) {
            _0x903f80._handlers_[_0x811c29] = null;
          } else if (_0x903f80._handlers_[_0x811c29] && _0x903f80._handlers_[_0x811c29].indexOf(_0x4ae2e1) >= 0) {
            _0x903f80._handlers_[_0x811c29].splice(_0x903f80._handlers_[_0x811c29].indexOf(_0x4ae2e1), 1);
          }
          return _0x903f80;
        };
        _0x31fa81.prototype.trigger = function (_0x2a8249, _0x161be5) {
          var _0xb572cb = this;
          var _0xc61570 = _0x2a8249.split(/[ ,]+/g);
          var _0x2da5ac;
          _0xb572cb._handlers_ = _0xb572cb._handlers_ || {};
          for (var _0x3c85ab = 0; _0x3c85ab < _0xc61570.length; _0x3c85ab += 1) {
            _0x2da5ac = _0xc61570[_0x3c85ab];
            if (_0xb572cb._handlers_[_0x2da5ac] && _0xb572cb._handlers_[_0x2da5ac].length) {
              _0xb572cb._handlers_[_0x2da5ac].forEach(function (_0x5d205d) {
                _0x5d205d.call(_0xb572cb, {
                  type: _0x2da5ac,
                  target: _0xb572cb
                }, _0x161be5);
              });
            }
          }
        };
        _0x31fa81.prototype.config = function (_0x482d24) {
          var _0x505270 = this;
          _0x505270.options = _0x505270.defaults || {};
          if (_0x482d24) {
            _0x505270.options = _0x4eb62d.safeExtend(_0x505270.options, _0x482d24);
          }
        };
        _0x31fa81.prototype.bindEvt = function (_0x5e328f, _0x2898c1) {
          var _0x32d683 = this;
          _0x32d683._domHandlers_ = _0x32d683._domHandlers_ || {};
          _0x32d683._domHandlers_[_0x2898c1] = function () {
            if (typeof _0x32d683["on" + _0x2898c1] === "function") {
              _0x32d683["on" + _0x2898c1].apply(_0x32d683, arguments);
            } else {
              console.warn("[WARNING] : Missing \"on" + _0x2898c1 + "\" handler.");
            }
          };
          _0x4eb62d.bindEvt(_0x5e328f, _0x507989[_0x2898c1], _0x32d683._domHandlers_[_0x2898c1]);
          if (_0x53826d[_0x2898c1]) {
            _0x4eb62d.bindEvt(_0x5e328f, _0x53826d[_0x2898c1], _0x32d683._domHandlers_[_0x2898c1]);
          }
          return _0x32d683;
        };
        _0x31fa81.prototype.unbindEvt = function (_0x3ab6a2, _0x390149) {
          var _0x412439 = this;
          _0x412439._domHandlers_ = _0x412439._domHandlers_ || {};
          _0x4eb62d.unbindEvt(_0x3ab6a2, _0x507989[_0x390149], _0x412439._domHandlers_[_0x390149]);
          if (_0x53826d[_0x390149]) {
            _0x4eb62d.unbindEvt(_0x3ab6a2, _0x53826d[_0x390149], _0x412439._domHandlers_[_0x390149]);
          }
          delete _0x412439._domHandlers_[_0x390149];
          return this;
        };
        function _0x3b834c(_0x4895e9, _0x2bd705) {
          this.identifier = _0x2bd705.identifier;
          this.position = _0x2bd705.position;
          this.frontPosition = _0x2bd705.frontPosition;
          this.collection = _0x4895e9;
          this.defaults = {
            size: 100,
            threshold: 0.1,
            color: "white",
            fadeTime: 250,
            dataOnly: false,
            restJoystick: true,
            restOpacity: 0.5,
            mode: "dynamic",
            zone: document.body,
            lockX: false,
            lockY: false,
            dumbBox: null
          };
          this.config(_0x2bd705);
          if (this.options.mode === "dynamic") {
            this.options.restOpacity = 0;
          }
          this.id = _0x3b834c.id;
          _0x3b834c.id += 1;
          this.buildEl().stylize();
          this.instance = {
            el: this.ui.el,
            on: this.on.bind(this),
            off: this.off.bind(this),
            show: this.show.bind(this),
            hide: this.hide.bind(this),
            add: this.addToDom.bind(this),
            remove: this.removeFromDom.bind(this),
            destroy: this.destroy.bind(this),
            resetDirection: this.resetDirection.bind(this),
            computeDirection: this.computeDirection.bind(this),
            trigger: this.trigger.bind(this),
            position: this.position,
            frontPosition: this.frontPosition,
            ui: this.ui,
            identifier: this.identifier,
            id: this.id,
            options: this.options
          };
          return this.instance;
        }
        ;
        _0x3b834c.prototype = new _0x31fa81();
        _0x3b834c.constructor = _0x3b834c;
        _0x3b834c.id = 0;
        _0x3b834c.prototype.buildEl = function (_0x3eb592) {
          this.ui = {};
          if (this.options.dataOnly) {
            return this;
          }
          this.ui.el = document.createElement("div");
          this.ui.back = document.createElement("div");
          this.ui.front = document.createElement("div");
          this.ui.el.className = "nipple collection_" + this.collection.id;
          this.ui.back.className = "back";
          this.ui.front.className = "front";
          this.ui.el.setAttribute("id", "nipple_" + this.collection.id + "_" + this.id);
          this.ui.el.appendChild(this.ui.back);
          this.ui.el.appendChild(this.ui.front);
          return this;
        };
        _0x3b834c.prototype.stylize = function () {
          if (this.options.dataOnly) {
            return this;
          }
          var _0x2c7ecb = this.options.fadeTime + "ms";
          var _0x2a0c9d = _0x4eb62d.getVendorStyle("borderRadius", "50%");
          var _0x352039 = _0x4eb62d.getTransitionStyle("transition", "opacity", _0x2c7ecb);
          var _0x7006cf = {
            el: {
              position: "absolute",
              opacity: this.options.restOpacity,
              display: "block",
              zIndex: 999
            },
            back: {
              position: "absolute",
              display: "block",
              width: this.options.size + "px",
              height: this.options.size + "px",
              marginLeft: -this.options.size / 2 + "px",
              marginTop: -this.options.size / 2 + "px",
              background: this.options.color,
              opacity: ".5"
            },
            front: {
              width: this.options.size / 2 + "px",
              height: this.options.size / 2 + "px",
              position: "absolute",
              display: "block",
              marginLeft: -this.options.size / 4 + "px",
              marginTop: -this.options.size / 4 + "px",
              background: this.options.color,
              opacity: ".5"
            }
          };
          _0x4eb62d.extend(_0x7006cf.el, _0x352039);
          _0x4eb62d.extend(_0x7006cf.back, _0x2a0c9d);
          _0x4eb62d.extend(_0x7006cf.front, _0x2a0c9d);
          this.applyStyles(_0x7006cf);
          return this;
        };
        _0x3b834c.prototype.applyStyles = function (_0x59260d) {
          for (var _0x3558ee in this.ui) {
            if (this.ui.hasOwnProperty(_0x3558ee)) {
              for (var _0x39d8d0 in _0x59260d[_0x3558ee]) {
                this.ui[_0x3558ee].style[_0x39d8d0] = _0x59260d[_0x3558ee][_0x39d8d0];
              }
            }
          }
          return this;
        };
        _0x3b834c.prototype.addToDom = function () {
          if (this.options.dataOnly || document.body.contains(this.ui.el)) {
            return this;
          }
          this.options.zone.appendChild(this.ui.el);
          return this;
        };
        _0x3b834c.prototype.removeFromDom = function () {
          if (this.options.dataOnly || !document.body.contains(this.ui.el)) {
            return this;
          }
          this.options.zone.removeChild(this.ui.el);
          return this;
        };
        _0x3b834c.prototype.destroy = function () {
          clearTimeout(this.removeTimeout);
          clearTimeout(this.showTimeout);
          clearTimeout(this.restTimeout);
          this.trigger("destroyed", this.instance);
          this.removeFromDom();
          this.off();
        };
        _0x3b834c.prototype.show = function (_0x16d7fe) {
          var _0x55fdef = this;
          if (_0x55fdef.options.dataOnly) {
            return _0x55fdef;
          }
          clearTimeout(_0x55fdef.removeTimeout);
          clearTimeout(_0x55fdef.showTimeout);
          clearTimeout(_0x55fdef.restTimeout);
          _0x55fdef.addToDom();
          _0x55fdef.restCallback();
          setTimeout(function () {
            _0x55fdef.ui.el.style.opacity = 1;
          }, 0);
          _0x55fdef.showTimeout = setTimeout(function () {
            _0x55fdef.trigger("shown", _0x55fdef.instance);
            if (typeof _0x16d7fe === "function") {
              _0x16d7fe.call(this);
            }
          }, _0x55fdef.options.fadeTime);
          return _0x55fdef;
        };
        _0x3b834c.prototype.hide = function (_0xac0ee7) {
          var _0x5c2553 = this;
          if (_0x5c2553.options.dataOnly) {
            return _0x5c2553;
          }
          _0x5c2553.ui.el.style.opacity = _0x5c2553.options.restOpacity;
          clearTimeout(_0x5c2553.removeTimeout);
          clearTimeout(_0x5c2553.showTimeout);
          clearTimeout(_0x5c2553.restTimeout);
          _0x5c2553.removeTimeout = setTimeout(function () {
            var _0x3305ff = _0x5c2553.options.mode === "dynamic" ? "none" : "block";
            _0x5c2553.ui.el.style.display = _0x3305ff;
            if (typeof _0xac0ee7 === "function") {
              _0xac0ee7.call(_0x5c2553);
            }
            _0x5c2553.trigger("hidden", _0x5c2553.instance);
          }, _0x5c2553.options.fadeTime);
          if (_0x5c2553.options.restJoystick) {
            _0x5c2553.restPosition();
          }
          return _0x5c2553;
        };
        _0x3b834c.prototype.restPosition = function (_0xdfccc2) {
          var _0x5c5890 = this;
          _0x5c5890.frontPosition = {
            x: 0,
            y: 0
          };
          var _0x4007e2 = _0x5c5890.options.fadeTime + "ms";
          var _0x26a903 = {};
          _0x26a903.front = _0x4eb62d.getTransitionStyle("transition", ["top", "left"], _0x4007e2);
          var _0xa5c973 = {
            front: {}
          };
          _0xa5c973.front = {
            left: _0x5c5890.frontPosition.x + "px",
            top: _0x5c5890.frontPosition.y + "px"
          };
          _0x5c5890.applyStyles(_0x26a903);
          _0x5c5890.applyStyles(_0xa5c973);
          _0x5c5890.restTimeout = setTimeout(function () {
            if (typeof _0xdfccc2 === "function") {
              _0xdfccc2.call(_0x5c5890);
            }
            _0x5c5890.restCallback();
          }, _0x5c5890.options.fadeTime);
        };
        _0x3b834c.prototype.restCallback = function () {
          var _0x349b1b = this;
          var _0x2d607b = {};
          _0x2d607b.front = _0x4eb62d.getTransitionStyle("transition", "none", "");
          _0x349b1b.applyStyles(_0x2d607b);
          _0x349b1b.trigger("rested", _0x349b1b.instance);
        };
        _0x3b834c.prototype.resetDirection = function () {
          this.direction = {
            x: false,
            y: false,
            angle: false
          };
        };
        _0x3b834c.prototype.computeDirection = function (_0x57f9ed) {
          var _0x2d41e7 = _0x57f9ed.angle.radian;
          var _0xe4dbb6 = Math.PI / 4;
          var _0x1ded9f = Math.PI / 2;
          var _0x51b7fa;
          var _0x68ef10;
          var _0x1a6633;
          if (_0x2d41e7 > _0xe4dbb6 && _0x2d41e7 < _0xe4dbb6 * 3 && !_0x57f9ed.lockX) {
            _0x51b7fa = "up";
          } else if (_0x2d41e7 > -_0xe4dbb6 && _0x2d41e7 <= _0xe4dbb6 && !_0x57f9ed.lockY) {
            _0x51b7fa = "left";
          } else if (_0x2d41e7 > -_0xe4dbb6 * 3 && _0x2d41e7 <= -_0xe4dbb6 && !_0x57f9ed.lockX) {
            _0x51b7fa = "down";
          } else if (!_0x57f9ed.lockY) {
            _0x51b7fa = "right";
          }
          if (!_0x57f9ed.lockY) {
            if (_0x2d41e7 > -_0x1ded9f && _0x2d41e7 < _0x1ded9f) {
              _0x68ef10 = "left";
            } else {
              _0x68ef10 = "right";
            }
          }
          if (!_0x57f9ed.lockX) {
            if (_0x2d41e7 > 0) {
              _0x1a6633 = "up";
            } else {
              _0x1a6633 = "down";
            }
          }
          if (_0x57f9ed.force > this.options.threshold) {
            var _0x2c3854 = {};
            for (var _0x1d9346 in this.direction) {
              if (this.direction.hasOwnProperty(_0x1d9346)) {
                _0x2c3854[_0x1d9346] = this.direction[_0x1d9346];
              }
            }
            var _0x56d408 = {};
            this.direction = {
              x: _0x68ef10,
              y: _0x1a6633,
              angle: _0x51b7fa
            };
            _0x57f9ed.direction = this.direction;
            for (var _0x1d9346 in _0x2c3854) {
              if (_0x2c3854[_0x1d9346] === this.direction[_0x1d9346]) {
                _0x56d408[_0x1d9346] = true;
              }
            }
            if (_0x56d408.x && _0x56d408.y && _0x56d408.angle) {
              return _0x57f9ed;
            }
            if (!_0x56d408.x || !_0x56d408.y) {
              this.trigger("plain", _0x57f9ed);
            }
            if (!_0x56d408.x) {
              this.trigger("plain:" + _0x68ef10, _0x57f9ed);
            }
            if (!_0x56d408.y) {
              this.trigger("plain:" + _0x1a6633, _0x57f9ed);
            }
            if (!_0x56d408.angle) {
              this.trigger("dir dir:" + _0x51b7fa, _0x57f9ed);
            }
          }
          return _0x57f9ed;
        };
        function _0x5df102(_0x1ff7cb, _0x20f041) {
          var _0x39a625 = this;
          _0x39a625.nipples = [];
          _0x39a625.idles = [];
          _0x39a625.actives = [];
          _0x39a625.ids = [];
          _0x39a625.pressureIntervals = {};
          _0x39a625.manager = _0x1ff7cb;
          _0x39a625.id = _0x5df102.id;
          _0x5df102.id += 1;
          _0x39a625.defaults = {
            zone: document.body,
            multitouch: false,
            maxNumberOfNipples: 10,
            mode: "dynamic",
            position: {
              top: 0,
              left: 0
            },
            catchDistance: 200,
            size: 100,
            threshold: 0.1,
            color: "white",
            fadeTime: 250,
            dataOnly: false,
            restJoystick: true,
            restOpacity: 0.5,
            lockX: false,
            lockY: false,
            dumbBox: null
          };
          _0x39a625.config(_0x20f041);
          if (_0x39a625.options.mode === "static" || _0x39a625.options.mode === "semi") {
            _0x39a625.options.multitouch = false;
          }
          if (!_0x39a625.options.multitouch) {
            _0x39a625.options.maxNumberOfNipples = 1;
          }
          _0x39a625.updateBox();
          _0x39a625.prepareNipples();
          _0x39a625.bindings();
          _0x39a625.begin();
          return _0x39a625.nipples;
        }
        _0x5df102.prototype = new _0x31fa81();
        _0x5df102.constructor = _0x5df102;
        _0x5df102.id = 0;
        _0x5df102.prototype.prepareNipples = function () {
          var _0x4ebb18 = this;
          var _0x2c7b90 = _0x4ebb18.nipples;
          _0x2c7b90.on = _0x4ebb18.on.bind(_0x4ebb18);
          _0x2c7b90.off = _0x4ebb18.off.bind(_0x4ebb18);
          _0x2c7b90.options = _0x4ebb18.options;
          _0x2c7b90.destroy = _0x4ebb18.destroy.bind(_0x4ebb18);
          _0x2c7b90.ids = _0x4ebb18.ids;
          _0x2c7b90.id = _0x4ebb18.id;
          _0x2c7b90.processOnMove = _0x4ebb18.processOnMove.bind(_0x4ebb18);
          _0x2c7b90.processOnEnd = _0x4ebb18.processOnEnd.bind(_0x4ebb18);
          _0x2c7b90.get = function (_0x315c72) {
            if (_0x315c72 === undefined) {
              return _0x2c7b90[0];
            }
            for (var _0xcafe5d = 0, _0x12ec93 = _0x2c7b90.length; _0xcafe5d < _0x12ec93; _0xcafe5d += 1) {
              if (_0x2c7b90[_0xcafe5d].identifier === _0x315c72) {
                return _0x2c7b90[_0xcafe5d];
              }
            }
            return false;
          };
        };
        _0x5df102.prototype.bindings = function () {
          var _0xcfc23c = this;
          _0xcfc23c.bindEvt(_0xcfc23c.options.zone, "start");
          _0xcfc23c.options.zone.style.touchAction = "none";
          _0xcfc23c.options.zone.style.msTouchAction = "none";
        };
        _0x5df102.prototype.begin = function () {
          var _0x110a9b = this;
          var _0x20c1f8 = _0x110a9b.options;
          if (_0x20c1f8.mode === "static") {
            var _0x16e6af = _0x110a9b.createNipple(_0x20c1f8.position, _0x110a9b.manager.getIdentifier());
            _0x16e6af.add();
            _0x110a9b.idles.push(_0x16e6af);
          }
        };
        _0x5df102.prototype.createNipple = function (_0x4cbc13, _0x23b392) {
          var _0x579d5d = this;
          var _0x370c90 = _0x4eb62d.getScroll();
          var _0xf76375 = {};
          var _0x444366 = _0x579d5d.options;
          if (_0x4cbc13.x && _0x4cbc13.y) {
            _0xf76375 = {
              x: _0x4cbc13.x - (_0x370c90.x + _0x579d5d.box.left),
              y: _0x4cbc13.y - (_0x370c90.y + _0x579d5d.box.top)
            };
          } else if (_0x4cbc13.top || _0x4cbc13.right || _0x4cbc13.bottom || _0x4cbc13.left) {
            var _0x4cbcba = document.createElement("DIV");
            _0x4cbcba.style.display = "hidden";
            _0x4cbcba.style.top = _0x4cbc13.top;
            _0x4cbcba.style.right = _0x4cbc13.right;
            _0x4cbcba.style.bottom = _0x4cbc13.bottom;
            _0x4cbcba.style.left = _0x4cbc13.left;
            _0x4cbcba.style.position = "absolute";
            _0x444366.zone.appendChild(_0x4cbcba);
            var _0x7b3b2e = _0x4cbcba.getBoundingClientRect();
            _0x444366.zone.removeChild(_0x4cbcba);
            _0xf76375 = _0x4cbc13;
            _0x4cbc13 = {
              x: (_0x444366.dumbBox ? _0x444366.dumbBox.left : _0x7b3b2e.left) + _0x370c90.x,
              y: (_0x444366.dumbBox ? _0x444366.dumbBox.top : _0x7b3b2e.top) + _0x370c90.y
            };
          }
          var _0x2c2bab = new _0x3b834c(_0x579d5d, {
            color: _0x444366.color,
            size: _0x444366.size,
            threshold: _0x444366.threshold,
            fadeTime: _0x444366.fadeTime,
            dataOnly: _0x444366.dataOnly,
            restJoystick: _0x444366.restJoystick,
            restOpacity: _0x444366.restOpacity,
            mode: _0x444366.mode,
            identifier: _0x23b392,
            position: _0x4cbc13,
            zone: _0x444366.zone,
            frontPosition: {
              x: 0,
              y: 0
            }
          });
          if (!_0x444366.dataOnly) {
            _0x4eb62d.applyPosition(_0x2c2bab.ui.el, _0xf76375);
            _0x4eb62d.applyPosition(_0x2c2bab.ui.front, _0x2c2bab.frontPosition);
          }
          _0x579d5d.nipples.push(_0x2c2bab);
          _0x579d5d.trigger("added " + _0x2c2bab.identifier + ":added", _0x2c2bab);
          _0x579d5d.manager.trigger("added " + _0x2c2bab.identifier + ":added", _0x2c2bab);
          _0x579d5d.bindNipple(_0x2c2bab);
          return _0x2c2bab;
        };
        _0x5df102.prototype.updateBox = function () {
          var _0x490ca9 = this;
          _0x490ca9.box = _0x490ca9.options.zone.getBoundingClientRect();
        };
        _0x5df102.prototype.bindNipple = function (_0x52a37d) {
          var _0x211358 = this;
          var _0x57dc34;
          var _0x231a5e = function _0x3578f3(_0x50c565, _0x4f194c) {
            _0x57dc34 = _0x50c565.type + " " + _0x4f194c.id + ":" + _0x50c565.type;
            _0x211358.trigger(_0x57dc34, _0x4f194c);
          };
          _0x52a37d.on("destroyed", _0x211358.onDestroyed.bind(_0x211358));
          _0x52a37d.on("shown hidden rested dir plain", _0x231a5e);
          _0x52a37d.on("dir:up dir:right dir:down dir:left", _0x231a5e);
          _0x52a37d.on("plain:up plain:right plain:down plain:left", _0x231a5e);
        };
        _0x5df102.prototype.pressureFn = function (_0x4d8311, _0x3ec40f, _0x299813) {
          var _0x107a12 = this;
          var _0x1dead1 = 0;
          clearInterval(_0x107a12.pressureIntervals[_0x299813]);
          _0x107a12.pressureIntervals[_0x299813] = setInterval(function () {
            var _0x3be5a1 = _0x4d8311.force || _0x4d8311.pressure || _0x4d8311.webkitForce || 0;
            if (_0x3be5a1 !== _0x1dead1) {
              _0x3ec40f.trigger("pressure", _0x3be5a1);
              _0x107a12.trigger("pressure " + _0x3ec40f.identifier + ":pressure", _0x3be5a1);
              _0x1dead1 = _0x3be5a1;
            }
          }.bind(_0x107a12), 100);
        };
        _0x5df102.prototype.onstart = function (_0x15482d) {
          var _0x4b2d6d = this;
          var _0xea994 = _0x4b2d6d.options;
          _0x15482d = _0x4eb62d.prepareEvent(_0x15482d);
          _0x4b2d6d.updateBox();
          var _0x2b61ee = function _0xbe1de9(_0x25bf9d) {
            if (_0x4b2d6d.actives.length < _0xea994.maxNumberOfNipples) {
              _0x4b2d6d.processOnStart(_0x25bf9d);
            }
          };
          _0x4eb62d.map(_0x15482d, _0x2b61ee);
          _0x4b2d6d.manager.bindDocument();
          return false;
        };
        _0x5df102.prototype.processOnStart = function (_0xa2a7c2) {
          var _0x7b9037 = this;
          var _0x382e25 = _0x7b9037.options;
          var _0x4af8d2;
          var _0x44939f = _0x7b9037.manager.getIdentifier(_0xa2a7c2);
          var _0x2bf1f9 = _0xa2a7c2.force || _0xa2a7c2.pressure || _0xa2a7c2.webkitForce || 0;
          var _0x4cbf9a = {
            x: _0xa2a7c2.pageX,
            y: _0xa2a7c2.pageY
          };
          var _0x3c33ed = _0x7b9037.getOrCreate(_0x44939f, _0x4cbf9a);
          if (_0x3c33ed.identifier !== _0x44939f) {
            _0x7b9037.manager.removeIdentifier(_0x3c33ed.identifier);
          }
          _0x3c33ed.identifier = _0x44939f;
          var _0x1cabca = function _0x4e059(_0x391592) {
            _0x391592.trigger("start", _0x391592);
            _0x7b9037.trigger("start " + _0x391592.id + ":start", _0x391592);
            _0x391592.show();
            if (_0x2bf1f9 > 0) {
              _0x7b9037.pressureFn(_0xa2a7c2, _0x391592, _0x391592.identifier);
            }
            _0x7b9037.processOnMove(_0xa2a7c2);
          };
          if ((_0x4af8d2 = _0x7b9037.idles.indexOf(_0x3c33ed)) >= 0) {
            _0x7b9037.idles.splice(_0x4af8d2, 1);
          }
          _0x7b9037.actives.push(_0x3c33ed);
          _0x7b9037.ids.push(_0x3c33ed.identifier);
          if (_0x382e25.mode !== "semi") {
            _0x1cabca(_0x3c33ed);
          } else {
            var _0x37edb9 = _0x4eb62d.distance(_0x4cbf9a, _0x3c33ed.position);
            if (_0x37edb9 <= _0x382e25.catchDistance) {
              _0x1cabca(_0x3c33ed);
            } else {
              _0x3c33ed.destroy();
              _0x7b9037.processOnStart(_0xa2a7c2);
              return;
            }
          }
          return _0x3c33ed;
        };
        _0x5df102.prototype.getOrCreate = function (_0x454f79, _0x57d499) {
          var _0x537091 = this;
          var _0x5a3065 = _0x537091.options;
          var _0x4cc50e;
          if (/(semi|static)/.test(_0x5a3065.mode)) {
            _0x4cc50e = _0x537091.idles[0];
            if (_0x4cc50e) {
              _0x537091.idles.splice(0, 1);
              return _0x4cc50e;
            }
            if (_0x5a3065.mode === "semi") {
              return _0x537091.createNipple(_0x57d499, _0x454f79);
            }
            console.warn("Coudln't find the needed nipple.");
            return false;
          }
          _0x4cc50e = _0x537091.createNipple(_0x57d499, _0x454f79);
          return _0x4cc50e;
        };
        _0x5df102.prototype.processOnMove = function (_0x50494d) {
          var _0x317402 = this;
          var _0x1d09cb = _0x317402.options;
          var _0x28dcdb = _0x317402.manager.getIdentifier(_0x50494d);
          var _0xd02bae = _0x317402.nipples.get(_0x28dcdb);
          if (!_0xd02bae) {
            console.error("Found zombie joystick with ID " + _0x28dcdb);
            _0x317402.manager.removeIdentifier(_0x28dcdb);
            return;
          }
          _0xd02bae.identifier = _0x28dcdb;
          var _0x3039e0 = _0xd02bae.options.size / 2;
          var _0xf84d12 = {
            x: _0x50494d.pageX,
            y: _0x50494d.pageY
          };
          var _0x50c66b = _0x4eb62d.distance(_0xf84d12, _0xd02bae.position);
          var _0x1f1b4b = _0x4eb62d.angle(_0xf84d12, _0xd02bae.position);
          var _0xd7c768 = _0x4eb62d.radians(_0x1f1b4b);
          var _0x322502 = _0x50c66b / _0x3039e0;
          if (_0x50c66b > _0x3039e0) {
            _0x50c66b = _0x3039e0;
            _0xf84d12 = _0x4eb62d.findCoord(_0xd02bae.position, _0x50c66b, _0x1f1b4b);
          }
          var _0x118597 = _0xf84d12.x - _0xd02bae.position.x;
          var _0x34fd64 = _0xf84d12.y - _0xd02bae.position.y;
          if (_0x1d09cb.lockX) {
            _0x34fd64 = 0;
          }
          if (_0x1d09cb.lockY) {
            _0x118597 = 0;
          }
          _0xd02bae.frontPosition = {
            x: _0x118597,
            y: _0x34fd64
          };
          if (!_0x1d09cb.dataOnly) {
            _0x4eb62d.applyPosition(_0xd02bae.ui.front, _0xd02bae.frontPosition);
          }
          var _0x479e8d = {
            identifier: _0xd02bae.identifier,
            position: _0xf84d12,
            force: _0x322502,
            pressure: _0x50494d.force || _0x50494d.pressure || _0x50494d.webkitForce || 0,
            distance: _0x50c66b,
            angle: {
              radian: _0xd7c768,
              degree: _0x1f1b4b
            },
            instance: _0xd02bae,
            lockX: _0x1d09cb.lockX,
            lockY: _0x1d09cb.lockY
          };
          _0x479e8d = _0xd02bae.computeDirection(_0x479e8d);
          _0x479e8d.angle = {
            radian: _0x4eb62d.radians(180 - _0x1f1b4b),
            degree: 180 - _0x1f1b4b
          };
          _0xd02bae.trigger("move", _0x479e8d);
          _0x317402.trigger("move " + _0xd02bae.id + ":move", _0x479e8d);
        };
        _0x5df102.prototype.processOnEnd = function (_0x144da1) {
          var _0x3da92b = this;
          var _0x59e2c8 = _0x3da92b.options;
          var _0x3c8310 = _0x3da92b.manager.getIdentifier(_0x144da1);
          var _0x7f86f4 = _0x3da92b.nipples.get(_0x3c8310);
          var _0x2ccf69 = _0x3da92b.manager.removeIdentifier(_0x7f86f4.identifier);
          if (!_0x7f86f4) {
            return;
          }
          if (!_0x59e2c8.dataOnly) {
            _0x7f86f4.hide(function () {
              if (_0x59e2c8.mode === "dynamic") {
                _0x7f86f4.trigger("removed", _0x7f86f4);
                _0x3da92b.trigger("removed " + _0x7f86f4.id + ":removed", _0x7f86f4);
                _0x3da92b.manager.trigger("removed " + _0x7f86f4.id + ":removed", _0x7f86f4);
                _0x7f86f4.destroy();
              }
            });
          }
          clearInterval(_0x3da92b.pressureIntervals[_0x7f86f4.identifier]);
          _0x7f86f4.resetDirection();
          _0x7f86f4.trigger("end", _0x7f86f4);
          _0x3da92b.trigger("end " + _0x7f86f4.id + ":end", _0x7f86f4);
          if (_0x3da92b.ids.indexOf(_0x7f86f4.identifier) >= 0) {
            _0x3da92b.ids.splice(_0x3da92b.ids.indexOf(_0x7f86f4.identifier), 1);
          }
          if (_0x3da92b.actives.indexOf(_0x7f86f4) >= 0) {
            _0x3da92b.actives.splice(_0x3da92b.actives.indexOf(_0x7f86f4), 1);
          }
          if (/(semi|static)/.test(_0x59e2c8.mode)) {
            _0x3da92b.idles.push(_0x7f86f4);
          } else if (_0x3da92b.nipples.indexOf(_0x7f86f4) >= 0) {
            _0x3da92b.nipples.splice(_0x3da92b.nipples.indexOf(_0x7f86f4), 1);
          }
          _0x3da92b.manager.unbindDocument();
          if (/(semi|static)/.test(_0x59e2c8.mode)) {
            _0x3da92b.manager.ids[_0x2ccf69.id] = _0x2ccf69.identifier;
          }
        };
        _0x5df102.prototype.onDestroyed = function (_0x103629, _0x23b201) {
          var _0x4188d3 = this;
          if (_0x4188d3.nipples.indexOf(_0x23b201) >= 0) {
            _0x4188d3.nipples.splice(_0x4188d3.nipples.indexOf(_0x23b201), 1);
          }
          if (_0x4188d3.actives.indexOf(_0x23b201) >= 0) {
            _0x4188d3.actives.splice(_0x4188d3.actives.indexOf(_0x23b201), 1);
          }
          if (_0x4188d3.idles.indexOf(_0x23b201) >= 0) {
            _0x4188d3.idles.splice(_0x4188d3.idles.indexOf(_0x23b201), 1);
          }
          if (_0x4188d3.ids.indexOf(_0x23b201.identifier) >= 0) {
            _0x4188d3.ids.splice(_0x4188d3.ids.indexOf(_0x23b201.identifier), 1);
          }
          _0x4188d3.manager.removeIdentifier(_0x23b201.identifier);
          _0x4188d3.manager.unbindDocument();
        };
        _0x5df102.prototype.destroy = function () {
          var _0x1df8aa = this;
          _0x1df8aa.unbindEvt(_0x1df8aa.options.zone, "start");
          _0x1df8aa.nipples.forEach(function (_0x9d6c65) {
            _0x9d6c65.destroy();
          });
          for (var _0x1345ce in _0x1df8aa.pressureIntervals) {
            if (_0x1df8aa.pressureIntervals.hasOwnProperty(_0x1345ce)) {
              clearInterval(_0x1df8aa.pressureIntervals[_0x1345ce]);
            }
          }
          _0x1df8aa.trigger("destroyed", _0x1df8aa.nipples);
          _0x1df8aa.manager.unbindDocument();
          _0x1df8aa.off();
        };
        function _0x5583cc(_0x75c56d) {
          var _0x465ee0 = this;
          _0x465ee0.ids = {};
          _0x465ee0.index = 0;
          _0x465ee0.collections = [];
          _0x465ee0.config(_0x75c56d);
          _0x465ee0.prepareCollections();
          var _0x58c6a2;
          _0x4eb62d.bindEvt(window, "resize", function (_0x43a72c) {
            clearTimeout(_0x58c6a2);
            _0x58c6a2 = setTimeout(function () {
              var _0x50f80a;
              var _0x1ffc71 = _0x4eb62d.getScroll();
              _0x465ee0.collections.forEach(function (_0x4eb79b) {
                _0x4eb79b.forEach(function (_0x549185) {
                  _0x50f80a = _0x549185.el.getBoundingClientRect();
                  _0x549185.position = {
                    x: _0x1ffc71.x + _0x50f80a.left,
                    y: _0x1ffc71.y + _0x50f80a.top
                  };
                });
              });
            }, 100);
          });
          return _0x465ee0.collections;
        }
        ;
        _0x5583cc.prototype = new _0x31fa81();
        _0x5583cc.constructor = _0x5583cc;
        _0x5583cc.prototype.prepareCollections = function () {
          var _0x5c02bf = this;
          _0x5c02bf.collections.create = _0x5c02bf.create.bind(_0x5c02bf);
          _0x5c02bf.collections.on = _0x5c02bf.on.bind(_0x5c02bf);
          _0x5c02bf.collections.off = _0x5c02bf.off.bind(_0x5c02bf);
          _0x5c02bf.collections.destroy = _0x5c02bf.destroy.bind(_0x5c02bf);
          _0x5c02bf.collections.get = function (_0x5651a7) {
            var _0x48af10;
            _0x5c02bf.collections.every(function (_0x383dfe) {
              if (_0x48af10 = _0x383dfe.get(_0x5651a7)) {
                return false;
              }
              return true;
            });
            return _0x48af10;
          };
        };
        _0x5583cc.prototype.create = function (_0x556d8e) {
          return this.createCollection(_0x556d8e);
        };
        _0x5583cc.prototype.createCollection = function (_0x4587d6) {
          var _0x2e54a4 = this;
          var _0x11ad99 = new _0x5df102(_0x2e54a4, _0x4587d6);
          _0x2e54a4.bindCollection(_0x11ad99);
          _0x2e54a4.collections.push(_0x11ad99);
          return _0x11ad99;
        };
        _0x5583cc.prototype.bindCollection = function (_0x2e62e2) {
          var _0x5e73d3 = this;
          var _0x464f86;
          var _0x415c07 = function _0x43f15a(_0x8104d, _0x4b018a) {
            _0x464f86 = _0x8104d.type + " " + _0x4b018a.id + ":" + _0x8104d.type;
            _0x5e73d3.trigger(_0x464f86, _0x4b018a);
          };
          _0x2e62e2.on("destroyed", _0x5e73d3.onDestroyed.bind(_0x5e73d3));
          _0x2e62e2.on("shown hidden rested dir plain", _0x415c07);
          _0x2e62e2.on("dir:up dir:right dir:down dir:left", _0x415c07);
          _0x2e62e2.on("plain:up plain:right plain:down plain:left", _0x415c07);
        };
        _0x5583cc.prototype.bindDocument = function () {
          var _0x1886ea = this;
          if (!_0x1886ea.binded) {
            _0x1886ea.bindEvt(document, "move").bindEvt(document, "end");
            _0x1886ea.binded = true;
          }
        };
        _0x5583cc.prototype.unbindDocument = function (_0x37d072) {
          var _0x276bd9 = this;
          if (!Object.keys(_0x276bd9.ids).length || _0x37d072 === true) {
            _0x276bd9.unbindEvt(document, "move").unbindEvt(document, "end");
            _0x276bd9.binded = false;
          }
        };
        _0x5583cc.prototype.getIdentifier = function (_0x340242) {
          var _0x56ab8f;
          if (!_0x340242) {
            _0x56ab8f = this.index;
          } else {
            _0x56ab8f = _0x340242.identifier === undefined ? _0x340242.pointerId : _0x340242.identifier;
            if (_0x56ab8f === undefined) {
              _0x56ab8f = this.latest || 0;
            }
          }
          if (this.ids[_0x56ab8f] === undefined) {
            this.ids[_0x56ab8f] = this.index;
            this.index += 1;
          }
          this.latest = _0x56ab8f;
          return this.ids[_0x56ab8f];
        };
        _0x5583cc.prototype.removeIdentifier = function (_0x23a1be) {
          var _0x2a102f = {};
          for (var _0x327735 in this.ids) {
            if (this.ids[_0x327735] === _0x23a1be) {
              _0x2a102f.id = _0x327735;
              _0x2a102f.identifier = this.ids[_0x327735];
              delete this.ids[_0x327735];
              break;
            }
          }
          return _0x2a102f;
        };
        _0x5583cc.prototype.onmove = function (_0x12d549) {
          var _0x2e6c64 = this;
          _0x2e6c64.onAny("move", _0x12d549);
          return false;
        };
        _0x5583cc.prototype.onend = function (_0x3bfc99) {
          var _0x367c2f = this;
          _0x367c2f.onAny("end", _0x3bfc99);
          return false;
        };
        _0x5583cc.prototype.oncancel = function (_0x24f307) {
          var _0x45cc98 = this;
          _0x45cc98.onAny("end", _0x24f307);
          return false;
        };
        _0x5583cc.prototype.onAny = function (_0x248f42, _0xc54387) {
          var _0x372f8a = this;
          var _0x304b3c;
          var _0x25c0d6 = "processOn" + _0x248f42.charAt(0).toUpperCase() + _0x248f42.slice(1);
          _0xc54387 = _0x4eb62d.prepareEvent(_0xc54387);
          var _0x5e2faa = function _0x3f636d(_0x40487f, _0x5030fb, _0x151252) {
            if (_0x151252.ids.indexOf(_0x5030fb) >= 0) {
              _0x151252[_0x25c0d6](_0x40487f);
              _0x40487f._found_ = true;
            }
          };
          var _0x55fdf0 = function _0x29c74b(_0x354916) {
            _0x304b3c = _0x372f8a.getIdentifier(_0x354916);
            _0x4eb62d.map(_0x372f8a.collections, _0x5e2faa.bind(null, _0x354916, _0x304b3c));
            if (!_0x354916._found_) {
              _0x372f8a.removeIdentifier(_0x304b3c);
            }
          };
          _0x4eb62d.map(_0xc54387, _0x55fdf0);
          return false;
        };
        _0x5583cc.prototype.destroy = function () {
          var _0x3d8e5a = this;
          _0x3d8e5a.unbindDocument(true);
          _0x3d8e5a.ids = {};
          _0x3d8e5a.index = 0;
          _0x3d8e5a.collections.forEach(function (_0x29b18d) {
            _0x29b18d.destroy();
          });
          _0x3d8e5a.off();
        };
        _0x5583cc.prototype.onDestroyed = function (_0x58f0b4, _0x5a9b70) {
          var _0x374208 = this;
          if (_0x374208.collections.indexOf(_0x5a9b70) < 0) {
            return false;
          }
          _0x374208.collections.splice(_0x374208.collections.indexOf(_0x5a9b70), 1);
        };
        var _0x4728ff = new _0x5583cc();
        return {
          create: function _0x2afb94(_0xd23a1d) {
            return _0x4728ff.create(_0xd23a1d);
          },
          factory: _0x4728ff
        };
      });
      var _0x19b659 = false;
      var _0x7613e6 = true;
      var _0xbeed37 = 2;
      var _0x3e0318 = null;
      var _0x3cf613 = 1;
      var _0xe56fab = {};
      var _0xd16db = 0;
      window.createLine = function (_0x5ce72d, _0x445c3e) {
        var _0x457346 = new PIXI.Graphics();
        var _0x3f56c7 = "#ff0000";
        if (bbs.laserColor && typeof bbs.laserColor === "string") {
          _0x3f56c7 = parseInt(bbs.laserColor.toString().replace("#", "0x"));
        }
        _0x457346.lineStyle(bbs.laser || 0.2, _0x3f56c7, 1);
        _0x457346.moveTo(0, 0);
        _0x457346.lineTo(0, 0);
        _0x457346.zIndex = 10001;
        _0x457346.name = "lineHS";
        _0x457346.alpha = 0;
        _0x457346.filters = [new PIXI.filters.BlurFilter(5)];
        _0x5ce72d.addChild(_0x457346);
      };
      window.movimentaLinha = function () {
        try {
          if (!_wwc._anApp.dh.ch.Nm) {
            return;
          }
          var _0x561ca8 = _wwc._anApp.og.af.ng.mf.getChildByName("lineHS");
          var _0x237219 = _wwc._anApp.dh.ch.Nm.oc;
          var _0x15d6a0 = _0x237219.position.x;
          var _0x21230a = _0x237219.position.y;
          var _0x39d984 = "#ff0000";
          if (bbs.laserColor && typeof bbs.laserColor === "string") {
            _0x39d984 = parseInt(bbs.laserColor.toString().replace("#", "0x"));
          }
          _0x561ca8.lineStyle(bbs.laser || 0.2, _0x39d984, 1);
          _0x561ca8.clear();
          _0x561ca8.lineStyle(bbs.laser || 0.1, _0x39d984, 1);
          _0x561ca8.moveTo(0, 0);
          _0x561ca8.lineTo(_0x15d6a0, _0x21230a);
          if (bbs.laserActive && _wwc.ismobile) {
            _0x561ca8.alpha = 0.3;
          }
          _0x561ca8.filters = [new PIXI.filters.BlurFilter(5)];
        } catch (_0x230962) {
          console.error(_0x230962);
        }
      };
      window.gerarCodigoUnico = function () {
        var _0x273fcf = bbs.userId || "";
        var _0x55d87a = _0x273fcf.match(/\d/g);
        var _0x17bcee = (_0x55d87a || []).reduce(function (_0xa44056, _0x580968) {
          return _0xa44056 + parseInt(_0x580968, 10);
        }, 0);
        var _0x131922 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        var _0x5466f6 = 5;
        var _0x2c9fd1 = "";
        var _0x22ee32 = "";
        for (var _0x2f5cf4 = 0; _0x2f5cf4 < _0x5466f6; _0x2f5cf4++) {
          var _0x3aaed = Math.floor(Math.random() * _0x131922.length);
          _0x2c9fd1 += _0x131922.charAt(_0x3aaed);
          var _0x2601a1 = Math.floor(Math.random() * _0x131922.length);
          _0x22ee32 += _0x131922.charAt(_0x2601a1);
        }
        return "ROOM" + _0x22ee32 + "_" + _0x17bcee + "_" + _0x2c9fd1;
      };
      var _0x4643f4 = {
        sao: "wss://nycsam01.wormworld.io",
        dal: "wss://nycsam01.wormworld.io",
        hil: "wss://nycsam01.wormworld.io",
        vin: "wss://nycsam01.wormworld.io",
        fra: "wss://fraceu01.wormworld.io",
        gra: "wss://fraceu01.wormworld.io",
        dxb: "wss://fraceu01.wormworld.io",
        sin: "wss://fraceu01.wormworld.io",
        tok: "wss://fraceu01.wormworld.io",
        local: "ws://localhost:5001"
      };
      var _0x2fd539 = {
        fra: [30055, 31770, 30106, 30339, 30106],
        gra: [32054, 31038],
        sin: [31764, 30165, 30703, 31211, 31026, 32677, 31211, 31203],
        tok: [30171, 31091],
        sao: [30208, 31770, 31533, 30208, 30327, 30786, 32609],
        hil: [30162, 30042, 32403, 30296],
        dal: [31091, 31230, 32584, 31750],
        dxb: [32703, 31975, 32650],
        vin: [32368]
      };
      var _0x185e3e = ["sao", "dal", "hil", "vin", "fra", "gra", "sin", "tok", "dxb"];
      var _0x4fa864 = {
        loaded: false,
        sprites: {},
        textures: {},
        resources: {}
      };
      $("#mm-params-nickname").attr("maxlength", _0x4935f5);
      var _0x304373 = {
        ref: [],
        hs: {},
        fxdo: function _0x45f023(_0x3041a2) {
          if (bbs.activeSounds2 && bbs.start) {
            if (!_0x304373[_0x3041a2].playing()) {
              _0x304373[_0x3041a2].play();
            }
          }
        },
        fxAux: function _0x3a0a43(_0x183604, _0x1f409d) {
          if (_0x1f409d === 1 && !_0x304373.fxStatus.top1) {
            _0x304373.fxStatus.top1 = true;
            _0x304373.fxdo("top1");
          }
          return _0x183604;
        },
        fxStatus: {
          top1: false
        }
      };
      window._wwcio = {
        message: null,
        obj: {},
        player: {},
        join: function _0x5a24cf() {},
        update: function _0x114ebb() {},
        leave: function _0x1a7bb2() {},
        leaderboardUpdated: function _0x2a4b5e(_0x3da673, _0x4a4ef3) {
          _0x1d9030(_0x3da673, _0x4a4ef3);
        },
        sendLocation: function _0x43669b() {},
        findFriend: function _0x12bffb() {},
        close: function _0x26231c() {},
        set: function _0xf8586d(_0x55bfa5) {
          return _0x55bfa5;
        },
        friend: null,
        myLocation: {},
        crown: null
      };
      window._wwc = {
        deadPositionMap: function _0x114709() {
          var _0x39616f = new PIXI.Text("X", _wwc.fontStyleMap());
          _0x39616f.position.x = _wwc.memory.positionOfDead.x;
          _0x39616f.position.y = _wwc.memory.positionOfDead.y;
          _wwc._anApp.og.af.ng.Tg.addChild(_0x39616f);
          var _0x1f91e8 = 0;
          var _0x99a45d = setInterval(function () {
            _0x1f91e8 = !_0x1f91e8;
            _0x39616f.alpha = _0x1f91e8;
          }, 500);
          var _0x2797d5 = setTimeout(function () {
            clearInterval(_0x99a45d);
            if (!_wwc._anApp.og.af.ng.Tg) {
              return;
            }
            _wwc._anApp.og.af.ng.Tg.removeChild(_0x39616f);
            _0x39616f.destroy();
          }, 60000);
          _wwc.removeDeadPositionMap = function () {
            clearInterval(_0x99a45d);
            clearTimeout(_0x2797d5);
            if (!_wwc._anApp.og.af.ng.Tg) {
              return;
            }
            _wwc._anApp.og.af.ng.Tg.removeChild(_0x39616f);
            if (_0x39616f && _0x39616f.destroy) {
              _0x39616f.destroy();
            }
          };
        },
        fontStyleMap: function _0x46f871(_0x5ee263) {
          return {
            fontFamily: "Arial",
            fontSize: "12px",
            fill: "red",
            align: "center",
            fontWeight: "bold"
          };
        },
        startGame: function _0x244ff6() {
          if (_wwc.memory.positionOfDead) {
            var _0x56615d = _wwc.deadPositionMap();
          }
        },
        stopGame: function _0x47e7f4() {
          var _0x5a08fc;
          var _0x3ba417;
          _wwcio.close();
          _wwcio.findFriendActived = false;
          if (!_wwcio.myLocation) {
            return;
          }
          _wwc.memory.positionOfDead = {
            x: (_0x5a08fc = _wwcio.myLocation) === null || _0x5a08fc === undefined || (_0x5a08fc = _0x5a08fc.position) === null || _0x5a08fc === undefined ? undefined : _0x5a08fc.x,
            y: (_0x3ba417 = _wwcio.myLocation) === null || _0x3ba417 === undefined || (_0x3ba417 = _0x3ba417.position) === null || _0x3ba417 === undefined ? undefined : _0x3ba417.y
          };
          if (_wwc.removeDeadPositionMap) {
            _wwc.removeDeadPositionMap();
          }
        },
        memory: {},
        mySkin: null,
        customPaths: {
          map: null
        },
        _ass_type: [],
        testSkinMod: function _0x514789(_0x58a579) {
          var _0x32c0c0 = typeof _0x58a579 === "string";
          _0x58a579 = parseInt(_0x58a579);
          if (_0x32c0c0 && isNaN(_0x58a579)) {
            return false;
          } else {
            return parseInt(_0x58a579) >= 399 && parseInt(_0x58a579) < 8999;
          }
        },
        testWear: function _0x3a2f29(_0x5bd708) {
          var _0x5a8487 = typeof _0x5bd708 === "string";
          _0x5bd708 = parseInt(_0x5bd708);
          if (_0x5a8487 && isNaN(_0x5bd708)) {
            return false;
          } else {
            return parseInt(_0x5bd708) >= 399 && parseInt(_0x5bd708) < 8999;
          }
        },
        isNumberValid: function _0xb04fc9(_0x4227a7) {
          return _0x4227a7 !== "" && _0x4227a7 !== null && _0x4227a7 !== undefined && !isNaN(_0x4227a7);
        },
        validInputWear: function _0x3eeda5(_0x480ad0) {
          var _0x11a893 = _wwc.testWear(_0x480ad0);
          var _0x1ced47 = typeof skinId === "string";
          if (!_0x11a893 && !_0x1ced47) {
            return _0x480ad0;
          }
          return 0;
        },
        validInput: function _0x4b47d8(_0x13fcb1) {
          var _0x560c6c = _wwc.testSkinMod(_0x13fcb1);
          var _0xa56fd2 = typeof _0x13fcb1 === "string";
          if (!_0x560c6c && !_0xa56fd2) {
            return _0x13fcb1;
          }
          try {
            var _0x5ba385 = $("#inputReplaceSkin").val();
            return encodeURI(_wwc.isNumberValid(_0x5ba385) ? _0x5ba385 : bbs.idReplaceSkin || 35);
          } catch (_0x10cba1) {
            return encodeURI(35);
          }
        },
        fullscreen: null,
        joystick: function _0x1e76d7(_0x272c8b) {
          var _0x19dbd9 = {
            checked: true,
            color: "red",
            mode: "dynamic",
            positionMode: "L",
            size: 100,
            pxy: 100
          };
          return _0x19dbd9;
        },
        load_con: function _0x27ee98() {
          $(".selecionar-sala-v2").click(function (_0x19adb0) {
            _0x19adb0.preventDefault();
            var _0x415060 = $(this).attr("data-con") || bbs.con;
            var _0x838ede = $(this).attr("data-type");
            w2c2020.addRoom($(this).attr("data-room"));
            _0x4bb95a.dh.Zp = function (_0x36a93e, _0x46fe58, _0x4fe141) {
              bbs.con = _0x4fe141 ? _0x36a93e : _0x415060 || _0x36a93e;
              _wwc.Zp(bbs.con, _0x46fe58);
            };
            _0x4bb95a.Pn();
          });
        },
        fnSaveGame: function _0x4239de() {
          var _0xaed8c5 = $("#saveGame");
          _0xaed8c5.prop("checked", bbs.saveGame);
          _0xaed8c5.change(function () {
            if (!this.checked) {
              var _0x3fea3b = confirm("PORTUGUES:\nAtenÃ§Ã£o: os registros seram apagados; Confirma?\n\nEnglish:\nAttention: the records will be deleted; Confirm?\n\nArabic:\nØªÙ†Ø¨ÙŠÙ‡: Ø³ÙŠØªÙ… Ø­Ø°Ù� Ø§Ù„Ø³Ø¬Ù„Ø§Øª Ø› ØªØ¤ÙƒØ¯ØŸ");
              $(this).prop("checked", !_0x3fea3b);
              if (!this.checked) {
                _wwc.fnSetCounts("zerar");
              }
            }
            bbs.saveGame = this.checked;
            w2c2020.hsTotal.alpha = this.checked ? 1 : 0;
            w2c2020.killTotal.alpha = this.checked ? 1 : 0;
            localStorage.setItem("wwcSaveGame", this.checked ? JSON.stringify(bbs) : null);
          });
        },
        fnSetCounts: function _0x5f040c(_0x48d2bb, _0x229cec) {
          var _0x1edade = function _0xa35afe(_0x45b21b, _0x4ce026, _0x2ffe50, _0x43a56a) {
            _wwc.setCountGame(_0x45b21b, _0x4ce026, _0x2ffe50, _0x43a56a);
          };
          if (_0x48d2bb === "count") {
            bbs.kill = (bbs.kill || 0) + (_0x229cec ? 0 : 1);
            bbs.headshot = (bbs.headshot || 0) + (_0x229cec ? 1 : 0);
            bbs.HOL = bbs.headshot > bbs.HOL ? bbs.headshot : bbs.HOL;
            bbs.tkill = bbs.tkill + (_0x229cec ? 0 : 1);
            bbs.theadshot = bbs.theadshot + (_0x229cec ? 1 : 0);
          }
          if (_0x48d2bb === "open") {
            bbs.kill = 0;
            bbs.headshot = 0;
            if (bbs.saveGame) {}
          }
          if (_0x48d2bb === "close") {
            if (bbs.saveGame) {
              bbs.died = (bbs.died || 0) + 1;
            } else {
              _wwc.fnSetCounts("zerar");
            }
          }
          if (_0x48d2bb === "zerar") {
            bbs.kill = 0;
            bbs.tkill = 0;
            bbs.headshot = 0;
            bbs.theadshot = 0;
            bbs.died = 0;
          }
          _0x1edade(bbs.kill, bbs.headshot, bbs.tkill, bbs.theadshot);
          localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));
        },
        setCountGame: function _0x194241(_0x16f09d, _0x1eb11d, _0x881240, _0x24e81f) {
          if (!bbs.saveGame) {
            w2c2020.hsTotal.alpha = 0;
            w2c2020.killTotal.alpha = 0;
          }
          w2c2020.hs.text = _0x1eb11d;
          w2c2020.hsTotal.text = _0x24e81f;
          w2c2020.kill.text = _0x16f09d;
          w2c2020.killTotal.text = _0x881240;
        },
        ismobile: _0x26a266(),
        Zp: undefined
      };
      window.bbs = {
    favoriteSkins: [],
    skinr: {},
    sg: [],
    s_l: "https://wormup.in",
    pm: {},
    j: null,
    pk: 0,
    pk0: "",
    pk1: "",
    pk2: "",
    pk3: "",
    pk4: "",
    pk5: "",
    pk6: "",
    z: 1,
    c_v: 222,
    c_1: "UP",
    c_2: "TeamUP",
    c_3: "wormup",
    c_4: "wormate.io",
    c_5: "please don't copy my code",
    d_1: "VlZBPQ==",
    d_2: "VkdWaGJWVlE=",
    d_3: "ZDI5eWJYVnc=",
    d_4: "VjI5eWJXRjBaUzVwYnc9PQ==",
    d_5: "VUd4bFlYTmxJR1J2YmlkMElHTnZjSGtnYlhrZ1kyOWtaUT09",
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: "",
    g: 36,
    smoothCamera: 0.5,
    eat_animation: 0.0025,
    PortionSize: localStorage.PotenciadorSize || 1,
    PortionAura: localStorage.PotenciadorAura || 1,
    PortionTransparent: 0.8,
    FoodTransparent: 0.3,
    FoodShadow: localStorage.ComidaShadow || 1,
    FoodSize: localStorage.ComidaSize || 1,
    version: 0,
    headshot: 0,
    kill: 0,
    hudSettings: {
      mode: 0,
      wi: 0.5
    },
    bannedWordsEnabled: false,
    bannedWords: [],
    theadshot: 0,
    tkill: 0,
    died: 0,
    start: 0,
    HOL: 0,
    flx: 0,
    vp: false,
    tk: null,
    country: null,
    finish: 0,
    saveGame: false,
    mobile: false,
    joystick: null,
        configJoystick: {
          buttons: {
            respawn: {
              label: "RESPAWN",
              labelAbbreviation: "RP",
              active: false,
              action: "mbf.mbfass6()"
            },
            lobby: {
              label: "LOBBY",
              labelAbbreviation: "L",
              active: true,
              action: "mbf.mbfass5()"
            },
            rotate: {
              label: "ROTATE",
              labelAbbreviation: "A",
              active: true,
              action: "mbf.mbfass4()"
            },
            snail: {
              label: "SNAIL",
              labelAbbreviation: "B",
              active: true,
              action: "mbf.mbfass3()"
            },
            search: {
              label: "SEARCH",
              labelAbbreviation: "SE",
              active: false,
              action: "mbf.mbfass0()"
            },
            swap: {
              label: "SWAP",
              labelAbbreviation: "SW",
              active: false,
              action: "mbf.mbf_cambiar()"
            },
            zoomplus: {
              label: "Z+",
              labelAbbreviation: "+",
              active: true,
              action: "mbf.mbfass1()"
            },
            zoomminus: {
              label: "Z-",
              labelAbbreviation: "-",
              active: true,
              action: "mbf.mbfass2()"
            },
            zoom: {
              label: "x1",
              labelAbbreviation: "x1",
              active: true,
              action: "mbf.mbfass7()"
            }
          },
          typeZoom: ["btn", "range"],
          typeCurrent: "btn",
          typeName: ["all", "abb"],
          typeCurrentName: "abb"
        },
        customJoystick: null,
        display: {
          customClock: null,
          clock: {
            x: 60,
            y: 60
          },
          top: {
            x: 225,
            y: 1
          },
          default: false,
          custom: false,
          m: {
            x: 60,
            y: 60
          },
          r: {
            x: 225,
            y: 1
          },
          ms: false
        },
        PropertyManager: {},
        acs: true,
        lr: false,
        showTophs: true,
        showRechs: true,
        con: null,
        params: "",
        arrow: true,
        activeBadLang: false,
        activeSounds2: true,
        activeZoom: false,
        activeZoomMobile: false,
        top10Show: [],
        background: null,
        backgroundIsCustom: false,
        nickname: null,
        code: null,
        configZoom: {
          limitDown: 0.25,
          step: 0.25,
          closeUp: 0.5,
          closeDown: 1
        },
        laserActive: false,
        laserColor: 16711680,
        laser: 0.1,
        displayFriends: {
          x: -10,
          y: 315,
          rotation: 0
        },
        enemyNameColor: null,
        enemyNameFontSize: null,
        novidadewormworld: 0
      };
      var _0x5b137a = localStorage.getItem("wwc_version");
      var _0x56fae9 = localStorage.getItem("wwcSaveGame");
      var _0x41686d = localStorage.getItem("wwc_config");
      _0x56fae9 &&= JSON.parse(_0x56fae9);
      for (var _0x577c30 in _0x56fae9) {
        switch (_0x577c30) {
          case "configJoystick":
            if (!_0x56fae9[_0x577c30]) {
              break;
            }
            bbs[_0x577c30] = _0x56fae9[_0x577c30];
            for (var _0x1ab874 in _0x56fae9[_0x577c30].buttons) {
              bbs[_0x577c30].buttons[_0x1ab874] = _0x56fae9[_0x577c30].buttons[_0x1ab874];
            }
            for (var _0x2f2257 in _0x56fae9[_0x577c30]) {
              bbs[_0x577c30][_0x2f2257] = _0x56fae9[_0x577c30][_0x2f2257];
            }
            break;
          case "joystick":
            bbs[_0x577c30] = _wwc.joystick();
            for (var _0x5d2847 in _0x56fae9[_0x577c30]) {
              bbs[_0x577c30][_0x5d2847] = _0x56fae9[_0x577c30][_0x5d2847];
            }
            break;
          case "display":
            for (var _0x118545 in _0x56fae9[_0x577c30]) {
              bbs[_0x577c30][_0x118545] = _0x56fae9[_0x577c30][_0x118545];
            }
            break;
          default:
            bbs[_0x577c30] = _0x56fae9[_0x577c30];
            break;
        }
      }
      if (!bbs.version || bbs.version !== _0xbeed37) {
        bbs.version = _0xbeed37;
        bbs.joystick = _wwc.joystick();
      }
      bbs.loading = true;
      window.respawnFn = function () {
        _0x4bb95a.dh.Cn = 0;
        if (_0x4bb95a.dh.mq) {
          _0x4bb95a.dh.mq.close();
        }
        _0x4bb95a.dh.mq = null;
        _0x4bb95a.dh.Zp = function (_0x2244a4, _0x22e6d3) {
          _wwc.Zp(bbs.con || _0x2244a4, _0x22e6d3);
        };
        _0x4bb95a.Pn();
      };
      window.lobbyFn = function () {
        _0x4bb95a.dh.Cn = 0;
        if (_0x4bb95a.dh.mq) {
          _0x4bb95a.dh.mq.close();
        }
        _0x4bb95a.dh.mq = null;
        _0x4bb95a.dh.Np();
        _0x447ea6();
      };
      $("<button type=\"button\" id=\"mm-wwc\" style=\"float: right;line-height: 48px;width: 61px;background: #156ab3;color: #FFF;font-weight: bold;margin-right: 5px;border-radius: 7px; cursor: pointer;\">Set</button>").insertAfter("#mm-store");
      $(".store-view-cont").append("<div id=\"idReplaceSkin\"></div>");
      $(".wear-view-cont").append("<div id=\"idWearViewCont\"></div>");
      var _0x3fc7ec = "display:none;position:relative;background:#FFF;padding:15px;max-width:680px;margin:10px auto;";
      if (_wwc.ismobile) {
        _0x3fc7ec = "display:none;position:relative;\n                  background:#FFF;padding:20px;\n                  width:calc(100vw - var(--scrollbar-width));\n                  height:100vh;";
      }
      $("body").append(`<div id="wwc-set-view" class="base-popup-view" style="${_0x3fc7ec}"></div>`);
      var _0x521647 = "ass";
      window.mbf = {};
      var _0x38f70c = function _0x35a3af(_0x2b61da) {
        if (bbs.shiftKey) {
          return;
        }
        var _0x364df0 = 30;
        var _0x6911e9 = 0;
        var _0x9c5a6f = false;
        function _0x1c39fe() {
          var _0x5a86ec = parseFloat(_0x4bb95a.og.af.Bn);
          _0x5a86ec = (_0x5a86ec - 0.06) % (Math.PI * 2);
          if (_0x5a86ec < 0) {
            _0x5a86ec += Math.PI * 2;
          }
          _0x4bb95a.og.af.Bn = _0x5a86ec.toFixed(2);
        }
        function _0x3899c2(_0x3bbeef) {
          _0x19b659 = setInterval(function () {
            if (_0x3bbeef === 1) {
              _0x6911e9 = _0x9c5a6f ? _0x6911e9 - 1 : _0x6911e9 + 1;
              if (_0x6911e9 % 80 === 0 && !_0x9c5a6f) {
                _0x364df0 = _0x364df0 + 18;
                clearInterval(_0x19b659);
                _0x3899c2(1);
              }
            }
            _0x1c39fe();
          }, _0x364df0);
        }
        if ((_0x2b61da == 7 || _0x2b61da.key == "7") && _0x19b659 === null) {
          _0x4bb95a.og.af.ng.Eb.removeEventListener("pointermove", mbf.onmovepoint, true);
          _0x3899c2(1);
          return;
        }
        if ((_0x2b61da == 8 || _0x2b61da.key == "8") && _0x19b659 === null) {
          _0x4bb95a.og.af.ng.Eb.removeEventListener("pointermove", mbf.onmovepoint, true);
          _0x3899c2(2);
          return;
        }
        if (_0x19b659 !== null) {
          clearInterval(_0x19b659);
          _0x4bb95a.og.af.ng.Eb.addEventListener("pointermove", mbf.onmovepoint, true);
          _0x19b659 = null;
        }
      };
      mbf.mbfass0 = function () {
        _wwcio.findFriend();
      };
      mbf.mbfass1 = function () {
        var _0xff59e0 = _0x4bb95a.Ij.Rk.customer ? 100 : 100;
        if (_0x3cf613 <= _0xff59e0) {
          _0x3cf613 += _0x3cf613 > 15 ? 1 : bbs.configZoom?.step || 0.25;
        }
        _0x3cf613 = Math.min(_0x3cf613, _0xff59e0);
        w2c2020.zoom.text = "x" + _0x3cf613.toFixed(2);
      };
      mbf.mbfass2 = function () {
        var _0x4bd0ec = _0x3cf613 - (_0x3cf613 > 15 ? 1 : bbs.configZoom?.step);
        _0x3cf613 = _0x4bd0ec < bbs.configZoom?.limitDown ? bbs.configZoom?.step : _0x4bd0ec;
        w2c2020.zoom.text = "x" + _0x3cf613.toFixed(2);
      };
      mbf.mbfass3 = function () {
        if (mbf.mbf_rotate) {
          _0x38f70c(8);
          $("#mbf_rotate").css("background-color", "#000");
        } else {
          _0x38f70c(_0x19b659 ? 0 : 8);
        }
        if (_0x19b659) {
          mbf.mbf_snail = true;
          $("#mbf_snail").css("background-color", "#156ab3");
        } else {
          mbf.mbf_snail = false;
          $("#mbf_snail").css("background-color", "#000");
        }
      };
      mbf.mbfass4 = function () {
        if (mbf.mbf_snail) {
          $("#mbf_snail").css("background-color", "#000");
          _0x38f70c(8);
        } else {
          _0x38f70c(_0x19b659 ? 0 : 8);
        }
        if (_0x19b659) {
          mbf.mbf_rotate = true;
          $("#mbf_rotate").css("background-color", "#156ab3");
        } else {
          mbf.mbf_rotate = false;
          $("#mbf_rotate").css("background-color", "#000");
        }
      };
      mbf.mbfass5 = function () {
        window.location.reload();
      };
      mbf.mbfass6 = function () {
        respawnFn();
      };
      mbf.mbfass7 = function () {
        _0x3cf613 = 1;
        w2c2020.zoom.text = "x1";
      };
      mbf.mbfass9 = function (_0x5566c1) {
        var _0x2bf891 = _0x4bb95a.Ij.Rk.customer ? 100 : 2;
        if (_0x5566c1.value <= _0x2bf891) {
          _0x3cf613 = _0x5566c1.value;
          w2c2020.zoom.text = "x" + _0x5566c1.value;
        }
      };
      mbf.mbf_cambiar_origin = null;
      mbf.mbf_cambiar_current = 0;
      mbf.mbf_cambiar_seq = 0;
      mbf.mbf_cambiar_add = function (_0xa446c7, _0x522b9b) {
        if (!bbs.cambiar) {
          bbs.cambiar = {};
        }
        if (bbs.cambiar[_0xa446c7]) {
          alert("Skin already exists in the list of skins to be");
          return;
        }
        bbs.cambiar[_0xa446c7] = _0x522b9b || "Skin " + _0xa446c7;
        alert("Skin added to the list of skins to be");
        localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));
        console.log(bbs.cambiar);
      };
      mbf.mbf_cambiar = function () {
        if (mbf.mbf_cambiar_origin === null) {
          mbf.mbf_cambiar_origin = _wwc._anApp.dh.ch.Eh.Hh;
        }
        var _0x1d3566 = Object.keys(bbs.cambiar);
        if (mbf.mbf_cambiar_seq >= _0x1d3566.length) {
          mbf.mbf_cambiar_seq = 0;
        }
        for (var _0x740d6f = 0; _0x740d6f < _0x1d3566.length; _0x740d6f++) {
          mbf.mbf_cambiar_current = _0x1d3566[_0x740d6f];
          if (_0x740d6f === mbf.mbf_cambiar_seq) {
            mbf.mbf_cambiar_current = _0x1d3566[_0x740d6f];
            break;
          }
        }
        mbf.mbf_cambiar_seq = mbf.mbf_cambiar_seq + 1;
        _wwc._anApp.dh.ch.Eh.Hh = mbf.mbf_cambiar_current;
        _wwc._anApp.dh.ch.Sm();
      };
      if (bbs.activeZoom) {
        window.onwheel = function (_0x24b794) {
          if (_0x24b794.deltaY < 0) {
            mbf.mbfass1();
          } else {
            mbf.mbfass2();
          }
        };
      }
      var _0x6ca3ec = $("#idReplaceSkin");
      var _0x10dd03 = function () {
        var _0x3de895 = _0x1e9522(_0xeb30a().m(function _0x1433fc(_0x507ba9, _0x20172e) {
          return _0xeb30a().w(function (_0xf324ab) {
            while (1) {
              switch (_0xf324ab.n) {
                case 0:
                  if (!_0x20172e) {
                    _0xf324ab.n = 1;
                    break;
                  }
                  return _0xf324ab.a(2);
                case 1:
                  if (!_0x507ba9) {
                    _0x507ba9 = _0x4bb95a.Ij.Rk;
                  }
                  console.log(_0x507ba9);
                  bbs.userId = _0x507ba9.userId;
                  _0xf324ab.n = 2;
                  return fetch(URLSERV_WORMWORLD + "/load-page", {
                    headers: {
                      "Content-Type": "application/json",
                      "x-access-token": _0x507ba9.tk,
                      "x-uid": wwc_keycode
                    },
                    method: "POST",
                    body: JSON.stringify(_0x507ba9)
                  }).then(function (_0x174323) {
                    _0x174323.text().then(function (_0x5db3b5) {
                      $(".description-text").html(_0x5db3b5);
                      if (_0x507ba9.type === "error") {
                        $(".description-text").html(_0x507ba9.msg);
                      }
                    });
                  }).catch(function () {
                    $(".description-text").html("Problema de conexão.");
                  });
                case 2:
                  _0xf324ab.n = 3;
                  return fetch(URLSERV_WORMWORLD + "/set-worm-world", {
                    headers: {
                      "Content-Type": "application/json",
                      "x-access-token": _0x507ba9.tk,
                      "x-uid": wwc_keycode
                    },
                    method: "POST",
                    body: JSON.stringify({
                      userId: bbs.userId
                    })
                  }).then(function (_0x29212e) {
                    _0x29212e.text().then(function (_0x51d447) {
                      $("#wwc-set-view").html(_0x51d447);
                      $("#mm-wwc").click(function (_0x359f0d) {
                        $("#wwc-set-view").css("display", "block");
                      });
                      _wwc.load_con();
                      _wwc.fnSaveGame();
                      _wwc.fnSetCounts("start");
                      $("#backgroundArena").change(function () {
                        var _0x2b967c = $(this).val();
                        bbs.background = _0x2b967c;
                        bbs.backgroundUri = null;
                        _0x4bb95a.xe._g = _0x3ca652.bgg(_0x2b967c);
                        localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));
                        _wwc._anApp.og.af.ng.Lg.$g(_0x4bb95a.xe._g);
                        alert("Background changed!");
                      });
                      if (bbs.background !== undefined && bbs.background !== null) {
                        $("#backgroundArena").val(bbs.background);
                        var _0x58da6f = parseInt(bbs.background, 10);
                        _0x4bb95a.xe._g = _0x3ca652.bgg(_0x58da6f);
                        _wwc._anApp.og.af.ng.Lg.$g(_0x4bb95a.xe._g);
                      }
                      var _0x12ce7d = _wwc.isNumberValid(bbs.idReplaceSkin);
                      if (_0x12ce7d) {
                        $("#inputReplaceSkin").val(bbs.idReplaceSkin);
                      } else {
                        var _0x596b88 = $("#inputReplaceSkin").val();
                        _0x12ce7d = _wwc.isNumberValid(_0x596b88);
                        bbs.idReplaceSkin = _0x12ce7d ? _0x596b88 : 33;
                      }
                      if (!bbs.joystick) {
                        $("#joystick_checked").val(true);
                        $("#joystick_color").val("red");
                        $("#joystick_mode").val("dynamic");
                        $("#joystick_position").val("L");
                        $("#joystick_size").val(100);
                        $("#joystick_pxy").val(100);
                      } else {
                        $("#joystick_checked").prop("checked", bbs.joystick.checked);
                        $("#joystick_color").val(bbs.joystick.color);
                        $("#joystick_mode").val(bbs.joystick.mode);
                        $("#joystick_position").val(bbs.joystick.positionMode);
                        $("#joystick_size").val(bbs.joystick.size);
                        $("#joystick_pxy").val(bbs.joystick.pxy);
                      }
                    });
                  });
                case 3:
                  return _0xf324ab.a(2);
              }
            }
          }, _0x1433fc);
        }));
        return function _0x586adc(_0x2399f9, _0xfec416) {
          return _0x3de895.apply(this, arguments);
        };
      }();
      var _0xc6a1cd = function _0x46cab7(_0x31a01a) {
        if (bbs.PropertyManager) {
          if (bbs.PropertyManager.lj) {
            _0x31a01a.skinId = bbs.PropertyManager.lj;
          }
          if (bbs.PropertyManager.mj) {
            _0x31a01a.eyesId = bbs.PropertyManager.mj;
          }
          if (bbs.PropertyManager.nj) {
            _0x31a01a.mouthId = bbs.PropertyManager.nj;
          }
          if (bbs.PropertyManager.pj) {
            _0x31a01a.glassesId = bbs.PropertyManager.pj;
          }
          if (bbs.PropertyManager.oj) {
            _0x31a01a.hatId = bbs.PropertyManager.oj;
          }
        }
      };
      var _0x404c22 = function () {
        var _0xf083a1 = _0x1e9522(_0xeb30a().m(function _0x5adb71(_0x9d29c, _0x2ce8e3) {
          var _0xa62504;
          var _0x4699f0;
          var _0x251973;
          var _0x3cbbe5;
          return _0xeb30a().w(function (_0x5a01ea) {
            while (1) {
              switch (_0x5a01ea.n) {
                case 0:
                  $("#mm-params-nickname").prop("maxlength", _0x4935f5);
                  _0x2ce8e3(_0x9d29c);
                  _0x10dd03(_0x9d29c);
                  _wwc._anApp = _0x4bb95a;
                  _wwc._tx = function (_0x158c3d) {
                    Object.keys(_0x158c3d).forEach(function (_0x52443b) {
                      if (_0x158c3d[_0x52443b].Yi) {
                        _0x158c3d[_0x52443b].fj.nh.Cc.xc.width = _0x158c3d[_0x52443b].fj.nh.Cc.xc.width + 2;
                        _0x158c3d[_0x52443b].fj.nh.Cc.xc.height = _0x158c3d[_0x52443b].fj.nh.Cc.xc.height + 2;
                      }
                    });
                  };
                  _wwc.Zp = _0x4bb95a.dh.Zp;
                  _0x4bb95a.dh.Dq = function (_0xe0046d, _0x3f6998, _0x2fb4b7 = 0) {
                    try {
                      fetch(URLSERV_WORMWORLD + "/game-connect", {
                        headers: {
                          "Content-Type": "application/json",
                          "x-access-token": _0x4bb95a.Ij.Rk.tk,
                          "x-uid": wwc_keycode
                        },
                        method: "POST",
                        body: JSON.stringify({
                          nickname: bbs.nickname,
                          code: bbs.code,
                          teamRoom: _wwcio.player.teamRoom
                        })
                      }).then(function () {
                        var _0x3ea475 = _0x1e9522(_0xeb30a().m(function _0x8933f9(_0x582126) {
                          var _0x17d6d6;
                          var _0x444368;
                          return _0xeb30a().w(function (_0x2bc6d1) {
                            while (1) {
                              switch (_0x2bc6d1.n) {
                                case 0:
                                  _0x2bc6d1.n = 1;
                                  return _0x582126.json();
                                case 1:
                                  _0x17d6d6 = _0x2bc6d1.v;
                                  _0x444368 = _0x4bb95a.dh;
                                  if (!_0x17d6d6.connected) {
                                    _0x2bc6d1.n = 2;
                                    break;
                                  }
                                  alert("Update Page\n\nWarning:We detected an invalid action. This may have occurred because your access token was updated, but the game was not properly restarted. Please refresh the page to continue playing safely. If the problem persists, make sure you are not using external modifications or unauthorized extensions.");
                                  _0x444368.Cq();
                                  return _0x2bc6d1.a(2);
                                case 2:
                                  _0x444368.mq = new WebSocket(_0xe0046d);
                                  _0x444368.mq.binaryType = "arraybuffer";
                                  _0x3cf613 = _wwc.ismobile ? 1.25 : 1;
                                  bbs.start = new Date();
                                  bbs.con = _0xe0046d;
                                  _0xe56fab = {};
                                  _0x3ca652.setIntervalRun = setInterval(function () {
                                    _0x3ca652.ps3();
                                  }, 20);
                                  _0x444368.mq.onopen = function () {
                                    _0x4d11e3();
                                    _wwc.fnSetCounts("open");
                                    _0x3f6998();
                                  };
                                  _0x444368.mq.onclose = function () {
                                    _0x447ea6();
                                    _wwc.fnSetCounts("close");
                                    _wwc.stopGame();
                                    clearInterval(_0x3ca652.setIntervalRun);
                                    _0x3ca652.loadBg = false;
                                    bbs.start = 0;
                                  };
                                  _0x444368.mq.onerror = function (_0x3d8693) {
                                    _0x447ea6();
                                    _wwc.fnSetCounts("close");
                                    _wwc.stopGame();
                                    clearInterval(_0x3ca652.setIntervalRun);
                                    _0x3ca652.loadBg = false;
                                    bbs.start = 0;
                                    if (_0x2fb4b7 > 4) {
                                      _0x444368.Cq();
                                    } else {
                                      setTimeout(function () {
                                        _0x2fb4b7++;
                                        console.log("Reconnect server");
                                        _0x4bb95a.dh.Dq(bbs.con, _0x3f6998, _0x2fb4b7);
                                      }, 2000);
                                    }
                                  };
                                  _0x444368.mq.onmessage = function (_0x43369b) {
                                    _0x444368.Kp.Ph(_0x43369b.data);
                                  };
                                case 3:
                                  return _0x2bc6d1.a(2);
                              }
                            }
                          }, _0x8933f9);
                        }));
                        return function (_0x725d24) {
                          return _0x3ea475.apply(this, arguments);
                        };
                      }());
                    } catch (_0x4c0bac) {
                      console.log(_0x4c0bac);
                      i.Cq();
                    }
                  };
                  _0x4bb95a.dh.Kp.Yh = function (_0x261b05, _0x34539d) {
                    _0x447ea6();
                    this.dh.Oi();
                  };
                  _0x4bb95a.og.af.ng.Ug.Uf = function (_0x33e63e) {
                    var _0x35dd02 = function () {
                      return _0x3ca652.$F.M(_0x3ca652.POGL.Sprite, function () {
                        _0x3ca652.POGL.Sprite.call(this);
                        this.sh = 0;
                      });
                    }();
                    for (var _0x1c1c2c in this.rh) {
                      if (_0x33e63e[_0x1c1c2c] == null || !_0x33e63e[_0x1c1c2c].hd) {
                        _0x3ca652.$F.U(this.rh[_0x1c1c2c]);
                        delete this.rh[_0x1c1c2c];
                      }
                    }
                    var _0x1a2b48 = 0;
                    var _0x2a868b = 1;
                    if (bbs.display.custom) {
                      _0x2a868b = window.innerWidth;
                    }
                    for (var _0x37b4d3 in _0x33e63e) {
                      var _0x16a84d = _0x33e63e[_0x37b4d3];
                      if (_0x16a84d.hd) {
                        var _0x35e429 = this.rh[_0x37b4d3];
                        if (!_0x35e429) {
                          var _0x439f71 = _0x4bb95a.Lc.Ub().pb(_0x16a84d.nd).ub;
                          _0x35e429 = new _0x35dd02();
                          _0x35e429.texture = _0x439f71.Ea();
                          _0x35e429.width = 40;
                          _0x35e429.height = 40;
                          this.rh[_0x37b4d3] = _0x35e429;
                          this.addChild(_0x35e429);
                        }
                        w2c2020.setPtc(this, _0x37b4d3, _0x16a84d.od);
                        _0x35e429.sh = _0x16a84d.od;
                        _0x35e429.position.x = _0x1a2b48 + (bbs.display.custom ? bbs.display.clock.x * _0x2a868b : 0);
                        _0x35e429.position.y = bbs.display.custom ? bbs.display.clock.y : _0x35e429.position.y;
                        _0x1a2b48 += 40;
                      }
                    }
                  };
                  if (!bbs.display.customClock) {
                    _0x4bb95a.og.af.ng.Tg.addChild(w2c2020.clock);
                  }
                  _0x4bb95a.og.af.ng.Tg.addChild(w2c2020.containerCountInfo);
                  _0x4bb95a.og.af.ng.Tg.addChild(w2c2020.containerHstop);
                  w2c2020.containerHstop.alpha = bbs.showTophs ? 1 : 0;
                  _0x4bb95a.og.af.ng.Tg.addChild(w2c2020.containerHsRec);
                  w2c2020.containerHsRec.alpha = bbs.showRechs ? 1 : 0;
                  _0x4bb95a.og.af.ng.Tg.addChild(w2c2020.labelRoom);
                  w2c2020.ptc = {};
                  _0xa62504 = [40, 40, 40, 120, 40, 20, 40];
                  for (_0x4699f0 = 0; _0x4699f0 < _0xa62504.length; _0x4699f0++) {
                    _0x251973 = "clock_ad" + _0x4699f0;
                    w2c2020.ptc[_0x251973] = new PIXI.Text(_0xa62504[_0x4699f0], w2c2020.fontStyle["tfc" + _0x4699f0]);
                    w2c2020.ptc[_0x251973].y = 61;
                  }
                  w2c2020.setPtc = function (_0x16a0d4, _0x45b59f, _0x1dc1ed) {
                    var _0x26e47e = _0xa62504[_0x45b59f] - parseInt((_0x1dc1ed == 0.99 ? 1 : _0x1dc1ed) * _0xa62504[_0x45b59f] / 1);
                    var _0x39c677 = "clock_ad" + _0x45b59f;
                    _0x16a0d4.rh[_0x45b59f].addChild(w2c2020.ptc[_0x39c677]);
                    if (w2c2020.ptc[_0x39c677]) {
                      w2c2020.ptc[_0x39c677].x = _0x26e47e >= 100 ? 11 : _0x26e47e >= 10 ? 18 : 26;
                      w2c2020.ptc[_0x39c677].text = _0x26e47e;
                    }
                  };
                  _0x3cbbe5 = _0x4bb95a.og.af.ng.Eb;
                  mbf.onmovepoint = function (_0x1f3e31) {
                    if (_0x1f3e31.pointerType === "touch" && !_0x1f3e31.isPrimary) {
                      return;
                    }
                    if (_0x1f3e31.clientX !== undefined) {
                      _0x4bb95a.og.af.Bn = Math.atan2(_0x1f3e31.clientY - _0x3cbbe5.offsetHeight * 0.5, _0x1f3e31.clientX - _0x3cbbe5.offsetWidth * 0.5);
                    } else {
                      _0x4bb95a.og.af.Bn = Math.atan2(_0x1f3e31.pageY - _0x3cbbe5.offsetHeight * 0.5, _0x1f3e31.pageX - _0x3cbbe5.offsetWidth * 0.5);
                    }
                  };
                  mbf.onRun = function (_0x20e981) {
                    if (_0x20e981 && _0x20e981.pointerType === "touch") {
                      return;
                    }
                    _0x4bb95a.og.af.An = true;
                  };
                  mbf.onStop = function (_0x2bd11f) {
                    if (_0x2bd11f && _0x2bd11f.pointerType === "touch") {
                      return;
                    }
                    _0x4bb95a.og.af.An = false;
                  };
                  _0x3cbbe5.addEventListener("pointermove", mbf.onmovepoint, true);
                  _0x3cbbe5.addEventListener("pointerdown", mbf.onRun, true);
                  _0x3cbbe5.addEventListener("pointerup", mbf.onStop, true);
                  if (_wwc.ismobile) {
                    _0x3cbbe5.addEventListener("touchstart", function (_0x4c4a9f) {
                      if (_0x4c4a9f = _0x4c4a9f || window.event) {
                        _0x4bb95a.og.af.An = _0x4c4a9f.touches.length >= 2;
                      }
                      _0x4c4a9f.preventDefault();
                    }, true);
                    _0x3cbbe5.addEventListener("touchend", function (_0x245fd0) {
                      if (_0x245fd0 = _0x245fd0 || window.event) {
                        _0x4bb95a.og.af.An = _0x245fd0.touches.length >= 2;
                      }
                    }, true);
                  }
                case 1:
                  return _0x5a01ea.a(2);
              }
            }
          }, _0x5adb71);
        }));
        return function _0x2d3312(_0x507ce8, _0xa3210a) {
          return _0xf083a1.apply(this, arguments);
        };
      }();
      function _0x35a5e8() {
        var _0x42a614 = document.createElement("div");
        _0x42a614.style.position = "fixed";
        _0x42a614.style.top = "0";
        _0x42a614.style.height = "100%";
        _0x42a614.style.width = "100%";
        _0x42a614.style.zIndex = "1000";
        _0x42a614.id = "zone_joystick";
        document.body.appendChild(_0x42a614);
      }
      function _0x22563a() {
        var _0x1c73c1 = document.getElementById("zone_joystick");
        if (_0x1c73c1) {
          _0x1c73c1.remove();
        }
      }
      var _0x447ea6 = function _0x21e4e3() {
        if (_0x3e0318) {
          $("#wwc-mobile-box").remove();
          $("#wwc-mobile-box-slider").remove();
          _0x3e0318.destroy();
        }
        _0x22563a();
      };
      var _0x4d11e3 = function _0x171fc3() {
        try {
          var _0x1e2a9c = function _0x1f6983() {
            _0x3e0318.on("start end", function (_0x225560, _0x2a6050) {}).on("move", function (_0x3b90b9, _0x2a6b38) {
              var _0x42cb4c = _0x2a6b38.angle.radian <= Math.PI ? _0x2a6b38.angle.radian * -1 : Math.PI - (_0x2a6b38.angle.radian - Math.PI);
              _0x4bb95a.og.af.Bn = _0x42cb4c;
            });
          };
          var _0x1ae4b6 = function _0x3ffa6b() {
            if (_0x3e0318) {
              _0x3e0318.destroy();
            }
            var _0x24eefa = _0x66b726({}, bbs.joystick);
            var _0x3db284 = {};
            if (bbs.customJoystick) {
              _0x35a5e8();
              var _0x50ce92 = _0x2bb08e(bbs.customJoystick.buttons);
              var _0x2a1db7;
              try {
                for (_0x50ce92.s(); !(_0x2a1db7 = _0x50ce92.n()).done;) {
                  var _0x187443 = _0x2a1db7.value;
                  var _0x3fc4d6 = document.createElement("div");
                  if (_0x187443.svg) {
                    _0x3fc4d6.innerHTML = _0x187443.svg;
                  } else {
                    _0x3fc4d6.style.color = _0x187443.color || "#FFF";
                    _0x3fc4d6.style.backgroundColor = _0x187443.backgroundColor || "#000";
                    _0x3fc4d6.style.borderRadius = "10px";
                    _0x3fc4d6.style.textAlign = "center";
                    _0x3fc4d6.style.fontWeight = "bold";
                    _0x3fc4d6.style.padding = "5px";
                    _0x3fc4d6.style.border = "1px solid #f00";
                    _0x3fc4d6.style.fontSize = _0x187443.size || "25px";
                    _0x3fc4d6.innerHTML = _0x187443.value;
                  }
                  _0x3fc4d6.style.position = "absolute";
                  _0x3fc4d6.style.top = _0x187443.top;
                  _0x3fc4d6.style.left = _0x187443.left;
                  _0x3fc4d6.style.display = _0x187443.display;
                  _0x3fc4d6.style.cursor = "pointer";
                  _0x3fc4d6.id = "cbjt_" + _0x187443.value;
                  _0x3fc4d6.dataset.size = _0x187443.size;
                  _0x3fc4d6.dataset.color = _0x187443.color || "#FFF";
                  _0x3fc4d6.style.opacity = 0.6;
                  document.getElementById("zone_joystick").appendChild(_0x3fc4d6);
                  if (_0x187443.display !== "none") {
                    if (_0x187443.value === "ZoomIn") {
                      _0x3fc4d6.addEventListener("click", function (_0x5b7ecc) {
                        mbf.mbfass2();
                      });
                    }
                    if (_0x187443.value === "ZoomOut") {
                      _0x3fc4d6.addEventListener("click", function (_0x4a6221) {
                        mbf.mbfass1();
                      });
                    }
                    if (_0x187443.value === "Accelerator") {
                      _0x3fc4d6.addEventListener("pointerdown", function (_0x137e35) {
                        mbf.onRun();
                      });
                      _0x3fc4d6.addEventListener("pointerup", function (_0x5de9ae) {
                        mbf.onStop();
                      });
                    }
                    if (_0x187443.value === "Respawn") {
                      _0x3fc4d6.addEventListener("click", function (_0x127492) {
                        respawnFn();
                      });
                    }
                    if (_0x187443.value === "Rotate") {
                      _0x3fc4d6.addEventListener("click", function (_0x5dfd41) {
                        _0x38f70c(_0x19b659 ? 0 : 8);
                      });
                    }
                    if (_0x187443.value === "Snail") {
                      _0x3fc4d6.addEventListener("click", function (_0x433ae7) {
                        _0x38f70c(_0x19b659 ? 0 : 7);
                      });
                    }
                    if (_0x187443.value === "Lobby") {
                      _0x3fc4d6.addEventListener("click", function (_0x2d9fbb) {
                        lobbyFn();
                      });
                    }
                    if (_0x187443.value === "Search") {
                      _0x3fc4d6.addEventListener("click", function (_0x182f2d) {
                        mbf.mbfass0();
                      });
                    }
                  }
                  _0x3db284[_0x187443.value] = _0x3fc4d6;
                }
              } catch (_0x22a027) {
                _0x50ce92.e(_0x22a027);
              } finally {
                _0x50ce92.f();
              }
              _0x3db284.Directional;
              var _0x4f3f70 = _0x3db284.Directional.dataset.size / 2;
              var _0x443e15 = parseInt(_0x3db284.Directional.style.left.replace("px", "")) + _0x4f3f70;
              var _0xcb096f = parseInt(_0x3db284.Directional.style.top.replace("px", "")) + _0x4f3f70;
              _0x24eefa = {
                zone: _0x3db284.Directional,
                mode: "static",
                position: {
                  left: "50%",
                  top: "50%"
                },
                dumbBox: {
                  left: _0x443e15,
                  top: _0xcb096f
                },
                color: "transparent",
                size: Math.floor(_0x3db284.Directional.dataset.size / 1.6)
              };
            } else {
              _0x24eefa.zone = document.getElementById("game-view");
              if (_0x24eefa.mode === "static") {
                delete _0x24eefa.zone;
              }
            }
            _0x3e0318 = nipplejs.create(_0x24eefa);
            _0x1e2a9c();
            if (bbs.customJoystick) {
              $(".nipple > .front").css("background", _0x3db284.Directional.dataset.color);
            }
          };
          if (_wwc.ismobile) {
            var _0x9fa427 = "";
            var _0x278e51 = bbs.configJoystick.typeCurrentName === "all" ? "label" : "labelAbbreviation";
            Object.keys(bbs.configJoystick.buttons).forEach(function (_0x5034c8) {
              _0x9fa427 = _0x9fa427 + (bbs.configJoystick.buttons[_0x5034c8].active ? `<button onclick="${bbs.configJoystick.buttons[_0x5034c8].action}" id="mbf_${_0x5034c8}">${bbs.configJoystick.buttons[_0x5034c8][_0x278e51]}</button>` : "");
            });
            var _0x19adaf = `
        <style>
          #wwc-mobile-box {
            position: fixed;z-index: 1001;width: 100%;top: 10px;
          }
          #wwc-mobile-buttons {
            position: relative;margin: 0 auto;width: 265px;
            display: flex;flex-wrap: nowrap;justify-content: space-between;align-items: center;
          }
          #wwc-mobile-buttons > button {
            background-color: #000;color: #FFF;border: 1px solid #FFF;border-radius: 50px;
            min-width: 36px;height: 36px;font-weight: bold;display: flex;justify-content: center;
            align-items: center;
          }
          .game-slider-container-02 {
            position: fixed;z-index: 1000;bottom: 50px;right: 45px;
          }
          .game-slider-container-02 input[type=range][orient=vertical] {
              writing-mode: vertical-lr;
              direction: rtl;
              appearance: slider-vertical;
              width: 16px;
              vertical-align: bottom;
          }
        </style>
        <div id="wwc-mobile-box"><div id="wwc-mobile-buttons" style="">${_0x9fa427}</div></div>`;
            _0x19adaf = _0x19adaf + (bbs.configJoystick.typeCurrent === "btn" ? "" : `<div id="wwc-mobile-box-slider" class="game-slider-container-02"><input id="sliderZoom" orient="vertical" onchange="mbf.mbfass9(this)" type="range" min="0.25" max="${_0x4bb95a.Ij.Rk.customer ? 12 : 2}" step="0.25" value="1" style="height: 65vh;"></div>`);
            $("body").append(_0x19adaf);
          }
          if (_wwc.ismobile && bbs.joystick.checked) {
            if (bbs.customJoystick) {
              console.log("customJoystick");
            }
            _0x1ae4b6();
          }
        } catch (_0x171b47) {
          console.error(_0x171b47);
        }
      };
      var _0x963538 = localStorage.getItem("custom_wormworld_wear");
      var _0x1bdc1e = localStorage.getItem("custom_wormworld_skin");
      var _0x7330fc = localStorage.getItem("custom_wormworld_badLang");
      var _0x4cacb1 = localStorage.getItem("custom_wormworld_background");
      var _0xa29451 = localStorage.getItem("custom_wormworld_audio");
      var _0x5d5f6b = [" XТ_", "WORMXТ_(d{})", "_xt", "wormxt", "worm_xt", "timmap"];
      if (_0x7330fc) {
        _0x5d5f6b = _0x5d5f6b.concat(JSON.parse(_0x7330fc));
      }
      window.badLanguageRegEx = (_0x5d5f6b || []).join("|");
      var _0x2b4303 = function _0x5aee3a(_0x369ee2) {
        _0x369ee2 = _0x369ee2.replace(new RegExp(badLanguageRegEx, "gim"), ":");
        _0x369ee2 = _0x369ee2.replace(/\uFDFD/g, "");
        _0x369ee2 = _0x369ee2.substring(0, _0x4935f5);
        return _0x369ee2;
      };
      _wwc.customConfig = function (_0x8a0f63) {
        var _0x577d61 = function _0x5ccd6a(_0x992422, _0x51cf8a = 0) {
          var _0x453bd6 = _0x992422.id.toString();
          var _0x333469 = _0x992422.type.toString().toLowerCase() + "VariantArray";
          var _0x4ddaec = _0x992422.type.toString().toLowerCase() + "Dict";
          _0x8a0f63.textureDict[_0x453bd6] = {
            custom: true,
            re1ativePath: _0x992422.file,
            reference: 1000 + _0x51cf8a
          };
          _0x8a0f63.regionDict[_0x453bd6] = {
            texture: _0x453bd6,
            x: _0x992422.x,
            y: _0x992422.y,
            w: _0x992422.w,
            h: _0x992422.h,
            px: _0x992422.px,
            py: _0x992422.py,
            pw: 128,
            ph: 128
          };
          _0x8a0f63[_0x4ddaec][1000 + _0x51cf8a] = {
            base: [{
              region: _0x453bd6
            }],
            guest: false,
            nonbuyable: false,
            price: 0,
            priceBefore: 0,
            id: _0x453bd6
          };
          _0x8a0f63[_0x333469].push([1000 + _0x51cf8a]);
        };
        if (_0x963538) {
          _0x963538 = JSON.parse(_0x963538);
          if (_0x963538.wear) {
            if (_0x963538.version == "2") {
              _0x963538.data.forEach(function (_0x5ae5e2, _0x5b47c5) {
                _0x577d61(_0x5ae5e2, _0x5b47c5);
              });
            } else {
              for (var _0x373ba0 in _0x963538.wear.textureDict) {
                _0x8a0f63.textureDict[_0x373ba0] = {};
                _0x8a0f63.textureDict[_0x373ba0].h1 = true;
                _0x8a0f63.textureDict[_0x373ba0].h3 = true;
                _0x8a0f63.textureDict[_0x373ba0].re1ativePath = _0x963538.wear.textureDict[_0x373ba0].file;
              }
              for (var _0x5166ef in _0x963538.wear.regionDict) {
                _0x8a0f63.regionDict[_0x5166ef] = _0x963538.wear.regionDict[_0x5166ef];
                var _0x10cbd0 = _0x8a0f63.regionDict[_0x5166ef];
                _0x8a0f63[_0x10cbd0.list][_0x10cbd0.obj.id.toString()] = _0x10cbd0.obj;
                _0x8a0f63[_0x10cbd0.listVariant].push([_0x10cbd0.obj.id.toString()]);
              }
            }
          }
        }
        if (_0x1bdc1e) {
          _0x1bdc1e = JSON.parse(_0x1bdc1e);
          if (_0x1bdc1e.version_skin == "2") {
            var _0x4fb6e7 = function _0x32bef9(_0x2d8382, _0x1b4d02, _0x2df926, _0x3f29db) {
              return {
                texture: _0x1b4d02,
                h: _0x2df926 - 5,
                w: _0x2df926 - 5,
                x: _0x2df926 * (_0x3f29db ? 0 : _0x2d8382 || 0),
                y: 0
              };
            };
            var _0x4801fc = "SKIN_" + _0x1bdc1e.id + "___Z";
            var _0x174c48 = {
              id: _0x4801fc,
              regionDict: {},
              textureDict: {},
              skinArrayDict: [],
              skinGroupArrayDict: [{
                id: _0x4801fc,
                name: {
                  en: "Custom V2"
                },
                list: []
              }],
              version_skin: 3
            };
            var _0x8d8738 = {
              id: _0x4801fc,
              guest: false,
              price: 0,
              priceBefore: 0,
              nonbuyable: false,
              prime: "c_white",
              glow: _0x1bdc1e.glow,
              base: []
            };
            for (var _0x340228 = _0x1bdc1e.len - 1; _0x340228 >= 0; _0x340228--) {
              _0x174c48.regionDict[`${_0x4801fc}_${_0x340228}`] = _0x4fb6e7(_0x340228, _0x4801fc, _0x1bdc1e.cos, 0);
              _0x8d8738.base.push(`${_0x4801fc}_${_0x340228}`);
            }
            _0x174c48.textureDict[_0x4801fc] = {
              custom: true,
              re1ativePath: _0x1bdc1e.file || _0x1bdc1e.td.file,
              h1: true,
              h4: true
            };
            _0x174c48.skinArrayDict.push(_0x8d8738);
            _0x174c48.skinGroupArrayDict[0].list.push(_0x4801fc);
            if (!_0x1bdc1e.textureDict[_0x4801fc]) {
              alert("Error! Texture not found:" + p + " - load again.");
              return;
            }
          }
          if (_0x1bdc1e.version_skin == "3") {
            for (var _0x20091e in _0x1bdc1e) {
              var _0x34fafa = _0x115510(_0x1bdc1e[_0x20091e]);
              if (_0x34fafa === "object") {
                _0x8a0f63[_0x20091e] = Array.isArray(_0x1bdc1e[_0x20091e]) ? [].concat(_0x40ebbe(_0x8a0f63[_0x20091e]), _0x40ebbe(_0x1bdc1e[_0x20091e])) : _0x66b726(_0x66b726({}, _0x8a0f63[_0x20091e]), _0x1bdc1e[_0x20091e]);
              }
            }
            return;
          }
          var _0x26a3bc = _0x1bdc1e.skin.id;
          _0x1bdc1e.skin.id = _0x26a3bc.toString();
          for (var _0x4c9af1 in _0x1bdc1e.textureDict) {
            _0x8a0f63.textureDict[_0x4c9af1] = _0x1bdc1e.textureDict[_0x4c9af1];
            _0x8a0f63.textureDict[_0x4c9af1].re1ativePath = _0x1bdc1e.textureDict[_0x4c9af1].file;
            _0x8a0f63.textureDict[_0x4c9af1].h1 = true;
            _0x8a0f63.textureDict[_0x4c9af1].h4 = true;
          }
          for (var _0x1c1cb1 in _0x1bdc1e.regionDict) {
            _0x8a0f63.regionDict[_0x1c1cb1] = _0x1bdc1e.regionDict[_0x1c1cb1];
          }
          _0x8a0f63.skinGroupArrayDict.push({
            id: "custom",
            name: {
              en: "Custom"
            },
            list: [_0x26a3bc]
          });
          _0x8a0f63.skinArrayDict.push(_0x1bdc1e.skin);
        }
      };
      function _0x26a266() {
        var _0x256b5f = false;
        (function (_0x52ed79) {
          if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(_0x52ed79) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(_0x52ed79.substr(0, 4))) {
            _0x256b5f = true;
          }
        })(navigator.userAgent || navigator.vendor || window.opera);
        return _0x256b5f;
      }
      window.w2c2020 = {
        fontStyle: {
          amarelo: new PIXI.TextStyle({
            align: "center",
            fill: "#FFD500",
            fontSize: 10,
            lineJoin: "round",
            whiteSpace: "normal",
            wordWrap: true,
            fontWeight: "bold"
          }),
          branco: new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 10,
            lineJoin: "round",
            whiteSpace: "normal",
            wordWrap: true,
            fontWeight: "bold"
          }),
          hsBranco: new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 9,
            lineJoin: "round",
            whiteSpace: "normal",
            wordWrap: true,
            fontWeight: "bold"
          }),
          hsBrancoRight: new PIXI.TextStyle(_0x249fc9({
            align: "center",
            fill: "#fff",
            fontSize: 9,
            lineJoin: "round",
            whiteSpace: "normal",
            wordWrap: true,
            fontWeight: "bold"
          }, "align", "right")),
          brancoXzoom: new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 12,
            lineJoin: "round",
            whiteSpace: "normal",
            wordWrap: true,
            fontWeight: "bold"
          }),
          verdeXzoom: new PIXI.TextStyle({
            align: "center",
            fill: "#0ff555",
            fontSize: 9,
            lineJoin: "round",
            whiteSpace: "normal",
            wordWrap: true,
            fontWeight: "bold"
          })
        }
      };
      var _0x36ea1e = ["#FFD500", "#FFC75A", "#00B2ED", "#FF4544", "#0094D7", "#CCCF81", "#ff0999"];
      for (var _0x4a07e1 = 0; _0x4a07e1 < _0x36ea1e.length; _0x4a07e1++) {
        var _0x4e9dab = _0x36ea1e[_0x4a07e1];
        w2c2020.fontStyle["tfc" + _0x4a07e1] = new PIXI.TextStyle({
          align: "center",
          fill: _0x4e9dab,
          fontSize: 25,
          lineJoin: "round",
          whiteSpace: "normal",
          wordWrap: true,
          fontWeight: "bold"
        });
      }
      w2c2020.zoom = new PIXI.Text("x1", w2c2020.fontStyle.brancoXzoom);
      w2c2020.zoom.x = 82;
      w2c2020.zoom.y = 105;
      w2c2020.conteinerTeam = new PIXI.Container();
      w2c2020.conteinerTeam.id = "team";
      w2c2020.friends = new PIXI.Container();
      w2c2020.friends.background = new PIXI.Graphics();
      w2c2020.friends.background.beginFill(0, 0.4);
      w2c2020.friends.background.drawRect(0, 0, 100, 130);
      w2c2020.friends.background.endFill();
      w2c2020.friends.addChild(w2c2020.friends.background);
      w2c2020.friends.position.x = bbs.displayFriends?.x || -10;
      w2c2020.friends.position.y = bbs.displayFriends?.y || 315;
      w2c2020.friends.position.rotate = bbs.displayFriends?.rotate || 0;
      w2c2020.friends.alpha = 0;
      w2c2020.moveSprite = PIXI.Sprite.from(URLSERV_WORMWORLD + "/img/move-icon.png");
      w2c2020.moveSprite.width = 20;
      w2c2020.moveSprite.height = 20;
      w2c2020.moveSprite.x = 75;
      w2c2020.moveSprite.y = 130;
      w2c2020.moveSprite.interactive = true;
      w2c2020.moveSprite.buttonMode = true;
      w2c2020.rotation = PIXI.Sprite.from(URLSERV_WORMWORLD + "/img/rotate-icon.png");
      w2c2020.rotation.width = 25;
      w2c2020.rotation.height = 25;
      w2c2020.rotation.x = 45;
      w2c2020.rotation.y = 130;
      w2c2020.rotation.interactive = true;
      w2c2020.rotation.buttonMode = true;
      w2c2020.friends.addChild(w2c2020.moveSprite);
      w2c2020.friends.addChild(w2c2020.rotation);
      var _0x287eaa = false;
      var _0x1e0b31 = {
        x: 0,
        y: 0
      };
      w2c2020.rotation.on("pointerdown", function (_0x1eafbf) {
        w2c2020.friends.rotation += Math.PI / 2;
        localStorage.setItem("wwcSaveGame", JSON.stringify(bbs || {}));
      });
      w2c2020.moveSprite.on("pointerdown", function (_0x5a7439) {
        _0x287eaa = true;
        _0x1e0b31.x = _0x5a7439.data.global.x - w2c2020.friends.x;
        _0x1e0b31.y = _0x5a7439.data.global.y - w2c2020.friends.y;
      });
      w2c2020.moveSprite.on("pointerup", function () {
        _0x287eaa = false;
      });
      w2c2020.moveSprite.on("pointerupoutside", function () {
        _0x287eaa = false;
      });
      w2c2020.moveSprite.on("pointermove", function (_0x501cbb) {
        if (_0x287eaa) {
          var _0x370884 = _0x501cbb.data.global;
          w2c2020.friends.x = _0x370884.x - _0x1e0b31.x;
          w2c2020.friends.y = _0x370884.y - _0x1e0b31.y;
          bbs.displayFriends.x = w2c2020.friends.x;
          bbs.displayFriends.y = w2c2020.friends.y;
          localStorage.setItem("wwcSaveGame", JSON.stringify(bbs || {}));
        }
      });
      w2c2020.moveSprite.visible = false;
      w2c2020.rotation.visible = false;
      window.addEventListener("keydown", function (_0x690575) {
        if (_0x690575.key === "Escape") {
          w2c2020.moveSprite.visible = !w2c2020.moveSprite.visible;
          w2c2020.rotation.visible = !w2c2020.rotation.visible;
        }
      });
      w2c2020.label_hs = new PIXI.Text("HS", w2c2020.fontStyle.amarelo);
      w2c2020.label_hs.x = 15;
      w2c2020.label_hs.y = 107;
      w2c2020.hs = new PIXI.Text("0", w2c2020.fontStyle.amarelo);
      w2c2020.hs.x = 20;
      w2c2020.hs.y = 119;
      w2c2020.hsTotal = new PIXI.Text("0", w2c2020.fontStyle.branco);
      w2c2020.hsTotal.x = 20;
      w2c2020.hsTotal.y = 132;
      w2c2020.label_kill = new PIXI.Text("KILL", w2c2020.fontStyle.amarelo);
      w2c2020.label_kill.x = 50;
      w2c2020.label_kill.y = 107;
      w2c2020.kill = new PIXI.Text("0", w2c2020.fontStyle.amarelo);
      w2c2020.kill.x = 60;
      w2c2020.kill.y = 120;
      w2c2020.killTotal = new PIXI.Text("0", w2c2020.fontStyle.branco);
      w2c2020.killTotal.x = 60;
      w2c2020.killTotal.y = 133;
      w2c2020.clock = PIXI.Sprite.from(URL_CDN + "/images/clock.png");
      w2c2020.clock.width = 100;
      w2c2020.clock.height = 100;
      w2c2020.clock.x = -50;
      w2c2020.clock.y = -50;
      w2c2020.containerHsRec = new PIXI.Container();
      w2c2020.containerHsRec.x = -55;
      w2c2020.containerHsRec.y = 195;
      w2c2020.containerHstop = new PIXI.Container();
      w2c2020.containerHstop.x = -55;
      w2c2020.containerHstop.y = 95;
      w2c2020.containerHsIndex = new PIXI.Container();
      w2c2020.containerHsNames = new PIXI.Container();
      w2c2020.containerHsValue = new PIXI.Container();
      var _0x151d40 = function _0x365adb(_0x441b45) {};
      w2c2020.top1rec = "🥇";
      w2c2020.top2rec = "🥈";
      w2c2020.top3rec = "🥉";
      w2c2020.titleRec = new PIXI.Text("Records (kb 0)", w2c2020.fontStyle.amarelo);
      w2c2020.titleRec.y = -5;
      for (var _0x445729 = 0; _0x445729 < 3; _0x445729++) {
        var _0xd0b2d9 = _0x445729 + 1;
        var _0x24c35e = new PIXI.Text(w2c2020["top" + _0xd0b2d9 + "rec"], w2c2020.fontStyle.hsBrancoRight);
        _0x24c35e.x = _0x445729 >= 9 ? -5 : 0;
        _0x24c35e.y = _0xd0b2d9 * 13;
        w2c2020.containerHsRec.addChild(_0x24c35e);
        var _0x490b43 = new PIXI.Text("--", w2c2020.fontStyle.hsBranco);
        _0x490b43.x = 15;
        _0x490b43.y = _0xd0b2d9 * 13;
        w2c2020.containerHsRec.addChild(_0x490b43);
        var _0x559dc4 = new PIXI.Text("-", w2c2020.fontStyle.hsBrancoRight);
        _0x559dc4.x = 135;
        _0x559dc4.y = _0xd0b2d9 * 13;
        w2c2020.containerHsRec.addChild(_0x559dc4);
      }
      w2c2020.containerHsRec.addChild(w2c2020.titleRec);
      var _0x45194f = 6;
      var _0x1d9030 = function _0x1b17f5(_0x45ea06, _0x3ede79) {
        if (_0x3ede79 && _0x3ede79.length > 0) {
          for (var _0x16c8bc = 0; _0x16c8bc < 3; _0x16c8bc++) {
            if (w2c2020.containerHsRec.children[_0x16c8bc]) {
              w2c2020.containerHsRec.children[_0x16c8bc * 3 + 1].text = _0x3ede79 && _0x3ede79[_0x16c8bc] ? _0x3ede79[_0x16c8bc].nickname.substring(0, 17) : "--";
            }
            if (w2c2020.containerHsRec.children[_0x16c8bc]) {
              w2c2020.containerHsRec.children[_0x16c8bc * 3 + 2].text = _0x3ede79 && _0x3ede79[_0x16c8bc] ? _0x3ede79[_0x16c8bc].score : "--";
            }
          }
        }
        if (_0x45ea06 && _0x45ea06.length > 0) {
          for (var _0x1b1533 = 0; _0x1b1533 < _0x45194f; _0x1b1533++) {
            var _0x2e7449 = "--";
            var _0x532c2f = "--";
            if (_0x45ea06 && _0x45ea06[_0x1b1533]) {
              _0x2e7449 = _0x45ea06[_0x1b1533].nickname ? _0x45ea06[_0x1b1533].nickname.substring(0, 14) : "--";
              _0x532c2f = parseInt(_0x45ea06[_0x1b1533].score || 0);
            }
            if (w2c2020.containerHsNames.children[_0x1b1533]) {
              w2c2020.containerHsNames.children[_0x1b1533].text = _0x2e7449;
            }
            if (w2c2020.containerHsValue.children[_0x1b1533]) {
              w2c2020.containerHsValue.children[_0x1b1533].text = _0x532c2f;
            }
          }
        }
      };
      w2c2020.containerHstop.addChild(new PIXI.Text("TOP HS (kb 9)", w2c2020.fontStyle.amarelo));
      for (var _0x21b396 = 0; _0x21b396 < _0x45194f; _0x21b396++) {
        var _0x2466ed = new PIXI.Text(_0x21b396 + 1, w2c2020.fontStyle.hsBranco);
        _0x2466ed.x = _0x21b396 >= 9 ? -5 : 0;
        _0x2466ed.y = (_0x21b396 + 1) * 13;
        w2c2020.containerHsIndex.addChild(_0x2466ed);
        var _0x4f47a0 = new PIXI.Text("..", w2c2020.fontStyle.hsBranco);
        _0x4f47a0.x = 10;
        _0x4f47a0.y = (_0x21b396 + 1) * 13;
        w2c2020.containerHsNames.addChild(_0x4f47a0);
        var _0x15683a = new PIXI.Text(0, w2c2020.fontStyle.hsBrancoRight);
        _0x15683a.x = 130;
        _0x15683a.y = (_0x21b396 + 1) * 13;
        w2c2020.containerHsValue.addChild(_0x15683a);
      }
      w2c2020.containerHstop.addChild(w2c2020.containerHsIndex);
      w2c2020.containerHstop.addChild(w2c2020.containerHsNames);
      w2c2020.containerHstop.addChild(w2c2020.containerHsValue);
      w2c2020.containerCountInfo = new PIXI.Container();
      w2c2020.containerCountInfo.x = -45;
      w2c2020.containerCountInfo.y = -52;
      w2c2020.containerCountInfo.addChild(w2c2020.zoom);
      w2c2020.containerCountInfo.addChild(w2c2020.friends);
      w2c2020.containerCountInfo.addChild(w2c2020.label_hs);
      w2c2020.containerCountInfo.addChild(w2c2020.hs);
      w2c2020.containerCountInfo.addChild(w2c2020.hsTotal);
      w2c2020.containerCountInfo.addChild(w2c2020.label_kill);
      w2c2020.containerCountInfo.addChild(w2c2020.kill);
      w2c2020.containerCountInfo.addChild(w2c2020.killTotal);
      w2c2020.labelRoom = new PIXI.Text("WWC", w2c2020.fontStyle.amarelo);
      w2c2020.labelRoom.x = -50;
      w2c2020.labelRoom.y = -56;
      w2c2020.addRoom = function (_0x2a31a6) {
        w2c2020.labelRoom.text = _0x2a31a6 || "WWC";
      };
      window.addEventListener("keydown", function (_0x5e1404) {
        if (_0x5e1404.key == "7") {
          _0x38f70c(_0x19b659 ? 0 : 7);
        }
        if (_0x5e1404.key == "8") {
          _0x38f70c(_0x19b659 ? 0 : 8);
        }
        if (_0x5e1404.key === "0" && bbs.showRechs) {
          w2c2020.containerHsRec.alpha = !w2c2020.containerHsRec.alpha;
        }
        if (_0x5e1404.key === "9" && bbs.showTophs) {
          w2c2020.containerHstop.alpha = !w2c2020.containerHstop.alpha;
        }
        if (_0x5e1404.key === "6" && _0x3ca652.setIntervalRun) {
          _0x7613e6 = !_0x7613e6;
        }
        if (_0x5e1404.key === "5") {
          respawnFn();
        }
        if (_0x5e1404.key === "4") {
          var _0x1f3867 = _wwc._anApp.og.af.ng.mf.getChildByName("lineHS");
          if (_0x1f3867) {
            _0x1f3867.alpha = _0x1f3867.alpha ? 0 : 0.3;
          }
        }
        if (_0x5e1404.key === "3") {
          var _0x17e4a4 = _0xd16db;
          if (backgroundArena.length < _0x17e4a4) {
            _0x17e4a4 = bbs.background || 0;
            _0xd16db = 0;
          }
          _wwc._anApp.og.af.ng.Lg.$g(_0x3ca652.bgg(_0x17e4a4));
          _0xd16db++;
        }
        if (_0x5e1404.key === "1") {
          mbf.mbf_cambiar();
        }
        if (_0x5e1404.key === "x1") {
          _wwcio.update(1);
        }
        if (_0x5e1404.key === "x2") {
          _wwcio.update(2);
        }
        if (_0x5e1404.key === "<" || _0x5e1404.key === "," && _0x3ca652.setIntervalRun) {
          mbf.mbfass1();
        }
        if (_0x5e1404.key === ">" || _0x5e1404.key === "." && _0x3ca652.setIntervalRun) {
          mbf.mbfass2();
        }
        if (_0x5e1404.key === "z" || _0x5e1404.key === "Z" && _0x3ca652.setIntervalRun) {
          _0x3cf613 = bbs.configZoom?.closeDown || 1;
          w2c2020.zoom.text = "x" + _0x3cf613;
        }
        if (_0x5e1404.key === "c" || _0x5e1404.key === "C" && _0x3ca652.setIntervalRun) {
          w2c2020.zoom.text = _0x3cf613 === 0.5 ? "x2" : "CLOSE-UP";
          _0x3cf613 = _0x3cf613 === 0.5 ? 2 : bbs.configZoom?.closeUp || 0.25;
        }
      });
      var _0x4bb95a = {
        Lc: {
          Gb: {}
        }
      };
      var _0x3ca652 = {
        pm: {},
        ps: 0,
        ps2: function _0x21f0c1(_0xc6d339, _0x37a262, _0x34a0a7) {
          if (true) {
            var _0x2aeaae = _0x34a0a7 ? 128 : 0;
            var _0x43693f = _0x3ca652.$F.N(_0x37a262) / _0x3ca652.$V.F * 128 & 127;
            var _0x2087e6 = (_0x2aeaae | _0x43693f) & 255;
            var _0x29e10b = new ArrayBuffer(1);
            new DataView(_0x29e10b).setInt8(0, _0x2087e6);
            _0xc6d339.Eq(_0x29e10b);
            _0xc6d339.nq = _0x2087e6;
          } else {}
        },
        ps3: function _0xeb4ef7() {
          _0x4bb95a.dh.xq(_0x4bb95a.og.af.Gn(), _0x4bb95a.og.af.Hn());
        },
        setIntervalRun: null,
        loadBg: false,
        LG: function _0x2a05bd(_0x75a6b9, _0x3b0e37, _0xbb84c1) {
          _0x75a6b9.Ll("gg", _0xbb84c1.credential, null);
        },
        Lg: function _0x58925b(_0x1396d3) {
          _0x4bb95a.xe._g = _0x3ca652.bgg();
          _wwc.$C = _0x1396d3;
          _wwc.$W = _0x3ca652;
          if (bbs.bgGameWidth > 512) {
            return new _0x1396d3.WMGBS1();
          } else {
            return new _0x1396d3.WMGBS2();
          }
        },
        registry: function () {
          var _0x48bf5e = _0x1e9522(_0xeb30a().m(function _0x225fbe(_0x2e6b15) {
            var _0x44691c;
            return _0xeb30a().w(function (_0xe3133d) {
              while (1) {
                switch (_0xe3133d.n) {
                  case 0:
                    _0xe3133d.n = 1;
                    return fetch(URLSERV_WORMWORLD + "/dynamic/assets/registry", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                        "x-uid": wwc_keycode
                      },
                      body: JSON.stringify(_0x2e6b15)
                    }).then(function (_0x4898c0) {
                      if (!_0x4898c0.ok) {
                        return _0x2e6b15;
                      }
                      return _0x4898c0.json();
                    });
                  case 1:
                    _0x44691c = _0xe3133d.v;
                    return _0xe3133d.a(2, _0x44691c);
                }
              }
            }, _0x225fbe);
          }));
          function _0x29762f(_0x1d85cd) {
            return _0x48bf5e.apply(this, arguments);
          }
          return _0x29762f;
        }()
      };
      _0x3ca652.Vd = function (_0x4f2ad9, _0x54a9b4) {
        _wwc.customConfig(_0x4f2ad9);
        if (!_0x4f2ad9) {
          return;
        }
        var _0x447fea = this;
        function _0x19e533(_0x822313) {
          var _0x21654b = _0x54a9b4.Id.Ld;
          _0x447fea.Rd(_0x21654b, _0x54a9b4.Od.bc(_0x21654b).lc(_0x822313));
        }
        if (this.Fd) {
          this.Pd();
          return;
        }
        var _0x57f3ca = [];
        var _0x4e7a2f = [];
        var _0xac1a4a = 0;
        var _0x54e9a5 = new PIXI.Loader();
        for (var _0x26dd49 in _0x4f2ad9.textureDict) {
          if (_0x4f2ad9.textureDict.hasOwnProperty(_0x26dd49)) {
            var _0x1f1f7a = _0x4f2ad9.textureDict[_0x26dd49];
            var _0x50d390 = _0x1f1f7a.re1ativePath || _0x1f1f7a.relativePath;
            var _0x45a8df = _0x1f1f7a.fileSize || 100;
            var _0x257ffc = _0x1f1f7a.sha256 || null;
            var _0x14e75f = new _0x54a9b4.Wd(_0x26dd49, _0x50d390, _0x45a8df, _0x257ffc);
            _0x14e75f.h1 = _0x1f1f7a.h1;
            _0x14e75f.h4 = _0x1f1f7a.h4;
            _0x14e75f.skinEvo = _0x1f1f7a.skinEvo;
            _0x14e75f.lines = _0x1f1f7a.lines;
            _0x14e75f.speed = _0x1f1f7a.speed;
            _0x57f3ca.push(_0x14e75f);
            _0x54e9a5.add(_0x26dd49, _0x50d390);
          }
        }
        _0x54e9a5.onProgress.add(function (_0x551ae7, _0x937d22) {
          _0x19e533(_0x551ae7.progress / 100);
        });
        _0x54e9a5.load(function (_0x2f9f54, _0x925d1) {
          _0x57f3ca.forEach(function (_0x18d9f8) {
            _0x18d9f8.resource = _0x925d1[_0x18d9f8.ae];
          });
          _0x447fea.$d(_0x4f2ad9, _0x57f3ca, _0x54a9b4);
        });
        return;
      };
      _0x3ca652.Zd = function (_0x366452, _0x710361, _0x3ecef8, _0x21eea7) {
        $.ajax({
          type: "GET",
          url: _0x366452._d,
          xhrFields: {
            responseType: "arraybuffer",
            onprogress: function _0x53b170(_0x4ad52e) {
              if (_0x4ad52e.lengthComputable) {
                _0x21eea7(_0x4ad52e.loaded / _0x4ad52e.total);
              }
            }
          }
        }).fail(function () {
          _0x710361(new Error());
        }).done(function (_0x105524) {
          _0x3ecef8(_0x105524);
        });
      };
      _0x3ca652.$d = function (_0x47afaf, _0x12457c, _0xba7854) {
        function _0x3b3773(_0xd03b09) {
          var _0x270017 = _0xba7854.Id.Md;
          _0x3dd0a0.Rd(_0x270017, _0xba7854.Od.bc(_0x270017).lc(_0xd03b09));
        }
        var _0x3dd0a0 = this;
        if (this.Fd) {
          this.Pd();
          return;
        }
        var _0x4807ce;
        var _0x24bc01;
        var _0x5f05b6 = {};
        var _0x327c8e = function _0x286b11() {
          for (var _0x158877 = 0; _0x158877 < _0x12457c.length; _0x158877++) {
            try {
              window.URL.revokeObjectURL(_0x12457c[_0x158877].Xd);
            } catch (_0x1da020) {}
          }
          _0x3dd0a0.Sd(new Error());
        };
        var _0x4bbbac = function _0x20128d() {
          var _0x12f875 = _0x5745c6 == 5 ? 0 : _0x5745c6;
          _0x3b3773(_0x12f875 / 4);
          _0x5f05b6[_0x4807ce.ae] = new _0x3ca652.$C.be(_0x4807ce.Xd, _0x24bc01);
          _0x4ced7c();
        };
        var _0x4ced7c = function _0x50741f() {
          try {
            if (_0x5745c6 < _0x12457c.length) {
              _0x4807ce = _0x12457c[_0x5745c6];
              _0x5745c6++;
              _0x5f05b6[_0x4807ce.ae] = new _0x3ca652.$C.be(_0x4807ce.resource.texture, _0x4807ce.resource.texture.baseTexture);
              _0x4ced7c();
              return;
            }
            return _0x3dd0a0.ce(_0x47afaf, _0x5f05b6);
          } catch (_0x2f9109) {
            console.error(_0x2f9109);
          }
        };
        var _0x5745c6 = 0;
        _0x4ced7c();
      };
      _0x3ca652.p = function (_0x5b32d2, _0xc8eb4f) {
        _0x5b32d2 = _0x5b32d2.split("|");
        _0x3ca652.pm[_0x5b32d2[0]] = {
          p: _0x5b32d2[1],
          i: _0xc8eb4f
        };
      };
      _0x3ca652.ae = function (_0x5472e6, _0x5d86ac, _0x56b29e) {
        if (_0x5d86ac.maV !== 1) {
          _0x5d86ac.maV = 1;
          var _0x2f6d37 = _0x5d86ac.ma.trim().match(_0x437a97);
          if (_0x2f6d37 && _0x56b29e.dh.Fh[_0x5d86ac.ae]) {
            var _0x50f79c = function _0x17d2b5(_0x193440, _0x4b7c59) {
              if (_0x193440.includes("_")) {
                if (_0x24355d["WEAR_W" + _0x2b171a + "_" + _0x193440]) {
                  return _0x24355d["WEAR_W" + _0x2b171a + "_" + _0x193440].reference;
                } else {
                  return _0x4b7c59;
                }
              }
              return _wwc.wearMap[_0x193440];
            };
            var _0x4f7378 = _0x2f6d37[3];
            var _0x2b171a = _0x2f6d37[4];
            var _0x1108a4 = _0x2f6d37[5];
            var _0x25c643 = _0x2f6d37[6];
            var _0x14e64c = _0x2f6d37[7];
            var _0x298b41 = _0x2f6d37[8];
            var _0x14f74f = _0x2f6d37[9];
            var _0x24355d = _0x4bb95a.Lc.Xb().textureDict;
            var _0x1c44bc = _0x4f7378 === "B";
            if (_0x1108a4 !== "000") {
              var _0x1cb577 = "SKIN_S" + _0x1108a4.substring(0, 2) + "___" + _0x1108a4.substring(2);
              var _0x16ee36 = _0x24355d[_0x1cb577];
              _0x56b29e.dh.Fh[_0x5d86ac.ae].Eh.Hh = !_0x1c44bc ? parseInt(_wwc.skinMap[_0x1108a4]) : _0x16ee36 ? _0x1cb577 : _0x56b29e.dh.Fh[_0x5d86ac.ae].Eh.Hh;
            }
            if (_0x25c643 !== "00") {
              _0x56b29e.dh.Fh[_0x5d86ac.ae].Eh.ni = _0x50f79c(_0x25c643, _0x56b29e.dh.Fh[_0x5d86ac.ae].Eh.ni);
            }
            if (_0x14e64c !== "00") {
              _0x56b29e.dh.Fh[_0x5d86ac.ae].Eh.oi = _0x50f79c(_0x14e64c, _0x56b29e.dh.Fh[_0x5d86ac.ae].Eh.oi);
            }
            if (_0x298b41 !== "00") {
              _0x56b29e.dh.Fh[_0x5d86ac.ae].Eh.pi = _0x50f79c(_0x298b41, _0x56b29e.dh.Fh[_0x5d86ac.ae].Eh.pi);
            }
            if (_0x14f74f !== "00") {
              _0x56b29e.dh.Fh[_0x5d86ac.ae].Eh.qi = _0x50f79c(_0x14f74f, _0x56b29e.dh.Fh[_0x5d86ac.ae].Eh.qi);
            }
            _0x56b29e.dh.Fh[_0x5d86ac.ae].Eh.ma = _0x2b4303(_0x56b29e.dh.Fh[_0x5d86ac.ae].Eh.ma);
          }
        }
        _0x5d86ac.ma = _0x2b4303(_0x5d86ac.ma);
      };
      _0x3ca652.Xp = function (_0x105bb3, _0x4ea62c, _0xbad93a, _0x69b7e5, _0x111d1e, _0x5b2589, _0x17b702) {
        if (!_wwc.skinMap) {
          _wwc.skinMap = _0x4bb95a.Lc.Xb().skinMap;
        }
        if (!_wwc.wearMap) {
          _wwc.wearMap = _0x4bb95a.Lc.Xb().wearMap;
        }
        var _0x9684be = /^(SKIN|WEAR)_(.*?)_(.{2}|.{3})$/;
        var _0x3d0bc7 = _0x4bb95a.Lc.Xb().hatDict[_0x17b702] ? _0x4bb95a.Lc.Xb().hatDict[_0x17b702].id : _0x17b702;
        var _0xadf97e = _0x4bb95a.Lc.Xb().glassesDict[_0x5b2589] ? _0x4bb95a.Lc.Xb().glassesDict[_0x5b2589].id : _0x5b2589;
        var _0x53f221 = _0x4bb95a.Lc.Xb().glassesDict[_0x111d1e] ? _0x4bb95a.Lc.Xb().mouthDict[_0x111d1e].id : _0x111d1e;
        var _0x35f9a5 = _0x4bb95a.Lc.Xb().glassesDict[_0x69b7e5] ? _0x4bb95a.Lc.Xb().eyesDict[_0x69b7e5].id : _0x69b7e5;
        var _0x356073 = "A";
        var _0x24de99 = "";
        var _0x15eeea = "__";
        var _0x4990c7 = function _0x3c1001(_0x1cdaf0, _0x451874) {
          if (_0x9684be.test(_0x1cdaf0)) {
            var _0x4d2d7c = _0x9684be.exec(_0x1cdaf0);
            return {
              id: _0x4d2d7c[2],
              value: _0x4d2d7c[3],
              testRun: true
            };
          }
          return {
            id: null,
            value: null,
            testRun: false
          };
        };
        var _0x6851c8 = {
          h: _0x4990c7(_0xbad93a, "h"),
          r: _0x4990c7(_0x35f9a5, "r"),
          a: _0x4990c7(_0x53f221, "a"),
          f: _0x4990c7(_0xadf97e, "f"),
          c: _0x4990c7(_0x3d0bc7, "c")
        };
        if (_0x6851c8.h.testRun) {
          _0x24de99 = _0x6851c8.h.id.substring(1);
          _0x356073 = "B";
        }
        if (_0x6851c8.r.testRun || _0x6851c8.a.testRun || _0x6851c8.f.testRun || _0x6851c8.c.testRun) {
          _0x15eeea = (_0x6851c8.r.id || _0x6851c8.a.id || _0x6851c8.f.id || _0x6851c8.c.id).substring(1);
        }
        var _0x31f378 = function _0x1877ac(_0x233241, _0x4f6cc3) {
          if (_0x6851c8[_0x4f6cc3].value) {
            return _0x6851c8[_0x4f6cc3].value.padStart(_0x4f6cc3 === "h" ? 3 : 2, "0");
          }
          if (!_wwc[_0x4f6cc3 === "h" ? "testSkinMod" : "testWear"](_0x233241 || 0)) {
            if (_0x6851c8[_0x4f6cc3].testRun) {
              return _0x233241.toString().padStart(_0x4f6cc3 === "h" ? 3 : 2, "0");
            } else if (_0x4f6cc3 === "h") {
              return "000";
            } else {
              return "00";
            }
          }
          return _wwc[_0x4f6cc3 === "h" ? "skinMap" : "wearMap"][_0x233241] || (_0x4f6cc3 === "h" ? "000" : "00");
        };
        var _0x3e68ee = _0x31f378(_0xbad93a, "h");
        var _0x5eadea = _0x31f378(_0x69b7e5, "r");
        var _0x405462 = _0x31f378(_0x111d1e, "a");
        var _0x4855e3 = _0x31f378(_0x5b2589, "f");
        var _0x1804b3 = _0x31f378(_0x17b702, "c");
        var _0xf149ee = _0x356073 + _0x15eeea + _0x24de99 + _0x3e68ee.replace("__", "") + _0x5eadea + _0x405462 + _0x4855e3 + _0x1804b3;
        bbs.code = `${_0x3e68ee || "000"}|${_0x1804b3 || "00"}`;
        function _0x44b1f6(_0x4dc32c, _0x5d7f46) {
          var _0x583750 = "";
          _0x583750 = _0x4dc32c.substring(0, _0x4935f5).padEnd(_0x4935f5, "_");
          var _0x18b256 = _0x583750 + _0x5d7f46;
          return _0x18b256;
        }
        bbs.nickname = _0x44b1f6(_0x4ea62c, _0xf149ee);
        return bbs.nickname;
      };
      _0x3ca652.bgg = function (_0x409078) {
        _0x409078 = parseInt(_0x409078);
        var _0x2b1b6d = bbs.backgroundUri || "/images/bg-pattern-pow2-ARENA.png";
        if (!isNaN(_0x409078)) {
          _0x2b1b6d = backgroundArena[_0x409078]?.uri || _0x2b1b6d;
          bbs.bgGameWidth = backgroundArena[_0x409078]?.w || 512;
          bbs.bgGameHeight = backgroundArena[_0x409078]?.h || 256;
        }
        var _0x2dc662 = PIXI.BaseTexture.from(_0x2b1b6d);
        bbs.bgGameWidth = _0x2dc662.width || bbs.bgGameWidth || 512;
        bbs.bgGameHeight = _0x2dc662.height || bbs.bgGameHeight || 256;
        _0x2dc662.wrapMode = bbs.bgGameWidth > 999 ? PIXI.WRAP_MODES.CLAMP : PIXI.WRAP_MODES.REPEAT;
        return new PIXI.Texture(_0x2dc662);
      };
      _0x3ca652.genereteTexture = function (_0x2105d6) {
        var _0x5412b2 = 128;
        var _0x9a8784 = 9;
        try {
          var _0x290974 = function _0x33fdfd() {
            var _0x54a762 = [];
            for (var _0xd66bd2 = 0; _0xd66bd2 < _0x2105d6.lines; _0xd66bd2++) {
              lineContainer = [];
              for (var _0x3f353f = 0; _0x3f353f < _0x9a8784; _0x3f353f++) {
                try {
                  var _0x31b4f2 = PIXI.Texture.from(_0x2105d6._d, {
                    x: _0x3f353f * _0x5412b2,
                    y: _0xd66bd2 * _0x5412b2,
                    width: _0x5412b2,
                    height: _0x5412b2
                  });
                  lineContainer.push(_0x31b4f2);
                } catch (_0x3036fc) {
                  console.log(_0xd66bd2, _0x3f353f);
                  console.log(_0x3036fc);
                  return;
                }
              }
              _0x54a762.push(lineContainer);
            }
            return _0x54a762;
          };
          return _0x290974();
        } catch (_0x1f139c) {
          return [];
        }
      };
      var _0x556988 = {
        headshot: window.URL_CDN + "/sounds/headshot_sound_effect.mp3",
        shaokahn: window.URL_CDN + "/sounds/shao_kahn_sound_effect.mp3",
        speed: window.URL_CDN + "/sounds/woo_Hoo_sound_effect.mp3",
        curve: window.URL_CDN + "/sounds/yes_effect.mp3",
        loser: window.URL_CDN + "/sounds/negative_beeps_effect.mp3",
        top1: window.URL_CDN + "/sounds/mission_complete_sound_effect.mp3"
      };
      _0x304373.ref = ["speed", "curve"];
      for (var _0x2deb8d in _0x556988) {
        _0x304373[_0x2deb8d] = new _0x48b9e9.Howl({
          src: [_0x556988[_0x2deb8d]],
          html5: true,
          autoplay: _0x2deb8d == "top1",
          loop: false
        });
      }
      var _0x3bf684 = {
        "rotate(0deg)": 0,
        "rotate(90deg)": 1.5707963267948966,
        "rotate(180deg)": 3.141592653589793,
        "rotate(270deg)": 4.71238898038469,
        "rotate(360deg)": 0
      };
      var _0x4bcf76 = typeof Symbol == "function" && _0x115510(Symbol.iterator) == "symbol" ? function (_0x50ca70) {
        return _0x115510(_0x50ca70);
      } : function (_0x2a703b) {
        if (_0x2a703b && typeof Symbol == "function" && _0x2a703b.constructor === Symbol && _0x2a703b !== Symbol.prototype) {
          return "symbol";
        } else {
          return _0x115510(_0x2a703b);
        }
      };
      var _0x1cbd0d;
      window.addEventListener("load", function () {
        function _0x3860f9() {
          (function (_0xc66f72, _0x4ad73c, _0x6ad3b8) {
            function _0x5c35d9(_0x592be5, _0x2dc294) {
              return (_0x592be5 === undefined ? "undefined" : _0x4bcf76(_0x592be5)) === _0x2dc294;
            }
            function _0x241c5c() {
              if (typeof _0x4ad73c.createElement != "function") {
                return _0x4ad73c.createElement(arguments[0]);
              } else if (_0x45c7cf) {
                return _0x4ad73c.createElementNS.call(_0x4ad73c, "http://www.w3.org/2000/svg", arguments[0]);
              } else {
                return _0x4ad73c.createElement.apply(_0x4ad73c, arguments);
              }
            }
            var _0x51f189 = [];
            var _0x15a5d7 = [];
            var _0x57b5e7 = {
              _version: "3.3.1",
              _config: {
                classPrefix: "",
                enableClasses: true,
                enableJSClass: true,
                usePrefixes: true
              },
              _q: [],
              on: function _0x1bf532(_0x5eab5d, _0x2a1336) {
                var _0x4533f4 = this;
                setTimeout(function () {
                  _0x2a1336(_0x4533f4[_0x5eab5d]);
                }, 0);
              },
              addTest: function _0x293405(_0x4de913, _0x59b1df, _0x3d4ad8) {
                _0x15a5d7.push({
                  name: _0x4de913,
                  fn: _0x59b1df,
                  options: _0x3d4ad8
                });
              },
              addAsyncTest: function _0x134ac1(_0xb6b1b5) {
                _0x15a5d7.push({
                  name: null,
                  fn: _0xb6b1b5
                });
              }
            };
            var _0x371cc3 = function _0x3fc9fd() {};
            _0x371cc3.prototype = _0x57b5e7;
            _0x371cc3 = new _0x371cc3();
            var _0x2b619a = false;
            try {
              _0x2b619a = "WebSocket" in _0xc66f72 && _0xc66f72.WebSocket.CLOSING === 2;
            } catch (_0x199a25) {}
            _0x371cc3.addTest("websockets", _0x2b619a);
            var _0xdd68e8 = _0x4ad73c.documentElement;
            var _0x45c7cf = _0xdd68e8.nodeName.toLowerCase() === "svg";
            _0x371cc3.addTest("canvas", function () {
              var _0x1fb54e = _0x241c5c("canvas");
              return !!_0x1fb54e.getContext && !!_0x1fb54e.getContext("2d");
            });
            _0x371cc3.addTest("canvastext", function () {
              return _0x371cc3.canvas !== false && typeof _0x241c5c("canvas").getContext("2d").fillText == "function";
            });
            
            (function () {
              var _0x4b6039;
              var _0x299761;
              var _0x37ecb9;
              var _0x25bea3;
              var _0x530b52;
              var _0x3258d7;
              var _0x1557d8;
              for (var _0x8609a9 in _0x15a5d7) {
                if (_0x15a5d7.hasOwnProperty(_0x8609a9)) {
                  _0x4b6039 = [];
                  _0x299761 = _0x15a5d7[_0x8609a9];
                  if (_0x299761.name && (_0x4b6039.push(_0x299761.name.toLowerCase()), _0x299761.options && _0x299761.options.aliases && _0x299761.options.aliases.length)) {
                    for (_0x37ecb9 = 0; _0x37ecb9 < _0x299761.options.aliases.length; _0x37ecb9++) {
                      _0x4b6039.push(_0x299761.options.aliases[_0x37ecb9].toLowerCase());
                    }
                  }
                  _0x25bea3 = _0x5c35d9(_0x299761.fn, "function") ? _0x299761.fn() : _0x299761.fn;
                  _0x530b52 = 0;
                  for (; _0x530b52 < _0x4b6039.length; _0x530b52++) {
                    _0x3258d7 = _0x4b6039[_0x530b52];
                    _0x1557d8 = _0x3258d7.split(".");
                    if (_0x1557d8.length === 1) {
                      _0x371cc3[_0x1557d8[0]] = _0x25bea3;
                    } else {
                      if (!!_0x371cc3[_0x1557d8[0]] && !(_0x371cc3[_0x1557d8[0]] instanceof Boolean)) {
                        _0x371cc3[_0x1557d8[0]] = new Boolean(_0x371cc3[_0x1557d8[0]]);
                      }
                      _0x371cc3[_0x1557d8[0]][_0x1557d8[1]] = _0x25bea3;
                    }
                    _0x51f189.push((_0x25bea3 ? "" : "no-") + _0x1557d8.join("-"));
                  }
                }
              }
            })();
            (function (_0x3294fa) {
              var _0x54636d = _0xdd68e8.className;
              var _0x18e07b = _0x371cc3._config.classPrefix || "";
              if (_0x45c7cf) {
                _0x54636d = _0x54636d.baseVal;
              }
              if (_0x371cc3._config.enableJSClass) {
                var _0x37e451 = new RegExp("(^|\\s)" + _0x18e07b + "no-js(\\s|$)");
                _0x54636d = _0x54636d.replace(_0x37e451, "$1" + _0x18e07b + "js$2");
              }
              if (_0x371cc3._config.enableClasses) {
                _0x54636d += " " + _0x18e07b + _0x3294fa.join(" " + _0x18e07b);
                if (_0x45c7cf) {
                  _0xdd68e8.className.baseVal = _0x54636d;
                } else {
                  _0xdd68e8.className = _0x54636d;
                }
              }
            })(_0x51f189);
            delete _0x57b5e7.addTest;
            delete _0x57b5e7.addAsyncTest;
            for (var _0x4be106 = 0; _0x4be106 < _0x371cc3._q.length; _0x4be106++) {
              _0x371cc3._q[_0x4be106]();
            }
            _0xc66f72.Modernizr = _0x371cc3;
          })(window, document);
          return Modernizr.websockets && Modernizr.canvas && Modernizr.canvastext;
        }
        document.getElementById("game-wrap").style.display = "block";
        if (!_0x3860f9()) {
          document.getElementById("error-view").style.display = "block";
          return;
        }
        (function () {
          function _0x1859a9() {
            return _0x4bb95a;
          }
          var _0x30c50f = {};
          var _0x32fbd9 = {};
          var _0x2816c6 = {
            a: {
              r: window.runtimeHash,
              b: "https://gateway.wormate.io",
              c: "https://resources.wormate.io",
              d: "/images/linelogo-valday2023.png",
              e: "/images/guest-avatar-summer2024.png",
              f: "/images/confetti-valday2023.png",
              g: "/images/bg-event-pattern-valday2023.png"
            }
          };
          _0x2816c6.a.i = function () {
            var _0x561f31 = window.I18N_LANG;
            _0x561f31 ||= "en";
            return _0x561f31;
          }();
          _0x2816c6.a.j = function () {
            var _0x31c067 = undefined;
            switch (_0x2816c6.a.i) {
              case "uk":
                _0x31c067 = "uk_UA";
                break;
              case "de":
                _0x31c067 = "de_DE";
                break;
              case "fr":
                _0x31c067 = "fr_FR";
                break;
              case "es":
                _0x31c067 = "es_ES";
                break;
              default:
                _0x31c067 = "en_US";
            }
            return _0x31c067;
          }();
          moment.locale(_0x2816c6.a.j);
          var _0x21984d = function () {
            return {
              Container: PIXI.Container,
              BaseTexture: PIXI.BaseTexture,
              Texture: PIXI.Texture,
              Renderer: PIXI.Renderer,
              Graphics: PIXI.Graphics,
              Shader: PIXI.Shader,
              Rectangle: PIXI.Rectangle,
              Sprite: PIXI.Sprite,
              Text: PIXI.Text,
              Geometry: PIXI.Geometry,
              Mesh: PIXI.Mesh,
              v: {
                z: PIXI.BLEND_MODES.ADD,
                A: PIXI.BLEND_MODES.SCREEN,
                B: PIXI.BLEND_MODES.MULTIPLY
              },
              C: {
                D: PIXI.WRAP_MODES.REPEAT
              }
            };
          }();
          _0x32fbd9.F = 6.283185307179586;
          _0x32fbd9.G = Math.PI;
          _0x2816c6.H = function (_0x1be630) {
            return window.I18N_MESSAGES[_0x1be630];
          };
          _0x2816c6.I = function (_0xd6c554) {
            if (_0xd6c554[_0x2816c6.a.i]) {
              return _0xd6c554[_0x2816c6.a.i];
            } else if (_0xd6c554.en) {
              return _0xd6c554.en;
            } else {
              return _0xd6c554.x;
            }
          };
          _0x2816c6.J = function (_0x14dcbc) {
            var _0x3d28fe = (Math.floor(_0x14dcbc) % 60).toString();
            var _0x4d46fa = (Math.floor(_0x14dcbc / 60) % 60).toString();
            var _0x5f582a = (Math.floor(_0x14dcbc / 3600) % 24).toString();
            var _0x3245e4 = Math.floor(_0x14dcbc / 86400).toString();
            var _0x5ab5f4 = _0x2816c6.H("util.time.days");
            var _0x180e4f = _0x2816c6.H("util.time.hours");
            var _0x4b6c16 = _0x2816c6.H("util.time.min");
            var _0xd14e96 = _0x2816c6.H("util.time.sec");
            if (_0x3245e4 > 0) {
              return _0x3245e4 + " " + _0x5ab5f4 + " " + _0x5f582a + " " + _0x180e4f + " " + _0x4d46fa + " " + _0x4b6c16 + " " + _0x3d28fe + " " + _0xd14e96;
            } else if (_0x5f582a > 0) {
              return _0x5f582a + " " + _0x180e4f + " " + _0x4d46fa + " " + _0x4b6c16 + " " + _0x3d28fe + " " + _0xd14e96;
            } else if (_0x4d46fa > 0) {
              return _0x4d46fa + " " + _0x4b6c16 + " " + _0x3d28fe + " " + _0xd14e96;
            } else {
              return _0x3d28fe + " " + _0xd14e96;
            }
          };
          _0x2816c6.K = function (_0x1d87a0) {
            if (_0x1d87a0.includes("href")) {
              return _0x1d87a0.replaceAll("href", "target=\"_black\" href");
            } else {
              return _0x1d87a0;
            }
          };
          _0x2816c6.L = function (_0x571e8d, _0x5e8f6b, _0xd8050c, _0x10315c) {
            var _0x3f06df = document.createElement("script");
            var _0x528ed0 = true;
            if (_0x4bcf76(_0x5e8f6b) !== "undefined" && _0x5e8f6b !== null) {
              if (_0x4bcf76(_0x5e8f6b.id) !== "undefined") {
                _0x3f06df.id = _0x5e8f6b.id;
              }
              if (_0x4bcf76(_0x5e8f6b.async) !== "undefined" && _0x5e8f6b.async) {
                _0x3f06df.async = "async";
              }
              if (_0x4bcf76(_0x5e8f6b.defer) !== "undefined" && _0x5e8f6b.defer) {
                _0x3f06df.defer = "defer";
              }
              if (_0x4bcf76(_0x5e8f6b.crossorigin) !== "undefined") {
                _0x3f06df.crossorigin = _0x5e8f6b.crossorigin;
              }
            }
            _0x3f06df.type = _0x3f06df.type == _0x10315c ? "module" : "text/javascript";
            _0x3f06df.src = _0x571e8d;
            if (_0xd8050c) {
              _0x3f06df.onload = _0x3f06df.onreadystatechange = function () {
                _0x528ed0 = false;
                try {
                  _0xd8050c();
                } catch (_0xaeee98) {}
                _0x3f06df.onload = _0x3f06df.onreadystatechange = null;
              };
            }
            (document.head || document.getElementsByTagName("head")[0]).appendChild(_0x3f06df);
          };
          _0x2816c6.M = function (_0x147920, _0x4791b4) {
            var _0x46b2e5 = _0x4791b4;
            _0x46b2e5.prototype = Object.create(_0x147920.prototype);
            _0x46b2e5.prototype.constructor = _0x46b2e5;
            _0x46b2e5.parent = _0x147920;
            return _0x46b2e5;
          };
          _0x2816c6.N = function (_0x44e185) {
            _0x44e185 %= _0x32fbd9.F;
            if (_0x44e185 < 0) {
              return _0x44e185 + _0x32fbd9.F;
            } else {
              return _0x44e185;
            }
          };
          _0x2816c6.O = function (_0x186000, _0x2dcac8, _0x18705b) {
            return _0x2816c6.P(_0x18705b, _0x186000, _0x2dcac8);
          };
          _0x2816c6.P = function (_0x2d90ed, _0x5e35f0, _0x5e09e3) {
            if (_0x2d90ed > _0x5e09e3) {
              return _0x5e09e3;
            } else if (_0x2d90ed < _0x5e35f0) {
              return _0x5e35f0;
            } else if (Number.isFinite(_0x2d90ed)) {
              return _0x2d90ed;
            } else {
              return (_0x5e35f0 + _0x5e09e3) * 0.5;
            }
          };
          _0x2816c6.Q = function (_0x301fd5, _0x40d541, _0x1e0872, _0x2ee63f) {
            if (_0x40d541 > _0x301fd5) {
              return Math.min(_0x40d541, _0x301fd5 + _0x1e0872 * _0x2ee63f);
            } else {
              return Math.max(_0x40d541, _0x301fd5 - _0x1e0872 * _0x2ee63f);
            }
          };
          _0x2816c6.R = function (_0x4ad0b0, _0x795a27, _0x3238bb, _0x1492b7, _0x5a0a6c) {
            return _0x795a27 + (_0x4ad0b0 - _0x795a27) * Math.pow(1 - _0x1492b7, _0x3238bb / _0x5a0a6c);
          };
          _0x2816c6.S = function (_0x26ac48, _0x59fce2, _0x1021f8) {
            return _0x26ac48 - (_0x26ac48 - _0x59fce2) * _0x1021f8;
          };
          _0x2816c6.T = function (_0x115dab, _0x448c66, _0x3547b6, _0x58f4d4) {
            var _0x4fd75d = _0x3547b6;
            var _0x277e16 = _0x448c66;
            var _0x3c56dc = _0x448c66 + _0x58f4d4;
            if (_0x115dab == null) {
              throw new TypeError("this is null or not defined");
            }
            var _0x42b68f = _0x115dab.length >>> 0;
            var _0x57a7e3 = _0x4fd75d >> 0;
            var _0x8adc86 = _0x57a7e3 < 0 ? Math.max(_0x42b68f + _0x57a7e3, 0) : Math.min(_0x57a7e3, _0x42b68f);
            var _0x559d6c = _0x277e16 >> 0;
            var _0x25e119 = _0x559d6c < 0 ? Math.max(_0x42b68f + _0x559d6c, 0) : Math.min(_0x559d6c, _0x42b68f);
            var _0x95e15d = _0x3c56dc === undefined ? _0x42b68f : _0x3c56dc >> 0;
            var _0x507296 = _0x95e15d < 0 ? Math.max(_0x42b68f + _0x95e15d, 0) : Math.min(_0x95e15d, _0x42b68f);
            var _0x32767d = Math.min(_0x507296 - _0x25e119, _0x42b68f - _0x8adc86);
            var _0x1468a0 = 1;
            for (_0x25e119 < _0x8adc86 && _0x8adc86 < _0x25e119 + _0x32767d && (_0x1468a0 = -1, _0x25e119 += _0x32767d - 1, _0x8adc86 += _0x32767d - 1); _0x32767d > 0;) {
              if (_0x25e119 in _0x115dab) {
                _0x115dab[_0x8adc86] = _0x115dab[_0x25e119];
              } else {
                delete _0x115dab[_0x8adc86];
              }
              _0x25e119 += _0x1468a0;
              _0x8adc86 += _0x1468a0;
              _0x32767d--;
            }
            return _0x115dab;
          };
          _0x2816c6.U = function (_0xbda5d3) {
            if (_0xbda5d3.parent != null) {
              _0xbda5d3.parent.removeChild(_0xbda5d3);
            }
          };
          _0x2816c6.V = function (_0x57383b, _0x29673c) {
            return _0x57383b + (_0x29673c - _0x57383b) * Math.random();
          };
          _0x2816c6.W = function (_0x2e5eb9) {
            return _0x2e5eb9[parseInt(Math.random() * _0x2e5eb9.length)];
          };
          _0x2816c6.X = function () {
            return Math.random().toString(36).substring(2, 15);
          };
          _0x2816c6.Y = function (_0x278b5e, _0x2b9a8f, _0xfb79c8) {
            var _0x43dea1 = (1 - Math.abs(_0xfb79c8 * 2 - 1)) * _0x2b9a8f;
            var _0x15eaa3 = _0x43dea1 * (1 - Math.abs(_0x278b5e / 60 % 2 - 1));
            var _0xee36a2 = _0xfb79c8 - _0x43dea1 / 2;
            if (_0x278b5e >= 0 && _0x278b5e < 60) {
              return [_0xee36a2 + _0x43dea1, _0xee36a2 + _0x15eaa3, _0xee36a2 + 0];
            } else if (_0x278b5e >= 60 && _0x278b5e < 120) {
              return [_0xee36a2 + _0x15eaa3, _0xee36a2 + _0x43dea1, _0xee36a2 + 0];
            } else if (_0x278b5e >= 120 && _0x278b5e < 180) {
              return [_0xee36a2 + 0, _0xee36a2 + _0x43dea1, _0xee36a2 + _0x15eaa3];
            } else if (_0x278b5e >= 180 && _0x278b5e < 240) {
              return [_0xee36a2 + 0, _0xee36a2 + _0x15eaa3, _0xee36a2 + _0x43dea1];
            } else if (_0x278b5e >= 240 && _0x278b5e < 300) {
              return [_0xee36a2 + _0x15eaa3, _0xee36a2 + 0, _0xee36a2 + _0x43dea1];
            } else {
              return [_0xee36a2 + _0x43dea1, _0xee36a2 + 0, _0xee36a2 + _0x15eaa3];
            }
          };
          _0x2816c6.Z = function (_0x86b9c, _0x10c88b, _0x363f41) {
            $.get(_0x86b9c).fail(_0x10c88b).done(_0x363f41);
          };
          _0x2816c6.$ = function (_0x5b4f08, _0x43e3a2, _0x590e6d, _0x2765bc) {
            $.ajax({
              type: "GET",
              url: _0x5b4f08,
              xhrFields: {
                responseType: "arraybuffer",
                onprogress: function _0x5a828a(_0x291057) {
                  if (_0x291057.lengthComputable) {
                    _0x2765bc(_0x291057.loaded / _0x291057.total * 100);
                  }
                }
              }
            }).fail(_0x43e3a2).done(_0x590e6d);
          };
          _0x2816c6._ = function (_0x1d7fc3, _0x1b076e) {
            for (var _0x391cd4 in _0x1d7fc3) {
              if (_0x1d7fc3.hasOwnProperty(_0x391cd4)) {
                _0x1b076e(_0x391cd4, _0x1d7fc3[_0x391cd4]);
              }
            }
          };
          _0x2816c6.aa = function (_0x2b4d95) {
            for (var _0x1e9946 = _0x2b4d95.length - 1; _0x1e9946 > 0; _0x1e9946--) {
              var _0xe6ce0f = Math.floor(Math.random() * (_0x1e9946 + 1));
              var _0x5e681f = _0x2b4d95[_0x1e9946];
              _0x2b4d95[_0x1e9946] = _0x2b4d95[_0xe6ce0f];
              _0x2b4d95[_0xe6ce0f] = _0x5e681f;
            }
            return _0x2b4d95;
          };
          (function () {
            var _0x2288ac = 0;
            try {
              DataView.prototype.ba = function (_0x46d6cd) {
                try {
                  _0x2288ac = _0x46d6cd;
                  return this.getInt8(_0x46d6cd);
                } catch (_0x4f6e24) {
                  console.log(_0x2288ac);
                  _0x4bb95a.dh.mq.close();
                  return 0;
                }
              };
              DataView.prototype.ca = function (_0x6e27ca) {
                try {
                  _0x2288ac = _0x6e27ca;
                  return this.getInt16(_0x6e27ca);
                } catch (_0x19e8cc) {
                  console.log(_0x2288ac);
                  _0x4bb95a.dh.mq.close();
                  return 0;
                }
              };
              DataView.prototype.da = function (_0x50bf6c) {
                try {
                  _0x2288ac = _0x50bf6c;
                  return this.getInt32(_0x50bf6c);
                } catch (_0x2c39a5) {
                  console.log(_0x2288ac);
                  _0x4bb95a.dh.mq.close();
                  return 0;
                }
              };
              DataView.prototype.ea = function (_0x2dc806) {
                try {
                  _0x2288ac = _0x2dc806;
                  return this.getFloat32(_0x2dc806);
                } catch (_0x5789b1) {
                  console.log(_0x2288ac);
                  _0x4bb95a.dh.mq.close();
                  return 0;
                }
              };
              DataView.prototype.fa = function (_0x31b28b) {
                try {
                  _0x2288ac = _0x31b28b;
                  return this.getFloat64(_0x31b28b);
                } catch (_0x54bc52) {
                  console.log(_0x2288ac);
                  _0x4bb95a.dh.mq.close();
                  return 0;
                }
              };
            } catch (_0x1429ed) {
              console.log(_0x2288ac);
              console.error("Error adding methods to DataView prototype:", _0x1429ed);
            }
          })();
          _0x2816c6.ga = function () {
            function _0x16507c() {
              if (URLSERV_WORMWORLD) {
                try {
                  ga("send", "event", "antiadblocker", window.runtimeHash + "_complete");
                } catch (_0x2bf4df) {}
                _0x40bce5(true);
              }
            }
            var _0x1f66c1 = false;
            var _0x40bce5 = function _0xb96c80() {};
            var _0x4a2397 = {};
            var _0x245fe6 = "JDHnkHtYwyXyVgG9";
            $("#adbl-continue").click(function () {
              $("#" + _0x245fe6).fadeOut(500);
              _0x40bce5(false);
            });
            _0x4a2397.ha = function (_0x138b1b) {
              _0x40bce5 = _0x138b1b;
              if (!_0x1f66c1) {
                try {
                  aiptag.cmd.player.push(function () {
                    aiptag.adplayer = new aipPlayer({
                      AD_WIDTH: 960,
                      AD_HEIGHT: 540,
                      AD_FULLSCREEN: true,
                      AD_CENTERPLAYER: false,
                      LOADING_TEXT: "loading advertisement",
                      PREROLL_ELEM: function _0x3956db() {
                        return document.getElementById("1eaom01c3pxu9wd3");
                      },
                      AIP_COMPLETE: function _0x47a309(_0x4078a0) {
                        _0x40bce5(true);
                        $("#1eaom01c3pxu9wd3").hide();
                        $("#" + _0x245fe6).hide();
                        try {
                          ga("send", "event", "preroll", window.runtimeHash + "_complete");
                        } catch (_0x155bd8) {}
                      },
                      AIP_REMOVE: function _0x45788d() {}
                    });
                  });
                  _0x1f66c1 = true;
                } catch (_0x2eb968) {}
              }
            };
            _0x4a2397.ia = function () {
              try {
                ga("send", "event", "antiadblocker", window.runtimeHash + "_start");
              } catch (_0x1e4d63) {}
              _0x16507c();
            };
            return _0x4a2397;
          };
          _0x2816c6.ja = function (_0x163e0a, _0x1f9878) {
            var _0x27842c = $("#" + _0x163e0a);
            var _0x1497e4 = _0x1f9878;
            var _0x5013a5 = {};
            var _0x2e9f79 = false;
            _0x5013a5.ha = function () {
              if (!_0x2e9f79) {
                _0x27842c.empty();
                _0x27842c.append("<div id='" + _0x1497e4 + "'></div>");
                try {
                  try {
                    ga("send", "event", "banner", window.runtimeHash + "_display");
                  } catch (_0x4e2754) {}
                  aiptag.cmd.display.push(function () {
                    aipDisplayTag.display(_0x1497e4);
                  });
                  _0x2e9f79 = true;
                } catch (_0x375b27) {}
              }
            };
            _0x5013a5.ka = function () {
              try {
                try {
                  ga("send", "event", "banner", window.runtimeHash + "_refresh");
                } catch (_0x374899) {}
                aiptag.cmd.display.push(function () {
                  aipDisplayTag.display(_0x1497e4);
                });
              } catch (_0x2cfc6d) {}
            };
            return _0x5013a5;
          };
          _0x30c50f.la = function () {
            function _0x1c8580(_0x3555c4, _0x38a7d9, _0x50024a, _0x299cea, _0x1181df, _0x4584c4, _0x4f5a08, _0x333198, _0x351fd5, _0x22f700, _0x2223ec) {
              this.ma = _0x3555c4;
              this.na = _0x38a7d9;
              this.oa = null;
              this.pa = false;
              this.qa = _0x50024a;
              this.ra = _0x299cea;
              this.sa = _0x1181df;
              this.ta = _0x4584c4;
              this.ua = _0x4f5a08 || (_0x351fd5 || _0x1181df) / 2;
              this.va = _0x333198 || (_0x22f700 || _0x4584c4) / 2;
              this.wa = _0x351fd5 || _0x1181df;
              this.xa = _0x22f700 || _0x4584c4;
              this.ya = 0.5 - (this.ua - this.wa * 0.5) / this.sa;
              this.za = 0.5 - (this.va - this.xa * 0.5) / this.ta;
              this.Aa = this.sa / this.wa;
              if (_0x2223ec) {
                this.ev = _0x2223ec;
              } else {
                null;
              }
              this.Ba = this.ta / this.xa;
            }
            _0x1c8580.Ca = function () {
              return new _0x1c8580("", null, 0, 0, 0, 0, 0, 0, 0, 0);
            };
            _0x1c8580.Da = function (_0x441317, _0x5a4ab3, _0x4a4457, _0x1dd72a) {
              return new _0x1c8580(_0x441317, _0x5a4ab3, _0x4a4457.x, _0x4a4457.y, _0x4a4457.w, _0x4a4457.h, _0x4a4457.px, _0x4a4457.py, _0x4a4457.pw, _0x4a4457.ph, _0x1dd72a);
            };
            _0x1c8580.prototype.Ea = function () {
              if (this.pa) {
                return this.oa;
              }
              if (this.na != null) {
                this.oa = new _0x21984d.Texture(this.na, new _0x21984d.Rectangle(this.qa, this.ra, this.sa, this.ta));
              }
              this.pa = true;
              return this.oa;
            };
            _0x1c8580.prototype.Fa = function () {
              if (this.oa != null) {
                this.oa.destroy();
              }
            };
            return _0x1c8580;
          }();
          _0x30c50f.Ga = function () {
            function _0xee97d3(_0x486e31, _0x4f1f6c, _0x273e81, _0x4920ed, _0x493f10, _0x1c5048, _0x5731a0, _0x56ffd9, _0x2a2201, _0x172ae0, _0x135d6f, _0x44dc04, _0x222936, _0x51f378, _0x1d4375, _0x349515, _0x1bc517, _0x31042a) {
              this.Ha = _0x486e31;
              this.Ia = _0x4f1f6c;
              this.Ja = _0x273e81;
              this.Ka = _0x4920ed;
              this.La = _0x493f10;
              this.Ma = _0x1c5048;
              this.Na = _0x5731a0;
              this.Oa = _0x56ffd9;
              this.Pa = _0x2a2201;
              this.Qa = _0x172ae0;
              this.Ra = _0x135d6f;
              this.Sa = _0x44dc04;
              this.Ta = _0x222936;
              this.Ua = _0x51f378;
              this.Va = _0x1d4375;
              this.Wa = _0x349515;
              this.Xa = _0x1bc517;
              this.Ya = _0x31042a;
            }
            _0xee97d3.prototype.Fa = function () {
              for (var _0x587116 = 0; _0x587116 < this.Ha.length; _0x587116++) {
                this.Ha[_0x587116].dispose();
                this.Ha[_0x587116].destroy();
              }
              this.Ha = [];
              for (var _0x33b4d2 = 0; _0x33b4d2 < this.Ia.length; _0x33b4d2++) {
                this.Ia[_0x33b4d2].Fa();
              }
              this.Ia = [];
            };
            _0xee97d3.Ca = function () {
              var _0x1aa483 = new _0xee97d3.Za(_0x30c50f._a.$a, _0x30c50f._a.$a);
              var _0x5b8ba6 = new _0xee97d3.ab("#ffffff", [_0x30c50f._a.$a], [_0x30c50f._a.$a]);
              return new _0xee97d3([], [], {}, _0x1aa483, {}, new _0xee97d3.bb(_0x30c50f._a.$a), {}, _0x5b8ba6, {}, new _0xee97d3.cb("", _0x5b8ba6, _0x1aa483), {}, new _0xee97d3.db([_0x30c50f._a.$a]), {}, new _0xee97d3.db([_0x30c50f._a.$a]), {}, new _0xee97d3.db([_0x30c50f._a.$a]), {}, new _0xee97d3.db([_0x30c50f._a.$a]));
            };
            _0xee97d3.eb = function (_0x3527ca, _0x3c183b, _0x29c834, _0x467208) {
              var _0x3b0078 = new _0xee97d3.Za(_0x30c50f._a.$a, _0x30c50f._a.$a);
              var _0x70b061 = new _0xee97d3.ab("#ffffff", [_0x3527ca], [_0x3c183b]);
              return new _0xee97d3([], [], {}, _0x3b0078, {}, new _0xee97d3.bb(_0x30c50f._a.$a), {}, _0x70b061, {}, new _0xee97d3.cb("", _0x70b061, _0x3b0078), {}, new _0xee97d3.db([_0x29c834]), {}, new _0xee97d3.db([_0x467208]), {}, new _0xee97d3.db([_0x30c50f._a.$a]), {}, new _0xee97d3.db([_0x30c50f._a.$a]));
            };
            _0xee97d3.fb = function (_0x19ff60, _0x193399, _0x5e2d61, _0x4841a1) {
              var _0x52e30d = {};
              _0x2816c6._(_0x19ff60.colorDict, function (_0x4cd7e2, _0x517871) {
                _0x52e30d[_0x4cd7e2] = "#" + _0x517871;
              });
              var _0x2c0249 = {};
              for (var _0x43049d = 0; _0x43049d < _0x19ff60.skinArrayDict.length; _0x43049d++) {
                var _0x36b1d4 = _0x19ff60.skinArrayDict[_0x43049d];
                _0x2c0249[_0x36b1d4.id] = new _0xee97d3.ab(_0x52e30d[_0x36b1d4.prime], _0x36b1d4.base.map(function (_0x17de9c) {
                  return _0x193399[_0x17de9c];
                }), _0x36b1d4.glow.map(function (_0x3787d6, _0x5a5031) {
                  return _0x193399[_0x3787d6];
                }));
                if (_0x36b1d4.glow[0] == "a_trans") {
                  _0x2c0249[_0x36b1d4.id].vbb = _0x193399.a_black;
                }
              }
              var _0x2e65b1 = undefined;
              var _0x5bdfe9 = _0x19ff60.skinUnknown;
              try {
                _0x2e65b1 = new _0xee97d3.ab(_0x52e30d[_0x5bdfe9.prime], _0x5bdfe9.base.map(function (_0x2874be) {
                  return _0x193399[_0x2874be];
                }), _0x5bdfe9.glow.map(function (_0x5518b8) {
                  return _0x193399[_0x5518b8];
                }));
              } catch (_0x1ed3b9) {}
              var _0x523fd8 = {};
              _0x2816c6._(_0x19ff60.eyesDict, function (_0x5acc51, _0x5ab3e2) {
                var _0x156ca5 = parseInt(_0x5acc51);
                _0x523fd8[_0x156ca5] = new _0xee97d3.db(_0x5ab3e2.base.map(function (_0x540ff5) {
                  return _0x193399[_0x540ff5.region];
                }));
              });
              var _0x56b57c = new _0xee97d3.db(_0x19ff60.eyesUnknown.base.map(function (_0x417a94) {
                return _0x193399[_0x417a94.region];
              }));
              var _0x17b21e = {};
              _0x2816c6._(_0x19ff60.mouthDict, function (_0x5b4e4c, _0x14be8a) {
                var _0x58b3e5 = parseInt(_0x5b4e4c);
                _0x17b21e[_0x58b3e5] = new _0xee97d3.db(_0x14be8a.base.map(function (_0x3f1524) {
                  return _0x193399[_0x3f1524.region];
                }));
              });
              var _0x3a9f8e = new _0xee97d3.db(_0x19ff60.mouthUnknown.base.map(function (_0x31c8a7) {
                return _0x193399[_0x31c8a7.region];
              }));
              var _0x3768f0 = {};
              _0x2816c6._(_0x19ff60.hatDict, function (_0x248304, _0x4f29b8) {
                var _0x1d6446 = parseInt(_0x248304);
                _0x3768f0[_0x1d6446] = new _0xee97d3.db(_0x4f29b8.base.map(function (_0xade29a) {
                  return _0x193399[_0xade29a.region];
                }));
              });
              var _0x5eb09c = new _0xee97d3.db(_0x19ff60.hatUnknown.base.map(function (_0x447924) {
                return _0x193399[_0x447924.region];
              }));
              var _0x242312 = {};
              _0x2816c6._(_0x19ff60.glassesDict, function (_0xfe334c, _0x291ec8) {
                var _0x47df55 = parseInt(_0xfe334c);
                _0x242312[_0x47df55] = new _0xee97d3.db(_0x291ec8.base.map(function (_0x1ca312) {
                  return _0x193399[_0x1ca312.region];
                }));
              });
              var _0x5b5625 = new _0xee97d3.db(_0x19ff60.glassesUnknown.base.map(function (_0x5d0220) {
                return _0x193399[_0x5d0220.region];
              }));
              var _0x1de56e = {};
              _0x2816c6._(_0x19ff60.portionDict, function (_0xde2892, _0x12d2dc) {
                _0xde2892 = parseInt(_0xde2892);
                _0x1de56e[_0xde2892] = new _0xee97d3.Za(_0x193399[_0x12d2dc.base], _0x193399[_0x12d2dc.glow]);
              });
              var _0x2d403b = undefined;
              var _0x397c5e = _0x19ff60.portionUnknown;
              _0x2d403b = new _0xee97d3.Za(_0x193399[_0x397c5e.base], _0x193399[_0x397c5e.glow]);
              var _0x1e7c9d = {};
              _0x2816c6._(_0x19ff60.abilityDict, function (_0x2c5026, _0x1d1303) {
                _0x2c5026 = parseInt(_0x2c5026);
                _0x1e7c9d[_0x2c5026] = new _0xee97d3.bb(_0x193399[_0x1d1303.base]);
              });
              var _0x524f1e = undefined;
              var _0xc1a098 = _0x19ff60.abilityUnknown;
              _0x524f1e = new _0xee97d3.bb(_0x193399[_0xc1a098.base]);
              var _0x1b8bb7 = {};
              _0x2816c6._(_0x19ff60.teamDict, function (_0x3699e0, _0x210b0c) {
                _0x3699e0 = parseInt(_0x3699e0);
                _0x1b8bb7[_0x3699e0] = new _0xee97d3.cb(_0x210b0c.title, new _0xee97d3.ab(_0x52e30d[_0x210b0c.skin.prime], null, _0x210b0c.skin.glow.map(function (_0x3e070c) {
                  return _0x193399[_0x3e070c];
                })), new _0xee97d3.Za(null, _0x193399[_0x210b0c.portion.glow]));
              });
              var _0x4311ff = new _0xee97d3.cb({}, _0x2e65b1, _0x2d403b);
              return new _0xee97d3(_0x5e2d61, _0x4841a1, _0x1de56e, _0x2d403b, _0x1e7c9d, _0x524f1e, _0x2c0249, _0x2e65b1, _0x1b8bb7, _0x4311ff, _0x523fd8, _0x56b57c, _0x17b21e, _0x3a9f8e, _0x3768f0, _0x5eb09c, _0x242312, _0x5b5625);
            };
            _0xee97d3.prototype.gb = function (_0x3bf3e1) {
              var _0x42f18e = _0x2816c6.aa(Object.keys(this.Na)).slice(0, _0x3bf3e1);
              var _0x3914c7 = _0x2816c6.aa(Object.keys(this.Ra)).slice(0, _0x3bf3e1);
              var _0x417504 = _0x2816c6.aa(Object.keys(this.Ta)).slice(0, _0x3bf3e1);
              var _0x4d50b4 = _0x2816c6.aa(Object.keys(this.Va)).slice(0, _0x3bf3e1);
              var _0x564176 = _0x2816c6.aa(Object.keys(this.Xa)).slice(0, _0x3bf3e1);
              var _0x57f027 = [];
              for (var _0x717dca = 0; _0x717dca < _0x3bf3e1; _0x717dca++) {
                var _0x2fb741 = _0x42f18e.length > 0 ? _0x42f18e[_0x717dca % _0x42f18e.length] : 0;
                var _0xaf2304 = _0x3914c7.length > 0 ? _0x3914c7[_0x717dca % _0x3914c7.length] : 0;
                var _0x128071 = _0x417504.length > 0 ? _0x417504[_0x717dca % _0x417504.length] : 0;
                var _0x3472c3 = _0x4d50b4.length > 0 ? _0x4d50b4[_0x717dca % _0x4d50b4.length] : 0;
                var _0x2916e9 = _0x564176.length > 0 ? _0x564176[_0x717dca % _0x564176.length] : 0;
                _0x57f027.push(new _0x30c50f.hb(_0x2fb741, _0xaf2304, _0x128071, _0x3472c3, _0x2916e9));
              }
              return _0x57f027;
            };
            _0xee97d3.prototype.ib = function (_0x421ebf) {
              if (this.Na.hasOwnProperty(_0x421ebf)) {
                return this.Na[_0x421ebf];
              } else {
                return this.Oa;
              }
            };
            _0xee97d3.prototype.jb = function (_0x399d53) {
              if (this.Pa.hasOwnProperty(_0x399d53)) {
                return this.Pa[_0x399d53];
              } else {
                return this.Qa;
              }
            };
            _0xee97d3.prototype.kb = function (_0x58912d) {
              if (this.Ra.hasOwnProperty(_0x58912d)) {
                return this.Ra[_0x58912d];
              } else {
                return this.Sa;
              }
            };
            _0xee97d3.prototype.lb = function (_0x16f518) {
              if (this.Ta.hasOwnProperty(_0x16f518)) {
                return this.Ta[_0x16f518];
              } else {
                return this.Ua;
              }
            };
            _0xee97d3.prototype.mb = function (_0x4d61b8) {
              if (this.Xa.hasOwnProperty(_0x4d61b8)) {
                return this.Xa[_0x4d61b8];
              } else {
                return this.Ya;
              }
            };
            _0xee97d3.prototype.nb = function (_0xf4bdde) {
              if (this.Va.hasOwnProperty(_0xf4bdde)) {
                return this.Va[_0xf4bdde];
              } else {
                return this.Wa;
              }
            };
            _0xee97d3.prototype.ob = function (_0x2b251d) {
              if (this.Ja.hasOwnProperty(_0x2b251d)) {
                return this.Ja[_0x2b251d];
              } else {
                return this.Ka;
              }
            };
            _0xee97d3.prototype.pb = function (_0x35651f) {
              if (this.La.hasOwnProperty(_0x35651f)) {
                return this.La[_0x35651f];
              } else {
                return this.Ma;
              }
            };
            _0xee97d3.cb = function () {
              function _0x4ec390(_0x44107, _0x18a18b, _0x2c26c8) {
                this.qb = _0x44107;
                this.rb = _0x18a18b;
                this.sb = _0x2c26c8;
              }
              return _0x4ec390;
            }();
            _0xee97d3.ab = function () {
              function _0x530fa7(_0x3cb837, _0x181668, _0x1b4ed1) {
                this.tb = _0x3cb837;
                this.ub = _0x181668;
                this.vb = _0x1b4ed1;
              }
              return _0x530fa7;
            }();
            _0xee97d3.db = function () {
              function _0x1d2028(_0x27753d) {
                this.ub = _0x27753d;
              }
              return _0x1d2028;
            }();
            _0xee97d3.Za = function () {
              function _0x582ebe(_0x1273e5, _0x6a1dac) {
                this.ub = _0x1273e5;
                this.vb = _0x6a1dac;
              }
              return _0x582ebe;
            }();
            _0xee97d3.bb = function () {
              function _0x492db7(_0x1b0d04) {
                this.ub = _0x1b0d04;
              }
              return _0x492db7;
            }();
            return _0xee97d3;
          }();
          _0x30c50f._a = function () {
            function _0xd8ba9d() {
              var _0x29d548 = _0x21984d.BaseTexture.from("/images/wear-ability.png");
              for (var _0x462f79 = 1; _0x462f79 < 10; _0x462f79++) {
                this["vb" + _0x462f79] = new _0x30c50f.la("emoji_" + _0x462f79, _0x29d548, 4, 4, 146, 146, 63.5, 63.5, 128, 128);
              }
              this.wb = new _0x30c50f.la("magnet_ability", _0x29d548, 158, 86, 67, 124, 148, 63.5, 128, 128);
              this.xb = new _0x30c50f.la("velocity_ability", _0x29d548, 158, 4, 87, 74, 203, 63.5, 128, 128);
              this.yb = new _0x30c50f.la("flex_ability", _0x29d548, 4, 4, 146, 146, 63.5, 63.5, 128, 128);
              var _0x3a78e0 = _0x21984d.BaseTexture.from("https://wormx.store/images/img/zigzagability1.png");
              this.pwrFlex1 = new _0x30c50f.la("flex_ability", _0x3a78e0, 158, 4, 87, 74, 203, 63.5, 128, 128);
              var _0x166409 = _0x21984d.BaseTexture.from("https://wormx.store/images/img/zigzagability2.png");
              this.pwrFlex2 = new _0x30c50f.la("flex_ability", _0x166409, 156, 140, 87, 60, 170, 128.5, 128, 128);
              this.pwrFlex3 = new _0x30c50f.la("flex_ability", _0x166409, 156, 4, 87, 74, 285, 63.5, 128, 128);
              var _0x462f79 = _0x21984d.BaseTexture.from("/images/def-look.png");
              var _0x3e706f = new _0x30c50f.la("def_eyes", _0x462f79, 0, 0, 42, 80, 75, 64, 128, 128);
              var _0x28700a = new _0x30c50f.la("def_mouth", _0x462f79, 46, 0, 20, 48, 109, 63, 128, 128);
              var _0x22cc37 = new _0x30c50f.la("def_skin_glow", _0x462f79, 70, 0, 32, 32, 0, 0, 0, 0);
              var _0xecc1e5 = new _0x30c50f.la("def_skin_base", _0x462f79, 46, 52, 64, 64, 0, 0, 0, 0);
              var _0x199683 = _0x30c50f.Ga.eb(_0xecc1e5, _0x22cc37, _0x3e706f, _0x28700a);
              _wwc.mySkin = _0x199683;
              this.zb = new _0x30c50f.Ab({}, _0x199683);
              this.Bb = -10000;
              this.Cb = -10000;
              this.Db = function () {
                var _0x724350 = window.document.createElement("canvas");
                _0x724350.width = 80;
                _0x724350.height = 80;
                return {
                  Eb: _0x724350,
                  Fb: _0x724350.getContext("2d"),
                  oa: new _0x21984d.Texture(_0x21984d.BaseTexture.from(_0x724350))
                };
              }();
              this.Gb = null;
              this.Hb = [];
            }
            _0xd8ba9d.$a = _0x30c50f.la.Ca();
            _0xd8ba9d.prototype.ha = function () {};
            _0xd8ba9d.prototype.Ib = function (_0x546371, _0x5aa710, _0x3651df) {
              var _0x3de2ac = this;
              var _0xec3a11 = this.zb.Jb();
              if (_0xec3a11 > 0 && Date.now() - this.Bb < 1200000) {
                if (_0x546371 != null) {
                  _0x546371();
                }
                return;
              }
              if (this.Gb != null && !this.Gb.Kb()) {
                if (Date.now() - this.Bb < 300000) {
                  if (_0x546371 != null) {
                    _0x546371();
                  }
                  return;
                }
                this.Gb.Lb();
                this.Gb = null;
              }
              var _0x191ff7 = new _0x30c50f.Mb(_0xec3a11);
              _0x191ff7.Nb(function (_0x507cb7, _0x4e7f43) {
                if (_0x191ff7 === _0x3de2ac.Gb && _0x3651df != null) {
                  _0x3651df(_0x507cb7, _0x4e7f43);
                }
              });
              _0x191ff7.Ob(function (_0x6cb1ad) {
                if (_0x191ff7 === _0x3de2ac.Gb && _0x5aa710 != null) {
                  _0x5aa710(_0x6cb1ad);
                }
              });
              _0x191ff7.Pb(function () {
                if (_0x191ff7 === _0x3de2ac.Gb && _0x5aa710 != null) {
                  _0x5aa710(new Error());
                }
              });
              _0x191ff7.Qb(function () {
                if (_0x191ff7 === _0x3de2ac.Gb && _0x546371 != null) {
                  _0x546371();
                }
              });
              _0x191ff7.Rb(function (_0x20c503) {
                if (_0x191ff7 === _0x3de2ac.Gb) {
                  _0x3de2ac.Cb = Date.now();
                  _0x3de2ac.Gb = null;
                  _0x3de2ac.Sb();
                  _0x3de2ac.zb.Ub().Fa();
                  _0x3de2ac.zb = _0x20c503;
                  if (_0x546371 != null) {
                    _0x546371();
                  }
                  _0x3de2ac.Tb();
                  return;
                }
                try {
                  _0x20c503.Ub().Fa();
                } catch (_0x2c8ea3) {}
              });
              _0x191ff7.Vb();
              this.Bb = Date.now();
              this.Gb = _0x191ff7;
            };
            _0xd8ba9d.prototype.Sb = function () {};
            _0xd8ba9d.prototype.Wb = function () {
              return this.zb.Jb() > 0;
            };
            _0xd8ba9d.prototype.Xb = function () {
              return this.zb.Yb();
            };
            _0xd8ba9d.prototype.Zb = function () {
              return this.Db;
            };
            _0xd8ba9d.prototype.$b = function (_0xacd15c) {
              this.Hb.push(_0xacd15c);
            };
            _0xd8ba9d.prototype.Tb = function () {
              for (var _0x96bc1a = 0; _0x96bc1a < this.Hb.length; _0x96bc1a++) {
                this.Hb[_0x96bc1a]();
              }
            };
            _0xd8ba9d.prototype.Ub = function () {
              return this.zb.Ub();
            };
            return _0xd8ba9d;
          }();
          _0x30c50f._b = function () {
            function _0x596113(_0x5e5a08) {
              this.ac = _0x5e5a08;
            }
            _0x596113.prototype.bc = function (_0x487a10) {
              return this.ac[_0x487a10];
            };
            _0x596113.cc = function () {
              function _0x3acb7f() {
                this.dc = [];
              }
              _0x3acb7f.prototype.ec = function (_0x3cc3e8, _0x199846) {
                for (var _0x35cca9 = 0; _0x35cca9 < this.dc.length; _0x35cca9++) {
                  if (this.dc[_0x35cca9].fc === _0x3cc3e8) {
                    throw new Error();
                  }
                }
                this.dc.push(new _0x596113.gc(_0x3cc3e8, _0x199846));
                return this;
              };
              _0x3acb7f.prototype.hc = function () {
                var _0x138cf1 = 0;
                for (var _0x3bc02e = 0; _0x3bc02e < this.dc.length; _0x3bc02e++) {
                  _0x138cf1 += this.dc[_0x3bc02e].ic;
                }
                var _0x7f93ed = {};
                var _0x3e5159 = 0;
                for (var _0x37656d = 0; _0x37656d < this.dc.length; _0x37656d++) {
                  var _0x4651a5 = this.dc[_0x37656d];
                  _0x4651a5.ic = _0x4651a5.ic / _0x138cf1;
                  _0x4651a5.jc = _0x3e5159;
                  _0x4651a5.kc = _0x3e5159 + _0x4651a5.ic;
                  _0x3e5159 = _0x4651a5.kc;
                  _0x7f93ed[_0x4651a5.fc] = _0x4651a5;
                }
                return new _0x596113(_0x7f93ed);
              };
              return _0x3acb7f;
            }();
            _0x596113.gc = function () {
              function _0x15a43f(_0x2f37ba, _0x206304) {
                this.fc = _0x2f37ba;
                this.ic = _0x206304;
                this.jc = 0;
                this.kc = 0;
              }
              _0x15a43f.prototype.lc = function (_0x4e1e76) {
                return this.jc + (this.kc - this.jc) * _0x4e1e76;
              };
              return _0x15a43f;
            }();
            return _0x596113;
          }();
          _0x30c50f.WormSpriteTree = function () {
            function _0x27670f() {
              this.nc = new _0x21984d.Container();
              this.nc.sortableChildren = true;
              this.oc = new _0x3a5927();
              this.oc.zIndex = _0x3ab5e7 * ((_0x3ccbf7 + 1) * 2 + 1 + 3);
              this.pc = 0;
              this.qc = new Array(_0x3ccbf7);
              this.qc[0] = this.rc(0, new _0x30c50f.sc(), new _0x30c50f.sc());
              for (var _0x16ef01 = 1; _0x16ef01 < _0x3ccbf7; _0x16ef01++) {
                this.qc[_0x16ef01] = this.rc(_0x16ef01, new _0x30c50f.sc(), new _0x30c50f.sc());
              }
              this.tc = 0;
              this.uc = 0;
              this.vc = 0;
            }
            var _0x3ab5e7 = 0.001;
            var _0x3ccbf7 = 797;
            var _0x241bdf = 3.14159;
            var _0x625bec = -0.06640625;
            var _0x530afd = 0.84375;
            var _0x55655c = 0.2578125;
            var _0x1bb8b6 = -0.03515625;
            var _0x1304f4 = -0.0625;
            var _0x1f6ce2 = 0.5625;
            var _0xaf511d = _0x625bec * 3 + _0x530afd;
            var _0x10809d = _0x55655c - _0x625bec * 3;
            var _0x4f8193 = _0x625bec + _0x1bb8b6;
            var _0x5876c7 = 0.375;
            var _0x1f8502 = 0.75;
            var _0x53720a = _0x1304f4 + _0x1304f4;
            var _0x558b82 = _0x1bb8b6 * 3 + _0x55655c;
            var _0x1f3136 = _0x530afd - _0x1bb8b6 * 3;
            var _0xe0a5c3 = _0x1bb8b6 + _0x625bec;
            _0x27670f.wc = _0x3ccbf7;
            _0x27670f.prototype.rc = function (_0x14cc03, _0x32e459, _0x386ac9) {
              var _0x476e98 = new _0x2f5312(_0x32e459, _0x386ac9);
              _0x32e459.xc.zIndex = _0x3ab5e7 * ((_0x3ccbf7 - _0x14cc03) * 2 + 1 + 3);
              _0x386ac9.xc.zIndex = _0x3ab5e7 * ((_0x3ccbf7 - _0x14cc03) * 2 - 2 + 3);
              return _0x476e98;
            };
            _0x27670f.prototype.yc = function (_0x114c99, _0x256dfc, _0x4f77f0, _0x1ce777, _0x474ccd, _0x1ad0af, _0xab7f96, _0x1c52a1) {
              var _0x55d971 = _0x4f77f0.ub;
              var _0x587006 = _0x114c99 === _0x30c50f.Ac.zc ? _0x256dfc.rb.vb : _0x4f77f0.vb;
              if (_0x55d971.length > 0 && _0x587006.length > 0) {
                for (var _0x20ac67 = 0; _0x20ac67 < this.qc.length; _0x20ac67++) {
                  this.qc[_0x20ac67].Cc.Bc(_0x55d971[_0x20ac67 % _0x55d971.length], _0x20ac67 % _0x55d971.length, _0x20ac67);
                  this.qc[_0x20ac67].Dc.Bc(_0x20ac67 == 0 && _0x4f77f0.vbb ? _0x4f77f0.vbb : _0x587006[_0x20ac67 % _0x587006.length], _0x20ac67 % _0x55d971.length, _0x20ac67);
                  this.qc[_0x20ac67].Cc.Ec(_0x1c52a1);
                  this.qc[_0x20ac67].Dc.Ec(_0x1c52a1);
                }
              }
              this.oc.yc(_0x1ce777, _0x474ccd, _0x1ad0af, _0xab7f96);
            };
            var _0x3a5927 = function () {
              var _0x2591af = _0x2816c6.M(_0x21984d.Container, function () {
                _0x21984d.Container.call(this);
                this.sortableChildren = true;
                this.Fc = [];
                this.Gc = [];
                this.Hc = [];
                this.Ic = [];
                this.Jc = new _0x21984d.Container();
                this.Kc = [];
                this.message = new _0x21984d.Container();
                for (var _0x16c6d4 = 0; _0x16c6d4 < 4; _0x16c6d4++) {
                  var _0x572977 = new _0x30c50f.sc();
                  _0x572977.Bc(_0x1859a9().Lc.wb);
                  this.Jc.addChild(_0x572977.xc);
                  this.Kc.push(_0x572977);
                }
                this.message.zIndex = 0.0012;
                this.addChild(this.message);
                this.VcUn();
                this.Jc.zIndex = 0.0011;
                this.addChild(this.Jc);
                this.Mc();
                this.Nc = new _0x30c50f.sc();
                this.Nc.Bc(_0x1859a9().Lc.xb);
                this.Nc.xc.zIndex = 0.001;
                this.addChild(this.Nc.xc);
                this.Oc();
              });
              _0x2591af.prototype.yc = function (_0x499f6f, _0xd01048, _0x4e80a1, _0x2aecad) {
                this.Pc(0.002, this.Fc, _0x499f6f.ub);
                this.Pc(0.003, this.Gc, _0xd01048.ub);
                this.Pc(0.004, this.Ic, _0x2aecad.ub);
                this.Pc(0.005, this.Hc, _0x4e80a1.ub);
              };
              _0x2591af.prototype.Pc = function (_0x50bfcf, _0x48d64c, _0x1b29fe) {
                while (_0x1b29fe.length > _0x48d64c.length) {
                  var _0x3d9f7c = new _0x30c50f.sc();
                  _0x48d64c.push(_0x3d9f7c);
                  this.addChild(_0x3d9f7c.Qc());
                }
                while (_0x1b29fe.length < _0x48d64c.length) {
                  _0x48d64c.pop().Rc();
                }
                var _0x29209d = _0x50bfcf;
                for (var _0x5341ab = 0; _0x5341ab < _0x1b29fe.length; _0x5341ab++) {
                  _0x29209d += 0.0001;
                  var _0x35c650 = _0x48d64c[_0x5341ab];
                  _0x35c650.Bc(_0x1b29fe[_0x5341ab]);
                  _0x35c650.xc.zIndex = _0x29209d;
                }
              };
              _0x2591af.prototype.Sc = function (_0x5b043f, _0x3079c8, _0x2fc2b8, _0x31babf) {
                this.visible = true;
                this.position.set(_0x5b043f, _0x3079c8);
                this.rotation = _0x31babf;
                for (var _0x4cd981 = 0; _0x4cd981 < this.Fc.length; _0x4cd981++) {
                  this.Fc[_0x4cd981].Tc(_0x2fc2b8);
                }
                for (var _0x371d28 = 0; _0x371d28 < this.Gc.length; _0x371d28++) {
                  this.Gc[_0x371d28].Tc(_0x2fc2b8);
                }
                for (var _0x53f02a = 0; _0x53f02a < this.Hc.length; _0x53f02a++) {
                  this.Hc[_0x53f02a].Tc(_0x2fc2b8);
                }
                for (var _0x24ca02 = 0; _0x24ca02 < this.Ic.length; _0x24ca02++) {
                  this.Ic[_0x24ca02].Tc(_0x2fc2b8);
                }
              };
              _0x2591af.prototype.Uc = function () {
                this.visible = false;
              };
              _0x2591af.prototype.VcAc = function (_0x16d055, _0x40ff22, _0x3fb57e, _0x3c7cf7, _0x505e9f) {
                this.message.visible = true;
                this.Mc2.Tc(_0x40ff22);
              };
              _0x2591af.prototype.VcUn = function () {
                this.message.visible = false;
              };
              _0x2591af.prototype.Vc = function (_0x1906f1, _0x7f14bd, _0x5b3739, _0x44cf25) {
                this.Jc.visible = true;
                var _0x412d96 = _0x5b3739 / 1000;
                var _0x563387 = 1 / this.Kc.length;
                for (var _0x2d320b = 0; _0x2d320b < this.Kc.length; _0x2d320b++) {
                  var _0x3bf26a = 1 - (_0x412d96 + _0x563387 * _0x2d320b) % 1;
                  this.Kc[_0x2d320b].xc.alpha = 1 - _0x3bf26a;
                  this.Kc[_0x2d320b].Tc(_0x7f14bd * (0.5 + _0x3bf26a * 4.5));
                }
              };
              _0x2591af.prototype.Mc = function () {
                this.Jc.visible = false;
              };
              _0x2591af.prototype.Wc = function (_0xd63390, _0x4ed3dc, _0x5b44f1, _0x4632f3) {
                this.Nc.xc.visible = true;
                this.Nc.xc.alpha = _0x2816c6.Q(this.Nc.xc.alpha, _0xd63390.Xc ? 0.9 : 0.2, _0x4632f3, 0.0025);
                this.Nc.Tc(_0x4ed3dc);
              };
              _0x2591af.prototype.activeFlex = function (_0x17b4d1, _0xf92d8b, _0xaa299d, _0x2478a0) {
            this.pwr_flex1.xc.visible = window.bbs.flx === 1;
            this.pwr_flex1.xc.alpha = _0x503ed4.Q(this.Nc.xc.alpha, _0x17b4d1.Xc ? 1 : 1, _0x2478a0, 1);
            this.pwr_flex1.Tc(_0xf92d8b);
            this.pwr_flex2.xc.visible = window.bbs.flx === 2;
            this.pwr_flex2.xc.alpha = _0x503ed4.Q(this.Nc.xc.alpha, _0x17b4d1.Xc ? 0.9 : 0.4, _0x2478a0, 0.0025);
            this.pwr_flex2.Tc(_0xf92d8b);
            this.pwr_flex3.xc.visible = window.bss.flx === 3;
            this.pwr_flex3.xc.alpha = _0x503ed4.Q(this.Nc.xc.alpha, _0x17b4d1.Xc ? 0.9 : 0.4, _0x2478a0, 0.0025);
            this.pwr_flex3.Tc(_0xf92d8b);
          };
          _0x2591af.prototype.disableFlex = function () {
            this.pwr_flex1.xc.visible = false;
            this.pwr_flex2.xc.visible = false;
            this.pwr_flex3.xc.visible = false;
          };
              _0x2591af.prototype.WXX = function (_0x8cb106, _0x1e6ece, _0x3df148, _0x3e8fe0) {
                this.Nc.xc.visible = true;
                this.Nc.xc.alpha = _0x2816c6.Q(this.Nc.xc.alpha, _0x8cb106.Xc ? 0.9 : 0.2, _0x3e8fe0, 0.0025);
                this.Nc.Tc(_0x1e6ece);
              };
              _0x2591af.prototype.Oc = function () {
                this.Nc.xc.visible = false;
              };
              return _0x2591af;
            }();
            _0x27670f.prototype.Yc = function (_0x6f7bb9) {
              return this.uc + this.vc * Math.sin(_0x6f7bb9 * _0x241bdf - this.tc);
            };
            _0x27670f.prototype.Zc = function (_0x4b1a70, _0x489e6e, _0x1d6d8f, _0x43876b) {
              var _0x20446f = _0x4b1a70.$c * 2;
              var _0x42dbe5 = _0x4b1a70._c;
              var _0x2cad9a = _0x4b1a70.ad;
              var _0x539bb8 = _0x2cad9a * 4 - 3;
              var _0x7655b5 = _0x539bb8;
              this.tc = _0x489e6e / 400 * Math.PI;
              this.uc = _0x20446f * 1.5;
              this.vc = _0x20446f * 0.15 * _0x4b1a70.bd;
              var _0x3a608c;
              var _0x47bebb;
              var _0x13cc99;
              var _0x232832;
              var _0xdec44;
              var _0x2125dc;
              var _0x1e2b3b;
              var _0xbe5b22;
              _0x47bebb = _0x42dbe5[0];
              _0x2125dc = _0x42dbe5[1];
              if (_0x43876b(_0x47bebb, _0x2125dc)) {
                _0x13cc99 = _0x42dbe5[2];
                _0x1e2b3b = _0x42dbe5[3];
                _0x232832 = _0x42dbe5[4];
                _0xbe5b22 = _0x42dbe5[5];
                var _0x4d1c57 = Math.atan2(_0xbe5b22 + _0x2125dc * 2 - _0x1e2b3b * 3, _0x232832 + _0x47bebb * 2 - _0x13cc99 * 3);
                this.oc.Sc(_0x47bebb, _0x2125dc, _0x20446f, _0x4d1c57);
                this.qc[0].Sc(_0x47bebb, _0x2125dc, _0x20446f, this.Yc(0), _0x4d1c57);
                this.qc[1].Sc(_0xaf511d * _0x47bebb + _0x10809d * _0x13cc99 + _0x4f8193 * _0x232832, _0xaf511d * _0x2125dc + _0x10809d * _0x1e2b3b + _0x4f8193 * _0xbe5b22, _0x20446f, this.Yc(1), _0x2f5312.cd(this.qc[0], this.qc[2]));
                this.qc[2].Sc(_0x5876c7 * _0x47bebb + _0x1f8502 * _0x13cc99 + _0x53720a * _0x232832, _0x5876c7 * _0x2125dc + _0x1f8502 * _0x1e2b3b + _0x53720a * _0xbe5b22, _0x20446f, this.Yc(2), _0x2f5312.cd(this.qc[1], this.qc[3]));
                this.qc[3].Sc(_0x558b82 * _0x47bebb + _0x1f3136 * _0x13cc99 + _0xe0a5c3 * _0x232832, _0x558b82 * _0x2125dc + _0x1f3136 * _0x1e2b3b + _0xe0a5c3 * _0xbe5b22, _0x20446f, this.Yc(3), _0x2f5312.cd(this.qc[2], this.qc[4]));
              } else {
                this.oc.Uc();
                this.qc[0].Uc();
                this.qc[1].Uc();
                this.qc[2].Uc();
                this.qc[3].Uc();
              }
              var _0x156464 = 4;
              var _0x19589c = 2;
              var _0x4e90ec = _0x2cad9a * 2 - 4;
              while (_0x19589c < _0x4e90ec) {
                _0x47bebb = _0x42dbe5[_0x19589c];
                _0x2125dc = _0x42dbe5[_0x19589c + 1];
                if (_0x43876b(_0x47bebb, _0x2125dc)) {
                  _0x3a608c = _0x42dbe5[_0x19589c - 2];
                  _0xdec44 = _0x42dbe5[_0x19589c - 1];
                  _0x13cc99 = _0x42dbe5[_0x19589c + 2];
                  _0x1e2b3b = _0x42dbe5[_0x19589c + 3];
                  _0x232832 = _0x42dbe5[_0x19589c + 4];
                  _0xbe5b22 = _0x42dbe5[_0x19589c + 5];
                  this.qc[_0x156464].Sc(_0x47bebb, _0x2125dc, _0x20446f, this.Yc(_0x156464), _0x2f5312.cd(this.qc[_0x156464 - 1], this.qc[_0x156464 + 1]));
                  _0x156464++;
                  this.qc[_0x156464].Sc(_0x625bec * _0x3a608c + _0x530afd * _0x47bebb + _0x55655c * _0x13cc99 + _0x1bb8b6 * _0x232832, _0x625bec * _0xdec44 + _0x530afd * _0x2125dc + _0x55655c * _0x1e2b3b + _0x1bb8b6 * _0xbe5b22, _0x20446f, this.Yc(_0x156464), _0x2f5312.cd(this.qc[_0x156464 - 1], this.qc[_0x156464 + 1]));
                  _0x156464++;
                  this.qc[_0x156464].Sc(_0x1304f4 * _0x3a608c + _0x1f6ce2 * _0x47bebb + _0x1f6ce2 * _0x13cc99 + _0x1304f4 * _0x232832, _0x1304f4 * _0xdec44 + _0x1f6ce2 * _0x2125dc + _0x1f6ce2 * _0x1e2b3b + _0x1304f4 * _0xbe5b22, _0x20446f, this.Yc(_0x156464), _0x2f5312.cd(this.qc[_0x156464 - 1], this.qc[_0x156464 + 1]));
                  _0x156464++;
                  this.qc[_0x156464].Sc(_0x1bb8b6 * _0x3a608c + _0x55655c * _0x47bebb + _0x530afd * _0x13cc99 + _0x625bec * _0x232832, _0x1bb8b6 * _0xdec44 + _0x55655c * _0x2125dc + _0x530afd * _0x1e2b3b + _0x625bec * _0xbe5b22, _0x20446f, this.Yc(_0x156464), _0x2f5312.cd(this.qc[_0x156464 - 1], this.qc[_0x156464 + 1]));
                  _0x156464++;
                } else {
                  this.qc[_0x156464].Uc();
                  _0x156464++;
                  this.qc[_0x156464].Uc();
                  _0x156464++;
                  this.qc[_0x156464].Uc();
                  _0x156464++;
                  this.qc[_0x156464].Uc();
                  _0x156464++;
                }
                _0x19589c += 2;
              }
              _0x47bebb = _0x42dbe5[_0x2cad9a * 2 - 4];
              _0x2125dc = _0x42dbe5[_0x2cad9a * 2 - 3];
              if (_0x43876b(_0x47bebb, _0x2125dc)) {
                _0x3a608c = _0x42dbe5[_0x2cad9a * 2 - 6];
                _0xdec44 = _0x42dbe5[_0x2cad9a * 2 - 5];
                _0x13cc99 = _0x42dbe5[_0x2cad9a * 2 - 2];
                _0x1e2b3b = _0x42dbe5[_0x2cad9a * 2 - 1];
                this.qc[_0x539bb8 - 5].Sc(_0x47bebb, _0x2125dc, _0x20446f, this.Yc(_0x539bb8 - 5), _0x2f5312.cd(this.qc[_0x539bb8 - 6], this.qc[_0x539bb8 - 4]));
                this.qc[_0x539bb8 - 4].Sc(_0xe0a5c3 * _0x3a608c + _0x1f3136 * _0x47bebb + _0x558b82 * _0x13cc99, _0xe0a5c3 * _0xdec44 + _0x1f3136 * _0x2125dc + _0x558b82 * _0x1e2b3b, _0x20446f, this.Yc(_0x539bb8 - 4), _0x2f5312.cd(this.qc[_0x539bb8 - 5], this.qc[_0x539bb8 - 3]));
                this.qc[_0x539bb8 - 3].Sc(_0x53720a * _0x3a608c + _0x1f8502 * _0x47bebb + _0x5876c7 * _0x13cc99, _0x53720a * _0xdec44 + _0x1f8502 * _0x2125dc + _0x5876c7 * _0x1e2b3b, _0x20446f, this.Yc(_0x539bb8 - 3), _0x2f5312.cd(this.qc[_0x539bb8 - 4], this.qc[_0x539bb8 - 2]));
                this.qc[_0x539bb8 - 2].Sc(_0x4f8193 * _0x3a608c + _0x10809d * _0x47bebb + _0xaf511d * _0x13cc99, _0x4f8193 * _0xdec44 + _0x10809d * _0x2125dc + _0xaf511d * _0x1e2b3b, _0x20446f, this.Yc(_0x539bb8 - 2), _0x2f5312.cd(this.qc[_0x539bb8 - 3], this.qc[_0x539bb8 - 1]));
                this.qc[_0x539bb8 - 1].Sc(_0x13cc99, _0x1e2b3b, _0x20446f, this.Yc(_0x539bb8 - 1), _0x2f5312.cd(this.qc[_0x539bb8 - 2], this.qc[_0x539bb8 - 1]));
              } else {
                this.qc[_0x539bb8 - 5].Uc();
                this.qc[_0x539bb8 - 4].Uc();
                this.qc[_0x539bb8 - 3].Uc();
                this.qc[_0x539bb8 - 2].Uc();
                this.qc[_0x539bb8 - 1].Uc();
              }
              if (this.pc === 0 && _0x7655b5 > 0) {
                this.nc.addChild(this.oc);
              }
              if (this.pc > 0 && _0x7655b5 === 0) {
                _0x2816c6.U(this.oc);
              }
              while (this.pc < _0x7655b5) {
                this.nc.addChild(this.qc[this.pc].Cc.Qc());
                this.nc.addChild(this.qc[this.pc].Dc.Qc());
                this.pc += 1;
              }
              while (this.pc > _0x7655b5) {
                this.pc -= 1;
                this.qc[this.pc].Dc.Rc();
                this.qc[this.pc].Cc.Rc();
              }
              var _0x11b857 = _0x4b1a70.dd[_0x30c50f.fd.ed];
              if (this.qc[0].gd() && _0x11b857 && _0x11b857.hd) {
                this.oc.Vc(_0x4b1a70, _0x20446f, _0x489e6e, _0x1d6d8f);
              } else {
                this.oc.Mc();
              }
              var _0x29ab31 = _0x4b1a70.dd[_0x30c50f.fd.jd];
              if (this.qc[0].gd() && _0x29ab31 && _0x29ab31.hd) {
                this.oc.Wc(_0x4b1a70, _0x20446f, _0x489e6e, _0x1d6d8f);
              } else {
                this.oc.Oc();
              }
              movimentaLinha();
            };
            var _0x2f5312 = function () {
              function _0x1ae5e4(_0x44d861, _0x24ecd1) {
                this.Cc = _0x44d861;
                this.Cc.kd(false);
                this.Dc = _0x24ecd1;
                this.Dc.kd(false);
                this.ev = null;
              }
              _0x1ae5e4.prototype.Sc = function (_0x2fb7c9, _0x269e4b, _0x1ee076, _0x15900b, _0x18deab) {
                this.Cc.kd(true);
                this.Cc.ld(_0x2fb7c9, _0x269e4b);
                this.Cc.Tc(_0x1ee076);
                this.Cc.md(_0x18deab);
                this.Dc.kd(true);
                this.Dc.ld(_0x2fb7c9, _0x269e4b);
                this.Dc.Tc(_0x15900b);
                this.Dc.md(_0x18deab);
              };
              _0x1ae5e4.prototype.Uc = function () {
                this.Cc.kd(false);
                this.Dc.kd(false);
              };
              _0x1ae5e4.prototype.gd = function () {
                return this.Cc.gd();
              };
              _0x1ae5e4.cd = function (_0x3cec84, _0x580025) {
                return Math.atan2(_0x3cec84.Cc.xc.position.y - _0x580025.Cc.xc.position.y, _0x3cec84.Cc.xc.position.x - _0x580025.Cc.xc.position.x);
              };
              return _0x1ae5e4;
            }();
            return _0x27670f;
          }();
          _0x30c50f.fd = function () {
            function _0x36a1a8(_0x39b102) {
              this.nd = _0x39b102;
              this.hd = false;
              this.od = 1;
            }
            _0x36a1a8.jd = 0;
            _0x36a1a8.pd = 1;
            _0x36a1a8.ed = 2;
            _0x36a1a8.qd = 6;
            _0x36a1a8.rd = 3;
            _0x36a1a8.sd = 4;
            _0x36a1a8.td = 5;
            return _0x36a1a8;
          }();
          _0x30c50f.Ab = function (_0x40ab33) {
            var _0x186871 = function () {
              function _0x5ed7f6(_0x15054a, _0x245f94) {
                _0x3da663(this, _0x5ed7f6);
                this.ud = _0x15054a;
                this.vd = _0x245f94;
              }
              return _0x549521(_0x5ed7f6, [{
                key: "Jb",
                value: function _0x55c843() {
                  return this.ud.revision;
                }
              }, {
                key: "Yb",
                value: function _0x564bad() {
                  _0x3ca652.Jb();
                  return this.ud;
                }
              }, {
                key: "Ub",
                value: function _0x536c3b() {
                  return this.vd;
                }
              }]);
            }();
            _0x40ab33 = _0x186871;
            _0x249fc9(_0x186871, "wd", new _0x40ab33({}, _0x30c50f.Ga.Ca()));
            return _0x186871;
          }();
          _0x30c50f.Mb = function () {
            function _0x41942b(_0x2eb4b7) {
              this.xd = function () {
                ++_0x41942b.yd;
                return function (_0x23fb05, _0x586f30) {};
              }();
              this.zd = _0x2eb4b7;
              this.Ad = null;
              this.Bd = null;
              this.Cd = null;
              this.Dd = null;
              this.Ed = null;
              this.Fd = false;
              this.Gd = false;
              this.Hd = false;
            }
            _0x41942b.Id = {
              Jd: "0x0",
              Kd: "0x1",
              Ld: "0x2",
              Md: "0x3",
              Nd: "0x4"
            };
            _0x41942b.yd = 100000;
            _0x41942b.Od = new _0x30c50f._b.cc().ec(_0x41942b.Id.Jd, 1).ec(_0x41942b.Id.Kd, 10).ec(_0x41942b.Id.Ld, 50).ec(_0x41942b.Id.Md, 15).ec(_0x41942b.Id.Nd, 5).hc();
            _0x41942b.prototype.Rb = function (_0x32e649) {
              this.Ad = _0x32e649;
            };
            _0x41942b.prototype.Qb = function (_0x15900d) {
              this.Bd = _0x15900d;
            };
            _0x41942b.prototype.Ob = function (_0x1007d6) {
              this.Cd = _0x1007d6;
            };
            _0x41942b.prototype.Pb = function (_0x486d6c) {
              this.Dd = _0x486d6c;
            };
            _0x41942b.prototype.Nb = function (_0x57b602) {
              this.Ed = _0x57b602;
            };
            _0x41942b.prototype.Kb = function () {
              return this.Hd;
            };
            _0x41942b.prototype.Lb = function () {
              this.Fd = true;
            };
            _0x41942b.prototype.Vb = function () {
              if (!this.Gd) {
                this.Gd = true;
                if (this.Fd) {
                  this.Pd();
                  return;
                }
                this.Qd();
              }
            };
            _0x41942b.prototype.Qd = function () {
              function _0x3c797a(_0x3ca739) {
                var _0xb8eb1f = _0x41942b.Id.Jd;
                _0x5b3461.Rd(_0xb8eb1f, _0x41942b.Od.bc(_0xb8eb1f).lc(_0x3ca739));
              }
              var _0x5b3461 = this;
              console.log("Checking for updates...");
              if (this.Fd) {
                this.Pd();
                return;
              }
              $.ajax({
                type: "GET",
                url: _0x2816c6.a.c + "/dynamic/assets/revision.json",
                xhrFields: {
                  onprogress: function _0xc31679(_0x211677) {
                    if (_0x211677.lengthComputable) {
                      _0x3c797a(_0x211677.loaded / _0x211677.total);
                    }
                  }
                }
              }).fail(function () {
                _0x5b3461.Sd(new Error());
              }).done(function (_0x1cc32f) {
                if (_0x1cc32f <= _0x5b3461.zd) {
                  _0x5b3461.Td();
                  return;
                }
                _0x5b3461.Ud();
              });
            };
            _0x41942b.prototype.Ud = _0x1e9522(_0xeb30a().m(function _0x229cfe() {
              var _0x17a567;
              var _0x4b6dfb;
              var _0x2756e1;
              return _0xeb30a().w(function (_0x565d42) {
                while (1) {
                  switch (_0x565d42.n) {
                    case 0:
                      _0x17a567 = function _0x3f229e(_0x5e88d6) {
                        var _0x45b906 = _0x41942b.Id.Kd;
                        _0x4b6dfb.Rd(_0x45b906, _0x41942b.Od.bc(_0x45b906).lc(_0x5e88d6));
                      };
                      _0x4b6dfb = this;
                      if (!this.Fd) {
                        _0x565d42.n = 1;
                        break;
                      }
                      return _0x565d42.a(2, void this.Pd());
                    case 1:
                      _0x565d42.n = 2;
                      return fetch(URLSERV_WORMWORLD + "/version");
                    case 2:
                      _0x2756e1 = _0x565d42.v;
                      _0x565d42.n = 3;
                      return _0x2756e1.json();
                    case 3:
                      _0x2756e1 = _0x565d42.v;
                      localStorage.setItem("wwc_version", _0x2756e1);
                      if (_0x5b137a != _0x2756e1) {
                        $.ajax({
                          type: "GET",
                          url: _0x2816c6.a.c + "/dynamic/assets/registry.json",
                          xhrFields: {
                            onprogress: function _0x519089(_0x1fa149) {
                              if (_0x1fa149.lengthComputable) {
                                _0x17a567(_0x1fa149.loaded / _0x1fa149.total);
                              }
                            }
                          }
                        }).fail(function () {
                          _0x4b6dfb.Sd(new Error());
                        }).done(function () {
                          var _0x3d67f9 = _0x1e9522(_0xeb30a().m(function _0x28e41e(_0x4dc659) {
                            return _0xeb30a().w(function (_0x193bfa) {
                              while (1) {
                                switch (_0x193bfa.n) {
                                  case 0:
                                    _0x193bfa.n = 1;
                                    return _0x3ca652.registry(_0x4dc659);
                                  case 1:
                                    _0x4dc659 = _0x193bfa.v;
                                    localStorage.setItem("wwc_config", JSON.stringify(_0x4dc659));
                                    _0x4b6dfb.Vd(_0x4dc659, _0x41942b);
                                  case 2:
                                    return _0x193bfa.a(2);
                                }
                              }
                            }, _0x28e41e);
                          }));
                          return function (_0x328560) {
                            return _0x3d67f9.apply(this, arguments);
                          };
                        }());
                      } else {
                        try {
                          _0x41686d = JSON.parse(_0x41686d);
                          _0x17a567(1);
                          _0x4b6dfb.Vd(_0x41686d, _0x41942b);
                        } catch (_0x1b8caa) {
                          console.log("ConfigError", _0x1b8caa);
                          localStorage.removeItem("wwc_version");
                          localStorage.removeItem("wwc_config");
                        }
                      }
                    case 4:
                      return _0x565d42.a(2);
                  }
                }
              }, _0x229cfe, this);
            }));
            _0x41942b.prototype.Vd = _0x3ca652.Vd || function (_0x583566) {
              function _0x31646f(_0x35d4f1) {
                var _0x2b65db = _0x41942b.Id.Ld;
                _0x14bbee.Rd(_0x2b65db, _0x41942b.Od.bc(_0x2b65db).lc(_0x35d4f1));
              }
              var _0x14bbee = this;
              if (this.Fd) {
                this.Pd();
                return;
              }
              var _0x2136b3 = [];
              var _0x468395 = [];
              var _0x52660c = 0;
              for (var _0x3f4c30 in _0x583566.textureDict) {
                if (_0x583566.textureDict.hasOwnProperty(_0x3f4c30)) {
                  var _0x10c7f9 = _0x583566.textureDict[_0x3f4c30];
                  var _0x1786f2 = _0x2816c6.a.c + _0x10c7f9.relativePath;
                  var _0x579a2b = _0x10c7f9.fileSize;
                  var _0xcbfff9 = _0x10c7f9.sha256;
                  var _0x4e2bc9 = new _0x41942b.Wd(_0x3f4c30, _0x1786f2, _0x579a2b, _0xcbfff9);
                  _0x2136b3.push(_0x4e2bc9);
                  _0x468395.push(_0x4e2bc9);
                  _0x52660c += _0x579a2b;
                }
              }
              var _0x4f7bcd;
              var _0x25762b = 0;
              var _0x52972a = function _0x31f269(_0x492f08) {
                for (var _0x38d902 = 0; _0x38d902 < _0x468395.length; _0x38d902++) {
                  try {
                    window.URL.revokeObjectURL(_0x468395[_0x38d902].Xd);
                  } catch (_0x46059d) {}
                }
                _0x14bbee.Sd(_0x492f08);
              };
              var _0x570361 = function _0x407b9f(_0x6ff690) {
                var _0x3ab833 = Math.floor(_0x4f7bcd.Yd * _0x6ff690);
                _0x31646f((_0x25762b + _0x3ab833) / _0x52660c);
              };
              var _0x423b3e = function _0x2a0f19(_0x2d4576) {
                var _0xe20d94 = new Blob([_0x2d4576]);
                _0x4f7bcd.Xd = window.URL.createObjectURL(_0xe20d94);
                _0x25762b += _0x4f7bcd.Yd;
                _0x40e69c();
              };
              var _0x40e69c = function _0x154b0f() {
                if (_0x2aa471 < _0x468395.length) {
                  _0x4f7bcd = _0x468395[_0x2aa471++];
                  _0x14bbee.Zd(_0x4f7bcd, _0x52972a, _0x423b3e, _0x570361);
                  return;
                }
                setTimeout(function () {
                  return _0x14bbee.$d(_0x583566, _0x2136b3);
                }, 0);
              };
              var _0x2aa471 = 0;
              _0x40e69c();
            };
            _0x41942b.prototype.Zd = _0x3ca652.Zd || function (_0x2240cb, _0x37bd1a, _0x505d8f, _0x46488a) {
              $.ajax({
                type: "GET",
                url: _0x2240cb._d,
                xhrFields: {
                  responseType: "arraybuffer",
                  onprogress: function _0x8d6c98(_0x438ff7) {
                    if (_0x438ff7.lengthComputable) {
                      _0x46488a(_0x438ff7.loaded / _0x438ff7.total);
                    }
                  }
                }
              }).fail(function () {
                _0x37bd1a(new Error());
              }).done(function (_0x4eea31) {
                _0x505d8f(_0x4eea31);
              });
            };
            _0x41942b.prototype.$d = _0x3ca652.$d || function (_0x2bcce8, _0xdc5378) {
              function _0x13a830(_0x1bd94f) {
                var _0x2505f7 = _0x41942b.Id.Md;
                _0x3fff96.Rd(_0x2505f7, _0x41942b.Od.bc(_0x2505f7).lc(_0x1bd94f));
              }
              var _0x3fff96 = this;
              if (this.Fd) {
                this.Pd();
                return;
              }
              var _0x5ec998;
              var _0x3aedf4;
              var _0x3a7035 = {};
              var _0x4fe775 = function _0x1edfde() {
                for (var _0x23cf52 = 0; _0x23cf52 < _0xdc5378.length; _0x23cf52++) {
                  try {
                    window.URL.revokeObjectURL(_0xdc5378[_0x23cf52].Xd);
                  } catch (_0x3ef400) {}
                }
                _0x3fff96.Sd(new Error());
              };
              var _0x34d528 = function _0x59a8b7() {
                _0x13a830(_0x33c901 / _0xdc5378.length);
                _0x3a7035[_0x5ec998.ae] = new _0x30c50f.be(_0x5ec998.Xd, _0x3aedf4);
                _0x472618();
              };
              var _0x472618 = function _0x48a9cb() {
                if (_0x33c901 < _0xdc5378.length) {
                  _0x5ec998 = _0xdc5378[_0x33c901++];
                  _0x3aedf4 = PIXI.BaseTexture.from(_0x5ec998.Xd);
                  _0x3aedf4.on("error", _0x4fe775);
                  _0x3aedf4.on("loaded", _0x34d528);
                  return;
                }
                setTimeout(function () {
                  return _0x3fff96.ce(_0x2bcce8, _0x3a7035);
                }, 0);
              };
              var _0x33c901 = 0;
              _0x472618();
            };
            _0x41942b.prototype.ce = function (_0x546961, _0x212c7c) {
              function _0x3b4af6(_0x562104) {
                var _0x939fe8 = _0x41942b.Id.Nd;
                _0x2f53fe.Rd(_0x939fe8, _0x41942b.Od.bc(_0x939fe8).lc(_0x562104));
              }
              var _0x2f53fe = this;
              var _0x532e0f = {};
              var _0x59f015 = 0;
              var _0x4ab37e = Object.values(_0x546961.regionDict).length;
              _0x2816c6._(_0x546961.regionDict, function (_0x3bddf4, _0x517adc) {
                var _0xcfe046 = null;
                try {
                  var _0x3fb473 = null;
                  if (_0x212c7c[_0x517adc.texture].ev) {
                    _0x3fb473 = _0x212c7c[_0x517adc.texture].ev;
                  }
                  var _0x44d7d9 = _0x517adc.texture + ":" + _0x3bddf4;
                  _0xcfe046 = _0x30c50f.la.Da(_0x44d7d9, _0x212c7c[_0x517adc.texture].oa, _0x517adc, _0x3fb473);
                  _0x532e0f[_0x3bddf4] = _0xcfe046;
                  if (++_0x59f015 % 10 == 0) {
                    _0x3b4af6(_0x59f015 / _0x4ab37e);
                  }
                } catch (_0x1faee0) {}
              });
              var _0x13b4dd = Object.values(_0x212c7c).map(function (_0x4347fc) {
                return _0x4347fc.oa;
              });
              var _0x569822 = Object.values(_0x532e0f);
              var _0x44ad9a = new _0x30c50f.Ab(_0x546961, _0x30c50f.Ga.fb(_0x546961, _0x532e0f, _0x13b4dd, _0x569822));
              setTimeout(function () {
                return _0x2f53fe.de(_0x44ad9a);
              }, 0);
            };
            _0x41942b.Wd = function () {
              function _0x4062fc(_0x4aa585, _0x221244, _0x4dc251, _0x11a25a) {
                this.ae = _0x4aa585;
                this._d = _0x221244;
                this.Yd = _0x4dc251;
                this.ee = _0x11a25a;
                this.Xd = "";
              }
              return _0x4062fc;
            }();
            _0x41942b.prototype.de = function (_0x212463) {
              if (this.Hd) {
                _0x212463.Ub().Fa();
                return;
              }
              this.Hd = true;
              var _0xf23a37 = this;
              setTimeout(function () {
                return _0xf23a37.Ad(_0x212463);
              }, 0);
            };
            _0x41942b.prototype.Td = function () {
              if (!this.Hd) {
                this.Hd = true;
                var _0x448dab = this;
                setTimeout(function () {
                  return _0x448dab.Bd();
                }, 0);
              }
            };
            _0x41942b.prototype.Sd = function (_0x6e0bb9) {
              if (!this.Hd) {
                this.Hd = true;
                var _0x5664b7 = this;
                setTimeout(function () {
                  return _0x5664b7.Cd(_0x6e0bb9);
                }, 0);
              }
            };
            _0x41942b.prototype.Pd = function () {
              if (!this.Hd) {
                this.Hd = true;
                var _0x10f011 = this;
                setTimeout(function () {
                  return _0x10f011.Dd();
                }, 0);
              }
            };
            _0x41942b.prototype.Rd = function (_0x1872b7, _0x59f8b8) {
              if (!this.Hd && !this.Fd) {
                var _0x57fbc1 = this;
                return _0x57fbc1.Ed(_0x1872b7, _0x59f8b8);
              }
            };
            return _0x41942b;
          }();
          _0x30c50f.fe = function () {
            return {};
          }();
          _0x30c50f.ge = function () {
            function _0x5d58fc() {
              this.he = _0x30c50f.ge.je.ie;
              this.ke = false;
              this.le = false;
              this.me = null;
              this.ne = null;
            }
            _0x5d58fc.prototype.ha = function () {};
            _0x5d58fc.prototype.oe = function (_0x239a9f) {
              this.le = _0x239a9f;
            };
            _0x5d58fc.prototype.pe = function (_0x3c6f0e) {
              this.he = _0x3c6f0e;
              this.qe();
            };
            _0x5d58fc.prototype.re = function (_0x407c26) {
              this.ke = _0x407c26;
              this.qe();
            };
            _0x5d58fc.prototype.qe = function () {};
            _0x5d58fc.prototype.se = function (_0x4339e8, _0x15ac2b) {
              if (!_0x1859a9().Lc.Wb()) {
                return null;
              }
              var _0x138429 = _0x4339e8[_0x15ac2b];
              if (_0x138429 == null || _0x138429.length === 0) {
                return null;
              } else {
                return _0x138429[Math.floor(Math.random() * _0x138429.length)].cloneNode();
              }
            };
            _0x5d58fc.prototype.te = function (_0x317a51, _0x1bc1f6, _0x4bf1ef) {
              if (this.le && !(_0x4bf1ef <= 0)) {
                var _0x451863 = this.se(_0x317a51, _0x1bc1f6);
                if (_0x451863 != null) {
                  _0x451863.volume = Math.min(1, _0x4bf1ef);
                  _0x451863.play();
                }
              }
            };
            _0x5d58fc.prototype.ue = function (_0x32831a, _0x887a20) {
              if (this.he.ve) {
                this.te(app.xe.we, _0x32831a, _0x887a20);
              }
            };
            _0x5d58fc.prototype.ye = function (_0x4ac3a4, _0x375262) {
              if (this.he.ze) {
                this.te(app.xe.Ae, _0x4ac3a4, _0x375262);
              }
            };
            _0x5d58fc.prototype.Be = function () {};
            _0x5d58fc.prototype.Ce = function () {};
            _0x5d58fc.prototype.De = function () {};
            _0x5d58fc.prototype.Ee = function () {};
            _0x5d58fc.prototype.Fe = function () {};
            _0x5d58fc.prototype.Ge = function () {};
            _0x5d58fc.prototype.He = function (_0x565ef9, _0x49f9a3, _0x472b16) {};
            _0x5d58fc.prototype.Ie = function (_0x45b124) {};
            _0x5d58fc.prototype.Je = function (_0x2903b7) {};
            _0x5d58fc.prototype.Ke = function (_0x1cf498) {};
            _0x5d58fc.prototype.Le = function (_0x1ce74f) {};
            _0x5d58fc.prototype.Me = function (_0x2f6657) {};
            _0x5d58fc.prototype.Ne = function (_0x7f22f3) {};
            _0x5d58fc.prototype.Oe = function (_0x4d6f4a) {};
            _0x5d58fc.prototype.Pe = function (_0x4e9b2a) {};
            _0x5d58fc.prototype.Qe = function (_0x48d1f7) {};
            _0x5d58fc.prototype.Re = function (_0x13eff3) {};
            _0x5d58fc.prototype.Se = function (_0x6d0344) {};
            _0x5d58fc.prototype.Te = function (_0x3b40cb) {};
            _0x5d58fc.prototype.Ue = function (_0x156524) {};
            _0x5d58fc.prototype.Ve = function (_0x422c91) {};
            _0x5d58fc.prototype.We = function (_0x4aa6bf, _0x1b07dc) {};
            _0x5d58fc.prototype.Xe = function (_0x76ee7e) {};
            _0x5d58fc.prototype.Ye = function (_0x4e7681, _0xcff0a9, _0x31ad83) {};
            _0x5d58fc.je = {
              ie: {
                Ze: false,
                $e: false,
                ze: true,
                ve: false
              },
              _e: {
                Ze: false,
                $e: true,
                ze: true,
                ve: false
              },
              af: {
                Ze: true,
                $e: false,
                ze: false,
                ve: true
              },
              bf: {
                Ze: false,
                $e: false,
                ze: true,
                ve: false
              },
              cf: {
                Ze: false,
                $e: false,
                ze: false,
                ve: false
              }
            };
            return _0x5d58fc;
          }();
          _0x30c50f.GameView = function () {
            function _0x50fa2c(_0x249dc0) {
              var _0x33a54e = _0x1859a9();
              this.ef = _0x249dc0;
              this.Eb = _0x249dc0.get()[0];
              this.ff = 1;
              this.gf = 1;
              this.hf = null;
              this.lf = new _0x21984d.Renderer({
                view: _0x249dc0.get()[0],
                backgroundColor: 0,
                transparent: false,
                antialias: false,
                autoResize: true
              });
              this.mf = new _0x21984d.Container();
              this.mf.sortableChildren = true;
              this.nf = new _0x21984d.Container();
              this.nf.zIndex = 0;
              this.mf.addChild(this.nf);
              this.uf = new _0x21984d.Container();
              this.uf.zIndex = 3;
              this.mf.addChild(this.uf);
              this.vf = [];
              this.wf = [];
              this.xf = [];
              this.ha();
            }
            var _0x39d92d = 0;
            var _0x12244d = 5;
            var _0x4d4606 = 40;
            var _0x28a2da = [{
              yf: 1,
              zf: 0.15,
              Af: 0
            }, {
              yf: 1,
              zf: 0.125,
              Af: 0
            }, {
              yf: 1,
              zf: 0.1,
              Af: 0
            }, {
              yf: 1,
              zf: 0.075,
              Af: 0
            }, {
              yf: 1,
              zf: 0.05,
              Af: 0
            }, {
              yf: 1,
              zf: 0.025,
              Af: 0
            }, {
              yf: 1,
              zf: 0,
              Af: 0.025
            }, {
              yf: 1,
              zf: 0,
              Af: 0.05
            }, {
              yf: 1,
              zf: 0,
              Af: 0.075
            }, {
              yf: 1,
              zf: 0,
              Af: 0.1
            }, {
              yf: 1,
              zf: 0,
              Af: 0.125
            }, {
              yf: 1,
              zf: 0,
              Af: 0.15
            }];
            _0x50fa2c.prototype.ha = function () {
              var _0x98321f = _0x1859a9();
              this.lf.backgroundColor = _0x39d92d;
              this.vf = new Array(_0x28a2da.length);
              for (var _0x3e7c42 = 0; _0x3e7c42 < this.vf.length; _0x3e7c42++) {
                this.vf[_0x3e7c42] = new _0x21984d.Sprite();
                this.vf[_0x3e7c42].texture = _0x98321f.xe.Bf;
                this.vf[_0x3e7c42].anchor.set(0.5);
                this.nf.addChild(this.vf[_0x3e7c42]);
              }
              this.wf = new Array(_0x98321f.xe.Cf.length);
              for (var _0x3bc706 = 0; _0x3bc706 < this.wf.length; _0x3bc706++) {
                this.wf[_0x3bc706] = new _0x21984d.Sprite();
                this.wf[_0x3bc706].texture = _0x98321f.xe.Cf[_0x3bc706];
                this.wf[_0x3bc706].anchor.set(0.5);
                this.uf.addChild(this.wf[_0x3bc706]);
              }
              this.xf = new Array(this.wf.length);
              for (var _0x3493b4 = 0; _0x3493b4 < this.xf.length; _0x3493b4++) {
                var _0x3f3fe9 = [0.6, 1, 0.5];
                this.xf[_0x3493b4] = {
                  Df: _0x2816c6.V(0, _0x32fbd9.F),
                  Ef: _0x2816c6.V(0.09, 0.16) * 0.66,
                  Ff: _0x2816c6.V(0, 1),
                  Gf: _0x2816c6.V(0, 1),
                  Hf: 0,
                  yf: _0x3f3fe9[0],
                  zf: _0x3f3fe9[1],
                  Af: _0x3f3fe9[2]
                };
              }
              this.If();
              this.Jf();
            };
            _0x50fa2c.hd = false;
            _0x50fa2c.Kf = function (_0x594a8b) {
              _0x50fa2c.hd = _0x594a8b;
            };
            _0x50fa2c.prototype.Lf = function (_0x32907d) {
              this.hf.Kf(_0x32907d);
            };
            _0x50fa2c.prototype.Jf = function () {
              var _0x2b0983 = window.devicePixelRatio ? window.devicePixelRatio : 1;
              this.ff = this.ef.width();
              this.gf = this.ef.height();
              this.lf.resize(this.ff, this.gf);
              this.lf.resolution = _0x2b0983;
              this.Eb.width = _0x2b0983 * this.ff;
              this.Eb.height = _0x2b0983 * this.gf;
              var _0x3221a7 = Math.max(this.ff, this.gf) * 0.6;
              for (var _0x12da79 = 0; _0x12da79 < this.vf.length; _0x12da79++) {
                this.vf[_0x12da79].width = _0x3221a7;
                this.vf[_0x12da79].height = _0x3221a7;
              }
            };
            _0x50fa2c.prototype.Nf = function (_0x165b35, _0x464131) {
              if (_0x50fa2c.hd) {
                var _0xef9c0f = _0x165b35 / 1000;
                var _0x2172bd = _0x464131 / 1000;
                var _0x5d5017 = this.ef.width();
                var _0xdd4022 = this.ef.height();
                for (var _0x31622b = 0; _0x31622b < this.vf.length; _0x31622b++) {
                  var _0x212477 = _0x28a2da[_0x31622b % _0x28a2da.length];
                  var _0x51e160 = this.vf[_0x31622b];
                  var _0x3a064c = _0x31622b / this.vf.length * _0x32fbd9.G;
                  var _0xa3ace8 = _0xef9c0f * 0.5 * 0.12;
                  var _0x25b4a1 = Math.cos((_0xa3ace8 + _0x3a064c) * 3) * Math.cos(_0x3a064c) - Math.sin((_0xa3ace8 + _0x3a064c) * 5) * Math.sin(_0x3a064c);
                  var _0x1bf7be = Math.cos((_0xa3ace8 + _0x3a064c) * 3) * Math.sin(_0x3a064c) + Math.sin((_0xa3ace8 + _0x3a064c) * 5) * Math.cos(_0x3a064c);
                  var _0x2a3a00 = 0.2 + Math.cos(_0x3a064c + _0xef9c0f * 0.075) * 0.2;
                  var _0x4b0588 = _0x212477.Af * 255 << 16 & 16711680 | _0x212477.zf * 255 << 8 & 65280 | _0x212477.yf * 255 & 255;
                  _0x51e160.tint = _0x4b0588;
                  _0x51e160.alpha = _0x2a3a00;
                  _0x51e160.position.set(_0x5d5017 * (0.2 + (_0x25b4a1 + 1) * 0.5 * 0.6), _0xdd4022 * (0.1 + (_0x1bf7be + 1) * 0.5 * 0.8));
                }
                var _0x46c7c8 = Math.max(_0x5d5017, _0xdd4022) * 0.05;
                for (var _0x3d4af0 = 0; _0x3d4af0 < this.wf.length; _0x3d4af0++) {
                  var _0x3fd994 = this.xf[_0x3d4af0];
                  var _0x32e41d = this.wf[_0x3d4af0];
                  var _0x52135f = _0x32fbd9.F * _0x3d4af0 / this.wf.length + _0x3fd994.Df;
                  _0x3fd994.Gf += _0x3fd994.Ef * _0x2172bd;
                  if (_0x3fd994.Gf > 1.1) {
                    _0x3fd994.Df = Math.random() * _0x32fbd9.F;
                    _0x3fd994.Ef = (0.09 + Math.random() * 0.07) * 0.66;
                    _0x3fd994.Ff = 0.15 + Math.random() * 0.7;
                    _0x3fd994.Gf = -0.1;
                  }
                  var _0x2e8bab = _0x3fd994.Ff + Math.sin(Math.sin(_0x52135f + _0xef9c0f * 0.48) * 6) * 0.03;
                  var _0x99de13 = _0x3fd994.Gf;
                  var _0x5d6858 = (0.4 + (1 + Math.sin(_0x52135f + _0xef9c0f * 0.12)) * 0.5 * 1.2) * 0.5;
                  var _0x23d2af = _0x52135f + _0x3fd994.Ef * 2 * _0xef9c0f;
                  var _0x2cf10c = _0x2816c6.P(Math.sin(Math.PI * _0x99de13), 0.1, 1);
                  var _0xc677d1 = _0x3fd994.zf * 255 << 8 & 65280 | _0x3fd994.Af * 255 << 16 & 16711680 | _0x3fd994.yf * 255 & 255;
                  _0x32e41d.alpha = _0x2cf10c;
                  _0x32e41d.tint = _0xc677d1;
                  _0x32e41d.position.set(_0x5d5017 * _0x2e8bab, _0xdd4022 * _0x99de13);
                  _0x32e41d.rotation = _0x23d2af;
                  var _0x2e54ee = _0x32e41d.texture.width / _0x32e41d.texture.height;
                  _0x32e41d.width = _0x5d6858 * _0x46c7c8;
                  _0x32e41d.height = _0x5d6858 * _0x46c7c8 * _0x2e54ee;
                }
                this.Of();
                this.lf.render(this.mf, null, true);
              }
            };
            _0x50fa2c.prototype.Pf = function () {
              var _0x4b102b = _0x1859a9();
              if (_0x4b102b.Lc.Wb()) {
                var _0x20e099 = _0x4b102b.Lc.Ub().gb(_0x12244d);
                for (var _0x45e46e = 0; _0x45e46e < _0x12244d; _0x45e46e++) {
                  this.hf.Qf(_0x45e46e, _0x20e099[_0x45e46e]);
                }
              } else {
                var _0x76579e = _0x2816c6.V(0, 1);
                for (var _0x2dd6f8 = 0; _0x2dd6f8 < _0x12244d; _0x2dd6f8++) {
                  var _0x46b520 = (_0x76579e + _0x2dd6f8 / _0x12244d) % 1;
                  var _0x2762e1 = _0x2816c6.Y(Math.floor(_0x46b520 * 360), 0.85, 0.5);
                  var _0x5cd82a = _0x2762e1[0] * 255 & 255 | _0x2762e1[1] * 255 << 8 & 65280 | _0x2762e1[2] * 255 << 16 & 16711680;
                  var _0x1dda65 = "000000" + _0x5cd82a.toString(16);
                  _0x1dda65 = "#" + _0x1dda65.substring(_0x1dda65.length - 6, _0x1dda65.length);
                  this.hf.Rf(_0x2dd6f8, _0x1dda65);
                }
              }
            };
            _0x50fa2c.prototype.If = function () {
              var _0x275a79 = Math.min(this.ff, this.gf);
              var _0x4aae5b = Date.now();
              for (var _0x134b28 = 0; _0x134b28 < _0x12244d; _0x134b28++) {
                var _0x2bb4cf = _0x134b28 / _0x12244d * _0x32fbd9.F;
                var _0x3fff55 = _0x267b9b(_0x4aae5b, 0.12, _0x2bb4cf);
                _0x3fff55.qa = _0x3fff55.qa * 4;
                _0x3fff55.ra = _0x3fff55.ra * 4;
                this.hf.Sf(_0x134b28, (this.ff + _0x3fff55.qa * _0x275a79) * 0.5, (this.gf + _0x3fff55.ra * _0x275a79) * 0.5);
              }
            };
            _0x50fa2c.prototype.Of = function () {
              var _0x36aea2 = Math.min(this.ff, this.gf);
              var _0xf691b7 = Date.now();
              for (var _0x4577b6 = 0; _0x4577b6 < _0x12244d; _0x4577b6++) {
                var _0x1f3de2 = _0x4577b6 / _0x12244d * _0x32fbd9.F;
                var _0x304578 = _0x267b9b(_0xf691b7, 0.12, _0x1f3de2);
                this.hf.Tf(_0x4577b6, (this.ff + _0x304578.qa * _0x36aea2) * 0.5, (this.gf + _0x304578.ra * _0x36aea2) * 0.5);
              }
              this.hf.Uf();
            };
            var _0x267b9b = function _0x4cb91f(_0x415cfd, _0x23d62f, _0x39ce26) {
              var _0x13a358 = _0x415cfd / 1000;
              return {
                qa: (Math.cos(_0x23d62f * _0x13a358 + _0x39ce26) + Math.cos(_0x23d62f * -32 * _0x13a358 + _0x39ce26) * 0.4 + Math.cos(_0x23d62f * 7 * _0x13a358 + _0x39ce26) * 0.7) * 0.8,
                ra: (Math.sin(_0x23d62f * _0x13a358 + _0x39ce26) + Math.sin(_0x23d62f * -32 * _0x13a358 + _0x39ce26) * 0.4 + Math.sin(_0x23d62f * 7 * _0x13a358 + _0x39ce26) * 0.7) * 0.8
              };
            };
            return _0x50fa2c;
          }();
          _0x30c50f.Vf = function () {
            function _0x4fac5f() {}
            _0x4fac5f.Wf = "consent_state_2";
            _0x4fac5f.Xf = "showPlayerNames";
            _0x4fac5f.Yf = "musicEnabled";
            _0x4fac5f.Zf = "sfxEnabled";
            _0x4fac5f.$f = "account_type";
            _0x4fac5f._f = "gameMode";
            _0x4fac5f.ag = "nickname";
            _0x4fac5f.bg = "skin";
            _0x4fac5f.cg = "prerollCount";
            _0x4fac5f.dg = "shared";
            _0x4fac5f.eg = function (_0x1a6f90, _0x2c2027, _0x51f945) {
              var _0x2c8472 = new Date();
              _0x2c8472.setTime(_0x2c8472.getTime() + _0x51f945 * 86400000);
              var _0x455f57 = "expires=" + _0x2c8472.toUTCString();
              document.cookie = _0x1a6f90 + "=" + _0x2c2027 + "; " + _0x455f57;
            };
            _0x4fac5f.fg = function (_0x173025) {
              var _0x771912 = _0x173025 + "=";
              for (var _0x2f523e = document.cookie.split(";"), _0x4f4f78 = 0; _0x4f4f78 < _0x2f523e.length; _0x4f4f78++) {
                for (var _0x5199ab = _0x2f523e[_0x4f4f78]; _0x5199ab.charAt(0) == " ";) {
                  _0x5199ab = _0x5199ab.substring(1);
                }
                if (_0x5199ab.indexOf(_0x771912) == 0) {
                  if (_0x173025 == "nickname=") {
                    _0x5199ab.substring(_0x771912.length, _0x5199ab.length).substring(0, _0x4935f5);
                  }
                  return _0x5199ab.substring(_0x771912.length, _0x5199ab.length);
                }
              }
              return "";
            };
            return _0x4fac5f;
          }();
          _0x32fbd9.gg = function () {
            function _0x36b135(_0x39b28d, _0x55590f, _0x2983e7) {
              var _0x333923 = false;
              for (var _0x5ed8e5 = _0x2983e7.length, _0x1e4e3b = 0, _0x453228 = _0x5ed8e5 - 1; _0x1e4e3b < _0x5ed8e5; _0x453228 = _0x1e4e3b++) {
                if (_0x2983e7[_0x1e4e3b][1] > _0x55590f != _0x2983e7[_0x453228][1] > _0x55590f && _0x39b28d < (_0x2983e7[_0x453228][0] - _0x2983e7[_0x1e4e3b][0]) * (_0x55590f - _0x2983e7[_0x1e4e3b][1]) / (_0x2983e7[_0x453228][1] - _0x2983e7[_0x1e4e3b][1]) + _0x2983e7[_0x1e4e3b][0]) {
                  _0x333923 = !_0x333923;
                }
              }
              return _0x333923;
            }
            var _0x4fa5fd = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
            return {
              hg: function _0x42ec03(_0x10df03, _0x644ff8) {
                return _0x36b135(_0x644ff8, _0x10df03, _0x4fa5fd);
              }
            };
          }();
          _0x30c50f.ig = function () {
            function _0x44e10c(_0x370de9) {
              var _0x4a7198 = undefined;
              _0x4a7198 = _0x370de9 > 0 ? "+" + Math.floor(_0x370de9) : _0x370de9 < 0 ? "-" + Math.floor(_0x370de9) : "0";
              var _0x4b1c42 = Math.min(1.5, 0.5 + _0x370de9 / 600);
              var _0x590c27 = undefined;
              if (_0x370de9 < 1) {
                _0x590c27 = "0xFFFFFF";
              } else if (_0x370de9 < 30) {
                var _0x2be58b = (_0x370de9 - 1) / 29;
                _0x590c27 = _0x3f5075((1 - _0x2be58b) * 1 + _0x2be58b * 0.96, (1 - _0x2be58b) * 1 + _0x2be58b * 0.82, (1 - _0x2be58b) * 1 + _0x2be58b * 0);
              } else if (_0x370de9 < 300) {
                var _0x585952 = (_0x370de9 - 30) / 270;
                _0x590c27 = _0x3f5075((1 - _0x585952) * 0.96 + _0x585952 * 0.93, (1 - _0x585952) * 0.82 + _0x585952 * 0.34, (1 - _0x585952) * 0 + _0x585952 * 0.25);
              } else if (_0x370de9 < 700) {
                var _0xc845ad = (_0x370de9 - 300) / 400;
                _0x590c27 = _0x3f5075((1 - _0xc845ad) * 0.93 + _0xc845ad * 0.98, (1 - _0xc845ad) * 0.34 + _0xc845ad * 0, (1 - _0xc845ad) * 0.25 + _0xc845ad * 0.98);
              } else {
                _0x590c27 = _0x3f5075(0.98, 0, 0.98);
              }
              var _0x3e0885 = Math.random();
              var _0x469cf2 = 1 + Math.random() * 0.5;
              return new _0x1b9349(_0x4a7198, _0x590c27, true, 0.5, _0x4b1c42, _0x3e0885, _0x469cf2);
            }
            function _0x27977a(_0x4c3f25, _0x12fb52) {
              var _0xed6152 = undefined;
              var _0x5e4cc7 = undefined;
              if (_0x12fb52) {
                _0xed6152 = 1.3;
                _0x5e4cc7 = _0x3f5075(0.93, 0.34, 0.25);
              } else {
                _0xed6152 = 1.1;
                _0x5e4cc7 = _0x3f5075(0.96, 0.82, 0);
              }
              return new _0x1b9349(_0x4c3f25, _0x5e4cc7, true, 0.5, _0xed6152, 0.5, 0.7);
            }
            function _0x3f5075(_0x4c965b, _0x453ac6, _0x12e3d6) {
              return ((_0x4c965b * 255 & 255) << 16) + ((_0x453ac6 * 255 & 255) << 8) + (_0x12e3d6 * 255 & 255);
            }
            var _0x4ad032 = _0x2816c6.M(_0x21984d.Container, function () {
              _0x21984d.Container.call(this);
              this.jg = [];
              this.kg = 0;
            });
            _0x4ad032.prototype.lg = function (_0x55818d) {
              this.kg += _0x55818d;
              if (this.kg >= 1) {
                var _0xc1fe7b = Math.floor(this.kg);
                this.kg -= _0xc1fe7b;
                var _0x18ed28 = _0x44e10c(_0xc1fe7b);
                this.addChild(_0x18ed28);
                this.jg.push(_0x18ed28);
              }
            };
            _0x4ad032.prototype.mg = function (_0xb3e8fd) {
              _wwc.fnSetCounts("count", _0xb3e8fd);
              if (_0xb3e8fd) {
                if (!(window.bbs.headshot % 10)) {
                  _0x304373.fxdo("shaokahn");
                } else {
                  _0x304373.fxdo("headshot");
                }
                var _0x5a2b78 = _0x27977a(_0x2816c6.H("index.game.floating.headshot"), true);
                this.addChild(_0x5a2b78);
                this.jg.push(_0x5a2b78);
              } else {
                var _0xfbccc3 = _0x27977a(_0x2816c6.H("index.game.floating.wellDone"), false);
                this.addChild(_0xfbccc3);
                this.jg.push(_0xfbccc3);
              }
            };
            _0x4ad032.prototype.Uf = function (_0x49be25, _0x2f953a) {
              var _0x196473 = _0x1859a9().og.af.ng;
              var _0x2733ff = _0x196473.lf.width / _0x196473.lf.resolution;
              var _0x316cbf = _0x196473.lf.height / _0x196473.lf.resolution;
              for (var _0x1b7b36 = 0; _0x1b7b36 < this.jg.length;) {
                var _0x4046fe = this.jg[_0x1b7b36];
                _0x4046fe.pg = _0x4046fe.pg + _0x2f953a / 2000 * _0x4046fe.qg;
                _0x4046fe.rg = _0x4046fe.rg + _0x2f953a / 2000 * _0x4046fe.sg;
                _0x4046fe.alpha = Math.sin(Math.PI * _0x4046fe.rg) * 0.5;
                _0x4046fe.scale.set(_0x4046fe.pg);
                _0x4046fe.position.x = _0x2733ff * (0.25 + _0x4046fe.tg * 0.5);
                _0x4046fe.position.y = _0x4046fe.ug ? _0x316cbf * (1 - (1 + _0x4046fe.rg) * 0.5) : _0x316cbf * (1 - (0 + _0x4046fe.rg) * 0.5);
                if (_0x4046fe.rg > 1) {
                  _0x2816c6.U(_0x4046fe);
                  this.jg.splice(_0x1b7b36, 1);
                  _0x1b7b36--;
                }
                _0x1b7b36++;
              }
            };
            var _0x1b9349 = function () {
              return _0x2816c6.M(_0x21984d.Text, function (_0x55b36a, _0x1f768c, _0xea433, _0x5bb658, _0x2d1370, _0x6bda29, _0x3edd50) {
                _0x21984d.Text.call(this, _0x55b36a, {
                  fill: _0x1f768c,
                  fontFamily: "PTSans",
                  fontSize: 36
                });
                this.anchor.set(0.5);
                this.ug = _0xea433;
                this.pg = _0x5bb658;
                this.qg = _0x2d1370;
                this.tg = _0x6bda29;
                this.rg = 0;
                this.sg = _0x3edd50;
              });
            }();
            return _0x4ad032;
          }();
          _0x30c50f.be = function () {
            function _0x8d778a(_0x4a644f, _0x446381) {
              this.Xd = _0x4a644f;
              this.oa = _0x446381;
            }
            return _0x8d778a;
          }();
          _0x30c50f.Ac = {
            vg: 0,
            zc: 16
          };
          _0x30c50f.GameParams = function () {
            function _0x1de858() {
              this.xg = _0x30c50f.Ac.vg;
              this.yg = 0;
              this.zg = 500;
              this.Ag = 4000;
              this.Bg = 7000;
            }
            _0x1de858.Cg = 0;
            _0x1de858.prototype.Dg = function () {
              return this.zg * 1.02;
            };
            return _0x1de858;
          }();
          _0x30c50f.Eg = function () {
            function _0x1b7d6a(_0x4b18c8) {
              this.ef = _0x4b18c8;
              this.Eb = _0x4b18c8.get()[0];
              this.lf = new _0x21984d.Renderer({
                view: _0x4b18c8.get()[0],
                backgroundColor: _0x5afaf2,
                antialias: false
              });
              this.mf = new _0x21984d.Container();
              this.mf.sortableChildren = true;
              this.Fg = Math.floor(Math.random() * 360);
              this.Gg = 0;
              this.Hg = 0;
              this.Ig = 15;
              this.Jg = 0.5;
              this.Kg = 0;
              this.Lg = _0x3ca652.Lg(_0x30c50f);
              this.Ng = new _0x21984d.Graphics();
              this.Og = new _0x21984d.Container();
              this.Pg = new _0x21984d.Container();
              this.Pg.sortableChildren = true;
              this.Qg = new _0x21984d.Container();
              this.Rg = new _0x21984d.Container();
              this.Rg.sortableChildren = true;
              this.Sg = new _0x21984d.Container();
              this.Tg = new _0x559a6e();
              this.Ug = new _0x45c729();
              this.Vg = new _0x546724();
              this.Wg = new _0x30c50f.ig();
              this.Xg = new _0x21984d.Sprite();
              this.Yg = {
                x: 0,
                y: 0
              };
              this.ha();
            }
            var _0x5afaf2 = 0;
            _0x1b7d6a.prototype.ha = function () {
              this.lf.backgroundColor = _0x5afaf2;
              this.Lg.sf.zIndex = 1;
              this.mf.addChild(this.Lg.sf);
              this.Ng.zIndex = 20;
              this.mf.addChild(this.Ng);
              this.Og.zIndex = 5000;
              this.mf.addChild(this.Og);
              this.Pg.zIndex = 5100;
              this.mf.addChild(this.Pg);
              this.Qg.zIndex = 10000;
              this.mf.addChild(this.Qg);
              createLine(this.mf, this.Lg.sf);
              this.Xg.texture = _0x1859a9().xe.Zg;
              this.Xg.anchor.set(0.5);
              this.Xg.zIndex = 1;
              this.Rg.addChild(this.Xg);
              this.Sg.alpha = 0.6;
              this.Sg.zIndex = 2;
              this.Rg.addChild(this.Sg);
              this.Wg.zIndex = 3;
              this.Rg.addChild(this.Wg);
              this.Tg.alpha = 0.8;
              this.Tg.zIndex = 4;
              this.Rg.addChild(this.Tg);
              this.Ug.zIndex = 5;
              this.Rg.addChild(this.Ug);
              this.Vg.zIndex = 6;
              this.Rg.addChild(this.Vg);
              this.Jf();
            };
            _0x1b7d6a.prototype.Jf = function () {
              var _0x43e6da = this.ef.width();
              var _0x4a9cd9 = this.ef.height();
              var _0x4b801e = window.bbs.display.custom ? window.bbs.display.clock.x * _0x43e6da : 0;
              var _0x3b831d = window.bbs.display.custom ? window.bbs.display.clock.y * _0x4a9cd9 : 0;
              var _0x72ead9 = window.bbs.display.custom ? window.bbs.display.top.x * _0x43e6da : _0x43e6da - 255;
              var _0x385e33 = window.bbs.display.custom ? window.bbs.display.top.y * screen.height : 1;
              var _0x1da8aa = window.bbs.display.clock.rc ? _0x3bf684[window.bbs.display.clock.rc] : 0;
              var _0x3a558d = window.bbs.display.top.rt ? _0x3bf684[window.bbs.display.top.rt] : 0;
              var _0x15c1ce = window.devicePixelRatio ? window.devicePixelRatio : 1;
              var _0x488959 = _0x15c1ce * _0x43e6da;
              var _0x2c39ae = _0x15c1ce * _0x4a9cd9;
              var _0x205214 = Math.min(Math.min(_0x43e6da, _0x4a9cd9), Math.max(_0x43e6da, _0x4a9cd9) * 0.625);
              this.lf.resize(_0x43e6da, _0x4a9cd9);
              this.lf.resolution = _0x15c1ce;
              this.Eb.width = _0x488959;
              this.Eb.height = _0x2c39ae;
              this.Jg = _0x205214;
              this.Xg.position.set(_0x43e6da / 2, _0x4a9cd9 / 2);
              this.Xg.width = _0x43e6da;
              this.Xg.height = _0x4a9cd9;
              this.Tg.position.set(60 + _0x4b801e, 60 + _0x3b831d + (_0x1da8aa ? this.Tg.height / 4 : 0));
              this.Ug.position.set(110, 10);
              this.Vg.position.set(_0x72ead9, _0x385e33 + (_0x3a558d ? this.Vg.height : 0));
              this.Tg.rotation = _0x1da8aa;
              this.Vg.rotation = _0x3a558d;
            };
            _0x1b7d6a.prototype.Uf = function (_0x3d0ebc, _0x47db30) {
              var _0x513120 = _0x4bb95a;
              this.Ig = 15;
              this.Og.removeChildren();
              this.Pg.removeChildren();
              this.Qg.removeChildren();
              this.Sg.removeChildren();
              this.Lg.$g(_0x3d0ebc.xg === _0x30c50f.Ac.vg ? _0x513120.xe._g : _0x513120.xe.ah);
              var _0x278c5f = this.Ng;
              _0x278c5f.clear();
              _0x278c5f.lineStyle(0.2, 16711680, 0.6);
              _0x278c5f.drawCircle(0, 0, _0x3d0ebc.zg);
              _0x278c5f.endFill();
              this.Vg.bh = _0x47db30;
              this.Sg.visible = _0x47db30;
            };
            _0x1b7d6a.prototype.Nf = function (_0x192f37, _0x4cf225) {
              if (this.lf.width <= 5) {
                return;
              }
              var _0x3f72f6 = _0x4bb95a;
              var _0x21aa91 = _0x3f72f6.dh.ch;
              var _0x13c814 = this.lf.width / this.lf.resolution;
              var _0x1ac85d = this.lf.height / this.lf.resolution;
              this.Ig = _0x3ca652.$F.Q(this.Ig, _0x3f72f6.dh.eh, _0x4cf225, 0.002);
              var _0x1fc284 = this.Jg / (this.Ig * _0x3cf613);
              var _0x318101 = _0x3f72f6.dh.ch.dd[_0x3ca652.$C.fd.qd];
              var _0x5e95d1 = _0x318101 != null && _0x318101.hd;
              this.Kg = _0x3ca652.$F.P(this.Kg + _0x4cf225 / 1000 * ((_0x5e95d1 ? 1 : 0) * 0.1 - this.Kg), 0, 1);
              this.Xg.alpha = this.Kg;
              this.Fg = (this.Fg + _0x4cf225 * 0.01) % 360;
              this.Gg = Math.sin(_0x192f37 / 1200 * 2 * Math.PI);
              var _0x5db3b3 = _0x21aa91.fh();
              this.Yg.x = _0x3ca652.$F.R(this.Yg.x, _0x5db3b3.x, _0x4cf225, 0.5, 33.333);
              this.Yg.y = _0x3ca652.$F.R(this.Yg.y, _0x5db3b3.y, _0x4cf225, 0.5, 33.333);
              var _0xb789c1 = _0x13c814 / _0x1fc284 / 2;
              var _0x198350 = _0x1ac85d / _0x1fc284 / 2;
              _0x3f72f6.dh.gh(this.Yg.x - _0xb789c1 * 1.3, this.Yg.x + _0xb789c1 * 1.3, this.Yg.y - _0x198350 * 1.3, this.Yg.y + _0x198350 * 1.3);
              if (!bbs.backgroundIsCustom) {
                this.Lg.Uf(this.Yg.x, this.Yg.y, _0xb789c1 * 2, _0x198350 * 2);
              }
              var _0x33064b = _0x3f72f6.dh.hh.zg;
              this.mf.scale.set(_0x1fc284, _0x1fc284);
              this.mf.position.set(_0x13c814 / 2 - this.Yg.x * _0x1fc284, _0x1ac85d / 2 - this.Yg.y * _0x1fc284);
              var _0xf44dff = Math.hypot(_0x5db3b3.x, _0x5db3b3.y);
              if (_0xf44dff > _0x33064b - 10) {
                this.Hg = _0x3ca652.$F.P(1 + (_0xf44dff - _0x33064b) / 10, 0, 1);
                var _0x517916 = Math.cos(this.Fg * _0x3ca652.$V.F / 360) * (1 - this.Hg) + this.Hg * 1;
                var _0x4d98b2 = Math.sin(this.Fg * _0x3ca652.$V.F / 360) * (1 - this.Hg);
                var _0x4019a6 = (Math.atan2(_0x4d98b2, _0x517916) + _0x3ca652.$V.F) % _0x3ca652.$V.F * 360 / _0x3ca652.$V.F;
                var _0x5e8dba = this.Hg * (0.5 + this.Gg * 0.5);
                var _0x1a06ca = _0x3ca652.$F.Y(Math.floor(_0x4019a6), 1, 0.75 - this.Hg * 0.25);
                this.Lg.Ec(_0x1a06ca[0], _0x1a06ca[1], _0x1a06ca[2], 0.1 + _0x5e8dba * 0.2);
              } else {
                this.Hg = 0;
                var _0x8aa9ae = _0x3ca652.$F.Y(Math.floor(this.Fg), 1, 0.75);
                this.Lg.Ec(_0x8aa9ae[0], _0x8aa9ae[1], _0x8aa9ae[2], 0.1);
              }
              for (var _0x2736d7 = 0; _0x2736d7 < this.Sg.children.length; _0x2736d7++) {
                var _0x331099 = this.Sg.children[_0x2736d7];
                _0x331099.position.set(_0x13c814 / 2 - (this.Yg.x - _0x331099.ih.x) * _0x1fc284, _0x1ac85d / 2 - (this.Yg.y - _0x331099.ih.y) * _0x1fc284);
              }
              this.Tg.jh.position.x = _0x5db3b3.x / _0x33064b * this.Tg.kh;
              this.Tg.jh.position.y = _0x5db3b3.y / _0x33064b * this.Tg.kh;
              _wwcio.myLocation = this.Tg.jh;
              this.Ug.lh(_0x192f37);
              this.Wg.Uf(_0x192f37, _0x4cf225);
              this.lf.render(this.mf, null, true);
              this.lf.render(this.Rg, null, false);
            };
            _0x1b7d6a.prototype.mh = function (_0x151c2d, _0x21bde2) {
              _0x21bde2.nh.Cc.Qc().zIndex = (_0x151c2d + 2147483648) / 4294967296 * 5000;
              this.Og.addChild(_0x21bde2.nh.Dc.Qc());
              this.Pg.addChild(_0x21bde2.nh.Cc.Qc());
            };
            _0x1b7d6a.prototype.oh = function (_0x565fb1, _0x44ec11, _0x67b2c6) {
              _0x44ec11.nc.zIndex = _0x1859a9().dh.hh.yg ? 0 : 10 + (_0x565fb1 + 32768) / 65536 * 5000;
              this.Qg.addChild(_0x44ec11.nc);
              if (_0x565fb1 != _0x1859a9().dh.hh.yg) {
                this.Sg.addChild(_0x67b2c6);
              }
            };
            var _0x559a6e = function () {
              return _0x2816c6.M(_0x21984d.Container, function () {
                _0x21984d.Container.call(this);
                this.kh = 40;
                this.qh = new _0x21984d.Sprite();
                this.qh.anchor.set(0.5);
                this.qh.alpha = 0.5;
                var _0x4689d0 = new _0x21984d.Graphics();
                _0x4689d0.beginFill("black", 0.4);
                _0x4689d0.drawCircle(0, 0, this.kh);
                _0x4689d0.endFill();
                _0x4689d0.lineStyle(1, 16225317);
                _0x4689d0.drawCircle(0, 0, this.kh);
                _0x4689d0.moveTo(0, -this.kh);
                _0x4689d0.lineTo(0, +this.kh);
                _0x4689d0.moveTo(-this.kh, 0);
                _0x4689d0.lineTo(+this.kh, 0);
                _0x4689d0.endFill();
                if (bbs.display.customClock) {
                  _0x4689d0 = new _0x21984d.Sprite();
                  _0x4689d0.texture = new _0x21984d.Texture.from(bbs.display.customClock.file);
                  _0x4689d0.width = this.kh * 2.75;
                  _0x4689d0.height = this.kh * 2.75;
                  _0x4689d0.anchor.set(0.5);
                }
                this.jh = new _0x21984d.Graphics();
                this.jh.zIndex = 2;
                this.jh.alpha = 0.9;
                this.jh.beginFill(16711680);
                this.jh.drawCircle(0, 0, this.kh * 0.1);
                this.jh.endFill();
                this.jh.lineStyle(1, "black");
                this.addChild(_0x4689d0);
                this.addChild(this.qh);
                this.addChild(this.jh);
                this.addChild(w2c2020.conteinerTeam);
              });
            }();
            var _0x45c729 = function () {
              var _0x1d0474 = _0x2816c6.M(_0x21984d.Container, function () {
                _0x21984d.Container.call(this);
                this.rh = {};
              });
              _0x1d0474.prototype.lh = function (_0x13c516) {
                var _0x5958ce = 0.5 + Math.cos(_0x32fbd9.F * (_0x13c516 / 1000 / 1.6)) * 0.5;
                for (var _0x4f4394 in this.rh) {
                  var _0x18f267 = this.rh[_0x4f4394];
                  var _0x558164 = _0x18f267.sh;
                  _0x18f267.alpha = 1 - _0x558164 + _0x558164 * _0x5958ce;
                }
              };
              _0x1d0474.prototype.Uf = function (_0x5b996d) {
                for (var _0x365735 in this.rh) {
                  if (_0x5b996d[_0x365735] == null || !_0x5b996d[_0x365735].hd) {
                    _0x2816c6.U(this.rh[_0x365735]);
                    delete this.rh[_0x365735];
                  }
                }
                var _0x15a5a7 = 0;
                for (var _0x2d962f in _0x5b996d) {
                  var _0xf310b2 = _0x5b996d[_0x2d962f];
                  if (_0xf310b2.hd) {
                    var _0x190928 = this.rh[_0x2d962f];
                    if (!_0x190928) {
                      var _0x27e736 = _0x1859a9().Lc.Ub().pb(_0xf310b2.nd).ub;
                      _0x190928 = new _0x2914a9();
                      _0x190928.texture = _0x27e736.Ea();
                      _0x190928.width = 40;
                      _0x190928.height = 40;
                      this.rh[_0x2d962f] = _0x190928;
                      this.addChild(_0x190928);
                    }
                    _0x190928.sh = _0xf310b2.od;
                    _0x190928.position.x = _0x15a5a7;
                    _0x15a5a7 += 40;
                  }
                }
              };
              var _0x2914a9 = function () {
                return _0x2816c6.M(_0x21984d.Sprite, function () {
                  _0x21984d.Sprite.call(this);
                  this.sh = 0;
                });
              }();
              return _0x1d0474;
            }();
            var _0x546724 = function () {
              var _0x41b51f = _0x2816c6.M(_0x21984d.Container, function () {
                _0x21984d.Container.call(this);
                this.bh = true;
                this.th = 12;
                this.uh = 9;
                this.jg = [];
                for (var _0x94f944 = 0; _0x94f944 < 14; _0x94f944++) {
                  this.vh();
                }
              });
              _0x41b51f.prototype.Uf = function (_0x2ecdf3) {
                var _0x51ff49 = _0x1859a9();
                var _0x21a430 = _0x51ff49.dh.hh.xg === _0x30c50f.Ac.zc;
                var _0x5b9881 = 0;
                var _0x34146d = 0;
                if (_0x34146d >= this.jg.length) {
                  this.vh();
                }
                this.jg[_0x34146d].wh(1, "white");
                this.jg[_0x34146d].xh("", _0x2816c6.H("index.game.leader.top10"), "(" + _0x51ff49.dh.yh + " online)");
                this.jg[_0x34146d].position.y = _0x5b9881;
                _0x5b9881 += this.th;
                _0x34146d += 1;
                if (_0x2ecdf3.zh.length > 0) {
                  _0x5b9881 += this.uh;
                }
                for (var _0x4d053c = 0; _0x4d053c < _0x2ecdf3.zh.length; _0x4d053c++) {
                  var _0xd4a918 = _0x2ecdf3.zh[_0x4d053c];
                  var _0x10c9ad = _0x51ff49.Lc.Ub().jb(_0xd4a918.Ah);
                  var _0x4db6e6 = "";
                  var _0x178234 = _0x51ff49.Lc.Xb().textDict[_0x10c9ad.qb];
                  if (_0x178234 != null) {
                    _0x4db6e6 = _0x2816c6.I(_0x178234);
                  }
                  if (_0x34146d >= this.jg.length) {
                    this.vh();
                  }
                  this.jg[_0x34146d].wh(0.8, _0x10c9ad.rb.tb);
                  this.jg[_0x34146d].xh("" + (_0x4d053c + 1), _0x4db6e6, "" + Math.floor(_0xd4a918.Bh));
                  this.jg[_0x34146d].position.y = _0x5b9881;
                  _0x5b9881 += this.th;
                  _0x34146d += 1;
                }
                if (_0x2ecdf3.Ch.length > 0) {
                  _0x5b9881 += this.uh;
                }
                for (var _0x444170 = 0; _0x444170 < _0x2ecdf3.Ch.length; _0x444170++) {
                  var _0x344445 = _0x2ecdf3.Ch[_0x444170];
                  var _0x337864 = _0x51ff49.dh.hh.yg == _0x344445.Dh;
                  var _0x55b187;
                  var _0x2f5b73;
                  if (_0x337864) {
                    _0x55b187 = "white";
                    _0x2f5b73 = _0x51ff49.dh.ch.Eh.ma;
                  } else {
                    var _0x181a31 = _0x51ff49.dh.Fh[_0x344445.Dh];
                    if (!_0x55b187) {
                      _0x55b187 = "white";
                    }
                    if (_0x181a31 != null) {
                      _0x55b187 = _0x21a430 ? _0x51ff49.Lc.Ub().jb(_0x181a31.Eh.Gh).rb.tb : _0x51ff49.Lc.Ub().ib(_0x181a31.Eh.Hh).tb || _0x55b187;
                      _0x2f5b73 = this.bh && _0x7613e6 ? _0x181a31.Eh.ma : "---";
                    } else {
                      _0x55b187 = "gray";
                      _0x2f5b73 = "?";
                    }
                  }
                  if (_0x337864) {
                    _0x5b9881 += this.uh;
                  }
                  if (_0x34146d >= this.jg.length) {
                    this.vh();
                  }
                  this.jg[_0x34146d].wh(_0x337864 ? 1 : 0.8, _0x55b187);
                  this.jg[_0x34146d].xh("" + (_0x444170 + 1), _0x2f5b73, "" + Math.floor(_0x344445.Bh));
                  this.jg[_0x34146d].position.y = _0x5b9881;
                  _0x5b9881 += this.th;
                  _0x34146d += 1;
                  if (_0x337864) {
                    _0x5b9881 += this.uh;
                  }
                  if (window.bbs.lr && _0x444170 === 2) {
                    break;
                  }
                }
                if (_0x51ff49.dh.Ih > (window.bbs.lr ? 3 : _0x2ecdf3.Ch.length)) {
                  _0x5b9881 += this.uh;
                  if (_0x34146d >= this.jg.length) {
                    this.vh();
                  }
                  this.jg[_0x34146d].wh(1, "white");
                  this.jg[_0x34146d].xh("" + _0x51ff49.dh.Ih, _0x51ff49.dh.ch.Eh.ma, "" + Math.floor(_0x51ff49.dh.ch.Bh));
                  this.jg[_0x34146d].position.y = _0x5b9881;
                  _0x5b9881 += this.th;
                  _0x34146d += 1;
                  _0x5b9881 += this.uh;
                }
                while (this.jg.length > _0x34146d) {
                  _0x2816c6.U(this.jg.pop());
                }
              };
              _0x41b51f.prototype.vh = function () {
                var _0xf80662 = new _0x34672f();
                _0xf80662.position.y = 0;
                if (this.jg.length > 0) {
                  _0xf80662.position.y = this.jg[this.jg.length - 1].position.y + this.th;
                }
                this.jg.push(_0xf80662);
                this.addChild(_0xf80662);
              };
              var _0x34672f = function () {
                var _0x3c13a0 = _0x2816c6.M(_0x21984d.Container, function () {
                  _0x21984d.Container.call(this);
                  this.Jh = new _0x21984d.Text("", {
                    fontFamily: "PTSans",
                    fontSize: 12,
                    fill: "white"
                  });
                  this.Jh.anchor.x = 1;
                  this.Jh.position.x = 30;
                  this.addChild(this.Jh);
                  this.Kh = new _0x21984d.Text("", {
                    fontFamily: "PTSans",
                    fontSize: 12,
                    fill: "white"
                  });
                  this.Kh.anchor.x = 0;
                  this.Kh.position.x = 35;
                  this.addChild(this.Kh);
                  this.Lh = new _0x21984d.Text("", {
                    fontFamily: "PTSans",
                    fontSize: 12,
                    fill: "white"
                  });
                  this.Lh.anchor.x = 1;
                  this.Lh.position.x = 250;
                  this.addChild(this.Lh);
                });
                _0x3c13a0.prototype.xh = function (_0x112c76, _0x3bb5c5, _0x2b892f) {
                  this.Jh.text = _0x112c76;
                  this.Lh.text = _0x2b892f;
                  this.Kh.text = _0x3bb5c5;
                };
                _0x3c13a0.prototype.wh = function (_0x2d1769, _0x26b0f1) {
                  this.Jh.alpha = _0x2d1769;
                  this.Jh.style.fill = _0x26b0f1;
                  this.Kh.alpha = _0x2d1769;
                  this.Kh.style.fill = _0x26b0f1;
                  this.Lh.alpha = _0x2d1769;
                  this.Lh.style.fill = _0x26b0f1;
                };
                return _0x3c13a0;
              }();
              return _0x41b51f;
            }();
            return _0x1b7d6a;
          }();
          _0x30c50f.MessageProcessor = function () {
            function _0x157b41(_0x59892f) {
              this.dh = _0x59892f;
              this.Nh = [];
              this.Oh = 0;
            }
            _0x157b41.prototype.Ph = function (_0xad7dde) {
              this.Nh.push(new DataView(_0xad7dde));
            };
            _0x157b41.prototype.Qh = function () {
              this.Nh = [];
              this.Oh = 0;
            };
            _0x157b41.prototype.Rh = function () {
              for (var _0x51e694 = 0; _0x51e694 < 16; _0x51e694++) {
                if (this.Nh.length === 0) {
                  return;
                }
                var _0x41ab5d = this.Nh.shift();
                try {
                  this.Sh(_0x41ab5d);
                } catch (_0x222c4b) {
                  throw _0x222c4b;
                }
              }
            };
            _0x157b41.prototype.Sh = function (_0x2daffd) {
              switch (_0x2daffd.ba(0) & 255) {
                case 0:
                  this.Th(_0x2daffd, 1);
                  return;
                case 1:
                  this.Uh(_0x2daffd, 1);
                  return;
                case 2:
                  this.Vh(_0x2daffd, 1);
                  return;
                case 3:
                  this.Wh(_0x2daffd, 1);
                  return;
                case 4:
                  this.Xh(_0x2daffd, 1);
                  return;
                case 5:
                  this.Yh(_0x2daffd, 1);
                  return;
              }
            };
            _0x157b41.prototype.Th = function (_0x4bcedd, _0x8aec04) {
              this.dh.hh.xg = _0x4bcedd.ba(_0x8aec04);
              _0x8aec04 += 1;
              var _0x44c8ad = _0x4bcedd.ca(_0x8aec04);
              _0x8aec04 += 2;
              this.dh.hh.yg = _0x44c8ad;
              this.dh.ch.Eh.ae = _0x44c8ad;
              this.dh.hh.zg = _0x4bcedd.ea(_0x8aec04);
              _0x8aec04 += 4;
              this.dh.hh.Ag = _0x4bcedd.ea(_0x8aec04);
              _0x8aec04 += 4;
              this.dh.hh.Bg = _0x4bcedd.ea(_0x8aec04);
              _0x8aec04 += 4;
              _0x1859a9().og.af.ng.Uf(this.dh.hh, _0x1859a9().og.$h.Zh());
              return _0x8aec04;
            };
            _0x157b41.prototype.Uh = function (_0x36f98d, _0x2b4baf) {
              var _0x56c302 = this.Oh++;
              var _0x3c092 = _0x36f98d.ca(_0x2b4baf);
              _0x2b4baf += 2;
              var _0x7c41be = undefined;
              _0x7c41be = this._h(_0x36f98d, _0x2b4baf);
              _0x2b4baf += this.ai(_0x7c41be);
              for (var _0x428d12 = 0; _0x428d12 < _0x7c41be; _0x428d12++) {
                _0x2b4baf = this.bi(_0x36f98d, _0x2b4baf);
              }
              _0x7c41be = this._h(_0x36f98d, _0x2b4baf);
              _0x2b4baf += this.ai(_0x7c41be);
              for (var _0x542d92 = 0; _0x542d92 < _0x7c41be; _0x542d92++) {
                _0x2b4baf = this.ci(_0x36f98d, _0x2b4baf);
              }
              _0x7c41be = this._h(_0x36f98d, _0x2b4baf);
              _0x2b4baf += this.ai(_0x7c41be);
              for (var _0x1afc3f = 0; _0x1afc3f < _0x7c41be; _0x1afc3f++) {
                _0x2b4baf = this.di(_0x36f98d, _0x2b4baf);
              }
              _0x7c41be = this._h(_0x36f98d, _0x2b4baf);
              _0x2b4baf += this.ai(_0x7c41be);
              for (var _0x564249 = 0; _0x564249 < _0x7c41be; _0x564249++) {
                _0x2b4baf = this.ei(_0x36f98d, _0x2b4baf);
              }
              _0x7c41be = this._h(_0x36f98d, _0x2b4baf);
              _0x2b4baf += this.ai(_0x7c41be);
              for (var _0x2e834f = 0; _0x2e834f < _0x7c41be; _0x2e834f++) {
                _0x2b4baf = this.fi(_0x36f98d, _0x2b4baf);
              }
              _0x7c41be = this._h(_0x36f98d, _0x2b4baf);
              _0x2b4baf += this.ai(_0x7c41be);
              for (var _0x5ebeab = 0; _0x5ebeab < _0x7c41be; _0x5ebeab++) {
                _0x2b4baf = this.gi(_0x36f98d, _0x2b4baf);
              }
              _0x7c41be = this._h(_0x36f98d, _0x2b4baf);
              _0x2b4baf += this.ai(_0x7c41be);
              for (var _0x512c9d = 0; _0x512c9d < _0x7c41be; _0x512c9d++) {
                _0x2b4baf = this.hi(_0x36f98d, _0x2b4baf);
              }
              _0x7c41be = this._h(_0x36f98d, _0x2b4baf);
              _0x2b4baf += this.ai(_0x7c41be);
              for (var _0x2723cf = 0; _0x2723cf < _0x7c41be; _0x2723cf++) {
                _0x2b4baf = this.ii(_0x36f98d, _0x2b4baf);
              }
              if (_0x56c302 > 0) {
                _0x2b4baf = this.ji(_0x36f98d, _0x2b4baf);
              }
              this.dh.ki(_0x56c302, _0x3c092);
              return _0x2b4baf;
            };
            _0x157b41.prototype.ei = function (_0x228d16, _0x8bdec) {
              var _0x1ddb0b = new _0x30c50f.Worm.li();
              _0x1ddb0b.ae = _0x228d16.ca(_0x8bdec);
              _0x8bdec += 2;
              _0x1ddb0b.Gh = this.dh.hh.xg === _0x30c50f.Ac.zc ? _0x228d16.ba(_0x8bdec++) : _0x3ca652.ps ? _0x3ca652.ps : _0x30c50f.GameParams.Cg;
              _0x1ddb0b.Hh = _0x228d16.ca(_0x8bdec);
              _0x3ca652.p("Hh|lj", _0x8bdec);
              _0x8bdec += 2;
              _0x1ddb0b.ni = _0x228d16.ca(_0x8bdec);
              _0x3ca652.p("ni|mj", _0x8bdec);
              _0x8bdec += 2;
              _0x1ddb0b.oi = _0x228d16.ca(_0x8bdec);
              _0x3ca652.p("oi|nj", _0x8bdec);
              _0x8bdec += 2;
              _0x1ddb0b.pi = _0x228d16.ca(_0x8bdec);
              _0x3ca652.p("pi|pj", _0x8bdec);
              _0x8bdec += 2;
              _0x1ddb0b.qi = _0x228d16.ca(_0x8bdec);
              _0x3ca652.p("qi|oj", _0x8bdec);
              _0x8bdec += 2;
              var _0x32c6dc = _0x228d16.ba(_0x8bdec);
              _0x8bdec += 1;
              var _0x18bcad = "";
              for (var _0x5c9ec1 = 0; _0x5c9ec1 < _0x32c6dc; _0x5c9ec1++) {
                _0x18bcad += String.fromCharCode(_0x228d16.ca(_0x8bdec));
                _0x8bdec += 2;
              }
              _0x1ddb0b.ma = _0x18bcad;
              if (this.dh.hh.yg === _0x1ddb0b.ae) {
                var _0x49bd75 = Object.keys(_0x3ca652.pm);
                _0x49bd75.forEach(function (_0x12f344) {
                  _0x1ddb0b[_0x12f344] = window.bbs.PropertyManager[_0x3ca652.pm[_0x12f344].p];
                  _0x228d16.setInt16(_0x3ca652.pm[_0x12f344].i, _0x1ddb0b[_0x12f344]);
                });
                this.dh.ch.ri(_0x1ddb0b);
                _wwc.startGame();
                _wwcio.connect(_0x1ddb0b);
              } else {
                var _0x2680c8 = this.dh.Fh[_0x1ddb0b.ae];
                if (_0x2680c8 != null) {
                  _0x2680c8.si();
                }
                var _0x5b14ad = new _0x30c50f.Worm(this.dh.hh);
                _0x5b14ad.ti(_0x1859a9().og.af.ng);
                this.dh.Fh[_0x1ddb0b.ae] = _0x5b14ad;
                _0x5b14ad.ri(_0x1ddb0b);
              }
              _0x3ca652.ae(_0x228d16, _0x1ddb0b, this);
              return _0x8bdec;
            };
            _0x157b41.prototype.fi = function (_0x17313d, _0x39ce48) {
              var _0x3f08fb = _0x17313d.ca(_0x39ce48);
              _0x39ce48 += 2;
              var _0x502f40 = _0x17313d.ba(_0x39ce48);
              _0x39ce48++;
              var _0x40cb0f = !!(_0x502f40 & 1);
              var _0x2493a2 = !!(_0x502f40 & 2);
              var _0x54e158 = 0;
              if (_0x40cb0f) {
                _0x54e158 = _0x17313d.ca(_0x39ce48);
                _0x39ce48 += 2;
              }
              var _0x2c9a44 = this.vi(_0x3f08fb);
              if (_0x2c9a44 === undefined) {
                return _0x39ce48;
              }
              _0x2c9a44.wi = false;
              if (!_0x2c9a44.xi) {
                return _0x39ce48;
              }
              var _0x288145 = this.vi(_0x3f08fb);
              if (_0x40cb0f && _0x288145 !== undefined && _0x288145.xi) {
                if (_0x54e158 === this.dh.hh.yg) {
                  var _0x1493e9 = this.dh.ch.fh();
                  var _0x2b4a39 = _0x2c9a44.yi(_0x1493e9.x, _0x1493e9.y);
                  Math.max(0, 1 - _0x2b4a39.distance / (this.dh.eh * 0.5));
                  if (_0x2b4a39.distance < this.dh.eh * 0.5) {
                    var _0x301609 = _0x1859a9().og.af.ng.Wg;
                    _0x301609.mg(_0x2493a2);
                    _wwcio["update"](_0x502f40, _0x2493a2);
                  }
                } else if (_0x3f08fb === this.dh.hh.yg) ;else {
                  var _0x54b333 = this.dh.ch.fh();
                  var _0x42f3a6 = _0x2c9a44.yi(_0x54b333.x, _0x54b333.y);
                  Math.max(0, 1 - _0x42f3a6.distance / (this.dh.eh * 0.5));
                }
              } else if (_0x3f08fb === this.dh.hh.yg) ;else {
                var _0x152c53 = this.dh.ch.fh();
                var _0x17c700 = _0x2c9a44.yi(_0x152c53.x, _0x152c53.y);
                Math.max(0, 1 - _0x17c700.distance / (this.dh.eh * 0.5));
              }
              return _0x39ce48;
            };
            _0x157b41.prototype.ii = function (_0x19d51d, _0x1ca89f) {
              var _0x473d9f = _0x19d51d.ca(_0x1ca89f);
              _0x1ca89f += 2;
              var _0x82b688 = _0x473d9f === this.dh.hh.yg ? null : this.dh.Fh[_0x473d9f];
              var _0xca63fb = _0x19d51d.ba(_0x1ca89f);
              _0x1ca89f += 1;
              var _0x379d0d = !!(_0xca63fb & 1);
              if (_0xca63fb & 2) {
                var _0x3b9eff = _0x19d51d.ea(_0x1ca89f);
                _0x1ca89f += 4;
                if (_0x82b688) {
                  _0x82b688.zi(_0x3b9eff);
                }
              }
              var _0x3a8db9 = this.Ai(_0x19d51d.ba(_0x1ca89f++), _0x19d51d.ba(_0x1ca89f++), _0x19d51d.ba(_0x1ca89f++));
              var _0x55c956 = this.Ai(_0x19d51d.ba(_0x1ca89f++), _0x19d51d.ba(_0x1ca89f++), _0x19d51d.ba(_0x1ca89f++));
              if (_0x82b688) {
                _0x82b688.Bi(_0x3a8db9, _0x55c956, _0x379d0d);
                var _0x327ccb = this.dh.ch.fh();
                var _0x287573 = _0x82b688.fh();
                var _0x35dffc = Math.max(0, 1 - Math.hypot(_0x327ccb.x - _0x287573.x, _0x327ccb.y - _0x287573.y) / (this.dh.eh * 0.5));
                _0x1859a9().Ci.Ye(_0x35dffc, _0x473d9f, _0x379d0d);
              }
              var _0x2f0e4d = this._h(_0x19d51d, _0x1ca89f);
              _0x1ca89f += this.ai(_0x2f0e4d);
              if (_0x82b688) {
                for (var _0x272e25 in _0x82b688.dd) {
                  var _0x4ae16c = _0x82b688.dd[_0x272e25];
                  if (_0x4ae16c) {
                    _0x4ae16c.hd = false;
                  }
                }
              }
              for (var _0x294e7f = 0; _0x294e7f < _0x2f0e4d; _0x294e7f++) {
                var _0x3489c4 = _0x19d51d.ba(_0x1ca89f);
                _0x1ca89f++;
                var _0x63f7a4 = _0x19d51d.ba(_0x1ca89f);
                _0x1ca89f++;
                if (_0x82b688) {
                  var _0x40968e = _0x82b688.dd[_0x3489c4];
                  _0x40968e ||= _0x82b688.dd[_0x3489c4] = new _0x30c50f.fd(_0x3489c4);
                  _0x40968e.hd = true;
                  _0x40968e.od = Math.min(1, Math.max(0, _0x63f7a4 / 100));
                }
              }
              return _0x1ca89f;
            };
            _0x157b41.prototype.ji = function (_0xb37a15, _0x3cf79d) {
              var _0x231669 = this.dh.ch;
              var _0x27e013 = _0xb37a15.ba(_0x3cf79d);
              _0x3cf79d += 1;
              var _0x2a3fc0 = !!(_0x27e013 & 1);
              var _0x17a73e = !!(_0x27e013 & 2);
              var _0x1c0e26 = !!(_0x27e013 & 4);
              if (_0x17a73e) {
                var _0x2720c2 = _0x231669.Bh;
                _0x231669.zi(_0xb37a15.ea(_0x3cf79d));
                _0x3cf79d += 4;
                _0x2720c2 = _0x231669.Bh - _0x2720c2;
                if (_0x2720c2 > 0) {
                  _0x1859a9().og.af.ng.Wg.lg(_0x2720c2);
                }
              }
              if (_0x1c0e26) {
                this.dh.Di = _0xb37a15.ea(_0x3cf79d);
                _0x3cf79d += 4;
              }
              var _0x3fa15e = this.Ai(_0xb37a15.ba(_0x3cf79d++), _0xb37a15.ba(_0x3cf79d++), _0xb37a15.ba(_0x3cf79d++));
              var _0x2ee18c = this.Ai(_0xb37a15.ba(_0x3cf79d++), _0xb37a15.ba(_0x3cf79d++), _0xb37a15.ba(_0x3cf79d++));
              _0x231669.Bi(_0x3fa15e, _0x2ee18c, _0x2a3fc0);
              _0x1859a9().Ci.Ye(0.5, this.dh.hh.yg, _0x2a3fc0);
              var _0x5035a7 = this._h(_0xb37a15, _0x3cf79d);
              _0x3cf79d += this.ai(_0x5035a7);
              for (var _0x455bc3 in _0x231669.dd) {
                var _0x589a6f = _0x231669.dd[_0x455bc3];
                if (_0x589a6f) {
                  _0x589a6f.hd = false;
                }
              }
              for (var _0x2b206b = 0; _0x2b206b < _0x5035a7; _0x2b206b++) {
                var _0xa45f65 = _0xb37a15.ba(_0x3cf79d);
                _0x3cf79d++;
                var _0x441b81 = _0xb37a15.ba(_0x3cf79d);
                _0x3cf79d++;
                var _0x3f0923 = _0x231669.dd[_0xa45f65];
                if (!_0x3f0923) {
                  _0x3f0923 = new _0x30c50f.fd(_0xa45f65);
                  _0x231669.dd[_0xa45f65] = _0x3f0923;
                }
                _0x3f0923.hd = true;
                _0x3f0923.od = Math.min(1, Math.max(0, _0x441b81 / 100));
              }
              _0x1859a9().og.af.ng.Ug.Uf(_0x231669.dd);
            };
            _0x157b41.prototype.gi = function (_0x37b8e0, _0x55b709) {
              var _0x3937fa = this;
              var _0x340b2d = _0x37b8e0.ca(_0x55b709);
              _0x55b709 += 2;
              var _0x25f517 = this.vi(_0x340b2d);
              var _0x1fc1d4 = _0x37b8e0.ea(_0x55b709);
              _0x55b709 += 4;
              var _0x236d11 = this._h(_0x37b8e0, _0x55b709);
              _0x55b709 += this.ai(_0x236d11);
              if (_0x25f517) {
                _0x25f517.zi(_0x1fc1d4);
                _0x25f517.Ei(function () {
                  return _0x3937fa.Ai(_0x37b8e0.ba(_0x55b709++), _0x37b8e0.ba(_0x55b709++), _0x37b8e0.ba(_0x55b709++));
                }, _0x236d11);
                _0x25f517.kd(true);
                var _0x12070d = this.dh.ch.fh();
                var _0x342bd1 = _0x25f517.fh();
                var _0x421824 = Math.max(0, 1 - Math.hypot(_0x12070d.x - _0x342bd1.x, _0x12070d.y - _0x342bd1.y) / (this.dh.eh * 0.5));
                _0x1859a9().Ci.We(_0x421824, _0x340b2d);
              } else {
                _0x55b709 += _0x236d11 * 6;
              }
              return _0x55b709;
            };
            _0x157b41.prototype.hi = function (_0x8e541e, _0x32cb88) {
              var _0x382a46 = _0x8e541e.ca(_0x32cb88);
              _0x32cb88 += 2;
              var _0x15dc90 = this.dh.Fh[_0x382a46];
              if (_0x15dc90 && _0x15dc90.wi) {
                _0x15dc90.kd(false);
              }
              _0x1859a9().Ci.Xe(_0x382a46);
              return _0x32cb88;
            };
            _0x157b41.prototype.bi = function (_0x7220ae, _0x32c63a) {
              var _0x4964ad = new _0x30c50f.Fi.li();
              _0x4964ad.ae = _0x7220ae.da(_0x32c63a);
              _0x32c63a += 4;
              _0x4964ad.Gh = this.dh.hh.xg === _0x30c50f.Ac.zc ? _0x7220ae.ba(_0x32c63a++) : _0x3ca652.ps ? _0x3ca652.ps : _0x30c50f.GameParams.Cg;
              _0x4964ad.Gi = this.Ai(_0x7220ae.ba(_0x32c63a++), _0x7220ae.ba(_0x32c63a++), _0x7220ae.ba(_0x32c63a++));
              _0x4964ad.Hh = _0x7220ae.ba(_0x32c63a++);
              var _0x19feb1 = this.dh.Hi[_0x4964ad.ae];
              if (_0x19feb1 != null) {
                _0x19feb1.si();
              }
              var _0x1bc0a7 = new _0x30c50f.Fi(_0x4964ad, _0x1859a9().og.af.ng);
              _0x1bc0a7.Ii(this.Ji(_0x4964ad.ae), this.Ki(_0x4964ad.ae), true);
              this.dh.Hi[_0x4964ad.ae] = _0x1bc0a7;
              return _0x32c63a;
            };
            _0x157b41.prototype.ci = function (_0x15119b, _0x1f1536) {
              var _0x3bafa3 = _0x15119b.da(_0x1f1536);
              _0x1f1536 += 4;
              var _0x20a90b = this.dh.Hi[_0x3bafa3];
              if (_0x20a90b) {
                _0x20a90b.Li = 0;
                _0x20a90b.Mi = _0x20a90b.Mi * 1.5;
                _0x20a90b.Ni = true;
              }
              return _0x1f1536;
            };
            _0x157b41.prototype.di = function (_0xe682b5, _0x586798) {
              var _0x5c6903 = _0xe682b5.da(_0x586798);
              _0x586798 += 4;
              var _0x5a03d6 = _0xe682b5.ca(_0x586798);
              _0x586798 += 2;
              var _0x55fd73 = this.dh.Hi[_0x5c6903];
              if (_0x55fd73) {
                _0x55fd73.Li = 0;
                _0x55fd73.Mi = _0x55fd73.Mi * 0.1;
                _0x55fd73.Ni = true;
                var _0x21f926 = this.vi(_0x5a03d6);
                if (_0x21f926 && _0x21f926.xi) {
                  this.dh.hh.yg;
                  var _0x5ce725 = _0x21f926.fh();
                  _0x55fd73.Ii(_0x5ce725.x, _0x5ce725.y, false);
                }
              }
              return _0x586798;
            };
            var _0x4c2493 = [34, 29, 26, 24, 22, 20, 18, 17, 15, 14, 13, 12, 11, 10, 9, 8, 8, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 22, 24, 26, 29, 34];
            _0x157b41.prototype.Vh = function (_0x3219) {
              var _0x56b2e8 = _0x1859a9().Lc.Zb().Fb;
              var _0x43babd = _0x56b2e8.getImageData(0, 0, 80, 80);
              var _0x54d62e = _0x4c2493[0];
              var _0x982b45 = 80 - _0x54d62e;
              var _0x33cdaa = 0;
              for (var _0x377756 = 0; _0x377756 < 628; _0x377756++) {
                var _0x1d908a = _0x3219.ba(1 + _0x377756);
                for (var _0x45ec8d = 0; _0x45ec8d < 8; _0x45ec8d++) {
                  var _0x38201c = (_0x1d908a >> _0x45ec8d & 1) != 0;
                  var _0x5a2767 = (_0x54d62e + _0x33cdaa * 80) * 4;
                  if (_0x38201c) {
                    _0x43babd.data[_0x5a2767] = 255;
                    _0x43babd.data[_0x5a2767 + 1] = 255;
                    _0x43babd.data[_0x5a2767 + 2] = 255;
                    _0x43babd.data[_0x5a2767 + 3] = 255;
                  } else {
                    _0x43babd.data[_0x5a2767 + 3] = 0;
                  }
                  if (++_0x54d62e >= _0x982b45 && ++_0x33cdaa < 80) {
                    _0x54d62e = _0x4c2493[_0x33cdaa];
                    _0x982b45 = 80 - _0x54d62e;
                  }
                }
              }
              _0x56b2e8.putImageData(_0x43babd, 0, 0);
              if (_wwcio.player && _wwcio.player.teamRoom) {
                _wwcio.sendLocation({
                  x: _wwcio.myLocation.position.x,
                  y: _wwcio.myLocation.position.y
                });
              }
              var _0x2d16bd = _0x1859a9().og.af.ng.Tg.qh;
              _0x2d16bd.texture = _0x1859a9().Lc.Zb().oa;
              _0x2d16bd.texture.update();
            };
            _0x157b41.prototype.Xh = function (_0x140b1a, _0x26e552) {
              _0x140b1a.da(_0x26e552);
            };
            _0x157b41.prototype.Yh = function (_0x3799e0, _0x454913) {
              this.dh.Oi();
            };
            _0x157b41.prototype.Wh = function (_0x45490c, _0x42d038) {
              this.dh.yh = _0x45490c.ca(_0x42d038);
              _0x42d038 += 2;
              this.dh.Ih = _0x45490c.ca(_0x42d038);
              _0x42d038 += 2;
              var _0xc40092 = new _0x30c50f.Pi();
              _0xc40092.Ch = [];
              for (var _0x3bf22f = _0x45490c.ba(_0x42d038++), _0x5017b8 = 0; _0x5017b8 < _0x3bf22f; _0x5017b8++) {
                var _0x2f03e2 = _0x45490c.ca(_0x42d038);
                _0x42d038 += 2;
                var _0x181c05 = _0x45490c.ea(_0x42d038);
                _0x42d038 += 4;
                _0xc40092.Ch.push(_0x30c50f.Pi.Qi(_0x2f03e2, _0x181c05));
              }
              _0xc40092.zh = [];
              if (this.dh.hh.xg === _0x30c50f.Ac.zc) {
                for (var _0x32f09b = _0x45490c.ba(_0x42d038++), _0x2b353a = 0; _0x2b353a < _0x32f09b; _0x2b353a++) {
                  var _0x2b58d8 = _0x45490c.ba(_0x42d038);
                  _0x42d038 += 1;
                  var _0x52d9c9 = _0x45490c.ea(_0x42d038);
                  _0x42d038 += 4;
                  _0xc40092.zh.push(_0x30c50f.Pi.Ri(_0x2b58d8, _0x52d9c9));
                }
              }
              _0x1859a9().og.af.ng.Vg.Uf(_0xc40092);
            };
            _0x157b41.prototype.vi = function (_0xfea3ac) {
              if (_0xfea3ac === this.dh.hh.yg) {
                return this.dh.ch;
              } else {
                return this.dh.Fh[_0xfea3ac];
              }
            };
            _0x157b41.prototype.Ai = function (_0x174d77, _0x48b6c8, _0x27fbad) {
              return (((_0x27fbad & 255 | _0x48b6c8 << 8 & 65280 | _0x174d77 << 16 & 16711680) & 16777215) / 8388608 - 1) * 10000;
            };
            _0x157b41.prototype.Ji = function (_0x536c1b) {
              return ((_0x536c1b & 65535) / 32768 - 1) * this.dh.hh.Dg();
            };
            _0x157b41.prototype.Ki = function (_0x992efd) {
              return ((_0x992efd >> 16 & 65535) / 32768 - 1) * this.dh.hh.Dg();
            };
            _0x157b41.prototype._h = function (_0x5720ba, _0x2743ef) {
              var _0x56da9a = _0x5720ba.ba(_0x2743ef);
              if ((_0x56da9a & 128) == 0) {
                return _0x56da9a;
              }
              var _0x245f93 = _0x5720ba.ba(_0x2743ef + 1);
              if ((_0x245f93 & 128) == 0) {
                return _0x245f93 | _0x56da9a << 7 & 16256;
              }
              var _0x26c7b7 = _0x5720ba.ba(_0x2743ef + 2);
              if ((_0x26c7b7 & 128) == 0) {
                return _0x26c7b7 | _0x245f93 << 7 & 16256 | _0x56da9a << 14 & 2080768;
              }
              var _0x5ac524 = _0x5720ba.ba(_0x2743ef + 3);
              if ((_0x5ac524 & 128) == 0) {
                return _0x5ac524 | _0x26c7b7 << 7 & 16256 | _0x245f93 << 14 & 2080768 | _0x56da9a << 21 & 266338304;
              } else {
                return undefined;
              }
            };
            _0x157b41.prototype.ai = function (_0x3bd2f5) {
              if (_0x3bd2f5 < 128) {
                return 1;
              } else if (_0x3bd2f5 < 16384) {
                return 2;
              } else if (_0x3bd2f5 < 2097152) {
                return 3;
              } else if (_0x3bd2f5 < 268435456) {
                return 4;
              } else {
                return undefined;
              }
            };
            return _0x157b41;
          }();
          _0x30c50f.Si = function () {
            function _0x1d0411(_0x15bcbd) {
              this.Ti = _0x15bcbd;
            }
            _0x1d0411.Ui = function () {
              return new _0x30c50f.Si(null);
            };
            _0x1d0411.Vi = function (_0x1df810) {
              return new _0x30c50f.Si(_0x1df810);
            };
            _0x1d0411.prototype.bc = function () {
              return this.Ti;
            };
            _0x1d0411.prototype.Wi = function () {
              return this.Ti != null;
            };
            _0x1d0411.prototype.Xi = function (_0x2d7e28) {
              if (this.Ti != null) {
                _0x2d7e28(this.Ti);
              }
            };
            return _0x1d0411;
          }();
          _0x30c50f.Fi = function () {
            function _0x2b7b7b(_0x51b589, _0xfe4b5d) {
              this.Eh = _0x51b589;
              this.Yi = _0x51b589.Hh >= 80;
              this.Zi = 0;
              this.$i = 0;
              this._i = 0;
              this.aj = 0;
              this.Mi = this.Yi ? 1 : _0x51b589.Gi;
              this.Li = 1;
              this.Ni = false;
              this.bj = 0;
              this.cj = 0;
              this.dj = 1;
              this.ej = Math.random() * 6.283185307179586;
              this.fj = new _0x30c50f.PortionSpriteTree();
              this.fj.yc(_0x1859a9().dh.hh.xg, this.Eh.Gh === _0x30c50f.GameParams.Cg ? null : _0x1859a9().Lc.Ub().jb(this.Eh.Gh), _0x1859a9().Lc.Ub().ob(this.Eh.Hh));
              _0xfe4b5d.mh(_0x51b589.ae, this.fj);
            }
            _0x2b7b7b.prototype.si = function () {
              this.fj.nh.Dc.Rc();
              this.fj.nh.Cc.Rc();
              this.fj.nh.Dc.xc.width = 100;
              this.fj.nh.Dc.xc.height = 100;
            };
            _0x2b7b7b.prototype.Ii = function (_0x47ab05, _0x1a9fce, _0x4fbf96) {
              this.Zi = _0x47ab05;
              this.$i = _0x1a9fce;
              if (_0x4fbf96) {
                this._i = _0x47ab05;
                this.aj = _0x1a9fce;
              }
            };
            _0x2b7b7b.prototype.hj = function (_0x5b9543, _0x8f3cae) {
              var _0x3994f5 = Math.min(0.5, this.Mi * 1);
              var _0x522b80 = Math.min(2.5, this.Mi * 1.5);
              this.bj = _0x2816c6.Q(this.bj, _0x3994f5, _0x8f3cae, 0.0025);
              this.cj = _0x2816c6.Q(this.cj, _0x522b80, _0x8f3cae, 0.0025);
              this.dj = _0x2816c6.Q(this.dj, this.Li, _0x8f3cae, 0.0025);
            };
            _0x2b7b7b.prototype.ij = function (_0x5da6e7, _0x18ae86, _0x150701) {
              this._i = _0x2816c6.Q(this._i, this.Zi, _0x18ae86, 0.0025);
              this.aj = _0x2816c6.Q(this.aj, this.$i, _0x18ae86, 0.0025);
              this.fj.Uf(this, _0x5da6e7, _0x18ae86, _0x150701);
            };
            _0x2b7b7b.li = function () {
              function _0x4a4730() {
                this.me = 0;
                this.ae = 0;
                this.Gh = _0x3ca652.ps ? _0x3ca652.ps : _0x30c50f.GameParams.Cg;
                this.Gi = 0;
                this.Hh = 0;
              }
              return _0x4a4730;
            }();
            return _0x2b7b7b;
          }();
          _0x30c50f.PortionSpriteTree = function () {
            var _0x1bc399 = 500;
            var _0x2d9b9f = 100;
            function _0x4b8088() {
              this.nh = new _0x2bc95c(new _0x30c50f.sc(), new _0x30c50f.sc());
              this.nh.Dc.xc.blendMode = _0x21984d.v.z;
              this.nh.Dc.xc.zIndex = _0x2d9b9f;
              this.nh.Cc.xc.zIndex = _0x1bc399;
            }
            _0x4b8088.prototype.yc = function (_0x26d294, _0x4bd766, _0x114fb1) {
              var _0x3bab61 = _0x114fb1.ub;
              if (_0x3bab61) {
                this.nh.Cc.Bc(_0x3bab61);
              }
              var _0x32e692 = _0x26d294 === _0x30c50f.Ac.zc && _0x4bd766 ? _0x4bd766.sb.vb : _0x114fb1.vb;
              if (_0x32e692) {
                this.nh.Dc.Bc(_0x32e692);
              }
            };
            _0x4b8088.prototype.Uf = function (_0x233f93, _0x571052, _0x4fe06b, _0x112d2a) {
              if (!_0x112d2a(_0x233f93._i, _0x233f93.aj)) {
                this.nh.Uc();
              } else {
                var _0x4511b2 = _0x3cf613 > 1 ? _0x3cf613 / 5 : 0;
                var _0x32df9e = _0x233f93.cj * 1 + Math.cos(_0x233f93.ej + _0x571052 / 200) * 0.3;
                this.nh.Sc(_0x233f93._i, _0x233f93.aj, _0x233f93.Yi ? _0x233f93.bj * 2 + _0x4511b2 : _0x233f93.bj * 2, _0x233f93.Yi ? _0x233f93.dj * 1 + _0x4511b2 : _0x233f93.dj * 1, _0x233f93.Yi ? _0x32df9e * 1.2 + _0x4511b2 : _0x32df9e * 2, _0x233f93.Yi ? _0x233f93.dj * 0.8 : _0x233f93.dj * 0.3);
              }
            };
            var _0x2bc95c = function () {
              function _0x59af8d(_0x2562a0, _0x23690e) {
                this.Cc = _0x2562a0;
                this.Dc = _0x23690e;
              }
              _0x59af8d.prototype.Sc = function (_0x153639, _0x2b89c2, _0x273af8, _0xb812f3, _0x2fcd1e, _0x52dfb9) {
                this.Cc.kd(true);
                this.Cc.ld(_0x153639, _0x2b89c2);
                this.Cc.Tc(_0x273af8);
                this.Cc.jj(_0xb812f3);
                this.Dc.kd(true);
                this.Dc.ld(_0x153639, _0x2b89c2);
                this.Dc.Tc(_0x2fcd1e);
                this.Dc.jj(_0x52dfb9);
              };
              _0x59af8d.prototype.Uc = function () {};
              return _0x59af8d;
            }();
            return _0x4b8088;
          }();
          _0x30c50f.kj = function () {
            function _0x440025() {
              this.lj = 0;
              this.mj = 0;
              this.nj = 0;
              this.oj = 0;
              this.pj = 0;
              this.qj = [];
            }
            function _0x4c7dd6(_0x36586b, _0x1618f2) {
              for (var _0x6ddcae = 0; _0x6ddcae < _0x36586b.length; _0x6ddcae++) {
                if (_0x36586b[_0x6ddcae].id == _0x1618f2) {
                  return _0x6ddcae;
                }
              }
              return -1;
            }
            _0x440025.prototype.ha = function () {};
            _0x440025.prototype.rj = function (_0x105bae) {
              if (!window.bbs.loading) {
                window.bbs.PropertyManager = _0x66b726({}, this);
                localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));
              }
              switch (_0x105bae) {
                case _0x30c50f.tj.sj:
                  return this.lj;
                case _0x30c50f.tj.uj:
                  return this.mj;
                case _0x30c50f.tj.vj:
                  return this.nj;
                case _0x30c50f.tj.wj:
                  return this.oj;
                case _0x30c50f.tj.xj:
                  return this.pj;
              }
              return 0;
            };
            _0x440025.prototype.yj = function () {
              return new _0x30c50f.hb(this.lj, this.mj, this.nj, this.oj, this.pj);
            };
            _0x440025.prototype.zj = function (_0x36031a) {
              this.qj.push(_0x36031a);
              this.Aj();
            };
            _0x440025.prototype.Bj = function () {
              if (!_0x1859a9().Lc.Wb()) {
                return _0x2816c6.W([32, 33, 34, 35]);
              }
              var _0x5b3c1e = [];
              for (var _0x15292e = _0x1859a9().Lc.Xb().skinArrayDict, _0x2d4c86 = 0; _0x2d4c86 < _0x15292e.length; _0x2d4c86++) {
                var _0x375afb = _0x15292e[_0x2d4c86];
                if (this.Cj(_0x375afb.id, _0x30c50f.tj.sj)) {
                  _0x5b3c1e.push(_0x375afb);
                }
              }
              if (_0x5b3c1e.length === 0) {
                return 0;
              } else {
                return _0x5b3c1e[parseInt(_0x5b3c1e.length * Math.random())].id;
              }
            };
            _0x440025.prototype.Dj = function () {
              if (_0x1859a9().Lc.Wb()) {
                var _0x4b2469 = _0x1859a9().Lc.Xb().skinArrayDict;
                var _0xe6f8e7 = _0x4c7dd6(_0x4b2469, this.lj);
                if (!(_0xe6f8e7 < 0)) {
                  for (var _0x4d16be = _0xe6f8e7 + 1; _0x4d16be < _0x4b2469.length; _0x4d16be++) {
                    if (this.Cj(_0x4b2469[_0x4d16be].id, _0x30c50f.tj.sj)) {
                      this.lj = _0x4b2469[_0x4d16be].id;
                      this.Aj();
                      return;
                    }
                  }
                  for (var _0x5a2530 = 0; _0x5a2530 < _0xe6f8e7; _0x5a2530++) {
                    if (this.Cj(_0x4b2469[_0x5a2530].id, _0x30c50f.tj.sj)) {
                      this.lj = _0x4b2469[_0x5a2530].id;
                      this.Aj();
                      return;
                    }
                  }
                }
              }
            };
            _0x440025.prototype.Ej = function () {
              var _0x27e5dd = _0x1859a9();
              if (_0x27e5dd.Lc.Wb) {
                var _0x433a19 = _0x27e5dd.Lc.Xb().skinArrayDict;
                var _0x4399b3 = _0x4c7dd6(_0x433a19, this.lj);
                if (!(_0x4399b3 < 0)) {
                  for (var _0x349df2 = _0x4399b3 - 1; _0x349df2 >= 0; _0x349df2--) {
                    if (this.Cj(_0x433a19[_0x349df2].id, _0x30c50f.tj.sj)) {
                      this.lj = _0x433a19[_0x349df2].id;
                      this.Aj();
                      return;
                    }
                  }
                  for (var _0x18b5eb = _0x433a19.length - 1; _0x18b5eb > _0x4399b3; _0x18b5eb--) {
                    if (this.Cj(_0x433a19[_0x18b5eb].id, _0x30c50f.tj.sj)) {
                      this.lj = _0x433a19[_0x18b5eb].id;
                      this.Aj();
                      return;
                    }
                  }
                }
              }
            };
            _0x440025.prototype.Fj = function (_0x4ce6d0, _0x328ad0) {
              if (!_0x1859a9().Lc.Wb() || this.Cj(_0x4ce6d0, _0x328ad0)) {
                switch (_0x328ad0) {
                  case _0x30c50f.tj.sj:
                    if (this.lj !== _0x4ce6d0) {
                      this.lj = _0x4ce6d0;
                      this.Aj();
                    }
                    return;
                  case _0x30c50f.tj.uj:
                    if (this.mj !== _0x4ce6d0) {
                      this.mj = _0x4ce6d0;
                      this.Aj();
                    }
                    return;
                  case _0x30c50f.tj.vj:
                    if (this.nj !== _0x4ce6d0) {
                      this.nj = _0x4ce6d0;
                      this.Aj();
                    }
                    return;
                  case _0x30c50f.tj.wj:
                    if (this.oj !== _0x4ce6d0) {
                      this.oj = _0x4ce6d0;
                      this.Aj();
                    }
                    return;
                  case _0x30c50f.tj.xj:
                    if (this.pj !== _0x4ce6d0) {
                      this.pj = _0x4ce6d0;
                      this.Aj();
                    }
                    return;
                }
              }
            };
            _0x440025.prototype.Cj = function (_0x1ce754, _0x1a2bf9) {
              var _0x37ebaa = this.Gj(_0x1ce754, _0x1a2bf9);
              return _0x37ebaa != null && (_0x1859a9().Ij.Hj() ? _0x37ebaa.Jj() === 0 && !_0x37ebaa.Kj() || _0x1859a9().Ij.Lj(_0x1ce754, _0x1a2bf9) : _0x37ebaa.Mj());
            };
            _0x440025.prototype.Gj = function (_0x217c40, _0x266c82) {
              if (!_0x1859a9().Lc.Wb()) {
                return null;
              }
              var _0x16fab5 = _0x1859a9().Lc.Xb();
              if (_0x266c82 === _0x30c50f.tj.sj) {
                var _0x55dab9 = _0x4c7dd6(_0x16fab5.skinArrayDict, _0x217c40);
                if (_0x55dab9 < 0) {
                  return null;
                } else {
                  return _0x30c50f.Oj.Nj(_0x16fab5.skinArrayDict[_0x55dab9]);
                }
              }
              var _0x5930b4 = null;
              switch (_0x266c82) {
                case _0x30c50f.tj.uj:
                  _0x5930b4 = _0x16fab5.eyesDict[_0x217c40];
                  break;
                case _0x30c50f.tj.vj:
                  _0x5930b4 = _0x16fab5.mouthDict[_0x217c40];
                  break;
                case _0x30c50f.tj.wj:
                  _0x5930b4 = _0x16fab5.hatDict[_0x217c40];
                  break;
                case _0x30c50f.tj.xj:
                  _0x5930b4 = _0x16fab5.glassesDict[_0x217c40];
              }
              if (_0x5930b4 != null) {
                return _0x30c50f.Oj.Pj(_0x5930b4);
              } else {
                return null;
              }
            };
            _0x440025.prototype.Aj = function () {
              for (var _0x367ad0 = 0; _0x367ad0 < this.qj.length; _0x367ad0++) {
                this.qj[_0x367ad0]();
              }
            };
            return _0x440025;
          }();
          _0x30c50f.tj = function () {
            function _0x13b6fc() {}
            _0x13b6fc.sj = "SKIN";
            _0x13b6fc.uj = "EYES";
            _0x13b6fc.vj = "MOUTH";
            _0x13b6fc.xj = "GLASSES";
            _0x13b6fc.wj = "HAT";
            return _0x13b6fc;
          }();
          _0x30c50f.Qj = function () {
            function _0x2477c0() {
              this.Bf = new _0x21984d.Texture(_0x21984d.BaseTexture.from("/images/bg-obstacle.png"));
              this.Cf = new Array(36);
              this._g = _0x3ca652.bgg();
              this.ah = new _0x21984d.Texture(function () {
                var _0x5b30ba = _0x21984d.BaseTexture.from("/images/bg-pattern-pow2-TEAM2.png");
                _0x5b30ba.wrapMode = _0x21984d.C.D;
                return _0x5b30ba;
              }());
              this.Zg = new _0x21984d.Texture(_0x21984d.BaseTexture.from("/images/lens.png"));
              this.rf = null;
              this.Db = function () {
                var _0x23bac5 = window.document.createElement("canvas");
                _0x23bac5.width = 80;
                _0x23bac5.height = 80;
                return {
                  Eb: _0x23bac5,
                  Fb: _0x23bac5.getContext("2d"),
                  oa: new _0x21984d.Texture(_0x21984d.BaseTexture.from(_0x23bac5))
                };
              }();
              this.Ae = {};
              this.we = {};
              this.Rj = [];
              this.Sj = null;
            }
            _0x2477c0.prototype.ha = function (_0x50a777) {
              function _0x3beaa8() {
                if (--_0x43f19e == 0) {
                  _0x50a777();
                }
              }
              var _0x43f19e = 4;
              this.Ae = {};
              _0x3beaa8();
              this.we = {};
              _0x3beaa8();
              this.Rj = [];
              _0x3beaa8();
              this.Sj = null;
              _0x3beaa8();
            };
            return _0x2477c0;
          }();
          _0x30c50f.Tj = function () {
            function _0x3bb99c() {
              this.Uj = null;
              this.af = new _0x30c50f.Vj();
              this._e = new _0x30c50f.Wj();
              this.Xj = new _0x30c50f.Yj();
              this.Zj = new _0x30c50f.$j();
              this._j = new _0x30c50f.ak();
              this.bk = new _0x30c50f.ck();
              this.dk = new _0x30c50f.ek();
              this.fk = new _0x30c50f.gk();
              this.$h = new _0x30c50f.hk();
              this.ik = new _0x30c50f.jk();
              this.kk = new _0x30c50f.lk();
              this.mk = new _0x30c50f.nk();
              this.ok = new _0x30c50f.pk();
              this.qk = new _0x30c50f.rk();
              this.ie = new _0x30c50f.sk();
              this.tk = new _0x30c50f.uk();
              this.vk = new _0x30c50f.wk();
              this.xk = new _0x30c50f.yk();
              this.zk = [];
            }
            function _0x5820cb(_0x514ef2, _0x3a8f5f) {
              if (_0x3a8f5f !== 0) {
                var _0x53694c = _0x514ef2[_0x3a8f5f];
                _0x2816c6.T(_0x514ef2, 0, 1, _0x3a8f5f);
                _0x514ef2[0] = _0x53694c;
              }
            }
            function _0x1ba5e2(_0x2dffeb, _0x5ac4fc) {
              if (_0x5ac4fc !== _0x2dffeb.length + 1) {
                var _0x33ffd9 = _0x2dffeb[_0x5ac4fc];
                _0x2816c6.T(_0x2dffeb, _0x5ac4fc + 1, _0x5ac4fc, _0x2dffeb.length - _0x5ac4fc - 1);
                _0x2dffeb[_0x2dffeb.length - 1] = _0x33ffd9;
              }
            }
            function _0xd7df88(_0x5a2445, _0x469819) {
              for (var _0x2950c3 = 0; _0x2950c3 < _0x5a2445.length; _0x2950c3++) {
                if (_0x5a2445[_0x2950c3] === _0x469819) {
                  return _0x2950c3;
                }
              }
              return -1;
            }
            _0x3bb99c.prototype.ha = function () {
              this.Uj = null;
              this.zk = [this.af, this._e, this.Xj, this.Zj, this._j, this.bk, this.dk, this.fk, this.$h, this.ik, this.kk, this.mk, this.ok, this.qk, this.ie, this.tk, this.vk, this.xk];
              for (var _0x2ea143 = 0; _0x2ea143 < this.zk.length; _0x2ea143++) {
                this.zk[_0x2ea143].ha();
              }
            };
            _0x3bb99c.prototype.lh = function (_0x4be837, _0xfe0052) {
              for (var _0x46dee9 = this.zk.length - 1; _0x46dee9 >= 0; _0x46dee9--) {
                this.zk[_0x46dee9].Nf(_0x4be837, _0xfe0052);
              }
              if (this.zk[0] !== this.af && this.zk[0] !== this.xk && this.Uj != null) {
                this.Uj.Nf(_0x4be837, _0xfe0052);
              }
            };
            _0x3bb99c.prototype.Jf = function () {
              for (var _0x47fd88 = this.zk.length - 1; _0x47fd88 >= 0; _0x47fd88--) {
                this.zk[_0x47fd88].Jf();
              }
              if (this.Uj != null) {
                this.Uj.Jf();
              }
            };
            _0x3bb99c.prototype.Ak = function (_0x1fbc6a) {
              var _0x10475f = _0xd7df88(this.zk, _0x1fbc6a);
              if (!(_0x10475f < 0)) {
                this.zk[0].Bk();
                _0x5820cb(this.zk, _0x10475f);
                this.Ck();
              }
            };
            _0x3bb99c.prototype.Dk = function () {
              this.zk[0].Bk();
              do {
                _0x1ba5e2(this.zk, 0);
              } while (this.zk[0].nd !== _0x30c50f.Fk.Ek);
              this.Ck();
            };
            _0x3bb99c.prototype.Ck = function () {
              var _0x38a661 = this.zk[0];
              _0x38a661.Gk();
              _0x38a661.Hk();
              this.Ik();
            };
            _0x3bb99c.prototype.Jk = function () {
              return this.zk.length !== 0 && this.zk[0].nd === _0x30c50f.Fk.Ek && this.qk.Kk();
            };
            _0x3bb99c.prototype.Lk = function () {
              if (this.zk.length === 0) {
                return null;
              } else {
                return this.zk[0];
              }
            };
            _0x3bb99c.prototype.Ik = function () {
              if (this.Jk()) {
                this.Ak(this.qk);
              }
            };
            return _0x3bb99c;
          }();
          _0x30c50f.Pi = function () {
            function _0x62ee23() {
              this.Ch = [];
              this.zh = [];
            }
            _0x62ee23.Qi = function (_0x41b297, _0x463ad2) {
              return {
                Dh: _0x41b297,
                Bh: _0x463ad2
              };
            };
            _0x62ee23.Ri = function (_0x1fb8b9, _0xf7f0d6) {
              return {
                Ah: _0x1fb8b9,
                Bh: _0xf7f0d6
              };
            };
            return _0x62ee23;
          }();
          _0x30c50f.Mk = function () {
            function _0x9bcc83() {
              this.setNk = new WeakSet();
              this.Nk = [];
              this.Ok = [];
              this.Pk = false;
              this.Qk = _0x26d769;
              this.Rk = {};
            }
            var _0x26d769 = "guest";
            _0x9bcc83.Sk = new (function () {
              function _0x335912() {}
              _0x335912.Tk = function () {
                function _0x4674e3(_0xc761e7) {
                  this.Uk = _0xc761e7;
                }
                return _0x4674e3;
              }();
              _0x335912.prototype.Vk = function () {
                return typeof FB != "undefined";
              };
              _0x335912.prototype.Wk = function (_0x455c4b, _0x5d12f9, _0xb0c770) {
                var _0x3ef90f = "https://graph.facebook.com/me?access_token=" + _0x455c4b;
                $.get(_0x3ef90f).fail(function () {
                  _0x5d12f9();
                }).done(function () {
                  _0xb0c770();
                });
              };
              _0x335912.prototype.Xk = function (_0x3479e1, _0x43ff4a) {
                if (!this.Vk()) {
                  _0x3479e1();
                  return;
                }
                this.Yk(function () {
                  FB.login(function (_0x20695f) {
                    if (_0x20695f.status !== "connected") {
                      _0x3479e1();
                      return;
                    }
                    var _0x218d3e = _0x20695f.authResponse.accessToken;
                    _0x43ff4a(new _0x335912.Tk(_0x218d3e));
                  });
                }, function (_0x1ca0e9) {
                  _0x43ff4a(_0x1ca0e9);
                });
              };
              _0x335912.prototype.Yk = function (_0x202227, _0x3e82d1) {
                var _0x2c2be7 = this;
                if (!this.Vk()) {
                  _0x202227();
                  return;
                }
                FB.getLoginStatus(function (_0x5858df) {
                  if (_0x5858df.status !== "connected") {
                    _0x202227();
                    return;
                  }
                  var _0x323358 = _0x5858df.authResponse.accessToken;
                  _0x2c2be7.Wk(_0x323358, function () {
                    _0x202227();
                  }, function () {
                    _0x3e82d1(new _0x335912.Tk(_0x323358));
                  });
                });
              };
              _0x335912.prototype.Zk = function () {
                if (this.Vk()) {
                  FB.logout();
                }
              };
              return _0x335912;
            }())();
            _0x9bcc83.$k = new (function () {
              function _0xef28ec() {}
              _0xef28ec._k = function () {
                function _0x5b46d4(_0x32e6a7, _0x48a571) {
                  this.Uk = _0x32e6a7;
                  this.al = _0x48a571;
                }
                return _0x5b46d4;
              }();
              _0xef28ec.prototype.Vk = function () {
                return typeof _0x1cbd0d !== "undefined";
              };
              _0xef28ec.prototype.Xk = function (_0x4d2866, _0x5744b7) {
                if (typeof _0x1cbd0d === "undefined") {
                  _0x4d2866();
                  return;
                }
                if (_0x1cbd0d === undefined) {
                  _0x4d2866();
                  return;
                }
                _0x1cbd0d.then(function () {
                  if (_0x1cbd0d.isSignedIn.get()) {
                    var _0x5d8d0a = _0x1cbd0d.currentUser.get();
                    var _0x277596 = _0x5d8d0a.getAuthResponse().id_token;
                    var _0x2830d6 = new Date().getTime() + _0x5d8d0a.getAuthResponse().expires_in * 1000;
                    if (new Date().getTime() < _0x2830d6) {
                      _0x5744b7(new _0xef28ec._k(_0x277596, _0x2830d6));
                      return;
                    }
                  }
                  _0x1cbd0d.signIn().then(function (_0x6e89f2) {
                    if (typeof _0x6e89f2.error !== "undefined") {
                      _0x4d2866();
                      return;
                    }
                    if (!_0x6e89f2.isSignedIn()) {
                      _0x4d2866();
                      return;
                    }
                    var _0x4323f3 = _0x6e89f2.getAuthResponse().id_token;
                    var _0x3810c5 = new Date().getTime() + _0x6e89f2.getAuthResponse().expires_in * 1000;
                    _0x5744b7(new _0xef28ec._k(_0x4323f3, _0x3810c5));
                  });
                });
              };
              _0xef28ec.prototype.Yk = function (_0x5052ae, _0x1c2e69) {
                if (_0x1cbd0d === undefined) {
                  _0x5052ae();
                  return;
                }
                _0x1cbd0d.then(function () {
                  if (_0x1cbd0d.isSignedIn.get()) {
                    var _0x14cda0 = _0x1cbd0d.currentUser.get();
                    var _0x541223 = _0x14cda0.getAuthResponse().id_token;
                    var _0x2720f0 = new Date().getTime() + _0x14cda0.getAuthResponse().expires_in * 1000;
                    if (new Date().getTime() < _0x2720f0) {
                      _0x1c2e69(new _0xef28ec._k(_0x541223, _0x2720f0));
                      return;
                    }
                  }
                  _0x5052ae();
                });
              };
              _0xef28ec.prototype.Zk = function () {
                if (_0x1cbd0d !== undefined) {
                  _0x1cbd0d.signOut();
                }
              };
              return _0xef28ec;
            }())();
            _0x9bcc83.prototype.ha = function () {
              this.bl();
            };
            _0x9bcc83.prototype.cl = function () {
              if (this.Pk) {
                return this.Rk.userId;
              } else {
                return "";
              }
            };
            _0x9bcc83.prototype.dl = function () {
              if (this.Pk) {
                return this.Rk.username;
              } else {
                return "";
              }
            };
            _0x9bcc83.prototype.el = function () {
              if (this.Pk) {
                return this.Rk.nickname.substring(0, _0x4935f5);
              } else {
                return "";
              }
            };
            _0x9bcc83.prototype.fl = function () {
              if (this.Pk) {
                return this.Rk.avatarUrl;
              } else {
                return GUEST_AVATAR_URL;
              }
            };
            _0x9bcc83.prototype.gl = function () {
              return this.Pk && this.Rk.isBuyer;
            };
            _0x9bcc83.prototype.hl = function () {
              return this.Pk && this.Rk.isConsentGiven;
            };
            _0x9bcc83.prototype.il = function () {
              if (this.Pk) {
                return this.Rk.coins;
              } else {
                return 0;
              }
            };
            _0x9bcc83.prototype.jl = function () {
              if (this.Pk) {
                return this.Rk.level;
              } else {
                return 1;
              }
            };
            _0x9bcc83.prototype.kl = function () {
              if (this.Pk) {
                return this.Rk.expOnLevel;
              } else {
                return 0;
              }
            };
            _0x9bcc83.prototype.ll = function () {
              if (this.Pk) {
                return this.Rk.expToNext;
              } else {
                return 50;
              }
            };
            _0x9bcc83.prototype.ml = function () {
              if (this.Pk) {
                return this.Rk.skinId;
              } else {
                return 0;
              }
            };
            _0x9bcc83.prototype.nl = function () {
              if (this.Pk) {
                return this.Rk.eyesId;
              } else {
                return 0;
              }
            };
            _0x9bcc83.prototype.ol = function () {
              if (this.Pk) {
                return this.Rk.mouthId;
              } else {
                return 0;
              }
            };
            _0x9bcc83.prototype.pl = function () {
              if (this.Pk) {
                return this.Rk.glassesId;
              } else {
                return 0;
              }
            };
            _0x9bcc83.prototype.ql = function () {
              if (this.Pk) {
                return this.Rk.hatId;
              } else {
                return 0;
              }
            };
            _0x9bcc83.prototype.rl = function () {
              if (this.Pk) {
                return this.Rk.highScore;
              } else {
                return 0;
              }
            };
            _0x9bcc83.prototype.sl = function () {
              if (this.Pk) {
                return this.Rk.bestSurvivalTimeSec;
              } else {
                return 0;
              }
            };
            _0x9bcc83.prototype.tl = function () {
              if (this.Pk) {
                return this.Rk.kills;
              } else {
                return 0;
              }
            };
            _0x9bcc83.prototype.ul = function () {
              if (this.Pk) {
                return this.Rk.headShots;
              } else {
                return 0;
              }
            };
            _0x9bcc83.prototype.vl = function () {
              if (this.Pk) {
                return this.Rk.sessionsPlayed;
              } else {
                return 0;
              }
            };
            _0x9bcc83.prototype.wl = function () {
              if (this.Pk) {
                return this.Rk.totalPlayTimeSec;
              } else {
                return 0;
              }
            };
            _0x9bcc83.prototype.xl = function () {
              if (this.Pk) {
                return this.Rk.regDate;
              } else {
                return {};
              }
            };
            _0x9bcc83.prototype.yl = function (_0x50417e) {
              this.Nk.push(_0x50417e);
              _0x50417e();
            };
            _0x9bcc83.prototype.zl = function (_0x3e83d5) {
              this.Ok.push(_0x3e83d5);
              _0x3e83d5();
            };
            _0x9bcc83.prototype.Lj = function (_0x2babf7, _0x597ed) {
              var _0x577ac1 = this.Rk.propertyList;
              if (_0x577ac1 == null) {
                return false;
              }
              var _0x1cd60b = _0x2babf7.toString();
              for (var _0x39686d = 0; _0x39686d < _0x577ac1.length; _0x39686d++) {
                var _0x5bb30b = _0x577ac1[_0x39686d];
                if (_0x5bb30b.id === _0x1cd60b && _0x5bb30b.type === _0x597ed) {
                  return true;
                }
              }
              return false;
            };
            _0x9bcc83.prototype.Hj = function () {
              return this.Pk;
            };
            _0x9bcc83.prototype.Al = function () {
              return this.Qk;
            };
            _0x9bcc83.prototype.Bl = function (_0x5f2530) {
              var _0x588632 = this;
              var _0x28efce = this.cl();
              var _0x1acd62 = this.il();
              var _0x52090b = this.jl();
              this.Cl(function () {
                if (_0x5f2530 != null) {
                  _0x5f2530();
                }
              }, function (_0x4e2101) {
                var _0x437b33 = _0x4e2101 && _0x4e2101.user_data ? _0x4e2101.user_data : {};
                var _0x302da9 = Object.assign({}, _0x588632.Rk || {}, _0x437b33);
                _0xc6a1cd(_0x302da9);
                _0x588632.Rk = _0x302da9;
                _0x588632.Dl();
                var _0x5efe55 = _0x588632.cl();
                var _0x11acf7 = _0x588632.il();
                var _0x496e28 = _0x588632.jl();
                if (_0x28efce === _0x5efe55) {
                  if (_0x496e28 > 1 && _0x496e28 !== _0x52090b) {
                    _0x1859a9().og.qk.El(new _0x30c50f.Fl(currLevel));
                  }
                  var _0x2dd5dd = _0x11acf7 - _0x1acd62;
                  if (_0x2dd5dd >= 20) {
                    _0x1859a9().og.qk.El(new _0x30c50f.Gl(_0x2dd5dd));
                  }
                }
                if (_0x5f2530 != null) {
                  _0x5f2530();
                }
              });
            };
            _0x9bcc83.prototype.Cl = function (_0x3a9e41, _0x243c1d) {
              var _0xbdff65 = _0x2816c6.a.b + "/pub/wuid/" + this.Qk + "/getUserData";
              bbs.wuid = this.Qk;
              _0x2816c6.Z(_0xbdff65, _0x3a9e41, function (_0x43db7f) {
                if (_0x43db7f.code !== 1200) {
                  _0x3a9e41();
                } else {
                  _0x243c1d(_0x43db7f);
                }
              });
            };
            _0x9bcc83.prototype.Hl = function (_0x43d8a4, _0x104661, _0x9aa642, _0x5c3467) {
              var _0x1b6637 = _0x2816c6.a.b + "/pub/wuid/" + this.Qk + "/buyProperty?id=" + _0x43d8a4 + "&type=" + _0x104661;
              _0x2816c6.Z(_0x1b6637, function () {
                _0x9aa642();
              }, function (_0x4b9a75) {
                if (_0x4b9a75.code !== 1200) {
                  _0x9aa642();
                } else {
                  _0x5c3467(_0x4b9a75);
                }
              });
            };
            _0x9bcc83.prototype.Il = function (_0x1135df, _0x3c106c) {
              var _0x28b215 = _0x2816c6.a.b + "/pub/wuid/" + this.Qk + "/deleteAccount";
              _0x2816c6.Z(_0x28b215, _0x1135df, function (_0x490936) {
                if (_0x490936.code !== 1200) {
                  _0x1135df();
                } else {
                  _0x3c106c(_0x490936);
                }
              });
            };
            _0x9bcc83.prototype.Jl = function (_0x492cff) {
              var _0x2de219 = this;
              if (this.Pk) {
                this.Kl();
              }
              _0x9bcc83.Sk.Xk(function () {
                _0x492cff();
              }, function (_0x200e8f) {
                _0x2de219.Ll("fb", _0x200e8f.Uk, _0x492cff);
              });
            };
            _0x9bcc83.prototype.Ml = function (_0x508a02) {
              var _0x5e141a = this;
              if (this.Pk) {
                this.Kl();
              }
              _0x9bcc83.$k.Xk(function () {
                _0x508a02();
              }, function (_0x3a4299) {
                _0x5e141a.Ll("gg", _0x3a4299.Uk, _0x508a02);
              });
            };
            _0x9bcc83.prototype.Ll = function (_0x97c2d0, _0x16ea87, _0x2aaa0a, _0x3c28c5) {
              _0x3c28c5 = _0x3c28c5 || 0;
              var _0xa9e461 = $("#please-wait-view");
              if (_0x3c28c5 < 1) {
                _0xa9e461.append(` AUTO CONNECTION <i id="auto_connection_text">${_0x3c28c5}<i>...`);
              }
              var _0x3d66b3 = this;
              var _0x5a766 = _0x97c2d0 + "_" + _0x16ea87;
              var _0x265ca1 = URLSERV_WORMWORLD + "/" + _0x5a766 + "/login";
              _0x3c28c5++;
              _0xa9e461.fadeIn(500);
              $("#auto_connection_text").html(_0x3c28c5);
              fetch(_0x265ca1, {
                mode: "cors",
                headers: {
                  "x-uid": wwc_keycode
                }
              }).then(function (_0x12eab8) {
                if (_0x12eab8.ok) {
                  return _0x12eab8.json();
                } else {
                  throw new Error("Erro na solicitação");
                }
              }).then(function (_0x27007e) {
                if (_0x27007e.code !== 1200) {
                  if (_0x3c28c5 < 200) {
                    throw new Error("Tentando novamente");
                  }
                  _0x3d66b3.Ll(_0x97c2d0, _0x16ea87, _0x2aaa0a, _0x3c28c5);
                  return;
                }
                var _0x585eb6 = "customer";
                var _0x39c862 = "generation";
                _0x27007e.user_data[_0x585eb6] = Number(_0x27007e.user_data[_0x39c862][_0x27007e.user_data[_0x39c862].length - 1]);
                if (_0x27007e.user_data) {
                  _0xa9e461.html("...");
                  _0xa9e461.fadeOut(500);
                  _0x3d66b3.Ol(_0x97c2d0, _0x16ea87, _0x27007e.user_data);
                  if (_0x2aaa0a != null) {
                    _0x2aaa0a();
                  }
                }
              }).catch(function (_0x4a9291) {
                _0x3d66b3.Nl();
                _0xa9e461.html("...");
                _0xa9e461.fadeOut(500);
              });
            };
            _0x9bcc83.prototype.Kl = function () {
              try {
                this.Pl();
                this.Ql();
              } catch (_0x28460a) {}
              this.Rl();
            };
            _0x9bcc83.prototype.Sl = function () {
              if (this.Pk) {
                this.Il(function () {}, function (_0x4ade97) {});
              }
            };
            _0x9bcc83.prototype.Nl = function () {
              _0x1859a9().og.Ak(_0x1859a9().og.tk);
            };
            _0x9bcc83.prototype.Ol = function (_0x2b83b1, _0x33d2e0, _0x7e4f87) {
              var _0x2f7c7a = this;
              var _0x5d3514 = this.Pk ? this.Rk.userId : "guest";
              _0x404c22(_0x7e4f87, function (_0x27ea8f) {
                _0xc6a1cd(_0x27ea8f);
                _0x2f7c7a.Pk = true;
                _0x2f7c7a.Qk = _0x2b83b1 + "_" + _0x33d2e0;
                _0x2f7c7a.Rk = _0x27ea8f;
                bbs.wuid = _0x2f7c7a.Qk;
                _0x30c50f.Vf.eg(_0x30c50f.Vf.$f, _0x2b83b1, 60);
                if (_0x5d3514 !== _0x2f7c7a.Rk.userId) {
                  _0x2f7c7a.Tl();
                } else {
                  _0x2f7c7a.Dl();
                }
                window.bbs.loading = false;
              });
            };
            _0x9bcc83.prototype.Rl = function () {
              var _0x554828 = this.Pk ? this.Rk.userId : "guest";
              this.Pk = false;
              this.Qk = _0x26d769;
              this.Rk = {};
              _0x30c50f.Vf.eg(_0x30c50f.Vf.$f, "", 60);
              if (_0x554828 !== this.Rk.userId) {
                this.Tl();
              } else {
                this.Dl();
              }
            };
            _0x9bcc83.prototype.bl = function () {
              var _0x2673bb = _0x30c50f.Vf.fg(_0x30c50f.Vf.$f);
              var _0x1fba66 = this;
              if (_0x2673bb === "fb") {
                var _0x1bc6e2 = 1;
                (function _0x23242a() {
                  if (!_0x9bcc83.Sk.Vk() && _0x1bc6e2++ < 5) {
                    setTimeout(_0x23242a, 1000);
                    return;
                  }
                  _0x9bcc83.Sk.Yk(function () {}, function (_0x350131) {
                    _0x1fba66.Ll("fb", _0x350131.Uk);
                  });
                })();
              } else if (_0x2673bb === "gg") {
                var _0xf3f760 = 1;
                (function _0x1ecefd() {
                  if (!_0x9bcc83.$k.Vk() && _0xf3f760++ < 5) {
                    setTimeout(_0x1ecefd, 1000);
                    return;
                  }
                  _0x9bcc83.$k.Yk(function () {}, function (_0x58799a) {
                    _0x1fba66.Ll("gg", _0x58799a.Uk);
                  });
                })();
              }
            };
            _0x9bcc83.prototype.Tl = function () {
              for (var _0xfd172a = 0; _0xfd172a < this.Nk.length; _0xfd172a++) {
                this.Nk[_0xfd172a]();
              }
              this.Dl();
            };
            _0x9bcc83.prototype.Dl = function () {
              for (var _0x1e1716 = 0; _0x1e1716 < this.Ok.length; _0x1e1716++) {
                this.Ok[_0x1e1716]();
              }
            };
            _0x9bcc83.prototype.Pl = function () {
              _0x9bcc83.Sk.Zk();
            };
            _0x9bcc83.prototype.Ql = function () {
              _0x9bcc83.$k.Zk();
            };
            return _0x9bcc83;
          }();
          _0x30c50f.if = function () {
            function _0x37b191(_0x42ba12, _0x31d6b8, _0x4b0081) {
              this.ef = _0x4b0081;
              this.hd = false;
              this.nc = new _0x21984d.Container();
              this.nc.visible = false;
              this.Ul = new Array(_0x42ba12);
              for (var _0x38a59a = 0; _0x38a59a < this.Ul.length; _0x38a59a++) {
                var _0x471068 = new _0x30c50f.Vl(new Float32Array(_0x31d6b8 * 3));
                _0x471068.Wl(_0x31d6b8);
                this.Ul[_0x38a59a] = _0x471068;
                this.nc.addChild(_0x471068.tf());
              }
              this.ff = 1;
              this.gf = 1;
              this.Jf();
            }
            _0x37b191.prototype.tf = function () {
              return this.nc;
            };
            _0x37b191.prototype.Kf = function (_0x4b6900) {
              this.hd = _0x4b6900;
              this.nc.visible = _0x4b6900;
            };
            _0x37b191.prototype.Jf = function () {
              this.ff = this.ef.width();
              this.gf = this.ef.height();
              var _0x4c9872 = this.gf / 30;
              for (var _0x284070 = 0; _0x284070 < this.Ul.length; _0x284070++) {
                this.Ul[_0x284070].Xl(_0x4c9872);
              }
            };
            _0x37b191.prototype.Uf = function () {
              if (this.hd) {
                for (var _0x559378 = 0; _0x559378 < this.Ul.length; _0x559378++) {
                  this.Ul[_0x559378].Uf(this.lf);
                }
              }
            };
            _0x37b191.prototype.Yl = function () {
              return this.ff;
            };
            _0x37b191.prototype.Zl = function () {
              return this.gf;
            };
            _0x37b191.prototype.Qf = function (_0xcfa7fd, _0x475742) {
              this.Ul[_0xcfa7fd].$l(_0x475742);
            };
            _0x37b191.prototype.Rf = function (_0x19206b, _0x50a8d6) {
              this.Ul[_0x19206b]._l(_0x50a8d6);
            };
            _0x37b191.prototype.Sf = function (_0xeb02d3, _0x18aad2, _0x558126) {
              var _0x14675a = this.Ul[_0xeb02d3];
              for (var _0x2aee7c = _0x14675a.am(), _0x23b4a4 = _0x14675a.bm, _0x5ea584 = 0; _0x5ea584 < _0x2aee7c; _0x5ea584++) {
                _0x23b4a4[_0x5ea584 * 3] = _0x18aad2;
                _0x23b4a4[_0x5ea584 * 3 + 1] = _0x558126;
                _0x23b4a4[_0x5ea584 * 3 + 2] = 0;
              }
            };
            _0x37b191.prototype.Tf = function (_0x2eb307, _0x4012ba, _0x349094) {
              var _0x2b3c5a = this.Ul[_0x2eb307];
              var _0x3e7951 = _0x2b3c5a.am();
              var _0x500f56 = _0x2b3c5a.bm;
              var _0x3db6d4 = _0x2b3c5a.cm();
              var _0x5478e5 = _0x500f56[0];
              var _0xb04732 = undefined;
              var _0x384f72 = _0x500f56[1];
              var _0x3ddecb = undefined;
              var _0x45832b = _0x4012ba - _0x5478e5;
              var _0x552eb8 = _0x349094 - _0x384f72;
              var _0x33dcd2 = Math.hypot(_0x45832b, _0x552eb8);
              if (_0x33dcd2 > 0) {
                _0x500f56[0] = _0x4012ba;
                _0x500f56[1] = _0x349094;
                _0x500f56[2] = Math.atan2(_0x552eb8, _0x45832b);
                var _0x8a9b3 = _0x3db6d4 * 0.25 / (_0x3db6d4 * 0.25 + _0x33dcd2);
                var _0x347c8c = 1 - _0x8a9b3 * 2;
                for (var _0x15e1d4 = 1, _0xe720da = _0x3e7951; _0x15e1d4 < _0xe720da; _0x15e1d4++) {
                  _0xb04732 = _0x500f56[_0x15e1d4 * 3];
                  _0x500f56[_0x15e1d4 * 3] = _0x500f56[_0x15e1d4 * 3 - 3] * _0x347c8c + (_0xb04732 + _0x5478e5) * _0x8a9b3;
                  _0x5478e5 = _0xb04732;
                  _0x3ddecb = _0x500f56[_0x15e1d4 * 3 + 1];
                  _0x500f56[_0x15e1d4 * 3 + 1] = _0x500f56[_0x15e1d4 * 3 - 2] * _0x347c8c + (_0x3ddecb + _0x384f72) * _0x8a9b3;
                  _0x384f72 = _0x3ddecb;
                  _0x500f56[_0x15e1d4 * 3 + 2] = Math.atan2(_0x500f56[_0x15e1d4 * 3 - 2] - _0x500f56[_0x15e1d4 * 3 + 1], _0x500f56[_0x15e1d4 * 3 - 3] - _0x500f56[_0x15e1d4 * 3]);
                }
              }
            };
            return _0x37b191;
          }();
          _0x30c50f.dm = function () {
            function _0xbca405(_0x29282d) {
              var _0x29ac9c = this;
              this.ef = _0x29282d;
              this.Eb = _0x29282d.get()[0];
              this.lf = new _0x21984d.Renderer({
                view: _0x29282d.get()[0],
                transparent: true,
                antialias: false
              });
              this.hd = false;
              this.em = new _0x30c50f.Vl(new Float32Array(_0x5631a3 * 3));
              this.ff = 1;
              this.gf = 1;
              this.fm = _0x17ee99.gm;
              this.hm = _0x17ee99.gm;
              this.im = _0x17ee99.gm;
              this.jm = _0x17ee99.gm;
              this.km = _0x17ee99.gm;
              this.Jf();
              _0x1859a9().Lc.$b(function () {
                _0x29ac9c.em.lm();
              });
            }
            var _0x5631a3 = Math.min(100, _0x30c50f.WormSpriteTree.wc);
            var _0x17ee99 = {
              gm: "0lt0",
              mm: "0lt1",
              nm: "0lt2"
            };
            _0xbca405.prototype.Kf = function (_0xad8d94) {
              this.hd = _0xad8d94;
            };
            _0xbca405.prototype.Jf = function () {
              var _0x3c9473 = window.devicePixelRatio ? window.devicePixelRatio : 1;
              this.ff = this.ef.width();
              this.gf = this.ef.height();
              this.lf.resize(this.ff, this.gf);
              this.lf.resolution = _0x3c9473;
              this.Eb.width = _0x3c9473 * this.ff;
              this.Eb.height = _0x3c9473 * this.gf;
              var _0x541d60 = this.gf / 4;
              this.em.Xl(_0x541d60);
              var _0x3cb6fa = _0x2816c6.P(Math.floor(this.ff / _0x541d60) * 2 - 5, 1, _0x5631a3);
              this.em.Wl(_0x3cb6fa);
            };
            _0xbca405.prototype.Nf = function () {
              if (this.hd) {
                var _0x440c47 = Date.now();
                var _0x173479 = _0x440c47 / 200;
                var _0x4b74bd = Math.sin(_0x173479);
                this.em.om(this.pm(this.fm, _0x4b74bd), this.qm(this.fm, _0x4b74bd));
                this.em.rm(this.sm(this.hm, _0x4b74bd), this.sm(this.im, _0x4b74bd), this.sm(this.jm, _0x4b74bd), this.sm(this.km, _0x4b74bd));
                var _0x194e2f = this.em.cm();
                for (var _0x17935a = this.em.am(), _0x4130b6 = this.em.bm, _0x31d718 = this.ff - (this.ff - _0x194e2f * 0.5 * (_0x17935a - 1)) * 0.5, _0x4e4611 = this.gf * 0.5, _0x2e4b27 = 0, _0x478494 = 0, _0x6ea492 = -1; _0x6ea492 < _0x17935a; _0x6ea492++) {
                  var _0x42e660 = _0x6ea492;
                  var _0x4d44e5 = Math.cos(_0x42e660 * 1 / 12 * Math.PI - _0x173479) * (1 - Math.pow(16, _0x42e660 * -1 / 12));
                  if (_0x6ea492 >= 0) {
                    _0x4130b6[_0x6ea492 * 3] = _0x31d718 + _0x194e2f * -0.5 * _0x42e660;
                    _0x4130b6[_0x6ea492 * 3 + 1] = _0x4e4611 + _0x194e2f * 0.5 * _0x4d44e5;
                    _0x4130b6[_0x6ea492 * 3 + 2] = Math.atan2(_0x478494 - _0x4d44e5, _0x42e660 - _0x2e4b27);
                  }
                  _0x2e4b27 = _0x42e660;
                  _0x478494 = _0x4d44e5;
                }
                this.em.Uf();
                this.em.tm(this.lf);
              }
            };
            _0xbca405.prototype.$l = function (_0x34b211) {
              this.em.$l(_0x34b211);
            };
            _0xbca405.prototype.um = function (_0xa3415e) {
              this.fm = _0xa3415e ? _0x17ee99.nm : _0x17ee99.mm;
              this.hm = _0x17ee99.gm;
              this.im = _0x17ee99.gm;
              this.jm = _0x17ee99.gm;
              this.km = _0x17ee99.gm;
            };
            _0xbca405.prototype.vm = function (_0x444b5a) {
              this.fm = _0x17ee99.gm;
              this.hm = _0x444b5a ? _0x17ee99.nm : _0x17ee99.mm;
              this.im = _0x17ee99.gm;
              this.jm = _0x17ee99.gm;
              this.km = _0x17ee99.gm;
            };
            _0xbca405.prototype.wm = function (_0x525c6a) {
              this.fm = _0x17ee99.gm;
              this.hm = _0x17ee99.gm;
              this.im = _0x525c6a ? _0x17ee99.nm : _0x17ee99.mm;
              this.jm = _0x17ee99.gm;
              this.km = _0x17ee99.gm;
            };
            _0xbca405.prototype.xm = function (_0x5382e4) {
              this.fm = _0x17ee99.gm;
              this.hm = _0x17ee99.gm;
              this.im = _0x17ee99.gm;
              this.jm = _0x5382e4 ? _0x17ee99.nm : _0x17ee99.mm;
              this.km = _0x17ee99.gm;
            };
            _0xbca405.prototype.ym = function (_0x3fb7e6) {
              this.fm = _0x17ee99.gm;
              this.hm = _0x17ee99.gm;
              this.im = _0x17ee99.gm;
              this.jm = _0x17ee99.gm;
              this.km = _0x3fb7e6 ? _0x17ee99.nm : _0x17ee99.mm;
            };
            _0xbca405.prototype.pm = function (_0x12251b, _0x4f213b) {
              switch (_0x12251b) {
                case _0x17ee99.mm:
                  return 0.9 + _0x4f213b * 0.1;
                case _0x17ee99.nm:
                  return 0.4 + _0x4f213b * 0.3;
              }
              return 1;
            };
            _0xbca405.prototype.qm = function (_0x4d1634, _0x39e57c) {
              switch (_0x4d1634) {
                case _0x17ee99.mm:
                  return 0.6 + _0x39e57c * 0.5;
                case _0x17ee99.nm:
                  return 0.3 + _0x39e57c * 0.3;
              }
              return 1;
            };
            _0xbca405.prototype.sm = function (_0x545172, _0x22eab7) {
              switch (_0x545172) {
                case _0x17ee99.mm:
                  return 0.9 + _0x22eab7 * 0.1;
                case _0x17ee99.nm:
                  return 0.6 + _0x22eab7 * 0.4;
              }
              return 1;
            };
            return _0xbca405;
          }();
          _0x30c50f.Oj = function () {
            function _0x559b6d(_0x5b8459, _0x5df9ef, _0x503677, _0x29e45f, _0x272b3e) {
              this.zm = _0x5b8459;
              this.Am = _0x5df9ef;
              this.Bm = _0x503677;
              this.Cm = _0x29e45f;
              this.Dm = _0x272b3e;
            }
            _0x559b6d.Nj = function (_0x4f7839) {
              return new _0x559b6d(_0x4f7839.price, _0x4f7839.guest, _0x4f7839.nonbuyable, _0x4f7839.nonbuyableCause, _0x4f7839.description || _0x4f7839.refer?.texture || "SKIN NATIVE " + _0x4f7839.id);
            };
            _0x559b6d.Pj = function (_0x476a9a) {
              return new _0x559b6d(_0x476a9a.price, _0x476a9a.guest, _0x476a9a.nonbuyable, _0x476a9a.nonbuyableCause, _0x476a9a.description);
            };
            _0x559b6d.prototype.Jj = function () {
              return this.zm;
            };
            _0x559b6d.prototype.Mj = function () {
              return this.Am;
            };
            _0x559b6d.prototype.Kj = function () {
              return this.Bm;
            };
            _0x559b6d.prototype.Em = function () {
              return this.Cm;
            };
            _0x559b6d.prototype.Fm = function () {
              return this.Dm;
            };
            return _0x559b6d;
          }();
          _0x30c50f.qf = function () {
            function _0x31745e(_0x546dc7) {
              this.Gm = {};
              this.Gm[_0x292b13] = _0x546dc7;
              var _0x4e31e1 = _0x21984d.Shader.from(_0x2038fd, _0x3788ce, this.Gm);
              this.sf = new _0x21984d.Mesh(_0x441621, _0x4e31e1);
              this.sf.blendMode = _0x21984d.v.B;
            }
            var _0x1e1ff7 = "a1_" + _0x2816c6.X();
            var _0x2874f2 = "a2_" + _0x2816c6.X();
            var _0x292b13 = "u3_" + _0x2816c6.X();
            var _0x3dfb4c = "u4_" + _0x2816c6.X();
            var _0x4a92cc = "v1_" + _0x2816c6.X();
            var _0x441621 = new _0x21984d.Geometry().addAttribute(_0x1e1ff7, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2).addAttribute(_0x2874f2, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2);
            var _0x2038fd = "precision mediump float;attribute vec2 " + _0x1e1ff7 + ";attribute vec2 " + _0x2874f2 + ";uniform mat3 translationMatrix ;uniform mat3 projectionMatrix; uniform vec4 " + _0x3dfb4c + ";varying vec2 " + _0x4a92cc + ";const float ROT_ANGLE_DEG=7.5;const float ROT_COS=cos(ROT_ANGLE_DEG/180.0*6.283185307179586);const float ROT_SIN=sin(ROT_ANGLE_DEG/180.0*6.283185307179586);void main(){gl_Position=vec4((projectionMatrix * translationMatrix * vec3(" + _0x1e1ff7 + ",1.0)).xy,0.0,1.0);vec4 _ScreenParams=" + _0x3dfb4c + ";vec2 uv=" + _0x2874f2 + ";vec2 mul=0.5*vec2(_ScreenParams.x*(_ScreenParams.w-1.0)+1.0,_ScreenParams.y*(_ScreenParams.z-1.0)+1.0);vec2 v2=(uv-vec2(0.5,0.5))*mul*1.25;v2=vec2(v2.x*ROT_COS-v2.y*ROT_SIN,v2.x*ROT_SIN+v2.y*ROT_COS)*vec2(1,2);uv=v2;" + _0x4a92cc + "=uv;}";
            var _0x3788ce = "precision highp float;varying vec2 " + _0x4a92cc + ";uniform sampler2D " + _0x292b13 + ";void main(){gl_FragColor=texture2D(" + _0x292b13 + "," + _0x4a92cc + ");}";
            _0x31745e.prototype.Mf = function (_0x4437fe, _0x4d0825) {
              this.sf.scale.x = _0x4437fe;
              this.sf.scale.y = _0x4d0825;
              this.Gm[_0x3dfb4c] = [_0x4437fe, _0x4d0825, 1 / _0x4437fe + 1, 1 / _0x4d0825 + 1];
            };
            return _0x31745e;
          }();
          _0x30c50f.WMGBS1 = function () {
            function _0x19a9d7(_0x32dbaa) {
              var _0x3cdb77 = bbs.bgGameWidth || 1;
              var _0x549f2c = bbs.bgGameHeight || 1;
              var _0x44b0e0 = 1100;
              var _0x2dc959 = _0x3cdb77 > 512 ? _0x3cdb77 >= 1000 ? 1 : 0.1 : 0.01;
              this.Gm = {};
              this.Gm[_0x3a42cb] = [1, 0.5, 0.25, 0.5];
              this.Gm[_0x5ee96e] = _0x21984d.Texture.WHITE;
              this.Gm[_0xf7b847] = [0, 0];
              this.Gm[_0x55ea8d] = [0, 0];
              this.sf = new PIXI.TilingSprite(_0x32dbaa || _0x4bb95a.xe._g, _0x2dc959 == 1 ? _0x44b0e0 : 120000, _0x2dc959 == 1 ? _0x44b0e0 : 120000);
              this.sf.scale.x = _0x2dc959;
              this.sf.scale.y = _0x2dc959;
              this.sf.position.x = -(_0x2dc959 == 1 ? _0x3cdb77 / 2 : 625);
              this.sf.position.y = -(_0x2dc959 == 1 ? _0x549f2c / 2 : 625);
              console.log("WMGBS1", _0x3cdb77, _0x549f2c);
            }
            var _0x3a42cb = "u3_";
            var _0x5ee96e = "u4_";
            var _0xf7b847 = "u5_";
            var _0x55ea8d = "u6_";
            _0x19a9d7.prototype.Ec = function (_0x42aa1d, _0x5810dc, _0x4ac5ec, _0x1b0cb8) {
              var _0x4a0c42 = this.Gm[_0x3a42cb];
              _0x4a0c42[0] = _0x42aa1d;
              _0x4a0c42[1] = _0x5810dc;
              _0x4a0c42[2] = _0x4ac5ec;
              _0x4a0c42[3] = _0x1b0cb8;
            };
            _0x19a9d7.prototype.$g = function (_0x1c3f8f) {
              this.Gm[_0x5ee96e] = _0x1c3f8f;
            };
            _0x19a9d7.prototype.Uf = function (_0x2f71ef, _0x48ff8b, _0x1cd277, _0x396fb9) {};
            return _0x19a9d7;
          }();
          _0x30c50f.WMGBS2 = function () {
            console.log("WMGBS2");
            function _0x57da67() {
              this.Gm = {};
              this.Gm[_0x24abee] = [1, 0.5, 0.25, 0.5];
              this.Gm[_0xb974cd] = _0x21984d.Texture.WHITE;
              this.Gm[_0x504b92] = [0, 0];
              this.Gm[_0xd50f82] = [0, 0];
              var _0x2c043f = _0x21984d.Shader.from(_0x3b88f9, _0x76b59d, this.Gm);
              this.sf = new _0x21984d.Mesh(_0x76d67a, _0x2c043f);
            }
            var _0xabc1b3 = "a1_" + _0x2816c6.X();
            var _0x1c005b = "a2_" + _0x2816c6.X();
            var _0x13e460 = "translationMatrix";
            var _0x22729d = "projectionMatrix";
            var _0x24abee = "u3_" + _0x2816c6.X();
            var _0xb974cd = "u4_" + _0x2816c6.X();
            var _0x504b92 = "u5_" + _0x2816c6.X();
            var _0xd50f82 = "u6_" + _0x2816c6.X();
            var _0x11bf6a = "v1_" + _0x2816c6.X();
            var _0x76d67a = new _0x21984d.Geometry().addAttribute(_0xabc1b3, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2).addAttribute(_0x1c005b, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2);
            var _0x3b88f9 = "precision mediump float;attribute vec2 " + _0xabc1b3 + ";attribute vec2 " + _0x1c005b + ";uniform mat3 " + _0x13e460 + ";uniform mat3 " + _0x22729d + ";varying vec2 " + _0x11bf6a + ";void main(){" + _0x11bf6a + "=" + _0x1c005b + ";gl_Position=vec4((" + _0x22729d + "*" + _0x13e460 + "*vec3(" + _0xabc1b3 + ",1.0)).xy,0.0,1.0);}";
            var _0x76b59d = "precision highp float;varying vec2 " + _0x11bf6a + ";uniform vec4 " + _0x24abee + ";uniform sampler2D " + _0xb974cd + ";uniform vec2 " + _0x504b92 + ";uniform vec2 " + _0xd50f82 + ";void main(){vec2 coord=" + _0x11bf6a + "*" + _0x504b92 + "+" + _0xd50f82 + ";vec4 v_color_mix=" + _0x24abee + ";gl_FragColor=texture2D(" + _0xb974cd + ",coord)*0.3+v_color_mix.a*vec4(v_color_mix.rgb,0.0);}";
            _0x57da67.prototype.Ec = function (_0x535887, _0x30ef07, _0x5303cb, _0x3ae4aa) {
              var _0x358918 = this.Gm[_0x24abee];
              _0x358918[0] = _0x535887;
              _0x358918[1] = _0x30ef07;
              _0x358918[2] = _0x5303cb;
              _0x358918[3] = _0x3ae4aa;
            };
            _0x57da67.prototype.$g = function (_0x593086) {
              this.Gm[_0xb974cd] = _0x593086;
            };
            _0x57da67.prototype.Uf = function (_0x1b904b, _0xded733, _0xa8fe01, _0x2b117c) {
              this.sf.position.x = _0x1b904b;
              this.sf.position.y = _0xded733;
              this.sf.scale.x = _0xa8fe01;
              this.sf.scale.y = _0x2b117c;
              var _0x404a69 = this.Gm[_0x504b92];
              _0x404a69[0] = _0xa8fe01 * 0.2520615384615385;
              _0x404a69[1] = _0x2b117c * 0.4357063736263738;
              var _0x57e9d6 = this.Gm[_0xd50f82];
              _0x57e9d6[0] = _0x1b904b * 0.2520615384615385;
              _0x57e9d6[1] = _0xded733 * 0.4357063736263738;
            };
            return _0x57da67;
          }();
          _0x30c50f.sc = function () {
            function _0x5bb03e() {
              this.xc = new PIXI.Sprite();
              this.ev = null;
              this.Hm = 0;
              this.Im = 0;
              this.si = null;
            }
            _0x5bb03e.prototype.Bc = function (_0x4acc8a, _0x57aed7, _0x2d44a6) {
              if (_0x4acc8a) {
                this.xc.texture = _0x4acc8a.Ea();
                this.xc.anchor.set(_0x4acc8a.ya, _0x4acc8a.za);
                this.Hm = _0x4acc8a.Aa;
                this.Im = _0x4acc8a.Ba;
              } else {}
            };
            _0x5bb03e.prototype.Ec = function (_0x24fc18) {
              this.xc.tint = parseInt(_0x24fc18.substring(1), 16);
            };
            _0x5bb03e.prototype.Tc = function (_0xaeab6c) {
              try {
                this.xc.width = _0xaeab6c * this.Hm;
                this.xc.height = _0xaeab6c * this.Im;
              } catch (_0x10783d) {}
            };
            _0x5bb03e.prototype.md = function (_0x39590e) {
              this.xc.rotation = _0x39590e;
            };
            _0x5bb03e.prototype.ld = function (_0x5583a6, _0x8e69e0) {
              this.xc.position.set(_0x5583a6, _0x8e69e0);
            };
            _0x5bb03e.prototype.kd = function (_0x17bbae) {
              this.xc.visible = _0x17bbae;
            };
            _0x5bb03e.prototype.gd = function () {
              return this.xc.visible;
            };
            _0x5bb03e.prototype.jj = function (_0x25f658) {
              this.xc.alpha = _0x25f658;
            };
            _0x5bb03e.prototype.Qc = function () {
              return this.xc;
            };
            _0x5bb03e.prototype.Rc = function () {
              _0x2816c6.U(this.xc);
            };
            return _0x5bb03e;
          }();
          _0x30c50f.Worm = function () {
            function _0x2c30f2(_0x372e69) {
              this.hh = _0x372e69;
              this.Eh = new _0x30c50f.Worm.li();
              this.xi = false;
              this.wi = true;
              this.Xc = false;
              this.$c = 0;
              this.Jm = 0;
              this.dj = 1;
              this.bd = 0;
              this.Bh = 0;
              this.dd = {};
              this.ad = 0;
              this.Km = new Float32Array(_0x2b21a5 * 2);
              this.Lm = new Float32Array(_0x2b21a5 * 2);
              this._c = new Float32Array(_0x2b21a5 * 2);
              this.Mm = null;
              this.Nm = null;
              this.Om = null;
              this.Pm();
            }
            var _0x2b21a5 = 200;
            _0x2c30f2.prototype.si = function () {
              if (this.Nm != null) {
                _0x2816c6.U(this.Nm.nc);
              }
              if (this.Om != null) {
                _0x2816c6.U(this.Om);
              }
            };
            _0x2c30f2.prototype.Pm = function () {
              this.zi(0.25);
              this.Eh.ma = "";
              this.wi = true;
              this.dd = {};
              this.kd(false);
            };
            _0x2c30f2.prototype.ri = function (_0x2e2de6) {
              this.Eh = _0x2e2de6;
              this.Qm(this.xi);
            };
            _0x2c30f2.prototype.kd = function (_0x55415a) {
              var _0x5e9fef = this.xi;
              this.xi = _0x55415a;
              this.Qm(_0x5e9fef);
            };
            _0x2c30f2.prototype.zi = function (_0x1e7dd0) {
              this.Bh = _0x1e7dd0 * 50;
              var _0xea72dd = _0x1e7dd0;
              if (_0x1e7dd0 > this.hh.Ag) {
                _0xea72dd = Math.atan((_0x1e7dd0 - this.hh.Ag) / this.hh.Bg) * this.hh.Bg + this.hh.Ag;
              }
              var _0x5f3a58 = Math.sqrt(Math.pow(_0xea72dd * 5, 0.707106781186548) * 4 + 25);
              var _0x397967 = Math.min(_0x2b21a5, Math.max(3, (_0x5f3a58 - 5) * 5 + 1));
              var _0x16d32a = this.ad;
              this.$c = (5 + _0x5f3a58 * 0.9) * 0.025;
              this.ad = Math.floor(_0x397967);
              this.Jm = _0x397967 - this.ad;
              if (_0x16d32a > 0 && _0x16d32a < this.ad) {
                var _0x4bb14e = this.Km[_0x16d32a * 2 - 2];
                var _0x711156 = this.Km[_0x16d32a * 2 - 1];
                var _0x4a2fbb = this.Lm[_0x16d32a * 2 - 2];
                var _0x5901f3 = this.Lm[_0x16d32a * 2 - 1];
                var _0x51ce4f = this._c[_0x16d32a * 2 - 2];
                var _0x1b4f0e = this._c[_0x16d32a * 2 - 1];
                for (var _0x255ed1 = _0x16d32a; _0x255ed1 < this.ad; _0x255ed1++) {
                  this.Km[_0x255ed1 * 2] = _0x4bb14e;
                  this.Km[_0x255ed1 * 2 + 1] = _0x711156;
                  this.Lm[_0x255ed1 * 2] = _0x4a2fbb;
                  this.Lm[_0x255ed1 * 2 + 1] = _0x5901f3;
                  this._c[_0x255ed1 * 2] = _0x51ce4f;
                  this._c[_0x255ed1 * 2 + 1] = _0x1b4f0e;
                }
              }
            };
            _0x2c30f2.prototype.Ei = function (_0x100ec7, _0x27daf2) {
              this.ad = _0x27daf2;
              for (var _0x138ea4 = 0; _0x138ea4 < this.ad; _0x138ea4++) {
                this.Km[_0x138ea4 * 2] = this.Lm[_0x138ea4 * 2] = this._c[_0x138ea4 * 2] = _0x100ec7();
                this.Km[_0x138ea4 * 2 + 1] = this.Lm[_0x138ea4 * 2 + 1] = this._c[_0x138ea4 * 2 + 1] = _0x100ec7();
              }
            };
            _0x2c30f2.prototype.Bi = function (_0x302c5c, _0x5c37f9, _0x3edf21) {
              this.Xc = _0x3edf21;
              for (var _0x551b8a = 0; _0x551b8a < this.ad; _0x551b8a++) {
                this.Km[_0x551b8a * 2] = this.Lm[_0x551b8a * 2];
                this.Km[_0x551b8a * 2 + 1] = this.Lm[_0x551b8a * 2 + 1];
              }
              var _0x400ac5 = _0x302c5c - this.Lm[0];
              var _0x8af349 = _0x5c37f9 - this.Lm[1];
              this.Rm(_0x400ac5, _0x8af349, this.ad, this.Lm);
            };
            _0x2c30f2.prototype.Rm = function (_0x15b61d, _0x5875ed, _0xa12ae3, _0x19d7dc) {
              var _0x29f02f = Math.hypot(_0x15b61d, _0x5875ed);
              if (!(_0x29f02f <= 0)) {
                var _0x43a5ce = _0x19d7dc[0];
                var _0x3c1ef0 = undefined;
                _0x19d7dc[0] += _0x15b61d;
                var _0x58ea09 = _0x19d7dc[1];
                var _0x4eb8f2 = undefined;
                _0x19d7dc[1] += _0x5875ed;
                var _0x44c684 = this.$c / (this.$c + _0x29f02f);
                var _0x2acefe = 1 - _0x44c684 * 2;
                for (var _0x20f2b8 = 1, _0x32719b = _0xa12ae3 - 1; _0x20f2b8 < _0x32719b; _0x20f2b8++) {
                  _0x3c1ef0 = _0x19d7dc[_0x20f2b8 * 2];
                  _0x19d7dc[_0x20f2b8 * 2] = _0x19d7dc[_0x20f2b8 * 2 - 2] * _0x2acefe + (_0x3c1ef0 + _0x43a5ce) * _0x44c684;
                  _0x43a5ce = _0x3c1ef0;
                  _0x4eb8f2 = _0x19d7dc[_0x20f2b8 * 2 + 1];
                  _0x19d7dc[_0x20f2b8 * 2 + 1] = _0x19d7dc[_0x20f2b8 * 2 - 1] * _0x2acefe + (_0x4eb8f2 + _0x58ea09) * _0x44c684;
                  _0x58ea09 = _0x4eb8f2;
                }
                _0x44c684 = this.Jm * this.$c / (this.Jm * this.$c + _0x29f02f);
                _0x2acefe = 1 - _0x44c684 * 2;
                _0x19d7dc[_0xa12ae3 * 2 - 2] = _0x19d7dc[_0xa12ae3 * 2 - 4] * _0x2acefe + (_0x19d7dc[_0xa12ae3 * 2 - 2] + _0x43a5ce) * _0x44c684;
                _0x19d7dc[_0xa12ae3 * 2 - 1] = _0x19d7dc[_0xa12ae3 * 2 - 3] * _0x2acefe + (_0x19d7dc[_0xa12ae3 * 2 - 1] + _0x58ea09) * _0x44c684;
              }
            };
            _0x2c30f2.prototype.fh = function () {
              return {
                x: this._c[0],
                y: this._c[1]
              };
            };
            _0x2c30f2.prototype.yi = function (_0x572801, _0x4bdea1) {
              var _0xc691c8 = 1000000;
              var _0x1c56bc = _0x572801;
              var _0x287b78 = _0x4bdea1;
              for (var _0xf060ea = 0; _0xf060ea < this.ad; _0xf060ea++) {
                var _0x5ac6ac = this._c[_0xf060ea * 2];
                var _0x2efcba = this._c[_0xf060ea * 2 + 1];
                var _0x37b763 = Math.hypot(_0x572801 - _0x5ac6ac, _0x4bdea1 - _0x2efcba);
                if (_0x37b763 < _0xc691c8) {
                  _0xc691c8 = _0x37b763;
                  _0x1c56bc = _0x5ac6ac;
                  _0x287b78 = _0x2efcba;
                }
              }
              return {
                x: _0x1c56bc,
                y: _0x287b78,
                distance: _0xc691c8
              };
            };
            _0x2c30f2.prototype.ti = function (_0x106eaa) {
              this.Mm = _0x106eaa;
            };
            _0x2c30f2.prototype.hj = function (_0x54d294, _0x1dfbf5) {
              this.dj = _0x2816c6.Q(this.dj, this.wi ? this.Xc ? 0.9 + Math.cos(_0x54d294 / 400 * Math.PI) * 0.1 : 1 : 0, _0x1dfbf5, 1 / 800);
              this.bd = _0x2816c6.Q(this.bd, this.wi ? this.Xc ? 1 : 0 : 1, _0x1dfbf5, 0.0025);
              if (this.Nm != null) {
                this.Nm.nc.alpha = this.dj;
              }
              if (this.Om != null) {
                this.Om.alpha = this.dj;
              }
            };
            _0x2c30f2.prototype.ij = function (_0x281b2b, _0x28634d, _0x499e13, _0x5d7623) {
              if (this.xi && this.wi) {
                var _0x323e14 = Math.pow(0.11112, _0x28634d / 95);
                for (var _0x46d6ed = 0; _0x46d6ed < this.ad; _0x46d6ed++) {
                  this._c[_0x46d6ed * 2] = _0x2816c6.S(_0x2816c6.S(this.Km[_0x46d6ed * 2], this.Lm[_0x46d6ed * 2], _0x499e13), this._c[_0x46d6ed * 2], _0x323e14);
                  this._c[_0x46d6ed * 2 + 1] = _0x2816c6.S(_0x2816c6.S(this.Km[_0x46d6ed * 2 + 1], this.Lm[_0x46d6ed * 2 + 1], _0x499e13), this._c[_0x46d6ed * 2 + 1], _0x323e14);
                }
              }
              if (this.Nm && this.xi) {
                this.Nm.Zc(this, _0x281b2b, _0x28634d, _0x5d7623);
              }
              if (this.Om) {
                this.Om.ih.x = this._c[0];
                this.Om.ih.y = this._c[1] - this.$c * 3;
              }
            };
            _0x2c30f2.prototype.Qm = function (_0xb702d2) {
              if (this.xi) {
                if (!_0xb702d2) {
                  this.Sm();
                }
              } else {
                if (this.Nm != null) {
                  _0x2816c6.U(this.Nm.nc);
                }
                if (this.Om != null) {
                  _0x2816c6.U(this.Om);
                }
              }
            };
            _0x2c30f2.prototype.Sm = function () {
              var _0x47f456 = _0x1859a9();
              this.Nm = this.Nm || new _0x30c50f.WormSpriteTree();
              _0x2816c6.U(this.Nm.nc);
              this.Nm.yc(_0x47f456.dh.hh.xg, _0x47f456.Lc.Ub().jb(this.Eh.Gh), _0x47f456.Lc.Ub().ib(this.Eh.Hh), _0x47f456.Lc.Ub().kb(this.Eh.ni), _0x47f456.Lc.Ub().lb(this.Eh.oi), _0x47f456.Lc.Ub().mb(this.Eh.pi), _0x47f456.Lc.Ub().nb(this.Eh.qi), "#ffffff");
              this.Om = this.Om || new _0x30c50f.Tm("");
              _0x2816c6.U(this.Om);
              this.Om.style.fontFamily = "PTSans";
              this.Om.anchor.set(0.5);
              this.Om.style.fontSize = parseInt(bbs.enemyNameFontSize || 14);
              this.Om.style.fill = bbs.enemyNameColor || _0x47f456.Lc.Ub().ib(this.Eh.Hh).tb || "#fff";
              this.Om.style.fontWeight = "bold";
              this.Om.text = _0x7613e6 ? this.Eh.ma : "-----";
              this.Mm.oh(this.Eh.ae, this.Nm, this.Om);
            };
            _0x2c30f2.li = function () {
              function _0x2a7e74() {
                this.ae = 0;
                this.Gh = _0x3ca652.ps ? _0x3ca652.ps : _0x30c50f.GameParams.Cg;
                this.Hh = 0;
                this.ni = 0;
                this.oi = 0;
                this.pi = 0;
                this.qi = 0;
                this.ma = 0;
              }
              return _0x2a7e74;
            }();
            return _0x2c30f2;
          }();
          _0x30c50f.Tm = function () {
            return _0x2816c6.M(_0x21984d.Text, function (_0x1b7c4b, _0xc2e0a4, _0x184b80) {
              _0x21984d.Text.call(this, _0x1b7c4b, _0xc2e0a4, _0x184b80);
              this.ih = {
                x: 0,
                y: 0
              };
            });
          }();
          _0x30c50f.hb = function () {
            function _0x28b6e9(_0x2dc331, _0x3544cf, _0x4be132, _0x1db8f3, _0x29c148) {
              this.lj = _0x2dc331;
              this.mj = _0x3544cf;
              this.nj = _0x4be132;
              this.oj = _0x1db8f3;
              this.pj = _0x29c148;
            }
            _0x28b6e9.prototype.Um = function (_0x5dcda4) {
              return new _0x28b6e9(_0x5dcda4, this.mj, this.nj, this.oj, this.pj);
            };
            _0x28b6e9.prototype.Vm = function (_0x20abe0) {
              return new _0x28b6e9(this.lj, _0x20abe0, this.nj, this.oj, this.pj);
            };
            _0x28b6e9.prototype.Wm = function (_0x574ee7) {
              return new _0x28b6e9(this.lj, this.mj, _0x574ee7, this.oj, this.pj);
            };
            _0x28b6e9.prototype.Xm = function (_0x4d4422) {
              return new _0x28b6e9(this.lj, this.mj, this.nj, _0x4d4422, this.pj);
            };
            _0x28b6e9.prototype.Ym = function (_0x24a122) {
              return new _0x28b6e9(this.lj, this.mj, this.nj, this.oj, _0x24a122);
            };
            return _0x28b6e9;
          }();
          _0x30c50f.Vl = function () {
            function _0x5bc4aa(_0x22e728) {
              this.Zm = new _0x30c50f.WormSpriteTree();
              this.Zm.nc.addChild(this.Zm.oc);
              this.$m = null;
              this._m = null;
              this.bm = _0x22e728;
              this.pc = 0;
              this.Gi = 1;
              this.an = 1;
              this.bn = 1;
              this.cn = 1;
              this.dn = 1;
              this.gn = 1;
              this.hn = 1;
              this._l("#ffffff");
            }
            var _0x5267b3 = new _0x30c50f.hb(0, 0, 0, 0, 0);
            _0x5bc4aa.prototype.tf = function () {
              return this.Zm.nc;
            };
            _0x5bc4aa.prototype.Wl = function (_0x10248f) {
              this.pc = _0x10248f;
              if (this.Zm.pc !== _0x10248f) {
                for (var _0x3dd753 = _0x10248f; _0x3dd753 < this.Zm.qc.length; _0x3dd753++) {
                  this.Zm.qc[_0x3dd753].Uc();
                }
                while (this.Zm.pc > _0x10248f) {
                  this.Zm.pc -= 1;
                  var _0x3e8e24 = this.Zm.qc[this.Zm.pc];
                  _0x3e8e24.Dc.Rc();
                  _0x3e8e24.Cc.Rc();
                }
                while (this.Zm.pc < _0x10248f) {
                  var _0x42854d = this.Zm.qc[this.Zm.pc];
                  this.Zm.pc += 1;
                  this.Zm.nc.addChild(_0x42854d.Cc.Qc());
                  this.Zm.nc.addChild(_0x42854d.Dc.Qc());
                  _0x42854d.Cc.jj(this.an);
                  _0x42854d.Dc.jj(this.bn);
                }
                for (var _0x225f22 = 0; _0x225f22 < this.Zm.oc.Fc.length; _0x225f22++) {
                  this.Zm.oc.Fc[_0x225f22].jj(this.cn);
                }
                for (var _0x5acdf7 = 0; _0x5acdf7 < this.Zm.oc.Gc.length; _0x5acdf7++) {
                  this.Zm.oc.Gc[_0x5acdf7].jj(this.dn);
                }
                for (var _0x3657a8 = 0; _0x3657a8 < this.Zm.oc.Ic.length; _0x3657a8++) {
                  this.Zm.oc.Ic[_0x3657a8].jj(this.gn);
                }
                for (var _0x6e19a = 0; _0x6e19a < this.Zm.oc.Hc.length; _0x6e19a++) {
                  this.Zm.oc.Hc[_0x6e19a].jj(this.hn);
                }
              }
            };
            _0x5bc4aa.prototype.am = function () {
              return this.pc;
            };
            _0x5bc4aa.prototype.$l = function (_0x1e60f5) {
              this.$m = _0x1e60f5;
              this._m = "#ffffff";
              this.lm();
            };
            _0x5bc4aa.prototype._l = function (_0x34dea5) {
              this.$m = _0x5267b3;
              this._m = _0x34dea5;
              this.lm();
            };
            _0x5bc4aa.prototype.lm = function () {
              var _0x1bb47d = _0x1859a9();
              this.Zm.yc(_0x30c50f.Ac.vg, null, _0x1bb47d.Lc.Ub().ib(this.$m.lj), _0x1bb47d.Lc.Ub().kb(this.$m.mj), _0x1bb47d.Lc.Ub().lb(this.$m.nj), _0x1bb47d.Lc.Ub().mb(this.$m.pj), _0x1bb47d.Lc.Ub().nb(this.$m.oj), this._m);
            };
            _0x5bc4aa.prototype.Xl = function (_0x394ebb) {
              this.Gi = _0x394ebb;
            };
            _0x5bc4aa.prototype.cm = function () {
              return this.Gi;
            };
            _0x5bc4aa.prototype.om = function (_0x43a900, _0x18e262) {
              this.an = _0x43a900;
              this.bn = _0x18e262;
              for (var _0x290be6 = 0; _0x290be6 < this.pc; _0x290be6++) {
                var _0x2de84 = this.Zm.qc[_0x290be6];
                _0x2de84.Cc.jj(this.an);
                _0x2de84.Dc.jj(this.bn);
              }
            };
            _0x5bc4aa.prototype.rm = function (_0x459f56, _0x580f7f, _0x12646a, _0x2d8cea) {
              this.cn = _0x459f56;
              this.dn = _0x580f7f;
              this.gn = _0x12646a;
              this.hn = _0x2d8cea;
              for (var _0x1e7721 = 0; _0x1e7721 < this.Zm.oc.Fc.length; _0x1e7721++) {
                this.Zm.oc.Fc[_0x1e7721].jj(this.cn);
              }
              for (var _0x1aa178 = 0; _0x1aa178 < this.Zm.oc.Gc.length; _0x1aa178++) {
                this.Zm.oc.Gc[_0x1aa178].jj(this.dn);
              }
              for (var _0x537b1c = 0; _0x537b1c < this.Zm.oc.Ic.length; _0x537b1c++) {
                this.Zm.oc.Ic[_0x537b1c].jj(this.gn);
              }
              for (var _0x268169 = 0; _0x268169 < this.Zm.oc.Hc.length; _0x268169++) {
                this.Zm.oc.Hc[_0x268169].jj(this.hn);
              }
            };
            _0x5bc4aa.prototype.Uf = function () {
              var _0x45abe1 = this.Gi * 2;
              var _0x18f537 = this.Gi * 2 * 1.5;
              if (this.pc > 0) {
                var _0x57b87d = this.bm[0];
                var _0x3869bd = this.bm[1];
                var _0x46ad9d = this.bm[2];
                this.Zm.qc[0].Sc(_0x57b87d, _0x3869bd, _0x45abe1, _0x18f537, _0x46ad9d);
                this.Zm.oc.Sc(_0x57b87d, _0x3869bd, _0x45abe1, _0x46ad9d);
              }
              for (var _0x720e13 = 1; _0x720e13 < this.pc; _0x720e13++) {
                var _0x57c6e1 = this.bm[_0x720e13 * 3];
                var _0x5015b1 = this.bm[_0x720e13 * 3 + 1];
                var _0x2c8f84 = this.bm[_0x720e13 * 3 + 2];
                this.Zm.qc[_0x720e13].Sc(_0x57c6e1, _0x5015b1, _0x45abe1, _0x18f537, _0x2c8f84);
              }
            };
            _0x5bc4aa.prototype.tm = function (_0x1a1201) {
              _0x1a1201.render(this.Zm.nc);
            };
            return _0x5bc4aa;
          }();
          _0x30c50f.kf = function () {
            function _0x132fda(_0x23faa7) {
              this.nd = _0x23faa7;
            }
            _0x132fda.bgcanvas = $("#background-canvas");
            _0x132fda.socialButtons = $("#social-buttons");
            _0x132fda.socialButtons.html("");
            _0x132fda.jn = $("#game-view");
            _0x132fda.gameCanvas = $("#game-canvas");
            _0x132fda.ln = $("#results-view");
            _0x132fda.mn = $("#stretch-box");
            _0x132fda.nn = $("#main-menu-view");
            _0x132fda.pn = $("#popup-view");
            _0x132fda.qn = $("#loading-view");
            _0x132fda.rn = $("#restricted-view");
            _0x132fda.sn = $("#toaster-view");
            _0x132fda.tn = $("#error-gateway-connection-view");
            _0x132fda.un_error = $("#error-game-connection-view");
            _0x132fda.vn = $("#markup-wrap");
            _0x132fda.prototype.ha = function () {};
            _0x132fda.prototype.Gk = function () {};
            _0x132fda.prototype.Hk = function () {};
            _0x132fda.prototype.Bk = function () {};
            _0x132fda.prototype.Jf = function () {};
            _0x132fda.prototype.Nf = function (_0x32af24, _0x435c67) {};
            return _0x132fda;
          }();
          _0x30c50f.Vj = function () {
            function _0x5595bd(_0x28e658, _0x128544, _0x27097e, _0x28f80d, _0x2e3848, _0x2b8324) {
              var _0x1d7bf9 = "OK";
              var _0x292ae0 = $(_0x1d7bf9);
              _0x292ae0.click(function () {
                if (typeof FB != "undefined" && FB.ui !== undefined) {
                  FB.ui({
                    method: "feed",
                    display: "popup",
                    link: _0x128544,
                    name: _0x27097e,
                    caption: _0x28f80d,
                    description: _0x2e3848,
                    picture: _0x2b8324
                  }, function () {});
                }
              });
              return _0x292ae0;
            }
            var _0x27538e = $("#final-caption");
            var _0x249a50 = $("#final-continue");
            var _0x501abe = $("#congrats-bg");
            var _0x503b66 = $("#unl6wj4czdl84o9b");
            $("#congrats");
            var _0xd7e325 = $("#final-share-fb");
            var _0x27454c = $("#final-message");
            var _0x1c642b = $("#final-score");
            var _0x120942 = $("#final-place");
            var _0x161f2b = $("#final-board");
            var _0x5deb99 = _0x2816c6.M(_0x30c50f.kf, function () {
              _0x30c50f.kf.call(this, _0x30c50f.Fk.wn);
              var _0x4cb655 = this;
              var _0x345461 = _0x1859a9();
              _0xd7e325.toggle(_0x28e5b7.xn);
              _0x27538e.text(_0x2816c6.H("index.game.result.title"));
              _0x249a50.text(_0x2816c6.H("index.game.result.continue"));
              _0x249a50.click(function () {
                _0x345461.Ci.Be();
                _0x345461.zn.yn.ka();
                _0x345461.Ci.pe(_0x30c50f.ge.je._e);
                _0x345461.og.Ak(_0x345461.og._e);
              });
              $("html").keydown(function (_0x21f36d) {
                if (_0x21f36d.keyCode === 32) {
                  _0x4cb655.An = true;
                }
              }).keyup(function (_0x393ac2) {
                if (_0x393ac2.keyCode === 32) {
                  _0x4cb655.An = false;
                }
              });
              this.ng = new _0x30c50f.Eg(_0x30c50f.kf.gameCanvas);
              this.Cn = 0;
              this.Bn = 0;
              this.An = false;
            });
            _0x5deb99.prototype.ha = function () {};
            _0x5deb99.prototype.Gk = function () {
              if (this.Cn === 0) {
                _0x30c50f.kf.jn.stop();
                _0x30c50f.kf.jn.fadeIn(500);
                _0x30c50f.kf.ln.stop();
                _0x30c50f.kf.ln.fadeOut(1);
                _0x30c50f.kf.nn.stop();
                _0x30c50f.kf.nn.fadeOut(50);
                _0x30c50f.kf.pn.stop();
                _0x30c50f.kf.pn.fadeOut(50);
                _0x30c50f.kf.sn.stop();
                _0x30c50f.kf.sn.fadeOut(50);
                _0x30c50f.kf.qn.stop();
                _0x30c50f.kf.qn.fadeOut(50);
                _0x30c50f.kf.rn.stop();
                _0x30c50f.kf.rn.fadeOut(50);
                _0x30c50f.kf.tn.stop();
                _0x30c50f.kf.tn.fadeOut(50);
                _0x30c50f.kf.un_error.stop();
                _0x30c50f.kf.un_error.fadeOut(50);
                _0x30c50f.kf.mn.stop();
                _0x30c50f.kf.mn.fadeOut(1);
                _0x30c50f.kf.bgcanvas.stop();
                _0x30c50f.kf.bgcanvas.fadeOut(50);
                _0x30c50f.GameView.Kf(false);
                _0x30c50f.kf.socialButtons.stop();
                _0x30c50f.kf.socialButtons.fadeOut(50);
                _0x30c50f.kf.vn.stop();
                _0x30c50f.kf.vn.fadeOut(50);
              } else {
                _0x30c50f.kf.jn.stop();
                _0x30c50f.kf.jn.fadeIn(500);
                _0x30c50f.kf.ln.stop();
                _0x30c50f.kf.ln.fadeIn(500);
                _0x30c50f.kf.nn.stop();
                _0x30c50f.kf.nn.fadeOut(50);
                _0x30c50f.kf.pn.stop();
                _0x30c50f.kf.pn.fadeOut(50);
                _0x30c50f.kf.sn.stop();
                _0x30c50f.kf.sn.fadeOut(50);
                _0x30c50f.kf.qn.stop();
                _0x30c50f.kf.qn.fadeOut(50);
                _0x30c50f.kf.rn.stop();
                _0x30c50f.kf.rn.fadeOut(50);
                _0x30c50f.kf.tn.stop();
                _0x30c50f.kf.tn.fadeOut(50);
                _0x30c50f.kf.un_error.stop();
                _0x30c50f.kf.un_error.fadeOut(50);
                _0x30c50f.kf.mn.stop();
                _0x30c50f.kf.mn.fadeOut(1);
                _0x30c50f.kf.bgcanvas.stop();
                _0x30c50f.kf.bgcanvas.fadeOut(50);
                _0x30c50f.GameView.Kf(false);
                _0x30c50f.kf.socialButtons.stop();
                _0x30c50f.kf.socialButtons.fadeOut(50);
                _0x30c50f.kf.vn.stop();
                _0x30c50f.kf.vn.fadeOut(50);
              }
            };
            _0x5deb99.prototype.Dn = function () {
              this.Cn = 0;
              return this;
            };
            _0x5deb99.prototype.En = function () {
              _0x501abe.hide();
              setTimeout(function () {
                _0x501abe.fadeIn(500);
              }, 3000);
              _0x503b66.hide();
              setTimeout(function () {
                _0x503b66.fadeIn(500);
              }, 500);
              this.Cn = 1;
              return this;
            };
            _0x5deb99.prototype.Hk = function () {
              this.An = false;
              this.ng.Jf();
              if (this.Cn === 1) {
                _0x1859a9().Ci.Fe();
              }
            };
            _0x5deb99.prototype.Jf = function () {
              this.ng.Jf();
            };
            _0x5deb99.prototype.Nf = function (_0x32e3f9, _0x1f228e) {
              this.ng.Nf(_0x32e3f9, _0x1f228e);
            };
            _0x5deb99.prototype.Fn = function (_0x36966c, _0xa164f0, _0x3f67f0) {
              var _0x34df60 = undefined;
              var _0x29fb21 = undefined;
              var _0x26cb88 = undefined;
              if (_0xa164f0 >= 1 && _0xa164f0 <= 10) {
                _0x34df60 = _0x2816c6.H("index.game.result.place.i" + _0xa164f0);
                _0x29fb21 = _0x2816c6.H("index.game.result.placeInBoard");
                _0x26cb88 = _0x2816c6.H("index.game.social.shareResult.messGood").replace("{0}", _0x3f67f0).replace("{1}", _0x36966c).replace("{2}", _0x34df60);
              } else {
                _0x34df60 = "";
                _0x29fb21 = _0x2816c6.H("index.game.result.tryHit");
                _0x26cb88 = _0x2816c6.H("index.game.social.shareResult.messNorm").replace("{0}", _0x3f67f0).replace("{1}", _0x36966c);
              }
              _0x27454c.html(_0x2816c6.H("index.game.result.your"));
              _0x1c642b.html(_0x36966c);
              _0x120942.html(_0x34df60);
              _0x161f2b.html(_0x29fb21);
              if (_0x28e5b7.xn) {
                var _0x25817a = _0x2816c6.H("index.game.result.share");
                _0x2816c6.H("index.game.social.shareResult.caption");
                _0xd7e325.empty().append(_0x5595bd(_0x25817a, "https://wormate.io", "wormate.io", _0x26cb88, _0x26cb88, "https://wormate.io/images/og-share-img-new.jpg"));
              }
            };
            _0x5deb99.prototype.Gn = function () {
              return this.Bn;
            };
            _0x5deb99.prototype.Hn = function () {
              return this.An;
            };
            return _0x5deb99;
          }();
          _0x30c50f.sk = function () {
            var _0x5d8beb = $("#loading-progress-cont");
            var _0x456b1f = $("#loading-progress-bar");
            var _0x1e7121 = $("#loading-progress-text");
            var _0x169fff = _0x2816c6.M(_0x30c50f.kf, function () {
              _0x30c50f.kf.call(this, _0x30c50f.Fk.wn);
              this.In = -1;
              this.Jn = "";
            });
            _0x169fff.prototype.ha = function () {};
            _0x169fff.prototype.Gk = function () {
              _0x30c50f.kf.jn.stop();
              _0x30c50f.kf.jn.fadeOut(50);
              _0x30c50f.kf.ln.stop();
              _0x30c50f.kf.ln.fadeOut(50);
              _0x30c50f.kf.nn.stop();
              _0x30c50f.kf.nn.fadeOut(50);
              _0x30c50f.kf.pn.stop();
              _0x30c50f.kf.pn.fadeOut(50);
              _0x30c50f.kf.sn.stop();
              _0x30c50f.kf.sn.fadeOut(50);
              _0x30c50f.kf.qn.stop();
              _0x30c50f.kf.qn.fadeIn(500);
              _0x30c50f.kf.rn.stop();
              _0x30c50f.kf.rn.fadeOut(50);
              _0x30c50f.kf.tn.stop();
              _0x30c50f.kf.tn.fadeOut(50);
              _0x30c50f.kf.un_error.stop();
              _0x30c50f.kf.un_error.fadeOut(50);
              _0x30c50f.kf.mn.stop();
              _0x30c50f.kf.mn.fadeIn(1);
              _0x30c50f.kf.bgcanvas.stop();
              _0x30c50f.kf.bgcanvas.fadeIn(500);
              _0x30c50f.GameView.Kf(true);
              _0x30c50f.kf.socialButtons.stop();
              _0x30c50f.kf.socialButtons.fadeOut(50);
              _0x30c50f.kf.vn.stop();
              _0x30c50f.kf.vn.fadeOut(50);
            };
            _0x169fff.prototype.Hk = function () {
              _0x1859a9().Ci.pe(_0x30c50f.ge.je.ie);
            };
            _0x169fff.prototype.Bk = function () {};
            _0x169fff.prototype.Kn = function () {
              this.Ln("", 0);
              _0x5d8beb.stop();
              _0x5d8beb.fadeIn(100);
            };
            _0x169fff.prototype.Mn = function () {
              _0x5d8beb.stop();
              _0x5d8beb.fadeOut(100);
            };
            _0x169fff.prototype.Ln = function (_0x187ed9, _0x4c5677) {
              if (this.Jn !== _0x187ed9) {
                this.Jn = _0x187ed9;
              }
              var _0x78c422 = _0x2816c6.P(Math.floor(_0x4c5677 * 100), 0, 100);
              if (this.In !== _0x78c422) {
                _0x456b1f.css({
                  width: _0x78c422 + "%"
                });
                _0x1e7121.html(_0x78c422 + " %");
              }
            };
            return _0x169fff;
          }();
          _0x30c50f.Wj = function () {
            var _0x54df3a = $("#mm-line-top");
            $("#mm-line-center");
            $("#mm-line-bottom");
            var _0x2231a2 = $("#mm-bottom-buttons");
            var _0x1ab831 = $("#mm-menu-cont");
            var _0x423ee3 = $("#mm-loading");
            var _0x4cf2e3 = $("#mm-loading-progress-bar");
            var _0x1f5aa8 = $("#mm-loading-progress-text");
            $("#mm-event-text");
            var _0xd601b = $("#mm-skin-canv");
            var _0xb2754e = $("#mm-skin-prev");
            var _0x8a70ad = $("#mm-skin-next");
            var _0x3f6398 = $("#mm-skin-over");
            var _0x3b8781 = $("#mm-skin-over-button-list");
            var _0x153c0c = $("#mm-params-nickname");
            var _0x1bba74 = $("#mm-params-game-mode");
            var _0x51dd0d = $("#mm-action-play");
            var _0x2f0a3f = $("#mm-action-guest");
            var _0x45ab96 = $("#mm-action-login");
            var _0x440c5a = $("#mm-player-info");
            var _0x7309f = $("#mm-store");
            var _0x13b00d = $("#mm-leaders");
            var _0x449854 = $("#mm-settings");
            var _0x4a9aa5 = $("#mm-coins-box");
            var _0x488827 = $("#mm-player-avatar");
            var _0x22c381 = $("#mm-player-username");
            var _0x5167a0 = $("#mm-coins-val");
            var _0x105a47 = $("#mm-player-exp-bar");
            var _0x13ffa4 = $("#mm-player-exp-val");
            var _0x2c0233 = $("#mm-player-level");
            var _0x291a19 = _0x2816c6.M(_0x30c50f.kf, function () {
              _0x30c50f.kf.call(this, _0x30c50f.Fk.Ek);
              var _0x30ac59 = _0x1859a9();
              this.In = -1;
              this.Jn = "";
              this.Nn = new _0x30c50f.dm(_0xd601b);
              _0x1bba74.click(function () {
                _0x30ac59.Ci.Be();
              });
              _0xd601b.click(function () {
                if (_0x30ac59.Ij.Hj()) {
                  _0x30ac59.Ci.Be();
                  _0x30ac59.og.Ak(_0x30ac59.og.ik);
                }
              });
              _0xb2754e.click(function () {
                _0x30ac59.Ci.Be();
                _0x30ac59.On.Ej();
              });
              _0x8a70ad.click(function () {
                _0x30ac59.Ci.Be();
                _0x30ac59.On.Dj();
              });
              _0x153c0c.keypress(function (_0x5864ec) {
                if (_0x5864ec.keyCode == 13) {
                  _0x30ac59.Pn(true);
                }
              });
              _0x51dd0d.click(function () {
                _0x30ac59.Ci.Be();
                _0x30ac59.Pn(true);
              });
              _0x2f0a3f.click(function () {
                _0x30ac59.Ci.Be();
                _0x30ac59.Pn(true);
              });
              _0x45ab96.click(function () {
                _0x30ac59.Ci.Be();
                _0x30ac59.og.Ak(_0x30ac59.og.fk);
              });
              _0x449854.click(function () {
                _0x30ac59.Ci.Be();
                _0x30ac59.og.Ak(_0x30ac59.og.$h);
              });
              _0x440c5a.click(function () {
                if (_0x30ac59.Ij.Hj()) {
                  _0x30ac59.Ci.Be();
                  _0x30ac59.og.Ak(_0x30ac59.og.dk);
                }
              });
              _0x13b00d.click(function () {
                if (_0x30ac59.Ij.Hj()) {
                  _0x30ac59.Ci.Be();
                  _0x30ac59.og.Ak(_0x30ac59.og.bk);
                }
              });
              _0x7309f.click(function () {
                if (_0x30ac59.Ij.Hj()) {
                  _0x30ac59.Ci.Be();
                  _0x30ac59.og.Ak(_0x30ac59.og.kk);
                }
              });
              _0x4a9aa5.click(function () {
                if (_0x30ac59.Ij.Hj()) {
                  _0x30ac59.Ci.Be();
                  _0x30ac59.og.Ak(_0x30ac59.og._j);
                }
              });
              this.Qn();
              this.Rn();
              var _0x54c81a = _0x30c50f.Vf.fg(_0x30c50f.Vf._f);
              if (_0x54c81a !== "ARENA" && _0x54c81a !== "TEAM2") {
                _0x54c81a = "ARENA";
              }
              _0x1bba74.val(_0x54c81a);
            });
            _0x291a19.prototype.ha = function () {
              var _0x250548 = _0x1859a9();
              var _0x30ee0b = this;
              _0x250548.Ij.zl(function () {
                if (_0x250548.Ij.Hj()) {
                  _0x250548.On.Fj(_0x250548.Ij.ml(), _0x30c50f.tj.sj);
                  _0x250548.On.Fj(_0x250548.Ij.nl(), _0x30c50f.tj.uj);
                  _0x250548.On.Fj(_0x250548.Ij.ol(), _0x30c50f.tj.vj);
                  _0x250548.On.Fj(_0x250548.Ij.pl(), _0x30c50f.tj.xj);
                  _0x250548.On.Fj(_0x250548.Ij.ql(), _0x30c50f.tj.wj);
                } else {
                  _0x250548.On.Fj(_0x250548.Sn(), _0x30c50f.tj.sj);
                  _0x250548.On.Fj(0, _0x30c50f.tj.uj);
                  _0x250548.On.Fj(0, _0x30c50f.tj.vj);
                  _0x250548.On.Fj(0, _0x30c50f.tj.xj);
                  _0x250548.On.Fj(0, _0x30c50f.tj.wj);
                }
              });
              _0x250548.Ij.zl(function () {
                _0x51dd0d.toggle(_0x250548.Ij.Hj());
                _0x45ab96.toggle(!_0x250548.Ij.Hj());
                _0x440c5a.toggle(true);
                _0x2f0a3f.toggle(!_0x250548.Ij.Hj());
                _0x449854.toggle(true);
                _0x13b00d.toggle(_0x250548.Ij.Hj());
                _0x7309f.toggle(_0x250548.Ij.Hj());
                _0x4a9aa5.toggle(_0x250548.Ij.Hj());
                if (_0x250548.Ij.Hj()) {
                  _0x3f6398.hide();
                  _0x22c381.html(_0x250548.Ij.dl());
                  _0x488827.attr("src", _0x250548.Ij.fl());
                  _0x5167a0.html(_0x250548.Ij.il());
                  _0x105a47.width(_0x250548.Ij.kl() * 100 / _0x250548.Ij.ll() + "%");
                  _0x13ffa4.html(_0x250548.Ij.kl() + " / " + _0x250548.Ij.ll());
                  _0x2c0233.html(_0x250548.Ij.jl());
                  _0x153c0c.val(_0x250548.Ij.el());
                } else {
                  _0x3f6398.toggle(_0x28e5b7.xn && !_0x250548.Tn());
                  _0x22c381.html(_0x22c381.data("guest"));
                  _0x488827.attr("src", _0x2816c6.a.e);
                  _0x5167a0.html("10");
                  _0x105a47.width("0");
                  _0x13ffa4.html("");
                  _0x2c0233.html(1);
                  _0x153c0c.val(_0x30c50f.Vf.fg(_0x30c50f.Vf.ag));
                }
              });
              _0x250548.On.zj(function () {
                _0x30ee0b.Nn.$l(_0x250548.On.yj());
              });
            };
            _0x291a19.prototype.Gk = function () {
              _0x30c50f.kf.jn.stop();
              _0x30c50f.kf.jn.fadeOut(50);
              _0x30c50f.kf.ln.stop();
              _0x30c50f.kf.ln.fadeOut(50);
              _0x30c50f.kf.nn.stop();
              _0x30c50f.kf.nn.fadeIn(500);
              _0x30c50f.kf.pn.stop();
              _0x30c50f.kf.pn.fadeOut(50);
              _0x30c50f.kf.sn.stop();
              _0x30c50f.kf.sn.fadeOut(50);
              _0x30c50f.kf.qn.stop();
              _0x30c50f.kf.qn.fadeOut(50);
              _0x30c50f.kf.rn.stop();
              _0x30c50f.kf.rn.fadeOut(50);
              _0x30c50f.kf.tn.stop();
              _0x30c50f.kf.tn.fadeOut(50);
              _0x30c50f.kf.un_error.stop();
              _0x30c50f.kf.un_error.fadeOut(50);
              _0x30c50f.kf.mn.stop();
              _0x30c50f.kf.mn.fadeIn(1);
              _0x30c50f.kf.bgcanvas.stop();
              _0x30c50f.kf.bgcanvas.fadeIn(500);
              _0x30c50f.GameView.Kf(true);
              _0x30c50f.kf.socialButtons.stop();
              _0x30c50f.kf.socialButtons.fadeIn(500);
              _0x30c50f.kf.vn.stop();
              _0x30c50f.kf.vn.fadeIn(500);
            };
            _0x291a19.prototype.Un = function () {
              _0x54df3a.fadeIn(500);
              _0x2231a2.fadeIn(500);
              _0x1ab831.fadeIn(500);
              _0x423ee3.fadeOut(100);
            };
            _0x291a19.prototype.Vn = function () {
              _0x54df3a.fadeOut(100);
              _0x2231a2.fadeOut(100);
              _0x1ab831.fadeOut(100);
              _0x423ee3.fadeIn(500);
            };
            _0x291a19.prototype.Ln = function (_0x1fdd60, _0x3fac59) {
              if (this.Jn !== _0x1fdd60) {
                this.Jn = _0x1fdd60;
              }
              var _0x440f88 = _0x2816c6.P(Math.floor(_0x3fac59 * 100), 0, 100);
              if (this.In !== _0x440f88) {
                _0x4cf2e3.css({
                  width: _0x440f88 + "%"
                });
                _0x1f5aa8.html(_0x440f88 + " %");
              }
            };
            _0x291a19.prototype.Hk = function () {
              _0x1859a9().Ci.Ce();
              this.Nn.Kf(true);
            };
            _0x291a19.prototype.Bk = function () {
              this.Nn.Kf(false);
            };
            _0x291a19.prototype.Jf = function () {
              this.Nn.Jf();
            };
            _0x291a19.prototype.Nf = function (_0x13a8df, _0x280148) {
              this.Nn.Nf();
            };
            _0x291a19.prototype.el = function () {
              return _0x153c0c.val();
            };
            _0x291a19.prototype.Wn = function () {
              return _0x1bba74.val();
            };
            _0x291a19.prototype.Qn = function () {};
            _0x291a19.prototype.Rn = function () {
              function _0x1e1398() {
                _0x330038.Xn(true);
                setTimeout(function () {
                  _0x3f6398.hide();
                }, 3000);
              }
              var _0x330038 = _0x1859a9();
              if (_0x28e5b7.xn && !_0x330038.Tn()) {
                _0x3f6398.show();
                var _0x34a81c = _0x2816c6.H("index.game.main.menu.unlockSkins.share");
                var _0x4ff995 = encodeURIComponent(_0x2816c6.H("index.game.main.menu.unlockSkins.comeAndPlay") + " https://wormate.io/ #wormate #wormateio");
                var _0x51a272 = encodeURIComponent(_0x2816c6.H("index.game.main.menu.unlockSkins.comeAndPlay"));
                _0x3b8781.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-tw\" target=\"_blank\" href=\"http://twitter.com/intent/tweet?status=" + _0x4ff995 + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik02MCAzMzhjMzAgMTkgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOTYtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMCAwLTE0IDctMzMgMTQgLTMgMS03IDItMTAgMyAtMTMtMTMtMzAtMjItNTAtMjIgLTM4IDAtNjkgMzEtNjkgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LTMwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==\"><span>" + _0x34a81c + "</span></a>").click(_0x1e1398));
                _0x3b8781.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-fb\" target=\"_blank\" href=\"https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=" + _0x51a272 + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\"><span>" + _0x34a81c + "</span></a>").click(_0x1e1398));
              }
            };
            return _0x291a19;
          }();
          _0x30c50f.yk = function () {
            var _0x5133b6 = _0x2816c6.M(_0x30c50f.kf, function () {
              _0x30c50f.kf.call(this, _0x30c50f.Fk.wn);
            });
            _0x5133b6.prototype.ha = function () {};
            _0x5133b6.prototype.Gk = function () {
              _0x30c50f.kf.jn.stop();
              _0x30c50f.kf.jn.fadeOut(50);
              _0x30c50f.kf.ln.stop();
              _0x30c50f.kf.ln.fadeOut(50);
              _0x30c50f.kf.nn.stop();
              _0x30c50f.kf.nn.fadeOut(50);
              _0x30c50f.kf.pn.stop();
              _0x30c50f.kf.pn.fadeOut(50);
              _0x30c50f.kf.sn.stop();
              _0x30c50f.kf.sn.fadeOut(50);
              _0x30c50f.kf.qn.stop();
              _0x30c50f.kf.qn.fadeOut(50);
              _0x30c50f.kf.rn.stop();
              _0x30c50f.kf.rn.fadeOut(50);
              _0x30c50f.kf.tn.stop();
              _0x30c50f.kf.tn.fadeOut(50);
              _0x30c50f.kf.un_error.stop();
              _0x30c50f.kf.un_error.fadeOut(50);
              _0x30c50f.kf.mn.stop();
              _0x30c50f.kf.mn.fadeOut(1);
              _0x30c50f.kf.bgcanvas.stop();
              _0x30c50f.kf.bgcanvas.fadeOut(50);
              _0x30c50f.GameView.Kf(false);
              _0x30c50f.kf.socialButtons.stop();
              _0x30c50f.kf.socialButtons.fadeOut(50);
              _0x30c50f.kf.vn.stop();
              _0x30c50f.kf.vn.fadeOut(50);
            };
            return _0x5133b6;
          }();
          _0x30c50f.pk = function () {
            var _0x4f56c9 = _0x2816c6.M(_0x30c50f.kf, function () {
              _0x30c50f.kf.call(this, _0x30c50f.Fk.wn);
            });
            _0x4f56c9.prototype.ha = function () {};
            _0x4f56c9.prototype.Gk = function () {
              _0x30c50f.kf.jn.stop();
              _0x30c50f.kf.jn.fadeOut(50);
              _0x30c50f.kf.ln.stop();
              _0x30c50f.kf.ln.fadeOut(50);
              _0x30c50f.kf.nn.stop();
              _0x30c50f.kf.nn.fadeOut(50);
              _0x30c50f.kf.pn.stop();
              _0x30c50f.kf.pn.fadeOut(50);
              _0x30c50f.kf.sn.stop();
              _0x30c50f.kf.sn.fadeOut(50);
              _0x30c50f.kf.qn.stop();
              _0x30c50f.kf.qn.fadeOut(50);
              _0x30c50f.kf.rn.stop();
              _0x30c50f.kf.rn.fadeIn(500);
              _0x30c50f.kf.tn.stop();
              _0x30c50f.kf.tn.fadeOut(50);
              _0x30c50f.kf.un_error.stop();
              _0x30c50f.kf.un_error.fadeOut(50);
              _0x30c50f.kf.mn.stop();
              _0x30c50f.kf.mn.fadeIn(1);
              _0x30c50f.kf.bgcanvas.stop();
              _0x30c50f.kf.bgcanvas.fadeIn(500);
              _0x30c50f.GameView.Kf(true);
              _0x30c50f.kf.socialButtons.stop();
              _0x30c50f.kf.socialButtons.fadeOut(50);
              _0x30c50f.kf.vn.stop();
              _0x30c50f.kf.vn.fadeOut(50);
            };
            _0x4f56c9.prototype.Hk = function () {};
            return _0x4f56c9;
          }();
          _0x30c50f.rk = function () {
            var _0x2cbd35 = $("#toaster-stack");
            var _0x48951b = _0x2816c6.M(_0x30c50f.kf, function () {
              _0x30c50f.kf.call(this, _0x30c50f.Fk.wn);
              this.Yn = [];
              this.Zn = null;
            });
            _0x48951b.prototype.ha = function () {};
            _0x48951b.prototype.Gk = function () {
              _0x30c50f.kf.jn.stop();
              _0x30c50f.kf.jn.fadeOut(50);
              _0x30c50f.kf.ln.stop();
              _0x30c50f.kf.ln.fadeOut(50);
              _0x30c50f.kf.nn.stop();
              _0x30c50f.kf.nn.fadeOut(50);
              _0x30c50f.kf.pn.stop();
              _0x30c50f.kf.pn.fadeOut(50);
              _0x30c50f.kf.sn.stop();
              _0x30c50f.kf.sn.fadeIn(500);
              _0x30c50f.kf.qn.stop();
              _0x30c50f.kf.qn.fadeOut(50);
              _0x30c50f.kf.rn.stop();
              _0x30c50f.kf.rn.fadeOut(50);
              _0x30c50f.kf.tn.stop();
              _0x30c50f.kf.tn.fadeOut(50);
              _0x30c50f.kf.un_error.stop();
              _0x30c50f.kf.un_error.fadeOut(50);
              _0x30c50f.kf.mn.stop();
              _0x30c50f.kf.mn.fadeIn(1);
              _0x30c50f.kf.bgcanvas.stop();
              _0x30c50f.kf.bgcanvas.fadeIn(500);
              _0x30c50f.GameView.Kf(true);
              _0x30c50f.kf.socialButtons.stop();
              _0x30c50f.kf.socialButtons.fadeOut(50);
              _0x30c50f.kf.vn.stop();
              _0x30c50f.kf.vn.fadeIn(500);
            };
            _0x48951b.prototype.Hk = function () {
              this.$n();
            };
            _0x48951b.prototype.Kk = function () {
              return this.Zn != null || this.Yn.length > 0;
            };
            _0x48951b.prototype._n = function (_0x5aa02b) {
              this.Yn.unshift(_0x5aa02b);
              setTimeout(function () {
                _0x1859a9().og.Ik();
              }, 0);
            };
            _0x48951b.prototype.El = function (_0x2af255) {
              this.Yn.push(_0x2af255);
              setTimeout(function () {
                _0x1859a9().og.Ik();
              }, 0);
            };
            _0x48951b.prototype.$n = function () {
              var _0x4e3b34 = this;
              if (this.Zn == null) {
                if (this.Yn.length == 0) {
                  _0x1859a9().og.Dk();
                  return;
                }
                var _0x56ab4b = this.Yn.shift();
                this.Zn = _0x56ab4b;
                var _0x33ae3a = _0x56ab4b.tf();
                _0x33ae3a.hide();
                _0x33ae3a.fadeIn(300);
                _0x2cbd35.append(_0x33ae3a);
                _0x56ab4b.ao = function () {
                  _0x33ae3a.fadeOut(300);
                  setTimeout(function () {
                    _0x33ae3a.remove();
                  }, 300);
                  if (_0x4e3b34.Zn == _0x56ab4b) {
                    _0x4e3b34.Zn = null;
                  }
                  _0x4e3b34.$n();
                };
                _0x56ab4b.Hk();
              }
            };
            return _0x48951b;
          }();
          _0x30c50f.Fk = {
            wn: 0,
            Ek: 1
          };
          _0x30c50f.bo = function () {
            var _0x1d1de6 = $("#popup-menu-label");
            var _0x5f11a8 = $("#popup-menu-coins-box");
            var _0x56dbda = $("#popup-menu-coins-val");
            $("#popup-menu-back").click(function () {
              var _0x1a6033 = _0x1859a9();
              _0x1a6033.Ci.Be();
              _0x1a6033.og.Dk();
            });
            _0x5f11a8.click(function () {
              var _0x1c5650 = _0x1859a9();
              if (_0x1c5650.Ij.Hj()) {
                _0x1c5650.Ci.Be();
                _0x1c5650.og.Ak(_0x1c5650.og._j);
              }
            });
            var _0x5c9eb1 = _0x2816c6.M(_0x30c50f.kf, function (_0x39f3df, _0x594aab) {
              _0x30c50f.kf.call(this, _0x30c50f.Fk.Ek);
              this.ma = _0x39f3df;
              this.co = _0x594aab;
              this.do = [];
            });
            _0x5c9eb1.prototype.ha = function () {
              _0x5c9eb1.parent.prototype.ha.call(this);
              if (!_0x5c9eb1.eo) {
                _0x5c9eb1.eo = true;
                var _0x53f74e = _0x1859a9();
                _0x53f74e.Ij.zl(function () {
                  if (_0x53f74e.Ij.Hj()) {
                    _0x56dbda.html(_0x53f74e.Ij.il());
                  } else {
                    _0x56dbda.html("0");
                  }
                });
              }
              _0x30c50f.bo.fo.stop();
              _0x30c50f.bo.fo.fadeOut(100);
            };
            _0x5c9eb1.go = $("#coins-view");
            _0x5c9eb1.ho = $("#leaders-view");
            _0x5c9eb1.io = $("#profile-view");
            _0x5c9eb1.jo = $("#settings-view");
            _0x5c9eb1.ko = $("#login-view");
            _0x5c9eb1.lo = $("#skins-view");
            _0x5c9eb1.mo = $("#store-view");
            _0x5c9eb1.no = $("#wear-view");
            _0x5c9eb1.oo = $("#withdraw-consent-view");
            _0x5c9eb1.po = $("#delete-account-view");
            _0x5c9eb1.fo = $("#please-wait-view");
            _0x5c9eb1.prototype.Gk = function () {
              _0x30c50f.kf.jn.stop();
              _0x30c50f.kf.jn.fadeOut(200);
              _0x30c50f.kf.ln.stop();
              _0x30c50f.kf.ln.fadeOut(200);
              _0x30c50f.kf.nn.stop();
              _0x30c50f.kf.nn.fadeOut(200);
              _0x30c50f.kf.pn.stop();
              _0x30c50f.kf.pn.fadeIn(200);
              _0x30c50f.kf.sn.stop();
              _0x30c50f.kf.sn.fadeOut(200);
              _0x30c50f.kf.qn.stop();
              _0x30c50f.kf.qn.fadeOut(200);
              _0x30c50f.kf.rn.stop();
              _0x30c50f.kf.rn.fadeOut(200);
              _0x30c50f.kf.tn.stop();
              _0x30c50f.kf.tn.fadeOut(200);
              _0x30c50f.kf.un_error.stop();
              _0x30c50f.kf.un_error.fadeOut(200);
              _0x30c50f.kf.mn.stop();
              _0x30c50f.kf.mn.fadeIn(1);
              _0x30c50f.kf.bgcanvas.stop();
              _0x30c50f.kf.bgcanvas.fadeIn(500);
              _0x30c50f.GameView.Kf(true);
              _0x30c50f.kf.socialButtons.stop();
              _0x30c50f.kf.socialButtons.fadeIn(200);
              _0x30c50f.kf.vn.stop();
              _0x30c50f.kf.vn.fadeIn(200);
              _0x1d1de6.html(this.ma);
              _0x5f11a8.toggle(this.co);
              this.qo();
            };
            _0x5c9eb1.prototype.qo = function () {};
            _0x5c9eb1.prototype.ro = function (_0xa0e117) {
              var _0x36ecb = this;
              var _0x1a17a9 = _0x2816c6.V(0, 2147483647) & 2147483647;
              this.do.push(_0x1a17a9);
              _0x30c50f.bo.fo.stop();
              _0x30c50f.bo.fo.fadeIn(100);
              setTimeout(function () {
                _0x36ecb.so(_0x1a17a9);
              }, _0xa0e117);
              return new _0x4194ed(this, _0x1a17a9);
            };
            _0x5c9eb1.prototype.so = function (_0x54d8c4) {
              var _0x4affcb = this.do.indexOf(_0x54d8c4);
              if (!(_0x4affcb < 0)) {
                this.do.splice(_0x4affcb, 1);
                if (this.do.length === 0) {
                  _0x30c50f.bo.fo.stop();
                  _0x30c50f.bo.fo.fadeOut(100);
                }
              }
            };
            return _0x5c9eb1;
          }();
          var _0x4194ed = function () {
            function _0x273d19(_0x1d65fb, _0x141ca) {
              this.to = _0x1d65fb;
              this.uo = _0x141ca;
            }
            _0x273d19.prototype.vo = function () {
              this.to.so(this.uo);
            };
            return _0x273d19;
          }();
          _0x30c50f.ak = function () {
            var _0x2d4533 = $("#store-buy-coins_125000");
            var _0x448d13 = $("#store-buy-coins_50000");
            var _0x1e1e81 = $("#store-buy-coins_16000");
            var _0x27a77a = $("#store-buy-coins_7000");
            var _0x5c679f = $("#store-buy-coins_3250");
            var _0xaedfef = $("#store-buy-coins_1250");
            var _0x31475a = _0x2816c6.M(_0x30c50f.bo, function () {
              _0x30c50f.bo.call(this, _0x2816c6.H("index.game.popup.menu.coins.tab"), false);
              var _0x3a9a96 = _0x1859a9();
              var _0x10bae = this;
              _0x2d4533.click(function () {
                _0x3a9a96.Ci.Be();
                _0x10bae.wo("coins_125000");
              });
              _0x448d13.click(function () {
                _0x3a9a96.Ci.Be();
                _0x10bae.wo("coins_50000");
              });
              _0x1e1e81.click(function () {
                _0x3a9a96.Ci.Be();
                _0x10bae.wo("coins_16000");
              });
              _0x27a77a.click(function () {
                _0x3a9a96.Ci.Be();
                _0x10bae.wo("coins_7000");
              });
              _0x5c679f.click(function () {
                _0x3a9a96.Ci.Be();
                _0x10bae.wo("coins_3250");
              });
              _0xaedfef.click(function () {
                _0x3a9a96.Ci.Be();
                _0x10bae.wo("coins_1250");
              });
            });
            _0x31475a.prototype.ha = function () {
              _0x31475a.parent.prototype.ha.call(this);
            };
            _0x31475a.prototype.qo = function () {
              _0x30c50f.bo.go.stop();
              _0x30c50f.bo.go.fadeIn(200);
              _0x30c50f.bo.ho.stop();
              _0x30c50f.bo.ho.fadeOut(50);
              _0x30c50f.bo.io.stop();
              _0x30c50f.bo.io.fadeOut(50);
              _0x30c50f.bo.ko.stop();
              _0x30c50f.bo.ko.fadeOut(50);
              _0x30c50f.bo.jo.stop();
              _0x30c50f.bo.jo.fadeOut(50);
              _0x30c50f.bo.lo.stop();
              _0x30c50f.bo.lo.fadeOut(50);
              _0x30c50f.bo.mo.stop();
              _0x30c50f.bo.mo.fadeOut(50);
              _0x30c50f.bo.no.stop();
              _0x30c50f.bo.no.fadeOut(50);
              _0x30c50f.bo.oo.stop();
              _0x30c50f.bo.oo.fadeOut(50);
              _0x30c50f.bo.po.stop();
              _0x30c50f.bo.po.fadeOut(50);
            };
            _0x31475a.prototype.Hk = function () {
              _0x1859a9().Ci.Ce();
            };
            _0x31475a.prototype.wo = function (_0x1589d9) {};
            return _0x31475a;
          }();
          _0x30c50f.ck = function () {
            var _0x2a0688 = $("#highscore-table");
            var _0x42c03a = $("#leaders-button-level");
            var _0x27b719 = $("#leaders-button-highscore");
            var _0x169620 = $("#leaders-button-kills");
            var _0x5e4780 = _0x2816c6.M(_0x30c50f.bo, function () {
              _0x30c50f.bo.call(this, _0x2816c6.H("index.game.popup.menu.leaders.tab"), true);
              var _0x2bbec3 = _0x1859a9();
              var _0x34444d = this;
              this.xo = {};
              this.yo = {
                zo: {
                  Ao: _0x42c03a,
                  Bo: "byLevel"
                },
                Co: {
                  Ao: _0x27b719,
                  Bo: "byHighScore"
                },
                Do: {
                  Ao: _0x169620,
                  Bo: "byKillsAndHeadShots"
                }
              };
              _0x42c03a.click(function () {
                _0x2bbec3.Ci.Be();
                _0x34444d.Eo(_0x34444d.yo.zo);
              });
              _0x27b719.click(function () {
                _0x2bbec3.Ci.Be();
                _0x34444d.Eo(_0x34444d.yo.Co);
              });
              _0x169620.click(function () {
                _0x2bbec3.Ci.Be();
                _0x34444d.Eo(_0x34444d.yo.Do);
              });
            });
            _0x5e4780.prototype.ha = function () {
              _0x5e4780.parent.prototype.ha.call(this);
            };
            _0x5e4780.prototype.qo = function () {
              _0x30c50f.bo.go.stop();
              _0x30c50f.bo.go.fadeOut(50);
              _0x30c50f.bo.ho.stop();
              _0x30c50f.bo.ho.fadeIn(200);
              _0x30c50f.bo.io.stop();
              _0x30c50f.bo.io.fadeOut(50);
              _0x30c50f.bo.ko.stop();
              _0x30c50f.bo.ko.fadeOut(50);
              _0x30c50f.bo.jo.stop();
              _0x30c50f.bo.jo.fadeOut(50);
              _0x30c50f.bo.lo.stop();
              _0x30c50f.bo.lo.fadeOut(50);
              _0x30c50f.bo.mo.stop();
              _0x30c50f.bo.mo.fadeOut(50);
              _0x30c50f.bo.no.stop();
              _0x30c50f.bo.no.fadeOut(50);
              _0x30c50f.bo.oo.stop();
              _0x30c50f.bo.oo.fadeOut(50);
              _0x30c50f.bo.po.stop();
              _0x30c50f.bo.po.fadeOut(50);
            };
            _0x5e4780.prototype.Hk = function () {
              var _0x513033 = this;
              _0x1859a9().Ci.Ce();
              var _0x4de887 = this.ro(5000);
              var _0x59b6f2 = _0x2816c6.a.b + "/pub/leaders";
              _0x2816c6.Z(_0x59b6f2, function () {
                _0x513033.xo = {
                  byLevel: [],
                  byHighScore: [],
                  byKillsAndHeadShots: []
                };
                _0x513033.Eo(_0x513033.Fo ?? _0x513033.yo.zo);
                _0x4de887.vo();
              }, function (_0x4fef96) {
                _0x513033.xo = _0x4fef96;
                _0x513033.Eo(_0x513033.Fo ?? _0x513033.yo.zo);
                _0x4de887.vo();
              });
            };
            _0x5e4780.prototype.Eo = function (_0x3d0171) {
              this.Fo = _0x3d0171;
              for (var _0x5cc3ce in this.yo) {
                if (this.yo.hasOwnProperty(_0x5cc3ce)) {
                  var _0x20dd03 = this.yo[_0x5cc3ce];
                  _0x20dd03.Ao.removeClass("pressed");
                }
              }
              this.Fo.Ao.addClass("pressed");
              for (var _0x4f631d = this.xo[this.Fo.Bo], _0x97b559 = "", _0x57412a = 0; _0x57412a < _0x4f631d.length; _0x57412a++) {
                var _0x46d822 = _0x4f631d[_0x57412a];
                _0x97b559 += "<div class=\"table-row\"><span>" + (_0x57412a + 1) + "</span><span><img src=\"" + _0x46d822.avatarUrl + "\"/></span><span>" + _0x46d822.username + "</span><span>" + _0x46d822.level + "</span><span>" + _0x46d822.highScore + "</span><span>" + _0x46d822.headShots + " / " + _0x46d822.kills + "</span></div>";
              }
              _0x2a0688.empty();
              _0x2a0688.append(_0x97b559);
            };
            return _0x5e4780;
          }();
          _0x30c50f.gk = function () {
            var _0x3decc3 = $("#popup-login-gg");
            var _0xcc8fce = $("#popup-login-fb");
            var _0x13a57d = _0x2816c6.M(_0x30c50f.bo, function () {
              var _0x451339 = this;
              _0x30c50f.bo.call(this, _0x2816c6.H("index.game.popup.menu.login.tab"), false);
              var _0x35f648 = _0x1859a9();
              _0x3decc3.click(function () {
                _0x35f648.Ci.Be();
                var _0x2f0b58 = _0x451339.ro(10000);
                setTimeout(function () {
                  _0x35f648.Ij.Ml(function () {
                    if (_0x35f648.Ij.Hj()) {
                      _0x35f648.Ci.Fe();
                    }
                    _0x2f0b58.vo();
                  });
                }, 500);
              });
              _0xcc8fce.click(function () {
                _0x35f648.Ci.Be();
                var _0x126a23 = _0x451339.ro(10000);
                setTimeout(function () {
                  _0x35f648.Ij.Jl(function () {
                    if (_0x35f648.Ij.Hj()) {
                      _0x35f648.Ci.Fe();
                    }
                    _0x126a23.vo();
                  });
                }, 500);
              });
            });
            _0x13a57d.prototype.ha = function () {
              _0x13a57d.parent.prototype.ha.call(this);
            };
            _0x13a57d.prototype.qo = function () {
              _0x30c50f.bo.go.stop();
              _0x30c50f.bo.go.fadeOut(50);
              _0x30c50f.bo.ho.stop();
              _0x30c50f.bo.ho.fadeOut(50);
              _0x30c50f.bo.io.stop();
              _0x30c50f.bo.io.fadeOut(50);
              _0x30c50f.bo.ko.stop();
              _0x30c50f.bo.ko.fadeIn(200);
              _0x30c50f.bo.jo.stop();
              _0x30c50f.bo.jo.fadeOut(50);
              _0x30c50f.bo.lo.stop();
              _0x30c50f.bo.lo.fadeOut(50);
              _0x30c50f.bo.mo.stop();
              _0x30c50f.bo.mo.fadeOut(50);
              _0x30c50f.bo.no.stop();
              _0x30c50f.bo.no.fadeOut(50);
              _0x30c50f.bo.oo.stop();
              _0x30c50f.bo.oo.fadeOut(50);
              _0x30c50f.bo.po.stop();
              _0x30c50f.bo.po.fadeOut(50);
            };
            _0x13a57d.prototype.Hk = function () {
              _0x1859a9().Ci.Ce();
            };
            return _0x13a57d;
          }();
          _0x30c50f.ek = function () {
            var _0xfd0ac9 = $("#profile-avatar");
            var _0x28d2b4 = $("#profile-username");
            var _0x1c16ac = $("#profile-experience-bar");
            var _0x315762 = $("#profile-experience-val");
            var _0x37d429 = $("#profile-level");
            var _0x3b4663 = $("#profile-stat-highScore");
            var _0x2440e9 = $("#profile-stat-bestSurvivalTime");
            var _0x1cf14e = $("#profile-stat-kills");
            var _0x2c2b72 = $("#profile-stat-headshots");
            var _0x562e9f = $("#profile-stat-gamesPlayed");
            var _0x504e81 = $("#profile-stat-totalTimeSpent");
            var _0x25b40a = $("#profile-stat-registrationDate");
            var _0x5371ed = _0x2816c6.M(_0x30c50f.bo, function () {
              _0x30c50f.bo.call(this, _0x2816c6.H("index.game.popup.menu.profile.tab"), true);
            });
            _0x5371ed.prototype.ha = function () {
              _0x5371ed.parent.prototype.ha.call(this);
            };
            _0x5371ed.prototype.qo = function () {
              _0x30c50f.bo.go.stop();
              _0x30c50f.bo.go.fadeOut(50);
              _0x30c50f.bo.ho.stop();
              _0x30c50f.bo.ho.fadeOut(50);
              _0x30c50f.bo.io.stop();
              _0x30c50f.bo.io.fadeIn(200);
              _0x30c50f.bo.ko.stop();
              _0x30c50f.bo.ko.fadeOut(50);
              _0x30c50f.bo.jo.stop();
              _0x30c50f.bo.jo.fadeOut(50);
              _0x30c50f.bo.lo.stop();
              _0x30c50f.bo.lo.fadeOut(50);
              _0x30c50f.bo.mo.stop();
              _0x30c50f.bo.mo.fadeOut(50);
              _0x30c50f.bo.no.stop();
              _0x30c50f.bo.no.fadeOut(50);
              _0x30c50f.bo.oo.stop();
              _0x30c50f.bo.oo.fadeOut(50);
              _0x30c50f.bo.po.stop();
              _0x30c50f.bo.po.fadeOut(50);
            };
            _0x5371ed.prototype.Hk = function () {
              var _0x3da263 = _0x1859a9();
              _0x3da263.Ci.Ce();
              var _0x4b70e5 = _0x3da263.Ij.xl();
              var _0x19ab35 = moment([_0x4b70e5.year, _0x4b70e5.month - 1, _0x4b70e5.day]).format("LL");
              _0x28d2b4.html(_0x3da263.Ij.dl());
              _0xfd0ac9.attr("src", _0x3da263.Ij.fl());
              _0x1c16ac.width(_0x3da263.Ij.kl() * 100 / _0x3da263.Ij.ll() + "%");
              _0x315762.html(_0x3da263.Ij.kl() + " / " + _0x3da263.Ij.ll());
              _0x37d429.html(_0x3da263.Ij.jl());
              _0x3b4663.html(_0x3da263.Ij.rl());
              _0x2440e9.html(_0x2816c6.J(_0x3da263.Ij.sl()));
              _0x1cf14e.html(_0x3da263.Ij.tl());
              _0x2c2b72.html(_0x3da263.Ij.ul());
              _0x562e9f.html(_0x3da263.Ij.vl());
              _0x504e81.html(_0x2816c6.J(_0x3da263.Ij.wl()));
              _0x25b40a.html(_0x19ab35);
            };
            return _0x5371ed;
          }();
          _0x30c50f.hk = function () {
            var _0x306d39 = $("#settings-music-enabled-switch");
            var _0x5f1d1d = $("#settings-sfx-enabled-switch");
            var _0x356896 = $("#settings-show-names-switch");
            var _0x34ff6d = $("#popup-logout");
            var _0x554078 = $("#popup-logout-container");
            var _0x4cf467 = $("#popup-delete-account");
            var _0x3720d5 = $("#popup-delete-account-container");
            var _0xdf60e3 = $("#popup-withdraw-consent");
            var _0x5bd7e8 = _0x2816c6.M(_0x30c50f.bo, function () {
              _0x30c50f.bo.call(this, _0x2816c6.H("index.game.popup.menu.settings.tab"), false);
              var _0x35b8c4 = this;
              var _0x56f5c7 = _0x1859a9();
              _0x306d39.click(function () {
                var _0x5f15bf = !!_0x306d39.prop("checked");
                _0x30c50f.Vf.eg(_0x30c50f.Vf.Yf, _0x5f15bf, 30);
                _0x56f5c7.Ci.re(_0x5f15bf);
                _0x56f5c7.Ci.Be();
              });
              _0x5f1d1d.click(function () {
                var _0x38c2aa = !!_0x5f1d1d.prop("checked");
                _0x30c50f.Vf.eg(_0x30c50f.Vf.Zf, _0x38c2aa, 30);
                _0x56f5c7.Ci.oe(_0x38c2aa);
                _0x56f5c7.Ci.Be();
              });
              _0x356896.click(function () {
                _0x56f5c7.Ci.Be();
              });
              _0x34ff6d.click(function () {
                _0x56f5c7.Ci.Be();
                _0x35b8c4.ro(500);
                _0x56f5c7.Ij.Kl();
              });
              _0x4cf467.click(function () {
                if (_0x56f5c7.Ij.Hj()) {
                  _0x56f5c7.Ci.Be();
                  _0x56f5c7.og.Ak(_0x56f5c7.og.Zj);
                } else {
                  _0x56f5c7.Ci.Ge();
                }
              });
              _0xdf60e3.click(function () {
                if (_0x56f5c7.Go()) {
                  _0x56f5c7.Ci.Be();
                  _0x56f5c7.og.Ak(_0x56f5c7.og.Xj);
                } else {
                  _0x56f5c7.Ci.Ge();
                }
              });
            });
            _0x5bd7e8.prototype.ha = function () {
              _0x5bd7e8.parent.prototype.ha.call(this);
              var _0x47db5e = _0x1859a9();
              var _0x106b61 = undefined;
              switch (_0x30c50f.Vf.fg(_0x30c50f.Vf.Yf)) {
                case "false":
                  _0x106b61 = false;
                  break;
                default:
                  _0x106b61 = true;
              }
              _0x306d39.prop("checked", _0x106b61);
              _0x47db5e.Ci.re(_0x106b61);
              var _0x3322c7 = undefined;
              switch (_0x30c50f.Vf.fg(_0x30c50f.Vf.Zf)) {
                case "false":
                  _0x3322c7 = false;
                  break;
                default:
                  _0x3322c7 = true;
              }
              _0x5f1d1d.prop("checked", _0x3322c7);
              _0x47db5e.Ci.oe(_0x3322c7);
              var _0x5d6622 = undefined;
              switch (_0x30c50f.Vf.fg(_0x30c50f.Vf.Xf)) {
                case "false":
                  _0x5d6622 = false;
                  break;
                default:
                  _0x5d6622 = true;
              }
              _0x356896.prop("checked", _0x5d6622);
              _0x47db5e.Ij.yl(function () {
                _0x554078.toggle(_0x47db5e.Ij.Hj());
                _0x3720d5.toggle(_0x47db5e.Ij.Hj());
              });
            };
            _0x5bd7e8.prototype.qo = function () {
              _0x30c50f.bo.go.stop();
              _0x30c50f.bo.go.fadeOut(50);
              _0x30c50f.bo.ho.stop();
              _0x30c50f.bo.ho.fadeOut(50);
              _0x30c50f.bo.io.stop();
              _0x30c50f.bo.io.fadeOut(50);
              _0x30c50f.bo.ko.stop();
              _0x30c50f.bo.ko.fadeOut(50);
              _0x30c50f.bo.jo.stop();
              _0x30c50f.bo.jo.fadeIn(200);
              _0x30c50f.bo.lo.stop();
              _0x30c50f.bo.lo.fadeOut(50);
              _0x30c50f.bo.mo.stop();
              _0x30c50f.bo.mo.fadeOut(50);
              _0x30c50f.bo.no.stop();
              _0x30c50f.bo.no.fadeOut(50);
              _0x30c50f.bo.oo.stop();
              _0x30c50f.bo.oo.fadeOut(50);
              _0x30c50f.bo.po.stop();
              _0x30c50f.bo.po.fadeOut(50);
            };
            _0x5bd7e8.prototype.Hk = function () {
              var _0x153684 = _0x1859a9();
              _0x153684.Ci.Ce();
              if (_0x153684.Go()) {
                _0xdf60e3.show();
              } else {
                _0xdf60e3.hide();
              }
            };
            _0x5bd7e8.prototype.Zh = function () {
              return _0x356896.prop("checked");
            };
            return _0x5bd7e8;
          }();
          _0x30c50f.jk = function () {
            var _0x2b7ac3 = $("#store-view-canv");
            var _0x4f54ac = $("#skin-description-text");
            var _0x1127b3 = $("#skin-group-description-text");
            var _0x25cd8c = $("#store-locked-bar");
            var _0x1d59ca = $("#store-locked-bar-text");
            var _0x173866 = $("#store-buy-button");
            var _0x4430d5 = $("#store-item-price");
            var _0x20d77d = $("#store-groups");
            var _0x1db009 = $("#store-view-prev");
            var _0x4ce2f3 = $("#store-view-next");
            var _0x4217c7 = _0x2816c6.M(_0x30c50f.bo, function () {
              _0x30c50f.bo.call(this, _0x2816c6.H("index.game.popup.menu.skins.tab"), true);
              var _0xa80f19 = this;
              var _0x4acb71 = _0x1859a9();
              this.Ho = null;
              this.Io = [];
              this.Jo = {};
              this.Ko = new _0x30c50f.dm(_0x2b7ac3);
              _0x173866.click(function () {
                _0x4acb71.Ci.Be();
                _0xa80f19.Lo();
              });
              _0x1db009.click(function () {
                _0x4acb71.Ci.Be();
                _0xa80f19.Ho.Mo();
              });
              _0x4ce2f3.click(function () {
                _0x4acb71.Ci.Be();
                _0xa80f19.Ho.No();
              });
            });
            _0x4217c7.prototype.ha = function () {
              _0x4217c7.parent.prototype.ha.call(this);
              var _0x3cd5f0 = this;
              var _0x183fb3 = _0x1859a9();
              _0x183fb3.Lc.$b(function () {
                var _0x1dc17d = _0x183fb3.Lc.Xb();
                _0x3cd5f0.Io = [];
                for (var _0x383018 = 0; _0x383018 < _0x1dc17d.skinGroupArrayDict.length; _0x383018++) {
                  _0x3cd5f0.Io.push(new _0xb6124d(_0x3cd5f0, _0x1dc17d.skinGroupArrayDict[_0x383018]));
                }
                _0x3cd5f0.Jo = {};
                for (var _0x426d59 = 0; _0x426d59 < _0x1dc17d.skinArrayDict.length; _0x426d59++) {
                  var _0x162139 = _0x1dc17d.skinArrayDict[_0x426d59];
                  _0x3cd5f0.Jo[_0x162139.id] = _0x162139;
                }
                _0x3cd5f0.Oo();
              });
              this.Po(false);
              _0x183fb3.On.zj(function () {
                _0x3cd5f0.Po(false);
              });
            };
            _0x4217c7.prototype.qo = function () {
              _0x30c50f.bo.go.stop();
              _0x30c50f.bo.go.fadeOut(50);
              _0x30c50f.bo.ho.stop();
              _0x30c50f.bo.ho.fadeOut(50);
              _0x30c50f.bo.io.stop();
              _0x30c50f.bo.io.fadeOut(50);
              _0x30c50f.bo.ko.stop();
              _0x30c50f.bo.ko.fadeOut(50);
              _0x30c50f.bo.jo.stop();
              _0x30c50f.bo.jo.fadeOut(50);
              _0x30c50f.bo.lo.stop();
              _0x30c50f.bo.lo.fadeIn(200);
              _0x30c50f.bo.mo.stop();
              _0x30c50f.bo.mo.fadeOut(50);
              _0x30c50f.bo.no.stop();
              _0x30c50f.bo.no.fadeOut(50);
              _0x30c50f.bo.oo.stop();
              _0x30c50f.bo.oo.fadeOut(50);
              _0x30c50f.bo.po.stop();
              _0x30c50f.bo.po.fadeOut(50);
            };
            _0x4217c7.prototype.Hk = function () {
              _0x1859a9().Ci.pe(_0x30c50f.ge.je._e);
              _0x1859a9().Ci.Ce();
              this.Oo();
              this.Ko.Kf(true);
            };
            _0x4217c7.prototype.Bk = function () {
              this.Ko.Kf(false);
            };
            _0x4217c7.prototype.Jf = function () {
              this.Ko.Jf();
            };
            _0x4217c7.prototype.Nf = function (_0x331f1e, _0x4d89e2) {
              this.Ko.Nf();
            };
            _0x4217c7.prototype.Oo = function () {
              var _0x464449 = this;
              var _0x3cbfcc = this;
              var _0x28511d = _0x1859a9();
              _0x20d77d.empty();
              for (var _0x5ab886 = 0; _0x5ab886 < this.Io.length; _0x5ab886++) {
                (function (_0x321b73) {
                  var _0x29c8a9 = _0x464449.Io[_0x321b73];
                  var _0x39059a = document.createElement("li");
                  _0x20d77d.append(_0x39059a);
                  var _0x1d10f8 = $(_0x39059a);
                  if (_0x29c8a9.To && _0x29c8a9.To.isCustom) {
                    _0x1d10f8.css("background-color", "#FFF");
                    _0x1d10f8.css("color", "#000");
                  }
                  _0x1d10f8.html(_0x29c8a9.Qo());
                  _0x1d10f8.click(function () {
                    _0x28511d.Ci.Be();
                    _0x3cbfcc.Ro(_0x29c8a9);
                  });
                  _0x29c8a9.So = _0x1d10f8;
                })(_0x5ab886);
              }
              if (this.Io.length > 0) {
                var _0x164c6c = _0x28511d.On.rj(_0x30c50f.tj.sj);
                for (var _0x5ab886 = 0; _0x5ab886 < this.Io.length; _0x5ab886++) {
                  var _0x1457ab = this.Io[_0x5ab886];
                  for (var _0x3ab714 = _0x1457ab.To.list, _0x168419 = 0; _0x168419 < _0x3ab714.length; _0x168419++) {
                    if (_0x3ab714[_0x168419] == _0x164c6c) {
                      _0x1457ab.Uo = _0x168419;
                      this.Ro(_0x1457ab);
                      return;
                    }
                  }
                }
                this.Ro(this.Io[0]);
              }
            };
            _0x4217c7.prototype.Ro = function (_0x5f2b54) {
              var _0x1fa938 = _0x1859a9();
              if (this.Ho !== _0x5f2b54) {
                this.Ho = _0x5f2b54;
                _0x20d77d.children().removeClass("pressed");
                if (this.Ho.So) {
                  this.Ho.So.addClass("pressed");
                }
                _0x1127b3.html("");
                if (_0x5f2b54.To != null) {
                  var _0x3034a5 = _0x1fa938.Lc.Xb().textDict[_0x5f2b54.To.description];
                  if (_0x3034a5 != null) {
                    _0x1127b3.html(_0x2816c6.K(_0x2816c6.I(_0x3034a5)));
                  }
                }
                this.Po(true);
              }
            };
            _0x4217c7.prototype.Vo = function () {
              if (this.Ho == null) {
                return _0x30c50f.Si.Ui();
              } else {
                return this.Ho.Wo();
              }
            };
            _0x4217c7.prototype.Lo = function () {
              var _0x23156f = this;
              var _0x327ce2 = this.Vo();
              if (_0x327ce2.Wi()) {
                var _0x399dc6 = _0x327ce2.bc();
                _0x23156f.Xo(_0x399dc6);
              }
            };
            _0x4217c7.prototype.Xo = function (_0x1a2693) {
              var _0x18f18e = _0x1859a9();
              var _0x1fee22 = _0x18f18e.On.Gj(_0x1a2693, _0x30c50f.tj.sj);
              if (_0x1fee22 != null) {
                var _0x3a710b = _0x1fee22.Jj();
                if (!(_0x18f18e.Ij.il() < _0x3a710b)) {
                  var _0x382596 = _0x18f18e.On.rj(_0x30c50f.tj.sj);
                  var _0x30097a = _0x18f18e.On.rj(_0x30c50f.tj.uj);
                  var _0x3aaaff = _0x18f18e.On.rj(_0x30c50f.tj.vj);
                  var _0x2437ad = _0x18f18e.On.rj(_0x30c50f.tj.xj);
                  var _0x261f3a = _0x18f18e.On.rj(_0x30c50f.tj.wj);
                  var _0x271f9e = this.ro(5000);
                  _0x18f18e.Ij.Hl(_0x1a2693, _0x30c50f.tj.sj, function () {
                    _0x271f9e.vo();
                    _0x18f18e.og.Ak(_0x18f18e.og.tk);
                  }, function (_0x1526fb) {
                    _0x18f18e.Ij.Bl(function () {
                      _0x18f18e.On.Fj(_0x382596, _0x30c50f.tj.sj);
                      _0x18f18e.On.Fj(_0x30097a, _0x30c50f.tj.uj);
                      _0x18f18e.On.Fj(_0x3aaaff, _0x30c50f.tj.vj);
                      _0x18f18e.On.Fj(_0x2437ad, _0x30c50f.tj.xj);
                      _0x18f18e.On.Fj(_0x261f3a, _0x30c50f.tj.wj);
                      _0x18f18e.On.Fj(_0x1a2693, _0x30c50f.tj.sj);
                      _0x271f9e.vo();
                    });
                  });
                }
              }
            };
            _0x4217c7.prototype.Po = function (_0x2952f2) {
              var _0x2b69e0 = _0x1859a9();
              var _0x17f5f2 = _0x2b69e0.On.yj();
              var _0xdc0bba = this.Vo();
              if (_0xdc0bba.Wi()) {
                var _0xc42108 = _0xdc0bba.bc();
                var _0x6d6c4c = _0x2b69e0.On.Gj(_0xc42108, _0x30c50f.tj.sj);
                var _0x30767a = false;
                var _0x38e9a9 = _0x2b69e0.On.Cj(_0xc42108, _0x30c50f.tj.sj);
                var _0xa4275d = true;
                if (_0x38e9a9) {
                  _0x25cd8c.hide();
                  _0x173866.hide();
                } else if (_0x6d6c4c == null || _0x6d6c4c.Kj()) {
                  _0x30767a = true;
                  _0x25cd8c.show();
                  _0x173866.hide();
                  _0x1d59ca.text(_0x2816c6.H("index.game.popup.menu.store.locked"));
                  if (_0x6d6c4c != null && _0x6d6c4c.Kj()) {
                    var _0x28a244 = _0x2b69e0.Lc.Xb().textDict[_0x6d6c4c.Em()];
                    if (_0x28a244 != null) {
                      _0x1d59ca.text(_0x2816c6.I(_0x28a244));
                    }
                  }
                } else {
                  _0xa4275d = false;
                  _0x25cd8c.hide();
                  _0x173866.show();
                  _0x4430d5.html(_0x6d6c4c.Jj());
                }
                _0x4f54ac.html("");
                var _0x5b74be = _0x2b69e0.Lc.Xb().textDict[_0x6d6c4c.Fm()];
                var _0x5e1890 = _0x5b74be ? _0x2816c6.K(_0x2816c6.I(_0x5b74be)) : _0x6d6c4c.Fm();
                if (_0x6d6c4c != null && _0x6d6c4c.Fm() != null) {
                  _0x4f54ac.html(_0x5e1890);
                }
                if (_0xa4275d && _0x6d6c4c.Bm !== true) {
                  _0x6ca3ec.html(`<button onclick="mbf.mbf_cambiar_add('${_0xc42108}', '${_0x5e1890}')">Add</button>`);
                } else {
                  _0x6ca3ec.html("");
                }
                this.Ko.$l(_0x17f5f2.Um(_0xc42108));
                this.Ko.um(_0x30767a);
                if (_0x2952f2) {
                  _0x2b69e0.On.Fj(_0xc42108, _0x30c50f.tj.sj);
                }
              }
            };
            var _0xb6124d = function () {
              function _0x4ca3e8(_0x54d528, _0x1584b6) {
                this.Yo = _0x54d528;
                this.Uo = 0;
                this.To = _0x1584b6;
              }
              _0x4ca3e8.prototype.Mo = function () {
                if (--this.Uo < 0) {
                  this.Uo = this.To.list.length - 1;
                }
                this.Yo.Po(true);
              };
              _0x4ca3e8.prototype.No = function () {
                if (++this.Uo >= this.To.list.length) {
                  this.Uo = 0;
                }
                this.Yo.Po(true);
              };
              _0x4ca3e8.prototype.Qo = function () {
                if (this.To.img) {
                  var _0x520d7a = _0x1859a9().Lc.Xb().customPaths;
                  var _0x2e1adb = URL_CDN + "/images/" + _0x520d7a.texture;
                  var _0x2ba96c = [];
                  try {
                    _0x2ba96c.push(`background-image:url('${_0x2e1adb}')`);
                    _0x2ba96c.push(`background-position: -${_0x520d7a.map[this.To.img].x}px -${_0x520d7a.map[this.To.img].y}px`);
                    _0x2ba96c.push("background-repeat:no-repeat");
                    _0x2ba96c.push("width: 180px");
                    _0x2ba96c.push("height: 40px");
                  } catch (_0x4b9bf2) {
                    console.error(_0x2e1adb, _0x4b9bf2);
                  }
                  return `<div id="${this.To.id}" style="${_0x2ba96c.join(";")}"></div>`;
                }
                return _0x2816c6.I(this.To.name);
              };
              _0x4ca3e8.prototype.Wo = function () {
                if (this.Uo >= this.To.list.length) {
                  return _0x30c50f.Si.Ui();
                } else {
                  return _0x30c50f.Si.Vi(this.To.list[this.Uo]);
                }
              };
              return _0x4ca3e8;
            }();
            return _0x4217c7;
          }();
          _0x30c50f.lk = function () {
            var _0x50daf4 = $("#store-go-coins-button");
            var _0x41e515 = $("#store-go-skins-button");
            var _0x367fd7 = $("#store-go-wear-button");
            var _0x209ed2 = _0x2816c6.M(_0x30c50f.bo, function () {
              _0x30c50f.bo.call(this, _0x2816c6.H("index.game.popup.menu.store.tab"), true);
              var _0x1545bd = _0x1859a9();
              _0x50daf4.click(function () {
                _0x1545bd.Ci.Be();
                _0x1545bd.og.Ak(_0x1545bd.og._j);
              });
              _0x41e515.click(function () {
                _0x1545bd.Ci.Be();
                _0x1545bd.og.Ak(_0x1545bd.og.ik);
              });
              _0x367fd7.click(function () {
                _0x1545bd.Ci.Be();
                _0x1545bd.og.Ak(_0x1545bd.og.mk);
              });
            });
            _0x209ed2.prototype.ha = function () {
              _0x209ed2.parent.prototype.ha.call(this);
            };
            _0x209ed2.prototype.qo = function () {
              _0x30c50f.bo.go.stop();
              _0x30c50f.bo.go.fadeOut(50);
              _0x30c50f.bo.ho.stop();
              _0x30c50f.bo.ho.fadeOut(50);
              _0x30c50f.bo.io.stop();
              _0x30c50f.bo.io.fadeOut(50);
              _0x30c50f.bo.ko.stop();
              _0x30c50f.bo.ko.fadeOut(50);
              _0x30c50f.bo.jo.stop();
              _0x30c50f.bo.jo.fadeOut(50);
              _0x30c50f.bo.lo.stop();
              _0x30c50f.bo.lo.fadeOut(50);
              _0x30c50f.bo.mo.stop();
              _0x30c50f.bo.mo.fadeIn(200);
              _0x30c50f.bo.no.stop();
              _0x30c50f.bo.no.fadeOut(50);
              _0x30c50f.bo.oo.stop();
              _0x30c50f.bo.oo.fadeOut(50);
              _0x30c50f.bo.po.stop();
              _0x30c50f.bo.po.fadeOut(50);
            };
            _0x209ed2.prototype.Hk = function () {
              _0x1859a9().Ci.Ce();
            };
            return _0x209ed2;
          }();
          _0x30c50f.nk = function () {
            var _0x320db8 = $("#wear-view-canv");
            var _0xca7380 = $("#wear-description-text");
            var _0xcd1bcf = $("#wear-locked-bar");
            var _0x51a278 = $("#wear-locked-bar-text");
            var _0x571d0c = $("#wear-buy-button");
            var _0x9efb80 = $("#wear-item-price");
            var _0x1b5052 = $("#wear-eyes-button");
            var _0x19ade0 = $("#wear-mouths-button");
            var _0x213bed = $("#wear-glasses-button");
            var _0x333139 = $("#wear-hats-button");
            var _0x4e51fc = $("#wear-tint-chooser");
            var _0x3e2d72 = $("#wear-view-prev");
            var _0x529b57 = $("#wear-view-next");
            var _0x34d437 = _0x2816c6.M(_0x30c50f.bo, function () {
              var _0x2ba80f = this;
              _0x30c50f.bo.call(this, _0x2816c6.H("index.game.popup.menu.wear.tab"), true);
              var _0x19f32 = _0x1859a9();
              var _0x156001 = this;
              this.Zo = [];
              this.uj = new _0x24272a(this, _0x30c50f.tj.uj, _0x1b5052);
              this.vj = new _0x24272a(this, _0x30c50f.tj.vj, _0x19ade0);
              this.xj = new _0x24272a(this, _0x30c50f.tj.xj, _0x213bed);
              this.wj = new _0x24272a(this, _0x30c50f.tj.wj, _0x333139);
              this.$o = null;
              this._o = null;
              this.ap = null;
              this.bp = null;
              this.cp = null;
              this.dp = null;
              this.Ko = new _0x30c50f.dm(_0x320db8);
              _0x571d0c.click(function () {
                _0x19f32.Ci.Be();
                _0x156001.ep();
              });
              _0x3e2d72.click(function () {
                _0x19f32.Ci.Be();
                _0x156001.$o.fp();
              });
              _0x529b57.click(function () {
                _0x19f32.Ci.Be();
                _0x156001.$o.gp();
              });
              _0x1b5052.click(function () {
                _0x19f32.Ci.Be();
                _0x156001.hp(_0x2ba80f.uj);
              });
              _0x19ade0.click(function () {
                _0x19f32.Ci.Be();
                _0x156001.hp(_0x2ba80f.vj);
              });
              _0x213bed.click(function () {
                _0x19f32.Ci.Be();
                _0x156001.hp(_0x2ba80f.xj);
              });
              _0x333139.click(function () {
                _0x19f32.Ci.Be();
                _0x156001.hp(_0x2ba80f.wj);
              });
              this.Zo.push(this.uj);
              this.Zo.push(this.vj);
              this.Zo.push(this.xj);
              this.Zo.push(this.wj);
            });
            _0x34d437.prototype.ha = function () {
              _0x34d437.parent.prototype.ha.call(this);
              var _0x4e558b = _0x1859a9();
              var _0x22c198 = this;
              _0x4e558b.Lc.$b(function () {
                var _0x5d11e4 = _0x4e558b.Lc.Xb();
                _0x22c198._o = _0x5d11e4.eyesDict;
                _0x22c198.ap = _0x5d11e4.mouthDict;
                _0x22c198.bp = _0x5d11e4.glassesDict;
                _0x22c198.cp = _0x5d11e4.hatDict;
                _0x22c198.dp = _0x5d11e4.colorDict;
                _0x22c198.uj.ip(_0x5d11e4.eyesVariantArray);
                _0x22c198.uj.jp(_0x22c198._o);
                _0x22c198.vj.ip(_0x5d11e4.mouthVariantArray);
                _0x22c198.vj.jp(_0x22c198.ap);
                _0x22c198.xj.ip(_0x5d11e4.glassesVariantArray);
                _0x22c198.xj.jp(_0x22c198.bp);
                _0x22c198.wj.ip(_0x5d11e4.hatVariantArray);
                _0x22c198.wj.jp(_0x22c198.cp);
              });
              this.Po(false);
              _0x4e558b.On.zj(function () {
                _0x22c198.Po(false);
              });
            };
            _0x34d437.prototype.qo = function () {
              _0x30c50f.bo.go.stop();
              _0x30c50f.bo.go.fadeOut(50);
              _0x30c50f.bo.ho.stop();
              _0x30c50f.bo.ho.fadeOut(50);
              _0x30c50f.bo.io.stop();
              _0x30c50f.bo.io.fadeOut(50);
              _0x30c50f.bo.ko.stop();
              _0x30c50f.bo.ko.fadeOut(50);
              _0x30c50f.bo.jo.stop();
              _0x30c50f.bo.jo.fadeOut(50);
              _0x30c50f.bo.lo.stop();
              _0x30c50f.bo.lo.fadeOut(50);
              _0x30c50f.bo.mo.stop();
              _0x30c50f.bo.mo.fadeOut(50);
              _0x30c50f.bo.no.stop();
              _0x30c50f.bo.no.fadeIn(200);
              _0x30c50f.bo.oo.stop();
              _0x30c50f.bo.oo.fadeOut(50);
              _0x30c50f.bo.po.stop();
              _0x30c50f.bo.po.fadeOut(50);
            };
            _0x34d437.prototype.Hk = function () {
              _0x1859a9().Ci.pe(_0x30c50f.ge.je._e);
              _0x1859a9().Ci.Ce();
              this.hp(this.$o ?? this.uj);
              this.Ko.Kf(true);
            };
            _0x34d437.prototype.Bk = function () {
              this.Ko.Kf(false);
            };
            _0x34d437.prototype.Jf = function () {
              this.Ko.Jf();
            };
            _0x34d437.prototype.Nf = function (_0x3a8a92, _0x562b79) {
              this.Ko.Nf();
            };
            _0x34d437.prototype.hp = function (_0xedbdd4) {
              this.$o = _0xedbdd4;
              for (var _0x12598e = 0; _0x12598e < this.Zo.length; _0x12598e++) {
                this.Zo[_0x12598e].Ao.removeClass("pressed");
              }
              this.$o.Ao.addClass("pressed");
              this.$o.Gk();
            };
            _0x34d437.prototype.kp = function () {
              if (this.$o == null) {
                return _0x30c50f.Si.Ui();
              } else {
                return _0x30c50f.Si.Vi({
                  ae: this.$o.Wo(),
                  nd: this.$o.nd
                });
              }
            };
            _0x34d437.prototype.ep = function () {
              var _0x1c9e61 = this;
              var _0x2749ea = this.kp();
              if (_0x2749ea.Wi()) {
                var _0x7873a1 = _0x2749ea.bc();
                _0x1c9e61.lp(_0x7873a1.ae, _0x7873a1.nd);
              }
            };
            _0x34d437.prototype.lp = function (_0x9aeb92, _0x4e02c5) {
              var _0x1d1249 = _0x1859a9();
              var _0x1500aa = _0x1d1249.On.Gj(_0x9aeb92, _0x4e02c5);
              if (_0x1500aa != null) {
                var _0x5a45be = _0x1500aa.Jj();
                if (!(_0x1d1249.Ij.il() < _0x5a45be)) {
                  var _0x307c08 = _0x1d1249.On.rj(_0x30c50f.tj.sj);
                  var _0x5297c3 = _0x1d1249.On.rj(_0x30c50f.tj.uj);
                  var _0x1deab4 = _0x1d1249.On.rj(_0x30c50f.tj.vj);
                  var _0x2617d2 = _0x1d1249.On.rj(_0x30c50f.tj.xj);
                  var _0x7998ee = _0x1d1249.On.rj(_0x30c50f.tj.wj);
                  var _0x38cfea = this.ro(5000);
                  _0x1d1249.Ij.Hl(_0x9aeb92, _0x4e02c5, function () {
                    _0x38cfea.vo();
                    _0x1d1249.og.Ak(_0x1d1249.og.tk);
                  }, function (_0x23cd4d) {
                    _0x1d1249.Ij.Bl(function () {
                      _0x1d1249.On.Fj(_0x307c08, _0x30c50f.tj.sj);
                      _0x1d1249.On.Fj(_0x5297c3, _0x30c50f.tj.uj);
                      _0x1d1249.On.Fj(_0x1deab4, _0x30c50f.tj.vj);
                      _0x1d1249.On.Fj(_0x2617d2, _0x30c50f.tj.xj);
                      _0x1d1249.On.Fj(_0x7998ee, _0x30c50f.tj.wj);
                      _0x1d1249.On.Fj(_0x9aeb92, _0x4e02c5);
                      _0x38cfea.vo();
                    });
                  });
                }
              }
            };
            _0x34d437.prototype.Po = function (_0x5edf24) {
              var _0x2d2d20 = _0x1859a9();
              var _0x3ef749 = _0x2d2d20.On.yj();
              var _0x2ecc7d = this.kp();
              if (_0x2ecc7d.Wi()) {
                var _0x50c0fa = _0x2ecc7d.bc();
                var _0x2b9a07 = _0x2d2d20.On.Gj(_0x50c0fa.ae, _0x50c0fa.nd);
                var _0x2193d7 = false;
                if (_0x2d2d20.On.Cj(_0x50c0fa.ae, _0x50c0fa.nd)) {
                  _0xcd1bcf.hide();
                  _0x571d0c.hide();
                } else if (_0x2b9a07 == null || _0x2b9a07.Kj()) {
                  _0x2193d7 = true;
                  _0xcd1bcf.show();
                  _0x571d0c.hide();
                  _0x51a278.text(_0x2816c6.H("index.game.popup.menu.store.locked"));
                  if (_0x2b9a07 != null && _0x2b9a07.Kj()) {
                    var _0x3e239a = _0x2d2d20.Lc.Xb().textDict[_0x2b9a07.Em()];
                    if (_0x3e239a != null) {
                      _0x51a278.text(_0x2816c6.I(_0x3e239a));
                    }
                  }
                } else {
                  _0xcd1bcf.hide();
                  _0x571d0c.show();
                  _0x9efb80.html(_0x2b9a07.Jj());
                }
                _0xca7380.html("");
                if (_0x2b9a07 != null && _0x2b9a07.Fm() != null) {
                  var _0x285a55 = _0x2d2d20.Lc.Xb().textDict[_0x2b9a07.Fm()];
                  if (_0x285a55 != null) {
                    _0xca7380.html(_0x2816c6.K(_0x2816c6.I(_0x285a55)));
                  }
                }
                var _0x38757e = this.Ko;
                switch (_0x50c0fa.nd) {
                  case _0x30c50f.tj.uj:
                    _0x38757e.$l(_0x3ef749.Vm(_0x50c0fa.ae));
                    _0x38757e.vm(_0x2193d7);
                    break;
                  case _0x30c50f.tj.vj:
                    _0x38757e.$l(_0x3ef749.Wm(_0x50c0fa.ae));
                    _0x38757e.wm(_0x2193d7);
                    break;
                  case _0x30c50f.tj.xj:
                    _0x38757e.$l(_0x3ef749.Ym(_0x50c0fa.ae));
                    _0x38757e.ym(_0x2193d7);
                    break;
                  case _0x30c50f.tj.wj:
                    _0x38757e.$l(_0x3ef749.Xm(_0x50c0fa.ae));
                    _0x38757e.xm(_0x2193d7);
                }
                if (_0x5edf24) {
                  _0x2d2d20.On.Fj(_0x50c0fa.ae, _0x50c0fa.nd);
                }
              }
            };
            var _0x24272a = function () {
              function _0x28eb76(_0x36a8d9, _0x13a5a0, _0x4ed24b) {
                this.Yo = _0x36a8d9;
                this.nd = _0x13a5a0;
                this.Ao = _0x4ed24b;
                this.ac = {};
                this.mp = [[]];
                this.np = -10;
                this.op = -10;
              }
              _0x28eb76.prototype.ip = function (_0x490867) {
                this.mp = _0x490867;
              };
              _0x28eb76.prototype.jp = function (_0x4bcaa7) {
                this.ac = _0x4bcaa7;
              };
              _0x28eb76.prototype.Gk = function () {
                var _0x112e8c = _0x1859a9();
                var _0x3339a4 = _0x112e8c.On.rj(this.nd);
                for (var _0x21278e = 0; _0x21278e < this.mp.length; _0x21278e++) {
                  for (var _0x3dffbc = 0; _0x3dffbc < this.mp[_0x21278e].length; _0x3dffbc++) {
                    if (this.mp[_0x21278e][_0x3dffbc] == _0x3339a4) {
                      this.pp(_0x21278e);
                      this.qp(_0x3dffbc);
                      return;
                    }
                  }
                }
                this.pp(0);
                this.qp(0);
              };
              _0x28eb76.prototype.fp = function () {
                var _0x1f1bc8 = this.np - 1;
                if (_0x1f1bc8 < 0) {
                  _0x1f1bc8 = this.mp.length - 1;
                }
                this.pp(_0x1f1bc8);
                this.qp(this.op % this.mp[_0x1f1bc8].length);
              };
              _0x28eb76.prototype.gp = function () {
                var _0x48a65e = this.np + 1;
                if (_0x48a65e >= this.mp.length) {
                  _0x48a65e = 0;
                }
                this.pp(_0x48a65e);
                this.qp(this.op % this.mp[_0x48a65e].length);
              };
              _0x28eb76.prototype.pp = function (_0x1f360d) {
                var _0x75154c = this;
                if (!(_0x1f360d < 0) && !(_0x1f360d >= this.mp.length)) {
                  this.np = _0x1f360d;
                  _0x4e51fc.empty();
                  var _0x227850 = this.mp[this.np];
                  if (_0x227850.length > 1) {
                    for (var _0x39cf50 = 0; _0x39cf50 < _0x227850.length; _0x39cf50++) {
                      (function (_0x24e6e2) {
                        var _0x32f4f2 = _0x227850[_0x24e6e2];
                        var _0x15ce13 = _0x75154c.ac[_0x32f4f2];
                        var _0x1c8533 = "#" + _0x75154c.Yo.dp[_0x15ce13.prime];
                        var _0x592ba0 = $("<div style=\"border-color:" + _0x1c8533 + "\"></div>");
                        _0x592ba0.click(function () {
                          _0x1859a9().Ci.Be();
                          _0x75154c.qp(_0x24e6e2);
                        });
                        _0x4e51fc.append(_0x592ba0);
                      })(_0x39cf50);
                    }
                  }
                }
              };
              _0x28eb76.prototype.qp = function (_0x20f578) {
                if (!(_0x20f578 < 0) && !(_0x20f578 >= this.mp[this.np].length)) {
                  this.op = _0x20f578;
                  _0x4e51fc.children().css("background-color", "transparent");
                  var _0x1d5503 = _0x4e51fc.children(":nth-child(" + (1 + _0x20f578) + ")");
                  _0x1d5503.css("background-color", _0x1d5503.css("border-color"));
                  this.Yo.Po(true);
                }
              };
              _0x28eb76.prototype.Wo = function () {
                return this.mp[this.np][this.op];
              };
              return _0x28eb76;
            }();
            return _0x34d437;
          }();
          _0x30c50f.Yj = function () {
            var _0x44ce15 = $("#withdraw-consent-yes");
            var _0x4ba924 = $("#withdraw-consent-no");
            var _0x4010dd = _0x2816c6.M(_0x30c50f.bo, function () {
              _0x30c50f.bo.call(this, _0x2816c6.H("index.game.popup.menu.consent.tab"), false);
              var _0x25d87b = _0x1859a9();
              _0x44ce15.click(function () {
                _0x25d87b.Ci.Be();
                if (_0x25d87b.Go()) {
                  _0x25d87b.og.Ak(_0x25d87b.og._e);
                  _0x25d87b.rp(false, true);
                  _0x25d87b.og.qk._n(new _0x30c50f.sp());
                } else {
                  _0x25d87b.og.Dk();
                }
              });
              _0x4ba924.click(function () {
                _0x25d87b.Ci.Be();
                _0x25d87b.og.Dk();
              });
            });
            _0x4010dd.prototype.ha = function () {
              _0x4010dd.parent.prototype.ha.call(this);
            };
            _0x4010dd.prototype.qo = function () {
              _0x30c50f.bo.go.stop();
              _0x30c50f.bo.go.fadeOut(50);
              _0x30c50f.bo.ho.stop();
              _0x30c50f.bo.ho.fadeOut(50);
              _0x30c50f.bo.io.stop();
              _0x30c50f.bo.io.fadeOut(50);
              _0x30c50f.bo.ko.stop();
              _0x30c50f.bo.ko.fadeOut(50);
              _0x30c50f.bo.jo.stop();
              _0x30c50f.bo.jo.fadeOut(50);
              _0x30c50f.bo.lo.stop();
              _0x30c50f.bo.lo.fadeOut(50);
              _0x30c50f.bo.mo.stop();
              _0x30c50f.bo.mo.fadeOut(50);
              _0x30c50f.bo.no.stop();
              _0x30c50f.bo.no.fadeOut(50);
              _0x30c50f.bo.oo.stop();
              _0x30c50f.bo.oo.fadeIn(200);
              _0x30c50f.bo.po.stop();
              _0x30c50f.bo.po.fadeOut(50);
            };
            _0x4010dd.prototype.Hk = function () {
              _0x1859a9().Ci.Ce();
            };
            return _0x4010dd;
          }();
          _0x30c50f.$j = function () {
            var _0xf37991 = $("#delete-account-timer");
            var _0x536cbc = $("#delete-account-yes");
            var _0x4251fb = $("#delete-account-no");
            var _0x580962 = _0x2816c6.M(_0x30c50f.bo, function () {
              _0x30c50f.bo.call(this, _0x2816c6.H("index.game.popup.menu.delete.tab"), false);
              var _0x376a12 = _0x1859a9();
              _0x536cbc.click(function () {
                _0x376a12.Ci.Be();
                if (_0x376a12.Ij.Hj()) {
                  _0x376a12.Ij.Sl();
                  _0x376a12.Ij.Kl();
                } else {
                  _0x376a12.og.Dk();
                }
              });
              _0x4251fb.click(function () {
                _0x376a12.Ci.Be();
                _0x376a12.og.Dk();
              });
              this.tp = [];
            });
            _0x580962.prototype.ha = function () {
              _0x580962.parent.prototype.ha.call(this);
            };
            _0x580962.prototype.qo = function () {
              _0x30c50f.bo.go.stop();
              _0x30c50f.bo.go.fadeOut(50);
              _0x30c50f.bo.ho.stop();
              _0x30c50f.bo.ho.fadeOut(50);
              _0x30c50f.bo.io.stop();
              _0x30c50f.bo.io.fadeOut(50);
              _0x30c50f.bo.ko.stop();
              _0x30c50f.bo.ko.fadeOut(50);
              _0x30c50f.bo.jo.stop();
              _0x30c50f.bo.jo.fadeOut(50);
              _0x30c50f.bo.lo.stop();
              _0x30c50f.bo.lo.fadeOut(50);
              _0x30c50f.bo.mo.stop();
              _0x30c50f.bo.mo.fadeOut(50);
              _0x30c50f.bo.no.stop();
              _0x30c50f.bo.no.fadeOut(50);
              _0x30c50f.bo.oo.stop();
              _0x30c50f.bo.oo.fadeOut(50);
              _0x30c50f.bo.po.stop();
              _0x30c50f.bo.po.fadeIn(200);
            };
            _0x580962.prototype.Hk = function () {
              _0x1859a9().Ci.Ge();
              _0x536cbc.stop();
              _0x536cbc.hide();
              _0xf37991.stop();
              _0xf37991.show();
              _0xf37991.text(".. 10 ..");
              this.up();
              this.vp(function () {
                _0xf37991.text(".. 9 ..");
              }, 1000);
              this.vp(function () {
                _0xf37991.text(".. 8 ..");
              }, 2000);
              this.vp(function () {
                _0xf37991.text(".. 7 ..");
              }, 3000);
              this.vp(function () {
                _0xf37991.text(".. 6 ..");
              }, 4000);
              this.vp(function () {
                _0xf37991.text(".. 5 ..");
              }, 5000);
              this.vp(function () {
                _0xf37991.text(".. 4 ..");
              }, 6000);
              this.vp(function () {
                _0xf37991.text(".. 3 ..");
              }, 7000);
              this.vp(function () {
                _0xf37991.text(".. 2 ..");
              }, 8000);
              this.vp(function () {
                _0xf37991.text(".. 1 ..");
              }, 9000);
              this.vp(function () {
                _0xf37991.hide();
                _0x536cbc.fadeIn(300);
              }, 10000);
            };
            _0x580962.prototype.vp = function (_0x2b13cc, _0x6350f9) {
              var _0x3cb48f = setTimeout(_0x2b13cc, _0x6350f9);
              this.tp.push(_0x3cb48f);
            };
            _0x580962.prototype.up = function () {
              for (var _0x1f17d7 = 0; _0x1f17d7 < this.tp.length; _0x1f17d7++) {
                clearTimeout(this.tp[_0x1f17d7]);
              }
              this.tp = [];
            };
            return _0x580962;
          }();
          _0x30c50f.wp = function () {
            function _0x18726b() {
              this.ao = function () {};
            }
            _0x18726b.prototype.tf = function () {};
            _0x18726b.prototype.Hk = function () {};
            return _0x18726b;
          }();
          _0x30c50f.Gl = function () {
            var _0x1cde0d = _0x2816c6.M(_0x30c50f.wp, function (_0x2316fc) {
              _0x30c50f.wp.call(this);
              var _0x3b0d7f = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
              this.xp = $("<div id=\"" + _0x3b0d7f + "\" class=\"toaster toaster-coins\">    <img class=\"toaster-coins-img\" alt=\"Wormate Coin\" src=\"/images/coin_320.png\" />    <div class=\"toaster-coins-val\">+" + _0x2316fc + "</div>    <div class=\"toaster-coins-close\">" + _0x2816c6.H("index.game.toaster.continue") + "</div></div>");
              var _0x5f417c = this;
              this.xp.find(".toaster-coins-close").click(function () {
                _0x1859a9().Ci.Be();
                _0x5f417c.ao();
              });
            });
            _0x1cde0d.prototype.tf = function () {
              return this.xp;
            };
            _0x1cde0d.prototype.Hk = function () {
              _0x1859a9().Ci.Ee();
            };
            return _0x1cde0d;
          }();
          _0x30c50f.Fl = function () {
            var _0x26ef57 = _0x2816c6.M(_0x30c50f.wp, function (_0x4288bd) {
              _0x30c50f.wp.call(this);
              var _0x2ac561 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
              this.xp = $("<div id=\"" + _0x2ac561 + "\" class=\"toaster toaster-levelup\">    <img class=\"toaster-levelup-img\" alt=\"Wormate Level Up Star\" src=\"/images/level-star.svg\" />    <div class=\"toaster-levelup-val\">" + _0x4288bd + "</div>    <div class=\"toaster-levelup-text\">" + _0x2816c6.H("index.game.toaster.levelup") + "</div>    <div class=\"toaster-levelup-close\">" + _0x2816c6.H("index.game.toaster.continue") + "</div></div>");
              var _0x828814 = this;
              this.xp.find(".toaster-levelup-close").click(function () {
                _0x1859a9().Ci.Be();
                _0x828814.ao();
              });
            });
            _0x26ef57.prototype.tf = function () {
              return this.xp;
            };
            _0x26ef57.prototype.Hk = function () {
              _0x1859a9().Ci.De();
            };
            return _0x26ef57;
          }();
          _0x30c50f.sp = function () {
            var _0x5c4a64 = _0x2816c6.M(_0x30c50f.wp, function () {
              _0x30c50f.wp.call(this);
              var _0x311c87 = this;
              var _0x3d395b = _0x1859a9();
              var _0x381f87 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
              this.xp = $("<div id=\"" + _0x381f87 + "\" class=\"toaster toaster-consent-accepted\">    <img class=\"toaster-consent-accepted-logo\" src=\"" + _0x2816c6.a.d + "\" alt=\"Wormate.io logo\"/>    <div class=\"toaster-consent-accepted-container\">        <span class=\"toaster-consent-accepted-text\">" + _0x2816c6.H("index.game.toaster.consent.text").replaceAll(" ", "&nbsp;").replaceAll("\n", "<br/>") + "</span>        <a class=\"toaster-consent-accepted-link\" href=\"/privacy-policy\">" + _0x2816c6.H("index.game.toaster.consent.link") + "</a>    </div>    <div class=\"toaster-consent-close\">" + _0x2816c6.H("index.game.toaster.consent.iAccept") + "</div></div>");
              this.yp = this.xp.find(".toaster-consent-close");
              this.yp.hide();
              this.yp.click(function () {
                _0x3d395b.Ci.Be();
                if (_0x3d395b.Go()) {
                  _0x3d395b.rp(true, true);
                }
                _0x311c87.ao();
              });
            });
            _0x5c4a64.prototype.tf = function () {
              return this.xp;
            };
            _0x5c4a64.prototype.Hk = function () {
              var _0x215dfe = this;
              var _0x484ada = _0x1859a9();
              if (_0x484ada.Go() && !_0x484ada.hl()) {
                _0x484ada.Ci.Ge();
                setTimeout(function () {
                  _0x215dfe.yp.fadeIn(300);
                }, 2000);
              } else {
                setTimeout(function () {
                  _0x215dfe.ao();
                }, 0);
              }
            };
            return _0x5c4a64;
          }();
          _0x30c50f.uk = function () {
            var _0xb1b1cc = $("#error-gateway-connection-retry");
            var _0xd57d16 = _0x2816c6.M(_0x30c50f.kf, function () {
              _0x30c50f.kf.call(this, _0x30c50f.Fk.wn);
              var _0xb23494 = _0x1859a9();
              _0xb1b1cc.click(function () {
                _0xb23494.Ci.Be();
                _0xb23494.og.ie.Mn();
                _0xb23494.og.Ak(_0xb23494.og.ie);
                setTimeout(function () {
                  var _0x37920c = _0x2816c6.a.b + "/pub/healthCheck/ping";
                  _0x2816c6.Z(_0x37920c, function () {
                    _0xb23494.og.Ak(_0xb23494.og.tk);
                  }, function (_0x29f9b4) {
                    _0xb23494.og.ie.Kn();
                    _0xb23494.Lc.Ib(function () {
                      _0xb23494.og.Ak(_0xb23494.og._e);
                    }, function (_0x4354a8) {
                      _0xb23494.og.Ak(_0xb23494.og.tk);
                    }, function (_0x55adff, _0xc9aceb) {
                      var _0xfa7f57 = _0x55adff;
                      _0xb23494.og.ie.Ln(_0xfa7f57, _0xc9aceb);
                    });
                  });
                }, 2000);
              });
            });
            _0xd57d16.prototype.ha = function () {};
            _0xd57d16.prototype.Gk = function () {
              _0x30c50f.kf.jn.stop();
              _0x30c50f.kf.jn.fadeOut(50);
              _0x30c50f.kf.ln.stop();
              _0x30c50f.kf.ln.fadeOut(50);
              _0x30c50f.kf.nn.stop();
              _0x30c50f.kf.nn.fadeOut(50);
              _0x30c50f.kf.pn.stop();
              _0x30c50f.kf.pn.fadeOut(50);
              _0x30c50f.kf.sn.stop();
              _0x30c50f.kf.sn.fadeOut(50);
              _0x30c50f.kf.qn.stop();
              _0x30c50f.kf.qn.fadeOut(50);
              _0x30c50f.kf.rn.stop();
              _0x30c50f.kf.rn.fadeOut(50);
              _0x30c50f.kf.tn.stop();
              _0x30c50f.kf.tn.fadeIn(500);
              _0x30c50f.kf.un_error.stop();
              _0x30c50f.kf.un_error.fadeOut(50);
              _0x30c50f.kf.mn.stop();
              _0x30c50f.kf.mn.fadeIn(1);
              _0x30c50f.kf.bgcanvas.stop();
              _0x30c50f.kf.bgcanvas.fadeIn(500);
              _0x30c50f.GameView.Kf(true);
              _0x30c50f.kf.socialButtons.stop();
              _0x30c50f.kf.socialButtons.fadeOut(50);
              _0x30c50f.kf.vn.stop();
              _0x30c50f.kf.vn.fadeOut(50);
            };
            _0xd57d16.prototype.Hk = function () {
              var _0xcf22b4 = _0x1859a9();
              _0xcf22b4.Ci.pe(_0x30c50f.ge.je._e);
              _0xcf22b4.Ci.Ge();
            };
            return _0xd57d16;
          }();
          _0x30c50f.wk = function () {
            var _0x2483c6 = $("#error-game-connection-retry");
            var _0x17e833 = _0x2816c6.M(_0x30c50f.kf, function () {
              _0x30c50f.kf.call(this, _0x30c50f.Fk.wn);
              var _0x3f0c00 = _0x1859a9();
              _0x2483c6.click(function () {
                _0x3f0c00.Ci.Be();
                _0x3f0c00.og.Ak(_0x3f0c00.og._e);
              });
            });
            _0x17e833.prototype.ha = function () {};
            _0x17e833.prototype.Gk = function () {
              _0x30c50f.kf.jn.stop();
              _0x30c50f.kf.jn.fadeOut(50);
              _0x30c50f.kf.ln.stop();
              _0x30c50f.kf.ln.fadeOut(50);
              _0x30c50f.kf.nn.stop();
              _0x30c50f.kf.nn.fadeOut(50);
              _0x30c50f.kf.pn.stop();
              _0x30c50f.kf.pn.fadeOut(50);
              _0x30c50f.kf.sn.stop();
              _0x30c50f.kf.sn.fadeOut(50);
              _0x30c50f.kf.qn.stop();
              _0x30c50f.kf.qn.fadeOut(50);
              _0x30c50f.kf.rn.stop();
              _0x30c50f.kf.rn.fadeOut(50);
              _0x30c50f.kf.tn.stop();
              _0x30c50f.kf.tn.fadeOut(50);
              _0x30c50f.kf.un_error.stop();
              _0x30c50f.kf.un_error.fadeIn(500);
              _0x30c50f.kf.mn.stop();
              _0x30c50f.kf.mn.fadeIn(1);
              _0x30c50f.kf.bgcanvas.stop();
              _0x30c50f.kf.bgcanvas.fadeIn(500);
              _0x30c50f.GameView.Kf(true);
              _0x30c50f.kf.socialButtons.stop();
              _0x30c50f.kf.socialButtons.fadeOut(50);
              _0x30c50f.kf.vn.stop();
              _0x30c50f.kf.vn.fadeOut(50);
            };
            _0x17e833.prototype.Hk = function () {
              var _0x4ec8b3 = _0x1859a9();
              _0x4ec8b3.Ci.pe(_0x30c50f.ge.je._e);
              _0x4ec8b3.Ci.Ge();
            };
            return _0x17e833;
          }();
          _0x2816c6.zp = function () {
            function _0x21d992(_0x17f0fe) {
              var _0x5b9427 = _0x17f0fe + Math.floor(Math.random() * 65535) * 37;
              _0x30c50f.Vf.eg(_0x30c50f.Vf.cg, _0x5b9427, 30);
            }
            function _0x24f9dd() {
              return parseInt(_0x30c50f.Vf.fg(_0x30c50f.Vf.cg)) % 37;
            }
            return function () {
              var _0x483c78 = _0x24f9dd();
              if (!(_0x483c78 >= 0) || !(_0x483c78 < _0x28e5b7.Ap)) {
                _0x483c78 = Math.max(0, _0x28e5b7.Ap - 2);
              }
              var _0x532dc1 = {
                zn: _0x28e5b7,
                Bp: false
              };
              _0x532dc1.Cp = Date.now();
              _0x532dc1.Dp = 0;
              _0x532dc1.Ep = 0;
              _0x532dc1.Fp = null;
              _0x532dc1.Gp = _0x2816c6.a.j;
              _0x532dc1.Hp = _0x2816c6.a.i;
              _0x532dc1.dh = null;
              _0x532dc1.Lc = null;
              _0x532dc1.xe = null;
              _0x532dc1.Ci = null;
              _0x532dc1.og = null;
              _0x532dc1.On = null;
              _0x532dc1.Ij = null;
              try {
                if (navigator && navigator.geolocation) {
                  navigator.geolocation.getCurrentPosition(function (_0x5dc580) {
                    if (_0x5dc580.coords !== undefined) {
                      var _0x51c1b9 = _0x5dc580.coords;
                      if (_0x51c1b9.latitude !== undefined && _0x51c1b9.longitude !== undefined) {
                        _0x532dc1.Fp = _0x5dc580;
                      }
                    }
                  }, function (_0x58fba6) {});
                }
              } catch (_0x2cd251) {}
              _0x532dc1.Ip = function () {
                _0x532dc1.dh = new _0x30c50f.Engine();
                _0x532dc1.dh.Kp = new _0x30c50f.MessageProcessor(_0x532dc1.dh);
                _0x532dc1.Lc = new _0x30c50f._a();
                _0x532dc1.xe = new _0x30c50f.Qj();
                _0x532dc1.Ci = new _0x30c50f.ge();
                _0x532dc1.og = new _0x30c50f.Tj();
                _0x532dc1.On = new _0x30c50f.kj();
                _0x532dc1.Ij = new _0x30c50f.Mk();
                _0x532dc1.ha();
              };
              _0x532dc1.ha = function () {
                try {
                  ga("send", "event", "app", window.runtimeHash + "_init");
                } catch (_0x4522b3) {}
                _0x532dc1.dh.Lp = function () {
                  _0x532dc1.og.Ak(_0x532dc1.og.vk);
                };
                _0x532dc1.dh.Mp = function () {
                  var _0x33303c = _0x532dc1.og._e.Wn();
                  try {
                    ga("send", "event", "game", window.runtimeHash + "_start", _0x33303c);
                  } catch (_0x1c5ce2) {}
                  _0x532dc1.Ci.pe(_0x30c50f.ge.je.af);
                  _0x532dc1.og.Ak(_0x532dc1.og.af.Dn());
                };
                _0x532dc1.dh.Np = function () {
                  try {
                    ga("send", "event", "game", window.runtimeHash + "_end");
                  } catch (_0x2ec8c6) {}
                  if ($("body").height() >= 430) {
                    _0x532dc1.zn.Op.ka();
                  }
                  _0x532dc1.Lc.Ib(null, null, null);
                  (function () {
                    var _0x5b71c8 = Math.floor(_0x532dc1.dh.ch.Bh);
                    var _0x52b2d0 = _0x532dc1.dh.Ih;
                    if (_0x532dc1.Ij.Hj()) {
                      _0x532dc1.Ij.Bl(function () {
                        _0x532dc1.Pp(_0x5b71c8, _0x52b2d0);
                      });
                    } else {
                      _0x532dc1.Pp(_0x5b71c8, _0x52b2d0);
                    }
                  })();
                };
                _0x532dc1.dh.Qp = function (_0x337981) {
                  _0x337981(_0x532dc1.og.af.Gn(), _0x532dc1.og.af.Hn());
                };
                _0x532dc1.Ij.yl(function () {
                  var _0xe32b68 = _0x532dc1.og.Lk();
                  if (_0xe32b68 != null && _0xe32b68.nd === _0x30c50f.Fk.Ek) {
                    _0x532dc1.Ci.pe(_0x30c50f.ge.je._e);
                    _0x532dc1.og.Ak(_0x532dc1.og._e);
                  }
                  if (_0x532dc1.Ij.Hj()) {
                    try {
                      var _0x37b711 = _0x532dc1.Ij.cl();
                      ga("set", "userId", _0x37b711);
                    } catch (_0x2aaa8d) {}
                  }
                  if (_0x532dc1.Go() && _0x532dc1.Ij.Hj() && !_0x532dc1.Ij.hl()) {
                    _0x532dc1.rp(false, false);
                    _0x532dc1.og.qk._n(new _0x30c50f.sp());
                  } else {
                    _0x532dc1.Rp(true);
                  }
                });
                _0x532dc1.dh.run();
                _0x532dc1.og.ha();
                _0x532dc1.On.ha();
                _0x532dc1.Lc.ha();
                _0x532dc1.og._e.Vn();
                _0x532dc1.og.Ak(_0x532dc1.og._e);
                _0x532dc1.xe.ha(function () {
                  _0x532dc1.Ci.ha();
                  _0x532dc1.Ij.ha();
                  _0x532dc1.Lc.Ib(function () {
                    _0x532dc1.og._e.Un();
                    _0x532dc1.og.Ak(_0x532dc1.og._e);
                  }, function (_0x17ccd0) {
                    _0x532dc1.og._e.Un();
                    _0x532dc1.og.Ak(_0x532dc1.og.tk);
                  }, function (_0x59f9da, _0x454b8e) {
                    var _0x2fb1c0 = _0x59f9da;
                    _0x532dc1.og.ie.Ln(_0x2fb1c0, _0x454b8e);
                    _0x532dc1.og._e.Ln(_0x2fb1c0, _0x454b8e);
                  });
                  if (_0x532dc1.Go() && !_0x532dc1.hl()) {
                    _0x532dc1.og.qk._n(new _0x30c50f.sp());
                  } else {
                    _0x532dc1.Rp(true);
                  }
                });
              };
              _0x532dc1.Sp = function (_0x2b3d25) {
                if (_0x532dc1.Ij.Hj()) {
                  var _0x2afb00 = _0x532dc1.Ij.Al();
                  var _0xbaee91 = _0x2816c6.a.b + "/pub/wuid/" + _0x2afb00 + "/consent/change?value=" + encodeURI(_0x2b3d25);
                  _0x2816c6.Z(_0xbaee91, function () {}, function (_0x467934) {});
                }
              };
              _0x532dc1.Pn = function (_0xae5710) {
                _0x483c78++;
                if (!_0x532dc1.zn.Tp && _0x483c78 >= _0x532dc1.zn.Ap) {
                  _0x532dc1.og.Ak(_0x532dc1.og.xk);
                  _0x532dc1.Ci.pe(_0x30c50f.ge.je.cf);
                  _0x532dc1.zn.Up.ia();
                } else {
                  _0x21d992(_0x483c78);
                  _0x532dc1.Vp(_0xae5710);
                }
              };
              _0x532dc1.Vp = function (_0x3a4418) {
                if (_0x532dc1.dh.Wp()) {
                  _0x532dc1.og.ie.Mn();
                  _0x532dc1.og.Ak(_0x532dc1.og.ie);
                  var _0x339ae3 = _0x532dc1.og._e.Wn();
                  _0x30c50f.Vf.eg(_0x30c50f.Vf._f, _0x339ae3, 30);
                  var _0x325c6c = _0x532dc1.og.$h.Zh();
                  _0x30c50f.Vf.eg(_0x30c50f.Vf.Xf, _0x325c6c, 30);
                  var _0x597628 = 0;
                  if (_0x532dc1.Fp != null) {
                    var _0x260923 = _0x532dc1.Fp.coords.latitude;
                    var _0x17c7b2 = _0x532dc1.Fp.coords.longitude;
                    _0x597628 = Math.max(0, Math.min(32767, (_0x260923 + 90) / 180 * 32768)) << 1 | 1 | Math.max(0, Math.min(65535, (_0x17c7b2 + 180) / 360 * 65536)) << 16;
                  }
                  if (_0x532dc1.Ij.Hj()) {
                    _0x532dc1.Xp(_0x339ae3, _0x597628, _0x3a4418);
                  } else {
                    var _0x8297f6 = _0x532dc1.og._e.el();
                    _0x30c50f.Vf.eg(_0x30c50f.Vf.ag, _0x8297f6, 30);
                    var _0x236279 = _0x532dc1.On.rj(_0x30c50f.tj.sj);
                    _0x30c50f.Vf.eg(_0x30c50f.Vf.bg, _0x236279, 30);
                    _0x532dc1.Yp(_0x339ae3, _0x597628);
                  }
                }
              };
              _0x532dc1.Xp = function (_0x12dae2, _0x50b59a, _0x1a7b1a) {
                var _0x426bd7 = _0x532dc1;
                var _0x1c667f = _0x532dc1.Ij.Al();
                var _0x136886 = _0x532dc1.og._e.el();
                var _0x23ff3b = _0x532dc1.On.rj(_0x30c50f.tj.sj);
                var _0x2e1e78 = _0x532dc1.On.rj(_0x30c50f.tj.uj);
                var _0x31ce41 = _0x532dc1.On.rj(_0x30c50f.tj.vj);
                var _0x28c085 = _0x532dc1.On.rj(_0x30c50f.tj.xj);
                var _0x5248b9 = _0x532dc1.On.rj(_0x30c50f.tj.wj);
                var _0x55d9da = (_0x4605ac ? URL_CDN : _0x2816c6.a.b) + "/pub/wuid/" + _0x1c667f + "/start?gameMode=" + encodeURI(_0x12dae2) + "&gh=" + _0x50b59a + "&nickname=" + _0x3ca652.Xp(_0x1c667f, _0x136886, _0x23ff3b, _0x2e1e78, _0x31ce41, _0x28c085, _0x5248b9) + "&skinId=" + encodeURI(_wwc.validInput(_0x23ff3b || 0)) + "&eyesId=" + encodeURI(_wwc.validInputWear(_0x2e1e78)) + "&mouthId=" + encodeURI(_wwc.validInputWear(_0x31ce41)) + "&glassesId=" + encodeURI(_wwc.validInputWear(_0x28c085)) + "&hatId=" + encodeURI(_wwc.validInputWear(_0x5248b9));
                _0x2816c6.Z(_0x55d9da, function () {
                  _0x426bd7.og.Ak(_0x426bd7.og.tk);
                }, function (_0x216e25) {
                  if (_0x216e25.code === 1460) {
                    _0x426bd7.og.Ak(_0x426bd7.og.ok);
                    try {
                      ga("send", "event", "restricted", window.runtimeHash + "_tick");
                    } catch (_0x391498) {}
                  } else if (false) {} else {
                    if (!_0x216e25.server_url) {
                      _0x4bb95a.dh.Cq();
                      return;
                    }
                    var _0x5a38c4 = _0x216e25.server_url;
                    _0x426bd7.dh.Zp(_0x5a38c4, _0x1c667f, _0x1a7b1a);
                  }
                });
              };
              _0x532dc1.Yp = function (_0xa60a57, _0x12a8be) {
                var _0x289041 = _0x532dc1;
                var _0x472f2c = _0x532dc1.og._e.el();
                var _0x15f9fc = _0x532dc1.On.rj(_0x30c50f.tj.sj);
                var _0x5dfe08 = _0x2816c6.a.b + "/pub/wuid/guest/start?gameMode=" + encodeURI(_0xa60a57) + "&gh=" + _0x12a8be + "&nickname=" + encodeURI(_0x472f2c) + "&skinId=" + encodeURI(_0x15f9fc);
                _0x2816c6.Z(_0x5dfe08, function () {
                  _0x289041.og.Ak(_0x289041.og.tk);
                }, function (_0x644a60) {
                  if (_0x644a60.code === 1460) {
                    _0x289041.og.Ak(_0x289041.og.ok);
                    try {
                      ga("send", "event", "restricted", window.runtimeHash + "_tick");
                    } catch (_0x49d36f) {}
                  } else if (_0x644a60.code !== 1200) {
                    _0x289041.og.Ak(_0x289041.og.tk);
                  } else {
                    var _0x1e1b4b = _0x644a60.server_url;
                    _0x289041.dh.$p(_0x1e1b4b, _0x472f2c, _0x15f9fc);
                  }
                });
              };
              _0x532dc1.Pp = function (_0x5b4d94, _0x4cd412) {
                var _0x51c26f = _0x532dc1.og._e.el();
                _0x532dc1.og.af.Fn(_0x5b4d94, _0x4cd412, _0x51c26f);
                _0x532dc1.Ci.pe(_0x30c50f.ge.je.bf);
                _0x532dc1.og.Ak(_0x532dc1.og.af.En());
              };
              _0x532dc1.Sn = function () {
                if (!_0x532dc1.Tn()) {
                  return _0x532dc1.On.Bj();
                }
                var _0x2e5995 = parseInt(_0x30c50f.Vf.fg(_0x30c50f.Vf.bg));
                if (_0x2e5995 != null && _0x532dc1.On.Cj(_0x2e5995, _0x30c50f.tj.sj)) {
                  return _0x2e5995;
                } else {
                  return _0x532dc1.On.Bj();
                }
              };
              _0x532dc1.Xn = function (_0x388e57) {
                _0x30c50f.Vf.eg(_0x30c50f.Vf.dg, _0x388e57 ? "true" : "false", 1800);
              };
              _0x532dc1.Tn = function () {
                return _0x30c50f.Vf.fg(_0x30c50f.Vf.dg) === "true";
              };
              _0x532dc1.Rp = function (_0x111b25) {
                if (_0x111b25 !== _0x532dc1.Bp) {
                  _0x532dc1.Bp = _0x111b25;
                  var _0x3ca49a = _0x3ca49a || {};
                  _0x3ca49a.consented = _0x111b25;
                  _0x3ca49a.gdprConsent = _0x111b25;
                  _0x532dc1.zn.yn.ha();
                  _0x532dc1.zn.Op.ha();
                  _0x532dc1.zn.Up.ha(function (_0x3eebba) {
                    if (_0x3eebba) {
                      _0x21d992(_0x483c78 = 0);
                    }
                    _0x532dc1.Vp();
                  });
                }
              };
              _0x532dc1.rp = function (_0xd8f816, _0x23bbad) {
                _0x30c50f.Vf.eg(_0x30c50f.Vf.Wf, _0xd8f816 ? "true" : "false");
                if (_0x23bbad) {
                  _0x532dc1.Sp(_0xd8f816);
                }
                _0x532dc1.Rp(_0xd8f816);
              };
              _0x532dc1.hl = function () {
                switch (_0x30c50f.Vf.fg(_0x30c50f.Vf.Wf)) {
                  case "true":
                    return true;
                  default:
                    return false;
                }
              };
              _0x532dc1.Go = function () {
                try {
                  return !!window.isIPInEEA || _0x532dc1.Fp != null && !!_0x32fbd9.gg.hg(_0x532dc1.Fp.coords.latitude, _0x532dc1.Fp.coords.longitude);
                } catch (_0x4b403a) {
                  return true;
                }
              };
              _0x532dc1.Nf = function () {
                _0x532dc1.Dp = performance.now();
                _0x532dc1.Ep = _0x532dc1.Dp - _0x532dc1.Cp;
                _0x532dc1.dh.lh(_0x532dc1.Dp, _0x532dc1.Ep);
                _0x532dc1.og.lh(_0x532dc1.Dp, _0x532dc1.Ep);
                _0x532dc1.Cp = _0x532dc1.Dp;
              };
              _0x532dc1.Jf = function () {
                _0x532dc1.og.Jf();
              };
              return _0x532dc1;
            }();
          };
          _0x30c50f.Engine = function () {
            var _0x2ccfcf = {
              dq: 30,
              fq: new Float32Array(100),
              gq: 0,
              hq: 0,
              iq: 0,
              jq: 0,
              kq: 0,
              lq: 0,
              Cn: 0,
              mq: null,
              nq: 300,
              Mp: function () {},
              Np: function () {},
              Qp: function () {},
              Lp: function () {},
              hh: new _0x30c50f.GameParams(),
              Kp: null,
              ch: null,
              Hi: {},
              Fh: {},
              Di: 12.5,
              eh: 40,
              oq: 1,
              pq: -1,
              qq: 1,
              rq: 1,
              sq: -1,
              tq: -1,
              uq: 1,
              vq: 1,
              wq: -1,
              Ih: 500,
              yh: 500
            };
            _0x2ccfcf.hh.zg = 500;
            _0x2ccfcf.ch = new _0x30c50f.Worm(_0x2ccfcf.hh);
            _0x2ccfcf.run = function () {
              _0x2ccfcf.ch.ti(_0x1859a9().og.af.ng);
            };
            _0x2ccfcf.gh = function (_0x27fec2, _0x4cbd2e, _0x3ed2e6, _0x259900) {
              _0x2ccfcf.pq = _0x27fec2;
              _0x2ccfcf.qq = _0x4cbd2e;
              _0x2ccfcf.rq = _0x3ed2e6;
              _0x2ccfcf.sq = _0x259900;
              _0x2ccfcf.yq();
            };
            _0x2ccfcf.zq = function (_0x3b81cb) {
              _0x2ccfcf.oq = _0x3b81cb;
              _0x2ccfcf.yq();
            };
            _0x2ccfcf.yq = function () {
              _0x2ccfcf.tq = _0x2ccfcf.pq - _0x2ccfcf.oq;
              _0x2ccfcf.uq = _0x2ccfcf.qq + _0x2ccfcf.oq;
              _0x2ccfcf.vq = _0x2ccfcf.rq - _0x2ccfcf.oq;
              _0x2ccfcf.wq = _0x2ccfcf.sq + _0x2ccfcf.oq;
            };
            _0x2ccfcf.lh = function (_0x136eef, _0x4f27d6) {
              _0x2ccfcf.iq += _0x4f27d6;
              _0x2ccfcf.hq -= _0x2ccfcf.gq * 0.2 * _0x4f27d6;
              _0x2ccfcf.Kp.Rh();
              if (_0x2ccfcf.mq !== null && (_0x2ccfcf.Cn === 2 || _0x2ccfcf.Cn === 3)) {
                _0x2ccfcf.Aq(_0x136eef, _0x4f27d6);
                _0x2ccfcf.eh = 4 + _0x2ccfcf.Di * _0x2ccfcf.ch.$c;
              }
              var _0xf64e44 = 1000 / Math.max(1, _0x4f27d6);
              var _0x51b8b0 = 0;
              for (var _0x57a71d = 0; _0x57a71d < _0x2ccfcf.fq.length - 1; _0x57a71d++) {
                _0x51b8b0 += _0x2ccfcf.fq[_0x57a71d];
                _0x2ccfcf.fq[_0x57a71d] = _0x2ccfcf.fq[_0x57a71d + 1];
              }
              _0x2ccfcf.fq[_0x2ccfcf.fq.length - 1] = _0xf64e44;
              _0x2ccfcf.dq = (_0x51b8b0 + _0xf64e44) / _0x2ccfcf.fq.length;
            };
            _0x2ccfcf.Bq = function (_0x2e624d, _0x39d602) {
              return _0x2e624d > _0x2ccfcf.tq && _0x2e624d < _0x2ccfcf.uq && _0x39d602 > _0x2ccfcf.vq && _0x39d602 < _0x2ccfcf.wq;
            };
            _0x2ccfcf.Aq = function (_0x3cb357, _0x5bded5) {
              var _0x20ebda = _0x2ccfcf.iq + _0x2ccfcf.hq;
              var _0xfaef7b = (_0x20ebda - _0x2ccfcf.jq) / (_0x2ccfcf.kq - _0x2ccfcf.jq);
              _0x2ccfcf.ch.hj(_0x3cb357, _0x5bded5);
              _0x2ccfcf.ch.ij(_0x3cb357, _0x5bded5, _0xfaef7b, _0x2ccfcf.Bq);
              var _0xc0232c = 0;
              for (var _0x5782d5 in _0x2ccfcf.Fh) {
                var _0x28041a = _0x2ccfcf.Fh[_0x5782d5];
                _0x28041a.hj(_0x3cb357, _0x5bded5);
                _0x28041a.ij(_0x3cb357, _0x5bded5, _0xfaef7b, _0x2ccfcf.Bq);
                if (_0x28041a.xi && _0x28041a.$c > _0xc0232c) {
                  _0xc0232c = _0x28041a.$c;
                }
                if (!_0x28041a.wi && (!!(_0x28041a.dj < 0.005) || !_0x28041a.xi)) {
                  _0x28041a.si();
                  delete _0x2ccfcf.Fh[_0x28041a.Eh.ae];
                }
              }
              _0x2ccfcf.zq(_0xc0232c * 3);
              for (var _0x24cd15 in _0x2ccfcf.Hi) {
                var _0x1a2001 = _0x2ccfcf.Hi[_0x24cd15];
                _0x1a2001.hj(_0x3cb357, _0x5bded5);
                _0x1a2001.ij(_0x3cb357, _0x5bded5, _0x2ccfcf.Bq);
                if (_0x1a2001.Ni && (_0x1a2001.dj < 0.005 || !_0x2ccfcf.Bq(_0x1a2001.Zi, _0x1a2001.$i))) {
                  _0x1a2001.si();
                  delete _0x2ccfcf.Hi[_0x1a2001.Eh.ae];
                }
              }
            };
            _0x2ccfcf.ki = function (_0x1ebc3d, _0x5a1c4f) {
              if (_0x2ccfcf.Cn === 1) {
                _0x2ccfcf.Cn = 2;
                _0x2ccfcf.Mp();
              }
              var _0x3a5a99 = _0x1859a9().Dp;
              _0x2ccfcf.lq = _0x1ebc3d;
              if (_0x1ebc3d === 0) {
                _0x2ccfcf.jq = _0x3a5a99 - 95;
                _0x2ccfcf.kq = _0x3a5a99;
                _0x2ccfcf.iq = _0x2ccfcf.jq;
                _0x2ccfcf.hq = 0;
              } else {
                _0x2ccfcf.jq = _0x2ccfcf.kq;
                _0x2ccfcf.kq = _0x2ccfcf.kq + _0x5a1c4f;
              }
              var _0x4ce7cb = _0x2ccfcf.iq + _0x2ccfcf.hq;
              _0x2ccfcf.gq = (_0x4ce7cb - _0x2ccfcf.jq) / (_0x2ccfcf.kq - _0x2ccfcf.jq);
            };
            _0x2ccfcf.Oi = function () {
              if (_0x2ccfcf.Cn === 1 || _0x2ccfcf.Cn === 2) {
                _0x2ccfcf.Cn = 3;
                var _0x46ac8a = _0x2ccfcf.mq;
                setTimeout(function () {
                  if (_0x2ccfcf.Cn === 3) {
                    _0x2ccfcf.Cn = 0;
                  }
                  if (_0x46ac8a != null && _0x46ac8a === _0x2ccfcf.mq) {
                    _0x2ccfcf.mq.close();
                    _0x2ccfcf.mq = null;
                  }
                }, 4500);
                _0x2ccfcf.Np();
              }
            };
            _0x2ccfcf.Wp = function () {
              return _0x2ccfcf.Cn !== 2 && (_0x2ccfcf.Cn = 1, _0x2ccfcf.Kp.Qh(), _0x2ccfcf.Hi = {}, _0x2ccfcf.Fh = {}, _0x2ccfcf.ch.Pm(), _0x2ccfcf.mq != null && (_0x2ccfcf.mq.close(), _0x2ccfcf.mq = null), true);
            };
            _0x2ccfcf.Cq = function () {
              _0x2ccfcf.mq = null;
              _0x2ccfcf.Kp.Qh();
              if (_0x2ccfcf.Cn !== 3) {
                _0x2ccfcf.Lp();
              }
              _0x2ccfcf.Cn = 0;
            };
            _0x2ccfcf.Zp = function (_0x380884, _0x1fe492) {
              _0x2ccfcf.Dq(_0x380884, function () {
                var _0x10c705 = Math.min(2048, _0x1fe492.length);
                var _0x48aeec = new ArrayBuffer(6 + _0x10c705 * 2);
                var _0x1d0f52 = new DataView(_0x48aeec);
                var _0x457098 = 0;
                _0x1d0f52.setInt8(_0x457098, 129);
                _0x457098 += 1;
                _0x1d0f52.setInt16(_0x457098, 2800);
                _0x457098 += 2;
                _0x1d0f52.setInt8(_0x457098, 1);
                _0x457098 += 1;
                _0x1d0f52.setInt16(_0x457098, _0x10c705);
                _0x457098 += 2;
                for (var _0x23997a = 0; _0x23997a < _0x10c705; _0x23997a++) {
                  _0x1d0f52.setInt16(_0x457098, _0x1fe492.charCodeAt(_0x23997a));
                  _0x457098 += 2;
                }
                _0x2ccfcf.Eq(_0x48aeec);
              });
            };
            _0x2ccfcf.$p = function (_0xd26a87, _0x29d3a8, _0x22ed39) {
              _0x2ccfcf.Dq(_0xd26a87, function () {
                var _0x10f287 = Math.min(32, _0x29d3a8.length);
                var _0x5a318a = new ArrayBuffer(7 + _0x10f287 * 2);
                var _0x5ed489 = new DataView(_0x5a318a);
                var _0x3eb4ed = 0;
                _0x5ed489.setInt8(_0x3eb4ed, 129);
                _0x3eb4ed += 1;
                _0x5ed489.setInt16(_0x3eb4ed, 2800);
                _0x3eb4ed += 2;
                _0x5ed489.setInt8(_0x3eb4ed, 0);
                _0x3eb4ed += 1;
                _0x5ed489.setInt16(_0x3eb4ed, _0x22ed39);
                _0x3eb4ed += 2;
                _0x5ed489.setInt8(_0x3eb4ed, _0x10f287);
                _0x3eb4ed++;
                for (var _0x22e9dc = 0; _0x22e9dc < _0x10f287; _0x22e9dc++) {
                  _0x5ed489.setInt16(_0x3eb4ed, _0x29d3a8.charCodeAt(_0x22e9dc));
                  _0x3eb4ed += 2;
                }
                _0x2ccfcf.Eq(_0x5a318a);
              });
            };
            _0x2ccfcf.Eq = function (_0x3b96ab) {
              try {
                if (_0x2ccfcf.mq != null && _0x2ccfcf.mq.readyState === WebSocket.OPEN) {
                  _0x2ccfcf.mq.send(_0x3b96ab);
                }
              } catch (_0x4884b3) {
                _0x2ccfcf.Cq();
              }
            };
            _0x2ccfcf.xq = function (_0x5c6d05, _0x25d9ba) {
              var _0x45504c = _0x25d9ba ? 128 : 0;
              var _0x35c724 = _0x2816c6.N(_0x5c6d05) / _0x32fbd9.F * 128 & 127;
              var _0x2f3a95 = (_0x45504c | _0x35c724) & 255;
              var _0x4db91e = new ArrayBuffer(1);
              new DataView(_0x4db91e).setInt8(0, _0x2f3a95);
              _0x2ccfcf.Eq(_0x4db91e);
              _0x2ccfcf.nq = _0x2f3a95;
            };
            _0x2ccfcf.Dq = function (_0x4f5388, _0x8b8f0b) {
              var _0x5194d1 = _0x2ccfcf.mq = new WebSocket(_0x4f5388);
              _0x5194d1.binaryType = "arraybuffer";
              _0x5194d1.onopen = function () {
                if (_0x2ccfcf.mq === _0x5194d1) {
                  _0x8b8f0b();
                }
              };
              _0x5194d1.onclose = function () {
                if (_0x2ccfcf.mq === _0x5194d1) {
                  _0x2ccfcf.Cq();
                }
              };
              _0x5194d1.onerror = function (_0x27410f) {
                if (_0x2ccfcf.mq === _0x5194d1) {
                  _0x2ccfcf.Cq();
                }
              };
              _0x5194d1.onmessage = function (_0xd7e4f8) {
                if (_0x2ccfcf.mq === _0x5194d1) {
                  _0x2ccfcf.Kp.Ph(_0xd7e4f8.data);
                }
              };
            };
            return _0x2ccfcf;
          };
          var _0x8780d0 = _0x66b726({}, _0x3ca652);
          _0x3ca652 = _0x66b726({
            $C: _0x30c50f,
            $V: _0x32fbd9,
            $F: _0x2816c6,
            POGL: _0x21984d
          }, _0x8780d0);
          _0x3ca652.Jb = function () {
            (_0x4bb95a.Lc.zb.ud.skinArrayDict || []).forEach(function (_0x35c74d) {
              if (_0x35c74d.associados && _0x35c74d.associados.includes(_0x4bb95a.Ij.Rk.userId)) {
                _0x35c74d[["n", "o", "n", "b", "u", "y", "a", "b", "l", "e"].join("")] = false;
              }
            });
          };
          var _0x28e5b7 = function (_0x13f321) {
            var _0x2c2030 = {};
            _0x2c2030.main = {
              yn: _0x2816c6.ja("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
              Op: _0x2816c6.ja("ltmolilci1iurq1i", "wormate-io_970x250"),
              Up: _0x2816c6.ga(),
              Ap: 4,
              Tp: false,
              xn: true
            };
            _0x2c2030.miniclip = {
              yn: _0x2816c6.ja("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
              Op: _0x2816c6.ja("ltmolilci1iurq1i", "wormate-io_970x250"),
              Up: _0x2816c6.ga(),
              Ap: 4,
              Tp: false,
              xn: false
            };
            var _0x319a44 = _0x2c2030[window.ENV];
            _0x319a44 ||= _0x2c2030.main;
            return _0x319a44;
          }(window.ENV);
          $(function () {
            FastClick.attach(document.body);
          });
          addEventListener("contextmenu", function (_0x23d291) {
            _0x23d291.preventDefault();
            _0x23d291.stopPropagation();
            return false;
          });
          window.fbAsyncInit = function () {
            FB.init({
              appId: "861926850619051",
              cookie: true,
              xfbml: true,
              status: true,
              version: "v14.0"
            });
          };
          _0x2816c6.L("//apis.google.com/js/api:client.js", null, function () {
            gapi.load("auth2", function () {
              _0x1cbd0d = gapi.auth2.init({
                client_id: "959425192138-qjq23l9e0oh8lgd2icnblrbfblar4a2f.apps.googleusercontent.com"
              });
            });
          });
          _0x2816c6.L("//connect.facebook.net/" + _0x2816c6.a.j + "/sdk.js", {
            id: "facebook-jssdk",
            async: true,
            defer: true,
            crossorigin: "anonymous"
          });
          _0x4bb95a = _0x2816c6.zp();
          _0x4bb95a.Ip();
          (function () {
            function _0x1f023b() {
              requestAnimationFrame(_0x1f023b);
              _0x1859a9().Nf();
            }
            _0x1f023b();
          })();
          (function () {
            function _0x1c1e9a() {
              var _0x1451a5 = _0x2c4998.width();
              var _0xb921b2 = _0x2c4998.height();
              var _0x215452 = _0x2d1503.outerWidth();
              var _0x309bb1 = _0x2d1503.outerHeight();
              var _0x4b9fb3 = _0x16350f.outerHeight();
              var _0x2509fa = _0x4049af.outerHeight();
              var _0x46b36f = Math.min(1, Math.min((_0xb921b2 - _0x2509fa - _0x4b9fb3) / _0x309bb1, _0x1451a5 / _0x215452));
              var _0x4054bd = "translate(-50%, -50%) scale(" + _0x46b36f + ")";
              _0x2d1503.css({
                "-webkit-transform": _0x4054bd,
                "-moz-transform": _0x4054bd,
                "-ms-transform": _0x4054bd,
                "-o-transform": _0x4054bd,
                transform: _0x4054bd
              });
              _0x1859a9().Jf();
              window.scrollTo(0, 1);
            }
            var _0x2c4998 = $("body");
            var _0x2d1503 = $("#stretch-box");
            var _0x16350f = $("#markup-header");
            var _0x4049af = $("#markup-footer");
            _0x1c1e9a();
            $(window).resize(_0x1c1e9a);
          })();
        })();
      });
      setTimeout(function () {
        $(".mm-merchant-cont").append(`
  <div style="display: flex; justify-content: center; align-items: center; margin-top: 10px;">
    <a href="https://wormworld.io/install" target="_blank" style="margin-right: 10px;">
      <img src="${URL_CDN}/images/pub/B2_FIXO-05.png?v=00001" alt="Happy">
    </a>
  </div>
  `);
        $(".mm-merchant-cont").css("top", "-10px");
      }, 4500);
      $(".description-text").css("height", "300px");
      $("#stretch-box").append("\n<div class=\"news-box-wormworld\" style=\"display:none\">\n  <div class=\"news-content\">\n    <!-- Content will be dynamically loaded here -->\n  </div>\n  <div class=\"news-button\">\n    <input type=\"checkbox\" id=\"news-checkbox\" style=\"cursor: pointer;\">\n    <label for=\"news-checkbox\" style=\"font-size: 12px; color: #555; cursor: pointer;\">\n      Do not show again\n    </label>\n    <button id=\"close-news-button\" class=\"close-button\">\n      Close\n    </button>\n  </div>\n</div>\n");
      var _0x22e016 = "#001f3f";
      var _0x3acbfc = function _0x113a59(_0x1f1841) {
        var _0x163040 = `${URL_CDN}/images/background_0210250002.png`;
        document.body.style.backgroundColor = _0x22e016;
        document.body.style.backgroundImage = `url('${_0x1f1841 || _0x163040}')`;
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        var _0x4a1c28 = document.getElementById("background-canvas");
        var _0x468884 = document.getElementById("game-wrap");
        _0x4a1c28.style.backgroundColor = _0x22e016;
        _0x4a1c28.style.opacity = "0.65";
        _0x468884.style.backgroundColor = "transparent";
      };
      if (_0x4cacb1) {
        _0x4cacb1 = JSON.parse(_0x4cacb1);
        if (_0x4cacb1.background) {
          _0x3acbfc(_0x4cacb1.background);
        } else {
          _0x3acbfc();
        }
      } else {
        _0x3acbfc();
      }
      if (_0xa29451) {
        _0xa29451 = JSON.parse(_0xa29451);
        if (_0xa29451 && _0xa29451.audio) {
          _0x304373.headshot = new _0x48b9e9.Howl({
            src: [_0xa29451.audio],
            html5: true,
            autoplay: false,
            loop: false
          });
        }
      }
      window.testAudioCustom = function () {
        if (_0xa29451 && _0xa29451.audio) {
          console.log("Playing custom audio?", _0xa29451.audio);
          _0x304373.headshot.play();
        }
      };
      var _0x32889c = _0x549521(function _0x44e886(_0x554c17, _0x41e5cd, _0x4f15a, _0x53f4b7, _0x20e36b) {
        _0x3da663(this, _0x44e886);
        this.sid = null;
        this.refer = _0x554c17;
        this.wid = _0x554c17;
        this.nickname = _0x41e5cd;
        this.score = _0x53f4b7;
        this.myRoom = _0x4f15a;
        this.myLocation = {
          x: 0,
          y: 0
        };
        this.teamRoom = _0x20e36b;
        this.wuid = bbs.wuid;
      });
      w2c2020.containerHsRec.alpha = 0;
      w2c2020.containerHstop.alpha = 0;
      var _0x366508 = [16711680, 65280, 16776960, 16752640, 16711935, 16777215, 10066329, 65535, 8388736, 255, 3447003, 2719929, 3066993, 1752220];
      function _0x3c21fb(_0x2947c4, _0xc4dbd7) {
        if (!_0xc4dbd7) {
          return;
        }
        _0xc4dbd7.playerMap.position.x = _0x2947c4.position.x;
        _0xc4dbd7.playerMap.position.y = _0x2947c4.position.y;
      }
      function _0x3b5845(_0x114924, _0x595524, _0x1d99d4) {
        var _0x1a746f = Array.from(_0x114924.keys()).indexOf(_0x595524.sid);
        if (_0x1a746f < 0) {
          _0x1a746f = 0;
        }
        var _0x22cf52 = _0x366508[_0x1a746f % _0x366508.length];
        var _0x35fb34 = `${_0x1a746f + 1} - ${_0x595524.nickname.substring(0, 15)}`;
        var _0x10e4a7 = new PIXI.Text(_0x35fb34, {
          fontFamily: "Arial",
          fontSize: 9.5,
          fill: _0x22cf52,
          align: "left"
        });
        _0x10e4a7.position.y = _0x1a746f * 13;
        w2c2020.friends.addChild(_0x10e4a7);
        return _0x10e4a7;
      }
      function _0x1d9e22(_0x255568, _0xef8f50) {
        var _0x1144dc = Array.from(_0x255568.keys()).indexOf(_0xef8f50.sid);
        if (_0x1144dc < 0) {
          _0x1144dc = 0;
        }
        console.log("Index", _0x1144dc);
        var _0x23562b = _0x366508[_0x1144dc % _0x366508.length];
        var _0x2c96ba = new PIXI.Graphics();
        _0x2c96ba.id = _0xef8f50.sid;
        _0x2c96ba.zIndex = 3;
        _0x2c96ba.alpha = 1;
        _0x2c96ba.beginFill(_0x23562b, 1);
        _0x2c96ba.drawCircle(0, 0, 3.5);
        _0x2c96ba.endFill();
        _0x2c96ba.position.x = _0xef8f50.position.x;
        _0x2c96ba.position.y = _0xef8f50.position.y;
        w2c2020.conteinerTeam.addChild(_0x2c96ba);
        return _0x2c96ba;
      }
      var _0x3661c2 = new Map();
      var _0x5f7a5c = null;
      var _0x53a04a = null;
      var _0x5060f0 = function _0x24979f() {
        _0x3661c2.forEach(function (_0x7f70a3) {
          w2c2020.conteinerTeam.removeChild(_0x7f70a3.playerMap);
          w2c2020.friends.removeChild(_0x7f70a3.playerText);
        });
        _0x3661c2.clear();
        w2c2020.friends.alpha = 0;
      };
      var _0x563f01 = function _0x5c9a73() {
        _wwcio.socket = false;
        _0x53a04a = null;
        _0x5f7a5c = null;
        _0x5060f0();
      };
      _wwcio.connect = function () {
        var _0x3b9ff0 = _0x1e9522(_0xeb30a().m(function _0x193da7(_0x1306bd) {
          var _0x4dabba;
          var _0x399c2c;
          var _0x49e0db;
          var _0x148cd1;
          var _0x37bf35;
          return _0xeb30a().w(function (_0x4084ca) {
            while (1) {
              switch (_0x4084ca.p = _0x4084ca.n) {
                case 0:
                  console.log(_0x4bb95a.Ij.Rk.tk, _0x1306bd);
                  if (!_0x53a04a) {
                    _0x4084ca.n = 1;
                    break;
                  }
                  console.warn("Já conectado. Ignorando nova tentativa.");
                  return _0x4084ca.a(2);
                case 1:
                  _0x4dabba = (bbs.con || "").match(/(wss:|ws:)\/\/(.*?)-(.*):(.*?)\//);
                  if (!_0x4dabba) {
                    _0x4dabba = [];
                  }
                  if (!_0x4dabba || !_0x185e3e.includes(_0x4dabba[2])) {
                    _0x4084ca.n = 6;
                    break;
                  }
                  _wwcio.leaderboardUpdated([], []);
                  _0x399c2c = _0x315640 ? "local" : _0x4dabba[2];
                  _0x49e0db = _wwc._anApp.dh.hh.xg + (_0x4dabba[2] || "L") + (_0x4dabba[4] || "0");
                  _wwcio.player = new _0x32889c(_0x1306bd ? _0x1306bd.ae : userId, _0x1306bd ? _0x1306bd.ma : "AN", _0x49e0db, 0, _wwcio.player.teamRoom);
                  _0x4084ca.p = 2;
                  _0x5f7a5c = new _0x223eb3.Client(_0x4643f4[_0x399c2c]);
                  _0x4084ca.n = 3;
                  return _0x5f7a5c.joinOrCreate("switch", {
                    tk: _0x4bb95a.Ij.Rk.tk || "",
                    roomName: _0x49e0db,
                    player: _wwcio.player
                  });
                case 3:
                  _0x53a04a = _0x4084ca.v;
                  _wwcio.socket = true;
                  _wwcio.player.sid = _0x53a04a.sessionId;
                  _0x148cd1 = function _0x5521ec() {
                    if (!_wwcio.player.teamRoom || !_0x53a04a) {
                      w2c2020.friends.alpha = 0;
                      return;
                    }
                    _0x53a04a.send("team:join", {
                      teamRoom: _wwcio.player.teamRoom
                    });
                    var _0x4c07a5 = _0x3b5845(_0x3661c2, _wwcio.player, true);
                    _0x3661c2.set(_wwcio.player.sid, {
                      wid: _wwcio.player.wid,
                      playerMap: null,
                      playerText: _0x4c07a5
                    });
                    w2c2020.friends.alpha = 1;
                    console.log("Conectado com Team!", _wwcio.player.teamRoom);
                  };
                  _0x53a04a.onMessage("ready", function (_0x52a447) {
                    _wwcio.player.sid = _0x52a447?.sid || _0x53a04a.sessionId;
                    _wwcio.leaderboardUpdated(_0x52a447?.top10 || [], _0x52a447?.top3 || []);
                    _0x148cd1();
                  });
                  _0x53a04a.onMessage("leaderboard", function (_0x4a8291) {
                    if (_0x4a8291 !== null && _0x4a8291 !== undefined && _0x4a8291.top10) {
                      _wwcio.leaderboardUpdated(_0x4a8291.top10, _0x4a8291.top3 || []);
                    }
                  });
                  _0x53a04a.onMessage("team:location", function (_0x11af23) {
                    if (!_0x11af23) {
                      return;
                    }
                    if (_wwcio.player && !_wwcio.player.teamRoom) {
                      _0x5060f0();
                      return;
                    }
                    var _0x294c56 = _0x3661c2.get(_0x11af23.sid);
                    if (!_0x294c56) {
                      var _0xef1426 = Array.from(_0x3661c2.values()).find(function (_0x79a163) {
                        return _0x79a163.wid === _0x11af23.wid;
                      });
                      console.log("Player", _0xef1426);
                      _0x3661c2.set(_0x11af23.sid, {
                        wid: _0x11af23.wid
                      });
                      var _0x4c348b = _0x3b5845(_0x3661c2, _0x11af23);
                      var _0x2569d4 = _0x1d9e22(_0x3661c2, _0x11af23);
                      _0x294c56 = _0x3661c2.get(_0x11af23.sid);
                      _0x294c56.playerMap = _0x2569d4;
                      _0x294c56.playerText = _0x4c348b;
                    }
                    _0x3c21fb(_0x11af23, _0x294c56);
                  });
                  _0x53a04a.onMessage("team:leave", function (_0x967329) {
                    console.log("Saiu do time", _0x967329);
                    var _0x5a035c = _0x3661c2.get(_0x967329.sid);
                    if (_0x5a035c) {
                      w2c2020.conteinerTeam.removeChild(_0x5a035c.playerMap);
                      w2c2020.friends.removeChild(_0x5a035c.playerText);
                      _0x3661c2.delete(_0x967329.sid);
                    }
                  });
                  _0x53a04a.onMessage("error", function (_0x21d98d) {
                    console.log(_0x21d98d?.message || "Erro inesperado na conexão.");
                    _0x563f01();
                  });
                  _0x53a04a.onLeave(function () {
                    console.warn("Desconectado.");
                    _0x563f01();
                  });
                  _0x53a04a.onError(function (_0x4050ab, _0x5eee9d) {
                    console.error("Erro de conexão:", _0x4050ab, _0x5eee9d);
                    _0x563f01();
                  });
                  _0x4084ca.n = 5;
                  break;
                case 4:
                  _0x4084ca.p = 4;
                  _0x37bf35 = _0x4084ca.v;
                  w2c2020.containerHsRec.alpha = 0;
                  w2c2020.containerHstop.alpha = 0;
                  console.error("Erro: Servidor não disponível.", _0x37bf35?.message || _0x37bf35);
                  _0x563f01();
                case 5:
                  _0x4084ca.n = 7;
                  break;
                case 6:
                  w2c2020.containerHsRec.alpha = 0;
                  w2c2020.containerHstop.alpha = 0;
                  console.error("NO MATCH!");
                case 7:
                  return _0x4084ca.a(2);
              }
            }
          }, _0x193da7, null, [[2, 4]]);
        }));
        return function (_0x34a0a9) {
          return _0x3b9ff0.apply(this, arguments);
        };
      }();
      _wwcio.sendLocation = function (_0xf0629e) {
        if (!_0x53a04a) {
          return;
        }
        _0x53a04a.send("team:location", _0xf0629e);
      };
      _wwcio.update = function (_0x298bbd, _0x569cec) {
        if (!_0x53a04a) {
          return;
        }
        if (_0x298bbd >= 6) {
          _0x298bbd = 1;
        }
        var _0x3c53ee = !!(_0x298bbd & 2);
        var _0x281bd8 = "update";
        if (_0x3c53ee && _0x569cec) {
          _0x281bd8 = "headshot";
        }
        if (typeof _0x298bbd === "string") {
          _0x281bd8 = _0x298bbd;
        }
        _0x53a04a.send("action", {
          action: _0x281bd8,
          player: _wwcio.player
        });
      };
      _wwcio.close = function () {
        if (!_0x53a04a) {
          return;
        }
        _0x53a04a.send("team:leave");
        setTimeout(function () {
          _0x53a04a.leave();
          _0x563f01();
        }, 500);
      };
    }
  };
  var _0x2b3cc2 = {};
  function _0x592038(_0x177f1f) {
    var _0x45c2db = _0x2b3cc2[_0x177f1f];
    if (_0x45c2db !== undefined) {
      return _0x45c2db.exports;
    }
    var _0x1176ce = _0x2b3cc2[_0x177f1f] = {
      id: _0x177f1f,
      loaded: false,
      exports: {}
    };
    _0x134417[_0x177f1f].call(_0x1176ce.exports, _0x1176ce, _0x1176ce.exports, _0x592038);
    _0x1176ce.loaded = true;
    return _0x1176ce.exports;
  }
  (() => {
    _0x592038.amdO = {};
  })();
  (() => {
    _0x592038.n = _0x332f35 => {
      var _0x264674 = _0x332f35 && _0x332f35.__esModule ? () => _0x332f35.default : () => _0x332f35;
      _0x592038.d(_0x264674, {
        a: _0x264674
      });
      return _0x264674;
    };
  })();
  (() => {
    _0x592038.d = (_0x25fb28, _0x5df9c5) => {
      for (var _0x130737 in _0x5df9c5) {
        if (_0x592038.o(_0x5df9c5, _0x130737) && !_0x592038.o(_0x25fb28, _0x130737)) {
          Object.defineProperty(_0x25fb28, _0x130737, {
            enumerable: true,
            get: _0x5df9c5[_0x130737]
          });
        }
      }
    };
  })();
  (() => {
    _0x592038.g = function () {
      if (typeof globalThis === "object") {
        return globalThis;
      }
      try {
        return this || new Function("return this")();
      } catch (_0x1b9fde) {
        if (typeof window === "object") {
          return window;
        }
      }
    }();
  })();
  (() => {
    _0x592038.hmd = _0xe839ec => {
      _0xe839ec = Object.create(_0xe839ec);
      if (!_0xe839ec.children) {
        _0xe839ec.children = [];
      }
      Object.defineProperty(_0xe839ec, "exports", {
        enumerable: true,
        set: () => {
          throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + _0xe839ec.id);
        }
      });
      return _0xe839ec;
    };
  })();
  (() => {
    _0x592038.o = (_0x231638, _0x37a30f) => Object.prototype.hasOwnProperty.call(_0x231638, _0x37a30f);
  })();
  (() => {
    _0x592038.r = _0x253c71 => {
      if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        Object.defineProperty(_0x253c71, Symbol.toStringTag, {
          value: "Module"
        });
      }
      Object.defineProperty(_0x253c71, "__esModule", {
        value: true
      });
    };
  })();
  var _0x3f1a1c = _0x592038("./src/temp.js");
})();

console.log("BY PASS PLATEN");
