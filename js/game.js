var TRZM = 1;
var SITE_XTHOST = "https://wormatefriendsglobal.com";
window.detectLog = null;
const _wrmxt = {
  BETAisSkinCustom(p2) {
    var v = /[a-zA-Z]/;
    return typeof p2 === "string" && v.test(p2);
  },
  testSkinCustom: function (p3) {
    if (_wrmxt.BETAisSkinCustom(p3)) {
      return 34 || 33;
    } else {
      return p3;
    }
  },
  testSkinMod: function (p4) {
    return p4 >= 399 && p4 < 999;
  },
  testWear: function (p5) {
    return p5 >= 399 && p5 < 999;
  },
  isNumberValid: function (p6) {
    return p6 !== "" && p6 !== null && p6 !== undefined && !isNaN(p6);
  },
  validInput: function (p7) {
    if (!_wrmxt.testSkinMod(p7) && !_wrmxt.BETAisSkinCustom(p7)) {
      return p7;
    }
    try {
      let v2 = $("#inputReplaceSkin").val();
      return encodeURI(_wrmxt.isNumberValid(v2) ? v2 : 35);
    } catch (e2) {
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
  let v3 = false;
  theoKzObjects.mobile = false;
  var v4 = navigator.userAgent || navigator.vendor || window.opera;
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(v4) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(v4.substr(0, 4))) {
    theoKzObjects.mobile = true;
    v3 = true;
  }
  return v3;
};
const RechekingPhone = function () {
  let v5 = false;
  var v6 = navigator.userAgent || navigator.vendor || window.opera;
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(v6) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(v6.substr(0, 4))) {
    v5 = true;
  }
  return v5;
};
const loadJoy = function (p8) {
  let v7;
  try {
    console.log(p8);
    theoKzObjects.gamePad ||= theoEvents.joystick;
    if (RechekingPhone() && (p8 || theoKzObjects.gamePad.checked)) {
      v7 = nipplejs.create(theoKzObjects.gamePad);
      v7.on("move", function (p9, p10) {
        theoEvents.eventoPrincipal.sk = p10.angle.radian <= Math.PI ? p10.angle.radian * -1 : Math.PI - (p10.angle.radian - Math.PI);
        console.log(p10);
      });
    }
    return v7;
  } catch (e3) {
    console.log(e3);
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
  await fetch("https://wormatefriendsglobal.com/api/users.php").then(p15 => p15.json()).then(p16 => {
    if (p16.success) {
      let v19 = p16.Users;
      clientes.clientesActivos = v19.filter(p17 => {
        return p17.cliente_ID;
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
  await fetch("https://wormatefriendsglobal.com/api/server.php").then(p18 => p18.json()).then(p19 => {
    if (p19.success) {
      let v20 = p19.servers;
      servers.Api_listServer = v20.filter(p20 => {
        return p20.serverUrl;
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
ctx.borderurl = PIXI.Texture.fromImage("i.imgur.com/nwJih2e.png");
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
ctx.setServer = function (p21) {
  ctx.value_server.text = p21 || "WFC";
};
ctx.setCountGame = function (p22, p23, p24, p25) {
  ctx.value1_hs.text = p23;
  ctx.value2_hs.text = p25;
  ctx.value1_kill.text = p22;
  ctx.value2_kill.text = p24;
};
"use strict";
var _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (p26) {
  return typeof p26;
} : function (p27) {
  if (p27 && typeof Symbol == "function" && p27.constructor === Symbol && p27 !== Symbol.prototype) {
    return "symbol";
  } else {
    return typeof p27;
  }
};
var GoogleAuth;
(function () {
  try {
    console.log(function (p28, p29) {
      for (var vLN02 = 0; vLN02 < p29.length; vLN02 += 2) {
        p28 = p28.replaceAll(p29[vLN02], p29[vLN02 + 1]);
      }
      return p28;
    }("N-syo.632.oyhs`2./oSo+-2:dhydMdy/32/o+`3:o/62`/o+. .+osYYyso+-.osyQSs6662NyW.63 yW:`+QQ+ -Ms-.:ymmy3+Yo``+Y:6.Qs-+WWhYs:sHhyyHys/6662NoWs63 yW:+Ss:.-+Ss:`M-3.M` .YyySYys32`QSs.2``-Hh-32sH-66 `..3 `..`3N.Wh.63yW-Ss.3`Ss+`Mh/:+hmmo2/yy++yys//Y-3 oS/`Sso`3 ohy6oH.3..6 -Hh. -+Qs/ N /W+62`Wo:Ss32Sso.MMmd+.3syy` .-` :Y+3+Ss//Q+3 +H`32sHhsyHho6-Hh`:S+--+S+N2+W` `+y+2+W.:Ss.3.Ss+/M-:ymmh.2-Y.32+Ys2+Ss+o+/Q-3oH/32Hho-://:`6 Hh`So3`SsN3oHhs-sHhsoW/ `Sso:-:Q.hM-2ymmh. /Yo`3 sYy./Q`3+Sso2`W`3`Hh.66`Hh:So3-SoN3 +Why+yWh/3-oQSso-`Mm:2/Md+/Yy+3 oYy:Q/3 `Q. -W-3`WsYys/`+oo.:Hh//So//Ss-N32-sys:3:S+.6-/+++:-3oHo3 ohdh/`+So:3 .+S/`/oo:6.+s+` `+yyo`3 +yQYs: +oo..shy. -+oSo/. NN", ["W", "hhhh", "Q", "ssss", "M", "mmm", "Y", "yyy", "H", "hh", "S", "ss", "6", "      ", "3", "   ", "2", "  ", "N", "\n"]));
  } catch (e5) {}
})();
window.addEventListener("load", function () {
  function f() {
    (function (p30, p31, p32) {
      function f2(p33, p34) {
        return (p33 === undefined ? "undefined" : _typeof(p33)) === p34;
      }
      function f3() {
        if (typeof p31.createElement != "function") {
          return p31.createElement(arguments[0]);
        } else if (v23) {
          return p31.createElementNS.call(p31, "http://www.w3.org/2000/svg", arguments[0]);
        } else {
          return p31.createElement.apply(p31, arguments);
        }
      }
      var vA2 = [];
      var vA3 = [];
      var vO = {
        _version: "3.3.1",
        _config: {
          classPrefix: "",
          enableClasses: true,
          enableJSClass: true,
          usePrefixes: true
        },
        _q: [],
        on: function (p35, p36) {
          var vThis = this;
          setTimeout(function () {
            p36(vThis[p35]);
          }, 0);
        },
        addTest: function (p37, p38, p39) {
          vA3.push({
            name: p37,
            fn: p38,
            options: p39
          });
        },
        addAsyncTest: function (p40) {
          vA3.push({
            name: null,
            fn: p40
          });
        }
      };
      function f4() {}
      f4.prototype = vO;
      f4 = new f4();
      var v21 = false;
      try {
        v21 = "WebSocket" in p30 && p30.WebSocket.CLOSING === 2;
      } catch (e6) {}
      f4.addTest("websockets", v21);
      var v22 = p31.documentElement;
      var v23 = v22.nodeName.toLowerCase() === "svg";
      f4.addTest("canvas", function () {
        var vF3 = f3("canvas");
        return !!vF3.getContext && !!vF3.getContext("2d");
      });
      f4.addTest("canvastext", function () {
        return f4.canvas !== false && typeof f3("canvas").getContext("2d").fillText == "function";
      });
      (function () {
        var v24;
        var v25;
        var v26;
        var v27;
        var v28;
        var v29;
        var v30;
        for (var v31 in vA3) {
          if (vA3.hasOwnProperty(v31)) {
            v24 = [];
            v25 = vA3[v31];
            if (v25.name && (v24.push(v25.name.toLowerCase()), v25.options && v25.options.aliases && v25.options.aliases.length)) {
              for (v26 = 0; v26 < v25.options.aliases.length; v26++) {
                v24.push(v25.options.aliases[v26].toLowerCase());
              }
            }
            v27 = f2(v25.fn, "function") ? v25.fn() : v25.fn;
            v28 = 0;
            for (; v28 < v24.length; v28++) {
              v29 = v24[v28];
              v30 = v29.split(".");
              if (v30.length === 1) {
                f4[v30[0]] = v27;
              } else {
                if (!!f4[v30[0]] && !(f4[v30[0]] instanceof Boolean)) {
                  f4[v30[0]] = new Boolean(f4[v30[0]]);
                }
                f4[v30[0]][v30[1]] = v27;
              }
              vA2.push((v27 ? "" : "no-") + v30.join("-"));
            }
          }
        }
      })();
      (function (p41) {
        var v32 = v22.className;
        var v33 = f4._config.classPrefix || "";
        if (v23) {
          v32 = v32.baseVal;
        }
        if (f4._config.enableJSClass) {
          var v34 = new RegExp("(^|\\s)" + v33 + "no-js(\\s|$)");
          v32 = v32.replace(v34, "$1" + v33 + "js$2");
        }
        if (f4._config.enableClasses) {
          v32 += " " + v33 + p41.join(" " + v33);
          if (v23) {
            v22.className.baseVal = v32;
          } else {
            v22.className = v32;
          }
        }
      })(vA2);
      delete vO.addTest;
      delete vO.addAsyncTest;
      for (var vLN03 = 0; vLN03 < f4._q.length; vLN03++) {
        f4._q[vLN03]();
      }
      p30.Modernizr = f4;
    })(window, document);
    return Modernizr.websockets && Modernizr.canvas && Modernizr.canvastext;
  }
  function f5(p42, p43, p44) {
    const vA4 = [38, 38, 38, 120, 38, 25, 38];
    const vA5 = ["#FFD500", "#FFC75A", "#00B2ED", "#FF4544", "#0094D7", "#CCCF81", "#ff0999"];
    let v35 = vA4[p43] - parseInt((p44 == 0.99 ? 1 : p44) * vA4[p43] / 1);
    const v36 = new PIXI.TextStyle({
      align: "center",
      fill: vA5[p43],
      fontSize: 25,
      lineJoin: "round",
      whiteSpace: "normal",
      wordWrap: true,
      dropShadow: true,
      dropShadowBlur: 6,
      fontFamily: "vuonghiep",
      fontWeight: "bold"
    });
    let v37 = "pwr_clock" + p43;
    if (!pwrups[v37] && vA4[p43] === v35) {
      pwrups[v37] = new PIXI.Text(v35, v36);
      pwrups[v37].y = 61;
      p42.Tf[p43].addChild(pwrups[v37]);
    }
    if (pwrups[v37]) {
      pwrups[v37].x = v35 >= 100 ? 11 : v35 >= 10 ? 18 : 26;
      pwrups[v37].text = v35;
      if (v35 === 0) {
        delete pwrups[v37];
      }
    }
  }
  document.getElementById("game-wrap").style.display = "block";
  if (!f()) {
    document.getElementById("error-view").style.display = "block";
    return;
  }
  (function () {
    function f6() {
      return window.anApp = vUndefined2;
    }
    function f7(p45) {
      const v38 = p45 + "=";
      const v39 = document.cookie.split(";");
      for (let vLN04 = 0; vLN04 < v39.length; vLN04++) {
        let v40 = v39[vLN04];
        while (v40.charAt(0) === " ") {
          v40 = v40.substring(1);
        }
        if (v40.indexOf(v38) === 0) {
          return v40.substring(v38.length, v40.length);
        }
      }
      return "";
    }
    function f8(p46, p47, p48) {
      var v41 = new Date();
      v41.setTime(v41.getTime() + p48 * 86400000);
      var v42 = "expires=" + v41.toUTCString();
      document.cookie = p46 + "=" + p47 + "; " + v42 + "; path=/";
    }
    function f9(p49) {
      return window.I18N_MESSAGES[p49];
    }
    function f10(p50) {
      if (p50[v112]) {
        return p50[v112];
      } else if (p50.en) {
        return p50.en;
      } else {
        return p50.x;
      }
    }
    function f11(p51) {
      var v43 = (Math.floor(p51) % 60).toString();
      var v44 = (Math.floor(p51 / 60) % 60).toString();
      var v45 = (Math.floor(p51 / 3600) % 24).toString();
      var v46 = Math.floor(p51 / 86400).toString();
      var vF9 = f9("util.time.days");
      var vF92 = f9("util.time.hours");
      var vF93 = f9("util.time.min");
      var vF94 = f9("util.time.sec");
      if (v46 > 0) {
        return v46 + " " + vF9 + " " + v45 + " " + vF92 + " " + v44 + " " + vF93 + " " + v43 + " " + vF94;
      } else if (v45 > 0) {
        return v45 + " " + vF92 + " " + v44 + " " + vF93 + " " + v43 + " " + vF94;
      } else if (v44 > 0) {
        return v44 + " " + vF93 + " " + v43 + " " + vF94;
      } else {
        return v43 + " " + vF94;
      }
    }
    function f12(p52) {
      if (p52.includes("href")) {
        return p52.replaceAll("href", "target=\"_black\" href");
      } else {
        return p52;
      }
    }
    function f13(p53, p54, p55) {
      var v47 = document.createElement("script");
      var v48 = true;
      if (p54) {
        v47.id = p54;
      }
      v47.async = "async";
      v47.type = "text/javascript";
      v47.src = p53;
      if (p55) {
        v47.onload = v47.onreadystatechange = function () {
          v48 = false;
          try {
            p55();
          } catch (e7) {
            console.log(e7);
          }
          v47.onload = v47.onreadystatechange = null;
        };
      }
      (document.head || document.getElementsByTagName("head")[0]).appendChild(v47);
    }
    function f14(p56, p57) {
      var vP57 = p57;
      vP57.prototype = Object.create(p56.prototype);
      vP57.prototype.constructor = vP57;
      vP57.parent = p56;
      return vP57;
    }
    function f15(p58) {
      p58 %= v116;
      if (p58 < 0) {
        return p58 + v116;
      } else {
        return p58;
      }
    }
    function f16(p59, p60, p61) {
      return f17(p61, p59, p60);
    }
    function f17(p62, p63, p64) {
      if (p62 > p64) {
        return p64;
      } else if (p62 < p63) {
        return p63;
      } else if (Number.isFinite(p62)) {
        return p62;
      } else {
        return (p63 + p64) * 0.5;
      }
    }
    function f18(p65, p66, p67, p68) {
      if (p66 > p65) {
        return Math.min(p66, p65 + p67 * p68);
      } else {
        return Math.max(p66, p65 - p67 * p68);
      }
    }
    function f19(p69, p70, p71, p72, p73) {
      return p70 + (p69 - p70) * Math.pow(1 - p72, p71 / p73);
    }
    function f20(p74, p75, p76) {
      return p74 * (1 - p76) + p75 * p76;
    }
    function f21(p77, p78, p79, p80) {
      var vP79 = p79;
      var vP78 = p78;
      var v49 = p78 + p80;
      if (p77 == null) {
        throw new TypeError("this is null or not defined");
      }
      var v50 = p77.length >>> 0;
      var v51 = vP79 >> 0;
      var v52 = v51 < 0 ? Math.max(v50 + v51, 0) : Math.min(v51, v50);
      var v53 = vP78 >> 0;
      var v54 = v53 < 0 ? Math.max(v50 + v53, 0) : Math.min(v53, v50);
      var v55 = v49 === undefined ? v50 : v49 >> 0;
      var v56 = v55 < 0 ? Math.max(v50 + v55, 0) : Math.min(v55, v50);
      var v57 = Math.min(v56 - v54, v50 - v52);
      var vLN1 = 1;
      for (v54 < v52 && v52 < v54 + v57 && (vLN1 = -1, v54 += v57 - 1, v52 += v57 - 1); v57 > 0;) {
        if (v54 in p77) {
          p77[v52] = p77[v54];
        } else {
          delete p77[v52];
        }
        v54 += vLN1;
        v52 += vLN1;
        v57--;
      }
      return p77;
    }
    function f22(p81) {
      return p81.getContext("2d");
    }
    function f23(p82) {
      if (p82.parent != null) {
        p82.parent.removeChild(p82);
      }
    }
    function f24(p83) {
      return p83[parseInt(Math.random() * p83.length)];
    }
    function f25() {
      return Math.random().toString(36).substring(2, 15);
    }
    function f26(p84, p85, p86) {
      var v58 = (1 - Math.abs(p86 * 2 - 1)) * p85;
      var v59 = v58 * (1 - Math.abs(p84 / 60 % 2 - 1));
      var v60 = p86 - v58 / 2;
      if (p84 >= 0 && p84 < 60) {
        return [v60 + v58, v60 + v59, v60 + 0];
      } else if (p84 >= 60 && p84 < 120) {
        return [v60 + v59, v60 + v58, v60 + 0];
      } else if (p84 >= 120 && p84 < 180) {
        return [v60 + 0, v60 + v58, v60 + v59];
      } else if (p84 >= 180 && p84 < 240) {
        return [v60 + 0, v60 + v59, v60 + v58];
      } else if (p84 >= 240 && p84 < 300) {
        return [v60 + v59, v60 + 0, v60 + v58];
      } else {
        return [v60 + v58, v60 + 0, v60 + v59];
      }
    }
    function f27() {
      function f28() {
        let v61 = theoKzObjects.adblock ? 1 : 5;
        $("#adbl-1").text(f9("index.game.antiadblocker.msg1"));
        $("#adbl-2").text(f9("index.game.antiadblocker.msg2"));
        $("#adbl-3").text(f9("index.game.antiadblocker.msg3"));
        $("#adbl-4").text(f9("index.game.antiadblocker.msg4").replace("{0}", 10));
        $("#adbl-continue span").text(f9("index.game.antiadblocker.continue"));
        $("#adbl-continue").hide();
        $("#" + vLSJDHnkHtYwyXyVgG9).fadeIn(500);
        var vV61 = v61;
        for (var vLN05 = 0; vLN05 < v61; vLN05++) {
          setTimeout(function () {
            vV61--;
            $("#adbl-4").text(f9("index.game.antiadblocker.msg4").replace("{0}", vV61));
            if (vV61 === 0) {
              console.log("aipAABC");
              try {
                ga("send", "event", "antiadblocker", window.runtimeHash + "_complete");
              } catch (e8) {}
              $("#adbl-continue").fadeIn(200);
            }
          }, (vLN05 + 1) * 1000);
        }
      }
      var v62 = false;
      function f29() {}
      var vO2 = {};
      var vLSJDHnkHtYwyXyVgG9 = "JDHnkHtYwyXyVgG9";
      $("#adbl-continue").click(function () {
        $("#" + vLSJDHnkHtYwyXyVgG9).fadeOut(500);
        f29(false);
      });
      vO2.a = function (p87) {
        f29 = p87;
        if (!v62) {
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
                AIP_COMPLETE: function (p88) {
                  console.log("aipC");
                  f29(true);
                  $("#1eaom01c3pxu9wd3").hide();
                  $("#" + vLSJDHnkHtYwyXyVgG9).hide();
                  try {
                    ga("send", "event", "preroll", window.runtimeHash + "_complete");
                  } catch (e9) {}
                },
                AIP_REMOVE: function () {}
              });
            });
            v62 = true;
          } catch (e10) {}
        }
      };
      vO2.b = function () {
        if (aiptag.adplayer !== undefined) {
          console.log("aipS");
          try {
            ga("send", "event", "preroll", window.runtimeHash + "_request");
          } catch (e11) {}
          f28();
        } else {
          console.log("aipAABS");
          try {
            ga("send", "event", "antiadblocker", window.runtimeHash + "_start");
          } catch (e12) {}
          f28();
        }
      };
      return vO2;
    }
    function f30(p89, p90) {
      var v$ = $("#" + p89);
      var vP90 = p90;
      var vO3 = {};
      var v63 = false;
      vO3.a = function () {
        if (!v63) {
          v$.empty();
          v$.append("<div id='" + vP90 + "'></div>");
          try {
            try {
              ga("send", "event", "banner", window.runtimeHash + "_display");
            } catch (e13) {}
            aiptag.cmd.display.push(function () {
              aipDisplayTag.display(vP90);
            });
            v63 = true;
          } catch (e14) {}
        }
      };
      vO3.c = function () {
        try {
          try {
            ga("send", "event", "banner", window.runtimeHash + "_refresh");
          } catch (e15) {}
          aiptag.cmd.display.push(function () {
            aipDisplayTag.display(vP90);
          });
        } catch (e16) {}
      };
      return vO3;
    }
    function f31() {
      function f32(p91) {
        var v64 = p91 + Math.floor(Math.random() * 65535) * 37;
        f8(vF12.d, v64, 30);
      }
      function f33() {
        return parseInt(f7(vF12.d)) % 37;
      }
      return function () {
        var vF33 = f33();
        console.log("init1 pSC: " + vF33);
        if (!(vF33 >= 0) || !(vF33 < v521.e)) {
          vF33 = Math.max(0, v521.e - 2);
          console.log("init2 pSC: " + vF33);
        }
        var vO4 = {};
        vUndefined2 = vO4;
        vO4.f = v521;
        vO4.g = false;
        vO4.i = Date.now();
        vO4.j = 0;
        vO4.k = 0;
        vO4.l = null;
        vO4.m = vUndefined;
        vO4.n = v112;
        vO4.o = null;
        vO4.p = null;
        vO4.q = null;
        vO4.r = null;
        vO4.s = null;
        vO4.t = null;
        vO4.u = null;
        try {
          if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (p92) {
              if (p92.coords !== undefined) {
                var v65 = p92.coords;
                if (v65.latitude !== undefined && v65.longitude !== undefined) {
                  vO4.l = p92;
                }
              }
            }, function (p93) {});
          }
        } catch (e17) {}
        vO4.v = function () {
          vO4.p = new vF6();
          vO4.q = new vF35();
          vO4.r = new vF8();
          vO4.s = new vF36();
          vO4.t = new vF31();
          vO4.u = new vF38();
          vO4.o = new f34();
          vO4.o.z = new vF25(vO4.o);
          vO4.a();
        };
        vO4.a = function () {
          try {
            ga("send", "event", "app", window.runtimeHash + "_init");
          } catch (e18) {}
          vO4.o.A = function () {
            vO4.o.B();
          };
          vO4.o.C = function () {
            var v66 = vO4.s.F.D();
            try {
              ga("send", "event", "game", window.runtimeHash + "_start", v66);
            } catch (e19) {}
            vO4.r.G(vF8.AudioState.H);
            vO4.s.I(vO4.s.H.J());
          };
          vO4.o.B = function () {
            try {
              ga("send", "event", "game", window.runtimeHash + "_end");
            } catch (e20) {}
            if ($("body").height() >= 430) {
              vO4.f.K.c();
            }
            vO4.p.L();
            (function () {
              var v67 = Math.floor(vO4.o.N.M);
              var v68 = vO4.o.O;
              if (vO4.u.P()) {
                vO4.u.Q(function () {
                  vO4.R(v67, v68);
                });
              } else {
                vO4.R(v67, v68);
              }
            })();
          };
          vO4.o.S = function (p94) {
            p94(vO4.s.H.T(), vO4.s.H.U());
          };
          vO4.u.V(function () {
            if (vO4.p.W) {
              vO4.r.G(vF8.AudioState.F);
              vO4.s.I(vO4.s.F);
            }
            if (vO4.u.P()) {
              try {
                var v69 = vO4.u.X();
                ga("set", "userId", v69);
              } catch (e21) {}
            }
            if (vO4.Y() && vO4.u.P() && !vO4.u.Z()) {
              vO4.$(false, false);
              vO4.s.aa._(new vF85());
            } else {
              vO4.ba(true);
            }
          });
          vO4.p.ca(function () {
            vO4.r.G(vF8.AudioState.F);
            vO4.s.I(vO4.s.F);
          });
          vO4.q.a(function () {
            vO4.o.a();
            vO4.r.a();
            vO4.s.a();
            vO4.t.a();
            vO4.p.a();
            vO4.u.a();
            if (vO4.Y() && !vO4.Z()) {
              vO4.s.aa._(new vF85());
            } else {
              vO4.ba(true);
            }
          });
        };
        vO4.da = function (p95) {
          if (vO4.u.P()) {
            var v70 = vO4.u.ea();
            $.get(vAtob + "/pub/wuid/" + v70 + "/consent/change?value=" + encodeURI(p95), function (p96) {});
          }
        };
        vO4.fa = function (p97) {
          var v71 = vO4.u.ea();
          var v72 = vO4.s.F.D();
          var v73 = vO4.s.F.ga();
          var v74 = vO4.t.ha(vF32.ia);
          var v75 = vO4.t.ha(vF32.ja);
          var v76 = vO4.t.ha(vF32.ka);
          var v77 = vO4.t.ha(vF32.la);
          var v78 = vO4.t.ha(vF32.ma);
          var vLN06 = 0;
          if (vO4.l != null) {
            var v79 = vO4.l.coords.latitude;
            var v80 = vO4.l.coords.longitude;
            vLN06 = Math.max(0, Math.min(32767, (v79 + 90) / 180 * 32768)) << 1 | 1 | Math.max(0, Math.min(65535, (v80 + 180) / 360 * 65536)) << 16;
          }
          _wrmxt.testSkinCustom(v74);
          let v81 = "x" + (v74 > 9999 ? "0000" : v74.toString().padStart(4, 0)) + (v78 > 999 ? "000" : v78.toString().padStart(3, 0)) + (v75 > 999 ? "000" : v75.toString().padStart(3, 0)) + (v76 > 999 ? "000" : v76.toString().padStart(3, 0));
          v73 = (v73.length >= 32 ? v73.substr(0, 16) : v73.substr(0, 16).padEnd(16)) + v81;
          v73 = v73.trim();
          console.log(v73);
          var v82 = vAtob + "/pub/wuid/" + v71 + "/start?gameMode=" + encodeURI(v72) + "&gh=" + vLN06 + "&nickname=" + encodeURI(v73) + "&skinId=" + _wrmxt.validInput(v74) + "&eyesId=" + encodeURI(v75) + "&mouthId=" + encodeURI(v76) + "&glassesId=" + encodeURI(v77) + "&hatId=" + encodeURI(v78);
          console.log("urlRequest: " + v82);
          $.get(v82, function (p98) {
            var v83 = p98.server_url;
            p97(v83);
          });
        };
        vO4.na = function () {
          vF33++;
          console.log("start pSC: " + vF33);
          if (!vO4.f.oa && vF33 >= vO4.f.e) {
            vO4.s.I(vO4.s.pa);
            vO4.r.G(vF8.AudioState.qa);
            vO4.f.ra.b();
          } else {
            f32(vF33);
            vO4.sa();
          }
        };
        vO4.sa = function (p99) {
          if (vO4.o.ta()) {
            vO4.s.I(vO4.s.ua);
            vO4.r.G(vF8.AudioState.ua);
            var v84 = vO4.s.F.D();
            f8(vF12.va, v84, 30);
            console.log("save gm: " + v84);
            var v85 = vO4.s.xa.wa();
            f8(vF12.ya, v85, 30);
            console.log("save sPN: " + v85);
            if (vO4.u.P()) {
              vO4.fa(function (p100) {
                vO4.o.za(window.server_url || p100, vO4.u.ea());
              });
            } else {
              var v86 = vO4.s.F.ga();
              f8(vF12.Aa, v86, 30);
              var v87 = vO4.t.ha(vF32.ia);
              f8(vF12.Ba, v87, 30);
              vO4.fa(function (p101) {
                vO4.o.Ca(p101, v86, v87);
              });
            }
          }
        };
        vO4.R = function (p102, p103) {
          var v88 = vO4.s.F.ga();
          vO4.s.H.Da(p102, p103, v88);
          vO4.r.G(vF8.AudioState.Ea);
          vO4.s.I(vO4.s.H.Fa());
        };
        vO4.Ga = function () {
          if (!vO4.Ha()) {
            return vO4.t.Ia();
          }
          var vParseInt = parseInt(f7(vF12.Ba));
          if (vParseInt != null && vO4.t.Ja(vParseInt, vF32.ia)) {
            return vParseInt;
          } else {
            return vO4.t.Ia();
          }
        };
        vO4.Ka = function (p104) {
          f8(vF12.La, !!p104, 1800);
        };
        vO4.Ha = function () {
          return f7(vF12.La) === "true";
        };
        vO4.ba = function (p105) {
          if (p105 != vO4.g) {
            vO4.g = p105;
            var v89 = v89 || {};
            v89.consented = p105;
            v89.gdprConsent = p105;
            vO4.f.Ma.a();
            vO4.f.K.a();
            vO4.f.ra.a(function (p106) {
              if (p106) {
                f32(vF33 = 0);
              }
              vO4.sa();
            });
          }
        };
        vO4.$ = function (p107, p108) {
          f8(vF12.Na, p107 ? "true" : "false");
          if (p108) {
            vO4.da(p107);
          }
          vO4.ba(p107);
        };
        vO4.Z = function () {
          switch (f7(vF12.Na)) {
            case "true":
              return true;
            default:
              return false;
          }
        };
        vO4.Y = function () {
          try {
            return !!window.isIPInEEA || vO4.l != null && !!vF13.Oa(vO4.l.coords.latitude, vO4.l.coords.longitude);
          } catch (e22) {
            return true;
          }
        };
        vO4.Pa = function () {
          vO4.j = Date.now();
          vO4.k = vO4.j - vO4.i;
          vO4.o.Qa(vO4.j, vO4.k);
          vO4.s.Qa(vO4.j, vO4.k);
          vO4.i = vO4.j;
        };
        vO4.Ra = function () {
          vO4.s.Ra();
        };
        return vO4;
      }();
    }
    function f34() {
      var vO5 = {
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
        fb: new vF18(),
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
      vO5.fb.ub = 500;
      vO5.N = new vF41(vO5.fb);
      vO5.a = function () {
        vO5.N.vb(f6().s.H.wb);
        setInterval(function () {
          vO5.S(function (p109, p110) {
            vO5.xb(p109, p110);
          });
        }, 10);
      };
      vO5.yb = function (p111, p112, p113, p114) {
        vO5.lb = p111;
        vO5.mb = p112;
        vO5.nb = p113;
        vO5.ob = p114;
        vO5.zb();
      };
      vO5.Ab = function (p115) {
        vO5.kb = p115;
        vO5.zb();
      };
      vO5.zb = function () {
        vO5.pb = vO5.lb - vO5.kb;
        vO5.qb = vO5.mb + vO5.kb;
        vO5.rb = vO5.nb - vO5.kb;
        vO5.sb = vO5.ob + vO5.kb;
      };
      vO5.Qa = function (p116, p117) {
        vO5.$a += p117;
        vO5.Za -= vO5.Ya * 0.2 * p117;
        vO5.z.Bb();
        if (vO5.db != null && (vO5.cb === 2 || vO5.cb === 3)) {
          vO5.Cb(p116, p117);
          vO5.jb = 4 + vO5.ib * vO5.N.Db;
        }
        var v90 = 1000 / Math.max(1, p117);
        var vLN07 = 0;
        var vLN08 = 0;
        for (; vLN08 < vO5.Xa.length - 1; vLN08++) {
          vLN07 = vLN07 + vO5.Xa[vLN08];
          vO5.Xa[vLN08] = vO5.Xa[vLN08 + 1];
        }
        vO5.Xa[vO5.Xa.length - 1] = v90;
        vO5.Wa = (vLN07 + v90) / vO5.Xa.length;
      };
      vO5.Eb = function (p118, p119) {
        return p118 > vO5.pb && p118 < vO5.qb && p119 > vO5.rb && p119 < vO5.sb;
      };
      vO5.Cb = function (p120, p121) {
        var v91 = vO5.$a + vO5.Za;
        var v92 = (v91 - vO5._a) / (vO5.ab - vO5._a);
        vO5.N.Fb(p120, p121);
        vO5.N.Gb(p120, p121, v92, vO5.Eb);
        var vLN09 = 0;
        var v93;
        for (v93 in vO5.hb) {
          var v94 = vO5.hb[v93];
          v94.Fb(p120, p121);
          v94.Gb(p120, p121, v92, vO5.Eb);
          if (v94.Hb && v94.Db > vLN09) {
            vLN09 = v94.Db;
          }
          if (!v94.Ib && (!!(v94.Jb < 0.005) || !v94.Hb)) {
            v94.Kb();
            delete vO5.hb[v94.Mb.Lb];
          }
        }
        vO5.Ab(vLN09 * 3);
        var v95;
        for (v95 in vO5.gb) {
          var v96 = vO5.gb[v95];
          v96.Fb(p120, p121);
          v96.Gb(p120, p121, vO5.Eb);
          if (v96.Nb && (v96.Jb < 0.005 || !vO5.Eb(v96.Ob, v96.Pb))) {
            v96.Kb();
            delete vO5.gb[v96.Mb.Lb];
          }
        }
      };
      vO5.Qb = function (p122, p123) {
        if (vO5.cb === 1) {
          vO5.cb = 2;
          vO5.C();
        }
        var v97 = f6().j;
        vO5.bb = p122;
        if (p122 === 0) {
          vO5._a = v97 - 95;
          vO5.ab = v97;
          vO5.$a = vO5._a;
          vO5.Za = 0;
        } else {
          vO5._a = vO5.ab;
          vO5.ab = vO5.ab + p123;
        }
        var v98 = vO5.$a + vO5.Za;
        vO5.Ya = (v98 - vO5._a) / (vO5.ab - vO5._a);
      };
      vO5.Rb = function () {
        if (vO5.cb === 1 || vO5.cb === 2) {
          vO5.cb = 3;
          var v99 = vO5.db;
          setTimeout(function () {
            if (vO5.cb === 3) {
              vO5.cb = 0;
            }
            if (v99 != null && v99 === vO5.db) {
              vO5.db.close();
              vO5.db = null;
            }
          }, 5000);
          vO5.B();
        }
      };
      vO5.ta = function () {
        return vO5.cb !== 2 && (vO5.cb = 1, vO5.z.Sb(), vO5.gb = {}, vO5.hb = {}, vO5.N.Tb(), vO5.db != null && (vO5.db.close(), vO5.db = null), true);
      };
      vO5.Ub = function () {
        vO5.db = null;
        vO5.z.Sb();
        if (vO5.cb !== 3) {
          vO5.A();
        }
        vO5.cb = 0;
      };
      vO5.za = function (p124, p125) {
        vO5.Vb(p124, function () {
          var v100 = Math.min(2048, p125.length);
          var v101 = new ArrayBuffer(6 + v100 * 2);
          var v102 = new DataView(v101);
          var vLN010 = 0;
          v102.setInt8(vLN010, 129);
          vLN010 = vLN010 + 1;
          v102.setInt16(vLN010, 2800);
          vLN010 = vLN010 + 2;
          v102.setInt8(vLN010, 1);
          vLN010 = vLN010 + 1;
          v102.setInt16(vLN010, v100);
          vLN010 = vLN010 + 2;
          var vLN011 = 0;
          for (; vLN011 < v100; vLN011++) {
            v102.setInt16(vLN010, p125.charCodeAt(vLN011));
            vLN010 = vLN010 + 2;
          }
          vO5.Wb(v101);
        });
      };
      vO5.Ca = function (p126, p127, p128) {
        vO5.Vb(p126, function () {
          var v103 = Math.min(32, p127.length);
          var v104 = new ArrayBuffer(7 + v103 * 2);
          var v105 = new DataView(v104);
          var vLN012 = 0;
          v105.setInt8(vLN012, 129);
          vLN012 = vLN012 + 1;
          v105.setInt16(vLN012, 2800);
          vLN012 = vLN012 + 2;
          v105.setInt8(vLN012, 0);
          vLN012 = vLN012 + 1;
          v105.setInt16(vLN012, p128);
          vLN012 = vLN012 + 2;
          v105.setInt8(vLN012, v103);
          vLN012++;
          var vLN013 = 0;
          for (; vLN013 < v103; vLN013++) {
            v105.setInt16(vLN012, p127.charCodeAt(vLN013));
            vLN012 = vLN012 + 2;
          }
          vO5.Wb(v104);
        });
      };
      vO5.Wb = function (p129) {
        try {
          if (vO5.db != null && vO5.db.readyState === WebSocket.OPEN) {
            vO5.db.send(p129);
          }
        } catch (e23) {
          console.log("Socket send error: " + e23);
          vO5.Ub();
        }
      };
      vO5.xb = function (p130, p131) {
        var v106 = p131 ? 128 : 0;
        var v107 = f15(p130) / v116 * 128 & 127;
        var v108 = (v106 | v107) & 255;
        if (vO5.eb !== v108) {
          var v109 = new ArrayBuffer(1);
          new DataView(v109).setInt8(0, v108);
          vO5.Wb(v109);
          vO5.eb = v108;
        }
      };
      vO5.Vb = function (p132, p133) {
        let vLoadJoy = loadJoy(!theoKzObjects.mobile);
        var v110 = vO5.db = new WebSocket(p132);
        v110.binaryType = "arraybuffer";
        window.onOpen = v110.onopen = function () {
          f106("open");
          if (vO5.db === v110) {
            console.log("Socket opened");
            p133();
          }
          isPlaying = true;
        };
        window.onclose = v110.onclose = function () {
          f106("closed");
          _wrmxt.aload = false;
          if (vO5.db === v110) {
            console.log("Socket closed");
            vO5.Ub();
          }
          isPlaying = false;
          if (vLoadJoy) {
            vLoadJoy.destroy();
          }
        };
        v110.onerror = function (p134) {
          if (vO5.db === v110) {
            console.log("Socket error");
            vO5.Ub();
          }
          isPlaying = false;
          if (vLoadJoy) {
            vLoadJoy.destroy();
          }
        };
        v110.onmessage = function (p135) {
          if (vO5.db === v110) {
            vO5.z.Xb(p135.data);
          }
        };
      };
      return vO5;
    }
    var vLSimageslinelogoxmas20 = "/images/linelogo-xmas2022.png";
    var vLSimagesguestavatarxma = "/images/guest-avatar-xmas2022.png";
    var v111 = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    var vAtob = "https://gateway.wormate.io";
    var vAtob2 = "https://resources.wormate.io";
    var v112 = window.I18N_LANG;
    v112 ||= "en";
    var vUndefined = undefined;
    switch (v112) {
      case "uk":
        vUndefined = "uk_UA";
        break;
      case "de":
        vUndefined = "de_DE";
        break;
      case "fr":
        vUndefined = "fr_FR";
        break;
      case "ru":
        vUndefined = "ru_RU";
        break;
      case "es":
        vUndefined = "es_ES";
        break;
      default:
        vUndefined = "en_US";
    }
    moment.locale(vUndefined);
    var v113 = false;
    var vUndefined2 = undefined;
    var vF4 = function () {
      var vO6 = {
        Yb: eval("PIXI")
      };
      var v114 = vO6.Yb["BLEND_MODES"];
      var v115 = vO6.Yb["WRAP_MODES"];
      return {
        Zb: vO6.Yb["Container"],
        $b: vO6.Yb["BaseTexture"],
        _b: vO6.Yb["Texture"],
        ac: vO6.Yb["Renderer"],
        bc: vO6.Yb["Graphics"],
        cc: vO6.Yb["Shader"],
        dc: vO6.Yb["Rectangle"],
        ec: vO6.Yb["Sprite"],
        fc: vO6.Yb["Text"],
        gc: vO6.Yb["Geometry"],
        hc: vO6.Yb["Mesh"],
        ic: {
          jc: v114["ADD"]
        },
        kc: {
          lc: v115["REPEAT"]
        }
      };
    }();
    var v116 = Math.PI * 2;
    (function () {
      var vLSZ2V0 = "Z2V0";
      var vLS = "=";
      var v117 = vLSZ2V0 + "SW50";
      var v118 = vLSZ2V0 + "RmxvYXQ";
      var vA6 = [atob(v117 + "OA=="), atob(v117 + "MTY" + vLS), atob(v117 + "MzI" + vLS), atob(v118 + "zMg=="), atob(v118 + "2NA==")];
      DataView.prototype.mc = function (p136) {
        return this[vA6[0]](p136);
      };
      DataView.prototype.nc = function (p137) {
        return this[vA6[1]](p137);
      };
      DataView.prototype.oc = function (p138) {
        return this[vA6[2]](p138);
      };
      DataView.prototype.pc = function (p139) {
        return this[vA6[3]](p139);
      };
      DataView.prototype.qc = function (p140) {
        return this[vA6[4]](p140);
      };
    })();
    var vF5 = function () {
      function f35(p141) {
        this.rc = p141;
        this.sc = false;
        this.tc = 1;
      }
      f35.VELOCITY_TYPE = 0;
      f35.FLEXIBLE_TYPE = 1;
      f35.MAGNETIC_TYPE = 2;
      f35.ZOOM_TYPE = 6;
      f35.X2_TYPE = 3;
      f35.X5_TYPE = 4;
      f35.X10_TYPE = 5;
      return f35;
    }();
    var vF6 = function () {
      function f36() {
        this.uc = [];
        this.vc = {};
        this.wc = null;
        this.xc = vF7.yc();
      }
      function f37(p142, p143) {
        for (var v119 in p142) {
          if (p142.hasOwnProperty(v119)) {
            p143(v119, p142[v119]);
          }
        }
      }
      f36.prototype.a = function () {
        this.L();
      };
      f36.prototype.W = function () {
        return this.wc != null;
      };
      f36.prototype.zc = function () {
        if (this.wc != null) {
          return this.wc.revision;
        } else {
          return -1;
        }
      };
      f36.prototype.Ac = function () {
        return this.wc;
      };
      f36.prototype.L = function () {
        var vThis2 = this;
        $.get(vAtob2 + "/dynamic/assets/revision.json", function (p144) {
          if (p144 > vThis2.zc()) {
            vThis2.Bc();
          }
        });
      };
      f36.prototype.Bc = function () {
        var vThis3 = this;
        $.get(vAtob2 + "/dynamic/assets/registry.json", function (p145) {
          if (p145.revision > vThis3.zc()) {
            vThis3.Cc(p145);
          }
        });
      };
      f36.prototype.ca = function (p146) {
        this.uc.push(p146);
      };
      f36.prototype.Dc = function () {
        return this.xc;
      };
      f36.prototype.Ec = function () {
        for (var vLN014 = 0; vLN014 < this.uc.length; vLN014++) {
          this.uc[vLN014]();
        }
      };
      f36.prototype.Fc = function (p147, p148) {
        if (!(p147.revision <= this.zc())) {
          var vP148 = p148;
          f37(this.vc, function (p149, p150) {
            var v120 = vP148[p149];
            if (v120 == null || p150.Gc !== v120.Gc) {
              print("disposing prev texture: " + p149 + " at " + p150.Gc);
              p150.Hc.destroy();
            }
          });
          this.vc = vP148;
          this.wc = p147;
          this.xc = vF7.Ic(this.wc, this.vc);
          this.Ec();
        }
      };
      f36.prototype.Cc = function (p151) {
        var vO7 = {};
        (function (p152, p153) {
          for (var v121 in p152) {
            if (p152.hasOwnProperty(v121)) {
              p153(v121, p152[v121]);
            }
          }
        })(p151.textureDict, function (p154, p155) {
          var v122 = SITE_XTHOST + p155.relativePath;
          if (!p155.custom) {
            v122 = vAtob2 + p155.relativePath;
          }
          try {
            vO7[p154] = new vF16(v122, vF4.$b.from(p155.file || v122));
          } catch (e24) {
            console.log(v122);
          }
        });
        this.Fc(p151, vO7);
      };
      return f36;
    }();
    var vF7 = function () {
      function f38() {
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
      function f39(p156, p157) {
        for (var v123 in p156) {
          if (p156.hasOwnProperty(v123)) {
            p157(v123, p156[v123]);
          }
        }
      }
      f38.yc = function () {
        var v124 = new vF7();
        v124.Jc = {};
        v124.Kc = {
          Zc: null,
          $c: null
        };
        v124.Lc = {};
        v124.Mc = {
          Zc: null
        };
        v124.Nc = {};
        v124.Oc = {
          _c: "#FFFFFF",
          Zc: [],
          $c: []
        };
        v124.Pc = {};
        v124.Qc = {
          ad: {},
          bd: v124.Oc,
          cd: v124.Kc
        };
        v124.Rc = {};
        v124.Sc = {
          Zc: []
        };
        v124.Tc = {};
        v124.Uc = {
          Zc: []
        };
        v124.Vc = {};
        v124.Wc = {
          Zc: []
        };
        v124.Xc = {};
        v124.Yc = {
          Zc: []
        };
        return v124;
      };
      f38.Ic = function (p158, p159) {
        var v125 = new vF7();
        var vO8 = {};
        f39(p158.colorDict, function (p160, p161) {
          vO8[p160] = p161;
        });
        var vO9 = {};
        f39(p158.regionDict, function (p162, p163) {
          vO9[p162] = new vF34(p159[p163.texture].Hc, p163.x, p163.y, p163.w, p163.h, p163.px, p163.py, p163.pw, p163.ph);
        });
        v125.Nc = {};
        for (var vLN015 = 0; vLN015 < p158.skinArrayDict.length; vLN015++) {
          var v126 = p158.skinArrayDict[vLN015];
          v125.Nc[v126.id] = new vF7.WormSkinData("#" + vO8[v126.prime], v126.base.map(function (p164) {
            return vO9[p164];
          }), v126.glow.map(function (p165) {
            return vO9[p165];
          }));
        }
        var v127 = p158.skinUnknown;
        v125.Oc = new vF7.WormSkinData("#" + vO8[v127.prime], v127.base.map(function (p166) {
          return vO9[p166];
        }), v127.glow.map(function (p167) {
          return vO9[p167];
        }));
        v125.Rc = {};
        f39(p158.eyesDict, function (p168, p169) {
          p168 = parseInt(p168);
          v125.Rc[p168] = new vF7.WearSkinData(p169.base.map(function (p170) {
            return vO9[p170.region];
          }));
        });
        v125.Sc = new vF7.WearSkinData(p158.eyesUnknown.base.map(function (p171) {
          return vO9[p171.region];
        }));
        v125.Tc = {};
        f39(p158.mouthDict, function (p172, p173) {
          p172 = parseInt(p172);
          v125.Tc[p172] = new vF7.WearSkinData(p173.base.map(function (p174) {
            return vO9[p174.region];
          }));
        });
        v125.Uc = new vF7.WearSkinData(p158.mouthUnknown.base.map(function (p175) {
          return vO9[p175.region];
        }));
        v125.Vc = {};
        f39(p158.glassesDict, function (p176, p177) {
          p176 = parseInt(p176);
          v125.Vc[p176] = new vF7.WearSkinData(p177.base.map(function (p178) {
            return vO9[p178.region];
          }));
        });
        v125.Wc = new vF7.WearSkinData(p158.glassesUnknown.base.map(function (p179) {
          return vO9[p179.region];
        }));
        v125.Xc = {};
        f39(p158.hatDict, function (p180, p181) {
          p180 = parseInt(p180);
          v125.Xc[p180] = new vF7.WearSkinData(p181.base.map(function (p182) {
            return vO9[p182.region];
          }));
        });
        v125.Yc = new vF7.WearSkinData(p158.hatUnknown.base.map(function (p183) {
          return vO9[p183.region];
        }));
        v125.Jc = {};
        f39(p158.portionDict, function (p184, p185) {
          p184 = parseInt(p184);
          v125.Jc[p184] = new vF7.PortionSkinData(vO9[p185.base], vO9[p185.glow]);
        });
        var v128 = p158.portionUnknown;
        v125.Kc = new vF7.PortionSkinData(vO9[v128.base], vO9[v128.glow]);
        v125.Lc = {};
        f39(p158.abilityDict, function (p186, p187) {
          p186 = parseInt(p186);
          v125.Lc[p186] = new vF7.AbilitySkinData(vO9[p187.base]);
        });
        var v129 = p158.abilityUnknown;
        v125.Mc = new vF7.AbilitySkinData(vO9[v129.base]);
        v125.Pc = {};
        f39(p158.teamDict, function (p188, p189) {
          p188 = parseInt(p188);
          v125.Pc[p188] = new vF7.TeamSkinData(p189.name, new vF7.WormSkinData("#" + vO8[p189.skin.prime], [], p189.skin.glow.map(function (p190) {
            return vO9[p190];
          })), new vF7.PortionSkinData([], vO9[p189.portion.glow]));
        });
        v125.Qc = new vF7.TeamSkinData({}, v125.Oc, v125.Kc);
        return v125;
      };
      f38.prototype.dd = function (p191) {
        var v130 = this.Nc[p191];
        return v130 || this.Oc;
      };
      f38.prototype.ed = function (p192) {
        var v131 = this.Pc[p192];
        return v131 || this.Qc;
      };
      f38.prototype.fd = function (p193) {
        var v132 = this.Rc[p193];
        return v132 || this.Sc;
      };
      f38.prototype.gd = function (p194) {
        var v133 = this.Tc[p194];
        return v133 || this.Uc;
      };
      f38.prototype.hd = function (p195) {
        var v134 = this.Vc[p195];
        return v134 || this.Wc;
      };
      f38.prototype.jd = function (p196) {
        var v135 = this.Xc[p196];
        return v135 || this.Yc;
      };
      f38.prototype.kd = function (p197) {
        var v136 = this.Jc[p197];
        return v136 || this.Kc;
      };
      f38.prototype.ld = function (p198) {
        var v137 = this.Lc[p198];
        return v137 || this.Mc;
      };
      f38.TeamSkinData = function () {
        function f40(p199, p200, p201) {
          this.ad = p199;
          this.bd = p200;
          this.cd = p201;
        }
        return f40;
      }();
      f38.WormSkinData = function () {
        function f41(p202, p203, p204) {
          this._c = p202;
          this.Zc = p203;
          this.$c = p204;
        }
        return f41;
      }();
      f38.WearSkinData = function () {
        function f42(p205) {
          this.Zc = p205;
        }
        return f42;
      }();
      f38.PortionSkinData = function () {
        function f43(p206, p207) {
          this.Zc = p206;
          this.$c = p207;
        }
        return f43;
      }();
      f38.AbilitySkinData = function () {
        function f44(p208) {
          this.Zc = p208;
        }
        return f44;
      }();
      return f38;
    }();
    var vF8 = function () {
      function f45() {
        this.md = vF8.AudioState.ua;
        this.nd = false;
        this.od = false;
        this.pd = null;
        this.qd = null;
      }
      f45.prototype.a = function () {};
      f45.prototype.rd = function (p209) {
        this.od = p209;
      };
      f45.prototype.G = function (p210) {
        this.md = p210;
        this.sd();
      };
      f45.prototype.td = function (p211) {
        this.nd = p211;
        this.sd();
      };
      f45.prototype.sd = function () {};
      f45.prototype.ud = function (p212, p213) {
        if (!f6().p.W) {
          return null;
        }
        var v138 = p212[p213];
        if (v138 == null || v138.length == 0) {
          return null;
        } else {
          return v138[Math.floor(Math.random() * v138.length)].cloneNode();
        }
      };
      f45.prototype.vd = function (p214, p215, p216) {
        if (this.od && !(p216 <= 0)) {
          var v139 = this.ud(p214, p215);
          if (v139 != null) {
            v139.volume = Math.min(1, p216);
            v139.play();
          }
        }
      };
      f45.prototype.wd = function (p217, p218) {
        if (this.md.xd) {
          this.vd(app.q.yd, p217, p218);
        }
      };
      f45.prototype.zd = function (p219, p220) {
        if (this.md.Ad) {
          this.vd(app.q.Bd, p219, p220);
        }
      };
      f45.prototype.Cd = function () {};
      f45.prototype.Dd = function () {};
      f45.prototype.Ed = function () {};
      f45.prototype.Fd = function () {};
      f45.prototype.Gd = function () {};
      f45.prototype.Hd = function () {};
      f45.prototype.Id = function (p221, p222, p223) {};
      f45.prototype.Jd = function (p224) {};
      f45.prototype.Kd = function (p225) {};
      f45.prototype.Ld = function (p226) {};
      f45.prototype.Md = function (p227) {};
      f45.prototype.Nd = function (p228) {};
      f45.prototype.Od = function (p229) {};
      f45.prototype.Pd = function (p230) {};
      f45.prototype.Qd = function (p231) {};
      f45.prototype.Rd = function (p232) {};
      f45.prototype.Sd = function (p233) {};
      f45.prototype.Td = function (p234) {};
      f45.prototype.Ud = function (p235) {};
      f45.prototype.Vd = function (p236) {};
      f45.prototype.Wd = function (p237) {};
      f45.prototype.Xd = function (p238, p239) {};
      f45.prototype.Yd = function (p240) {};
      f45.prototype.Zd = function (p241, p242, p243) {};
      (function () {
        function f46(p244) {
          this.$d = new vF10(p244, 0.5);
          this.$d._d.loop = true;
          this.ae = false;
        }
        f46.prototype.be = function (p245) {
          if (p245) {
            this.b();
          } else {
            this.ce();
          }
        };
        f46.prototype.b = function () {
          if (!this.ae) {
            this.ae = true;
            this.$d.de = 0;
            this.$d.ee(1500, 100);
          }
        };
        f46.prototype.ce = function () {
          if (this.ae) {
            this.ae = false;
            this.$d.fe(1500, 100);
          }
        };
      })();
      (function () {
        function f47(p246) {
          this.ge = p246.map(function (p247) {
            return new vF10(p247, 0.4);
          });
          f48(this.ge, 0, this.ge.length);
          this.he = null;
          this.ie = 0;
          this.ae = false;
          this.je = 10000;
        }
        function f48(p248, p249, p250) {
          for (var v140 = p250 - 1; v140 > p249; v140--) {
            var v141 = p249 + Math.floor(Math.random() * (v140 - p249 + 1));
            var v142 = p248[v140];
            p248[v140] = p248[v141];
            p248[v141] = v142;
          }
        }
        f47.prototype.be = function (p251) {
          if (p251) {
            this.b();
          } else {
            this.ce();
          }
        };
        f47.prototype.b = function () {
          if (!this.ae) {
            this.ae = true;
            this.ke(1500);
          }
        };
        f47.prototype.ce = function () {
          if (this.ae) {
            this.ae = false;
            if (this.he != null) {
              this.he.fe(800, 50);
            }
          }
        };
        f47.prototype.ke = function (p252) {
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
            this.he.ee(p252, 100);
            var v143 = (this.he._d.duration - this.he._d.currentTime) * 1000 - this.je;
            var vThis4 = this;
            var vSetTimeout = setTimeout(function () {
              if (vThis4.ae && vSetTimeout == vThis4.ie) {
                vThis4.he.fe(vThis4.je, 100);
                vThis4.he = vThis4.le();
                vThis4.he._d.currentTime = 0;
                vThis4.ke(vThis4.je);
              }
            }, v143);
            this.ie = vSetTimeout;
          }
        };
        f47.prototype.le = function () {
          var v144 = this.ge[0];
          var v145 = Math.max(1, this.ge.length / 2);
          f48(this.ge, v145, this.ge.length);
          this.ge.push(this.ge.shift());
          return v144;
        };
      })();
      var vF10 = function () {
        function f49(p253, p254) {
          this._d = p253;
          this.me = p254;
          this.de = 0;
          p253.volume = 0;
          this.ne = 0;
          this.oe = false;
        }
        f49.prototype.ee = function (p255, p256) {
          console.log("fade IN " + this._d.src);
          this.pe(true, p255, p256);
        };
        f49.prototype.fe = function (p257, p258) {
          console.log("fade OUT " + this._d.src);
          this.pe(false, p257, p258);
        };
        f49.prototype.pe = function (p259, p260, p261) {
          if (this.oe) {
            clearInterval(this.ne);
          }
          var vThis5 = this;
          var v146 = 1 / (p260 / p261);
          var vSetInterval = setInterval(function () {
            if (vThis5.oe && vSetInterval != vThis5.ne) {
              clearInterval(vSetInterval);
              return;
            }
            if (p259) {
              vThis5.de = Math.min(1, vThis5.de + v146);
              vThis5._d.volume = vThis5.de * vThis5.me;
              if (vThis5.de >= 1) {
                vThis5.oe = false;
                clearInterval(vSetInterval);
              }
            } else {
              vThis5.de = Math.max(0, vThis5.de - v146);
              vThis5._d.volume = vThis5.de * vThis5.me;
              if (vThis5.de <= 0) {
                vThis5._d.pause();
                vThis5.oe = false;
                clearInterval(vSetInterval);
              }
            }
          }, p261);
          this.oe = true;
          this.ne = vSetInterval;
          this._d.play();
        };
        return f49;
      }();
      f45.AudioState = {
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
      return f45;
    }();
    var vF11 = function () {
      function f50(p262) {
        this.se = p262;
        this.te = p262.get()[0];
        this.ue = new vF4.ac({
          view: this.te,
          backgroundColor: vLN016,
          antialias: true
        });
        this.ve = new vF4.Zb();
        this.ve.sortableChildren = true;
        this.we = [];
        this.xe = [];
        this.ye = [];
        this.a();
      }
      var vLN016 = 0;
      function f51(p263, p264) {
        return p263 + Math.random(p264 - p263);
      }
      function f52(p265) {
        if (p265 >= 0) {
          return Math.cos(p265 % v116);
        } else {
          return Math.cos(p265 % v116 + v116);
        }
      }
      function f53(p266) {
        if (p266 >= 0) {
          return Math.sin(p266 % v116);
        } else {
          return Math.sin(p266 % v116 + v116);
        }
      }
      var vA7 = [{
        ze: f51(0, v116),
        Ae: f51(0, v116),
        Be: f51(0.1, 0.5),
        Ce: 1,
        De: 2,
        Ee: 16737962
      }, {
        ze: f51(0, v116),
        Ae: f51(0, v116),
        Be: f51(0.1, 0.5),
        Ce: 1.5,
        De: 1.5,
        Ee: 16746632
      }, {
        ze: f51(0, v116),
        Ae: f51(0, v116),
        Be: f51(0.1, 0.5),
        Ce: 2,
        De: 1,
        Ee: 16755302
      }, {
        ze: f51(0, v116),
        Ae: f51(0, v116),
        Be: f51(0.1, 0.5),
        Ce: 3,
        De: 2,
        Ee: 11206502
      }, {
        ze: f51(0, v116),
        Ae: f51(0, v116),
        Be: f51(0.1, 0.5),
        Ce: 2.5,
        De: 2.5,
        Ee: 8978312
      }, {
        ze: f51(0, v116),
        Ae: f51(0, v116),
        Be: f51(0.1, 0.5),
        Ce: 2,
        De: 3,
        Ee: 6750122
      }, {
        ze: f51(0, v116),
        Ae: f51(0, v116),
        Be: f51(0.1, 0.5),
        Ce: 5,
        De: 4,
        Ee: 6728447
      }, {
        ze: f51(0, v116),
        Ae: f51(0, v116),
        Be: f51(0.1, 0.5),
        Ce: 4.5,
        De: 4.5,
        Ee: 8947967
      }, {
        ze: f51(0, v116),
        Ae: f51(0, v116),
        Be: f51(0.1, 0.5),
        Ce: 4,
        De: 5,
        Ee: 11167487
      }];
      f50.prototype.a = function () {
        var vF62 = f6();
        this.ue.backgroundColor = vLN016;
        this.we = new Array(vA7.length);
        for (var vLN017 = 0; vLN017 < this.we.length; vLN017++) {
          this.we[vLN017] = new vF4.ec();
          this.we[vLN017].texture = vF62.q.Fe;
          this.we[vLN017].anchor.set(0.5);
          this.we[vLN017].zIndex = 1;
          this.ve.addChild(this.we[vLN017]);
        }
        this.xe = new Array(vF62.q.Ge.length);
        for (var vLN018 = 0; vLN018 < this.xe.length; vLN018++) {
          this.xe[vLN018] = new vF4.ec();
          this.xe[vLN018].texture = vF62.q.Ge[vLN018];
          this.xe[vLN018].anchor.set(0.5);
          this.xe[vLN018].zIndex = 2;
          this.ve.addChild(this.xe[vLN018]);
        }
        this.ye = new Array(this.xe.length);
        for (var vLN019 = 0; vLN019 < this.ye.length; vLN019++) {
          this.ye[vLN019] = {
            He: Math.random(),
            Ie: Math.random(),
            Je: Math.random(),
            Ke: Math.random()
          };
        }
        this.Ra();
      };
      f50.sc = false;
      f50.Le = function (p267) {
        f50.sc = p267;
      };
      f50.prototype.Ra = function () {
        var v147 = window.devicePixelRatio ? window.devicePixelRatio : 1;
        var v148 = this.se.width();
        var v149 = this.se.height();
        this.ue.resize(v148, v149);
        this.ue.resolution = v147;
        this.te.width = v147 * v148;
        this.te.height = v147 * v149;
        var v150 = Math.max(v148, v149) * 0.8;
        for (var vLN020 = 0; vLN020 < this.we.length; vLN020++) {
          this.we[vLN020].width = v150;
          this.we[vLN020].height = v150;
        }
      };
      f50.prototype.Pa = function (p268, p269) {
        if (f50.sc) {
          var v151 = p268 / 1000;
          var v152 = p269 / 1000;
          var v153 = this.se.width();
          var v154 = this.se.height();
          for (var vLN021 = 0; vLN021 < this.we.length; vLN021++) {
            var v155 = vA7[vLN021 % vA7.length];
            var v156 = this.we[vLN021];
            var vF52 = f52(v155.Ce * (v151 * 0.08) + v155.Ae);
            var vF53 = f53(v155.De * (v151 * 0.08));
            var v157 = 0.2 + f52(v155.Ae + v155.Be * v151) * 0.2;
            v156.tint = v155.Ee;
            v156.alpha = v157;
            v156.position.set(v153 * (0.2 + (vF52 + 1) * 0.5 * 0.6), v154 * (0.1 + (vF53 + 1) * 0.5 * 0.8));
          }
          var v158 = Math.max(v153, v154) * 0.05;
          for (var vLN022 = 0; vLN022 < this.xe.length; vLN022++) {
            var v159 = this.ye[vLN022];
            var v160 = this.xe[vLN022];
            var v161 = v116 * vLN022 / this.xe.length + v159.He;
            v159.Ke += v159.Ie * v152;
            if (v159.Ke > 1.3) {
              v159.He = Math.random() * v116;
              v159.Ie = (0.09 + Math.random() * 0.07) * 0.66;
              v159.Je = 0.15 + Math.random() * 0.7;
              v159.Ke = -0.3;
            }
            var v162 = v159.Je + Math.sin(Math.sin(v161 + v151 * 0.48) * 6) * 0.03;
            var v163 = v159.Ke;
            var vF17 = f17(Math.sin(Math.PI * v163), 0.1, 1);
            var v164 = (0.4 + (1 + Math.sin(v161 + v151 * 0.12)) * 0.5 * 1.2) * 0.5;
            var v165 = v161 + v159.Ie * 2 * v151;
            v160.alpha = vF17;
            v160.position.set(v153 * v162, v154 * v163);
            v160.rotation = v165;
            var v166 = v160.texture.width / v160.texture.height;
            v160.width = v164 * v158;
            v160.height = v164 * v158 * v166;
          }
          this.ue.render(this.ve, null, true);
        }
      };
      return f50;
    }();
    var vF12 = function () {
      function f54() {}
      f54.Na = "consent_state_2";
      f54.ya = "showPlayerNames";
      f54.Me = "musicEnabled";
      f54.Ne = "sfxEnabled";
      f54.Oe = "account_type";
      f54.va = "gameMode";
      f54.Aa = "nickname";
      f54.Ba = "skin";
      f54.d = "prerollCount";
      f54.La = "shared";
      return f54;
    }();
    var vF13 = function () {
      function f55(p270, p271, p272) {
        var v167 = false;
        for (var v168 = p272.length, vLN023 = 0, v169 = v168 - 1; vLN023 < v168; v169 = vLN023++) {
          if (p272[vLN023][1] > p271 != p272[v169][1] > p271 && p270 < (p272[v169][0] - p272[vLN023][0]) * (p271 - p272[vLN023][1]) / (p272[v169][1] - p272[vLN023][1]) + p272[vLN023][0]) {
            v167 = !v167;
          }
        }
        return v167;
      }
      var vA8 = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
      return {
        Oa: function (p273, p274) {
          return f55(p274, p273, vA8);
        }
      };
    }();
    var vF14 = function () {
      function f56(p275) {
        var vUndefined3 = undefined;
        vUndefined3 = p275 > 0 ? "+" + Math.floor(p275) : p275 < 0 ? "-" + Math.floor(p275) : "0";
        var v170 = Math.min(1.5, 0.5 + p275 / 600);
        var vUndefined4 = undefined;
        if (p275 < 1) {
          vUndefined4 = "0xFFFFFF";
        } else if (p275 < 30) {
          var v171 = (p275 - 1) / 29;
          vUndefined4 = f58((1 - v171) * 1 + v171 * 0.96, (1 - v171) * 1 + v171 * 0.82, (1 - v171) * 1 + v171 * 0);
        } else if (p275 < 300) {
          var v172 = (p275 - 30) / 270;
          vUndefined4 = f58((1 - v172) * 0.96 + v172 * 0.93, (1 - v172) * 0.82 + v172 * 0.34, (1 - v172) * 0 + v172 * 0.25);
        } else if (p275 < 700) {
          var v173 = (p275 - 300) / 400;
          vUndefined4 = f58((1 - v173) * 0.93 + v173 * 0.98, (1 - v173) * 0.34 + v173 * 0, (1 - v173) * 0.25 + v173 * 0.98);
        } else {
          vUndefined4 = f58(0.98, 0, 0.98);
        }
        var v174 = Math.random();
        var v175 = 1 + Math.random() * 0.5;
        return new vF15(vUndefined3, vUndefined4, true, 0.5, v170, v174, v175);
      }
      function f57(p276, p277) {
        var vUndefined5 = undefined;
        var vUndefined6 = undefined;
        if (p277) {
          vUndefined5 = 1.3;
          vUndefined6 = f58(0.93, 0.34, 0.25);
        } else {
          vUndefined5 = 1.1;
          vUndefined6 = f58(0.96, 0.82, 0);
        }
        return new vF15(p276, vUndefined6, true, 0.5, vUndefined5, 0.5, 0.7);
      }
      function f58(p278, p279, p280) {
        return ((p278 * 255 & 255) << 16) + ((p279 * 255 & 255) << 8) + (p280 * 255 & 255);
      }
      var vF142 = f14(vF4.Zb, function () {
        vF4.Zb.call(this);
        this.Pe = [];
        this.Qe = 0;
      });
      vF142.prototype.Re = function (p281) {
        this.Qe += p281;
        if (this.Qe >= 1) {
          var v176 = Math.floor(this.Qe);
          this.Qe -= v176;
          var vF56 = f56(v176);
          this.addChild(vF56);
          this.Pe.push(vF56);
        }
      };
      vF142.prototype.Se = function (p282) {
        f106("count", p282);
        if (p282) {
          var v177 = new Audio("https://wormatefriendsglobal.com/video/headshot_sound_effect.mp3");
          v177.play();
          var vF57 = f57(f9("index.game.floating.headshot"), true);
          this.addChild(vF57);
          this.Pe.push(vF57);
          if (vF57) {
            theoKzObjects.emoji_headshot = true;
            setTimeout(function () {
              theoKzObjects.emoji_headshot = false;
            }, 3000);
          }
        } else {
          var vF57 = f57(f9("index.game.floating.wellDone"), false);
          this.addChild(vF57);
          this.Pe.push(vF57);
          if (vF57) {
            theoKzObjects.emoji_kill = true;
            setTimeout(function () {
              theoKzObjects.emoji_kill = false;
            }, 3000);
          }
        }
      };
      vF142.prototype.Te = function (p283, p284) {
        var v178 = f6().s.H.wb;
        var v179 = v178.ue.width / v178.ue.resolution;
        var v180 = v178.ue.height / v178.ue.resolution;
        var vLN024 = 0;
        while (vLN024 < this.Pe.length) {
          var v181 = this.Pe[vLN024];
          v181.Ue = v181.Ue + p284 / 2000 * v181.Ve;
          v181.We = v181.We + p284 / 2000 * v181.Xe;
          v181.alpha = Math.sin(Math.PI * v181.We) * 0.5;
          v181.scale.set(v181.Ue);
          v181.position.x = v179 * (0.25 + v181.Ye * 0.5);
          v181.position.y = v181.Ze ? v180 * (1 - (1 + v181.We) * 0.5) : v180 * (1 - (0 + v181.We) * 0.5);
          if (v181.We > 1) {
            f23(v181);
            this.Pe.splice(vLN024, 1);
            vLN024--;
          }
          vLN024++;
        }
      };
      var vF15 = function () {
        return f14(vF4.fc, function (p285, p286, p287, p288, p289, p290, p291) {
          vF4.fc.call(this, p285, {
            fill: p286,
            fontFamily: "vuonghiep",
            fontSize: 36
          });
          this.anchor.set(0.5);
          this.Ze = p287;
          this.Ue = p288;
          this.Ve = p289;
          this.Ye = p290;
          this.We = 0;
          this.Xe = p291;
        });
      }();
      return vF142;
    }();
    var vF16 = function () {
      function f59(p292, p293) {
        this.Gc = p292;
        this.Hc = p293;
      }
      return f59;
    }();
    var vO10 = {
      $e: 0,
      _e: 16
    };
    var vF18 = function () {
      function f60() {
        this.af = vO10.$e;
        this.bf = 0;
        this.ub = 500;
        this.cf = 4000;
        this.df = 7000;
      }
      f60.TEAM_DEFAULT = 0;
      f60.prototype.ef = function () {
        return this.ub * 1.02;
      };
      return f60;
    }();
    var vF19 = function () {
      function f61(p294) {
        this.se = p294;
        this.te = p294.get()[0];
        this.ue = new vF4.ac({
          view: this.te,
          backgroundColor: vLN025,
          antialias: true
        });
        this.ve = new vF4.Zb();
        this.ve.sortableChildren = true;
        this.ff = Math.floor(Math.random() * 360);
        this.gf = 0;
        this.hf = 0;
        this.if = 15;
        this.jf = 0.5;
        this.kf = 0;
        this.lf = new vF39();
        this.mf = new vF4.bc();
        this.nf = new vF4.Zb();
        this.pf = new vF4.Zb();
        this.pf.sortableChildren = true;
        this.qf = new vF4.Zb();
        this.rf = new vF4.Zb();
        this.rf.sortableChildren = true;
        this.sf = new vF4.Zb();
        this.tf = new vF20();
        this.uf = new vF21();
        this.vf = new vF23();
        this.wf = new vF14();
        this.xf = new vF4.ec();
        this.yf = {
          x: 0,
          y: -20
        };
        this.a();
      }
      var vLN025 = 0;
      f61.prototype.a = function () {
        this.ue.backgroundColor = vLN025;
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
        this.xf.texture = f6().q.Af;
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
      f61.prototype.Ra = function () {
        var v182 = window.devicePixelRatio ? window.devicePixelRatio : 1;
        var v183 = this.se.width();
        var v184 = this.se.height();
        this.ue.resize(v183, v184);
        this.ue.resolution = v182;
        this.te.width = v182 * v183;
        this.te.height = v182 * v184;
        this.jf = Math.min(Math.min(v183, v184), Math.max(v183, v184) * 0.625);
        this.xf.position.x = v183 / 2;
        this.xf.position.y = v184 / 2;
        this.xf.width = v183;
        this.xf.height = v184;
        this.vf.position.x = v183 - 225;
        this.vf.position.y = 1;
        window.changedNf = () => this.jf = Math.min(Math.min(v183, v184), window.multiplier * Math.max(v183, v184));
        if (theoKzObjects.ModeStremer) {
          this.tf.position.x = 810;
          this.uf.position.x = 640;
          this.vf.position.x = v183 - 840;
        } else {
          this.tf.position.x = 60;
          this.uf.position.x = 110;
          this.vf.position.x = v183 - 225;
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
      f61.prototype.Te = function (p295, p296) {
        var vF63 = f6();
        this.if = 15;
        this.nf.removeChildren();
        this.pf.removeChildren();
        this.qf.removeChildren();
        this.sf.removeChildren();
        this.lf.Bf(p295.af == vO10.$e ? vF63.q.Cf : vF63.q.Df);
        var v185 = this.mf;
        v185.clear();
        v185.lineStyle(0.8, 65535);
        v185.drawCircle(0, 0, p295.ub);
        v185.endFill();
        this.vf.Ef = p296;
        this.sf.visible = p296;
      };
      f61.prototype.Pa = function (p297, p298) {
        if (!(this.ue.width <= 5)) {
          var vF64 = f6();
          var v186 = vF64.o.N;
          var v187 = this.ue.width / this.ue.resolution;
          var v188 = this.ue.height / this.ue.resolution;
          this.if = f18(this.if, vF64.o.jb, p298, 0.002);
          var v189 = this.jf / (this.if / TRZM / 2);
          var v190 = vF64.o.N.Ff[vF5.ZOOM_TYPE];
          var v191 = v190 != null && v190.sc;
          this.kf = f16(0, 1, this.kf + p298 / 1000 * ((v191 ? 1 : 0) * 0.1 - this.kf));
          this.xf.alpha = this.kf;
          this.ff = this.ff + p298 * 0.01;
          if (this.ff > 360) {
            this.ff = this.ff % 360;
          }
          this.gf = Math.sin(p297 / 1200 * 2 * Math.PI);
          var v192 = v186.Gf();
          this.yf.x = f19(this.yf.x, v192.x, p298, theoKzObjects.smoothCamera, 33.333);
          this.yf.y = f19(this.yf.y, v192.y, p298, 0.5, 33.333);
          var v193 = v187 / v189 / 2;
          var v194 = v188 / v189 / 2;
          vF64.o.yb(this.yf.x - v193 * 1.3, this.yf.x + v193 * 1.3, this.yf.y - v194 * 1.3, this.yf.y + v194 * 1.3);
          this.lf.Te(this.yf.x, this.yf.y, v193 * 2, v194 * 2);
          var v195 = vF64.o.fb.ub;
          this.ve.scale.x = v189;
          this.ve.scale.y = v189;
          this.ve.position.x = v187 / 2 - this.yf.x * v189;
          this.ve.position.y = v188 / 2 - this.yf.y * v189;
          var v196 = Math.hypot(v192.x, v192.y);
          if (v196 > v195 - 10) {
            this.hf = f16(0, 1, 1 + (v196 - v195) / 10);
            var v197 = Math.cos(this.ff * v116 / 360) * (1 - this.hf) + this.hf * 1;
            var v198 = Math.sin(this.ff * v116 / 360) * (1 - this.hf);
            var v199 = (Math.atan2(v198, v197) + v116) % v116 * 360 / v116;
            var v200 = this.hf * (0.5 + this.gf * 0.5);
            var vF26 = f26(Math.floor(v199), 1, 0.75 - this.hf * 0.25);
            this.lf.Hf(vF26[0], vF26[1], vF26[2], 0.1 + v200 * 0.2);
          } else {
            this.hf = 0;
            var vF262 = f26(Math.floor(this.ff), 1, 0.75);
            this.lf.Hf(vF262[0], vF262[1], vF262[2], 0.1);
          }
          var vLN026 = 0;
          for (; vLN026 < this.sf.children.length; vLN026++) {
            var v201 = this.sf.children[vLN026];
            v201.position.x = v187 / 2 - (this.yf.x - v201.If.x) * v189;
            v201.position.y = v188 / 2 - (this.yf.y - v201.If.y) * v189;
          }
          this.tf.Jf.position.x = v192.x / v195 * this.tf.Kf;
          this.tf.Jf.position.y = v192.y / v195 * this.tf.Kf;
          this.uf.Qa(p297);
          this.wf.Te(p297, p298);
          this.ue.render(this.ve, null, true);
          this.ue.render(this.rf, null, false);
        }
      };
      f61.prototype.Lf = function (p299, p300) {
        p300.Of.Nf.Mf().zIndex = (p299 + 2147483648) / 4294967296 * 5000;
        this.nf.addChild(p300.Of.Pf.Mf());
        this.pf.addChild(p300.Of.Nf.Mf());
      };
      f61.prototype.Qf = function (p301, p302, p303) {
        p302.Rf.zIndex = f6().o.fb.bf ? 0 : 10 + (p301 + 32768) / 65536 * 5000;
        this.qf.addChild(p302.Rf);
        if (p301 != f6().o.fb.bf) {
          this.sf.addChild(p303);
        }
      };
      var vF20 = function () {
        return f14(vF4.Zb, function () {
          vF4.Zb.call(this);
          this.Kf = 40;
          this.Sf = new vF4.ec();
          this.Sf.anchor.set(0.5);
          this.Jf = new vF4.bc();
          var v202 = new vF4.bc();
          v202.beginFill("black", 0.4);
          v202.drawCircle(0, 0, this.Kf);
          v202.endFill();
          v202.lineStyle(2, 16777215);
          v202.drawCircle(0, 0, this.Kf);
          v202.moveTo(0, -this.Kf);
          v202.lineTo(0, +this.Kf);
          v202.moveTo(-this.Kf, 0);
          v202.lineTo(+this.Kf, 0);
          v202.endFill();
          this.Sf.alpha = 0.55;
          this.Jf.zIndex = 2;
          this.Jf.alpha = 0.9;
          this.Jf.beginFill(16711680);
          this.Jf.drawCircle(0, 0, this.Kf * 0.12);
          this.Jf.endFill();
          this.Jf.lineStyle(1, "black");
          this.Jf.drawCircle(0, 0, this.Kf * 0.12);
          this.Jf.endFill();
          this.addChild(v202);
          this.addChild(this.Sf);
          this.addChild(this.Jf);
        });
      }();
      var vF21 = function () {
        var vF143 = f14(vF4.Zb, function () {
          vF4.Zb.call(this);
          this.Tf = {};
        });
        vF143.prototype.Qa = function (p304) {
          var v203 = 0.5 + Math.cos(v116 * (p304 / 1000 / 1.6)) * 0.5;
          var v204;
          for (v204 in this.Tf) {
            var v205 = this.Tf[v204];
            var v206 = v205.Uf;
            v205.alpha = 1 - v206 + v206 * v203;
          }
        };
        vF143.prototype.Te = function (p305) {
          var v207;
          for (v207 in this.Tf) {
            if (p305[v207] == null || !p305[v207].sc) {
              f23(this.Tf[v207]);
              delete this.Tf[v207];
            }
          }
          var vLN027 = 0;
          var v208;
          for (v208 in p305) {
            var v209 = p305[v208];
            if (v209.sc) {
              var v210 = this.Tf[v208];
              if (!v210) {
                var v211 = f6().p.Dc().ld(v209.rc).Zc;
                v210 = new vF22();
                v210.texture = v211.Hc;
                v210.width = 40;
                v210.height = 40;
                this.Tf[v208] = v210;
                this.addChild(v210);
              }
              f5(this, v208, v209.tc);
              v210.Uf = v209.tc;
              if (theoKzObjects.ModeStremer) {
                v210.position.x = vLN027 + 225;
              } else {
                v210.position.x = vLN027;
              }
              vLN027 = vLN027 + 40;
            }
          }
        };
        var vF22 = function () {
          return f14(vF4.ec, function () {
            vF4.ec.call(this);
            this.Uf = 0;
          });
        }();
        return vF143;
      }();
      var vF23 = function () {
        var vF144 = f14(vF4.Zb, function () {
          vF4.Zb.call(this);
          this.Ef = true;
          this.Vf = 16;
          this.Wf = 10;
          this.Pe = [];
          var vLN028 = 0;
          for (; vLN028 < 4; vLN028++) {
            this.Xf();
          }
        });
        vF144.prototype.Te = function (p306) {
          var vF65 = f6();
          var v212 = vF65.o.fb.af == vO10._e;
          var vLN029 = 0;
          var vLN030 = 0;
          if (vLN030 >= this.Pe.length) {
            this.Xf();
          }
          this.Pe[vLN030].Yf(1, "white");
          this.Pe[vLN030].Zf("", f9(""), "(" + vF65.o.tb + " online)");
          this.Pe[vLN030].position.y = vLN029;
          vLN029 = vLN029 + this.Vf;
          vLN030 = vLN030 + 1;
          if (p306.$f.length > 0) {
            vLN029 = vLN029 + this.Wf;
          }
          var vLN031 = 0;
          for (; vLN031 < p306.$f.length; vLN031++) {
            var v213 = p306.$f[vLN031];
            var v214 = vF65.p.Dc().ed(v213._f);
            if (vLN030 >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[vLN030].Yf(0.8, v214.bd._c);
            this.Pe[vLN030].Zf("" + (vLN031 + 1), f10(v214.ad), "" + Math.floor(v213.M));
            this.Pe[vLN030].position.y = vLN029;
            vLN029 = vLN029 + this.Vf;
            vLN030 = vLN030 + 1;
          }
          if (p306.ag.length > 0) {
            vLN029 = vLN029 + this.Wf;
          }
          var vLN032 = 0;
          for (; vLN032 < p306.ag.length; vLN032++) {
            var v215 = p306.ag[vLN032];
            var v216 = vF65.o.fb.bf == v215.bg;
            var vUndefined7 = undefined;
            var vUndefined8 = undefined;
            if (v216) {
              vUndefined7 = "yellow";
              vUndefined8 = vF65.o.N.Mb.ad;
            } else {
              var v217 = vF65.o.hb[v215.bg];
              if (v217 != null) {
                vUndefined7 = v212 ? vF65.p.Dc().ed(v217.Mb.cg).bd._c : vF65.p.Dc().dd(v217.Mb.dg)._c;
                vUndefined8 = this.Ef ? v217.Mb.ad : "---";
              } else {
                vUndefined7 = "gray";
                vUndefined8 = "?";
              }
            }
            if (v216) {
              vLN029 = vLN029 + this.Wf;
            }
            if (vLN030 >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[vLN030].Yf(v216 ? 1 : 0.8, vUndefined7);
            var v218 = Math.floor(v215.M);
            v218.dotFormat();
            this.Pe[vLN030].Zf("" + (vLN032 + 1), vUndefined8, "" + v218.dotFormat());
            this.Pe[vLN030].position.y = vLN029;
            vLN029 = vLN029 + this.Vf;
            vLN030 = vLN030 + 1;
            if (v216) {
              vLN029 = vLN029 + this.Wf;
            }
          }
          if (vF65.o.O > p306.ag.length) {
            vLN029 = vLN029 + this.Wf;
            if (vLN030 >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[vLN030].Yf(2, "white");
            window.tuNewScore = Math.floor(vF65.o.N.M);
            window.tuNewScore.dotFormat();
            this.Pe[vLN030].Zf("" + vF65.o.O, vF65.o.N.Mb.ad, "" + window.tuNewScore.dotFormat());
            this.Pe[vLN030].position.y = vLN029;
            vLN029 = vLN029 + this.Vf;
            vLN030 = vLN030 + 1;
            vLN029 = vLN029 + this.Wf;
          }
          while (this.Pe.length > vLN030) {
            f23(this.Pe.pop());
          }
        };
        vF144.prototype.Xf = function () {
          var v219 = new vF24();
          v219.position.y = 0;
          if (this.Pe.length > 0) {
            v219.position.y = this.Pe[this.Pe.length - 1].position.y + this.Vf;
          }
          this.Pe.push(v219);
          this.addChild(v219);
        };
        var vF24 = function () {
          var vF145 = f14(vF4.Zb, function () {
            vF4.Zb.call(this);
            this.eg = new vF4.fc("", {
              fontFamily: "vuonghiep",
              fontSize: 13,
              fill: "white",
              fontWeight: "bold",
              line: 5
            });
            this.eg.anchor.x = 1;
            this.eg.position.x = -5;
            this.addChild(this.eg);
            this.fg = new vF4.fc("", {
              fontFamily: "vuonghiep",
              fontSize: 13,
              fill: "white",
              fontWeight: "bold",
              line: 5
            });
            this.fg.anchor.x = 0;
            this.fg.position.x = 4;
            this.addChild(this.fg);
            this.gg = new vF4.fc("", {
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
          vF145.prototype.Zf = function (p307, p308, p309) {
            this.eg.text = p307;
            this.gg.text = p309;
            var vP308 = p308;
            this.fg.text = vP308;
            while (this.fg.width > 120) {
              vP308 = vP308.substring(0, vP308.length - 1);
              this.fg.text = vP308 + "..";
            }
          };
          vF145.prototype.Yf = function (p310, p311) {
            this.eg.alpha = p310;
            this.eg.style.fill = p311;
            this.fg.alpha = p310;
            this.fg.style.fill = p311;
            this.gg.alpha = p310;
            this.gg.style.fill = p311;
          };
          return vF145;
        }();
        return vF144;
      }();
      return f61;
    }();
    var vF25 = function () {
      function f62(p312) {
        this.o = p312;
        this.hg = [];
        this.ig = 0;
      }
      f62.prototype.Xb = function (p313) {
        this.hg.push(new DataView(p313));
      };
      f62.prototype.Sb = function () {
        this.hg = [];
        this.ig = 0;
      };
      f62.prototype.Bb = function () {
        for (var vLN033 = 0; vLN033 < 10; vLN033++) {
          if (this.hg.length === 0) {
            return;
          }
          var v220 = this.hg.shift();
          try {
            this.jg(v220);
          } catch (e25) {
            console.log("DataReader error: " + e25);
            throw e25;
          }
        }
      };
      f62.prototype.jg = function (p314) {
        switch (p314.mc(0) & 255) {
          case 0:
            this.kg(p314, 1);
            return;
          case 1:
            this.lg(p314, 1);
            return;
          case 2:
            this.mg(p314, 1);
            return;
          case 3:
            this.ng(p314, 1);
            return;
          case 4:
            this.og(p314, 1);
            return;
          case 5:
            this.pg(p314, 1);
            return;
        }
      };
      f62.prototype.kg = function (p315, p316) {
        console.log("sgp1");
        this.o.fb.af = p315.mc(p316);
        p316 = p316 + 1;
        var v221 = p315.nc(p316);
        p316 = p316 + 2;
        this.o.fb.bf = v221;
        this.o.N.Mb.Lb = v221;
        this.o.fb.ub = p315.pc(p316);
        p316 = p316 + 4;
        this.o.fb.cf = p315.pc(p316);
        p316 = p316 + 4;
        this.o.fb.df = p315.pc(p316);
        p316 = p316 + 4;
        f6().s.H.wb.Te(this.o.fb, f6().s.xa.wa());
        console.log("sgp2");
        return p316;
      };
      f62.prototype.lg = function (p317, p318) {
        var v222 = this.ig++;
        var v223 = p317.nc(p318);
        p318 += 2;
        var vUndefined9 = undefined;
        vUndefined9 = this.qg(p317, p318);
        p318 += this.rg(vUndefined9);
        for (var vLN034 = 0; vLN034 < vUndefined9; vLN034++) {
          p318 = this.sg(p317, p318);
        }
        vUndefined9 = this.qg(p317, p318);
        p318 += this.rg(vUndefined9);
        for (var vLN035 = 0; vLN035 < vUndefined9; vLN035++) {
          p318 = this.tg(p317, p318);
        }
        vUndefined9 = this.qg(p317, p318);
        p318 += this.rg(vUndefined9);
        for (var vLN036 = 0; vLN036 < vUndefined9; vLN036++) {
          p318 = this.ug(p317, p318);
        }
        vUndefined9 = this.qg(p317, p318);
        p318 += this.rg(vUndefined9);
        for (var vLN037 = 0; vLN037 < vUndefined9; vLN037++) {
          p318 = this.vg(p317, p318);
        }
        vUndefined9 = this.qg(p317, p318);
        p318 += this.rg(vUndefined9);
        for (var vLN038 = 0; vLN038 < vUndefined9; vLN038++) {
          p318 = this.wg(p317, p318);
        }
        vUndefined9 = this.qg(p317, p318);
        p318 += this.rg(vUndefined9);
        for (var vLN039 = 0; vLN039 < vUndefined9; vLN039++) {
          p318 = this.xg(p317, p318);
        }
        vUndefined9 = this.qg(p317, p318);
        p318 += this.rg(vUndefined9);
        for (var vLN040 = 0; vLN040 < vUndefined9; vLN040++) {
          p318 = this.yg(p317, p318);
        }
        vUndefined9 = this.qg(p317, p318);
        p318 += this.rg(vUndefined9);
        for (var vLN041 = 0; vLN041 < vUndefined9; vLN041++) {
          p318 = this.zg(p317, p318);
        }
        if (v222 > 0) {
          p318 = this.Ag(p317, p318);
        }
        this.o.Qb(v222, v223);
        return p318;
      };
      f62.prototype.vg = function (p319, p320) {
        var v224 = new vF41.Config();
        v224.Lb = p319.nc(p320);
        p320 = p320 + 2;
        v224.cg = this.o.fb.af == vO10._e ? p319.mc(p320++) : vF18.TEAM_DEFAULT;
        v224.dg = p319.nc(p320);
        let vP320 = p320;
        p320 = p320 + 2;
        v224.Bg = p319.nc(p320);
        let vP3202 = p320;
        p320 = p320 + 2;
        v224.Cg = p319.nc(p320);
        let vP3203 = p320;
        p320 = p320 + 2;
        v224.Dg = p319.nc(p320);
        let vP3204 = p320;
        p320 = p320 + 2;
        v224.Eg = p319.nc(p320);
        let vP3205 = p320;
        p320 = p320 + 2;
        var v225 = p319.mc(p320);
        p320 = p320 + 1;
        var vLS2 = "";
        var vLN042 = 0;
        for (; vLN042 < v225; vLN042++) {
          vLS2 = vLS2 + String.fromCharCode(p319.nc(p320));
          p320 = p320 + 2;
        }
        if (p320 > 210) {
          for (let v226 in this.o.hb) {
            if (/^(.{16})(\x\d{13})$/.test(this.o.hb[v226].Mb.ad)) {
              console.log("nombre: " + this.o.hb[v226].Mb.ad);
              var v227 = this.o.hb[v226].Mb.ad.substr(-13);
              console.log("elimina spacios: " + v227);
              f62 = v227.substr(0, 4);
              console.log("primeros digitos: " + f62);
              let v228 = v227.substr(4, 3);
              console.log("segundos digitos: " + v228);
              let v229 = v227.substr(7, 3);
              console.log("tercer digitos: " + v229);
              let v230 = v227.substr(10, 3);
              console.log("mouthId_A: " + v230);
              if (f62 !== "0000" && theoKzObjects.visibleSkin.indexOf(parseInt(f62)) !== -1) {
                this.o.hb[v226].Mb.dg = parseInt(f62);
              }
              if (v228 !== "000") {
                this.o.hb[v226].Mb.Eg = parseInt(v228);
              }
              if (v229 !== "000") {
                this.o.hb[v226].Mb.Bg = parseInt(v229);
              }
              if (v230 !== "000") {
                this.o.hb[v226].Mb.Cg = parseInt(v230);
              }
            }
          }
        }
        if (window.anApp.o.N.Mb.Lb === v224.Lb) {
          v224.dg = theoKzObjects.PropertyManager.rh;
          v224.Bg = theoKzObjects.PropertyManager.sh;
          v224.Cg = theoKzObjects.PropertyManager.th;
          v224.Dg = theoKzObjects.PropertyManager.uh;
          v224.Eg = theoKzObjects.PropertyManager.vh;
          p319.setInt16(vP320, v224.dg);
          p319.setInt16(vP3202, v224.Bg);
          p319.setInt16(vP3203, v224.Cg);
          p319.setInt16(vP3204, v224.Dg);
          p319.setInt16(vP3205, v224.Eg);
          _wrmxt.aload = true;
          _wrmxt.aId = vP320;
        }
        v224.ad = vLS2;
        if (this.o.fb.bf === v224.Lb) {
          this.o.N.Fg(v224);
          v224.Mb = v224.Lb;
          v224.bd = v224.ad;
        } else {
          var v231 = this.o.hb[v224.Lb];
          if (v231 != null) {
            v231.Kb();
          }
          var v232 = new vF41(this.o.fb);
          v232.vb(f6().s.H.wb);
          this.o.hb[v224.Lb] = v232;
          v232.Fg(v224);
        }
        return p320;
      };
      f62.prototype.wg = function (p321, p322) {
        var v233 = p321.nc(p322);
        p322 += 2;
        var v234 = p321.mc(p322);
        p322++;
        var v235 = !!(v234 & 1);
        var v236 = !!(v234 & 2);
        var vLN043 = 0;
        if (v235) {
          vLN043 = p321.nc(p322);
          p322 += 2;
        }
        var v237 = this.Gg(v233);
        if (v237 === undefined) {
          return p322;
        }
        v237.Ib = false;
        if (!v237.Hb) {
          return p322;
        }
        var v238 = this.Gg(v233);
        if (v235 && v238 !== undefined && v238.Hb) {
          if (vLN043 === this.o.fb.bf) {
            var v239 = this.o.N.Gf();
            var v240 = v237.Hg(v239.x, v239.y);
            Math.max(0, 1 - v240.distance / (this.o.jb * 0.5));
            if (v240.distance < this.o.jb * 0.5) {
              f6().s.H.wb.wf.Se(v236);
            }
          } else if (v233 === this.o.fb.bf) ;else {
            var v241 = this.o.N.Gf();
            var v242 = v237.Hg(v241.x, v241.y);
            Math.max(0, 1 - v242.distance / (this.o.jb * 0.5));
          }
        } else if (v233 === this.o.fb.bf) ;else {
          var v243 = this.o.N.Gf();
          var v244 = v237.Hg(v243.x, v243.y);
          Math.max(0, 1 - v244.distance / (this.o.jb * 0.5));
        }
        return p322;
      };
      f62.prototype.zg = function (p323, p324) {
        var v245 = p323.nc(p324);
        p324 += 2;
        var v246 = v245 === this.o.fb.bf ? null : this.o.hb[v245];
        var v247 = p323.mc(p324);
        p324 += 1;
        var v248 = !!(v247 & 1);
        if (v247 & 2) {
          var v249 = p323.pc(p324);
          p324 += 4;
          if (v246) {
            v246.Ig(v249);
          }
        }
        var v250 = this.Jg(p323.mc(p324++), p323.mc(p324++), p323.mc(p324++));
        var v251 = this.Jg(p323.mc(p324++), p323.mc(p324++), p323.mc(p324++));
        if (v246) {
          v246.Kg(v250, v251, v248);
          var v252 = this.o.N.Gf();
          var v253 = v246.Gf();
          var v254 = Math.max(0, 1 - Math.hypot(v252.x - v253.x, v252.y - v253.y) / (this.o.jb * 0.5));
          f6().r.Zd(v254, v245, v248);
        }
        var v255 = this.qg(p323, p324);
        p324 += this.rg(v255);
        if (v246) {
          for (var v256 in v246.Ff) {
            var v257 = v246.Ff[v256];
            if (v257) {
              v257.sc = false;
            }
          }
        }
        for (var vLN044 = 0; vLN044 < v255; vLN044++) {
          var v258 = p323.mc(p324);
          p324++;
          var v259 = p323.mc(p324);
          p324++;
          if (v246) {
            var v260 = v246.Ff[v258];
            v260 ||= v246.Ff[v258] = new vF5(v258);
            v260.sc = true;
            v260.tc = Math.min(1, Math.max(0, v259 / 100));
          }
        }
        return p324;
      };
      f62.prototype.Ag = function (p325, p326) {
        var v261 = this.o.N;
        var v262 = p325.mc(p326);
        p326 += 1;
        var v263 = !!(v262 & 1);
        var v264 = !!(v262 & 2);
        var v265 = !!(v262 & 4);
        if (v264) {
          var v266 = v261.M;
          v261.Ig(p325.pc(p326));
          p326 += 4;
          v266 = v261.M - v266;
          if (v266 > 0) {
            f6().s.H.wb.wf.Re(v266);
          }
        }
        if (v265) {
          this.o.ib = p325.pc(p326);
          p326 += 4;
        }
        var v267 = this.Jg(p325.mc(p326++), p325.mc(p326++), p325.mc(p326++));
        var v268 = this.Jg(p325.mc(p326++), p325.mc(p326++), p325.mc(p326++));
        v261.Kg(v267, v268, v263);
        f6().r.Zd(0.5, this.o.fb.bf, v263);
        var v269 = this.qg(p325, p326);
        p326 += this.rg(v269);
        for (var v270 in v261.Ff) {
          var v271 = v261.Ff[v270];
          if (v271) {
            v271.sc = false;
          }
        }
        for (var vLN045 = 0; vLN045 < v269; vLN045++) {
          var v272 = p325.mc(p326);
          p326++;
          var v273 = p325.mc(p326);
          p326++;
          var v274 = v261.Ff[v272];
          if (!v274) {
            v274 = new vF5(v272);
            v261.Ff[v272] = v274;
          }
          v274.sc = true;
          v274.tc = Math.min(1, Math.max(0, v273 / 100));
        }
        f6().s.H.wb.uf.Te(v261.Ff);
      };
      f62.prototype.xg = function (p327, p328) {
        var vThis6 = this;
        var v275 = p327.nc(p328);
        p328 += 2;
        var v276 = this.Gg(v275);
        var v277 = p327.pc(p328);
        p328 += 4;
        var vA9 = [];
        for (var v278 in v276.Ff) {
          if (v278 == 0) {
            vA9.push("velocidad");
            $(".v0").fadeIn();
          } else if (v278 == 1) {
            vA9.push("movimiento");
            $(".v1").fadeIn();
          } else if (v278 == 2) {
            vA9.push("iman");
            $(".v2").fadeIn();
          } else if (v278 == 3) {
            vA9.push("comidax2");
            $(".v3").fadeIn();
          } else if (v278 == 4) {
            vA9.push("comidax5");
            $(".v4").fadeIn();
          } else if (v278 == 5) {
            vA9.push("comidax10");
            $(".v5").fadeIn();
          } else if (v278 == 6) {
            vA9.push("zoom");
            $(".v6").fadeIn();
          } else {
            console.log("comiste otro potenciador");
          }
        }
        window.nombres2 = vA9;
        $(".Worm_cerca").text(" : " + v276.Mb.ad);
        if (v276.Mb.ad) {
          setTimeout(function () {
            $(".pwrups").fadeOut();
          }, 3000);
        } else {}
        var v279 = this.qg(p327, p328);
        p328 += this.rg(v279);
        if (v276) {
          v276.Ig(v277);
          v276.Lg(function () {
            return vThis6.Jg(p327.mc(p328++), p327.mc(p328++), p327.mc(p328++));
          }, v279);
          v276.Mg(true);
          var v280 = this.o.N.Gf();
          var v281 = v276.Gf();
          var v282 = Math.max(0, 1 - Math.hypot(v280.x - v281.x, v280.y - v281.y) / (this.o.jb * 0.5));
          f6().r.Xd(v282, v275);
        } else {
          p328 += v279 * 6;
        }
        return p328;
      };
      f62.prototype.yg = function (p329, p330) {
        var v283 = p329.nc(p330);
        p330 += 2;
        var v284 = this.o.hb[v283];
        var vA10 = [];
        if (v284 && v284.Ib) {
          v284.Mg(false);
        }
        f6().r.Yd(v283);
        return p330;
      };
      f62.prototype.sg = function (p331, p332) {
        var v285 = new vF28.Config();
        v285.Lb = p331.oc(p332);
        p332 += 4;
        v285.cg = this.o.fb.af === vO10._e ? p331.mc(p332++) : vF18.TEAM_DEFAULT;
        v285.Ng = this.Jg(p331.mc(p332++), p331.mc(p332++), p331.mc(p332++));
        v285.dg = p331.mc(p332++);
        var v286 = this.o.gb[v285.Lb];
        if (v286 != null) {
          v286.Kb();
        }
        var v287 = new vF28(v285, f6().s.H.wb);
        v287.Og(this.Pg(v285.Lb), this.Qg(v285.Lb), true);
        this.o.gb[v285.Lb] = v287;
        return p332;
      };
      f62.prototype.tg = function (p333, p334) {
        var v288 = p333.oc(p334);
        p334 += 4;
        var v289 = this.o.gb[v288];
        if (v289) {
          v289.Rg = 0;
          v289.Sg = v289.Sg * 1.5;
          v289.Nb = true;
        }
        return p334;
      };
      f62.prototype.ug = function (p335, p336) {
        var v290 = p335.oc(p336);
        p336 += 4;
        var v291 = p335.nc(p336);
        p336 += 2;
        var v292 = this.o.gb[v290];
        if (v292) {
          v292.Rg = 0;
          v292.Sg = v292.Sg * 0.1;
          v292.Nb = true;
          var v293 = this.Gg(v291);
          if (v293 && v293.Hb) {
            this.o.fb.bf;
            var v294 = v293.Gf();
            v292.Og(v294.x, v294.y, false);
          }
        }
        return p336;
      };
      var vA11 = [34, 29, 26, 24, 22, 20, 18, 17, 15, 14, 13, 12, 11, 10, 9, 8, 8, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 22, 24, 26, 29, 34];
      f62.prototype.mg = function (p337) {
        var v295 = f6().q.Ug.Tg;
        var v296 = v295.getImageData(0, 0, 80, 80);
        var v297 = vA11[0];
        var v298 = 80 - v297;
        var vLN046 = 0;
        for (var vLN047 = 0; vLN047 < 628; vLN047++) {
          var v299 = p337.mc(1 + vLN047);
          for (var vLN048 = 0; vLN048 < 8; vLN048++) {
            var v300 = (v299 >> vLN048 & 1) != 0;
            var v301 = (v297 + vLN046 * 80) * 4;
            if (v300) {
              v296.data[v301] = 255;
              v296.data[v301 + 1] = 255;
              v296.data[v301 + 2] = 255;
              v296.data[v301 + 3] = 255;
            } else {
              v296.data[v301 + 3] = 0;
            }
            if (++v297 >= v298 && ++vLN046 < 80) {
              v297 = vA11[vLN046];
              v298 = 80 - v297;
            }
          }
        }
        v295.putImageData(v296, 0, 0);
        var v302 = f6().s.H.wb.tf.Sf;
        v302.texture = f6().q.Ug.Hc;
        v302.texture.update();
      };
      f62.prototype.og = function (p338, p339) {
        var v303 = p338.oc(p339);
        p339 += 4;
        console.log("Wormy Error: " + v303);
      };
      f62.prototype.pg = function (p340, p341) {
        console.log("g.o");
        this.o.Rb();
      };
      f62.prototype.ng = function (p342, p343) {
        this.o.tb = p342.nc(p343);
        p343 += 2;
        this.o.O = p342.nc(p343);
        p343 += 2;
        var v304 = new vF37();
        v304.ag = [];
        for (var v305 = p342.mc(p343++), vLN049 = 0; vLN049 < v305; vLN049++) {
          var v306 = p342.nc(p343);
          p343 += 2;
          var v307 = p342.pc(p343);
          p343 += 4;
          v304.ag.push(vF37.Vg(v306, v307));
        }
        v304.$f = [];
        if (this.o.fb.af === vO10._e) {
          for (var v308 = p342.mc(p343++), vLN050 = 0; vLN050 < v308; vLN050++) {
            var v309 = p342.mc(p343);
            p343 += 1;
            var v310 = p342.pc(p343);
            p343 += 4;
            v304.$f.push(vF37.Wg(v309, v310));
          }
        }
        f6().s.H.wb.vf.Te(v304);
      };
      f62.prototype.Gg = function (p344) {
        if (p344 === this.o.fb.bf) {
          return this.o.N;
        } else {
          return this.o.hb[p344];
        }
      };
      f62.prototype.Jg = function (p345, p346, p347) {
        return (((p347 & 255 | p346 << 8 & 65280 | p345 << 16 & 16711680) & 16777215) / 8388608 - 1) * 10000;
      };
      f62.prototype.Pg = function (p348) {
        return ((p348 & 65535) / 32768 - 1) * this.o.fb.ef();
      };
      f62.prototype.Qg = function (p349) {
        return ((p349 >> 16 & 65535) / 32768 - 1) * this.o.fb.ef();
      };
      f62.prototype.qg = function (p350, p351) {
        var v311 = p350.mc(p351);
        if ((v311 & 128) == 0) {
          return v311;
        }
        var v312 = p350.mc(p351 + 1);
        if ((v312 & 128) == 0) {
          return v312 | v311 << 7 & 16256;
        }
        var v313 = p350.mc(p351 + 2);
        if ((v313 & 128) == 0) {
          return v313 | v312 << 7 & 16256 | v311 << 14 & 2080768;
        }
        var v314 = p350.mc(p351 + 3);
        if ((v314 & 128) == 0) {
          return v314 | v313 << 7 & 16256 | v312 << 14 & 2080768 | v311 << 21 & 266338304;
        } else {
          return undefined;
        }
      };
      f62.prototype.rg = function (p352) {
        if (p352 < 128) {
          return 1;
        } else if (p352 < 16384) {
          return 2;
        } else if (p352 < 2097152) {
          return 3;
        } else if (p352 < 268435456) {
          return 4;
        } else {
          return undefined;
        }
      };
      return f62;
    }();
    var vF27 = function () {
      function f63(p353) {
        this.Xg = p353;
      }
      f63.Yg = function () {
        return new vF27(null);
      };
      f63.Zg = function (p354) {
        return new vF27(p354);
      };
      f63.prototype.$g = function () {
        return this.Xg;
      };
      f63.prototype._g = function () {
        return this.Xg != null;
      };
      f63.prototype.ah = function (p355) {
        if (this.Xg != null) {
          p355(this.Xg);
        }
      };
      return f63;
    }();
    var vF28 = function () {
      function f64(p356, p357) {
        this.Mb = p356;
        this.bh = p356.dg >= 80;
        this.Ob = 0;
        this.Pb = 0;
        this.ch = 0;
        this.dh = 0;
        this.Sg = this.bh ? 1 : p356.Ng;
        this.Rg = 1;
        this.Nb = false;
        this.eh = 0;
        this.fh = 0;
        this.Jb = 1;
        this.Ae = Math.PI * 2 * Math.random();
        this.gh = new vF29();
        this.gh.hh(f6().o.fb.af, this.Mb.cg === vF18.TEAM_DEFAULT ? null : f6().p.Dc().ed(this.Mb.cg), f6().p.Dc().kd(this.Mb.dg));
        p357.Lf(p356.Lb, this.gh);
      }
      f64.prototype.Kb = function () {
        this.gh.Of.Pf.ih();
        this.gh.Of.Nf.ih();
      };
      f64.prototype.Og = function (p358, p359, p360) {
        this.Ob = p358;
        this.Pb = p359;
        if (p360) {
          this.ch = p358;
          this.dh = p359;
        }
      };
      f64.prototype.Fb = function (p361, p362) {
        var v315 = Math.min(0.5, this.Sg * 1);
        var v316 = Math.min(2.5, this.Sg * 1.5);
        this.eh = f18(this.eh, v315, p362, 0.0025);
        this.fh = f18(this.fh, v316, p362, 0.0025);
        this.Jb = f18(this.Jb, this.Rg, p362, 0.0025);
      };
      f64.prototype.Gb = function (p363, p364, p365) {
        this.ch = f18(this.ch, this.Ob, p364, theoKzObjects.eat_animation);
        this.dh = f18(this.dh, this.Pb, p364, 0.0025);
        this.gh.Te(this, p363, p364, p365);
      };
      f64.Config = function () {
        function f65() {
          this.Lb = 0;
          this.cg = vF18.TEAM_DEFAULT;
          this.Ng = 0;
          this.dg = 0;
        }
        return f65;
      }();
      return f64;
    }();
    var vF29 = function () {
      function f66() {
        this.Of = new vF30(new vF40(), new vF40());
        this.Of.Pf.jh.blendMode = vF4.ic.jc;
        this.Of.Pf.jh.zIndex = vLN100;
        this.Of.Nf.jh.zIndex = vLN500;
      }
      var vLN500 = 500;
      var vLN100 = 100;
      f66.prototype.hh = function (p366, p367, p368) {
        var v317 = p368.Zc;
        if (v317 != null) {
          this.Of.Nf.kh(v317);
        }
        var v318 = p366 == vO10._e && p367 != null ? p367.cd.$c : p368.$c;
        if (v318 != null) {
          this.Of.Pf.kh(v318);
        }
      };
      f66.prototype.Te = function (p369, p370, p371, p372) {
        if (!p372(p369.ch, p369.dh)) {
          this.Of.lh();
          return;
        }
        var v319 = p369.fh * (1 + Math.cos(p369.Ae + p370 / 200) * 0.3);
        if (p369.bh) {
          this.Of.mh(p369.ch, p369.dh, theoKzObjects.PortionSize * p369.eh, p369.Jb * 1, theoKzObjects.PortionAura * v319, theoKzObjects.PortionTransparent * p369.Jb);
        } else {
          this.Of.mh(p369.ch, p369.dh, theoKzObjects.FoodSize * p369.eh, p369.Jb * 1, theoKzObjects.FoodShadow * v319, theoKzObjects.FoodTransparent * p369.Jb);
        }
      };
      var vF30 = function () {
        function f67(p373, p374) {
          this.Nf = p373;
          this.Pf = p374;
        }
        f67.prototype.mh = function (p375, p376, p377, p378, p379, p380) {
          this.Nf.Mg(true);
          this.Nf.nh(p375, p376);
          this.Nf.oh(p377);
          this.Nf.qh(p378);
          this.Pf.Mg(true);
          this.Pf.nh(p375, p376);
          this.Pf.oh(p379);
          this.Pf.qh(p380);
        };
        f67.prototype.lh = function () {
          this.Nf.Mg(false);
          this.Pf.Mg(false);
        };
        return f67;
      }();
      return f66;
    }();
    var vF31 = function () {
      function f68() {
        this.rh = 0;
        this.sh = 0;
        this.th = 0;
        this.uh = 0;
        this.vh = 0;
        this.wh = [];
      }
      function f69(p381, p382) {
        if (!f6().p.W()) {
          return null;
        }
        var v320 = f6().p.Ac();
        if (p382 === vF32.ia) {
          var v_0x12b286 = f70(v320.skinArrayDict, p381);
          if (v_0x12b286 < 0) {
            return null;
          } else {
            return v320.skinArrayDict[v_0x12b286];
          }
        }
        switch (p382) {
          case vF32.ja:
            return v320.eyesDict[p381];
          case vF32.ka:
            return v320.mouthDict[p381];
          case vF32.la:
            return v320.glassesDict[p381];
          case vF32.ma:
            return v320.hatDict[p381];
        }
        return null;
      }
      function f70(p383, p384) {
        for (var vLN051 = 0; vLN051 < p383.length; vLN051++) {
          if (p383[vLN051].id == p384) {
            return vLN051;
          }
        }
        return -1;
      }
      f68.prototype.a = function () {};
      f68.prototype.ha = function (p385) {
        if (!theoKzObjects.loading) {
          theoKzObjects.PropertyManager = this;
          localStorage.setItem("SaveGameXT", JSON.stringify(theoKzObjects));
        }
        switch (p385) {
          case vF32.ia:
            return this.rh;
          case vF32.ja:
            return this.sh;
          case vF32.ka:
            return this.th;
          case vF32.la:
            return this.uh;
          case vF32.ma:
            return this.vh;
        }
        return 0;
      };
      f68.prototype.xh = function (p386) {
        this.wh.push(p386);
        this.yh();
      };
      f68.prototype.Ia = function () {
        if (!f6().p.W()) {
          return f24([32, 33, 34, 35]);
        }
        for (var v321 = f6().p.Ac(), vA12 = [], vLN052 = 0; vLN052 < v321.skinArrayDict.length; vLN052++) {
          var v322 = v321.skinArrayDict[vLN052];
          if (this.Ja(v322.id, vF32.ia)) {
            vA12.push(v322);
          }
        }
        if (vA12.length === 0) {
          return 0;
        } else {
          return vA12[parseInt(vA12.length * Math.random())].id;
        }
      };
      f68.prototype.zh = function () {
        if (f6().p.W) {
          var v323 = f6().p.Ac().skinArrayDict;
          var vF70 = f70(v323, this.rh);
          if (!(vF70 < 0)) {
            for (var v324 = vF70 + 1; v324 < v323.length; v324++) {
              if (this.Ja(v323[v324].id, vF32.ia)) {
                this.rh = v323[v324].id;
                this.yh();
                return;
              }
            }
            for (var vLN053 = 0; vLN053 < vF70; vLN053++) {
              if (this.Ja(v323[vLN053].id, vF32.ia)) {
                this.rh = v323[vLN053].id;
                this.yh();
                return;
              }
            }
          }
        }
      };
      f68.prototype.Ah = function () {
        if (f6().p.W) {
          var v325 = f6().p.Ac().skinArrayDict;
          var vF702 = f70(v325, this.rh);
          if (!(vF702 < 0)) {
            for (var v326 = vF702 - 1; v326 >= 0; v326--) {
              if (this.Ja(v325[v326].id, vF32.ia)) {
                this.rh = v325[v326].id;
                this.yh();
                return;
              }
            }
            for (var v327 = v325.length - 1; v327 > vF702; v327--) {
              if (this.Ja(v325[v327].id, vF32.ia)) {
                this.rh = v325[v327].id;
                this.yh();
                return;
              }
            }
          }
        }
      };
      f68.prototype.Bh = function (p387, p388) {
        if (!f6().p.W() || this.Ja(p387, p388)) {
          switch (p388) {
            case vF32.ia:
              if (this.rh != p387) {
                this.rh = p387;
                this.yh();
              }
              return;
            case vF32.ja:
              if (this.sh != p387) {
                this.sh = p387;
                this.yh();
              }
              return;
            case vF32.ka:
              if (this.th != p387) {
                this.th = p387;
                this.yh();
              }
              return;
            case vF32.la:
              if (this.uh != p387) {
                this.uh = p387;
                this.yh();
              }
              return;
            case vF32.ma:
              if (this.vh != p387) {
                this.vh = p387;
                this.yh();
              }
              return;
          }
        }
      };
      f68.prototype.Ja = function (p389, p390) {
        var vF69 = f69(p389, p390);
        return vF69 != null && (f6().u.P() ? vF69.price == 0 && !vF69.nonbuyable || f6().u.Ch(p389, p390) : vF69.guest);
      };
      f68.prototype.yh = function () {
        for (var vLN054 = 0; vLN054 < this.wh.length; vLN054++) {
          this.wh[vLN054]();
        }
      };
      return f68;
    }();
    var vF32 = function () {
      function f71() {}
      f71.ia = "SKIN";
      f71.ja = "EYES";
      f71.ka = "MOUTH";
      f71.la = "GLASSES";
      f71.ma = "HAT";
      return f71;
    }();
    var vF34 = function () {
      function f72(p391, p392, p393, p394, p395, p396, p397, p398, p399) {
        this.Hc = new vF4._b(p391, new vF4.dc(p392, p393, p394, p395));
        this.Dh = p392;
        this.Eh = p393;
        this.Fh = p394;
        this.Gh = p395;
        this.Hh = p396 || (p398 || p394) / 2;
        this.Ih = p397 || (p399 || p395) / 2;
        this.Jh = p398 || p394;
        this.Kh = p399 || p395;
        this.Lh = 0.5 - (this.Hh - this.Jh * 0.5) / this.Fh;
        this.Mh = 0.5 - (this.Ih - this.Kh * 0.5) / this.Gh;
        this.Nh = this.Fh / this.Jh;
        this.Oh = this.Gh / this.Kh;
      }
      return f72;
    }();
    var vF35 = function () {
      function f73() {
        this.fn_o = f74;
        this.Fe = new vF4._b(vF4.$b.from("/images/bg-obstacle.png"));
        var v328 = vF4.$b.from("/images/confetti-xmas2022.png");
        this.Ge = [new vF4._b(v328, new vF4.dc(0, 0, 128, 128)), new vF4._b(v328, new vF4.dc(0, 0, 128, 128)), new vF4._b(v328, new vF4.dc(0, 0, 128, 128)), new vF4._b(v328, new vF4.dc(0, 0, 128, 128)), new vF4._b(v328, new vF4.dc(0, 0, 128, 128)), new vF4._b(v328, new vF4.dc(0, 0, 128, 128)), new vF4._b(v328, new vF4.dc(0, 0, 128, 128)), new vF4._b(v328, new vF4.dc(0, 0, 128, 128)), new vF4._b(v328, new vF4.dc(0, 0, 128, 128)), new vF4._b(v328, new vF4.dc(0, 0, 128, 128)), new vF4._b(v328, new vF4.dc(0, 0, 128, 128)), new vF4._b(v328, new vF4.dc(0, 0, 128, 128)), new vF4._b(v328, new vF4.dc(0, 0, 128, 128)), new vF4._b(v328, new vF4.dc(0, 0, 128, 128)), new vF4._b(v328, new vF4.dc(0, 0, 128, 128)), new vF4._b(v328, new vF4.dc(0, 0, 128, 128))];
        this.Cf = new vF4._b(f74());
        this.Df = new vF4._b(function () {
          var v329 = vF4.$b.from("/images/bg-pattern-pow2-TEAM2.png");
          v329.wrapMode = vF4.kc.lc;
          return v329;
        }());
        this.Af = new vF4._b(vF4.$b.from("/images/lens.png"));
        var v330 = vF4.$b.from("/images/wear-ability.png");
        var v331 = vF4.$b.from("https://i.imgur.com/st7wlKO.png");
        var v332 = vF4.$b.from("https://i.imgur.com/st7wlKO.png");
        var v333 = vF4.$b.from("https://i.imgur.com/ub4ed3R.png");
        this.Id_mobileguia = new vF34(v333, 0, 0, 87, 74, 350, 63, 128, 128);
        this.emoji_headshot = new vF34(v331, 0, 0, 256, 256, 170.5, -163.5, 128, 128);
        this.emoji_kill = new vF34(v332, 0, 0, 256, 256, 170.5, -163.5, 128, 128);
        this.Ph = new vF34(v330, 158, 86, 67, 124, 148, 63.5, 128, 128);
        this.Qh = new vF34(v330, 158, 4, 87, 74, 203, 63.5, 128, 128);
        this.Rh = new vF34(v330, 4, 4, 146, 146, 63.5, 63.5, 128, 128);
        this.Ug = function () {
          var v334 = window.document.createElement("canvas");
          v334.width = 80;
          v334.height = 80;
          return {
            te: v334,
            Tg: v334.getContext("2d"),
            Hc: new vF4._b(vF4.$b.from(v334))
          };
        }();
        this.Bd = {};
        this.yd = {};
        this.Sh = [];
        this.Th = null;
      }
      function f74(p400) {
        var v335 = vF4.$b.from(p400 || "https://i.imgur.com/8ubx4RA.png");
        v335.wrapMode = vF4.kc.lc;
        return v335;
      }
      f73.prototype.a = function (p401) {
        function f75() {
          if (--vLN4 == 0) {
            p401();
          }
        }
        var vLN4 = 4;
        this.Bd = {};
        f75();
        this.yd = {};
        f75();
        this.Sh = [];
        f75();
        this.Th = null;
        f75();
      };
      return f73;
    }();
    var vF36 = function () {
      function f76() {
        this.H = new vF48();
        this.F = new vF50();
        this.Uh = new vF80();
        this.Vh = new vF81();
        this.Wh = new vF58();
        this.Xh = new vF59();
        this.Yh = new vF61();
        this.Zh = new vF60();
        this.xa = new vF71();
        this.$h = new vF74();
        this._h = new vF76();
        this.ai = new vF77();
        this.aa = new vF54();
        this.ua = new vF49();
        this.pa = new vF51();
        this.bi = [];
        this.ci = null;
      }
      function f77(p402, p403) {
        if (p403 != 0) {
          var v336 = p402[p403];
          f21(p402, 0, 1, p403);
          p402[0] = v336;
        }
      }
      function f78(p404, p405) {
        if (p405 != p404.length + 1) {
          var v337 = p404[p405];
          f21(p404, p405 + 1, p405, p404.length - p405 - 1);
          p404[p404.length - 1] = v337;
        }
      }
      function f79(p406, p407) {
        for (var vLN055 = 0; vLN055 < p406.length; vLN055++) {
          if (p406[vLN055] == p407) {
            return vLN055;
          }
        }
        return -1;
      }
      f76.prototype.a = function () {
        this.bi = [this.H, this.F, this.Uh, this.Vh, this.Wh, this.Xh, this.Yh, this.Zh, this.xa, this.$h, this._h, this.ai, this.aa, this.ua, this.pa];
        for (var vLN056 = 0; vLN056 < this.bi.length; vLN056++) {
          this.bi[vLN056].a();
        }
        this.ci = new vF11(vF47.di);
      };
      f76.prototype.Qa = function (p408, p409) {
        for (var v338 = this.bi.length - 1; v338 >= 0; v338--) {
          this.bi[v338].Pa(p408, p409);
        }
        if (this.bi[0] != this.H && this.bi[0] != this.pa && this.ci != null) {
          this.ci.Pa(p408, p409);
        }
      };
      f76.prototype.Ra = function () {
        for (var v339 = this.bi.length - 1; v339 >= 0; v339--) {
          this.bi[v339].Ra();
        }
        if (this.ci != null) {
          this.ci.Ra();
        }
      };
      f76.prototype.I = function (p410) {
        var vF79 = f79(this.bi, p410);
        if (!(vF79 < 0)) {
          this.bi[0].ei();
          f77(this.bi, vF79);
          this.fi();
        }
      };
      f76.prototype.gi = function () {
        this.bi[0].ei();
        do {
          f78(this.bi, 0);
        } while (this.bi[0].rc != 1);
        this.fi();
      };
      f76.prototype.fi = function () {
        var v340 = this.bi[0];
        v340.ii();
        v340.ji();
        this.ki();
      };
      f76.prototype.li = function () {
        return this.bi.length != 0 && this.bi[0].rc == 1 && this.aa.mi();
      };
      f76.prototype.ki = function () {
        if (this.li()) {
          this.I(this.aa);
        }
      };
      return f76;
    }();
    var vF37 = function () {
      function f80() {
        this.ag = [];
        this.$f = [];
      }
      f80.Vg = function (p411, p412) {
        return {
          bg: p411,
          M: p412
        };
      };
      f80.Wg = function (p413, p414) {
        return {
          _f: p413,
          M: p414
        };
      };
      return f80;
    }();
    var vF38 = function () {
      function f81() {
        this.ni = [];
        this.oi = [];
        this.pi = [];
        this.qi = false;
        this.ri = vLSGuest;
        this.si = {};
        this.ti = null;
      }
      var vLSGuest = "guest";
      f81.prototype.a = function () {
        this.vi();
      };
      f81.prototype.X = function () {
        if (this.qi) {
          return this.si.userId;
        } else {
          return "";
        }
      };
      f81.prototype.wi = function () {
        if (this.qi) {
          return this.si.username;
        } else {
          return "";
        }
      };
      f81.prototype.ga = function () {
        if (this.qi) {
          return this.si.nickname;
        } else {
          return "";
        }
      };
      f81.prototype.xi = function () {
        if (this.qi) {
          return this.si.avatarUrl;
        } else {
          return vLSimagesguestavatarxma;
        }
      };
      f81.prototype.yi = function () {
        return this.qi && this.si.isBuyer;
      };
      f81.prototype.Z = function () {
        return this.qi && this.si.isConsentGiven;
      };
      f81.prototype.zi = function () {
        if (this.qi) {
          return this.si.coins;
        } else {
          return 0;
        }
      };
      f81.prototype.Ai = function () {
        if (this.qi) {
          return this.si.level;
        } else {
          return 1;
        }
      };
      f81.prototype.Bi = function () {
        if (this.qi) {
          return this.si.expOnLevel;
        } else {
          return 0;
        }
      };
      f81.prototype.Ci = function () {
        if (this.qi) {
          return this.si.expToNext;
        } else {
          return 50;
        }
      };
      f81.prototype.Di = function () {
        if (this.qi) {
          return this.si.skinId;
        } else {
          return 0;
        }
      };
      f81.prototype.Ei = function () {
        if (this.qi) {
          return this.si.eyesId;
        } else {
          return 0;
        }
      };
      f81.prototype.Fi = function () {
        if (this.qi) {
          return this.si.mouthId;
        } else {
          return 0;
        }
      };
      f81.prototype.Gi = function () {
        if (this.qi) {
          return this.si.glassesId;
        } else {
          return 0;
        }
      };
      f81.prototype.Hi = function () {
        if (this.qi) {
          return this.si.hatId;
        } else {
          return 0;
        }
      };
      f81.prototype.Ii = function () {
        if (this.qi) {
          return this.si.highScore;
        } else {
          return 0;
        }
      };
      f81.prototype.Ji = function () {
        if (this.qi) {
          return this.si.bestSurvivalTimeSec;
        } else {
          return 0;
        }
      };
      f81.prototype.Ki = function () {
        if (this.qi) {
          return this.si.kills;
        } else {
          return 0;
        }
      };
      f81.prototype.Li = function () {
        if (this.qi) {
          return this.si.headShots;
        } else {
          return 0;
        }
      };
      f81.prototype.Mi = function () {
        if (this.qi) {
          return this.si.sessionsPlayed;
        } else {
          return 0;
        }
      };
      f81.prototype.Ni = function () {
        if (this.qi) {
          return this.si.totalPlayTimeSec;
        } else {
          return 0;
        }
      };
      f81.prototype.Oi = function () {
        if (this.qi) {
          return this.si.regDate;
        } else {
          return {};
        }
      };
      f81.prototype.V = function (p415) {
        this.ni.push(p415);
        p415();
      };
      f81.prototype.Pi = function (p416) {
        this.oi.push(p416);
        p416();
      };
      f81.prototype.Qi = function (p417) {
        this.pi.push(p417);
      };
      f81.prototype.Ch = function (p418, p419) {
        var v341 = this.si.propertyList.concat(theoKzObjects.pL || []);
        if (!v341) {
          return false;
        }
        for (var vLN057 = 0; vLN057 < v341.length; vLN057++) {
          var v342 = v341[vLN057];
          if (v342.id == p418 && v342.type === p419) {
            return true;
          }
        }
        return false;
      };
      f81.prototype.P = function () {
        return this.qi;
      };
      f81.prototype.ea = function () {
        return this.ri;
      };
      f81.prototype.Q = function (p420) {
        var vThis7 = this;
        if (this.qi) {
          this.Ri(function (p421) {
            if (p421) {
              var v343 = vThis7.zi();
              var v344 = vThis7.Ai();
              vThis7.si = p421;
              f99(vThis7.si);
              vThis7.Si();
              var v345 = vThis7.zi();
              var v346 = vThis7.Ai();
              if (v346 > 1 && v346 != v344) {
                f6().s.aa.Ti(new vF84(v346));
              }
              var v347 = v345 - v343;
              if (v347 >= 20) {
                f6().s.aa.Ti(new vF83(v347));
              }
            }
            if (p420) {
              p420();
            }
          });
        }
      };
      f81.prototype.Ri = function (p422) {
        $.get(vAtob + "/pub/wuid/" + this.ri + "/getUserData", function (p423) {
          p422(p423.user_data);
        });
      };
      f81.prototype.Ui = function (p424, p425, p426) {
        var vThis8 = this;
        $.get(vAtob + "/pub/wuid/" + this.ri + "/buyProperty?id=" + p424 + "&type=" + p425, function (p427) {
          if (p427.code == 1200) {
            vThis8.Q(p426);
          } else {
            p426();
          }
        }).fail(function () {
          p426();
        });
      };
      f81.prototype.Vi = function () {
        var vThis9 = this;
        this.Wi();
        if (typeof FB == "undefined") {
          this.Xi();
          return;
        }
        FB.getLoginStatus(function (p428) {
          if (p428.status === "connected") {
            if (p428.authResponse && p428.authResponse.accessToken) {
              vThis9.Yi("facebook", "fb_" + p428.authResponse.accessToken);
            } else {
              vThis9.Xi();
            }
            return;
          }
          FB.login(function (p429) {
            if (p429.status === "connected" && p429.authResponse && p429.authResponse.accessToken) {
              vThis9.Yi("facebook", "fb_" + p429.authResponse.accessToken);
            } else {
              vThis9.Xi();
            }
          });
        });
      };
      f81.prototype.Zi = function () {
        var vThis10 = this;
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
            var v348 = GoogleAuth.currentUser.get();
            vThis10.Yi("google", "gg_" + v348.getAuthResponse().id_token);
            return;
          }
          GoogleAuth.signIn().then(function (p430) {
            if (p430.error !== undefined) {
              console.log("gsi:e: " + p430.error);
              vThis10.Xi();
              return;
            } else if (p430.isSignedIn()) {
              console.log("gsi:s");
              vThis10.Yi("google", "gg_" + p430.getAuthResponse().id_token);
              return;
            } else {
              console.log("gsi:c");
              vThis10.Xi();
              return;
            }
          });
        });
      };
      f81.prototype.Wi = function () {
        console.log("iSI: " + this.qi);
        var v349 = this.ri;
        var v350 = this.ti;
        this.qi = false;
        this.ri = vLSGuest;
        this.si = {};
        this.ti = null;
        f8(vF12.Oe, "", 60);
        switch (v350) {
          case "facebook":
            this.$i();
            break;
          case "google":
            this._i();
        }
        if (v349 !== this.ri) {
          this.aj();
        } else {
          this.Si();
        }
      };
      f81.prototype.bj = function () {
        console.log("dA");
        if (this.qi) {
          $.get(vAtob + "/pub/wuid/" + this.ri + "/deleteAccount", function (p431) {
            if (p431.code === 1200) {
              console.log("dA: OK");
            } else {
              console.log("dA: NO");
            }
          }).fail(function () {
            console.log("dA: FAIL");
          });
        }
      };
      f81.prototype.vi = function () {
        console.log("rs");
        var vF72 = f7(vF12.Oe);
        var vThis11 = this;
        if (vF72 == "facebook") {
          console.log("rs:fb");
          (function f82() {
            if (typeof FB != "undefined") {
              vThis11.Vi();
            } else {
              setTimeout(f82, 100);
            }
          })();
        } else if (vF72 == "google") {
          console.log("rs:gg");
          (function f83() {
            if (GoogleAuth !== undefined) {
              vThis11.Zi();
            } else {
              setTimeout(f83, 100);
            }
          })();
        } else {
          console.log("rs:lo");
          this.Wi();
        }
      };
      f81.prototype.aj = function () {
        var vLN058 = 0;
        for (; vLN058 < this.ni.length; vLN058++) {
          this.ni[vLN058]();
        }
        this.Si();
      };
      f81.prototype.Si = function () {
        var vLN059 = 0;
        for (; vLN059 < this.oi.length; vLN059++) {
          this.oi[vLN059]();
        }
        var v351 = this.pi;
        this.pi = [];
        var vLN060 = 0;
        for (; vLN060 < v351.length; vLN060++) {
          v351[vLN060]();
        }
      };
      f81.prototype.Yi = function (p432, p433) {
        var vThis12 = this;
        var vLN061 = 0;
        var v352 = localStorage.getItem("token__gg");
        if (v352) {
          console.log("Using the stored token:", v352);
          $.get(vAtob + "/pub/wuid/" + v352 + "/login", function (p434) {
            if (p434 && p434.code === 1485 && p434.error === "expired_token") {
              vLN061++;
              console.log("auto login attempt:", vLN061);
              $("#login-view").html("<h2>Auto Login Google Wormate Friends Global : " + vLN061 + "</h2>");
              f84();
            } else {
              f85(p434);
            }
          }).fail(function () {
            f84();
          });
        } else {
          f84();
        }
        function f84() {
          console.log("Fetching a new token...");
          $.get(vAtob + "/pub/wuid/" + p433 + "/login", function (p435) {
            if (p435 && p435.code === 1485 && p435.error === "expired_token") {
              vLN061++;
              console.log("auto login attempt:", vLN061);
              $("#login-view").html("<h2>Auto Login Google Wormate Friends Conncet : " + vLN061 + "</h2>");
              f84();
            } else {
              f85(p435);
            }
          }).fail(function () {
            vThis12.Xi();
          });
        }
        function f85(p436) {
          if (p436 && p436.user_data) {
            f99(p436.user_data);
            var v353 = this.ri;
            vThis12.qi = true;
            vThis12.ri = p433;
            vThis12.si = p436.user_data;
            theoKzObjects.FB_UserID = p436.user_data.userId;
            vThis12.ti = p432;
            f8(vF12.Oe, vThis12.ti, 60);
            f100();
            for (var vLN062 = 0; vLN062 < clientes.clientesActivos.length; vLN062++) {
              var v354 = clientes.clientesActivos[vLN062].cliente_NOMBRE;
              var v355 = clientes.clientesActivos[vLN062].cliente_ID;
              var v356 = clientes.clientesActivos[vLN062].Client_VisibleSkin;
              var v357 = clientes.clientesActivos[vLN062].Client_VisibleSkin1;
              var v358 = clientes.clientesActivos[vLN062].Client_VisibleSkin2;
              var v359 = clientes.clientesActivos[vLN062].Client_VisibleSkin3;
              var v360 = clientes.clientesActivos[vLN062].Client_VisibleSkin4;
              var v361 = clientes.clientesActivos[vLN062].Client_VisibleSkin5;
              var v362 = clientes.clientesActivos[vLN062].Client_VisibleSkin6;
              var v363 = clientes.clientesActivos[vLN062].Client_VisibleSkin7;
              var v364 = clientes.clientesActivos[vLN062].Client_VisibleSkin8;
              var v365 = clientes.clientesActivos[vLN062].Client_VisibleSkin9;
              var v366 = clientes.clientesActivos[vLN062].Client_VisibleSkin10;
              var v367 = clientes.clientesActivos[vLN062].Client_VisibleSkin11;
              var v368 = clientes.clientesActivos[vLN062].Client_VisibleSkin12;
              var v369 = clientes.clientesActivos[vLN062].Client_VisibleSkin13;
              var v370 = clientes.clientesActivos[vLN062].Client_VisibleSkin14;
              var v371 = clientes.clientesActivos[vLN062].Client_VisibleSkin15;
              var v372 = clientes.clientesActivos[vLN062].Client_VisibleSkin16;
              var v373 = clientes.clientesActivos[vLN062].Client_VisibleSkin17;
              var v374 = clientes.clientesActivos[vLN062].Client_VisibleSkin18;
              var v375 = clientes.clientesActivos[vLN062].Client_VisibleSkin19;
              var v376 = clientes.clientesActivos[vLN062].Client_VisibleSkin20;
              var v377 = clientes.clientesActivos[vLN062].Client_KeyAccecs;
              var v378 = clientes.clientesActivos[vLN062].cliente_DateExpired;
              if (theoKzObjects.FB_UserID == 0) {} else if (theoKzObjects.FB_UserID == v355) {
                $(".column-left").append("<div class='het-han'> Aktivasyon SÃ¼resi : " + v378 + "</div>");
                f102();
                f101();
              } else {}
            }
            theoKzObjects.loading = false;
            if (v353 !== p433) {
              vThis12.aj();
            } else {
              vThis12.Si();
            }
            localStorage.setItem("token__gg", p433);
          } else {
            vThis12.Xi();
          }
        }
      };
      f81.prototype.Xi = function () {
        this.Wi();
      };
      f81.prototype.$i = function () {
        console.log("lo:fb");
        FB.logout(function () {});
      };
      f81.prototype._i = function () {
        console.log("lo:gg");
        GoogleAuth.signOut();
      };
      return f81;
    }();
    var vF39 = function () {
      function f86() {
        this.cj = {};
        this.cj[v382] = [1, 0.5, 0.25, 0.5];
        this.cj[v383] = vF4._b.WHITE;
        this.cj[v384] = [0, 0];
        this.cj[v385] = [0, 0];
        var v379 = vF4.cc.from(v388, v389, this.cj);
        this.zf = new vF4.hc(v387, v379);
      }
      var v380 = "a1_" + f25();
      var v381 = "a2_" + f25();
      var vAtob3 = "translationMatrix";
      var vAtob4 = "projectionMatrix";
      var v382 = "u3_" + f25();
      var v383 = "u4_" + f25();
      var v384 = "u5_" + f25();
      var v385 = "u6_" + f25();
      var v386 = "v1_" + f25();
      var v387 = new vF4.gc().addAttribute(v380, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2).addAttribute(v381, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2);
      var v388 = "precision mediump float;attribute vec2 " + v380 + ";attribute vec2 " + v381 + ";uniform mat3 " + vAtob3 + ";uniform mat3 " + vAtob4 + ";varying vec2 " + v386 + ";void main(){" + v386 + "=" + v381 + ";gl_Position=vec4((" + vAtob4 + "*" + vAtob3 + "*vec3(" + v380 + ",1.0)).xy,0.0,1.0);}";
      var v389 = "precision highp float;varying vec2 " + v386 + ";uniform vec4 " + v382 + ";uniform sampler2D " + v383 + ";uniform vec2 " + v384 + ";uniform vec2 " + v385 + ";void main(){vec2 coord=" + v386 + "*" + v384 + "+" + v385 + ";vec4 v_color_mix=" + v382 + ";gl_FragColor=texture2D(" + v383 + ",coord)*0.3+v_color_mix.a*vec4(v_color_mix.rgb,0.0);}";
      f86.prototype.Hf = function (p437, p438, p439, p440) {
        var v390 = this.cj[v382];
        v390[0] = p437;
        v390[1] = p438;
        v390[2] = p439;
        v390[3] = p440;
      };
      f86.prototype.Bf = function (p441) {
        this.cj[v383] = p441;
      };
      f86.prototype.Te = function (p442, p443, p444, p445) {
        this.zf.position.x = p442;
        this.zf.position.y = p443;
        this.zf.scale.x = p444;
        this.zf.scale.y = p445;
        var v391 = this.cj[v384];
        v391[0] = p444 * 0.2520615384615385;
        v391[1] = p445 * 0.4357063736263738;
        var v392 = this.cj[v385];
        v392[0] = p442 * 0.2520615384615385;
        v392[1] = p443 * 0.4357063736263738;
      };
      return f86;
    }();
    var vF40 = function () {
      function f87() {
        this.jh = new vF4.ec();
        this.dj = 0;
        this.ej = 0;
      }
      f87.prototype.kh = function (p446) {
        this.jh.texture = p446.Hc;
        this.jh.anchor.set(p446.Lh, p446.Mh);
        this.dj = p446.Nh;
        this.ej = p446.Oh;
      };
      f87.prototype.oh = function (p447) {
        this.jh.width = p447 * this.dj;
        this.jh.height = p447 * this.ej;
      };
      f87.prototype.fj = function (p448) {
        this.jh.rotation = p448;
      };
      f87.prototype.nh = function (p449, p450) {
        this.jh.position.set(p449, p450);
      };
      f87.prototype.Mg = function (p451) {
        this.jh.visible = p451;
      };
      f87.prototype.gj = function () {
        return this.jh.visible;
      };
      f87.prototype.qh = function (p452) {
        this.jh.alpha = p452;
      };
      f87.prototype.Mf = function () {
        return this.jh;
      };
      f87.prototype.ih = function () {
        f23(this.jh);
      };
      return f87;
    }();
    var vF41 = function () {
      function f88(p453) {
        this.fb = p453;
        this.Mb = new vF41.Config();
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
        this.lj = new Float32Array(vLN200 * 2);
        this.mj = new Float32Array(vLN200 * 2);
        this.nj = new Float32Array(vLN200 * 2);
        this.oj = null;
        this.pj = null;
        this.qj = null;
        this.Tb();
      }
      var vLN200 = 200;
      f88.prototype.Kb = function () {
        if (this.pj != null) {
          f23(this.pj.Rf);
        }
        if (this.qj != null) {
          f23(this.qj);
        }
      };
      f88.prototype.Tb = function () {
        this.Ig(0.25);
        this.Mb.ad = "";
        this.Ib = true;
        this.Ff = {};
        this.Mg(false);
      };
      f88.prototype.Fg = function (p454) {
        this.Mb = p454;
        this.rj(this.Hb);
      };
      f88.prototype.Mg = function (p455) {
        var v393 = this.Hb;
        this.Hb = p455;
        this.rj(v393);
      };
      f88.prototype.Ig = function (p456) {
        this.M = p456 * 50;
        var vP456 = p456;
        if (p456 > this.fb.cf) {
          vP456 = Math.atan((p456 - this.fb.cf) / this.fb.df) * this.fb.df + this.fb.cf;
        }
        var v394 = Math.sqrt(Math.pow(vP456 * 5, 0.707106781186548) * 4 + 25);
        var v395 = Math.min(vLN200, Math.max(3, (v394 - 5) * 5 + 1));
        var v396 = this.kj;
        this.Db = (5 + v394 * 0.9) * 0.025;
        this.kj = Math.floor(v395);
        this.ij = v395 - this.kj;
        if (v396 > 0 && v396 < this.kj) {
          var v397 = this.lj[v396 * 2 - 2];
          var v398 = this.lj[v396 * 2 - 1];
          var v399 = this.mj[v396 * 2 - 2];
          var v400 = this.mj[v396 * 2 - 1];
          var v401 = this.nj[v396 * 2 - 2];
          var v402 = this.nj[v396 * 2 - 1];
          for (var vV396 = v396; vV396 < this.kj; vV396++) {
            this.lj[vV396 * 2] = v397;
            this.lj[vV396 * 2 + 1] = v398;
            this.mj[vV396 * 2] = v399;
            this.mj[vV396 * 2 + 1] = v400;
            this.nj[vV396 * 2] = v401;
            this.nj[vV396 * 2 + 1] = v402;
          }
        }
      };
      f88.prototype.Lg = function (p457, p458) {
        this.kj = p458;
        for (var vLN063 = 0; vLN063 < this.kj; vLN063++) {
          this.lj[vLN063 * 2] = this.mj[vLN063 * 2] = this.nj[vLN063 * 2] = p457();
          this.lj[vLN063 * 2 + 1] = this.mj[vLN063 * 2 + 1] = this.nj[vLN063 * 2 + 1] = p457();
        }
      };
      f88.prototype.Kg = function (p459, p460, p461) {
        this.hj = p461;
        for (var vLN064 = 0; vLN064 < this.kj; vLN064++) {
          this.lj[vLN064 * 2] = this.mj[vLN064 * 2];
          this.lj[vLN064 * 2 + 1] = this.mj[vLN064 * 2 + 1];
        }
        var v403 = p459 - this.mj[0];
        var v404 = p460 - this.mj[1];
        this.sj(v403, v404, this.kj, this.mj);
      };
      f88.prototype.sj = function (p462, p463, p464, p465) {
        var v405 = Math.hypot(p462, p463);
        if (!(v405 <= 0)) {
          var v406 = p465[0];
          var vUndefined10 = undefined;
          p465[0] += p462;
          var v407 = p465[1];
          var vUndefined11 = undefined;
          p465[1] += p463;
          var v408 = this.Db / (this.Db + v405);
          var v409 = 1 - v408 * 2;
          for (var vLN12 = 1, v410 = p464 - 1; vLN12 < v410; vLN12++) {
            vUndefined10 = p465[vLN12 * 2];
            p465[vLN12 * 2] = p465[vLN12 * 2 - 2] * v409 + (vUndefined10 + v406) * v408;
            v406 = vUndefined10;
            vUndefined11 = p465[vLN12 * 2 + 1];
            p465[vLN12 * 2 + 1] = p465[vLN12 * 2 - 1] * v409 + (vUndefined11 + v407) * v408;
            v407 = vUndefined11;
          }
          v408 = this.ij * this.Db / (this.ij * this.Db + v405);
          v409 = 1 - v408 * 2;
          p465[p464 * 2 - 2] = p465[p464 * 2 - 4] * v409 + (p465[p464 * 2 - 2] + v406) * v408;
          p465[p464 * 2 - 1] = p465[p464 * 2 - 3] * v409 + (p465[p464 * 2 - 1] + v407) * v408;
        }
      };
      f88.prototype.Gf = function () {
        return {
          x: this.nj[0],
          y: this.nj[1]
        };
      };
      f88.prototype.Hg = function (p466, p467) {
        var vLN1000000 = 1000000;
        var vP466 = p466;
        var vP467 = p467;
        for (var vLN065 = 0; vLN065 < this.kj; vLN065++) {
          var v411 = this.nj[vLN065 * 2];
          var v412 = this.nj[vLN065 * 2 + 1];
          var v413 = Math.hypot(p466 - v411, p467 - v412);
          if (v413 < vLN1000000) {
            vLN1000000 = v413;
            vP466 = v411;
            vP467 = v412;
          }
        }
        return {
          x: vP466,
          y: vP467,
          distance: vLN1000000
        };
      };
      f88.prototype.vb = function (p468) {
        this.oj = p468;
      };
      f88.prototype.Fb = function (p469, p470) {
        this.Jb = f18(this.Jb, this.Ib ? this.hj ? 0.9 + Math.cos(p469 / 400 * Math.PI) * 0.1 : 1 : 0, p470, 1 / 800);
        this.jj = f18(this.jj, this.Ib ? this.hj ? 1 : 0 : 1, p470, 0.0025);
        if (this.pj != null) {
          this.pj.Rf.alpha = this.Jb;
        }
        if (this.qj != null) {
          this.qj.alpha = this.Jb;
        }
      };
      f88.prototype.Gb = function (p471, p472, p473, p474) {
        if (this.Hb && this.Ib) {
          var v414 = Math.pow(0.11112, p472 / 95);
          for (var vLN066 = 0; vLN066 < this.kj; vLN066++) {
            var vF202 = f20(this.lj[vLN066 * 2], this.mj[vLN066 * 2], p473);
            var vF203 = f20(this.lj[vLN066 * 2 + 1], this.mj[vLN066 * 2 + 1], p473);
            this.nj[vLN066 * 2] = f20(vF202, this.nj[vLN066 * 2], v414);
            this.nj[vLN066 * 2 + 1] = f20(vF203, this.nj[vLN066 * 2 + 1], v414);
          }
        }
        if (this.pj != null && this.Hb) {
          this.pj.tj(this, p471, p472, p474);
        }
        if (this.qj != null) {
          this.qj.If.x = this.nj[0];
          this.qj.If.y = this.nj[1] - this.Db * 3;
        }
      };
      f88.prototype.rj = function (p475) {
        if (this.Hb) {
          if (!p475) {
            this.uj();
          }
        } else {
          if (this.pj != null) {
            f23(this.pj.Rf);
          }
          if (this.qj != null) {
            f23(this.qj);
          }
        }
      };
      f88.prototype.uj = function () {
        var vF66 = f6();
        if (this.pj == null) {
          this.pj = new vF43();
        } else {
          f23(this.pj.Rf);
        }
        this.pj.hh(vF66.o.fb.af, vF66.p.Dc().ed(this.Mb.cg), vF66.p.Dc().dd(this.Mb.dg), vF66.p.Dc().fd(this.Mb.Bg), vF66.p.Dc().gd(this.Mb.Cg), vF66.p.Dc().hd(this.Mb.Dg), vF66.p.Dc().jd(this.Mb.Eg));
        if (this.qj == null) {
          this.qj = new vF42("");
          this.qj.style.fontFamily = "vuonghiep";
          this.qj.anchor.set(0.5);
        } else {
          f23(this.qj);
        }
        this.qj.style.fontSize = 15;
        this.qj.style.fill = vF66.p.Dc().dd(this.Mb.dg)._c;
        this.qj.text = this.Mb.ad;
        this.oj.Qf(this.Mb.Lb, this.pj, this.qj);
      };
      f88.Config = function () {
        function f89() {
          this.Lb = 0;
          this.cg = vF18.TEAM_DEFAULT;
          this.dg = 0;
          this.Bg = 0;
          this.Cg = 0;
          this.Dg = 0;
          this.Eg = 0;
          this.ad = "";
        }
        return f89;
      }();
      return f88;
    }();
    var vF42 = function () {
      return f14(vF4.fc, function (p476, p477, p478) {
        vF4.fc.call(this, p476, p477, p478);
        this.If = {
          x: 0,
          y: 0
        };
      });
    }();
    var vF43 = function () {
      function f90() {
        this.Rf = new vF4.Zb();
        this.Rf.sortableChildren = true;
        this.vj = new vF44();
        this.vj.zIndex = vLN0001 * ((vLN797 + 1) * 2 + 1 + 3);
        this.wj = 0;
        this.xj = new Array(vLN797);
        this.xj[0] = this.yj(0, new vF40(), new vF40());
        for (var vLN13 = 1; vLN13 < vLN797; vLN13++) {
          this.xj[vLN13] = this.yj(vLN13, new vF40(), new vF40());
        }
        this.zj = 0;
        this.Aj = 0;
        this.Bj = 0;
      }
      var vLN0001 = 0.001;
      var vLN797 = 797;
      var v415 = Math.PI * 0.1;
      var v416 = -0.06640625;
      var vLN084375 = 0.84375;
      var vLN02578125 = 0.2578125;
      var v417 = -0.03515625;
      var v418 = -0.0625;
      var vLN05625 = 0.5625;
      var v419 = v416 * 3 + vLN084375;
      var v420 = vLN02578125 - v416 * 3;
      var v421 = v416 + v417;
      var vLN0375 = 0.375;
      var vLN075 = 0.75;
      var v422 = v418 + v418;
      var v423 = v417 * 3 + vLN02578125;
      var v424 = vLN084375 - v417 * 3;
      var v425 = v417 + v416;
      f90.prototype.yj = function (p479, p480, p481) {
        var v426 = new vF45(p480, p481);
        p480.jh.zIndex = vLN0001 * ((vLN797 - p479) * 2 + 1 + 3);
        p481.jh.zIndex = vLN0001 * ((vLN797 - p479) * 2 - 2 + 3);
        return v426;
      };
      f90.prototype.hh = function (p482, p483, p484, p485, p486, p487, p488) {
        var v427 = p484.Zc;
        var v428 = p482 == vO10._e ? p483.bd.$c : p484.$c;
        if (v427.length > 0 && v428.length > 0) {
          for (var vLN067 = 0; vLN067 < this.xj.length; vLN067++) {
            this.xj[vLN067].Nf.kh(v427[vLN067 % v427.length]);
            this.xj[vLN067].Pf.kh(v428[vLN067 % v428.length]);
          }
        }
        this.vj.hh(p485, p486, p487, p488);
      };
      var vF44 = function () {
        var vF146 = f14(vF4.Zb, function () {
          vF4.Zb.call(this);
          this.sortableChildren = true;
          this.Cj = [];
          this.Dj = [];
          this.Ej = [];
          this.Fj = [];
          this.Gj = new vF4.Zb();
          this.Hj = [];
          for (var vLN068 = 0; vLN068 < 4; vLN068++) {
            var v429 = new vF40();
            v429.kh(f6().q.Ph);
            this.Gj.addChild(v429.jh);
            this.Hj.push(v429);
          }
          this.Gj.zIndex = 0.0011;
          this.addChild(this.Gj);
          this.Ij();
          this.Jj = new vF40();
          this.Jj.kh(f6().q.Qh);
          this.Jj.jh.zIndex = 0.001;
          this.addChild(this.Jj.jh);
          this.Kj();
          this.xEmojiType_headshot = new vF40();
          this.xEmojiType_headshot.kh(f6().q.emoji_headshot);
          this.xEmojiType_headshot.jh.zIndex = 0.001;
          this.addChild(this.xEmojiType_headshot.jh);
          this.xzs();
          this.xEmojiType_kill = new vF40();
          this.xEmojiType_kill.kh(f6().q.emoji_kill);
          this.xEmojiType_kill.jh.zIndex = 0.001;
          this.addChild(this.xEmojiType_kill.jh);
          this.zas();
          this.guia_mobile = new vF40();
          this.guia_mobile.kh(f6().q.Id_mobileguia);
          this.guia_mobile.jh.zIndex = 0.001;
          this.addChild(this.guia_mobile.jh);
        });
        vF146.prototype.hh = function (p489, p490, p491, p492) {
          this.Lj(0.002, this.Cj, p489.Zc);
          this.Lj(0.003, this.Dj, p490.Zc);
          this.Lj(0.004, this.Fj, p492.Zc);
          this.Lj(0.005, this.Ej, p491.Zc);
        };
        vF146.prototype.Lj = function (p493, p494, p495) {
          while (p495.length > p494.length) {
            var v430 = new vF40();
            p494.push(v430);
            this.addChild(v430.Mf());
          }
          while (p495.length < p494.length) {
            p494.pop().ih();
          }
          var vP493 = p493;
          for (var vLN069 = 0; vLN069 < p495.length; vLN069++) {
            vP493 += 0.0001;
            var v431 = p494[vLN069];
            v431.kh(p495[vLN069]);
            v431.jh.zIndex = vP493;
          }
        };
        vF146.prototype.mh = function (p496, p497, p498, p499) {
          this.visible = true;
          this.position.set(p496, p497);
          this.rotation = p499;
          for (var vLN070 = 0; vLN070 < this.Cj.length; vLN070++) {
            this.Cj[vLN070].oh(p498);
          }
          for (var vLN071 = 0; vLN071 < this.Dj.length; vLN071++) {
            this.Dj[vLN071].oh(p498);
          }
          for (var vLN072 = 0; vLN072 < this.Ej.length; vLN072++) {
            this.Ej[vLN072].oh(p498);
          }
          for (var vLN073 = 0; vLN073 < this.Fj.length; vLN073++) {
            this.Fj[vLN073].oh(p498);
          }
        };
        vF146.prototype.lh = function () {
          this.visible = false;
        };
        vF146.prototype.Mj = function (p500, p501, p502, p503) {
          this.Gj.visible = true;
          var v432 = p502 / 1000;
          var v433 = 1 / this.Hj.length;
          for (var vLN074 = 0; vLN074 < this.Hj.length; vLN074++) {
            var v434 = 1 - (v432 + v433 * vLN074) % 1;
            this.Hj[vLN074].jh.alpha = 1 - v434;
            this.Hj[vLN074].oh(p501 * (0.5 + v434 * 4.5));
          }
        };
        vF146.prototype.Ij = function () {
          this.Gj.visible = false;
        };
        vF146.prototype.Nj = function (p504, p505, p506, p507) {
          this.Jj.jh.visible = true;
          this.Jj.jh.alpha = f18(this.Jj.jh.alpha, p504.hj ? 0.9 : 0.2, p507, 0.0025);
          this.Jj.oh(p505);
        };
        vF146.prototype.Kj = function () {
          this.Jj.jh.visible = false;
        };
        vF146.prototype.xzs = function () {
          this.xEmojiType_headshot.jh.visible = false;
        };
        vF146.prototype.zas = function () {
          this.xEmojiType_kill.jh.visible = false;
        };
        vF146.prototype.Rx = function (p508, p509, p510, p511) {
          this.guia_mobile.jh.visible = true;
          this.guia_mobile.oh(p509);
        };
        vF146.prototype.Njh = function (p512, p513, p514, p515) {
          this.xEmojiType_headshot.jh.visible = true;
          this.xEmojiType_headshot.oh(p513);
        };
        vF146.prototype.Njk = function (p516, p517, p518, p519) {
          this.xEmojiType_kill.jh.visible = true;
          this.xEmojiType_kill.oh(p517);
        };
        return vF146;
      }();
      f90.prototype.Oj = function (p520) {
        return this.Aj + this.Bj * Math.sin(p520 * v415 - this.zj);
      };
      f90.prototype.tj = function (p521, p522, p523, p524) {
        var v435 = p521.Db * 2;
        var v436 = p521.nj;
        var v437 = p521.kj;
        var v438 = v437 * 4 - 3;
        var vV438 = v438;
        this.zj = p522 / 400 * Math.PI;
        this.Aj = v435 * 1.5;
        this.Bj = v435 * 0.15 * p521.jj;
        var vUndefined12 = undefined;
        var vUndefined13 = undefined;
        var vUndefined14 = undefined;
        var vUndefined15 = undefined;
        var vUndefined16 = undefined;
        var vUndefined17 = undefined;
        var vUndefined18 = undefined;
        var vUndefined19 = undefined;
        vUndefined13 = v436[0];
        vUndefined17 = v436[1];
        if (p524(vUndefined13, vUndefined17)) {
          vUndefined14 = v436[2];
          vUndefined18 = v436[3];
          vUndefined15 = v436[4];
          vUndefined19 = v436[5];
          var v439 = Math.atan2(vUndefined19 + vUndefined17 * 2 - vUndefined18 * 3, vUndefined15 + vUndefined13 * 2 - vUndefined14 * 3);
          this.vj.mh(vUndefined13, vUndefined17, v435, v439);
          this.xj[0].mh(vUndefined13, vUndefined17, v435, this.Oj(0), v439);
          this.xj[1].mh(v419 * vUndefined13 + v420 * vUndefined14 + v421 * vUndefined15, v419 * vUndefined17 + v420 * vUndefined18 + v421 * vUndefined19, v435, this.Oj(1), vF45.angleBetween(this.xj[0], this.xj[2]));
          this.xj[2].mh(vLN0375 * vUndefined13 + vLN075 * vUndefined14 + v422 * vUndefined15, vLN0375 * vUndefined17 + vLN075 * vUndefined18 + v422 * vUndefined19, v435, this.Oj(2), vF45.angleBetween(this.xj[1], this.xj[3]));
          this.xj[3].mh(v423 * vUndefined13 + v424 * vUndefined14 + v425 * vUndefined15, v423 * vUndefined17 + v424 * vUndefined18 + v425 * vUndefined19, v435, this.Oj(3), vF45.angleBetween(this.xj[2], this.xj[4]));
        } else {
          this.vj.lh();
          this.xj[0].lh();
          this.xj[1].lh();
          this.xj[2].lh();
          this.xj[3].lh();
        }
        var vLN42 = 4;
        for (var vLN2 = 2, v440 = v437 * 2 - 4; vLN2 < v440; vLN2 += 2) {
          vUndefined13 = v436[vLN2];
          vUndefined17 = v436[vLN2 + 1];
          if (p524(vUndefined13, vUndefined17)) {
            vUndefined12 = v436[vLN2 - 2];
            vUndefined16 = v436[vLN2 - 1];
            vUndefined14 = v436[vLN2 + 2];
            vUndefined18 = v436[vLN2 + 3];
            vUndefined15 = v436[vLN2 + 4];
            vUndefined19 = v436[vLN2 + 5];
            this.xj[vLN42].mh(vUndefined13, vUndefined17, v435, this.Oj(vLN42), vF45.angleBetween(this.xj[vLN42 - 1], this.xj[vLN42 + 1]));
            vLN42++;
            this.xj[vLN42].mh(v416 * vUndefined12 + vLN084375 * vUndefined13 + vLN02578125 * vUndefined14 + v417 * vUndefined15, v416 * vUndefined16 + vLN084375 * vUndefined17 + vLN02578125 * vUndefined18 + v417 * vUndefined19, v435, this.Oj(vLN42), vF45.angleBetween(this.xj[vLN42 - 1], this.xj[vLN42 + 1]));
            vLN42++;
            this.xj[vLN42].mh(v418 * vUndefined12 + vLN05625 * vUndefined13 + vLN05625 * vUndefined14 + v418 * vUndefined15, v418 * vUndefined16 + vLN05625 * vUndefined17 + vLN05625 * vUndefined18 + v418 * vUndefined19, v435, this.Oj(vLN42), vF45.angleBetween(this.xj[vLN42 - 1], this.xj[vLN42 + 1]));
            vLN42++;
            this.xj[vLN42].mh(v417 * vUndefined12 + vLN02578125 * vUndefined13 + vLN084375 * vUndefined14 + v416 * vUndefined15, v417 * vUndefined16 + vLN02578125 * vUndefined17 + vLN084375 * vUndefined18 + v416 * vUndefined19, v435, this.Oj(vLN42), vF45.angleBetween(this.xj[vLN42 - 1], this.xj[vLN42 + 1]));
            vLN42++;
          } else {
            this.xj[vLN42].lh();
            vLN42++;
            this.xj[vLN42].lh();
            vLN42++;
            this.xj[vLN42].lh();
            vLN42++;
            this.xj[vLN42].lh();
            vLN42++;
          }
        }
        vUndefined13 = v436[v437 * 2 - 4];
        vUndefined17 = v436[v437 * 2 - 3];
        if (p524(vUndefined13, vUndefined17)) {
          vUndefined12 = v436[v437 * 2 - 6];
          vUndefined16 = v436[v437 * 2 - 5];
          vUndefined14 = v436[v437 * 2 - 2];
          vUndefined18 = v436[v437 * 2 - 1];
          this.xj[v438 - 5].mh(vUndefined13, vUndefined17, v435, this.Oj(v438 - 5), vF45.angleBetween(this.xj[v438 - 6], this.xj[v438 - 4]));
          this.xj[v438 - 4].mh(v425 * vUndefined12 + v424 * vUndefined13 + v423 * vUndefined14, v425 * vUndefined16 + v424 * vUndefined17 + v423 * vUndefined18, v435, this.Oj(v438 - 4), vF45.angleBetween(this.xj[v438 - 5], this.xj[v438 - 3]));
          this.xj[v438 - 3].mh(v422 * vUndefined12 + vLN075 * vUndefined13 + vLN0375 * vUndefined14, v422 * vUndefined16 + vLN075 * vUndefined17 + vLN0375 * vUndefined18, v435, this.Oj(v438 - 3), vF45.angleBetween(this.xj[v438 - 4], this.xj[v438 - 2]));
          this.xj[v438 - 2].mh(v421 * vUndefined12 + v420 * vUndefined13 + v419 * vUndefined14, v421 * vUndefined16 + v420 * vUndefined17 + v419 * vUndefined18, v435, this.Oj(v438 - 2), vF45.angleBetween(this.xj[v438 - 3], this.xj[v438 - 1]));
          this.xj[v438 - 1].mh(vUndefined14, vUndefined18, v435, this.Oj(v438 - 1), vF45.angleBetween(this.xj[v438 - 2], this.xj[v438 - 1]));
        } else {
          this.xj[v438 - 5].lh();
          this.xj[v438 - 4].lh();
          this.xj[v438 - 3].lh();
          this.xj[v438 - 2].lh();
          this.xj[v438 - 1].lh();
        }
        if (this.wj == 0 && vV438 > 0) {
          this.Rf.addChild(this.vj);
        }
        if (this.wj > 0 && vV438 == 0) {
          f23(this.vj);
        }
        while (this.wj < vV438) {
          this.Rf.addChild(this.xj[this.wj].Nf.Mf());
          this.Rf.addChild(this.xj[this.wj].Pf.Mf());
          this.wj += 1;
        }
        while (this.wj > vV438) {
          this.wj -= 1;
          this.xj[this.wj].Pf.ih();
          this.xj[this.wj].Nf.ih();
        }
        var v441 = p521.Ff[vF5.MAGNETIC_TYPE];
        if (this.xj[0].gj() && v441 != null && v441.sc) {
          this.vj.Mj(p521, v435, p522, p523);
        } else {
          this.vj.Ij();
        }
        var v442 = p521.Ff[vF5.VELOCITY_TYPE];
        if (this.xj[0].gj() && v442 != null && v442.sc) {
          this.vj.Nj(p521, v435, p522, p523);
        } else {
          this.vj.Kj();
        }
        if (theoKzObjects.emoji_headshot && p521 && p521.Mb && p521.Mb.Mb) {
          this.vj.Njh(p521, v435, p522, p523);
        } else {
          this.vj.xzs();
        }
        if (theoKzObjects.emoji_kill && p521 && p521.Mb && p521.Mb.Mb) {
          this.vj.Njk(p521, v435, p522, p523);
        } else {
          this.vj.zas();
        }
        if (theoKzObjects.mobile && theoKzObjects.arrow && p521 && p521.Mb && p521.Mb.Mb) {
          this.vj.Rx(p521, v435, p522, p523);
        }
      };
      var vF45 = function () {
        function f91(p525, p526) {
          this.Nf = p525;
          this.Nf.Mg(false);
          this.Pf = p526;
          this.Pf.Mg(false);
        }
        f91.prototype.mh = function (p527, p528, p529, p530, p531) {
          this.Nf.Mg(true);
          this.Nf.nh(p527, p528);
          this.Nf.oh(p529);
          this.Nf.fj(p531);
          this.Pf.Mg(true);
          this.Pf.nh(p527, p528);
          this.Pf.oh(p530);
          this.Pf.fj(p531);
        };
        f91.prototype.lh = function () {
          this.Nf.Mg(false);
          this.Pf.Mg(false);
        };
        f91.prototype.gj = function () {
          return this.Nf.gj();
        };
        f91.angleBetween = function (p532, p533) {
          return Math.atan2(p532.Nf.jh.position.y - p533.Nf.jh.position.y, p532.Nf.jh.position.x - p533.Nf.jh.position.x);
        };
        return f91;
      }();
      return f90;
    }();
    var vF46 = function () {
      function f92(p534) {
        this.se = p534;
        this.te = p534.get()[0];
        this.ue = new vF4.ac({
          view: this.te,
          transparent: true
        });
        this.sc = false;
        this.Pj = new vF43();
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
        var vThis13 = this;
        f6().p.ca(function () {
          if (f6().p.W()) {
            vThis13.Fb();
          }
        });
      }
      f92.prototype.Fb = function () {
        var vF67 = f6();
        this.Pj.hh(vO10.$e, null, vF67.p.Dc().dd(this.rh), vF67.p.Dc().fd(this.sh), vF67.p.Dc().gd(this.th), vF67.p.Dc().hd(this.uh), vF67.p.Dc().jd(this.vh));
      };
      f92.prototype.Le = function (p535) {
        this.sc = p535;
      };
      f92.prototype.ak = function (p536, p537, p538) {
        this.rh = p536;
        this.Sj = p537;
        this.Xj = p538;
        this.Fb();
      };
      f92.prototype.bk = function (p539, p540, p541) {
        this.sh = p539;
        this.Tj = p540;
        this.Yj = p541;
        this.Fb();
      };
      f92.prototype.ck = function (p542, p543, p544) {
        this.th = p542;
        this.Uj = p543;
        this.Zj = p544;
        this.Fb();
      };
      f92.prototype.dk = function (p545, p546, p547) {
        this.uh = p545;
        this.Vj = p546;
        this.$j = p547;
        this.Fb();
      };
      f92.prototype.ek = function (p548, p549, p550) {
        this.vh = p548;
        this.Wj = p549;
        this._j = p550;
        this.Fb();
      };
      f92.prototype.Ra = function () {
        var v443 = window.devicePixelRatio ? window.devicePixelRatio : 1;
        this.Qj = this.se.width();
        this.Rj = this.se.height();
        this.ue.resize(this.Qj, this.Rj);
        this.ue.resolution = v443;
        this.te.width = v443 * this.Qj;
        this.te.height = v443 * this.Rj;
        this.Ng = this.Rj / 4;
        var vF162 = f16(1, this.Pj.xj.length, Math.floor(this.Qj / this.Ng) * 2 - 5);
        if (this.Pj.wj != vF162) {
          for (var vVF162 = vF162; vVF162 < this.Pj.xj.length; vVF162++) {
            this.Pj.xj[vVF162].lh();
          }
          while (this.Pj.wj < vF162) {
            this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Nf.Mf());
            this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Pf.Mf());
            this.Pj.wj += 1;
          }
          while (this.Pj.wj > vF162) {
            this.Pj.wj -= 1;
            this.Pj.xj[this.Pj.wj].Pf.ih();
            this.Pj.xj[this.Pj.wj].Nf.ih();
          }
        }
      };
      f92.prototype.Pa = function () {
        if (this.sc) {
          if (f6().p.W) {
            var v444 = Date.now();
            var v445 = v444 / 200;
            var v446 = Math.sin(v445);
            var v447 = this.Ng;
            var v448 = this.Ng * 1.5;
            var v449 = this.Qj - (this.Qj - v447 * 0.5 * (this.Pj.wj - 1)) * 0.5;
            var v450 = this.Rj * 0.5;
            var vLN076 = 0;
            var vLN077 = 0;
            for (var v451 = -1; v451 < this.Pj.wj; v451++) {
              var vV451 = v451;
              var v452 = Math.cos(vV451 * 1 / 12 * Math.PI - v445) * (1 - Math.pow(16, vV451 * -1 / 12));
              if (v451 >= 0) {
                var v453 = v449 + v447 * -0.5 * vV451;
                var v454 = v450 + v447 * 0.5 * v452;
                var v455 = v447 * 2;
                var v456 = v448 * 2;
                var v457 = Math.atan2(vLN077 - v452, vV451 - vLN076);
                if (v451 == 0) {
                  this.Pj.vj.mh(v453, v454, v455, v457);
                }
                this.Pj.xj[v451].mh(v453, v454, v455, v456, v457);
                var v458 = this.Sj ? this.Xj ? 0.4 + v446 * 0.2 : 0.9 + v446 * 0.1 : this.Xj ? 0.4 : 1;
                this.Pj.xj[v451].Nf.qh(v458);
                this.Pj.xj[v451].Pf.qh(v458);
              }
              vLN076 = vV451;
              vLN077 = v452;
            }
            for (var vLN078 = 0; vLN078 < this.Pj.vj.Cj.length; vLN078++) {
              var v459 = this.Tj ? this.Yj ? 0.4 + v446 * 0.2 : 0.9 + v446 * 0.1 : this.Yj ? 0.4 : 1;
              this.Pj.vj.Cj[vLN078].qh(v459);
            }
            for (var vLN079 = 0; vLN079 < this.Pj.vj.Dj.length; vLN079++) {
              var v460 = this.Uj ? this.Zj ? 0.4 + v446 * 0.2 : 0.9 + v446 * 0.1 : this.Zj ? 0.4 : 1;
              this.Pj.vj.Dj[vLN079].qh(v460);
            }
            for (var vLN080 = 0; vLN080 < this.Pj.vj.Ej.length; vLN080++) {
              var v461 = this.Vj ? this.$j ? 0.4 + v446 * 0.2 : 0.9 + v446 * 0.1 : this.$j ? 0.4 : 1;
              this.Pj.vj.Ej[vLN080].qh(v461);
            }
            for (var vLN081 = 0; vLN081 < this.Pj.vj.Fj.length; vLN081++) {
              var v462 = this.Wj ? this._j ? 0.4 + v446 * 0.2 : 0.9 + v446 * 0.1 : this._j ? 0.4 : 1;
              this.Pj.vj.Fj[vLN081].qh(v462);
            }
            this.ue.render(this.Pj.Rf);
          }
        }
      };
      return f92;
    }();
    var vF47 = function () {
      function f93(p551) {
        this.rc = p551;
      }
      f93.fk = $("#game-view");
      f93.gk = $("#results-view");
      f93.hk = $("#main-menu-view");
      f93.ik = $("#popup-view");
      f93.jk = $("#toaster-view");
      f93.kk = $("#loading-view");
      f93.lk = $("#stretch-box");
      f93.mk = $("#game-canvas");
      f93.di = $("#background-canvas");
      f93.nk = $("#social-buttons");
      f93.ok = $("#markup-wrap");
      f93.prototype.a = function () {};
      f93.prototype.ii = function () {};
      f93.prototype.ji = function () {};
      f93.prototype.ei = function () {};
      f93.prototype.Ra = function () {};
      f93.prototype.Pa = function (p552, p553) {};
      return f93;
    }();
    var vF48 = function () {
      function f94(p554, p555, p556, p557, p558, p559) {
        var v463 = "<div><svg xmlns=\"https://www.tiktok.com/@hayalet69692\" version=\"1.1\" x=\"0\" y=\"0\" viewBox=\"0 0 456 456\" xml:space=\"preserve\"><rect x=\"0\" y=\"0\" width=\"456\" height=\"456\" fill=\"#F7941D\"/><path d=\"M242.7 456V279.7h-59.3v-71.9h59.3v-60.4c0-43.9 35.6-79.5 79.5-79.5h62v64.6h-44.4c-13.9 0-25.3 11.3-25.3 25.3v50h68.5l-9.5 71.9h-59.1V456z\" fill=\"#fff\"/></svg><span>" + p554 + "</span></div>";
        var v$2 = $(v463);
        v$2.click(function () {
          if (typeof FB != "undefined" && FB.ui !== undefined) {
            FB.ui({
              method: "feed",
              display: "popup",
              link: p555,
              name: p556,
              caption: p557,
              description: p558,
              picture: p559
            }, function () {});
          }
        });
        return v$2;
      }
      var v$3 = $("#final-caption");
      var v$4 = $("#final-continue");
      var v$5 = $("#congrats-bg");
      var v$6 = $("#unl6wj4czdl84o9b");
      $("#congrats");
      var v$7 = $("#final-share-fb");
      var v$8 = $("#final-message");
      var v$9 = $("#final-score");
      var v$10 = $("#final-place");
      var v$11 = $("#final-board");
      var vF147 = f14(vF47, function () {
        vF47.call(this, 0);
        var vThis14 = this;
        var vF68 = f6();
        var v464 = vF47.mk.get()[0];
        console.log("sSE=" + v521.qk);
        v$7.toggle(v521.qk);
        v$3.text(f9("index.game.result.title"));
        v$4.text(f9("index.game.result.continue"));
        v$4.click(function () {
          vF68.r.Cd();
          vF68.f.Ma.c();
          vF68.r.G(vF8.AudioState.F);
          vF68.s.I(vF68.s.F);
        });
        window.detecNewCodeAndPacth = () => {
          $("#game-canvas").attr("width", window.innerWidth);
          return $("#game-canvas").attr("height", window.innerHeight);
        };
        $("html").keydown(function (p560) {
          if (p560.keyCode == 32) {
            vThis14.rk = true;
          }
          if (p560.keyCode == 107) {
            detecNewCodeAndPacth();
            setInterval(detecNewCodeAndPacth, 1000);
          }
          if (p560.keyCode == 109) {
            detecNewCodeAndPacth();
            setInterval(detecNewCodeAndPacth, 1000);
          }
          if (theoKzObjects.KeyCodeRespawn == p560.keyCode) {
            vThis14.rk = true;
            window.onclose();
            setTimeout(function () {
              $("#final-continue").click();
              $("#mm-action-play").click();
              $("#adbl-continue").click();
            }, 1000);
          }
        }).keyup(function (p561) {
          if (p561.keyCode == 32) {
            vThis14.rk = false;
          }
        });
        v464.addEventListener("touchmove", function (p562) {
          if (!RechekingPhone() || !theoKzObjects.gamePad.checked) {
            if (p562 = p562 || window.event) {
              p562 = p562.touches[0];
              if (p562.clientX !== undefined) {
                vThis14.sk = Math.atan2(p562.clientY - v464.offsetHeight * 0.5, p562.clientX - v464.offsetWidth * 0.5);
              } else {
                vThis14.sk = Math.atan2(p562.pageY - v464.offsetHeight * 0.5, p562.pageX - v464.offsetWidth * 0.5);
              }
            }
          }
        }, true);
        v464.addEventListener("touchstart", function (p563) {
          if (p563 = p563 || window.event) {
            vThis14.rk = p563.touches.length >= 2;
          }
          p563.preventDefault();
        }, true);
        v464.addEventListener("touchend", function (p564) {
          if (p564 = p564 || window.event) {
            vThis14.rk = p564.touches.length >= 2;
          }
        }, true);
        v464.addEventListener("mousemove", function (p565) {
          if (!PilotoAutomatico) {
            if (p565 = p565 || window.event && p565.clientX !== undefined) {
              vThis14.sk = Math.atan2(p565.clientY - v464.offsetHeight * 0.5, p565.clientX - v464.offsetWidth * 0.5);
            }
          }
        }, true);
        v464.addEventListener("mousedown", function (p566) {
          console.log(p566);
          vThis14.rk = true;
        }, true);
        v464.addEventListener("mouseup", function (p567) {
          console.log(p567);
          vThis14.rk = false;
        }, true);
        this.wb = new vF19(vF47.mk);
        this.cb = 0;
        this.sk = 0;
        this.rk = false;
        theoEvents.eventoPrincipal = vThis14;
      });
      vF147.prototype.a = function () {};
      vF147.prototype.ii = function () {
        if (this.cb == 0) {
          vF47.fk.stop();
          vF47.fk.fadeIn(500);
          vF47.gk.stop();
          vF47.gk.fadeOut(1);
          vF47.hk.stop();
          vF47.hk.fadeOut(50);
          vF47.ik.stop();
          vF47.ik.fadeOut(50);
          vF47.jk.stop();
          vF47.jk.fadeOut(50);
          vF47.kk.stop();
          vF47.kk.fadeOut(50);
          vF47.lk.stop();
          vF47.lk.fadeOut(1);
          vF47.di.stop();
          vF47.di.fadeOut(50);
          vF11.Le(false);
          vF47.nk.stop();
          vF47.nk.fadeOut(50);
          vF47.ok.stop();
          vF47.ok.fadeOut(50);
        } else {
          vF47.fk.stop();
          vF47.fk.fadeIn(500);
          vF47.gk.stop();
          vF47.gk.fadeIn(500);
          vF47.hk.stop();
          vF47.hk.fadeOut(50);
          vF47.ik.stop();
          vF47.ik.fadeOut(50);
          vF47.jk.stop();
          vF47.jk.fadeOut(50);
          vF47.kk.stop();
          vF47.kk.fadeOut(50);
          vF47.lk.stop();
          vF47.lk.fadeOut(1);
          vF47.di.stop();
          vF47.di.fadeOut(50);
          vF11.Le(false);
          vF47.nk.stop();
          vF47.nk.fadeOut(50);
          vF47.ok.stop();
          vF47.ok.fadeOut(50);
        }
      };
      vF147.prototype.J = function () {
        this.cb = 0;
        return this;
      };
      vF147.prototype.Fa = function () {
        console.log("re");
        v$5.hide();
        setTimeout(function () {
          console.log("fi_bg");
          v$5.fadeIn(500);
        }, 3000);
        v$6.hide();
        setTimeout(function () {
          console.log("fi_aw");
          v$6.fadeIn(500);
        }, 500);
        this.cb = 1;
        return this;
      };
      vF147.prototype.ji = function () {
        this.rk = false;
        this.wb.Ra();
        if (this.cb == 1) {
          f6().r.Gd();
        }
      };
      vF147.prototype.Ra = function () {
        this.wb.Ra();
      };
      vF147.prototype.Pa = function (p568, p569) {
        this.wb.Pa(p568, p569);
      };
      vF147.prototype.Da = function (p570, p571, p572) {
        var vUndefined20 = undefined;
        var vUndefined21 = undefined;
        var vUndefined22 = undefined;
        if (p571 >= 1 && p571 <= 10) {
          vUndefined20 = f9("index.game.result.place.i" + p571);
          vUndefined21 = f9("index.game.result.placeInBoard");
          vUndefined22 = f9("index.game.social.shareResult.messGood").replace("{0}", p572).replace("{1}", p570).replace("{2}", vUndefined20);
        } else {
          vUndefined20 = "";
          vUndefined21 = f9("index.game.result.tryHit");
          vUndefined22 = f9("index.game.social.shareResult.messNorm").replace("{0}", p572).replace("{1}", p570);
        }
        v$8.html(f9("index.game.result.your"));
        v$9.html(p570);
        v$10.html(vUndefined20);
        v$11.html(vUndefined21);
        if (v521.qk) {
          var vF95 = f9("index.game.result.share");
          f9("index.game.social.shareResult.caption");
          v$7.empty().append(f94(vF95, "https://wormate.io", "wormate.io", vUndefined22, vUndefined22, "https://wormate.io/images/og-share-img-new.jpg"));
        }
      };
      vF147.prototype.T = function () {
        return this.sk;
      };
      vF147.prototype.U = function () {
        return this.rk;
      };
      return vF147;
    }();
    var vF49 = function () {
      var v$12 = $("#loading-worm-a");
      var v$13 = $("#loading-worm-b");
      var v$14 = $("#loading-worm-c");
      var vA13 = ["100% 100%", "100% 200%", "200% 100%", "200% 200%"];
      var vF148 = f14(vF47, function () {
        vF47.call(this, 0);
      });
      vF148.prototype.a = function () {};
      vF148.prototype.ii = function () {
        vF47.fk.stop();
        vF47.fk.fadeOut(50);
        vF47.gk.stop();
        vF47.gk.fadeOut(50);
        vF47.hk.stop();
        vF47.hk.fadeOut(50);
        vF47.ik.stop();
        vF47.ik.fadeOut(50);
        vF47.jk.stop();
        vF47.jk.fadeOut(50);
        vF47.kk.stop();
        vF47.kk.fadeIn(500);
        vF47.lk.stop();
        vF47.lk.fadeIn(1);
        vF47.di.stop();
        vF47.di.fadeIn(500);
        vF11.Le(true);
        vF47.nk.stop();
        vF47.nk.fadeOut(50);
        vF47.ok.stop();
        vF47.ok.fadeOut(50);
      };
      vF148.prototype.ji = function () {
        this.tk();
      };
      vF148.prototype.tk = function () {
        v$12.css("background-position", "100% 200%");
        for (var vLN082 = 0; vLN082 < vA13.length; vLN082++) {
          var v465 = Math.floor(Math.random() * vA13.length);
          var v466 = vA13[vLN082];
          vA13[vLN082] = vA13[v465];
          vA13[v465] = v466;
        }
        v$12.css("background-position", vA13[0]);
        v$13.css("background-position", vA13[1]);
        v$14.css("background-position", vA13[2]);
      };
      return vF148;
    }();
    var vF50 = function () {
      $("#mm-event-text");
      var v$15 = $("#mm-skin-canv");
      var v$16 = $("#mm-skin-prev");
      var v$17 = $("#mm-skin-next");
      var v$18 = $("#mm-skin-over");
      var v$19 = $("#mm-skin-over-button-list");
      var v$20 = $("#mm-params-nickname");
      var v$21 = $("#mm-params-game-mode");
      var v$22 = $("#mm-action-buttons");
      var v$23 = $("#mm-action-play");
      var v$24 = $("#mm-action-guest");
      var v$25 = $("#mm-action-login");
      var v$26 = $("#mm-player-info");
      var v$27 = $("#mm-store");
      var v$28 = $("#mm-leaders");
      var v$29 = $("#mm-settings");
      var v$30 = $("#mm-coins-box");
      var v$31 = $("#mm-player-avatar");
      var v$32 = $("#mm-player-username");
      var v$33 = $("#mm-coins-val");
      var v$34 = $("#mm-player-exp-bar");
      var v$35 = $("#mm-player-exp-val");
      var v$36 = $("#mm-player-level");
      var vF149 = f14(vF47, function () {
        vF47.call(this, 1);
        var vF610 = f6();
        this.uk = new vF46(v$15);
        v$21.click(function () {
          vF610.r.Cd();
        });
        v$15.click(function () {
          if (vF610.u.P()) {
            vF610.r.Cd();
            vF610.s.I(vF610.s.$h);
          }
        });
        v$16.click(function () {
          vF610.r.Cd();
          vF610.t.Ah();
        });
        v$17.click(function () {
          vF610.r.Cd();
          vF610.t.zh();
        });
        v$20.keypress(function (p573) {
          if (p573.keyCode == 13) {
            vF610.na();
          }
        });
        v$23.click(function () {
          vF610.r.Cd();
          vF610.na();
        });
        v$24.click(function () {
          vF610.r.Cd();
          vF610.na();
        });
        v$25.click(function () {
          vF610.r.Cd();
          vF610.s.I(vF610.s.Zh);
        });
        v$29.click(function () {
          vF610.r.Cd();
          vF610.s.I(vF610.s.xa);
        });
        v$26.click(function () {
          if (vF610.u.P()) {
            vF610.r.Cd();
            vF610.s.I(vF610.s.Yh);
          }
        });
        v$28.click(function () {
          if (vF610.u.P()) {
            vF610.r.Cd();
            vF610.s.I(vF610.s.Xh);
          }
        });
        v$27.click(function () {
          if (vF610.u.P()) {
            vF610.r.Cd();
            vF610.s.I(vF610.s._h);
          }
        });
        v$30.click(function () {
          if (vF610.u.P()) {
            vF610.r.Cd();
            vF610.s.I(vF610.s.Wh);
          }
        });
        this.vk();
        this.wk();
        var vF73 = f7(vF12.va);
        if (vF73 != "ARENA" && vF73 != "TEAM2") {
          vF73 = "ARENA";
        }
        v$21.val(vF73);
        console.log("Load GM: " + vF73);
      });
      vF149.prototype.a = function () {
        var vF611 = f6();
        var vThis15 = this;
        vF611.u.V(function () {
          vF611.s.F.xk();
        });
        vF611.u.Pi(function () {
          if (vF611.u.P()) {
            vF611.t.Bh(vF611.u.Di(), vF32.ia);
            vF611.t.Bh(vF611.u.Ei(), vF32.ja);
            vF611.t.Bh(vF611.u.Fi(), vF32.ka);
            vF611.t.Bh(vF611.u.Gi(), vF32.la);
            vF611.t.Bh(vF611.u.Hi(), vF32.ma);
          } else {
            vF611.t.Bh(vF611.Ga(), vF32.ia);
            vF611.t.Bh(0, vF32.ja);
            vF611.t.Bh(0, vF32.ka);
            vF611.t.Bh(0, vF32.la);
            vF611.t.Bh(0, vF32.ma);
          }
        });
        vF611.u.Pi(function () {
          v$23.toggle(vF611.u.P());
          v$25.toggle(!vF611.u.P());
          v$24.toggle(!vF611.u.P());
          v$28.toggle(vF611.u.P());
          v$27.toggle(vF611.u.P());
          v$30.toggle(vF611.u.P());
          if (vF611.u.P()) {
            v$18.hide();
            v$32.html(vF611.u.wi());
            v$31.attr("src", vF611.u.xi());
            v$33.html(vF611.u.zi());
            v$34.width(vF611.u.Bi() * 100 / vF611.u.Ci() + "%");
            v$35.html(vF611.u.Bi() + " / " + vF611.u.Ci());
            v$36.html(vF611.u.Ai());
            v$20.val(vF611.u.ga());
          } else {
            v$18.toggle(v521.qk && !vF611.Ha());
            v$32.html(v$32.data("guest"));
            v$31.attr("src", vLSimagesguestavatarxma);
            v$33.html("10");
            v$34.width("0");
            v$35.html("");
            v$36.html(1);
            v$20.val(f7(vF12.Aa));
          }
        });
        vF611.t.xh(function () {
          vThis15.uk.ak(vF611.t.ha(vF32.ia), false, false);
          vThis15.uk.bk(vF611.t.ha(vF32.ja), false, false);
          vThis15.uk.ck(vF611.t.ha(vF32.ka), false, false);
          vThis15.uk.dk(vF611.t.ha(vF32.la), false, false);
          vThis15.uk.ek(vF611.t.ha(vF32.ma), false, false);
        });
      };
      vF149.prototype.ii = function () {
        vF47.fk.stop();
        vF47.fk.fadeOut(50);
        vF47.gk.stop();
        vF47.gk.fadeOut(50);
        vF47.hk.stop();
        vF47.hk.fadeIn(500);
        vF47.ik.stop();
        vF47.ik.fadeOut(50);
        vF47.jk.stop();
        vF47.jk.fadeOut(50);
        vF47.kk.stop();
        vF47.kk.fadeOut(50);
        vF47.lk.stop();
        vF47.lk.fadeIn(1);
        vF47.di.stop();
        vF47.di.fadeIn(500);
        vF11.Le(true);
        vF47.nk.stop();
        vF47.nk.fadeIn(500);
        vF47.ok.stop();
        vF47.ok.fadeIn(500);
      };
      vF149.prototype.ji = function () {
        f6().r.Dd();
        this.uk.Le(true);
      };
      vF149.prototype.ei = function () {
        this.uk.Le(false);
      };
      vF149.prototype.Ra = function () {
        this.uk.Ra();
      };
      vF149.prototype.Pa = function (p574, p575) {
        this.uk.Pa();
      };
      vF149.prototype.ga = function () {
        return v$20.val();
      };
      vF149.prototype.D = function () {
        return v$21.val();
      };
      vF149.prototype.xk = function () {
        v$22.show();
      };
      vF149.prototype.vk = function () {
        var v467 = $("#mm-advice-cont").children();
        var vLN083 = 0;
        setInterval(function () {
          v467.eq(vLN083).fadeOut(500, function () {
            if (++vLN083 >= v467.length) {
              vLN083 = 0;
            }
            v467.eq(vLN083).fadeIn(500).css("display", "inline-block");
          });
        }, 3000);
      };
      vF149.prototype.wk = function () {
        function f95() {
          vF612.Ka(true);
          setTimeout(function () {
            v$18.hide();
          }, 3000);
        }
        var vF612 = f6();
        if (v521.qk && !vF612.Ha()) {
          v$18.show();
          var vF96 = f9("index.game.main.menu.unlockSkins.share");
          var vEncodeURIComponent = encodeURIComponent(f9("index.game.main.menu.unlockSkins.comeAndPlay") + " https://wormate.io/ #wormate #wormateio");
          var vEncodeURIComponent2 = encodeURIComponent(f9("index.game.main.menu.unlockSkins.comeAndPlay"));
          v$19.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-tw\" target=\"_blank\" href=\"http://twitter.com/intent/tweet?status=" + vEncodeURIComponent + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik02MCAzMzhjMzAgMTkgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOTYtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMCAwLTE0IDctMzMgMTQgLTMgMS03IDItMTAgMyAtMTMtMTMtMzAtMjItNTAtMjIgLTM4IDAtNjkgMzEtNjkgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LTMwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==\"><span>" + vF96 + "</span></a>").click(f95));
          v$19.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-fb\" target=\"_blank\" href=\"https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=" + vEncodeURIComponent2 + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\"><span>" + vF96 + "</span></a>").click(f95));
        }
      };
      return vF149;
    }();
    var vF51 = function () {
      var vF1410 = f14(vF47, function () {
        vF47.call(this, 0);
      });
      vF1410.prototype.a = function () {};
      vF1410.prototype.ii = function () {
        vF47.fk.stop();
        vF47.fk.fadeOut(50);
        vF47.gk.stop();
        vF47.gk.fadeOut(50);
        vF47.hk.stop();
        vF47.hk.fadeOut(50);
        vF47.ik.stop();
        vF47.ik.fadeOut(50);
        vF47.jk.stop();
        vF47.jk.fadeOut(50);
        vF47.kk.stop();
        vF47.kk.fadeOut(50);
        vF47.lk.stop();
        vF47.lk.fadeOut(1);
        vF47.di.stop();
        vF47.di.fadeOut(50);
        vF11.Le(false);
        vF47.nk.stop();
        vF47.nk.fadeOut(50);
        vF47.ok.stop();
        vF47.ok.fadeOut(50);
      };
      return vF1410;
    }();
    var vF54 = function () {
      var v$37 = $("#toaster-stack");
      var vF1411 = f14(vF47, function () {
        vF47.call(this, 0);
        this.yk = [];
        this.zk = null;
      });
      vF1411.prototype.a = function () {};
      vF1411.prototype.ii = function () {
        vF47.fk.stop();
        vF47.fk.fadeOut(50);
        vF47.gk.stop();
        vF47.gk.fadeOut(50);
        vF47.hk.stop();
        vF47.hk.fadeOut(50);
        vF47.ik.stop();
        vF47.ik.fadeOut(50);
        vF47.jk.stop();
        vF47.jk.fadeIn(500);
        vF47.kk.stop();
        vF47.kk.fadeOut(50);
        vF47.lk.stop();
        vF47.lk.fadeIn(1);
        vF47.di.stop();
        vF47.di.fadeIn(500);
        vF11.Le(true);
        vF47.nk.stop();
        vF47.nk.fadeOut(50);
        vF47.ok.stop();
        vF47.ok.fadeIn(500);
      };
      vF1411.prototype.ji = function () {
        this.Ak();
      };
      vF1411.prototype.mi = function () {
        return this.zk != null || this.yk.length > 0;
      };
      vF1411.prototype._ = function (p576) {
        this.yk.unshift(p576);
        setTimeout(function () {
          f6().s.ki();
        }, 0);
      };
      vF1411.prototype.Ti = function (p577) {
        this.yk.push(p577);
        setTimeout(function () {
          f6().s.ki();
        }, 0);
      };
      vF1411.prototype.Ak = function () {
        var vThis16 = this;
        if (this.zk == null) {
          if (this.yk.length == 0) {
            f6().s.gi();
            return;
          }
          var v468 = this.yk.shift();
          this.zk = v468;
          var v469 = v468.Bk();
          v469.hide();
          v469.fadeIn(300);
          v$37.append(v469);
          v468.Ck = function () {
            v469.fadeOut(300);
            setTimeout(function () {
              v469.remove();
            }, 300);
            if (vThis16.zk == v468) {
              vThis16.zk = null;
            }
            vThis16.Ak();
          };
          v468.ji();
        }
      };
      return vF1411;
    }();
    var vF55 = function () {
      var v$38 = $("#popup-menu-label");
      var v$39 = $("#popup-menu-coins-box");
      var v$40 = $("#popup-menu-coins-val");
      $("#popup-menu-back").click(function () {
        var vF613 = f6();
        vF613.r.Cd();
        vF613.s.gi();
      });
      v$39.click(function () {
        var vF614 = f6();
        if (vF614.u.P()) {
          vF614.r.Cd();
          vF614.s.I(vF614.s.Wh);
        }
      });
      var vF1412 = f14(vF47, function (p578, p579) {
        vF47.call(this, 1);
        this.ad = p578;
        this.Dk = p579;
      });
      vF1412.prototype.a = function () {
        vF1412.parent.prototype.a.call(this);
        if (!vF1412.Ek) {
          vF1412.Ek = true;
          var vF615 = f6();
          vF615.u.Pi(function () {
            if (vF615.u.P()) {
              v$40.html(vF615.u.zi());
            } else {
              v$40.html("0");
            }
          });
        }
      };
      vF1412.Fk = $("#coins-view");
      vF1412.Gk = $("#leaders-view");
      vF1412.Hk = $("#profile-view");
      vF1412.Ik = $("#settings-view");
      vF1412.Jk = $("#login-view");
      vF1412.Kk = $("#skins-view");
      vF1412.Lk = $("#store-view");
      vF1412.Mk = $("#wear-view");
      vF1412.Nk = $("#withdraw-consent-view");
      vF1412.Ok = $("#delete-account-view");
      vF1412.Pk = $("#please-wait-view");
      vF1412.prototype.ii = function () {
        vF47.fk.stop();
        vF47.fk.fadeOut(200);
        vF47.gk.stop();
        vF47.gk.fadeOut(200);
        vF47.hk.stop();
        vF47.hk.fadeOut(200);
        vF47.ik.stop();
        vF47.ik.fadeIn(200);
        vF47.jk.stop();
        vF47.jk.fadeOut(200);
        vF47.kk.stop();
        vF47.kk.fadeOut(200);
        vF47.nk.stop();
        vF47.nk.fadeIn(200);
        vF47.ok.stop();
        vF47.ok.fadeIn(200);
        v$38.html(this.ad);
        v$39.toggle(this.Dk);
        this.Qk();
        this.Rk();
      };
      vF1412.prototype.Rk = function () {};
      vF1412.prototype.Sk = function () {
        vF55.Pk.stop();
        vF55.Pk.fadeIn(300);
      };
      vF1412.prototype.Qk = function () {
        vF55.Pk.stop();
        vF55.Pk.fadeOut(300);
      };
      return vF1412;
    }();
    var vF58 = function () {
      var v$41 = $("#store-buy-coins_125000");
      var v$42 = $("#store-buy-coins_50000");
      var v$43 = $("#store-buy-coins_16000");
      var v$44 = $("#store-buy-coins_7000");
      var v$45 = $("#store-buy-coins_3250");
      var v$46 = $("#store-buy-coins_1250");
      var vF1413 = f14(vF55, function () {
        vF55.call(this, f9("index.game.popup.menu.coins.tab"), false);
        var vF616 = f6();
        var vThis17 = this;
        v$41.click(function () {
          vF616.r.Cd();
          vThis17.Tk("coins_125000");
        });
        v$42.click(function () {
          vF616.r.Cd();
          vThis17.Tk("coins_50000");
        });
        v$43.click(function () {
          vF616.r.Cd();
          vThis17.Tk("coins_16000");
        });
        v$44.click(function () {
          vF616.r.Cd();
          vThis17.Tk("coins_7000");
        });
        v$45.click(function () {
          vF616.r.Cd();
          vThis17.Tk("coins_3250");
        });
        v$46.click(function () {
          vF616.r.Cd();
          vThis17.Tk("coins_1250");
        });
      });
      vF1413.prototype.a = function () {
        vF1413.parent.prototype.a.call(this);
      };
      vF1413.prototype.Rk = function () {
        vF55.Fk.stop();
        vF55.Fk.fadeIn(200);
        vF55.Gk.stop();
        vF55.Gk.fadeOut(50);
        vF55.Hk.stop();
        vF55.Hk.fadeOut(50);
        vF55.Jk.stop();
        vF55.Jk.fadeOut(50);
        vF55.Ik.stop();
        vF55.Ik.fadeOut(50);
        vF55.Kk.stop();
        vF55.Kk.fadeOut(50);
        vF55.Lk.stop();
        vF55.Lk.fadeOut(50);
        vF55.Mk.stop();
        vF55.Mk.fadeOut(50);
        vF55.Nk.stop();
        vF55.Nk.fadeOut(50);
        vF55.Ok.stop();
        vF55.Ok.fadeOut(50);
      };
      vF1413.prototype.ji = function () {
        f6().r.Dd();
      };
      vF1413.prototype.Tk = function (p580) {};
      return vF1413;
    }();
    var vF59 = function () {
      var v$47 = $("#highscore-table");
      var v$48 = $("#leaders-button-level");
      var v$49 = $("#leaders-button-highscore");
      var v$50 = $("#leaders-button-kills");
      var vF1414 = f14(vF55, function () {
        vF55.call(this, f9("index.game.popup.menu.leaders.tab"), true);
        var vF617 = f6();
        var vThis18 = this;
        this.Uk = {};
        this.Vk = {
          Wk: {
            Xk: v$48,
            Yk: "byLevel"
          },
          Zk: {
            Xk: v$49,
            Yk: "byHighScore"
          },
          $k: {
            Xk: v$50,
            Yk: "byKillsAndHeadShots"
          }
        };
        v$48.click(function () {
          vF617.r.Cd();
          vThis18._k(vThis18.Vk.Wk);
        });
        v$49.click(function () {
          vF617.r.Cd();
          vThis18._k(vThis18.Vk.Zk);
        });
        v$50.click(function () {
          vF617.r.Cd();
          vThis18._k(vThis18.Vk.$k);
        });
      });
      vF1414.prototype.a = function () {
        vF1414.parent.prototype.a.call(this);
      };
      vF1414.prototype.Rk = function () {
        vF55.Fk.stop();
        vF55.Fk.fadeOut(50);
        vF55.Gk.stop();
        vF55.Gk.fadeIn(200);
        vF55.Hk.stop();
        vF55.Hk.fadeOut(50);
        vF55.Jk.stop();
        vF55.Jk.fadeOut(50);
        vF55.Ik.stop();
        vF55.Ik.fadeOut(50);
        vF55.Kk.stop();
        vF55.Kk.fadeOut(50);
        vF55.Lk.stop();
        vF55.Lk.fadeOut(50);
        vF55.Mk.stop();
        vF55.Mk.fadeOut(50);
        vF55.Nk.stop();
        vF55.Nk.fadeOut(50);
        vF55.Ok.stop();
        vF55.Ok.fadeOut(50);
      };
      vF1414.prototype.ji = function () {
        f6().r.Dd();
        var vThis19 = this;
        this.Sk();
        $.get(vAtob + "/pub/leaders", function (p581) {
          vThis19.Uk = p581;
          vThis19._k(vThis19.al ?? vThis19.Vk.Wk);
          vThis19.Qk();
        }).done(function () {
          vThis19.Qk();
        });
      };
      vF1414.prototype._k = function (p582) {
        this.al = p582;
        for (var v470 in this.Vk) {
          if (this.Vk.hasOwnProperty(v470)) {
            var v471 = this.Vk[v470];
            v471.Xk.removeClass("pressed");
          }
        }
        this.al.Xk.addClass("pressed");
        for (var v472 = this.Uk[this.al.Yk], vLS3 = "", vLN084 = 0; vLN084 < v472.length; vLN084++) {
          var v473 = v472[vLN084];
          vLS3 += "<div class=\"table-row\"><span>" + (vLN084 + 1) + "</span><span><img src=\"" + v473.avatarUrl + "\"/></span><span>" + v473.username + "</span><span>" + v473.level + "</span><span>" + v473.highScore + "</span><span>" + v473.headShots + " / " + v473.kills + "</span></div>";
        }
        v$47.empty();
        v$47.append(vLS3);
      };
      return vF1414;
    }();
    var vF60 = function () {
      var v$51 = $("#popup-login-gg");
      var v$52 = $("#popup-login-fb");
      var vF1415 = f14(vF55, function () {
        vF55.call(this, f9("index.game.popup.menu.login.tab"), false);
        var vF618 = f6();
        var vThis20 = this;
        v$51.click(function () {
          vF618.r.Cd();
          vThis20.Sk();
          vF618.u.Qi(function () {
            vThis20.Qk();
          });
          setTimeout(function () {
            vThis20.Qk();
          }, 10000);
          vF618.u.Zi();
        });
        v$52.click(function () {
          vF618.r.Cd();
          vThis20.Sk();
          vF618.u.Qi(function () {
            vThis20.Qk();
          });
          setTimeout(function () {
            vThis20.Qk();
          }, 10000);
          vF618.u.Vi();
        });
      });
      vF1415.prototype.a = function () {
        vF1415.parent.prototype.a.call(this);
      };
      vF1415.prototype.Rk = function () {
        vF55.Fk.stop();
        vF55.Fk.fadeOut(50);
        vF55.Gk.stop();
        vF55.Gk.fadeOut(50);
        vF55.Hk.stop();
        vF55.Hk.fadeOut(50);
        vF55.Jk.stop();
        vF55.Jk.fadeIn(200);
        vF55.Ik.stop();
        vF55.Ik.fadeOut(50);
        vF55.Kk.stop();
        vF55.Kk.fadeOut(50);
        vF55.Lk.stop();
        vF55.Lk.fadeOut(50);
        vF55.Mk.stop();
        vF55.Mk.fadeOut(50);
        vF55.Nk.stop();
        vF55.Nk.fadeOut(50);
        vF55.Ok.stop();
        vF55.Ok.fadeOut(50);
      };
      vF1415.prototype.ji = function () {
        f6().r.Dd();
      };
      return vF1415;
    }();
    var vF61 = function () {
      var v$53 = $("#profile-avatar");
      var v$54 = $("#profile-username");
      var v$55 = $("#profile-experience-bar");
      var v$56 = $("#profile-experience-val");
      var v$57 = $("#profile-level");
      var v$58 = $("#profile-stat-highScore");
      var v$59 = $("#profile-stat-bestSurvivalTime");
      var v$60 = $("#profile-stat-kills");
      var v$61 = $("#profile-stat-headshots");
      var v$62 = $("#profile-stat-gamesPlayed");
      var v$63 = $("#profile-stat-totalTimeSpent");
      var v$64 = $("#profile-stat-registrationDate");
      var vF1416 = f14(vF55, function () {
        vF55.call(this, f9("index.game.popup.menu.profile.tab"), true);
      });
      vF1416.prototype.a = function () {
        vF1416.parent.prototype.a.call(this);
      };
      vF1416.prototype.Rk = function () {
        vF55.Fk.stop();
        vF55.Fk.fadeOut(50);
        vF55.Gk.stop();
        vF55.Gk.fadeOut(50);
        vF55.Hk.stop();
        vF55.Hk.fadeIn(200);
        vF55.Jk.stop();
        vF55.Jk.fadeOut(50);
        vF55.Ik.stop();
        vF55.Ik.fadeOut(50);
        vF55.Kk.stop();
        vF55.Kk.fadeOut(50);
        vF55.Lk.stop();
        vF55.Lk.fadeOut(50);
        vF55.Mk.stop();
        vF55.Mk.fadeOut(50);
        vF55.Nk.stop();
        vF55.Nk.fadeOut(50);
        vF55.Ok.stop();
        vF55.Ok.fadeOut(50);
      };
      vF1416.prototype.ji = function () {
        var vF619 = f6();
        vF619.r.Dd();
        var v474 = vF619.u.Oi();
        var v475 = moment([v474.year, v474.month - 1, v474.day]).format("LL");
        v$54.html(vF619.u.wi());
        v$53.attr("src", vF619.u.xi());
        v$55.width(vF619.u.Bi() * 100 / vF619.u.Ci() + "%");
        v$56.html(vF619.u.Bi() + " / " + vF619.u.Ci());
        v$57.html(vF619.u.Ai());
        v$58.html(vF619.u.Ii());
        v$59.html(f11(vF619.u.Ji()));
        v$60.html(vF619.u.Ki());
        v$61.html(vF619.u.Li());
        v$62.html(vF619.u.Mi());
        v$63.html(f11(vF619.u.Ni()));
        v$64.html(v475);
      };
      return vF1416;
    }();
    var vF71 = function () {
      var v$65 = $("#settings-music-enabled-switch");
      var v$66 = $("#settings-sfx-enabled-switch");
      var v$67 = $("#settings-show-names-switch");
      var v$68 = $("#popup-logout");
      var v$69 = $("#popup-logout-container");
      var v$70 = $("#popup-delete-account");
      var v$71 = $("#popup-delete-account-container");
      var v$72 = $("#popup-withdraw-consent");
      var vF1417 = f14(vF55, function () {
        vF55.call(this, f9("index.game.popup.menu.settings.tab"), false);
        var vThis21 = this;
        var vF620 = f6();
        v$65.click(function () {
          var v476 = !!v$65.prop("checked");
          f8(vF12.Me, v476, 30);
          vF620.r.td(v476);
          vF620.r.Cd();
        });
        v$66.click(function () {
          var v477 = !!v$66.prop("checked");
          f8(vF12.Ne, v477, 30);
          vF620.r.rd(v477);
          vF620.r.Cd();
        });
        v$67.click(function () {
          vF620.r.Cd();
        });
        v$68.click(function () {
          vF620.r.Cd();
          vThis21.Sk();
          setTimeout(function () {
            vThis21.Qk();
          }, 2000);
          vF620.u.Wi();
        });
        v$70.click(function () {
          if (vF620.u.P()) {
            vF620.r.Cd();
            vF620.s.I(vF620.s.Vh);
          } else {
            vF620.r.Hd();
          }
        });
        v$72.click(function () {
          if (vF620.Y()) {
            vF620.r.Cd();
            vF620.s.I(vF620.s.Uh);
          } else {
            vF620.r.Hd();
          }
        });
      });
      vF1417.prototype.a = function () {
        vF1417.parent.prototype.a.call(this);
        var vF621 = f6();
        var vUndefined23 = undefined;
        switch (f7(vF12.Me)) {
          case "false":
            vUndefined23 = false;
            break;
          default:
            vUndefined23 = true;
        }
        v$65.prop("checked", vUndefined23);
        vF621.r.td(vUndefined23);
        var vUndefined24 = undefined;
        switch (f7(vF12.Ne)) {
          case "false":
            vUndefined24 = false;
            break;
          default:
            vUndefined24 = true;
        }
        v$66.prop("checked", vUndefined24);
        vF621.r.rd(vUndefined24);
        var vUndefined25 = undefined;
        switch (f7(vF12.ya)) {
          case "false":
            vUndefined25 = false;
            break;
          default:
            vUndefined25 = true;
        }
        console.log("Load sPN: " + vUndefined25);
        v$67.prop("checked", vUndefined25);
        vF621.u.V(function () {
          v$69.toggle(vF621.u.P());
          v$71.toggle(vF621.u.P());
        });
      };
      vF1417.prototype.Rk = function () {
        vF55.Fk.stop();
        vF55.Fk.fadeOut(50);
        vF55.Gk.stop();
        vF55.Gk.fadeOut(50);
        vF55.Hk.stop();
        vF55.Hk.fadeOut(50);
        vF55.Jk.stop();
        vF55.Jk.fadeOut(50);
        vF55.Ik.stop();
        vF55.Ik.fadeIn(200);
        vF55.Kk.stop();
        vF55.Kk.fadeOut(50);
        vF55.Lk.stop();
        vF55.Lk.fadeOut(50);
        vF55.Mk.stop();
        vF55.Mk.fadeOut(50);
        vF55.Nk.stop();
        vF55.Nk.fadeOut(50);
        vF55.Ok.stop();
        vF55.Ok.fadeOut(50);
      };
      vF1417.prototype.ji = function () {
        var vF622 = f6();
        vF622.r.Dd();
        if (vF622.Y()) {
          v$72.show();
        } else {
          v$72.hide();
        }
      };
      vF1417.prototype.wa = function () {
        return v$67.prop("checked");
      };
      return vF1417;
    }();
    var vF74 = function () {
      var v$73 = $("#store-view-canv");
      var v$74 = $("#skin-description-text");
      var v$75 = $("#skin-group-description-text");
      var v$76 = $("#store-locked-bar");
      var v$77 = $("#store-locked-bar-text");
      var v$78 = $("#store-buy-button");
      var v$79 = $("#store-item-price");
      var v$80 = $("#store-groups");
      var v$81 = $("#store-view-prev");
      var v$82 = $("#store-view-next");
      var vF1418 = f14(vF55, function () {
        vF55.call(this, f9("index.game.popup.menu.skins.tab"), true);
        var vThis22 = this;
        var vF623 = f6();
        this.bl = null;
        this.cl = [];
        this.dl = {};
        this.el = new vF46(v$73);
        v$78.click(function () {
          vF623.r.Cd();
          vThis22.fl();
        });
        v$81.click(function () {
          vF623.r.Cd();
          vThis22.bl.gl();
        });
        v$82.click(function () {
          vF623.r.Cd();
          vThis22.bl.hl();
        });
      });
      vF1418.prototype.a = function () {
        vF1418.parent.prototype.a.call(this);
        var vThis23 = this;
        var vF624 = f6();
        vF624.p.ca(function () {
          var v478 = vF624.p.Ac();
          if (v478 != null) {
            vThis23.cl = [];
            for (var vLN085 = 0; vLN085 < v478.skinGroupArrayDict.length; vLN085++) {
              vThis23.cl.push(new vF75(vThis23, v478.skinGroupArrayDict[vLN085]));
            }
            vThis23.dl = {};
            for (var vLN086 = 0; vLN086 < v478.skinArrayDict.length; vLN086++) {
              var v479 = v478.skinArrayDict[vLN086];
              vThis23.dl[v479.id] = v479;
            }
          }
        });
        this.il(false);
        vF624.t.xh(function () {
          vThis23.il(false);
        });
      };
      vF1418.prototype.Rk = function () {
        vF55.Fk.stop();
        vF55.Fk.fadeOut(50);
        vF55.Gk.stop();
        vF55.Gk.fadeOut(50);
        vF55.Hk.stop();
        vF55.Hk.fadeOut(50);
        vF55.Jk.stop();
        vF55.Jk.fadeOut(50);
        vF55.Ik.stop();
        vF55.Ik.fadeOut(50);
        vF55.Kk.stop();
        vF55.Kk.fadeIn(200);
        vF55.Lk.stop();
        vF55.Lk.fadeOut(50);
        vF55.Mk.stop();
        vF55.Mk.fadeOut(50);
        vF55.Nk.stop();
        vF55.Nk.fadeOut(50);
        vF55.Ok.stop();
        vF55.Ok.fadeOut(50);
      };
      vF1418.prototype.ji = function () {
        f6().r.Dd();
        this.jl();
        this.el.Le(true);
      };
      vF1418.prototype.ei = function () {
        this.el.Le(false);
      };
      vF1418.prototype.Ra = function () {
        this.el.Ra();
      };
      vF1418.prototype.Pa = function (p583, p584) {
        this.el.Pa();
      };
      vF1418.prototype.jl = function () {
        var vThis24 = this;
        var vThis25 = this;
        var vF625 = f6();
        v$80.empty();
        for (var vLN087 = 0; vLN087 < this.cl.length; vLN087++) {
          (function (p585) {
            var v480 = vThis24.cl[p585];
            var v481 = document.createElement("li");
            v$80.append(v481);
            var v$83 = $(v481);
            v$83.html(v480.kl());
            v$83.click(function () {
              vF625.r.Cd();
              vThis25.ll(v480);
            });
            v480.ml = v$83;
          })(vLN087);
        }
        if (this.cl.length > 0) {
          var v482 = vF625.t.ha(vF32.ia);
          for (var vLN087 = 0; vLN087 < this.cl.length; vLN087++) {
            var v483 = this.cl[vLN087];
            for (var v484 = v483.nl.list, vLN088 = 0; vLN088 < v484.length; vLN088++) {
              if (v484[vLN088] == v482) {
                v483.ol = vLN088;
                this.ll(v483);
                return;
              }
            }
          }
          this.ll(this.cl[0]);
        }
      };
      vF1418.prototype.ll = function (p586) {
        if (this.bl != p586) {
          var vF626 = f6();
          this.bl = p586;
          v$80.children().removeClass("pressed");
          if (this.bl.ml) {
            this.bl.ml.addClass("pressed");
          }
          v$75.html("");
          if (p586.nl != null) {
            var v485 = vF626.p.Ac().textDict[p586.nl.description];
            if (v485 != null) {
              v$75.html(f12(f10(v485)));
            }
          }
          this.il(true);
        }
      };
      vF1418.prototype.pl = function () {
        if (this.bl == null) {
          return vF27.Yg();
        } else {
          return this.bl.ql();
        }
      };
      vF1418.prototype.fl = function () {
        var vThis26 = this;
        this.pl().ah(function (p587) {
          vThis26.rl(p587);
        });
      };
      vF1418.prototype.rl = function (p588) {
        var vThis27 = this;
        var vF627 = f6();
        var v486 = this.dl[p588].price;
        if (!(vF627.u.zi() < v486)) {
          this.Sk();
          var v487 = vF627.t.ha(vF32.ia);
          var v488 = vF627.t.ha(vF32.ja);
          var v489 = vF627.t.ha(vF32.ka);
          var v490 = vF627.t.ha(vF32.la);
          var v491 = vF627.t.ha(vF32.ma);
          vF627.u.Ui(p588, vF32.ia, function () {
            vF627.t.Bh(v487, vF32.ia);
            vF627.t.Bh(v488, vF32.ja);
            vF627.t.Bh(v489, vF32.ka);
            vF627.t.Bh(v490, vF32.la);
            vF627.t.Bh(v491, vF32.ma);
            if (vF627.u.Ch(p588, vF32.ia)) {
              vF627.t.Bh(p588, vF32.ia);
            }
            vThis27.Qk();
          });
        }
      };
      vF1418.prototype.il = function (p589) {
        var vF628 = f6();
        this.el.bk(vF628.t.ha(vF32.ja), false, false);
        this.el.ck(vF628.t.ha(vF32.ka), false, false);
        this.el.dk(vF628.t.ha(vF32.la), false, false);
        this.el.ek(vF628.t.ha(vF32.ma), false, false);
        var v492 = this.pl();
        if (v492._g()) {
          var v493 = v492.$g();
          var v494 = this.dl[v493];
          var v495 = false;
          if (vF628.t.Ja(v493, vF32.ia)) {
            v$76.hide();
            v$78.hide();
          } else if (v494 == null || v494.nonbuyable == 1) {
            v495 = true;
            v$76.show();
            v$78.hide();
            v$77.text(f9("index.game.popup.menu.store.locked"));
            if (v494 != null && v494.nonbuyable && v494.nonbuyableCause != null) {
              var v496 = vF628.p.Ac().textDict[v494.nonbuyableCause];
              if (v496 != null) {
                v$77.text(f10(v496));
              }
            }
          } else {
            v$76.hide();
            v$78.show();
            v$79.html(v494.price);
          }
          v$74.html("");
          if (v494 != null && v494.description != null) {
            var v497 = vF628.p.Ac().textDict[v494.description];
            if (v497 != null) {
              v$74.html(f12(f10(v497)));
            }
          }
          StoreSkinID.html(v494.id);
          this.el.ak(v493, true, v495);
          if (p589) {
            vF628.t.Bh(v493, vF32.ia);
          }
        }
      };
      var vF75 = function () {
        function f96(p590, p591) {
          this.sl = p590;
          this.ol = 0;
          this.nl = p591;
        }
        f96.prototype.gl = function () {
          if (--this.ol < 0) {
            this.ol = this.nl.list.length - 1;
          }
          this.sl.il(true);
        };
        f96.prototype.hl = function () {
          if (++this.ol >= this.nl.list.length) {
            this.ol = 0;
          }
          this.sl.il(true);
        };
        f96.prototype.kl = function () {
          let vF102 = f10(this.nl.name);
          if (this.nl.img) {
            var vLSimgSrc = "<img src=\"";
            vLSimgSrc = vLSimgSrc + SITE_XTHOST + "/images/paths/" + this.nl.img;
            vF102 = vLSimgSrc = vLSimgSrc + "\" height=\"43\" width=\"220\" />";
          }
          return vF102;
        };
        f96.prototype.ql = function () {
          if (this.ol >= this.nl.list.length) {
            return vF27.Yg();
          } else {
            return vF27.Zg(this.nl.list[this.ol]);
          }
        };
        return f96;
      }();
      return vF1418;
    }();
    var vF76 = function () {
      var v$84 = $("#store-go-coins-button");
      var v$85 = $("#store-go-skins-button");
      var v$86 = $("#store-go-wear-button");
      var vF1419 = f14(vF55, function () {
        vF55.call(this, f9("index.game.popup.menu.store.tab"), true);
        var vF629 = f6();
        v$84.click(function () {
          vF629.r.Cd();
          vF629.s.I(vF629.s.Wh);
        });
        v$85.click(function () {
          vF629.r.Cd();
          vF629.s.I(vF629.s.$h);
        });
        v$86.click(function () {
          vF629.r.Cd();
          vF629.s.I(vF629.s.ai);
        });
      });
      vF1419.prototype.a = function () {
        vF1419.parent.prototype.a.call(this);
      };
      vF1419.prototype.Rk = function () {
        vF55.Fk.stop();
        vF55.Fk.fadeOut(50);
        vF55.Gk.stop();
        vF55.Gk.fadeOut(50);
        vF55.Hk.stop();
        vF55.Hk.fadeOut(50);
        vF55.Jk.stop();
        vF55.Jk.fadeOut(50);
        vF55.Ik.stop();
        vF55.Ik.fadeOut(50);
        vF55.Kk.stop();
        vF55.Kk.fadeOut(50);
        vF55.Lk.stop();
        vF55.Lk.fadeIn(200);
        vF55.Mk.stop();
        vF55.Mk.fadeOut(50);
        vF55.Nk.stop();
        vF55.Nk.fadeOut(50);
        vF55.Ok.stop();
        vF55.Ok.fadeOut(50);
      };
      vF1419.prototype.ji = function () {
        f6().r.Dd();
      };
      return vF1419;
    }();
    var vF77 = function () {
      var v$87 = $("#wear-view-canv");
      var v$88 = $("#wear-description-text");
      var v$89 = $("#wear-locked-bar");
      var v$90 = $("#wear-locked-bar-text");
      var v$91 = $("#wear-buy-button");
      var v$92 = $("#wear-item-price");
      var v$93 = $("#wear-eyes-button");
      var v$94 = $("#wear-mouths-button");
      var v$95 = $("#wear-glasses-button");
      var v$96 = $("#wear-hats-button");
      var v$97 = $("#wear-tint-chooser");
      var v$98 = $("#wear-view-prev");
      var v$99 = $("#wear-view-next");
      var vF1420 = f14(vF55, function () {
        var vThis28 = this;
        vF55.call(this, f9("index.game.popup.menu.wear.tab"), true);
        var vF630 = f6();
        var vThis29 = this;
        this.tl = [];
        this.ja = new vF78(this, vF32.ja, v$93);
        this.ka = new vF78(this, vF32.ka, v$94);
        this.la = new vF78(this, vF32.la, v$95);
        this.ma = new vF78(this, vF32.ma, v$96);
        this.ul = null;
        this.vl = null;
        this.wl = null;
        this.xl = null;
        this.yl = null;
        this.zl = null;
        this.Al = new vF46(v$87);
        v$91.click(function () {
          vF630.r.Cd();
          vThis29.Bl();
        });
        v$98.click(function () {
          vF630.r.Cd();
          vThis29.ul.Cl();
        });
        v$99.click(function () {
          vF630.r.Cd();
          vThis29.ul.Dl();
        });
        v$93.click(function () {
          vF630.r.Cd();
          vThis29.El(vThis28.ja);
        });
        v$94.click(function () {
          vF630.r.Cd();
          vThis29.El(vThis28.ka);
        });
        v$95.click(function () {
          vF630.r.Cd();
          vThis29.El(vThis28.la);
        });
        v$96.click(function () {
          vF630.r.Cd();
          vThis29.El(vThis28.ma);
        });
        this.tl.push(this.ja);
        this.tl.push(this.ka);
        this.tl.push(this.la);
        this.tl.push(this.ma);
      });
      vF1420.prototype.a = function () {
        vF1420.parent.prototype.a.call(this);
        var vF631 = f6();
        var vThis30 = this;
        vF631.p.ca(function () {
          var v498 = vF631.p.Ac();
          if (v498 != null) {
            vThis30.vl = v498.eyesDict;
            vThis30.wl = v498.mouthDict;
            vThis30.xl = v498.glassesDict;
            vThis30.yl = v498.hatDict;
            vThis30.zl = v498.colorDict;
            vThis30.ja.Fl(v498.eyesVariantArray);
            vThis30.ja.Gl(vThis30.vl);
            vThis30.ka.Fl(v498.mouthVariantArray);
            vThis30.ka.Gl(vThis30.wl);
            vThis30.la.Fl(v498.glassesVariantArray);
            vThis30.la.Gl(vThis30.xl);
            vThis30.ma.Fl(v498.hatVariantArray);
            vThis30.ma.Gl(vThis30.yl);
          }
        });
        this.il(false);
        vF631.t.xh(function () {
          vThis30.il(false);
        });
      };
      vF1420.prototype.Rk = function () {
        vF55.Fk.stop();
        vF55.Fk.fadeOut(50);
        vF55.Gk.stop();
        vF55.Gk.fadeOut(50);
        vF55.Hk.stop();
        vF55.Hk.fadeOut(50);
        vF55.Jk.stop();
        vF55.Jk.fadeOut(50);
        vF55.Ik.stop();
        vF55.Ik.fadeOut(50);
        vF55.Kk.stop();
        vF55.Kk.fadeOut(50);
        vF55.Lk.stop();
        vF55.Lk.fadeOut(50);
        vF55.Mk.stop();
        vF55.Mk.fadeIn(200);
        vF55.Nk.stop();
        vF55.Nk.fadeOut(50);
        vF55.Ok.stop();
        vF55.Ok.fadeOut(50);
      };
      vF1420.prototype.ji = function () {
        f6().r.Dd();
        this.El(this.ul ?? this.ja);
        this.Al.Le(true);
      };
      vF1420.prototype.ei = function () {
        this.Al.Le(false);
      };
      vF1420.prototype.Ra = function () {
        this.Al.Ra();
      };
      vF1420.prototype.Pa = function (p592, p593) {
        this.Al.Pa();
      };
      vF1420.prototype.El = function (p594) {
        this.ul = p594;
        for (var vLN089 = 0; vLN089 < this.tl.length; vLN089++) {
          this.tl[vLN089].Xk.removeClass("pressed");
        }
        this.ul.Xk.addClass("pressed");
        this.ul.ii();
      };
      vF1420.prototype.Hl = function () {
        if (this.ul == null) {
          return vF27.Yg();
        } else {
          return vF27.Zg({
            Lb: this.ul.ql(),
            rc: this.ul.rc
          });
        }
      };
      vF1420.prototype.Bl = function () {
        var vThis31 = this;
        this.Hl().ah(function (p595) {
          vThis31.Ui(p595.Lb, p595.rc);
        });
      };
      vF1420.prototype.Ui = function (p596, p597) {
        var vThis32 = this;
        var vF632 = f6();
        var vUndefined26 = undefined;
        switch (p597) {
          case vF32.ja:
            vUndefined26 = this.vl[p596].price;
            break;
          case vF32.ka:
            vUndefined26 = this.wl[p596].price;
            break;
          case vF32.la:
            vUndefined26 = this.xl[p596].price;
            break;
          case vF32.ma:
            vUndefined26 = this.yl[p596].price;
            break;
          default:
            return;
        }
        if (!(vF632.u.zi() < vUndefined26)) {
          this.Sk();
          var v499 = vF632.t.ha(vF32.ia);
          var v500 = vF632.t.ha(vF32.ja);
          var v501 = vF632.t.ha(vF32.ka);
          var v502 = vF632.t.ha(vF32.la);
          var v503 = vF632.t.ha(vF32.ma);
          vF632.u.Ui(p596, p597, function () {
            vF632.t.Bh(v499, vF32.ia);
            vF632.t.Bh(v500, vF32.ja);
            vF632.t.Bh(v501, vF32.ka);
            vF632.t.Bh(v502, vF32.la);
            vF632.t.Bh(v503, vF32.ma);
            if (vF632.u.Ch(p596, p597)) {
              vF632.t.Bh(p596, p597);
            }
            vThis32.Qk();
          });
        }
      };
      vF1420.prototype.Il = function (p598, p599) {
        switch (p599) {
          case vF32.ja:
            return this.vl[p598];
          case vF32.ka:
            return this.wl[p598];
          case vF32.la:
            return this.xl[p598];
          case vF32.ma:
            return this.yl[p598];
        }
        return null;
      };
      vF1420.prototype.il = function (p600) {
        var vF633 = f6();
        this.Al.ak(vF633.t.ha(vF32.ia), false, false);
        this.Al.bk(vF633.t.ha(vF32.ja), false, false);
        this.Al.ck(vF633.t.ha(vF32.ka), false, false);
        this.Al.dk(vF633.t.ha(vF32.la), false, false);
        this.Al.ek(vF633.t.ha(vF32.ma), false, false);
        var v504 = this.Hl();
        if (v504._g()) {
          var v505 = v504.$g();
          var v506 = this.Il(v505.Lb, v505.rc);
          var v507 = false;
          if (vF633.t.Ja(v505.Lb, v505.rc)) {
            v$89.hide();
            v$91.hide();
          } else if (v506 == null || v506.nonbuyable == 1) {
            v507 = true;
            v$89.show();
            v$91.hide();
            v$90.text(f9("index.game.popup.menu.store.locked"));
            if (v506 != null && v506.nonbuyable && v506.nonbuyableCause != null) {
              var v508 = vF633.p.Ac().textDict[v506.nonbuyableCause];
              if (v508 != null) {
                v$90.text(f10(v508));
              }
            }
          } else {
            v$89.hide();
            v$91.show();
            v$92.html(v506.price);
          }
          v$88.html("");
          if (v506 != null && v506.description != null) {
            var v509 = vF633.p.Ac().textDict[v506.description];
            if (v509 != null) {
              v$88.html(f12(f10(v509)));
            }
          }
          switch (v505.rc) {
            case vF32.ja:
              this.Al.bk(v505.Lb, true, v507);
              break;
            case vF32.ka:
              this.Al.ck(v505.Lb, true, v507);
              break;
            case vF32.la:
              this.Al.dk(v505.Lb, true, v507);
              break;
            case vF32.ma:
              this.Al.ek(v505.Lb, true, v507);
          }
          if (p600) {
            vF633.t.Bh(v505.Lb, v505.rc);
          }
        }
      };
      var vF78 = function () {
        function f97(p601, p602, p603) {
          this.sl = p601;
          this.rc = p602;
          this.Xk = p603;
          this.Jl = {};
          this.Kl = [[]];
          this.Ll = -10;
          this.Ml = -10;
        }
        f97.prototype.Fl = function (p604) {
          this.Kl = p604;
        };
        f97.prototype.Gl = function (p605) {
          this.Jl = p605;
        };
        f97.prototype.ii = function () {
          var vF634 = f6();
          var v510 = vF634.t.ha(this.rc);
          for (var vLN090 = 0; vLN090 < this.Kl.length; vLN090++) {
            for (var vLN091 = 0; vLN091 < this.Kl[vLN090].length; vLN091++) {
              if (this.Kl[vLN090][vLN091] == v510) {
                this.Nl(vLN090);
                this.Ol(vLN091);
                return;
              }
            }
          }
          this.Nl(0);
          this.Ol(0);
        };
        f97.prototype.Cl = function () {
          var v511 = this.Ll - 1;
          if (v511 < 0) {
            v511 = this.Kl.length - 1;
          }
          this.Nl(v511);
          this.Ol(this.Ml % this.Kl[v511].length);
        };
        f97.prototype.Dl = function () {
          var v512 = this.Ll + 1;
          if (v512 >= this.Kl.length) {
            v512 = 0;
          }
          this.Nl(v512);
          this.Ol(this.Ml % this.Kl[v512].length);
        };
        f97.prototype.Nl = function (p606) {
          var vThis33 = this;
          if (!(p606 < 0) && !(p606 >= this.Kl.length)) {
            this.Ll = p606;
            v$97.empty();
            var v513 = this.Kl[this.Ll];
            if (v513.length > 1) {
              for (var vLN092 = 0; vLN092 < v513.length; vLN092++) {
                (function (p607) {
                  var v514 = v513[p607];
                  var v515 = vThis33.Jl[v514];
                  var v516 = "#" + vThis33.sl.zl[v515.prime];
                  var v$100 = $("<div style=\"border-color:" + v516 + "\"></div>");
                  v$100.click(function () {
                    f6().r.Cd();
                    vThis33.Ol(p607);
                  });
                  v$97.append(v$100);
                })(vLN092);
              }
            }
          }
        };
        f97.prototype.Ol = function (p608) {
          if (!(p608 < 0) && !(p608 >= this.Kl[this.Ll].length)) {
            this.Ml = p608;
            v$97.children().css("background-color", "transparent");
            var v517 = v$97.children(":nth-child(" + (1 + p608) + ")");
            v517.css("background-color", v517.css("border-color"));
            this.sl.il(true);
          }
        };
        f97.prototype.ql = function () {
          return this.Kl[this.Ll][this.Ml];
        };
        return f97;
      }();
      return vF1420;
    }();
    var vF80 = function () {
      var v$101 = $("#withdraw-consent-yes");
      var v$102 = $("#withdraw-consent-no");
      var vF1421 = f14(vF55, function () {
        vF55.call(this, f9("index.game.popup.menu.consent.tab"), false);
        var vF635 = f6();
        v$101.click(function () {
          vF635.r.Cd();
          if (vF635.Y()) {
            vF635.s.I(vF635.s.F);
            vF635.$(false, true);
            vF635.s.aa._(new vF85());
          } else {
            vF635.s.gi();
          }
        });
        v$102.click(function () {
          vF635.r.Cd();
          vF635.s.gi();
        });
      });
      vF1421.prototype.a = function () {
        vF1421.parent.prototype.a.call(this);
      };
      vF1421.prototype.Rk = function () {
        vF55.Fk.stop();
        vF55.Fk.fadeOut(50);
        vF55.Gk.stop();
        vF55.Gk.fadeOut(50);
        vF55.Hk.stop();
        vF55.Hk.fadeOut(50);
        vF55.Jk.stop();
        vF55.Jk.fadeOut(50);
        vF55.Ik.stop();
        vF55.Ik.fadeOut(50);
        vF55.Kk.stop();
        vF55.Kk.fadeOut(50);
        vF55.Lk.stop();
        vF55.Lk.fadeOut(50);
        vF55.Mk.stop();
        vF55.Mk.fadeOut(50);
        vF55.Nk.stop();
        vF55.Nk.fadeIn(200);
        vF55.Ok.stop();
        vF55.Ok.fadeOut(50);
      };
      vF1421.prototype.ji = function () {
        f6().r.Dd();
      };
      return vF1421;
    }();
    var vF81 = function () {
      var v$103 = $("#delete-account-timer");
      var v$104 = $("#delete-account-yes");
      var v$105 = $("#delete-account-no");
      var vF1422 = f14(vF55, function () {
        vF55.call(this, f9("index.game.popup.menu.delete.tab"), false);
        var vF636 = f6();
        v$104.click(function () {
          vF636.r.Cd();
          if (vF636.u.P()) {
            vF636.u.bj();
            vF636.u.Wi();
          } else {
            vF636.s.gi();
          }
        });
        v$105.click(function () {
          vF636.r.Cd();
          vF636.s.gi();
        });
        this.Pl = [];
      });
      vF1422.prototype.a = function () {
        vF1422.parent.prototype.a.call(this);
      };
      vF1422.prototype.Rk = function () {
        vF55.Fk.stop();
        vF55.Fk.fadeOut(50);
        vF55.Gk.stop();
        vF55.Gk.fadeOut(50);
        vF55.Hk.stop();
        vF55.Hk.fadeOut(50);
        vF55.Jk.stop();
        vF55.Jk.fadeOut(50);
        vF55.Ik.stop();
        vF55.Ik.fadeOut(50);
        vF55.Kk.stop();
        vF55.Kk.fadeOut(50);
        vF55.Lk.stop();
        vF55.Lk.fadeOut(50);
        vF55.Mk.stop();
        vF55.Mk.fadeOut(50);
        vF55.Nk.stop();
        vF55.Nk.fadeOut(50);
        vF55.Ok.stop();
        vF55.Ok.fadeIn(200);
      };
      vF1422.prototype.ji = function () {
        f6().r.Hd();
        v$104.stop();
        v$104.hide();
        v$103.stop();
        v$103.show();
        v$103.text(".. 10 ..");
        this.Ql();
        this.Rl(function () {
          v$103.text(".. 9 ..");
        }, 1000);
        this.Rl(function () {
          v$103.text(".. 8 ..");
        }, 2000);
        this.Rl(function () {
          v$103.text(".. 7 ..");
        }, 3000);
        this.Rl(function () {
          v$103.text(".. 6 ..");
        }, 4000);
        this.Rl(function () {
          v$103.text(".. 5 ..");
        }, 5000);
        this.Rl(function () {
          v$103.text(".. 4 ..");
        }, 6000);
        this.Rl(function () {
          v$103.text(".. 3 ..");
        }, 7000);
        this.Rl(function () {
          v$103.text(".. 2 ..");
        }, 8000);
        this.Rl(function () {
          v$103.text(".. 1 ..");
        }, 9000);
        this.Rl(function () {
          v$103.hide();
          v$104.fadeIn(300);
        }, 10000);
      };
      vF1422.prototype.Rl = function (p609, p610) {
        var vSetTimeout2 = setTimeout(p609, p610);
        this.Pl.push(vSetTimeout2);
      };
      vF1422.prototype.Ql = function () {
        for (var vLN093 = 0; vLN093 < this.Pl.length; vLN093++) {
          clearTimeout(this.Pl[vLN093]);
        }
        this.Pl = [];
      };
      return vF1422;
    }();
    var vF82 = function () {
      function f98() {
        this.Ck = function () {};
      }
      f98.prototype.Bk = function () {};
      f98.prototype.ji = function () {};
      return f98;
    }();
    var vF83 = function () {
      var vF1423 = f14(vF82, function (p611) {
        vF82.call(this);
        var v518 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
        this.Sl = $("<div id=\"" + v518 + "\" class=\"toaster toaster-coins\">    <img class=\"toaster-coins-img\" alt=\"Wormate Coin\" src=\"/images/coin_320.png\" />    <div class=\"toaster-coins-val\">+" + p611 + "</div>    <div class=\"toaster-coins-close\">" + f9("index.game.toaster.continue") + "</div></div>");
        var vThis34 = this;
        this.Sl.find(".toaster-coins-close").click(function () {
          f6().r.Cd();
          vThis34.Ck();
        });
      });
      vF1423.prototype.Bk = function () {
        return this.Sl;
      };
      vF1423.prototype.ji = function () {
        f6().r.Fd();
      };
      return vF1423;
    }();
    var vF84 = function () {
      var vF1424 = f14(vF82, function (p612) {
        vF82.call(this);
        var v519 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
        this.Sl = $("<div id=\"" + v519 + "\" class=\"toaster toaster-levelup\">    <img class=\"toaster-levelup-img\" alt=\"Wormate Level Up Star\" src=\"/images/level-star.svg\" />    <div class=\"toaster-levelup-val\">" + p612 + "</div>    <div class=\"toaster-levelup-text\">" + f9("index.game.toaster.levelup") + "</div>    <div class=\"toaster-levelup-close\">" + f9("index.game.toaster.continue") + "</div></div>");
        var vThis35 = this;
        this.Sl.find(".toaster-levelup-close").click(function () {
          f6().r.Cd();
          vThis35.Ck();
        });
      });
      vF1424.prototype.Bk = function () {
        return this.Sl;
      };
      vF1424.prototype.ji = function () {
        f6().r.Ed();
      };
      return vF1424;
    }();
    var vF85 = function () {
      var vF1425 = f14(vF82, function () {
        vF82.call(this);
        var vThis36 = this;
        var vF637 = f6();
        var v520 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
        this.Sl = $("<div id=\"" + v520 + "\" class=\"toaster toaster-consent-accepted\">    <img class=\"toaster-consent-accepted-logo\" src=\"" + vLSimageslinelogoxmas20 + "\" alt=\"Wormate.io logo\"/>    <div class=\"toaster-consent-accepted-container\">        <span class=\"toaster-consent-accepted-text\">" + f9("index.game.toaster.consent.text").replaceAll(" ", "&nbsp;").replaceAll("\n", "<br/>") + "</span>        <a class=\"toaster-consent-accepted-link\" href=\"/privacy-policy\">" + f9("index.game.toaster.consent.link") + "</a>    </div>    <div class=\"toaster-consent-close\">" + f9("index.game.toaster.consent.iAccept") + "</div></div>");
        this.Tl = this.Sl.find(".toaster-consent-close");
        this.Tl.hide();
        this.Tl.click(function () {
          vF637.r.Cd();
          if (vF637.Y()) {
            vF637.$(true, true);
          }
          vThis36.Ck();
        });
      });
      vF1425.prototype.Bk = function () {
        return this.Sl;
      };
      vF1425.prototype.ji = function () {
        var vThis37 = this;
        var vF638 = f6();
        if (vF638.Y() && !vF638.Z()) {
          vF638.r.Hd();
          setTimeout(function () {
            vThis37.Tl.fadeIn(300);
          }, 2000);
        } else {
          setTimeout(function () {
            vThis37.Ck();
          }, 0);
        }
      };
      return vF1425;
    }();
    var vO11 = {};
    vO11.main = {
      Ma: f30("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
      K: f30("ltmolilci1iurq1i", "wormate-io_970x250"),
      ra: f27(),
      e: 4,
      oa: false,
      qk: true
    };
    vO11.miniclip = {
      Ma: f30("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
      K: f30("ltmolilci1iurq1i", "wormate-io_970x250"),
      ra: f27(),
      e: 4,
      oa: false,
      qk: false
    };
    var v521 = vO11[window.ENV];
    v521 ||= vO11.main;
    $(function () {
      FastClick.attach(document.body);
    });
    addEventListener("contextmenu", function (p613) {
      p613.preventDefault();
      p613.stopPropagation();
      return false;
    });
    f13("//connect.facebook.net/" + vUndefined + "/sdk.js", "facebook-jssdk", function () {
      FB.init({
        appId: "861926850619051",
        cookie: true,
        xfbml: true,
        status: true,
        version: "v8.0"
      });
    });
    f13("//apis.google.com/js/api:client.js", null, function () {
      gapi.load("auth2", function () {
        GoogleAuth = gapi.auth2.init({
          client_id: "959425192138-qjq23l9e0oh8lgd2icnblrbfblar4a2f.apps.googleusercontent.com"
        });
      });
    });
    vUndefined2 = f31();
    vUndefined2.v();
    if (PhoneChecked()) {
      f13("https://wormatefriendsglobal.com/js/joy.min.js", "mobileconfig", function () {
        vF86();
      });
    }
    ;
    let vF86 = function () {
      $("#game-canvas").after("<div id='zoom-container'><div id='zoom-out'>-</div><div id='zoom-in'>+</div></div>");
    };
    window.keyMove = 81;
    window.addEventListener("keydown", function (p614) {
      console.log("event.keyCode " + p614.keyCode);
      p614 = p614.which || p614.keyCode || 0;
      if (p614 !== 113 && window.keyMove !== p614 || !isPlaying || PilotoAutomatico) {
        clearInterval(PilotoAutomatico);
        PilotoAutomatico = null;
      } else {
        let v522 = theoEvents.eventoPrincipal.sk = 0;
        p614 = window.tuNewScore;
        PilotoAutomatico = setInterval(function () {
          let vParseFloat = parseFloat(theoEvents.eventoPrincipal.sk);
          theoEvents.eventoPrincipal.sk = (vParseFloat >= Math.PI ? -vParseFloat : vParseFloat) + (v522 === 0 ? 0 : Math.PI / 4);
          v522++;
        }, 165 + (p614 >= 100000 ? 5 : p614 >= 10000 ? 10 : 0));
      }
      localStorage.setItem("SaveGameXT", JSON.stringify(theoKzObjects));
    }, false);
    let vA14 = [{
      nombre: "duck-unicorn",
      url: "https://cdn.custom-cursor.com/db/15674/32/duck-unicorn-thanksgiving-day-cursor.png"
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
      url: "https://cdn.discordapp.com/attachments/1232066016515850330/1254715592003293225/TikTok.png?ex=667a8074&is=66792ef4&hm=fb51a7461fa799d7326e9a36a49ed98d0d425d7158301bb41cc5c905acc0356e&"
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
      url: "https://cdn.discordapp.com/attachments/1232066016515850330/1254718587587919892/Adsz.png?ex=667a833e&is=667931be&hm=88222eabdffd11733dd84a670597e29f185ca6a6154557e0f6be8ebf4262e087&"
    }, {
      nombre: "Tom_and_JerryCurso",
      url: "https://cdn.discordapp.com/attachments/1232066016515850330/1254717629999087626/doritos.png?ex=667a825a&is=667930da&hm=f059338f084b16aaf89e40fc4fc0a98d7abb705255a0ec49f7d92a541877c41c&"
    }, {
      nombre: "JerryPointer",
      url: "https://cdn.discordapp.com/attachments/1232066016515850330/1254716340066062387/Adsz.png?ex=667a8126&is=66792fa6&hm=dd4586b5c16e145e9ed0c04aeb901374e4d725bd643c153c0f32851e633aeccc&"
    }];
    let vA15 = [{
      nombre: "Default",
      url: "https://i.imgur.com/8ubx4RA.png"
    }, {
      nombre: "Schwarze Background",
      url: "https://i.imgur.com/2Cb1fpQ.png"
    }, {
      nombre: "light blue",
      url: "https://i.imgur.com/dWtJFIx.png"
    }, {
      nombre: "woman",
      url: "https://i.imgur.com/19YALRi.png"
    }, {
      nombre: "Navidad",
      url: "https://i.imgur.com/hSGiXs6.jpg"
    }, {
      nombre: "Mal3ab",
      url: "https://i.imgur.com/MlCgOma.png"
    }, {
      nombre: "Galaxy_Star",
      url: "https://i.imgur.com/yayb9Ru.png"
    }, {
      nombre: "Desert",
      url: "https://wormatefriendsglobal.com/backgrounds/bg_1.png"
    }];
    theoKzObjects.loading = true;
    var vLS4 = "";
    vLS4 += "</div>";
    vLS4 += "</div>";
    vLS4 += "</div>";
    vLS4 += "<div id=\"wormcerca\">";
    vLS4 += "<img class=\"pwrups v0\" style=\"display: none;\" src=\"https://i.imgur.com/M1LFPpp.png\">";
    vLS4 += "<img class=\"pwrups v1\" style=\"display: none;\" src=\"https://i.imgur.com/z162iYa.png\">";
    vLS4 += "<img class=\"pwrups v2\" style=\"display: none;\" src=\"https://i.imgur.com/kXlF32q.png\">";
    vLS4 += "<img class=\"pwrups v3\" style=\"display: none;\" src=\"https://i.imgur.com/kJ6oz7e.png\">";
    vLS4 += "<img class=\"pwrups v4\" style=\"display: none;\" src=\"https://i.imgur.com/l3ds43O.png\">";
    vLS4 += "<img class=\"pwrups v5\" style=\"display: none;\" src=\"https://i.imgur.com/FqA56k6.png\">";
    vLS4 += "<img class=\"pwrups v6\" style=\"display: none;\" src=\"https://i.imgur.com/mSCZeEp.png\">";
    vLS4 += "</div>";
    vLS4 += "<img class=\"worm_1\" src=\"https://i.imgur.com/iekrYYm.png\"><span class=\"Worm_cerca\"></span>";
    vLS4 += "\n      \n         <div style=\"display:none\" id=\"zoom-container\">\n         <div id=\"zoom-out\">-</div>\n         <div id=\"zoom-in\">+</div>\n         </div>\n        <div class=\"worm_2\">\n        <button id=\"settingBtn\"><img src=\"https://i.imgur.com/bKAe6W9.png\"/></button>\n        <div id=\"settingContent\">\n        \n        \n        <div class=\"container1\">\n                    <span class=\"settings_span\">Spin-Fast: </span>\n                    <input id=\"smoothCamera\" class=\"range\" type=\"range\" min=\"0.3\" max=\"0.6\" value=\"' + theoKzObjects.smoothCamera + '\" step=\"0.1\" onmousemove=\"smoothCameraValue.value=value\" />\n        </div>         \n        \n        <div class=\"container1\">\n        <span class=\"settings_span\">Power-ups-Size: </span>\n        <input id=\"PortionSize\" class=\"range\" type=\"range\" min=\"1\" max=\"6\" value=\"' + theoKzObjects.PortionSize + '\" step=\"1\" onmousemove=\"rangevalue1.value=value\" />\n        </div>\n        \n      <div class=\"container1\">\n      <span class=\"settings_span\">Power-ups-Aura: </span>\n      <input id=\"PortionAura\" class=\"range\" type=\"range\" min=\"1.2\" max=\"3.2\" value=\"' + theoKzObjects.PortionAura + '\" step=\"0.2\" onmousemove=\"PortionAuravalue.value=value\" />\n      </div>\n       \n      <div class=\"container1\">\n                    <span class=\"settings_span\">Food-Size: </span>\n                    <input id=\"FoodSize\" class=\"range\" type=\"range\" min=\"0.5\" max=\"3\" value=\"' + theoKzObjects.FoodSize + '\" step=\"0.5\" onmousemove=\"rangevalue2.value=value\" />\n                    </div>\n                    <div class=\"container1\">\n                    <span class=\"settings_span\">Food-Shadow: </span>\n                    <input id=\"FoodShadow\" class=\"range\" type=\"range\" min=\"0.5\" max=\"3\" value=\"' + theoKzObjects.FoodShadow + '\" step=\"0.5\" onmousemove=\"FoodShadowvalue.value=value\" />\n                    </div>\n    </div>\n    </div>";
    $("#game-view").append(vLS4);
    function f99(p615) {
      if (theoKzObjects.PropertyManager) {
        p615.skinId = theoKzObjects.PropertyManager.rh;
        p615.eyesId = theoKzObjects.PropertyManager.sh;
        p615.mouthId = theoKzObjects.PropertyManager.th;
        p615.glassesId = theoKzObjects.PropertyManager.uh;
        p615.hatId = theoKzObjects.PropertyManager.vh;
      }
    }
    function f100() {
      $("#mm-event-text").replaceWith("<div class=\"text-vnxx\"><img src=\"https://wormatefriendsglobal.com/images/hiep_img/logo.png\"/><a href=\"https://www.wormatefriendsglobal.com/\">Wormate  Friends Global</a></div>");
      $("#mm-store").after("<div id=\"mm-store\" style=\"float: right;position: relative;background: #fff0;width:-30px;\">\n            <div style=\"margin: 0;\" id=\"loa831pibur0w4gv\">\n            \n        <button style=\"margin-top: 0px;\" onclick=\"openPopup()\"><img style=\"height: 40px;\"src=\"https://i.imgur.com/nwJih2e.png\"/></button>\n        <div id=\"popup\" class=\"popup\">\n        <div class=\"phdr1\">  Settings</div>\n        <button class=\"close-button\" onclick=\"closePopup()\">Close</button>\n        \n                    <div id=\"kich-hoat\">\n                \n           <center><input type=\"text\" value=\"" + theoKzObjects.FB_UserID + "\" style=\"text-align: center;border-radius: 4px;font-size: 20px;padding: 0 6px;background-color: #fff;color: #806102;display: block;box-sizing: border-box;-webkit-appearance: none;outline: 0;border: solid 2px #ff8d00;margin-left: -80px;    width: 50%;margin-top: 8px;\"/></center>\n                \n                <button style=\"width: 80px; height: 28px;float: right; margin-top: -28px;margin-right: 105px;\" onclick=\"navigator.clipboard.writeText('" + theoKzObjects.FB_UserID + "').then(()=> alert('You ID " + theoKzObjects.FB_UserID + " copiado! copied!'));\">COPY</button>\n                </div>   \n                \n                \n                    <div class=\"settings-lineZoom\">\n                    <span class=\"settings-labelZoom\"> Eating Speed</span>\n                    <input class=\"settings-switchZoom\" id=\"settings-Abilityzoom-switch\" type=\"checkbox\"/>\n                    <label for=\"settings-Abilityzoom-switch\"></label>\n                    </div><div class=\"settings-lineZoom\">\n                    <span class=\"settings-labelZoom\"> Top 3</span>\n                    <input class=\"settings-switchZoom\" id=\"settings-top3sv-switch\" type=\"checkbox\"/>\n                    <label for=\"settings-top3sv-switch\"></label>\n                    </div>\n                    \n                    <div class=\"settings-lineZoom\">\n                    <span class=\"settings-labelZoom\">Streamer Mode</span>\n                    <input class=\"settings-switchZoom\" id=\"settings-stremingmode-switch\" type=\"checkbox\"/>\n                    <label for=\"settings-stremingmode-switch\"></label>\n                    </div>\n                    \n                    \n                    <div class=\"spancursor\">Select Cursor</div>\n                    <div class=\"cursor-container\"></div>\n                    <div id=\"bgtext\" class=\"bgtext\">Select Background</div>\n                    <div class=\"background-container\"></div></center>\n\n           \n        </div>");
      $("#loa831pibur0w4gv").replaceWith("<div style=\"margin: 0;\" id=\"loa831pibur0w4gv\">\n                <div class=\"label\" id=\"titleSetings\">Notification </div>\n                \n                <div class=\"list1\">  :   / </div>\n                <div class=\"list1\"> Aktivasyon yaptÄ±rmanÄ±z gerekiyor. </div>\n                <div class=\"list1\">     </div><hr>\n                \n                <div class=\"list1\">      </div>\n                <div class=\"list1\">    </div>\n                <div class=\"list1\">     </div>\n                <hr> \n                <input type=\"text\" value=\"" + theoKzObjects.FB_UserID + "\" style=\"width: 236px;height: 23px;text-align: center;border-radius: 4px;font-size: 17px;padding: 0 6px;background-color: #fff;color: #806102;display: block;box-sizing: border-box;-webkit-appearance: none;outline: 0;border-width: 0;\">\n        <button style=\"height: 25px;float: right;margin-top: -24px;\" onclick=\"navigator.clipboard.writeText('" + theoKzObjects.FB_UserID + "').then(()=> alert('You ID " + theoKzObjects.FB_UserID + " copiado! copied!'));\">COPY</button>\n                <center><div class=\"hg\"><a target=\"_blank\" href=\"https://wormatefriendsglobal.com/\">Aktivasyon </a></div></center>\n             </div>\n             ");
      var v523 = document.getElementById("settingBtn");
      var v524 = document.getElementById("settingContent");
      v523.addEventListener("click", function () {
        if (v524.style.display === "none") {
          v524.style.display = "block";
        } else {
          v524.style.display = "none";
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
      $("#ltmolilci1iurq1i").replaceWith("\n                <div id=\"toantrang-quangcao\">\n                \n                <div class=\"quangcao-left1\"><a href=\"https://www.tiktok.com/@hayalet69692\"><div class=\"ten-khach-hang\">HAYALET  69</div><img src=\"https://wormatefriendsglobal.com/images/hiep_img/hayalet.png\"></a></div>\n                \n                <div class=\"quangcao-left2\"><a href=\"\"><div class=\"ten-khach-hang\">REKLAM ALANI âœ </div><img src=\"https://wormatefriendsglobal.com/images/hiep_img/bosreklam.gif\"></a></div> \n                \n                <div class=\"quangcao-left3\"><a href=\"https://www.tiktok.com/ayyildiz_ded/\"><div class=\"ten-khach-hang\"> REKLAM ALANI</div><img src=\"https://wormatefriendsglobal.com/images/hiep_img/bosreklam.gif\"></a></div> \n                \n                <div class=\"quangcao-left4\"><a href=\"https://www.tiktok.com/@matadorr_5\"><div class=\"ten-khach-hang\">REKLAM ALANI</div><img src=\"https://wormatefriendsglobal.com/images/hiep_img/bosreklam.gif\"></a></div>  \n                \n                <div class=\"quangcao-left5\"><a href=\"https://www.tiktok.com/@hayalet69692\"><div class=\"ten-khach-hang\">REKLAM ALANI âœ</div><img src=\"https://wormatefriendsglobal.com/images/hiep_img/bosreklam.gif\"></a></div>  \n                </div>");
      $("#mm-advice-cont").html("<input type=\"button\" style=\"float: left;height: 35.5px;color: #000;font-size:18px;border-radius: 5px ;font-weight:600;background:#ffffff;width: 49%;font-family: vuonghiep;\" class=\"fullscreen_button\" value=\"F. SCREEN\"/><div class=\"nhac\"><a href=\"https://wormatefriendsglobal.com/\">Contact (Aktivasyon)</div>");
      $(".mm-merchant-cont").append("<div style='float: left;'><a href='https://www.tiktok.com/@ayyildiz_ded'><img style='width:97%' src='https://wormatefriendsglobal.com/images/hiep_img/r2.gif'/><a/></div><div style='float: left;'><a href=''><img style='width: 97%;' src='https://wormatefriendsglobal.com/images/hiep_img/r9.gif'/><a/><a/></div><div style='float: left;'><a href='https://www.tiktok.com/@sinan_gaming_67'><img style='width: 97%;' src='https://wormatefriendsglobal.com/images/hiep_img/mikaildisreklam.png'/><a/></div><div style='float: left;'><a href='https://www.tiktok.com/@matadorr_5'><img style='width: 97%;' src='https://wormatefriendsglobal.com/images/hiep_img/r1.png'/><a/></div><div style='float: left;'><a href='https://www.tiktok.com/@hayalet69692'><img style='width: 97%;' src='https://wormatefriendsglobal.com/images/hiep_img/r1.png'/><a/></div><div style='float: left;'><a href='https://www.tiktok.com/@hayalet69692'><img style='width: 97%;' src='https://wormatefriendsglobal.com/images/hiep_img/r1.png'/><a/></div><div style='float: left;'><a href='https://www.tiktok.com/@ayyildiz_ded'><img style='width: 97%;' src='https://wormatefriendsglobal.com/images/hiep_img/r1.png'/><a/></div><div style='float: left;'><a href='https://www.tiktok.com/@guven_43_sima'><img style='width: 97%;' src='https://wormatefriendsglobal.com/images/hiep_img/r1.png'/><a/></div><div style='float: left;'><a href=''><img style='width: 97%;' src='https://wormatefriendsglobal.com/images/hiep_img/r1.png'/><a/></div><div style='float: left;'><a href='https://www.tiktok.com/@ayyildiz_ded'><img style='width: 97%;' src='https://wormatefriendsglobal.com/images/hiep_img/r1.png'/><a/></div><div style='float: left;'><a href='https://www.tiktok.com/@hayalet69692'><img style='width: 97%;' src='https://wormatefriendsglobal.com/images/hiep_img/r1.png'/><a/></div><div style='float: left;'><a href='https://www.tiktok.com/@ayyildiz_ded'><img style='width: 97%;' src='https://wormatefriendsglobal.com/images/hiep_img/r1.png'/><a/></div>");
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
      $("#mm-store").after("\n            <div id=\"mm-store\" style=\"float: right;position: relative; width:40px; margin-right: 25px; \" onclick=\"navigator.clipboard.writeText('" + theoKzObjects.FB_UserID + "').then(()=> alert('You ID " + theoKzObjects.FB_UserID + " copiado! copied!'));\"> Copy ID</Div>");
      $("#background-canvas").replaceWith("<canvas id=\"background-canvas\" style=\"background-image: url(https://wormatefriendsglobal.com/images/hiep_img/hayaletarkafon.png);background-repeat: no-repeat;background-size: cover;}\"></canvas>");
      $(".mm-merchant").replaceWith("");
      $("#markup-footer").replaceWith("\n            <footer id=\"markup-footer\">\n            <div class=\"lang-menu\"><button class=\"lang-button\">Language </button>\n            <div class=\"lang-list\"><a hreflang=\"en\" href=\"/\">English</a>\n<a hreflang=\"uk\" href=\"/uk/\"></a>\n<a hreflang=\"de\" href=\"/de/\">Deutsch</a>\n<a hreflang=\"fr\" href=\"/fr/\">FranÃ§ais</a>\n<a hreflang=\"es\" href=\"/es/\">EspaÃ±ol</a>\n</div></div>\n            <a class=\"link\" hreflang=\"en\" href=\"/\">Home</a>\n            <a class=\"link\" hreflang=\"en\" href=\"https://wormatefriendsglobal.com\">  Wormate Friends GlobalÂ©</a>\n            \n            <a style=\"color: #00ff21;\"></a>\n            \n            </footer>");
      $(".description-text").replaceWith("\n                   <div style=\";padding: 0px;margin: 0;height:338px\" class=\"description-text\">\n                    <div id=\"title\">Wormate Friends Global</div>\n                    <ul style=\"margin-top: 5px;\" class=\"ui-tabs-nav\">\n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive0 ui-tab-active\" style=\"margin: -5px\">\n                        <a>\n                        <span class=\"flag br\" value=\"https://i.imgur.com/pReVs6K.png\"></span>\n                        </a>\n                    </li>\n    \n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive1\" style=\"margin: -5px\">\n                        <a>\n                            <span class=\"flag mx\"  value=\"https://i.imgur.com/YSLUmBO.png\"></span>\n                        </a>\n                    </li>\n    \n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive2\" style=\"margin: -5px\">\n                        <a>\n                            <span class=\"flag us\" value=\"https://i.imgur.com/Jb2FF0y.png\"></span>\n                        </a>\n                    </li>\n    \n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive3\" style=\"margin: -5px\">\n                        <a>\n                            <span class=\"flag ca\" value=\"https://i.imgur.com/c90q4Qs.png\"></span>\n                        </a>\n                    </li>\n    \n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive4\" style=\"margin: -5px\">\n                        <a>\n                            <span class=\"flag de\" value=\"https://i.imgur.com/cU5uwia.png\"></span>\n                        </a>\n                    </li>\n    \n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive5\" style=\"margin: -5px\">\n                        <a>\n                            <span class=\"flag fr\" value=\"https://i.imgur.com/QuEjBr0.png\"></span>\n                        </a>\n                    </li>\n    \n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive6\" style=\"margin: -5px\">\n                        <a>\n                            <span class=\"flag sg\" value=\"https://i.imgur.com/FviIPCg.png\"></span>\n                        </a>\n                    </li>\n    \n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive7\" style=\"margin: -5px\">\n                        <a>\n                            <span class=\"flag jp\" value=\"https://i.imgur.com/P2rYk1k.png\"></span>\n                        </a>\n                    </li>\n    \n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive8\" style=\"margin: -5px\">\n                        <a>\n                            <span class=\"flag au\" value=\"https://i.imgur.com/DlVbD1Y.png\"></span>\n                        </a>\n                    </li>\n    \n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive9\" style=\"margin: -5px\">\n                        <a>\n                            <span class=\"flag gb\" value=\"https://i.imgur.com/8pQY6RW.png\"></span>\n                        </a>\n                    </li>\n                    \n                    </ul>\n                    \n                    <div class=\"gachngang\"></div>\n                    \n                    <div class=\"servers-container\">\n                    <div class=\"servers-peru\"></div>\n                    <div class=\"servers-mexico\" style=\"display: none;\"></div>\n                    <div class=\"servers-eeuu\" style=\"display: none;\"></div>\n                    <div class=\"servers-canada\" style=\"display: none;\"></div>\n                    <div class=\"servers-germania\" style=\"display: none;\"></div>\n                    <div class=\"servers-francia\" style=\"display: none;\"></div>\n                    <div class=\"servers-singapur\" style=\"display: none;\"></div>\n                    <div class=\"servers-japon\" style=\"display: none;\"></div>\n                    <div class=\"servers-australia\" style=\"display: none;\"></div>\n                    <div class=\"servers-granbretana\" style=\"display: none;\"></div>\n                    \n                    \n                    \n                    </div>\n                    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.min.js\"></script>\n                    \n                    \n                    ");
      $(".ui-tab").on("click", account);
      $(".flag").click(function () {
        let v525 = $(this).attr("value");
        theoKzObjects.flag = v525;
        ctx.containerImgS.texture = ctx.onclickServer;
        retundFlagError();
        console.log(v525);
      });
      for (a = 0; a < servers.Api_listServer.length; a++) {
        var v526 = servers.Api_listServer[a].serverUrl;
        var v527 = servers.Api_listServer[a].name;
        var v528 = servers.Api_listServer[a].region;
        let v529 = document.createElement("p");
        v529.value = v526;
        v529.innerHTML = v527;
        if (v528 == "peru") {
          $(".servers-peru").prepend(v529);
        } else if (v528 == "mexico") {
          $(".servers-mexico").prepend(v529);
        } else if (v528 == "eeuu") {
          $(".servers-eeuu").prepend(v529);
        } else if (v528 == "canada") {
          $(".servers-canada").prepend(v529);
        } else if (v528 == "germania") {
          $(".servers-germania").prepend(v529);
        } else if (v528 == "francia") {
          $(".servers-francia").prepend(v529);
        } else if (v528 == "singapur") {
          $(".servers-singapur").prepend(v529);
        } else if (v528 == "japon") {
          $(".servers-japon").prepend(v529);
        } else if (v528 == "australia") {
          $(".servers-australia").prepend(v529);
        } else if (v528 == "granbretana") {
          $(".servers-granbretana").prepend(v529);
        }
        $(v529).attr("id", v528);
        $(v529).attr("class", "selectSala");
        $(v529).attr("value", v527);
        $(v529).click(function () {
          ctx.setServer($(this).text());
          let v530 = $(this).val();
          ctx.containerImgS.texture = ctx.onclickServer;
          retundFlagError();
          window.server_url = v530;
          $("#mm-action-play").click();
          $("#adbl-continue").click();
        });
      }
    }
    function f101() {
      $("#getskin").on("click", function () {
        for (var vLN094 = 0; vLN094 < clientes.clientesActivos.length; vLN094++) {
          var v531 = clientes.clientesActivos[vLN094].cliente_NOMBRE;
          var v532 = clientes.clientesActivos[vLN094].cliente_ID;
          var v533 = clientes.clientesActivos[vLN094].Client_VisibleSkin;
          var v534 = clientes.clientesActivos[vLN094].Client_VisibleSkin1;
          var v535 = clientes.clientesActivos[vLN094].Client_VisibleSkin2;
          var v536 = clientes.clientesActivos[vLN094].Client_VisibleSkin3;
          var v537 = clientes.clientesActivos[vLN094].Client_VisibleSkin4;
          var v538 = clientes.clientesActivos[vLN094].Client_VisibleSkin5;
          var v539 = clientes.clientesActivos[vLN094].Client_VisibleSkin6;
          var v540 = clientes.clientesActivos[vLN094].Client_VisibleSkin7;
          var v541 = clientes.clientesActivos[vLN094].Client_VisibleSkin8;
          var v542 = clientes.clientesActivos[vLN094].Client_VisibleSkin9;
          var v543 = clientes.clientesActivos[vLN094].Client_VisibleSkin10;
          var v544 = clientes.clientesActivos[vLN094].Client_VisibleSkin11;
          var v545 = clientes.clientesActivos[vLN094].Client_VisibleSkin12;
          var v546 = clientes.clientesActivos[vLN094].Client_VisibleSkin13;
          var v547 = clientes.clientesActivos[vLN094].Client_VisibleSkin14;
          var v548 = clientes.clientesActivos[vLN094].Client_VisibleSkin15;
          var v549 = clientes.clientesActivos[vLN094].Client_VisibleSkin16;
          var v550 = clientes.clientesActivos[vLN094].Client_VisibleSkin17;
          var v551 = clientes.clientesActivos[vLN094].Client_VisibleSkin18;
          var v552 = clientes.clientesActivos[vLN094].Client_VisibleSkin19;
          var v553 = clientes.clientesActivos[vLN094].Client_VisibleSkin20;
          var v554 = clientes.clientesActivos[vLN094].Client_KeyAccecs;
          if (theoKzObjects.FB_UserID == 0) {} else if (theoKzObjects.FB_UserID == v532) {
            if (v554 == "XTPRIVATESKIN") {
              for (let vLN095 = 0; vLN095 < theoKzObjects.idSkin.length; vLN095++) {
                const v555 = theoKzObjects.idSkin[vLN095];
                if (v555.id == v533 || v555.id == v534 || v555.id == v535 || v555.id == v536 || v555.id == v537 || v555.id == v538 || v555.id == v539 || v555.id == v540 || v555.id == v541 || v555.id == v542 || v555.id == v543 || v555.id == v544 || v555.id == v545 || v555.id == v546 || v555.id == v547 || v555.id == v548 || v555.id == v549 || v555.id == v550 || v555.id == v551 || v555.id == v552 || v555.id == v553) {
                  v555.nonbuyable = false;
                }
              }
            } else {}
          } else {}
        }
      });
    }
    function f102() {
      theoKzObjects.adblock = true;
      $("#loa831pibur0w4gv").replaceWith("\n                \n                   <div class=\"list1\">      </div>\n                <div class=\"list1\">    </div>\n                <div class=\"list1\">      </div>  \n                  <div class=\"list1\">     </div>\n                  <div class=\"list1\">        </div>\n             \n            ");
      $("#mm-coins-box").replaceWith("<div style=\"margin: 0;\" id=\"mm-coins-box\">\n                \n                <button style='width: 304px;height: 45px;float: right;border-radius: 10px;border: solid #fac 2px;' id='getskin'>Unlock Skin (Desen Kilidi AÃ§ma)</button>\n  \n                </div>\n\n                </div>");
      window.multiplier = 0.625;
      function f103() {
        window.multiplier *= 1.1;
        changedNf();
      }
      function f104() {
        window.multiplier *= 0.9;
        changedNf();
      }
      document.getElementById("zoom-in").addEventListener("touchstart", f103);
      document.getElementById("zoom-out").addEventListener("touchstart", f104);
      window.onwheel = p616 => {
        if (p616.deltaY < 0) {
          f104();
        } else {
          f103();
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
        var v556 = localStorage.getItem("mySwitch");
        if (v556 === "on") {
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
        var v557 = localStorage.getItem("ModeStremer");
        if (v557 === "true") {
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
      $("#KeyRespawn,#KeyAutoMov").on("keydown", function (p617) {
        if (isValidHotkey(p617)) {
          var v$106 = $(this);
          var vGetPresedKey = getPresedKey(p617);
          var v558 = p617.keyCode;
          v$106.val(vGetPresedKey);
          v$106.blur();
          window.keyMove = v558;
          window.localStorage.setItem(v$106.attr("id"), v558);
        } else {
          p617.preventDefault();
        }
      });
      for (a = 0; a < vA14.length; a++) {
        var v559 = vA14[a].url;
        var v560 = vA14[a].nombre;
        let v561 = document.createElement("img");
        v561.src = v559;
        $(".cursor-container").prepend(v561);
        $(v561).attr("class", "cursor");
        $(v561).click(function () {
          let v562 = $(this).attr("src");
          localStorage.cursorSeleccionado = v562;
          $("#game-cont").css({
            cursor: "url(" + v562 + "), default"
          });
          $("#game-canvas").css({
            cursor: "url(" + v562 + "), default"
          });
          $("body").css({
            cursor: "url(" + v562 + "), default"
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
      for (a = 0; a < vA15.length; a++) {
        var v563 = vA15[a].url;
        var v564 = vA15[a].nombre;
        let v565 = document.createElement("img");
        v565.src = v563;
        $(".background-container").prepend(v565);
        $(v565).attr("class", "background");
        $(v565).attr("value", v564);
        $(v565).click(function () {
          let v566 = $(this).attr("src");
          let v567 = $(this).attr("value");
          backgroundIMG = v566;
          localStorage.fondoSeleccionado = backgroundIMG;
          alert("You selected the background: " + v567);
          vUndefined2.q.Cf = new vF4._b(vUndefined2.q.fn_o(v566));
        });
      }
      $(".background-container").prepend("");
      vUndefined2.q.Cf = new vF4._b(vUndefined2.q.fn_o(localStorage.fondoSeleccionado));
    }
    function f105() {
      $("#background-canvas").replaceWith("<canvas id=\"background-canvas\" style=\"background-image: url(https://i.imgur.com/Y3keVY4.jpg);background-repeat: no-repeat;background-size: cover;}\"></canvas>");
      $(".description-text").replaceWith("<div class=\"description-text\">");
      $(".description-text").prepend("<p id='title'>Wormate Friends</p>");
      $("#title").after("<div id=\"idwormworld\" style=\"text-align: center\"><div class='logo'><img src='https://wormatefriendsglobal.com/images/hiep_img/logo.png'/></div>\n        <input type=\"text\" value=\"" + theoKzObjects.FB_UserID + "\" style=\"width: 230px;text-align: center;border-radius: 4px;font-size: 20px;padding: 0 6px;background-color: #fff;color: #806102;display: block;box-sizing: border-box;-webkit-appearance: none;outline: 0;border-width: 0;\">\n        <button onclick=\"navigator.clipboard.writeText('" + theoKzObjects.FB_UserID + "').then(()=> alert('You ID " + theoKzObjects.FB_UserID + " copiado! copied!'));\">COPY</button>\n    </div>\n<div></div>\n<div><input type=\"button\" value=\"ACTIVATE ALL\" target=\"_blank\" onclick=\"window.location.href='" + MYPAGE + "'\" style=\"margin-top: 5px; width: 100%\"></div>");
    }
    function f106(p618, p619) {
      let vF87 = function (p620, p621, p622, p623) {
        ctx.setCountGame(p620, p621, p622, p623);
      };
      if (p618 === "count") {
        theoKzObjects.kill = (theoKzObjects.kill || 0) + (p619 ? 0 : 1);
        theoKzObjects.headshot = (theoKzObjects.headshot || 0) + (p619 ? 1 : 0);
        theoKzObjects.totalKills = theoKzObjects.totalKills + (p619 ? 0 : 1);
        theoKzObjects.totalHeadshots = theoKzObjects.totalHeadshots + (p619 ? 1 : 0);
        vF87(theoKzObjects.kill, theoKzObjects.headshot, theoKzObjects.totalKills, theoKzObjects.totalHeadshots);
      }
      if (p618 === "open") {
        theoKzObjects.kill = 0;
        theoKzObjects.headshot = 0;
        $("#contadorKill_12").show();
        vF87(theoKzObjects.kill, theoKzObjects.headshot, theoKzObjects.totalKills, theoKzObjects.totalHeadshots);
      }
      if (p618 === "closed") {
        pwrups = {};
      }
      if (p618 === "cerrar") {
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
      var vA16 = ["fuck you", "Ã„â€˜Ã¡Â»â€¹t", "cÃƒÂ¡i lÃ¡Â»â€œn", "chÃƒÂ³", "Ã„â€˜ÃƒÂ©o", "lÃ¡Â»â€œn", "Ã„â€˜ÃƒÂ©o", "Ã„â€˜Ã¡Â»â€¹t", "vÃƒÂ£i lÃ¡Â»â€œn", "cÃ¡ÂºÂ·c"];
      $("#mm-action-play").on("click", function () {
        var v568 = $("#mm-params-nickname").val();
        var v569 = vA16.some(function (p624) {
          return v568.toLowerCase().includes(p624.toLowerCase());
        });
        if (v569) {
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
    var v_0x122b66 = function f107() {
      requestAnimationFrame(f107);
      f6().Pa();
    };
    v_0x122b66();
    function f108() {
      var v570 = v$107.width();
      var v571 = v$107.height();
      var v572 = v$108.outerWidth();
      var v573 = v$108.outerHeight();
      var v574 = v$109.outerHeight();
      var v575 = v$110.outerHeight();
      var v576 = Math.min(1, Math.min((v571 - v575 - v574) / v573, v570 / v572));
      var v577 = "translate(-50%, -50%) scale(" + v576 + ")";
      v$108.css({
        "-webkit-transform": v577,
        "-moz-transform": v577,
        "-ms-transform": v577,
        "-o-transform": v577,
        transform: v577
      });
      f6().Ra();
      window.scrollTo(0, 1);
    }
    var v$107 = $("body");
    var v$108 = $("#stretch-box");
    var v$109 = $("#markup-header");
    var v$110 = $("#markup-footer");
    f108();
    $(window).resize(f108);
  })();
  window.anApp.p.Bc = function () {
    var v578 = window.anApp.p;
    var vO12 = {};
    $.get("https://resources.wormate.io/dynamic/assets/registry.json", function (p625) {
      vO12 = p625;
      fetch("https://wormatefriendsglobal.com/api/skins.php").then(p626 => p626.json()).then(p627 => {
        theoKzObjects.visibleSkin = p627.visibleSkin;
        delete p627.visibleSkin;
        for (let v579 in p627) {
          if (v579 !== "propertyList") {
            if (Array.isArray(p627[v579])) {
              p625[v579] = p625[v579].concat(p627[v579]);
            } else {
              p625[v579] = {
                ...p625[v579],
                ...p627[v579]
              };
            }
          }
        }
        theoKzObjects.pL = p627.propertyList;
        theoKzObjects.idSkin = p627.skinArrayDict;
        v578.Cc(p625);
      }).catch(function (p628) {
        console.error(p628);
        v578.Cc(vO12);
      });
    });
  };
  $("#background-canvas").replaceWith("<canvas id=\"background-canvas\" style=\"background-image: url(https://wormatefriendsglobal.com/images/hiep_img/arkfon.png/);background-repeat: no-repeat;background-size: cover;}\"></canvas>");
  $("#popup-login-gg").html("<div class=\"settings-line\" id=\"popup-login-gg1\">Login via Google </div>");
});
function openPopup() {
  var v580 = document.getElementById("popup");
  var v581 = document.getElementById("overlay");
  v580.style.display = "block";
  v581.style.display = "block";
}
function closePopup() {
  var v582 = document.getElementById("popup");
  var v583 = document.getElementById("overlay");
  v582.style.display = "none";
  v583.style.display = "none";
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
getPresedKey = function (p629) {
  var vLS5 = "";
  if (p629.keyCode == 9) {
    vLS5 += "TAB";
  } else if (p629.keyCode == 13) {
    vLS5 += "ENTER";
  } else if (p629.keyCode == 16) {
    vLS5 += "SHIFT";
  } else {
    vLS5 += String.fromCharCode(p629.keyCode);
  }
  return vLS5;
};
getStringKey = function (p630) {
  var vLS6 = "";
  if (p630 == 9) {
    vLS6 += "TAB";
  } else if (p630 == 13) {
    vLS6 += "ENTER";
  } else if (p630 == 16) {
    vLS6 += "SHIFT";
  } else if (p630 == 32) {
    vLS6 += "SPACE";
  } else if (p630 == 27) {
    vLS6 += "ESC";
  } else {
    vLS6 += String.fromCharCode(p630);
  }
  return vLS6;
};
isValidHotkey = function (p631) {
  if (p631.keyCode >= 48 && p631.keyCode <= 57 || p631.keyCode >= 65 && p631.keyCode <= 90 || p631.keyCode == 9 || p631.keyCode == 13 || p631.keyCode == 16 || p631.keyCode == 32 || p631.keyCode == 27) {
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
window.addEventListener("load", () => {
  const container = document.querySelector("#mm-line-bottom");
  const contents = document.querySelectorAll(".mm-merchant-cont");

  // Mouse olaylarÄ± iÃ§in event listener ekleme
  container.addEventListener("mouseenter", () => {
    pauseAnimation(contents);
  });
  container.addEventListener("mouseleave", () => {
    startAnimation(contents);
  });
});

// Animasyonu durdur
function pauseAnimation(elements) {
  elements.forEach(element => {
    element.style.animationPlayState = "paused";
  });
}

// Animasyonu baÅŸlat
function startAnimation(elements) {
  elements.forEach(element => {
    element.style.animationPlayState = "running";
  });
}
window.multiplier = 0.625;
(function (p632, p633) {
  const v_0x1873 = f110;
  const vP632 = p632();
  while (true) {
    try {
      const v584 = -parseInt(v_0x1873(184)) / 1 + -parseInt(v_0x1873(199)) / 2 * (-parseInt(v_0x1873(208)) / 3) + parseInt(v_0x1873(206)) / 4 + parseInt(v_0x1873(186)) / 5 + parseInt(v_0x1873(194)) / 6 * (parseInt(v_0x1873(189)) / 7) + -parseInt(v_0x1873(198)) / 8 * (parseInt(v_0x1873(201)) / 9) + parseInt(v_0x1873(185)) / 10 * (-parseInt(v_0x1873(182)) / 11);
      if (v584 === p633) {
        break;
      } else {
        vP632.push(vP632.shift());
      }
    } catch (e26) {
      vP632.push(vP632.shift());
    }
  }
})(f109, 396801);
async function fetchBadWords() {
  const v_0x18732 = f110;
  const vV_0x18732 = v_0x18732(195);
  try {
    const v585 = await fetch(vV_0x18732);
    if (!v585.ok) {
      throw new Error(v_0x18732(190));
    }
    const v586 = await v585[v_0x18732(204)]();
    console[v_0x18732(200)](v_0x18732(209), v586);
    return v586[v_0x18732(181)]("\n")[v_0x18732(202)](p634 => p634[v_0x18732(203)]()[v_0x18732(183)]())[v_0x18732(207)](p635 => p635 !== "");
  } catch (e27) {
    console.error(v_0x18732(188), e27);
    return [];
  }
}
function f109() {
  const vA17 = ["filter", "18HrnISE", "Fetched bad words:", "length", "split", "319UgLyun", "toLowerCase", "41282wNeaap", "154000lAOjkD", "3123705zahKnI", "getElementById", "Fetching bad words failed:", "14KrmDxM", "Network response was not ok", "value", "No bad words loaded", "mm-params-nickname", "1649736kFMYUq", "https://wormatefriendsglobal.com/kufur.txt", "addEventListener", "input", "32RyyNKI", "46860vuQHlE", "log", "1410039kKBSez", "map", "trim", "text", "includes", "784536GvdPCi"];
  f109 = function () {
    return vA17;
  };
  return f109();
}
async function init() {
  const v_0x18733 = f110;
  const v587 = await fetchBadWords();
  if (v587[v_0x18733(210)] === 0) {
    console.warn(v_0x18733(192));
  }
  document[v_0x18733(187)](v_0x18733(193))[v_0x18733(196)](v_0x18733(197), function () {
    const vV_0x18733 = v_0x18733;
    const v588 = this.value[vV_0x18733(183)]();
    let v589 = false;
    for (let vLN096 = 0; vLN096 < v587[vV_0x18733(210)]; vLN096++) {
      const v590 = v587[vLN096];
      if (v588[vV_0x18733(205)](v590)) {
        v589 = true;
        break;
      }
    }
    if (v589) {
      this[vV_0x18733(191)] = "kÃ¼fÃ¼rlÃ¼isim";
    }
  });
}
function f110(p636, p637) {
  const vF109 = f109();
  f110 = function (p638, p639) {
    p638 = p638 - 181;
    let v591 = vF109[p638];
    return v591;
  };
  return f110(p636, p637);
}
init();
document.addEventListener("DOMContentLoaded", event => {
  function showTop3() {
    // TÃ¼m Ã¶ÄŸeleri iÃ§eren kapsayÄ±cÄ±yÄ± bul
    const containers = document.querySelectorAll("#game-canvas");
    containers.forEach(container => {
      // KapsayÄ±cÄ± iÃ§inde "TOP 10 SERVER" baÅŸlÄ±ÄŸÄ±nÄ± bul
      const scoreHeader = Array.from(container.querySelectorAll("div")).find(el => el.textContent.includes("TOP 10 SERVER"));
      if (scoreHeader) {
        // "TOP 10 SERVER" baÅŸlÄ±ÄŸÄ±ndan sonra gelen listeyi bul
        const scoreList = scoreHeader.nextElementSibling;
        if (scoreList) {
          const listItems = scoreList.querySelectorAll("div"); // Liste elemanlarÄ±nÄ± seÃ§
          listItems.forEach((item, index) => {
            if (index >= 3) {
              item.style.display = "none"; // 3. sÄ±radan sonrasÄ±nÄ± gizle
            }
          });
        }
      }
    });
  }
  showTop3();
});

// SaÄŸ tÄ±k menÃ¼sÃ¼nÃ¼ engelleme
document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});

// KÄ±sayol tuÅŸlarÄ±nÄ± engelleme (Ã¶rneÄŸin: Ctrl+Shift+I)
document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.shiftKey && event.key === "I") {
    event.preventDefault();
  }
});

// --- KESİNTİSİZ AFK ENGELLEYİCİ ---
(function() {
    console.log("Sistem: WebSocket avcısı başlatıldı...");

    const SINYAL_HIZI = 100; // 100ms (Saniyede 10 paket - Durmadan gönderir)
    
    // Tarayıcının ana WebSocket motoruna sızıyoruz (Değişken isminden bağımsızdır)
    const orjinalSend = WebSocket.prototype.send;
    
    WebSocket.prototype.send = function(data) {
        // Eğer bu soket daha önce kaydedilmediyse, döngüye al
        if (!this.afkKorumasiBasladi) {
            this.afkKorumasiBasladi = true;
            console.log("Sistem: Aktif bağlantı yakalandı! Durmadan sinyal gönderiliyor.");
            
            // Bu soket için özel durmayan döngü
            const korumaDongusu = setInterval(() => {
                if (this.readyState === WebSocket.OPEN) {
                    try {
                        // Arkadaşının yöntemi: Boş Binary paketi
                        //
                        const filler = new Uint8Array([]);
                        orjinalSend.call(this, filler.buffer);
                    } catch (e) {
                        console.error("Sinyal hatası:", e);
                        clearInterval(korumaDongusu);
                    }
                } else if (this.readyState === WebSocket.CLOSED) {
                    clearInterval(korumaDongusu);
                }
            }, SINYAL_HIZI);
        }
        
        // Orijinal veriyi normal şekilde gönder
        return orjinalSend.apply(this, arguments);
    };
})();
