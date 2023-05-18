(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/csinterface/lib/v8.js
  var require_v8 = __commonJS({
    "node_modules/csinterface/lib/v8.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var CSXSWindowType;
      (function(CSXSWindowType2) {
        CSXSWindowType2["_PANEL"] = "Panel";
        CSXSWindowType2["_MODELESS"] = "Modeless";
        CSXSWindowType2["_MODAL_DIALOG"] = "ModalDialog";
      })(CSXSWindowType || (CSXSWindowType = {}));
      exports.CSXSWindowType = CSXSWindowType;
      var Version = (
        /** @class */
        function() {
          function Version2(major, minor, micro, special) {
            this.major = major;
            this.minor = minor;
            this.micro = micro;
            this.special = special;
          }
          __name(Version2, "Version");
          Version2.MAX_NUM = 999999999;
          return Version2;
        }()
      );
      var VersionBound = (
        /** @class */
        function() {
          function VersionBound2(version, inclusive) {
            this.version = version;
            this.inclusive = inclusive;
          }
          __name(VersionBound2, "VersionBound");
          return VersionBound2;
        }()
      );
      var VersionRange = (
        /** @class */
        function() {
          function VersionRange2(lowerBound, upperBound) {
            this.lowerBound = lowerBound;
            this.upperBound = upperBound;
          }
          __name(VersionRange2, "VersionRange");
          return VersionRange2;
        }()
      );
      var Runtime = (
        /** @class */
        function() {
          function Runtime2(name, versionRange) {
            this.name = name;
            this.versionRange = versionRange;
            this.version = versionRange;
          }
          __name(Runtime2, "Runtime");
          return Runtime2;
        }()
      );
      var Extension = (
        /** @class */
        function() {
          function Extension2(id, name, mainPath, basePath, windowType, width, height, minWidth, minHeight, maxWidth, maxHeight, defaultExtensionDataXml, specialExtensionDataXml, requiredRuntimeList, isAutoVisible, isPluginExtension) {
            this.id = id;
            this.name = name;
            this.mainPath = mainPath;
            this.basePath = basePath;
            this.windowType = windowType;
            this.width = width;
            this.height = height;
            this.minWidth = minWidth;
            this.minHeight = minHeight;
            this.maxWidth = maxWidth;
            this.maxHeight = maxHeight;
            this.defaultExtensionDataXml = defaultExtensionDataXml;
            this.specialExtensionDataXml = specialExtensionDataXml;
            this.requiredRuntimeList = requiredRuntimeList;
            this.isAutoVisible = isAutoVisible;
            this.isPluginExtension = isPluginExtension;
          }
          __name(Extension2, "Extension");
          return Extension2;
        }()
      );
      exports.Extension = Extension;
      var CSEvent = (
        /** @class */
        function() {
          function CSEvent2(type, scope, appId, extensionId) {
            this.type = type;
            this.scope = scope;
            this.appId = appId;
            this.extensionId = extensionId;
            this.data = "";
          }
          __name(CSEvent2, "CSEvent");
          return CSEvent2;
        }()
      );
      exports.CSEvent = CSEvent;
      var ColorType;
      (function(ColorType2) {
        ColorType2["RGB"] = "rbg";
        ColorType2["GRADIENT"] = "gradient";
        ColorType2["NONE"] = "none";
      })(ColorType || (ColorType = {}));
      exports.ColorType = ColorType;
      var RGBColor = (
        /** @class */
        function() {
          function RGBColor2(red, green, blue, alpha) {
            if (alpha === void 0) {
              alpha = 255;
            }
            this.red = red;
            this.green = green;
            this.blue = blue;
            this.alpha = alpha;
          }
          __name(RGBColor2, "RGBColor");
          return RGBColor2;
        }()
      );
      exports.RGBColor = RGBColor;
      var Direction = (
        /** @class */
        function() {
          function Direction2(x, y) {
            this.x = x;
            this.y = y;
          }
          __name(Direction2, "Direction");
          return Direction2;
        }()
      );
      exports.Direction = Direction;
      var GradientStop = (
        /** @class */
        function() {
          function GradientStop2(offset, rgbColor) {
            this.offset = offset;
            this.rgbColor = rgbColor;
          }
          __name(GradientStop2, "GradientStop");
          return GradientStop2;
        }()
      );
      exports.GradientStop = GradientStop;
      var GradientColor = (
        /** @class */
        function() {
          function GradientColor2(type, direction, numStops, arrGradientStop) {
            this.type = type;
            this.direction = direction;
            this.numStops = numStops;
            this.arrGradientStop = arrGradientStop;
            this.gradientStopList = arrGradientStop;
          }
          __name(GradientColor2, "GradientColor");
          return GradientColor2;
        }()
      );
      exports.GradientColor = GradientColor;
      var UIColor = (
        /** @class */
        function() {
          function UIColor2(type, antialiasLevel, color) {
            this.type = type;
            this.antialiasLevel = antialiasLevel;
            this.color = color;
          }
          __name(UIColor2, "UIColor");
          return UIColor2;
        }()
      );
      exports.UIColor = UIColor;
      var MenuItemStatus = (
        /** @class */
        function() {
          function MenuItemStatus2(menuItemLabel, enabled, checked) {
            this.menuItemLabel = menuItemLabel;
            this.enabled = enabled;
            this.checked = checked;
          }
          __name(MenuItemStatus2, "MenuItemStatus");
          return MenuItemStatus2;
        }()
      );
      exports.MenuItemStatus = MenuItemStatus;
      var ContextMenuItemStatus = (
        /** @class */
        function() {
          function ContextMenuItemStatus2(menuItemID, enabled, checked) {
            this.menuItemID = menuItemID;
            this.enabled = enabled;
            this.checked = checked;
          }
          __name(ContextMenuItemStatus2, "ContextMenuItemStatus");
          return ContextMenuItemStatus2;
        }()
      );
      exports.ContextMenuItemStatus = ContextMenuItemStatus;
      var CSInterface2 = (
        /** @class */
        function() {
          function CSInterface3() {
            this.hostEnvironment = window.__adobe_cep__ ? JSON.parse(window.__adobe_cep__.getHostEnvironment()) : null;
          }
          __name(CSInterface3, "CSInterface");
          CSInterface3.prototype.getHostEnvironment = function() {
            return JSON.parse(window.__adobe_cep__.getHostEnvironment());
          };
          CSInterface3.prototype.closeExtension = function() {
            window.__adobe_cep__.closeExtension();
          };
          CSInterface3.prototype.getSystemPath = function(pathType) {
            var path = decodeURI(window.__adobe_cep__.getSystemPath(pathType));
            var OSVersion = this.getOSInformation();
            if (OSVersion.indexOf("Windows") >= 0) {
              path = path.replace("file:///", "");
            } else if (OSVersion.indexOf("Mac") >= 0) {
              path = path.replace("file://", "");
            }
            return path;
          };
          CSInterface3.prototype.evalScript = function(script, callback) {
            if (callback === null || callback === void 0) {
              callback = /* @__PURE__ */ __name(function(result) {
              }, "callback");
            }
            window.__adobe_cep__.evalScript(script, callback);
          };
          CSInterface3.prototype.getApplicationID = function() {
            return this.hostEnvironment.appId;
          };
          CSInterface3.prototype.getHostCapabilities = function() {
            return JSON.parse(window.__adobe_cep__.getHostCapabilities());
          };
          CSInterface3.prototype.dispatchEvent = function(event) {
            if (typeof event.data == "object") {
              event.data = JSON.stringify(event.data);
            }
            window.__adobe_cep__.dispatchEvent(event);
          };
          CSInterface3.prototype.addEventListener = function(type, listener, obj) {
            window.__adobe_cep__.addEventListener(type, listener, obj);
          };
          CSInterface3.prototype.removeEventListener = function(type, listener, obj) {
            window.__adobe_cep__.removeEventListener(type, listener, obj);
          };
          CSInterface3.prototype.requestOpenExtension = function(extensionId, startupParams) {
            window.__adobe_cep__.requestOpenExtension(extensionId, startupParams);
          };
          CSInterface3.prototype.getExtensions = function(extensionIds) {
            var extensionIdsStr = JSON.stringify(extensionIds);
            var extensionsStr = window.__adobe_cep__.getExtensions(extensionIdsStr);
            return JSON.parse(extensionsStr);
          };
          CSInterface3.prototype.getNetworkPreferences = function() {
            return JSON.parse(window.__adobe_cep__.getNetworkPreferences());
          };
          CSInterface3.prototype.initResourceBundle = function() {
            var resourceBundle = JSON.parse(window.__adobe_cep__.initResourceBundle());
            var resElms = document.querySelectorAll("[data-locale]");
            for (var n = 0; n < resElms.length; n++) {
              var resEl = resElms[n];
              var resKey = resEl.getAttribute("data-locale");
              if (resKey) {
                for (var key in resourceBundle) {
                  if (key.indexOf(resKey) === 0) {
                    var resValue = resourceBundle[key];
                    if (key.length == resKey.length) {
                      resEl.innerHTML = resValue;
                    } else if ("." == key.charAt(resKey.length)) {
                      var attrKey = key.substring(resKey.length + 1);
                      resEl[attrKey] = resValue;
                    }
                  }
                }
              }
            }
            return resourceBundle;
          };
          CSInterface3.prototype.dumpInstallationInfo = function() {
            return window.__adobe_cep__.dumpInstallationInfo();
          };
          CSInterface3.prototype.getOSInformation = function() {
            var userAgent = navigator.userAgent;
            if (navigator.platform === "Win32" || navigator.platform === "Windows") {
              var winVersion = "Windows";
              var winBit = "";
              if (userAgent.indexOf("Windows") > -1) {
                if (userAgent.indexOf("Windows NT 5.0") > -1) {
                  winVersion = "Windows 2000";
                } else if (userAgent.indexOf("Windows NT 5.1") > -1) {
                  winVersion = "Windows XP";
                } else if (userAgent.indexOf("Windows NT 5.2") > -1) {
                  winVersion = "Windows Server 2003";
                } else if (userAgent.indexOf("Windows NT 6.0") > -1) {
                  winVersion = "Windows Vista";
                } else if (userAgent.indexOf("Windows NT 6.1") > -1) {
                  winVersion = "Windows 7";
                } else if (userAgent.indexOf("Windows NT 6.2") > -1) {
                  winVersion = "Windows 8";
                } else if (userAgent.indexOf("Windows NT 6.3") > -1) {
                  winVersion = "Windows 8.1";
                } else if (userAgent.indexOf("Windows NT 10") > -1) {
                  winVersion = "Windows 10";
                }
                if (userAgent.indexOf("WOW64") > -1 || userAgent.indexOf("Win64") > -1) {
                  winBit = " 64-bit";
                } else {
                  winBit = " 32-bit";
                }
              }
              return winVersion + winBit;
            } else if (navigator.platform === "MacIntel" || navigator.platform === "Macintosh") {
              var result = "Mac OS X";
              if (userAgent.indexOf("Mac OS X") > -1) {
                result = userAgent.substring(userAgent.indexOf("Mac OS X"), userAgent.indexOf(")"));
                result = result.replace(/_/g, ".");
              }
              return result;
            }
            return "Unknown Operation System";
          };
          CSInterface3.prototype.openURLInDefaultBrowser = function(url) {
            var result = window.cep.util.openURLInDefaultBrowser(url);
            return result.err;
          };
          CSInterface3.prototype.getExtensionID = function() {
            return window.__adobe_cep__.getExtensionId();
          };
          CSInterface3.prototype.getScaleFactor = function() {
            return window.__adobe_cep__.getScaleFactor();
          };
          CSInterface3.prototype.setScaleFactorChangedHandler = function(handler) {
            window.__adobe_cep__.setScaleFactorChangedHandler(handler);
          };
          CSInterface3.prototype.getCurrentApiVersion = function() {
            return JSON.parse(window.__adobe_cep__.getCurrentApiVersion());
          };
          CSInterface3.prototype.setPanelFlyoutMenu = function(menu) {
            window.__adobe_cep__.invokeSync("setPanelFlyoutMenu", menu);
          };
          CSInterface3.prototype.updatePanelMenuItem = function(menuItemLabel, enabled, checked) {
            if (!this.getHostCapabilities().EXTENDED_PANEL_MENU) {
              return false;
            }
            var itemStatus = new MenuItemStatus(menuItemLabel, enabled, checked);
            return window.__adobe_cep__.invokeSync("updatePanelMenuItem", JSON.stringify(itemStatus));
          };
          CSInterface3.prototype.setContextMenu = function(menu, callback) {
            window.__adobe_cep__.invokeAsync("setContextMenu", menu, callback);
          };
          CSInterface3.prototype.setContextMenuByJSON = function(menu, callback) {
            window.__adobe_cep__.invokeAsync("setContextMenuByJSON", menu, callback);
          };
          CSInterface3.prototype.updateContextMenuItem = function(menuItemID, enabled, checked) {
            var itemStatus = new ContextMenuItemStatus(menuItemID, enabled, checked);
            window.__adobe_cep__.invokeSync("updateContextMenuItem", JSON.stringify(itemStatus));
          };
          CSInterface3.prototype.isWindowVisible = function() {
            return window.__adobe_cep__.invokeSync("isWindowVisible", "") === "true";
          };
          CSInterface3.prototype.resizeContent = function(width, height) {
            window.__adobe_cep__.resizeContent(width, height);
          };
          CSInterface3.prototype.registerInvalidCertificateCallback = function(callback) {
            return window.__adobe_cep__.registerInvalidCertificateCallback(callback);
          };
          CSInterface3.prototype.registerKeyEventsInterest = function(keyEventsInterest) {
            return window.__adobe_cep__.registerKeyEventsInterest(keyEventsInterest);
          };
          CSInterface3.prototype.setWindowTitle = function(title) {
            window.__adobe_cep__.invokeSync("setWindowTitle", title);
          };
          CSInterface3.prototype.getWindowTitle = function() {
            return window.__adobe_cep__.invokeSync("getWindowTitle", "");
          };
          return CSInterface3;
        }()
      );
      exports.CSInterface = CSInterface2;
      (function(CSInterface3) {
        var SystemPath;
        (function(SystemPath2) {
          SystemPath2["USER_DATA"] = "userData";
          SystemPath2["COMMON_FILES"] = "commonFiles";
          SystemPath2["MY_DOCUMENTS"] = "myDocuments";
          SystemPath2["APPLICATION"] = "application";
          SystemPath2["EXTENSION"] = "extension";
          SystemPath2["HOST_APPLICATION"] = "hostApplication";
        })(SystemPath = CSInterface3.SystemPath || (CSInterface3.SystemPath = {}));
        CSInterface3.EvalScript_ErrMessage = "EvalScript error.";
        CSInterface3.THEME_COLOR_CHANGED_EVENT = "com.adobe.csxs.events.ThemeColorChanged";
      })(CSInterface2 = exports.CSInterface || (exports.CSInterface = {}));
      exports.CSInterface = CSInterface2;
      exports.default = CSInterface2;
    }
  });

  // node_modules/csinterface/lib/v9.js
  var require_v9 = __commonJS({
    "node_modules/csinterface/lib/v9.js"(exports) {
      "use strict";
      var __extends = exports && exports.__extends || function() {
        var extendStatics = /* @__PURE__ */ __name(function(d, b) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
            d2.__proto__ = b2;
          } || function(d2, b2) {
            for (var p in b2)
              if (b2.hasOwnProperty(p))
                d2[p] = b2[p];
          };
          return extendStatics(d, b);
        }, "extendStatics");
        return function(d, b) {
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          __name(__, "__");
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      function __export(m) {
        for (var p in m)
          if (!exports.hasOwnProperty(p))
            exports[p] = m[p];
      }
      __name(__export, "__export");
      Object.defineProperty(exports, "__esModule", { value: true });
      var v8_1 = require_v8();
      var CSInterface2 = (
        /** @class */
        function(_super) {
          __extends(CSInterface3, _super);
          function CSInterface3() {
            return _super !== null && _super.apply(this, arguments) || this;
          }
          __name(CSInterface3, "CSInterface");
          CSInterface3.prototype.getMonitorScaleFactor = function() {
            if (navigator.appVersion.toLowerCase().indexOf("windows") === -1) {
              throw Error("Operation System not supported");
            }
            return window.__adobe_cep__.getMonitorScaleFactor();
          };
          CSInterface3.prototype.loadBinAsync = function(urlName, callback) {
            try {
              var xhr_1 = new XMLHttpRequest();
              xhr_1.responseType = "arraybuffer";
              xhr_1.open("GET", urlName, true);
              xhr_1.onerror = function() {
                console.log("Unable to load snapshot from given URL");
                return false;
              };
              xhr_1.send();
              xhr_1.onload = function() {
                window.__adobe_cep__.loadSnapshot(xhr_1.response);
                if (typeof callback === "function") {
                  callback();
                } else if (typeof callback !== "undefined") {
                  console.log("Provided callback is not a function");
                }
              };
            } catch (err) {
              console.log(err);
              return false;
            }
            return true;
          };
          CSInterface3.prototype.loadBinSync = function(pathName) {
            try {
              var OSVersion = this.getOSInformation();
              if (pathName.startsWith("file://")) {
                if (OSVersion.indexOf("Windows") >= 0) {
                  pathName = pathName.replace("file:///", "");
                } else if (OSVersion.indexOf("Mac") >= 0) {
                  pathName = pathName.replace("file://", "");
                }
                window.__adobe_cep__.loadSnapshot(pathName);
                return true;
              }
            } catch (err) {
              console.log(err);
              return false;
            }
            return false;
          };
          return CSInterface3;
        }(v8_1.default)
      );
      __export(require_v8());
      exports.default = CSInterface2;
    }
  });

  // node_modules/csinterface/lib/utils.js
  var require_utils = __commonJS({
    "node_modules/csinterface/lib/utils.js"(exports) {
      "use strict";
      var __extends = exports && exports.__extends || function() {
        var extendStatics = /* @__PURE__ */ __name(function(d, b) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
            d2.__proto__ = b2;
          } || function(d2, b2) {
            for (var p in b2)
              if (b2.hasOwnProperty(p))
                d2[p] = b2[p];
          };
          return extendStatics(d, b);
        }, "extendStatics");
        return function(d, b) {
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          __name(__, "__");
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      Object.defineProperty(exports, "__esModule", { value: true });
      var index_1 = require_lib();
      var CSInterface2 = (
        /** @class */
        function(_super) {
          __extends(CSInterface3, _super);
          function CSInterface3() {
            return _super !== null && _super.apply(this, arguments) || this;
          }
          __name(CSInterface3, "CSInterface");
          CSInterface3.prototype.evalScript = function(script, callback) {
            var _this = this;
            function escape(value) {
              switch (typeof value) {
                case "undefined":
                  return '"null"';
                case "string":
                  return JSON.stringify(value);
                case "number": {
                  if (Number.isNaN(value) || Infinity === value) {
                    return 0;
                  }
                  return value;
                }
                case "object": {
                  if (value === null) {
                    return '"null"';
                  }
                  return escape(JSON.stringify(value));
                }
                case "boolean": {
                  return value;
                }
                default:
                  throw TypeError('Nicht unterst\xFCtzter Typ "' + typeof value + '"');
              }
            }
            __name(escape, "escape");
            var args = Array.from(arguments);
            var eval_string = args.shift().trim();
            var user_callback = null;
            if (args.length > 0) {
              if (typeof args[0] === "function") {
                user_callback = args.shift();
              } else {
                if (eval_string.length >= 3 && eval_string.substr(-3) === "();") {
                  eval_string = eval_string.substr(0, eval_string.length - 3);
                } else if (eval_string.length >= 2 && eval_string.substr(-2) === "()") {
                  eval_string = eval_string.substr(0, eval_string.length - 2);
                }
                eval_string += "(" + args.map(function(param) {
                  return escape(param);
                }).join(", ") + ");";
              }
            }
            return new Promise(function(resolve, reject) {
              var script2 = "try {\n                    " + eval_string + `
                } catch(e) {
                    '{"error": "' + e.name + '", "message": "' + e.message.replace(/"/g, "'") + '", "line": "' + (e.line ? e.line - 1: -1) + '", "stack": "' + (e.stack ? e.stack.replace(/"/g, "'") : "") + '"}'
                }`;
              _super.prototype.evalScript.call(_this, script2, function(result) {
                if (user_callback) {
                  return resolve(user_callback(result) || result);
                }
                if (typeof result === "string" && result === index_1.default.EvalScript_ErrMessage) {
                  return reject(result);
                }
                if (typeof result === "string" && result.length > 0) {
                  try {
                    var obj = JSON.parse(result);
                    if (typeof obj.error === "string") {
                      return reject(obj);
                    }
                    return resolve(JSON.parse(result));
                  } catch (e) {
                  }
                }
                return resolve(result);
              });
            });
          };
          return CSInterface3;
        }(index_1.default)
      );
      exports.CSInterface = CSInterface2;
      exports.default = CSInterface2;
    }
  });

  // node_modules/csinterface/lib/index.js
  var require_lib = __commonJS({
    "node_modules/csinterface/lib/index.js"(exports) {
      "use strict";
      function __export(m) {
        for (var p in m)
          if (!exports.hasOwnProperty(p))
            exports[p] = m[p];
      }
      __name(__export, "__export");
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.HostApplication = {
        PHSP: "Photohsop",
        PHXS: "Photoshop",
        IDSN: "InDesign",
        AICY: "InCopy",
        ILST: "Illustrator",
        PPRO: "Premiere Pro",
        PRLD: "Prelude",
        AEFT: "After Effects",
        FLPR: "Animate (Flash Pro)",
        AUDT: "Audition",
        DRWV: "Dreamweaver",
        MUSE: "Muse",
        KBRG: "Bridge",
        RUSH: "Rush"
      };
      __export(require_v9());
      var utils_1 = require_utils();
      exports.CSInterfacePromise = utils_1.CSInterface;
      var v9_1 = require_v9();
      exports.default = v9_1.default;
    }
  });

  // src/main.ts
  var import_csinterface = __toESM(require_lib());
  var csInterface = new import_csinterface.CSInterface();
  csInterface.setContextMenuByJSON(JSON.stringify({
    id: "refreshPanel",
    label: "Refresh Panel"
  }), () => {
    location.reload();
  });
  csInterface.evalScript("doAlert()");
})();
