var SITE_XTHOST = "https://haylamday.com";
window.detectLog = null;
const _wrmxt = {
  BETAisSkinCustom(_0x2c30fb) {
    var _0x157f77 = /[a-zA-Z]/;
    return typeof _0x2c30fb === "string" && _0x157f77.test(_0x2c30fb);
  },
  testSkinCustom: function (_0x58d3b4) {
    if (_wrmxt.BETAisSkinCustom(_0x58d3b4)) {
      return 34 || 33;
    } else {
      return _0x58d3b4;
    }
  },
  testSkinMod: function (_0x337096) {
    return _0x337096 >= 399 && _0x337096 < 999;
  },
  testWear: function (_0x40dfc9) {
    return _0x40dfc9 >= 399 && _0x40dfc9 < 999;
  },
  isNumberValid: function (_0x343377) {
    return _0x343377 !== "" && _0x343377 !== null && _0x343377 !== undefined && !isNaN(_0x343377);
  },
  validInput: function (_0x4f345b) {
    if (!_wrmxt.testSkinMod(_0x4f345b) && !_wrmxt.BETAisSkinCustom(_0x4f345b)) {
      return _0x4f345b;
    }
    try {
      let _0x56cda3 = $("#inputReplaceSkin").val();
      return encodeURI(_wrmxt.isNumberValid(_0x56cda3) ? _0x56cda3 : 35);
    } catch (_0x3b8513) {
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
    backgroundImage: "url('path_to_image.png')",
    pxy: 110
  }
};
var theoKzObjects = {
  FB_UserID: "",
  smoothCamera: 0.5,
  eat_animation: 0.005,
  flag: "https://i.imgur.com/EkbSd65.png",
  PortionSize: localStorage.PotenciadorSize || 2,
  PortionAura: localStorage.PotenciadorAura || 1.2,
  PortionTransparent: 0.8,
  FoodTransparent: 0.3,
  ModeStremer: false,
  ModeStremerbatop: false,
  ModeStremermuiten: false,
  ModeStremeremoj: false,
  ModeStremerheadshot: false,
  ModeStremersaveheadshot: false,
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
  let _0x189b68 = false;
  theoKzObjects.mobile = false;
  var _0xc12a8a = navigator.userAgent || navigator.vendor || window.opera;
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(_0xc12a8a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(_0xc12a8a.substr(0, 4))) {
    theoKzObjects.mobile = true;
    _0x189b68 = true;
  }
  return _0x189b68;
};
const RechekingPhone = function () {
  let _0xa8663a = false;
  var _0x3f0b2a = navigator.userAgent || navigator.vendor || window.opera;
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(_0x3f0b2a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(_0x3f0b2a.substr(0, 4))) {
    _0xa8663a = true;
  }
  return _0xa8663a;
};
const loadJoy = function (_0x3eb286) {
  let _0x17ed5a;
  try {
    console.log(_0x3eb286);
    theoKzObjects.gamePad ||= theoEvents.joystick;
    if (RechekingPhone() && (_0x3eb286 || theoKzObjects.gamePad.checked)) {
      _0x17ed5a = nipplejs.create(theoKzObjects.gamePad);
      _0x17ed5a.on("move", function (_0x1016c3, _0x27e636) {
        theoEvents.eventoPrincipal.sk = _0x27e636.angle.radian <= Math.PI ? _0x27e636.angle.radian * -1 : Math.PI - (_0x27e636.angle.radian - Math.PI);
        console.log(_0x27e636);
      });
    }
    return _0x17ed5a;
  } catch (_0xc4fb51) {
    console.log(_0xc4fb51);
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
  await fetch("https://ii7modysmp-hue.github.io/mod/API/user.json").then(_0x5933cb => _0x5933cb.json()).then(_0x5c7d6c => {
    if (_0x5c7d6c.success) {
      let _0x358a0a = _0x5c7d6c.Users;
      clientes.clientesActivos = _0x358a0a.filter(_0x214330 => {
        return _0x214330.cliente_ID;
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
  await fetch("https://ii7modysmp-hue.github.io/mod/API/server.json").then(_0x5111c0 => _0x5111c0.json()).then(_0x2c8053 => {
    if (_0x2c8053.success) {
      let _0x4af638 = _0x2c8053.servers;
      servers.Api_listServer = _0x4af638.filter(_0x638121 => {
        return _0x638121.serverUrl;
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
      fontSize: 11,
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
      fontFamily: "vuonghiep",
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
    anheadshot: new PIXI.TextStyle({
      align: "center",
      fill: "#FFF",
      fontSize: 0,
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
ctx.clock = PIXI.Sprite.fromImage("https://i.imgur.com/v6szE9c.png");
ctx.clock.width = 100;
ctx.clock.height = 100;
ctx.clock.x = -50;
ctx.clock.y = -50;
ctx.clockan = PIXI.Sprite.fromImage("https://i.imgur.com/jkOvq9J.png");
if (theoKzObjects.ModeStremeranclock) {
  ctx.clockan.width = 100;
  ctx.clockan.height = 100;
  ctx.clockan.x = -50;
  ctx.clockan.y = -50;
} else {
  ctx.clockan.width = 0;
  ctx.clockan.height = 0;
  ctx.clockan.x = -50;
  ctx.clockan.y = -50;
}
ctx.value_server = new PIXI.Text("BMW", ctx.fontStyle.name);
ctx.value_server.x = 55;
ctx.value_server.y = 0;
ctx.label_hs = new PIXI.Text("HS", ctx.fontStyle.amarillo);
ctx.value1_hs = new PIXI.Text("0", ctx.fontStyle.amarillo);
ctx.label_kill = new PIXI.Text("KL", ctx.fontStyle.morado);
ctx.value1_kill = new PIXI.Text("0", ctx.fontStyle.morado);
if (theoKzObjects.ModeStremersaveheadshot) {
  ctx.value2_hs = new PIXI.Text("", ctx.fontStyle.amarillo1);
  ctx.value2_kill = new PIXI.Text("", ctx.fontStyle.morado1);
} else {
  ctx.value2_hs = new PIXI.Text("", ctx.fontStyle.amarillo1);
  ctx.value2_kill = new PIXI.Text("", ctx.fontStyle.morado1);
}
;
ctx.label_hs.x = 15;
ctx.label_hs.y = 100;
ctx.label_kill.x = 65;
ctx.label_kill.y = 100;
ctx.value1_hs.x = 15;
ctx.value1_hs.y = 116;
ctx.value1_kill.x = 65;
ctx.value1_kill.y = 116;
ctx.value2_hs.x = 15;
ctx.value2_hs.y = 133;
ctx.value2_kill.x = 65;
ctx.value2_kill.y = 133;
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
ctx.borderurl = PIXI.Texture.fromImage("https://i.imgur.com/wYJAfmO0.png");
ctx.onclickServer = PIXI.Texture.fromImage(theoKzObjects.flag);
ctx.containerImgS = new PIXI.Sprite(ctx.imgServerbase);
ctx.containerImgS.anchor.set(0.5);
ctx.containerImgS.x = 0;
ctx.containerImgS.y = 8;
ctx.containerImgS.width = 0;
ctx.containerImgS.height = 0;
ctx.borderImg = new PIXI.Sprite(ctx.borderurl);
ctx.borderImg.anchor.set(0.5);
ctx.borderImg.x = -2;
ctx.borderImg.y = 78;
ctx.borderImg.width = 110;
ctx.borderImg.height = 60;
ctx.setServer = function (_0xcc2052) {
  ctx.value_server.text = _0xcc2052 || "BMW";
};
ctx.setCountGame = function (_0x526227, _0x2aefa2, _0x359c0d, _0x3ae9ac) {
  ctx.value1_hs.text = _0x2aefa2;
  ctx.value1_kill.text = _0x526227;
  ;
  if (theoKzObjects.ModeStremersaveheadshot) {
    ctx.value2_hs.text = _0x3ae9ac;
    ctx.value2_kill.text = _0x359c0d;
  } else {}
  ;
};
"use strict";
var _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (_0x3d270d) {
  return typeof _0x3d270d;
} : function (_0x5b6e32) {
  if (_0x5b6e32 && typeof Symbol == "function" && _0x5b6e32.constructor === Symbol && _0x5b6e32 !== Symbol.prototype) {
    return "symbol";
  } else {
    return typeof _0x5b6e32;
  }
};
var GoogleAuth;
(function () {
  try {
    console.log(function (_0x2006e0, _0xc0ebbd) {
      for (var _0x5122cd = 0; _0x5122cd < _0xc0ebbd.length; _0x5122cd += 2) {
        _0x2006e0 = _0x2006e0.replaceAll(_0xc0ebbd[_0x5122cd], _0xc0ebbd[_0x5122cd + 1]);
      }
      return _0x2006e0;
    }("N-syo.632.oyhs`2./oSo+-2:dhydMdy/32/o+`3:o/62`/o+. .+osYYyso+-.osyQSs6662NyW.63 yW:`+QQ+ -Ms-.:ymmy3+Yo``+Y:6.Qs-+WWhYs:sHhyyHys/6662NoWs63 yW:+Ss:.-+Ss:`M-3.M` .YyySYys32`QSs.2``-Hh-32sH-66 `..3 `..`3N.Wh.63yW-Ss.3`Ss+`Mh/:+hmmo2/yy++yys//Y-3 oS/`Sso`3 ohy6oH.3..6 -Hh. -+Qs/ N /W+62`Wo:Ss32Sso.MMmd+.3syy` .-` :Y+3+Ss//Q+3 +H`32sHhsyHho6-Hh`:S+--+S+N2+W` `+y+2+W.:Ss.3.Ss+/M-:ymmh.2-Y.32+Ys2+Ss+o+/Q-3oH/32Hho-://:`6 Hh`So3`SsN3oHhs-sHhsoW/ `Sso:-:Q.hM-2ymmh. /Yo`3 sYy./Q`3+Sso2`W`3`Hh.66`Hh:So3-SoN3 +Why+yWh/3-oQSso-`Mm:2/Md+/Yy+3 oYy:Q/3 `Q. -W-3`WsYys/`+oo.:Hh//So//Ss-N32-sys:3:S+.6-/+++:-3oHo3 ohdh/`+So:3 .+S/`/oo:6.+s+` `+yyo`3 +yQYs: +oo..shy. -+oSo/. NN", ["W", "hhhh", "Q", "ssss", "M", "mmm", "Y", "yyy", "H", "hh", "S", "ss", "6", "      ", "3", "   ", "2", "  ", "N", "\n"]));
  } catch (_0x1be2bf) {}
})();
window.addEventListener("load", function () {
  function _0x490301() {
    (function (_0x4582e9, _0x4f3ef3, _0x55f3d7) {
      function _0x4df6fd(_0x5855dc, _0x2bf9f2) {
        return (_0x5855dc === undefined ? "undefined" : _typeof(_0x5855dc)) === _0x2bf9f2;
      }
      function _0x531a8b() {
        if (typeof _0x4f3ef3.createElement != "function") {
          return _0x4f3ef3.createElement(arguments[0]);
        } else if (_0x18bc81) {
          return _0x4f3ef3.createElementNS.call(_0x4f3ef3, "http://www.w3.org/2000/svg", arguments[0]);
        } else {
          return _0x4f3ef3.createElement.apply(_0x4f3ef3, arguments);
        }
      }
      var _0xb6cd83 = [];
      var _0x28b9be = [];
      var _0x461cf4 = {
        _version: "3.3.1",
        _config: {
          classPrefix: "",
          enableClasses: true,
          enableJSClass: true,
          usePrefixes: true
        },
        _q: [],
        on: function (_0x3dd970, _0x5380d8) {
          var _0x1ab5f5 = this;
          setTimeout(function () {
            _0x5380d8(_0x1ab5f5[_0x3dd970]);
          }, 0);
        },
        addTest: function (_0x310371, _0x2fc894, _0x1a2e17) {
          _0x28b9be.push({
            name: _0x310371,
            fn: _0x2fc894,
            options: _0x1a2e17
          });
        },
        addAsyncTest: function (_0x575f18) {
          _0x28b9be.push({
            name: null,
            fn: _0x575f18
          });
        }
      };
      function _0xd95151() {}
      _0xd95151.prototype = _0x461cf4;
      _0xd95151 = new _0xd95151();
      var _0x195980 = false;
      try {
        _0x195980 = "WebSocket" in _0x4582e9 && _0x4582e9.WebSocket.CLOSING === 2;
      } catch (_0x59c03d) {}
      _0xd95151.addTest("websockets", _0x195980);
      var _0x2ebc03 = _0x4f3ef3.documentElement;
      var _0x18bc81 = _0x2ebc03.nodeName.toLowerCase() === "svg";
      _0xd95151.addTest("canvas", function () {
        var _0x563e3c = _0x531a8b("canvas");
        return !!_0x563e3c.getContext && !!_0x563e3c.getContext("2d");
      });
      _0xd95151.addTest("canvastext", function () {
        return _0xd95151.canvas !== false && typeof _0x531a8b("canvas").getContext("2d").fillText == "function";
      });
      (function () {
        var _0x32e252;
        var _0x1af29d;
        var _0x1202a7;
        var _0x3ec50c;
        var _0x1377b8;
        var _0x301efe;
        var _0x1afb93;
        for (var _0x5392c3 in _0x28b9be) {
          if (_0x28b9be.hasOwnProperty(_0x5392c3)) {
            _0x32e252 = [];
            _0x1af29d = _0x28b9be[_0x5392c3];
            if (_0x1af29d.name && (_0x32e252.push(_0x1af29d.name.toLowerCase()), _0x1af29d.options && _0x1af29d.options.aliases && _0x1af29d.options.aliases.length)) {
              for (_0x1202a7 = 0; _0x1202a7 < _0x1af29d.options.aliases.length; _0x1202a7++) {
                _0x32e252.push(_0x1af29d.options.aliases[_0x1202a7].toLowerCase());
              }
            }
            _0x3ec50c = _0x4df6fd(_0x1af29d.fn, "function") ? _0x1af29d.fn() : _0x1af29d.fn;
            _0x1377b8 = 0;
            for (; _0x1377b8 < _0x32e252.length; _0x1377b8++) {
              _0x301efe = _0x32e252[_0x1377b8];
              _0x1afb93 = _0x301efe.split(".");
              if (_0x1afb93.length === 1) {
                _0xd95151[_0x1afb93[0]] = _0x3ec50c;
              } else {
                if (!!_0xd95151[_0x1afb93[0]] && !(_0xd95151[_0x1afb93[0]] instanceof Boolean)) {
                  _0xd95151[_0x1afb93[0]] = new Boolean(_0xd95151[_0x1afb93[0]]);
                }
                _0xd95151[_0x1afb93[0]][_0x1afb93[1]] = _0x3ec50c;
              }
              _0xb6cd83.push((_0x3ec50c ? "" : "no-") + _0x1afb93.join("-"));
            }
          }
        }
      })();
      (function (_0x17e08c) {
        var _0x96634f = _0x2ebc03.className;
        var _0x4991ba = _0xd95151._config.classPrefix || "";
        if (_0x18bc81) {
          _0x96634f = _0x96634f.baseVal;
        }
        if (_0xd95151._config.enableJSClass) {
          var _0x517146 = new RegExp("(^|\\s)" + _0x4991ba + "no-js(\\s|$)");
          _0x96634f = _0x96634f.replace(_0x517146, "$1" + _0x4991ba + "js$2");
        }
        if (_0xd95151._config.enableClasses) {
          _0x96634f += " " + _0x4991ba + _0x17e08c.join(" " + _0x4991ba);
          if (_0x18bc81) {
            _0x2ebc03.className.baseVal = _0x96634f;
          } else {
            _0x2ebc03.className = _0x96634f;
          }
        }
      })(_0xb6cd83);
      delete _0x461cf4.addTest;
      delete _0x461cf4.addAsyncTest;
      for (var _0x126950 = 0; _0x126950 < _0xd95151._q.length; _0x126950++) {
        _0xd95151._q[_0x126950]();
      }
      _0x4582e9.Modernizr = _0xd95151;
    })(window, document);
    return Modernizr.websockets && Modernizr.canvas && Modernizr.canvastext;
  }
  function _0x4b501a(_0x1bea6d, _0x53830b, _0x9c9124) {
    const _0x5f1ed8 = [38, 38, 38, 120, 38, 25, 38];
    const _0x4b0ac0 = ["#FFD500", "#FFC75A", "#00B2ED", "#FF4544", "#0094D7", "#CCCF81", "#ff0999"];
    let _0x222771 = _0x5f1ed8[_0x53830b] - parseInt((_0x9c9124 == 0.99 ? 1 : _0x9c9124) * _0x5f1ed8[_0x53830b] / 1);
    const _0x382e85 = new PIXI.TextStyle({
      align: "center",
      fill: _0x4b0ac0[_0x53830b],
      fontSize: 25,
      lineJoin: "round",
      whiteSpace: "normal",
      wordWrap: true,
      fontFamily: "vuonghiep",
      fontWeight: "bold"
    });
    let _0x4a28fb = "pwr_clock" + _0x53830b;
    if (!pwrups[_0x4a28fb] && _0x5f1ed8[_0x53830b] === _0x222771) {
      pwrups[_0x4a28fb] = new PIXI.Text(_0x222771, _0x382e85);
      pwrups[_0x4a28fb].y = 61;
      _0x1bea6d.Tf[_0x53830b].addChild(pwrups[_0x4a28fb]);
    }
    if (pwrups[_0x4a28fb]) {
      pwrups[_0x4a28fb].x = _0x222771 >= 100 ? 11 : _0x222771 >= 10 ? 18 : 26;
      pwrups[_0x4a28fb].text = _0x222771;
      if (_0x222771 === 0) {
        delete pwrups[_0x4a28fb];
      }
    }
  }
  document.getElementById("game-wrap").style.display = "block";
  if (!_0x490301()) {
    document.getElementById("error-view").style.display = "block";
    return;
  }
  (function () {
    function _0x3e47d7() {
      return window.anApp = _0x31baa8;
    }
    function _0x163b12(_0x32ee8a) {
      const _0x309cc9 = _0x32ee8a + "=";
      const _0x5266d5 = document.cookie.split(";");
      for (let _0x492a48 = 0; _0x492a48 < _0x5266d5.length; _0x492a48++) {
        let _0x529b40 = _0x5266d5[_0x492a48];
        while (_0x529b40.charAt(0) === " ") {
          _0x529b40 = _0x529b40.substring(1);
        }
        if (_0x529b40.indexOf(_0x309cc9) === 0) {
          return _0x529b40.substring(_0x309cc9.length, _0x529b40.length);
        }
      }
      return "";
    }
    function _0x1cd4d0(_0x23e13c, _0x2397cc, _0xdec11) {
      var _0x161a8b = new Date();
      _0x161a8b.setTime(_0x161a8b.getTime() + _0xdec11 * 86400000);
      var _0x4d2951 = "expires=" + _0x161a8b.toUTCString();
      document.cookie = _0x23e13c + "=" + _0x2397cc + "; " + _0x4d2951 + "; path=/";
    }
    function _0xeb525f(_0x2eef9c) {
      return window.I18N_MESSAGES[_0x2eef9c];
    }
    function _0x57730c(_0x7d5983) {
      if (_0x7d5983[_0x4c0d26]) {
        return _0x7d5983[_0x4c0d26];
      } else if (_0x7d5983.en) {
        return _0x7d5983.en;
      } else {
        return _0x7d5983.x;
      }
    }
    function _0x3c6e96(_0x9dd19c) {
      var _0x15b7b7 = (Math.floor(_0x9dd19c) % 60).toString();
      var _0xbd0392 = (Math.floor(_0x9dd19c / 60) % 60).toString();
      var _0x3c72c = (Math.floor(_0x9dd19c / 3600) % 24).toString();
      var _0x33c573 = Math.floor(_0x9dd19c / 86400).toString();
      var _0x1a2f04 = _0xeb525f("util.time.days");
      var _0x473c87 = _0xeb525f("util.time.hours");
      var _0x3ec5ea = _0xeb525f("util.time.min");
      var _0xfc5df0 = _0xeb525f("util.time.sec");
      if (_0x33c573 > 0) {
        return _0x33c573 + " " + _0x1a2f04 + " " + _0x3c72c + " " + _0x473c87 + " " + _0xbd0392 + " " + _0x3ec5ea + " " + _0x15b7b7 + " " + _0xfc5df0;
      } else if (_0x3c72c > 0) {
        return _0x3c72c + " " + _0x473c87 + " " + _0xbd0392 + " " + _0x3ec5ea + " " + _0x15b7b7 + " " + _0xfc5df0;
      } else if (_0xbd0392 > 0) {
        return _0xbd0392 + " " + _0x3ec5ea + " " + _0x15b7b7 + " " + _0xfc5df0;
      } else {
        return _0x15b7b7 + " " + _0xfc5df0;
      }
    }
    function _0x3c8808(_0x3d9a70) {
      if (_0x3d9a70.includes("href")) {
        return _0x3d9a70.replaceAll("href", "target=\"_black\" href");
      } else {
        return _0x3d9a70;
      }
    }
    function _0x51627c(_0x5826b7, _0x56f482, _0x1fd68e) {
      var _0x157ca2 = document.createElement("script");
      var _0x37a43d = true;
      if (_0x56f482) {
        _0x157ca2.id = _0x56f482;
      }
      _0x157ca2.async = "async";
      _0x157ca2.type = "text/javascript";
      _0x157ca2.src = _0x5826b7;
      if (_0x1fd68e) {
        _0x157ca2.onload = _0x157ca2.onreadystatechange = function () {
          _0x37a43d = false;
          try {
            _0x1fd68e();
          } catch (_0x48f576) {
            console.log(_0x48f576);
          }
          _0x157ca2.onload = _0x157ca2.onreadystatechange = null;
        };
      }
      (document.head || document.getElementsByTagName("head")[0]).appendChild(_0x157ca2);
    }
    function _0x4d333b(_0xc743ad, _0x151d6f) {
      var _0x14a60a = _0x151d6f;
      _0x14a60a.prototype = Object.create(_0xc743ad.prototype);
      _0x14a60a.prototype.constructor = _0x14a60a;
      _0x14a60a.parent = _0xc743ad;
      return _0x14a60a;
    }
    function _0xfe6fb3(_0x453331) {
      _0x453331 %= _0x4a3488;
      if (_0x453331 < 0) {
        return _0x453331 + _0x4a3488;
      } else {
        return _0x453331;
      }
    }
    function _0x32f56b(_0x5bada7, _0x1e63a4, _0xab4a90) {
      return _0x23a702(_0xab4a90, _0x5bada7, _0x1e63a4);
    }
    function _0x23a702(_0x125001, _0x52eed3, _0x16e8a6) {
      if (_0x125001 > _0x16e8a6) {
        return _0x16e8a6;
      } else if (_0x125001 < _0x52eed3) {
        return _0x52eed3;
      } else if (Number.isFinite(_0x125001)) {
        return _0x125001;
      } else {
        return (_0x52eed3 + _0x16e8a6) * 0.5;
      }
    }
    function _0x2edbc8(_0x316411, _0x321ca2, _0x368fe5, _0x243354) {
      if (_0x321ca2 > _0x316411) {
        return Math.min(_0x321ca2, _0x316411 + _0x368fe5 * _0x243354);
      } else {
        return Math.max(_0x321ca2, _0x316411 - _0x368fe5 * _0x243354);
      }
    }
    function _0x4e129f(_0x303133, _0x3c4569, _0x5e2da4, _0x10c904, _0x316b1d) {
      return _0x3c4569 + (_0x303133 - _0x3c4569) * Math.pow(1 - _0x10c904, _0x5e2da4 / _0x316b1d);
    }
    function _0x1ea9bb(_0x41bce8, _0x8d4afb, _0x39610c) {
      return _0x41bce8 * (1 - _0x39610c) + _0x8d4afb * _0x39610c;
    }
    function _0x225aff(_0xe22f36, _0x2c15c6, _0x385530, _0x26c8f2) {
      var _0x2f18a7 = _0x385530;
      var _0x108c16 = _0x2c15c6;
      var _0x101895 = _0x2c15c6 + _0x26c8f2;
      if (_0xe22f36 == null) {
        throw new TypeError("this is null or not defined");
      }
      var _0x3c7437 = _0xe22f36.length >>> 0;
      var _0x2ff3da = _0x2f18a7 >> 0;
      var _0x3315d9 = _0x2ff3da < 0 ? Math.max(_0x3c7437 + _0x2ff3da, 0) : Math.min(_0x2ff3da, _0x3c7437);
      var _0x59f034 = _0x108c16 >> 0;
      var _0x2aea2f = _0x59f034 < 0 ? Math.max(_0x3c7437 + _0x59f034, 0) : Math.min(_0x59f034, _0x3c7437);
      var _0x17f3f3 = _0x101895 === undefined ? _0x3c7437 : _0x101895 >> 0;
      var _0xc00f54 = _0x17f3f3 < 0 ? Math.max(_0x3c7437 + _0x17f3f3, 0) : Math.min(_0x17f3f3, _0x3c7437);
      var _0x5e9cbb = Math.min(_0xc00f54 - _0x2aea2f, _0x3c7437 - _0x3315d9);
      var _0x1b0f61 = 1;
      for (_0x2aea2f < _0x3315d9 && _0x3315d9 < _0x2aea2f + _0x5e9cbb && (_0x1b0f61 = -1, _0x2aea2f += _0x5e9cbb - 1, _0x3315d9 += _0x5e9cbb - 1); _0x5e9cbb > 0;) {
        if (_0x2aea2f in _0xe22f36) {
          _0xe22f36[_0x3315d9] = _0xe22f36[_0x2aea2f];
        } else {
          delete _0xe22f36[_0x3315d9];
        }
        _0x2aea2f += _0x1b0f61;
        _0x3315d9 += _0x1b0f61;
        _0x5e9cbb--;
      }
      return _0xe22f36;
    }
    function _0x27b83e(_0x50fa3b) {
      return _0x50fa3b.getContext("2d");
    }
    function _0x1e6f8b(_0xe61494) {
      if (_0xe61494.parent != null) {
        _0xe61494.parent.removeChild(_0xe61494);
      }
    }
    function _0x46bffe(_0x15c8be) {
      return _0x15c8be[parseInt(Math.random() * _0x15c8be.length)];
    }
    function _0x53b417() {
      return Math.random().toString(36).substring(2, 15);
    }
    function _0x5d83cc(_0x134eec, _0x5eef67, _0x6ac87c) {
      var _0x5b020e = (1 - Math.abs(_0x6ac87c * 2 - 1)) * _0x5eef67;
      var _0x35335c = _0x5b020e * (1 - Math.abs(_0x134eec / 60 % 2 - 1));
      var _0x6d2ca3 = _0x6ac87c - _0x5b020e / 2;
      if (_0x134eec >= 0 && _0x134eec < 60) {
        return [_0x6d2ca3 + _0x5b020e, _0x6d2ca3 + _0x35335c, _0x6d2ca3 + 0];
      } else if (_0x134eec >= 60 && _0x134eec < 120) {
        return [_0x6d2ca3 + _0x35335c, _0x6d2ca3 + _0x5b020e, _0x6d2ca3 + 0];
      } else if (_0x134eec >= 120 && _0x134eec < 180) {
        return [_0x6d2ca3 + 0, _0x6d2ca3 + _0x5b020e, _0x6d2ca3 + _0x35335c];
      } else if (_0x134eec >= 180 && _0x134eec < 240) {
        return [_0x6d2ca3 + 0, _0x6d2ca3 + _0x35335c, _0x6d2ca3 + _0x5b020e];
      } else if (_0x134eec >= 240 && _0x134eec < 300) {
        return [_0x6d2ca3 + _0x35335c, _0x6d2ca3 + 0, _0x6d2ca3 + _0x5b020e];
      } else {
        return [_0x6d2ca3 + _0x5b020e, _0x6d2ca3 + 0, _0x6d2ca3 + _0x35335c];
      }
    }
    function _0x172311() {
      function _0x3729c4() {
        let _0x2df545 = theoKzObjects.adblock ? 1 : 5;
        $("#adbl-1").text(_0xeb525f("index.game.antiadblocker.msg1"));
        $("#adbl-2").text(_0xeb525f("index.game.antiadblocker.msg2"));
        $("#adbl-3").text(_0xeb525f("index.game.antiadblocker.msg3"));
        $("#adbl-4").text(_0xeb525f("index.game.antiadblocker.msg4").replace("{0}", 10));
        $("#adbl-continue span").text(_0xeb525f("index.game.antiadblocker.continue"));
        $("#adbl-continue").hide();
        $("#" + _0x57142a).fadeIn(500);
        var _0x136780 = _0x2df545;
        for (var _0x2f6879 = 0; _0x2f6879 < _0x2df545; _0x2f6879++) {
          setTimeout(function () {
            _0x136780--;
            $("#adbl-4").text(_0xeb525f("index.game.antiadblocker.msg4").replace("{0}", _0x136780));
            if (_0x136780 === 0) {
              console.log("aipAABC");
              try {
                ga("send", "event", "antiadblocker", window.runtimeHash + "_complete");
              } catch (_0x45f65d) {}
              $("#adbl-continue").fadeIn(200);
            }
          }, (_0x2f6879 + 1) * 1000);
        }
      }
      var _0x427786 = false;
      function _0xa36136() {}
      var _0x1e094b = {};
      var _0x57142a = "JDHnkHtYwyXyVgG9";
      $("#adbl-continue").click(function () {
        $("#" + _0x57142a).fadeOut(500);
        _0xa36136(false);
      });
      _0x1e094b.a = function (_0x4c27d0) {
        _0xa36136 = _0x4c27d0;
        if (!_0x427786) {
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
                AIP_COMPLETE: function (_0x83c365) {
                  console.log("aipC");
                  _0xa36136(true);
                  $("#1eaom01c3pxu9wd3").hide();
                  $("#" + _0x57142a).hide();
                  try {
                    ga("send", "event", "preroll", window.runtimeHash + "_complete");
                  } catch (_0x216582) {}
                },
                AIP_REMOVE: function () {}
              });
            });
            _0x427786 = true;
          } catch (_0x1a73da) {}
        }
      };
      _0x1e094b.b = function () {
        if (aiptag.adplayer !== undefined) {
          console.log("aipS");
          try {
            ga("send", "event", "preroll", window.runtimeHash + "_request");
          } catch (_0x23fa7e) {}
          _0x3729c4();
        } else {
          console.log("aipAABS");
          try {
            ga("send", "event", "antiadblocker", window.runtimeHash + "_start");
          } catch (_0x349a9f) {}
          _0x3729c4();
        }
      };
      return _0x1e094b;
    }
    function _0xd72ab2(_0x242617, _0x28b275) {
      var _0x4f5523 = $("#" + _0x242617);
      var _0x19dc56 = _0x28b275;
      var _0x22d8c4 = {};
      var _0xdfef6c = false;
      _0x22d8c4.a = function () {
        if (!_0xdfef6c) {
          _0x4f5523.empty();
          _0x4f5523.append("<div id='" + _0x19dc56 + "'></div>");
          try {
            try {
              ga("send", "event", "banner", window.runtimeHash + "_display");
            } catch (_0x1b21fa) {}
            aiptag.cmd.display.push(function () {
              aipDisplayTag.display(_0x19dc56);
            });
            _0xdfef6c = true;
          } catch (_0x551723) {}
        }
      };
      _0x22d8c4.c = function () {
        try {
          try {
            ga("send", "event", "banner", window.runtimeHash + "_refresh");
          } catch (_0xc2b3dc) {}
          aiptag.cmd.display.push(function () {
            aipDisplayTag.display(_0x19dc56);
          });
        } catch (_0x2b4a16) {}
      };
      return _0x22d8c4;
    }
    function _0x56f51b() {
      function _0x267da4(_0xe61d3d) {
        var _0x4c2db3 = _0xe61d3d + Math.floor(Math.random() * 65535) * 37;
        _0x1cd4d0(_0x262ee4.d, _0x4c2db3, 30);
      }
      function _0x47bc7b() {
        return parseInt(_0x163b12(_0x262ee4.d)) % 37;
      }
      return function () {
        var _0xf30ed1 = _0x47bc7b();
        console.log("init1 pSC: " + _0xf30ed1);
        if (!(_0xf30ed1 >= 0) || !(_0xf30ed1 < _0x499964.e)) {
          _0xf30ed1 = Math.max(0, _0x499964.e - 2);
          console.log("init2 pSC: " + _0xf30ed1);
        }
        var _0x200f5a = {};
        _0x31baa8 = _0x200f5a;
        _0x200f5a.f = _0x499964;
        _0x200f5a.g = false;
        _0x200f5a.i = Date.now();
        _0x200f5a.j = 0;
        _0x200f5a.k = 0;
        _0x200f5a.l = null;
        _0x200f5a.m = _0x4f20d8;
        _0x200f5a.n = _0x4c0d26;
        _0x200f5a.o = null;
        _0x200f5a.p = null;
        _0x200f5a.q = null;
        _0x200f5a.r = null;
        _0x200f5a.s = null;
        _0x200f5a.t = null;
        _0x200f5a.u = null;
        try {
          if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (_0x2143c0) {
              if (_0x2143c0.coords !== undefined) {
                var _0x3cda7b = _0x2143c0.coords;
                if (_0x3cda7b.latitude !== undefined && _0x3cda7b.longitude !== undefined) {
                  _0x200f5a.l = _0x2143c0;
                }
              }
            }, function (_0x1a4d85) {});
          }
        } catch (_0x13b028) {}
        _0x200f5a.v = function () {
          _0x200f5a.p = new _0x54723d();
          _0x200f5a.q = new _0x3a0f44();
          _0x200f5a.r = new _0x1aff8b();
          _0x200f5a.s = new _0xc86c05();
          _0x200f5a.t = new _0x4ca6d8();
          _0x200f5a.u = new _0x519fd2();
          _0x200f5a.o = new _0x29fec2();
          _0x200f5a.o.z = new _0x182396(_0x200f5a.o);
          _0x200f5a.a();
        };
        _0x200f5a.a = function () {
          try {
            ga("send", "event", "app", window.runtimeHash + "_init");
          } catch (_0x4be87c) {}
          _0x200f5a.o.A = function () {
            _0x200f5a.o.B();
          };
          _0x200f5a.o.C = function () {
            var _0x259dfe = _0x200f5a.s.F.D();
            try {
              ga("send", "event", "game", window.runtimeHash + "_start", _0x259dfe);
            } catch (_0x4e1d77) {}
            _0x200f5a.r.G(_0x1aff8b.AudioState.H);
            _0x200f5a.s.I(_0x200f5a.s.H.J());
          };
          _0x200f5a.o.B = function () {
            try {
              ga("send", "event", "game", window.runtimeHash + "_end");
            } catch (_0x3e171e) {}
            if ($("body").height() >= 430) {
              _0x200f5a.f.K.c();
            }
            _0x200f5a.p.L();
            (function () {
              var _0x2ce457 = Math.floor(_0x200f5a.o.N.M);
              var _0x4ff2cc = _0x200f5a.o.O;
              if (_0x200f5a.u.P()) {
                _0x200f5a.u.Q(function () {
                  _0x200f5a.R(_0x2ce457, _0x4ff2cc);
                });
              } else {
                _0x200f5a.R(_0x2ce457, _0x4ff2cc);
              }
            })();
          };
          _0x200f5a.o.S = function (_0x531687) {
            _0x531687(_0x200f5a.s.H.T(), _0x200f5a.s.H.U());
          };
          _0x200f5a.u.V(function () {
            if (_0x200f5a.p.W) {
              _0x200f5a.r.G(_0x1aff8b.AudioState.F);
              _0x200f5a.s.I(_0x200f5a.s.F);
            }
            if (_0x200f5a.u.P()) {
              try {
                var _0x25ce49 = _0x200f5a.u.X();
                ga("set", "userId", _0x25ce49);
              } catch (_0x335f2e) {}
            }
            if (_0x200f5a.Y() && _0x200f5a.u.P() && !_0x200f5a.u.Z()) {
              _0x200f5a.$(false, false);
              _0x200f5a.s.aa._(new _0x5b7740());
            } else {
              _0x200f5a.ba(true);
            }
          });
          _0x200f5a.p.ca(function () {
            _0x200f5a.r.G(_0x1aff8b.AudioState.F);
            _0x200f5a.s.I(_0x200f5a.s.F);
          });
          _0x200f5a.q.a(function () {
            _0x200f5a.o.a();
            _0x200f5a.r.a();
            _0x200f5a.s.a();
            _0x200f5a.t.a();
            _0x200f5a.p.a();
            _0x200f5a.u.a();
            if (_0x200f5a.Y() && !_0x200f5a.Z()) {
              _0x200f5a.s.aa._(new _0x5b7740());
            } else {
              _0x200f5a.ba(true);
            }
          });
        };
        _0x200f5a.da = function (_0x2fdc4e) {
          if (_0x200f5a.u.P()) {
            var _0x322c77 = _0x200f5a.u.ea();
            $.get(_0x3eaf52 + "/pub/wuid/" + _0x322c77 + "/consent/change?value=" + encodeURI(_0x2fdc4e), function (_0x56841a) {});
          }
        };
        _0x200f5a.fa = function (_0x2c178a) {
          var _0x12d190 = _0x200f5a.u.ea();
          var _0x3c9b63 = _0x200f5a.s.F.D();
          var _0x2d97ae = _0x200f5a.s.F.ga();
          var _0x308480 = _0x200f5a.t.ha(_0x3cdfca.ia);
          var _0x2d8d57 = _0x200f5a.t.ha(_0x3cdfca.ja);
          var _0x230f4e = _0x200f5a.t.ha(_0x3cdfca.ka);
          var _0x24a123 = _0x200f5a.t.ha(_0x3cdfca.la);
          var _0x37027a = _0x200f5a.t.ha(_0x3cdfca.ma);
          var _0x3e50dd = 0;
          if (_0x200f5a.l != null) {
            var _0x2a8042 = _0x200f5a.l.coords.latitude;
            var _0x9f0e4f = _0x200f5a.l.coords.longitude;
            _0x3e50dd = Math.max(0, Math.min(32767, (_0x2a8042 + 90) / 180 * 32768)) << 1 | 1 | Math.max(0, Math.min(65535, (_0x9f0e4f + 180) / 360 * 65536)) << 16;
          }
          _wrmxt.testSkinCustom(_0x308480);
          let _0x2d9172 = "x" + (_0x308480 > 9999 ? "0000" : _0x308480.toString().padStart(4, 0)) + (_0x37027a > 999 ? "000" : _0x37027a.toString().padStart(3, 0)) + (_0x2d8d57 > 999 ? "000" : _0x2d8d57.toString().padStart(3, 0)) + (_0x230f4e > 999 ? "000" : _0x230f4e.toString().padStart(3, 0));
          _0x2d97ae = (_0x2d97ae.length >= 32 ? _0x2d97ae.substr(0, 16) : _0x2d97ae.substr(0, 16).padEnd(16, "x")) + _0x2d9172;
          _0x2d97ae = _0x2d97ae.trim();
          console.log(_0x2d97ae);
          var _0x11e09e = _0x3eaf52 + "/pub/wuid/" + _0x12d190 + "/start?gameMode=" + encodeURI(_0x3c9b63) + "&gh=" + _0x3e50dd + "&nickname=" + encodeURI(_0x2d97ae) + "&skinId=" + _wrmxt.validInput(_0x308480) + "&eyesId=" + encodeURI(_0x2d8d57) + "&mouthId=" + encodeURI(_0x230f4e) + "&glassesId=" + encodeURI(_0x24a123) + "&hatId=" + encodeURI(_0x37027a);
          console.log("urlRequest: " + _0x11e09e);
          $.get(_0x11e09e, function (_0x39276f) {
            var _0x21984b = _0x39276f.server_url;
            _0x2c178a(_0x21984b);
          });
        };
        _0x200f5a.na = function () {
          _0xf30ed1++;
          console.log("start pSC: " + _0xf30ed1);
          if (!_0x200f5a.f.oa && _0xf30ed1 >= _0x200f5a.f.e) {
            _0x200f5a.s.I(_0x200f5a.s.pa);
            _0x200f5a.r.G(_0x1aff8b.AudioState.qa);
            _0x200f5a.f.ra.b();
          } else {
            _0x267da4(_0xf30ed1);
            _0x200f5a.sa();
          }
        };
        _0x200f5a.sa = function (_0x1e66b6) {
          if (_0x200f5a.o.ta()) {
            _0x200f5a.s.I(_0x200f5a.s.ua);
            _0x200f5a.r.G(_0x1aff8b.AudioState.ua);
            var _0x4cb503 = _0x200f5a.s.F.D();
            _0x1cd4d0(_0x262ee4.va, _0x4cb503, 30);
            console.log("save gm: " + _0x4cb503);
            var _0x10c8ab = _0x200f5a.s.xa.wa();
            _0x1cd4d0(_0x262ee4.ya, _0x10c8ab, 30);
            console.log("save sPN: " + _0x10c8ab);
            if (_0x200f5a.u.P()) {
              _0x200f5a.fa(function (_0x360d4c) {
                hoisinhnhanh = _0x1e66b6 ? _0x1e66b6 : _0x360d4c;
                _0x200f5a.o.za(window.server_url || _0x360d4c, _0x200f5a.u.ea());
              });
            } else {
              var _0x11ec5d = _0x200f5a.s.F.ga();
              _0x1cd4d0(_0x262ee4.Aa, _0x11ec5d, 30);
              var _0x560330 = _0x200f5a.t.ha(_0x3cdfca.ia);
              _0x1cd4d0(_0x262ee4.Ba, _0x560330, 30);
              _0x200f5a.fa(function (_0x50a383) {
                hoisinhnhanh = _0x1e66b6 ? _0x1e66b6 : _0x50a383;
                _0x200f5a.o.Ca(_0x50a383, _0x11ec5d, _0x560330);
              });
            }
          }
        };
        _0x200f5a.R = function (_0x923573, _0x52544d) {
          var _0x2d123e = _0x200f5a.s.F.ga();
          _0x200f5a.s.H.Da(_0x923573, _0x52544d, _0x2d123e);
          _0x200f5a.r.G(_0x1aff8b.AudioState.Ea);
          _0x200f5a.s.I(_0x200f5a.s.H.Fa());
        };
        _0x200f5a.Ga = function () {
          if (!_0x200f5a.Ha()) {
            return _0x200f5a.t.Ia();
          }
          var _0x42a2c7 = parseInt(_0x163b12(_0x262ee4.Ba));
          if (_0x42a2c7 != null && _0x200f5a.t.Ja(_0x42a2c7, _0x3cdfca.ia)) {
            return _0x42a2c7;
          } else {
            return _0x200f5a.t.Ia();
          }
        };
        _0x200f5a.Ka = function (_0x527528) {
          _0x1cd4d0(_0x262ee4.La, !!_0x527528, 1800);
        };
        _0x200f5a.Ha = function () {
          return _0x163b12(_0x262ee4.La) === "true";
        };
        _0x200f5a.ba = function (_0x2f5dd5) {
          if (_0x2f5dd5 != _0x200f5a.g) {
            _0x200f5a.g = _0x2f5dd5;
            var _0x400424 = _0x400424 || {};
            _0x400424.consented = _0x2f5dd5;
            _0x400424.gdprConsent = _0x2f5dd5;
            _0x200f5a.f.Ma.a();
            _0x200f5a.f.K.a();
            _0x200f5a.f.ra.a(function (_0x2ced4b) {
              if (_0x2ced4b) {
                _0x267da4(_0xf30ed1 = 0);
              }
              _0x200f5a.sa();
            });
          }
        };
        _0x200f5a.$ = function (_0x57e479, _0x133b36) {
          _0x1cd4d0(_0x262ee4.Na, _0x57e479 ? "true" : "false");
          if (_0x133b36) {
            _0x200f5a.da(_0x57e479);
          }
          _0x200f5a.ba(_0x57e479);
        };
        _0x200f5a.Z = function () {
          switch (_0x163b12(_0x262ee4.Na)) {
            case "true":
              return true;
            default:
              return false;
          }
        };
        _0x200f5a.Y = function () {
          try {
            return !!window.isIPInEEA || _0x200f5a.l != null && !!_0x55172f.Oa(_0x200f5a.l.coords.latitude, _0x200f5a.l.coords.longitude);
          } catch (_0x41004c) {
            return true;
          }
        };
        _0x200f5a.Pa = function () {
          _0x200f5a.j = Date.now();
          _0x200f5a.k = _0x200f5a.j - _0x200f5a.i;
          _0x200f5a.o.Qa(_0x200f5a.j, _0x200f5a.k);
          _0x200f5a.s.Qa(_0x200f5a.j, _0x200f5a.k);
          _0x200f5a.i = _0x200f5a.j;
        };
        _0x200f5a.Ra = function () {
          _0x200f5a.s.Ra();
        };
        return _0x200f5a;
      }();
    }
    function _0x29fec2() {
      var _0x5e7256 = {
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
        fb: new _0x389485(),
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
      _0x5e7256.fb.ub = 500;
      _0x5e7256.N = new _0x3ad486(_0x5e7256.fb);
      _0x5e7256.a = function () {
        _0x5e7256.N.vb(_0x3e47d7().s.H.wb);
        setInterval(function () {
          _0x5e7256.S(function (_0x3f3ad8, _0x2f297d) {
            _0x5e7256.xb(_0x3f3ad8, _0x2f297d);
          });
        }, 10);
      };
      _0x5e7256.yb = function (_0x49844a, _0x12b46e, _0x596b81, _0x3472d8) {
        _0x5e7256.lb = _0x49844a;
        _0x5e7256.mb = _0x12b46e;
        _0x5e7256.nb = _0x596b81;
        _0x5e7256.ob = _0x3472d8;
        _0x5e7256.zb();
      };
      _0x5e7256.Ab = function (_0x1a4843) {
        _0x5e7256.kb = _0x1a4843;
        _0x5e7256.zb();
      };
      _0x5e7256.zb = function () {
        _0x5e7256.pb = _0x5e7256.lb - _0x5e7256.kb;
        _0x5e7256.qb = _0x5e7256.mb + _0x5e7256.kb;
        _0x5e7256.rb = _0x5e7256.nb - _0x5e7256.kb;
        _0x5e7256.sb = _0x5e7256.ob + _0x5e7256.kb;
      };
      _0x5e7256.Qa = function (_0x3a4192, _0x3887a2) {
        _0x5e7256.$a += _0x3887a2;
        _0x5e7256.Za -= _0x5e7256.Ya * 0.2 * _0x3887a2;
        _0x5e7256.z.Bb();
        if (_0x5e7256.db != null && (_0x5e7256.cb === 2 || _0x5e7256.cb === 3)) {
          _0x5e7256.Cb(_0x3a4192, _0x3887a2);
          _0x5e7256.jb = 4 + _0x5e7256.ib * _0x5e7256.N.Db;
        }
        var _0x36357a = 1000 / Math.max(1, _0x3887a2);
        var _0xfa2776 = 0;
        var _0x31eca0 = 0;
        for (; _0x31eca0 < _0x5e7256.Xa.length - 1; _0x31eca0++) {
          _0xfa2776 = _0xfa2776 + _0x5e7256.Xa[_0x31eca0];
          _0x5e7256.Xa[_0x31eca0] = _0x5e7256.Xa[_0x31eca0 + 1];
        }
        _0x5e7256.Xa[_0x5e7256.Xa.length - 1] = _0x36357a;
        _0x5e7256.Wa = (_0xfa2776 + _0x36357a) / _0x5e7256.Xa.length;
      };
      _0x5e7256.Eb = function (_0xc35b4c, _0x24bd4b) {
        return _0xc35b4c > _0x5e7256.pb && _0xc35b4c < _0x5e7256.qb && _0x24bd4b > _0x5e7256.rb && _0x24bd4b < _0x5e7256.sb;
      };
      _0x5e7256.Cb = function (_0x189fea, _0x4e510a) {
        var _0x328f44 = _0x5e7256.$a + _0x5e7256.Za;
        var _0x576695 = (_0x328f44 - _0x5e7256._a) / (_0x5e7256.ab - _0x5e7256._a);
        _0x5e7256.N.Fb(_0x189fea, _0x4e510a);
        _0x5e7256.N.Gb(_0x189fea, _0x4e510a, _0x576695, _0x5e7256.Eb);
        var _0x3dfbd3 = 0;
        var _0x591df9;
        for (_0x591df9 in _0x5e7256.hb) {
          var _0x5689ec = _0x5e7256.hb[_0x591df9];
          _0x5689ec.Fb(_0x189fea, _0x4e510a);
          _0x5689ec.Gb(_0x189fea, _0x4e510a, _0x576695, _0x5e7256.Eb);
          if (_0x5689ec.Hb && _0x5689ec.Db > _0x3dfbd3) {
            _0x3dfbd3 = _0x5689ec.Db;
          }
          if (!_0x5689ec.Ib && (!!(_0x5689ec.Jb < 0.005) || !_0x5689ec.Hb)) {
            _0x5689ec.Kb();
            delete _0x5e7256.hb[_0x5689ec.Mb.Lb];
          }
        }
        _0x5e7256.Ab(_0x3dfbd3 * 3);
        var _0x2603a8;
        for (_0x2603a8 in _0x5e7256.gb) {
          var _0x329eb5 = _0x5e7256.gb[_0x2603a8];
          _0x329eb5.Fb(_0x189fea, _0x4e510a);
          _0x329eb5.Gb(_0x189fea, _0x4e510a, _0x5e7256.Eb);
          if (_0x329eb5.Nb && (_0x329eb5.Jb < 0.005 || !_0x5e7256.Eb(_0x329eb5.Ob, _0x329eb5.Pb))) {
            _0x329eb5.Kb();
            delete _0x5e7256.gb[_0x329eb5.Mb.Lb];
          }
        }
      };
      _0x5e7256.Qb = function (_0x50f4df, _0x377d56) {
        if (_0x5e7256.cb === 1) {
          _0x5e7256.cb = 2;
          _0x5e7256.C();
        }
        var _0x524b5d = _0x3e47d7().j;
        _0x5e7256.bb = _0x50f4df;
        if (_0x50f4df === 0) {
          _0x5e7256._a = _0x524b5d - 95;
          _0x5e7256.ab = _0x524b5d;
          _0x5e7256.$a = _0x5e7256._a;
          _0x5e7256.Za = 0;
        } else {
          _0x5e7256._a = _0x5e7256.ab;
          _0x5e7256.ab = _0x5e7256.ab + _0x377d56;
        }
        var _0x74fe92 = _0x5e7256.$a + _0x5e7256.Za;
        _0x5e7256.Ya = (_0x74fe92 - _0x5e7256._a) / (_0x5e7256.ab - _0x5e7256._a);
      };
      _0x5e7256.Rb = function () {
        if (_0x5e7256.cb === 1 || _0x5e7256.cb === 2) {
          _0x5e7256.cb = 3;
          var _0xb5c900 = _0x5e7256.db;
          setTimeout(function () {
            if (_0x5e7256.cb === 3) {
              _0x5e7256.cb = 0;
            }
            if (_0xb5c900 != null && _0xb5c900 === _0x5e7256.db) {
              _0x5e7256.db.close();
              _0x5e7256.db = null;
            }
          }, 5000);
          _0x5e7256.B();
        }
      };
      _0x5e7256.ta = function () {
        return _0x5e7256.cb !== 2 && (_0x5e7256.cb = 1, _0x5e7256.z.Sb(), _0x5e7256.gb = {}, _0x5e7256.hb = {}, _0x5e7256.N.Tb(), _0x5e7256.db != null && (_0x5e7256.db.close(), _0x5e7256.db = null), true);
      };
      _0x5e7256.Ub = function () {
        _0x5e7256.db = null;
        _0x5e7256.z.Sb();
        if (_0x5e7256.cb !== 3) {
          _0x5e7256.A();
        }
        _0x5e7256.cb = 0;
      };
      _0x5e7256.za = function (_0x2a6552, _0x228ef8) {
        _0x5e7256.Vb(_0x2a6552, function () {
          var _0x1867bd = Math.min(2048, _0x228ef8.length);
          var _0x39e5ba = new ArrayBuffer(6 + _0x1867bd * 2);
          var _0x749503 = new DataView(_0x39e5ba);
          var _0x251a02 = 0;
          _0x749503.setInt8(_0x251a02, 129);
          _0x251a02 = _0x251a02 + 1;
          _0x749503.setInt16(_0x251a02, 2800);
          _0x251a02 = _0x251a02 + 2;
          _0x749503.setInt8(_0x251a02, 1);
          _0x251a02 = _0x251a02 + 1;
          _0x749503.setInt16(_0x251a02, _0x1867bd);
          _0x251a02 = _0x251a02 + 2;
          var _0x28f1c1 = 0;
          for (; _0x28f1c1 < _0x1867bd; _0x28f1c1++) {
            _0x749503.setInt16(_0x251a02, _0x228ef8.charCodeAt(_0x28f1c1));
            _0x251a02 = _0x251a02 + 2;
          }
          _0x5e7256.Wb(_0x39e5ba);
        });
      };
      _0x5e7256.Ca = function (_0x406f01, _0x4d0013, _0x45543) {
        _0x5e7256.Vb(_0x406f01, function () {
          var _0x4a26f0 = Math.min(32, _0x4d0013.length);
          var _0x43fdf8 = new ArrayBuffer(7 + _0x4a26f0 * 2);
          var _0x1d56ce = new DataView(_0x43fdf8);
          var _0x5d8ca8 = 0;
          _0x1d56ce.setInt8(_0x5d8ca8, 129);
          _0x5d8ca8 = _0x5d8ca8 + 1;
          _0x1d56ce.setInt16(_0x5d8ca8, 2800);
          _0x5d8ca8 = _0x5d8ca8 + 2;
          _0x1d56ce.setInt8(_0x5d8ca8, 0);
          _0x5d8ca8 = _0x5d8ca8 + 1;
          _0x1d56ce.setInt16(_0x5d8ca8, _0x45543);
          _0x5d8ca8 = _0x5d8ca8 + 2;
          _0x1d56ce.setInt8(_0x5d8ca8, _0x4a26f0);
          _0x5d8ca8++;
          var _0x8af435 = 0;
          for (; _0x8af435 < _0x4a26f0; _0x8af435++) {
            _0x1d56ce.setInt16(_0x5d8ca8, _0x4d0013.charCodeAt(_0x8af435));
            _0x5d8ca8 = _0x5d8ca8 + 2;
          }
          _0x5e7256.Wb(_0x43fdf8);
        });
      };
      _0x5e7256.Wb = function (_0x548307) {
        try {
          if (_0x5e7256.db != null && _0x5e7256.db.readyState === WebSocket.OPEN) {
            _0x5e7256.db.send(_0x548307);
          }
        } catch (_0x1b6fab) {
          console.log("Socket send error: " + _0x1b6fab);
          _0x5e7256.Ub();
        }
      };
      _0x5e7256.xb = function (_0x437f3c, _0x314e0d) {
        if (!Number.isFinite(_0x437f3c)) {
          _0x437f3c = 0;
        }
        if (_0x5e7256._keepAliveMs == null) {
          _0x5e7256._keepAliveMs = 1000;
        }
        if (_0x5e7256._lastInputSentAt == null) {
          _0x5e7256._lastInputSentAt = 0;
        }
        var _0x4ca5e4 = _0x314e0d ? 128 : 0;
        var _0x42a898 = _0xfe6fb3(_0x437f3c) / _0x4a3488 * 128 & 127;
        var _0x197b7f = (_0x4ca5e4 | _0x42a898) & 255;
        var _0x5de4d5 = typeof performance !== "undefined" && performance.now ? performance.now() : Date.now();
        var _0x2e70f7 = _0x5de4d5 - _0x5e7256._lastInputSentAt > _0x5e7256._keepAliveMs;
        if (_0x5e7256.eb !== _0x197b7f || _0x2e70f7) {
          var _0x97b79 = new ArrayBuffer(1);
          new DataView(_0x97b79).setInt8(0, _0x197b7f);
          _0x5e7256.Wb(_0x97b79);
          _0x5e7256.eb = _0x197b7f;
          _0x5e7256._lastInputSentAt = _0x5de4d5;
        }
      };
      _0x5e7256.Vb = function (_0x302f87, _0x3b75f9) {
        let _0x2ddc57 = loadJoy(!theoKzObjects.mobile);
        var _0x43fcef = _0x5e7256.db = new WebSocket(_0x302f87);
        _0x43fcef.binaryType = "arraybuffer";
        window.onOpen = _0x43fcef.onopen = function () {
          _0x244bed("open");
          if (_0x5e7256.db === _0x43fcef) {
            console.log("Socket opened");
            _0x3b75f9();
            try {
              _0x5e7256.xb(0, false);
            } catch (_0x20d04c) {}
            try {
              if (_0x5e7256._kaTimer) {
                clearInterval(_0x5e7256._kaTimer);
                _0x5e7256._kaTimer = null;
              }
              if (_0x5e7256._keepAliveMs == null) {
                _0x5e7256._keepAliveMs = 1000;
              }
              if (typeof _0x5e7256.eb !== "number") {
                _0x5e7256.eb = 0;
              }
              _0x5e7256._kaTimer = setInterval(function () {
                if (!_0x5e7256.db || _0x5e7256.db.readyState !== WebSocket.OPEN) {
                  return;
                }
                var _0xa61ce3 = new ArrayBuffer(1);
                new DataView(_0xa61ce3).setInt8(0, _0x5e7256.eb & 255);
                _0x5e7256.Wb(_0xa61ce3);
                _0x5e7256._lastInputSentAt = typeof performance !== "undefined" && performance.now ? performance.now() : Date.now();
              }, Math.max(500, _0x5e7256._keepAliveMs));
            } catch (_0x47f76d) {
              console.log(_0x47f76d);
            }
          }
          isPlaying = true;
        };
        window.onclose = _0x43fcef.onclose = function () {
          _0x244bed("closed");
          _wrmxt.aload = false;
          try {
            if (_0x5e7256._kaTimer) {
              clearInterval(_0x5e7256._kaTimer);
              _0x5e7256._kaTimer = null;
            }
          } catch (_0x153da9) {}
          if (_0x5e7256.db === _0x43fcef) {
            console.log("Socket closed");
            _0x5e7256.Ub();
          }
          isPlaying = false;
          if (_0x2ddc57) {
            _0x2ddc57.destroy();
          }
        };
        _0x43fcef.onerror = function (_0x1e004c) {
          try {
            if (_0x5e7256._kaTimer) {
              clearInterval(_0x5e7256._kaTimer);
              _0x5e7256._kaTimer = null;
            }
          } catch (_0x479efd) {}
          if (_0x5e7256.db === _0x43fcef) {
            console.log("Socket error");
            _0x5e7256.Ub();
          }
          isPlaying = false;
          if (_0x2ddc57) {
            _0x2ddc57.destroy();
          }
        };
        _0x43fcef.onmessage = function (_0x4b1cf6) {
          if (_0x5e7256.db === _0x43fcef) {
            _0x5e7256.z.Xb(_0x4b1cf6.data);
          }
        };
      };
      return _0x5e7256;
    }
    var _0x35c782 = "https://wormate.io/images/linelogo-xmas2022.png";
    var _0x53270a = "/images/guest-avatar-xmas2022.png";
    var _0x5f3d40 = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    var _0x3eaf52 = "https://gateway.wormate.io";
    var _0x31d574 = "https://resources.wormate.io";
    var _0x4c0d26 = window.I18N_LANG;
    _0x4c0d26 ||= "en";
    var _0x4f20d8 = undefined;
    switch (_0x4c0d26) {
      case "uk":
        _0x4f20d8 = "uk_UA";
        break;
      case "de":
        _0x4f20d8 = "de_DE";
        break;
      case "fr":
        _0x4f20d8 = "fr_FR";
        break;
      case "ru":
        _0x4f20d8 = "ru_RU";
        break;
      case "es":
        _0x4f20d8 = "es_ES";
        break;
      default:
        _0x4f20d8 = "en_US";
    }
    moment.locale(_0x4f20d8);
    var _0x43616a = false;
    var _0x31baa8 = undefined;
    var _0x43f045 = function () {
      var _0x5a5137 = {
        Yb: eval("PIXI")
      };
      var _0x5f3e80 = _0x5a5137.Yb["BLEND_MODES"];
      var _0x45dc9e = _0x5a5137.Yb["WRAP_MODES"];
      return {
        Zb: _0x5a5137.Yb["Container"],
        $b: _0x5a5137.Yb["BaseTexture"],
        _b: _0x5a5137.Yb["Texture"],
        ac: _0x5a5137.Yb["Renderer"],
        bc: _0x5a5137.Yb["Graphics"],
        cc: _0x5a5137.Yb["Shader"],
        dc: _0x5a5137.Yb["Rectangle"],
        ec: _0x5a5137.Yb["Sprite"],
        fc: _0x5a5137.Yb["Text"],
        gc: _0x5a5137.Yb["Geometry"],
        hc: _0x5a5137.Yb["Mesh"],
        ic: {
          jc: _0x5f3e80["ADD"]
        },
        kc: {
          lc: _0x45dc9e["REPEAT"]
        }
      };
    }();
    var _0x4a3488 = Math.PI * 2;
    (function () {
      var _0x5c46f2 = "Z2V0";
      var _0x137af2 = "=";
      var _0xf95324 = _0x5c46f2 + "SW50";
      var _0x43a524 = _0x5c46f2 + "RmxvYXQ";
      var _0x4bcf42 = [atob(_0xf95324 + "OA=="), atob(_0xf95324 + "MTY" + _0x137af2), atob(_0xf95324 + "MzI" + _0x137af2), atob(_0x43a524 + "zMg=="), atob(_0x43a524 + "2NA==")];
      DataView.prototype.mc = function (_0x3e2104) {
        return this[_0x4bcf42[0]](_0x3e2104);
      };
      DataView.prototype.nc = function (_0x364247) {
        return this[_0x4bcf42[1]](_0x364247);
      };
      DataView.prototype.oc = function (_0x5109c8) {
        return this[_0x4bcf42[2]](_0x5109c8);
      };
      DataView.prototype.pc = function (_0x2b3681) {
        return this[_0x4bcf42[3]](_0x2b3681);
      };
      DataView.prototype.qc = function (_0x410b6b) {
        return this[_0x4bcf42[4]](_0x410b6b);
      };
    })();
    var _0x3dbc55 = function () {
      function _0x84e659(_0x2b6a93) {
        this.rc = _0x2b6a93;
        this.sc = false;
        this.tc = 1;
      }
      _0x84e659.VELOCITY_TYPE = 0;
      _0x84e659.FLEXIBLE_TYPE = 1;
      _0x84e659.MAGNETIC_TYPE = 2;
      _0x84e659.ZOOM_TYPE = 6;
      _0x84e659.X2_TYPE = 3;
      _0x84e659.X5_TYPE = 4;
      _0x84e659.X10_TYPE = 5;
      return _0x84e659;
    }();
    var _0x54723d = function () {
      function _0x424218() {
        this.uc = [];
        this.vc = {};
        this.wc = null;
        this.xc = _0x33b11a.yc();
      }
      function _0x292b95(_0x51c3d3, _0x793783) {
        for (var _0x4df185 in _0x51c3d3) {
          if (_0x51c3d3.hasOwnProperty(_0x4df185)) {
            _0x793783(_0x4df185, _0x51c3d3[_0x4df185]);
          }
        }
      }
      _0x424218.prototype.a = function () {
        this.L();
      };
      _0x424218.prototype.W = function () {
        return this.wc != null;
      };
      _0x424218.prototype.zc = function () {
        if (this.wc != null) {
          return this.wc.revision;
        } else {
          return -1;
        }
      };
      _0x424218.prototype.Ac = function () {
        return this.wc;
      };
      _0x424218.prototype.L = function () {
        var _0xd9d673 = this;
        $.get(_0x31d574 + "/dynamic/assets/revision.json", function (_0x726848) {
          if (_0x726848 > _0xd9d673.zc()) {
            _0xd9d673.Bc();
          }
        });
      };
      _0x424218.prototype.Bc = function () {
        var _0x39b2ba = this;
        $.get(_0x31d574 + "/dynamic/assets/registry.json", function (_0x1cdc3e) {
          if (_0x1cdc3e.revision > _0x39b2ba.zc()) {
            _0x39b2ba.Cc(_0x1cdc3e);
          }
        });
      };
      _0x424218.prototype.ca = function (_0x1b273f) {
        this.uc.push(_0x1b273f);
      };
      _0x424218.prototype.Dc = function () {
        return this.xc;
      };
      _0x424218.prototype.Ec = function () {
        for (var _0x4b43fe = 0; _0x4b43fe < this.uc.length; _0x4b43fe++) {
          this.uc[_0x4b43fe]();
        }
      };
      _0x424218.prototype.Fc = function (_0x1f3633, _0x4ae97d) {
        if (!(_0x1f3633.revision <= this.zc())) {
          var _0x131f32 = _0x4ae97d;
          _0x292b95(this.vc, function (_0x1ed5d2, _0x1bb2c6) {
            var _0x1bcdb7 = _0x131f32[_0x1ed5d2];
            if (_0x1bcdb7 == null || _0x1bb2c6.Gc !== _0x1bcdb7.Gc) {
              print("disposing prev texture: " + _0x1ed5d2 + " at " + _0x1bb2c6.Gc);
              _0x1bb2c6.Hc.destroy();
            }
          });
          this.vc = _0x131f32;
          this.wc = _0x1f3633;
          this.xc = _0x33b11a.Ic(this.wc, this.vc);
          this.Ec();
        }
      };
      _0x424218.prototype.Cc = function (_0xde488c) {
        var _0x367085 = {};
        (function (_0x1a7a33, _0x51f8f4) {
          for (var _0x55a027 in _0x1a7a33) {
            if (_0x1a7a33.hasOwnProperty(_0x55a027)) {
              _0x51f8f4(_0x55a027, _0x1a7a33[_0x55a027]);
            }
          }
        })(_0xde488c.textureDict, function (_0x49a6ce, _0x90bf17) {
          var _0x230c7a = _0x90bf17.custom ? _0x90bf17.relativePath : _0x31d574 + _0x90bf17.relativePath;
          try {
            _0x367085[_0x49a6ce] = new _0x161c58(_0x230c7a, _0x43f045.$b.from(_0x90bf17.file || _0x230c7a));
          } catch (_0x739474) {
            console.log(_0x230c7a);
          }
        });
        this.Fc(_0xde488c, _0x367085);
      };
      return _0x424218;
    }();
    var _0x33b11a = function () {
      function _0x2c2308() {
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
      function _0x34ea66(_0x26e710, _0x1ea198) {
        for (var _0x261136 in _0x26e710) {
          if (_0x26e710.hasOwnProperty(_0x261136)) {
            _0x1ea198(_0x261136, _0x26e710[_0x261136]);
          }
        }
      }
      _0x2c2308.yc = function () {
        var _0x512d49 = new _0x33b11a();
        _0x512d49.Jc = {};
        _0x512d49.Kc = {
          Zc: null,
          $c: null
        };
        _0x512d49.Lc = {};
        _0x512d49.Mc = {
          Zc: null
        };
        _0x512d49.Nc = {};
        _0x512d49.Oc = {
          _c: "#FFFFFF",
          Zc: [],
          $c: []
        };
        _0x512d49.Pc = {};
        _0x512d49.Qc = {
          ad: {},
          bd: _0x512d49.Oc,
          cd: _0x512d49.Kc
        };
        _0x512d49.Rc = {};
        _0x512d49.Sc = {
          Zc: []
        };
        _0x512d49.Tc = {};
        _0x512d49.Uc = {
          Zc: []
        };
        _0x512d49.Vc = {};
        _0x512d49.Wc = {
          Zc: []
        };
        _0x512d49.Xc = {};
        _0x512d49.Yc = {
          Zc: []
        };
        return _0x512d49;
      };
      _0x2c2308.Ic = function (_0x4de5d9, _0xb60ca8) {
        var _0x5ec608 = new _0x33b11a();
        var _0x431859 = {};
        _0x34ea66(_0x4de5d9.colorDict, function (_0x488df9, _0x459e0c) {
          _0x431859[_0x488df9] = _0x459e0c;
        });
        var _0x5dbe6c = {};
        _0x34ea66(_0x4de5d9.regionDict, function (_0x470bc5, _0x3bf83a) {
          _0x5dbe6c[_0x470bc5] = new _0x319955(_0xb60ca8[_0x3bf83a.texture].Hc, _0x3bf83a.x, _0x3bf83a.y, _0x3bf83a.w, _0x3bf83a.h, _0x3bf83a.px, _0x3bf83a.py, _0x3bf83a.pw, _0x3bf83a.ph);
        });
        _0x5ec608.Nc = {};
        for (var _0x443d5f = 0; _0x443d5f < _0x4de5d9.skinArrayDict.length; _0x443d5f++) {
          var _0x56bce3 = _0x4de5d9.skinArrayDict[_0x443d5f];
          _0x5ec608.Nc[_0x56bce3.id] = new _0x33b11a.WormSkinData("#" + _0x431859[_0x56bce3.prime], _0x56bce3.base.map(function (_0x3b2f85) {
            return _0x5dbe6c[_0x3b2f85];
          }), _0x56bce3.glow.map(function (_0x189949) {
            return _0x5dbe6c[_0x189949];
          }));
        }
        var _0x15bde1 = _0x4de5d9.skinUnknown;
        _0x5ec608.Oc = new _0x33b11a.WormSkinData("#" + _0x431859[_0x15bde1.prime], _0x15bde1.base.map(function (_0x3280be) {
          return _0x5dbe6c[_0x3280be];
        }), _0x15bde1.glow.map(function (_0x3f2283) {
          return _0x5dbe6c[_0x3f2283];
        }));
        _0x5ec608.Rc = {};
        _0x34ea66(_0x4de5d9.eyesDict, function (_0x32319a, _0x168180) {
          _0x32319a = parseInt(_0x32319a);
          _0x5ec608.Rc[_0x32319a] = new _0x33b11a.WearSkinData(_0x168180.base.map(function (_0xb7e7fc) {
            return _0x5dbe6c[_0xb7e7fc.region];
          }));
        });
        _0x5ec608.Sc = new _0x33b11a.WearSkinData(_0x4de5d9.eyesUnknown.base.map(function (_0x3ac800) {
          return _0x5dbe6c[_0x3ac800.region];
        }));
        _0x5ec608.Tc = {};
        _0x34ea66(_0x4de5d9.mouthDict, function (_0x2420c5, _0x4b4cae) {
          _0x2420c5 = parseInt(_0x2420c5);
          _0x5ec608.Tc[_0x2420c5] = new _0x33b11a.WearSkinData(_0x4b4cae.base.map(function (_0xfce310) {
            return _0x5dbe6c[_0xfce310.region];
          }));
        });
        _0x5ec608.Uc = new _0x33b11a.WearSkinData(_0x4de5d9.mouthUnknown.base.map(function (_0x39110b) {
          return _0x5dbe6c[_0x39110b.region];
        }));
        _0x5ec608.Vc = {};
        _0x34ea66(_0x4de5d9.glassesDict, function (_0xa50867, _0x24f1e4) {
          _0xa50867 = parseInt(_0xa50867);
          _0x5ec608.Vc[_0xa50867] = new _0x33b11a.WearSkinData(_0x24f1e4.base.map(function (_0x3c4bdf) {
            return _0x5dbe6c[_0x3c4bdf.region];
          }));
        });
        _0x5ec608.Wc = new _0x33b11a.WearSkinData(_0x4de5d9.glassesUnknown.base.map(function (_0x503a65) {
          return _0x5dbe6c[_0x503a65.region];
        }));
        _0x5ec608.Xc = {};
        _0x34ea66(_0x4de5d9.hatDict, function (_0x2b723d, _0x43bedc) {
          _0x2b723d = parseInt(_0x2b723d);
          _0x5ec608.Xc[_0x2b723d] = new _0x33b11a.WearSkinData(_0x43bedc.base.map(function (_0xc0ed76) {
            return _0x5dbe6c[_0xc0ed76.region];
          }));
        });
        _0x5ec608.Yc = new _0x33b11a.WearSkinData(_0x4de5d9.hatUnknown.base.map(function (_0x3cd711) {
          return _0x5dbe6c[_0x3cd711.region];
        }));
        _0x5ec608.Jc = {};
        _0x34ea66(_0x4de5d9.portionDict, function (_0x429e46, _0x4f9a45) {
          _0x429e46 = parseInt(_0x429e46);
          _0x5ec608.Jc[_0x429e46] = new _0x33b11a.PortionSkinData(_0x5dbe6c[_0x4f9a45.base], _0x5dbe6c[_0x4f9a45.glow]);
        });
        var _0x1860e6 = _0x4de5d9.portionUnknown;
        _0x5ec608.Kc = new _0x33b11a.PortionSkinData(_0x5dbe6c[_0x1860e6.base], _0x5dbe6c[_0x1860e6.glow]);
        _0x5ec608.Lc = {};
        _0x34ea66(_0x4de5d9.abilityDict, function (_0x5b293a, _0x2c2521) {
          _0x5b293a = parseInt(_0x5b293a);
          _0x5ec608.Lc[_0x5b293a] = new _0x33b11a.AbilitySkinData(_0x5dbe6c[_0x2c2521.base]);
        });
        var _0x350c3b = _0x4de5d9.abilityUnknown;
        _0x5ec608.Mc = new _0x33b11a.AbilitySkinData(_0x5dbe6c[_0x350c3b.base]);
        _0x5ec608.Pc = {};
        _0x34ea66(_0x4de5d9.teamDict, function (_0x9f3914, _0x513343) {
          _0x9f3914 = parseInt(_0x9f3914);
          _0x5ec608.Pc[_0x9f3914] = new _0x33b11a.TeamSkinData(_0x513343.name, new _0x33b11a.WormSkinData("#" + _0x431859[_0x513343.skin.prime], [], _0x513343.skin.glow.map(function (_0x573e16) {
            return _0x5dbe6c[_0x573e16];
          })), new _0x33b11a.PortionSkinData([], _0x5dbe6c[_0x513343.portion.glow]));
        });
        _0x5ec608.Qc = new _0x33b11a.TeamSkinData({}, _0x5ec608.Oc, _0x5ec608.Kc);
        return _0x5ec608;
      };
      _0x2c2308.prototype.dd = function (_0x114d42) {
        var _0x21adb8 = this.Nc[_0x114d42];
        return _0x21adb8 || this.Oc;
      };
      _0x2c2308.prototype.ed = function (_0x5bcb76) {
        var _0x45be03 = this.Pc[_0x5bcb76];
        return _0x45be03 || this.Qc;
      };
      _0x2c2308.prototype.fd = function (_0x3eea0e) {
        var _0xead8a2 = this.Rc[_0x3eea0e];
        return _0xead8a2 || this.Sc;
      };
      _0x2c2308.prototype.gd = function (_0x58cc6c) {
        var _0xa4d525 = this.Tc[_0x58cc6c];
        return _0xa4d525 || this.Uc;
      };
      _0x2c2308.prototype.hd = function (_0x55a476) {
        var _0x115515 = this.Vc[_0x55a476];
        return _0x115515 || this.Wc;
      };
      _0x2c2308.prototype.jd = function (_0x5cfaaa) {
        var _0x2d969e = this.Xc[_0x5cfaaa];
        return _0x2d969e || this.Yc;
      };
      _0x2c2308.prototype.kd = function (_0x3621e5) {
        var _0xc1c10e = this.Jc[_0x3621e5];
        return _0xc1c10e || this.Kc;
      };
      _0x2c2308.prototype.ld = function (_0x4e6222) {
        var _0x438df8 = this.Lc[_0x4e6222];
        return _0x438df8 || this.Mc;
      };
      _0x2c2308.TeamSkinData = function () {
        function _0x4923ac(_0x40a2f8, _0x5264bc, _0x15a497) {
          this.ad = _0x40a2f8;
          this.bd = _0x5264bc;
          this.cd = _0x15a497;
        }
        return _0x4923ac;
      }();
      _0x2c2308.WormSkinData = function () {
        function _0x450597(_0x6174ff, _0x252dc9, _0x399bb6) {
          this._c = _0x6174ff;
          this.Zc = _0x252dc9;
          this.$c = _0x399bb6;
        }
        return _0x450597;
      }();
      _0x2c2308.WearSkinData = function () {
        function _0x2926f0(_0x3dafa4) {
          this.Zc = _0x3dafa4;
        }
        return _0x2926f0;
      }();
      _0x2c2308.PortionSkinData = function () {
        function _0x3a17d0(_0xdb7cca, _0xf1a32b) {
          this.Zc = _0xdb7cca;
          this.$c = _0xf1a32b;
        }
        return _0x3a17d0;
      }();
      _0x2c2308.AbilitySkinData = function () {
        function _0x517bbf(_0x590a6b) {
          this.Zc = _0x590a6b;
        }
        return _0x517bbf;
      }();
      return _0x2c2308;
    }();
    var _0x1aff8b = function () {
      function _0x2dba19() {
        this.md = _0x1aff8b.AudioState.ua;
        this.nd = false;
        this.od = false;
        this.pd = null;
        this.qd = null;
      }
      _0x2dba19.prototype.a = function () {};
      _0x2dba19.prototype.rd = function (_0x31a884) {
        this.od = _0x31a884;
      };
      _0x2dba19.prototype.G = function (_0x2cf9cb) {
        this.md = _0x2cf9cb;
        this.sd();
      };
      _0x2dba19.prototype.td = function (_0x40afe0) {
        this.nd = _0x40afe0;
        this.sd();
      };
      _0x2dba19.prototype.sd = function () {};
      _0x2dba19.prototype.ud = function (_0x2b495a, _0x667549) {
        if (!_0x3e47d7().p.W) {
          return null;
        }
        var _0x1b2ddc = _0x2b495a[_0x667549];
        if (_0x1b2ddc == null || _0x1b2ddc.length == 0) {
          return null;
        } else {
          return _0x1b2ddc[Math.floor(Math.random() * _0x1b2ddc.length)].cloneNode();
        }
      };
      _0x2dba19.prototype.vd = function (_0xe07471, _0x1d137c, _0x2ed11b) {
        if (this.od && !(_0x2ed11b <= 0)) {
          var _0x38b850 = this.ud(_0xe07471, _0x1d137c);
          if (_0x38b850 != null) {
            _0x38b850.volume = Math.min(1, _0x2ed11b);
            _0x38b850.play();
          }
        }
      };
      _0x2dba19.prototype.wd = function (_0x4d6a05, _0x5a741b) {
        if (this.md.xd) {
          this.vd(app.q.yd, _0x4d6a05, _0x5a741b);
        }
      };
      _0x2dba19.prototype.zd = function (_0x556cc5, _0xb221ef) {
        if (this.md.Ad) {
          this.vd(app.q.Bd, _0x556cc5, _0xb221ef);
        }
      };
      _0x2dba19.prototype.Cd = function () {};
      _0x2dba19.prototype.Dd = function () {};
      _0x2dba19.prototype.Ed = function () {};
      _0x2dba19.prototype.Fd = function () {};
      _0x2dba19.prototype.Gd = function () {};
      _0x2dba19.prototype.Hd = function () {};
      _0x2dba19.prototype.Id = function (_0x500a23, _0x10b545, _0x5e1e05) {};
      _0x2dba19.prototype.Jd = function (_0x2fed67) {};
      _0x2dba19.prototype.Kd = function (_0x4c9094) {};
      _0x2dba19.prototype.Ld = function (_0x230fe8) {};
      _0x2dba19.prototype.Md = function (_0x4c175d) {};
      _0x2dba19.prototype.Nd = function (_0x3ac30b) {};
      _0x2dba19.prototype.Od = function (_0x4f9b10) {};
      _0x2dba19.prototype.Pd = function (_0x5547a9) {};
      _0x2dba19.prototype.Qd = function (_0x3b545b) {};
      _0x2dba19.prototype.Rd = function (_0x1ad6c3) {};
      _0x2dba19.prototype.Sd = function (_0x43a495) {};
      _0x2dba19.prototype.Td = function (_0x488120) {};
      _0x2dba19.prototype.Ud = function (_0x14f684) {};
      _0x2dba19.prototype.Vd = function (_0x1ac131) {};
      _0x2dba19.prototype.Wd = function (_0x131cec) {};
      _0x2dba19.prototype.Xd = function (_0x47f16d, _0x3a2869) {};
      _0x2dba19.prototype.Yd = function (_0x76794e) {};
      _0x2dba19.prototype.Zd = function (_0x4ad91b, _0x4cd0f5, _0x5939ed) {};
      (function () {
        function _0x593354(_0xf7e735) {
          this.$d = new _0x5e1c15(_0xf7e735, 0.5);
          this.$d._d.loop = true;
          this.ae = false;
        }
        _0x593354.prototype.be = function (_0x4e3278) {
          if (_0x4e3278) {
            this.b();
          } else {
            this.ce();
          }
        };
        _0x593354.prototype.b = function () {
          if (!this.ae) {
            this.ae = true;
            this.$d.de = 0;
            this.$d.ee(1500, 100);
          }
        };
        _0x593354.prototype.ce = function () {
          if (this.ae) {
            this.ae = false;
            this.$d.fe(1500, 100);
          }
        };
      })();
      (function () {
        function _0x1f10a8(_0x5c7d4c) {
          this.ge = _0x5c7d4c.map(function (_0x17c13a) {
            return new _0x5e1c15(_0x17c13a, 0.4);
          });
          _0x289828(this.ge, 0, this.ge.length);
          this.he = null;
          this.ie = 0;
          this.ae = false;
          this.je = 10000;
        }
        function _0x289828(_0x43e4cd, _0x2a2dd5, _0x478766) {
          for (var _0x4bc0a9 = _0x478766 - 1; _0x4bc0a9 > _0x2a2dd5; _0x4bc0a9--) {
            var _0x4a0130 = _0x2a2dd5 + Math.floor(Math.random() * (_0x4bc0a9 - _0x2a2dd5 + 1));
            var _0x165d16 = _0x43e4cd[_0x4bc0a9];
            _0x43e4cd[_0x4bc0a9] = _0x43e4cd[_0x4a0130];
            _0x43e4cd[_0x4a0130] = _0x165d16;
          }
        }
        _0x1f10a8.prototype.be = function (_0x29975c) {
          if (_0x29975c) {
            this.b();
          } else {
            this.ce();
          }
        };
        _0x1f10a8.prototype.b = function () {
          if (!this.ae) {
            this.ae = true;
            this.ke(1500);
          }
        };
        _0x1f10a8.prototype.ce = function () {
          if (this.ae) {
            this.ae = false;
            if (this.he != null) {
              this.he.fe(800, 50);
            }
          }
        };
        _0x1f10a8.prototype.ke = function (_0x4a2324) {
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
            this.he.ee(_0x4a2324, 100);
            var _0x25797b = (this.he._d.duration - this.he._d.currentTime) * 1000 - this.je;
            var _0x15a3e6 = this;
            var _0x25593b = setTimeout(function () {
              if (_0x15a3e6.ae && _0x25593b == _0x15a3e6.ie) {
                _0x15a3e6.he.fe(_0x15a3e6.je, 100);
                _0x15a3e6.he = _0x15a3e6.le();
                _0x15a3e6.he._d.currentTime = 0;
                _0x15a3e6.ke(_0x15a3e6.je);
              }
            }, _0x25797b);
            this.ie = _0x25593b;
          }
        };
        _0x1f10a8.prototype.le = function () {
          var _0x41fa63 = this.ge[0];
          var _0x42b366 = Math.max(1, this.ge.length / 2);
          _0x289828(this.ge, _0x42b366, this.ge.length);
          this.ge.push(this.ge.shift());
          return _0x41fa63;
        };
      })();
      var _0x5e1c15 = function () {
        function _0x3613f0(_0x5922fe, _0x15ab97) {
          this._d = _0x5922fe;
          this.me = _0x15ab97;
          this.de = 0;
          _0x5922fe.volume = 0;
          this.ne = 0;
          this.oe = false;
        }
        _0x3613f0.prototype.ee = function (_0x2372a9, _0x2a7e1f) {
          console.log("fade IN " + this._d.src);
          this.pe(true, _0x2372a9, _0x2a7e1f);
        };
        _0x3613f0.prototype.fe = function (_0x42b25d, _0x569b73) {
          console.log("fade OUT " + this._d.src);
          this.pe(false, _0x42b25d, _0x569b73);
        };
        _0x3613f0.prototype.pe = function (_0x11955e, _0x21380b, _0x210c5d) {
          if (this.oe) {
            clearInterval(this.ne);
          }
          var _0x2eb53b = this;
          var _0x5231df = 1 / (_0x21380b / _0x210c5d);
          var _0x3143c4 = setInterval(function () {
            if (_0x2eb53b.oe && _0x3143c4 != _0x2eb53b.ne) {
              clearInterval(_0x3143c4);
              return;
            }
            if (_0x11955e) {
              _0x2eb53b.de = Math.min(1, _0x2eb53b.de + _0x5231df);
              _0x2eb53b._d.volume = _0x2eb53b.de * _0x2eb53b.me;
              if (_0x2eb53b.de >= 1) {
                _0x2eb53b.oe = false;
                clearInterval(_0x3143c4);
              }
            } else {
              _0x2eb53b.de = Math.max(0, _0x2eb53b.de - _0x5231df);
              _0x2eb53b._d.volume = _0x2eb53b.de * _0x2eb53b.me;
              if (_0x2eb53b.de <= 0) {
                _0x2eb53b._d.pause();
                _0x2eb53b.oe = false;
                clearInterval(_0x3143c4);
              }
            }
          }, _0x210c5d);
          this.oe = true;
          this.ne = _0x3143c4;
          this._d.play();
        };
        return _0x3613f0;
      }();
      _0x2dba19.AudioState = {
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
      return _0x2dba19;
    }();
    var _0x21a029 = function () {
      function _0x44faf0(_0x466371) {
        this.se = _0x466371;
        this.te = _0x466371.get()[0];
        this.ue = new _0x43f045.ac({
          view: this.te,
          backgroundColor: _0x3c84a1,
          antialias: true
        });
        this.ve = new _0x43f045.Zb();
        this.ve.sortableChildren = true;
        this.we = [];
        this.xe = [];
        this.ye = [];
        this.a();
      }
      var _0x3c84a1 = 0;
      function _0x2ce268(_0x54b830, _0x2c838a) {
        return _0x54b830 + Math.random(_0x2c838a - _0x54b830);
      }
      function _0x5c633f(_0x4ae700) {
        if (_0x4ae700 >= 0) {
          return Math.cos(_0x4ae700 % _0x4a3488);
        } else {
          return Math.cos(_0x4ae700 % _0x4a3488 + _0x4a3488);
        }
      }
      function _0x1a6cde(_0x5ef980) {
        if (_0x5ef980 >= 0) {
          return Math.sin(_0x5ef980 % _0x4a3488);
        } else {
          return Math.sin(_0x5ef980 % _0x4a3488 + _0x4a3488);
        }
      }
      var _0x222ee9 = [{
        ze: _0x2ce268(0, _0x4a3488),
        Ae: _0x2ce268(0, _0x4a3488),
        Be: _0x2ce268(0.1, 0.5),
        Ce: 1,
        De: 2,
        Ee: 16737962
      }, {
        ze: _0x2ce268(0, _0x4a3488),
        Ae: _0x2ce268(0, _0x4a3488),
        Be: _0x2ce268(0.1, 0.5),
        Ce: 1.5,
        De: 1.5,
        Ee: 16746632
      }, {
        ze: _0x2ce268(0, _0x4a3488),
        Ae: _0x2ce268(0, _0x4a3488),
        Be: _0x2ce268(0.1, 0.5),
        Ce: 2,
        De: 1,
        Ee: 16755302
      }, {
        ze: _0x2ce268(0, _0x4a3488),
        Ae: _0x2ce268(0, _0x4a3488),
        Be: _0x2ce268(0.1, 0.5),
        Ce: 3,
        De: 2,
        Ee: 11206502
      }, {
        ze: _0x2ce268(0, _0x4a3488),
        Ae: _0x2ce268(0, _0x4a3488),
        Be: _0x2ce268(0.1, 0.5),
        Ce: 2.5,
        De: 2.5,
        Ee: 8978312
      }, {
        ze: _0x2ce268(0, _0x4a3488),
        Ae: _0x2ce268(0, _0x4a3488),
        Be: _0x2ce268(0.1, 0.5),
        Ce: 2,
        De: 3,
        Ee: 6750122
      }, {
        ze: _0x2ce268(0, _0x4a3488),
        Ae: _0x2ce268(0, _0x4a3488),
        Be: _0x2ce268(0.1, 0.5),
        Ce: 5,
        De: 4,
        Ee: 6728447
      }, {
        ze: _0x2ce268(0, _0x4a3488),
        Ae: _0x2ce268(0, _0x4a3488),
        Be: _0x2ce268(0.1, 0.5),
        Ce: 4.5,
        De: 4.5,
        Ee: 8947967
      }, {
        ze: _0x2ce268(0, _0x4a3488),
        Ae: _0x2ce268(0, _0x4a3488),
        Be: _0x2ce268(0.1, 0.5),
        Ce: 4,
        De: 5,
        Ee: 11167487
      }];
      _0x44faf0.prototype.a = function () {
        var _0x1f2bea = _0x3e47d7();
        this.ue.backgroundColor = _0x3c84a1;
        this.we = new Array(_0x222ee9.length);
        for (var _0x1aa401 = 0; _0x1aa401 < this.we.length; _0x1aa401++) {
          this.we[_0x1aa401] = new _0x43f045.ec();
          this.we[_0x1aa401].texture = _0x1f2bea.q.Fe;
          this.we[_0x1aa401].anchor.set(0.5);
          this.we[_0x1aa401].zIndex = 1;
          this.ve.addChild(this.we[_0x1aa401]);
        }
        this.xe = new Array(_0x1f2bea.q.Ge.length);
        for (var _0x416538 = 0; _0x416538 < this.xe.length; _0x416538++) {
          this.xe[_0x416538] = new _0x43f045.ec();
          this.xe[_0x416538].texture = _0x1f2bea.q.Ge[_0x416538];
          this.xe[_0x416538].anchor.set(0.5);
          this.xe[_0x416538].zIndex = 2;
          this.ve.addChild(this.xe[_0x416538]);
        }
        this.ye = new Array(this.xe.length);
        for (var _0x379697 = 0; _0x379697 < this.ye.length; _0x379697++) {
          this.ye[_0x379697] = {
            He: Math.random(),
            Ie: Math.random(),
            Je: Math.random(),
            Ke: Math.random()
          };
        }
        this.Ra();
      };
      _0x44faf0.sc = false;
      _0x44faf0.Le = function (_0x4bf437) {
        _0x44faf0.sc = _0x4bf437;
      };
      _0x44faf0.prototype.Ra = function () {
        var _0x5133fa = window.devicePixelRatio ? window.devicePixelRatio : 1;
        var _0x39fa41 = this.se.width();
        var _0x32bbae = this.se.height();
        this.ue.resize(_0x39fa41, _0x32bbae);
        this.ue.resolution = _0x5133fa;
        this.te.width = _0x5133fa * _0x39fa41;
        this.te.height = _0x5133fa * _0x32bbae;
        var _0x57fc1a = Math.max(_0x39fa41, _0x32bbae) * 0.8;
        for (var _0x1453ae = 0; _0x1453ae < this.we.length; _0x1453ae++) {
          this.we[_0x1453ae].width = _0x57fc1a;
          this.we[_0x1453ae].height = _0x57fc1a;
        }
      };
      _0x44faf0.prototype.Pa = function (_0x4b49ed, _0x492f17) {
        if (_0x44faf0.sc) {
          var _0x593926 = _0x4b49ed / 1000;
          var _0x10bdb7 = _0x492f17 / 1000;
          var _0xa5cf07 = this.se.width();
          var _0x2b15fc = this.se.height();
          for (var _0x4b7ef1 = 0; _0x4b7ef1 < this.we.length; _0x4b7ef1++) {
            var _0x5b99b9 = _0x222ee9[_0x4b7ef1 % _0x222ee9.length];
            var _0x284b72 = this.we[_0x4b7ef1];
            var _0x417374 = _0x5c633f(_0x5b99b9.Ce * (_0x593926 * 0.08) + _0x5b99b9.Ae);
            var _0x333e5e = _0x1a6cde(_0x5b99b9.De * (_0x593926 * 0.08));
            var _0x4b7e32 = 0.2 + _0x5c633f(_0x5b99b9.Ae + _0x5b99b9.Be * _0x593926) * 0.2;
            _0x284b72.tint = _0x5b99b9.Ee;
            _0x284b72.alpha = _0x4b7e32;
            _0x284b72.position.set(_0xa5cf07 * (0.2 + (_0x417374 + 1) * 0.5 * 0.6), _0x2b15fc * (0.1 + (_0x333e5e + 1) * 0.5 * 0.8));
          }
          var _0x473782 = Math.max(_0xa5cf07, _0x2b15fc) * 0.05;
          for (var _0x3f2845 = 0; _0x3f2845 < this.xe.length; _0x3f2845++) {
            var _0x446164 = this.ye[_0x3f2845];
            var _0x21bcbd = this.xe[_0x3f2845];
            var _0x228415 = _0x4a3488 * _0x3f2845 / this.xe.length + _0x446164.He;
            _0x446164.Ke += _0x446164.Ie * _0x10bdb7;
            if (_0x446164.Ke > 1.3) {
              _0x446164.He = Math.random() * _0x4a3488;
              _0x446164.Ie = (0.09 + Math.random() * 0.07) * 0.66;
              _0x446164.Je = 0.15 + Math.random() * 0.7;
              _0x446164.Ke = -0.3;
            }
            var _0x5bec64 = _0x446164.Je + Math.sin(Math.sin(_0x228415 + _0x593926 * 0.48) * 6) * 0.03;
            var _0x4e6486 = _0x446164.Ke;
            var _0x35cfe1 = _0x23a702(Math.sin(Math.PI * _0x4e6486), 0.1, 1);
            var _0x5a4eb6 = (0.4 + (1 + Math.sin(_0x228415 + _0x593926 * 0.12)) * 0.5 * 1.2) * 0.5;
            var _0xd0e3b2 = _0x228415 + _0x446164.Ie * 2 * _0x593926;
            _0x21bcbd.alpha = _0x35cfe1;
            _0x21bcbd.position.set(_0xa5cf07 * _0x5bec64, _0x2b15fc * _0x4e6486);
            _0x21bcbd.rotation = _0xd0e3b2;
            var _0x2d6789 = _0x21bcbd.texture.width / _0x21bcbd.texture.height;
            _0x21bcbd.width = _0x5a4eb6 * _0x473782;
            _0x21bcbd.height = _0x5a4eb6 * _0x473782 * _0x2d6789;
          }
          this.ue.render(this.ve, null, true);
        }
      };
      return _0x44faf0;
    }();
    var _0x262ee4 = function () {
      function _0x26f368() {}
      _0x26f368.Na = "consent_state_2";
      _0x26f368.ya = "showPlayerNames";
      _0x26f368.Me = "musicEnabled";
      _0x26f368.Ne = "sfxEnabled";
      _0x26f368.Oe = "account_type";
      _0x26f368.va = "gameMode";
      _0x26f368.Aa = "nickname";
      _0x26f368.Ba = "skin";
      _0x26f368.d = "prerollCount";
      _0x26f368.La = "shared";
      return _0x26f368;
    }();
    var _0x55172f = function () {
      function _0xdfb57d(_0x2d0073, _0x20171c, _0x37186e) {
        var _0x5573e1 = false;
        for (var _0x39f6ad = _0x37186e.length, _0x4faf48 = 0, _0x4d204c = _0x39f6ad - 1; _0x4faf48 < _0x39f6ad; _0x4d204c = _0x4faf48++) {
          if (_0x37186e[_0x4faf48][1] > _0x20171c != _0x37186e[_0x4d204c][1] > _0x20171c && _0x2d0073 < (_0x37186e[_0x4d204c][0] - _0x37186e[_0x4faf48][0]) * (_0x20171c - _0x37186e[_0x4faf48][1]) / (_0x37186e[_0x4d204c][1] - _0x37186e[_0x4faf48][1]) + _0x37186e[_0x4faf48][0]) {
            _0x5573e1 = !_0x5573e1;
          }
        }
        return _0x5573e1;
      }
      var _0x2c1cd6 = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
      return {
        Oa: function (_0x376f3e, _0x5561f1) {
          return _0xdfb57d(_0x5561f1, _0x376f3e, _0x2c1cd6);
        }
      };
    }();
    var _0x2ef929 = function () {
      function _0x41b30a(_0x9bf4f9) {
        var _0x21469a = undefined;
        _0x21469a = _0x9bf4f9 > 0 ? "+" + Math.floor(_0x9bf4f9) : _0x9bf4f9 < 0 ? "-" + Math.floor(_0x9bf4f9) : "0";
        var _0x55e560 = Math.min(1.5, 0.5 + _0x9bf4f9 / 600);
        var _0x35ede0 = undefined;
        if (_0x9bf4f9 < 1) {
          _0x35ede0 = "0xFFFFFF";
        } else if (_0x9bf4f9 < 30) {
          var _0x3ed3a8 = (_0x9bf4f9 - 1) / 29;
          _0x35ede0 = _0x42728b((1 - _0x3ed3a8) * 1 + _0x3ed3a8 * 0.96, (1 - _0x3ed3a8) * 1 + _0x3ed3a8 * 0.82, (1 - _0x3ed3a8) * 1 + _0x3ed3a8 * 0);
        } else if (_0x9bf4f9 < 300) {
          var _0x153ba9 = (_0x9bf4f9 - 30) / 270;
          _0x35ede0 = _0x42728b((1 - _0x153ba9) * 0.96 + _0x153ba9 * 0.93, (1 - _0x153ba9) * 0.82 + _0x153ba9 * 0.34, (1 - _0x153ba9) * 0 + _0x153ba9 * 0.25);
        } else if (_0x9bf4f9 < 700) {
          var _0x3eb6ab = (_0x9bf4f9 - 300) / 400;
          _0x35ede0 = _0x42728b((1 - _0x3eb6ab) * 0.93 + _0x3eb6ab * 0.98, (1 - _0x3eb6ab) * 0.34 + _0x3eb6ab * 0, (1 - _0x3eb6ab) * 0.25 + _0x3eb6ab * 0.98);
        } else {
          _0x35ede0 = _0x42728b(0.98, 0, 0.98);
        }
        var _0x4f8b86 = Math.random();
        var _0xd6788d = 1 + Math.random() * 0.5;
        return new _0xc30e16(_0x21469a, _0x35ede0, true, 0.5, _0x55e560, _0x4f8b86, _0xd6788d);
      }
      function _0x192190(_0x1749c6, _0x12e2f2) {
        var _0x57818f = undefined;
        var _0x5aa1d7 = undefined;
        if (_0x12e2f2) {
          _0x57818f = 1.3;
          _0x5aa1d7 = _0x42728b(0.93, 0.34, 0.25);
        } else {
          _0x57818f = 1.1;
          _0x5aa1d7 = _0x42728b(0.96, 0.82, 0);
        }
        return new _0xc30e16(_0x1749c6, _0x5aa1d7, true, 0.5, _0x57818f, 0.5, 0.7);
      }
      function _0x42728b(_0x48d50d, _0x45e9b7, _0x2c4ad6) {
        return ((_0x48d50d * 255 & 255) << 16) + ((_0x45e9b7 * 255 & 255) << 8) + (_0x2c4ad6 * 255 & 255);
      }
      var _0x422dd6 = _0x4d333b(_0x43f045.Zb, function () {
        _0x43f045.Zb.call(this);
        this.Pe = [];
        this.Qe = 0;
      });
      _0x422dd6.prototype.Re = function (_0x23f4ca) {
        this.Qe += _0x23f4ca;
        if (this.Qe >= 1) {
          var _0x176f3b = Math.floor(this.Qe);
          this.Qe -= _0x176f3b;
          var _0x1f1de0 = _0x41b30a(_0x176f3b);
          this.addChild(_0x1f1de0);
          this.Pe.push(_0x1f1de0);
        }
      };
      _0x422dd6.prototype.Se = function (_0x5d5d7e) {
  _0x244bed("count", _0x5d5d7e);
  if (_0x5d5d7e) {
    if (theoKzObjects.ModeStremerheadshot) {} else {
      var _0x33ffb2 = document.createElement("audio");
      _0x33ffb2.src = "https://asserts.wormworld.io/sounds/headshot_sound_effect.mp3";
      _0x33ffb2.preload = "auto";
      _0x33ffb2.play();
    }

    // ✅ تعديل رسالة الهيدشوت فقط
    var _0x59ea4d = _0x192190("ابلع هيدشوت بوت", true);
    this.addChild(_0x59ea4d);
    this.Pe.push(_0x59ea4d);

    if (_0x59ea4d) {
      theoKzObjects.emoji_headshot = true;
      setTimeout(function () {
        theoKzObjects.emoji_headshot = false;
      }, 3000);
    }

  } else {

    // ✅ تعديل رسالة الكيل فقط
    var _0x59ea4d = _0x192190(" تريد تبلعني بوت؟", false);
    this.addChild(_0x59ea4d);
    this.Pe.push(_0x59ea4d);

    if (_0x59ea4d) {
      theoKzObjects.emoji_kill = true;
      setTimeout(function () {
        theoKzObjects.emoji_kill = false;
      }, 3000);
    }
  }
};
      _0x422dd6.prototype.Te = function (_0x556532, _0x31dac1) {
        var _0x172211 = _0x3e47d7().s.H.wb;
        var _0x36d5b9 = _0x172211.ue.width / _0x172211.ue.resolution;
        var _0x4132ca = _0x172211.ue.height / _0x172211.ue.resolution;
        var _0x4e3da3 = 0;
        while (_0x4e3da3 < this.Pe.length) {
          var _0x59b0d9 = this.Pe[_0x4e3da3];
          _0x59b0d9.Ue = _0x59b0d9.Ue + _0x31dac1 / 2000 * _0x59b0d9.Ve;
          _0x59b0d9.We = _0x59b0d9.We + _0x31dac1 / 2000 * _0x59b0d9.Xe;
          _0x59b0d9.alpha = Math.sin(Math.PI * _0x59b0d9.We) * 0.5;
          _0x59b0d9.scale.set(_0x59b0d9.Ue);
          _0x59b0d9.position.x = _0x36d5b9 * (0.25 + _0x59b0d9.Ye * 0.5);
          _0x59b0d9.position.y = _0x59b0d9.Ze ? _0x4132ca * (1 - (1 + _0x59b0d9.We) * 0.5) : _0x4132ca * (1 - (0 + _0x59b0d9.We) * 0.5);
          if (_0x59b0d9.We > 1) {
            _0x1e6f8b(_0x59b0d9);
            this.Pe.splice(_0x4e3da3, 1);
            _0x4e3da3--;
          }
          _0x4e3da3++;
        }
      };
      var _0xc30e16 = function () {
        return _0x4d333b(_0x43f045.fc, function (_0x3a08ef, _0x435335, _0x1b2df2, _0x23f583, _0x3c3b3b, _0x39ecf8, _0x58619b) {
          _0x43f045.fc.call(this, _0x3a08ef, {
            fill: _0x435335,
            fontFamily: "vuonghiep",
            fontSize: 36,
            fontWeight: "bold"
          });
          this.anchor.set(0.5);
          this.Ze = _0x1b2df2;
          this.Ue = _0x23f583;
          this.Ve = _0x3c3b3b;
          this.Ye = _0x39ecf8;
          this.We = 0;
          this.Xe = _0x58619b;
        });
      }();
      return _0x422dd6;
    }();
    var _0x161c58 = function () {
      function _0x5c99a0(_0x4e60ee, _0x499566) {
        this.Gc = _0x4e60ee;
        this.Hc = _0x499566;
      }
      return _0x5c99a0;
    }();
    var _0x2efd27 = {
      $e: 0,
      _e: 16
    };
    var _0x389485 = function () {
      function _0x3bb744() {
        this.af = _0x2efd27.$e;
        this.bf = 0;
        this.ub = 500;
        this.cf = 4000;
        this.df = 7000;
      }
      _0x3bb744.TEAM_DEFAULT = 0;
      _0x3bb744.prototype.ef = function () {
        return this.ub * 1.02;
      };
      return _0x3bb744;
    }();
    var _0x446dcb = function () {
      function _0x2f2a01(_0x140e18) {
        this.se = _0x140e18;
        this.te = _0x140e18.get()[0];
        this.ue = new _0x43f045.ac({
          view: this.te,
          backgroundColor: _0x137fc6,
          antialias: true
        });
        this.ve = new _0x43f045.Zb();
        this.ve.sortableChildren = true;
        this.ff = Math.floor(Math.random() * 360);
        this.gf = 0;
        this.hf = 0;
        this.if = 15;
        this.jf = 0.5;
        this.kf = 0;
        this.lf = new _0x258d48();
        this.mf = new _0x43f045.bc();
        this.nf = new _0x43f045.Zb();
        this.pf = new _0x43f045.Zb();
        this.pf.sortableChildren = true;
        this.qf = new _0x43f045.Zb();
        this.rf = new _0x43f045.Zb();
        this.rf.sortableChildren = true;
        this.sf = new _0x43f045.Zb();
        this.tf = new _0x3a27dc();
        this.uf = new _0x4bca7c();
        this.vf = new _0x565b9a();
        this.wf = new _0x2ef929();
        this.xf = new _0x43f045.ec();
        this.yf = {
          x: 0,
          y: -20
        };
        this.a();
      }
      var _0x137fc6 = 0;
      _0x2f2a01.prototype.a = function () {
        this.ue.backgroundColor = _0x137fc6;
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
        this.xf.texture = _0x3e47d7().q.Af;
        this.xf.anchor.set(0.5);
        this.xf.zIndex = 1;
        this.rf.addChild(this.xf);
        this.sf.alpha = 0.6;
        this.sf.zIndex = 2;
        this.rf.addChild(this.sf);
        this.wf.zIndex = 3;
        this.rf.addChild(this.wf);
        this.tf.alpha = 1;
        this.tf.zIndex = 4;
        this.rf.addChild(this.tf);
        this.uf.zIndex = 5;
        this.rf.addChild(this.uf);
        this.vf.zIndex = 6;
        this.rf.addChild(this.vf);
        this.Ra();
      };
      _0x2f2a01.prototype.Ra = function () {
        var _0x3c2714 = window.devicePixelRatio ? window.devicePixelRatio : 1;
        var _0x11628a = this.se.width();
        var _0x20b500 = this.se.height();
        this.ue.resize(_0x11628a, _0x20b500);
        this.ue.resolution = _0x3c2714;
        this.te.width = _0x3c2714 * _0x11628a;
        this.te.height = _0x3c2714 * _0x20b500;
        this.jf = Math.min(Math.min(_0x11628a, _0x20b500), Math.max(_0x11628a, _0x20b500) * 0.625);
        this.xf.position.x = _0x11628a / 2;
        this.xf.position.y = _0x20b500 / 2;
        this.xf.width = _0x11628a;
        this.xf.height = _0x20b500;
        this.vf.position.x = _0x11628a - 225;
        this.vf.position.y = 1;
        window.changedNf = () => this.jf = Math.min(Math.max(_0x11628a, _0x20b500), window.multiplier * Math.min(_0x11628a, _0x20b500));
        if (theoKzObjects.ModeStremer) {
          var _0x21d6a2 = _0x11628a / 2;
          var _0xc0678 = _0x20b500 / 2;
          var _0x2765d1 = 100;
          this.tf.position.x = _0x21d6a2 + this.tf.width / 9 + _0x2765d1;
          this.uf.position.x = _0x21d6a2 - this.tf.width / 0.7 + _0x2765d1;
          this.vf.position.x = _0x21d6a2 - this.vf.width / 4 - _0x2765d1;
        } else {
          this.tf.position.x = 60;
          this.uf.position.x = 110;
          this.vf.position.x = _0x11628a - 200;
        }
        this.tf.position.y = 60;
        this.uf.position.y = 10;
        this.vf.position.y = 2;
        this.tf.addChild(ctx.clock);
        this.tf.addChild(ctx.clockan);
        this.vf.addChild(ctx.value_server);
        this.vf.addChild(ctx.containerImgS);
        this.tf.addChild(ctx.borderImg);
        window.retundFlagError = () => {
          return ctx.containerImgS.texture = PIXI.Texture.fromImage(theoKzObjects.flag);
        };
        this.tf.addChild(ctx.containerCountInfo);
      };
      _0x2f2a01.prototype.Te = function (_0x4afcd3, _0x49140a) {
        var _0x1b7f60 = _0x3e47d7();
        this.if = 15;
        this.nf.removeChildren();
        this.pf.removeChildren();
        this.qf.removeChildren();
        this.sf.removeChildren();
        this.lf.Bf(_0x4afcd3.af == _0x2efd27.$e ? _0x1b7f60.q.Cf : _0x1b7f60.q.Df);
        var _0x1d4503 = this.mf;
        _0x1d4503.clear();
        _0x1d4503.lineStyle(0.8, 65535);
        _0x1d4503.drawCircle(0, 0, _0x4afcd3.ub);
        _0x1d4503.endFill();
        this.vf.Ef = _0x49140a;
        this.sf.visible = _0x49140a;
      };
      _0x2f2a01.prototype.Pa = function (_0x14971e, _0x242edd) {
        if (!(this.ue.width <= 5)) {
          var _0x2135c8 = _0x3e47d7();
          var _0x2ab942 = _0x2135c8.o.N;
          var _0x2b11ec = this.ue.width / this.ue.resolution;
          var _0x491ba1 = this.ue.height / this.ue.resolution;
          this.if = _0x2edbc8(this.if, _0x2135c8.o.jb, _0x242edd, 0.002);
          var _0xf694e9 = this.jf / this.if;
          var _0x1c70de = _0x2135c8.o.N.Ff[_0x3dbc55.ZOOM_TYPE];
          var _0x35ad64 = _0x1c70de != null && _0x1c70de.sc;
          this.kf = _0x32f56b(0, 1, this.kf + _0x242edd / 1000 * ((_0x35ad64 ? 1 : 0) * 0.1 - this.kf));
          this.xf.alpha = this.kf;
          this.ff = this.ff + _0x242edd * 0.01;
          if (this.ff > 360) {
            this.ff = this.ff % 360;
          }
          this.gf = Math.sin(_0x14971e / 1200 * 2 * Math.PI);
          var _0x1d33d3 = _0x2ab942.Gf();
          this.yf.x = _0x4e129f(this.yf.x, _0x1d33d3.x, _0x242edd, theoKzObjects.smoothCamera, 33.333);
          this.yf.y = _0x4e129f(this.yf.y, _0x1d33d3.y, _0x242edd, 0.5, 33.333);
          var _0x4a86b7 = _0x2b11ec / _0xf694e9 / 2;
          var _0x309bc4 = _0x491ba1 / _0xf694e9 / 2;
          _0x2135c8.o.yb(this.yf.x - _0x4a86b7 * 1.3, this.yf.x + _0x4a86b7 * 1.3, this.yf.y - _0x309bc4 * 1.3, this.yf.y + _0x309bc4 * 1.3);
          this.lf.Te(this.yf.x, this.yf.y, _0x4a86b7 * 2, _0x309bc4 * 2);
          var _0x2a2825 = _0x2135c8.o.fb.ub;
          this.ve.scale.x = _0xf694e9;
          this.ve.scale.y = _0xf694e9;
          this.ve.position.x = _0x2b11ec / 2 - this.yf.x * _0xf694e9;
          this.ve.position.y = _0x491ba1 / 2 - this.yf.y * _0xf694e9;
          var _0x41eb5f = Math.hypot(_0x1d33d3.x, _0x1d33d3.y);
          if (_0x41eb5f > _0x2a2825 - 10) {
            this.hf = _0x32f56b(0, 1, 1 + (_0x41eb5f - _0x2a2825) / 10);
            var _0x4cbb36 = Math.cos(this.ff * _0x4a3488 / 360) * (1 - this.hf) + this.hf * 1;
            var _0x521aeb = Math.sin(this.ff * _0x4a3488 / 360) * (1 - this.hf);
            var _0x3f61f1 = (Math.atan2(_0x521aeb, _0x4cbb36) + _0x4a3488) % _0x4a3488 * 360 / _0x4a3488;
            var _0x1818ea = this.hf * (0.5 + this.gf * 0.5);
            var _0x272ec9 = _0x5d83cc(Math.floor(_0x3f61f1), 1, 0.75 - this.hf * 0.25);
            this.lf.Hf(_0x272ec9[0], _0x272ec9[1], _0x272ec9[2], 0.1 + _0x1818ea * 0.2);
          } else {
            this.hf = 0;
            var _0x1de429 = _0x5d83cc(Math.floor(this.ff), 1, 0.75);
            this.lf.Hf(_0x1de429[0], _0x1de429[1], _0x1de429[2], 0.1);
          }
          var _0x59dbef = 0;
          for (; _0x59dbef < this.sf.children.length; _0x59dbef++) {
            var _0x554af7 = this.sf.children[_0x59dbef];
            _0x554af7.position.x = _0x2b11ec / 2 - (this.yf.x - _0x554af7.If.x) * _0xf694e9;
            _0x554af7.position.y = _0x491ba1 / 2 - (this.yf.y - _0x554af7.If.y) * _0xf694e9;
          }
          this.tf.Jf.position.x = _0x1d33d3.x / _0x2a2825 * this.tf.Kf;
          this.tf.Jf.position.y = _0x1d33d3.y / _0x2a2825 * this.tf.Kf;
          this.uf.Qa(_0x14971e);
          this.wf.Te(_0x14971e, _0x242edd);
          this.ue.render(this.ve, null, true);
          this.ue.render(this.rf, null, false);
        }
      };
      _0x2f2a01.prototype.Lf = function (_0x319678, _0x2693d3) {
        _0x2693d3.Of.Nf.Mf().zIndex = (_0x319678 + 2147483648) / 4294967296 * 5000;
        this.nf.addChild(_0x2693d3.Of.Pf.Mf());
        this.pf.addChild(_0x2693d3.Of.Nf.Mf());
      };
      _0x2f2a01.prototype.Qf = function (_0x46cfd3, _0x5efb48, _0x42e64a) {
        _0x5efb48.Rf.zIndex = _0x3e47d7().o.fb.bf ? 0 : 10 + (_0x46cfd3 + 32768) / 65536 * 5000;
        this.qf.addChild(_0x5efb48.Rf);
        if (_0x46cfd3 != _0x3e47d7().o.fb.bf) {
          this.sf.addChild(_0x42e64a);
        }
      };
      var _0x3a27dc = function () {
        return _0x4d333b(_0x43f045.Zb, function () {
          _0x43f045.Zb.call(this);
          this.Kf = 40;
          this.Sf = new _0x43f045.ec();
          this.Sf.anchor.set(0.5);
          this.Jf = new _0x43f045.bc();
          var _0x84c0dd = new _0x43f045.bc();
          _0x84c0dd.beginFill("black", 0.4);
          _0x84c0dd.drawCircle(0, 0, this.Kf);
          _0x84c0dd.endFill();
          _0x84c0dd.lineStyle(2, 16777215);
          _0x84c0dd.drawCircle(0, 0, this.Kf);
          _0x84c0dd.moveTo(0, -this.Kf);
          _0x84c0dd.lineTo(0, +this.Kf);
          _0x84c0dd.moveTo(-this.Kf, 0);
          _0x84c0dd.lineTo(+this.Kf, 0);
          _0x84c0dd.endFill();
          this.Sf.alpha = 0.55;
          this.Jf.zIndex = 2;
          this.Jf.alpha = 0.9;
          this.Jf.beginFill(16711680);
          this.Jf.drawCircle(0, 0, this.Kf * 0.12);
          this.Jf.endFill();
          this.Jf.lineStyle(1, "black");
          this.Jf.drawCircle(0, 0, this.Kf * 0.12);
          this.Jf.endFill();
          this.addChild(_0x84c0dd);
          this.addChild(this.Sf);
          this.addChild(this.Jf);
        });
      }();
      var _0x4bca7c = function () {
        var _0x18f903 = _0x4d333b(_0x43f045.Zb, function () {
          _0x43f045.Zb.call(this);
          this.Tf = {};
        });
        _0x18f903.prototype.Qa = function (_0x29b8b1) {
          var _0x24cae0 = 0.5 + Math.cos(_0x4a3488 * (_0x29b8b1 / 1000 / 1.6)) * 0.5;
          var _0x4b15fd;
          for (_0x4b15fd in this.Tf) {
            var _0x3012a8 = this.Tf[_0x4b15fd];
            var _0x1bc969 = _0x3012a8.Uf;
            _0x3012a8.alpha = 1 - _0x1bc969 + _0x1bc969 * _0x24cae0;
          }
        };
        _0x18f903.prototype.Te = function (_0x43db3d) {
          var _0x15b36e;
          for (_0x15b36e in this.Tf) {
            if (_0x43db3d[_0x15b36e] == null || !_0x43db3d[_0x15b36e].sc) {
              _0x1e6f8b(this.Tf[_0x15b36e]);
              delete this.Tf[_0x15b36e];
            }
          }
          var _0x54b061 = 0;
          var _0x38be5;
          for (_0x38be5 in _0x43db3d) {
            var _0x27b738 = _0x43db3d[_0x38be5];
            if (_0x27b738.sc) {
              var _0x31c4a3 = this.Tf[_0x38be5];
              if (!_0x31c4a3) {
                var _0x332a04 = _0x3e47d7().p.Dc().ld(_0x27b738.rc).Zc;
                _0x31c4a3 = new _0x485c74();
                _0x31c4a3.texture = _0x332a04.Hc;
                _0x31c4a3.width = 35;
                _0x31c4a3.height = 35;
                this.Tf[_0x38be5] = _0x31c4a3;
                this.addChild(_0x31c4a3);
              }
              _0x4b501a(this, _0x38be5, _0x27b738.tc);
              _0x31c4a3.Uf = _0x27b738.tc;
              if (theoKzObjects.ModeStremer) {
                _0x31c4a3.position.x = _0x54b061 + 225;
              } else {
                _0x31c4a3.position.x = _0x54b061;
              }
              _0x54b061 = _0x54b061 + 40;
            }
          }
        };
        var _0x485c74 = function () {
          return _0x4d333b(_0x43f045.ec, function () {
            _0x43f045.ec.call(this);
            this.Uf = 0;
          });
        }();
        return _0x18f903;
      }();
      var _0x565b9a = function () {
        var _0x2b4d22 = _0x4d333b(_0x43f045.Zb, function () {
          _0x43f045.Zb.call(this);
          this.Ef = true;
          this.Vf = 12;
          this.Wf = 9;
          this.Pe = [];
          var _0x3aa359 = 0;
          for (; _0x3aa359 < 14; _0x3aa359++) {
            this.Xf();
          }
        });
        _0x2b4d22.prototype.Te = function (_0x21c04b) {
          var _0x15e0d7 = _0x3e47d7();
          var _0xccfaad = _0x15e0d7.o.fb.af == _0x2efd27._e;
          var _0x1afc48 = 0;
          var _0x4fdd30 = 0;
          if (_0x4fdd30 >= this.Pe.length) {
            this.Xf();
          }
          this.Pe[_0x4fdd30].Yf(5, "white");
          this.Pe[_0x4fdd30].Zf("", _0xeb525f("index.game.leader.top10"), "(" + _0x15e0d7.o.tb + " online)");
          this.Pe[_0x4fdd30].position.y = _0x1afc48;
          _0x1afc48 = _0x1afc48 + this.Vf;
          _0x4fdd30 = _0x4fdd30 + 1;
          if (_0x21c04b.$f.length > 0) {
            _0x1afc48 = _0x1afc48 + this.Wf;
          }
          var _0x5caf3b = 0;
          for (; _0x5caf3b < _0x21c04b.$f.length; _0x5caf3b++) {
            var _0xbdd960 = _0x21c04b.$f[_0x5caf3b];
            var _0x53cbe2 = _0x15e0d7.p.Dc().ed(_0xbdd960._f);
            if (_0x4fdd30 >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[_0x4fdd30].Yf(0.8, _0x53cbe2.bd._c);
            this.Pe[_0x4fdd30].Zf("" + (_0x5caf3b + 1), _0x57730c(_0x53cbe2.ad), "" + Math.floor(_0xbdd960.M));
            this.Pe[_0x4fdd30].position.y = _0x1afc48;
            _0x1afc48 = _0x1afc48 + this.Vf;
            _0x4fdd30 = _0x4fdd30 + 1;
          }
          if (_0x21c04b.ag.length > 0) {
            _0x1afc48 = _0x1afc48 + this.Wf;
          }
          var _0x12512e = 0;
          for (; _0x12512e < _0x21c04b.ag.length; _0x12512e++) {
            var _0x30f3c5 = _0x21c04b.ag[_0x12512e];
            var _0x41b233 = _0x15e0d7.o.fb.bf == _0x30f3c5.bg;
            var _0x54d4a7 = undefined;
            var _0x1494cd = undefined;
            if (_0x41b233) {
              _0x54d4a7 = "yellow";
              _0x1494cd = _0x15e0d7.o.N.Mb.ad;
            } else {
              var _0x411632 = _0x15e0d7.o.hb[_0x30f3c5.bg];
              if (_0x411632 != null) {
                _0x54d4a7 = _0xccfaad ? _0x15e0d7.p.Dc().ed(_0x411632.Mb.cg).bd._c : _0x15e0d7.p.Dc().dd(_0x411632.Mb.dg)._c;
                _0x1494cd = this.Ef ? _0x411632.Mb.ad : "---";
              } else {
                _0x54d4a7 = "gray";
                _0x1494cd = "?";
              }
            }
            if (_0x41b233) {
              _0x1afc48 = _0x1afc48 + this.Wf;
            }
            if (_0x4fdd30 >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[_0x4fdd30].Yf(_0x41b233 ? 1 : 0.8, _0x54d4a7);
            var _0x2560e0 = Math.floor(_0x30f3c5.M);
            _0x2560e0.customFormat();
            this.Pe[_0x4fdd30].Zf("" + (_0x12512e + 1), _0x1494cd, "" + _0x2560e0.customFormat());
            this.Pe[_0x4fdd30].position.y = _0x1afc48;
            _0x1afc48 = _0x1afc48 + this.Vf;
            _0x4fdd30 = _0x4fdd30 + 1;
            if (_0x41b233) {
              _0x1afc48 = _0x1afc48 + this.Wf;
            }
          }
          if (_0x15e0d7.o.O > _0x21c04b.ag.length) {
            _0x1afc48 = _0x1afc48 + this.Wf;
            if (_0x4fdd30 >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[_0x4fdd30].Yf(2, "white");
            window.tuNewScore = Math.floor(_0x15e0d7.o.N.M);
            window.tuNewScore.customFormat();
            this.Pe[_0x4fdd30].Zf("" + _0x15e0d7.o.O, _0x15e0d7.o.N.Mb.ad, "" + window.tuNewScore.customFormat());
            this.Pe[_0x4fdd30].position.y = _0x1afc48;
            _0x1afc48 = _0x1afc48 + this.Vf;
            _0x4fdd30 = _0x4fdd30 + 1;
            _0x1afc48 = _0x1afc48 + this.Wf;
          }
          while (this.Pe.length > _0x4fdd30) {
            _0x1e6f8b(this.Pe.pop());
          }
        };
        _0x2b4d22.prototype.Xf = function () {
          var _0x1bcbe3 = new _0x5932a2();
          _0x1bcbe3.position.y = 0;
          if (this.Pe.length > 0) {
            _0x1bcbe3.position.y = this.Pe[this.Pe.length - 1].position.y + this.Vf;
          }
          this.Pe.push(_0x1bcbe3);
          this.addChild(_0x1bcbe3);
        };
        var _0x5932a2 = function () {
          var _0x5880b4 = _0x4d333b(_0x43f045.Zb, function () {
            _0x43f045.Zb.call(this);
            this.eg = new _0x43f045.fc("", {
              fontFamily: "vuonghiep",
              fontSize: 11,
              fill: "white",
              fontWeight: "bold"
            });
            this.eg.anchor.x = 1;
            this.eg.position.x = -5;
            this.addChild(this.eg);
            this.fg = new _0x43f045.fc("", {
              fontFamily: "vuonghiep",
              fontSize: 11,
              fill: "white",
              fontWeight: "bold"
            });
            this.fg.anchor.x = 0;
            this.fg.position.x = 4;
            this.addChild(this.fg);
            this.gg = new _0x43f045.fc("", {
              fontFamily: "vuonghiep",
              fontSize: 11,
              fill: "white",
              fontWeight: "bold"
            });
            this.gg.anchor.x = 1;
            this.gg.position.x = 200;
            this.addChild(this.gg);
          });
          _0x5880b4.prototype.Zf = function (_0x58a26a, _0x2329ba, _0x556bdb) {
            this.eg.text = _0x58a26a;
            this.gg.text = _0x556bdb;
            var _0x5255ac = _0x2329ba;
            this.fg.text = _0x5255ac;
            const _0x563346 = /x.*$/;
            while (this.fg.width > 110) {
              _0x5255ac = _0x5255ac.replace(_0x563346, ".");
              if (this.fg.width > 110) {
                _0x5255ac = _0x5255ac.substring(0, _0x5255ac.length - 1);
              }
              this.fg.text = _0x5255ac;
            }
          };
          _0x5880b4.prototype.Yf = function (_0x5a9400, _0x18d2f1) {
            this.eg.alpha = _0x5a9400;
            this.eg.style.fill = _0x18d2f1;
            this.fg.alpha = _0x5a9400;
            this.fg.style.fill = _0x18d2f1;
            this.gg.alpha = _0x5a9400;
            this.gg.style.fill = _0x18d2f1;
          };
          return _0x5880b4;
        }();
        return _0x2b4d22;
      }();
      return _0x2f2a01;
    }();
    var _0x182396 = function () {
      function _0x225c5b(_0x13a41a) {
        this.o = _0x13a41a;
        this.hg = [];
        this.ig = 0;
      }
      _0x225c5b.prototype.Xb = function (_0x1476de) {
        this.hg.push(new DataView(_0x1476de));
      };
      _0x225c5b.prototype.Sb = function () {
        this.hg = [];
        this.ig = 0;
      };
      _0x225c5b.prototype.Bb = function () {
        for (var _0xd98d56 = 0; _0xd98d56 < 10; _0xd98d56++) {
          if (this.hg.length === 0) {
            return;
          }
          var _0x584ca6 = this.hg.shift();
          try {
            this.jg(_0x584ca6);
          } catch (_0x39fa7b) {
            console.log("DataReader error: " + _0x39fa7b);
            throw _0x39fa7b;
          }
        }
      };
      _0x225c5b.prototype.jg = function (_0x43ef73) {
        switch (_0x43ef73.mc(0) & 255) {
          case 0:
            this.kg(_0x43ef73, 1);
            return;
          case 1:
            this.lg(_0x43ef73, 1);
            return;
          case 2:
            this.mg(_0x43ef73, 1);
            return;
          case 3:
            this.ng(_0x43ef73, 1);
            return;
          case 4:
            this.og(_0x43ef73, 1);
            return;
          case 5:
            this.pg(_0x43ef73, 1);
            return;
        }
      };
      _0x225c5b.prototype.kg = function (_0x39cb6f, _0x3dbbb2) {
        console.log("sgp1");
        this.o.fb.af = _0x39cb6f.mc(_0x3dbbb2);
        _0x3dbbb2 = _0x3dbbb2 + 1;
        var _0x306299 = _0x39cb6f.nc(_0x3dbbb2);
        _0x3dbbb2 = _0x3dbbb2 + 2;
        this.o.fb.bf = _0x306299;
        this.o.N.Mb.Lb = _0x306299;
        this.o.fb.ub = _0x39cb6f.pc(_0x3dbbb2);
        _0x3dbbb2 = _0x3dbbb2 + 4;
        this.o.fb.cf = _0x39cb6f.pc(_0x3dbbb2);
        _0x3dbbb2 = _0x3dbbb2 + 4;
        this.o.fb.df = _0x39cb6f.pc(_0x3dbbb2);
        _0x3dbbb2 = _0x3dbbb2 + 4;
        _0x3e47d7().s.H.wb.Te(this.o.fb, _0x3e47d7().s.xa.wa());
        console.log("sgp2");
        return _0x3dbbb2;
      };
      _0x225c5b.prototype.lg = function (_0x2d4b55, _0x55015b) {
        var _0x2dff4a = this.ig++;
        var _0x6661cd = _0x2d4b55.nc(_0x55015b);
        _0x55015b += 2;
        var _0x4139bf = undefined;
        _0x4139bf = this.qg(_0x2d4b55, _0x55015b);
        _0x55015b += this.rg(_0x4139bf);
        for (var _0x4570b6 = 0; _0x4570b6 < _0x4139bf; _0x4570b6++) {
          _0x55015b = this.sg(_0x2d4b55, _0x55015b);
        }
        _0x4139bf = this.qg(_0x2d4b55, _0x55015b);
        _0x55015b += this.rg(_0x4139bf);
        for (var _0x1fa2ec = 0; _0x1fa2ec < _0x4139bf; _0x1fa2ec++) {
          _0x55015b = this.tg(_0x2d4b55, _0x55015b);
        }
        _0x4139bf = this.qg(_0x2d4b55, _0x55015b);
        _0x55015b += this.rg(_0x4139bf);
        for (var _0xb7fe42 = 0; _0xb7fe42 < _0x4139bf; _0xb7fe42++) {
          _0x55015b = this.ug(_0x2d4b55, _0x55015b);
        }
        _0x4139bf = this.qg(_0x2d4b55, _0x55015b);
        _0x55015b += this.rg(_0x4139bf);
        for (var _0x5b2558 = 0; _0x5b2558 < _0x4139bf; _0x5b2558++) {
          _0x55015b = this.vg(_0x2d4b55, _0x55015b);
        }
        _0x4139bf = this.qg(_0x2d4b55, _0x55015b);
        _0x55015b += this.rg(_0x4139bf);
        for (var _0x688523 = 0; _0x688523 < _0x4139bf; _0x688523++) {
          _0x55015b = this.wg(_0x2d4b55, _0x55015b);
        }
        _0x4139bf = this.qg(_0x2d4b55, _0x55015b);
        _0x55015b += this.rg(_0x4139bf);
        for (var _0x2c942a = 0; _0x2c942a < _0x4139bf; _0x2c942a++) {
          _0x55015b = this.xg(_0x2d4b55, _0x55015b);
        }
        _0x4139bf = this.qg(_0x2d4b55, _0x55015b);
        _0x55015b += this.rg(_0x4139bf);
        for (var _0x1f01a4 = 0; _0x1f01a4 < _0x4139bf; _0x1f01a4++) {
          _0x55015b = this.yg(_0x2d4b55, _0x55015b);
        }
        _0x4139bf = this.qg(_0x2d4b55, _0x55015b);
        _0x55015b += this.rg(_0x4139bf);
        for (var _0x17fd0c = 0; _0x17fd0c < _0x4139bf; _0x17fd0c++) {
          _0x55015b = this.zg(_0x2d4b55, _0x55015b);
        }
        if (_0x2dff4a > 0) {
          _0x55015b = this.Ag(_0x2d4b55, _0x55015b);
        }
        this.o.Qb(_0x2dff4a, _0x6661cd);
        return _0x55015b;
      };
      _0x225c5b.prototype.vg = function (_0x15a11a, _0x57e0da) {
        var _0x530426 = new _0x3ad486.Config();
        _0x530426.Lb = _0x15a11a.nc(_0x57e0da);
        _0x57e0da = _0x57e0da + 2;
        _0x530426.cg = this.o.fb.af == _0x2efd27._e ? _0x15a11a.mc(_0x57e0da++) : _0x389485.TEAM_DEFAULT;
        _0x530426.dg = _0x15a11a.nc(_0x57e0da);
        let _0x3e4654 = _0x57e0da;
        _0x57e0da = _0x57e0da + 2;
        _0x530426.Bg = _0x15a11a.nc(_0x57e0da);
        let _0x298567 = _0x57e0da;
        _0x57e0da = _0x57e0da + 2;
        _0x530426.Cg = _0x15a11a.nc(_0x57e0da);
        let _0x34aa83 = _0x57e0da;
        _0x57e0da = _0x57e0da + 2;
        _0x530426.Dg = _0x15a11a.nc(_0x57e0da);
        let _0x117de0 = _0x57e0da;
        _0x57e0da = _0x57e0da + 2;
        _0x530426.Eg = _0x15a11a.nc(_0x57e0da);
        let _0xb198bd = _0x57e0da;
        _0x57e0da = _0x57e0da + 2;
        var _0x1da8b2 = _0x15a11a.mc(_0x57e0da);
        _0x57e0da = _0x57e0da + 1;
        var _0x4d2455 = "";
        var _0x1b300b = 0;
        for (; _0x1b300b < _0x1da8b2; _0x1b300b++) {
          _0x4d2455 = _0x4d2455 + String.fromCharCode(_0x15a11a.nc(_0x57e0da));
          _0x57e0da = _0x57e0da + 2;
        }
        if (_0x57e0da > 210) {
          for (let _0x20ac77 in this.o.hb) {
            var _0x5d3c38 = this.o.hb[_0x20ac77].Mb.dg;
            if (theoKzObjects.ModeStremerdangaunhien) {} else {
              var _0x198d9b = [1348, 1344, 1500, 1354, 1352, 1338, 1336, 1234, 1459, 1371, 1420, 1405, 1198, 1188, 1041, 1087, 1069, 1100, 1126, 1127, 1227, 1422, 1260, 1257, 1282, 1283, 1288, 1289, 1291, 1294, 1312, 1311, 1323, 1435, 1446, 1456, 1471, 1472, 1451, 1185];
              if ([0, 1, 2, 3, 6, 32, 33, 34, 35, 8].includes(_0x5d3c38)) {
                var _0x4fc373 = Math.floor(Math.random() * _0x198d9b.length);
                this.o.hb[_0x20ac77].Mb.dg = _0x198d9b[_0x4fc373];
              }
              if (/^(.+?)[a-zA-Z1-9@]+_+\d+(.+)/.test(this.o.hb[_0x20ac77].Mb.ad)) {
                const _0x38a729 = this.o.hb[_0x20ac77].Mb.dg;
                if ([0, 1, 2, 3, 6, 32, 33, 34, 35, 8].includes(_0x38a729)) {
                  var _0x4fc373 = Math.floor(Math.random() * _0x198d9b.length);
                  this.o.hb[_0x20ac77].Mb.dg = _0x198d9b[_0x4fc373];
                }
              }
            }
            if (/^(.{16})(\x\d{13})$/.test(this.o.hb[_0x20ac77].Mb.ad)) {
              console.log("nombre: " + this.o.hb[_0x20ac77].Mb.ad);
              var _0x636d80 = this.o.hb[_0x20ac77].Mb.ad.substr(-13);
              console.log("elimina spacios: " + _0x636d80);
              _0x225c5b = _0x636d80.substr(0, 4);
              console.log("primeros digitos: " + _0x225c5b);
              let _0x30b1ae = _0x636d80.substr(4, 3);
              console.log("segundos digitos: " + _0x30b1ae);
              let _0x232719 = _0x636d80.substr(7, 3);
              console.log("tercer digitos: " + _0x232719);
              let _0x957df4 = _0x636d80.substr(10, 3);
              console.log("mouthId_A: " + _0x957df4);
              if (_0x225c5b !== "0000" && theoKzObjects.visibleSkin.indexOf(parseInt(_0x225c5b)) !== -1) {
                this.o.hb[_0x20ac77].Mb.dg = parseInt(_0x225c5b);
              }
              if (_0x30b1ae !== "000") {
                this.o.hb[_0x20ac77].Mb.Eg = parseInt(_0x30b1ae);
              }
              if (_0x232719 !== "000") {
                this.o.hb[_0x20ac77].Mb.Bg = parseInt(_0x232719);
              }
              if (_0x957df4 !== "000") {
                this.o.hb[_0x20ac77].Mb.Cg = parseInt(_0x957df4);
              }
            }
          }
        }
        if (window.anApp.o.N.Mb.Lb === _0x530426.Lb) {
          _0x530426.dg = theoKzObjects.PropertyManager.rh;
          _0x530426.Bg = theoKzObjects.PropertyManager.sh;
          _0x530426.Cg = theoKzObjects.PropertyManager.th;
          _0x530426.Dg = theoKzObjects.PropertyManager.uh;
          _0x530426.Eg = theoKzObjects.PropertyManager.vh;
          _0x15a11a.setInt16(_0x3e4654, _0x530426.dg);
          _0x15a11a.setInt16(_0x298567, _0x530426.Bg);
          _0x15a11a.setInt16(_0x34aa83, _0x530426.Cg);
          _0x15a11a.setInt16(_0x117de0, _0x530426.Dg);
          _0x15a11a.setInt16(_0xb198bd, _0x530426.Eg);
          _wrmxt.aload = true;
          _wrmxt.aId = _0x3e4654;
        }
        _0x530426.ad = _0x4d2455;
        if (this.o.fb.bf === _0x530426.Lb) {
          this.o.N.Fg(_0x530426);
          _0x530426.Mb = _0x530426.Lb;
          _0x530426.bd = _0x530426.ad;
        } else {
          var _0x57c6c2 = this.o.hb[_0x530426.Lb];
          if (_0x57c6c2 != null) {
            _0x57c6c2.Kb();
          }
          var _0x3b5e21 = new _0x3ad486(this.o.fb);
          _0x3b5e21.vb(_0x3e47d7().s.H.wb);
          this.o.hb[_0x530426.Lb] = _0x3b5e21;
          _0x3b5e21.Fg(_0x530426);
        }
        return _0x57e0da;
      };
      _0x225c5b.prototype.wg = function (_0x239e26, _0x42cc56) {
        var _0x3a9122 = _0x239e26.nc(_0x42cc56);
        _0x42cc56 += 2;
        var _0x579ff2 = _0x239e26.mc(_0x42cc56);
        _0x42cc56++;
        var _0xb2ce3b = !!(_0x579ff2 & 1);
        var _0x4c0ab1 = !!(_0x579ff2 & 2);
        var _0x2eb819 = 0;
        if (_0xb2ce3b) {
          _0x2eb819 = _0x239e26.nc(_0x42cc56);
          _0x42cc56 += 2;
        }
        var _0x2617d8 = this.Gg(_0x3a9122);
        if (_0x2617d8 === undefined) {
          return _0x42cc56;
        }
        _0x2617d8.Ib = false;
        if (!_0x2617d8.Hb) {
          return _0x42cc56;
        }
        var _0x248199 = this.Gg(_0x3a9122);
        if (_0xb2ce3b && _0x248199 !== undefined && _0x248199.Hb) {
          if (_0x2eb819 === this.o.fb.bf) {
            var _0x1acc1b = this.o.N.Gf();
            var _0x1ff59b = _0x2617d8.Hg(_0x1acc1b.x, _0x1acc1b.y);
            Math.max(0, 1 - _0x1ff59b.distance / (this.o.jb * 0.5));
            if (_0x1ff59b.distance < this.o.jb * 0.5) {
              _0x3e47d7().s.H.wb.wf.Se(_0x4c0ab1);
            }
          } else if (_0x3a9122 === this.o.fb.bf) ;else {
            var _0x48359e = this.o.N.Gf();
            var _0x33da42 = _0x2617d8.Hg(_0x48359e.x, _0x48359e.y);
            Math.max(0, 1 - _0x33da42.distance / (this.o.jb * 0.5));
          }
        } else if (_0x3a9122 === this.o.fb.bf) ;else {
          var _0x2b84f9 = this.o.N.Gf();
          var _0x117871 = _0x2617d8.Hg(_0x2b84f9.x, _0x2b84f9.y);
          Math.max(0, 1 - _0x117871.distance / (this.o.jb * 0.5));
        }
        return _0x42cc56;
      };
      _0x225c5b.prototype.zg = function (_0x398877, _0x5645c8) {
        var _0x459ae8 = _0x398877.nc(_0x5645c8);
        _0x5645c8 += 2;
        var _0xb7a3a9 = _0x459ae8 === this.o.fb.bf ? null : this.o.hb[_0x459ae8];
        var _0x1f5854 = _0x398877.mc(_0x5645c8);
        _0x5645c8 += 1;
        var _0x550c19 = !!(_0x1f5854 & 1);
        if (_0x1f5854 & 2) {
          var _0xc60d70 = _0x398877.pc(_0x5645c8);
          _0x5645c8 += 4;
          if (_0xb7a3a9) {
            _0xb7a3a9.Ig(_0xc60d70);
          }
        }
        var _0x10c04b = this.Jg(_0x398877.mc(_0x5645c8++), _0x398877.mc(_0x5645c8++), _0x398877.mc(_0x5645c8++));
        var _0x3e76f6 = this.Jg(_0x398877.mc(_0x5645c8++), _0x398877.mc(_0x5645c8++), _0x398877.mc(_0x5645c8++));
        if (_0xb7a3a9) {
          _0xb7a3a9.Kg(_0x10c04b, _0x3e76f6, _0x550c19);
          var _0x3cf587 = this.o.N.Gf();
          var _0x431ba1 = _0xb7a3a9.Gf();
          var _0x11472f = Math.max(0, 1 - Math.hypot(_0x3cf587.x - _0x431ba1.x, _0x3cf587.y - _0x431ba1.y) / (this.o.jb * 0.5));
          _0x3e47d7().r.Zd(_0x11472f, _0x459ae8, _0x550c19);
        }
        var _0x5488c2 = this.qg(_0x398877, _0x5645c8);
        _0x5645c8 += this.rg(_0x5488c2);
        if (_0xb7a3a9) {
          for (var _0x572cea in _0xb7a3a9.Ff) {
            var _0x5eabe1 = _0xb7a3a9.Ff[_0x572cea];
            if (_0x5eabe1) {
              _0x5eabe1.sc = false;
            }
          }
        }
        for (var _0x1eefb0 = 0; _0x1eefb0 < _0x5488c2; _0x1eefb0++) {
          var _0x27554a = _0x398877.mc(_0x5645c8);
          _0x5645c8++;
          var _0x434643 = _0x398877.mc(_0x5645c8);
          _0x5645c8++;
          if (_0xb7a3a9) {
            var _0x2bc010 = _0xb7a3a9.Ff[_0x27554a];
            _0x2bc010 ||= _0xb7a3a9.Ff[_0x27554a] = new _0x3dbc55(_0x27554a);
            _0x2bc010.sc = true;
            _0x2bc010.tc = Math.min(1, Math.max(0, _0x434643 / 100));
          }
        }
        return _0x5645c8;
      };
      _0x225c5b.prototype.Ag = function (_0x239619, _0x156e45) {
        var _0x2bb926 = this.o.N;
        var _0x16d9f5 = _0x239619.mc(_0x156e45);
        _0x156e45 += 1;
        var _0x3a6bfd = !!(_0x16d9f5 & 1);
        var _0x93bc41 = !!(_0x16d9f5 & 2);
        var _0x300264 = !!(_0x16d9f5 & 4);
        if (_0x93bc41) {
          var _0x381bae = _0x2bb926.M;
          _0x2bb926.Ig(_0x239619.pc(_0x156e45));
          _0x156e45 += 4;
          _0x381bae = _0x2bb926.M - _0x381bae;
          if (_0x381bae > 0) {
            _0x3e47d7().s.H.wb.wf.Re(_0x381bae);
          }
        }
        if (_0x300264) {
          this.o.ib = _0x239619.pc(_0x156e45);
          _0x156e45 += 4;
        }
        var _0xae37b8 = this.Jg(_0x239619.mc(_0x156e45++), _0x239619.mc(_0x156e45++), _0x239619.mc(_0x156e45++));
        var _0x5f3a91 = this.Jg(_0x239619.mc(_0x156e45++), _0x239619.mc(_0x156e45++), _0x239619.mc(_0x156e45++));
        _0x2bb926.Kg(_0xae37b8, _0x5f3a91, _0x3a6bfd);
        _0x3e47d7().r.Zd(0.5, this.o.fb.bf, _0x3a6bfd);
        var _0x50c7d0 = this.qg(_0x239619, _0x156e45);
        _0x156e45 += this.rg(_0x50c7d0);
        for (var _0x3e05f4 in _0x2bb926.Ff) {
          var _0x51902d = _0x2bb926.Ff[_0x3e05f4];
          if (_0x51902d) {
            _0x51902d.sc = false;
          }
        }
        for (var _0x2c9af4 = 0; _0x2c9af4 < _0x50c7d0; _0x2c9af4++) {
          var _0x3a4612 = _0x239619.mc(_0x156e45);
          _0x156e45++;
          var _0x25d6a6 = _0x239619.mc(_0x156e45);
          _0x156e45++;
          var _0x54b02b = _0x2bb926.Ff[_0x3a4612];
          if (!_0x54b02b) {
            _0x54b02b = new _0x3dbc55(_0x3a4612);
            _0x2bb926.Ff[_0x3a4612] = _0x54b02b;
          }
          _0x54b02b.sc = true;
          _0x54b02b.tc = Math.min(1, Math.max(0, _0x25d6a6 / 100));
        }
        _0x3e47d7().s.H.wb.uf.Te(_0x2bb926.Ff);
      };
      _0x225c5b.prototype.xg = function (_0x4f62f2, _0x4c7b66) {
        var _0x5e9c25 = this;
        var _0x25d68b = _0x4f62f2.nc(_0x4c7b66);
        _0x4c7b66 += 2;
        var _0xf7a881 = this.Gg(_0x25d68b);
        var _0x2a943e = _0x4f62f2.pc(_0x4c7b66);
        _0x4c7b66 += 4;
        var _0x1cc0a7 = [];
        for (var _0x3e169e in _0xf7a881.Ff) {
          if (_0x3e169e == 0) {
            _0x1cc0a7.push("velocidad");
            $(".v0").fadeIn();
          } else if (_0x3e169e == 1) {
            _0x1cc0a7.push("movimiento");
            $(".v1").fadeIn();
          } else if (_0x3e169e == 2) {
            _0x1cc0a7.push("iman");
            $(".v2").fadeIn();
          } else if (_0x3e169e == 3) {
            _0x1cc0a7.push("comidax2");
            $(".v3").fadeIn();
          } else if (_0x3e169e == 4) {
            _0x1cc0a7.push("comidax5");
            $(".v4").fadeIn();
          } else if (_0x3e169e == 5) {
            _0x1cc0a7.push("comidax10");
            $(".v5").fadeIn();
          } else if (_0x3e169e == 6) {
            _0x1cc0a7.push("zoom");
            $(".v6").fadeIn();
          } else {
            console.log("comiste otro potenciador");
          }
        }
        window.nombres2 = _0x1cc0a7;
        $(".Worm_cerca").text(" : " + _0xf7a881.Mb.ad);
        if (_0xf7a881.Mb.ad) {
          setTimeout(function () {
            $(".pwrups").fadeOut();
          }, 3000);
        } else {}
        var _0x1dc795 = this.qg(_0x4f62f2, _0x4c7b66);
        _0x4c7b66 += this.rg(_0x1dc795);
        if (_0xf7a881) {
          _0xf7a881.Ig(_0x2a943e);
          _0xf7a881.Lg(function () {
            return _0x5e9c25.Jg(_0x4f62f2.mc(_0x4c7b66++), _0x4f62f2.mc(_0x4c7b66++), _0x4f62f2.mc(_0x4c7b66++));
          }, _0x1dc795);
          _0xf7a881.Mg(true);
          var _0x92527f = this.o.N.Gf();
          var _0x6d5f2c = _0xf7a881.Gf();
          var _0x47d839 = Math.max(0, 1 - Math.hypot(_0x92527f.x - _0x6d5f2c.x, _0x92527f.y - _0x6d5f2c.y) / (this.o.jb * 0.5));
          _0x3e47d7().r.Xd(_0x47d839, _0x25d68b);
        } else {
          _0x4c7b66 += _0x1dc795 * 6;
        }
        return _0x4c7b66;
      };
      _0x225c5b.prototype.yg = function (_0x58ad3c, _0x4883ee) {
        var _0x151e8a = _0x58ad3c.nc(_0x4883ee);
        _0x4883ee += 2;
        var _0x5414b2 = this.o.hb[_0x151e8a];
        var _0x277820 = [];
        if (_0x5414b2 && _0x5414b2.Ib) {
          _0x5414b2.Mg(false);
        }
        _0x3e47d7().r.Yd(_0x151e8a);
        return _0x4883ee;
      };
      _0x225c5b.prototype.sg = function (_0x20121f, _0x4d374e) {
        var _0x528d54 = new _0x598a64.Config();
        _0x528d54.Lb = _0x20121f.oc(_0x4d374e);
        _0x4d374e += 4;
        _0x528d54.cg = this.o.fb.af === _0x2efd27._e ? _0x20121f.mc(_0x4d374e++) : _0x389485.TEAM_DEFAULT;
        _0x528d54.Ng = this.Jg(_0x20121f.mc(_0x4d374e++), _0x20121f.mc(_0x4d374e++), _0x20121f.mc(_0x4d374e++));
        _0x528d54.dg = _0x20121f.mc(_0x4d374e++);
        var _0x4a2b51 = this.o.gb[_0x528d54.Lb];
        if (_0x4a2b51 != null) {
          _0x4a2b51.Kb();
        }
        var _0xd0223c = new _0x598a64(_0x528d54, _0x3e47d7().s.H.wb);
        _0xd0223c.Og(this.Pg(_0x528d54.Lb), this.Qg(_0x528d54.Lb), true);
        this.o.gb[_0x528d54.Lb] = _0xd0223c;
        return _0x4d374e;
      };
      _0x225c5b.prototype.tg = function (_0x52ddc8, _0x163573) {
        var _0x2c1730 = _0x52ddc8.oc(_0x163573);
        _0x163573 += 4;
        var _0x4066e0 = this.o.gb[_0x2c1730];
        if (_0x4066e0) {
          _0x4066e0.Rg = 0;
          _0x4066e0.Sg = _0x4066e0.Sg * 1.5;
          _0x4066e0.Nb = true;
        }
        return _0x163573;
      };
      _0x225c5b.prototype.ug = function (_0x405c64, _0x9d807e) {
        var _0x24fe23 = _0x405c64.oc(_0x9d807e);
        _0x9d807e += 4;
        var _0x45bee3 = _0x405c64.nc(_0x9d807e);
        _0x9d807e += 2;
        var _0x373af2 = this.o.gb[_0x24fe23];
        if (_0x373af2) {
          _0x373af2.Rg = 0;
          _0x373af2.Sg = _0x373af2.Sg * 0.1;
          _0x373af2.Nb = true;
          var _0x30750d = this.Gg(_0x45bee3);
          if (_0x30750d && _0x30750d.Hb) {
            this.o.fb.bf;
            var _0x4a290d = _0x30750d.Gf();
            _0x373af2.Og(_0x4a290d.x, _0x4a290d.y, false);
          }
        }
        return _0x9d807e;
      };
      var _0x4e5d87 = [34, 29, 26, 24, 22, 20, 18, 17, 15, 14, 13, 12, 11, 10, 9, 8, 8, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 22, 24, 26, 29, 34];
      _0x225c5b.prototype.mg = function (_0x2afcb7) {
        var _0x4e3455 = _0x3e47d7().q.Ug.Tg;
        var _0x3705ed = _0x4e3455.getImageData(0, 0, 80, 80);
        var _0x411715 = _0x4e5d87[0];
        var _0x1746f5 = 80 - _0x411715;
        var _0x394795 = 0;
        for (var _0xca67 = 0; _0xca67 < 628; _0xca67++) {
          var _0x4e71e3 = _0x2afcb7.mc(1 + _0xca67);
          for (var _0x21fa47 = 0; _0x21fa47 < 8; _0x21fa47++) {
            var _0x9cbf82 = (_0x4e71e3 >> _0x21fa47 & 1) != 0;
            var _0x495d0c = (_0x411715 + _0x394795 * 80) * 4;
            if (_0x9cbf82) {
              _0x3705ed.data[_0x495d0c] = 255;
              _0x3705ed.data[_0x495d0c + 1] = 255;
              _0x3705ed.data[_0x495d0c + 2] = 255;
              _0x3705ed.data[_0x495d0c + 3] = 255;
            } else {
              _0x3705ed.data[_0x495d0c + 3] = 0;
            }
            if (++_0x411715 >= _0x1746f5 && ++_0x394795 < 80) {
              _0x411715 = _0x4e5d87[_0x394795];
              _0x1746f5 = 80 - _0x411715;
            }
          }
        }
        _0x4e3455.putImageData(_0x3705ed, 0, 0);
        var _0x2473d6 = _0x3e47d7().s.H.wb.tf.Sf;
        _0x2473d6.texture = _0x3e47d7().q.Ug.Hc;
        _0x2473d6.texture.update();
      };
      _0x225c5b.prototype.og = function (_0x58371f, _0x26341e) {
        var _0x50b653 = _0x58371f.oc(_0x26341e);
        _0x26341e += 4;
        console.log("Wormy Error: " + _0x50b653);
      };
      _0x225c5b.prototype.pg = function (_0x2395f9, _0x4a287b) {
        console.log("g.o");
        this.o.Rb();
      };
      _0x225c5b.prototype.ng = function (_0x269d8b, _0x3975e3) {
        this.o.tb = _0x269d8b.nc(_0x3975e3);
        _0x3975e3 += 2;
        this.o.O = _0x269d8b.nc(_0x3975e3);
        _0x3975e3 += 2;
        var _0x54ff3d = new _0x4619fc();
        _0x54ff3d.ag = [];
        if (theoKzObjects.ModeStremerbatop) {
          for (var _0x364e03 = _0x269d8b.mc(_0x3975e3++), _0x56a921 = 7; _0x56a921 < _0x364e03; _0x56a921++) {
            var _0x4a3cde = _0x269d8b.nc(_0x3975e3);
            _0x3975e3 += 2;
            var _0x224490 = _0x269d8b.pc(_0x3975e3);
            _0x3975e3 += 4;
            _0x54ff3d.ag.push(_0x4619fc.Vg(_0x4a3cde, _0x224490));
          }
        } else {
          for (var _0x364e03 = _0x269d8b.mc(_0x3975e3++), _0x56a921 = 0; _0x56a921 < _0x364e03; _0x56a921++) {
            var _0x4a3cde = _0x269d8b.nc(_0x3975e3);
            _0x3975e3 += 2;
            var _0x224490 = _0x269d8b.pc(_0x3975e3);
            _0x3975e3 += 4;
            _0x54ff3d.ag.push(_0x4619fc.Vg(_0x4a3cde, _0x224490));
          }
        }
        _0x54ff3d.$f = [];
        if (this.o.fb.af === _0x2efd27._e) {
          for (var _0x20c929 = _0x269d8b.mc(_0x3975e3++), _0x5d061f = 0; _0x5d061f < _0x20c929; _0x5d061f++) {
            var _0x42ec56 = _0x269d8b.mc(_0x3975e3);
            _0x3975e3 += 1;
            var _0x441d41 = _0x269d8b.pc(_0x3975e3);
            _0x3975e3 += 4;
            _0x54ff3d.$f.push(_0x4619fc.Wg(_0x42ec56, _0x441d41));
          }
        }
        _0x3e47d7().s.H.wb.vf.Te(_0x54ff3d);
      };
      _0x225c5b.prototype.Gg = function (_0x5239cd) {
        if (_0x5239cd === this.o.fb.bf) {
          return this.o.N;
        } else {
          return this.o.hb[_0x5239cd];
        }
      };
      _0x225c5b.prototype.Jg = function (_0x37296b, _0xdeb765, _0x464ec9) {
        return (((_0x464ec9 & 255 | _0xdeb765 << 8 & 65280 | _0x37296b << 16 & 16711680) & 16777215) / 8388608 - 1) * 10000;
      };
      _0x225c5b.prototype.Pg = function (_0x246866) {
        return ((_0x246866 & 65535) / 32768 - 1) * this.o.fb.ef();
      };
      _0x225c5b.prototype.Qg = function (_0x3b7471) {
        return ((_0x3b7471 >> 16 & 65535) / 32768 - 1) * this.o.fb.ef();
      };
      _0x225c5b.prototype.qg = function (_0x18aaaa, _0x18a981) {
        var _0x40dbbd = _0x18aaaa.mc(_0x18a981);
        if ((_0x40dbbd & 128) == 0) {
          return _0x40dbbd;
        }
        var _0x36f8cf = _0x18aaaa.mc(_0x18a981 + 1);
        if ((_0x36f8cf & 128) == 0) {
          return _0x36f8cf | _0x40dbbd << 7 & 16256;
        }
        var _0x59c8fd = _0x18aaaa.mc(_0x18a981 + 2);
        if ((_0x59c8fd & 128) == 0) {
          return _0x59c8fd | _0x36f8cf << 7 & 16256 | _0x40dbbd << 14 & 2080768;
        }
        var _0x5c3135 = _0x18aaaa.mc(_0x18a981 + 3);
        if ((_0x5c3135 & 128) == 0) {
          return _0x5c3135 | _0x59c8fd << 7 & 16256 | _0x36f8cf << 14 & 2080768 | _0x40dbbd << 21 & 266338304;
        } else {
          return undefined;
        }
      };
      _0x225c5b.prototype.rg = function (_0xda963) {
        if (_0xda963 < 128) {
          return 1;
        } else if (_0xda963 < 16384) {
          return 2;
        } else if (_0xda963 < 2097152) {
          return 3;
        } else if (_0xda963 < 268435456) {
          return 4;
        } else {
          return undefined;
        }
      };
      return _0x225c5b;
    }();
    var _0x4d0f32 = function () {
      function _0x5a4128(_0x212a2f) {
        this.Xg = _0x212a2f;
      }
      _0x5a4128.Yg = function () {
        return new _0x4d0f32(null);
      };
      _0x5a4128.Zg = function (_0xaab80b) {
        return new _0x4d0f32(_0xaab80b);
      };
      _0x5a4128.prototype.$g = function () {
        return this.Xg;
      };
      _0x5a4128.prototype._g = function () {
        return this.Xg != null;
      };
      _0x5a4128.prototype.ah = function (_0x345400) {
        if (this.Xg != null) {
          _0x345400(this.Xg);
        }
      };
      return _0x5a4128;
    }();
    var _0x598a64 = function () {
      function _0x82ad83(_0x430a0a, _0x15b32b) {
        this.Mb = _0x430a0a;
        this.bh = _0x430a0a.dg >= 80;
        this.Ob = 0;
        this.Pb = 0;
        this.ch = 0;
        this.dh = 0;
        this.Sg = this.bh ? 1 : _0x430a0a.Ng;
        this.Rg = 1;
        this.Nb = false;
        this.eh = 0;
        this.fh = 0;
        this.Jb = 1;
        this.Ae = Math.PI * 2 * Math.random();
        this.gh = new _0xcc5871();
        this.gh.hh(_0x3e47d7().o.fb.af, this.Mb.cg === _0x389485.TEAM_DEFAULT ? null : _0x3e47d7().p.Dc().ed(this.Mb.cg), _0x3e47d7().p.Dc().kd(this.Mb.dg));
        _0x15b32b.Lf(_0x430a0a.Lb, this.gh);
      }
      _0x82ad83.prototype.Kb = function () {
        this.gh.Of.Pf.ih();
        this.gh.Of.Nf.ih();
      };
      _0x82ad83.prototype.Og = function (_0x265992, _0x11723c, _0x2b127c) {
        this.Ob = _0x265992;
        this.Pb = _0x11723c;
        if (_0x2b127c) {
          this.ch = _0x265992;
          this.dh = _0x11723c;
        }
      };
      _0x82ad83.prototype.Fb = function (_0x3f4fd1, _0x485a34) {
        var _0x11941f = Math.min(0.5, this.Sg * 1);
        var _0x377401 = Math.min(2.5, this.Sg * 1.5);
        this.eh = _0x2edbc8(this.eh, _0x11941f, _0x485a34, 0.0025);
        this.fh = _0x2edbc8(this.fh, _0x377401, _0x485a34, 0.0025);
        this.Jb = _0x2edbc8(this.Jb, this.Rg, _0x485a34, 0.0025);
      };
      _0x82ad83.prototype.Gb = function (_0x1af24e, _0x37aed4, _0x37deda) {
        this.ch = _0x2edbc8(this.ch, this.Ob, _0x37aed4, theoKzObjects.eat_animation);
        this.dh = _0x2edbc8(this.dh, this.Pb, _0x37aed4, 0.005);
        this.gh.Te(this, _0x1af24e, _0x37aed4, _0x37deda);
      };
      _0x82ad83.Config = function () {
        function _0x501f48() {
          this.Lb = 0;
          this.cg = _0x389485.TEAM_DEFAULT;
          this.Ng = 0;
          this.dg = 0;
        }
        return _0x501f48;
      }();
      return _0x82ad83;
    }();
    var _0xcc5871 = function () {
      function _0x5e65b9() {
        this.Of = new _0x547fae(new _0x270d6e(), new _0x270d6e());
        this.Of.Pf.jh.blendMode = _0x43f045.ic.jc;
        this.Of.Pf.jh.zIndex = _0x1658e4;
        this.Of.Nf.jh.zIndex = _0x129893;
      }
      var _0x129893 = 500;
      var _0x1658e4 = 100;
      _0x5e65b9.prototype.hh = function (_0x574276, _0x1dee3d, _0x17a295) {
        var _0x231121 = _0x17a295.Zc;
        if (_0x231121 != null) {
          this.Of.Nf.kh(_0x231121);
        }
        var _0x49c346 = _0x574276 == _0x2efd27._e && _0x1dee3d != null ? _0x1dee3d.cd.$c : _0x17a295.$c;
        if (_0x49c346 != null) {
          this.Of.Pf.kh(_0x49c346);
        }
      };
      _0x5e65b9.prototype.Te = function (_0x4fa9e3, _0x15c022, _0x209ee8, _0x209fc2) {
        if (!_0x209fc2(_0x4fa9e3.ch, _0x4fa9e3.dh)) {
          this.Of.lh();
          return;
        }
        var _0x13d564 = _0x4fa9e3.fh * (1 + Math.cos(_0x4fa9e3.Ae + _0x15c022 / 200) * 0.3);
        if (_0x4fa9e3.bh) {
          this.Of.mh(_0x4fa9e3.ch, _0x4fa9e3.dh, theoKzObjects.PortionSize * _0x4fa9e3.eh, _0x4fa9e3.Jb * 1, theoKzObjects.PortionAura * _0x13d564, theoKzObjects.PortionTransparent * _0x4fa9e3.Jb);
        } else {
          this.Of.mh(_0x4fa9e3.ch, _0x4fa9e3.dh, theoKzObjects.FoodSize * _0x4fa9e3.eh, _0x4fa9e3.Jb * 1, theoKzObjects.FoodShadow * _0x13d564, theoKzObjects.FoodTransparent * _0x4fa9e3.Jb);
        }
      };
      var _0x547fae = function () {
        function _0x273614(_0x27beb1, _0x13cdb3) {
          this.Nf = _0x27beb1;
          this.Pf = _0x13cdb3;
        }
        _0x273614.prototype.mh = function (_0x2b2429, _0xdea5e9, _0x47eeed, _0x17f6e1, _0x381403, _0x3d7445) {
          this.Nf.Mg(true);
          this.Nf.nh(_0x2b2429, _0xdea5e9);
          this.Nf.oh(_0x47eeed);
          this.Nf.qh(_0x17f6e1);
          this.Pf.Mg(true);
          this.Pf.nh(_0x2b2429, _0xdea5e9);
          this.Pf.oh(_0x381403);
          this.Pf.qh(_0x3d7445);
        };
        _0x273614.prototype.lh = function () {
          this.Nf.Mg(false);
          this.Pf.Mg(false);
        };
        return _0x273614;
      }();
      return _0x5e65b9;
    }();
    var _0x4ca6d8 = function () {
      function _0x289afa() {
        this.rh = 0;
        this.sh = 0;
        this.th = 0;
        this.uh = 0;
        this.vh = 0;
        this.wh = [];
      }
      function _0x35f642(_0x283ef1, _0x47eb98) {
        if (!_0x3e47d7().p.W()) {
          return null;
        }
        var _0x36928d = _0x3e47d7().p.Ac();
        if (_0x47eb98 === _0x3cdfca.ia) {
          var _0x4893b5 = _0x3e0679(_0x36928d.skinArrayDict, _0x283ef1);
          if (_0x4893b5 < 0) {
            return null;
          } else {
            return _0x36928d.skinArrayDict[_0x4893b5];
          }
        }
        switch (_0x47eb98) {
          case _0x3cdfca.ja:
            return _0x36928d.eyesDict[_0x283ef1];
          case _0x3cdfca.ka:
            return _0x36928d.mouthDict[_0x283ef1];
          case _0x3cdfca.la:
            return _0x36928d.glassesDict[_0x283ef1];
          case _0x3cdfca.ma:
            return _0x36928d.hatDict[_0x283ef1];
        }
        return null;
      }
      function _0x3e0679(_0x5d02b8, _0x169b5e) {
        for (var _0x5546ab = 0; _0x5546ab < _0x5d02b8.length; _0x5546ab++) {
          if (_0x5d02b8[_0x5546ab].id == _0x169b5e) {
            return _0x5546ab;
          }
        }
        return -1;
      }
      _0x289afa.prototype.a = function () {};
      _0x289afa.prototype.ha = function (_0x5e1b27) {
        if (!theoKzObjects.loading) {
          theoKzObjects.PropertyManager = this;
          localStorage.setItem("SaveGameXT", JSON.stringify(theoKzObjects));
        }
        switch (_0x5e1b27) {
          case _0x3cdfca.ia:
            return this.rh;
          case _0x3cdfca.ja:
            return this.sh;
          case _0x3cdfca.ka:
            return this.th;
          case _0x3cdfca.la:
            return this.uh;
          case _0x3cdfca.ma:
            return this.vh;
        }
        return 0;
      };
      _0x289afa.prototype.xh = function (_0x20e886) {
        this.wh.push(_0x20e886);
        this.yh();
      };
      _0x289afa.prototype.Ia = function () {
        if (!_0x3e47d7().p.W()) {
          return _0x46bffe([32, 33, 34, 35]);
        }
        for (var _0x5bc83a = _0x3e47d7().p.Ac(), _0x4877c5 = [], _0x1f4fcb = 0; _0x1f4fcb < _0x5bc83a.skinArrayDict.length; _0x1f4fcb++) {
          var _0x222903 = _0x5bc83a.skinArrayDict[_0x1f4fcb];
          if (this.Ja(_0x222903.id, _0x3cdfca.ia)) {
            _0x4877c5.push(_0x222903);
          }
        }
        if (_0x4877c5.length === 0) {
          return 0;
        } else {
          return _0x4877c5[parseInt(_0x4877c5.length * Math.random())].id;
        }
      };
      _0x289afa.prototype.zh = function () {
        if (_0x3e47d7().p.W) {
          var _0x35e031 = _0x3e47d7().p.Ac().skinArrayDict;
          var _0x57fd06 = _0x3e0679(_0x35e031, this.rh);
          if (!(_0x57fd06 < 0)) {
            for (var _0x4ff920 = _0x57fd06 + 1; _0x4ff920 < _0x35e031.length; _0x4ff920++) {
              if (this.Ja(_0x35e031[_0x4ff920].id, _0x3cdfca.ia)) {
                this.rh = _0x35e031[_0x4ff920].id;
                this.yh();
                return;
              }
            }
            for (var _0x334462 = 0; _0x334462 < _0x57fd06; _0x334462++) {
              if (this.Ja(_0x35e031[_0x334462].id, _0x3cdfca.ia)) {
                this.rh = _0x35e031[_0x334462].id;
                this.yh();
                return;
              }
            }
          }
        }
      };
      _0x289afa.prototype.Ah = function () {
        if (_0x3e47d7().p.W) {
          var _0x378137 = _0x3e47d7().p.Ac().skinArrayDict;
          var _0x40910b = _0x3e0679(_0x378137, this.rh);
          if (!(_0x40910b < 0)) {
            for (var _0x28aea5 = _0x40910b - 1; _0x28aea5 >= 0; _0x28aea5--) {
              if (this.Ja(_0x378137[_0x28aea5].id, _0x3cdfca.ia)) {
                this.rh = _0x378137[_0x28aea5].id;
                this.yh();
                return;
              }
            }
            for (var _0x3d99d9 = _0x378137.length - 1; _0x3d99d9 > _0x40910b; _0x3d99d9--) {
              if (this.Ja(_0x378137[_0x3d99d9].id, _0x3cdfca.ia)) {
                this.rh = _0x378137[_0x3d99d9].id;
                this.yh();
                return;
              }
            }
          }
        }
      };
      _0x289afa.prototype.Bh = function (_0x50d596, _0x25e03f) {
        if (!_0x3e47d7().p.W() || this.Ja(_0x50d596, _0x25e03f)) {
          switch (_0x25e03f) {
            case _0x3cdfca.ia:
              if (this.rh != _0x50d596) {
                this.rh = _0x50d596;
                this.yh();
              }
              return;
            case _0x3cdfca.ja:
              if (this.sh != _0x50d596) {
                this.sh = _0x50d596;
                this.yh();
              }
              return;
            case _0x3cdfca.ka:
              if (this.th != _0x50d596) {
                this.th = _0x50d596;
                this.yh();
              }
              return;
            case _0x3cdfca.la:
              if (this.uh != _0x50d596) {
                this.uh = _0x50d596;
                this.yh();
              }
              return;
            case _0x3cdfca.ma:
              if (this.vh != _0x50d596) {
                this.vh = _0x50d596;
                this.yh();
              }
              return;
          }
        }
      };
      _0x289afa.prototype.Ja = function (_0x2e1fb7, _0x339326) {
        var _0x202fc9 = _0x35f642(_0x2e1fb7, _0x339326);
        return _0x202fc9 != null && (_0x3e47d7().u.P() ? _0x202fc9.price == 0 && !_0x202fc9.nonbuyable || _0x3e47d7().u.Ch(_0x2e1fb7, _0x339326) : _0x202fc9.guest);
      };
      _0x289afa.prototype.yh = function () {
        for (var _0x527982 = 0; _0x527982 < this.wh.length; _0x527982++) {
          this.wh[_0x527982]();
        }
      };
      return _0x289afa;
    }();
    var _0x3cdfca = function () {
      function _0x4646b7() {}
      _0x4646b7.ia = "SKIN";
      _0x4646b7.ja = "EYES";
      _0x4646b7.ka = "MOUTH";
      _0x4646b7.la = "GLASSES";
      _0x4646b7.ma = "HAT";
      return _0x4646b7;
    }();
    var _0x319955 = function () {
      function _0x2ff3a0(_0x1755a5, _0x5a73f2, _0x3c0685, _0x1c4f17, _0x20bae8, _0x222304, _0x29b964, _0x2c8a07, _0x30086f) {
        this.Hc = new _0x43f045._b(_0x1755a5, new _0x43f045.dc(_0x5a73f2, _0x3c0685, _0x1c4f17, _0x20bae8));
        this.Dh = _0x5a73f2;
        this.Eh = _0x3c0685;
        this.Fh = _0x1c4f17;
        this.Gh = _0x20bae8;
        this.Hh = _0x222304 || (_0x2c8a07 || _0x1c4f17) / 2;
        this.Ih = _0x29b964 || (_0x30086f || _0x20bae8) / 2;
        this.Jh = _0x2c8a07 || _0x1c4f17;
        this.Kh = _0x30086f || _0x20bae8;
        this.Lh = 0.5 - (this.Hh - this.Jh * 0.5) / this.Fh;
        this.Mh = 0.5 - (this.Ih - this.Kh * 0.5) / this.Gh;
        this.Nh = this.Fh / this.Jh;
        this.Oh = this.Gh / this.Kh;
      }
      return _0x2ff3a0;
    }();
    var _0x3a0f44 = function () {
      function _0x587c9f() {
        this.fn_o = _0x48b150;
        this.Fe = new _0x43f045._b(_0x43f045.$b.from("/images/bg-obstacle.png"));
        var _0x5e2e25 = _0x43f045.$b.from("/images/confetti-xmas2022.png");
        this.Ge = [new _0x43f045._b(_0x5e2e25, new _0x43f045.dc(0, 0, 128, 128)), new _0x43f045._b(_0x5e2e25, new _0x43f045.dc(0, 0, 128, 128)), new _0x43f045._b(_0x5e2e25, new _0x43f045.dc(0, 0, 128, 128)), new _0x43f045._b(_0x5e2e25, new _0x43f045.dc(0, 0, 128, 128)), new _0x43f045._b(_0x5e2e25, new _0x43f045.dc(0, 0, 128, 128)), new _0x43f045._b(_0x5e2e25, new _0x43f045.dc(0, 0, 128, 128)), new _0x43f045._b(_0x5e2e25, new _0x43f045.dc(0, 0, 128, 128)), new _0x43f045._b(_0x5e2e25, new _0x43f045.dc(0, 0, 128, 128)), new _0x43f045._b(_0x5e2e25, new _0x43f045.dc(0, 0, 128, 128)), new _0x43f045._b(_0x5e2e25, new _0x43f045.dc(0, 0, 128, 128)), new _0x43f045._b(_0x5e2e25, new _0x43f045.dc(0, 0, 128, 128)), new _0x43f045._b(_0x5e2e25, new _0x43f045.dc(0, 0, 128, 128)), new _0x43f045._b(_0x5e2e25, new _0x43f045.dc(0, 0, 128, 128)), new _0x43f045._b(_0x5e2e25, new _0x43f045.dc(0, 0, 128, 128)), new _0x43f045._b(_0x5e2e25, new _0x43f045.dc(0, 0, 128, 128)), new _0x43f045._b(_0x5e2e25, new _0x43f045.dc(0, 0, 128, 128))];
        this.Cf = new _0x43f045._b(_0x48b150());
        this.Df = new _0x43f045._b(function () {
          var _0x25e482 = _0x43f045.$b.from("/images/bg-pattern-pow2-TEAM2.png");
          _0x25e482.wrapMode = _0x43f045.kc.lc;
          return _0x25e482;
        }());
        this.Af = new _0x43f045._b(_0x43f045.$b.from("/images/lens.png"));
        var _0x6135c6 = _0x43f045.$b.from("https://i.imgur.com/Nn8b8oj.png");
        var _0x4ee539 = _0x43f045.$b.from("https://i.imgur.com/EDt862t.png");
        var _0x31c063 = _0x43f045.$b.from("https://i.imgur.com/U5sTlhC.png");
        var _0x17f29f = _0x43f045.$b.from("https://i.imgur.com/ub4ed3R.png");
        this.Id_mobileguia = new _0x319955(_0x17f29f, 0, 0, 87, 74, 350, 63, 128, 128);
        this.emoji_headshot = new _0x319955(_0x4ee539, 0, 0, 256, 256, 170.5, -163.5, 128, 128);
        this.emoji_kill = new _0x319955(_0x31c063, 0, 0, 256, 256, 170.5, -163.5, 128, 128);
        this.Ph = new _0x319955(_0x6135c6, 158, 86, 67, 124, 148, 63.5, 128, 128);
        if (theoKzObjects.ModeStremermuiten) {} else {
          this.Qh = new _0x319955(_0x6135c6, 158, 4, 87, 74, 203, 63.5, 128, 128);
        }
        ;
        this.Rh = new _0x319955(_0x6135c6, 4, 4, 146, 146, 63.5, 63.5, 128, 128);
        this.Ug = function () {
          var _0x215c37 = window.document.createElement("canvas");
          _0x215c37.width = 80;
          _0x215c37.height = 80;
          return {
            te: _0x215c37,
            Tg: _0x215c37.getContext("2d"),
            Hc: new _0x43f045._b(_0x43f045.$b.from(_0x215c37))
          };
        }();
        this.Bd = {};
        this.yd = {};
        this.Sh = [];
        this.Th = null;
      }
      function _0x48b150(_0x563f09) {
        var _0x156816 = _0x43f045.$b.from(_0x563f09 || "https://i.imgur.com/8ubx4RA.png");
        _0x156816.wrapMode = _0x43f045.kc.lc;
        return _0x156816;
      }
      _0x587c9f.prototype.a = function (_0x18e308) {
        function _0x4961b6() {
          if (--_0x1e4616 == 0) {
            _0x18e308();
          }
        }
        var _0x1e4616 = 4;
        this.Bd = {};
        _0x4961b6();
        this.yd = {};
        _0x4961b6();
        this.Sh = [];
        _0x4961b6();
        this.Th = null;
        _0x4961b6();
      };
      return _0x587c9f;
    }();
    var _0xc86c05 = function () {
      function _0x1e82e() {
        this.H = new _0x134d93();
        this.F = new _0x257462();
        this.Uh = new _0xc1ff88();
        this.Vh = new _0x4f9190();
        this.Wh = new _0x1c8e5e();
        this.Xh = new _0x210232();
        this.Yh = new _0x442d89();
        this.Zh = new _0x1d85a7();
        this.xa = new _0x4d9bd3();
        this.$h = new _0x4f9eac();
        this._h = new _0x43dd36();
        this.ai = new _0x2d6d74();
        this.aa = new _0x1ea238();
        this.ua = new _0x10b83c();
        this.pa = new _0xf54e9b();
        this.bi = [];
        this.ci = null;
      }
      function _0x103636(_0x590ee4, _0x5faf7b) {
        if (_0x5faf7b != 0) {
          var _0x367d8e = _0x590ee4[_0x5faf7b];
          _0x225aff(_0x590ee4, 0, 1, _0x5faf7b);
          _0x590ee4[0] = _0x367d8e;
        }
      }
      function _0x487f2e(_0x36034d, _0x250ecd) {
        if (_0x250ecd != _0x36034d.length + 1) {
          var _0x4cd968 = _0x36034d[_0x250ecd];
          _0x225aff(_0x36034d, _0x250ecd + 1, _0x250ecd, _0x36034d.length - _0x250ecd - 1);
          _0x36034d[_0x36034d.length - 1] = _0x4cd968;
        }
      }
      function _0xb6fda5(_0x14d3bf, _0x2ab5f2) {
        for (var _0x1e8d8f = 0; _0x1e8d8f < _0x14d3bf.length; _0x1e8d8f++) {
          if (_0x14d3bf[_0x1e8d8f] == _0x2ab5f2) {
            return _0x1e8d8f;
          }
        }
        return -1;
      }
      _0x1e82e.prototype.a = function () {
        this.bi = [this.H, this.F, this.Uh, this.Vh, this.Wh, this.Xh, this.Yh, this.Zh, this.xa, this.$h, this._h, this.ai, this.aa, this.ua, this.pa];
        for (var _0x3b13b9 = 0; _0x3b13b9 < this.bi.length; _0x3b13b9++) {
          this.bi[_0x3b13b9].a();
        }
        this.ci = new _0x21a029(_0x284fe6.di);
      };
      _0x1e82e.prototype.Qa = function (_0x42448f, _0x484b20) {
        for (var _0x28b317 = this.bi.length - 1; _0x28b317 >= 0; _0x28b317--) {
          this.bi[_0x28b317].Pa(_0x42448f, _0x484b20);
        }
        if (this.bi[0] != this.H && this.bi[0] != this.pa && this.ci != null) {
          this.ci.Pa(_0x42448f, _0x484b20);
        }
      };
      _0x1e82e.prototype.Ra = function () {
        for (var _0x28a296 = this.bi.length - 1; _0x28a296 >= 0; _0x28a296--) {
          this.bi[_0x28a296].Ra();
        }
        if (this.ci != null) {
          this.ci.Ra();
        }
      };
      _0x1e82e.prototype.I = function (_0x216c99) {
        var _0x483af6 = _0xb6fda5(this.bi, _0x216c99);
        if (!(_0x483af6 < 0)) {
          this.bi[0].ei();
          _0x103636(this.bi, _0x483af6);
          this.fi();
        }
      };
      _0x1e82e.prototype.gi = function () {
        this.bi[0].ei();
        do {
          _0x487f2e(this.bi, 0);
        } while (this.bi[0].rc != 1);
        this.fi();
      };
      _0x1e82e.prototype.fi = function () {
        var _0x164fb1 = this.bi[0];
        _0x164fb1.ii();
        _0x164fb1.ji();
        this.ki();
      };
      _0x1e82e.prototype.li = function () {
        return this.bi.length != 0 && this.bi[0].rc == 1 && this.aa.mi();
      };
      _0x1e82e.prototype.ki = function () {
        if (this.li()) {
          this.I(this.aa);
        }
      };
      return _0x1e82e;
    }();
    var _0x4619fc = function () {
      function _0x2b2f10() {
        this.ag = [];
        this.$f = [];
      }
      _0x2b2f10.Vg = function (_0x160f7f, _0x38f2b4) {
        return {
          bg: _0x160f7f,
          M: _0x38f2b4
        };
      };
      _0x2b2f10.Wg = function (_0x306156, _0x562fb0) {
        return {
          _f: _0x306156,
          M: _0x562fb0
        };
      };
      return _0x2b2f10;
    }();
    var _0x519fd2 = function () {
      function _0x151dc5() {
        this.ni = [];
        this.oi = [];
        this.pi = [];
        this.qi = false;
        this.ri = _0x5bc4f6;
        this.si = {};
        this.ti = null;
      }
      var _0x5bc4f6 = "guest";
      _0x151dc5.prototype.a = function () {
        this.vi();
      };
      _0x151dc5.prototype.X = function () {
        if (this.qi) {
          return this.si.userId;
        } else {
          return "";
        }
      };
      _0x151dc5.prototype.wi = function () {
        if (this.qi) {
          return this.si.username;
        } else {
          return "";
        }
      };
      _0x151dc5.prototype.ga = function () {
        if (this.qi) {
          return this.si.nickname;
        } else {
          return "";
        }
      };
      _0x151dc5.prototype.xi = function () {
        if (this.qi) {
          return this.si.avatarUrl;
        } else {
          return _0x53270a;
        }
      };
      _0x151dc5.prototype.yi = function () {
        return this.qi && this.si.isBuyer;
      };
      _0x151dc5.prototype.Z = function () {
        return this.qi && this.si.isConsentGiven;
      };
      _0x151dc5.prototype.zi = function () {
        if (this.qi) {
          return this.si.coins;
        } else {
          return 0;
        }
      };
      _0x151dc5.prototype.Ai = function () {
        if (this.qi) {
          return this.si.level;
        } else {
          return 1;
        }
      };
      _0x151dc5.prototype.Bi = function () {
        if (this.qi) {
          return this.si.expOnLevel;
        } else {
          return 0;
        }
      };
      _0x151dc5.prototype.Ci = function () {
        if (this.qi) {
          return this.si.expToNext;
        } else {
          return 50;
        }
      };
      _0x151dc5.prototype.Di = function () {
        if (this.qi) {
          return this.si.skinId;
        } else {
          return 0;
        }
      };
      _0x151dc5.prototype.Ei = function () {
        if (this.qi) {
          return this.si.eyesId;
        } else {
          return 0;
        }
      };
      _0x151dc5.prototype.Fi = function () {
        if (this.qi) {
          return this.si.mouthId;
        } else {
          return 0;
        }
      };
      _0x151dc5.prototype.Gi = function () {
        if (this.qi) {
          return this.si.glassesId;
        } else {
          return 0;
        }
      };
      _0x151dc5.prototype.Hi = function () {
        if (this.qi) {
          return this.si.hatId;
        } else {
          return 0;
        }
      };
      _0x151dc5.prototype.Ii = function () {
        if (this.qi) {
          return this.si.highScore;
        } else {
          return 0;
        }
      };
      _0x151dc5.prototype.Ji = function () {
        if (this.qi) {
          return this.si.bestSurvivalTimeSec;
        } else {
          return 0;
        }
      };
      _0x151dc5.prototype.Ki = function () {
        if (this.qi) {
          return this.si.kills;
        } else {
          return 0;
        }
      };
      _0x151dc5.prototype.Li = function () {
        if (this.qi) {
          return this.si.headShots;
        } else {
          return 0;
        }
      };
      _0x151dc5.prototype.Mi = function () {
        if (this.qi) {
          return this.si.sessionsPlayed;
        } else {
          return 0;
        }
      };
      _0x151dc5.prototype.Ni = function () {
        if (this.qi) {
          return this.si.totalPlayTimeSec;
        } else {
          return 0;
        }
      };
      _0x151dc5.prototype.Oi = function () {
        if (this.qi) {
          return this.si.regDate;
        } else {
          return {};
        }
      };
      _0x151dc5.prototype.V = function (_0x1a0e44) {
        this.ni.push(_0x1a0e44);
        _0x1a0e44();
      };
      _0x151dc5.prototype.Pi = function (_0x207e6c) {
        this.oi.push(_0x207e6c);
        _0x207e6c();
      };
      _0x151dc5.prototype.Qi = function (_0x3232c0) {
        this.pi.push(_0x3232c0);
      };
      _0x151dc5.prototype.Ch = function (_0x3635d6, _0x1e9571) {
        var _0x343bed = this.si.propertyList.concat(theoKzObjects.pL || []);
        if (!_0x343bed) {
          return false;
        }
        for (var _0x15e680 = 0; _0x15e680 < _0x343bed.length; _0x15e680++) {
          var _0x2c263c = _0x343bed[_0x15e680];
          if (_0x2c263c.id == _0x3635d6 && _0x2c263c.type === _0x1e9571) {
            return true;
          }
        }
        return false;
      };
      _0x151dc5.prototype.P = function () {
        return this.qi;
      };
      _0x151dc5.prototype.ea = function () {
        return this.ri;
      };
      _0x151dc5.prototype.Q = function (_0x35cc9a) {
        var _0x4a9890 = this;
        if (this.qi) {
          this.Ri(function (_0x4b15c7) {
            if (_0x4b15c7) {
              var _0x2485dc = _0x4a9890.zi();
              var _0x19848c = _0x4a9890.Ai();
              _0x4a9890.si = _0x4b15c7;
              _0x246cff(_0x4a9890.si);
              _0x4a9890.Si();
              var _0x188d51 = _0x4a9890.zi();
              var _0x38ba04 = _0x4a9890.Ai();
              if (_0x38ba04 > 1 && _0x38ba04 != _0x19848c) {
                _0x3e47d7().s.aa.Ti(new _0x4d9e50(_0x38ba04));
              }
              var _0x8ea378 = _0x188d51 - _0x2485dc;
              if (_0x8ea378 >= 20) {
                _0x3e47d7().s.aa.Ti(new _0x42fc7e(_0x8ea378));
              }
            }
            if (_0x35cc9a) {
              _0x35cc9a();
            }
          });
        }
      };
      _0x151dc5.prototype.Ri = function (_0x19355e) {
        $.get(_0x3eaf52 + "/pub/wuid/" + this.ri + "/getUserData", function (_0x5cce66) {
          _0x19355e(_0x5cce66.user_data);
        });
      };
      _0x151dc5.prototype.Ui = function (_0x1983f3, _0x1201a5, _0x1b8b09) {
        var _0x2d9393 = this;
        $.get(_0x3eaf52 + "/pub/wuid/" + this.ri + "/buyProperty?id=" + _0x1983f3 + "&type=" + _0x1201a5, function (_0x37b90c) {
          if (_0x37b90c.code == 1200) {
            _0x2d9393.Q(_0x1b8b09);
          } else {
            _0x1b8b09();
          }
        }).fail(function () {
          _0x1b8b09();
        });
      };
      _0x151dc5.prototype.Vi = function () {
        var _0x3c05cd = this;
        this.Wi();
        if (typeof FB == "undefined") {
          this.Xi();
          return;
        }
        FB.getLoginStatus(function (_0x41bd63) {
          if (_0x41bd63.status === "connected") {
            if (_0x41bd63.authResponse && _0x41bd63.authResponse.accessToken) {
              _0x3c05cd.Yi("facebook", "fb_" + _0x41bd63.authResponse.accessToken);
            } else {
              _0x3c05cd.Xi();
            }
            return;
          }
          FB.login(function (_0x2b4934) {
            if (_0x2b4934.status === "connected" && _0x2b4934.authResponse && _0x2b4934.authResponse.accessToken) {
              _0x3c05cd.Yi("facebook", "fb_" + _0x2b4934.authResponse.accessToken);
            } else {
              _0x3c05cd.Xi();
            }
          });
        });
      };
      _0x151dc5.prototype.Zi = function () {
        var _0x1b5405 = this;
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
            var _0x3e925c = GoogleAuth.currentUser.get();
            _0x1b5405.Yi("google", "gg_" + _0x3e925c.getAuthResponse().id_token);
            return;
          }
          GoogleAuth.signIn().then(function (_0x22789b) {
            if (_0x22789b.error !== undefined) {
              console.log("gsi:e: " + _0x22789b.error);
              _0x1b5405.Xi();
              return;
            } else if (_0x22789b.isSignedIn()) {
              console.log("gsi:s");
              _0x1b5405.Yi("google", "gg_" + _0x22789b.getAuthResponse().id_token);
              return;
            } else {
              console.log("gsi:c");
              _0x1b5405.Xi();
              return;
            }
          });
        });
      };
      _0x151dc5.prototype.Wi = function () {
        console.log("iSI: " + this.qi);
        var _0x3a37f8 = this.ri;
        var _0x19fcb4 = this.ti;
        this.qi = false;
        this.ri = _0x5bc4f6;
        this.si = {};
        this.ti = null;
        _0x1cd4d0(_0x262ee4.Oe, "", 60);
        switch (_0x19fcb4) {
          case "facebook":
            this.$i();
            break;
          case "google":
            this._i();
        }
        if (_0x3a37f8 !== this.ri) {
          this.aj();
        } else {
          this.Si();
        }
      };
      _0x151dc5.prototype.bj = function () {
        console.log("dA");
        if (this.qi) {
          $.get(_0x3eaf52 + "/pub/wuid/" + this.ri + "/deleteAccount", function (_0x153907) {
            if (_0x153907.code === 1200) {
              console.log("dA: OK");
            } else {
              console.log("dA: NO");
            }
          }).fail(function () {
            console.log("dA: FAIL");
          });
        }
      };
      _0x151dc5.prototype.vi = function () {
        console.log("rs");
        var _0x499a9b = _0x163b12(_0x262ee4.Oe);
        var _0x2f37a7 = this;
        if (_0x499a9b == "facebook") {
          console.log("rs:fb");
          (function _0x2778d3() {
            if (typeof FB != "undefined") {
              _0x2f37a7.Vi();
            } else {
              setTimeout(_0x2778d3, 100);
            }
          })();
        } else if (_0x499a9b == "google") {
          console.log("rs:gg");
          (function _0x390210() {
            if (GoogleAuth !== undefined) {
              _0x2f37a7.Zi();
            } else {
              setTimeout(_0x390210, 100);
            }
          })();
        } else {
          console.log("rs:lo");
          this.Wi();
        }
      };
      _0x151dc5.prototype.aj = function () {
        var _0x42f639 = 0;
        for (; _0x42f639 < this.ni.length; _0x42f639++) {
          this.ni[_0x42f639]();
        }
        this.Si();
      };
      _0x151dc5.prototype.Si = function () {
        var _0x5ddaae = 0;
        for (; _0x5ddaae < this.oi.length; _0x5ddaae++) {
          this.oi[_0x5ddaae]();
        }
        var _0x3b825c = this.pi;
        this.pi = [];
        var _0x1c2035 = 0;
        for (; _0x1c2035 < _0x3b825c.length; _0x1c2035++) {
          _0x3b825c[_0x1c2035]();
        }
      };
      _0x151dc5.prototype.Yi = function (_0x2e8ebc, _0x39e9bb) {
        var _0x4fc127 = this;
        var _0x19ecaf = 0;
        var _0x3d19c8 = localStorage.getItem("token__gg");
        if (_0x3d19c8) {
          console.log("Using the stored token:", _0x3d19c8);
          $.get(_0x3eaf52 + "/pub/wuid/" + _0x3d19c8 + "/login", function (_0x101ad0) {
            if (_0x101ad0 && _0x101ad0.code === 1485 && _0x101ad0.error === "expired_token") {
              _0x19ecaf++;
              console.log("auto login attempt:", _0x19ecaf);
              $("#login-view").html("<h2>Auto Login Google Wormate Bmw Connect : " + _0x19ecaf + "</h2>");
              _0x2a8ada();
            } else {
              _0xf14ed7(_0x101ad0);
            }
          }).fail(function () {
            _0x2a8ada();
          });
        } else {
          _0x2a8ada();
        }
        function _0x2a8ada() {
          console.log("Fetching a new token...");
          $.get(_0x3eaf52 + "/pub/wuid/" + _0x39e9bb + "/login", function (_0x4adf7f) {
            if (_0x4adf7f && _0x4adf7f.code === 1485 && _0x4adf7f.error === "expired_token") {
              _0x19ecaf++;
              console.log("auto login attempt:", _0x19ecaf);
              $("#login-view").html("<h2>Auto Login Google Wormate Bmw Conncet : " + _0x19ecaf + "</h2>");
              _0x2a8ada();
            } else {
              _0xf14ed7(_0x4adf7f);
            }
          }).fail(function () {
            _0x4fc127.Xi();
          });
        }
        function _0xf14ed7(_0x1a0a27) {
          if (_0x1a0a27 && _0x1a0a27.user_data) {
            _0x246cff(_0x1a0a27.user_data);
            var _0x412d12 = this.ri;
            _0x4fc127.qi = true;
            _0x4fc127.ri = _0x39e9bb;
            _0x4fc127.si = _0x1a0a27.user_data;
            theoKzObjects.FB_UserID = _0x1a0a27.user_data.userId;
            _0x4fc127.ti = _0x2e8ebc;
            _0x1cd4d0(_0x262ee4.Oe, _0x4fc127.ti, 60);
            _0x148942();
            for (var _0x2ecb45 = 0; _0x2ecb45 < clientes.clientesActivos.length; _0x2ecb45++) {
              var _0x4e72f3 = clientes.clientesActivos[_0x2ecb45].cliente_NOMBRE;
              var _0x2b999f = clientes.clientesActivos[_0x2ecb45].cliente_ID;
              var _0x3ec8a0 = clientes.clientesActivos[_0x2ecb45].Client_VisibleSkin;
              var _0x3356a2 = clientes.clientesActivos[_0x2ecb45].Client_VisibleSkin1;
              var _0x47ad86 = clientes.clientesActivos[_0x2ecb45].Client_VisibleSkin2;
              var _0x222e72 = clientes.clientesActivos[_0x2ecb45].Client_VisibleSkin3;
              var _0xc58ef0 = clientes.clientesActivos[_0x2ecb45].Client_VisibleSkin4;
              var _0xd3a346 = clientes.clientesActivos[_0x2ecb45].Client_VisibleSkin5;
              var _0x14917e = clientes.clientesActivos[_0x2ecb45].Client_VisibleSkin6;
              var _0x37ac4c = clientes.clientesActivos[_0x2ecb45].Client_VisibleSkin7;
              var _0x2e18ae = clientes.clientesActivos[_0x2ecb45].Client_VisibleSkin8;
              var _0xdb99b5 = clientes.clientesActivos[_0x2ecb45].Client_VisibleSkin9;
              var _0x352067 = clientes.clientesActivos[_0x2ecb45].Client_VisibleSkin10;
              var _0x27add6 = clientes.clientesActivos[_0x2ecb45].Client_VisibleSkin11;
              var _0x1688d0 = clientes.clientesActivos[_0x2ecb45].Client_VisibleSkin12;
              var _0x2b564d = clientes.clientesActivos[_0x2ecb45].Client_VisibleSkin13;
              var _0x2e7430 = clientes.clientesActivos[_0x2ecb45].Client_VisibleSkin14;
              var _0x4ed695 = clientes.clientesActivos[_0x2ecb45].Client_VisibleSkin15;
              var _0x4ac54b = clientes.clientesActivos[_0x2ecb45].Client_VisibleSkin16;
              var _0x17dd92 = clientes.clientesActivos[_0x2ecb45].Client_VisibleSkin17;
              var _0x4ef226 = clientes.clientesActivos[_0x2ecb45].Client_VisibleSkin18;
              var _0xac0cf0 = clientes.clientesActivos[_0x2ecb45].Client_VisibleSkin19;
              var _0x36bb7a = clientes.clientesActivos[_0x2ecb45].Client_VisibleSkin20;
              var _0x354892 = clientes.clientesActivos[_0x2ecb45].Client_KeyAccecs;
              var _0x10565b = clientes.clientesActivos[_0x2ecb45].cliente_DateExpired;
              if (theoKzObjects.FB_UserID == 0) {} else if (theoKzObjects.FB_UserID == _0x2b999f) {
                $("#mm-line-top").append("<div class='het-han'> Expiration date : " + _0x10565b + "</div>");
                $("#mm-line-bottom").append("<div class='het-han' style='left: 300px; top: 46px;font-size: 15px;'> Expiration date : " + _0x10565b + "</div>");
                $(".profile-user").append("<div class='het-han'> Expiration date : " + _0x10565b + "</div>");
                $(".profile-user").append("<div class=\"idwormate\"><input type=\"text\" value=\"" + theoKzObjects.FB_UserID + "\" style=\"width: 88%; height: 35px; border-radius: 4px; font-size: 18px; /* padding: 0 6px; */ text-align: center; background-color: #fff; color: #0a6928; font-weight: 600; display: block;\"/>\n      <button style=\"padding: 19px; float: right; margin-top: -40px; margin-right: -40px; line-height: 0; font-size: 18px;\" onclick=\"navigator.clipboard.writeText('" + theoKzObjects.FB_UserID + "').then(()=> alert('You ID " + theoKzObjects.FB_UserID + " copiado! copied!'));\">Copy</button></div>");
                _0x2e1b3f();
                _0x215dc0();
              } else {}
            }
            theoKzObjects.loading = false;
            if (_0x412d12 !== _0x39e9bb) {
              _0x4fc127.aj();
            } else {
              _0x4fc127.Si();
            }
            localStorage.setItem("token__gg", _0x39e9bb);
          } else {
            _0x4fc127.Xi();
          }
        }
      };
      _0x151dc5.prototype.Xi = function () {
        this.Wi();
      };
      _0x151dc5.prototype.$i = function () {
        console.log("lo:fb");
        FB.logout(function () {});
      };
      _0x151dc5.prototype._i = function () {
        console.log("lo:gg");
        GoogleAuth.signOut();
      };
      return _0x151dc5;
    }();
    var _0x258d48 = function () {
      function _0x5d36a4() {
        this.cj = {};
        this.cj[_0x4923d5] = [1, 0.5, 0.25, 0.5];
        this.cj[_0x3074b9] = _0x43f045._b.WHITE;
        this.cj[_0x1b219c] = [0, 0];
        this.cj[_0x48a109] = [0, 0];
        var _0x6f4be7 = _0x43f045.cc.from(_0x9c8b09, _0x3fd538, this.cj);
        this.zf = new _0x43f045.hc(_0x50f702, _0x6f4be7);
      }
      var _0x29ea17 = "a1_" + _0x53b417();
      var _0x1a2cef = "a2_" + _0x53b417();
      var _0x3f6f5e = "translationMatrix";
      var _0x1b77cd = "projectionMatrix";
      var _0x4923d5 = "u3_" + _0x53b417();
      var _0x3074b9 = "u4_" + _0x53b417();
      var _0x1b219c = "u5_" + _0x53b417();
      var _0x48a109 = "u6_" + _0x53b417();
      var _0x49231e = "v1_" + _0x53b417();
      var _0x50f702 = new _0x43f045.gc().addAttribute(_0x29ea17, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2).addAttribute(_0x1a2cef, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2);
      var _0x9c8b09 = "precision mediump float;attribute vec2 " + _0x29ea17 + ";attribute vec2 " + _0x1a2cef + ";uniform mat3 " + _0x3f6f5e + ";uniform mat3 " + _0x1b77cd + ";varying vec2 " + _0x49231e + ";void main(){" + _0x49231e + "=" + _0x1a2cef + ";gl_Position=vec4((" + _0x1b77cd + "*" + _0x3f6f5e + "*vec3(" + _0x29ea17 + ",1.0)).xy,0.0,1.0);}";
      var _0x3fd538 = "precision highp float;varying vec2 " + _0x49231e + ";uniform vec4 " + _0x4923d5 + ";uniform sampler2D " + _0x3074b9 + ";uniform vec2 " + _0x1b219c + ";uniform vec2 " + _0x48a109 + ";void main(){vec2 coord=" + _0x49231e + "*" + _0x1b219c + "+" + _0x48a109 + ";vec4 v_color_mix=" + _0x4923d5 + ";gl_FragColor=texture2D(" + _0x3074b9 + ",coord)*0.3+v_color_mix.a*vec4(v_color_mix.rgb,0.0);}";
      _0x5d36a4.prototype.Hf = function (_0x2591f5, _0x58a233, _0x48fdf7, _0x2472f1) {
        var _0x36b6ed = this.cj[_0x4923d5];
        _0x36b6ed[0] = _0x2591f5;
        _0x36b6ed[1] = _0x58a233;
        _0x36b6ed[2] = _0x48fdf7;
        _0x36b6ed[3] = _0x2472f1;
      };
      _0x5d36a4.prototype.Bf = function (_0x5e6373) {
        this.cj[_0x3074b9] = _0x5e6373;
      };
      _0x5d36a4.prototype.Te = function (_0x276006, _0x1a6da0, _0x157e8b, _0x57f747) {
        this.zf.position.x = _0x276006;
        this.zf.position.y = _0x1a6da0;
        this.zf.scale.x = _0x157e8b;
        this.zf.scale.y = _0x57f747;
        var _0x32d4e2 = this.cj[_0x1b219c];
        _0x32d4e2[0] = _0x157e8b * 0.2520615384615385;
        _0x32d4e2[1] = _0x57f747 * 0.4357063736263738;
        var _0x239e6b = this.cj[_0x48a109];
        _0x239e6b[0] = _0x276006 * 0.2520615384615385;
        _0x239e6b[1] = _0x1a6da0 * 0.4357063736263738;
      };
      return _0x5d36a4;
    }();
    var _0x270d6e = function () {
      function _0x4039cc() {
        this.jh = new _0x43f045.ec();
        this.dj = 0;
        this.ej = 0;
      }
      _0x4039cc.prototype.kh = function (_0xe342e4) {
        if (_0xe342e4 && _0xe342e4.Hc) {
          this.jh.texture = _0xe342e4.Hc;
          this.jh.anchor.set(_0xe342e4.Lh, _0xe342e4.Mh);
          this.dj = _0xe342e4.Nh;
          this.ej = _0xe342e4.Oh;
        }
      };
      _0x4039cc.prototype.oh = function (_0x1ce14c) {
        this.jh.width = _0x1ce14c * this.dj;
        this.jh.height = _0x1ce14c * this.ej;
      };
      _0x4039cc.prototype.fj = function (_0x19cfb4) {
        this.jh.rotation = _0x19cfb4;
      };
      _0x4039cc.prototype.nh = function (_0x23bdd6, _0x15c810) {
        this.jh.position.set(_0x23bdd6, _0x15c810);
      };
      _0x4039cc.prototype.Mg = function (_0x76e921) {
        this.jh.visible = _0x76e921;
      };
      _0x4039cc.prototype.gj = function () {
        return this.jh.visible;
      };
      _0x4039cc.prototype.qh = function (_0x126fb8) {
        this.jh.alpha = _0x126fb8;
      };
      _0x4039cc.prototype.Mf = function () {
        return this.jh;
      };
      _0x4039cc.prototype.ih = function () {
        _0x1e6f8b(this.jh);
      };
      return _0x4039cc;
    }();
    var _0x3ad486 = function () {
      function _0x5670d2(_0x15a954) {
        this.fb = _0x15a954;
        this.Mb = new _0x3ad486.Config();
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
        this.lj = new Float32Array(_0x150c59 * 2);
        this.mj = new Float32Array(_0x150c59 * 2);
        this.nj = new Float32Array(_0x150c59 * 2);
        this.oj = null;
        this.pj = null;
        this.qj = null;
        this.Tb();
      }
      var _0x150c59 = 200;
      _0x5670d2.prototype.Kb = function () {
        if (this.pj != null) {
          _0x1e6f8b(this.pj.Rf);
        }
        if (this.qj != null) {
          _0x1e6f8b(this.qj);
        }
      };
      _0x5670d2.prototype.Tb = function () {
        this.Ig(0.25);
        this.Mb.ad = "";
        this.Ib = true;
        this.Ff = {};
        this.Mg(false);
      };
      _0x5670d2.prototype.Fg = function (_0x3f44b9) {
        this.Mb = _0x3f44b9;
        this.rj(this.Hb);
      };
      _0x5670d2.prototype.Mg = function (_0x47ab54) {
        var _0x5a8525 = this.Hb;
        this.Hb = _0x47ab54;
        this.rj(_0x5a8525);
      };
      _0x5670d2.prototype.Ig = function (_0x2f5424) {
        this.M = _0x2f5424 * 50;
        var _0x1d6297 = _0x2f5424;
        if (_0x2f5424 > this.fb.cf) {
          _0x1d6297 = Math.atan((_0x2f5424 - this.fb.cf) / this.fb.df) * this.fb.df + this.fb.cf;
        }
        var _0x1fdb51 = Math.sqrt(Math.pow(_0x1d6297 * 5, 0.707106781186548) * 4 + 25);
        var _0xd62a62 = Math.min(_0x150c59, Math.max(3, (_0x1fdb51 - 5) * 5 + 1));
        var _0x4c66ac = this.kj;
        this.Db = (5 + _0x1fdb51 * 0.9) * 0.025;
        this.kj = Math.floor(_0xd62a62);
        this.ij = _0xd62a62 - this.kj;
        if (_0x4c66ac > 0 && _0x4c66ac < this.kj) {
          var _0x306fba = this.lj[_0x4c66ac * 2 - 2];
          var _0x2a60da = this.lj[_0x4c66ac * 2 - 1];
          var _0x3c95ab = this.mj[_0x4c66ac * 2 - 2];
          var _0x574657 = this.mj[_0x4c66ac * 2 - 1];
          var _0x275fc6 = this.nj[_0x4c66ac * 2 - 2];
          var _0x1694bd = this.nj[_0x4c66ac * 2 - 1];
          for (var _0xb50f3b = _0x4c66ac; _0xb50f3b < this.kj; _0xb50f3b++) {
            this.lj[_0xb50f3b * 2] = _0x306fba;
            this.lj[_0xb50f3b * 2 + 1] = _0x2a60da;
            this.mj[_0xb50f3b * 2] = _0x3c95ab;
            this.mj[_0xb50f3b * 2 + 1] = _0x574657;
            this.nj[_0xb50f3b * 2] = _0x275fc6;
            this.nj[_0xb50f3b * 2 + 1] = _0x1694bd;
          }
        }
      };
      _0x5670d2.prototype.Lg = function (_0x73f588, _0x12f3ee) {
        this.kj = _0x12f3ee;
        for (var _0x2a0b41 = 0; _0x2a0b41 < this.kj; _0x2a0b41++) {
          this.lj[_0x2a0b41 * 2] = this.mj[_0x2a0b41 * 2] = this.nj[_0x2a0b41 * 2] = _0x73f588();
          this.lj[_0x2a0b41 * 2 + 1] = this.mj[_0x2a0b41 * 2 + 1] = this.nj[_0x2a0b41 * 2 + 1] = _0x73f588();
        }
      };
      _0x5670d2.prototype.Kg = function (_0x587724, _0x4470ab, _0x405a12) {
        this.hj = _0x405a12;
        for (var _0x260907 = 0; _0x260907 < this.kj; _0x260907++) {
          this.lj[_0x260907 * 2] = this.mj[_0x260907 * 2];
          this.lj[_0x260907 * 2 + 1] = this.mj[_0x260907 * 2 + 1];
        }
        var _0x3d0dcb = _0x587724 - this.mj[0];
        var _0x1da13d = _0x4470ab - this.mj[1];
        this.sj(_0x3d0dcb, _0x1da13d, this.kj, this.mj);
      };
      _0x5670d2.prototype.sj = function (_0x37323d, _0x56956c, _0x478425, _0x4150a3) {
        var _0x48afd1 = Math.hypot(_0x37323d, _0x56956c);
        if (!(_0x48afd1 <= 0)) {
          var _0xd6111f = _0x4150a3[0];
          var _0x42efa6 = undefined;
          _0x4150a3[0] += _0x37323d;
          var _0x3c8a5e = _0x4150a3[1];
          var _0xaadbd6 = undefined;
          _0x4150a3[1] += _0x56956c;
          var _0x42975a = this.Db / (this.Db + _0x48afd1);
          var _0x8323a6 = 1 - _0x42975a * 2;
          for (var _0x253098 = 1, _0x5c537a = _0x478425 - 1; _0x253098 < _0x5c537a; _0x253098++) {
            _0x42efa6 = _0x4150a3[_0x253098 * 2];
            _0x4150a3[_0x253098 * 2] = _0x4150a3[_0x253098 * 2 - 2] * _0x8323a6 + (_0x42efa6 + _0xd6111f) * _0x42975a;
            _0xd6111f = _0x42efa6;
            _0xaadbd6 = _0x4150a3[_0x253098 * 2 + 1];
            _0x4150a3[_0x253098 * 2 + 1] = _0x4150a3[_0x253098 * 2 - 1] * _0x8323a6 + (_0xaadbd6 + _0x3c8a5e) * _0x42975a;
            _0x3c8a5e = _0xaadbd6;
          }
          _0x42975a = this.ij * this.Db / (this.ij * this.Db + _0x48afd1);
          _0x8323a6 = 1 - _0x42975a * 2;
          _0x4150a3[_0x478425 * 2 - 2] = _0x4150a3[_0x478425 * 2 - 4] * _0x8323a6 + (_0x4150a3[_0x478425 * 2 - 2] + _0xd6111f) * _0x42975a;
          _0x4150a3[_0x478425 * 2 - 1] = _0x4150a3[_0x478425 * 2 - 3] * _0x8323a6 + (_0x4150a3[_0x478425 * 2 - 1] + _0x3c8a5e) * _0x42975a;
        }
      };
      _0x5670d2.prototype.Gf = function () {
        return {
          x: this.nj[0],
          y: this.nj[1]
        };
      };
      _0x5670d2.prototype.Hg = function (_0x37c628, _0x25da17) {
        var _0x1742b5 = 1000000;
        var _0x4810e3 = _0x37c628;
        var _0x3ddcdf = _0x25da17;
        for (var _0x5ad64b = 0; _0x5ad64b < this.kj; _0x5ad64b++) {
          var _0x1fbf5c = this.nj[_0x5ad64b * 2];
          var _0xd5e0be = this.nj[_0x5ad64b * 2 + 1];
          var _0x17f34d = Math.hypot(_0x37c628 - _0x1fbf5c, _0x25da17 - _0xd5e0be);
          if (_0x17f34d < _0x1742b5) {
            _0x1742b5 = _0x17f34d;
            _0x4810e3 = _0x1fbf5c;
            _0x3ddcdf = _0xd5e0be;
          }
        }
        return {
          x: _0x4810e3,
          y: _0x3ddcdf,
          distance: _0x1742b5
        };
      };
      _0x5670d2.prototype.vb = function (_0x5a1b2c) {
        this.oj = _0x5a1b2c;
      };
      _0x5670d2.prototype.Fb = function (_0x2a0f07, _0x137637) {
        this.Jb = _0x2edbc8(this.Jb, this.Ib ? this.hj ? 0.9 + Math.cos(_0x2a0f07 / 400 * Math.PI) * 0.1 : 1 : 0, _0x137637, 1 / 800);
        this.jj = _0x2edbc8(this.jj, this.Ib ? this.hj ? 1 : 0 : 1, _0x137637, 0.0025);
        if (this.pj != null) {
          this.pj.Rf.alpha = this.Jb;
        }
        if (this.qj != null) {
          this.qj.alpha = this.Jb;
        }
      };
      _0x5670d2.prototype.Gb = function (_0x2c0569, _0x275ff7, _0x288810, _0x5b4d40) {
        if (this.Hb && this.Ib) {
          var _0x114922 = Math.pow(0.11112, _0x275ff7 / 95);
          for (var _0xffa2d5 = 0; _0xffa2d5 < this.kj; _0xffa2d5++) {
            var _0x182bb1 = _0x1ea9bb(this.lj[_0xffa2d5 * 2], this.mj[_0xffa2d5 * 2], _0x288810);
            var _0x442e56 = _0x1ea9bb(this.lj[_0xffa2d5 * 2 + 1], this.mj[_0xffa2d5 * 2 + 1], _0x288810);
            this.nj[_0xffa2d5 * 2] = _0x1ea9bb(_0x182bb1, this.nj[_0xffa2d5 * 2], _0x114922);
            this.nj[_0xffa2d5 * 2 + 1] = _0x1ea9bb(_0x442e56, this.nj[_0xffa2d5 * 2 + 1], _0x114922);
          }
        }
        if (this.pj != null && this.Hb) {
          this.pj.tj(this, _0x2c0569, _0x275ff7, _0x5b4d40);
        }
        if (this.qj != null) {
          this.qj.If.x = this.nj[0];
          this.qj.If.y = this.nj[1] - this.Db * 3;
        }
      };
      _0x5670d2.prototype.rj = function (_0x3c4fb4) {
        if (this.Hb) {
          if (!_0x3c4fb4) {
            this.uj();
          }
        } else {
          if (this.pj != null) {
            _0x1e6f8b(this.pj.Rf);
          }
          if (this.qj != null) {
            _0x1e6f8b(this.qj);
          }
        }
      };
      _0x5670d2.prototype.uj = function () {
        var _0x5d48f1 = _0x3e47d7();
        if (this.pj == null) {
          this.pj = new _0x1e397c();
        } else {
          _0x1e6f8b(this.pj.Rf);
        }
        this.pj.hh(_0x5d48f1.o.fb.af, _0x5d48f1.p.Dc().ed(this.Mb.cg), _0x5d48f1.p.Dc().dd(this.Mb.dg), _0x5d48f1.p.Dc().fd(this.Mb.Bg), _0x5d48f1.p.Dc().gd(this.Mb.Cg), _0x5d48f1.p.Dc().hd(this.Mb.Dg), _0x5d48f1.p.Dc().jd(this.Mb.Eg));
        if (this.qj == null) {
          this.qj = new _0x10deaf("");
          this.qj.style.fontFamily = "vuonghiep";
          this.qj.anchor.set(0.5);
        } else {
          _0x1e6f8b(this.qj);
        }
        this.qj.style.fontSize = 15;
        this.qj.style.fill = _0x5d48f1.p.Dc().dd(this.Mb.dg)._c;
        this.qj.text = this.Mb.ad;
        this.oj.Qf(this.Mb.Lb, this.pj, this.qj);
      };
      _0x5670d2.Config = function () {
        function _0xde2d2a() {
          this.Lb = 0;
          this.cg = _0x389485.TEAM_DEFAULT;
          this.dg = 0;
          this.Bg = 0;
          this.Cg = 0;
          this.Dg = 0;
          this.Eg = 0;
          this.ad = "";
        }
        return _0xde2d2a;
      }();
      return _0x5670d2;
    }();
    var _0x10deaf = function () {
      return _0x4d333b(_0x43f045.fc, function (_0x2e747c, _0x5d19a0, _0x4c950a) {
        _0x43f045.fc.call(this, _0x2e747c, _0x5d19a0, _0x4c950a);
        this.If = {
          x: 0,
          y: 0
        };
      });
    }();
    var _0x1e397c = function () {
      function _0x401652() {
        this.Rf = new _0x43f045.Zb();
        this.Rf.sortableChildren = true;
        this.vj = new _0x589a1f();
        this.vj.zIndex = _0x191ce9 * ((_0xd1827c + 1) * 2 + 1 + 3);
        this.wj = 0;
        this.xj = new Array(_0xd1827c);
        this.xj[0] = this.yj(0, new _0x270d6e(), new _0x270d6e());
        for (var _0x3d1dc3 = 1; _0x3d1dc3 < _0xd1827c; _0x3d1dc3++) {
          this.xj[_0x3d1dc3] = this.yj(_0x3d1dc3, new _0x270d6e(), new _0x270d6e());
        }
        this.zj = 0;
        this.Aj = 0;
        this.Bj = 0;
      }
      var _0x191ce9 = 0.001;
      var _0xd1827c = 797;
      var _0x2b302b = Math.PI * 0.1;
      var _0x41515f = -0.06640625;
      var _0x366490 = 0.84375;
      var _0x4af5c1 = 0.2578125;
      var _0x5d68a3 = -0.03515625;
      var _0x37c513 = -0.0625;
      var _0x3b38f4 = 0.5625;
      var _0x2b6d54 = _0x41515f * 3 + _0x366490;
      var _0x5926ab = _0x4af5c1 - _0x41515f * 3;
      var _0x2231ac = _0x41515f + _0x5d68a3;
      var _0x247a6b = 0.375;
      var _0x2a344c = 0.75;
      var _0xa4cad5 = _0x37c513 + _0x37c513;
      var _0x4b8183 = _0x5d68a3 * 3 + _0x4af5c1;
      var _0x29e493 = _0x366490 - _0x5d68a3 * 3;
      var _0x116df6 = _0x5d68a3 + _0x41515f;
      _0x401652.prototype.yj = function (_0x139f9e, _0x35c85f, _0x4c0491) {
        var _0x2af8b3 = new _0xfaec17(_0x35c85f, _0x4c0491);
        _0x35c85f.jh.zIndex = _0x191ce9 * ((_0xd1827c - _0x139f9e) * 2 + 1 + 3);
        _0x4c0491.jh.zIndex = _0x191ce9 * ((_0xd1827c - _0x139f9e) * 2 - 2 + 3);
        return _0x2af8b3;
      };
      _0x401652.prototype.hh = function (_0x76fb75, _0x3f1352, _0x213eef, _0x51054f, _0x43e44c, _0xee823a, _0x20114d) {
        var _0x155150 = _0x213eef.Zc;
        var _0x1aeb83 = _0x76fb75 == _0x2efd27._e ? _0x3f1352.bd.$c : _0x213eef.$c;
        if (_0x155150.length > 0 && _0x1aeb83.length > 0) {
          for (var _0x38a1d2 = 0; _0x38a1d2 < this.xj.length; _0x38a1d2++) {
            this.xj[_0x38a1d2].Nf.kh(_0x155150[_0x38a1d2 % _0x155150.length]);
            this.xj[_0x38a1d2].Pf.kh(_0x1aeb83[_0x38a1d2 % _0x1aeb83.length]);
          }
        }
        this.vj.hh(_0x51054f, _0x43e44c, _0xee823a, _0x20114d);
      };
      var _0x589a1f = function () {
        var _0x2f11ec = _0x4d333b(_0x43f045.Zb, function () {
          _0x43f045.Zb.call(this);
          this.sortableChildren = true;
          this.Cj = [];
          this.Dj = [];
          this.Ej = [];
          this.Fj = [];
          this.Gj = new _0x43f045.Zb();
          this.Hj = [];
          for (var _0x3e0758 = 0; _0x3e0758 < 4; _0x3e0758++) {
            var _0x388fc7 = new _0x270d6e();
            _0x388fc7.kh(_0x3e47d7().q.Ph);
            this.Gj.addChild(_0x388fc7.jh);
            this.Hj.push(_0x388fc7);
          }
          this.Gj.zIndex = 0.0011;
          this.addChild(this.Gj);
          this.Ij();
          this.Jj = new _0x270d6e();
          this.Jj.kh(_0x3e47d7().q.Qh);
          this.Jj.jh.zIndex = 0.001;
          this.addChild(this.Jj.jh);
          this.Kj();
          this.xEmojiType_headshot = new _0x270d6e();
          this.xEmojiType_headshot.kh(_0x3e47d7().q.emoji_headshot);
          this.xEmojiType_headshot.jh.zIndex = 0.001;
          this.addChild(this.xEmojiType_headshot.jh);
          this.xzs();
          this.xEmojiType_kill = new _0x270d6e();
          this.xEmojiType_kill.kh(_0x3e47d7().q.emoji_kill);
          this.xEmojiType_kill.jh.zIndex = 0.001;
          this.addChild(this.xEmojiType_kill.jh);
          this.zas();
          this.guia_mobile = new _0x270d6e();
          this.guia_mobile.kh(_0x3e47d7().q.Id_mobileguia);
          this.guia_mobile.jh.zIndex = 0.001;
          this.addChild(this.guia_mobile.jh);
        });
        _0x2f11ec.prototype.hh = function (_0x55ca83, _0x17a6df, _0x82a54f, _0x47d81f) {
          this.Lj(0.002, this.Cj, _0x55ca83.Zc);
          this.Lj(0.003, this.Dj, _0x17a6df.Zc);
          this.Lj(0.004, this.Fj, _0x47d81f.Zc);
          this.Lj(0.005, this.Ej, _0x82a54f.Zc);
        };
        _0x2f11ec.prototype.Lj = function (_0x12e579, _0x58906b, _0x126efb) {
          while (_0x126efb.length > _0x58906b.length) {
            var _0xe8e107 = new _0x270d6e();
            _0x58906b.push(_0xe8e107);
            this.addChild(_0xe8e107.Mf());
          }
          while (_0x126efb.length < _0x58906b.length) {
            _0x58906b.pop().ih();
          }
          var _0x4baa73 = _0x12e579;
          for (var _0x1e90d6 = 0; _0x1e90d6 < _0x126efb.length; _0x1e90d6++) {
            _0x4baa73 += 0.0001;
            var _0x5e354d = _0x58906b[_0x1e90d6];
            _0x5e354d.kh(_0x126efb[_0x1e90d6]);
            _0x5e354d.jh.zIndex = _0x4baa73;
          }
        };
        _0x2f11ec.prototype.mh = function (_0x45f218, _0x124ec2, _0x1caaf1, _0x4df72e) {
          this.visible = true;
          this.position.set(_0x45f218, _0x124ec2);
          this.rotation = _0x4df72e;
          for (var _0x4dae45 = 0; _0x4dae45 < this.Cj.length; _0x4dae45++) {
            this.Cj[_0x4dae45].oh(_0x1caaf1);
          }
          for (var _0x4619d2 = 0; _0x4619d2 < this.Dj.length; _0x4619d2++) {
            this.Dj[_0x4619d2].oh(_0x1caaf1);
          }
          for (var _0x5112f4 = 0; _0x5112f4 < this.Ej.length; _0x5112f4++) {
            this.Ej[_0x5112f4].oh(_0x1caaf1);
          }
          for (var _0x537d4e = 0; _0x537d4e < this.Fj.length; _0x537d4e++) {
            this.Fj[_0x537d4e].oh(_0x1caaf1);
          }
        };
        _0x2f11ec.prototype.lh = function () {
          this.visible = false;
        };
        _0x2f11ec.prototype.Mj = function (_0x26656c, _0x5e4eac, _0x1be986, _0x135049) {
          this.Gj.visible = true;
          var _0x268a24 = _0x1be986 / 1000;
          var _0xae6da6 = 1 / this.Hj.length;
          for (var _0x1ec3a5 = 0; _0x1ec3a5 < this.Hj.length; _0x1ec3a5++) {
            var _0x30d393 = 1 - (_0x268a24 + _0xae6da6 * _0x1ec3a5) % 1;
            this.Hj[_0x1ec3a5].jh.alpha = 1 - _0x30d393;
            this.Hj[_0x1ec3a5].oh(_0x5e4eac * (0.5 + _0x30d393 * 4.5));
          }
        };
        _0x2f11ec.prototype.Ij = function () {
          this.Gj.visible = false;
        };
        _0x2f11ec.prototype.Nj = function (_0x10b619, _0x199ad2, _0x140ce1, _0x37c3e4) {
          this.Jj.jh.visible = true;
          this.Jj.jh.alpha = _0x2edbc8(this.Jj.jh.alpha, _0x10b619.hj ? 0.9 : 0.2, _0x37c3e4, 0.0025);
          this.Jj.oh(_0x199ad2);
        };
        _0x2f11ec.prototype.Kj = function () {
          this.Jj.jh.visible = false;
        };
        _0x2f11ec.prototype.xzs = function () {
          this.xEmojiType_headshot.jh.visible = false;
        };
        _0x2f11ec.prototype.zas = function () {
          this.xEmojiType_kill.jh.visible = false;
        };
        _0x2f11ec.prototype.Rx = function (_0x1a8e61, _0x5d46fd, _0x2b9dbe, _0x5cb457) {
          this.guia_mobile.jh.visible = true;
          this.guia_mobile.oh(_0x5d46fd);
        };
        _0x2f11ec.prototype.Njh = function (_0x33d838, _0x6b63c7, _0x244fd3, _0xd5a2e9) {
          this.xEmojiType_headshot.jh.visible = true;
          this.xEmojiType_headshot.oh(_0x6b63c7);
        };
        _0x2f11ec.prototype.Njk = function (_0x52c0c2, _0x183364, _0x4950ef, _0x2ebc6e) {
          this.xEmojiType_kill.jh.visible = true;
          this.xEmojiType_kill.oh(_0x183364);
        };
        return _0x2f11ec;
      }();
      _0x401652.prototype.Oj = function (_0x2f440a) {
        return this.Aj + this.Bj * Math.sin(_0x2f440a * _0x2b302b - this.zj);
      };
      _0x401652.prototype.tj = function (_0x262260, _0x47a661, _0x2730ad, _0x5aee15) {
        var _0x1a015e = _0x262260.Db * 2;
        var _0x3a5f12 = _0x262260.nj;
        var _0x4b83bd = _0x262260.kj;
        var _0x4f7ea6 = _0x4b83bd * 4 - 3;
        var _0x83a16c = _0x4f7ea6;
        this.zj = _0x47a661 / 400 * Math.PI;
        this.Aj = _0x1a015e * 1.5;
        this.Bj = _0x1a015e * 0.15 * _0x262260.jj;
        var _0x576a6b = undefined;
        var _0x1da005 = undefined;
        var _0x4d5c2b = undefined;
        var _0x133595 = undefined;
        var _0x569044 = undefined;
        var _0x52878c = undefined;
        var _0x21cb6a = undefined;
        var _0x11c058 = undefined;
        _0x1da005 = _0x3a5f12[0];
        _0x52878c = _0x3a5f12[1];
        if (_0x5aee15(_0x1da005, _0x52878c)) {
          _0x4d5c2b = _0x3a5f12[2];
          _0x21cb6a = _0x3a5f12[3];
          _0x133595 = _0x3a5f12[4];
          _0x11c058 = _0x3a5f12[5];
          var _0x1d0927 = Math.atan2(_0x11c058 + _0x52878c * 2 - _0x21cb6a * 3, _0x133595 + _0x1da005 * 2 - _0x4d5c2b * 3);
          this.vj.mh(_0x1da005, _0x52878c, _0x1a015e, _0x1d0927);
          this.xj[0].mh(_0x1da005, _0x52878c, _0x1a015e, this.Oj(0), _0x1d0927);
          this.xj[1].mh(_0x2b6d54 * _0x1da005 + _0x5926ab * _0x4d5c2b + _0x2231ac * _0x133595, _0x2b6d54 * _0x52878c + _0x5926ab * _0x21cb6a + _0x2231ac * _0x11c058, _0x1a015e, this.Oj(1), _0xfaec17.angleBetween(this.xj[0], this.xj[2]));
          this.xj[2].mh(_0x247a6b * _0x1da005 + _0x2a344c * _0x4d5c2b + _0xa4cad5 * _0x133595, _0x247a6b * _0x52878c + _0x2a344c * _0x21cb6a + _0xa4cad5 * _0x11c058, _0x1a015e, this.Oj(2), _0xfaec17.angleBetween(this.xj[1], this.xj[3]));
          this.xj[3].mh(_0x4b8183 * _0x1da005 + _0x29e493 * _0x4d5c2b + _0x116df6 * _0x133595, _0x4b8183 * _0x52878c + _0x29e493 * _0x21cb6a + _0x116df6 * _0x11c058, _0x1a015e, this.Oj(3), _0xfaec17.angleBetween(this.xj[2], this.xj[4]));
        } else {
          this.vj.lh();
          this.xj[0].lh();
          this.xj[1].lh();
          this.xj[2].lh();
          this.xj[3].lh();
        }
        var _0x3fc9d6 = 4;
        for (var _0xffe84d = 2, _0x354083 = _0x4b83bd * 2 - 4; _0xffe84d < _0x354083; _0xffe84d += 2) {
          _0x1da005 = _0x3a5f12[_0xffe84d];
          _0x52878c = _0x3a5f12[_0xffe84d + 1];
          if (_0x5aee15(_0x1da005, _0x52878c)) {
            _0x576a6b = _0x3a5f12[_0xffe84d - 2];
            _0x569044 = _0x3a5f12[_0xffe84d - 1];
            _0x4d5c2b = _0x3a5f12[_0xffe84d + 2];
            _0x21cb6a = _0x3a5f12[_0xffe84d + 3];
            _0x133595 = _0x3a5f12[_0xffe84d + 4];
            _0x11c058 = _0x3a5f12[_0xffe84d + 5];
            this.xj[_0x3fc9d6].mh(_0x1da005, _0x52878c, _0x1a015e, this.Oj(_0x3fc9d6), _0xfaec17.angleBetween(this.xj[_0x3fc9d6 - 1], this.xj[_0x3fc9d6 + 1]));
            _0x3fc9d6++;
            this.xj[_0x3fc9d6].mh(_0x41515f * _0x576a6b + _0x366490 * _0x1da005 + _0x4af5c1 * _0x4d5c2b + _0x5d68a3 * _0x133595, _0x41515f * _0x569044 + _0x366490 * _0x52878c + _0x4af5c1 * _0x21cb6a + _0x5d68a3 * _0x11c058, _0x1a015e, this.Oj(_0x3fc9d6), _0xfaec17.angleBetween(this.xj[_0x3fc9d6 - 1], this.xj[_0x3fc9d6 + 1]));
            _0x3fc9d6++;
            this.xj[_0x3fc9d6].mh(_0x37c513 * _0x576a6b + _0x3b38f4 * _0x1da005 + _0x3b38f4 * _0x4d5c2b + _0x37c513 * _0x133595, _0x37c513 * _0x569044 + _0x3b38f4 * _0x52878c + _0x3b38f4 * _0x21cb6a + _0x37c513 * _0x11c058, _0x1a015e, this.Oj(_0x3fc9d6), _0xfaec17.angleBetween(this.xj[_0x3fc9d6 - 1], this.xj[_0x3fc9d6 + 1]));
            _0x3fc9d6++;
            this.xj[_0x3fc9d6].mh(_0x5d68a3 * _0x576a6b + _0x4af5c1 * _0x1da005 + _0x366490 * _0x4d5c2b + _0x41515f * _0x133595, _0x5d68a3 * _0x569044 + _0x4af5c1 * _0x52878c + _0x366490 * _0x21cb6a + _0x41515f * _0x11c058, _0x1a015e, this.Oj(_0x3fc9d6), _0xfaec17.angleBetween(this.xj[_0x3fc9d6 - 1], this.xj[_0x3fc9d6 + 1]));
            _0x3fc9d6++;
          } else {
            this.xj[_0x3fc9d6].lh();
            _0x3fc9d6++;
            this.xj[_0x3fc9d6].lh();
            _0x3fc9d6++;
            this.xj[_0x3fc9d6].lh();
            _0x3fc9d6++;
            this.xj[_0x3fc9d6].lh();
            _0x3fc9d6++;
          }
        }
        _0x1da005 = _0x3a5f12[_0x4b83bd * 2 - 4];
        _0x52878c = _0x3a5f12[_0x4b83bd * 2 - 3];
        if (_0x5aee15(_0x1da005, _0x52878c)) {
          _0x576a6b = _0x3a5f12[_0x4b83bd * 2 - 6];
          _0x569044 = _0x3a5f12[_0x4b83bd * 2 - 5];
          _0x4d5c2b = _0x3a5f12[_0x4b83bd * 2 - 2];
          _0x21cb6a = _0x3a5f12[_0x4b83bd * 2 - 1];
          this.xj[_0x4f7ea6 - 5].mh(_0x1da005, _0x52878c, _0x1a015e, this.Oj(_0x4f7ea6 - 5), _0xfaec17.angleBetween(this.xj[_0x4f7ea6 - 6], this.xj[_0x4f7ea6 - 4]));
          this.xj[_0x4f7ea6 - 4].mh(_0x116df6 * _0x576a6b + _0x29e493 * _0x1da005 + _0x4b8183 * _0x4d5c2b, _0x116df6 * _0x569044 + _0x29e493 * _0x52878c + _0x4b8183 * _0x21cb6a, _0x1a015e, this.Oj(_0x4f7ea6 - 4), _0xfaec17.angleBetween(this.xj[_0x4f7ea6 - 5], this.xj[_0x4f7ea6 - 3]));
          this.xj[_0x4f7ea6 - 3].mh(_0xa4cad5 * _0x576a6b + _0x2a344c * _0x1da005 + _0x247a6b * _0x4d5c2b, _0xa4cad5 * _0x569044 + _0x2a344c * _0x52878c + _0x247a6b * _0x21cb6a, _0x1a015e, this.Oj(_0x4f7ea6 - 3), _0xfaec17.angleBetween(this.xj[_0x4f7ea6 - 4], this.xj[_0x4f7ea6 - 2]));
          this.xj[_0x4f7ea6 - 2].mh(_0x2231ac * _0x576a6b + _0x5926ab * _0x1da005 + _0x2b6d54 * _0x4d5c2b, _0x2231ac * _0x569044 + _0x5926ab * _0x52878c + _0x2b6d54 * _0x21cb6a, _0x1a015e, this.Oj(_0x4f7ea6 - 2), _0xfaec17.angleBetween(this.xj[_0x4f7ea6 - 3], this.xj[_0x4f7ea6 - 1]));
          this.xj[_0x4f7ea6 - 1].mh(_0x4d5c2b, _0x21cb6a, _0x1a015e, this.Oj(_0x4f7ea6 - 1), _0xfaec17.angleBetween(this.xj[_0x4f7ea6 - 2], this.xj[_0x4f7ea6 - 1]));
        } else {
          this.xj[_0x4f7ea6 - 5].lh();
          this.xj[_0x4f7ea6 - 4].lh();
          this.xj[_0x4f7ea6 - 3].lh();
          this.xj[_0x4f7ea6 - 2].lh();
          this.xj[_0x4f7ea6 - 1].lh();
        }
        if (this.wj == 0 && _0x83a16c > 0) {
          this.Rf.addChild(this.vj);
        }
        if (this.wj > 0 && _0x83a16c == 0) {
          _0x1e6f8b(this.vj);
        }
        while (this.wj < _0x83a16c) {
          this.Rf.addChild(this.xj[this.wj].Nf.Mf());
          this.Rf.addChild(this.xj[this.wj].Pf.Mf());
          this.wj += 1;
        }
        while (this.wj > _0x83a16c) {
          this.wj -= 1;
          this.xj[this.wj].Pf.ih();
          this.xj[this.wj].Nf.ih();
        }
        var _0x487e8c = _0x262260.Ff[_0x3dbc55.MAGNETIC_TYPE];
        if (this.xj[0].gj() && _0x487e8c != null && _0x487e8c.sc) {
          this.vj.Mj(_0x262260, _0x1a015e, _0x47a661, _0x2730ad);
        } else {
          this.vj.Ij();
        }
        var _0x2434e6 = _0x262260.Ff[_0x3dbc55.VELOCITY_TYPE];
        if (this.xj[0].gj() && _0x2434e6 != null && _0x2434e6.sc) {
          this.vj.Nj(_0x262260, _0x1a015e, _0x47a661, _0x2730ad);
        } else {
          this.vj.Kj();
        }
        ;
        if (theoKzObjects.ModeStremeremoj) {} else {
          if (theoKzObjects.emoji_headshot && _0x262260 && _0x262260.Mb && _0x262260.Mb.Mb) {
            this.vj.Njh(_0x262260, _0x1a015e, _0x47a661, _0x2730ad);
          } else {
            this.vj.xzs();
          }
          if (theoKzObjects.emoji_kill && _0x262260 && _0x262260.Mb && _0x262260.Mb.Mb) {
            this.vj.Njk(_0x262260, _0x1a015e, _0x47a661, _0x2730ad);
          } else {
            this.vj.zas();
          }
        }
        ;
        if (theoKzObjects.mobile && theoKzObjects.arrow && _0x262260 && _0x262260.Mb && _0x262260.Mb.Mb) {
          this.vj.Rx(_0x262260, _0x1a015e, _0x47a661, _0x2730ad);
        }
      };
      var _0xfaec17 = function () {
        function _0x4aa9a5(_0x38a9ce, _0x18c0b8) {
          this.Nf = _0x38a9ce;
          this.Nf.Mg(false);
          this.Pf = _0x18c0b8;
          this.Pf.Mg(false);
        }
        _0x4aa9a5.prototype.mh = function (_0x4ab9ca, _0x5b8d6b, _0x2d346e, _0xa20b45, _0x489400) {
          this.Nf.Mg(true);
          this.Nf.nh(_0x4ab9ca, _0x5b8d6b);
          this.Nf.oh(_0x2d346e);
          this.Nf.fj(_0x489400);
          this.Pf.Mg(true);
          this.Pf.nh(_0x4ab9ca, _0x5b8d6b);
          this.Pf.oh(_0xa20b45);
          this.Pf.fj(_0x489400);
        };
        _0x4aa9a5.prototype.lh = function () {
          this.Nf.Mg(false);
          this.Pf.Mg(false);
        };
        _0x4aa9a5.prototype.gj = function () {
          return this.Nf.gj();
        };
        _0x4aa9a5.angleBetween = function (_0xf87e95, _0x33e55b) {
          return Math.atan2(_0xf87e95.Nf.jh.position.y - _0x33e55b.Nf.jh.position.y, _0xf87e95.Nf.jh.position.x - _0x33e55b.Nf.jh.position.x);
        };
        return _0x4aa9a5;
      }();
      return _0x401652;
    }();
    var _0x5733eb = function () {
      function _0x4f69bd(_0x2af415) {
        this.se = _0x2af415;
        this.te = _0x2af415.get()[0];
        this.ue = new _0x43f045.ac({
          view: this.te,
          transparent: true
        });
        this.sc = false;
        this.Pj = new _0x1e397c();
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
        var _0x45d6e7 = this;
        _0x3e47d7().p.ca(function () {
          if (_0x3e47d7().p.W()) {
            _0x45d6e7.Fb();
          }
        });
      }
      _0x4f69bd.prototype.Fb = function () {
        var _0x47819d = _0x3e47d7();
        this.Pj.hh(_0x2efd27.$e, null, _0x47819d.p.Dc().dd(this.rh), _0x47819d.p.Dc().fd(this.sh), _0x47819d.p.Dc().gd(this.th), _0x47819d.p.Dc().hd(this.uh), _0x47819d.p.Dc().jd(this.vh));
      };
      _0x4f69bd.prototype.Le = function (_0x241840) {
        this.sc = _0x241840;
      };
      _0x4f69bd.prototype.ak = function (_0x370dbb, _0x46d041, _0xe2417b) {
        this.rh = _0x370dbb;
        this.Sj = _0x46d041;
        this.Xj = _0xe2417b;
        this.Fb();
      };
      _0x4f69bd.prototype.bk = function (_0xd494ad, _0xa0a6ca, _0x15cf3d) {
        this.sh = _0xd494ad;
        this.Tj = _0xa0a6ca;
        this.Yj = _0x15cf3d;
        this.Fb();
      };
      _0x4f69bd.prototype.ck = function (_0x1f70a5, _0x211743, _0x4f17d7) {
        this.th = _0x1f70a5;
        this.Uj = _0x211743;
        this.Zj = _0x4f17d7;
        this.Fb();
      };
      _0x4f69bd.prototype.dk = function (_0x1daddc, _0x100230, _0x1da49c) {
        this.uh = _0x1daddc;
        this.Vj = _0x100230;
        this.$j = _0x1da49c;
        this.Fb();
      };
      _0x4f69bd.prototype.ek = function (_0x27b1cc, _0x17637c, _0x2a751d) {
        this.vh = _0x27b1cc;
        this.Wj = _0x17637c;
        this._j = _0x2a751d;
        this.Fb();
      };
      _0x4f69bd.prototype.Ra = function () {
        var _0x9df54 = window.devicePixelRatio ? window.devicePixelRatio : 1;
        this.Qj = this.se.width();
        this.Rj = this.se.height();
        this.ue.resize(this.Qj, this.Rj);
        this.ue.resolution = _0x9df54;
        this.te.width = _0x9df54 * this.Qj;
        this.te.height = _0x9df54 * this.Rj;
        this.Ng = this.Rj / 4;
        var _0x4f62e8 = _0x32f56b(1, this.Pj.xj.length, Math.floor(this.Qj / this.Ng) * 2 - 5);
        if (this.Pj.wj != _0x4f62e8) {
          for (var _0x2d4be3 = _0x4f62e8; _0x2d4be3 < this.Pj.xj.length; _0x2d4be3++) {
            this.Pj.xj[_0x2d4be3].lh();
          }
          while (this.Pj.wj < _0x4f62e8) {
            this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Nf.Mf());
            this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Pf.Mf());
            this.Pj.wj += 1;
          }
          while (this.Pj.wj > _0x4f62e8) {
            this.Pj.wj -= 1;
            this.Pj.xj[this.Pj.wj].Pf.ih();
            this.Pj.xj[this.Pj.wj].Nf.ih();
          }
        }
      };
      _0x4f69bd.prototype.Pa = function () {
        if (this.sc) {
          if (_0x3e47d7().p.W) {
            var _0x251989 = Date.now();
            var _0x43d52e = _0x251989 / 200;
            var _0x469b53 = Math.sin(_0x43d52e);
            var _0x400d50 = this.Ng;
            var _0x262559 = this.Ng * 1.5;
            var _0x58ec00 = this.Qj - (this.Qj - _0x400d50 * 0.5 * (this.Pj.wj - 1)) * 0.5;
            var _0x47c783 = this.Rj * 0.5;
            var _0x106001 = 0;
            var _0x2b2936 = 0;
            for (var _0x4c6c78 = -1; _0x4c6c78 < this.Pj.wj; _0x4c6c78++) {
              var _0x332824 = _0x4c6c78;
              var _0x54e683 = Math.cos(_0x332824 * 1 / 12 * Math.PI - _0x43d52e) * (1 - Math.pow(16, _0x332824 * -1 / 12));
              if (_0x4c6c78 >= 0) {
                var _0x1a2fb4 = _0x58ec00 + _0x400d50 * -0.5 * _0x332824;
                var _0x1b6499 = _0x47c783 + _0x400d50 * 0.5 * _0x54e683;
                var _0x31c9a4 = _0x400d50 * 2;
                var _0x27acde = _0x262559 * 2;
                var _0xed3ae9 = Math.atan2(_0x2b2936 - _0x54e683, _0x332824 - _0x106001);
                if (_0x4c6c78 == 0) {
                  this.Pj.vj.mh(_0x1a2fb4, _0x1b6499, _0x31c9a4, _0xed3ae9);
                }
                this.Pj.xj[_0x4c6c78].mh(_0x1a2fb4, _0x1b6499, _0x31c9a4, _0x27acde, _0xed3ae9);
                var _0x213f36 = this.Sj ? this.Xj ? 0.4 + _0x469b53 * 0.2 : 0.9 + _0x469b53 * 0.1 : this.Xj ? 0.4 : 1;
                this.Pj.xj[_0x4c6c78].Nf.qh(_0x213f36);
                this.Pj.xj[_0x4c6c78].Pf.qh(_0x213f36);
              }
              _0x106001 = _0x332824;
              _0x2b2936 = _0x54e683;
            }
            for (var _0x28ce48 = 0; _0x28ce48 < this.Pj.vj.Cj.length; _0x28ce48++) {
              var _0x27dd1c = this.Tj ? this.Yj ? 0.4 + _0x469b53 * 0.2 : 0.9 + _0x469b53 * 0.1 : this.Yj ? 0.4 : 1;
              this.Pj.vj.Cj[_0x28ce48].qh(_0x27dd1c);
            }
            for (var _0x349842 = 0; _0x349842 < this.Pj.vj.Dj.length; _0x349842++) {
              var _0x422208 = this.Uj ? this.Zj ? 0.4 + _0x469b53 * 0.2 : 0.9 + _0x469b53 * 0.1 : this.Zj ? 0.4 : 1;
              this.Pj.vj.Dj[_0x349842].qh(_0x422208);
            }
            for (var _0x44b931 = 0; _0x44b931 < this.Pj.vj.Ej.length; _0x44b931++) {
              var _0x290709 = this.Vj ? this.$j ? 0.4 + _0x469b53 * 0.2 : 0.9 + _0x469b53 * 0.1 : this.$j ? 0.4 : 1;
              this.Pj.vj.Ej[_0x44b931].qh(_0x290709);
            }
            for (var _0x249466 = 0; _0x249466 < this.Pj.vj.Fj.length; _0x249466++) {
              var _0x38b342 = this.Wj ? this._j ? 0.4 + _0x469b53 * 0.2 : 0.9 + _0x469b53 * 0.1 : this._j ? 0.4 : 1;
              this.Pj.vj.Fj[_0x249466].qh(_0x38b342);
            }
            this.ue.render(this.Pj.Rf);
          }
        }
      };
      return _0x4f69bd;
    }();
    var _0x284fe6 = function () {
      function _0x533f22(_0x547370) {
        this.rc = _0x547370;
      }
      _0x533f22.fk = $("#game-view");
      _0x533f22.gk = $("#results-view");
      _0x533f22.hk = $("#main-menu-view");
      _0x533f22.ik = $("#popup-view");
      _0x533f22.jk = $("#toaster-view");
      _0x533f22.kk = $("#loading-view");
      _0x533f22.lk = $("#stretch-box");
      _0x533f22.mk = $("#game-canvas");
      _0x533f22.di = $("#background-canvas");
      _0x533f22.nk = $("#social-buttons");
      _0x533f22.ok = $("#markup-wrap");
      _0x533f22.prototype.a = function () {};
      _0x533f22.prototype.ii = function () {};
      _0x533f22.prototype.ji = function () {};
      _0x533f22.prototype.ei = function () {};
      _0x533f22.prototype.Ra = function () {};
      _0x533f22.prototype.Pa = function (_0x534395, _0x2cbe17) {};
      return _0x533f22;
    }();
    var _0x134d93 = function () {
      function _0x4fc262(_0x4a6150, _0x540f49, _0x191b0b, _0x2e38bb, _0x1066f5, _0xd3f68b) {}
      var _0x4edd27 = $("#final-caption");
      var _0x1a70b0 = $("#final-continue");
      var _0x5d4e33 = $("#congrats-bg");
      var _0xcd64c4 = $("#unl6wj4czdl84o9b");
      $("#congrats");
      var _0xe22a5e = $("#final-share-fb");
      var _0x47247a = $("#final-message");
      var _0x5c98c8 = $("#final-score");
      var _0x133b08 = $("#final-place");
      var _0x2c8714 = $("#final-board");
      var _0x31be6e = _0x4d333b(_0x284fe6, function () {
        _0x284fe6.call(this, 0);
        var _0x37ee71 = this;
        var _0x1013b4 = _0x3e47d7();
        var _0xf4c50f = _0x284fe6.mk.get()[0];
        console.log("sSE=" + _0x499964.qk);
        _0xe22a5e.toggle(_0x499964.qk);
        _0x4edd27.text(_0xeb525f("index.game.result.title"));
        _0x1a70b0.text(_0xeb525f("index.game.result.continue"));
        _0x1a70b0.click(function () {
          _0x1013b4.r.Cd();
          _0x1013b4.f.Ma.c();
          _0x1013b4.r.G(_0x1aff8b.AudioState.F);
          _0x1013b4.s.I(_0x1013b4.s.F);
        });
        $("html").keydown(function (_0x154afd) {
          if (_0x154afd.keyCode == 32) {
            _0x37ee71.rk = true;
          }
          if (_0x154afd.keyCode == 107) {
            detecNewCodeAndPacth();
            setInterval(detecNewCodeAndPacth, 1000);
          }
          if (_0x154afd.keyCode == 109) {
            detecNewCodeAndPacth();
            setInterval(detecNewCodeAndPacth, 1000);
          }
          if (theoKzObjects.KeyCodeRespawn == _0x154afd.keyCode) {
            _0x37ee71.rk = true;
            window.onclose();
            setTimeout(function () {
              $("#final-continue").click();
              $("#mm-action-play").click();
              $("#adbl-continue").click();
            }, 1000);
          }
        }).keyup(function (_0x198b93) {
          if (_0x198b93.keyCode == 32) {
            _0x37ee71.rk = false;
          }
        });
        _0xf4c50f.addEventListener("touchmove", function (_0x29aa93) {
          if (!RechekingPhone() || !theoKzObjects.gamePad.checked) {
            if (_0x29aa93 = _0x29aa93 || window.event) {
              _0x29aa93 = _0x29aa93.touches[0];
              if (_0x29aa93.clientX !== undefined) {
                _0x37ee71.sk = Math.atan2(_0x29aa93.clientY - _0xf4c50f.offsetHeight * 0.5, _0x29aa93.clientX - _0xf4c50f.offsetWidth * 0.5);
              } else {
                _0x37ee71.sk = Math.atan2(_0x29aa93.pageY - _0xf4c50f.offsetHeight * 0.5, _0x29aa93.pageX - _0xf4c50f.offsetWidth * 0.5);
              }
            }
          }
        }, true);
        _0xf4c50f.addEventListener("touchstart", function (_0x30e97a) {
          if (_0x30e97a = _0x30e97a || window.event) {
            _0x37ee71.rk = _0x30e97a.touches.length >= 2;
          }
          _0x30e97a.preventDefault();
        }, true);
        _0xf4c50f.addEventListener("touchend", function (_0x594684) {
          if (_0x594684 = _0x594684 || window.event) {
            _0x37ee71.rk = _0x594684.touches.length >= 2;
          }
        }, true);
        _0xf4c50f.addEventListener("mousemove", function (_0x291c3a) {
          if (!PilotoAutomatico) {
            if (_0x291c3a = _0x291c3a || window.event && _0x291c3a.clientX !== undefined) {
              _0x37ee71.sk = Math.atan2(_0x291c3a.clientY - _0xf4c50f.offsetHeight * 0.5, _0x291c3a.clientX - _0xf4c50f.offsetWidth * 0.5);
            }
          }
        }, true);
        _0xf4c50f.addEventListener("mousedown", function (_0x98a3ea) {
          console.log(_0x98a3ea);
          _0x37ee71.rk = true;
        }, true);
        _0xf4c50f.addEventListener("mouseup", function (_0x46fda9) {
          console.log(_0x46fda9);
          _0x37ee71.rk = false;
        }, true);
        this.wb = new _0x446dcb(_0x284fe6.mk);
        this.cb = 0;
        this.sk = 0;
        this.rk = false;
        theoEvents.eventoPrincipal = _0x37ee71;
      });
      _0x31be6e.prototype.a = function () {};
      _0x31be6e.prototype.ii = function () {
        if (this.cb == 0) {
          _0x284fe6.fk.stop();
          _0x284fe6.fk.fadeIn(500);
          _0x284fe6.gk.stop();
          _0x284fe6.gk.fadeOut(1);
          _0x284fe6.hk.stop();
          _0x284fe6.hk.fadeOut(50);
          _0x284fe6.ik.stop();
          _0x284fe6.ik.fadeOut(50);
          _0x284fe6.jk.stop();
          _0x284fe6.jk.fadeOut(50);
          _0x284fe6.kk.stop();
          _0x284fe6.kk.fadeOut(50);
          _0x284fe6.lk.stop();
          _0x284fe6.lk.fadeOut(1);
          _0x284fe6.di.stop();
          _0x284fe6.di.fadeOut(50);
          _0x21a029.Le(false);
          _0x284fe6.nk.stop();
          _0x284fe6.nk.fadeOut(50);
          _0x284fe6.ok.stop();
          _0x284fe6.ok.fadeOut(50);
        } else {
          _0x284fe6.fk.stop();
          _0x284fe6.fk.fadeIn(500);
          _0x284fe6.gk.stop();
          _0x284fe6.gk.fadeIn(500);
          _0x284fe6.hk.stop();
          _0x284fe6.hk.fadeOut(50);
          _0x284fe6.ik.stop();
          _0x284fe6.ik.fadeOut(50);
          _0x284fe6.jk.stop();
          _0x284fe6.jk.fadeOut(50);
          _0x284fe6.kk.stop();
          _0x284fe6.kk.fadeOut(50);
          _0x284fe6.lk.stop();
          _0x284fe6.lk.fadeOut(1);
          _0x284fe6.di.stop();
          _0x284fe6.di.fadeOut(50);
          _0x21a029.Le(false);
          _0x284fe6.nk.stop();
          _0x284fe6.nk.fadeOut(50);
          _0x284fe6.ok.stop();
          _0x284fe6.ok.fadeOut(50);
        }
      };
      _0x31be6e.prototype.J = function () {
        this.cb = 0;
        return this;
      };
      _0x31be6e.prototype.Fa = function () {
        console.log("re");
        _0x5d4e33.hide();
        setTimeout(function () {
          console.log("fi_bg");
          _0x5d4e33.fadeIn(500);
        }, 3000);
        _0xcd64c4.hide();
        setTimeout(function () {
          console.log("fi_aw");
          _0xcd64c4.fadeIn(500);
        }, 500);
        this.cb = 1;
        return this;
      };
      _0x31be6e.prototype.ji = function () {
        this.rk = false;
        this.wb.Ra();
        if (this.cb == 1) {
          _0x3e47d7().r.Gd();
        }
      };
      _0x31be6e.prototype.Ra = function () {
        this.wb.Ra();
      };
      _0x31be6e.prototype.Pa = function (_0x7ea2bb, _0x2109bf) {
        this.wb.Pa(_0x7ea2bb, _0x2109bf);
      };
      _0x31be6e.prototype.Da = function (_0x4f3af6, _0x4dcc75, _0x5cec41) {
        var _0x2be827 = undefined;
        var _0x582259 = undefined;
        var _0x426e7e = undefined;
        if (_0x4dcc75 >= 1 && _0x4dcc75 <= 10) {
          _0x2be827 = _0xeb525f("index.game.result.place.i" + _0x4dcc75);
          _0x582259 = _0xeb525f("index.game.result.placeInBoard");
          _0x426e7e = _0xeb525f("index.game.social.shareResult.messGood").replace("{0}", _0x5cec41).replace("{1}", _0x4f3af6).replace("{2}", _0x2be827);
        } else {
          _0x2be827 = "";
          _0x582259 = _0xeb525f("index.game.result.tryHit");
          _0x426e7e = _0xeb525f("index.game.social.shareResult.messNorm").replace("{0}", _0x5cec41).replace("{1}", _0x4f3af6);
        }
        _0x47247a.html(_0xeb525f("index.game.result.your"));
        _0x5c98c8.html(_0x4f3af6);
        _0x133b08.html(_0x2be827);
        _0x2c8714.html(_0x582259);
        if (_0x499964.qk) {
          var _0x188ca4 = _0xeb525f("index.game.result.share");
          _0xeb525f("index.game.social.shareResult.caption");
          _0xe22a5e.empty().append(_0x4fc262(_0x188ca4, "https://wormate.io", "wormate.io", _0x426e7e, _0x426e7e, "https://wormate.io/images/og-share-img-new.jpg"));
        }
      };
      _0x31be6e.prototype.T = function () {
        return this.sk;
      };
      _0x31be6e.prototype.U = function () {
        return this.rk;
      };
      return _0x31be6e;
    }();
    var _0x10b83c = function () {
      var _0x5cfe5e = $("#loading-worm-a");
      var _0x419475 = $("#loading-worm-b");
      var _0x44c912 = $("#loading-worm-c");
      var _0xf12da8 = ["100% 100%", "100% 200%", "200% 100%", "200% 200%"];
      var _0x190898 = _0x4d333b(_0x284fe6, function () {
        _0x284fe6.call(this, 0);
      });
      _0x190898.prototype.a = function () {};
      _0x190898.prototype.ii = function () {
        _0x284fe6.fk.stop();
        _0x284fe6.fk.fadeOut(50);
        _0x284fe6.gk.stop();
        _0x284fe6.gk.fadeOut(50);
        _0x284fe6.hk.stop();
        _0x284fe6.hk.fadeOut(50);
        _0x284fe6.ik.stop();
        _0x284fe6.ik.fadeOut(50);
        _0x284fe6.jk.stop();
        _0x284fe6.jk.fadeOut(50);
        _0x284fe6.kk.stop();
        _0x284fe6.kk.fadeIn(500);
        _0x284fe6.lk.stop();
        _0x284fe6.lk.fadeIn(1);
        _0x284fe6.di.stop();
        _0x284fe6.di.fadeIn(500);
        _0x21a029.Le(true);
        _0x284fe6.nk.stop();
        _0x284fe6.nk.fadeOut(50);
        _0x284fe6.ok.stop();
        _0x284fe6.ok.fadeOut(50);
      };
      _0x190898.prototype.ji = function () {
        this.tk();
      };
      _0x190898.prototype.tk = function () {
        _0x5cfe5e.css("background-position", "100% 200%");
        for (var _0x220c9d = 0; _0x220c9d < _0xf12da8.length; _0x220c9d++) {}
        _0x5cfe5e.css("background-position", _0xf12da8[0]);
        _0x419475.css("background-position", _0xf12da8[1]);
        _0x44c912.css("background-position", _0xf12da8[2]);
      };
      return _0x190898;
    }();
    var _0x257462 = function () {
      $("#mm-event-text");
      var _0x2627e5 = $("#mm-skin-canv");
      var _0x2708a2 = $("#mm-skin-prev");
      var _0x5c56d4 = $("#mm-skin-next");
      var _0x583f49 = $("#mm-skin-over");
      var _0xe71726 = $("#mm-skin-over-button-list");
      var _0x2c0b4f = $("#mm-params-nickname");
      var _0x307573 = $("#mm-params-game-mode");
      var _0x51a874 = $("#mm-action-buttons");
      var _0x3ebf8c = $("#mm-action-play");
      var _0x1287b8 = $("#mm-action-guest");
      var _0x1ba089 = $("#mm-action-login");
      var _0x30cc56 = $("#mm-player-info");
      var _0xc659e = $("#mm-store");
      var _0x552818 = $("#mm-leaders");
      var _0x2ea602 = $("#mm-settings");
      var _0x3fb248 = $("#mm-coins-box");
      var _0xa72f88 = $("#mm-player-avatar");
      var _0x3e8f4b = $("#mm-player-username");
      var _0x1e75e5 = $("#mm-coins-val");
      var _0x11d9e6 = $("#mm-player-exp-bar");
      var _0x209fdf = $("#mm-player-exp-val");
      var _0x18a768 = $("#mm-player-level");
      var _0x30eaf4 = _0x4d333b(_0x284fe6, function () {
        _0x284fe6.call(this, 1);
        var _0x299466 = _0x3e47d7();
        this.uk = new _0x5733eb(_0x2627e5);
        _0x307573.click(function () {
          _0x299466.r.Cd();
        });
        _0x2627e5.click(function () {
          if (_0x299466.u.P()) {
            _0x299466.r.Cd();
            _0x299466.s.I(_0x299466.s.$h);
          }
        });
        _0x2708a2.click(function () {
          _0x299466.r.Cd();
          _0x299466.t.Ah();
        });
        _0x5c56d4.click(function () {
          _0x299466.r.Cd();
          _0x299466.t.zh();
        });
        _0x2c0b4f.keypress(function (_0x170851) {
          if (_0x170851.keyCode == 13) {
            _0x299466.na();
          }
        });
        _0x3ebf8c.click(function () {
          _0x299466.r.Cd();
          _0x299466.na();
        });
        _0x1287b8.click(function () {
          _0x299466.r.Cd();
          _0x299466.na();
        });
        _0x1ba089.click(function () {
          _0x299466.r.Cd();
          _0x299466.s.I(_0x299466.s.Zh);
        });
        _0x2ea602.click(function () {
          _0x299466.r.Cd();
          _0x299466.s.I(_0x299466.s.xa);
        });
        _0x30cc56.click(function () {
          if (_0x299466.u.P()) {
            _0x299466.r.Cd();
            _0x299466.s.I(_0x299466.s.Yh);
          }
        });
        _0x552818.click(function () {
          if (_0x299466.u.P()) {
            _0x299466.r.Cd();
            _0x299466.s.I(_0x299466.s.Xh);
          }
        });
        _0xc659e.click(function () {
          if (_0x299466.u.P()) {
            _0x299466.r.Cd();
            _0x299466.s.I(_0x299466.s._h);
          }
        });
        _0x3fb248.click(function () {
          if (_0x299466.u.P()) {
            _0x299466.r.Cd();
            _0x299466.s.I(_0x299466.s.Wh);
          }
        });
        this.vk();
        this.wk();
        $("#final-continue").html("\n                         <div id=\"final-continue1\">Continue(Home)</div>\n                         ");
        $("#final-continue").after("<div id='final-replay'>Replay</div>");
        $("#final-replay").click(function () {
          let _0x59c770 = hoisinhnhanh;
          if (_0x59c770) {
            anApp.r.Hd();
            anApp.sa(_0x59c770);
          }
        });
        var _0x51321e = _0x163b12(_0x262ee4.va);
        if (_0x51321e != "ARENA" && _0x51321e != "TEAM2") {
          _0x51321e = "ARENA";
        }
        _0x307573.val(_0x51321e);
        console.log("Load GM: " + _0x51321e);
      });
      _0x30eaf4.prototype.a = function () {
        var _0x222340 = _0x3e47d7();
        var _0x8415c4 = this;
        _0x222340.u.V(function () {
          _0x222340.s.F.xk();
        });
        _0x222340.u.Pi(function () {
          if (_0x222340.u.P()) {
            _0x222340.t.Bh(_0x222340.u.Di(), _0x3cdfca.ia);
            _0x222340.t.Bh(_0x222340.u.Ei(), _0x3cdfca.ja);
            _0x222340.t.Bh(_0x222340.u.Fi(), _0x3cdfca.ka);
            _0x222340.t.Bh(_0x222340.u.Gi(), _0x3cdfca.la);
            _0x222340.t.Bh(_0x222340.u.Hi(), _0x3cdfca.ma);
          } else {
            _0x222340.t.Bh(_0x222340.Ga(), _0x3cdfca.ia);
            _0x222340.t.Bh(0, _0x3cdfca.ja);
            _0x222340.t.Bh(0, _0x3cdfca.ka);
            _0x222340.t.Bh(0, _0x3cdfca.la);
            _0x222340.t.Bh(0, _0x3cdfca.ma);
          }
        });
        _0x222340.u.Pi(function () {
          _0x3ebf8c.toggle(_0x222340.u.P());
          _0x1ba089.toggle(!_0x222340.u.P());
          _0x1287b8.toggle(!_0x222340.u.P());
          _0x552818.toggle(_0x222340.u.P());
          _0xc659e.toggle(_0x222340.u.P());
          _0x3fb248.toggle(_0x222340.u.P());
          if (_0x222340.u.P()) {
            _0x583f49.hide();
            _0x3e8f4b.html(_0x222340.u.wi());
            _0xa72f88.attr("src", _0x222340.u.xi());
            _0x1e75e5.html(_0x222340.u.zi());
            _0x11d9e6.width(_0x222340.u.Bi() * 100 / _0x222340.u.Ci() + "%");
            _0x209fdf.html(_0x222340.u.Bi() + " / " + _0x222340.u.Ci());
            _0x18a768.html(_0x222340.u.Ai());
            _0x2c0b4f.val(_0x222340.u.ga());
          } else {
            _0x583f49.toggle(_0x499964.qk && !_0x222340.Ha());
            _0x3e8f4b.html(_0x3e8f4b.data("guest"));
            _0xa72f88.attr("src", _0x53270a);
            _0x1e75e5.html("10");
            _0x11d9e6.width("0");
            _0x209fdf.html("");
            _0x18a768.html(1);
            _0x2c0b4f.val(_0x163b12(_0x262ee4.Aa));
          }
        });
        _0x222340.t.xh(function () {
          _0x8415c4.uk.ak(_0x222340.t.ha(_0x3cdfca.ia), false, false);
          _0x8415c4.uk.bk(_0x222340.t.ha(_0x3cdfca.ja), false, false);
          _0x8415c4.uk.ck(_0x222340.t.ha(_0x3cdfca.ka), false, false);
          _0x8415c4.uk.dk(_0x222340.t.ha(_0x3cdfca.la), false, false);
          _0x8415c4.uk.ek(_0x222340.t.ha(_0x3cdfca.ma), false, false);
        });
      };
      _0x30eaf4.prototype.ii = function () {
        _0x284fe6.fk.stop();
        _0x284fe6.fk.fadeOut(50);
        _0x284fe6.gk.stop();
        _0x284fe6.gk.fadeOut(50);
        _0x284fe6.hk.stop();
        _0x284fe6.hk.fadeIn(500);
        _0x284fe6.ik.stop();
        _0x284fe6.ik.fadeOut(50);
        _0x284fe6.jk.stop();
        _0x284fe6.jk.fadeOut(50);
        _0x284fe6.kk.stop();
        _0x284fe6.kk.fadeOut(50);
        _0x284fe6.lk.stop();
        _0x284fe6.lk.fadeIn(1);
        _0x284fe6.di.stop();
        _0x284fe6.di.fadeIn(500);
        _0x21a029.Le(true);
        _0x284fe6.nk.stop();
        _0x284fe6.nk.fadeIn(500);
        _0x284fe6.ok.stop();
        _0x284fe6.ok.fadeIn(500);
      };
      _0x30eaf4.prototype.ji = function () {
        _0x3e47d7().r.Dd();
        this.uk.Le(true);
      };
      _0x30eaf4.prototype.ei = function () {
        this.uk.Le(false);
      };
      _0x30eaf4.prototype.Ra = function () {
        this.uk.Ra();
      };
      _0x30eaf4.prototype.Pa = function (_0x5ed7ea, _0x1be6e) {
        this.uk.Pa();
      };
      _0x30eaf4.prototype.ga = function () {
        return _0x2c0b4f.val();
      };
      _0x30eaf4.prototype.D = function () {
        return _0x307573.val();
      };
      _0x30eaf4.prototype.xk = function () {
        _0x51a874.show();
      };
      _0x30eaf4.prototype.vk = function () {
        var _0x1c45e0 = $("#mm-advice-cont").children();
        var _0xa1e2e6 = 0;
        setInterval(function () {
          _0x1c45e0.eq(_0xa1e2e6).fadeOut(500, function () {
            if (++_0xa1e2e6 >= _0x1c45e0.length) {
              _0xa1e2e6 = 0;
            }
            _0x1c45e0.eq(_0xa1e2e6).fadeIn(500).css("display", "inline-block");
          });
        }, 3000);
      };
      _0x30eaf4.prototype.wk = function () {
        function _0xf9ad97() {
          _0x1be355.Ka(true);
          setTimeout(function () {
            _0x583f49.hide();
          }, 3000);
        }
        var _0x1be355 = _0x3e47d7();
        if (_0x499964.qk && !_0x1be355.Ha()) {
          _0x583f49.show();
          var _0x1f46f5 = _0xeb525f("index.game.main.menu.unlockSkins.share");
          var _0x23c9f7 = encodeURIComponent(_0xeb525f("index.game.main.menu.unlockSkins.comeAndPlay") + " https://wormate.io/ #wormate #wormateio");
          var _0x4311c2 = encodeURIComponent(_0xeb525f("index.game.main.menu.unlockSkins.comeAndPlay"));
          _0xe71726.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-tw\" target=\"_blank\" href=\"http://twitter.com/intent/tweet?status=" + _0x23c9f7 + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik02MCAzMzhjMzAgMTkgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOTYtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMCAwLTE0IDctMzMgMTQgLTMgMS03IDItMTAgMyAtMTMtMTMtMzAtMjItNTAtMjIgLTM4IDAtNjkgMzEtNjkgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LTMwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==\"><span>" + _0x1f46f5 + "</span></a>").click(_0xf9ad97));
          _0xe71726.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-fb\" target=\"_blank\" href=\"https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=" + _0x4311c2 + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\"><span>" + _0x1f46f5 + "</span></a>").click(_0xf9ad97));
        }
      };
      return _0x30eaf4;
    }();
    var _0xf54e9b = function () {
      var _0x3d4140 = _0x4d333b(_0x284fe6, function () {
        _0x284fe6.call(this, 0);
      });
      _0x3d4140.prototype.a = function () {};
      _0x3d4140.prototype.ii = function () {
        _0x284fe6.fk.stop();
        _0x284fe6.fk.fadeOut(50);
        _0x284fe6.gk.stop();
        _0x284fe6.gk.fadeOut(50);
        _0x284fe6.hk.stop();
        _0x284fe6.hk.fadeOut(50);
        _0x284fe6.ik.stop();
        _0x284fe6.ik.fadeOut(50);
        _0x284fe6.jk.stop();
        _0x284fe6.jk.fadeOut(50);
        _0x284fe6.kk.stop();
        _0x284fe6.kk.fadeOut(50);
        _0x284fe6.lk.stop();
        _0x284fe6.lk.fadeOut(1);
        _0x284fe6.di.stop();
        _0x284fe6.di.fadeOut(50);
        _0x21a029.Le(false);
        _0x284fe6.nk.stop();
        _0x284fe6.nk.fadeOut(50);
        _0x284fe6.ok.stop();
        _0x284fe6.ok.fadeOut(50);
      };
      return _0x3d4140;
    }();
    var _0x1ea238 = function () {
      var _0x29a501 = $("#toaster-stack");
      var _0x243a59 = _0x4d333b(_0x284fe6, function () {
        _0x284fe6.call(this, 0);
        this.yk = [];
        this.zk = null;
      });
      _0x243a59.prototype.a = function () {};
      _0x243a59.prototype.ii = function () {
        _0x284fe6.fk.stop();
        _0x284fe6.fk.fadeOut(50);
        _0x284fe6.gk.stop();
        _0x284fe6.gk.fadeOut(50);
        _0x284fe6.hk.stop();
        _0x284fe6.hk.fadeOut(50);
        _0x284fe6.ik.stop();
        _0x284fe6.ik.fadeOut(50);
        _0x284fe6.jk.stop();
        _0x284fe6.jk.fadeIn(500);
        _0x284fe6.kk.stop();
        _0x284fe6.kk.fadeOut(50);
        _0x284fe6.lk.stop();
        _0x284fe6.lk.fadeIn(1);
        _0x284fe6.di.stop();
        _0x284fe6.di.fadeIn(500);
        _0x21a029.Le(true);
        _0x284fe6.nk.stop();
        _0x284fe6.nk.fadeOut(50);
        _0x284fe6.ok.stop();
        _0x284fe6.ok.fadeIn(500);
      };
      _0x243a59.prototype.ji = function () {
        this.Ak();
      };
      _0x243a59.prototype.mi = function () {
        return this.zk != null || this.yk.length > 0;
      };
      _0x243a59.prototype._ = function (_0x18f498) {
        this.yk.unshift(_0x18f498);
        setTimeout(function () {
          _0x3e47d7().s.ki();
        }, 0);
      };
      _0x243a59.prototype.Ti = function (_0x59db12) {
        this.yk.push(_0x59db12);
        setTimeout(function () {
          _0x3e47d7().s.ki();
        }, 0);
      };
      _0x243a59.prototype.Ak = function () {
        var _0x41e995 = this;
        if (this.zk == null) {
          if (this.yk.length == 0) {
            _0x3e47d7().s.gi();
            return;
          }
          var _0x3eff48 = this.yk.shift();
          this.zk = _0x3eff48;
          var _0x34a9b2 = _0x3eff48.Bk();
          _0x34a9b2.hide();
          _0x34a9b2.fadeIn(300);
          _0x29a501.append(_0x34a9b2);
          _0x3eff48.Ck = function () {
            _0x34a9b2.fadeOut(300);
            setTimeout(function () {
              _0x34a9b2.remove();
            }, 300);
            if (_0x41e995.zk == _0x3eff48) {
              _0x41e995.zk = null;
            }
            _0x41e995.Ak();
          };
          _0x3eff48.ji();
        }
      };
      return _0x243a59;
    }();
    var _0x33f1c5 = function () {
      var _0x1ddfd1 = $("#popup-menu-label");
      var _0x373522 = $("#popup-menu-coins-box");
      var _0x3c296f = $("#popup-menu-coins-val");
      $("#popup-menu-back").click(function () {
        var _0x138f48 = _0x3e47d7();
        _0x138f48.r.Cd();
        _0x138f48.s.gi();
      });
      _0x373522.click(function () {
        var _0x24fd7c = _0x3e47d7();
        if (_0x24fd7c.u.P()) {
          _0x24fd7c.r.Cd();
          _0x24fd7c.s.I(_0x24fd7c.s.Wh);
        }
      });
      var _0x4a4728 = _0x4d333b(_0x284fe6, function (_0x2f8674, _0x1dd667) {
        _0x284fe6.call(this, 1);
        this.ad = _0x2f8674;
        this.Dk = _0x1dd667;
      });
      _0x4a4728.prototype.a = function () {
        _0x4a4728.parent.prototype.a.call(this);
        if (!_0x4a4728.Ek) {
          _0x4a4728.Ek = true;
          var _0xb43333 = _0x3e47d7();
          _0xb43333.u.Pi(function () {
            if (_0xb43333.u.P()) {
              _0x3c296f.html(_0xb43333.u.zi());
            } else {
              _0x3c296f.html("0");
            }
          });
        }
      };
      _0x4a4728.Fk = $("#coins-view");
      _0x4a4728.Gk = $("#leaders-view");
      _0x4a4728.Hk = $("#profile-view");
      _0x4a4728.Ik = $("#settings-view");
      _0x4a4728.Jk = $("#login-view");
      _0x4a4728.Kk = $("#skins-view");
      _0x4a4728.Lk = $("#store-view");
      _0x4a4728.Mk = $("#wear-view");
      _0x4a4728.Nk = $("#withdraw-consent-view");
      _0x4a4728.Ok = $("#delete-account-view");
      _0x4a4728.Pk = $("#please-wait-view");
      _0x4a4728.prototype.ii = function () {
        _0x284fe6.fk.stop();
        _0x284fe6.fk.fadeOut(200);
        _0x284fe6.gk.stop();
        _0x284fe6.gk.fadeOut(200);
        _0x284fe6.hk.stop();
        _0x284fe6.hk.fadeOut(200);
        _0x284fe6.ik.stop();
        _0x284fe6.ik.fadeIn(200);
        _0x284fe6.jk.stop();
        _0x284fe6.jk.fadeOut(200);
        _0x284fe6.kk.stop();
        _0x284fe6.kk.fadeOut(200);
        _0x284fe6.nk.stop();
        _0x284fe6.nk.fadeIn(200);
        _0x284fe6.ok.stop();
        _0x284fe6.ok.fadeIn(200);
        _0x1ddfd1.html(this.ad);
        _0x373522.toggle(this.Dk);
        this.Qk();
        this.Rk();
      };
      _0x4a4728.prototype.Rk = function () {};
      _0x4a4728.prototype.Sk = function () {
        _0x33f1c5.Pk.stop();
        _0x33f1c5.Pk.fadeIn(300);
      };
      _0x4a4728.prototype.Qk = function () {
        _0x33f1c5.Pk.stop();
        _0x33f1c5.Pk.fadeOut(300);
      };
      return _0x4a4728;
    }();
    var _0x1c8e5e = function () {
      var _0x27f0cf = $("#store-buy-coins_125000");
      var _0x2384cb = $("#store-buy-coins_50000");
      var _0x39e6a8 = $("#store-buy-coins_16000");
      var _0x39c9d8 = $("#store-buy-coins_7000");
      var _0x55db3a = $("#store-buy-coins_3250");
      var _0x4d97d2 = $("#store-buy-coins_1250");
      var _0x460697 = _0x4d333b(_0x33f1c5, function () {
        _0x33f1c5.call(this, _0xeb525f("index.game.popup.menu.coins.tab"), false);
        var _0x22d299 = _0x3e47d7();
        var _0x56fecd = this;
        _0x27f0cf.click(function () {
          _0x22d299.r.Cd();
          _0x56fecd.Tk("coins_125000");
        });
        _0x2384cb.click(function () {
          _0x22d299.r.Cd();
          _0x56fecd.Tk("coins_50000");
        });
        _0x39e6a8.click(function () {
          _0x22d299.r.Cd();
          _0x56fecd.Tk("coins_16000");
        });
        _0x39c9d8.click(function () {
          _0x22d299.r.Cd();
          _0x56fecd.Tk("coins_7000");
        });
        _0x55db3a.click(function () {
          _0x22d299.r.Cd();
          _0x56fecd.Tk("coins_3250");
        });
        _0x4d97d2.click(function () {
          _0x22d299.r.Cd();
          _0x56fecd.Tk("coins_1250");
        });
      });
      _0x460697.prototype.a = function () {
        _0x460697.parent.prototype.a.call(this);
      };
      _0x460697.prototype.Rk = function () {
        _0x33f1c5.Fk.stop();
        _0x33f1c5.Fk.fadeIn(200);
        _0x33f1c5.Gk.stop();
        _0x33f1c5.Gk.fadeOut(50);
        _0x33f1c5.Hk.stop();
        _0x33f1c5.Hk.fadeOut(50);
        _0x33f1c5.Jk.stop();
        _0x33f1c5.Jk.fadeOut(50);
        _0x33f1c5.Ik.stop();
        _0x33f1c5.Ik.fadeOut(50);
        _0x33f1c5.Kk.stop();
        _0x33f1c5.Kk.fadeOut(50);
        _0x33f1c5.Lk.stop();
        _0x33f1c5.Lk.fadeOut(50);
        _0x33f1c5.Mk.stop();
        _0x33f1c5.Mk.fadeOut(50);
        _0x33f1c5.Nk.stop();
        _0x33f1c5.Nk.fadeOut(50);
        _0x33f1c5.Ok.stop();
        _0x33f1c5.Ok.fadeOut(50);
      };
      _0x460697.prototype.ji = function () {
        _0x3e47d7().r.Dd();
      };
      _0x460697.prototype.Tk = function (_0x298461) {};
      return _0x460697;
    }();
    var _0x210232 = function () {
      var _0x3efbc2 = $("#highscore-table");
      var _0x353a32 = $("#leaders-button-level");
      var _0x21c0b9 = $("#leaders-button-highscore");
      var _0x31a8d7 = $("#leaders-button-kills");
      var _0xf03dbe = _0x4d333b(_0x33f1c5, function () {
        _0x33f1c5.call(this, _0xeb525f("index.game.popup.menu.leaders.tab"), true);
        var _0x42630a = _0x3e47d7();
        var _0x3c66a1 = this;
        this.Uk = {};
        this.Vk = {
          Wk: {
            Xk: _0x353a32,
            Yk: "byLevel"
          },
          Zk: {
            Xk: _0x21c0b9,
            Yk: "byHighScore"
          },
          $k: {
            Xk: _0x31a8d7,
            Yk: "byKillsAndHeadShots"
          }
        };
        _0x353a32.click(function () {
          _0x42630a.r.Cd();
          _0x3c66a1._k(_0x3c66a1.Vk.Wk);
        });
        _0x21c0b9.click(function () {
          _0x42630a.r.Cd();
          _0x3c66a1._k(_0x3c66a1.Vk.Zk);
        });
        _0x31a8d7.click(function () {
          _0x42630a.r.Cd();
          _0x3c66a1._k(_0x3c66a1.Vk.$k);
        });
      });
      _0xf03dbe.prototype.a = function () {
        _0xf03dbe.parent.prototype.a.call(this);
      };
      _0xf03dbe.prototype.Rk = function () {
        _0x33f1c5.Fk.stop();
        _0x33f1c5.Fk.fadeOut(50);
        _0x33f1c5.Gk.stop();
        _0x33f1c5.Gk.fadeIn(200);
        _0x33f1c5.Hk.stop();
        _0x33f1c5.Hk.fadeOut(50);
        _0x33f1c5.Jk.stop();
        _0x33f1c5.Jk.fadeOut(50);
        _0x33f1c5.Ik.stop();
        _0x33f1c5.Ik.fadeOut(50);
        _0x33f1c5.Kk.stop();
        _0x33f1c5.Kk.fadeOut(50);
        _0x33f1c5.Lk.stop();
        _0x33f1c5.Lk.fadeOut(50);
        _0x33f1c5.Mk.stop();
        _0x33f1c5.Mk.fadeOut(50);
        _0x33f1c5.Nk.stop();
        _0x33f1c5.Nk.fadeOut(50);
        _0x33f1c5.Ok.stop();
        _0x33f1c5.Ok.fadeOut(50);
      };
      _0xf03dbe.prototype.ji = function () {
        _0x3e47d7().r.Dd();
        var _0x49ca57 = this;
        this.Sk();
        $.get(_0x3eaf52 + "/pub/leaders", function (_0x30605c) {
          _0x49ca57.Uk = _0x30605c;
          _0x49ca57._k(_0x49ca57.al ?? _0x49ca57.Vk.Wk);
          _0x49ca57.Qk();
        }).done(function () {
          _0x49ca57.Qk();
        });
      };
      _0xf03dbe.prototype._k = function (_0x27d652) {
        this.al = _0x27d652;
        for (var _0x5c0edf in this.Vk) {
          if (this.Vk.hasOwnProperty(_0x5c0edf)) {
            var _0x104dd9 = this.Vk[_0x5c0edf];
            _0x104dd9.Xk.removeClass("pressed");
          }
        }
        this.al.Xk.addClass("pressed");
        for (var _0x4bbfe2 = this.Uk[this.al.Yk], _0x53a0b2 = "", _0x45a92a = 0; _0x45a92a < _0x4bbfe2.length; _0x45a92a++) {
          var _0x425276 = _0x4bbfe2[_0x45a92a];
          _0x53a0b2 += "<div class=\"table-row\"><span>" + (_0x45a92a + 1) + "</span><span><img src=\"" + _0x425276.avatarUrl + "\"/></span><span>" + _0x425276.username + "</span><span>" + _0x425276.level + "</span><span>" + _0x425276.highScore + "</span><span>" + _0x425276.headShots + " / " + _0x425276.kills + "</span></div>";
        }
        _0x3efbc2.empty();
        _0x3efbc2.append(_0x53a0b2);
      };
      return _0xf03dbe;
    }();
    var _0x1d85a7 = function () {
      var _0xbde07f = $("#popup-login-gg");
      var _0x2c2c55 = $("#popup-login-fb");
      var _0x3943a5 = _0x4d333b(_0x33f1c5, function () {
        _0x33f1c5.call(this, _0xeb525f("index.game.popup.menu.login.tab"), false);
        var _0x38e3c0 = _0x3e47d7();
        var _0x1d5874 = this;
        _0xbde07f.click(function () {
          _0x38e3c0.r.Cd();
          _0x1d5874.Sk();
          _0x38e3c0.u.Qi(function () {
            _0x1d5874.Qk();
          });
          setTimeout(function () {
            _0x1d5874.Qk();
          }, 10000);
          _0x38e3c0.u.Zi();
        });
        _0x2c2c55.click(function () {
          _0x38e3c0.r.Cd();
          _0x1d5874.Sk();
          _0x38e3c0.u.Qi(function () {
            _0x1d5874.Qk();
          });
          setTimeout(function () {
            _0x1d5874.Qk();
          }, 10000);
          _0x38e3c0.u.Vi();
        });
      });
      _0x3943a5.prototype.a = function () {
        _0x3943a5.parent.prototype.a.call(this);
      };
      _0x3943a5.prototype.Rk = function () {
        _0x33f1c5.Fk.stop();
        _0x33f1c5.Fk.fadeOut(50);
        _0x33f1c5.Gk.stop();
        _0x33f1c5.Gk.fadeOut(50);
        _0x33f1c5.Hk.stop();
        _0x33f1c5.Hk.fadeOut(50);
        _0x33f1c5.Jk.stop();
        _0x33f1c5.Jk.fadeIn(200);
        _0x33f1c5.Ik.stop();
        _0x33f1c5.Ik.fadeOut(50);
        _0x33f1c5.Kk.stop();
        _0x33f1c5.Kk.fadeOut(50);
        _0x33f1c5.Lk.stop();
        _0x33f1c5.Lk.fadeOut(50);
        _0x33f1c5.Mk.stop();
        _0x33f1c5.Mk.fadeOut(50);
        _0x33f1c5.Nk.stop();
        _0x33f1c5.Nk.fadeOut(50);
        _0x33f1c5.Ok.stop();
        _0x33f1c5.Ok.fadeOut(50);
      };
      _0x3943a5.prototype.ji = function () {
        _0x3e47d7().r.Dd();
      };
      return _0x3943a5;
    }();
    var _0x442d89 = function () {
      var _0x3f160d = $("#profile-avatar");
      var _0x5956cf = $("#profile-username");
      var _0x35029e = $("#profile-experience-bar");
      var _0x3d89a9 = $("#profile-experience-val");
      var _0x443bfb = $("#profile-level");
      var _0x1117f4 = $("#profile-stat-highScore");
      var _0x3a4f1b = $("#profile-stat-bestSurvivalTime");
      var _0x3ae714 = $("#profile-stat-kills");
      var _0x2e1aa4 = $("#profile-stat-headshots");
      var _0x194153 = $("#profile-stat-gamesPlayed");
      var _0x1b9ab7 = $("#profile-stat-totalTimeSpent");
      var _0x435cf4 = $("#profile-stat-registrationDate");
      var _0x1702bd = _0x4d333b(_0x33f1c5, function () {
        _0x33f1c5.call(this, _0xeb525f("index.game.popup.menu.profile.tab"), true);
      });
      _0x1702bd.prototype.a = function () {
        _0x1702bd.parent.prototype.a.call(this);
      };
      _0x1702bd.prototype.Rk = function () {
        _0x33f1c5.Fk.stop();
        _0x33f1c5.Fk.fadeOut(50);
        _0x33f1c5.Gk.stop();
        _0x33f1c5.Gk.fadeOut(50);
        _0x33f1c5.Hk.stop();
        _0x33f1c5.Hk.fadeIn(200);
        _0x33f1c5.Jk.stop();
        _0x33f1c5.Jk.fadeOut(50);
        _0x33f1c5.Ik.stop();
        _0x33f1c5.Ik.fadeOut(50);
        _0x33f1c5.Kk.stop();
        _0x33f1c5.Kk.fadeOut(50);
        _0x33f1c5.Lk.stop();
        _0x33f1c5.Lk.fadeOut(50);
        _0x33f1c5.Mk.stop();
        _0x33f1c5.Mk.fadeOut(50);
        _0x33f1c5.Nk.stop();
        _0x33f1c5.Nk.fadeOut(50);
        _0x33f1c5.Ok.stop();
        _0x33f1c5.Ok.fadeOut(50);
      };
      _0x1702bd.prototype.ji = function () {
        var _0x55e54a = _0x3e47d7();
        _0x55e54a.r.Dd();
        var _0x1edfe8 = _0x55e54a.u.Oi();
        var _0x1d33d5 = moment([_0x1edfe8.year, _0x1edfe8.month - 1, _0x1edfe8.day]).format("LL");
        _0x5956cf.html(_0x55e54a.u.wi());
        _0x3f160d.attr("src", _0x55e54a.u.xi());
        _0x35029e.width(_0x55e54a.u.Bi() * 100 / _0x55e54a.u.Ci() + "%");
        _0x3d89a9.html(_0x55e54a.u.Bi() + " / " + _0x55e54a.u.Ci());
        _0x443bfb.html(_0x55e54a.u.Ai());
        _0x1117f4.html(_0x55e54a.u.Ii());
        _0x3a4f1b.html(_0x3c6e96(_0x55e54a.u.Ji()));
        _0x3ae714.html(_0x55e54a.u.Ki());
        _0x2e1aa4.html(_0x55e54a.u.Li());
        _0x194153.html(_0x55e54a.u.Mi());
        _0x1b9ab7.html(_0x3c6e96(_0x55e54a.u.Ni()));
        _0x435cf4.html(_0x1d33d5);
      };
      return _0x1702bd;
    }();
    var _0x4d9bd3 = function () {
      var _0x2eacd5 = $("#settings-music-enabled-switch");
      var _0xce4db3 = $("#settings-sfx-enabled-switch");
      var _0x50d977 = $("#settings-show-names-switch");
      var _0x328012 = $("#popup-logout");
      var _0x248375 = $("#popup-logout-container");
      var _0x14c75 = $("#popup-delete-account");
      var _0x487ad6 = $("#popup-delete-account-container");
      var _0x40317c = $("#popup-withdraw-consent");
      var _0x3331b2 = _0x4d333b(_0x33f1c5, function () {
        _0x33f1c5.call(this, _0xeb525f("index.game.popup.menu.settings.tab"), false);
        var _0x2c7dd4 = this;
        var _0xffd90d = _0x3e47d7();
        _0x2eacd5.click(function () {
          var _0x1c5dd9 = !!_0x2eacd5.prop("checked");
          _0x1cd4d0(_0x262ee4.Me, _0x1c5dd9, 30);
          _0xffd90d.r.td(_0x1c5dd9);
          _0xffd90d.r.Cd();
        });
        _0xce4db3.click(function () {
          var _0x26d185 = !!_0xce4db3.prop("checked");
          _0x1cd4d0(_0x262ee4.Ne, _0x26d185, 30);
          _0xffd90d.r.rd(_0x26d185);
          _0xffd90d.r.Cd();
        });
        _0x50d977.click(function () {
          _0xffd90d.r.Cd();
        });
        _0x328012.click(function () {
          _0xffd90d.r.Cd();
          _0x2c7dd4.Sk();
          setTimeout(function () {
            _0x2c7dd4.Qk();
          }, 2000);
          _0xffd90d.u.Wi();
        });
        _0x14c75.click(function () {
          if (_0xffd90d.u.P()) {
            _0xffd90d.r.Cd();
            _0xffd90d.s.I(_0xffd90d.s.Vh);
          } else {
            _0xffd90d.r.Hd();
          }
        });
        _0x40317c.click(function () {
          if (_0xffd90d.Y()) {
            _0xffd90d.r.Cd();
            _0xffd90d.s.I(_0xffd90d.s.Uh);
          } else {
            _0xffd90d.r.Hd();
          }
        });
      });
      _0x3331b2.prototype.a = function () {
        _0x3331b2.parent.prototype.a.call(this);
        var _0x123d9f = _0x3e47d7();
        var _0x15820e = undefined;
        switch (_0x163b12(_0x262ee4.Me)) {
          case "false":
            _0x15820e = false;
            break;
          default:
            _0x15820e = true;
        }
        _0x2eacd5.prop("checked", _0x15820e);
        _0x123d9f.r.td(_0x15820e);
        var _0x1a0636 = undefined;
        switch (_0x163b12(_0x262ee4.Ne)) {
          case "false":
            _0x1a0636 = false;
            break;
          default:
            _0x1a0636 = true;
        }
        _0xce4db3.prop("checked", _0x1a0636);
        _0x123d9f.r.rd(_0x1a0636);
        var _0xab3154 = undefined;
        switch (_0x163b12(_0x262ee4.ya)) {
          case "false":
            _0xab3154 = false;
            break;
          default:
            _0xab3154 = true;
        }
        console.log("Load sPN: " + _0xab3154);
        _0x50d977.prop("checked", _0xab3154);
        _0x123d9f.u.V(function () {
          _0x248375.toggle(_0x123d9f.u.P());
          _0x487ad6.toggle(_0x123d9f.u.P());
        });
      };
      _0x3331b2.prototype.Rk = function () {
        _0x33f1c5.Fk.stop();
        _0x33f1c5.Fk.fadeOut(50);
        _0x33f1c5.Gk.stop();
        _0x33f1c5.Gk.fadeOut(50);
        _0x33f1c5.Hk.stop();
        _0x33f1c5.Hk.fadeOut(50);
        _0x33f1c5.Jk.stop();
        _0x33f1c5.Jk.fadeOut(50);
        _0x33f1c5.Ik.stop();
        _0x33f1c5.Ik.fadeIn(200);
        _0x33f1c5.Kk.stop();
        _0x33f1c5.Kk.fadeOut(50);
        _0x33f1c5.Lk.stop();
        _0x33f1c5.Lk.fadeOut(50);
        _0x33f1c5.Mk.stop();
        _0x33f1c5.Mk.fadeOut(50);
        _0x33f1c5.Nk.stop();
        _0x33f1c5.Nk.fadeOut(50);
        _0x33f1c5.Ok.stop();
        _0x33f1c5.Ok.fadeOut(50);
      };
      _0x3331b2.prototype.ji = function () {
        var _0x578204 = _0x3e47d7();
        _0x578204.r.Dd();
        if (_0x578204.Y()) {
          _0x40317c.show();
        } else {
          _0x40317c.hide();
        }
      };
      _0x3331b2.prototype.wa = function () {
        return _0x50d977.prop("checked");
      };
      return _0x3331b2;
    }();
    var _0x4f9eac = function () {
      var _0x374538 = $("#store-view-canv");
      var _0x2b10c0 = $("#skin-description-text");
      var _0x35e080 = $("#skin-group-description-text");
      var _0x307af8 = $("#store-locked-bar");
      var _0x1dd0e9 = $("#store-locked-bar-text");
      var _0x938138 = $("#store-buy-button");
      var _0x16db71 = $("#store-item-price");
      var _0x2cdce6 = $("#store-groups");
      var _0x350865 = $("#store-view-prev");
      var _0x48eee6 = $("#store-view-next");
      var _0x486fe0 = _0x4d333b(_0x33f1c5, function () {
        _0x33f1c5.call(this, _0xeb525f("index.game.popup.menu.skins.tab"), true);
        var _0x15b300 = this;
        var _0x592d98 = _0x3e47d7();
        this.bl = null;
        this.cl = [];
        this.dl = {};
        this.el = new _0x5733eb(_0x374538);
        _0x938138.click(function () {
          _0x592d98.r.Cd();
          _0x15b300.fl();
        });
        _0x350865.click(function () {
          _0x592d98.r.Cd();
          _0x15b300.bl.gl();
        });
        _0x48eee6.click(function () {
          _0x592d98.r.Cd();
          _0x15b300.bl.hl();
        });
      });
      _0x486fe0.prototype.a = function () {
        _0x486fe0.parent.prototype.a.call(this);
        var _0xdd8869 = this;
        var _0x5f2c0f = _0x3e47d7();
        _0x5f2c0f.p.ca(function () {
          var _0x137006 = _0x5f2c0f.p.Ac();
          if (_0x137006 != null) {
            _0xdd8869.cl = [];
            for (var _0x2b1fa7 = 0; _0x2b1fa7 < _0x137006.skinGroupArrayDict.length; _0x2b1fa7++) {
              _0xdd8869.cl.push(new _0x32dbdf(_0xdd8869, _0x137006.skinGroupArrayDict[_0x2b1fa7]));
            }
            _0xdd8869.dl = {};
            for (var _0x34ffae = 0; _0x34ffae < _0x137006.skinArrayDict.length; _0x34ffae++) {
              var _0x3b4349 = _0x137006.skinArrayDict[_0x34ffae];
              _0xdd8869.dl[_0x3b4349.id] = _0x3b4349;
            }
          }
        });
        this.il(false);
        _0x5f2c0f.t.xh(function () {
          _0xdd8869.il(false);
        });
      };
      _0x486fe0.prototype.Rk = function () {
        _0x33f1c5.Fk.stop();
        _0x33f1c5.Fk.fadeOut(50);
        _0x33f1c5.Gk.stop();
        _0x33f1c5.Gk.fadeOut(50);
        _0x33f1c5.Hk.stop();
        _0x33f1c5.Hk.fadeOut(50);
        _0x33f1c5.Jk.stop();
        _0x33f1c5.Jk.fadeOut(50);
        _0x33f1c5.Ik.stop();
        _0x33f1c5.Ik.fadeOut(50);
        _0x33f1c5.Kk.stop();
        _0x33f1c5.Kk.fadeIn(200);
        _0x33f1c5.Lk.stop();
        _0x33f1c5.Lk.fadeOut(50);
        _0x33f1c5.Mk.stop();
        _0x33f1c5.Mk.fadeOut(50);
        _0x33f1c5.Nk.stop();
        _0x33f1c5.Nk.fadeOut(50);
        _0x33f1c5.Ok.stop();
        _0x33f1c5.Ok.fadeOut(50);
      };
      _0x486fe0.prototype.ji = function () {
        _0x3e47d7().r.Dd();
        this.jl();
        this.el.Le(true);
      };
      _0x486fe0.prototype.ei = function () {
        this.el.Le(false);
      };
      _0x486fe0.prototype.Ra = function () {
        this.el.Ra();
      };
      _0x486fe0.prototype.Pa = function (_0x50d279, _0xb3ff33) {
        this.el.Pa();
      };
      _0x486fe0.prototype.jl = function () {
        var _0x204d70 = this;
        var _0x4f3dd3 = this;
        var _0x42ad5c = _0x3e47d7();
        _0x2cdce6.empty();
        for (var _0x588c0c = 0; _0x588c0c < this.cl.length; _0x588c0c++) {
          (function (_0x1540d8) {
            var _0x2b764c = _0x204d70.cl[_0x1540d8];
            var _0x360ce = document.createElement("li");
            _0x2cdce6.append(_0x360ce);
            var _0x2c2db9 = $(_0x360ce);
            _0x2c2db9.html(_0x2b764c.kl());
            _0x2c2db9.click(function () {
              _0x42ad5c.r.Cd();
              _0x4f3dd3.ll(_0x2b764c);
            });
            _0x2b764c.ml = _0x2c2db9;
          })(_0x588c0c);
        }
        if (this.cl.length > 0) {
          var _0x354a93 = _0x42ad5c.t.ha(_0x3cdfca.ia);
          for (var _0x588c0c = 0; _0x588c0c < this.cl.length; _0x588c0c++) {
            var _0x3eb3b9 = this.cl[_0x588c0c];
            for (var _0x41fd62 = _0x3eb3b9.nl.list, _0x32dcb6 = 0; _0x32dcb6 < _0x41fd62.length; _0x32dcb6++) {
              if (_0x41fd62[_0x32dcb6] == _0x354a93) {
                _0x3eb3b9.ol = _0x32dcb6;
                this.ll(_0x3eb3b9);
                return;
              }
            }
          }
          this.ll(this.cl[0]);
        }
      };
      _0x486fe0.prototype.ll = function (_0x4f860d) {
        if (this.bl != _0x4f860d) {
          var _0x531ca1 = _0x3e47d7();
          this.bl = _0x4f860d;
          _0x2cdce6.children().removeClass("pressed");
          if (this.bl.ml) {
            this.bl.ml.addClass("pressed");
          }
          _0x35e080.html("");
          if (_0x4f860d.nl != null) {
            var _0x456f02 = _0x531ca1.p.Ac().textDict[_0x4f860d.nl.description];
            if (_0x456f02 != null) {
              _0x35e080.html(_0x3c8808(_0x57730c(_0x456f02)));
            }
          }
          this.il(true);
        }
      };
      _0x486fe0.prototype.pl = function () {
        if (this.bl == null) {
          return _0x4d0f32.Yg();
        } else {
          return this.bl.ql();
        }
      };
      _0x486fe0.prototype.fl = function () {
        var _0x594986 = this;
        this.pl().ah(function (_0x316704) {
          _0x594986.rl(_0x316704);
        });
      };
      _0x486fe0.prototype.rl = function (_0x5eb448) {
        var _0x130a55 = this;
        var _0x224fb4 = _0x3e47d7();
        var _0x27f523 = this.dl[_0x5eb448].price;
        if (!(_0x224fb4.u.zi() < _0x27f523)) {
          this.Sk();
          var _0x5ece0b = _0x224fb4.t.ha(_0x3cdfca.ia);
          var _0x3c1dae = _0x224fb4.t.ha(_0x3cdfca.ja);
          var _0x251c7d = _0x224fb4.t.ha(_0x3cdfca.ka);
          var _0xde71dc = _0x224fb4.t.ha(_0x3cdfca.la);
          var _0x59483f = _0x224fb4.t.ha(_0x3cdfca.ma);
          _0x224fb4.u.Ui(_0x5eb448, _0x3cdfca.ia, function () {
            _0x224fb4.t.Bh(_0x5ece0b, _0x3cdfca.ia);
            _0x224fb4.t.Bh(_0x3c1dae, _0x3cdfca.ja);
            _0x224fb4.t.Bh(_0x251c7d, _0x3cdfca.ka);
            _0x224fb4.t.Bh(_0xde71dc, _0x3cdfca.la);
            _0x224fb4.t.Bh(_0x59483f, _0x3cdfca.ma);
            if (_0x224fb4.u.Ch(_0x5eb448, _0x3cdfca.ia)) {
              _0x224fb4.t.Bh(_0x5eb448, _0x3cdfca.ia);
            }
            _0x130a55.Qk();
          });
        }
      };
      _0x486fe0.prototype.il = function (_0x59c0a3) {
        var _0x403137 = _0x3e47d7();
        this.el.bk(_0x403137.t.ha(_0x3cdfca.ja), false, false);
        this.el.ck(_0x403137.t.ha(_0x3cdfca.ka), false, false);
        this.el.dk(_0x403137.t.ha(_0x3cdfca.la), false, false);
        this.el.ek(_0x403137.t.ha(_0x3cdfca.ma), false, false);
        var _0x26cbea = this.pl();
        if (_0x26cbea._g()) {
          var _0x37faff = _0x26cbea.$g();
          var _0x21c1f0 = this.dl[_0x37faff];
          var _0x5f15c7 = false;
          if (_0x403137.t.Ja(_0x37faff, _0x3cdfca.ia)) {
            _0x307af8.hide();
            _0x938138.hide();
          } else if (_0x21c1f0 == null || _0x21c1f0.nonbuyable == 1) {
            _0x5f15c7 = true;
            _0x307af8.show();
            _0x938138.hide();
            _0x1dd0e9.text(_0xeb525f("index.game.popup.menu.store.locked"));
            if (_0x21c1f0 != null && _0x21c1f0.nonbuyable && _0x21c1f0.nonbuyableCause != null) {
              var _0x171c03 = _0x403137.p.Ac().textDict[_0x21c1f0.nonbuyableCause];
              if (_0x171c03 != null) {
                _0x1dd0e9.text(_0x57730c(_0x171c03));
              }
            }
          } else {
            _0x307af8.hide();
            _0x938138.show();
            _0x16db71.html(_0x21c1f0.price);
          }
          _0x2b10c0.html("");
          if (_0x21c1f0 != null && _0x21c1f0.description != null) {
            var _0x3dd7d7 = _0x403137.p.Ac().textDict[_0x21c1f0.description];
            if (_0x3dd7d7 != null) {
              _0x2b10c0.html(_0x3c8808(_0x57730c(_0x3dd7d7)));
            }
          }
          StoreSkinID.html(_0x21c1f0.id);
          this.el.ak(_0x37faff, true, _0x5f15c7);
          if (_0x59c0a3) {
            _0x403137.t.Bh(_0x37faff, _0x3cdfca.ia);
          }
        }
      };
      var _0x32dbdf = function () {
        function _0xed8158(_0x4b464b, _0x188277) {
          this.sl = _0x4b464b;
          this.ol = 0;
          this.nl = _0x188277;
        }
        _0xed8158.prototype.gl = function () {
          if (--this.ol < 0) {
            this.ol = this.nl.list.length - 1;
          }
          this.sl.il(true);
        };
        _0xed8158.prototype.hl = function () {
          if (++this.ol >= this.nl.list.length) {
            this.ol = 0;
          }
          this.sl.il(true);
        };
        _0xed8158.prototype.kl = function () {
          let _0xc5cb57 = _0x57730c(this.nl.name);
          if (this.nl.img) {
            var _0x3576ef = this.nl.img;
            if (_0x3576ef.indexOf("http://") !== 0 && _0x3576ef.indexOf("https://") !== 0) {
              _0x3576ef = SITE_XTHOST + "/images/paths/" + _0x3576ef;
            }
            _0xc5cb57 = "<img src=\"" + _0x3576ef + "\" height=\"43\" width=\"220\" />";
          }
          return _0xc5cb57;
        };
        _0xed8158.prototype.ql = function () {
          if (this.ol >= this.nl.list.length) {
            return _0x4d0f32.Yg();
          } else {
            return _0x4d0f32.Zg(this.nl.list[this.ol]);
          }
        };
        return _0xed8158;
      }();
      return _0x486fe0;
    }();
    var _0x43dd36 = function () {
      var _0x46d954 = $("#store-go-coins-button");
      var _0x1a6bfe = $("#store-go-skins-button");
      var _0x5c1775 = $("#store-go-wear-button");
      var _0x433abc = _0x4d333b(_0x33f1c5, function () {
        _0x33f1c5.call(this, _0xeb525f("index.game.popup.menu.store.tab"), true);
        var _0x5dbea8 = _0x3e47d7();
        _0x46d954.click(function () {
          _0x5dbea8.r.Cd();
          _0x5dbea8.s.I(_0x5dbea8.s.Wh);
        });
        _0x1a6bfe.click(function () {
          _0x5dbea8.r.Cd();
          _0x5dbea8.s.I(_0x5dbea8.s.$h);
        });
        _0x5c1775.click(function () {
          _0x5dbea8.r.Cd();
          _0x5dbea8.s.I(_0x5dbea8.s.ai);
        });
      });
      _0x433abc.prototype.a = function () {
        _0x433abc.parent.prototype.a.call(this);
      };
      _0x433abc.prototype.Rk = function () {
        _0x33f1c5.Fk.stop();
        _0x33f1c5.Fk.fadeOut(50);
        _0x33f1c5.Gk.stop();
        _0x33f1c5.Gk.fadeOut(50);
        _0x33f1c5.Hk.stop();
        _0x33f1c5.Hk.fadeOut(50);
        _0x33f1c5.Jk.stop();
        _0x33f1c5.Jk.fadeOut(50);
        _0x33f1c5.Ik.stop();
        _0x33f1c5.Ik.fadeOut(50);
        _0x33f1c5.Kk.stop();
        _0x33f1c5.Kk.fadeOut(50);
        _0x33f1c5.Lk.stop();
        _0x33f1c5.Lk.fadeIn(200);
        _0x33f1c5.Mk.stop();
        _0x33f1c5.Mk.fadeOut(50);
        _0x33f1c5.Nk.stop();
        _0x33f1c5.Nk.fadeOut(50);
        _0x33f1c5.Ok.stop();
        _0x33f1c5.Ok.fadeOut(50);
      };
      _0x433abc.prototype.ji = function () {
        _0x3e47d7().r.Dd();
      };
      return _0x433abc;
    }();
    var _0x2d6d74 = function () {
      var _0x2e6f7c = $("#wear-view-canv");
      var _0x24c279 = $("#wear-description-text");
      var _0x7cb95 = $("#wear-locked-bar");
      var _0x218845 = $("#wear-locked-bar-text");
      var _0x2a98e8 = $("#wear-buy-button");
      var _0x361fb6 = $("#wear-item-price");
      var _0x3916ed = $("#wear-eyes-button");
      var _0x4693f1 = $("#wear-mouths-button");
      var _0x374295 = $("#wear-glasses-button");
      var _0x19202e = $("#wear-hats-button");
      var _0x58f2f9 = $("#wear-tint-chooser");
      var _0x344ebf = $("#wear-view-prev");
      var _0x5ba1dc = $("#wear-view-next");
      var _0x2b5d75 = _0x4d333b(_0x33f1c5, function () {
        var _0x49309e = this;
        _0x33f1c5.call(this, _0xeb525f("index.game.popup.menu.wear.tab"), true);
        var _0x1937bf = _0x3e47d7();
        var _0x39ffd3 = this;
        this.tl = [];
        this.ja = new _0x272d57(this, _0x3cdfca.ja, _0x3916ed);
        this.ka = new _0x272d57(this, _0x3cdfca.ka, _0x4693f1);
        this.la = new _0x272d57(this, _0x3cdfca.la, _0x374295);
        this.ma = new _0x272d57(this, _0x3cdfca.ma, _0x19202e);
        this.ul = null;
        this.vl = null;
        this.wl = null;
        this.xl = null;
        this.yl = null;
        this.zl = null;
        this.Al = new _0x5733eb(_0x2e6f7c);
        _0x2a98e8.click(function () {
          _0x1937bf.r.Cd();
          _0x39ffd3.Bl();
        });
        _0x344ebf.click(function () {
          _0x1937bf.r.Cd();
          _0x39ffd3.ul.Cl();
        });
        _0x5ba1dc.click(function () {
          _0x1937bf.r.Cd();
          _0x39ffd3.ul.Dl();
        });
        _0x3916ed.click(function () {
          _0x1937bf.r.Cd();
          _0x39ffd3.El(_0x49309e.ja);
        });
        _0x4693f1.click(function () {
          _0x1937bf.r.Cd();
          _0x39ffd3.El(_0x49309e.ka);
        });
        _0x374295.click(function () {
          _0x1937bf.r.Cd();
          _0x39ffd3.El(_0x49309e.la);
        });
        _0x19202e.click(function () {
          _0x1937bf.r.Cd();
          _0x39ffd3.El(_0x49309e.ma);
        });
        this.tl.push(this.ja);
        this.tl.push(this.ka);
        this.tl.push(this.la);
        this.tl.push(this.ma);
      });
      _0x2b5d75.prototype.a = function () {
        _0x2b5d75.parent.prototype.a.call(this);
        var _0x17efed = _0x3e47d7();
        var _0xf18309 = this;
        _0x17efed.p.ca(function () {
          var _0x527c2b = _0x17efed.p.Ac();
          if (_0x527c2b != null) {
            _0xf18309.vl = _0x527c2b.eyesDict;
            _0xf18309.wl = _0x527c2b.mouthDict;
            _0xf18309.xl = _0x527c2b.glassesDict;
            _0xf18309.yl = _0x527c2b.hatDict;
            _0xf18309.zl = _0x527c2b.colorDict;
            _0xf18309.ja.Fl(_0x527c2b.eyesVariantArray);
            _0xf18309.ja.Gl(_0xf18309.vl);
            _0xf18309.ka.Fl(_0x527c2b.mouthVariantArray);
            _0xf18309.ka.Gl(_0xf18309.wl);
            _0xf18309.la.Fl(_0x527c2b.glassesVariantArray);
            _0xf18309.la.Gl(_0xf18309.xl);
            _0xf18309.ma.Fl(_0x527c2b.hatVariantArray);
            _0xf18309.ma.Gl(_0xf18309.yl);
          }
        });
        this.il(false);
        _0x17efed.t.xh(function () {
          _0xf18309.il(false);
        });
      };
      _0x2b5d75.prototype.Rk = function () {
        _0x33f1c5.Fk.stop();
        _0x33f1c5.Fk.fadeOut(50);
        _0x33f1c5.Gk.stop();
        _0x33f1c5.Gk.fadeOut(50);
        _0x33f1c5.Hk.stop();
        _0x33f1c5.Hk.fadeOut(50);
        _0x33f1c5.Jk.stop();
        _0x33f1c5.Jk.fadeOut(50);
        _0x33f1c5.Ik.stop();
        _0x33f1c5.Ik.fadeOut(50);
        _0x33f1c5.Kk.stop();
        _0x33f1c5.Kk.fadeOut(50);
        _0x33f1c5.Lk.stop();
        _0x33f1c5.Lk.fadeOut(50);
        _0x33f1c5.Mk.stop();
        _0x33f1c5.Mk.fadeIn(200);
        _0x33f1c5.Nk.stop();
        _0x33f1c5.Nk.fadeOut(50);
        _0x33f1c5.Ok.stop();
        _0x33f1c5.Ok.fadeOut(50);
      };
      _0x2b5d75.prototype.ji = function () {
        _0x3e47d7().r.Dd();
        this.El(this.ul ?? this.ja);
        this.Al.Le(true);
      };
      _0x2b5d75.prototype.ei = function () {
        this.Al.Le(false);
      };
      _0x2b5d75.prototype.Ra = function () {
        this.Al.Ra();
      };
      _0x2b5d75.prototype.Pa = function (_0x53b04b, _0x579de6) {
        this.Al.Pa();
      };
      _0x2b5d75.prototype.El = function (_0x4ccd96) {
        this.ul = _0x4ccd96;
        for (var _0x3c4175 = 0; _0x3c4175 < this.tl.length; _0x3c4175++) {
          this.tl[_0x3c4175].Xk.removeClass("pressed");
        }
        this.ul.Xk.addClass("pressed");
        this.ul.ii();
      };
      _0x2b5d75.prototype.Hl = function () {
        if (this.ul == null) {
          return _0x4d0f32.Yg();
        } else {
          return _0x4d0f32.Zg({
            Lb: this.ul.ql(),
            rc: this.ul.rc
          });
        }
      };
      _0x2b5d75.prototype.Bl = function () {
        var _0x59247e = this;
        this.Hl().ah(function (_0x40b9db) {
          _0x59247e.Ui(_0x40b9db.Lb, _0x40b9db.rc);
        });
      };
      _0x2b5d75.prototype.Ui = function (_0x1576a6, _0x1461bd) {
        var _0x5a68bb = this;
        var _0x4e2698 = _0x3e47d7();
        var _0x57b2c5 = undefined;
        switch (_0x1461bd) {
          case _0x3cdfca.ja:
            _0x57b2c5 = this.vl[_0x1576a6].price;
            break;
          case _0x3cdfca.ka:
            _0x57b2c5 = this.wl[_0x1576a6].price;
            break;
          case _0x3cdfca.la:
            _0x57b2c5 = this.xl[_0x1576a6].price;
            break;
          case _0x3cdfca.ma:
            _0x57b2c5 = this.yl[_0x1576a6].price;
            break;
          default:
            return;
        }
        if (!(_0x4e2698.u.zi() < _0x57b2c5)) {
          this.Sk();
          var _0xf3ee00 = _0x4e2698.t.ha(_0x3cdfca.ia);
          var _0xf1727f = _0x4e2698.t.ha(_0x3cdfca.ja);
          var _0x2e394f = _0x4e2698.t.ha(_0x3cdfca.ka);
          var _0x11369e = _0x4e2698.t.ha(_0x3cdfca.la);
          var _0x6e37b9 = _0x4e2698.t.ha(_0x3cdfca.ma);
          _0x4e2698.u.Ui(_0x1576a6, _0x1461bd, function () {
            _0x4e2698.t.Bh(_0xf3ee00, _0x3cdfca.ia);
            _0x4e2698.t.Bh(_0xf1727f, _0x3cdfca.ja);
            _0x4e2698.t.Bh(_0x2e394f, _0x3cdfca.ka);
            _0x4e2698.t.Bh(_0x11369e, _0x3cdfca.la);
            _0x4e2698.t.Bh(_0x6e37b9, _0x3cdfca.ma);
            if (_0x4e2698.u.Ch(_0x1576a6, _0x1461bd)) {
              _0x4e2698.t.Bh(_0x1576a6, _0x1461bd);
            }
            _0x5a68bb.Qk();
          });
        }
      };
      _0x2b5d75.prototype.Il = function (_0x4d5435, _0x100fd4) {
        switch (_0x100fd4) {
          case _0x3cdfca.ja:
            return this.vl[_0x4d5435];
          case _0x3cdfca.ka:
            return this.wl[_0x4d5435];
          case _0x3cdfca.la:
            return this.xl[_0x4d5435];
          case _0x3cdfca.ma:
            return this.yl[_0x4d5435];
        }
        return null;
      };
      _0x2b5d75.prototype.il = function (_0x2cc557) {
        var _0x5863f4 = _0x3e47d7();
        this.Al.ak(_0x5863f4.t.ha(_0x3cdfca.ia), false, false);
        this.Al.bk(_0x5863f4.t.ha(_0x3cdfca.ja), false, false);
        this.Al.ck(_0x5863f4.t.ha(_0x3cdfca.ka), false, false);
        this.Al.dk(_0x5863f4.t.ha(_0x3cdfca.la), false, false);
        this.Al.ek(_0x5863f4.t.ha(_0x3cdfca.ma), false, false);
        var _0x58e6ba = this.Hl();
        if (_0x58e6ba._g()) {
          var _0x2352c3 = _0x58e6ba.$g();
          var _0x84d8cc = this.Il(_0x2352c3.Lb, _0x2352c3.rc);
          var _0x47b703 = false;
          if (_0x5863f4.t.Ja(_0x2352c3.Lb, _0x2352c3.rc)) {
            _0x7cb95.hide();
            _0x2a98e8.hide();
          } else if (_0x84d8cc == null || _0x84d8cc.nonbuyable == 1) {
            _0x47b703 = true;
            _0x7cb95.show();
            _0x2a98e8.hide();
            _0x218845.text(_0xeb525f("index.game.popup.menu.store.locked"));
            if (_0x84d8cc != null && _0x84d8cc.nonbuyable && _0x84d8cc.nonbuyableCause != null) {
              var _0x16f8ea = _0x5863f4.p.Ac().textDict[_0x84d8cc.nonbuyableCause];
              if (_0x16f8ea != null) {
                _0x218845.text(_0x57730c(_0x16f8ea));
              }
            }
          } else {
            _0x7cb95.hide();
            _0x2a98e8.show();
            _0x361fb6.html(_0x84d8cc.price);
          }
          _0x24c279.html("");
          if (_0x84d8cc != null && _0x84d8cc.description != null) {
            var _0x118f1c = _0x5863f4.p.Ac().textDict[_0x84d8cc.description];
            if (_0x118f1c != null) {
              _0x24c279.html(_0x3c8808(_0x57730c(_0x118f1c)));
            }
          }
          switch (_0x2352c3.rc) {
            case _0x3cdfca.ja:
              this.Al.bk(_0x2352c3.Lb, true, _0x47b703);
              break;
            case _0x3cdfca.ka:
              this.Al.ck(_0x2352c3.Lb, true, _0x47b703);
              break;
            case _0x3cdfca.la:
              this.Al.dk(_0x2352c3.Lb, true, _0x47b703);
              break;
            case _0x3cdfca.ma:
              this.Al.ek(_0x2352c3.Lb, true, _0x47b703);
          }
          if (_0x2cc557) {
            _0x5863f4.t.Bh(_0x2352c3.Lb, _0x2352c3.rc);
          }
        }
      };
      var _0x272d57 = function () {
        function _0x6c3e1b(_0x3c6603, _0xda1a62, _0x2385a4) {
          this.sl = _0x3c6603;
          this.rc = _0xda1a62;
          this.Xk = _0x2385a4;
          this.Jl = {};
          this.Kl = [[]];
          this.Ll = -10;
          this.Ml = -10;
        }
        _0x6c3e1b.prototype.Fl = function (_0x2b274e) {
          this.Kl = _0x2b274e;
        };
        _0x6c3e1b.prototype.Gl = function (_0x5e4d20) {
          this.Jl = _0x5e4d20;
        };
        _0x6c3e1b.prototype.ii = function () {
          var _0x280471 = _0x3e47d7();
          var _0x540dac = _0x280471.t.ha(this.rc);
          for (var _0xa2295f = 0; _0xa2295f < this.Kl.length; _0xa2295f++) {
            for (var _0x1db8a9 = 0; _0x1db8a9 < this.Kl[_0xa2295f].length; _0x1db8a9++) {
              if (this.Kl[_0xa2295f][_0x1db8a9] == _0x540dac) {
                this.Nl(_0xa2295f);
                this.Ol(_0x1db8a9);
                return;
              }
            }
          }
          this.Nl(0);
          this.Ol(0);
        };
        _0x6c3e1b.prototype.Cl = function () {
          var _0x4295c4 = this.Ll - 1;
          if (_0x4295c4 < 0) {
            _0x4295c4 = this.Kl.length - 1;
          }
          this.Nl(_0x4295c4);
          this.Ol(this.Ml % this.Kl[_0x4295c4].length);
        };
        _0x6c3e1b.prototype.Dl = function () {
          var _0x3863c = this.Ll + 1;
          if (_0x3863c >= this.Kl.length) {
            _0x3863c = 0;
          }
          this.Nl(_0x3863c);
          this.Ol(this.Ml % this.Kl[_0x3863c].length);
        };
        _0x6c3e1b.prototype.Nl = function (_0x47ff78) {
          var _0x48ad04 = this;
          if (!(_0x47ff78 < 0) && !(_0x47ff78 >= this.Kl.length)) {
            this.Ll = _0x47ff78;
            _0x58f2f9.empty();
            var _0x4ca383 = this.Kl[this.Ll];
            if (_0x4ca383.length > 1) {
              for (var _0x18c2bb = 0; _0x18c2bb < _0x4ca383.length; _0x18c2bb++) {
                (function (_0x5be86b) {
                  var _0x495e2d = _0x4ca383[_0x5be86b];
                  var _0x53c6b7 = _0x48ad04.Jl[_0x495e2d];
                  var _0xdade83 = "#" + _0x48ad04.sl.zl[_0x53c6b7.prime];
                  var _0x264ad9 = $("<div style=\"border-color:" + _0xdade83 + "\"></div>");
                  _0x264ad9.click(function () {
                    _0x3e47d7().r.Cd();
                    _0x48ad04.Ol(_0x5be86b);
                  });
                  _0x58f2f9.append(_0x264ad9);
                })(_0x18c2bb);
              }
            }
          }
        };
        _0x6c3e1b.prototype.Ol = function (_0x4cc70f) {
          if (!(_0x4cc70f < 0) && !(_0x4cc70f >= this.Kl[this.Ll].length)) {
            this.Ml = _0x4cc70f;
            _0x58f2f9.children().css("background-color", "transparent");
            var _0x43e523 = _0x58f2f9.children(":nth-child(" + (1 + _0x4cc70f) + ")");
            _0x43e523.css("background-color", _0x43e523.css("border-color"));
            this.sl.il(true);
          }
        };
        _0x6c3e1b.prototype.ql = function () {
          return this.Kl[this.Ll][this.Ml];
        };
        return _0x6c3e1b;
      }();
      return _0x2b5d75;
    }();
    var _0xc1ff88 = function () {
      var _0x5f1606 = $("#withdraw-consent-yes");
      var _0x560b34 = $("#withdraw-consent-no");
      var _0x3ca41b = _0x4d333b(_0x33f1c5, function () {
        _0x33f1c5.call(this, _0xeb525f("index.game.popup.menu.consent.tab"), false);
        var _0x41825b = _0x3e47d7();
        _0x5f1606.click(function () {
          _0x41825b.r.Cd();
          if (_0x41825b.Y()) {
            _0x41825b.s.I(_0x41825b.s.F);
            _0x41825b.$(false, true);
            _0x41825b.s.aa._(new _0x5b7740());
          } else {
            _0x41825b.s.gi();
          }
        });
        _0x560b34.click(function () {
          _0x41825b.r.Cd();
          _0x41825b.s.gi();
        });
      });
      _0x3ca41b.prototype.a = function () {
        _0x3ca41b.parent.prototype.a.call(this);
      };
      _0x3ca41b.prototype.Rk = function () {
        _0x33f1c5.Fk.stop();
        _0x33f1c5.Fk.fadeOut(50);
        _0x33f1c5.Gk.stop();
        _0x33f1c5.Gk.fadeOut(50);
        _0x33f1c5.Hk.stop();
        _0x33f1c5.Hk.fadeOut(50);
        _0x33f1c5.Jk.stop();
        _0x33f1c5.Jk.fadeOut(50);
        _0x33f1c5.Ik.stop();
        _0x33f1c5.Ik.fadeOut(50);
        _0x33f1c5.Kk.stop();
        _0x33f1c5.Kk.fadeOut(50);
        _0x33f1c5.Lk.stop();
        _0x33f1c5.Lk.fadeOut(50);
        _0x33f1c5.Mk.stop();
        _0x33f1c5.Mk.fadeOut(50);
        _0x33f1c5.Nk.stop();
        _0x33f1c5.Nk.fadeIn(200);
        _0x33f1c5.Ok.stop();
        _0x33f1c5.Ok.fadeOut(50);
      };
      _0x3ca41b.prototype.ji = function () {
        _0x3e47d7().r.Dd();
      };
      return _0x3ca41b;
    }();
    var _0x4f9190 = function () {
      var _0x3cbf85 = $("#delete-account-timer");
      var _0x4ccba0 = $("#delete-account-yes");
      var _0x414077 = $("#delete-account-no");
      var _0x215240 = _0x4d333b(_0x33f1c5, function () {
        _0x33f1c5.call(this, _0xeb525f("index.game.popup.menu.delete.tab"), false);
        var _0x39685b = _0x3e47d7();
        _0x4ccba0.click(function () {
          _0x39685b.r.Cd();
          if (_0x39685b.u.P()) {
            _0x39685b.u.bj();
            _0x39685b.u.Wi();
          } else {
            _0x39685b.s.gi();
          }
        });
        _0x414077.click(function () {
          _0x39685b.r.Cd();
          _0x39685b.s.gi();
        });
        this.Pl = [];
      });
      _0x215240.prototype.a = function () {
        _0x215240.parent.prototype.a.call(this);
      };
      _0x215240.prototype.Rk = function () {
        _0x33f1c5.Fk.stop();
        _0x33f1c5.Fk.fadeOut(50);
        _0x33f1c5.Gk.stop();
        _0x33f1c5.Gk.fadeOut(50);
        _0x33f1c5.Hk.stop();
        _0x33f1c5.Hk.fadeOut(50);
        _0x33f1c5.Jk.stop();
        _0x33f1c5.Jk.fadeOut(50);
        _0x33f1c5.Ik.stop();
        _0x33f1c5.Ik.fadeOut(50);
        _0x33f1c5.Kk.stop();
        _0x33f1c5.Kk.fadeOut(50);
        _0x33f1c5.Lk.stop();
        _0x33f1c5.Lk.fadeOut(50);
        _0x33f1c5.Mk.stop();
        _0x33f1c5.Mk.fadeOut(50);
        _0x33f1c5.Nk.stop();
        _0x33f1c5.Nk.fadeOut(50);
        _0x33f1c5.Ok.stop();
        _0x33f1c5.Ok.fadeIn(200);
      };
      _0x215240.prototype.ji = function () {
        _0x3e47d7().r.Hd();
        _0x4ccba0.stop();
        _0x4ccba0.hide();
        _0x3cbf85.stop();
        _0x3cbf85.show();
        _0x3cbf85.text(".. 10 ..");
        this.Ql();
        this.Rl(function () {
          _0x3cbf85.text(".. 9 ..");
        }, 1000);
        this.Rl(function () {
          _0x3cbf85.text(".. 8 ..");
        }, 2000);
        this.Rl(function () {
          _0x3cbf85.text(".. 7 ..");
        }, 3000);
        this.Rl(function () {
          _0x3cbf85.text(".. 6 ..");
        }, 4000);
        this.Rl(function () {
          _0x3cbf85.text(".. 5 ..");
        }, 5000);
        this.Rl(function () {
          _0x3cbf85.text(".. 4 ..");
        }, 6000);
        this.Rl(function () {
          _0x3cbf85.text(".. 3 ..");
        }, 7000);
        this.Rl(function () {
          _0x3cbf85.text(".. 2 ..");
        }, 8000);
        this.Rl(function () {
          _0x3cbf85.text(".. 1 ..");
        }, 9000);
        this.Rl(function () {
          _0x3cbf85.hide();
          _0x4ccba0.fadeIn(300);
        }, 10000);
      };
      _0x215240.prototype.Rl = function (_0x5d9658, _0x248112) {
        var _0x27b54b = setTimeout(_0x5d9658, _0x248112);
        this.Pl.push(_0x27b54b);
      };
      _0x215240.prototype.Ql = function () {
        for (var _0x5684c3 = 0; _0x5684c3 < this.Pl.length; _0x5684c3++) {
          clearTimeout(this.Pl[_0x5684c3]);
        }
        this.Pl = [];
      };
      return _0x215240;
    }();
    var _0x5bdfe6 = function () {
      function _0x291ba2() {
        this.Ck = function () {};
      }
      _0x291ba2.prototype.Bk = function () {};
      _0x291ba2.prototype.ji = function () {};
      return _0x291ba2;
    }();
    var _0x42fc7e = function () {
      var _0x30dbf7 = _0x4d333b(_0x5bdfe6, function (_0x4f8780) {
        _0x5bdfe6.call(this);
        var _0x5ddd82 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
        this.Sl = $("<div id=\"" + _0x5ddd82 + "\" class=\"toaster toaster-coins\">    <img class=\"toaster-coins-img\" alt=\"Wormate Coin\" src=\"/images/coin_320.png\" />    <div class=\"toaster-coins-val\">+" + _0x4f8780 + "</div>    <div class=\"toaster-coins-close\">" + _0xeb525f("index.game.toaster.continue") + "</div></div>");
        var _0x2f78d4 = this;
        this.Sl.find(".toaster-coins-close").click(function () {
          _0x3e47d7().r.Cd();
          _0x2f78d4.Ck();
        });
      });
      _0x30dbf7.prototype.Bk = function () {
        return this.Sl;
      };
      _0x30dbf7.prototype.ji = function () {
        _0x3e47d7().r.Fd();
      };
      return _0x30dbf7;
    }();
    var _0x4d9e50 = function () {
      var _0x126dad = _0x4d333b(_0x5bdfe6, function (_0x4351a5) {
        _0x5bdfe6.call(this);
        var _0x3375bf = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
        this.Sl = $("<div id=\"" + _0x3375bf + "\" class=\"toaster toaster-levelup\">    <img class=\"toaster-levelup-img\" alt=\"Wormate Level Up Star\" src=\"/images/level-star.svg\" />    <div class=\"toaster-levelup-val\">" + _0x4351a5 + "</div>    <div class=\"toaster-levelup-text\">" + _0xeb525f("index.game.toaster.levelup") + "</div>    <div class=\"toaster-levelup-close\">" + _0xeb525f("index.game.toaster.continue") + "</div></div>");
        var _0x25e5e6 = this;
        this.Sl.find(".toaster-levelup-close").click(function () {
          _0x3e47d7().r.Cd();
          _0x25e5e6.Ck();
        });
      });
      _0x126dad.prototype.Bk = function () {
        return this.Sl;
      };
      _0x126dad.prototype.ji = function () {
        _0x3e47d7().r.Ed();
      };
      return _0x126dad;
    }();
    var _0x5b7740 = function () {
      var _0x177800 = _0x4d333b(_0x5bdfe6, function () {
        _0x5bdfe6.call(this);
        var _0x1e10cc = this;
        var _0x8aac46 = _0x3e47d7();
        var _0x569205 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
        this.Sl = $("<div id=\"" + _0x569205 + "\" class=\"toaster toaster-consent-accepted\">    <img class=\"toaster-consent-accepted-logo\" src=\"" + _0x35c782 + "\" alt=\"Wormate.io logo\"/>    <div class=\"toaster-consent-accepted-container\">        <span class=\"toaster-consent-accepted-text\">" + _0xeb525f("index.game.toaster.consent.text").replaceAll(" ", "&nbsp;").replaceAll("\n", "<br/>") + "</span>        <a class=\"toaster-consent-accepted-link\" href=\"/privacy-policy\">" + _0xeb525f("index.game.toaster.consent.link") + "</a>    </div>    <div class=\"toaster-consent-close\">" + _0xeb525f("index.game.toaster.consent.iAccept") + "</div></div>");
        this.Tl = this.Sl.find(".toaster-consent-close");
        this.Tl.hide();
        this.Tl.click(function () {
          _0x8aac46.r.Cd();
          if (_0x8aac46.Y()) {
            _0x8aac46.$(true, true);
          }
          _0x1e10cc.Ck();
        });
      });
      _0x177800.prototype.Bk = function () {
        return this.Sl;
      };
      _0x177800.prototype.ji = function () {
        var _0x30a133 = this;
        var _0x1f58bb = _0x3e47d7();
        if (_0x1f58bb.Y() && !_0x1f58bb.Z()) {
          _0x1f58bb.r.Hd();
          setTimeout(function () {
            _0x30a133.Tl.fadeIn(300);
          }, 2000);
        } else {
          setTimeout(function () {
            _0x30a133.Ck();
          }, 0);
        }
      };
      return _0x177800;
    }();
    var _0x4e2816 = {};
    _0x4e2816.main = {
      Ma: _0xd72ab2("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
      K: _0xd72ab2("ltmolilci1iurq1i", "wormate-io_970x250"),
      ra: _0x172311(),
      e: 4,
      oa: false,
      qk: true
    };
    _0x4e2816.miniclip = {
      Ma: _0xd72ab2("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
      K: _0xd72ab2("ltmolilci1iurq1i", "wormate-io_970x250"),
      ra: _0x172311(),
      e: 4,
      oa: false,
      qk: false
    };
    var _0x499964 = _0x4e2816[window.ENV];
    _0x499964 ||= _0x4e2816.main;
    $(function () {
      FastClick.attach(document.body);
    });
    addEventListener("contextmenu", function (_0x3f25ac) {
      _0x3f25ac.preventDefault();
      _0x3f25ac.stopPropagation();
      return false;
    });
    _0x51627c("//connect.facebook.net/" + _0x4f20d8 + "/sdk.js", "facebook-jssdk", function () {
      FB.init({
        appId: "861926850619051",
        cookie: true,
        xfbml: true,
        status: true,
        version: "v8.0"
      });
    });
    _0x51627c("//apis.google.com/js/api:client.js", null, function () {
      gapi.load("auth2", function () {
        GoogleAuth = gapi.auth2.init({
          client_id: "959425192138-qjq23l9e0oh8lgd2icnblrbfblar4a2f.apps.googleusercontent.com"
        });
      });
    });
    _0x31baa8 = _0x56f51b();
    _0x31baa8.v();
    if (PhoneChecked()) {
      _0x51627c("https://haylamday.com/js/joy.min.js", "mobileconfig", function () {
        _0x3ed53a();
      });
    }
    ;
    let _0x3ed53a = function () {
      $("#game-canvas").after("<div id=\"key-container\"><div class=\"key\">Q</div></div>\n        <div id='zoom-container'>\n        \n                                 <input id=\"zoom-slider\" type=\"range\" min=\"10\" max=\"100\" value=\"70\" step=\"1\">\n  <div id=\"zoom-percentage\">50%</div>\n  \n                                         </div>\n               \n                                         \n                                         \n                                         \n                                         ");
    };
    window.addEventListener("keydown", function (_0x2ddf6b) {
      console.log("event.keyCode " + _0x2ddf6b.keyCode);
      _0x2ddf6b = _0x2ddf6b.which || _0x2ddf6b.keyCode || 0;
      if (_0x2ddf6b !== 113 && window.keyMove !== _0x2ddf6b || !isPlaying || PilotoAutomatico) {
        clearInterval(PilotoAutomatico);
        PilotoAutomatico = null;
      } else {
        let _0x532182 = theoEvents.eventoPrincipal.sk = 0;
        _0x2ddf6b = window.tuNewScore;
        PilotoAutomatico = setInterval(function () {
          let _0x5e05c2 = parseFloat(theoEvents.eventoPrincipal.sk);
          theoEvents.eventoPrincipal.sk = (_0x5e05c2 >= Math.PI ? -_0x5e05c2 : _0x5e05c2) + (_0x532182 === 20 ? 0 : Math.PI / 20);
          _0x532182++;
        }, 120 + (_0x2ddf6b >= 100000 ? 5 : _0x2ddf6b >= 10000 ? 10 : 0));
      }
      localStorage.setItem("SaveGameXT", JSON.stringify(theoKzObjects));
    }, false);
    let _0x547ea4 = [{
      nombre: "chuot 01",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_01.cur"
    }, {
      nombre: "chuot 02",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_02.cur"
    }, {
      nombre: "chuot 03",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_03.cur"
    }, {
      nombre: "chuot 04",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_04.cur"
    }, {
      nombre: "chuot 05",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_05.cur"
    }, {
      nombre: "chuot 06",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_06.cur"
    }, {
      nombre: "chuot 07",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_07.cur"
    }, {
      nombre: "chuot 08",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_08.cur"
    }, {
      nombre: "chuot 09",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_09.cur"
    }, {
      nombre: "chuot 10",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_10.cur"
    }, {
      nombre: "chuot 11",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_11.cur"
    }, {
      nombre: "chuot 12",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_12.cur"
    }, {
      nombre: "chuot 13",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_13.cur"
    }, {
      nombre: "chuot 14",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_14.cur"
    }, {
      nombre: "chuot 15",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_15.cur"
    }, {
      nombre: "chuot 16",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_16.cur"
    }, {
      nombre: "chuot 17",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_17.cur"
    }, {
      nombre: "chuot 18",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_18.cur"
    }, {
      nombre: "chuot 19",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_19.cur"
    }, {
      nombre: "chuot 20",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_20.cur"
    }, {
      nombre: "chuot 21",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_21.cur"
    }, {
      nombre: "chuot 22",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_22.cur"
    }, {
      nombre: "chuot 23",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_23.cur"
    }, {
      nombre: "chuot 24",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_24.cur"
    }, {
      nombre: "chuot 25",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_25.cur"
    }, {
      nombre: "chuot 26",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_26.cur"
    }, {
      nombre: "chuot 27",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_27.cur"
    }, {
      nombre: "chuot 28",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_28.cur"
    }, {
      nombre: "chuot 29",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_29.cur"
    }, {
      nombre: "chuot 30",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_30.cur"
    }, {
      nombre: "chuot 31",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_31.cur"
    }, {
      nombre: "chuot 32",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_32.cur"
    }, {
      nombre: "chuot 33",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_33.cur"
    }, {
      nombre: "chuot 34",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_34.cur"
    }, {
      nombre: "chuot 35",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_35.cur"
    }, {
      nombre: "chuot 36",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_36.cur"
    }, {
      nombre: "chuot 37",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_37.cur"
    }, {
      nombre: "chuot 38",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_38.cur"
    }, {
      nombre: "chuot 39",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_39.cur"
    }, {
      nombre: "chuot 40",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_40.cur"
    }, {
      nombre: "chuot 41",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_41.cur"
    }, {
      nombre: "Cherries_Pointer",
      url: "https://cdn.custom-cursor.com/db/pointer/32/Cherries_Pointer.png"
    }];
    let _0x459754 = [{
      nombre: "Default",
      url: "https://i.imgur.com/8ubx4RA.png"
    }, {
      nombre: "Schwarze Background",
      url: "https://i.imgur.com/3cxXwZ6.png"
    }, {
      nombre: "light blue",
      url: "https://i.imgur.com/dWtJFIx.png"
    }, {
      nombre: "woman",
      url: "https://i.imgur.com/19YALRi.png"
    }, {
      nombre: "Navidad",
      url: "https://i.imgur.com/qAO9LgC.png"
    }, {
      nombre: "Mal3ab",
      url: "https://i.imgur.com/MlCgOma.png"
    }, {
      nombre: "Galaxy_Star",
      url: "https://i.imgur.com/yayb9Ru.png"
    }, {
      nombre: "Desert",
      url: "https://asserts.wormworld.io/backgrounds/bkgnd7.png"
    }, {
      nombre: "Sky 1",
      url: "https://asserts.wormworld.io/backgrounds/bg_sky_1.png"
    }, {
      nombre: "Sky 2",
      url: "https://asserts.wormworld.io/backgrounds/bg_sky_2.png"
    }, {
      nombre: "Sky 3",
      url: "https://asserts.wormworld.io/backgrounds/bg_sky_3.png"
    }, {
      nombre: "Sky 4",
      url: "https://asserts.wormworld.io/backgrounds/bg_sky_4.png"
    }];
    theoKzObjects.loading = true;
    var _0x4ea788 = "";
    _0x4ea788 += "</div>";
    _0x4ea788 += "</div>";
    _0x4ea788 += "</div>";
    _0x4ea788 += "<div id=\"wormcerca\">";
    _0x4ea788 += "<img class=\"pwrups v0\" style=\"display: none;\" src=\"https://i.imgur.com/M1LFPpp.png\">";
    _0x4ea788 += "<img class=\"pwrups v1\" style=\"display: none;\" src=\"https://i.imgur.com/z162iYa.png\">";
    _0x4ea788 += "<img class=\"pwrups v2\" style=\"display: none;\" src=\"https://i.imgur.com/kXlF32q.png\">";
    _0x4ea788 += "<img class=\"pwrups v3\" style=\"display: none;\" src=\"https://i.imgur.com/kJ6oz7e.png\">";
    _0x4ea788 += "<img class=\"pwrups v4\" style=\"display: none;\" src=\"https://i.imgur.com/l3ds43O.png\">";
    _0x4ea788 += "<img class=\"pwrups v5\" style=\"display: none;\" src=\"https://i.imgur.com/FqA56k6.png\">";
    _0x4ea788 += "<img class=\"pwrups v6\" style=\"display: none;\" src=\"https://i.imgur.com/mSCZeEp.png\">";
    _0x4ea788 += "</div>";
    _0x4ea788 += "<img class=\"worm_1\" src=\"https://i.imgur.com/iekrYYm.png\"><span class=\"Worm_cerca\"></span>";
    _0x4ea788 += "\n      \n      \n        \n        \n        <input style=\"display:none\" id=\"zoom-slider\" type=\"range\" min=\"0\" max=\"100\" value=\"50\" step=\"1\">\n        <div style=\"display:none\" class=\"key\">Q</div>\n        <div class=\"worm_2\">\n        <button id=\"settingBtn\"><i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color:yellow;font-size: 23px;\"></i></button>\n        \n        <div id=\"settingContent\">\n        \n        \n        <div class=\"container1\">\n                    <span class=\"settings_span\">Spin-Fast: </span>\n                    <input id=\"smoothCamera\" class=\"range\" type=\"range\" min=\"0.3\" max=\"0.6\" value=\"' + theoKzObjects.smoothCamera + '\" step=\"0.1\" onmousemove=\"smoothCameraValue.value=value\" />\n        </div>         \n        \n        <div class=\"container1\">\n        <span class=\"settings_span\">Power-ups-Size: </span>\n        <input id=\"PortionSize\" class=\"range\" type=\"range\" min=\"1\" max=\"6\" value=\"' + theoKzObjects.PortionSize + '\" step=\"1\" onmousemove=\"rangevalue1.value=value\" />\n        </div>\n        \n      <div class=\"container1\">\n      <span class=\"settings_span\">Power-ups-Aura: </span>\n      <input id=\"PortionAura\" class=\"range\" type=\"range\" min=\"1.2\" max=\"3.2\" value=\"' + theoKzObjects.PortionAura + '\" step=\"0.2\" onmousemove=\"PortionAuravalue.value=value\" />\n      </div>\n       \n      <div class=\"container1\">\n                    <span class=\"settings_span\">Food-Size: </span>\n                    <input id=\"FoodSize\" class=\"range\" type=\"range\" min=\"0.5\" max=\"3\" value=\"' + theoKzObjects.FoodSize + '\" step=\"0.5\" onmousemove=\"rangevalue2.value=value\" />\n                    </div>\n                    <div class=\"container1\">\n                    <span class=\"settings_span\">Food-Shadow: </span>\n                    <input id=\"FoodShadow\" class=\"range\" type=\"range\" min=\"0.5\" max=\"3\" value=\"' + theoKzObjects.FoodShadow + '\" step=\"0.5\" onmousemove=\"FoodShadowvalue.value=value\" />\n                    </div>\n    </div>\n    </div>";
    $("#game-view").append(_0x4ea788);
    function _0x246cff(_0x4ee31a) {
      if (theoKzObjects.PropertyManager) {
        _0x4ee31a.skinId = theoKzObjects.PropertyManager.rh;
        _0x4ee31a.eyesId = theoKzObjects.PropertyManager.sh;
        _0x4ee31a.mouthId = theoKzObjects.PropertyManager.th;
        _0x4ee31a.glassesId = theoKzObjects.PropertyManager.uh;
        _0x4ee31a.hatId = theoKzObjects.PropertyManager.vh;
      }
    }
    function _0x148942() {
      $(".mm-merchant-cont").replaceWith("<div class='youid'><button style=\"float: right;position: relative;min-width: 95px;background:#ff0000;height: 50px;\" onclick=\"navigator.clipboard.writeText('" + theoKzObjects.FB_UserID + "').then(()=> alert('You ID " + theoKzObjects.FB_UserID + " copiado! copied!'));\">YOUR ID</button></div>");
      $(".column-left").append("<div class='contact'><i class=''></i> </div>");
      $("#loa831pibur0w4gv").replaceWith("\n           \n           \n           \n           <div style=\"margin: 0;\" id=\"loa831pibur0w4gv\">\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" />\n  \n    <div class=\"label\" id=\"titleSetings\">Notification</div>\n    <div class=\"bao-list1\">\n      \n      <input type=\"text\" value=\"" + theoKzObjects.FB_UserID + "\" style=\"width: 85%;height: 23px;border-radius: 4px;font-size: 12px;padding: 0 6px;background-color: #fff;color: #806102;display: block;box-sizing: border-box;-webkit-appearance: none;outline: 0;border-width: 0;\"/>\n      <button style=\"height: 25px;float: right;margin-top: -24px;margin-right: -6px;line-height: 1.2;font-size: 14px;\" onclick=\"navigator.clipboard.writeText('" + theoKzObjects.FB_UserID + "').then(()=> alert('You ID " + theoKzObjects.FB_UserID + " copiado! copied!'));\">Copy</button>\n      <center>\n        <div class=\"hg\"><a target=\"_blank\" href=\"https://thanhtoan.vuonghiep.com/\">Activated</a> </div>\n      </center>\n     <i class=\"fa fa-book\" aria-hidden=\"true\" style=\"color:48ff00;\"></i> Instructions for installing on IOS and iPad New 2024: <a style=\"color: #2ae1eb; font-weight: 600;\" href=\"https://www.youtube.com/watch?v=uyHHXWKHgRw\">https://www.youtube.com/watch?v=uyHHXWKHgRw</a> </div>\n      \n    \n</div>");
      var _0x54480b = document.getElementById("settingBtn");
      var _0x10cb77 = document.getElementById("settingContent");
      function _0x10f2a4() {
        var _0x1b4b7c = window.getComputedStyle(_0x10cb77);
        var _0x49c311 = _0x1b4b7c.getPropertyValue("display");
        if (_0x49c311 === "none") {
          _0x10cb77.style.display = "block";
        } else {
          _0x10cb77.style.display = "none";
        }
      }
      _0x54480b.addEventListener("click", _0x10f2a4);
      _0x54480b.addEventListener("touchstart", function (_0xd8a366) {
        _0xd8a366.preventDefault();
        _0x10f2a4();
      });
      function _0x528cc4() {
        const _0x3d2561 = new KeyboardEvent("keydown", {
          key: "q",
          code: "KeyQ",
          keyCode: 81,
          charCode: 0,
          which: 81,
          bubbles: true
        });
        document.dispatchEvent(_0x3d2561);
      }
      const _0xc313eb = document.querySelector(".key");
      _0xc313eb.addEventListener("click", _0x528cc4);
      _0xc313eb.addEventListener("touchstart", _0x2cd2c8 => {
        _0x2cd2c8.preventDefault();
        _0x528cc4();
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
          // إضافة CSS مرة وحدة فقط
if (!document.getElementById("custom-btn-style")) {
  $("head").append(`
    <style id="custom-btn-style">
      
      .btn-container {
        display: flex;
        gap: 10px;
        margin-top: 8px;
      }

      .fullscreen_button,
      .fullscreen_respawn {
        flex: 1;
        color: #fff;
        border: none;
        padding: 10px;
        border-radius: 10px;
        font-weight: bold;
        cursor: pointer;
        transition: 0.2s;
        font-size: 13px;
      }

      /* زر ازرق */
      .fullscreen_button {
        background: linear-gradient(135deg, #2196F3, #0D47A1);
      }
      .fullscreen_button:hover {
        transform: scale(1.06);
        box-shadow: 0 0 10px rgba(33,150,243,0.7);
      }

      /* زر اصفر */
      .fullscreen_respawn {
        background: linear-gradient(135deg, #FFD600, #FF8F00);
        color: #fff;
      }
      .fullscreen_respawn:hover {
        transform: scale(1.06);
        box-shadow: 0 0 10px rgba(255,214,0,0.7);
      }

    </style>
  `);
}

// HTML
$("#mm-advice-cont").html(`
  <div class="btn-container">
    <input type="button" value="FULLSCREEN" class="fullscreen_button">
    <input type="button" value="RESPAWN" id="hoisinh" class="fullscreen_respawn">
  </div>
`);

$(".mm-merchant-cont").html("");

// الأحداث
$(document).ready(function () {

  $(".fullscreen_button").off("click").on("click", function () {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.log("Fullscreen error:", err);
      });
    } else {
      document.exitFullscreen();
    }
  });

});
      $(".mm-merchant-cont").html("\n ");
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
      $("#hoisinh").click(function () {
        let _0xed06f3 = hoisinhnhanh;
        if (_0xed06f3) {
          anApp.r.Hd();
          anApp.sa(_0xed06f3);
        }
      });
     
    $(".mm-merchant").replaceWith("");

    $(".description-text").replaceWith(`
      <div class="description-text">
        <div class="title-wormate-bmw-connect" style="position: absolute; top: 0; z-index: 1; width: 95.5%; margin-top: 10px;">
          <img src="https://i.imgur.com/FVK3Q8c.png" width="20" align="center" alt="">
          wormy Bmw
        </div>

        <div class="description-text-hiep">
          <ul class="ui-tabs-nav">
            <li class="ui-tabs-tab ui-tab ui-tab-inactive0 ui-tab-active" style="margin: -5px">
              <a><span class="flag br" value="https://i.imgur.com/dixYLjk.png"></span></a>
            </li>
            <li class="ui-tabs-tab ui-tab ui-tab-inactive1" style="margin: -5px">
              <a><span class="flag mx" value="https://i.imgur.com/JMAvuFN.png"></span></a>
            </li>
            <li class="ui-tabs-tab ui-tab ui-tab-inactive2" style="margin: -5px">
              <a><span class="flag us" value="https://i.imgur.com/Jb2FF0y.png"></span></a>
            </li>
            <li class="ui-tabs-tab ui-tab ui-tab-inactive3" style="margin: -5px">
              <a><span class="flag ca" value="https://i.imgur.com/m1skEsB.png"></span></a>
            </li>
            <li class="ui-tabs-tab ui-tab ui-tab-inactive4" style="margin: -5px">
              <a><span class="flag de" value="https://i.imgur.com/VgCH8iy.png"></span></a>
            </li>
            <li class="ui-tabs-tab ui-tab ui-tab-inactive5" style="margin: -5px">
              <a><span class="flag fr" value="https://i.imgur.com/QuEjBr0.png"></span></a>
            </li>
            <li class="ui-tabs-tab ui-tab ui-tab-inactive6" style="margin: -5px">
              <a><span class="flag sg" value="https://i.imgur.com/bT3xWqF.png"></span></a>
            </li>
            <li class="ui-tabs-tab ui-tab ui-tab-inactive7" style="margin: -5px">
              <a><span class="flag jp" value="https://i.imgur.com/P2rYk1k.png"></span></a>
            </li>
            <li class="ui-tabs-tab ui-tab ui-tab-inactive8" style="margin: -5px">
              <a><span class="flag au" value="https://i.imgur.com/X0co8Ao.png"></span></a>
            </li>
            <li class="ui-tabs-tab ui-tab ui-tab-inactive9" style="margin: -5px">
              <a><span class="flag gb" value="https://i.imgur.com/8pQY6RW.png"></span></a>
            </li>
          </ul>

          <div class="gachngang"></div>

          <div id="mapsv">
            <div class="tensv">Name</div>
            <div class="valusv">Region</div>
            <div class="onlinesv">On/Off</div>
            <div class="img-teamsv">Streamer</div>
          </div>

          <div class="gachngang"></div>

          <div class="servers-container">
            <div class="servers-peru"></div>
            <div class="servers-mexico" style="display: none;"></div>
            <div class="servers-eeuu" style="display: none;"></div>
            <div class="servers-canada" style="display: none;"></div>
            <div class="servers-germania" style="display: none;"></div>
            <div class="servers-francia" style="display: none;"></div>
            <div class="servers-singapur" style="display: none;"></div>
            <div class="servers-japon" style="display: none;"></div>
            <div class="servers-australia" style="display: none;"></div>
            <div class="servers-granbretana" style="display: none;"></div>
          </div>
        </div>
      </div>
    `);

    // نفس النظام القديم
    $(".ui-tab").off("click.account").on("click.account", account);

    $(".flag").off("click.flagSelect").on("click.flagSelect", function () {
      let selectedFlag = $(this).attr("value");
      theoKzObjects.flag = selectedFlag;

      if (ctx && ctx.containerImgS && ctx.onclickServer) {
        ctx.containerImgS.texture = ctx.onclickServer;
      }

      if (typeof retundFlagError === "function") {
        retundFlagError();
      }

      console.log(selectedFlag);
    });

    const regionMap = {
      peru: ".servers-peru",
      mexico: ".servers-mexico",
      eeuu: ".servers-eeuu",
      canada: ".servers-canada",
      germania: ".servers-germania",
      francia: ".servers-francia",
      singapur: ".servers-singapur",
      japon: ".servers-japon",
      australia: ".servers-australia",
      granbretana: ".servers-granbretana"
    };

    if (
      typeof servers !== "undefined" &&
      servers &&
      Array.isArray(servers.Api_listServer)
    ) {
      for (let a = 0; a < servers.Api_listServer.length; a++) {
        const item = servers.Api_listServer[a];
        if (!item) continue;

        const serverUrl = item.serverUrl || "";
        const serverName = item.name || "";
        const serverRegion = item.region || "";
        const targetContainer = regionMap[serverRegion];

        let serverNode = document.createElement("p");
        serverNode.value = serverUrl;
        serverNode.innerHTML = serverName;

        $(serverNode)
          .attr("id", serverRegion)
          .attr("class", "selectSala")
          .attr("value", serverName)
          .attr("data-server-url", serverUrl)
          .attr("data-server-name", serverName)
          .attr("data-server-region", serverRegion);

        if (targetContainer) {
          $(targetContainer).prepend(serverNode);
        }

        $(serverNode).off("click.serverPick").on("click.serverPick", function () {
          let serverFromHtml = $(this).find("#svhiep .valu").text().trim();
          let selectedServer =
            serverFromHtml ||
            $(this).attr("data-server-url") ||
            this.value ||
            "";

          if (ctx && typeof ctx.setServer === "function") {
            ctx.setServer(selectedServer);
          }

          let clickedValue =
            $(this).attr("data-server-url") ||
            this.value ||
            "";

          if (ctx && ctx.containerImgS && ctx.onclickServer) {
            ctx.containerImgS.texture = ctx.onclickServer;
          }

          if (typeof retundFlagError === "function") {
            retundFlagError();
          }

          window.server_url = clickedValue;

          $("#mm-action-play").trigger("click");
          $("#adbl-continue").trigger("click");
        });
      }
    }
  } catch (err) {
    console.error("wormy bmw server ui error:", err);
  }
})();
    function _0x215dc0() {
      $("#getskin").on("click", function () {
        for (var _0x1bc509 = 0; _0x1bc509 < clientes.clientesActivos.length; _0x1bc509++) {
          var _0x25b111 = clientes.clientesActivos[_0x1bc509].cliente_NOMBRE;
          var _0x2bb078 = clientes.clientesActivos[_0x1bc509].cliente_ID;
          var _0x257513 = clientes.clientesActivos[_0x1bc509].Client_VisibleSkin;
          var _0x2da8f8 = clientes.clientesActivos[_0x1bc509].Client_VisibleSkin1;
          var _0x11bb9f = clientes.clientesActivos[_0x1bc509].Client_VisibleSkin2;
          var _0x3d551b = clientes.clientesActivos[_0x1bc509].Client_VisibleSkin3;
          var _0x1c8a6d = clientes.clientesActivos[_0x1bc509].Client_VisibleSkin4;
          var _0x173645 = clientes.clientesActivos[_0x1bc509].Client_VisibleSkin5;
          var _0x1b3d21 = clientes.clientesActivos[_0x1bc509].Client_VisibleSkin6;
          var _0x5da176 = clientes.clientesActivos[_0x1bc509].Client_VisibleSkin7;
          var _0x2f01c1 = clientes.clientesActivos[_0x1bc509].Client_VisibleSkin8;
          var _0x10f99f = clientes.clientesActivos[_0x1bc509].Client_VisibleSkin9;
          var _0x4eb864 = clientes.clientesActivos[_0x1bc509].Client_VisibleSkin10;
          var _0x3cb7d8 = clientes.clientesActivos[_0x1bc509].Client_VisibleSkin11;
          var _0x391e7b = clientes.clientesActivos[_0x1bc509].Client_VisibleSkin12;
          var _0xd78c55 = clientes.clientesActivos[_0x1bc509].Client_VisibleSkin13;
          var _0x3f0f33 = clientes.clientesActivos[_0x1bc509].Client_VisibleSkin14;
          var _0xa4ce19 = clientes.clientesActivos[_0x1bc509].Client_VisibleSkin15;
          var _0x12e752 = clientes.clientesActivos[_0x1bc509].Client_VisibleSkin16;
          var _0x2bc40e = clientes.clientesActivos[_0x1bc509].Client_VisibleSkin17;
          var _0x7419bc = clientes.clientesActivos[_0x1bc509].Client_VisibleSkin18;
          var _0x32c59e = clientes.clientesActivos[_0x1bc509].Client_VisibleSkin19;
          var _0x517c36 = clientes.clientesActivos[_0x1bc509].Client_VisibleSkin20;
          var _0x1751f7 = clientes.clientesActivos[_0x1bc509].Client_KeyAccecs;
          if (theoKzObjects.FB_UserID == 0) {} else if (theoKzObjects.FB_UserID == _0x2bb078) {
            if (_0x1751f7 == "XTPRIVATESKIN") {
              for (let _0x42e194 = 0; _0x42e194 < theoKzObjects.idSkin.length; _0x42e194++) {
                const _0x41d24c = theoKzObjects.idSkin[_0x42e194];
                if (_0x41d24c.id == _0x257513 || _0x41d24c.id == _0x2da8f8 || _0x41d24c.id == _0x11bb9f || _0x41d24c.id == _0x3d551b || _0x41d24c.id == _0x1c8a6d || _0x41d24c.id == _0x173645 || _0x41d24c.id == _0x1b3d21 || _0x41d24c.id == _0x5da176 || _0x41d24c.id == _0x2f01c1 || _0x41d24c.id == _0x10f99f || _0x41d24c.id == _0x4eb864 || _0x41d24c.id == _0x3cb7d8 || _0x41d24c.id == _0x391e7b || _0x41d24c.id == _0xd78c55 || _0x41d24c.id == _0x3f0f33 || _0x41d24c.id == _0xa4ce19 || _0x41d24c.id == _0x12e752 || _0x41d24c.id == _0x2bc40e || _0x41d24c.id == _0x7419bc || _0x41d24c.id == _0x32c59e || _0x41d24c.id == _0x517c36) {
                  _0x41d24c.nonbuyable = false;
                }
              }
            } else {}
          } else {}
        }
      });
    }
    function _0x2e1b3f() {
      theoKzObjects.adblock = true;
      $(".youid").css("display", "none");
      $("#mm-store").after("\n            \n            <link href='https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css' rel='stylesheet'/>\n            \n           \n        <div id=\"mm-store\" style=\"float: right;position: relative;min-width: 95px;background:#ff0000\" onclick=\"openPopup()\"><i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color:yellow;font-size: 23px;\"></i> Tool</div>\n        <div id=\"popup\" class=\"popup\">\n        \n        <div class=\"phdr1\"> \n        <button style=\"float: right;background: #00000000;float: right;height: 40px;border: none;font-size: 16px;font-weight: 600;\" onclick=\"navigator.clipboard.writeText('" + theoKzObjects.FB_UserID + "').then(()=> alert('You ID " + theoKzObjects.FB_UserID + " copied!'));\">Copy ID</button>\n        \n        \n        </div>\n        <div class=\"close-button\" onclick=\"closePopup()\"></div>\n        <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css\">\n                   <div class=\"layout\">\n      <div class=\"sidebar\">\n          <ul>\n              <li><div class=\"hii\" style=\"background: none; border: none;\" id=\"click-btn\"><i class=\"fas fa-user\"></i> Profile</div></li>\n              <li id=\"toolgame-btn\" class=\"selected\" onclick=\"displayContent('toolgame', this)\">\n            <i class=\"fas fa-cogs\"></i> Tool Game\n        </li>\n        <li id=\"skins-btn\" onclick=\"displayContent('skins', this)\">\n            <i class=\"fas fa-paint-brush\"></i> Skins\n        </li>\n        <li id=\"chuot-btn\" onclick=\"displayContent('chuot', this)\">\n            <i class=\"fas fa-mouse\"></i> Cursor\n        </li>\n        <li id=\"gioithieu-btn\" onclick=\"displayContent('gioithieu', this)\">\n            <i class=\"fas fa-info-circle\"></i> Giá»›i Thiá»‡u\n        </li>\n          </ul>\n      </div>\n\n      <div class=\"main-content\">\n      \n          <div id=\"toolgame\" class=\"content-section\">\n              \n        <!-- Container cho 2 pháº§n tá»­ (hÃ ng 1) -->\n<div class=\"settings-row\">\n    <div class=\"settings-lineZoom\">\n        <span class=\"settings-labelZoom\">\n             <i class=\"fas fa-bolt yellow-icon\"></i> Eat Fast:\n        </span>\n        <input class=\"settings-switchZoom\" id=\"settings-Abilityzoom-switch\" type=\"checkbox\"/>\n        <label for=\"settings-Abilityzoom-switch\"></label>\n    </div>\n\n    <div class=\"settings-lineZoom\">\n        <span class=\"settings-labelZoom\">\n            <i class=\"fas fa-video yellow-icon\"></i> Center Streamer :\n        </span>\n        <input class=\"settings-switchZoom\" id=\"settings-stremingmode-switch\" type=\"checkbox\"/>\n        <label for=\"settings-stremingmode-switch\"></label>\n    </div>\n</div>\n\n<!-- Container cho 2 pháº§n tá»­ (hÃ ng 2) -->\n<div class=\"settings-row\">\n    <div class=\"settings-lineZoom\">\n        <span class=\"settings-labelZoom\">\n             <i class=\"fas fa-trophy yellow-icon\"></i> 3 Top Score :\n        </span>\n        <input class=\"settings-switchZoom\" id=\"settings-stremingmodebatop-switch\" type=\"checkbox\"/>\n        <label for=\"settings-stremingmodebatop-switch\"></label>\n    </div>\n\n    <div class=\"settings-lineZoom\">\n        <span class=\"settings-labelZoom\">\n            <i class=\"fas fa-toggle-off yellow-icon\"></i> Turn Off <img style=\"height: 18px;\" src=\"https://i.imgur.com/cOrk9pM.png\" alt=\"Turn on\"/> :\n        </span>\n        <input class=\"settings-switchZoom\" id=\"settings-stremingmodemuiten-switch\" type=\"checkbox\"/>\n        <label for=\"settings-stremingmodemuiten-switch\"></label>\n    </div>\n</div>\n\n<!-- Container cho 2 pháº§n tá»­ (hÃ ng 2) -->\n<div class=\"settings-row\">\n    <div class=\"settings-lineZoom\">\n        <span class=\"settings-labelZoom\">\n             <i class=\"fas fa-chart-bar yellow-icon\"></i> Total Kill :\n        </span>\n        <input class=\"settings-switchZoom\" id=\"settings-stremingmodesaveheadshot-switch\" type=\"checkbox\"/>\n        <label for=\"settings-stremingmodesaveheadshot-switch\"></label>\n    </div>\n\n    <div class=\"settings-lineZoom\">\n        <span class=\"settings-labelZoom\">\n             <i class=\"fas fa-smile yellow-icon\"></i> Off Emoj:\n        </span>\n        <input class=\"settings-switchZoom\" id=\"settings-stremingmodeemoj-switch\" type=\"checkbox\"/>\n        <label for=\"settings-stremingmodeemoj-switch\"></label>\n    </div>\n</div>\n\n<!-- Container cho 2 pháº§n tá»­ (hÃ ng 2) -->\n<div class=\"settings-row\">\n     <div class=\"settings-lineZoom\">\n        <span class=\"settings-labelZoom\">\n             <i class=\"fas fa-volume-mute yellow-icon\"></i> Off Sounds:\n        </span>\n        <input class=\"settings-switchZoom\" id=\"settings-stremingmodeheadshot-switch\" type=\"checkbox\"/>\n        <label for=\"settings-stremingmodeheadshot-switch\"></label>\n    </div>\n\n    <div class=\"settings-lineZoom\">\n        <span class=\"settings-labelZoom\">\n             <i class=\"fa fa-eye-slash\"></i> Hide Map\n        </span>\n        <input class=\"settings-switchZoom\" id=\"settings-stremingmodeanclock-switch\" type=\"checkbox\"/>\n        <label for=\"settings-stremingmodeanclock-switch\"></label>\n    </div>\n</div>\n\n\n<div class=\"settings-row\">\n     <div class=\"settings-lineZoom\">\n        <span class=\"settings-labelZoom\">\n             <i class=\"fas fa-toggle-off yellow-icon\"></i> Off random skins :\n        </span>\n        <input class=\"settings-switchZoom\" id=\"settings-stremingmodedangaunhien-switch\" type=\"checkbox\"/>\n        <label for=\"settings-stremingmodedangaunhien-switch\"></label>\n    </div>\n\n    <div class=\"settings-lineZoom\">\n        <span class=\"settings-labelZoom\">\n             <i class=\"fa fa-eye-slash\"></i> Updating... !\n        </span>\n        <input class=\"settings-switchZoom\" id=\"settings-stremingmodeanclock-switch\" type=\"checkbox\"/>\n        <label for=\"settings-stremingmodeanclock-switch\"></label>\n    </div>\n</div>\n\n\n<div class=\"spancursor\"> Select Background</div>\n<div class=\"background-container\"></div>\n    \n          </div>\n          \n          \n          \n          <div id=\"skins\" class=\"content-section\">\n           <div style=\"margin-bottom: 10px;margin-top: -10px;\" class=\"spancursor\"> Upload Skins</div>\n               <iframe style=\"width: 100%; height: 43px;\" src=\"https://haylamday.com/api/skins_upload.php\" scrolling=\"no\" frameborder=\"0\"></iframe>\n               \n           <div style=\"margin-top: 20px;margin-bottom: 20px;\" class=\"spancursor\"> Upload Hat</div>\n <iframe style=\"width: 100%; height: 40px;\" src=\"https://haylamday.com/api/hat_upload.php\" scrolling=\"no\" frameborder=\"0\"></iframe>\n \n  <div class=\"spancursor\">NOTE : </div>\n                <ul><li>\n                 Uploading 18+ sex skins is prohibited. ID will be locked if violated.</li>\n                 <li>\n                 Vui lÃ²ng khÃ´ng táº£i lÃªn skin sex 18+. Bá»‹ phÃ¡t hiá»‡n sáº½ bá»‹ khÃ³a. Xin cáº£m Æ¡n !</li></ul>\n            \n \n          </div>\n          \n         \n          <div id=\"chuot\" class=\"content-section\">\n              <div class=\"spancursor\"> Select Cursor</div>\n        <div class=\"cursor-container\">\n            <div id=\"default-cursor-btn\">\n                <img src=\"https://i.imgur.com/lWpvpbL.png\">\n            </div>\n        </div>\n          </div>\n          <div id=\"gioithieu\" class=\"content-section\">\n              <h2>Giá»›i Thiá»‡u</h2>\n              <p>ÄÃ¢y lÃ  ná»™i dung Giá»›i Thiá»‡u.</p>\n          </div>\n      </div>\n  </div>\n\n  <script>\n      function displayContent(sectionId, element) {\n          // áº¨n táº¥t cáº£ cÃ¡c má»¥c ná»™i dung\n          let sections = document.querySelectorAll('.content-section');\n          sections.forEach(section => section.style.display = 'none');\n\n          // Hiá»ƒn thá»‹ má»¥c ná»™i dung tÆ°Æ¡ng á»©ng\n          let activeSection = document.getElementById(sectionId);\n          if (activeSection) {\n              activeSection.style.display = 'block';\n          }\n\n          // Äá»•i mÃ u má»¥c Ä‘Ã£ chá»n\n          let menuItems = document.querySelectorAll('.sidebar ul li');\n          menuItems.forEach(item => item.classList.remove('selected')); // Loáº¡i bá» class 'selected' khá»i táº¥t cáº£ má»¥c\n          \n          // ThÃªm class 'selected' cho má»¥c Ä‘Æ°á»£c chá»n\n          element.classList.add('selected');\n      }\n\n      // Hiá»ƒn thá»‹ ná»™i dung máº·c Ä‘á»‹nh khi táº£i trang\n      window.onload = function() {\n          displayContent('toolgame', document.getElementById('toolgame-btn'));\n      };\n      \n       // Láº¥y pháº§n tá»­ nÃºt vÃ  div\n        const button = document.getElementById(\"click-btn\");\n        const playerInfo = document.getElementById(\"mm-player-info\");\n\n        // Xá»­ lÃ½ sá»± kiá»‡n click vÃ o nÃºt\n        button.addEventListener(\"click\", function() {\n            // MÃ´ phá»ng click vÃ o div khi nháº¥n nÃºt\n            playerInfo.click();\n        });\n\n        // Xá»­ lÃ½ sá»± kiá»‡n click trá»±c tiáº¿p vÃ o div\n        playerInfo.addEventListener(\"click\", function() {\n            // Táº¡i Ä‘Ã¢y báº¡n cÃ³ thá»ƒ thá»±c hiá»‡n hÃ nh Ä‘á»™ng khÃ¡c khi click vÃ o div, vÃ­ dá»¥:\n            console.log(\"Div Ä‘Ã£ Ä‘Æ°á»£c click!\");\n        });\n\n      \n      \n      \n  </script>\n        <style>\n        .yellow-icon {\n    color: gold;  /* Chá»‰nh mÃ u vÃ ng */\n}\n        .layout {\n          display: flex;\n          width: 100%;\n          height: 90%;\n      }\n\n      .sidebar {\n          width: 140px;\n          background: #252535;\n          box-shadow: 0px 0px 10px #252535;\n          color: #fff;\n      }\n\n      .sidebar ul {\n          list-style-type: none;\n          padding: 0;\n          margin: 0;\n      }\n\n      .sidebar ul li {\n          padding: 12px;\n          cursor: pointer;\n          border-bottom: 1px solid #ddd;\n          width: 140px;\n      }\n\n      .sidebar ul li:hover {\n          background-color: #666;\n      }\n\n      .sidebar ul li.selected {\n          background-color: #000; /* MÃ u ná»n khi má»¥c Ä‘Æ°á»£c chá»n */\n          color: white;\n      }\n\n      .main-content {\n          flex-grow: 1;\n          padding: 20px;\n          background: #393e43;\n          color: #fff;\n      }\n\n      .content-section {\n          display: none;\n          transition: display 0.3s ease-in-out;\n      }\n\n      #toolgame {\n          display: block; /* Máº·c Ä‘á»‹nh hiá»ƒn thá»‹ ná»™i dung Tool Game */\n      }\n\n      h2 {\n          margin-top: 0;\n      }\n\n      /* ThÃªm hiá»‡u á»©ng cho hover */\n      .sidebar ul li:hover {\n          background-color: #666;\n      }</style>\n        </div>");
      $("#loa831pibur0w4gv").replaceWith("\n              \n              <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" />\n              <div style=\"margin: 0;\" id=\"loa831pibur0w4gv\">\n              <div class=\"label\" id=\"titleSetings\">Notification</div>\n                \n                 <div class=\"bao-list1\">\n                <div class=\"list1\"><li>\n                 21/02/2025: Updated !</li>\n                </div>\n                <div class=\"list1\"><li>\n                 Uploading 18+ sex skins is prohibited. ID will be locked if violated. Thank you !</li>\n                </div>\n                <div class=\"list1\"><li>\n                 Vui lÃ²ng khÃ´ng táº£i lÃªn skin sex 18+. Bá»‹ phÃ¡t hiá»‡n sáº½ bá»‹ khÃ³a. Xin cáº£m Æ¡n !</li>\n                </div>\n                \n                   <div class=\"list1\"><li> Instructions for installing on IOS and iPad New 2024: <a href=\"https://www.youtube.com/watch?v=uyHHXWKHgRw\">https://www.youtube.com/watch?v=uyHHXWKHgRw</a></li></div></div>\n              \n                   ");
      $("#mm-coins-box").replaceWith("<div style=\"margin: 0;\" id=\"mm-coins-box\">\n                \n                <button style='width: 140px;height: 45px;float: right;border-radius: 10px;border: solid #fac 2px;display:none' id='getskin'>Unlock Skins</button>\n                </div>\n                </div>");
      window.multiplier = 0.625;
      window.zoomLevel = 5;
      function _0x3ccd52() {
        window.zoomLevel++;
        window.multiplier *= 0.8;
        changedNf();
        _0x284642();
      }
      function _0x32652c() {
        if (window.zoomLevel > 0) {
          window.zoomLevel--;
          window.multiplier /= 0.8;
          changedNf();
          _0x284642();
        }
      }
      function _0x284642() {
        var _0x55ffb4 = Math.round(window.multiplier / 0.625 * 100);
        _0x55ffb4 = Math.min(100, _0x55ffb4);
        var _0x13f82f = document.getElementById("zoom-percentage");
        _0x13f82f.textContent = _0x55ffb4 + "%";
      }
      document.getElementById("zoom-slider").addEventListener("input", function (_0x57ba8a) {
        const _0x57a4e5 = _0x57ba8a.target.value;
        const _0x2d0d2f = _0x57a4e5;
        window.zoomLevel = Math.round(_0x57a4e5 / 10);
        window.multiplier = _0x2d0d2f / 50 * 0.625;
        changedNf();
        _0x284642();
      });
      window.onwheel = _0x56c569 => {
        _0x56c569.preventDefault();
        if (_0x56c569.deltaY < 0) {
          _0x3ccd52();
        } else {
          _0x32652c();
        }
      };
      $("#settings-Abilityzoom-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          theoKzObjects.eat_animation = 1;
          localStorage.setItem("mySwitch", "on");
        } else {
          console.log("I'm not checked");
          theoKzObjects.eat_animation = 0.005;
          localStorage.setItem("mySwitch", "off");
        }
      });
      $(document).ready(function () {
        var _0x6ff91 = localStorage.getItem("mySwitch");
        if (_0x6ff91 === "on") {
          $("#settings-Abilityzoom-switch").prop("checked", true);
          theoKzObjects.eat_animation = 1;
        } else {
          $("#settings-Abilityzoom-switch").prop("checked", false);
          theoKzObjects.eat_animation = 0.005;
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
        var _0x47fad7 = localStorage.getItem("ModeStremer");
        if (_0x47fad7 === "true") {
          theoKzObjects.ModeStremer = true;
          $("#settings-stremingmode-switch").prop("checked", true);
        } else {
          theoKzObjects.ModeStremer = false;
          $("#settings-stremingmode-switch").prop("checked", false);
        }
      });
      $("#settings-stremingmodebatop-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          theoKzObjects.ModeStremerbatop = true;
          localStorage.setItem("ModeStremerbatop", "true");
        } else {
          console.log("I'm not checked");
          theoKzObjects.ModeStremerbatop = false;
          localStorage.setItem("ModeStremerbatop", "false");
        }
      });
      $(document).ready(function () {
        var _0x48ab69 = localStorage.getItem("ModeStremerbatop");
        if (_0x48ab69 === "true") {
          theoKzObjects.ModeStremerbatop = true;
          $("#settings-stremingmodebatop-switch").prop("checked", true);
        } else {
          theoKzObjects.ModeStremerbatop = false;
          $("#settings-stremingmodebatop-switch").prop("checked", false);
        }
      });
      $("#settings-stremingmodedangaunhien-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          theoKzObjects.ModeStremerdangaunhien = true;
          localStorage.setItem("ModeStremerdangaunhien", "true");
        } else {
          console.log("I'm not checked");
          theoKzObjects.ModeStremerdangaunhien = false;
          localStorage.setItem("ModeStremerdangaunhien", "false");
        }
      });
      $(document).ready(function () {
        var _0x15c26f = localStorage.getItem("ModeStremerdangaunhien");
        if (_0x15c26f === "true") {
          theoKzObjects.ModeStremerdangaunhien = true;
          $("#settings-stremingmodedangaunhien-switch").prop("checked", true);
        } else {
          theoKzObjects.ModeStremerdangaunhien = false;
          $("#settings-stremingmodedangaunhien-switch").prop("checked", false);
        }
      });
      $(document).ready(function () {
        var _0x129aec = localStorage.getItem("ModeStremeranclock");
        if (_0x129aec === "true") {
          theoKzObjects.ModeStremeranclock = true;
          $("#settings-stremingmodeanclock-switch").prop("checked", true);
        } else {
          theoKzObjects.ModeStremeranclock = false;
          $("#settings-stremingmodeanclock-switch").prop("checked", false);
        }
        if (theoKzObjects.ModeStremeranclock) {
          ctx.clockan.width = 100;
          ctx.clockan.height = 100;
          ctx.clockan.x = -50;
          ctx.clockan.y = -50;
        } else {
          ctx.clockan.width = 0;
          ctx.clockan.height = 0;
          ctx.clockan.x = -50;
          ctx.clockan.y = -50;
        }
      });
      $("#settings-stremingmodeanclock-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          theoKzObjects.ModeStremeranclock = true;
          localStorage.setItem("ModeStremeranclock", "true");
        } else {
          console.log("I'm not checked");
          theoKzObjects.ModeStremeranclock = false;
          localStorage.setItem("ModeStremeranclock", "false");
        }
        if (theoKzObjects.ModeStremeranclock) {
          ctx.clockan.width = 100;
          ctx.clockan.height = 100;
          ctx.clockan.x = -50;
          ctx.clockan.y = -50;
        } else {
          ctx.clockan.width = 0;
          ctx.clockan.height = 0;
          ctx.clockan.x = -50;
          ctx.clockan.y = -50;
        }
      });
      $("#settings-stremingmodemuiten-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          theoKzObjects.ModeStremermuiten = true;
          localStorage.setItem("ModeStremermuiten", "true");
        } else {
          console.log("I'm not checked");
          theoKzObjects.ModeStremermuiten = false;
          localStorage.setItem("ModeStremermuiten", "false");
        }
        $("#svhiep").click();
        setTimeout(function () {
          location.reload();
        }, 1000);
      });
      $(document).ready(function () {
        var _0x5abba7 = localStorage.getItem("ModeStremermuiten");
        if (_0x5abba7 === "true") {
          theoKzObjects.ModeStremermuiten = true;
          $("#settings-stremingmodemuiten-switch").prop("checked", true);
        } else {
          theoKzObjects.ModeStremermuiten = false;
          $("#settings-stremingmodemuiten-switch").prop("checked", false);
        }
      });
      $("#settings-stremingmodeemoj-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          theoKzObjects.ModeStremeremoj = true;
          localStorage.setItem("ModeStremeremoj", "true");
        } else {
          console.log("I'm not checked");
          theoKzObjects.ModeStremeremoj = false;
          localStorage.setItem("ModeStremeremoj", "false");
        }
      });
      $(document).ready(function () {
        var _0x5bdfa9 = localStorage.getItem("ModeStremeremoj");
        if (_0x5bdfa9 === "true") {
          theoKzObjects.ModeStremeremoj = true;
          $("#settings-stremingmodeemoj-switch").prop("checked", true);
        } else {
          theoKzObjects.ModeStremeremoj = false;
          $("#settings-stremingmodeemoj-switch").prop("checked", false);
        }
      });
      $("#settings-stremingmodeheadshot-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          theoKzObjects.ModeStremerheadshot = true;
          localStorage.setItem("ModeStremerheadshot", "true");
        } else {
          console.log("I'm not checked");
          theoKzObjects.ModeStremerheadshot = false;
          localStorage.setItem("ModeStremerheadshot", "false");
        }
      });
      $(document).ready(function () {
        var _0x179842 = localStorage.getItem("ModeStremerheadshot");
        if (_0x179842 === "true") {
          theoKzObjects.ModeStremerheadshot = true;
          $("#settings-stremingmodeheadshot-switch").prop("checked", true);
        } else {
          theoKzObjects.ModeStremerheadshot = false;
          $("#settings-stremingmodeheadshot-switch").prop("checked", false);
        }
      });
      $("#settings-stremingmodeheadshot-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          theoKzObjects.ModeStremerheadshot = true;
          localStorage.setItem("ModeStremerheadshot", "true");
        } else {
          console.log("I'm not checked");
          theoKzObjects.ModeStremerheadshot = false;
          localStorage.setItem("ModeStremerheadshot", "false");
        }
      });
      $(document).ready(function () {
        var _0x3882f7 = localStorage.getItem("ModeStremerheadshot");
        if (_0x3882f7 === "true") {
          theoKzObjects.ModeStremerheadshot = true;
          $("#settings-stremingmodeheadshot-switch").prop("checked", true);
        } else {
          theoKzObjects.ModeStremerheadshot = false;
          $("#settings-stremingmodeheadshot-switch").prop("checked", false);
        }
      });
      $("#settings-stremingmodesaveheadshot-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          theoKzObjects.ModeStremersaveheadshot = true;
          localStorage.setItem("ModeStremersaveheadshot", "true");
        } else {
          console.log("I'm not checked");
          theoKzObjects.ModeStremersaveheadshot = false;
          localStorage.setItem("ModeStremersaveheadshot", "false");
        }
        location.reload();
      });
      $(document).ready(function () {
        var _0x52cff1 = localStorage.getItem("ModeStremersaveheadshot");
        if (_0x52cff1 === "true") {
          theoKzObjects.ModeStremersaveheadshot = true;
          $("#settings-stremingmodesaveheadshot-switch").prop("checked", true);
        } else {
          theoKzObjects.ModeStremersaveheadshot = false;
          $("#settings-stremingmodesaveheadshot-switch").prop("checked", false);
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
      for (a = 0; a < _0x547ea4.length; a++) {
        var _0x37e30e = _0x547ea4[a].url;
        var _0x420421 = _0x547ea4[a].nombre;
        let _0x4bc612 = document.createElement("img");
        _0x4bc612.src = _0x37e30e;
        $(".cursor-container").prepend(_0x4bc612);
        $(_0x4bc612).attr("class", "cursor");
        $(_0x4bc612).click(function () {
          let _0x2f0dc9 = $(this).attr("src");
          localStorage.cursorSeleccionado = _0x2f0dc9;
          $("#game-cont").css({
            cursor: "url(" + _0x2f0dc9 + "), default"
          });
          $("#game-canvas").css({
            cursor: "url(" + _0x2f0dc9 + "), default"
          });
          $("body").css({
            cursor: "url(" + _0x2f0dc9 + "), default"
          });
        });
        $("#default-cursor-btn").click(function () {
          delete localStorage.cursorSeleccionado;
          $("#game-cont, #game-canvas, body").css("cursor", "default");
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
      for (a = 0; a < _0x459754.length; a++) {
        var _0x399817 = _0x459754[a].url;
        var _0x53aef = _0x459754[a].nombre;
        let _0x52ff4e = document.createElement("img");
        _0x52ff4e.src = _0x399817;
        $(".background-container").prepend(_0x52ff4e);
        $(_0x52ff4e).attr("class", "background");
        $(_0x52ff4e).attr("value", _0x53aef);
        $(_0x52ff4e).click(function () {
          let _0x4708c2 = $(this).attr("src");
          let _0x1afb8a = $(this).attr("value");
          backgroundIMG = _0x4708c2;
          localStorage.fondoSeleccionado = backgroundIMG;
          alert("You selected the background: " + _0x1afb8a);
          _0x31baa8.q.Cf = new _0x43f045._b(_0x31baa8.q.fn_o(_0x4708c2));
        });
      }
      $(".background-container").prepend("");
      _0x31baa8.q.Cf = new _0x43f045._b(_0x31baa8.q.fn_o(localStorage.fondoSeleccionado));
    }
    function _0xf67625() {
      $(".description-text").replaceWith("<div class=\"description-text\">");
      $(".description-text").prepend("<p id='title'>Wormy Bmw</p>");
      $("#title").after("<div id=\"idwormworld\" style=\"text-align: center\"><div class='logo'><img src='https://haylamday.com/images/hiep_img/logo.png'/></div>\n        <input type=\"text\" value=\"" + theoKzObjects.FB_UserID + "\" style=\"width: 230px;text-align: center;border-radius: 4px;font-size: 20px;padding: 0 6px;background-color: #fff;color: #806102;display: block;box-sizing: border-box;-webkit-appearance: none;outline: 0;border-width: 0;\">\n        <button onclick=\"navigator.clipboard.writeText('" + theoKzObjects.FB_UserID + "').then(()=> alert('You ID " + theoKzObjects.FB_UserID + " copiado! copied!'));\">COPY</button>\n    </div>\n<div></div>\n<div><input type=\"button\" value=\"ACTIVATE ALL\" target=\"_blank\" onclick=\"window.location.href='" + MYPAGE + "'\" style=\"margin-top: 5px; width: 100%\"></div>");
    }
    function _0x65ef84() {
      localStorage.setItem("totalKills", theoKzObjects.totalKills);
      localStorage.setItem("totalHeadshots", theoKzObjects.totalHeadshots);
    }
    function _0x2ca3d2() {
      theoKzObjects.totalKills = parseInt(localStorage.getItem("totalKills")) || 0;
      theoKzObjects.totalHeadshots = parseInt(localStorage.getItem("totalHeadshots")) || 0;
    }
    function _0x244bed(_0x2f4ed2, _0x4fe39f) {
      let _0x12df65 = function (_0x335b38, _0x44a635, _0x542732, _0x306a35) {
        ctx.setCountGame(_0x335b38, _0x44a635, _0x542732, _0x306a35);
      };
      _0x2ca3d2();
      if (_0x2f4ed2 === "count") {
        theoKzObjects.kill = (theoKzObjects.kill || 0) + (_0x4fe39f ? 0 : 1);
        theoKzObjects.headshot = (theoKzObjects.headshot || 0) + (_0x4fe39f ? 1 : 0);
        theoKzObjects.totalKills = theoKzObjects.totalKills + (_0x4fe39f ? 0 : 1);
        theoKzObjects.totalHeadshots = theoKzObjects.totalHeadshots + (_0x4fe39f ? 1 : 0);
        _0x65ef84();
        _0x12df65(theoKzObjects.kill, theoKzObjects.headshot, theoKzObjects.totalKills, theoKzObjects.totalHeadshots);
      }
      if (_0x2f4ed2 === "open") {
        theoKzObjects.kill = 0;
        theoKzObjects.headshot = 0;
        $("#contadorKill_12").show();
        _0x12df65(theoKzObjects.kill, theoKzObjects.headshot, theoKzObjects.totalKills, theoKzObjects.totalHeadshots);
      }
      if (_0x2f4ed2 === "closed") {
        pwrups = {};
      }
      if (_0x2f4ed2 === "cerrar") {
        theoKzObjects.kill = 0;
        theoKzObjects.headshot = 0;
        theoKzObjects.totalKills = 0;
        theoKzObjects.totalHeadshots = 0;
        _0x65ef84();
      }
    }
    if (!Number.prototype.dotFormat) {
      Number.prototype.dotFormat = function () {
        return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      };
    }
    if (!Number.prototype.customFormat) {
      Number.prototype.customFormat = function () {
        if (this >= 1000000) {
          return (this / 1000000).toFixed(1) + "M";
        } else if (this >= 100000) {
          return (this / 1000).toFixed(0) + "K";
        } else {
          return this.dotFormat();
        }
      };
    }
    setTimeout(function () {
      var _0x4bc267 = ["fuck you", "Ä‘á»‹t", "cÃ¡i lá»“n", "chÃ³", "Ä‘Ã©o", "lá»“n", "Ä‘Ã©o", "Ä‘á»‹t", "vÃ£i lá»“n", "cáº·c"];
      const _0x4a7ad6 = document.getElementById("mm-params-nickname");
      const _0x93cfa2 = _0x4a7ad6.value;
      const _0x1e3583 = _0x93cfa2.indexOf("x");
      if (_0x1e3583 !== -1) {
        const _0x262b1b = _0x93cfa2.substring(0, _0x1e3583);
        _0x4a7ad6.value = _0x262b1b;
      }
      ;
      $("#mm-action-play").on("click", function () {
        var _0x4f2e3a = $("#mm-params-nickname").val();
        var _0x126904 = _0x4bc267.some(function (_0x43dcfb) {
          return _0x4f2e3a.toLowerCase().includes(_0x43dcfb.toLowerCase());
        });
        if (_0x126904) {
          $("#mm-params-nickname").val("I Love Viá»‡t Nam");
        }
      });
      $(document).ready(function () {
        $("#getskin").click();
      });
      $("#final-share-fb").css("display", "none");
      $("#unl6wj4czdl84o9b").css("display", "none");
      $("#mm-action-guest").css("display", "none");
      $("#mm-menu-cont").css("display", "block");
      $("#mm-bottom-buttons").css("display", "block");
      $("#mm-player-info").css("display", "block");
      $("#relojHelp").css("position", "absolute");
      $("#relojHelp").css("top", "12px");
      $("#relojHelp").css("left", "5px");
      $("#delete-account-view").css("display", "none");
    }, 3000);
    var _0xf2a0a = function _0x569a61() {
      requestAnimationFrame(_0x569a61);
      _0x3e47d7().Pa();
    };
    _0xf2a0a();
    function _0x576d23() {
      var _0x4f15d3 = _0x1c0232.width();
      var _0x58ccab = _0x1c0232.height();
      var _0x40d5df = _0x97e07e.outerWidth();
      var _0x4af172 = _0x97e07e.outerHeight();
      var _0x3a569b = _0x1ba784.outerHeight();
      var _0x4335cb = _0x24ffb4.outerHeight();
      var _0x1e30aa = Math.min(1, Math.min((_0x58ccab - _0x4335cb - _0x3a569b) / _0x4af172, _0x4f15d3 / _0x40d5df));
      var _0x59c705 = "translate(-50%, -50%) scale(" + _0x1e30aa + ")";
      _0x97e07e.css({
        "-webkit-transform": _0x59c705,
        "-moz-transform": _0x59c705,
        "-ms-transform": _0x59c705,
        "-o-transform": _0x59c705,
        transform: _0x59c705
      });
      _0x3e47d7().Ra();
      window.scrollTo(0, 1);
    }
    var _0x1c0232 = $("body");
    var _0x97e07e = $("#stretch-box");
    var _0x1ba784 = $("#markup-header");
    var _0x24ffb4 = $("#markup-footer");
    _0x576d23();
    $(window).resize(_0x576d23);
  })();
  window.anApp.p.Bc = function () {
    var _0x24f36f = window.anApp.p;
    var _0x1a59f7 = {};
    $.get("https://resources.wormate.io/dynamic/assets/registry.json", function (_0x88a825) {
      _0x1a59f7 = _0x88a825;
      $.ajax({
        url: "https://ii7modysmp-hue.github.io/mod/API/skin1.json",
        method: "GET",
        dataType: "json",
        success: function (_0x292edc) {
          theoKzObjects.visibleSkin = _0x292edc.visibleSkin;
          delete _0x292edc.visibleSkin;
          for (let _0x29af09 in _0x292edc) {
            if (_0x29af09 !== "propertyList") {
              if (Array.isArray(_0x292edc[_0x29af09])) {
                _0x88a825[_0x29af09] = _0x88a825[_0x29af09].concat(_0x292edc[_0x29af09]);
              } else {
                _0x88a825[_0x29af09] = {
                  ..._0x88a825[_0x29af09],
                  ..._0x292edc[_0x29af09]
                };
              }
            }
          }
          theoKzObjects.pL = _0x292edc.propertyList;
          theoKzObjects.idSkin = _0x292edc.skinArrayDict;
          _0x24f36f.Cc(_0x88a825);
        },
        error: function (_0xb15533, _0x5b8c58, _0x5708d1) {
          console.error(_0x5708d1);
          _0x24f36f.Cc(_0x1a59f7);
        }
      });
    });
  };
  $("#background-canvas").replaceWith("<canvas id=\"background-canvas\">\n   </canvas>\n   ");
  $("#popup-login-gg").html("<div class=\"settings-line\" id=\"popup-login-gg1\">Login via Google</div>");
  $("#social-buttons").replaceWith("");
  $("#markup-footer").replaceWith("\n    \n \n\n<footer id=\"markup-footer\">\n            <div class=\"lang-menu\"><button class=\"lang-button\">Language â–´</button>\n            <div class=\"lang-list\"><a hreflang=\"en\" href=\"/\">English</a>\n<a hreflang=\"uk\" href=\"/uk/\">Ð£ÐºÑ€Ð°Ñ—Ð½ÑÑŒÐºÐ°</a>\n<a hreflang=\"de\" href=\"/de/\">Deutsch</a>\n<a hreflang=\"fr\" href=\"/fr/\">FranÃ§ais</a>\n<a hreflang=\"es\" href=\"/es/\">EspaÃ±ol</a>\n</div></div>\n            \n            <a class=\"link\" hreflang=\"en\" href=\"###\">2026 Bmw</a>\n          <a style=\"font-size: 17px;font-weight: 500;color: #1200ff;\"> Absi Iq  <i class='fa fa-heart animated infinite pulse' style='color:red'></i> </a>\n            </footer>\n\n        ");
});
if (!sessionStorage.getItem("visited")) {
  sessionStorage.setItem("visited", "true");
  location.reload(true);
}
function openPopup() {
  var _0x5a031a = document.getElementById("popup");
  var _0x1a97b4 = document.getElementById("overlay");
  _0x5a031a.style.display = "block";
  _0x1a97b4.style.display = "block";
}
function closePopup() {
  var _0x385ae5 = document.getElementById("popup");
  var _0x3da217 = document.getElementById("overlay");
  _0x385ae5.style.display = "none";
  _0x3da217.style.display = "none";
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
getPresedKey = function (_0x56f9af) {
  var _0x3a2d1b = "";
  if (_0x56f9af.keyCode == 9) {
    _0x3a2d1b += "TAB";
  } else if (_0x56f9af.keyCode == 13) {
    _0x3a2d1b += "ENTER";
  } else if (_0x56f9af.keyCode == 16) {
    _0x3a2d1b += "SHIFT";
  } else {
    _0x3a2d1b += String.fromCharCode(_0x56f9af.keyCode);
  }
  return _0x3a2d1b;
};
getStringKey = function (_0x1f79ff) {
  var _0x5234ca = "";
  if (_0x1f79ff == 9) {
    _0x5234ca += "TAB";
  } else if (_0x1f79ff == 13) {
    _0x5234ca += "ENTER";
  } else if (_0x1f79ff == 16) {
    _0x5234ca += "SHIFT";
  } else if (_0x1f79ff == 32) {
    _0x5234ca += "SPACE";
  } else if (_0x1f79ff == 27) {
    _0x5234ca += "ESC";
  } else {
    _0x5234ca += String.fromCharCode(_0x1f79ff);
  }
  return _0x5234ca;
};
isValidHotkey = function (_0x310d64) {
  if (_0x310d64.keyCode >= 48 && _0x310d64.keyCode <= 57 || _0x310d64.keyCode >= 65 && _0x310d64.keyCode <= 90 || _0x310d64.keyCode == 9 || _0x310d64.keyCode == 13 || _0x310d64.keyCode == 16 || _0x310d64.keyCode == 32 || _0x310d64.keyCode == 27) {
    return true;
  } else {
    return false;
  }
};
    
(function () {
    const confettiURL = "https://wormate.io/images/confetti-xmas2022.png";
    const targetId = "game-cont";
    const bgLayerId = "game-wandering-confetti";
    const styleId = "confetti-wander-style";

    const gameCont = document.getElementById(targetId);
    if (!gameCont) return;

    // تجهيز الحاوية الأساسية بدون تخريب النظام القديم
    const gameContStyle = getComputedStyle(gameCont);
    if (gameContStyle.position === "static") {
        gameCont.style.position = "relative";
    }
    gameCont.style.overflow = "hidden";

    // إنشاء أو جلب طبقة الخلفية
    let bgLayer = document.getElementById(bgLayerId);
    if (!bgLayer) {
        bgLayer = document.createElement("div");
        bgLayer.id = bgLayerId;
        bgLayer.style.cssText = [
            "position:absolute",
            "top:0",
            "left:0",
            "width:100%",
            "height:100%",
            "z-index:0",
            "pointer-events:none",
            "overflow:hidden",
            "background: radial-gradient(circle at center, #3a5874 0%, #557e66 35%, #3a2b23 70%, #0e0f18 100%)"
        ].join(";");

        gameCont.prepend(bgLayer);
    } else {
        // تنظيف العناصر القديمة حتى لا تتكرر إذا اشتغلت الدالة مرة ثانية
        bgLayer.innerHTML = "";
        bgLayer.style.background = "radial-gradient(circle at center, #3a5874 0%, #557e66 35%, #3a2b23 70%, #0e0f18 100%)";
    }

    // إضافة CSS مرة واحدة فقط
    if (!document.getElementById(styleId)) {
        const style = document.createElement("style");
        style.id = styleId;
        style.textContent = `
            #${bgLayerId} .wander-item {
                position: absolute;
                left: 0;
                top: 0;
                will-change: transform;
                pointer-events: none;
                animation-name: wanderMove;
                animation-timing-function: linear;
                animation-iteration-count: infinite;
            }

            #${bgLayerId} .wander-sprite {
                width: 100%;
                height: 100%;
                background-repeat: no-repeat;
                background-image: url('${confettiURL}');
                will-change: transform, opacity;
                pointer-events: none;
                animation-name: wanderSpin;
                animation-timing-function: ease-in-out;
                animation-iteration-count: infinite;
                transform-origin: center center;
            }

            @keyframes wanderMove {
                0% {
                    transform: translate3d(0, 0, 0);
                }
                25% {
                    transform: translate3d(50px, -100px, 0);
                }
                50% {
                    transform: translate3d(-30px, -220px, 0);
                }
                75% {
                    transform: translate3d(40px, -360px, 0);
                }
                100% {
                    transform: translate3d(0, -520px, 0);
                }
            }

            @keyframes wanderSpin {
                0% {
                    transform: rotate(0deg) scale(1);
                    opacity: 0.75;
                }
                25% {
                    transform: rotate(90deg) scale(1.05);
                    opacity: 0.9;
                }
                50% {
                    transform: rotate(180deg) scale(0.95);
                    opacity: 0.8;
                }
                75% {
                    transform: rotate(270deg) scale(1.08);
                    opacity: 0.9;
                }
                100% {
                    transform: rotate(360deg) scale(1);
                    opacity: 0.7;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // إعدادات السبرايت شيت
    const frames = 16;
    const spriteSize = 128;
    const cols = 4;
    const rows = 4;

    // عدد العناصر
    const count = 40;

    for (let i = 0; i < count; i++) {
        const conf = document.createElement("div");
        conf.className = "wander-item";

        const sprite = document.createElement("div");
        sprite.className = "wander-sprite";

        // اختيار إطار عشوائي من السبرايت شيت
        const frameIndex = Math.floor(Math.random() * frames);
        const col = frameIndex % cols;
        const row = Math.floor(frameIndex / cols);
        const xOffset = col * spriteSize;
        const yOffset = row * spriteSize;

        // حجم العنصر
        const size = Math.random() * 30 + 25; // 25 - 55
        conf.style.width = size + "px";
        conf.style.height = size + "px";

        // موقع أولي عشوائي
        conf.style.left = Math.random() * 100 + "%";
        conf.style.top = (Math.random() * 100 + 100) + "%";

        // مدة وسرعة ودلاي
        const moveDuration = Math.random() * 10 + 15;   // 15 - 25s
        const spinDuration = Math.random() * 6 + 6;     // 6 - 12s
        const delay = Math.random() * -25;

        conf.style.animationDuration = moveDuration + "s";
        conf.style.animationDelay = delay + "s";

        sprite.style.animationDuration = spinDuration + "s";
        sprite.style.animationDelay = delay + "s";

        // Scale ثابتة لكل عنصر بدون ما تنكسر من الأنيميشن
        const scale = Math.random() * 0.5 + 0.5;
        sprite.style.width = "100%";
        sprite.style.height = "100%";
        sprite.style.backgroundSize = `${spriteSize * cols}px ${spriteSize * rows}px`;
        sprite.style.backgroundPosition = `-${xOffset}px -${yOffset}px`;
        sprite.style.transform = `scale(${scale})`;

        // حتى ما ينلغي scale بسبب الأنيميشن، نخليه على wrapper داخلي إضافي
        const scaleWrap = document.createElement("div");
        scaleWrap.style.width = "100%";
        scaleWrap.style.height = "100%";
        scaleWrap.style.transform = `scale(${scale})`;
        scaleWrap.style.transformOrigin = "center center";
        scaleWrap.appendChild(sprite);

        conf.appendChild(scaleWrap);
        bgLayer.appendChild(conf);
    }
})();


/* ===== Wormy BMW Optimization Patch ===== */
(function () {
  console.log("Optimization Patch Loaded ✅");

  /* 1) تقليل استدعاء Pa (تحسين FPS) */
  try {
    const LOW_DEVICE_MODE =
      /android|iphone|ipad|mobile/i.test(navigator.userAgent) ||
      (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4);

    let __lastFrameTime = 0;
    const __frameInterval = LOW_DEVICE_MODE ? 33 : 16;

    const originalAppGetter = typeof _0x3e47d7 === "function" ? _0x3e47d7 : null;

    if (originalAppGetter) {
      (function loop(now) {
        requestAnimationFrame(loop);

        if (now - __lastFrameTime < __frameInterval) return;
        __lastFrameTime = now;

        try {
          const app = originalAppGetter();
          if (app && typeof app.Pa === "function") {
            app.Pa();
          }
        } catch (e) {}
      })(performance.now());
    }
  } catch (e) {}

  /* 2) تعطيل console.log الثقيل */
  try {
    const oldLog = console.log;
    console.log = function (...args) {
      if (
        typeof args[0] === "object" ||
        (args[0] && args[0].angle) ||
        (args[0] && args[0].radian)
      ) {
        return;
      }
      oldLog.apply(console, args);
    };
  } catch (e) {}

  /* 3) تقليل ضغط joystick */
  try {
    const originalCreate = window.nipplejs && nipplejs.create;

    if (originalCreate) {
      nipplejs.create = function (...args) {
        const joystick = originalCreate.apply(this, args);

        let lastMove = 0;

        joystick.on("move", function (evt, data) {
          const now = Date.now();
          if (now - lastMove < 50) return; // تقليل التحديث
          lastMove = now;

          if (!data || !data.angle) return;

          try {
            if (window.theoEvents && theoEvents.eventoPrincipal) {
              theoEvents.eventoPrincipal.sk =
                data.angle.radian <= Math.PI
                  ? data.angle.radian * -1
                  : Math.PI - (data.angle.radian - Math.PI);
            }
          } catch (e) {}
        });

        return joystick;
      };
    }
  } catch (e) {}

  /* 4) كاش PIXI.TextStyle */
  try {
    window.pwrTextStyles = window.pwrTextStyles || {};

    window.getPwrTextStyle = function (_0xindex, _0xcolor) {
      if (!pwrTextStyles[_0xindex]) {
        pwrTextStyles[_0xindex] = new PIXI.TextStyle({
          align: "center",
          fill: _0xcolor,
          fontSize: 25,
          lineJoin: "round",
          whiteSpace: "normal",
          wordWrap: true,
          fontFamily: "vuonghiep",
          fontWeight: "bold"
        });
      }
      return pwrTextStyles[_0xindex];
    };
  } catch (e) {}

  /* 5) منع تحديث النص إذا ما تغير */
  try {
    const oldText = PIXI.Text.prototype.updateText;
    PIXI.Text.prototype.updateText = function () {
      if (this._lastText === this.text) return;
      this._lastText = this.text;
      return oldText.call(this);
    };
  } catch (e) {}

})();

(function () {
  "use strict";

  // ==============================
  //  Skin Strip Auto-Normalizer
  //  يحول 10 / 11 أجزاء إلى 9 أجزاء
  // ==============================

  const TARGET_SEGMENTS = 9;
  const ALLOWED_SOURCE_SEGMENTS = [9, 10, 11];

  function isProbablySkinUrl(url) {
    if (!url || typeof url !== "string") return false;
    return /skin|texture|custom/i.test(url);
  }

  function loadImage(src) {
    return new Promise(function (resolve, reject) {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = function () {
        resolve(img);
      };
      img.onerror = function () {
        reject(new Error("Failed to load image: " + src));
      };
      img.src = src;
    });
  }

  function detectSegmentCount(img) {
    const w = img.naturalWidth || img.width;
    const h = img.naturalHeight || img.height;
    if (!w || !h) return null;

    // أفضل تخمين: strip أفقي
    for (const count of ALLOWED_SOURCE_SEGMENTS) {
      const partW = w / count;
      if (Number.isInteger(partW) && Math.abs(partW - h) <= 6) {
        return count;
      }
    }

    // fallback تقريبي
    const rough = Math.round(w / h);
    if (ALLOWED_SOURCE_SEGMENTS.indexOf(rough) !== -1) return rough;

    return null;
  }

  function normalizeStripTo9(img, sourceCount) {
    const srcW = img.naturalWidth || img.width;
    const srcH = img.naturalHeight || img.height;
    const srcPartW = Math.floor(srcW / sourceCount);
    const outPartW = srcH; // نخلي كل جزء مربع
    const outW = outPartW * TARGET_SEGMENTS;
    const outH = srcH;

    const canvas = document.createElement("canvas");
    canvas.width = outW;
    canvas.height = outH;
    const ctx = canvas.getContext("2d");

    // تحسين الرسم
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.clearRect(0, 0, outW, outH);

    // إعادة توزيع 10/11 جزء إلى 9
    for (let i = 0; i < TARGET_SEGMENTS; i++) {
      const srcIndex = Math.round(i * (sourceCount - 1) / (TARGET_SEGMENTS - 1));
      const sx = srcIndex * srcPartW;

      ctx.drawImage(
        img,
        sx, 0, srcPartW, srcH,
        i * outPartW, 0, outPartW, outH
      );
    }

    return canvas.toDataURL("image/png");
  }

  const normalizedCache = new Map();

  async function normalizeSkinUrlIfNeeded(url) {
    if (!isProbablySkinUrl(url)) return url;
    if (normalizedCache.has(url)) return normalizedCache.get(url);

    try {
      const img = await loadImage(url);
      const count = detectSegmentCount(img);

      if (!count || count === TARGET_SEGMENTS) {
        normalizedCache.set(url, url);
        return url;
      }

      if (ALLOWED_SOURCE_SEGMENTS.indexOf(count) === -1) {
        normalizedCache.set(url, url);
        return url;
      }

      const normalized = normalizeStripTo9(img, count);
      normalizedCache.set(url, normalized);

      console.log("[SkinPatch] Converted skin strip:", {
        original: url,
        sourceSegments: count,
        targetSegments: TARGET_SEGMENTS
      });

      return normalized;
    } catch (err) {
      console.warn("[SkinPatch] Normalize failed:", url, err);
      normalizedCache.set(url, url);
      return url;
    }
  }

  async function patchTextureDict() {
    try {
      if (
        !window.theoKzObjects ||
        !window.theoKzObjects.textureDict ||
        typeof window.theoKzObjects.textureDict !== "object"
      ) {
        return;
      }

      const dict = window.theoKzObjects.textureDict;
      const keys = Object.keys(dict);

      for (const key of keys) {
        const item = dict[key];
        if (!item || typeof item !== "object") continue;
        if (!item.relativePath || typeof item.relativePath !== "string") continue;
        if (!isProbablySkinUrl(item.relativePath)) continue;

        item.relativePath = await normalizeSkinUrlIfNeeded(item.relativePath);
      }

      console.log("[SkinPatch] textureDict patched.");
    } catch (e) {
      console.warn("[SkinPatch] patchTextureDict error:", e);
    }
  }

  // بعض الأنظمة تحمل الصور قبل اكتمال الكائنات
  // لذلك نعيد المحاولة أكثر من مرة
  let tries = 0;
  const maxTries = 40;

  const timer = setInterval(async function () {
    tries++;

    if (
      window.theoKzObjects &&
      window.theoKzObjects.textureDict
    ) {
      clearInterval(timer);
      await patchTextureDict();
    }

    if (tries >= maxTries) {
      clearInterval(timer);
    }
  }, 500);

})();
