var v;
var v2;
window.sectorSystem = {
  settings: {
    lineWidth: 0.15,
    lineColor: 16711680,
    lineAlpha: 0.3,
    backgroundColor: 0,
    backgroundAlpha: 0.6,
    sectorTextStyle: {
      fontFamily: "Arial",
      fontSize: 14,
      fill: 16777215
    },
    quarterTextStyle: {
      fontFamily: "Arial",
      fontSize: 20,
      fill: 16777215
    },
    showLines: true
  },
  state: {
    container: null,
    graphics: null,
    isActive: false,
    currentMode: null,
    texts: [],
    initialized: false,
    renderContainer: null,
    restored: false
  },
  findRenderContainer: function () {
    if (this.state.renderContainer) {
      return this.state.renderContainer;
    }
    if (window.laserGraphics?.parent) {
      this.state.renderContainer = window.laserGraphics.parent;
      return this.state.renderContainer;
    }
    if (window.ooo?.Mh?.Lh?.Wf) {
      this.state.renderContainer = window.ooo.Mh.Lh.Wf;
      return this.state.renderContainer;
    }
    const _0x29378b = (_0xc99233, _0x3f1f5 = new Set(), _0x4f5012 = 0) => {
      if (!_0xc99233 || typeof _0xc99233 !== "object" || _0x4f5012 > 3 || _0x3f1f5.has(_0xc99233)) {
        return null;
      }
      _0x3f1f5.add(_0xc99233);
      if (_0xc99233.Wf instanceof PIXI.Container) {
        this.state.renderContainer = _0xc99233.Wf;
        return _0xc99233.Wf;
      }
      for (let _0x571425 in _0xc99233) {
        if (_0x571425 !== "parent" && _0x571425 !== "children" && _0xc99233[_0x571425] && typeof _0xc99233[_0x571425] === "object") {
          const _0x891b5d = _0x29378b(_0xc99233[_0x571425], _0x3f1f5, _0x4f5012 + 1);
          if (_0x891b5d) {
            return _0x891b5d;
          }
        }
      }
      return null;
    };
    return _0x29378b(window.ooo);
  },
  cachedRadius: 0,
  lastRadiusTime: 0,
  getRadius: function () {
    const _0x299790 = Date.now();
    if (_0x299790 - this.lastRadiusTime > 1000) {
      this.cachedRadius = window.ooo?.Mh?.Qh?.gh || window.ooo?.Mh?.Lh?.Qh?.gh || 500;
      this.lastRadiusTime = _0x299790;
    }
    return this.cachedRadius;
  },
  clearTexts: function () {
    this.state.texts.forEach(_0x5d205d => {
      if (_0x5d205d && _0x5d205d.parent) {
        _0x5d205d.parent.removeChild(_0x5d205d);
      }
    });
    this.state.texts = [];
  },
  initDrawing: function (_0x42e2c5) {
    this.clearTexts();
    this.state.graphics.clear();
    this.state.graphics.lineStyle(this.settings.lineWidth, this.settings.lineColor, this.settings.lineAlpha);
    this.state.graphics.beginFill(this.settings.backgroundColor, this.settings.backgroundAlpha);
    this.state.graphics.drawCircle(0, 0, _0x42e2c5);
    this.state.graphics.endFill();
    return _0x42e2c5;
  },
  drawSectors: function () {
    const _0x2d2e85 = this.initDrawing(this.getRadius());
    const _0x1e5c84 = _0x2d2e85 / 3;
    if (this.settings.showLines) {
      for (let _0x35c372 = 1; _0x35c372 < 3; _0x35c372++) {
        this.state.graphics.drawCircle(0, 0, _0x2d2e85 - _0x35c372 * _0x1e5c84);
      }
      for (let _0x4561e8 = 0; _0x4561e8 < 4; _0x4561e8++) {
        const _0x3e5939 = _0x4561e8 * Math.PI / 2;
        this.state.graphics.moveTo(0, 0);
        this.state.graphics.lineTo(Math.cos(_0x3e5939) * _0x2d2e85, Math.sin(_0x3e5939) * _0x2d2e85);
      }
    }
    for (let _0x2fd4fa = 0; _0x2fd4fa < 4; _0x2fd4fa++) {
      const _0x3c0892 = _0x2fd4fa * Math.PI / 2;
      for (let _0x52e86d = 0; _0x52e86d < 3; _0x52e86d++) {
        const _0x51c3b2 = _0x2d2e85 - (_0x52e86d * _0x1e5c84 + _0x1e5c84 / 2);
        const _0x71a42b = _0x3c0892 + Math.PI / 4;
        const _0x518042 = ["S", "D", "F"][_0x52e86d] + (_0x2fd4fa + 1);
        const _0x2c98ba = new PIXI.Text(_0x518042, this.settings.sectorTextStyle);
        _0x2c98ba.anchor.set(0.5);
        _0x2c98ba.position.set(Math.cos(_0x71a42b) * _0x51c3b2, Math.sin(_0x71a42b) * _0x51c3b2);
        this.state.container.addChild(_0x2c98ba);
        this.state.texts.push(_0x2c98ba);
      }
    }
  },
  drawQuarters: function () {
    const _0x5b93c4 = this.initDrawing(this.getRadius());
    if (this.settings.showLines) {
      this.state.graphics.moveTo(-_0x5b93c4, 0);
      this.state.graphics.lineTo(_0x5b93c4, 0);
      this.state.graphics.moveTo(0, -_0x5b93c4);
      this.state.graphics.lineTo(0, _0x5b93c4);
    }
    [{
      n: "WKQ 1",
      x: 1,
      y: -1
    }, {
      n: "WKQ 2",
      x: -1,
      y: -1
    }, {
      n: "WKQ 3",
      x: -1,
      y: 1
    }, {
      n: "WKQ 4",
      x: 1,
      y: 1
    }].forEach(_0x3153d6 => {
      const _0x3aaa60 = new PIXI.Text(_0x3153d6.n, this.settings.quarterTextStyle);
      _0x3aaa60.anchor.set(0.5);
      _0x3aaa60.position.set(_0x3153d6.x * _0x5b93c4 / 3, _0x3153d6.y * _0x5b93c4 / 3);
      this.state.container.addChild(_0x3aaa60);
      this.state.texts.push(_0x3aaa60);
    });
  },
  initGraphics: function () {
    if (this.state.initialized) {
      return true;
    }
    const _0x311a5a = this.findRenderContainer();
    if (!_0x311a5a) {
      return false;
    }
    this.state.container = new PIXI.Container();
    this.state.graphics = new PIXI.Graphics();
    this.state.container.addChild(this.state.graphics);
    _0x311a5a.addChild(this.state.container);
    this.state.container.zIndex = 10;
    this.state.container.visible = false;
    this.state.initialized = true;
    return true;
  },
  toggleMode: function (_0x5753f6) {
    if (!this.initGraphics()) {
      return;
    }
    if (this.state.isActive && this.state.currentMode === _0x5753f6) {
      this.state.container.visible = false;
      this.state.isActive = false;
      this.state.currentMode = null;
      if (document.getElementById("sector_system_toggle")) {
        document.getElementById("sector_system_toggle").checked = false;
      }
      this.saveSettings();
      return;
    }
    this.state.isActive = true;
    this.state.currentMode = _0x5753f6;
    this.state.container.visible = true;
    if (document.getElementById("sector_system_toggle")) {
      document.getElementById("sector_system_toggle").checked = true;
    }
    if (_0x5753f6 === "sectors") {
      this.drawSectors();
    } else {
      this.drawQuarters();
    }
    this.saveSettings();
  },
  setupKeyboardEvents: function () {
    const _0x53d8a3 = {
      83: () => this.toggleMode("sectors"),
      187: () => this.toggleMode("sectors"),
      61: () => this.toggleMode("sectors"),
      88: () => this.toggleMode("quarters")
    };
    document.addEventListener("keydown", _0x10afc7 => {
      const _0x582f93 = _0x10afc7.keyCode || _0x10afc7.which;
      if (_0x53d8a3[_0x582f93]) {
        _0x53d8a3[_0x582f93]();
        if (typeof this.initUserInterface === "function") {
          this.initUserInterface();
        }
      }
    });
  },
  saveSettings: function () {
    try {
      localStorage.setItem("sectorSystemSettings", JSON.stringify(this.settings));
      localStorage.setItem("sectorSystemActive", this.state.isActive ? "1" : "0");
      if (this.state.currentMode) {
        localStorage.setItem("sectorSystemMode", this.state.currentMode);
      }
      console.log("Saved sector system state:", {
        active: this.state.isActive,
        mode: this.state.currentMode
      });
    } catch (_0x806b9d) {
      console.error("Error saving sector system settings:", _0x806b9d);
    }
  },
  loadSettings: function () {
    try {
      const _0x518e7b = JSON.parse(localStorage.getItem("sectorSystemSettings"));
      if (_0x518e7b) {
        this.settings = {
          ...this.settings,
          ..._0x518e7b
        };
      }
      const _0x54fcd7 = localStorage.getItem("sectorSystemActive") === "1";
      let _0x2d9729 = localStorage.getItem("sectorSystemMode");
      if (!_0x2d9729) {
        _0x2d9729 = "sectors";
      }
      this.savedState = {
        isActive: _0x54fcd7,
        currentMode: _0x2d9729
      };
    } catch (_0x5f51a3) {
      console.error("Error loading sector system settings:", _0x5f51a3);
    }
  },
  applySettings: function () {
    if (this.state.isActive && this.state.currentMode) {
      if (this.state.currentMode === "sectors") {
        this.drawSectors();
      } else {
        this.drawQuarters();
      }
    }
  },
  init: function () {
    if (typeof PIXI === "undefined") {
      setTimeout(() => this.init(), 1000);
      return;
    }
    this.loadSettings();
    const _0x137b33 = this.initGraphics();
    this.setupKeyboardEvents();
    if (!_0x137b33) {
      setTimeout(() => this.init(), 1000);
      return;
    }
    setTimeout(() => {
      if (this.savedState && this.savedState.isActive) {
        this.state.isActive = true;
        this.state.currentMode = this.savedState.currentMode;
        this.state.container.visible = true;
        if (this.state.currentMode === "sectors") {
          this.drawSectors();
        } else {
          this.drawQuarters();
        }
        if (document.getElementById("sector_system_toggle")) {
          document.getElementById("sector_system_toggle").checked = true;
        }
        this.state.restored = true;
        if ($("#sector_system_toggle").length > 0) {
          this.initUserInterface();
        }
      }
    }, 1000);
  },
  initUserInterface: function () {
    function _0x31e118(_0xc5c242) {
      return "#" + _0xc5c242.toString(16).padStart(6, "0");
    }
    function _0x16884e(_0x41334d) {
      return parseInt(_0x41334d.replace("#", ""), 16);
    }
    if (!this.state.restored && this.savedState && this.savedState.isActive) {
      console.log("Restoring state from UI initialization");
      this.toggleMode(this.savedState.currentMode || "sectors");
      this.state.restored = true;
    }
    const _0x597c32 = () => {
      $("#sector_system_toggle").prop("checked", this.state.isActive);
      $("#sector_display_mode").val(this.state.currentMode || "sectors");
      $("#sector_bg_color").val(_0x31e118(this.settings.backgroundColor));
      $("#sector_line_color").val(_0x31e118(this.settings.lineColor));
      $("#sector_bg_opacity").val(this.settings.backgroundAlpha * 100);
      $("#sector_bg_opacity_value").text(Math.round(this.settings.backgroundAlpha * 100) + "%");
      $("#sector_line_opacity").val(this.settings.lineAlpha * 100);
      $("#sector_line_opacity_value").text(Math.round(this.settings.lineAlpha * 100) + "%");
      $("#sector_show_lines").prop("checked", this.settings.showLines);
      if (!this.settings.showLines) {
        $("#sector_lines_options").slideUp(200);
      } else {
        $("#sector_lines_options").slideDown(200);
      }
      if (this.state.isActive) {
        $("#sector_settings_panel").slideDown(300);
      } else {
        $("#sector_settings_panel").slideUp(200);
      }
    };
    $("#sector_system_toggle").off("change").on("change", function () {
      const _0x5a916d = $(this).prop("checked");
      if (_0x5a916d) {
        const _0x57082f = $("#sector_display_mode").val() || "sectors";
        window.sectorSystem.toggleMode(_0x57082f);
      } else if (window.sectorSystem.state.isActive) {
        window.sectorSystem.toggleMode(window.sectorSystem.state.currentMode);
      }
      _0x597c32();
    });
    $("#sector_display_mode").off("change").on("change", function () {
      const _0x1d1fff = $(this).val();
      if (window.sectorSystem.state.isActive) {
        window.sectorSystem.toggleMode(window.sectorSystem.state.currentMode);
        window.sectorSystem.toggleMode(_0x1d1fff);
        _0x597c32();
      }
    });
    $("#sector_bg_color").off("change").on("change", function () {
      window.sectorSystem.settings.backgroundColor = _0x16884e($(this).val());
      window.sectorSystem.applySettings();
      window.sectorSystem.saveSettings();
    });
    $("#sector_line_color").off("change").on("change", function () {
      window.sectorSystem.settings.lineColor = _0x16884e($(this).val());
      window.sectorSystem.applySettings();
      window.sectorSystem.saveSettings();
    });
    $("#sector_bg_opacity").off("input").on("input", function () {
      const _0x192b41 = parseInt($(this).val()) / 100;
      window.sectorSystem.settings.backgroundAlpha = _0x192b41;
      $("#sector_bg_opacity_value").text(Math.round(_0x192b41 * 100) + "%");
      window.sectorSystem.applySettings();
      window.sectorSystem.saveSettings();
    });
    $("#sector_line_opacity").off("input").on("input", function () {
      const _0x386a5f = parseInt($(this).val()) / 100;
      window.sectorSystem.settings.lineAlpha = _0x386a5f;
      $("#sector_line_opacity_value").text(Math.round(_0x386a5f * 100) + "%");
      window.sectorSystem.applySettings();
      window.sectorSystem.saveSettings();
    });
    $("#sector_show_lines").off("change").on("change", function () {
      window.sectorSystem.settings.showLines = $(this).prop("checked");
      if (!window.sectorSystem.settings.showLines) {
        $("#sector_lines_options").slideUp(200);
      } else {
        $("#sector_lines_options").slideDown(200);
      }
      window.sectorSystem.applySettings();
      window.sectorSystem.saveSettings();
    });
    _0x597c32();
  }
};
var v26;
$(document).ready(function () {
  if ($(".store-view-cont").length) {
    $(".store-view-cont").append("<div id=\"idReplaceSkin\"></div>");
    v26 = $("#idReplaceSkin");
  }
});
var vO2 = {
  unlimitedRespawn: false,
  respawnDelay: 50
};
window.laserOptions = {
  enabled: false,
  color: 16766720,
  opacity: 0.5,
  thickness: 0.1
};
window.laserGraphics = null;
const vO3 = {
  fontStyle: {
    blanco: new PIXI.TextStyle({
      align: "center",
      fill: "#FF0000",
      fontSize: 14,
      fontWeight: "bold",
      lineJoin: "round",
      stroke: "#FFFFFF",
      strokeThickness: 1.5,
      whiteSpace: "normal",
      wordWrap: true
    })
  }
};
vO3.pointsContainer = new PIXI.Container();
let vO4 = {
  x: null,
  y: null
};
let v27 = null;
let v28 = null;
const vF3 = function () {
  if (!window.coords || typeof window.coords.playerX === "undefined" || typeof window.coords.playerY === "undefined") {
    return;
  }
  let _0x56ffb5 = "m_2";
  if (vO4.x !== null) {
    const _0x4de743 = Math.sqrt(Math.pow(window.coords.playerX - vO4.x, 2) + Math.pow(window.coords.playerY - vO4.y, 2));
    if (_0x4de743 > 100) {
      if (vO3[_0x56ffb5]) {
        if (vO3.pointsContainer && vO3.pointsContainer.children.includes(vO3[_0x56ffb5])) {
          vO3.pointsContainer.removeChild(vO3[_0x56ffb5]);
        }
        vO3[_0x56ffb5] = null;
      }
      if (v27) {
        clearInterval(v27);
        v27 = null;
      }
      if (v28) {
        clearTimeout(v28);
        v28 = null;
      }
    }
  }
  vO4.x = window.coords.playerX;
  vO4.y = window.coords.playerY;
  if (!vO3[_0x56ffb5]) {
    vO3[_0x56ffb5] = new PIXI.Text("X", vO3.fontStyle.blanco);
    vO3[_0x56ffb5].zIndex = 2;
    vO3[_0x56ffb5].alpha = 0.9;
    vO3[_0x56ffb5].anchor.set(0.5, 0.5);
    if (vO3.pointsContainer) {
      vO3.pointsContainer.sortableChildren = true;
      vO3.pointsContainer.zIndex = 2;
    }
    if (!v27) {
      let _0x4e3bf9 = true;
      v27 = setInterval(() => {
        if (vO3[_0x56ffb5]) {
          _0x4e3bf9 = !_0x4e3bf9;
          vO3[_0x56ffb5].visible = _0x4e3bf9;
        } else {
          clearInterval(v27);
          v27 = null;
        }
      }, 500);
    }
    if (!v28) {
      v28 = setTimeout(() => {
        if (vO3[_0x56ffb5]) {
          if (vO3.pointsContainer && vO3.pointsContainer.children.includes(vO3[_0x56ffb5])) {
            vO3.pointsContainer.removeChild(vO3[_0x56ffb5]);
          }
          vO3[_0x56ffb5] = null;
        }
        if (v27) {
          clearInterval(v27);
          v27 = null;
        }
        v28 = null;
      }, 20000);
    }
  }
  if (vO3[_0x56ffb5]) {
    vO3[_0x56ffb5].x = window.coords.playerX;
    vO3[_0x56ffb5].y = window.coords.playerY;
    if (vO3.pointsContainer && !vO3.pointsContainer.children.includes(vO3[_0x56ffb5])) {
      vO3.pointsContainer.addChild(vO3[_0x56ffb5]);
    }
  }
  if (window.ooo && ooo.Xg && ooo.Xg.Kf && ooo.Xg.Kf.Wg && ooo.Xg.Kf.Wg.Ah && ooo.Xg.Kf.Wg.Ah.Sh) {
    ooo.Xg.Kf.Wg.Ah.Sh.zIndex = 9999;
    if (ooo.Xg.Kf.Wg.Ah.sortableChildren !== true) {
      ooo.Xg.Kf.Wg.Ah.sortableChildren = true;
    }
    if (ooo.Xg.Kf.Wg.sortableChildren !== true) {
      ooo.Xg.Kf.Wg.sortableChildren = true;
    }
  }
};
function f3(_0x75c76a) {
  return (f3 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (_0x747ed0) {
    return typeof _0x747ed0;
  } : function (_0x3be2f3) {
    if (_0x3be2f3 && typeof Symbol == "function" && _0x3be2f3.constructor === Symbol && _0x3be2f3 !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof _0x3be2f3;
    }
  })(_0x75c76a);
}
(function () {
  var _0x158a86 = {};
  var _0x2171ac = {};
  var _0x239c2a = {};
  var _0x39b888 = {};
  _0x239c2a.a = function (_0x1f14a8) {
    var _0x367e38 = new String();
    var _0x409206 = parseInt(_0x1f14a8.substring(0, 2), 16);
    for (var _0xa6874f = 2; _0xa6874f < _0x1f14a8.length; _0xa6874f += 2) {
      var _0xb2427 = parseInt(_0x1f14a8.substring(_0xa6874f, _0xa6874f + 2), 16);
      _0x367e38 += String.fromCharCode(_0xb2427 ^ (_0x409206 = 3793 + _0x409206 * 4513 & 255));
    }
    ;
    return _0x367e38;
  };
  _0x239c2a.b = function (_0x30c78f) {
    return Function("return " + _0x30c78f + "; ")();
  };
  _0x158a86.c = _0x239c2a.b("window");
  _0x158a86.d = _0x158a86.c.document;
  _0x239c2a.e = function () {
    return _0x158a86.c.devicePixelRatio || 1;
  };
  _0x158a86.c.addEventListener("load", function () {
    let _0x2cbd14 = {
      eie: null,
      joystick: {
        positionMode: "L",
        checked: true,
        size: 90,
        mode: "dynamic",
        position: {
          left: "110px",
          bottom: "110px"
        },
        color: "red",
        pxy: 110
      },
      on: false,
      vj: null,
      uj: null,
      m: null,
      n: null
    };
    var _0x5b37ef = {
      id_user: "",
      nickname: "wft",
      enemyNameHs: "No Name Player",
      teamCode: "",
      playerX: 0,
      playerY: 0,
      hs: 0,
      kill: 0,
      message: "",
      teamColor: localStorage.getItem("teamColor") || "0xffffff",
      wssServer: ""
    };
    let _0x3c448a = 0;
    const _0x101c40 = 1000;
    function _0x11d55c(_0x57c0f3) {
      const _0x54c71f = Date.now();
      if (_0x54c71f - _0x3c448a > _0x101c40) {
        debugLog(_0x57c0f3);
        _0x3c448a = _0x54c71f;
      }
    }
    let _0x23cd07;
    const _0x30df82 = {
      YT: new Map()
    };
    let _0x482bd6 = false;
    const _0x34798f = 5000;
    window.addEventListener("beforeunload", () => {
      if (_0x23cd07 && _0x23cd07.readyState === WebSocket.OPEN) {
        _0x23cd07.close();
      }
    });
    function _0x59b221(_0x99936a) {
      if (_0x99936a.id_user === "gg_116823912010482082044") {
        createServerMessage("[By YıLdo OWNER]", _0x99936a.message);
        debugLog("Servidor " + _0x99936a.id_user + " ha enviado un mensaje: " + _0x99936a.message);
      }
      if (_0x99936a.wssServer !== _0x5b37ef.wssServer) {
        return;
      }
      switch (_0x99936a.type) {
        case "initialState":
          _0x1f8ab0(_0x99936a.YT);
          break;
        case "playerUpdate":
          _0x5b720d(_0x99936a);
          break;
        case "hsKillUpdate":
          _0x161ab9(_0x99936a);
          break;
        case "playerDeath":
          _0x2f82e0(_0x99936a);
          break;
        case "playerDisconnect":
          _0x330c8d(_0x99936a.id);
          break;
        default:
          debugLog("Mensaje desconocido:", _0x99936a);
      }
    }
    function _0x250c43() {
      if (!_0x482bd6) {
        debugLog("No conectado, esperando a que se restablezca la conexión...");
        return;
      }
      const _0x6886d5 = $("#chat-input").val().trim();
      if (_0x6886d5 === "") {
        return;
      }
      const _0x57ad6d = _0x5b37ef.nickname.substring(0, 16);
      const _0x38727b = getUserData(_0x5b37ef.id_user);
      const _0x1724e5 = {
        type: "chatMessage",
        id_user: _0x5b37ef.id_user,
        nickname: _0x57ad6d,
        message: _0x6886d5,
        wssServer: _0x5b37ef.wssServer,
        color: _0x38727b ? _0x38727b.color : "rgba(255, 255, 255, 0.1)",
        image: _0x38727b ? _0x38727b.image : "default_icon.png"
      };
      _0x23cd07.send(JSON.stringify(_0x1724e5));
      _0x496aeb(_0x57ad6d, _0x6886d5, _0x5b37ef.id_user, _0x1724e5.color, _0x1724e5.image, true);
      $("#chat-input").val("");
    }
    function _0x496aeb(_0x58bcf6, _0x490760, _0x13f842, _0x4d7e4f, _0x89d9ef, _0x31e107 = false) {
      const _0x3c48ea = _0x89d9ef ? "<img src=\"" + _0x89d9ef + "\" alt=\"User Icon\" style=\"width: 20px; height: 20px; margin-right: 5px; border-radius: 50%;\">" : "";
      const _0x355eb2 = _0x31e107 ? "lightblue" : "white";
      const _0x2d7eba = "\n        <div class=\"chat-message\" style=\"background: " + (_0x4d7e4f || "rgba(255, 255, 255, 0.1)") + ";\">\n            " + _0x3c48ea + "\n            <strong id=\"" + _0x13f842 + "\" style=\"color: " + _0x355eb2 + "\">" + _0x58bcf6 + ":</strong>\n            <span>" + _0x490760 + "</span>\n        </div>\n    ";
      $("#chat-history").append(_0x2d7eba).scrollTop($("#chat-history")[0].scrollHeight);
    }
    function _0x1f8ab0(_0x5522aa) {
      _0x5522aa.forEach(_0x1db579 => _0x30df82.players.set(_0x1db579.id_user, _0x1db579));
      debugLog("Estado inicial recibido:", _0x5522aa);
    }
    function _0x5b720d(_0x55d747) {
      _0x30df82.YT.set(_0x55d747.id_user, {
        ..._0x55d747
      });
      updateTop8Hs();
      if (_0x55d747.teamCode === _0x5b37ef.teamCode) {
        createTeamUbication(_0x55d747.teamCode, _0x55d747.teamColor);
        createTeamMessage(_0x55d747.teamCode, _0x55d747.nickname, _0x55d747.message);
      }
    }
    function _0x161ab9(_0x5d21e6) {
      debugLog("🎯 HS Güncelleme: " + _0x5d21e6.nickname);
      const _0x2fc267 = _0x30df82.YT.get(_0x5d21e6.id_user);
      if (_0x2fc267) {
        _0x2fc267.hskill.hs += _0x5d21e6.hskill.hs;
        _0x2fc267.hskill.kill += _0x5d21e6.hskill.kill;
      } else {
        _0x30df82.YT.set(_0x5d21e6.id_user, {
          ..._0x5d21e6,
          hskill: {
            ..._0x5d21e6.hskill
          },
          position: {
            x: 0,
            y: 0
          }
        });
      }
      const _0x1c2b89 = _0x30df82.YT.get(_0x5d21e6.id_user);
      debugLog("🧠 Player state:", _0x1c2b89);
      updateTop8Hs();
    }
    function _0x2f82e0(_0x264c1f) {
      _0x30df82.YT.delete(_0x264c1f.id_user);
      debugLog("El jugador " + _0x264c1f.nickname + " ha muerto.");
      updateTop8Hs();
      clearTeamUbication();
    }
    function _0x330c8d(_0x2b4ba1) {
      _0x30df82.YT.delete(_0x2b4ba1);
      debugLog("Jugador " + _0x2b4ba1 + " desconectado.");
    }
    function _0x4086ad(_0x1e70b3, _0x1df2ad = {}) {
      if (!_0x482bd6) {
        debugLog("WebSocket bağlı değil.");
        return;
      }
      if (_0x1e70b3 === "playerUpdate" && (!_0x5b37ef.teamCode || _0x5b37ef.teamCode === "")) {
        debugLog("🛑 Pozisyon güncellemesi yapılmadı: teamCode yok.");
        return;
      }
      const _0x5b6989 = {
        type: _0x1e70b3,
        id_user: _0x5b37ef.id_user,
        nickname: _0x5b37ef.nickname,
        enemyNameHs: _0x5b37ef.enemyNameHs,
        hskill: {
          hs: _0x5b37ef.hs,
          kill: _0x5b37ef.kill
        },
        position: {
          x: _0x5b37ef.playerX,
          y: _0x5b37ef.playerY
        },
        message: _0x5b37ef.message,
        teamCode: _0x5b37ef.teamCode,
        teamColor: _0x5b37ef.teamColor,
        wssServer: _0x5b37ef.wssServer,
        ..._0x1df2ad
      };
      debugLog("📤 Veri gönderiliyor:", _0x5b6989);
      _0x23cd07.send(JSON.stringify(_0x5b6989));
    }
    let _0x31459b = 0;
    let _0x4e8a4e = [];
    const _0x29d074 = 100;
    const _0x520c9d = 10;
    function _0x2ecaf7() {
      if (_0x4e8a4e.length > 0) {
        const _0x34296e = _0x4e8a4e.splice(0, _0x520c9d);
        _0x4086ad("playerUpdate", {
          batch: _0x34296e
        });
      }
    }
    setInterval(() => {
      _0x2ecaf7();
    }, _0x29d074);
    function _0x58723c(_0x1b3501, _0x53f416) {
      const _0x39004c = Date.now();
      if (_0x39004c - _0x31459b < 100) {
        return;
      }
      _0x31459b = _0x39004c;
      if (!_0x5b37ef.teamCode || _0x5b37ef.teamCode === "") {
        debugLog("Jugador " + _0x5b37ef.id_user + " no tiene teamCode. No se enviará la actualización de posición.");
        return;
      }
      _0x5b37ef.playerX = _0x1b3501;
      _0x5b37ef.playerY = _0x53f416;
      _0x4e8a4e.push({
        x: _0x1b3501,
        y: _0x53f416
      });
      debugLog("Jugador " + _0x5b37ef.id_user + " se movió a (" + _0x1b3501 + ", " + _0x53f416 + ")");
    }
    function _0x4a70df(_0x1c3f29, _0xd99d97) {
      _0x4086ad("playerDeath", {
        hskill: {
          hs: _0x1c3f29,
          kill: _0xd99d97
        }
      });
      debugLog("Jugador " + _0x5b37ef.id_user + " ha muerto.");
    }
    function _0x38f52a(_0x3f2b49, _0x2c62ca) {
      debugLog("🟡 sendHSKillUpdate çağrıldı");
      _0x4086ad("hsKillUpdate", {
        hskill: {
          hs: _0x3f2b49,
          kill: _0x2c62ca
        }
      });
      debugLog("🟢 Gönderildi HS: " + _0x3f2b49 + ", Kill: " + _0x2c62ca);
      debugLog("Jugador " + _0x5b37ef.id_user + " HS/Kill actualizado: HS " + _0x3f2b49 + ", Kill " + _0x2c62ca);
    }
    var _0x1c4d62;
    let _0x1a98d3 = {
      s_l: "https://wormx.store",
      fullscreen: null,
      headshot: 0,
      s_headshot: 0,
      mobile: false,
      mo: 1,
      mo1: {
        x: -1,
        y: -1
      },
      mo2: {
        x: -1,
        y: -1
      },
      s_kill: 0,
      kill: 0,
      died: 0,
      saveGame: false,
      forceUseLocalImages: false,
      localStorageEnabled: true,
      pm: {},
      joystick: _0x2cbd14.joystick,
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
      c_1: "wft",
      c_2: "Teamwft",
      c_3: "teamwft",
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
      s_w: false,
      s_n: "",
      v_z: 0,
      h: false,
      sn: true,
      s: false,
      hz: false,
      fz: true,
      tt: false,
      vh: false,
      vp: false,
      iq: false,
      ctrl: false,
      r1: true,
      sc: 0,
      wi: 0,
      to: 10,
      sm: 20,
      pi: "",
      pn: "",
      se: {
        a: [],
        b: [],
        c: [],
        d: [],
        e: [],
        f: [],
        g: [],
        h: [],
        i: [],
        j: [],
        k: []
      },
      st: false,
      hh: 0,
      sh: [],
      ws: [],
      we: [],
      wm: [],
      wg: [],
      wh: [],
      sg: [],
      gg: null,
      ig: -1,
      so: 1,
      re: false,
      dg: null
    };
    let _0x458b72 = localStorage.getItem("SaveGamewft");
    if (_0x458b72 && _0x458b72 !== "null") {
      let _0x50c605 = JSON.parse(_0x458b72);
      for (let _0x31e3de in _0x50c605) {
        _0x1a98d3[_0x31e3de] = _0x50c605[_0x31e3de];
      }
    }
    ;
    if (!_0x1a98d3.favoriteSkins) {
      _0x1a98d3.favoriteSkins = [];
      localStorage.setItem("SaveGamewft", JSON.stringify(_0x1a98d3));
    }
    if (_0x1a98d3.currentFavSkinIndex === undefined) {
      _0x1a98d3.currentFavSkinIndex = 0;
      localStorage.setItem("SaveGamewft", JSON.stringify(_0x1a98d3));
    }
    if (!_0x1a98d3.selectedHats) {
      _0x1a98d3.selectedHats = [];
      localStorage.setItem("SaveGamewft", JSON.stringify(_0x1a98d3));
    }
    if (_0x1a98d3.currentHatIndex === undefined) {
      _0x1a98d3.currentHatIndex = 0;
      localStorage.setItem("SaveGamewft", JSON.stringify(_0x1a98d3));
    }
    if (!window.globalHatTextureCache) {
      window.globalHatTextureCache = {};
    }
    try {
      if (localStorage.SaveGameXT) {
        const _0x56cfcb = JSON.parse(localStorage.SaveGameXT);
        for (const _0x5216cf in _0x56cfcb) {
          if (wftObjects.hasOwnProperty(_0x5216cf)) {
            wftObjects[_0x5216cf] = _0x56cfcb[_0x5216cf];
          }
        }
      }
    } catch (_0x1a8086) {
      console.error("Error loading settings:", _0x1a8086);
    }
    ;
    function _0x2c14d4() {
      try {
        if (typeof localStorage === "undefined") {
          console.error("Wormx Error 3");
          return false;
        }
        var _0x128dc0 = localStorage.getItem("wfti");
        var _0x33960e = localStorage.getItem("wftit");
        if (_0x128dc0 && _0x33960e) {
          if (typeof _0x1a98d3 !== "undefined") {
            _0x1a98d3.v_z = _0x33960e;
            _0x1a98d3.forceUseLocalImages = true;
            localStorage.setItem("SaveGamewft", JSON.stringify(_0x1a98d3));
          }
          return true;
        } else {
          console.log("Wormx Error 2");
          return false;
        }
      } catch (_0x25683f) {
        console.error("Wormx Error 1", _0x25683f);
        return false;
      }
    }
    _0x2c14d4();
    let _0xda46a3 = function () {
      let _0x216440 = false;
      _0x1a98d3.mobile = false;
      var _0x1cfc12 = navigator.userAgent || navigator.vendor || window.opera;
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(_0x1cfc12) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(_0x1cfc12.substr(0, 4))) {
        _0x216440 = true;
        _0x1a98d3.mobile = true;
      }
      return _0x216440;
    };
    let _0x4f8d2b = _0x1a98d3.z || 1;
    let _0x4a5d94 = _0x1a98d3.z;
    Object.defineProperty(_0x1a98d3, "z", {
      get: function () {
        return _0x4a5d94;
      },
      set: function (_0x1937a3) {
        if (Math.abs(_0x1937a3 - _0x4a5d94) > 0.1) {
          console.log("Zoom changing from", _0x4a5d94, "to", _0x1937a3);
          console.trace();
        }
        _0x4a5d94 = _0x1937a3;
      }
    });
    let _0x3f8263 = function (_0x520871) {
      _0x1a98d3.joystick ||= _0x2cbd14.joystick;
      _0x1a98d3.joystick.checked = _0x520871.checked;
      localStorage.setItem("SaveGamewft", JSON.stringify(_0x1a98d3));
    };
    let _0x2e0292 = function (_0x256a66) {
      _0x1a98d3.joystick ||= _0x2cbd14.joystick;
      _0x1a98d3.joystick.color = _0x256a66.value;
      localStorage.setItem("SaveGamewft", JSON.stringify(_0x1a98d3));
    };
    let _0x227252 = function (_0x34ca94) {
      _0x1a98d3.joystick ||= _0x2cbd14.joystick;
      _0x1a98d3.joystick.mode = _0x34ca94.value;
      localStorage.setItem("SaveGamewft", JSON.stringify(_0x1a98d3));
    };
    let _0x59e7a9 = function (_0x3b00f8) {
      _0x1a98d3.joystick ||= _0x2cbd14.joystick;
      _0x1a98d3.joystick.position = {
        left: "75px",
        bottom: "75px"
      };
      if (_0x3b00f8.value === "R") {
        _0x1a98d3.joystick.position = {
          right: "75px",
          bottom: "75px"
        };
      }
      _0x1a98d3.joystick.positionMode = _0x3b00f8.value;
      localStorage.setItem("SaveGamewft", JSON.stringify(_0x1a98d3));
    };
    let _0x42ce38 = function (_0x32424c) {
      _0x1a98d3.joystick ||= _0x2cbd14.joystick;
      _0x1a98d3.joystick.position = {
        left: (parseInt(_0x32424c.value) + 10).toString() + "px",
        bottom: _0x32424c.value + "px"
      };
      if (_0x1a98d3.joystick.positionMode === "R") {
        _0x1a98d3.joystick.position = {
          right: (parseInt(_0x32424c.value) + 10).toString() + "px",
          bottom: _0x32424c.value + "px"
        };
      }
      _0x1a98d3.joystick.pxy = _0x32424c.value;
      localStorage.setItem("SaveGamewft", JSON.stringify(_0x1a98d3));
    };
    let _0x51f831 = function (_0x1a1141) {
      _0x1a98d3.joystick ||= _0x2cbd14.joystick;
      _0x1a98d3.joystick.size = _0x1a1141.value;
      localStorage.setItem("SaveGamewft", JSON.stringify(_0x1a98d3));
    };
    let _0x3f33d6 = function (_0x3c6576, _0x11b427, _0x236bbc, _0x2900f5, _0x2257b2, _0x5bcc2b) {
      let _0x538813 = {
        a: "",
        b: 0,
        c: ""
      };
      if (_0x3c6576 > _0x1a98d3.g * 100 + 100 || _0x3c6576 < _0x1a98d3.g * 10 || _0x3c6576 === undefined) {
        _0x1a98d3.a = _0x3c6576;
        if (_0x3c6576 === undefined) {
          _0x1a98d3.a = Math.floor(Math.random() * (_0x1a98d3.g / 9) + (_0x1a98d3.g - _0x1a98d3.g / 9));
        }
        _0x538813.a = "00";
      } else {
        _0x1a98d3.a = _0x3c6576 - _0x1a98d3.g * 10;
        _0x538813.b = _0x1a98d3.a;
        _0x1a98d3.a = _0x1a98d3.a % (_0x1a98d3.g / 9);
        _0x538813.b = (_0x538813.b - _0x1a98d3.a) / (_0x1a98d3.g / 9) + 1;
        _0x1a98d3.a = _0x1a98d3.a + (_0x1a98d3.g - _0x1a98d3.g / 9);
        _0x538813.a = _0x538813.b.toString(_0x1a98d3.g).padStart(2, 0);
      }
      if (_0x11b427 > _0x1a98d3.g * 20 || _0x11b427 < _0x1a98d3.g / 9 * 100 || _0x11b427 === undefined) {
        if (_0x11b427 > _0x1a98d3.g * 20 && _0x11b427 < _0x1a98d3.g * 30) {
          _0x1a98d3.b = _0x11b427 - _0x1a98d3.g * 20;
          _0x538813.a = _0x538813.a + _0x1a98d3.b.toString(_0x1a98d3.g);
          _0x1a98d3.b = 0;
          _0x538813.c = _0x538813.c + "1";
        } else {
          _0x1a98d3.b = _0x11b427;
          if (_0x11b427 === undefined) {
            _0x1a98d3.b = 0;
          }
          _0x538813.a = _0x538813.a + "0";
          _0x538813.c = _0x538813.c + "0";
        }
      } else {
        _0x1a98d3.b = _0x11b427 - _0x1a98d3.g / 9 * 100 + _0x1a98d3.g / _0x1a98d3.g;
        _0x538813.a = _0x538813.a + _0x1a98d3.b.toString(_0x1a98d3.g);
        _0x1a98d3.b = 0;
        _0x538813.c = _0x538813.c + "0";
      }
      if (_0x236bbc > _0x1a98d3.g * 20 || _0x236bbc < _0x1a98d3.g / 9 * 100 || _0x236bbc === undefined) {
        if (_0x236bbc > _0x1a98d3.g * 20 && _0x236bbc < _0x1a98d3.g * 30) {
          _0x1a98d3.c = _0x236bbc - _0x1a98d3.g * 20;
          _0x538813.a = _0x538813.a + _0x1a98d3.c.toString(_0x1a98d3.g);
          _0x1a98d3.c = 0;
          _0x538813.c = _0x538813.c + "1";
        } else {
          _0x1a98d3.c = _0x236bbc;
          if (_0x236bbc === undefined) {
            _0x1a98d3.c = 0;
          }
          _0x538813.a = _0x538813.a + "0";
          _0x538813.c = _0x538813.c + "0";
        }
      } else {
        _0x1a98d3.c = _0x236bbc - _0x1a98d3.g / 9 * 100 + _0x1a98d3.g / _0x1a98d3.g;
        _0x538813.a = _0x538813.a + _0x1a98d3.c.toString(_0x1a98d3.g);
        _0x1a98d3.c = 0;
        _0x538813.c = _0x538813.c + "0";
      }
      if (_0x2900f5 > _0x1a98d3.g * 20 || _0x2900f5 < _0x1a98d3.g / 9 * 100 || _0x2900f5 === undefined) {
        if (_0x2900f5 > _0x1a98d3.g * 20 && _0x2900f5 < _0x1a98d3.g * 30) {
          _0x1a98d3.d = _0x2900f5 - _0x1a98d3.g * 20;
          if (_0x1a98d3.d.toString(_0x1a98d3.g) === "N") {
            _0x538813.a = _0x538813.a + "0";
          } else {
            _0x538813.a = _0x538813.a + _0x1a98d3.d.toString(_0x1a98d3.g);
          }
          _0x1a98d3.d = 0;
          _0x538813.c = _0x538813.c + "1";
        } else {
          _0x1a98d3.d = _0x2900f5;
          if (_0x2900f5 === undefined) {
            _0x1a98d3.d = 0;
          }
          _0x538813.a = _0x538813.a + "0";
          _0x538813.c = _0x538813.c + "0";
        }
      } else {
        _0x1a98d3.d = _0x2900f5 - _0x1a98d3.g / 9 * 100 + _0x1a98d3.g / _0x1a98d3.g;
        if (_0x1a98d3.d.toString(_0x1a98d3.g) === "N") {
          _0x538813.a = _0x538813.a + "0";
        } else {
          _0x538813.a = _0x538813.a + _0x1a98d3.d.toString(_0x1a98d3.g);
        }
        _0x1a98d3.d = 0;
        _0x538813.c = _0x538813.c + "0";
      }
      if (_0x2257b2 > _0x1a98d3.g * 20 || _0x2257b2 < _0x1a98d3.g / 9 * 100 || _0x2257b2 === undefined) {
        if (_0x2257b2 > _0x1a98d3.g * 20 && _0x2257b2 < _0x1a98d3.g * 30) {
          _0x538813.b = _0x1a98d3.g / _0x1a98d3.g;
          if (_0x2257b2 <= _0x1a98d3.g * 20 + (_0x1a98d3.g - 1)) {
            _0x1a98d3.e = _0x2257b2 - _0x1a98d3.g * 20;
          } else if (_0x2257b2 <= _0x1a98d3.g * 20 + (_0x1a98d3.g - 1) * 2) {
            _0x538813.b = _0x538813.b * 2;
            _0x1a98d3.e = _0x2257b2 - _0x1a98d3.g * 20 - (_0x1a98d3.g - 1);
          } else if (_0x2257b2 <= _0x1a98d3.g * 20 + (_0x1a98d3.g - 1) * 3) {
            _0x1a98d3.e = _0x2257b2 - _0x1a98d3.g * 20 - (_0x1a98d3.g - 1) * 2;
          } else if (_0x2257b2 <= _0x1a98d3.g * 20 + (_0x1a98d3.g - 1) * 4) {
            _0x538813.b = _0x538813.b * 2;
            _0x1a98d3.e = _0x2257b2 - _0x1a98d3.g * 20 - (_0x1a98d3.g - 1) * 3;
          } else {
            _0x1a98d3.e = 0;
          }
          if (_0x1a98d3.e >= _0x1a98d3.g) {
            _0x538813.b = 2;
            _0x1a98d3.e = _0x1a98d3.e - (_0x1a98d3.g - 1);
          }
          _0x538813.a = _0x538813.a + _0x1a98d3.e.toString(_0x1a98d3.g);
          _0x1a98d3.e = 0;
          _0x538813.c = _0x538813.c + "1";
        } else {
          _0x1a98d3.e = _0x2257b2;
          if (_0x2257b2 === undefined) {
            _0x1a98d3.e = 0;
          }
          _0x538813.a = _0x538813.a + "0";
          _0x538813.c = _0x538813.c + "0";
          _0x538813.b = 0;
        }
      } else {
        _0x538813.b = _0x1a98d3.g / _0x1a98d3.g;
        if (_0x2257b2 - _0x1a98d3.g / 9 * 100 + 1 >= _0x1a98d3.g) {
          _0x1a98d3.e = _0x2257b2 - (_0x1a98d3.g / 9 * 100 + (_0x1a98d3.g - 1));
          _0x538813.b = _0x538813.b * 2;
        } else {
          _0x1a98d3.e = _0x2257b2 - _0x1a98d3.g / 9 * 100 + _0x538813.b;
        }
        _0x538813.a = _0x538813.a + _0x1a98d3.e.toString(_0x1a98d3.g);
        _0x1a98d3.e = 0;
        _0x538813.c = _0x538813.c + "0";
      }
      if (_0x538813.a == "000000") {
        _0x1a98d3.f = _0x5bcc2b.substr(0, 22).padEnd(22);
      } else {
        let _0x546a87 = parseInt(_0x538813.c, 2);
        if (_0x2257b2 > 790 && _0x2257b2 <= 860) {
          _0x546a87 += 16;
        }
        if (_0x538813.b <= 1) {
          _0x538813.a = _0x538813.a.substr(0, 5) + "." + _0x538813.a.substr(5, 1);
        } else {
          _0x538813.a = _0x538813.a.substr(0, 4) + "." + _0x538813.a.substr(4, 2);
        }
        if (_0x5bcc2b == "") {
          _0x5bcc2b = ".                       .";
        }
        if (_0x538813.c == "0000") {
          if (_0x5bcc2b.substr(23, 1) == ".") {
            _0x5bcc2b = _0x5bcc2b.substr(0, 23).padEnd(23) + " " + _0x5bcc2b.substr(24, 1).padEnd(1);
          }
          _0x1a98d3.f = (_0x5bcc2b.length >= 32 ? _0x5bcc2b.substr(0, 25) : _0x5bcc2b.substr(0, 25).padEnd(25)) + _0x538813.a;
        } else {
          _0x1a98d3.f = (_0x5bcc2b.length >= 32 ? _0x5bcc2b.substr(0, 23) : _0x5bcc2b.substr(0, 23).padEnd(23)) + "." + _0x546a87.toString(_0x1a98d3.g) + _0x538813.a;
        }
        _0x1a98d3.f = _0x1a98d3.f.replaceAll(" ", "_");
      }
    };
    let _0x25ec2a = function (_0xaf461e) {
      let _0x3a761b;
      try {
        _0x1a98d3.joystick ||= _0x2cbd14.joystick;
        if (_0xda46a3() && _0xaf461e && _0x1a98d3.joystick.checked) {
          (_0x3a761b = nipplejs.create(_0x1a98d3.joystick)).on("move", function (_0x2a031c, _0x1398ed) {
            _0x2cbd14.eie.fo = _0x1398ed.angle.radian <= Math.PI ? _0x1398ed.angle.radian * -1 : Math.PI - (_0x1398ed.angle.radian - Math.PI);
          });
        }
        return _0x3a761b;
      } catch (_0x56a067) {
        console.error(_0x56a067);
      }
    };
    let _0xbbcaaf = function (_0x147661) {
      let _0x5eadbb = {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0,
        f: "",
        g: 0,
        h: "",
        i: ""
      };
      let _0xca1910 = 0;
      _0x5eadbb.h = _0x147661.substr(-9);
      if (_0x5eadbb.h.substr(0, 1) != ".") {
        _0x5eadbb.i = "0000";
      } else if ((_0xca1910 = parseInt(_0x5eadbb.h.substr(1, 1), _0x1a98d3.g)) > 15) {
        _0xca1910 -= 16;
        _0x5eadbb.i = _0xca1910.toString(2).padStart(4, 0);
      } else {
        _0x5eadbb.i = _0xca1910.toString(2).padStart(4, 0);
        _0xca1910 = 0;
      }
      _0x5eadbb.f = _0x147661.substr(-7);
      if (_0x5eadbb.f.substr(0, 2) != "00") {
        _0x5eadbb.a = parseInt(_0x5eadbb.f.substr(0, 2), _0x1a98d3.g);
        _0x5eadbb.a = (_0x5eadbb.a - 1) * (_0x1a98d3.g / 9) + _0x1a98d3.g * 10 - (_0x1a98d3.g - 4);
      }
      if (_0x5eadbb.f.substr(5, 1) == ".") {
        if (_0x5eadbb.f.substr(6, 1) != "0") {
          _0x5eadbb.e = parseInt(_0x5eadbb.f.substr(6, 1), _0x1a98d3.g);
          if (_0x5eadbb.i.substr(3, 1) != "0") {
            if (_0xca1910 > 0) {
              _0x5eadbb.e = _0x5eadbb.e + _0x1a98d3.g * 20 + (_0x1a98d3.g - 1) * 2;
            } else {
              _0x5eadbb.e = _0x5eadbb.e + _0x1a98d3.g * 20;
            }
          } else {
            _0x5eadbb.e = _0x5eadbb.e - 1 + _0x1a98d3.g / 9 * 100;
          }
        }
      } else {
        _0x5eadbb.e = parseInt(_0x5eadbb.f.substr(6, 1), _0x1a98d3.g);
        if (_0x5eadbb.i.substr(3, 1) != "0") {
          if (_0xca1910 > 0) {
            _0x5eadbb.e = _0x5eadbb.e + _0x1a98d3.g * 20 + (_0x1a98d3.g - 1) * 3;
          } else {
            _0x5eadbb.e = _0x5eadbb.e + _0x1a98d3.g * 20 + (_0x1a98d3.g - 1);
          }
        } else {
          _0x5eadbb.e = _0x5eadbb.e + (_0x1a98d3.g / 9 * 100 + (_0x1a98d3.g - 1));
        }
      }
      _0x5eadbb.f = _0x5eadbb.f.replace(".", "");
      if (_0x5eadbb.f.substr(2, 1) != "0") {
        _0x5eadbb.b = parseInt(_0x5eadbb.f.substr(2, 1), _0x1a98d3.g);
        if (_0x5eadbb.i.substr(0, 1) != "0") {
          _0x5eadbb.b = _0x5eadbb.b + _0x1a98d3.g * 20;
        } else {
          _0x5eadbb.b = _0x5eadbb.b - 1 + _0x1a98d3.g / 9 * 100;
        }
      }
      if (_0x5eadbb.f.substr(3, 1) != "0") {
        _0x5eadbb.c = parseInt(_0x5eadbb.f.substr(3, 1), _0x1a98d3.g);
        if (_0x5eadbb.i.substr(1, 1) != "0") {
          _0x5eadbb.c = _0x5eadbb.c + _0x1a98d3.g * 20;
        } else {
          _0x5eadbb.c = _0x5eadbb.c - 1 + _0x1a98d3.g / 9 * 100;
        }
      }
      if (_0x5eadbb.f.substr(4, 1) != "0") {
        _0x5eadbb.d = parseInt(_0x5eadbb.f.substr(4, 1), _0x1a98d3.g);
        if (_0x5eadbb.i.substr(2, 1) != "0") {
          _0x5eadbb.d = _0x5eadbb.d + _0x1a98d3.g * 20;
        } else {
          _0x5eadbb.d = _0x5eadbb.d - 1 + _0x1a98d3.g / 9 * 100;
        }
      }
      return _0x5eadbb;
    };
    let _0x22ef8 = function (_0x337053) {
      return !(_0x337053 > _0x1a98d3.g * 30) && !(_0x337053 < _0x1a98d3.g / 9 * 100) || _0x337053 == 0;
    };
    let _0xaabe1d = function (_0x59ce88) {
      return /^(.{25})(\w{5}\.\w{1})$/.test(_0x59ce88) || /^(.{25})(\w{4}\.\w{2})$/.test(_0x59ce88);
    };
    let _0x1e6116 = function (_0x166e9c) {
      _0x166e9c = _0x166e9c.replaceAll("_", " ");
      if (/^(.{25})(\w{7})$/.test(_0x166e9c)) {
        for (_0x166e9c = _0x166e9c.substr(0, 15).trim(); _0x166e9c.substr(_0x166e9c.length - 1, 1) == ".";) {
          _0x166e9c = _0x166e9c.substr(0, _0x166e9c.length - 1);
        }
        ;
        return _0x166e9c;
      }
      ;
      if (/^(.{25})(\w{5}\.\w{1})$/.test(_0x166e9c) || /^(.{25})(\w{4}\.\w{2})$/.test(_0x166e9c)) {
        if (_0x166e9c.substr(-9).substr(0, 1) != ".") {
          return _0x166e9c.substr(0, 25).trim();
        } else {
          return _0x166e9c.substr(0, 23).trim();
        }
      } else {
        return _0x166e9c;
      }
    };
    _0x1a98d3.loading = true;
    var _0x3be6af = localStorage.getItem("oco");
    localStorage.setItem("ccg_0", "Kill and Headshot stats will be removed?");
    localStorage.setItem("ccg_1", "There was a problem connecting!");
    localStorage.setItem("ccg_2", "Your account has been locked.");
    var _0x193eb2 = localStorage.getItem("wftsw");
    var _0x3271a1 = localStorage.getItem("wfti") != null ? localStorage.getItem("wfti").split(",") : localStorage.getItem("wfti");
    var _0x3f4d06 = localStorage.getItem("wftit");
    var _0x308d60 = localStorage.getItem("custom_wear");
    var _0x18b6dd = localStorage.getItem("custom_skin");
    $("<input type=\"hidden\" id=\"port_id\" value=\"\">").insertAfter(".description-text");
    $("<input type=\"hidden\" id=\"port_id_s\" value=\"\">").insertAfter(".description-text");
    $("<input type=\"hidden\" id=\"port_name\" value=\"\">").insertAfter(".description-text");
    $("<input type=\"hidden\" id=\"port_name_s\" value=\"\">").insertAfter(".description-text");
    $("#mm-action-buttons").hover(function () {
      $("#port_id").val("");
      $("#port_name").val("");
    });
    $("#final-share-fb").css("display", "none");
    $("#unl6wj4czdl84o9b").css("display", "none");
    $("#mm-action-guest").css("display", "none");
    $("#mm-menu-cont").css("display", "block");
    $("#mm-bottom-buttons").css("display", "block");
    $("#mm-player-info").css("display", "block");
    $("#mm-player-avatar").after();
    $("#mm-player-info").css("display", "block");
    $("#relojHelp").css("position", "absolute");
    $("#relojHelp").css("top", "12px");
    $("#relojHelp").css("left", "5px");
    $("#delete-account-view").css("display", "none");
    var _0xd66ce6 = null;
    var _0x598970 = null;
    var _0x12badb = false;
    var _0x93ba91 = 55;
    var _0x39f5db = 1;
    var _0x31c07e = true;
    if (_0x3271a1 && _0x3f4d06 && _0x3f4d06 == _0x1a98d3.v_z) ;else {
      fetch("https://wormx.store/store/index.php", {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
          img: "i2"
        })
      }).then(async function (_0x36a9e8) {
        _0x3271a1 = (_0x36a9e8 = await _0x36a9e8.json()).i.split(".");
        localStorage.setItem("wfti", _0x3271a1);
        localStorage.setItem("wftit", _0x36a9e8.vs);
        _0x1a98d3.v_z = _0x36a9e8.vs;
        window.location.reload();
      }).catch(function (_0x522568) {});
    }
    ;
    var _0x30cfd0 = PIXI.Texture.from(_0x1a98d3.s_l + "/get_store.phpitem=close_q.png");
    var _0x4fbc00 = PIXI.Texture.from(_0x1a98d3.s_l + "/get_store.phpitem=open_q.png");
    var _0x1b024d = PIXI.Texture.from(_0x1a98d3.s_l + "/get_store.phpitem=close_w.png");
    var _0xb11556 = PIXI.Texture.from(_0x1a98d3.s_l + "/get_store.phpitem=open_w.png");
    var _0x168c20 = PIXI.Texture.from(_0x1a98d3.s_l + "/get_store.phpitem=close_z.png");
    var _0x3b95dc = PIXI.Texture.from(_0x1a98d3.s_l + "/get_store.phpitem=open_z.png");
    var _0x20cce3 = PIXI.Texture.from(_0x1a98d3.s_l + "/get_store.phpitem=z_i.png");
    var _0xfa38fe = PIXI.Texture.from(_0x1a98d3.s_l + "/get_store.phpitem=z_o.png");
    var _0x2add7a = new PIXI.Sprite(_0x30cfd0);
    _0x2add7a.buttonMode = true;
    _0x2add7a.anchor.set(0.5);
    _0x2add7a.x = -65;
    _0x2add7a.y = 25;
    _0x2add7a.interactive = true;
    _0x2add7a.buttonMode = true;
    var _0x2da668 = new PIXI.Sprite(_0x1b024d);
    _0x2da668.buttonMode = true;
    _0x2da668.anchor.set(0.5);
    _0x2da668.x = -33;
    _0x2da668.y = 25;
    _0x2da668.interactive = true;
    _0x2da668.buttonMode = true;
    var _0x423a56 = new PIXI.Sprite(_0x168c20);
    _0x423a56.buttonMode = true;
    _0x423a56.anchor.set(0.5);
    _0x423a56.x = -1;
    _0x423a56.y = 25;
    _0x423a56.interactive = true;
    _0x423a56.buttonMode = true;
    var _0x23edd9 = new PIXI.Sprite(_0xfa38fe);
    _0x23edd9.buttonMode = true;
    _0x23edd9.anchor.set(0.5);
    _0x23edd9.x = -1;
    _0x23edd9.y = 25;
    _0x23edd9.interactive = true;
    _0x23edd9.buttonMode = true;
    var _0x53d535 = new PIXI.Sprite(_0x20cce3);
    _0x53d535.buttonMode = true;
    _0x53d535.anchor.set(0.5);
    _0x53d535.x = -33;
    _0x53d535.y = 25;
    _0x53d535.interactive = true;
    _0x53d535.buttonMode = true;
    _0x2da668.alpha = 0.25;
    _0x2add7a.alpha = 0.25;
    _0x423a56.alpha = 0.25;
    _0x53d535.alpha = 0.25;
    _0x23edd9.alpha = 0.25;
    var _0x29b35c = new PIXI.Text("SRV wft", {
      fontFamily: "PTSans",
      fill: "#fff009",
      fontSize: 12
    });
    _0x29b35c.anchor.x = 0.5;
    _0x29b35c.position.x = 110;
    var _0x27797a = document.getElementById("game-cont");
    var _0x4103df = document.getElementById("game-view");
    var _0x40372e = $("#mm-params-game-mode");
    _0x158a86.d.getElementById("game-wrap").style.display = "block";
    (function (_0x389fc9, _0x31e59a, _0x476e90) {
      function _0x3167b7(_0x5b2ec8, _0x37310e) {
        return f3(_0x5b2ec8) === _0x37310e;
      }
      function _0x1b82a1() {
        if (f3(_0x31e59a.createElement) != "function") {
          return _0x31e59a.createElement(arguments[0]);
        } else if (_0xd8cafb) {
          return _0x31e59a.createElementNS.call(_0x31e59a, "http://www.w3.org/2000/svg", arguments[0]);
        } else {
          return _0x31e59a.createElement.apply(_0x31e59a, arguments);
        }
      }
      var _0x2ed859 = [];
      var _0xb10cdd = [];
      var _0x1981cc = {
        _version: "3.3.1",
        _config: {
          classPrefix: "",
          enableClasses: true,
          enableJSClass: true,
          usePrefixes: true
        },
        _q: [],
        on: function (_0x4327b6, _0x1f0e36) {
          var _0x5cc10d = this;
          setTimeout(function () {
            _0x1f0e36(_0x5cc10d[_0x4327b6]);
          }, 0);
        },
        addTest: function (_0x5a84cb, _0x3dd346, _0x15a8d6) {
          _0xb10cdd.push({
            name: _0x5a84cb,
            fn: _0x3dd346,
            options: _0x15a8d6
          });
        },
        addAsyncTest: function (_0x209bb5) {
          _0xb10cdd.push({
            name: null,
            fn: _0x209bb5
          });
        }
      };
      function _0x27fb1e() {}
      _0x27fb1e.prototype = _0x1981cc;
      _0x27fb1e = new _0x27fb1e();
      var _0x5db7e7 = false;
      try {
        _0x5db7e7 = "WebSocket" in _0x389fc9 && _0x389fc9.WebSocket.CLOSING === 2;
      } catch (_0x2efd62) {}
      ;
      _0x27fb1e.addTest("websockets", _0x5db7e7);
      var _0x1dea57 = _0x31e59a.documentElement;
      var _0xd8cafb = _0x1dea57.nodeName.toLowerCase() === "svg";
      _0x27fb1e.addTest("canvas", function () {
        var _0x41818 = _0x1b82a1("canvas");
        return !!_0x41818.getContext && !!_0x41818.getContext("2d");
      });
      _0x27fb1e.addTest("canvastext", function () {
        return _0x27fb1e.canvas !== false && f3(_0x1b82a1("canvas").getContext("2d").fillText) == "function";
      });
      (function () {
        var _0x213654;
        var _0xd1f891;
        var _0x439fdf;
        var _0x474582;
        var _0x21149c;
        var _0x5d0dc2;
        var _0x13fc39;
        for (var _0x193f4a in _0xb10cdd) {
          if (_0xb10cdd.hasOwnProperty(_0x193f4a)) {
            _0x213654 = [];
            if ((_0xd1f891 = _0xb10cdd[_0x193f4a]).name && (_0x213654.push(_0xd1f891.name.toLowerCase()), _0xd1f891.options && _0xd1f891.options.aliases && _0xd1f891.options.aliases.length)) {
              for (_0x439fdf = 0; _0x439fdf < _0xd1f891.options.aliases.length; _0x439fdf++) {
                _0x213654.push(_0xd1f891.options.aliases[_0x439fdf].toLowerCase());
              }
            }
            ;
            _0x474582 = _0x3167b7(_0xd1f891.fn, "function") ? _0xd1f891.fn() : _0xd1f891.fn;
            _0x21149c = 0;
            for (; _0x21149c < _0x213654.length; _0x21149c++) {
              if ((_0x13fc39 = (_0x5d0dc2 = _0x213654[_0x21149c]).split(".")).length === 1) {
                _0x27fb1e[_0x13fc39[0]] = _0x474582;
              } else {
                if (!!_0x27fb1e[_0x13fc39[0]] && !(_0x27fb1e[_0x13fc39[0]] instanceof Boolean)) {
                  _0x27fb1e[_0x13fc39[0]] = new Boolean(_0x27fb1e[_0x13fc39[0]]);
                }
                _0x27fb1e[_0x13fc39[0]][_0x13fc39[1]] = _0x474582;
              }
              _0x2ed859.push((_0x474582 ? "" : "no-") + _0x13fc39.join("-"));
            }
          }
        }
      })();
      (function (_0x6de13b) {
        var _0xcdb880 = _0x1dea57.className;
        var _0x2cc38f = _0x27fb1e._config.classPrefix || "";
        if (_0xd8cafb) {
          _0xcdb880 = _0xcdb880.baseVal;
        }
        if (_0x27fb1e._config.enableJSClass) {
          var _0x2de0cc = RegExp("(^|\\s)" + _0x2cc38f + "no-js(\\s|$)");
          _0xcdb880 = _0xcdb880.replace(_0x2de0cc, "$1" + _0x2cc38f + "js$2");
        }
        ;
        if (_0x27fb1e._config.enableClasses) {
          _0xcdb880 += " " + _0x2cc38f + _0x6de13b.join(" " + _0x2cc38f);
          if (_0xd8cafb) {
            _0x1dea57.className.baseVal = _0xcdb880;
          } else {
            _0x1dea57.className = _0xcdb880;
          }
        }
      })(_0x2ed859);
      delete _0x1981cc.addTest;
      delete _0x1981cc.addAsyncTest;
      for (var _0x420eaa = 0; _0x420eaa < _0x27fb1e._q.length; _0x420eaa++) {
        _0x27fb1e._q[_0x420eaa]();
      }
      ;
      _0x389fc9.Modernizr = _0x27fb1e;
    })(window, document);
    if (!Modernizr.websockets || !Modernizr.canvas || !Modernizr.canvastext) {
      _0x158a86.d.getElementById("error-view").style.display = "block";
      return;
    }
    ;
    _0x39b888.f = {
      g: function (_0x1df12a, _0xaee70c, _0x499372) {
        _0x1df12a.stop();
        _0x1df12a.fadeIn(_0xaee70c, _0x499372);
      },
      h: function (_0x9d6928, _0x333494, _0x3e9e48) {
        _0x9d6928.stop();
        _0x9d6928.fadeOut(_0x333494, _0x3e9e48);
      }
    };
    _0x39b888.i = _0x239c2a.b("WebSocket");
    _0x39b888.j = _0x239c2a.b("Float32Array");
    _0x2d221a = (_0x3ac5f6 = _0x239c2a.b("PIXI")).BLEND_MODES;
    _0x3c0f6b = _0x3ac5f6.WRAP_MODES;
    _0x39b888.k = {
      l: _0x3ac5f6.Container,
      m: _0x3ac5f6.BaseTexture,
      n: _0x3ac5f6.Texture,
      o: _0x3ac5f6.Renderer,
      p: _0x3ac5f6.Graphics,
      q: _0x3ac5f6.Shader,
      r: _0x3ac5f6.Rectangle,
      s: _0x3ac5f6.Sprite,
      t: _0x3ac5f6.Text,
      u: _0x3ac5f6.Geometry,
      v: _0x3ac5f6.Mesh,
      w: {
        z: _0x2d221a.ADD,
        A: _0x2d221a.SCREEN,
        B: _0x2d221a.MULTIPLY
      },
      C: {
        D: _0x3c0f6b.REPEAT
      },
      F: {
        G: function (_0x1219de) {
          var _0x1ab313 = _0x1219de.parent;
          if (_0x1ab313 != null) {
            _0x1ab313.removeChild(_0x1219de);
          }
        }
      }
    };
    _0x2171ac.H = {
      I: _0x158a86.c.runtimeHash,
      J: "https://gateway.wormate.io",
      K: "https://resources.wormate.io",
      L: "/images/linelogo-valday2024.png",
      M: "/images/guest-avatar-valday2024.png",
      N: "/images/confetti-valday2024.png",
      O: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
    };
    function _0x347294() {
      function _0x57cfd2(_0x3384ed) {
        var _0x456af5 = _0x3384ed + Math.floor(Math.random() * 65535) * 37;
        _0x3fba9f(_0x4bdabb.d, _0x456af5, 30);
      }
      function _0x9849c5() {
        return parseInt(_0x339a99(_0x4bdabb.d)) % 37;
      }
      return function () {
        var _0x1cef70 = _0x9849c5();
        console.log("init1 pSC: " + _0x1cef70);
        if (!(_0x1cef70 >= 0) || !(_0x1cef70 < _0x1edbd9.e)) {
          _0x1cef70 = Math.max(0, _0x1edbd9.e - 2);
          console.log("init2 pSC: " + _0x1cef70);
        }
        var _0x5585b9 = {};
        _0x59ca60 = _0x5585b9;
        _0x5585b9.f = _0x1edbd9;
        _0x5585b9.g = false;
        _0x5585b9.i = Date.now();
        _0x5585b9.j = 0;
        _0x5585b9.k = 0;
        _0x5585b9.l = null;
        _0x5585b9.m = _0xaeefae;
        _0x5585b9.n = _0x5b90b6;
        _0x5585b9.o = null;
        _0x5585b9.p = null;
        _0x5585b9.q = null;
        _0x5585b9.r = null;
        _0x5585b9.s = null;
        _0x5585b9.t = null;
        _0x5585b9.u = null;
        try {
          if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (_0x2727ae) {
              if (_0x2727ae.coords !== undefined) {
                var _0x57d33b = _0x2727ae.coords;
                if (_0x57d33b.latitude !== undefined && _0x57d33b.longitude !== undefined) {
                  _0x5585b9.l = _0x2727ae;
                }
              }
            }, function (_0x427ef7) {});
          }
        } catch (_0x325dc3) {}
        _0x5585b9.v = function () {
          _0x5585b9.p = new _0x465145();
          _0x5585b9.q = new _0x3e967f();
          _0x5585b9.r = new _0x31335b();
          _0x5585b9.s = new _0x25ae10();
          _0x5585b9.t = new _0x5225d3();
          _0x5585b9.u = new _0x283c2e();
          _0x5585b9.o = new f27();
          _0x5585b9.o.z = new _0x3960fd(_0x5585b9.o);
          _0x5585b9.a();
        };
        _0x5585b9.a = function () {
          try {
            ga("send", "event", "app", window.runtimeHash + "_init");
          } catch (_0x37f0a5) {}
          _0x5585b9.o.A = function () {
            _0x5585b9.o.B();
          };
          _0x5585b9.o.C = function () {
            var _0x32ab56 = _0x5585b9.s.F.D();
            try {
              ga("send", "event", "game", window.runtimeHash + "_start", _0x32ab56);
            } catch (_0x1d0bc1) {}
            _0x5585b9.r.G(_0x31335b.AudioState.H);
            _0x5585b9.s.I(_0x5585b9.s.H.J());
          };
          _0x5585b9.o.B = function () {
            var _0x32274c;
            var _0x17f873;
            try {
              ga("send", "event", "game", window.runtimeHash + "_end");
            } catch (_0x5748ea) {}
            if ($("body").height() >= 430) {
              _0x5585b9.f.K.c();
            }
            _0x5585b9.p.L();
            _0x32274c = Math.floor(_0x5585b9.o.N.M);
            _0x17f873 = _0x5585b9.o.O;
            if (_0x5585b9.u.P()) {
              _0x5585b9.u.Q(function () {
                _0x5585b9.R(_0x32274c, _0x17f873);
              });
            } else {
              _0x5585b9.R(_0x32274c, _0x17f873);
            }
          };
          _0x5585b9.o.S = function (_0x514086) {
            _0x514086(_0x5585b9.s.H.T(), _0x5585b9.s.H.U());
          };
          _0x5585b9.u.V(function () {
            if (_0x5585b9.p.W) {
              _0x5585b9.r.G(_0x31335b.AudioState.F);
              _0x5585b9.s.I(_0x5585b9.s.F);
            }
            if (_0x5585b9.u.P()) {
              try {
                var _0x2e1f4f = _0x5585b9.u.X();
                ga("set", "userId", _0x2e1f4f);
              } catch (_0x2d6707) {}
            }
            if (_0x5585b9.Y() && _0x5585b9.u.P() && !_0x5585b9.u.Z()) {
              _0x5585b9.$(false, false);
              _0x5585b9.s.aa._(new _0x4359e7());
            } else {
              _0x5585b9.ba(true);
            }
          });
          _0x5585b9.p.ca(function () {
            _0x5585b9.r.G(_0x31335b.AudioState.F);
            _0x5585b9.s.I(_0x5585b9.s.F);
          });
          _0x5585b9.q.a(function () {
            _0x5585b9.o.a();
            _0x5585b9.r.a();
            _0x5585b9.s.a();
            _0x5585b9.t.a();
            _0x5585b9.p.a();
            _0x5585b9.u.a();
            if (_0x5585b9.Y() && !_0x5585b9.Z()) {
              _0x5585b9.s.aa._(new _0x4359e7());
            } else {
              _0x5585b9.ba(true);
            }
          });
        };
        _0x5585b9.da = function (_0x58c27a) {
          if (_0x5585b9.u.P()) {
            var _0x562623 = _0x5585b9.u.ea();
            $.get(_0x5dce6e + "/pub/wuid/" + _0x562623 + "/consent/change?value=" + encodeURI(_0x58c27a), function (_0x2bfca6) {});
          }
        };
        _0x5585b9.fa = function (_0x538d2a) {
          var _0x5ade27 = _0x5585b9.u.ea();
          var _0x759d76 = _0x5585b9.s.F.D();
          var _0x2a006b = _0x5585b9.s.F.ga();
          var _0x454094 = _0x5585b9.t.ha(_0x34bccb.ia);
          var _0x37954c = _0x5585b9.t.ha(_0x34bccb.ja);
          var _0xdd885 = _0x5585b9.t.ha(_0x34bccb.ka);
          var _0x21d034 = _0x5585b9.t.ha(_0x34bccb.la);
          var _0x1727e2 = _0x5585b9.t.ha(_0x34bccb.ma);
          var _0x181ac0 = 0;
          if (_0x5585b9.l != null) {
            _0x181ac0 = Math.max(0, Math.min(32767, (_0x5585b9.l.coords.latitude + 90) / 180 * 32768)) << 1 | 1 | Math.max(0, Math.min(65535, (_0x5585b9.l.coords.longitude + 180) / 360 * 65536)) << 16;
          }
          _wrmxt.testSkinCustom(_0x454094);
          let _0x3cf4f2 = "wft_" + (_0x454094 > 9999 ? "0000" : _0x454094.toString().padStart(4, 0)) + (_0x1727e2 > 99999 ? "00000" : _0x1727e2.toString().padStart(5, 0));
          _0x2a006b = (_0x2a006b = (_0x2a006b.length >= 32 ? _0x2a006b.substr(0, 16) : _0x2a006b.substr(0, 16).padEnd(16)) + _0x3cf4f2).trim().replace(/\s/g, "_");
          console.log(_0x2a006b);
          if (theoKzObjects.Incognito) {
            _0x2a006b = "";
          }
          var _0x42b50d = document.getElementById("teamNickname");
          if (_0x42b50d !== null) {
            var _0x128c3b = _0x42b50d.value;
            if (theoKzObjects.hideYouNameInMinimap) {
              _0x5b37ef.nickname = _0x128c3b;
            } else {
              _0x5b37ef.nickname = _0x2a006b;
            }
          } else {
            console.warn("âš ï¸ Advertencia: No se encontrÃ³ el elemento 'teamNickname'.");
          }
          var _0x3a4ccd = _0x5dce6e + "/pub/wuid/" + _0x5ade27 + "/start?gameMode=" + encodeURI(_0x759d76) + "&gh=" + _0x181ac0 + "&nickname=" + encodeURI(_0x2a006b) + "&skinId=" + _wrmxt.validInput(_0x454094) + "&eyesId=" + encodeURI(_0x37954c) + "&mouthId=" + encodeURI(_0xdd885) + "&glassesId=" + encodeURI(_0x21d034) + "&hatId=" + encodeURI(_0x1727e2);
          console.log("urlRequest: " + _0x3a4ccd);
          $.get(_0x3a4ccd, function (_0x287cfd) {
            _0x538d2a(_0x287cfd.server_url);
          });
        };
        _0x5585b9.na = function () {
          _0x1cef70++;
          console.log("start pSC: " + _0x1cef70);
          if (!_0x5585b9.f.oa && _0x1cef70 >= _0x5585b9.f.e) {
            _0x5585b9.s.I(_0x5585b9.s.pa);
            _0x5585b9.r.G(_0x31335b.AudioState.qa);
            _0x5585b9.f.ra.b();
          } else {
            _0x57cfd2(_0x1cef70);
            _0x5585b9.sa();
            lxpdservertext.text = "";
          }
        };
        _0x5585b9.sa = function (_0x5d10c5) {
          lxpdkillcount = 0;
          lxpdhscount = 0;
          if (_0x5585b9.o.ta()) {
            _0x5585b9.s.I(_0x5585b9.s.ua);
            _0x5585b9.r.G(_0x31335b.AudioState.ua);
            var _0x1f953f = _0x5585b9.s.F.D();
            _0x3fba9f(_0x4bdabb.va, _0x1f953f, 30);
            console.log("save gm: " + _0x1f953f);
            var _0x1b34df = _0x5585b9.s.xa.wa();
            _0x3fba9f(_0x4bdabb.ya, _0x1b34df, 30);
            console.log("save sPN: " + _0x1b34df);
            if (_0x5585b9.u.P()) {
              _0x5585b9.fa(function (_0x28c6ae) {
                lxpdlastserver = _0x5d10c5 || _0x28c6ae;
                _0x5b37ef.wssServer = lxpdlastserver;
                _0x5585b9.o.za(_0x5d10c5 || _0x28c6ae, _0x5585b9.u.ea());
              });
            } else {
              var _0x61f826 = _0x5585b9.s.F.ga();
              _0x3fba9f(_0x4bdabb.Aa, _0x61f826, 30);
              var _0x1a364a = _0x5585b9.t.ha(_0x34bccb.ia);
              _0x3fba9f(_0x4bdabb.Ba, _0x1a364a, 30);
              _0x5585b9.fa(function (_0x70f030) {
                lxpdlastserver = _0x5d10c5 || _0x70f030;
                _0x5b37ef.wssServer = lxpdlastserver;
                _0x5585b9.o.Ca(_0x5d10c5 || _0x70f030, _0x61f826, _0x1a364a);
              });
            }
          }
        };
        _0x5585b9.R = function (_0x49d618, _0x202d75) {
          var _0x14cdac = _0x5585b9.s.F.ga();
          _0x5585b9.s.H.Da(_0x49d618, _0x202d75, _0x14cdac);
          _0x5585b9.r.G(_0x31335b.AudioState.Ea);
          _0x5585b9.s.I(_0x5585b9.s.H.Fa());
        };
        _0x5585b9.Ga = function () {
          if (!_0x5585b9.Ha()) {
            return _0x5585b9.t.Ia();
          }
          var _0x413729 = parseInt(_0x339a99(_0x4bdabb.Ba));
          if (_0x413729 != null && _0x5585b9.t.Ja(_0x413729, _0x34bccb.ia)) {
            return _0x413729;
          } else {
            return _0x5585b9.t.Ia();
          }
        };
        _0x5585b9.Ka = function (_0x2ce986) {
          _0x3fba9f(_0x4bdabb.La, !!_0x2ce986, 1800);
        };
        _0x5585b9.Ha = function () {
          return _0x339a99(_0x4bdabb.La) === "true";
        };
        _0x5585b9.ba = function (_0x2876f2) {
          if (_0x2876f2 != _0x5585b9.g) {
            _0x5585b9.g = _0x2876f2;
            var _0x293055 = _0x293055 || {};
            _0x293055.consented = _0x2876f2;
            _0x293055.gdprConsent = _0x2876f2;
            _0x5585b9.f.Ma.a();
            _0x5585b9.f.K.a();
            _0x5585b9.f.ra.a(function (_0x3d8709) {
              if (_0x3d8709) {
                _0x57cfd2(_0x1cef70 = 0);
              }
              _0x5585b9.sa();
            });
          }
        };
        _0x5585b9.$ = function (_0x4026b5, _0x2869ba) {
          _0x3fba9f(_0x4bdabb.Na, _0x4026b5 ? "true" : "false");
          if (_0x2869ba) {
            _0x5585b9.da(_0x4026b5);
          }
          _0x5585b9.ba(_0x4026b5);
        };
        _0x5585b9.Z = function () {
          return _0x339a99(_0x4bdabb.Na) === "true";
        };
        _0x5585b9.Y = function () {
          try {
            return !!window.isIPInEEA || _0x5585b9.l != null && !!_0x27e576.Oa(_0x5585b9.l.coords.latitude, _0x5585b9.l.coords.longitude);
          } catch (_0x54ac1b) {
            return true;
          }
        };
        _0x5585b9.Pa = function () {
          _0x5585b9.j = Date.now();
          _0x5585b9.k = _0x5585b9.j - _0x5585b9.i;
          _0x5585b9.o.Qa(_0x5585b9.j, _0x5585b9.k);
          _0x5585b9.s.Qa(_0x5585b9.j, _0x5585b9.k);
          _0x5585b9.i = _0x5585b9.j;
        };
        _0x5585b9.Ra = function () {
          _0x5585b9.s.Ra();
        };
        return _0x5585b9;
      }();
    }
    var _0x5dce6e = "https://gateway.wormate.io";
    var _0x14731d = "https://resources.wormate.io";
    var _0x5b90b6 = window.I18N_LANG;
    if (!_0x5b90b6) {
      _0x5b90b6 = "en";
    }
    var _0xaeefae = undefined;
    switch (_0x5b90b6) {
      case "uk":
        _0xaeefae = "uk_UA";
        break;
      case "de":
        _0xaeefae = "de_DE";
        break;
      case "fr":
        _0xaeefae = "fr_FR";
        break;
        ءغغغغ;
      case "ru":
        _0xaeefae = "ru_RU";
        break;
      case "es":
        _0xaeefae = "es_ES";
        break;
      default:
        _0xaeefae = "en_US";
    }
    moment.locale(_0xaeefae);
    var _0xc58ba0;
    var _0x4cdef7;
    var _0x1b0c98;
    var _0x44edc7;
    var _0x59ca60 = undefined;
    _0x4cdef7 = (_0xc58ba0 = {
      Yb: eval("PIXI;")
    }).Yb.BLEND_MODES;
    _0x1b0c98 = _0xc58ba0.Yb.WRAP_MODES;
    var _0x2e6f07 = {
      Zb: _0xc58ba0.Yb.Container,
      $b: _0xc58ba0.Yb.BaseTexture,
      _b: _0xc58ba0.Yb.Texture,
      ac: _0xc58ba0.Yb.Renderer,
      bc: _0xc58ba0.Yb.Graphics,
      cc: _0xc58ba0.Yb.Shader,
      dc: _0xc58ba0.Yb.Rectangle,
      ec: _0xc58ba0.Yb.Sprite,
      fc: _0xc58ba0.Yb.Text,
      gc: _0xc58ba0.Yb.Geometry,
      hc: _0xc58ba0.Yb.Mesh,
      ic: {
        jc: _0x4cdef7.ADD
      },
      kc: {
        lc: _0x1b0c98.REPEAT,
        CLAMP: _0xc58ba0.Yb.WRAP_MODES.CLAMP
      }
    };
    var _0xcafdef = Math.PI * 2;
    _0x44edc7 = ["getInt8", "getInt16", "getInt32", "getFloat32", "getFloat64"];
    DataView.prototype.mc = function (_0x1cf629) {
      return this[_0x44edc7[0]](_0x1cf629);
    };
    DataView.prototype.nc = function (_0x573bf5) {
      return this[_0x44edc7[1]](_0x573bf5);
    };
    DataView.prototype.oc = function (_0x47e6f5) {
      return this[_0x44edc7[2]](_0x47e6f5);
    };
    DataView.prototype.pc = function (_0x1cdd34) {
      return this[_0x44edc7[3]](_0x1cdd34);
    };
    DataView.prototype.qc = function (_0x94ab13) {
      return this[_0x44edc7[4]](_0x94ab13);
    };
    _0x2171ac.H.P = ((_0xf8d884 = _0x158a86.c.I18N_LANG) || (_0xf8d884 = "en"), _0xf8d884);
    _0x2171ac.H.Q = function () {
      var _0x5baa74;
      switch (_0x2171ac.H.P) {
        case "uk":
          _0x5baa74 = "uk_UA";
          break;
        case "de":
          _0x5baa74 = "de_DE";
          break;
        case "fr":
          _0x5baa74 = "fr_FR";
          break;
        case "es":
          _0x5baa74 = "es_ES";
          break;
        default:
          _0x5baa74 = "en_US";
      }
      ;
      return _0x5baa74;
    }();
    moment.locale(_0x2171ac.H.Q);
    ooo = null;
    _0x2171ac.S = 6.283185307179586;
    _0x2171ac.T = 3.141592653589793;
    _0x241bad = _0x158a86.c.I18N_MESSAGES;
    _0x239c2a.U = function (_0x79c207) {
      return _0x241bad[_0x79c207];
    };
    _0x239c2a.V = function (_0x25fea8) {
      if (_0x25fea8[_0x2171ac.H.P]) {
        return _0x25fea8[_0x2171ac.H.P];
      } else if (_0x25fea8.en) {
        return _0x25fea8.en;
      } else {
        return _0x25fea8.x;
      }
    };
    _0x239c2a.W = function (_0x1ef975) {
      return encodeURI(_0x1ef975);
    };
    _0x239c2a.X = function (_0xe1fea0, _0x17f90d) {
      return setInterval(_0xe1fea0, _0x17f90d);
    };
    _0x239c2a.Y = function (_0x1c025e, _0x588fd9) {
      return setTimeout(_0x1c025e, _0x588fd9);
    };
    _0x239c2a.Z = function (_0x3e4a44) {
      clearTimeout(_0x3e4a44);
    };
    _0x239c2a.$ = function (_0x503022) {
      var _0x536f0c = (_0x239c2a._(_0x503022) % 60).toString();
      var _0x3e3210 = (_0x239c2a._(_0x503022 / 60) % 60).toString();
      var _0x56d590 = (_0x239c2a._(_0x503022 / 3600) % 24).toString();
      var _0x3f8a83 = _0x239c2a._(_0x503022 / 86400).toString();
      var _0x2328a2 = _0x239c2a.U("util.time.days");
      var _0x35af44 = _0x239c2a.U("util.time.hours");
      var _0x237206 = _0x239c2a.U("util.time.min");
      var _0xfe666a = _0x239c2a.U("util.time.sec");
      if (_0x3f8a83 > 0) {
        return _0x3f8a83 + " " + _0x2328a2 + " " + _0x56d590 + " " + _0x35af44 + " " + _0x3e3210 + " " + _0x237206 + " " + _0x536f0c + " " + _0xfe666a;
      } else if (_0x56d590 > 0) {
        return _0x56d590 + " " + _0x35af44 + " " + _0x3e3210 + " " + _0x237206 + " " + _0x536f0c + " " + _0xfe666a;
      } else if (_0x3e3210 > 0) {
        return _0x3e3210 + " " + _0x237206 + " " + _0x536f0c + " " + _0xfe666a;
      } else {
        return _0x536f0c + " " + _0xfe666a;
      }
    };
    _0x239c2a.aa = function (_0x553089) {
      if (_0x553089.includes("href")) {
        return _0x553089.replaceAll("href", "target=\"_black\" href");
      } else {
        return _0x553089;
      }
    };
    _0x239c2a.ba = function (_0x48a9a9, _0x266d82, _0xcddac6) {
      var _0x3ded99 = _0x158a86.d.createElement("script");
      var _0x12a7ca = true;
      if (f3(_0x266d82) !== "undefined" && _0x266d82 !== null) {
        if (f3(_0x266d82.id) !== "undefined") {
          _0x3ded99.id = _0x266d82.id;
        }
        if (f3(_0x266d82.async) !== "undefined" && _0x266d82.async) {
          _0x3ded99.async = "async";
        }
        if (f3(_0x266d82.defer) !== "undefined" && _0x266d82.defer) {
          _0x3ded99.defer = "defer";
        }
        if (f3(_0x266d82.crossorigin) !== "undefined") {
          _0x3ded99.crossorigin = _0x266d82.crossorigin;
        }
      }
      _0x3ded99.type = "text/javascript";
      _0x3ded99.src = _0x48a9a9;
      if (_0xcddac6) {
        _0x3ded99.onload = _0x3ded99.onreadystatechange = function () {
          _0x12a7ca = false;
          try {
            _0xcddac6();
          } catch (_0x35e0d7) {}
          ;
          _0x3ded99.onload = _0x3ded99.onreadystatechange = null;
        };
      }
      (_0x158a86.d.head || _0x158a86.d.getElementsByTagName("head")[0]).appendChild(_0x3ded99);
    };
    _0x239c2a.ca = function (_0x3cdef5, _0x25d7d7) {
      var _0x48321c = _0x25d7d7;
      _0x48321c.prototype = Object.create(_0x3cdef5.prototype);
      _0x48321c.prototype.constructor = _0x48321c;
      _0x48321c.parent = _0x3cdef5;
      return _0x48321c;
    };
    _0x239c2a.da = function (_0x86953c) {
      if ((_0x86953c %= _0x2171ac.S) < 0) {
        return _0x86953c + _0x2171ac.S;
      } else {
        return _0x86953c;
      }
    };
    _0x239c2a.ea = function (_0x58d483, _0x28e214, _0x17b6de) {
      return _0x239c2a.fa(_0x17b6de, _0x58d483, _0x28e214);
    };
    _0x239c2a.fa = function (_0x344909, _0x341db1, _0x227fdb) {
      if (_0x344909 > _0x227fdb) {
        return _0x227fdb;
      } else if (_0x344909 < _0x341db1) {
        return _0x341db1;
      } else if (Number.isFinite(_0x344909)) {
        return _0x344909;
      } else {
        return (_0x341db1 + _0x227fdb) * 0.5;
      }
    };
    _0x239c2a.ga = function (_0x43a4a5, _0x4b4375, _0x17e24d, _0x5d5d15) {
      if (_0x4b4375 > _0x43a4a5) {
        return _0x239c2a.ha(_0x4b4375, _0x43a4a5 + _0x17e24d * _0x5d5d15);
      } else {
        return _0x239c2a.ia(_0x4b4375, _0x43a4a5 - _0x17e24d * _0x5d5d15);
      }
    };
    _0x239c2a.ja = function (_0x49e1b2, _0x3a2c7b, _0x562214, _0x1d77ab, _0x33f822) {
      return _0x3a2c7b + (_0x49e1b2 - _0x3a2c7b) * Math.pow(1 - _0x1d77ab, _0x562214 / _0x33f822);
    };
    _0x239c2a.ka = function (_0x3dcc29, _0xa50a54, _0x23748e) {
      return _0x3dcc29 - (_0x3dcc29 - _0xa50a54) * _0x23748e;
    };
    _0x239c2a.la = function (_0x2e3e8b, _0x3438de) {
      return Math.sqrt(_0x2e3e8b * _0x2e3e8b + _0x3438de * _0x3438de);
    };
    _0x239c2a.ma = function () {
      return Math.random();
    };
    _0x239c2a._ = function (_0x162176) {
      return Math.floor(_0x162176);
    };
    _0x239c2a.na = function (_0x16cdf7) {
      return Math.abs(_0x16cdf7);
    };
    _0x239c2a.ha = function (_0x151006, _0x1e1ef1) {
      return Math.min(_0x151006, _0x1e1ef1);
    };
    _0x239c2a.ia = function (_0x2c33d4, _0x2b8e7b) {
      return Math.max(_0x2c33d4, _0x2b8e7b);
    };
    _0x239c2a.oa = function (_0x16dd45) {
      return Math.sin(_0x16dd45);
    };
    _0x239c2a.pa = function (_0x1eb38d) {
      return Math.cos(_0x1eb38d);
    };
    _0x239c2a.qa = function (_0xfc435c) {
      return Math.sqrt(_0xfc435c);
    };
    _0x239c2a.ra = function (_0x3bb166, _0x241bd9) {
      return Math.pow(_0x3bb166, _0x241bd9);
    };
    _0x239c2a.sa = function (_0x269231) {
      return Math.atan(_0x269231);
    };
    _0x239c2a.ta = function (_0x3741e7, _0x4aafdb) {
      return Math.atan2(_0x3741e7, _0x4aafdb);
    };
    _0x239c2a.ua = function (_0x2d53aa, _0x4be725, _0x3f62e1, _0xc80416) {
      var _0x1cc70f = _0x4be725 + _0xc80416;
      if (_0x2d53aa == null) {
        throw TypeError();
      }
      ;
      var _0x393683 = _0x2d53aa.length >>> 0;
      var _0x15009e = _0x3f62e1 >> 0;
      var _0x1a8691 = _0x15009e < 0 ? Math.max(_0x393683 + _0x15009e, 0) : Math.min(_0x15009e, _0x393683);
      var _0x419646 = _0x4be725 >> 0;
      var _0x541beb = _0x419646 < 0 ? Math.max(_0x393683 + _0x419646, 0) : Math.min(_0x419646, _0x393683);
      var _0x3a9f5f = _0x1cc70f === undefined ? _0x393683 : _0x1cc70f >> 0;
      var _0x4af945 = Math.min((_0x3a9f5f < 0 ? Math.max(_0x393683 + _0x3a9f5f, 0) : Math.min(_0x3a9f5f, _0x393683)) - _0x541beb, _0x393683 - _0x1a8691);
      var _0x25837a = 1;
      for (_0x541beb < _0x1a8691 && _0x1a8691 < _0x541beb + _0x4af945 && (_0x25837a = -1, _0x541beb += _0x4af945 - 1, _0x1a8691 += _0x4af945 - 1); _0x4af945 > 0;) {
        if (_0x541beb in _0x2d53aa) {
          _0x2d53aa[_0x1a8691] = _0x2d53aa[_0x541beb];
        } else {
          delete _0x2d53aa[_0x1a8691];
        }
        _0x541beb += _0x25837a;
        _0x1a8691 += _0x25837a;
        _0x4af945--;
      }
      ;
      return _0x2d53aa;
    };
    _0x239c2a.va = function (_0x2bebf8, _0x3ceb68) {
      return _0x2bebf8 + (_0x3ceb68 - _0x2bebf8) * _0x239c2a.ma();
    };
    _0x239c2a.wa = function (_0x4f6f09) {
      return _0x4f6f09[parseInt(_0x239c2a.ma() * _0x4f6f09.length)];
    };
    _0x36d3e9 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"].map(function (_0x11dd63) {
      return _0x11dd63.charCodeAt(0);
    });
    _0x239c2a.xa = function (_0x2238f3) {
      if (f3(_0x2238f3) == "undefined") {
        _0x2238f3 = 16;
      }
      var _0x3301a9 = "";
      for (var _0x3605da = 0; _0x3605da < _0x2238f3; _0x3605da++) {
        _0x3301a9 += String.fromCharCode(_0x36d3e9[_0x239c2a._(_0x239c2a.ma() * _0x36d3e9.length)]);
      }
      ;
      return _0x3301a9;
    };
    _0x239c2a.ya = function (_0x248f3c, _0x2283f6, _0x3bd9f8) {
      var _0x46ad4d = _0x3bd9f8 * (1 - _0x2283f6 * 0.5);
      var _0x3e70a1 = Math.min(_0x46ad4d, 1 - _0x46ad4d);
      return _0x239c2a.za(_0x248f3c, _0x3e70a1 ? (_0x3bd9f8 - _0x46ad4d) / _0x3e70a1 : 0, _0x46ad4d);
    };
    _0x239c2a.za = function (_0x333998, _0x3f82f9, _0x5702c8) {
      var _0x5af36e = (1 - _0x239c2a.na(_0x5702c8 * 2 - 1)) * _0x3f82f9;
      var _0x92791e = _0x5af36e * (1 - _0x239c2a.na(_0x333998 / 60 % 2 - 1));
      var _0x122f87 = _0x5702c8 - _0x5af36e / 2;
      if (_0x333998 >= 0 && _0x333998 < 60) {
        return [_0x122f87 + _0x5af36e, _0x122f87 + _0x92791e, _0x122f87];
      } else if (_0x333998 >= 60 && _0x333998 < 120) {
        return [_0x122f87 + _0x92791e, _0x122f87 + _0x5af36e, _0x122f87];
      } else if (_0x333998 >= 120 && _0x333998 < 180) {
        return [_0x122f87, _0x122f87 + _0x5af36e, _0x122f87 + _0x92791e];
      } else if (_0x333998 >= 180 && _0x333998 < 240) {
        return [_0x122f87, _0x122f87 + _0x92791e, _0x122f87 + _0x5af36e];
      } else if (_0x333998 >= 240 && _0x333998 < 300) {
        return [_0x122f87 + _0x92791e, _0x122f87, _0x122f87 + _0x5af36e];
      } else {
        return [_0x122f87 + _0x5af36e, _0x122f87, _0x122f87 + _0x92791e];
      }
    };
    _0x239c2a.Aa = function (_0x2fe78a, _0x4cd82f, _0x43b51d) {
      $.get(_0x2fe78a).fail(_0x4cd82f).done(_0x43b51d);
    };
    _0x239c2a.Ba = function (_0x359d4c, _0x5e3f1b, _0x7c7eef, _0x19a85c) {
      var _0x5f3374 = {
        type: "GET",
        url: _0x359d4c
      };
      var _0x36ee59 = {
        responseType: "arraybuffer"
      };
      _0x36ee59.onprogress = function (_0x31c60a) {
        if (_0x31c60a.lengthComputable) {
          _0x19a85c(_0x31c60a.loaded / _0x31c60a.total * 100);
        }
      };
      _0x5f3374.xhrFields = _0x36ee59;
      $.ajax(_0x5f3374).fail(_0x5e3f1b).done(_0x7c7eef);
    };
    _0x239c2a.Ca = function () {
      return Date.now();
    };
    _0x239c2a.Da = function (_0x16f198, _0x616dc7) {
      for (var _0x3dd235 in _0x16f198) {
        if (_0x16f198.hasOwnProperty(_0x3dd235)) {
          _0x616dc7(_0x3dd235, _0x16f198[_0x3dd235]);
        }
      }
    };
    _0x239c2a.Ea = function (_0x1b3f20) {
      for (var _0x398eaf = _0x1b3f20.length - 1; _0x398eaf > 0; _0x398eaf--) {
        var _0x41abc9 = _0x239c2a._(_0x239c2a.ma() * (_0x398eaf + 1));
        var _0x321bce = _0x1b3f20[_0x398eaf];
        _0x1b3f20[_0x398eaf] = _0x1b3f20[_0x41abc9];
        _0x1b3f20[_0x41abc9] = _0x321bce;
      }
      ;
      return _0x1b3f20;
    };
    _0x158a86.Fa = _0x239c2a.b("ArrayBuffer");
    _0x158a86.Ga = _0x239c2a.b("DataView");
    _0x158a86.Ha = function () {
      function _0x2343c0(_0x592150) {
        this.Ia = _0x592150;
        this.Ja = 0;
      }
      var _0x29a922 = "getInt8";
      _0x2343c0.prototype.Ka = function () {
        var _0x4dbea1 = this.Ia[_0x29a922](this.Ja);
        this.Ja += 1;
        return _0x4dbea1;
      };
      var _0x47bec4 = "getInt16";
      _0x2343c0.prototype.La = function () {
        var _0x3c1cf5 = this.Ia[_0x47bec4](this.Ja);
        this.Ja += 2;
        return _0x3c1cf5;
      };
      var _0x519628 = "getInt32";
      _0x2343c0.prototype.Ma = function () {
        var _0x2cee0d = this.Ia[_0x519628](this.Ja);
        this.Ja += 4;
        return _0x2cee0d;
      };
      var _0x616a42 = "getFloat32";
      _0x2343c0.prototype.Na = function () {
        var _0x14334e = this.Ia[_0x616a42](this.Ja);
        this.Ja += 4;
        return _0x14334e;
      };
      return _0x2343c0;
    }();
    _0x158a86.Oa = function () {
      function _0xcb647b(_0x3ff57f) {
        this.Ia = _0x3ff57f;
        this.Ja = 0;
      }
      var _0x282d5f = "setInt8";
      _0xcb647b.prototype.Pa = function (_0x18b679) {
        this.Ia[_0x282d5f](this.Ja, _0x18b679);
        this.Ja += 1;
      };
      var _0x52bff7 = "setInt16";
      _0xcb647b.prototype.Qa = function (_0x4809d7) {
        this.Ia[_0x52bff7](this.Ja, _0x4809d7);
        this.Ja += 2;
      };
      return _0xcb647b;
    }();
    _0x239c2a.Ra = function () {
      var _0x4d888d = false;
      function _0x595632() {}
      var _0x53e4ba = {};
      var _0x14d93b = "1eaom01c3pxu9wd3";
      var _0x2f1b85 = $("#" + _0x14d93b);
      var _0x2a2172 = "JDHnkHtYwyXyVgG9";
      var _0x3d949f = $("#" + _0x2a2172);
      $("#adbl-continue").click(function () {
        _0x3d949f.fadeOut(500);
        _0x595632(false);
      });
      _0x53e4ba.Sa = function (_0x576ab7) {
        _0x595632 = _0x576ab7;
        if (!_0x4d888d) {
          try {
            aiptag.cmd.player.push(function () {
              var _0x1cc5f5 = {
                AD_WIDTH: 960,
                AD_HEIGHT: 540,
                AD_FULLSCREEN: true,
                AD_CENTERPLAYER: false
              };
              _0x1cc5f5.LOADING_TEXT = "loading advertisement";
              _0x1cc5f5.PREROLL_ELEM = function () {
                return _0x158a86.d.getElementById(_0x14d93b);
              };
              _0x1cc5f5.AIP_COMPLETE = function (_0xaf8960) {
                _0x595632(true);
                _0x39b888.f.h(_0x2f1b85, 1);
                _0x39b888.f.h(_0x3d949f, 1);
                try {
                  ga("send", "event", "preroll", _0x2171ac.H.I + "_complete");
                } catch (_0x35d7a0) {}
              };
              _0x1cc5f5.AIP_REMOVE = function () {};
              aiptag.adplayer = new aipPlayer(_0x1cc5f5);
            });
            _0x4d888d = true;
          } catch (_0x37c2f1) {}
        }
      };
      _0x53e4ba.Ta = function () {
        if (f3(aiptag.adplayer) !== "undefined") {
          try {
            ga("send", "event", "preroll", _0x2171ac.H.I + "_request");
          } catch (_0x34023c) {}
          ;
          _0x39b888.f.g(_0x2f1b85, 1);
          if (!_0x2cbd14.on) {
            aiptag.cmd.player.push(function () {
              aiptag.adplayer.startPreRoll();
            });
          }
        } else {
          try {
            ga("send", "event", "antiadblocker", _0x2171ac.H.I + "_start");
          } catch (_0x3c3e86) {}
          ;
          (function _0x5a2aa3() {
            $("#adbl-1").text(_0x239c2a.U("index.game.antiadblocker.msg1"));
            $("#adbl-2").text(_0x239c2a.U("index.game.antiadblocker.msg2"));
            $("#adbl-3").text(_0x239c2a.U("index.game.antiadblocker.msg3"));
            $("#adbl-4").text(_0x239c2a.U("index.game.antiadblocker.msg4").replace("{0}", 10));
            $("#adbl-continue span").text(_0x239c2a.U("index.game.antiadblocker.continue"));
            _0x39b888.f.h($("#adbl-continue"), 1);
            _0x39b888.f.g(_0x3d949f, 500);
            var _0x3dff5b = 10;
            for (var _0x4d29b1 = 0; _0x4d29b1 < 10; _0x4d29b1++) {
              _0x239c2a.Y(function () {
                _0x3dff5b--;
                $("#adbl-4").text(_0x239c2a.U("index.game.antiadblocker.msg4").replace("{0}", _0x3dff5b));
                if (_0x3dff5b === 0) {
                  try {
                    ga("send", "event", "antiadblocker", _0x2171ac.H.I + "_complete");
                  } catch (_0x51fb42) {}
                  ;
                  _0x39b888.f.g($("#adbl-continue"), 200);
                }
              }, (_0x4d29b1 + 1) * 1000);
            }
          })();
        }
      };
      return _0x53e4ba;
    };
    _0x239c2a.Ua = function (_0x2e97f3, _0xb8d180) {
      var _0x538772 = $("#" + _0x2e97f3);
      var _0x245a8d = _0xb8d180;
      var _0x3bfdc1 = {};
      var _0x1c8800 = false;
      _0x3bfdc1.Sa = function () {
        if (!_0x1c8800) {
          _0x538772.empty();
          _0x538772.append("<div id='" + _0x245a8d + "'></div>");
          try {
            try {
              ga("send", "event", "banner", _0x2171ac.H.I + "_display");
            } catch (_0x3e1b46) {}
            ;
            if (!_0x2cbd14.on) {
              aiptag.cmd.display.push(function () {
                aipDisplayTag.display(_0x245a8d);
              });
            }
            _0x1c8800 = true;
          } catch (_0xf3c2f4) {}
        }
      };
      _0x3bfdc1.Va = function () {
        try {
          try {
            ga("send", "event", "banner", _0x2171ac.H.I + "_refresh");
          } catch (_0x5b82e7) {}
          ;
          if (!_0x2cbd14.on) {
            aiptag.cmd.display.push(function () {
              aipDisplayTag.display(_0x245a8d);
            });
          }
        } catch (_0x555754) {}
      };
      return _0x3bfdc1;
    };
    _0x158a86.Wa = function () {
      function _0x34de97(_0x368fa2, _0xd6c3bd, _0x2f94b6, _0x3d06ad, _0x9df4c7, _0x4d38c0, _0x4776b3, _0x2ef1a4, _0x237c7b, _0x5bf8b5) {
        this.Xa = _0x368fa2;
        this.Ya = _0xd6c3bd;
        this.Za = null;
        this.$a = false;
        this._a = _0x2f94b6;
        this.ab = _0x3d06ad;
        this.bb = _0x9df4c7;
        this.cb = _0x4d38c0;
        this.db = _0x4776b3 || (_0x237c7b || _0x9df4c7) / 2;
        this.eb = _0x2ef1a4 || (_0x5bf8b5 || _0x4d38c0) / 2;
        this.fb = _0x237c7b || _0x9df4c7;
        this.gb = _0x5bf8b5 || _0x4d38c0;
        this.hb = 0.5 - (this.db - this.fb * 0.5) / this.bb;
        this.ib = 0.5 - (this.eb - this.gb * 0.5) / this.cb;
        this.jb = this.bb / this.fb;
        this.kb = this.cb / this.gb;
      }
      _0x34de97.lb = function () {
        return new _0x34de97("", null, 0, 0, 0, 0, 0, 0, 0, 0);
      };
      _0x34de97.mb = function (_0x56b62e, _0x405d0d, _0x55b3f4) {
        return new _0x34de97(_0x56b62e, _0x405d0d, _0x55b3f4.x, _0x55b3f4.y, _0x55b3f4.w, _0x55b3f4.h, _0x55b3f4.px, _0x55b3f4.py, _0x55b3f4.pw, _0x55b3f4.ph);
      };
      _0x34de97.prototype.nb = function () {
        if (!this.$a) {
          if (this.Ya != null) {
            this.Za = new _0x39b888.k.n(this.Ya, new _0x39b888.k.r(this._a, this.ab, this.bb, this.cb));
          }
          this.$a = true;
        }
        return this.Za;
      };
      _0x34de97.prototype.ob = function () {
        if (this.Za != null) {
          this.Za.destroy();
        }
      };
      return _0x34de97;
    }();
    _0x158a86.pb = function () {
      function _0x4e5057(_0x405820, _0x498f00, _0x24cf8d, _0x25bc29, _0x4e7678, _0x34dc31, _0x3c5601, _0x1764b0, _0xcfab8, _0x2ed54d, _0xe298bd, _0x4e7679, _0x219af7, _0x26d1e6, _0x5194cb, _0x214ca9, _0x124e30, _0x28706d) {
        this.qb = _0x405820;
        this.rb = _0x498f00;
        this.sb = _0x24cf8d;
        this.tb = _0x25bc29;
        this.ub = _0x4e7678;
        this.vb = _0x34dc31;
        this.wb = _0x3c5601;
        this.xb = _0x1764b0;
        this.yb = _0xcfab8;
        this.zb = _0x2ed54d;
        this.Ab = _0xe298bd;
        this.Bb = _0x4e7679;
        this.Cb = _0x219af7;
        this.Db = _0x26d1e6;
        this.Eb = _0x5194cb;
        this.Fb = _0x214ca9;
        this.Gb = _0x124e30;
        this.Hb = _0x28706d;
      }
      _0x4e5057.prototype.ob = function () {
        for (var _0x34d6a1 = 0; _0x34d6a1 < this.qb.length; _0x34d6a1++) {
          this.qb[_0x34d6a1].dispose();
          this.qb[_0x34d6a1].destroy();
        }
        ;
        this.qb = [];
        for (var _0x4be43e = 0; _0x4be43e < this.rb.length; _0x4be43e++) {
          this.rb[_0x4be43e].ob();
        }
        ;
        this.rb = [];
      };
      _0x4e5057.lb = function () {
        var _0x328067 = new _0x4e5057.Ib(_0x158a86.Kb.Jb, _0x158a86.Kb.Jb);
        var _0x417b04 = new _0x4e5057.Lb("#ffffff", [_0x158a86.Kb.Jb], [_0x158a86.Kb.Jb]);
        return new _0x4e5057([], [], {}, _0x328067, {}, new _0x4e5057.Mb(_0x158a86.Kb.Jb), {}, _0x417b04, {}, new _0x4e5057.Nb("", _0x417b04, _0x328067), {}, new _0x4e5057.Ob([_0x158a86.Kb.Jb]), {}, new _0x4e5057.Ob([_0x158a86.Kb.Jb]), {}, new _0x4e5057.Ob([_0x158a86.Kb.Jb]), {}, new _0x4e5057.Ob([_0x158a86.Kb.Jb]));
      };
      _0x4e5057.Pb = function (_0x56ae27, _0x337766, _0x4c6dff, _0x4ec6b4) {
        var _0x1991d5 = new _0x4e5057.Ib(_0x158a86.Kb.Jb, _0x158a86.Kb.Jb);
        var _0x5903e3 = new _0x4e5057.Lb("#ffffff", [_0x56ae27], [_0x337766]);
        return new _0x4e5057([], [], {}, _0x1991d5, {}, new _0x4e5057.Mb(_0x158a86.Kb.Jb), {}, _0x5903e3, {}, new _0x4e5057.Nb("", _0x5903e3, _0x1991d5), {}, new _0x4e5057.Ob([_0x4c6dff]), {}, new _0x4e5057.Ob([_0x4ec6b4]), {}, new _0x4e5057.Ob([_0x158a86.Kb.Jb]), {}, new _0x4e5057.Ob([_0x158a86.Kb.Jb]));
      };
      _0x4e5057.Qb = function (_0xe931bf, _0x258d18, _0x551ee7, _0x135219) {
        var _0x5cf4f1 = {};
        _0x239c2a.Da(_0xe931bf.colorDict, function (_0x1b9925, _0x2995f6) {
          _0x5cf4f1[_0x1b9925] = "#" + _0x2995f6;
        });
        var _0x16ebde = {};
        for (var _0x24a18b = 0; _0x24a18b < _0xe931bf.skinArrayDict.length; _0x24a18b++) {
          var _0x13b492 = _0xe931bf.skinArrayDict[_0x24a18b];
          _0x16ebde[_0x13b492.id] = new _0x4e5057.Lb(_0x5cf4f1[_0x13b492.prime], _0x13b492.base.map(function (_0x2e1b6d) {
            return _0x258d18[_0x2e1b6d];
          }), _0x13b492.glow.map(function (_0x2a211f) {
            return _0x258d18[_0x2a211f];
          }));
        }
        ;
        var _0x860c;
        var _0xee940a = _0xe931bf.skinUnknown;
        _0x860c = new _0x4e5057.Lb(_0x5cf4f1[_0xee940a.prime], _0xee940a.base.map(function (_0x478aed) {
          return _0x258d18[_0x478aed];
        }), _0xee940a.glow.map(function (_0x187df1) {
          return _0x258d18[_0x187df1];
        }));
        var _0x195e6e = {};
        _0x239c2a.Da(_0xe931bf.eyesDict, function (_0x3ac0e8, _0x20469f) {
          _0x195e6e[parseInt(_0x3ac0e8)] = new _0x4e5057.Ob(_0x20469f.base.map(function (_0x179282) {
            return _0x258d18[_0x179282.region];
          }));
        });
        var _0x2486af = new _0x4e5057.Ob(_0xe931bf.eyesUnknown.base.map(function (_0xdf0a92) {
          return _0x258d18[_0xdf0a92.region];
        }));
        var _0x30ed42 = {};
        _0x239c2a.Da(_0xe931bf.mouthDict, function (_0xebf5c2, _0x8ba633) {
          _0x30ed42[parseInt(_0xebf5c2)] = new _0x4e5057.Ob(_0x8ba633.base.map(function (_0x22a71a) {
            return _0x258d18[_0x22a71a.region];
          }));
        });
        var _0x396836 = new _0x4e5057.Ob(_0xe931bf.mouthUnknown.base.map(function (_0x2dd254) {
          return _0x258d18[_0x2dd254.region];
        }));
        var _0x5c68d2 = {};
        _0x239c2a.Da(_0xe931bf.hatDict, function (_0x2d1035, _0x50518) {
          _0x5c68d2[parseInt(_0x2d1035)] = new _0x4e5057.Ob(_0x50518.base.map(function (_0x105bb2) {
            return _0x258d18[_0x105bb2.region];
          }));
        });
        var _0x4592b0 = new _0x4e5057.Ob(_0xe931bf.hatUnknown.base.map(function (_0x318282) {
          return _0x258d18[_0x318282.region];
        }));
        var _0x23c157 = {};
        _0x239c2a.Da(_0xe931bf.glassesDict, function (_0x24c3b3, _0x302b69) {
          _0x23c157[parseInt(_0x24c3b3)] = new _0x4e5057.Ob(_0x302b69.base.map(function (_0x591503) {
            return _0x258d18[_0x591503.region];
          }));
        });
        var _0x1b0e7e = new _0x4e5057.Ob(_0xe931bf.glassesUnknown.base.map(function (_0x15981d) {
          return _0x258d18[_0x15981d.region];
        }));
        var _0x2e092d = {};
        _0x239c2a.Da(_0xe931bf.portionDict, function (_0xb24253, _0x54dcd7) {
          _0x2e092d[_0xb24253 = parseInt(_0xb24253)] = new _0x4e5057.Ib(_0x258d18[_0x54dcd7.base], _0x258d18[_0x54dcd7.glow]);
        });
        var _0x3cff0d;
        var _0x4320b1 = _0xe931bf.portionUnknown;
        _0x3cff0d = new _0x4e5057.Ib(_0x258d18[_0x4320b1.base], _0x258d18[_0x4320b1.glow]);
        var _0x14111d = {};
        _0x239c2a.Da(_0xe931bf.abilityDict, function (_0x3753ac, _0x8ac55a) {
          _0x14111d[_0x3753ac = parseInt(_0x3753ac)] = new _0x4e5057.Mb(_0x258d18[_0x8ac55a.base]);
        });
        var _0x3252e0;
        var _0x3e0179 = _0xe931bf.abilityUnknown;
        _0x3252e0 = new _0x4e5057.Mb(_0x258d18[_0x3e0179.base]);
        var _0x1178ab = {};
        _0x239c2a.Da(_0xe931bf.teamDict, function (_0x5182c5, _0x362fce) {
          _0x1178ab[_0x5182c5 = parseInt(_0x5182c5)] = new _0x4e5057.Nb(_0x362fce.title, new _0x4e5057.Lb(_0x5cf4f1[_0x362fce.skin.prime], null, _0x362fce.skin.glow.map(function (_0x4163b9) {
            return _0x258d18[_0x4163b9];
          })), new _0x4e5057.Ib(null, _0x258d18[_0x362fce.portion.glow]));
        });
        var _0x58e2ff = new _0x4e5057.Nb({}, _0x860c, _0x3cff0d);
        return new _0x4e5057(_0x551ee7, _0x135219, _0x2e092d, _0x3cff0d, _0x14111d, _0x3252e0, _0x16ebde, _0x860c, _0x1178ab, _0x58e2ff, _0x195e6e, _0x2486af, _0x30ed42, _0x396836, _0x5c68d2, _0x4592b0, _0x23c157, _0x1b0e7e);
      };
      _0x4e5057.prototype.Rb = function (_0x328dc2) {
        var _0x5d4ebc = _0x239c2a.Ea(Object.keys(this.wb)).slice(0, _0x328dc2);
        var _0xf69c18 = _0x239c2a.Ea(Object.keys(this.Ab)).slice(0, _0x328dc2);
        var _0x4e9ba9 = _0x239c2a.Ea(Object.keys(this.Cb)).slice(0, _0x328dc2);
        var _0x18c5c5 = _0x239c2a.Ea(Object.keys(this.Eb)).slice(0, _0x328dc2);
        var _0x423c6f = _0x239c2a.Ea(Object.keys(this.Gb)).slice(0, _0x328dc2);
        var _0x1612d8 = [];
        for (var _0x411ab0 = 0; _0x411ab0 < _0x328dc2; _0x411ab0++) {
          var _0x2ccab2 = _0x5d4ebc.length > 0 ? _0x5d4ebc[_0x411ab0 % _0x5d4ebc.length] : 0;
          var _0x1e50b2 = _0xf69c18.length > 0 ? _0xf69c18[_0x411ab0 % _0xf69c18.length] : 0;
          var _0xe3c392 = _0x4e9ba9.length > 0 ? _0x4e9ba9[_0x411ab0 % _0x4e9ba9.length] : 0;
          var _0x4803f0 = _0x18c5c5.length > 0 ? _0x18c5c5[_0x411ab0 % _0x18c5c5.length] : 0;
          var _0x35500c = _0x423c6f.length > 0 ? _0x423c6f[_0x411ab0 % _0x423c6f.length] : 0;
          _0x1612d8.push(new _0x158a86.Sb(_0x2ccab2, _0x1e50b2, _0xe3c392, _0x4803f0, _0x35500c));
        }
        ;
        return _0x1612d8;
      };
      _0x4e5057.prototype.Tb = function (_0x1d7ff3) {
        if (this.wb.hasOwnProperty(_0x1d7ff3)) {
          return this.wb[_0x1d7ff3];
        } else {
          return this.xb;
        }
      };
      _0x4e5057.prototype.Ub = function (_0x12876b) {
        if (this.yb.hasOwnProperty(_0x12876b)) {
          return this.yb[_0x12876b];
        } else {
          return this.zb;
        }
      };
      _0x4e5057.prototype.Vb = function (_0x995a53) {
        if (this.Ab.hasOwnProperty(_0x995a53)) {
          return this.Ab[_0x995a53];
        } else {
          return this.Bb;
        }
      };
      _0x4e5057.prototype.Wb = function (_0x2ceb39) {
        if (this.Cb.hasOwnProperty(_0x2ceb39)) {
          return this.Cb[_0x2ceb39];
        } else {
          return this.Db;
        }
      };
      _0x4e5057.prototype.Xb = function (_0x19f9b4) {
        if (this.Gb.hasOwnProperty(_0x19f9b4)) {
          return this.Gb[_0x19f9b4];
        } else {
          return this.Hb;
        }
      };
      _0x4e5057.prototype.Yb = function (_0x1f97b1) {
        if (this.Eb.hasOwnProperty(_0x1f97b1)) {
          return this.Eb[_0x1f97b1];
        } else {
          return this.Fb;
        }
      };
      _0x4e5057.prototype.Zb = function (_0x333a21) {
        if (this.sb.hasOwnProperty(_0x333a21)) {
          return this.sb[_0x333a21];
        } else {
          return this.tb;
        }
      };
      _0x4e5057.prototype.$b = function (_0x4fe957) {
        if (this.ub.hasOwnProperty(_0x4fe957)) {
          return this.ub[_0x4fe957];
        } else {
          return this.vb;
        }
      };
      _0x4e5057.Nb = function _0x5ba428(_0x5e9e05, _0x4b74d8, _0x2d753e) {
        this._b = _0x5e9e05;
        this.ac = _0x4b74d8;
        this.bc = _0x2d753e;
      };
      _0x4e5057.Lb = function _0x18fa4e(_0x59255f, _0x5b7e4c, _0x8c9553) {
        this.cc = _0x59255f;
        this.dc = _0x5b7e4c;
        this.ec = _0x8c9553;
      };
      _0x4e5057.Ob = function _0x12e918(_0x56ab95) {
        this.dc = _0x56ab95;
      };
      _0x4e5057.Ib = function _0x4e6d86(_0x26c20a, _0x291b29) {
        this.dc = _0x26c20a;
        this.ec = _0x291b29;
      };
      _0x4e5057.Mb = function _0x180278(_0x566f68) {
        this.dc = _0x566f68;
      };
      return _0x4e5057;
    }();
    _0x158a86.Kb = function () {
      function _0x3d65d0() {
        var _0x57dc04 = _0x39b888.k.m.from("/images/wear-ability.png");
        this.fc = new _0x158a86.Wa("magnet_ability", _0x57dc04, 158, 86, 67, 124, 148, 63.5, 128, 128);
        this.gc = new _0x158a86.Wa("velocity_ability", _0x57dc04, 158, 4, 87, 74, 203, 63.5, 128, 128);
        this.hc = new _0x158a86.Wa("flex_ability", _0x57dc04, 4, 4, 146, 146, 63.5, 63.5, 128, 128);
        var _0x1cb613 = _0x39b888.k.m.from("https://i.imgur.com/lVsu2MC.png");
        this.pwrFlex0 = new _0x158a86.Wa("flex_ability", _0x1cb613, 158, 4, 87, 74, 203, 63.5, 128, 128);
        var _0x2d06a7 = _0x39b888.k.m.from("https://i.imgur.com/LFiCido.png");
        this.pwrFlex1 = new _0x158a86.Wa("flex_ability", _0x2d06a7, 156, 140, 87, 60, 170, 128.5, 128, 128);
        var _0x329928 = _0x39b888.k.m.from("https://i.imgur.com/LvJ1RxC.png");
        this.pwrFlex2 = new _0x158a86.Wa("flex_ability2", _0x329928, 156, 4, 87, 74, 285, 63.5, 128, 128);
        var _0xe0572c = _0x39b888.k.m.from("https://i.imgur.com/hfx52LI.png");
        this.pwrFlex3 = new _0x158a86.Wa("flex_ability", _0xe0572c, 158, 4, 87, 74, 203, 63.5, 128, 128);
        var _0xc7a92e = _0x39b888.k.m.from("https://i.imgur.com/LFiCido.png");
        this.pwrFlex = new _0x158a86.Wa("flex_ability", _0xc7a92e, 156, 140, 87, 60, 170, 128.5, 128, 128);
        var _0x836475;
        var _0x397342 = _0x39b888.k.m.from("/images/def-look.png");
        var _0xc47535 = new _0x158a86.Wa("def_eyes", _0x397342, 0, 0, 42, 80, 75, 64, 128, 128);
        var _0x418fe = new _0x158a86.Wa("def_mouth", _0x397342, 46, 0, 20, 48, 109, 63, 128, 128);
        var _0x5dd655 = new _0x158a86.Wa("def_skin_glow", _0x397342, 70, 0, 32, 32, 0, 0, 0, 0);
        var _0x49a72c = new _0x158a86.Wa("def_skin_base", _0x397342, 46, 52, 64, 64, 0, 0, 0, 0);
        var _0x468bf7 = _0x158a86.pb.Pb(_0x49a72c, _0x5dd655, _0xc47535, _0x418fe);
        this.ic = new _0x158a86.jc({}, _0x468bf7);
        this.kc = -10000;
        this.lc = -10000;
        this.mc = ((_0x836475 = _0x158a86.c.document.createElement("canvas")).width = 80, _0x836475.height = 80, {
          nc: _0x836475,
          oc: _0x836475.getContext("2d"),
          Za: new _0x39b888.k.n(_0x39b888.k.m.from(_0x836475))
        });
        this.pc = null;
        this.qc = [];
      }
      _0x3d65d0.Jb = _0x158a86.Wa.lb();
      _0x3d65d0.prototype.Sa = function () {};
      _0x3d65d0.prototype.rc = function (_0x14b5d7, _0x19a474, _0x418383) {
        var _0x2feeca = this;
        var _0xf4e5e9 = this.ic.sc();
        if (_0xf4e5e9 > 0 && _0x239c2a.Ca() - this.kc < 1200000) {
          if (_0x14b5d7 != null) {
            _0x14b5d7();
          }
          return;
        }
        ;
        if (this.pc != null && !this.pc.tc()) {
          if (_0x239c2a.Ca() - this.kc < 300000) {
            if (_0x14b5d7 != null) {
              _0x14b5d7();
            }
            return;
          }
          ;
          this.pc.uc();
          this.pc = null;
        }
        ;
        var _0x2af226 = new _0x158a86.vc(_0xf4e5e9);
        _0x2af226.wc(function (_0x5b3f37, _0xdf53f4) {
          if (_0x2af226 === _0x2feeca.pc && _0x418383 != null) {
            _0x418383(_0x5b3f37, _0xdf53f4);
          }
        });
        _0x2af226.xc(function (_0x1069d4) {
          if (_0x2af226 === _0x2feeca.pc && _0x19a474 != null) {
            _0x19a474(_0x1069d4);
          }
        });
        _0x2af226.yc(function () {
          if (_0x2af226 === _0x2feeca.pc && _0x19a474 != null) {
            _0x19a474(Error());
          }
        });
        _0x2af226.zc(function () {
          if (_0x2af226 === _0x2feeca.pc && _0x14b5d7 != null) {
            _0x14b5d7();
          }
        });
        _0x2af226.Ac(function (_0x3f5b86) {
          if (_0x2af226 === _0x2feeca.pc) {
            _0x2feeca.lc = _0x239c2a.Ca();
            _0x2feeca.pc = null;
            _0x2feeca.Bc();
            _0x2feeca.ic.Cc().ob();
            _0x2feeca.ic = _0x3f5b86;
            if (_0x14b5d7 != null) {
              _0x14b5d7();
            }
            _0x2feeca.Dc();
            return;
          }
          ;
          try {
            _0x3f5b86.Cc().ob();
          } catch (_0x4a4a5c) {}
        });
        _0x2af226.Ec();
        this.kc = _0x239c2a.Ca();
        this.pc = _0x2af226;
      };
      _0x3d65d0.prototype.Bc = function () {};
      _0x3d65d0.prototype.Fc = function () {
        return this.ic.sc() > 0;
      };
      _0x3d65d0.prototype.Gc = function () {
        return this.ic.Hc();
      };
      _0x3d65d0.prototype.Ic = function () {
        return this.mc;
      };
      _0x3d65d0.prototype.Jc = function (_0x3235f3) {
        this.qc.push(_0x3235f3);
      };
      _0x3d65d0.prototype.Dc = function () {
        for (var _0x57dde2 = 0; _0x57dde2 < this.qc.length; _0x57dde2++) {
          this.qc[_0x57dde2]();
        }
      };
      _0x3d65d0.prototype.Cc = function () {
        return this.ic.Cc();
      };
      return _0x3d65d0;
    }();
    _0x158a86.Kc = function () {
      function _0x3f1d30(_0x29e4e0) {
        this.Lc = _0x29e4e0;
      }
      _0x3f1d30.prototype.Mc = function (_0x215c63) {
        return this.Lc[_0x215c63];
      };
      _0x3f1d30.Nc = function () {
        function _0x2cc1af() {
          this.Oc = [];
        }
        _0x2cc1af.prototype.Pc = function (_0x21ee5e, _0x4b03d8) {
          for (var _0x262a52 = 0; _0x262a52 < this.Oc.length; _0x262a52++) {
            if (this.Oc[_0x262a52].Qc === _0x21ee5e) {
              throw Error();
            }
          }
          ;
          this.Oc.push(new _0x3f1d30.Rc(_0x21ee5e, _0x4b03d8));
          return this;
        };
        _0x2cc1af.prototype.Sc = function () {
          var _0x13e0a6 = 0;
          for (var _0x5a1fc0 = 0; _0x5a1fc0 < this.Oc.length; _0x5a1fc0++) {
            _0x13e0a6 += this.Oc[_0x5a1fc0].Tc;
          }
          ;
          var _0xa8dd17 = {};
          var _0x5c662a = 0;
          for (var _0xeef02a = 0; _0xeef02a < this.Oc.length; _0xeef02a++) {
            var _0x95ab7 = this.Oc[_0xeef02a];
            _0x95ab7.Tc = _0x95ab7.Tc / _0x13e0a6;
            _0x95ab7.Uc = _0x5c662a;
            _0x95ab7.Vc = _0x5c662a + _0x95ab7.Tc;
            _0x5c662a = _0x95ab7.Vc;
            _0xa8dd17[_0x95ab7.Qc] = _0x95ab7;
          }
          ;
          return new _0x3f1d30(_0xa8dd17);
        };
        return _0x2cc1af;
      }();
      _0x3f1d30.Rc = function () {
        function _0x2fb3c5(_0x46096b, _0x1d9038) {
          this.Qc = _0x46096b;
          this.Tc = _0x1d9038;
          this.Uc = 0;
          this.Vc = 0;
        }
        _0x2fb3c5.prototype.Wc = function (_0x1a92f9) {
          return this.Uc + (this.Vc - this.Uc) * _0x1a92f9;
        };
        return _0x2fb3c5;
      }();
      return _0x3f1d30;
    }();
    _0x158a86.Xc = function () {
      function _0x3abd57() {
        this.Yc = new _0x39b888.k.l();
        this.Yc.sortableChildren = true;
        this.Zc = new _0x438610();
        this.Zc.zIndex = _0x3ca838 * ((_0x13f866 + 1) * 2 + 1 + 3);
        this.$c = 0;
        this._c = Array(_0x13f866);
        this._c[0] = this.ad(0, new _0x158a86.bd(), new _0x158a86.bd());
        for (var _0x1d11b9 = 1; _0x1d11b9 < _0x13f866; _0x1d11b9++) {
          this._c[_0x1d11b9] = this.ad(_0x1d11b9, new _0x158a86.bd(), new _0x158a86.bd());
        }
        ;
        this.cd = 0;
        this.dd = 0;
        this.ed = 0;
      }
      var _0x8cfa6a;
      var _0x3ca838 = 0.001;
      var _0x13f866 = 797;
      var _0x3db9a9 = _0x2171ac.T * 0.1;
      _0x3abd57.fd = _0x13f866;
      _0x3abd57.prototype.ad = function (_0x292b31, _0x3b73ec, _0x3c938f) {
        var _0x317fb2 = new _0xba7b47(_0x3b73ec, _0x3c938f);
        _0x3b73ec.gd.zIndex = _0x3ca838 * ((_0x13f866 - _0x292b31) * 2 + 1 + 3);
        _0x3c938f.gd.zIndex = _0x3ca838 * ((_0x13f866 - _0x292b31) * 2 - 2 + 3);
        return _0x317fb2;
      };
      _0x3abd57.prototype.hd = function (_0x26c47e, _0x4be9cf, _0x3e6091, _0x175df5, _0x33e476, _0x4f8be7, _0x36c2b6, _0x39fbf3) {
        var _0x4c16b7 = _0x3e6091.dc;
        var _0x66a7dc = _0x26c47e === _0x158a86.jd.id ? _0x4be9cf.ac.ec : _0x3e6091.ec;
        if (_0x4c16b7.length > 0 && _0x66a7dc.length > 0) {
          for (var _0x58776e = 0; _0x58776e < this._c.length; _0x58776e++) {
            this._c[_0x58776e].ld.kd(_0x4c16b7[_0x58776e % _0x4c16b7.length]);
            this._c[_0x58776e].md.kd(_0x66a7dc[_0x58776e % _0x66a7dc.length]);
            this._c[_0x58776e].ld.nd(_0x39fbf3);
            this._c[_0x58776e].md.nd(_0x39fbf3);
          }
        }
        ;
        this.Zc.hd(_0x175df5, _0x33e476, _0x4f8be7, _0x36c2b6);
      };
      (_0x8cfa6a = _0x239c2a.ca(_0x39b888.k.l, function () {
        _0x39b888.k.l.call(this);
        this.sortableChildren = true;
        this.od = [];
        this.pd = [];
        this.qd = [];
        this.rd = [];
        this.sd = new _0x39b888.k.l();
        this.td = [];
        for (var _0x3ad941 = 0; _0x3ad941 < 4; _0x3ad941++) {
          var _0x19fb55 = new _0x158a86.bd();
          _0x19fb55.kd(ooo.ud.fc);
          this.sd.addChild(_0x19fb55.gd);
          this.td.push(_0x19fb55);
        }
        ;
        this.sd.zIndex = 0.0011;
        this.addChild(this.sd);
        this.vd();
        this.wd = new _0x158a86.bd();
        this.wd.kd(ooo.ud.gc);
        this.wd.gd.zIndex = 0.001;
        this.addChild(this.wd.gd);
        this.xd();
        this.pwr_flex = new _0x158a86.bd();
        this.pwr_flex.kd(ooo.ud.pwrFlex);
        this.pwr_flex.gd.zIndex = 0.001;
        this.addChild(this.pwr_flex.gd);
        this.disableFlex();
      })).prototype.hd = function (_0x50fa35, _0x380829, _0x233e4e, _0x120e39) {
        this.yd(0.002, this.od, _0x50fa35.dc);
        this.yd(0.003, this.pd, _0x380829.dc);
        this.yd(0.004, this.rd, _0x120e39.dc);
        this.yd(0.005, this.qd, _0x233e4e.dc);
      };
      _0x8cfa6a.prototype.yd = function (_0x37b974, _0x493ae0, _0x469c06) {
        while (_0x469c06.length > _0x493ae0.length) {
          var _0x4ae20e = new _0x158a86.bd();
          _0x493ae0.push(_0x4ae20e);
          this.addChild(_0x4ae20e.zd());
        }
        ;
        while (_0x469c06.length < _0x493ae0.length) {
          _0x493ae0.pop().G();
        }
        ;
        var _0x312218 = _0x37b974;
        for (var _0x4ef1e0 = 0; _0x4ef1e0 < _0x469c06.length; _0x4ef1e0++) {
          _0x312218 += 0.0001;
          var _0x530740 = _0x493ae0[_0x4ef1e0];
          _0x530740.kd(_0x469c06[_0x4ef1e0]);
          _0x530740.gd.zIndex = _0x312218;
        }
      };
      _0x8cfa6a.prototype.Ad = function (_0x13face, _0x54a28b, _0x266805, _0x45590b) {
        this.visible = true;
        this.position.set(_0x13face, _0x54a28b);
        this.rotation = _0x45590b;
        for (var _0x49ef78 = 0; _0x49ef78 < this.od.length; _0x49ef78++) {
          this.od[_0x49ef78].Bd(_0x266805);
        }
        ;
        for (var _0x398a67 = 0; _0x398a67 < this.pd.length; _0x398a67++) {
          this.pd[_0x398a67].Bd(_0x266805);
        }
        ;
        for (var _0x2d510f = 0; _0x2d510f < this.qd.length; _0x2d510f++) {
          this.qd[_0x2d510f].Bd(_0x266805);
        }
        ;
        for (var _0x5980aa = 0; _0x5980aa < this.rd.length; _0x5980aa++) {
          this.rd[_0x5980aa].Bd(_0x266805);
        }
      };
      _0x8cfa6a.prototype.Cd = function () {
        this.visible = false;
      };
      _0x8cfa6a.prototype.Dd = function (_0x49a7fb, _0x3a33f3, _0x31c07d, _0x264b5f) {
        this.sd.visible = true;
        var _0x207ca1 = _0x31c07d / 1000;
        var _0x7ab1ef = 1 / this.td.length;
        for (var _0x5788ee = 0; _0x5788ee < this.td.length; _0x5788ee++) {
          var _0xfe615c = 1 - (_0x207ca1 + _0x7ab1ef * _0x5788ee) % 1;
          this.td[_0x5788ee].gd.alpha = 1 - _0xfe615c;
          this.td[_0x5788ee].Bd(_0x3a33f3 * (0.5 + _0xfe615c * 4.5));
        }
      };
      _0x8cfa6a.prototype.vd = function () {
        this.sd.visible = false;
      };
      _0x8cfa6a.prototype.Ed = function (_0x10973e, _0x42950b, _0x3856ac, _0x4d9a19) {
        this.wd.gd.visible = _0x1a98d3.vp;
        this.wd.gd.alpha = _0x239c2a.ga(this.wd.gd.alpha, _0x10973e.Fd ? 0.9 : 0.2, _0x4d9a19, 0.0025);
        this.wd.Bd(_0x42950b);
      };
      _0x8cfa6a.prototype.xd = function () {
        this.wd.gd.visible = false;
      };
      _0x8cfa6a.prototype.activeFlex = function (_0x3e817b, _0x25b449, _0xaa017e, _0x48d546) {
        var _0x394427 = _0x1a98d3.zigzag !== undefined ? _0x1a98d3.zigzag : 0;
        this.pwr_flex.gd.visible = false;
        if (_0x394427 >= 0 && _0x394427 <= 3) {
          var _0x244fcf = {
            0: ooo.ud.pwrFlex0,
            1: ooo.ud.pwrFlex1,
            2: ooo.ud.pwrFlex2,
            3: ooo.ud.pwrFlex3
          };
          if (_0x244fcf[_0x394427]) {
            this.pwr_flex.kd(_0x244fcf[_0x394427]);
            this.pwr_flex.gd.visible = true;
            this.pwr_flex.gd.alpha = _0x239c2a.ga(this.wd.gd.alpha, _0x3e817b.Fd ? 0.9 : 0.2, _0x48d546, 0.0025);
            this.pwr_flex.Bd(_0x25b449);
          }
        }
      };
      _0x8cfa6a.prototype.disableFlex = function () {
        this.pwr_flex.gd.visible = false;
      };
      var _0x438610 = _0x8cfa6a;
      _0x3abd57.prototype.Gd = function (_0xffa42b) {
        return this.dd + this.ed * _0x239c2a.oa(_0xffa42b * _0x3db9a9 - this.cd);
      };
      _0x3abd57.prototype.Hd = function (_0x2936ee, _0x55eb89, _0x1ead40, _0x4c4198) {
        var _0x124fca;
        var _0x4bfdab;
        var _0x14ea77;
        var _0x541bf4;
        var _0x2422a4;
        var _0x5817a0;
        var _0x2cdd9b;
        var _0x461242;
        var _0x343662 = _0x2936ee.Id * 2;
        var _0x41d7b6 = _0x2936ee.Jd;
        var _0x11af3f = _0x2936ee.Kd;
        var _0x4750e0 = _0x11af3f * 4 - 3;
        var _0x722083 = _0x4750e0;
        this.cd = _0x55eb89 / 400 * _0x2171ac.T;
        this.dd = _0x343662 * 1.5;
        this.ed = _0x343662 * 0.15 * _0x2936ee.Ld;
        if (_0x4c4198(_0x4bfdab = _0x41d7b6[0], _0x5817a0 = _0x41d7b6[1])) {
          _0x14ea77 = _0x41d7b6[2];
          _0x2cdd9b = _0x41d7b6[3];
          _0x541bf4 = _0x41d7b6[4];
          _0x461242 = _0x41d7b6[5];
          var _0x589dfc = _0x239c2a.ta(_0x461242 + _0x5817a0 * 2 - _0x2cdd9b * 3, _0x541bf4 + _0x4bfdab * 2 - _0x14ea77 * 3);
          this.Zc.Ad(_0x4bfdab, _0x5817a0, _0x343662, _0x589dfc);
          this._c[0].Ad(_0x4bfdab, _0x5817a0, _0x343662, this.Gd(0), _0x589dfc);
          this._c[1].Ad(_0x4bfdab * 0.64453125 + _0x14ea77 * 0.45703125 + _0x541bf4 * -0.1015625, _0x5817a0 * 0.64453125 + _0x2cdd9b * 0.45703125 + _0x461242 * -0.1015625, _0x343662, this.Gd(1), _0xba7b47.Md(this._c[0], this._c[2]));
          this._c[2].Ad(_0x4bfdab * 0.375 + _0x14ea77 * 0.75 + _0x541bf4 * -0.125, _0x5817a0 * 0.375 + _0x2cdd9b * 0.75 + _0x461242 * -0.125, _0x343662, this.Gd(2), _0xba7b47.Md(this._c[1], this._c[3]));
          this._c[3].Ad(_0x4bfdab * 0.15234375 + _0x14ea77 * 0.94921875 + _0x541bf4 * -0.1015625, _0x5817a0 * 0.15234375 + _0x2cdd9b * 0.94921875 + _0x461242 * -0.1015625, _0x343662, this.Gd(3), _0xba7b47.Md(this._c[2], this._c[4]));
        } else {
          this.Zc.Cd();
          this._c[0].Cd();
          this._c[1].Cd();
          this._c[2].Cd();
          this._c[3].Cd();
        }
        ;
        var _0x3a38c1 = 4;
        for (var _0x5ef5f2 = 2, _0x56207b = _0x11af3f * 2 - 4; _0x5ef5f2 < _0x56207b; _0x5ef5f2 += 2) {
          if (_0x4c4198(_0x4bfdab = _0x41d7b6[_0x5ef5f2], _0x5817a0 = _0x41d7b6[_0x5ef5f2 + 1])) {
            _0x124fca = _0x41d7b6[_0x5ef5f2 - 2];
            _0x2422a4 = _0x41d7b6[_0x5ef5f2 - 1];
            _0x14ea77 = _0x41d7b6[_0x5ef5f2 + 2];
            _0x2cdd9b = _0x41d7b6[_0x5ef5f2 + 3];
            _0x541bf4 = _0x41d7b6[_0x5ef5f2 + 4];
            _0x461242 = _0x41d7b6[_0x5ef5f2 + 5];
            this._c[_0x3a38c1].Ad(_0x4bfdab, _0x5817a0, _0x343662, this.Gd(_0x3a38c1), _0xba7b47.Md(this._c[_0x3a38c1 - 1], this._c[_0x3a38c1 + 1]));
            _0x3a38c1++;
            this._c[_0x3a38c1].Ad(_0x124fca * -0.06640625 + _0x4bfdab * 0.84375 + _0x14ea77 * 0.2578125 + _0x541bf4 * -0.03515625, _0x2422a4 * -0.06640625 + _0x5817a0 * 0.84375 + _0x2cdd9b * 0.2578125 + _0x461242 * -0.03515625, _0x343662, this.Gd(_0x3a38c1), _0xba7b47.Md(this._c[_0x3a38c1 - 1], this._c[_0x3a38c1 + 1]));
            _0x3a38c1++;
            this._c[_0x3a38c1].Ad(_0x124fca * -0.0625 + _0x4bfdab * 0.5625 + _0x14ea77 * 0.5625 + _0x541bf4 * -0.0625, _0x2422a4 * -0.0625 + _0x5817a0 * 0.5625 + _0x2cdd9b * 0.5625 + _0x461242 * -0.0625, _0x343662, this.Gd(_0x3a38c1), _0xba7b47.Md(this._c[_0x3a38c1 - 1], this._c[_0x3a38c1 + 1]));
            _0x3a38c1++;
            this._c[_0x3a38c1].Ad(_0x124fca * -0.03515625 + _0x4bfdab * 0.2578125 + _0x14ea77 * 0.84375 + _0x541bf4 * -0.06640625, _0x2422a4 * -0.03515625 + _0x5817a0 * 0.2578125 + _0x2cdd9b * 0.84375 + _0x461242 * -0.06640625, _0x343662, this.Gd(_0x3a38c1), _0xba7b47.Md(this._c[_0x3a38c1 - 1], this._c[_0x3a38c1 + 1]));
            _0x3a38c1++;
          } else {
            this._c[_0x3a38c1].Cd();
            _0x3a38c1++;
            this._c[_0x3a38c1].Cd();
            _0x3a38c1++;
            this._c[_0x3a38c1].Cd();
            _0x3a38c1++;
            this._c[_0x3a38c1].Cd();
            _0x3a38c1++;
          }
        }
        ;
        if (_0x4c4198(_0x4bfdab = _0x41d7b6[_0x11af3f * 2 - 4], _0x5817a0 = _0x41d7b6[_0x11af3f * 2 - 3])) {
          _0x124fca = _0x41d7b6[_0x11af3f * 2 - 6];
          _0x2422a4 = _0x41d7b6[_0x11af3f * 2 - 5];
          _0x14ea77 = _0x41d7b6[_0x11af3f * 2 - 2];
          _0x2cdd9b = _0x41d7b6[_0x11af3f * 2 - 1];
          this._c[_0x4750e0 - 5].Ad(_0x4bfdab, _0x5817a0, _0x343662, this.Gd(_0x4750e0 - 5), _0xba7b47.Md(this._c[_0x4750e0 - 6], this._c[_0x4750e0 - 4]));
          this._c[_0x4750e0 - 4].Ad(_0x124fca * -0.1015625 + _0x4bfdab * 0.94921875 + _0x14ea77 * 0.15234375, _0x2422a4 * -0.1015625 + _0x5817a0 * 0.94921875 + _0x2cdd9b * 0.15234375, _0x343662, this.Gd(_0x4750e0 - 4), _0xba7b47.Md(this._c[_0x4750e0 - 5], this._c[_0x4750e0 - 3]));
          this._c[_0x4750e0 - 3].Ad(_0x124fca * -0.125 + _0x4bfdab * 0.75 + _0x14ea77 * 0.375, _0x2422a4 * -0.125 + _0x5817a0 * 0.75 + _0x2cdd9b * 0.375, _0x343662, this.Gd(_0x4750e0 - 3), _0xba7b47.Md(this._c[_0x4750e0 - 4], this._c[_0x4750e0 - 2]));
          this._c[_0x4750e0 - 2].Ad(_0x124fca * -0.1015625 + _0x4bfdab * 0.45703125 + _0x14ea77 * 0.64453125, _0x2422a4 * -0.1015625 + _0x5817a0 * 0.45703125 + _0x2cdd9b * 0.64453125, _0x343662, this.Gd(_0x4750e0 - 2), _0xba7b47.Md(this._c[_0x4750e0 - 3], this._c[_0x4750e0 - 1]));
          this._c[_0x4750e0 - 1].Ad(_0x14ea77, _0x2cdd9b, _0x343662, this.Gd(_0x4750e0 - 1), _0xba7b47.Md(this._c[_0x4750e0 - 2], this._c[_0x4750e0 - 1]));
        } else {
          this._c[_0x4750e0 - 5].Cd();
          this._c[_0x4750e0 - 4].Cd();
          this._c[_0x4750e0 - 3].Cd();
          this._c[_0x4750e0 - 2].Cd();
          this._c[_0x4750e0 - 1].Cd();
        }
        if (this.$c === 0 && _0x722083 > 0) {
          this.Yc.addChild(this.Zc);
        }
        if (this.$c > 0 && _0x722083 === 0) {
          _0x39b888.k.F.G(this.Zc);
        }
        while (this.$c < _0x722083) {
          this.Yc.addChild(this._c[this.$c].ld.zd());
          this.Yc.addChild(this._c[this.$c].md.zd());
          this.$c += 1;
        }
        ;
        while (this.$c > _0x722083) {
          this.$c -= 1;
          this._c[this.$c].md.G();
          this._c[this.$c].ld.G();
        }
        ;
        var _0x4b85fb = _0x2936ee.Nd[_0x158a86.Pd.Od];
        if (this._c[0].Qd() && _0x4b85fb != null && _0x4b85fb.Rd) {
          this.Zc.Dd(_0x2936ee, _0x343662, _0x55eb89, _0x1ead40);
        } else {
          this.Zc.vd();
        }
        var _0x459f71 = _0x2936ee.Nd[_0x158a86.Pd.Sd];
        if (this._c[0].Qd() && _0x459f71 != null && _0x459f71.Rd) {
          this.Zc.Ed(_0x2936ee, _0x343662, _0x55eb89, _0x1ead40);
        } else {
          this.Zc.xd();
        }
        var _0x333514 = _0x2936ee.Nd[_0x158a86.Pd.Yd];
        if (this._c[0].Qd() && _0x333514 != null && _0x333514.Rd) {
          this.Zc.activeFlex(_0x2936ee, _0x343662, _0x55eb89, _0x1ead40);
        } else {
          this.Zc.disableFlex();
        }
      };
      var _0xba7b47 = function () {
        function _0x583855(_0x20e6e4, _0x42b8aa) {
          this.ld = _0x20e6e4;
          this.ld.Td(false);
          this.md = _0x42b8aa;
          this.md.Td(false);
        }
        _0x583855.prototype.Ad = function (_0x32acdd, _0x5acc28, _0x794dc2, _0x392e30, _0x25b5a4) {
          this.ld.Td(true);
          this.ld.Ud(_0x32acdd, _0x5acc28);
          this.ld.Bd(_0x794dc2);
          this.ld.Vd(_0x25b5a4);
          this.md.Td(true);
          this.md.Ud(_0x32acdd, _0x5acc28);
          this.md.Bd(_0x392e30);
          this.md.Vd(_0x25b5a4);
        };
        _0x583855.prototype.Cd = function () {
          this.ld.Td(false);
          this.md.Td(false);
        };
        _0x583855.prototype.Qd = function () {
          return this.ld.Qd();
        };
        _0x583855.Md = function (_0x223dc5, _0x4b1816) {
          return _0x239c2a.ta(_0x223dc5.ld.gd.position.y - _0x4b1816.ld.gd.position.y, _0x223dc5.ld.gd.position.x - _0x4b1816.ld.gd.position.x);
        };
        return _0x583855;
      }();
      return _0x3abd57;
    }();
    _0x158a86.Pd = function () {
      function _0x16e53d(_0x459d8b) {
        this.Wd = _0x459d8b;
        this.Rd = false;
        this.Xd = 1;
      }
      _0x16e53d.Sd = 0;
      _0x16e53d.Yd = 1;
      _0x16e53d.Od = 2;
      _0x16e53d.Zd = 6;
      _0x16e53d.$d = 3;
      _0x16e53d._d = 4;
      _0x16e53d.ae = 5;
      return _0x16e53d;
    }();
    _0x158a86.jc = function () {
      function _0x42ade4(_0xa6a0d8, _0x3afcdc) {
        this.be = _0xa6a0d8;
        this.ce = _0x3afcdc;
      }
      _0x42ade4.de = new _0x42ade4({}, _0x158a86.pb.lb());
      _0x42ade4.prototype.sc = function () {
        return this.be.revision;
      };
      _0x42ade4.prototype.Hc = function () {
        return this.be;
      };
      _0x42ade4.prototype.Cc = function () {
        return this.ce;
      };
      return _0x42ade4;
    }();
    _0x158a86.vc = function () {
      function _0x44c90f(_0x418184) {
        this.ee = (++_0x44c90f.fe, function (_0x18da3c, _0x13ec3f) {});
        this.ge = _0x418184;
        this.he = null;
        this.ie = null;
        this.je = null;
        this.ke = null;
        this.le = null;
        this.me = false;
        this.ne = false;
        this.oe = false;
      }
      _0x44c90f.pe = {
        qe: "0x0",
        re: "0x1",
        se: "0x2",
        te: "0x3",
        ue: "0x4"
      };
      _0x44c90f.fe = 100000;
      _0x44c90f.ve = new _0x158a86.Kc.Nc().Pc(_0x44c90f.pe.qe, 1).Pc(_0x44c90f.pe.re, 10).Pc(_0x44c90f.pe.se, 50).Pc(_0x44c90f.pe.te, 15).Pc(_0x44c90f.pe.ue, 5).Sc();
      _0x44c90f.prototype.Ac = function (_0x1d21ce) {
        this.he = _0x1d21ce;
      };
      _0x44c90f.prototype.zc = function (_0x7e21d2) {
        this.ie = _0x7e21d2;
      };
      _0x44c90f.prototype.xc = function (_0x11fa06) {
        this.je = _0x11fa06;
      };
      _0x44c90f.prototype.yc = function (_0x359301) {
        this.ke = _0x359301;
      };
      _0x44c90f.prototype.wc = function (_0x1bc248) {
        this.le = _0x1bc248;
      };
      _0x44c90f.prototype.tc = function () {
        return this.oe;
      };
      _0x44c90f.prototype.uc = function () {
        this.me = true;
      };
      _0x44c90f.prototype.Ec = function () {
        if (!this.ne) {
          this.ne = true;
          if (this.me) {
            this.we();
            return;
          }
          ;
          this.xe();
        }
      };
      _0x44c90f.prototype.xe = function () {
        var _0x20e26e = this;
        if (this.me) {
          this.we();
          return;
        }
        ;
        $.ajax({
          type: "GET",
          url: _0x2171ac.H.K + "/dynamic/assets/revision.json",
          xhrFields: {
            onprogress: function (_0x567065) {
              var _0x3587e1;
              var _0x2c4c98;
              if (_0x567065.lengthComputable) {
                _0x3587e1 = _0x567065.loaded / _0x567065.total;
                _0x2c4c98 = _0x44c90f.pe.qe;
                _0x20e26e.ye(_0x2c4c98, _0x44c90f.ve.Mc(_0x2c4c98).Wc(_0x3587e1));
              }
            }
          }
        }).fail(function () {
          _0x20e26e.ze(Error());
        }).done(function (_0x436c00) {
          if (_0x436c00 <= _0x20e26e.ge) {
            _0x20e26e.Ae();
            return;
          }
          ;
          _0x20e26e.Be();
        });
      };
      _0x44c90f.prototype.Be = function () {
        var _0x122076 = this;
        if (this.me) {
          this.we();
          return;
        }
        ;
        $.ajax({
          type: "GET",
          url: _0x2171ac.H.K + "/dynamic/assets/registry.json",
          xhrFields: {
            onprogress: function (_0xe80d93) {
              var _0x4ab6d5;
              var _0x166dd5;
              if (_0xe80d93.lengthComputable) {
                _0x4ab6d5 = _0xe80d93.loaded / _0xe80d93.total;
                _0x166dd5 = _0x44c90f.pe.re;
                _0x122076.ye(_0x166dd5, _0x44c90f.ve.Mc(_0x166dd5).Wc(_0x4ab6d5));
              }
            }
          }
        }).fail(function () {
          _0x122076.ze(Error());
        }).done(function (_0x50653c) {
          if (_0x50653c.revision <= _0x122076.ge) {
            _0x122076.Ae();
            return;
          }
          ;
          var _0x7fdbdd = {};
          var _0x3d5c63 = {
            country: "gb",
            v: "v2"
          };
          if (_0x3be6af && _0x3be6af != "gb") {
            _0x3d5c63.country = _0x3be6af;
          }
          _0x7fdbdd = _0x50653c;
          if (_0x193eb2 && _0x3f4d06 && _0x3f4d06 == _0x1a98d3.v_z) {
            _0x7fdbdd = JSON.parse(_0x193eb2);
            (async function () {
              if (_0x18b6dd || _0x308d60 || Array.isArray(_0x1a98d3.dg) && _0x1a98d3.dg.length > 0) {
                _0x7fdbdd = await Ysw(_0x7fdbdd);
              }
              for (let _0x5cda77 in _0x7fdbdd) {
                if (Array.isArray(_0x7fdbdd[_0x5cda77])) {
                  _0x50653c[_0x5cda77] = _0x50653c[_0x5cda77].concat(_0x7fdbdd[_0x5cda77]);
                } else {
                  _0x50653c[_0x5cda77] = {
                    ..._0x50653c[_0x5cda77],
                    ..._0x7fdbdd[_0x5cda77]
                  };
                }
              }
              ;
              _0x122076.Ce(_0x50653c);
            })();
          } else {
            fetch("https://wormx.store/store/index.php", {
              headers: {
                "Content-Type": "application/json"
              },
              method: "POST",
              body: JSON.stringify(_0x3d5c63)
            }).then(async function (_0x2dc354) {
              for (let _0x26de0a in (_0x2dc354 = await _0x2dc354.json()).textureDict) {
                for (let _0x37e3cf in _0x2dc354.textureDict[_0x26de0a]) {
                  if (_0x37e3cf === "file") {
                    _0x2dc354.textureDict[_0x26de0a][_0x37e3cf] = "data:image/png;base64," + _0x2dc354.textureDict[_0x26de0a][_0x37e3cf].substr(_0x2dc354.textureDict[_0x26de0a][_0x37e3cf].length - _0x1a98d3.c_v, _0x1a98d3.c_v) + _0x2dc354.textureDict[_0x26de0a][_0x37e3cf].substr(0, _0x2dc354.textureDict[_0x26de0a][_0x37e3cf].length - _0x1a98d3.c_v);
                  }
                }
              }
              ;
              localStorage.setItem("wftit", _0x1a98d3.v_z);
              if (_0x18b6dd || _0x308d60 || Array.isArray(_0x1a98d3.dg) && _0x1a98d3.dg.length > 0) {
                _0x2dc354 = await Ysw(_0x2dc354);
              }
              for (let _0x30a678 in _0x2dc354) {
                if (Array.isArray(_0x2dc354[_0x30a678])) {
                  _0x50653c[_0x30a678] = _0x50653c[_0x30a678].concat(_0x2dc354[_0x30a678]);
                } else {
                  _0x50653c[_0x30a678] = {
                    ..._0x50653c[_0x30a678],
                    ..._0x2dc354[_0x30a678]
                  };
                }
              }
              ;
              _0x122076.Ce(_0x50653c);
            }).catch(function (_0x4d468f) {
              localStorage.removeItem("custom_wear");
              localStorage.removeItem("custom_skin");
              _0x122076.Ce(_0x50653c);
            });
          }
        });
      };
      _0x44c90f.prototype.Ce = function (_0x28d8db) {
        var _0xea4d6b = this;
        if (this.me) {
          this.we();
          return;
        }
        ;
        var _0x52e900 = [];
        var _0x277e29 = [];
        var _0xbbeeaa = 0;
        for (var _0xc65f1a in _0x28d8db.textureDict) {
          if (_0x28d8db.textureDict.hasOwnProperty(_0xc65f1a)) {
            var _0x164022 = _0x28d8db.textureDict[_0xc65f1a];
            if (_0x164022.custom) {
              var _0x27a6ec = "";
              if (_0x164022.relativePath) {
                _0x27a6ec = _0x164022.relativePath.search("https://lh3.googleusercontent.com") != -1 ? _0x164022.relativePath : _0x1a98d3.s_l + _0x164022.relativePath;
              }
              var _0x46d2c8 = _0x164022.file || _0x27a6ec;
              var _0x1516eb = 0;
              var _0x56bb8f = "";
              var _0x3bcc62 = new _0x44c90f.De(_0xc65f1a, _0x46d2c8, _0x1516eb, _0x56bb8f);
              _0x52e900.push(_0x3bcc62);
              _0x277e29.push(_0x3bcc62);
            } else {
              var _0x46d2c8 = _0x2171ac.H.K + _0x164022.relativePath;
              var _0x1516eb = _0x164022.fileSize;
              var _0x56bb8f = _0x164022.sha256;
              var _0x3bcc62 = new _0x44c90f.De(_0xc65f1a, _0x46d2c8, _0x1516eb, _0x56bb8f);
              _0x52e900.push(_0x3bcc62);
              _0x277e29.push(_0x3bcc62);
              _0xbbeeaa += _0x1516eb;
            }
          }
        }
        ;
        var _0x3c8e2a;
        var _0x252903 = 0;
        function _0x2364b6(_0xcf4231) {
          for (var _0x186043 = 0; _0x186043 < _0x277e29.length; _0x186043++) {
            try {
              _0x158a86.c.URL.revokeObjectURL(_0x277e29[_0x186043].Ee);
            } catch (_0x49bce2) {}
          }
          ;
          _0xea4d6b.ze(_0xcf4231);
        }
        function _0x3c8e23(_0x440c6b) {
          var _0x4d8873;
          var _0x4768d2;
          _0x4d8873 = (_0x252903 + _0x239c2a._(_0x3c8e2a.Fe * _0x440c6b)) / _0xbbeeaa;
          _0x4768d2 = _0x44c90f.pe.se;
          _0xea4d6b.ye(_0x4768d2, _0x44c90f.ve.Mc(_0x4768d2).Wc(_0x4d8873));
        }
        function _0x41fa13(_0x195cfd) {
          var _0x38693d = new Blob([_0x195cfd]);
          _0x3c8e2a.Ee = _0x158a86.c.URL.createObjectURL(_0x38693d);
          _0x252903 += _0x3c8e2a.Fe;
          _0x3e0b31();
        }
        function _0x3e0b31() {
          if (_0x54e6d0 < _0x277e29.length) {
            _0x3c8e2a = _0x277e29[_0x54e6d0++];
            _0xea4d6b.Ge(_0x3c8e2a, _0x2364b6, _0x41fa13, _0x3c8e23);
            return;
          }
          ;
          _0x239c2a.Y(function () {
            return _0xea4d6b.He(_0x28d8db, _0x52e900);
          }, 0);
        }
        var _0x54e6d0 = 0;
        _0x3e0b31();
      };
      _0x44c90f.prototype.Ge = function (_0x248d8a, _0x190b0c, _0x267c5d, _0x37250f) {
        $.ajax({
          type: "GET",
          url: _0x248d8a.Ie,
          xhrFields: {
            responseType: "arraybuffer",
            onprogress: function (_0x4c3ce3) {
              if (_0x4c3ce3.lengthComputable) {
                _0x37250f(_0x4c3ce3.loaded / _0x4c3ce3.total);
              }
            }
          }
        }).fail(function () {
          _0x190b0c(Error());
        }).done(function (_0xb112af) {
          _0x267c5d(_0xb112af);
        });
      };
      _0x44c90f.prototype.He = function (_0x580619, _0x4186c0) {
        var _0xea5ca5 = this;
        if (this.me) {
          this.we();
          return;
        }
        ;
        var _0x32ce63;
        var _0x5bb152;
        var _0x52b1ba = {};
        function _0x5dd539() {
          for (var _0x2b868a = 0; _0x2b868a < _0x4186c0.length; _0x2b868a++) {
            try {
              _0x158a86.c.URL.revokeObjectURL(_0x4186c0[_0x2b868a].Ee);
            } catch (_0x54ad04) {}
          }
          ;
          _0xea5ca5.ze(Error());
        }
        function _0x4d91f7() {
          var _0x32270f;
          var _0x7417a4;
          _0x32270f = _0x593ded / _0x4186c0.length;
          _0x7417a4 = _0x44c90f.pe.te;
          _0xea5ca5.ye(_0x7417a4, _0x44c90f.ve.Mc(_0x7417a4).Wc(_0x32270f));
          _0x52b1ba[_0x32ce63.Je] = new _0x158a86.Ke(_0x32ce63.Ee, _0x5bb152);
          _0x504d0d();
        }
        function _0x504d0d() {
          if (_0x593ded < _0x4186c0.length) {
            _0x32ce63 = _0x4186c0[_0x593ded++];
            (_0x5bb152 = _0x39b888.k.m.from(_0x32ce63.Ee)).on("error", _0x5dd539);
            _0x5bb152.on("loaded", _0x4d91f7);
            return;
          }
          ;
          _0x239c2a.Y(function () {
            return _0xea5ca5.Le(_0x580619, _0x52b1ba);
          }, 0);
        }
        var _0x593ded = 0;
        _0x504d0d();
      };
      _0x44c90f.prototype.Le = function (_0x20bed9, _0x306f17) {
        var _0x32ceda = this;
        var _0x29894f = {};
        var _0x17a24f = 0;
        var _0x3255cf = Object.values(_0x20bed9.regionDict).length;
        _0x239c2a.Da(_0x20bed9.regionDict, function (_0x12baff, _0x51bcc2) {
          var _0x56cb4e;
          var _0x353511;
          var _0x5e1a17 = _0x158a86.Wa.mb(_0x51bcc2.texture + ": " + _0x12baff, _0x306f17[_0x51bcc2.texture].Za, _0x51bcc2);
          _0x29894f[_0x12baff] = _0x5e1a17;
          if (++_0x17a24f % 10 == 0) {
            _0x56cb4e = _0x17a24f / _0x3255cf;
            _0x353511 = _0x44c90f.pe.ue;
            _0x32ceda.ye(_0x353511, _0x44c90f.ve.Mc(_0x353511).Wc(_0x56cb4e));
          }
        });
        var _0xae2249 = Object.values(_0x306f17).map(function (_0x3e7f9e) {
          return _0x3e7f9e.Za;
        });
        var _0x457298 = Object.values(_0x29894f);
        var _0x39b749 = new _0x158a86.jc(_0x20bed9, _0x158a86.pb.Qb(_0x20bed9, _0x29894f, _0xae2249, _0x457298));
        _0x239c2a.Y(function () {
          return _0x32ceda.Me(_0x39b749);
        }, 0);
      };
      _0x44c90f.De = function _0x321148(_0x5cc22f, _0xdceb71, _0x2e2879, _0x162959) {
        this.Je = _0x5cc22f;
        this.Ie = _0xdceb71;
        this.Fe = _0x2e2879;
        this.Ne = _0x162959;
        this.Ee = "";
      };
      _0x44c90f.prototype.Me = function (_0x3041c7) {
        if (this.oe) {
          _0x3041c7.Cc().ob();
          return;
        }
        ;
        this.oe = true;
        var _0x3aa1b4 = this;
        _0x239c2a.Y(function () {
          return _0x3aa1b4.he(_0x3041c7);
        }, 0);
      };
      _0x44c90f.prototype.Ae = function () {
        if (!this.oe) {
          this.oe = true;
          var _0x39e294 = this;
          _0x239c2a.Y(function () {
            return _0x39e294.ie();
          }, 0);
        }
      };
      _0x44c90f.prototype.ze = function (_0x27daaa) {
        if (!this.oe) {
          this.oe = true;
          var _0x7dc1b3 = this;
          _0x239c2a.Y(function () {
            return _0x7dc1b3.je(_0x27daaa);
          }, 0);
        }
      };
      _0x44c90f.prototype.we = function () {
        if (!this.oe) {
          this.oe = true;
          var _0x414759 = this;
          _0x239c2a.Y(function () {
            return _0x414759.ke();
          }, 0);
        }
      };
      _0x44c90f.prototype.ye = function (_0x1e00ed, _0x410ce5) {
        if (!this.oe && !this.me) {
          var _0x27e54f = this;
          _0x239c2a.Y(function () {
            return _0x27e54f.le(_0x1e00ed, _0x410ce5);
          }, 0);
        }
      };
      return _0x44c90f;
    }();
    _0x158a86.Oe = {};
    _0x158a86.Pe = function () {
      function _0x5f1346() {
        this.Qe = _0x158a86.Pe.Se.Re;
        this.Te = false;
        this.Ue = false;
        this.Ve = null;
        this.We = null;
      }
      _0x5f1346.prototype.Sa = function () {};
      _0x5f1346.prototype.Xe = function (_0x473ee3) {
        this.Ue = _0x473ee3;
      };
      _0x5f1346.prototype.Ye = function (_0x3dc6aa) {
        this.Qe = _0x3dc6aa;
        this.Ze();
      };
      _0x5f1346.prototype.$e = function (_0x7d83d5) {
        this.Te = _0x7d83d5;
        this.Ze();
      };
      _0x5f1346.prototype.Ze = function () {};
      _0x5f1346.prototype._e = function (_0x1f3b6, _0x343ac7) {
        if (!ooo.ud.Fc()) {
          return null;
        }
        ;
        var _0x2625b3 = _0x1f3b6[_0x343ac7];
        if (_0x2625b3 == null || _0x2625b3.length === 0) {
          return null;
        } else {
          return _0x2625b3[_0x239c2a._(_0x239c2a.ma() * _0x2625b3.length)].cloneNode();
        }
      };
      _0x5f1346.prototype.af = function (_0x54bff4, _0x404278, _0x491daf) {
        if (this.Ue && !(_0x491daf <= 0)) {
          var _0x1d6909 = this._e(_0x54bff4, _0x404278);
          if (_0x1d6909 != null) {
            _0x1d6909.volume = _0x239c2a.ha(1, _0x491daf);
            _0x1d6909.play();
          }
        }
      };
      _0x5f1346.prototype.bf = function (_0x41d974, _0x2ff5e1) {
        if (this.Qe.cf) {
          this.af(_0x41d974.ef.df, _0x41d974, _0x2ff5e1);
        }
      };
      _0x5f1346.prototype.ff = function (_0x15217a, _0x32a2d3) {
        if (this.Qe.gf) {
          this.af(_0x15217a.ef.hf, _0x15217a, _0x32a2d3);
        }
      };
      _0x5f1346.prototype.if = function () {};
      _0x5f1346.prototype.jf = function () {};
      _0x5f1346.prototype.kf = function () {};
      _0x5f1346.prototype.lf = function () {};
      _0x5f1346.prototype.mf = function () {};
      _0x5f1346.prototype.nf = function () {};
      _0x5f1346.prototype.pf = function (_0x21847b, _0x52d63b, _0x2fc4ae) {};
      _0x5f1346.prototype.qf = function (_0x2fb26a) {};
      _0x5f1346.prototype.rf = function (_0x242050) {};
      _0x5f1346.prototype.sf = function (_0x5b4f86) {};
      _0x5f1346.prototype.tf = function (_0x2624f6) {};
      _0x5f1346.prototype.uf = function (_0xa10d64) {};
      _0x5f1346.prototype.vf = function (_0x45eeba) {};
      _0x5f1346.prototype.wf = function (_0x4aacca) {};
      _0x5f1346.prototype.xf = function (_0x4b0311) {};
      _0x5f1346.prototype.yf = function (_0x5d95d2) {};
      _0x5f1346.prototype.zf = function (_0x116132) {};
      _0x5f1346.prototype.Af = function (_0x21d7ef) {};
      _0x5f1346.prototype.Bf = function (_0x9f4a47) {};
      _0x5f1346.prototype.Cf = function (_0x274dfa) {};
      _0x5f1346.prototype.Df = function (_0x3d0046) {};
      _0x5f1346.prototype.Ef = function (_0x394813, _0x137d12) {};
      _0x5f1346.prototype.Ff = function (_0xb9ee1) {};
      _0x5f1346.prototype.Gf = function (_0x4265be, _0x97f1ec, _0x3c2f47) {};
      _0x5f1346.Se = {
        Re: {
          Hf: false,
          If: false,
          gf: true,
          cf: false
        },
        Jf: {
          Hf: false,
          If: true,
          gf: true,
          cf: false
        },
        Kf: {
          Hf: true,
          If: false,
          gf: false,
          cf: true
        },
        Lf: {
          Hf: false,
          If: false,
          gf: true,
          cf: false
        },
        Mf: {
          Hf: false,
          If: false,
          gf: false,
          cf: false
        }
      };
      return _0x5f1346;
    }();
    _0x158a86.Nf = function () {
      function _0x2a6e8e(_0x102085) {
        this.Of = _0x102085;
        this.nc = _0x102085.get()[0];
        this.Pf = 1;
        this.Qf = 1;
        this.Rf = new _0x158a86.Sf(_0x255d8d, _0x25a752, _0x158a86.Uf.Tf);
        this.Vf = ((_0x534a03 = {}).view = this.nc, _0x534a03.backgroundColor = _0x15771c, _0x534a03.antialias = true, new _0x39b888.k.o(_0x534a03));
        this.Wf = new _0x39b888.k.l();
        this.Wf.sortableChildren = true;
        this.Xf = new _0x39b888.k.l();
        this.Xf.zIndex = 0;
        this.Wf.addChild(this.Xf);
        this.Yf = new _0x158a86.Zf(ooo.ef.$f);
        this.Yf._f.zIndex = 1;
        this.Wf.addChild(this.Yf._f);
        var _0x534a03;
        var _0xbad860 = this.Rf.ag();
        _0xbad860.zIndex = 2;
        this.Wf.addChild(_0xbad860);
        this.bg = new _0x39b888.k.l();
        this.bg.zIndex = 3;
        this.Wf.addChild(this.bg);
        this.cg = [];
        this.dg = [];
        this.eg = [];
        this.Sa();
      }
      var _0x15771c = 0;
      var _0x255d8d = 5;
      var _0x25a752 = 40;
      var _0x4798f8 = [{
        fg: 1,
        gg: 0.5,
        hg: 0.5
      }, {
        fg: 1,
        gg: 0.75,
        hg: 0.5
      }, {
        fg: 1,
        gg: 1,
        hg: 0.5
      }, {
        fg: 0.75,
        gg: 1,
        hg: 0.5
      }, {
        fg: 0.5,
        gg: 1,
        hg: 0.5
      }, {
        fg: 0.5,
        gg: 1,
        hg: 0.75
      }, {
        fg: 0.5,
        gg: 1,
        hg: 1
      }, {
        fg: 0.5,
        gg: 0.75,
        hg: 1
      }, {
        fg: 0.5,
        gg: 0.5,
        hg: 1
      }, {
        fg: 0.75,
        gg: 0.5,
        hg: 1
      }, {
        fg: 1,
        gg: 0.5,
        hg: 1
      }, {
        fg: 1,
        gg: 0.5,
        hg: 0.75
      }];
      _0x2a6e8e.prototype.Sa = function () {
        this.Vf.backgroundColor = _0x15771c;
        this.cg = Array(_0x4798f8.length);
        for (var _0x4982e2 = 0; _0x4982e2 < this.cg.length; _0x4982e2++) {
          this.cg[_0x4982e2] = new _0x39b888.k.s();
          this.cg[_0x4982e2].texture = ooo.ef.ig;
          this.cg[_0x4982e2].anchor.set(0.5);
          this.Xf.addChild(this.cg[_0x4982e2]);
        }
        ;
        this.dg = Array(ooo.ef.jg.length);
        for (var _0x2cc552 = 0; _0x2cc552 < this.dg.length; _0x2cc552++) {
          this.dg[_0x2cc552] = new _0x39b888.k.s();
          this.dg[_0x2cc552].texture = ooo.ef.jg[_0x2cc552];
          this.dg[_0x2cc552].anchor.set(0.5);
          this.bg.addChild(this.dg[_0x2cc552]);
        }
        ;
        this.eg = Array(this.dg.length);
        for (var _0x149055 = 0; _0x149055 < this.eg.length; _0x149055++) {
          var _0x4235a0 = [1, 1, 1];
          this.eg[_0x149055] = {
            kg: _0x239c2a.va(0, _0x2171ac.S),
            lg: _0x239c2a.va(0.09, 0.16) * 0.66,
            mg: _0x239c2a.va(0, 1),
            ng: _0x239c2a.va(0, 1),
            og: 0,
            fg: _0x4235a0[0],
            gg: _0x4235a0[1],
            hg: _0x4235a0[2]
          };
        }
        ;
        this.pg();
        this.qg();
      };
      _0x2a6e8e.Rd = false;
      _0x2a6e8e.rg = function (_0x47db22) {
        _0x2a6e8e.Rd = _0x47db22;
      };
      _0x2a6e8e.prototype.sg = function (_0x42f62c) {
        this.Rf.rg(_0x42f62c);
      };
      _0x2a6e8e.prototype.qg = function () {
        var _0x524162 = _0x239c2a.e();
        this.Pf = this.Of.width();
        this.Qf = this.Of.height();
        this.Vf.resize(this.Pf, this.Qf);
        this.Vf.resolution = _0x524162;
        this.nc.width = _0x524162 * this.Pf;
        this.nc.height = _0x524162 * this.Qf;
        var _0x33d692 = _0x239c2a.ia(this.Pf, this.Qf) * 0.6;
        for (var _0x286d17 = 0; _0x286d17 < this.cg.length; _0x286d17++) {
          this.cg[_0x286d17].width = _0x33d692;
          this.cg[_0x286d17].height = _0x33d692;
        }
        ;
        this.Yf.tg(this.Pf, this.Qf);
        this.Rf.qg();
      };
      _0x2a6e8e.prototype.ug = function (_0x1c071c, _0x3bacf2) {
        if (_0x2a6e8e.Rd) {
          var _0x770548 = _0x1c071c / 1000;
          var _0x318a61 = this.Of.width();
          var _0x261f66 = this.Of.height();
          for (var _0x18c5d6 = 0; _0x18c5d6 < this.cg.length; _0x18c5d6++) {
            var _0x3ce1a4 = _0x4798f8[_0x18c5d6 % _0x4798f8.length];
            var _0x3b6574 = this.cg[_0x18c5d6];
            var _0x22d9ce = _0x18c5d6 / this.cg.length * _0x2171ac.T;
            var _0x500b82 = _0x770548 * 0.5 * 0.12;
            var _0x3f3996 = _0x239c2a.pa((_0x500b82 + _0x22d9ce) * 3) * _0x239c2a.pa(_0x22d9ce) - _0x239c2a.oa((_0x500b82 + _0x22d9ce) * 5) * _0x239c2a.oa(_0x22d9ce);
            var _0xbab076 = _0x239c2a.pa((_0x500b82 + _0x22d9ce) * 3) * _0x239c2a.oa(_0x22d9ce) + _0x239c2a.oa((_0x500b82 + _0x22d9ce) * 5) * _0x239c2a.pa(_0x22d9ce);
            var _0x269eec = 0.2 + _0x239c2a.pa(_0x22d9ce + _0x770548 * 0.075) * 0.2;
            var _0x44ee75 = _0x3ce1a4.fg * 255 << 16 & 16711680 | _0x3ce1a4.gg * 255 << 8 & 65280 | _0x3ce1a4.hg * 255 & 255;
            _0x3b6574.tint = _0x44ee75;
            _0x3b6574.alpha = _0x269eec;
            _0x3b6574.position.set(_0x318a61 * (0.2 + (_0x3f3996 + 1) * 0.5 * 0.6), _0x261f66 * (0.1 + (_0xbab076 + 1) * 0.5 * 0.8));
          }
          ;
          var _0x9bc741 = _0x239c2a.ia(_0x318a61, _0x261f66) * 0.05;
          for (var _0x33286b = 0; _0x33286b < this.dg.length; _0x33286b++) {
            var _0x5b4f3d = this.eg[_0x33286b];
            var _0x2ab47b = this.dg[_0x33286b];
            var _0x2c5691 = _0x2171ac.S * _0x33286b / this.dg.length;
            _0x5b4f3d.mg = 0.2 + (_0x239c2a.pa(_0x770548 * 0.01 + _0x2c5691) + _0x239c2a.pa(_0x770548 * 0.02 * 17 + _0x2c5691) * 0.2 + 1) * 0.6 / 2;
            _0x5b4f3d.ng = 0.1 + (_0x239c2a.oa(_0x770548 * 0.01 + _0x2c5691) + _0x239c2a.oa(_0x770548 * 0.02 * 21 + _0x2c5691) * 0.2 + 1) * 0.8 / 2;
            var _0x500283 = _0x5b4f3d.mg;
            var _0x90f15f = _0x5b4f3d.ng;
            var _0x42a9da = _0x239c2a.fa(_0x239c2a.ra(_0x239c2a.pa((_0x2c5691 + _0x770548 * 0.048) * 1.5), 6), 0, 0.9);
            var _0x15ff29 = (0.4 + (1 + _0x239c2a.oa(_0x2c5691 + _0x770548 * 0.12)) * 0.5 * 1.2) * 1.2;
            var _0x3ac81e = _0x2c5691 + _0x770548 * 0.1;
            var _0x36b59e = _0x5b4f3d.fg * 255 << 16 & 16711680 | _0x5b4f3d.gg * 255 << 8 & 65280 | _0x5b4f3d.hg * 255 & 255;
            _0x2ab47b.alpha = _0x42a9da;
            _0x2ab47b.tint = _0x36b59e;
            _0x2ab47b.position.set(_0x318a61 * _0x500283, _0x261f66 * _0x90f15f);
            _0x2ab47b.rotation = _0x3ac81e;
            var _0x183a44 = _0x2ab47b.texture.width / _0x2ab47b.texture.height;
            _0x2ab47b.width = _0x15ff29 * _0x9bc741;
            _0x2ab47b.height = _0x15ff29 * _0x9bc741 * _0x183a44;
          }
          ;
          this.vg();
          this.Vf.render(this.Wf, null, true);
        }
      };
      _0x2a6e8e.prototype.wg = function () {
        if (ooo.ud.Fc()) {
          var _0x4cc821 = ooo.ud.Cc().Rb(_0x255d8d);
          for (var _0x3384c5 = 0; _0x3384c5 < _0x255d8d; _0x3384c5++) {
            this.Rf.xg(_0x3384c5, _0x4cc821[_0x3384c5]);
          }
        } else {
          var _0x278b56 = _0x239c2a.va(0, 1);
          for (var _0x3305d7 = 0; _0x3305d7 < _0x255d8d; _0x3305d7++) {
            var _0x27be76 = (_0x278b56 + _0x3305d7 / _0x255d8d) % 1;
            var _0x48ca49 = _0x239c2a.za(_0x239c2a._(_0x27be76 * 360), 0.85, 0.5);
            var _0x2a38d7 = _0x48ca49[0] * 255 & 255 | _0x48ca49[1] * 255 << 8 & 65280 | _0x48ca49[2] * 255 << 16 & 16711680;
            var _0x34a84e = "000000" + _0x2a38d7.toString(16);
            _0x34a84e = "#" + _0x34a84e.substring(_0x34a84e.length - 6, _0x34a84e.length);
            this.Rf.yg(_0x3305d7, _0x34a84e);
          }
        }
      };
      _0x2a6e8e.prototype.pg = function () {
        var _0x500915 = _0x239c2a.ha(this.Pf, this.Qf);
        var _0x5e768f = _0x239c2a.Ca();
        for (var _0x5b9754 = 0; _0x5b9754 < _0x255d8d; _0x5b9754++) {
          var _0x1b7d64 = _0x2292ed(_0x5e768f, 0.12, _0x5b9754 / _0x255d8d * _0x2171ac.S);
          _0x1b7d64._a = _0x1b7d64._a * 4;
          _0x1b7d64.ab = _0x1b7d64.ab * 4;
          this.Rf.zg(_0x5b9754, (this.Pf + _0x1b7d64._a * _0x500915) * 0.5, (this.Qf + _0x1b7d64.ab * _0x500915) * 0.5);
        }
      };
      _0x2a6e8e.prototype.vg = function () {
        var _0x430296 = _0x239c2a.ha(this.Pf, this.Qf);
        var _0xf983d3 = _0x239c2a.Ca();
        for (var _0x48b72a = 0; _0x48b72a < _0x255d8d; _0x48b72a++) {
          var _0x4d83a3 = _0x2292ed(_0xf983d3, 0.12, _0x48b72a / _0x255d8d * _0x2171ac.S);
          this.Rf.Ag(_0x48b72a, (this.Pf + _0x4d83a3._a * _0x430296) * 0.5, (this.Qf + _0x4d83a3.ab * _0x430296) * 0.5);
        }
        ;
        this.Rf.Bg();
      };
      function _0x2292ed(_0x17224f, _0x938eb0, _0x44d4d1) {
        var _0xcf207b = _0x17224f / 1000;
        return {
          _a: (_0x239c2a.pa(_0x938eb0 * _0xcf207b + _0x44d4d1) + _0x239c2a.pa(_0x938eb0 * -32 * _0xcf207b + _0x44d4d1) * 0.4 + _0x239c2a.pa(_0x938eb0 * 7 * _0xcf207b + _0x44d4d1) * 0.7) * 0.8,
          ab: (_0x239c2a.oa(_0x938eb0 * _0xcf207b + _0x44d4d1) + _0x239c2a.oa(_0x938eb0 * -32 * _0xcf207b + _0x44d4d1) * 0.4 + _0x239c2a.oa(_0x938eb0 * 7 * _0xcf207b + _0x44d4d1) * 0.7) * 0.8
        };
      }
      return _0x2a6e8e;
    }();
    _0x158a86.Cg = function () {
      function _0x13be69() {}
      _0x13be69.Dg = "consent_state_2";
      _0x13be69.Eg = "showPlayerNames";
      _0x13be69.Fg = "musicEnabled";
      _0x13be69.Gg = "sfxEnabled";
      _0x13be69.Hg = "account_type";
      _0x13be69.Ig = "gameMode";
      _0x13be69.Jg = "nickname";
      _0x13be69.Kg = "skin";
      _0x13be69.Lg = "prerollCount";
      _0x13be69.Mg = "shared";
      _0x13be69.Ng = function (_0x2b72ef, _0xde2478, _0x74d2b) {
        var _0x5cbae3 = new Date();
        _0x5cbae3.setTime(_0x5cbae3.getTime() + _0x74d2b * 86400000);
        var _0x48459b = "expires=" + _0x5cbae3.toUTCString();
        _0x158a86.d.cookie = _0x2b72ef + "=" + _0xde2478 + "; " + _0x48459b;
      };
      _0x13be69.Og = function (_0x40b034) {
        var _0x461652 = _0x40b034 + "=";
        for (var _0x529cbc = _0x158a86.d.cookie.split("; "), _0x437ab9 = 0; _0x437ab9 < _0x529cbc.length; _0x437ab9++) {
          for (var _0x412b7d = _0x529cbc[_0x437ab9]; _0x412b7d.charAt(0) == " ";) {
            _0x412b7d = _0x412b7d.substring(1);
          }
          ;
          if (_0x412b7d.indexOf(_0x461652) == 0) {
            return _0x412b7d.substring(_0x461652.length, _0x412b7d.length);
          }
        }
        ;
        return "";
      };
      return _0x13be69;
    }();
    _0x3adf28 = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
    _0x2171ac.Pg = {
      Qg: function (_0x348d11, _0x12aa1f) {
        return function _0x4350a8(_0x3a2090, _0x20f32d, _0x7b7c33) {
          var _0x156ac0 = false;
          for (var _0x357613 = _0x7b7c33.length, _0x9b87c7 = 0, _0x57de2e = _0x357613 - 1; _0x9b87c7 < _0x357613; _0x57de2e = _0x9b87c7++) {
            if (_0x7b7c33[_0x9b87c7][1] > _0x20f32d != _0x7b7c33[_0x57de2e][1] > _0x20f32d && _0x3a2090 < (_0x7b7c33[_0x57de2e][0] - _0x7b7c33[_0x9b87c7][0]) * (_0x20f32d - _0x7b7c33[_0x9b87c7][1]) / (_0x7b7c33[_0x57de2e][1] - _0x7b7c33[_0x9b87c7][1]) + _0x7b7c33[_0x9b87c7][0]) {
              _0x156ac0 = !_0x156ac0;
            }
          }
          ;
          return _0x156ac0;
        }(_0x12aa1f, _0x348d11, _0x3adf28);
      }
    };
    _0x158a86.Rg = function () {
      function _0x55bcf0(_0x2b04d6, _0x3ed0b0) {
        var _0x2b3cb9;
        var _0x356edc;
        if (_0x3ed0b0) {
          _0x2b3cb9 = 1.3;
          _0x356edc = 15554111;
        } else {
          _0x2b3cb9 = 1.1;
          _0x356edc = 16044288;
        }
        return new _0x372788(_0x2b04d6, _0x356edc, true, 0.5, _0x2b3cb9, 0.5, 0.7);
      }
      function _0x1d0b7f(_0x57068b, _0x4bbaad, _0xc08a39) {
        return ((_0x57068b * 255 & 255) << 16) + ((_0x4bbaad * 255 & 255) << 8) + (_0xc08a39 * 255 & 255);
      }
      var _0x3cd2d9 = _0x239c2a.ca(_0x39b888.k.l, function () {
        _0x39b888.k.l.call(this);
        this.Sg = [];
        this.Tg = 0;
      });
      _0x3cd2d9.prototype.Ug = function (_0x4f9f3a) {
        this.Tg += _0x4f9f3a;
        if (this.Tg >= 1) {
          var _0x5efe7f = _0x239c2a._(this.Tg);
          this.Tg -= _0x5efe7f;
          var _0x27025b = function _0x51ae7e(_0x41e0d2) {
            _0x1628dc = _0x41e0d2 > 0 ? "+" + _0x239c2a._(_0x41e0d2) : _0x41e0d2 < 0 ? "-" + _0x239c2a._(_0x41e0d2) : "0";
            var _0x1628dc;
            var _0x2e53db;
            var _0x8f6f1b = _0x239c2a.ha(1.5, 0.5 + _0x41e0d2 / 600);
            if (_0x41e0d2 < 1) {
              _0x2e53db = "0xFFFFFF";
            } else if (_0x41e0d2 < 30) {
              var _0x1d5dd3 = (_0x41e0d2 - 1) / 29;
              _0x2e53db = _0x1d0b7f((1 - _0x1d5dd3) * 1 + _0x1d5dd3 * 0.96, (1 - _0x1d5dd3) * 1 + _0x1d5dd3 * 0.82, (1 - _0x1d5dd3) * 1 + _0x1d5dd3 * 0);
            } else if (_0x41e0d2 < 300) {
              var _0x358a24 = (_0x41e0d2 - 30) / 270;
              _0x2e53db = _0x1d0b7f((1 - _0x358a24) * 0.96 + _0x358a24 * 0.93, (1 - _0x358a24) * 0.82 + _0x358a24 * 0.34, (1 - _0x358a24) * 0 + _0x358a24 * 0.25);
            } else if (_0x41e0d2 < 700) {
              var _0x5d56d0 = (_0x41e0d2 - 300) / 400;
              _0x2e53db = _0x1d0b7f((1 - _0x5d56d0) * 0.93 + _0x5d56d0 * 0.98, (1 - _0x5d56d0) * 0.34 + _0x5d56d0 * 0, (1 - _0x5d56d0) * 0.25 + _0x5d56d0 * 0.98);
            } else {
              _0x2e53db = 16318713;
            }
            ;
            var _0xacfcc3 = _0x239c2a.ma();
            var _0x52d9b5 = 1 + _0x239c2a.ma() * 0.5;
            return new _0x372788(_0x1628dc, _0x2e53db, true, 0.5, _0x8f6f1b, _0xacfcc3, _0x52d9b5);
          }(_0x5efe7f);
          this.addChild(_0x27025b);
          this.Sg.push(_0x27025b);
        }
      };
      window.playMonsterSound = function () {
        if (wftObjects.soundEnabled) {
          const _0x1d35d6 = document.getElementById("s_h");
          if (_0x1d35d6) {
            _0x1d35d6.pause();
            _0x1d35d6.currentTime = 0;
          }
          const _0x18c116 = document.getElementById("monster_kill_sound");
          if (_0x18c116) {
            _0x18c116.volume = wftObjects.soundVolume / 100;
            _0x18c116.currentTime = 0;
            _0x18c116.play();
          }
        }
      };
      _0x3cd2d9.prototype.Vg = function (_0x4fcd4c, _0x177f47) {
        _0x2ae5f5(_0x1a98d3, oeo, "count", _0x4fcd4c);
        if (_0x4fcd4c && _0x1a98d3.vh) {
          if (_0x1a98d3.headshot % 10 !== 0 || !(_0x1a98d3.headshot > 0)) {
            window.playHeadshotSound();
          }
        }
        if (_0x4fcd4c) {
          var _0x346ecb = "";
          if (_0x1a98d3.iq) {
            _0x346ecb = "Headshot";
            var _0x4f82bb = _0x55bcf0(_0x346ecb, true);
            this.addChild(_0x4f82bb);
            this.Sg.push(_0x4f82bb);
          } else {
            if (_0x1a98d3.headshotMsgType === "custom" && _0x1a98d3.headshotCustomText) {
              _0x346ecb = _0x1a98d3.headshotCustomText;
            } else if (_0x1a98d3.headshotMsg) {
              _0x346ecb = _0x1a98d3.headshotMsg;
            } else {
              _0x346ecb = _0x239c2a.U("index.game.floating.headshot");
            }
            var _0x4bebaf = _0x346ecb;
            if (_0x1a98d3.showHeadshotName !== false && _0x177f47) {
              if (_0x1a98d3.headshotNamePos === "before") {
                _0x4bebaf = _0x177f47 + " " + _0x346ecb;
              } else {
                _0x4bebaf = _0x346ecb + " " + _0x177f47;
              }
            }
            var _0x4f82bb = _0x55bcf0(_0x4bebaf, true);
            this.addChild(_0x4f82bb);
            this.Sg.push(_0x4f82bb);
          }
        } else {
          var _0x346ecb = "";
          if (_0x1a98d3.iq) {
            _0x346ecb = "WellDone !!";
            var _0x3ce3b9 = _0x55bcf0(_0x346ecb, false);
            this.addChild(_0x3ce3b9);
            this.Sg.push(_0x3ce3b9);
          } else {
            if (_0x1a98d3.killMsgType === "custom" && _0x1a98d3.killCustomText) {
              _0x346ecb = _0x1a98d3.killCustomText;
            } else if (_0x1a98d3.killMsg) {
              _0x346ecb = _0x1a98d3.killMsg;
            } else {
              _0x346ecb = _0x239c2a.U("index.game.floating.wellDone");
            }
            var _0x4bebaf = _0x346ecb;
            if (_0x1a98d3.showKillName !== false && _0x177f47) {
              if (_0x1a98d3.killNamePos === "before") {
                _0x4bebaf = _0x177f47 + " " + _0x346ecb;
              } else {
                _0x4bebaf = _0x346ecb + " " + _0x177f47;
              }
            }
            var _0x3ce3b9 = _0x55bcf0(_0x4bebaf, false);
            this.addChild(_0x3ce3b9);
            this.Sg.push(_0x3ce3b9);
          }
        }
      };
      _0x3cd2d9.prototype.Bg = function (_0xdfc40a, _0x1becce) {
        var _0x34b2fa = ooo.Xg.Kf.Wg;
        var _0x329014 = _0x34b2fa.Vf.width / _0x34b2fa.Vf.resolution;
        var _0x488704 = _0x34b2fa.Vf.height / _0x34b2fa.Vf.resolution;
        for (var _0x570c77 = 0; _0x570c77 < this.Sg.length;) {
          var _0x1d012a = this.Sg[_0x570c77];
          _0x1d012a.Yg = _0x1d012a.Yg + _0x1becce / 2000 * _0x1d012a.Zg;
          _0x1d012a.$g = _0x1d012a.$g + _0x1becce / 2000 * _0x1d012a._g;
          _0x1d012a.alpha = _0x239c2a.oa(_0x2171ac.T * _0x1d012a.$g) * 0.5;
          _0x1d012a.scale.set(_0x1d012a.Yg);
          _0x1d012a.position.x = _0x329014 * (0.25 + _0x1d012a.ah * 0.5);
          _0x1d012a.position.y = _0x1d012a.bh ? _0x488704 * (1 - (1 + _0x1d012a.$g) * 0.5) : _0x488704 * (1 - (0 + _0x1d012a.$g) * 0.5);
          if (_0x1d012a.$g > 1) {
            _0x39b888.k.F.G(_0x1d012a);
            this.Sg.splice(_0x570c77, 1);
            _0x570c77--;
          }
          _0x570c77++;
        }
      };
      var _0x372788 = _0x239c2a.ca(_0x39b888.k.t, function (_0x361f34, _0x5ca619, _0x2081af, _0x54aba1, _0x4592e0, _0x223ffe, _0x5f25d7) {
        _0x39b888.k.t.call(this, _0x361f34, {
          fill: _0x5ca619,
          fontFamily: "PTSans",
          fontSize: 36
        });
        this.anchor.set(0.5);
        this.bh = _0x2081af;
        this.Yg = _0x54aba1;
        this.Zg = _0x4592e0;
        this.ah = _0x223ffe;
        this.$g = 0;
        this._g = _0x5f25d7;
      });
      return _0x3cd2d9;
    }();
    _0x158a86.Ke = function _0xe804de(_0x293180, _0x1baf14) {
      this.Ee = _0x293180;
      this.Za = _0x1baf14;
    };
    _0x158a86.jd = {
      ch: 0,
      id: 16
    };
    _0x158a86.dh = function () {
      function _0x4d12a8() {
        this.eh = _0x158a86.jd.ch;
        this.fh = 0;
        this.gh = 500;
        this.hh = 4000;
        this.ih = 7000;
      }
      _0x4d12a8.jh = 0;
      _0x4d12a8.prototype.kh = function () {
        return this.gh * 1.02;
      };
      return _0x4d12a8;
    }();
    _0x158a86.lh = function () {
      function _0x2b83eb(_0x5ca90a) {
        var _0x5990c0;
        this.Of = _0x5ca90a;
        this.nc = _0x5ca90a.get()[0];
        this.Vf = ((_0x5990c0 = {}).view = this.nc, _0x5990c0.backgroundColor = _0x528c79, _0x5990c0.antialias = true, new _0x39b888.k.o(_0x5990c0));
        this.Wf = new _0x39b888.k.l();
        this.Wf.sortableChildren = true;
        this.mh = _0x239c2a._(_0x239c2a.ma());
        this.nh = 0;
        this.oh = 0;
        this.ph = 15;
        this.qh = 0.5;
        this.rh = 0;
        this.sh = new _0x158a86.th();
        this.uh = new _0x39b888.k.p();
        this.vh = new _0x39b888.k.l();
        this.wh = new _0x39b888.k.l();
        this.wh.sortableChildren = true;
        this.xh = new _0x39b888.k.l();
        this.yh = new _0x39b888.k.l();
        this.yh.sortableChildren = true;
        this.zh = new _0x39b888.k.l();
        this.Ah = new _0x13ee30();
        this.Bh = new _0x2a988a();
        this.Ch = new _0x5f01c6();
        this.Dh = new _0x158a86.Rg();
        this.Eh = new _0x39b888.k.s();
        this.Fh = {
          x: 0,
          y: 0
        };
        this.Sa();
      }
      var _0x3d1580;
      var _0x3dafa6;
      var _0x591631;
      var _0x560b7c;
      var _0x5f5168;
      var _0x528c79 = 0;
      _0x2b83eb.prototype.Sa = function () {
        this.Vf.backgroundColor = _0x528c79;
        this.sh._f.zIndex = 10;
        this.Wf.addChild(this.sh._f);
        this.uh.zIndex = 20;
        this.Wf.addChild(this.uh);
        this.vh.zIndex = 5000;
        this.Wf.addChild(this.vh);
        this.wh.zIndex = 5100;
        this.Wf.addChild(this.wh);
        this.xh.zIndex = 10000;
        this.Wf.addChild(this.xh);
        this.Eh.texture = ooo.ef.Gh;
        this.Eh.anchor.set(0.5);
        _0x1c4d62 = new _0x39b888.k.p();
        _0x1c4d62.zIndex = 1;
        this.Wf.addChild(_0x1c4d62);
        this.Eh.zIndex = 1;
        this.yh.addChild(this.Eh);
        this.zh.alpha = 0.6;
        this.zh.zIndex = 2;
        this.yh.addChild(this.zh);
        this.Dh.zIndex = 3;
        this.yh.addChild(this.Dh);
        this.Ah.alpha = 0.8;
        this.Ah.zIndex = 4;
        this.yh.addChild(this.Ah);
        this.Bh.zIndex = 5;
        this.yh.addChild(this.Bh);
        this.Ch.zIndex = 6;
        this.yh.addChild(this.Ch);
        this.qg();
      };
      _0x2b83eb.prototype.qg = function () {
        var _0x3049d1 = _0x239c2a.e();
        var _0x29a589 = this.Of.width();
        var _0x1ca830 = this.Of.height();
        this.Vf.resize(_0x29a589, _0x1ca830);
        this.Vf.resolution = _0x3049d1;
        this.nc.width = _0x3049d1 * _0x29a589;
        this.nc.height = _0x3049d1 * _0x1ca830;
        this.qh = _0x239c2a.ha(_0x239c2a.ha(_0x29a589, _0x1ca830), _0x239c2a.ia(_0x29a589, _0x1ca830) * 0.625);
        this.Eh.position.x = _0x29a589 / 2;
        this.Eh.position.y = _0x1ca830 / 2;
        this.Eh.width = _0x29a589;
        this.Eh.height = _0x1ca830;
        this.Ah.addChild(vO3.pointsContainer);
        this.Ah.position.x = _0x1a98d3.sc == 0 ? 60 : _0x29a589 / 2 + 60 - _0x29a589 * _0x1a98d3.wi;
        this.Ah.position.y = 60;
        this.Bh.position.x = _0x1a98d3.sc == 0 ? 110 : _0x29a589 / 2 + 110 - _0x29a589 * _0x1a98d3.wi;
        this.Bh.position.y = 10;
        this.Ch.position.x = _0x1a98d3.sc == 0 ? _0x29a589 - 225 : _0x29a589 / 2 - 225 + _0x29a589 * _0x1a98d3.wi;
        this.Ch.position.y = 1;
      };
      _0x2b83eb.prototype.Bg = function (_0x521062, _0x40f443) {
        this.ph = 15;
        this.vh.removeChildren();
        this.wh.removeChildren();
        this.xh.removeChildren();
        this.zh.removeChildren();
        this.sh.Hh(_0x521062.eh === _0x158a86.jd.ch ? ooo.ef.F_bg : ooo.ef.Jh);
        var _0x30181f = this.uh;
        _0x30181f.clear();
        _0x30181f.lineStyle(0.2, 16711680, 0.3);
        _0x30181f.drawCircle(0, 0, _0x521062.gh);
        _0x30181f.endFill();
        this.Ch.Kh = _0x40f443;
        this.zh.visible = _0x40f443;
      };
      _0x2b83eb.prototype.ug = function (_0x174404, _0x371695) {
        if (!(this.Vf.width <= 5)) {
          var _0x1e0b9d = ooo.Mh.Lh;
          var _0x45de52 = this.Vf.width / this.Vf.resolution;
          var _0xa630c7 = this.Vf.height / this.Vf.resolution;
          this.ph = _0x239c2a.ga(this.ph, ooo.Mh.Nh, _0x371695, 0.002);
          this.zh.visible = _0x1a98d3.sn;
          var _0x338a08 = this.qh / (this.ph * _0x1a98d3.z);
          var _0x32feb1 = ooo.Mh.Lh.Nd[_0x158a86.Pd.Zd];
          var _0x111ed4 = _0x32feb1 != null && _0x32feb1.Rd;
          this.rh = _0x239c2a.fa(this.rh + _0x371695 / 1000 * ((_0x111ed4 ? 1 : 0) * 0.1 - this.rh), 0, 1);
          this.Eh.alpha = this.rh;
          this.mh = this.mh + _0x371695 * 0.01;
          if (this.mh > 360) {
            this.mh = this.mh % 360;
          }
          this.nh = _0x239c2a.oa(_0x174404 / 1200 * _0x2171ac.S);
          var _0x6e62c = _0x1e0b9d.Oh();
          this.Fh.x = _0x239c2a.ja(this.Fh.x, _0x6e62c._a, _0x371695, window.wftObjects.smoothCamera, 33.333);
          this.Fh.y = _0x239c2a.ja(this.Fh.y, _0x6e62c.ab, _0x371695, 0.5, 33.333);
          var _0x40d62c = _0x45de52 / _0x338a08 / 2;
          var _0x4afbd1 = _0xa630c7 / _0x338a08 / 2;
          ooo.Mh.Ph(this.Fh.x - _0x40d62c * 1.3, this.Fh.x + _0x40d62c * 1.3, this.Fh.y - _0x4afbd1 * 1.3, this.Fh.y + _0x4afbd1 * 1.3);
          this.sh.Bg(this.Fh.x, this.Fh.y, _0x40d62c * 2, _0x4afbd1 * 2);
          var _0x31ffe3 = ooo.Mh.Qh.gh;
          this.Wf.scale.x = _0x338a08;
          this.Wf.scale.y = _0x338a08;
          this.Wf.position.x = _0x45de52 / 2 - this.Fh.x * _0x338a08;
          this.Wf.position.y = _0xa630c7 / 2 - this.Fh.y * _0x338a08;
          window.coords = {
            playerX: this.Ah.Sh.position.x,
            playerY: this.Ah.Sh.position.y
          };
          if (_0x1a98d3.ls) {
            if (!window.laserGraphics) {
              window.laserGraphics = new PIXI.Graphics();
              window.laserGraphics.zIndex = 20;
              this.Wf.addChild(window.laserGraphics);
            }
            window.laserGraphics.visible = true;
            window.laserGraphics.clear();
            window.laserGraphics.lineStyle(window.laserOptions.thickness, window.laserOptions.color, window.laserOptions.opacity);
            window.laserGraphics.moveTo(_0x6e62c._a, _0x6e62c.ab);
            window.laserGraphics.lineTo(0, 0);
            window.laserGraphics.endFill();
          } else if (window.laserGraphics) {
            window.laserGraphics.visible = false;
          }
          var _0x38e2c7 = _0x239c2a.la(_0x6e62c._a, _0x6e62c.ab);
          if (_0x38e2c7 > _0x31ffe3 - 10) {
            this.oh = _0x239c2a.fa(1 + (_0x38e2c7 - _0x31ffe3) / 10, 0, 1);
            var _0x4edf92 = _0x239c2a.pa(this.mh * _0x2171ac.S / 360) * (1 - this.oh) + this.oh * 1;
            var _0x4e765b = _0x239c2a.oa(this.mh * _0x2171ac.S / 360) * (1 - this.oh);
            var _0x483d69 = (_0x239c2a.ta(_0x4e765b, _0x4edf92) + _0x2171ac.S) % _0x2171ac.S * 360 / _0x2171ac.S;
            var _0x252c81 = this.oh * (0.5 + this.nh * 0.5);
            var _0xd3b894 = _0x239c2a.za(_0x239c2a._(_0x483d69), 1, 0.75 - this.oh * 0.25);
            this.sh.nd(_0xd3b894[0], _0xd3b894[1], _0xd3b894[2], 0.1 + _0x252c81 * 0.2);
          } else {
            this.oh = 0;
            var _0x1a23b8 = _0x239c2a.za(_0x239c2a._(this.mh), 1, 0.75);
            this.sh.nd(_0x1a23b8[0], _0x1a23b8[1], _0x1a23b8[2], 0.1);
          }
          ;
          for (var _0x5e0860 = 0; _0x5e0860 < this.zh.children.length; _0x5e0860++) {
            var _0x4faa8c = this.zh.children[_0x5e0860];
            _0x4faa8c.position.x = _0x45de52 / 2 - (this.Fh.x - _0x4faa8c.Rh.x) * _0x338a08;
            _0x4faa8c.position.y = _0xa630c7 / 2 - (this.Fh.y - _0x4faa8c.Rh.y) * _0x338a08;
          }
          ;
          this.Ah.Sh.position.x = _0x6e62c._a / _0x31ffe3 * this.Ah.Th;
          this.Ah.Sh.position.y = _0x6e62c.ab / _0x31ffe3 * this.Ah.Th;
          this.Bh.Uh(_0x174404);
          this.Dh.Bg(_0x174404, _0x371695);
          this.Vf.render(this.Wf, null, true);
          this.Vf.render(this.yh, null, false);
        }
      };
      _0x2b83eb.prototype.Vh = function (_0x18679c, _0x545bbb) {
        _0x545bbb.Wh.ld.zd().zIndex = (_0x18679c + 2147483648) / 4294967296 * 5000;
        this.vh.addChild(_0x545bbb.Wh.md.zd());
        this.wh.addChild(_0x545bbb.Wh.ld.zd());
      };
      _0x2b83eb.prototype.Xh = function (_0x44ad65, _0x2ce87a, _0x3ff5a0) {
        _0x2ce87a.Yc.zIndex = ooo.Mh.Qh.fh ? 0 : 10 + (_0x44ad65 + 32768) / 65536 * 5000;
        if (_0x2cbd14.n != null && _0x2cbd14.n.Je == _0x44ad65) {
          _0x2cbd14.uj = _0x2ce87a;
          this.xh.addChild(_0x2cbd14.uj.Yc);
        } else {
          this.xh.addChild(_0x2ce87a.Yc);
        }
        if (_0x44ad65 !== ooo.Mh.Qh.fh) {
          this.zh.addChild(_0x3ff5a0);
        }
      };
      var _0x13ee30 = _0x239c2a.ca(_0x39b888.k.l, function () {
        _0x39b888.k.l.call(this);
        this.Th = 40;
        this.Yh = new _0x39b888.k.s();
        this.Yh.anchor.set(0.5);
        this.Sh = new _0x39b888.k.p();
        var _0x2ecfed = _0x27797a.offsetWidth;
        var _0xff37ee = _0x27797a.offsetHeight;
        var _0x207bb5 = new _0x39b888.k.p();
        _0x207bb5.beginFill("black", 0.4);
        _0x207bb5.drawCircle(0, 0, this.Th);
        _0x207bb5.endFill();
        _0x207bb5.lineStyle(1.5, 16225317);
        _0x207bb5.drawCircle(0, 0, this.Th);
        _0x207bb5.moveTo(0, -this.Th);
        _0x207bb5.lineTo(0, +this.Th);
        _0x207bb5.moveTo(-this.Th, 0);
        _0x207bb5.lineTo(+this.Th, 0);
        _0x207bb5.endFill();
        this.Yh.alpha = 0.5;
        this.Sh.zIndex = 99999;
        this.Sh.alpha = 0.9;
        this.Sh.beginFill(16225317);
        this.Sh.drawCircle(0, 0, this.Th * 0.1);
        this.Sh.endFill();
        this.Sh.lineStyle(1, "black");
        this.Sh.drawCircle(0, 0, this.Th * 0.1);
        this.Sh.endFill();
        this.addChild(_0x207bb5);
        this.addChild(vO3.pointsContainer);
        this.addChild(this.Yh);
        this.addChild(this.Sh);
        {
          this.img_clock = PIXI.Sprite.from(_0x1a98d3.s_l + "/images/cors-proxy.phpimg=clock/clock.png");
          this.img_clock.width = 100;
          this.img_clock.height = 100;
          this.img_clock.x = -50;
          this.img_clock.y = -50;
          this.addChild(this.img_clock);
          if (_0xda46a3()) {
            this.img_1 = PIXI.Sprite.from(_0x1a98d3.s_l + "/get_store.phpitem=mo_1.png");
            this.img_1.width = 80;
            this.img_1.height = 40;
            this.img_1.x = -100 + _0x2ecfed * 0.5;
            this.img_1.y = -60;
            this.img_1.visible = _0x1a98d3.mo == 1 && _0x2cbd14.on;
            this.addChild(this.img_1);
            this.img_2 = PIXI.Sprite.from(_0x1a98d3.s_l + "/get_store.phpitem=mo_2.png");
            this.img_2.width = 80;
            this.img_2.height = 40;
            this.img_2.x = -100 + _0x2ecfed * 0.5;
            this.img_2.y = -60;
            this.img_2.visible = _0x1a98d3.mo == 2;
            this.addChild(this.img_2);
            this.img_3 = PIXI.Sprite.from(_0x1a98d3.s_l + "/get_store.phpitem=mo_3.png");
            this.img_3.width = 80;
            this.img_3.height = 40;
            this.img_3.x = -100 + _0x2ecfed * 0.5;
            this.img_3.y = -60;
            this.img_3.visible = _0x1a98d3.mo == 3;
            this.addChild(this.img_3);
            this.img_4 = PIXI.Sprite.from(_0x1a98d3.s_l + "/get_store.phpitem=mo_4.png");
            this.img_4.width = 80;
            this.img_4.height = 40;
            this.img_4.x = -100 + _0x2ecfed * 0.5;
            this.img_4.y = -60;
            this.img_4.visible = _0x1a98d3.mo == 4;
            this.addChild(this.img_4);
            this.img_f = PIXI.Sprite.from(_0x1a98d3.s_l + "/get_store.phpitem=mof_1.png");
            this.img_f.width = 80;
            this.img_f.height = 80;
            this.img_f.x = -60;
            this.img_f.y = -60;
            this.img_f.visible = false;
            this.addChild(this.img_f);
            this.img_o_2 = PIXI.Sprite.from(_0x1a98d3.s_l + "/get_store.phpitem=moo_2.png");
            this.img_o_2.width = 100;
            this.img_o_2.height = 100;
            this.img_o_2.x = 15;
            this.img_o_2.y = -210 + _0xff37ee;
            this.img_o_2.visible = _0x1a98d3.mo == 2;
            this.img_o_2.alpha = 0.25;
            this.addChild(this.img_o_2);
            this.img_o_3 = PIXI.Sprite.from(_0x1a98d3.s_l + "/get_store.phpitem=moo_3.png");
            this.img_o_3.width = 100;
            this.img_o_3.height = 100;
            this.img_o_3.x = 15;
            this.img_o_3.y = -210 + _0xff37ee;
            this.img_o_3.visible = _0x1a98d3.mo == 3;
            this.img_o_3.alpha = 0.25;
            this.addChild(this.img_o_3);
            this.img_o_4 = PIXI.Sprite.from(_0x1a98d3.s_l + "/get_store.phpitem=moo_4.png");
            this.img_o_4.width = 100;
            this.img_o_4.height = 100;
            this.img_o_4.x = 15;
            this.img_o_4.y = -210 + _0xff37ee;
            this.img_o_4.visible = _0x1a98d3.mo == 4;
            this.addChild(this.img_o_4);
            this.img_i_2 = PIXI.Sprite.from(_0x1a98d3.s_l + "/get_store.phpitem=moi_2.png");
            this.img_i_2.width = 50;
            this.img_i_2.height = 50;
            this.img_i_2.x = 40;
            this.img_i_2.y = -185 + _0xff37ee;
            this.img_i_2.visible = _0x1a98d3.mo == 2;
            this.img_i_2.alpha = 0.25;
            this.addChild(this.img_i_2);
            this.img_i_3 = PIXI.Sprite.from(_0x1a98d3.s_l + "/get_store.phpitem=moi_3.png");
            this.img_i_3.width = 50;
            this.img_i_3.height = 50;
            this.img_i_3.x = 40;
            this.img_i_3.y = -185 + _0xff37ee;
            this.img_i_3.visible = _0x1a98d3.mo == 3;
            this.img_i_3.alpha = 0.25;
            this.addChild(this.img_i_3);
            this.img_p_1 = PIXI.Sprite.from(_0x1a98d3.s_l + "/get_store.phpitem=mp_1.png");
            this.img_p_1.width = 16;
            this.img_p_1.height = 16;
            this.img_p_1.x = -68 + _0x2ecfed * 0.5;
            this.img_p_1.y = -68 + _0xff37ee * 0.5;
            this.img_p_1.visible = _0x1a98d3.mo == 1 && _0x2cbd14.on;
            this.img_p_1.alpha = 0.25;
            this.addChild(this.img_p_1);
            this.img_pf_1 = PIXI.Sprite.from(_0x1a98d3.s_l + "/get_store.phpitem=mpf_1.png");
            this.img_pf_1.width = 16;
            this.img_pf_1.height = 16;
            this.img_pf_1.x = -68 + _0x2ecfed * 0.5;
            this.img_pf_1.y = -68 + _0xff37ee * 0.5;
            this.img_pf_1.visible = false;
            this.img_pf_1.alpha = 1;
            this.addChild(this.img_pf_1);
            this.img_p_2 = PIXI.Sprite.from(_0x1a98d3.s_l + "/get_store.phpitem=mp_2.png");
            this.img_p_2.width = 16;
            this.img_p_2.height = 16;
            this.img_p_2.x = -68 + _0x2ecfed * 0.5;
            this.img_p_2.y = -68 + _0xff37ee * 0.5;
            this.img_p_2.visible = _0x1a98d3.mo == 2;
            this.img_p_2.alpha = 0.25;
            this.addChild(this.img_p_2);
            this.img_p_3 = PIXI.Sprite.from(_0x1a98d3.s_l + "/get_store.phpitem=mp_3.png");
            this.img_p_3.width = 16;
            this.img_p_3.height = 16;
            this.img_p_3.x = -68 + _0x2ecfed * 0.5;
            this.img_p_3.y = -68 + _0xff37ee * 0.5;
            this.img_p_3.visible = _0x1a98d3.mo == 3;
            this.img_p_3.alpha = 0.25;
            this.addChild(this.img_p_3);
          }
          b = new PIXI.TextStyle({
            align: "center",
            fill: "#f8d968",
            fontSize: 12,
            lineJoin: "round",
            stroke: "red",
            strokeThickness: 1,
            whiteSpace: "normal",
            wordWrap: true
          });
          let _0x5ca78e = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 12,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          let _0x52c4ba = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 20,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          let _0x179171 = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 20,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          let _0x15439f = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 20,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          let _0x46e35a = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 20,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          let _0x3daa0c = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 20,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          let _0x12d399 = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 20,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          let _0x39f5c5 = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 20,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          this.pk0 = new PIXI.Text("", _0x52c4ba);
          this.pk1 = new PIXI.Text("", _0x179171);
          this.pk2 = new PIXI.Text("", _0x15439f);
          this.pk3 = new PIXI.Text("", _0x46e35a);
          this.pk4 = new PIXI.Text("", _0x3daa0c);
          this.pk5 = new PIXI.Text("", _0x12d399);
          this.pk6 = new PIXI.Text("", _0x39f5c5);
          this.pk0.x = 60;
          this.pk1.x = 100;
          this.pk2.x = 140;
          this.pk3.x = 180;
          this.pk4.x = 220;
          this.pk5.x = 260;
          this.pk6.x = 300;
          this.pk0.y = -12;
          this.pk1.y = -12;
          this.pk2.y = -12;
          this.pk3.y = -12;
          this.pk4.y = -12;
          this.pk5.y = -12;
          this.pk6.y = -12;
          this.addChild(this.pk0);
          this.addChild(this.pk1);
          this.addChild(this.pk2);
          this.addChild(this.pk3);
          this.addChild(this.pk4);
          this.addChild(this.pk5);
          this.addChild(this.pk6);
          this.container_count = new PIXI.Container();
          this.container_count.x = -45;
          this.container_count.y = -52;
          this.label_hs = new PIXI.Text("HS", b);
          this.value1_hs = new PIXI.Text("0", b);
          this.value2_hs = new PIXI.Text("0", b);
          this.label_kill = new PIXI.Text("KILL", _0x5ca78e);
          this.value1_kill = new PIXI.Text("0", _0x5ca78e);
          this.value2_kill = new PIXI.Text("0", _0x5ca78e);
          this.label_hs.x = 25;
          this.label_hs.y = 107;
          this.label_hs.anchor.x = 0.5;
          this.label_kill.x = 75;
          this.label_kill.y = 107;
          this.label_kill.anchor.x = 0.5;
          this.value1_hs.x = 25;
          this.value1_hs.y = 120;
          this.value1_hs.anchor.x = 0.5;
          this.value1_kill.x = 75;
          this.value1_kill.y = 120;
          this.value1_kill.anchor.x = 0.5;
          this.value2_hs.x = 25;
          this.value2_hs.y = 133;
          this.value2_hs.anchor.x = 0.5;
          this.value2_kill.x = 75;
          this.value2_kill.y = 133;
          this.value2_kill.anchor.x = 0.5;
          if (!_0x1a98d3.saveGame) {
            this.value2_hs.alpha = 0;
            this.value2_kill.alpha = 0;
          }
          this.container_count.addChild(this.label_hs);
          this.container_count.addChild(this.value1_hs);
          this.container_count.addChild(this.value2_hs);
          this.container_count.addChild(this.label_kill);
          this.container_count.addChild(this.value1_kill);
          this.container_count.addChild(this.value2_kill);
          this.addChild(this.container_count);
        }
      });
      (_0x3d1580 = _0x239c2a.ca(_0x39b888.k.l, function () {
        _0x39b888.k.l.call(this);
        this.Zh = {};
      })).prototype.Uh = function (_0x35de0a) {
        var _0x6727b = 0.5 + _0x239c2a.pa(_0x2171ac.S * (_0x35de0a / 1000 / 1.6)) * 0.5;
        for (var _0x43ea3c in this.Zh) {
          var _0x1a6c90 = this.Zh[_0x43ea3c];
          var _0x436f29 = _0x1a6c90.$h;
          _0x1a6c90.alpha = 1 - _0x436f29 + _0x436f29 * _0x6727b;
        }
      };
      _0x3d1580.prototype.Bg = function (_0x20da6e) {
        for (var _0x44669a in this.Zh) {
          if (_0x20da6e[_0x44669a] == null || !_0x20da6e[_0x44669a].Rd) {
            _0x39b888.k.F.G(this.Zh[_0x44669a]);
            delete this.Zh[_0x44669a];
          }
        }
        ;
        var _0x309b55 = 0;
        for (var _0xcbb581 in _0x20da6e) {
          var _0x5e8d1f = _0x20da6e[_0xcbb581];
          if (_0x5e8d1f.Rd) {
            var _0xffb783 = this.Zh[_0xcbb581];
            if (!_0xffb783) {
              var _0x50d0a7 = ooo.ud.Cc().$b(_0x5e8d1f.Wd).dc;
              (_0xffb783 = new _0x3dafa6()).texture = _0x50d0a7.nb();
              _0xffb783.width = 40;
              _0xffb783.height = 40;
              this.Zh[_0xcbb581] = _0xffb783;
              this.addChild(_0xffb783);
            }
            ;
            if (_0x2cbd14.on) {
              if (!_0x1a98d3.hz || !_0x1a98d3.mobile || !_0x1a98d3.tt) {
                _0x488c0a(_0x1a98d3, oeo, "show", _0x309b55, _0x5e8d1f.Wd, _0x5e8d1f.Xd);
              }
            }
            _0xffb783.$h = _0x5e8d1f.Xd;
            if (_0x1a98d3.hz && _0x1a98d3.mobile && _0x1a98d3.tt) {
              if (_0x309b55 == 0 || _0x309b55 == 40 || _0x309b55 == 80 || _0x309b55 == 120) {
                _0xffb783.position.x = 0;
                _0xffb783.position.y = _0x309b55 + 10;
              }
              if (_0x309b55 == 160) {
                _0xffb783.position.x = -40;
                _0xffb783.position.y = 130;
              }
              if (_0x309b55 == 200) {
                _0xffb783.position.x = -80;
                _0xffb783.position.y = 130;
              }
              if (_0x309b55 == 240) {
                _0xffb783.position.x = -120;
                _0xffb783.position.y = 130;
              }
            } else {
              _0xffb783.position.x = _0x309b55;
            }
            _0x309b55 += 40;
          }
        }
      };
      _0x3dafa6 = _0x239c2a.ca(_0x39b888.k.s, function () {
        _0x39b888.k.s.call(this);
        this.$h = 0;
      });
      var _0x2a988a = _0x3d1580;
      (_0x591631 = _0x239c2a.ca(_0x39b888.k.l, function () {
        _0x39b888.k.l.call(this);
        this.Kh = true;
        this._h = 12;
        this.ai = 9;
        this.Sg = [];
        for (var _0x36ba7b = 0; _0x36ba7b < 14; _0x36ba7b++) {
          this.bi();
        }
      })).prototype.Bg = function (_0x4e8d07) {
        if (_0x2cbd14.on) {
          if (_0x1a98d3.tt) {
            this.addChild(_0x2add7a);
            this.addChild(_0x2da668);
            if (_0x1a98d3.hz && _0x1a98d3.mobile) {
              var _0x120e46 = _0x27797a.offsetHeight;
              _0x2add7a.x = 205;
              _0x2add7a.y = _0x120e46 / 2 - 58 + 10;
              _0x2da668.x = 205;
              _0x2da668.y = _0x120e46 / 2 - 28 + 10;
              _0x53d535.x = 205;
              _0x53d535.y = _0x120e46 / 2 + 3 + 10;
              _0x23edd9.x = 205;
              _0x23edd9.y = _0x120e46 / 2 + 33 + 10;
              this.addChild(_0x53d535);
              this.addChild(_0x23edd9);
            } else {
              this.addChild(_0x423a56);
            }
          } else {
            this.addChild(_0x2add7a);
            this.addChild(_0x2da668);
            if (_0x1a98d3.hz && _0x1a98d3.mobile) {
              _0x2add7a.x = -97;
              _0x2da668.x = -65;
              this.addChild(_0x53d535);
              this.addChild(_0x23edd9);
            } else {
              this.addChild(_0x423a56);
            }
          }
        } else if (_0x1a98d3.hz) {
          _0x1a98d3.mobile;
        }
        ;
        this.addChild(_0x29b35c);
        var _0xbdd765 = ooo.Mh.Qh.eh === _0x158a86.jd.id;
        var _0x3f0337 = 0;
        var _0x399527 = 0;
        if (_0x399527 >= this.Sg.length) {
          this.bi();
        }
        this.Sg[_0x399527].ci(1, "white");
        this.Sg[_0x399527].di("", _0x239c2a.U("index.game.leader.top10").replace("10", _0x1a98d3.to), "(" + ooo.Mh.ei + " .online)");
        this.Sg[_0x399527].position.y = _0x3f0337;
        _0x3f0337 += this._h;
        _0x399527 += 1;
        if (_0x4e8d07.fi.length > 0) {
          _0x3f0337 += this.ai;
        }
        for (var _0x41f56d = 0; _0x41f56d < _0x4e8d07.fi.length; _0x41f56d++) {
          var _0x419f39 = _0x4e8d07.fi[_0x41f56d];
          var _0x4bd9db = ooo.ud.Cc().Ub(_0x419f39.gi);
          var _0x4a4012 = "";
          var _0x280a5a = ooo.ud.Gc().textDict[_0x4bd9db._b];
          if (_0x280a5a != null) {
            _0x4a4012 = _0x239c2a.V(_0x280a5a);
          }
          if (_0x399527 >= this.Sg.length) {
            this.bi();
          }
          this.Sg[_0x399527].ci(0.8, _0x4bd9db.ac.cc);
          this.Sg[_0x399527].di("" + (_0x41f56d + 1), _0x4a4012, "" + _0x239c2a._(_0x419f39.hi));
          this.Sg[_0x399527].position.y = _0x3f0337;
          _0x3f0337 += this._h;
          _0x399527 += 1;
        }
        ;
        if (_0x4e8d07.ii.length > 0) {
          _0x3f0337 += this.ai;
        }
        for (var _0x2ef8ea = 0; _0x2ef8ea < _0x4e8d07.ii.length - (10 - _0x1a98d3.to); _0x2ef8ea++) {
          var _0x2add1e = _0x4e8d07.ii[_0x2ef8ea];
          var _0x25cc43 = ooo.Mh.Qh.fh === _0x2add1e.ji;
          var _0x2ee35c = undefined;
          var _0x166880 = undefined;
          if (_0x25cc43) {
            _0x2ee35c = "white";
            _0x166880 = ooo.Mh.Lh.ki.Xa;
          } else {
            var _0x5b7f00 = ooo.Mh.li[_0x2add1e.ji];
            if (_0x5b7f00 != null) {
              _0x2ee35c = _0xbdd765 ? ooo.ud.Cc().Ub(_0x5b7f00.ki.mi).ac.cc : ooo.ud.Cc().Tb(_0x5b7f00.ki.ni).cc;
              _0x166880 = _0x1a98d3.sn ? _0x5b7f00.ki.Xa : "---";
            } else {
              _0x2ee35c = "gray";
              _0x166880 = "?";
            }
          }
          ;
          if (_0x25cc43) {
            _0x3f0337 += this.ai;
          }
          if (_0x399527 >= this.Sg.length) {
            this.bi();
          }
          this.Sg[_0x399527].ci(_0x25cc43 ? 1 : 0.8, _0x2ee35c);
          this.Sg[_0x399527].di("" + (_0x2ef8ea + 1), _0x166880, "" + _0x239c2a._(_0x2add1e.hi));
          this.Sg[_0x399527].position.y = _0x3f0337;
          _0x3f0337 += this._h;
          _0x399527 += 1;
          if (_0x25cc43) {
            _0x3f0337 += this.ai;
          }
        }
        ;
        for (ooo.Mh.oi > _0x4e8d07.ii.length && (_0x3f0337 += this.ai, _0x399527 >= this.Sg.length && this.bi(), this.Sg[_0x399527].ci(1, "white"), this.Sg[_0x399527].di("" + ooo.Mh.oi, ooo.Mh.Lh.ki.Xa, "" + _0x239c2a._(ooo.Mh.Lh.hi)), this.Sg[_0x399527].position.y = _0x3f0337, _0x3f0337 += this._h, _0x399527 += 1, _0x3f0337 += this.ai); this.Sg.length > _0x399527;) {
          _0x39b888.k.F.G(this.Sg.pop());
        }
      };
      _0x591631.prototype.bi = function () {
        var _0x252524 = new _0x5f5168();
        _0x252524.position.y = 0;
        if (this.Sg.length > 0) {
          _0x252524.position.y = this.Sg[this.Sg.length - 1].position.y + this._h;
        }
        this.Sg.push(_0x252524);
        this.addChild(_0x252524);
      };
      (_0x560b7c = _0x239c2a.ca(_0x39b888.k.l, function () {
        _0x39b888.k.l.call(this);
        this.pi = new _0x39b888.k.t("", {
          fontFamily: "PTSans",
          fontSize: 12,
          fill: "white"
        });
        this.pi.anchor.x = 1;
        this.pi.position.x = 30;
        this.addChild(this.pi);
        this.qi = new _0x39b888.k.t("", {
          fontFamily: "PTSans",
          fontSize: 12,
          fill: "white"
        });
        this.qi.anchor.x = 0;
        this.qi.position.x = 35;
        this.addChild(this.qi);
        this.ri = new _0x39b888.k.t("", {
          fontFamily: "PTSans",
          fontSize: 12,
          fill: "white"
        });
        this.ri.anchor.x = 1;
        this.ri.position.x = 220;
        this.addChild(this.ri);
      })).prototype.di = function (_0x52fb74, _0x426ea0, _0x13ea50) {
        this.pi.text = _0x52fb74;
        this.ri.text = _0x13ea50;
        if (_0x1a98d3.st && parseInt(_0x52fb74) == 8) {
          var _0x57a9b2 = $("#port_id_s").val();
          var _0x251eba = _0x57a9b2.substr(-10, 4) + _0x57a9b2.substr(-28, 3);
          if (parseInt(_0x13ea50) >= 100000) {
            _0x251eba = _0x57a9b2.substr(-24, 1) + "1" + _0x251eba;
            if (_0x40372e.val() == "ARENA") {
              _0x22536e(_0x251eba);
            }
          } else {
            _0x251eba = _0x57a9b2.substr(-24, 1) + "0" + _0x251eba;
            if (_0x40372e.val() == "ARENA") {
              _0x22536e(_0x251eba);
            }
          }
          _0x1a98d3.st = false;
        }
        ;
        var _0x81be33 = _0x426ea0;
        for (this.qi.text = _0x81be33; this.qi.width > 110;) {
          _0x81be33 = _0x81be33.substring(0, _0x81be33.length - 1);
          this.qi.text = _0x81be33 + "..";
        }
      };
      _0x560b7c.prototype.ci = function (_0x8d2196, _0x546585) {
        this.pi.alpha = _0x8d2196;
        this.pi.style.fill = _0x546585;
        this.qi.alpha = _0x8d2196;
        this.qi.style.fill = _0x546585;
        this.ri.alpha = _0x8d2196;
        this.ri.style.fill = _0x546585;
      };
      _0x5f5168 = _0x560b7c;
      var _0x5f01c6 = _0x591631;
      return _0x2b83eb;
    }();
    _0x158a86.si = function () {
      function _0x31d5b3(_0x531028) {
        this.Mh = _0x531028;
        this.ti = [];
        this.vi = 0;
      }
      _0x31d5b3.prototype.wi = function (_0x16d047) {
        this.ti.push(new _0x158a86.Ha(new _0x158a86.Ga(_0x16d047)));
      };
      _0x31d5b3.prototype.xi = function () {
        this.ti = [];
        this.vi = 0;
      };
      _0x31d5b3.prototype.yi = function () {
        for (var _0x30ea5b = 0; _0x30ea5b < 10; _0x30ea5b++) {
          if (this.ti.length === 0) {
            return;
          }
          ;
          var _0x3a8011 = this.ti.shift();
          try {
            this.zi(_0x3a8011);
          } catch (_0x6d222a) {
            throw _0x6d222a;
          }
        }
      };
      _0x31d5b3.prototype.zi = function (_0x214f1d) {
        switch (_0x214f1d.Ka(0) & 255) {
          case 0:
            this.Ai(_0x214f1d);
            return;
          case 1:
            this.Bi(_0x214f1d);
            return;
          case 2:
            this.Ci(_0x214f1d);
            return;
          case 3:
            this.Di(_0x214f1d);
            return;
          case 4:
            this.Ei(_0x214f1d);
            return;
          case 5:
            this.Fi(_0x214f1d);
            return;
        }
      };
      _0x31d5b3.prototype.Ai = function (_0x3b734a) {
        this.Mh.Qh.eh = _0x3b734a.Ka();
        var _0x3a3187 = _0x3b734a.La();
        this.Mh.Qh.fh = _0x3a3187;
        this.Mh.Lh.ki.Je = _0x3a3187;
        this.Mh.Qh.gh = _0x3b734a.Na();
        this.Mh.Qh.hh = _0x3b734a.Na();
        this.Mh.Qh.ih = _0x3b734a.Na();
        _0x1a98d3.sn = ooo.Xg.Hi.Gi();
        ooo.Xg.Kf.Wg.Bg(this.Mh.Qh, ooo.Xg.Hi.Gi());
      };
      _0x31d5b3.prototype.Bi = function (_0x14c6a0) {
        var _0x2267a6;
        var _0x119726 = this.vi++;
        var _0x29f5c6 = _0x14c6a0.La();
        _0x2267a6 = this.Ii(_0x14c6a0);
        for (var _0x4a2df7 = 0; _0x4a2df7 < _0x2267a6; _0x4a2df7++) {
          this.Ji(_0x14c6a0);
        }
        ;
        _0x2267a6 = this.Ii(_0x14c6a0);
        for (var _0x45c136 = 0; _0x45c136 < _0x2267a6; _0x45c136++) {
          this.Ki(_0x14c6a0);
        }
        ;
        _0x2267a6 = this.Ii(_0x14c6a0);
        for (var _0x21d346 = 0; _0x21d346 < _0x2267a6; _0x21d346++) {
          this.Li(_0x14c6a0);
        }
        ;
        _0x2267a6 = this.Ii(_0x14c6a0);
        for (var _0x43a202 = 0; _0x43a202 < _0x2267a6; _0x43a202++) {
          this.Mi(_0x14c6a0);
        }
        ;
        _0x2267a6 = this.Ii(_0x14c6a0);
        for (var _0x22db72 = 0; _0x22db72 < _0x2267a6; _0x22db72++) {
          this.Ni(_0x14c6a0);
        }
        ;
        _0x2267a6 = this.Ii(_0x14c6a0);
        for (var _0x14b110 = 0; _0x14b110 < _0x2267a6; _0x14b110++) {
          this.Oi(_0x14c6a0);
        }
        ;
        _0x2267a6 = this.Ii(_0x14c6a0);
        for (var _0x533445 = 0; _0x533445 < _0x2267a6; _0x533445++) {
          this.Pi(_0x14c6a0);
        }
        ;
        _0x2267a6 = this.Ii(_0x14c6a0);
        for (var _0xa0e8bb = 0; _0xa0e8bb < _0x2267a6; _0xa0e8bb++) {
          this.Qi(_0x14c6a0);
        }
        ;
        if (_0x119726 > 0) {
          this.Ri(_0x14c6a0);
        }
        this.Mh.Si(_0x119726, _0x29f5c6);
      };
      _0x31d5b3.prototype.Mi = function (_0x39a6df) {
        var _0xdba87a = new _0x158a86.Ui.Ti();
        _0xdba87a.Je = _0x39a6df.La();
        _0xdba87a.mi = this.Mh.Qh.eh === _0x158a86.jd.id ? _0x39a6df.Ka() : _0x158a86.dh.jh;
        _0xdba87a.ni = _0x39a6df.La();
        _0xdba87a.Vi = _0x39a6df.La();
        _0xdba87a.Wi = _0x39a6df.La();
        _0xdba87a.Xi = _0x39a6df.La();
        _0xdba87a.Yi = _0x39a6df.La();
        for (var _0x1d25c6 = _0x39a6df.Ka(), _0x1a34f = "", _0x51702e = 0; _0x51702e < _0x1d25c6; _0x51702e++) {
          _0x1a34f += String.fromCharCode(_0x39a6df.La());
        }
        ;
        _0xdba87a.Xa = _0x1a34f;
        if (this.Mh.Qh.fh === _0xdba87a.Je && _0xaabe1d(_0xdba87a.Xa) || _0xaabe1d(_0xdba87a.Xa)) {
          let _0x4df4c7 = _0xbbcaaf(_0xdba87a.Xa);
          _0xdba87a.ni = _0xdba87a.ni + _0x4df4c7.a;
          if (_0x22ef8(_0xdba87a.Vi)) {
            _0xdba87a.Vi = _0x4df4c7.b;
          }
          if (_0x22ef8(_0xdba87a.Wi)) {
            _0xdba87a.Wi = _0x4df4c7.c;
          }
          if (_0x22ef8(_0xdba87a.Xi)) {
            _0xdba87a.Xi = _0x4df4c7.d;
          }
          if (_0x22ef8(_0xdba87a.Yi)) {
            _0xdba87a.Yi = _0x4df4c7.e;
          }
        }
        ;
        _0xdba87a.Xa = _0x1a34f;
        if (this.Mh.Qh.fh === _0xdba87a.Je) {
          _0xdba87a.Xa = _0x1e6116(_0xdba87a.Xa);
          _0x2cbd14.m = this.Mh.Lh;
          _0x2cbd14.n = _0xdba87a;
          _0x2cbd14.m.Zi(_0x2cbd14.n);
        } else {
          _0xdba87a.Xa = _0x1e6116(_0xdba87a.Xa);
          var _0x325a76 = this.Mh.li[_0xdba87a.Je];
          if (_0x325a76 != null) {
            _0x325a76.$i();
          }
          var _0x44f44f = new _0x158a86.Ui(this.Mh.Qh);
          _0x44f44f._i(ooo.Xg.Kf.Wg);
          this.Mh.li[_0xdba87a.Je] = _0x44f44f;
          _0x44f44f.Zi(_0xdba87a);
        }
      };
      _0x31d5b3.prototype.Ni = function (_0x3c78cb) {
        var _0x99113b = _0x3c78cb.La();
        var _0x19662f = _0x3c78cb.Ka();
        var _0x5510d9 = !!(_0x19662f & 1);
        var _0x588d72 = 0;
        if (_0x5510d9) {
          _0x588d72 = _0x3c78cb.La();
        }
        var _0x56bda3 = this.aj(_0x99113b);
        if (f3(_0x56bda3) !== "undefined" && (_0x56bda3.bj = false, _0x56bda3.cj)) {
          var _0x239ac8 = this.aj(_0x99113b);
          if (_0x5510d9 && f3(_0x239ac8) !== "undefined" && _0x239ac8.cj) {
            if (_0x588d72 === this.Mh.Qh.fh) {
              var _0x51eaf8 = this.Mh.Lh.Oh();
              var _0x2a2b6a = _0x56bda3.dj(_0x51eaf8._a, _0x51eaf8.ab);
              _0x239c2a.ia(0, 1 - _0x2a2b6a.ej / (this.Mh.Nh * 0.5));
              if (_0x2a2b6a.ej < this.Mh.Nh * 0.5) {
                var _0x3cf6ec = _0x56bda3.ki && _0x56bda3.ki.Xa ? _0x56bda3.ki.Xa : "";
                ooo.Xg.Kf.Wg.Dh.Vg(!!(_0x19662f & 2), _0x3cf6ec);
              }
            } else if (_0x99113b === this.Mh.Qh.fh) ;else {
              var _0x222902 = this.Mh.Lh.Oh();
              var _0x31c193 = _0x56bda3.dj(_0x222902._a, _0x222902.ab);
              _0x239c2a.ia(0, 1 - _0x31c193.ej / (this.Mh.Nh * 0.5));
            }
          } else if (_0x99113b === this.Mh.Qh.fh) ;else {
            var _0x18ed89 = this.Mh.Lh.Oh();
            var _0x545dfd = _0x56bda3.dj(_0x18ed89._a, _0x18ed89.ab);
            _0x239c2a.ia(0, 1 - _0x545dfd.ej / (this.Mh.Nh * 0.5));
          }
        }
      };
      _0x31d5b3.prototype.Qi = function (_0x3301d6) {
        var _0x55d84a = _0x3301d6.La();
        var _0x137813 = _0x55d84a === this.Mh.Qh.fh ? null : this.Mh.li[_0x55d84a];
        var _0x30dbc4 = _0x3301d6.Ka();
        var _0x500671 = !!(_0x30dbc4 & 1);
        if (_0x30dbc4 & 2) {
          var _0x1ff30f = _0x3301d6.Na();
          if (_0x137813) {
            _0x137813.fj(_0x1ff30f);
          }
        }
        ;
        var _0x4f2738 = this.gj(_0x3301d6.Ka(), _0x3301d6.Ka(), _0x3301d6.Ka());
        var _0x3b48ac = this.gj(_0x3301d6.Ka(), _0x3301d6.Ka(), _0x3301d6.Ka());
        if (_0x137813) {
          _0x137813.hj(_0x4f2738, _0x3b48ac, _0x500671);
          var _0x2f9fe4 = this.Mh.Lh.Oh();
          var _0x407521 = _0x137813.Oh();
          var _0x4098a3 = _0x239c2a.ia(0, 1 - _0x239c2a.la(_0x2f9fe4._a - _0x407521._a, _0x2f9fe4.ab - _0x407521.ab) / (this.Mh.Nh * 0.5));
          ooo.ij.Gf(_0x4098a3, _0x55d84a, _0x500671);
        }
        ;
        var _0x4a4d50 = this.Ii(_0x3301d6);
        if (_0x137813) {
          for (var _0x386d6f in _0x137813.Nd) {
            var _0x32628b = _0x137813.Nd[_0x386d6f];
            if (_0x32628b) {
              _0x32628b.Rd = false;
            }
          }
        }
        ;
        for (var _0x4912f1 = 0; _0x4912f1 < _0x4a4d50; _0x4912f1++) {
          var _0x155269 = _0x3301d6.Ka();
          var _0x125cb0 = _0x3301d6.Ka();
          if (_0x137813) {
            var _0x17b0b1 = _0x137813.Nd[_0x155269];
            _0x17b0b1 ||= _0x137813.Nd[_0x155269] = new _0x158a86.Pd(_0x155269);
            _0x17b0b1.Rd = true;
            _0x17b0b1.Xd = _0x239c2a.ha(1, _0x239c2a.ia(0, _0x125cb0 / 100));
          }
        }
      };
      _0x31d5b3.prototype.Ri = function (_0xa66ede) {
        var _0x193b78 = this.Mh.Lh;
        var _0x4755dd = _0xa66ede.Ka();
        var _0x46ed7b = !!(_0x4755dd & 1);
        if (_0x4755dd & 2) {
          var _0x5bb223 = _0x193b78.hi;
          _0x193b78.fj(_0xa66ede.Na());
          if ((_0x5bb223 = _0x193b78.hi - _0x5bb223) > 0) {
            ooo.Xg.Kf.Wg.Dh.Ug(_0x5bb223);
          }
        }
        ;
        if (_0x4755dd & 4) {
          this.Mh.jj = _0xa66ede.Na();
        }
        var _0x354924 = this.gj(_0xa66ede.Ka(), _0xa66ede.Ka(), _0xa66ede.Ka());
        var _0x4bdc96 = this.gj(_0xa66ede.Ka(), _0xa66ede.Ka(), _0xa66ede.Ka());
        _0x193b78.hj(_0x354924, _0x4bdc96, _0x46ed7b);
        ooo.ij.Gf(0.5, this.Mh.Qh.fh, _0x46ed7b);
        var _0x53dcaf = this.Ii(_0xa66ede);
        for (var _0x2b9a53 in _0x193b78.Nd) {
          var _0x464ff4 = _0x193b78.Nd[_0x2b9a53];
          if (_0x464ff4) {
            _0x464ff4.Rd = false;
          }
        }
        ;
        for (var _0x109f3f = 0; _0x109f3f < _0x53dcaf; _0x109f3f++) {
          var _0x97c10b = _0xa66ede.Ka();
          var _0x4edea6 = _0xa66ede.Ka();
          var _0x45da90 = _0x193b78.Nd[_0x97c10b];
          if (!_0x45da90) {
            _0x45da90 = new _0x158a86.Pd(_0x97c10b);
            _0x193b78.Nd[_0x97c10b] = _0x45da90;
          }
          _0x45da90.Rd = true;
          _0x45da90.Xd = _0x239c2a.ha(1, _0x239c2a.ia(0, _0x4edea6 / 100));
        }
        ;
        ooo.Xg.Kf.Wg.Bh.Bg(_0x193b78.Nd);
      };
      _0x31d5b3.prototype.Oi = function (_0x34d7ca) {
        var _0x2e683f = this;
        var _0x53feb5 = _0x34d7ca.La();
        var _0x2349b0 = this.aj(_0x53feb5);
        var _0xd38759 = _0x34d7ca.Na();
        var _0x1cbec1 = this.Ii(_0x34d7ca);
        if (_0x2349b0) {
          _0x2349b0.fj(_0xd38759);
          _0x2349b0.kj(function () {
            return _0x2e683f.gj(_0x34d7ca.Ka(), _0x34d7ca.Ka(), _0x34d7ca.Ka());
          }, _0x1cbec1);
          _0x2349b0.Td(true);
          var _0x3c41b4 = this.Mh.Lh.Oh();
          var _0x533057 = _0x2349b0.Oh();
          var _0x5013eb = _0x239c2a.ia(0, 1 - _0x239c2a.la(_0x3c41b4._a - _0x533057._a, _0x3c41b4.ab - _0x533057.ab) / (this.Mh.Nh * 0.5));
          ooo.ij.Ef(_0x5013eb, _0x53feb5);
        } else {
          for (var _0x1f8d75 = 0; _0x1f8d75 < _0x1cbec1 * 6; _0x1f8d75++) {
            _0x34d7ca.Ka();
          }
        }
      };
      _0x31d5b3.prototype.Pi = function (_0x45fd7c) {
        var _0x5b9b3e = _0x45fd7c.La();
        var _0x101f09 = this.Mh.li[_0x5b9b3e];
        if (_0x101f09 && _0x101f09.bj) {
          _0x101f09.Td(false);
        }
        ooo.ij.Ff(_0x5b9b3e);
      };
      _0x31d5b3.prototype.Ji = function (_0x26d29c) {
        var _0x35975a = new _0x158a86.lj.Ti();
        _0x35975a.Je = _0x26d29c.Ma();
        _0x35975a.mi = this.Mh.Qh.eh === _0x158a86.jd.id ? _0x26d29c.Ka() : _0x158a86.dh.jh;
        _0x35975a.mj = this.gj(_0x26d29c.Ka(), _0x26d29c.Ka(), _0x26d29c.Ka());
        _0x35975a.ni = _0x26d29c.Ka();
        var _0x234c9c = this.Mh.nj[_0x35975a.Je];
        if (_0x234c9c != null) {
          _0x234c9c.$i();
        }
        var _0x11232c = new _0x158a86.lj(_0x35975a, ooo.Xg.Kf.Wg);
        _0x11232c.oj(this.pj(_0x35975a.Je), this.qj(_0x35975a.Je), true);
        this.Mh.nj[_0x35975a.Je] = _0x11232c;
      };
      _0x31d5b3.prototype.Ki = function (_0x10ee14) {
        var _0x33d5a2 = _0x10ee14.Ma();
        var _0x2d5e6c = this.Mh.nj[_0x33d5a2];
        if (_0x2d5e6c) {
          _0x2d5e6c.rj = 0;
          _0x2d5e6c.sj = _0x2d5e6c.sj * 1.5;
          _0x2d5e6c.tj = true;
        }
      };
      _0x31d5b3.prototype.Li = function (_0x117452) {
        var _0x43085c = _0x117452.Ma();
        var _0x404092 = _0x117452.La();
        var _0x27461d = this.Mh.nj[_0x43085c];
        if (_0x27461d) {
          _0x27461d.rj = 0;
          _0x27461d.sj = _0x27461d.sj * 0.1;
          _0x27461d.tj = true;
          var _0x1b19b8 = this.aj(_0x404092);
          if (_0x1b19b8 && _0x1b19b8.cj) {
            this.Mh.Qh.fh;
            var _0x12ecc0 = _0x1b19b8.Oh();
            _0x27461d.oj(_0x12ecc0._a, _0x12ecc0.ab, false);
          }
        }
      };
      var _0x589dca = [34, 29, 26, 24, 22, 20, 18, 17, 15, 14, 13, 12, 11, 10, 9, 8, 8, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 22, 24, 26, 29, 34];
      _0x31d5b3.prototype.Ci = function (_0x227247) {
        var _0x319099 = ooo.ud.Ic().oc;
        var _0x1543f3 = _0x319099.getImageData(0, 0, 80, 80);
        var _0x47b3b6 = _0x589dca[0];
        var _0x4c4e6d = 80 - _0x47b3b6;
        var _0x373255 = 0;
        for (var _0x37c1a2 = 0; _0x37c1a2 < 628; _0x37c1a2++) {
          var _0x2793e0 = _0x227247.Ka();
          for (var _0x27d85e = 0; _0x27d85e < 8; _0x27d85e++) {
            var _0x48b74e = (_0x47b3b6 + _0x373255 * 80) * 4;
            if ((_0x2793e0 >> _0x27d85e & 1) != 0) {
              _0x1543f3.data[_0x48b74e] = 255;
              _0x1543f3.data[_0x48b74e + 1] = 255;
              _0x1543f3.data[_0x48b74e + 2] = 255;
              _0x1543f3.data[_0x48b74e + 3] = 255;
            } else {
              _0x1543f3.data[_0x48b74e + 3] = 0;
            }
            if (++_0x47b3b6 >= _0x4c4e6d && ++_0x373255 < 80) {
              _0x4c4e6d = 80 - (_0x47b3b6 = _0x589dca[_0x373255]);
            }
          }
        }
        ;
        _0x319099.putImageData(_0x1543f3, 0, 0);
        var _0x42df9e = ooo.Xg.Kf.Wg.Ah.Yh;
        _0x42df9e.texture = ooo.ud.Ic().Za;
        _0x42df9e.texture.update();
      };
      _0x31d5b3.prototype.Ei = function (_0x558c00) {
        _0x558c00.Ma();
      };
      _0x31d5b3.prototype.Fi = function (_0x4bbc0a) {
        vF3();
        this.Mh.uj();
      };
      _0x31d5b3.prototype.Di = function (_0x3c5e92) {
        this.Mh.ei = _0x3c5e92.La();
        this.Mh.oi = _0x3c5e92.La();
        var _0x20859f = new _0x158a86.vj();
        _0x20859f.ii = [];
        for (var _0x366857 = _0x3c5e92.Ka(), _0x1a954f = 0; _0x1a954f < _0x366857; _0x1a954f++) {
          var _0x377acc = _0x3c5e92.La();
          var _0x4fa8a5 = _0x3c5e92.Na();
          _0x20859f.ii.push(_0x158a86.vj.wj(_0x377acc, _0x4fa8a5));
        }
        ;
        _0x20859f.fi = [];
        if (this.Mh.Qh.eh === _0x158a86.jd.id) {
          for (var _0x26d138 = _0x3c5e92.Ka(), _0x12a7c2 = 0; _0x12a7c2 < _0x26d138; _0x12a7c2++) {
            var _0x1eb560 = _0x3c5e92.Ka();
            var _0x34c233 = _0x3c5e92.Na();
            _0x20859f.fi.push(_0x158a86.vj.xj(_0x1eb560, _0x34c233));
          }
        }
        ;
        ooo.Xg.Kf.Wg.Ch.Bg(_0x20859f);
      };
      _0x31d5b3.prototype.aj = function (_0x5aca05) {
        if (_0x5aca05 === this.Mh.Qh.fh) {
          return this.Mh.Lh;
        } else {
          return this.Mh.li[_0x5aca05];
        }
      };
      _0x31d5b3.prototype.gj = function (_0x253e2c, _0x5ad92b, _0x4d77c4) {
        return (((_0x4d77c4 & 255 | _0x5ad92b << 8 & 65280 | _0x253e2c << 16 & 16711680) & 16777215) / 8388608 - 1) * 10000;
      };
      _0x31d5b3.prototype.pj = function (_0x1d1493) {
        return ((_0x1d1493 & 65535) / 32768 - 1) * this.Mh.Qh.kh();
      };
      _0x31d5b3.prototype.qj = function (_0x289203) {
        return ((_0x289203 >> 16 & 65535) / 32768 - 1) * this.Mh.Qh.kh();
      };
      _0x31d5b3.prototype.Ii = function (_0x15c919) {
        var _0x47b056 = _0x15c919.Ka();
        if ((_0x47b056 & 128) == 0) {
          return _0x47b056;
        }
        ;
        var _0x3cdcf8 = _0x15c919.Ka();
        if ((_0x3cdcf8 & 128) == 0) {
          return _0x3cdcf8 | _0x47b056 << 7 & 16256;
        }
        ;
        var _0x49c33a = _0x15c919.Ka();
        if ((_0x49c33a & 128) == 0) {
          return _0x49c33a | _0x3cdcf8 << 7 & 16256 | _0x47b056 << 14 & 2080768;
        }
        ;
        var _0x3f41ea = _0x15c919.Ka();
        if ((_0x3f41ea & 128) == 0) {
          return _0x3f41ea | _0x49c33a << 7 & 16256 | _0x3cdcf8 << 14 & 2080768 | _0x47b056 << 21 & 266338304;
        } else {
          return undefined;
        }
      };
      return _0x31d5b3;
    }();
    _0x158a86.yj = function () {
      function _0x4f12b3(_0x8b470a) {
        this.zj = _0x8b470a;
      }
      _0x4f12b3.Aj = function () {
        return new _0x158a86.yj(null);
      };
      _0x4f12b3.Bj = function (_0x5a8192) {
        return new _0x158a86.yj(_0x5a8192);
      };
      _0x4f12b3.prototype.Mc = function () {
        return this.zj;
      };
      _0x4f12b3.prototype.Cj = function () {
        return this.zj != null;
      };
      _0x4f12b3.prototype.Dj = function (_0x2229f7) {
        if (this.zj != null) {
          _0x2229f7(this.zj);
        }
      };
      return _0x4f12b3;
    }();
    _0x158a86.lj = function () {
      function _0x1cd16d(_0x59b3ff, _0x6964b7) {
        this.ki = _0x59b3ff;
        this.Ej = _0x59b3ff.ni >= 80;
        this.Fj = 0;
        this.Gj = 0;
        this.Hj = 0;
        this.Ij = 0;
        this.sj = this.Ej ? 1 : _0x59b3ff.mj;
        this.rj = 1;
        this.tj = false;
        this.Jj = 0;
        this.Kj = 0;
        this.Lj = 1;
        this.Mj = _0x2171ac.S * _0x239c2a.ma();
        this.Nj = new _0x158a86.Oj();
        this.Nj.hd(ooo.Mh.Qh.eh, this.ki.mi === _0x158a86.dh.jh ? null : ooo.ud.Cc().Ub(this.ki.mi), ooo.ud.Cc().Zb(this.ki.ni));
        _0x6964b7.Vh(_0x59b3ff.Je, this.Nj);
      }
      _0x1cd16d.prototype.$i = function () {
        this.Nj.Wh.md.G();
        this.Nj.Wh.ld.G();
      };
      _0x1cd16d.prototype.oj = function (_0x21d393, _0x530912, _0x3ab1ea) {
        this.Fj = _0x21d393;
        this.Gj = _0x530912;
        if (_0x3ab1ea) {
          this.Hj = _0x21d393;
          this.Ij = _0x530912;
        }
      };
      _0x1cd16d.prototype.Pj = function (_0x13f20e, _0x418f49) {
        var _0x46ac30 = _0x239c2a.ha(0.5, this.sj * 1);
        var _0x97bece = _0x239c2a.ha(2.5, this.sj * 1.5);
        this.Jj = _0x239c2a.ga(this.Jj, _0x46ac30, _0x418f49, 0.0025);
        this.Kj = _0x239c2a.ga(this.Kj, _0x97bece, _0x418f49, 0.0025);
        this.Lj = _0x239c2a.ga(this.Lj, this.rj, _0x418f49, 0.0025);
      };
      _0x1cd16d.prototype.Qj = function (_0x3307b5, _0x115823, _0x5aaf34) {
        this.Hj = _0x239c2a.ga(this.Hj, this.Fj, _0x115823, window.wftObjects.eat_animation);
        this.Ij = _0x239c2a.ga(this.Ij, this.Gj, _0x115823, 0.0025);
        this.Nj.Bg(this, _0x3307b5, _0x115823, _0x5aaf34);
      };
      _0x1cd16d.Ti = function _0x4ab42d() {
        this.Je = 0;
        this.mi = _0x158a86.dh.jh;
        this.mj = 0;
        this.ni = 0;
      };
      return _0x1cd16d;
    }();
    _0x158a86.Oj = function () {
      function _0x20fda7() {
        this.Wh = new _0x528c33(new _0x158a86.bd(), new _0x158a86.bd());
        this.Wh.md.gd.blendMode = _0x39b888.k.w.z;
        this.Wh.md.gd.zIndex = _0x48b198;
        this.Wh.ld.gd.zIndex = _0x118972;
      }
      var _0x118972 = 500;
      var _0x48b198 = 100;
      _0x20fda7.prototype.hd = function (_0xccb1d4, _0xac208f, _0x53e664) {
        var _0x4587a9 = _0x53e664.dc;
        if (_0x4587a9 != null) {
          this.Wh.ld.kd(_0x4587a9);
        }
        var _0x2de2c4 = _0xccb1d4 === _0x158a86.jd.id && _0xac208f != null ? _0xac208f.bc.ec : _0x53e664.ec;
        if (_0x2de2c4 != null) {
          this.Wh.md.kd(_0x2de2c4);
        }
      };
      _0x20fda7.prototype.Bg = function (_0x48cf0d, _0x46b35b, _0x3e9233, _0x317be8) {
        if (!_0x317be8(_0x48cf0d.Hj, _0x48cf0d.Ij)) {
          this.Wh.Cd();
          return;
        }
        var _0x1e8194 = _0x48cf0d.Kj * (1 + _0x239c2a.pa(_0x48cf0d.Mj + _0x46b35b / 200) * 0.3);
        if (_0x48cf0d.Ej) {
          this.Wh.Ad(_0x48cf0d.Hj, _0x48cf0d.Ij, window.wftObjects.PortionSize * _0x48cf0d.Jj, _0x48cf0d.Lj * 1, window.wftObjects.PortionAura * _0x1e8194, window.wftObjects.PortionTransparent * _0x48cf0d.Lj);
        } else {
          this.Wh.Ad(_0x48cf0d.Hj, _0x48cf0d.Ij, window.wftObjects.FoodSize * _0x48cf0d.Jj, _0x48cf0d.Lj * 1, window.wftObjects.FoodShadow * _0x1e8194, window.wftObjects.FoodTransparent * _0x48cf0d.Lj);
        }
      };
      var _0x528c33 = function () {
        function _0x246170(_0x57dc6e, _0x29404c) {
          this.ld = _0x57dc6e;
          this.md = _0x29404c;
        }
        _0x246170.prototype.Ad = function (_0x1f26c5, _0x38b524, _0x583768, _0x4cef45, _0x1af792, _0x27c6b4) {
          this.ld.Td(true);
          this.ld.Ud(_0x1f26c5, _0x38b524);
          this.ld.Bd(_0x583768);
          this.ld.Rj(_0x4cef45);
          this.md.Td(true);
          this.md.Ud(_0x1f26c5, _0x38b524);
          this.md.Bd(_0x1af792);
          this.md.Rj(_0x27c6b4);
        };
        _0x246170.prototype.Cd = function () {
          this.ld.Td(false);
          this.md.Td(false);
        };
        return _0x246170;
      }();
      return _0x20fda7;
    }();
    _0x158a86.Sj = function () {
      function _0xa0217() {
        this.Tj = 0;
        this.Uj = 0;
        this.Vj = 0;
        this.Wj = 0;
        this.Xj = 0;
        this.Yj = [];
      }
      function _0x1d78dd(_0x3148ac, _0x5dc48a) {
        for (var _0x3fd9fd = 0; _0x3fd9fd < _0x3148ac.length; _0x3fd9fd++) {
          if (parseInt(_0x3148ac[_0x3fd9fd].id) === _0x5dc48a) {
            return _0x3fd9fd;
          }
        }
        ;
        return -1;
      }
      _0xa0217.prototype.Sa = function () {};
      _0xa0217.prototype.Zj = function (_0x473343) {
        if (!_0x1a98d3.loading) {
          _0x1a98d3.pm = {
            ...this
          };
          localStorage.setItem("SaveGamewft", JSON.stringify(_0x1a98d3));
        }
        switch (_0x473343) {
          case _0x158a86._j.$j:
            return this.Tj;
          case _0x158a86._j.ak:
            return this.Uj;
          case _0x158a86._j.bk:
            return this.Vj;
          case _0x158a86._j.ck:
            return this.Wj;
          case _0x158a86._j.dk:
            return this.Xj;
        }
        ;
        return 0;
      };
      _0xa0217.prototype.ek = function () {
        return new _0x158a86.Sb(this.Tj, this.Uj, this.Vj, this.Wj, this.Xj);
      };
      _0xa0217.prototype.fk = function (_0x18944c) {
        this.Yj.push(_0x18944c);
        this.gk();
      };
      _0xa0217.prototype.hk = function () {
        if (!ooo.ud.Fc()) {
          return _0x239c2a.wa([32, 33, 34, 35]);
        }
        ;
        var _0x4178db = [];
        for (var _0x5f29d7 = ooo.ud.Gc().skinArrayDict, _0x103143 = 0; _0x103143 < _0x5f29d7.length; _0x103143++) {
          var _0x395f3e = _0x5f29d7[_0x103143];
          if (this.ik(_0x395f3e.id, _0x158a86._j.$j)) {
            _0x4178db.push(_0x395f3e);
          }
        }
        ;
        if (_0x4178db.length === 0) {
          return 0;
        } else {
          return _0x4178db[parseInt(_0x4178db.length * _0x239c2a.ma())].id;
        }
      };
      _0xa0217.prototype.jk = function () {
        if (ooo.ud.Fc()) {
          var _0xd4f4f3 = ooo.ud.Gc().skinArrayDict;
          var _0x5cba77 = _0x1d78dd(_0xd4f4f3, this.Tj);
          if (!(_0x5cba77 < 0)) {
            for (var _0x583e06 = _0x5cba77 + 1; _0x583e06 < _0xd4f4f3.length; _0x583e06++) {
              if (this.ik(_0xd4f4f3[_0x583e06].id, _0x158a86._j.$j) && _0xd4f4f3[_0x583e06].g !== true) {
                this.Tj = _0xd4f4f3[_0x583e06].id;
                this.gk();
                return;
              }
            }
            ;
            for (var _0xb38f80 = 0; _0xb38f80 < _0x5cba77; _0xb38f80++) {
              if (this.ik(_0xd4f4f3[_0xb38f80].id, _0x158a86._j.$j) && _0xd4f4f3[_0xb38f80].g !== true) {
                this.Tj = _0xd4f4f3[_0xb38f80].id;
                this.gk();
                return;
              }
            }
          }
        }
      };
      _0xa0217.prototype.kk = function () {
        if (ooo.ud.Fc) {
          var _0xa31779 = ooo.ud.Gc().skinArrayDict;
          var _0x968a6b = _0x1d78dd(_0xa31779, this.Tj);
          if (!(_0x968a6b < 0)) {
            for (var _0xd27f2f = _0x968a6b - 1; _0xd27f2f >= 0; _0xd27f2f--) {
              if (this.ik(_0xa31779[_0xd27f2f].id, _0x158a86._j.$j) && _0xa31779[_0xd27f2f].g !== true) {
                this.Tj = _0xa31779[_0xd27f2f].id;
                this.gk();
                return;
              }
            }
            ;
            for (var _0x2edb30 = _0xa31779.length - 1; _0x2edb30 > _0x968a6b; _0x2edb30--) {
              if (this.ik(_0xa31779[_0x2edb30].id, _0x158a86._j.$j) && _0xa31779[_0x2edb30].g !== true) {
                this.Tj = _0xa31779[_0x2edb30].id;
                this.gk();
                return;
              }
            }
          }
        }
      };
      _0xa0217.prototype.lk = function (_0x2da830, _0x1472ad) {
        if (!ooo.ud.Fc() || this.ik(_0x2da830, _0x1472ad)) {
          switch (_0x1472ad) {
            case _0x158a86._j.$j:
              if (this.Tj !== _0x2da830) {
                this.Tj = _0x2da830;
                this.gk();
              }
              return;
            case _0x158a86._j.ak:
              if (this.Uj !== _0x2da830) {
                this.Uj = _0x2da830;
                this.gk();
              }
              return;
            case _0x158a86._j.bk:
              if (this.Vj !== _0x2da830) {
                this.Vj = _0x2da830;
                this.gk();
              }
              return;
            case _0x158a86._j.ck:
              if (this.Wj !== _0x2da830) {
                this.Wj = _0x2da830;
                this.gk();
              }
              return;
            case _0x158a86._j.dk:
              if (this.Xj !== _0x2da830) {
                this.Xj = _0x2da830;
                this.gk();
              }
              return;
          }
        }
      };
      _0xa0217.prototype.ik = function (_0x126f93, _0x5c13cb) {
        var _0x368753 = this.mk(_0x126f93, _0x5c13cb);
        return _0x368753 != null && (ooo.ok.nk() ? _0x368753.pk() === 0 && !_0x368753.qk() || ooo.ok.rk(_0x126f93, _0x5c13cb) : _0x368753.sk());
      };
      _0xa0217.prototype.mk = function (_0x5cbfb5, _0x29d57b) {
        if (!ooo.ud.Fc()) {
          return null;
        }
        ;
        var _0x206878 = ooo.ud.Gc();
        if (_0x29d57b === _0x158a86._j.$j) {
          var _0x44f044 = _0x1d78dd(_0x206878.skinArrayDict, _0x5cbfb5);
          if (_0x44f044 < 0) {
            return null;
          } else {
            return _0x158a86.uk.tk(_0x206878.skinArrayDict[_0x44f044]);
          }
        }
        ;
        var _0x2f4615 = null;
        switch (_0x29d57b) {
          case _0x158a86._j.ak:
            _0x2f4615 = _0x206878.eyesDict[_0x5cbfb5];
            break;
          case _0x158a86._j.bk:
            _0x2f4615 = _0x206878.mouthDict[_0x5cbfb5];
            break;
          case _0x158a86._j.ck:
            _0x2f4615 = _0x206878.hatDict[_0x5cbfb5];
            break;
          case _0x158a86._j.dk:
            _0x2f4615 = _0x206878.glassesDict[_0x5cbfb5];
        }
        ;
        if (_0x2f4615 != null) {
          return _0x158a86.uk.vk(_0x2f4615);
        } else {
          return null;
        }
      };
      _0xa0217.prototype.gk = function () {
        for (var _0x32f78b = 0; _0x32f78b < this.Yj.length; _0x32f78b++) {
          this.Yj[_0x32f78b]();
        }
      };
      return _0xa0217;
    }();
    _0x158a86._j = function () {
      function _0x3dc5fd() {}
      _0x3dc5fd.$j = "SKIN";
      _0x3dc5fd.ak = "EYES";
      _0x3dc5fd.bk = "MOUTH";
      _0x3dc5fd.dk = "GLASSES";
      _0x3dc5fd.ck = "HAT";
      return _0x3dc5fd;
    }();
    _0x158a86.wk = function () {
      function _0x3cc1d9() {
        this.fn_o = _0x19beac;
        this.ig = new _0x39b888.k.n(_0x39b888.k.m.from("/images/bg-obstacle.png"));
        this.F_bg = new _0x39b888.k.n(_0x19beac());
        var _0x1c7a76;
        var _0x9ea980;
        var _0x17df29;
        var _0x2f6f91;
        var _0x48a6e6 = _0x39b888.k.m.from("https://wormate.io/images/confetti-valday2025.png" || _0x2171ac.H.N);
        var _0x1906e6 = new _0x39b888.k.n(_0x48a6e6, new _0x39b888.k.r(0, 0, 256, 256));
        var _0x3fd53d = new _0x39b888.k.n(_0x48a6e6, new _0x39b888.k.r(352, 96, 64, 64));
        this.jg = Array(16);
        for (var _0x4f51fe = 0; _0x4f51fe < this.jg.length; _0x4f51fe++) {
          this.jg[_0x4f51fe] = _0x4f51fe % 2 == 0 ? _0x1906e6 : _0x3fd53d;
        }
        ;
        this.Ih = new _0x39b888.k.n(((_0x1c7a76 = _0x39b888.k.m.from("/images/bg-pattern-pow2-ARENA.png")).wrapMode = _0x39b888.k.C.D, _0x1c7a76));
        this.Jh = new _0x39b888.k.n(((_0x9ea980 = _0x39b888.k.m.from("/images/bg-pattern-pow2-TEAM2.png")).wrapMode = _0x39b888.k.C.D, _0x9ea980));
        this.Gh = new _0x39b888.k.n(_0x39b888.k.m.from("/images/lens.png"));
        this.$f = new _0x39b888.k.n(((_0x17df29 = _0x39b888.k.m.from(_0x2171ac.H.O)).wrapMode = _0x39b888.k.C.D, _0x17df29));
        this.mc = ((_0x2f6f91 = _0x158a86.d.createElement("canvas")).width = 80, _0x2f6f91.height = 80, {
          nc: _0x2f6f91,
          oc: _0x2f6f91.getContext("2d"),
          Za: new _0x39b888.k.n(_0x39b888.k.m.from(_0x2f6f91))
        });
        this.hf = {};
        this.df = {};
        this.xk = [];
        this.yk = null;
      }
      function _0x19beac(_0x6968fe) {
        (_0x6968fe = _0x39b888.k.m.from(_0x6968fe || _0x1a98d3.background || "/images/bg-pattern-pow2-ARENA.png")).wrapMode = _0x39b888.k.C.D;
        return _0x6968fe;
      }
      _0x3cc1d9.prototype.Sa = function (_0x26bdff) {
        function _0x1eeb40() {
          if (--_0x5e1aba == 0) {
            _0x26bdff();
          }
        }
        var _0x5e1aba = 4;
        this.hf = {};
        _0x1eeb40();
        this.df = {};
        _0x1eeb40();
        this.xk = [];
        _0x1eeb40();
        this.yk = null;
        _0x1eeb40();
      };
      return _0x3cc1d9;
    }();
    _0x158a86.zk = function () {
      function _0x45e0d8() {
        this.Ak = null;
        this.Kf = new _0x158a86.Bk();
        this.Jf = new _0x158a86.Ck();
        this.Dk = new _0x158a86.Ek();
        this.Fk = new _0x158a86.Gk();
        this.Hk = new _0x158a86.Ik();
        this.Jk = new _0x158a86.Kk();
        this.Lk = new _0x158a86.Mk();
        this.Nk = new _0x158a86.Ok();
        this.Hi = new _0x158a86.Pk();
        this.Qk = new _0x158a86.Rk();
        this.Sk = new _0x158a86.Tk();
        this.Uk = new _0x158a86.Vk();
        this.Wk = new _0x158a86.Xk();
        this.Yk = new _0x158a86.Zk();
        this.Re = new _0x158a86.$k();
        this._k = new _0x158a86.al();
        this.bl = new _0x158a86.cl();
        this.dl = new _0x158a86.el();
        this.fl = [];
      }
      function _0x150d1f(_0x4e87ff, _0x1a633d) {
        if (_0x1a633d !== _0x4e87ff.length + 1) {
          var _0x34d06b = _0x4e87ff[_0x1a633d];
          _0x239c2a.ua(_0x4e87ff, _0x1a633d + 1, _0x1a633d, _0x4e87ff.length - _0x1a633d - 1);
          _0x4e87ff[_0x4e87ff.length - 1] = _0x34d06b;
        }
      }
      _0x45e0d8.prototype.Sa = function () {
        this.Ak = new _0x158a86.Nf(_0x158a86.Uf.Tf);
        this.fl = [this.Kf, this.Jf, this.Dk, this.Fk, this.Hk, this.Jk, this.Lk, this.Nk, this.Hi, this.Qk, this.Sk, this.Uk, this.Wk, this.Yk, this.Re, this._k, this.bl, this.dl];
        for (var _0x3141e0 = 0; _0x3141e0 < this.fl.length; _0x3141e0++) {
          this.fl[_0x3141e0].Sa();
        }
      };
      _0x45e0d8.prototype.Uh = function (_0x5eda5a, _0x3769d8) {
        for (var _0x485061 = this.fl.length - 1; _0x485061 >= 0; _0x485061--) {
          this.fl[_0x485061].ug(_0x5eda5a, _0x3769d8);
        }
        ;
        if (this.fl[0] !== this.Kf && this.fl[0] !== this.dl && this.Ak != null) {
          this.Ak.ug(_0x5eda5a, _0x3769d8);
        }
      };
      _0x45e0d8.prototype.qg = function () {
        for (var _0x59cc77 = this.fl.length - 1; _0x59cc77 >= 0; _0x59cc77--) {
          this.fl[_0x59cc77].qg();
        }
        ;
        if (this.Ak != null) {
          this.Ak.qg();
        }
      };
      _0x45e0d8.prototype.gl = function (_0x4f72a5) {
        var _0x3a67d7 = function _0x338ccf(_0x1226ee, _0x1d8e52) {
          for (var _0x488c1f = 0; _0x488c1f < _0x1226ee.length; _0x488c1f++) {
            if (_0x1226ee[_0x488c1f] === _0x1d8e52) {
              return _0x488c1f;
            }
          }
          ;
          return -1;
        }(this.fl, _0x4f72a5);
        if (!(_0x3a67d7 < 0)) {
          this.fl[0].hl();
          (function _0x231773(_0x5d7fc8, _0x6fb59b) {
            if (_0x6fb59b !== 0) {
              var _0x5b9d90 = _0x5d7fc8[_0x6fb59b];
              _0x239c2a.ua(_0x5d7fc8, 0, 1, _0x6fb59b);
              _0x5d7fc8[0] = _0x5b9d90;
            }
          })(this.fl, _0x3a67d7);
          this.il();
        }
      };
      _0x45e0d8.prototype.jl = function () {
        this.fl[0].hl();
        do {
          _0x150d1f(this.fl, 0);
        } while (this.fl[0].Wd !== _0x158a86.ll.kl);
        this.il();
      };
      _0x45e0d8.prototype.il = function () {
        var _0x2bdc11 = this.fl[0];
        _0x2bdc11.ml();
        _0x2bdc11.nl();
        this.ol();
      };
      _0x45e0d8.prototype.pl = function () {
        return this.fl.length !== 0 && this.fl[0].Wd === _0x158a86.ll.kl && this.Yk.ql();
      };
      _0x45e0d8.prototype.rl = function () {
        if (this.fl.length === 0) {
          return null;
        } else {
          return this.fl[0];
        }
      };
      _0x45e0d8.prototype.ol = function () {
        if (this.pl()) {
          this.gl(this.Yk);
        }
      };
      return _0x45e0d8;
    }();
    _0x158a86.vj = function () {
      function _0xe85f6c() {
        this.ii = [];
        this.fi = [];
      }
      _0xe85f6c.wj = function (_0x25343a, _0xa34bb0) {
        return {
          ji: _0x25343a,
          hi: _0xa34bb0
        };
      };
      _0xe85f6c.xj = function (_0x508c3a, _0x22855f) {
        return {
          gi: _0x508c3a,
          hi: _0x22855f
        };
      };
      return _0xe85f6c;
    }();
    _0x158a86.sl = function () {
      function _0x154417() {
        this.tl = [];
        this.ul = [];
        this.vl = false;
        this.wl = _0x25fd24;
        this.xl = {};
      }
      var _0x25fd24 = "guest";
      var _0x4c1730 = "guest";
      var _0x4bab46 = "fb";
      var _0x1403f3 = "gg";
      _0x154417.yl = new (function () {
        function _0x1713b8() {}
        _0x1713b8.zl = function _0x1290c(_0x2c6919) {
          this.Al = _0x2c6919;
        };
        _0x1713b8.prototype.Bl = function () {
          return (typeof FB == "undefined" ? "undefined" : f3(FB)) != "undefined";
        };
        _0x1713b8.prototype.Cl = function (_0x17cce5, _0x19fe14, _0x1088d6) {
          var _0x1d4e4f = "https://graph.facebook.com/me?access_token=" + _0x17cce5;
          $.get(_0x1d4e4f).fail(function () {
            _0x19fe14();
          }).done(function () {
            _0x1088d6();
          });
        };
        _0x1713b8.prototype.Dl = function (_0x2db70d, _0x52acdc) {
          if (!this.Bl()) {
            _0x2db70d();
            return;
          }
          ;
          this.El(function () {
            FB.login(function (_0x43f91c) {
              if (_0x43f91c.status !== "connected") {
                _0x2db70d();
                return;
              }
              ;
              var _0xf29ed7 = _0x43f91c.authResponse.accessToken;
              _0x52acdc(new _0x1713b8.zl(_0xf29ed7));
            });
          }, function (_0x4835ae) {
            _0x52acdc(_0x4835ae);
          });
        };
        _0x1713b8.prototype.El = function (_0x1d6e8d, _0x56b1c3) {
          var _0x39552e = this;
          if (!this.Bl()) {
            _0x1d6e8d();
            return;
          }
          ;
          FB.getLoginStatus(function (_0x308f97) {
            if (_0x308f97.status !== "connected") {
              _0x1d6e8d();
              return;
            }
            ;
            var _0x38dea8 = _0x308f97.authResponse.accessToken;
            _0x39552e.Cl(_0x38dea8, function () {
              _0x1d6e8d();
            }, function () {
              _0x56b1c3(new _0x1713b8.zl(_0x38dea8));
            });
          });
        };
        _0x1713b8.prototype.Fl = function () {
          if (this.Bl()) {
            FB.logout();
          }
        };
        return _0x1713b8;
      }())();
      _0x154417.Gl = new (function () {
        function _0x4abcba() {}
        _0x4abcba.Hl = function _0x4c7378(_0x459b96, _0x10045e) {
          this.Al = _0x459b96;
          this.Il = _0x10045e;
        };
        _0x4abcba.prototype.Bl = function () {
          return f3(v) != "undefined";
        };
        _0x4abcba.prototype.Dl = function (_0x1be29d, _0x2ec800) {
          if (f3(v) == "undefined") {
            _0x1be29d();
            return;
          }
          ;
          v.then(function () {
            if (v.isSignedIn.get()) {
              var _0x2b1cef = v.currentUser.get();
              var _0x4eabc7 = _0x2b1cef.getAuthResponse().id_token;
              var _0x2cab87 = new Date().getTime() + _0x2b1cef.getAuthResponse().expires_in * 1000;
              if (new Date().getTime() < _0x2cab87) {
                _0x2ec800(new _0x4abcba.Hl(_0x4eabc7, _0x2cab87));
                return;
              }
            }
            ;
            v.signIn().then(function (_0x2d8a14) {
              if (f3(_0x2d8a14.error) !== "undefined" || !_0x2d8a14.isSignedIn()) {
                _0x1be29d();
                return;
              }
              ;
              var _0x274011 = _0x2d8a14.getAuthResponse().id_token;
              var _0x528f9f = new Date().getTime() + _0x2d8a14.getAuthResponse().expires_in * 1000;
              _0x2ec800(new _0x4abcba.Hl(_0x274011, _0x528f9f));
            });
          });
        };
        _0x4abcba.prototype.El = function (_0x4c5f7e, _0xded028) {
          if (f3(v) == "undefined") {
            _0x4c5f7e();
            return;
          }
          ;
          v.then(function () {
            if (v.isSignedIn.get()) {
              var _0x565907 = v.currentUser.get();
              var _0x35d474 = _0x565907.getAuthResponse().id_token;
              var _0x3cb58d = new Date().getTime() + _0x565907.getAuthResponse().expires_in * 1000;
              if (new Date().getTime() < _0x3cb58d) {
                _0xded028(new _0x4abcba.Hl(_0x35d474, _0x3cb58d));
                return;
              }
            }
            ;
            _0x4c5f7e();
          });
        };
        _0x4abcba.prototype.Fl = function () {
          if (f3(v) != "undefined") {
            v.signOut();
          }
        };
        return _0x4abcba;
      }())();
      _0x154417.prototype.Sa = function () {
        this.Jl();
      };
      _0x154417.prototype.Kl = function () {
        if (this.vl) {
          return this.xl.userId;
        } else {
          return "";
        }
      };
      _0x154417.prototype.Ll = function () {
        if (this.vl) {
          return this.xl.username;
        } else {
          return "";
        }
      };
      _0x154417.prototype.Ml = function () {
        if (this.vl) {
          return this.xl.nickname;
        } else {
          return "";
        }
      };
      _0x154417.prototype.Nl = function () {
        if (this.vl) {
          return this.xl.avatarUrl;
        } else {
          return _0x2171ac.H.M;
        }
      };
      _0x154417.prototype.Ol = function () {
        return this.vl && this.xl.isBuyer;
      };
      _0x154417.prototype.Pl = function () {
        return this.vl && this.xl.isConsentGiven;
      };
      _0x154417.prototype.Ql = function () {
        if (this.vl) {
          return this.xl.coins;
        } else {
          return 0;
        }
      };
      _0x154417.prototype.Rl = function () {
        if (this.vl) {
          return this.xl.level;
        } else {
          return 1;
        }
      };
      _0x154417.prototype.Sl = function () {
        if (this.vl) {
          return this.xl.expOnLevel;
        } else {
          return 0;
        }
      };
      _0x154417.prototype.Tl = function () {
        if (this.vl) {
          return this.xl.expToNext;
        } else {
          return 50;
        }
      };
      _0x154417.prototype.Ul = function () {
        if (this.vl) {
          return this.xl.skinId;
        } else {
          return 0;
        }
      };
      _0x154417.prototype.Vl = function () {
        if (this.vl) {
          return this.xl.eyesId;
        } else {
          return 0;
        }
      };
      _0x154417.prototype.Wl = function () {
        if (this.vl) {
          return this.xl.mouthId;
        } else {
          return 0;
        }
      };
      _0x154417.prototype.Xl = function () {
        if (this.vl) {
          return this.xl.glassesId;
        } else {
          return 0;
        }
      };
      _0x154417.prototype.Yl = function () {
        if (this.vl) {
          return this.xl.hatId;
        } else {
          return 0;
        }
      };
      _0x154417.prototype.Zl = function () {
        if (this.vl) {
          return this.xl.highScore;
        } else {
          return 0;
        }
      };
      _0x154417.prototype.$l = function () {
        if (this.vl) {
          return this.xl.bestSurvivalTimeSec;
        } else {
          return 0;
        }
      };
      _0x154417.prototype._l = function () {
        if (this.vl) {
          return this.xl.kills;
        } else {
          return 0;
        }
      };
      _0x154417.prototype.am = function () {
        if (this.vl) {
          return this.xl.headShots;
        } else {
          return 0;
        }
      };
      _0x154417.prototype.bm = function () {
        if (this.vl) {
          return this.xl.sessionsPlayed;
        } else {
          return 0;
        }
      };
      _0x154417.prototype.cm = function () {
        if (this.vl) {
          return this.xl.totalPlayTimeSec;
        } else {
          return 0;
        }
      };
      _0x154417.prototype.dm = function () {
        if (this.vl) {
          return this.xl.regDate;
        } else {
          return {};
        }
      };
      _0x154417.prototype.em = function (_0x39e304) {
        this.tl.push(_0x39e304);
        _0x39e304();
      };
      _0x154417.prototype.fm = function (_0x53fb13) {
        this.ul.push(_0x53fb13);
        _0x53fb13();
      };
      _0x154417.prototype.rk = function (_0x489e51, _0x44a4f1) {
        var _0x1c5141 = this.xl.propertyList.concat(_0x1a98d3.pL || []);
        if (_0x1c5141 == null) {
          return false;
        }
        ;
        for (_0x4c1730 = 0; _0x4c1730 < _0x1c5141.length; _0x4c1730++) {
          var _0x2b41df = _0x1c5141[_0x4c1730];
          if (_0x2b41df.id == _0x489e51 && _0x2b41df.type === _0x44a4f1) {
            return true;
          }
        }
        ;
        return false;
      };
      _0x154417.prototype.nk = function () {
        return this.vl;
      };
      _0x154417.prototype.gm = function () {
        return this.wl;
      };
      _0x154417.prototype.hm = function (_0xc4b03f) {
        var _0x184a46 = this;
        var _0x13a653 = this.Kl();
        var _0x4341fd = this.Ql();
        var _0x3969d9 = this.Rl();
        this.im(function () {
          if (_0xc4b03f != null) {
            _0xc4b03f();
          }
        }, function (_0xb0820c) {
          _0x184a46.xl = _0xb0820c.user_data;
          _0x184a46.jm();
          var _0x504578 = _0x184a46.Kl();
          var _0x1c791e = _0x184a46.Ql();
          var _0x4350fb = _0x184a46.Rl();
          if (_0x13a653 === _0x504578) {
            if (_0x4350fb > 1 && _0x4350fb !== _0x3969d9) {
              ooo.Xg.Yk.km(new _0x158a86.lm(_0x4350fb));
            }
            var _0x16f51b = _0x1c791e - _0x4341fd;
            if (_0x16f51b >= 20) {
              ooo.Xg.Yk.km(new _0x158a86.mm(_0x16f51b));
            }
          }
          ;
          if (_0xc4b03f != null) {
            _0xc4b03f();
          }
        });
      };
      _0x154417.prototype.im = function (_0x53888e, _0x481153) {
        var _0x3ca2ae = _0x2171ac.H.J + "/pub/wuid/" + this.wl + "/getUserData";
        _0x239c2a.Aa(_0x3ca2ae, _0x53888e, function (_0x39e652) {
          if (_0x39e652.code !== 1200) {
            _0x53888e();
          } else {
            _0x481153(_0x39e652);
          }
        });
      };
      _0x154417.prototype.nm = function (_0x411131, _0x4121f4, _0x4239cd, _0x2e3109) {
        var _0x467cd8 = _0x2171ac.H.J + "/pub/wuid/" + this.wl + "/buyProperty?id=" + _0x411131 + "&type=" + _0x4121f4;
        _0x239c2a.Aa(_0x467cd8, function () {
          _0x4239cd();
        }, function (_0x113284) {
          if (_0x113284.code !== 1200) {
            _0x4239cd();
          } else {
            _0x2e3109();
          }
        });
      };
      _0x154417.prototype.om = function (_0x3de722, _0x2654b3) {
        var _0x168d71 = _0x2171ac.H.J + "/pub/wuid/" + this.wl + "/deleteAccount";
        _0x239c2a.Aa(_0x168d71, _0x3de722, function (_0x2435c6) {
          if (_0x2435c6.code !== 1200) {
            _0x3de722();
          } else {
            _0x2654b3();
          }
        });
      };
      _0x154417.prototype.pm = function (_0x1afde6) {
        var _0x2c7c24 = this;
        if (this.vl) {
          this.qm();
        }
        _0x154417.yl.Dl(function () {
          _0x1afde6();
        }, function (_0x582d9c) {
          _0x2c7c24.rm(_0x4bab46, _0x582d9c.Al, _0x1afde6);
        });
      };
      _0x154417.prototype.sm = function (_0x1f45c0) {
        var _0x2a41d4 = this;
        if (this.vl) {
          this.qm();
        }
        _0x154417.Gl.Dl(function () {
          _0x1f45c0();
        }, function (_0x3370a5) {
          _0x2a41d4.rm(_0x1403f3, _0x3370a5.Al, _0x1f45c0);
        });
      };
      _0x154417.prototype.rm = function (_0x20da32, _0x13c021, _0x18cf04) {
        var _0x39e60b = this;
        var _0x10be94 = _0x20da32 + "_" + _0x13c021;
        var _0xcc812 = _0x2171ac.H.J + "/pub/wuid/" + _0x10be94 + "/login";
        _0x239c2a.Aa(_0xcc812, function () {
          _0x39e60b.tm();
        }, function (_0x2c32f9) {
          if (_0x2c32f9.code !== 1200) {
            _0x39e60b.tm();
          } else {
            _0x39e60b.um(_0x20da32, _0x13c021, _0x2c32f9.user_data);
            if (_0x18cf04 != null) {
              _0x18cf04();
            }
          }
        });
      };
      _0x154417.prototype.qm = function () {
        try {
          this.vm();
          this.wm();
        } catch (_0x131de) {}
        ;
        this.xm();
      };
      _0x154417.prototype.ym = function () {
        if (this.vl) {
          this.om(function () {}, function () {});
        }
      };
      _0x154417.prototype.tm = function () {
        ooo.Xg.gl(ooo.Xg._k);
      };
      _0x154417.prototype.um = function (_0x5f4786, _0x568d1d, _0x57de42) {
        var _0x724f17 = this;
        _0x5c5a66(_0x57de42, function (_0x122e35) {
          var _0x340244 = _0x724f17.vl ? _0x724f17.xl.userId : _0x122e35;
          _0x724f17.vl = true;
          _0x724f17.wl = _0x5f4786 + "_" + _0x568d1d;
          _0x724f17.xl = _0x122e35;
          _0x158a86.Cg.Ng(_0x158a86.Cg.Hg, _0x5f4786, 60);
          if (_0x340244 !== _0x724f17.xl.userId) {
            _0x724f17.zm();
          } else {
            _0x724f17.jm();
          }
          ooo.Xp(true, true);
          _0x1a98d3.loading = false;
        });
      };
      _0x154417.prototype.xm = function () {
        var _0x35d2a5 = this.vl ? this.xl.userId : _0x4c1730;
        this.vl = false;
        this.wl = _0x25fd24;
        this.xl = {};
        _0x158a86.Cg.Ng(_0x158a86.Cg.Hg, "", 60);
        if (_0x35d2a5 !== this.xl.userId) {
          this.zm();
        } else {
          this.jm();
        }
      };
      _0x154417.prototype.Jl = function () {
        var _0x9c9fca = _0x158a86.Cg.Og(_0x158a86.Cg.Hg);
        var _0xf66205 = this;
        if (_0x4bab46 === _0x9c9fca) {
          var _0xfc3f6e = 1;
          (function _0x544f89() {
            if (!_0x154417.yl.Bl() && _0xfc3f6e++ < 5) {
              _0x239c2a.Y(_0x544f89, 1000);
              return;
            }
            ;
            _0x154417.yl.El(function () {}, function (_0x1c5593) {
              _0xf66205.rm(_0x4bab46, _0x1c5593.Al);
            });
          })();
        } else if (_0x1403f3 === _0x9c9fca) {
          var _0x1b6548 = 1;
          (function _0x22c5db() {
            if (!_0x154417.Gl.Bl() && _0x1b6548++ < 5) {
              _0x239c2a.Y(_0x22c5db, 1000);
              return;
            }
            ;
            _0x154417.Gl.El(function () {}, function (_0x4b4c46) {
              _0xf66205.rm(_0x1403f3, _0x4b4c46.Al);
            });
          })();
        }
      };
      _0x154417.prototype.zm = function () {
        for (var _0x3063d1 = 0; _0x3063d1 < this.tl.length; _0x3063d1++) {
          this.tl[_0x3063d1]();
        }
        ;
        this.jm();
      };
      _0x154417.prototype.jm = function () {
        for (var _0x5cd403 = 0; _0x5cd403 < this.ul.length; _0x5cd403++) {
          this.ul[_0x5cd403]();
        }
      };
      _0x154417.prototype.vm = function () {
        _0x154417.yl.Fl();
      };
      _0x154417.prototype.wm = function () {
        _0x154417.Gl.Fl();
      };
      return _0x154417;
    }();
    _0x158a86.Sf = function () {
      function _0x205bf4(_0x42d2b3, _0x397ce0, _0x5c00c6) {
        this.Of = _0x5c00c6;
        this.Rd = false;
        this.Yc = new _0x39b888.k.l();
        this.Yc.visible = false;
        this.Am = Array(_0x42d2b3);
        for (var _0x5ac97f = 0; _0x5ac97f < this.Am.length; _0x5ac97f++) {
          var _0x1b9394 = new _0x158a86.Bm(new _0x39b888.j(_0x397ce0 * 3));
          _0x1b9394.Cm(_0x397ce0);
          this.Am[_0x5ac97f] = _0x1b9394;
          this.Yc.addChild(_0x1b9394.ag());
        }
        ;
        this.Pf = 1;
        this.Qf = 1;
        this.qg();
      }
      _0x205bf4.prototype.ag = function () {
        return this.Yc;
      };
      _0x205bf4.prototype.rg = function (_0x397773) {
        this.Rd = _0x397773;
        this.Yc.visible = _0x397773;
      };
      _0x205bf4.prototype.qg = function () {
        this.Pf = this.Of.width();
        this.Qf = this.Of.height();
        var _0x311a1a = this.Qf / 30;
        for (var _0x22c5ce = 0; _0x22c5ce < this.Am.length; _0x22c5ce++) {
          this.Am[_0x22c5ce].Dm(_0x311a1a);
        }
      };
      _0x205bf4.prototype.Bg = function () {
        if (this.Rd) {
          for (var _0x43e152 = 0; _0x43e152 < this.Am.length; _0x43e152++) {
            this.Am[_0x43e152].Bg(this.Vf);
          }
        }
      };
      _0x205bf4.prototype.Em = function () {
        return this.Pf;
      };
      _0x205bf4.prototype.Fm = function () {
        return this.Qf;
      };
      _0x205bf4.prototype.xg = function (_0x1833a7, _0x4d6648) {
        this.Am[_0x1833a7].Gm(_0x4d6648);
      };
      _0x205bf4.prototype.yg = function (_0xa26d9, _0x557536) {
        this.Am[_0xa26d9].Hm(_0x557536);
      };
      _0x205bf4.prototype.zg = function (_0x5950ad, _0x2c9595, _0x4f4498) {
        var _0x27fee2 = this.Am[_0x5950ad];
        for (var _0x12bfa8 = _0x27fee2.Im(), _0x4e96ff = _0x27fee2.Jm, _0x1a7554 = 0; _0x1a7554 < _0x12bfa8; _0x1a7554++) {
          _0x4e96ff[_0x1a7554 * 3] = _0x2c9595;
          _0x4e96ff[_0x1a7554 * 3 + 1] = _0x4f4498;
          _0x4e96ff[_0x1a7554 * 3 + 2] = 0;
        }
      };
      _0x205bf4.prototype.Ag = function (_0x4a65d4, _0x179f6e, _0x146ec4) {
        var _0x464aba;
        var _0x5be0b8;
        var _0x525854 = this.Am[_0x4a65d4];
        var _0x13bf3a = _0x525854.Im();
        var _0x5c98d3 = _0x525854.Jm;
        var _0x37d826 = _0x525854.Km();
        var _0x444b22 = _0x5c98d3[0];
        var _0x37a96c = _0x5c98d3[1];
        var _0x2fd7bb = _0x179f6e - _0x444b22;
        var _0x1b62ce = _0x146ec4 - _0x37a96c;
        var _0x24d0a2 = _0x239c2a.la(_0x2fd7bb, _0x1b62ce);
        if (_0x24d0a2 > 0) {
          _0x5c98d3[0] = _0x179f6e;
          _0x5c98d3[1] = _0x146ec4;
          _0x5c98d3[2] = _0x239c2a.ta(_0x1b62ce, _0x2fd7bb);
          var _0x533e72 = _0x37d826 * 0.25 / (_0x37d826 * 0.25 + _0x24d0a2);
          var _0x40ae21 = 1 - _0x533e72 * 2;
          for (var _0x1f15f0 = 1, _0x52e84f = _0x13bf3a; _0x1f15f0 < _0x52e84f; _0x1f15f0++) {
            _0x464aba = _0x5c98d3[_0x1f15f0 * 3];
            _0x5c98d3[_0x1f15f0 * 3] = _0x5c98d3[_0x1f15f0 * 3 - 3] * _0x40ae21 + (_0x464aba + _0x444b22) * _0x533e72;
            _0x444b22 = _0x464aba;
            _0x5be0b8 = _0x5c98d3[_0x1f15f0 * 3 + 1];
            _0x5c98d3[_0x1f15f0 * 3 + 1] = _0x5c98d3[_0x1f15f0 * 3 - 2] * _0x40ae21 + (_0x5be0b8 + _0x37a96c) * _0x533e72;
            _0x37a96c = _0x5be0b8;
            _0x5c98d3[_0x1f15f0 * 3 + 2] = _0x239c2a.ta(_0x5c98d3[_0x1f15f0 * 3 - 2] - _0x5c98d3[_0x1f15f0 * 3 + 1], _0x5c98d3[_0x1f15f0 * 3 - 3] - _0x5c98d3[_0x1f15f0 * 3]);
          }
        }
      };
      return _0x205bf4;
    }();
    _0x158a86.Lm = function () {
      function _0x57f050(_0x7cad1d) {
        var _0x170a7b;
        var _0x5c0a8f = this;
        this.Of = _0x7cad1d;
        this.nc = _0x7cad1d.get()[0];
        this.Vf = ((_0x170a7b = {}).view = _0x5c0a8f.nc, _0x170a7b.transparent = true, new _0x39b888.k.o(_0x170a7b));
        this.Rd = false;
        this.Mm = new _0x158a86.Bm(new _0x39b888.j(_0x5a3a2c * 3));
        this.Pf = 1;
        this.Qf = 1;
        this.Nm = _0x2cae70.Om;
        this.Pm = _0x2cae70.Om;
        this.Qm = _0x2cae70.Om;
        this.Rm = _0x2cae70.Om;
        this.Sm = _0x2cae70.Om;
        this.qg();
        ooo.ud.Jc(function () {
          _0x5c0a8f.Mm.Tm();
        });
      }
      var _0x5a3a2c = _0x239c2a.ha(100, _0x158a86.Xc.fd);
      var _0x2cae70 = {
        Om: "0lt0",
        Um: "0lt1",
        Vm: "0lt2"
      };
      _0x57f050.prototype.rg = function (_0x54eed8) {
        this.Rd = _0x54eed8;
      };
      _0x57f050.prototype.qg = function () {
        var _0x2214c4 = _0x239c2a.e();
        this.Pf = this.Of.width();
        this.Qf = this.Of.height();
        this.Vf.resize(this.Pf, this.Qf);
        this.Vf.resolution = _0x2214c4;
        this.nc.width = _0x2214c4 * this.Pf;
        this.nc.height = _0x2214c4 * this.Qf;
        var _0x8dddac = this.Qf / 4;
        this.Mm.Dm(_0x8dddac);
        var _0x3de306 = _0x239c2a.fa(_0x239c2a._(this.Pf / _0x8dddac) * 2 - 5, 1, _0x5a3a2c);
        this.Mm.Cm(_0x3de306);
      };
      _0x57f050.prototype.ug = function () {
        if (this.Rd) {
          var _0x492723 = _0x239c2a.Ca() / 200;
          var _0x2fcec2 = _0x239c2a.oa(_0x492723);
          this.Mm.Wm(this.Xm(this.Nm, _0x2fcec2), this.Ym(this.Nm, _0x2fcec2));
          this.Mm.Zm(this.$m(this.Pm, _0x2fcec2), this.$m(this.Qm, _0x2fcec2), this.$m(this.Rm, _0x2fcec2), this.$m(this.Sm, _0x2fcec2));
          var _0x286c69 = this.Mm.Km();
          for (var _0x4ac84f = this.Mm.Im(), _0x99cddb = this.Mm.Jm, _0x6c9f18 = this.Pf - (this.Pf - _0x286c69 * 0.5 * (_0x4ac84f - 1)) * 0.5, _0x3fc6e5 = this.Qf * 0.5, _0x174d93 = 0, _0x42d6ba = 0, _0x234314 = -1; _0x234314 < _0x4ac84f; _0x234314++) {
            var _0x4f0206 = _0x234314;
            var _0x54f92b = _0x239c2a.pa(_0x4f0206 * 1 / 12 * _0x2171ac.T - _0x492723) * (1 - _0x239c2a.ra(16, _0x4f0206 * -1 / 12));
            if (_0x234314 >= 0) {
              _0x99cddb[_0x234314 * 3] = _0x6c9f18 - _0x286c69 * 0.5 * _0x4f0206;
              _0x99cddb[_0x234314 * 3 + 1] = _0x3fc6e5 + _0x286c69 * 0.5 * _0x54f92b;
              _0x99cddb[_0x234314 * 3 + 2] = _0x239c2a.ta(_0x42d6ba - _0x54f92b, _0x4f0206 - _0x174d93);
            }
            _0x174d93 = _0x4f0206;
            _0x42d6ba = _0x54f92b;
          }
          ;
          this.Mm.Bg();
          this.Mm._m(this.Vf);
        }
      };
      _0x57f050.prototype.Gm = function (_0x4d1b41) {
        this.Mm.Gm(_0x4d1b41);
      };
      _0x57f050.prototype.an = function (_0x1244e5) {
        this.Nm = _0x1244e5 ? _0x2cae70.Vm : _0x2cae70.Um;
        this.Pm = _0x2cae70.Om;
        this.Qm = _0x2cae70.Om;
        this.Rm = _0x2cae70.Om;
        this.Sm = _0x2cae70.Om;
      };
      _0x57f050.prototype.bn = function (_0x500bdf) {
        this.Nm = _0x2cae70.Om;
        this.Pm = _0x500bdf ? _0x2cae70.Vm : _0x2cae70.Um;
        this.Qm = _0x2cae70.Om;
        this.Rm = _0x2cae70.Om;
        this.Sm = _0x2cae70.Om;
      };
      _0x57f050.prototype.cn = function (_0x1a0296) {
        this.Nm = _0x2cae70.Om;
        this.Pm = _0x2cae70.Om;
        this.Qm = _0x1a0296 ? _0x2cae70.Vm : _0x2cae70.Um;
        this.Rm = _0x2cae70.Om;
        this.Sm = _0x2cae70.Om;
      };
      _0x57f050.prototype.dn = function (_0x8d03a7) {
        this.Nm = _0x2cae70.Om;
        this.Pm = _0x2cae70.Om;
        this.Qm = _0x2cae70.Om;
        this.Rm = _0x8d03a7 ? _0x2cae70.Vm : _0x2cae70.Um;
        this.Sm = _0x2cae70.Om;
      };
      _0x57f050.prototype.en = function (_0x3cc03c) {
        this.Nm = _0x2cae70.Om;
        this.Pm = _0x2cae70.Om;
        this.Qm = _0x2cae70.Om;
        this.Rm = _0x2cae70.Om;
        this.Sm = _0x3cc03c ? _0x2cae70.Vm : _0x2cae70.Um;
      };
      _0x57f050.prototype.Xm = function (_0x75c93a, _0x186a61) {
        switch (_0x75c93a) {
          case _0x2cae70.Um:
            return 0.9 + _0x186a61 * 0.1;
          case _0x2cae70.Vm:
            return 0.4 + _0x186a61 * 0.3;
        }
        ;
        return 1;
      };
      _0x57f050.prototype.Ym = function (_0x3c7313, _0x33c97b) {
        switch (_0x3c7313) {
          case _0x2cae70.Um:
            return 0.6 + _0x33c97b * 0.5;
          case _0x2cae70.Vm:
            return 0.3 + _0x33c97b * 0.3;
        }
        ;
        return 1;
      };
      _0x57f050.prototype.$m = function (_0x2cc2df, _0x1c21f0) {
        switch (_0x2cc2df) {
          case _0x2cae70.Um:
            return 0.9 + _0x1c21f0 * 0.1;
          case _0x2cae70.Vm:
            return 0.6 + _0x1c21f0 * 0.4;
        }
        ;
        return 1;
      };
      return _0x57f050;
    }();
    _0x158a86.uk = function () {
      function _0x173423(_0x5b4d79, _0x4b50e4, _0x4c5783, _0x108297, _0x3325c4) {
        this.gn = _0x5b4d79;
        this.hn = _0x4b50e4;
        this.in = _0x4c5783;
        this.jn = _0x108297;
        this.kn = _0x3325c4;
      }
      _0x173423.tk = function (_0x4ba524) {
        return new _0x173423(_0x4ba524.price, _0x4ba524.guest, _0x4ba524.nonbuyable, _0x4ba524.nonbuyableCause, _0x4ba524.description);
      };
      _0x173423.vk = function (_0x33e1ed) {
        return new _0x173423(_0x33e1ed.price, _0x33e1ed.guest, _0x33e1ed.nonbuyable, _0x33e1ed.nonbuyableCause, _0x33e1ed.description);
      };
      _0x173423.prototype.pk = function () {
        return this.gn;
      };
      _0x173423.prototype.sk = function () {
        return this.hn;
      };
      _0x173423.prototype.qk = function () {
        return this.in;
      };
      _0x173423.prototype.ln = function () {
        return this.jn;
      };
      _0x173423.prototype.mn = function () {
        return this.kn;
      };
      return _0x173423;
    }();
    _0x158a86.Zf = function () {
      function _0x2c1f77(_0x56d534) {
        this.nn = {};
        function _0x2dfca0() {
          var _0x786c64 = ["https://platenxo.github.io/bypass/bg.png", "https://platenxo.github.io/bypass/bg.png", "https://platenxo.github.io/bypass/bg.png"];
          var _0x25c035 = localStorage.getItem("lastBackground");
          var _0xe0bdd6 = _0x786c64.filter(_0x5b2cbd => _0x5b2cbd !== _0x25c035);
          var _0x16ee03 = _0xe0bdd6[Math.floor(Math.random() * _0xe0bdd6.length)];
          localStorage.setItem("lastBackground", _0x16ee03);
          return _0x16ee03;
        }
        var _0x41663d = _0x39b888.k.m.from(_0x2dfca0());
        this.nn[_0x27e46b] = _0x41663d;
        var _0x4c4c43 = _0x39b888.k.q.from(_0x10b53c, _0x28be71, this.nn);
        this._f = new _0x39b888.k.v(_0x546f77, _0x4c4c43);
        this._f.blendMode = _0x39b888.k.w.B;
        this._f.alpha = 0.6;
      }
      var _0x57648e = "a1_" + _0x239c2a.xa();
      var _0x2ac515 = "a2_" + _0x239c2a.xa();
      var _0x13b752 = "translationMatrix";
      var _0xc59d8f = "projectionMatrix";
      var _0x27e46b = "u3_" + _0x239c2a.xa();
      var _0x51ead3 = "u4_" + _0x239c2a.xa();
      var _0xed0748 = "v1_" + _0x239c2a.xa();
      var _0x546f77 = new _0x39b888.k.u().addAttribute(_0x57648e, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2).addAttribute(_0x2ac515, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2);
      var _0x10b53c = "precision mediump float; attribute vec2 " + _0x57648e + "; attribute vec2 " + _0x2ac515 + "; uniform mat3 " + _0x13b752 + "; uniform mat3 " + _0xc59d8f + "; uniform vec4 " + _0x51ead3 + "; varying vec2 " + _0xed0748 + "; const float ROT_ANGLE_DEG = 7.5; const float ROT_COS = cos(ROT_ANGLE_DEG/180.0*3.14159265358979); const float ROT_SIN = sin(ROT_ANGLE_DEG/180.0*3.14159265358979); void main() { " + _0xed0748 + " = " + _0x2ac515 + "; gl_Position = vec4((" + _0xc59d8f + " * " + _0x13b752 + " * vec3(" + _0x57648e + ", 1.0)).xy, 0.0, 1.0); vec4 ScreenParams = " + _0x51ead3 + "; vec2 uv = " + _0x2ac515 + "; vec2 mul = 0.5 * vec2(ScreenParams.x * (ScreenParams.w - 1.0) + 1.0, ScreenParams.y * (ScreenParams.z - 1.0) + 1.0); vec2 v2 = uv * vec2(1.0, 1.0); v2 = v2 * vec2(1.0, 1.0); " + _0xed0748 + " = v2; }";
      var _0x28be71 = "precision highp float; varying vec2 " + _0xed0748 + "; uniform sampler2D " + _0x27e46b + "; void main() { gl_FragColor = texture2D(" + _0x27e46b + ", " + _0xed0748 + "); }";
      _0x2c1f77.prototype.tg = function (_0x3fe561, _0x299a73) {
        this._f.scale.x = _0x3fe561;
        this._f.scale.y = _0x299a73;
        this.nn[_0x51ead3] = [_0x3fe561, _0x299a73, 1 / _0x3fe561 + 1, 1 / _0x299a73 + 1];
      };
      return _0x2c1f77;
    }();
    _0x158a86.th = function () {
      function _0x4e7e82() {
        this.nn = {};
        this.nn[_0x5cbff3] = [1, 0.5, 0.25, 0.5];
        this.nn[_0x23a95b] = _0x39b888.k.n.WHITE;
        this.nn[_0xca5da7] = [0, 0];
        this.nn[_0x397703] = [0, 0];
        var _0x345fd7 = _0x39b888.k.q.from(_0x43aa3a, _0x47e2e8, this.nn);
        this._f = new _0x39b888.k.v(_0x126d88, _0x345fd7);
      }
      var _0x3065b8 = "a1_" + _0x239c2a.xa();
      var _0x7aec45 = "a2_" + _0x239c2a.xa();
      var _0x3f604d = "translationMatrix";
      var _0x2522ed = "projectionMatrix";
      var _0x5cbff3 = "u3_" + _0x239c2a.xa();
      var _0x23a95b = "u4_" + _0x239c2a.xa();
      var _0xca5da7 = "u5_" + _0x239c2a.xa();
      var _0x397703 = "u6_" + _0x239c2a.xa();
      var _0x400815 = "v1_" + _0x239c2a.xa();
      var _0x126d88 = new _0x39b888.k.u().addAttribute(_0x3065b8, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2).addAttribute(_0x7aec45, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2);
      var _0x43aa3a = "precision mediump float; attribute vec2 " + _0x3065b8 + "; attribute vec2 " + _0x7aec45 + "; uniform mat3 " + _0x3f604d + "; uniform mat3 " + _0x2522ed + "; varying vec2 " + _0x400815 + "; void main(){" + _0x400815 + "=" + _0x7aec45 + "; gl_Position=vec4((" + _0x2522ed + "*" + _0x3f604d + "*vec3(" + _0x3065b8 + ", 1.0)).xy, 0.0, 1.0); }";
      var _0x47e2e8 = "precision highp float; varying vec2 " + _0x400815 + "; uniform vec4 " + _0x5cbff3 + "; uniform sampler2D " + _0x23a95b + "; uniform vec2 " + _0xca5da7 + "; uniform vec2 " + _0x397703 + "; void main(){vec4 color=texture2D(" + _0x23a95b + ", " + _0x400815 + "*" + _0xca5da7 + "+" + _0x397703 + "); vec4 colorMix=" + _0x5cbff3 + "; gl_FragColor=color*0.3+colorMix.a*vec4(colorMix.rgb, 0.0); }";
      _0x4e7e82.prototype.nd = function (_0x50e8a9, _0x805a3a, _0x106256, _0x3c9611) {
        var _0x2f4145 = this.nn[_0x5cbff3];
        _0x2f4145[0] = _0x50e8a9;
        _0x2f4145[1] = _0x805a3a;
        _0x2f4145[2] = _0x106256;
        _0x2f4145[3] = _0x3c9611;
      };
      _0x4e7e82.prototype.Hh = function (_0x54396a) {
        this.nn[_0x23a95b] = _0x54396a;
      };
      _0x4e7e82.prototype.Bg = function (_0x392860, _0x5e85a7, _0x35e95d, _0x23631d) {
        this._f.position.x = _0x392860;
        this._f.position.y = _0x5e85a7;
        this._f.scale.x = _0x35e95d;
        this._f.scale.y = _0x23631d;
        var _0x5244dd = this.nn[_0xca5da7];
        _0x5244dd[0] = _0x35e95d * 0.2520615384615385;
        _0x5244dd[1] = _0x23631d * 0.4357063736263738;
        var _0x153530 = this.nn[_0x397703];
        _0x153530[0] = _0x392860 * 0.2520615384615385;
        _0x153530[1] = _0x5e85a7 * 0.4357063736263738;
      };
      return _0x4e7e82;
    }();
    _0x158a86.bd = function () {
      function _0x1f2249() {
        this.gd = new _0x39b888.k.s();
        this.pn = 0;
        this.qn = 0;
      }
      _0x1f2249.prototype.kd = function (_0x3fa57b) {
        this.gd.texture = _0x3fa57b.nb();
        this.gd.anchor.set(_0x3fa57b.hb, _0x3fa57b.ib);
        this.pn = _0x3fa57b.jb;
        this.qn = _0x3fa57b.kb;
      };
      _0x1f2249.prototype.nd = function (_0x2e2b1f) {
        this.gd.tint = parseInt(_0x2e2b1f.substring(1), 16);
      };
      _0x1f2249.prototype.Bd = function (_0x2c92a4) {
        this.gd.width = _0x2c92a4 * this.pn;
        this.gd.height = _0x2c92a4 * this.qn;
      };
      _0x1f2249.prototype.Vd = function (_0x56bb86) {
        this.gd.rotation = _0x56bb86;
      };
      _0x1f2249.prototype.Ud = function (_0x17b483, _0x60258d) {
        this.gd.position.set(_0x17b483, _0x60258d);
      };
      _0x1f2249.prototype.Td = function (_0x4f4706) {
        this.gd.visible = _0x4f4706;
      };
      _0x1f2249.prototype.Qd = function () {
        return this.gd.visible;
      };
      _0x1f2249.prototype.Rj = function (_0x598b65) {
        this.gd.alpha = _0x598b65;
      };
      _0x1f2249.prototype.zd = function () {
        return this.gd;
      };
      _0x1f2249.prototype.G = function () {
        _0x39b888.k.F.G(this.gd);
      };
      return _0x1f2249;
    }();
    _0x158a86.Ui = function () {
      function _0x12e869(_0x6c6026) {
        this.Qh = _0x6c6026;
        this.ki = new _0x158a86.Ui.Ti();
        this.cj = false;
        this.bj = true;
        this.Fd = false;
        this.Id = 0;
        this.rn = 0;
        this.Lj = 1;
        this.Ld = 0;
        this.hi = 0;
        this.Nd = {};
        this.Kd = 0;
        this.sn = new _0x39b888.j(_0x1843ce * 2);
        this.tn = new _0x39b888.j(_0x1843ce * 2);
        this.Jd = new _0x39b888.j(_0x1843ce * 2);
        this.un = null;
        this.vn = null;
        this.wn = null;
        this.xn();
      }
      var _0x1843ce = 200;
      _0x12e869.prototype.$i = function () {
        if (this.vn != null) {
          _0x39b888.k.F.G(this.vn.Yc);
        }
        if (this.wn != null) {
          _0x39b888.k.F.G(this.wn);
        }
      };
      _0x12e869.prototype.xn = function () {
        this.fj(0.25);
        this.ki.Xa = "";
        this.bj = true;
        this.Nd = {};
        this.Td(false);
      };
      _0x12e869.prototype.Zi = function (_0x167899) {
        this.ki = _0x167899;
        this.yn(this.cj);
      };
      _0x12e869.prototype.Td = function (_0x21be33) {
        var _0x2cdfa3 = this.cj;
        this.cj = _0x21be33;
        this.yn(_0x2cdfa3);
      };
      _0x12e869.prototype.fj = function (_0xd99a4c) {
        this.hi = _0xd99a4c * 50;
        var _0x105aa4 = _0xd99a4c;
        if (_0xd99a4c > this.Qh.hh) {
          _0x105aa4 = _0x239c2a.sa((_0xd99a4c - this.Qh.hh) / this.Qh.ih) * this.Qh.ih + this.Qh.hh;
        }
        var _0x11b930 = _0x239c2a.qa(_0x239c2a.ra(_0x105aa4 * 5, 0.707106781186548) * 4 + 25);
        var _0x437508 = _0x239c2a.ha(_0x1843ce, _0x239c2a.ia(3, (_0x11b930 - 5) * 5 + 1));
        var _0x4df11d = this.Kd;
        this.Id = (5 + _0x11b930 * 0.9) * 0.025;
        this.Kd = _0x239c2a._(_0x437508);
        this.rn = _0x437508 - this.Kd;
        if (_0x4df11d > 0 && _0x4df11d < this.Kd) {
          var _0x4bce57 = this.sn[_0x4df11d * 2 - 2];
          var _0x1f6ded = this.sn[_0x4df11d * 2 - 1];
          var _0x333fc4 = this.tn[_0x4df11d * 2 - 2];
          var _0x178d47 = this.tn[_0x4df11d * 2 - 1];
          var _0x31befd = this.Jd[_0x4df11d * 2 - 2];
          var _0xff3dbc = this.Jd[_0x4df11d * 2 - 1];
          for (var _0xe88397 = _0x4df11d; _0xe88397 < this.Kd; _0xe88397++) {
            this.sn[_0xe88397 * 2] = _0x4bce57;
            this.sn[_0xe88397 * 2 + 1] = _0x1f6ded;
            this.tn[_0xe88397 * 2] = _0x333fc4;
            this.tn[_0xe88397 * 2 + 1] = _0x178d47;
            this.Jd[_0xe88397 * 2] = _0x31befd;
            this.Jd[_0xe88397 * 2 + 1] = _0xff3dbc;
          }
        }
      };
      _0x12e869.prototype.kj = function (_0x224d09, _0x53c630) {
        this.Kd = _0x53c630;
        for (var _0x4f2b6a = 0; _0x4f2b6a < this.Kd; _0x4f2b6a++) {
          this.sn[_0x4f2b6a * 2] = this.tn[_0x4f2b6a * 2] = this.Jd[_0x4f2b6a * 2] = _0x224d09();
          this.sn[_0x4f2b6a * 2 + 1] = this.tn[_0x4f2b6a * 2 + 1] = this.Jd[_0x4f2b6a * 2 + 1] = _0x224d09();
        }
      };
      _0x12e869.prototype.hj = function (_0x561c2b, _0x331e05, _0xc0c674) {
        this.Fd = _0xc0c674;
        for (var _0x35238d = 0; _0x35238d < this.Kd; _0x35238d++) {
          this.sn[_0x35238d * 2] = this.tn[_0x35238d * 2];
          this.sn[_0x35238d * 2 + 1] = this.tn[_0x35238d * 2 + 1];
        }
        ;
        var _0x370ce1 = _0x561c2b - this.tn[0];
        var _0x42fa0f = _0x331e05 - this.tn[1];
        this.zn(_0x370ce1, _0x42fa0f, this.Kd, this.tn);
      };
      _0x12e869.prototype.zn = function (_0x4c2cc6, _0x4b4ebe, _0x22bcef, _0x2d9b5b) {
        var _0x50c9a2 = _0x239c2a.la(_0x4c2cc6, _0x4b4ebe);
        if (!(_0x50c9a2 <= 0)) {
          var _0x2c6cad;
          var _0x33599a = _0x2d9b5b[0];
          _0x2d9b5b[0] += _0x4c2cc6;
          var _0x2aba60;
          var _0x4e2ffe = _0x2d9b5b[1];
          _0x2d9b5b[1] += _0x4b4ebe;
          var _0x2975d7 = this.Id / (this.Id + _0x50c9a2);
          var _0x284d45 = 1 - _0x2975d7 * 2;
          for (var _0x26e130 = 1, _0x39cf9e = _0x22bcef - 1; _0x26e130 < _0x39cf9e; _0x26e130++) {
            _0x2c6cad = _0x2d9b5b[_0x26e130 * 2];
            _0x2d9b5b[_0x26e130 * 2] = _0x2d9b5b[_0x26e130 * 2 - 2] * _0x284d45 + (_0x2c6cad + _0x33599a) * _0x2975d7;
            _0x33599a = _0x2c6cad;
            _0x2aba60 = _0x2d9b5b[_0x26e130 * 2 + 1];
            _0x2d9b5b[_0x26e130 * 2 + 1] = _0x2d9b5b[_0x26e130 * 2 - 1] * _0x284d45 + (_0x2aba60 + _0x4e2ffe) * _0x2975d7;
            _0x4e2ffe = _0x2aba60;
          }
          ;
          _0x284d45 = 1 - (_0x2975d7 = this.rn * this.Id / (this.rn * this.Id + _0x50c9a2)) * 2;
          _0x2d9b5b[_0x22bcef * 2 - 2] = _0x2d9b5b[_0x22bcef * 2 - 4] * _0x284d45 + (_0x2d9b5b[_0x22bcef * 2 - 2] + _0x33599a) * _0x2975d7;
          _0x2d9b5b[_0x22bcef * 2 - 1] = _0x2d9b5b[_0x22bcef * 2 - 3] * _0x284d45 + (_0x2d9b5b[_0x22bcef * 2 - 1] + _0x4e2ffe) * _0x2975d7;
        }
      };
      _0x12e869.prototype.Oh = function () {
        return {
          _a: this.Jd[0],
          ab: this.Jd[1]
        };
      };
      _0x12e869.prototype.dj = function (_0x442e25, _0x1063b9) {
        var _0x18a59b = 1000000;
        var _0x40e281 = _0x442e25;
        var _0x4627d4 = _0x1063b9;
        for (var _0x4bfa68 = 0; _0x4bfa68 < this.Kd; _0x4bfa68++) {
          var _0x529a44 = this.Jd[_0x4bfa68 * 2];
          var _0x26c27d = this.Jd[_0x4bfa68 * 2 + 1];
          var _0x353212 = _0x239c2a.la(_0x442e25 - _0x529a44, _0x1063b9 - _0x26c27d);
          if (_0x353212 < _0x18a59b) {
            _0x18a59b = _0x353212;
            _0x40e281 = _0x529a44;
            _0x4627d4 = _0x26c27d;
          }
        }
        ;
        return {
          _a: _0x40e281,
          ab: _0x4627d4,
          ej: _0x18a59b
        };
      };
      _0x12e869.prototype._i = function (_0x40b89a) {
        this.un = _0x40b89a;
      };
      _0x12e869.prototype.Pj = function (_0x4f9435, _0x4285f1) {
        this.Lj = _0x239c2a.ga(this.Lj, this.bj ? this.Fd ? 0.9 + _0x239c2a.pa(_0x4f9435 / 400 * _0x2171ac.T) * 0.1 : 1 : 0, _0x4285f1, 1 / 800);
        this.Ld = _0x239c2a.ga(this.Ld, this.bj ? this.Fd ? 1 : 0 : 1, _0x4285f1, 0.0025);
        if (this.vn != null) {
          this.vn.Yc.alpha = this.Lj;
        }
        if (this.wn != null) {
          this.wn.alpha = this.Lj;
        }
      };
      _0x12e869.prototype.Qj = function (_0x2e7a42, _0x6ad03c, _0x40ea90, _0x3ffa5e) {
        if (this.cj && this.bj) {
          var _0x1e06a8 = _0x239c2a.ra(0.11112, _0x6ad03c / 95);
          for (var _0x292f02 = 0; _0x292f02 < this.Kd; _0x292f02++) {
            var _0x546dcc = _0x239c2a.ka(this.sn[_0x292f02 * 2], this.tn[_0x292f02 * 2], _0x40ea90);
            var _0x3b9ef5 = _0x239c2a.ka(this.sn[_0x292f02 * 2 + 1], this.tn[_0x292f02 * 2 + 1], _0x40ea90);
            this.Jd[_0x292f02 * 2] = _0x239c2a.ka(_0x546dcc, this.Jd[_0x292f02 * 2], _0x1e06a8);
            this.Jd[_0x292f02 * 2 + 1] = _0x239c2a.ka(_0x3b9ef5, this.Jd[_0x292f02 * 2 + 1], _0x1e06a8);
          }
        }
        ;
        if (this.vn != null && this.cj) {
          this.vn.Hd(this, _0x2e7a42, _0x6ad03c, _0x3ffa5e);
        }
        if (this.wn != null) {
          this.wn.Rh.x = this.Jd[0];
          this.wn.Rh.y = this.Jd[1] - this.Id * 3;
        }
      };
      _0x12e869.prototype.yn = function (_0x1c4764) {
        if (this.cj) {
          if (!_0x1c4764) {
            this.An();
          }
        } else {
          if (this.vn != null) {
            _0x39b888.k.F.G(this.vn.Yc);
          }
          if (this.wn != null) {
            _0x39b888.k.F.G(this.wn);
          }
        }
      };
      _0x12e869.prototype.An = function () {
        if (this.vn == null) {
          this.vn = new _0x158a86.Xc();
        } else {
          _0x39b888.k.F.G(this.vn.Yc);
        }
        this.vn.hd(ooo.Mh.Qh.eh, ooo.ud.Cc().Ub(this.ki.mi), ooo.ud.Cc().Tb(this.ki.ni), ooo.ud.Cc().Vb(this.ki.Vi), ooo.ud.Cc().Wb(this.ki.Wi), ooo.ud.Cc().Xb(this.ki.Xi), ooo.ud.Cc().Yb(this.ki.Yi), "#ffffff");
        if (this.wn == null) {
          this.wn = new _0x158a86.Bn("");
          this.wn.style.fontFamily = "PTSans";
          this.wn.anchor.set(0.5);
        } else {
          _0x39b888.k.F.G(this.wn);
        }
        this.wn.style.fontSize = 14;
        this.wn.style.fill = ooo.ud.Cc().Tb(this.ki.ni).cc;
        this.wn.text = this.ki.Xa;
        this.un.Xh(this.ki.Je, this.vn, this.wn);
        if (_0x2cbd14.n != null && _0x2cbd14.n.Je == this.ki.Je) {
          _0x2cbd14.vj = this.wn;
          let _0x2ecfee = _0x1a98d3.sg.indexOf(_0x2cbd14.n.ni);
          if (_0x2ecfee == -1) {
            if (_0x1a98d3.ig != -1) {
              _0x1a98d3.ig = -1;
            }
          } else {
            _0x1a98d3.ig = _0x1a98d3.gg[_0x2ecfee].s;
            _0x1a98d3.re = false;
            _0x4b4167();
          }
        }
      };
      _0x12e869.Ti = function _0x42c10a() {
        this.Je = 0;
        this.mi = _0x158a86.dh.jh;
        this.ni = 0;
        this.Vi = 0;
        this.Wi = 0;
        this.Xi = 0;
        this.Yi = 0;
        this.Xa = "";
      };
      return _0x12e869;
    }();
    _0x158a86.Bn = _0x239c2a.ca(_0x39b888.k.t, function (_0xaa3b47, _0x53cb38, _0x8394f1) {
      _0x39b888.k.t.call(this, _0xaa3b47, _0x53cb38, _0x8394f1);
      this.Rh = {
        x: 0,
        y: 0
      };
    });
    _0x158a86.Sb = function () {
      function _0x47f3ec(_0x26c05b, _0x69e0bd, _0x5b76d2, _0x39ad61, _0x2932c3) {
        this.Tj = _0x26c05b;
        this.Uj = _0x69e0bd;
        this.Vj = _0x5b76d2;
        this.Wj = _0x39ad61;
        this.Xj = _0x2932c3;
      }
      _0x47f3ec.prototype.Cn = function (_0xa609d) {
        return new _0x47f3ec(_0xa609d, this.Uj, this.Vj, this.Wj, this.Xj);
      };
      _0x47f3ec.prototype.Dn = function (_0x5390f0) {
        return new _0x47f3ec(this.Tj, _0x5390f0, this.Vj, this.Wj, this.Xj);
      };
      _0x47f3ec.prototype.En = function (_0x214320) {
        return new _0x47f3ec(this.Tj, this.Uj, _0x214320, this.Wj, this.Xj);
      };
      _0x47f3ec.prototype.Fn = function (_0x1079e0) {
        return new _0x47f3ec(this.Tj, this.Uj, this.Vj, _0x1079e0, this.Xj);
      };
      _0x47f3ec.prototype.Gn = function (_0x36e729) {
        return new _0x47f3ec(this.Tj, this.Uj, this.Vj, this.Wj, _0x36e729);
      };
      return _0x47f3ec;
    }();
    _0x158a86.Bm = function () {
      function _0x1aac1a(_0x141f76) {
        this.Hn = new _0x158a86.Xc();
        this.Hn.Yc.addChild(this.Hn.Zc);
        this.In = null;
        this.Jn = null;
        this.Jm = _0x141f76;
        this.$c = 0;
        this.mj = 1;
        this.Kn = 1;
        this.Ln = 1;
        this.Mn = 1;
        this.Nn = 1;
        this.On = 1;
        this.Pn = 1;
        this.Hm("#ffffff");
      }
      var _0x3ffc8e = new _0x158a86.Sb(0, 0, 0, 0, 0);
      _0x1aac1a.prototype.ag = function () {
        return this.Hn.Yc;
      };
      _0x1aac1a.prototype.Cm = function (_0x1ce4f6) {
        this.$c = _0x1ce4f6;
        if (this.Hn.$c !== _0x1ce4f6) {
          for (var _0x5706af = _0x1ce4f6; _0x5706af < this.Hn._c.length; _0x5706af++) {
            this.Hn._c[_0x5706af].Cd();
          }
          ;
          while (this.Hn.$c > _0x1ce4f6) {
            this.Hn.$c -= 1;
            var _0xb78966 = this.Hn._c[this.Hn.$c];
            _0xb78966.md.G();
            _0xb78966.ld.G();
          }
          ;
          while (this.Hn.$c < _0x1ce4f6) {
            var _0x212875 = this.Hn._c[this.Hn.$c];
            this.Hn.$c += 1;
            this.Hn.Yc.addChild(_0x212875.ld.zd());
            this.Hn.Yc.addChild(_0x212875.md.zd());
            _0x212875.ld.Rj(this.Kn);
            _0x212875.md.Rj(this.Ln);
          }
          ;
          for (var _0x5c324c = 0; _0x5c324c < this.Hn.Zc.od.length; _0x5c324c++) {
            this.Hn.Zc.od[_0x5c324c].Rj(this.Mn);
          }
          ;
          for (var _0x55927a = 0; _0x55927a < this.Hn.Zc.pd.length; _0x55927a++) {
            this.Hn.Zc.pd[_0x55927a].Rj(this.Nn);
          }
          ;
          for (var _0xb7eeee = 0; _0xb7eeee < this.Hn.Zc.rd.length; _0xb7eeee++) {
            this.Hn.Zc.rd[_0xb7eeee].Rj(this.On);
          }
          ;
          for (var _0x79fe81 = 0; _0x79fe81 < this.Hn.Zc.qd.length; _0x79fe81++) {
            this.Hn.Zc.qd[_0x79fe81].Rj(this.Pn);
          }
        }
      };
      _0x1aac1a.prototype.Im = function () {
        return this.$c;
      };
      _0x1aac1a.prototype.Gm = function (_0x21bf79) {
        this.In = _0x21bf79;
        this.Jn = "#ffffff";
        this.Tm();
      };
      _0x1aac1a.prototype.Hm = function (_0x327cc3) {
        this.In = _0x3ffc8e;
        this.Jn = _0x327cc3;
        this.Tm();
      };
      _0x1aac1a.prototype.Tm = function () {
        this.Hn.hd(_0x158a86.jd.ch, null, ooo.ud.Cc().Tb(this.In.Tj), ooo.ud.Cc().Vb(this.In.Uj), ooo.ud.Cc().Wb(this.In.Vj), ooo.ud.Cc().Xb(this.In.Xj), ooo.ud.Cc().Yb(this.In.Wj), this.Jn);
      };
      _0x1aac1a.prototype.Dm = function (_0x1f71d4) {
        this.mj = _0x1f71d4;
      };
      _0x1aac1a.prototype.Km = function () {
        return this.mj;
      };
      _0x1aac1a.prototype.Wm = function (_0x1ddfaa, _0x483006) {
        this.Kn = _0x1ddfaa;
        this.Ln = _0x483006;
        for (var _0x550f9f = 0; _0x550f9f < this.$c; _0x550f9f++) {
          var _0x139c98 = this.Hn._c[_0x550f9f];
          _0x139c98.ld.Rj(this.Kn);
          _0x139c98.md.Rj(this.Ln);
        }
      };
      _0x1aac1a.prototype.Zm = function (_0x42467f, _0x536ae2, _0x1e2f14, _0x3852d9) {
        this.Mn = _0x42467f;
        this.Nn = _0x536ae2;
        this.On = _0x1e2f14;
        this.Pn = _0x3852d9;
        for (var _0x2157e9 = 0; _0x2157e9 < this.Hn.Zc.od.length; _0x2157e9++) {
          this.Hn.Zc.od[_0x2157e9].Rj(this.Mn);
        }
        ;
        for (var _0x2f08e5 = 0; _0x2f08e5 < this.Hn.Zc.pd.length; _0x2f08e5++) {
          this.Hn.Zc.pd[_0x2f08e5].Rj(this.Nn);
        }
        ;
        for (var _0xf6bf02 = 0; _0xf6bf02 < this.Hn.Zc.rd.length; _0xf6bf02++) {
          this.Hn.Zc.rd[_0xf6bf02].Rj(this.On);
        }
        ;
        for (var _0x426f76 = 0; _0x426f76 < this.Hn.Zc.qd.length; _0x426f76++) {
          this.Hn.Zc.qd[_0x426f76].Rj(this.Pn);
        }
      };
      _0x1aac1a.prototype.Bg = function () {
        var _0x20c29b = this.mj * 2;
        var _0x33cd57 = this.mj * 2 * 1.5;
        if (this.$c > 0) {
          var _0xe38877 = this.Jm[0];
          var _0x4bb05f = this.Jm[1];
          var _0x30d8a7 = this.Jm[2];
          this.Hn._c[0].Ad(_0xe38877, _0x4bb05f, _0x20c29b, _0x33cd57, _0x30d8a7);
          this.Hn.Zc.Ad(_0xe38877, _0x4bb05f, _0x20c29b, _0x30d8a7);
        }
        ;
        for (var _0xc31aad = 1; _0xc31aad < this.$c; _0xc31aad++) {
          var _0x2aef86 = this.Jm[_0xc31aad * 3];
          var _0x1c48a2 = this.Jm[_0xc31aad * 3 + 1];
          var _0x102449 = this.Jm[_0xc31aad * 3 + 2];
          this.Hn._c[_0xc31aad].Ad(_0x2aef86, _0x1c48a2, _0x20c29b, _0x33cd57, _0x102449);
        }
      };
      _0x1aac1a.prototype._m = function (_0x36fd53) {
        _0x36fd53.render(this.Hn.Yc);
      };
      return _0x1aac1a;
    }();
    _0x158a86.Uf = function () {
      function _0x45be0f(_0xf9437a) {
        this.Wd = _0xf9437a;
      }
      _0x45be0f.Tf = $("#background-canvas");
      _0x45be0f.Qn = $("#stretch-box");
      _0x45be0f.Rn = $("#social-buttons");
      _0x45be0f.Sn = $("#markup-wrap");
      _0x45be0f.Tn = $("#game-view");
      _0x45be0f.Un = $("#results-view");
      _0x45be0f.Vn = $("#main-menu-view");
      _0x45be0f.Wn = $("#popup-view");
      _0x45be0f.Xn = $("#toaster-view");
      _0x45be0f.Yn = $("#loading-view");
      _0x45be0f.Zn = $("#restricted-view");
      _0x45be0f.$n = $("#error-gateway-connection-view");
      _0x45be0f._n = $("#error-game-connection-view");
      _0x45be0f.prototype.Sa = function () {};
      _0x45be0f.prototype.ml = function () {};
      _0x45be0f.prototype.nl = function () {};
      _0x45be0f.prototype.hl = function () {};
      _0x45be0f.prototype.qg = function () {};
      _0x45be0f.prototype.ug = function (_0x1aa29a, _0x263fbd) {};
      return _0x45be0f;
    }();
    _0x51366c = $("#final-caption");
    _0x596633 = $("#final-continue");
    _0x88389e = $("#congrats-bg");
    _0x32ec14 = $("#unl6wj4czdl84o9b");
    _0xb9df8e = $("#final-share-fb");
    _0x2aa197 = $("#final-message");
    _0x465880 = $("#final-score");
    _0x18e01d = $("#final-place");
    _0x882cd2 = $("#final-board");
    _0x5bccf3 = $("#game-canvas");
    (_0x2cece1 = _0x239c2a.ca(_0x158a86.Uf, function () {
      _0x158a86.Uf.call(this, _0x158a86.ll.ao);
      var _0xf6fe71 = this;
      var _0x2ff5c9 = _0x5bccf3.get()[0];
      _0xb9df8e.toggle(_0x2171ac.co.bo);
      _0x51366c.text(_0x239c2a.U("index.game.result.title"));
      _0x596633.text(_0x239c2a.U("index.game.result.continue"));
      _0x596633.html("Continue (Home)");
      _0x596633.after("<div id='final-replay'>Replay</div>");
      _0x596633.click(function () {
        ooo.ij.if();
        _0x2171ac.co.do.Va();
        ooo.ij.Ye(_0x158a86.Pe.Se.Jf);
        ooo.Xg.gl(ooo.Xg.Jf);
      });
      $("#final-replay").click(function () {
        ooo.ij.if();
        ooo.to();
      });
      var _0x4b3429 = [{
        url: "bkgnd0.png"
      }, {
        url: "bg_sky__6.png"
      }, {
        url: "bg_sky_7.png"
      }, {
        url: "Galaxy-Star.png"
      }, {
        url: "bg_sky_10.png"
      }, {
        url: "bg_sky_9.png"
      }, {
        url: "bg_sky__2.png"
      }, {
        url: "bg_sky__1.png"
      }, {
        url: "bg_sky_8.png"
      }, {
        url: "bg_sky__5.png"
      }, {
        url: "bg_sky_11.png"
      }, {
        url: "bg_sky_12.png"
      }];
      var _0x54e84a = 0;
      function _0x3551f3() {
        _0x54e84a = (_0x54e84a + 1) % _0x4b3429.length;
        var _0x4c5421 = _0x4b3429[_0x54e84a].url;
        var _0xdfe0b4 = _0x1a98d3.s_l + "/get_store.phpitem=" + _0x4c5421;
        _0x1a98d3.background = _0xdfe0b4;
        localStorage.setItem("SaveGamewft", JSON.stringify(_0x1a98d3));
        try {
          if (PIXI.utils.TextureCache[_0xdfe0b4]) {
            PIXI.utils.TextureCache[_0xdfe0b4].destroy(true);
            delete PIXI.utils.TextureCache[_0xdfe0b4];
          }
          if (typeof ooo !== "undefined" && ooo.ef && ooo.ef.fn_o) {
            var _0x23f56e = ooo.ef.fn_o(_0xdfe0b4);
            ooo.ef.F_bg = new PIXI.Texture(_0x23f56e);
          } else if (typeof PIXI !== "undefined") {
            ooo.ef.F_bg = PIXI.Texture.from(_0xdfe0b4);
          }
          if (ooo && ooo.Xg && ooo.Xg.Kf && ooo.Xg.Kf.Wg && ooo.Xg.Kf.Wg.sh) {
            ooo.Xg.Kf.Wg.sh.Hh(ooo.ef.F_bg);
          }
        } catch (_0xa25e67) {
          console.log("Background change error:", _0xa25e67);
        }
      }
      let _0x33bc53 = {
        left: false,
        right: false
      };
      function _0x39c5a8() {
        if (_0x1a98d3.hz && !_0x1a98d3.mobile) {
          if (_0x33bc53.left && _0x1a98d3.z >= 0.2) {
            _0x1a98d3.z = _0x1a98d3.z - 0.05;
          }
          if (_0x33bc53.right && _0x1a98d3.z <= 25) {
            _0x1a98d3.z = _0x1a98d3.z + 0.05;
          }
        }
        requestAnimationFrame(_0x39c5a8);
      }
      $("html").keydown(function (_0x40ce45) {
        if (_0x40ce45.keyCode !== 17 || !(_0x1a98d3.ctrl = true)) {
          if (_0x40ce45.keyCode !== 17) {
            _0x1a98d3.ctrl = false;
          }
        }
        if (_0x40ce45.keyCode === 53) {
          if (_0x1a98d3.s || _0x2cbd14.on) {
            _0x3551f3();
          }
        }
        if (_0x40ce45.keyCode == 188 || _0x40ce45.keyCode == 37) {
          _0x33bc53.left = true;
        }
        if (_0x40ce45.keyCode == 190 || _0x40ce45.keyCode == 39) {
          _0x33bc53.right = true;
        }
        if (_0x40ce45.keyCode === 32) {
          _0xf6fe71.eo = true;
        }
        if (_0x40ce45.keyCode === 49) {
          _0x4bd7db();
        }
        if (_0x40ce45.keyCode === 50) {
          if (_0x2cbd14.on && _0x1a98d3.s) {
            if (_0x1a98d3.selectedHats && _0x1a98d3.selectedHats.length > 0) {
              _0x1a98d3.currentHatIndex = (_0x1a98d3.currentHatIndex + 1) % _0x1a98d3.selectedHats.length;
              let _0x155f11 = _0x1a98d3.selectedHats[_0x1a98d3.currentHatIndex];
              _0x46c8a6(_0x155f11);
              localStorage.setItem("SaveGamewft", JSON.stringify(_0x1a98d3));
            }
          }
        }
      }).keyup(function (_0x1a37db) {
        _0x1a98d3.ctrl = false;
        if (_0x1a37db.keyCode == 188 || _0x1a37db.keyCode == 37) {
          _0x33bc53.left = false;
        }
        if (_0x1a37db.keyCode == 190 || _0x1a37db.keyCode == 39) {
          _0x33bc53.right = false;
        }
        if (_0x2cbd14.on && _0x1a98d3.s) {
          if (_0x1a37db.keyCode == 81 || _0x1a37db.keyCode == 87) {
            if (_0x1a37db.keyCode == 81) {
              _0x2add7a.texture = _0x4fbc00;
              _0x2da668.texture = _0x1b024d;
              _0x2add7a.alpha = 1;
              _0x2da668.alpha = 0.25;
              _0x13d32a();
            }
            if (_0x1a37db.keyCode == 87) {
              _0x2da668.texture = _0xb11556;
              _0x2add7a.texture = _0x30cfd0;
              _0x2add7a.alpha = 0.25;
              _0x2da668.alpha = 1;
              _0x44e20b();
            }
          } else {
            _0x2da668.texture = _0x1b024d;
            _0x2add7a.texture = _0x30cfd0;
            _0x2da668.alpha = 0.25;
            _0x2add7a.alpha = 0.25;
            _0x12badb = false;
            _0x93ba91 = 55;
            _0x39f5db = 1;
            _0x31c07e = true;
            clearInterval(_0xd66ce6);
            _0xd66ce6 = null;
          }
          if (_0x1a37db.keyCode == 90) {
            if (_0x1a98d3.z == 1) {
              if (_0x1a98d3.h) {
                _0x1a98d3.z = 1.6;
              } else {
                _0x1a98d3.z = 1.2;
              }
              _0x423a56.texture = _0x3b95dc;
              _0x423a56.alpha = 1;
            } else {
              _0x1a98d3.z = 1;
              _0x423a56.texture = _0x168c20;
              _0x423a56.alpha = 0.25;
            }
          }
        }
        if (_0x2cbd14.on && _0x1a37db.keyCode == 82) {
          if (!window.lastRespawnTime) {
            window.lastRespawnTime = 0;
          }
          const _0x8a5dd1 = new Date().getTime();
          const _0x313049 = _0x8a5dd1 - window.lastRespawnTime;
          if (_0x313049 < 1000) {
            return;
          }
          window.lastRespawnTime = _0x8a5dd1;
          if (_0x1a98d3.pi && _0x1a98d3.pn) {
            $("#port_id_s").val(_0x1a98d3.pi);
            $("#port_name_s").val(_0x1a98d3.pn);
            $("#port_id").val($("#port_id_s").val());
            $("#port_name").val($("#port_name_s").val());
          }
          _0x1a98d3.r1 = true;
          try {
            if (ooo.Mh && typeof ooo.Mh.uj === "function") {
              ooo.Mh.uj();
              setTimeout(function () {
                document.getElementById("mm-action-play").click();
              }, 300);
              return;
            }
          } catch (_0x3b14a5) {}
          try {
            if (ooo.Mh && typeof ooo.Mh.gr === "function") {
              ooo.Mh.gr();
            } else if (ooo.Mh && ooo.Mh.Rq) {
              try {
                ooo.Mh.go = 3;
              } catch (_0x391c37) {}
              ooo.Mh.Rq.close();
            }
            setTimeout(function () {
              try {
                const _0x2fd514 = document.querySelectorAll(".error, .alert, .modal, .popup, .notification");
                _0x2fd514.forEach(_0x1bc49d => {
                  try {
                    _0x1bc49d.style.display = "none";
                  } catch (_0xe8301a) {}
                });
              } catch (_0x406e1d) {}
              document.getElementById("mm-action-play").click();
            }, 350);
          } catch (_0x100ffa) {
            document.getElementById("mm-action-play").click();
          }
        }
        if (_0x2cbd14.on && _0x1a37db.keyCode == 56) {
          document.getElementById("settings-show-names-switch").click();
          if (_0x1a98d3.sn) {
            _0x1a98d3.sn = false;
          } else {
            _0x1a98d3.sn = true;
          }
        }
        if (_0x1a37db.keyCode === 32) {
          _0xf6fe71.eo = false;
        }
      });
      _0x39c5a8();
      window.addEventListener("load", function () {
        if (_0x1a98d3.background) {
          var _0x18ebf7 = _0x1a98d3.background;
          for (var _0x3da69d = 0; _0x3da69d < _0x4b3429.length; _0x3da69d++) {
            if (_0x4b3429[_0x3da69d].url === _0x18ebf7) {
              _0x54e84a = _0x3da69d;
              break;
            }
          }
        }
      });
      _0x2ff5c9.addEventListener("touchmove", function (_0x3345f2) {
        if (_0x2cbd14.on && _0x1a98d3.mobile && _0x1a98d3.mo != 6 && _0x1a98d3.s) {
          var _0x1dee4f = btoa(_0x1a98d3.c_1);
          if (_0x1a98d3.mo1.x != -1 && _0x1a98d3.mo1.y == -1 && btoa(_0x1dee4f) == _0x1a98d3.d_1 || _0x1a98d3.mo2.x == -1 && _0x1a98d3.mo2.y != -1 && btoa(_0x1dee4f) == _0x1a98d3.d_1) {
            var _0x2871da = ooo.Xg.Kf.Wg.Ah;
            var _0x26898a = _0x2ff5c9.offsetHeight;
            var _0x532788 = _0x2ff5c9.offsetWidth;
            var _0x121691 = _0x26898a * 0.5;
            var _0x140249 = _0x532788 * 0.5;
            var _0x5abda6 = btoa(_0x1a98d3.c_2);
            for (let _0x172333 = 0; _0x172333 < _0x3345f2.changedTouches.length; _0x172333++) {
              var _0xd645e4 = _0x3345f2.changedTouches[_0x172333].pageX;
              var _0x22b430 = _0x3345f2.changedTouches[_0x172333].pageY;
              var _0x5b6155 = _0x3345f2.changedTouches[_0x172333].identifier;
              if (_0x1a98d3.mo == 1 && btoa(_0x5abda6) == _0x1a98d3.d_2) {
                _0x26898a *= 0.5;
                _0x532788 *= 0.5;
              }
              if (_0x1a98d3.mo == 2 && btoa(_0x5abda6) == _0x1a98d3.d_2) {
                _0x26898a = _0x2871da.img_o_2.y + 110;
                _0x532788 = _0x2871da.img_o_2.x + 110;
              }
              if (_0x1a98d3.mo == 3 && btoa(_0x5abda6) == _0x1a98d3.d_2) {
                _0x26898a = _0x2871da.img_o_3.y + 110;
                _0x532788 = _0x2871da.img_o_3.x + 110;
              }
              if (_0x1a98d3.mo == 4 && btoa(_0x5abda6) == _0x1a98d3.d_2 || _0x1a98d3.mo == 5 && btoa(_0x5abda6) == _0x1a98d3.d_2) {
                _0x26898a = _0x2871da.img_o_4.y + 110;
                _0x532788 = _0x2871da.img_o_4.x + 110;
              }
              var _0x16a679 = btoa(_0x1a98d3.c_5);
              var _0x284245 = Math.atan2(_0x22b430 - _0x26898a, _0xd645e4 - _0x532788);
              var _0x4d1fc6 = Math.cos(_0x284245);
              var _0x5bee14 = Math.sin(_0x284245);
              var _0x152576 = btoa(_0x1a98d3.c_4);
              var _0x12748e = _0x1a98d3.mo1.x == _0x5b6155;
              btoa(_0x1a98d3.c_3);
              if (_0x12748e && btoa(_0x152576) == _0x1a98d3.d_4) {
                if (_0xd645e4 <= 0 || _0x22b430 <= 0) {
                  _0x1a98d3.mo1.x = -1;
                  if (_0x1a98d3.mo == 1) {
                    _0x2871da.img_p_1.alpha = 0.25;
                  }
                  if (_0x1a98d3.mo == 2) {
                    _0x2871da.img_o_2.alpha = 0.25;
                    _0x2871da.img_i_2.alpha = 0.25;
                    _0x2871da.img_p_2.alpha = 0.25;
                  }
                  if (_0x1a98d3.mo == 3) {
                    _0x2871da.img_o_3.alpha = 0.25;
                    _0x2871da.img_i_3.alpha = 0.25;
                    _0x2871da.img_p_3.alpha = 0.25;
                  }
                  if (_0x1a98d3.mo == 4 || _0x1a98d3.mo == 5) {
                    _0x2871da.img_p_2.alpha = 0.25;
                  }
                } else {
                  _0xf6fe71.fo = _0x284245;
                  var _0x1d4ccf = 50;
                  if (_0x1a98d3.mo == 1 || _0x1a98d3.mo == 4 || _0x1a98d3.mo == 5) {
                    _0x1d4ccf = 110;
                  }
                  var _0x27bf80 = _0x532788 - _0xd645e4;
                  var _0x2233d4 = _0x26898a - _0x22b430;
                  var _0x1b9227 = Math.sqrt(_0x27bf80 * _0x27bf80 + _0x2233d4 * _0x2233d4);
                  var _0x142d77 = _0x140249 + _0x1b9227 * _0x4d1fc6 - 68;
                  var _0x47f1f9 = _0x121691 + _0x1b9227 * _0x5bee14 - 68;
                  var _0x716ca7 = _0x140249 + _0x1d4ccf * _0x4d1fc6 - 68;
                  var _0x7bb202 = _0x121691 + _0x1d4ccf * _0x5bee14 - 68;
                  var _0x16956e = _0x140249 + _0x4d1fc6 * 75 - 68;
                  var _0x3387ae = _0x121691 + _0x5bee14 * 75 - 68;
                  var _0x540bcd = _0xd645e4 - 85;
                  var _0x31193e = _0x22b430 - 85;
                  var _0x3d00c7 = _0x532788 + _0x1d4ccf * _0x4d1fc6 - 85;
                  var _0x1970e2 = _0x26898a + _0x1d4ccf * _0x5bee14 - 85;
                  var _0x573aa3 = _0x532788 + _0x4d1fc6 * 3 - 110;
                  var _0x27f558 = _0x26898a + _0x5bee14 * 3 - 110;
                  if (_0x1b9227 < _0x1d4ccf) {
                    if (_0x1a98d3.mo2.x == -1 && _0x1a98d3.mo2.y != -1) {
                      _0x2871da.img_pf_1.x = _0x142d77;
                      _0x2871da.img_pf_1.y = _0x47f1f9;
                    } else {
                      if (_0x1a98d3.mo == 1) {
                        _0x2871da.img_p_1.x = _0x142d77;
                        _0x2871da.img_p_1.y = _0x47f1f9;
                      }
                      if (_0x1a98d3.mo == 2 || _0x1a98d3.mo == 4 || _0x1a98d3.mo == 5) {
                        _0x2871da.img_p_2.x = _0x142d77;
                        _0x2871da.img_p_2.y = _0x47f1f9;
                      }
                      if (_0x1a98d3.mo == 3) {
                        _0x2871da.img_p_3.x = _0x142d77;
                        _0x2871da.img_p_3.y = _0x47f1f9;
                      }
                    }
                    if (_0x1a98d3.mo == 2) {
                      _0x2871da.img_i_2.y = _0x31193e;
                      _0x2871da.img_i_2.x = _0x540bcd;
                    }
                    if (_0x1a98d3.mo == 3) {
                      _0x2871da.img_i_3.y = _0x31193e;
                      _0x2871da.img_i_3.x = _0x540bcd;
                    }
                  } else {
                    if (_0x1a98d3.mo2.x == -1 && _0x1a98d3.mo2.y != -1) {
                      _0x2871da.img_pf_1.x = _0x716ca7;
                      _0x2871da.img_pf_1.y = _0x7bb202;
                      if (_0x1a98d3.mo == 2 || _0x1a98d3.mo == 3) {
                        if (_0x1b9227 < 75) {
                          _0x2871da.img_pf_1.x = _0x142d77;
                          _0x2871da.img_pf_1.y = _0x47f1f9;
                        } else {
                          _0x2871da.img_pf_1.x = _0x16956e;
                          _0x2871da.img_pf_1.y = _0x3387ae;
                        }
                      }
                    } else {
                      if (_0x1a98d3.mo == 1) {
                        _0x2871da.img_p_1.x = _0x716ca7;
                        _0x2871da.img_p_1.y = _0x7bb202;
                      }
                      if (_0x1a98d3.mo == 2 || _0x1a98d3.mo == 4 || _0x1a98d3.mo == 5) {
                        _0x2871da.img_p_2.x = _0x716ca7;
                        _0x2871da.img_p_2.y = _0x7bb202;
                        if (_0x1a98d3.mo == 2) {
                          if (_0x1b9227 < 75) {
                            _0x2871da.img_p_2.x = _0x142d77;
                            _0x2871da.img_p_2.y = _0x47f1f9;
                          } else {
                            _0x2871da.img_p_2.x = _0x16956e;
                            _0x2871da.img_p_2.y = _0x3387ae;
                          }
                        }
                      }
                      if (_0x1a98d3.mo == 3) {
                        if (_0x1b9227 < 75) {
                          _0x2871da.img_p_3.x = _0x142d77;
                          _0x2871da.img_p_3.y = _0x47f1f9;
                        } else {
                          _0x2871da.img_p_3.x = _0x16956e;
                          _0x2871da.img_p_3.y = _0x3387ae;
                        }
                      }
                    }
                    if (_0x1a98d3.mo == 2) {
                      _0x2871da.img_i_2.y = _0x1970e2;
                      _0x2871da.img_i_2.x = _0x3d00c7;
                    }
                    if (_0x1a98d3.mo == 3) {
                      _0x2871da.img_i_3.y = _0x1970e2;
                      _0x2871da.img_i_3.x = _0x3d00c7;
                      _0x2871da.img_o_3.y = _0x27f558;
                      _0x2871da.img_o_3.x = _0x573aa3;
                    }
                  }
                }
              } else if ((_0x12748e = _0x1a98d3.mo2.y == _0x5b6155) && btoa(_0x16a679) == _0x1a98d3.d_5) {
                if (_0xd645e4 <= 0 || _0x22b430 <= 0) {
                  _0x1a98d3.mo2.y = -1;
                  _0x2871da.img_f.visible = false;
                  _0x2871da.img_pf_1.visible = false;
                  if (_0x1a98d3.mo == 1) {
                    _0x2871da.img_p_1.visible = true;
                  }
                  if (_0x1a98d3.mo == 2 || _0x1a98d3.mo == 4 || _0x1a98d3.mo == 5) {
                    _0x2871da.img_p_2.visible = true;
                  }
                  if (_0x1a98d3.mo == 3) {
                    _0x2871da.img_p_3.visible = true;
                  }
                  if (_0x1a98d3.mo == 4 || _0x1a98d3.mo == 5) {
                    _0x2871da.img_f.visible = true;
                  }
                  _0xf6fe71.eo = false;
                } else if (_0x1a98d3.mo == 3) {
                  _0x4d1fc6 = Math.cos(_0x284245 = Math.atan2(_0x22b430 - (_0x26898a = _0x2871da.img_f.y + 100), _0xd645e4 - (_0x532788 = _0x2871da.img_f.x + 100)));
                  _0x5bee14 = Math.sin(_0x284245);
                  var _0x540bcd = _0x532788 + _0x4d1fc6 * 3 - 100;
                  var _0x31193e = _0x26898a + _0x5bee14 * 3 - 100;
                  var _0x27bf80 = _0x532788 - _0xd645e4;
                  var _0x2233d4 = _0x26898a - _0x22b430;
                  var _0x1b9227 = Math.sqrt(_0x27bf80 * _0x27bf80 + _0x2233d4 * _0x2233d4);
                  if (_0x1b9227 >= 40) {
                    _0x2871da.img_f.y = _0x540bcd;
                    _0x2871da.img_f.x = _0x31193e;
                  }
                }
              }
            }
          }
        } else if (!_0xda46a3() || !_0x1a98d3.joystick.checked) {
          if (_0x3345f2 = _0x3345f2 || window.event) {
            if ((_0x3345f2 = _0x3345f2.touches[0]).clientX !== undefined) {
              _0xf6fe71.fo = Math.atan2(_0x3345f2.clientY - _0x2ff5c9.offsetHeight * 0.5, _0x3345f2.clientX - _0x2ff5c9.offsetWidth * 0.5);
            } else {
              _0xf6fe71.fo = Math.atan2(_0x3345f2.pageY - _0x2ff5c9.offsetHeight * 0.5, _0x3345f2.pageX - _0x2ff5c9.offsetWidth * 0.5);
            }
          }
        }
      }, true);
      _0x2ff5c9.addEventListener("touchstart", function (_0xa8b1c8) {
        if (_0x2cbd14.on && _0x1a98d3.mobile && _0x1a98d3.mo != 6 && _0x1a98d3.s) {
          var _0x4ef1fc = ooo.Xg.Kf.Wg.Ah;
          var _0x40e98f = btoa(_0x1a98d3.c_4);
          var _0x1d2cad = _0x2ff5c9.offsetHeight;
          var _0xde7e54 = btoa(_0x1a98d3.c_3);
          var _0x3347d7 = _0x2ff5c9.offsetWidth;
          var _0x204e08 = btoa(_0x1a98d3.c_5);
          var _0xe7ee3c = (_0xa8b1c8 = _0xa8b1c8 || window.event).touches.item(0).pageX;
          var _0x4dc57 = btoa(_0x1a98d3.c_2);
          var _0x1e901d = _0xa8b1c8.touches.item(0).pageY;
          var _0xca1f06 = _0xa8b1c8.touches.length;
          var _0x3686a7 = btoa(_0x1a98d3.c_1);
          var _0x37fb72 = _0xa8b1c8.touches.item(0).identifier;
          for (let _0x2006d1 = 0; _0x2006d1 < _0xca1f06; _0x2006d1++) {
            if (_0x1a98d3.mo2.x == -1 && _0x1a98d3.mo2.y != -1) {
              if (_0xa8b1c8.touches.item(_0x2006d1).identifier != _0x1a98d3.mo2.y) {
                _0xe7ee3c = _0xa8b1c8.touches.item(_0x2006d1).pageX;
                _0x1e901d = _0xa8b1c8.touches.item(_0x2006d1).pageY;
                _0x37fb72 = _0xa8b1c8.touches.item(_0x2006d1).identifier;
              }
            } else {
              _0xe7ee3c = _0xa8b1c8.touches.item(_0x2006d1).pageX;
              _0x1e901d = _0xa8b1c8.touches.item(_0x2006d1).pageY;
              _0x37fb72 = _0xa8b1c8.touches.item(_0x2006d1).identifier;
            }
          }
          ;
          var _0x43142a = 0;
          if (_0x1a98d3.mo == 4 && btoa(_0x204e08) == _0x1a98d3.d_5 || _0x1a98d3.mo == 5 && btoa(_0x40e98f) == _0x1a98d3.d_4) {
            _0x43142a = Math.sqrt((_0xe7ee3c - _0x4ef1fc.img_f.x - 100) * (_0xe7ee3c - _0x4ef1fc.img_f.x - 100) + (_0x1e901d - _0x4ef1fc.img_f.y - 100) * (_0x1e901d - _0x4ef1fc.img_f.y - 100));
          }
          if (_0xca1f06 == 1 && (_0x1a98d3.mo == 4 && _0x43142a > 40 || _0x1a98d3.mo != 4) && (_0x1a98d3.mo == 5 && _0x43142a > 40 || _0x1a98d3.mo != 5)) {
            _0x1a98d3.mo2.y = -1;
            _0x4ef1fc.img_f.visible = false;
            _0x4ef1fc.img_pf_1.visible = false;
            if (_0x1a98d3.mo == 1) {
              _0x4ef1fc.img_p_1.alpha = 0.25;
              _0x4ef1fc.img_p_1.visible = true;
            }
            if (_0x1a98d3.mo == 2) {
              _0x4ef1fc.img_o_2.alpha = 0.25;
              _0x4ef1fc.img_i_2.alpha = 0.25;
              _0x4ef1fc.img_p_2.alpha = 0.25;
              _0x4ef1fc.img_p_2.visible = true;
            }
            if (_0x1a98d3.mo == 3) {
              _0x4ef1fc.img_o_3.alpha = 0.25;
              _0x4ef1fc.img_i_3.alpha = 0.25;
              _0x4ef1fc.img_p_3.alpha = 0.25;
              _0x4ef1fc.img_p_3.visible = true;
            }
            if (_0x1a98d3.mo == 4 || _0x1a98d3.mo == 5) {
              _0x4ef1fc.img_p_2.alpha = 0.25;
              _0x4ef1fc.img_p_2.visible = true;
              _0x4ef1fc.img_f.visible = true;
            }
            _0xf6fe71.eo = false;
          }
          if (_0x1a98d3.mo1.x == -1 && _0x1a98d3.mo1.y == -1 && btoa(_0x40e98f) == _0x1a98d3.d_4 && (_0x1a98d3.mo == 4 && _0x43142a > 40 || _0x1a98d3.mo != 4 && btoa(_0xde7e54) == _0x1a98d3.d_3) && (_0x1a98d3.mo == 5 && _0x43142a > 40 || _0x1a98d3.mo != 5 && btoa(_0x4dc57) == _0x1a98d3.d_2)) {
            _0x1a98d3.mo1.x = _0x37fb72;
            if (_0x1a98d3.mo1.x == _0x1a98d3.mo2.y && _0x1a98d3.mo1.y == _0x1a98d3.mo2.x) {
              _0xe7ee3c = _0xa8b1c8.touches.item(1).pageX;
              _0x1e901d = _0xa8b1c8.touches.item(1).pageY;
            }
            var _0x229fc2 = _0x3347d7 * 0.5 - 68;
            var _0x334d3b = _0x1d2cad * 0.5 - 68;
            var _0x1b307d = _0xe7ee3c - 110;
            var _0x1299cb = _0x1e901d - 110;
            var _0x169ea6 = _0xe7ee3c - 85;
            var _0x31d249 = _0x1e901d - 85;
            if (_0x1a98d3.mo == 1 && _0x1a98d3.mo2.x == -1 && _0x1a98d3.mo2.y == -1) {
              _0x4ef1fc.img_p_1.alpha = 1;
              _0x4ef1fc.img_p_1.x = _0x229fc2;
              _0x4ef1fc.img_p_1.y = _0x334d3b;
              _0x4ef1fc.img_p_1.visible = true;
            }
            if (_0x1a98d3.mo == 2) {
              _0x4ef1fc.img_o_2.alpha = 1;
              _0x4ef1fc.img_o_2.x = _0x1b307d;
              _0x4ef1fc.img_o_2.y = _0x1299cb;
              _0x4ef1fc.img_i_2.alpha = 1;
              _0x4ef1fc.img_i_2.x = _0x169ea6;
              _0x4ef1fc.img_i_2.y = _0x31d249;
              if (_0x1a98d3.mo2.x == -1 && _0x1a98d3.mo2.y == -1) {
                _0x4ef1fc.img_p_2.alpha = 1;
                _0x4ef1fc.img_p_2.x = _0x229fc2;
                _0x4ef1fc.img_p_2.y = _0x334d3b;
                _0x4ef1fc.img_p_2.visible = true;
              }
            }
            if (_0x1a98d3.mo == 3 && btoa(_0x204e08) == _0x1a98d3.d_5) {
              _0x4ef1fc.img_o_3.alpha = 1;
              _0x4ef1fc.img_o_3.x = _0x1b307d;
              _0x4ef1fc.img_o_3.y = _0x1299cb;
              _0x4ef1fc.img_i_3.alpha = 1;
              _0x4ef1fc.img_i_3.x = _0x169ea6;
              _0x4ef1fc.img_i_3.y = _0x31d249;
              if (_0x1a98d3.mo2.x == -1 && _0x1a98d3.mo2.y == -1) {
                _0x4ef1fc.img_p_3.alpha = 1;
                _0x4ef1fc.img_p_3.x = _0x229fc2;
                _0x4ef1fc.img_p_3.y = _0x334d3b;
                _0x4ef1fc.img_p_3.visible = true;
              }
            }
            if (_0x1a98d3.mo == 4 && btoa(_0x4dc57) == _0x1a98d3.d_2 && _0x1a98d3.mo2.x == -1 && _0x1a98d3.mo2.y == -1) {
              _0x4ef1fc.img_p_2.alpha = 1;
              _0x4ef1fc.img_p_2.x = _0x229fc2;
              _0x4ef1fc.img_p_2.y = _0x334d3b;
              _0x4ef1fc.img_p_2.visible = true;
            }
            if (_0x1a98d3.mo == 5 && btoa(_0xde7e54) == _0x1a98d3.d_3 && _0x1a98d3.mo2.x == -1 && _0x1a98d3.mo2.y == -1) {
              _0x4ef1fc.img_p_2.alpha = 1;
              _0x4ef1fc.img_p_2.x = _0x229fc2;
              _0x4ef1fc.img_p_2.y = _0x334d3b;
              _0x4ef1fc.img_p_2.visible = true;
            }
          } else if (_0xca1f06 >= 2 && _0x1a98d3.mo2.x == -1 && _0x1a98d3.mo2.y == -1 && btoa(_0xde7e54) == _0x1a98d3.d_3 || _0xca1f06 == 1 && _0x1a98d3.mo == 4 && _0x43142a <= 40 && btoa(_0x3686a7) == _0x1a98d3.d_1 || _0xca1f06 == 1 && _0x1a98d3.mo == 5 && _0x43142a <= 40 && btoa(_0x4dc57) == _0x1a98d3.d_2) {
            _0x1a98d3.mo2.y = _0x37fb72;
            _0x4ef1fc.img_f.visible = true;
            _0x4ef1fc.img_pf_1.visible = true;
            if (_0x1a98d3.mo == 1) {
              _0x4ef1fc.img_p_1.visible = false;
              _0x4ef1fc.img_pf_1.x = _0x4ef1fc.img_p_1.x;
              _0x4ef1fc.img_pf_1.y = _0x4ef1fc.img_p_1.y;
            }
            if (_0x1a98d3.mo == 2 || _0x1a98d3.mo == 4 || _0x1a98d3.mo == 5) {
              _0x4ef1fc.img_p_2.visible = false;
              _0x4ef1fc.img_pf_1.x = _0x4ef1fc.img_p_2.x;
              _0x4ef1fc.img_pf_1.y = _0x4ef1fc.img_p_2.y;
            }
            if (_0x1a98d3.mo == 3 && btoa(_0xde7e54) == _0x1a98d3.d_3) {
              _0x4ef1fc.img_p_3.visible = false;
              _0x4ef1fc.img_pf_1.x = _0x4ef1fc.img_p_3.x;
              _0x4ef1fc.img_pf_1.y = _0x4ef1fc.img_p_3.y;
            }
            if (_0x1a98d3.mo != 4 && _0x1a98d3.mo != 5) {
              _0x4ef1fc.img_f.x = _0xe7ee3c - 100;
              _0x4ef1fc.img_f.y = _0x1e901d - 100;
            }
            _0xf6fe71.eo = true;
          }
          ;
          _0xa8b1c8.preventDefault();
        } else {
          if (_0xa8b1c8 = _0xa8b1c8 || window.event) {
            _0xf6fe71.eo = _0xa8b1c8.touches.length >= 2;
          }
          _0xa8b1c8.preventDefault();
        }
      }, true);
      _0x2ff5c9.addEventListener("touchend", function (_0x23ffac) {
        if (_0x2cbd14.on && _0x1a98d3.mobile && _0x1a98d3.mo != 6 && _0x1a98d3.s) {
          var _0x3d7ab1 = ooo.Xg.Kf.Wg.Ah;
          var _0x32734c = btoa(_0x1a98d3.c_1);
          if (_0x23ffac = _0x23ffac || window.event) {
            if ((_0x23ffac = _0x23ffac.changedTouches[0]).clientX !== undefined) {
              _0x5c0e64(_0x23ffac.clientX, _0x23ffac.clientY);
            } else {
              _0x5c0e64(_0x23ffac.pageX, _0x23ffac.pageY);
            }
          }
          var _0x3bc311 = btoa(_0x1a98d3.c_2);
          var _0xcad847 = _0x23ffac.identifier;
          if (_0xcad847 == _0x1a98d3.mo1.x && _0x1a98d3.mo1.y == -1 && btoa(_0x3bc311) == _0x1a98d3.d_2) {
            _0x1a98d3.mo1.x = -1;
            if (_0x1a98d3.mo == 1) {
              _0x3d7ab1.img_p_1.alpha = 0.25;
            }
            if (_0x1a98d3.mo == 2) {
              _0x3d7ab1.img_o_2.alpha = 0.25;
              _0x3d7ab1.img_i_2.alpha = 0.25;
              _0x3d7ab1.img_p_2.alpha = 0.25;
            }
            if (_0x1a98d3.mo == 3 && btoa(_0x32734c) == _0x1a98d3.d_1) {
              _0x3d7ab1.img_o_3.alpha = 0.25;
              _0x3d7ab1.img_i_3.alpha = 0.25;
              _0x3d7ab1.img_p_3.alpha = 0.25;
            }
            if (_0x1a98d3.mo == 4) {
              _0x3d7ab1.img_p_2.alpha = 0.25;
            }
            if (_0x1a98d3.mo == 5) {
              _0x3d7ab1.img_p_2.alpha = 0.25;
            }
          }
          var _0x936640 = btoa(_0x1a98d3.c_3);
          if (_0x1a98d3.mo2.x == -1 && _0xcad847 == _0x1a98d3.mo2.y && btoa(_0x936640) == _0x1a98d3.d_3) {
            _0x1a98d3.mo2.y = -1;
            _0x3d7ab1.img_f.visible = false;
            _0x3d7ab1.img_pf_1.visible = false;
            if (_0x1a98d3.mo == 1) {
              _0x3d7ab1.img_p_1.visible = true;
            }
            if (_0x1a98d3.mo == 2 || _0x1a98d3.mo == 4 && btoa(_0x3bc311) == _0x1a98d3.d_2 || _0x1a98d3.mo == 5 && btoa(_0x936640) == _0x1a98d3.d_3) {
              _0x3d7ab1.img_p_2.visible = true;
            }
            if (_0x1a98d3.mo == 3) {
              _0x3d7ab1.img_p_3.visible = true;
            }
            if (_0x1a98d3.mo == 4 || _0x1a98d3.mo == 5) {
              _0x3d7ab1.img_f.visible = true;
            }
            _0xf6fe71.eo = false;
          }
        } else {
          if (_0x23ffac = _0x23ffac || window.event) {
            _0xf6fe71.eo = _0x23ffac.touches.length >= 2;
          }
          if (_0x1a98d3.mobile && _0x1a98d3.s && (_0x23ffac = _0x23ffac || window.event)) {
            if ((_0x23ffac = _0x23ffac.changedTouches[0]).clientX !== undefined) {
              _0x5c0e64(_0x23ffac.clientX, _0x23ffac.clientY);
            } else {
              _0x5c0e64(_0x23ffac.pageX, _0x23ffac.pageY);
            }
          }
        }
      }, true);
      _0x2ff5c9.addEventListener("mousemove", function (_0x56a5bb) {
        if (_0x56a5bb = _0x56a5bb || _0x158a86.c.event && f3(_0x56a5bb.clientX) != "undefined") {
          _0xf6fe71.fo = _0x239c2a.ta(_0x56a5bb.clientY - _0x2ff5c9.offsetHeight * 0.5, _0x56a5bb.clientX - _0x2ff5c9.offsetWidth * 0.5);
        }
      }, true);
      _0x2ff5c9.addEventListener("mousedown", function (_0x134ca9) {
        _0xf6fe71.eo = true;
      }, true);
      _0x2ff5c9.addEventListener("mouseup", function (_0x1a5781) {
        _0xf6fe71.eo = false;
      }, true);
      this.Wg = new _0x158a86.lh(_0x5bccf3);
      this.go = _0x340748.ho;
      this.fo = 0;
      this.eo = false;
      _0x2cbd14.eie = _0xf6fe71;
    })).prototype.Sa = function () {};
    _0x2cece1.prototype.ml = function () {
      _0x158a86.Nf.rg(false);
      _0x39b888.f.h(_0x158a86.Uf.Tf, 50);
      _0x39b888.f.h(_0x158a86.Uf.Qn, 1);
      _0x39b888.f.h(_0x158a86.Uf.Rn, 50);
      _0x39b888.f.h(_0x158a86.Uf.Sn, 50);
      _0x39b888.f.g(_0x158a86.Uf.Tn, 500);
      if (this.go === _0x340748.ho) {
        _0x39b888.f.h(_0x158a86.Uf.Un, 1);
      } else {
        _0x39b888.f.g(_0x158a86.Uf.Un, 500);
      }
      _0x39b888.f.h(_0x158a86.Uf.Vn, 50);
      _0x39b888.f.h(_0x158a86.Uf.Wn, 50);
      _0x39b888.f.h(_0x158a86.Uf.Xn, 50);
      _0x39b888.f.h(_0x158a86.Uf.Yn, 50);
      _0x39b888.f.h(_0x158a86.Uf.Zn, 50);
      _0x39b888.f.h(_0x158a86.Uf.$n, 50);
      _0x39b888.f.h(_0x158a86.Uf._n, 50);
    };
    _0x2cece1.prototype.ho = function () {
      this.go = _0x340748.ho;
      return this;
    };
    _0x2cece1.prototype.io = function () {
      _0x39b888.f.h(_0x88389e, 1);
      _0x239c2a.Y(function () {
        _0x39b888.f.g(_0x88389e, 500);
      }, 3000);
      _0x39b888.f.h(_0x32ec14, 1);
      _0x239c2a.Y(function () {
        _0x39b888.f.g(_0x32ec14, 500);
      }, 500);
      this.go = _0x340748.io;
      return this;
    };
    _0x2cece1.prototype.nl = function () {
      this.eo = false;
      this.Wg.qg();
      if (this.go === _0x340748.io) {
        ooo.ij.mf();
      }
    };
    _0x2cece1.prototype.qg = function () {
      this.Wg.qg();
    };
    _0x2cece1.prototype.ug = function (_0x406cd6, _0x2d9f82) {
      this.Wg.ug(_0x406cd6, _0x2d9f82);
    };
    _0x2cece1.prototype.jo = function (_0x56f7, _0x1f8ce1, _0x548518) {
      var _0x227521;
      var _0x46e440;
      var _0x40922b;
      if (_0x1f8ce1 >= 1 && _0x1f8ce1 <= 10) {
        _0x227521 = _0x239c2a.U("index.game.result.place.i" + _0x1f8ce1);
        _0x46e440 = _0x239c2a.U("index.game.result.placeInBoard");
        _0x40922b = _0x239c2a.U("index.game.social.shareResult.messGood").replace("{0}", _0x548518).replace("{1}", _0x56f7).replace("{2}", _0x227521);
      } else {
        _0x227521 = "";
        _0x46e440 = _0x239c2a.U("index.game.result.tryHit");
        _0x40922b = _0x239c2a.U("index.game.social.shareResult.messNorm").replace("{0}", _0x548518).replace("{1}", _0x56f7);
      }
      _0x2aa197.html(_0x239c2a.U("index.game.result.your"));
      _0x465880.html(_0x56f7);
      _0x18e01d.html(_0x227521);
      _0x882cd2.html(_0x46e440);
      if (_0x2171ac.co.bo) {
        var _0x39f1d3;
        var _0x466589;
        var _0x838acd;
        var _0x5ac6bd;
        var _0x4af733;
        var _0x6842ae;
        var _0x32bbd0;
        var _0x406862 = _0x239c2a.U("index.game.result.share");
        _0x239c2a.U("index.game.social.shareResult.caption");
        _0xb9df8e.empty().append((_0x39f1d3 = _0x406862, _0x466589 = "https://wormate.io", _0x838acd = "wormate.io", _0x5ac6bd = _0x40922b, _0x4af733 = _0x40922b, _0x6842ae = "https://wormate.io/images/og-share-img-new.jpg", (_0x32bbd0 = $("<div><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" x=\"0\" y=\"0\" viewBox=\"0 0 456 456\" xml: space=\"preserve\"><rect x=\"0\" y=\"0\" width=\"456\" height=\"456\" fill=\"#517AD1\"/><path d=\"M242.7 456V279.7h-59.3v-71.9h59.3v-60.4c0-43.9 35.6-79.5 79.5-79.5h62v64.6h-44.4c-13.9 0-25.3 11.3-25.3 25.3v50h68.5l-9.5 71.9h-59.1V456z\" fill=\"#fff\"/></svg><span>" + _0x39f1d3 + "</span></div>")).click(function () {
          if ((typeof FB == "undefined" ? "undefined" : f3(FB)) !== "undefined" && f3(FB.ui) != "undefined") {
            FB.ui({
              method: "feed",
              display: "popup",
              link: _0x466589,
              name: _0x838acd,
              caption: _0x5ac6bd,
              description: _0x4af733,
              picture: _0x6842ae
            }, function () {});
          }
        }), _0x32bbd0));
      }
    };
    _0x2cece1.prototype.ko = function () {
      return this.fo;
    };
    _0x2cece1.prototype.lo = function () {
      return this.eo;
    };
    _0x340748 = {
      ho: 0,
      io: 1
    };
    _0x158a86.Bk = _0x2cece1;
    _0x124291 = $("#loading-progress-cont");
    _0xa6215f = $("#loading-progress-bar");
    _0x273388 = $("#loading-progress-text");
    (_0xb630f9 = _0x239c2a.ca(_0x158a86.Uf, function () {
      _0x158a86.Uf.call(this, _0x158a86.ll.ao);
      this.mo = -1;
      this.no = "";
    })).prototype.Sa = function () {};
    _0xb630f9.prototype.ml = function () {
      _0x158a86.Nf.rg(true);
      _0x39b888.f.g(_0x158a86.Uf.Tf, 500);
      _0x39b888.f.g(_0x158a86.Uf.Qn, 1);
      _0x39b888.f.h(_0x158a86.Uf.Rn, 50);
      _0x39b888.f.h(_0x158a86.Uf.Sn, 50);
      _0x39b888.f.h(_0x158a86.Uf.Tn, 50);
      _0x39b888.f.h(_0x158a86.Uf.Un, 50);
      _0x39b888.f.h(_0x158a86.Uf.Vn, 50);
      _0x39b888.f.h(_0x158a86.Uf.Wn, 50);
      _0x39b888.f.h(_0x158a86.Uf.Xn, 50);
      _0x39b888.f.g(_0x158a86.Uf.Yn, 500);
      _0x39b888.f.h(_0x158a86.Uf.Zn, 50);
      _0x39b888.f.h(_0x158a86.Uf.$n, 50);
      _0x39b888.f.h(_0x158a86.Uf._n, 50);
    };
    _0xb630f9.prototype.nl = function () {
      ooo.ij.Ye(_0x158a86.Pe.Se.Re);
      ooo.Xg.Ak.wg();
      ooo.Xg.Ak.sg(true);
    };
    _0xb630f9.prototype.hl = function () {
      ooo.Xg.Ak.sg(false);
    };
    _0xb630f9.prototype.oo = function () {
      this.po("", 0);
      _0x39b888.f.g(_0x124291, 100);
    };
    _0xb630f9.prototype.qo = function () {
      _0x39b888.f.h(_0x124291, 100);
    };
    _0xb630f9.prototype.po = function (_0x1657f7, _0x45a7fe) {
      if (this.no !== _0x1657f7) {
        this.no = _0x1657f7;
      }
      var _0x12166d = _0x239c2a.fa(_0x239c2a._(_0x45a7fe * 100), 0, 100);
      if (this.mo !== _0x12166d) {
        _0xa6215f.css("width", _0x12166d + "%");
        _0x273388.html(_0x12166d + " %");
      }
    };
    _0x158a86.$k = _0xb630f9;
    _0x3f22f0 = $("#mm-line-top");
    $("#mm-line-center");
    $("#mm-line-bottom");
    _0x5cca57 = $("#mm-bottom-buttons");
    _0x456cda = $("#mm-menu-cont");
    _0x4e4444 = $("#mm-loading");
    _0x1aa6b6 = $("#mm-loading-progress-bar");
    _0x2c3b0c = $("#mm-loading-progress-text");
    $("#mm-event-text");
    _0x224d67 = $("#mm-skin-canv");
    _0x248c06 = $("#mm-skin-prev");
    _0x15f7f9 = $("#mm-skin-next");
    _0x36f41e = $("#mm-skin-over");
    _0x540b8d = $("#mm-skin-over-button-list");
    _0x4c3f65 = $("#mm-params-nickname");
    _0x49e678 = $("#mm-params-game-mode");
    _0x21860f = $("#mm-action-play");
    _0x3466e4 = $("#mm-action-guest");
    _0xf6518b = $("#mm-action-login");
    _0x4cbcf5 = $("#mm-player-info");
    _0x18a09d = $("#mm-store");
    _0x4c0ac7 = $("#mm-leaders");
    _0x12b63e = $("#mm-settings");
    _0x4fa828 = $("#mm-coins-box");
    _0x11c68a = $("#mm-player-avatar");
    _0x22d8f6 = $("#mm-player-username");
    _0xbb3875 = $("#mm-coins-val");
    _0x505d29 = $("#mm-player-exp-bar");
    _0xdbd1f7 = $("#mm-player-exp-val");
    _0x2e7295 = $("#mm-player-level");
    (_0x3f650f = _0x239c2a.ca(_0x158a86.Uf, function () {
      _0x158a86.Uf.call(this, _0x158a86.ll.kl);
      this.mo = -1;
      this.no = "";
      var _0x26d7e5 = ["كلب", "fuck", "fuak", "جحش", "Name Error", "عرضك", "نظيف", "طيبة", "اخوك", "اختك", "امك", "ابوك", "قواد", "ملعون"];
      function _0x1c63d3(_0x3076e1) {
        if (!_0x3076e1) {
          return "";
        }
        return _0x3076e1.toLowerCase().replace(/[^a-zA-Z0-9\u0600-\u06FF*]/g, "").replace(/[ـ]/g, "").replace(/[ًٌٍَُِّْ]/g, "").replace(/[أإآا]/g, "ا").replace(/[ىي]/g, "ي").replace(/[ة]/g, "ه");
      }
      function _0x190a21(_0x5b3c49, _0xb1e655) {
        if (!_0x5b3c49) {
          return false;
        }
        var _0x561732 = _0x5b3c49.replace(/\*$/, "");
        var _0x548bf0 = _0x1c63d3(_0x561732);
        var _0x2a2978 = Array.isArray(_0xb1e655) ? _0xb1e655 : Object.values(_0xb1e655);
        return _0x2a2978.some(function (_0xdc119b) {
          var _0x593894 = _0x1c63d3(_0xdc119b);
          return _0x548bf0.includes(_0x593894);
        });
      }
      window.handleNicknameChange = function (_0x505bf4) {
        if (!_0x505bf4 || _0x505bf4.trim() === "") {
          return "";
        }
        if (_0x190a21(_0x505bf4, _0x26d7e5)) {
          return "Name Error*";
        }
        return _0x505bf4;
      };
      fetch("https://wormx.store/2025/excel/name_banned_text.php").then(_0x456580 => _0x456580.json()).then(_0x2b034c => {
        _0x26d7e5 = Array.isArray(_0x2b034c) ? _0x2b034c : Object.values(_0x2b034c);
      }).catch(_0x4d6d55 => {
        console.error("Error loading banned words:", _0x4d6d55);
      });
      this.ro = new _0x158a86.Lm(_0x224d67);
      _0x49e678.click(function () {
        ooo.ij.if();
      });
      _0x224d67.click(function () {
        if (ooo.ok.nk()) {
          ooo.ij.if();
          ooo.Xg.gl(ooo.Xg.Qk);
        }
      });
      _0x248c06.click(function () {
        ooo.ij.if();
        ooo.so.kk();
      });
      _0x15f7f9.click(function () {
        ooo.ij.if();
        ooo.so.jk();
      });
      _0x4c3f65.keypress(function (_0x5e8179) {
        _0x1a98d3.r1 = false;
        if (_0x5e8179.keyCode === 13) {
          ooo.to();
        }
      });
      _0x21860f.click(function () {
        var _0x1e3561 = _0x4c3f65.val();
        if (_0x1e3561 && _0x1e3561.trim() !== "") {
          _0x4c3f65.val(window.handleNicknameChange(_0x1e3561));
        }
        ooo.ij.if();
        ooo.to();
      });
      _0x3466e4.click(function () {
        var _0x15f904 = _0x4c3f65.val();
        if (_0x15f904 && _0x15f904.trim() !== "") {
          _0x4c3f65.val(window.handleNicknameChange(_0x15f904));
        }
        ooo.ij.if();
        ooo.to();
      });
      _0xf6518b.click(function () {
        ooo.ij.if();
        ooo.Xg.gl(ooo.Xg.Nk);
      });
      _0x12b63e.click(function () {
        ooo.ij.if();
        ooo.Xg.gl(ooo.Xg.Hi);
      });
      _0x4cbcf5.click(function () {
        if (ooo.ok.nk()) {
          ooo.ij.if();
          ooo.Xg.gl(ooo.Xg.Lk);
        }
      });
      _0x4c0ac7.click(function () {
        if (ooo.ok.nk()) {
          ooo.ij.if();
          ooo.Xg.gl(ooo.Xg.Jk);
        }
      });
      _0x18a09d.click(function () {
        if (ooo.ok.nk()) {
          ooo.ij.if();
          ooo.Xg.gl(ooo.Xg.Sk);
        }
      });
      _0x4fa828.click(function () {
        if (ooo.ok.nk()) {
          ooo.ij.if();
          ooo.Xg.gl(ooo.Xg.Hk);
        }
      });
      this.uo();
      this.vo();
      var _0x39287b = _0x158a86.Cg.Og(_0x158a86.Cg.Ig);
      if (_0x39287b !== "ARENA" && _0x39287b !== "TEAM2") {
        _0x39287b = "ARENA";
      }
      _0x49e678.val(_0x39287b);
    })).prototype.Sa = function () {
      var _0x17824a = this;
      function _0x3673e0(_0x1020a2, _0x354e0f) {
        if (_0x1020a2.pm) {
          _0x354e0f.skinId = _0x1020a2.pm.Tj;
          _0x354e0f.eyesId = _0x1020a2.pm.Uj;
          _0x354e0f.mouthId = _0x1020a2.pm.Vj;
          _0x354e0f.hatId = _0x1020a2.pm.Wj;
          _0x354e0f.glassesId = _0x1020a2.pm.Xj;
        }
      }
      ooo.ok.fm(function () {
        if (ooo.ok.nk()) {
          _0x3673e0(_0x1a98d3, ooo.ok.xl);
          ooo.so.lk(ooo.ok.Ul(), _0x158a86._j.$j);
          ooo.so.lk(ooo.ok.Vl(), _0x158a86._j.ak);
          ooo.so.lk(ooo.ok.Wl(), _0x158a86._j.bk);
          ooo.so.lk(ooo.ok.Xl(), _0x158a86._j.dk);
          ooo.so.lk(ooo.ok.Yl(), _0x158a86._j.ck);
        } else {
          ooo.so.lk(ooo.wo(), _0x158a86._j.$j);
          ooo.so.lk(0, _0x158a86._j.ak);
          ooo.so.lk(0, _0x158a86._j.bk);
          ooo.so.lk(0, _0x158a86._j.dk);
          ooo.so.lk(0, _0x158a86._j.ck);
        }
      });
      ooo.ok.fm(function () {
        _0x21860f.toggle(ooo.ok.nk());
        _0xf6518b.toggle(!ooo.ok.nk());
        _0x3466e4.toggle(!ooo.ok.nk());
        _0x4c0ac7.toggle(ooo.ok.nk());
        _0x18a09d.toggle(ooo.ok.nk());
        _0x4fa828.toggle(ooo.ok.nk());
        _0x4cbcf5.toggle(true);
        _0x12b63e.toggle(true);
        if (ooo.ok.nk()) {
          _0x36f41e.hide();
          _0x22d8f6.html(ooo.ok.Ll());
          _0x11c68a.attr("src", ooo.ok.Nl());
          _0xbb3875.html(ooo.ok.Ql());
          _0x505d29.width(ooo.ok.Sl() * 100 / ooo.ok.Tl() + "%");
          _0xdbd1f7.html(ooo.ok.Sl() + " / " + ooo.ok.Tl());
          _0x2e7295.html(ooo.ok.Rl());
          _0x4c3f65.val(ooo.ok.Ml());
        } else {
          _0x36f41e.toggle(_0x2171ac.co.bo && !ooo.xo());
          _0x22d8f6.html(_0x22d8f6.data("guest"));
          _0x11c68a.attr("src", _0x2171ac.H.M);
          _0xbb3875.html("10");
          _0x505d29.width("0");
          _0xdbd1f7.html("");
          _0x2e7295.html(1);
          _0x4c3f65.val(_0x158a86.Cg.Og(_0x158a86.Cg.Jg));
        }
      });
      ooo.so.fk(function () {
        _0x17824a.ro.Gm(ooo.so.ek());
      });
    };
    _0x3f650f.prototype.ml = function () {
      _0x158a86.Nf.rg(true);
      _0x39b888.f.g(_0x158a86.Uf.Tf, 500);
      _0x39b888.f.g(_0x158a86.Uf.Qn, 1);
      _0x39b888.f.g(_0x158a86.Uf.Rn, 500);
      _0x39b888.f.g(_0x158a86.Uf.Sn, 500);
      _0x39b888.f.h(_0x158a86.Uf.Tn, 50);
      _0x39b888.f.h(_0x158a86.Uf.Un, 50);
      _0x39b888.f.g(_0x158a86.Uf.Vn, 500);
      _0x39b888.f.h(_0x158a86.Uf.Wn, 50);
      _0x39b888.f.h(_0x158a86.Uf.Xn, 50);
      _0x39b888.f.h(_0x158a86.Uf.Yn, 50);
      _0x39b888.f.h(_0x158a86.Uf.Zn, 50);
      _0x39b888.f.h(_0x158a86.Uf.$n, 50);
      _0x39b888.f.h(_0x158a86.Uf._n, 50);
    };
    _0x3f650f.prototype.yo = function () {
      _0x39b888.f.g(_0x3f22f0, 500);
      _0x39b888.f.g(_0x5cca57, 500);
      _0x39b888.f.g(_0x456cda, 500);
      _0x39b888.f.h(_0x4e4444, 100);
    };
    _0x3f650f.prototype.zo = function () {
      _0x39b888.f.h(_0x3f22f0, 100);
      _0x39b888.f.h(_0x5cca57, 100);
      _0x39b888.f.h(_0x456cda, 100);
      _0x39b888.f.g(_0x4e4444, 500);
    };
    _0x3f650f.prototype.po = function (_0x2cb8c4, _0x57ff0d) {
      if (this.no !== _0x2cb8c4) {
        this.no = _0x2cb8c4;
      }
      var _0x2f1e27 = _0x239c2a.fa(_0x239c2a._(_0x57ff0d * 100), 0, 100);
      if (this.mo !== _0x2f1e27) {
        _0x1aa6b6.css("width", _0x2f1e27 + "%");
        _0x2c3b0c.html(_0x2f1e27 + " %");
      }
    };
    _0x3f650f.prototype.nl = function () {
      ooo.ij.jf();
      this.ro.rg(true);
    };
    _0x3f650f.prototype.hl = function () {
      this.ro.rg(false);
    };
    _0x3f650f.prototype.qg = function () {
      this.ro.qg();
    };
    _0x3f650f.prototype.ug = function (_0x4e611b, _0x33afb4) {
      this.ro.ug();
    };
    _0x3f650f.prototype.Ml = function () {
      return _0x4c3f65.val();
    };
    _0x3f650f.prototype.Ao = function () {
      return _0x49e678.val();
    };
    _0x3f650f.prototype.uo = function () {
      var _0x584b15 = $("#mm-advice-cont").children();
      var _0x9d0635 = 0;
      _0x239c2a.X(function () {
        _0x584b15.eq(_0x9d0635).fadeOut(500, function () {
          if (++_0x9d0635 >= _0x584b15.length) {
            _0x9d0635 = 0;
          }
          _0x584b15.eq(_0x9d0635).fadeIn(500).css("display", "inline-block");
        });
      }, 3000);
    };
    _0x3f650f.prototype.vo = function () {
      if (_0x2171ac.co.bo && !ooo.xo()) {
        _0x36f41e.show();
        var _0x5a0cce = _0x239c2a.U("index.game.main.menu.unlockSkins.share");
        var _0xffb893 = encodeURIComponent(_0x239c2a.U("index.game.main.menu.unlockSkins.comeAndPlay"));
        _0x540b8d.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-fb\" target=\"_blank\" href=\"https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=" + _0xffb893 + "\"><img src=\"data: image/svg+xml; base64, PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\"/><span>" + _0x5a0cce + "</span></a>").click(function _0x1925f3() {
          ooo.Bo(true);
          _0x239c2a.Y(function () {
            _0x36f41e.hide();
          }, 3000);
        }));
      }
    };
    _0x158a86.Ck = _0x3f650f;
    (_0x2d0ec8 = _0x239c2a.ca(_0x158a86.Uf, function () {
      _0x158a86.Uf.call(this, _0x158a86.ll.ao);
    })).prototype.Sa = function () {};
    _0x2d0ec8.prototype.ml = function () {
      _0x158a86.Nf.rg(true);
      _0x39b888.f.h(_0x158a86.Uf.Tf, 50);
      _0x39b888.f.h(_0x158a86.Uf.Qn, 1);
      _0x39b888.f.h(_0x158a86.Uf.Rn, 50);
      _0x39b888.f.h(_0x158a86.Uf.Sn, 50);
      _0x39b888.f.h(_0x158a86.Uf.Tn, 50);
      _0x39b888.f.h(_0x158a86.Uf.Un, 50);
      _0x39b888.f.h(_0x158a86.Uf.Vn, 50);
      _0x39b888.f.h(_0x158a86.Uf.Wn, 50);
      _0x39b888.f.h(_0x158a86.Uf.Xn, 50);
      _0x39b888.f.h(_0x158a86.Uf.Yn, 50);
      _0x39b888.f.h(_0x158a86.Uf.Zn, 50);
      _0x39b888.f.h(_0x158a86.Uf.$n, 50);
      _0x39b888.f.h(_0x158a86.Uf._n, 50);
    };
    _0x158a86.el = _0x2d0ec8;
    (_0x570e68 = _0x239c2a.ca(_0x158a86.Uf, function () {
      _0x158a86.Uf.call(this, _0x158a86.ll.ao);
    })).prototype.Sa = function () {};
    _0x570e68.prototype.ml = function () {
      _0x158a86.Nf.rg(true);
      _0x39b888.f.g(_0x158a86.Uf.Tf, 500);
      _0x39b888.f.g(_0x158a86.Uf.Qn, 1);
      _0x39b888.f.h(_0x158a86.Uf.Rn, 50);
      _0x39b888.f.h(_0x158a86.Uf.Sn, 50);
      _0x39b888.f.h(_0x158a86.Uf.Tn, 50);
      _0x39b888.f.h(_0x158a86.Uf.Un, 50);
      _0x39b888.f.h(_0x158a86.Uf.Vn, 50);
      _0x39b888.f.h(_0x158a86.Uf.Wn, 50);
      _0x39b888.f.h(_0x158a86.Uf.Xn, 50);
      _0x39b888.f.h(_0x158a86.Uf.Yn, 50);
      _0x39b888.f.g(_0x158a86.Uf.Zn, 500);
      _0x39b888.f.h(_0x158a86.Uf.$n, 50);
      _0x39b888.f.h(_0x158a86.Uf._n, 50);
    };
    _0x570e68.prototype.nl = function () {};
    _0x158a86.Xk = _0x570e68;
    _0x55c569 = $("#toaster-stack");
    (_0x16937d = _0x239c2a.ca(_0x158a86.Uf, function () {
      _0x158a86.Uf.call(this, _0x158a86.ll.ao);
      this.Co = [];
      this.Do = null;
    })).prototype.Sa = function () {};
    _0x16937d.prototype.ml = function () {
      _0x158a86.Nf.rg(true);
      _0x39b888.f.g(_0x158a86.Uf.Tf, 500);
      _0x39b888.f.g(_0x158a86.Uf.Qn, 1);
      _0x39b888.f.h(_0x158a86.Uf.Rn, 50);
      _0x39b888.f.g(_0x158a86.Uf.Sn, 500);
      _0x39b888.f.h(_0x158a86.Uf.Tn, 50);
      _0x39b888.f.h(_0x158a86.Uf.Un, 50);
      _0x39b888.f.h(_0x158a86.Uf.Vn, 50);
      _0x39b888.f.h(_0x158a86.Uf.Wn, 50);
      _0x39b888.f.g(_0x158a86.Uf.Xn, 500);
      _0x39b888.f.h(_0x158a86.Uf.Yn, 50);
      _0x39b888.f.h(_0x158a86.Uf.Zn, 50);
      _0x39b888.f.h(_0x158a86.Uf.$n, 50);
      _0x39b888.f.h(_0x158a86.Uf._n, 50);
    };
    _0x16937d.prototype.nl = function () {
      this.Eo();
    };
    _0x16937d.prototype.ql = function () {
      return this.Do != null || this.Co.length > 0;
    };
    _0x16937d.prototype.Fo = function (_0x336769) {
      this.Co.unshift(_0x336769);
      _0x239c2a.Y(function () {
        ooo.Xg.ol();
      }, 0);
    };
    _0x16937d.prototype.km = function (_0x453870) {
      this.Co.push(_0x453870);
      _0x239c2a.Y(function () {
        ooo.Xg.ol();
      }, 0);
    };
    _0x16937d.prototype.Eo = function () {
      var _0x2a99d4 = this;
      if (this.Do == null) {
        if (this.Co.length === 0) {
          ooo.Xg.jl();
          return;
        }
        ;
        var _0xeb0567 = this.Co.shift();
        this.Do = _0xeb0567;
        var _0x4a3c27 = _0xeb0567.ag();
        _0x39b888.f.g(_0x4a3c27, 300);
        _0x55c569.append(_0x4a3c27);
        _0xeb0567.Go = function () {
          _0x4a3c27.fadeOut(300);
          _0x239c2a.Y(function () {
            _0x4a3c27.remove();
          }, 300);
          if (_0x2a99d4.Do === _0xeb0567) {
            _0x2a99d4.Do = null;
          }
          _0x2a99d4.Eo();
        };
        _0xeb0567.nl();
      }
    };
    _0x158a86.Zk = _0x16937d;
    _0x158a86.ll = {
      ao: 0,
      kl: 1
    };
    _0x4ce3da = $("#popup-menu-label");
    _0x4f73f8 = $("#popup-menu-coins-box");
    _0x3961bd = $("#popup-menu-coins-val");
    $("#popup-menu-back").click(function () {
      ooo.ij.if();
      ooo.Xg.jl();
    });
    _0x4f73f8.click(function () {
      if (ooo.ok.nk()) {
        ooo.ij.if();
        ooo.Xg.gl(ooo.Xg.Hk);
      }
    });
    (_0x2d6a20 = _0x239c2a.ca(_0x158a86.Uf, function (_0x131326, _0x55c918) {
      _0x158a86.Uf.call(this, _0x158a86.ll.kl);
      this.Xa = _0x131326;
      this.Io = _0x55c918;
      this.Jo = [];
    })).prototype.Sa = function () {
      _0x2d6a20.parent.prototype.Sa.call(this);
      if (!_0x2d6a20.Ko) {
        _0x2d6a20.Ko = true;
        ooo.ok.fm(function () {
          if (ooo.ok.nk()) {
            _0x3961bd.html(ooo.ok.Ql());
          } else {
            _0x3961bd.html("0");
          }
        });
      }
      _0x39b888.f.h(_0x158a86.Ho.Lo, 100);
    };
    _0x2d6a20.Mo = $("#coins-view");
    _0x2d6a20.No = $("#leaders-view");
    _0x2d6a20.Oo = $("#profile-view");
    _0x2d6a20.Po = $("#login-view");
    _0x2d6a20.Qo = $("#settings-view");
    _0x2d6a20.Ro = $("#skins-view");
    _0x2d6a20.So = $("#store-view");
    _0x2d6a20.To = $("#wear-view");
    _0x2d6a20.Uo = $("#withdraw-consent-view");
    _0x2d6a20.Vo = $("#delete-account-view");
    _0x2d6a20.Lo = $("#please-wait-view");
    _0x2d6a20.prototype.ml = function () {
      _0x158a86.Nf.rg(true);
      _0x39b888.f.g(_0x158a86.Uf.Tf, 1);
      _0x39b888.f.g(_0x158a86.Uf.Qn, 500);
      _0x39b888.f.g(_0x158a86.Uf.Rn, 200);
      _0x39b888.f.g(_0x158a86.Uf.Sn, 200);
      _0x39b888.f.h(_0x158a86.Uf.Tn, 200);
      _0x39b888.f.h(_0x158a86.Uf.Un, 200);
      _0x39b888.f.h(_0x158a86.Uf.Vn, 200);
      _0x39b888.f.g(_0x158a86.Uf.Wn, 200);
      _0x39b888.f.h(_0x158a86.Uf.Xn, 200);
      _0x39b888.f.h(_0x158a86.Uf.Yn, 200);
      _0x39b888.f.h(_0x158a86.Uf.Zn, 200);
      _0x39b888.f.h(_0x158a86.Uf.$n, 200);
      _0x39b888.f.h(_0x158a86.Uf._n, 200);
      _0x4ce3da.html(this.Xa);
      _0x4f73f8.toggle(this.Io);
      this.Wo();
    };
    _0x2d6a20.prototype.Wo = function () {};
    _0x2d6a20.prototype.Xo = function (_0x218ae4) {
      var _0x4dac6b = this;
      var _0x4854ed = _0x239c2a.va(0, 2147483647) & 2147483647;
      this.Jo.push(_0x4854ed);
      _0x39b888.f.g(_0x158a86.Ho.Lo, 100);
      _0x239c2a.Y(function () {
        _0x4dac6b.Yo(_0x4854ed);
      }, _0x218ae4);
      return new _0x1a1856(this, _0x4854ed);
    };
    _0x2d6a20.prototype.Yo = function (_0xc5e063) {
      var _0x3dafb0 = this.Jo.indexOf(_0xc5e063);
      if (!(_0x3dafb0 < 0)) {
        this.Jo.splice(_0x3dafb0, 1);
        if (this.Jo.length === 0) {
          _0x39b888.f.h(_0x158a86.Ho.Lo, 100);
        }
      }
    };
    _0x158a86.Ho = _0x2d6a20;
    var _0x3ac5f6;
    var _0x2d221a;
    var _0x3c0f6b;
    var _0xf8d884;
    var _0x241bad;
    var _0x36d3e9;
    var _0x3adf28;
    var _0x51366c;
    var _0x596633;
    var _0x88389e;
    var _0x32ec14;
    var _0xb9df8e;
    var _0x2aa197;
    var _0x465880;
    var _0x18e01d;
    var _0x882cd2;
    var _0x5bccf3;
    var _0x2cece1;
    var _0x340748;
    var _0x124291;
    var _0xa6215f;
    var _0x273388;
    var _0xb630f9;
    var _0x3f22f0;
    var _0x5cca57;
    var _0x456cda;
    var _0x4e4444;
    var _0x1aa6b6;
    var _0x2c3b0c;
    var _0x224d67;
    var _0x248c06;
    var _0x15f7f9;
    var _0x36f41e;
    var _0x540b8d;
    var _0x4c3f65;
    var _0x49e678;
    var _0x21860f;
    var _0x3466e4;
    var _0xf6518b;
    var _0x4cbcf5;
    var _0x18a09d;
    var _0x4c0ac7;
    var _0x12b63e;
    var _0x4fa828;
    var _0x11c68a;
    var _0x22d8f6;
    var _0xbb3875;
    var _0x505d29;
    var _0xdbd1f7;
    var _0x2e7295;
    var _0x3f650f;
    var _0x2d0ec8;
    var _0x570e68;
    var _0x55c569;
    var _0x16937d;
    var _0x4ce3da;
    var _0x4f73f8;
    var _0x3961bd;
    var _0x2d6a20;
    var _0x346fbb;
    var _0x2f32a4;
    var _0x272a06;
    var _0x7519ad;
    var _0x528093;
    var _0x237c8a;
    var _0x2a4672;
    var _0x442138;
    var _0x49d718;
    var _0x173f17;
    var _0x1ecaab;
    var _0x43e300;
    var _0x2e62dd;
    var _0x3fc894;
    var _0x4e5d75;
    var _0x225f3e;
    var _0x3adef5;
    var _0x6beb87;
    var _0xa27d68;
    var _0x249cb4;
    var _0x1ed95d;
    var _0x524563;
    var _0x2d290a;
    var _0x55597f;
    var _0x27c51a;
    var _0x3e21b3;
    var _0x1175d3;
    var _0x1a8a6b;
    var _0x48098b;
    var _0x35b99b;
    var _0x54aaeb;
    var _0x226c7f;
    var _0x1ecc00;
    var _0x475d2b;
    var _0x418696;
    var _0x163ac7;
    var _0x39695f;
    var _0x3566b4;
    var _0x4302af;
    var _0x1fbbaa;
    var _0x50d71b;
    var _0x1b6a3a;
    var _0x24caf6;
    var _0x3825e9;
    var _0x170bb6;
    var _0x4d973e;
    var _0x3feb77;
    var _0x285582;
    var _0x48b617;
    var _0x42ef25;
    var _0x271808;
    var _0xf3d6c7;
    var _0x2fca00;
    var _0xefdc2e;
    var _0x2d75f3;
    var _0x7bcd4;
    var _0x4fd2d3;
    var _0x394c9e;
    var _0x35db2d;
    var _0x519803;
    var _0x384781;
    var _0x55b77f;
    var _0x55cfc0;
    var _0x5bba53;
    var _0x4ea478;
    var _0x33cae6;
    var _0x3971f3;
    var _0x4ec7c2;
    var _0x51899c;
    var _0x429093;
    var _0x416f86;
    var _0x1e893c;
    var _0x3b9803;
    var _0x4fe8c2;
    var _0x19aa88;
    var _0x4e2efe;
    var _0x5de89a;
    var _0x4277a3;
    var _0x2813b8;
    var _0x2eae5f;
    var _0x1ac14c;
    var _0x317d33;
    var _0x24ee2e;
    var _0x462c22;
    var _0x4912b9;
    var _0x4a06ac;
    var _0x506e40;
    var _0xa5afcc;
    var _0x2bcf94;
    var _0x31d489;
    var _0x496054;
    var _0x1aba81;
    var _0x1a1856 = function () {
      function _0x13db28(_0x4ce96c, _0x4a8a60) {
        this.Zo = _0x4ce96c;
        this.$o = _0x4a8a60;
      }
      _0x13db28.prototype._o = function () {
        this.Zo.Yo(this.$o);
      };
      return _0x13db28;
    }();
    _0x346fbb = $("#store-buy-coins_125000");
    _0x2f32a4 = $("#store-buy-coins_50000");
    _0x272a06 = $("#store-buy-coins_16000");
    _0x7519ad = $("#store-buy-coins_7000");
    _0x528093 = $("#store-buy-coins_3250");
    _0x237c8a = $("#store-buy-coins_1250");
    (_0x2a4672 = _0x239c2a.ca(_0x158a86.Ho, function () {
      _0x158a86.Ho.call(this, _0x239c2a.U("index.game.popup.menu.coins.tab"), false);
      var _0x4381fa = this;
      _0x346fbb.click(function () {
        ooo.ij.if();
        _0x4381fa.ap("coins_125000");
      });
      _0x2f32a4.click(function () {
        ooo.ij.if();
        _0x4381fa.ap("coins_50000");
      });
      _0x272a06.click(function () {
        ooo.ij.if();
        _0x4381fa.ap("coins_16000");
      });
      _0x7519ad.click(function () {
        ooo.ij.if();
        _0x4381fa.ap("coins_7000");
      });
      _0x528093.click(function () {
        ooo.ij.if();
        _0x4381fa.ap("coins_3250");
      });
      _0x237c8a.click(function () {
        ooo.ij.if();
        _0x4381fa.ap("coins_1250");
      });
    })).prototype.Sa = function () {
      _0x2a4672.parent.prototype.Sa.call(this);
    };
    _0x2a4672.prototype.Wo = function () {
      _0x39b888.f.g(_0x158a86.Ho.Mo, 200);
      _0x39b888.f.h(_0x158a86.Ho.No, 50);
      _0x39b888.f.h(_0x158a86.Ho.Oo, 50);
      _0x39b888.f.h(_0x158a86.Ho.Po, 50);
      _0x39b888.f.h(_0x158a86.Ho.Qo, 50);
      _0x39b888.f.h(_0x158a86.Ho.Ro, 50);
      _0x39b888.f.h(_0x158a86.Ho.So, 50);
      _0x39b888.f.h(_0x158a86.Ho.To, 50);
      _0x39b888.f.h(_0x158a86.Ho.Uo, 50);
      _0x39b888.f.h(_0x158a86.Ho.Vo, 50);
    };
    _0x2a4672.prototype.nl = function () {
      ooo.ij.jf();
    };
    _0x2a4672.prototype.ap = function (_0x5180c7) {};
    _0x158a86.Ik = _0x2a4672;
    _0x442138 = $("#highscore-table");
    _0x49d718 = $("#leaders-button-level");
    _0x173f17 = $("#leaders-button-highscore");
    _0x1ecaab = $("#leaders-button-kills");
    _0x43e300 = "byLevel";
    _0x2e62dd = "byHighScore";
    _0x3fc894 = "byKillsAndHeadShots";
    (_0x4e5d75 = _0x239c2a.ca(_0x158a86.Ho, function () {
      _0x158a86.Ho.call(this, _0x239c2a.U("index.game.popup.menu.leaders.tab"), true);
      var _0x47252a = this;
      this.bp = {};
      this.cp = {
        dp: {
          ep: _0x49d718,
          fp: _0x43e300
        },
        gp: {
          ep: _0x173f17,
          fp: _0x2e62dd
        },
        hp: {
          ep: _0x1ecaab,
          fp: _0x3fc894
        }
      };
      _0x49d718.click(function () {
        ooo.ij.if();
        _0x47252a.ip(_0x47252a.cp.dp);
      });
      _0x173f17.click(function () {
        ooo.ij.if();
        _0x47252a.ip(_0x47252a.cp.gp);
      });
      _0x1ecaab.click(function () {
        ooo.ij.if();
        _0x47252a.ip(_0x47252a.cp.hp);
      });
    })).prototype.Sa = function () {
      _0x4e5d75.parent.prototype.Sa.call(this);
    };
    _0x4e5d75.prototype.Wo = function () {
      _0x39b888.f.h(_0x158a86.Ho.Mo, 50);
      _0x39b888.f.g(_0x158a86.Ho.No, 200);
      _0x39b888.f.h(_0x158a86.Ho.Oo, 50);
      _0x39b888.f.h(_0x158a86.Ho.Po, 50);
      _0x39b888.f.h(_0x158a86.Ho.Qo, 50);
      _0x39b888.f.h(_0x158a86.Ho.Ro, 50);
      _0x39b888.f.h(_0x158a86.Ho.So, 50);
      _0x39b888.f.h(_0x158a86.Ho.To, 50);
      _0x39b888.f.h(_0x158a86.Ho.Uo, 50);
      _0x39b888.f.h(_0x158a86.Ho.Vo, 50);
    };
    _0x4e5d75.prototype.nl = function () {
      var _0x191ccd = this;
      ooo.ij.jf();
      var _0x3ef331 = this.Xo(5000);
      var _0xa1f3bf = _0x2171ac.H.J + "/pub/leaders";
      _0x239c2a.Aa(_0xa1f3bf, function () {
        var _0x22bfa0 = {
          [_0x43e300]: [],
          [_0x2e62dd]: [],
          [_0x3fc894]: []
        };
        _0x191ccd.bp = _0x22bfa0;
        _0x191ccd.ip(_0x191ccd.jp ?? _0x191ccd.cp.dp);
        _0x3ef331._o();
      }, function (_0x2131cd) {
        _0x191ccd.bp = _0x2131cd;
        _0x191ccd.ip(_0x191ccd.jp ?? _0x191ccd.cp.dp);
        _0x3ef331._o();
      });
    };
    _0x4e5d75.prototype.ip = function (_0xe74941) {
      this.jp = _0xe74941;
      for (var _0x4e8e51 in this.cp) {
        if (this.cp.hasOwnProperty(_0x4e8e51)) {
          this.cp[_0x4e8e51].ep.removeClass("pressed");
        }
      }
      ;
      this.jp.ep.addClass("pressed");
      for (var _0x30959c = this.bp[this.jp.fp], _0x564cd8 = "", _0x2998fd = 0; _0x2998fd < _0x30959c.length; _0x2998fd++) {
        var _0x3abe59 = _0x30959c[_0x2998fd];
        _0x564cd8 += "<div class=\"table-row\"><span>" + (_0x2998fd + 1) + "</span><span><img src=\"" + _0x3abe59.avatarUrl + "\"/></span><span>" + _0x3abe59.username + "</span><span>" + _0x3abe59.level + "</span><span>" + _0x3abe59.highScore + "</span><span>" + _0x3abe59.headShots + " / " + _0x3abe59.kills + "</span></div>";
      }
      ;
      _0x442138.empty();
      _0x442138.append(_0x564cd8);
    };
    _0x158a86.Kk = _0x4e5d75;
    _0x225f3e = $("#popup-login-gg");
    _0x3adef5 = $("#popup-login-fb");
    (_0x6beb87 = _0x239c2a.ca(_0x158a86.Ho, function () {
      var _0x18cce4 = this;
      _0x158a86.Ho.call(this, _0x239c2a.U("index.game.popup.menu.login.tab"), false);
      _0x225f3e.click(function () {
        ooo.ij.if();
        var _0x1a9cb5 = _0x18cce4.Xo(10000);
        _0x239c2a.Y(function () {
          ooo.ok.sm(function () {
            if (ooo.ok.nk()) {
              ooo.ij.mf();
            }
            _0x1a9cb5._o();
          });
        }, 500);
      });
      _0x3adef5.click(function () {
        ooo.ij.if();
        var _0xb12dcd = _0x18cce4.Xo(10000);
        _0x239c2a.Y(function () {
          ooo.ok.pm(function () {
            if (ooo.ok.nk()) {
              ooo.ij.mf();
            }
            _0xb12dcd._o();
          });
        }, 500);
      });
    })).prototype.Sa = function () {
      _0x6beb87.parent.prototype.Sa.call(this);
    };
    _0x6beb87.prototype.Wo = function () {
      _0x39b888.f.h(_0x158a86.Ho.Mo, 50);
      _0x39b888.f.h(_0x158a86.Ho.No, 50);
      _0x39b888.f.h(_0x158a86.Ho.Oo, 50);
      _0x39b888.f.g(_0x158a86.Ho.Po, 200);
      _0x39b888.f.h(_0x158a86.Ho.Qo, 50);
      _0x39b888.f.h(_0x158a86.Ho.Ro, 50);
      _0x39b888.f.h(_0x158a86.Ho.So, 50);
      _0x39b888.f.h(_0x158a86.Ho.To, 50);
      _0x39b888.f.h(_0x158a86.Ho.Uo, 50);
      _0x39b888.f.h(_0x158a86.Ho.Vo, 50);
    };
    _0x6beb87.prototype.nl = function () {
      ooo.ij.jf();
    };
    _0x158a86.Ok = _0x6beb87;
    _0xa27d68 = $("#profile-avatar");
    _0x249cb4 = $("#profile-username");
    _0x1ed95d = $("#profile-experience-bar");
    _0x524563 = $("#profile-experience-val");
    _0x2d290a = $("#profile-level");
    _0x55597f = $("#profile-stat-highScore");
    _0x27c51a = $("#profile-stat-bestSurvivalTime");
    _0x3e21b3 = $("#profile-stat-kills");
    _0x1175d3 = $("#profile-stat-headshots");
    _0x1a8a6b = $("#profile-stat-gamesPlayed");
    _0x48098b = $("#profile-stat-totalTimeSpent");
    _0x35b99b = $("#profile-stat-registrationDate");
    (_0x54aaeb = _0x239c2a.ca(_0x158a86.Ho, function () {
      _0x158a86.Ho.call(this, _0x239c2a.U("index.game.popup.menu.profile.tab"), true);
    })).prototype.Sa = function () {
      _0x54aaeb.parent.prototype.Sa.call(this);
    };
    _0x54aaeb.prototype.Wo = function () {
      _0x39b888.f.h(_0x158a86.Ho.Mo, 50);
      _0x39b888.f.h(_0x158a86.Ho.No, 50);
      _0x39b888.f.g(_0x158a86.Ho.Oo, 200);
      _0x39b888.f.h(_0x158a86.Ho.Po, 50);
      _0x39b888.f.h(_0x158a86.Ho.Qo, 50);
      _0x39b888.f.h(_0x158a86.Ho.Ro, 50);
      _0x39b888.f.h(_0x158a86.Ho.So, 50);
      _0x39b888.f.h(_0x158a86.Ho.To, 50);
      _0x39b888.f.h(_0x158a86.Ho.Uo, 50);
      _0x39b888.f.h(_0x158a86.Ho.Vo, 50);
    };
    _0x54aaeb.prototype.nl = function () {
      ooo.ij.jf();
      var _0x1275c9 = ooo.ok.dm();
      var _0x3665af = moment([_0x1275c9.year, _0x1275c9.month - 1, _0x1275c9.day]).format("LL");
      _0x249cb4.html(ooo.ok.Ll());
      _0xa27d68.attr("src", ooo.ok.Nl());
      _0x1ed95d.width(ooo.ok.Sl() * 100 / ooo.ok.Tl() + "%");
      _0x524563.html(ooo.ok.Sl() + " / " + ooo.ok.Tl());
      _0x2d290a.html(ooo.ok.Rl());
      _0x55597f.html(ooo.ok.Zl());
      _0x27c51a.html(_0x239c2a.$(ooo.ok.$l()));
      _0x3e21b3.html(ooo.ok._l());
      _0x1175d3.html(ooo.ok.am());
      _0x1a8a6b.html(ooo.ok.bm());
      _0x48098b.html(_0x239c2a.$(ooo.ok.cm()));
      _0x35b99b.html(_0x3665af);
    };
    _0x158a86.Mk = _0x54aaeb;
    _0x226c7f = $("#settings-music-enabled-switch");
    _0x1ecc00 = $("#settings-sfx-enabled-switch");
    _0x475d2b = $("#settings-show-names-switch");
    _0x418696 = $("#popup-logout");
    _0x163ac7 = $("#popup-logout-container");
    _0x39695f = $("#popup-delete-account");
    _0x3566b4 = $("#popup-delete-account-container");
    _0x4302af = $("#popup-withdraw-consent");
    (_0x1fbbaa = _0x239c2a.ca(_0x158a86.Ho, function () {
      _0x158a86.Ho.call(this, _0x239c2a.U("index.game.popup.menu.settings.tab"), false);
      var _0x396888 = this;
      _0x226c7f.click(function () {
        var _0x3b086d = !!_0x226c7f.prop("checked");
        _0x158a86.Cg.Ng(_0x158a86.Cg.Fg, _0x3b086d, 30);
        ooo.ij.$e(_0x3b086d);
        ooo.ij.if();
      });
      _0x1ecc00.click(function () {
        var _0x4ade1e = !!_0x1ecc00.prop("checked");
        _0x158a86.Cg.Ng(_0x158a86.Cg.Gg, _0x4ade1e, 30);
        ooo.ij.Xe(_0x4ade1e);
        ooo.ij.if();
      });
      _0x475d2b.click(function () {
        ooo.ij.if();
      });
      _0x418696.click(function () {
        ooo.ij.if();
        _0x396888.Xo(500);
        ooo.ok.qm();
      });
      _0x39695f.click(function () {
        if (ooo.ok.nk()) {
          ooo.ij.if();
          ooo.Xg.gl(ooo.Xg.Fk);
        } else {
          ooo.ij.nf();
        }
      });
      _0x4302af.click(function () {
        if (ooo.kp()) {
          ooo.ij.if();
          ooo.Xg.gl(ooo.Xg.Dk);
        } else {
          ooo.ij.nf();
        }
      });
    })).prototype.Sa = function () {
      var _0x4c3f01;
      var _0x360016;
      var _0x532c57;
      _0x1fbbaa.parent.prototype.Sa.call(this);
      _0x4c3f01 = _0x158a86.Cg.Og(_0x158a86.Cg.Fg) !== "false";
      _0x226c7f.prop("checked", _0x4c3f01);
      ooo.ij.$e(_0x4c3f01);
      _0x360016 = _0x158a86.Cg.Og(_0x158a86.Cg.Gg) !== "false";
      _0x1ecc00.prop("checked", _0x360016);
      ooo.ij.Xe(_0x360016);
      _0x532c57 = _0x158a86.Cg.Og(_0x158a86.Cg.Eg) !== "false";
      _0x475d2b.prop("checked", _0x532c57);
      ooo.ok.em(function () {
        _0x163ac7.toggle(ooo.ok.nk());
        _0x3566b4.toggle(ooo.ok.nk());
      });
    };
    _0x1fbbaa.prototype.Wo = function () {
      _0x39b888.f.h(_0x158a86.Ho.Mo, 50);
      _0x39b888.f.h(_0x158a86.Ho.No, 50);
      _0x39b888.f.h(_0x158a86.Ho.Oo, 50);
      _0x39b888.f.h(_0x158a86.Ho.Po, 50);
      _0x39b888.f.g(_0x158a86.Ho.Qo, 200);
      _0x39b888.f.h(_0x158a86.Ho.Ro, 50);
      _0x39b888.f.h(_0x158a86.Ho.So, 50);
      _0x39b888.f.h(_0x158a86.Ho.To, 50);
      _0x39b888.f.h(_0x158a86.Ho.Uo, 50);
      _0x39b888.f.h(_0x158a86.Ho.Vo, 50);
    };
    _0x1fbbaa.prototype.nl = function () {
      ooo.ij.jf();
      if (ooo.kp()) {
        _0x4302af.show();
      } else {
        _0x4302af.hide();
      }
    };
    _0x1fbbaa.prototype.Gi = function () {
      return _0x475d2b.prop("checked");
    };
    _0x158a86.Pk = _0x1fbbaa;
    _0x50d71b = $("#store-view-canv");
    _0x1b6a3a = $("#skin-description-text");
    _0x24caf6 = $("#skin-group-description-text");
    _0x3825e9 = $("#store-locked-bar");
    _0x170bb6 = $("#store-locked-bar-text");
    _0x4d973e = $("#store-buy-button");
    _0x3feb77 = $("#store-item-price");
    _0x285582 = $("#store-groups");
    _0x48b617 = $("#store-view-prev");
    _0x42ef25 = $("#store-view-next");
    (_0x271808 = _0x239c2a.ca(_0x158a86.Ho, function () {
      _0x158a86.Ho.call(this, _0x239c2a.U("index.game.popup.menu.skins.tab"), true);
      var _0x266e03 = this;
      this.lp = null;
      this.mp = [];
      this.np = {};
      this.op = new _0x158a86.Lm(_0x50d71b);
      _0x4d973e.click(function () {
        ooo.ij.if();
        _0x266e03.pp();
      });
      _0x48b617.click(function () {
        ooo.ij.if();
        _0x266e03.lp.qp();
      });
      _0x42ef25.click(function () {
        ooo.ij.if();
        _0x266e03.lp.rp();
      });
    })).prototype.Sa = function () {
      _0x271808.parent.prototype.Sa.call(this);
      var _0xae37fe = this;
      ooo.ud.Jc(function () {
        var _0x54acd1 = ooo.ud.Gc();
        _0xae37fe.mp = [];
        for (var _0x1a07d9 = 0; _0x1a07d9 < _0x54acd1.skinGroupArrayDict.length; _0x1a07d9++) {
          _0xae37fe.mp.push(new _0xf3d6c7(_0xae37fe, _0x54acd1.skinGroupArrayDict[_0x1a07d9]));
        }
        ;
        _0xae37fe.np = {};
        for (var _0x44b750 = 0; _0x44b750 < _0x54acd1.skinArrayDict.length; _0x44b750++) {
          var _0x979de5 = _0x54acd1.skinArrayDict[_0x44b750];
          _0xae37fe.np[_0x979de5.id] = _0x979de5;
        }
        ;
        _0xae37fe.sp();
      });
      this.tp(false);
      ooo.so.fk(function () {
        _0xae37fe.tp(false);
      });
    };
    _0x271808.prototype.Wo = function () {
      _0x39b888.f.h(_0x158a86.Ho.Mo, 50);
      _0x39b888.f.h(_0x158a86.Ho.No, 50);
      _0x39b888.f.h(_0x158a86.Ho.Oo, 50);
      _0x39b888.f.h(_0x158a86.Ho.Po, 50);
      _0x39b888.f.h(_0x158a86.Ho.Qo, 50);
      _0x39b888.f.g(_0x158a86.Ho.Ro, 200);
      _0x39b888.f.h(_0x158a86.Ho.So, 50);
      _0x39b888.f.h(_0x158a86.Ho.To, 50);
      _0x39b888.f.h(_0x158a86.Ho.Uo, 50);
      _0x39b888.f.h(_0x158a86.Ho.Vo, 50);
    };
    _0x271808.prototype.nl = function () {
      ooo.ij.Ye(_0x158a86.Pe.Se.Jf);
      ooo.ij.jf();
      this.sp();
      this.op.rg(true);
    };
    _0x271808.prototype.hl = function () {
      this.op.rg(false);
    };
    _0x271808.prototype.qg = function () {
      this.op.qg();
    };
    _0x271808.prototype.ug = function (_0x30e279, _0x1c0c15) {
      this.op.ug();
    };
    _0x271808.prototype.sp = function () {
      var _0x11eec4 = this;
      var _0x198948 = this;
      _0x285582.empty();
      for (var _0x6cbee4 = 0; _0x6cbee4 < this.mp.length; _0x6cbee4++) {
        (function (_0x4ced80) {
          var _0x3c1a14 = _0x11eec4.mp[_0x4ced80];
          var _0x35d4f8 = _0x158a86.d.createElement("li");
          _0x285582.append(_0x35d4f8);
          var _0x133dcd = $(_0x35d4f8);
          if (_0x198948.xp && _0x198948.xp.isCustom) {
            _0x133dcd.addClass("iscustom");
          }
          _0x133dcd.html(_0x3c1a14.up());
          _0x133dcd.click(function () {
            ooo.ij.if();
            _0x198948.vp(_0x3c1a14);
          });
          _0x3c1a14.wp = _0x133dcd;
        })(_0x6cbee4);
      }
      ;
      if (this.mp.length > 0) {
        var _0x495eed = ooo.so.Zj(_0x158a86._j.$j);
        for (var _0x34f8a9 = 0; _0x34f8a9 < this.mp.length; _0x34f8a9++) {
          var _0x317abe = this.mp[_0x34f8a9];
          for (var _0x5aef8e = _0x317abe.xp.list, _0x425fce = 0; _0x425fce < _0x5aef8e.length; _0x425fce++) {
            if (_0x5aef8e[_0x425fce] === _0x495eed) {
              _0x317abe.yp = _0x425fce;
              this.vp(_0x317abe);
              return;
            }
          }
        }
        ;
        this.vp(this.mp[0]);
      }
    };
    _0x271808.prototype.vp = function (_0x3b94d3) {
      if (this.lp !== _0x3b94d3) {
        this.lp = _0x3b94d3;
        _0x285582.children().removeClass("pressed");
        if (this.lp.wp) {
          this.lp.wp.addClass("pressed");
        }
        _0x24caf6.html("");
        if (_0x3b94d3.xp != null) {
          var _0xba040a = ooo.ud.Gc().textDict[_0x3b94d3.xp.description];
          if (_0xba040a != null) {
            _0x24caf6.html(_0x239c2a.aa(_0x239c2a.V(_0xba040a)));
          }
        }
        ;
        this.tp(true);
      }
    };
    _0x271808.prototype.zp = function () {
      if (this.lp == null) {
        return _0x158a86.yj.Aj();
      } else {
        return this.lp.Ap();
      }
    };
    _0x271808.prototype.pp = function () {
      var _0xc597c0 = this.zp();
      if (_0xc597c0.Cj()) {
        var _0x460c6f = _0xc597c0.Mc();
        this.Bp(_0x460c6f);
      }
    };
    _0x271808.prototype.Bp = function (_0x27a754) {
      var _0x5f4365 = ooo.so.mk(_0x27a754, _0x158a86._j.$j);
      if (_0x5f4365 != null) {
        var _0x39c83c = _0x5f4365.pk();
        if (!(ooo.ok.Ql() < _0x39c83c)) {
          var _0x1906b2 = ooo.so.Zj(_0x158a86._j.$j);
          var _0x4b19b7 = ooo.so.Zj(_0x158a86._j.ak);
          var _0xf08b30 = ooo.so.Zj(_0x158a86._j.bk);
          var _0x50b60c = ooo.so.Zj(_0x158a86._j.dk);
          var _0xb98ac0 = ooo.so.Zj(_0x158a86._j.ck);
          var _0x466a5c = this.Xo(5000);
          ooo.ok.nm(_0x27a754, _0x158a86._j.$j, function () {
            _0x466a5c._o();
            ooo.Xg.gl(ooo.Xg._k);
          }, function () {
            ooo.ok.hm(function () {
              ooo.so.lk(_0x1906b2, _0x158a86._j.$j);
              ooo.so.lk(_0x4b19b7, _0x158a86._j.ak);
              ooo.so.lk(_0xf08b30, _0x158a86._j.bk);
              ooo.so.lk(_0x50b60c, _0x158a86._j.dk);
              ooo.so.lk(_0xb98ac0, _0x158a86._j.ck);
              ooo.so.lk(_0x27a754, _0x158a86._j.$j);
              _0x466a5c._o();
            });
          });
        }
      }
    };
    _0x271808.prototype.tp = function (_0x320296) {
      var _0x15590b = ooo.so.ek();
      var _0x446a2a = this.zp();
      if (_0x446a2a.Cj()) {
        var _0x4553fd = _0x446a2a.Mc();
        var _0x2fb85d = ooo.so.mk(_0x4553fd, _0x158a86._j.$j);
        var _0x46602d = false;
        $("#add-to-favorites-skin").remove();
        $("#manage-favorites-skin").remove();
        $("#skin-info-text").remove();
        $(".fav-buttons-container").remove();
        $(".favorites-popup").remove();
        if (ooo.so.ik(_0x4553fd, _0x158a86._j.$j)) {
          _0x3825e9.hide();
          _0x4d973e.hide();
          var _0x36b619 = $("<div class='fav-buttons-container' style='margin:10px;display:flex;gap:5px;position:fixed;left:270px;top:0px;z-index:1000;'></div>");
          var _0x3831b1 = $("<button id='add-to-favorites-skin' class='favorite-button2' style='background:#4CAF50;color:white;border:none;padding:5px 10px;border-radius:3px;cursor:pointer;white-space:nowrap;box-shadow:0 2px 4px rgba(0,0,0,0.2); margin: 410px 15px 15px 5px;'><span style='font-size:14px;'>+</span> Add</button>");
          var _0x34e35b = $("<button id='manage-favorites-skin' class='favorite-button' style='background:#2196F3;color:white;border:none;padding:5px 10px;border-radius:3px;cursor:pointer;white-space:nowrap;box-shadow:0 2px 4px rgba(0,0,0,0.2); margin: 412px 20px 20px 8px;'><span style='font-size:14px;'>☰</span> Favorite</button>");
          _0x36b619.append(_0x3831b1);
          _0x36b619.append(_0x34e35b);
          _0x285582.append(_0x36b619);
          var _0x193653 = $("<div>").attr("id", "skin-info-text").css({
            position: "fixed",
            left: "270px",
            top: "470px",
            "font-size": "12px",
            color: "#fff",
            "z-index": "1000"
          }).text("Press '( 1 )' to toggle skins during gameplay").appendTo(_0x285582);
          var _0x459692 = $("<div class='favorites-popup' style='display:none;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1e1e2f;border:1px solid #333345;border-radius:8px;padding:0;width:450px;max-height:400px;overflow:hidden;z-index:1000;box-shadow:0 4px 8px rgba(0,0,0,0.5);color:white;'><div style='padding:15px 20px;background-color:#252538;border-bottom:1px solid #333345;position:relative;display:flex;justify-content:space-between;align-items:center;'><button class='close-favorites' style='position:absolute;top:8px;left:10px;font-size:22px;background:none;border:none;color:#aaa;cursor:pointer;padding:0 5px;line-height:1;font-weight:bold;'>&times;</button><h3 style='margin:0 0 0 5px;font-size:18px;color:white;padding-left:15px;'>Favorite</h3><button class='clear-all-favorites' style='padding:4px 8px;background-color:#f44336;color:white;border:none;border-radius:4px;cursor:pointer;font-size:12px;'>Clear All</button></div><div class='favorites-content' style='padding:15px 20px;overflow-y:auto;max-height:330px;'><div class='favorites-grid' style='display:grid;grid-template-columns:1fr 1fr;gap:15px;padding:0;margin:0;'></div></div></div>");
          $("body").append(_0x459692);
          $(".close-favorites").click(function () {
            $(".favorites-popup").hide();
          });
          $(document).mouseup(function (_0x55c24f) {
            var _0x3d2cf0 = $(".favorites-popup");
            if (!_0x3d2cf0.is(_0x55c24f.target) && _0x3d2cf0.has(_0x55c24f.target).length === 0) {
              _0x3d2cf0.hide();
            }
          });
          $.each($("[id^='skin-info-text']"), function () {
            if ($(this).attr("id") !== "skin-info-text") {
              $(this).remove();
            }
          });
          $(".favorites-content").on("scroll", function () {
            $(this).css("pointer-events", "auto");
          });
          $(".favorites-popup").on("shown", function () {
            setTimeout(function () {
              $(".favorites-content").scrollTop(0);
            }, 100);
          });
          $(".clear-all-favorites").click(function () {
            if (confirm("Are you sure you want to remove all favorite skins?")) {
              _0x1a98d3.favoriteSkins = [];
              localStorage.setItem("SaveGamewft", JSON.stringify(_0x1a98d3));
              _0x5b3699();
              if (_0x3831b1 && _0x3831b1.is(":visible")) {
                _0x3831b1.text("★ Add").css("background-color", "#4CAF50");
              }
            }
          });
          _0x3831b1.click(function () {
            var _0x4b0e4f = _0x4553fd;
            if (!_0x1a98d3.favoriteSkins) {
              _0x1a98d3.favoriteSkins = [];
            }
            var _0x7d62eb = false;
            try {
              for (var _0x438686 = 0; _0x438686 < _0x1a98d3.favoriteSkins.length; _0x438686++) {
                if (_0x1a98d3.favoriteSkins[_0x438686] === _0x4b0e4f) {
                  _0x7d62eb = true;
                  break;
                }
              }
            } catch (_0x156d70) {
              _0x1a98d3.favoriteSkins = [];
            }
            if (!_0x7d62eb) {
              _0x1a98d3.favoriteSkins.push(_0x4b0e4f);
              localStorage.setItem("SaveGamewft", JSON.stringify(_0x1a98d3));
              $(this).text("X").css("background-color", "#f44336");
            } else {
              var _0x6f5302 = _0x1a98d3.favoriteSkins.indexOf(_0x4b0e4f);
              _0x1a98d3.favoriteSkins.splice(_0x6f5302, 1);
              localStorage.setItem("SaveGamewft", JSON.stringify(_0x1a98d3));
              $(this).text("★ Add").css("background-color", "#4CAF50");
            }
          });
          _0x34e35b.click(function () {
            $.each($("[id^='skin-info-text']"), function (_0x34203a) {
              if (_0x34203a > 0) {
                $(this).remove();
              }
            });
            _0x5b3699();
            $(".favorites-popup").show();
          });
        } else if (_0x2fb85d == null || _0x2fb85d.qk()) {
          _0x46602d = true;
          _0x3825e9.show();
          _0x4d973e.hide();
          _0x170bb6.text(_0x239c2a.U("index.game.popup.menu.store.locked"));
          if (_0x2fb85d != null && _0x2fb85d.qk()) {
            var _0x196fe7 = ooo.ud.Gc().textDict[_0x2fb85d.ln()];
            if (_0x196fe7 != null) {
              _0x170bb6.text(_0x239c2a.V(_0x196fe7));
            }
          }
        } else {
          _0x3825e9.hide();
          _0x4d973e.show();
          _0x3feb77.html(_0x2fb85d.pk());
        }
        _0x1b6a3a.html("");
        if (_0x2fb85d != null && _0x2fb85d.mn() != null) {
          var _0x3be160 = ooo.ud.Gc().textDict[_0x2fb85d.mn()];
          if (_0x3be160 != null) {
            _0x1b6a3a.html(_0x239c2a.aa(_0x239c2a.V(_0x3be160)));
          }
        }
        if (v26 && _0x4553fd) {
          v26.html(_0x4553fd);
        }
        this.op.Gm(_0x15590b.Cn(_0x4553fd));
        this.op.an(_0x46602d);
        if (_0x320296) {
          ooo.so.lk(_0x4553fd, _0x158a86._j.$j);
        }
      }
    };
    function _0x4bd7db() {
      if (!_0x1a98d3.favoriteSkins) {
        _0x1a98d3.favoriteSkins = [];
        localStorage.setItem("SaveGamewft", JSON.stringify(_0x1a98d3));
      }
      if (_0x1a98d3.favoriteSkins.length > 0) {
        if (_0x1a98d3.currentFavSkinIndex === undefined) {
          _0x1a98d3.currentFavSkinIndex = 0;
        } else {
          _0x1a98d3.currentFavSkinIndex = (_0x1a98d3.currentFavSkinIndex + 1) % _0x1a98d3.favoriteSkins.length;
        }
        var _0x101400 = _0x1a98d3.favoriteSkins[_0x1a98d3.currentFavSkinIndex];
        _0x2af8ec(_0x101400);
        localStorage.setItem("SaveGamewft", JSON.stringify(_0x1a98d3));
      }
    }
    function _0x2af8ec(_0x110e4f) {
      ooo.so.lk(_0x110e4f, _0x158a86._j.$j);
      if (_0x2cbd14 && _0x2cbd14.n && _0x2cbd14.n.Je) {
        var _0x5ed053 = ooo.ud.Cc().Tb(_0x110e4f);
        if (_0x2cbd14.uj && _0x5ed053) {
          _0x2cbd14.uj.hd(ooo.Mh.Qh.eh, ooo.ud.Cc().Ub(_0x2cbd14.n.mi), _0x5ed053, ooo.ud.Cc().Vb(_0x2cbd14.n.Vi), ooo.ud.Cc().Wb(_0x2cbd14.n.Wi), ooo.ud.Cc().Xb(_0x2cbd14.n.Xi), ooo.ud.Cc().Yb(_0x2cbd14.n.Yi), "#ffffff");
        }
      }
    }
    function _0x1e4821(_0x2a20c9, _0x379e9d) {
      if (!_0x2a20c9) {
        return "";
      }
      if (_0x2a20c9.startsWith("data:")) {
        return _0x2a20c9;
      }
      if (_0x2a20c9.includes("get_skin.php")) {
        if (_0x2a20c9.startsWith("http")) {
          return _0x2a20c9.replace(/https?:\/\/[^\/]+/, _0x1a98d3.s_l);
        } else {
          return _0x1a98d3.s_l + _0x2a20c9;
        }
      }
      if (_0x2a20c9.includes("/images/skins/")) {
        return _0x1a98d3.s_l + "/" + _0x2a20c9;
      }
      if (_0x2a20c9.includes("/static/assets/")) {
        return "https://resources.wormate.io" + _0x2a20c9;
      }
      if (_0x2a20c9.includes("/images/skins/")) {
        return _0x1a98d3.s_l + _0x2a20c9;
      }
      if (!_0x2a20c9.startsWith("http")) {
        return "https://wormate.io" + _0x2a20c9;
      }
      return _0x2a20c9;
    }
    function _0x2efedc(_0x3511b8) {
      if (!_0x1a98d3.favoriteSkins) {
        _0x1a98d3.favoriteSkins = [];
      }
      var _0x12a987 = false;
      for (var _0x1b3735 = 0; _0x1b3735 < _0x1a98d3.favoriteSkins.length; _0x1b3735++) {
        if (_0x1a98d3.favoriteSkins[_0x1b3735] === _0x3511b8) {
          _0x12a987 = true;
          break;
        }
      }
      if (!_0x12a987) {
        _0x1a98d3.favoriteSkins.push(_0x3511b8);
        localStorage.setItem("SaveGamewft", JSON.stringify(_0x1a98d3));
      }
    }
    function _0x49d8d5() {
      if ($("#open-favorites-btn").length === 0) {
        var _0x5b9933 = $("<button id='open-favorites-btn' class='favorites-button'>عرض السكنات المفضلة</button>");
        $("<style>#open-favorites-btn { position: absolute; top: 10px; right: 10px; background: #4CAF50; color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer; z-index: 1000; }#open-favorites-btn:hover { background: #45a049; }</style>").appendTo("head");
        _0x5b9933.click(function () {
          _0x5b3699();
          $(".favorites-popup").show();
        });
        if ($("#mm-skin-canv").length > 0) {
          $("#mm-skin-canv").parent().css("position", "relative");
          $("#mm-skin-canv").parent().append(_0x5b9933);
        }
      }
    }
    function _0x3c9ecf(_0x327d6d) {
      if (_0x1a98d3.favoriteSkins && _0x327d6d >= 0 && _0x327d6d < _0x1a98d3.favoriteSkins.length) {
        _0x1a98d3.favoriteSkins.splice(_0x327d6d, 1);
        localStorage.setItem("SaveGamewft", JSON.stringify(_0x1a98d3));
        _0x5b3699();
      }
    }
    function _0x5b3699() {
      var _0x5945c3 = $(".favorites-grid");
      _0x5945c3.empty();
      if (!_0x1a98d3.favoriteSkins) {
        _0x1a98d3.favoriteSkins = [];
        localStorage.setItem("SaveGamewft", JSON.stringify(_0x1a98d3));
      }
      try {
        if (_0x1a98d3.favoriteSkins.length > 0) {
          for (var _0x1564e2 = 0; _0x1564e2 < _0x1a98d3.favoriteSkins.length; _0x1564e2++) {
            var _0x55dbc8 = _0x1a98d3.favoriteSkins[_0x1564e2];
            var _0x1e2718 = $("<div>").attr("data-index", _0x1564e2).attr("data-skin-id", _0x55dbc8).css({
              display: "flex",
              "flex-direction": "column",
              "align-items": "center",
              padding: "2px",
              background: "#252538",
              "border-radius": "6px",
              position: "relative",
              height: "50px",
              width: "100%"
            });
            var _0x4eab27 = $("<div>").css({
              width: "100%",
              height: "46px",
              background: "transparent",
              "border-radius": "4px",
              overflow: "visible",
              position: "relative",
              display: "flex",
              "justify-content": "center",
              "align-items": "center"
            }).appendTo(_0x1e2718);
            var _0x2f81d2 = $("<button>").text("X").css({
              position: "absolute",
              top: "3px",
              right: "3px",
              background: "#f44336",
              color: "white",
              border: "none",
              padding: "1px 5px",
              "border-radius": "3px",
              cursor: "pointer",
              "font-size": "11px",
              "z-index": "20"
            }).appendTo(_0x1e2718);
            var _0x30807c = _0x49dcc2(_0x55dbc8);
            _0x4eab27.append(_0x30807c);
            _0x5945c3.append(_0x1e2718);
            _0x2f81d2.click(function () {
              var _0x59597e = $(this).closest("[data-index]");
              var _0xfda687 = parseInt(_0x59597e.attr("data-index"));
              if (_0x1a98d3.favoriteSkins && _0xfda687 >= 0 && _0xfda687 < _0x1a98d3.favoriteSkins.length) {
                _0x1a98d3.favoriteSkins.splice(_0xfda687, 1);
                localStorage.setItem("SaveGamewft", JSON.stringify(_0x1a98d3));
                _0x59597e.fadeOut(300, function () {
                  $(this).remove();
                  _0x5945c3.find("[data-index]").each(function (_0x190d4c) {
                    $(this).attr("data-index", _0x190d4c);
                  });
                  if (_0x1a98d3.favoriteSkins.length === 0) {
                    _0x54ad3d(_0x5945c3);
                  }
                });
              }
            });
          }
        } else {
          _0x54ad3d(_0x5945c3);
        }
      } catch (_0x24cf9c) {
        _0x5945c3.append("<div style='text-align:center;padding:10px;color:#ff6b6b;grid-column:1/span 2;'>Error loading favorites</div>");
      }
    }
    function _0x54ad3d(_0x1adeaa) {
      _0x1adeaa.append("<div style='text-align:center;padding:10px;color:#aaa;margin:20px 0;grid-column:1/span 2;'>You don't have any favorite skins yet.</div>");
    }
    function _0x49dcc2(_0x4a0e04) {
      if (!window.textureCache) {
        window.textureCache = {};
      }
      try {
        let _0x24f49b = null;
        if (typeof ooo !== "undefined") {
          if (ooo.ud && ooo.ud.Gc) {
            _0x24f49b = ooo.ud.Gc();
          } else if (ooo.ok && ooo.ok.xl && ooo.ok.xl.skinData) {
            _0x24f49b = ooo.ok.xl.skinData;
          } else if (window.globalGameData) {
            _0x24f49b = window.globalGameData;
          }
        }
        if (!_0x24f49b) {
          const _0x521820 = localStorage.getItem("wftsw");
          if (_0x521820) {
            try {
              _0x24f49b = JSON.parse(_0x521820);
            } catch (_0x1be426) {}
          }
        }
        if (!_0x24f49b) {
          throw new Error("Game data not available");
        }
        let _0x2a3c60 = null;
        if (_0x24f49b.skinArrayDict && Array.isArray(_0x24f49b.skinArrayDict)) {
          _0x2a3c60 = _0x24f49b.skinArrayDict;
        } else if (_0x24f49b.skins && Array.isArray(_0x24f49b.skins)) {
          _0x2a3c60 = _0x24f49b.skins;
        } else {
          throw new Error("Skin list not found in game data");
        }
        let _0x314019 = null;
        for (let _0x3cb122 = 0; _0x3cb122 < _0x2a3c60.length; _0x3cb122++) {
          if (_0x2a3c60[_0x3cb122] && _0x2a3c60[_0x3cb122].id === _0x4a0e04) {
            _0x314019 = _0x2a3c60[_0x3cb122];
            break;
          }
        }
        if (!_0x314019) {
          throw new Error("Skin not found");
        }
        const _0x16ee8a = document.createElement("div");
        _0x16ee8a.style.cssText = "\n            width: 100%;\n            height: 100%;\n            position: relative;\n            overflow: visible;\n        ";
        const _0x5e7592 = document.createElement("div");
        _0x5e7592.textContent = "#" + _0x4a0e04;
        _0x5e7592.style.cssText = "\n            position: absolute;\n            top: 3px;\n            left: 2px;\n            background-color: rgba(0,0,0,0.6);\n            color: white;\n            font-size: 11px;\n            padding: 1px 4px;\n            border-radius: 3px;\n            z-index: 10;\n        ";
        _0x16ee8a.appendChild(_0x5e7592);
        const _0xdad0d = document.createElement("canvas");
        _0xdad0d.width = 600;
        _0xdad0d.height = 80;
        _0xdad0d.style.cssText = "\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            object-fit: contain;\n            padding: 5px;\n        ";
        _0x16ee8a.appendChild(_0xdad0d);
        const _0x2ad373 = _0xdad0d.getContext("2d");
        _0x2ad373.clearRect(0, 0, _0xdad0d.width, _0xdad0d.height);
        if (_0x314019.base && Array.isArray(_0x314019.base) && _0x314019.base.length > 0) {
          let _0x233197 = {};
          let _0x2be397 = [];
          _0x314019.base.forEach(_0x31fd8c => {
            if (!_0x31fd8c) {
              return;
            }
            if (_0x24f49b.regionDict && _0x24f49b.regionDict[_0x31fd8c]) {
              const _0x519ef1 = _0x24f49b.regionDict[_0x31fd8c];
              if (_0x24f49b.textureDict && _0x519ef1.texture && _0x24f49b.textureDict[_0x519ef1.texture]) {
                const _0x345f9c = _0x24f49b.textureDict[_0x519ef1.texture];
                if (_0x345f9c && (_0x345f9c.file || _0x345f9c.relativePath)) {
                  let _0x5a73c7 = _0x1e4821(_0x345f9c.relativePath || _0x345f9c.file, _0x519ef1.texture);
                  if (!_0x233197[_0x5a73c7]) {
                    _0x233197[_0x5a73c7] = [];
                  }
                  _0x233197[_0x5a73c7].push({
                    id: _0x31fd8c,
                    region: _0x519ef1
                  });
                  _0x2be397.push({
                    id: _0x31fd8c,
                    region: _0x519ef1
                  });
                }
              }
            }
          });
          const _0x5d98e9 = [..._0x2be397].reverse();
          let _0x1038ef = [..._0x5d98e9];
          while (_0x1038ef.length < 27) {
            const _0x227d97 = 27 - _0x1038ef.length;
            const _0x4cc4d2 = _0x5d98e9.slice(0, Math.min(_0x227d97, _0x5d98e9.length));
            _0x1038ef = [..._0x1038ef, ..._0x4cc4d2];
          }
          const _0x11cf48 = 80;
          const _0x25df1d = _0x11cf48 / 2;
          const _0x2a8813 = 0.2;
          const _0x2d92b5 = _0x11cf48 * _0x2a8813 * _0x1038ef.length + _0x11cf48 * 0.75;
          _0xdad0d.width = Math.max(600, _0x2d92b5);
          _0x2ad373.clearRect(0, 0, _0xdad0d.width, _0xdad0d.height);
          let _0x35aa70 = 0;
          const _0x4fd714 = Object.keys(_0x233197).length;
          function _0x303c7a(_0x2b09e2) {
            _0x187f83(_0x2b09e2);
          }
          function _0x187f83(_0x15d96e) {
            const _0x1baeda = _0xdad0d.height / 2;
            _0x1038ef.forEach((_0x1be4f1, _0x358f52) => {
              if (!_0x1be4f1) {
                return;
              }
              const _0x323f7f = _0x1be4f1.region;
              const _0x578432 = _0x25df1d + _0x358f52 * _0x25df1d * 2 * _0x2a8813;
              _0x2ad373.save();
              _0x2ad373.beginPath();
              _0x2ad373.arc(_0x578432, _0x1baeda, _0x25df1d, 0, Math.PI * 2);
              _0x2ad373.clip();
              const _0x28afff = Math.max(_0x323f7f.w, _0x323f7f.h);
              const _0x482956 = _0x25df1d * 2 / _0x28afff;
              const _0x29b9fb = _0x578432 - _0x323f7f.w * _0x482956 / 2;
              const _0x4f2789 = _0x1baeda - _0x323f7f.h * _0x482956 / 2;
              _0x2ad373.drawImage(_0x15d96e, _0x323f7f.x, _0x323f7f.y, _0x323f7f.w, _0x323f7f.h, _0x29b9fb, _0x4f2789, _0x323f7f.w * _0x482956, _0x323f7f.h * _0x482956);
              _0x2ad373.restore();
            });
          }
          Object.keys(_0x233197).forEach(_0x3dbdd4 => {
            if (window.textureCache[_0x3dbdd4]) {
              _0x303c7a(window.textureCache[_0x3dbdd4]);
              return;
            }
            const _0x1577e3 = new Image();
            _0x1577e3.onload = () => {
              window.textureCache[_0x3dbdd4] = _0x1577e3;
              _0x303c7a(_0x1577e3);
              _0x35aa70++;
            };
            _0x1577e3.onerror = () => {
              _0x35aa70++;
            };
            _0x1577e3.src = _0x3dbdd4;
          });
          return _0x16ee8a;
        }
      } catch (_0x583eec) {
        const _0x5c838b = document.createElement("div");
        _0x5c838b.style.cssText = "\n            width: 100%;\n            height: 100%;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            color: white;\n            background-color: #333;\n        ";
        _0x5c838b.textContent = "⚠️";
        return _0x5c838b;
      }
      const _0x2e502b = document.createElement("div");
      _0x2e502b.style.cssText = "\n        width: 100%;\n        height: 100%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        color: white;\n        background-color: #333;\n    ";
      _0x2e502b.textContent = "🎮";
      return _0x2e502b;
    }
    _0xf3d6c7 = function () {
      function _0xd9fd72(_0x327fdc, _0x494f19) {
        this.Cp = _0x327fdc;
        this.yp = 0;
        this.xp = _0x494f19;
      }
      _0xd9fd72.prototype.qp = function () {
        if (--this.yp < 0) {
          this.yp = this.xp.list.length - 1;
        }
        this.Cp.tp(true);
      };
      _0xd9fd72.prototype.rp = function () {
        if (++this.yp >= this.xp.list.length) {
          this.yp = 0;
        }
        this.Cp.tp(true);
      };
      _0xd9fd72.prototype.up = function () {
        let _0x4fa40b = _0x239c2a.V(this.xp.name);
        if (this.xp.img) {
          if ((this.xp.img.search("data:image/png;base64,") == -1 || !(_0x4fa40b = "<img src=\"" + this.xp.img + "\" height=\"40\" />")) && (this.xp.img.search("https://lh3.googleusercontent.com") == -1 || !(_0x4fa40b = "<img src=\"" + this.xp.img + "\" height=\"40\" />"))) {
            _0x4fa40b = "<img src=\"" + _0x1a98d3.s_l + "/images/" + this.xp.img + "\" height=\"40\" />";
          }
        }
        return _0x4fa40b;
      };
      _0xd9fd72.prototype.Ap = function () {
        if (this.yp >= this.xp.list.length) {
          return _0x158a86.yj.Aj();
        } else {
          return _0x158a86.yj.Bj(this.xp.list[this.yp]);
        }
      };
      return _0xd9fd72;
    }();
    _0x158a86.Rk = _0x271808;
    _0x2fca00 = $("#store-go-coins-button");
    _0xefdc2e = $("#store-go-skins-button");
    _0x2d75f3 = $("#store-go-wear-button");
    (_0x7bcd4 = _0x239c2a.ca(_0x158a86.Ho, function () {
      _0x158a86.Ho.call(this, _0x239c2a.U("index.game.popup.menu.store.tab"), true);
      _0x2fca00.click(function () {
        ooo.ij.if();
        ooo.Xg.gl(ooo.Xg.Hk);
      });
      _0xefdc2e.click(function () {
        ooo.ij.if();
        ooo.Xg.gl(ooo.Xg.Qk);
      });
      _0x2d75f3.click(function () {
        ooo.ij.if();
        ooo.Xg.gl(ooo.Xg.Uk);
      });
    })).prototype.Sa = function () {
      _0x7bcd4.parent.prototype.Sa.call(this);
    };
    _0x7bcd4.prototype.Wo = function () {
      _0x39b888.f.h(_0x158a86.Ho.Mo, 50);
      _0x39b888.f.h(_0x158a86.Ho.No, 50);
      _0x39b888.f.h(_0x158a86.Ho.Oo, 50);
      _0x39b888.f.h(_0x158a86.Ho.Po, 50);
      _0x39b888.f.h(_0x158a86.Ho.Qo, 50);
      _0x39b888.f.h(_0x158a86.Ho.Ro, 50);
      _0x39b888.f.g(_0x158a86.Ho.So, 200);
      _0x39b888.f.h(_0x158a86.Ho.To, 50);
      _0x39b888.f.h(_0x158a86.Ho.Uo, 50);
      _0x39b888.f.h(_0x158a86.Ho.Vo, 50);
    };
    _0x7bcd4.prototype.nl = function () {
      ooo.ij.jf();
    };
    _0x158a86.Tk = _0x7bcd4;
    _0x4fd2d3 = $("#wear-view-canv");
    _0x394c9e = $("#wear-description-text");
    _0x35db2d = $("#wear-locked-bar");
    _0x519803 = $("#wear-locked-bar-text");
    _0x384781 = $("#wear-buy-button");
    _0x55b77f = $("#wear-item-price");
    _0x55cfc0 = $("#wear-eyes-button");
    _0x5bba53 = $("#wear-mouths-button");
    _0x4ea478 = $("#wear-glasses-button");
    _0x33cae6 = $("#wear-hats-button");
    _0x3971f3 = $("#wear-tint-chooser");
    _0x4ec7c2 = $("#wear-view-prev");
    _0x51899c = $("#wear-view-next");
    (_0x429093 = _0x239c2a.ca(_0x158a86.Ho, function () {
      var _0x5f3c34 = this;
      _0x158a86.Ho.call(this, _0x239c2a.U("index.game.popup.menu.wear.tab"), true);
      var _0x166089 = this;
      this.Dp = [];
      this.ak = new _0x416f86(this, _0x158a86._j.ak, _0x55cfc0);
      this.bk = new _0x416f86(this, _0x158a86._j.bk, _0x5bba53);
      this.dk = new _0x416f86(this, _0x158a86._j.dk, _0x4ea478);
      this.ck = new _0x416f86(this, _0x158a86._j.ck, _0x33cae6);
      this.Ep = null;
      this.Fp = null;
      this.Gp = null;
      this.Hp = null;
      this.Ip = null;
      this.Jp = null;
      this.op = new _0x158a86.Lm(_0x4fd2d3);
      _0x384781.click(function () {
        ooo.ij.if();
        _0x166089.Kp();
      });
      _0x4ec7c2.click(function () {
        ooo.ij.if();
        _0x166089.Ep.Lp();
      });
      _0x51899c.click(function () {
        ooo.ij.if();
        _0x166089.Ep.Mp();
      });
      _0x55cfc0.click(function () {
        ooo.ij.if();
        _0x166089.Np(_0x5f3c34.ak);
      });
      _0x5bba53.click(function () {
        ooo.ij.if();
        _0x166089.Np(_0x5f3c34.bk);
      });
      _0x4ea478.click(function () {
        ooo.ij.if();
        _0x166089.Np(_0x5f3c34.dk);
      });
      _0x33cae6.click(function () {
        ooo.ij.if();
        _0x166089.Np(_0x5f3c34.ck);
      });
      this.Dp.push(this.ak);
      this.Dp.push(this.bk);
      this.Dp.push(this.dk);
      this.Dp.push(this.ck);
    })).prototype.Sa = function () {
      _0x429093.parent.prototype.Sa.call(this);
      var _0x5b7dc7 = this;
      ooo.ud.Jc(function () {
        var _0x1f9c36 = ooo.ud.Gc();
        _0x5b7dc7.Fp = _0x1f9c36.eyesDict;
        _0x5b7dc7.Gp = _0x1f9c36.mouthDict;
        _0x5b7dc7.Hp = _0x1f9c36.glassesDict;
        _0x5b7dc7.Ip = _0x1f9c36.hatDict;
        _0x5b7dc7.Jp = _0x1f9c36.colorDict;
        _0x5b7dc7.ak.Op(_0x1f9c36.eyesVariantArray);
        _0x5b7dc7.ak.Pp(_0x5b7dc7.Fp);
        _0x5b7dc7.bk.Op(_0x1f9c36.mouthVariantArray);
        _0x5b7dc7.bk.Pp(_0x5b7dc7.Gp);
        _0x5b7dc7.dk.Op(_0x1f9c36.glassesVariantArray);
        _0x5b7dc7.dk.Pp(_0x5b7dc7.Hp);
        _0x5b7dc7.ck.Op(_0x1f9c36.hatVariantArray);
        _0x5b7dc7.ck.Pp(_0x5b7dc7.Ip);
      });
      this.tp(false);
      ooo.so.fk(function () {
        _0x5b7dc7.tp(false);
      });
    };
    _0x429093.prototype.Wo = function () {
      _0x39b888.f.h(_0x158a86.Ho.Mo, 50);
      _0x39b888.f.h(_0x158a86.Ho.No, 50);
      _0x39b888.f.h(_0x158a86.Ho.Oo, 50);
      _0x39b888.f.h(_0x158a86.Ho.Po, 50);
      _0x39b888.f.h(_0x158a86.Ho.Qo, 50);
      _0x39b888.f.h(_0x158a86.Ho.Ro, 50);
      _0x39b888.f.h(_0x158a86.Ho.So, 50);
      _0x39b888.f.g(_0x158a86.Ho.To, 200);
      _0x39b888.f.h(_0x158a86.Ho.Uo, 50);
      _0x39b888.f.h(_0x158a86.Ho.Vo, 50);
    };
    _0x429093.prototype.nl = function () {
      ooo.ij.Ye(_0x158a86.Pe.Se.Jf);
      ooo.ij.jf();
      this.Np(this.Ep ?? this.ak);
      this.op.rg(true);
    };
    _0x429093.prototype.hl = function () {
      this.op.rg(false);
    };
    _0x429093.prototype.qg = function () {
      this.op.qg();
    };
    _0x429093.prototype.ug = function (_0x32868a, _0x37319f) {
      this.op.ug();
    };
    _0x429093.prototype.Np = function (_0x34930d) {
      this.Ep = _0x34930d;
      for (var _0x297677 = 0; _0x297677 < this.Dp.length; _0x297677++) {
        this.Dp[_0x297677].ep.removeClass("pressed");
      }
      ;
      this.Ep.ep.addClass("pressed");
      this.Ep.ml();
    };
    _0x429093.prototype.Qp = function () {
      if (this.Ep == null) {
        return _0x158a86.yj.Aj();
      } else {
        return _0x158a86.yj.Bj({
          Je: this.Ep.Ap(),
          Wd: this.Ep.Wd
        });
      }
    };
    _0x429093.prototype.Kp = function () {
      var _0x3d1064 = this.Qp();
      if (_0x3d1064.Cj()) {
        var _0x466539 = _0x3d1064.Mc();
        this.Rp(_0x466539.Je, _0x466539.Wd);
      }
    };
    _0x429093.prototype.Rp = function (_0x995e2d, _0xe70324) {
      var _0x750046 = ooo.so.mk(_0x995e2d, _0xe70324);
      if (_0x750046 != null) {
        var _0x369414 = _0x750046.pk();
        if (!(ooo.ok.Ql() < _0x369414)) {
          var _0x527d66 = ooo.so.Zj(_0x158a86._j.$j);
          var _0x500bfb = ooo.so.Zj(_0x158a86._j.ak);
          var _0x1bffca = ooo.so.Zj(_0x158a86._j.bk);
          var _0x597a4d = ooo.so.Zj(_0x158a86._j.dk);
          var _0x40ee0e = ooo.so.Zj(_0x158a86._j.ck);
          var _0x3d3871 = this.Xo(5000);
          ooo.ok.nm(_0x995e2d, _0xe70324, function () {
            _0x3d3871._o();
            ooo.Xg.gl(ooo.Xg._k);
          }, function () {
            ooo.ok.hm(function () {
              ooo.so.lk(_0x527d66, _0x158a86._j.$j);
              ooo.so.lk(_0x500bfb, _0x158a86._j.ak);
              ooo.so.lk(_0x1bffca, _0x158a86._j.bk);
              ooo.so.lk(_0x597a4d, _0x158a86._j.dk);
              ooo.so.lk(_0x40ee0e, _0x158a86._j.ck);
              ooo.so.lk(_0x995e2d, _0xe70324);
              _0x3d3871._o();
            });
          });
        }
      }
    };
    window.globalHatTextureCache = window.globalHatTextureCache || {};
    _0x429093.prototype.tp = function (_0x43f71c) {
      var _0x57ad95 = ooo.so.ek();
      var _0x14e02e = this.Qp();
      if (_0x14e02e.Cj()) {
        var _0x5848a6 = _0x14e02e.Mc();
        var _0x5eed90 = ooo.so.mk(_0x5848a6.Je, _0x5848a6.Wd);
        var _0x272862 = false;
        if (!_0x5848a6.selectedHats) {
          _0x5848a6.selectedHats = [];
        }
        if (ooo.so.ik(_0x5848a6.Je, _0x5848a6.Wd)) {
          _0x35db2d.hide();
          _0x384781.hide();
          if (_0x5848a6.Wd === "HAT") {
            this.addSelectedHatButton(_0x5848a6.Je);
          } else {
            this.removeHatButtons();
          }
        } else if (_0x5eed90 == null || _0x5eed90.qk()) {
          _0x272862 = true;
          _0x35db2d.show();
          _0x384781.hide();
          _0x519803.text(_0x239c2a.U("index.game.popup.menu.store.locked"));
          if (_0x5eed90 != null && _0x5eed90.qk()) {
            var _0x49afa9 = ooo.ud.Gc().textDict[_0x5eed90.ln()];
            if (_0x49afa9 != null) {
              _0x519803.text(_0x239c2a.V(_0x49afa9));
            }
          }
          this.removeHatButtons();
        } else {
          _0x35db2d.hide();
          _0x384781.show();
          _0x55b77f.html(_0x5eed90.pk());
          this.removeHatButtons();
        }
        _0x394c9e.html("");
        if (_0x5eed90 != null && _0x5eed90.mn() != null) {
          var _0x1145e4 = ooo.ud.Gc().textDict[_0x5eed90.mn()];
          if (_0x1145e4 != null) {
            _0x394c9e.html(_0x239c2a.aa(_0x239c2a.V(_0x1145e4)));
          }
        }
        var _0x39ddbd = this.op;
        switch (_0x5848a6.Wd) {
          case "EYES":
            _0x39ddbd.Gm(_0x57ad95.Dn(_0x5848a6.Je));
            _0x39ddbd.bn(_0x272862);
            break;
          case "MOUTH":
            _0x39ddbd.Gm(_0x57ad95.En(_0x5848a6.Je));
            _0x39ddbd.cn(_0x272862);
            break;
          case "GLASSES":
            _0x39ddbd.Gm(_0x57ad95.Gn(_0x5848a6.Je));
            _0x39ddbd.en(_0x272862);
            break;
          case "HAT":
            _0x39ddbd.Gm(_0x57ad95.Fn(_0x5848a6.Je));
            _0x39ddbd.dn(_0x272862);
            break;
        }
        if (_0x43f71c) {
          ooo.so.lk(_0x5848a6.Je, _0x5848a6.Wd);
        }
      }
    };
    _0x429093.prototype.addSelectedHatButton = function (_0x1560ee) {
      this.currentHatId = _0x1560ee;
      if (!this.hatButtonContainer) {
        this.hatButtonContainer = $("<div>").attr("id", "hat-button-container").css({
          position: "absolute",
          bottom: "30px",
          left: "-10px",
          display: "flex",
          gap: "5px"
        }).appendTo("#wear-view");
        this.hatToggleButton = $("<button>").attr("id", "hat-toggle-button").css({
          padding: "5px 10px",
          "background-color": "#4CAF50",
          color: "white",
          border: "none",
          "border-radius": "4px",
          cursor: "pointer",
          "min-width": "32px"
        }).appendTo(this.hatButtonContainer);
        this.hatFavoritesButton = $("<button>").attr("id", "hat-favorites-button").css({
          padding: "5px 10px",
          "background-color": "#2196F3",
          color: "white",
          border: "none",
          "border-radius": "4px",
          cursor: "pointer"
        }).text("☰ Favorites").appendTo(this.hatButtonContainer);
        this.hatInfoText = $("<div>").attr("id", "hat-info-text").css({
          position: "absolute",
          bottom: "10px",
          left: "-5px",
          "font-size": "12px",
          color: "#fff"
        }).text("Press '( 2 )' to toggle hats during gameplay").appendTo("#wear-view");
        var _0x1b8322 = this;
        this.hatFavoritesButton.on("click", function () {
          _0x1b8322.showFavoritesDialog();
        });
      }
      let _0x2994dc = _0x1a98d3.selectedHats.includes(_0x1560ee);
      this.hatToggleButton.text(_0x2994dc ? "X" : "★ Add");
      this.hatToggleButton.css("background-color", _0x2994dc ? "#f44336" : "#4CAF50");
      this.hatToggleButton.off("click");
      var _0x1b8322 = this;
      this.hatToggleButton.on("click", function () {
        let _0x462a2e = _0x1a98d3.selectedHats.indexOf(_0x1560ee);
        if (_0x462a2e >= 0) {
          _0x1a98d3.selectedHats.splice(_0x462a2e, 1);
          $(this).text("Add").css("background-color", "#4CAF50");
        } else {
          _0x1a98d3.selectedHats.push(_0x1560ee);
          $(this).text("X").css("background-color", "#f44336");
        }
        localStorage.setItem("SaveGamewft", JSON.stringify(_0x1a98d3));
      });
      this.hatButtonContainer.show();
      this.hatInfoText.show();
    };
    _0x429093.prototype.removeHatButtons = function () {
      if (this.hatButtonContainer) {
        this.hatButtonContainer.hide();
      }
      if (this.hatInfoText) {
        this.hatInfoText.hide();
      }
    };
    function _0xee2d51(_0x50a323) {
      try {
        if (window.globalHatTextureCache[_0x50a323] && window.globalHatTextureCache[_0x50a323].valid) {
          return window.globalHatTextureCache[_0x50a323];
        }
        const _0x5ee926 = ooo.ud.Cc().Yb(_0x50a323);
        if (!_0x5ee926 || !_0x5ee926.dc || !_0x5ee926.dc.length) {
          return null;
        }
        const _0x378dca = _0x5ee926.dc[0];
        let _0x469377 = null;
        if (_0x378dca._a !== undefined) {
          _0x469377 = {
            x: _0x378dca._a || 0,
            y: _0x378dca.ab || 0,
            width: _0x378dca.bb || 0,
            height: _0x378dca.cb || 0
          };
        } else if (_0x378dca._frame) {
          _0x469377 = {
            x: _0x378dca._frame.x || 0,
            y: _0x378dca._frame.y || 0,
            width: _0x378dca._frame.width || 0,
            height: _0x378dca._frame.height || 0
          };
        } else if (_0x378dca.orig) {
          _0x469377 = {
            x: _0x378dca.orig.x || 0,
            y: _0x378dca.orig.y || 0,
            width: _0x378dca.orig.width || 0,
            height: _0x378dca.orig.height || 0
          };
        } else if (_0x378dca.va && _0x378dca.va.length >= 4) {
          _0x469377 = {
            x: _0x378dca.va[0] || 0,
            y: _0x378dca.va[1] || 0,
            width: _0x378dca.va[2] || 0,
            height: _0x378dca.va[3] || 0
          };
        }
        let _0x14b1e1 = null;
        if (_0x378dca.Za && _0x378dca.Za.baseTexture && _0x378dca.Za.baseTexture.resource && _0x378dca.Za.baseTexture.resource.source) {
          _0x14b1e1 = _0x378dca.Za.baseTexture.resource.source;
        } else if (_0x378dca.baseTexture && _0x378dca.baseTexture.resource && _0x378dca.baseTexture.resource.source) {
          _0x14b1e1 = _0x378dca.baseTexture.resource.source;
        } else if (_0x378dca.baseTexture && _0x378dca.baseTexture.resource && _0x378dca.baseTexture.resource.data) {
          _0x14b1e1 = _0x378dca.baseTexture.resource.data;
        } else if (_0x378dca.baseTexture && _0x378dca.baseTexture.source) {
          _0x14b1e1 = _0x378dca.baseTexture.source;
        }
        const _0x54723d = {
          hatId: _0x50a323,
          image: _0x14b1e1 || null,
          coords: _0x469377 || null,
          textureData: _0x378dca,
          hatData: _0x5ee926,
          valid: _0x14b1e1 && _0x469377 ? true : false
        };
        window.globalHatTextureCache[_0x50a323] = _0x54723d;
        return _0x54723d;
      } catch (_0xc66218) {
        return null;
      }
    }
    function _0x4679be(_0x3b027b) {
      try {
        const _0x5f1695 = document.createElement("div");
        _0x5f1695.style.cssText = "\n            width: 100%;\n            height: 100%;\n            position: relative;\n            overflow: visible;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n        ";
        const _0x23296b = document.createElement("div");
        _0x23296b.textContent = "#" + _0x3b027b;
        _0x23296b.style.cssText = "\n            position: absolute;\n            top: 4px;\n            left: 4px;\n            background-color: rgba(0,0,0,0.6);\n            color: white;\n            font-size: 12px;\n            padding: 2px 5px;\n            border-radius: 3px;\n            z-index: 10;\n        ";
        _0x5f1695.appendChild(_0x23296b);
        const _0x27a3ae = document.createElement("canvas");
        _0x27a3ae.width = 80;
        _0x27a3ae.height = 80;
        _0x27a3ae.style.cssText = "\n            display: block;\n            object-fit: contain;\n        ";
        _0x5f1695.appendChild(_0x27a3ae);
        const _0x1f4696 = _0x27a3ae.getContext("2d", {
          willReadFrequently: true
        });
        _0x1f4696.clearRect(0, 0, _0x27a3ae.width, _0x27a3ae.height);
        const _0xa4df96 = _0xee2d51(_0x3b027b);
        if (!_0xa4df96 || !_0xa4df96.image || !_0xa4df96.coords) {
          _0x1f4696.fillStyle = "#333";
          _0x1f4696.fillRect(0, 0, _0x27a3ae.width, _0x27a3ae.height);
          _0x1f4696.fillStyle = "white";
          _0x1f4696.font = "18px Arial";
          _0x1f4696.textAlign = "center";
          _0x1f4696.fillText("#" + _0x3b027b, _0x27a3ae.width / 2, _0x27a3ae.height / 2);
          return _0x5f1695;
        }
        try {
          if (_0xa4df96.coords) {
            _0x1f4696.save();
            const _0x5dcb2a = Math.min((_0x27a3ae.width - 10) / _0xa4df96.coords.width, (_0x27a3ae.height - 10) / _0xa4df96.coords.height) * 0.9;
            const _0x15aa20 = _0xa4df96.coords.width * _0x5dcb2a;
            const _0x2c75d2 = _0xa4df96.coords.height * _0x5dcb2a;
            const _0x45f124 = (_0x27a3ae.width - _0x15aa20) / 2;
            const _0x571d3d = (_0x27a3ae.height - _0x2c75d2) / 2;
            _0x1f4696.drawImage(_0xa4df96.image, _0xa4df96.coords.x, _0xa4df96.coords.y, _0xa4df96.coords.width, _0xa4df96.coords.height, _0x45f124, _0x571d3d, _0x15aa20, _0x2c75d2);
            _0x1f4696.restore();
          } else {
            const _0x134489 = Math.min((_0x27a3ae.width - 10) / _0xa4df96.image.width, (_0x27a3ae.height - 10) / _0xa4df96.image.height) * 0.8;
            const _0x1b2b45 = _0xa4df96.image.width * _0x134489;
            const _0x1edbb3 = _0xa4df96.image.height * _0x134489;
            const _0x35cfee = (_0x27a3ae.width - _0x1b2b45) / 2;
            const _0x51f8aa = (_0x27a3ae.height - _0x1edbb3) / 2;
            _0x1f4696.drawImage(_0xa4df96.image, _0x35cfee, _0x51f8aa, _0x1b2b45, _0x1edbb3);
          }
        } catch (_0x337610) {
          _0x1f4696.fillStyle = "#333";
          _0x1f4696.fillRect(0, 0, _0x27a3ae.width, _0x27a3ae.height);
          _0x1f4696.fillStyle = "white";
          _0x1f4696.font = "18px Arial";
          _0x1f4696.textAlign = "center";
          _0x1f4696.fillText("#" + _0x3b027b, _0x27a3ae.width / 2, _0x27a3ae.height / 2);
        }
        return _0x5f1695;
      } catch (_0x2ce18d) {
        const _0x535de7 = document.createElement("div");
        _0x535de7.style.cssText = "\n            width: 100%;\n            height: 100%;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            color: white;\n            background-color: #333;\n        ";
        _0x535de7.textContent = "#" + _0x3b027b;
        return _0x535de7;
      }
    }
    _0x429093.prototype.showFavoritesDialog = function () {
      $("#favorites-dialog, #favorites-overlay").remove();
      var _0x418f2b = $("<div>").attr("id", "favorites-overlay").css({
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        "background-color": "rgba(0, 0, 0, 0.5)",
        "z-index": "999"
      }).appendTo("body");
      var _0x19d23b = $("<div>").attr("id", "favorites-dialog").css({
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        "background-color": "#1e1e2f",
        "border-radius": "8px",
        "box-shadow": "0 4px 8px rgba(0, 0, 0, 0.5)",
        "z-index": "1000",
        width: "500px",
        overflow: "hidden",
        color: "white"
      }).appendTo("body");
      var _0x7ae60f = $("<div>").css({
        padding: "15px 20px",
        "background-color": "#252538",
        "border-bottom": "1px solid #333345",
        position: "relative",
        display: "flex",
        "justify-content": "space-between",
        "align-items": "center"
      }).appendTo(_0x19d23b);
      $("<h3>").text("Favorite Hats").css({
        margin: "0 0 0 5px",
        "font-size": "18px",
        color: "white",
        "padding-left": "15px"
      }).appendTo(_0x7ae60f);
      var _0x450c9a = $("<button>").html("&times;").css({
        position: "absolute",
        top: "8px",
        left: "10px",
        "font-size": "22px",
        background: "none",
        border: "none",
        color: "#aaa",
        cursor: "pointer",
        padding: "0 5px",
        "line-height": "1",
        "font-weight": "bold"
      }).appendTo(_0x7ae60f);
      var _0x3326b6 = $("<button>").text("Clear All").css({
        padding: "4px 8px",
        "background-color": "#f44336",
        color: "white",
        border: "none",
        "border-radius": "4px",
        cursor: "pointer",
        "font-size": "12px"
      }).appendTo(_0x7ae60f);
      var _0xe994f4 = $("<div>").attr("id", "favorites-content").css({
        padding: "15px 20px",
        "max-height": "420px",
        "overflow-y": "auto"
      }).appendTo(_0x19d23b);
      var _0x39b379 = $("<div>").attr("class", "favorites-grid").css({
        display: "grid",
        "grid-template-columns": "1fr 1fr 1fr",
        gap: "12px",
        padding: "0",
        margin: "0"
      }).appendTo(_0xe994f4);
      var _0xf0bc54 = this;
      _0x3326b6.on("click", function () {
        if (confirm("Are you sure you want to remove all favorite hats?")) {
          _0x1a98d3.selectedHats = [];
          localStorage.setItem("SaveGamewft", JSON.stringify(_0x1a98d3));
          _0x39b379.empty();
          $("<div>").css({
            "text-align": "center",
            padding: "10px",
            color: "#aaa",
            margin: "20px 0",
            "grid-column": "1 / span 3"
          }).text("You don't have any favorite hats yet.").appendTo(_0x39b379);
          if (_0xf0bc54.hatToggleButton && _0xf0bc54.hatToggleButton.is(":visible")) {
            _0xf0bc54.hatToggleButton.text("★ Add").css("background-color", "#4CAF50");
          }
        }
      });
      function _0x2dad67() {
        _0x19d23b.remove();
        _0x418f2b.remove();
      }
      _0x450c9a.on("click", _0x2dad67);
      _0x418f2b.on("click", _0x2dad67);
      if (!_0x1a98d3.selectedHats || _0x1a98d3.selectedHats.length === 0) {
        $("<div>").css({
          "text-align": "center",
          padding: "10px",
          color: "#aaa",
          margin: "20px 0",
          "grid-column": "1 / span 2"
        }).text("You don't have any favorite hats yet.").appendTo(_0x39b379);
      } else {
        _0x1a98d3.selectedHats.forEach(function (_0x50695e) {
          _0xee2d51(_0x50695e);
        });
        _0x1a98d3.selectedHats.forEach(function (_0x264659, _0x703dd7) {
          var _0x40b2c3 = $("<div>").attr("data-index", _0x703dd7).attr("data-hat-id", _0x264659).css({
            display: "flex",
            "flex-direction": "column",
            "align-items": "center",
            padding: "2px",
            background: "#252538",
            "border-radius": "6px",
            position: "relative",
            height: "87px",
            width: "100%"
          }).appendTo(_0x39b379);
          var _0x3e2fd7 = $("<div>").css({
            width: "100%",
            height: "82px",
            background: "transparent",
            "border-radius": "4px",
            overflow: "visible",
            position: "relative",
            display: "flex",
            "justify-content": "center",
            "align-items": "center"
          }).appendTo(_0x40b2c3);
          var _0x1ea1fa = $("<button>").text("X").css({
            position: "absolute",
            top: "4px",
            right: "4px",
            background: "#f44336",
            color: "white",
            border: "none",
            padding: "2px 6px",
            "border-radius": "3px",
            cursor: "pointer",
            "font-size": "12px",
            "z-index": "20"
          }).appendTo(_0x40b2c3);
          var _0x36928c = _0x4679be(_0x264659);
          _0x3e2fd7.append(_0x36928c);
          _0x1ea1fa.on("click", function (_0x54a966) {
            _0x54a966.stopPropagation();
            var _0x1b5dec = $(this).closest("[data-index]");
            var _0x4358e1 = parseInt(_0x1b5dec.attr("data-index"));
            var _0x418d28 = _0x1b5dec.attr("data-hat-id");
            if (_0x1a98d3.selectedHats && _0x4358e1 >= 0 && _0x4358e1 < _0x1a98d3.selectedHats.length) {
              _0x1a98d3.selectedHats.splice(_0x4358e1, 1);
              localStorage.setItem("SaveGamewft", JSON.stringify(_0x1a98d3));
              _0x1b5dec.fadeOut(300, function () {
                $(this).remove();
                _0x39b379.find("[data-index]").each(function (_0x2cc084) {
                  $(this).attr("data-index", _0x2cc084);
                });
                if (_0x1a98d3.selectedHats.length === 0) {
                  _0x39b379.empty();
                  $("<div>").css({
                    "text-align": "center",
                    padding: "10px",
                    color: "#aaa",
                    margin: "20px 0",
                    "grid-column": "1 / span 3"
                  }).text("You don't have any favorite hats yet.").appendTo(_0x39b379);
                }
                if (_0xf0bc54.currentHatId === _0x418d28 && _0xf0bc54.hatToggleButton) {
                  _0xf0bc54.hatToggleButton.text("★ Add").css("background-color", "#4CAF50");
                }
              });
            }
          });
        });
      }
      $(".favorites-content").on("scroll", function () {
        $(this).css("pointer-events", "auto");
      });
      $(".favorites-popup").on("shown", function () {
        setTimeout(function () {
          $(".favorites-content").scrollTop(0);
        }, 100);
      });
    };
    function _0x46c8a6(_0x4bbe86) {
      try {
        if (ooo && ooo.Mh && ooo.Mh.Lh && ooo.Mh.Lh.ki) {
          const _0x65e6c1 = ooo.Mh.Lh.ki.Yi;
          ooo.Mh.Lh.ki.Yi = _0x4bbe86;
          if (ooo.Mh.Qh && ooo.Mh.Qh.fh && ooo.Mh.li && ooo.Mh.li[ooo.Mh.Qh.fh] && ooo.Mh.li[ooo.Mh.Qh.fh].ki) {
            ooo.Mh.li[ooo.Mh.Qh.fh].ki.Yi = _0x4bbe86;
          }
          if (_0x2cbd14 && _0x2cbd14.uj && _0x2cbd14.n) {
            const _0x5af267 = _0x596e0d(_0x2cbd14.uj);
            if (_0x5af267) {
              _0xf80227(_0x5af267, _0x4bbe86);
              return true;
            } else {
              const _0x3c8d63 = ooo.ud.Cc().Yb(_0x4bbe86);
              if (_0x3c8d63) {
                _0x761db3(_0x2cbd14.uj, _0x3c8d63);
                return true;
              }
            }
          }
          return true;
        }
      } catch (_0xee8ef2) {}
      return false;
    }
    function _0x596e0d(_0x5d95e8) {
      if (_0x5d95e8.Zc && _0x5d95e8.Zc.rd) {
        return _0x5d95e8.Zc.rd;
      }
      return null;
    }
    function _0xf80227(_0x4b8ee4, _0x1c3e1a) {
      if (_0x4b8ee4 && _0x4b8ee4.length > 0) {
        const _0x37f5d2 = ooo.ud.Cc().Yb(_0x1c3e1a);
        if (_0x37f5d2 && _0x37f5d2.dc && _0x37f5d2.dc.length > 0) {
          try {
            _0x4b8ee4[0].kd(_0x37f5d2.dc[0]);
            return true;
          } catch (_0xc1dc44) {}
        }
      }
      return false;
    }
    function _0x761db3(_0x1dd635, _0x295057) {
      if (_0x1dd635 && _0x1dd635.Zc && _0x295057) {
        try {
          _0x1dd635.Zc.yd(0.004, _0x1dd635.Zc.rd, _0x295057);
          return true;
        } catch (_0x321f8c) {}
      }
      return false;
    }
    function _0x19a16c() {
      if (!_0x1a98d3.selectedHats) {
        _0x1a98d3.selectedHats = [];
        localStorage.setItem("SaveGamewft", JSON.stringify(_0x1a98d3));
        return;
      }
      if (_0x1a98d3.selectedHats.length > 0) {
        if (_0x1a98d3.currentHatIndex === undefined) {
          _0x1a98d3.currentHatIndex = 0;
        } else {
          _0x1a98d3.currentHatIndex = (_0x1a98d3.currentHatIndex + 1) % _0x1a98d3.selectedHats.length;
        }
        let _0x18cca1 = _0x1a98d3.selectedHats[_0x1a98d3.currentHatIndex];
        const _0x654d5 = _0x46c8a6(_0x18cca1);
        localStorage.setItem("SaveGamewft", JSON.stringify(_0x1a98d3));
      }
    }
    function _0x5e7a12() {
      if (window.hatCyclingInitialized) {
        return;
      }
      $(document).on("keydown", function (_0x1dc2d6) {
        if (_0x1dc2d6.keyCode === 50 || _0x1dc2d6.which === 50) {
          _0x19a16c();
        }
      });
      window.hatCyclingInitialized = true;
    }
    function _0x2cb7cc() {
      if (!_0x1a98d3.selectedHats || _0x1a98d3.selectedHats.length === 0) {
        return;
      }
      _0x1a98d3.selectedHats.forEach(function (_0x327476) {
        _0xee2d51(_0x327476);
      });
    }
    $(document).ready(function () {
      setTimeout(function () {
        _0x5e7a12();
        _0x2cb7cc();
        window.openHatFavorites = function () {
          if (_0x429093.prototype.showFavoritesDialog) {
            var _0x3b288c = new _0x429093();
            _0x3b288c.showFavoritesDialog();
          }
        };
        window.hatHelp = function () {};
      }, 1000);
    });
    function _0x3913fe() {
      try {
        const _0x51ad1c = [];
        const _0x5d559d = ooo.ud.Cc();
        if (!_0x5d559d) {
          return _0x51ad1c;
        }
        for (let _0x868d37 in _0x5d559d.Vb) {
          if (_0x5d559d.Vb.hasOwnProperty(_0x868d37)) {
            _0x51ad1c.push(_0x868d37);
          }
        }
        return _0x51ad1c;
      } catch (_0x3c3d72) {
        return [];
      }
    }
    function _0x30356d() {}
    window.addEventListener("load", function () {
      setTimeout(function () {
        _0x2cb7cc();
        _0x30356d();
      }, 2000);
    });
    _0x416f86 = function () {
      function _0x422a36(_0x353172, _0x8ba3d0, _0x3bf865) {
        this.Cp = _0x353172;
        this.Wd = _0x8ba3d0;
        this.ep = _0x3bf865;
        this.Lc = {};
        this.Sp = [[]];
        this.Tp = -10;
        this.Up = -10;
      }
      _0x422a36.prototype.Op = function (_0x263850) {
        this.Sp = _0x263850;
      };
      _0x422a36.prototype.Pp = function (_0x31d2ff) {
        this.Lc = _0x31d2ff;
      };
      _0x422a36.prototype.ml = function () {
        var _0x4eac71 = ooo.so.Zj(this.Wd);
        for (var _0x592c93 = 0; _0x592c93 < this.Sp.length; _0x592c93++) {
          for (var _0x37940e = 0; _0x37940e < this.Sp[_0x592c93].length; _0x37940e++) {
            if (this.Sp[_0x592c93][_0x37940e] === _0x4eac71) {
              this.Vp(_0x592c93);
              this.Wp(_0x37940e);
              return;
            }
          }
        }
        ;
        this.Vp(0);
        this.Wp(0);
      };
      _0x422a36.prototype.Lp = function () {
        var _0x1f4428 = this.Tp - 1;
        if (_0x1f4428 < 0) {
          _0x1f4428 = this.Sp.length - 1;
        }
        this.Vp(_0x1f4428);
        this.Wp(this.Up % this.Sp[_0x1f4428].length);
      };
      _0x422a36.prototype.Mp = function () {
        var _0x2a50e6 = this.Tp + 1;
        if (_0x2a50e6 >= this.Sp.length) {
          _0x2a50e6 = 0;
        }
        this.Vp(_0x2a50e6);
        this.Wp(this.Up % this.Sp[_0x2a50e6].length);
      };
      _0x422a36.prototype.Vp = function (_0x5cd120) {
        var _0x5d5865 = this;
        if (!(_0x5cd120 < 0) && !(_0x5cd120 >= this.Sp.length)) {
          this.Tp = _0x5cd120;
          _0x3971f3.empty();
          var _0xe5edc = this.Sp[this.Tp];
          if (_0xe5edc.length > 1) {
            for (var _0x32570e = 0; _0x32570e < _0xe5edc.length; _0x32570e++) {
              (function (_0x4a7855) {
                var _0x59ba2c = _0xe5edc[_0x4a7855];
                var _0x22033c = _0x5d5865.Lc[_0x59ba2c];
                var _0x24af33 = "#" + _0x5d5865.Cp.Jp[_0x22033c.prime];
                var _0x3405fd = $("<div style=\"border-color: " + _0x24af33 + "\"></div>");
                _0x3405fd.click(function () {
                  ooo.ij.if();
                  _0x5d5865.Wp(_0x4a7855);
                });
                _0x3971f3.append(_0x3405fd);
              })(_0x32570e);
            }
          }
        }
      };
      _0x422a36.prototype.Wp = function (_0x4b1869) {
        if (!(_0x4b1869 < 0) && !(_0x4b1869 >= this.Sp[this.Tp].length)) {
          this.Up = _0x4b1869;
          _0x3971f3.children().css("background-color", "transparent");
          var _0x17d1ce = _0x3971f3.children(":nth-child(" + (1 + _0x4b1869) + ")");
          _0x17d1ce.css("background-color", _0x17d1ce.css("border-color"));
          this.Cp.tp(true);
        }
      };
      _0x422a36.prototype.Ap = function () {
        return this.Sp[this.Tp][this.Up];
      };
      return _0x422a36;
    }();
    _0x158a86.Vk = _0x429093;
    _0x1e893c = $(".play-button");
    _0x3b9803 = $(".close-button");
    (_0x4fe8c2 = _0x239c2a.ca(_0x158a86.Ho, function () {
      _0x158a86.Ho.call(this, _0x239c2a.U("index.game.popup.menu.consent.tab"), false);
      _0x1e893c.click(function () {
        ooo.ij.if();
        if (ooo.kp()) {
          ooo.Xg.gl(ooo.Xg.Jf);
          ooo.Xp(false, true);
          ooo.Xg.Yk.Fo(new _0x158a86.Yp());
        } else {
          ooo.Xg.jl();
        }
      });
      _0x3b9803.click(function () {
        ooo.ij.if();
        ooo.Xg.jl();
      });
    })).prototype.Sa = function () {
      _0x4fe8c2.parent.prototype.Sa.call(this);
    };
    _0x4fe8c2.prototype.Wo = function () {
      _0x39b888.f.h(_0x158a86.Ho.Mo, 50);
      _0x39b888.f.h(_0x158a86.Ho.No, 50);
      _0x39b888.f.h(_0x158a86.Ho.Oo, 50);
      _0x39b888.f.h(_0x158a86.Ho.Po, 50);
      _0x39b888.f.h(_0x158a86.Ho.Qo, 50);
      _0x39b888.f.h(_0x158a86.Ho.Ro, 50);
      _0x39b888.f.h(_0x158a86.Ho.So, 50);
      _0x39b888.f.h(_0x158a86.Ho.To, 50);
      _0x39b888.f.g(_0x158a86.Ho.Uo, 200);
      _0x39b888.f.h(_0x158a86.Ho.Vo, 50);
    };
    _0x4fe8c2.prototype.nl = function () {
      ooo.ij.jf();
    };
    _0x158a86.Ek = _0x4fe8c2;
    _0x19aa88 = $("#delete-account-timer");
    _0x4e2efe = $("#delete-account-yes");
    _0x5de89a = $("#delete-account-no");
    (_0x4277a3 = _0x239c2a.ca(_0x158a86.Ho, function () {
      _0x158a86.Ho.call(this, _0x239c2a.U("index.game.popup.menu.delete.tab"), false);
      _0x4e2efe.click(function () {
        ooo.ij.if();
        if (ooo.ok.nk()) {
          ooo.ok.ym();
          ooo.ok.qm();
        } else {
          ooo.Xg.jl();
        }
      });
      _0x5de89a.click(function () {
        ooo.ij.if();
        ooo.Xg.jl();
      });
      this.Zp = [];
    })).prototype.Sa = function () {
      _0x4277a3.parent.prototype.Sa.call(this);
    };
    _0x4277a3.prototype.Wo = function () {
      _0x39b888.f.h(_0x158a86.Ho.Mo, 50);
      _0x39b888.f.h(_0x158a86.Ho.No, 50);
      _0x39b888.f.h(_0x158a86.Ho.Oo, 50);
      _0x39b888.f.h(_0x158a86.Ho.Po, 50);
      _0x39b888.f.h(_0x158a86.Ho.Qo, 50);
      _0x39b888.f.h(_0x158a86.Ho.Ro, 50);
      _0x39b888.f.h(_0x158a86.Ho.So, 50);
      _0x39b888.f.h(_0x158a86.Ho.To, 50);
      _0x39b888.f.h(_0x158a86.Ho.Uo, 50);
      _0x39b888.f.g(_0x158a86.Ho.Vo, 200);
    };
    _0x4277a3.prototype.nl = function () {
      ooo.ij.nf();
      _0x39b888.f.h(_0x4e2efe, 1);
      _0x39b888.f.g(_0x19aa88, 1);
      _0x19aa88.text("..10 ..");
      this.$p();
      this._p(function () {
        _0x19aa88.text("..9 ..");
      }, 1000);
      this._p(function () {
        _0x19aa88.text("..8 ..");
      }, 2000);
      this._p(function () {
        _0x19aa88.text("..7 ..");
      }, 3000);
      this._p(function () {
        _0x19aa88.text("..6 ..");
      }, 4000);
      this._p(function () {
        _0x19aa88.text("..5 ..");
      }, 5000);
      this._p(function () {
        _0x19aa88.text("..4 ..");
      }, 6000);
      this._p(function () {
        _0x19aa88.text("..3 ..");
      }, 7000);
      this._p(function () {
        _0x19aa88.text("..2 ..");
      }, 8000);
      this._p(function () {
        _0x19aa88.text("..1 ..");
      }, 9000);
      this._p(function () {
        _0x39b888.f.g(_0x4e2efe, 300);
        _0x39b888.f.h(_0x19aa88, 1);
      }, 10000);
    };
    _0x4277a3.prototype._p = function (_0x55d9f5, _0x5d8540) {
      var _0x2376e3 = _0x239c2a.Y(_0x55d9f5, _0x5d8540);
      this.Zp.push(_0x2376e3);
    };
    _0x4277a3.prototype.$p = function () {
      for (var _0x453636 = 0; _0x453636 < this.Zp.length; _0x453636++) {
        _0x239c2a.Z(this.Zp[_0x453636]);
      }
      ;
      this.Zp = [];
    };
    _0x158a86.Gk = _0x4277a3;
    _0x158a86.aq = function () {
      function _0x3053fc() {
        this.Go = function () {};
      }
      _0x3053fc.prototype.ag = function () {};
      _0x3053fc.prototype.nl = function () {};
      return _0x3053fc;
    }();
    (_0x2813b8 = _0x239c2a.ca(_0x158a86.aq, function (_0x215a3e) {
      _0x158a86.aq.call(this);
      var _0x1baa3f = _0x239c2a.Ca() + "_" + _0x239c2a._(1000 + _0x239c2a.ma() * 8999);
      this.bq = $("<div id=\"" + _0x1baa3f + "\" class=\"toaster toaster-coins\"><img class=\"toaster-coins-img\" alt=\"Wormate Coin\" src=\"/images/coin_320.png\" /><div class=\"toaster-coins-val\">" + _0x215a3e + "</div><div class=\"toaster-coins-close\">" + _0x239c2a.U("index.game.toaster.continue") + "</div></div>");
      var _0x46315d = this;
      this.bq.find(".toaster-coins-close").click(function () {
        ooo.ij.if();
        _0x46315d.Go();
      });
    })).prototype.ag = function () {
      return this.bq;
    };
    _0x2813b8.prototype.nl = function () {
      ooo.ij.lf();
    };
    _0x158a86.mm = _0x2813b8;
    (_0x2eae5f = _0x239c2a.ca(_0x158a86.aq, function (_0x3a684a) {
      _0x158a86.aq.call(this);
      var _0x3ab56b = _0x239c2a.Ca() + "_" + _0x239c2a._(1000 + _0x239c2a.ma() * 8999);
      this.bq = $("<div id=\"" + _0x3ab56b + "\" class=\"toaster toaster-levelup\"><img class=\"toaster-levelup-img\" alt=\"Wormate Level Up Star\" src=\"/images/level-star.svg\" /><div class=\"toaster-levelup-val\">" + _0x3a684a + "</div><div class=\"toaster-levelup-text\">" + _0x239c2a.U("index.game.toaster.levelup") + "</div><div class=\"toaster-levelup-close\">" + _0x239c2a.U("index.game.toaster.continue") + "</div></div>");
      var _0x4f37d6 = this;
      this.bq.find(".toaster-levelup-close").click(function () {
        ooo.ij.if();
        _0x4f37d6.Go();
      });
    })).prototype.ag = function () {
      return this.bq;
    };
    _0x2eae5f.prototype.nl = function () {
      ooo.ij.kf();
    };
    _0x158a86.lm = _0x2eae5f;
    (_0x1ac14c = _0x239c2a.ca(_0x158a86.aq, function () {
      _0x158a86.aq.call(this);
      var _0x87b174 = this;
      var _0x3969a4 = _0x239c2a.Ca() + "_" + _0x239c2a._(1000 + _0x239c2a.ma() * 8999);
      this.bq = $("<div id=\"" + _0x3969a4 + "\" class=\"toaster toaster-consent-accepted\"><img class=\"toaster-consent-accepted-logo\" src=\"" + _0x2171ac.H.L + "\" alt=\"Wormate.io logo\"/><div class=\"toaster-consent-accepted-container\"><span class=\"toaster-consent-accepted-text\">" + _0x239c2a.U("index.game.toaster.consent.text").replaceAll(" ", "&nbsp;").replaceAll("\n", "<br/>") + "</span><a class=\"toaster-consent-accepted-link\" href=\"/privacy-policy\">" + _0x239c2a.U("index.game.toaster.consent.link") + "</a></div><div class=\"toaster-consent-close\">" + _0x239c2a.U("index.game.toaster.consent.iAccept") + "</div></div>");
      this.cq = this.bq.find(".toaster-consent-close");
      this.cq.hide();
      this.cq.click(function () {
        ooo.ij.if();
        if (ooo.kp()) {
          ooo.Xp(true, true);
        }
        _0x87b174.Go();
      });
    })).prototype.ag = function () {
      return this.bq;
    };
    _0x1ac14c.prototype.nl = function () {
      var _0x4b336d = this;
      if (ooo.kp() && !ooo.Pl()) {
        ooo.ij.nf();
        _0x239c2a.Y(function () {
          _0x4b336d.cq.fadeIn(300);
        }, 2000);
      } else {
        _0x239c2a.Y(function () {
          _0x4b336d.Go();
        }, 0);
      }
    };
    _0x158a86.Yp = _0x1ac14c;
    _0x317d33 = $("#error-gateway-connection-retry");
    (_0x24ee2e = _0x239c2a.ca(_0x158a86.Uf, function () {
      _0x158a86.Uf.call(this, _0x158a86.ll.ao);
      _0x317d33.click(function () {
        ooo.ij.if();
        ooo.Xg.Re.qo();
        ooo.Xg.gl(ooo.Xg.Re);
        _0x239c2a.Y(function () {
          var _0x5c30b7 = _0x2171ac.H.J + "/pub/healthCheck/ping";
          _0x239c2a.Aa(_0x5c30b7, function () {
            ooo.Xg.gl(ooo.Xg._k);
          }, function (_0xda9383) {
            ooo.Xg.Re.oo();
            ooo.ud.rc(function () {
              ooo.Xg.gl(ooo.Xg.Jf);
            }, function (_0x12e43f) {
              ooo.Xg.gl(ooo.Xg._k);
            }, function (_0x582846, _0x3a3a97) {
              ooo.Xg.Re.po(_0x582846, _0x3a3a97);
            });
          });
        }, 2000);
      });
    })).prototype.Sa = function () {};
    _0x24ee2e.prototype.ml = function () {
      _0x158a86.Nf.rg(true);
      _0x39b888.f.g(_0x158a86.Uf.Tf, 500);
      _0x39b888.f.g(_0x158a86.Uf.Qn, 1);
      _0x39b888.f.h(_0x158a86.Uf.Rn, 50);
      _0x39b888.f.h(_0x158a86.Uf.Sn, 50);
      _0x39b888.f.h(_0x158a86.Uf.Tn, 50);
      _0x39b888.f.h(_0x158a86.Uf.Un, 50);
      _0x39b888.f.h(_0x158a86.Uf.Vn, 50);
      _0x39b888.f.h(_0x158a86.Uf.Wn, 50);
      _0x39b888.f.h(_0x158a86.Uf.Xn, 50);
      _0x39b888.f.h(_0x158a86.Uf.Yn, 50);
      _0x39b888.f.h(_0x158a86.Uf.Zn, 50);
      _0x39b888.f.g(_0x158a86.Uf.$n, 500);
      _0x39b888.f.h(_0x158a86.Uf._n, 50);
    };
    _0x24ee2e.prototype.nl = function () {
      ooo.ij.Ye(_0x158a86.Pe.Se.Jf);
      ooo.ij.nf();
    };
    _0x158a86.al = _0x24ee2e;
    _0x462c22 = $("#error-game-connection-retry");
    (_0x4912b9 = _0x239c2a.ca(_0x158a86.Uf, function () {
      _0x158a86.Uf.call(this, _0x158a86.ll.ao);
      _0x462c22.click(function () {
        ooo.ij.if();
        ooo.Xg.gl(ooo.Xg.Jf);
      });
    })).prototype.Sa = function () {};
    _0x4912b9.prototype.ml = function () {
      _0x158a86.Nf.rg(true);
      _0x39b888.f.g(_0x158a86.Uf.Tf, 500);
      _0x39b888.f.g(_0x158a86.Uf.Qn, 1);
      _0x39b888.f.h(_0x158a86.Uf.Rn, 50);
      _0x39b888.f.h(_0x158a86.Uf.Sn, 50);
      _0x39b888.f.h(_0x158a86.Uf.Tn, 50);
      _0x39b888.f.h(_0x158a86.Uf.Un, 50);
      _0x39b888.f.h(_0x158a86.Uf.Vn, 50);
      _0x39b888.f.h(_0x158a86.Uf.Wn, 50);
      _0x39b888.f.h(_0x158a86.Uf.Xn, 50);
      _0x39b888.f.h(_0x158a86.Uf.Yn, 50);
      _0x39b888.f.h(_0x158a86.Uf.Zn, 50);
      _0x39b888.f.h(_0x158a86.Uf.$n, 50);
      _0x39b888.f.g(_0x158a86.Uf._n, 500);
    };
    _0x4912b9.prototype.nl = function () {
      ooo.ij.Ye(_0x158a86.Pe.Se.Jf);
      ooo.ij.nf();
    };
    _0x158a86.cl = _0x4912b9;
    _0x239c2a.dq = function () {
      function _0x1f7f9d(_0x4c829d) {
        var _0x220876 = _0x4c829d + _0x239c2a._(_0x239c2a.ma() * 65535) * 37;
        _0x158a86.Cg.Ng(_0x158a86.Cg.Lg, _0x220876, 30);
      }
      return function () {
        var _0x511655 = parseInt(_0x158a86.Cg.Og(_0x158a86.Cg.Lg)) % 37;
        if (!(_0x511655 >= 0) || !(_0x511655 < _0x2171ac.co.fq)) {
          _0x511655 = _0x239c2a.ia(0, _0x2171ac.co.fq - 2);
        }
        var _0x27dee6 = {
          gq: false
        };
        _0x27dee6.hq = _0x239c2a.Ca();
        _0x27dee6.iq = 0;
        _0x27dee6.jq = 0;
        _0x27dee6.kq = null;
        _0x27dee6.lq = _0x2171ac.H.Q;
        _0x27dee6.mq = _0x2171ac.H.P;
        _0x27dee6.Mh = null;
        _0x27dee6.ud = null;
        _0x27dee6.ef = null;
        _0x27dee6.ij = null;
        _0x27dee6.Xg = null;
        _0x27dee6.so = null;
        _0x27dee6.ok = null;
        try {
          var _0x21ee08 = navigator;
          if (_0x21ee08) {
            var _0x47006a = _0x21ee08.geolocation;
            if (_0x47006a) {
              _0x47006a.getCurrentPosition(function (_0x2b441f) {
                var _0x3f4075 = _0x2b441f.coords;
                if (f3(_0x3f4075) != "undefined" && f3(_0x3f4075.latitude) != "undefined" && f3(_0x3f4075.longitude) != "undefined") {
                  _0x27dee6.kq = _0x2b441f;
                }
              }, function (_0x35effb) {});
            }
          }
        } catch (_0x3aac80) {}
        ;
        _0x27dee6.Sa = function () {
          _0x27dee6.Mh = new _0x158a86.nq();
          _0x27dee6.Mh.oq = new _0x158a86.si(_0x27dee6.Mh);
          _0x27dee6.ud = new _0x158a86.Kb();
          _0x27dee6.ef = new _0x158a86.wk();
          _0x27dee6.ij = new _0x158a86.Pe();
          _0x27dee6.Xg = new _0x158a86.zk();
          _0x27dee6.so = new _0x158a86.Sj();
          _0x27dee6.ok = new _0x158a86.sl();
          try {
            ga("send", "event", "app", _0x2171ac.H.I + "_init");
          } catch (_0xebd2c0) {}
          ;
          _0x27dee6.Mh.pq = function () {
            _0x27dee6.Xg.gl(_0x27dee6.Xg.bl);
          };
          _0x27dee6.Mh.qq = function () {
            var _0xf46ef7 = _0x27dee6.Xg.Jf.Ao();
            try {
              ga("send", "event", "game", _0x2171ac.H.I + "_start", _0xf46ef7);
            } catch (_0x4365ce) {}
            ;
            _0x27dee6.ij.Ye(_0x158a86.Pe.Se.Kf);
            _0x27dee6.Xg.gl(_0x27dee6.Xg.Kf.ho());
          };
          _0x27dee6.Mh.rq = function () {
            var _0x25fef0;
            var _0x4dba3e;
            try {
              ga("send", "event", "game", _0x2171ac.H.I + "_end");
            } catch (_0x4e2ef0) {}
            ;
            if ($("body").height() >= 430) {
              _0x2171ac.co.sq.Va();
            }
            _0x27dee6.ud.rc(null, null, null);
            _0x25fef0 = _0x239c2a._(_0x27dee6.Mh.Lh.hi);
            _0x4dba3e = _0x27dee6.Mh.oi;
            if (_0x27dee6.ok.nk()) {
              _0x27dee6.ok.hm(function () {
                _0x27dee6.tq(_0x25fef0, _0x4dba3e);
              });
            } else {
              _0x27dee6.tq(_0x25fef0, _0x4dba3e);
            }
          };
          _0x27dee6.Mh.uq = function (_0x3d9108) {
            _0x3d9108(_0x27dee6.Xg.Kf.ko(), _0x27dee6.Xg.Kf.lo());
          };
          _0x27dee6.ok.em(function () {
            var _0xbe788f = _0x27dee6.Xg.rl();
            if (_0xbe788f != null && _0xbe788f.Wd === _0x158a86.ll.kl) {
              _0x27dee6.ij.Ye(_0x158a86.Pe.Se.Jf);
              _0x27dee6.Xg.gl(_0x27dee6.Xg.Jf);
            }
            if (_0x27dee6.ok.nk()) {
              var _0x446021 = _0x27dee6.ok.Kl();
              try {
                ga("set", "userId", _0x446021);
              } catch (_0x42701b) {}
              ;
              try {
                v2("messenger", "loginUser", function (_0x5e636c) {
                  _0x5e636c(_0x446021);
                });
              } catch (_0x1da632) {}
            } else {
              try {
                v2("webWidget", "logout");
              } catch (_0x2a4584) {}
            }
            ;
            if (_0x27dee6.kp() && _0x27dee6.ok.nk() && !_0x27dee6.ok.Pl()) {
              _0x27dee6.Xp(false, false);
              _0x27dee6.Xg.Yk.Fo(new _0x158a86.Yp());
            } else {
              _0x27dee6.vq(true);
            }
          });
          _0x27dee6.Mh.Sa();
          _0x27dee6.Xg.Sa();
          _0x27dee6.so.Sa();
          _0x27dee6.ud.Sa();
          _0x27dee6.Xg.Jf.zo();
          _0x27dee6.Xg.gl(_0x27dee6.Xg.Jf);
          _0x27dee6.ef.Sa(function () {
            _0x27dee6.ij.Sa();
            _0x27dee6.ok.Sa();
            _0x27dee6.ud.rc(function () {
              _0x27dee6.Xg.Jf.yo();
              _0x27dee6.Xg.gl(_0x27dee6.Xg.Jf);
            }, function (_0x38e11e) {
              _0x27dee6.Xg.Jf.yo();
              _0x27dee6.Xg.gl(_0x27dee6.Xg._k);
            }, function (_0x4e79c3, _0x1b31a0) {
              var _0x511aef = _0x4e79c3;
              _0x27dee6.Xg.Re.po(_0x511aef, _0x1b31a0);
              _0x27dee6.Xg.Jf.po(_0x511aef, _0x1b31a0);
            });
            if (_0x27dee6.kp() && !_0x27dee6.Pl()) {
              _0x27dee6.Xg.Yk.Fo(new _0x158a86.Yp());
            } else {
              _0x27dee6.vq(true);
            }
          });
        };
        _0x27dee6.wq = function (_0xf33583) {
          if (_0x27dee6.ok.nk()) {
            var _0x333adc = _0x27dee6.ok.gm();
            var _0x4e67f2 = _0x2171ac.H.J + "/pub/wuid/" + _0x333adc + "/consent/change?value=" + _0x239c2a.W(_0xf33583);
            _0x239c2a.Aa(_0x4e67f2, function () {}, function (_0x2d9f0) {});
          }
        };
        _0x27dee6.to = function () {
          _0x511655++;
          if (_0x2cbd14.on) {
            _0x511655 = 1;
          }
          if (!_0x2171ac.co.xq && _0x511655 >= _0x2171ac.co.fq) {
            _0x27dee6.Xg.gl(_0x27dee6.Xg.dl);
            _0x27dee6.ij.Ye(_0x158a86.Pe.Se.Mf);
            _0x2171ac.co.yq.Ta();
          } else {
            _0x1f7f9d(_0x511655);
            _0x27dee6.zq();
          }
        };
        _0x27dee6.zq = function () {
          if (_0x27dee6.Mh.Aq()) {
            _0x27dee6.Xg.Re.qo();
            _0x27dee6.Xg.gl(_0x27dee6.Xg.Re);
            var _0x17afc5 = _0x27dee6.Xg.Jf.Ao();
            _0x158a86.Cg.Ng(_0x158a86.Cg.Ig, _0x17afc5, 30);
            var _0x5d4000 = _0x27dee6.Xg.Hi.Gi();
            _0x158a86.Cg.Ng(_0x158a86.Cg.Eg, _0x5d4000, 30);
            var _0x30877d = 0;
            if (_0x27dee6.kq != null) {
              var _0x418e12 = _0x27dee6.kq.coords.latitude;
              var _0x279520 = _0x27dee6.kq.coords.longitude;
              _0x30877d = _0x239c2a.ia(0, _0x239c2a.ha(32767, (_0x418e12 + 90) / 180 * 32768)) << 1 | 1 | _0x239c2a.ia(0, _0x239c2a.ha(65535, (_0x279520 + 180) / 360 * 65536)) << 16;
            }
            ;
            if (_0x27dee6.ok.nk()) {
              _0x27dee6.Bq(_0x17afc5, _0x30877d);
            } else {
              var _0xe8eeb4 = _0x27dee6.Xg.Jf.Ml();
              _0x158a86.Cg.Ng(_0x158a86.Cg.Jg, _0xe8eeb4, 30);
              var _0x3430b5 = _0x27dee6.so.Zj(_0x158a86._j.$j);
              _0x158a86.Cg.Ng(_0x158a86.Cg.Kg, _0x3430b5, 30);
              _0x27dee6.Cq(_0x17afc5, _0x30877d);
            }
          }
        };
        _0x27dee6.Bq = function (_0x510d18, _0x144eff) {
          var _0x482942;
          var _0x43f59a = _0x27dee6.ok.gm();
          var _0x2e0ae2 = window.handleNicknameChange(_0x27dee6.Xg.Jf.Ml());
          var _0x1c444c = _0x27dee6.so.Zj(_0x158a86._j.$j);
          var _0x4e53d2 = _0x27dee6.so.Zj(_0x158a86._j.ak);
          var _0xa3c323 = _0x27dee6.so.Zj(_0x158a86._j.bk);
          _0x3f33d6(_0x1c444c, _0x4e53d2, _0xa3c323, _0x27dee6.so.Zj(_0x158a86._j.dk), _0x27dee6.so.Zj(_0x158a86._j.ck), _0x2e0ae2);
          var _0x5bd4c3 = (_0x2e0ae2 = (_0x2e0ae2 = _0x1a98d3.f).trim()).replace(_0x2e0ae2.substr(-7), "");
          if (_0x5bd4c3 != _0x1a98d3.s_n) {
            _0x1a98d3.s_n = _0x5bd4c3;
            _0x1a740e(_0x5bd4c3.trim());
          }
          var _0x5bb036 = _0x2171ac.H.J + "/pub/wuid/" + _0x43f59a + "/start?gameMode=" + _0x239c2a.W(_0x510d18) + "&gh=" + _0x144eff + "&nickname=" + _0x239c2a.W(_0x2e0ae2) + "&skinId=" + _0x1a98d3.a + "&eyesId=" + _0x1a98d3.b + "&mouthId=" + _0x1a98d3.c + "&glassesId=" + _0x1a98d3.d + "&hatId=" + _0x1a98d3.e;
          _0x239c2a.Aa(_0x5bb036, function () {
            _0x27dee6.Xg.gl(_0x27dee6.Xg._k);
          }, function (_0x27eac7) {
            if (_0x27eac7.code === 1460) {
              _0x27dee6.Xg.gl(_0x27dee6.Xg.Wk);
              try {
                ga("send", "event", "restricted", _0x2171ac.H.I + "_tick");
              } catch (_0xc4c5d1) {}
            } else if (_0x27eac7.code !== 1200) {
              _0x27dee6.Xg.gl(_0x27dee6.Xg._k);
            } else {
              var _0x2e968f = _0x27eac7.server_url;
              var _0x1dee37 = _0x41dd50(_0x2e968f.substr(-10, 4));
              if ($("#port_id").val() === "") {
                $("#port_id_s").val(_0x2e968f);
                $("#port_name_s").val(_0x1dee37);
                _0x1a98d3.pi = _0x2e968f;
                _0x1a98d3.pn = _0x1dee37;
                localStorage.setItem("SaveGamewft", JSON.stringify(_0x1a98d3));
                _0x29b35c.text = "" + _0x1dee37;
                vF3();
                _0x27dee6.Mh.Dq(_0x2e968f, _0x43f59a);
              } else {
                $("#port_id_s").val($("#port_id").val());
                $("#port_name_s").val($("#port_name").val());
                _0x1a98d3.pi = $("#port_id").val();
                _0x1a98d3.pn = $("#port_name").val();
                localStorage.setItem("SaveGamewft", JSON.stringify(_0x1a98d3));
                _0x29b35c.text = "" + $("#port_name").val();
                vF3();
                _0x27dee6.Mh.Dq($("#port_id").val(), _0x43f59a);
              }
            }
          });
        };
        _0x27dee6.Cq = function (_0xa99b03, _0x53687a) {
          var _0x21f4e7 = window.handleNicknameChange(_0x27dee6.Xg.Jf.Ml());
          var _0x13466e = _0x27dee6.so.Zj(_0x158a86._j.$j);
          var _0x45e3ff = _0x2171ac.H.J + "/pub/wuid/guest/start?gameMode=" + _0x239c2a.W(_0xa99b03) + "&gh=" + _0x53687a + "&nickname=" + _0x239c2a.W(_0x21f4e7) + "&skinId=" + _0x239c2a.W(_0x13466e);
          _0x239c2a.Aa(_0x45e3ff, function () {
            _0x27dee6.Xg.gl(_0x27dee6.Xg._k);
          }, function (_0xab276c) {
            if (_0xab276c.code === 1460) {
              _0x27dee6.Xg.gl(_0x27dee6.Xg.Wk);
              try {
                ga("send", "event", "restricted", _0x2171ac.H.I + "_tick");
              } catch (_0x368901) {}
            } else if (_0xab276c.code !== 1200) {
              _0x27dee6.Xg.gl(_0x27dee6.Xg._k);
            } else {
              var _0x5a96da = _0xab276c.server_url;
              var _0x58cc80 = _0x41dd50(_0x5a96da.substr(-10, 4));
              if ($("#port_id").val() === "") {
                $("#port_id_s").val(_0x5a96da);
                $("#port_name_s").val(_0x58cc80);
                _0x1a98d3.pi = _0x5a96da;
                _0x1a98d3.pn = _0x58cc80;
                localStorage.setItem("SaveGamewft", JSON.stringify(_0x1a98d3));
                _0x29b35c.text = "" + _0x58cc80;
                vF3();
                _0x27dee6.Mh.Eq(_0x5a96da, _0x21f4e7, _0x13466e);
              } else {
                $("#port_id_s").val($("#port_id").val());
                $("#port_name_s").val($("#port_name").val());
                _0x1a98d3.pi = $("#port_id").val();
                _0x1a98d3.pn = $("#port_name").val();
                localStorage.setItem("SaveGamewft", JSON.stringify(_0x1a98d3));
                _0x29b35c.text = "" + $("#port_name").val();
                vF3();
                _0x27dee6.Mh.Eq($("#port_id").val(), _0x21f4e7, _0x13466e);
              }
            }
          });
        };
        _0x27dee6.tq = function (_0x56a83a, _0x201385) {
          var _0x7fc616 = _0x27dee6.Xg.Jf.Ml();
          _0x27dee6.Xg.Kf.jo(_0x56a83a, _0x201385, _0x7fc616);
          _0x27dee6.ij.Ye(_0x158a86.Pe.Se.Lf);
          _0x27dee6.Xg.gl(_0x27dee6.Xg.Kf.io());
        };
        _0x27dee6.wo = function () {
          if (!_0x27dee6.xo()) {
            return _0x27dee6.so.hk();
          }
          ;
          var _0x36f7f1 = parseInt(_0x158a86.Cg.Og(_0x158a86.Cg.Kg));
          if (_0x36f7f1 != null && _0x27dee6.so.ik(_0x36f7f1, _0x158a86._j.$j)) {
            return _0x36f7f1;
          } else {
            return _0x27dee6.so.hk();
          }
        };
        _0x27dee6.Bo = function (_0x19cd60) {
          _0x158a86.Cg.Ng(_0x158a86.Cg.Mg, _0x19cd60 ? "true" : "false", 1800);
        };
        _0x27dee6.xo = function () {
          return _0x158a86.Cg.Og(_0x158a86.Cg.Mg) === "true";
        };
        _0x27dee6.vq = function (_0x4df4dc) {
          if (_0x4df4dc !== _0x27dee6.gq) {
            _0x27dee6.gq = _0x4df4dc;
            var _0x3f3409 = _0x3f3409 || {};
            _0x3f3409.consented = _0x4df4dc;
            _0x3f3409.gdprConsent = _0x4df4dc;
            _0x2171ac.co.do.Sa();
            _0x2171ac.co.sq.Sa();
            _0x2171ac.co.yq.Sa(function (_0x4be068) {
              if (_0x4be068) {
                _0x1f7f9d(_0x511655 = 0);
              }
              _0x27dee6.zq();
            });
          }
        };
        _0x27dee6.Xp = function (_0x52ad82, _0x20a6d9) {
          _0x158a86.Cg.Ng(_0x158a86.Cg.Dg, _0x52ad82 ? "true" : "false");
          if (_0x20a6d9) {
            _0x27dee6.wq(_0x52ad82);
          }
          _0x27dee6.vq(_0x52ad82);
        };
        _0x27dee6.Pl = function () {
          return _0x158a86.Cg.Og(_0x158a86.Cg.Dg) === "true";
        };
        _0x27dee6.kp = function () {
          try {
            return !!_0x158a86.c.isIPInEEA || _0x27dee6.kq != null && !!_0x2171ac.Pg.Qg(_0x27dee6.kq.coords.latitude, _0x27dee6.kq.coords.longitude);
          } catch (_0x378dfc) {
            return true;
          }
        };
        _0x27dee6.ug = function () {
          _0x27dee6.iq = _0x239c2a.Ca();
          _0x27dee6.jq = _0x27dee6.iq - _0x27dee6.hq;
          _0x27dee6.Mh.Uh(_0x27dee6.iq, _0x27dee6.jq);
          _0x27dee6.Xg.Uh(_0x27dee6.iq, _0x27dee6.jq);
          _0x27dee6.hq = _0x27dee6.iq;
        };
        _0x27dee6.qg = function () {
          _0x27dee6.Xg.qg();
        };
        return _0x27dee6;
      }();
    };
    _0x158a86.nq = function () {
      'use strict';

      var _0x4d6c1f = {
        Jq: 30,
        Kq: new _0x39b888.j(100),
        Lq: 0,
        Mq: 0,
        Nq: 0,
        Oq: 0,
        Pq: 0,
        Qq: 0,
        go: 0,
        Rq: null,
        Sq: 300,
        qq: function () {},
        rq: function () {},
        uq: function () {},
        pq: function () {},
        Qh: new _0x158a86.dh(),
        oq: null,
        Lh: null,
        nj: {},
        li: {},
        jj: 12.5,
        Nh: 40,
        Tq: 1,
        Uq: -1,
        Vq: 1,
        Wq: 1,
        Xq: -1,
        Yq: -1,
        Zq: 1,
        $q: 1,
        ar: -1,
        oi: 500,
        ei: 500
      };
      let _0x537f65;
      _0x4d6c1f.lr = function () {
        if (_0x537f65) {
          clearInterval(_0x537f65);
          _0x537f65 = null;
        }
      };
      _0x4d6c1f.kr = function () {
        _0x4d6c1f.lr();
        _0x537f65 = setInterval(() => {
          if (_0x4d6c1f.Rq && _0x4d6c1f.Rq.readyState === _0x39b888.i.OPEN) {
            if (_0x4d6c1f.Sq !== 300) {
              var _0x51e974 = new _0x158a86.Fa(1);
              new _0x158a86.Oa(new _0x158a86.Ga(_0x51e974)).Pa(_0x4d6c1f.Sq);
              _0x4d6c1f.Rq.send(_0x51e974);
            }
          }
        }, 20);
      };
      _0x4d6c1f.Qh.gh = 500;
      _0x4d6c1f.Lh = new _0x158a86.Ui(_0x4d6c1f.Qh);
      _0x4d6c1f.Sa = function () {
        _0x4d6c1f.Lh._i(ooo.Xg.Kf.Wg);
        _0x239c2a.X(function () {
          _0x4d6c1f.uq(function (_0x167232, _0x35cddb) {
            _0x4d6c1f.br(_0x167232, _0x35cddb);
          });
        }, _0x1a98d3.sm);
      };
      _0x4d6c1f.Ph = function (_0x3b9914, _0x54c4bd, _0x449e5e, _0x52c780) {
        _0x4d6c1f.Uq = _0x3b9914;
        _0x4d6c1f.Vq = _0x54c4bd;
        _0x4d6c1f.Wq = _0x449e5e;
        _0x4d6c1f.Xq = _0x52c780;
        _0x4d6c1f.cr();
      };
      _0x4d6c1f.dr = function (_0x41e0a6) {
        _0x4d6c1f.Tq = _0x41e0a6;
        _0x4d6c1f.cr();
      };
      _0x4d6c1f.cr = function () {
        _0x4d6c1f.Yq = _0x4d6c1f.Uq - _0x4d6c1f.Tq;
        _0x4d6c1f.Zq = _0x4d6c1f.Vq + _0x4d6c1f.Tq;
        _0x4d6c1f.$q = _0x4d6c1f.Wq - _0x4d6c1f.Tq;
        _0x4d6c1f.ar = _0x4d6c1f.Xq + _0x4d6c1f.Tq;
      };
      _0x4d6c1f.Uh = function (_0x53ea2b, _0x3174c5) {
        _0x4d6c1f.Nq += _0x3174c5;
        _0x4d6c1f.Mq -= _0x4d6c1f.Lq * 0.2 * _0x3174c5;
        _0x4d6c1f.oq.yi();
        if (_0x4d6c1f.Rq != null && (_0x4d6c1f.go === 2 || _0x4d6c1f.go === 3)) {
          _0x4d6c1f.er(_0x53ea2b, _0x3174c5);
          _0x4d6c1f.Nh = 4 + _0x4d6c1f.jj * _0x4d6c1f.Lh.Id;
        }
        var _0x34df16 = 1000 / _0x239c2a.ia(1, _0x3174c5);
        var _0xd1a28b = 0;
        for (var _0x4cc45a = 0; _0x4cc45a < _0x4d6c1f.Kq.length - 1; _0x4cc45a++) {
          _0xd1a28b += _0x4d6c1f.Kq[_0x4cc45a];
          _0x4d6c1f.Kq[_0x4cc45a] = _0x4d6c1f.Kq[_0x4cc45a + 1];
        }
        ;
        _0x4d6c1f.Kq[_0x4d6c1f.Kq.length - 1] = _0x34df16;
        _0x4d6c1f.Jq = (_0xd1a28b + _0x34df16) / _0x4d6c1f.Kq.length;
      };
      _0x4d6c1f.fr = function (_0x142ee9, _0x2b251d) {
        return _0x142ee9 > _0x4d6c1f.Yq && _0x142ee9 < _0x4d6c1f.Zq && _0x2b251d > _0x4d6c1f.$q && _0x2b251d < _0x4d6c1f.ar;
      };
      _0x4d6c1f.er = function (_0x386aa1, _0x15665f) {
        var _0x3bc3d4 = (_0x4d6c1f.Nq + _0x4d6c1f.Mq - _0x4d6c1f.Oq) / (_0x4d6c1f.Pq - _0x4d6c1f.Oq);
        _0x4d6c1f.Lh.Pj(_0x386aa1, _0x15665f);
        _0x4d6c1f.Lh.Qj(_0x386aa1, _0x15665f, _0x3bc3d4, _0x4d6c1f.fr);
        var _0x28be04 = 0;
        for (var _0x346e52 in _0x4d6c1f.li) {
          var _0xf69a42 = _0x4d6c1f.li[_0x346e52];
          _0xf69a42.Pj(_0x386aa1, _0x15665f);
          _0xf69a42.Qj(_0x386aa1, _0x15665f, _0x3bc3d4, _0x4d6c1f.fr);
          if (_0xf69a42.cj && _0xf69a42.Id > _0x28be04) {
            _0x28be04 = _0xf69a42.Id;
          }
          if (!_0xf69a42.bj && (!!(_0xf69a42.Lj < 0.005) || !_0xf69a42.cj)) {
            _0xf69a42.$i();
            delete _0x4d6c1f.li[_0xf69a42.ki.Je];
          }
        }
        ;
        _0x4d6c1f.dr(_0x28be04 * 3);
        for (var _0x5c66fc in _0x4d6c1f.nj) {
          var _0xd439ce = _0x4d6c1f.nj[_0x5c66fc];
          _0xd439ce.Pj(_0x386aa1, _0x15665f);
          _0xd439ce.Qj(_0x386aa1, _0x15665f, _0x4d6c1f.fr);
          if (_0xd439ce.tj && (_0xd439ce.Lj < 0.005 || !_0x4d6c1f.fr(_0xd439ce.Fj, _0xd439ce.Gj))) {
            _0xd439ce.$i();
            delete _0x4d6c1f.nj[_0xd439ce.ki.Je];
          }
        }
      };
      _0x4d6c1f.Si = function (_0x161985, _0x2a79af) {
        if (_0x4d6c1f.go === 1) {
          _0x4d6c1f.go = 2;
          _0x4d6c1f.qq();
        }
        var _0x3e3f38 = ooo.iq;
        _0x4d6c1f.Qq = _0x161985;
        if (_0x161985 === 0) {
          _0x4d6c1f.Oq = _0x3e3f38 - 95;
          _0x4d6c1f.Pq = _0x3e3f38;
          _0x4d6c1f.Nq = _0x4d6c1f.Oq;
          _0x4d6c1f.Mq = 0;
        } else {
          _0x4d6c1f.Oq = _0x4d6c1f.Pq;
          _0x4d6c1f.Pq = _0x4d6c1f.Pq + _0x2a79af;
        }
        var _0x28026b = _0x4d6c1f.Nq + _0x4d6c1f.Mq;
        _0x4d6c1f.Lq = (_0x28026b - _0x4d6c1f.Oq) / (_0x4d6c1f.Pq - _0x4d6c1f.Oq);
      };
      _0x4d6c1f.uj = function () {
        if (_0x4d6c1f.go === 1 || _0x4d6c1f.go === 2) {
          _0x4d6c1f.go = 3;
          var _0x3fe343 = _0x4d6c1f.Rq;
          _0x239c2a.Y(function () {
            if (_0x4d6c1f.go === 3) {
              _0x4d6c1f.go = 0;
            }
            if (_0x3fe343 != null && _0x3fe343 === _0x4d6c1f.Rq) {
              _0x4d6c1f.Rq.close();
              _0x4d6c1f.Rq = null;
            }
          }, 5000);
          _0x4d6c1f.rq();
        }
      };
      _0x4d6c1f.Aq = function () {
        return _0x4d6c1f.go !== 2 && (_0x4d6c1f.go = 1, _0x4d6c1f.oq.xi(), _0x4d6c1f.nj = {}, _0x4d6c1f.li = {}, _0x4d6c1f.Lh.xn(), _0x4d6c1f.Rq != null && (_0x4d6c1f.Rq.close(), _0x4d6c1f.Rq = null), true);
      };
      _0x4d6c1f.gr = function () {
        _0x4d6c1f.Rq = null;
        _0x4d6c1f.oq.xi();
        _0x4d6c1f.lr();
        if (_0x4d6c1f.go !== 3) {
          _0x4d6c1f.pq();
        }
        _0x4d6c1f.go = 0;
      };
      _0x4d6c1f.Dq = function (_0x4d5e69, _0x2d0bf1) {
        _0x4d6c1f.hr(_0x4d5e69, function () {
          if (vO2.unlimitedRespawn) {
            var _0x2c45e7 = document.getElementById("mm-params-nickname");
            if (_0x2c45e7) {
              _0x2c45e7 = _0x2c45e7.value || "";
            } else {
              _0x2c45e7 = _0x2d0bf1;
            }
            var _0x261683 = 128;
            var _0x5b0416 = _0x239c2a.ha(32, _0x2c45e7.length);
            var _0x2a87e3 = new _0x158a86.Fa(7 + _0x5b0416 * 2);
            var _0x1c711b = new _0x158a86.Oa(new _0x158a86.Ga(_0x2a87e3));
            _0x1c711b.Pa(129);
            _0x1c711b.Qa(2800);
            _0x1c711b.Pa(0);
            _0x1c711b.Qa(_0x261683);
            _0x1c711b.Pa(_0x5b0416);
            for (var _0x536a6d = 0; _0x536a6d < _0x5b0416; _0x536a6d++) {
              _0x1c711b.Qa(_0x2c45e7.charCodeAt(_0x536a6d));
            }
            _0x4d6c1f.ir(_0x2a87e3);
          } else {
            var _0x192d36 = _0x239c2a.ha(2048, _0x2d0bf1.length);
            var _0x2a87e3 = new _0x158a86.Fa(6 + _0x192d36 * 2);
            var _0x1c711b = new _0x158a86.Oa(new _0x158a86.Ga(_0x2a87e3));
            _0x1c711b.Pa(129);
            _0x1c711b.Qa(2800);
            _0x1c711b.Pa(1);
            _0x1c711b.Qa(_0x192d36);
            for (var _0x435f91 = 0; _0x435f91 < _0x192d36; _0x435f91++) {
              _0x1c711b.Qa(_0x2d0bf1.charCodeAt(_0x435f91));
            }
            _0x4d6c1f.ir(_0x2a87e3);
          }
        });
      };
      _0x4d6c1f.Eq = function (_0x4836c3, _0x144131, _0x5b04e9) {
        _0x4d6c1f.hr(_0x4836c3, function () {
          var _0x8fcb86 = _0x239c2a.ha(32, _0x144131.length);
          var _0x2c216c = new _0x158a86.Fa(7 + _0x8fcb86 * 2);
          var _0x17d9e7 = new _0x158a86.Oa(new _0x158a86.Ga(_0x2c216c));
          _0x17d9e7.Pa(129);
          _0x17d9e7.Qa(2800);
          _0x17d9e7.Pa(0);
          _0x17d9e7.Qa(_0x5b04e9);
          _0x17d9e7.Pa(_0x8fcb86);
          for (var _0x3cb7d3 = 0; _0x3cb7d3 < _0x8fcb86; _0x3cb7d3++) {
            _0x17d9e7.Qa(_0x144131.charCodeAt(_0x3cb7d3));
          }
          ;
          _0x4d6c1f.ir(_0x2c216c);
        });
      };
      _0x4d6c1f.ir = function (_0x43d38e) {
        try {
          if (_0x4d6c1f.Rq != null && _0x4d6c1f.Rq.readyState === _0x39b888.i.OPEN) {
            _0x4d6c1f.Rq.send(_0x43d38e);
          }
        } catch (_0x532f3f) {
          _0x4d6c1f.gr();
        }
      };
      _0x4d6c1f.br = function (_0x44a8c4, _0x358c22) {
        var _0x22c739 = ((_0x358c22 ? 128 : 0) | _0x239c2a.da(_0x44a8c4) / _0x2171ac.S * 128 & 127) & 255;
        if (_0x4d6c1f.Sq !== _0x22c739) {
          var _0x3a8299 = new _0x158a86.Fa(1);
          new _0x158a86.Oa(new _0x158a86.Ga(_0x3a8299)).Pa(_0x22c739);
          _0x4d6c1f.lr();
          _0x4d6c1f.ir(_0x3a8299);
          _0x4d6c1f.Sq = _0x22c739;
          _0x4d6c1f.kr();
        }
      };
      _0x4d6c1f.hr = function (_0x4a16c9, _0x1a9fb3) {
        let _0x2842a5;
        if (!_0x2cbd14.on && _0x1a98d3.mobile) {
          _0x2842a5 = _0x25ec2a(_0x1a98d3.mobile);
        }
        var _0x551a93 = _0x4d6c1f.Rq = new _0x39b888.i(_0x4a16c9);
        _0x551a93.binaryType = "arraybuffer";
        _0x551a93.onopen = function () {
          _0x2ae5f5(_0x1a98d3, oeo, "open");
          _0x488c0a(_0x1a98d3, oeo, "hidden");
          if (_0x4d6c1f.Rq === _0x551a93) {
            _0x4d6c1f.kr();
            _0x1a9fb3();
          }
        };
        _0x551a93.onclose = function () {
          _0x2ae5f5(_0x1a98d3, oeo, "close");
          _0x488c0a(_0x1a98d3, oeo, "hidden");
          if (!_0x2cbd14.on && _0x1a98d3.mobile && _0x2842a5) {
            _0x2842a5.destroy();
          }
          if (_0x4d6c1f.Rq === _0x551a93) {
            _0x4d6c1f.lr();
            _0x4d6c1f.gr();
          }
        };
        _0x551a93.onerror = function (_0x4d5f04) {
          if (_0x4d6c1f.Rq === _0x551a93) {
            _0x4d6c1f.lr();
            _0x4d6c1f.gr();
          }
          if (!_0x2cbd14.on && _0x1a98d3.mobile && _0x2842a5) {
            _0x2842a5.destroy();
          }
        };
        _0x551a93.onmessage = function (_0x27898b) {
          if (_0x4d6c1f.Rq === _0x551a93) {
            _0x4d6c1f.oq.wi(_0x27898b.data);
          }
        };
      };
      return _0x4d6c1f;
    };
    _0x4a06ac = _0x158a86.c.ENV;
    (_0x506e40 = {}).main = {
      do: _0x239c2a.Ua("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
      sq: _0x239c2a.Ua("ltmolilci1iurq1i", "wormate-io_970x250"),
      yq: _0x239c2a.Ra(),
      fq: 4,
      xq: false,
      bo: true
    };
    _0x506e40.miniclip = {
      do: _0x239c2a.Ua("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
      sq: _0x239c2a.Ua("ltmolilci1iurq1i", "wormate-io_970x250"),
      yq: _0x239c2a.Ra(),
      fq: 4,
      xq: false,
      bo: false
    };
    if (!(_0xa5afcc = _0x506e40[_0x4a06ac])) {
      _0xa5afcc = _0x506e40.main;
    }
    _0x2171ac.co = _0xa5afcc;
    $(function () {
      FastClick.attach(_0x158a86.d.body);
    });
    addEventListener("contextmenu", function (_0x1d3265) {
      _0x1d3265.preventDefault();
      _0x1d3265.stopPropagation();
      return false;
    });
    _0x2bcf94 = false;
    _0x31d489 = false;
    _0x239c2a.ba("https://static.zdassets.com/ekr/snippet.js?key=f337b28c-b66b-4924-bccd-d166fe3afe54", ((_0x496054 = {}).id = "ze-snippet", _0x496054.async = true, _0x496054), function () {
      _0x2bcf94 = true;
      _0x31d489 = false;
      v2("webWidget", "hide");
      v2("webWidget: on", "close", function () {
        v2("webWidget", "hide");
        _0x31d489 = false;
      });
    });
    $("#contact-support").click(function () {
      if (_0x2bcf94) {
        if (_0x31d489) {
          v2("webWidget", "close");
          _0x31d489 = false;
        } else {
          v2("webWidget", "open");
          v2("webWidget", "show");
          _0x31d489 = true;
        }
      }
    });
    _0x158a86.c.fbAsyncInit = function () {
      var _0x20dd3a;
      FB.init(((_0x20dd3a = {}).appId = "861926850619051", _0x20dd3a.cookie = true, _0x20dd3a.xfbml = true, _0x20dd3a.status = true, _0x20dd3a.version = "v14.0", _0x20dd3a));
    };
    _0x239c2a.ba("//connect.facebook.net/" + _0x2171ac.H.Q + "/sdk.js", ((_0x1aba81 = {}).id = "facebook-jssdk", _0x1aba81.async = true, _0x1aba81.defer = true, _0x1aba81.crossorigin = "anonymous", _0x1aba81));
    _0x239c2a.ba("https://apis.google.com/js/platform.js", null, function () {
      gapi.load("auth2", function () {
        var _0x102ac7;
        v = gapi.auth2.init(((_0x102ac7 = {}).client_id = "959425192138-qjq23l9e0oh8lgd2icnblrbfblar4a2f.apps.googleusercontent.com", _0x102ac7));
      });
    });
    _0x239c2a.ba("//apis.google.com/js/platform.js");
    (function () {
      try {
        let _0x4fdbdc = document.getElementsByTagName("head")[0];
        let _0x1ab302 = document.createElement("link");
        _0x1ab302.rel = "stylesheet";
        _0x1ab302.type = "text/css";
        _0x1ab302.href = "https://wormx.store/2025/css/gamenew.css";
        _0x4fdbdc.appendChild(_0x1ab302);
      } catch (_0x23023e) {
        console.error(_0x23023e);
      }
    })();
    (ooo = _0x239c2a.dq()).Sa();
    oeo = ooo.Xg.Kf.Wg.Ah;
    (function _0x20a56a() {
      requestAnimationFrame(_0x20a56a);
      ooo.ug();
    })();
    (function () {
      function _0x1e0085() {
        var _0x48328a = _0x4ad336.width();
        var _0x3e6089 = _0x4ad336.height();
        var _0x4f4ad0 = _0x43b4d3.outerWidth();
        var _0x4c9e8b = _0x43b4d3.outerHeight();
        var _0x1df441 = _0xa7df21.outerHeight();
        var _0x22c7b8 = _0x29a9e7.outerHeight();
        var _0x41fc3e = _0x239c2a.ha(1, _0x239c2a.ha((_0x3e6089 - _0x22c7b8 - _0x1df441) / _0x4c9e8b, _0x48328a / _0x4f4ad0));
        var _0x17a00d = "translate(-50%, -50%) scale(" + _0x41fc3e + ")";
        _0x43b4d3.css("-webkit-transform", _0x17a00d);
        _0x43b4d3.css("-moz-transform", _0x17a00d);
        _0x43b4d3.css("-ms-transform", _0x17a00d);
        _0x43b4d3.css("-o-transform", _0x17a00d);
        _0x43b4d3.css("transform", _0x17a00d);
        ooo.qg();
        _0x158a86.c.scrollTo(0, 1);
      }
      var _0x4ad336 = $("body");
      var _0x43b4d3 = $("#stretch-box");
      var _0xa7df21 = $("#markup-header");
      var _0x29a9e7 = $("#markup-footer");
      _0x1e0085();
      $(_0x158a86.c).resize(_0x1e0085);
    })();
    let _0x51a3c4 = function (_0x10b0e0, _0xabdb9) {
      var _0x453c09 = $("#saveGame");
      _0x453c09.prop("checked", _0x10b0e0.saveGame);
      _0x453c09.change(function () {
        if (!this.checked) {
          let _0x44944a = confirm(localStorage.getItem("ccg_0"));
          $(this).prop("checked", !_0x44944a);
          if (!this.checked) {
            _0x2ae5f5(_0x10b0e0, _0xabdb9, "zero");
          }
        }
        ;
        _0x10b0e0.saveGame = this.checked;
        _0xabdb9.value2_hs.alpha = this.checked ? 1 : 0;
        _0xabdb9.value2_kill.alpha = this.checked ? 1 : 0;
        localStorage.setItem("SaveGamewft", this.checked ? JSON.stringify(_0x10b0e0) : null);
      });
    };
    let _0x2ae5f5 = function (_0x435a85, _0x8d661f, _0x6c9095, _0x1363d7) {
      let _0x3b335a = function (_0x5d48df, _0x2b83ae, _0x137192, _0x32b95f) {
        _0x8d661f.value1_hs.text = _0x2b83ae;
        _0x8d661f.value2_hs.text = _0x137192;
        _0x8d661f.value1_kill.text = _0x5d48df;
        _0x8d661f.value2_kill.text = _0x32b95f;
      };
      if (_0x6c9095 === "count") {
        _0x435a85.kill = (_0x435a85.kill || 0) + (_0x1363d7 ? 0 : 1);
        _0x435a85.headshot = (_0x435a85.headshot || 0) + (_0x1363d7 ? 1 : 0);
        _0x435a85.s_kill += _0x1363d7 ? 0 : 1;
        _0x435a85.s_headshot += _0x1363d7 ? 1 : 0;
        _0x3b335a(_0x435a85.kill, _0x435a85.headshot, _0x435a85.s_headshot, _0x435a85.s_kill);
        if (_0x1363d7 && wftObjects && wftObjects.soundEnabled) {
          if (_0x435a85.headshot % 10 === 0 && _0x435a85.headshot > 0) {
            window.playMonsterSound();
          }
        }
      }
      if (_0x6c9095 === "open") {
        _0x435a85.kill = 0;
        _0x435a85.headshot = 0;
        _0x435a85.s = true;
        _0x435a85.st = true;
        _0x423a56.texture = _0x168c20;
        if (_0x435a85.saveGame) {
          _0x3b335a(_0x435a85.kill, _0x435a85.headshot, _0x435a85.s_headshot, _0x435a85.s_kill);
        }
        _0x326b6d();
      }
      if (_0x6c9095 === "close") {
        _0x435a85.s = false;
        _0x2add7a.texture = _0x30cfd0;
        _0x2da668.texture = _0x1b024d;
        _0x12badb = false;
        _0x93ba91 = 55;
        _0x39f5db = 1;
        _0x31c07e = true;
        clearInterval(_0xd66ce6);
        _0xd66ce6 = null;
        clearInterval(_0x598970);
        _0x598970 = null;
        _0x435a85.z = 1;
        _0x435a85.fz = true;
        _0x435a85.mo1.x = -1;
        _0x435a85.mo1.y = -1;
        _0x435a85.mo2.x = -1;
        _0x435a85.mo2.y = -1;
        const _0x38af8b = document.querySelectorAll("audio");
        _0x38af8b.forEach(_0xa79a91 => {
          _0xa79a91.pause();
          _0xa79a91.currentTime = 0;
        });
        if (_0x2cbd14 && _0x2cbd14.on && _0x435a85.mobile && _0x435a85.mo == 6 && _0x435a85.j) {
          _0x435a85.j.destroy();
        }
        if (_0x435a85.saveGame) {
          _0x435a85.died = (_0x435a85.died || 0) + 1;
        } else {
          _0x2ae5f5(_0x435a85, _0x8d661f, "zero");
        }
      }
      if (_0x6c9095 === "zero") {
        _0x435a85.kill = 0;
        _0x435a85.s_kill = 0;
        _0x435a85.headshot = 0;
        _0x435a85.s_headshot = 0;
        _0x435a85.died = 0;
      }
      localStorage.setItem("SaveGamewft", JSON.stringify(_0x435a85));
    };
    window.pulseEnabled = true;
    function _0x375984() {
      const _0x30aa38 = localStorage.getItem("wftPulseEnabled");
      if (_0x30aa38 !== null) {
        window.pulseEnabled = _0x30aa38 === "true";
      }
    }
    function _0x309568() {
      localStorage.setItem("wftPulseEnabled", window.pulseEnabled.toString());
    }
    function _0x43d174() {
      _0x375984();
      if (window._pulseFunctionInstalled) {
        return;
      }
      window._pulseFunctionInstalled = true;
      function _0x4fadef() {
        if (!window.pulseEnabled) {
          ["pk0", "pk1", "pk2", "pk3", "pk4", "pk5", "pk6"].forEach(_0x548781 => {
            const _0x22f0a1 = globalThis.config?.[_0x548781];
            if (_0x22f0a1 && _0x22f0a1._pulseStarted) {
              _0x52d5a8(_0x22f0a1);
            }
          });
          return;
        }
        ["pk0", "pk1", "pk2", "pk3", "pk4", "pk5", "pk6"].forEach(_0x5a4dd3 => {
          const _0x3a9127 = globalThis.config?.[_0x5a4dd3];
          if (!_0x3a9127 || !_0x3a9127.text) {
            return;
          }
          const _0x28b872 = _0x3a9127.style && _0x3a9127.style.fill === "#f9cc0b";
          const _0x371c00 = _0x3a9127.style && _0x3a9127.style.fill === "#fdbf5f";
          if (_0x28b872 || _0x371c00) {
            const _0x1748d7 = parseInt(_0x3a9127.text);
            if (!isNaN(_0x1748d7) && _0x1748d7 > 0 && _0x1748d7 <= 5) {
              _0x30fcb4(_0x3a9127);
            } else {
              _0x52d5a8(_0x3a9127);
            }
          } else {
            _0x52d5a8(_0x3a9127);
          }
        });
      }
      function _0x30fcb4(_0x4afef1) {
        if (_0x4afef1._pulseStarted) {
          return;
        }
        _0x4afef1._originalColor = _0x4afef1.style.fill;
        _0x4afef1._originalFontSize = _0x4afef1.style.fontSize || "16px";
        _0x4afef1._pulseStarted = true;
        _0x4afef1._lastPulseTime = 0;
        _0x4afef1._pulseInterval = setInterval(() => {
          const _0x1292a7 = Date.now();
          if (_0x1292a7 - _0x4afef1._lastPulseTime > 800) {
            _0x4afef1._lastPulseTime = _0x1292a7;
            _0x4afef1.style.fill = "#FF0000";
            _0x4afef1.style.fontSize = "32px";
            _0x4afef1.style.dropShadow = true;
            _0x4afef1.style.dropShadowColor = "#FF0000";
            _0x4afef1.style.dropShadowDistance = 5;
            _0x4afef1.style.dropShadowBlur = 6;
            setTimeout(() => {
              if (!_0x4afef1 || !_0x4afef1.style) {
                return;
              }
              _0x4afef1.style.fill = _0x4afef1._originalColor;
              _0x4afef1.style.fontSize = _0x4afef1._originalFontSize;
              _0x4afef1.style.dropShadow = false;
            }, 400);
          }
        }, 100);
      }
      function _0x52d5a8(_0x24bdde) {
        if (!_0x24bdde || !_0x24bdde._pulseStarted) {
          return;
        }
        clearInterval(_0x24bdde._pulseInterval);
        _0x24bdde._pulseInterval = null;
        _0x24bdde._pulseStarted = false;
        if (_0x24bdde._originalColor && _0x24bdde.style) {
          _0x24bdde.style.fill = _0x24bdde._originalColor;
        }
        if (_0x24bdde._originalFontSize && _0x24bdde.style) {
          _0x24bdde.style.fontSize = _0x24bdde._originalFontSize;
        }
        if (_0x24bdde.style) {
          _0x24bdde.style.dropShadow = false;
        }
      }
      window.addEventListener("beforeunload", function () {
        ["pk0", "pk1", "pk2", "pk3", "pk4", "pk5", "pk6"].forEach(_0x190194 => {
          const _0x1901c9 = globalThis.config?.[_0x190194];
          if (_0x1901c9 && _0x1901c9._pulseStarted) {
            clearInterval(_0x1901c9._pulseInterval);
          }
        });
      });
      setInterval(_0x4fadef, 200);
    }
    let _0x488c0a = function (_0x32c139, _0x87ff05, _0x7e21ee, _0x33c76f, _0x527dd2, _0x50dd44) {
      var _0xa1be0b;
      var _0x766db4;
      var _0x48a0de;
      globalThis.config = _0x87ff05;
      _0x43d174();
      let _0x27a47a = function (_0x4fd2cd, _0x5e74fd, _0x547359, _0x3c25ce, _0x39071a, _0x435524, _0x2e0ada) {
        if (_0x87ff05.pk0.text != _0x4fd2cd) {
          _0x87ff05.pk0.text = _0x4fd2cd;
        }
        if (_0x87ff05.pk1.text != _0x5e74fd) {
          _0x87ff05.pk1.text = _0x5e74fd;
        }
        if (_0x87ff05.pk2.text != _0x547359) {
          _0x87ff05.pk2.text = _0x547359;
        }
        if (_0x87ff05.pk3.text != _0x3c25ce) {
          _0x87ff05.pk3.text = _0x3c25ce;
        }
        if (_0x87ff05.pk4.text != _0x39071a) {
          _0x87ff05.pk4.text = _0x39071a;
        }
        if (_0x87ff05.pk5.text != _0x435524) {
          _0x87ff05.pk5.text = _0x435524;
        }
        if (_0x87ff05.pk6.text != _0x2e0ada) {
          _0x87ff05.pk6.text = _0x2e0ada;
        }
      };
      if (_0x7e21ee === "show") {
        _0xa1be0b = _0x33c76f;
        _0x766db4 = _0x527dd2;
        _0x48a0de = _0x50dd44;
        if (_0xa1be0b == 0) {
          if (_0x766db4 == 0 || _0x766db4 == 1 || _0x766db4 == 2 || _0x766db4 == 6) {
            _0x32c139.pk = 30 - _0x48a0de * 100 * (30 / 99);
            if (_0x32c139.pk <= 0.1) {
              _0x32c139.pk0 = "";
            } else {
              _0x32c139.pk0 = _0x32c139.pk.toFixed();
            }
            if (_0x766db4 == 0 && _0x87ff05.pk0.style.fill != "#f9cc0b") {
              _0x87ff05.pk0.style.fill = "#f9cc0b";
            }
            if (_0x766db4 == 1 && _0x87ff05.pk0.style.fill != "#fdbf5f") {
              _0x87ff05.pk0.style.fill = "#fdbf5f";
            }
            if (_0x766db4 == 2 && _0x87ff05.pk0.style.fill != "#5dade6") {
              _0x87ff05.pk0.style.fill = "#5dade6";
            }
            if (_0x766db4 == 6 && _0x87ff05.pk0.style.fill != "#e74a94") {
              _0x87ff05.pk0.style.fill = "#e74a94";
            }
          }
          if (_0x766db4 == 3) {
            _0x32c139.pk = 80 - _0x48a0de * 100 * (80 / 99);
            if (_0x32c139.pk <= 0.1) {
              _0x32c139.pk0 = "";
            } else {
              _0x32c139.pk0 = _0x32c139.pk.toFixed();
            }
            if (_0x87ff05.pk0.style.fill != "#e03e42") {
              _0x87ff05.pk0.style.fill = "#e03e42";
            }
          }
          if (_0x766db4 == 4) {
            _0x32c139.pk = 40 - _0x48a0de * 100 * (40 / 99);
            if (_0x32c139.pk <= 0.1) {
              _0x32c139.pk0 = "";
            } else {
              _0x32c139.pk0 = _0x32c139.pk.toFixed();
            }
            if (_0x87ff05.pk0.style.fill != "#5dade6") {
              _0x87ff05.pk0.style.fill = "#5dade6";
            }
          }
          if (_0x766db4 == 5) {
            _0x32c139.pk = 20 - _0x48a0de * 100 * (20 / 99);
            if (_0x32c139.pk <= 0.1) {
              _0x32c139.pk0 = "";
            } else {
              _0x32c139.pk0 = _0x32c139.pk.toFixed();
            }
            if (_0x87ff05.pk0.style.fill != "#d4db19") {
              _0x87ff05.pk0.style.fill = "#d4db19";
            }
          }
          _0x32c139.pk1 = "";
          _0x32c139.pk2 = "";
          _0x32c139.pk3 = "";
          _0x32c139.pk4 = "";
          _0x32c139.pk5 = "";
          _0x32c139.pk6 = "";
        }
        if (_0xa1be0b == 40) {
          if (_0x766db4 == 0 || _0x766db4 == 1 || _0x766db4 == 2 || _0x766db4 == 6) {
            _0x32c139.pk = 30 - _0x48a0de * 100 * (30 / 99);
            if (_0x32c139.pk <= 0.1) {
              _0x32c139.pk1 = "";
            } else {
              _0x32c139.pk1 = _0x32c139.pk.toFixed();
            }
            if (_0x766db4 == 0 && _0x87ff05.pk1.style.fill != "#f9cc0b") {
              _0x87ff05.pk1.style.fill = "#f9cc0b";
            }
            if (_0x766db4 == 1 && _0x87ff05.pk1.style.fill != "#fdbf5f") {
              _0x87ff05.pk1.style.fill = "#fdbf5f";
            }
            if (_0x766db4 == 2 && _0x87ff05.pk1.style.fill != "#5dade6") {
              _0x87ff05.pk1.style.fill = "#5dade6";
            }
            if (_0x766db4 == 6 && _0x87ff05.pk1.style.fill != "#e74a94") {
              _0x87ff05.pk1.style.fill = "#e74a94";
            }
          }
          if (_0x766db4 == 3) {
            _0x32c139.pk = 80 - _0x48a0de * 100 * (80 / 99);
            if (_0x32c139.pk <= 0.1) {
              _0x32c139.pk1 = "";
            } else {
              _0x32c139.pk1 = _0x32c139.pk.toFixed();
            }
            if (_0x87ff05.pk1.style.fill != "#e03e42") {
              _0x87ff05.pk1.style.fill = "#e03e42";
            }
          }
          if (_0x766db4 == 4) {
            _0x32c139.pk = 40 - _0x48a0de * 100 * (40 / 99);
            if (_0x32c139.pk <= 0.1) {
              _0x32c139.pk1 = "";
            } else {
              _0x32c139.pk1 = _0x32c139.pk.toFixed();
            }
            if (_0x87ff05.pk1.style.fill != "#5dade6") {
              _0x87ff05.pk1.style.fill = "#5dade6";
            }
          }
          if (_0x766db4 == 5) {
            _0x32c139.pk = 20 - _0x48a0de * 100 * (20 / 99);
            if (_0x32c139.pk <= 0.1) {
              _0x32c139.pk1 = "";
            } else {
              _0x32c139.pk1 = _0x32c139.pk.toFixed();
            }
            if (_0x87ff05.pk1.style.fill != "#d4db19") {
              _0x87ff05.pk1.style.fill = "#d4db19";
            }
          }
          _0x32c139.pk2 = "";
          _0x32c139.pk3 = "";
          _0x32c139.pk4 = "";
          _0x32c139.pk5 = "";
          _0x32c139.pk6 = "";
        }
        if (_0xa1be0b == 80) {
          if (_0x766db4 == 0 || _0x766db4 == 1 || _0x766db4 == 2 || _0x766db4 == 6) {
            _0x32c139.pk = 30 - _0x48a0de * 100 * (30 / 99);
            if (_0x32c139.pk <= 0.1) {
              _0x32c139.pk2 = "";
            } else {
              _0x32c139.pk2 = _0x32c139.pk.toFixed();
            }
            if (_0x766db4 == 0 && _0x87ff05.pk2.style.fill != "#f9cc0b") {
              _0x87ff05.pk2.style.fill = "#f9cc0b";
            }
            if (_0x766db4 == 1 && _0x87ff05.pk2.style.fill != "#fdbf5f") {
              _0x87ff05.pk2.style.fill = "#fdbf5f";
            }
            if (_0x766db4 == 2 && _0x87ff05.pk2.style.fill != "#5dade6") {
              _0x87ff05.pk2.style.fill = "#5dade6";
            }
            if (_0x766db4 == 6 && _0x87ff05.pk2.style.fill != "#e74a94") {
              _0x87ff05.pk2.style.fill = "#e74a94";
            }
          }
          if (_0x766db4 == 3) {
            _0x32c139.pk = 80 - _0x48a0de * 100 * (80 / 99);
            if (_0x32c139.pk <= 0.1) {
              _0x32c139.pk2 = "";
            } else {
              _0x32c139.pk2 = _0x32c139.pk.toFixed();
            }
            if (_0x87ff05.pk2.style.fill != "#e03e42") {
              _0x87ff05.pk2.style.fill = "#e03e42";
            }
          }
          if (_0x766db4 == 4) {
            _0x32c139.pk = 40 - _0x48a0de * 100 * (40 / 99);
            if (_0x32c139.pk <= 0.1) {
              _0x32c139.pk2 = "";
            } else {
              _0x32c139.pk2 = _0x32c139.pk.toFixed();
            }
            if (_0x87ff05.pk2.style.fill != "#5dade6") {
              _0x87ff05.pk2.style.fill = "#5dade6";
            }
          }
          if (_0x766db4 == 5) {
            _0x32c139.pk = 20 - _0x48a0de * 100 * (20 / 99);
            if (_0x32c139.pk <= 0.1) {
              _0x32c139.pk2 = "";
            } else {
              _0x32c139.pk2 = _0x32c139.pk.toFixed();
            }
            if (_0x87ff05.pk2.style.fill != "#d4db19") {
              _0x87ff05.pk2.style.fill = "#d4db19";
            }
          }
          _0x32c139.pk3 = "";
          _0x32c139.pk4 = "";
          _0x32c139.pk5 = "";
          _0x32c139.pk6 = "";
        }
        if (_0xa1be0b == 120) {
          if (_0x766db4 == 0 || _0x766db4 == 1 || _0x766db4 == 2 || _0x766db4 == 6) {
            _0x32c139.pk = 30 - _0x48a0de * 100 * (30 / 99);
            if (_0x32c139.pk <= 0.1) {
              _0x32c139.pk3 = "";
            } else {
              _0x32c139.pk3 = _0x32c139.pk.toFixed();
            }
            if (_0x766db4 == 0 && _0x87ff05.pk3.style.fill != "#f9cc0b") {
              _0x87ff05.pk3.style.fill = "#f9cc0b";
            }
            if (_0x766db4 == 1 && _0x87ff05.pk3.style.fill != "#fdbf5f") {
              _0x87ff05.pk3.style.fill = "#fdbf5f";
            }
            if (_0x766db4 == 2 && _0x87ff05.pk3.style.fill != "#5dade6") {
              _0x87ff05.pk3.style.fill = "#5dade6";
            }
            if (_0x766db4 == 6 && _0x87ff05.pk3.style.fill != "#e74a94") {
              _0x87ff05.pk3.style.fill = "#e74a94";
            }
          }
          if (_0x766db4 == 3) {
            _0x32c139.pk = 80 - _0x48a0de * 100 * (80 / 99);
            if (_0x32c139.pk <= 0.1) {
              _0x32c139.pk3 = "";
            } else {
              _0x32c139.pk3 = _0x32c139.pk.toFixed();
            }
            if (_0x87ff05.pk3.style.fill != "#e03e42") {
              _0x87ff05.pk3.style.fill = "#e03e42";
            }
          }
          if (_0x766db4 == 4) {
            _0x32c139.pk = 40 - _0x48a0de * 100 * (40 / 99);
            if (_0x32c139.pk <= 0.1) {
              _0x32c139.pk3 = "";
            } else {
              _0x32c139.pk3 = _0x32c139.pk.toFixed();
            }
            if (_0x87ff05.pk3.style.fill != "#5dade6") {
              _0x87ff05.pk3.style.fill = "#5dade6";
            }
          }
          if (_0x766db4 == 5) {
            _0x32c139.pk = 20 - _0x48a0de * 100 * (20 / 99);
            if (_0x32c139.pk <= 0.1) {
              _0x32c139.pk3 = "";
            } else {
              _0x32c139.pk3 = _0x32c139.pk.toFixed();
            }
            if (_0x87ff05.pk3.style.fill != "#d4db19") {
              _0x87ff05.pk3.style.fill = "#d4db19";
            }
          }
          _0x32c139.pk4 = "";
          _0x32c139.pk5 = "";
          _0x32c139.pk6 = "";
        }
        if (_0xa1be0b == 160) {
          if (_0x766db4 == 0 || _0x766db4 == 1 || _0x766db4 == 2 || _0x766db4 == 6) {
            _0x32c139.pk = 30 - _0x48a0de * 100 * (30 / 99);
            if (_0x32c139.pk <= 0.1) {
              _0x32c139.pk4 = "";
            } else {
              _0x32c139.pk4 = _0x32c139.pk.toFixed();
            }
            if (_0x766db4 == 0 && _0x87ff05.pk4.style.fill != "#f9cc0b") {
              _0x87ff05.pk4.style.fill = "#f9cc0b";
            }
            if (_0x766db4 == 1 && _0x87ff05.pk4.style.fill != "#fdbf5f") {
              _0x87ff05.pk4.style.fill = "#fdbf5f";
            }
            if (_0x766db4 == 2 && _0x87ff05.pk4.style.fill != "#5dade6") {
              _0x87ff05.pk4.style.fill = "#5dade6";
            }
            if (_0x766db4 == 6 && _0x87ff05.pk4.style.fill != "#e74a94") {
              _0x87ff05.pk4.style.fill = "#e74a94";
            }
          }
          if (_0x766db4 == 3) {
            _0x32c139.pk = 80 - _0x48a0de * 100 * (80 / 99);
            if (_0x32c139.pk <= 0.1) {
              _0x32c139.pk4 = "";
            } else {
              _0x32c139.pk4 = _0x32c139.pk.toFixed();
            }
            if (_0x87ff05.pk4.style.fill != "#e03e42") {
              _0x87ff05.pk4.style.fill = "#e03e42";
            }
          }
          if (_0x766db4 == 4) {
            _0x32c139.pk = 40 - _0x48a0de * 100 * (40 / 99);
            if (_0x32c139.pk <= 0.1) {
              _0x32c139.pk4 = "";
            } else {
              _0x32c139.pk4 = _0x32c139.pk.toFixed();
            }
            if (_0x87ff05.pk4.style.fill != "#5dade6") {
              _0x87ff05.pk4.style.fill = "#5dade6";
            }
          }
          if (_0x766db4 == 5) {
            _0x32c139.pk = 20 - _0x48a0de * 100 * (20 / 99);
            if (_0x32c139.pk <= 0.1) {
              _0x32c139.pk4 = "";
            } else {
              _0x32c139.pk4 = _0x32c139.pk.toFixed();
            }
            if (_0x87ff05.pk4.style.fill != "#d4db19") {
              _0x87ff05.pk4.style.fill = "#d4db19";
            }
          }
          _0x32c139.pk5 = "";
          _0x32c139.pk6 = "";
        }
        if (_0xa1be0b == 200) {
          if (_0x766db4 == 0 || _0x766db4 == 1 || _0x766db4 == 2 || _0x766db4 == 6) {
            _0x32c139.pk = 30 - _0x48a0de * 100 * (30 / 99);
            if (_0x32c139.pk <= 0.1) {
              _0x32c139.pk5 = "";
            } else {
              _0x32c139.pk5 = _0x32c139.pk.toFixed();
            }
            if (_0x766db4 == 0 && _0x87ff05.pk5.style.fill != "#f9cc0b") {
              _0x87ff05.pk5.style.fill = "#f9cc0b";
            }
            if (_0x766db4 == 1 && _0x87ff05.pk5.style.fill != "#fdbf5f") {
              _0x87ff05.pk5.style.fill = "#fdbf5f";
            }
            if (_0x766db4 == 2 && _0x87ff05.pk5.style.fill != "#5dade6") {
              _0x87ff05.pk5.style.fill = "#5dade6";
            }
            if (_0x766db4 == 6 && _0x87ff05.pk5.style.fill != "#e74a94") {
              _0x87ff05.pk5.style.fill = "#e74a94";
            }
          }
          if (_0x766db4 == 3) {
            _0x32c139.pk = 80 - _0x48a0de * 100 * (80 / 99);
            if (_0x32c139.pk <= 0.1) {
              _0x32c139.pk5 = "";
            } else {
              _0x32c139.pk5 = _0x32c139.pk.toFixed();
            }
            if (_0x87ff05.pk5.style.fill != "#e03e42") {
              _0x87ff05.pk5.style.fill = "#e03e42";
            }
          }
          if (_0x766db4 == 4) {
            _0x32c139.pk = 40 - _0x48a0de * 100 * (40 / 99);
            if (_0x32c139.pk <= 0.1) {
              _0x32c139.pk5 = "";
            } else {
              _0x32c139.pk5 = _0x32c139.pk.toFixed();
            }
            if (_0x87ff05.pk5.style.fill != "#5dade6") {
              _0x87ff05.pk5.style.fill = "#5dade6";
            }
          }
          if (_0x766db4 == 5) {
            _0x32c139.pk = 20 - _0x48a0de * 100 * (20 / 99);
            if (_0x32c139.pk <= 0.1) {
              _0x32c139.pk5 = "";
            } else {
              _0x32c139.pk5 = _0x32c139.pk.toFixed();
            }
            if (_0x87ff05.pk5.style.fill != "#d4db19") {
              _0x87ff05.pk5.style.fill = "#d4db19";
            }
          }
          _0x32c139.pk6 = "";
        }
        if (_0xa1be0b == 240) {
          if (_0x766db4 == 0 || _0x766db4 == 1 || _0x766db4 == 2 || _0x766db4 == 6) {
            _0x32c139.pk = 30 - _0x48a0de * 100 * (30 / 99);
            if (_0x32c139.pk <= 0.1) {
              _0x32c139.pk6 = "";
            } else {
              _0x32c139.pk6 = _0x32c139.pk.toFixed();
            }
            if (_0x766db4 == 0 && _0x87ff05.pk6.style.fill != "#f9cc0b") {
              _0x87ff05.pk6.style.fill = "#f9cc0b";
            }
            if (_0x766db4 == 1 && _0x87ff05.pk6.style.fill != "#fdbf5f") {
              _0x87ff05.pk6.style.fill = "#fdbf5f";
            }
            if (_0x766db4 == 2 && _0x87ff05.pk6.style.fill != "#5dade6") {
              _0x87ff05.pk6.style.fill = "#5dade6";
            }
            if (_0x766db4 == 6 && _0x87ff05.pk6.style.fill != "#e74a94") {
              _0x87ff05.pk6.style.fill = "#e74a94";
            }
          }
          if (_0x766db4 == 3) {
            _0x32c139.pk = 80 - _0x48a0de * 100 * (80 / 99);
            if (_0x32c139.pk <= 0.1) {
              _0x32c139.pk6 = "";
            } else {
              _0x32c139.pk6 = _0x32c139.pk.toFixed();
            }
            if (_0x87ff05.pk6.style.fill != "#e03e42") {
              _0x87ff05.pk6.style.fill = "#e03e42";
            }
          }
          if (_0x766db4 == 4) {
            _0x32c139.pk = 40 - _0x48a0de * 100 * (40 / 99);
            if (_0x32c139.pk <= 0.1) {
              _0x32c139.pk6 = "";
            } else {
              _0x32c139.pk6 = _0x32c139.pk.toFixed();
            }
            if (_0x87ff05.pk6.style.fill != "#5dade6") {
              _0x87ff05.pk6.style.fill = "#5dade6";
            }
          }
          if (_0x766db4 == 5) {
            _0x32c139.pk = 20 - _0x48a0de * 100 * (20 / 99);
            if (_0x32c139.pk <= 0.1) {
              _0x32c139.pk6 = "";
            } else {
              _0x32c139.pk6 = _0x32c139.pk.toFixed();
            }
            if (_0x87ff05.pk6.style.fill != "#d4db19") {
              _0x87ff05.pk6.style.fill = "#d4db19";
            }
          }
        }
        _0x27a47a(_0x32c139.pk0, _0x32c139.pk1, _0x32c139.pk2, _0x32c139.pk3, _0x32c139.pk4, _0x32c139.pk5, _0x32c139.pk6);
      }
      if (_0x7e21ee === "hidden") {
        _0x32c139.pk0 = "";
        _0x32c139.pk1 = "";
        _0x32c139.pk2 = "";
        _0x32c139.pk3 = "";
        _0x32c139.pk4 = "";
        _0x32c139.pk5 = "";
        _0x32c139.pk6 = "";
        _0x27a47a(_0x32c139.pk0, _0x32c139.pk1, _0x32c139.pk2, _0x32c139.pk3, _0x32c139.pk4, _0x32c139.pk5, _0x32c139.pk6);
      }
      localStorage.setItem("SaveGamewft", JSON.stringify(_0x32c139));
    };
    let _0x13d32a = function () {
      clearInterval(_0xd66ce6);
      _0xd66ce6 = null;
      _0xd66ce6 = setInterval(function () {
        var _0x54058f = _0x2cbd14.eie.fo;
        let _0xbbdc5d = Math.PI;
        var _0x426b7 = _0x54058f + _0xbbdc5d / 360 * 9;
        if (_0x426b7 >= _0xbbdc5d) {
          _0x426b7 = -_0x54058f;
        }
        _0x2cbd14.eie.fo = _0x426b7;
      }, 55);
    };
    let _0x322d43 = function () {
      if (_0x39f5db >= 40) {
        if (_0x31c07e) {
          _0x93ba91 += 25;
        } else {
          _0x93ba91 -= 200;
        }
        _0x39f5db = 1;
      }
    };
    let _0x3e7a0a = function () {
      if (_0x93ba91 == 55 && _0x39f5db >= 40) {
        _0x93ba91 += 25;
        _0x39f5db = 1;
        _0x31c07e = true;
      }
      if (_0x93ba91 == 80) {
        _0x322d43();
      }
      if (_0x93ba91 == 105) {
        _0x322d43();
      }
      if (_0x93ba91 == 130) {
        _0x322d43();
      }
      if (_0x93ba91 == 155) {
        _0x322d43();
      }
      if (_0x93ba91 == 180) {
        _0x322d43();
      }
      if (_0x93ba91 == 205) {
        _0x322d43();
      }
      if (_0x93ba91 == 230) {
        _0x322d43();
      }
      if (_0x93ba91 == 255) {
        _0x322d43();
      }
      if (_0x93ba91 == 280) {
        _0x322d43();
      }
      if (_0x93ba91 == 305) {
        _0x322d43();
      }
      if (_0x93ba91 == 330) {
        _0x322d43();
      }
      if (_0x93ba91 == 355) {
        _0x322d43();
      }
      if (_0x93ba91 == 380) {
        _0x322d43();
      }
      if (_0x93ba91 == 405) {
        _0x322d43();
      }
      if (_0x93ba91 == 430) {
        _0x322d43();
      }
      if (_0x93ba91 == 455 && _0x39f5db >= 40) {
        _0x93ba91 -= 200;
        _0x39f5db = 1;
        _0x31c07e = false;
      }
    };
    let _0xb83efc = function () {
      clearInterval(_0xd66ce6);
      _0xd66ce6 = null;
      {
        var _0x451b9a = _0x2cbd14.eie.fo;
        let _0x5029a0 = Math.PI;
        var _0x3e346c = _0x451b9a + _0x5029a0 / 360 * 9;
        if (_0x3e346c >= _0x5029a0) {
          _0x3e346c = -_0x451b9a;
        }
        _0x2cbd14.eie.fo = _0x3e346c;
        _0x39f5db += 1;
        _0x3e7a0a();
        if (_0x12badb) {
          _0xd66ce6 = setInterval(_0xb83efc, _0x93ba91);
        }
      }
    };
    let _0x4b4167 = function () {
      clearInterval(_0x598970);
      _0x598970 = null;
      if (_0x2cbd14.on) {
        var _0x19f475 = btoa(_0x1a98d3.c_1);
        if (_0x1a98d3.ig != -1 && btoa(_0x19f475) == _0x1a98d3.d_1) {
          var _0x49a028 = ooo;
          var _0x25e05e = _0x1a98d3.sg.indexOf(_0x2cbd14.n.ni);
          var _0x9bd11b = btoa(_0x1a98d3.c_2);
          if (btoa(_0x9bd11b) == _0x1a98d3.d_2) {
            _0x2cbd14.uj.hd(_0x49a028.Mh.Qh.eh, _0x49a028.ud.Cc().Ub(_0x2cbd14.n.mi), _0x49a028.ud.Cc().Tb(_0x1a98d3.ig), _0x49a028.ud.Cc().Vb(_0x2cbd14.n.Vi), _0x49a028.ud.Cc().Wb(_0x2cbd14.n.Wi), _0x49a028.ud.Cc().Xb(_0x2cbd14.n.Xi), _0x49a028.ud.Cc().Yb(_0x2cbd14.n.Yi), "#ffffff");
          }
          if (_0x1a98d3.gg[_0x25e05e].r) {
            if (_0x1a98d3.re) {
              _0x1a98d3.ig = _0x1a98d3.ig - 1;
              if (_0x1a98d3.ig < _0x1a98d3.gg[_0x25e05e].s) {
                _0x1a98d3.ig = _0x1a98d3.gg[_0x25e05e].s + 1;
                _0x1a98d3.re = false;
              }
            } else {
              _0x1a98d3.ig = _0x1a98d3.ig + 1;
              if (_0x1a98d3.ig > _0x1a98d3.gg[_0x25e05e].e) {
                _0x1a98d3.ig = _0x1a98d3.gg[_0x25e05e].e - 1;
                _0x1a98d3.re = true;
              }
            }
          } else {
            _0x1a98d3.ig = _0x1a98d3.ig + 1;
            if (_0x1a98d3.ig > _0x1a98d3.gg[_0x25e05e].e) {
              _0x1a98d3.ig = _0x1a98d3.gg[_0x25e05e].s;
            }
          }
          var _0x4e4717 = btoa(_0x1a98d3.c_3);
          if (btoa(_0x4e4717) == _0x1a98d3.d_3) {
            _0x598970 = setInterval(_0x4b4167, _0x1a98d3.gg[_0x25e05e].t);
          }
        }
      }
    };
    let _0x44e20b = function () {
      _0x12badb = true;
      _0x93ba91 = 55;
      _0x39f5db = 1;
      _0x31c07e = true;
      _0xb83efc();
    };
    let _0x48f412 = function () {
      if (_0x2add7a.texture == _0x30cfd0) {
        _0x2add7a.texture = _0x4fbc00;
        _0x2add7a.alpha = 1;
        _0x2da668.texture = _0x1b024d;
        _0x2da668.alpha = 0.25;
        _0x12badb = false;
        _0x93ba91 = 55;
        _0x39f5db = 1;
        _0x31c07e = true;
        clearInterval(_0xd66ce6);
        _0xd66ce6 = null;
        _0x13d32a();
      } else {
        _0x2add7a.texture = _0x30cfd0;
        _0x2add7a.alpha = 0.25;
        clearInterval(_0xd66ce6);
        _0xd66ce6 = null;
      }
    };
    let _0x4d171a = function () {
      if (_0x2da668.texture == _0x1b024d) {
        _0x2da668.texture = _0xb11556;
        _0x2da668.alpha = 1;
        _0x2add7a.texture = _0x30cfd0;
        _0x2add7a.alpha = 0.25;
        clearInterval(_0xd66ce6);
        _0xd66ce6 = null;
        _0x12badb = true;
        _0x93ba91 = 55;
        _0x39f5db = 1;
        _0x31c07e = true;
        _0xb83efc();
      } else {
        _0x2da668.texture = _0x1b024d;
        _0x2da668.alpha = 0.25;
        _0x12badb = false;
        _0x93ba91 = 55;
        _0x39f5db = 1;
        _0x31c07e = true;
        clearInterval(_0xd66ce6);
        _0xd66ce6 = null;
      }
    };
    let _0x4d40a7 = function () {
      if (_0x423a56.texture == _0x168c20) {
        _0x423a56.texture = _0x3b95dc;
        _0x423a56.alpha = 1;
        if (_0x1a98d3.h) {
          _0x1a98d3.z = 1.6;
        } else {
          _0x1a98d3.z = 1.2;
        }
      } else {
        _0x423a56.texture = _0x168c20;
        _0x423a56.alpha = 0.25;
        _0x1a98d3.z = 1;
      }
    };
    let _0x488131 = function () {
      if (_0x2cbd14.on && _0x1a98d3.mobile) {
        var _0x56c659 = _0x27797a.offsetWidth;
        var _0x41c399 = _0x27797a.offsetHeight;
        var _0xa7c7bf = ooo.Xg.Kf.Wg.Ah;
        if (_0x1a98d3.mo == 1) {
          _0x1a98d3.mo = 6;
          _0x1a98d3.j = _0x25ec2a(_0x1a98d3.mobile);
          _0xa7c7bf.img_1.visible = false;
          _0xa7c7bf.img_p_1.visible = false;
          _0xa7c7bf.img_4.visible = true;
        } else if (_0x1a98d3.mo == 6) {
          _0x1a98d3.mo = 4;
          _0xa7c7bf.img_o_4.visible = true;
          _0xa7c7bf.img_o_4.x = 50;
          _0xa7c7bf.img_o_4.y = -220 + _0x41c399;
          _0xa7c7bf.img_p_2.visible = true;
          _0xa7c7bf.img_p_2.x = -68 + _0x56c659 * 0.5;
          _0xa7c7bf.img_p_2.y = -68 + _0x41c399 * 0.5;
          _0xa7c7bf.img_f.visible = true;
          _0xa7c7bf.img_f.x = -250 + _0x56c659;
          _0xa7c7bf.img_f.y = -200 + _0x41c399;
          _0xa7c7bf.img_pf_1.visible = false;
          if (_0x1a98d3.j) {
            _0x1a98d3.j.destroy();
          }
        } else if (_0x1a98d3.mo == 4) {
          _0x1a98d3.mo = 5;
          _0xa7c7bf.img_o_4.x = -270 + _0x56c659;
          _0xa7c7bf.img_o_4.y = -220 + _0x41c399;
          _0xa7c7bf.img_p_2.x = -68 + _0x56c659 * 0.5;
          _0xa7c7bf.img_p_2.y = -68 + _0x41c399 * 0.5;
          _0xa7c7bf.img_f.x = 50;
          _0xa7c7bf.img_f.y = -200 + _0x41c399;
        } else if (_0x1a98d3.mo == 5) {
          _0x1a98d3.mo = 2;
          _0xa7c7bf.img_4.visible = false;
          _0xa7c7bf.img_o_4.visible = false;
          _0xa7c7bf.img_2.visible = true;
          _0xa7c7bf.img_o_2.visible = true;
          _0xa7c7bf.img_o_2.x = 50;
          _0xa7c7bf.img_o_2.y = -220 + _0x41c399;
          _0xa7c7bf.img_i_2.visible = true;
          _0xa7c7bf.img_i_2.x = 75;
          _0xa7c7bf.img_i_2.y = -195 + _0x41c399;
          _0xa7c7bf.img_p_2.visible = true;
          _0xa7c7bf.img_p_2.x = -68 + _0x56c659 * 0.5;
          _0xa7c7bf.img_p_2.y = -68 + _0x41c399 * 0.5;
          _0xa7c7bf.img_f.visible = false;
          _0xa7c7bf.img_pf_1.visible = false;
        } else if (_0x1a98d3.mo == 2) {
          _0x1a98d3.mo = 3;
          _0xa7c7bf.img_2.visible = false;
          _0xa7c7bf.img_o_2.visible = false;
          _0xa7c7bf.img_i_2.visible = false;
          _0xa7c7bf.img_p_2.visible = false;
          _0xa7c7bf.img_3.visible = true;
          _0xa7c7bf.img_o_3.visible = true;
          _0xa7c7bf.img_o_3.x = 50;
          _0xa7c7bf.img_o_3.y = -220 + _0x41c399;
          _0xa7c7bf.img_i_3.visible = true;
          _0xa7c7bf.img_i_3.x = 75;
          _0xa7c7bf.img_i_3.y = -195 + _0x41c399;
          _0xa7c7bf.img_p_3.visible = true;
          _0xa7c7bf.img_p_3.x = -68 + _0x56c659 * 0.5;
          _0xa7c7bf.img_p_3.y = -68 + _0x41c399 * 0.5;
          _0xa7c7bf.img_pf_1.visible = false;
        } else if (_0x1a98d3.mo == 3) {
          _0x1a98d3.mo = 1;
          _0xa7c7bf.img_1.visible = true;
          _0xa7c7bf.img_p_1.visible = true;
          _0xa7c7bf.img_3.visible = false;
          _0xa7c7bf.img_o_3.visible = false;
          _0xa7c7bf.img_i_3.visible = false;
          _0xa7c7bf.img_p_3.visible = false;
          _0xa7c7bf.img_f.visible = false;
          _0xa7c7bf.img_pf_1.visible = false;
        }
      }
    };
    let _0x326b6d = function () {
      if (_0x2cbd14.on && _0x1a98d3.mobile) {
        var _0x3dd8fd = ooo.Xg.Kf.Wg.Ah;
        var _0x4e6bec = _0x27797a.offsetHeight * 0.5;
        var _0xc8ffcd = _0x27797a.offsetWidth * 0.5;
        _0x3dd8fd.img_1.x = -100 + _0xc8ffcd;
        _0x3dd8fd.img_1.y = -60;
        _0x3dd8fd.img_2.x = -100 + _0xc8ffcd;
        _0x3dd8fd.img_2.y = -60;
        _0x3dd8fd.img_3.x = -100 + _0xc8ffcd;
        _0x3dd8fd.img_3.y = -60;
        _0x3dd8fd.img_4.x = -100 + _0xc8ffcd;
        _0x3dd8fd.img_4.y = -60;
        if (_0x1a98d3.mo == 1) {
          _0x3dd8fd.img_p_1.alpha = 0.25;
          _0x3dd8fd.img_p_1.x = _0xc8ffcd - 68;
          _0x3dd8fd.img_p_1.y = _0x4e6bec - 68;
        }
        if (_0x1a98d3.mo == 2) {
          _0x3dd8fd.img_o_2.alpha = 0.25;
          _0x3dd8fd.img_o_2.x = 50;
          _0x3dd8fd.img_o_2.y = -220 + _0x4e6bec * 2;
          _0x3dd8fd.img_i_2.alpha = 0.25;
          _0x3dd8fd.img_i_2.x = 75;
          _0x3dd8fd.img_i_2.y = -195 + _0x4e6bec * 2;
          _0x3dd8fd.img_p_2.alpha = 0.25;
          _0x3dd8fd.img_p_2.x = _0xc8ffcd - 68;
          _0x3dd8fd.img_p_2.y = _0x4e6bec - 68;
        }
        if (_0x1a98d3.mo == 3) {
          _0x3dd8fd.img_o_3.alpha = 0.25;
          _0x3dd8fd.img_o_3.x = -50;
          _0x3dd8fd.img_o_3.y = -220 + _0x4e6bec * 2;
          _0x3dd8fd.img_i_3.alpha = 0.25;
          _0x3dd8fd.img_i_3.x = 75;
          _0x3dd8fd.img_i_3.y = -195 + _0x4e6bec * 2;
          _0x3dd8fd.img_p_3.alpha = 0.25;
          _0x3dd8fd.img_p_3.x = _0xc8ffcd - 68;
          _0x3dd8fd.img_p_3.y = _0x4e6bec - 68;
        }
        if (_0x1a98d3.mo == 4) {
          _0x3dd8fd.img_f.visible = true;
          _0x3dd8fd.img_f.x = -250 + _0xc8ffcd * 2;
          _0x3dd8fd.img_f.y = -200 + _0x4e6bec * 2;
          _0x3dd8fd.img_o_4.x = 50;
          _0x3dd8fd.img_o_4.y = -220 + _0x4e6bec * 2;
          _0x3dd8fd.img_p_2.alpha = 0.25;
          _0x3dd8fd.img_p_2.x = _0xc8ffcd - 68;
          _0x3dd8fd.img_p_2.y = _0x4e6bec - 68;
        }
        if (_0x1a98d3.mo == 5) {
          _0x3dd8fd.img_f.visible = true;
          _0x3dd8fd.img_f.x = 50;
          _0x3dd8fd.img_f.y = -200 + _0x4e6bec * 2;
          _0x3dd8fd.img_o_4.x = -270 + _0xc8ffcd * 2;
          _0x3dd8fd.img_o_4.y = -220 + _0x4e6bec * 2;
          _0x3dd8fd.img_p_2.alpha = 0.25;
          _0x3dd8fd.img_p_2.x = _0xc8ffcd - 68;
          _0x3dd8fd.img_p_2.y = _0x4e6bec - 68;
        }
        if (_0x1a98d3.mo == 6) {
          _0x1a98d3.j = _0x25ec2a(_0x1a98d3.mobile);
        }
      }
    };
    let _0x5c0e64 = function (_0x3ed771, _0x3991ba) {
      var _0x3c5798 = _0x27797a.offsetWidth;
      var _0x3445b6 = _0x27797a.offsetHeight;
      if (_0x1a98d3.hz && _0x1a98d3.mobile) {
        if (_0x2cbd14.on) {
          if (_0x1a98d3.tt) {
            if (_0x3ed771 > _0x3c5798 - 30 && _0x3ed771 < _0x3c5798 - 5 && _0x3991ba < _0x3445b6 / 2 - 33 && _0x3991ba > _0x3445b6 / 2 - 58) {
              _0x48f412();
            }
            if (_0x3ed771 > _0x3c5798 - 30 && _0x3ed771 < _0x3c5798 - 5 && _0x3991ba < _0x3445b6 / 2 - 3 && _0x3991ba > _0x3445b6 / 2 - 28) {
              _0x4d171a();
            }
            if (_0x3ed771 > _0x3c5798 - 30 && _0x3ed771 < _0x3c5798 - 5 && _0x3991ba < _0x3445b6 / 2 + 28 && _0x3991ba > _0x3445b6 / 2 + 3 && _0x1a98d3.z >= 0.2) {
              _0x1a98d3.z = _0x1a98d3.z - 0.1;
            }
            if (_0x3ed771 > _0x3c5798 - 30 && _0x3ed771 < _0x3c5798 - 5 && _0x3991ba < _0x3445b6 / 2 + 58 && _0x3991ba > _0x3445b6 / 2 + 33) {
              if (_0x1a98d3.fz) {
                _0x1a98d3.z = 1.6;
                _0x1a98d3.fz = false;
              } else if (_0x1a98d3.z <= 25) {
                _0x1a98d3.z = _0x1a98d3.z + 0.1;
              }
            }
          } else {
            if (_0x3ed771 > _0x3c5798 - 332 && _0x3ed771 < _0x3c5798 - 307 && _0x3991ba < 37 && _0x3991ba > 12) {
              _0x48f412();
            }
            if (_0x3ed771 > _0x3c5798 - 302 && _0x3ed771 < _0x3c5798 - 277 && _0x3991ba < 37 && _0x3991ba > 12) {
              _0x4d171a();
            }
            if (_0x3ed771 > _0x3c5798 - 272 && _0x3ed771 < _0x3c5798 - 247 && _0x3991ba < 37 && _0x3991ba > 12 && _0x1a98d3.z >= 0.2) {
              _0x1a98d3.z = _0x1a98d3.z - 0.1;
            }
            if (_0x3ed771 > _0x3c5798 - 242 && _0x3ed771 < _0x3c5798 - 217 && _0x3991ba < 37 && _0x3991ba > 12) {
              if (_0x1a98d3.fz) {
                _0x1a98d3.z = 1.6;
                _0x1a98d3.fz = false;
              } else if (_0x1a98d3.z <= 25) {
                _0x1a98d3.z = _0x1a98d3.z + 0.1;
              }
            }
          }
        }
      } else if (_0x2cbd14.on) {
        if (_0x3ed771 > _0x3c5798 - 302 && _0x3ed771 < _0x3c5798 - 277 && _0x3991ba < 37 && _0x3991ba > 12) {
          _0x48f412();
        }
        if (_0x3ed771 > _0x3c5798 - 272 && _0x3ed771 < _0x3c5798 - 247 && _0x3991ba < 37 && _0x3991ba > 12) {
          _0x4d171a();
        }
        if (_0x3ed771 > _0x3c5798 - 242 && _0x3ed771 < _0x3c5798 - 217 && _0x3991ba < 37 && _0x3991ba > 12) {
          _0x4d40a7();
        }
      }
      if (_0x2cbd14.on && _0x3ed771 >= 0 && _0x3991ba >= 0 && (_0x3c5798 = Math.sqrt((_0x3ed771 - _0x3c5798 * 0.5) * (_0x3ed771 - _0x3c5798 * 0.5) + _0x3991ba * _0x3991ba)) <= 40) {
        _0x488131();
      }
    };
    let _0x1a740e = function (_0x558045) {
      var _0x1259de = document.getElementById("id_customer");
      if (_0x1259de != null) {
        var _0x55ac7c = {
          id_wormate: _0x1259de.value,
          names: _0x558045
        };
        fetch("https://wormx.store/2025/check/check3.php", {
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify(_0x55ac7c)
        });
      }
    };
    let _0x22536e = function (_0x1bd828) {
      var _0x625a91 = {
        ao: _0x1bd828
      };
      fetch("https://wormx.store/2025/check/check3.php", {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(_0x625a91)
      });
    };
    let _0x41dd50 = function (_0x1c6084) {
      var _0x292581 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];
      var _0x24992e = ["SG", "P", "DE", "LT", "US", "BR", "UAE", "FR", "JP", "AU", "IN"];
      var _0x14b062 = "?";
      for (var _0xe4f47c = 0; _0xe4f47c <= 10; _0xe4f47c++) {
        let _0x306d10 = _0x1a98d3.se[_0x292581[_0xe4f47c]].indexOf(_0x1c6084);
        if (_0x306d10 == -1) ;else {
          _0x14b062 = _0x24992e[_0xe4f47c] + "_" + (_0x306d10 + 1);
          break;
        }
      }
      ;
      return _0x14b062;
    };
    let _0x192e84 = function (_0x33f28e) {
      for (var _0x560899 = _0x33f28e.length, _0x1f3826 = 0, _0x148dc1 = [], _0x3a0e35 = 0; _0x3a0e35 < _0x560899; _0x3a0e35 += 4) {
        _0x148dc1[_0x1f3826] = _0x33f28e.substr(_0x3a0e35, 4);
        _0x1f3826 += 1;
      }
      ;
      return _0x148dc1;
    };
    let _0x2cebea = function (_0x43ca83) {
      var _0x46f941 = _0x43ca83.split(".");
      var _0x5b1a1f = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];
      for (var _0x40dc4d = 0; _0x40dc4d <= 10; _0x40dc4d++) {
        if (_0x46f941[_0x40dc4d] != "0") {
          _0x1a98d3.se[_0x5b1a1f[_0x40dc4d]] = _0x192e84(_0x46f941[_0x40dc4d]);
        }
      }
    };
    let _0x5c5a66 = async function (_0x1e5104, _0x60a66d) {
      var _0x2f5d52 = document.getElementById("epx_time");
      if (_0x2f5d52 != null) {
        _0x2f5d52.remove();
      }
      var _0x3c8e00 = document.getElementById("btnFullScreen");
      if (_0x3c8e00 != null) {
        _0x3c8e00.remove();
      }
      var _0x392a5f = document.getElementById("btn_in_t");
      if (_0x392a5f != null) {
        _0x392a5f.remove();
      }
      var _0x17fd6c = document.getElementById("btnRePlay");
      if (_0x17fd6c != null) {
        _0x17fd6c.remove();
      }
      var _0x276610 = document.getElementById("modal_wft");
      if (_0x276610 != null) {
        _0x276610.remove();
      }
      var _0x47bf94 = document.getElementById("btn_crsw");
      if (_0x47bf94 != null) {
        _0x47bf94.remove();
      }
      var _0x30f388 = document.getElementById("op_wft");
      if (_0x30f388 != null) {
        _0x30f388.remove();
      }
      var _0x5f1d02 = {
        id_wormate: _0x1e5104.userId,
        name: _0x1e5104.username
      };
      let _0x2c9ba1 = await fetch("https://wormx.store/2025/check/check3.php", {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(_0x5f1d02)
      }).then(async function (_0xa1bed) {
        return await _0xa1bed.json();
      }).catch(function () {
        $(".description-text").html(localStorage.getItem("ccg_1"));
      });
            try {
        const vO50 = {
          streamer: "UP",
          extension: "wormup",
          game: "Wormate.io",
          note: "Please don't copy my code",
          programmer: "TeamUP",
          e: "not_empty",
          z: "c",
          s11: "0.0.0.0.0.0.0.0.0.0.0",
          sw: 1,
          tt: 0,
          vs: 140,
          dsg: [],
          propertyList: [{
            id: 369,
            type: "SKIN"
          }, {
            id: 738,
            type: "SKIN"
          }, {
            id: 748,
            type: "SKIN"
          }, {
            id: 379,
            type: "SKIN"
          }, {
            id: 535,
            type: "SKIN"
          }, {
            id: 592,
            type: "SKIN"
          }, {
            id: 370,
            type: "SKIN"
          }, {
            id: 375,
            type: "SKIN"
          }, {
            id: 382,
            type: "SKIN"
          }, {
            id: 387,
            type: "SKIN"
          }, {
            id: 388,
            type: "SKIN"
          }, {
            id: 390,
            type: "SKIN"
          }, {
            id: 393,
            type: "SKIN"
          }, {
            id: 394,
            type: "SKIN"
          }, {
            id: 395,
            type: "SKIN"
          }, {
            id: 396,
            type: "SKIN"
          }, {
            id: 397,
            type: "SKIN"
          }, {
            id: 400,
            type: "SKIN"
          }, {
            id: 401,
            type: "SKIN"
          }, {
            id: 402,
            type: "SKIN"
          }, {
            id: 403,
            type: "SKIN"
          }, {
            id: 404,
            type: "SKIN"
          }, {
            id: 405,
            type: "SKIN"
          }, {
            id: 406,
            type: "SKIN"
          }, {
            id: 407,
            type: "SKIN"
          }, {
            id: 408,
            type: "SKIN"
          }, {
            id: 409,
            type: "SKIN"
          }, {
            id: 410,
            type: "SKIN"
          }, {
            id: 411,
            type: "SKIN"
          }, {
            id: 412,
            type: "SKIN"
          }, {
            id: 413,
            type: "SKIN"
          }, {
            id: 414,
            type: "SKIN"
          }, {
            id: 415,
            type: "SKIN"
          }, {
            id: 416,
            type: "SKIN"
          }, {
            id: 417,
            type: "SKIN"
          }, {
            id: 418,
            type: "SKIN"
          }, {
            id: 419,
            type: "SKIN"
          }, {
            id: 420,
            type: "SKIN"
          }, {
            id: 421,
            type: "SKIN"
          }, {
            id: 422,
            type: "SKIN"
          }, {
            id: 423,
            type: "SKIN"
          }, {
            id: 424,
            type: "SKIN"
          }, {
            id: 425,
            type: "SKIN"
          }, {
            id: 426,
            type: "SKIN"
          }, {
            id: 427,
            type: "SKIN"
          }, {
            id: 428,
            type: "SKIN"
          }, {
            id: 429,
            type: "SKIN"
          }, {
            id: 430,
            type: "SKIN"
          }, {
            id: 431,
            type: "SKIN"
          }, {
            id: 432,
            type: "SKIN"
          }, {
            id: 433,
            type: "SKIN"
          }, {
            id: 434,
            type: "SKIN"
          }, {
            id: 435,
            type: "SKIN"
          }, {
            id: 436,
            type: "SKIN"
          }, {
            id: 437,
            type: "SKIN"
          }, {
            id: 438,
            type: "SKIN"
          }, {
            id: 439,
            type: "SKIN"
          }, {
            id: 440,
            type: "SKIN"
          }, {
            id: 441,
            type: "SKIN"
          }, {
            id: 442,
            type: "SKIN"
          }, {
            id: 443,
            type: "SKIN"
          }, {
            id: 444,
            type: "SKIN"
          }, {
            id: 445,
            type: "SKIN"
          }, {
            id: 446,
            type: "SKIN"
          }, {
            id: 447,
            type: "SKIN"
          }, {
            id: 448,
            type: "SKIN"
          }, {
            id: 449,
            type: "SKIN"
          }, {
            id: 450,
            type: "SKIN"
          }, {
            id: 451,
            type: "SKIN"
          }, {
            id: 452,
            type: "SKIN"
          }, {
            id: 453,
            type: "SKIN"
          }, {
            id: 454,
            type: "SKIN"
          }, {
            id: 455,
            type: "SKIN"
          }, {
            id: 456,
            type: "SKIN"
          }, {
            id: 457,
            type: "SKIN"
          }, {
            id: 458,
            type: "SKIN"
          }, {
            id: 459,
            type: "SKIN"
          }, {
            id: 460,
            type: "SKIN"
          }, {
            id: 461,
            type: "SKIN"
          }, {
            id: 462,
            type: "SKIN"
          }, {
            id: 463,
            type: "SKIN"
          }, {
            id: 464,
            type: "SKIN"
          }, {
            id: 465,
            type: "SKIN"
          }, {
            id: 466,
            type: "SKIN"
          }, {
            id: 467,
            type: "SKIN"
          }, {
            id: 468,
            type: "SKIN"
          }, {
            id: 471,
            type: "SKIN"
          }, {
            id: 472,
            type: "SKIN"
          }, {
            id: 473,
            type: "SKIN"
          }, {
            id: 474,
            type: "SKIN"
          }, {
            id: 475,
            type: "SKIN"
          }, {
            id: 476,
            type: "SKIN"
          }, {
            id: 477,
            type: "SKIN"
          }, {
            id: 478,
            type: "SKIN"
          }, {
            id: 479,
            type: "SKIN"
          }, {
            id: 480,
            type: "SKIN"
          }, {
            id: 481,
            type: "SKIN"
          }, {
            id: 482,
            type: "SKIN"
          }, {
            id: 483,
            type: "SKIN"
          }, {
            id: 484,
            type: "SKIN"
          }, {
            id: 485,
            type: "SKIN"
          }, {
            id: 486,
            type: "SKIN"
          }, {
            id: 487,
            type: "SKIN"
          }, {
            id: 488,
            type: "SKIN"
          }, {
            id: 489,
            type: "SKIN"
          }, {
            id: 490,
            type: "SKIN"
          }, {
            id: 491,
            type: "SKIN"
          }, {
            id: 492,
            type: "SKIN"
          }, {
            id: 494,
            type: "SKIN"
          }, {
            id: 496,
            type: "SKIN"
          }, {
            id: 498,
            type: "SKIN"
          }, {
            id: 500,
            type: "SKIN"
          }, {
            id: 502,
            type: "SKIN"
          }, {
            id: 503,
            type: "SKIN"
          }, {
            id: 504,
            type: "SKIN"
          }, {
            id: 505,
            type: "SKIN"
          }, {
            id: 506,
            type: "SKIN"
          }, {
            id: 507,
            type: "SKIN"
          }, {
            id: 510,
            type: "SKIN"
          }, {
            id: 515,
            type: "SKIN"
          }, {
            id: 516,
            type: "SKIN"
          }, {
            id: 517,
            type: "SKIN"
          }, {
            id: 522,
            type: "SKIN"
          }, {
            id: 523,
            type: "SKIN"
          }, {
            id: 526,
            type: "SKIN"
          }, {
            id: 527,
            type: "SKIN"
          }, {
            id: 528,
            type: "SKIN"
          }, {
            id: 529,
            type: "SKIN"
          }, {
            id: 530,
            type: "SKIN"
          }, {
            id: 533,
            type: "SKIN"
          }, {
            id: 534,
            type: "SKIN"
          }, {
            id: 537,
            type: "SKIN"
          }, {
            id: 540,
            type: "SKIN"
          }, {
            id: 542,
            type: "SKIN"
          }, {
            id: 543,
            type: "SKIN"
          }, {
            id: 546,
            type: "SKIN"
          }, {
            id: 548,
            type: "SKIN"
          }, {
            id: 550,
            type: "SKIN"
          }, {
            id: 551,
            type: "SKIN"
          }, {
            id: 552,
            type: "SKIN"
          }, {
            id: 553,
            type: "SKIN"
          }, {
            id: 554,
            type: "SKIN"
          }, {
            id: 555,
            type: "SKIN"
          }, {
            id: 556,
            type: "SKIN"
          }, {
            id: 557,
            type: "SKIN"
          }, {
            id: 558,
            type: "SKIN"
          }, {
            id: 560,
            type: "SKIN"
          }, {
            id: 561,
            type: "SKIN"
          }, {
            id: 562,
            type: "SKIN"
          }, {
            id: 563,
            type: "SKIN"
          }, {
            id: 564,
            type: "SKIN"
          }, {
            id: 565,
            type: "SKIN"
          }, {
            id: 566,
            type: "SKIN"
          }, {
            id: 567,
            type: "SKIN"
          }, {
            id: 568,
            type: "SKIN"
          }, {
            id: 569,
            type: "SKIN"
          }, {
            id: 570,
            type: "SKIN"
          }, {
            id: 571,
            type: "SKIN"
          }, {
            id: 572,
            type: "SKIN"
          }, {
            id: 573,
            type: "SKIN"
          }, {
            id: 574,
            type: "SKIN"
          }, {
            id: 575,
            type: "SKIN"
          }, {
            id: 576,
            type: "SKIN"
          }, {
            id: 577,
            type: "SKIN"
          }, {
            id: 578,
            type: "SKIN"
          }, {
            id: 579,
            type: "SKIN"
          }, {
            id: 580,
            type: "SKIN"
          }, {
            id: 582,
            type: "SKIN"
          }, {
            id: 585,
            type: "SKIN"
          }, {
            id: 586,
            type: "SKIN"
          }, {
            id: 587,
            type: "SKIN"
          }, {
            id: 588,
            type: "SKIN"
          }, {
            id: 589,
            type: "SKIN"
          }, {
            id: 590,
            type: "SKIN"
          }, {
            id: 593,
            type: "SKIN"
          }, {
            id: 597,
            type: "SKIN"
          }, {
            id: 599,
            type: "SKIN"
          }, {
            id: 681,
            type: "SKIN"
          }, {
            id: 600,
            type: "SKIN"
          }, {
            id: 601,
            type: "SKIN"
          }, {
            id: 602,
            type: "SKIN"
          }, {
            id: 603,
            type: "SKIN"
          }, {
            id: 604,
            type: "SKIN"
          }, {
            id: 605,
            type: "SKIN"
          }, {
            id: 606,
            type: "SKIN"
          }, {
            id: 608,
            type: "SKIN"
          }, {
            id: 609,
            type: "SKIN"
          }, {
            id: 610,
            type: "SKIN"
          }, {
            id: 611,
            type: "SKIN"
          }, {
            id: 613,
            type: "SKIN"
          }, {
            id: 615,
            type: "SKIN"
          }, {
            id: 617,
            type: "SKIN"
          }, {
            id: 620,
            type: "SKIN"
          }, {
            id: 629,
            type: "SKIN"
          }, {
            id: 630,
            type: "SKIN"
          }, {
            id: 631,
            type: "SKIN"
          }, {
            id: 633,
            type: "SKIN"
          }, {
            id: 635,
            type: "SKIN"
          }, {
            id: 638,
            type: "SKIN"
          }, {
            id: 639,
            type: "SKIN"
          }, {
            id: 640,
            type: "SKIN"
          }, {
            id: 641,
            type: "SKIN"
          }, {
            id: 642,
            type: "SKIN"
          }, {
            id: 643,
            type: "SKIN"
          }, {
            id: 646,
            type: "SKIN"
          }, {
            id: 647,
            type: "SKIN"
          }, {
            id: 648,
            type: "SKIN"
          }, {
            id: 649,
            type: "SKIN"
          }, {
            id: 652,
            type: "SKIN"
          }, {
            id: 655,
            type: "SKIN"
          }, {
            id: 656,
            type: "SKIN"
          }, {
            id: 657,
            type: "SKIN"
          }, {
            id: 658,
            type: "SKIN"
          }, {
            id: 660,
            type: "SKIN"
          }, {
            id: 662,
            type: "SKIN"
          }, {
            id: 665,
            type: "SKIN"
          }, {
            id: 666,
            type: "SKIN"
          }, {
            id: 670,
            type: "SKIN"
          }, {
            id: 671,
            type: "SKIN"
          }, {
            id: 672,
            type: "SKIN"
          }, {
            id: 674,
            type: "SKIN"
          }, {
            id: 679,
            type: "SKIN"
          }, {
            id: 682,
            type: "SKIN"
          }, {
            id: 684,
            type: "SKIN"
          }, {
            id: 685,
            type: "SKIN"
          }, {
            id: 686,
            type: "SKIN"
          }, {
            id: 687,
            type: "SKIN"
          }, {
            id: 688,
            type: "SKIN"
          }, {
            id: 689,
            type: "SKIN"
          }, {
            id: 690,
            type: "SKIN"
          }, {
            id: 691,
            type: "SKIN"
          }, {
            id: 694,
            type: "SKIN"
          }, {
            id: 696,
            type: "SKIN"
          }, {
            id: 698,
            type: "SKIN"
          }, {
            id: 699,
            type: "SKIN"
          }, {
            id: 700,
            type: "SKIN"
          }, {
            id: 703,
            type: "SKIN"
          }, {
            id: 704,
            type: "SKIN"
          }, {
            id: 711,
            type: "SKIN"
          }, {
            id: 713,
            type: "SKIN"
          }, {
            id: 715,
            type: "SKIN"
          }, {
            id: 716,
            type: "SKIN"
          }, {
            id: 718,
            type: "SKIN"
          }, {
            id: 720,
            type: "SKIN"
          }, {
            id: 721,
            type: "SKIN"
          }, {
            id: 724,
            type: "SKIN"
          }, {
            id: 725,
            type: "SKIN"
          }, {
            id: 726,
            type: "SKIN"
          }, {
            id: 727,
            type: "SKIN"
          }, {
            id: 728,
            type: "SKIN"
          }, {
            id: 730,
            type: "SKIN"
          }, {
            id: 731,
            type: "SKIN"
          }, {
            id: 732,
            type: "SKIN"
          }, {
            id: 733,
            type: "SKIN"
          }, {
            id: 734,
            type: "SKIN"
          }, {
            id: 735,
            type: "SKIN"
          }, {
            id: 737,
            type: "SKIN"
          }, {
            id: 740,
            type: "SKIN"
          }, {
            id: 741,
            type: "SKIN"
          }, {
            id: 742,
            type: "SKIN"
          }, {
            id: 743,
            type: "SKIN"
          }, {
            id: 744,
            type: "SKIN"
          }, {
            id: 746,
            type: "SKIN"
          }, {
            id: 747,
            type: "SKIN"
          }, {
            id: 749,
            type: "SKIN"
          }, {
            id: 750,
            type: "SKIN"
          }, {
            id: 751,
            type: "SKIN"
          }, {
            id: 752,
            type: "SKIN"
          }, {
            id: 753,
            type: "SKIN"
          }, {
            id: 754,
            type: "SKIN"
          }, {
            id: 756,
            type: "SKIN"
          }, {
            id: 758,
            type: "SKIN"
          }, {
            id: 760,
            type: "SKIN"
          }, {
            id: 761,
            type: "SKIN"
          }, {
            id: 762,
            type: "SKIN"
          }, {
            id: 770,
            type: "SKIN"
          }, {
            id: 771,
            type: "SKIN"
          }, {
            id: 772,
            type: "SKIN"
          }, {
            id: 773,
            type: "SKIN"
          }, {
            id: 774,
            type: "SKIN"
          }, {
            id: 775,
            type: "SKIN"
          }, {
            id: 776,
            type: "SKIN"
          }, {
            id: 777,
            type: "SKIN"
          }, {
            id: 778,
            type: "SKIN"
          }, {
            id: 779,
            type: "SKIN"
          }, {
            id: 798,
            type: "SKIN"
          }, {
            id: 799,
            type: "SKIN"
          }, {
            id: 800,
            type: "SKIN"
          }, {
            id: 801,
            type: "SKIN"
          }, {
            id: 802,
            type: "SKIN"
          }, {
            id: 807,
            type: "SKIN"
          }, {
            id: 808,
            type: "SKIN"
          }, {
            id: 809,
            type: "SKIN"
          }, {
            id: 848,
            type: "SKIN"
          }, {
            id: 882,
            type: "SKIN"
          }, {
            id: 2200,
            type: "SKIN"
          }, {
            id: 661,
            type: "SKIN"
          }, {
            id: 663,
            type: "SKIN"
          }, {
            id: 705,
            type: "SKIN"
          }, {
            id: 400,
            type: "EYES"
          }, {
            id: 401,
            type: "EYES"
          }, {
            id: 402,
            type: "EYES"
          }, {
            id: 403,
            type: "EYES"
          }, {
            id: 404,
            type: "EYES"
          }, {
            id: 405,
            type: "EYES"
          }, {
            id: 406,
            type: "EYES"
          }, {
            id: 407,
            type: "EYES"
          }, {
            id: 408,
            type: "EYES"
          }, {
            id: 409,
            type: "EYES"
          }, {
            id: 410,
            type: "EYES"
          }, {
            id: 411,
            type: "EYES"
          }, {
            id: 412,
            type: "EYES"
          }, {
            id: 413,
            type: "EYES"
          }, {
            id: 414,
            type: "EYES"
          }, {
            id: 415,
            type: "EYES"
          }, {
            id: 416,
            type: "EYES"
          }, {
            id: 417,
            type: "EYES"
          }, {
            id: 418,
            type: "EYES"
          }, {
            id: 419,
            type: "EYES"
          }, {
            id: 420,
            type: "EYES"
          }, {
            id: 421,
            type: "EYES"
          }, {
            id: 422,
            type: "EYES"
          }, {
            id: 423,
            type: "EYES"
          }, {
            id: 424,
            type: "EYES"
          }, {
            id: 425,
            type: "EYES"
          }, {
            id: 426,
            type: "EYES"
          }, {
            id: 427,
            type: "EYES"
          }, {
            id: 428,
            type: "EYES"
          }, {
            id: 429,
            type: "EYES"
          }, {
            id: 430,
            type: "EYES"
          }, {
            id: 431,
            type: "EYES"
          }, {
            id: 432,
            type: "EYES"
          }, {
            id: 433,
            type: "EYES"
          }, {
            id: 434,
            type: "EYES"
          }, {
            id: 731,
            type: "EYES"
          }, {
            id: 732,
            type: "EYES"
          }, {
            id: 733,
            type: "EYES"
          }, {
            id: 734,
            type: "EYES"
          }, {
            id: 735,
            type: "EYES"
          }, {
            id: 736,
            type: "EYES"
          }, {
            id: 737,
            type: "EYES"
          }, {
            id: 738,
            type: "EYES"
          }, {
            id: 739,
            type: "EYES"
          }, {
            id: 740,
            type: "EYES"
          }, {
            id: 741,
            type: "EYES"
          }, {
            id: 742,
            type: "EYES"
          }, {
            id: 743,
            type: "EYES"
          }, {
            id: 744,
            type: "EYES"
          }, {
            id: 401,
            type: "GLASSES"
          }, {
            id: 402,
            type: "GLASSES"
          }, {
            id: 403,
            type: "GLASSES"
          }, {
            id: 404,
            type: "GLASSES"
          }, {
            id: 405,
            type: "GLASSES"
          }, {
            id: 406,
            type: "GLASSES"
          }, {
            id: 407,
            type: "GLASSES"
          }, {
            id: 409,
            type: "GLASSES"
          }, {
            id: 410,
            type: "GLASSES"
          }, {
            id: 411,
            type: "GLASSES"
          }, {
            id: 412,
            type: "GLASSES"
          }, {
            id: 413,
            type: "GLASSES"
          }, {
            id: 414,
            type: "GLASSES"
          }, {
            id: 415,
            type: "GLASSES"
          }, {
            id: 416,
            type: "GLASSES"
          }, {
            id: 417,
            type: "GLASSES"
          }, {
            id: 418,
            type: "GLASSES"
          }, {
            id: 419,
            type: "GLASSES"
          }, {
            id: 420,
            type: "GLASSES"
          }, {
            id: 421,
            type: "GLASSES"
          }, {
            id: 423,
            type: "GLASSES"
          }, {
            id: 424,
            type: "GLASSES"
          }, {
            id: 425,
            type: "GLASSES"
          }, {
            id: 427,
            type: "GLASSES"
          }, {
            id: 428,
            type: "GLASSES"
          }, {
            id: 478,
            type: "GLASSES"
          }, {
            id: 429,
            type: "GLASSES"
          }, {
            id: 430,
            type: "GLASSES"
          }, {
            id: 431,
            type: "GLASSES"
          }, {
            id: 432,
            type: "GLASSES"
          }, {
            id: 408,
            type: "GLASSES"
          }, {
            id: 426,
            type: "GLASSES"
          }, {
            id: 400,
            type: "HAT"
          }, {
            id: 401,
            type: "HAT"
          }, {
            id: 402,
            type: "HAT"
          }, {
            id: 403,
            type: "HAT"
          }, {
            id: 404,
            type: "HAT"
          }, {
            id: 405,
            type: "HAT"
          }, {
            id: 406,
            type: "HAT"
          }, {
            id: 407,
            type: "HAT"
          }, {
            id: 408,
            type: "HAT"
          }, {
            id: 409,
            type: "HAT"
          }, {
            id: 410,
            type: "HAT"
          }, {
            id: 411,
            type: "HAT"
          }, {
            id: 412,
            type: "HAT"
          }, {
            id: 413,
            type: "HAT"
          }, {
            id: 414,
            type: "HAT"
          }, {
            id: 415,
            type: "HAT"
          }, {
            id: 416,
            type: "HAT"
          }, {
            id: 417,
            type: "HAT"
          }, {
            id: 418,
            type: "HAT"
          }, {
            id: 419,
            type: "HAT"
          }, {
            id: 420,
            type: "HAT"
          }, {
            id: 421,
            type: "HAT"
          }, {
            id: 422,
            type: "HAT"
          }, {
            id: 423,
            type: "HAT"
          }, {
            id: 424,
            type: "HAT"
          }, {
            id: 425,
            type: "HAT"
          }, {
            id: 426,
            type: "HAT"
          }, {
            id: 427,
            type: "HAT"
          }, {
            id: 428,
            type: "HAT"
          }, {
            id: 429,
            type: "HAT"
          }, {
            id: 430,
            type: "HAT"
          }, {
            id: 431,
            type: "HAT"
          }, {
            id: 432,
            type: "HAT"
          }, {
            id: 433,
            type: "HAT"
          }, {
            id: 434,
            type: "HAT"
          }, {
            id: 436,
            type: "HAT"
          }, {
            id: 437,
            type: "HAT"
          }, {
            id: 438,
            type: "HAT"
          }, {
            id: 439,
            type: "HAT"
          }, {
            id: 440,
            type: "HAT"
          }, {
            id: 441,
            type: "HAT"
          }, {
            id: 442,
            type: "HAT"
          }, {
            id: 443,
            type: "HAT"
          }, {
            id: 444,
            type: "HAT"
          }, {
            id: 445,
            type: "HAT"
          }, {
            id: 446,
            type: "HAT"
          }, {
            id: 447,
            type: "HAT"
          }, {
            id: 448,
            type: "HAT"
          }, {
            id: 449,
            type: "HAT"
          }, {
            id: 450,
            type: "HAT"
          }, {
            id: 451,
            type: "HAT"
          }, {
            id: 452,
            type: "HAT"
          }, {
            id: 453,
            type: "HAT"
          }, {
            id: 454,
            type: "HAT"
          }, {
            id: 455,
            type: "HAT"
          }, {
            id: 456,
            type: "HAT"
          }, {
            id: 457,
            type: "HAT"
          }, {
            id: 458,
            type: "HAT"
          }, {
            id: 459,
            type: "HAT"
          }, {
            id: 460,
            type: "HAT"
          }, {
            id: 461,
            type: "HAT"
          }, {
            id: 462,
            type: "HAT"
          }, {
            id: 463,
            type: "HAT"
          }, {
            id: 464,
            type: "HAT"
          }, {
            id: 465,
            type: "HAT"
          }, {
            id: 466,
            type: "HAT"
          }, {
            id: 467,
            type: "HAT"
          }, {
            id: 468,
            type: "HAT"
          }, {
            id: 470,
            type: "HAT"
          }, {
            id: 731,
            type: "HAT"
          }, {
            id: 732,
            type: "HAT"
          }, {
            id: 733,
            type: "HAT"
          }, {
            id: 734,
            type: "HAT"
          }, {
            id: 735,
            type: "HAT"
          }, {
            id: 736,
            type: "HAT"
          }, {
            id: 737,
            type: "HAT"
          }, {
            id: 738,
            type: "HAT"
          }, {
            id: 739,
            type: "HAT"
          }, {
            id: 740,
            type: "HAT"
          }, {
            id: 741,
            type: "HAT"
          }, {
            id: 742,
            type: "HAT"
          }, {
            id: 743,
            type: "HAT"
          }, {
            id: 744,
            type: "HAT"
          }, {
            id: 745,
            type: "HAT"
          }, {
            id: 746,
            type: "HAT"
          }, {
            id: 747,
            type: "HAT"
          }, {
            id: 748,
            type: "HAT"
          }, {
            id: 749,
            type: "HAT"
          }, {
            id: 750,
            type: "HAT"
          }, {
            id: 751,
            type: "HAT"
          }, {
            id: 752,
            type: "HAT"
          }, {
            id: 753,
            type: "HAT"
          }, {
            id: 754,
            type: "HAT"
          }, {
            id: 755,
            type: "HAT"
          }, {
            id: 756,
            type: "HAT"
          }, {
            id: 757,
            type: "HAT"
          }, {
            id: 758,
            type: "HAT"
          }, {
            id: 759,
            type: "HAT"
          }, {
            id: 766,
            type: "HAT"
          }, {
            id: 767,
            type: "HAT"
          }, {
            id: 768,
            type: "HAT"
          }, {
            id: 769,
            type: "HAT"
          }, {
            id: 774,
            type: "HAT"
          }, {
            id: 775,
            type: "HAT"
          }, {
            id: 776,
            type: "HAT"
          }, {
            id: 777,
            type: "HAT"
          }, {
            id: 778,
            type: "HAT"
          }, {
            id: 779,
            type: "HAT"
          }, {
            id: 780,
            type: "HAT"
          }, {
            id: 781,
            type: "HAT"
          }, {
            id: 782,
            type: "HAT"
          }, {
            id: 783,
            type: "HAT"
          }, {
            id: 784,
            type: "HAT"
          }, {
            id: 785,
            type: "HAT"
          }, {
            id: 793,
            type: "HAT"
          }, {
            id: 794,
            type: "HAT"
          }, {
            id: 795,
            type: "HAT"
          }, {
            id: 796,
            type: "HAT"
          }, {
            id: 797,
            type: "HAT"
          }, {
            id: 798,
            type: "HAT"
          }, {
            id: 799,
            type: "HAT"
          }, {
            id: 800,
            type: "HAT"
          }, {
            id: 801,
            type: "HAT"
          }, {
            id: 811,
            type: "HAT"
          }, {
            id: 812,
            type: "HAT"
          }, {
            id: 400,
            type: "MOUTH"
          }, {
            id: 401,
            type: "MOUTH"
          }, {
            id: 402,
            type: "MOUTH"
          }, {
            id: 403,
            type: "MOUTH"
          }, {
            id: 404,
            type: "MOUTH"
          }, {
            id: 405,
            type: "MOUTH"
          }, {
            id: 406,
            type: "MOUTH"
          }],
          cc: "<style>\n    </style><div id=\"div_map\"></div><p id=\"exp_time\" class=\"expiry-date\">Activation: 29/10/2025</p>",
          mb: "<div class='info-message success' style='background-color: rgba(46, 204, 113, 0.1); border-radius: 8px; padding: 15px; margin: 10px 0; border: 1px solid rgba(46, 204, 113, 0.3);'><h4 class='center' style='color: #2ecc71; margin-top: 0;'>مرحباً YT</h4><p style='text-align: right; direction: rtl; margin-bottom: 10px;'>شكراً لاشتراكك في النسخة المميزة! يمكنك الآن الاستمتاع بجميع الميزات والأزياء المتاحة.</p><p style='text-align: left; direction: ltr; margin-bottom: 0;'>Thank you for your premium subscription! You can now enjoy all available features and skins.</p></div>",
          cm: "",
          cr: "",
          ccc: "iq",
          ccg: ["Will Kill and Headshot statistics be removed?", "There was a connection problem!", "Your account has been locked.", "RESPAWN", "Full Screen", "In the game", "⚙️ Settings", "ID", "ID COPY", "COPY ID", "Country", "Remember kill and headshot counts", "ON/OFF", "Background image", "COPY", "Vietnam", "Thailand", "Cambodia", "Indonesia", "Singapore", "Japan", "Mexico", "Brazil", "Canada", "Germany", "France", "England", "Australia", "USA", "Portugal", "Shortcut", "Dark blue sky", "Purple sky", "Clouds", "💡", "Turkey", "Arabs"],
          is_subscriber: true,
          show_discord: false,
          player_name: "YT",
          server_time: "2030-10-03 14:24:14"
        };
        const vF45 = (p929, p930) => {
          if (Array.isArray(p930)) {
            return p930.slice();
          }
          if (p930 && typeof p930 === "object") {
            const vO51 = {
              ...p929
            };
            for (const v1139 of Object.keys(p930)) {
              if (v1139 === "propertyList") {
                const v1140 = Array.isArray(p929?.propertyList) ? p929.propertyList : [];
                const v1141 = Array.isArray(p930.propertyList) ? p930.propertyList : [];
                vO51.propertyList = v1140.concat(v1141);
                continue;
              }
              vO51[v1139] = vF45(p929 ? p929[v1139] : undefined, p930[v1139]);
            }
            return vO51;
          }
          if (p930 === undefined) {
            return p929;
          } else {
            return p930;
          }
        };
        v1138 = vF45(v1138 || {}, vO50);
      } catch (e59) {}
      _0x1a98d3.pL = [];
      _0x1a98d3.v_z = _0x2c9ba1.vs;
      localStorage.setItem("SaveGamewft", JSON.stringify(_0x1a98d3));
      if (_0x1a98d3.dg != null && _0x2c9ba1.dsg.join() != _0x1a98d3.dg.join() || _0x1a98d3.dg == null && _0x2c9ba1.dsg.join() != "") {
        _0x1a98d3.dg = _0x2c9ba1.dsg;
        localStorage.setItem("SaveGamewft", JSON.stringify(_0x1a98d3));
        window.location.reload();
      }
      if (_0x3f4d06 != _0x1a98d3.v_z) {
        localStorage.removeItem("wftsw");
        window.location.reload();
      }
      document.getElementById("loa831pibur0w4gv");
      window.currentDisplayMode = "timmap";
      if (typeof window.servers === "undefined") {
        window.servers = {
          Api_listServer: []
        };
      }
      function _0x2cde8c() {
        try {
          const _0x27e99a = localStorage.getItem("cachedServers");
          if (_0x27e99a) {
            const _0x1f265f = JSON.parse(_0x27e99a);
            const _0x45cf81 = _0x1f265f.timestamp;
            const _0x181dc5 = new Date().getTime();
            if (_0x181dc5 - _0x45cf81 < 3600000) {
              window.servers = _0x1f265f.data;
              return true;
            }
          }
        } catch (_0x35d812) {}
        return false;
      }
      async function _0xf6e63b() {
        try {
          const _0x32ec2d = await fetch("https://wormx.store/2025/api/server.php");
          if (_0x32ec2d.ok) {
            const _0x4617f2 = await _0x32ec2d.json();
            if (_0x4617f2.success && Array.isArray(_0x4617f2.servers)) {
              window.servers.Api_listServer = _0x4617f2.servers.filter(_0x1058d8 => _0x1058d8.serverUrl);
              try {
                const _0x5eec04 = {
                  timestamp: new Date().getTime(),
                  data: window.servers
                };
                localStorage.setItem("cachedServers", JSON.stringify(_0x5eec04));
              } catch (_0x3e7392) {}
              return true;
            }
          }
        } catch (_0x2a8843) {
          setTimeout(_0xf6e63b, 5000);
        }
        return false;
      }
      function _0xe651e2() {
        setInterval(() => {
          if (typeof loadUsers === "function") {
            loadUsers();
          }
          _0xf6e63b().then(_0x3a4444 => {
            if (_0x3a4444 && typeof createServers === "function") {
              createServers();
            }
          });
        }, 300000);
      }
      async function _0xf218bd() {
        const _0x4181f5 = _0x2cde8c();
        if (typeof loadUsers === "function") {
          loadUsers();
        }
        const _0xbaa9d4 = await _0xf6e63b();
        _0xe651e2();
        return _0x4181f5 || _0xbaa9d4;
      }
      if (_0x2c9ba1.e === "not_connect") {
        $(".description-text").html(localStorage.getItem("ccg_2"));
      } else {
        if (_0x2c9ba1.e === "not_empty") {
          $(".description-text").html(_0x2c9ba1.cc);
          if (_0x2c9ba1.cr != "") {
            $("#loa831pibur0w4gv").html("");
          }
          _0x4bb5d0();
        } else if (_0x2c9ba1.e === "empty" || _0x2c9ba1.e === "new") {
          _0x33c7d0();
        }
        _0x1a98d3.pL = [..._0x2c9ba1.propertyList];
      }
      function _0x4bb5d0() {
        $(".description-text").append("\n<div class=\"title-wormate-server\">\n          🗺️ ALL SERVERS  \n        </div>\n        \n        <div class=\"description-text-hiep\">\n \n    <div style=\"position:sticky; top:0; z-index:100; background:#242424;\">\n    <BR>\n    <ul style=\"margin-top:5px\" class=\"ui-tabs-nav\">\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive0 ui-tab-active\" style=\"margin:-5px\">\n        <a><span class=\"flag br\" value=\"' + gameSettings.s_l + '/images/server-flags/tur.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive1\" style=\"margin:-5px\">\n        <a><span class=\"flag mx\" value=\"' + gameSettings.s_l + '/images/cors-proxy.phpimg=flg/mx.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive2\" style=\"margin:-5px\">\n        <a><span class=\"flag us\" value=\"' + gameSettings.s_l + '/images/cors-proxy.phpimg=flg/us.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive3\" style=\"margin:-5px\">\n        <a><span class=\"flag ca\" value=\"' + gameSettings.s_l + '/images/cors-proxy.phpimg=flg/ca.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive4\" style=\"margin:-5px\">\n        <a><span class=\"flag de\" value=\"' + gameSettings.s_l + '/images/cors-proxy.phpimg=flg/de.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive5\" style=\"margin:-5px\">\n        <a><span class=\"flag fr\" value=\"' + gameSettings.s_l + '/images/cors-proxy.phpimg=flg/fr.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive6\" style=\"margin:-5px\">\n        <a><span class=\"flag sg\" value=\"' + gameSettings.s_l + '/images/cors-proxy.phpimg=flg/sg.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive7\" style=\"margin:-5px\">\n        <a><span class=\"flag jp\" value=\"' + gameSettings.s_l + '/images/cors-proxy.phpimg=flg/jp.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive8\" style=\"margin:-5px\">\n        <a><span class=\"flag au\" value=\"' + gameSettings.s_l + '/images/cors-proxy.phpimg=flg/au.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive9\" style=\"margin:-5px\">\n        <a><span class=\"flag gb\" value=\"' + gameSettings.s_l + '/images/cors-proxy.phpimg=flg/gb.png\"></span></a>\n      </li>\n    </ul>\n      \n      <!-- زر التبديل أسفل الأعلام مباشرة -->\n      <div style=\"text-align: center; margin: 2px 0; padding: 2px;\">\n        <button id=\"sort-toggle\" style=\"font-size: 10px; padding: 1px 6px; background-color: #333; color: #ddd; border: 1px solid #666; border-radius: 3px; cursor: pointer; outline: none;\">Timmap Servers</button>\n      </div>\n      \n      <div class=\"gachngang\"></div>\n      <div class=\"server-header\">\n        <div class=\"header-name\">SERVER</div>\n        <div class=\"header-region\">REGION</div>\n        <div class=\"header-status\">STATUS</div>\n        <div class=\"header-score\">SCORE</div>\n      </div>\n      <div class=\"gachngang\"></div>\n    </div>\n    \n    <!-- إضافة صورة الخلفية هنا قبل حاوية السيرفرات -->\n    <div class=\"background-image-container\">\n      <img src=\"https://wormx.store/images/cors-proxy.phpimg=Background/serverbg.jpg\" class=\"background-image\">\n    </div>\n    \n    <div class=\"servers-container\">\n      <div class=\"servers-peru\"></div>\n      <div class=\"servers-mexico\" style=\"display:none\"></div>\n      <div class=\"servers-eeuu\" style=\"display:none\"></div>\n      <div class=\"servers-canada\" style=\"display:none\"></div>\n      <div class=\"servers-germania\" style=\"display:none\"></div>\n      <div class=\"servers-francia\" style=\"display:none\"></div>\n      <div class=\"servers-singapur\" style=\"display:none\"></div>\n      <div class=\"servers-japon\" style=\"display:none\"></div>\n      <div class=\"servers-australia\" style=\"display:none\"></div>\n      <div class=\"servers-granbretana\" style=\"display:none\"></div>\n    </div>\n  </div>\n</div>\n  ");
        _0xe8047c();
      }
      function _0x33c7d0() {
        $(".description-text").html("\n<div class=\"title-wormate-server\">\n          🗺️ ALL SERVERS  \n        </div>\n        \n        <div class=\"description-text-hiep\">\n \n    <div style=\"position:sticky; top:0; z-index:100; background:#242424;\">\n    <BR>\n    <ul style=\"margin-top:5px\" class=\"ui-tabs-nav\">\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive0 ui-tab-active\" style=\"margin:-5px\">\n        <a><span class=\"flag br\" value=\"' + gameSettings.s_l + '/images/server-flags/tur.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive1\" style=\"margin:-5px\">\n        <a><span class=\"flag mx\" value=\"' + gameSettings.s_l + '/images/cors-proxy.phpimg=flg/mx.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive2\" style=\"margin:-5px\">\n        <a><span class=\"flag us\" value=\"' + gameSettings.s_l + '/images/cors-proxy.phpimg=flg/us.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive3\" style=\"margin:-5px\">\n        <a><span class=\"flag ca\" value=\"' + gameSettings.s_l + '/images/cors-proxy.phpimg=flg/ca.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive4\" style=\"margin:-5px\">\n        <a><span class=\"flag de\" value=\"' + gameSettings.s_l + '/images/cors-proxy.phpimg=flg/de.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive5\" style=\"margin:-5px\">\n        <a><span class=\"flag fr\" value=\"' + gameSettings.s_l + '/images/cors-proxy.phpimg=flg/fr.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive6\" style=\"margin:-5px\">\n        <a><span class=\"flag sg\" value=\"' + gameSettings.s_l + '/images/cors-proxy.phpimg=flg/sg.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive7\" style=\"margin:-5px\">\n        <a><span class=\"flag jp\" value=\"' + gameSettings.s_l + '/images/cors-proxy.phpimg=flg/jp.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive8\" style=\"margin:-5px\">\n        <a><span class=\"flag au\" value=\"' + gameSettings.s_l + '/images/cors-proxy.phpimg=flg/au.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive9\" style=\"margin:-5px\">\n        <a><span class=\"flag gb\" value=\"' + gameSettings.s_l + '/images/cors-proxy.phpimg=flg/gb.png\"></span></a>\n      </li>\n    </ul>\n      \n      <!-- زر التبديل أسفل الأعلام مباشرة -->\n      <div style=\"text-align: center; margin: 2px 0; padding: 2px;\">\n        <button id=\"sort-toggle\" style=\"font-size: 10px; padding: 1px 6px; background-color: #333; color: #ddd; border: 1px solid #666; border-radius: 3px; cursor: pointer; outline: none;\">Timmap Servers</button>\n      </div>\n      \n      <div class=\"gachngang\"></div>\n      <div class=\"server-header\">\n        <div class=\"header-name\">SERVER</div>\n        <div class=\"header-region\">REGION</div>\n        <div class=\"header-status\">STATUS</div>\n        <div class=\"header-score\">SCORE</div>\n      </div>\n      <div class=\"gachngang\"></div>\n    </div>\n    \n    <!-- إضافة صورة الخلفية هنا قبل حاوية السيرفرات -->\n    <div class=\"background-image-container\">\n      <img src=\"https://wormx.store/images/cors-proxy.phpimg=Background/serverbg.jpg\" class=\"background-image\">\n    </div>\n    \n    <div class=\"servers-container\">\n      <div class=\"servers-peru\"></div>\n      <div class=\"servers-mexico\" style=\"display:none\"></div>\n      <div class=\"servers-eeuu\" style=\"display:none\"></div>\n      <div class=\"servers-canada\" style=\"display:none\"></div>\n      <div class=\"servers-germania\" style=\"display:none\"></div>\n      <div class=\"servers-francia\" style=\"display:none\"></div>\n      <div class=\"servers-singapur\" style=\"display:none\"></div>\n      <div class=\"servers-japon\" style=\"display:none\"></div>\n      <div class=\"servers-australia\" style=\"display:none\"></div>\n      <div class=\"servers-granbretana\" style=\"display:none\"></div>\n    </div>\n  </div>\n</div>\n  ");
        _0xe8047c();
      }
      function _0xe8047c() {
        $("body").append("<div id=\"custom-tooltip\" style=\"display: none; position: absolute; z-index: 9999; background: rgba(0,0,0,0.9); padding: 5px 10px; border-radius: 4px; font-size: 10px; pointer-events: none; text-align: center;\"><div style=\"display: flex; justify-content: space-between; align-items: center;\"><span style=\"color: #ffd700; text-align: right;\">TimMap Servers </span><span style=\"color: white; margin: 0 5px;\">⟷ </span><span style=\"color: #ffd700; text-align: left;\">WormWorld Servers</span></div></div>");
        $("body").append("<div id=\"image-tooltip\" class=\"image-tooltip\"></div>");
        window.currentDisplayMode = "timmap";
        $("#sort-toggle").removeClass("wormworld").text("Timmap Servers");
        function _0x4ef3a5() {
          const _0x2a0868 = {
            mx: "servers-mexico",
            br: "servers-peru",
            us: "servers-eeuu",
            ca: "servers-canada",
            de: "servers-germania",
            fr: "servers-francia",
            sg: "servers-singapur",
            jp: "servers-japon",
            au: "servers-australia",
            gb: "servers-granbretana"
          };
          $("<style>").prop("type", "text/css").html("\n          .ui-tabs-nav .ui-tab:hover, \n          .ui-tabs-nav .ui-tab.ui-tab-active {\n            background-color: white !important;\n          }\n          .ui-tabs-nav .ui-tab {\n            border-color: white !important;\n          }\n        ").appendTo("head");
          Object.keys(_0x2a0868).forEach((_0x257188, _0x3f291d) => {
            $("." + _0x257188).on("click", function () {
              $(".ui-tabs-nav .ui-tab").removeClass("ui-tab-active");
              $(this).closest(".ui-tab").addClass("ui-tab-active");
              $("#addflag").attr("class", "flag " + _0x257188);
              $(".servers-peru, .servers-mexico, .servers-eeuu, .servers-canada, .servers-germania, .servers-francia, .servers-singapur, .servers-japon, .servers-australia, .servers-granbretana").hide();
              $("." + _0x2a0868[_0x257188]).fadeIn(300);
            });
          });
        }
        function _0x5c117b() {
          $(".servers-peru, .servers-mexico, .servers-eeuu, .servers-canada, .servers-germania, .servers-francia, .servers-singapur, .servers-japon, .servers-australia, .servers-granbretana").empty();
          const _0x321745 = {
            peru: "DE",
            mexico: "UAE",
            eeuu: "USA",
            canada: "LT",
            germania: "BR",
            francia: "FR",
            singapur: "SG",
            japon: "JP",
            australia: "IN",
            granbretana: "UK"
          };
          const _0xfb2d3c = {
            peru: _0x1a98d3.s_l + "/images/cors-proxy.phpimg=flg/de.png",
            mexico: _0x1a98d3.s_l + "/images/cors-proxy.phpimg=flg/mx.png",
            eeuu: _0x1a98d3.s_l + "/images/cors-proxy.phpimg=flg/us.png",
            canada: _0x1a98d3.s_l + "/images/cors-proxy.phpimg=flg/ca.png",
            germania: _0x1a98d3.s_l + "/images/server-flags/tur.png",
            francia: _0x1a98d3.s_l + "/images/cors-proxy.phpimg=flg/fr.png",
            singapur: _0x1a98d3.s_l + "/images/cors-proxy.phpimg=flg/sg.png",
            japon: _0x1a98d3.s_l + "/images/cors-proxy.phpimg=flg/jp.png",
            australia: _0x1a98d3.s_l + "/images/cors-proxy.phpimg=flg/au.png",
            granbretana: _0x1a98d3.s_l + "/images/cors-proxy.phpimg=flg/gb.png"
          };
          const _0x5adcf3 = {};
          Object.keys(_0x321745).forEach(_0x4890a5 => {
            _0x5adcf3[_0x4890a5] = [];
          });
          if (window.servers && window.servers.Api_listServer && window.servers.Api_listServer.length > 0) {
            let _0xab13ee = window.currentDisplayMode || "timmap";
            window.servers.Api_listServer.forEach(_0x20112f => {
              let _0x52fed1 = null;
              if (_0xab13ee === "timmap" && _0x20112f.timmap) {
                _0x52fed1 = _0x20112f.timmap;
              } else if (_0xab13ee === "wormworld" && _0x20112f.wormworld) {
                _0x52fed1 = _0x20112f.wormworld;
              }
              if (_0x52fed1 && _0x5adcf3[_0x20112f.region]) {
                _0x20112f.displayNumber = _0x52fed1;
                _0x5adcf3[_0x20112f.region].push(_0x20112f);
              }
            });
            Object.keys(_0x5adcf3).forEach(_0xf7df86 => {
              const _0x3ca86c = _0x5adcf3[_0xf7df86];
              const _0x54236c = _0x321745[_0xf7df86];
              if (_0x3ca86c.length > 0) {
                _0x3ca86c.sort((_0x46d500, _0x287b06) => (_0x46d500.displayNumber || 0) - (_0x287b06.displayNumber || 0));
                for (let _0x1b7ef8 = 0; _0x1b7ef8 < _0x3ca86c.length; _0x1b7ef8++) {
                  const _0x2b5632 = _0x3ca86c[_0x1b7ef8];
                  const _0x2ee87c = _0x2b5632.displayNumber;
                  const _0x55bfdc = _0x2b5632.image || _0x1a98d3.s_l + "/images/cors-proxy.phpimg=flg/default-server.png";
                  const _0x3bf653 = _0x2b5632.imageUrl || "";
                  const _0x27323b = $("<div></div>").addClass("selectSala").attr({
                    id: _0xf7df86,
                    value: _0x2b5632.serverUrl,
                    "data-server-name": _0x2b5632.name || "Server " + _0x2ee87c,
                    "data-region-name": _0x54236c,
                    "data-region-flag": _0xfb2d3c[_0xf7df86],
                    "data-server-number": _0x2ee87c,
                    "data-server-image": _0x55bfdc
                  });
                  const _0x16d8cb = _0x3bf653 && _0x3bf653.trim() !== "";
                  const _0x2697a4 = $("<div></div>").addClass("server-image");
                  if (_0x16d8cb) {
                    const _0xced140 = _0x2b5632.name || "Server " + _0x2ee87c;
                    _0x2697a4.addClass("server-image-with-link").data("url", _0x3bf653).attr("data-server-name", _0xced140);
                    _0x2697a4.on("click", function (_0x1e83be) {
                      _0x1e83be.stopPropagation();
                      const _0x4c2565 = $(this).data("url");
                      if (_0x4c2565) {
                        window.open(_0x4c2565, "_blank");
                      }
                    });
                    _0x2697a4.hover(function () {
                      const _0x26bcf7 = $(this).data("server-name");
                      $("#server-link-tooltip").remove();
                      $("<div id=\"server-link-tooltip\"></div>").text("Visit " + _0x26bcf7 + " page").css({
                        position: "fixed",
                        background: "rgba(0,0,0,0.9)",
                        color: "white",
                        padding: "5px 10px",
                        "border-radius": "4px",
                        "font-size": "11px",
                        "white-space": "nowrap",
                        "z-index": "99999",
                        "pointer-events": "none",
                        "box-shadow": "0 0 5px rgba(0,0,0,0.5)"
                      }).appendTo("body");
                      const _0x27cf39 = $(this).offset();
                      const _0x41218a = $(this).width();
                      const _0x53038f = $(this).height();
                      const _0x203e43 = $("#server-link-tooltip").outerWidth();
                      $("#server-link-tooltip").css({
                        left: _0x27cf39.left + _0x41218a / 2 - _0x203e43 / 2,
                        top: _0x27cf39.top + _0x53038f + 10
                      }).fadeIn(200);
                    }, function () {
                      $("#server-link-tooltip").fadeOut(200, function () {
                        $(this).remove();
                      });
                    });
                  }
                  _0x2697a4.append($("<img>").attr("src", _0x55bfdc));
                  const _0x577e09 = $("<div></div>").addClass("server-info").append($("<span></span>").addClass("server-number").text(_0x2ee87c + "."), $("<span></span>").addClass("server-name").text(_0x2b5632.name || "Server " + _0x2ee87c));
                  const _0x53a99c = $("<div></div>").addClass("server-region").text(_0x54236c + " " + _0x2ee87c);
                  const _0x18fa29 = $("<div></div>").addClass("server-status").append($("<span></span>").addClass("green-dot"));
                  const _0x113cb5 = $("<div></div>").addClass("server-score");
                  _0x27323b.append(_0x2697a4, _0x577e09, _0x53a99c, _0x18fa29, _0x113cb5);
                  $(".servers-" + _0xf7df86).append(_0x27323b);
                  _0x27323b.click(function () {
                    const _0x1e57b1 = $(this).attr("data-region-name");
                    const _0x5c3570 = $(this).attr("data-server-number");
                    const _0x51efba = $(this).attr("value");
                    const _0x3db2f5 = $(this).attr("data-region-flag");
                    const _0x432726 = $(this).attr("data-server-image");
                    const _0xbcf504 = _0x1e57b1 + " " + _0x5c3570;
                    window.realServerName = _0xbcf504;
                    window.selectedServerInfo = {
                      regionName: _0x1e57b1,
                      serverNumber: _0x5c3570,
                      regionFlag: _0x3db2f5,
                      serverImage: _0x432726,
                      displayName: _0xbcf504
                    };
                    $("#port_id_s").val(_0x51efba);
                    $("#port_name_s").val(_0xbcf504);
                    $("#port_id").val($("#port_id_s").val());
                    $("#port_name").val($("#port_name_s").val());
                    try {
                      const _0x204811 = JSON.parse(localStorage.getItem("SaveGamewft") || "{}");
                      _0x204811.realServerName = _0xbcf504;
                      localStorage.setItem("SaveGamewft", JSON.stringify(_0x204811));
                    } catch (_0x5f4f5f) {
                      console.error("خطأ في حفظ اسم السيرفر:", _0x5f4f5f);
                    }
                    if (typeof vO3 !== "undefined") {
                      if (vO3.containerImgS && vO3.onclickServer) {
                        vO3.containerImgS.texture = vO3.onclickServer;
                      }
                    }
                    if (typeof retundFlagError === "function") {
                      retundFlagError();
                    }
                    window.server_url = _0x51efba;
                    $("#mm-action-play").click();
                    $("#adbl-continue").click();
                    setTimeout(_0x52f296, 500);
                    setTimeout(_0x52f296, 2000);
                  });
                }
              } else {
                $(".servers-" + _0xf7df86).append("\n            <div style=\"text-align:center; padding:20px; color:#aaa;\">\n              No servers available in this region\n            </div>\n          ");
              }
            });
          } else {
            $(".servers-peru, .servers-mexico, .servers-eeuu, .servers-canada, .servers-germania, .servers-francia, .servers-singapur, .servers-japon, .servers-australia, .servers-granbretana").html("\n        <div style=\"text-align:center; padding:20px; color:#aaa;\">\n          Loading servers... Please wait.\n        </div>\n      ");
          }
          _0x4c9ec5();
        }
        function _0x209649(_0x146868) {
          if (_0x146868 >= 1000000) {
            return (_0x146868 / 1000000).toFixed(2) + "M";
          } else if (_0x146868 >= 1000) {
            return (_0x146868 / 1000).toFixed(1) + "K";
          } else {
            return _0x146868.toFixed(0);
          }
        }
        function _0x52f296() {
          if (!window.realServerName) {
            return;
          }
          document.querySelectorAll("text, span, div").forEach(_0x307193 => {
            const _0x402810 = _0x307193.textContent || "";
            if (_0x402810.includes("wss://") || _0x402810.includes(".wormate.io") || _0x402810.includes("/wormy") || _0x402810.match(/[a-z]+-\d+/i)) {
              _0x307193.textContent = window.realServerName;
              if (_0x307193.text !== undefined) {
                _0x307193.text = window.realServerName;
              }
            }
          });
          if (window.mapText && window.mapText.text !== undefined) {
            window.mapText.text = window.realServerName;
          }
        }
        function _0x4a9d2a() {
          try {
            const _0x4c9de3 = window.savedData || window.savedData;
            if (_0x4c9de3 && typeof _0x4c9de3.Bq === "function") {
              const _0x59c0d3 = _0x4c9de3.Bq;
              _0x4c9de3.Bq = function (_0x30f240, _0x4d6c88) {
                const _0x50bcc8 = _0x59c0d3.apply(this, arguments);
                setTimeout(function () {
                  try {
                    const _0x44abd1 = window.realServerName || function () {
                      try {
                        const _0x141e76 = JSON.parse(localStorage.getItem("SaveGamewft") || "{}");
                        return _0x141e76.realServerName || "";
                      } catch (_0x3a7b43) {
                        return "";
                      }
                    }();
                    if (window.mapText && window.mapText.text && _0x44abd1) {
                      window.mapText.text = _0x44abd1;
                    }
                  } catch (_0x5717a5) {
                    console.error("خطأ في تحديث عرض اسم السيرفر:", _0x5717a5);
                  }
                }, 100);
                return _0x50bcc8;
              };
              console.log("✅ تم تعديل دالة عرض اسم السيرفر بنجاح");
            }
          } catch (_0x1389e9) {
            console.error("❌ خطأ في تعديل دالة عرض اسم السيرفر:", _0x1389e9);
          }
        }
        window._0x4c9ec5 = function () {
          fetch("https://wormmedia.xyz:4000/api/live-scores?t=" + Date.now()).then(_0x3d659d => _0x3d659d.json()).then(_0x277a02 => {
            if (_0x277a02 && _0x277a02.success && Array.isArray(_0x277a02.data)) {
              $(".selectSala").each(function () {
                const _0x721a6e = $(this);
                const _0x32f759 = _0x721a6e.attr("value").trim();
                const _0x2b6815 = _0x277a02.data.find(_0x5484b9 => _0x5484b9.serverUrl === _0x32f759);
                _0x721a6e.find(".green-dot").css("display", "none");
                if (_0x2b6815 && _0x2b6815.YT.length > 0) {
                  _0x721a6e.data("YT", JSON.stringify(_0x2b6815.YT));
                  const _0x44adf6 = _0x2b6815.YT[0];
                  const _0x3dfe2e = _0x209649(_0x44adf6.score);
                  const _0x1b70bc = _0x44adf6.score >= 1000000;
                  _0x721a6e.find(".server-score").html("<span class=\"score-display " + (_0x1b70bc ? "million" : "regular") + "\">" + _0x3dfe2e + "</span>");
                  const _0x582d71 = _0x2b6815.YT.filter(_0xdda596 => _0xdda596.score >= 1000000).length;
                  if (_0x582d71 >= 4) {
                    _0x721a6e.find(".green-dot").css("display", "block");
                  }
                } else {
                  _0x721a6e.find(".server-score").html("-");
                }
              });
            }
          }).catch(_0x1c7a00 => console.error("API error:", _0x1c7a00));
        };
        function _0x413cd0() {
          $(document).on("mouseenter", ".server-score", function (_0x31e397) {
            $(".player-tooltip").remove();
            const _0x6c3cd8 = $(this).closest(".selectSala");
            const _0xad9f7a = _0x6c3cd8.data("YT");
            if (!_0xad9f7a) {
              return;
            }
            let _0x5316 = [];
            try {
              _0x5316 = typeof _0xad9f7a === "string" ? JSON.parse(_0xad9f7a) : _0xad9f7a;
            } catch (_0x5b3b3b) {
              return;
            }
            if (!_0x5316 || !_0x5316.length) {
              return;
            }
            let _0x3cb1ac = "<table>";
            const _0x70161b = Math.min(_0x5316.length, 10);
            for (let _0xb2e8af = 0; _0xb2e8af < _0x70161b; _0xb2e8af++) {
              const _0x2a2fc5 = _0x5316[_0xb2e8af];
              _0x3cb1ac += "<tr>\n          <td class=\"rank\">" + (_0xb2e8af + 1) + "-</td>\n          <td class=\"name\">" + (_0x2a2fc5.name || "Player_" + _0x2a2fc5.id) + "</td>\n          <td class=\"score\">" + _0x209649(_0x2a2fc5.score) + "</td>\n        </tr>";
            }
            _0x3cb1ac += "</table>";
            const _0x12730e = $("<div class=\"player-tooltip\"></div>").html(_0x3cb1ac).css({
              top: _0x31e397.pageY + 10,
              left: _0x31e397.pageX + 10
            });
            $("body").append(_0x12730e);
            $(this).data("tooltip", _0x12730e);
          });
          $(document).on("mouseleave", ".server-score", function () {
            const _0x386dff = $(this).data("tooltip");
            if (_0x386dff) {
              setTimeout(function () {
                _0x386dff.remove();
              }, 100);
            }
          });
          $(document).on("mousemove", ".server-score", function (_0x374284) {
            const _0x4db05d = $(this).data("tooltip");
            if (_0x4db05d) {
              _0x4db05d.css({
                top: _0x374284.pageY + 10,
                left: _0x374284.pageX + 10
              });
            }
          });
        }
        $("#sort-toggle").on({
          mouseenter: function (_0x128aa6) {
            var _0x3547ee = $("#custom-tooltip");
            var _0x58f874 = $(this).offset();
            var _0x420138 = $(this).outerWidth();
            var _0x593fd1 = _0x3547ee.outerWidth();
            _0x3547ee.css({
              left: _0x58f874.left + _0x420138 / 2 - _0x593fd1 / 2,
              top: _0x58f874.top + 30
            }).fadeIn(200);
          },
          mouseleave: function () {
            $("#custom-tooltip").fadeOut(200);
          }
        });
        $("#sort-toggle").click(function () {
          if (window.currentDisplayMode === "timmap") {
            window.currentDisplayMode = "wormworld";
            $(this).addClass("wormworld").text("WormWorld Servers");
            $(".server-number").css("color", "#00a8ff");
          } else {
            window.currentDisplayMode = "timmap";
            $(this).removeClass("wormworld").text("Timmap Servers");
            $(".server-number").css("color", "#f00");
          }
          _0x5c117b();
          setTimeout(function () {
            if (window.currentDisplayMode === "wormworld") {
              $(".server-number").css("color", "#00a8ff");
            } else {
              $(".server-number").css("color", "#f00");
            }
          }, 100);
        });
        function _0x4d71e8(_0x28fb67) {
          if (!window.servers || !window.servers.Api_listServer || window.servers.Api_listServer.length === 0) {
            return;
          }
          $(".selectSala").hide();
          Object.keys(regionNames).forEach(_0x1fdf2c => {
            const _0x398fb2 = window.servers.Api_listServer.filter(_0x571f64 => _0x571f64.region === _0x1fdf2c);
            if (_0x398fb2.length > 0) {
              const _0x2f1c8e = _0x398fb2.filter(_0x8c3b8 => {
                if (_0x28fb67 === "timmap") {
                  return _0x8c3b8.timmap;
                } else {
                  return _0x8c3b8.wormworld;
                }
              });
              _0x2f1c8e.sort((_0x5efc77, _0x1baab1) => {
                const _0x394ec2 = _0x28fb67 === "timmap" ? _0x5efc77.timmap || 0 : _0x5efc77.wormworld || 0;
                const _0x4cdfc8 = _0x28fb67 === "timmap" ? _0x1baab1.timmap || 0 : _0x1baab1.wormworld || 0;
                return _0x394ec2 - _0x4cdfc8;
              });
              _0x2f1c8e.forEach(_0x47115b => {
                const _0x5e74e1 = _0x28fb67 === "timmap" ? _0x47115b.timmap : _0x47115b.wormworld;
                const _0x35445f = ".selectSala[value=\"" + _0x47115b.serverUrl + "\"]";
                const _0x59a920 = $(_0x35445f);
                if (_0x59a920.length) {
                  _0x59a920.find(".server-number").text(_0x5e74e1 + ".");
                  _0x59a920.find(".server-region").text(_0x59a920.attr("data-region-name") + " " + _0x5e74e1);
                  _0x59a920.attr("data-server-number", _0x5e74e1);
                  if ($(".servers-" + _0x1fdf2c).is(":visible")) {
                    _0x59a920.show();
                  }
                }
              });
            }
          });
        }
        function _0x349dd5() {
          if (window.currentDisplayMode === "wormworld") {
            $(".server-number").css("color", "#00a8ff");
          } else {
            $(".server-number").css("color", "#f00");
          }
        }
        $(".ui-tab").on("click", _0x4ef3a5);
        $(".flag").click(function () {
          let _0x39c64b = $(this).attr("value");
          if (typeof theoKzObjects !== "undefined") {
            theoKzObjects.flag = _0x39c64b;
          }
          if (typeof vO3 !== "undefined" && vO3.containerImgS) {
            vO3.containerImgS.texture = vO3.onclickServer;
          }
          if (typeof retundFlagError === "function") {
            retundFlagError();
          }
        });
        _0x4ef3a5();
        _0x413cd0();
        _0x4a9d2a();
        _0xf218bd().then(_0x15655e => {
          if (_0x15655e) {
            _0x5c117b();
            setTimeout(function () {
              let _0x46a116 = 0;
              let _0x227b67 = setInterval(function () {
                if (_0x46a116 >= 6) {
                  clearInterval(_0x227b67);
                  window.currentDisplayMode = "timmap";
                  $("#sort-toggle").removeClass("wormworld").text("Timmap Servers");
                  $(".server-number").css("color", "#f00");
                  _0x5c117b();
                  return;
                }
                if (_0x46a116 % 2 === 0) {
                  window.currentDisplayMode = "wormworld";
                  $("#sort-toggle").addClass("wormworld").text("WormWorld Servers");
                  $(".server-number").css("color", "#00a8ff");
                } else {
                  window.currentDisplayMode = "timmap";
                  $("#sort-toggle").removeClass("wormworld").text("Timmap Servers");
                  $(".server-number").css("color", "#f00");
                }
                if (_0x46a116 === 0 || _0x46a116 === 1) {
                  _0x5c117b();
                }
                _0x46a116++;
              }, 700);
            }, 1500);
          }
        });
      }
      _0x60a66d(_0x1e5104);
      window.PerformanceMonitor = {
        lastTime: performance.now(),
        frameCount: 0,
        fps: 0,
        cpuUsage: 0,
        fpsDisplay: null,
        cpuDisplay: null,
        isFpsVisible: false,
        isCpuVisible: false,
        cpuSamples: [],
        cpuSampleSize: 10,
        lastCpuTime: 0,
        isInitialized: false,
        _cpuMonitoringInterval: null,
        _animFrameId: null,
        init() {
          if (this.isInitialized) {
            return;
          }
          this.isInitialized = true;
          const _0x2fcd0a = localStorage.getItem("showFpsCpu");
          if (_0x2fcd0a !== null) {
            this.isFpsVisible = _0x2fcd0a === "true";
            this.isCpuVisible = _0x2fcd0a === "true";
          }
          this.createDisplayElements();
          if (this.isFpsVisible || this.isCpuVisible) {
            this.startAllMonitoring();
          }
          this.setupKeyboardControls();
          this.updateDisplays();
          this.setupToggleButton();
        },
        startAllMonitoring() {
          if (this.isFpsVisible && !this._animFrameId) {
            this.startMonitoring();
          }
          if (this.isCpuVisible && !this._cpuMonitoringInterval) {
            this.startCpuMonitoring();
          }
        },
        stopAllMonitoring() {
          if (this._cpuMonitoringInterval) {
            console.log("Stopping CPU monitoring completely");
            clearInterval(this._cpuMonitoringInterval);
            this._cpuMonitoringInterval = null;
          }
          if (this._animFrameId) {
            console.log("Stopping FPS monitoring completely");
            cancelAnimationFrame(this._animFrameId);
            this._animFrameId = null;
          }
        },
        setupToggleButton() {
          const _0x2bbbdb = document.getElementById("performance-monitor-toggle");
          if (_0x2bbbdb) {
            _0x2bbbdb.checked = this.isFpsVisible || this.isCpuVisible;
            _0x2bbbdb.addEventListener("change", () => {
              const _0x5ba8ca = _0x2bbbdb.checked;
              this.toggle(_0x5ba8ca);
            });
          } else {
            setTimeout(() => {
              const _0x3d8383 = document.getElementById("performance-monitor-toggle");
              if (_0x3d8383) {
                _0x3d8383.checked = this.isFpsVisible || this.isCpuVisible;
                _0x3d8383.addEventListener("change", () => {
                  this.toggle(_0x3d8383.checked);
                });
              }
            }, 1000);
          }
        },
        createDisplayElements() {
          const _0x3defe4 = document.getElementById("performance-monitor-style");
          if (!_0x3defe4) {
            const _0x2b174d = document.createElement("style");
            _0x2b174d.id = "performance-monitor-style";
            _0x2b174d.textContent = "\n                .performance-monitor-container {\n                    position: fixed;\n                    right: 5px;\n                    bottom: 5px;\n                    display: flex;\n                    gap: 5px;\n                    z-index: 9999;\n                    font-family: Arial, sans-serif;\n                    pointer-events: none;\n                    user-select: none;\n                }\n                .monitor-element {\n                    background-color: rgba(0, 0, 0, 0.5);\n                    font-size: 12px;\n                    height: 20px;\n                    line-height: 20px;\n                    border-radius: 4px;\n                    font-weight: bold;\n                    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);\n                    padding: 0 8px;\n                    white-space: nowrap;\n                    box-sizing: border-box;\n                    display: none;\n                }\n            ";
            document.head.appendChild(_0x2b174d);
          }
          let _0x3859a6 = document.querySelector(".performance-monitor-container");
          if (!_0x3859a6) {
            _0x3859a6 = document.createElement("div");
            _0x3859a6.className = "performance-monitor-container";
            document.body.appendChild(_0x3859a6);
          }
          if (!this.fpsDisplay) {
            this.fpsDisplay = document.createElement("div");
            this.fpsDisplay.className = "monitor-element";
            _0x3859a6.appendChild(this.fpsDisplay);
          }
          if (!this.cpuDisplay) {
            this.cpuDisplay = document.createElement("div");
            this.cpuDisplay.className = "monitor-element";
            _0x3859a6.appendChild(this.cpuDisplay);
          }
        },
        startCpuMonitoring() {
          if (!this.isCpuVisible) {
            return;
          }
          if (this._cpuMonitoringInterval) {
            clearInterval(this._cpuMonitoringInterval);
          }
          this.lastCpuTime = performance.now();
          this.cpuSamples = [];
          this._cpuMonitoringInterval = setInterval(() => {
            if (!this.isCpuVisible) {
              clearInterval(this._cpuMonitoringInterval);
              this._cpuMonitoringInterval = null;
              console.log("CPU monitoring stopped because it was disabled");
              return;
            }
            this.measureCpuUsage();
          }, 500);
        },
        measureCpuUsage() {
          const _0x56d3b3 = performance.now();
          const _0x533782 = _0x56d3b3 - this.lastCpuTime;
          const _0x3a5a2d = 60;
          const _0x435db1 = Math.max(0, _0x3a5a2d - this.fps) / _0x3a5a2d;
          let _0x382d69 = 0;
          if (window.performance && window.performance.timing) {
            const _0x320829 = window.performance.timing;
            _0x382d69 = _0x320829.domComplete - _0x320829.navigationStart;
          }
          const _0x102f87 = Math.min(1, window.anApp ? 0.7 : 0.3);
          const _0x56df49 = Math.min(100, Math.round((_0x435db1 * 70 + _0x382d69 / 1000 * 30) * _0x102f87));
          this.cpuSamples.push(_0x56df49);
          if (this.cpuSamples.length > this.cpuSampleSize) {
            this.cpuSamples.shift();
          }
          this.cpuUsage = Math.round(this.cpuSamples.reduce((_0x32ec32, _0x22c273) => _0x32ec32 + _0x22c273, 0) / this.cpuSamples.length);
          this.lastCpuTime = _0x56d3b3;
          this.updateDisplays();
        },
        startMonitoring() {
          if (!this.isFpsVisible) {
            return;
          }
          if (this._animFrameId) {
            cancelAnimationFrame(this._animFrameId);
          }
          const _0x44bf5c = () => {
            if (!this.isFpsVisible) {
              cancelAnimationFrame(this._animFrameId);
              this._animFrameId = null;
              return;
            }
            const _0x2c48d5 = performance.now();
            const _0x190dab = _0x2c48d5 - this.lastTime;
            this.frameCount++;
            if (_0x190dab >= 1000) {
              this.fps = Math.round(this.frameCount * 1000 / _0x190dab);
              this.frameCount = 0;
              this.lastTime = _0x2c48d5;
              this.updateDisplays();
            }
            this._animFrameId = requestAnimationFrame(_0x44bf5c);
          };
          this._animFrameId = requestAnimationFrame(_0x44bf5c);
        },
        updateDisplays() {
          if (!this.fpsDisplay || !this.cpuDisplay) {
            return;
          }
          if (this.isFpsVisible) {
            this.fpsDisplay.textContent = "FPS: " + this.fps;
            if (this.fps >= 58) {
              this.fpsDisplay.style.color = "white";
            } else if (this.fps >= 30) {
              this.fpsDisplay.style.color = "gold";
            } else {
              this.fpsDisplay.style.color = "red";
            }
            this.fpsDisplay.style.display = "block";
          } else {
            this.fpsDisplay.style.display = "none";
          }
          if (this.isCpuVisible) {
            this.cpuDisplay.textContent = "CPU: " + this.cpuUsage + "%";
            if (this.cpuUsage <= 50) {
              this.cpuDisplay.style.color = "white";
            } else if (this.cpuUsage <= 80) {
              this.cpuDisplay.style.color = "gold";
            } else {
              this.cpuDisplay.style.color = "red";
            }
            this.cpuDisplay.style.display = "block";
          } else {
            this.cpuDisplay.style.display = "none";
          }
        },
        setupKeyboardControls() {
          if (this._hasSetupKeyboardControls) {
            return;
          }
          this._hasSetupKeyboardControls = true;
          document.addEventListener("keydown", _0x1fc7ba => {
            if (_0x1fc7ba.key === "F2" || _0x1fc7ba.code === "F2" || _0x1fc7ba.keyCode === 113) {
              _0x1fc7ba.preventDefault();
              this.isCpuVisible = !this.isCpuVisible;
              if (this.isCpuVisible && !this._cpuMonitoringInterval) {
                this.startCpuMonitoring();
              }
              this.saveSettings();
              this.updateDisplays();
              this.updateToggleButton();
              return false;
            } else if (_0x1fc7ba.key === "F4" || _0x1fc7ba.code === "F4" || _0x1fc7ba.keyCode === 115) {
              _0x1fc7ba.preventDefault();
              this.isFpsVisible = !this.isFpsVisible;
              if (this.isFpsVisible && !this._animFrameId) {
                this.startMonitoring();
              }
              this.saveSettings();
              this.updateDisplays();
              this.updateToggleButton();
              return false;
            } else if (_0x1fc7ba.altKey && (_0x1fc7ba.key === "2" || _0x1fc7ba.keyCode === 50)) {
              _0x1fc7ba.preventDefault();
              this.isCpuVisible = !this.isCpuVisible;
              if (this.isCpuVisible && !this._cpuMonitoringInterval) {
                this.startCpuMonitoring();
              }
              this.saveSettings();
              this.updateDisplays();
              this.updateToggleButton();
              return false;
            } else if (_0x1fc7ba.altKey && (_0x1fc7ba.key === "4" || _0x1fc7ba.keyCode === 52)) {
              _0x1fc7ba.preventDefault();
              this.isFpsVisible = !this.isFpsVisible;
              if (this.isFpsVisible && !this._animFrameId) {
                this.startMonitoring();
              }
              this.saveSettings();
              this.updateDisplays();
              this.updateToggleButton();
              return false;
            }
          }, true);
        },
        saveSettings() {
          const _0x1a90de = this.isFpsVisible || this.isCpuVisible;
          localStorage.setItem("showFpsCpu", _0x1a90de);
        },
        updateToggleButton() {
          const _0x2b2118 = document.getElementById("performance-monitor-toggle");
          if (_0x2b2118) {
            _0x2b2118.checked = this.isFpsVisible || this.isCpuVisible;
          }
        },
        toggle(_0x70d293) {
          if (typeof _0x70d293 !== "boolean") {
            _0x70d293 = !this.isFpsVisible && !this.isCpuVisible;
          }
          const _0x595e70 = this.isFpsVisible;
          const _0x590b72 = this.isCpuVisible;
          this.isFpsVisible = _0x70d293;
          this.isCpuVisible = _0x70d293;
          this.saveSettings();
          if (_0x70d293) {
            if (!_0x595e70 && this.isFpsVisible) {
              this.startMonitoring();
            }
            if (!_0x590b72 && this.isCpuVisible) {
              this.startCpuMonitoring();
            }
          } else {
            this.stopAllMonitoring();
          }
          this.updateDisplays();
        },
        enable(_0x4d7e45) {
          if (_0x4d7e45) {
            if (!this.isInitialized) {
              this.init();
            } else {
              this.toggle(true);
            }
          } else {
            this.toggle(false);
          }
        }
      };
      $(".profile-user").append("<div class=\"idwormate\"><input type=\"text\" value=\"" + _0x1e5104.userId + "\" style=\"max-width: 300px; width: 350px !important; height: 22px !important; border-radius: 6px; font-size: 14px; text-align: center; background-color: #fff; color: #0a6928; font-weight: 630; display: inline-block; margin-right: 10px;\"/><button id=\"btn_copy\" style=\"width: 100px; height: 35px; border-radius: 6px; font-size: 15px; background-color: #fff; color: white; border: none; cursor: pointer;\" onclick=\"navigator.clipboard.writeText('" + _0x1e5104.userId + "').then(()=> alert('Your ID " + _0x1e5104.userId + " copied!'));\">Copy</button><button id=\"btn_activate\" style=\"width: 100px; height: 35px; border-radius: 6px; font-size: 15px; background-color: #4CAF50; color: white; border: none; cursor: pointer; margin-left: 10px;\" onclick=\"window.open('https://t.me/wormateactivate/', '_blank');\">Activate</button><button id=\"resetScript\" style=\"width: 120px; height: 35px; border-radius: 6px; font-size: 15px; background-color: #2196F3; color: white; border: none; cursor: pointer; margin-left: 10px;\" onclick=\"resetScript();\">Version 🔁</button></div>");
      var _0x9691bb = "";
      if (_0x2c9ba1.e === "not_empty") {
        _0x9691bb = "<input type=\"button\" value=\"" + _0x2c9ba1.ccg[3] + "\" id=\"btnRePlay\">";
        _0x1a98d3.s_w = _0x2c9ba1.sw == 1;
      }
      _0x2cebea(_0x2c9ba1.s11);
      $("#mm-advice-cont").html("<div class=\"div_FullScreen\"><input type=\"button\" value=\"" + _0x2c9ba1.ccg[4] + "\" id=\"btnFullScreen\"/><input type=\"button\" value=\"" + _0x2c9ba1.ccg[5] + "\" id=\"btn_in_t\" style=\"display:none;\"/>" + _0x9691bb + "</div>");
      document.getElementById("btnFullScreen").addEventListener("click", function () {
        let _0x57b663 = document.documentElement.requestFullScreen || document.documentElement.webkitRequestFullScreen || document.documentElement.mozRequestFullScreen;
        if (_0x57b663 && !_0x1a98d3.fullscreen) {
          try {
            _0x1a98d3.fullscreen = true;
            _0x57b663.call(document.documentElement);
          } catch (_0x219ae2) {}
        } else {
          _0x1a98d3.fullscreen = false;
          document.exitFullscreen();
        }
      });
      if (_0x2c9ba1.e === "not_empty") {
        document.getElementById("btnRePlay").addEventListener("click", function () {
          $("#port_id_s").val(_0x1a98d3.pi);
          $("#port_name_s").val(_0x1a98d3.pn);
          $("#port_id").val($("#port_id_s").val());
          $("#port_name").val($("#port_name_s").val());
          document.getElementById("mm-action-play").click();
        });
      }
      if (!window.wftObjects) {
        window.wftObjects = {
          eat_animation: 0.0025,
          smoothCamera: 0.5,
          PortionSize: 2,
          PortionAura: 1.2,
          PortionTransparent: 0.8,
          FoodTransparent: 0.3,
          FoodSize: 2,
          FoodShadow: 2,
          zoomSpeed: 0.003,
          soundEnabled: false,
          soundVolume: 50,
          soundEffect: "https://wormx.store/video/hs_2.mp3"
        };
      }
      try {
        const _0x16f5f8 = JSON.parse(localStorage.getItem("wftSettings"));
        if (_0x16f5f8) {
          for (const _0x4891d9 in _0x16f5f8) {
            if (wftObjects.hasOwnProperty(_0x4891d9)) {
              wftObjects[_0x4891d9] = _0x16f5f8[_0x4891d9];
            }
          }
        }
      } catch (_0x53d4d6) {
        console.error("Error loading wft settings:", _0x53d4d6);
      }
      function _0x19922f() {
        try {
          localStorage.setItem("wftSettings", JSON.stringify(wftObjects));
        } catch (_0x1ef8d9) {
          console.error("Error saving wft settings:", _0x1ef8d9);
        }
      }
      $("#op_wft").remove();
      $("#modal_wft").remove();
      if (_0x1a98d3.s_w) {
        $("<link href='https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css' rel='stylesheet'/>\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css\">\n<button id=\"btn_crsw\" style=\"display: none;\">💡</button> \n<button id=\"op_wft\" class=\"op_wft\">⚙️ Settings</button> \n<div id=\"modal_wft\" class=\"modal\"> \n  <div class=\"modal-content\"> \n    <div class=\"modal-header\"> \n      <span class=\"close\">&times;</span> \n      <h2 class=\"modal-title\">GAME SETTINGS</h2>\n    </div>\n    \n    <div id=\"modal_wft_body\" class=\"modal-body\">\n      <!-- Settings layout with sidebar and content -->\n      <div class=\"settings-layout\">\n        <!-- Sidebar -->\n        <div class=\"settings-sidebar\">\n          <div class=\"sidebar-item active\" data-tab=\"game-settings\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n              <path d=\"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z\"></path>\n            </svg>\n            <span>Game Settings</span>\n          </div>\n          \n          <div class=\"sidebar-item\" data-tab=\"mobile-settings\" id=\"mobile-tab-item\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n              <rect x=\"5\" y=\"2\" width=\"14\" height=\"20\" rx=\"2\" ry=\"2\"></rect>\n              <line x1=\"12\" y1=\"18\" x2=\"12\" y2=\"18\"></line>\n            </svg>\n            <span>Mobile Controls</span>\n          </div>\n          \n          <div class=\"sidebar-item\" data-tab=\"sound-laser-settings\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n              <path d=\"M22 12h-4l-3 9L9 3l-3 9H2\"></path>\n            </svg>\n            <span>Laser Settings</span>\n          </div>\n          \n          <div class=\"sidebar-item\" data-tab=\"power-ups\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n              <circle cx=\"12\" cy=\"12\" r=\"10\"></circle>\n              <polyline points=\"12 6 12 12 16 14\"></polyline>\n            </svg>\n            <span>Power-ups & Zoom</span>\n          </div>\n          \n          <div class=\"sidebar-item\" data-tab=\"messages\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n              <path d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\"></path>\n            </svg>\n            <span>Messages</span>\n          </div>\n          \n          <div class=\"sidebar-item\" data-tab=\"backgrounds\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n              <rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect>\n              <circle cx=\"8.5\" cy=\"8.5\" r=\"1.5\"></circle>\n              <polyline points=\"21 15 16 10 5 21\"></polyline>\n            </svg>\n            <span>Backgrounds</span>\n          </div>\n          \n          <div class=\"sidebar-item\" data-tab=\"cursors\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n              <path d=\"M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z\"></path>\n              <path d=\"M13 13l6 6\"></path>\n            </svg>\n            <span>Cursors</span>\n          </div>\n          \n          <div class=\"sidebar-item\" data-tab=\"about\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n              <circle cx=\"12\" cy=\"12\" r=\"10\"></circle>\n              <line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"12\"></line>\n              <line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"8\"></line>\n            </svg>\n            <span>About</span>\n          </div>\n        </div>\n        \n        <!-- Content Area -->\n        <div class=\"settings-content\">\n          <!-- Game Settings Tab -->\n          <div id=\"game-settings-tab\" class=\"tab-content\">\n            <h3>Game Settings</h3>\n            \n            <div id=\"div_server\" style=\"position: absolute; opacity: 0; top: -9999px; left: -9999px; pointer-events: auto;\">\n              <label for=\"sel_server\">Country</label> \n              <select id=\"sel_country\"></select>\n            </div>\n            \n            <!-- Game Options Section -->\n            <div class=\"section-title\">Game Options</div>\n            <div class=\"settings-grid\">\n              <!-- Fast Eating -->\n              <div class=\"setting-item\">\n                <span class=\"theo-game-label\">\n                  <i class=\"fas fa-bolt\" style=\"color: #ffbb00;\"></i>\n                  <label>Fast Eating</label>\n                </span>\n                <label class=\"switch\">\n                  <input type=\"checkbox\" id=\"eating_speed_toggle\">\n                  <span class=\"slider\"></span>\n                </label>\n              </div>\n              \n              <!-- ZigZag -->\n              <div class=\"setting-item\" id=\"div_zigzag\">\n                <span class=\"theo-game-label\">\n                  <i class=\"fas fa-eye\" style=\"color: #ffbb00;\"></i>\n                  <label>ZigZag Type</label>\n                  <img style=\"height: 18px;\" src=\"https://wormx.store/images/cors-proxy.phpimg=img/zigzag.png\">\n                </span>\n                <select id=\"zigzag_selector\">\n                  <option value=\"0\">None</option>\n                  <option value=\"1\">Type 1</option>\n                  <option value=\"2\">Type 2</option>\n                  <option value=\"3\">Type 3</option>\n                </select>\n              </div>\n              \n              <!-- Show Speed -->\n              <div class=\"setting-item\" id=\"div_speed\">\n                <span class=\"theo-game-label\">\n                  <i class=\"fas fa-tachometer-alt\" style=\"color: #ffbb00;\"></i>\n                  <label>Show Speed</label>\n                  <img style=\"height: 18px;\" src=\"https://wormx.store/images/cors-proxy.phpimg=img/speed.png\">\n                </span>\n                <label class=\"switch\">\n                  <input type=\"checkbox\" id=\"wftspeed\" value=\"true\" checked>\n                  <span class=\"slider\"></span>\n                </label>\n              </div>\n              \n              <!-- Total Kill-Headshot -->\n              <div class=\"setting-item\" id=\"div_save\">\n                <span class=\"theo-game-label\">\n                  <i class=\"fas fa-crosshairs\" style=\"color: #ffbb00;\"></i>\n                  <label for=\"saveGame\">Total Kill/Headshot</label>\n                </span>\n                <label class=\"switch\">\n                  <input type=\"checkbox\" id=\"saveGame\" value=\"true\" checked>\n                  <span class=\"slider\"></span>\n                </label>\n              </div>\n              \n              <!-- Show FPS/CPU -->\n              <div class=\"setting-item\">\n                <span class=\"theo-game-label\">\n                  <i class=\"fas fa-microchip\" style=\"color: #ffbb00;\"></i>\n                  <label>Show FPS/CPU</label>\n                </span>\n                <label class=\"switch\">\n                  <input type=\"checkbox\" id=\"performance-monitor-toggle\">\n                  <span class=\"slider\"></span>\n                </label>\n              </div>\n              \n              <!-- Visual Pulse Effects -->\n              <div class=\"setting-item\" id=\"div_pulse_effects\">\n                <span class=\"theo-game-label\">\n                  <i class=\"fas fa-wave-square\" style=\"color: #ffbb00;\"></i>\n                  <label>Visual Pulse Effects</label>\n                </span>\n                <label class=\"switch\">\n                  <input type=\"checkbox\" id=\"pulse_effects_enabled\" checked>\n                  <span class=\"slider\"></span>\n                </label>\n              </div>\n              \n              <!-- Screen Mode -->\n              <div class=\"setting-item\" id=\"div_w1\">\n                <span class=\"theo-game-label\">\n                  <i class=\"fas fa-desktop\" style=\"color: #ffbb00;\"></i>\n                  <label>Screen Mode</label>\n                </span>\n                <select id=\"sel_sc\">\n                  <option value=\"0\">100%</option>\n                  <option value=\"1\">75%</option>\n                  <option value=\"2\">Center</option>\n                </select>\n              </div>\n              \n              <!-- Smooth Level -->\n              <div class=\"setting-item\" id=\"div_sm\">\n                <span class=\"theo-game-label\">\n                  <i class=\"fas fa-sliders-h\" style=\"color: #ffbb00;\"></i>\n                  <label>Smooth movement</label>\n                </span>\n                <select id=\"sel_sm\">\n                  <option value=\"20\">Normal</option>\n                  <option value=\"10\">High</option>\n                </select>\n              </div>\n              \n              <!-- Top -->\n              <div class=\"setting-item\" id=\"div_top\">\n                <span class=\"theo-game-label\">\n                  <i class=\"fas fa-trophy\" style=\"color: #ffbb00;\"></i>\n                  <label>Top</label>\n                </span>\n                <select id=\"sel_top\">\n                  <option value=\"0\">0</option>\n                  <option value=\"1\">1</option>\n                  <option value=\"2\">2</option>\n                  <option value=\"3\">3</option>\n                  <option value=\"4\">4</option>\n                  <option value=\"5\">5</option>\n                  <option value=\"6\">6</option>\n                  <option value=\"7\">7</option>\n                  <option value=\"8\">8</option>\n                  <option value=\"9\">9</option>\n                  <option value=\"10\">10</option>\n                </select>\n              </div>\n            </div>\n            \n            <!-- Sound Settings -->\n            <div class=\"sound-settings-container\">\n              <div class=\"setting-group\">\n                <div class=\"settings-row\">\n                  <!-- Sound Effects Label on Left -->\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-volume-up\" style=\"color: #ffbb00;\"></i>\n                    <div class=\"sound-effects-title\">Sound Effects</div>\n                  </span>\n                  \n                <!-- Headshot Sound Selector -->\n                <select id=\"sound_effect_selector\">\n                  <option value=\"https://wormx.store/video/hs_2.mp3\">Default Headshot</option>\n                  <option value=\"https://asserts.wormworld.io/sounds/headshot_sound_effect.mp3\">Headshot Sound</option>\n                  <option value=\"https://wormx.store/video/emaat.mp3\">Emaat</option>\n                  <option value=\"https://www.myinstants.com/media/sounds/sniper-shot.mp3\">Sniper Shot</option>\n                  <option value=\"https://www.myinstants.com/media/sounds/headshot_6.mp3\">Headshot 2</option>\n                  <option value=\"https://www.myinstants.com/media/sounds/999_Z871W0o.mp3\">Alqm</option>\n                  <option value=\"https://www.myinstants.com/media/sounds/bye-bye-mikey-tokyo-revengers.mp3\">Bye Bye</option>\n                  <option value=\"https://wormx.store/video/Aelo-Adi.MP3\">Adelo Adi</option>\n                  <option value=\"https://wormx.store/video/alalobee.mp3\">Ala Loby</option>\n                  <option value=\"https://wormx.store/video/laugh.mp3\">Laugh</option>\n                  <option value=\"https://wormx.store/video/mario-jump.mp3\">Mario Jump</option>\n                  <option value=\"https://wormx.store/video/pew.mp3\">Pew</option>\n                  <option value=\"https://wormx.store/video/pingo.mp3\">Pingo</option>\n                  <option value=\"https://wormx.store/video/wak-wak.mp3\">Wak Wak</option>\n                </select>\n                \n                <!-- 10th Headshot Sound -->\n                <select id=\"monster_kill_selector\">\n                  <option value=\"https://wormx.store/video/monster-kill-hahaha.MP3\">Monster Kill</option>\n                  <option value=\"https://www.myinstants.com/media/sounds/mk.mp3\">Monster Kill 2</option>\n                  <option value=\"https://www.myinstants.com/media/sounds/hea-hea-headshot.mp3\">Monster Kill 3</option>\n                </select>\n                  \n                  <!-- Volume Control without label -->\n                  <div class=\"volume-slider-container\">\n                    <input type=\"range\" id=\"volume_slider\" min=\"0\" max=\"100\" step=\"1\" value=\"40\">\n                    <span id=\"volume_value\" class=\"slider-value\">40</span>\n                  </div>\n                  \n                  <!-- Toggle Switch on far right -->\n                <div class=\"sound-toggle\">\n                  <label class=\"switch\">\n                    <input type=\"checkbox\" id=\"wftsound\" value=\"true\">\n                    <span class=\"slider round\"></span>\n                  </label>\n                </div>\n                </div>\n              </div>\n            </div>\n            \n            <!-- Custom Skin Upload Section -->\n            <div class=\"section-title\">Custom Skin</div>\n            <div class=\"setting-group\" id=\"div_crsw\">\n              <div class=\"setting-group-content\">\n                <div class=\"setting-row\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-file-image\" style=\"color: #ffbb00;\"></i>\n                    <label>Skin File.... Only (skin.json)</label>\n                  </span>\n                  <div style=\"display: flex; flex-grow: 1; gap: 10px;\">\n                    <input type=\"file\" accept=\".json\" id=\"fileSkin\" style=\"flex-grow: 1;\" />\n                    <button id=\"btn_clear_file\">Clear</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            \n            <!-- Audio elements -->\n            <audio id=\"s_h\"><source src=\"https://wormx.store/video/hs_2.mp3\" type=\"audio/mpeg\"></audio>\n            <audio id=\"monster_kill_sound\"><source src=\"https://wormx.store/video/monster-kill-hahaha.MP3\" type=\"audio/mpeg\"></audio>\n            <audio id=\"sound_test_audio\"></audio>\n          </div>\n          \n          <!-- Mobile Settings Tab -->\n          <div id=\"mobile-settings-tab\" class=\"tab-content\">\n            <h3>Mobile Controls</h3>\n            \n            <div class=\"setting-group\">\n              <div class=\"setting-group-header\">Joystick Settings</div>\n              <div class=\"setting-group-content\">\n                <div class=\"setting-row\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-gamepad\" style=\"color: #ffbb00;\"></i>\n                    <label for=\"joystick_checked\">Enable Joystick</label>\n                  </span>\n                  <label class=\"switch\">\n                    <input type=\"checkbox\" id=\"joystick_checked\" checked>\n                    <span class=\"slider\"></span>\n                  </label>\n                </div>\n                \n                <div class=\"setting-row\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-palette\" style=\"color: #ffbb00;\"></i>\n                    <label for=\"joystick_color\">Joystick Color</label>\n                  </span>\n                  <select id=\"joystick_color\">\n                    <option value=\"red\">Red</option>\n                    <option value=\"blue\">Blue</option>\n                    <option value=\"green\">Green</option>\n                    <option value=\"yellow\">Yellow</option>\n                    <option value=\"purple\">Purple</option>\n                    <option value=\"orange\">Orange</option>\n                  </select>\n                </div>\n                \n                <div class=\"setting-row\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-cog\" style=\"color: #ffbb00;\"></i>\n                    <label for=\"joystick_mode\">Joystick Mode</label>\n                  </span>\n                  <select id=\"joystick_mode\">\n                    <option value=\"static\">Static</option>\n                    <option value=\"dynamic\">Dynamic</option>\n                  </select>\n                </div>\n                \n                <div class=\"setting-row\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-map-marker-alt\" style=\"color: #ffbb00;\"></i>\n                    <label for=\"joystick_position\">Position</label>\n                  </span>\n                  <select id=\"joystick_position\">\n                    <option value=\"L\">Left</option>\n                    <option value=\"R\">Right</option>\n                  </select>\n                </div>\n                \n                <div class=\"slider-control\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-expand-arrows-alt\" style=\"color: #ffbb00;\"></i>\n                    <label for=\"joystick_size\">Size</label>\n                  </span>\n                  <div class=\"slider-container\">\n                    <input type=\"range\" id=\"joystick_size\" min=\"50\" max=\"150\" step=\"10\" value=\"100\">\n                    <span id=\"joystick_size_value\" class=\"slider-value\">100</span>\n                  </div>\n                </div>\n                \n                <div class=\"slider-control\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-adjust\" style=\"color: #ffbb00;\"></i>\n                    <label for=\"joystick_pxy\">Opacity</label>\n                  </span>\n                  <div class=\"slider-container\">\n                    <input type=\"range\" id=\"joystick_pxy\" min=\"50\" max=\"150\" step=\"10\" value=\"100\">\n                    <span id=\"joystick_pxy_value\" class=\"slider-value\">100</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n            \n            <div id=\"config_mobile\">\n              <!-- Additional mobile settings will be loaded here -->\n            </div>\n          </div>\n          \n          <!-- Laser Settings Tab -->\n          <div id=\"sound-laser-settings-tab\" class=\"tab-content\">\n            <h3>Laser Settings</h3>\n            \n            <div class=\"section-title\">Laser Settings</div>\n            <div class=\"setting-group\" id=\"div_Laser\">\n              <div class=\"setting-group-content\">\n                <div class=\"setting-row\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-bullseye\" style=\"color: #ffbb00;\"></i>\n                    <label for=\"Laserup\">Enable Laser</label>\n                  </span>\n                  <label class=\"switch\">\n                    <input type=\"checkbox\" id=\"Laserup\" value=\"true\">\n                    <span class=\"slider\"></span>\n                  </label>\n                </div>\n                \n                <div class=\"setting-row\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-palette\" style=\"color: #ffbb00;\"></i>\n                    <label for=\"laser_color_picker\">Color</label>\n                  </span>\n                  <input type=\"color\" id=\"laser_color_picker\" value=\"#FFD700\">\n                </div>\n                \n                <div class=\"slider-control\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-adjust\" style=\"color: #ffbb00;\"></i>\n                    <label for=\"laser_opacity_slider\">Opacity</label>\n                  </span>\n                  <div class=\"slider-container\">\n                    <input type=\"range\" id=\"laser_opacity_slider\" min=\"10\" max=\"100\" step=\"10\" value=\"50\">\n                    <span id=\"laser_opacity_value\" class=\"slider-value\">50</span>\n                    <button id=\"reset_laser_settings\" class=\"reset-btn\">\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                        <path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"></path>\n                        <path d=\"M3 3v5h5\"></path>\n                      </svg>\n                    </button>\n                  </div>\n                </div>\n                \n                <div class=\"setting-row\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-keyboard\" style=\"color: #ffbb00;\"></i>\n                    <label>Keyboard Shortcuts:</label>\n                  </span>\n                  <div style=\"flex-grow: 1; text-align: right;\">\n                    <span style=\"display: inline-block; margin-left: 10px;\"><strong>L</strong> - Toggle laser</span>\n                    <span style=\"display: inline-block; margin-left: 10px;\"><strong>O</strong> - Increase opacity</span>\n                    <span style=\"display: inline-block; margin-left: 10px;\"><strong>P</strong> - Decrease opacity</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          \n          <!-- Power-ups Tab -->\n          <div id=\"power-ups-tab\" class=\"tab-content\">\n            <h3>Power-ups & Zoom Settings</h3>\n            \n            <div class=\"section-title\">Advanced Controls</div>\n            <div class=\"setting-group\">\n              <div class=\"setting-group-content\">\n                <!-- Spin Fast -->\n                <div class=\"slider-control\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-sync-alt\" style=\"color: #ffbb00;\"></i>\n                    <label for=\"spin_fast_slider\">Spin Fast</label>\n                  </span>\n                  <div class=\"slider-container\">\n                    <input type=\"range\" id=\"spin_fast_slider\" min=\"0.3\" max=\"0.6\" step=\"0.1\" value=\"0.5\">\n                    <span id=\"spin_fast_value\" class=\"slider-value\">0.5</span>\n                    <button class=\"reset-btn\" data-reset=\"spin_fast\" data-default=\"0.5\">\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                        <path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"></path>\n                        <path d=\"M3 3v5h5\"></path>\n                      </svg>\n                    </button>\n                  </div>\n                </div>\n                \n                <!-- Power-ups Size -->\n                <div class=\"slider-control\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-expand\" style=\"color: #ffbb00;\"></i>\n                    <label for=\"portion_size_slider\">Power-ups Size</label>\n                  </span>\n                  <div class=\"slider-container\">\n                    <input type=\"range\" id=\"portion_size_slider\" min=\"1\" max=\"6\" step=\"1\" value=\"2\">\n                    <span id=\"portion_size_value\" class=\"slider-value\">2</span>\n                    <button class=\"reset-btn\" data-reset=\"portion_size\" data-default=\"2\">\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                        <path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"></path>\n                        <path d=\"M3 3v5h5\"></path>\n                      </svg>\n                    </button>\n                  </div>\n                </div>\n                \n                <!-- Power-ups Aura -->\n                <div class=\"slider-control\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-radiation-alt\" style=\"color: #ffbb00;\"></i>\n                    <label for=\"portion_aura_slider\">Power-ups Aura</label>\n                  </span>\n                  <div class=\"slider-container\">\n                    <input type=\"range\" id=\"portion_aura_slider\" min=\"1.2\" max=\"3.2\" step=\"0.2\" value=\"1.2\">\n                    <span id=\"portion_aura_value\" class=\"slider-value\">1.2</span>\n                    <button class=\"reset-btn\" data-reset=\"portion_aura\" data-default=\"1.2\">\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                        <path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"></path>\n                        <path d=\"M3 3v5h5\"></path>\n                      </svg>\n                    </button>\n                  </div>\n                </div>\n                \n                <!-- Food Size -->\n                <div class=\"slider-control\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-apple-alt\" style=\"color: #ffbb00;\"></i>\n                    <label for=\"food_size_slider\">Food Size</label>\n                  </span>\n                  <div class=\"slider-container\">\n                    <input type=\"range\" id=\"food_size_slider\" min=\"0.5\" max=\"3\" step=\"0.5\" value=\"2\">\n                    <span id=\"food_size_value\" class=\"slider-value\">2</span>\n                    <button class=\"reset-btn\" data-reset=\"food_size\" data-default=\"2\">\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                        <path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"></path>\n                        <path d=\"M3 3v5h5\"></path>\n                      </svg>\n                    </button>\n                  </div>\n                </div>\n                \n                <!-- Food Shadow -->\n                <div class=\"slider-control\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-moon\" style=\"color: #ffbb00;\"></i>\n                    <label for=\"food_shadow_slider\">Food Shadow</label>\n                  </span>\n                  <div class=\"slider-container\">\n                    <input type=\"range\" id=\"food_shadow_slider\" min=\"0.5\" max=\"3\" step=\"0.5\" value=\"2\">\n                    <span id=\"food_shadow_value\" class=\"slider-value\">2</span>\n                    <button class=\"reset-btn\" data-reset=\"food_shadow\" data-default=\"2\">\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                        <path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"></path>\n                        <path d=\"M3 3v5h5\"></path>\n                      </svg>\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            \n            <div class=\"section-title\">Zoom Controls</div>\n            <div class=\"setting-group\">\n              <div class=\"setting-group-content\">\n                <!-- Zoom Speed -->\n                <div class=\"slider-control\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-search-plus\" style=\"color: #ffbb00;\"></i>\n                    <label for=\"zoom_speed_slider\">Zoom Speed</label>\n                  </span>\n                  <div class=\"slider-container\">\n                    <input type=\"range\" id=\"zoom_speed_slider\" min=\"0.001\" max=\"0.01\" step=\"0.001\" value=\"0.003\">\n                    <span id=\"zoom_speed_value\" class=\"slider-value\">0.003</span>\n                    <button class=\"reset-btn\" data-reset=\"zoom_speed\" data-default=\"0.003\">\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                        <path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"></path>\n                        <path d=\"M3 3v5h5\"></path>\n                      </svg>\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            \n            <div id=\"div_game_enhancements\"></div>\n          </div>\n          \n          <!-- Messages Tab -->\n            <div id=\"messages-tab\" class=\"tab-content\">\n              <h3>Messages</h3>\n              \n              <!-- Default Kill&Headshot Toggle -->\n              <div class=\"setting-group\">\n                <div class=\"setting-group-header\">\n                  <div class=\"header-with-toggle\">\n                    <span>Kill&Headshot Settings</span>\n                    <div class=\"toggle-container\">\n                      <span class=\"theo-game-label\">\n                        <i class=\"fas fa-skull\" style=\"color: #ffbb00;\"></i>\n                        <label>Default Kill&Headshot</label>\n                      </span>\n                      <label class=\"switch\">\n                        <input type=\"checkbox\" id=\"wftiq\" value=\"true\">\n                        <span class=\"slider\"></span>\n                      </label>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              \n              <!-- New Messages Layout -->\n              <div class=\"setting-group\">\n                <div class=\"setting-group-header\">Messages</div>\n                <div class=\"setting-group-content\">\n                  <div class=\"messages-container\" id=\"custom-messages-container\">\n                    <!-- Left side: Kill Messages -->\n                    <div class=\"message-column\">\n                      <div class=\"message-header\">\n                        <i class=\"fas fa-crosshairs\" style=\"color: #ffbb00;\"></i>\n                        <span>Kill Messages</span>\n                      </div>\n                      \n                      <div class=\"message-select-container\">\n                        <select id=\"kill_msg\" class=\"message-select\">\n                          <option value=\"KILLED\">KILLED</option>\n                          <option value=\"WASTED\">WASTED</option>\n                          <option value=\"ELIMINATED\">ELIMINATED</option>\n                          <option value=\"DESTROYED\">DESTROYED</option>\n                          <option value=\"FINISHED\">FINISHED</option>\n                          <option value=\"Well Done!\">Well Done!</option>\n                        </select>\n                      </div>\n                      \n                      <div class=\"message-option\">\n                        <span>Show Player Name</span>\n                        <label class=\"switch small-switch\">\n                          <input type=\"checkbox\" id=\"kill_show_name\" checked>\n                          <span class=\"slider\"></span>\n                        </label>\n                      </div>\n                      \n                      <div class=\"message-option\">\n                        <select id=\"kill_name_position\" class=\"message-select\">\n                          <option value=\"after\">After Message</option>\n                          <option value=\"before\">Before Message</option>\n                        </select>\n                      </div>\n                      \n                      <div class=\"message-custom\">\n                        <label for=\"kill_custom_text\" class=\"custom-label\">Custom Message</label>\n                        <input type=\"text\" id=\"kill_custom_text\" maxlength=\"20\" placeholder=\"Maximum 20 characters\" class=\"custom-input\">\n                      </div>\n                    </div>\n                    \n                    <!-- Right side: Headshot Messages -->\n                    <div class=\"message-column\">\n                      <div class=\"message-header\">\n                        <i class=\"fas fa-bullseye\" style=\"color: #ffbb00;\"></i>\n                        <span>Headshot Messages</span>\n                      </div>\n                      \n                      <div class=\"message-select-container\">\n                        <select id=\"headshot_msg\" class=\"message-select\">\n                          <option value=\"HEADSHOT\">HEADSHOT</option>\n                          <option value=\"BOOM! HEADSHOT\">BOOM! HEADSHOT</option>\n                          <option value=\"PERFECT AIM\">PERFECT AIM</option>\n                          <option value=\"CRITICAL HIT\">CRITICAL HIT</option>\n                          <option value=\"BULLSEYE\">BULLSEYE</option>\n                        </select>\n                      </div>\n                      \n                      <div class=\"message-option\">\n                        <span>Show Player Name</span>\n                        <label class=\"switch small-switch\">\n                          <input type=\"checkbox\" id=\"headshot_show_name\" checked>\n                          <span class=\"slider\"></span>\n                        </label>\n                      </div>\n                      \n                      <div class=\"message-option\">\n                        <select id=\"headshot_name_position\" class=\"message-select\">\n                          <option value=\"after\">After Message</option>\n                          <option value=\"before\">Before Message</option>\n                        </select>\n                      </div>\n                      \n                      <div class=\"message-custom\">\n                        <label for=\"headshot_custom_text\" class=\"custom-label\">Custom Message</label>\n                        <input type=\"text\" id=\"headshot_custom_text\" maxlength=\"20\" placeholder=\"Maximum 20 characters\" class=\"custom-input\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              \n              <div id=\"div_messages\"></div>\n            </div>\n          \n          <!-- Backgrounds Tab -->\n          <div id=\"backgrounds-tab\" class=\"tab-content\">\n            <h3>Game Backgrounds</h3>\n            \n            <!-- Sector System Section -->\n            <div class=\"section-title\">Sector System</div>\n            <div class=\"sector-system-container\">\n              <div class=\"sector-toggle-row\">\n                <span class=\"theo-game-label\">\n                  <i class=\"fas fa-th-large\" style=\"color: #ffbb00;\"></i>\n                  <div class=\"toggle-label\">Enable Sector System</div>\n                </span>\n                <label class=\"toggle-switch\">\n                  <input type=\"checkbox\" id=\"sector_system_toggle\">\n                  <span class=\"toggle-slider\"></span>\n                </label>\n              </div>\n              \n              <!-- Settings Panel - Hidden until enabled -->\n              <div id=\"sector_settings_panel\" class=\"sector-settings-panel\" style=\"display: none;\">\n                <div class=\"sector-main-settings\">\n                  <div class=\"setting-row\">\n                    <span class=\"theo-game-label\">\n                      <i class=\"fas fa-grip-horizontal\" style=\"color: #ffbb00;\"></i>\n                      <div class=\"setting-label\">Display Mode</div>\n                    </span>\n                    <div class=\"setting-control\">\n                      <select id=\"sector_display_mode\" class=\"sector-select\">\n                        <option value=\"sectors\">Sectors (12)</option>\n                        <option value=\"quarters\">Quarters (4)</option>\n                      </select>\n                    </div>\n                  </div>\n            \n                  <!-- Background Settings -->\n                  <div class=\"setting-row\">\n                    <span class=\"theo-game-label\">\n                      <i class=\"fas fa-fill-drip\" style=\"color: #ffbb00;\"></i>\n                      <div class=\"setting-label\">Background Color</div>\n                    </span>\n                    <div class=\"setting-control\">\n                      <input type=\"color\" id=\"sector_bg_color\" value=\"#000000\" class=\"color-picker\">\n                    </div>\n                  </div>\n                  \n                  <!-- Background Opacity - Always visible -->\n                  <div class=\"setting-row\">\n                    <span class=\"theo-game-label\">\n                      <i class=\"fas fa-adjust\" style=\"color: #ffbb00;\"></i>\n                      <div class=\"setting-label\">Background Opacity</div>\n                    </span>\n                    <div class=\"setting-control opacity-control\">\n                      <input type=\"range\" id=\"sector_bg_opacity\" min=\"0\" max=\"100\" step=\"5\" value=\"60\" class=\"small-slider\">\n                      <div class=\"slider-value\" id=\"sector_bg_opacity_value\">60%</div>\n                    </div>\n                  </div>\n            \n                  <div class=\"setting-row\">\n                    <span class=\"theo-game-label\">\n                      <i class=\"fas fa-border-style\" style=\"color: #ffbb00;\"></i>\n                      <div class=\"setting-label\">Show Lines</div>\n                    </span>\n                    <div class=\"setting-control\">\n                      <label class=\"toggle-switch\">\n                        <input type=\"checkbox\" id=\"sector_show_lines\" checked>\n                        <span class=\"toggle-slider\"></span>\n                      </label>\n                    </div>\n                  </div>\n                </div>\n            \n                <!-- Lines Options - Hidden when Show Lines is off -->\n                <div id=\"sector_lines_options\" class=\"sector-lines-options\">\n                  <div class=\"setting-row\">\n                    <span class=\"theo-game-label\">\n                      <i class=\"fas fa-palette\" style=\"color: #ffbb00;\"></i>\n                      <div class=\"setting-label\">Line Color</div>\n                    </span>\n                    <div class=\"setting-control\">\n                      <input type=\"color\" id=\"sector_line_color\" value=\"#FF0000\" class=\"color-picker\">\n                    </div>\n                  </div>\n            \n                  <div class=\"setting-row\">\n                    <span class=\"theo-game-label\">\n                      <i class=\"fas fa-low-vision\" style=\"color: #ffbb00;\"></i>\n                      <div class=\"setting-label\">Line Opacity</div>\n                    </span>\n                    <div class=\"setting-control opacity-control\">\n                      <input type=\"range\" id=\"sector_line_opacity\" min=\"0\" max=\"100\" step=\"5\" value=\"30\" class=\"small-slider\">\n                      <div class=\"slider-value\" id=\"sector_line_opacity_value\">30%</div>\n                    </div>\n                  </div>\n                </div>\n            \n                <div class=\"sector-shortcuts\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-keyboard\" style=\"color: #ffbb00;\"></i>\n                    <div class=\"shortcuts-title\">Keyboard Shortcuts:</div>\n                  </span>\n                  <div class=\"shortcuts-content\">\n                    <span class=\"shortcut-item\"><strong>S</strong> or <strong>=</strong> - Toggle Sectors</span>\n                    <span class=\"shortcut-item\"><strong>X</strong> - Toggle Quarters</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n            \n            <div class=\"background-grid\">\n              <!-- Background items will be added dynamically -->\n            </div>\n          </div>\n          \n        <!-- Cursors Tab -->\n        <div id=\"cursors-tab\" class=\"tab-content\">\n          <h3>Game Cursors</h3>\n          \n          <!-- العنوان في سطر -->\n          <div class=\"setting-row\">\n            <span class=\"theo-game-label\">\n              <i class=\"fas fa-mouse-pointer\" style=\"color: #ffbb00;\"></i>\n              <label>Cursor Selection</label>\n            </span>\n          </div>\n          \n          <!-- الزر في سطر منفصل -->\n          <div class=\"setting-row cursor-controls\">\n            <button id=\"default-cursor-btn\" class=\"secondary-button\">Default Cursor</button>\n            <span id=\"current-cursor-name\">Current: Electrical Plug Cursor</span>\n          </div>\n          \n          <div class=\"cursor-container\">\n            <!-- المؤشرات ستضاف ديناميكياً هنا -->\n          </div>\n          \n          <div id=\"div_cursors\"></div>\n        </div>\n          \n          <!-- About Tab -->\n          <div id=\"about-tab\" class=\"tab-content\">\n            <h3>About WKQ</h3>\n            \n            <div class=\"about-content\">\n              <p>\n                <i class=\"fas fa-info-circle\" style=\"color: #ffbb00;\"></i>\n                Platen: Enhance Your Wormate.io Experience\n                [WKQ] is a Chrome extension designed to improve your wormate.io gameplay. Quickly select rooms, customize your worm with vibrant skin colors, and enjoy extra features to enhance your experience.\n              </p>\n              <p>\n                <i class=\"fas fa-calendar-alt\" style=\"color: #ffbb00;\"></i>\n                Release Date: 30/03/2025.\n              </p>\n              <p>\n                <i class=\"fas fa-code-branch\" style=\"color: #ffbb00;\"></i>\n                Version: 2.0.1\n                  <div class=\"button-group\">\n               <button id=\"resetScript\" class=\"reset-button\">Versiyon Change</button>\n              </p>\n              <p>\n                <i class=\"fas fa-users\" style=\"color: #ffbb00;\"></i>\n                Designed by:  TR-Team ⚡ !\n              </p>\n              \n              <p style=\"margin-top: 20px;\">\n                <i class=\"fas fa-keyboard\" style=\"color: #ffbb00;\"></i>\n                <strong>Keyboard Shortcuts:</strong><br>\n                <span style=\"display: inline-block; margin-right: 15px; margin-top: 5px;\"><strong>L</strong> - Toggle laser</span>\n                <span style=\"display: inline-block; margin-right: 15px; margin-top: 5px;\"><strong>O</strong> - Increase laser opacity</span>\n                <span style=\"display: inline-block; margin-right: 15px; margin-top: 5px;\"><strong>P</strong> - Decrease laser opacity</span>\n              </p>\n              \n              <!-- User ID Section -->\n              <div class=\"setting-group\">\n                <div class=\"setting-group-content\">\n                  <div class=\"setting-row\">\n                    <span class=\"theo-game-label\">\n                      <i class=\"fas fa-id-card\" style=\"color: #ffbb00;\"></i>\n                      <label for=\"id_customer\">ID: </label>\n                    </span>\n                    <input value=\"" + _0x1e5104.userId + "\" style=\"max-width: 220px;\" type=\"text\" id=\"id_customer\" readonly>\n                    <button id=\"btn_copy\">\n                      <span class=\"tooltiptext\" id=\"myTooltip\">id copy</span>Copy\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n    \n<!-- Headshot Message Display -->\n<div id=\"headshot-message\"></div>\n").insertAfter("#mm-store");
      } else {
        $("    <button id=\"op_wft\" class=\"op_wft\">" + _0x2c9ba1.ccg[6] + "</button> \n    <div id=\"modal_wft\" class=\"modal\"> \n      <div class=\"modal-content wft-modal\" style=\"max-width: 360px !important; width: 360px !important;\"> \n        <div class=\"center wft-header\" style=\"background-color: #ff8a18; background: linear-gradient(145deg, rgb(255, 141, 0), rgb(255, 102, 0)); padding: 0 15px; height: 36px; line-height: 36px; border-radius: 8px 8px 0 0; position: relative; text-align: center;\"> \n          <span class=\"close\" style=\"position: absolute; left: 15px; top: 6px; color: white; font-size: 24px; font-weight: bold; cursor: pointer;\">×</span> \n          <h2 class=\"modal-title\" style=\"margin: 0; font-size: 18px; color: white;\">Settings</h2>\n        </div> \n        <div id=\"modal_wft_body\" class=\"modal-body wft-body\" style=\"padding: 15px; background-color: #1e2339; color: #fff; border-radius: 0 0 8px 8px;\">\n          <!-- سيتم تحديث المحتوى -->\n        </div> \n      </div>\n    </div>\n  ").insertAfter("#mm-store");
      }
      function _0x113b83() {
        const _0x293435 = _0x2c9ba1.e === "not_empty" || _0x137a00;
        if (!_0x293435) {
          $("#modal_wft .modal-content").addClass("wft-modal").css({
            "max-width": "360px",
            width: "360px"
          });
          $(".settings-sidebar, .settings-layout, .settings-content").hide();
          $("#modal_wft_body").html("\n        <div style=\"text-align: center; margin: 10px auto;\">\n          <label for=\"id_customer\" style=\"display: block; margin-bottom: 5px; font-weight: bold; color: #ddd; text-align: center;\">User ID</label> \n          <div style=\"display: flex; margin: 0 auto; justify-content: center;\">\n            <input value=\"" + _0x1e5104.userId + "\" style=\"max-width: 200px; width: 200px !important; height: 22px !important; border-radius: 6px; font-size: 14px; text-align: center; background-color: #fff; color: #0a6928; font-weight: 630; margin-right: 10px;\" type=\"text\" id=\"id_customer\" readonly>\n           <button id=\"btn_copy\" style=\"width: 100px; height: 35px; border-radius: 6px; font-size: 15px; background-color: #fff; color: white; border: none; cursor: pointer;\" onclick=\"navigator.clipboard.writeText('" + _0x1e5104.userId + "').then(()=> alert('Your ID " + _0x1e5104.userId + " copied!'));\">Copy</button>\n          </div>\n        </div>\n        \n        <!-- الخط الفاصل الأول فقط -->\n        <div style=\"border-top: 1px solid #3a4061; margin: 15px 0;\"></div>\n        \n        <!-- طريقة تفعيل الاشتراك الرئيسية - رابط الاتصال -->\n        <div style=\"text-align: center; padding: 10px 0;\">\n          <h3 style=\"color: white; margin: 0 0 8px 0; font-size: 16px;\">Premium Activation - تفعيل الاشتراك المميز</h3>\n          <a href=\"https://wormatefriendsturkey.com/contact\" target=\"_blank\" style=\"display: block; background-color: #4CAF50; color: white; padding: 12px; text-decoration: none; border-radius: 6px; font-weight: bold; margin: 10px auto; width: 80%; max-width: 280px; box-shadow: 0 4px 8px rgba(0,0,0,0.2); transition: all 0.3s; border: 2px solid #65d269;\">\n            <span style=\"display: block; font-size: 16px;\">🔗 Click Here To Activate</span>\n            <span style=\"display: block; font-size: 14px; margin-top: 4px;\">اضغط هنا للتفعيل</span>\n          </a>\n        </div>\n        \n        <!-- صورة البريميم قبل زر الديسكورد -->\n        <div style=\"text-align: center; margin: 15px auto 10px;\">\n            <img src=\"https://wormx.store/premium_features.png\" alt=\"Premium Features\" style=\"max-width: 150px; height: auto; border-radius: 4px; display: block; margin: 0 auto;\">\n        </div>\n        \n        <!-- خيار الانضمام للديسكورد كخيار ثانوي -->\n        <div style=\"text-align: center; padding: 10px 0;\">\n          <a href=\"https://discord.gg/NHWXgJpE\" target=\"_blank\" style=\"display: inline-block; background-color: #5865F2; color: white; padding: 8px 12px; text-decoration: none; border-radius: 4px; font-weight: bold; box-shadow: 0 2px 5px rgba(0,0,0,0.2); transition: background-color 0.3s;\">\n            <svg style=\"width: 16px; height: 16px; margin-right: 6px; display: inline-block; vertical-align: middle;\" viewBox=\"0 0 24 24\" fill=\"white\">\n              <path d=\"M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914a.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z\"/>\n            </svg>\n            Join Our Discord\n            <span style=\"display: block; font-size: 0.8em; margin-top: 2px;\">انضم إلى مجتمعنا على Discord</span>\n          </a>\n          <p style=\"margin-top: 8px; color: #aaa; font-size: 12px;\">\n            Get premium features by joining our Discord server\n            <span style=\"display: block; font-size: 0.9em; margin-top: 2px;\">للحصول على الميزات المميزة عبر Discord</span>\n          </p>\n        </div>\n        \n        <div style=\"text-align: center;\">\n          <p style=\"color: #ddd; font-size: 14px; margin: 5px 0;\">\n            <i class=\"fas fa-crown\" style=\"color: #ffbb00;\"></i> Premium\n          </p>\n        </div>\n        ");
        } else {
          $("#modal_wft .modal-content").removeClass("wft-modal");
          $(".settings-sidebar, .settings-layout, .settings-content").show();
          const _0x555052 = $(".sidebar-item.active").data("tab");
          if (_0x555052) {
            $(".tab-content").hide();
            $("#" + _0x555052 + "-tab").show();
          } else {
            $("#game-settings-tab").show();
          }
          if (!_0x1a98d3.mobile) {
            $("#mobile-tab-item").hide();
          }
        }
      }
      window.openSettingsModal = function () {
        _0x113b83();
        $("#modal_backdrop").show();
        $("#modal_wft").css({
          "z-index": "9999",
          display: "block"
        });
        $("body").css("overflow", "hidden");
      };
      window.closeSettingsModal = function () {
        $("#modal_wft").css("display", "none");
        $("#modal_backdrop").hide();
        $("body").css("overflow", "");
      };
      _0x113b83();
      function _0x48bd5f() {
        const _0x5c51f2 = _0x2c9ba1.e === "not_empty" || _0x137a00;
        if (!_0x5c51f2) {
          $(".settings-sidebar, .settings-layout, .settings-content, .settings-grid, .tab-content, .sidebar-item").hide();
          $("[id^=\"div_\"]").not("#div_customer").hide();
          $("#eating_speed_toggle, #performance-monitor-toggle, #wftspeed, #saveGame, #pulse_effects_enabled").closest(".setting-item").hide();
          $("[id^=\"sel_\"]").hide();
          $(".switch, .slider-control, .section-title").hide();
          $("#backgrounds-tab, .background-grid, .background-item").hide();
          $("#cursors-tab, .cursor-container, .cursor-item").hide();
          $("#sound-laser-settings-tab, #sound_effect_selector, #monster_kill_selector, #volume_slider").hide();
          $("#div_Laser, #Laserup, #laser_color_picker, #laser_opacity_slider").hide();
        } else {
          $(".settings-sidebar, .settings-layout, .settings-content, .settings-grid, .tab-content, .sidebar-item").show();
          $("[id^=\"div_\"]").show();
          $("#eating_speed_toggle, #performance-monitor-toggle, #wftspeed, #saveGame, #pulse_effects_enabled").closest(".setting-item").show();
          $("[id^=\"sel_\"]").show();
          $(".switch, .slider-control, .section-title").show();
          $("#backgrounds-tab, .background-grid, .background-item").show();
          $("#cursors-tab, .cursor-container, .cursor-item").show();
          $("#sound-laser-settings-tab, #sound_effect_selector, #monster_kill_selector, #volume_slider").show();
          $("#div_Laser, #Laserup, #laser_color_picker, #laser_opacity_slider").show();
          if (!_0x1a98d3.mobile) {
            $("#mobile-tab-item").hide();
          }
        }
      }
      $(document).ready(function () {
        setTimeout(function () {
          _0x48bd5f();
        }, 100);
        $("#btn_copy").click(function () {
          var _0x4f6bd6 = document.getElementById("id_customer");
          _0x4f6bd6.select();
          _0x4f6bd6.setSelectionRange(0, 99999);
          navigator.clipboard.writeText(_0x4f6bd6.value);
          $("#myTooltip").html("" + _0x2c9ba1.ccg[14] + "!");
          $("#myTooltip").css("visibility", "visible");
          $("#myTooltip").css("opacity", "1");
          setTimeout(function () {
            $("#myTooltip").css("visibility", "hidden");
            $("#myTooltip").css("opacity", "0");
          }, 1500);
        });
        document.getElementById("resetScript").addEventListener("click", async function () {
          localStorage.clear();
          sessionStorage.clear();
          if (window.indexedDB && indexedDB.databases) {
            let _0x1b4f8e = await indexedDB.databases();
            for (let _0x2d3ebd of _0x1b4f8e) {
              if (_0x2d3ebd.name) {
                await indexedDB.deleteDatabase(_0x2d3ebd.name);
              }
            }
          }
          if (window.openDatabase) {
            console.warn("Web SQL otomatik olarak JavaScript ile temizlenemez.");
          }
          document.cookie.split(";").forEach(function (_0x56a77e) {
            document.cookie = _0x56a77e.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date(0).toUTCString() + ";path=/");
          });
          if ("caches" in window) {
            let _0x1ee1e5 = await caches.keys();
            for (let _0x5c179d of _0x1ee1e5) {
              await caches.delete(_0x5c179d);
            }
          }
          if ("serviceWorker" in navigator) {
            let _0x422eef = await navigator.serviceWorker.getRegistrations();
            for (let _0x2a3285 of _0x422eef) {
              await _0x2a3285.unregister();
            }
          }
          localStorage.removeItem("scriptSeleccionado");
          location.reload();
        });
        $("#btn_copy").hover(function () {
          $("#myTooltip").css("visibility", "visible");
          $("#myTooltip").css("opacity", "1");
        }, function () {
          if ($("#myTooltip").text() !== _0x2c9ba1.ccg[14] + "!") {
            $("#myTooltip").css("visibility", "hidden");
            $("#myTooltip").css("opacity", "0");
          }
        });
        if (window.modalFixed) {
          return;
        }
        window.modalFixed = true;
        $("#op_wft").off("click").on("click", function (_0x31d50b) {
          _0x31d50b.preventDefault();
          window.openSettingsModal();
          return false;
        });
        var _0x44ce8c = $("#modal_wft");
        var _0x15a52a = _0x44ce8c.css("display");
        $("body").append(_0x44ce8c.detach());
        var _0x2c98f6 = $("<div id='modal_backdrop'></div>").css({
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          "background-color": "rgba(0, 0, 0, 0.7)",
          "z-index": "9998",
          display: "none"
        });
        _0x44ce8c.before(_0x2c98f6);
        function _0x10eaa5() {
          if ($("#op_wft").length && !$("#op_wft").data("hasClickHandler")) {
            $("#op_wft").off("click").on("click", function (_0x21a68e) {
              _0x21a68e.preventDefault();
              window.openSettingsModal();
              return false;
            }).data("hasClickHandler", true);
          }
        }
        _0x10eaa5();
        setInterval(_0x10eaa5, 5000);
        $(".close").off("click").on("click", function () {
          window.closeSettingsModal();
        });
        _0x2c98f6.on("click", function () {
          window.closeSettingsModal();
        });
      });
      var _0x19d2ca = document.getElementById("div_save");
      var _0x4fe6bd = document.getElementById("div_sound");
      var _0x1a16df = document.getElementById("div_speed");
      var _0x28a5c4 = document.getElementById("div_zigzag");
      var _0x5a2204 = document.getElementById("div_w1");
      var _0x493cbb = document.getElementById("div_sm");
      var _0x360396 = document.getElementById("sel_sc");
      var _0x535fe8 = document.getElementById("div_top");
      var _0x16509f = document.getElementById("sel_top");
      var _0x23e7c0 = document.getElementById("div_killmsg");
      var _0x44df67 = document.getElementById("div_background");
      var _0x349605 = [{
        name: "Vietnam",
        val: "vn"
      }, {
        name: "Thailand",
        val: "th"
      }, {
        name: "Cambodia",
        val: "kh"
      }, {
        name: "Indonesia",
        val: "id"
      }, {
        name: "Singapore",
        val: "sg"
      }, {
        name: "Japan",
        val: "jp"
      }, {
        name: "Mexico",
        val: "mx"
      }, {
        name: "Brazil",
        val: "br"
      }, {
        name: "Canada",
        val: "ca"
      }, {
        name: "Germany",
        val: "de"
      }, {
        name: "France",
        val: "fr"
      }, {
        name: "England",
        val: "gb"
      }, {
        name: "Australia",
        val: "au"
      }, {
        name: "USA",
        val: "us"
      }, {
        name: "Portugal",
        val: "pt"
      }, {
        name: "Turkey",
        val: "tr"
      }, {
        name: _0x2c9ba1.ccg[36],
        val: "iq"
      }];
      let _0x54ce18 = document.getElementById("sel_country");
      if (_0x54ce18) {
        for (_0x60a66d = 0; _0x60a66d < _0x349605.length; _0x60a66d++) {
          let _0x4f8cfe = document.createElement("option");
          _0x4f8cfe.value = _0x349605[_0x60a66d].val;
          _0x4f8cfe.innerHTML = _0x349605[_0x60a66d].name;
          _0x54ce18.appendChild(_0x4f8cfe);
        }
        if (_0x3be6af) {
          _0x54ce18.value = _0x3be6af;
        }
        _0x54ce18.onchange = function () {
          let _0x5ebc31 = _0x54ce18.value;
          _0x3be6af = _0x5ebc31;
          localStorage.setItem("oco", _0x5ebc31);
          var _0x2ac083 = {
            id_wormate: _0x1e5104.userId,
            country: _0x5ebc31
          };
          fetch("https://wormx.store/2025/check/index.php", {
            headers: {
              "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(_0x2ac083)
          });
          localStorage.removeItem("wftsw");
          window.location.reload();
        };
      }
      var _0x137a00 = false;
      if (_0x2c9ba1.cm === "" || _0x2c9ba1.cm === undefined) ;else {
        var _0x392a5f = document.getElementById("btn_in_t");
        var _0x569e51 = document.getElementById("mm-action-play");
        var _0x4f272e = document.getElementById("port_id");
        if (_0x392a5f) {
          _0x392a5f.style.display = "block";
          _0x392a5f.onclick = function () {
            _0x4f272e.value = _0x2c9ba1.cm;
            _0x569e51.click();
          };
          _0x137a00 = true;
        }
      }
      if (_0x2c9ba1.e === "not_connect") ;else {
        _0x1a98d3.h = _0x2c9ba1.z == "b";
        _0x1a98d3.hz = _0x2c9ba1.z == "c";
        if (_0x2c9ba1.e === "not_empty" || _0x137a00) {
          var _0x3eaa59 = ooo.Xg.Kf.Wg.Ah;
          if (_0x19d2ca) {
            _0x19d2ca.style.display = "block";
          }
          if (_0x4fe6bd) {
            _0x4fe6bd.style.display = "inline-block";
          }
          if (_0x1a98d3.zigzag !== undefined) {
            $("#zigzag_selector").val(_0x1a98d3.zigzag);
          } else {
            _0x1a98d3.zigzag = 0;
            localStorage.setItem("SaveGamewft", JSON.stringify(_0x1a98d3));
          }
          $("#zigzag_selector").val(_0x1a98d3.zigzag);
          $("#zigzag_selector").change(function () {
            _0x1a98d3.zigzag = parseInt($(this).val());
            localStorage.setItem("SaveGamewft", JSON.stringify(_0x1a98d3));
            if (window.bbs && window.bbsConfig) {
              window.bbsConfig.zigzag = _0x1a98d3.zigzag;
              window.bbs.zigzag = _0x1a98d3.zigzag;
              localStorage.setItem("selectedZigzag", _0x1a98d3.zigzag);
              if (ooo && ooo.Xg && ooo.Xg.Kf && ooo.Xg.Kf.Wg && ooo.Xg.Kf.Wg.Ah) {
                const _0x31198a = ooo.Xg.Kf.Wg.Ah;
                if (_0x31198a && _0x31198a.Vj) {
                  const _0x313c0c = {
                    0: 0,
                    1: 1,
                    2: 2,
                    3: 3
                  };
                  _0x31198a.Vj = _0x313c0c[_0x1a98d3.zigzag] || 0;
                  if (_0x31198a.Zi) {
                    _0x31198a.Zi(_0x31198a.ki);
                  }
                }
              }
            }
          });
          $("#wftspeed").prop("checked", true);
          $("#wftspeed").change(function () {
            _0x1a98d3.vp = $(this).prop("checked");
            localStorage.setItem("SaveGamewft", JSON.stringify(_0x1a98d3));
          });
          $("#saveGame").prop("checked", _0x1a98d3.cs);
          $("#saveGame").change(function () {
            _0x1a98d3.cs = $(this).prop("checked");
            localStorage.setItem("SaveGamewft", JSON.stringify(_0x1a98d3));
          });
          if (_0x1a98d3.mobile) {
            if (_0x5a2204) {
              _0x5a2204.style.display = "none";
            }
            _0x1a98d3.sc = 0;
            _0x1a98d3.wi = 0;
          } else {
            if (_0x5a2204) {
              _0x5a2204.style.display = "inline-block";
            }
            if (_0x360396) {
              _0x360396.value = _0x1a98d3.sc;
              _0x360396.onchange = function () {
                _0x1a98d3.sc = parseInt(_0x360396.value);
                if (_0x1a98d3.sc == 1) {
                  _0x1a98d3.wi = screen.height / (screen.width * 2);
                }
                if (_0x1a98d3.sc == 2) {
                  _0x1a98d3.wi = 0;
                }
                localStorage.setItem("SaveGamewft", JSON.stringify(_0x1a98d3));
              };
            }
          }
          if (_0x493cbb) {
            _0x493cbb.style.display = "inline-block";
          }
          if (sel_sm) {
            sel_sm.value = _0x1a98d3.sm;
            sel_sm.onchange = function () {
              _0x1a98d3.sm = parseInt(sel_sm.value);
              localStorage.setItem("SaveGamewft", JSON.stringify(_0x1a98d3));
            };
          }
          if (_0x535fe8) {
            _0x535fe8.style.display = "inline-block";
          }
          if (_0x16509f) {
            _0x16509f.value = _0x1a98d3.to;
            _0x16509f.onchange = function () {
              _0x1a98d3.to = parseInt(_0x16509f.value);
              localStorage.setItem("SaveGamewft", JSON.stringify(_0x1a98d3));
            };
          }
          if (_0x54ce18 && _0x54ce18.value == "iq" && _0x23e7c0) {
            _0x23e7c0.style.display = "inline-block";
            var _0x3cb827 = $("#wftiq");
            _0x3cb827.prop("checked", _0x1a98d3.iq);
            _0x3cb827.change(function () {
              if (this.checked) {
                _0x1a98d3.iq = true;
              } else {
                _0x1a98d3.iq = false;
              }
              localStorage.setItem("SaveGamewft", JSON.stringify(_0x1a98d3));
            });
          } else {
            _0x1a98d3.iq = false;
            if (_0x23e7c0) {
              _0x23e7c0.style.display = "none";
            }
          }
          const _0x47e65d = localStorage.getItem("showFpsCpu") === "true";
          $("#performance-monitor-toggle").prop("checked", _0x47e65d);
          $("#performance-monitor-toggle").change(function () {
            const _0x25551e = $(this).prop("checked");
            localStorage.setItem("showFpsCpu", _0x25551e);
            if (window.PerformanceMonitor) {
              window.PerformanceMonitor.toggle(_0x25551e);
            }
          });
          if (window.PerformanceMonitor) {
            window.PerformanceMonitor.init();
          }
          const _0x255792 = localStorage.getItem("wftPulseEnabled") === "true" || localStorage.getItem("wftPulseEnabled") === null;
          $("#pulse_effects_enabled").prop("checked", _0x255792);
          window.pulseEnabled = _0x255792;
          $("#pulse_effects_enabled").change(function () {
            window.pulseEnabled = $(this).prop("checked");
            localStorage.setItem("wftPulseEnabled", window.pulseEnabled.toString());
          });
          _0x1a98d3.c_1 = _0x2c9ba1.streamer;
          if (_0x44df67) {
            _0x44df67.style.display = "block";
          }
          _0x51a3c4(_0x1a98d3, oeo);
          _0x2cbd14.on = true;
          if (_0xda46a3()) {
            _0x1a98d3.tt = _0x2c9ba1.tt == 1;
            _0x3eaa59.img_1.visible = _0x2cbd14.on && _0x1a98d3.mo == 1;
            _0x3eaa59.img_2.visible = _0x2cbd14.on && _0x1a98d3.mo == 2;
            _0x3eaa59.img_3.visible = _0x2cbd14.on && _0x1a98d3.mo == 3;
            _0x3eaa59.img_4.visible = _0x2cbd14.on && (_0x1a98d3.mo == 4 || _0x1a98d3.mo == 5 || _0x1a98d3.mo == 6);
          } else {
            _0x1a98d3.tt = false;
          }
          var _0x315fe7 = [{
            nome: "Default",
            uri: _0x1a98d3.s_l + "/get_store.phpitem=bkgnd0.png"
          }, {
            nome: "Stardust",
            uri: _0x1a98d3.s_l + "/get_store.phpitem=bg_sky__6.png"
          }, {
            nome: "Nightdots",
            uri: _0x1a98d3.s_l + "/get_store.phpitem=bg_sky_7.png"
          }, {
            nome: "Galaxy Star",
            uri: _0x1a98d3.s_l + "/get_store.phpitem=Galaxy-Star.png"
          }, {
            nome: "Hexvoid",
            uri: _0x1a98d3.s_l + "/get_store.phpitem=bg_sky_10.png"
          }, {
            nome: "Crystalblue",
            uri: _0x1a98d3.s_l + "/get_store.phpitem=bg_sky_9.png"
          }, {
            nome: "Nebula",
            uri: _0x1a98d3.s_l + "/get_store.phpitem=bg_sky__2.png"
          }, {
            nome: "Bluemist",
            uri: _0x1a98d3.s_l + "/get_store.phpitem=bg_sky__1.png"
          }, {
            nome: "Prism",
            uri: _0x1a98d3.s_l + "/get_store.phpitem=bg_sky_8.png"
          }, {
            nome: "Cloudscape",
            uri: _0x1a98d3.s_l + "/get_store.phpitem=bg_sky__5.png"
          }, {
            nome: "Desert",
            uri: _0x1a98d3.s_l + "/get_store.phpitem=bg_sky_11.png"
          }, {
            nome: "Crystalblue 2",
            uri: _0x1a98d3.s_l + "/get_store.phpitem=bg_sky_12.png"
          }];
          _0x1a98d3.c_2 = _0x2c9ba1.programmer;
          let _0x1f7291 = $(".background-grid");
          if (_0x1f7291.length > 0) {
            _0x1f7291.empty();
            _0x315fe7.forEach(function (_0x262a53) {
              const _0x35fd13 = _0x1a98d3.background === _0x262a53.uri;
              const _0x2bb018 = $("\n          <div class=\"background-item " + (_0x35fd13 ? "active" : "") + "\" data-bg=\"" + _0x262a53.uri + "\" data-bg-name=\"" + _0x262a53.nome + "\" style=\"cursor: pointer; border: 2px solid " + (_0x35fd13 ? "#ffcc00" : "#333333") + "; border-radius: 8px; overflow: hidden; margin: 5px; background-color: #232339;\">\n            <img src=\"" + _0x262a53.uri + "\" alt=\"" + _0x262a53.nome + "\" style=\"width: 100%; height: 65px; object-fit: cover;\">\n            <div style=\"text-align: center; padding: 5px; font-size: 10px; color: #ffffff;\">" + _0x262a53.nome + "</div>\n          </div>\n        ");
              _0x2bb018.click(function () {
                $(".background-item").removeClass("active").css("border-color", "#333333");
                $(this).addClass("active").css("border-color", "#ffcc00");
                const _0xaddec = $(this).data("bg");
                const _0x372cb4 = $(this).data("bg-name");
                _0x1a98d3.background = _0xaddec;
                localStorage.setItem("SaveGamewft", JSON.stringify(_0x1a98d3));
                if (ooo && ooo.ef && ooo.ef.F_bg && ooo.ef.fn_o) {
                  ooo.ef.F_bg = new PIXI.Texture(ooo.ef.fn_o(_0xaddec));
                }
                $("#backgroundArena").val(_0xaddec);
              });
              _0x1f7291.append(_0x2bb018);
            });
          }
          let _0x151872 = document.getElementById("backgroundArena");
          if (_0x151872) {
            for (_0x60a66d = 0; _0x60a66d < _0x315fe7.length; _0x60a66d++) {
              let _0x1863c5 = document.createElement("option");
              _0x1863c5.value = _0x315fe7[_0x60a66d].uri;
              _0x1863c5.setAttribute("data-imageSrc", _0x315fe7[_0x60a66d].uri);
              _0x1863c5.setAttribute("data-descriptione", _0x315fe7[_0x60a66d].nome);
              _0x1863c5.innerHTML = _0x315fe7[_0x60a66d].nome;
              _0x151872.appendChild(_0x1863c5);
            }
            _0x1a98d3.c_3 = _0x2c9ba1.extension;
            _0x151872.value = _0x1a98d3.background || _0x315fe7[0].uri;
            if ($.fn.wftsle) {
              $("#backgroundArena").wftsle({
                onSelected: function () {
                  _0x1a98d3.background = $("#backgroundArena-value").val();
                  localStorage.setItem("SaveGamewft", JSON.stringify(_0x1a98d3));
                  if (ooo && ooo.ef && ooo.ef.F_bg && ooo.ef.fn_o) {
                    ooo.ef.F_bg = new PIXI.Texture(ooo.ef.fn_o(_0x1a98d3.background));
                  }
                  const _0x42a29d = _0x1a98d3.background;
                  $(".background-item").removeClass("active").css("border-color", "#333333");
                  $(".background-item[data-bg=\"" + _0x42a29d + "\"]").addClass("active").css("border-color", "#ffcc00");
                }
              });
            }
          }
          const _0x5cc049 = [{
            name: "Turquoise Mouse Pointer",
            url: _0x1a98d3.s_l + "/images/cors-proxy.phpimg=cursors/1.png"
          }, {
            name: "White Mouse Pointer",
            url: _0x1a98d3.s_l + "/images/cors-proxy.phpimg=cursors/2.png"
          }, {
            name: "Pink Octopus Cursor",
            url: _0x1a98d3.s_l + "/images/cors-proxy.phpimg=cursors/3.png"
          }, {
            name: "Beetle Cursor",
            url: _0x1a98d3.s_l + "/images/cors-proxy.phpimg=cursors/4.png"
          }, {
            name: "TikTok Cursor",
            url: _0x1a98d3.s_l + "/images/cors-proxy.phpimg=cursors/5.png"
          }, {
            name: "Watermelon Cursor",
            url: _0x1a98d3.s_l + "/images/cors-proxy.phpimg=cursors/6.png"
          }, {
            name: "Red Lipstick Cursor",
            url: _0x1a98d3.s_l + "/images/cors-proxy.phpimg=cursors/7.png"
          }, {
            name: "Flame Cursor",
            url: _0x1a98d3.s_l + "/images/cors-proxy.phpimg=cursors/8.png"
          }, {
            name: "Cherries Cursor",
            url: _0x1a98d3.s_l + "/images/cors-proxy.phpimg=cursors/9.png"
          }, {
            name: "Pink Hearts Cursor",
            url: _0x1a98d3.s_l + "/images/cors-proxy.phpimg=cursors/10.png"
          }, {
            name: "Spray Can Cursor",
            url: _0x1a98d3.s_l + "/images/cors-proxy.phpimg=cursors/11.png"
          }, {
            name: "Beach Umbrella Cursor",
            url: _0x1a98d3.s_l + "/images/cors-proxy.phpimg=cursors/12.png"
          }, {
            name: "Three-colored Glove Cursor",
            url: _0x1a98d3.s_l + "/images/cors-proxy.phpimg=cursors/13.png"
          }, {
            name: "Pink Dolphin Cursor",
            url: _0x1a98d3.s_l + "/images/cors-proxy.phpimg=cursors/14.png"
          }, {
            name: "Mushroom Cursor",
            url: _0x1a98d3.s_l + "/images/cors-proxy.phpimg=cursors/15.png"
          }, {
            name: "Octopus Glove Cursor",
            url: _0x1a98d3.s_l + "/images/cors-proxy.phpimg=cursors/16.png"
          }, {
            name: "Yellow Cheese Cursor",
            url: _0x1a98d3.s_l + "/images/cors-proxy.phpimg=cursors/17.png"
          }, {
            name: "Roasting Marshmallow Cursor",
            url: _0x1a98d3.s_l + "/images/cors-proxy.phpimg=cursors/18.png"
          }, {
            name: "White Glove Cursor",
            url: _0x1a98d3.s_l + "/images/cors-proxy.phpimg=cursors/19.png"
          }, {
            name: "Red Pepper Cursor",
            url: _0x1a98d3.s_l + "/images/cors-proxy.phpimg=cursors/20.png"
          }, {
            name: "Magic Wand with Golden Star Cursor",
            url: _0x1a98d3.s_l + "/images/cors-proxy.phpimg=cursors/21.png"
          }, {
            name: "Strawberry and Chocolate Ice Cream Cursor",
            url: _0x1a98d3.s_l + "/images/cors-proxy.phpimg=cursors/22.png"
          }, {
            name: "Dagger Cursor",
            url: _0x1a98d3.s_l + "/images/cors-proxy.phpimg=cursors/23.png"
          }, {
            name: "Pizza Slice Cursor ",
            url: _0x1a98d3.s_l + "/images/cors-proxy.phpimg=cursors/24.png"
          }, {
            name: "Strawberry Candy Cursor",
            url: _0x1a98d3.s_l + "/images/cors-proxy.phpimg=cursors/25.png"
          }, {
            name: "Rose Branch Cursor",
            url: _0x1a98d3.s_l + "/images/cors-proxy.phpimg=cursors/26.png"
          }, {
            name: "Electrical Plug Cursor",
            url: _0x1a98d3.s_l + "/images/cors-proxy.phpimg=cursors/27.png"
          }, {
            name: "Heart on Stick Cursor",
            url: _0x1a98d3.s_l + "/images/cors-proxy.phpimg=cursors/28.png"
          }];
          const _0x623106 = localStorage.getItem("selectedCursor");
          if (_0x623106) {
            _0xe7536(_0x623106);
            const _0x1ff464 = _0x5cc049.find(_0x48670c => _0x48670c.url === _0x623106);
            if (_0x1ff464) {
              $("#current-cursor-name").text("Current: " + _0x1ff464.name);
            }
          }
          const _0x2100cf = $(".cursor-container");
          if (_0x2100cf.length > 0) {
            _0x2100cf.empty();
            _0x5cc049.forEach(function (_0x461350) {
              const _0x4944b3 = _0x623106 === _0x461350.url;
              const _0x1b797f = $("\n              <div class=\"cursor-item " + (_0x4944b3 ? "active" : "") + "\" data-cursor=\"" + _0x461350.url + "\" title=\"" + _0x461350.name + "\" style=\"width: 60px; height: 60px; display: inline-block; margin: 5px; cursor: pointer; border: 2px solid " + (_0x4944b3 ? "#ffcc00" : "#333333") + "; border-radius: 8px; overflow: hidden; text-align: center; background-color: #232339;\">\n                  <img src=\"" + _0x461350.url + "\" alt=\"" + _0x461350.name + "\" style=\"width: 32px; height: 32px; margin-top: 14px;\">\n              </div>\n          ");
              _0x1b797f.click(function () {
                $(".cursor-item").removeClass("active").css("border-color", "#333333");
                $(this).addClass("active").css("border-color", "#ffcc00");
                const _0x531b41 = $(this).data("cursor");
                localStorage.setItem("selectedCursor", _0x531b41);
                _0xe7536(_0x531b41);
                $("#current-cursor-name").text("Current: " + _0x461350.name);
              });
              _0x2100cf.append(_0x1b797f);
            });
          }
          $("#default-cursor-btn").click(function () {
            localStorage.removeItem("selectedCursor");
            $("#game-cont, #game-canvas, body").css("cursor", "default");
            $("#current-cursor-name").text("Current: Default");
            $(".cursor-item").removeClass("active").css("border-color", "#333333");
          });
          function _0xe7536(_0x384807) {
            $("#game-cont, #game-canvas, body").css({
              cursor: "url(" + _0x384807 + "), default"
            });
          }
          _0x1a98d3.c_4 = _0x2c9ba1.game;
          if (_0x1a98d3.hz) {
            _0x4103df.onwheel = function (_0x18453f) {
              if (!_0x1a98d3.ctrl && (_0x1a98d3.z >= 0.5 && _0x1a98d3.z <= 25 || _0x1a98d3.z < 0.5 && _0x18453f.deltaY < 0 || _0x1a98d3.z > 25 && _0x18453f.deltaY > 0)) {
                _0x1a98d3.z = _0x1a98d3.z + _0x18453f.deltaY * -wftObjects.zoomSpeed;
                if (_0x1a98d3.z < 0.5) {
                  _0x1a98d3.z = 0.5;
                }
              }
            };
          }
          if (_0x1a98d3.mobile) {
            $("#config_mobile").html(_0x2c9ba1.mb);
            var _0x30e114 = document.getElementById("joystick_checked");
            var _0x4002b7 = document.getElementById("joystick_color");
            var _0x3c9e22 = document.getElementById("joystick_mode");
            var _0x5d3c6c = document.getElementById("joystick_position");
            var _0x36dab8 = document.getElementById("joystick_size");
            var _0xbf6729 = document.getElementById("joystick_pxy");
            if (_0x30e114) {
              _0x30e114.onchange = function () {
                _0x3f8263(_0x30e114);
                _0x2e0292(_0x4002b7);
                _0x227252(_0x3c9e22);
                _0x59e7a9(_0x5d3c6c);
                _0x74a750(_0xbf6729);
                _0x520a99(_0x36dab8);
              };
            }
            if (_0x4002b7) {
              _0x4002b7.onchange = function () {
                _0x3f8263(_0x30e114);
                _0x2e0292(_0x4002b7);
                _0x227252(_0x3c9e22);
                _0x59e7a9(_0x5d3c6c);
                _0x74a750(_0xbf6729);
                _0x520a99(_0x36dab8);
              };
            }
            if (_0x3c9e22) {
              _0x3c9e22.onchange = function () {
                _0x3f8263(_0x30e114);
                _0x2e0292(_0x4002b7);
                _0x227252(_0x3c9e22);
                _0x59e7a9(_0x5d3c6c);
                _0x74a750(_0xbf6729);
                _0x520a99(_0x36dab8);
              };
            }
            if (_0x5d3c6c) {
              _0x5d3c6c.onchange = function () {
                _0x3f8263(_0x30e114);
                _0x2e0292(_0x4002b7);
                _0x227252(_0x3c9e22);
                _0x59e7a9(_0x5d3c6c);
                _0x74a750(_0xbf6729);
                _0x520a99(_0x36dab8);
              };
            }
            if (_0x36dab8) {
              _0x36dab8.onchange = function () {
                _0x3f8263(_0x30e114);
                _0x2e0292(_0x4002b7);
                _0x227252(_0x3c9e22);
                _0x59e7a9(_0x5d3c6c);
                _0x74a750(_0xbf6729);
                _0x520a99(_0x36dab8);
              };
            }
            if (_0xbf6729) {
              _0xbf6729.onchange = function () {
                _0x3f8263(_0x30e114);
                _0x2e0292(_0x4002b7);
                _0x227252(_0x3c9e22);
                _0x59e7a9(_0x5d3c6c);
                _0x74a750(_0xbf6729);
                _0x520a99(_0x36dab8);
              };
            }
            if (_0x1a98d3.joystick) {
              $("#joystick_checked").val(_0x1a98d3.joystick.checked);
              $("#joystick_color").val(_0x1a98d3.joystick.color);
              $("#joystick_mode").val(_0x1a98d3.joystick.mode);
              $("#joystick_position").val(_0x1a98d3.joystick.positionMode);
              $("#joystick_size").val(_0x1a98d3.joystick.size);
              $("#joystick_pxy").val(_0x1a98d3.joystick.pxy);
            } else {
              $("#joystick_checked").val(true);
              $("#joystick_color").val("red");
              $("#joystick_mode").val("dynamic");
              $("#joystick_position").val("L");
              $("#joystick_size").val(100);
              $("#joystick_pxy").val(100);
            }
            if (typeof _0x3f8263 === "function" && _0x30e114) {
              _0x3f8263(_0x30e114);
            }
            if (typeof _0x2e0292 === "function" && _0x4002b7) {
              _0x2e0292(_0x4002b7);
            }
            if (typeof _0x227252 === "function" && _0x3c9e22) {
              _0x227252(_0x3c9e22);
            }
            if (typeof _0x59e7a9 === "function" && _0x5d3c6c) {
              _0x59e7a9(_0x5d3c6c);
            }
            if (typeof _0x74a750 === "function" && _0xbf6729) {
              _0x74a750(_0xbf6729);
            }
            if (typeof _0x520a99 === "function" && _0x36dab8) {
              _0x520a99(_0x36dab8);
            }
          }
          function _0x520a99(_0x5c0b74) {
            if (!_0x1a98d3.joystick) {
              _0x1a98d3.joystick = {};
            }
            _0x1a98d3.joystick.size = parseInt(_0x5c0b74.value);
            $("#joystick_size_value").text(_0x5c0b74.value);
            localStorage.setItem("SaveGamewft", JSON.stringify(_0x1a98d3));
          }
          function _0x74a750(_0x4dc1a1) {
            if (!_0x1a98d3.joystick) {
              _0x1a98d3.joystick = {};
            }
            _0x1a98d3.joystick.pxy = parseInt(_0x4dc1a1.value);
            $("#joystick_pxy_value").text(_0x4dc1a1.value);
            localStorage.setItem("SaveGamewft", JSON.stringify(_0x1a98d3));
          }
          if (typeof _0x2add7a !== "undefined" && typeof _0x2da668 !== "undefined" && typeof _0x423a56 !== "undefined") {
            if (typeof _0x48f412 === "function") {
              _0x2add7a.on("mousedown", _0x48f412);
            }
            if (typeof _0x4d171a === "function") {
              _0x2da668.on("mousedown", _0x4d171a);
            }
            if (typeof _0x4d40a7 === "function") {
              _0x423a56.on("mousedown", _0x4d40a7);
            }
          }
          _0x1a98d3.c_5 = _0x2c9ba1.note;
        } else {
          $("#div_server, #div_save, #div_sound, #div_speed, #div_zigzag, #div_w1, #div_top, #div_killmsg, #div_sm, #div_pulse_effects, #div_messages, #div_background, #div_game_enhancements, #config_mobile, #div_Laser, #div_crsw").hide();
        }
        if (_0x2c9ba1.ccc && _0x2c9ba1.ccc != "iq" && _0x2c9ba1.ccc != _0x3be6af) {
          localStorage.setItem("oco", _0x2c9ba1.ccc);
          localStorage.removeItem("wftsw");
          window.location.reload();
        }
        if (!_0x3be6af) {
          localStorage.setItem("oco", "iq");
        }
      }
      localStorage.setItem("SaveGamewft", JSON.stringify(_0x1a98d3));
      $(document).ready(function () {
        if ($(".settings-sidebar").length > 0) {
          $(".sidebar-item").click(function () {
            $(".sidebar-item").removeClass("active");
            $(this).addClass("active");
            $(".tab-content").hide();
            const _0x5485ab = $(this).data("tab") + "-tab";
            $("#" + _0x5485ab).show();
          });
          $("#game-settings-tab").show();
          $(".tab-content").not("#game-settings-tab").hide();
          if (!_0x1a98d3.mobile) {
            $("#mobile-tab-item").hide();
          }
          function _0x1059ea() {
            if ($("#wftiq").prop("checked")) {
              $("#custom-messages-container").addClass("messages-disabled");
            } else {
              $("#custom-messages-container").removeClass("messages-disabled");
            }
          }
          _0x1059ea();
          $("#joystick_size").on("input", function () {
            var _0x5ab713 = $(this).val();
            $("#joystick_size_value").text(_0x5ab713);
            _0x51f831(this);
          });
          $("#joystick_pxy").on("input", function () {
            var _0x5b6910 = $(this).val();
            $("#joystick_pxy_value").text(_0x5b6910);
            _0x42ce38(this);
          });
          $("#wftiq").change(function () {
            _0x1059ea();
            _0x1a98d3.iq = $(this).prop("checked");
            localStorage.setItem("SaveGamewft", JSON.stringify(_0x1a98d3));
          });
          $("#kill_msg").change(function () {
            _0x1a98d3.killMsg = $(this).val();
            localStorage.setItem("SaveGamewft", JSON.stringify(_0x1a98d3));
          });
          $("#headshot_msg").change(function () {
            _0x1a98d3.headshotMsg = $(this).val();
            localStorage.setItem("SaveGamewft", JSON.stringify(_0x1a98d3));
          });
          $("#kill_show_name").change(function () {
            _0x1a98d3.showKillName = $(this).prop("checked");
            localStorage.setItem("SaveGamewft", JSON.stringify(_0x1a98d3));
          });
          $("#headshot_show_name").change(function () {
            _0x1a98d3.showHeadshotName = $(this).prop("checked");
            localStorage.setItem("SaveGamewft", JSON.stringify(_0x1a98d3));
          });
          $("#kill_name_position").change(function () {
            _0x1a98d3.killNamePos = $(this).val();
            localStorage.setItem("SaveGamewft", JSON.stringify(_0x1a98d3));
          });
          $("#headshot_name_position").change(function () {
            _0x1a98d3.headshotNamePos = $(this).val();
            localStorage.setItem("SaveGamewft", JSON.stringify(_0x1a98d3));
          });
          $("#kill_custom_text").on("input", function () {
            if ($(this).val() !== "") {
              _0x1a98d3.killMsgType = "custom";
              _0x1a98d3.killCustomText = $(this).val();
            } else {
              _0x1a98d3.killMsgType = "preset";
            }
            localStorage.setItem("SaveGamewft", JSON.stringify(_0x1a98d3));
          });
          $("#headshot_custom_text").on("input", function () {
            if ($(this).val() !== "") {
              _0x1a98d3.headshotMsgType = "custom";
              _0x1a98d3.headshotCustomText = $(this).val();
            } else {
              _0x1a98d3.headshotMsgType = "preset";
            }
            localStorage.setItem("SaveGamewft", JSON.stringify(_0x1a98d3));
          });
          if (_0x1a98d3.killMsg) {
            $("#kill_msg").val(_0x1a98d3.killMsg);
          }
          if (_0x1a98d3.headshotMsg) {
            $("#headshot_msg").val(_0x1a98d3.headshotMsg);
          }
          if (_0x1a98d3.killMsgType === "custom" && _0x1a98d3.killCustomText) {
            $("#kill_custom_text").val(_0x1a98d3.killCustomText || "");
          }
          if (_0x1a98d3.headshotMsgType === "custom" && _0x1a98d3.headshotCustomText) {
            $("#headshot_custom_text").val(_0x1a98d3.headshotCustomText || "");
          }
          $("#kill_show_name").prop("checked", _0x1a98d3.showKillName !== false);
          $("#headshot_show_name").prop("checked", _0x1a98d3.showHeadshotName !== false);
          $("#kill_name_position").val(_0x1a98d3.killNamePos || "after");
          $("#headshot_name_position").val(_0x1a98d3.headshotNamePos || "after");
          $("#wftsound").prop("checked", wftObjects.soundEnabled || _0x1a98d3.vh);
          $("#sound_effect_selector").val(wftObjects.soundEffect || "https://wormx.store/video/hs_2.mp3");
          $("#volume_slider").val(wftObjects.soundVolume || 50);
          $("#volume_value").text(wftObjects.soundVolume || 50);
          let _0x411f3e = null;
          function _0x751e0c(_0x338956, _0x440026) {
            if (_0x411f3e) {
              _0x411f3e.pause();
              _0x411f3e.currentTime = 0;
            }
            _0x338956.volume = _0x440026 / 100;
            _0x338956.currentTime = 0;
            _0x338956.play();
            _0x411f3e = _0x338956;
          }
          $("#wftsound").prop("checked", true);
          $("#wftsound").change(function () {
            wftObjects.soundEnabled = $(this).prop("checked");
            _0x1a98d3.vh = $(this).prop("checked");
            _0x19922f();
            localStorage.setItem("SaveGamewft", JSON.stringify(_0x1a98d3));
            if (wftObjects.soundEnabled) {
              const _0x2521f7 = document.getElementById("s_h");
              if (_0x2521f7) {
                _0x751e0c(_0x2521f7, wftObjects.soundVolume);
              }
            }
          });
          $("#sound_effect_selector").change(function () {
            wftObjects.soundEffect = $(this).val();
            _0x19922f();
            const _0x511e95 = document.getElementById("s_h");
            if (_0x511e95) {
              const _0xc0b631 = _0x511e95.querySelector("source");
              if (_0xc0b631) {
                _0xc0b631.src = wftObjects.soundEffect;
                _0x511e95.load();
                if (wftObjects.soundEnabled) {
                  setTimeout(() => {
                    _0x751e0c(_0x511e95, wftObjects.soundVolume);
                  }, 100);
                }
              }
            }
          });
          $("#monster_kill_selector").change(function () {
            const _0x1135b6 = $(this).val();
            const _0x2a9c32 = document.getElementById("monster_kill_sound");
            if (_0x2a9c32) {
              const _0xe2e22a = _0x2a9c32.querySelector("source");
              if (_0xe2e22a) {
                _0xe2e22a.src = _0x1135b6;
                _0x2a9c32.load();
                if (wftObjects.soundEnabled) {
                  setTimeout(() => {
                    _0x751e0c(_0x2a9c32, wftObjects.soundVolume);
                  }, 100);
                }
              }
            }
            if (!wftObjects.monsterKillSound) {
              wftObjects.monsterKillSound = {};
            }
            wftObjects.monsterKillSound = _0x1135b6;
            _0x19922f();
          });
          $("#volume_slider").on("input", function () {
            wftObjects.soundVolume = parseInt($(this).val());
            $("#volume_value").text(wftObjects.soundVolume);
            const _0x5994b6 = document.querySelectorAll("audio");
            _0x5994b6.forEach(_0x4dc72e => {
              _0x4dc72e.volume = wftObjects.soundVolume / 100;
            });
            if (wftObjects.soundEnabled) {
              const _0x59e80a = document.getElementById("s_h");
              if (_0x59e80a) {
                _0x751e0c(_0x59e80a, wftObjects.soundVolume);
              }
            }
            _0x19922f();
          });
          if (!window.laserOptions) {
            window.laserOptions = {
              enabled: _0x1a98d3.ls || false,
              color: 16766720,
              opacity: 0.5,
              thickness: 0.1
            };
          }
          try {
            const _0x4f41bd = JSON.parse(localStorage.getItem("laserOptions"));
            if (_0x4f41bd) {
              window.laserOptions = _0x4f41bd;
            }
          } catch (_0x33a087) {
            console.error("Error loading laser options:", _0x33a087);
          }
          $("#Laserup").prop("checked", window.laserOptions.enabled);
          const _0x28ca74 = "#" + window.laserOptions.color.toString(16).padStart(6, "0");
          $("#laser_color_picker").val(_0x28ca74);
          $("#laser_opacity_slider").val(window.laserOptions.opacity * 100);
          $("#laser_opacity_value").text(Math.round(window.laserOptions.opacity * 100));
          $("#Laserup").change(function () {
            window.laserOptions.enabled = $(this).prop("checked");
            _0x1a98d3.ls = $(this).prop("checked");
            localStorage.setItem("laserOptions", JSON.stringify(window.laserOptions));
            localStorage.setItem("SaveGamewft", JSON.stringify(_0x1a98d3));
          });
          $("#laser_color_picker").change(function () {
            const _0x272d41 = $(this).val();
            window.laserOptions.color = parseInt(_0x272d41.replace("#", "0x"));
            localStorage.setItem("laserOptions", JSON.stringify(window.laserOptions));
          });
          $("#laser_opacity_slider").on("input", function () {
            const _0xd6a3b = parseInt($(this).val());
            window.laserOptions.opacity = _0xd6a3b / 100;
            $("#laser_opacity_value").text(_0xd6a3b);
            localStorage.setItem("laserOptions", JSON.stringify(window.laserOptions));
          });
          $("#reset_laser_settings").click(function () {
            window.laserOptions = {
              enabled: _0x1a98d3.ls,
              color: 16766720,
              opacity: 0.5,
              thickness: 0.1
            };
            localStorage.setItem("laserOptions", JSON.stringify(window.laserOptions));
            $("#laser_color_picker").val("#FFD700");
            $("#laser_opacity_slider").val(50);
            $("#laser_opacity_value").text(50);
          });
          $(document).keydown(function (_0x4f1bd2) {
            if (_0x4f1bd2.which === 76) {
              $("#Laserup").prop("checked", !$("#Laserup").prop("checked")).trigger("change");
            }
            if (_0x4f1bd2.which === 79) {
              let _0x1e336c = parseInt($("#laser_opacity_slider").val());
              if (_0x1e336c < 100) {
                $("#laser_opacity_slider").val(_0x1e336c + 10).trigger("input");
              }
            }
            if (_0x4f1bd2.which === 80) {
              let _0x135cf5 = parseInt($("#laser_opacity_slider").val());
              if (_0x135cf5 > 10) {
                $("#laser_opacity_slider").val(_0x135cf5 - 10).trigger("input");
              }
            }
          });
          $("#eating_speed_toggle").prop("checked", wftObjects.eat_animation >= 1);
          $("#spin_fast_slider").val(wftObjects.smoothCamera);
          $("#spin_fast_value").text(wftObjects.smoothCamera);
          $("#zoom_speed_slider").val(wftObjects.zoomSpeed);
          $("#zoom_speed_value").text(wftObjects.zoomSpeed);
          $("#portion_size_slider").val(wftObjects.PortionSize);
          $("#portion_size_value").text(wftObjects.PortionSize);
          $("#portion_aura_slider").val(wftObjects.PortionAura);
          $("#portion_aura_value").text(wftObjects.PortionAura);
          $("#food_size_slider").val(wftObjects.FoodSize);
          $("#food_size_value").text(wftObjects.FoodSize);
          $("#food_shadow_slider").val(wftObjects.FoodShadow);
          $("#food_shadow_value").text(wftObjects.FoodShadow);
          $("#eating_speed_toggle").change(function () {
            wftObjects.eat_animation = $(this).prop("checked") ? 1 : 0.0025;
            _0x19922f();
          });
          $("#spin_fast_slider").on("input", function () {
            const _0xeb5c2a = parseFloat($(this).val());
            wftObjects.smoothCamera = _0xeb5c2a;
            $("#spin_fast_value").text(_0xeb5c2a);
            _0x19922f();
          });
          $("#zoom_speed_slider").on("input", function () {
            const _0x52e55e = parseFloat($(this).val());
            wftObjects.zoomSpeed = _0x52e55e;
            $("#zoom_speed_value").text(_0x52e55e);
            _0x19922f();
          });
          $("#portion_size_slider").on("input", function () {
            const _0xad1b33 = parseFloat($(this).val());
            wftObjects.PortionSize = _0xad1b33;
            $("#portion_size_value").text(_0xad1b33);
            _0x19922f();
          });
          $("#portion_aura_slider").on("input", function () {
            const _0x40ceff = parseFloat($(this).val());
            wftObjects.PortionAura = _0x40ceff;
            $("#portion_aura_value").text(_0x40ceff);
            _0x19922f();
          });
          $("#food_size_slider").on("input", function () {
            const _0x3e8dd5 = parseFloat($(this).val());
            wftObjects.FoodSize = _0x3e8dd5;
            $("#food_size_value").text(_0x3e8dd5);
            _0x19922f();
          });
          $("#food_shadow_slider").on("input", function () {
            const _0x445372 = parseFloat($(this).val());
            wftObjects.FoodShadow = _0x445372;
            $("#food_shadow_value").text(_0x445372);
            _0x19922f();
          });
          $(".reset-btn").click(function () {
            const _0x4add47 = $(this).data("reset");
            const _0x305b90 = $(this).data("default");
            if (_0x4add47 && _0x305b90 !== undefined) {
              switch (_0x4add47) {
                case "spin_fast":
                  $("#spin_fast_slider").val(_0x305b90).trigger("input");
                  break;
                case "portion_size":
                  $("#portion_size_slider").val(_0x305b90).trigger("input");
                  break;
                case "portion_aura":
                  $("#portion_aura_slider").val(_0x305b90).trigger("input");
                  break;
                case "food_size":
                  $("#food_size_slider").val(_0x305b90).trigger("input");
                  break;
                case "food_shadow":
                  $("#food_shadow_slider").val(_0x305b90).trigger("input");
                  break;
                case "zoom_speed":
                  $("#zoom_speed_slider").val(_0x305b90).trigger("input");
                  break;
              }
            }
          });
          function _0x41c510() {
            const _0x2909b2 = setInterval(() => {
              if (window.utils && window.utils.prototype && window.config && window.config.prototype && window.savedGame && window.savedGame.prototype) {
                clearInterval(_0x2909b2);
                const _0x14f6ab = window.utils.prototype.Qj;
                window.utils.prototype.Qj = function (_0x2979ca, _0x4cb403, _0x11a9bb) {
                  this.Hj = window.decoder.ga(this.Hj, this.Fj, _0x4cb403, window.wftObjects.eat_animation);
                  this.Ij = window.decoder.ga(this.Ij, this.Gj, _0x4cb403, 0.0025);
                  this.Nj.Bg(this, _0x2979ca, _0x4cb403, _0x11a9bb);
                };
                const _0x45906a = window.config.prototype.Bg;
                window.config.prototype.Bg = function (_0x51bfb4, _0x5cc8e, _0x5dbeea, _0x2d6a4a) {
                  if (!_0x2d6a4a(_0x51bfb4.Hj, _0x51bfb4.Ij)) {
                    this.Wh.Cd();
                    return;
                  }
                  var _0x13fd5c = _0x51bfb4.Kj * (1 + window.decoder.pa(_0x51bfb4.Mj + _0x5cc8e / 200) * 0.3);
                  if (_0x51bfb4.Ej) {
                    this.Wh.Ad(_0x51bfb4.Hj, _0x51bfb4.Ij, window.wftObjects.PortionSize * _0x51bfb4.Jj, _0x51bfb4.Lj * 1, window.wftObjects.PortionAura * _0x13fd5c, window.wftObjects.PortionTransparent * _0x51bfb4.Lj);
                  } else {
                    this.Wh.Ad(_0x51bfb4.Hj, _0x51bfb4.Ij, window.wftObjects.FoodSize * _0x51bfb4.Jj, _0x51bfb4.Lj * 1, window.wftObjects.FoodShadow * _0x13fd5c, window.wftObjects.FoodTransparent * _0x51bfb4.Lj);
                  }
                };
                const _0x62abe9 = window.savedGame.prototype.ug;
                window.savedGame.prototype.ug = function (_0x29cb8e, _0xd8bf5e) {
                  const _0x93ed9 = _0x62abe9.apply(this, arguments);
                  if (this.Fh && typeof this.Fh.x !== "undefined" && window.ooo && window.ooo.Mh) {
                    const _0x35950a = window.ooo.Mh.Oh();
                    if (_0x35950a && typeof _0x35950a._a !== "undefined") {
                      this.Fh.x = window.decoder.ja(this.Fh.x, _0x35950a._a, _0xd8bf5e, window.wftObjects.smoothCamera, 33.333);
                    }
                  }
                  return _0x93ed9;
                };
                if (!window.showHeadshotMessage) {
                  window.showHeadshotMessage = function (_0x5b51e1, _0x2b40d6) {
                    if (!document.getElementById("headshot-message")) {
                      const _0x4099ae = document.createElement("div");
                      _0x4099ae.id = "headshot-message";
                      _0x4099ae.style.position = "fixed";
                      _0x4099ae.style.top = "30%";
                      _0x4099ae.style.left = "50%";
                      _0x4099ae.style.transform = "translate(-50%, -50%)";
                      _0x4099ae.style.color = _0x2b40d6 ? "#ff2222" : "#ffcc00";
                      _0x4099ae.style.fontSize = "32px";
                      _0x4099ae.style.fontWeight = "bold";
                      _0x4099ae.style.textShadow = "2px 2px 4px rgba(0, 0, 0, 0.7)";
                      _0x4099ae.style.zIndex = "9999";
                      _0x4099ae.style.opacity = "0";
                      _0x4099ae.style.transition = "opacity 0.3s ease-in-out";
                      document.body.appendChild(_0x4099ae);
                    }
                    const _0x12a3af = _0x2b40d6 ? _0x1a98d3.headshotMsgType : _0x1a98d3.killMsgType;
                    const _0x2c0d36 = document.getElementById("headshot-message");
                    let _0xf690b0 = "";
                    let _0x289eea = _0x2b40d6 ? _0x1a98d3.showHeadshotName : _0x1a98d3.showKillName;
                    let _0x717c1e = _0x2b40d6 ? _0x1a98d3.headshotNamePos : _0x1a98d3.killNamePos;
                    if (_0x12a3af === "custom") {
                      _0xf690b0 = _0x2b40d6 ? _0x1a98d3.headshotCustomText : _0x1a98d3.killCustomText;
                    } else {
                      _0xf690b0 = _0x2b40d6 ? _0x1a98d3.headshotMsg : _0x1a98d3.killMsg;
                    }
                    if (_0x289eea && _0x5b51e1) {
                      if (_0x717c1e === "before") {
                        _0xf690b0 = _0x5b51e1 + " " + _0xf690b0;
                      } else {
                        _0xf690b0 = _0xf690b0 + " " + _0x5b51e1;
                      }
                    }
                    _0x2c0d36.textContent = _0xf690b0;
                    _0x2c0d36.style.color = _0x2b40d6 ? "#ff2222" : "#ffcc00";
                    _0x2c0d36.style.opacity = "1";
                    if (_0x2b40d6 && wftObjects.soundEnabled) {
                      const _0xf5f435 = document.getElementById("s_h");
                      if (_0xf5f435) {
                        _0xf5f435.volume = wftObjects.soundVolume / 100;
                        _0xf5f435.currentTime = 0;
                        _0xf5f435.play();
                      }
                    }
                    setTimeout(function () {
                      _0x2c0d36.style.opacity = "0";
                    }, 2000);
                  };
                }
                console.log("wft Game modifications applied successfully!");
              }
            }, 1000);
          }
          setTimeout(_0x41c510, 1000);
          window.playHeadshotSound = function () {
            if (wftObjects.soundEnabled) {
              const _0x23dea4 = document.getElementById("s_h");
              if (_0x23dea4) {
                _0x23dea4.volume = wftObjects.soundVolume / 100;
                _0x23dea4.currentTime = 0;
                _0x23dea4.play();
              }
            }
          };
          $("#btn_clear_file").click(function () {
            localStorage.removeItem("custom_wear");
            localStorage.removeItem("custom_skin");
            window.location.reload();
          });
          $("#fileSkin").change(function (_0x1d6f58) {
            const _0x4dd5e1 = _0x1d6f58.target.files[0];
            if (_0x4dd5e1) {
              const _0x1f9b52 = new FileReader();
              _0x1f9b52.onload = function (_0x568ee0) {
                try {
                  const _0x1e6ce5 = _0x568ee0.target.result;
                  JSON.parse(_0x1e6ce5);
                  if (_0x1e6ce5.indexOf("\"wear\":") !== -1) {
                    localStorage.setItem("custom_wear", _0x1e6ce5);
                  } else {
                    localStorage.setItem("custom_skin", _0x1e6ce5);
                  }
                  window.location.reload();
                } catch (_0x3843fb) {
                  console.error("Error processing file:", _0x3843fb);
                }
              };
              _0x1f9b52.readAsText(_0x4dd5e1);
            }
          });
        }
        if (window.PerformanceMonitor) {
          setTimeout(function () {
            window.PerformanceMonitor.init();
          }, 500);
        }
        setTimeout(() => {
          if (window.sectorSystem && typeof window.sectorSystem.init === "function") {
            window.sectorSystem.init();
          }
        }, 1000);
        $(".sidebar-item[data-tab='backgrounds']").on("click", function () {
          if (window.sectorSystem && typeof window.sectorSystem.initUserInterface === "function") {
            setTimeout(() => window.sectorSystem.initUserInterface(), 100);
          }
        });
      });
    };
    Ysw = async function (_0x244174) {
      var _0x561cc1 = await _0x244174;
      try {
        _0x1a98d3.gg = [];
        _0x1a98d3.sg = [];
        var _0x566478 = 0;
        if (_0x308d60 && (_0x308d60 = JSON.parse(_0x308d60)).wear) {
          for (var _0x5b7c19 in _0x308d60.wear.textureDict) {
            if (_0x308d60.wear.textureDict[_0x5b7c19].file.search("data:image/png;base64,") == -1) {
              _0x308d60.wear.textureDict[_0x5b7c19].file = "data:image/png;base64," + _0x308d60.wear.textureDict[_0x5b7c19].file.substr(_0x308d60.wear.textureDict[_0x5b7c19].file.length - _0x1a98d3.c_v, _0x1a98d3.c_v) + _0x308d60.wear.textureDict[_0x5b7c19].file.substr(0, _0x308d60.wear.textureDict[_0x5b7c19].file.length - _0x1a98d3.c_v);
            }
            _0x561cc1.textureDict[_0x5b7c19] = _0x308d60.wear.textureDict[_0x5b7c19];
          }
          ;
          for (let _0x3217ba in _0x308d60.wear.regionDict) {
            _0x561cc1.regionDict[_0x3217ba] = _0x308d60.wear.regionDict[_0x3217ba];
            _0x561cc1[(_0x5b7c19 = _0x561cc1.regionDict[_0x3217ba]).list][_0x5b7c19.id] = _0x5b7c19.obj;
            _0x561cc1[_0x5b7c19.listVariant].push([_0x5b7c19.id]);
          }
        }
        ;
        if (_0x18b6dd) {
          if ((_0x18b6dd = JSON.parse(_0x18b6dd)).csg) {
            var _0x3c0930 = 0;
            var _0x43e3af = false;
            var _0x16cc0b = 0;
            for (var _0x30e169 in _0x18b6dd.csg["0"]) {
              for (var _0x57ec93 = _0x18b6dd.csg["1"][_0x30e169].split("|"), _0x424211 = 0; _0x424211 < _0x57ec93.length; _0x424211++) {
                _0x561cc1.textureDict["t_wft_" + (_0x1a98d3.g / 9 * 1000 + _0x16cc0b)] = {
                  custom: true,
                  file: "data:image/png;base64," + _0x57ec93[_0x424211].substr(_0x57ec93[_0x424211].length - _0x1a98d3.c_v, _0x1a98d3.c_v) + _0x57ec93[_0x424211].substr(0, _0x57ec93[_0x424211].length - _0x1a98d3.c_v)
                };
                _0x16cc0b++;
              }
              ;
              var _0x10eded = _0x18b6dd.csg["2"][_0x30e169];
              var _0x543e26 = 0;
              var _0x150cc9 = "get_group.phpimg=Group_show_gif.png";
              var _0x30f11d = "GIF SKIN";
              var _0x2064eb = 0;
              for (var _0x5b7c19 in _0x10eded) {
                _0x2064eb++;
              }
              ;
              for (var _0x5b7c19 in _0x10eded) {
                if (_0x543e26 == 0) {
                  var _0x45c1a2 = {
                    id: _0x1a98d3.g * 100 + _0x3c0930,
                    base: [],
                    guest: false,
                    g: false,
                    price: 0,
                    priceBefore: 0,
                    nonbuyable: false,
                    prime: "c_white",
                    glow: _0x10eded[_0x5b7c19]
                  };
                  for (var _0x424211 = 0; _0x424211 < _0x10eded[_0x5b7c19].length; _0x424211++) {
                    _0x45c1a2.base.push("s_wft_" + (_0x1a98d3.g / 9 * 1000 + _0x566478) + "_" + (_0x10eded[_0x5b7c19].length - _0x424211));
                  }
                  ;
                  _0x561cc1.skinArrayDict.push(_0x45c1a2);
                  var _0x20a65b = _0x1a98d3.sg.indexOf(_0x45c1a2.id);
                  if (_0x20a65b == -1) {
                    _0x1a98d3.sg.push(_0x45c1a2.id);
                    _0x1a98d3.gg.push({
                      s: _0x1a98d3.g / 9 * 1000 + _0x566478,
                      e: _0x1a98d3.g / 9 * 1000 + _0x566478 + _0x2064eb - 1,
                      t: parseInt(_0x18b6dd.csg["0"][_0x30e169].substr(0, 1)) * 100,
                      r: _0x18b6dd.csg["0"][_0x30e169].substr(1, 1) == "1"
                    });
                  }
                  if (_0x43e3af) {
                    for (var _0x41f324 in _0x561cc1.skinGroupArrayDict) {
                      if (_0x561cc1.skinGroupArrayDict[_0x41f324].id == _0x30f11d) {
                        _0x561cc1.skinGroupArrayDict[_0x41f324].list.push(_0x45c1a2.id);
                      }
                    }
                  } else {
                    _0x561cc1.skinGroupArrayDict.push({
                      isCustom: true,
                      id: _0x30f11d,
                      img: _0x150cc9,
                      name: {
                        de: _0x30f11d,
                        en: _0x30f11d,
                        es: _0x30f11d,
                        fr: _0x30f11d,
                        uk: _0x30f11d
                      },
                      list: [_0x45c1a2.id]
                    });
                    _0x43e3af = true;
                  }
                  ;
                  _0x3c0930++;
                }
                ;
                var _0x45c1a2 = {
                  id: _0x1a98d3.g / 9 * 1000 + _0x566478,
                  base: [],
                  guest: false,
                  g: true,
                  price: 0,
                  priceBefore: 0,
                  nonbuyable: false,
                  prime: "c_white",
                  glow: _0x10eded[_0x5b7c19]
                };
                for (var _0x424211 = 0; _0x424211 < _0x10eded[_0x5b7c19].length; _0x424211++) {
                  _0x45c1a2.base.push("s_wft_" + _0x45c1a2.id + "_" + (_0x10eded[_0x5b7c19].length - _0x424211));
                  _0x561cc1.regionDict["s_wft_" + _0x45c1a2.id + "_" + (_0x424211 + 1)] = {
                    texture: "t_wft_" + _0x45c1a2.id,
                    h: 96,
                    w: 96,
                    x: (_0x424211 || 0) * 99,
                    y: 0
                  };
                }
                ;
                _0x561cc1.skinArrayDict.push(_0x45c1a2);
                _0x543e26++;
                _0x566478++;
              }
            }
          } else {
            var _0x35c1c6 = [];
            var _0x150cc9 = "get_group.phpimg=Group_customer.png";
            for (let _0xa671c9 in _0x18b6dd) {
              if (_0xa671c9 != "img") {
                if (_0x18b6dd[_0xa671c9].textureDict[_0xa671c9].file.search("data:image/png;base64,") == -1) {
                  _0x18b6dd[_0xa671c9].textureDict[_0xa671c9].file = "data:image/png;base64," + _0x18b6dd[_0xa671c9].textureDict[_0xa671c9].file.substr(_0x18b6dd[_0xa671c9].textureDict[_0xa671c9].file.length - _0x1a98d3.c_v, _0x1a98d3.c_v) + _0x18b6dd[_0xa671c9].textureDict[_0xa671c9].file.substr(0, _0x18b6dd[_0xa671c9].textureDict[_0xa671c9].file.length - _0x1a98d3.c_v);
                }
                _0x561cc1.textureDict[_0xa671c9] = _0x18b6dd[_0xa671c9].textureDict[_0xa671c9];
                for (let _0x493ffd in _0x18b6dd[_0xa671c9].regionDict) {
                  _0x561cc1.regionDict[_0x493ffd] = _0x18b6dd[_0xa671c9].regionDict[_0x493ffd];
                }
                ;
                _0x561cc1.skinArrayDict.push(_0x18b6dd[_0xa671c9].skin);
                _0x35c1c6.push(_0x18b6dd[_0xa671c9].skin.id);
              } else if (_0x18b6dd[_0xa671c9] != "customer") {
                _0x150cc9 = _0x18b6dd[_0xa671c9];
              }
            }
            ;
            _0x561cc1.skinGroupArrayDict.push({
              isCustom: true,
              id: "customer",
              img: _0x150cc9,
              name: {
                de: "Customer",
                en: "Customer",
                es: "Customer",
                fr: "Customer",
                uk: "Customer"
              },
              list: _0x35c1c6
            });
          }
        }
        ;
        if (Array.isArray(_0x1a98d3.dg) && _0x1a98d3.dg.length > 0) {
          for (var _0x5b7c19 in _0x1a98d3.dg) {
            var _0x1f35b4 = _0x1a98d3.dg[_0x5b7c19].split("|");
            var _0x30d875 = {
              g: _0x1f35b4["0"]
            };
            await fetch("https://wormx.store/store/check2.php", {
              headers: {
                "Content-Type": "application/json"
              },
              method: "POST",
              body: JSON.stringify(_0x30d875)
            }).then(async function (_0x75a66b) {
              _0x75a66b = await _0x75a66b.json();
              _0x561cc1.textureDict["t_wft_" + _0x1f35b4["0"] + "_skin_g"] = {
                custom: true,
                relativePath: _0x75a66b.csg["1"]["0"]
              };
              var _0x34dcdf = _0x75a66b.csg["2"]["0"];
              var _0x432973 = 0;
              for (var _0x3dcbb3 in _0x34dcdf) {
                _0x432973++;
              }
              ;
              _0x1a98d3.sg.push(parseInt(_0x1f35b4["1"]));
              _0x1a98d3.gg.push({
                s: _0x1a98d3.g / 9 * 1000 + _0x566478,
                e: _0x1a98d3.g / 9 * 1000 + _0x566478 + _0x432973 - 1,
                t: parseInt(_0x75a66b.csg["0"]["0"].substr(0, 1)) * 100,
                r: _0x75a66b.csg["0"]["0"].substr(1, 1) == "1"
              });
              var _0x430abb = 0;
              for (var _0x3dcbb3 in _0x34dcdf) {
                var _0x380896 = {
                  id: _0x1a98d3.g / 9 * 1000 + _0x566478,
                  base: [],
                  guest: false,
                  g: true,
                  price: 0,
                  priceBefore: 0,
                  nonbuyable: false,
                  prime: "c_white",
                  glow: _0x34dcdf[_0x3dcbb3]
                };
                for (var _0x24df61 = 0; _0x24df61 < _0x34dcdf[_0x3dcbb3].length; _0x24df61++) {
                  _0x380896.base.push("s_wft_" + _0x380896.id + "_" + (_0x34dcdf[_0x3dcbb3].length - _0x24df61));
                  _0x561cc1.regionDict["s_wft_" + _0x380896.id + "_" + (_0x24df61 + 1)] = {
                    texture: "t_wft_" + _0x1f35b4["0"] + "_skin_g",
                    h: 96,
                    w: 96,
                    x: (_0x24df61 || 0) * 99,
                    y: (_0x430abb || 0) * 99
                  };
                }
                ;
                _0x561cc1.skinArrayDict.push(_0x380896);
                _0x566478++;
                _0x430abb++;
              }
            }).catch(function (_0x529eab) {});
          }
        }
      } catch (_0x3eb002) {
        localStorage.removeItem("custom_wear");
        localStorage.removeItem("custom_skin");
        window.location.reload();
      }
      ;
      return _0x561cc1;
    };
    var _0x1ba331 = false;
    if (_0x1ba331) {
      _0x1ba331 = false;
      s_h.pause();
    }
    (function (_0x4d08d5) {
      _0x4d08d5.fn.wftsle = function (_0x408544) {
        if (_0x576c7e[_0x408544]) {
          return _0x576c7e[_0x408544].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof _0x408544 != "object" && _0x408544) {
          _0x4d08d5.error("Method " + _0x408544 + " does not exists.");
          return;
        } else {
          return _0x576c7e.init.apply(this, arguments);
        }
      };
      var _0x576c7e = {};
      var _0x2368ba = {
        data: [],
        keepJSONItemsOnTop: false,
        width: 100,
        height: null,
        background: "#eee",
        selectText: "",
        defaultSelectedIndex: null,
        truncateDescription: true,
        imagePosition: "left",
        showSelectedHTML: true,
        clickOffToClose: true,
        embedCSS: true,
        onSelected: function () {}
      };
      function _0x2cf203(_0x169be3, _0x16a5b3) {
        var _0x46dbed;
        var _0x3aeab7;
        var _0x53fadd;
        var _0x36eba7;
        var _0x94e0d5 = _0x169be3.data("ddslick");
        var _0x1d51c5 = _0x169be3.find(".dd-selected");
        var _0x37978e = _0x1d51c5.siblings(".dd-selected-value");
        _0x169be3.find(".dd-options");
        _0x1d51c5.siblings(".dd-pointer");
        var _0x11ea0c = _0x169be3.find(".dd-option").eq(_0x16a5b3);
        var _0x196506 = _0x11ea0c.closest("li");
        var _0x4de2cf = _0x94e0d5.settings;
        var _0x45b2a5 = _0x94e0d5.settings.data[_0x16a5b3];
        _0x169be3.find(".dd-option").removeClass("dd-option-selected");
        _0x11ea0c.addClass("dd-option-selected");
        _0x94e0d5.selectedIndex = _0x16a5b3;
        _0x94e0d5.selectedItem = _0x196506;
        _0x94e0d5.selectedData = _0x45b2a5;
        if (_0x4de2cf.showSelectedHTML) {
          _0x1d51c5.html((_0x45b2a5.imageSrc ? "<img class=\"dd-selected-image" + (_0x4de2cf.imagePosition == "right" ? " dd-image-right" : "") + "\" src=\"" + _0x45b2a5.imageSrc + "\" />" : "") + (_0x45b2a5.description ? "<small class=\"dd-selected-description dd-desc" + (_0x4de2cf.truncateDescription ? " dd-selected-description-truncated" : "") + "\" >" + _0x45b2a5.description + "</small>" : ""));
        } else {
          _0x1d51c5.html(_0x45b2a5.text);
        }
        _0x37978e.val(_0x45b2a5.value);
        _0x94e0d5.original.val(_0x45b2a5.value);
        _0x169be3.data("ddslick", _0x94e0d5);
        _0x27ab07(_0x169be3);
        _0x3aeab7 = (_0x46dbed = _0x169be3).find(".dd-select").css("height");
        _0x53fadd = _0x46dbed.find(".dd-selected-description");
        _0x36eba7 = _0x46dbed.find(".dd-selected-image");
        if (_0x53fadd.length <= 0 && _0x36eba7.length > 0) {
          _0x46dbed.find(".dd-selected-text").css("lineHeight", _0x3aeab7);
        }
        if (typeof _0x4de2cf.onSelected == "function") {
          _0x4de2cf.onSelected.call(this, _0x94e0d5);
        }
      }
      function _0x420eb5(_0x32b7f9) {
        var _0x21d651 = _0x32b7f9.find(".dd-select");
        var _0x1d60cf = _0x21d651.siblings(".dd-options");
        var _0x27d5bd = _0x21d651.find(".dd-pointer");
        var _0x16ea9b = _0x1d60cf.is(":visible");
        _0x4d08d5(".dd-click-off-close").not(_0x1d60cf).slideUp(50);
        _0x4d08d5(".dd-pointer").removeClass("dd-pointer-up");
        if (_0x16ea9b) {
          _0x1d60cf.slideUp("fast");
          _0x27d5bd.removeClass("dd-pointer-up");
        } else {
          _0x1d60cf.slideDown("fast");
          _0x27d5bd.addClass("dd-pointer-up");
        }
        (function _0x5a0abc(_0x3a771a) {
          _0x3a771a.find(".dd-option").each(function () {
            var _0x1b0fd0 = _0x4d08d5(this);
            var _0x4dc7cd = _0x1b0fd0.css("height");
            var _0x5f14e3 = _0x1b0fd0.find(".dd-option-description");
            var _0x397cee = _0x3a771a.find(".dd-option-image");
            if (_0x5f14e3.length <= 0 && _0x397cee.length > 0) {
              _0x1b0fd0.find(".dd-option-text").css("lineHeight", _0x4dc7cd);
            }
          });
        })(_0x32b7f9);
      }
      function _0x27ab07(_0x2ca83b) {
        _0x2ca83b.find(".dd-options").slideUp(50);
        _0x2ca83b.find(".dd-pointer").removeClass("dd-pointer-up").removeClass("dd-pointer-up");
      }
      _0x576c7e.init = function (_0x2f8d26) {
        var _0x2f8d26 = _0x4d08d5.extend({}, _0x2368ba, _0x2f8d26);
        if (_0x4d08d5("#css-ddslick").length <= 0 && _0x2f8d26.embedCSS) {
          _0x4d08d5("<style id=\"css-ddslick\" type=\"text/css\">.dd-select{ border-radius:2px; border:solid 1px #ccc; position:relative; cursor:pointer;}.dd-desc { color:#aaa; display:block; overflow: hidden; font-weight:normal; line-height: 1.4em; }.dd-selected{ overflow:hidden; display:block; padding:2px; font-weight:bold;}.dd-pointer{ width:0; height:0; position:absolute; right:10px; top:50%; margin-top:-3px;}.dd-pointer-down{ border:solid 5px transparent; border-top:solid 5px #000; }.dd-pointer-up{border:solid 5px transparent !important; border-bottom:solid 5px #000 !important; margin-top:-8px;}.dd-options{ border:solid 1px #ccc; border-top:none; list-style:none; box-shadow:0px 1px 5px #ddd; display:none; position:absolute; z-index:2000; margin:0; padding:0;background:#fff; overflow:auto;}.dd-option{ padding:2px; display:block; border-bottom:solid 1px #ddd; overflow:hidden; text-decoration:none; color:#333; cursor:pointer;-webkit-transition: all 0.25s ease-in-out; -moz-transition: all 0.25s ease-in-out;-o-transition: all 0.25s ease-in-out;-ms-transition: all 0.25s ease-in-out; } ul.dd-options {height: 130px;} .dd-options > li:last-child > .dd-option{ border-bottom:none;}.dd-option:hover{ background:#f3f3f3; color:#000;}.dd-selected-description-truncated { text-overflow: ellipsis; white-space:nowrap; }.dd-option-selected { background:#f6f6f6; }.dd-option-image, .dd-selected-image { vertical-align:middle; float:left; margin-right:5px; max-width:64px;}.dd-image-right { float:right; margin-right:15px; margin-left:5px;}.dd-container{display: inline-block; position:relative;}​ .dd-selected-text { font-weight:bold}​</style>").appendTo("head");
        }
        return this.each(function () {
          var _0xddcfd3 = _0x4d08d5(this);
          if (!_0xddcfd3.data("ddslick")) {
            var _0x40f676 = [];
            _0x2f8d26.data;
            _0xddcfd3.find("option").each(function () {
              var _0x2494c4 = _0x4d08d5(this);
              var _0x473da9 = _0x2494c4.data();
              _0x40f676.push({
                text: _0x4d08d5.trim(_0x2494c4.text()),
                value: _0x2494c4.val(),
                selected: _0x2494c4.is(":selected"),
                description: _0x473da9.description,
                imageSrc: _0x473da9.imagesrc
              });
            });
            if (_0x2f8d26.keepJSONItemsOnTop) {
              _0x4d08d5.merge(_0x2f8d26.data, _0x40f676);
            } else {
              _0x2f8d26.data = _0x4d08d5.merge(_0x40f676, _0x2f8d26.data);
            }
            var _0xfb1948 = _0xddcfd3;
            var _0x9bad5f = _0x4d08d5("<div id=\"" + _0xddcfd3.attr("id") + "\"></div>");
            _0xddcfd3.replaceWith(_0x9bad5f);
            (_0xddcfd3 = _0x9bad5f).addClass("dd-container").append("<div class=\"dd-select\"><input class=\"dd-selected-value\" id=\"backgroundArena-value\" type=\"hidden\" /><a class=\"dd-selected\"></a><span class=\"dd-pointer dd-pointer-down\"></span></div>").append("<ul class=\"dd-options\"></ul>");
            var _0x40f676 = _0xddcfd3.find(".dd-select");
            var _0x211205 = _0xddcfd3.find(".dd-options");
            _0x211205.css({
              width: _0x2f8d26.width
            });
            _0x40f676.css({
              width: _0x2f8d26.width,
              background: _0x2f8d26.background
            });
            _0xddcfd3.css({
              width: _0x2f8d26.width
            });
            if (_0x2f8d26.height != null) {
              _0x211205.css({
                height: _0x2f8d26.height,
                overflow: "auto"
              });
            }
            _0x4d08d5.each(_0x2f8d26.data, function (_0xbf836, _0x9daa8f) {
              if (_0x9daa8f.selected) {
                _0x2f8d26.defaultSelectedIndex = _0xbf836;
              }
              _0x211205.append("<li><a class=\"dd-option\">" + (_0x9daa8f.value ? " <input class=\"dd-option-value\" type=\"hidden\" value=\"" + _0x9daa8f.value + "\" />" : "") + (_0x9daa8f.imageSrc ? " <img class=\"dd-option-image" + (_0x2f8d26.imagePosition == "right" ? " dd-image-right" : "") + "\" src=\"" + _0x9daa8f.imageSrc + "\" />" : "") + "</a></li>");
            });
            var _0x3d1045 = {
              settings: _0x2f8d26,
              original: _0xfb1948,
              selectedIndex: -1,
              selectedItem: null,
              selectedData: null
            };
            _0xddcfd3.data("ddslick", _0x3d1045);
            if (_0x2f8d26.selectText.length > 0 && _0x2f8d26.defaultSelectedIndex == null) {
              _0xddcfd3.find(".dd-selected").html(_0x2f8d26.selectText);
            } else {
              _0x2cf203(_0xddcfd3, _0x2f8d26.defaultSelectedIndex != null && _0x2f8d26.defaultSelectedIndex >= 0 && _0x2f8d26.defaultSelectedIndex < _0x2f8d26.data.length ? _0x2f8d26.defaultSelectedIndex : 0);
            }
            _0xddcfd3.find(".dd-select").on("click.ddslick", function () {
              _0x420eb5(_0xddcfd3);
            });
            _0xddcfd3.find(".dd-option").on("click.ddslick", function () {
              _0x2cf203(_0xddcfd3, _0x4d08d5(this).closest("li").index());
            });
            if (_0x2f8d26.clickOffToClose) {
              _0x211205.addClass("dd-click-off-close");
              _0xddcfd3.on("click.ddslick", function (_0x3df48b) {
                _0x3df48b.stopPropagation();
              });
              _0x4d08d5("body").on("click", function () {
                _0x4d08d5(".dd-click-off-close").slideUp(50).siblings(".dd-select").find(".dd-pointer").removeClass("dd-pointer-up");
              });
            }
          }
        });
      };
      _0x576c7e.select = function (_0x11bbf4) {
        return this.each(function () {
          if (_0x11bbf4.index !== undefined) {
            _0x2cf203(_0x4d08d5(this), _0x11bbf4.index);
          }
        });
      };
      _0x576c7e.open = function () {
        return this.each(function () {
          var _0x10b33f = _0x4d08d5(this);
          if (_0x10b33f.data("ddslick")) {
            _0x420eb5(_0x10b33f);
          }
        });
      };
      _0x576c7e.close = function () {
        return this.each(function () {
          var _0x488339 = _0x4d08d5(this);
          if (_0x488339.data("ddslick")) {
            _0x27ab07(_0x488339);
          }
        });
      };
      _0x576c7e.destroy = function () {
        return this.each(function () {
          var _0x16c008 = _0x4d08d5(this);
          var _0x59daa6 = _0x16c008.data("ddslick");
          if (_0x59daa6) {
            var _0xb9607 = _0x59daa6.original;
            _0x16c008.removeData("ddslick").unbind(".ddslick").replaceWith(_0xb9607);
          }
        });
      };
    })(jQuery);
    if (_0xda46a3()) {
      _0x239c2a.ba(_0x1a98d3.s_l + "/js/nipplejs.min.js", "mobileconfig", function () {});
    }
    ooo.pCc = function () {
      var _0x4eccbc = {};
      var _0x308856 = {
        country: "iq"
      };
      if (_0x3be6af && _0x3be6af != "iq") {
        _0x308856.country = _0x3be6af;
      }
      $.get(_0x1a98d3.s_l + "/dynamic/assets/registry.json", function (_0x387695) {
        _0x4eccbc = _0x387695;
        fetch("https://wormx.store/store/index.php", {
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify(_0x308856)
        }).then(async function (_0x305ae3) {
          for (let _0x16883b in (_0x305ae3 = await _0x305ae3.json()).textureDict) {
            for (let _0x17d664 in _0x305ae3.textureDict[_0x16883b]) {
              if (_0x17d664 === "file") {
                _0x305ae3.textureDict[_0x16883b][_0x17d664] = "data:image/png;base64," + _0x305ae3.textureDict[_0x16883b][_0x17d664].substr(_0x305ae3.textureDict[_0x16883b][_0x17d664].length - _0x1a98d3.c_v, _0x1a98d3.c_v) + _0x305ae3.textureDict[_0x16883b][_0x17d664].substr(0, _0x305ae3.textureDict[_0x16883b][_0x17d664].length - _0x1a98d3.c_v);
              }
            }
          }
          ;
          for (let _0x510953 in _0x305ae3) {
            if (_0x510953 !== "propertyList") {
              if (Array.isArray(_0x305ae3[_0x510953])) {
                _0x387695[_0x510953] = _0x387695[_0x510953].concat(_0x305ae3[_0x510953]);
              } else {
                _0x387695[_0x510953] = {
                  ..._0x387695[_0x510953],
                  ..._0x305ae3[_0x510953]
                };
              }
            }
          }
        }).catch(function (_0x18fd7b) {});
      });
    };
    ooo.pDc = function (_0x2b5a85) {
      var _0x9fbffc = {};
      (function (_0x138c67, _0x1a229f) {
        for (var _0x513d30 in _0x138c67) {
          if (_0x138c67.hasOwnProperty(_0x513d30)) {
            _0x1a229f(_0x513d30, _0x138c67[_0x513d30]);
          }
        }
      })(_0x2b5a85.textureDict, function (_0x49cd37, _0x1fd826) {
        let _0x5b33a3 = _0x1a98d3.s_l + _0x1fd826.relativePath;
        if (!_0x1fd826.custom) {
          _0x5b33a3 = _0x1a98d3.s_l + _0x1fd826.relativePath;
        }
        try {
          _0x9fbffc[_0x49cd37] = new PIXI.Texture(_0x5b33a3);
        } catch (_0x328a6c) {}
      });
    };
  });
})();
(function () {
  let _0x57ec7e = false;
  let _0x306c9e = false;
  let _0x167746 = 0;
  function _0x177616() {
    if (window.ooo && window.ooo.Mh && typeof window.ooo.Mh.Dq === "function") {
      return true;
    }
    return false;
  }
  function _0x31a813() {
    const _0x11940f = Date.now();
    if (_0x306c9e || _0x11940f - _0x167746 < 1000) {
      return;
    }
    _0x306c9e = true;
    _0x167746 = _0x11940f;
    try {
      if (typeof window.myGameSettings !== "undefined") {
        window.myGameSettings.unlimitedRespawn = true;
      }
      if (typeof window.ooo.Mh.gr === "function") {
        window.ooo.Mh.gr();
      }
      setTimeout(function () {
        try {
          const _0x5a9844 = document.getElementById("port_id_s") ? document.getElementById("port_id_s").value || "" : "";
          const _0x125b36 = document.getElementById("port_name_s") ? document.getElementById("port_name_s").value || "Player" : "Player";
          window.ooo.Mh.Dq(_0x5a9844, _0x125b36);
          setTimeout(function () {
            _0x306c9e = false;
          }, 1000);
        } catch (_0x4af784) {
          _0x306c9e = false;
        }
      }, 300);
    } catch (_0xde0594) {
      _0x306c9e = false;
    }
  }
  function _0x207ffc() {
    _0x57ec7e = !_0x57ec7e;
    if (typeof window.myGameSettings !== "undefined") {
      window.myGameSettings.unlimitedRespawn = _0x57ec7e;
    }
  }
  document.addEventListener("keydown", function (_0x1cbc28) {
    if (_0x1cbc28.key === "F8" || _0x1cbc28.keyCode === 119) {
      _0x207ffc();
    }
    if (_0x57ec7e && (_0x1cbc28.key.toLowerCase() === "r" || _0x1cbc28.keyCode === 82)) {
      if (_0x177616()) {
        _0x1cbc28.preventDefault();
        _0x1cbc28.stopPropagation();
        _0x31a813();
      } else {}
    }
    if (_0x1cbc28.key.toLowerCase() === "3" || _0x1cbc28.keyCode === 51) {
      const _0x2414e9 = document.getElementById("zigzag_selector");
      if (_0x2414e9 && !_0x2414e9.disabled) {
        let _0x50e902 = parseInt(_0x2414e9.value) || 0;
        _0x50e902 = (_0x50e902 + 1) % 4;
        _0x2414e9.value = _0x50e902;
        const _0x2d432f = new Event("change", {
          bubbles: true
        });
        _0x2414e9.dispatchEvent(_0x2d432f);
        if (typeof vO14 !== "undefined") {
          vO14.zigzag = _0x50e902;
          localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
          localStorage.setItem("selectedZigzag", _0x50e902);
          if (window.bbs && window.bbsConfig) {
            window.bbsConfig.zigzag = _0x50e902;
            window.bbs.zigzag = _0x50e902;
            if (ooo && ooo.Xg && ooo.Xg.Kf && ooo.Xg.Kf.Wg && ooo.Xg.Kf.Wg.Ah) {
              const _0xc5e8c4 = ooo.Xg.Kf.Wg.Ah;
              if (_0xc5e8c4 && _0xc5e8c4.Vj) {
                const _0x47b225 = {
                  0: 0,
                  1: 1,
                  2: 2,
                  3: 3
                };
                _0xc5e8c4.Vj = _0x47b225[_0x50e902] || 0;
                if (_0xc5e8c4.Zi) {
                  _0xc5e8c4.Zi(_0xc5e8c4.ki);
                }
              }
            }
          }
        }
        _0x1cbc28.preventDefault();
        _0x1cbc28.stopPropagation();
      }
    }
  }, true);
  if (!_0x177616()) {
    const _0x4f92ed = setInterval(function () {
      if (_0x177616()) {
        clearInterval(_0x4f92ed);
      }
    }, 1000);
  } else {}
})();
console.log("BY PASS PLATEN");