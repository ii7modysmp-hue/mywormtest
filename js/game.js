var TRZM = 1;
var SITE_XTHOST = "https://wormateserkanconnect.github.io/WormX";
window.detectLog = null;
const _wrmxt = {
  BETAisSkinCustom(_0xd62eb9) {
    var _0x2e36c = /[a-zA-Z]/;
    return typeof _0xd62eb9 === "string" && _0x2e36c.test(_0xd62eb9);
  },
  testSkinCustom: function (_0x306688) {
    if (_wrmxt.BETAisSkinCustom(_0x306688)) {
      return 34 || 33;
    } else {
      return _0x306688;
    }
  },
  testSkinMod: function (_0x466729) {
    return _0x466729 >= 399 && _0x466729 < 999;
  },
  testWear: function (_0x5515e6) {
    return _0x5515e6 >= 399 && _0x5515e6 < 999;
  },
  isNumberValid: function (_0x592f92) {
    return _0x592f92 !== "" && _0x592f92 !== null && _0x592f92 !== undefined && !isNaN(_0x592f92);
  },
  validInput: function (_0x1dd403) {
    if (!_wrmxt.testSkinMod(_0x1dd403) && !_wrmxt.BETAisSkinCustom(_0x1dd403)) {
      return _0x1dd403;
    }
    try {
      let _0xd311f9 = $("#inputReplaceSkin").val();
      return encodeURI(_wrmxt.isNumberValid(_0xd311f9) ? _0xd311f9 : 35);
    } catch (_0x4c3429) {
      return encodeURI(35);
    }
  },
  aload: false,
  aId: 0
};
var inputReplaceSkin = localStorage.getItem("inputReplaceSkin");
var PilotoAutomatico = null;
var isPlaying = false;
var pwrups = {};
window.keyMove = 81;
var theoEvents = {
  eventoPrincipal: null,
  joystick: {
    positionMode: "L",
    checked: true,
    size: 90,
    mode: "dynamic",
    position: {
      left: "110px",
      bottom: "110px"
    },
    color: "#FF3B3B",
    pxy: 110
  }
};
var theoKzObjects = {
  FB_UserID: "",
  smoothCamera: 0.5,
  eat_animation: 0.0025,
  flag: "https://i.imgur.com/EkbSd65.png",
  PortionSize: localStorage.PotenciadorSize || 2,
  PortionAura: localStorage.PotenciadorAura || 1.2,
  PortionTransparent: 0.8,
  FoodTransparent: 0.3,
  ModeStremer: false,
  arrow: false,
  KeyCodeRespawn: localStorage.KeyRespawn || 82,
  KeyCodeAutoMov: localStorage.KeyAutoMov || window.keyMove,
  AbilityZ: false,
  FoodShadow: localStorage.ComidaShadow || 2,
  FoodSize: localStorage.ComidaSize || 2,
  headshot: 0,
  visibleSkin: [],
  pL: [],
  gamePad: theoEvents.joystick,
  mobile: false,
  loading: false,
  kill: 0,
  totalKills: 0,
  totalHeadshots: 0,
  adblock: false,
  CLIENTE_ADMIN: 1,
  CLIENTE_ACTIVO: 3,
  CLIENTE_INACTIVO: 4
};
saveGameLocal = localStorage.getItem("SaveGameXT");
if (saveGameLocal && saveGameLocal !== "null") {
  let t = JSON.parse(saveGameLocal);
  for (let e in t) {
    theoKzObjects[e] = t[e];
  }
}
theoKzObjects.loading = true;
const PhoneChecked = function () {
  let _0xb44fce = false;
  theoKzObjects.mobile = false;
  var _0x583f28 = navigator.userAgent || navigator.vendor || window.opera;
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge|maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm(os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(_0x583f28) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r|s)|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp(i|ip)|hs\-c|ht(c(\-||_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac(|\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt(|\/)|klon|kpt|kwc\-|kyo(c|k)|le(no|xi)|lg(g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-||o|v)|zz)|mt(50|p1|v)|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v)|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-|)|webc|whit|wi(g|nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(_0x583f28.substr(0, 4))) {
    theoKzObjects.mobile = true;
    _0xb44fce = true;
  }
  return _0xb44fce;
};
const RechekingPhone = function () {
  let _0x23a70c = false;
  var _0x4d3b3e = navigator.userAgent || navigator.vendor || window.opera;
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge|maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm(os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(_0x4d3b3e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r|s)|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp(i|ip)|hs\-c|ht(c(\-||_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac(|\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt(|\/)|klon|kpt|kwc\-|kyo(c|k)|le(no|xi)|lg(g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-||o|v)|zz)|mt(50|p1|v)|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v)|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-|)|webc|whit|wi(g|nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(_0x4d3b3e.substr(0, 4))) {
    _0x23a70c = true;
  }
  return _0x23a70c;
};
const loadJoy = function (_0x149e7f) {
  let _0x3bbb13;
  try {
    console.log(_0x149e7f);
    theoKzObjects.gamePad ||= theoEvents.joystick;
    if (RechekingPhone() && (_0x149e7f || theoKzObjects.gamePad.checked)) {
      _0x3bbb13 = nipplejs.create(theoKzObjects.gamePad);
      _0x3bbb13.on("move", function (_0x5020d5, _0x43d860) {
        theoEvents.eventoPrincipal.sk = _0x43d860.angle.radian <= Math.PI ? _0x43d860.angle.radian * -1 : Math.PI - (_0x43d860.angle.radian - Math.PI);
        console.log(_0x43d860);
      });
    }
    return _0x3bbb13;
  } catch (_0x1af9c7) {
    console.log(_0x1af9c7);
  }
};
let clientes = {
  clientesVencidos: [],
  clientesActivos: []
};
let servers = {
  Api_listServer: []
};
async function loadUsers() {
  await fetch("https://ii7modysmp-hue.github.io/mod/API/user.json").then(_0xfc78b2 => _0xfc78b2.json()).then(_0x5e3b2d => {
    if (_0x5e3b2d.success) {
      let _0x1075d3 = _0x5e3b2d.Users;
      clientes.clientesActivos = _0x1075d3.filter(_0x1a0b99 => {
        return _0x1a0b99.cliente_ID;
      });
    } else {
      clientes = {
        clientesVencidos: [],
        clientesActivos: []
      };
      alert("An error occurred while loading clients");
    }
  });
}
async function loadServers() {
  await fetch("https://ii7modysmp-hue.github.io/mod/API/server.json").then(_0x38166b => _0x38166b.json()).then(_0x408563 => {
    if (_0x408563.success) {
      let _0x4058f2 = _0x408563.servers;
      servers.Api_listServer = _0x4058f2.filter(_0x3d9c57 => {
        return _0x3d9c57.serverUrl;
      });
    } else {
      servers = {
        Api_listServer: []
      };
      alert("An error occurred while loading the servers");
    }
  });
}
loadUsers();
loadServers();
$(".store-view-cont").append("<div id=\"idReplaceSkin\"></div>");
var StoreSkinID = $("#idReplaceSkin");
const ctx = {
  fontStyle: {
    name: new PIXI.TextStyle({
      fill: "#FFFF00",
      fontSize: 12,
      lineJoin: "round",
      stroke: "#EFFA45",
      fontFamily: "vuonghiep",
      fontWeight: "bold"
    }),
    blanco: new PIXI.TextStyle({
      align: "center",
      fill: "#FFF",
      fontSize: 12,
      lineJoin: "round",
      stroke: "#FFF",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontWeight: "bold",
      wordWrap: true
    }),
    morado: new PIXI.TextStyle({
      align: "center",
      fill: "#FFFF00",
      fontSize: 10,
      lineJoin: "round",
      stroke: "#FAA845",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontFamily: "vuonghiep",
      fontWeight: "bold",
      wordWrap: true
    }),
    morado1: new PIXI.TextStyle({
      align: "center",
      fill: "#FFF",
      fontSize: 10,
      lineJoin: "round",
      stroke: "#FAA845",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontFamily: "vuonghiep",
      fontWeight: "bold",
      wordWrap: true
    }),
    amarillo: new PIXI.TextStyle({
      align: "center",
      fill: "#FFFF00",
      fontSize: 10,
      lineJoin: "round",
      stroke: "#FAA845",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontFamily: "vuonghiep",
      fontWeight: "bold",
      wordWrap: true
    }),
    amarillo1: new PIXI.TextStyle({
      align: "center",
      fill: "#FFF",
      fontSize: 10,
      lineJoin: "round",
      stroke: "#FAA845",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontFamily: "vuonghiep",
      fontWeight: "bold",
      wordWrap: true
    }),
    keysColor: new PIXI.TextStyle({
      align: "center",
      fill: "#fff009",
      fontSize: 10,
      lineJoin: "round",
      stroke: "#fff009",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontWeight: "bold",
      fontFamily: "vuonghiep",
      wordWrap: true
    })
  }
};
ctx.clock = PIXI.Sprite.fromImage("https://i.imgur.com/GvhDl7u.png");
ctx.clock.width = 100;
ctx.clock.height = 100;
ctx.clock.x = -50;
ctx.clock.y = -50;
ctx.top10sv = PIXI.Sprite.fromImage("https://i.imgur.com/UbRiUYr.png");
ctx.top10sv.height = 30;
ctx.top10sv.width = 110;
ctx.top10sv.x = -20;
ctx.top10sv.y = -4;
ctx.value_server = new PIXI.Text("WFC", ctx.fontStyle.name);
ctx.value_server.x = 25;
ctx.value_server.y = -18;
ctx.label_hs = new PIXI.Text("HS", ctx.fontStyle.amarillo);
ctx.value1_hs = new PIXI.Text("0", ctx.fontStyle.amarillo);
ctx.value2_hs = new PIXI.Text("0", ctx.fontStyle.amarillo1);
ctx.label_kill = new PIXI.Text("KL", ctx.fontStyle.morado);
ctx.value1_kill = new PIXI.Text("0", ctx.fontStyle.morado);
ctx.value2_kill = new PIXI.Text("0", ctx.fontStyle.morado1);
ctx.label_hs.x = 65;
ctx.label_hs.y = 106;
ctx.label_kill.x = 10;
ctx.label_kill.y = 106;
ctx.value1_hs.x = 65;
ctx.value1_hs.y = 122;
ctx.value1_kill.x = 10;
ctx.value1_kill.y = 122;
ctx.value2_hs.x = 65;
ctx.value2_hs.y = 139;
ctx.value2_kill.x = 10;
ctx.value2_kill.y = 139;
ctx.containerCountInfo = new PIXI.Container();
ctx.containerCountInfo.x = -45;
ctx.containerCountInfo.y = -52;
ctx.containerCountInfo.addChild(ctx.value_server);
ctx.containerCountInfo.addChild(ctx.label_hs);
ctx.containerCountInfo.addChild(ctx.value1_hs);
ctx.containerCountInfo.addChild(ctx.value2_hs);
ctx.containerCountInfo.addChild(ctx.label_kill);
ctx.containerCountInfo.addChild(ctx.value1_kill);
ctx.containerCountInfo.addChild(ctx.value2_kill);
ctx.imgServerbase = PIXI.Texture.fromImage("https://i.imgur.com/EkbSd65.png");
ctx.borderurl = PIXI.Texture.fromImage("i.imgur.com/bKAe6W9.png");
ctx.onclickServer = PIXI.Texture.fromImage(theoKzObjects.flag);
ctx.containerImgS = new PIXI.Sprite(ctx.imgServerbase);
ctx.containerImgS.anchor.set(0.5);
ctx.containerImgS.x = 0;
ctx.containerImgS.y = -10;
ctx.containerImgS.width = 25;
ctx.containerImgS.height = 20;
ctx.borderImg = new PIXI.Sprite(ctx.borderurl);
ctx.borderImg.anchor.set(0.5);
ctx.borderImg.x = -2;
ctx.borderImg.y = 78;
ctx.borderImg.width = 110;
ctx.borderImg.height = 60;
ctx.setServer = function (_0x14e91b) {
  ctx.value_server.text = _0x14e91b || "WFC";
};
ctx.setCountGame = function (_0x37752b, _0x1ba25b, _0x3bcb31, _0x5e495b) {
  ctx.value1_hs.text = _0x1ba25b;
  ctx.value2_hs.text = _0x5e495b;
  ctx.value1_kill.text = _0x37752b;
  ctx.value2_kill.text = _0x3bcb31;
};
"use strict";
var _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (_0x1658cf) {
  return typeof _0x1658cf;
} : function (_0x15e04e) {
  if (_0x15e04e && typeof Symbol == "function" && _0x15e04e.constructor === Symbol && _0x15e04e !== Symbol.prototype) {
    return "symbol";
  } else {
    return typeof _0x15e04e;
  }
};
var GoogleAuth;
(function () {
  try {
    console.log(function (_0xf05899, _0x1e27a7) {
      for (var _0x205367 = 0; _0x205367 < _0x1e27a7.length; _0x205367 += 2) {
        _0xf05899 = _0xf05899.replaceAll(_0x1e27a7[_0x205367], _0x1e27a7[_0x205367 + 1]);
      }
      return _0xf05899;
    }("N-syo.632.oyhs`2./oSo+-2:dhydMdy/32/o+`3:o/62`/o+. .+osYYyso+-.osyQSs6662NyW.63 yW:`+QQ+ -Ms-.:ymmy3+Yo``+Y:6.Qs-+WWhYs:sHhyyHys/6662NoWs63 yW:+Ss:.-+Ss:`M-3.M` .YyySYys32`QSs.2``-Hh-32sH-66 `..3 `..`3N.Wh.63yW-Ss.3`Ss+`Mh/:+hmmo2/yy++yys//Y-3 oS/`Sso`3 ohy6oH.3..6 -Hh. -+Qs/ N /W+62`Wo:Ss32Sso.MMmd+.3syy` .-` :Y+3+Ss//Q+3 +H`32sHhsyHho6-Hh`:S+--+S+N2+W` `+y+2+W.:Ss.3.Ss+/M-:ymmh.2-Y.32+Ys2+Ss+o+/Q-3oH/32Hho-://:`6 Hh`So3`SsN3oHhs-sHhsoW/ `Sso:-:Q.hM-2ymmh. /Yo`3 sYy./Q`3+Sso2`W`3`Hh.66`Hh:So3-SoN3 +Why+yWh/3-oQSso-`Mm:2/Md+/Yy+3 oYy:Q/3 `Q. -W-3`WsYys/`+oo.:Hh//So//Ss-N32-sys:3:S+.6-/+++:-3oHo3 ohdh/`+So:3 .+S/`/oo:6.+s+` `+yyo`3 +yQYs: +oo..shy. -+oSo/. NN", ["W", "hhhh", "Q", "ssss", "M", "mmm", "Y", "yyy", "H", "hh", "S", "ss", "6", "      ", "3", "   ", "2", "  ", "N", "\n"]));
  } catch (_0x49817a) {}
})();
window.addEventListener("load", function () {
  function _0x3c4f97() {
    (function (_0x3e3fa2, _0x19851e, _0x22b04c) {
      function _0x56f005(_0x59130e, _0x3d9a5a) {
        return (_0x59130e === undefined ? "undefined" : _typeof(_0x59130e)) === _0x3d9a5a;
      }
      function _0x1b90c9() {
        if (typeof _0x19851e.createElement != "function") {
          return _0x19851e.createElement(arguments[0]);
        } else if (_0x177993) {
          return _0x19851e.createElementNS.call(_0x19851e, "http://www.w3.org/2000/svg", arguments[0]);
        } else {
          return _0x19851e.createElement.apply(_0x19851e, arguments);
        }
      }
      var _0x3f808a = [];
      var _0x6eb631 = [];
      var _0x1e1f9f = {
        _version: "3.3.1",
        _config: {
          classPrefix: "",
          enableClasses: true,
          enableJSClass: true,
          usePrefixes: true
        },
        _q: [],
        on: function (_0x31b1a7, _0x53ccde) {
          var _0x908954 = this;
          setTimeout(function () {
            _0x53ccde(_0x908954[_0x31b1a7]);
          }, 0);
        },
        addTest: function (_0x53d961, _0x2ba605, _0x558167) {
          _0x6eb631.push({
            name: _0x53d961,
            fn: _0x2ba605,
            options: _0x558167
          });
        },
        addAsyncTest: function (_0x3e544a) {
          _0x6eb631.push({
            name: null,
            fn: _0x3e544a
          });
        }
      };
      function _0x6d5cf3() {}
      _0x6d5cf3.prototype = _0x1e1f9f;
      _0x6d5cf3 = new _0x6d5cf3();
      var _0x469fa4 = false;
      try {
        _0x469fa4 = "WebSocket" in _0x3e3fa2 && _0x3e3fa2.WebSocket.CLOSING === 2;
      } catch (_0x47b33a) {}
      _0x6d5cf3.addTest("websockets", _0x469fa4);
      var _0x5f0273 = _0x19851e.documentElement;
      var _0x177993 = _0x5f0273.nodeName.toLowerCase() === "svg";
      _0x6d5cf3.addTest("canvas", function () {
        var _0xb3a414 = _0x1b90c9("canvas");
        return !!_0xb3a414.getContext && !!_0xb3a414.getContext("2d");
      });
      _0x6d5cf3.addTest("canvastext", function () {
        return _0x6d5cf3.canvas !== false && typeof _0x1b90c9("canvas").getContext("2d").fillText == "function";
      });
      (function () {
        var _0x475119;
        var _0x284dc8;
        var _0x4ec987;
        var _0xd1da84;
        var _0x5db57a;
        var _0x32fd25;
        var _0x5c13d2;
        for (var _0x1c01c7 in _0x6eb631) {
          if (_0x6eb631.hasOwnProperty(_0x1c01c7)) {
            _0x475119 = [];
            _0x284dc8 = _0x6eb631[_0x1c01c7];
            if (_0x284dc8.name && (_0x475119.push(_0x284dc8.name.toLowerCase()), _0x284dc8.options && _0x284dc8.options.aliases && _0x284dc8.options.aliases.length)) {
              for (_0x4ec987 = 0; _0x4ec987 < _0x284dc8.options.aliases.length; _0x4ec987++) {
                _0x475119.push(_0x284dc8.options.aliases[_0x4ec987].toLowerCase());
              }
            }
            _0xd1da84 = _0x56f005(_0x284dc8.fn, "function") ? _0x284dc8.fn() : _0x284dc8.fn;
            _0x5db57a = 0;
            for (; _0x5db57a < _0x475119.length; _0x5db57a++) {
              _0x32fd25 = _0x475119[_0x5db57a];
              _0x5c13d2 = _0x32fd25.split(".");
              if (_0x5c13d2.length === 1) {
                _0x6d5cf3[_0x5c13d2[0]] = _0xd1da84;
              } else {
                if (!!_0x6d5cf3[_0x5c13d2[0]] && !(_0x6d5cf3[_0x5c13d2[0]] instanceof Boolean)) {
                  _0x6d5cf3[_0x5c13d2[0]] = new Boolean(_0x6d5cf3[_0x5c13d2[0]]);
                }
                _0x6d5cf3[_0x5c13d2[0]][_0x5c13d2[1]] = _0xd1da84;
              }
              _0x3f808a.push((_0xd1da84 ? "" : "no-") + _0x5c13d2.join("-"));
            }
          }
        }
      })();
      (function (_0x272c5d) {
        var _0x46483c = _0x5f0273.className;
        var _0x5300f3 = _0x6d5cf3._config.classPrefix || "";
        if (_0x177993) {
          _0x46483c = _0x46483c.baseVal;
        }
        if (_0x6d5cf3._config.enableJSClass) {
          var _0x98d35b = new RegExp("(^|\\s)" + _0x5300f3 + "no-js(\\s|$)");
          _0x46483c = _0x46483c.replace(_0x98d35b, "$1" + _0x5300f3 + "js$2");
        }
        if (_0x6d5cf3._config.enableClasses) {
          _0x46483c += " " + _0x5300f3 + _0x272c5d.join(" " + _0x5300f3);
          if (_0x177993) {
            _0x5f0273.className.baseVal = _0x46483c;
          } else {
            _0x5f0273.className = _0x46483c;
          }
        }
      })(_0x3f808a);
      delete _0x1e1f9f.addTest;
      delete _0x1e1f9f.addAsyncTest;
      for (var _0x478743 = 0; _0x478743 < _0x6d5cf3._q.length; _0x478743++) {
        _0x6d5cf3._q[_0x478743]();
      }
      _0x3e3fa2.Modernizr = _0x6d5cf3;
    })(window, document);
    return Modernizr.websockets && Modernizr.canvas && Modernizr.canvastext;
  }
  function _0x486bfe(_0xeca28, _0x15c3bb, _0x1e1393) {
    const _0x59bb96 = [38, 38, 38, 120, 38, 25, 38];
    const _0x35be84 = ["#FFD500", "#FFC75A", "#00B2ED", "#FF4544", "#0094D7", "#CCCF81", "#ff0999"];
    let _0x4aaa4c = _0x59bb96[_0x15c3bb] - parseInt((_0x1e1393 == 0.99 ? 1 : _0x1e1393) * _0x59bb96[_0x15c3bb] / 1);
    const _0xf31429 = new PIXI.TextStyle({
      align: "center",
      fill: _0x35be84[_0x15c3bb],
      fontSize: 25,
      lineJoin: "round",
      whiteSpace: "normal",
      wordWrap: true,
      dropShadow: true,
      dropShadowBlur: 6,
      fontFamily: "vuonghiep",
      fontWeight: "bold"
    });
    let _0x39c228 = "pwr_clock" + _0x15c3bb;
    if (!pwrups[_0x39c228] && _0x59bb96[_0x15c3bb] === _0x4aaa4c) {
      pwrups[_0x39c228] = new PIXI.Text(_0x4aaa4c, _0xf31429);
      pwrups[_0x39c228].y = 61;
      _0xeca28.Tf[_0x15c3bb].addChild(pwrups[_0x39c228]);
    }
    if (pwrups[_0x39c228]) {
      pwrups[_0x39c228].x = _0x4aaa4c >= 100 ? 11 : _0x4aaa4c >= 10 ? 18 : 26;
      pwrups[_0x39c228].text = _0x4aaa4c;
      if (_0x4aaa4c === 0) {
        delete pwrups[_0x39c228];
      }
    }
  }
  document.getElementById("game-wrap").style.display = "block";
  if (!_0x3c4f97()) {
    document.getElementById("error-view").style.display = "block";
    return;
  }
  (function () {
    function _0x25a98d() {
      return window.anApp = _0xdc115f;
    }
    function _0x51f8fd(_0x2ec685) {
      const _0x510182 = _0x2ec685 + "=";
      const _0x38908e = document.cookie.split(";");
      for (let _0x1397fc = 0; _0x1397fc < _0x38908e.length; _0x1397fc++) {
        let _0x5aef39 = _0x38908e[_0x1397fc];
        while (_0x5aef39.charAt(0) === " ") {
          _0x5aef39 = _0x5aef39.substring(1);
        }
        if (_0x5aef39.indexOf(_0x510182) === 0) {
          return _0x5aef39.substring(_0x510182.length, _0x5aef39.length);
        }
      }
      return "";
    }
    function _0x4ed6c2(_0x1ebf9e, _0x1e8850, _0x4a2e3d) {
      var _0x430e47 = new Date();
      _0x430e47.setTime(_0x430e47.getTime() + _0x4a2e3d * 86400000);
      var _0x3664bf = "expires=" + _0x430e47.toUTCString();
      document.cookie = _0x1ebf9e + "=" + _0x1e8850 + "; " + _0x3664bf + "; path=/";
    }
    function _0x57c9d2(_0x505e41) {
      return window.I18N_MESSAGES[_0x505e41];
    }
    function _0x2316af(_0x281842) {
      if (_0x281842[_0x3c63e4]) {
        return _0x281842[_0x3c63e4];
      } else if (_0x281842.en) {
        return _0x281842.en;
      } else {
        return _0x281842.x;
      }
    }
    function _0x3358f1(_0x4c90cc) {
      var _0x45e96b = (Math.floor(_0x4c90cc) % 60).toString();
      var _0x4fcb17 = (Math.floor(_0x4c90cc / 60) % 60).toString();
      var _0xa0d54 = (Math.floor(_0x4c90cc / 3600) % 24).toString();
      var _0x3b58e9 = Math.floor(_0x4c90cc / 86400).toString();
      var _0x2da7f4 = _0x57c9d2("util.time.days");
      var _0x4d5189 = _0x57c9d2("util.time.hours");
      var _0x116901 = _0x57c9d2("util.time.min");
      var _0x8a6595 = _0x57c9d2("util.time.sec");
      if (_0x3b58e9 > 0) {
        return _0x3b58e9 + " " + _0x2da7f4 + " " + _0xa0d54 + " " + _0x4d5189 + " " + _0x4fcb17 + " " + _0x116901 + " " + _0x45e96b + " " + _0x8a6595;
      } else if (_0xa0d54 > 0) {
        return _0xa0d54 + " " + _0x4d5189 + " " + _0x4fcb17 + " " + _0x116901 + " " + _0x45e96b + " " + _0x8a6595;
      } else if (_0x4fcb17 > 0) {
        return _0x4fcb17 + " " + _0x116901 + " " + _0x45e96b + " " + _0x8a6595;
      } else {
        return _0x45e96b + " " + _0x8a6595;
      }
    }
    function _0x100ba1(_0x3cf1f5) {
      if (_0x3cf1f5.includes("href")) {
        return _0x3cf1f5.replaceAll("href", "target=\"_black\" href");
      } else {
        return _0x3cf1f5;
      }
    }
    function _0x29122f(_0x52740e, _0x1c7107, _0x3196aa) {
      var _0x12fc1c = document.createElement("script");
      var _0x1245c1 = true;
      if (_0x1c7107) {
        _0x12fc1c.id = _0x1c7107;
      }
      _0x12fc1c.async = "async";
      _0x12fc1c.type = "text/javascript";
      _0x12fc1c.src = _0x52740e;
      if (_0x3196aa) {
        _0x12fc1c.onload = _0x12fc1c.onreadystatechange = function () {
          _0x1245c1 = false;
          try {
            _0x3196aa();
          } catch (_0x459538) {
            console.log(_0x459538);
          }
          _0x12fc1c.onload = _0x12fc1c.onreadystatechange = null;
        };
      }
      (document.head || document.getElementsByTagName("head")[0]).appendChild(_0x12fc1c);
    }
    function _0x1c8f8f(_0x25220c, _0x3b94c0) {
      var _0x58af04 = _0x3b94c0;
      _0x58af04.prototype = Object.create(_0x25220c.prototype);
      _0x58af04.prototype.constructor = _0x58af04;
      _0x58af04.parent = _0x25220c;
      return _0x58af04;
    }
    function _0x5aeb02(_0xd258a0) {
      _0xd258a0 %= _0x571363;
      if (_0xd258a0 < 0) {
        return _0xd258a0 + _0x571363;
      } else {
        return _0xd258a0;
      }
    }
    function _0x5d0a60(_0x52482d, _0x16e631, _0x2237e4) {
      return _0x4da66d(_0x2237e4, _0x52482d, _0x16e631);
    }
    function _0x4da66d(_0x3a66cb, _0x30f1b5, _0x48a269) {
      if (_0x3a66cb > _0x48a269) {
        return _0x48a269;
      } else if (_0x3a66cb < _0x30f1b5) {
        return _0x30f1b5;
      } else if (Number.isFinite(_0x3a66cb)) {
        return _0x3a66cb;
      } else {
        return (_0x30f1b5 + _0x48a269) * 0.5;
      }
    }
    function _0x91990f(_0x12a790, _0x621f72, _0x21fdf5, _0x1b8db7) {
      if (_0x621f72 > _0x12a790) {
        return Math.min(_0x621f72, _0x12a790 + _0x21fdf5 * _0x1b8db7);
      } else {
        return Math.max(_0x621f72, _0x12a790 - _0x21fdf5 * _0x1b8db7);
      }
    }
    function _0x237037(_0x378b9f, _0x18cde2, _0x20434a, _0x4caa34, _0x26297b) {
      return _0x18cde2 + (_0x378b9f - _0x18cde2) * Math.pow(1 - _0x4caa34, _0x20434a / _0x26297b);
    }
    function _0x436434(_0xcd8431, _0x2bafa4, _0x21e2e1) {
      return _0xcd8431 * (1 - _0x21e2e1) + _0x2bafa4 * _0x21e2e1;
    }
    function _0x2c4db8(_0x2628ad, _0x1f3e9f, _0x578056, _0x374507) {
      var _0x5790f6 = _0x578056;
      var _0x32a3e0 = _0x1f3e9f;
      var _0x547322 = _0x1f3e9f + _0x374507;
      if (_0x2628ad == null) {
        throw new TypeError("this is null or not defined");
      }
      var _0x1080da = _0x2628ad.length >>> 0;
      var _0x4ffc56 = _0x5790f6 >> 0;
      var _0x2b5fe = _0x4ffc56 < 0 ? Math.max(_0x1080da + _0x4ffc56, 0) : Math.min(_0x4ffc56, _0x1080da);
      var _0x261934 = _0x32a3e0 >> 0;
      var _0xdac882 = _0x261934 < 0 ? Math.max(_0x1080da + _0x261934, 0) : Math.min(_0x261934, _0x1080da);
      var _0x5a109f = _0x547322 === undefined ? _0x1080da : _0x547322 >> 0;
      var _0x13137d = _0x5a109f < 0 ? Math.max(_0x1080da + _0x5a109f, 0) : Math.min(_0x5a109f, _0x1080da);
      var _0x5561f1 = Math.min(_0x13137d - _0xdac882, _0x1080da - _0x2b5fe);
      var _0xab2892 = 1;
      for (_0xdac882 < _0x2b5fe && _0x2b5fe < _0xdac882 + _0x5561f1 && (_0xab2892 = -1, _0xdac882 += _0x5561f1 - 1, _0x2b5fe += _0x5561f1 - 1); _0x5561f1 > 0;) {
        if (_0xdac882 in _0x2628ad) {
          _0x2628ad[_0x2b5fe] = _0x2628ad[_0xdac882];
        } else {
          delete _0x2628ad[_0x2b5fe];
        }
        _0xdac882 += _0xab2892;
        _0x2b5fe += _0xab2892;
        _0x5561f1--;
      }
      return _0x2628ad;
    }
    function _0x213960(_0x58266e) {
      return _0x58266e.getContext("2d");
    }
    function _0x5c3a83(_0x38984) {
      if (_0x38984.parent != null) {
        _0x38984.parent.removeChild(_0x38984);
      }
    }
    function _0x1ea815(_0x637aad) {
      return _0x637aad[parseInt(Math.random() * _0x637aad.length)];
    }
    function _0x2fb926() {
      return Math.random().toString(36).substring(2, 15);
    }
    function _0x25ebc0(_0x9643ef, _0xf1712, _0x55c713) {
      var _0x2ebba1 = (1 - Math.abs(_0x55c713 * 2 - 1)) * _0xf1712;
      var _0xc568c1 = _0x2ebba1 * (1 - Math.abs(_0x9643ef / 60 % 2 - 1));
      var _0x398612 = _0x55c713 - _0x2ebba1 / 2;
      if (_0x9643ef >= 0 && _0x9643ef < 60) {
        return [_0x398612 + _0x2ebba1, _0x398612 + _0xc568c1, _0x398612 + 0];
      } else if (_0x9643ef >= 60 && _0x9643ef < 120) {
        return [_0x398612 + _0xc568c1, _0x398612 + _0x2ebba1, _0x398612 + 0];
      } else if (_0x9643ef >= 120 && _0x9643ef < 180) {
        return [_0x398612 + 0, _0x398612 + _0x2ebba1, _0x398612 + _0xc568c1];
      } else if (_0x9643ef >= 180 && _0x9643ef < 240) {
        return [_0x398612 + 0, _0x398612 + _0xc568c1, _0x398612 + _0x2ebba1];
      } else if (_0x9643ef >= 240 && _0x9643ef < 300) {
        return [_0x398612 + _0xc568c1, _0x398612 + 0, _0x398612 + _0x2ebba1];
      } else {
        return [_0x398612 + _0x2ebba1, _0x398612 + 0, _0x398612 + _0xc568c1];
      }
    }
    function _0x340587() {
      function _0x60d5ab() {
        let _0x28ea63 = theoKzObjects.adblock ? 1 : 5;
        $("#adbl-1").text(_0x57c9d2("index.game.antiadblocker.msg1"));
        $("#adbl-2").text(_0x57c9d2("index.game.antiadblocker.msg2"));
        $("#adbl-3").text(_0x57c9d2("index.game.antiadblocker.msg3"));
        $("#adbl-4").text(_0x57c9d2("index.game.antiadblocker.msg4").replace("{0}", 10));
        $("#adbl-continue span").text(_0x57c9d2("index.game.antiadblocker.continue"));
        $("#adbl-continue").hide();
        $("#" + _0x2efdda).fadeIn(500);
        var _0x1c5e0f = _0x28ea63;
        for (var _0x231608 = 0; _0x231608 < _0x28ea63; _0x231608++) {
          setTimeout(function () {
            _0x1c5e0f--;
            $("#adbl-4").text(_0x57c9d2("index.game.antiadblocker.msg4").replace("{0}", _0x1c5e0f));
            if (_0x1c5e0f === 0) {
              console.log("aipAABC");
              try {
                ga("send", "event", "antiadblocker", window.runtimeHash + "_complete");
              } catch (_0x3f6fc5) {}
              $("#adbl-continue").fadeIn(200);
            }
          }, (_0x231608 + 1) * 1000);
        }
      }
      var _0x234ace = false;
      function _0x1362be() {}
      var _0x564696 = {};
      var _0x2efdda = "JDHnkHtYwyXyVgG9";
      $("#adbl-continue").click(function () {
        $("#" + _0x2efdda).fadeOut(500);
        _0x1362be(false);
      });
      _0x564696.a = function (_0x14791b) {
        _0x1362be = _0x14791b;
        if (!_0x234ace) {
          try {
            aiptag.cmd.player.push(function () {
              aiptag.adplayer = new aipPlayer({
                AD_WIDTH: 960,
                AD_HEIGHT: 540,
                AD_FULLSCREEN: true,
                AD_CENTERPLAYER: false,
                LOADING_TEXT: "loading advertisement",
                PREROLL_ELEM: function () {
                  return document.getElementById("1eaom01c3pxu9wd3");
                },
                AIP_COMPLETE: function (_0x222025) {
                  console.log("aipC");
                  _0x1362be(true);
                  $("#1eaom01c3pxu9wd3").hide();
                  $("#" + _0x2efdda).hide();
                  try {
                    ga("send", "event", "preroll", window.runtimeHash + "_complete");
                  } catch (_0x44fe99) {}
                },
                AIP_REMOVE: function () {}
              });
            });
            _0x234ace = true;
          } catch (_0x3b2aef) {}
        }
      };
      _0x564696.b = function () {
        if (aiptag.adplayer !== undefined) {
          console.log("aipS");
          try {
            ga("send", "event", "preroll", window.runtimeHash + "_request");
          } catch (_0x5db1c0) {}
          _0x60d5ab();
        } else {
          console.log("aipAABS");
          try {
            ga("send", "event", "antiadblocker", window.runtimeHash + "_start");
          } catch (_0xf3dc88) {}
          _0x60d5ab();
        }
      };
      return _0x564696;
    }
    function _0x22a39b(_0x9ed56e, _0x5395d2) {
      var _0x496fb4 = $("#" + _0x9ed56e);
      var _0x5ae9a6 = _0x5395d2;
      var _0x99d445 = {};
      var _0x34a97e = false;
      _0x99d445.a = function () {
        if (!_0x34a97e) {
          _0x496fb4.empty();
          _0x496fb4.append("<div id='" + _0x5ae9a6 + "'></div>");
          try {
            try {
              ga("send", "event", "banner", window.runtimeHash + "_display");
            } catch (_0x3c896d) {}
            aiptag.cmd.display.push(function () {
              aipDisplayTag.display(_0x5ae9a6);
            });
            _0x34a97e = true;
          } catch (_0x1798e4) {}
        }
      };
      _0x99d445.c = function () {
        try {
          try {
            ga("send", "event", "banner", window.runtimeHash + "_refresh");
          } catch (_0x17b9f9) {}
          aiptag.cmd.display.push(function () {
            aipDisplayTag.display(_0x5ae9a6);
          });
        } catch (_0x556e66) {}
      };
      return _0x99d445;
    }
    function _0x403fc1() {
      function _0x173ddf(_0x28984a) {
        var _0x2d46a3 = _0x28984a + Math.floor(Math.random() * 65535) * 37;
        _0x4ed6c2(_0x2d19d3.d, _0x2d46a3, 30);
      }
      function _0x2baefb() {
        return parseInt(_0x51f8fd(_0x2d19d3.d)) % 37;
      }
      return function () {
        var _0x3ffdab = _0x2baefb();
        console.log("init1 pSC: " + _0x3ffdab);
        if (!(_0x3ffdab >= 0) || !(_0x3ffdab < _0x4f9b76.e)) {
          _0x3ffdab = Math.max(0, _0x4f9b76.e - 2);
          console.log("init2 pSC: " + _0x3ffdab);
        }
        var _0x49f142 = {};
        _0xdc115f = _0x49f142;
        _0x49f142.f = _0x4f9b76;
        _0x49f142.g = false;
        _0x49f142.i = Date.now();
        _0x49f142.j = 0;
        _0x49f142.k = 0;
        _0x49f142.l = null;
        _0x49f142.m = _0x50a6a5;
        _0x49f142.n = _0x3c63e4;
        _0x49f142.o = null;
        _0x49f142.p = null;
        _0x49f142.q = null;
        _0x49f142.r = null;
        _0x49f142.s = null;
        _0x49f142.t = null;
        _0x49f142.u = null;
        try {
          if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (_0x46ae2d) {
              if (_0x46ae2d.coords !== undefined) {
                var _0x3d8970 = _0x46ae2d.coords;
                if (_0x3d8970.latitude !== undefined && _0x3d8970.longitude !== undefined) {
                  _0x49f142.l = _0x46ae2d;
                }
              }
            }, function (_0x235f61) {});
          }
        } catch (_0x2e852d) {}
        _0x49f142.v = function () {
          _0x49f142.p = new _0x330e94();
          _0x49f142.q = new _0x463724();
          _0x49f142.r = new _0x2018ad();
          _0x49f142.s = new _0x3de4ed();
          _0x49f142.t = new _0x3cd773();
          _0x49f142.u = new _0x26f2a1();
          _0x49f142.o = new _0x584c5c();
          _0x49f142.o.z = new _0x52414e(_0x49f142.o);
          _0x49f142.a();
        };
        _0x49f142.a = function () {
          try {
            ga("send", "event", "app", window.runtimeHash + "_init");
          } catch (_0x32f6f1) {}
          _0x49f142.o.A = function () {
            _0x49f142.o.B();
          };
          _0x49f142.o.C = function () {
            var _0x182add = _0x49f142.s.F.D();
            try {
              ga("send", "event", "game", window.runtimeHash + "_start", _0x182add);
            } catch (_0x230b54) {}
            _0x49f142.r.G(_0x2018ad.AudioState.H);
            _0x49f142.s.I(_0x49f142.s.H.J());
          };
          _0x49f142.o.B = function () {
            try {
              ga("send", "event", "game", window.runtimeHash + "_end");
            } catch (_0x3e45ed) {}
            if ($("body").height() >= 430) {
              _0x49f142.f.K.c();
            }
            _0x49f142.p.L();
            (function () {
              var _0x1f42b6 = Math.floor(_0x49f142.o.N.M);
              var _0x1648b6 = _0x49f142.o.O;
              if (_0x49f142.u.P()) {
                _0x49f142.u.Q(function () {
                  _0x49f142.R(_0x1f42b6, _0x1648b6);
                });
              } else {
                _0x49f142.R(_0x1f42b6, _0x1648b6);
              }
            })();
          };
          _0x49f142.o.S = function (_0x4846fa) {
            _0x4846fa(_0x49f142.s.H.T(), _0x49f142.s.H.U());
          };
          _0x49f142.u.V(function () {
            if (_0x49f142.p.W) {
              _0x49f142.r.G(_0x2018ad.AudioState.F);
              _0x49f142.s.I(_0x49f142.s.F);
            }
            if (_0x49f142.u.P()) {
              try {
                var _0x4be174 = _0x49f142.u.X();
                ga("set", "userId", _0x4be174);
              } catch (_0x276abe) {}
            }
            if (_0x49f142.Y() && _0x49f142.u.P() && !_0x49f142.u.Z()) {
              _0x49f142.$(false, false);
              _0x49f142.s.aa._(new _0x48b940());
            } else {
              _0x49f142.ba(true);
            }
          });
          _0x49f142.p.ca(function () {
            _0x49f142.r.G(_0x2018ad.AudioState.F);
            _0x49f142.s.I(_0x49f142.s.F);
          });
          _0x49f142.q.a(function () {
            _0x49f142.o.a();
            _0x49f142.r.a();
            _0x49f142.s.a();
            _0x49f142.t.a();
            _0x49f142.p.a();
            _0x49f142.u.a();
            if (_0x49f142.Y() && !_0x49f142.Z()) {
              _0x49f142.s.aa._(new _0x48b940());
            } else {
              _0x49f142.ba(true);
            }
          });
        };
        _0x49f142.da = function (_0x2ec5d9) {
          if (_0x49f142.u.P()) {
            var _0x1232c7 = _0x49f142.u.ea();
            $.get(_0x9b3c02 + "/pub/wuid/" + _0x1232c7 + "/consent/change?value=" + encodeURI(_0x2ec5d9), function (_0x90e894) {});
          }
        };
        _0x49f142.fa = function (_0x8ccd88) {
          var _0x418424 = _0x49f142.u.ea();
          var _0x3109de = _0x49f142.s.F.D();
          var _0x7457ed = _0x49f142.s.F.ga();
          var _0x470832 = _0x49f142.t.ha(_0x2d04ef.ia);
          var _0x266923 = _0x49f142.t.ha(_0x2d04ef.ja);
          var _0x80a7a8 = _0x49f142.t.ha(_0x2d04ef.ka);
          var _0x420119 = _0x49f142.t.ha(_0x2d04ef.la);
          var _0x38dcdd = _0x49f142.t.ha(_0x2d04ef.ma);
          var _0xbc574a = 0;
          if (_0x49f142.l != null) {
            var _0x456b45 = _0x49f142.l.coords.latitude;
            var _0x2471d3 = _0x49f142.l.coords.longitude;
            _0xbc574a = Math.max(0, Math.min(32767, (_0x456b45 + 90) / 180 * 32768)) << 1 | 1 | Math.max(0, Math.min(65535, (_0x2471d3 + 180) / 360 * 65536)) << 16;
          }
          _wrmxt.testSkinCustom(_0x470832);
          let _0x248b26 = "x" + (_0x470832 > 9999 ? "0000" : _0x470832.toString().padStart(4, 0)) + (_0x38dcdd > 999 ? "000" : _0x38dcdd.toString().padStart(3, 0)) + (_0x266923 > 999 ? "000" : _0x266923.toString().padStart(3, 0)) + (_0x80a7a8 > 999 ? "000" : _0x80a7a8.toString().padStart(3, 0));
          _0x7457ed = (_0x7457ed.length >= 32 ? _0x7457ed.substr(0, 16) : _0x7457ed.substr(0, 16).padEnd(16)) + _0x248b26;
          _0x7457ed = _0x7457ed.trim();
          console.log(_0x7457ed);
          var _0x4dfeb5 = _0x9b3c02 + "/pub/wuid/" + _0x418424 + "/start?gameMode=" + encodeURI(_0x3109de) + "&gh=" + _0xbc574a + "&nickname=" + encodeURI(_0x7457ed) + "&skinId=" + _wrmxt.validInput(_0x470832) + "&eyesId=" + encodeURI(_0x266923) + "&mouthId=" + encodeURI(_0x80a7a8) + "&glassesId=" + encodeURI(_0x420119) + "&hatId=" + encodeURI(_0x38dcdd);
          console.log("urlRequest: " + _0x4dfeb5);
          $.get(_0x4dfeb5, function (_0x32820a) {
            var _0x477e99 = _0x32820a.server_url;
            _0x8ccd88(_0x477e99);
          });
        };
        _0x49f142.na = function () {
          _0x3ffdab++;
          console.log("start pSC: " + _0x3ffdab);
          if (!_0x49f142.f.oa && _0x3ffdab >= _0x49f142.f.e) {
            _0x49f142.s.I(_0x49f142.s.pa);
            _0x49f142.r.G(_0x2018ad.AudioState.qa);
            _0x49f142.f.ra.b();
          } else {
            _0x173ddf(_0x3ffdab);
            _0x49f142.sa();
          }
        };
        _0x49f142.sa = function (_0x2ffd38) {
          if (_0x49f142.o.ta()) {
            _0x49f142.s.I(_0x49f142.s.ua);
            _0x49f142.r.G(_0x2018ad.AudioState.ua);
            var _0x38171b = _0x49f142.s.F.D();
            _0x4ed6c2(_0x2d19d3.va, _0x38171b, 30);
            console.log("save gm: " + _0x38171b);
            var _0x21a7fc = _0x49f142.s.xa.wa();
            _0x4ed6c2(_0x2d19d3.ya, _0x21a7fc, 30);
            console.log("save sPN: " + _0x21a7fc);
            if (_0x49f142.u.P()) {
              _0x49f142.fa(function (_0x312a66) {
                _0x49f142.o.za(window.server_url || _0x312a66, _0x49f142.u.ea());
              });
            } else {
              var _0x53d737 = _0x49f142.s.F.ga();
              _0x4ed6c2(_0x2d19d3.Aa, _0x53d737, 30);
              var _0x4a72e3 = _0x49f142.t.ha(_0x2d04ef.ia);
              _0x4ed6c2(_0x2d19d3.Ba, _0x4a72e3, 30);
              _0x49f142.fa(function (_0x30e378) {
                _0x49f142.o.Ca(_0x30e378, _0x53d737, _0x4a72e3);
              });
            }
          }
        };
        _0x49f142.R = function (_0x326e9f, _0x39bca7) {
          var _0x1060f6 = _0x49f142.s.F.ga();
          _0x49f142.s.H.Da(_0x326e9f, _0x39bca7, _0x1060f6);
          _0x49f142.r.G(_0x2018ad.AudioState.Ea);
          _0x49f142.s.I(_0x49f142.s.H.Fa());
        };
        _0x49f142.Ga = function () {
          if (!_0x49f142.Ha()) {
            return _0x49f142.t.Ia();
          }
          var _0x1355a3 = parseInt(_0x51f8fd(_0x2d19d3.Ba));
          if (_0x1355a3 != null && _0x49f142.t.Ja(_0x1355a3, _0x2d04ef.ia)) {
            return _0x1355a3;
          } else {
            return _0x49f142.t.Ia();
          }
        };
        _0x49f142.Ka = function (_0x33a216) {
          _0x4ed6c2(_0x2d19d3.La, !!_0x33a216, 1800);
        };
        _0x49f142.Ha = function () {
          return _0x51f8fd(_0x2d19d3.La) === "true";
        };
        _0x49f142.ba = function (_0x5e1717) {
          if (_0x5e1717 != _0x49f142.g) {
            _0x49f142.g = _0x5e1717;
            var _0x4ff891 = _0x4ff891 || {};
            _0x4ff891.consented = _0x5e1717;
            _0x4ff891.gdprConsent = _0x5e1717;
            _0x49f142.f.Ma.a();
            _0x49f142.f.K.a();
            _0x49f142.f.ra.a(function (_0x587cd0) {
              if (_0x587cd0) {
                _0x173ddf(_0x3ffdab = 0);
              }
              _0x49f142.sa();
            });
          }
        };
        _0x49f142.$ = function (_0x5b0c69, _0xf405f9) {
          _0x4ed6c2(_0x2d19d3.Na, _0x5b0c69 ? "true" : "false");
          if (_0xf405f9) {
            _0x49f142.da(_0x5b0c69);
          }
          _0x49f142.ba(_0x5b0c69);
        };
        _0x49f142.Z = function () {
          switch (_0x51f8fd(_0x2d19d3.Na)) {
            case "true":
              return true;
            default:
              return false;
          }
        };
        _0x49f142.Y = function () {
          try {
            return !!window.isIPInEEA || _0x49f142.l != null && !!_0x270470.Oa(_0x49f142.l.coords.latitude, _0x49f142.l.coords.longitude);
          } catch (_0x4047e6) {
            return true;
          }
        };
        _0x49f142.Pa = function () {
          _0x49f142.j = Date.now();
          _0x49f142.k = _0x49f142.j - _0x49f142.i;
          _0x49f142.o.Qa(_0x49f142.j, _0x49f142.k);
          _0x49f142.s.Qa(_0x49f142.j, _0x49f142.k);
          _0x49f142.i = _0x49f142.j;
        };
        _0x49f142.Ra = function () {
          _0x49f142.s.Ra();
        };
        return _0x49f142;
      }();
    }
    function _0x584c5c() {
      var _0x4920fc = {
        Wa: 30,
        Xa: new Float32Array(100),
        Ya: 0,
        Za: 0,
        $a: 0,
        _a: 0,
        ab: 0,
        bb: 0,
        cb: 0,
        db: null,
        eb: 300,
        C: function () {},
        B: function () {},
        S: function () {},
        A: function () {},
        fb: new _0x10c4a1(),
        z: null,
        N: null,
        gb: {},
        hb: {},
        ib: 12.5,
        jb: 40,
        kb: 1,
        lb: -1,
        mb: 1,
        nb: 1,
        ob: -1,
        pb: -1,
        qb: 1,
        rb: 1,
        sb: -1,
        O: 500,
        tb: 500
      };
      _0x4920fc.fb.ub = 500;
      _0x4920fc.N = new _0x504392(_0x4920fc.fb);
      _0x4920fc.a = function () {
        _0x4920fc.N.vb(_0x25a98d().s.H.wb);
        setInterval(function () {
          _0x4920fc.S(function (_0x111819, _0x430851) {
            _0x4920fc.xb(_0x111819, _0x430851);
          });
        }, 10);
      };
      _0x4920fc.yb = function (_0x59a325, _0x1f660b, _0x5250f2, _0x33e662) {
        _0x4920fc.lb = _0x59a325;
        _0x4920fc.mb = _0x1f660b;
        _0x4920fc.nb = _0x5250f2;
        _0x4920fc.ob = _0x33e662;
        _0x4920fc.zb();
      };
      _0x4920fc.Ab = function (_0x173595) {
        _0x4920fc.kb = _0x173595;
        _0x4920fc.zb();
      };
      _0x4920fc.zb = function () {
        _0x4920fc.pb = _0x4920fc.lb - _0x4920fc.kb;
        _0x4920fc.qb = _0x4920fc.mb + _0x4920fc.kb;
        _0x4920fc.rb = _0x4920fc.nb - _0x4920fc.kb;
        _0x4920fc.sb = _0x4920fc.ob + _0x4920fc.kb;
      };
      _0x4920fc.Qa = function (_0x15a268, _0x2dd794) {
        _0x4920fc.$a += _0x2dd794;
        _0x4920fc.Za -= _0x4920fc.Ya * 0.2 * _0x2dd794;
        _0x4920fc.z.Bb();
        if (_0x4920fc.db != null && (_0x4920fc.cb === 2 || _0x4920fc.cb === 3)) {
          _0x4920fc.Cb(_0x15a268, _0x2dd794);
          _0x4920fc.jb = 4 + _0x4920fc.ib * _0x4920fc.N.Db;
        }
        var _0x115f35 = 1000 / Math.max(1, _0x2dd794);
        var _0x382c77 = 0;
        var _0x2ac86b = 0;
        for (; _0x2ac86b < _0x4920fc.Xa.length - 1; _0x2ac86b++) {
          _0x382c77 = _0x382c77 + _0x4920fc.Xa[_0x2ac86b];
          _0x4920fc.Xa[_0x2ac86b] = _0x4920fc.Xa[_0x2ac86b + 1];
        }
        _0x4920fc.Xa[_0x4920fc.Xa.length - 1] = _0x115f35;
        _0x4920fc.Wa = (_0x382c77 + _0x115f35) / _0x4920fc.Xa.length;
      };
      _0x4920fc.Eb = function (_0x506ce7, _0x591b8e) {
        return _0x506ce7 > _0x4920fc.pb && _0x506ce7 < _0x4920fc.qb && _0x591b8e > _0x4920fc.rb && _0x591b8e < _0x4920fc.sb;
      };
      _0x4920fc.Cb = function (_0x3d9261, _0x216f04) {
        var _0x5aa2b7 = _0x4920fc.$a + _0x4920fc.Za;
        var _0x3ba722 = (_0x5aa2b7 - _0x4920fc._a) / (_0x4920fc.ab - _0x4920fc._a);
        _0x4920fc.N.Fb(_0x3d9261, _0x216f04);
        _0x4920fc.N.Gb(_0x3d9261, _0x216f04, _0x3ba722, _0x4920fc.Eb);
        var _0x2d7be9 = 0;
        var _0x1ba8d9;
        for (_0x1ba8d9 in _0x4920fc.hb) {
          var _0x729d22 = _0x4920fc.hb[_0x1ba8d9];
          _0x729d22.Fb(_0x3d9261, _0x216f04);
          _0x729d22.Gb(_0x3d9261, _0x216f04, _0x3ba722, _0x4920fc.Eb);
          if (_0x729d22.Hb && _0x729d22.Db > _0x2d7be9) {
            _0x2d7be9 = _0x729d22.Db;
          }
          if (!_0x729d22.Ib && (!!(_0x729d22.Jb < 0.005) || !_0x729d22.Hb)) {
            _0x729d22.Kb();
            delete _0x4920fc.hb[_0x729d22.Mb.Lb];
          }
        }
        _0x4920fc.Ab(_0x2d7be9 * 3);
        var _0x49b15e;
        for (_0x49b15e in _0x4920fc.gb) {
          var _0x4fc74a = _0x4920fc.gb[_0x49b15e];
          _0x4fc74a.Fb(_0x3d9261, _0x216f04);
          _0x4fc74a.Gb(_0x3d9261, _0x216f04, _0x4920fc.Eb);
          if (_0x4fc74a.Nb && (_0x4fc74a.Jb < 0.005 || !_0x4920fc.Eb(_0x4fc74a.Ob, _0x4fc74a.Pb))) {
            _0x4fc74a.Kb();
            delete _0x4920fc.gb[_0x4fc74a.Mb.Lb];
          }
        }
      };
      _0x4920fc.Qb = function (_0x4aeafb, _0x4837a7) {
        if (_0x4920fc.cb === 1) {
          _0x4920fc.cb = 2;
          _0x4920fc.C();
        }
        var _0x3469fd = _0x25a98d().j;
        _0x4920fc.bb = _0x4aeafb;
        if (_0x4aeafb === 0) {
          _0x4920fc._a = _0x3469fd - 95;
          _0x4920fc.ab = _0x3469fd;
          _0x4920fc.$a = _0x4920fc._a;
          _0x4920fc.Za = 0;
        } else {
          _0x4920fc._a = _0x4920fc.ab;
          _0x4920fc.ab = _0x4920fc.ab + _0x4837a7;
        }
        var _0x377681 = _0x4920fc.$a + _0x4920fc.Za;
        _0x4920fc.Ya = (_0x377681 - _0x4920fc._a) / (_0x4920fc.ab - _0x4920fc._a);
      };
      _0x4920fc.Rb = function () {
        if (_0x4920fc.cb === 1 || _0x4920fc.cb === 2) {
          _0x4920fc.cb = 3;
          var _0x22d9f9 = _0x4920fc.db;
          setTimeout(function () {
            if (_0x4920fc.cb === 3) {
              _0x4920fc.cb = 0;
            }
            if (_0x22d9f9 != null && _0x22d9f9 === _0x4920fc.db) {
              _0x4920fc.db.close();
              _0x4920fc.db = null;
            }
          }, 5000);
          _0x4920fc.B();
        }
      };
      _0x4920fc.ta = function () {
        return _0x4920fc.cb !== 2 && (_0x4920fc.cb = 1, _0x4920fc.z.Sb(), _0x4920fc.gb = {}, _0x4920fc.hb = {}, _0x4920fc.N.Tb(), _0x4920fc.db != null && (_0x4920fc.db.close(), _0x4920fc.db = null), true);
      };
      _0x4920fc.Ub = function () {
        _0x4920fc.db = null;
        _0x4920fc.z.Sb();
        if (_0x4920fc.cb !== 3) {
          _0x4920fc.A();
        }
        _0x4920fc.cb = 0;
      };
      _0x4920fc.za = function (_0x161c0c, _0x406495) {
        _0x4920fc.Vb(_0x161c0c, function () {
          var _0x1fde7c = Math.min(2048, _0x406495.length);
          var _0x59d137 = new ArrayBuffer(6 + _0x1fde7c * 2);
          var _0x1f1f13 = new DataView(_0x59d137);
          var _0x563bcb = 0;
          _0x1f1f13.setInt8(_0x563bcb, 129);
          _0x563bcb = _0x563bcb + 1;
          _0x1f1f13.setInt16(_0x563bcb, 2800);
          _0x563bcb = _0x563bcb + 2;
          _0x1f1f13.setInt8(_0x563bcb, 1);
          _0x563bcb = _0x563bcb + 1;
          _0x1f1f13.setInt16(_0x563bcb, _0x1fde7c);
          _0x563bcb = _0x563bcb + 2;
          var _0x1119e7 = 0;
          for (; _0x1119e7 < _0x1fde7c; _0x1119e7++) {
            _0x1f1f13.setInt16(_0x563bcb, _0x406495.charCodeAt(_0x1119e7));
            _0x563bcb = _0x563bcb + 2;
          }
          _0x4920fc.Wb(_0x59d137);
        });
      };
      _0x4920fc.Ca = function (_0x503ded, _0x246a2b, _0x496408) {
        _0x4920fc.Vb(_0x503ded, function () {
          var _0x79a728 = Math.min(32, _0x246a2b.length);
          var _0x4f7a1f = new ArrayBuffer(7 + _0x79a728 * 2);
          var _0xa6f510 = new DataView(_0x4f7a1f);
          var _0x2feeb6 = 0;
          _0xa6f510.setInt8(_0x2feeb6, 129);
          _0x2feeb6 = _0x2feeb6 + 1;
          _0xa6f510.setInt16(_0x2feeb6, 2800);
          _0x2feeb6 = _0x2feeb6 + 2;
          _0xa6f510.setInt8(_0x2feeb6, 0);
          _0x2feeb6 = _0x2feeb6 + 1;
          _0xa6f510.setInt16(_0x2feeb6, _0x496408);
          _0x2feeb6 = _0x2feeb6 + 2;
          _0xa6f510.setInt8(_0x2feeb6, _0x79a728);
          _0x2feeb6++;
          var _0x21af07 = 0;
          for (; _0x21af07 < _0x79a728; _0x21af07++) {
            _0xa6f510.setInt16(_0x2feeb6, _0x246a2b.charCodeAt(_0x21af07));
            _0x2feeb6 = _0x2feeb6 + 2;
          }
          _0x4920fc.Wb(_0x4f7a1f);
        });
      };
      _0x4920fc.Wb = function (_0x3f720b) {
        try {
          if (_0x4920fc.db != null && _0x4920fc.db.readyState === WebSocket.OPEN) {
            _0x4920fc.db.send(_0x3f720b);
          }
        } catch (_0x471f51) {
          console.log("Socket send error: " + _0x471f51);
          _0x4920fc.Ub();
        }
      };
      _0x4920fc.xb = function (_0xe41b53, _0x43b28e) {
        var _0x3c34a8 = _0x43b28e ? 128 : 0;
        var _0xc87761 = _0x5aeb02(_0xe41b53) / _0x571363 * 128 & 127;
        var _0xe339fa = (_0x3c34a8 | _0xc87761) & 255;
        if (_0x4920fc.eb !== _0xe339fa) {
          var _0x9c0e10 = new ArrayBuffer(1);
          new DataView(_0x9c0e10).setInt8(0, _0xe339fa);
          _0x4920fc.Wb(_0x9c0e10);
          _0x4920fc.eb = _0xe339fa;
        }
      };
      _0x4920fc.Vb = function (_0xe9d4b, _0x2a37fc) {
        let _0x27fbb0 = loadJoy(!theoKzObjects.mobile);
        var _0x4cd555 = _0x4920fc.db = new WebSocket(_0xe9d4b);
        _0x4cd555.binaryType = "arraybuffer";
        window.onOpen = _0x4cd555.onopen = function () {
          _0x48f7d4("open");
          if (_0x4920fc.db === _0x4cd555) {
            console.log("Socket opened");
            _0x2a37fc();
          }
          isPlaying = true;
        };
        window.onclose = _0x4cd555.onclose = function () {
          _0x48f7d4("closed");
          _wrmxt.aload = false;
          if (_0x4920fc.db === _0x4cd555) {
            console.log("Socket closed");
            _0x4920fc.Ub();
          }
          isPlaying = false;
          if (_0x27fbb0) {
            _0x27fbb0.destroy();
          }
        };
        _0x4cd555.onerror = function (_0x428c6f) {
          if (_0x4920fc.db === _0x4cd555) {
            console.log("Socket error");
            _0x4920fc.Ub();
          }
          isPlaying = false;
          if (_0x27fbb0) {
            _0x27fbb0.destroy();
          }
        };
        _0x4cd555.onmessage = function (_0x21e798) {
          if (_0x4920fc.db === _0x4cd555) {
            _0x4920fc.z.Xb(_0x21e798.data);
          }
        };
      };
      return _0x4920fc;
    }
    var _0x495820 = "/images/linelogo-xmas2022.png";
    var _0x39c149 = "/images/guest-avatar-xmas2022.png";
    var _0x970477 = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    var _0x9b3c02 = "https://gateway.wormate.io";
    var _0x40beaf = "https://resources.wormate.io";
    var _0x3c63e4 = window.I18N_LANG;
    _0x3c63e4 ||= "en";
    var _0x50a6a5 = undefined;
    switch (_0x3c63e4) {
      case "uk":
        _0x50a6a5 = "uk_UA";
        break;
      case "de":
        _0x50a6a5 = "de_DE";
        break;
      case "fr":
        _0x50a6a5 = "fr_FR";
        break;
      case "ru":
        _0x50a6a5 = "ru_RU";
        break;
      case "es":
        _0x50a6a5 = "es_ES";
        break;
      default:
        _0x50a6a5 = "en_US";
    }
    moment.locale(_0x50a6a5);
    var _0x4414d4 = false;
    var _0xdc115f = undefined;
    var _0x43de5f = function () {
      var _0x15ec74 = {
        Yb: eval("PIXI")
      };
      var _0x598002 = _0x15ec74.Yb["BLEND_MODES"];
      var _0x1a0b2 = _0x15ec74.Yb["WRAP_MODES"];
      return {
        Zb: _0x15ec74.Yb["Container"],
        $b: _0x15ec74.Yb["BaseTexture"],
        _b: _0x15ec74.Yb["Texture"],
        ac: _0x15ec74.Yb["Renderer"],
        bc: _0x15ec74.Yb["Graphics"],
        cc: _0x15ec74.Yb["Shader"],
        dc: _0x15ec74.Yb["Rectangle"],
        ec: _0x15ec74.Yb["Sprite"],
        fc: _0x15ec74.Yb["Text"],
        gc: _0x15ec74.Yb["Geometry"],
        hc: _0x15ec74.Yb["Mesh"],
        ic: {
          jc: _0x598002["ADD"]
        },
        kc: {
          lc: _0x1a0b2["REPEAT"]
        }
      };
    }();
    var _0x571363 = Math.PI * 2;
    (function () {
      var _0x4bef5c = "Z2V0";
      var _0x12bbe1 = "=";
      var _0x38b2bc = _0x4bef5c + "SW50";
      var _0x195a25 = _0x4bef5c + "RmxvYXQ";
      var _0x4f3b1c = [atob(_0x38b2bc + "OA=="), atob(_0x38b2bc + "MTY" + _0x12bbe1), atob(_0x38b2bc + "MzI" + _0x12bbe1), atob(_0x195a25 + "zMg=="), atob(_0x195a25 + "2NA==")];
      DataView.prototype.mc = function (_0x24fcd5) {
        return this[_0x4f3b1c[0]](_0x24fcd5);
      };
      DataView.prototype.nc = function (_0x567e7c) {
        return this[_0x4f3b1c[1]](_0x567e7c);
      };
      DataView.prototype.oc = function (_0x44a0fb) {
        return this[_0x4f3b1c[2]](_0x44a0fb);
      };
      DataView.prototype.pc = function (_0x455a8d) {
        return this[_0x4f3b1c[3]](_0x455a8d);
      };
      DataView.prototype.qc = function (_0x1ea14f) {
        return this[_0x4f3b1c[4]](_0x1ea14f);
      };
    })();
    var _0x3d16aa = function () {
      function _0x4b18d6(_0x158a9d) {
        this.rc = _0x158a9d;
        this.sc = false;
        this.tc = 1;
      }
      _0x4b18d6.VELOCITY_TYPE = 0;
      _0x4b18d6.FLEXIBLE_TYPE = 1;
      _0x4b18d6.MAGNETIC_TYPE = 2;
      _0x4b18d6.ZOOM_TYPE = 6;
      _0x4b18d6.X2_TYPE = 3;
      _0x4b18d6.X5_TYPE = 4;
      _0x4b18d6.X10_TYPE = 5;
      return _0x4b18d6;
    }();
    var _0x330e94 = function () {
      function _0x16649f() {
        this.uc = [];
        this.vc = {};
        this.wc = null;
        this.xc = _0x242e51.yc();
      }
      function _0x44bb5f(_0x39e84b, _0x390ad8) {
        for (var _0x14bf88 in _0x39e84b) {
          if (_0x39e84b.hasOwnProperty(_0x14bf88)) {
            _0x390ad8(_0x14bf88, _0x39e84b[_0x14bf88]);
          }
        }
      }
      _0x16649f.prototype.a = function () {
        this.L();
      };
      _0x16649f.prototype.W = function () {
        return this.wc != null;
      };
      _0x16649f.prototype.zc = function () {
        if (this.wc != null) {
          return this.wc.revision;
        } else {
          return -1;
        }
      };
      _0x16649f.prototype.Ac = function () {
        return this.wc;
      };
      _0x16649f.prototype.L = function () {
        var _0x207401 = this;
        $.get(_0x40beaf + "/dynamic/assets/revision.json", function (_0x540a82) {
          if (_0x540a82 > _0x207401.zc()) {
            _0x207401.Bc();
          }
        });
      };
      _0x16649f.prototype.Bc = function () {
        var _0x3b0b6a = this;
        $.get(_0x40beaf + "/dynamic/assets/registry.json", function (_0x3b21b2) {
          if (_0x3b21b2.revision > _0x3b0b6a.zc()) {
            _0x3b0b6a.Cc(_0x3b21b2);
          }
        });
      };
      _0x16649f.prototype.ca = function (_0x7f7e66) {
        this.uc.push(_0x7f7e66);
      };
      _0x16649f.prototype.Dc = function () {
        return this.xc;
      };
      _0x16649f.prototype.Ec = function () {
        for (var _0x10e451 = 0; _0x10e451 < this.uc.length; _0x10e451++) {
          this.uc[_0x10e451]();
        }
      };
      _0x16649f.prototype.Fc = function (_0x3106a8, _0x5a0ac0) {
        if (!(_0x3106a8.revision <= this.zc())) {
          var _0xca317e = _0x5a0ac0;
          _0x44bb5f(this.vc, function (_0x1f3779, _0x1c023c) {
            var _0x43635b = _0xca317e[_0x1f3779];
            if (_0x43635b == null || _0x1c023c.Gc !== _0x43635b.Gc) {
              print("disposing prev texture: " + _0x1f3779 + " at " + _0x1c023c.Gc);
              _0x1c023c.Hc.destroy();
            }
          });
          this.vc = _0xca317e;
          this.wc = _0x3106a8;
          this.xc = _0x242e51.Ic(this.wc, this.vc);
          this.Ec();
        }
      };
      _0x16649f.prototype.Cc = function (_0x5351bf) {
        var _0x201a2b = {};
        (function (_0x359ece, _0x2de575) {
          for (var _0x293f0c in _0x359ece) {
            if (_0x359ece.hasOwnProperty(_0x293f0c)) {
              _0x2de575(_0x293f0c, _0x359ece[_0x293f0c]);
            }
          }
        })(_0x5351bf.textureDict, function (_0x1d1f11, _0x54374d) {
          var _0x4c982b = SITE_XTHOST + _0x54374d.relativePath;
          if (!_0x54374d.custom) {
            _0x4c982b = _0x40beaf + _0x54374d.relativePath;
          }
          try {
            _0x201a2b[_0x1d1f11] = new _0x48d555(_0x4c982b, _0x43de5f.$b.from(_0x54374d.file || _0x4c982b));
          } catch (_0x5d9442) {
            console.log(_0x4c982b);
          }
        });
        this.Fc(_0x5351bf, _0x201a2b);
      };
      return _0x16649f;
    }();
    var _0x242e51 = function () {
      function _0x3a75b9() {
        this.Jc = null;
        this.Kc = null;
        this.Lc = null;
        this.Mc = null;
        this.Nc = null;
        this.Oc = null;
        this.Pc = null;
        this.Qc = null;
        this.Rc = null;
        this.Sc = null;
        this.Tc = null;
        this.Uc = null;
        this.Vc = null;
        this.Wc = null;
        this.Xc = null;
        this.Yc = null;
      }
      function _0x2afcca(_0x3855da, _0x47ff41) {
        for (var _0x53a5bd in _0x3855da) {
          if (_0x3855da.hasOwnProperty(_0x53a5bd)) {
            _0x47ff41(_0x53a5bd, _0x3855da[_0x53a5bd]);
          }
        }
      }
      _0x3a75b9.yc = function () {
        var _0x4c7acb = new _0x242e51();
        _0x4c7acb.Jc = {};
        _0x4c7acb.Kc = {
          Zc: null,
          $c: null
        };
        _0x4c7acb.Lc = {};
        _0x4c7acb.Mc = {
          Zc: null
        };
        _0x4c7acb.Nc = {};
        _0x4c7acb.Oc = {
          _c: "#FFFFFF",
          Zc: [],
          $c: []
        };
        _0x4c7acb.Pc = {};
        _0x4c7acb.Qc = {
          ad: {},
          bd: _0x4c7acb.Oc,
          cd: _0x4c7acb.Kc
        };
        _0x4c7acb.Rc = {};
        _0x4c7acb.Sc = {
          Zc: []
        };
        _0x4c7acb.Tc = {};
        _0x4c7acb.Uc = {
          Zc: []
        };
        _0x4c7acb.Vc = {};
        _0x4c7acb.Wc = {
          Zc: []
        };
        _0x4c7acb.Xc = {};
        _0x4c7acb.Yc = {
          Zc: []
        };
        return _0x4c7acb;
      };
      _0x3a75b9.Ic = function (_0x49892b, _0x14fc8c) {
        var _0x29ad27 = new _0x242e51();
        var _0x3bf8d5 = {};
        _0x2afcca(_0x49892b.colorDict, function (_0x46a086, _0x4452ea) {
          _0x3bf8d5[_0x46a086] = _0x4452ea;
        });
        var _0x4b1f85 = {};
        _0x2afcca(_0x49892b.regionDict, function (_0x3c5d6e, _0x2a2ec6) {
          _0x4b1f85[_0x3c5d6e] = new _0xb10cec(_0x14fc8c[_0x2a2ec6.texture].Hc, _0x2a2ec6.x, _0x2a2ec6.y, _0x2a2ec6.w, _0x2a2ec6.h, _0x2a2ec6.px, _0x2a2ec6.py, _0x2a2ec6.pw, _0x2a2ec6.ph);
        });
        _0x29ad27.Nc = {};
        for (var _0x21c470 = 0; _0x21c470 < _0x49892b.skinArrayDict.length; _0x21c470++) {
          var _0x1fa65f = _0x49892b.skinArrayDict[_0x21c470];
          _0x29ad27.Nc[_0x1fa65f.id] = new _0x242e51.WormSkinData("#" + _0x3bf8d5[_0x1fa65f.prime], _0x1fa65f.base.map(function (_0x107c95) {
            return _0x4b1f85[_0x107c95];
          }), _0x1fa65f.glow.map(function (_0x48e989) {
            return _0x4b1f85[_0x48e989];
          }));
        }
        var _0x47f92f = _0x49892b.skinUnknown;
        _0x29ad27.Oc = new _0x242e51.WormSkinData("#" + _0x3bf8d5[_0x47f92f.prime], _0x47f92f.base.map(function (_0x4923a6) {
          return _0x4b1f85[_0x4923a6];
        }), _0x47f92f.glow.map(function (_0x18e841) {
          return _0x4b1f85[_0x18e841];
        }));
        _0x29ad27.Rc = {};
        _0x2afcca(_0x49892b.eyesDict, function (_0x5ae89f, _0x13bf7d) {
          _0x5ae89f = parseInt(_0x5ae89f);
          _0x29ad27.Rc[_0x5ae89f] = new _0x242e51.WearSkinData(_0x13bf7d.base.map(function (_0x66e166) {
            return _0x4b1f85[_0x66e166.region];
          }));
        });
        _0x29ad27.Sc = new _0x242e51.WearSkinData(_0x49892b.eyesUnknown.base.map(function (_0x506784) {
          return _0x4b1f85[_0x506784.region];
        }));
        _0x29ad27.Tc = {};
        _0x2afcca(_0x49892b.mouthDict, function (_0x350ac7, _0x1b6c5b) {
          _0x350ac7 = parseInt(_0x350ac7);
          _0x29ad27.Tc[_0x350ac7] = new _0x242e51.WearSkinData(_0x1b6c5b.base.map(function (_0xa46fa1) {
            return _0x4b1f85[_0xa46fa1.region];
          }));
        });
        _0x29ad27.Uc = new _0x242e51.WearSkinData(_0x49892b.mouthUnknown.base.map(function (_0x2ffc45) {
          return _0x4b1f85[_0x2ffc45.region];
        }));
        _0x29ad27.Vc = {};
        _0x2afcca(_0x49892b.glassesDict, function (_0x525f43, _0x146397) {
          _0x525f43 = parseInt(_0x525f43);
          _0x29ad27.Vc[_0x525f43] = new _0x242e51.WearSkinData(_0x146397.base.map(function (_0x48d331) {
            return _0x4b1f85[_0x48d331.region];
          }));
        });
        _0x29ad27.Wc = new _0x242e51.WearSkinData(_0x49892b.glassesUnknown.base.map(function (_0x239012) {
          return _0x4b1f85[_0x239012.region];
        }));
        _0x29ad27.Xc = {};
        _0x2afcca(_0x49892b.hatDict, function (_0x21fdb8, _0x1ce3c4) {
          _0x21fdb8 = parseInt(_0x21fdb8);
          _0x29ad27.Xc[_0x21fdb8] = new _0x242e51.WearSkinData(_0x1ce3c4.base.map(function (_0xd53b9f) {
            return _0x4b1f85[_0xd53b9f.region];
          }));
        });
        _0x29ad27.Yc = new _0x242e51.WearSkinData(_0x49892b.hatUnknown.base.map(function (_0x2d41d6) {
          return _0x4b1f85[_0x2d41d6.region];
        }));
        _0x29ad27.Jc = {};
        _0x2afcca(_0x49892b.portionDict, function (_0x5429a4, _0x2fcabd) {
          _0x5429a4 = parseInt(_0x5429a4);
          _0x29ad27.Jc[_0x5429a4] = new _0x242e51.PortionSkinData(_0x4b1f85[_0x2fcabd.base], _0x4b1f85[_0x2fcabd.glow]);
        });
        var _0x5689c1 = _0x49892b.portionUnknown;
        _0x29ad27.Kc = new _0x242e51.PortionSkinData(_0x4b1f85[_0x5689c1.base], _0x4b1f85[_0x5689c1.glow]);
        _0x29ad27.Lc = {};
        _0x2afcca(_0x49892b.abilityDict, function (_0xbb6279, _0x112345) {
          _0xbb6279 = parseInt(_0xbb6279);
          _0x29ad27.Lc[_0xbb6279] = new _0x242e51.AbilitySkinData(_0x4b1f85[_0x112345.base]);
        });
        var _0x4d2a16 = _0x49892b.abilityUnknown;
        _0x29ad27.Mc = new _0x242e51.AbilitySkinData(_0x4b1f85[_0x4d2a16.base]);
        _0x29ad27.Pc = {};
        _0x2afcca(_0x49892b.teamDict, function (_0x4c4793, _0x3c5210) {
          _0x4c4793 = parseInt(_0x4c4793);
          _0x29ad27.Pc[_0x4c4793] = new _0x242e51.TeamSkinData(_0x3c5210.name, new _0x242e51.WormSkinData("#" + _0x3bf8d5[_0x3c5210.skin.prime], [], _0x3c5210.skin.glow.map(function (_0x31b5ec) {
            return _0x4b1f85[_0x31b5ec];
          })), new _0x242e51.PortionSkinData([], _0x4b1f85[_0x3c5210.portion.glow]));
        });
        _0x29ad27.Qc = new _0x242e51.TeamSkinData({}, _0x29ad27.Oc, _0x29ad27.Kc);
        return _0x29ad27;
      };
      _0x3a75b9.prototype.dd = function (_0x548e43) {
        var _0x2f3d44 = this.Nc[_0x548e43];
        return _0x2f3d44 || this.Oc;
      };
      _0x3a75b9.prototype.ed = function (_0x4050a9) {
        var _0x1f9496 = this.Pc[_0x4050a9];
        return _0x1f9496 || this.Qc;
      };
      _0x3a75b9.prototype.fd = function (_0x9a9b25) {
        var _0x399904 = this.Rc[_0x9a9b25];
        return _0x399904 || this.Sc;
      };
      _0x3a75b9.prototype.gd = function (_0x155afd) {
        var _0x214458 = this.Tc[_0x155afd];
        return _0x214458 || this.Uc;
      };
      _0x3a75b9.prototype.hd = function (_0x30906b) {
        var _0x1f6c0c = this.Vc[_0x30906b];
        return _0x1f6c0c || this.Wc;
      };
      _0x3a75b9.prototype.jd = function (_0x5970a5) {
        var _0x5b8584 = this.Xc[_0x5970a5];
        return _0x5b8584 || this.Yc;
      };
      _0x3a75b9.prototype.kd = function (_0x28fd7d) {
        var _0x53d5db = this.Jc[_0x28fd7d];
        return _0x53d5db || this.Kc;
      };
      _0x3a75b9.prototype.ld = function (_0x17d1dc) {
        var _0x22a534 = this.Lc[_0x17d1dc];
        return _0x22a534 || this.Mc;
      };
      _0x3a75b9.TeamSkinData = function () {
        function _0x122ac8(_0x226390, _0x453d33, _0x2f2151) {
          this.ad = _0x226390;
          this.bd = _0x453d33;
          this.cd = _0x2f2151;
        }
        return _0x122ac8;
      }();
      _0x3a75b9.WormSkinData = function () {
        function _0x5a2a60(_0x248707, _0x45ed5d, _0x15dbee) {
          this._c = _0x248707;
          this.Zc = _0x45ed5d;
          this.$c = _0x15dbee;
        }
        return _0x5a2a60;
      }();
      _0x3a75b9.WearSkinData = function () {
        function _0x18b146(_0x4ab685) {
          this.Zc = _0x4ab685;
        }
        return _0x18b146;
      }();
      _0x3a75b9.PortionSkinData = function () {
        function _0x45d30a(_0x5ee783, _0x3b161a) {
          this.Zc = _0x5ee783;
          this.$c = _0x3b161a;
        }
        return _0x45d30a;
      }();
      _0x3a75b9.AbilitySkinData = function () {
        function _0x2c0c01(_0x4277af) {
          this.Zc = _0x4277af;
        }
        return _0x2c0c01;
      }();
      return _0x3a75b9;
    }();
    var _0x2018ad = function () {
      function _0x4eb056() {
        this.md = _0x2018ad.AudioState.ua;
        this.nd = false;
        this.od = false;
        this.pd = null;
        this.qd = null;
      }
      _0x4eb056.prototype.a = function () {};
      _0x4eb056.prototype.rd = function (_0x3eee18) {
        this.od = _0x3eee18;
      };
      _0x4eb056.prototype.G = function (_0x549bf7) {
        this.md = _0x549bf7;
        this.sd();
      };
      _0x4eb056.prototype.td = function (_0x3211dc) {
        this.nd = _0x3211dc;
        this.sd();
      };
      _0x4eb056.prototype.sd = function () {};
      _0x4eb056.prototype.ud = function (_0xc243bd, _0x55f7f2) {
        if (!_0x25a98d().p.W) {
          return null;
        }
        var _0x4bedd2 = _0xc243bd[_0x55f7f2];
        if (_0x4bedd2 == null || _0x4bedd2.length == 0) {
          return null;
        } else {
          return _0x4bedd2[Math.floor(Math.random() * _0x4bedd2.length)].cloneNode();
        }
      };
      _0x4eb056.prototype.vd = function (_0x58cefd, _0x34346f, _0x584af7) {
        if (this.od && !(_0x584af7 <= 0)) {
          var _0x285498 = this.ud(_0x58cefd, _0x34346f);
          if (_0x285498 != null) {
            _0x285498.volume = Math.min(1, _0x584af7);
            _0x285498.play();
          }
        }
      };
      _0x4eb056.prototype.wd = function (_0x27b83a, _0x1a02ef) {
        if (this.md.xd) {
          this.vd(app.q.yd, _0x27b83a, _0x1a02ef);
        }
      };
      _0x4eb056.prototype.zd = function (_0x31b5b9, _0x42e1c0) {
        if (this.md.Ad) {
          this.vd(app.q.Bd, _0x31b5b9, _0x42e1c0);
        }
      };
      _0x4eb056.prototype.Cd = function () {};
      _0x4eb056.prototype.Dd = function () {};
      _0x4eb056.prototype.Ed = function () {};
      _0x4eb056.prototype.Fd = function () {};
      _0x4eb056.prototype.Gd = function () {};
      _0x4eb056.prototype.Hd = function () {};
      _0x4eb056.prototype.Id = function (_0x350b4d, _0x59e17b, _0x349b46) {};
      _0x4eb056.prototype.Jd = function (_0x1202fa) {};
      _0x4eb056.prototype.Kd = function (_0x47d8c0) {};
      _0x4eb056.prototype.Ld = function (_0x17cf01) {};
      _0x4eb056.prototype.Md = function (_0x2dac33) {};
      _0x4eb056.prototype.Nd = function (_0x29898d) {};
      _0x4eb056.prototype.Od = function (_0x48bb60) {};
      _0x4eb056.prototype.Pd = function (_0x52411c) {};
      _0x4eb056.prototype.Qd = function (_0x4de91a) {};
      _0x4eb056.prototype.Rd = function (_0x2ecac4) {};
      _0x4eb056.prototype.Sd = function (_0x1363d9) {};
      _0x4eb056.prototype.Td = function (_0x113716) {};
      _0x4eb056.prototype.Ud = function (_0x492337) {};
      _0x4eb056.prototype.Vd = function (_0x1a8b86) {};
      _0x4eb056.prototype.Wd = function (_0x43ae0c) {};
      _0x4eb056.prototype.Xd = function (_0x583c6f, _0xeaf224) {};
      _0x4eb056.prototype.Yd = function (_0x4105f7) {};
      _0x4eb056.prototype.Zd = function (_0x3e47df, _0x198712, _0xb1cf9e) {};
      (function () {
        function _0x1d8b8a(_0x2ffd4d) {
          this.$d = new _0x59dad1(_0x2ffd4d, 0.5);
          this.$d._d.loop = true;
          this.ae = false;
        }
        _0x1d8b8a.prototype.be = function (_0x47e695) {
          if (_0x47e695) {
            this.b();
          } else {
            this.ce();
          }
        };
        _0x1d8b8a.prototype.b = function () {
          if (!this.ae) {
            this.ae = true;
            this.$d.de = 0;
            this.$d.ee(1500, 100);
          }
        };
        _0x1d8b8a.prototype.ce = function () {
          if (this.ae) {
            this.ae = false;
            this.$d.fe(1500, 100);
          }
        };
      })();
      (function () {
        function _0x3209df(_0x405a4d) {
          this.ge = _0x405a4d.map(function (_0x4f2b76) {
            return new _0x59dad1(_0x4f2b76, 0.4);
          });
          _0xa188d0(this.ge, 0, this.ge.length);
          this.he = null;
          this.ie = 0;
          this.ae = false;
          this.je = 10000;
        }
        function _0xa188d0(_0x2c388f, _0x94ab3d, _0x3b7d29) {
          for (var _0x315c5b = _0x3b7d29 - 1; _0x315c5b > _0x94ab3d; _0x315c5b--) {
            var _0x5ca3b7 = _0x94ab3d + Math.floor(Math.random() * (_0x315c5b - _0x94ab3d + 1));
            var _0x594feb = _0x2c388f[_0x315c5b];
            _0x2c388f[_0x315c5b] = _0x2c388f[_0x5ca3b7];
            _0x2c388f[_0x5ca3b7] = _0x594feb;
          }
        }
        _0x3209df.prototype.be = function (_0x1dcf7a) {
          if (_0x1dcf7a) {
            this.b();
          } else {
            this.ce();
          }
        };
        _0x3209df.prototype.b = function () {
          if (!this.ae) {
            this.ae = true;
            this.ke(1500);
          }
        };
        _0x3209df.prototype.ce = function () {
          if (this.ae) {
            this.ae = false;
            if (this.he != null) {
              this.he.fe(800, 50);
            }
          }
        };
        _0x3209df.prototype.ke = function (_0x4ef3d1) {
          if (this.ae) {
            if (this.he == null) {
              this.he = this.le();
            }
            if (this.he._d.currentTime + this.je / 1000 > this.he._d.duration) {
              this.he = this.le();
              this.he._d.currentTime = 0;
            }
            console.log("Current track '" + this.he._d.src + "', change in (ms) " + ((this.he._d.duration - this.he._d.currentTime) * 1000 - this.je));
            this.he.de = 0;
            this.he.ee(_0x4ef3d1, 100);
            var _0x370fec = (this.he._d.duration - this.he._d.currentTime) * 1000 - this.je;
            var _0x48073a = this;
            var _0x196820 = setTimeout(function () {
              if (_0x48073a.ae && _0x196820 == _0x48073a.ie) {
                _0x48073a.he.fe(_0x48073a.je, 100);
                _0x48073a.he = _0x48073a.le();
                _0x48073a.he._d.currentTime = 0;
                _0x48073a.ke(_0x48073a.je);
              }
            }, _0x370fec);
            this.ie = _0x196820;
          }
        };
        _0x3209df.prototype.le = function () {
          var _0x12ebd5 = this.ge[0];
          var _0x5c8d5a = Math.max(1, this.ge.length / 2);
          _0xa188d0(this.ge, _0x5c8d5a, this.ge.length);
          this.ge.push(this.ge.shift());
          return _0x12ebd5;
        };
      })();
      var _0x59dad1 = function () {
        function _0x46abac(_0x486010, _0x2c2483) {
          this._d = _0x486010;
          this.me = _0x2c2483;
          this.de = 0;
          _0x486010.volume = 0;
          this.ne = 0;
          this.oe = false;
        }
        _0x46abac.prototype.ee = function (_0x19c09f, _0x3cbb56) {
          console.log("fade IN " + this._d.src);
          this.pe(true, _0x19c09f, _0x3cbb56);
        };
        _0x46abac.prototype.fe = function (_0x4d1ecb, _0x11e956) {
          console.log("fade OUT " + this._d.src);
          this.pe(false, _0x4d1ecb, _0x11e956);
        };
        _0x46abac.prototype.pe = function (_0x507905, _0x1adc3c, _0x5eaacf) {
          if (this.oe) {
            clearInterval(this.ne);
          }
          var _0x3fd53d = this;
          var _0x4cacbd = 1 / (_0x1adc3c / _0x5eaacf);
          var _0x5017d0 = setInterval(function () {
            if (_0x3fd53d.oe && _0x5017d0 != _0x3fd53d.ne) {
              clearInterval(_0x5017d0);
              return;
            }
            if (_0x507905) {
              _0x3fd53d.de = Math.min(1, _0x3fd53d.de + _0x4cacbd);
              _0x3fd53d._d.volume = _0x3fd53d.de * _0x3fd53d.me;
              if (_0x3fd53d.de >= 1) {
                _0x3fd53d.oe = false;
                clearInterval(_0x5017d0);
              }
            } else {
              _0x3fd53d.de = Math.max(0, _0x3fd53d.de - _0x4cacbd);
              _0x3fd53d._d.volume = _0x3fd53d.de * _0x3fd53d.me;
              if (_0x3fd53d.de <= 0) {
                _0x3fd53d._d.pause();
                _0x3fd53d.oe = false;
                clearInterval(_0x5017d0);
              }
            }
          }, _0x5eaacf);
          this.oe = true;
          this.ne = _0x5017d0;
          this._d.play();
        };
        return _0x46abac;
      }();
      _0x4eb056.AudioState = {
        ua: {
          qe: false,
          re: false,
          Ad: true,
          xd: false
        },
        F: {
          qe: false,
          re: true,
          Ad: true,
          xd: false
        },
        H: {
          qe: true,
          re: false,
          Ad: false,
          xd: true
        },
        Ea: {
          qe: false,
          re: false,
          Ad: true,
          xd: false
        },
        qa: {
          qe: false,
          re: false,
          Ad: false,
          xd: false
        }
      };
      return _0x4eb056;
    }();
    var _0x474d68 = function () {
      function _0x3fb05b(_0x5d4463) {
        this.se = _0x5d4463;
        this.te = _0x5d4463.get()[0];
        this.ue = new _0x43de5f.ac({
          view: this.te,
          backgroundColor: _0x160122,
          antialias: true
        });
        this.ve = new _0x43de5f.Zb();
        this.ve.sortableChildren = true;
        this.we = [];
        this.xe = [];
        this.ye = [];
        this.a();
      }
      var _0x160122 = 0;
      function _0x3ec910(_0x15146c, _0x570411) {
        return _0x15146c + Math.random(_0x570411 - _0x15146c);
      }
      function _0x99e8f7(_0x1c320b) {
        if (_0x1c320b >= 0) {
          return Math.cos(_0x1c320b % _0x571363);
        } else {
          return Math.cos(_0x1c320b % _0x571363 + _0x571363);
        }
      }
      function _0x29e54f(_0x58df24) {
        if (_0x58df24 >= 0) {
          return Math.sin(_0x58df24 % _0x571363);
        } else {
          return Math.sin(_0x58df24 % _0x571363 + _0x571363);
        }
      }
      var _0x1f22ff = [{
        ze: _0x3ec910(0, _0x571363),
        Ae: _0x3ec910(0, _0x571363),
        Be: _0x3ec910(0.1, 0.5),
        Ce: 1,
        De: 2,
        Ee: 16737962
      }, {
        ze: _0x3ec910(0, _0x571363),
        Ae: _0x3ec910(0, _0x571363),
        Be: _0x3ec910(0.1, 0.5),
        Ce: 1.5,
        De: 1.5,
        Ee: 16746632
      }, {
        ze: _0x3ec910(0, _0x571363),
        Ae: _0x3ec910(0, _0x571363),
        Be: _0x3ec910(0.1, 0.5),
        Ce: 2,
        De: 1,
        Ee: 16755302
      }, {
        ze: _0x3ec910(0, _0x571363),
        Ae: _0x3ec910(0, _0x571363),
        Be: _0x3ec910(0.1, 0.5),
        Ce: 3,
        De: 2,
        Ee: 11206502
      }, {
        ze: _0x3ec910(0, _0x571363),
        Ae: _0x3ec910(0, _0x571363),
        Be: _0x3ec910(0.1, 0.5),
        Ce: 2.5,
        De: 2.5,
        Ee: 8978312
      }, {
        ze: _0x3ec910(0, _0x571363),
        Ae: _0x3ec910(0, _0x571363),
        Be: _0x3ec910(0.1, 0.5),
        Ce: 2,
        De: 3,
        Ee: 6750122
      }, {
        ze: _0x3ec910(0, _0x571363),
        Ae: _0x3ec910(0, _0x571363),
        Be: _0x3ec910(0.1, 0.5),
        Ce: 5,
        De: 4,
        Ee: 6728447
      }, {
        ze: _0x3ec910(0, _0x571363),
        Ae: _0x3ec910(0, _0x571363),
        Be: _0x3ec910(0.1, 0.5),
        Ce: 4.5,
        De: 4.5,
        Ee: 8947967
      }, {
        ze: _0x3ec910(0, _0x571363),
        Ae: _0x3ec910(0, _0x571363),
        Be: _0x3ec910(0.1, 0.5),
        Ce: 4,
        De: 5,
        Ee: 11167487
      }];
      _0x3fb05b.prototype.a = function () {
        var _0xa5db30 = _0x25a98d();
        this.ue.backgroundColor = _0x160122;
        this.we = new Array(_0x1f22ff.length);
        for (var _0x407556 = 0; _0x407556 < this.we.length; _0x407556++) {
          this.we[_0x407556] = new _0x43de5f.ec();
          this.we[_0x407556].texture = _0xa5db30.q.Fe;
          this.we[_0x407556].anchor.set(0.5);
          this.we[_0x407556].zIndex = 1;
          this.ve.addChild(this.we[_0x407556]);
        }
        this.xe = new Array(_0xa5db30.q.Ge.length);
        for (var _0x3065fc = 0; _0x3065fc < this.xe.length; _0x3065fc++) {
          this.xe[_0x3065fc] = new _0x43de5f.ec();
          this.xe[_0x3065fc].texture = _0xa5db30.q.Ge[_0x3065fc];
          this.xe[_0x3065fc].anchor.set(0.5);
          this.xe[_0x3065fc].zIndex = 2;
          this.ve.addChild(this.xe[_0x3065fc]);
        }
        this.ye = new Array(this.xe.length);
        for (var _0x132fb0 = 0; _0x132fb0 < this.ye.length; _0x132fb0++) {
          this.ye[_0x132fb0] = {
            He: Math.random(),
            Ie: Math.random(),
            Je: Math.random(),
            Ke: Math.random()
          };
        }
        this.Ra();
      };
      _0x3fb05b.sc = false;
      _0x3fb05b.Le = function (_0x3bde96) {
        _0x3fb05b.sc = _0x3bde96;
      };
      _0x3fb05b.prototype.Ra = function () {
        var _0x2f67de = window.devicePixelRatio ? window.devicePixelRatio : 1;
        var _0x3b3c29 = this.se.width();
        var _0x4b0a96 = this.se.height();
        this.ue.resize(_0x3b3c29, _0x4b0a96);
        this.ue.resolution = _0x2f67de;
        this.te.width = _0x2f67de * _0x3b3c29;
        this.te.height = _0x2f67de * _0x4b0a96;
        var _0x399ea4 = Math.max(_0x3b3c29, _0x4b0a96) * 0.8;
        for (var _0x1bc8cf = 0; _0x1bc8cf < this.we.length; _0x1bc8cf++) {
          this.we[_0x1bc8cf].width = _0x399ea4;
          this.we[_0x1bc8cf].height = _0x399ea4;
        }
      };
      _0x3fb05b.prototype.Pa = function (_0x487532, _0x257cff) {
        if (_0x3fb05b.sc) {
          var _0x313f27 = _0x487532 / 1000;
          var _0x59a36c = _0x257cff / 1000;
          var _0xa94fd = this.se.width();
          var _0xf88011 = this.se.height();
          for (var _0x585911 = 0; _0x585911 < this.we.length; _0x585911++) {
            var _0x113785 = _0x1f22ff[_0x585911 % _0x1f22ff.length];
            var _0x96678a = this.we[_0x585911];
            var _0x2eb3eb = _0x99e8f7(_0x113785.Ce * (_0x313f27 * 0.08) + _0x113785.Ae);
            var _0x3d7e11 = _0x29e54f(_0x113785.De * (_0x313f27 * 0.08));
            var _0x1510b = 0.2 + _0x99e8f7(_0x113785.Ae + _0x113785.Be * _0x313f27) * 0.2;
            _0x96678a.tint = _0x113785.Ee;
            _0x96678a.alpha = _0x1510b;
            _0x96678a.position.set(_0xa94fd * (0.2 + (_0x2eb3eb + 1) * 0.5 * 0.6), _0xf88011 * (0.1 + (_0x3d7e11 + 1) * 0.5 * 0.8));
          }
          var _0xf54cb1 = Math.max(_0xa94fd, _0xf88011) * 0.05;
          for (var _0x4dff3a = 0; _0x4dff3a < this.xe.length; _0x4dff3a++) {
            var _0x48fcc3 = this.ye[_0x4dff3a];
            var _0x1e3778 = this.xe[_0x4dff3a];
            var _0x2714cf = _0x571363 * _0x4dff3a / this.xe.length + _0x48fcc3.He;
            _0x48fcc3.Ke += _0x48fcc3.Ie * _0x59a36c;
            if (_0x48fcc3.Ke > 1.3) {
              _0x48fcc3.He = Math.random() * _0x571363;
              _0x48fcc3.Ie = (0.09 + Math.random() * 0.07) * 0.66;
              _0x48fcc3.Je = 0.15 + Math.random() * 0.7;
              _0x48fcc3.Ke = -0.3;
            }
            var _0x1bc9a5 = _0x48fcc3.Je + Math.sin(Math.sin(_0x2714cf + _0x313f27 * 0.48) * 6) * 0.03;
            var _0xc4291d = _0x48fcc3.Ke;
            var _0x1eb2d6 = _0x4da66d(Math.sin(Math.PI * _0xc4291d), 0.1, 1);
            var _0x582c4f = (0.4 + (1 + Math.sin(_0x2714cf + _0x313f27 * 0.12)) * 0.5 * 1.2) * 0.5;
            var _0x1aaf95 = _0x2714cf + _0x48fcc3.Ie * 2 * _0x313f27;
            _0x1e3778.alpha = _0x1eb2d6;
            _0x1e3778.position.set(_0xa94fd * _0x1bc9a5, _0xf88011 * _0xc4291d);
            _0x1e3778.rotation = _0x1aaf95;
            var _0x324a6a = _0x1e3778.texture.width / _0x1e3778.texture.height;
            _0x1e3778.width = _0x582c4f * _0xf54cb1;
            _0x1e3778.height = _0x582c4f * _0xf54cb1 * _0x324a6a;
          }
          this.ue.render(this.ve, null, true);
        }
      };
      return _0x3fb05b;
    }();
    var _0x2d19d3 = function () {
      function _0x130b4e() {}
      _0x130b4e.Na = "consent_state_2";
      _0x130b4e.ya = "showPlayerNames";
      _0x130b4e.Me = "musicEnabled";
      _0x130b4e.Ne = "sfxEnabled";
      _0x130b4e.Oe = "account_type";
      _0x130b4e.va = "gameMode";
      _0x130b4e.Aa = "nickname";
      _0x130b4e.Ba = "skin";
      _0x130b4e.d = "prerollCount";
      _0x130b4e.La = "shared";
      return _0x130b4e;
    }();
    var _0x270470 = function () {
      function _0x59c453(_0x313d78, _0x48fcfe, _0x260854) {
        var _0x4e1079 = false;
        for (var _0xa9441b = _0x260854.length, _0x4a8f49 = 0, _0x45a969 = _0xa9441b - 1; _0x4a8f49 < _0xa9441b; _0x45a969 = _0x4a8f49++) {
          if (_0x260854[_0x4a8f49][1] > _0x48fcfe != _0x260854[_0x45a969][1] > _0x48fcfe && _0x313d78 < (_0x260854[_0x45a969][0] - _0x260854[_0x4a8f49][0]) * (_0x48fcfe - _0x260854[_0x4a8f49][1]) / (_0x260854[_0x45a969][1] - _0x260854[_0x4a8f49][1]) + _0x260854[_0x4a8f49][0]) {
            _0x4e1079 = !_0x4e1079;
          }
        }
        return _0x4e1079;
      }
      var _0x349fe1 = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
      return {
        Oa: function (_0x4063b1, _0x9bd10e) {
          return _0x59c453(_0x9bd10e, _0x4063b1, _0x349fe1);
        }
      };
    }();
    var _0x46c004 = function () {
      function _0xab086d(_0x511e5c) {
        var _0xc397e1 = undefined;
        _0xc397e1 = _0x511e5c > 0 ? "+" + Math.floor(_0x511e5c) : _0x511e5c < 0 ? "-" + Math.floor(_0x511e5c) : "0";
        var _0x261584 = Math.min(1.5, 0.5 + _0x511e5c / 600);
        var _0x4dcc7b = undefined;
        if (_0x511e5c < 1) {
          _0x4dcc7b = "0xFFFFFF";
        } else if (_0x511e5c < 30) {
          var _0x16b67e = (_0x511e5c - 1) / 29;
          _0x4dcc7b = _0x2eab57((1 - _0x16b67e) * 1 + _0x16b67e * 0.96, (1 - _0x16b67e) * 1 + _0x16b67e * 0.82, (1 - _0x16b67e) * 1 + _0x16b67e * 0);
        } else if (_0x511e5c < 300) {
          var _0x1caff5 = (_0x511e5c - 30) / 270;
          _0x4dcc7b = _0x2eab57((1 - _0x1caff5) * 0.96 + _0x1caff5 * 0.93, (1 - _0x1caff5) * 0.82 + _0x1caff5 * 0.34, (1 - _0x1caff5) * 0 + _0x1caff5 * 0.25);
        } else if (_0x511e5c < 700) {
          var _0x49183e = (_0x511e5c - 300) / 400;
          _0x4dcc7b = _0x2eab57((1 - _0x49183e) * 0.93 + _0x49183e * 0.98, (1 - _0x49183e) * 0.34 + _0x49183e * 0, (1 - _0x49183e) * 0.25 + _0x49183e * 0.98);
        } else {
          _0x4dcc7b = _0x2eab57(0.98, 0, 0.98);
        }
        var _0x204891 = Math.random();
        var _0x48c986 = 1 + Math.random() * 0.5;
        return new _0x58981c(_0xc397e1, _0x4dcc7b, true, 0.5, _0x261584, _0x204891, _0x48c986);
      }
      function _0x1890c1(_0x2be4a5, _0x420d2f) {
        var _0x5fa735 = undefined;
        var _0x4b3ff8 = undefined;
        if (_0x420d2f) {
          _0x5fa735 = 1.3;
          _0x4b3ff8 = _0x2eab57(0.93, 0.34, 0.25);
        } else {
          _0x5fa735 = 1.1;
          _0x4b3ff8 = _0x2eab57(0.96, 0.82, 0);
        }
        return new _0x58981c(_0x2be4a5, _0x4b3ff8, true, 0.5, _0x5fa735, 0.5, 0.7);
      }
      function _0x2eab57(_0x241d71, _0x5122dd, _0x19038f) {
        return ((_0x241d71 * 255 & 255) << 16) + ((_0x5122dd * 255 & 255) << 8) + (_0x19038f * 255 & 255);
      }
      var _0x3043da = _0x1c8f8f(_0x43de5f.Zb, function () {
        _0x43de5f.Zb.call(this);
        this.Pe = [];
        this.Qe = 0;
      });
      _0x3043da.prototype.Re = function (_0x3d433b) {
        this.Qe += _0x3d433b;
        if (this.Qe >= 1) {
          var _0x186957 = Math.floor(this.Qe);
          this.Qe -= _0x186957;
          var _0x5630d1 = _0xab086d(_0x186957);
          this.addChild(_0x5630d1);
          this.Pe.push(_0x5630d1);
        }
      };
      _0x3043da.prototype.Se = function (_0x4b715f) {
        _0x48f7d4("count", _0x4b715f);
        if (_0x4b715f) {
          var _0x11045f = new Audio("https://milat2.com/video/headshot_sound_effect.mp3");
          _0x11045f.play();
          var _0x1776d9 = _0x1890c1(_0x57c9d2("index.game.floating.headshot"), true);
          this.addChild(_0x1776d9);
          this.Pe.push(_0x1776d9);
          if (_0x1776d9) {
            theoKzObjects.emoji_headshot = true;
            setTimeout(function () {
              theoKzObjects.emoji_headshot = false;
            }, 3000);
          }
        } else {
          var _0x1776d9 = _0x1890c1(_0x57c9d2("index.game.floating.wellDone"), false);
          this.addChild(_0x1776d9);
          this.Pe.push(_0x1776d9);
          if (_0x1776d9) {
            theoKzObjects.emoji_kill = true;
            setTimeout(function () {
              theoKzObjects.emoji_kill = false;
            }, 3000);
          }
        }
      };
      _0x3043da.prototype.Te = function (_0x4596ae, _0x24439f) {
        var _0x1ba1e4 = _0x25a98d().s.H.wb;
        var _0x28c86c = _0x1ba1e4.ue.width / _0x1ba1e4.ue.resolution;
        var _0x44b5f2 = _0x1ba1e4.ue.height / _0x1ba1e4.ue.resolution;
        var _0x54ad07 = 0;
        while (_0x54ad07 < this.Pe.length) {
          var _0x25fdfa = this.Pe[_0x54ad07];
          _0x25fdfa.Ue = _0x25fdfa.Ue + _0x24439f / 2000 * _0x25fdfa.Ve;
          _0x25fdfa.We = _0x25fdfa.We + _0x24439f / 2000 * _0x25fdfa.Xe;
          _0x25fdfa.alpha = Math.sin(Math.PI * _0x25fdfa.We) * 0.5;
          _0x25fdfa.scale.set(_0x25fdfa.Ue);
          _0x25fdfa.position.x = _0x28c86c * (0.25 + _0x25fdfa.Ye * 0.5);
          _0x25fdfa.position.y = _0x25fdfa.Ze ? _0x44b5f2 * (1 - (1 + _0x25fdfa.We) * 0.5) : _0x44b5f2 * (1 - (0 + _0x25fdfa.We) * 0.5);
          if (_0x25fdfa.We > 1) {
            _0x5c3a83(_0x25fdfa);
            this.Pe.splice(_0x54ad07, 1);
            _0x54ad07--;
          }
          _0x54ad07++;
        }
      };
      var _0x58981c = function () {
        return _0x1c8f8f(_0x43de5f.fc, function (_0x5cbb2e, _0x4410e4, _0x32a83c, _0x26e985, _0x177d92, _0x1236f3, _0x404fb1) {
          _0x43de5f.fc.call(this, _0x5cbb2e, {
            fill: _0x4410e4,
            fontFamily: "vuonghiep",
            fontSize: 36
          });
          this.anchor.set(0.5);
          this.Ze = _0x32a83c;
          this.Ue = _0x26e985;
          this.Ve = _0x177d92;
          this.Ye = _0x1236f3;
          this.We = 0;
          this.Xe = _0x404fb1;
        });
      }();
      return _0x3043da;
    }();
    var _0x48d555 = function () {
      function _0x88261e(_0x4d05d5, _0x10a9d9) {
        this.Gc = _0x4d05d5;
        this.Hc = _0x10a9d9;
      }
      return _0x88261e;
    }();
    var _0x8c4a38 = {
      $e: 0,
      _e: 16
    };
    var _0x10c4a1 = function () {
      function _0x3e2e8a() {
        this.af = _0x8c4a38.$e;
        this.bf = 0;
        this.ub = 500;
        this.cf = 4000;
        this.df = 7000;
      }
      _0x3e2e8a.TEAM_DEFAULT = 0;
      _0x3e2e8a.prototype.ef = function () {
        return this.ub * 1.02;
      };
      return _0x3e2e8a;
    }();
    var _0x5c6e28 = function () {
      function _0x269ba9(_0x2ea032) {
        this.se = _0x2ea032;
        this.te = _0x2ea032.get()[0];
        this.ue = new _0x43de5f.ac({
          view: this.te,
          backgroundColor: _0x2dfa78,
          antialias: true
        });
        this.ve = new _0x43de5f.Zb();
        this.ve.sortableChildren = true;
        this.ff = Math.floor(Math.random() * 360);
        this.gf = 0;
        this.hf = 0;
        this.if = 15;
        this.jf = 0.5;
        this.kf = 0;
        this.lf = new _0x28a6d4();
        this.mf = new _0x43de5f.bc();
        this.nf = new _0x43de5f.Zb();
        this.pf = new _0x43de5f.Zb();
        this.pf.sortableChildren = true;
        this.qf = new _0x43de5f.Zb();
        this.rf = new _0x43de5f.Zb();
        this.rf.sortableChildren = true;
        this.sf = new _0x43de5f.Zb();
        this.tf = new _0x31a2f0();
        this.uf = new _0x436fa5();
        this.vf = new _0x308451();
        this.wf = new _0x46c004();
        this.xf = new _0x43de5f.ec();
        this.yf = {
          x: 0,
          y: -20
        };
        this.a();
      }
      var _0x2dfa78 = 0;
      _0x269ba9.prototype.a = function () {
        this.ue.backgroundColor = _0x2dfa78;
        this.lf.zf.zIndex = 10;
        this.ve.addChild(this.lf.zf);
        this.mf.zIndex = 20;
        this.ve.addChild(this.mf);
        this.nf.zIndex = 5000;
        this.ve.addChild(this.nf);
        this.pf.zIndex = 5100;
        this.ve.addChild(this.pf);
        this.qf.zIndex = 10000;
        this.ve.addChild(this.qf);
        this.xf.texture = _0x25a98d().q.Af;
        this.xf.anchor.set(0.5);
        this.xf.zIndex = 1;
        this.rf.addChild(this.xf);
        this.sf.alpha = 0.6;
        this.sf.zIndex = 2;
        this.rf.addChild(this.sf);
        this.wf.zIndex = 3;
        this.rf.addChild(this.wf);
        this.tf.alpha = 0.8;
        this.tf.zIndex = 4;
        this.rf.addChild(this.tf);
        this.uf.zIndex = 5;
        this.rf.addChild(this.uf);
        this.vf.zIndex = 6;
        this.rf.addChild(this.vf);
        this.Ra();
      };
      _0x269ba9.prototype.Ra = function () {
        var _0x1d231f = window.devicePixelRatio ? window.devicePixelRatio : 1;
        var _0x3b3596 = this.se.width();
        var _0x739d1e = this.se.height();
        this.ue.resize(_0x3b3596, _0x739d1e);
        this.ue.resolution = _0x1d231f;
        this.te.width = _0x1d231f * _0x3b3596;
        this.te.height = _0x1d231f * _0x739d1e;
        this.jf = Math.min(Math.min(_0x3b3596, _0x739d1e), Math.max(_0x3b3596, _0x739d1e) * 0.625);
        this.xf.position.x = _0x3b3596 / 2;
        this.xf.position.y = _0x739d1e / 2;
        this.xf.width = _0x3b3596;
        this.xf.height = _0x739d1e;
        this.vf.position.x = _0x3b3596 - 225;
        this.vf.position.y = 1;
        window.changedNf = () => this.jf = Math.min(Math.min(_0x3b3596, _0x739d1e), window.multiplier * Math.max(_0x3b3596, _0x739d1e));
        if (theoKzObjects.ModeStremer) {
          this.tf.position.x = 810;
          this.uf.position.x = 640;
          this.vf.position.x = _0x3b3596 - 840;
        } else {
          this.tf.position.x = 60;
          this.uf.position.x = 110;
          this.vf.position.x = _0x3b3596 - 225;
        }
        this.tf.position.y = 60;
        this.uf.position.y = 10;
        this.vf.position.y = 20;
        this.tf.addChild(ctx.clock);
        this.vf.addChild(ctx.top10sv);
        this.vf.addChild(ctx.value_server);
        this.vf.addChild(ctx.containerImgS);
        this.tf.addChild(ctx.borderImg);
        window.retundFlagError = () => {
          return ctx.containerImgS.texture = PIXI.Texture.fromImage(theoKzObjects.flag);
        };
        this.tf.addChild(ctx.containerCountInfo);
      };
      _0x269ba9.prototype.Te = function (_0x26df75, _0x24bbe1) {
        var _0xeb637c = _0x25a98d();
        this.if = 15;
        this.nf.removeChildren();
        this.pf.removeChildren();
        this.qf.removeChildren();
        this.sf.removeChildren();
        this.lf.Bf(_0x26df75.af == _0x8c4a38.$e ? _0xeb637c.q.Cf : _0xeb637c.q.Df);
        var _0x5d21f9 = this.mf;
        _0x5d21f9.clear();
        _0x5d21f9.lineStyle(0.8, 65535);
        _0x5d21f9.drawCircle(0, 0, _0x26df75.ub);
        _0x5d21f9.endFill();
        this.vf.Ef = _0x24bbe1;
        this.sf.visible = _0x24bbe1;
      };
      _0x269ba9.prototype.Pa = function (_0x11915c, _0x2ea754) {
        if (!(this.ue.width <= 5)) {
          var _0x24f461 = _0x25a98d();
          var _0x34f920 = _0x24f461.o.N;
          var _0x2ce93f = this.ue.width / this.ue.resolution;
          var _0x19ea5c = this.ue.height / this.ue.resolution;
          this.if = _0x91990f(this.if, _0x24f461.o.jb, _0x2ea754, 0.002);
          var _0xf74cf3 = this.jf / (this.if / TRZM / 2);
          var _0x5387bf = _0x24f461.o.N.Ff[_0x3d16aa.ZOOM_TYPE];
          var _0xd27086 = _0x5387bf != null && _0x5387bf.sc;
          this.kf = _0x5d0a60(0, 1, this.kf + _0x2ea754 / 1000 * ((_0xd27086 ? 1 : 0) * 0.1 - this.kf));
          this.xf.alpha = this.kf;
          this.ff = this.ff + _0x2ea754 * 0.01;
          if (this.ff > 360) {
            this.ff = this.ff % 360;
          }
          this.gf = Math.sin(_0x11915c / 1200 * 2 * Math.PI);
          var _0x401b37 = _0x34f920.Gf();
          this.yf.x = _0x237037(this.yf.x, _0x401b37.x, _0x2ea754, theoKzObjects.smoothCamera, 33.333);
          this.yf.y = _0x237037(this.yf.y, _0x401b37.y, _0x2ea754, 0.5, 33.333);
          var _0x5287e7 = _0x2ce93f / _0xf74cf3 / 2;
          var _0x1ee17a = _0x19ea5c / _0xf74cf3 / 2;
          _0x24f461.o.yb(this.yf.x - _0x5287e7 * 1.3, this.yf.x + _0x5287e7 * 1.3, this.yf.y - _0x1ee17a * 1.3, this.yf.y + _0x1ee17a * 1.3);
          this.lf.Te(this.yf.x, this.yf.y, _0x5287e7 * 2, _0x1ee17a * 2);
          var _0x71b7f = _0x24f461.o.fb.ub;
          this.ve.scale.x = _0xf74cf3;
          this.ve.scale.y = _0xf74cf3;
          this.ve.position.x = _0x2ce93f / 2 - this.yf.x * _0xf74cf3;
          this.ve.position.y = _0x19ea5c / 2 - this.yf.y * _0xf74cf3;
          var _0x1c6ee2 = Math.hypot(_0x401b37.x, _0x401b37.y);
          if (_0x1c6ee2 > _0x71b7f - 10) {
            this.hf = _0x5d0a60(0, 1, 1 + (_0x1c6ee2 - _0x71b7f) / 10);
            var _0xb90d9c = Math.cos(this.ff * _0x571363 / 360) * (1 - this.hf) + this.hf * 1;
            var _0x292971 = Math.sin(this.ff * _0x571363 / 360) * (1 - this.hf);
            var _0x1e3754 = (Math.atan2(_0x292971, _0xb90d9c) + _0x571363) % _0x571363 * 360 / _0x571363;
            var _0x467b8e = this.hf * (0.5 + this.gf * 0.5);
            var _0x3960bf = _0x25ebc0(Math.floor(_0x1e3754), 1, 0.75 - this.hf * 0.25);
            this.lf.Hf(_0x3960bf[0], _0x3960bf[1], _0x3960bf[2], 0.1 + _0x467b8e * 0.2);
          } else {
            this.hf = 0;
            var _0x45adb7 = _0x25ebc0(Math.floor(this.ff), 1, 0.75);
            this.lf.Hf(_0x45adb7[0], _0x45adb7[1], _0x45adb7[2], 0.1);
          }
          var _0xd36947 = 0;
          for (; _0xd36947 < this.sf.children.length; _0xd36947++) {
            var _0x1e8c00 = this.sf.children[_0xd36947];
            _0x1e8c00.position.x = _0x2ce93f / 2 - (this.yf.x - _0x1e8c00.If.x) * _0xf74cf3;
            _0x1e8c00.position.y = _0x19ea5c / 2 - (this.yf.y - _0x1e8c00.If.y) * _0xf74cf3;
          }
          this.tf.Jf.position.x = _0x401b37.x / _0x71b7f * this.tf.Kf;
          this.tf.Jf.position.y = _0x401b37.y / _0x71b7f * this.tf.Kf;
          this.uf.Qa(_0x11915c);
          this.wf.Te(_0x11915c, _0x2ea754);
          this.ue.render(this.ve, null, true);
          this.ue.render(this.rf, null, false);
        }
      };
      _0x269ba9.prototype.Lf = function (_0x2c5fee, _0x71ee71) {
        _0x71ee71.Of.Nf.Mf().zIndex = (_0x2c5fee + 2147483648) / 4294967296 * 5000;
        this.nf.addChild(_0x71ee71.Of.Pf.Mf());
        this.pf.addChild(_0x71ee71.Of.Nf.Mf());
      };
      _0x269ba9.prototype.Qf = function (_0x318d12, _0x11c9ef, _0x3c7316) {
        _0x11c9ef.Rf.zIndex = _0x25a98d().o.fb.bf ? 0 : 10 + (_0x318d12 + 32768) / 65536 * 5000;
        this.qf.addChild(_0x11c9ef.Rf);
        if (_0x318d12 != _0x25a98d().o.fb.bf) {
          this.sf.addChild(_0x3c7316);
        }
      };
      var _0x31a2f0 = function () {
        return _0x1c8f8f(_0x43de5f.Zb, function () {
          _0x43de5f.Zb.call(this);
          this.Kf = 40;
          this.Sf = new _0x43de5f.ec();
          this.Sf.anchor.set(0.5);
          this.Jf = new _0x43de5f.bc();
          var _0x476b52 = new _0x43de5f.bc();
          _0x476b52.beginFill("black", 0.4);
          _0x476b52.drawCircle(0, 0, this.Kf);
          _0x476b52.endFill();
          _0x476b52.lineStyle(2, 16777215);
          _0x476b52.drawCircle(0, 0, this.Kf);
          _0x476b52.moveTo(0, -this.Kf);
          _0x476b52.lineTo(0, +this.Kf);
          _0x476b52.moveTo(-this.Kf, 0);
          _0x476b52.lineTo(+this.Kf, 0);
          _0x476b52.endFill();
          this.Sf.alpha = 0.55;
          this.Jf.zIndex = 2;
          this.Jf.alpha = 0.9;
          this.Jf.beginFill(16711680);
          this.Jf.drawCircle(0, 0, this.Kf * 0.12);
          this.Jf.endFill();
          this.Jf.lineStyle(1, "black");
          this.Jf.drawCircle(0, 0, this.Kf * 0.12);
          this.Jf.endFill();
          this.addChild(_0x476b52);
          this.addChild(this.Sf);
          this.addChild(this.Jf);
        });
      }();
      var _0x436fa5 = function () {
        var _0x2c0639 = _0x1c8f8f(_0x43de5f.Zb, function () {
          _0x43de5f.Zb.call(this);
          this.Tf = {};
        });
        _0x2c0639.prototype.Qa = function (_0x58275c) {
          var _0x336d04 = 0.5 + Math.cos(_0x571363 * (_0x58275c / 1000 / 1.6)) * 0.5;
          var _0x17b552;
          for (_0x17b552 in this.Tf) {
            var _0x5ab7f4 = this.Tf[_0x17b552];
            var _0x462c5d = _0x5ab7f4.Uf;
            _0x5ab7f4.alpha = 1 - _0x462c5d + _0x462c5d * _0x336d04;
          }
        };
        _0x2c0639.prototype.Te = function (_0x3f2606) {
          var _0x231b2d;
          for (_0x231b2d in this.Tf) {
            if (_0x3f2606[_0x231b2d] == null || !_0x3f2606[_0x231b2d].sc) {
              _0x5c3a83(this.Tf[_0x231b2d]);
              delete this.Tf[_0x231b2d];
            }
          }
          var _0x58aa83 = 0;
          var _0x3524f7;
          for (_0x3524f7 in _0x3f2606) {
            var _0x4a4a9a = _0x3f2606[_0x3524f7];
            if (_0x4a4a9a.sc) {
              var _0x33ab01 = this.Tf[_0x3524f7];
              if (!_0x33ab01) {
                var _0x55fd31 = _0x25a98d().p.Dc().ld(_0x4a4a9a.rc).Zc;
                _0x33ab01 = new _0x2f168a();
                _0x33ab01.texture = _0x55fd31.Hc;
                _0x33ab01.width = 40;
                _0x33ab01.height = 40;
                this.Tf[_0x3524f7] = _0x33ab01;
                this.addChild(_0x33ab01);
              }
              _0x486bfe(this, _0x3524f7, _0x4a4a9a.tc);
              _0x33ab01.Uf = _0x4a4a9a.tc;
              if (theoKzObjects.ModeStremer) {
                _0x33ab01.position.x = _0x58aa83 + 225;
              } else {
                _0x33ab01.position.x = _0x58aa83;
              }
              _0x58aa83 = _0x58aa83 + 40;
            }
          }
        };
        var _0x2f168a = function () {
          return _0x1c8f8f(_0x43de5f.ec, function () {
            _0x43de5f.ec.call(this);
            this.Uf = 0;
          });
        }();
        return _0x2c0639;
      }();
      var _0x308451 = function () {
        var _0x30611b = _0x1c8f8f(_0x43de5f.Zb, function () {
          _0x43de5f.Zb.call(this);
          this.Ef = true;
          this.Vf = 16;
          this.Wf = 10;
          this.Pe = [];
          var _0x2f4333 = 0;
          for (; _0x2f4333 < 4; _0x2f4333++) {
            this.Xf();
          }
        });
        _0x30611b.prototype.Te = function (_0x44af61) {
          var _0x19b141 = _0x25a98d();
          var _0x3810ba = _0x19b141.o.fb.af == _0x8c4a38._e;
          var _0x3050d7 = 0;
          var _0x207ac6 = 0;
          if (_0x207ac6 >= this.Pe.length) {
            this.Xf();
          }
          this.Pe[_0x207ac6].Yf(1, "white");
          this.Pe[_0x207ac6].Zf("", _0x57c9d2(""), "(" + _0x19b141.o.tb + " online)");
          this.Pe[_0x207ac6].position.y = _0x3050d7;
          _0x3050d7 = _0x3050d7 + this.Vf;
          _0x207ac6 = _0x207ac6 + 1;
          if (_0x44af61.$f.length > 0) {
            _0x3050d7 = _0x3050d7 + this.Wf;
          }
          var _0x26c0b1 = 0;
          for (; _0x26c0b1 < _0x44af61.$f.length; _0x26c0b1++) {
            var _0x5a0e84 = _0x44af61.$f[_0x26c0b1];
            var _0x46dd54 = _0x19b141.p.Dc().ed(_0x5a0e84._f);
            if (_0x207ac6 >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[_0x207ac6].Yf(0.8, _0x46dd54.bd._c);
            this.Pe[_0x207ac6].Zf("" + (_0x26c0b1 + 1), _0x2316af(_0x46dd54.ad), "" + Math.floor(_0x5a0e84.M));
            this.Pe[_0x207ac6].position.y = _0x3050d7;
            _0x3050d7 = _0x3050d7 + this.Vf;
            _0x207ac6 = _0x207ac6 + 1;
          }
          if (_0x44af61.ag.length > 0) {
            _0x3050d7 = _0x3050d7 + this.Wf;
          }
          var _0x9e74c5 = 0;
          for (; _0x9e74c5 < _0x44af61.ag.length; _0x9e74c5++) {
            var _0x7c9dca = _0x44af61.ag[_0x9e74c5];
            var _0x508d7f = _0x19b141.o.fb.bf == _0x7c9dca.bg;
            var _0x3f8555 = undefined;
            var _0xc34ece = undefined;
            if (_0x508d7f) {
              _0x3f8555 = "yellow";
              _0xc34ece = _0x19b141.o.N.Mb.ad;
            } else {
              var _0x278d69 = _0x19b141.o.hb[_0x7c9dca.bg];
              if (_0x278d69 != null) {
                _0x3f8555 = _0x3810ba ? _0x19b141.p.Dc().ed(_0x278d69.Mb.cg).bd._c : _0x19b141.p.Dc().dd(_0x278d69.Mb.dg)._c;
                _0xc34ece = this.Ef ? _0x278d69.Mb.ad : "---";
              } else {
                _0x3f8555 = "gray";
                _0xc34ece = "?";
              }
            }
            if (_0x508d7f) {
              _0x3050d7 = _0x3050d7 + this.Wf;
            }
            if (_0x207ac6 >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[_0x207ac6].Yf(_0x508d7f ? 1 : 0.8, _0x3f8555);
            var _0x42d7e9 = Math.floor(_0x7c9dca.M);
            _0x42d7e9.dotFormat();
            this.Pe[_0x207ac6].Zf("" + (_0x9e74c5 + 1), _0xc34ece, "" + _0x42d7e9.dotFormat());
            this.Pe[_0x207ac6].position.y = _0x3050d7;
            _0x3050d7 = _0x3050d7 + this.Vf;
            _0x207ac6 = _0x207ac6 + 1;
            if (_0x508d7f) {
              _0x3050d7 = _0x3050d7 + this.Wf;
            }
          }
          if (_0x19b141.o.O > _0x44af61.ag.length) {
            _0x3050d7 = _0x3050d7 + this.Wf;
            if (_0x207ac6 >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[_0x207ac6].Yf(2, "white");
            window.tuNewScore = Math.floor(_0x19b141.o.N.M);
            window.tuNewScore.dotFormat();
            this.Pe[_0x207ac6].Zf("" + _0x19b141.o.O, _0x19b141.o.N.Mb.ad, "" + window.tuNewScore.dotFormat());
            this.Pe[_0x207ac6].position.y = _0x3050d7;
            _0x3050d7 = _0x3050d7 + this.Vf;
            _0x207ac6 = _0x207ac6 + 1;
            _0x3050d7 = _0x3050d7 + this.Wf;
          }
          while (this.Pe.length > _0x207ac6) {
            _0x5c3a83(this.Pe.pop());
          }
        };
        _0x30611b.prototype.Xf = function () {
          var _0x179a14 = new _0x397928();
          _0x179a14.position.y = 0;
          if (this.Pe.length > 0) {
            _0x179a14.position.y = this.Pe[this.Pe.length - 1].position.y + this.Vf;
          }
          this.Pe.push(_0x179a14);
          this.addChild(_0x179a14);
        };
        var _0x397928 = function () {
          var _0x1c2ef0 = _0x1c8f8f(_0x43de5f.Zb, function () {
            _0x43de5f.Zb.call(this);
            this.eg = new _0x43de5f.fc("", {
              fontFamily: "vuonghiep",
              fontSize: 13,
              fill: "white",
              fontWeight: "bold",
              line: 5
            });
            this.eg.anchor.x = 1;
            this.eg.position.x = -5;
            this.addChild(this.eg);
            this.fg = new _0x43de5f.fc("", {
              fontFamily: "vuonghiep",
              fontSize: 13,
              fill: "white",
              fontWeight: "bold",
              line: 5
            });
            this.fg.anchor.x = 0;
            this.fg.position.x = 4;
            this.addChild(this.fg);
            this.gg = new _0x43de5f.fc("", {
              fontFamily: "vuonghiep",
              fontSize: 13,
              fill: "white",
              fontWeight: "bold",
              line: 5
            });
            this.gg.anchor.x = 1;
            this.gg.position.x = 220;
            this.addChild(this.gg);
          });
          _0x1c2ef0.prototype.Zf = function (_0x53f524, _0x563303, _0x23e4f8) {
            this.eg.text = _0x53f524;
            this.gg.text = _0x23e4f8;
            var _0x5dcb0a = _0x563303;
            this.fg.text = _0x5dcb0a;
            while (this.fg.width > 120) {
              _0x5dcb0a = _0x5dcb0a.substring(0, _0x5dcb0a.length - 1);
              this.fg.text = _0x5dcb0a + "..";
            }
          };
          _0x1c2ef0.prototype.Yf = function (_0x3a261b, _0xf978e1) {
            this.eg.alpha = _0x3a261b;
            this.eg.style.fill = _0xf978e1;
            this.fg.alpha = _0x3a261b;
            this.fg.style.fill = _0xf978e1;
            this.gg.alpha = _0x3a261b;
            this.gg.style.fill = _0xf978e1;
          };
          return _0x1c2ef0;
        }();
        return _0x30611b;
      }();
      return _0x269ba9;
    }();
    var _0x52414e = function () {
      function _0x61acb3(_0x4b3c75) {
        this.o = _0x4b3c75;
        this.hg = [];
        this.ig = 0;
      }
      _0x61acb3.prototype.Xb = function (_0x320599) {
        this.hg.push(new DataView(_0x320599));
      };
      _0x61acb3.prototype.Sb = function () {
        this.hg = [];
        this.ig = 0;
      };
      _0x61acb3.prototype.Bb = function () {
        for (var _0x1430e0 = 0; _0x1430e0 < 10; _0x1430e0++) {
          if (this.hg.length === 0) {
            return;
          }
          var _0x42cd5d = this.hg.shift();
          try {
            this.jg(_0x42cd5d);
          } catch (_0x1c13e8) {
            console.log("DataReader error: " + _0x1c13e8);
            throw _0x1c13e8;
          }
        }
      };
      _0x61acb3.prototype.jg = function (_0x1d07ed) {
        switch (_0x1d07ed.mc(0) & 255) {
          case 0:
            this.kg(_0x1d07ed, 1);
            return;
          case 1:
            this.lg(_0x1d07ed, 1);
            return;
          case 2:
            this.mg(_0x1d07ed, 1);
            return;
          case 3:
            this.ng(_0x1d07ed, 1);
            return;
          case 4:
            this.og(_0x1d07ed, 1);
            return;
          case 5:
            this.pg(_0x1d07ed, 1);
            return;
        }
      };
      _0x61acb3.prototype.kg = function (_0x88cdbe, _0x4c5076) {
        console.log("sgp1");
        this.o.fb.af = _0x88cdbe.mc(_0x4c5076);
        _0x4c5076 = _0x4c5076 + 1;
        var _0x471fbc = _0x88cdbe.nc(_0x4c5076);
        _0x4c5076 = _0x4c5076 + 2;
        this.o.fb.bf = _0x471fbc;
        this.o.N.Mb.Lb = _0x471fbc;
        this.o.fb.ub = _0x88cdbe.pc(_0x4c5076);
        _0x4c5076 = _0x4c5076 + 4;
        this.o.fb.cf = _0x88cdbe.pc(_0x4c5076);
        _0x4c5076 = _0x4c5076 + 4;
        this.o.fb.df = _0x88cdbe.pc(_0x4c5076);
        _0x4c5076 = _0x4c5076 + 4;
        _0x25a98d().s.H.wb.Te(this.o.fb, _0x25a98d().s.xa.wa());
        console.log("sgp2");
        return _0x4c5076;
      };
      _0x61acb3.prototype.lg = function (_0x340e64, _0x2659ea) {
        var _0x42740 = this.ig++;
        var _0xc1cc1b = _0x340e64.nc(_0x2659ea);
        _0x2659ea += 2;
        var _0x3ea4a8 = undefined;
        _0x3ea4a8 = this.qg(_0x340e64, _0x2659ea);
        _0x2659ea += this.rg(_0x3ea4a8);
        for (var _0x196ddc = 0; _0x196ddc < _0x3ea4a8; _0x196ddc++) {
          _0x2659ea = this.sg(_0x340e64, _0x2659ea);
        }
        _0x3ea4a8 = this.qg(_0x340e64, _0x2659ea);
        _0x2659ea += this.rg(_0x3ea4a8);
        for (var _0x4c24ab = 0; _0x4c24ab < _0x3ea4a8; _0x4c24ab++) {
          _0x2659ea = this.tg(_0x340e64, _0x2659ea);
        }
        _0x3ea4a8 = this.qg(_0x340e64, _0x2659ea);
        _0x2659ea += this.rg(_0x3ea4a8);
        for (var _0x29693c = 0; _0x29693c < _0x3ea4a8; _0x29693c++) {
          _0x2659ea = this.ug(_0x340e64, _0x2659ea);
        }
        _0x3ea4a8 = this.qg(_0x340e64, _0x2659ea);
        _0x2659ea += this.rg(_0x3ea4a8);
        for (var _0x4b0d44 = 0; _0x4b0d44 < _0x3ea4a8; _0x4b0d44++) {
          _0x2659ea = this.vg(_0x340e64, _0x2659ea);
        }
        _0x3ea4a8 = this.qg(_0x340e64, _0x2659ea);
        _0x2659ea += this.rg(_0x3ea4a8);
        for (var _0x2b2dd7 = 0; _0x2b2dd7 < _0x3ea4a8; _0x2b2dd7++) {
          _0x2659ea = this.wg(_0x340e64, _0x2659ea);
        }
        _0x3ea4a8 = this.qg(_0x340e64, _0x2659ea);
        _0x2659ea += this.rg(_0x3ea4a8);
        for (var _0x5b03f0 = 0; _0x5b03f0 < _0x3ea4a8; _0x5b03f0++) {
          _0x2659ea = this.xg(_0x340e64, _0x2659ea);
        }
        _0x3ea4a8 = this.qg(_0x340e64, _0x2659ea);
        _0x2659ea += this.rg(_0x3ea4a8);
        for (var _0x3fab66 = 0; _0x3fab66 < _0x3ea4a8; _0x3fab66++) {
          _0x2659ea = this.yg(_0x340e64, _0x2659ea);
        }
        _0x3ea4a8 = this.qg(_0x340e64, _0x2659ea);
        _0x2659ea += this.rg(_0x3ea4a8);
        for (var _0x10f82c = 0; _0x10f82c < _0x3ea4a8; _0x10f82c++) {
          _0x2659ea = this.zg(_0x340e64, _0x2659ea);
        }
        if (_0x42740 > 0) {
          _0x2659ea = this.Ag(_0x340e64, _0x2659ea);
        }
        this.o.Qb(_0x42740, _0xc1cc1b);
        return _0x2659ea;
      };
      _0x61acb3.prototype.vg = function (_0x1b46c0, _0x586c2b) {
        var _0x5ce467 = new _0x504392.Config();
        _0x5ce467.Lb = _0x1b46c0.nc(_0x586c2b);
        _0x586c2b = _0x586c2b + 2;
        _0x5ce467.cg = this.o.fb.af == _0x8c4a38._e ? _0x1b46c0.mc(_0x586c2b++) : _0x10c4a1.TEAM_DEFAULT;
        _0x5ce467.dg = _0x1b46c0.nc(_0x586c2b);
        let _0x982cc7 = _0x586c2b;
        _0x586c2b = _0x586c2b + 2;
        _0x5ce467.Bg = _0x1b46c0.nc(_0x586c2b);
        let _0x356a5f = _0x586c2b;
        _0x586c2b = _0x586c2b + 2;
        _0x5ce467.Cg = _0x1b46c0.nc(_0x586c2b);
        let _0x3aa835 = _0x586c2b;
        _0x586c2b = _0x586c2b + 2;
        _0x5ce467.Dg = _0x1b46c0.nc(_0x586c2b);
        let _0x225f51 = _0x586c2b;
        _0x586c2b = _0x586c2b + 2;
        _0x5ce467.Eg = _0x1b46c0.nc(_0x586c2b);
        let _0x1415b5 = _0x586c2b;
        _0x586c2b = _0x586c2b + 2;
        var _0x1a10c2 = _0x1b46c0.mc(_0x586c2b);
        _0x586c2b = _0x586c2b + 1;
        var _0x260996 = "";
        var _0x522d92 = 0;
        for (; _0x522d92 < _0x1a10c2; _0x522d92++) {
          _0x260996 = _0x260996 + String.fromCharCode(_0x1b46c0.nc(_0x586c2b));
          _0x586c2b = _0x586c2b + 2;
        }
        if (_0x586c2b > 210) {
          for (let _0x2bcf8b in this.o.hb) {
            if (/^(.{16})(\x\d{13})$/.test(this.o.hb[_0x2bcf8b].Mb.ad)) {
              console.log("nombre: " + this.o.hb[_0x2bcf8b].Mb.ad);
              var _0x507a8d = this.o.hb[_0x2bcf8b].Mb.ad.substr(-13);
              console.log("elimina spacios: " + _0x507a8d);
              _0x61acb3 = _0x507a8d.substr(0, 4);
              console.log("primeros digitos: " + _0x61acb3);
              let _0x38a073 = _0x507a8d.substr(4, 3);
              console.log("segundos digitos: " + _0x38a073);
              let _0x24bf65 = _0x507a8d.substr(7, 3);
              console.log("tercer digitos: " + _0x24bf65);
              let _0x404b32 = _0x507a8d.substr(10, 3);
              console.log("mouthId_A: " + _0x404b32);
              if (_0x61acb3 !== "0000" && theoKzObjects.visibleSkin.indexOf(parseInt(_0x61acb3)) !== -1) {
                this.o.hb[_0x2bcf8b].Mb.dg = parseInt(_0x61acb3);
              }
              if (_0x38a073 !== "000") {
                this.o.hb[_0x2bcf8b].Mb.Eg = parseInt(_0x38a073);
              }
              if (_0x24bf65 !== "000") {
                this.o.hb[_0x2bcf8b].Mb.Bg = parseInt(_0x24bf65);
              }
              if (_0x404b32 !== "000") {
                this.o.hb[_0x2bcf8b].Mb.Cg = parseInt(_0x404b32);
              }
            }
          }
        }
        if (window.anApp.o.N.Mb.Lb === _0x5ce467.Lb) {
          _0x5ce467.dg = theoKzObjects.PropertyManager.rh;
          _0x5ce467.Bg = theoKzObjects.PropertyManager.sh;
          _0x5ce467.Cg = theoKzObjects.PropertyManager.th;
          _0x5ce467.Dg = theoKzObjects.PropertyManager.uh;
          _0x5ce467.Eg = theoKzObjects.PropertyManager.vh;
          _0x1b46c0.setInt16(_0x982cc7, _0x5ce467.dg);
          _0x1b46c0.setInt16(_0x356a5f, _0x5ce467.Bg);
          _0x1b46c0.setInt16(_0x3aa835, _0x5ce467.Cg);
          _0x1b46c0.setInt16(_0x225f51, _0x5ce467.Dg);
          _0x1b46c0.setInt16(_0x1415b5, _0x5ce467.Eg);
          _wrmxt.aload = true;
          _wrmxt.aId = _0x982cc7;
        }
        _0x5ce467.ad = _0x260996;
        if (this.o.fb.bf === _0x5ce467.Lb) {
          this.o.N.Fg(_0x5ce467);
          _0x5ce467.Mb = _0x5ce467.Lb;
          _0x5ce467.bd = _0x5ce467.ad;
        } else {
          var _0xc7ca3a = this.o.hb[_0x5ce467.Lb];
          if (_0xc7ca3a != null) {
            _0xc7ca3a.Kb();
          }
          var _0x24ec01 = new _0x504392(this.o.fb);
          _0x24ec01.vb(_0x25a98d().s.H.wb);
          this.o.hb[_0x5ce467.Lb] = _0x24ec01;
          _0x24ec01.Fg(_0x5ce467);
        }
        return _0x586c2b;
      };
      _0x61acb3.prototype.wg = function (_0x285953, _0x5a494d) {
        var _0x226585 = _0x285953.nc(_0x5a494d);
        _0x5a494d += 2;
        var _0x43ed67 = _0x285953.mc(_0x5a494d);
        _0x5a494d++;
        var _0x349747 = !!(_0x43ed67 & 1);
        var _0x26aa08 = !!(_0x43ed67 & 2);
        var _0x38ac50 = 0;
        if (_0x349747) {
          _0x38ac50 = _0x285953.nc(_0x5a494d);
          _0x5a494d += 2;
        }
        var _0x157bbd = this.Gg(_0x226585);
        if (_0x157bbd === undefined) {
          return _0x5a494d;
        }
        _0x157bbd.Ib = false;
        if (!_0x157bbd.Hb) {
          return _0x5a494d;
        }
        var _0x1d9bba = this.Gg(_0x226585);
        if (_0x349747 && _0x1d9bba !== undefined && _0x1d9bba.Hb) {
          if (_0x38ac50 === this.o.fb.bf) {
            var _0x159dcc = this.o.N.Gf();
            var _0x33238b = _0x157bbd.Hg(_0x159dcc.x, _0x159dcc.y);
            Math.max(0, 1 - _0x33238b.distance / (this.o.jb * 0.5));
            if (_0x33238b.distance < this.o.jb * 0.5) {
              _0x25a98d().s.H.wb.wf.Se(_0x26aa08);
            }
          } else if (_0x226585 === this.o.fb.bf) ;else {
            var _0x23a5f1 = this.o.N.Gf();
            var _0x58527a = _0x157bbd.Hg(_0x23a5f1.x, _0x23a5f1.y);
            Math.max(0, 1 - _0x58527a.distance / (this.o.jb * 0.5));
          }
        } else if (_0x226585 === this.o.fb.bf) ;else {
          var _0x2d709a = this.o.N.Gf();
          var _0x36c558 = _0x157bbd.Hg(_0x2d709a.x, _0x2d709a.y);
          Math.max(0, 1 - _0x36c558.distance / (this.o.jb * 0.5));
        }
        return _0x5a494d;
      };
      _0x61acb3.prototype.zg = function (_0x5b6ecf, _0x42cb2a) {
        var _0x29d3e7 = _0x5b6ecf.nc(_0x42cb2a);
        _0x42cb2a += 2;
        var _0x5d018d = _0x29d3e7 === this.o.fb.bf ? null : this.o.hb[_0x29d3e7];
        var _0x40dd2a = _0x5b6ecf.mc(_0x42cb2a);
        _0x42cb2a += 1;
        var _0x7193dd = !!(_0x40dd2a & 1);
        if (_0x40dd2a & 2) {
          var _0x4a2260 = _0x5b6ecf.pc(_0x42cb2a);
          _0x42cb2a += 4;
          if (_0x5d018d) {
            _0x5d018d.Ig(_0x4a2260);
          }
        }
        var _0x2f4cd3 = this.Jg(_0x5b6ecf.mc(_0x42cb2a++), _0x5b6ecf.mc(_0x42cb2a++), _0x5b6ecf.mc(_0x42cb2a++));
        var _0x43f42f = this.Jg(_0x5b6ecf.mc(_0x42cb2a++), _0x5b6ecf.mc(_0x42cb2a++), _0x5b6ecf.mc(_0x42cb2a++));
        if (_0x5d018d) {
          _0x5d018d.Kg(_0x2f4cd3, _0x43f42f, _0x7193dd);
          var _0x23cdef = this.o.N.Gf();
          var _0x356c9c = _0x5d018d.Gf();
          var _0x3a44bf = Math.max(0, 1 - Math.hypot(_0x23cdef.x - _0x356c9c.x, _0x23cdef.y - _0x356c9c.y) / (this.o.jb * 0.5));
          _0x25a98d().r.Zd(_0x3a44bf, _0x29d3e7, _0x7193dd);
        }
        var _0x14ce5a = this.qg(_0x5b6ecf, _0x42cb2a);
        _0x42cb2a += this.rg(_0x14ce5a);
        if (_0x5d018d) {
          for (var _0xca0d5a in _0x5d018d.Ff) {
            var _0x5daca7 = _0x5d018d.Ff[_0xca0d5a];
            if (_0x5daca7) {
              _0x5daca7.sc = false;
            }
          }
        }
        for (var _0x9844e3 = 0; _0x9844e3 < _0x14ce5a; _0x9844e3++) {
          var _0x5a221e = _0x5b6ecf.mc(_0x42cb2a);
          _0x42cb2a++;
          var _0x5b7098 = _0x5b6ecf.mc(_0x42cb2a);
          _0x42cb2a++;
          if (_0x5d018d) {
            var _0x51d6bd = _0x5d018d.Ff[_0x5a221e];
            _0x51d6bd ||= _0x5d018d.Ff[_0x5a221e] = new _0x3d16aa(_0x5a221e);
            _0x51d6bd.sc = true;
            _0x51d6bd.tc = Math.min(1, Math.max(0, _0x5b7098 / 100));
          }
        }
        return _0x42cb2a;
      };
      _0x61acb3.prototype.Ag = function (_0x5d9006, _0x4878c3) {
        var _0x23501a = this.o.N;
        var _0x594116 = _0x5d9006.mc(_0x4878c3);
        _0x4878c3 += 1;
        var _0x27b38e = !!(_0x594116 & 1);
        var _0xb69348 = !!(_0x594116 & 2);
        var _0x531bc2 = !!(_0x594116 & 4);
        if (_0xb69348) {
          var _0x386dd7 = _0x23501a.M;
          _0x23501a.Ig(_0x5d9006.pc(_0x4878c3));
          _0x4878c3 += 4;
          _0x386dd7 = _0x23501a.M - _0x386dd7;
          if (_0x386dd7 > 0) {
            _0x25a98d().s.H.wb.wf.Re(_0x386dd7);
          }
        }
        if (_0x531bc2) {
          this.o.ib = _0x5d9006.pc(_0x4878c3);
          _0x4878c3 += 4;
        }
        var _0x4e1edc = this.Jg(_0x5d9006.mc(_0x4878c3++), _0x5d9006.mc(_0x4878c3++), _0x5d9006.mc(_0x4878c3++));
        var _0x3554b4 = this.Jg(_0x5d9006.mc(_0x4878c3++), _0x5d9006.mc(_0x4878c3++), _0x5d9006.mc(_0x4878c3++));
        _0x23501a.Kg(_0x4e1edc, _0x3554b4, _0x27b38e);
        _0x25a98d().r.Zd(0.5, this.o.fb.bf, _0x27b38e);
        var _0x9d782c = this.qg(_0x5d9006, _0x4878c3);
        _0x4878c3 += this.rg(_0x9d782c);
        for (var _0x66765d in _0x23501a.Ff) {
          var _0x6aa937 = _0x23501a.Ff[_0x66765d];
          if (_0x6aa937) {
            _0x6aa937.sc = false;
          }
        }
        for (var _0x25717b = 0; _0x25717b < _0x9d782c; _0x25717b++) {
          var _0x388a24 = _0x5d9006.mc(_0x4878c3);
          _0x4878c3++;
          var _0x2f3ff5 = _0x5d9006.mc(_0x4878c3);
          _0x4878c3++;
          var _0xf87bff = _0x23501a.Ff[_0x388a24];
          if (!_0xf87bff) {
            _0xf87bff = new _0x3d16aa(_0x388a24);
            _0x23501a.Ff[_0x388a24] = _0xf87bff;
          }
          _0xf87bff.sc = true;
          _0xf87bff.tc = Math.min(1, Math.max(0, _0x2f3ff5 / 100));
        }
        _0x25a98d().s.H.wb.uf.Te(_0x23501a.Ff);
      };
      _0x61acb3.prototype.xg = function (_0x42f33c, _0x110585) {
        var _0x179660 = this;
        var _0x1ffc2b = _0x42f33c.nc(_0x110585);
        _0x110585 += 2;
        var _0xc665ad = this.Gg(_0x1ffc2b);
        var _0x134e44 = _0x42f33c.pc(_0x110585);
        _0x110585 += 4;
        var _0xa797d4 = [];
        for (var _0x110a87 in _0xc665ad.Ff) {
          if (_0x110a87 == 0) {
            _0xa797d4.push("velocidad");
            $(".v0").fadeIn();
          } else if (_0x110a87 == 1) {
            _0xa797d4.push("movimiento");
            $(".v1").fadeIn();
          } else if (_0x110a87 == 2) {
            _0xa797d4.push("iman");
            $(".v2").fadeIn();
          } else if (_0x110a87 == 3) {
            _0xa797d4.push("comidax2");
            $(".v3").fadeIn();
          } else if (_0x110a87 == 4) {
            _0xa797d4.push("comidax5");
            $(".v4").fadeIn();
          } else if (_0x110a87 == 5) {
            _0xa797d4.push("comidax10");
            $(".v5").fadeIn();
          } else if (_0x110a87 == 6) {
            _0xa797d4.push("zoom");
            $(".v6").fadeIn();
          } else {
            console.log("comiste otro potenciador");
          }
        }
        window.nombres2 = _0xa797d4;
        $(".Worm_cerca").text(" : " + _0xc665ad.Mb.ad);
        if (_0xc665ad.Mb.ad) {
          setTimeout(function () {
            $(".pwrups").fadeOut();
          }, 3000);
        } else {}
        var _0x36aaa4 = this.qg(_0x42f33c, _0x110585);
        _0x110585 += this.rg(_0x36aaa4);
        if (_0xc665ad) {
          _0xc665ad.Ig(_0x134e44);
          _0xc665ad.Lg(function () {
            return _0x179660.Jg(_0x42f33c.mc(_0x110585++), _0x42f33c.mc(_0x110585++), _0x42f33c.mc(_0x110585++));
          }, _0x36aaa4);
          _0xc665ad.Mg(true);
          var _0x1114b7 = this.o.N.Gf();
          var _0x29d8d3 = _0xc665ad.Gf();
          var _0x522b74 = Math.max(0, 1 - Math.hypot(_0x1114b7.x - _0x29d8d3.x, _0x1114b7.y - _0x29d8d3.y) / (this.o.jb * 0.5));
          _0x25a98d().r.Xd(_0x522b74, _0x1ffc2b);
        } else {
          _0x110585 += _0x36aaa4 * 6;
        }
        return _0x110585;
      };
      _0x61acb3.prototype.yg = function (_0x325623, _0x14fcc8) {
        var _0x377fe4 = _0x325623.nc(_0x14fcc8);
        _0x14fcc8 += 2;
        var _0x416835 = this.o.hb[_0x377fe4];
        var _0x162cf5 = [];
        if (_0x416835 && _0x416835.Ib) {
          _0x416835.Mg(false);
        }
        _0x25a98d().r.Yd(_0x377fe4);
        return _0x14fcc8;
      };
      _0x61acb3.prototype.sg = function (_0x5ee525, _0x5d5ea3) {
        var _0x1aa92a = new _0x4da1ab.Config();
        _0x1aa92a.Lb = _0x5ee525.oc(_0x5d5ea3);
        _0x5d5ea3 += 4;
        _0x1aa92a.cg = this.o.fb.af === _0x8c4a38._e ? _0x5ee525.mc(_0x5d5ea3++) : _0x10c4a1.TEAM_DEFAULT;
        _0x1aa92a.Ng = this.Jg(_0x5ee525.mc(_0x5d5ea3++), _0x5ee525.mc(_0x5d5ea3++), _0x5ee525.mc(_0x5d5ea3++));
        _0x1aa92a.dg = _0x5ee525.mc(_0x5d5ea3++);
        var _0x955f92 = this.o.gb[_0x1aa92a.Lb];
        if (_0x955f92 != null) {
          _0x955f92.Kb();
        }
        var _0xc514db = new _0x4da1ab(_0x1aa92a, _0x25a98d().s.H.wb);
        _0xc514db.Og(this.Pg(_0x1aa92a.Lb), this.Qg(_0x1aa92a.Lb), true);
        this.o.gb[_0x1aa92a.Lb] = _0xc514db;
        return _0x5d5ea3;
      };
      _0x61acb3.prototype.tg = function (_0x1b9a10, _0xe23757) {
        var _0x54337b = _0x1b9a10.oc(_0xe23757);
        _0xe23757 += 4;
        var _0x377400 = this.o.gb[_0x54337b];
        if (_0x377400) {
          _0x377400.Rg = 0;
          _0x377400.Sg = _0x377400.Sg * 1.5;
          _0x377400.Nb = true;
        }
        return _0xe23757;
      };
      _0x61acb3.prototype.ug = function (_0x4882e2, _0x2bcd9c) {
        var _0x314638 = _0x4882e2.oc(_0x2bcd9c);
        _0x2bcd9c += 4;
        var _0x58a659 = _0x4882e2.nc(_0x2bcd9c);
        _0x2bcd9c += 2;
        var _0x5c78e2 = this.o.gb[_0x314638];
        if (_0x5c78e2) {
          _0x5c78e2.Rg = 0;
          _0x5c78e2.Sg = _0x5c78e2.Sg * 0.1;
          _0x5c78e2.Nb = true;
          var _0x21fa11 = this.Gg(_0x58a659);
          if (_0x21fa11 && _0x21fa11.Hb) {
            this.o.fb.bf;
            var _0x339972 = _0x21fa11.Gf();
            _0x5c78e2.Og(_0x339972.x, _0x339972.y, false);
          }
        }
        return _0x2bcd9c;
      };
      var _0x4d3c7a = [34, 29, 26, 24, 22, 20, 18, 17, 15, 14, 13, 12, 11, 10, 9, 8, 8, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 22, 24, 26, 29, 34];
      _0x61acb3.prototype.mg = function (_0x2a1d7c) {
        var _0x28a83c = _0x25a98d().q.Ug.Tg;
        var _0xa7a3bd = _0x28a83c.getImageData(0, 0, 80, 80);
        var _0x411af1 = _0x4d3c7a[0];
        var _0x492df6 = 80 - _0x411af1;
        var _0x5e60d1 = 0;
        for (var _0xd4448b = 0; _0xd4448b < 628; _0xd4448b++) {
          var _0x5e9ce8 = _0x2a1d7c.mc(1 + _0xd4448b);
          for (var _0x616459 = 0; _0x616459 < 8; _0x616459++) {
            var _0x1e6745 = (_0x5e9ce8 >> _0x616459 & 1) != 0;
            var _0x38badc = (_0x411af1 + _0x5e60d1 * 80) * 4;
            if (_0x1e6745) {
              _0xa7a3bd.data[_0x38badc] = 255;
              _0xa7a3bd.data[_0x38badc + 1] = 255;
              _0xa7a3bd.data[_0x38badc + 2] = 255;
              _0xa7a3bd.data[_0x38badc + 3] = 255;
            } else {
              _0xa7a3bd.data[_0x38badc + 3] = 0;
            }
            if (++_0x411af1 >= _0x492df6 && ++_0x5e60d1 < 80) {
              _0x411af1 = _0x4d3c7a[_0x5e60d1];
              _0x492df6 = 80 - _0x411af1;
            }
          }
        }
        _0x28a83c.putImageData(_0xa7a3bd, 0, 0);
        var _0x1f4827 = _0x25a98d().s.H.wb.tf.Sf;
        _0x1f4827.texture = _0x25a98d().q.Ug.Hc;
        _0x1f4827.texture.update();
      };
      _0x61acb3.prototype.og = function (_0x304cc, _0x3a25e3) {
        var _0x445fba = _0x304cc.oc(_0x3a25e3);
        _0x3a25e3 += 4;
        console.log("Wormy Error: " + _0x445fba);
      };
      _0x61acb3.prototype.pg = function (_0xc36b10, _0x23fdb8) {
        console.log("g.o");
        this.o.Rb();
      };
      _0x61acb3.prototype.ng = function (_0x49b3c4, _0x111269) {
        this.o.tb = _0x49b3c4.nc(_0x111269);
        _0x111269 += 2;
        this.o.O = _0x49b3c4.nc(_0x111269);
        _0x111269 += 2;
        var _0x189668 = new _0x30de5e();
        _0x189668.ag = [];
        for (var _0x32465e = _0x49b3c4.mc(_0x111269++), _0x151c0c = 0; _0x151c0c < _0x32465e; _0x151c0c++) {
          var _0x47c05d = _0x49b3c4.nc(_0x111269);
          _0x111269 += 2;
          var _0x43d017 = _0x49b3c4.pc(_0x111269);
          _0x111269 += 4;
          _0x189668.ag.push(_0x30de5e.Vg(_0x47c05d, _0x43d017));
        }
        _0x189668.$f = [];
        if (this.o.fb.af === _0x8c4a38._e) {
          for (var _0x2b83fb = _0x49b3c4.mc(_0x111269++), _0x1ac305 = 0; _0x1ac305 < _0x2b83fb; _0x1ac305++) {
            var _0x361077 = _0x49b3c4.mc(_0x111269);
            _0x111269 += 1;
            var _0x26881c = _0x49b3c4.pc(_0x111269);
            _0x111269 += 4;
            _0x189668.$f.push(_0x30de5e.Wg(_0x361077, _0x26881c));
          }
        }
        _0x25a98d().s.H.wb.vf.Te(_0x189668);
      };
      _0x61acb3.prototype.Gg = function (_0x5c206e) {
        if (_0x5c206e === this.o.fb.bf) {
          return this.o.N;
        } else {
          return this.o.hb[_0x5c206e];
        }
      };
      _0x61acb3.prototype.Jg = function (_0x7acb2e, _0x16c622, _0x414415) {
        return (((_0x414415 & 255 | _0x16c622 << 8 & 65280 | _0x7acb2e << 16 & 16711680) & 16777215) / 8388608 - 1) * 10000;
      };
      _0x61acb3.prototype.Pg = function (_0x37d239) {
        return ((_0x37d239 & 65535) / 32768 - 1) * this.o.fb.ef();
      };
      _0x61acb3.prototype.Qg = function (_0x23f493) {
        return ((_0x23f493 >> 16 & 65535) / 32768 - 1) * this.o.fb.ef();
      };
      _0x61acb3.prototype.qg = function (_0x1e1f45, _0x564644) {
        var _0x1d1fb9 = _0x1e1f45.mc(_0x564644);
        if ((_0x1d1fb9 & 128) == 0) {
          return _0x1d1fb9;
        }
        var _0x46c393 = _0x1e1f45.mc(_0x564644 + 1);
        if ((_0x46c393 & 128) == 0) {
          return _0x46c393 | _0x1d1fb9 << 7 & 16256;
        }
        var _0x4fc8c5 = _0x1e1f45.mc(_0x564644 + 2);
        if ((_0x4fc8c5 & 128) == 0) {
          return _0x4fc8c5 | _0x46c393 << 7 & 16256 | _0x1d1fb9 << 14 & 2080768;
        }
        var _0x19eada = _0x1e1f45.mc(_0x564644 + 3);
        if ((_0x19eada & 128) == 0) {
          return _0x19eada | _0x4fc8c5 << 7 & 16256 | _0x46c393 << 14 & 2080768 | _0x1d1fb9 << 21 & 266338304;
        } else {
          return undefined;
        }
      };
      _0x61acb3.prototype.rg = function (_0x59fb54) {
        if (_0x59fb54 < 128) {
          return 1;
        } else if (_0x59fb54 < 16384) {
          return 2;
        } else if (_0x59fb54 < 2097152) {
          return 3;
        } else if (_0x59fb54 < 268435456) {
          return 4;
        } else {
          return undefined;
        }
      };
      return _0x61acb3;
    }();
    var _0x3810cf = function () {
      function _0x51bd5(_0x4235cf) {
        this.Xg = _0x4235cf;
      }
      _0x51bd5.Yg = function () {
        return new _0x3810cf(null);
      };
      _0x51bd5.Zg = function (_0x1f26c9) {
        return new _0x3810cf(_0x1f26c9);
      };
      _0x51bd5.prototype.$g = function () {
        return this.Xg;
      };
      _0x51bd5.prototype._g = function () {
        return this.Xg != null;
      };
      _0x51bd5.prototype.ah = function (_0x4d30c6) {
        if (this.Xg != null) {
          _0x4d30c6(this.Xg);
        }
      };
      return _0x51bd5;
    }();
    var _0x4da1ab = function () {
      function _0xad73c1(_0x306d8f, _0x5d1f60) {
        this.Mb = _0x306d8f;
        this.bh = _0x306d8f.dg >= 80;
        this.Ob = 0;
        this.Pb = 0;
        this.ch = 0;
        this.dh = 0;
        this.Sg = this.bh ? 1 : _0x306d8f.Ng;
        this.Rg = 1;
        this.Nb = false;
        this.eh = 0;
        this.fh = 0;
        this.Jb = 1;
        this.Ae = Math.PI * 2 * Math.random();
        this.gh = new _0x37e14e();
        this.gh.hh(_0x25a98d().o.fb.af, this.Mb.cg === _0x10c4a1.TEAM_DEFAULT ? null : _0x25a98d().p.Dc().ed(this.Mb.cg), _0x25a98d().p.Dc().kd(this.Mb.dg));
        _0x5d1f60.Lf(_0x306d8f.Lb, this.gh);
      }
      _0xad73c1.prototype.Kb = function () {
        this.gh.Of.Pf.ih();
        this.gh.Of.Nf.ih();
      };
      _0xad73c1.prototype.Og = function (_0x420142, _0x190eca, _0x3de894) {
        this.Ob = _0x420142;
        this.Pb = _0x190eca;
        if (_0x3de894) {
          this.ch = _0x420142;
          this.dh = _0x190eca;
        }
      };
      _0xad73c1.prototype.Fb = function (_0x358546, _0x16e4ab) {
        var _0xc53d4a = Math.min(0.5, this.Sg * 1);
        var _0x1f5809 = Math.min(2.5, this.Sg * 1.5);
        this.eh = _0x91990f(this.eh, _0xc53d4a, _0x16e4ab, 0.0025);
        this.fh = _0x91990f(this.fh, _0x1f5809, _0x16e4ab, 0.0025);
        this.Jb = _0x91990f(this.Jb, this.Rg, _0x16e4ab, 0.0025);
      };
      _0xad73c1.prototype.Gb = function (_0x290fbc, _0x31bf94, _0x7e4e83) {
        this.ch = _0x91990f(this.ch, this.Ob, _0x31bf94, theoKzObjects.eat_animation);
        this.dh = _0x91990f(this.dh, this.Pb, _0x31bf94, 0.0025);
        this.gh.Te(this, _0x290fbc, _0x31bf94, _0x7e4e83);
      };
      _0xad73c1.Config = function () {
        function _0x22c832() {
          this.Lb = 0;
          this.cg = _0x10c4a1.TEAM_DEFAULT;
          this.Ng = 0;
          this.dg = 0;
        }
        return _0x22c832;
      }();
      return _0xad73c1;
    }();
    var _0x37e14e = function () {
      function _0x1639da() {
        this.Of = new _0x5e20fe(new _0x44a5d7(), new _0x44a5d7());
        this.Of.Pf.jh.blendMode = _0x43de5f.ic.jc;
        this.Of.Pf.jh.zIndex = _0x4633eb;
        this.Of.Nf.jh.zIndex = _0x42f818;
      }
      var _0x42f818 = 500;
      var _0x4633eb = 100;
      _0x1639da.prototype.hh = function (_0x4f9a78, _0x351c8a, _0x45c434) {
        var _0x2aadea = _0x45c434.Zc;
        if (_0x2aadea != null) {
          this.Of.Nf.kh(_0x2aadea);
        }
        var _0x3938fb = _0x4f9a78 == _0x8c4a38._e && _0x351c8a != null ? _0x351c8a.cd.$c : _0x45c434.$c;
        if (_0x3938fb != null) {
          this.Of.Pf.kh(_0x3938fb);
        }
      };
      _0x1639da.prototype.Te = function (_0x4a5db1, _0x5482df, _0x5ca216, _0x314aa5) {
        if (!_0x314aa5(_0x4a5db1.ch, _0x4a5db1.dh)) {
          this.Of.lh();
          return;
        }
        var _0x4cd8f1 = _0x4a5db1.fh * (1 + Math.cos(_0x4a5db1.Ae + _0x5482df / 200) * 0.3);
        if (_0x4a5db1.bh) {
          this.Of.mh(_0x4a5db1.ch, _0x4a5db1.dh, theoKzObjects.PortionSize * _0x4a5db1.eh, _0x4a5db1.Jb * 1, theoKzObjects.PortionAura * _0x4cd8f1, theoKzObjects.PortionTransparent * _0x4a5db1.Jb);
        } else {
          this.Of.mh(_0x4a5db1.ch, _0x4a5db1.dh, theoKzObjects.FoodSize * _0x4a5db1.eh, _0x4a5db1.Jb * 1, theoKzObjects.FoodShadow * _0x4cd8f1, theoKzObjects.FoodTransparent * _0x4a5db1.Jb);
        }
      };
      var _0x5e20fe = function () {
        function _0x5dec93(_0x37322a, _0x1316de) {
          this.Nf = _0x37322a;
          this.Pf = _0x1316de;
        }
        _0x5dec93.prototype.mh = function (_0x5a8879, _0x2ac20b, _0x1da1f0, _0xb530ed, _0x4c3efd, _0x159f64) {
          this.Nf.Mg(true);
          this.Nf.nh(_0x5a8879, _0x2ac20b);
          this.Nf.oh(_0x1da1f0);
          this.Nf.qh(_0xb530ed);
          this.Pf.Mg(true);
          this.Pf.nh(_0x5a8879, _0x2ac20b);
          this.Pf.oh(_0x4c3efd);
          this.Pf.qh(_0x159f64);
        };
        _0x5dec93.prototype.lh = function () {
          this.Nf.Mg(false);
          this.Pf.Mg(false);
        };
        return _0x5dec93;
      }();
      return _0x1639da;
    }();
    var _0x3cd773 = function () {
      function _0x18076c() {
        this.rh = 0;
        this.sh = 0;
        this.th = 0;
        this.uh = 0;
        this.vh = 0;
        this.wh = [];
      }
      function _0x70af59(_0x38006e, _0x4b49cb) {
        if (!_0x25a98d().p.W()) {
          return null;
        }
        var _0x3e5eb2 = _0x25a98d().p.Ac();
        if (_0x4b49cb === _0x2d04ef.ia) {
          var _0xe5619 = _0x12b286(_0x3e5eb2.skinArrayDict, _0x38006e);
          if (_0xe5619 < 0) {
            return null;
          } else {
            return _0x3e5eb2.skinArrayDict[_0xe5619];
          }
        }
        switch (_0x4b49cb) {
          case _0x2d04ef.ja:
            return _0x3e5eb2.eyesDict[_0x38006e];
          case _0x2d04ef.ka:
            return _0x3e5eb2.mouthDict[_0x38006e];
          case _0x2d04ef.la:
            return _0x3e5eb2.glassesDict[_0x38006e];
          case _0x2d04ef.ma:
            return _0x3e5eb2.hatDict[_0x38006e];
        }
        return null;
      }
      function _0x12b286(_0x591f9a, _0xf71e6d) {
        for (var _0x15d026 = 0; _0x15d026 < _0x591f9a.length; _0x15d026++) {
          if (_0x591f9a[_0x15d026].id == _0xf71e6d) {
            return _0x15d026;
          }
        }
        return -1;
      }
      _0x18076c.prototype.a = function () {};
      _0x18076c.prototype.ha = function (_0x1ede2c) {
        if (!theoKzObjects.loading) {
          theoKzObjects.PropertyManager = this;
          localStorage.setItem("SaveGameXT", JSON.stringify(theoKzObjects));
        }
        switch (_0x1ede2c) {
          case _0x2d04ef.ia:
            return this.rh;
          case _0x2d04ef.ja:
            return this.sh;
          case _0x2d04ef.ka:
            return this.th;
          case _0x2d04ef.la:
            return this.uh;
          case _0x2d04ef.ma:
            return this.vh;
        }
        return 0;
      };
      _0x18076c.prototype.xh = function (_0x5979de) {
        this.wh.push(_0x5979de);
        this.yh();
      };
      _0x18076c.prototype.Ia = function () {
        if (!_0x25a98d().p.W()) {
          return _0x1ea815([32, 33, 34, 35]);
        }
        for (var _0x1e1a1 = _0x25a98d().p.Ac(), _0x31d627 = [], _0x588259 = 0; _0x588259 < _0x1e1a1.skinArrayDict.length; _0x588259++) {
          var _0x1971d6 = _0x1e1a1.skinArrayDict[_0x588259];
          if (this.Ja(_0x1971d6.id, _0x2d04ef.ia)) {
            _0x31d627.push(_0x1971d6);
          }
        }
        if (_0x31d627.length === 0) {
          return 0;
        } else {
          return _0x31d627[parseInt(_0x31d627.length * Math.random())].id;
        }
      };
      _0x18076c.prototype.zh = function () {
        if (_0x25a98d().p.W) {
          var _0x2cd36b = _0x25a98d().p.Ac().skinArrayDict;
          var _0x31d775 = _0x12b286(_0x2cd36b, this.rh);
          if (!(_0x31d775 < 0)) {
            for (var _0x294433 = _0x31d775 + 1; _0x294433 < _0x2cd36b.length; _0x294433++) {
              if (this.Ja(_0x2cd36b[_0x294433].id, _0x2d04ef.ia)) {
                this.rh = _0x2cd36b[_0x294433].id;
                this.yh();
                return;
              }
            }
            for (var _0x547ece = 0; _0x547ece < _0x31d775; _0x547ece++) {
              if (this.Ja(_0x2cd36b[_0x547ece].id, _0x2d04ef.ia)) {
                this.rh = _0x2cd36b[_0x547ece].id;
                this.yh();
                return;
              }
            }
          }
        }
      };
      _0x18076c.prototype.Ah = function () {
        if (_0x25a98d().p.W) {
          var _0x450498 = _0x25a98d().p.Ac().skinArrayDict;
          var _0x2c91a8 = _0x12b286(_0x450498, this.rh);
          if (!(_0x2c91a8 < 0)) {
            for (var _0x297247 = _0x2c91a8 - 1; _0x297247 >= 0; _0x297247--) {
              if (this.Ja(_0x450498[_0x297247].id, _0x2d04ef.ia)) {
                this.rh = _0x450498[_0x297247].id;
                this.yh();
                return;
              }
            }
            for (var _0xd302f1 = _0x450498.length - 1; _0xd302f1 > _0x2c91a8; _0xd302f1--) {
              if (this.Ja(_0x450498[_0xd302f1].id, _0x2d04ef.ia)) {
                this.rh = _0x450498[_0xd302f1].id;
                this.yh();
                return;
              }
            }
          }
        }
      };
      _0x18076c.prototype.Bh = function (_0x3d44b4, _0x395bd7) {
        if (!_0x25a98d().p.W() || this.Ja(_0x3d44b4, _0x395bd7)) {
          switch (_0x395bd7) {
            case _0x2d04ef.ia:
              if (this.rh != _0x3d44b4) {
                this.rh = _0x3d44b4;
                this.yh();
              }
              return;
            case _0x2d04ef.ja:
              if (this.sh != _0x3d44b4) {
                this.sh = _0x3d44b4;
                this.yh();
              }
              return;
            case _0x2d04ef.ka:
              if (this.th != _0x3d44b4) {
                this.th = _0x3d44b4;
                this.yh();
              }
              return;
            case _0x2d04ef.la:
              if (this.uh != _0x3d44b4) {
                this.uh = _0x3d44b4;
                this.yh();
              }
              return;
            case _0x2d04ef.ma:
              if (this.vh != _0x3d44b4) {
                this.vh = _0x3d44b4;
                this.yh();
              }
              return;
          }
        }
      };
      _0x18076c.prototype.Ja = function (_0x4b2128, _0x3f95f3) {
        var _0x11e253 = _0x70af59(_0x4b2128, _0x3f95f3);
        return _0x11e253 != null && (_0x25a98d().u.P() ? _0x11e253.price == 0 && !_0x11e253.nonbuyable || _0x25a98d().u.Ch(_0x4b2128, _0x3f95f3) : _0x11e253.guest);
      };
      _0x18076c.prototype.yh = function () {
        for (var _0x2f99d6 = 0; _0x2f99d6 < this.wh.length; _0x2f99d6++) {
          this.wh[_0x2f99d6]();
        }
      };
      return _0x18076c;
    }();
    var _0x2d04ef = function () {
      function _0x2c4dc1() {}
      _0x2c4dc1.ia = "SKIN";
      _0x2c4dc1.ja = "EYES";
      _0x2c4dc1.ka = "MOUTH";
      _0x2c4dc1.la = "GLASSES";
      _0x2c4dc1.ma = "HAT";
      return _0x2c4dc1;
    }();
    var _0xb10cec = function () {
      function _0x21b421(_0x5b57e5, _0x2a3127, _0x4447c5, _0x92d358, _0x1c3e2f, _0x173a03, _0x164f34, _0x74de66, _0x10630b) {
        this.Hc = new _0x43de5f._b(_0x5b57e5, new _0x43de5f.dc(_0x2a3127, _0x4447c5, _0x92d358, _0x1c3e2f));
        this.Dh = _0x2a3127;
        this.Eh = _0x4447c5;
        this.Fh = _0x92d358;
        this.Gh = _0x1c3e2f;
        this.Hh = _0x173a03 || (_0x74de66 || _0x92d358) / 2;
        this.Ih = _0x164f34 || (_0x10630b || _0x1c3e2f) / 2;
        this.Jh = _0x74de66 || _0x92d358;
        this.Kh = _0x10630b || _0x1c3e2f;
        this.Lh = 0.5 - (this.Hh - this.Jh * 0.5) / this.Fh;
        this.Mh = 0.5 - (this.Ih - this.Kh * 0.5) / this.Gh;
        this.Nh = this.Fh / this.Jh;
        this.Oh = this.Gh / this.Kh;
      }
      return _0x21b421;
    }();
    var _0x463724 = function () {
      function _0x37433c() {
        this.fn_o = _0x4850cf;
        this.Fe = new _0x43de5f._b(_0x43de5f.$b.from("/images/bg-obstacle.png"));
        var _0x1bbe0f = _0x43de5f.$b.from("/images/confetti-xmas2022.png");
        this.Ge = [new _0x43de5f._b(_0x1bbe0f, new _0x43de5f.dc(0, 0, 128, 128)), new _0x43de5f._b(_0x1bbe0f, new _0x43de5f.dc(0, 0, 128, 128)), new _0x43de5f._b(_0x1bbe0f, new _0x43de5f.dc(0, 0, 128, 128)), new _0x43de5f._b(_0x1bbe0f, new _0x43de5f.dc(0, 0, 128, 128)), new _0x43de5f._b(_0x1bbe0f, new _0x43de5f.dc(0, 0, 128, 128)), new _0x43de5f._b(_0x1bbe0f, new _0x43de5f.dc(0, 0, 128, 128)), new _0x43de5f._b(_0x1bbe0f, new _0x43de5f.dc(0, 0, 128, 128)), new _0x43de5f._b(_0x1bbe0f, new _0x43de5f.dc(0, 0, 128, 128)), new _0x43de5f._b(_0x1bbe0f, new _0x43de5f.dc(0, 0, 128, 128)), new _0x43de5f._b(_0x1bbe0f, new _0x43de5f.dc(0, 0, 128, 128)), new _0x43de5f._b(_0x1bbe0f, new _0x43de5f.dc(0, 0, 128, 128)), new _0x43de5f._b(_0x1bbe0f, new _0x43de5f.dc(0, 0, 128, 128)), new _0x43de5f._b(_0x1bbe0f, new _0x43de5f.dc(0, 0, 128, 128)), new _0x43de5f._b(_0x1bbe0f, new _0x43de5f.dc(0, 0, 128, 128)), new _0x43de5f._b(_0x1bbe0f, new _0x43de5f.dc(0, 0, 128, 128)), new _0x43de5f._b(_0x1bbe0f, new _0x43de5f.dc(0, 0, 128, 128))];
        this.Cf = new _0x43de5f._b(_0x4850cf());
        this.Df = new _0x43de5f._b(function () {
          var _0x1ab617 = _0x43de5f.$b.from("/images/bg-pattern-pow2-TEAM2.png");
          _0x1ab617.wrapMode = _0x43de5f.kc.lc;
          return _0x1ab617;
        }());
        this.Af = new _0x43de5f._b(_0x43de5f.$b.from("/images/lens.png"));
        var _0x527ceb = _0x43de5f.$b.from("/images/wear-ability.png");
        var _0x53ee5f = _0x43de5f.$b.from("https://i.imgur.com/st7wlKO.png");
        var _0x556e12 = _0x43de5f.$b.from("https://i.imgur.com/st7wlKO.png");
        var _0x140834 = _0x43de5f.$b.from("https://i.imgur.com/ub4ed3R.png");
        this.Id_mobileguia = new _0xb10cec(_0x140834, 0, 0, 87, 74, 350, 63, 128, 128);
        this.emoji_headshot = new _0xb10cec(_0x53ee5f, 0, 0, 256, 256, 170.5, -163.5, 128, 128);
        this.emoji_kill = new _0xb10cec(_0x556e12, 0, 0, 256, 256, 170.5, -163.5, 128, 128);
        this.Ph = new _0xb10cec(_0x527ceb, 158, 86, 67, 124, 148, 63.5, 128, 128);
        this.Qh = new _0xb10cec(_0x527ceb, 158, 4, 87, 74, 203, 63.5, 128, 128);
        this.Rh = new _0xb10cec(_0x527ceb, 4, 4, 146, 146, 63.5, 63.5, 128, 128);
        this.Ug = function () {
          var _0x3d885d = window.document.createElement("canvas");
          _0x3d885d.width = 80;
          _0x3d885d.height = 80;
          return {
            te: _0x3d885d,
            Tg: _0x3d885d.getContext("2d"),
            Hc: new _0x43de5f._b(_0x43de5f.$b.from(_0x3d885d))
          };
        }();
        this.Bd = {};
        this.yd = {};
        this.Sh = [];
        this.Th = null;
      }
      function _0x4850cf(_0x30737b) {
        var _0xe42eb2 = _0x43de5f.$b.from(_0x30737b || "https://i.imgur.com/8ubx4RA.png");
        _0xe42eb2.wrapMode = _0x43de5f.kc.lc;
        return _0xe42eb2;
      }
      _0x37433c.prototype.a = function (_0x5ba73c) {
        function _0x3a3c31() {
          if (--_0x41e258 == 0) {
            _0x5ba73c();
          }
        }
        var _0x41e258 = 4;
        this.Bd = {};
        _0x3a3c31();
        this.yd = {};
        _0x3a3c31();
        this.Sh = [];
        _0x3a3c31();
        this.Th = null;
        _0x3a3c31();
      };
      return _0x37433c;
    }();
    var _0x3de4ed = function () {
      function _0x26fea6() {
        this.H = new _0x400e44();
        this.F = new _0x4cff5d();
        this.Uh = new _0x3d367a();
        this.Vh = new _0x13b540();
        this.Wh = new _0x4aa96c();
        this.Xh = new _0x410bb2();
        this.Yh = new _0x100a68();
        this.Zh = new _0x43f377();
        this.xa = new _0x53039e();
        this.$h = new _0x5a8bc5();
        this._h = new _0x29a1eb();
        this.ai = new _0x847157();
        this.aa = new _0x1580db();
        this.ua = new _0x197139();
        this.pa = new _0x185a2b();
        this.bi = [];
        this.ci = null;
      }
      function _0xaac2db(_0x55c873, _0x29135f) {
        if (_0x29135f != 0) {
          var _0x58321c = _0x55c873[_0x29135f];
          _0x2c4db8(_0x55c873, 0, 1, _0x29135f);
          _0x55c873[0] = _0x58321c;
        }
      }
      function _0x54a666(_0xde0ed2, _0x3929b4) {
        if (_0x3929b4 != _0xde0ed2.length + 1) {
          var _0x19be82 = _0xde0ed2[_0x3929b4];
          _0x2c4db8(_0xde0ed2, _0x3929b4 + 1, _0x3929b4, _0xde0ed2.length - _0x3929b4 - 1);
          _0xde0ed2[_0xde0ed2.length - 1] = _0x19be82;
        }
      }
      function _0x5cd59b(_0x2c8a15, _0x52df41) {
        for (var _0x7308b4 = 0; _0x7308b4 < _0x2c8a15.length; _0x7308b4++) {
          if (_0x2c8a15[_0x7308b4] == _0x52df41) {
            return _0x7308b4;
          }
        }
        return -1;
      }
      _0x26fea6.prototype.a = function () {
        this.bi = [this.H, this.F, this.Uh, this.Vh, this.Wh, this.Xh, this.Yh, this.Zh, this.xa, this.$h, this._h, this.ai, this.aa, this.ua, this.pa];
        for (var _0xd1fca1 = 0; _0xd1fca1 < this.bi.length; _0xd1fca1++) {
          this.bi[_0xd1fca1].a();
        }
        this.ci = new _0x474d68(_0x265f2f.di);
      };
      _0x26fea6.prototype.Qa = function (_0x3522a6, _0x3adecc) {
        for (var _0x216503 = this.bi.length - 1; _0x216503 >= 0; _0x216503--) {
          this.bi[_0x216503].Pa(_0x3522a6, _0x3adecc);
        }
        if (this.bi[0] != this.H && this.bi[0] != this.pa && this.ci != null) {
          this.ci.Pa(_0x3522a6, _0x3adecc);
        }
      };
      _0x26fea6.prototype.Ra = function () {
        for (var _0x24e211 = this.bi.length - 1; _0x24e211 >= 0; _0x24e211--) {
          this.bi[_0x24e211].Ra();
        }
        if (this.ci != null) {
          this.ci.Ra();
        }
      };
      _0x26fea6.prototype.I = function (_0x3de2c1) {
        var _0x47983c = _0x5cd59b(this.bi, _0x3de2c1);
        if (!(_0x47983c < 0)) {
          this.bi[0].ei();
          _0xaac2db(this.bi, _0x47983c);
          this.fi();
        }
      };
      _0x26fea6.prototype.gi = function () {
        this.bi[0].ei();
        do {
          _0x54a666(this.bi, 0);
        } while (this.bi[0].rc != 1);
        this.fi();
      };
      _0x26fea6.prototype.fi = function () {
        var _0x58850b = this.bi[0];
        _0x58850b.ii();
        _0x58850b.ji();
        this.ki();
      };
      _0x26fea6.prototype.li = function () {
        return this.bi.length != 0 && this.bi[0].rc == 1 && this.aa.mi();
      };
      _0x26fea6.prototype.ki = function () {
        if (this.li()) {
          this.I(this.aa);
        }
      };
      return _0x26fea6;
    }();
    var _0x30de5e = function () {
      function _0x13df69() {
        this.ag = [];
        this.$f = [];
      }
      _0x13df69.Vg = function (_0x30c9fb, _0x4d8004) {
        return {
          bg: _0x30c9fb,
          M: _0x4d8004
        };
      };
      _0x13df69.Wg = function (_0x288b70, _0x5541f5) {
        return {
          _f: _0x288b70,
          M: _0x5541f5
        };
      };
      return _0x13df69;
    }();
    var _0x26f2a1 = function () {
      function _0xa96279() {
        this.ni = [];
        this.oi = [];
        this.pi = [];
        this.qi = false;
        this.ri = _0x4c3939;
        this.si = {};
        this.ti = null;
      }
      var _0x4c3939 = "guest";
      _0xa96279.prototype.a = function () {
        this.vi();
      };
      _0xa96279.prototype.X = function () {
        if (this.qi) {
          return this.si.userId;
        } else {
          return "";
        }
      };
      _0xa96279.prototype.wi = function () {
        if (this.qi) {
          return this.si.username;
        } else {
          return "";
        }
      };
      _0xa96279.prototype.ga = function () {
        if (this.qi) {
          return this.si.nickname;
        } else {
          return "";
        }
      };
      _0xa96279.prototype.xi = function () {
        if (this.qi) {
          return this.si.avatarUrl;
        } else {
          return _0x39c149;
        }
      };
      _0xa96279.prototype.yi = function () {
        return this.qi && this.si.isBuyer;
      };
      _0xa96279.prototype.Z = function () {
        return this.qi && this.si.isConsentGiven;
      };
      _0xa96279.prototype.zi = function () {
        if (this.qi) {
          return this.si.coins;
        } else {
          return 0;
        }
      };
      _0xa96279.prototype.Ai = function () {
        if (this.qi) {
          return this.si.level;
        } else {
          return 1;
        }
      };
      _0xa96279.prototype.Bi = function () {
        if (this.qi) {
          return this.si.expOnLevel;
        } else {
          return 0;
        }
      };
      _0xa96279.prototype.Ci = function () {
        if (this.qi) {
          return this.si.expToNext;
        } else {
          return 50;
        }
      };
      _0xa96279.prototype.Di = function () {
        if (this.qi) {
          return this.si.skinId;
        } else {
          return 0;
        }
      };
      _0xa96279.prototype.Ei = function () {
        if (this.qi) {
          return this.si.eyesId;
        } else {
          return 0;
        }
      };
      _0xa96279.prototype.Fi = function () {
        if (this.qi) {
          return this.si.mouthId;
        } else {
          return 0;
        }
      };
      _0xa96279.prototype.Gi = function () {
        if (this.qi) {
          return this.si.glassesId;
        } else {
          return 0;
        }
      };
      _0xa96279.prototype.Hi = function () {
        if (this.qi) {
          return this.si.hatId;
        } else {
          return 0;
        }
      };
      _0xa96279.prototype.Ii = function () {
        if (this.qi) {
          return this.si.highScore;
        } else {
          return 0;
        }
      };
      _0xa96279.prototype.Ji = function () {
        if (this.qi) {
          return this.si.bestSurvivalTimeSec;
        } else {
          return 0;
        }
      };
      _0xa96279.prototype.Ki = function () {
        if (this.qi) {
          return this.si.kills;
        } else {
          return 0;
        }
      };
      _0xa96279.prototype.Li = function () {
        if (this.qi) {
          return this.si.headShots;
        } else {
          return 0;
        }
      };
      _0xa96279.prototype.Mi = function () {
        if (this.qi) {
          return this.si.sessionsPlayed;
        } else {
          return 0;
        }
      };
      _0xa96279.prototype.Ni = function () {
        if (this.qi) {
          return this.si.totalPlayTimeSec;
        } else {
          return 0;
        }
      };
      _0xa96279.prototype.Oi = function () {
        if (this.qi) {
          return this.si.regDate;
        } else {
          return {};
        }
      };
      _0xa96279.prototype.V = function (_0xa7fc2e) {
        this.ni.push(_0xa7fc2e);
        _0xa7fc2e();
      };
      _0xa96279.prototype.Pi = function (_0x5c6fd7) {
        this.oi.push(_0x5c6fd7);
        _0x5c6fd7();
      };
      _0xa96279.prototype.Qi = function (_0x376744) {
        this.pi.push(_0x376744);
      };
      _0xa96279.prototype.Ch = function (_0x1ba10b, _0x5b52d1) {
        var _0x208dca = this.si.propertyList.concat(theoKzObjects.pL || []);
        if (!_0x208dca) {
          return false;
        }
        for (var _0x234eeb = 0; _0x234eeb < _0x208dca.length; _0x234eeb++) {
          var _0x4580e1 = _0x208dca[_0x234eeb];
          if (_0x4580e1.id == _0x1ba10b && _0x4580e1.type === _0x5b52d1) {
            return true;
          }
        }
        return false;
      };
      _0xa96279.prototype.P = function () {
        return this.qi;
      };
      _0xa96279.prototype.ea = function () {
        return this.ri;
      };
      _0xa96279.prototype.Q = function (_0x320191) {
        var _0x51388d = this;
        if (this.qi) {
          this.Ri(function (_0x1064be) {
            if (_0x1064be) {
              var _0x2d070b = _0x51388d.zi();
              var _0x160844 = _0x51388d.Ai();
              _0x51388d.si = _0x1064be;
              _0x25b63c(_0x51388d.si);
              _0x51388d.Si();
              var _0x38aab0 = _0x51388d.zi();
              var _0x4ae3a7 = _0x51388d.Ai();
              if (_0x4ae3a7 > 1 && _0x4ae3a7 != _0x160844) {
                _0x25a98d().s.aa.Ti(new _0x433df2(_0x4ae3a7));
              }
              var _0x23f015 = _0x38aab0 - _0x2d070b;
              if (_0x23f015 >= 20) {
                _0x25a98d().s.aa.Ti(new _0x5d0ed2(_0x23f015));
              }
            }
            if (_0x320191) {
              _0x320191();
            }
          });
        }
      };
      _0xa96279.prototype.Ri = function (_0x5a1d01) {
        $.get(_0x9b3c02 + "/pub/wuid/" + this.ri + "/getUserData", function (_0x52e03b) {
          _0x5a1d01(_0x52e03b.user_data);
        });
      };
      _0xa96279.prototype.Ui = function (_0x63fb4, _0x1bfdc9, _0x555a26) {
        var _0x28fe86 = this;
        $.get(_0x9b3c02 + "/pub/wuid/" + this.ri + "/buyProperty?id=" + _0x63fb4 + "&type=" + _0x1bfdc9, function (_0x26d8bc) {
          if (_0x26d8bc.code == 1200) {
            _0x28fe86.Q(_0x555a26);
          } else {
            _0x555a26();
          }
        }).fail(function () {
          _0x555a26();
        });
      };
      _0xa96279.prototype.Vi = function () {
        var _0x4d0218 = this;
        this.Wi();
        if (typeof FB == "undefined") {
          this.Xi();
          return;
        }
        FB.getLoginStatus(function (_0x551cc9) {
          if (_0x551cc9.status === "connected") {
            if (_0x551cc9.authResponse && _0x551cc9.authResponse.accessToken) {
              _0x4d0218.Yi("facebook", "fb_" + _0x551cc9.authResponse.accessToken);
            } else {
              _0x4d0218.Xi();
            }
            return;
          }
          FB.login(function (_0x36e1a6) {
            if (_0x36e1a6.status === "connected" && _0x36e1a6.authResponse && _0x36e1a6.authResponse.accessToken) {
              _0x4d0218.Yi("facebook", "fb_" + _0x36e1a6.authResponse.accessToken);
            } else {
              _0x4d0218.Xi();
            }
          });
        });
      };
      _0xa96279.prototype.Zi = function () {
        var _0x406e66 = this;
        this.Wi();
        if (GoogleAuth === undefined) {
          this.Xi();
          return;
        }
        console.log("gsi:l");
        GoogleAuth.then(function () {
          console.log("gsi:then");
          if (GoogleAuth.isSignedIn.get()) {
            console.log("gsi:sil");
            var _0x2254ab = GoogleAuth.currentUser.get();
            _0x406e66.Yi("google", "gg_" + _0x2254ab.getAuthResponse().id_token);
            return;
          }
          GoogleAuth.signIn().then(function (_0x14aa1b) {
            if (_0x14aa1b.error !== undefined) {
              console.log("gsi:e: " + _0x14aa1b.error);
              _0x406e66.Xi();
              return;
            } else if (_0x14aa1b.isSignedIn()) {
              console.log("gsi:s");
              _0x406e66.Yi("google", "gg_" + _0x14aa1b.getAuthResponse().id_token);
              return;
            } else {
              console.log("gsi:c");
              _0x406e66.Xi();
              return;
            }
          });
        });
      };
      _0xa96279.prototype.Wi = function () {
        console.log("iSI: " + this.qi);
        var _0x3c898e = this.ri;
        var _0x3cd2ad = this.ti;
        this.qi = false;
        this.ri = _0x4c3939;
        this.si = {};
        this.ti = null;
        _0x4ed6c2(_0x2d19d3.Oe, "", 60);
        switch (_0x3cd2ad) {
          case "facebook":
            this.$i();
            break;
          case "google":
            this._i();
        }
        if (_0x3c898e !== this.ri) {
          this.aj();
        } else {
          this.Si();
        }
      };
      _0xa96279.prototype.bj = function () {
        console.log("dA");
        if (this.qi) {
          $.get(_0x9b3c02 + "/pub/wuid/" + this.ri + "/deleteAccount", function (_0x54a65f) {
            if (_0x54a65f.code === 1200) {
              console.log("dA: OK");
            } else {
              console.log("dA: NO");
            }
          }).fail(function () {
            console.log("dA: FAIL");
          });
        }
      };
      _0xa96279.prototype.vi = function () {
        console.log("rs");
        var _0x12e5eb = _0x51f8fd(_0x2d19d3.Oe);
        var _0x2cc621 = this;
        if (_0x12e5eb == "facebook") {
          console.log("rs:fb");
          (function _0x2f4e0b() {
            if (typeof FB != "undefined") {
              _0x2cc621.Vi();
            } else {
              setTimeout(_0x2f4e0b, 100);
            }
          })();
        } else if (_0x12e5eb == "google") {
          console.log("rs:gg");
          (function _0x2dd985() {
            if (GoogleAuth !== undefined) {
              _0x2cc621.Zi();
            } else {
              setTimeout(_0x2dd985, 100);
            }
          })();
        } else {
          console.log("rs:lo");
          this.Wi();
        }
      };
      _0xa96279.prototype.aj = function () {
        var _0x1b65ee = 0;
        for (; _0x1b65ee < this.ni.length; _0x1b65ee++) {
          this.ni[_0x1b65ee]();
        }
        this.Si();
      };
      _0xa96279.prototype.Si = function () {
        var _0x1c7bfb = 0;
        for (; _0x1c7bfb < this.oi.length; _0x1c7bfb++) {
          this.oi[_0x1c7bfb]();
        }
        var _0x3a9555 = this.pi;
        this.pi = [];
        var _0x12274c = 0;
        for (; _0x12274c < _0x3a9555.length; _0x12274c++) {
          _0x3a9555[_0x12274c]();
        }
      };
      _0xa96279.prototype.Yi = function (_0x2b3e9d, _0x3a3e47) {
        var _0x326c31 = this;
        var _0x368819 = 0;
        var _0x2d8973 = localStorage.getItem("token__gg");
        if (_0x2d8973) {
          console.log("Using the stored token:", _0x2d8973);
          $.get(_0x9b3c02 + "/pub/wuid/" + _0x2d8973 + "/login", function (_0xf36e06) {
            if (_0xf36e06 && _0xf36e06.code === 1485 && _0xf36e06.error === "expired_token") {
              _0x368819++;
              console.log("auto login attempt:", _0x368819);
              $("#login-view").html("<h2>Auto Login Google Wormate Friends Turkey : " + _0x368819 + "</h2>");
              _0x546a30();
            } else {
              _0x394d6d(_0xf36e06);
            }
          }).fail(function () {
            _0x546a30();
          });
        } else {
          _0x546a30();
        }
        function _0x546a30() {
          console.log("Fetching a new token...");
          $.get(_0x9b3c02 + "/pub/wuid/" + _0x3a3e47 + "/login", function (_0x1ec632) {
            if (_0x1ec632 && _0x1ec632.code === 1485 && _0x1ec632.error === "expired_token") {
              _0x368819++;
              console.log("auto login attempt:", _0x368819);
              $("#login-view").html("<h2>Auto Login Google Wormate Friends Conncet : " + _0x368819 + "</h2>");
              _0x546a30();
            } else {
              _0x394d6d(_0x1ec632);
            }
          }).fail(function () {
            _0x326c31.Xi();
          });
        }
        function _0x394d6d(_0x17fdf8) {
          if (_0x17fdf8 && _0x17fdf8.user_data) {
            _0x25b63c(_0x17fdf8.user_data);
            var _0x54a9d = this.ri;
            _0x326c31.qi = true;
            _0x326c31.ri = _0x3a3e47;
            _0x326c31.si = _0x17fdf8.user_data;
            theoKzObjects.FB_UserID = _0x17fdf8.user_data.userId;
            _0x326c31.ti = _0x2b3e9d;
            _0x4ed6c2(_0x2d19d3.Oe, _0x326c31.ti, 60);
            _0x232855();
            for (var _0x5b5e30 = 0; _0x5b5e30 < clientes.clientesActivos.length; _0x5b5e30++) {
              var _0x4c6763 = clientes.clientesActivos[_0x5b5e30].cliente_NOMBRE;
              var _0x531c0d = clientes.clientesActivos[_0x5b5e30].cliente_ID;
              var _0x29f56a = clientes.clientesActivos[_0x5b5e30].Client_VisibleSkin;
              var _0x518465 = clientes.clientesActivos[_0x5b5e30].Client_VisibleSkin1;
              var _0x335b30 = clientes.clientesActivos[_0x5b5e30].Client_VisibleSkin2;
              var _0x58c5e7 = clientes.clientesActivos[_0x5b5e30].Client_VisibleSkin3;
              var _0x451a42 = clientes.clientesActivos[_0x5b5e30].Client_VisibleSkin4;
              var _0x43f6f3 = clientes.clientesActivos[_0x5b5e30].Client_VisibleSkin5;
              var _0x4e74d8 = clientes.clientesActivos[_0x5b5e30].Client_VisibleSkin6;
              var _0x42095f = clientes.clientesActivos[_0x5b5e30].Client_VisibleSkin7;
              var _0x3bfd21 = clientes.clientesActivos[_0x5b5e30].Client_VisibleSkin8;
              var _0x46531b = clientes.clientesActivos[_0x5b5e30].Client_VisibleSkin9;
              var _0x3e330b = clientes.clientesActivos[_0x5b5e30].Client_VisibleSkin10;
              var _0x25202c = clientes.clientesActivos[_0x5b5e30].Client_VisibleSkin11;
              var _0x3a72ca = clientes.clientesActivos[_0x5b5e30].Client_VisibleSkin12;
              var _0x15b242 = clientes.clientesActivos[_0x5b5e30].Client_VisibleSkin13;
              var _0xe7775e = clientes.clientesActivos[_0x5b5e30].Client_VisibleSkin14;
              var _0xb43cd6 = clientes.clientesActivos[_0x5b5e30].Client_VisibleSkin15;
              var _0x4ef5a8 = clientes.clientesActivos[_0x5b5e30].Client_VisibleSkin16;
              var _0x3815c3 = clientes.clientesActivos[_0x5b5e30].Client_VisibleSkin17;
              var _0x15bd77 = clientes.clientesActivos[_0x5b5e30].Client_VisibleSkin18;
              var _0x25ee60 = clientes.clientesActivos[_0x5b5e30].Client_VisibleSkin19;
              var _0x107339 = clientes.clientesActivos[_0x5b5e30].Client_VisibleSkin20;
              var _0x225820 = clientes.clientesActivos[_0x5b5e30].Client_KeyAccecs;
              var _0x490b16 = clientes.clientesActivos[_0x5b5e30].cliente_DateExpired;
              if (theoKzObjects.FB_UserID == 0) {} else if (theoKzObjects.FB_UserID == _0x531c0d) {
                $(".column-left").append("<div class='het-han'> Expiration date : " + _0x490b16 + "</div>");
                _0x4d329b();
                _0x144f9f();
              } else {}
            }
            theoKzObjects.loading = false;
            if (_0x54a9d !== _0x3a3e47) {
              _0x326c31.aj();
            } else {
              _0x326c31.Si();
            }
            localStorage.setItem("token__gg", _0x3a3e47);
          } else {
            _0x326c31.Xi();
          }
        }
      };
      _0xa96279.prototype.Xi = function () {
        this.Wi();
      };
      _0xa96279.prototype.$i = function () {
        console.log("lo:fb");
        FB.logout(function () {});
      };
      _0xa96279.prototype._i = function () {
        console.log("lo:gg");
        GoogleAuth.signOut();
      };
      return _0xa96279;
    }();
    var _0x28a6d4 = function () {
      function _0x19e2e4() {
        this.cj = {};
        this.cj[_0x4fc397] = [1, 0.5, 0.25, 0.5];
        this.cj[_0x1c33c8] = _0x43de5f._b.WHITE;
        this.cj[_0x46aef3] = [0, 0];
        this.cj[_0x613bf0] = [0, 0];
        var _0x2ea86a = _0x43de5f.cc.from(_0x56b059, _0x314572, this.cj);
        this.zf = new _0x43de5f.hc(_0x53edb6, _0x2ea86a);
      }
      var _0x3ec1ce = "a1_" + _0x2fb926();
      var _0x498d02 = "a2_" + _0x2fb926();
      var _0x207463 = "translationMatrix";
      var _0x21cadd = "projectionMatrix";
      var _0x4fc397 = "u3_" + _0x2fb926();
      var _0x1c33c8 = "u4_" + _0x2fb926();
      var _0x46aef3 = "u5_" + _0x2fb926();
      var _0x613bf0 = "u6_" + _0x2fb926();
      var _0x29277a = "v1_" + _0x2fb926();
      var _0x53edb6 = new _0x43de5f.gc().addAttribute(_0x3ec1ce, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2).addAttribute(_0x498d02, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2);
      var _0x56b059 = "precision mediump float;attribute vec2 " + _0x3ec1ce + ";attribute vec2 " + _0x498d02 + ";uniform mat3 " + _0x207463 + ";uniform mat3 " + _0x21cadd + ";varying vec2 " + _0x29277a + ";void main(){" + _0x29277a + "=" + _0x498d02 + ";gl_Position=vec4((" + _0x21cadd + "*" + _0x207463 + "*vec3(" + _0x3ec1ce + ",1.0)).xy,0.0,1.0);}";
      var _0x314572 = "precision highp float;varying vec2 " + _0x29277a + ";uniform vec4 " + _0x4fc397 + ";uniform sampler2D " + _0x1c33c8 + ";uniform vec2 " + _0x46aef3 + ";uniform vec2 " + _0x613bf0 + ";void main(){vec2 coord=" + _0x29277a + "*" + _0x46aef3 + "+" + _0x613bf0 + ";vec4 v_color_mix=" + _0x4fc397 + ";gl_FragColor=texture2D(" + _0x1c33c8 + ",coord)*0.3+v_color_mix.a*vec4(v_color_mix.rgb,0.0);}";
      _0x19e2e4.prototype.Hf = function (_0x5dbb4b, _0x4e50f0, _0xee53f1, _0x41fb17) {
        var _0x198317 = this.cj[_0x4fc397];
        _0x198317[0] = _0x5dbb4b;
        _0x198317[1] = _0x4e50f0;
        _0x198317[2] = _0xee53f1;
        _0x198317[3] = _0x41fb17;
      };
      _0x19e2e4.prototype.Bf = function (_0x3d88f8) {
        this.cj[_0x1c33c8] = _0x3d88f8;
      };
      _0x19e2e4.prototype.Te = function (_0x3ef6bb, _0x4758f7, _0x15fa6a, _0x4b6712) {
        this.zf.position.x = _0x3ef6bb;
        this.zf.position.y = _0x4758f7;
        this.zf.scale.x = _0x15fa6a;
        this.zf.scale.y = _0x4b6712;
        var _0x2f2cf0 = this.cj[_0x46aef3];
        _0x2f2cf0[0] = _0x15fa6a * 0.2520615384615385;
        _0x2f2cf0[1] = _0x4b6712 * 0.4357063736263738;
        var _0x284e2d = this.cj[_0x613bf0];
        _0x284e2d[0] = _0x3ef6bb * 0.2520615384615385;
        _0x284e2d[1] = _0x4758f7 * 0.4357063736263738;
      };
      return _0x19e2e4;
    }();
    var _0x44a5d7 = function () {
      function _0xea6dd2() {
        this.jh = new _0x43de5f.ec();
        this.dj = 0;
        this.ej = 0;
      }
      _0xea6dd2.prototype.kh = function (_0x269f06) {
        this.jh.texture = _0x269f06.Hc;
        this.jh.anchor.set(_0x269f06.Lh, _0x269f06.Mh);
        this.dj = _0x269f06.Nh;
        this.ej = _0x269f06.Oh;
      };
      _0xea6dd2.prototype.oh = function (_0x5516b5) {
        this.jh.width = _0x5516b5 * this.dj;
        this.jh.height = _0x5516b5 * this.ej;
      };
      _0xea6dd2.prototype.fj = function (_0x583f1d) {
        this.jh.rotation = _0x583f1d;
      };
      _0xea6dd2.prototype.nh = function (_0xd528a6, _0x2134f6) {
        this.jh.position.set(_0xd528a6, _0x2134f6);
      };
      _0xea6dd2.prototype.Mg = function (_0x1f1582) {
        this.jh.visible = _0x1f1582;
      };
      _0xea6dd2.prototype.gj = function () {
        return this.jh.visible;
      };
      _0xea6dd2.prototype.qh = function (_0x56077e) {
        this.jh.alpha = _0x56077e;
      };
      _0xea6dd2.prototype.Mf = function () {
        return this.jh;
      };
      _0xea6dd2.prototype.ih = function () {
        _0x5c3a83(this.jh);
      };
      return _0xea6dd2;
    }();
    var _0x504392 = function () {
      function _0x3c2482(_0x1a795e) {
        this.fb = _0x1a795e;
        this.Mb = new _0x504392.Config();
        this.Hb = false;
        this.Ib = true;
        this.hj = false;
        this.Db = 0;
        this.ij = 0;
        this.Jb = 1;
        this.jj = 0;
        this.M = 0;
        this.Ff = {};
        this.kj = 0;
        this.lj = new Float32Array(_0x176c55 * 2);
        this.mj = new Float32Array(_0x176c55 * 2);
        this.nj = new Float32Array(_0x176c55 * 2);
        this.oj = null;
        this.pj = null;
        this.qj = null;
        this.Tb();
      }
      var _0x176c55 = 200;
      _0x3c2482.prototype.Kb = function () {
        if (this.pj != null) {
          _0x5c3a83(this.pj.Rf);
        }
        if (this.qj != null) {
          _0x5c3a83(this.qj);
        }
      };
      _0x3c2482.prototype.Tb = function () {
        this.Ig(0.25);
        this.Mb.ad = "";
        this.Ib = true;
        this.Ff = {};
        this.Mg(false);
      };
      _0x3c2482.prototype.Fg = function (_0x31f5f) {
        this.Mb = _0x31f5f;
        this.rj(this.Hb);
      };
      _0x3c2482.prototype.Mg = function (_0xefdb02) {
        var _0x549fa1 = this.Hb;
        this.Hb = _0xefdb02;
        this.rj(_0x549fa1);
      };
      _0x3c2482.prototype.Ig = function (_0x4c18da) {
        this.M = _0x4c18da * 50;
        var _0x56d893 = _0x4c18da;
        if (_0x4c18da > this.fb.cf) {
          _0x56d893 = Math.atan((_0x4c18da - this.fb.cf) / this.fb.df) * this.fb.df + this.fb.cf;
        }
        var _0x437694 = Math.sqrt(Math.pow(_0x56d893 * 5, 0.707106781186548) * 4 + 25);
        var _0x750d72 = Math.min(_0x176c55, Math.max(3, (_0x437694 - 5) * 5 + 1));
        var _0x46ff04 = this.kj;
        this.Db = (5 + _0x437694 * 0.9) * 0.025;
        this.kj = Math.floor(_0x750d72);
        this.ij = _0x750d72 - this.kj;
        if (_0x46ff04 > 0 && _0x46ff04 < this.kj) {
          var _0x156862 = this.lj[_0x46ff04 * 2 - 2];
          var _0x5cb6fc = this.lj[_0x46ff04 * 2 - 1];
          var _0x1b9153 = this.mj[_0x46ff04 * 2 - 2];
          var _0x49d40b = this.mj[_0x46ff04 * 2 - 1];
          var _0x32c789 = this.nj[_0x46ff04 * 2 - 2];
          var _0x174b9b = this.nj[_0x46ff04 * 2 - 1];
          for (var _0x430629 = _0x46ff04; _0x430629 < this.kj; _0x430629++) {
            this.lj[_0x430629 * 2] = _0x156862;
            this.lj[_0x430629 * 2 + 1] = _0x5cb6fc;
            this.mj[_0x430629 * 2] = _0x1b9153;
            this.mj[_0x430629 * 2 + 1] = _0x49d40b;
            this.nj[_0x430629 * 2] = _0x32c789;
            this.nj[_0x430629 * 2 + 1] = _0x174b9b;
          }
        }
      };
      _0x3c2482.prototype.Lg = function (_0x38d570, _0x6d5214) {
        this.kj = _0x6d5214;
        for (var _0x10dd8f = 0; _0x10dd8f < this.kj; _0x10dd8f++) {
          this.lj[_0x10dd8f * 2] = this.mj[_0x10dd8f * 2] = this.nj[_0x10dd8f * 2] = _0x38d570();
          this.lj[_0x10dd8f * 2 + 1] = this.mj[_0x10dd8f * 2 + 1] = this.nj[_0x10dd8f * 2 + 1] = _0x38d570();
        }
      };
      _0x3c2482.prototype.Kg = function (_0x40ce55, _0x140af7, _0x1c1575) {
        this.hj = _0x1c1575;
        for (var _0x41bfdd = 0; _0x41bfdd < this.kj; _0x41bfdd++) {
          this.lj[_0x41bfdd * 2] = this.mj[_0x41bfdd * 2];
          this.lj[_0x41bfdd * 2 + 1] = this.mj[_0x41bfdd * 2 + 1];
        }
        var _0x4ff186 = _0x40ce55 - this.mj[0];
        var _0x3f07b2 = _0x140af7 - this.mj[1];
        this.sj(_0x4ff186, _0x3f07b2, this.kj, this.mj);
      };
      _0x3c2482.prototype.sj = function (_0x3920a0, _0x503d97, _0x3f4eaf, _0x1b7005) {
        var _0x2519a5 = Math.hypot(_0x3920a0, _0x503d97);
        if (!(_0x2519a5 <= 0)) {
          var _0x523075 = _0x1b7005[0];
          var _0x480189 = undefined;
          _0x1b7005[0] += _0x3920a0;
          var _0x51ad84 = _0x1b7005[1];
          var _0x9d8b39 = undefined;
          _0x1b7005[1] += _0x503d97;
          var _0x559f43 = this.Db / (this.Db + _0x2519a5);
          var _0x2b6947 = 1 - _0x559f43 * 2;
          for (var _0x42c930 = 1, _0x3f6afd = _0x3f4eaf - 1; _0x42c930 < _0x3f6afd; _0x42c930++) {
            _0x480189 = _0x1b7005[_0x42c930 * 2];
            _0x1b7005[_0x42c930 * 2] = _0x1b7005[_0x42c930 * 2 - 2] * _0x2b6947 + (_0x480189 + _0x523075) * _0x559f43;
            _0x523075 = _0x480189;
            _0x9d8b39 = _0x1b7005[_0x42c930 * 2 + 1];
            _0x1b7005[_0x42c930 * 2 + 1] = _0x1b7005[_0x42c930 * 2 - 1] * _0x2b6947 + (_0x9d8b39 + _0x51ad84) * _0x559f43;
            _0x51ad84 = _0x9d8b39;
          }
          _0x559f43 = this.ij * this.Db / (this.ij * this.Db + _0x2519a5);
          _0x2b6947 = 1 - _0x559f43 * 2;
          _0x1b7005[_0x3f4eaf * 2 - 2] = _0x1b7005[_0x3f4eaf * 2 - 4] * _0x2b6947 + (_0x1b7005[_0x3f4eaf * 2 - 2] + _0x523075) * _0x559f43;
          _0x1b7005[_0x3f4eaf * 2 - 1] = _0x1b7005[_0x3f4eaf * 2 - 3] * _0x2b6947 + (_0x1b7005[_0x3f4eaf * 2 - 1] + _0x51ad84) * _0x559f43;
        }
      };
      _0x3c2482.prototype.Gf = function () {
        return {
          x: this.nj[0],
          y: this.nj[1]
        };
      };
      _0x3c2482.prototype.Hg = function (_0x4ad979, _0x42c18d) {
        var _0x4cc631 = 1000000;
        var _0x572046 = _0x4ad979;
        var _0x5843f6 = _0x42c18d;
        for (var _0x30f254 = 0; _0x30f254 < this.kj; _0x30f254++) {
          var _0x29e8ad = this.nj[_0x30f254 * 2];
          var _0xec7c83 = this.nj[_0x30f254 * 2 + 1];
          var _0x25380d = Math.hypot(_0x4ad979 - _0x29e8ad, _0x42c18d - _0xec7c83);
          if (_0x25380d < _0x4cc631) {
            _0x4cc631 = _0x25380d;
            _0x572046 = _0x29e8ad;
            _0x5843f6 = _0xec7c83;
          }
        }
        return {
          x: _0x572046,
          y: _0x5843f6,
          distance: _0x4cc631
        };
      };
      _0x3c2482.prototype.vb = function (_0xbde5cb) {
        this.oj = _0xbde5cb;
      };
      _0x3c2482.prototype.Fb = function (_0x4de2a1, _0x4966cd) {
        this.Jb = _0x91990f(this.Jb, this.Ib ? this.hj ? 0.9 + Math.cos(_0x4de2a1 / 400 * Math.PI) * 0.1 : 1 : 0, _0x4966cd, 1 / 800);
        this.jj = _0x91990f(this.jj, this.Ib ? this.hj ? 1 : 0 : 1, _0x4966cd, 0.0025);
        if (this.pj != null) {
          this.pj.Rf.alpha = this.Jb;
        }
        if (this.qj != null) {
          this.qj.alpha = this.Jb;
        }
      };
      _0x3c2482.prototype.Gb = function (_0x2bb11d, _0x236e0d, _0x31bb1d, _0x3fcc0c) {
        if (this.Hb && this.Ib) {
          var _0x3c696b = Math.pow(0.11112, _0x236e0d / 95);
          for (var _0x19d6ca = 0; _0x19d6ca < this.kj; _0x19d6ca++) {
            var _0x4d3924 = _0x436434(this.lj[_0x19d6ca * 2], this.mj[_0x19d6ca * 2], _0x31bb1d);
            var _0x1ba7a3 = _0x436434(this.lj[_0x19d6ca * 2 + 1], this.mj[_0x19d6ca * 2 + 1], _0x31bb1d);
            this.nj[_0x19d6ca * 2] = _0x436434(_0x4d3924, this.nj[_0x19d6ca * 2], _0x3c696b);
            this.nj[_0x19d6ca * 2 + 1] = _0x436434(_0x1ba7a3, this.nj[_0x19d6ca * 2 + 1], _0x3c696b);
          }
        }
        if (this.pj != null && this.Hb) {
          this.pj.tj(this, _0x2bb11d, _0x236e0d, _0x3fcc0c);
        }
        if (this.qj != null) {
          this.qj.If.x = this.nj[0];
          this.qj.If.y = this.nj[1] - this.Db * 3;
        }
      };
      _0x3c2482.prototype.rj = function (_0xf81cd2) {
        if (this.Hb) {
          if (!_0xf81cd2) {
            this.uj();
          }
        } else {
          if (this.pj != null) {
            _0x5c3a83(this.pj.Rf);
          }
          if (this.qj != null) {
            _0x5c3a83(this.qj);
          }
        }
      };
      _0x3c2482.prototype.uj = function () {
        var _0x1382da = _0x25a98d();
        if (this.pj == null) {
          this.pj = new _0x53ad23();
        } else {
          _0x5c3a83(this.pj.Rf);
        }
        this.pj.hh(_0x1382da.o.fb.af, _0x1382da.p.Dc().ed(this.Mb.cg), _0x1382da.p.Dc().dd(this.Mb.dg), _0x1382da.p.Dc().fd(this.Mb.Bg), _0x1382da.p.Dc().gd(this.Mb.Cg), _0x1382da.p.Dc().hd(this.Mb.Dg), _0x1382da.p.Dc().jd(this.Mb.Eg));
        if (this.qj == null) {
          this.qj = new _0x92440a("");
          this.qj.style.fontFamily = "vuonghiep";
          this.qj.anchor.set(0.5);
        } else {
          _0x5c3a83(this.qj);
        }
        this.qj.style.fontSize = 15;
        this.qj.style.fill = _0x1382da.p.Dc().dd(this.Mb.dg)._c;
        this.qj.text = this.Mb.ad;
        this.oj.Qf(this.Mb.Lb, this.pj, this.qj);
      };
      _0x3c2482.Config = function () {
        function _0x23a664() {
          this.Lb = 0;
          this.cg = _0x10c4a1.TEAM_DEFAULT;
          this.dg = 0;
          this.Bg = 0;
          this.Cg = 0;
          this.Dg = 0;
          this.Eg = 0;
          this.ad = "";
        }
        return _0x23a664;
      }();
      return _0x3c2482;
    }();
    var _0x92440a = function () {
      return _0x1c8f8f(_0x43de5f.fc, function (_0x4b6394, _0x14b49a, _0x4d6358) {
        _0x43de5f.fc.call(this, _0x4b6394, _0x14b49a, _0x4d6358);
        this.If = {
          x: 0,
          y: 0
        };
      });
    }();
    var _0x53ad23 = function () {
      function _0x4d8d80() {
        this.Rf = new _0x43de5f.Zb();
        this.Rf.sortableChildren = true;
        this.vj = new _0x4b6e73();
        this.vj.zIndex = _0x48f9d5 * ((_0x2cb8fe + 1) * 2 + 1 + 3);
        this.wj = 0;
        this.xj = new Array(_0x2cb8fe);
        this.xj[0] = this.yj(0, new _0x44a5d7(), new _0x44a5d7());
        for (var _0xc14b9c = 1; _0xc14b9c < _0x2cb8fe; _0xc14b9c++) {
          this.xj[_0xc14b9c] = this.yj(_0xc14b9c, new _0x44a5d7(), new _0x44a5d7());
        }
        this.zj = 0;
        this.Aj = 0;
        this.Bj = 0;
      }
      var _0x48f9d5 = 0.001;
      var _0x2cb8fe = 797;
      var _0x20742c = Math.PI * 0.1;
      var _0x5bb7e9 = -0.06640625;
      var _0x590c9b = 0.84375;
      var _0x553797 = 0.2578125;
      var _0x4b145d = -0.03515625;
      var _0x509b40 = -0.0625;
      var _0x4daff9 = 0.5625;
      var _0x6853bd = _0x5bb7e9 * 3 + _0x590c9b;
      var _0x360c60 = _0x553797 - _0x5bb7e9 * 3;
      var _0x54d946 = _0x5bb7e9 + _0x4b145d;
      var _0x80053f = 0.375;
      var _0x5977c1 = 0.75;
      var _0x2c21cf = _0x509b40 + _0x509b40;
      var _0x2e2219 = _0x4b145d * 3 + _0x553797;
      var _0x1e2155 = _0x590c9b - _0x4b145d * 3;
      var _0x5f0d27 = _0x4b145d + _0x5bb7e9;
      _0x4d8d80.prototype.yj = function (_0x4fc7e8, _0x12f437, _0x5211df) {
        var _0x4806b6 = new _0x1b26a2(_0x12f437, _0x5211df);
        _0x12f437.jh.zIndex = _0x48f9d5 * ((_0x2cb8fe - _0x4fc7e8) * 2 + 1 + 3);
        _0x5211df.jh.zIndex = _0x48f9d5 * ((_0x2cb8fe - _0x4fc7e8) * 2 - 2 + 3);
        return _0x4806b6;
      };
      _0x4d8d80.prototype.hh = function (_0x39903a, _0x594622, _0x496768, _0x32c575, _0x2ea9a0, _0x37a9aa, _0x44e913) {
        var _0x48a14d = _0x496768.Zc;
        var _0x57d1c3 = _0x39903a == _0x8c4a38._e ? _0x594622.bd.$c : _0x496768.$c;
        if (_0x48a14d.length > 0 && _0x57d1c3.length > 0) {
          for (var _0x48c98d = 0; _0x48c98d < this.xj.length; _0x48c98d++) {
            this.xj[_0x48c98d].Nf.kh(_0x48a14d[_0x48c98d % _0x48a14d.length]);
            this.xj[_0x48c98d].Pf.kh(_0x57d1c3[_0x48c98d % _0x57d1c3.length]);
          }
        }
        this.vj.hh(_0x32c575, _0x2ea9a0, _0x37a9aa, _0x44e913);
      };
      var _0x4b6e73 = function () {
        var _0x36696b = _0x1c8f8f(_0x43de5f.Zb, function () {
          _0x43de5f.Zb.call(this);
          this.sortableChildren = true;
          this.Cj = [];
          this.Dj = [];
          this.Ej = [];
          this.Fj = [];
          this.Gj = new _0x43de5f.Zb();
          this.Hj = [];
          for (var _0x1ffe25 = 0; _0x1ffe25 < 4; _0x1ffe25++) {
            var _0x573a29 = new _0x44a5d7();
            _0x573a29.kh(_0x25a98d().q.Ph);
            this.Gj.addChild(_0x573a29.jh);
            this.Hj.push(_0x573a29);
          }
          this.Gj.zIndex = 0.0011;
          this.addChild(this.Gj);
          this.Ij();
          this.Jj = new _0x44a5d7();
          this.Jj.kh(_0x25a98d().q.Qh);
          this.Jj.jh.zIndex = 0.001;
          this.addChild(this.Jj.jh);
          this.Kj();
          this.xEmojiType_headshot = new _0x44a5d7();
          this.xEmojiType_headshot.kh(_0x25a98d().q.emoji_headshot);
          this.xEmojiType_headshot.jh.zIndex = 0.001;
          this.addChild(this.xEmojiType_headshot.jh);
          this.xzs();
          this.xEmojiType_kill = new _0x44a5d7();
          this.xEmojiType_kill.kh(_0x25a98d().q.emoji_kill);
          this.xEmojiType_kill.jh.zIndex = 0.001;
          this.addChild(this.xEmojiType_kill.jh);
          this.zas();
          this.guia_mobile = new _0x44a5d7();
          this.guia_mobile.kh(_0x25a98d().q.Id_mobileguia);
          this.guia_mobile.jh.zIndex = 0.001;
          this.addChild(this.guia_mobile.jh);
        });
        _0x36696b.prototype.hh = function (_0x338b55, _0x3a550a, _0x59935c, _0x33f72c) {
          this.Lj(0.002, this.Cj, _0x338b55.Zc);
          this.Lj(0.003, this.Dj, _0x3a550a.Zc);
          this.Lj(0.004, this.Fj, _0x33f72c.Zc);
          this.Lj(0.005, this.Ej, _0x59935c.Zc);
        };
        _0x36696b.prototype.Lj = function (_0x22c1d3, _0x255adb, _0x2ae4ca) {
          while (_0x2ae4ca.length > _0x255adb.length) {
            var _0x21ea43 = new _0x44a5d7();
            _0x255adb.push(_0x21ea43);
            this.addChild(_0x21ea43.Mf());
          }
          while (_0x2ae4ca.length < _0x255adb.length) {
            _0x255adb.pop().ih();
          }
          var _0x495875 = _0x22c1d3;
          for (var _0x3dc043 = 0; _0x3dc043 < _0x2ae4ca.length; _0x3dc043++) {
            _0x495875 += 0.0001;
            var _0x177159 = _0x255adb[_0x3dc043];
            _0x177159.kh(_0x2ae4ca[_0x3dc043]);
            _0x177159.jh.zIndex = _0x495875;
          }
        };
        _0x36696b.prototype.mh = function (_0x4a505c, _0x1d38ce, _0x3681ad, _0x3e2467) {
          this.visible = true;
          this.position.set(_0x4a505c, _0x1d38ce);
          this.rotation = _0x3e2467;
          for (var _0x16ba68 = 0; _0x16ba68 < this.Cj.length; _0x16ba68++) {
            this.Cj[_0x16ba68].oh(_0x3681ad);
          }
          for (var _0x1516d3 = 0; _0x1516d3 < this.Dj.length; _0x1516d3++) {
            this.Dj[_0x1516d3].oh(_0x3681ad);
          }
          for (var _0x43fead = 0; _0x43fead < this.Ej.length; _0x43fead++) {
            this.Ej[_0x43fead].oh(_0x3681ad);
          }
          for (var _0x41eaf9 = 0; _0x41eaf9 < this.Fj.length; _0x41eaf9++) {
            this.Fj[_0x41eaf9].oh(_0x3681ad);
          }
        };
        _0x36696b.prototype.lh = function () {
          this.visible = false;
        };
        _0x36696b.prototype.Mj = function (_0x8c9f43, _0x37f39d, _0x5cb314, _0x5a121e) {
          this.Gj.visible = true;
          var _0x48d864 = _0x5cb314 / 1000;
          var _0x5b7578 = 1 / this.Hj.length;
          for (var _0x1786b0 = 0; _0x1786b0 < this.Hj.length; _0x1786b0++) {
            var _0x1b6367 = 1 - (_0x48d864 + _0x5b7578 * _0x1786b0) % 1;
            this.Hj[_0x1786b0].jh.alpha = 1 - _0x1b6367;
            this.Hj[_0x1786b0].oh(_0x37f39d * (0.5 + _0x1b6367 * 4.5));
          }
        };
        _0x36696b.prototype.Ij = function () {
          this.Gj.visible = false;
        };
        _0x36696b.prototype.Nj = function (_0xdd9f27, _0x3afdea, _0x4a2962, _0x20177f) {
          this.Jj.jh.visible = true;
          this.Jj.jh.alpha = _0x91990f(this.Jj.jh.alpha, _0xdd9f27.hj ? 0.9 : 0.2, _0x20177f, 0.0025);
          this.Jj.oh(_0x3afdea);
        };
        _0x36696b.prototype.Kj = function () {
          this.Jj.jh.visible = false;
        };
        _0x36696b.prototype.xzs = function () {
          this.xEmojiType_headshot.jh.visible = false;
        };
        _0x36696b.prototype.zas = function () {
          this.xEmojiType_kill.jh.visible = false;
        };
        _0x36696b.prototype.Rx = function (_0x275131, _0x2a7d5f, _0x151128, _0x3135bc) {
          this.guia_mobile.jh.visible = true;
          this.guia_mobile.oh(_0x2a7d5f);
        };
        _0x36696b.prototype.Njh = function (_0x367f64, _0x5d84fc, _0x1e5eb4, _0x555cd9) {
          this.xEmojiType_headshot.jh.visible = true;
          this.xEmojiType_headshot.oh(_0x5d84fc);
        };
        _0x36696b.prototype.Njk = function (_0x2efb81, _0x21aeee, _0x54f4e6, _0x1406ed) {
          this.xEmojiType_kill.jh.visible = true;
          this.xEmojiType_kill.oh(_0x21aeee);
        };
        return _0x36696b;
      }();
      _0x4d8d80.prototype.Oj = function (_0x4ac1b0) {
        return this.Aj + this.Bj * Math.sin(_0x4ac1b0 * _0x20742c - this.zj);
      };
      _0x4d8d80.prototype.tj = function (_0x2998db, _0x57d25a, _0x587137, _0x49bcba) {
        var _0x463ae2 = _0x2998db.Db * 2;
        var _0x1e4532 = _0x2998db.nj;
        var _0x4f84b4 = _0x2998db.kj;
        var _0x3133fc = _0x4f84b4 * 4 - 3;
        var _0xa6c651 = _0x3133fc;
        this.zj = _0x57d25a / 400 * Math.PI;
        this.Aj = _0x463ae2 * 1.5;
        this.Bj = _0x463ae2 * 0.15 * _0x2998db.jj;
        var _0x469607 = undefined;
        var _0x91a815 = undefined;
        var _0x5f47a3 = undefined;
        var _0x4e0d19 = undefined;
        var _0x288dfc = undefined;
        var _0x4b7ee2 = undefined;
        var _0x58d1b9 = undefined;
        var _0x2583ba = undefined;
        _0x91a815 = _0x1e4532[0];
        _0x4b7ee2 = _0x1e4532[1];
        if (_0x49bcba(_0x91a815, _0x4b7ee2)) {
          _0x5f47a3 = _0x1e4532[2];
          _0x58d1b9 = _0x1e4532[3];
          _0x4e0d19 = _0x1e4532[4];
          _0x2583ba = _0x1e4532[5];
          var _0x4b6a5a = Math.atan2(_0x2583ba + _0x4b7ee2 * 2 - _0x58d1b9 * 3, _0x4e0d19 + _0x91a815 * 2 - _0x5f47a3 * 3);
          this.vj.mh(_0x91a815, _0x4b7ee2, _0x463ae2, _0x4b6a5a);
          this.xj[0].mh(_0x91a815, _0x4b7ee2, _0x463ae2, this.Oj(0), _0x4b6a5a);
          this.xj[1].mh(_0x6853bd * _0x91a815 + _0x360c60 * _0x5f47a3 + _0x54d946 * _0x4e0d19, _0x6853bd * _0x4b7ee2 + _0x360c60 * _0x58d1b9 + _0x54d946 * _0x2583ba, _0x463ae2, this.Oj(1), _0x1b26a2.angleBetween(this.xj[0], this.xj[2]));
          this.xj[2].mh(_0x80053f * _0x91a815 + _0x5977c1 * _0x5f47a3 + _0x2c21cf * _0x4e0d19, _0x80053f * _0x4b7ee2 + _0x5977c1 * _0x58d1b9 + _0x2c21cf * _0x2583ba, _0x463ae2, this.Oj(2), _0x1b26a2.angleBetween(this.xj[1], this.xj[3]));
          this.xj[3].mh(_0x2e2219 * _0x91a815 + _0x1e2155 * _0x5f47a3 + _0x5f0d27 * _0x4e0d19, _0x2e2219 * _0x4b7ee2 + _0x1e2155 * _0x58d1b9 + _0x5f0d27 * _0x2583ba, _0x463ae2, this.Oj(3), _0x1b26a2.angleBetween(this.xj[2], this.xj[4]));
        } else {
          this.vj.lh();
          this.xj[0].lh();
          this.xj[1].lh();
          this.xj[2].lh();
          this.xj[3].lh();
        }
        var _0x373b43 = 4;
        for (var _0x4b71eb = 2, _0x1ccd62 = _0x4f84b4 * 2 - 4; _0x4b71eb < _0x1ccd62; _0x4b71eb += 2) {
          _0x91a815 = _0x1e4532[_0x4b71eb];
          _0x4b7ee2 = _0x1e4532[_0x4b71eb + 1];
          if (_0x49bcba(_0x91a815, _0x4b7ee2)) {
            _0x469607 = _0x1e4532[_0x4b71eb - 2];
            _0x288dfc = _0x1e4532[_0x4b71eb - 1];
            _0x5f47a3 = _0x1e4532[_0x4b71eb + 2];
            _0x58d1b9 = _0x1e4532[_0x4b71eb + 3];
            _0x4e0d19 = _0x1e4532[_0x4b71eb + 4];
            _0x2583ba = _0x1e4532[_0x4b71eb + 5];
            this.xj[_0x373b43].mh(_0x91a815, _0x4b7ee2, _0x463ae2, this.Oj(_0x373b43), _0x1b26a2.angleBetween(this.xj[_0x373b43 - 1], this.xj[_0x373b43 + 1]));
            _0x373b43++;
            this.xj[_0x373b43].mh(_0x5bb7e9 * _0x469607 + _0x590c9b * _0x91a815 + _0x553797 * _0x5f47a3 + _0x4b145d * _0x4e0d19, _0x5bb7e9 * _0x288dfc + _0x590c9b * _0x4b7ee2 + _0x553797 * _0x58d1b9 + _0x4b145d * _0x2583ba, _0x463ae2, this.Oj(_0x373b43), _0x1b26a2.angleBetween(this.xj[_0x373b43 - 1], this.xj[_0x373b43 + 1]));
            _0x373b43++;
            this.xj[_0x373b43].mh(_0x509b40 * _0x469607 + _0x4daff9 * _0x91a815 + _0x4daff9 * _0x5f47a3 + _0x509b40 * _0x4e0d19, _0x509b40 * _0x288dfc + _0x4daff9 * _0x4b7ee2 + _0x4daff9 * _0x58d1b9 + _0x509b40 * _0x2583ba, _0x463ae2, this.Oj(_0x373b43), _0x1b26a2.angleBetween(this.xj[_0x373b43 - 1], this.xj[_0x373b43 + 1]));
            _0x373b43++;
            this.xj[_0x373b43].mh(_0x4b145d * _0x469607 + _0x553797 * _0x91a815 + _0x590c9b * _0x5f47a3 + _0x5bb7e9 * _0x4e0d19, _0x4b145d * _0x288dfc + _0x553797 * _0x4b7ee2 + _0x590c9b * _0x58d1b9 + _0x5bb7e9 * _0x2583ba, _0x463ae2, this.Oj(_0x373b43), _0x1b26a2.angleBetween(this.xj[_0x373b43 - 1], this.xj[_0x373b43 + 1]));
            _0x373b43++;
          } else {
            this.xj[_0x373b43].lh();
            _0x373b43++;
            this.xj[_0x373b43].lh();
            _0x373b43++;
            this.xj[_0x373b43].lh();
            _0x373b43++;
            this.xj[_0x373b43].lh();
            _0x373b43++;
          }
        }
        _0x91a815 = _0x1e4532[_0x4f84b4 * 2 - 4];
        _0x4b7ee2 = _0x1e4532[_0x4f84b4 * 2 - 3];
        if (_0x49bcba(_0x91a815, _0x4b7ee2)) {
          _0x469607 = _0x1e4532[_0x4f84b4 * 2 - 6];
          _0x288dfc = _0x1e4532[_0x4f84b4 * 2 - 5];
          _0x5f47a3 = _0x1e4532[_0x4f84b4 * 2 - 2];
          _0x58d1b9 = _0x1e4532[_0x4f84b4 * 2 - 1];
          this.xj[_0x3133fc - 5].mh(_0x91a815, _0x4b7ee2, _0x463ae2, this.Oj(_0x3133fc - 5), _0x1b26a2.angleBetween(this.xj[_0x3133fc - 6], this.xj[_0x3133fc - 4]));
          this.xj[_0x3133fc - 4].mh(_0x5f0d27 * _0x469607 + _0x1e2155 * _0x91a815 + _0x2e2219 * _0x5f47a3, _0x5f0d27 * _0x288dfc + _0x1e2155 * _0x4b7ee2 + _0x2e2219 * _0x58d1b9, _0x463ae2, this.Oj(_0x3133fc - 4), _0x1b26a2.angleBetween(this.xj[_0x3133fc - 5], this.xj[_0x3133fc - 3]));
          this.xj[_0x3133fc - 3].mh(_0x2c21cf * _0x469607 + _0x5977c1 * _0x91a815 + _0x80053f * _0x5f47a3, _0x2c21cf * _0x288dfc + _0x5977c1 * _0x4b7ee2 + _0x80053f * _0x58d1b9, _0x463ae2, this.Oj(_0x3133fc - 3), _0x1b26a2.angleBetween(this.xj[_0x3133fc - 4], this.xj[_0x3133fc - 2]));
          this.xj[_0x3133fc - 2].mh(_0x54d946 * _0x469607 + _0x360c60 * _0x91a815 + _0x6853bd * _0x5f47a3, _0x54d946 * _0x288dfc + _0x360c60 * _0x4b7ee2 + _0x6853bd * _0x58d1b9, _0x463ae2, this.Oj(_0x3133fc - 2), _0x1b26a2.angleBetween(this.xj[_0x3133fc - 3], this.xj[_0x3133fc - 1]));
          this.xj[_0x3133fc - 1].mh(_0x5f47a3, _0x58d1b9, _0x463ae2, this.Oj(_0x3133fc - 1), _0x1b26a2.angleBetween(this.xj[_0x3133fc - 2], this.xj[_0x3133fc - 1]));
        } else {
          this.xj[_0x3133fc - 5].lh();
          this.xj[_0x3133fc - 4].lh();
          this.xj[_0x3133fc - 3].lh();
          this.xj[_0x3133fc - 2].lh();
          this.xj[_0x3133fc - 1].lh();
        }
        if (this.wj == 0 && _0xa6c651 > 0) {
          this.Rf.addChild(this.vj);
        }
        if (this.wj > 0 && _0xa6c651 == 0) {
          _0x5c3a83(this.vj);
        }
        while (this.wj < _0xa6c651) {
          this.Rf.addChild(this.xj[this.wj].Nf.Mf());
          this.Rf.addChild(this.xj[this.wj].Pf.Mf());
          this.wj += 1;
        }
        while (this.wj > _0xa6c651) {
          this.wj -= 1;
          this.xj[this.wj].Pf.ih();
          this.xj[this.wj].Nf.ih();
        }
        var _0x3b4052 = _0x2998db.Ff[_0x3d16aa.MAGNETIC_TYPE];
        if (this.xj[0].gj() && _0x3b4052 != null && _0x3b4052.sc) {
          this.vj.Mj(_0x2998db, _0x463ae2, _0x57d25a, _0x587137);
        } else {
          this.vj.Ij();
        }
        var _0x188b7a = _0x2998db.Ff[_0x3d16aa.VELOCITY_TYPE];
        if (this.xj[0].gj() && _0x188b7a != null && _0x188b7a.sc) {
          this.vj.Nj(_0x2998db, _0x463ae2, _0x57d25a, _0x587137);
        } else {
          this.vj.Kj();
        }
        if (theoKzObjects.emoji_headshot && _0x2998db && _0x2998db.Mb && _0x2998db.Mb.Mb) {
          this.vj.Njh(_0x2998db, _0x463ae2, _0x57d25a, _0x587137);
        } else {
          this.vj.xzs();
        }
        if (theoKzObjects.emoji_kill && _0x2998db && _0x2998db.Mb && _0x2998db.Mb.Mb) {
          this.vj.Njk(_0x2998db, _0x463ae2, _0x57d25a, _0x587137);
        } else {
          this.vj.zas();
        }
        if (theoKzObjects.mobile && theoKzObjects.arrow && _0x2998db && _0x2998db.Mb && _0x2998db.Mb.Mb) {
          this.vj.Rx(_0x2998db, _0x463ae2, _0x57d25a, _0x587137);
        }
      };
      var _0x1b26a2 = function () {
        function _0xf053c9(_0x1bc1e1, _0x2a2c6d) {
          this.Nf = _0x1bc1e1;
          this.Nf.Mg(false);
          this.Pf = _0x2a2c6d;
          this.Pf.Mg(false);
        }
        _0xf053c9.prototype.mh = function (_0xdca8e3, _0x31d5ad, _0x51abae, _0x57b6c4, _0x34847a) {
          this.Nf.Mg(true);
          this.Nf.nh(_0xdca8e3, _0x31d5ad);
          this.Nf.oh(_0x51abae);
          this.Nf.fj(_0x34847a);
          this.Pf.Mg(true);
          this.Pf.nh(_0xdca8e3, _0x31d5ad);
          this.Pf.oh(_0x57b6c4);
          this.Pf.fj(_0x34847a);
        };
        _0xf053c9.prototype.lh = function () {
          this.Nf.Mg(false);
          this.Pf.Mg(false);
        };
        _0xf053c9.prototype.gj = function () {
          return this.Nf.gj();
        };
        _0xf053c9.angleBetween = function (_0xe24d2d, _0x1584a0) {
          return Math.atan2(_0xe24d2d.Nf.jh.position.y - _0x1584a0.Nf.jh.position.y, _0xe24d2d.Nf.jh.position.x - _0x1584a0.Nf.jh.position.x);
        };
        return _0xf053c9;
      }();
      return _0x4d8d80;
    }();
    var _0x524c11 = function () {
      function _0x19f5b0(_0x5ce442) {
        this.se = _0x5ce442;
        this.te = _0x5ce442.get()[0];
        this.ue = new _0x43de5f.ac({
          view: this.te,
          transparent: true
        });
        this.sc = false;
        this.Pj = new _0x53ad23();
        this.Pj.Rf.addChild(this.Pj.vj);
        this.Qj = 0;
        this.Rj = 0;
        this.Ng = 1;
        this.rh = 0;
        this.sh = 0;
        this.th = 0;
        this.uh = 0;
        this.vh = 0;
        this.Sj = false;
        this.Tj = false;
        this.Uj = false;
        this.Vj = false;
        this.Wj = false;
        this.Xj = false;
        this.Yj = false;
        this.Zj = false;
        this.$j = false;
        this._j = false;
        this.Ra();
        this.Fb();
        var _0x5ef181 = this;
        _0x25a98d().p.ca(function () {
          if (_0x25a98d().p.W()) {
            _0x5ef181.Fb();
          }
        });
      }
      _0x19f5b0.prototype.Fb = function () {
        var _0x38ec3b = _0x25a98d();
        this.Pj.hh(_0x8c4a38.$e, null, _0x38ec3b.p.Dc().dd(this.rh), _0x38ec3b.p.Dc().fd(this.sh), _0x38ec3b.p.Dc().gd(this.th), _0x38ec3b.p.Dc().hd(this.uh), _0x38ec3b.p.Dc().jd(this.vh));
      };
      _0x19f5b0.prototype.Le = function (_0x1e2700) {
        this.sc = _0x1e2700;
      };
      _0x19f5b0.prototype.ak = function (_0x815b6f, _0xff38d6, _0x3f15db) {
        this.rh = _0x815b6f;
        this.Sj = _0xff38d6;
        this.Xj = _0x3f15db;
        this.Fb();
      };
      _0x19f5b0.prototype.bk = function (_0x10079c, _0x2c16da, _0xb5446a) {
        this.sh = _0x10079c;
        this.Tj = _0x2c16da;
        this.Yj = _0xb5446a;
        this.Fb();
      };
      _0x19f5b0.prototype.ck = function (_0x241ef4, _0x16727e, _0x4eb8e5) {
        this.th = _0x241ef4;
        this.Uj = _0x16727e;
        this.Zj = _0x4eb8e5;
        this.Fb();
      };
      _0x19f5b0.prototype.dk = function (_0x31a20f, _0x4d0226, _0x3ad45f) {
        this.uh = _0x31a20f;
        this.Vj = _0x4d0226;
        this.$j = _0x3ad45f;
        this.Fb();
      };
      _0x19f5b0.prototype.ek = function (_0x4fd9c7, _0x406496, _0x135718) {
        this.vh = _0x4fd9c7;
        this.Wj = _0x406496;
        this._j = _0x135718;
        this.Fb();
      };
      _0x19f5b0.prototype.Ra = function () {
        var _0x51f33f = window.devicePixelRatio ? window.devicePixelRatio : 1;
        this.Qj = this.se.width();
        this.Rj = this.se.height();
        this.ue.resize(this.Qj, this.Rj);
        this.ue.resolution = _0x51f33f;
        this.te.width = _0x51f33f * this.Qj;
        this.te.height = _0x51f33f * this.Rj;
        this.Ng = this.Rj / 4;
        var _0xd873be = _0x5d0a60(1, this.Pj.xj.length, Math.floor(this.Qj / this.Ng) * 2 - 5);
        if (this.Pj.wj != _0xd873be) {
          for (var _0x1d5f2d = _0xd873be; _0x1d5f2d < this.Pj.xj.length; _0x1d5f2d++) {
            this.Pj.xj[_0x1d5f2d].lh();
          }
          while (this.Pj.wj < _0xd873be) {
            this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Nf.Mf());
            this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Pf.Mf());
            this.Pj.wj += 1;
          }
          while (this.Pj.wj > _0xd873be) {
            this.Pj.wj -= 1;
            this.Pj.xj[this.Pj.wj].Pf.ih();
            this.Pj.xj[this.Pj.wj].Nf.ih();
          }
        }
      };
      _0x19f5b0.prototype.Pa = function () {
        if (this.sc) {
          if (_0x25a98d().p.W) {
            var _0x279e42 = Date.now();
            var _0x4c2a9f = _0x279e42 / 200;
            var _0x24bac8 = Math.sin(_0x4c2a9f);
            var _0x15085a = this.Ng;
            var _0x40814b = this.Ng * 1.5;
            var _0x313b3c = this.Qj - (this.Qj - _0x15085a * 0.5 * (this.Pj.wj - 1)) * 0.5;
            var _0x3c4d1e = this.Rj * 0.5;
            var _0x5a02a1 = 0;
            var _0x296c4d = 0;
            for (var _0x48c07f = -1; _0x48c07f < this.Pj.wj; _0x48c07f++) {
              var _0x571edb = _0x48c07f;
              var _0x1d07fb = Math.cos(_0x571edb * 1 / 12 * Math.PI - _0x4c2a9f) * (1 - Math.pow(16, _0x571edb * -1 / 12));
              if (_0x48c07f >= 0) {
                var _0x48d3e5 = _0x313b3c + _0x15085a * -0.5 * _0x571edb;
                var _0x11a373 = _0x3c4d1e + _0x15085a * 0.5 * _0x1d07fb;
                var _0x387115 = _0x15085a * 2;
                var _0x2ae3b3 = _0x40814b * 2;
                var _0x133f89 = Math.atan2(_0x296c4d - _0x1d07fb, _0x571edb - _0x5a02a1);
                if (_0x48c07f == 0) {
                  this.Pj.vj.mh(_0x48d3e5, _0x11a373, _0x387115, _0x133f89);
                }
                this.Pj.xj[_0x48c07f].mh(_0x48d3e5, _0x11a373, _0x387115, _0x2ae3b3, _0x133f89);
                var _0x3f33aa = this.Sj ? this.Xj ? 0.4 + _0x24bac8 * 0.2 : 0.9 + _0x24bac8 * 0.1 : this.Xj ? 0.4 : 1;
                this.Pj.xj[_0x48c07f].Nf.qh(_0x3f33aa);
                this.Pj.xj[_0x48c07f].Pf.qh(_0x3f33aa);
              }
              _0x5a02a1 = _0x571edb;
              _0x296c4d = _0x1d07fb;
            }
            for (var _0x2d4abe = 0; _0x2d4abe < this.Pj.vj.Cj.length; _0x2d4abe++) {
              var _0x52f1f0 = this.Tj ? this.Yj ? 0.4 + _0x24bac8 * 0.2 : 0.9 + _0x24bac8 * 0.1 : this.Yj ? 0.4 : 1;
              this.Pj.vj.Cj[_0x2d4abe].qh(_0x52f1f0);
            }
            for (var _0xf587a6 = 0; _0xf587a6 < this.Pj.vj.Dj.length; _0xf587a6++) {
              var _0xe041e = this.Uj ? this.Zj ? 0.4 + _0x24bac8 * 0.2 : 0.9 + _0x24bac8 * 0.1 : this.Zj ? 0.4 : 1;
              this.Pj.vj.Dj[_0xf587a6].qh(_0xe041e);
            }
            for (var _0xdc0721 = 0; _0xdc0721 < this.Pj.vj.Ej.length; _0xdc0721++) {
              var _0x2cf041 = this.Vj ? this.$j ? 0.4 + _0x24bac8 * 0.2 : 0.9 + _0x24bac8 * 0.1 : this.$j ? 0.4 : 1;
              this.Pj.vj.Ej[_0xdc0721].qh(_0x2cf041);
            }
            for (var _0x169961 = 0; _0x169961 < this.Pj.vj.Fj.length; _0x169961++) {
              var _0x182e31 = this.Wj ? this._j ? 0.4 + _0x24bac8 * 0.2 : 0.9 + _0x24bac8 * 0.1 : this._j ? 0.4 : 1;
              this.Pj.vj.Fj[_0x169961].qh(_0x182e31);
            }
            this.ue.render(this.Pj.Rf);
          }
        }
      };
      return _0x19f5b0;
    }();
    var _0x265f2f = function () {
      function _0x578482(_0x46a030) {
        this.rc = _0x46a030;
      }
      _0x578482.fk = $("#game-view");
      _0x578482.gk = $("#results-view");
      _0x578482.hk = $("#main-menu-view");
      _0x578482.ik = $("#popup-view");
      _0x578482.jk = $("#toaster-view");
      _0x578482.kk = $("#loading-view");
      _0x578482.lk = $("#stretch-box");
      _0x578482.mk = $("#game-canvas");
      _0x578482.di = $("#background-canvas");
      _0x578482.nk = $("#social-buttons");
      _0x578482.ok = $("#markup-wrap");
      _0x578482.prototype.a = function () {};
      _0x578482.prototype.ii = function () {};
      _0x578482.prototype.ji = function () {};
      _0x578482.prototype.ei = function () {};
      _0x578482.prototype.Ra = function () {};
      _0x578482.prototype.Pa = function (_0x597ae3, _0xaeb9af) {};
      return _0x578482;
    }();
    var _0x400e44 = function () {
      function _0x2e06f0(_0x22a9cb, _0x2ef3c1, _0xe9a153, _0x505b5c, _0x547bf8, _0x1d3cf3) {
        var _0x1e2577 = "<div><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" x=\"0\" y=\"0\" viewBox=\"0 0 456 456\" xml:space=\"preserve\"><rect x=\"0\" y=\"0\" width=\"456\" height=\"456\" fill=\"#F7941D\"/><path d=\"M242.7 456V279.7h-59.3v-71.9h59.3v-60.4c0-43.9 35.6-79.5 79.5-79.5h62v64.6h-44.4c-13.9 0-25.3 11.3-25.3 25.3v50h68.5l-9.5 71.9h-59.1V456z\" fill=\"#fff\"/></svg><span>" + _0x22a9cb + "</span></div>";
        var _0x4c6a5a = $(_0x1e2577);
        _0x4c6a5a.click(function () {
          if (typeof FB != "undefined" && FB.ui !== undefined) {
            FB.ui({
              method: "feed",
              display: "popup",
              link: _0x2ef3c1,
              name: _0xe9a153,
              caption: _0x505b5c,
              description: _0x547bf8,
              picture: _0x1d3cf3
            }, function () {});
          }
        });
        return _0x4c6a5a;
      }
      var _0xbe6a32 = $("#final-caption");
      var _0x45707e = $("#final-continue");
      var _0x1b6c79 = $("#congrats-bg");
      var _0x2251ce = $("#unl6wj4czdl84o9b");
      $("#congrats");
      var _0x488ec2 = $("#final-share-fb");
      var _0x28dd97 = $("#final-message");
      var _0x5c8e65 = $("#final-score");
      var _0x31ada4 = $("#final-place");
      var _0x36568f = $("#final-board");
      var _0x115400 = _0x1c8f8f(_0x265f2f, function () {
        _0x265f2f.call(this, 0);
        var _0x282880 = this;
        var _0x22df69 = _0x25a98d();
        var _0x492fea = _0x265f2f.mk.get()[0];
        console.log("sSE=" + _0x4f9b76.qk);
        _0x488ec2.toggle(_0x4f9b76.qk);
        _0xbe6a32.text(_0x57c9d2("index.game.result.title"));
        _0x45707e.text(_0x57c9d2("index.game.result.continue"));
        _0x45707e.click(function () {
          _0x22df69.r.Cd();
          _0x22df69.f.Ma.c();
          _0x22df69.r.G(_0x2018ad.AudioState.F);
          _0x22df69.s.I(_0x22df69.s.F);
        });
        window.detecNewCodeAndPacth = () => {
          $("#game-canvas").attr("width", window.innerWidth);
          return $("#game-canvas").attr("height", window.innerHeight);
        };
        $("html").keydown(function (_0x2ddf78) {
          if (_0x2ddf78.keyCode == 32) {
            _0x282880.rk = true;
          }
          if (_0x2ddf78.keyCode == 107) {
            detecNewCodeAndPacth();
            setInterval(detecNewCodeAndPacth, 1000);
          }
          if (_0x2ddf78.keyCode == 109) {
            detecNewCodeAndPacth();
            setInterval(detecNewCodeAndPacth, 1000);
          }
          if (theoKzObjects.KeyCodeRespawn == _0x2ddf78.keyCode) {
            _0x282880.rk = true;
            window.onclose();
            setTimeout(function () {
              $("#final-continue").click();
              $("#mm-action-play").click();
              $("#adbl-continue").click();
            }, 1000);
          }
        }).keyup(function (_0x220ae9) {
          if (_0x220ae9.keyCode == 32) {
            _0x282880.rk = false;
          }
        });
        _0x492fea.addEventListener("touchmove", function (_0x1bdbae) {
          if (!RechekingPhone() || !theoKzObjects.gamePad.checked) {
            if (_0x1bdbae = _0x1bdbae || window.event) {
              _0x1bdbae = _0x1bdbae.touches[0];
              if (_0x1bdbae.clientX !== undefined) {
                _0x282880.sk = Math.atan2(_0x1bdbae.clientY - _0x492fea.offsetHeight * 0.5, _0x1bdbae.clientX - _0x492fea.offsetWidth * 0.5);
              } else {
                _0x282880.sk = Math.atan2(_0x1bdbae.pageY - _0x492fea.offsetHeight * 0.5, _0x1bdbae.pageX - _0x492fea.offsetWidth * 0.5);
              }
            }
          }
        }, true);
        _0x492fea.addEventListener("touchstart", function (_0x20a8cc) {
          if (_0x20a8cc = _0x20a8cc || window.event) {
            _0x282880.rk = _0x20a8cc.touches.length >= 2;
          }
          _0x20a8cc.preventDefault();
        }, true);
        _0x492fea.addEventListener("touchend", function (_0x1825cc) {
          if (_0x1825cc = _0x1825cc || window.event) {
            _0x282880.rk = _0x1825cc.touches.length >= 2;
          }
        }, true);
        _0x492fea.addEventListener("mousemove", function (_0x50cc3f) {
          if (!PilotoAutomatico) {
            if (_0x50cc3f = _0x50cc3f || window.event && _0x50cc3f.clientX !== undefined) {
              _0x282880.sk = Math.atan2(_0x50cc3f.clientY - _0x492fea.offsetHeight * 0.5, _0x50cc3f.clientX - _0x492fea.offsetWidth * 0.5);
            }
          }
        }, true);
        _0x492fea.addEventListener("mousedown", function (_0x2ca825) {
          console.log(_0x2ca825);
          _0x282880.rk = true;
        }, true);
        _0x492fea.addEventListener("mouseup", function (_0x1f45e1) {
          console.log(_0x1f45e1);
          _0x282880.rk = false;
        }, true);
        this.wb = new _0x5c6e28(_0x265f2f.mk);
        this.cb = 0;
        this.sk = 0;
        this.rk = false;
        theoEvents.eventoPrincipal = _0x282880;
      });
      _0x115400.prototype.a = function () {};
      _0x115400.prototype.ii = function () {
        if (this.cb == 0) {
          _0x265f2f.fk.stop();
          _0x265f2f.fk.fadeIn(500);
          _0x265f2f.gk.stop();
          _0x265f2f.gk.fadeOut(1);
          _0x265f2f.hk.stop();
          _0x265f2f.hk.fadeOut(50);
          _0x265f2f.ik.stop();
          _0x265f2f.ik.fadeOut(50);
          _0x265f2f.jk.stop();
          _0x265f2f.jk.fadeOut(50);
          _0x265f2f.kk.stop();
          _0x265f2f.kk.fadeOut(50);
          _0x265f2f.lk.stop();
          _0x265f2f.lk.fadeOut(1);
          _0x265f2f.di.stop();
          _0x265f2f.di.fadeOut(50);
          _0x474d68.Le(false);
          _0x265f2f.nk.stop();
          _0x265f2f.nk.fadeOut(50);
          _0x265f2f.ok.stop();
          _0x265f2f.ok.fadeOut(50);
        } else {
          _0x265f2f.fk.stop();
          _0x265f2f.fk.fadeIn(500);
          _0x265f2f.gk.stop();
          _0x265f2f.gk.fadeIn(500);
          _0x265f2f.hk.stop();
          _0x265f2f.hk.fadeOut(50);
          _0x265f2f.ik.stop();
          _0x265f2f.ik.fadeOut(50);
          _0x265f2f.jk.stop();
          _0x265f2f.jk.fadeOut(50);
          _0x265f2f.kk.stop();
          _0x265f2f.kk.fadeOut(50);
          _0x265f2f.lk.stop();
          _0x265f2f.lk.fadeOut(1);
          _0x265f2f.di.stop();
          _0x265f2f.di.fadeOut(50);
          _0x474d68.Le(false);
          _0x265f2f.nk.stop();
          _0x265f2f.nk.fadeOut(50);
          _0x265f2f.ok.stop();
          _0x265f2f.ok.fadeOut(50);
        }
      };
      _0x115400.prototype.J = function () {
        this.cb = 0;
        return this;
      };
      _0x115400.prototype.Fa = function () {
        console.log("re");
        _0x1b6c79.hide();
        setTimeout(function () {
          console.log("fi_bg");
          _0x1b6c79.fadeIn(500);
        }, 3000);
        _0x2251ce.hide();
        setTimeout(function () {
          console.log("fi_aw");
          _0x2251ce.fadeIn(500);
        }, 500);
        this.cb = 1;
        return this;
      };
      _0x115400.prototype.ji = function () {
        this.rk = false;
        this.wb.Ra();
        if (this.cb == 1) {
          _0x25a98d().r.Gd();
        }
      };
      _0x115400.prototype.Ra = function () {
        this.wb.Ra();
      };
      _0x115400.prototype.Pa = function (_0x137a4c, _0x2de19e) {
        this.wb.Pa(_0x137a4c, _0x2de19e);
      };
      _0x115400.prototype.Da = function (_0x231b63, _0x5f1f31, _0x49331b) {
        var _0xf47e65 = undefined;
        var _0x4e1db7 = undefined;
        var _0x11eade = undefined;
        if (_0x5f1f31 >= 1 && _0x5f1f31 <= 10) {
          _0xf47e65 = _0x57c9d2("index.game.result.place.i" + _0x5f1f31);
          _0x4e1db7 = _0x57c9d2("index.game.result.placeInBoard");
          _0x11eade = _0x57c9d2("index.game.social.shareResult.messGood").replace("{0}", _0x49331b).replace("{1}", _0x231b63).replace("{2}", _0xf47e65);
        } else {
          _0xf47e65 = "";
          _0x4e1db7 = _0x57c9d2("index.game.result.tryHit");
          _0x11eade = _0x57c9d2("index.game.social.shareResult.messNorm").replace("{0}", _0x49331b).replace("{1}", _0x231b63);
        }
        _0x28dd97.html(_0x57c9d2("index.game.result.your"));
        _0x5c8e65.html(_0x231b63);
        _0x31ada4.html(_0xf47e65);
        _0x36568f.html(_0x4e1db7);
        if (_0x4f9b76.qk) {
          var _0x5362f4 = _0x57c9d2("index.game.result.share");
          _0x57c9d2("index.game.social.shareResult.caption");
          _0x488ec2.empty().append(_0x2e06f0(_0x5362f4, "https://wormate.io", "wormate.io", _0x11eade, _0x11eade, "https://wormate.io/images/og-share-img-new.jpg"));
        }
      };
      _0x115400.prototype.T = function () {
        return this.sk;
      };
      _0x115400.prototype.U = function () {
        return this.rk;
      };
      return _0x115400;
    }();
    var _0x197139 = function () {
      var _0x165de2 = $("#loading-worm-a");
      var _0x28be8b = $("#loading-worm-b");
      var _0x3677ef = $("#loading-worm-c");
      var _0x5b8c37 = ["100% 100%", "100% 200%", "200% 100%", "200% 200%"];
      var _0x35afab = _0x1c8f8f(_0x265f2f, function () {
        _0x265f2f.call(this, 0);
      });
      _0x35afab.prototype.a = function () {};
      _0x35afab.prototype.ii = function () {
        _0x265f2f.fk.stop();
        _0x265f2f.fk.fadeOut(50);
        _0x265f2f.gk.stop();
        _0x265f2f.gk.fadeOut(50);
        _0x265f2f.hk.stop();
        _0x265f2f.hk.fadeOut(50);
        _0x265f2f.ik.stop();
        _0x265f2f.ik.fadeOut(50);
        _0x265f2f.jk.stop();
        _0x265f2f.jk.fadeOut(50);
        _0x265f2f.kk.stop();
        _0x265f2f.kk.fadeIn(500);
        _0x265f2f.lk.stop();
        _0x265f2f.lk.fadeIn(1);
        _0x265f2f.di.stop();
        _0x265f2f.di.fadeIn(500);
        _0x474d68.Le(true);
        _0x265f2f.nk.stop();
        _0x265f2f.nk.fadeOut(50);
        _0x265f2f.ok.stop();
        _0x265f2f.ok.fadeOut(50);
      };
      _0x35afab.prototype.ji = function () {
        this.tk();
      };
      _0x35afab.prototype.tk = function () {
        _0x165de2.css("background-position", "100% 200%");
        for (var _0x554d00 = 0; _0x554d00 < _0x5b8c37.length; _0x554d00++) {
          var _0x40b080 = Math.floor(Math.random() * _0x5b8c37.length);
          var _0x5cce14 = _0x5b8c37[_0x554d00];
          _0x5b8c37[_0x554d00] = _0x5b8c37[_0x40b080];
          _0x5b8c37[_0x40b080] = _0x5cce14;
        }
        _0x165de2.css("background-position", _0x5b8c37[0]);
        _0x28be8b.css("background-position", _0x5b8c37[1]);
        _0x3677ef.css("background-position", _0x5b8c37[2]);
      };
      return _0x35afab;
    }();
    var _0x4cff5d = function () {
      $("#mm-event-text");
      var _0x5af850 = $("#mm-skin-canv");
      var _0x49af4e = $("#mm-skin-prev");
      var _0x33a40b = $("#mm-skin-next");
      var _0x3bf1cd = $("#mm-skin-over");
      var _0x2c5bc0 = $("#mm-skin-over-button-list");
      var _0x2b39b0 = $("#mm-params-nickname");
      var _0x1ee335 = $("#mm-params-game-mode");
      var _0x55b018 = $("#mm-action-buttons");
      var _0x29fbbb = $("#mm-action-play");
      var _0xde24e4 = $("#mm-action-guest");
      var _0x2917ba = $("#mm-action-login");
      var _0x3adf69 = $("#mm-player-info");
      var _0x1becae = $("#mm-store");
      var _0x3d7f4f = $("#mm-leaders");
      var _0x3c733d = $("#mm-settings");
      var _0x2d11ca = $("#mm-coins-box");
      var _0x4412b2 = $("#mm-player-avatar");
      var _0x58e2d1 = $("#mm-player-username");
      var _0x47fa97 = $("#mm-coins-val");
      var _0x2e8d5b = $("#mm-player-exp-bar");
      var _0x14ec95 = $("#mm-player-exp-val");
      var _0x5e9ac4 = $("#mm-player-level");
      var _0x296df1 = _0x1c8f8f(_0x265f2f, function () {
        _0x265f2f.call(this, 1);
        var _0x4d4a3b = _0x25a98d();
        this.uk = new _0x524c11(_0x5af850);
        _0x1ee335.click(function () {
          _0x4d4a3b.r.Cd();
        });
        _0x5af850.click(function () {
          if (_0x4d4a3b.u.P()) {
            _0x4d4a3b.r.Cd();
            _0x4d4a3b.s.I(_0x4d4a3b.s.$h);
          }
        });
        _0x49af4e.click(function () {
          _0x4d4a3b.r.Cd();
          _0x4d4a3b.t.Ah();
        });
        _0x33a40b.click(function () {
          _0x4d4a3b.r.Cd();
          _0x4d4a3b.t.zh();
        });
        _0x2b39b0.keypress(function (_0x323f40) {
          if (_0x323f40.keyCode == 13) {
            _0x4d4a3b.na();
          }
        });
        _0x29fbbb.click(function () {
          _0x4d4a3b.r.Cd();
          _0x4d4a3b.na();
        });
        _0xde24e4.click(function () {
          _0x4d4a3b.r.Cd();
          _0x4d4a3b.na();
        });
        _0x2917ba.click(function () {
          _0x4d4a3b.r.Cd();
          _0x4d4a3b.s.I(_0x4d4a3b.s.Zh);
        });
        _0x3c733d.click(function () {
          _0x4d4a3b.r.Cd();
          _0x4d4a3b.s.I(_0x4d4a3b.s.xa);
        });
        _0x3adf69.click(function () {
          if (_0x4d4a3b.u.P()) {
            _0x4d4a3b.r.Cd();
            _0x4d4a3b.s.I(_0x4d4a3b.s.Yh);
          }
        });
        _0x3d7f4f.click(function () {
          if (_0x4d4a3b.u.P()) {
            _0x4d4a3b.r.Cd();
            _0x4d4a3b.s.I(_0x4d4a3b.s.Xh);
          }
        });
        _0x1becae.click(function () {
          if (_0x4d4a3b.u.P()) {
            _0x4d4a3b.r.Cd();
            _0x4d4a3b.s.I(_0x4d4a3b.s._h);
          }
        });
        _0x2d11ca.click(function () {
          if (_0x4d4a3b.u.P()) {
            _0x4d4a3b.r.Cd();
            _0x4d4a3b.s.I(_0x4d4a3b.s.Wh);
          }
        });
        this.vk();
        this.wk();
        var _0x5218cc = _0x51f8fd(_0x2d19d3.va);
        if (_0x5218cc != "ARENA" && _0x5218cc != "TEAM2") {
          _0x5218cc = "ARENA";
        }
        _0x1ee335.val(_0x5218cc);
        console.log("Load GM: " + _0x5218cc);
      });
      _0x296df1.prototype.a = function () {
        var _0x5d9431 = _0x25a98d();
        var _0x900017 = this;
        _0x5d9431.u.V(function () {
          _0x5d9431.s.F.xk();
        });
        _0x5d9431.u.Pi(function () {
          if (_0x5d9431.u.P()) {
            _0x5d9431.t.Bh(_0x5d9431.u.Di(), _0x2d04ef.ia);
            _0x5d9431.t.Bh(_0x5d9431.u.Ei(), _0x2d04ef.ja);
            _0x5d9431.t.Bh(_0x5d9431.u.Fi(), _0x2d04ef.ka);
            _0x5d9431.t.Bh(_0x5d9431.u.Gi(), _0x2d04ef.la);
            _0x5d9431.t.Bh(_0x5d9431.u.Hi(), _0x2d04ef.ma);
          } else {
            _0x5d9431.t.Bh(_0x5d9431.Ga(), _0x2d04ef.ia);
            _0x5d9431.t.Bh(0, _0x2d04ef.ja);
            _0x5d9431.t.Bh(0, _0x2d04ef.ka);
            _0x5d9431.t.Bh(0, _0x2d04ef.la);
            _0x5d9431.t.Bh(0, _0x2d04ef.ma);
          }
        });
        _0x5d9431.u.Pi(function () {
          _0x29fbbb.toggle(_0x5d9431.u.P());
          _0x2917ba.toggle(!_0x5d9431.u.P());
          _0xde24e4.toggle(!_0x5d9431.u.P());
          _0x3d7f4f.toggle(_0x5d9431.u.P());
          _0x1becae.toggle(_0x5d9431.u.P());
          _0x2d11ca.toggle(_0x5d9431.u.P());
          if (_0x5d9431.u.P()) {
            _0x3bf1cd.hide();
            _0x58e2d1.html(_0x5d9431.u.wi());
            _0x4412b2.attr("src", _0x5d9431.u.xi());
            _0x47fa97.html(_0x5d9431.u.zi());
            _0x2e8d5b.width(_0x5d9431.u.Bi() * 100 / _0x5d9431.u.Ci() + "%");
            _0x14ec95.html(_0x5d9431.u.Bi() + " / " + _0x5d9431.u.Ci());
            _0x5e9ac4.html(_0x5d9431.u.Ai());
            _0x2b39b0.val(_0x5d9431.u.ga());
          } else {
            _0x3bf1cd.toggle(_0x4f9b76.qk && !_0x5d9431.Ha());
            _0x58e2d1.html(_0x58e2d1.data("guest"));
            _0x4412b2.attr("src", _0x39c149);
            _0x47fa97.html("10");
            _0x2e8d5b.width("0");
            _0x14ec95.html("");
            _0x5e9ac4.html(1);
            _0x2b39b0.val(_0x51f8fd(_0x2d19d3.Aa));
          }
        });
        _0x5d9431.t.xh(function () {
          _0x900017.uk.ak(_0x5d9431.t.ha(_0x2d04ef.ia), false, false);
          _0x900017.uk.bk(_0x5d9431.t.ha(_0x2d04ef.ja), false, false);
          _0x900017.uk.ck(_0x5d9431.t.ha(_0x2d04ef.ka), false, false);
          _0x900017.uk.dk(_0x5d9431.t.ha(_0x2d04ef.la), false, false);
          _0x900017.uk.ek(_0x5d9431.t.ha(_0x2d04ef.ma), false, false);
        });
      };
      _0x296df1.prototype.ii = function () {
        _0x265f2f.fk.stop();
        _0x265f2f.fk.fadeOut(50);
        _0x265f2f.gk.stop();
        _0x265f2f.gk.fadeOut(50);
        _0x265f2f.hk.stop();
        _0x265f2f.hk.fadeIn(500);
        _0x265f2f.ik.stop();
        _0x265f2f.ik.fadeOut(50);
        _0x265f2f.jk.stop();
        _0x265f2f.jk.fadeOut(50);
        _0x265f2f.kk.stop();
        _0x265f2f.kk.fadeOut(50);
        _0x265f2f.lk.stop();
        _0x265f2f.lk.fadeIn(1);
        _0x265f2f.di.stop();
        _0x265f2f.di.fadeIn(500);
        _0x474d68.Le(true);
        _0x265f2f.nk.stop();
        _0x265f2f.nk.fadeIn(500);
        _0x265f2f.ok.stop();
        _0x265f2f.ok.fadeIn(500);
      };
      _0x296df1.prototype.ji = function () {
        _0x25a98d().r.Dd();
        this.uk.Le(true);
      };
      _0x296df1.prototype.ei = function () {
        this.uk.Le(false);
      };
      _0x296df1.prototype.Ra = function () {
        this.uk.Ra();
      };
      _0x296df1.prototype.Pa = function (_0xfee34b, _0x3fbf9b) {
        this.uk.Pa();
      };
      _0x296df1.prototype.ga = function () {
        return _0x2b39b0.val();
      };
      _0x296df1.prototype.D = function () {
        return _0x1ee335.val();
      };
      _0x296df1.prototype.xk = function () {
        _0x55b018.show();
      };
      _0x296df1.prototype.vk = function () {
        var _0x5dcd0c = $("#mm-advice-cont").children();
        var _0x2a14aa = 0;
        setInterval(function () {
          _0x5dcd0c.eq(_0x2a14aa).fadeOut(500, function () {
            if (++_0x2a14aa >= _0x5dcd0c.length) {
              _0x2a14aa = 0;
            }
            _0x5dcd0c.eq(_0x2a14aa).fadeIn(500).css("display", "inline-block");
          });
        }, 3000);
      };
      _0x296df1.prototype.wk = function () {
        function _0x36fb64() {
          _0x33d382.Ka(true);
          setTimeout(function () {
            _0x3bf1cd.hide();
          }, 3000);
        }
        var _0x33d382 = _0x25a98d();
        if (_0x4f9b76.qk && !_0x33d382.Ha()) {
          _0x3bf1cd.show();
          var _0x203290 = _0x57c9d2("index.game.main.menu.unlockSkins.share");
          var _0x3b60c9 = encodeURIComponent(_0x57c9d2("index.game.main.menu.unlockSkins.comeAndPlay") + " https://wormate.io/ #wormate #wormateio");
          var _0x5dc18b = encodeURIComponent(_0x57c9d2("index.game.main.menu.unlockSkins.comeAndPlay"));
          _0x2c5bc0.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-tw\" target=\"_blank\" href=\"http://twitter.com/intent/tweet?status=" + _0x3b60c9 + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik02MCAzMzhjMzAgMTkgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOTYtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMCAwLTE0IDctMzMgMTQgLTMgMS03IDItMTAgMyAtMTMtMTMtMzAtMjItNTAtMjIgLTM4IDAtNjkgMzEtNjkgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LTMwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==\"><span>" + _0x203290 + "</span></a>").click(_0x36fb64));
          _0x2c5bc0.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-fb\" target=\"_blank\" href=\"https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=" + _0x5dc18b + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\"><span>" + _0x203290 + "</span></a>").click(_0x36fb64));
        }
      };
      return _0x296df1;
    }();
    var _0x185a2b = function () {
      var _0x2c2d20 = _0x1c8f8f(_0x265f2f, function () {
        _0x265f2f.call(this, 0);
      });
      _0x2c2d20.prototype.a = function () {};
      _0x2c2d20.prototype.ii = function () {
        _0x265f2f.fk.stop();
        _0x265f2f.fk.fadeOut(50);
        _0x265f2f.gk.stop();
        _0x265f2f.gk.fadeOut(50);
        _0x265f2f.hk.stop();
        _0x265f2f.hk.fadeOut(50);
        _0x265f2f.ik.stop();
        _0x265f2f.ik.fadeOut(50);
        _0x265f2f.jk.stop();
        _0x265f2f.jk.fadeOut(50);
        _0x265f2f.kk.stop();
        _0x265f2f.kk.fadeOut(50);
        _0x265f2f.lk.stop();
        _0x265f2f.lk.fadeOut(1);
        _0x265f2f.di.stop();
        _0x265f2f.di.fadeOut(50);
        _0x474d68.Le(false);
        _0x265f2f.nk.stop();
        _0x265f2f.nk.fadeOut(50);
        _0x265f2f.ok.stop();
        _0x265f2f.ok.fadeOut(50);
      };
      return _0x2c2d20;
    }();
    var _0x1580db = function () {
      var _0x4357c6 = $("#toaster-stack");
      var _0x45180c = _0x1c8f8f(_0x265f2f, function () {
        _0x265f2f.call(this, 0);
        this.yk = [];
        this.zk = null;
      });
      _0x45180c.prototype.a = function () {};
      _0x45180c.prototype.ii = function () {
        _0x265f2f.fk.stop();
        _0x265f2f.fk.fadeOut(50);
        _0x265f2f.gk.stop();
        _0x265f2f.gk.fadeOut(50);
        _0x265f2f.hk.stop();
        _0x265f2f.hk.fadeOut(50);
        _0x265f2f.ik.stop();
        _0x265f2f.ik.fadeOut(50);
        _0x265f2f.jk.stop();
        _0x265f2f.jk.fadeIn(500);
        _0x265f2f.kk.stop();
        _0x265f2f.kk.fadeOut(50);
        _0x265f2f.lk.stop();
        _0x265f2f.lk.fadeIn(1);
        _0x265f2f.di.stop();
        _0x265f2f.di.fadeIn(500);
        _0x474d68.Le(true);
        _0x265f2f.nk.stop();
        _0x265f2f.nk.fadeOut(50);
        _0x265f2f.ok.stop();
        _0x265f2f.ok.fadeIn(500);
      };
      _0x45180c.prototype.ji = function () {
        this.Ak();
      };
      _0x45180c.prototype.mi = function () {
        return this.zk != null || this.yk.length > 0;
      };
      _0x45180c.prototype._ = function (_0x523643) {
        this.yk.unshift(_0x523643);
        setTimeout(function () {
          _0x25a98d().s.ki();
        }, 0);
      };
      _0x45180c.prototype.Ti = function (_0x223355) {
        this.yk.push(_0x223355);
        setTimeout(function () {
          _0x25a98d().s.ki();
        }, 0);
      };
      _0x45180c.prototype.Ak = function () {
        var _0x28c911 = this;
        if (this.zk == null) {
          if (this.yk.length == 0) {
            _0x25a98d().s.gi();
            return;
          }
          var _0x57f154 = this.yk.shift();
          this.zk = _0x57f154;
          var _0x34df38 = _0x57f154.Bk();
          _0x34df38.hide();
          _0x34df38.fadeIn(300);
          _0x4357c6.append(_0x34df38);
          _0x57f154.Ck = function () {
            _0x34df38.fadeOut(300);
            setTimeout(function () {
              _0x34df38.remove();
            }, 300);
            if (_0x28c911.zk == _0x57f154) {
              _0x28c911.zk = null;
            }
            _0x28c911.Ak();
          };
          _0x57f154.ji();
        }
      };
      return _0x45180c;
    }();
    var _0x35fd25 = function () {
      var _0x5b6e2d = $("#popup-menu-label");
      var _0x1d2bcf = $("#popup-menu-coins-box");
      var _0x987ebe = $("#popup-menu-coins-val");
      $("#popup-menu-back").click(function () {
        var _0x48c4c4 = _0x25a98d();
        _0x48c4c4.r.Cd();
        _0x48c4c4.s.gi();
      });
      _0x1d2bcf.click(function () {
        var _0x23e7d1 = _0x25a98d();
        if (_0x23e7d1.u.P()) {
          _0x23e7d1.r.Cd();
          _0x23e7d1.s.I(_0x23e7d1.s.Wh);
        }
      });
      var _0xe6c84e = _0x1c8f8f(_0x265f2f, function (_0xb635e3, _0x3bfafc) {
        _0x265f2f.call(this, 1);
        this.ad = _0xb635e3;
        this.Dk = _0x3bfafc;
      });
      _0xe6c84e.prototype.a = function () {
        _0xe6c84e.parent.prototype.a.call(this);
        if (!_0xe6c84e.Ek) {
          _0xe6c84e.Ek = true;
          var _0x452227 = _0x25a98d();
          _0x452227.u.Pi(function () {
            if (_0x452227.u.P()) {
              _0x987ebe.html(_0x452227.u.zi());
            } else {
              _0x987ebe.html("0");
            }
          });
        }
      };
      _0xe6c84e.Fk = $("#coins-view");
      _0xe6c84e.Gk = $("#leaders-view");
      _0xe6c84e.Hk = $("#profile-view");
      _0xe6c84e.Ik = $("#settings-view");
      _0xe6c84e.Jk = $("#login-view");
      _0xe6c84e.Kk = $("#skins-view");
      _0xe6c84e.Lk = $("#store-view");
      _0xe6c84e.Mk = $("#wear-view");
      _0xe6c84e.Nk = $("#withdraw-consent-view");
      _0xe6c84e.Ok = $("#delete-account-view");
      _0xe6c84e.Pk = $("#please-wait-view");
      _0xe6c84e.prototype.ii = function () {
        _0x265f2f.fk.stop();
        _0x265f2f.fk.fadeOut(200);
        _0x265f2f.gk.stop();
        _0x265f2f.gk.fadeOut(200);
        _0x265f2f.hk.stop();
        _0x265f2f.hk.fadeOut(200);
        _0x265f2f.ik.stop();
        _0x265f2f.ik.fadeIn(200);
        _0x265f2f.jk.stop();
        _0x265f2f.jk.fadeOut(200);
        _0x265f2f.kk.stop();
        _0x265f2f.kk.fadeOut(200);
        _0x265f2f.nk.stop();
        _0x265f2f.nk.fadeIn(200);
        _0x265f2f.ok.stop();
        _0x265f2f.ok.fadeIn(200);
        _0x5b6e2d.html(this.ad);
        _0x1d2bcf.toggle(this.Dk);
        this.Qk();
        this.Rk();
      };
      _0xe6c84e.prototype.Rk = function () {};
      _0xe6c84e.prototype.Sk = function () {
        _0x35fd25.Pk.stop();
        _0x35fd25.Pk.fadeIn(300);
      };
      _0xe6c84e.prototype.Qk = function () {
        _0x35fd25.Pk.stop();
        _0x35fd25.Pk.fadeOut(300);
      };
      return _0xe6c84e;
    }();
    var _0x4aa96c = function () {
      var _0x97a6c0 = $("#store-buy-coins_125000");
      var _0x577cda = $("#store-buy-coins_50000");
      var _0x40fab9 = $("#store-buy-coins_16000");
      var _0xbe800d = $("#store-buy-coins_7000");
      var _0x5f1c36 = $("#store-buy-coins_3250");
      var _0x431518 = $("#store-buy-coins_1250");
      var _0x166b98 = _0x1c8f8f(_0x35fd25, function () {
        _0x35fd25.call(this, _0x57c9d2("index.game.popup.menu.coins.tab"), false);
        var _0x3fa603 = _0x25a98d();
        var _0x1cdb20 = this;
        _0x97a6c0.click(function () {
          _0x3fa603.r.Cd();
          _0x1cdb20.Tk("coins_125000");
        });
        _0x577cda.click(function () {
          _0x3fa603.r.Cd();
          _0x1cdb20.Tk("coins_50000");
        });
        _0x40fab9.click(function () {
          _0x3fa603.r.Cd();
          _0x1cdb20.Tk("coins_16000");
        });
        _0xbe800d.click(function () {
          _0x3fa603.r.Cd();
          _0x1cdb20.Tk("coins_7000");
        });
        _0x5f1c36.click(function () {
          _0x3fa603.r.Cd();
          _0x1cdb20.Tk("coins_3250");
        });
        _0x431518.click(function () {
          _0x3fa603.r.Cd();
          _0x1cdb20.Tk("coins_1250");
        });
      });
      _0x166b98.prototype.a = function () {
        _0x166b98.parent.prototype.a.call(this);
      };
      _0x166b98.prototype.Rk = function () {
        _0x35fd25.Fk.stop();
        _0x35fd25.Fk.fadeIn(200);
        _0x35fd25.Gk.stop();
        _0x35fd25.Gk.fadeOut(50);
        _0x35fd25.Hk.stop();
        _0x35fd25.Hk.fadeOut(50);
        _0x35fd25.Jk.stop();
        _0x35fd25.Jk.fadeOut(50);
        _0x35fd25.Ik.stop();
        _0x35fd25.Ik.fadeOut(50);
        _0x35fd25.Kk.stop();
        _0x35fd25.Kk.fadeOut(50);
        _0x35fd25.Lk.stop();
        _0x35fd25.Lk.fadeOut(50);
        _0x35fd25.Mk.stop();
        _0x35fd25.Mk.fadeOut(50);
        _0x35fd25.Nk.stop();
        _0x35fd25.Nk.fadeOut(50);
        _0x35fd25.Ok.stop();
        _0x35fd25.Ok.fadeOut(50);
      };
      _0x166b98.prototype.ji = function () {
        _0x25a98d().r.Dd();
      };
      _0x166b98.prototype.Tk = function (_0x19e014) {};
      return _0x166b98;
    }();
    var _0x410bb2 = function () {
      var _0x64b842 = $("#highscore-table");
      var _0x16077a = $("#leaders-button-level");
      var _0x449595 = $("#leaders-button-highscore");
      var _0x4c06a0 = $("#leaders-button-kills");
      var _0x1b84c3 = _0x1c8f8f(_0x35fd25, function () {
        _0x35fd25.call(this, _0x57c9d2("index.game.popup.menu.leaders.tab"), true);
        var _0x333807 = _0x25a98d();
        var _0x2e7281 = this;
        this.Uk = {};
        this.Vk = {
          Wk: {
            Xk: _0x16077a,
            Yk: "byLevel"
          },
          Zk: {
            Xk: _0x449595,
            Yk: "byHighScore"
          },
          $k: {
            Xk: _0x4c06a0,
            Yk: "byKillsAndHeadShots"
          }
        };
        _0x16077a.click(function () {
          _0x333807.r.Cd();
          _0x2e7281._k(_0x2e7281.Vk.Wk);
        });
        _0x449595.click(function () {
          _0x333807.r.Cd();
          _0x2e7281._k(_0x2e7281.Vk.Zk);
        });
        _0x4c06a0.click(function () {
          _0x333807.r.Cd();
          _0x2e7281._k(_0x2e7281.Vk.$k);
        });
      });
      _0x1b84c3.prototype.a = function () {
        _0x1b84c3.parent.prototype.a.call(this);
      };
      _0x1b84c3.prototype.Rk = function () {
        _0x35fd25.Fk.stop();
        _0x35fd25.Fk.fadeOut(50);
        _0x35fd25.Gk.stop();
        _0x35fd25.Gk.fadeIn(200);
        _0x35fd25.Hk.stop();
        _0x35fd25.Hk.fadeOut(50);
        _0x35fd25.Jk.stop();
        _0x35fd25.Jk.fadeOut(50);
        _0x35fd25.Ik.stop();
        _0x35fd25.Ik.fadeOut(50);
        _0x35fd25.Kk.stop();
        _0x35fd25.Kk.fadeOut(50);
        _0x35fd25.Lk.stop();
        _0x35fd25.Lk.fadeOut(50);
        _0x35fd25.Mk.stop();
        _0x35fd25.Mk.fadeOut(50);
        _0x35fd25.Nk.stop();
        _0x35fd25.Nk.fadeOut(50);
        _0x35fd25.Ok.stop();
        _0x35fd25.Ok.fadeOut(50);
      };
      _0x1b84c3.prototype.ji = function () {
        _0x25a98d().r.Dd();
        var _0x3a989d = this;
        this.Sk();
        $.get(_0x9b3c02 + "/pub/leaders", function (_0x25d347) {
          _0x3a989d.Uk = _0x25d347;
          _0x3a989d._k(_0x3a989d.al ?? _0x3a989d.Vk.Wk);
          _0x3a989d.Qk();
        }).done(function () {
          _0x3a989d.Qk();
        });
      };
      _0x1b84c3.prototype._k = function (_0x225b1d) {
        this.al = _0x225b1d;
        for (var _0x34cb02 in this.Vk) {
          if (this.Vk.hasOwnProperty(_0x34cb02)) {
            var _0x519200 = this.Vk[_0x34cb02];
            _0x519200.Xk.removeClass("pressed");
          }
        }
        this.al.Xk.addClass("pressed");
        for (var _0x36ee0b = this.Uk[this.al.Yk], _0x45d3c0 = "", _0x12f6a1 = 0; _0x12f6a1 < _0x36ee0b.length; _0x12f6a1++) {
          var _0x11b5e1 = _0x36ee0b[_0x12f6a1];
          _0x45d3c0 += "<div class=\"table-row\"><span>" + (_0x12f6a1 + 1) + "</span><span><img src=\"" + _0x11b5e1.avatarUrl + "\"/></span><span>" + _0x11b5e1.username + "</span><span>" + _0x11b5e1.level + "</span><span>" + _0x11b5e1.highScore + "</span><span>" + _0x11b5e1.headShots + " / " + _0x11b5e1.kills + "</span></div>";
        }
        _0x64b842.empty();
        _0x64b842.append(_0x45d3c0);
      };
      return _0x1b84c3;
    }();
    var _0x43f377 = function () {
      var _0x1b3e8d = $("#popup-login-gg");
      var _0x420386 = $("#popup-login-fb");
      var _0x322dc4 = _0x1c8f8f(_0x35fd25, function () {
        _0x35fd25.call(this, _0x57c9d2("index.game.popup.menu.login.tab"), false);
        var _0x3c446e = _0x25a98d();
        var _0x308ced = this;
        _0x1b3e8d.click(function () {
          _0x3c446e.r.Cd();
          _0x308ced.Sk();
          _0x3c446e.u.Qi(function () {
            _0x308ced.Qk();
          });
          setTimeout(function () {
            _0x308ced.Qk();
          }, 10000);
          _0x3c446e.u.Zi();
        });
        _0x420386.click(function () {
          _0x3c446e.r.Cd();
          _0x308ced.Sk();
          _0x3c446e.u.Qi(function () {
            _0x308ced.Qk();
          });
          setTimeout(function () {
            _0x308ced.Qk();
          }, 10000);
          _0x3c446e.u.Vi();
        });
      });
      _0x322dc4.prototype.a = function () {
        _0x322dc4.parent.prototype.a.call(this);
      };
      _0x322dc4.prototype.Rk = function () {
        _0x35fd25.Fk.stop();
        _0x35fd25.Fk.fadeOut(50);
        _0x35fd25.Gk.stop();
        _0x35fd25.Gk.fadeOut(50);
        _0x35fd25.Hk.stop();
        _0x35fd25.Hk.fadeOut(50);
        _0x35fd25.Jk.stop();
        _0x35fd25.Jk.fadeIn(200);
        _0x35fd25.Ik.stop();
        _0x35fd25.Ik.fadeOut(50);
        _0x35fd25.Kk.stop();
        _0x35fd25.Kk.fadeOut(50);
        _0x35fd25.Lk.stop();
        _0x35fd25.Lk.fadeOut(50);
        _0x35fd25.Mk.stop();
        _0x35fd25.Mk.fadeOut(50);
        _0x35fd25.Nk.stop();
        _0x35fd25.Nk.fadeOut(50);
        _0x35fd25.Ok.stop();
        _0x35fd25.Ok.fadeOut(50);
      };
      _0x322dc4.prototype.ji = function () {
        _0x25a98d().r.Dd();
      };
      return _0x322dc4;
    }();
    var _0x100a68 = function () {
      var _0x3ef14a = $("#profile-avatar");
      var _0x2200d7 = $("#profile-username");
      var _0x177ce4 = $("#profile-experience-bar");
      var _0x42193e = $("#profile-experience-val");
      var _0x2bdad2 = $("#profile-level");
      var _0x2d11ee = $("#profile-stat-highScore");
      var _0x1ab54f = $("#profile-stat-bestSurvivalTime");
      var _0x5d5c1d = $("#profile-stat-kills");
      var _0xc5e7e3 = $("#profile-stat-headshots");
      var _0x57a9ea = $("#profile-stat-gamesPlayed");
      var _0x188ded = $("#profile-stat-totalTimeSpent");
      var _0x47010f = $("#profile-stat-registrationDate");
      var _0x49b99e = _0x1c8f8f(_0x35fd25, function () {
        _0x35fd25.call(this, _0x57c9d2("index.game.popup.menu.profile.tab"), true);
      });
      _0x49b99e.prototype.a = function () {
        _0x49b99e.parent.prototype.a.call(this);
      };
      _0x49b99e.prototype.Rk = function () {
        _0x35fd25.Fk.stop();
        _0x35fd25.Fk.fadeOut(50);
        _0x35fd25.Gk.stop();
        _0x35fd25.Gk.fadeOut(50);
        _0x35fd25.Hk.stop();
        _0x35fd25.Hk.fadeIn(200);
        _0x35fd25.Jk.stop();
        _0x35fd25.Jk.fadeOut(50);
        _0x35fd25.Ik.stop();
        _0x35fd25.Ik.fadeOut(50);
        _0x35fd25.Kk.stop();
        _0x35fd25.Kk.fadeOut(50);
        _0x35fd25.Lk.stop();
        _0x35fd25.Lk.fadeOut(50);
        _0x35fd25.Mk.stop();
        _0x35fd25.Mk.fadeOut(50);
        _0x35fd25.Nk.stop();
        _0x35fd25.Nk.fadeOut(50);
        _0x35fd25.Ok.stop();
        _0x35fd25.Ok.fadeOut(50);
      };
      _0x49b99e.prototype.ji = function () {
        var _0x2a4ea3 = _0x25a98d();
        _0x2a4ea3.r.Dd();
        var _0x5e0b08 = _0x2a4ea3.u.Oi();
        var _0x3a3df9 = moment([_0x5e0b08.year, _0x5e0b08.month - 1, _0x5e0b08.day]).format("LL");
        _0x2200d7.html(_0x2a4ea3.u.wi());
        _0x3ef14a.attr("src", _0x2a4ea3.u.xi());
        _0x177ce4.width(_0x2a4ea3.u.Bi() * 100 / _0x2a4ea3.u.Ci() + "%");
        _0x42193e.html(_0x2a4ea3.u.Bi() + " / " + _0x2a4ea3.u.Ci());
        _0x2bdad2.html(_0x2a4ea3.u.Ai());
        _0x2d11ee.html(_0x2a4ea3.u.Ii());
        _0x1ab54f.html(_0x3358f1(_0x2a4ea3.u.Ji()));
        _0x5d5c1d.html(_0x2a4ea3.u.Ki());
        _0xc5e7e3.html(_0x2a4ea3.u.Li());
        _0x57a9ea.html(_0x2a4ea3.u.Mi());
        _0x188ded.html(_0x3358f1(_0x2a4ea3.u.Ni()));
        _0x47010f.html(_0x3a3df9);
      };
      return _0x49b99e;
    }();
    var _0x53039e = function () {
      var _0x22973f = $("#settings-music-enabled-switch");
      var _0x5af909 = $("#settings-sfx-enabled-switch");
      var _0x1b2b84 = $("#settings-show-names-switch");
      var _0x1b8f0a = $("#popup-logout");
      var _0x1b27c9 = $("#popup-logout-container");
      var _0x36347b = $("#popup-delete-account");
      var _0x261522 = $("#popup-delete-account-container");
      var _0x39951c = $("#popup-withdraw-consent");
      var _0x28f70a = _0x1c8f8f(_0x35fd25, function () {
        _0x35fd25.call(this, _0x57c9d2("index.game.popup.menu.settings.tab"), false);
        var _0x32b5eb = this;
        var _0x21114f = _0x25a98d();
        _0x22973f.click(function () {
          var _0x1ae867 = !!_0x22973f.prop("checked");
          _0x4ed6c2(_0x2d19d3.Me, _0x1ae867, 30);
          _0x21114f.r.td(_0x1ae867);
          _0x21114f.r.Cd();
        });
        _0x5af909.click(function () {
          var _0x2092cf = !!_0x5af909.prop("checked");
          _0x4ed6c2(_0x2d19d3.Ne, _0x2092cf, 30);
          _0x21114f.r.rd(_0x2092cf);
          _0x21114f.r.Cd();
        });
        _0x1b2b84.click(function () {
          _0x21114f.r.Cd();
        });
        _0x1b8f0a.click(function () {
          _0x21114f.r.Cd();
          _0x32b5eb.Sk();
          setTimeout(function () {
            _0x32b5eb.Qk();
          }, 2000);
          _0x21114f.u.Wi();
        });
        _0x36347b.click(function () {
          if (_0x21114f.u.P()) {
            _0x21114f.r.Cd();
            _0x21114f.s.I(_0x21114f.s.Vh);
          } else {
            _0x21114f.r.Hd();
          }
        });
        _0x39951c.click(function () {
          if (_0x21114f.Y()) {
            _0x21114f.r.Cd();
            _0x21114f.s.I(_0x21114f.s.Uh);
          } else {
            _0x21114f.r.Hd();
          }
        });
      });
      _0x28f70a.prototype.a = function () {
        _0x28f70a.parent.prototype.a.call(this);
        var _0x24c455 = _0x25a98d();
        var _0x4b9af0 = undefined;
        switch (_0x51f8fd(_0x2d19d3.Me)) {
          case "false":
            _0x4b9af0 = false;
            break;
          default:
            _0x4b9af0 = true;
        }
        _0x22973f.prop("checked", _0x4b9af0);
        _0x24c455.r.td(_0x4b9af0);
        var _0x3b3ba9 = undefined;
        switch (_0x51f8fd(_0x2d19d3.Ne)) {
          case "false":
            _0x3b3ba9 = false;
            break;
          default:
            _0x3b3ba9 = true;
        }
        _0x5af909.prop("checked", _0x3b3ba9);
        _0x24c455.r.rd(_0x3b3ba9);
        var _0x4fb0d0 = undefined;
        switch (_0x51f8fd(_0x2d19d3.ya)) {
          case "false":
            _0x4fb0d0 = false;
            break;
          default:
            _0x4fb0d0 = true;
        }
        console.log("Load sPN: " + _0x4fb0d0);
        _0x1b2b84.prop("checked", _0x4fb0d0);
        _0x24c455.u.V(function () {
          _0x1b27c9.toggle(_0x24c455.u.P());
          _0x261522.toggle(_0x24c455.u.P());
        });
      };
      _0x28f70a.prototype.Rk = function () {
        _0x35fd25.Fk.stop();
        _0x35fd25.Fk.fadeOut(50);
        _0x35fd25.Gk.stop();
        _0x35fd25.Gk.fadeOut(50);
        _0x35fd25.Hk.stop();
        _0x35fd25.Hk.fadeOut(50);
        _0x35fd25.Jk.stop();
        _0x35fd25.Jk.fadeOut(50);
        _0x35fd25.Ik.stop();
        _0x35fd25.Ik.fadeIn(200);
        _0x35fd25.Kk.stop();
        _0x35fd25.Kk.fadeOut(50);
        _0x35fd25.Lk.stop();
        _0x35fd25.Lk.fadeOut(50);
        _0x35fd25.Mk.stop();
        _0x35fd25.Mk.fadeOut(50);
        _0x35fd25.Nk.stop();
        _0x35fd25.Nk.fadeOut(50);
        _0x35fd25.Ok.stop();
        _0x35fd25.Ok.fadeOut(50);
      };
      _0x28f70a.prototype.ji = function () {
        var _0x4f13bc = _0x25a98d();
        _0x4f13bc.r.Dd();
        if (_0x4f13bc.Y()) {
          _0x39951c.show();
        } else {
          _0x39951c.hide();
        }
      };
      _0x28f70a.prototype.wa = function () {
        return _0x1b2b84.prop("checked");
      };
      return _0x28f70a;
    }();
    var _0x5a8bc5 = function () {
      var _0x4055b9 = $("#store-view-canv");
      var _0x31d212 = $("#skin-description-text");
      var _0x2dcdf5 = $("#skin-group-description-text");
      var _0x1efb16 = $("#store-locked-bar");
      var _0x55d314 = $("#store-locked-bar-text");
      var _0x280eb8 = $("#store-buy-button");
      var _0xdbc04e = $("#store-item-price");
      var _0x875045 = $("#store-groups");
      var _0x487de7 = $("#store-view-prev");
      var _0x50daa0 = $("#store-view-next");
      var _0x17e592 = _0x1c8f8f(_0x35fd25, function () {
        _0x35fd25.call(this, _0x57c9d2("index.game.popup.menu.skins.tab"), true);
        var _0x3ce70b = this;
        var _0x32c86f = _0x25a98d();
        this.bl = null;
        this.cl = [];
        this.dl = {};
        this.el = new _0x524c11(_0x4055b9);
        _0x280eb8.click(function () {
          _0x32c86f.r.Cd();
          _0x3ce70b.fl();
        });
        _0x487de7.click(function () {
          _0x32c86f.r.Cd();
          _0x3ce70b.bl.gl();
        });
        _0x50daa0.click(function () {
          _0x32c86f.r.Cd();
          _0x3ce70b.bl.hl();
        });
      });
      _0x17e592.prototype.a = function () {
        _0x17e592.parent.prototype.a.call(this);
        var _0x7c7d3f = this;
        var _0x130c26 = _0x25a98d();
        _0x130c26.p.ca(function () {
          var _0xc62613 = _0x130c26.p.Ac();
          if (_0xc62613 != null) {
            _0x7c7d3f.cl = [];
            for (var _0xefa405 = 0; _0xefa405 < _0xc62613.skinGroupArrayDict.length; _0xefa405++) {
              _0x7c7d3f.cl.push(new _0x1f0b15(_0x7c7d3f, _0xc62613.skinGroupArrayDict[_0xefa405]));
            }
            _0x7c7d3f.dl = {};
            for (var _0x4121cd = 0; _0x4121cd < _0xc62613.skinArrayDict.length; _0x4121cd++) {
              var _0x84a26b = _0xc62613.skinArrayDict[_0x4121cd];
              _0x7c7d3f.dl[_0x84a26b.id] = _0x84a26b;
            }
          }
        });
        this.il(false);
        _0x130c26.t.xh(function () {
          _0x7c7d3f.il(false);
        });
      };
      _0x17e592.prototype.Rk = function () {
        _0x35fd25.Fk.stop();
        _0x35fd25.Fk.fadeOut(50);
        _0x35fd25.Gk.stop();
        _0x35fd25.Gk.fadeOut(50);
        _0x35fd25.Hk.stop();
        _0x35fd25.Hk.fadeOut(50);
        _0x35fd25.Jk.stop();
        _0x35fd25.Jk.fadeOut(50);
        _0x35fd25.Ik.stop();
        _0x35fd25.Ik.fadeOut(50);
        _0x35fd25.Kk.stop();
        _0x35fd25.Kk.fadeIn(200);
        _0x35fd25.Lk.stop();
        _0x35fd25.Lk.fadeOut(50);
        _0x35fd25.Mk.stop();
        _0x35fd25.Mk.fadeOut(50);
        _0x35fd25.Nk.stop();
        _0x35fd25.Nk.fadeOut(50);
        _0x35fd25.Ok.stop();
        _0x35fd25.Ok.fadeOut(50);
      };
      _0x17e592.prototype.ji = function () {
        _0x25a98d().r.Dd();
        this.jl();
        this.el.Le(true);
      };
      _0x17e592.prototype.ei = function () {
        this.el.Le(false);
      };
      _0x17e592.prototype.Ra = function () {
        this.el.Ra();
      };
      _0x17e592.prototype.Pa = function (_0x322399, _0x10e3c6) {
        this.el.Pa();
      };
      _0x17e592.prototype.jl = function () {
        var _0x3de8b4 = this;
        var _0x37604b = this;
        var _0x1ca9b6 = _0x25a98d();
        _0x875045.empty();
        for (var _0x2c9c9f = 0; _0x2c9c9f < this.cl.length; _0x2c9c9f++) {
          (function (_0x70f747) {
            var _0x340122 = _0x3de8b4.cl[_0x70f747];
            var _0x23b88b = document.createElement("li");
            _0x875045.append(_0x23b88b);
            var _0x2f9b85 = $(_0x23b88b);
            _0x2f9b85.html(_0x340122.kl());
            _0x2f9b85.click(function () {
              _0x1ca9b6.r.Cd();
              _0x37604b.ll(_0x340122);
            });
            _0x340122.ml = _0x2f9b85;
          })(_0x2c9c9f);
        }
        if (this.cl.length > 0) {
          var _0x5347c4 = _0x1ca9b6.t.ha(_0x2d04ef.ia);
          for (var _0x2c9c9f = 0; _0x2c9c9f < this.cl.length; _0x2c9c9f++) {
            var _0x17b4ff = this.cl[_0x2c9c9f];
            for (var _0x3a767b = _0x17b4ff.nl.list, _0x232e50 = 0; _0x232e50 < _0x3a767b.length; _0x232e50++) {
              if (_0x3a767b[_0x232e50] == _0x5347c4) {
                _0x17b4ff.ol = _0x232e50;
                this.ll(_0x17b4ff);
                return;
              }
            }
          }
          this.ll(this.cl[0]);
        }
      };
      _0x17e592.prototype.ll = function (_0x4e2ddf) {
        if (this.bl != _0x4e2ddf) {
          var _0x4b2c5d = _0x25a98d();
          this.bl = _0x4e2ddf;
          _0x875045.children().removeClass("pressed");
          if (this.bl.ml) {
            this.bl.ml.addClass("pressed");
          }
          _0x2dcdf5.html("");
          if (_0x4e2ddf.nl != null) {
            var _0x16eb55 = _0x4b2c5d.p.Ac().textDict[_0x4e2ddf.nl.description];
            if (_0x16eb55 != null) {
              _0x2dcdf5.html(_0x100ba1(_0x2316af(_0x16eb55)));
            }
          }
          this.il(true);
        }
      };
      _0x17e592.prototype.pl = function () {
        if (this.bl == null) {
          return _0x3810cf.Yg();
        } else {
          return this.bl.ql();
        }
      };
      _0x17e592.prototype.fl = function () {
        var _0x5031a0 = this;
        this.pl().ah(function (_0x16d517) {
          _0x5031a0.rl(_0x16d517);
        });
      };
      _0x17e592.prototype.rl = function (_0x2ebb7f) {
        var _0x23fda7 = this;
        var _0x118cf4 = _0x25a98d();
        var _0x3c7431 = this.dl[_0x2ebb7f].price;
        if (!(_0x118cf4.u.zi() < _0x3c7431)) {
          this.Sk();
          var _0x59684 = _0x118cf4.t.ha(_0x2d04ef.ia);
          var _0xd0fcc0 = _0x118cf4.t.ha(_0x2d04ef.ja);
          var _0x29f355 = _0x118cf4.t.ha(_0x2d04ef.ka);
          var _0x5d31db = _0x118cf4.t.ha(_0x2d04ef.la);
          var _0x1e8a61 = _0x118cf4.t.ha(_0x2d04ef.ma);
          _0x118cf4.u.Ui(_0x2ebb7f, _0x2d04ef.ia, function () {
            _0x118cf4.t.Bh(_0x59684, _0x2d04ef.ia);
            _0x118cf4.t.Bh(_0xd0fcc0, _0x2d04ef.ja);
            _0x118cf4.t.Bh(_0x29f355, _0x2d04ef.ka);
            _0x118cf4.t.Bh(_0x5d31db, _0x2d04ef.la);
            _0x118cf4.t.Bh(_0x1e8a61, _0x2d04ef.ma);
            if (_0x118cf4.u.Ch(_0x2ebb7f, _0x2d04ef.ia)) {
              _0x118cf4.t.Bh(_0x2ebb7f, _0x2d04ef.ia);
            }
            _0x23fda7.Qk();
          });
        }
      };
      _0x17e592.prototype.il = function (_0x42c2bd) {
        var _0x4d28e1 = _0x25a98d();
        this.el.bk(_0x4d28e1.t.ha(_0x2d04ef.ja), false, false);
        this.el.ck(_0x4d28e1.t.ha(_0x2d04ef.ka), false, false);
        this.el.dk(_0x4d28e1.t.ha(_0x2d04ef.la), false, false);
        this.el.ek(_0x4d28e1.t.ha(_0x2d04ef.ma), false, false);
        var _0x480f51 = this.pl();
        if (_0x480f51._g()) {
          var _0x32be2c = _0x480f51.$g();
          var _0xc4d4c2 = this.dl[_0x32be2c];
          var _0x50c74b = false;
          if (_0x4d28e1.t.Ja(_0x32be2c, _0x2d04ef.ia)) {
            _0x1efb16.hide();
            _0x280eb8.hide();
          } else if (_0xc4d4c2 == null || _0xc4d4c2.nonbuyable == 1) {
            _0x50c74b = true;
            _0x1efb16.show();
            _0x280eb8.hide();
            _0x55d314.text(_0x57c9d2("index.game.popup.menu.store.locked"));
            if (_0xc4d4c2 != null && _0xc4d4c2.nonbuyable && _0xc4d4c2.nonbuyableCause != null) {
              var _0x51dd39 = _0x4d28e1.p.Ac().textDict[_0xc4d4c2.nonbuyableCause];
              if (_0x51dd39 != null) {
                _0x55d314.text(_0x2316af(_0x51dd39));
              }
            }
          } else {
            _0x1efb16.hide();
            _0x280eb8.show();
            _0xdbc04e.html(_0xc4d4c2.price);
          }
          _0x31d212.html("");
          if (_0xc4d4c2 != null && _0xc4d4c2.description != null) {
            var _0x4a9665 = _0x4d28e1.p.Ac().textDict[_0xc4d4c2.description];
            if (_0x4a9665 != null) {
              _0x31d212.html(_0x100ba1(_0x2316af(_0x4a9665)));
            }
          }
          StoreSkinID.html(_0xc4d4c2.id);
          this.el.ak(_0x32be2c, true, _0x50c74b);
          if (_0x42c2bd) {
            _0x4d28e1.t.Bh(_0x32be2c, _0x2d04ef.ia);
          }
        }
      };
      var _0x1f0b15 = function () {
        function _0x2cafb(_0x5a4fe4, _0x4469cb) {
          this.sl = _0x5a4fe4;
          this.ol = 0;
          this.nl = _0x4469cb;
        }
        _0x2cafb.prototype.gl = function () {
          if (--this.ol < 0) {
            this.ol = this.nl.list.length - 1;
          }
          this.sl.il(true);
        };
        _0x2cafb.prototype.hl = function () {
          if (++this.ol >= this.nl.list.length) {
            this.ol = 0;
          }
          this.sl.il(true);
        };
        _0x2cafb.prototype.kl = function () {
          let _0x11eb4c = _0x2316af(this.nl.name);
          if (this.nl.img) {
            var _0x1995c2 = "<img src=\"";
            _0x1995c2 = _0x1995c2 + SITE_XTHOST + "/images/paths/" + this.nl.img;
            _0x11eb4c = _0x1995c2 = _0x1995c2 + "\" height=\"43\" width=\"220\" />";
          }
          return _0x11eb4c;
        };
        _0x2cafb.prototype.ql = function () {
          if (this.ol >= this.nl.list.length) {
            return _0x3810cf.Yg();
          } else {
            return _0x3810cf.Zg(this.nl.list[this.ol]);
          }
        };
        return _0x2cafb;
      }();
      return _0x17e592;
    }();
    var _0x29a1eb = function () {
      var _0x3ec0f7 = $("#store-go-coins-button");
      var _0x5d154f = $("#store-go-skins-button");
      var _0xb4e178 = $("#store-go-wear-button");
      var _0x2a9435 = _0x1c8f8f(_0x35fd25, function () {
        _0x35fd25.call(this, _0x57c9d2("index.game.popup.menu.store.tab"), true);
        var _0x562125 = _0x25a98d();
        _0x3ec0f7.click(function () {
          _0x562125.r.Cd();
          _0x562125.s.I(_0x562125.s.Wh);
        });
        _0x5d154f.click(function () {
          _0x562125.r.Cd();
          _0x562125.s.I(_0x562125.s.$h);
        });
        _0xb4e178.click(function () {
          _0x562125.r.Cd();
          _0x562125.s.I(_0x562125.s.ai);
        });
      });
      _0x2a9435.prototype.a = function () {
        _0x2a9435.parent.prototype.a.call(this);
      };
      _0x2a9435.prototype.Rk = function () {
        _0x35fd25.Fk.stop();
        _0x35fd25.Fk.fadeOut(50);
        _0x35fd25.Gk.stop();
        _0x35fd25.Gk.fadeOut(50);
        _0x35fd25.Hk.stop();
        _0x35fd25.Hk.fadeOut(50);
        _0x35fd25.Jk.stop();
        _0x35fd25.Jk.fadeOut(50);
        _0x35fd25.Ik.stop();
        _0x35fd25.Ik.fadeOut(50);
        _0x35fd25.Kk.stop();
        _0x35fd25.Kk.fadeOut(50);
        _0x35fd25.Lk.stop();
        _0x35fd25.Lk.fadeIn(200);
        _0x35fd25.Mk.stop();
        _0x35fd25.Mk.fadeOut(50);
        _0x35fd25.Nk.stop();
        _0x35fd25.Nk.fadeOut(50);
        _0x35fd25.Ok.stop();
        _0x35fd25.Ok.fadeOut(50);
      };
      _0x2a9435.prototype.ji = function () {
        _0x25a98d().r.Dd();
      };
      return _0x2a9435;
    }();
    var _0x847157 = function () {
      var _0x54f0e5 = $("#wear-view-canv");
      var _0x379823 = $("#wear-description-text");
      var _0x1404e1 = $("#wear-locked-bar");
      var _0x14dce0 = $("#wear-locked-bar-text");
      var _0x1248e5 = $("#wear-buy-button");
      var _0x20fcd9 = $("#wear-item-price");
      var _0x2b7095 = $("#wear-eyes-button");
      var _0x12cf64 = $("#wear-mouths-button");
      var _0x3edbac = $("#wear-glasses-button");
      var _0x198afa = $("#wear-hats-button");
      var _0x53a21f = $("#wear-tint-chooser");
      var _0xc7d78f = $("#wear-view-prev");
      var _0x78febc = $("#wear-view-next");
      var _0x97b689 = _0x1c8f8f(_0x35fd25, function () {
        var _0x338e58 = this;
        _0x35fd25.call(this, _0x57c9d2("index.game.popup.menu.wear.tab"), true);
        var _0x515ee4 = _0x25a98d();
        var _0x1f6655 = this;
        this.tl = [];
        this.ja = new _0x261e66(this, _0x2d04ef.ja, _0x2b7095);
        this.ka = new _0x261e66(this, _0x2d04ef.ka, _0x12cf64);
        this.la = new _0x261e66(this, _0x2d04ef.la, _0x3edbac);
        this.ma = new _0x261e66(this, _0x2d04ef.ma, _0x198afa);
        this.ul = null;
        this.vl = null;
        this.wl = null;
        this.xl = null;
        this.yl = null;
        this.zl = null;
        this.Al = new _0x524c11(_0x54f0e5);
        _0x1248e5.click(function () {
          _0x515ee4.r.Cd();
          _0x1f6655.Bl();
        });
        _0xc7d78f.click(function () {
          _0x515ee4.r.Cd();
          _0x1f6655.ul.Cl();
        });
        _0x78febc.click(function () {
          _0x515ee4.r.Cd();
          _0x1f6655.ul.Dl();
        });
        _0x2b7095.click(function () {
          _0x515ee4.r.Cd();
          _0x1f6655.El(_0x338e58.ja);
        });
        _0x12cf64.click(function () {
          _0x515ee4.r.Cd();
          _0x1f6655.El(_0x338e58.ka);
        });
        _0x3edbac.click(function () {
          _0x515ee4.r.Cd();
          _0x1f6655.El(_0x338e58.la);
        });
        _0x198afa.click(function () {
          _0x515ee4.r.Cd();
          _0x1f6655.El(_0x338e58.ma);
        });
        this.tl.push(this.ja);
        this.tl.push(this.ka);
        this.tl.push(this.la);
        this.tl.push(this.ma);
      });
      _0x97b689.prototype.a = function () {
        _0x97b689.parent.prototype.a.call(this);
        var _0x55c0e1 = _0x25a98d();
        var _0x1ca72c = this;
        _0x55c0e1.p.ca(function () {
          var _0x31aab2 = _0x55c0e1.p.Ac();
          if (_0x31aab2 != null) {
            _0x1ca72c.vl = _0x31aab2.eyesDict;
            _0x1ca72c.wl = _0x31aab2.mouthDict;
            _0x1ca72c.xl = _0x31aab2.glassesDict;
            _0x1ca72c.yl = _0x31aab2.hatDict;
            _0x1ca72c.zl = _0x31aab2.colorDict;
            _0x1ca72c.ja.Fl(_0x31aab2.eyesVariantArray);
            _0x1ca72c.ja.Gl(_0x1ca72c.vl);
            _0x1ca72c.ka.Fl(_0x31aab2.mouthVariantArray);
            _0x1ca72c.ka.Gl(_0x1ca72c.wl);
            _0x1ca72c.la.Fl(_0x31aab2.glassesVariantArray);
            _0x1ca72c.la.Gl(_0x1ca72c.xl);
            _0x1ca72c.ma.Fl(_0x31aab2.hatVariantArray);
            _0x1ca72c.ma.Gl(_0x1ca72c.yl);
          }
        });
        this.il(false);
        _0x55c0e1.t.xh(function () {
          _0x1ca72c.il(false);
        });
      };
      _0x97b689.prototype.Rk = function () {
        _0x35fd25.Fk.stop();
        _0x35fd25.Fk.fadeOut(50);
        _0x35fd25.Gk.stop();
        _0x35fd25.Gk.fadeOut(50);
        _0x35fd25.Hk.stop();
        _0x35fd25.Hk.fadeOut(50);
        _0x35fd25.Jk.stop();
        _0x35fd25.Jk.fadeOut(50);
        _0x35fd25.Ik.stop();
        _0x35fd25.Ik.fadeOut(50);
        _0x35fd25.Kk.stop();
        _0x35fd25.Kk.fadeOut(50);
        _0x35fd25.Lk.stop();
        _0x35fd25.Lk.fadeOut(50);
        _0x35fd25.Mk.stop();
        _0x35fd25.Mk.fadeIn(200);
        _0x35fd25.Nk.stop();
        _0x35fd25.Nk.fadeOut(50);
        _0x35fd25.Ok.stop();
        _0x35fd25.Ok.fadeOut(50);
      };
      _0x97b689.prototype.ji = function () {
        _0x25a98d().r.Dd();
        this.El(this.ul ?? this.ja);
        this.Al.Le(true);
      };
      _0x97b689.prototype.ei = function () {
        this.Al.Le(false);
      };
      _0x97b689.prototype.Ra = function () {
        this.Al.Ra();
      };
      _0x97b689.prototype.Pa = function (_0x4e06a7, _0x220940) {
        this.Al.Pa();
      };
      _0x97b689.prototype.El = function (_0x114621) {
        this.ul = _0x114621;
        for (var _0x44b382 = 0; _0x44b382 < this.tl.length; _0x44b382++) {
          this.tl[_0x44b382].Xk.removeClass("pressed");
        }
        this.ul.Xk.addClass("pressed");
        this.ul.ii();
      };
      _0x97b689.prototype.Hl = function () {
        if (this.ul == null) {
          return _0x3810cf.Yg();
        } else {
          return _0x3810cf.Zg({
            Lb: this.ul.ql(),
            rc: this.ul.rc
          });
        }
      };
      _0x97b689.prototype.Bl = function () {
        var _0x55c79b = this;
        this.Hl().ah(function (_0xffb56a) {
          _0x55c79b.Ui(_0xffb56a.Lb, _0xffb56a.rc);
        });
      };
      _0x97b689.prototype.Ui = function (_0x128a5c, _0xc6c436) {
        var _0x200743 = this;
        var _0x51659d = _0x25a98d();
        var _0x58d080 = undefined;
        switch (_0xc6c436) {
          case _0x2d04ef.ja:
            _0x58d080 = this.vl[_0x128a5c].price;
            break;
          case _0x2d04ef.ka:
            _0x58d080 = this.wl[_0x128a5c].price;
            break;
          case _0x2d04ef.la:
            _0x58d080 = this.xl[_0x128a5c].price;
            break;
          case _0x2d04ef.ma:
            _0x58d080 = this.yl[_0x128a5c].price;
            break;
          default:
            return;
        }
        if (!(_0x51659d.u.zi() < _0x58d080)) {
          this.Sk();
          var _0x3d6c44 = _0x51659d.t.ha(_0x2d04ef.ia);
          var _0x5be0e3 = _0x51659d.t.ha(_0x2d04ef.ja);
          var _0x22e837 = _0x51659d.t.ha(_0x2d04ef.ka);
          var _0x122bbf = _0x51659d.t.ha(_0x2d04ef.la);
          var _0x572d45 = _0x51659d.t.ha(_0x2d04ef.ma);
          _0x51659d.u.Ui(_0x128a5c, _0xc6c436, function () {
            _0x51659d.t.Bh(_0x3d6c44, _0x2d04ef.ia);
            _0x51659d.t.Bh(_0x5be0e3, _0x2d04ef.ja);
            _0x51659d.t.Bh(_0x22e837, _0x2d04ef.ka);
            _0x51659d.t.Bh(_0x122bbf, _0x2d04ef.la);
            _0x51659d.t.Bh(_0x572d45, _0x2d04ef.ma);
            if (_0x51659d.u.Ch(_0x128a5c, _0xc6c436)) {
              _0x51659d.t.Bh(_0x128a5c, _0xc6c436);
            }
            _0x200743.Qk();
          });
        }
      };
      _0x97b689.prototype.Il = function (_0x38067d, _0x5d52ac) {
        switch (_0x5d52ac) {
          case _0x2d04ef.ja:
            return this.vl[_0x38067d];
          case _0x2d04ef.ka:
            return this.wl[_0x38067d];
          case _0x2d04ef.la:
            return this.xl[_0x38067d];
          case _0x2d04ef.ma:
            return this.yl[_0x38067d];
        }
        return null;
      };
      _0x97b689.prototype.il = function (_0x1288fe) {
        var _0x334530 = _0x25a98d();
        this.Al.ak(_0x334530.t.ha(_0x2d04ef.ia), false, false);
        this.Al.bk(_0x334530.t.ha(_0x2d04ef.ja), false, false);
        this.Al.ck(_0x334530.t.ha(_0x2d04ef.ka), false, false);
        this.Al.dk(_0x334530.t.ha(_0x2d04ef.la), false, false);
        this.Al.ek(_0x334530.t.ha(_0x2d04ef.ma), false, false);
        var _0x125bf6 = this.Hl();
        if (_0x125bf6._g()) {
          var _0x1b3c23 = _0x125bf6.$g();
          var _0x3a31e5 = this.Il(_0x1b3c23.Lb, _0x1b3c23.rc);
          var _0x3f9edf = false;
          if (_0x334530.t.Ja(_0x1b3c23.Lb, _0x1b3c23.rc)) {
            _0x1404e1.hide();
            _0x1248e5.hide();
          } else if (_0x3a31e5 == null || _0x3a31e5.nonbuyable == 1) {
            _0x3f9edf = true;
            _0x1404e1.show();
            _0x1248e5.hide();
            _0x14dce0.text(_0x57c9d2("index.game.popup.menu.store.locked"));
            if (_0x3a31e5 != null && _0x3a31e5.nonbuyable && _0x3a31e5.nonbuyableCause != null) {
              var _0x1f4a31 = _0x334530.p.Ac().textDict[_0x3a31e5.nonbuyableCause];
              if (_0x1f4a31 != null) {
                _0x14dce0.text(_0x2316af(_0x1f4a31));
              }
            }
          } else {
            _0x1404e1.hide();
            _0x1248e5.show();
            _0x20fcd9.html(_0x3a31e5.price);
          }
          _0x379823.html("");
          if (_0x3a31e5 != null && _0x3a31e5.description != null) {
            var _0x3dd026 = _0x334530.p.Ac().textDict[_0x3a31e5.description];
            if (_0x3dd026 != null) {
              _0x379823.html(_0x100ba1(_0x2316af(_0x3dd026)));
            }
          }
          switch (_0x1b3c23.rc) {
            case _0x2d04ef.ja:
              this.Al.bk(_0x1b3c23.Lb, true, _0x3f9edf);
              break;
            case _0x2d04ef.ka:
              this.Al.ck(_0x1b3c23.Lb, true, _0x3f9edf);
              break;
            case _0x2d04ef.la:
              this.Al.dk(_0x1b3c23.Lb, true, _0x3f9edf);
              break;
            case _0x2d04ef.ma:
              this.Al.ek(_0x1b3c23.Lb, true, _0x3f9edf);
          }
          if (_0x1288fe) {
            _0x334530.t.Bh(_0x1b3c23.Lb, _0x1b3c23.rc);
          }
        }
      };
      var _0x261e66 = function () {
        function _0x8d90d(_0xf13fb5, _0x14533a, _0x4ff583) {
          this.sl = _0xf13fb5;
          this.rc = _0x14533a;
          this.Xk = _0x4ff583;
          this.Jl = {};
          this.Kl = [[]];
          this.Ll = -10;
          this.Ml = -10;
        }
        _0x8d90d.prototype.Fl = function (_0x49d962) {
          this.Kl = _0x49d962;
        };
        _0x8d90d.prototype.Gl = function (_0x36a6da) {
          this.Jl = _0x36a6da;
        };
        _0x8d90d.prototype.ii = function () {
          var _0x22402a = _0x25a98d();
          var _0x1a3452 = _0x22402a.t.ha(this.rc);
          for (var _0x56773f = 0; _0x56773f < this.Kl.length; _0x56773f++) {
            for (var _0x56d0a4 = 0; _0x56d0a4 < this.Kl[_0x56773f].length; _0x56d0a4++) {
              if (this.Kl[_0x56773f][_0x56d0a4] == _0x1a3452) {
                this.Nl(_0x56773f);
                this.Ol(_0x56d0a4);
                return;
              }
            }
          }
          this.Nl(0);
          this.Ol(0);
        };
        _0x8d90d.prototype.Cl = function () {
          var _0x5e946a = this.Ll - 1;
          if (_0x5e946a < 0) {
            _0x5e946a = this.Kl.length - 1;
          }
          this.Nl(_0x5e946a);
          this.Ol(this.Ml % this.Kl[_0x5e946a].length);
        };
        _0x8d90d.prototype.Dl = function () {
          var _0x4cab12 = this.Ll + 1;
          if (_0x4cab12 >= this.Kl.length) {
            _0x4cab12 = 0;
          }
          this.Nl(_0x4cab12);
          this.Ol(this.Ml % this.Kl[_0x4cab12].length);
        };
        _0x8d90d.prototype.Nl = function (_0x517e2c) {
          var _0x23bbdc = this;
          if (!(_0x517e2c < 0) && !(_0x517e2c >= this.Kl.length)) {
            this.Ll = _0x517e2c;
            _0x53a21f.empty();
            var _0x4fe7ca = this.Kl[this.Ll];
            if (_0x4fe7ca.length > 1) {
              for (var _0x3c6bbe = 0; _0x3c6bbe < _0x4fe7ca.length; _0x3c6bbe++) {
                (function (_0x261275) {
                  var _0xdf105f = _0x4fe7ca[_0x261275];
                  var _0x21f415 = _0x23bbdc.Jl[_0xdf105f];
                  var _0x3d1ef8 = "#" + _0x23bbdc.sl.zl[_0x21f415.prime];
                  var _0x2f6e0f = $("<div style=\"border-color:" + _0x3d1ef8 + "\"></div>");
                  _0x2f6e0f.click(function () {
                    _0x25a98d().r.Cd();
                    _0x23bbdc.Ol(_0x261275);
                  });
                  _0x53a21f.append(_0x2f6e0f);
                })(_0x3c6bbe);
              }
            }
          }
        };
        _0x8d90d.prototype.Ol = function (_0x2cb100) {
          if (!(_0x2cb100 < 0) && !(_0x2cb100 >= this.Kl[this.Ll].length)) {
            this.Ml = _0x2cb100;
            _0x53a21f.children().css("background-color", "transparent");
            var _0x4db983 = _0x53a21f.children(":nth-child(" + (1 + _0x2cb100) + ")");
            _0x4db983.css("background-color", _0x4db983.css("border-color"));
            this.sl.il(true);
          }
        };
        _0x8d90d.prototype.ql = function () {
          return this.Kl[this.Ll][this.Ml];
        };
        return _0x8d90d;
      }();
      return _0x97b689;
    }();
    var _0x3d367a = function () {
      var _0x3ecac3 = $("#withdraw-consent-yes");
      var _0x3b8a14 = $("#withdraw-consent-no");
      var _0x4e4bad = _0x1c8f8f(_0x35fd25, function () {
        _0x35fd25.call(this, _0x57c9d2("index.game.popup.menu.consent.tab"), false);
        var _0x2d7e07 = _0x25a98d();
        _0x3ecac3.click(function () {
          _0x2d7e07.r.Cd();
          if (_0x2d7e07.Y()) {
            _0x2d7e07.s.I(_0x2d7e07.s.F);
            _0x2d7e07.$(false, true);
            _0x2d7e07.s.aa._(new _0x48b940());
          } else {
            _0x2d7e07.s.gi();
          }
        });
        _0x3b8a14.click(function () {
          _0x2d7e07.r.Cd();
          _0x2d7e07.s.gi();
        });
      });
      _0x4e4bad.prototype.a = function () {
        _0x4e4bad.parent.prototype.a.call(this);
      };
      _0x4e4bad.prototype.Rk = function () {
        _0x35fd25.Fk.stop();
        _0x35fd25.Fk.fadeOut(50);
        _0x35fd25.Gk.stop();
        _0x35fd25.Gk.fadeOut(50);
        _0x35fd25.Hk.stop();
        _0x35fd25.Hk.fadeOut(50);
        _0x35fd25.Jk.stop();
        _0x35fd25.Jk.fadeOut(50);
        _0x35fd25.Ik.stop();
        _0x35fd25.Ik.fadeOut(50);
        _0x35fd25.Kk.stop();
        _0x35fd25.Kk.fadeOut(50);
        _0x35fd25.Lk.stop();
        _0x35fd25.Lk.fadeOut(50);
        _0x35fd25.Mk.stop();
        _0x35fd25.Mk.fadeOut(50);
        _0x35fd25.Nk.stop();
        _0x35fd25.Nk.fadeIn(200);
        _0x35fd25.Ok.stop();
        _0x35fd25.Ok.fadeOut(50);
      };
      _0x4e4bad.prototype.ji = function () {
        _0x25a98d().r.Dd();
      };
      return _0x4e4bad;
    }();
    var _0x13b540 = function () {
      var _0x37e3be = $("#delete-account-timer");
      var _0x114cfc = $("#delete-account-yes");
      var _0x428b54 = $("#delete-account-no");
      var _0x3ac018 = _0x1c8f8f(_0x35fd25, function () {
        _0x35fd25.call(this, _0x57c9d2("index.game.popup.menu.delete.tab"), false);
        var _0x372a33 = _0x25a98d();
        _0x114cfc.click(function () {
          _0x372a33.r.Cd();
          if (_0x372a33.u.P()) {
            _0x372a33.u.bj();
            _0x372a33.u.Wi();
          } else {
            _0x372a33.s.gi();
          }
        });
        _0x428b54.click(function () {
          _0x372a33.r.Cd();
          _0x372a33.s.gi();
        });
        this.Pl = [];
      });
      _0x3ac018.prototype.a = function () {
        _0x3ac018.parent.prototype.a.call(this);
      };
      _0x3ac018.prototype.Rk = function () {
        _0x35fd25.Fk.stop();
        _0x35fd25.Fk.fadeOut(50);
        _0x35fd25.Gk.stop();
        _0x35fd25.Gk.fadeOut(50);
        _0x35fd25.Hk.stop();
        _0x35fd25.Hk.fadeOut(50);
        _0x35fd25.Jk.stop();
        _0x35fd25.Jk.fadeOut(50);
        _0x35fd25.Ik.stop();
        _0x35fd25.Ik.fadeOut(50);
        _0x35fd25.Kk.stop();
        _0x35fd25.Kk.fadeOut(50);
        _0x35fd25.Lk.stop();
        _0x35fd25.Lk.fadeOut(50);
        _0x35fd25.Mk.stop();
        _0x35fd25.Mk.fadeOut(50);
        _0x35fd25.Nk.stop();
        _0x35fd25.Nk.fadeOut(50);
        _0x35fd25.Ok.stop();
        _0x35fd25.Ok.fadeIn(200);
      };
      _0x3ac018.prototype.ji = function () {
        _0x25a98d().r.Hd();
        _0x114cfc.stop();
        _0x114cfc.hide();
        _0x37e3be.stop();
        _0x37e3be.show();
        _0x37e3be.text(".. 10 ..");
        this.Ql();
        this.Rl(function () {
          _0x37e3be.text(".. 9 ..");
        }, 1000);
        this.Rl(function () {
          _0x37e3be.text(".. 8 ..");
        }, 2000);
        this.Rl(function () {
          _0x37e3be.text(".. 7 ..");
        }, 3000);
        this.Rl(function () {
          _0x37e3be.text(".. 6 ..");
        }, 4000);
        this.Rl(function () {
          _0x37e3be.text(".. 5 ..");
        }, 5000);
        this.Rl(function () {
          _0x37e3be.text(".. 4 ..");
        }, 6000);
        this.Rl(function () {
          _0x37e3be.text(".. 3 ..");
        }, 7000);
        this.Rl(function () {
          _0x37e3be.text(".. 2 ..");
        }, 8000);
        this.Rl(function () {
          _0x37e3be.text(".. 1 ..");
        }, 9000);
        this.Rl(function () {
          _0x37e3be.hide();
          _0x114cfc.fadeIn(300);
        }, 10000);
      };
      _0x3ac018.prototype.Rl = function (_0x3190f2, _0x24ff23) {
        var _0x9e3f3f = setTimeout(_0x3190f2, _0x24ff23);
        this.Pl.push(_0x9e3f3f);
      };
      _0x3ac018.prototype.Ql = function () {
        for (var _0xa776d = 0; _0xa776d < this.Pl.length; _0xa776d++) {
          clearTimeout(this.Pl[_0xa776d]);
        }
        this.Pl = [];
      };
      return _0x3ac018;
    }();
    var _0x3d2c82 = function () {
      function _0x29998f() {
        this.Ck = function () {};
      }
      _0x29998f.prototype.Bk = function () {};
      _0x29998f.prototype.ji = function () {};
      return _0x29998f;
    }();
    var _0x5d0ed2 = function () {
      var _0x39e4ec = _0x1c8f8f(_0x3d2c82, function (_0x58655c) {
        _0x3d2c82.call(this);
        var _0x44de6e = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
        this.Sl = $("<div id=\"" + _0x44de6e + "\" class=\"toaster toaster-coins\">    <img class=\"toaster-coins-img\" alt=\"Wormate Coin\" src=\"/images/coin_320.png\" />    <div class=\"toaster-coins-val\">+" + _0x58655c + "</div>    <div class=\"toaster-coins-close\">" + _0x57c9d2("index.game.toaster.continue") + "</div></div>");
        var _0x198648 = this;
        this.Sl.find(".toaster-coins-close").click(function () {
          _0x25a98d().r.Cd();
          _0x198648.Ck();
        });
      });
      _0x39e4ec.prototype.Bk = function () {
        return this.Sl;
      };
      _0x39e4ec.prototype.ji = function () {
        _0x25a98d().r.Fd();
      };
      return _0x39e4ec;
    }();
    var _0x433df2 = function () {
      var _0x246244 = _0x1c8f8f(_0x3d2c82, function (_0x19731e) {
        _0x3d2c82.call(this);
        var _0x557b85 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
        this.Sl = $("<div id=\"" + _0x557b85 + "\" class=\"toaster toaster-levelup\">    <img class=\"toaster-levelup-img\" alt=\"Wormate Level Up Star\" src=\"/images/level-star.svg\" />    <div class=\"toaster-levelup-val\">" + _0x19731e + "</div>    <div class=\"toaster-levelup-text\">" + _0x57c9d2("index.game.toaster.levelup") + "</div>    <div class=\"toaster-levelup-close\">" + _0x57c9d2("index.game.toaster.continue") + "</div></div>");
        var _0xbb74bf = this;
        this.Sl.find(".toaster-levelup-close").click(function () {
          _0x25a98d().r.Cd();
          _0xbb74bf.Ck();
        });
      });
      _0x246244.prototype.Bk = function () {
        return this.Sl;
      };
      _0x246244.prototype.ji = function () {
        _0x25a98d().r.Ed();
      };
      return _0x246244;
    }();
    var _0x48b940 = function () {
      var _0x80099a = _0x1c8f8f(_0x3d2c82, function () {
        _0x3d2c82.call(this);
        var _0x413cf2 = this;
        var _0x46c370 = _0x25a98d();
        var _0xaabaa2 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
        this.Sl = $("<div id=\"" + _0xaabaa2 + "\" class=\"toaster toaster-consent-accepted\">    <img class=\"toaster-consent-accepted-logo\" src=\"" + _0x495820 + "\" alt=\"Wormate.io logo\"/>    <div class=\"toaster-consent-accepted-container\">        <span class=\"toaster-consent-accepted-text\">" + _0x57c9d2("index.game.toaster.consent.text").replaceAll(" ", "&nbsp;").replaceAll("\n", "<br/>") + "</span>        <a class=\"toaster-consent-accepted-link\" href=\"/privacy-policy\">" + _0x57c9d2("index.game.toaster.consent.link") + "</a>    </div>    <div class=\"toaster-consent-close\">" + _0x57c9d2("index.game.toaster.consent.iAccept") + "</div></div>");
        this.Tl = this.Sl.find(".toaster-consent-close");
        this.Tl.hide();
        this.Tl.click(function () {
          _0x46c370.r.Cd();
          if (_0x46c370.Y()) {
            _0x46c370.$(true, true);
          }
          _0x413cf2.Ck();
        });
      });
      _0x80099a.prototype.Bk = function () {
        return this.Sl;
      };
      _0x80099a.prototype.ji = function () {
        var _0x4e2e37 = this;
        var _0x441bd3 = _0x25a98d();
        if (_0x441bd3.Y() && !_0x441bd3.Z()) {
          _0x441bd3.r.Hd();
          setTimeout(function () {
            _0x4e2e37.Tl.fadeIn(300);
          }, 2000);
        } else {
          setTimeout(function () {
            _0x4e2e37.Ck();
          }, 0);
        }
      };
      return _0x80099a;
    }();
    var _0x2fcd1d = {};
    _0x2fcd1d.main = {
      Ma: _0x22a39b("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
      K: _0x22a39b("ltmolilci1iurq1i", "wormate-io_970x250"),
      ra: _0x340587(),
      e: 4,
      oa: false,
      qk: true
    };
    _0x2fcd1d.miniclip = {
      Ma: _0x22a39b("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
      K: _0x22a39b("ltmolilci1iurq1i", "wormate-io_970x250"),
      ra: _0x340587(),
      e: 4,
      oa: false,
      qk: false
    };
    var _0x4f9b76 = _0x2fcd1d[window.ENV];
    _0x4f9b76 ||= _0x2fcd1d.main;
    $(function () {
      FastClick.attach(document.body);
    });
    addEventListener("contextmenu", function (_0x35e631) {
      _0x35e631.preventDefault();
      _0x35e631.stopPropagation();
      return false;
    });
    _0x29122f("//connect.facebook.net/" + _0x50a6a5 + "/sdk.js", "facebook-jssdk", function () {
      FB.init({
        appId: "861926850619051",
        cookie: true,
        xfbml: true,
        status: true,
        version: "v8.0"
      });
    });
    _0x29122f("//apis.google.com/js/api:client.js", null, function () {
      gapi.load("auth2", function () {
        GoogleAuth = gapi.auth2.init({
          client_id: "959425192138-qjq23l9e0oh8lgd2icnblrbfblar4a2f.apps.googleusercontent.com"
        });
      });
    });
    _0xdc115f = _0x403fc1();
    _0xdc115f.v();
    if (PhoneChecked()) {
      _0x29122f("https://milat2.com/js/joy.min.js", "mobileconfig", function () {
        _0xda782f();
      });
    }
    let _0xda782f = function () {
      $("#game-canvas").after("<div id='zoom-container'><div id='zoom-out'>-</div><div id='zoom-in'>+</div></div>");
    };
    window.keyMove = 81;
    window.addEventListener("keydown", function (_0x34d84e) {
      console.log("event.keyCode " + _0x34d84e.keyCode);
      _0x34d84e = _0x34d84e.which || _0x34d84e.keyCode || 0;
      if (_0x34d84e !== 113 && window.keyMove !== _0x34d84e || !isPlaying || PilotoAutomatico) {
        clearInterval(PilotoAutomatico);
        PilotoAutomatico = null;
      } else {
        let _0x1d4852 = theoEvents.eventoPrincipal.sk = 0;
        _0x34d84e = window.tuNewScore;
        PilotoAutomatico = setInterval(function () {
          let _0x3fef73 = parseFloat(theoEvents.eventoPrincipal.sk);
          theoEvents.eventoPrincipal.sk = (_0x3fef73 >= Math.PI ? -_0x3fef73 : _0x3fef73) + (_0x1d4852 === 0 ? 0 : Math.PI / 4);
          _0x1d4852++;
        }, 165 + (_0x34d84e >= 100000 ? 5 : _0x34d84e >= 10000 ? 10 : 0));
      }
      localStorage.setItem("SaveGameXT", JSON.stringify(theoKzObjects));
    }, false);
    let _0x256201 = [{
      nombre: "duck-unicorn",
      url: "https://i.imgur.com/yHOzNqn.png"
    }, {
      nombre: "cute-gnome",
      url: "https://cdn.custom-cursor.com/db/15543/32/cute-gnomes-pointer.png"
    }, {
      nombre: "fnf-markus",
      url: "https://cdn.custom-cursor.com/db/15536/32/fnf-markus-cursor.png"
    }, {
      nombre: "sanrio-fairy",
      url: "https://cdn.custom-cursor.com/db/15524/32/sanrio-fairy-charmer-cursor.png"
    }, {
      nombre: "Batman_Logo",
      url: "https://cdn.custom-cursor.com/db/cursor/32/Batman_Logo.png"
    }, {
      nombre: "arrow",
      url: "https://cdn.custom-cursor.com/db/234/32/arrow2291.png"
    }, {
      nombre: "Superman",
      url: "https://cdn.custom-cursor.com/db/cursor/32/Superman_Cursor.png"
    }, {
      nombre: "Kratos",
      url: "https://cdn.custom-cursor.com/128/assets/pointers/32/GOW_Kratos_Pointer.png"
    }, {
      nombre: "Pusheen_Ca",
      url: "https://cdn.custom-cursor.com/db/cursor/32/Pusheen_Cat_Cursor.png"
    }, {
      nombre: "lipstick",
      url: "https://cdn.custom-cursor.com/db/15214/32/sailor-moon-fish-eye-and-lipstick-cursor.png"
    }, {
      nombre: "AKM",
      url: "https://cdn.custom-cursor.com/db/cursor/32/PUBG_AKM_Cursor.png"
    }, {
      nombre: "Cherries_Pointer",
      url: "https://cdn.custom-cursor.com/db/pointer/32/Cherries_Pointer.png"
    }, {
      nombre: "Tom_and_JerryCurso",
      url: "https://cdn.custom-cursor.com/db/cursor/32/Tom_and_JerryCursor.png"
    }, {
      nombre: "JerryPointer",
      url: "https://cdn.custom-cursor.com/db/pointer/32/Tom_and_JerryPointer.png"
    }];
    let _0x2b317c = [{
      nombre: "Default",
      url: "https://i.imgur.com/8ubx4RA.png"
    }, {
      nombre: "Schwarze Background",
      url: "https://i.imgur.com/sy8yZP6.png"
    }, {
      nombre: "light blue",
      url: "https://i.imgur.com/dWtJFIx.png"
    }, {
      nombre: "woman",
      url: "https://i.imgur.com/19YALRi.png"
    }, {
      nombre: "Navidad",
      url: "https://i.imgur.com/YQw6uZl.png"
    }, {
      nombre: "Mal3ab",
      url: "https://i.imgur.com/MlCgOma.png"
    }, {
      nombre: "Galaxy_Star",
      url: "https://i.imgur.com/yayb9Ru.png"
    }, {
      nombre: "Desert",
      url: "https://milat2.com/backgrounds/bg_1.png"
    }];
    theoKzObjects.loading = true;
    var _0x1a7208 = "";
    _0x1a7208 += "</div>";
    _0x1a7208 += "</div>";
    _0x1a7208 += "</div>";
    _0x1a7208 += "<div id=\"wormcerca\">";
    _0x1a7208 += "<img class=\"pwrups v0\" style=\"display: none;\" src=\"https://i.imgur.com/M1LFPpp.png\">";
    _0x1a7208 += "<img class=\"pwrups v1\" style=\"display: none;\" src=\"https://i.imgur.com/z162iYa.png\">";
    _0x1a7208 += "<img class=\"pwrups v2\" style=\"display: none;\" src=\"https://i.imgur.com/kXlF32q.png\">";
    _0x1a7208 += "<img class=\"pwrups v3\" style=\"display: none;\" src=\"https://i.imgur.com/kJ6oz7e.png\">";
    _0x1a7208 += "<img class=\"pwrups v4\" style=\"display: none;\" src=\"https://i.imgur.com/l3ds43O.png\">";
    _0x1a7208 += "<img class=\"pwrups v5\" style=\"display: none;\" src=\"https://i.imgur.com/FqA56k6.png\">";
    _0x1a7208 += "<img class=\"pwrups v6\" style=\"display: none;\" src=\"https://i.imgur.com/mSCZeEp.png\">";
    _0x1a7208 += "</div>";
    _0x1a7208 += "<img class=\"worm_1\" src=\"https://i.imgur.com/iekrYYm.png\"><span class=\"Worm_cerca\"></span>";
    _0x1a7208 += "\n      \n         <div style=\"display:none\" id=\"zoom-container\">\n         <div id=\"zoom-out\">-</div>\n         <div id=\"zoom-in\">+</div>\n         </div>\n        <div class=\"worm_2\">\n        <button id=\"settingBtn\"><img src=\"https://i.imgur.com/bKAe6W9.png\"/></button>\n        <div id=\"settingContent\">\n        \n        \n        <div class=\"container1\">\n                    <span class=\"settings_span\">Spin-Fast: </span>\n                    <input id=\"smoothCamera\" class=\"range\" type=\"range\" min=\"0.3\" max=\"0.6\" value=\"' + theoKzObjects.smoothCamera + '\" step=\"0.1\" onmousemove=\"smoothCameraValue.value=value\" />\n        </div>         \n        \n        <div class=\"container1\">\n        <span class=\"settings_span\">Power-ups-Size: </span>\n        <input id=\"PortionSize\" class=\"range\" type=\"range\" min=\"1\" max=\"6\" value=\"' + theoKzObjects.PortionSize + '\" step=\"1\" onmousemove=\"rangevalue1.value=value\" />\n        </div>\n        \n      <div class=\"container1\">\n      <span class=\"settings_span\">Power-ups-Aura: </span>\n      <input id=\"PortionAura\" class=\"range\" type=\"range\" min=\"1.2\" max=\"3.2\" value=\"' + theoKzObjects.PortionAura + '\" step=\"0.2\" onmousemove=\"PortionAuravalue.value=value\" />\n      </div>\n       \n      <div class=\"container1\">\n                    <span class=\"settings_span\">Food-Size: </span>\n                    <input id=\"FoodSize\" class=\"range\" type=\"range\" min=\"0.5\" max=\"3\" value=\"' + theoKzObjects.FoodSize + '\" step=\"0.5\" onmousemove=\"rangevalue2.value=value\" />\n                    </div>\n                    <div class=\"container1\">\n                    <span class=\"settings_span\">Food-Shadow: </span>\n                    <input id=\"FoodShadow\" class=\"range\" type=\"range\" min=\"0.5\" max=\"3\" value=\"' + theoKzObjects.FoodShadow + '\" step=\"0.5\" onmousemove=\"FoodShadowvalue.value=value\" />\n                    </div>\n    </div>\n    </div>";
    $("#game-view").append(_0x1a7208);
    function _0x25b63c(_0x1ab0cb) {
      if (theoKzObjects.PropertyManager) {
        _0x1ab0cb.skinId = theoKzObjects.PropertyManager.rh;
        _0x1ab0cb.eyesId = theoKzObjects.PropertyManager.sh;
        _0x1ab0cb.mouthId = theoKzObjects.PropertyManager.th;
        _0x1ab0cb.glassesId = theoKzObjects.PropertyManager.uh;
        _0x1ab0cb.hatId = theoKzObjects.PropertyManager.vh;
      }
    }
    function _0x232855() {
      $("#mm-event-text").replaceWith("<div class=\"text-vnxx\"><img src=\"https://imgur.com/1gL3cHO.gif\"/><a href=\"https://www.facebook.com/wormatefriendsturkey\">New extension New Update</a></div>");
      $("#mm-store").after("<div id=\"mm-store\" style=\"float: right;position: relative;background: #fff0;width:30px;\">\n            <div style=\"margin: 0;\" id=\"loa831pibur0w4gv\">\n            \n        <button style=\"margin-top: -10px;\" onclick=\"openPopup()\"><img style=\"height: 40px;\"src=\"https://i.imgur.com/bKAe6W9.png\"/></button>\n        <div id=\"popup\" class=\"popup\">\n        <div class=\"phdr1\">Wormate Friends Settings</div>\n        <button class=\"close-button\" onclick=\"closePopup()\">Close</button>\n        \n                    <div id=\"kich-hoat\">\n                \n           <center><input type=\"text\" value=\"" + theoKzObjects.FB_UserID + "\" style=\"text-align: center;border-radius: 4px;font-size: 20px;padding: 0 6px;background-color: #fff;color: #806102;display: block;box-sizing: border-box;-webkit-appearance: none;outline: 0;border: solid 2px #ff8d00;margin-left: -80px;    width: 50%;margin-top: 8px;\"/></center>\n                \n                <button style=\"width: 80px; height: 28px;float: right; margin-top: -28px;margin-right: 105px;\" onclick=\"navigator.clipboard.writeText('" + theoKzObjects.FB_UserID + "').then(()=> alert('You ID " + theoKzObjects.FB_UserID + " copiado! copied!'));\">COPY</button>\n                </div>   \n                \n                \n                    <div class=\"settings-lineZoom\">\n                    <span class=\"settings-labelZoom\">Ability EatingSpeed</span>\n                    <input class=\"settings-switchZoom\" id=\"settings-Abilityzoom-switch\" type=\"checkbox\"/>\n                    <label for=\"settings-Abilityzoom-switch\"></label>\n                    </div>\n                    \n                    <div class=\"settings-lineZoom\">\n                    <span class=\"settings-labelZoom\">MODO STREAMER</span>\n                    <input class=\"settings-switchZoom\" id=\"settings-stremingmode-switch\" type=\"checkbox\"/>\n                    <label for=\"settings-stremingmode-switch\"></label>\n                    </div>\n                    \n                    \n                    <div class=\"spancursor\">Select Cursor</div>\n                    <div class=\"cursor-container\"></div>\n                    <div class=\"spancursor\">Select Background</div>\n                    <div class=\"background-container\"></div>\n                    \n                    \n                    <div class=\"list2\">Keys <a href=\"/\">Q</a> : Turn Around (Quay Otomatik  DÃ¶nÃ¼ÅŸ)</div>\n                    <div class=\"list2\">Keys <a href=\"/\">R </a> : Quick Revive (Otomatik R TuÅŸu Reset)</div>\n                    \n                    <div class=\"list2\">Note : This setting is only for activated members . Thank you !</div>\n                    <div class=\"list2\">GÃ¼ncel bilgi  : Eklenti Ã¼cretsiz kullanÄ±m iÃ§erisinde kÃ¼fÃ¼rlÃ¼ isimler almak hesabÄ±nÄ±zÄ±n aktivasyonunu devre dÄ±ÅŸÄ± bÄ±rakÄ±caktÄ±r. Desen ve Server ekletmek iÃ§in iletiÅŸime aktivasyon kÄ±smÄ±ndan geÃ§ebilirsiniz .    </div>\n                    \n                    <center><div class=\"hg\"><a target=\"_blank\" href=\"https://wa.me/905544655080/\">Activated (Aktivasyon)</a></div></center>\n\n           \n        </div>");
      $("#loa831pibur0w4gv").replaceWith("<div style=\"margin: 0;\" id=\"loa831pibur0w4gv\">\n                <div class=\"label\" id=\"titleSetings\">Notification (Duyuru)</div>\n                \n                <div class=\"list1\">  GÃ¼ncelleme : 28.04.2024   </div>\n                <div class=\"list1\"> LÃ¼tfen Ã¶ncelikle Ä±d kopyalayÄ±p aktif et kÄ±smÄ±na basÄ±nÄ±z aktif ettiriniz </div>\n                <div class=\"list1\">     </div><hr>\n                \n                <div class=\"list1\">      </div>\n                <div class=\"list1\">    </div>\n                <div class=\"list1\">     </div>\n                <hr> \n                <input type=\"text\" value=\"" + theoKzObjects.FB_UserID + "\" style=\"width: 236px;height: 23px;text-align: center;border-radius: 4px;font-size: 17px;padding: 0 6px;background-color: #fff;color: #806102;display: block;box-sizing: border-box;-webkit-appearance: none;outline: 0;border-width: 0;\">\n        <button style=\"height: 25px;float: right;margin-top: -24px;\" onclick=\"navigator.clipboard.writeText('" + theoKzObjects.FB_UserID + "').then(()=> alert('You ID " + theoKzObjects.FB_UserID + " baÅŸarÄ±Ä±!! KopyalandÄ±.!'));\">Kopyala</button>\n                <center><div class=\"hg\"><a target=\"_blank\" href=\"https://wa.me/905544655080/\">Activated (Aktif Et)</a></div></center>\n             </div>\n             ");
      var _0x5464eb = document.getElementById("settingBtn");
      var _0x16e49b = document.getElementById("settingContent");
      _0x5464eb.addEventListener("click", function () {
        if (_0x16e49b.style.display === "none") {
          _0x16e49b.style.display = "block";
        } else {
          _0x16e49b.style.display = "none";
        }
      });
      $("#PortionSize").on("input", function () {
        theoKzObjects.PortionSize = $(this).val();
        localStorage.PotenciadorSize = theoKzObjects.PortionSize;
      });
      $("#PortionAura").on("input", function () {
        theoKzObjects.PortionAura = $(this).val();
        localStorage.PotenciadorAura = theoKzObjects.PortionAura;
      });
      $("#smoothCamera").on("input", function () {
        theoKzObjects.smoothCamera = $(this).val();
        localStorage.smoothCamera = theoKzObjects.smoothCamera;
      });
      $("#FoodSize").on("input", function () {
        theoKzObjects.FoodSize = $(this).val();
        localStorage.ComidaSize = theoKzObjects.FoodSize;
      });
      $("#FoodShadow").on("input", function () {
        theoKzObjects.FoodShadow = $(this).val();
        localStorage.ComidaShadow = theoKzObjects.FoodShadow;
      });
      $("#ltmolilci1iurq1i").replaceWith("\n                <div id=\"toantrang-quangcao\">\n                \n                <div class=\"quangcao-left1\"><a href=\"https://www.tiktok.com/@l._.e._.o_.n\"><div class=\"ten-khach-hang\">LEON  GAMÄ°NG</div><img src=\"https://milat2.com/images/hiep_img/leoongamingg.png\"></a></div>\n                \n                <div class=\"quangcao-left2\"><a href=\"https://discord.gg/tcteam/\"><div class=\"ten-khach-hang\">T.C TEAM  AÄ°LESÄ°</div><img src=\"https://milat2.com/images/hiep_img/tcunallucarr.png\"></a></div> \n                \n                <div class=\"quangcao-left3\"><a href=\"https://www.tiktok.com/@arzu.gaming/\"><div class=\"ten-khach-hang\">ARZU GAMÄ°NG</div><img src=\"https://milat2.com/images/hiep_img/arzugamingglist.png\"></a></div> \n                \n                <div class=\"quangcao-left4\"><a href=\"https://www.instagram.com/kentavize/\"><div class=\"ten-khach-hang\">KENT AVÄ°ZE</div><img src=\"https://milat2.com/images/hiep_img/kentavize.png\"></a></div>  \n                \n                <div class=\"quangcao-left5\"><a href=\"https://www.tiktok.com/@kamikazegaming34/\"><div class=\"ten-khach-hang\"> KAMÄ°KAZE </div><img src=\"https://milat2.com/images/hiep_img/ucak3434sonreklam.png\"></a></div>  \n                </div>");
      $("#mm-advice-cont").html("<input type=\"button\" style=\"float: left;height: 35.5px;color: #001fff;font-size:18px;border:solid 1px #2196f300;font-weight:600;background:#e6ae50;width: 49%;font-family: vuonghiep;\" class=\"fullscreen_button\" value=\"FULLSCREEN\"/><div class=\"nhac\"><a href=\"https://wa.me/905544655080\">Contact (Aktivasyon)</div>");
      $(".mm-merchant-cont").append("<div style='float: left;'><a href='https://www.instagram.com/ozdilekyapimarket/'><img style='width:97%' src='https://i.imgur.com/nBkhdv4.jpeg'/><a/></div><div style='float: left;'><a href='boÅŸreklam'><img style='width: 97%;' src='https://i.imgur.com/Om6fwgf.png'/><a/></div>");
      $(document).ready(function () {
        $(".fullscreen_button").on("click", function () {
          if (document.fullScreenElement && document.fullScreenElement !== null || !document.mozFullScreen && !document.webkitIsFullScreen) {
            if (document.documentElement.requestFullScreen) {
              document.documentElement.requestFullScreen();
            } else if (document.documentElement.mozRequestFullScreen) {
              document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullScreen) {
              document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            }
          } else if (document.cancelFullScreen) {
            document.cancelFullScreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
          }
        });
      });
      $("#mm-store").after("\n            <div id=\"mm-store\" style=\"float: right;position: relative;background: -webkit-linear-gradient(right, #00BCD4 , #3F51B5);width:40px; margin-right: 25px; \" onclick=\"navigator.clipboard.writeText('" + theoKzObjects.FB_UserID + "').then(()=> alert('You ID " + theoKzObjects.FB_UserID + " copiado! copied!'));\"> Your Id</div>");
      $("#background-canvas").replaceWith("<canvas id=\"background-canvas\" style=\"background-image: url(https://i.imgur.com/2iNGocv.png);background-repeat: no-repeat;background-size: cover;}\"></canvas>");
      $(".mm-merchant").replaceWith("");
      $("#markup-footer").replaceWith("\n            <footer id=\"markup-footer\">\n            <div class=\"lang-menu\"><button class=\"lang-button\">Diller </button>\n            <div class=\"lang-list\"><a hreflang=\"en\" href=\"/\">English</a>\n<a hreflang=\"uk\" href=\"/uk/\">?Â£?ÂºÃ‘â‚¬?Â°Ã‘â€”?Â½Ã‘ÂÃ‘Å’?Âº?Â°</a>\n<a hreflang=\"de\" href=\"/de/\">Deutsch</a>\n<a hreflang=\"fr\" href=\"/fr/\">FranÃƒÂ§ais</a>\n<a hreflang=\"es\" href=\"/es/\">EspaÃƒÂ±ol</a>\n</div></div>\n            <a class=\"link\" hreflang=\"en\" href=\"/\">Ana Sayfa</a>\n            <a class=\"link\" hreflang=\"en\" href=\"/contact\">Wormate.io team TC TeamÂ© 2023</a>\n            \n            <a style=\"color: #00ff21;\">WormateFriendsTurkey.com</a>\n            \n            </footer>");
      $(".description-text").replaceWith("\n                   <div style=\";padding: 0px;margin: 0;height:338px\" class=\"description-text\">\n                    <div id=\"title\">Wormate Friends Turkey</div>\n                    <ul style=\"margin-top: 5px;\" class=\"ui-tabs-nav\">\n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive0 ui-tab-active\" style=\"margin: -5px\">\n                        <a>\n                        <span class=\"flag br\" value=\"https://i.imgur.com/pReVs6K.png\"></span>\n                        </a>\n                    </li>\n    \n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive1\" style=\"margin: -5px\">\n                        <a>\n                            <span class=\"flag mx\"  value=\"https://i.imgur.com/YSLUmBO.png\"></span>\n                        </a>\n                    </li>\n    \n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive2\" style=\"margin: -5px\">\n                        <a>\n                            <span class=\"flag us\" value=\"https://i.imgur.com/Jb2FF0y.png\"></span>\n                        </a>\n                    </li>\n    \n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive3\" style=\"margin: -5px\">\n                        <a>\n                            <span class=\"flag ca\" value=\"https://i.imgur.com/c90q4Qs.png\"></span>\n                        </a>\n                    </li>\n    \n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive4\" style=\"margin: -5px\">\n                        <a>\n                            <span class=\"flag de\" value=\"https://i.imgur.com/VgCH8iy.png\"></span>\n                        </a>\n                    </li>\n    \n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive5\" style=\"margin: -5px\">\n                        <a>\n                            <span class=\"flag fr\" value=\"https://i.imgur.com/QuEjBr0.png\"></span>\n                        </a>\n                    </li>\n    \n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive6\" style=\"margin: -5px\">\n                        <a>\n                            <span class=\"flag sg\" value=\"https://i.imgur.com/FviIPCg.png\"></span>\n                        </a>\n                    </li>\n    \n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive7\" style=\"margin: -5px\">\n                        <a>\n                            <span class=\"flag jp\" value=\"https://i.imgur.com/P2rYk1k.png\"></span>\n                        </a>\n                    </li>\n    \n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive8\" style=\"margin: -5px\">\n                        <a>\n                            <span class=\"flag au\" value=\"https://i.imgur.com/DlVbD1Y.png\"></span>\n                        </a>\n                    </li>\n    \n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive9\" style=\"margin: -5px\">\n                        <a>\n                            <span class=\"flag gb\" value=\"https://i.imgur.com/8pQY6RW.png\"></span>\n                        </a>\n                    </li>\n                    \n                    </ul>\n                    \n                    <div class=\"gachngang\"></div>\n                    \n                    <div class=\"servers-container\">\n                    <div class=\"servers-peru\"></div>\n                    <div class=\"servers-mexico\" style=\"display: none;\"></div>\n                    <div class=\"servers-eeuu\" style=\"display: none;\"></div>\n                    <div class=\"servers-canada\" style=\"display: none;\"></div>\n                    <div class=\"servers-germania\" style=\"display: none;\"></div>\n                    <div class=\"servers-francia\" style=\"display: none;\"></div>\n                    <div class=\"servers-singapur\" style=\"display: none;\"></div>\n                    <div class=\"servers-japon\" style=\"display: none;\"></div>\n                    <div class=\"servers-australia\" style=\"display: none;\"></div>\n                    <div class=\"servers-granbretana\" style=\"display: none;\"></div>\n                    \n                    \n                    \n                    </div>\n                    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.min.js\"></script>\n                    \n                    \n                    ");
      $(".ui-tab").on("click", account);
      $(".flag").click(function () {
        let _0x2b50a9 = $(this).attr("value");
        theoKzObjects.flag = _0x2b50a9;
        ctx.containerImgS.texture = ctx.onclickServer;
        retundFlagError();
        console.log(_0x2b50a9);
      });
      for (a = 0; a < servers.Api_listServer.length; a++) {
        var _0x44140d = servers.Api_listServer[a].serverUrl;
        var _0x3b5d93 = servers.Api_listServer[a].name;
        var _0x466b4d = servers.Api_listServer[a].region;
        let _0x150164 = document.createElement("p");
        _0x150164.value = _0x44140d;
        _0x150164.innerHTML = _0x3b5d93;
        if (_0x466b4d == "peru") {
          $(".servers-peru").prepend(_0x150164);
        } else if (_0x466b4d == "mexico") {
          $(".servers-mexico").prepend(_0x150164);
        } else if (_0x466b4d == "eeuu") {
          $(".servers-eeuu").prepend(_0x150164);
        } else if (_0x466b4d == "canada") {
          $(".servers-canada").prepend(_0x150164);
        } else if (_0x466b4d == "germania") {
          $(".servers-germania").prepend(_0x150164);
        } else if (_0x466b4d == "francia") {
          $(".servers-francia").prepend(_0x150164);
        } else if (_0x466b4d == "singapur") {
          $(".servers-singapur").prepend(_0x150164);
        } else if (_0x466b4d == "japon") {
          $(".servers-japon").prepend(_0x150164);
        } else if (_0x466b4d == "australia") {
          $(".servers-australia").prepend(_0x150164);
        } else if (_0x466b4d == "granbretana") {
          $(".servers-granbretana").prepend(_0x150164);
        }
        $(_0x150164).attr("id", _0x466b4d);
        $(_0x150164).attr("class", "selectSala");
        $(_0x150164).attr("value", _0x3b5d93);
        $(_0x150164).click(function () {
          ctx.setServer($(this).text());
          let _0x326547 = $(this).val();
          ctx.containerImgS.texture = ctx.onclickServer;
          retundFlagError();
          window.server_url = _0x326547;
          $("#mm-action-play").click();
          $("#adbl-continue").click();
        });
      }
    }
    function _0x144f9f() {
      $("#getskin").on("click", function () {
        for (var _0x114b71 = 0; _0x114b71 < clientes.clientesActivos.length; _0x114b71++) {
          var _0x126608 = clientes.clientesActivos[_0x114b71].cliente_NOMBRE;
          var _0x2a00c1 = clientes.clientesActivos[_0x114b71].cliente_ID;
          var _0x3986cc = clientes.clientesActivos[_0x114b71].Client_VisibleSkin;
          var _0x46a42f = clientes.clientesActivos[_0x114b71].Client_VisibleSkin1;
          var _0x5ebb4d = clientes.clientesActivos[_0x114b71].Client_VisibleSkin2;
          var _0x58ccac = clientes.clientesActivos[_0x114b71].Client_VisibleSkin3;
          var _0x43f881 = clientes.clientesActivos[_0x114b71].Client_VisibleSkin4;
          var _0x2d0610 = clientes.clientesActivos[_0x114b71].Client_VisibleSkin5;
          var _0x336846 = clientes.clientesActivos[_0x114b71].Client_VisibleSkin6;
          var _0x39490c = clientes.clientesActivos[_0x114b71].Client_VisibleSkin7;
          var _0x96edb0 = clientes.clientesActivos[_0x114b71].Client_VisibleSkin8;
          var _0x3b253c = clientes.clientesActivos[_0x114b71].Client_VisibleSkin9;
          var _0x58e495 = clientes.clientesActivos[_0x114b71].Client_VisibleSkin10;
          var _0x431d9c = clientes.clientesActivos[_0x114b71].Client_VisibleSkin11;
          var _0x32e4af = clientes.clientesActivos[_0x114b71].Client_VisibleSkin12;
          var _0x5e7616 = clientes.clientesActivos[_0x114b71].Client_VisibleSkin13;
          var _0x34f354 = clientes.clientesActivos[_0x114b71].Client_VisibleSkin14;
          var _0x36acd7 = clientes.clientesActivos[_0x114b71].Client_VisibleSkin15;
          var _0x42a25e = clientes.clientesActivos[_0x114b71].Client_VisibleSkin16;
          var _0x3cf283 = clientes.clientesActivos[_0x114b71].Client_VisibleSkin17;
          var _0x24c2f4 = clientes.clientesActivos[_0x114b71].Client_VisibleSkin18;
          var _0x44adb2 = clientes.clientesActivos[_0x114b71].Client_VisibleSkin19;
          var _0x1c7106 = clientes.clientesActivos[_0x114b71].Client_VisibleSkin20;
          var _0x11a0da = clientes.clientesActivos[_0x114b71].Client_KeyAccecs;
          if (theoKzObjects.FB_UserID == 0) {} else if (theoKzObjects.FB_UserID == _0x2a00c1) {
            if (_0x11a0da == "XTPRIVATESKIN") {
              for (let _0x24a9aa = 0; _0x24a9aa < theoKzObjects.idSkin.length; _0x24a9aa++) {
                const _0x3a55a2 = theoKzObjects.idSkin[_0x24a9aa];
                if (_0x3a55a2.id == _0x3986cc || _0x3a55a2.id == _0x46a42f || _0x3a55a2.id == _0x5ebb4d || _0x3a55a2.id == _0x58ccac || _0x3a55a2.id == _0x43f881 || _0x3a55a2.id == _0x2d0610 || _0x3a55a2.id == _0x336846 || _0x3a55a2.id == _0x39490c || _0x3a55a2.id == _0x96edb0 || _0x3a55a2.id == _0x3b253c || _0x3a55a2.id == _0x58e495 || _0x3a55a2.id == _0x431d9c || _0x3a55a2.id == _0x32e4af || _0x3a55a2.id == _0x5e7616 || _0x3a55a2.id == _0x34f354 || _0x3a55a2.id == _0x36acd7 || _0x3a55a2.id == _0x42a25e || _0x3a55a2.id == _0x3cf283 || _0x3a55a2.id == _0x24c2f4 || _0x3a55a2.id == _0x44adb2 || _0x3a55a2.id == _0x1c7106) {
                  _0x3a55a2.nonbuyable = false;
                }
              }
            } else {}
          } else {}
        }
      });
    }
    function _0x4d329b() {
      theoKzObjects.adblock = true;
      $("#loa831pibur0w4gv").replaceWith("\n                <div class=\"label\" id=\"titleSetings\">Notification (Duyuru)</div>\n                   <div class=\"list1\">      </div>\n                <div class=\"list1\">    </div>\n                <div class=\"list1\">      </div>  \n                  <div class=\"list1\">     </div>\n                  <div class=\"list1\">        </div>\n             \n            ");
      $("#mm-coins-box").replaceWith("<div style=\"margin: 0;\" id=\"mm-coins-box\">\n                \n                <button style='width: 140px;height: 45px;float: right;border-radius: 10px;border: solid #fac 2px;' id='getskin'>Unlock Skins</button>\n  <button style='width: 140px;height: 45px;float: right;border-radius: 10px;border: solid #fac 2px;' id='testSkinMod'>TestMod</button>\n                </div>\n\n                </div>");
      window.multiplier = 0.625;
      function _0x41612b() {
        window.multiplier *= 1.1;
        changedNf();
      }
      function _0x28cbf7() {
        window.multiplier *= 0.9;
        changedNf();
      }
      document.getElementById("zoom-in").addEventListener("touchstart", _0x41612b);
      document.getElementById("zoom-out").addEventListener("touchstart", _0x28cbf7);
      window.onwheel = _0x1a3162 => {
        if (_0x1a3162.deltaY < 0) {
          _0x28cbf7();
        } else {
          _0x41612b();
        }
      };
      $("#settings-Abilityzoom-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          theoKzObjects.eat_animation = 1;
          localStorage.setItem("mySwitch", "on");
        } else {
          console.log("I'm not checked");
          theoKzObjects.eat_animation = 0.0025;
          localStorage.setItem("mySwitch", "off");
        }
      });
      $(document).ready(function () {
        var _0x1c6833 = localStorage.getItem("mySwitch");
        if (_0x1c6833 === "on") {
          $("#settings-Abilityzoom-switch").prop("checked", true);
          theoKzObjects.eat_animation = 1;
        } else {
          $("#settings-Abilityzoom-switch").prop("checked", false);
          theoKzObjects.eat_animation = 0.0025;
        }
      });
      $("#settings-stremingmode-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          theoKzObjects.ModeStremer = true;
          localStorage.setItem("ModeStremer", "true");
        } else {
          console.log("I'm not checked");
          theoKzObjects.ModeStremer = false;
          localStorage.setItem("ModeStremer", "false");
        }
      });
      $(document).ready(function () {
        var _0x247404 = localStorage.getItem("ModeStremer");
        if (_0x247404 === "true") {
          theoKzObjects.ModeStremer = true;
          $("#settings-stremingmode-switch").prop("checked", true);
        } else {
          theoKzObjects.ModeStremer = false;
          $("#settings-stremingmode-switch").prop("checked", false);
        }
      });
      $("#settings-arrowmobile-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          theoKzObjects.arrow = false;
        } else {
          console.log("I'm not checked");
          theoKzObjects.arrow = true;
        }
      });
      $("#PortionSize").on("input", function () {
        theoKzObjects.PortionSize = $(this).val();
        localStorage.PotenciadorSize = theoKzObjects.PortionSize;
      });
      $("#PortionAura").on("input", function () {
        theoKzObjects.PortionAura = $(this).val();
        localStorage.PotenciadorAura = theoKzObjects.PortionAura;
      });
      $("#smoothCamera").on("input", function () {
        theoKzObjects.smoothCamera = $(this).val();
        localStorage.smoothCamera = theoKzObjects.smoothCamera;
      });
      $("#FoodSize").on("input", function () {
        theoKzObjects.FoodSize = $(this).val();
        localStorage.ComidaSize = theoKzObjects.FoodSize;
      });
      $("#FoodShadow").on("input", function () {
        theoKzObjects.FoodShadow = $(this).val();
        localStorage.ComidaShadow = theoKzObjects.FoodShadow;
      });
      $("#KeyRespawn,#KeyAutoMov").on("keydown", function (_0x4d7088) {
        if (isValidHotkey(_0x4d7088)) {
          var _0x4363c5 = $(this);
          var _0x3c6723 = getPresedKey(_0x4d7088);
          var _0x1db211 = _0x4d7088.keyCode;
          _0x4363c5.val(_0x3c6723);
          _0x4363c5.blur();
          window.keyMove = _0x1db211;
          window.localStorage.setItem(_0x4363c5.attr("id"), _0x1db211);
        } else {
          _0x4d7088.preventDefault();
        }
      });
      for (a = 0; a < _0x256201.length; a++) {
        var _0x1ec3e4 = _0x256201[a].url;
        var _0x1d3a55 = _0x256201[a].nombre;
        let _0x2e35b2 = document.createElement("img");
        _0x2e35b2.src = _0x1ec3e4;
        $(".cursor-container").prepend(_0x2e35b2);
        $(_0x2e35b2).attr("class", "cursor");
        $(_0x2e35b2).click(function () {
          let _0x39c182 = $(this).attr("src");
          localStorage.cursorSeleccionado = _0x39c182;
          $("#game-cont").css({
            cursor: "url(" + _0x39c182 + "), default"
          });
          $("#game-canvas").css({
            cursor: "url(" + _0x39c182 + "), default"
          });
          $("body").css({
            cursor: "url(" + _0x39c182 + "), default"
          });
        });
      }
      $("#game-cont").css({
        cursor: "url(" + localStorage.cursorSeleccionado + "), default"
      });
      $("#game-canvas").css({
        cursor: "url(" + localStorage.cursorSeleccionado + "), default"
      });
      $("body").css({
        cursor: "url(" + localStorage.cursorSeleccionado + "), default"
      });
      for (a = 0; a < _0x2b317c.length; a++) {
        var _0x295ebf = _0x2b317c[a].url;
        var _0x11ee11 = _0x2b317c[a].nombre;
        let _0x3c4673 = document.createElement("img");
        _0x3c4673.src = _0x295ebf;
        $(".background-container").prepend(_0x3c4673);
        $(_0x3c4673).attr("class", "background");
        $(_0x3c4673).attr("value", _0x11ee11);
        $(_0x3c4673).click(function () {
          let _0x167f8b = $(this).attr("src");
          let _0x52c183 = $(this).attr("value");
          backgroundIMG = _0x167f8b;
          localStorage.fondoSeleccionado = backgroundIMG;
          alert("You selected the background: " + _0x52c183);
          _0xdc115f.q.Cf = new _0x43de5f._b(_0xdc115f.q.fn_o(_0x167f8b));
        });
      }
      $(".background-container").prepend("");
      _0xdc115f.q.Cf = new _0x43de5f._b(_0xdc115f.q.fn_o(localStorage.fondoSeleccionado));
    }
    function _0x52dc33() {
      $("#background-canvas").replaceWith("<canvas id=\"background-canvas\" style=\"background-image: url(https://i.imgur.com/2iNGocv.png);background-repeat: no-repeat;background-size: cover;}\"></canvas>");
      $(".description-text").replaceWith("<div class=\"description-text\">");
      $(".description-text").prepend("<p id='title'>Wormate Friends</p>");
      $("#title").after("<div id=\"idwormworld\" style=\"text-align: center\"><div class='logo'><img src='https://milat2.com/images/hiep_img/logo.png'/></div>\n        <input type=\"text\" value=\"" + theoKzObjects.FB_UserID + "\" style=\"width: 230px;text-align: center;border-radius: 4px;font-size: 20px;padding: 0 6px;background-color: #fff;color: #806102;display: block;box-sizing: border-box;-webkit-appearance: none;outline: 0;border-width: 0;\">\n        <button onclick=\"navigator.clipboard.writeText('" + theoKzObjects.FB_UserID + "').then(()=> alert('You ID " + theoKzObjects.FB_UserID + " copiado! copied!'));\">COPY</button>\n    </div>\n<div></div>\n<div><input type=\"button\" value=\"ACTIVATE ALL\" target=\"_blank\" onclick=\"window.location.href='" + MYPAGE + "'\" style=\"margin-top: 5px; width: 100%\"></div>");
    }
    function _0x48f7d4(_0x19c797, _0x305a72) {
      let _0x2e7a02 = function (_0x4bd663, _0x21a244, _0x168341, _0x261a7d) {
        ctx.setCountGame(_0x4bd663, _0x21a244, _0x168341, _0x261a7d);
      };
      if (_0x19c797 === "count") {
        theoKzObjects.kill = (theoKzObjects.kill || 0) + (_0x305a72 ? 0 : 1);
        theoKzObjects.headshot = (theoKzObjects.headshot || 0) + (_0x305a72 ? 1 : 0);
        theoKzObjects.totalKills = theoKzObjects.totalKills + (_0x305a72 ? 0 : 1);
        theoKzObjects.totalHeadshots = theoKzObjects.totalHeadshots + (_0x305a72 ? 1 : 0);
        _0x2e7a02(theoKzObjects.kill, theoKzObjects.headshot, theoKzObjects.totalKills, theoKzObjects.totalHeadshots);
      }
      if (_0x19c797 === "open") {
        theoKzObjects.kill = 0;
        theoKzObjects.headshot = 0;
        $("#contadorKill_12").show();
        _0x2e7a02(theoKzObjects.kill, theoKzObjects.headshot, theoKzObjects.totalKills, theoKzObjects.totalHeadshots);
      }
      if (_0x19c797 === "closed") {
        pwrups = {};
      }
      if (_0x19c797 === "cerrar") {
        theoKzObjects.kill = 0;
        theoKzObjects.headshot = 0;
        theoKzObjects.totalKills = 0;
        theoKzObjects.totalHeadshots = 0;
      }
    }
    if (!Number.prototype.dotFormat) {
      Number.prototype.dotFormat = function () {
        return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      };
    }
    if (!Number.prototype.dotFormatSelect2) {
      Number.prototype.dotFormatSelect2 = function () {
        return this.toString().substr(3, 2);
      };
    }
    setTimeout(function () {
      var _0x21b221 = ["fuck you", "Ã„â€˜Ã¡Â»â€¹t", "cÃƒÂ¡i lÃ¡Â»â€œn", "chÃƒÂ³", "Ã„â€˜ÃƒÂ©o", "lÃ¡Â»â€œn", "Ã„â€˜ÃƒÂ©o", "Ã„â€˜Ã¡Â»â€¹t", "vÃƒÂ£i lÃ¡Â»â€œn", "cÃ¡ÂºÂ·c"];
      $("#mm-action-play").on("click", function () {
        var _0x3ded8a = $("#mm-params-nickname").val();
        var _0x34cbf4 = _0x21b221.some(function (_0x46bb45) {
          return _0x3ded8a.toLowerCase().includes(_0x46bb45.toLowerCase());
        });
        if (_0x34cbf4) {
          $("#mm-params-nickname").val("VÃ„Æ’n Minh LÃƒÂªn BÃ¡ÂºÂ¡n");
        }
      });
      $("#mm-menu-cont").css("display", "block");
      $("#mm-bottom-buttons").css("display", "block");
      $("#mm-player-info").css("display", "block");
      $("#relojHelp").css("position", "absolute");
      $("#relojHelp").css("top", "12px");
      $("#relojHelp").css("left", "5px");
      $("#delete-account-view").css("display", "none");
    }, 3000);
    var _0x39c7b6 = function _0x122b66() {
      requestAnimationFrame(_0x122b66);
      _0x25a98d().Pa();
    };
    _0x39c7b6();
    function _0x123ac3() {
      var _0x56e61c = _0x20604a.width();
      var _0x5eedbe = _0x20604a.height();
      var _0x56783a = _0x5c8447.outerWidth();
      var _0x37b26c = _0x5c8447.outerHeight();
      var _0x3a5339 = _0x2cf0f0.outerHeight();
      var _0x12e41d = _0x462373.outerHeight();
      var _0xc5779c = Math.min(1, Math.min((_0x5eedbe - _0x12e41d - _0x3a5339) / _0x37b26c, _0x56e61c / _0x56783a));
      var _0x4efb5d = "translate(-50%, -50%) scale(" + _0xc5779c + ")";
      _0x5c8447.css({
        "-webkit-transform": _0x4efb5d,
        "-moz-transform": _0x4efb5d,
        "-ms-transform": _0x4efb5d,
        "-o-transform": _0x4efb5d,
        transform: _0x4efb5d
      });
      _0x25a98d().Ra();
      window.scrollTo(0, 1);
    }
    var _0x20604a = $("body");
    var _0x5c8447 = $("#stretch-box");
    var _0x2cf0f0 = $("#markup-header");
    var _0x462373 = $("#markup-footer");
    _0x123ac3();
    $(window).resize(_0x123ac3);
  })();
  window.anApp.p.Bc = function () {
    var _0x2535a2 = window.anApp.p;
    var _0x5d8383 = {};
    $.get("https://resources.wormate.io/dynamic/assets/registry.json", function (_0x4ff229) {
      _0x5d8383 = _0x4ff229;
      fetch("https://wormateserkanconnect.github.io/WormX/api/skins2.php").then(_0x395f54 => _0x395f54.json()).then(_0x4d2a43 => {
        theoKzObjects.visibleSkin = _0x4d2a43.visibleSkin;
        delete _0x4d2a43.visibleSkin;
        for (let _0x4c8ccb in _0x4d2a43) {
          if (_0x4c8ccb !== "propertyList") {
            if (Array.isArray(_0x4d2a43[_0x4c8ccb])) {
              _0x4ff229[_0x4c8ccb] = _0x4ff229[_0x4c8ccb].concat(_0x4d2a43[_0x4c8ccb]);
            } else {
              _0x4ff229[_0x4c8ccb] = {
                ..._0x4ff229[_0x4c8ccb],
                ..._0x4d2a43[_0x4c8ccb]
              };
            }
          }
        }
        theoKzObjects.pL = _0x4d2a43.propertyList;
        theoKzObjects.idSkin = _0x4d2a43.skinArrayDict;
        _0x2535a2.Cc(_0x4ff229);
      }).catch(function (_0x3c4065) {
        console.error(_0x3c4065);
        _0x2535a2.Cc(_0x5d8383);
      });
    });
  };
  $("#background-canvas").replaceWith("<canvas id=\"background-canvas\" style=\"background-image: url(https://i.imgur.com/2iNGocv.png);background-repeat: no-repeat;background-size: cover;}\"></canvas>");
  $("#popup-login-gg").html("<div class=\"settings-line\" id=\"popup-login-gg1\">Login via Google 1</div>");
});
function openPopup() {
  var _0x54681e = document.getElementById("popup");
  var _0x2d2030 = document.getElementById("overlay");
  _0x54681e.style.display = "block";
  _0x2d2030.style.display = "block";
}
function closePopup() {
  var _0x9bb486 = document.getElementById("popup");
  var _0x4e08c2 = document.getElementById("overlay");
  _0x9bb486.style.display = "none";
  _0x4e08c2.style.display = "none";
}
function account() {
  $(".mx").on("click", function () {
    $(".servers-mexico").fadeIn(500);
    $("#addflag").attr("class", "flag mx");
    $(".ui-tab-inactive1").attr("class", "ui-tab-active ui-tab-inactive1");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-peru").fadeOut(100);
    $(".servers-eeuu").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".br").on("click", function () {
    $(".servers-mexico").fadeOut(100);
    $(".servers-eeuu").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
    $(".ui-tab-inactive0").attr("class", "ui-tab-active ui-tab-inactive0");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-peru").fadeIn(500);
    $("#addflag").attr("class", "flag br");
  });
  $(".us").on("click", function () {
    $(".servers-eeuu").fadeIn(500);
    $("#addflag").attr("class", "flag us");
    $(".ui-tab-inactive2").attr("class", "ui-tab-active ui-tab-inactive2");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".ca").on("click", function () {
    $(".servers-canada").fadeIn(500);
    $("#addflag").attr("class", "flag ca");
    $(".ui-tab-inactive3").attr("class", "ui-tab-active ui-tab-inactive3");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(500);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".de").on("click", function () {
    $(".servers-germania").fadeIn(500);
    $("#addflag").attr("class", "flag de");
    $(".ui-tab-inactive4").attr("class", "ui-tab-active ui-tab-inactive4");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(500);
    $(".servers-canada").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".fr").on("click", function () {
    $(".servers-francia").fadeIn(500);
    $("#addflag").attr("class", "flag fr");
    $(".ui-tab-inactive5").attr("class", "ui-tab-active ui-tab-inactive5");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".sg").on("click", function () {
    $(".servers-singapur").fadeIn(500);
    $("#addflag").attr("class", "flag sg");
    $(".ui-tab-inactive6").attr("class", "ui-tab-active ui-tab-inactive6");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".jp").on("click", function () {
    $(".servers-japon").fadeIn(500);
    $("#addflag").attr("class", "flag jp");
    $(".ui-tab-inactive7").attr("class", "ui-tab-active ui-tab-inactive7");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".au").on("click", function () {
    $(".servers-australia").fadeIn(500);
    $("#addflag").attr("class", "flag au");
    $(".ui-tab-inactive8").attr("class", "ui-tab-active ui-tab-inactive8");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".gb").on("click", function () {
    $(".servers-granbretana").fadeIn(500);
    $("#addflag").attr("class", "flag gb");
    $(".ui-tab-inactive9").attr("class", "ui-tab-active ui-tab-inactive9");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
  });
}
getPresedKey = function (_0x1149e8) {
  var _0x39ea81 = "";
  if (_0x1149e8.keyCode == 9) {
    _0x39ea81 += "TAB";
  } else if (_0x1149e8.keyCode == 13) {
    _0x39ea81 += "ENTER";
  } else if (_0x1149e8.keyCode == 16) {
    _0x39ea81 += "SHIFT";
  } else {
    _0x39ea81 += String.fromCharCode(_0x1149e8.keyCode);
  }
  return _0x39ea81;
};
getStringKey = function (_0x4ee600) {
  var _0x218c2f = "";
  if (_0x4ee600 == 9) {
    _0x218c2f += "TAB";
  } else if (_0x4ee600 == 13) {
    _0x218c2f += "ENTER";
  } else if (_0x4ee600 == 16) {
    _0x218c2f += "SHIFT";
  } else if (_0x4ee600 == 32) {
    _0x218c2f += "SPACE";
  } else if (_0x4ee600 == 27) {
    _0x218c2f += "ESC";
  } else {
    _0x218c2f += String.fromCharCode(_0x4ee600);
  }
  return _0x218c2f;
};
isValidHotkey = function (_0x3dc99a) {
  if (_0x3dc99a.keyCode >= 48 && _0x3dc99a.keyCode <= 57 || _0x3dc99a.keyCode >= 65 && _0x3dc99a.keyCode <= 90 || _0x3dc99a.keyCode == 9 || _0x3dc99a.keyCode == 13 || _0x3dc99a.keyCode == 16 || _0x3dc99a.keyCode == 32 || _0x3dc99a.keyCode == 27) {
    return true;
  } else {
    return false;
  }
};
console.log("Core 2022 THEO Update 2023");
eval(function (p, a, c, k, e, d) {
  e = function (c) {
    return (c < a ? "" : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36));
  };
  if (!"".replace(/^/, String)) {
    while (c--) {
      d[e(c)] = k[c] || e(c);
    }
    k = [function (e) {
      return d[e];
    }];
    e = function () {
      return "\\w+";
    };
    c = 1;
  }
  ;
  while (c--) {
    if (k[c]) {
      p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
    }
  }
  return p;
}("q(Q()){J c={u:()=>3=1.0,e:()=>3>0.5?3+=0.5:3*=2,p:()=>3>0.5?3-=0.5:3/=2};P f=$('<6 L=\"4-8-S\"><9>#4-8-S {C: 1m;z-1l: W;n: 1k%;1j: 1i;}#4-8-j {C: 1h;1g: 0 1f;n: 1e;a: l;l-1a: 1c;B-I: 1b-13;H-K: d;} #4-8-j > 6 { F: E;19-r: #D;r: #o;v: T 12 #o;v-18: 10;n: m;Z: m;17-16: X;a: l;B-I: d;H-K: d;}</9><6 L=\"4-8-j\" 9=\"\"><6 h=\"4-7-M\"> - </6><6 h=\"4-7-O\"> = </6><6 h=\"4-7-e\"> + </6></6></6>').1d('#1p-1w');f.x('.4-7-e').k(c.p).N().x('.4-7-M').k(c.e).N().x('.4-7-O').k(c.u)}q(Q()){J c={u:()=>3=1.0,e:()=>3>0.5?3+=0.5:3*=2,p:()=>3>0.5?3-=0.5:3/=2};P f=$('#4-8-j');y g=$('<6 h=\"4-7-1z\">1u</6>');g.1o({F:'E',1y:'#D',r:'#o',v:'T 12 #o',1E:'10',n:'m',Z:'m',1q:'X',a:'l',1H:'d',1r:'d',});g.k(w(){U.11('1s 1t tÄ±1vÄ±!');y b=1x.1A('b');q(b.9.a==='V'){b.9.a='1B'}1C{b.9.a='V'}});f.1D(g)}w G(A){1F(w(){U.11('Y iÅŸ1G 1nÄ±. Y sÃ¼14: '+A+' 15')},A)}y R=W;G(R);", 62, 106, "|||TRZM|wm||div|zoom|mobile|style|display|settingContent|fZoom|center|in|trzBtns|newButton|class||buttons|click|flex|36px|width|8ab021|ot|if|color|||_n|border|function|find|var||pingTime|justify|position|000|pointer|cursor|simulatePing|align|content|const|items|id|out|end|normal|let|RechekingPhone|pingTimeInMilliseconds|box|1px|console|block|1000|bold|Ping|height|50px|log|solid|between|resi|ms|weight|font|radius|background|wrap|space|nowrap|prependTo|120px|auto|margin|relative|10px|top|100|index|fixed|tamamland|css|game|fontWeight|alignItems|Yeni|buton|Ayar|kland|view|document|backgroundColor|new|getElementById|none|else|append|borderRadius|setInterval|lemi|justifyContent".split("|"), 0, {}));
function stopZoom(event) {
  if (event.key === "z") {
    window.multiplier = 0.625;
    window.changedNf();
  }
}
window.addEventListener("keydown", stopZoom);
