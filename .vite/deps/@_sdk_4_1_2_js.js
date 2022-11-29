var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// <define:process.env.UNI_STAT_TITLE_JSON>
var init_define_process_env_UNI_STAT_TITLE_JSON = __esm({
  "<define:process.env.UNI_STAT_TITLE_JSON>"() {
  }
});

// ../../../../../../Users/zhaoliang/Documents/HBuilderProjects/vue3-uniapp/sdk/4.1.2.js
var require__ = __commonJS({
  "../../../../../../Users/zhaoliang/Documents/HBuilderProjects/vue3-uniapp/sdk/4.1.2.js"(exports, module) {
    init_define_process_env_UNI_STAT_TITLE_JSON();
    !function(e, t) {
      typeof exports == "object" && typeof module == "object" ? module.exports = t() : typeof define == "function" && define.amd ? define([], t) : typeof exports == "object" ? exports.websdk = t() : e.websdk = t();
    }(exports, function() {
      return function() {
        var e = { 3458: function(e2, t2, r2) {
          var n2, o, i;
          !function(a) {
            "use strict";
            if (t2 != null && typeof t2.nodeType != "number")
              e2.exports = a();
            else if (r2.amdO != null)
              o = [], (i = typeof (n2 = a) == "function" ? n2.apply(t2, o) : n2) === void 0 || (e2.exports = i);
            else {
              var s = a(), c = typeof self != "undefined" ? self : $.global;
              typeof c.btoa != "function" && (c.btoa = s.btoa), typeof c.atob != "function" && (c.atob = s.atob);
            }
          }(function() {
            "use strict";
            var e3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            function t3(e4) {
              this.message = e4;
            }
            return t3.prototype = new Error(), t3.prototype.name = "InvalidCharacterError", { btoa: function(r3) {
              for (var n3, o2, i2 = String(r3), a = 0, s = e3, c = ""; i2.charAt(0 | a) || (s = "=", a % 1); c += s.charAt(63 & n3 >> 8 - a % 1 * 8)) {
                if ((o2 = i2.charCodeAt(a += 3 / 4)) > 255)
                  throw new t3("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
                n3 = n3 << 8 | o2;
              }
              return c;
            }, atob: function(r3) {
              var n3 = String(r3).replace(/[=]+$/, "");
              if (n3.length % 4 == 1)
                throw new t3("'atob' failed: The string to be decoded is not correctly encoded.");
              for (var o2, i2, a = 0, s = 0, c = ""; i2 = n3.charAt(s++); ~i2 && (o2 = a % 4 ? 64 * o2 + i2 : i2, a++ % 4) ? c += String.fromCharCode(255 & o2 >> (-2 * a & 6)) : 0)
                i2 = e3.indexOf(i2);
              return c;
            } };
          });
        }, 3721: function(e2, t2, r2) {
          "use strict";
          r2.r(t2), r2.d(t2, { addUsersToChatRoom: function() {
            return v;
          }, addUsersToChatRoomAllowlist: function() {
            return z;
          }, addUsersToChatRoomWhitelist: function() {
            return V;
          }, blockChatRoomMember: function() {
            return x;
          }, blockChatRoomMembers: function() {
            return j;
          }, chatRoomBlockMulti: function() {
            return L;
          }, chatRoomBlockSingle: function() {
            return P;
          }, createChatRoom: function() {
            return p;
          }, deleteChatRoomSharedFile: function() {
            return ie;
          }, destroyChatRoom: function() {
            return h;
          }, disableSendChatRoomMsg: function() {
            return Z;
          }, enableSendChatRoomMsg: function() {
            return K;
          }, fetchChatRoomAnnouncement: function() {
            return re;
          }, fetchChatRoomSharedFileList: function() {
            return ae;
          }, getChatRoomAdmin: function() {
            return S;
          }, getChatRoomAllowlist: function() {
            return Q;
          }, getChatRoomAttributes: function() {
            return ce;
          }, getChatRoomBlacklist: function() {
            return W;
          }, getChatRoomBlacklistNew: function() {
            return F;
          }, getChatRoomBlocklist: function() {
            return q;
          }, getChatRoomDetails: function() {
            return d;
          }, getChatRoomMuteList: function() {
            return U;
          }, getChatRoomMuted: function() {
            return w;
          }, getChatRoomMutelist: function() {
            return k;
          }, getChatRoomSharedFilelist: function() {
            return se;
          }, getChatRoomWhitelist: function() {
            return $2;
          }, getChatRooms: function() {
            return l;
          }, isChatRoomWhiteUser: function() {
            return ee;
          }, isInChatRoomAllowlist: function() {
            return te;
          }, joinChatRoom: function() {
            return T;
          }, leaveChatRoom: function() {
            return O;
          }, listChatRoomMember: function() {
            return R;
          }, listChatRoomMembers: function() {
            return I;
          }, modifyChatRoom: function() {
            return f;
          }, muteChatRoomMember: function() {
            return C;
          }, quitChatRoom: function() {
            return _;
          }, removeChatRoomAdmin: function() {
            return N;
          }, removeChatRoomAllowlistMember: function() {
            return Y;
          }, removeChatRoomAttribute: function() {
            return he;
          }, removeChatRoomAttributes: function() {
            return pe;
          }, removeChatRoomBlockMulti: function() {
            return B;
          }, removeChatRoomBlockSingle: function() {
            return D;
          }, removeChatRoomMember: function() {
            return g;
          }, removeChatRoomMembers: function() {
            return E;
          }, removeChatRoomWhitelistMember: function() {
            return X;
          }, removeMultiChatRoomMember: function() {
            return y;
          }, removeMuteChatRoomMember: function() {
            return b;
          }, removeSingleChatRoomMember: function() {
            return m;
          }, rmUsersFromChatRoomWhitelist: function() {
            return J;
          }, setChatRoomAdmin: function() {
            return A;
          }, setChatRoomAttribute: function() {
            return le;
          }, setChatRoomAttributes: function() {
            return ue;
          }, unblockChatRoomMember: function() {
            return G;
          }, unblockChatRoomMembers: function() {
            return H;
          }, unmuteChatRoomMember: function() {
            return M;
          }, updateChatRoomAnnouncement: function() {
            return ne;
          }, uploadChatRoomSharedFile: function() {
            return oe;
          } }), r2(7858), r2(8826), r2(9900), r2(4593), r2(3776), r2(5233), r2(2289), r2(1157), r2(441), r2(3836), r2(6162), r2(796), r2(2835);
          var n2 = r2(4122), o = r2(5839), i = r2(3038), a = r2(6455), s = r2(6447), c = r2(8669);
          function u(e3) {
            return u = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e4) {
              return typeof e4;
            } : function(e4) {
              return e4 && typeof Symbol == "function" && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
            }, u(e3);
          }
          function l(e3) {
            var t3 = this;
            if (typeof e3.pagenum != "number" || typeof e3.pagesize != "number")
              throw Error("Invalid parameter");
            if (!a.XZ.call(this)) {
              var r3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(r3);
            }
            var u2 = { pagenum: e3.pagenum || 1, pagesize: e3.pagesize || 20 }, l2 = this.context, p2 = l2.orgName, h2 = l2.appName, d2 = l2.accessToken, f2 = { url: this.apiUrl + "/" + p2 + "/" + h2 + "/chatrooms", dataType: "json", type: "GET", headers: { Authorization: "Bearer " + d2 }, data: u2, success: function(t4) {
              typeof e3.success == "function" && e3.success(t4);
            }, error: function(r4) {
              r4.error && r4.error_description && t3.onError && t3.onError({ type: n2.E.WEBIM_CONNCTION_LOAD_CHATROOM_ERROR, message: r4.error_description, data: r4 }), typeof e3.error == "function" && e3.error(r4);
            } };
            return s.kg.debug("Call getChatRooms", e3), i.hj.call(this, f2, c.fI.GET_CHATROOM_LIST);
          }
          function p(e3) {
            if (typeof e3.name != "string")
              throw Error("Invalid parameter");
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = { name: e3.name, description: e3.description, maxusers: e3.maxusers, owner: this.user, members: e3.members }, u2 = this.context, l2 = u2.orgName, p2 = u2.appName, h2 = (u2.accessToken, u2.jid), d2 = { url: "".concat(this.apiUrl, "/").concat(l2, "/").concat(p2, "/chatrooms?resource=").concat(h2.clientResource), dataType: "json", type: "POST", data: JSON.stringify(r3), headers: { Authorization: "Bearer " + e3.token || 0, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call createChatRoom", e3), i.hj.call(this, d2, c.fI.CREATE_CHATROOM);
          }
          function h(e3) {
            if (typeof e3.chatRoomId != "string" || e3.chatRoomId === "")
              throw Error("Invalid parameter");
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = (r3.accessToken, r3.jid), h2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatrooms/").concat(e3.chatRoomId, "?resource=").concat(p2.clientResource), dataType: "json", type: "DELETE", headers: { Authorization: "Bearer " + e3.token || 0 }, success: e3.success, error: e3.error };
            return s.kg.debug("Call destroyChatRoom", e3), i.hj.call(this, h2, c.fI.DESTROY_CHATROOM);
          }
          function d(e3) {
            if (typeof e3.chatRoomId != "string" || e3.chatRoomId === "")
              throw Error("Invalid parameter");
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = { url: this.apiUrl + "/" + u2 + "/" + l2 + "/chatrooms/" + e3.chatRoomId, dataType: "json", type: "GET", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call getChatRoomDetails", e3), i.hj.call(this, h2, c.fI.GET_CHATROOM_DETAIL);
          }
          function f(e3) {
            if (typeof e3.chatRoomId != "string" || e3.chatRoomId === "")
              throw Error("Invalid parameter");
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = r3.jid, d2 = e3.chatRoomId, f2 = { groupname: e3.chatRoomName, description: e3.description, maxusers: e3.maxusers }, m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatrooms/").concat(d2, "?resource=").concat(h2.clientResource), type: "PUT", data: JSON.stringify(f2), dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call modifyChatRoom", e3), i.hj.call(this, m2, c.fI.MODIFY_CHATROOM);
          }
          function m(e3) {
            if (typeof e3.chatRoomId != "string" || e3.chatRoomId === "" || typeof e3.username != "string")
              throw Error("Invalid parameter");
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = r3.jid, d2 = e3.chatRoomId, f2 = e3.username, m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatrooms/").concat(d2, "/users/").concat(f2, "?resource=").concat(h2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call removeChatRoomMember", e3), i.hj.call(this, m2, c.fI.REMOVE_CHATROOM_MEMBER);
          }
          var g = m;
          function y(e3) {
            if (typeof e3.chatRoomId != "string" || e3.chatRoomId === "" || !Array.isArray(e3.users))
              throw Error("Invalid parameter");
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = e3.chatRoomId, u2 = e3.users.join(","), l2 = this.context, p2 = l2.orgName, h2 = l2.appName, d2 = l2.accessToken, f2 = l2.jid, m2 = { url: "".concat(this.apiUrl, "/").concat(p2, "/").concat(h2, "/chatrooms/").concat(r3, "/users/").concat(u2, "?resource=").concat(f2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + d2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call removeChatRoomMembers", e3), i.hj.call(this, m2, c.fI.MULTI_REMOVE_CHATROOM_MEMBER);
          }
          var E = y;
          function v(e3) {
            if (typeof e3.chatRoomId != "string" || e3.chatRoomId === "" || !Array.isArray(e3.users))
              throw Error("Invalid parameter");
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = e3.chatRoomId, u2 = { usernames: e3.users }, l2 = this.context, p2 = l2.orgName, h2 = l2.appName, d2 = l2.accessToken, f2 = l2.jid, m2 = { url: "".concat(this.apiUrl, "/").concat(p2, "/").concat(h2, "/chatrooms/").concat(r3, "/users?resource=").concat(f2.clientResource), type: "POST", data: JSON.stringify(u2), dataType: "json", headers: { Authorization: "Bearer " + d2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call addUsersToChatRoom", e3), i.hj.call(this, m2, c.fI.ADD_USERS_TO_CHATROOM);
          }
          function T(e3) {
            if (typeof e3.roomId != "string" || e3.roomId === "")
              throw Error("Invalid parameter");
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = r3.jid, d2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatrooms/").concat(e3.roomId, "/apply?resource=").concat(h2.clientResource), dataType: "json", type: "POST", data: JSON.stringify({ message: e3.message || "" }), headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call joinChatRoom", e3), i.hj.call(this, d2, c.fI.JOIN_CHATROOM);
          }
          function _(e3) {
            var t3 = this;
            if (typeof e3.roomId != "string" || e3.roomId === "")
              throw Error("Invalid parameter");
            if (!a.XZ.call(this)) {
              var r3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(r3);
            }
            var u2 = this.context, l2 = u2.orgName, p2 = u2.appName, h2 = u2.accessToken, d2 = u2.jid, f2 = { url: "".concat(this.apiUrl, "/").concat(l2, "/").concat(p2, "/chatrooms/").concat(e3.roomId, "/quit?resource=").concat(d2.clientResource), dataType: "json", type: "DELETE", headers: { Authorization: "Bearer " + h2 }, success: function(r4) {
              t3._load_msg_cache = t3._load_msg_cache.filter(function(t4) {
                return (!t4.isGroup || t4.to !== e3.roomId) && t4;
              }), typeof e3.success == "function" && e3.success(r4);
            }, error: e3.error };
            return s.kg.debug("Call leaveChatRoom", e3), i.hj.call(this, f2, c.fI.QUIT_CHATROOM);
          }
          var O = _;
          function R(e3) {
            if (typeof e3.chatRoomId != "string" || e3.chatRoomId === "")
              throw Error('Invalid parameter: "chatRoomId"');
            if (isNaN(e3.pageNum) || e3.pageNum <= 0)
              throw Error('The parameter "pageNum" should be a positive number');
            if (isNaN(e3.pageSize) || e3.pageSize <= 0)
              throw Error('The parameter "pageSize" should be a positive number');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = { pagenum: e3.pageNum, pagesize: e3.pageSize }, u2 = this.context, l2 = u2.orgName, p2 = u2.appName, h2 = u2.accessToken, d2 = { url: this.apiUrl + "/" + l2 + "/" + p2 + "/chatrooms/" + e3.chatRoomId + "/users", dataType: "json", type: "GET", data: r3, headers: { Authorization: "Bearer " + h2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call listChatRoomMembers", e3), i.hj.call(this, d2, c.fI.LIST_CHATROOM_MEMBERS);
          }
          var I = R;
          function S(e3) {
            if (typeof e3.chatRoomId != "string" || e3.chatRoomId === "")
              throw Error('Invalid parameter: "chatRoomId"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = e3.chatRoomId, d2 = { url: this.apiUrl + "/" + u2 + "/" + l2 + "/chatrooms/" + h2 + "/admin", dataType: "json", type: "GET", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call getChatRoomAdmin", e3), i.hj.call(this, d2, c.fI.GET_CHATROOM_ADMIN);
          }
          function A(e3) {
            if (typeof e3.chatRoomId != "string" || e3.chatRoomId === "")
              throw Error('Invalid parameter: "chatRoomId"');
            if (typeof e3.username != "string" || e3.username === "")
              throw Error('Invalid parameter: "username"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = r3.jid, d2 = e3.chatRoomId, f2 = { newadmin: e3.username }, m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatrooms/").concat(d2, "/admin?resource=").concat(h2.clientResource), type: "POST", dataType: "json", data: JSON.stringify(f2), headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call setChatRoomAdmin", e3), i.hj.call(this, m2, c.fI.SET_CHATROOM_ADMIN);
          }
          function N(e3) {
            if (typeof e3.chatRoomId != "string" || e3.chatRoomId === "")
              throw Error('Invalid parameter: "chatRoomId"');
            if (typeof e3.username != "string" || e3.username === "")
              throw Error('Invalid parameter: "username"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = r3.jid, d2 = e3.chatRoomId, f2 = e3.username, m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatrooms/").concat(d2, "/admin/").concat(f2, "?resource=").concat(h2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call removeChatRoomAdmin", e3), i.hj.call(this, m2, c.fI.REMOVE_CHATROOM_ADMIN);
          }
          function C(e3) {
            if (typeof e3.chatRoomId != "string" || e3.chatRoomId === "")
              throw Error('Invalid parameter: "groupId"');
            if (typeof e3.username != "string" || e3.username === "")
              throw Error('Invalid parameter: "username"');
            if (typeof e3.muteDuration != "number")
              throw Error('Invalid parameter: "muteDuration"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = r3.jid, d2 = e3.chatRoomId, f2 = { usernames: [e3.username], mute_duration: e3.muteDuration }, m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatrooms/").concat(d2, "/mute?resource=").concat(h2.clientResource), dataType: "json", type: "POST", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, data: JSON.stringify(f2), success: e3.success, error: e3.error };
            return s.kg.debug("Call muteChatRoomMember", e3), i.hj.call(this, m2, c.fI.MUTE_CHATROOM_MEMBER);
          }
          function b(e3) {
            if (typeof e3.chatRoomId != "string" || e3.chatRoomId === "")
              throw Error('Invalid parameter: "chatRoomId"');
            if (typeof e3.username != "string" || e3.username === "")
              throw Error('Invalid parameter: "username"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = r3.jid, d2 = e3.chatRoomId, f2 = e3.username, m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatrooms/").concat(d2, "/mute/").concat(f2, "?resource=").concat(h2.clientResource), dataType: "json", type: "DELETE", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call unmuteChatRoomMember", e3), i.hj.call(this, m2, c.fI.REMOVE_MUTE_CHATROOM_MEMBER);
          }
          var M = b;
          function w(e3) {
            if (typeof e3.chatRoomId != "string" || e3.chatRoomId === "")
              throw Error('Invalid parameter: "chatRoomId"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = e3.chatRoomId, d2 = { url: this.apiUrl + "/" + u2 + "/" + l2 + "/chatrooms/" + h2 + "/mute", dataType: "json", type: "GET", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call getChatRoomMutelist", e3), i.hj.call(this, d2, c.fI.GET_MUTE_CHATROOM_MEMBERS);
          }
          var U = w, k = w;
          function P(e3) {
            if (typeof e3.chatRoomId != "string" || e3.chatRoomId === "")
              throw Error('Invalid parameter: "chatRoomId"');
            if (typeof e3.username != "string" || e3.username === "")
              throw Error('Invalid parameter: "username"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = r3.jid, d2 = e3.chatRoomId, f2 = e3.username, m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatrooms/").concat(d2, "/blocks/users/").concat(f2, "?resource=").concat(h2.clientResource), type: "POST", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call blockChatRoomMember", e3), i.hj.call(this, m2, c.fI.SET_CHATROOM_MEMBER_TO_BLACK);
          }
          var x = P;
          function L(e3) {
            if (typeof e3.chatRoomId != "string" || e3.chatRoomId === "")
              throw Error('Invalid parameter: "chatRoomId"');
            if (!Array.isArray(e3.usernames))
              throw Error('Invalid parameter: "usernames"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = r3.jid, d2 = e3.chatRoomId, f2 = { usernames: e3.usernames }, m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatrooms/").concat(d2, "/blocks/users?resource=").concat(h2.clientResource), data: JSON.stringify(f2), type: "POST", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Chat blockChatRoomMembers:", m2), i.hj.call(this, m2, c.fI.MULTI_SET_CHATROOM_MEMBER_TO_BLACK);
          }
          var j = L;
          function D(e3) {
            if (typeof e3.chatRoomId != "string" || e3.chatRoomId === "")
              throw Error('Invalid parameter: "chatRoomId"');
            if (typeof e3.username != "string" || e3.username === "")
              throw Error('Invalid parameter: "username"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = r3.jid, d2 = e3.chatRoomId, f2 = e3.username, m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatrooms/").concat(d2, "/blocks/users/").concat(f2, "?resource=").concat(h2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call unblockChatRoomMember", e3), i.hj.call(this, m2, c.fI.REMOVE_CHATROOM_MEMBER_BLACK);
          }
          var G = D;
          function B(e3) {
            if (typeof e3.chatRoomId != "string" || e3.chatRoomId === "")
              throw Error('Invalid parameter: "chatRoomId"');
            if (!Array.isArray(e3.usernames))
              throw Error('Invalid parameter: "usernames"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = r3.jid, d2 = e3.chatRoomId, f2 = e3.usernames.join(","), m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatrooms/").concat(d2, "/blocks/users/").concat(f2, "?resource=").concat(h2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call unblockChatRoomMembers", e3), i.hj.call(this, m2, c.fI.MULTI_REMOVE_CHATROOM_MEMBER_BLACK);
          }
          var H = B;
          function F(e3) {
            if (typeof e3.chatRoomId != "string" || e3.chatRoomId === "")
              throw Error('Invalid parameter: "chatRoomId"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = e3.chatRoomId, d2 = { url: this.apiUrl + "/" + u2 + "/" + l2 + "/chatrooms/" + h2 + "/blocks/users", type: "GET", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call getChatRoomBlocklist", e3), i.hj.call(this, d2, c.fI.GET_CHATROOM_BLOCK_MEMBERS);
          }
          var W = F, q = F;
          function Z(e3) {
            if (typeof e3.chatRoomId != "string" || e3.chatRoomId === "")
              throw Error('Invalid parameter: "chatRoomId"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = r3.jid, d2 = e3.chatRoomId, f2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatrooms/").concat(d2, "/ban?resource=").concat(h2.clientResource), type: "POST", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call disableSendChatRoomMsg", e3), i.hj.call(this, f2, c.fI.DISABLED_CHATROOM_SEND_MSG);
          }
          function K(e3) {
            if (typeof e3.chatRoomId != "string" || e3.chatRoomId === "")
              throw Error('Invalid parameter: "chatRoomId"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = r3.jid, d2 = e3.chatRoomId, f2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatrooms/").concat(d2, "/ban?resource=").concat(h2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call enableSendChatRoomMsg", e3), i.hj.call(this, f2, c.fI.ENABLE_CHATROOM_SEND_MSG);
          }
          function V(e3) {
            if (typeof e3.chatRoomId != "string" || e3.chatRoomId === "")
              throw Error('Invalid parameter: "chatRoomId"');
            if (!Array.isArray(e3.users))
              throw Error('Invalid parameter: "users"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = r3.jid, d2 = e3.chatRoomId, f2 = { usernames: e3.users }, m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatrooms/").concat(d2, "/white/users?resource=").concat(h2.clientResource), type: "POST", data: JSON.stringify(f2), dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call addUsersToChatRoomWhitelist", e3), i.hj.call(this, m2, c.fI.ADD_USERS_TO_CHATROOM);
          }
          var z = V;
          function J(e3) {
            if (typeof e3.chatRoomId != "string" || e3.chatRoomId === "")
              throw Error('Invalid parameter: "chatRoomId"');
            if (typeof e3.userName != "string" || e3.userName === "")
              throw Error('Invalid parameter: "userName"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = r3.jid, d2 = e3.chatRoomId, f2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatrooms/").concat(d2, "/white/users/").concat(e3.userName, "?resource=").concat(h2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call removeChatRoomAllowlistMember", e3), i.hj.call(this, f2, c.fI.REMOVE_CHATROOM_WHITE_USERS);
          }
          var X = J, Y = J;
          function $2(e3) {
            if (typeof e3.chatRoomId != "string" || e3.chatRoomId === "")
              throw Error('Invalid parameter: "chatRoomId"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = e3.chatRoomId, d2 = { url: this.apiUrl + "/" + u2 + "/" + l2 + "/chatrooms/" + h2 + "/white/users", type: "GET", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call getChatRoomAllowlist", e3), i.hj.call(this, d2, c.fI.GET_CHATROOM_WHITE_USERS);
          }
          var Q = $2;
          function ee(e3) {
            if (typeof e3.chatRoomId != "string" || e3.chatRoomId === "")
              throw Error('Invalid parameter: "chatRoomId"');
            if (typeof e3.userName != "string" || e3.userName === "")
              throw Error('Invalid parameter: "userName"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = e3.chatRoomId, d2 = { url: this.apiUrl + "/" + u2 + "/" + l2 + "/chatrooms/" + h2 + "/white/users/" + e3.userName, type: "GET", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call isInChatRoomAllowlist", e3), i.hj.call(this, d2, c.fI.CHECK_CHATROOM_WHITE_USER);
          }
          var te = ee;
          function re(e3) {
            if (typeof e3.roomId != "string" || e3.roomId === "")
              throw Error('Invalid parameter: "roomId"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = e3.roomId, d2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatrooms/").concat(h2, "/announcement"), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call fetchChatRoomAnnouncement", e3), i.hj.call(this, d2, c.fI.GET_CHATROOM_ANN);
          }
          function ne(e3) {
            if (typeof e3.roomId != "string" || e3.roomId === "")
              throw Error('Invalid parameter: "roomId"');
            if (typeof e3.announcement != "string")
              throw Error('Invalid parameter: "announcement"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = r3.jid, d2 = e3.roomId, f2 = { announcement: e3.announcement }, m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatrooms/").concat(d2, "/announcement?resource=").concat(h2.clientResource), type: "POST", dataType: "json", data: JSON.stringify(f2), headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call updateChatRoomAnnouncement:", e3), i.hj.call(this, m2, c.fI.UPDATE_CHATROOM_ANN);
          }
          function oe(e3) {
            if (typeof e3.roomId != "string" || e3.roomId === "")
              throw Error('Invalid parameter: "roomId"');
            if (u(e3.file) !== "object")
              throw Error('Invalid parameter: "file"');
            if (a.XZ.call(this)) {
              var t3 = this.context, r3 = t3.orgName, n3 = t3.appName, o2 = t3.accessToken, l2 = t3.jid, p2 = e3.roomId;
              i.cT.call(this, { uploadUrl: "".concat(this.apiUrl, "/").concat(r3, "/").concat(n3, "/chatrooms/").concat(p2, "/share_files?resource=").concat(l2.clientResource), onFileUploadProgress: e3.onFileUploadProgress, onFileUploadComplete: e3.onFileUploadComplete, onFileUploadError: e3.onFileUploadError, onFileUploadCanceled: e3.onFileUploadCanceled, accessToken: o2, apiUrl: this.apiUrl, file: e3.file, appKey: this.context.appKey }, c.fI.UPLOAD_CHATROOM_FILE), s.kg.debug("Call uploadChatRoomSharedFile", e3);
            }
          }
          function ie(e3) {
            if (typeof e3.roomId != "string" || e3.roomId === "")
              throw Error('Invalid parameter: "roomId"');
            if (typeof e3.fileId != "string" || e3.fileId === "")
              throw Error('Invalid parameter: "fileId"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = r3.jid, d2 = e3.roomId, f2 = e3.fileId, m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatrooms/").concat(d2, "/share_files/").concat(f2, "?resource=").concat(h2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call deleteChatRoomSharedFile", e3), i.hj.call(this, m2, c.fI.DELETE_CHATROOM_FILE);
          }
          function ae(e3) {
            if (typeof e3.roomId != "string" || e3.roomId === "")
              throw Error('Invalid parameter: "roomId"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = e3.roomId, d2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatrooms/").concat(h2, "/share_files"), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json", accept: "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call fetchChatRoomSharedFileList", e3), i.hj.call(this, d2, c.fI.GET_CHATROOM_FILES);
          }
          var se = ae;
          function ce(e3) {
            if (typeof e3.chatRoomId != "string" || e3.chatRoomId === "")
              throw Error("Invalid parameter chatRoomId: " + e3.chatRoomId);
            if (e3.attributeKeys && !Array.isArray(e3.attributeKeys))
              throw Error('"Invalid parameter attributeKeys": ' + e3.attributeKeys);
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, c2 = r3.orgName, u2 = r3.appName, l2 = r3.accessToken, p2 = (r3.jid, e3.chatRoomId), h2 = { keys: e3.attributeKeys }, d2 = { url: "".concat(this.apiUrl, "/").concat(c2, "/").concat(u2, "/metadata/chatroom/").concat(p2), type: "POST", dataType: "json", data: JSON.stringify(h2), headers: { Authorization: "Bearer " + l2, "Content-Type": "application/json" } };
            return s.kg.debug("Call getChatRoomAttributes:", e3), i.hj.call(this, d2).then(function(e4) {
              return { data: e4.data, type: e4.type };
            });
          }
          function ue(e3) {
            if (typeof e3.chatRoomId != "string" || e3.chatRoomId === "")
              throw Error("Invalid parameter chatRoomId: " + e3.chatRoomId);
            if (u(e3.attributes) !== "object")
              throw Error("Invalid parameter attributes: " + e3.attributes);
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, c2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = r3.userId, d2 = e3.chatRoomId, f2 = e3.attributes, m2 = e3.autoDelete, g2 = m2 === void 0 || m2, y2 = e3.isForced ? "/forced" : "", E2 = { metaData: f2, autoDelete: g2 ? "DELETE" : "NO_DELETE" }, v2 = { url: "".concat(this.apiUrl, "/").concat(c2, "/").concat(l2, "/metadata/chatroom/").concat(d2, "/user/").concat(h2) + y2, type: "PUT", dataType: "json", data: JSON.stringify(E2), headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" } };
            return s.kg.debug("Call setChatRoomAttributes:", e3), i.hj.call(this, v2).then(function(e4) {
              return (0, a._W)(e4);
            });
          }
          function le(e3) {
            var t3;
            if (typeof e3.chatRoomId != "string" || e3.chatRoomId === "")
              throw Error("Invalid parameter chatRoomId: " + e3.chatRoomId);
            if (typeof e3.attributeKey != "string" || e3.attributeKey === "")
              throw Error("Invalid parameter attributeKey: " + e3.attributeKey);
            if (typeof e3.attributeValue != "string" || e3.attributeValue === "")
              throw Error("Invalid parameter attributeValue: " + e3.attributeValue);
            if (!a.XZ.call(this)) {
              var r3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(r3);
            }
            var c2 = this.context, u2 = c2.orgName, l2 = c2.appName, p2 = c2.accessToken, h2 = c2.userId, d2 = e3.chatRoomId, f2 = e3.attributeKey, m2 = e3.attributeValue, g2 = e3.autoDelete, y2 = g2 === void 0 || g2, E2 = e3.isForced ? "/forced" : "", v2 = { metaData: (t3 = {}, t3[f2] = m2, t3), autoDelete: y2 ? "DELETE" : "NO_DELETE" }, T2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/metadata/chatroom/").concat(d2, "/user/").concat(h2) + E2, type: "PUT", dataType: "json", data: JSON.stringify(v2), headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" } };
            return s.kg.debug("Call setChatRoomAttribute:", e3), i.hj.call(this, T2).then(function(e4) {
              var t4 = (0, a.H7)(e4);
              if (t4)
                throw t4;
            });
          }
          function pe(e3) {
            if (typeof e3.chatRoomId != "string" || e3.chatRoomId === "")
              throw Error("Invalid parameter chatRoomId: " + e3.chatRoomId);
            if (!Array.isArray(e3.attributeKeys))
              throw Error('"Invalid parameter attributes": ' + e3.attributeKeys);
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, c2 = r3.orgName, u2 = r3.appName, l2 = r3.accessToken, p2 = r3.userId, h2 = e3.chatRoomId, d2 = e3.attributeKeys, f2 = e3.isForced ? "/forced" : "", m2 = { keys: d2 }, g2 = { url: "".concat(this.apiUrl, "/").concat(c2, "/").concat(u2, "/metadata/chatroom/").concat(h2, "/user/").concat(p2) + f2, type: "DELETE", dataType: "json", data: JSON.stringify(m2), headers: { Authorization: "Bearer " + l2, "Content-Type": "application/json" } };
            return s.kg.debug("Call removeChatRoomAttributes:", e3), i.hj.call(this, g2).then(function(e4) {
              return (0, a._W)(e4);
            });
          }
          function he(e3) {
            if (typeof e3.chatRoomId != "string" || e3.chatRoomId === "")
              throw Error("Invalid parameter chatRoomId: " + e3.chatRoomId);
            if (typeof e3.attributeKey != "string" || e3.attributeKey === "")
              throw Error('"Invalid parameter attributeKey": ' + e3.attributeKey);
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, c2 = r3.orgName, u2 = r3.appName, l2 = r3.accessToken, p2 = r3.userId, h2 = e3.chatRoomId, d2 = e3.attributeKey, f2 = e3.isForced ? "/forced" : "", m2 = { keys: [d2] }, g2 = { url: "".concat(this.apiUrl, "/").concat(c2, "/").concat(u2, "/metadata/chatroom/").concat(h2, "/user/").concat(p2) + f2, type: "DELETE", dataType: "json", data: JSON.stringify(m2), headers: { Authorization: "Bearer " + l2, "Content-Type": "application/json" } };
            return s.kg.debug("Call removeChatRoomAttribute:", e3), i.hj.call(this, g2).then(function(e4) {
              var t4 = (0, a.H7)(e4);
              if (t4)
                throw t4;
            });
          }
        }, 3718: function(e2, t2, r2) {
          "use strict";
          r2.d(t2, { w: function() {
            return i;
          } }), r2(7758), r2(739);
          var n2 = r2(6447), o = function() {
            return o = Object.assign || function(e3) {
              for (var t3, r3 = 1, n3 = arguments.length; r3 < n3; r3++)
                for (var o2 in t3 = arguments[r3])
                  Object.prototype.hasOwnProperty.call(t3, o2) && (e3[o2] = t3[o2]);
              return e3;
            }, o.apply(this, arguments);
          };
          function i(e3) {
            var t3, r3, i2 = e3.id, a = e3.payload, s = e3.timestamp, c = e3.to, u = a.bodies && a.bodies.length > 0 ? a.bodies[0] : {}, l = {}, p = {}, h = a.type ? a.type : c.indexOf("@conference.easemob.com") > -1 ? "groupChat" : "singleChat";
            switch (u.type) {
              case "txt":
                l = { id: i2, type: "txt", chatType: h, msg: u.msg || "", to: a.to || "", from: a.from, time: s, ext: a.ext };
                break;
              case "img":
                l = { id: i2, type: "img", chatType: h, to: a.to, from: a.from, time: s, ext: a.ext, width: ((t3 = u.size) === null || t3 === void 0 ? void 0 : t3.width) || 0, height: ((r3 = u.size) === null || r3 === void 0 ? void 0 : r3.height) || 0, secret: u.secret || "", url: (u == null ? void 0 : u.url) || "", file: {} };
                break;
              case "video":
                l = { id: i2, type: "video", chatType: h, from: a.from, to: a.to, url: (u == null ? void 0 : u.url) || "", secret: u.secret || "", filename: u.filename, length: u.length || 0, file: {}, file_length: u.fileLength || 0, filetype: a.ext.file_type || "", ext: a.ext, time: s };
                break;
              case "loc":
                l = { id: i2, type: "loc", chatType: h, from: a.from, to: a.to, buildingName: u.buildingName || "", addr: u.addr, lat: u.lat, lng: u.lng, ext: a.ext, time: s };
                break;
              case "audio":
                l = { id: i2, type: "audio", chatType: h, from: a.from, to: a.to, secret: u.secret || "", ext: a.ext, time: s, url: (u == null ? void 0 : u.url) || "", file: {}, filename: u.filename, length: a.ext.duration || 0, file_length: u.fileLength || 0, filetype: a.ext.file_type || "" };
                break;
              case "file":
                l = { id: i2, type: "file", chatType: h, from: a.from, to: a.to, ext: a.ext, time: s, url: (u == null ? void 0 : u.url) || "", secret: u.secret || "", file: {}, filename: u.filename || "", length: u.length || 0, file_length: u.file_length || 0, filetype: a.ext.file_type || "" };
                break;
              case "cmd":
                l = { id: i2, type: "cmd", chatType: h, from: a.from, to: a.to, ext: a.ext, time: s, action: u.action || "" };
                break;
              case "custom":
                l = { id: i2, type: "custom", chatType: h, from: a.from, to: a.to, ext: a.ext, time: s, customEvent: u.customEvent || "" };
                break;
              default:
                n2.kg.error("unexpected message: ".concat(e3));
            }
            if (a.msgConfig && (p.msgConfig = a.msgConfig), a == null ? void 0 : a.meta) {
              var d = a.meta;
              d.thread && (p.chatThread = { messageId: d.thread.msg_parent_id, parentId: d.thread.muc_parent_id, chatThreadName: d.thread.thread_name }), d.reactions && (p.reactions = d.reactions), d.translations && (p.translations = d.translations);
            }
            return o(o({}, l), p);
          }
        }, 91: function(e2, t2, r2) {
          "use strict";
          r2.r(t2), r2.d(t2, { acceptGroupInvite: function() {
            return H;
          }, acceptGroupJoinRequest: function() {
            return j;
          }, addUsersToGroupAllowlist: function() {
            return me;
          }, addUsersToGroupWhitelist: function() {
            return fe;
          }, agreeInviteIntoGroup: function() {
            return B;
          }, agreeJoinGroup: function() {
            return L;
          }, blockGroup: function() {
            return h;
          }, blockGroupMember: function() {
            return re;
          }, blockGroupMembers: function() {
            return oe;
          }, blockGroupMessages: function() {
            return d;
          }, changeGroupOwner: function() {
            return v;
          }, changeOwner: function() {
            return E;
          }, createGroup: function() {
            return p;
          }, createGroupNew: function() {
            return l;
          }, deleteGroupSharedFile: function() {
            return Ce;
          }, destroyGroup: function() {
            return M;
          }, disableSendGroupMsg: function() {
            return he;
          }, dissolveGroup: function() {
            return b;
          }, downloadGroupSharedFile: function() {
            return we;
          }, enableSendGroupMsg: function() {
            return de;
          }, fetchGroupAnnouncement: function() {
            return Se;
          }, fetchGroupSharedFileList: function() {
            return be;
          }, getGroup: function() {
            return g;
          }, getGroupAdmin: function() {
            return I;
          }, getGroupAllowlist: function() {
            return Te;
          }, getGroupBlacklist: function() {
            return le;
          }, getGroupBlacklistNew: function() {
            return ue;
          }, getGroupBlocklist: function() {
            return pe;
          }, getGroupInfo: function() {
            return T;
          }, getGroupMsgReadUser: function() {
            return Ie;
          }, getGroupMuteList: function() {
            return Q;
          }, getGroupMutelist: function() {
            return ee;
          }, getGroupSharedFilelist: function() {
            return Me;
          }, getGroupWhitelist: function() {
            return ve;
          }, getJoinedGroups: function() {
            return y;
          }, getMuted: function() {
            return $2;
          }, getPublicGroups: function() {
            return m;
          }, groupBlockMulti: function() {
            return ne;
          }, groupBlockSingle: function() {
            return te;
          }, inviteToGroup: function() {
            return k;
          }, inviteUsersToGroup: function() {
            return P;
          }, isGroupWhiteUser: function() {
            return _e;
          }, isInGroupAllowlist: function() {
            return Re;
          }, isInGroupWhiteList: function() {
            return Oe;
          }, joinGroup: function() {
            return x;
          }, leaveGroup: function() {
            return U;
          }, listGroupMember: function() {
            return O;
          }, listGroupMembers: function() {
            return R;
          }, listGroups: function() {
            return f;
          }, modifyGroup: function() {
            return _;
          }, mute: function() {
            return z;
          }, muteGroupMember: function() {
            return J;
          }, quitGroup: function() {
            return w;
          }, rejectGroupInvite: function() {
            return W;
          }, rejectGroupJoinRequest: function() {
            return G;
          }, rejectInviteIntoGroup: function() {
            return F;
          }, rejectJoinGroup: function() {
            return D;
          }, removeAdmin: function() {
            return N;
          }, removeGroupAdmin: function() {
            return C;
          }, removeGroupAllowlistMember: function() {
            return Ee;
          }, removeGroupBlockMulti: function() {
            return se;
          }, removeGroupBlockSingle: function() {
            return ie;
          }, removeGroupMember: function() {
            return Z;
          }, removeGroupMembers: function() {
            return V;
          }, removeGroupWhitelistMember: function() {
            return ye;
          }, removeMultiGroupMember: function() {
            return K;
          }, removeMute: function() {
            return X;
          }, removeSingleGroupMember: function() {
            return q;
          }, rmUsersFromGroupWhitelist: function() {
            return ge;
          }, setAdmin: function() {
            return S;
          }, setGroupAdmin: function() {
            return A;
          }, unblockGroupMember: function() {
            return ae;
          }, unblockGroupMembers: function() {
            return ce;
          }, unmuteGroupMember: function() {
            return Y;
          }, updateGroupAnnouncement: function() {
            return Ae;
          }, uploadGroupSharedFile: function() {
            return Ne;
          } }), r2(7858), r2(8826), r2(5233), r2(3940), r2(75), r2(7680), r2(2914), r2(9900), r2(4593), r2(3776), r2(2289), r2(1157), r2(3836), r2(6162), r2(796), r2(2835);
          var n2 = r2(4122), o = r2(5839), i = r2(3038), a = r2(6455), s = r2(6447), c = r2(8669);
          function u(e3) {
            return u = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e4) {
              return typeof e4;
            } : function(e4) {
              return e4 && typeof Symbol == "function" && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
            }, u(e3);
          }
          function l(e3) {
            if (!e3 || !e3.data)
              throw Error("Invalid parameter");
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = r3.jid, d2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatgroups?resource=").concat(h2.clientResource), dataType: "json", type: "POST", data: JSON.stringify({ owner: this.user, groupname: e3.data.groupname, desc: e3.data.desc, members: e3.data.members, public: e3.data.public, approval: e3.data.approval, allowinvites: e3.data.allowinvites, invite_need_confirm: e3.data.inviteNeedConfirm, maxusers: e3.data.maxusers, custom: e3.data.ext }), headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: function(t4) {
              e3.success && e3.success(t4);
            }, error: e3.error };
            return s.kg.debug("Call createGroup:", e3), i.hj.call(this, d2, c.fI.CREATE_GROUP);
          }
          var p = l;
          function h(e3) {
            var t3;
            if (typeof e3.groupId != "string" || e3.groupId === "")
              throw Error("Invalid parameter");
            if (!a.XZ.call(this)) {
              var r3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(r3);
            }
            var u2 = this.context, l2 = u2.orgName, p2 = u2.appName, h2 = u2.accessToken, d2 = u2.jid, f2 = { entities: [(t3 = {}, t3["notification_ignore_" + e3.groupId] = true, t3)] }, m2 = { type: "PUT", url: "".concat(this.apiUrl, "/").concat(l2, "/").concat(p2, "/users/").concat(this.user, "?resource=").concat(d2.clientResource), data: JSON.stringify(f2), dataType: "json", headers: { Authorization: "Bearer " + h2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call blockGroupMessages", e3), i.hj.call(this, m2, c.fI.BLOCK_GROUP);
          }
          var d = h;
          function f(e3) {
            if (typeof e3.limit != "number")
              throw Error("Invalid parameter");
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = { limit: e3.limit, cursor: e3.cursor };
            e3.cursor || delete h2.cursor;
            var d2 = { url: this.apiUrl + "/" + u2 + "/" + l2 + "/publicchatgroups", type: "GET", dataType: "json", data: h2, headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call listGroups", e3), i.hj.call(this, d2, c.fI.LIST_GROUP);
          }
          var m = f;
          function g(e3) {
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = { url: this.apiUrl + "/" + u2 + "/" + l2 + "/users/" + this.user + "/joined_chatgroups", dataType: "json", type: "GET", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3 && (e3 == null ? void 0 : e3.success), error: e3 && (e3 == null ? void 0 : e3.error) };
            return s.kg.debug("Call getJoinedGroups", e3), i.hj.call(this, h2, c.fI.GET_USER_GROUP);
          }
          function y(e3) {
            if (typeof e3.pageNum != "number" || typeof e3.pageSize != "number")
              throw Error('Invalid parameter: "pageNum or pageSize"');
            if (e3.pageNum < 0 || e3.pageSize < 0)
              throw Error('"pageNum" should >= 0 and "pageSize" should >= 0');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = e3.needAffiliations || e3.needRole ? "/chatgroups/user/".concat(this.user, "?pagenum=").concat(e3.pageNum, "&pagesize=").concat(e3.pageSize, "&needAffiliations=").concat(e3.needAffiliations, "&needRole=").concat(e3.needRole) : "/users/".concat(this.user, "/joined_chatgroups?pagenum=").concat(e3.pageNum, "&pagesize=").concat(e3.pageSize), d2 = { url: this.apiUrl + "/" + u2 + "/" + l2 + h2, dataType: "json", type: "GET", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3 && (e3 == null ? void 0 : e3.success), error: e3 && (e3 == null ? void 0 : e3.error) };
            return s.kg.debug("Call getGroup", e3), i.hj.call(this, d2, c.fI.GET_USER_GROUP).then(function(e4) {
              var t4 = e4.uri, r4 = e4.entities, n3 = [];
              return t4.includes("joined_chatgroups") || (r4.forEach(function(e5) {
                var t5 = { affiliationsCount: e5.affiliations_count, groupName: e5.name, groupId: e5.groupId, role: e5.permission, disabled: e5.disabled, approval: e5.membersonly, allowInvites: e5.allowinvites, description: e5.description, maxUsers: e5.maxusers, public: e5.public };
                n3.push(t5);
              }), e4.entities = n3), e4;
            });
          }
          function E(e3) {
            if (typeof e3.groupId != "string" || typeof e3.newOwner != "string")
              throw Error("Invalid parameter");
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = { newowner: e3.newOwner }, u2 = this.context, l2 = u2.orgName, p2 = u2.appName, h2 = u2.accessToken, d2 = u2.jid, f2 = { url: "".concat(this.apiUrl, "/").concat(l2, "/").concat(p2, "/chatgroups/").concat(e3.groupId, "?resource=").concat(d2.clientResource), type: "PUT", dataType: "json", headers: { Authorization: "Bearer " + h2, "Content-Type": "application/json" }, data: JSON.stringify(r3), success: e3.success, error: e3.error };
            return s.kg.debug("Call changeOwner", e3), i.hj.call(this, f2, c.fI.CHANGE_OWNER);
          }
          var v = E;
          function T(e3) {
            if (typeof e3.groupId != "string" && !Array.isArray(e3.groupId))
              throw Error('Invalid parameter: "groupId"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = { url: this.apiUrl + "/" + u2 + "/" + l2 + "/chatgroups/" + e3.groupId + "?joined_time=true", type: "GET", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call getGroupInfo", e3), i.hj.call(this, h2, c.fI.GET_GROUP_INFO);
          }
          function _(e3) {
            if (typeof e3.groupId != "string" || e3.groupId === "")
              throw Error("Invalid parameter");
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = r3.jid, d2 = e3.groupId, f2 = { groupname: e3.groupName, description: e3.description, custom: e3.ext }, m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatgroups/").concat(d2, "?resource=").concat(h2.clientResource), type: "PUT", data: JSON.stringify(f2), dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call modifyGroup", e3), i.hj.call(this, m2, c.fI.MODIFY_GROUP);
          }
          function O(e3) {
            if (typeof e3.groupId != "string" || e3.groupId === "")
              throw Error('Invalid parameter: "groupId"');
            if (isNaN(e3.pageNum) || e3.pageNum <= 0)
              throw Error('The parameter "pageNum" should be a positive number');
            if (isNaN(e3.pageSize) || e3.pageSize <= 0)
              throw Error('The parameter "pageSize" should be a positive number');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = { pagenum: e3.pageNum, pagesize: e3.pageSize }, u2 = this.context, l2 = u2.orgName, p2 = u2.appName, h2 = u2.accessToken, d2 = { url: this.apiUrl + "/" + l2 + "/" + p2 + "/chatgroups/" + e3.groupId + "/users", dataType: "json", type: "GET", data: r3, headers: { Authorization: "Bearer " + h2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call listGroupMember", e3), i.hj.call(this, d2, c.fI.LIST_GROUP_MEMBER);
          }
          var R = O;
          function I(e3) {
            if (typeof e3.groupId != "string" || e3.groupId === "")
              throw Error('Invalid parameter: "groupId"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = e3.groupId, d2 = { url: this.apiUrl + "/" + u2 + "/" + l2 + "/chatgroups/" + h2 + "/admin", dataType: "json", type: "GET", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call getGroupAdmin", e3), i.hj.call(this, d2, c.fI.GET_GROUP_ADMIN);
          }
          function S(e3) {
            if (typeof e3.groupId != "string" || e3.groupId === "")
              throw Error('Invalid parameter: "groupId"');
            if (typeof e3.username != "string" || e3.username === "")
              throw Error('Invalid parameter: "username"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = r3.jid, d2 = e3.groupId, f2 = { newadmin: e3.username }, m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatgroups/").concat(d2, "/admin?resource=").concat(h2.clientResource), type: "POST", dataType: "json", data: JSON.stringify(f2), headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call setGroupAdmin", e3), i.hj.call(this, m2, c.fI.SET_GROUP_ADMIN);
          }
          var A = S;
          function N(e3) {
            if (typeof e3.groupId != "string" || e3.groupId === "")
              throw Error('Invalid parameter: "groupId"');
            if (typeof e3.username != "string" || e3.username === "")
              throw Error('Invalid parameter: "username"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = r3.jid, d2 = e3.groupId, f2 = e3.username, m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatgroups/").concat(d2, "/admin/").concat(f2, "?resource=").concat(h2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call removeAdmin", e3), i.hj.call(this, m2, c.fI.REMOVE_GROUP_ADMIN);
          }
          var C = N;
          function b(e3) {
            if (typeof e3.groupId != "string" || e3.groupId === "")
              throw Error('Invalid parameter: "groupId"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = r3.jid, d2 = e3.groupId, f2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatgroups/").concat(d2, "?version=v3&resource=").concat(h2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call destroyGroup", e3), i.hj.call(this, f2, c.fI.DISSOLVE_GROUP);
          }
          var M = b;
          function w(e3) {
            if (typeof e3.groupId != "string" || e3.groupId === "")
              throw Error('Invalid parameter: "groupId"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = r3.jid, d2 = e3.groupId, f2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatgroups/").concat(d2, "/quit?resource=").concat(h2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call quitGroup", e3), i.hj.call(this, f2, c.fI.QUIT_GROUP);
          }
          var U = w;
          function k(e3) {
            if (typeof e3.groupId != "string" || e3.groupId === "")
              throw Error('Invalid parameter: "groupId"');
            if (!Array.isArray(e3.users))
              throw Error('Invalid parameter: "users"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = e3.groupId, u2 = { usernames: e3.users }, l2 = this.context, p2 = l2.orgName, h2 = l2.appName, d2 = l2.accessToken, f2 = l2.jid, m2 = { url: "".concat(this.apiUrl, "/").concat(p2, "/").concat(h2, "/chatgroups/").concat(r3, "/invite?resource=").concat(f2.clientResource), type: "POST", data: JSON.stringify(u2), dataType: "json", headers: { Authorization: "Bearer " + d2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call inviteUsersToGroup", e3), i.hj.call(this, m2, c.fI.INVITE_TO_GROUP);
          }
          var P = k;
          function x(e3) {
            if (typeof e3.groupId != "string" || e3.groupId === "")
              throw Error('Invalid parameter: "groupId"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = r3.jid, d2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatgroups/").concat(e3.groupId, "/apply?resource=").concat(h2.clientResource), type: "POST", dataType: "json", data: JSON.stringify({ message: e3.message || "" }), headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call joinGroup", e3), i.hj.call(this, d2, c.fI.JOIN_GROUP);
          }
          function L(e3) {
            if (typeof e3.groupId != "string" || e3.groupId === "")
              throw Error('Invalid parameter: "groupId"');
            if (typeof e3.applicant != "string" || e3.applicant === "")
              throw Error('Invalid parameter: "applicant"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = r3.jid, d2 = e3.groupId, f2 = { applicant: e3.applicant, verifyResult: true, reason: "no clue" }, m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatgroups/").concat(d2, "/apply_verify?resource=").concat(h2.clientResource), type: "POST", dataType: "json", data: JSON.stringify(f2), headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call agreeJoinGroup", e3), i.hj.call(this, m2, c.fI.AGREE_JOIN_GROUP);
          }
          var j = L;
          function D(e3) {
            if (typeof e3.groupId != "string" || e3.groupId === "")
              throw Error('Invalid parameter: "groupId"');
            if (typeof e3.applicant != "string" || e3.applicant === "")
              throw Error('Invalid parameter: "applicant"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = r3.jid, d2 = e3.groupId, f2 = { applicant: e3.applicant, verifyResult: false, reason: e3.reason || "" }, m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatgroups/").concat(d2, "/apply_verify?resource=").concat(h2.clientResource), type: "POST", dataType: "json", data: JSON.stringify(f2), headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call rejectGroupJoinRequest", e3), i.hj.call(this, m2, c.fI.REJECT_JOIN_GROUP);
          }
          var G = D;
          function B(e3) {
            if (typeof e3.groupId != "string" || e3.groupId === "")
              throw Error('Invalid parameter: "groupId"');
            if (typeof e3.invitee != "string" || e3.invitee === "")
              throw Error('Invalid parameter: "invitee"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = r3.jid, d2 = e3.groupId, f2 = { invitee: e3.invitee, verifyResult: true }, m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatgroups/").concat(d2, "/invite_verify?resource=").concat(h2.clientResource), type: "POST", dataType: "json", data: JSON.stringify(f2), headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call acceptGroupInvite", e3), i.hj.call(this, m2, c.fI.AGREE_INVITE_GROUP);
          }
          var H = B;
          function F(e3) {
            if (typeof e3.groupId != "string" || e3.groupId === "")
              throw Error('Invalid parameter: "groupId"');
            if (typeof e3.invitee != "string" || e3.invitee === "")
              throw Error('Invalid parameter: "invitee"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = r3.jid, d2 = e3.groupId, f2 = { invitee: e3.invitee, verifyResult: false }, m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatgroups/").concat(d2, "/invite_verify?resource=").concat(h2.clientResource), type: "POST", dataType: "json", data: JSON.stringify(f2), headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call rejectGroupInvite", e3), i.hj.call(this, m2, c.fI.REJECT_INVITE_GROUP);
          }
          var W = F;
          function q(e3) {
            if (typeof e3.groupId != "string" || e3.groupId === "")
              throw Error('Invalid parameter: "groupId"');
            if (typeof e3.username != "string" || e3.username === "")
              throw Error('Invalid parameter: "username"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = e3.groupId, u2 = e3.username, l2 = this.context, p2 = l2.orgName, h2 = l2.appName, d2 = l2.accessToken, f2 = l2.jid, m2 = { url: "".concat(this.apiUrl, "/").concat(p2, "/").concat(h2, "/chatgroups/").concat(r3, "/users/").concat(u2, "?resource=").concat(f2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + d2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call removeGroupMember", e3), i.hj.call(this, m2, c.fI.REMOVE_GROUP_MEMBER);
          }
          var Z = q;
          function K(e3) {
            if (typeof e3.groupId != "string" || e3.groupId === "")
              throw Error('Invalid parameter: "groupId"');
            if (!Array.isArray(e3.users))
              throw Error('Invalid parameter: "users"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = r3.jid, d2 = e3.groupId, f2 = e3.users.join(","), m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatgroups/").concat(d2, "/users/").concat(f2, "?resource=").concat(h2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call removeGroupMembers", e3), i.hj.call(this, m2, c.fI.MULTI_REMOVE_GROUP_MEMBER);
          }
          var V = K;
          function z(e3) {
            if (typeof e3.groupId != "string" || e3.groupId === "")
              throw Error('Invalid parameter: "groupId"');
            if (!(Array.isArray(e3.username) || typeof e3.username == "string" && e3.username !== ""))
              throw Error('Invalid parameter: "username"');
            if (typeof e3.muteDuration != "number")
              throw Error('Invalid parameter: "muteDuration"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = r3.jid, d2 = e3.groupId, f2 = { usernames: typeof e3.username == "string" ? [e3.username] : e3.username, mute_duration: e3.muteDuration }, m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatgroups/").concat(d2, "/mute?resource=").concat(h2.clientResource), dataType: "json", type: "POST", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, data: JSON.stringify(f2), success: e3.success, error: e3.error };
            return s.kg.debug("Call muteGroupMember", e3), i.hj.call(this, m2, c.fI.MUTE_GROUP_MEMBER);
          }
          var J = z;
          function X(e3) {
            if (typeof e3.groupId != "string" || e3.groupId === "")
              throw Error('Invalid parameter: "groupId"');
            if (!(Array.isArray(e3.username) || typeof e3.username == "string" && e3.username !== ""))
              throw Error('Invalid parameter: "username"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = r3.jid, d2 = e3.groupId, f2 = e3.username, m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatgroups/").concat(d2, "/mute/").concat(f2, "?resource=").concat(h2.clientResource), dataType: "json", type: "DELETE", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call unmuteGroupMember", e3), i.hj.call(this, m2, c.fI.UNMUTE_GROUP_MEMBER);
          }
          var Y = X;
          function $2(e3) {
            if (typeof e3.groupId != "string" || e3.groupId === "")
              throw Error('Invalid parameter: "groupId"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = e3.groupId, d2 = { url: this.apiUrl + "/" + u2 + "/" + l2 + "/chatgroups/" + h2 + "/mute", dataType: "json", type: "GET", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call getGroupMuteList", e3), i.hj.call(this, d2, c.fI.GET_GROUP_MUTE_LIST);
          }
          var Q = $2, ee = $2;
          function te(e3) {
            if (typeof e3.groupId != "string" || e3.groupId === "")
              throw Error('Invalid parameter: "groupId"');
            if (typeof e3.username != "string" || e3.username === "")
              throw Error('Invalid parameter: "username"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = r3.jid, d2 = e3.groupId, f2 = e3.username, m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatgroups/").concat(d2, "/blocks/users/").concat(f2, "?resource=").concat(h2.clientResource), type: "POST", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call blockGroupMember", e3), i.hj.call(this, m2, c.fI.BLOCK_GROUP_MEMBER);
          }
          var re = te;
          function ne(e3) {
            if (typeof e3.groupId != "string" || e3.groupId === "")
              throw Error('Invalid parameter: "groupId"');
            if (!Array.isArray(e3.usernames))
              throw Error('Invalid parameter: "usernames"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = r3.jid, d2 = e3.groupId, f2 = { usernames: e3.usernames }, m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatgroups/").concat(d2, "/blocks/users?resource=").concat(h2.clientResource), data: JSON.stringify(f2), type: "POST", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call blockGroupMembers", e3), i.hj.call(this, m2, c.fI.BLOCK_GROUP_MEMBERS);
          }
          var oe = ne;
          function ie(e3) {
            if (typeof e3.groupId != "string" || e3.groupId === "")
              throw Error('Invalid parameter: "groupId"');
            if (typeof e3.username != "string" || e3.username === "")
              throw Error('Invalid parameter: "username"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = r3.jid, d2 = e3.groupId, f2 = e3.username, m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatgroups/").concat(d2, "/blocks/users/").concat(f2, "?resource=").concat(h2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call unblockGroupMember", e3), i.hj.call(this, m2, c.fI.UNBLOCK_GROUP_MEMBER);
          }
          var ae = ie;
          function se(e3) {
            if (typeof e3.groupId != "string" || e3.groupId === "")
              throw Error('Invalid parameter: "groupId"');
            if (!Array.isArray(e3.usernames))
              throw Error('Invalid parameter: "usernames"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = r3.jid, d2 = e3.groupId, f2 = e3.usernames.join(","), m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatgroups/").concat(d2, "/blocks/users/").concat(f2, "?resource=").concat(h2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call unblockGroupMembers", e3), i.hj.call(this, m2, c.fI.UNBLOCK_GROUP_MEMBERS);
          }
          var ce = se;
          function ue(e3) {
            if (typeof e3.groupId != "string" || e3.groupId === "")
              throw Error('Invalid parameter: "groupId"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = e3.groupId, d2 = { url: this.apiUrl + "/" + u2 + "/" + l2 + "/chatgroups/" + h2 + "/blocks/users", type: "GET", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call getGroupBlacklist", e3), i.hj.call(this, d2, c.fI.GET_GROUP_BLACK_LIST);
          }
          var le = ue, pe = ue;
          function he(e3) {
            if (typeof e3.groupId != "string" || e3.groupId === "")
              throw Error('Invalid parameter: "groupId"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = r3.jid, d2 = e3.groupId, f2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatgroups/").concat(d2, "/ban?resource=").concat(h2.clientResource), type: "POST", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call disableSendGroupMsg", e3), i.hj.call(this, f2, c.fI.DISABLED_SEND_GROUP_MSG);
          }
          function de(e3) {
            if (typeof e3.groupId != "string" || e3.groupId === "")
              throw Error('Invalid parameter: "groupId"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = r3.jid, d2 = e3.groupId, f2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatgroups/").concat(d2, "/ban?resource=").concat(h2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call enableSendGroupMsg", e3), i.hj.call(this, f2, c.fI.ENABLE_SEND_GROUP_MSG);
          }
          function fe(e3) {
            if (typeof e3.groupId != "string" || e3.groupId === "")
              throw Error('Invalid parameter: "groupId"');
            if (!Array.isArray(e3.users))
              throw Error('Invalid parameter: "users"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = r3.jid, d2 = e3.groupId, f2 = { usernames: e3.users }, m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatgroups/").concat(d2, "/white/users?resource=").concat(h2.clientResource), type: "POST", data: JSON.stringify(f2), dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call addUsersToGroupWhitelist", e3), i.hj.call(this, m2, c.fI.ADD_USERS_TO_GROUP_WHITE);
          }
          var me = fe;
          function ge(e3) {
            if (typeof e3.groupId != "string" || e3.groupId === "")
              throw Error('Invalid parameter: "groupId"');
            if (typeof e3.userName != "string" || e3.userName === "")
              throw Error('Invalid parameter: "userName"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = r3.jid, d2 = e3.groupId, f2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatgroups/").concat(d2, "/white/users/").concat(e3.userName, "?resource=").concat(h2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call removeGroupAllowlistMember", e3), i.hj.call(this, f2, c.fI.REMOVE_GROUP_WHITE_MEMBER);
          }
          var ye = ge, Ee = ge;
          function ve(e3) {
            if (typeof e3.groupId != "string" || e3.groupId === "")
              throw Error('Invalid parameter: "groupId"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = e3.groupId, d2 = { url: this.apiUrl + "/" + u2 + "/" + l2 + "/chatgroups/" + h2 + "/white/users", type: "GET", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call getGroupAllowlist", e3), i.hj.call(this, d2, c.fI.GET_GROUP_WHITE_LIST);
          }
          var Te = ve;
          function _e(e3) {
            if (typeof e3.groupId != "string" || e3.groupId === "")
              throw Error('Invalid parameter: "groupId"');
            if (typeof e3.userName != "string" || e3.userName === "")
              throw Error('Invalid parameter: "userName"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = e3.groupId, d2 = { url: this.apiUrl + "/" + u2 + "/" + l2 + "/chatgroups/" + h2 + "/white/users/" + e3.userName, type: "GET", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call isInGroupAllowlist", e3), i.hj.call(this, d2, c.fI.IS_IN_GROUP_WHITE_LIST);
          }
          var Oe = _e, Re = _e;
          function Ie(e3) {
            if (typeof e3.groupId != "string" || e3.groupId === "")
              throw Error('Invalid parameter: "groupId"');
            if (typeof e3.msgId != "string" || e3.msgId === "")
              throw Error('Invalid parameter: "msgId"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = { url: this.apiUrl + "/" + u2 + "/" + l2 + "/chatgroups/" + e3.groupId + "/acks/" + e3.msgId, dataType: "json", type: "GET", data: { limit: 500, key: void 0 }, headers: { Authorization: "Bearer " + p2 }, success: e3.success, error: e3.error };
            return s.kg.debug("Call getGroupMsgReadUser", e3), i.hj.call(this, h2, c.fI.GET_GROUP_MSG_READ_USER);
          }
          function Se(e3) {
            if (typeof e3.groupId != "string" || e3.groupId === "")
              throw Error('Invalid parameter: "groupId"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = e3.groupId, d2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatgroups/").concat(h2, "/announcement"), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call fetchGroupAnnouncement", e3), i.hj.call(this, d2, c.fI.GET_GROUP_ANN);
          }
          function Ae(e3) {
            if (typeof e3.groupId != "string" || e3.groupId === "")
              throw Error('Invalid parameter: "groupId"');
            if (typeof e3.announcement != "string")
              throw Error('Invalid parameter: "announcement"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = r3.jid, d2 = e3.groupId, f2 = { announcement: e3.announcement }, m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatgroups/").concat(d2, "/announcement?resource=").concat(h2.clientResource), type: "POST", dataType: "json", data: JSON.stringify(f2), headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call updateGroupAnnouncement", e3), i.hj.call(this, m2, c.fI.UPDATE_GROUP_ANN);
          }
          function Ne(e3) {
            if (typeof e3.groupId != "string" || e3.groupId === "")
              throw Error('Invalid parameter: "groupId"');
            if (u(e3.file) !== "object")
              throw Error('Invalid parameter: "file"');
            if (a.XZ.call(this)) {
              var t3 = this.context, r3 = t3.orgName, n3 = t3.appName, o2 = t3.accessToken, l2 = t3.jid, p2 = e3.groupId;
              i.cT.call(this, { uploadUrl: "".concat(this.apiUrl, "/").concat(r3, "/").concat(n3, "/chatgroups/").concat(p2, "/share_files?resource=").concat(l2.clientResource), onFileUploadProgress: e3.onFileUploadProgress, onFileUploadComplete: e3.onFileUploadComplete, onFileUploadError: e3.onFileUploadError, onFileUploadCanceled: e3.onFileUploadCanceled, accessToken: o2, apiUrl: this.apiUrl, file: e3.file, appKey: this.context.appKey }, c.fI.UPLOAD_GROUP_FILE), s.kg.debug("Call uploadGroupSharedFile", e3);
            }
          }
          function Ce(e3) {
            if (typeof e3.groupId != "string" || e3.groupId === "")
              throw Error('Invalid parameter: "groupId"');
            if (typeof e3.fileId != "string" || e3.fileId === "")
              throw Error('Invalid parameter: "file"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = r3.jid, d2 = e3.groupId, f2 = e3.fileId, m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatgroups/").concat(d2, "/share_files/").concat(f2, "?resource=").concat(h2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call deleteGroupSharedFile", e3), i.hj.call(this, m2, c.fI.DELETE_GROUP_FILE);
          }
          function be(e3) {
            if (typeof e3.groupId != "string" || e3.groupId === "")
              throw Error('Invalid parameter: "groupId"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, h2 = e3.pageNum || 1, d2 = e3.pageSize || 10, f2 = e3.groupId, m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatgroups/").concat(f2, "/share_files?pagenum=").concat(h2, "&pagesize=").concat(d2), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call getGroupSharedFilelist", e3), i.hj.call(this, m2, c.fI.GET_GROUP_FILE_LIST);
          }
          var Me = be;
          function we(e3) {
            var t3 = this.context, r3 = t3.orgName, n3 = t3.appName, o2 = t3.accessToken, a2 = this.apiUrl, u2 = e3.groupId, l2 = e3.fileId;
            i.LR.call(this, { url: "".concat(a2, "/").concat(r3, "/").concat(n3, "/chatgroups/").concat(u2, "/share_files/").concat(l2), onFileDownloadComplete: e3.onFileDownloadComplete, onFileDownloadError: e3.onFileDownloadError, accessToken: o2, id: l2, secret: e3.secret }, c.fI.DOWN_GROUP_FILE), s.kg.debug("Call downloadGroupSharedFile", e3);
          }
        }, 4556: function(e2, t2, r2) {
          "use strict";
          r2.r(t2), r2.d(t2, { acceptContactInvite: function() {
            return G;
          }, acceptInvitation: function() {
            return D;
          }, addContact: function() {
            return x;
          }, addReaction: function() {
            return J;
          }, addToBlackList: function() {
            return F;
          }, addUsersToBlacklist: function() {
            return W;
          }, addUsersToBlocklist: function() {
            return q;
          }, declineContactInvite: function() {
            return H;
          }, declineInvitation: function() {
            return B;
          }, deleteContact: function() {
            return j;
          }, deleteConversation: function() {
            return A;
          }, deleteReaction: function() {
            return X;
          }, deleteSession: function() {
            return S;
          }, fetchHistoryMessages: function() {
            return U;
          }, fetchUserInfoById: function() {
            return b;
          }, getBlacklist: function() {
            return y;
          }, getBlocklist: function() {
            return E;
          }, getChatToken: function() {
            return w;
          }, getContacts: function() {
            return T;
          }, getConversationlist: function() {
            return I;
          }, getHistoryMessages: function() {
            return P;
          }, getReactionDetail: function() {
            return Q;
          }, getReactionList: function() {
            return Y;
          }, getReactionlist: function() {
            return $2;
          }, getRoster: function() {
            return v;
          }, getSessionList: function() {
            return R;
          }, recallMessage: function() {
            return z;
          }, removeFromBlackList: function() {
            return Z;
          }, removeHistoryMessages: function() {
            return te;
          }, removeRoster: function() {
            return L;
          }, removeUserFromBlackList: function() {
            return K;
          }, removeUserFromBlocklist: function() {
            return V;
          }, reportMessage: function() {
            return ee;
          }, updateCurrentUserNick: function() {
            return M;
          }, updateOwnUserInfo: function() {
            return N;
          }, updateUserInfo: function() {
            return C;
          }, uploadPushToken: function() {
            return O;
          }, uploadToken: function() {
            return _;
          } }), r2(7758), r2(7858), r2(8826), r2(4593), r2(3776), r2(3836), r2(6162), r2(796), r2(2835), r2(7680), r2(2914), r2(5233), r2(3940), r2(1157), r2(3897), r2(6494), r2(9900), r2(9894), r2(5645), r2(2289);
          var n2 = r2(6455), o = r2(4122), i = r2(5839), a = r2(3038), s = r2(3406), c = r2(1688), u = r2(3458), l = r2.n(u), p = r2(6447), h = r2(8669), d = r2(3718), f = function() {
            return f = Object.assign || function(e3) {
              for (var t3, r3 = 1, n3 = arguments.length; r3 < n3; r3++)
                for (var o2 in t3 = arguments[r3])
                  Object.prototype.hasOwnProperty.call(t3, o2) && (e3[o2] = t3[o2]);
              return e3;
            }, f.apply(this, arguments);
          }, m = function(e3, t3, r3, n3) {
            return new (r3 || (r3 = Promise))(function(o2, i2) {
              function a2(e4) {
                try {
                  c2(n3.next(e4));
                } catch (e5) {
                  i2(e5);
                }
              }
              function s2(e4) {
                try {
                  c2(n3.throw(e4));
                } catch (e5) {
                  i2(e5);
                }
              }
              function c2(e4) {
                var t4;
                e4.done ? o2(e4.value) : (t4 = e4.value, t4 instanceof r3 ? t4 : new r3(function(e5) {
                  e5(t4);
                })).then(a2, s2);
              }
              c2((n3 = n3.apply(e3, t3 || [])).next());
            });
          }, g = function(e3, t3) {
            var r3, n3, o2, i2, a2 = { label: 0, sent: function() {
              if (1 & o2[0])
                throw o2[1];
              return o2[1];
            }, trys: [], ops: [] };
            return i2 = { next: s2(0), throw: s2(1), return: s2(2) }, typeof Symbol == "function" && (i2[Symbol.iterator] = function() {
              return this;
            }), i2;
            function s2(i3) {
              return function(s3) {
                return function(i4) {
                  if (r3)
                    throw new TypeError("Generator is already executing.");
                  for (; a2; )
                    try {
                      if (r3 = 1, n3 && (o2 = 2 & i4[0] ? n3.return : i4[0] ? n3.throw || ((o2 = n3.return) && o2.call(n3), 0) : n3.next) && !(o2 = o2.call(n3, i4[1])).done)
                        return o2;
                      switch (n3 = 0, o2 && (i4 = [2 & i4[0], o2.value]), i4[0]) {
                        case 0:
                        case 1:
                          o2 = i4;
                          break;
                        case 4:
                          return a2.label++, { value: i4[1], done: false };
                        case 5:
                          a2.label++, n3 = i4[1], i4 = [0];
                          continue;
                        case 7:
                          i4 = a2.ops.pop(), a2.trys.pop();
                          continue;
                        default:
                          if (!((o2 = (o2 = a2.trys).length > 0 && o2[o2.length - 1]) || i4[0] !== 6 && i4[0] !== 2)) {
                            a2 = 0;
                            continue;
                          }
                          if (i4[0] === 3 && (!o2 || i4[1] > o2[0] && i4[1] < o2[3])) {
                            a2.label = i4[1];
                            break;
                          }
                          if (i4[0] === 6 && a2.label < o2[1]) {
                            a2.label = o2[1], o2 = i4;
                            break;
                          }
                          if (o2 && a2.label < o2[2]) {
                            a2.label = o2[2], a2.ops.push(i4);
                            break;
                          }
                          o2[2] && a2.ops.pop(), a2.trys.pop();
                          continue;
                      }
                      i4 = t3.call(e3, a2);
                    } catch (e4) {
                      i4 = [6, e4], n3 = 0;
                    } finally {
                      r3 = o2 = 0;
                    }
                  if (5 & i4[0])
                    throw i4[1];
                  return { value: i4[0] ? i4[1] : void 0, done: true };
                }([i3, s3]);
              };
            }
          };
          function y(e3) {
            if (!n2.XZ.call(this)) {
              var t3 = i.Z.create({ type: o.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, s2 = r3.orgName, c2 = r3.appName, u2 = r3.accessToken, l2 = { url: this.apiUrl + "/" + s2 + "/" + c2 + "/users/" + this.user + "/blocks/users", dataType: "json", type: "GET", headers: { Authorization: "Bearer " + u2 }, success: function(t4) {
              var r4 = {};
              t4.data.forEach(function(e4) {
                r4[e4] = { name: e4 };
              }), typeof (e3 == null ? void 0 : e3.success) == "function" && e3.success(t4);
            }, error: function(t4) {
              typeof (e3 == null ? void 0 : e3.error) == "function" && e3.error(t4);
            } };
            return p.kg.debug("Call getBlocklist"), a.hj.call(this, l2, h.fI.GET_BLACK_LIST);
          }
          var E = y, v = T;
          function T(e3) {
            var t3 = this;
            if (!n2.XZ.call(this)) {
              var r3 = i.Z.create({ type: o.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(r3);
            }
            var s2 = this.context, c2 = s2.orgName, u2 = s2.appName, l2 = s2.accessToken, d2 = { url: this.apiUrl + "/" + c2 + "/" + u2 + "/users/" + this.user + "/contacts/users", dataType: "json", type: "GET", headers: { Authorization: "Bearer " + l2 }, success: function(r4) {
              var n3 = [];
              r4.data.forEach(function(e4) {
                n3.push({ name: e4, subscription: "both", jid: t3.context.jid });
              }), typeof (e3 == null ? void 0 : e3.success) == "function" && e3.success(n3);
            }, error: function(t4) {
              typeof (e3 == null ? void 0 : e3.error) == "function" && e3.error(t4);
            } };
            return p.kg.debug("Call getContacts"), a.hj.call(this, d2, h.fI.GET_CONTACTS);
          }
          function _(e3) {
            if (typeof e3.deviceId != "string" || e3.deviceId === "")
              throw Error('Invalid parameter: "deviceId"');
            if (typeof e3.deviceToken != "string" || e3.deviceToken === "")
              throw Error('Invalid parameter: "deviceToken"');
            if (typeof e3.notifierName != "string" || e3.notifierName === "")
              throw Error('Invalid parameter: "notifierName"');
            if (!n2.XZ.call(this)) {
              var t3 = i.Z.create({ type: o.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, s2 = r3.orgName, c2 = r3.appName, u2 = r3.accessToken, l2 = { url: "".concat(this.apiUrl, "/").concat(s2, "/").concat(c2, "/users/").concat(this.user), type: "PUT", data: JSON.stringify({ device_id: e3.deviceId, device_token: e3.deviceToken, notifier_name: e3.notifierName }), dataType: "json", headers: { Authorization: "Bearer " + u2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return p.kg.debug("Call uploadPushToken", e3), a.hj.call(this, l2, h.fI.UPLOAD_PUSH_TOKEN);
          }
          var O = _;
          function R(e3) {
            if (!n2.XZ.call(this)) {
              var t3 = i.Z.create({ type: o.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, s2 = r3.orgName, c2 = r3.appName, u2 = r3.accessToken, l2 = { url: "".concat(this.apiUrl, "/").concat(s2, "/").concat(c2, "/users/").concat(this.user, "/user_channels"), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + u2, "Content-Type": "application/json" }, success: e3 && (e3 == null ? void 0 : e3.success), error: e3 && (e3 == null ? void 0 : e3.error) };
            return p.kg.debug("Call getSessionList"), a.hj.call(this, l2, h.fI.GET_SESSION_LIST);
          }
          function I(e3) {
            if (!n2.XZ.call(this)) {
              var t3 = i.Z.create({ type: o.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, s2 = r3.orgName, c2 = r3.appName, u2 = r3.accessToken, l2 = { url: "".concat(this.apiUrl, "/").concat(s2, "/").concat(c2, "/users/").concat(this.user, "/user_channels"), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + u2, "Content-Type": "application/json" }, success: e3 && (e3 == null ? void 0 : e3.success), error: e3 && (e3 == null ? void 0 : e3.error) };
            return p.kg.debug("Call getConversationlist"), a.hj.call(this, l2, h.fI.GET_SESSION_LIST).then(function(e4) {
              return function(e5) {
                var t4 = e5.data.channel_infos;
                return t4 == null || t4.forEach(function(e6) {
                  e6.meta && JSON.stringify(e6.meta) !== "{}" ? (e6.meta.payload = JSON.parse(e6.meta.payload), e6.lastMessage = (0, d.w)(e6.meta)) : e6.lastMessage = e6.meta, delete e6.meta;
                }), e5;
              }(e4);
            });
          }
          function S(e3) {
            if (e3 && typeof e3.channel != "string")
              throw Error("Invalid parameter channel: ".concat(e3.channel));
            if (e3 && e3.chatType !== "singleChat" && e3.chatType !== "groupChat")
              throw Error("Invalid parameter chatType: ".concat(e3.chatType));
            if (e3 && typeof e3.deleteRoam != "boolean")
              throw Error("Invalid parameter deleteRoam: ".concat(e3.deleteRoam));
            if (!n2.XZ.call(this)) {
              var t3 = i.Z.create({ type: o.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3, s2 = this.context, c2 = s2.orgName, u2 = s2.appName, l2 = s2.accessToken;
            r3 = e3.chatType === "singleChat" ? "chat" : "groupChat";
            var d2 = { url: "".concat(this.apiUrl, "/").concat(c2, "/").concat(u2, "/users/").concat(this.user, "/user_channel"), dataType: "json", type: "DELETE", data: JSON.stringify({ channel: e3.channel, type: r3, delete_roam: e3.deleteRoam }), headers: { Authorization: "Bearer " + l2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return p.kg.debug("Call deleteSession", e3), a.hj.call(this, d2, h.fI.DELETE_SESSION);
          }
          var A = S;
          function N(e3, t3) {
            if (!n2.XZ.call(this)) {
              var r3 = i.Z.create({ type: o.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(r3);
            }
            var s2 = this.context, c2 = s2.orgName, u2 = s2.appName, l2 = s2.accessToken, d2 = ["nickname", "avatarurl", "mail", "phone", "gender", "sign", "birth", "ext"], f2 = {};
            if (typeof wx != "undefined" || typeof qq != "undefined")
              if (typeof e3 == "string" && t3 !== void 0) {
                if (!d2.includes(e3))
                  throw new Error("illegal key, only these keys: nickname, avatarurl, mail, phone, gender, sign, birth, ext are allowed");
                f2[e3] = t3;
              } else {
                if (Object.prototype.toString.call(e3) !== "[object Object]")
                  throw new Error("illegal params");
                d2.forEach(function(t4) {
                  d2.includes(t4) && e3[t4] !== void 0 && (f2[t4] = e3[t4]);
                });
              }
            else if (typeof e3 == "string") {
              if (!d2.includes(e3))
                throw new Error("illegal key, only these keys: nickname, avatarurl, mail, phone, gender, sign, birth, ext are allowed");
              f2 = e3 + "=" + t3;
            } else {
              if (Object.prototype.toString.call(e3) !== "[object Object]")
                throw new Error("illegal params");
              var m2 = [];
              d2.forEach(function(t4) {
                if (d2.includes(t4) && e3[t4] !== void 0) {
                  var r4 = encodeURIComponent(t4), n3 = encodeURIComponent(e3[t4]);
                  m2.push(r4 + "=" + n3);
                }
              }), f2 = m2.join("&");
            }
            var g2 = { url: "".concat(this.apiUrl, "/").concat(c2, "/").concat(u2, "/metadata/user/").concat(this.user), type: "PUT", data: f2, dataType: "json", headers: { Authorization: "Bearer " + l2, "Content-Type": "application/x-www-form-urlencoded" } };
            return p.kg.debug("Call updateOwnUserInfo", e3), a.hj.call(this, g2, h.fI.UPDATE_USER_INFO);
          }
          var C = N;
          function b(e3, t3) {
            if (!n2.XZ.call(this)) {
              var r3 = i.Z.create({ type: o.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(r3);
            }
            var s2, c2 = this.context, u2 = c2.orgName, l2 = c2.appName, d2 = c2.accessToken, f2 = [];
            if (typeof e3 == "string")
              f2 = [e3];
            else {
              if (Object.prototype.toString.call(e3) !== "[object Array]")
                throw new Error("illegal params");
              f2 = e3;
            }
            s2 = typeof t3 == "string" ? [t3] : t3 && Object.prototype.toString.call(t3) === "[object Array]" ? t3 : ["nickname", "avatarurl", "mail", "phone", "gender", "sign", "birth", "ext"];
            var m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/metadata/user/get"), type: "POST", data: JSON.stringify({ targets: f2, properties: s2 }), dataType: "json", headers: { Authorization: "Bearer " + d2, "Content-Type": "application/json" } };
            return p.kg.debug("Call fetchUserInfoById", e3), a.hj.call(this, m2, h.fI.GET_USER_INFO);
          }
          function M(e3) {
            if (!n2.XZ.call(this)) {
              var t3 = i.Z.create({ type: o.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, s2 = r3.orgName, c2 = r3.appName, u2 = r3.accessToken, l2 = { url: "".concat(this.apiUrl, "/").concat(s2, "/").concat(c2, "/users/").concat(this.user), type: "PUT", dataType: "json", data: JSON.stringify({ nickname: e3 }), headers: { Authorization: "Bearer " + u2, "Content-Type": "application/json" } };
            return p.kg.debug("Call updateCurrentUserNick", e3), a.hj.call(this, l2);
          }
          function w(e3) {
            if (typeof e3 != "string" || e3 === "")
              throw Error('Invalid parameter: "agoraToken"');
            var t3 = this.context, r3 = t3.orgName, n3 = t3.appName, o2 = { url: this.apiUrl + "/" + r3 + "/" + n3 + "/token", dataType: "json", type: "POST", data: JSON.stringify({ grant_type: "agora" }), headers: { Authorization: "Bearer " + e3, "Content-Type": "application/json" } };
            return p.kg.debug("Call getChatToken", e3), a.hj.call(this, o2, h.fI.SDK_INTERNAL);
          }
          function U(e3) {
            var t3 = this;
            return new Promise(function(r3, a2) {
              if (!e3.queue)
                throw Error('Invalid parameter: "specified"');
              if (!n2.XZ.call(t3)) {
                var s2 = i.Z.create({ type: o.E.REST_PARAMS_STATUS, message: "appkey or token error" });
                return Promise.reject(s2);
              }
              (function e4(t4) {
                var n3 = this, o2 = t4.count || 20;
                k.call(this, { count: o2, isGroup: !!t4.isGroup, queue: t4.queue, start: t4.start, format: t4.format, success: function(i2) {
                  if (i2.msgs.length >= o2 || i2.is_last) {
                    var a3 = i2.msgs.splice(0, o2).reverse();
                    t4.success && t4.success(a3), r3(a3);
                  } else
                    e4.call(n3, f(f({}, t4), { start: null }));
                }, fail: function(e5) {
                  a2(e5), t4.fail && t4.fail(e5);
                } });
              }).call(t3, e3), p.kg.debug("Call fetchHistoryMessages", e3);
            });
          }
          function k(e3) {
            var t3 = this, r3 = e3.queue, n3 = this.mr_cache[r3] || (this.mr_cache[r3] = { msgs: [] }), c2 = this.context.userId, u2 = e3.start || -1, p2 = e3.count || 20;
            if (n3.msgs.length >= p2 || n3.is_last)
              typeof e3.success == "function" && e3.success(n3);
            else {
              n3 && n3.next_key && (u2 = n3.next_key), e3.start && (u2 = e3.start);
              var d2 = { queue: r3 + (e3.isGroup ? "@conference.easemob.com" : "@easemob.com"), start: u2, end: -1 }, f2 = this.context, m2 = f2.orgName, g2 = f2.appName, y2 = { url: this.apiUrl + "/" + m2 + "/" + g2 + "/users/" + c2 + "/messageroaming", dataType: "json", type: "POST", headers: { Authorization: "Bearer " + this.token, "Content-Type": "application/json" }, data: JSON.stringify(d2), success: function(r4) {
                var o2 = r4 == null ? void 0 : r4.data;
                if (!r4.data.msgs)
                  return typeof e3.success == "function" && e3.success(n3), n3.is_last = true, void (n3.next_key = "");
                var i2 = o2.msgs, a2 = i2.length;
                n3.is_last = o2.is_last, n3.next_key = o2.next_key;
                for (var c3 = function(r5) {
                  for (var n4 = [], o3 = 0, i3 = (r5 = l().atob(r5)).length; o3 < i3; ++o3)
                    n4.push(r5.charCodeAt(o3));
                  var a3 = t3.context.root.lookup("easemob.pb.Meta");
                  if ((a3 = a3.decode(n4)).ns === 1)
                    return s.Z.call(t3, a3, { errorCode: 0, reason: "" }, true, e3.format);
                }, u3 = 0; u3 < a2; u3++) {
                  var p3 = c3(i2[u3].msg);
                  p3 && n3.msgs.push(p3);
                }
                typeof e3.success == "function" && e3.success(n3);
              }, error: function r4(n4) {
                if (n4.error && n4.error_description) {
                  var a2 = i.Z.create({ type: o.E.WEBIM_CONNCTION_LOAD_CHATROOM_ERROR, message: "fetch history messages error", data: n4 });
                  t3.onError && t3.onError(a2);
                }
                typeof e3.fail == "function" && e3.fail(r4);
              } };
              a.hj.call(this, y2, h.fI.GET_HISTORY_MSG);
            }
          }
          function P(e3) {
            var t3 = this;
            return new Promise(function(r3, c2) {
              if (typeof e3.targetId != "string" || e3.targetId === "")
                throw Error('"Invalid parameter": "targetId"');
              if (!n2.XZ.call(t3))
                return c2(i.Z.create({ type: o.E.REST_PARAMS_STATUS, message: "appkey or token error" }));
              var u2 = t3.context, h2 = u2.orgName, d2 = u2.appName, f2 = u2.userId, m2 = e3.chatType === "groupChat" || e3.chatType === "chatRoom" ? "@conference.easemob.com" : "@easemob.com", g2 = { queue: e3.targetId + m2, start: e3.cursor || -1, pull_number: e3.pageSize || 20, isGroup: e3.chatType === "groupChat" || e3.chatType === "chatRoom" || false, is_positive: e3.searchDirection === "down", end: -1 }, y2 = { url: t3.apiUrl + "/" + h2 + "/" + d2 + "/users/" + f2 + "/messageroaming", dataType: "json", type: "POST", headers: { Authorization: "Bearer " + t3.token, "Content-Type": "application/json" }, data: JSON.stringify(g2), success: function(e4) {
                for (var n3 = e4 == null ? void 0 : e4.data, o2 = n3.msgs || [], i2 = function(e5) {
                  for (var r4 = [], n4 = 0, o3 = (e5 = l().atob(e5)).length; n4 < o3; ++n4)
                    r4.push(e5.charCodeAt(n4));
                  var i3 = t3.context.root.lookup("easemob.pb.Meta");
                  if ((i3 = i3.decode(r4)).ns === 1)
                    return s.Z.call(t3, i3, { errorCode: 0, reason: "" }, true, true);
                }, a2 = [], c3 = 0; c3 < o2.length; c3++) {
                  var u3 = i2(o2[c3].msg);
                  u3 && a2.push(u3);
                }
                n3.msgs = a2;
                var p2 = { cursor: n3.next_key, messages: a2 };
                r3(p2);
              }, error: e3.fail };
              a.hj.call(t3, y2), p.kg.debug("Call getHistoryMessages", e3);
            });
          }
          function x(e3, t3) {
            var r3 = { id: this.getUniqueId(), to: e3, message: t3 };
            c.Z.operatRoster.call(this, r3, "add"), p.kg.debug("Call addContact", r3);
          }
          var L = j;
          function j(e3) {
            var t3 = { id: this.getUniqueId(), to: e3 };
            c.Z.operatRoster.call(this, t3, "remove"), p.kg.debug("Call deleteContact", t3);
          }
          function D(e3) {
            var t3 = { id: this.getUniqueId(), to: e3 };
            c.Z.operatRoster.call(this, t3, "accept"), p.kg.debug("Call acceptInvitation", t3);
          }
          var G = D;
          function B(e3) {
            var t3 = { id: this.getUniqueId(), to: e3 };
            c.Z.operatRoster.call(this, t3, "decline"), p.kg.debug("Call declineContactInvite", t3);
          }
          var H = B;
          function F(e3) {
            c.Z.operatRoster.call(this, { to: e3.name }, "ban"), p.kg.debug("Call addUsersToBlocklist", e3);
          }
          var W = F, q = F;
          function Z(e3) {
            c.Z.operatRoster.call(this, { to: e3.name }, "allow"), p.kg.debug("Call removeUserFromBlocklist", e3);
          }
          var K = Z, V = Z;
          function z(e3) {
            var t3 = this.getUniqueId(), r3 = { id: t3, to: e3.to };
            this._msgHash[t3] = f({}, r3);
            var n3 = "";
            e3.chatType !== void 0 ? n3 = e3.chatType : e3.type !== void 0 && (n3 = e3.type === "chat" ? "singleChat" : e3.type);
            var o2 = { id: t3, type: "recall", chatType: n3, ackId: e3.mid, to: e3.to, isChatThread: e3.isChatThread || false, success: e3.success, fail: e3.fail };
            return p.kg.debug("Call recallMessage", e3), this.mSync.send(o2, this);
          }
          function J(e3) {
            return m(this, void 0, void 0, function() {
              var t3, r3, s2, c2, u2, l2, p2, h2, d2;
              return g(this, function(f2) {
                switch (f2.label) {
                  case 0:
                    if (typeof e3.messageId != "string" || !e3.messageId)
                      throw Error("Invalid parameter messageId: ".concat(e3.messageId));
                    if (typeof e3.reaction != "string" || !e3.reaction)
                      throw Error("Invalid parameter reaction: ".concat(e3.reaction));
                    return n2.XZ.call(this) ? (r3 = this.context, s2 = r3.orgName, c2 = r3.appName, u2 = r3.accessToken, l2 = e3.reaction, p2 = e3.messageId, h2 = { msgId: p2, message: l2 }, d2 = { url: "".concat(this.apiUrl, "/").concat(s2, "/").concat(c2, "/reaction/user/").concat(this.user), type: "POST", data: JSON.stringify(h2), dataType: "json", headers: { Authorization: "Bearer " + u2, "Content-Type": "application/json" } }, [4, a.hj.call(this, d2)]) : (t3 = i.Z.create({ type: o.E.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(t3)]);
                  case 1:
                    return f2.sent(), [2];
                }
              });
            });
          }
          function X(e3) {
            return m(this, void 0, void 0, function() {
              var t3, r3, s2, c2, u2, l2, p2, h2;
              return g(this, function(d2) {
                switch (d2.label) {
                  case 0:
                    if (typeof e3.reaction != "string" || !e3.reaction)
                      throw Error("Invalid parameter reactionId: ".concat(e3.reaction));
                    return n2.XZ.call(this) ? (r3 = this.context, s2 = r3.orgName, c2 = r3.appName, u2 = r3.accessToken, l2 = e3.messageId, p2 = e3.reaction, h2 = { url: "".concat(this.apiUrl, "/").concat(s2, "/").concat(c2, "/reaction/user/").concat(this.user, "?msgId=").concat(l2, "&message=").concat(p2), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + u2, "Content-Type": "application/json" } }, [4, a.hj.call(this, h2)]) : (t3 = i.Z.create({ type: o.E.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(t3)]);
                  case 1:
                    return d2.sent(), [2];
                }
              });
            });
          }
          function Y(e3) {
            if (typeof e3.chatType != "string" || !e3.chatType)
              throw Error("Invalid parameter chatType: ".concat(e3.chatType));
            if (!e3.messageId)
              throw Error("Invalid parameter messageId: ".concat(e3.messageId));
            if (!n2.XZ.call(this)) {
              var t3 = i.Z.create({ type: o.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, s2 = r3.orgName, c2 = r3.appName, u2 = r3.accessToken, l2 = e3.chatType, p2 = e3.messageId, h2 = { msgIdList: typeof p2 == "string" ? [p2] : p2, msgType: l2 === "singleChat" ? "chat" : "groupchat", groupId: e3.groupId || null }, d2 = { url: "".concat(this.apiUrl, "/").concat(s2, "/").concat(c2, "/reaction/user/").concat(this.user), type: "GET", data: h2, dataType: "json", headers: { Authorization: "Bearer " + u2, "Content-Type": "application/json" } };
            return a.hj.call(this, d2).then(function(e4) {
              var t4 = e4.data;
              return t4 == null || t4.forEach(function(e5) {
                e5 == null || e5.reactionList.forEach(function(e6) {
                  e6.isAddedBySelf = e6.state, delete e6.state, delete e6.reactionId;
                });
              }), e4;
            });
          }
          var $2 = Y;
          function Q(e3) {
            if (typeof e3.reaction != "string" || !e3.reaction)
              throw Error("Invalid parameter reaction: ".concat(e3.reaction));
            if (typeof e3.messageId != "string" || !e3.messageId)
              throw Error("Invalid parameter messageId: ".concat(e3.messageId));
            if (!n2.XZ.call(this)) {
              var t3 = i.Z.create({ type: o.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, s2 = r3.orgName, c2 = r3.appName, u2 = r3.accessToken, l2 = e3.cursor, p2 = e3.pageSize, h2 = { msgId: e3.messageId, message: e3.reaction, currentPage: l2 || null, pageSize: p2 || 20 }, d2 = { url: "".concat(this.apiUrl, "/").concat(s2, "/").concat(c2, "/reaction/user/").concat(this.user, "/detail"), type: "GET", data: h2, dataType: "json", headers: { Authorization: "Bearer " + u2, "Content-Type": "application/json" } };
            return a.hj.call(this, d2).then(function(e4) {
              return e4.data.isAddedBySelf = e4.data.state, delete e4.data.state, delete e4.data.reactionId, e4;
            });
          }
          function ee(e3) {
            return m(this, void 0, void 0, function() {
              var t3, r3, s2, c2, u2, l2, p2, h2, d2, f2, m2;
              return g(this, function(g2) {
                switch (g2.label) {
                  case 0:
                    if (typeof e3.reportType != "string" || !e3.reportType)
                      throw Error("Invalid parameter reportType: ".concat(e3.reportType));
                    if (typeof e3.messageId != "string" || !e3.messageId)
                      throw Error("Invalid parameter messageId: ".concat(e3.messageId));
                    if (typeof e3.reportReason != "string" || !e3.reportReason)
                      throw Error("Invalid parameter messageId: ".concat(e3.reportReason));
                    return n2.XZ.call(this) ? (r3 = this.context, s2 = r3.orgName, c2 = r3.appName, u2 = r3.accessToken, l2 = e3.reportType, p2 = e3.reportReason, h2 = e3.messageId, d2 = { username: this.user, reportType: l2, reportReason: p2 }, f2 = "".concat(this.apiUrl, "/").concat(s2, "/").concat(c2, "/user/").concat(this.user, "/moderation/report/message/").concat(h2), m2 = { url: f2, type: "POST", data: JSON.stringify(d2), dataType: "json", headers: { Authorization: "Bearer " + u2, "Content-Type": "application/json" } }, [4, a.hj.call(this, m2)]) : (t3 = i.Z.create({ type: o.E.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(t3)]);
                  case 1:
                    return g2.sent(), [2];
                }
              });
            });
          }
          function te(e3) {
            var t3;
            return m(this, void 0, void 0, function() {
              var r3, s2, c2, u2, l2, h2, d2, f2, m2;
              return g(this, function(g2) {
                switch (g2.label) {
                  case 0:
                    if (typeof e3.targetId != "string" || e3.targetId === "")
                      throw Error('"Invalid parameter targetId": ' + e3.targetId);
                    if (!["singleChat", "groupChat"].includes(e3.chatType))
                      throw Error('"Invalid parameter chatType": ' + e3.chatType);
                    if (e3.beforeTimeStamp && (typeof e3.beforeTimeStamp != "number" || e3.beforeTimeStamp < 0 || ((t3 = e3.beforeTimeStamp) === null || t3 === void 0 ? void 0 : t3.toString().length) > 18))
                      throw Error('"Invalid parameter beforeTimeStamp": ' + e3.beforeTimeStamp);
                    if (e3.messageIds && !(Array.isArray(e3.messageIds) && e3.messageIds.length > 0 && e3.messageIds.length <= 20))
                      throw Error('"Invalid parameter messageIds": ' + e3.messageIds);
                    if (!e3.messageIds && !e3.beforeTimeStamp)
                      throw Error("messageIds or beforeTimeStamp field is required.");
                    return n2.XZ.call(this) ? (s2 = this.context, c2 = s2.orgName, u2 = s2.appName, l2 = s2.userId, h2 = e3.chatType === "singleChat" ? "userId" : "groupId", d2 = e3.chatType === "singleChat" ? "chat" : "group", f2 = e3.messageIds ? "".concat(this.apiUrl, "/").concat(c2, "/").concat(u2, "/sdk/message/roaming/").concat(d2, "/user/").concat(l2, "?").concat(h2, "=").concat(e3.targetId, "&msgIdList=").concat(e3.messageIds, "&resource=").concat(this.clientResource) : "".concat(this.apiUrl, "/").concat(c2, "/").concat(u2, "/sdk/message/roaming/").concat(d2, "/user/").concat(l2, "/time?").concat(h2, "=").concat(e3.targetId, "&delTime=").concat(e3.beforeTimeStamp, "&&resource=").concat(this.clientResource), m2 = { url: f2, dataType: "json", type: "DELETE", headers: { Authorization: "Bearer " + this.token, "Content-Type": "application/json" } }, p.kg.debug("Call removeHistoryMessages", e3), [4, a.hj.call(this, m2)]) : (r3 = i.Z.create({ type: o.E.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(r3)]);
                  case 1:
                    return g2.sent(), [2];
                }
              });
            });
          }
        }, 7378: function(e2, t2, r2) {
          "use strict";
          r2.r(t2), r2.d(t2, { getPresenceStatus: function() {
            return m;
          }, getSubscribedPresenceList: function() {
            return d;
          }, getSubscribedPresencelist: function() {
            return f;
          }, publishPresence: function() {
            return l;
          }, subscribePresence: function() {
            return p;
          }, unsubscribePresence: function() {
            return h;
          } }), r2(7858), r2(8826), r2(4593), r2(3776), r2(3836), r2(6162), r2(796), r2(2835), r2(5233), r2(2289);
          var n2 = r2(3038), o = r2(6455), i = r2(5839), a = r2(4122), s = r2(6447), c = function(e3, t3, r3, n3) {
            return new (r3 || (r3 = Promise))(function(o2, i2) {
              function a2(e4) {
                try {
                  c2(n3.next(e4));
                } catch (e5) {
                  i2(e5);
                }
              }
              function s2(e4) {
                try {
                  c2(n3.throw(e4));
                } catch (e5) {
                  i2(e5);
                }
              }
              function c2(e4) {
                var t4;
                e4.done ? o2(e4.value) : (t4 = e4.value, t4 instanceof r3 ? t4 : new r3(function(e5) {
                  e5(t4);
                })).then(a2, s2);
              }
              c2((n3 = n3.apply(e3, t3 || [])).next());
            });
          }, u = function(e3, t3) {
            var r3, n3, o2, i2, a2 = { label: 0, sent: function() {
              if (1 & o2[0])
                throw o2[1];
              return o2[1];
            }, trys: [], ops: [] };
            return i2 = { next: s2(0), throw: s2(1), return: s2(2) }, typeof Symbol == "function" && (i2[Symbol.iterator] = function() {
              return this;
            }), i2;
            function s2(i3) {
              return function(s3) {
                return function(i4) {
                  if (r3)
                    throw new TypeError("Generator is already executing.");
                  for (; a2; )
                    try {
                      if (r3 = 1, n3 && (o2 = 2 & i4[0] ? n3.return : i4[0] ? n3.throw || ((o2 = n3.return) && o2.call(n3), 0) : n3.next) && !(o2 = o2.call(n3, i4[1])).done)
                        return o2;
                      switch (n3 = 0, o2 && (i4 = [2 & i4[0], o2.value]), i4[0]) {
                        case 0:
                        case 1:
                          o2 = i4;
                          break;
                        case 4:
                          return a2.label++, { value: i4[1], done: false };
                        case 5:
                          a2.label++, n3 = i4[1], i4 = [0];
                          continue;
                        case 7:
                          i4 = a2.ops.pop(), a2.trys.pop();
                          continue;
                        default:
                          if (!((o2 = (o2 = a2.trys).length > 0 && o2[o2.length - 1]) || i4[0] !== 6 && i4[0] !== 2)) {
                            a2 = 0;
                            continue;
                          }
                          if (i4[0] === 3 && (!o2 || i4[1] > o2[0] && i4[1] < o2[3])) {
                            a2.label = i4[1];
                            break;
                          }
                          if (i4[0] === 6 && a2.label < o2[1]) {
                            a2.label = o2[1], o2 = i4;
                            break;
                          }
                          if (o2 && a2.label < o2[2]) {
                            a2.label = o2[2], a2.ops.push(i4);
                            break;
                          }
                          o2[2] && a2.ops.pop(), a2.trys.pop();
                          continue;
                      }
                      i4 = t3.call(e3, a2);
                    } catch (e4) {
                      i4 = [6, e4], n3 = 0;
                    } finally {
                      r3 = o2 = 0;
                    }
                  if (5 & i4[0])
                    throw i4[1];
                  return { value: i4[0] ? i4[1] : void 0, done: true };
                }([i3, s3]);
              };
            }
          };
          function l(e3) {
            return c(this, void 0, void 0, function() {
              var t3, r3, c2, l2, p2, h2, d2, f2, m2;
              return u(this, function(u2) {
                switch (u2.label) {
                  case 0:
                    if (typeof e3.description != "string")
                      throw Error('Invalid parameter: "description"');
                    return o.XZ.call(this) ? (r3 = this.context, c2 = r3.accessToken, l2 = r3.orgName, p2 = r3.appName, h2 = r3.userId, d2 = this.context.jid.clientResource, f2 = { ext: e3.description }, m2 = { url: "".concat(this.apiUrl, "/").concat(l2, "/").concat(p2, "/users/").concat(h2, "/presence/").concat(d2, "/1"), type: "POST", dataType: "json", data: JSON.stringify(f2), headers: { Authorization: "Bearer " + c2, "Content-Type": "application/json" }, success: e3.success, error: e3.error }, s.kg.debug("Call publishPresence:", e3), [4, n2.hj.call(this, m2)]) : (t3 = i.Z.create({ type: a.E.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(t3)]);
                  case 1:
                    return u2.sent(), [2];
                }
              });
            });
          }
          function p(e3) {
            if (!Array.isArray(e3.usernames))
              throw Error('Invalid parameter: "usernames"');
            if (!e3.usernames.length)
              throw Error('"usernames" can not be empty');
            if (typeof e3.expiry != "number")
              throw Error('Invalid parameter: "expiry"');
            if (!o.XZ.call(this)) {
              var t3 = i.Z.create({ type: a.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, c2 = r3.orgName, u2 = r3.appName, l2 = r3.userId, p2 = r3.accessToken, h2 = { usernames: e3.usernames }, d2 = { url: "".concat(this.apiUrl, "/").concat(c2, "/").concat(u2, "/users/").concat(l2, "/presence/").concat(e3.expiry), type: "POST", dataType: "json", data: JSON.stringify(h2), headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call subscribePresence:", e3), n2.hj.call(this, d2).then(function(e4) {
              return e4.data = { result: e4 == null ? void 0 : e4.result }, e4;
            });
          }
          function h(e3) {
            return c(this, void 0, void 0, function() {
              var t3, r3, c2, l2, p2, h2, d2;
              return u(this, function(u2) {
                switch (u2.label) {
                  case 0:
                    if (!Array.isArray(e3.usernames))
                      throw Error('Invalid parameter: "usernames"');
                    if (!e3.usernames.length)
                      throw Error('"usernames" can not be empty');
                    return o.XZ.call(this) ? (r3 = this.context, c2 = r3.orgName, l2 = r3.appName, p2 = r3.userId, h2 = r3.accessToken, d2 = { url: "".concat(this.apiUrl, "/").concat(c2, "/").concat(l2, "/users/").concat(p2, "/presence"), type: "DELETE", dataType: "json", data: JSON.stringify(e3.usernames), headers: { Authorization: "Bearer " + h2, "Content-Type": "application/json" }, success: e3.success, error: e3.error }, s.kg.debug("Call unsubscribePresence:", e3), [4, n2.hj.call(this, d2)]) : (t3 = i.Z.create({ type: a.E.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(t3)]);
                  case 1:
                    return u2.sent(), [2];
                }
              });
            });
          }
          function d(e3) {
            if (typeof e3.pageNum != "number" || typeof e3.pageSize != "number")
              throw Error('Invalid parameter: "pageNum or pageSize"');
            if (e3.pageNum < 0 || e3.pageSize < 0)
              throw Error('"pageNum" should >= 0 and "pageSize" should >= 0');
            if (!o.XZ.call(this)) {
              var t3 = i.Z.create({ type: a.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, c2 = r3.orgName, u2 = r3.appName, l2 = r3.userId, p2 = r3.accessToken, h2 = { url: "".concat(this.apiUrl, "/").concat(c2, "/").concat(u2, "/users/").concat(l2, "/presence/sublist?pageNum=").concat(e3.pageNum, "&pageSize=").concat(e3.pageSize), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call getSubscribedPresenceList:", e3), n2.hj.call(this, h2).then(function(e4) {
              return e4.data = { result: e4 == null ? void 0 : e4.result }, e4;
            });
          }
          var f = d;
          function m(e3) {
            if (!Array.isArray(e3.usernames))
              throw Error('Invalid parameter: "usernames"');
            if (!e3.usernames.length)
              throw Error('"usernames" can not be empty');
            if (!o.XZ.call(this)) {
              var t3 = i.Z.create({ type: a.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = { usernames: e3.usernames }, c2 = this.context, u2 = c2.orgName, l2 = c2.appName, p2 = c2.userId, h2 = c2.accessToken, d2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/users/").concat(p2, "/presence"), type: "POST", dataType: "json", data: JSON.stringify(r3), headers: { Authorization: "Bearer " + h2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call getPresenceStatus:", e3), n2.hj.call(this, d2).then(function(e4) {
              return e4.data = { result: e4 == null ? void 0 : e4.result }, e4;
            });
          }
        }, 2346: function(e2, t2, r2) {
          "use strict";
          r2.r(t2), r2.d(t2, { clearRemindTypeForConversation: function() {
            return p;
          }, getPushPerformLanguage: function() {
            return m;
          }, getSilentModeForAll: function() {
            return u;
          }, getSilentModeForConversation: function() {
            return h;
          }, getSilentModeForConversations: function() {
            return d;
          }, setPushPerformLanguage: function() {
            return f;
          }, setSilentModeForAll: function() {
            return c;
          }, setSilentModeForConversation: function() {
            return l;
          } }), r2(6260), r2(7858), r2(8826), r2(5233), r2(2289), r2(7680), r2(2914), r2(1157);
          var n2 = r2(3038), o = r2(6455), i = r2(5839), a = r2(4122), s = r2(6447);
          function c(e3) {
            if (!(e3.options instanceof Object))
              throw Error('Invalid parameter: "options"');
            var t3 = e3.options.paramType;
            if (typeof t3 != "number" || t3 < 0 || t3 > 2)
              throw Error('Invalid parameter: "options of paramType"');
            if (t3 === 0) {
              if (typeof e3.options.remindType != "string")
                throw Error('Invalid parameter: "options of remindType"');
            } else if (t3 === 1) {
              if (typeof e3.options.duration != "number")
                throw Error('Invalid parameter: "options of duration"');
            } else if (t3 === 2) {
              var r3 = e3.options, c2 = r3.startTime, u2 = r3.endTime;
              if (!(c2 instanceof Object && Object.keys(c2).length))
                throw Error('Invalid parameter: "options of startTime"');
              if (!c2.hours || typeof c2.hours != "number" || !c2.minutes || typeof c2.minutes != "number")
                throw Error('Invalid parameter: "options of startTime of hours or minutes"');
              if (!(u2 instanceof Object && Object.keys(u2).length))
                throw Error('Invalid parameter: "options of endTime"');
              if (!u2.hours || typeof u2.hours != "number" || !u2.minutes || typeof u2.minutes != "number")
                throw Error('Invalid parameter: "options of endTime of hours or minutes"');
            }
            if (!o.XZ.call(this)) {
              var l2 = i.Z.create({ type: a.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(l2);
            }
            var p2 = this.context, h2 = p2.accessToken, d2 = p2.orgName, f2 = p2.appName, m2 = p2.userId, g = {};
            switch (t3) {
              case 0:
                g = { type: e3.options.remindType };
                break;
              case 1:
                g = { ignoreDuration: e3.options.duration };
                break;
              case 2:
                var y = e3.options;
                c2 = y.startTime, u2 = y.endTime, g = { ignoreInterval: "".concat(c2.hours, ":").concat(c2.minutes, "-").concat(u2.hours, ":").concat(u2.minutes) };
            }
            var E = { url: "".concat(this.apiUrl, "/").concat(d2, "/").concat(f2, "/users/").concat(m2, "/notification/user/").concat(m2), type: "PUT", dataType: "json", data: JSON.stringify(g), headers: { Authorization: "Bearer " + h2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call setSilentModeForAll:", e3), n2.hj.call(this, E);
          }
          function u(e3) {
            if (!o.XZ.call(this)) {
              var t3 = i.Z.create({ type: a.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, c2 = r3.accessToken, u2 = r3.orgName, l2 = r3.appName, p2 = r3.userId, h2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/users/").concat(p2, "/notification/user/").concat(p2), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + c2, "Content-Type": "application/json" }, success: e3 == null ? void 0 : e3.success, error: e3 == null ? void 0 : e3.error };
            return s.kg.debug("Call getSilentModeForAll:", e3), n2.hj.call(this, h2);
          }
          function l(e3) {
            if (typeof e3.conversationId != "string" || !e3.conversationId)
              throw Error('Invalid parameter: "conversationId"');
            if (typeof e3.type != "string" || !e3.type)
              throw Error('Invalid parameter: "type"');
            if (!(e3.options instanceof Object))
              throw Error('Invalid parameter: "options"');
            var t3 = e3.options.paramType;
            if (typeof t3 != "number" || t3 < 0 || t3 > 2)
              throw Error('Invalid parameter: "options of paramType"');
            if (t3 === 0) {
              if (typeof e3.options.remindType != "string")
                throw Error('Invalid parameter: "options of remindType"');
            } else if (t3 === 1) {
              if (typeof e3.options.duration != "number")
                throw Error('Invalid parameter: "options of duration"');
            } else if (t3 === 2) {
              var r3 = e3.options, c2 = r3.startTime, u2 = r3.endTime;
              if (!(c2 instanceof Object && Object.keys(c2).length))
                throw Error('Invalid parameter: "options of startTime"');
              if (!c2.hours || typeof c2.hours != "number" || !c2.minutes || typeof c2.minutes != "number")
                throw Error('Invalid parameter: "options of startTime of hours or minutes"');
              if (!(u2 instanceof Object && Object.keys(u2).length))
                throw Error('Invalid parameter: "options of endTime"');
              if (!u2.hours || typeof u2.hours != "number" || !u2.minutes || typeof u2.minutes != "number")
                throw Error('Invalid parameter: "options of endTime of hours or minutes"');
            }
            if (!o.XZ.call(this)) {
              var l2 = i.Z.create({ type: a.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(l2);
            }
            var p2 = this.context, h2 = p2.accessToken, d2 = p2.orgName, f2 = p2.appName, m2 = p2.userId, g = "chatgroup", y = {};
            switch (t3) {
              case 0:
                y = { type: e3.options.remindType };
                break;
              case 1:
                y = { ignoreDuration: e3.options.duration };
                break;
              case 2:
                var E = e3.options;
                c2 = E.startTime, u2 = E.endTime, y = { ignoreInterval: "".concat(c2.hours, ":").concat(c2.minutes, "-").concat(u2.hours, ":").concat(u2.minutes) };
            }
            e3.type === "singleChat" && (g = "user");
            var v = { url: "".concat(this.apiUrl, "/").concat(d2, "/").concat(f2, "/users/").concat(m2, "/notification/").concat(g, "/").concat(e3.conversationId), type: "PUT", dataType: "json", data: JSON.stringify(y), headers: { Authorization: "Bearer " + h2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call setSilentModeForConversation:", e3), n2.hj.call(this, v);
          }
          function p(e3) {
            if (typeof e3.conversationId != "string" || !e3.conversationId)
              throw Error('Invalid parameter: "conversationId"');
            if (typeof e3.type != "string" || !e3.type)
              throw Error('Invalid parameter: "type"');
            if (!o.XZ.call(this)) {
              var t3 = i.Z.create({ type: a.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, c2 = r3.accessToken, u2 = r3.orgName, l2 = r3.appName, p2 = r3.userId, h2 = "chatgroup";
            e3.type === "singleChat" && (h2 = "user");
            var d2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/users/").concat(p2, "/notification/").concat(h2, "/").concat(e3.conversationId), type: "PUT", dataType: "json", data: JSON.stringify({ type: "DEFAULT" }), headers: { Authorization: "Bearer " + c2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call clearRemindTypeForConversation:", e3), n2.hj.call(this, d2);
          }
          function h(e3) {
            if (typeof e3.conversationId != "string" || !e3.conversationId)
              throw Error('Invalid parameter: "conversationId"');
            if (typeof e3.type != "string" || !e3.type)
              throw Error('Invalid parameter: "type"');
            if (!o.XZ.call(this)) {
              var t3 = i.Z.create({ type: a.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, c2 = r3.accessToken, u2 = r3.orgName, l2 = r3.appName, p2 = r3.userId, h2 = "chatgroup";
            e3.type === "singleChat" && (h2 = "user");
            var d2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/users/").concat(p2, "/notification/").concat(h2, "/").concat(e3.conversationId), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + c2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call getSilentModeForConversation:", e3), n2.hj.call(this, d2);
          }
          function d(e3) {
            if (!Array.isArray(e3.conversationList))
              throw Error('Invalid parameter: "conversationList"');
            if (!o.XZ.call(this)) {
              var t3 = i.Z.create({ type: a.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, c2 = r3.accessToken, u2 = r3.orgName, l2 = r3.appName, p2 = r3.userId, h2 = [], d2 = [];
            e3.conversationList.forEach(function(e4) {
              e4.type === "singleChat" ? h2.push(e4.id) : d2.push(e4.id);
            });
            var f2 = h2.length ? h2.join(",") : "", m2 = d2.length ? d2.join(",") : "", g = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/users/").concat(p2, "/notification?user=").concat(f2, "&group=").concat(m2), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + c2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call getSilentModeForConversations:", e3), n2.hj.call(this, g);
          }
          function f(e3) {
            if (typeof e3.language != "string" || !e3.language)
              throw Error('Invalid parameter: "language"');
            if (!o.XZ.call(this)) {
              var t3 = i.Z.create({ type: a.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = { translationLanguage: e3.language }, c2 = this.context, u2 = c2.accessToken, l2 = c2.orgName, p2 = c2.appName, h2 = c2.userId, d2 = { url: "".concat(this.apiUrl, "/").concat(l2, "/").concat(p2, "/users/").concat(h2, "/notification/language"), type: "PUT", dataType: "json", data: JSON.stringify(r3), headers: { Authorization: "Bearer " + u2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call setPushPerformLanguage:", e3), n2.hj.call(this, d2);
          }
          function m(e3) {
            if (!o.XZ.call(this)) {
              var t3 = i.Z.create({ type: a.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, c2 = r3.accessToken, u2 = r3.orgName, l2 = r3.appName, p2 = r3.userId, h2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/users/").concat(p2, "/notification/language"), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + c2, "Content-Type": "application/json" }, success: e3 == null ? void 0 : e3.success, error: e3 == null ? void 0 : e3.error };
            return s.kg.debug("Call getPushPerformLanguage:", e3), n2.hj.call(this, h2);
          }
        }, 2868: function(e2, t2, r2) {
          "use strict";
          r2.r(t2), r2.d(t2, { changeChatThreadName: function() {
            return f;
          }, createChatThread: function() {
            return l;
          }, destroyChatThread: function() {
            return d;
          }, getChatThreadDetail: function() {
            return T;
          }, getChatThreadLastMessage: function() {
            return v;
          }, getChatThreadMembers: function() {
            return m;
          }, getChatThreads: function() {
            return E;
          }, getJoinedChatThreads: function() {
            return y;
          }, joinChatThread: function() {
            return p;
          }, leaveChatThread: function() {
            return h;
          }, removeChatThreadMember: function() {
            return g;
          } }), r2(7858), r2(8826), r2(4593), r2(3776), r2(3836), r2(6162), r2(796), r2(2835), r2(9900), r2(5233), r2(7680), r2(2914), r2(2289);
          var n2 = r2(4122), o = r2(5839), i = r2(3038), a = r2(6455), s = r2(3718), c = function(e3, t3, r3, n3) {
            return new (r3 || (r3 = Promise))(function(o2, i2) {
              function a2(e4) {
                try {
                  c2(n3.next(e4));
                } catch (e5) {
                  i2(e5);
                }
              }
              function s2(e4) {
                try {
                  c2(n3.throw(e4));
                } catch (e5) {
                  i2(e5);
                }
              }
              function c2(e4) {
                var t4;
                e4.done ? o2(e4.value) : (t4 = e4.value, t4 instanceof r3 ? t4 : new r3(function(e5) {
                  e5(t4);
                })).then(a2, s2);
              }
              c2((n3 = n3.apply(e3, t3 || [])).next());
            });
          }, u = function(e3, t3) {
            var r3, n3, o2, i2, a2 = { label: 0, sent: function() {
              if (1 & o2[0])
                throw o2[1];
              return o2[1];
            }, trys: [], ops: [] };
            return i2 = { next: s2(0), throw: s2(1), return: s2(2) }, typeof Symbol == "function" && (i2[Symbol.iterator] = function() {
              return this;
            }), i2;
            function s2(i3) {
              return function(s3) {
                return function(i4) {
                  if (r3)
                    throw new TypeError("Generator is already executing.");
                  for (; a2; )
                    try {
                      if (r3 = 1, n3 && (o2 = 2 & i4[0] ? n3.return : i4[0] ? n3.throw || ((o2 = n3.return) && o2.call(n3), 0) : n3.next) && !(o2 = o2.call(n3, i4[1])).done)
                        return o2;
                      switch (n3 = 0, o2 && (i4 = [2 & i4[0], o2.value]), i4[0]) {
                        case 0:
                        case 1:
                          o2 = i4;
                          break;
                        case 4:
                          return a2.label++, { value: i4[1], done: false };
                        case 5:
                          a2.label++, n3 = i4[1], i4 = [0];
                          continue;
                        case 7:
                          i4 = a2.ops.pop(), a2.trys.pop();
                          continue;
                        default:
                          if (!((o2 = (o2 = a2.trys).length > 0 && o2[o2.length - 1]) || i4[0] !== 6 && i4[0] !== 2)) {
                            a2 = 0;
                            continue;
                          }
                          if (i4[0] === 3 && (!o2 || i4[1] > o2[0] && i4[1] < o2[3])) {
                            a2.label = i4[1];
                            break;
                          }
                          if (i4[0] === 6 && a2.label < o2[1]) {
                            a2.label = o2[1], o2 = i4;
                            break;
                          }
                          if (o2 && a2.label < o2[2]) {
                            a2.label = o2[2], a2.ops.push(i4);
                            break;
                          }
                          o2[2] && a2.ops.pop(), a2.trys.pop();
                          continue;
                      }
                      i4 = t3.call(e3, a2);
                    } catch (e4) {
                      i4 = [6, e4], n3 = 0;
                    } finally {
                      r3 = o2 = 0;
                    }
                  if (5 & i4[0])
                    throw i4[1];
                  return { value: i4[0] ? i4[1] : void 0, done: true };
                }([i3, s3]);
              };
            }
          };
          function l(e3) {
            if (typeof e3.name != "string" || e3.name === "")
              throw Error("Invalid parameter name: ".concat(e3.name));
            if (typeof e3.messageId != "string" || e3.messageId === "")
              throw Error("Invalid parameter messageId: ".concat(e3.messageId));
            if (typeof e3.parentId != "string" || e3.parentId === "")
              throw Error("Invalid parameter parentId: ".concat(e3.parentId));
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, s2 = r3.orgName, c2 = r3.appName, u2 = r3.accessToken, l2 = r3.jid, p2 = { name: e3.name, msg_id: e3.messageId, group_id: e3.parentId, owner: this.user }, h2 = { url: "".concat(this.apiUrl, "/").concat(s2, "/").concat(c2, "/thread?resource=").concat(l2.clientResource), type: "POST", dataType: "json", data: JSON.stringify(p2), headers: { Authorization: "Bearer " + u2, "Content-Type": "application/json" } };
            return i.hj.call(this, h2).then(function(e4) {
              var t4 = e4.data.thread_id;
              return e4.data = { chatThreadId: t4 }, e4;
            });
          }
          function p(e3) {
            if (typeof e3.chatThreadId != "string" || e3.chatThreadId === "")
              throw Error("Invalid parameter chatThreadId: ".concat(e3.chatThreadId));
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, s2 = r3.orgName, c2 = r3.appName, u2 = r3.accessToken, l2 = r3.jid, p2 = { url: "".concat(this.apiUrl, "/").concat(s2, "/").concat(c2, "/thread/").concat(e3.chatThreadId, "/user/").concat(this.user, "/join?resource=").concat(l2.clientResource), type: "POST", dataType: "json", headers: { Authorization: "Bearer " + u2, "Content-Type": "application/json" } };
            return i.hj.call(this, p2).then(function(e4) {
              var t4 = e4.data.detail;
              return t4.messageId = t4.msgId, t4.parentId = t4.groupId, delete t4.msgId, delete t4.groupId, e4;
            });
          }
          function h(e3) {
            return c(this, void 0, void 0, function() {
              var t3, r3, s2, c2, l2, p2, h2;
              return u(this, function(u2) {
                switch (u2.label) {
                  case 0:
                    if (typeof e3.chatThreadId != "string" || e3.chatThreadId === "")
                      throw Error("Invalid parameter chatThreadId: ".concat(e3.chatThreadId));
                    return a.XZ.call(this) ? (r3 = this.context, s2 = r3.orgName, c2 = r3.appName, l2 = r3.accessToken, p2 = r3.jid, h2 = { url: "".concat(this.apiUrl, "/").concat(s2, "/").concat(c2, "/thread/").concat(e3.chatThreadId, "/user/").concat(this.user, "/quit?resource=").concat(p2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + l2, "Content-Type": "application/json" } }, [4, i.hj.call(this, h2)]) : (t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(t3)]);
                  case 1:
                    return u2.sent(), [2];
                }
              });
            });
          }
          function d(e3) {
            return c(this, void 0, void 0, function() {
              var t3, r3, s2, c2, l2, p2, h2;
              return u(this, function(u2) {
                switch (u2.label) {
                  case 0:
                    if (typeof e3.chatThreadId != "string" || e3.chatThreadId === "")
                      throw Error("Invalid parameter chatThreadId: ".concat(e3.chatThreadId));
                    return a.XZ.call(this) ? (r3 = this.context, s2 = r3.orgName, c2 = r3.appName, l2 = r3.accessToken, p2 = r3.jid, h2 = { url: "".concat(this.apiUrl, "/").concat(s2, "/").concat(c2, "/thread/").concat(e3.chatThreadId, "?resource=").concat(p2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + l2, "Content-Type": "application/json" } }, [4, i.hj.call(this, h2)]) : (t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(t3)]);
                  case 1:
                    return u2.sent(), [2];
                }
              });
            });
          }
          function f(e3) {
            if (typeof e3.chatThreadId != "string" || e3.chatThreadId === "")
              throw Error("Invalid parameter chatThreadId: ".concat(e3.chatThreadId));
            if (typeof e3.name != "string" || e3.name === "")
              throw Error("Invalid parameter name: ".concat(e3.name));
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, s2 = r3.orgName, c2 = r3.appName, u2 = r3.accessToken, l2 = r3.jid, p2 = { name: e3.name }, h2 = { url: "".concat(this.apiUrl, "/").concat(s2, "/").concat(c2, "/thread/").concat(e3.chatThreadId, "?resource=").concat(l2.clientResource), type: "PUT", dataType: "json", data: JSON.stringify(p2), headers: { Authorization: "Bearer " + u2, "Content-Type": "application/json" } };
            return i.hj.call(this, h2);
          }
          function m(e3) {
            if (typeof e3.chatThreadId != "string" || e3.chatThreadId === "")
              throw Error("Invalid parameter chatThreadId: ".concat(e3.chatThreadId));
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, s2 = r3.orgName, c2 = r3.appName, u2 = r3.accessToken, l2 = { limit: e3.pageSize || 20, cursor: e3.cursor || "" }, p2 = { url: "".concat(this.apiUrl, "/").concat(s2, "/").concat(c2, "/thread/").concat(e3.chatThreadId, "/users"), type: "GET", dataType: "json", data: l2, headers: { Authorization: "Bearer " + u2, "Content-Type": "application/json" } };
            return i.hj.call(this, p2);
          }
          function g(e3) {
            if (typeof e3.chatThreadId != "string" || e3.chatThreadId === "")
              throw Error("Invalid parameter chatThreadId: ".concat(e3.chatThreadId));
            if (typeof e3.username != "string" || e3.username === "")
              throw Error("Invalid parameter username: ".concat(e3.username));
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, s2 = r3.orgName, c2 = r3.appName, u2 = r3.accessToken, l2 = r3.jid, p2 = { url: "".concat(this.apiUrl, "/").concat(s2, "/").concat(c2, "/thread/").concat(e3.chatThreadId, "/users/").concat(e3.username, "?resource=").concat(l2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + u2, "Content-Type": "application/json" } };
            return i.hj.call(this, p2);
          }
          function y(e3) {
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, s2 = r3.orgName, c2 = r3.appName, u2 = r3.accessToken, l2 = { limit: e3.pageSize || 20, cursor: e3.cursor || "" }, p2 = { url: e3.parentId ? "".concat(this.apiUrl, "/").concat(s2, "/").concat(c2, "/threads/chatgroups/").concat(e3.parentId, "/user/").concat(this.user) : "".concat(this.apiUrl, "/").concat(s2, "/").concat(c2, "/threads/user/").concat(this.user), type: "GET", dataType: "json", data: l2, headers: { Authorization: "Bearer " + u2, "Content-Type": "application/json" } };
            return i.hj.call(this, p2).then(function(e4) {
              var t4 = e4.entities;
              return t4 == null || t4.forEach(function(e5) {
                e5.parentId = e5.groupId, e5.messageId = e5.msgId, delete e5.groupId, delete e5.msgId;
              }), e4;
            });
          }
          function E(e3) {
            if (typeof e3.parentId != "string" || e3.parentId === "")
              throw Error("Invalid parameter parentId: ".concat(e3.parentId));
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, s2 = r3.orgName, c2 = r3.appName, u2 = r3.accessToken, l2 = { cursor: e3.cursor || "", limit: e3.pageSize || 20 }, p2 = { url: "".concat(this.apiUrl, "/").concat(s2, "/").concat(c2, "/threads/chatgroups/").concat(e3.parentId), type: "GET", dataType: "json", data: l2, headers: { Authorization: "Bearer " + u2, "Content-Type": "application/json" } };
            return i.hj.call(this, p2).then(function(e4) {
              var t4 = e4.entities;
              return t4 == null || t4.forEach(function(e5) {
                e5.parentId = e5.groupId, e5.messageId = e5.msgId, delete e5.groupId, delete e5.msgId;
              }), e4;
            });
          }
          function v(e3) {
            if (!Array.isArray(e3.chatThreadIds))
              throw Error("Invalid parameter chatThreadIds: ".concat(e3.chatThreadIds));
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, c2 = r3.orgName, u2 = r3.appName, l2 = r3.accessToken, p2 = { threadIds: e3.chatThreadIds }, h2 = { url: "".concat(this.apiUrl, "/").concat(c2, "/").concat(u2, "/thread/message"), type: "POST", dataType: "json", data: JSON.stringify(p2), headers: { Authorization: "Bearer " + l2, "Content-Type": "application/json" } };
            return i.hj.call(this, h2).then(function(e4) {
              return function(e5) {
                var t4 = e5.entities;
                return t4 == null || t4.forEach(function(e6) {
                  e6.chatThreadId = e6.thread_id, e6.last_message && JSON.stringify(e6.last_message) !== "{}" ? e6.lastMessage = (0, s.w)(e6.last_message) : e6.lastMessage = e6.last_message, delete e6.thread_id, delete e6.last_message;
                }), e5;
              }(e4);
            });
          }
          function T(e3) {
            if (typeof e3.chatThreadId != "string" || e3.chatThreadId === "")
              throw Error("Invalid parameter chatThreadId: ".concat(e3.chatThreadId));
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, s2 = r3.orgName, c2 = r3.appName, u2 = r3.accessToken, l2 = { url: "".concat(this.apiUrl, "/").concat(s2, "/").concat(c2, "/thread/").concat(e3.chatThreadId), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + u2, "Content-Type": "application/json" } };
            return i.hj.call(this, l2).then(function(e4) {
              return e4.data.affiliationsCount = e4.data.affiliations_count, e4.data.messageId = e4.data.msgId, e4.data.parentId = e4.data.groupId, delete e4.data.affiliations_count, delete e4.data.msgId, delete e4.data.groupId, e4;
            });
          }
        }, 4961: function(e2, t2, r2) {
          "use strict";
          r2.r(t2), r2.d(t2, { getSupportedLanguages: function() {
            return c;
          }, translateMessage: function() {
            return u;
          } }), r2(7858), r2(8826), r2(5233), r2(2289);
          var n2 = r2(6455), o = r2(4122), i = r2(5839), a = r2(6447), s = r2(3038);
          function c() {
            if (!n2.XZ.call(this)) {
              var e3 = i.Z.create({ type: o.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(e3);
            }
            var t3 = this.context, r3 = t3.orgName, c2 = t3.appName, u2 = t3.accessToken, l = { url: "".concat(this.apiUrl, "/").concat(r3, "/").concat(c2, "/users/").concat(this.user, "/translate/support/language"), dataType: "json", type: "GET", headers: { Authorization: "Bearer " + u2 } };
            return a.kg.debug("Call getSupportedLanguages"), s.hj.call(this, l);
          }
          function u(e3) {
            if (typeof e3.text != "string" || e3.text === "")
              throw Error('Invalid parameter: "text"');
            if (!Array.isArray(e3.languages))
              throw Error('Invalid parameter: "language"');
            if (!n2.XZ.call(this)) {
              var t3 = i.Z.create({ type: o.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, c2 = r3.orgName, u2 = r3.appName, l = r3.accessToken, p = "".concat(this.apiUrl, "/").concat(c2, "/").concat(u2, "/users/").concat(this.user, "/translate"), h = { text: e3.text, to: e3.languages }, d = { url: p, dataType: "json", type: "POST", data: JSON.stringify(h), headers: { Authorization: "Bearer " + l } };
            return a.kg.debug("Call translateMessage"), s.hj.call(this, d);
          }
        }, 6455: function(e2, t2, r2) {
          "use strict";
          r2.d(t2, { H7: function() {
            return u;
          }, XZ: function() {
            return s;
          }, _W: function() {
            return c;
          } }), r2(6260), r2(7680), r2(7858), r2(2914), r2(3940), r2(75);
          var n2 = r2(4122), o = r2(5839);
          function i() {
            var e3 = this.context.appName, t3 = this.context.orgName;
            return !(!e3 || !t3) || (this.onError && this.onError({ type: n2.E.WEBIM_CONNCTION_AUTH_ERROR, message: "appName or orgName is illegal" }), false);
          }
          function a() {
            var e3;
            if (!this.context.accessToken) {
              var t3 = o.Z.create({ type: n2.E.WEBIM_CONNCTION_TOKEN_NOT_ASSIGN_ERROR, message: "token not assign error" });
              return this.onError && this.onError(t3), (e3 = this.eventHandler) === null || e3 === void 0 || e3.dispatch("onError", t3), false;
            }
            return true;
          }
          function s() {
            return a.call(this) && i.call(this);
          }
          function c(e3) {
            var t3 = e3.data, r3 = e3.type;
            return { data: { status: Object.keys(t3.errorKeys).length > 0 ? "fail" : "success", errorKeys: t3.errorKeys, successKeys: t3.successKeys }, type: r3 };
          }
          function u(e3) {
            var t3 = e3.data, r3 = void 0;
            return Object.keys(t3.errorKeys).length > 0 && Object.keys(t3.errorKeys).forEach(function(e4) {
              var i2 = t3.errorKeys[e4];
              r3 = i2.includes("is not part of you") ? o.Z.create({ type: n2.E.NO_PERMISSION, message: i2 }) : i2.includes("size of metadata for this single chatroom exceeds the user defined limit") || i2.includes("total size of chatroom metadata for this app exceeds the user defined limit") || i2.includes("is exceeding maximum limit") ? o.Z.create({ type: n2.E.MAX_LIMIT, message: i2 }) : i2.includes("is not Legal") ? o.Z.create({ type: n2.E.REQUEST_PARAMETER_ERROR, message: i2 }) : i2.includes("Failed to update userMetadata. Concurrent updates not allowed") ? o.Z.create({ type: n2.E.OPERATION_NOT_ALLOWED, message: i2 }) : o.Z.create({ type: n2.E.WEBIM_CONNCTION_AJAX_ERROR, message: i2 });
            }), r3;
          }
        }, 2558: function(e2, t2, r2) {
          "use strict";
          r2.d(t2, { $x: function() {
            return s;
          }, F3: function() {
            return c;
          }, Nl: function() {
            return o;
          }, TJ: function() {
            return i;
          }, Tp: function() {
            return p;
          }, Wc: function() {
            return n2;
          }, el: function() {
            return a;
          }, iB: function() {
            return u;
          }, yK: function() {
            return l;
          } }), r2(6162), r2(840), r2(7858), r2(796), r2(2835);
          var n2 = 7, o = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = "im", s = "32f24ab2ddb74f508aa9286c356cec84", c = 1e3, u = { INIT: 9674, API: 9675 }, l = "direct", p = -1;
        }, 8669: function(e2, t2, r2) {
          "use strict";
          var n2, o, i, a, s, c;
          r2.d(t2, { C8: function() {
            return n2;
          }, aC: function() {
            return c;
          }, c: function() {
            return i;
          }, dd: function() {
            return s;
          }, fI: function() {
            return o;
          }, td: function() {
            return a;
          } }), function(e3) {
            e3[e3.UNKNOWOPERATION = -1] = "UNKNOWOPERATION", e3[e3.REST_GET_SESSION_LIST = 1] = "REST_GET_SESSION_LIST", e3[e3.REST_DEL_SESSION = 2] = "REST_DEL_SESSION", e3[e3.REST_GET_HISTORY_MESSAGE = 3] = "REST_GET_HISTORY_MESSAGE", e3[e3.REST_OPERATE = 10] = "REST_OPERATE", e3[e3.MSYNC_SENDMESSAGE = 11] = "MSYNC_SENDMESSAGE", e3[e3.MSYNC_RECALLMESSAGE = 12] = "MSYNC_RECALLMESSAGE", e3[e3.MSYNC_OPERATE = 20] = "MSYNC_OPERATE", e3[e3.ROSTER_ADD = 21] = "ROSTER_ADD", e3[e3.ROSTER_REMOVE = 22] = "ROSTER_REMOVE", e3[e3.ROSTER_ACCEPT = 23] = "ROSTER_ACCEPT", e3[e3.ROSTER_DECLINE = 24] = "ROSTER_DECLINE", e3[e3.ROSTER_BAN = 25] = "ROSTER_BAN", e3[e3.ROSTER_ALLOW = 26] = "ROSTER_ALLOW", e3[e3.ROSTER_BLACKLIST = 27] = "ROSTER_BLACKLIST", e3[e3.ROSTER_CONTACTS = 28] = "ROSTER_CONTACTS", e3[e3.ROSTER_OPERATE = 30] = "ROSTER_OPERATE", e3[e3.USER_LOGIN = 31] = "USER_LOGIN", e3[e3.USER_CREATE = 32] = "USER_CREATE", e3[e3.USER_UPDATE_USERINFO = 33] = "USER_UPDATE_USERINFO", e3[e3.USER_FETCH_USERINFO = 34] = "USER_FETCH_USERINFO", e3[e3.USER_UPDATE_NICK = 35] = "USER_UPDATE_NICK", e3[e3.USER_UPLOAD_PUSH_TOKEN = 36] = "USER_UPLOAD_PUSH_TOKEN", e3[e3.USER_OPERATE = 40] = "USER_OPERATE", e3[e3.GROUP_CREATEGROUP = 41] = "GROUP_CREATEGROUP", e3[e3.GROUP_BLOCK_MESSAGE = 42] = "GROUP_BLOCK_MESSAGE", e3[e3.GROUP_FETCH_PUBLICGROUPS_WITHCURSOR = 43] = "GROUP_FETCH_PUBLICGROUPS_WITHCURSOR", e3[e3.GROUP_FETCH_USERS_GROUP = 44] = "GROUP_FETCH_USERS_GROUP", e3[e3.GROUP_CHANGE_OWNER = 45] = "GROUP_CHANGE_OWNER", e3[e3.GROUP_FETCH_SPECIFICATION = 46] = "GROUP_FETCH_SPECIFICATION", e3[e3.GROUP_CHANGE_GROUPATTRIBUTE = 47] = "GROUP_CHANGE_GROUPATTRIBUTE", e3[e3.GROUP_FETCH_MEMEBERS = 48] = "GROUP_FETCH_MEMEBERS", e3[e3.GROUP_GET_ADMIN = 49] = "GROUP_GET_ADMIN", e3[e3.GROUP_SET_ADMIN = 50] = "GROUP_SET_ADMIN", e3[e3.GROUP_REMOVE_ADMIN = 51] = "GROUP_REMOVE_ADMIN", e3[e3.GROUP_DESTOTYGROUP = 52] = "GROUP_DESTOTYGROUP", e3[e3.GROUP_LEAVEGROUP = 53] = "GROUP_LEAVEGROUP", e3[e3.GROUP_INVITE_TO_GROUP = 54] = "GROUP_INVITE_TO_GROUP", e3[e3.GROUP_JOIN_PUBLICGROUP = 55] = "GROUP_JOIN_PUBLICGROUP", e3[e3.GROUP_ACCEPT_JOINPUBLICGROUPAPPL = 56] = "GROUP_ACCEPT_JOINPUBLICGROUPAPPL", e3[e3.GROUP_DECLINE_JOINPUBLICGROUPAPPL = 57] = "GROUP_DECLINE_JOINPUBLICGROUPAPPL", e3[e3.GROUP_ACCEPT_INVITATION = 58] = "GROUP_ACCEPT_INVITATION", e3[e3.GROUP_DECLINE_INVITATION = 59] = "GROUP_DECLINE_INVITATION", e3[e3.GROUP_REMOVE_MEMBER = 60] = "GROUP_REMOVE_MEMBER", e3[e3.GROUP_REMOVE_MEMBERS = 61] = "GROUP_REMOVE_MEMBERS", e3[e3.GROUP_MUTE_MEMBERS = 62] = "GROUP_MUTE_MEMBERS", e3[e3.GROUP_UNMUTE_MEMBERS = 63] = "GROUP_UNMUTE_MEMBERS", e3[e3.GROUP_FETCH_MUTES = 64] = "GROUP_FETCH_MUTES", e3[e3.GROUP_BLOCK_MEMBER = 65] = "GROUP_BLOCK_MEMBER", e3[e3.GROUP_BLOCK_MEMBERS = 66] = "GROUP_BLOCK_MEMBERS", e3[e3.GROUP_UNBLOCK_MEMBER = 67] = "GROUP_UNBLOCK_MEMBER", e3[e3.GROUP_UNBLOCK_MEMBERS = 68] = "GROUP_UNBLOCK_MEMBERS", e3[e3.GROUP_GET_BLOCK_LIST = 69] = "GROUP_GET_BLOCK_LIST", e3[e3.GROUP_MUTE_ALLMEMBERS = 70] = "GROUP_MUTE_ALLMEMBERS", e3[e3.GROUP_UNMUTE_ALLMEMBERS = 71] = "GROUP_UNMUTE_ALLMEMBERS", e3[e3.GROUP_ADD_WHITELIST = 72] = "GROUP_ADD_WHITELIST", e3[e3.GROUP_REMOVE_WHITELIST = 73] = "GROUP_REMOVE_WHITELIST", e3[e3.GROUP_FETCH_WHITELIST = 74] = "GROUP_FETCH_WHITELIST", e3[e3.GROUP_IS_IN_WHITELIST = 75] = "GROUP_IS_IN_WHITELIST", e3[e3.GROUP_GET_READ_USERS = 76] = "GROUP_GET_READ_USERS", e3[e3.GROUP_FETCH_ANNOUNCEMENT = 77] = "GROUP_FETCH_ANNOUNCEMENT", e3[e3.GROUP_UPDATE_ANNOUNCEMENT = 78] = "GROUP_UPDATE_ANNOUNCEMENT", e3[e3.GROUP_UPLOAD_SHAREDFILE = 79] = "GROUP_UPLOAD_SHAREDFILE", e3[e3.GROUP_DELETE_SHAREDFILE = 80] = "GROUP_DELETE_SHAREDFILE", e3[e3.GROUP_FETCH_SHAREDFILE = 81] = "GROUP_FETCH_SHAREDFILE", e3[e3.GROUP_DOWNLOAD_SHAREDFILE = 82] = "GROUP_DOWNLOAD_SHAREDFILE", e3[e3.GROUP_OPERATE = 100] = "GROUP_OPERATE", e3[e3.CHATROOM_FETCH_CHATROOMSWITHPAGE = 101] = "CHATROOM_FETCH_CHATROOMSWITHPAGE", e3[e3.CHATROOM_CREATECHATROOM = 102] = "CHATROOM_CREATECHATROOM", e3[e3.CHATROOM_DESTORYCHATROOM = 103] = "CHATROOM_DESTORYCHATROOM", e3[e3.CHATROOM_FETCH_SPECIFICATION = 104] = "CHATROOM_FETCH_SPECIFICATION", e3[e3.CHATROOM_CHANGE_ATTRIBUTE = 105] = "CHATROOM_CHANGE_ATTRIBUTE", e3[e3.CHATROOM_REMOVE_MEMBER = 106] = "CHATROOM_REMOVE_MEMBER", e3[e3.CHATROOM_REMOVE_MEMBERS = 107] = "CHATROOM_REMOVE_MEMBERS", e3[e3.CHATROOM_ADD_MEMBERS = 108] = "CHATROOM_ADD_MEMBERS", e3[e3.CHATROOM_JOINCAHTROOM = 109] = "CHATROOM_JOINCAHTROOM", e3[e3.CHATROOM_LEAVECAHTROOM = 110] = "CHATROOM_LEAVECAHTROOM", e3[e3.CHATROOM_FETCH_MEMBERS = 111] = "CHATROOM_FETCH_MEMBERS", e3[e3.CHATROOM_GET_ADMIN = 112] = "CHATROOM_GET_ADMIN", e3[e3.CHATROOM_SET_ADMIN = 113] = "CHATROOM_SET_ADMIN", e3[e3.CHATROOM_REMOVE_ADMIN = 114] = "CHATROOM_REMOVE_ADMIN", e3[e3.CHATROOM_MUTE_USER = 115] = "CHATROOM_MUTE_USER", e3[e3.CHATROOM_UNMUTE_USER = 116] = "CHATROOM_UNMUTE_USER", e3[e3.CHATROOM_FETCH_MUTES = 117] = "CHATROOM_FETCH_MUTES", e3[e3.CHATROOM_BLOCK_USER = 118] = "CHATROOM_BLOCK_USER", e3[e3.CHATROOM_BLOCK_USERS = 119] = "CHATROOM_BLOCK_USERS", e3[e3.CHATROOM_UNBLOCK_USER = 120] = "CHATROOM_UNBLOCK_USER", e3[e3.CHATROOM_UNBLOCK_USERS = 121] = "CHATROOM_UNBLOCK_USERS", e3[e3.CHATROOM_FETCH_BANS = 122] = "CHATROOM_FETCH_BANS", e3[e3.CHATROOM_MUTE_ALLMEMEBERS = 123] = "CHATROOM_MUTE_ALLMEMEBERS", e3[e3.CHATROOM_UNMUTE_ALLMEMEBERS = 124] = "CHATROOM_UNMUTE_ALLMEMEBERS", e3[e3.CHATROOM_ADD_WHITELIST = 125] = "CHATROOM_ADD_WHITELIST", e3[e3.CHATROOM_REMOVE_WHITELIST = 126] = "CHATROOM_REMOVE_WHITELIST", e3[e3.CHATROOM_FETCH_WHITELIST = 127] = "CHATROOM_FETCH_WHITELIST", e3[e3.CHATROOM_FETCH_MEMBERIN_WHITELIST = 128] = "CHATROOM_FETCH_MEMBERIN_WHITELIST", e3[e3.CHATROOM_FETCH_ANNOUNCEMENT = 129] = "CHATROOM_FETCH_ANNOUNCEMENT", e3[e3.CHATROOM_UPDATE_ANNOUNCEMENT = 130] = "CHATROOM_UPDATE_ANNOUNCEMENT", e3[e3.CHATROOM_REMOVE_SHARE_FILE = 131] = "CHATROOM_REMOVE_SHARE_FILE", e3[e3.CHATROOM_GET_SHARE_FILE_LIST = 132] = "CHATROOM_GET_SHARE_FILE_LIST", e3[e3.CHATROOM_UPLOAD_FILE = 133] = "CHATROOM_UPLOAD_FILE", e3[e3.CHATROOM_OPERATE = 150] = "CHATROOM_OPERATE";
          }(n2 || (n2 = {})), function(e3) {
            e3.SDK_INTERNAL = "SDK_INTERNAL", e3.LOGIN = "USER_LOGIN", e3.REGISTER = "USER_CREATE", e3.GET_CHATROOM_LIST = "CHATROOM_FETCH_CHATROOMSWITHPAGE", e3.CREATE_CHATROOM = "CHATROOM_CREATECHATROOM", e3.DESTROY_CHATROOM = "CHATROOM_DESTORYCHATROOM", e3.GET_CHATROOM_DETAIL = "CHATROOM_FETCH_SPECIFICATION", e3.MODIFY_CHATROOM = "CHATROOM_CHANGE_ATTRIBUTE", e3.REMOVE_CHATROOM_MEMBER = "CHATROOM_REMOVE_MEMBER", e3.MULTI_REMOVE_CHATROOM_MEMBER = "CHATROOM_REMOVE_MEMBERS", e3.ADD_USERS_TO_CHATROOM = "CHATROOM_ADD_MEMBERS", e3.JOIN_CHATROOM = "CHATROOM_JOINCAHTROOM", e3.QUIT_CHATROOM = "CHATROOM_LEAVECAHTROOM", e3.LIST_CHATROOM_MEMBERS = "CHATROOM_FETCH_MEMBERS", e3.GET_CHATROOM_ADMIN = "CHATROOM_GET_ADMIN", e3.SET_CHATROOM_ADMIN = "CHATROOM_SET_ADMIN", e3.REMOVE_CHATROOM_ADMIN = "CHATROOM_REMOVE_ADMIN", e3.MUTE_CHATROOM_MEMBER = "CHATROOM_MUTE_USER", e3.REMOVE_MUTE_CHATROOM_MEMBER = "CHATROOM_UNMUTE_USER", e3.GET_MUTE_CHATROOM_MEMBERS = "CHATROOM_FETCH_MUTES", e3.SET_CHATROOM_MEMBER_TO_BLACK = "CHATROOM_BLOCK_USER", e3.MULTI_SET_CHATROOM_MEMBER_TO_BLACK = "CHATROOM_BLOCK_USERS", e3.REMOVE_CHATROOM_MEMBER_BLACK = "CHATROOM_UNBLOCK_USER", e3.MULTI_REMOVE_CHATROOM_MEMBER_BLACK = "CHATROOM_UNBLOCK_USERS", e3.GET_CHATROOM_BLOCK_MEMBERS = "CHATROOM_FETCH_BANS", e3.DISABLED_CHATROOM_SEND_MSG = "CHATROOM_MUTE_ALLMEMEBERS", e3.ENABLE_CHATROOM_SEND_MSG = "CHATROOM_UNMUTE_ALLMEMEBERS", e3.ADD_CHATROOM_WHITE_USERS = "CHATROOM_ADD_WHITELIST", e3.REMOVE_CHATROOM_WHITE_USERS = "CHATROOM_REMOVE_WHITELIST", e3.GET_CHATROOM_WHITE_USERS = "CHATROOM_FETCH_WHITELIST", e3.CHECK_CHATROOM_WHITE_USER = "CHATROOM_FETCH_MEMBERIN_WHITELIST", e3.GET_CHATROOM_ANN = "CHATROOM_FETCH_ANNOUNCEMENT", e3.UPDATE_CHATROOM_ANN = "CHATROOM_UPDATE_ANNOUNCEMENT", e3.DELETE_CHATROOM_FILE = "CHATROOM_REMOVE_SHARE_FILE", e3.GET_CHATROOM_FILES = "CHATROOM_GET_SHARE_FILE_LIST", e3.UPLOAD_CHATROOM_FILE = "CHATROOM_UPLOAD_FILE", e3.CREATE_GROUP = "GROUP_CREATEGROUP", e3.BLOCK_GROUP = "GROUP_BLOCK_MESSAGE", e3.LIST_GROUP = "GROUP_FETCH_PUBLICGROUPS_WITHCURSOR", e3.GET_USER_GROUP = "GROUP_FETCH_USERS_GROUP", e3.CHANGE_OWNER = "GROUP_CHANGE_OWNER", e3.GET_GROUP_INFO = "GROUP_FETCH_SPECIFICATION", e3.MODIFY_GROUP = "GROUP_CHANGE_GROUPATTRIBUTE", e3.LIST_GROUP_MEMBER = "GROUP_FETCH_MEMEBERS", e3.GET_GROUP_ADMIN = "GROUP_GET_ADMIN", e3.SET_GROUP_ADMIN = "GROUP_SET_ADMIN", e3.REMOVE_GROUP_ADMIN = "GROUP_REMOVE_ADMIN", e3.DISSOLVE_GROUP = "GROUP_DESTOTYGROUP", e3.QUIT_GROUP = "GROUP_LEAVEGROUP", e3.INVITE_TO_GROUP = "GROUP_INVITE_TO_GROUP", e3.JOIN_GROUP = "GROUP_JOIN_PUBLICGROUP", e3.AGREE_JOIN_GROUP = "GROUP_ACCEPT_JOINPUBLICGROUPAPPL", e3.REJECT_JOIN_GROUP = "GROUP_DECLINE_JOINPUBLICGROUPAPPL", e3.AGREE_INVITE_GROUP = "GROUP_ACCEPT_INVITATION", e3.REJECT_INVITE_GROUP = "GROUP_DECLINE_INVITATION", e3.REMOVE_GROUP_MEMBER = "GROUP_REMOVE_MEMBER", e3.MULTI_REMOVE_GROUP_MEMBER = "GROUP_REMOVE_MEMBERS", e3.MUTE_GROUP_MEMBER = "GROUP_MUTE_MEMBERS", e3.UNMUTE_GROUP_MEMBER = "GROUP_UNMUTE_MEMBERS", e3.GET_GROUP_MUTE_LIST = "GROUP_FETCH_MUTES", e3.BLOCK_GROUP_MEMBER = "GROUP_BLOCK_MEMBER", e3.BLOCK_GROUP_MEMBERS = "GROUP_BLOCK_MEMBERS", e3.UNBLOCK_GROUP_MEMBER = "GROUP_UNBLOCK_MEMBER", e3.UNBLOCK_GROUP_MEMBERS = "GROUP_UNBLOCK_MEMBERS", e3.GET_GROUP_BLACK_LIST = "GROUP_GET_BLOCK_LIST", e3.DISABLED_SEND_GROUP_MSG = "GROUP_MUTE_ALLMEMBERS", e3.ENABLE_SEND_GROUP_MSG = "GROUP_UNMUTE_ALLMEMBERS", e3.ADD_USERS_TO_GROUP_WHITE = "GROUP_ADD_WHITELIST", e3.REMOVE_GROUP_WHITE_MEMBER = "GROUP_REMOVE_WHITELIST", e3.GET_GROUP_WHITE_LIST = "GROUP_FETCH_WHITELIST", e3.IS_IN_GROUP_WHITE_LIST = "GROUP_IS_IN_WHITELIST", e3.GET_GROUP_MSG_READ_USER = "GROUP_GET_READ_USERS", e3.GET_GROUP_ANN = "GROUP_FETCH_ANNOUNCEMENT", e3.UPDATE_GROUP_ANN = "GROUP_UPDATE_ANNOUNCEMENT", e3.UPLOAD_GROUP_FILE = "GROUP_UPLOAD_SHAREDFILE", e3.DELETE_GROUP_FILE = "GROUP_DELETE_SHAREDFILE", e3.GET_GROUP_FILE_LIST = "GROUP_FETCH_SHAREDFILE", e3.DOWN_GROUP_FILE = "GROUP_DOWNLOAD_SHAREDFILE", e3.GET_SESSION_LIST = "REST_GET_SESSION_LIST", e3.DELETE_SESSION = "REST_DEL_SESSION", e3.GET_HISTORY_MSG = "REST_GET_HISTORY_MESSAGE", e3.UPDATE_USER_INFO = "USER_UPDATE_USERINFO", e3.GET_USER_INFO = "USER_FETCH_USERINFO", e3.UPDATE_USER_NICK = "USER_UPDATE_NICK", e3.UPLOAD_PUSH_TOKEN = "USER_UPLOAD_PUSH_TOKEN", e3.GET_BLACK_LIST = "ROSTER_BLACKLIST", e3.GET_CONTACTS = "ROSTER_CONTACTS", e3.add = "ROSTER_ADD", e3.remove = "ROSTER_REMOVE", e3.accept = "ROSTER_ACCEPT", e3.decline = "ROSTER_DECLINE", e3.ban = "ROSTER_BAN", e3.allow = "ROSTER_ALLOW", e3.SEND_MSG = "MSYNC_SENDMESSAGE", e3.UPLOAD_MSG_ATTACH = "UPLOAD_MSG_ATTACH", e3.SEND_RECALL_MSG = "MSYNC_RECALLMESSAGE";
          }(o || (o = {})), function(e3) {
            e3.GET_DNS = "REST_DNSLIST", e3.LOGIN_BY_AGORA_TOKEN = "LOGIN_BY_AGORA_TOKEN", e3.LOGIN_BY_PWD = "LOGIN_BY_PWD", e3.RESISTER = "REGISTER";
          }(i || (i = {})), function(e3) {
            e3[e3["5G"] = 7] = "5G", e3[e3["4G"] = 7] = "4G", e3[e3["3G"] = 7] = "3G", e3[e3["2G"] = 7] = "2G", e3[e3["SLOW-2G"] = 7] = "SLOW-2G", e3[e3.WIFI = 2] = "WIFI", e3[e3.LAN = 1] = "LAN", e3[e3.DISCONNECTED = 0] = "DISCONNECTED", e3[e3.NONE = 0] = "NONE", e3[e3.UNKNOWN = -1] = "UNKNOWN", e3[e3["WEBIM UNABLE TO GET"] = -2] = "WEBIM UNABLE TO GET";
          }(a || (a = {})), function(e3) {
            e3[e3.success = 200] = "success", e3[e3.failed = 500] = "failed";
          }(s || (s = {})), function(e3) {
            e3[e3.web = 0] = "web", e3[e3.native = 1] = "native";
          }(c || (c = {}));
        }, 5839: function(e2, t2) {
          "use strict";
          var r2 = function() {
            function e3(e4) {
              this.type = e4.type, this.message = e4.message, this.data = e4.data;
            }
            return e3.create = function(t3) {
              return new e3(t3);
            }, e3;
          }();
          t2.Z = r2;
        }, 3406: function(e2, t2, r2) {
          "use strict";
          r2(9894), r2(7858), r2(5645), r2(4286), r2(9900), r2(7680), r2(2914), r2(739), r2(5233);
          var n2 = r2(4255), o = r2.n(n2), i = r2(3718), a = r2(3038), s = r2(6447), c = r2(4816), u = { 0: "TEXT", 1: "IMAGE", 2: "VIDEO", 3: "LOCATION", 4: "VOICE", 5: "FILE", 6: "COMMAND", 7: "CUSTOM" };
          function l(e3) {
            for (var t3 = {}, r3 = 0; r3 < e3.length; r3++)
              if (e3[r3].type === 8)
                t3[e3[r3].key] = JSON.parse(e3[r3].stringValue);
              else if (e3[r3].type === 7)
                t3[e3[r3].key] = e3[r3].stringValue;
              else if (e3[r3].type === 6)
                t3[e3[r3].key] = e3[r3].doubleValue;
              else if (e3[r3].type === 5)
                t3[e3[r3].key] = e3[r3].floatValue;
              else if (e3[r3].type === 1) {
                var n3 = e3[r3].varintValue, i2 = new (o())(n3.low, n3.high, n3.unsigned).toString();
                t3[e3[r3].key] = Number(i2) !== 0;
              } else
                e3[r3].type !== 2 && e3[r3].type !== 3 && e3[r3].type !== 4 || (n3 = e3[r3].varintValue, i2 = new (o())(n3.low, n3.high, n3.unsigned).toString(), t3[e3[r3].key] = Number(i2));
            return t3;
          }
          function p(e3, t3, r3) {
            if (this.delivery && e3 !== t3) {
              var n3 = this.getUniqueId(), o2 = new c.Message("delivery", n3);
              o2.set({ ackId: r3, to: e3 }), s.kg.debug("send delivery ack"), this.send(o2.body);
            }
          }
          t2.Z = function(e3, t3, r3, n3) {
            var c2, h, d, f, m, g, y, E = new (o())(e3.timestamp.low, e3.timestamp.high, e3.timestamp.unsigned).toString(), v = this.root.lookup("easemob.pb.MessageBody").decode(e3.payload), T = 1;
            if (e3.meta && e3.meta.length)
              switch (a.P6.parseNotify(e3.meta).is_online) {
                case 0:
                  T = 0;
                  break;
                case 1:
                  T = 1;
                  break;
                default:
                  T = 2;
              }
            else
              T = 3;
            var _ = new (o())(e3.id.low, e3.id.high, e3.id.unsigned).toString(), O = v.ackMessageId ? new (o())(v.ackMessageId.low, v.ackMessageId.high, v.ackMessageId.unsigned).toString() : "", R = "", I = v.from && v.from.name, S = v.to && v.to.name;
            switch (s.kg.debug("thirdMessage:", v), v.type) {
              case 1:
                R = "chat", this.grantType === "agoraToken" && (R = "singleChat"), this.delivery && p.call(this, I, S, _);
                break;
              case 2:
                R = "groupchat", this.grantType === "agoraToken" && (R = "groupChat");
                break;
              case 3:
                R = "chatroom", this.grantType === "agoraToken" && (R = "chatRoom"), T = 1;
                break;
              case 4:
                R = "read_ack";
                var A = void 0;
                return v.ext[0] && JSON.parse(v.ext[0].stringValue) ? (A = { id: _, type: "read", from: I, to: S, mid: O, groupReadCount: v.ext[0] && JSON.parse(v.ext[0].stringValue), ackContent: v.ackContent, onlineState: T }, this.onReadMessage && this.onReadMessage(A), void ((c2 = this.eventHandler) === null || c2 === void 0 || c2.dispatch("onReadMessage", A))) : (A = { id: _, type: "read", from: I, to: S, mid: O, onlineState: T }, this.onReadMessage && this.onReadMessage(A), void ((h = this.eventHandler) === null || h === void 0 || h.dispatch("onReadMessage", A)));
              case 5:
                R = "deliver_ack", this.onDeliveredMessage && this.onDeliveredMessage({ id: _, type: "delivery", from: I, to: S, mid: O, onlineState: T });
                var N = { id: _, type: "delivery", from: I, to: S, mid: O, onlineState: T };
                return void ((d = this.eventHandler) === null || d === void 0 || d.dispatch("onDeliveredMessage", N));
              case 6:
                R = "recall";
                var C = { id: _, from: I || "admin", to: S, mid: O, onlineState: T };
                return this.onRecallMessage && this.onRecallMessage(C), void ((f = this.eventHandler) === null || f === void 0 || f.dispatch("onRecallMessage", C));
              case 7:
                this.onChannelMessage && this.onChannelMessage({ id: _, type: "channel", chatType: "singleChat", from: I, to: S, time: Number(E), onlineState: T });
                var b = { id: _, type: "channel", chatType: "singleChat", from: I, to: S, time: Number(E), onlineState: T };
                return void ((m = this.eventHandler) === null || m === void 0 || m.dispatch("onChannelMessage", b));
              default:
                return void s.kg.error("unexpected message type: ".concat(v.type));
            }
            var M, w = "normal";
            if (R.toLowerCase() === "chat" || R === "singleChat")
              M = "singleChat";
            else if (R.toLowerCase() === "groupchat" || R === "groupChat")
              M = "groupChat";
            else if (M = "chatRoom", T = 1, e3.ext) {
              var U = l([e3.ext]);
              w = U.chatroom_msg_tag === 0 ? "high" : U.chatroom_msg_tag === 2 ? "low" : "normal";
            }
            for (var k = 0; k < v.contents.length; k++) {
              var P = {}, x = {}, L = t3.errorCode > 0, j = t3.errorCode, D = t3.reason, G = v.contents[k], B = {}, H = [], F = [], W = null, q = null, Z = void 0;
              if (v.ext && (B = l(v.ext)), v.meta && typeof v.meta == "string") {
                var K = JSON.parse(v.meta);
                K.reaction && (H = K.reaction).forEach(function(e4) {
                  e4.isAddedBySelf = e4.state, delete e4.state;
                }), K.translations && (F = K.translations), K.thread && JSON.stringify(K.thread) !== "{}" && (W = { messageId: K.thread.msg_parent_id, parentId: K.thread.muc_parent_id, chatThreadName: K.thread.thread_name }), K.thread_overview && JSON.stringify(K.thread_overview) !== "{}" && (q = { id: K.thread_overview.id, parentId: K.thread_overview.muc_parent_id, name: K.thread_overview.name, lastMessage: (0, i.w)(K.thread_overview.last_message), createTimestamp: K.thread_overview.create_timestamp, updateTimestamp: K.thread_overview.update_timestamp, messageCount: K.thread_overview.message_count });
              }
              switch (G.type) {
                case 0:
                  !(P = { id: _, type: R, contentsType: u[G.type], from: I, to: S, data: G.text, ext: B, sourceMsg: G.text, time: E, msgConfig: v.msgConfig, onlineState: T }).msgConfig && delete v.msgConfig, P.error = L, P.errorText = D, P.errorCode = j, !r3 && this.onTextMessage && this.onTextMessage(P);
                  var V = { id: _, type: "txt", chatType: M, msg: G.text, to: S, from: I, ext: B, time: Number(E), onlineState: T };
                  P.msgConfig && (V.msgConfig = P.msgConfig), H.length > 0 && (V.reactions = H), W && (V.chatThread = W), q && (V.chatThreadOverview = q), F.length > 0 && (V.translations = F), M === "chatRoom" && (V.priority = w), x = V, !r3 && this.eventHandler && this.eventHandler.dispatch("onTextMessage", V);
                  break;
                case 1:
                  var z = ((g = G == null ? void 0 : G.size) === null || g === void 0 ? void 0 : g.width) || 0, J = ((y = G == null ? void 0 : G.size) === null || y === void 0 ? void 0 : y.height) || 0;
                  Z = this.useOwnUploadFun ? G.remotePath : (G.remotePath && this.apiUrl + G.remotePath.substr(G.remotePath.indexOf("/", 9))) + "?em-redirect=true", G.secretKey && !this.useOwnUploadFun && (Z = "".concat(Z, "&share-secret=").concat(G.secretKey)), !(P = { id: _, type: R, contentsType: u[G.type], from: I, to: S, url: Z, secret: G.secretKey, filename: G.displayName, thumb: this.useOwnUploadFun ? "" : "".concat(Z, "&thumbnail=true"), thumb_secret: G.secretKey, file_length: G.fileLength || "", width: z, height: J, filetype: G.filetype || "", accessToken: this.token, ext: B, time: E, msgConfig: v.msgConfig, onlineState: T }).delay && delete P.delay, !P.msgConfig && delete v.msgConfig, P.error = L, P.errorText = D, P.errorCode = j, !r3 && this.onPictureMessage && this.onPictureMessage(P);
                  var X = { id: _, type: "img", chatType: M, from: I, to: S, url: Z || "", file: {}, width: z, height: J, secret: G.secretKey || "", thumb: this.useOwnUploadFun ? "" : "".concat(Z, "&thumbnail=true"), thumb_secret: G.secretKey, file_length: G.fileLength || 0, ext: B, time: Number(E), onlineState: T };
                  P.msgConfig && (X.msgConfig = P.msgConfig), H.length > 0 && (X.reactions = H), W && (X.chatThread = W), q && (X.chatThreadOverview = q), M === "chatRoom" && (X.priority = w), x = X, !r3 && this.eventHandler && this.eventHandler.dispatch("onImageMessage", X);
                  break;
                case 2:
                  Z = this.useOwnUploadFun ? G.remotePath : (G.remotePath && this.apiUrl + G.remotePath.substr(G.remotePath.indexOf("/", 9))) + "?em-redirect=true", G.secretKey && !this.useOwnUploadFun && (Z = "".concat(Z, "&share-secret=").concat(G.secretKey)), !(P = { id: _, type: R, contentsType: u[G.type], from: I, to: S, url: Z, secret: G.secretKey, filename: G.displayName, length: G.duration || "", file_length: G.fileLength || "", filetype: G.filetype || "", accessToken: this.token || "", ext: B, time: E, msgConfig: v.msgConfig, onlineState: T }).delay && delete P.delay, !P.msgConfig && delete v.msgConfig, P.error = L, P.errorText = D, P.errorCode = j, !r3 && this.onVideoMessage && this.onVideoMessage(P);
                  var Y = { id: _, type: "video", chatType: M, from: I, to: S, url: Z, secret: G.secretKey, filename: G.displayName, length: G.duration || 0, file: {}, file_length: G.fileLength || 0, filetype: G.filetype || "", accessToken: this.token || "", ext: B, time: Number(E), onlineState: T };
                  P.msgConfig && (Y.msgConfig = P.msgConfig), H.length > 0 && (Y.reactions = H), W && (Y.chatThread = W), q && (Y.chatThreadOverview = q), M === "chatRoom" && (Y.priority = w), x = Y, !r3 && this.eventHandler && this.eventHandler.dispatch("onVideoMessage", Y);
                  break;
                case 3:
                  !(P = { id: _, type: R, contentsType: u[G.type], from: I, to: S, addr: G.address, buildingName: G.buildingName, lat: G.latitude, lng: G.longitude, ext: B, time: E, msgConfig: v.msgConfig, onlineState: T }).delay && delete P.delay, !P.msgConfig && delete v.msgConfig, P.error = L, P.errorText = D, P.errorCode = j, !r3 && this.onLocationMessage && this.onLocationMessage(P);
                  var $2 = { id: _, type: "loc", chatType: M, from: I, to: S, buildingName: G.buildingName, addr: G.address, lat: G.latitude, lng: G.longitude, ext: B, time: Number(E), onlineState: T };
                  P.msgConfig && ($2.msgConfig = P.msgConfig), H.length > 0 && ($2.reactions = H), W && ($2.chatThread = W), q && ($2.chatThreadOverview = q), M === "chatRoom" && ($2.priority = w), x = $2, !r3 && this.eventHandler && this.eventHandler.dispatch("onLocationMessage", $2);
                  break;
                case 4:
                  Z = this.useOwnUploadFun ? G.remotePath : (G.remotePath && this.apiUrl + G.remotePath.substr(G.remotePath.indexOf("/", 9))) + "?em-redirect=true", G.secretKey && !this.useOwnUploadFun && (Z = "".concat(Z, "&share-secret=").concat(G.secretKey)), !(P = { id: _, type: R, contentsType: u[G.type], from: I, to: S, url: Z, secret: G.secretKey, filename: G.displayName, file_length: G.fileLength || "", accessToken: this.token || "", ext: B, length: G.duration, time: E, msgConfig: v.msgConfig, onlineState: T }).delay && delete P.delay, !P.msgConfig && delete v.msgConfig, P.error = L, P.errorText = D, P.errorCode = j, !r3 && this.onAudioMessage && this.onAudioMessage(P);
                  var Q = { id: _, type: "audio", chatType: M, from: I, to: S, url: Z, secret: G.secretKey, file: {}, filename: G.displayName, length: G.duration || 0, file_length: G.fileLength || 0, filetype: G.filetype || "", accessToken: this.token || "", ext: B, time: Number(E), onlineState: T };
                  P.msgConfig && (Q.msgConfig = P.msgConfig), H.length > 0 && (Q.reactions = H), W && (Q.chatThread = W), q && (Q.chatThreadOverview = q), M === "chatRoom" && (Q.priority = w), x = Q, !r3 && this.eventHandler && this.eventHandler.dispatch("onAudioMessage", Q);
                  break;
                case 5:
                  Z = this.useOwnUploadFun ? G.remotePath : (G.remotePath && this.apiUrl + G.remotePath.substr(G.remotePath.indexOf("/", 9))) + "?em-redirect=true", G.secretKey && !this.useOwnUploadFun && (Z = "".concat(Z, "&share-secret=").concat(G.secretKey)), !(P = { id: _, type: R, contentsType: u[G.type], from: I, to: S, url: Z, secret: G.secretKey, filename: G.displayName, file_length: G.fileLength, accessToken: this.token || "", ext: B, time: E, msgConfig: v.msgConfig, onlineState: T }).delay && delete P.delay, !P.msgConfig && delete v.msgConfig, P.error = L, P.errorText = D, P.errorCode = j, !r3 && this.onFileMessage && this.onFileMessage(P);
                  var ee = { id: _, type: "file", chatType: M, from: I, to: S, url: Z, secret: G.secretKey, file: {}, filename: G.displayName, length: G.duration || 0, file_length: G.fileLength || 0, filetype: G.filetype || "", accessToken: this.token || "", ext: B, time: Number(E), onlineState: T };
                  P.msgConfig && (ee.msgConfig = P.msgConfig), H.length > 0 && (ee.reactions = H), W && (ee.chatThread = W), q && (ee.chatThreadOverview = q), M === "chatRoom" && (ee.priority = w), x = ee, !r3 && this.eventHandler && this.eventHandler.dispatch("onFileMessage", ee);
                  break;
                case 6:
                  !(P = { id: _, type: R, contentsType: u[G.type], from: I, to: S, action: G.action, ext: B, time: E, msgConfig: v.msgConfig, onlineState: T }).msgConfig && delete v.msgConfig, P.error = L, P.errorText = D, P.errorCode = j, !r3 && this.onCmdMessage && this.onCmdMessage(P);
                  var te = { id: _, type: "cmd", chatType: M, from: I, to: S, action: G.action, ext: B, time: Number(E), onlineState: T };
                  P.msgConfig && (te.msgConfig = P.msgConfig), H.length > 0 && (te.reactions = H), W && (te.chatThread = W), q && (te.chatThreadOverview = q), M === "chatRoom" && (te.priority = w), x = te, !r3 && this.eventHandler && this.eventHandler.dispatch("onCmdMessage", te);
                  break;
                case 7:
                  var re = {}, ne = {};
                  v.contents[0].customExts && (re = l(v.contents[0].customExts)), v.contents[0].params && (ne = l(v.contents[0].params)), P = { id: _, type: R, contentsType: u[G.type], from: I, to: S, customEvent: G.customEvent, params: ne, customExts: re, ext: B, time: E, onlineState: T }, !r3 && this.onCustomMessage && this.onCustomMessage(P);
                  var oe = { id: _, type: "custom", chatType: M, from: I, to: S, customEvent: G.customEvent, params: ne, customExts: re, ext: B, time: Number(E), onlineState: T };
                  P.msgConfig && (oe.msgConfig = P.msgConfig), H.length > 0 && (oe.reactions = H), W && (oe.chatThread = W), q && (oe.chatThreadOverview = q), M === "chatRoom" && (oe.priority = w), x = oe, !r3 && this.eventHandler && this.eventHandler.dispatch("onCustomMessage", oe);
                  break;
                default:
                  s.kg.error("Unknow message type, message:", G);
              }
              return n3 ? x : P;
            }
          };
        }, 1688: function(e2, t2, r2) {
          "use strict";
          r2(9900);
          var n2, o = r2(6447), i = r2(2558), a = r2(8669);
          !function(e3) {
            e3[e3.Add = 2] = "Add", e3[e3.Remove = 3] = "Remove", e3[e3.Accept = 4] = "Accept", e3[e3.Decline = 5] = "Decline", e3[e3.Ban = 6] = "Ban", e3[e3.Allow = 7] = "Allow";
          }(n2 || (n2 = {}));
          var s = { operatRoster: function(e3, t3) {
            var r3 = [], s2 = this.root.lookup("easemob.pb.RosterBody"), c = s2.decode(r3);
            switch (t3) {
              case "add":
                c.operation = n2.Add;
                break;
              case "remove":
                c.operation = n2.Remove;
                break;
              case "accept":
                c.operation = n2.Accept;
                break;
              case "decline":
                c.operation = n2.Decline;
                break;
              case "ban":
                c.operation = n2.Ban;
                break;
              case "allow":
                c.operation = n2.Allow;
                break;
              default:
                o.kg.error("operatRoster:", t3);
            }
            c.from = this.context.jid;
            var u = [];
            if (typeof e3.to == "string")
              u.push({ appKey: this.appKey || this.context.appKey, name: e3.to, domain: "easemob.com" });
            else if (e3.to instanceof Array)
              for (var l = 0; l < e3.to.length; l++)
                u.push({ appKey: this.appKey, name: e3.to[l], domain: "easemob.com" });
            c.to = u, c.reason = e3.message || "", c = s2.encode(c).finish();
            var p = this.root.lookup("easemob.pb.Meta").decode(r3);
            p.id = e3.id || this.getUniqueId();
            var h = this.dataReport.geOperateFun({ operationName: a.fI[t3] });
            i.Nl.size <= i.F3 && i.Nl.set(p.id, { rpt: h, requestName: a.fI[t3] }), p.from = this.context.jid, p.to = { domain: "@easemob.com" }, p.ns = 3, p.payload = c;
            var d = this.root.lookup("easemob.pb.CommSyncUL"), f = d.decode(r3);
            f.meta = p, f = d.encode(f).finish();
            var m = this.root.lookup("easemob.pb.MSync"), g = m.decode(r3);
            if (g.version = this.version, g.encryptType = [0], g.command = 0, g.guid = this.jid, g.payload = f, g = m.encode(g).finish(), this.name === "miniCore")
              this.sock.send(g);
            else {
              var y = this.mSync.base64transform(g);
              this.sock.send(y);
            }
          }, handleRosterMsg: function(e3) {
            var t3, r3, n3, i2, a2, s2, c = this.root.lookup("easemob.pb.RosterBody").decode(e3.payload), u = { type: "", to: c.to[0].name, from: c.from.name, status: c.reason };
            switch (c.operation) {
              case 2:
                u.type = "subscribe", this.onContactInvited && this.onContactInvited(u), (t3 = this.eventHandler) === null || t3 === void 0 || t3.dispatch("onContactInvited", u);
                break;
              case 3:
                u.type = "unsubscribed", this.onContactDeleted && this.onContactDeleted(u), (r3 = this.eventHandler) === null || r3 === void 0 || r3.dispatch("onContactDeleted", u);
                break;
              case 4:
                u.type = "subscribed", this.onContactAdded && this.onContactAdded(u), (n3 = this.eventHandler) === null || n3 === void 0 || n3.dispatch("onContactAdded", u);
                break;
              case 5:
                u.type = "unsubscribed", this.onContactRefuse && this.onContactRefuse(u), (i2 = this.eventHandler) === null || i2 === void 0 || i2.dispatch("onContactRefuse", u);
                break;
              case 6:
              case 7:
                break;
              case 8:
                u.type = "subscribed", this.onContactAgreed && this.onContactAgreed(u), (a2 = this.eventHandler) === null || a2 === void 0 || a2.dispatch("onContactAgreed", u);
                break;
              case 9:
                u.type = "unsubscribed", this.onContactRefuse && this.onContactRefuse(u), (s2 = this.eventHandler) === null || s2 === void 0 || s2.dispatch("onContactRefuse", u);
                break;
              default:
                o.kg.error("handleRosterMsg:", c);
            }
            this.onPresence && u.type && this.onPresence(u);
          } };
          t2.Z = s;
        }, 6447: function(e2, t2, r2) {
          "use strict";
          function n2() {
            console.log && (console.log.apply ? console.log.apply(console, Array.prototype.slice.call(arguments)) : Function.prototype.apply.apply(console.log, [console, arguments])), console.trace && console.trace();
          }
          r2.d(t2, { kg: function() {
            return f;
          } }), r2(2397), r2(5233), r2(9900), r2(1157), r2(6162), r2(7858), r2(796), r2(2835), r2(1884), r2(4333), r2(2645), r2(9894), r2(7680), r2(739), r2(2135), r2(4593), r2(3776), r2(3836);
          var o = typeof window != "undefined" && window.navigator !== void 0 && /Trident\/|MSIE /.test(window.navigator.userAgent);
          function i(e3) {
            return i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e4) {
              return typeof e4;
            } : function(e4) {
              return e4 && typeof Symbol == "function" && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
            }, i(e3);
          }
          var a, s = function(e3, t3, r3) {
            if (r3 || arguments.length === 2)
              for (var n3, o2 = 0, i2 = t3.length; o2 < i2; o2++)
                !n3 && o2 in t3 || (n3 || (n3 = Array.prototype.slice.call(t3, 0, o2)), n3[o2] = t3[o2]);
            return e3.concat(n3 || Array.prototype.slice.call(t3));
          }, c = function() {
          }, u = {};
          !function(e3) {
            e3[e3.TRACE = 0] = "TRACE", e3[e3.DEBUG = 1] = "DEBUG", e3[e3.INFO = 2] = "INFO", e3[e3.WARN = 3] = "WARN", e3[e3.ERROR = 4] = "ERROR", e3[e3.SILENT = 5] = "SILENT";
          }(a || (a = {}));
          var l = function() {
            function e3(e4, t3, r3) {
              this.name = e4 || "defaultLogger", this.currentLevel = 0, this.useCookiePersist = false, this.storageLogLevelKey = "loglevel", this.levels = a, this.logMethods = ["trace", "debug", "info", "warn", "error"], this.methodFactory = r3 || this.defaultMethodFactory;
              var n3 = this._getPersistedLevel();
              n3 == null && (n3 = t3 === null ? "WARN" : t3), this.logs = [], this.config = { useCache: false, maxCache: 3145728, color: "", background: "" }, this.logBytes = 0, this.setLevel(n3, false, "");
            }
            return e3.prototype.setConfig = function(e4) {
              this.config = e4;
            }, e3.prototype.getLevel = function() {
              return this.currentLevel;
            }, e3.prototype.setLevel = function(e4, t3, r3) {
              if (typeof e4 == "string" && (e4 = a[e4]), e4 === void 0 && (e4 = 0), !(typeof e4 == "number" && e4 >= 0 && e4 <= this.levels.SILENT))
                throw Error("log.setLevel() called with invalid level: " + e4);
              if (this.currentLevel = e4, t3 !== false && this._persistLevel(e4), this.replaceLoggingMethods(e4, r3), typeof console == "undefined" && e4 < a.SILENT)
                throw Error("No console available for logging");
            }, e3.prototype.setDefaultLevel = function(e4) {
              this._getPersistedLevel() || this.setLevel(e4, false, "");
            }, e3.prototype.enableAll = function(e4) {
              this.setLevel(this.levels.TRACE, true, "");
            }, e3.prototype.disableAll = function(e4) {
              this.setLevel(this.levels.SILENT, true, "");
            }, e3.prototype.getLogs = function() {
              return this.logs;
            }, e3.prototype.download = function() {
              if (typeof window != "undefined" && typeof document != "undefined") {
                var e4 = this.getLogs().join("\n"), t3 = new Blob([e4], { type: "text/plain;charset=UTF-8" }), r3 = window.URL.createObjectURL(t3), n3 = document.createElement("a");
                n3.style.display = "none", n3.href = r3, n3.setAttribute("download", "sdklog"), document.body.appendChild(n3), n3.click();
              }
            }, e3.prototype._bindMethod = function(e4, t3, r3) {
              var n3 = this, o2 = e4[t3], i2 = this.getTime();
              if (r3)
                return this._cacheLog;
              if (typeof o2.bind == "function")
                return function() {
                  for (var r4 = [], i3 = 0; i3 < arguments.length; i3++)
                    r4[i3] = arguments[i3];
                  var a2 = n3.getTime();
                  o2.call.apply(o2, s([e4, "".concat(a2, " IM SDK [").concat(t3 === "log" ? "debug" : t3, "]: ")], r4, false)), n3.onLog && n3.onLog({ time: a2, level: t3 === "log" ? "debug" : t3, logs: r4 });
                };
              try {
                return Function.prototype.bind.call(o2, e4, "".concat(i2, " IM SDK [").concat(t3 === "log" ? "debug" : t3, "]: "));
              } catch (t4) {
                return function() {
                  return Function.prototype.apply.apply(o2, [e4, arguments]);
                };
              }
            }, e3.prototype.getTime = function() {
              var e4 = new Date();
              return e4.toTimeString().split(" ")[0] + ":" + e4.getMilliseconds();
            }, e3.prototype._cacheLog = function() {
              for (var e4 = [], t3 = 0; t3 < arguments.length; t3++)
                e4[t3] = arguments[t3];
              var r3 = new Date().toLocaleString() + ": ", n3 = "";
              e4.forEach(function(e5) {
                i(e5) === "object" ? n3 += JSON.stringify(e5) + " " : n3 += e5 + " ";
              }), this._cacheLogCall(r3 + n3);
            }, e3.prototype._cacheLogCall = function(e4) {
              var t3 = p(e4), r3 = this.logBytes + t3, n3 = this.config.maxCache;
              if (!(t3 >= n3)) {
                if (r3 < n3)
                  this.logBytes += t3;
                else
                  for (var o2 = r3 - n3, i2 = 0; i2 < o2; ) {
                    var a2 = this.logs.shift();
                    a2 !== void 0 && (i2 += p(a2));
                  }
                this.logs.push(e4);
              }
            }, e3.prototype._getPersistedLevel = function() {
              var e4;
              if (typeof window == "undefined")
                return 5;
              if ((e4 = window && window.localStorage && window.localStorage[this.storageLogLevelKey]) === "undefined") {
                var t3 = window.document.cookie, r3 = t3.indexOf(encodeURIComponent(this.storageLogLevelKey));
                r3 !== -1 && (e4 = /^([^;]+)/.exec(t3.slice(r3))[1]);
              }
              return e4 || 5;
            }, e3.prototype._persistLevel = function(e4) {
              var t3 = this.logMethods[e4] || "SILENT";
              typeof window != "undefined" && (window.localStorage && (window.localStorage[this.storageLogLevelKey] = t3), this.useCookiePersist && (window.document.cookie = encodeURIComponent(this.storageLogLevelKey) + "=" + t3 + ";"));
            }, e3.prototype.replaceLoggingMethods = function(e4, t3) {
              for (var r3 = 0; r3 < this.logMethods.length; r3++) {
                var n3 = this.logMethods[r3];
                this[n3] = r3 < e4 ? c : this.methodFactory(n3, e4, t3);
              }
              this.log = this.debug;
            }, e3.prototype.defaultMethodFactory = function(e4, t3, r3) {
              return this.realMethod(e4) || this.enableLoggingWhenConsoleArrives.apply(this, [e4, t3, r3]);
            }, e3.prototype.realMethod = function(e4) {
              return e4 === "debug" && (e4 = "log"), typeof console != "undefined" && (e4 === "trace" && o ? n2 : console[e4] !== void 0 ? this._bindMethod(console, e4, this.config.useCache) : console.log !== void 0 ? this._bindMethod(console, "log", this.config.useCache) : c);
            }, e3.prototype.enableLoggingWhenConsoleArrives = function(e4, t3, r3) {
              return function() {
                typeof console != "undefined" && (this.replaceLoggingMethods.call(this, t3, r3), this[e4].apply(this, arguments));
              }.bind(this);
            }, e3;
          }();
          function p(e3) {
            for (var t3 = e3.length, r3 = 0; r3 < e3.length; r3++)
              e3.charCodeAt(r3) > 255 && t3++;
            return t3;
          }
          var h = new l();
          h.getLogger = function(e3) {
            if (typeof e3 != "string" || e3 === "")
              throw new TypeError("You must supply a name when creating a logger.");
            return this;
          };
          var d = typeof window != "undefined" ? window.log : void 0;
          h.noConflict = function() {
            return typeof window != "undefined" && window.log === h && (window.log = d), h;
          }, h.getLoggers = function() {
            return u;
          };
          var f = h;
        }, 4816: function(e2, t2, r2) {
          "use strict";
          r2.d(t2, { Message: function() {
            return m;
          } });
          var n2 = r2(3038), o = function() {
            function e3(e4) {
              var t3 = e4.id;
              this.id = t3, this.type = e4.type;
            }
            return e3.prototype.set = function(e4) {
              this.body = { id: this.id, ackId: e4.id, type: "read", to: e4.to, from: e4.from || "", chatType: e4.chatType };
            }, e3.create = function(e4) {
              return { id: n2.P6.getUniqueId(), chatType: e4.chatType, ackId: e4.id, type: "read", to: e4.to, from: e4.from || "", ackContent: e4.ackContent, isChatThread: e4.isChatThread };
            }, e3;
          }(), i = function() {
            function e3(e4) {
              this.id = e4.id, this.type = e4.type;
            }
            return e3.prototype.set = function(e4) {
              this.body = { id: this.id, ackId: e4.ackId, type: "delivery", to: e4.to, from: e4.from || "" };
            }, e3.create = function(e4) {
              return { id: n2.P6.getUniqueId(), ackId: e4.ackId, type: "delivery", to: e4.to, from: e4.from || "", isChatThread: e4.isChatThread };
            }, e3;
          }(), a = (r2(529), r2(9894), function() {
            function e3(e4) {
              var t3 = e4.type, r3 = e4.id;
              this.id = r3, this.type = t3;
            }
            return e3.prototype.set = function(e4) {
              this.body = { id: this.id, chatType: e4.chatType || "singleChat", type: "channel", to: e4.to, from: e4.from || "", time: Date.now() };
            }, e3.prototype.setChatType = function(e4) {
              return !!this.body && (this.body.chatType = e4, true);
            }, e3.prototype.setGroup = function(e4) {
              return !!this.body && (this.body.group = e4, true);
            }, e3.create = function(e4) {
              return { id: n2.P6.getUniqueId(), type: "channel", chatType: e4.chatType || "singleChat", to: e4.to, from: e4.from || "", time: Date.now(), isChatThread: e4.isChatThread };
            }, e3;
          }()), s = (r2(2289), function() {
            function e3(e4) {
              var t3 = e4.type, r3 = e4.id || n2.P6.getUniqueId();
              this.id = r3, this.type = t3, this.value = "";
            }
            return e3.prototype.set = function(e4) {
              this.body = { id: this.id, chatType: e4.chatType || "singleChat", type: "txt", to: e4.to, msg: e4.msg, from: e4.from, roomType: e4.roomType, success: e4.success, fail: e4.fail, ext: e4.ext, time: Date.now(), isChatThread: e4.isChatThread }, this.value = e4.msg;
            }, e3.prototype.setChatType = function(e4) {
              return !!this.body && (this.body.chatType = e4, true);
            }, e3.prototype.setGroup = function(e4) {
              return !!this.body && (this.body.group = e4, true);
            }, e3.create = function(e4) {
              var t3, r3;
              return ((t3 = e4.msgConfig) === null || t3 === void 0 ? void 0 : t3.languages) && Array.isArray((r3 = e4.msgConfig) === null || r3 === void 0 ? void 0 : r3.languages), { type: "txt", id: n2.P6.getUniqueId(), msg: e4.msg, to: e4.to, from: e4.from || "", chatType: e4.chatType, ext: e4.ext, time: Date.now(), msgConfig: e4.msgConfig, isChatThread: e4.isChatThread, priority: e4.priority };
            }, e3;
          }()), c = function() {
            function e3(e4) {
              var t3 = e4.type, r3 = e4.id;
              this.id = r3 || n2.P6.getUniqueId(), this.type = t3;
            }
            return e3.prototype.set = function(e4) {
              this.body = { id: this.id, chatType: e4.chatType || "singleChat", type: "cmd", to: e4.to, action: e4.action, from: e4.from, roomType: e4.roomType, success: e4.success, fail: e4.fail, ext: e4.ext, time: Date.now() };
            }, e3.prototype.setChatType = function(e4) {
              return !!this.body && (this.body.chatType = e4, true);
            }, e3.prototype.setGroup = function(e4) {
              return !!this.body && (this.body.group = e4, true);
            }, e3.create = function(e4) {
              return { id: n2.P6.getUniqueId(), type: "cmd", to: e4.to, from: e4.from || "", chatType: e4.chatType || "singleChat", action: e4.action, time: Date.now(), ext: e4.ext, msgConfig: e4.msgConfig, isChatThread: e4.isChatThread, priority: e4.priority };
            }, e3;
          }(), u = function() {
            function e3(e4) {
              var t3 = e4.type, r3 = e4.id || n2.P6.getUniqueId();
              this.id = r3, this.type = t3;
            }
            return e3.prototype.set = function(e4) {
              this.body = { id: this.id, chatType: e4.chatType || "singleChat", type: "custom", to: e4.to, customEvent: e4.customEvent, customExts: e4.customExts, from: e4.from, roomType: e4.roomType, success: e4.success, fail: e4.fail, ext: e4.ext, time: Date.now() };
            }, e3.prototype.setChatType = function(e4) {
              return !!this.body && (this.body.chatType = e4, true);
            }, e3.prototype.setGroup = function(e4) {
              return !!this.body && (this.body.group = e4, true);
            }, e3.create = function(e4) {
              return { id: n2.P6.getUniqueId(), chatType: e4.chatType || "singleChat", type: "custom", to: e4.to, customEvent: e4.customEvent, customExts: e4.customExts, from: e4.from || "", ext: e4.ext, time: Date.now(), msgConfig: e4.msgConfig, isChatThread: e4.isChatThread, priority: e4.priority };
            }, e3;
          }(), l = function() {
            function e3(e4) {
              var t3 = e4.type, r3 = e4.id;
              this.id = r3 || n2.P6.getUniqueId(), this.type = t3;
            }
            return e3.prototype.set = function(e4) {
              this.body = { id: this.id, chatType: e4.chatType || "singleChat", type: "loc", to: e4.to, addr: e4.addr, buildingName: e4.buildingName, lat: e4.lat, lng: e4.lng, from: e4.from, roomType: e4.roomType, success: e4.success, fail: e4.fail, ext: e4.ext, time: Date.now() };
            }, e3.prototype.setChatType = function(e4) {
              return !!this.body && (this.body.chatType = e4, true);
            }, e3.prototype.setGroup = function(e4) {
              return !!this.body && (this.body.group = e4, true);
            }, e3.create = function(e4) {
              return { id: n2.P6.getUniqueId(), chatType: e4.chatType || "singleChat", type: "loc", to: e4.to, addr: e4.addr, buildingName: e4.buildingName, lat: e4.lat, lng: e4.lng, from: e4.from || "", ext: e4.ext, time: Date.now(), msgConfig: e4.msgConfig, isChatThread: e4.isChatThread, priority: e4.priority };
            }, e3;
          }(), p = function() {
            function e3(e4) {
              var t3 = e4.type, r3 = e4.id || n2.P6.getUniqueId();
              this.id = r3, this.type = t3;
            }
            return e3.prototype.set = function(e4) {
              e4.file = e4.file || e4.fileInputId && n2.P6.getFileUrl(e4.fileInputId), this.body = { id: this.id, chatType: e4.chatType || "singleChat", type: "img", file: e4.file, width: e4.width, height: e4.height, to: e4.to, from: e4.from || "", roomType: e4.roomType, success: e4.success, fail: e4.fail, ext: e4.ext, time: Date.now(), onFileUploadError: e4.onFileUploadError, onFileUploadComplete: e4.onFileUploadComplete, onFileUploadProgress: e4.onFileUploadProgress, body: e4.body, isChatThread: e4.isChatThread };
            }, e3.prototype.setChatType = function(e4) {
              return !!this.body && (this.body.chatType = e4, true);
            }, e3.prototype.setGroup = function(e4) {
              return !!this.body && (this.body.group = e4, true);
            }, e3.create = function(e4) {
              return { id: n2.P6.getUniqueId(), chatType: e4.chatType, type: "img", url: e4.url, width: e4.width, height: e4.height, file: e4.file, to: e4.to, from: e4.from || "", ext: e4.ext, time: Date.now(), msgConfig: e4.msgConfig, file_length: e4.file_length, onFileUploadError: e4.onFileUploadError, onFileUploadComplete: e4.onFileUploadComplete, onFileUploadProgress: e4.onFileUploadProgress, isChatThread: e4.isChatThread, priority: e4.priority };
            }, e3;
          }(), h = function() {
            function e3(e4) {
              var t3 = e4.type, r3 = e4.id || n2.P6.getUniqueId();
              this.id = r3, this.type = t3;
            }
            return e3.prototype.set = function(e4) {
              e4.file = e4.file || e4.fileInputId && n2.P6.getFileUrl(e4.fileInputId), this.body = { id: this.id, chatType: e4.chatType || "singleChat", type: "audio", file: e4.file, filename: e4.filename, length: e4.length, file_length: e4.file_length, fileInputId: e4.fileInputId, to: e4.to, from: e4.from, roomType: e4.roomType, success: e4.success, fail: e4.fail, ext: e4.ext, time: Date.now(), onFileUploadError: e4.onFileUploadError, onFileUploadComplete: e4.onFileUploadComplete, onFileUploadProgress: e4.onFileUploadProgress, body: e4.body, isChatThread: e4.isChatThread };
            }, e3.prototype.setChatType = function(e4) {
              return !!this.body && (this.body.chatType = e4, true);
            }, e3.prototype.setGroup = function(e4) {
              return !!this.body && (this.body.group = e4, true);
            }, e3.create = function(e4) {
              return { id: n2.P6.getUniqueId(), chatType: e4.chatType, type: "audio", filename: e4.filename, length: e4.length, file: e4.file, to: e4.to, from: e4.from || "", ext: e4.ext, time: Date.now(), onFileUploadError: e4.onFileUploadError, onFileUploadComplete: e4.onFileUploadComplete, onFileUploadProgress: e4.onFileUploadProgress, body: e4.body, file_length: e4.file_length, msgConfig: e4.msgConfig, isChatThread: e4.isChatThread, priority: e4.priority };
            }, e3;
          }(), d = function() {
            function e3(e4) {
              var t3 = e4.type, r3 = e4.id;
              this.id = r3, this.type = t3;
            }
            return e3.prototype.set = function(e4) {
              e4.file = e4.file || e4.fileInputId && n2.P6.getFileUrl(e4.fileInputId), this.body = { id: this.id, chatType: e4.chatType || "singleChat", type: "video", file: e4.file, filename: e4.filename, length: e4.length, file_length: e4.file_length, fileInputId: e4.fileInputId, to: e4.to, from: e4.from, roomType: e4.roomType, success: e4.success, fail: e4.fail, ext: e4.ext, time: Date.now(), apiUrl: e4.apiUrl, onFileUploadError: e4.onFileUploadError, onFileUploadComplete: e4.onFileUploadComplete, onFileUploadProgress: e4.onFileUploadProgress, body: e4.body, isChatThread: e4.isChatThread };
            }, e3.prototype.setChatType = function(e4) {
              return !!this.body && (this.body.chatType = e4, true);
            }, e3.prototype.setGroup = function(e4) {
              return !!this.body && (this.body.group = e4, true);
            }, e3.create = function(e4) {
              return { id: n2.P6.getUniqueId(), chatType: e4.chatType || "singleChat", type: "video", file: e4.file, filename: e4.filename, length: e4.length, file_length: e4.file_length, fileInputId: e4.fileInputId, to: e4.to, from: e4.from || "", ext: e4.ext, time: Date.now(), onFileUploadError: e4.onFileUploadError, onFileUploadComplete: e4.onFileUploadComplete, onFileUploadProgress: e4.onFileUploadProgress, body: e4.body, msgConfig: e4.msgConfig, isChatThread: e4.isChatThread, priority: e4.priority };
            }, e3;
          }(), f = function() {
            function e3(e4) {
              var t3 = e4.type, r3 = e4.id;
              this.id = r3, this.type = t3;
            }
            return e3.prototype.set = function(e4) {
              e4.file = e4.file || e4.fileInputId && n2.P6.getFileUrl(e4.fileInputId), this.body = { id: this.id, chatType: e4.chatType || "singleChat", type: "file", file: e4.file, filename: e4.filename, fileInputId: e4.fileInputId, to: e4.to, from: e4.from, roomType: e4.roomType, success: e4.success, fail: e4.fail, ext: e4.ext, time: Date.now(), onFileUploadError: e4.onFileUploadError, onFileUploadComplete: e4.onFileUploadComplete, onFileUploadProgress: e4.onFileUploadProgress, body: e4.body, isChatThread: e4.isChatThread };
            }, e3.prototype.setChatType = function(e4) {
              return !!this.body && (this.body.chatType = e4, true);
            }, e3.prototype.setGroup = function(e4) {
              return !!this.body && (this.body.group = e4, true);
            }, e3.create = function(e4) {
              return { id: n2.P6.getUniqueId(), chatType: e4.chatType || "singleChat", type: "file", file: e4.file, filename: e4.filename, fileInputId: e4.fileInputId, file_length: e4.file_length, to: e4.to, from: e4.from || "", ext: e4.ext, onFileUploadError: e4.onFileUploadError, onFileUploadComplete: e4.onFileUploadComplete, onFileUploadProgress: e4.onFileUploadProgress, body: e4.body, time: Date.now(), msgConfig: e4.msgConfig, isChatThread: e4.isChatThread, priority: e4.priority };
            }, e3;
          }(), m = function() {
            function e3(t3, r3) {
              return this.type = t3, this.id = r3 || n2.P6.getUniqueId(), e3.createOldMsg({ type: t3, id: this.id });
            }
            return e3.createOldMsg = function(e4) {
              switch (e4.type) {
                case "read":
                  return new o({ type: "read", id: e4.id });
                case "delivery":
                  return new i({ type: "delivery", id: e4.id });
                case "channel":
                  return new a({ type: "channel", id: e4.id });
                case "txt":
                  return new s({ type: "txt", id: e4.id });
                case "cmd":
                  return new c({ type: "cmd", id: e4.id });
                case "custom":
                  return new u({ type: "custom", id: e4.id });
                case "loc":
                  return new l({ type: "loc", id: e4.id });
                case "img":
                  return new p({ type: "img", id: e4.id });
                case "audio":
                  return new h({ type: "audio", id: e4.id });
                case "video":
                  return new d({ type: "video", id: e4.id });
                case "file":
                  return new f({ type: "file", id: e4.id });
              }
            }, e3.create = function(e4) {
              return (t3 = e4).type !== "txt" || "version" in t3 ? function(e5) {
                return e5.type === "img" && !("version" in e5);
              }(e4) ? p.create(e4) : function(e5) {
                return e5.type === "cmd" && !("version" in e5);
              }(e4) ? c.create(e4) : function(e5) {
                return e5.type === "file" && !("version" in e5);
              }(e4) ? f.create(e4) : function(e5) {
                return e5.type === "audio" && !("version" in e5);
              }(e4) ? h.create(e4) : function(e5) {
                return e5.type === "video" && !("version" in e5);
              }(e4) ? d.create(e4) : function(e5) {
                return e5.type === "custom" && !("version" in e5);
              }(e4) ? u.create(e4) : function(e5) {
                return e5.type === "loc" && !("version" in e5);
              }(e4) ? l.create(e4) : function(e5) {
                return e5.type === "channel" && !("version" in e5);
              }(e4) ? a.create(e4) : function(e5) {
                return e5.type === "delivery" && !("version" in e5);
              }(e4) ? i.create(e4) : function(e5) {
                return e5.type === "read" && !("version" in e5);
              }(e4) ? o.create(e4) : {} : s.create(e4);
              var t3;
            }, e3.prototype.set = function(e4) {
            }, e3;
          }();
        }, 4122: function(e2, t2, r2) {
          "use strict";
          var n2;
          r2.d(t2, { E: function() {
            return n2;
          } }), function(e3) {
            e3[e3.REQUEST_SUCCESS = 0] = "REQUEST_SUCCESS", e3[e3.REQUEST_TIMEOUT = -1] = "REQUEST_TIMEOUT", e3[e3.REQUEST_UNKNOWN = -2] = "REQUEST_UNKNOWN", e3[e3.REQUEST_PARAMETER_ERROR = -3] = "REQUEST_PARAMETER_ERROR", e3[e3.REQUEST_ABORT = -4] = "REQUEST_ABORT", e3[e3.WEBIM_CONNCTION_USER_NOT_ASSIGN_ERROR = 0] = "WEBIM_CONNCTION_USER_NOT_ASSIGN_ERROR", e3[e3.WEBIM_CONNCTION_OPEN_ERROR = 1] = "WEBIM_CONNCTION_OPEN_ERROR", e3[e3.WEBIM_CONNCTION_AUTH_ERROR = 2] = "WEBIM_CONNCTION_AUTH_ERROR", e3[e3.WEBIM_CONNCTION_OPEN_USERGRID_ERROR = 3] = "WEBIM_CONNCTION_OPEN_USERGRID_ERROR", e3[e3.WEBIM_CONNCTION_ATTACH_ERROR = 4] = "WEBIM_CONNCTION_ATTACH_ERROR", e3[e3.WEBIM_CONNCTION_ATTACH_USERGRID_ERROR = 5] = "WEBIM_CONNCTION_ATTACH_USERGRID_ERROR", e3[e3.WEBIM_CONNCTION_REOPEN_ERROR = 6] = "WEBIM_CONNCTION_REOPEN_ERROR", e3[e3.WEBIM_CONNCTION_SERVER_CLOSE_ERROR = 7] = "WEBIM_CONNCTION_SERVER_CLOSE_ERROR", e3[e3.WEBIM_CONNCTION_SERVER_ERROR = 8] = "WEBIM_CONNCTION_SERVER_ERROR", e3[e3.WEBIM_CONNCTION_IQ_ERROR = 9] = "WEBIM_CONNCTION_IQ_ERROR", e3[e3.WEBIM_CONNCTION_PING_ERROR = 10] = "WEBIM_CONNCTION_PING_ERROR", e3[e3.WEBIM_CONNCTION_NOTIFYVERSION_ERROR = 11] = "WEBIM_CONNCTION_NOTIFYVERSION_ERROR", e3[e3.WEBIM_CONNCTION_GETROSTER_ERROR = 12] = "WEBIM_CONNCTION_GETROSTER_ERROR", e3[e3.WEBIM_CONNCTION_CROSSDOMAIN_ERROR = 13] = "WEBIM_CONNCTION_CROSSDOMAIN_ERROR", e3[e3.WEBIM_CONNCTION_LISTENING_OUTOF_MAXRETRIES = 14] = "WEBIM_CONNCTION_LISTENING_OUTOF_MAXRETRIES", e3[e3.WEBIM_CONNCTION_RECEIVEMSG_CONTENTERROR = 15] = "WEBIM_CONNCTION_RECEIVEMSG_CONTENTERROR", e3[e3.WEBIM_CONNCTION_DISCONNECTED = 16] = "WEBIM_CONNCTION_DISCONNECTED", e3[e3.WEBIM_CONNCTION_AJAX_ERROR = 17] = "WEBIM_CONNCTION_AJAX_ERROR", e3[e3.WEBIM_CONNCTION_JOINROOM_ERROR = 18] = "WEBIM_CONNCTION_JOINROOM_ERROR", e3[e3.WEBIM_CONNCTION_GETROOM_ERROR = 19] = "WEBIM_CONNCTION_GETROOM_ERROR", e3[e3.WEBIM_CONNCTION_GETROOMINFO_ERROR = 20] = "WEBIM_CONNCTION_GETROOMINFO_ERROR", e3[e3.WEBIM_CONNCTION_GETROOMMEMBER_ERROR = 21] = "WEBIM_CONNCTION_GETROOMMEMBER_ERROR", e3[e3.WEBIM_CONNCTION_GETROOMOCCUPANTS_ERROR = 22] = "WEBIM_CONNCTION_GETROOMOCCUPANTS_ERROR", e3[e3.WEBIM_CONNCTION_LOAD_CHATROOM_ERROR = 23] = "WEBIM_CONNCTION_LOAD_CHATROOM_ERROR", e3[e3.WEBIM_CONNCTION_NOT_SUPPORT_CHATROOM_ERROR = 24] = "WEBIM_CONNCTION_NOT_SUPPORT_CHATROOM_ERROR", e3[e3.WEBIM_CONNCTION_JOINCHATROOM_ERROR = 25] = "WEBIM_CONNCTION_JOINCHATROOM_ERROR", e3[e3.WEBIM_CONNCTION_QUITCHATROOM_ERROR = 26] = "WEBIM_CONNCTION_QUITCHATROOM_ERROR", e3[e3.WEBIM_CONNCTION_APPKEY_NOT_ASSIGN_ERROR = 27] = "WEBIM_CONNCTION_APPKEY_NOT_ASSIGN_ERROR", e3[e3.WEBIM_CONNCTION_TOKEN_NOT_ASSIGN_ERROR = 28] = "WEBIM_CONNCTION_TOKEN_NOT_ASSIGN_ERROR", e3[e3.WEBIM_CONNCTION_SESSIONID_NOT_ASSIGN_ERROR = 29] = "WEBIM_CONNCTION_SESSIONID_NOT_ASSIGN_ERROR", e3[e3.WEBIM_CONNCTION_RID_NOT_ASSIGN_ERROR = 30] = "WEBIM_CONNCTION_RID_NOT_ASSIGN_ERROR", e3[e3.WEBIM_CONNCTION_CALLBACK_INNER_ERROR = 31] = "WEBIM_CONNCTION_CALLBACK_INNER_ERROR", e3[e3.WEBIM_CONNCTION_CLIENT_OFFLINE = 32] = "WEBIM_CONNCTION_CLIENT_OFFLINE", e3[e3.WEBIM_CONNCTION_CLIENT_LOGOUT = 33] = "WEBIM_CONNCTION_CLIENT_LOGOUT", e3[e3.WEBIM_CONNCTION_CLIENT_TOO_MUCH_ERROR = 34] = "WEBIM_CONNCTION_CLIENT_TOO_MUCH_ERROR", e3[e3.WEBIM_CONNECTION_ACCEPT_INVITATION_FROM_GROUP = 35] = "WEBIM_CONNECTION_ACCEPT_INVITATION_FROM_GROUP", e3[e3.WEBIM_CONNECTION_DECLINE_INVITATION_FROM_GROUP = 36] = "WEBIM_CONNECTION_DECLINE_INVITATION_FROM_GROUP", e3[e3.WEBIM_CONNECTION_ACCEPT_JOIN_GROUP = 37] = "WEBIM_CONNECTION_ACCEPT_JOIN_GROUP", e3[e3.WEBIM_CONNECTION_DECLINE_JOIN_GROUP = 38] = "WEBIM_CONNECTION_DECLINE_JOIN_GROUP", e3[e3.WEBIM_CONNECTION_CLOSED = 39] = "WEBIM_CONNECTION_CLOSED", e3[e3.WEBIM_CONNECTION_ERROR = 40] = "WEBIM_CONNECTION_ERROR", e3[e3.MAX_LIMIT = 50] = "MAX_LIMIT", e3[e3.MESSAGE_NOT_FOUND = 51] = "MESSAGE_NOT_FOUND", e3[e3.NO_PERMISSION = 52] = "NO_PERMISSION", e3[e3.OPERATION_UNSUPPORTED = 53] = "OPERATION_UNSUPPORTED", e3[e3.OPERATION_NOT_ALLOWED = 54] = "OPERATION_NOT_ALLOWED", e3[e3.WEBIM_UPLOADFILE_BROWSER_ERROR = 100] = "WEBIM_UPLOADFILE_BROWSER_ERROR", e3[e3.WEBIM_UPLOADFILE_ERROR = 101] = "WEBIM_UPLOADFILE_ERROR", e3[e3.WEBIM_UPLOADFILE_NO_LOGIN = 102] = "WEBIM_UPLOADFILE_NO_LOGIN", e3[e3.WEBIM_UPLOADFILE_NO_FILE = 103] = "WEBIM_UPLOADFILE_NO_FILE", e3[e3.WEBIM_DOWNLOADFILE_ERROR = 200] = "WEBIM_DOWNLOADFILE_ERROR", e3[e3.WEBIM_DOWNLOADFILE_NO_LOGIN = 201] = "WEBIM_DOWNLOADFILE_NO_LOGIN", e3[e3.WEBIM_DOWNLOADFILE_BROWSER_ERROR = 202] = "WEBIM_DOWNLOADFILE_BROWSER_ERROR", e3[e3.USER_NOT_FOUND = 204] = "USER_NOT_FOUND", e3[e3.MESSAGE_PARAMETER_ERROR = 205] = "MESSAGE_PARAMETER_ERROR", e3[e3.WEBIM_CONNCTION_USER_LOGIN_ANOTHER_DEVICE = 206] = "WEBIM_CONNCTION_USER_LOGIN_ANOTHER_DEVICE", e3[e3.WEBIM_CONNCTION_USER_REMOVED = 207] = "WEBIM_CONNCTION_USER_REMOVED", e3[e3.WEBIM_CONNCTION_USER_KICKED_BY_CHANGE_PASSWORD = 216] = "WEBIM_CONNCTION_USER_KICKED_BY_CHANGE_PASSWORD", e3[e3.WEBIM_CONNCTION_USER_KICKED_BY_OTHER_DEVICE = 217] = "WEBIM_CONNCTION_USER_KICKED_BY_OTHER_DEVICE", e3[e3.USER_MUTED_BY_ADMIN = 219] = "USER_MUTED_BY_ADMIN", e3[e3.USER_NOT_FRIEND = 221] = "USER_NOT_FRIEND", e3[e3.WEBIM_MESSAGE_REC_TEXT = 300] = "WEBIM_MESSAGE_REC_TEXT", e3[e3.WEBIM_MESSAGE_REC_TEXT_ERROR = 301] = "WEBIM_MESSAGE_REC_TEXT_ERROR", e3[e3.WEBIM_MESSAGE_REC_EMOTION = 302] = "WEBIM_MESSAGE_REC_EMOTION", e3[e3.WEBIM_MESSAGE_REC_PHOTO = 303] = "WEBIM_MESSAGE_REC_PHOTO", e3[e3.WEBIM_MESSAGE_REC_AUDIO = 304] = "WEBIM_MESSAGE_REC_AUDIO", e3[e3.WEBIM_MESSAGE_REC_AUDIO_FILE = 305] = "WEBIM_MESSAGE_REC_AUDIO_FILE", e3[e3.WEBIM_MESSAGE_REC_VEDIO = 306] = "WEBIM_MESSAGE_REC_VEDIO", e3[e3.WEBIM_MESSAGE_REC_VEDIO_FILE = 307] = "WEBIM_MESSAGE_REC_VEDIO_FILE", e3[e3.WEBIM_MESSAGE_REC_FILE = 308] = "WEBIM_MESSAGE_REC_FILE", e3[e3.WEBIM_MESSAGE_SED_TEXT = 309] = "WEBIM_MESSAGE_SED_TEXT", e3[e3.WEBIM_MESSAGE_SED_EMOTION = 310] = "WEBIM_MESSAGE_SED_EMOTION", e3[e3.WEBIM_MESSAGE_SED_PHOTO = 311] = "WEBIM_MESSAGE_SED_PHOTO", e3[e3.WEBIM_MESSAGE_SED_AUDIO = 312] = "WEBIM_MESSAGE_SED_AUDIO", e3[e3.WEBIM_MESSAGE_SED_AUDIO_FILE = 313] = "WEBIM_MESSAGE_SED_AUDIO_FILE", e3[e3.WEBIM_MESSAGE_SED_VEDIO = 314] = "WEBIM_MESSAGE_SED_VEDIO", e3[e3.WEBIM_MESSAGE_SED_VEDIO_FILE = 315] = "WEBIM_MESSAGE_SED_VEDIO_FILE", e3[e3.WEBIM_MESSAGE_SED_FILE = 316] = "WEBIM_MESSAGE_SED_FILE", e3[e3.WEBIM_MESSAGE_SED_ERROR = 317] = "WEBIM_MESSAGE_SED_ERROR", e3[e3.STATUS_INIT = 400] = "STATUS_INIT", e3[e3.STATUS_DOLOGIN_USERGRID = 401] = "STATUS_DOLOGIN_USERGRID", e3[e3.STATUS_DOLOGIN_IM = 402] = "STATUS_DOLOGIN_IM", e3[e3.STATUS_OPENED = 403] = "STATUS_OPENED", e3[e3.STATUS_CLOSING = 404] = "STATUS_CLOSING", e3[e3.STATUS_CLOSED = 405] = "STATUS_CLOSED", e3[e3.STATUS_ERROR = 406] = "STATUS_ERROR", e3[e3.SERVER_BUSY = 500] = "SERVER_BUSY", e3[e3.MESSAGE_INCLUDE_ILLEGAL_CONTENT = 501] = "MESSAGE_INCLUDE_ILLEGAL_CONTENT", e3[e3.MESSAGE_EXTERNAL_LOGIC_BLOCKED = 502] = "MESSAGE_EXTERNAL_LOGIC_BLOCKED", e3[e3.SERVER_UNKNOWN_ERROR = 503] = "SERVER_UNKNOWN_ERROR", e3[e3.MESSAGE_RECALL_TIME_LIMIT = 504] = "MESSAGE_RECALL_TIME_LIMIT", e3[e3.SERVICE_NOT_ENABLED = 505] = "SERVICE_NOT_ENABLED", e3[e3.SERVICE_NOT_ALLOW_MESSAGING = 506] = "SERVICE_NOT_ALLOW_MESSAGING", e3[e3.SERVICE_NOT_ALLOW_MESSAGING_MUTE = 507] = "SERVICE_NOT_ALLOW_MESSAGING_MUTE", e3[e3.MESSAGE_MODERATION_BLOCKED = 508] = "MESSAGE_MODERATION_BLOCKED", e3[e3.MESSAGE_CURRENT_LIMITING = 509] = "MESSAGE_CURRENT_LIMITING", e3[e3.MESSAGE_WEBSOCKET_DISCONNECTED = 510] = "MESSAGE_WEBSOCKET_DISCONNECTED", e3[e3.GROUP_NOT_EXIST = 605] = "GROUP_NOT_EXIST", e3[e3.GROUP_NOT_JOINED = 602] = "GROUP_NOT_JOINED", e3[e3.GROUP_MEMBERS_FULL = 606] = "GROUP_MEMBERS_FULL", e3[e3.PERMISSION_DENIED = 603] = "PERMISSION_DENIED", e3[e3.WEBIM_LOAD_MSG_ERROR = 604] = "WEBIM_LOAD_MSG_ERROR", e3[e3.GROUP_ALREADY_JOINED = 601] = "GROUP_ALREADY_JOINED", e3[e3.GROUP_MEMBERS_LIMIT = 607] = "GROUP_MEMBERS_LIMIT", e3[e3.GROUP_IS_DISABLED = 608] = "GROUP_IS_DISABLED", e3[e3.REST_PARAMS_STATUS = 700] = "REST_PARAMS_STATUS", e3[e3.CHATROOM_NOT_JOINED = 702] = "CHATROOM_NOT_JOINED", e3[e3.CHATROOM_MEMBERS_FULL = 704] = "CHATROOM_MEMBERS_FULL", e3[e3.CHATROOM_NOT_EXIST = 705] = "CHATROOM_NOT_EXIST", e3[e3.SDK_RUNTIME_ERROR = 999] = "SDK_RUNTIME_ERROR", e3[e3.PRESENCE_PARAM_EXCEED = 1100] = "PRESENCE_PARAM_EXCEED", e3[e3.REACTION_ALREADY_ADDED = 1101] = "REACTION_ALREADY_ADDED", e3[e3.REACTION_CREATING = 1102] = "REACTION_CREATING", e3[e3.REACTION_OPERATION_IS_ILLEGAL = 1103] = "REACTION_OPERATION_IS_ILLEGAL", e3[e3.TRANSLATION_NOT_VALID = 1200] = "TRANSLATION_NOT_VALID", e3[e3.TRANSLATION_TEXT_TOO_LONG = 1201] = "TRANSLATION_TEXT_TOO_LONG", e3[e3.TRANSLATION_FAILED = 1204] = "TRANSLATION_FAILED", e3[e3.THREAD_NOT_EXIST = 1300] = "THREAD_NOT_EXIST", e3[e3.THREAD_ALREADY_EXIST = 1301] = "THREAD_ALREADY_EXIST";
          }(n2 || (n2 = {}));
        }, 3038: function(e2, t2, r2) {
          "use strict";
          r2.d(t2, { iw: function() {
            return m;
          }, hj: function() {
            return l;
          }, LR: function() {
            return T;
          }, cT: function() {
            return v;
          }, P6: function() {
            return O;
          } }), r2(7758), r2(7858), r2(8826), r2(9894), r2(3940), r2(2397), r2(739), r2(4286), r2(5645), r2(6162), r2(796), r2(2835), r2(1884), r2(4333), r2(9900), r2(2570), r2(75);
          var n2 = r2(4122), o = function() {
            return o = Object.assign || function(e3) {
              for (var t3, r3 = 1, n3 = arguments.length; r3 < n3; r3++)
                for (var o2 in t3 = arguments[r3])
                  Object.prototype.hasOwnProperty.call(t3, o2) && (e3[o2] = t3[o2]);
              return e3;
            }, o.apply(this, arguments);
          }, i = r2(8669), a = r2(2558), s = r2(6447), c = function() {
            return c = Object.assign || function(e3) {
              for (var t3, r3 = 1, n3 = arguments.length; r3 < n3; r3++)
                for (var o2 in t3 = arguments[r3])
                  Object.prototype.hasOwnProperty.call(t3, o2) && (e3[o2] = t3[o2]);
              return e3;
            }, c.apply(this, arguments);
          }, u = function() {
          };
          function l(e3, t3) {
            var r3, a2 = this;
            return y().platform === m.WEB ? new Promise(function(t4, i2) {
              var a3 = e3.dataType || "text", c2 = e3.success || u, l2 = e3.error || u, p2 = new XMLHttpRequest();
              p2.ontimeout = function() {
                i2({ type: n2.E.REQUEST_TIMEOUT, message: "Request Timeout", errorType: "timeout_error", xhr: p2 });
              }, p2.onerror = function() {
                i2({ type: n2.E.REQUEST_UNKNOWN, message: "Request Unknow Error", errorType: "onerror", xhr: p2 });
              }, p2.onabort = function() {
                i2({ type: n2.E.REQUEST_ABORT, message: "Request Abort", errorType: "onabort", xhr: p2 });
              }, p2.onreadystatechange = function() {
                if (p2.readyState === 4) {
                  var e4 = new Date().getTime() - r3, u2 = p2.status || 0, h3 = { elapse: e4, httpCode: u2 };
                  if (u2 === 200) {
                    O.ajaxUnconventionalErrorTimes = 0;
                    try {
                      switch (a3) {
                        case "text":
                          return c2(p2.responseText), void t4(p2.responseText);
                        case "json":
                          var d3 = JSON.parse(p2.responseText);
                          return d3.extraInfo = h3, c2(d3), void t4(d3);
                        case "xml":
                          return p2.responseXML && p2.responseXML.documentElement ? (c2(p2.responseXML.documentElement), void t4(p2.responseXML.documentElement)) : (l2({ type: n2.E.WEBIM_CONNCTION_AJAX_ERROR, data: p2.responseText, message: "XHR.responseXML is null or XHR.responseXML.documentElement is null" }), void i2({ type: n2.E.WEBIM_CONNCTION_AJAX_ERROR, data: p2.responseText, message: "XHR.responseXML is null or XHR.responseXML.documentElement is null" }));
                        default:
                          l2({ type: n2.E.WEBIM_CONNCTION_AJAX_ERROR, data: p2.responseText, message: "Invalid dataType" }), i2({ type: n2.E.WEBIM_CONNCTION_AJAX_ERROR, data: p2.responseText, message: "Invalid dataType" });
                      }
                      return t4(p2.response || p2.responseText), void c2(p2.response || p2.responseText, p2);
                    } catch (e5) {
                      i2(e5);
                    }
                    return;
                  }
                  [400, 401, 403, 404, 429, 500, 503].includes(u2) || (s.kg.debug("rest api request fail status:", u2), O.ajaxUnconventionalErrorTimes++), function(e5, t5, r4, i3) {
                    var a4, s2, c3, u3, l3, p3, h4, d4, f3, m3, g3, y3, E2, v2, T2, _2, O2, R, I, S, A = e5.response;
                    A && typeof A == "string" && (A = JSON.parse(A));
                    var N = e5.status, C = { elapse: i3, httpCode: N, errDesc: A == null ? void 0 : A.error_description };
                    if (N === 400) {
                      if (A.error_code === 40002)
                        return void t5({ type: n2.E.THREAD_ALREADY_EXIST, message: A == null ? void 0 : A.error_description, extraInfo: C });
                      if (A.error_code === 40009)
                        return void t5({ type: n2.E.OPERATION_UNSUPPORTED, message: A == null ? void 0 : A.error_description, extraInfo: C });
                      if (A.error_code === 60010)
                        return void t5({ type: n2.E.NO_PERMISSION, message: A == null ? void 0 : A.desc });
                      if (A.error_code === 60011)
                        return void t5({ type: n2.E.CHATROOM_NOT_JOINED, message: A == null ? void 0 : A.desc });
                      if (A.error_code === 60012)
                        return void t5({ type: n2.E.MAX_LIMIT, message: A == null ? void 0 : A.desc });
                      if ((a4 = A.error_description) === null || a4 === void 0 ? void 0 : a4.includes("are not members of this group"))
                        return ((s2 = e5.responseURL) === null || s2 === void 0 ? void 0 : s2.includes("chatgroups")) ? t5({ type: n2.E.GROUP_NOT_JOINED, data: e5.response || e5.responseText, message: A.error_description, extraInfo: C }) : t5({ type: n2.E.CHATROOM_NOT_JOINED, data: e5.response || e5.responseText, message: A.error_description, extraInfo: C }), void r4({ type: n2.E.WEBIM_CONNCTION_AJAX_ERROR, message: A == null ? void 0 : A.error_description, data: e5.responseText, extraInfo: C });
                      if ((A == null ? void 0 : A.result) === "the app not open presence")
                        return void t5({ type: n2.E.SERVICE_NOT_ENABLED, message: A == null ? void 0 : A.result, extraInfo: C });
                      switch (A == null ? void 0 : A.error_description) {
                        case "the user is already operation this message":
                          t5({ type: n2.E.REACTION_ALREADY_ADDED, message: A == null ? void 0 : A.error_description, extraInfo: C });
                          break;
                        case "The quantity has exceeded the limit!":
                          t5({ type: n2.E.MAX_LIMIT, message: A == null ? void 0 : A.error_description, extraInfo: C });
                          break;
                        case "The user not in this group!":
                          t5({ type: n2.E.GROUP_NOT_JOINED, message: A == null ? void 0 : A.error_description, extraInfo: C });
                          break;
                        case "the user operation is illegal!":
                          t5({ type: n2.E.REACTION_OPERATION_IS_ILLEGAL, message: A == null ? void 0 : A.error_description, extraInfo: C });
                          break;
                        case "this appKey is not open reaction service!":
                        case "this appKey not open message roaming":
                          t5({ type: n2.E.SERVICE_NOT_ENABLED, message: A == null ? void 0 : A.error_description, extraInfo: C });
                          break;
                        case "this message is creating reaction, please try again.":
                          t5({ type: n2.E.REACTION_CREATING, message: A == null ? void 0 : A.error_description, extraInfo: C });
                          break;
                        case "groupId can not be null!":
                          t5({ type: n2.E.GROUP_NOT_EXIST, message: A == null ? void 0 : A.error_description, extraInfo: C });
                          break;
                        case "The input text is too long.":
                          t5({ type: n2.E.TRANSLATION_TEXT_TOO_LONG, message: A == null ? void 0 : A.error_description, extraInfo: C });
                          break;
                        case "The target language is not valid.":
                          t5({ type: n2.E.TRANSLATION_NOT_VALID, message: A == null ? void 0 : A.error_description, extraInfo: C });
                          break;
                        case "report failed, get message by id failed":
                          t5({ type: n2.E.MESSAGE_NOT_FOUND, message: A == null ? void 0 : A.error_description, extraInfo: C });
                          break;
                        case "ext is too big ":
                          t5({ type: n2.E.PRESENCE_PARAM_EXCEED, message: A == null ? void 0 : A.error_description, extraInfo: C });
                          break;
                        case "Request body not readable.Please check content type is correct!":
                          t5({ type: n2.E.REQUEST_PARAMETER_ERROR, message: A == null ? void 0 : A.error_description, extraInfo: C });
                          break;
                        default:
                          t5({ type: n2.E.WEBIM_CONNCTION_AJAX_ERROR, message: A == null ? void 0 : A.error_description, data: e5.responseText, extraInfo: C }), r4({ type: n2.E.WEBIM_CONNCTION_AJAX_ERROR, message: A == null ? void 0 : A.error_description, data: e5.responseText, extraInfo: C });
                      }
                    } else if (N === 401)
                      A.error_code === 40001 || A.error_description === "Unable to authenticate (OAuth)" ? t5({ type: n2.E.NO_PERMISSION, message: A == null ? void 0 : A.error_description, extraInfo: C }) : (r4({ type: n2.E.WEBIM_CONNCTION_AJAX_ERROR, data: e5.responseText, message: e5.responseText, extraInfo: C }), t5({ type: n2.E.WEBIM_CONNCTION_AJAX_ERROR, data: e5.responseText, message: e5.responseText, extraInfo: C }));
                    else if (N === 403)
                      A.error_code === 4e4 ? t5({ type: n2.E.SERVICE_NOT_ENABLED, message: A == null ? void 0 : A.error_description, extraInfo: C }) : A.error_code === 40003 || A.error_code === 40004 ? t5({ type: n2.E.THREAD_ALREADY_EXIST, message: A == null ? void 0 : A.error_description, extraInfo: C }) : (A.error_code === 40005 || A.error_code === 40007) && t5({ type: n2.E.MAX_LIMIT, message: A == null ? void 0 : A.error_description, extraInfo: C }), A.error_description === "group member list is full!" ? ((c3 = e5.responseURL) === null || c3 === void 0 ? void 0 : c3.includes("chatgroups")) ? t5({ type: n2.E.GROUP_MEMBERS_FULL, data: e5.response || e5.responseText, message: A.error_description, extraInfo: C }) : t5({ type: n2.E.CHATROOM_MEMBERS_FULL, data: e5.response || e5.responseText, message: A.error_description, extraInfo: C }) : ((u3 = A.error_description) === null || u3 === void 0 ? void 0 : u3.includes(A.error_description.includes("already in group"))) ? ((l3 = e5.responseURL) === null || l3 === void 0 ? void 0 : l3.includes("chatgroups")) && t5({ type: n2.E.GROUP_ALREADY_JOINED, data: e5.response || e5.responseText, message: A.error_description, extraInfo: C }) : ((p3 = A.error_description) === null || p3 === void 0 ? void 0 : p3.includes("are not members of this group")) ? ((h4 = e5.responseURL) === null || h4 === void 0 ? void 0 : h4.includes("chatgroups")) ? t5({ type: n2.E.GROUP_NOT_JOINED, data: e5.response || e5.responseText, message: A.error_description, extraInfo: C }) : t5({ type: n2.E.CHATROOM_NOT_JOINED, data: e5.response || e5.responseText, message: A.error_description, extraInfo: C }) : ((d4 = A.error_description) === null || d4 === void 0 ? void 0 : d4.includes("service not open!")) || ((f3 = A.error_description) === null || f3 === void 0 ? void 0 : f3.includes("message report not open")) || ((m3 = A.error_description) === null || m3 === void 0 ? void 0 : m3.includes("messageroaming function not open")) ? t5({ type: n2.E.SERVICE_NOT_ENABLED, data: e5.response || e5.responseText, message: A.error_description, extraInfo: C }) : ((g3 = A.error_description) === null || g3 === void 0 ? void 0 : g3.includes("members size is greater than max user size !")) ? t5({ type: n2.E.GROUP_MEMBERS_LIMIT, data: e5.response || e5.responseText, message: A.error_description, extraInfo: C }) : ((y3 = A.error_description) === null || y3 === void 0 ? void 0 : y3.includes("can not operate this group, reason: group is disabled")) ? t5({ type: n2.E.GROUP_IS_DISABLED, data: e5.response || e5.responseText, message: A.error_description, extraInfo: C }) : t5({ type: n2.E.PERMISSION_DENIED, data: e5.response || e5.responseText, message: "permission denied", extraInfo: o(o({}, C), { errDesc: "permission denied" }) }), r4({ type: n2.E.WEBIM_CONNCTION_AJAX_ERROR, data: e5.responseText, message: e5.responseText, extraInfo: C });
                    else if (N === 404)
                      A.error_code === 40011 ? t5({ type: n2.E.THREAD_NOT_EXIST, message: A == null ? void 0 : A.error_description, extraInfo: C }) : A.error_code === 40012 && t5({ type: n2.E.NO_PERMISSION, message: A == null ? void 0 : A.error_description, extraInfo: C }), ((E2 = A.error_description) === null || E2 === void 0 ? void 0 : E2.includes("do not find this group")) || ((v2 = A.error_description) === null || v2 === void 0 ? void 0 : v2.includes("does not exist")) ? ((T2 = e5.responseURL) === null || T2 === void 0 ? void 0 : T2.includes("chatgroups")) ? t5({ type: n2.E.GROUP_NOT_EXIST, data: e5.response || e5.responseText, message: "The chat room dose not exist.", extraInfo: o(o({}, C), { errDesc: "The chat room dose not exist." }) }) : t5({ type: n2.E.CHATROOM_NOT_EXIST, data: e5.response || e5.responseText, message: "The chat room dose not exist.", extraInfo: o(o({}, C), { errDesc: "The chat room dose not exist." }) }) : ((_2 = A.error_description) === null || _2 === void 0 ? void 0 : _2.includes("username")) && ((O2 = A.error_description) === null || O2 === void 0 ? void 0 : O2.includes("doesn't exist!'")) || ((R = A.error_description) === null || R === void 0 ? void 0 : R.includes("user not found")) ? t5({ type: n2.E.USER_NOT_FOUND, data: e5.response || e5.responseText, message: A.error_description, extraInfo: C }) : t5({ type: n2.E.WEBIM_CONNCTION_AJAX_ERROR, data: e5.response || e5.responseText, message: e5.responseText, extraInfo: C }), r4({ type: n2.E.WEBIM_CONNCTION_AJAX_ERROR, data: e5.response || e5.responseText, message: e5.responseText, extraInfo: C });
                    else if (N === 429 || N === 503) {
                      if ((I = A.error_description) === null || I === void 0 ? void 0 : I.includes("The request has reached the maximum limit"))
                        return void t5({ type: n2.E.MAX_LIMIT, message: e5.responseText, extraInfo: C });
                      t5({ type: n2.E.SERVER_BUSY, data: e5.response || e5.responseText, message: "Server is busy.", extraInfo: o(o({}, C), { errDesc: "Server is busy." }) }), r4({ type: n2.E.WEBIM_CONNCTION_AJAX_ERROR, data: e5.responseText, message: "Server is busy.", extraInfo: o(o({}, C), { errDesc: "Server is busy." }) });
                    } else if (N === 500) {
                      if ((A.error_code === 40006 || A.error_code === 40008 || A.error_code === 40010) && t5({ type: n2.E.SERVER_UNKNOWN_ERROR, message: A == null ? void 0 : A.error_description, extraInfo: C }), (S = A.error_description) === null || S === void 0 ? void 0 : S.includes("translte failed!"))
                        return void t5({ type: n2.E.TRANSLATION_FAILED, message: e5.responseText, extraInfo: C });
                      t5({ type: n2.E.WEBIM_CONNCTION_AJAX_ERROR, data: e5.responseText, message: "", extraInfo: C }), r4({ type: n2.E.WEBIM_CONNCTION_AJAX_ERROR, data: e5.responseText, message: "", extraInfo: C });
                    } else
                      t5({ type: n2.E.WEBIM_CONNCTION_AJAX_ERROR, data: e5.responseText, message: e5.responseText, extraInfo: o(o({}, C), { errDesc: "ajax error" }) }), r4({ type: n2.E.WEBIM_CONNCTION_AJAX_ERROR, data: e5.responseText, message: e5.responseText, extraInfo: o(o({}, C), { errDesc: "ajax error" }) });
                  }(p2, i2, l2, e4);
                }
                p2.readyState === 0 && (l2({ type: n2.E.WEBIM_CONNCTION_AJAX_ERROR, data: p2.responseText, message: "Request not initialized" }), i2({ type: n2.E.WEBIM_CONNCTION_AJAX_ERROR, data: p2.responseText, message: "Request not initialized" }));
              }, e3.responseType && p2.responseType && (p2.responseType = e3.responseType), e3.mimeType && p2.overrideMimeType(e3.mimeType);
              var h2 = e3.type || "POST", d2 = e3.data || null, f2 = "";
              if (h2.toLowerCase() === "get" && d2) {
                for (var m2 in d2)
                  d2.hasOwnProperty(m2) && (f2 += m2 + "=" + d2[m2] + "&");
                f2 = f2 ? f2.slice(0, -1) : f2, e3.url += (e3.url.indexOf("?") > 0 ? "&" : "?") + (f2 ? f2 + "&" : f2) + "_v=" + new Date().getTime(), d2 = null, f2 = "";
              }
              r3 = new Date().getTime(), p2.open(h2, e3.url);
              var g2 = e3.headers || {};
              for (var y2 in g2["Content-Type"] || (g2["Content-Type"] = "application/json"), g2)
                g2.hasOwnProperty(y2) && p2.setRequestHeader(y2, g2[y2]);
              p2.send(d2);
            }).then(function(r4) {
              return a2.dataReport && t3 && t3 !== i.fI.SDK_INTERNAL && a2.dataReport.geOperateFun({ operationName: t3 })({ isEndApi: true, data: c({ isSuccess: 1, requestUrl: e3.url, requestName: t3, requestMethod: e3.type }, _(r4.extraInfo)) }), t3 !== i.fI.SDK_INTERNAL && delete r4.extraInfo, p(r4) === "Object" ? c(c({}, r4), { type: n2.E.REQUEST_SUCCESS }) : { data: r4, type: n2.E.REQUEST_SUCCESS };
            }).catch(function(r4) {
              throw a2.dataReport && t3 && t3 !== i.fI.SDK_INTERNAL && a2.dataReport.geOperateFun({ operationName: t3 })({ isEndApi: true, data: c({ isSuccess: 0, requestUrl: e3.url, requestName: t3, requestMethod: e3.type }, _(r4.extraInfo)) }), t3 !== i.fI.SDK_INTERNAL && delete r4.extraInfo, r4;
            }) : h.call(this, e3);
          }
          function p(e3) {
            return Object.prototype.toString.call(e3).slice(8, -1);
          }
          function h(e3, t3) {
            var r3 = this;
            return new Promise(function(t4, r4) {
              var n3 = e3.success || u, o2 = e3.error || u, i2 = e3.type || "POST", s2 = e3.data || null, c2 = "", l2 = new Date().getTime(), p2 = O.getEnvInfo();
              if (i2.toLowerCase() === "get" && s2) {
                for (var h2 in s2)
                  s2.hasOwnProperty(h2) && (c2 += h2 + "=" + s2[h2] + "&");
                c2 = c2 ? c2.slice(0, -1) : c2, e3.url += (e3.url.indexOf("?") > 0 ? "&" : "?") + (c2 ? c2 + "&" : c2) + "_v=" + new Date().getTime(), s2 = null, c2 = "";
              }
              var d2 = { url: e3.url, data: e3.data, method: i2, headers: {}, success: function(e4) {
                var i3, a2, s3, c3, u2, p3 = { elapse: new Date().getTime() - l2, httpCode: Number(((i3 = e4.statusCode) === null || i3 === void 0 ? void 0 : i3.toString()) || ((a2 = e4.status) === null || a2 === void 0 ? void 0 : a2.toString())), errDesc: ((s3 = e4 == null ? void 0 : e4.data) === null || s3 === void 0 ? void 0 : s3.error_description) || "" };
                if (((c3 = e4.statusCode) === null || c3 === void 0 ? void 0 : c3.toString()) === "200" || ((u2 = e4.status) === null || u2 === void 0 ? void 0 : u2.toString()) === "200") {
                  e4.data.extraInfo = p3;
                  var h3 = e4.data;
                  n3(h3), t4(h3);
                } else
                  e4.extraInfo = p3, o2(h3 = e4), r4(h3);
              }, complete: function() {
              }, fail: function(e4) {
                var t5 = { elapse: new Date().getTime() - l2, httpCode: a.Tp, errDesc: "request:fail" };
                e4.extraInfo = t5, e4.data = { error: "request:fail", error_description: "request:fail" }, o2(e4), r4(e4);
              } };
              if (p2.platform === "zfb" || p2.platform === "dd" ? d2.headers = e3.headers : d2.header = e3.headers, p2.platform === "dd")
                return dd.httpRequest(d2);
              p2.global.request(d2);
            }).then(function(o2) {
              return r3.dataReport && t3 && t3 !== i.fI.SDK_INTERNAL && r3.dataReport.geOperateFun({ operationName: t3 })({ isEndApi: true, data: c({ isSuccess: 1, requestUrl: e3.url, requestName: t3, requestMethod: e3.type }, _(o2.extraInfo)) }), t3 !== i.fI.SDK_INTERNAL && delete o2.extraInfo, p(o2) === "Object" ? c(c({}, o2), { type: n2.E.REQUEST_SUCCESS }) : { data: o2, type: n2.E.REQUEST_SUCCESS };
            }).catch(function(n3) {
              throw r3.dataReport && t3 && t3 !== i.fI.SDK_INTERNAL && r3.dataReport.geOperateFun({ operationName: t3 })({ isEndApi: true, data: c({ isSuccess: 0, requestUrl: e3.url, requestName: t3, requestMethod: e3.type }, _(n3.extraInfo)) }), t3 !== i.fI.SDK_INTERNAL && delete n3.extraInfo, n3;
            });
          }
          var d, f, m, g = (d = function(e3, t3) {
            var r3 = y();
            if (r3.platform !== m.WEB) {
              var n3 = r3.global, o2 = function(r4) {
                r4.isConnected ? e3() : t3();
              };
              n3.offNetworkStatusChange && n3.offNetworkStatusChange(o2), n3.onNetworkStatusChange && n3.onNetworkStatusChange(o2);
            } else
              typeof addEventListener != "undefined" && (window.addEventListener("online", e3), window.addEventListener("offline", t3));
          }, function() {
            for (var e3 = [], t3 = 0; t3 < arguments.length; t3++)
              e3[t3] = arguments[t3];
            if (!d)
              return f;
            f = d.apply(void 0, e3), d = null;
          });
          function y() {
            return typeof swan != "undefined" && E(swan) ? { platform: m.BAIDU, global: swan } : typeof tt != "undefined" && E(tt) ? { platform: m.TT, global: tt } : typeof dd != "undefined" && E(dd) ? { platform: m.DD, global: dd } : typeof my != "undefined" && E(my) ? { platform: m.ZFB, global: my } : typeof wx != "undefined" && E(wx) ? { platform: m.WX, global: wx } : typeof uni != "undefined" && E(uni) ? { platform: m.UNI, global: uni } : typeof window != "undefined" && window.WebSocket ? { platform: m.WEB, global: window } : { platform: m.NODE, global: r2.g || {} };
          }
          function E(e3) {
            for (var t3 = ["canIUse", "getSystemInfo"], r3 = 0, n3 = t3.length; r3 < n3; r3++)
              if (!e3[t3[r3]])
                return false;
            return true;
          }
          function v(e3, t3) {
            var r3, o2, a2 = this, s2 = new Date().getTime(), c2 = e3.accessToken;
            if (c2) {
              var l2 = e3.appKey, p2 = [], h2 = "", d2 = "";
              if (l2 && (h2 = (p2 = l2.split("#"))[0], d2 = p2[1]), h2 || d2) {
                var f2 = e3.apiUrl, m2 = e3.uploadUrl || f2 + "/" + h2 + "/" + d2 + "/chatfiles";
                if (((o2 = (r3 = e3 == null ? void 0 : e3.file) === null || r3 === void 0 ? void 0 : r3.data) === null || o2 === void 0 ? void 0 : o2.size) <= 0)
                  e3.onFileUploadError && e3.onFileUploadError({ type: n2.E.WEBIM_UPLOADFILE_ERROR, message: "fileSize must be greater than 0" });
                else {
                  var g2 = new XMLHttpRequest();
                  g2.upload && g2.upload.addEventListener("progress", e3.onFileUploadProgress || u, false), g2.addEventListener("abort", e3.onFileUploadCanceled || u, false), g2.addEventListener("error", function(e4) {
                    E2({ type: n2.E.WEBIM_UPLOADFILE_ERROR, data: g2 });
                  }, false), g2.addEventListener("load", function(r4) {
                    try {
                      var o3 = JSON.parse(g2.responseText);
                      if (g2.status === 400)
                        return E2({ type: n2.E.WEBIM_UPLOADFILE_ERROR, data: o3 }), false;
                      try {
                        !function(r5) {
                          var n3 = new Date().getTime() - s2;
                          a2.dataReport && t3 && [i.fI.UPLOAD_MSG_ATTACH, i.fI.UPLOAD_CHATROOM_FILE, i.fI.UPLOAD_GROUP_FILE].includes(t3) && a2.dataReport.geOperateFun({ operationName: t3 })({ isEndApi: true, data: { isSuccess: (r5 == null ? void 0 : r5.error) ? 0 : 1, requestMethod: "POST", requestName: t3, requestElapse: n3, requestUrl: m2, code: g2.status, codeDesc: (r5 == null ? void 0 : r5.error_description) || "" } }), e3.onFileUploadComplete && e3.onFileUploadComplete(r5);
                        }(o3);
                      } catch (r5) {
                        E2({ type: n2.E.WEBIM_CONNCTION_CALLBACK_INNER_ERROR, data: r5 });
                      }
                    } catch (r5) {
                      E2({ type: n2.E.WEBIM_UPLOADFILE_ERROR, data: g2.responseText });
                    }
                  }, false), g2.open("POST", m2), g2.setRequestHeader("restrict-access", "true"), g2.setRequestHeader("Accept", "*/*"), g2.setRequestHeader("Authorization", "Bearer " + c2);
                  var y2 = new FormData();
                  y2.append("file", e3.file.data), g2.send(y2);
                }
              } else
                e3.onFileUploadError && e3.onFileUploadError({ type: n2.E.WEBIM_UPLOADFILE_ERROR, message: "AppKey illegal" });
            } else
              e3.onFileUploadError && e3.onFileUploadError({ type: n2.E.WEBIM_UPLOADFILE_NO_LOGIN, message: "AccessToken cannot be empty" });
            function E2(r4) {
              var n3 = new Date().getTime() - s2;
              a2.dataReport && t3 && [i.fI.UPLOAD_MSG_ATTACH, i.fI.UPLOAD_CHATROOM_FILE, i.fI.UPLOAD_GROUP_FILE].includes(t3) && a2.dataReport.geOperateFun({ operationName: t3 })({ isEndApi: true, data: { isSuccess: 0, requestMethod: "POST", requestName: t3, requestElapse: n3, requestUrl: m2, code: (g2 == null ? void 0 : g2.status) || 0, codeDesc: "upload file error" } }), e3.onFileUploadError && e3.onFileUploadError(r4);
            }
          }
          function T(e3, t3) {
            e3.onFileDownloadComplete = e3.onFileDownloadComplete || u, e3.onFileDownloadError = e3.onFileDownloadError || u;
            var r3 = new Date().getTime(), o2 = new XMLHttpRequest(), a2 = this;
            o2.addEventListener("load", function(n3) {
              var s3 = new Date().getTime() - r3;
              a2.dataReport && t3 && t3 === i.fI.DOWN_GROUP_FILE && a2.dataReport.geOperateFun({ operationName: t3 })({ isEndApi: true, data: { isSuccess: o2.status === 200 ? 1 : 0, requestMethod: "POST", requestName: t3, requestElapse: s3, requestUrl: e3 == null ? void 0 : e3.url, code: o2.status, codeDesc: o2.status === 200 ? "" : "download file error" } }), e3.onFileDownloadComplete && e3.onFileDownloadComplete(o2.response);
            }, false), o2.addEventListener("error", function(s3) {
              var c3 = new Date().getTime() - r3;
              a2.dataReport && t3 && t3 === i.fI.DOWN_GROUP_FILE && a2.dataReport.geOperateFun({ operationName: t3 })({ isEndApi: true, data: { isSuccess: 0, requestMethod: "POST", requestName: t3, requestElapse: c3, requestUrl: e3 == null ? void 0 : e3.url, code: (o2 == null ? void 0 : o2.status) || 0, codeDesc: "download file error" } }), e3.onFileDownloadError && e3.onFileDownloadError({ type: n2.E.WEBIM_DOWNLOADFILE_ERROR, id: e3.id, xhr: o2 });
            }, false);
            var s2 = e3.method || "GET", c2 = e3.responseType || "blob", l2 = e3.mimeType || "text/plain; charset=x-user-defined";
            o2.open(s2, e3.url), typeof Blob != "undefined" ? o2.responseType = c2 : o2.overrideMimeType(l2);
            var p2 = { "X-Requested-With": "XMLHttpRequest", Accept: "application/octet-stream", "share-secret": e3.secret, Authorization: "Bearer " + this.context.accessToken }, h2 = e3.headers || {};
            for (var d2 in h2)
              p2[d2] = h2[d2];
            for (var d2 in p2)
              p2[d2] && o2.setRequestHeader(d2, p2[d2]);
            o2.send(null);
          }
          function _(e3) {
            e3 === void 0 && (e3 = {});
            var t3 = e3.elapse, r3 = t3 === void 0 ? 0 : t3, n3 = e3.httpCode, o2 = n3 === void 0 ? 0 : n3, i2 = e3.errDesc;
            return { requestElapse: r3, code: o2, codeDesc: i2 === void 0 ? "" : i2 };
          }
          !function(e3) {
            e3.WEB = "web", e3.WX = "wx", e3.ZFB = "zfb", e3.DD = "dd", e3.TT = "tt", e3.BAIDU = "baidu", e3.QUICK_APP = "quick_app", e3.UNI = "uni", e3.NODE = "node";
          }(m || (m = {}));
          var O = { autoIncrement: 0, ajaxUnconventionalErrorTimes: 0, ajax: l, getUniqueId: function() {
            this.autoIncrement ? this.autoIncrement++ : this.autoIncrement = 1;
            var e3 = new Date(), t3 = new Date(2010, 1, 1);
            return (e3.getTime() - t3.getTime() + this.autoIncrement).toString();
          }, getFileUrl: function(e3) {
            var t3 = { url: "", filename: "", filetype: "", data: {} }, r3 = typeof e3 == "string" ? document.getElementById(e3) : e3;
            if (window.URL.createObjectURL) {
              if (!r3.files)
                throw Error("this is not HTMLInputElement");
              var n3 = r3.files;
              if (n3.length > 0) {
                var o2 = n3.item(0);
                t3.data = o2, t3.url = window.URL.createObjectURL(o2), t3.filename = (o2 == null ? void 0 : o2.name) || "";
              }
            } else {
              if (typeof e3 != "string")
                throw Error("in IE fileInputId must be string");
              o2 = document.getElementById(e3).value, t3.url = o2;
              var i2 = o2.lastIndexOf("/"), a2 = o2.lastIndexOf("\\"), s2 = Math.max(i2, a2);
              t3.filename = s2 < 0 ? o2 : o2.substring(s2 + 1);
            }
            var c2 = t3.filename.lastIndexOf(".");
            return c2 !== -1 && (t3.filetype = t3.filename.substring(c2 + 1).toLowerCase()), t3;
          }, uploadFile: v, flow: function(e3) {
            for (var t3 = e3.length, r3 = t3; r3--; )
              if (typeof e3[r3] != "function")
                throw new TypeError("Expected a function");
            return function() {
              for (var r4 = [], n3 = 0; n3 < arguments.length; n3++)
                r4[n3] = arguments[n3];
              for (var o2 = 0, i2 = t3 ? e3[o2].apply(this, r4) : r4[0]; ++o2 < t3; )
                i2 = e3[o2].call(this, i2);
              return i2;
            };
          }, listenNetwork: g, getEnvInfo: y, wxRequest: h, parseDownloadResponse: function(e3) {
            if (!window || !window.URL)
              throw Error("parseDownloadResponse can be used in broswer only");
            return e3 && e3.type && e3.type === "application/json" || 0 > Object.prototype.toString.call(e3).indexOf("Blob") ? this.url + "?token=" : window.URL.createObjectURL(e3);
          }, download: T, parseNotify: function(e3) {
            for (var t3 = "", r3 = 0; r3 < e3.length; r3++)
              t3 += "%" + e3[r3].toString(16);
            return JSON.parse(decodeURIComponent(t3));
          }, getExtraData: _ };
        }, 5029: function(e2, t2, r2) {
          var n2 = r2(7505), o = r2(9191), i = TypeError;
          e2.exports = function(e3) {
            if (n2(e3))
              return e3;
            throw i(o(e3) + " is not a function");
          };
        }, 5347: function(e2, t2, r2) {
          var n2 = r2(1904), o = r2(9191), i = TypeError;
          e2.exports = function(e3) {
            if (n2(e3))
              return e3;
            throw i(o(e3) + " is not a constructor");
          };
        }, 7645: function(e2, t2, r2) {
          var n2 = r2(7505), o = String, i = TypeError;
          e2.exports = function(e3) {
            if (typeof e3 == "object" || n2(e3))
              return e3;
            throw i("Can't set " + o(e3) + " as a prototype");
          };
        }, 3091: function(e2, t2, r2) {
          var n2 = r2(673), o = r2(554), i = r2(1695).f, a = n2("unscopables"), s = Array.prototype;
          s[a] == null && i(s, a, { configurable: true, value: o(null) }), e2.exports = function(e3) {
            s[a][e3] = true;
          };
        }, 9322: function(e2, t2, r2) {
          var n2 = r2(7666), o = TypeError;
          e2.exports = function(e3, t3) {
            if (n2(t3, e3))
              return e3;
            throw o("Incorrect invocation");
          };
        }, 4291: function(e2, t2, r2) {
          var n2 = r2(4904), o = String, i = TypeError;
          e2.exports = function(e3) {
            if (n2(e3))
              return e3;
            throw i(o(e3) + " is not an object");
          };
        }, 2969: function(e2) {
          e2.exports = typeof ArrayBuffer != "undefined" && typeof DataView != "undefined";
        }, 2131: function(e2, t2, r2) {
          var n2 = r2(6866);
          e2.exports = n2(function() {
            if (typeof ArrayBuffer == "function") {
              var e3 = new ArrayBuffer(8);
              Object.isExtensible(e3) && Object.defineProperty(e3, "a", { value: 8 });
            }
          });
        }, 5015: function(e2, t2, r2) {
          "use strict";
          var n2, o, i, a = r2(2969), s = r2(7303), c = r2(4451), u = r2(7505), l = r2(4904), p = r2(2220), h = r2(5449), d = r2(9191), f = r2(4034), m = r2(7407), g = r2(1695).f, y = r2(7666), E = r2(9165), v = r2(8604), T = r2(673), _ = r2(412), O = r2(8390), R = O.enforce, I = O.get, S = c.Int8Array, A = S && S.prototype, N = c.Uint8ClampedArray, C = N && N.prototype, b = S && E(S), M = A && E(A), w = Object.prototype, U = c.TypeError, k = T("toStringTag"), P = _("TYPED_ARRAY_TAG"), x = a && !!v && h(c.opera) !== "Opera", L = false, j = { Int8Array: 1, Uint8Array: 1, Uint8ClampedArray: 1, Int16Array: 2, Uint16Array: 2, Int32Array: 4, Uint32Array: 4, Float32Array: 4, Float64Array: 8 }, D = { BigInt64Array: 8, BigUint64Array: 8 }, G = function(e3) {
            var t3 = E(e3);
            if (l(t3)) {
              var r3 = I(t3);
              return r3 && p(r3, "TypedArrayConstructor") ? r3.TypedArrayConstructor : G(t3);
            }
          }, B = function(e3) {
            if (!l(e3))
              return false;
            var t3 = h(e3);
            return p(j, t3) || p(D, t3);
          };
          for (n2 in j)
            (i = (o = c[n2]) && o.prototype) ? R(i).TypedArrayConstructor = o : x = false;
          for (n2 in D)
            (i = (o = c[n2]) && o.prototype) && (R(i).TypedArrayConstructor = o);
          if ((!x || !u(b) || b === Function.prototype) && (b = function() {
            throw U("Incorrect invocation");
          }, x))
            for (n2 in j)
              c[n2] && v(c[n2], b);
          if ((!x || !M || M === w) && (M = b.prototype, x))
            for (n2 in j)
              c[n2] && v(c[n2].prototype, M);
          if (x && E(C) !== M && v(C, M), s && !p(M, k))
            for (n2 in L = true, g(M, k, { get: function() {
              return l(this) ? this[P] : void 0;
            } }), j)
              c[n2] && f(c[n2], P, n2);
          e2.exports = { NATIVE_ARRAY_BUFFER_VIEWS: x, TYPED_ARRAY_TAG: L && P, aTypedArray: function(e3) {
            if (B(e3))
              return e3;
            throw U("Target is not a typed array");
          }, aTypedArrayConstructor: function(e3) {
            if (u(e3) && (!v || y(b, e3)))
              return e3;
            throw U(d(e3) + " is not a typed array constructor");
          }, exportTypedArrayMethod: function(e3, t3, r3, n3) {
            if (s) {
              if (r3)
                for (var o2 in j) {
                  var i2 = c[o2];
                  if (i2 && p(i2.prototype, e3))
                    try {
                      delete i2.prototype[e3];
                    } catch (r4) {
                      try {
                        i2.prototype[e3] = t3;
                      } catch (e4) {
                      }
                    }
                }
              M[e3] && !r3 || m(M, e3, r3 ? t3 : x && A[e3] || t3, n3);
            }
          }, exportTypedArrayStaticMethod: function(e3, t3, r3) {
            var n3, o2;
            if (s) {
              if (v) {
                if (r3) {
                  for (n3 in j)
                    if ((o2 = c[n3]) && p(o2, e3))
                      try {
                        delete o2[e3];
                      } catch (e4) {
                      }
                }
                if (b[e3] && !r3)
                  return;
                try {
                  return m(b, e3, r3 ? t3 : x && b[e3] || t3);
                } catch (e4) {
                }
              }
              for (n3 in j)
                !(o2 = c[n3]) || o2[e3] && !r3 || m(o2, e3, t3);
            }
          }, getTypedArrayConstructor: G, isView: function(e3) {
            if (!l(e3))
              return false;
            var t3 = h(e3);
            return t3 === "DataView" || p(j, t3) || p(D, t3);
          }, isTypedArray: B, TypedArray: b, TypedArrayPrototype: M };
        }, 4967: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(4451), o = r2(1705), i = r2(7303), a = r2(2969), s = r2(5281), c = r2(4034), u = r2(4954), l = r2(6866), p = r2(9322), h = r2(1045), d = r2(2234), f = r2(1515), m = r2(2606), g = r2(9165), y = r2(8604), E = r2(6702).f, v = r2(1695).f, T = r2(4200), _ = r2(8264), O = r2(819), R = r2(8390), I = s.PROPER, S = s.CONFIGURABLE, A = R.get, N = R.set, C = "ArrayBuffer", b = "Wrong index", M = n2.ArrayBuffer, w = M, U = w && w.prototype, k = n2.DataView, P = k && k.prototype, x = Object.prototype, L = n2.Array, j = n2.RangeError, D = o(T), G = o([].reverse), B = m.pack, H = m.unpack, F = function(e3) {
            return [255 & e3];
          }, W = function(e3) {
            return [255 & e3, e3 >> 8 & 255];
          }, q = function(e3) {
            return [255 & e3, e3 >> 8 & 255, e3 >> 16 & 255, e3 >> 24 & 255];
          }, Z = function(e3) {
            return e3[3] << 24 | e3[2] << 16 | e3[1] << 8 | e3[0];
          }, K = function(e3) {
            return B(e3, 23, 4);
          }, V = function(e3) {
            return B(e3, 52, 8);
          }, z = function(e3, t3) {
            v(e3.prototype, t3, { get: function() {
              return A(this)[t3];
            } });
          }, J = function(e3, t3, r3, n3) {
            var o2 = f(r3), i2 = A(e3);
            if (o2 + t3 > i2.byteLength)
              throw j(b);
            var a2 = A(i2.buffer).bytes, s2 = o2 + i2.byteOffset, c2 = _(a2, s2, s2 + t3);
            return n3 ? c2 : G(c2);
          }, X = function(e3, t3, r3, n3, o2, i2) {
            var a2 = f(r3), s2 = A(e3);
            if (a2 + t3 > s2.byteLength)
              throw j(b);
            for (var c2 = A(s2.buffer).bytes, u2 = a2 + s2.byteOffset, l2 = n3(+o2), p2 = 0; p2 < t3; p2++)
              c2[u2 + p2] = l2[i2 ? p2 : t3 - p2 - 1];
          };
          if (a) {
            var Y = I && M.name !== C;
            if (l(function() {
              M(1);
            }) && l(function() {
              new M(-1);
            }) && !l(function() {
              return new M(), new M(1.5), new M(NaN), M.length != 1 || Y && !S;
            }))
              Y && S && c(M, "name", C);
            else {
              (w = function(e3) {
                return p(this, U), new M(f(e3));
              }).prototype = U;
              for (var $2, Q = E(M), ee = 0; Q.length > ee; )
                ($2 = Q[ee++]) in w || c(w, $2, M[$2]);
              U.constructor = w;
            }
            y && g(P) !== x && y(P, x);
            var te = new k(new w(2)), re = o(P.setInt8);
            te.setInt8(0, 2147483648), te.setInt8(1, 2147483649), !te.getInt8(0) && te.getInt8(1) || u(P, { setInt8: function(e3, t3) {
              re(this, e3, t3 << 24 >> 24);
            }, setUint8: function(e3, t3) {
              re(this, e3, t3 << 24 >> 24);
            } }, { unsafe: true });
          } else
            U = (w = function(e3) {
              p(this, U);
              var t3 = f(e3);
              N(this, { bytes: D(L(t3), 0), byteLength: t3 }), i || (this.byteLength = t3);
            }).prototype, P = (k = function(e3, t3, r3) {
              p(this, P), p(e3, U);
              var n3 = A(e3).byteLength, o2 = h(t3);
              if (o2 < 0 || o2 > n3)
                throw j("Wrong offset");
              if (o2 + (r3 = r3 === void 0 ? n3 - o2 : d(r3)) > n3)
                throw j("Wrong length");
              N(this, { buffer: e3, byteLength: r3, byteOffset: o2 }), i || (this.buffer = e3, this.byteLength = r3, this.byteOffset = o2);
            }).prototype, i && (z(w, "byteLength"), z(k, "buffer"), z(k, "byteLength"), z(k, "byteOffset")), u(P, { getInt8: function(e3) {
              return J(this, 1, e3)[0] << 24 >> 24;
            }, getUint8: function(e3) {
              return J(this, 1, e3)[0];
            }, getInt16: function(e3) {
              var t3 = J(this, 2, e3, arguments.length > 1 ? arguments[1] : void 0);
              return (t3[1] << 8 | t3[0]) << 16 >> 16;
            }, getUint16: function(e3) {
              var t3 = J(this, 2, e3, arguments.length > 1 ? arguments[1] : void 0);
              return t3[1] << 8 | t3[0];
            }, getInt32: function(e3) {
              return Z(J(this, 4, e3, arguments.length > 1 ? arguments[1] : void 0));
            }, getUint32: function(e3) {
              return Z(J(this, 4, e3, arguments.length > 1 ? arguments[1] : void 0)) >>> 0;
            }, getFloat32: function(e3) {
              return H(J(this, 4, e3, arguments.length > 1 ? arguments[1] : void 0), 23);
            }, getFloat64: function(e3) {
              return H(J(this, 8, e3, arguments.length > 1 ? arguments[1] : void 0), 52);
            }, setInt8: function(e3, t3) {
              X(this, 1, e3, F, t3);
            }, setUint8: function(e3, t3) {
              X(this, 1, e3, F, t3);
            }, setInt16: function(e3, t3) {
              X(this, 2, e3, W, t3, arguments.length > 2 ? arguments[2] : void 0);
            }, setUint16: function(e3, t3) {
              X(this, 2, e3, W, t3, arguments.length > 2 ? arguments[2] : void 0);
            }, setInt32: function(e3, t3) {
              X(this, 4, e3, q, t3, arguments.length > 2 ? arguments[2] : void 0);
            }, setUint32: function(e3, t3) {
              X(this, 4, e3, q, t3, arguments.length > 2 ? arguments[2] : void 0);
            }, setFloat32: function(e3, t3) {
              X(this, 4, e3, K, t3, arguments.length > 2 ? arguments[2] : void 0);
            }, setFloat64: function(e3, t3) {
              X(this, 8, e3, V, t3, arguments.length > 2 ? arguments[2] : void 0);
            } });
          O(w, C), O(k, "DataView"), e2.exports = { ArrayBuffer: w, DataView: k };
        }, 1143: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(4220), o = r2(7193), i = r2(3085), a = r2(5142), s = Math.min;
          e2.exports = [].copyWithin || function(e3, t3) {
            var r3 = n2(this), c = i(r3), u = o(e3, c), l = o(t3, c), p = arguments.length > 2 ? arguments[2] : void 0, h = s((p === void 0 ? c : o(p, c)) - l, c - u), d = 1;
            for (l < u && u < l + h && (d = -1, l += h - 1, u += h - 1); h-- > 0; )
              l in r3 ? r3[u] = r3[l] : a(r3, u), u += d, l += d;
            return r3;
          };
        }, 4200: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(4220), o = r2(7193), i = r2(3085);
          e2.exports = function(e3) {
            for (var t3 = n2(this), r3 = i(t3), a = arguments.length, s = o(a > 1 ? arguments[1] : void 0, r3), c = a > 2 ? arguments[2] : void 0, u = c === void 0 ? r3 : o(c, r3); u > s; )
              t3[s++] = e3;
            return t3;
          };
        }, 2789: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(8947).forEach, o = r2(3498)("forEach");
          e2.exports = o ? [].forEach : function(e3) {
            return n2(this, e3, arguments.length > 1 ? arguments[1] : void 0);
          };
        }, 3661: function(e2, t2, r2) {
          var n2 = r2(3085);
          e2.exports = function(e3, t3) {
            for (var r3 = 0, o = n2(t3), i = new e3(o); o > r3; )
              i[r3] = t3[r3++];
            return i;
          };
        }, 3235: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(3581), o = r2(416), i = r2(4220), a = r2(3453), s = r2(7164), c = r2(1904), u = r2(3085), l = r2(2708), p = r2(9504), h = r2(6754), d = Array;
          e2.exports = function(e3) {
            var t3 = i(e3), r3 = c(this), f = arguments.length, m = f > 1 ? arguments[1] : void 0, g = m !== void 0;
            g && (m = n2(m, f > 2 ? arguments[2] : void 0));
            var y, E, v, T, _, O, R = h(t3), I = 0;
            if (!R || this === d && s(R))
              for (y = u(t3), E = r3 ? new this(y) : d(y); y > I; I++)
                O = g ? m(t3[I], I) : t3[I], l(E, I, O);
            else
              for (_ = (T = p(t3, R)).next, E = r3 ? new this() : []; !(v = o(_, T)).done; I++)
                O = g ? a(T, m, [v.value, I], true) : v.value, l(E, I, O);
            return E.length = I, E;
          };
        }, 3712: function(e2, t2, r2) {
          var n2 = r2(2714), o = r2(7193), i = r2(3085), a = function(e3) {
            return function(t3, r3, a2) {
              var s, c = n2(t3), u = i(c), l = o(a2, u);
              if (e3 && r3 != r3) {
                for (; u > l; )
                  if ((s = c[l++]) != s)
                    return true;
              } else
                for (; u > l; l++)
                  if ((e3 || l in c) && c[l] === r3)
                    return e3 || l || 0;
              return !e3 && -1;
            };
          };
          e2.exports = { includes: a(true), indexOf: a(false) };
        }, 8947: function(e2, t2, r2) {
          var n2 = r2(3581), o = r2(1705), i = r2(9427), a = r2(4220), s = r2(3085), c = r2(2456), u = o([].push), l = function(e3) {
            var t3 = e3 == 1, r3 = e3 == 2, o2 = e3 == 3, l2 = e3 == 4, p = e3 == 6, h = e3 == 7, d = e3 == 5 || p;
            return function(f, m, g, y) {
              for (var E, v, T = a(f), _ = i(T), O = n2(m, g), R = s(_), I = 0, S = y || c, A = t3 ? S(f, R) : r3 || h ? S(f, 0) : void 0; R > I; I++)
                if ((d || I in _) && (v = O(E = _[I], I, T), e3))
                  if (t3)
                    A[I] = v;
                  else if (v)
                    switch (e3) {
                      case 3:
                        return true;
                      case 5:
                        return E;
                      case 6:
                        return I;
                      case 2:
                        u(A, E);
                    }
                  else
                    switch (e3) {
                      case 4:
                        return false;
                      case 7:
                        u(A, E);
                    }
              return p ? -1 : o2 || l2 ? l2 : A;
            };
          };
          e2.exports = { forEach: l(0), map: l(1), filter: l(2), some: l(3), every: l(4), find: l(5), findIndex: l(6), filterReject: l(7) };
        }, 891: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(2598), o = r2(2714), i = r2(1045), a = r2(3085), s = r2(3498), c = Math.min, u = [].lastIndexOf, l = !!u && 1 / [1].lastIndexOf(1, -0) < 0, p = s("lastIndexOf"), h = l || !p;
          e2.exports = h ? function(e3) {
            if (l)
              return n2(u, this, arguments) || 0;
            var t3 = o(this), r3 = a(t3), s2 = r3 - 1;
            for (arguments.length > 1 && (s2 = c(s2, i(arguments[1]))), s2 < 0 && (s2 = r3 + s2); s2 >= 0; s2--)
              if (s2 in t3 && t3[s2] === e3)
                return s2 || 0;
            return -1;
          } : u;
        }, 3741: function(e2, t2, r2) {
          var n2 = r2(6866), o = r2(673), i = r2(8472), a = o("species");
          e2.exports = function(e3) {
            return i >= 51 || !n2(function() {
              var t3 = [];
              return (t3.constructor = {})[a] = function() {
                return { foo: 1 };
              }, t3[e3](Boolean).foo !== 1;
            });
          };
        }, 3498: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(6866);
          e2.exports = function(e3, t3) {
            var r3 = [][e3];
            return !!r3 && n2(function() {
              r3.call(null, t3 || function() {
                return 1;
              }, 1);
            });
          };
        }, 6581: function(e2, t2, r2) {
          var n2 = r2(5029), o = r2(4220), i = r2(9427), a = r2(3085), s = TypeError, c = function(e3) {
            return function(t3, r3, c2, u) {
              n2(r3);
              var l = o(t3), p = i(l), h = a(l), d = e3 ? h - 1 : 0, f = e3 ? -1 : 1;
              if (c2 < 2)
                for (; ; ) {
                  if (d in p) {
                    u = p[d], d += f;
                    break;
                  }
                  if (d += f, e3 ? d < 0 : h <= d)
                    throw s("Reduce of empty array with no initial value");
                }
              for (; e3 ? d >= 0 : h > d; d += f)
                d in p && (u = r3(u, p[d], d, l));
              return u;
            };
          };
          e2.exports = { left: c(false), right: c(true) };
        }, 2967: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(7303), o = r2(8751), i = TypeError, a = Object.getOwnPropertyDescriptor, s = n2 && !function() {
            if (this !== void 0)
              return true;
            try {
              Object.defineProperty([], "length", { writable: false }).length = 1;
            } catch (e3) {
              return e3 instanceof TypeError;
            }
          }();
          e2.exports = s ? function(e3, t3) {
            if (o(e3) && !a(e3, "length").writable)
              throw i("Cannot set read only .length");
            return e3.length = t3;
          } : function(e3, t3) {
            return e3.length = t3;
          };
        }, 8264: function(e2, t2, r2) {
          var n2 = r2(7193), o = r2(3085), i = r2(2708), a = Array, s = Math.max;
          e2.exports = function(e3, t3, r3) {
            for (var c = o(e3), u = n2(t3, c), l = n2(r3 === void 0 ? c : r3, c), p = a(s(l - u, 0)), h = 0; u < l; u++, h++)
              i(p, h, e3[u]);
            return p.length = h, p;
          };
        }, 4899: function(e2, t2, r2) {
          var n2 = r2(1705);
          e2.exports = n2([].slice);
        }, 6623: function(e2, t2, r2) {
          var n2 = r2(8264), o = Math.floor, i = function(e3, t3) {
            var r3 = e3.length, c = o(r3 / 2);
            return r3 < 8 ? a(e3, t3) : s(e3, i(n2(e3, 0, c), t3), i(n2(e3, c), t3), t3);
          }, a = function(e3, t3) {
            for (var r3, n3, o2 = e3.length, i2 = 1; i2 < o2; ) {
              for (n3 = i2, r3 = e3[i2]; n3 && t3(e3[n3 - 1], r3) > 0; )
                e3[n3] = e3[--n3];
              n3 !== i2++ && (e3[n3] = r3);
            }
            return e3;
          }, s = function(e3, t3, r3, n3) {
            for (var o2 = t3.length, i2 = r3.length, a2 = 0, s2 = 0; a2 < o2 || s2 < i2; )
              e3[a2 + s2] = a2 < o2 && s2 < i2 ? n3(t3[a2], r3[s2]) <= 0 ? t3[a2++] : r3[s2++] : a2 < o2 ? t3[a2++] : r3[s2++];
            return e3;
          };
          e2.exports = i;
        }, 9460: function(e2, t2, r2) {
          var n2 = r2(8751), o = r2(1904), i = r2(4904), a = r2(673)("species"), s = Array;
          e2.exports = function(e3) {
            var t3;
            return n2(e3) && (t3 = e3.constructor, (o(t3) && (t3 === s || n2(t3.prototype)) || i(t3) && (t3 = t3[a]) === null) && (t3 = void 0)), t3 === void 0 ? s : t3;
          };
        }, 2456: function(e2, t2, r2) {
          var n2 = r2(9460);
          e2.exports = function(e3, t3) {
            return new (n2(e3))(t3 === 0 ? 0 : t3);
          };
        }, 3453: function(e2, t2, r2) {
          var n2 = r2(4291), o = r2(1101);
          e2.exports = function(e3, t3, r3, i) {
            try {
              return i ? t3(n2(r3)[0], r3[1]) : t3(r3);
            } catch (t4) {
              o(e3, "throw", t4);
            }
          };
        }, 7961: function(e2, t2, r2) {
          var n2 = r2(673)("iterator"), o = false;
          try {
            var i = 0, a = { next: function() {
              return { done: !!i++ };
            }, return: function() {
              o = true;
            } };
            a[n2] = function() {
              return this;
            }, Array.from(a, function() {
              throw 2;
            });
          } catch (e3) {
          }
          e2.exports = function(e3, t3) {
            if (!t3 && !o)
              return false;
            var r3 = false;
            try {
              var i2 = {};
              i2[n2] = function() {
                return { next: function() {
                  return { done: r3 = true };
                } };
              }, e3(i2);
            } catch (e4) {
            }
            return r3;
          };
        }, 2449: function(e2, t2, r2) {
          var n2 = r2(1705), o = n2({}.toString), i = n2("".slice);
          e2.exports = function(e3) {
            return i(o(e3), 8, -1);
          };
        }, 5449: function(e2, t2, r2) {
          var n2 = r2(8103), o = r2(7505), i = r2(2449), a = r2(673)("toStringTag"), s = Object, c = i(function() {
            return arguments;
          }()) == "Arguments";
          e2.exports = n2 ? i : function(e3) {
            var t3, r3, n3;
            return e3 === void 0 ? "Undefined" : e3 === null ? "Null" : typeof (r3 = function(e4, t4) {
              try {
                return e4[t4];
              } catch (e5) {
              }
            }(t3 = s(e3), a)) == "string" ? r3 : c ? i(t3) : (n3 = i(t3)) == "Object" && o(t3.callee) ? "Arguments" : n3;
          };
        }, 1979: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(1695).f, o = r2(554), i = r2(4954), a = r2(3581), s = r2(9322), c = r2(7102), u = r2(7985), l = r2(8830), p = r2(2870), h = r2(2197), d = r2(7303), f = r2(1160).fastKey, m = r2(8390), g = m.set, y = m.getterFor;
          e2.exports = { getConstructor: function(e3, t3, r3, l2) {
            var p2 = e3(function(e4, n3) {
              s(e4, h2), g(e4, { type: t3, index: o(null), first: void 0, last: void 0, size: 0 }), d || (e4.size = 0), c(n3) || u(n3, e4[l2], { that: e4, AS_ENTRIES: r3 });
            }), h2 = p2.prototype, m2 = y(t3), E = function(e4, t4, r4) {
              var n3, o2, i2 = m2(e4), a2 = v(e4, t4);
              return a2 ? a2.value = r4 : (i2.last = a2 = { index: o2 = f(t4, true), key: t4, value: r4, previous: n3 = i2.last, next: void 0, removed: false }, i2.first || (i2.first = a2), n3 && (n3.next = a2), d ? i2.size++ : e4.size++, o2 !== "F" && (i2.index[o2] = a2)), e4;
            }, v = function(e4, t4) {
              var r4, n3 = m2(e4), o2 = f(t4);
              if (o2 !== "F")
                return n3.index[o2];
              for (r4 = n3.first; r4; r4 = r4.next)
                if (r4.key == t4)
                  return r4;
            };
            return i(h2, { clear: function() {
              for (var e4 = m2(this), t4 = e4.index, r4 = e4.first; r4; )
                r4.removed = true, r4.previous && (r4.previous = r4.previous.next = void 0), delete t4[r4.index], r4 = r4.next;
              e4.first = e4.last = void 0, d ? e4.size = 0 : this.size = 0;
            }, delete: function(e4) {
              var t4 = this, r4 = m2(t4), n3 = v(t4, e4);
              if (n3) {
                var o2 = n3.next, i2 = n3.previous;
                delete r4.index[n3.index], n3.removed = true, i2 && (i2.next = o2), o2 && (o2.previous = i2), r4.first == n3 && (r4.first = o2), r4.last == n3 && (r4.last = i2), d ? r4.size-- : t4.size--;
              }
              return !!n3;
            }, forEach: function(e4) {
              for (var t4, r4 = m2(this), n3 = a(e4, arguments.length > 1 ? arguments[1] : void 0); t4 = t4 ? t4.next : r4.first; )
                for (n3(t4.value, t4.key, this); t4 && t4.removed; )
                  t4 = t4.previous;
            }, has: function(e4) {
              return !!v(this, e4);
            } }), i(h2, r3 ? { get: function(e4) {
              var t4 = v(this, e4);
              return t4 && t4.value;
            }, set: function(e4, t4) {
              return E(this, e4 === 0 ? 0 : e4, t4);
            } } : { add: function(e4) {
              return E(this, e4 = e4 === 0 ? 0 : e4, e4);
            } }), d && n2(h2, "size", { get: function() {
              return m2(this).size;
            } }), p2;
          }, setStrong: function(e3, t3, r3) {
            var n3 = t3 + " Iterator", o2 = y(t3), i2 = y(n3);
            l(e3, t3, function(e4, t4) {
              g(this, { type: n3, target: e4, state: o2(e4), kind: t4, last: void 0 });
            }, function() {
              for (var e4 = i2(this), t4 = e4.kind, r4 = e4.last; r4 && r4.removed; )
                r4 = r4.previous;
              return e4.target && (e4.last = r4 = r4 ? r4.next : e4.state.first) ? p(t4 == "keys" ? r4.key : t4 == "values" ? r4.value : [r4.key, r4.value], false) : (e4.target = void 0, p(void 0, true));
            }, r3 ? "entries" : "values", !r3, true), h(t3);
          } };
        }, 1112: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(4723), o = r2(4451), i = r2(1705), a = r2(6538), s = r2(7407), c = r2(1160), u = r2(7985), l = r2(9322), p = r2(7505), h = r2(7102), d = r2(4904), f = r2(6866), m = r2(7961), g = r2(819), y = r2(8505);
          e2.exports = function(e3, t3, r3) {
            var E = e3.indexOf("Map") !== -1, v = e3.indexOf("Weak") !== -1, T = E ? "set" : "add", _ = o[e3], O = _ && _.prototype, R = _, I = {}, S = function(e4) {
              var t4 = i(O[e4]);
              s(O, e4, e4 == "add" ? function(e5) {
                return t4(this, e5 === 0 ? 0 : e5), this;
              } : e4 == "delete" ? function(e5) {
                return !(v && !d(e5)) && t4(this, e5 === 0 ? 0 : e5);
              } : e4 == "get" ? function(e5) {
                return v && !d(e5) ? void 0 : t4(this, e5 === 0 ? 0 : e5);
              } : e4 == "has" ? function(e5) {
                return !(v && !d(e5)) && t4(this, e5 === 0 ? 0 : e5);
              } : function(e5, r4) {
                return t4(this, e5 === 0 ? 0 : e5, r4), this;
              });
            };
            if (a(e3, !p(_) || !(v || O.forEach && !f(function() {
              new _().entries().next();
            }))))
              R = r3.getConstructor(t3, e3, E, T), c.enable();
            else if (a(e3, true)) {
              var A = new R(), N = A[T](v ? {} : -0, 1) != A, C = f(function() {
                A.has(1);
              }), b = m(function(e4) {
                new _(e4);
              }), M = !v && f(function() {
                for (var e4 = new _(), t4 = 5; t4--; )
                  e4[T](t4, t4);
                return !e4.has(-0);
              });
              b || ((R = t3(function(e4, t4) {
                l(e4, O);
                var r4 = y(new _(), e4, R);
                return h(t4) || u(t4, r4[T], { that: r4, AS_ENTRIES: E }), r4;
              })).prototype = O, O.constructor = R), (C || M) && (S("delete"), S("has"), E && S("get")), (M || N) && S(T), v && O.clear && delete O.clear;
            }
            return I[e3] = R, n2({ global: true, constructor: true, forced: R != _ }, I), g(R, e3), v || r3.setStrong(R, e3, E), R;
          };
        }, 2315: function(e2, t2, r2) {
          var n2 = r2(2220), o = r2(7738), i = r2(3338), a = r2(1695);
          e2.exports = function(e3, t3, r3) {
            for (var s = o(t3), c = a.f, u = i.f, l = 0; l < s.length; l++) {
              var p = s[l];
              n2(e3, p) || r3 && n2(r3, p) || c(e3, p, u(t3, p));
            }
          };
        }, 5445: function(e2, t2, r2) {
          var n2 = r2(673)("match");
          e2.exports = function(e3) {
            var t3 = /./;
            try {
              "/./"[e3](t3);
            } catch (r3) {
              try {
                return t3[n2] = false, "/./"[e3](t3);
              } catch (e4) {
              }
            }
            return false;
          };
        }, 6059: function(e2, t2, r2) {
          var n2 = r2(6866);
          e2.exports = !n2(function() {
            function e3() {
            }
            return e3.prototype.constructor = null, Object.getPrototypeOf(new e3()) !== e3.prototype;
          });
        }, 2870: function(e2) {
          e2.exports = function(e3, t2) {
            return { value: e3, done: t2 };
          };
        }, 4034: function(e2, t2, r2) {
          var n2 = r2(7303), o = r2(1695), i = r2(1673);
          e2.exports = n2 ? function(e3, t3, r3) {
            return o.f(e3, t3, i(1, r3));
          } : function(e3, t3, r3) {
            return e3[t3] = r3, e3;
          };
        }, 1673: function(e2) {
          e2.exports = function(e3, t2) {
            return { enumerable: !(1 & e3), configurable: !(2 & e3), writable: !(4 & e3), value: t2 };
          };
        }, 2708: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(3957), o = r2(1695), i = r2(1673);
          e2.exports = function(e3, t3, r3) {
            var a = n2(t3);
            a in e3 ? o.f(e3, a, i(0, r3)) : e3[a] = r3;
          };
        }, 9451: function(e2, t2, r2) {
          var n2 = r2(8082), o = r2(1695);
          e2.exports = function(e3, t3, r3) {
            return r3.get && n2(r3.get, t3, { getter: true }), r3.set && n2(r3.set, t3, { setter: true }), o.f(e3, t3, r3);
          };
        }, 7407: function(e2, t2, r2) {
          var n2 = r2(7505), o = r2(1695), i = r2(8082), a = r2(5870);
          e2.exports = function(e3, t3, r3, s) {
            s || (s = {});
            var c = s.enumerable, u = s.name !== void 0 ? s.name : t3;
            if (n2(r3) && i(r3, u, s), s.global)
              c ? e3[t3] = r3 : a(t3, r3);
            else {
              try {
                s.unsafe ? e3[t3] && (c = true) : delete e3[t3];
              } catch (e4) {
              }
              c ? e3[t3] = r3 : o.f(e3, t3, { value: r3, enumerable: false, configurable: !s.nonConfigurable, writable: !s.nonWritable });
            }
            return e3;
          };
        }, 4954: function(e2, t2, r2) {
          var n2 = r2(7407);
          e2.exports = function(e3, t3, r3) {
            for (var o in t3)
              n2(e3, o, t3[o], r3);
            return e3;
          };
        }, 5870: function(e2, t2, r2) {
          var n2 = r2(4451), o = Object.defineProperty;
          e2.exports = function(e3, t3) {
            try {
              o(n2, e3, { value: t3, configurable: true, writable: true });
            } catch (r3) {
              n2[e3] = t3;
            }
            return t3;
          };
        }, 5142: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(9191), o = TypeError;
          e2.exports = function(e3, t3) {
            if (!delete e3[t3])
              throw o("Cannot delete property " + n2(t3) + " of " + n2(e3));
          };
        }, 7303: function(e2, t2, r2) {
          var n2 = r2(6866);
          e2.exports = !n2(function() {
            return Object.defineProperty({}, 1, { get: function() {
              return 7;
            } })[1] != 7;
          });
        }, 7691: function(e2) {
          var t2 = typeof document == "object" && document.all, r2 = t2 === void 0 && t2 !== void 0;
          e2.exports = { all: t2, IS_HTMLDDA: r2 };
        }, 8620: function(e2, t2, r2) {
          var n2 = r2(4451), o = r2(4904), i = n2.document, a = o(i) && o(i.createElement);
          e2.exports = function(e3) {
            return a ? i.createElement(e3) : {};
          };
        }, 5261: function(e2) {
          var t2 = TypeError;
          e2.exports = function(e3) {
            if (e3 > 9007199254740991)
              throw t2("Maximum allowed index exceeded");
            return e3;
          };
        }, 772: function(e2) {
          e2.exports = { CSSRuleList: 0, CSSStyleDeclaration: 0, CSSValueList: 0, ClientRectList: 0, DOMRectList: 0, DOMStringList: 0, DOMTokenList: 1, DataTransferItemList: 0, FileList: 0, HTMLAllCollection: 0, HTMLCollection: 0, HTMLFormElement: 0, HTMLSelectElement: 0, MediaList: 0, MimeTypeArray: 0, NamedNodeMap: 0, NodeList: 1, PaintRequestList: 0, Plugin: 0, PluginArray: 0, SVGLengthList: 0, SVGNumberList: 0, SVGPathSegList: 0, SVGPointList: 0, SVGStringList: 0, SVGTransformList: 0, SourceBufferList: 0, StyleSheetList: 0, TextTrackCueList: 0, TextTrackList: 0, TouchList: 0 };
        }, 3155: function(e2, t2, r2) {
          var n2 = r2(8620)("span").classList, o = n2 && n2.constructor && n2.constructor.prototype;
          e2.exports = o === Object.prototype ? void 0 : o;
        }, 9474: function(e2, t2, r2) {
          var n2 = r2(5713).match(/firefox\/(\d+)/i);
          e2.exports = !!n2 && +n2[1];
        }, 7757: function(e2, t2, r2) {
          var n2 = r2(3311), o = r2(7481);
          e2.exports = !n2 && !o && typeof window == "object" && typeof document == "object";
        }, 3311: function(e2) {
          e2.exports = typeof Deno == "object" && Deno && typeof Deno.version == "object";
        }, 5526: function(e2, t2, r2) {
          var n2 = r2(5713);
          e2.exports = /MSIE|Trident/.test(n2);
        }, 3064: function(e2, t2, r2) {
          var n2 = r2(5713), o = r2(4451);
          e2.exports = /ipad|iphone|ipod/i.test(n2) && o.Pebble !== void 0;
        }, 9514: function(e2, t2, r2) {
          var n2 = r2(5713);
          e2.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(n2);
        }, 7481: function(e2, t2, r2) {
          var n2 = r2(2449), o = r2(4451);
          e2.exports = n2(o.process) == "process";
        }, 9874: function(e2, t2, r2) {
          var n2 = r2(5713);
          e2.exports = /web0s(?!.*chrome)/i.test(n2);
        }, 5713: function(e2, t2, r2) {
          var n2 = r2(2439);
          e2.exports = n2("navigator", "userAgent") || "";
        }, 8472: function(e2, t2, r2) {
          var n2, o, i = r2(4451), a = r2(5713), s = i.process, c = i.Deno, u = s && s.versions || c && c.version, l = u && u.v8;
          l && (o = (n2 = l.split("."))[0] > 0 && n2[0] < 4 ? 1 : +(n2[0] + n2[1])), !o && a && (!(n2 = a.match(/Edge\/(\d+)/)) || n2[1] >= 74) && (n2 = a.match(/Chrome\/(\d+)/)) && (o = +n2[1]), e2.exports = o;
        }, 4353: function(e2, t2, r2) {
          var n2 = r2(5713).match(/AppleWebKit\/(\d+)\./);
          e2.exports = !!n2 && +n2[1];
        }, 1961: function(e2) {
          e2.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
        }, 4723: function(e2, t2, r2) {
          var n2 = r2(4451), o = r2(3338).f, i = r2(4034), a = r2(7407), s = r2(5870), c = r2(2315), u = r2(6538);
          e2.exports = function(e3, t3) {
            var r3, l, p, h, d, f = e3.target, m = e3.global, g = e3.stat;
            if (r3 = m ? n2 : g ? n2[f] || s(f, {}) : (n2[f] || {}).prototype)
              for (l in t3) {
                if (h = t3[l], p = e3.dontCallGetSet ? (d = o(r3, l)) && d.value : r3[l], !u(m ? l : f + (g ? "." : "#") + l, e3.forced) && p !== void 0) {
                  if (typeof h == typeof p)
                    continue;
                  c(h, p);
                }
                (e3.sham || p && p.sham) && i(h, "sham", true), a(r3, l, h, e3);
              }
          };
        }, 6866: function(e2) {
          e2.exports = function(e3) {
            try {
              return !!e3();
            } catch (e4) {
              return true;
            }
          };
        }, 8285: function(e2, t2, r2) {
          var n2 = r2(6866);
          e2.exports = !n2(function() {
            return Object.isExtensible(Object.preventExtensions({}));
          });
        }, 2598: function(e2, t2, r2) {
          var n2 = r2(3643), o = Function.prototype, i = o.apply, a = o.call;
          e2.exports = typeof Reflect == "object" && Reflect.apply || (n2 ? a.bind(i) : function() {
            return a.apply(i, arguments);
          });
        }, 3581: function(e2, t2, r2) {
          var n2 = r2(1108), o = r2(5029), i = r2(3643), a = n2(n2.bind);
          e2.exports = function(e3, t3) {
            return o(e3), t3 === void 0 ? e3 : i ? a(e3, t3) : function() {
              return e3.apply(t3, arguments);
            };
          };
        }, 3643: function(e2, t2, r2) {
          var n2 = r2(6866);
          e2.exports = !n2(function() {
            var e3 = function() {
            }.bind();
            return typeof e3 != "function" || e3.hasOwnProperty("prototype");
          });
        }, 9955: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(1705), o = r2(5029), i = r2(4904), a = r2(2220), s = r2(4899), c = r2(3643), u = Function, l = n2([].concat), p = n2([].join), h = {}, d = function(e3, t3, r3) {
            if (!a(h, t3)) {
              for (var n3 = [], o2 = 0; o2 < t3; o2++)
                n3[o2] = "a[" + o2 + "]";
              h[t3] = u("C,a", "return new C(" + p(n3, ",") + ")");
            }
            return h[t3](e3, r3);
          };
          e2.exports = c ? u.bind : function(e3) {
            var t3 = o(this), r3 = t3.prototype, n3 = s(arguments, 1), a2 = function() {
              var r4 = l(n3, s(arguments));
              return this instanceof a2 ? d(t3, r4.length, r4) : t3.apply(e3, r4);
            };
            return i(r3) && (a2.prototype = r3), a2;
          };
        }, 416: function(e2, t2, r2) {
          var n2 = r2(3643), o = Function.prototype.call;
          e2.exports = n2 ? o.bind(o) : function() {
            return o.apply(o, arguments);
          };
        }, 5281: function(e2, t2, r2) {
          var n2 = r2(7303), o = r2(2220), i = Function.prototype, a = n2 && Object.getOwnPropertyDescriptor, s = o(i, "name"), c = s && function() {
          }.name === "something", u = s && (!n2 || n2 && a(i, "name").configurable);
          e2.exports = { EXISTS: s, PROPER: c, CONFIGURABLE: u };
        }, 1108: function(e2, t2, r2) {
          var n2 = r2(2449), o = r2(1705);
          e2.exports = function(e3) {
            if (n2(e3) === "Function")
              return o(e3);
          };
        }, 1705: function(e2, t2, r2) {
          var n2 = r2(3643), o = Function.prototype, i = o.call, a = n2 && o.bind.bind(i, i);
          e2.exports = n2 ? a : function(e3) {
            return function() {
              return i.apply(e3, arguments);
            };
          };
        }, 2439: function(e2, t2, r2) {
          var n2 = r2(4451), o = r2(7505), i = function(e3) {
            return o(e3) ? e3 : void 0;
          };
          e2.exports = function(e3, t3) {
            return arguments.length < 2 ? i(n2[e3]) : n2[e3] && n2[e3][t3];
          };
        }, 6754: function(e2, t2, r2) {
          var n2 = r2(5449), o = r2(9058), i = r2(7102), a = r2(4914), s = r2(673)("iterator");
          e2.exports = function(e3) {
            if (!i(e3))
              return o(e3, s) || o(e3, "@@iterator") || a[n2(e3)];
          };
        }, 9504: function(e2, t2, r2) {
          var n2 = r2(416), o = r2(5029), i = r2(4291), a = r2(9191), s = r2(6754), c = TypeError;
          e2.exports = function(e3, t3) {
            var r3 = arguments.length < 2 ? s(e3) : t3;
            if (o(r3))
              return i(n2(r3, e3));
            throw c(a(e3) + " is not iterable");
          };
        }, 9058: function(e2, t2, r2) {
          var n2 = r2(5029), o = r2(7102);
          e2.exports = function(e3, t3) {
            var r3 = e3[t3];
            return o(r3) ? void 0 : n2(r3);
          };
        }, 4451: function(e2, t2, r2) {
          var n2 = function(e3) {
            return e3 && e3.Math == Math && e3;
          };
          e2.exports = n2(typeof globalThis == "object" && globalThis) || n2(typeof window == "object" && window) || n2(typeof self == "object" && self) || n2(typeof r2.g == "object" && r2.g) || function() {
            return this;
          }() || Function("return this")();
        }, 2220: function(e2, t2, r2) {
          var n2 = r2(1705), o = r2(4220), i = n2({}.hasOwnProperty);
          e2.exports = Object.hasOwn || function(e3, t3) {
            return i(o(e3), t3);
          };
        }, 5003: function(e2) {
          e2.exports = {};
        }, 7425: function(e2, t2, r2) {
          var n2 = r2(4451);
          e2.exports = function(e3, t3) {
            var r3 = n2.console;
            r3 && r3.error && (arguments.length == 1 ? r3.error(e3) : r3.error(e3, t3));
          };
        }, 452: function(e2, t2, r2) {
          var n2 = r2(2439);
          e2.exports = n2("document", "documentElement");
        }, 403: function(e2, t2, r2) {
          var n2 = r2(7303), o = r2(6866), i = r2(8620);
          e2.exports = !n2 && !o(function() {
            return Object.defineProperty(i("div"), "a", { get: function() {
              return 7;
            } }).a != 7;
          });
        }, 2606: function(e2) {
          var t2 = Array, r2 = Math.abs, n2 = Math.pow, o = Math.floor, i = Math.log, a = Math.LN2;
          e2.exports = { pack: function(e3, s, c) {
            var u, l, p, h = t2(c), d = 8 * c - s - 1, f = (1 << d) - 1, m = f >> 1, g = s === 23 ? n2(2, -24) - n2(2, -77) : 0, y = e3 < 0 || e3 === 0 && 1 / e3 < 0 ? 1 : 0, E = 0;
            for ((e3 = r2(e3)) != e3 || e3 === 1 / 0 ? (l = e3 != e3 ? 1 : 0, u = f) : (u = o(i(e3) / a), e3 * (p = n2(2, -u)) < 1 && (u--, p *= 2), (e3 += u + m >= 1 ? g / p : g * n2(2, 1 - m)) * p >= 2 && (u++, p /= 2), u + m >= f ? (l = 0, u = f) : u + m >= 1 ? (l = (e3 * p - 1) * n2(2, s), u += m) : (l = e3 * n2(2, m - 1) * n2(2, s), u = 0)); s >= 8; )
              h[E++] = 255 & l, l /= 256, s -= 8;
            for (u = u << s | l, d += s; d > 0; )
              h[E++] = 255 & u, u /= 256, d -= 8;
            return h[--E] |= 128 * y, h;
          }, unpack: function(e3, t3) {
            var r3, o2 = e3.length, i2 = 8 * o2 - t3 - 1, a2 = (1 << i2) - 1, s = a2 >> 1, c = i2 - 7, u = o2 - 1, l = e3[u--], p = 127 & l;
            for (l >>= 7; c > 0; )
              p = 256 * p + e3[u--], c -= 8;
            for (r3 = p & (1 << -c) - 1, p >>= -c, c += t3; c > 0; )
              r3 = 256 * r3 + e3[u--], c -= 8;
            if (p === 0)
              p = 1 - s;
            else {
              if (p === a2)
                return r3 ? NaN : l ? -1 / 0 : 1 / 0;
              r3 += n2(2, t3), p -= s;
            }
            return (l ? -1 : 1) * r3 * n2(2, p - t3);
          } };
        }, 9427: function(e2, t2, r2) {
          var n2 = r2(1705), o = r2(6866), i = r2(2449), a = Object, s = n2("".split);
          e2.exports = o(function() {
            return !a("z").propertyIsEnumerable(0);
          }) ? function(e3) {
            return i(e3) == "String" ? s(e3, "") : a(e3);
          } : a;
        }, 8505: function(e2, t2, r2) {
          var n2 = r2(7505), o = r2(4904), i = r2(8604);
          e2.exports = function(e3, t3, r3) {
            var a, s;
            return i && n2(a = t3.constructor) && a !== r3 && o(s = a.prototype) && s !== r3.prototype && i(e3, s), e3;
          };
        }, 3262: function(e2, t2, r2) {
          var n2 = r2(1705), o = r2(7505), i = r2(3010), a = n2(Function.toString);
          o(i.inspectSource) || (i.inspectSource = function(e3) {
            return a(e3);
          }), e2.exports = i.inspectSource;
        }, 1160: function(e2, t2, r2) {
          var n2 = r2(4723), o = r2(1705), i = r2(5003), a = r2(4904), s = r2(2220), c = r2(1695).f, u = r2(6702), l = r2(7116), p = r2(7774), h = r2(412), d = r2(8285), f = false, m = h("meta"), g = 0, y = function(e3) {
            c(e3, m, { value: { objectID: "O" + g++, weakData: {} } });
          }, E = e2.exports = { enable: function() {
            E.enable = function() {
            }, f = true;
            var e3 = u.f, t3 = o([].splice), r3 = {};
            r3[m] = 1, e3(r3).length && (u.f = function(r4) {
              for (var n3 = e3(r4), o2 = 0, i2 = n3.length; o2 < i2; o2++)
                if (n3[o2] === m) {
                  t3(n3, o2, 1);
                  break;
                }
              return n3;
            }, n2({ target: "Object", stat: true, forced: true }, { getOwnPropertyNames: l.f }));
          }, fastKey: function(e3, t3) {
            if (!a(e3))
              return typeof e3 == "symbol" ? e3 : (typeof e3 == "string" ? "S" : "P") + e3;
            if (!s(e3, m)) {
              if (!p(e3))
                return "F";
              if (!t3)
                return "E";
              y(e3);
            }
            return e3[m].objectID;
          }, getWeakData: function(e3, t3) {
            if (!s(e3, m)) {
              if (!p(e3))
                return true;
              if (!t3)
                return false;
              y(e3);
            }
            return e3[m].weakData;
          }, onFreeze: function(e3) {
            return d && f && p(e3) && !s(e3, m) && y(e3), e3;
          } };
          i[m] = true;
        }, 8390: function(e2, t2, r2) {
          var n2, o, i, a = r2(6306), s = r2(4451), c = r2(4904), u = r2(4034), l = r2(2220), p = r2(3010), h = r2(4228), d = r2(5003), f = "Object already initialized", m = s.TypeError, g = s.WeakMap;
          if (a || p.state) {
            var y = p.state || (p.state = new g());
            y.get = y.get, y.has = y.has, y.set = y.set, n2 = function(e3, t3) {
              if (y.has(e3))
                throw m(f);
              return t3.facade = e3, y.set(e3, t3), t3;
            }, o = function(e3) {
              return y.get(e3) || {};
            }, i = function(e3) {
              return y.has(e3);
            };
          } else {
            var E = h("state");
            d[E] = true, n2 = function(e3, t3) {
              if (l(e3, E))
                throw m(f);
              return t3.facade = e3, u(e3, E, t3), t3;
            }, o = function(e3) {
              return l(e3, E) ? e3[E] : {};
            }, i = function(e3) {
              return l(e3, E);
            };
          }
          e2.exports = { set: n2, get: o, has: i, enforce: function(e3) {
            return i(e3) ? o(e3) : n2(e3, {});
          }, getterFor: function(e3) {
            return function(t3) {
              var r3;
              if (!c(t3) || (r3 = o(t3)).type !== e3)
                throw m("Incompatible receiver, " + e3 + " required");
              return r3;
            };
          } };
        }, 7164: function(e2, t2, r2) {
          var n2 = r2(673), o = r2(4914), i = n2("iterator"), a = Array.prototype;
          e2.exports = function(e3) {
            return e3 !== void 0 && (o.Array === e3 || a[i] === e3);
          };
        }, 8751: function(e2, t2, r2) {
          var n2 = r2(2449);
          e2.exports = Array.isArray || function(e3) {
            return n2(e3) == "Array";
          };
        }, 9738: function(e2, t2, r2) {
          var n2 = r2(5449), o = r2(1705)("".slice);
          e2.exports = function(e3) {
            return o(n2(e3), 0, 3) === "Big";
          };
        }, 7505: function(e2, t2, r2) {
          var n2 = r2(7691), o = n2.all;
          e2.exports = n2.IS_HTMLDDA ? function(e3) {
            return typeof e3 == "function" || e3 === o;
          } : function(e3) {
            return typeof e3 == "function";
          };
        }, 1904: function(e2, t2, r2) {
          var n2 = r2(1705), o = r2(6866), i = r2(7505), a = r2(5449), s = r2(2439), c = r2(3262), u = function() {
          }, l = [], p = s("Reflect", "construct"), h = /^\s*(?:class|function)\b/, d = n2(h.exec), f = !h.exec(u), m = function(e3) {
            if (!i(e3))
              return false;
            try {
              return p(u, l, e3), true;
            } catch (e4) {
              return false;
            }
          }, g = function(e3) {
            if (!i(e3))
              return false;
            switch (a(e3)) {
              case "AsyncFunction":
              case "GeneratorFunction":
              case "AsyncGeneratorFunction":
                return false;
            }
            try {
              return f || !!d(h, c(e3));
            } catch (e4) {
              return true;
            }
          };
          g.sham = true, e2.exports = !p || o(function() {
            var e3;
            return m(m.call) || !m(Object) || !m(function() {
              e3 = true;
            }) || e3;
          }) ? g : m;
        }, 6538: function(e2, t2, r2) {
          var n2 = r2(6866), o = r2(7505), i = /#|\.prototype\./, a = function(e3, t3) {
            var r3 = c[s(e3)];
            return r3 == l || r3 != u && (o(t3) ? n2(t3) : !!t3);
          }, s = a.normalize = function(e3) {
            return String(e3).replace(i, ".").toLowerCase();
          }, c = a.data = {}, u = a.NATIVE = "N", l = a.POLYFILL = "P";
          e2.exports = a;
        }, 1195: function(e2, t2, r2) {
          var n2 = r2(4904), o = Math.floor;
          e2.exports = Number.isInteger || function(e3) {
            return !n2(e3) && isFinite(e3) && o(e3) === e3;
          };
        }, 7102: function(e2) {
          e2.exports = function(e3) {
            return e3 == null;
          };
        }, 4904: function(e2, t2, r2) {
          var n2 = r2(7505), o = r2(7691), i = o.all;
          e2.exports = o.IS_HTMLDDA ? function(e3) {
            return typeof e3 == "object" ? e3 !== null : n2(e3) || e3 === i;
          } : function(e3) {
            return typeof e3 == "object" ? e3 !== null : n2(e3);
          };
        }, 4623: function(e2) {
          e2.exports = false;
        }, 324: function(e2, t2, r2) {
          var n2 = r2(4904), o = r2(2449), i = r2(673)("match");
          e2.exports = function(e3) {
            var t3;
            return n2(e3) && ((t3 = e3[i]) !== void 0 ? !!t3 : o(e3) == "RegExp");
          };
        }, 8340: function(e2, t2, r2) {
          var n2 = r2(2439), o = r2(7505), i = r2(7666), a = r2(9723), s = Object;
          e2.exports = a ? function(e3) {
            return typeof e3 == "symbol";
          } : function(e3) {
            var t3 = n2("Symbol");
            return o(t3) && i(t3.prototype, s(e3));
          };
        }, 7985: function(e2, t2, r2) {
          var n2 = r2(3581), o = r2(416), i = r2(4291), a = r2(9191), s = r2(7164), c = r2(3085), u = r2(7666), l = r2(9504), p = r2(6754), h = r2(1101), d = TypeError, f = function(e3, t3) {
            this.stopped = e3, this.result = t3;
          }, m = f.prototype;
          e2.exports = function(e3, t3, r3) {
            var g, y, E, v, T, _, O, R = r3 && r3.that, I = !(!r3 || !r3.AS_ENTRIES), S = !(!r3 || !r3.IS_RECORD), A = !(!r3 || !r3.IS_ITERATOR), N = !(!r3 || !r3.INTERRUPTED), C = n2(t3, R), b = function(e4) {
              return g && h(g, "normal", e4), new f(true, e4);
            }, M = function(e4) {
              return I ? (i(e4), N ? C(e4[0], e4[1], b) : C(e4[0], e4[1])) : N ? C(e4, b) : C(e4);
            };
            if (S)
              g = e3.iterator;
            else if (A)
              g = e3;
            else {
              if (!(y = p(e3)))
                throw d(a(e3) + " is not iterable");
              if (s(y)) {
                for (E = 0, v = c(e3); v > E; E++)
                  if ((T = M(e3[E])) && u(m, T))
                    return T;
                return new f(false);
              }
              g = l(e3, y);
            }
            for (_ = S ? e3.next : g.next; !(O = o(_, g)).done; ) {
              try {
                T = M(O.value);
              } catch (e4) {
                h(g, "throw", e4);
              }
              if (typeof T == "object" && T && u(m, T))
                return T;
            }
            return new f(false);
          };
        }, 1101: function(e2, t2, r2) {
          var n2 = r2(416), o = r2(4291), i = r2(9058);
          e2.exports = function(e3, t3, r3) {
            var a, s;
            o(e3);
            try {
              if (!(a = i(e3, "return"))) {
                if (t3 === "throw")
                  throw r3;
                return r3;
              }
              a = n2(a, e3);
            } catch (e4) {
              s = true, a = e4;
            }
            if (t3 === "throw")
              throw r3;
            if (s)
              throw a;
            return o(a), r3;
          };
        }, 4476: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(4519).IteratorPrototype, o = r2(554), i = r2(1673), a = r2(819), s = r2(4914), c = function() {
            return this;
          };
          e2.exports = function(e3, t3, r3, u) {
            var l = t3 + " Iterator";
            return e3.prototype = o(n2, { next: i(+!u, r3) }), a(e3, l, false, true), s[l] = c, e3;
          };
        }, 8830: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(4723), o = r2(416), i = r2(4623), a = r2(5281), s = r2(7505), c = r2(4476), u = r2(9165), l = r2(8604), p = r2(819), h = r2(4034), d = r2(7407), f = r2(673), m = r2(4914), g = r2(4519), y = a.PROPER, E = a.CONFIGURABLE, v = g.IteratorPrototype, T = g.BUGGY_SAFARI_ITERATORS, _ = f("iterator"), O = "keys", R = "values", I = "entries", S = function() {
            return this;
          };
          e2.exports = function(e3, t3, r3, a2, f2, g2, A) {
            c(r3, t3, a2);
            var N, C, b, M = function(e4) {
              if (e4 === f2 && x)
                return x;
              if (!T && e4 in k)
                return k[e4];
              switch (e4) {
                case O:
                case R:
                case I:
                  return function() {
                    return new r3(this, e4);
                  };
              }
              return function() {
                return new r3(this);
              };
            }, w = t3 + " Iterator", U = false, k = e3.prototype, P = k[_] || k["@@iterator"] || f2 && k[f2], x = !T && P || M(f2), L = t3 == "Array" && k.entries || P;
            if (L && (N = u(L.call(new e3()))) !== Object.prototype && N.next && (i || u(N) === v || (l ? l(N, v) : s(N[_]) || d(N, _, S)), p(N, w, true, true), i && (m[w] = S)), y && f2 == R && P && P.name !== R && (!i && E ? h(k, "name", R) : (U = true, x = function() {
              return o(P, this);
            })), f2)
              if (C = { values: M(R), keys: g2 ? x : M(O), entries: M(I) }, A)
                for (b in C)
                  (T || U || !(b in k)) && d(k, b, C[b]);
              else
                n2({ target: t3, proto: true, forced: T || U }, C);
            return i && !A || k[_] === x || d(k, _, x, { name: f2 }), m[t3] = x, C;
          };
        }, 4519: function(e2, t2, r2) {
          "use strict";
          var n2, o, i, a = r2(6866), s = r2(7505), c = r2(4904), u = r2(554), l = r2(9165), p = r2(7407), h = r2(673), d = r2(4623), f = h("iterator"), m = false;
          [].keys && ("next" in (i = [].keys()) ? (o = l(l(i))) !== Object.prototype && (n2 = o) : m = true), !c(n2) || a(function() {
            var e3 = {};
            return n2[f].call(e3) !== e3;
          }) ? n2 = {} : d && (n2 = u(n2)), s(n2[f]) || p(n2, f, function() {
            return this;
          }), e2.exports = { IteratorPrototype: n2, BUGGY_SAFARI_ITERATORS: m };
        }, 4914: function(e2) {
          e2.exports = {};
        }, 3085: function(e2, t2, r2) {
          var n2 = r2(2234);
          e2.exports = function(e3) {
            return n2(e3.length);
          };
        }, 8082: function(e2, t2, r2) {
          var n2 = r2(6866), o = r2(7505), i = r2(2220), a = r2(7303), s = r2(5281).CONFIGURABLE, c = r2(3262), u = r2(8390), l = u.enforce, p = u.get, h = Object.defineProperty, d = a && !n2(function() {
            return h(function() {
            }, "length", { value: 8 }).length !== 8;
          }), f = String(String).split("String"), m = e2.exports = function(e3, t3, r3) {
            String(t3).slice(0, 7) === "Symbol(" && (t3 = "[" + String(t3).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), r3 && r3.getter && (t3 = "get " + t3), r3 && r3.setter && (t3 = "set " + t3), (!i(e3, "name") || s && e3.name !== t3) && (a ? h(e3, "name", { value: t3, configurable: true }) : e3.name = t3), d && r3 && i(r3, "arity") && e3.length !== r3.arity && h(e3, "length", { value: r3.arity });
            try {
              r3 && i(r3, "constructor") && r3.constructor ? a && h(e3, "prototype", { writable: false }) : e3.prototype && (e3.prototype = void 0);
            } catch (e4) {
            }
            var n3 = l(e3);
            return i(n3, "source") || (n3.source = f.join(typeof t3 == "string" ? t3 : "")), e3;
          };
          Function.prototype.toString = m(function() {
            return o(this) && p(this).source || c(this);
          }, "toString");
        }, 1863: function(e2) {
          var t2 = Math.ceil, r2 = Math.floor;
          e2.exports = Math.trunc || function(e3) {
            var n2 = +e3;
            return (n2 > 0 ? r2 : t2)(n2);
          };
        }, 501: function(e2, t2, r2) {
          var n2, o, i, a, s, c, u, l, p = r2(4451), h = r2(3581), d = r2(3338).f, f = r2(6831).set, m = r2(9514), g = r2(3064), y = r2(9874), E = r2(7481), v = p.MutationObserver || p.WebKitMutationObserver, T = p.document, _ = p.process, O = p.Promise, R = d(p, "queueMicrotask"), I = R && R.value;
          I || (n2 = function() {
            var e3, t3;
            for (E && (e3 = _.domain) && e3.exit(); o; ) {
              t3 = o.fn, o = o.next;
              try {
                t3();
              } catch (e4) {
                throw o ? a() : i = void 0, e4;
              }
            }
            i = void 0, e3 && e3.enter();
          }, m || E || y || !v || !T ? !g && O && O.resolve ? ((u = O.resolve(void 0)).constructor = O, l = h(u.then, u), a = function() {
            l(n2);
          }) : E ? a = function() {
            _.nextTick(n2);
          } : (f = h(f, p), a = function() {
            f(n2);
          }) : (s = true, c = T.createTextNode(""), new v(n2).observe(c, { characterData: true }), a = function() {
            c.data = s = !s;
          })), e2.exports = I || function(e3) {
            var t3 = { fn: e3, next: void 0 };
            i && (i.next = t3), o || (o = t3, a()), i = t3;
          };
        }, 8072: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(5029), o = TypeError, i = function(e3) {
            var t3, r3;
            this.promise = new e3(function(e4, n3) {
              if (t3 !== void 0 || r3 !== void 0)
                throw o("Bad Promise constructor");
              t3 = e4, r3 = n3;
            }), this.resolve = n2(t3), this.reject = n2(r3);
          };
          e2.exports.f = function(e3) {
            return new i(e3);
          };
        }, 8349: function(e2, t2, r2) {
          var n2 = r2(324), o = TypeError;
          e2.exports = function(e3) {
            if (n2(e3))
              throw o("The method doesn't accept regular expressions");
            return e3;
          };
        }, 3399: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(7303), o = r2(1705), i = r2(416), a = r2(6866), s = r2(7370), c = r2(8438), u = r2(3890), l = r2(4220), p = r2(9427), h = Object.assign, d = Object.defineProperty, f = o([].concat);
          e2.exports = !h || a(function() {
            if (n2 && h({ b: 1 }, h(d({}, "a", { enumerable: true, get: function() {
              d(this, "b", { value: 3, enumerable: false });
            } }), { b: 2 })).b !== 1)
              return true;
            var e3 = {}, t3 = {}, r3 = Symbol(), o2 = "abcdefghijklmnopqrst";
            return e3[r3] = 7, o2.split("").forEach(function(e4) {
              t3[e4] = e4;
            }), h({}, e3)[r3] != 7 || s(h({}, t3)).join("") != o2;
          }) ? function(e3, t3) {
            for (var r3 = l(e3), o2 = arguments.length, a2 = 1, h2 = c.f, d2 = u.f; o2 > a2; )
              for (var m, g = p(arguments[a2++]), y = h2 ? f(s(g), h2(g)) : s(g), E = y.length, v = 0; E > v; )
                m = y[v++], n2 && !i(d2, g, m) || (r3[m] = g[m]);
            return r3;
          } : h;
        }, 554: function(e2, t2, r2) {
          var n2, o = r2(4291), i = r2(5429), a = r2(1961), s = r2(5003), c = r2(452), u = r2(8620), l = r2(4228)("IE_PROTO"), p = function() {
          }, h = function(e3) {
            return "<script>" + e3 + "<\/script>";
          }, d = function(e3) {
            e3.write(h("")), e3.close();
            var t3 = e3.parentWindow.Object;
            return e3 = null, t3;
          }, f = function() {
            try {
              n2 = new ActiveXObject("htmlfile");
            } catch (e4) {
            }
            var e3, t3;
            f = typeof document != "undefined" ? document.domain && n2 ? d(n2) : ((t3 = u("iframe")).style.display = "none", c.appendChild(t3), t3.src = String("javascript:"), (e3 = t3.contentWindow.document).open(), e3.write(h("document.F=Object")), e3.close(), e3.F) : d(n2);
            for (var r3 = a.length; r3--; )
              delete f.prototype[a[r3]];
            return f();
          };
          s[l] = true, e2.exports = Object.create || function(e3, t3) {
            var r3;
            return e3 !== null ? (p.prototype = o(e3), r3 = new p(), p.prototype = null, r3[l] = e3) : r3 = f(), t3 === void 0 ? r3 : i.f(r3, t3);
          };
        }, 5429: function(e2, t2, r2) {
          var n2 = r2(7303), o = r2(1216), i = r2(1695), a = r2(4291), s = r2(2714), c = r2(7370);
          t2.f = n2 && !o ? Object.defineProperties : function(e3, t3) {
            a(e3);
            for (var r3, n3 = s(t3), o2 = c(t3), u = o2.length, l = 0; u > l; )
              i.f(e3, r3 = o2[l++], n3[r3]);
            return e3;
          };
        }, 1695: function(e2, t2, r2) {
          var n2 = r2(7303), o = r2(403), i = r2(1216), a = r2(4291), s = r2(3957), c = TypeError, u = Object.defineProperty, l = Object.getOwnPropertyDescriptor;
          t2.f = n2 ? i ? function(e3, t3, r3) {
            if (a(e3), t3 = s(t3), a(r3), typeof e3 == "function" && t3 === "prototype" && "value" in r3 && "writable" in r3 && !r3.writable) {
              var n3 = l(e3, t3);
              n3 && n3.writable && (e3[t3] = r3.value, r3 = { configurable: "configurable" in r3 ? r3.configurable : n3.configurable, enumerable: "enumerable" in r3 ? r3.enumerable : n3.enumerable, writable: false });
            }
            return u(e3, t3, r3);
          } : u : function(e3, t3, r3) {
            if (a(e3), t3 = s(t3), a(r3), o)
              try {
                return u(e3, t3, r3);
              } catch (e4) {
              }
            if ("get" in r3 || "set" in r3)
              throw c("Accessors not supported");
            return "value" in r3 && (e3[t3] = r3.value), e3;
          };
        }, 3338: function(e2, t2, r2) {
          var n2 = r2(7303), o = r2(416), i = r2(3890), a = r2(1673), s = r2(2714), c = r2(3957), u = r2(2220), l = r2(403), p = Object.getOwnPropertyDescriptor;
          t2.f = n2 ? p : function(e3, t3) {
            if (e3 = s(e3), t3 = c(t3), l)
              try {
                return p(e3, t3);
              } catch (e4) {
              }
            if (u(e3, t3))
              return a(!o(i.f, e3, t3), e3[t3]);
          };
        }, 7116: function(e2, t2, r2) {
          var n2 = r2(2449), o = r2(2714), i = r2(6702).f, a = r2(8264), s = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
          e2.exports.f = function(e3) {
            return s && n2(e3) == "Window" ? function(e4) {
              try {
                return i(e4);
              } catch (e5) {
                return a(s);
              }
            }(e3) : i(o(e3));
          };
        }, 6702: function(e2, t2, r2) {
          var n2 = r2(2075), o = r2(1961).concat("length", "prototype");
          t2.f = Object.getOwnPropertyNames || function(e3) {
            return n2(e3, o);
          };
        }, 8438: function(e2, t2) {
          t2.f = Object.getOwnPropertySymbols;
        }, 9165: function(e2, t2, r2) {
          var n2 = r2(2220), o = r2(7505), i = r2(4220), a = r2(4228), s = r2(6059), c = a("IE_PROTO"), u = Object, l = u.prototype;
          e2.exports = s ? u.getPrototypeOf : function(e3) {
            var t3 = i(e3);
            if (n2(t3, c))
              return t3[c];
            var r3 = t3.constructor;
            return o(r3) && t3 instanceof r3 ? r3.prototype : t3 instanceof u ? l : null;
          };
        }, 7774: function(e2, t2, r2) {
          var n2 = r2(6866), o = r2(4904), i = r2(2449), a = r2(2131), s = Object.isExtensible, c = n2(function() {
            s(1);
          });
          e2.exports = c || a ? function(e3) {
            return !!o(e3) && (!a || i(e3) != "ArrayBuffer") && (!s || s(e3));
          } : s;
        }, 7666: function(e2, t2, r2) {
          var n2 = r2(1705);
          e2.exports = n2({}.isPrototypeOf);
        }, 2075: function(e2, t2, r2) {
          var n2 = r2(1705), o = r2(2220), i = r2(2714), a = r2(3712).indexOf, s = r2(5003), c = n2([].push);
          e2.exports = function(e3, t3) {
            var r3, n3 = i(e3), u = 0, l = [];
            for (r3 in n3)
              !o(s, r3) && o(n3, r3) && c(l, r3);
            for (; t3.length > u; )
              o(n3, r3 = t3[u++]) && (~a(l, r3) || c(l, r3));
            return l;
          };
        }, 7370: function(e2, t2, r2) {
          var n2 = r2(2075), o = r2(1961);
          e2.exports = Object.keys || function(e3) {
            return n2(e3, o);
          };
        }, 3890: function(e2, t2) {
          "use strict";
          var r2 = {}.propertyIsEnumerable, n2 = Object.getOwnPropertyDescriptor, o = n2 && !r2.call({ 1: 2 }, 1);
          t2.f = o ? function(e3) {
            var t3 = n2(this, e3);
            return !!t3 && t3.enumerable;
          } : r2;
        }, 8604: function(e2, t2, r2) {
          var n2 = r2(1705), o = r2(4291), i = r2(7645);
          e2.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
            var e3, t3 = false, r3 = {};
            try {
              (e3 = n2(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set))(r3, []), t3 = r3 instanceof Array;
            } catch (e4) {
            }
            return function(r4, n3) {
              return o(r4), i(n3), t3 ? e3(r4, n3) : r4.__proto__ = n3, r4;
            };
          }() : void 0);
        }, 8439: function(e2, t2, r2) {
          var n2 = r2(7303), o = r2(1705), i = r2(7370), a = r2(2714), s = o(r2(3890).f), c = o([].push), u = function(e3) {
            return function(t3) {
              for (var r3, o2 = a(t3), u2 = i(o2), l = u2.length, p = 0, h = []; l > p; )
                r3 = u2[p++], n2 && !s(o2, r3) || c(h, e3 ? [r3, o2[r3]] : o2[r3]);
              return h;
            };
          };
          e2.exports = { entries: u(true), values: u(false) };
        }, 4726: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(8103), o = r2(5449);
          e2.exports = n2 ? {}.toString : function() {
            return "[object " + o(this) + "]";
          };
        }, 2812: function(e2, t2, r2) {
          var n2 = r2(416), o = r2(7505), i = r2(4904), a = TypeError;
          e2.exports = function(e3, t3) {
            var r3, s;
            if (t3 === "string" && o(r3 = e3.toString) && !i(s = n2(r3, e3)))
              return s;
            if (o(r3 = e3.valueOf) && !i(s = n2(r3, e3)))
              return s;
            if (t3 !== "string" && o(r3 = e3.toString) && !i(s = n2(r3, e3)))
              return s;
            throw a("Can't convert object to primitive value");
          };
        }, 7738: function(e2, t2, r2) {
          var n2 = r2(2439), o = r2(1705), i = r2(6702), a = r2(8438), s = r2(4291), c = o([].concat);
          e2.exports = n2("Reflect", "ownKeys") || function(e3) {
            var t3 = i.f(s(e3)), r3 = a.f;
            return r3 ? c(t3, r3(e3)) : t3;
          };
        }, 8582: function(e2, t2, r2) {
          var n2 = r2(4451);
          e2.exports = n2;
        }, 595: function(e2) {
          e2.exports = function(e3) {
            try {
              return { error: false, value: e3() };
            } catch (e4) {
              return { error: true, value: e4 };
            }
          };
        }, 5742: function(e2, t2, r2) {
          var n2 = r2(4451), o = r2(8081), i = r2(7505), a = r2(6538), s = r2(3262), c = r2(673), u = r2(7757), l = r2(3311), p = r2(4623), h = r2(8472), d = o && o.prototype, f = c("species"), m = false, g = i(n2.PromiseRejectionEvent), y = a("Promise", function() {
            var e3 = s(o), t3 = e3 !== String(o);
            if (!t3 && h === 66)
              return true;
            if (p && (!d.catch || !d.finally))
              return true;
            if (!h || h < 51 || !/native code/.test(e3)) {
              var r3 = new o(function(e4) {
                e4(1);
              }), n3 = function(e4) {
                e4(function() {
                }, function() {
                });
              };
              if ((r3.constructor = {})[f] = n3, !(m = r3.then(function() {
              }) instanceof n3))
                return true;
            }
            return !t3 && (u || l) && !g;
          });
          e2.exports = { CONSTRUCTOR: y, REJECTION_EVENT: g, SUBCLASSING: m };
        }, 8081: function(e2, t2, r2) {
          var n2 = r2(4451);
          e2.exports = n2.Promise;
        }, 946: function(e2, t2, r2) {
          var n2 = r2(4291), o = r2(4904), i = r2(8072);
          e2.exports = function(e3, t3) {
            if (n2(e3), o(t3) && t3.constructor === e3)
              return t3;
            var r3 = i.f(e3);
            return (0, r3.resolve)(t3), r3.promise;
          };
        }, 7613: function(e2, t2, r2) {
          var n2 = r2(8081), o = r2(7961), i = r2(5742).CONSTRUCTOR;
          e2.exports = i || !o(function(e3) {
            n2.all(e3).then(void 0, function() {
            });
          });
        }, 1715: function(e2) {
          var t2 = function() {
            this.head = null, this.tail = null;
          };
          t2.prototype = { add: function(e3) {
            var t3 = { item: e3, next: null };
            this.head ? this.tail.next = t3 : this.head = t3, this.tail = t3;
          }, get: function() {
            var e3 = this.head;
            if (e3)
              return this.head = e3.next, this.tail === e3 && (this.tail = null), e3.item;
          } }, e2.exports = t2;
        }, 5239: function(e2, t2, r2) {
          "use strict";
          var n2, o, i = r2(416), a = r2(1705), s = r2(2454), c = r2(2453), u = r2(4644), l = r2(1084), p = r2(554), h = r2(8390).get, d = r2(4270), f = r2(1234), m = l("native-string-replace", String.prototype.replace), g = RegExp.prototype.exec, y = g, E = a("".charAt), v = a("".indexOf), T = a("".replace), _ = a("".slice), O = (o = /b*/g, i(g, n2 = /a/, "a"), i(g, o, "a"), n2.lastIndex !== 0 || o.lastIndex !== 0), R = u.BROKEN_CARET, I = /()??/.exec("")[1] !== void 0;
          (O || I || R || d || f) && (y = function(e3) {
            var t3, r3, n3, o2, a2, u2, l2, d2 = this, f2 = h(d2), S = s(e3), A = f2.raw;
            if (A)
              return A.lastIndex = d2.lastIndex, t3 = i(y, A, S), d2.lastIndex = A.lastIndex, t3;
            var N = f2.groups, C = R && d2.sticky, b = i(c, d2), M = d2.source, w = 0, U = S;
            if (C && (b = T(b, "y", ""), v(b, "g") === -1 && (b += "g"), U = _(S, d2.lastIndex), d2.lastIndex > 0 && (!d2.multiline || d2.multiline && E(S, d2.lastIndex - 1) !== "\n") && (M = "(?: " + M + ")", U = " " + U, w++), r3 = new RegExp("^(?:" + M + ")", b)), I && (r3 = new RegExp("^" + M + "$(?!\\s)", b)), O && (n3 = d2.lastIndex), o2 = i(g, C ? r3 : d2, U), C ? o2 ? (o2.input = _(o2.input, w), o2[0] = _(o2[0], w), o2.index = d2.lastIndex, d2.lastIndex += o2[0].length) : d2.lastIndex = 0 : O && o2 && (d2.lastIndex = d2.global ? o2.index + o2[0].length : n3), I && o2 && o2.length > 1 && i(m, o2[0], r3, function() {
              for (a2 = 1; a2 < arguments.length - 2; a2++)
                arguments[a2] === void 0 && (o2[a2] = void 0);
            }), o2 && N)
              for (o2.groups = u2 = p(null), a2 = 0; a2 < N.length; a2++)
                u2[(l2 = N[a2])[0]] = o2[l2[1]];
            return o2;
          }), e2.exports = y;
        }, 2453: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(4291);
          e2.exports = function() {
            var e3 = n2(this), t3 = "";
            return e3.hasIndices && (t3 += "d"), e3.global && (t3 += "g"), e3.ignoreCase && (t3 += "i"), e3.multiline && (t3 += "m"), e3.dotAll && (t3 += "s"), e3.unicode && (t3 += "u"), e3.unicodeSets && (t3 += "v"), e3.sticky && (t3 += "y"), t3;
          };
        }, 1630: function(e2, t2, r2) {
          var n2 = r2(416), o = r2(2220), i = r2(7666), a = r2(2453), s = RegExp.prototype;
          e2.exports = function(e3) {
            var t3 = e3.flags;
            return t3 !== void 0 || "flags" in s || o(e3, "flags") || !i(s, e3) ? t3 : n2(a, e3);
          };
        }, 4644: function(e2, t2, r2) {
          var n2 = r2(6866), o = r2(4451).RegExp, i = n2(function() {
            var e3 = o("a", "y");
            return e3.lastIndex = 2, e3.exec("abcd") != null;
          }), a = i || n2(function() {
            return !o("a", "y").sticky;
          }), s = i || n2(function() {
            var e3 = o("^r", "gy");
            return e3.lastIndex = 2, e3.exec("str") != null;
          });
          e2.exports = { BROKEN_CARET: s, MISSED_STICKY: a, UNSUPPORTED_Y: i };
        }, 4270: function(e2, t2, r2) {
          var n2 = r2(6866), o = r2(4451).RegExp;
          e2.exports = n2(function() {
            var e3 = o(".", "s");
            return !(e3.dotAll && e3.exec("\n") && e3.flags === "s");
          });
        }, 1234: function(e2, t2, r2) {
          var n2 = r2(6866), o = r2(4451).RegExp;
          e2.exports = n2(function() {
            var e3 = o("(?<a>b)", "g");
            return e3.exec("b").groups.a !== "b" || "b".replace(e3, "$<a>c") !== "bc";
          });
        }, 9544: function(e2, t2, r2) {
          var n2 = r2(7102), o = TypeError;
          e2.exports = function(e3) {
            if (n2(e3))
              throw o("Can't call method on " + e3);
            return e3;
          };
        }, 2613: function(e2, t2, r2) {
          var n2 = r2(4451), o = r2(2598), i = r2(7505), a = r2(5713), s = r2(4899), c = r2(5030), u = /MSIE .\./.test(a), l = n2.Function, p = function(e3) {
            return u ? function(t3, r3) {
              var n3 = c(arguments.length, 1) > 2, a2 = i(t3) ? t3 : l(t3), u2 = n3 ? s(arguments, 2) : void 0;
              return e3(n3 ? function() {
                o(a2, this, u2);
              } : a2, r3);
            } : e3;
          };
          e2.exports = { setTimeout: p(n2.setTimeout), setInterval: p(n2.setInterval) };
        }, 2197: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(2439), o = r2(1695), i = r2(673), a = r2(7303), s = i("species");
          e2.exports = function(e3) {
            var t3 = n2(e3), r3 = o.f;
            a && t3 && !t3[s] && r3(t3, s, { configurable: true, get: function() {
              return this;
            } });
          };
        }, 819: function(e2, t2, r2) {
          var n2 = r2(1695).f, o = r2(2220), i = r2(673)("toStringTag");
          e2.exports = function(e3, t3, r3) {
            e3 && !r3 && (e3 = e3.prototype), e3 && !o(e3, i) && n2(e3, i, { configurable: true, value: t3 });
          };
        }, 4228: function(e2, t2, r2) {
          var n2 = r2(1084), o = r2(412), i = n2("keys");
          e2.exports = function(e3) {
            return i[e3] || (i[e3] = o(e3));
          };
        }, 3010: function(e2, t2, r2) {
          var n2 = r2(4451), o = r2(5870), i = "__core-js_shared__", a = n2[i] || o(i, {});
          e2.exports = a;
        }, 1084: function(e2, t2, r2) {
          var n2 = r2(4623), o = r2(3010);
          (e2.exports = function(e3, t3) {
            return o[e3] || (o[e3] = t3 !== void 0 ? t3 : {});
          })("versions", []).push({ version: "3.26.1", mode: n2 ? "pure" : "global", copyright: "\xA9 2014-2022 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE", source: "https://github.com/zloirock/core-js" });
        }, 8477: function(e2, t2, r2) {
          var n2 = r2(4291), o = r2(5347), i = r2(7102), a = r2(673)("species");
          e2.exports = function(e3, t3) {
            var r3, s = n2(e3).constructor;
            return s === void 0 || i(r3 = n2(s)[a]) ? t3 : o(r3);
          };
        }, 9985: function(e2, t2, r2) {
          var n2 = r2(1705), o = r2(1045), i = r2(2454), a = r2(9544), s = n2("".charAt), c = n2("".charCodeAt), u = n2("".slice), l = function(e3) {
            return function(t3, r3) {
              var n3, l2, p = i(a(t3)), h = o(r3), d = p.length;
              return h < 0 || h >= d ? e3 ? "" : void 0 : (n3 = c(p, h)) < 55296 || n3 > 56319 || h + 1 === d || (l2 = c(p, h + 1)) < 56320 || l2 > 57343 ? e3 ? s(p, h) : n3 : e3 ? u(p, h, h + 2) : l2 - 56320 + (n3 - 55296 << 10) + 65536;
            };
          };
          e2.exports = { codeAt: l(false), charAt: l(true) };
        }, 6611: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(1705), o = 2147483647, i = /[^\0-\u007E]/, a = /[.\u3002\uFF0E\uFF61]/g, s = "Overflow: input needs wider integers to process", c = RangeError, u = n2(a.exec), l = Math.floor, p = String.fromCharCode, h = n2("".charCodeAt), d = n2([].join), f = n2([].push), m = n2("".replace), g = n2("".split), y = n2("".toLowerCase), E = function(e3) {
            return e3 + 22 + 75 * (e3 < 26);
          }, v = function(e3, t3, r3) {
            var n3 = 0;
            for (e3 = r3 ? l(e3 / 700) : e3 >> 1, e3 += l(e3 / t3); e3 > 455; )
              e3 = l(e3 / 35), n3 += 36;
            return l(n3 + 36 * e3 / (e3 + 38));
          }, T = function(e3) {
            var t3 = [];
            e3 = function(e4) {
              for (var t4 = [], r4 = 0, n4 = e4.length; r4 < n4; ) {
                var o2 = h(e4, r4++);
                if (o2 >= 55296 && o2 <= 56319 && r4 < n4) {
                  var i3 = h(e4, r4++);
                  (64512 & i3) == 56320 ? f(t4, ((1023 & o2) << 10) + (1023 & i3) + 65536) : (f(t4, o2), r4--);
                } else
                  f(t4, o2);
              }
              return t4;
            }(e3);
            var r3, n3, i2 = e3.length, a2 = 128, u2 = 0, m2 = 72;
            for (r3 = 0; r3 < e3.length; r3++)
              (n3 = e3[r3]) < 128 && f(t3, p(n3));
            var g2 = t3.length, y2 = g2;
            for (g2 && f(t3, "-"); y2 < i2; ) {
              var T2 = o;
              for (r3 = 0; r3 < e3.length; r3++)
                (n3 = e3[r3]) >= a2 && n3 < T2 && (T2 = n3);
              var _ = y2 + 1;
              if (T2 - a2 > l((o - u2) / _))
                throw c(s);
              for (u2 += (T2 - a2) * _, a2 = T2, r3 = 0; r3 < e3.length; r3++) {
                if ((n3 = e3[r3]) < a2 && ++u2 > o)
                  throw c(s);
                if (n3 == a2) {
                  for (var O = u2, R = 36; ; ) {
                    var I = R <= m2 ? 1 : R >= m2 + 26 ? 26 : R - m2;
                    if (O < I)
                      break;
                    var S = O - I, A = 36 - I;
                    f(t3, p(E(I + S % A))), O = l(S / A), R += 36;
                  }
                  f(t3, p(E(O))), m2 = v(u2, _, y2 == g2), u2 = 0, y2++;
                }
              }
              u2++, a2++;
            }
            return d(t3, "");
          };
          e2.exports = function(e3) {
            var t3, r3, n3 = [], o2 = g(m(y(e3), a, "."), ".");
            for (t3 = 0; t3 < o2.length; t3++)
              r3 = o2[t3], f(n3, u(i, r3) ? "xn--" + T(r3) : r3);
            return d(n3, ".");
          };
        }, 148: function(e2, t2, r2) {
          var n2 = r2(1705), o = r2(9544), i = r2(2454), a = r2(1811), s = n2("".replace), c = "[" + a + "]", u = RegExp("^" + c + c + "*"), l = RegExp(c + c + "*$"), p = function(e3) {
            return function(t3) {
              var r3 = i(o(t3));
              return 1 & e3 && (r3 = s(r3, u, "")), 2 & e3 && (r3 = s(r3, l, "")), r3;
            };
          };
          e2.exports = { start: p(1), end: p(2), trim: p(3) };
        }, 5143: function(e2, t2, r2) {
          var n2 = r2(8472), o = r2(6866);
          e2.exports = !!Object.getOwnPropertySymbols && !o(function() {
            var e3 = Symbol();
            return !String(e3) || !(Object(e3) instanceof Symbol) || !Symbol.sham && n2 && n2 < 41;
          });
        }, 2840: function(e2, t2, r2) {
          var n2 = r2(416), o = r2(2439), i = r2(673), a = r2(7407);
          e2.exports = function() {
            var e3 = o("Symbol"), t3 = e3 && e3.prototype, r3 = t3 && t3.valueOf, s = i("toPrimitive");
            t3 && !t3[s] && a(t3, s, function(e4) {
              return n2(r3, this);
            }, { arity: 1 });
          };
        }, 8396: function(e2, t2, r2) {
          var n2 = r2(5143);
          e2.exports = n2 && !!Symbol.for && !!Symbol.keyFor;
        }, 6831: function(e2, t2, r2) {
          var n2, o, i, a, s = r2(4451), c = r2(2598), u = r2(3581), l = r2(7505), p = r2(2220), h = r2(6866), d = r2(452), f = r2(4899), m = r2(8620), g = r2(5030), y = r2(9514), E = r2(7481), v = s.setImmediate, T = s.clearImmediate, _ = s.process, O = s.Dispatch, R = s.Function, I = s.MessageChannel, S = s.String, A = 0, N = {};
          try {
            n2 = s.location;
          } catch (e3) {
          }
          var C = function(e3) {
            if (p(N, e3)) {
              var t3 = N[e3];
              delete N[e3], t3();
            }
          }, b = function(e3) {
            return function() {
              C(e3);
            };
          }, M = function(e3) {
            C(e3.data);
          }, w = function(e3) {
            s.postMessage(S(e3), n2.protocol + "//" + n2.host);
          };
          v && T || (v = function(e3) {
            g(arguments.length, 1);
            var t3 = l(e3) ? e3 : R(e3), r3 = f(arguments, 1);
            return N[++A] = function() {
              c(t3, void 0, r3);
            }, o(A), A;
          }, T = function(e3) {
            delete N[e3];
          }, E ? o = function(e3) {
            _.nextTick(b(e3));
          } : O && O.now ? o = function(e3) {
            O.now(b(e3));
          } : I && !y ? (a = (i = new I()).port2, i.port1.onmessage = M, o = u(a.postMessage, a)) : s.addEventListener && l(s.postMessage) && !s.importScripts && n2 && n2.protocol !== "file:" && !h(w) ? (o = w, s.addEventListener("message", M, false)) : o = "onreadystatechange" in m("script") ? function(e3) {
            d.appendChild(m("script")).onreadystatechange = function() {
              d.removeChild(this), C(e3);
            };
          } : function(e3) {
            setTimeout(b(e3), 0);
          }), e2.exports = { set: v, clear: T };
        }, 6999: function(e2, t2, r2) {
          var n2 = r2(1705);
          e2.exports = n2(1 .valueOf);
        }, 7193: function(e2, t2, r2) {
          var n2 = r2(1045), o = Math.max, i = Math.min;
          e2.exports = function(e3, t3) {
            var r3 = n2(e3);
            return r3 < 0 ? o(r3 + t3, 0) : i(r3, t3);
          };
        }, 9548: function(e2, t2, r2) {
          var n2 = r2(124), o = TypeError;
          e2.exports = function(e3) {
            var t3 = n2(e3, "number");
            if (typeof t3 == "number")
              throw o("Can't convert number to bigint");
            return BigInt(t3);
          };
        }, 1515: function(e2, t2, r2) {
          var n2 = r2(1045), o = r2(2234), i = RangeError;
          e2.exports = function(e3) {
            if (e3 === void 0)
              return 0;
            var t3 = n2(e3), r3 = o(t3);
            if (t3 !== r3)
              throw i("Wrong length or index");
            return r3;
          };
        }, 2714: function(e2, t2, r2) {
          var n2 = r2(9427), o = r2(9544);
          e2.exports = function(e3) {
            return n2(o(e3));
          };
        }, 1045: function(e2, t2, r2) {
          var n2 = r2(1863);
          e2.exports = function(e3) {
            var t3 = +e3;
            return t3 != t3 || t3 === 0 ? 0 : n2(t3);
          };
        }, 2234: function(e2, t2, r2) {
          var n2 = r2(1045), o = Math.min;
          e2.exports = function(e3) {
            return e3 > 0 ? o(n2(e3), 9007199254740991) : 0;
          };
        }, 4220: function(e2, t2, r2) {
          var n2 = r2(9544), o = Object;
          e2.exports = function(e3) {
            return o(n2(e3));
          };
        }, 843: function(e2, t2, r2) {
          var n2 = r2(4398), o = RangeError;
          e2.exports = function(e3, t3) {
            var r3 = n2(e3);
            if (r3 % t3)
              throw o("Wrong offset");
            return r3;
          };
        }, 4398: function(e2, t2, r2) {
          var n2 = r2(1045), o = RangeError;
          e2.exports = function(e3) {
            var t3 = n2(e3);
            if (t3 < 0)
              throw o("The argument can't be less than 0");
            return t3;
          };
        }, 124: function(e2, t2, r2) {
          var n2 = r2(416), o = r2(4904), i = r2(8340), a = r2(9058), s = r2(2812), c = r2(673), u = TypeError, l = c("toPrimitive");
          e2.exports = function(e3, t3) {
            if (!o(e3) || i(e3))
              return e3;
            var r3, c2 = a(e3, l);
            if (c2) {
              if (t3 === void 0 && (t3 = "default"), r3 = n2(c2, e3, t3), !o(r3) || i(r3))
                return r3;
              throw u("Can't convert object to primitive value");
            }
            return t3 === void 0 && (t3 = "number"), s(e3, t3);
          };
        }, 3957: function(e2, t2, r2) {
          var n2 = r2(124), o = r2(8340);
          e2.exports = function(e3) {
            var t3 = n2(e3, "string");
            return o(t3) ? t3 : t3 + "";
          };
        }, 8103: function(e2, t2, r2) {
          var n2 = {};
          n2[r2(673)("toStringTag")] = "z", e2.exports = String(n2) === "[object z]";
        }, 2454: function(e2, t2, r2) {
          var n2 = r2(5449), o = String;
          e2.exports = function(e3) {
            if (n2(e3) === "Symbol")
              throw TypeError("Cannot convert a Symbol value to a string");
            return o(e3);
          };
        }, 9191: function(e2) {
          var t2 = String;
          e2.exports = function(e3) {
            try {
              return t2(e3);
            } catch (e4) {
              return "Object";
            }
          };
        }, 5209: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(4723), o = r2(4451), i = r2(416), a = r2(7303), s = r2(9565), c = r2(5015), u = r2(4967), l = r2(9322), p = r2(1673), h = r2(4034), d = r2(1195), f = r2(2234), m = r2(1515), g = r2(843), y = r2(3957), E = r2(2220), v = r2(5449), T = r2(4904), _ = r2(8340), O = r2(554), R = r2(7666), I = r2(8604), S = r2(6702).f, A = r2(1443), N = r2(8947).forEach, C = r2(2197), b = r2(1695), M = r2(3338), w = r2(8390), U = r2(8505), k = w.get, P = w.set, x = w.enforce, L = b.f, j = M.f, D = Math.round, G = o.RangeError, B = u.ArrayBuffer, H = B.prototype, F = u.DataView, W = c.NATIVE_ARRAY_BUFFER_VIEWS, q = c.TYPED_ARRAY_TAG, Z = c.TypedArray, K = c.TypedArrayPrototype, V = c.aTypedArrayConstructor, z = c.isTypedArray, J = "BYTES_PER_ELEMENT", X = "Wrong length", Y = function(e3, t3) {
            V(e3);
            for (var r3 = 0, n3 = t3.length, o2 = new e3(n3); n3 > r3; )
              o2[r3] = t3[r3++];
            return o2;
          }, $2 = function(e3, t3) {
            L(e3, t3, { get: function() {
              return k(this)[t3];
            } });
          }, Q = function(e3) {
            var t3;
            return R(H, e3) || (t3 = v(e3)) == "ArrayBuffer" || t3 == "SharedArrayBuffer";
          }, ee = function(e3, t3) {
            return z(e3) && !_(t3) && t3 in e3 && d(+t3) && t3 >= 0;
          }, te = function(e3, t3) {
            return t3 = y(t3), ee(e3, t3) ? p(2, e3[t3]) : j(e3, t3);
          }, re = function(e3, t3, r3) {
            return t3 = y(t3), !(ee(e3, t3) && T(r3) && E(r3, "value")) || E(r3, "get") || E(r3, "set") || r3.configurable || E(r3, "writable") && !r3.writable || E(r3, "enumerable") && !r3.enumerable ? L(e3, t3, r3) : (e3[t3] = r3.value, e3);
          };
          a ? (W || (M.f = te, b.f = re, $2(K, "buffer"), $2(K, "byteOffset"), $2(K, "byteLength"), $2(K, "length")), n2({ target: "Object", stat: true, forced: !W }, { getOwnPropertyDescriptor: te, defineProperty: re }), e2.exports = function(e3, t3, r3) {
            var a2 = e3.match(/\d+$/)[0] / 8, c2 = e3 + (r3 ? "Clamped" : "") + "Array", u2 = "get" + e3, p2 = "set" + e3, d2 = o[c2], y2 = d2, E2 = y2 && y2.prototype, v2 = {}, _2 = function(e4, t4) {
              L(e4, t4, { get: function() {
                return function(e5, t5) {
                  var r4 = k(e5);
                  return r4.view[u2](t5 * a2 + r4.byteOffset, true);
                }(this, t4);
              }, set: function(e5) {
                return function(e6, t5, n3) {
                  var o2 = k(e6);
                  r3 && (n3 = (n3 = D(n3)) < 0 ? 0 : n3 > 255 ? 255 : 255 & n3), o2.view[p2](t5 * a2 + o2.byteOffset, n3, true);
                }(this, t4, e5);
              }, enumerable: true });
            };
            W ? s && (y2 = t3(function(e4, t4, r4, n3) {
              return l(e4, E2), U(T(t4) ? Q(t4) ? n3 !== void 0 ? new d2(t4, g(r4, a2), n3) : r4 !== void 0 ? new d2(t4, g(r4, a2)) : new d2(t4) : z(t4) ? Y(y2, t4) : i(A, y2, t4) : new d2(m(t4)), e4, y2);
            }), I && I(y2, Z), N(S(d2), function(e4) {
              e4 in y2 || h(y2, e4, d2[e4]);
            }), y2.prototype = E2) : (y2 = t3(function(e4, t4, r4, n3) {
              l(e4, E2);
              var o2, s2, c3, u3 = 0, p3 = 0;
              if (T(t4)) {
                if (!Q(t4))
                  return z(t4) ? Y(y2, t4) : i(A, y2, t4);
                o2 = t4, p3 = g(r4, a2);
                var h2 = t4.byteLength;
                if (n3 === void 0) {
                  if (h2 % a2)
                    throw G(X);
                  if ((s2 = h2 - p3) < 0)
                    throw G(X);
                } else if ((s2 = f(n3) * a2) + p3 > h2)
                  throw G(X);
                c3 = s2 / a2;
              } else
                c3 = m(t4), o2 = new B(s2 = c3 * a2);
              for (P(e4, { buffer: o2, byteOffset: p3, byteLength: s2, length: c3, view: new F(o2) }); u3 < c3; )
                _2(e4, u3++);
            }), I && I(y2, Z), E2 = y2.prototype = O(K)), E2.constructor !== y2 && h(E2, "constructor", y2), x(E2).TypedArrayConstructor = y2, q && h(E2, q, c2);
            var R2 = y2 != d2;
            v2[c2] = y2, n2({ global: true, constructor: true, forced: R2, sham: !W }, v2), J in y2 || h(y2, J, a2), J in E2 || h(E2, J, a2), C(c2);
          }) : e2.exports = function() {
          };
        }, 9565: function(e2, t2, r2) {
          var n2 = r2(4451), o = r2(6866), i = r2(7961), a = r2(5015).NATIVE_ARRAY_BUFFER_VIEWS, s = n2.ArrayBuffer, c = n2.Int8Array;
          e2.exports = !a || !o(function() {
            c(1);
          }) || !o(function() {
            new c(-1);
          }) || !i(function(e3) {
            new c(), new c(null), new c(1.5), new c(e3);
          }, true) || o(function() {
            return new c(new s(2), 1, void 0).length !== 1;
          });
        }, 2231: function(e2, t2, r2) {
          var n2 = r2(3661), o = r2(2885);
          e2.exports = function(e3, t3) {
            return n2(o(e3), t3);
          };
        }, 1443: function(e2, t2, r2) {
          var n2 = r2(3581), o = r2(416), i = r2(5347), a = r2(4220), s = r2(3085), c = r2(9504), u = r2(6754), l = r2(7164), p = r2(9738), h = r2(5015).aTypedArrayConstructor, d = r2(9548);
          e2.exports = function(e3) {
            var t3, r3, f, m, g, y, E, v, T = i(this), _ = a(e3), O = arguments.length, R = O > 1 ? arguments[1] : void 0, I = R !== void 0, S = u(_);
            if (S && !l(S))
              for (v = (E = c(_, S)).next, _ = []; !(y = o(v, E)).done; )
                _.push(y.value);
            for (I && O > 2 && (R = n2(R, arguments[2])), r3 = s(_), f = new (h(T))(r3), m = p(f), t3 = 0; r3 > t3; t3++)
              g = I ? R(_[t3], t3) : _[t3], f[t3] = m ? d(g) : +g;
            return f;
          };
        }, 2885: function(e2, t2, r2) {
          var n2 = r2(5015), o = r2(8477), i = n2.aTypedArrayConstructor, a = n2.getTypedArrayConstructor;
          e2.exports = function(e3) {
            return i(o(e3, a(e3)));
          };
        }, 412: function(e2, t2, r2) {
          var n2 = r2(1705), o = 0, i = Math.random(), a = n2(1 .toString);
          e2.exports = function(e3) {
            return "Symbol(" + (e3 === void 0 ? "" : e3) + ")_" + a(++o + i, 36);
          };
        }, 315: function(e2, t2, r2) {
          var n2 = r2(6866), o = r2(673), i = r2(4623), a = o("iterator");
          e2.exports = !n2(function() {
            var e3 = new URL("b?a=1&b=2&c=3", "http://a"), t3 = e3.searchParams, r3 = "";
            return e3.pathname = "c%20d", t3.forEach(function(e4, n3) {
              t3.delete("b"), r3 += n3 + e4;
            }), i && !e3.toJSON || !t3.sort || e3.href !== "http://a/c%20d?a=1&c=3" || t3.get("c") !== "3" || String(new URLSearchParams("?a=1")) !== "a=1" || !t3[a] || new URL("https://a@b").username !== "a" || new URLSearchParams(new URLSearchParams("a=b")).get("a") !== "b" || new URL("http://\u0442\u0435\u0441\u0442").host !== "xn--e1aybc" || new URL("http://a#\u0431").hash !== "#%D0%B1" || r3 !== "a1c3" || new URL("http://x", void 0).host !== "x";
          });
        }, 9723: function(e2, t2, r2) {
          var n2 = r2(5143);
          e2.exports = n2 && !Symbol.sham && typeof Symbol.iterator == "symbol";
        }, 1216: function(e2, t2, r2) {
          var n2 = r2(7303), o = r2(6866);
          e2.exports = n2 && o(function() {
            return Object.defineProperty(function() {
            }, "prototype", { value: 42, writable: false }).prototype != 42;
          });
        }, 5030: function(e2) {
          var t2 = TypeError;
          e2.exports = function(e3, r2) {
            if (e3 < r2)
              throw t2("Not enough arguments");
            return e3;
          };
        }, 6306: function(e2, t2, r2) {
          var n2 = r2(4451), o = r2(7505), i = n2.WeakMap;
          e2.exports = o(i) && /native code/.test(String(i));
        }, 7639: function(e2, t2, r2) {
          var n2 = r2(8582), o = r2(2220), i = r2(8252), a = r2(1695).f;
          e2.exports = function(e3) {
            var t3 = n2.Symbol || (n2.Symbol = {});
            o(t3, e3) || a(t3, e3, { value: i.f(e3) });
          };
        }, 8252: function(e2, t2, r2) {
          var n2 = r2(673);
          t2.f = n2;
        }, 673: function(e2, t2, r2) {
          var n2 = r2(4451), o = r2(1084), i = r2(2220), a = r2(412), s = r2(5143), c = r2(9723), u = o("wks"), l = n2.Symbol, p = l && l.for, h = c ? l : l && l.withoutSetter || a;
          e2.exports = function(e3) {
            if (!i(u, e3) || !s && typeof u[e3] != "string") {
              var t3 = "Symbol." + e3;
              s && i(l, e3) ? u[e3] = l[e3] : u[e3] = c && p ? p(t3) : h(t3);
            }
            return u[e3];
          };
        }, 1811: function(e2) {
          e2.exports = "	\n\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
        }, 4440: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(4723), o = r2(1108), i = r2(6866), a = r2(4967), s = r2(4291), c = r2(7193), u = r2(2234), l = r2(8477), p = a.ArrayBuffer, h = a.DataView, d = h.prototype, f = o(p.prototype.slice), m = o(d.getUint8), g = o(d.setUint8);
          n2({ target: "ArrayBuffer", proto: true, unsafe: true, forced: i(function() {
            return !new p(2).slice(1, void 0).byteLength;
          }) }, { slice: function(e3, t3) {
            if (f && t3 === void 0)
              return f(s(this), e3);
            for (var r3 = s(this).byteLength, n3 = c(e3, r3), o2 = c(t3 === void 0 ? r3 : t3, r3), i2 = new (l(this, p))(u(o2 - n3)), a2 = new h(this), d2 = new h(i2), y = 0; n3 < o2; )
              g(d2, y++, m(a2, n3++));
            return i2;
          } });
        }, 5233: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(4723), o = r2(6866), i = r2(8751), a = r2(4904), s = r2(4220), c = r2(3085), u = r2(5261), l = r2(2708), p = r2(2456), h = r2(3741), d = r2(673), f = r2(8472), m = d("isConcatSpreadable"), g = f >= 51 || !o(function() {
            var e3 = [];
            return e3[m] = false, e3.concat()[0] !== e3;
          }), y = h("concat"), E = function(e3) {
            if (!a(e3))
              return false;
            var t3 = e3[m];
            return t3 !== void 0 ? !!t3 : i(e3);
          };
          n2({ target: "Array", proto: true, arity: 1, forced: !g || !y }, { concat: function(e3) {
            var t3, r3, n3, o2, i2, a2 = s(this), h2 = p(a2, 0), d2 = 0;
            for (t3 = -1, n3 = arguments.length; t3 < n3; t3++)
              if (E(i2 = t3 === -1 ? a2 : arguments[t3]))
                for (o2 = c(i2), u(d2 + o2), r3 = 0; r3 < o2; r3++, d2++)
                  r3 in i2 && l(h2, d2, i2[r3]);
              else
                u(d2 + 1), l(h2, d2++, i2);
            return h2.length = d2, h2;
          } });
        }, 441: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(4723), o = r2(8947).filter;
          n2({ target: "Array", proto: true, forced: !r2(3741)("filter") }, { filter: function(e3) {
            return o(this, e3, arguments.length > 1 ? arguments[1] : void 0);
          } });
        }, 7680: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(4723), o = r2(2789);
          n2({ target: "Array", proto: true, forced: [].forEach != o }, { forEach: o });
        }, 3940: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(4723), o = r2(3712).includes, i = r2(6866), a = r2(3091);
          n2({ target: "Array", proto: true, forced: i(function() {
            return !Array(1).includes();
          }) }, { includes: function(e3) {
            return o(this, e3, arguments.length > 1 ? arguments[1] : void 0);
          } }), a("includes");
        }, 739: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(4723), o = r2(1108), i = r2(3712).indexOf, a = r2(3498), s = o([].indexOf), c = !!s && 1 / s([1], 1, -0) < 0, u = a("indexOf");
          n2({ target: "Array", proto: true, forced: c || !u }, { indexOf: function(e3) {
            var t3 = arguments.length > 1 ? arguments[1] : void 0;
            return c ? s(this, e3, t3) || 0 : i(this, e3, t3);
          } });
        }, 2289: function(e2, t2, r2) {
          r2(4723)({ target: "Array", stat: true }, { isArray: r2(8751) });
        }, 6162: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(2714), o = r2(3091), i = r2(4914), a = r2(8390), s = r2(1695).f, c = r2(8830), u = r2(2870), l = r2(4623), p = r2(7303), h = "Array Iterator", d = a.set, f = a.getterFor(h);
          e2.exports = c(Array, "Array", function(e3, t3) {
            d(this, { type: h, target: n2(e3), index: 0, kind: t3 });
          }, function() {
            var e3 = f(this), t3 = e3.target, r3 = e3.kind, n3 = e3.index++;
            return !t3 || n3 >= t3.length ? (e3.target = void 0, u(void 0, true)) : u(r3 == "keys" ? n3 : r3 == "values" ? t3[n3] : [n3, t3[n3]], false);
          }, "values");
          var m = i.Arguments = i.Array;
          if (o("keys"), o("values"), o("entries"), !l && p && m.name !== "values")
            try {
              s(m, "name", { value: "values" });
            } catch (e3) {
            }
        }, 1157: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(4723), o = r2(1705), i = r2(9427), a = r2(2714), s = r2(3498), c = o([].join), u = i != Object, l = s("join", ",");
          n2({ target: "Array", proto: true, forced: u || !l }, { join: function(e3) {
            return c(a(this), e3 === void 0 ? "," : e3);
          } });
        }, 2570: function(e2, t2, r2) {
          var n2 = r2(4723), o = r2(891);
          n2({ target: "Array", proto: true, forced: o !== [].lastIndexOf }, { lastIndexOf: o });
        }, 6784: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(4723), o = r2(8947).map;
          n2({ target: "Array", proto: true, forced: !r2(3741)("map") }, { map: function(e3) {
            return o(this, e3, arguments.length > 1 ? arguments[1] : void 0);
          } });
        }, 3897: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(4723), o = r2(1705), i = r2(8751), a = o([].reverse), s = [1, 2];
          n2({ target: "Array", proto: true, forced: String(s) === String(s.reverse()) }, { reverse: function() {
            return i(this) && (this.length = this.length), a(this);
          } });
        }, 2397: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(4723), o = r2(8751), i = r2(1904), a = r2(4904), s = r2(7193), c = r2(3085), u = r2(2714), l = r2(2708), p = r2(673), h = r2(3741), d = r2(4899), f = h("slice"), m = p("species"), g = Array, y = Math.max;
          n2({ target: "Array", proto: true, forced: !f }, { slice: function(e3, t3) {
            var r3, n3, p2, h2 = u(this), f2 = c(h2), E = s(e3, f2), v = s(t3 === void 0 ? f2 : t3, f2);
            if (o(h2) && (r3 = h2.constructor, (i(r3) && (r3 === g || o(r3.prototype)) || a(r3) && (r3 = r3[m]) === null) && (r3 = void 0), r3 === g || r3 === void 0))
              return d(h2, E, v);
            for (n3 = new (r3 === void 0 ? g : r3)(y(v - E, 0)), p2 = 0; E < v; E++, p2++)
              E in h2 && l(n3, p2, h2[E]);
            return n3.length = p2, n3;
          } });
        }, 2621: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(4723), o = r2(8947).some;
          n2({ target: "Array", proto: true, forced: !r2(3498)("some") }, { some: function(e3) {
            return o(this, e3, arguments.length > 1 ? arguments[1] : void 0);
          } });
        }, 6494: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(4723), o = r2(4220), i = r2(7193), a = r2(1045), s = r2(3085), c = r2(2967), u = r2(5261), l = r2(2456), p = r2(2708), h = r2(5142), d = r2(3741)("splice"), f = Math.max, m = Math.min;
          n2({ target: "Array", proto: true, forced: !d }, { splice: function(e3, t3) {
            var r3, n3, d2, g, y, E, v = o(this), T = s(v), _ = i(e3, T), O = arguments.length;
            for (O === 0 ? r3 = n3 = 0 : O === 1 ? (r3 = 0, n3 = T - _) : (r3 = O - 2, n3 = m(f(a(t3), 0), T - _)), u(T + r3 - n3), d2 = l(v, n3), g = 0; g < n3; g++)
              (y = _ + g) in v && p(d2, g, v[y]);
            if (d2.length = n3, r3 < n3) {
              for (g = _; g < T - n3; g++)
                E = g + r3, (y = g + n3) in v ? v[E] = v[y] : h(v, E);
              for (g = T; g > T - n3 + r3; g--)
                h(v, g - 1);
            } else if (r3 > n3)
              for (g = T - n3; g > _; g--)
                E = g + r3 - 1, (y = g + n3 - 1) in v ? v[E] = v[y] : h(v, E);
            for (g = 0; g < r3; g++)
              v[g + _] = arguments[g + 2];
            return c(v, T - n3 + r3), d2;
          } });
        }, 529: function(e2, t2, r2) {
          var n2 = r2(4723), o = r2(1705), i = Date, a = o(i.prototype.getTime);
          n2({ target: "Date", stat: true }, { now: function() {
            return a(new i());
          } });
        }, 9894: function(e2, t2, r2) {
          var n2 = r2(1705), o = r2(7407), i = Date.prototype, a = "Invalid Date", s = n2(i.toString), c = n2(i.getTime);
          String(new Date(NaN)) != a && o(i, "toString", function() {
            var e3 = c(this);
            return e3 == e3 ? s(this) : a;
          });
        }, 2645: function(e2, t2, r2) {
          var n2 = r2(4723), o = r2(9955);
          n2({ target: "Function", proto: true, forced: Function.bind !== o }, { bind: o });
        }, 9900: function(e2, t2, r2) {
          var n2 = r2(7303), o = r2(5281).EXISTS, i = r2(1705), a = r2(1695).f, s = Function.prototype, c = i(s.toString), u = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/, l = i(u.exec);
          n2 && !o && a(s, "name", { configurable: true, get: function() {
            try {
              return l(u, c(this))[1];
            } catch (e3) {
              return "";
            }
          } });
        }, 8224: function(e2, t2, r2) {
          var n2 = r2(4723), o = r2(2439), i = r2(2598), a = r2(416), s = r2(1705), c = r2(6866), u = r2(8751), l = r2(7505), p = r2(4904), h = r2(8340), d = r2(4899), f = r2(5143), m = o("JSON", "stringify"), g = s(/./.exec), y = s("".charAt), E = s("".charCodeAt), v = s("".replace), T = s(1 .toString), _ = /[\uD800-\uDFFF]/g, O = /^[\uD800-\uDBFF]$/, R = /^[\uDC00-\uDFFF]$/, I = !f || c(function() {
            var e3 = o("Symbol")();
            return m([e3]) != "[null]" || m({ a: e3 }) != "{}" || m(Object(e3)) != "{}";
          }), S = c(function() {
            return m("\uDF06\uD834") !== '"\\udf06\\ud834"' || m("\uDEAD") !== '"\\udead"';
          }), A = function(e3, t3) {
            var r3 = d(arguments), n3 = t3;
            if ((p(t3) || e3 !== void 0) && !h(e3))
              return u(t3) || (t3 = function(e4, t4) {
                if (l(n3) && (t4 = a(n3, this, e4, t4)), !h(t4))
                  return t4;
              }), r3[1] = t3, i(m, null, r3);
          }, N = function(e3, t3, r3) {
            var n3 = y(r3, t3 - 1), o2 = y(r3, t3 + 1);
            return g(O, e3) && !g(R, o2) || g(R, e3) && !g(O, n3) ? "\\u" + T(E(e3, 0), 16) : e3;
          };
          m && n2({ target: "JSON", stat: true, arity: 3, forced: I || S }, { stringify: function(e3, t3, r3) {
            var n3 = d(arguments), o2 = i(I ? A : m, null, n3);
            return S && typeof o2 == "string" ? v(o2, _, N) : o2;
          } });
        }, 1545: function(e2, t2, r2) {
          "use strict";
          r2(1112)("Map", function(e3) {
            return function() {
              return e3(this, arguments.length ? arguments[0] : void 0);
            };
          }, r2(1979));
        }, 840: function(e2, t2, r2) {
          r2(1545);
        }, 4286: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(7303), o = r2(4451), i = r2(1705), a = r2(6538), s = r2(7407), c = r2(2220), u = r2(8505), l = r2(7666), p = r2(8340), h = r2(124), d = r2(6866), f = r2(6702).f, m = r2(3338).f, g = r2(1695).f, y = r2(6999), E = r2(148).trim, v = "Number", T = o.Number, _ = T.prototype, O = o.TypeError, R = i("".slice), I = i("".charCodeAt), S = function(e3) {
            var t3 = h(e3, "number");
            return typeof t3 == "bigint" ? t3 : A(t3);
          }, A = function(e3) {
            var t3, r3, n3, o2, i2, a2, s2, c2, u2 = h(e3, "number");
            if (p(u2))
              throw O("Cannot convert a Symbol value to a number");
            if (typeof u2 == "string" && u2.length > 2) {
              if (u2 = E(u2), (t3 = I(u2, 0)) === 43 || t3 === 45) {
                if ((r3 = I(u2, 2)) === 88 || r3 === 120)
                  return NaN;
              } else if (t3 === 48) {
                switch (I(u2, 1)) {
                  case 66:
                  case 98:
                    n3 = 2, o2 = 49;
                    break;
                  case 79:
                  case 111:
                    n3 = 8, o2 = 55;
                    break;
                  default:
                    return +u2;
                }
                for (a2 = (i2 = R(u2, 2)).length, s2 = 0; s2 < a2; s2++)
                  if ((c2 = I(i2, s2)) < 48 || c2 > o2)
                    return NaN;
                return parseInt(i2, n3);
              }
            }
            return +u2;
          };
          if (a(v, !T(" 0o1") || !T("0b1") || T("+0x1"))) {
            for (var N, C = function(e3) {
              var t3 = arguments.length < 1 ? 0 : T(S(e3)), r3 = this;
              return l(_, r3) && d(function() {
                y(r3);
              }) ? u(Object(t3), r3, C) : t3;
            }, b = n2 ? f(T) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","), M = 0; b.length > M; M++)
              c(T, N = b[M]) && !c(C, N) && g(C, N, m(T, N));
            C.prototype = _, _.constructor = C, s(o, v, C, { constructor: true });
          }
        }, 6601: function(e2, t2, r2) {
          r2(4723)({ target: "Number", stat: true }, { isInteger: r2(1195) });
        }, 7758: function(e2, t2, r2) {
          var n2 = r2(4723), o = r2(3399);
          n2({ target: "Object", stat: true, arity: 2, forced: Object.assign !== o }, { assign: o });
        }, 3094: function(e2, t2, r2) {
          var n2 = r2(4723), o = r2(7303), i = r2(1695).f;
          n2({ target: "Object", stat: true, forced: Object.defineProperty !== i, sham: !o }, { defineProperty: i });
        }, 1367: function(e2, t2, r2) {
          var n2 = r2(4723), o = r2(8439).entries;
          n2({ target: "Object", stat: true }, { entries: function(e3) {
            return o(e3);
          } });
        }, 2710: function(e2, t2, r2) {
          var n2 = r2(4723), o = r2(5143), i = r2(6866), a = r2(8438), s = r2(4220);
          n2({ target: "Object", stat: true, forced: !o || i(function() {
            a.f(1);
          }) }, { getOwnPropertySymbols: function(e3) {
            var t3 = a.f;
            return t3 ? t3(s(e3)) : [];
          } });
        }, 6260: function(e2, t2, r2) {
          var n2 = r2(4723), o = r2(4220), i = r2(7370);
          n2({ target: "Object", stat: true, forced: r2(6866)(function() {
            i(1);
          }) }, { keys: function(e3) {
            return i(o(e3));
          } });
        }, 7858: function(e2, t2, r2) {
          var n2 = r2(8103), o = r2(7407), i = r2(4726);
          n2 || o(Object.prototype, "toString", i, { unsafe: true });
        }, 5230: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(4723), o = r2(416), i = r2(5029), a = r2(8072), s = r2(595), c = r2(7985);
          n2({ target: "Promise", stat: true, forced: r2(7613) }, { all: function(e3) {
            var t3 = this, r3 = a.f(t3), n3 = r3.resolve, u = r3.reject, l = s(function() {
              var r4 = i(t3.resolve), a2 = [], s2 = 0, l2 = 1;
              c(e3, function(e4) {
                var i2 = s2++, c2 = false;
                l2++, o(r4, t3, e4).then(function(e5) {
                  c2 || (c2 = true, a2[i2] = e5, --l2 || n3(a2));
                }, u);
              }), --l2 || n3(a2);
            });
            return l.error && u(l.value), r3.promise;
          } });
        }, 2658: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(4723), o = r2(4623), i = r2(5742).CONSTRUCTOR, a = r2(8081), s = r2(2439), c = r2(7505), u = r2(7407), l = a && a.prototype;
          if (n2({ target: "Promise", proto: true, forced: i, real: true }, { catch: function(e3) {
            return this.then(void 0, e3);
          } }), !o && c(a)) {
            var p = s("Promise").prototype.catch;
            l.catch !== p && u(l, "catch", p, { unsafe: true });
          }
        }, 2355: function(e2, t2, r2) {
          "use strict";
          var n2, o, i, a = r2(4723), s = r2(4623), c = r2(7481), u = r2(4451), l = r2(416), p = r2(7407), h = r2(8604), d = r2(819), f = r2(2197), m = r2(5029), g = r2(7505), y = r2(4904), E = r2(9322), v = r2(8477), T = r2(6831).set, _ = r2(501), O = r2(7425), R = r2(595), I = r2(1715), S = r2(8390), A = r2(8081), N = r2(5742), C = r2(8072), b = "Promise", M = N.CONSTRUCTOR, w = N.REJECTION_EVENT, U = N.SUBCLASSING, k = S.getterFor(b), P = S.set, x = A && A.prototype, L = A, j = x, D = u.TypeError, G = u.document, B = u.process, H = C.f, F = H, W = !!(G && G.createEvent && u.dispatchEvent), q = "unhandledrejection", Z = function(e3) {
            var t3;
            return !(!y(e3) || !g(t3 = e3.then)) && t3;
          }, K = function(e3, t3) {
            var r3, n3, o2, i2 = t3.value, a2 = t3.state == 1, s2 = a2 ? e3.ok : e3.fail, c2 = e3.resolve, u2 = e3.reject, p2 = e3.domain;
            try {
              s2 ? (a2 || (t3.rejection === 2 && Y(t3), t3.rejection = 1), s2 === true ? r3 = i2 : (p2 && p2.enter(), r3 = s2(i2), p2 && (p2.exit(), o2 = true)), r3 === e3.promise ? u2(D("Promise-chain cycle")) : (n3 = Z(r3)) ? l(n3, r3, c2, u2) : c2(r3)) : u2(i2);
            } catch (e4) {
              p2 && !o2 && p2.exit(), u2(e4);
            }
          }, V = function(e3, t3) {
            e3.notified || (e3.notified = true, _(function() {
              for (var r3, n3 = e3.reactions; r3 = n3.get(); )
                K(r3, e3);
              e3.notified = false, t3 && !e3.rejection && J(e3);
            }));
          }, z = function(e3, t3, r3) {
            var n3, o2;
            W ? ((n3 = G.createEvent("Event")).promise = t3, n3.reason = r3, n3.initEvent(e3, false, true), u.dispatchEvent(n3)) : n3 = { promise: t3, reason: r3 }, !w && (o2 = u["on" + e3]) ? o2(n3) : e3 === q && O("Unhandled promise rejection", r3);
          }, J = function(e3) {
            l(T, u, function() {
              var t3, r3 = e3.facade, n3 = e3.value;
              if (X(e3) && (t3 = R(function() {
                c ? B.emit("unhandledRejection", n3, r3) : z(q, r3, n3);
              }), e3.rejection = c || X(e3) ? 2 : 1, t3.error))
                throw t3.value;
            });
          }, X = function(e3) {
            return e3.rejection !== 1 && !e3.parent;
          }, Y = function(e3) {
            l(T, u, function() {
              var t3 = e3.facade;
              c ? B.emit("rejectionHandled", t3) : z("rejectionhandled", t3, e3.value);
            });
          }, $2 = function(e3, t3, r3) {
            return function(n3) {
              e3(t3, n3, r3);
            };
          }, Q = function(e3, t3, r3) {
            e3.done || (e3.done = true, r3 && (e3 = r3), e3.value = t3, e3.state = 2, V(e3, true));
          }, ee = function(e3, t3, r3) {
            if (!e3.done) {
              e3.done = true, r3 && (e3 = r3);
              try {
                if (e3.facade === t3)
                  throw D("Promise can't be resolved itself");
                var n3 = Z(t3);
                n3 ? _(function() {
                  var r4 = { done: false };
                  try {
                    l(n3, t3, $2(ee, r4, e3), $2(Q, r4, e3));
                  } catch (t4) {
                    Q(r4, t4, e3);
                  }
                }) : (e3.value = t3, e3.state = 1, V(e3, false));
              } catch (t4) {
                Q({ done: false }, t4, e3);
              }
            }
          };
          if (M && (j = (L = function(e3) {
            E(this, j), m(e3), l(n2, this);
            var t3 = k(this);
            try {
              e3($2(ee, t3), $2(Q, t3));
            } catch (e4) {
              Q(t3, e4);
            }
          }).prototype, (n2 = function(e3) {
            P(this, { type: b, done: false, notified: false, parent: false, reactions: new I(), rejection: false, state: 0, value: void 0 });
          }).prototype = p(j, "then", function(e3, t3) {
            var r3 = k(this), n3 = H(v(this, L));
            return r3.parent = true, n3.ok = !g(e3) || e3, n3.fail = g(t3) && t3, n3.domain = c ? B.domain : void 0, r3.state == 0 ? r3.reactions.add(n3) : _(function() {
              K(n3, r3);
            }), n3.promise;
          }), o = function() {
            var e3 = new n2(), t3 = k(e3);
            this.promise = e3, this.resolve = $2(ee, t3), this.reject = $2(Q, t3);
          }, C.f = H = function(e3) {
            return e3 === L || e3 === void 0 ? new o(e3) : F(e3);
          }, !s && g(A) && x !== Object.prototype)) {
            i = x.then, U || p(x, "then", function(e3, t3) {
              var r3 = this;
              return new L(function(e4, t4) {
                l(i, r3, e4, t4);
              }).then(e3, t3);
            }, { unsafe: true });
            try {
              delete x.constructor;
            } catch (e3) {
            }
            h && h(x, j);
          }
          a({ global: true, constructor: true, wrap: true, forced: M }, { Promise: L }), d(L, b, false, true), f(b);
        }, 8826: function(e2, t2, r2) {
          r2(2355), r2(5230), r2(2658), r2(3613), r2(2104), r2(7042);
        }, 3613: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(4723), o = r2(416), i = r2(5029), a = r2(8072), s = r2(595), c = r2(7985);
          n2({ target: "Promise", stat: true, forced: r2(7613) }, { race: function(e3) {
            var t3 = this, r3 = a.f(t3), n3 = r3.reject, u = s(function() {
              var a2 = i(t3.resolve);
              c(e3, function(e4) {
                o(a2, t3, e4).then(r3.resolve, n3);
              });
            });
            return u.error && n3(u.value), r3.promise;
          } });
        }, 2104: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(4723), o = r2(416), i = r2(8072);
          n2({ target: "Promise", stat: true, forced: r2(5742).CONSTRUCTOR }, { reject: function(e3) {
            var t3 = i.f(this);
            return o(t3.reject, void 0, e3), t3.promise;
          } });
        }, 7042: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(4723), o = r2(2439), i = r2(4623), a = r2(8081), s = r2(5742).CONSTRUCTOR, c = r2(946), u = o("Promise"), l = i && !s;
          n2({ target: "Promise", stat: true, forced: i || s }, { resolve: function(e3) {
            return c(l && this === u ? a : this, e3);
          } });
        }, 2135: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(4723), o = r2(5239);
          n2({ target: "RegExp", proto: true, forced: /./.exec !== o }, { exec: o });
        }, 5645: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(5281).PROPER, o = r2(7407), i = r2(4291), a = r2(2454), s = r2(6866), c = r2(1630), u = "toString", l = RegExp.prototype.toString, p = s(function() {
            return l.call({ source: "a", flags: "b" }) != "/a/b";
          }), h = n2 && l.name != u;
          (p || h) && o(RegExp.prototype, u, function() {
            var e3 = i(this);
            return "/" + a(e3.source) + "/" + a(c(e3));
          }, { unsafe: true });
        }, 75: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(4723), o = r2(1705), i = r2(8349), a = r2(9544), s = r2(2454), c = r2(5445), u = o("".indexOf);
          n2({ target: "String", proto: true, forced: !c("includes") }, { includes: function(e3) {
            return !!~u(s(a(this)), s(i(e3)), arguments.length > 1 ? arguments[1] : void 0);
          } });
        }, 796: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(9985).charAt, o = r2(2454), i = r2(8390), a = r2(8830), s = r2(2870), c = "String Iterator", u = i.set, l = i.getterFor(c);
          a(String, "String", function(e3) {
            u(this, { type: c, string: o(e3), index: 0 });
          }, function() {
            var e3, t3 = l(this), r3 = t3.string, o2 = t3.index;
            return o2 >= r3.length ? s(void 0, true) : (e3 = n2(r3, o2), t3.index += e3.length, s(e3, false));
          });
        }, 881: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(4723), o = r2(4451), i = r2(416), a = r2(1705), s = r2(4623), c = r2(7303), u = r2(5143), l = r2(6866), p = r2(2220), h = r2(7666), d = r2(4291), f = r2(2714), m = r2(3957), g = r2(2454), y = r2(1673), E = r2(554), v = r2(7370), T = r2(6702), _ = r2(7116), O = r2(8438), R = r2(3338), I = r2(1695), S = r2(5429), A = r2(3890), N = r2(7407), C = r2(1084), b = r2(4228), M = r2(5003), w = r2(412), U = r2(673), k = r2(8252), P = r2(7639), x = r2(2840), L = r2(819), j = r2(8390), D = r2(8947).forEach, G = b("hidden"), B = "Symbol", H = j.set, F = j.getterFor(B), W = Object.prototype, q = o.Symbol, Z = q && q.prototype, K = o.TypeError, V = o.QObject, z = R.f, J = I.f, X = _.f, Y = A.f, $2 = a([].push), Q = C("symbols"), ee = C("op-symbols"), te = C("wks"), re = !V || !V.prototype || !V.prototype.findChild, ne = c && l(function() {
            return E(J({}, "a", { get: function() {
              return J(this, "a", { value: 7 }).a;
            } })).a != 7;
          }) ? function(e3, t3, r3) {
            var n3 = z(W, t3);
            n3 && delete W[t3], J(e3, t3, r3), n3 && e3 !== W && J(W, t3, n3);
          } : J, oe = function(e3, t3) {
            var r3 = Q[e3] = E(Z);
            return H(r3, { type: B, tag: e3, description: t3 }), c || (r3.description = t3), r3;
          }, ie = function(e3, t3, r3) {
            e3 === W && ie(ee, t3, r3), d(e3);
            var n3 = m(t3);
            return d(r3), p(Q, n3) ? (r3.enumerable ? (p(e3, G) && e3[G][n3] && (e3[G][n3] = false), r3 = E(r3, { enumerable: y(0, false) })) : (p(e3, G) || J(e3, G, y(1, {})), e3[G][n3] = true), ne(e3, n3, r3)) : J(e3, n3, r3);
          }, ae = function(e3, t3) {
            d(e3);
            var r3 = f(t3), n3 = v(r3).concat(le(r3));
            return D(n3, function(t4) {
              c && !i(se, r3, t4) || ie(e3, t4, r3[t4]);
            }), e3;
          }, se = function(e3) {
            var t3 = m(e3), r3 = i(Y, this, t3);
            return !(this === W && p(Q, t3) && !p(ee, t3)) && (!(r3 || !p(this, t3) || !p(Q, t3) || p(this, G) && this[G][t3]) || r3);
          }, ce = function(e3, t3) {
            var r3 = f(e3), n3 = m(t3);
            if (r3 !== W || !p(Q, n3) || p(ee, n3)) {
              var o2 = z(r3, n3);
              return !o2 || !p(Q, n3) || p(r3, G) && r3[G][n3] || (o2.enumerable = true), o2;
            }
          }, ue = function(e3) {
            var t3 = X(f(e3)), r3 = [];
            return D(t3, function(e4) {
              p(Q, e4) || p(M, e4) || $2(r3, e4);
            }), r3;
          }, le = function(e3) {
            var t3 = e3 === W, r3 = X(t3 ? ee : f(e3)), n3 = [];
            return D(r3, function(e4) {
              !p(Q, e4) || t3 && !p(W, e4) || $2(n3, Q[e4]);
            }), n3;
          };
          u || (q = function() {
            if (h(Z, this))
              throw K("Symbol is not a constructor");
            var e3 = arguments.length && arguments[0] !== void 0 ? g(arguments[0]) : void 0, t3 = w(e3), r3 = function(e4) {
              this === W && i(r3, ee, e4), p(this, G) && p(this[G], t3) && (this[G][t3] = false), ne(this, t3, y(1, e4));
            };
            return c && re && ne(W, t3, { configurable: true, set: r3 }), oe(t3, e3);
          }, N(Z = q.prototype, "toString", function() {
            return F(this).tag;
          }), N(q, "withoutSetter", function(e3) {
            return oe(w(e3), e3);
          }), A.f = se, I.f = ie, S.f = ae, R.f = ce, T.f = _.f = ue, O.f = le, k.f = function(e3) {
            return oe(U(e3), e3);
          }, c && (J(Z, "description", { configurable: true, get: function() {
            return F(this).description;
          } }), s || N(W, "propertyIsEnumerable", se, { unsafe: true }))), n2({ global: true, constructor: true, wrap: true, forced: !u, sham: !u }, { Symbol: q }), D(v(te), function(e3) {
            P(e3);
          }), n2({ target: B, stat: true, forced: !u }, { useSetter: function() {
            re = true;
          }, useSimple: function() {
            re = false;
          } }), n2({ target: "Object", stat: true, forced: !u, sham: !c }, { create: function(e3, t3) {
            return t3 === void 0 ? E(e3) : ae(E(e3), t3);
          }, defineProperty: ie, defineProperties: ae, getOwnPropertyDescriptor: ce }), n2({ target: "Object", stat: true, forced: !u }, { getOwnPropertyNames: ue }), x(), L(q, B), M[G] = true;
        }, 3776: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(4723), o = r2(7303), i = r2(4451), a = r2(1705), s = r2(2220), c = r2(7505), u = r2(7666), l = r2(2454), p = r2(1695).f, h = r2(2315), d = i.Symbol, f = d && d.prototype;
          if (o && c(d) && (!("description" in f) || d().description !== void 0)) {
            var m = {}, g = function() {
              var e3 = arguments.length < 1 || arguments[0] === void 0 ? void 0 : l(arguments[0]), t3 = u(f, this) ? new d(e3) : e3 === void 0 ? d() : d(e3);
              return e3 === "" && (m[t3] = true), t3;
            };
            h(g, d), g.prototype = f, f.constructor = g;
            var y = String(d("test")) == "Symbol(test)", E = a(f.valueOf), v = a(f.toString), T = /^Symbol\((.*)\)[^)]+$/, _ = a("".replace), O = a("".slice);
            p(f, "description", { configurable: true, get: function() {
              var e3 = E(this);
              if (s(m, e3))
                return "";
              var t3 = v(e3), r3 = y ? O(t3, 7, -1) : _(t3, T, "$1");
              return r3 === "" ? void 0 : r3;
            } }), n2({ global: true, constructor: true, forced: true }, { Symbol: g });
          }
        }, 2857: function(e2, t2, r2) {
          var n2 = r2(4723), o = r2(2439), i = r2(2220), a = r2(2454), s = r2(1084), c = r2(8396), u = s("string-to-symbol-registry"), l = s("symbol-to-string-registry");
          n2({ target: "Symbol", stat: true, forced: !c }, { for: function(e3) {
            var t3 = a(e3);
            if (i(u, t3))
              return u[t3];
            var r3 = o("Symbol")(t3);
            return u[t3] = r3, l[r3] = t3, r3;
          } });
        }, 3836: function(e2, t2, r2) {
          r2(7639)("iterator");
        }, 4593: function(e2, t2, r2) {
          r2(881), r2(2857), r2(868), r2(8224), r2(2710);
        }, 868: function(e2, t2, r2) {
          var n2 = r2(4723), o = r2(2220), i = r2(8340), a = r2(9191), s = r2(1084), c = r2(8396), u = s("symbol-to-string-registry");
          n2({ target: "Symbol", stat: true, forced: !c }, { keyFor: function(e3) {
            if (!i(e3))
              throw TypeError(a(e3) + " is not a symbol");
            if (o(u, e3))
              return u[e3];
          } });
        }, 5068: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(1705), o = r2(5015), i = n2(r2(1143)), a = o.aTypedArray;
          (0, o.exportTypedArrayMethod)("copyWithin", function(e3, t3) {
            return i(a(this), e3, t3, arguments.length > 2 ? arguments[2] : void 0);
          });
        }, 8640: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(5015), o = r2(8947).every, i = n2.aTypedArray;
          (0, n2.exportTypedArrayMethod)("every", function(e3) {
            return o(i(this), e3, arguments.length > 1 ? arguments[1] : void 0);
          });
        }, 8320: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(5015), o = r2(4200), i = r2(9548), a = r2(5449), s = r2(416), c = r2(1705), u = r2(6866), l = n2.aTypedArray, p = n2.exportTypedArrayMethod, h = c("".slice);
          p("fill", function(e3) {
            var t3 = arguments.length;
            l(this);
            var r3 = h(a(this), 0, 3) === "Big" ? i(e3) : +e3;
            return s(o, this, r3, t3 > 1 ? arguments[1] : void 0, t3 > 2 ? arguments[2] : void 0);
          }, u(function() {
            var e3 = 0;
            return new Int8Array(2).fill({ valueOf: function() {
              return e3++;
            } }), e3 !== 1;
          }));
        }, 6382: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(5015), o = r2(8947).filter, i = r2(2231), a = n2.aTypedArray;
          (0, n2.exportTypedArrayMethod)("filter", function(e3) {
            var t3 = o(a(this), e3, arguments.length > 1 ? arguments[1] : void 0);
            return i(this, t3);
          });
        }, 3485: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(5015), o = r2(8947).findIndex, i = n2.aTypedArray;
          (0, n2.exportTypedArrayMethod)("findIndex", function(e3) {
            return o(i(this), e3, arguments.length > 1 ? arguments[1] : void 0);
          });
        }, 7163: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(5015), o = r2(8947).find, i = n2.aTypedArray;
          (0, n2.exportTypedArrayMethod)("find", function(e3) {
            return o(i(this), e3, arguments.length > 1 ? arguments[1] : void 0);
          });
        }, 1126: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(5015), o = r2(8947).forEach, i = n2.aTypedArray;
          (0, n2.exportTypedArrayMethod)("forEach", function(e3) {
            o(i(this), e3, arguments.length > 1 ? arguments[1] : void 0);
          });
        }, 4870: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(5015), o = r2(3712).includes, i = n2.aTypedArray;
          (0, n2.exportTypedArrayMethod)("includes", function(e3) {
            return o(i(this), e3, arguments.length > 1 ? arguments[1] : void 0);
          });
        }, 8290: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(5015), o = r2(3712).indexOf, i = n2.aTypedArray;
          (0, n2.exportTypedArrayMethod)("indexOf", function(e3) {
            return o(i(this), e3, arguments.length > 1 ? arguments[1] : void 0);
          });
        }, 7781: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(4451), o = r2(6866), i = r2(1705), a = r2(5015), s = r2(6162), c = r2(673)("iterator"), u = n2.Uint8Array, l = i(s.values), p = i(s.keys), h = i(s.entries), d = a.aTypedArray, f = a.exportTypedArrayMethod, m = u && u.prototype, g = !o(function() {
            m[c].call([1]);
          }), y = !!m && m.values && m[c] === m.values && m.values.name === "values", E = function() {
            return l(d(this));
          };
          f("entries", function() {
            return h(d(this));
          }, g), f("keys", function() {
            return p(d(this));
          }, g), f("values", E, g || !y, { name: "values" }), f(c, E, g || !y, { name: "values" });
        }, 3994: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(5015), o = r2(1705), i = n2.aTypedArray, a = n2.exportTypedArrayMethod, s = o([].join);
          a("join", function(e3) {
            return s(i(this), e3);
          });
        }, 6903: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(5015), o = r2(2598), i = r2(891), a = n2.aTypedArray;
          (0, n2.exportTypedArrayMethod)("lastIndexOf", function(e3) {
            var t3 = arguments.length;
            return o(i, a(this), t3 > 1 ? [e3, arguments[1]] : [e3]);
          });
        }, 3703: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(5015), o = r2(8947).map, i = r2(2885), a = n2.aTypedArray;
          (0, n2.exportTypedArrayMethod)("map", function(e3) {
            return o(a(this), e3, arguments.length > 1 ? arguments[1] : void 0, function(e4, t3) {
              return new (i(e4))(t3);
            });
          });
        }, 5223: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(5015), o = r2(6581).right, i = n2.aTypedArray;
          (0, n2.exportTypedArrayMethod)("reduceRight", function(e3) {
            var t3 = arguments.length;
            return o(i(this), e3, t3, t3 > 1 ? arguments[1] : void 0);
          });
        }, 3188: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(5015), o = r2(6581).left, i = n2.aTypedArray;
          (0, n2.exportTypedArrayMethod)("reduce", function(e3) {
            var t3 = arguments.length;
            return o(i(this), e3, t3, t3 > 1 ? arguments[1] : void 0);
          });
        }, 890: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(5015), o = n2.aTypedArray, i = n2.exportTypedArrayMethod, a = Math.floor;
          i("reverse", function() {
            for (var e3, t3 = this, r3 = o(t3).length, n3 = a(r3 / 2), i2 = 0; i2 < n3; )
              e3 = t3[i2], t3[i2++] = t3[--r3], t3[r3] = e3;
            return t3;
          });
        }, 7174: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(4451), o = r2(416), i = r2(5015), a = r2(3085), s = r2(843), c = r2(4220), u = r2(6866), l = n2.RangeError, p = n2.Int8Array, h = p && p.prototype, d = h && h.set, f = i.aTypedArray, m = i.exportTypedArrayMethod, g = !u(function() {
            var e3 = new Uint8ClampedArray(2);
            return o(d, e3, { length: 1, 0: 3 }, 1), e3[1] !== 3;
          }), y = g && i.NATIVE_ARRAY_BUFFER_VIEWS && u(function() {
            var e3 = new p(2);
            return e3.set(1), e3.set("2", 1), e3[0] !== 0 || e3[1] !== 2;
          });
          m("set", function(e3) {
            f(this);
            var t3 = s(arguments.length > 1 ? arguments[1] : void 0, 1), r3 = c(e3);
            if (g)
              return o(d, this, r3, t3);
            var n3 = this.length, i2 = a(r3), u2 = 0;
            if (i2 + t3 > n3)
              throw l("Wrong length");
            for (; u2 < i2; )
              this[t3 + u2] = r3[u2++];
          }, !g || y);
        }, 9501: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(5015), o = r2(2885), i = r2(6866), a = r2(4899), s = n2.aTypedArray;
          (0, n2.exportTypedArrayMethod)("slice", function(e3, t3) {
            for (var r3 = a(s(this), e3, t3), n3 = o(this), i2 = 0, c = r3.length, u = new n3(c); c > i2; )
              u[i2] = r3[i2++];
            return u;
          }, i(function() {
            new Int8Array(1).slice();
          }));
        }, 7089: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(5015), o = r2(8947).some, i = n2.aTypedArray;
          (0, n2.exportTypedArrayMethod)("some", function(e3) {
            return o(i(this), e3, arguments.length > 1 ? arguments[1] : void 0);
          });
        }, 7962: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(4451), o = r2(1108), i = r2(6866), a = r2(5029), s = r2(6623), c = r2(5015), u = r2(9474), l = r2(5526), p = r2(8472), h = r2(4353), d = c.aTypedArray, f = c.exportTypedArrayMethod, m = n2.Uint16Array, g = m && o(m.prototype.sort), y = !(!g || i(function() {
            g(new m(2), null);
          }) && i(function() {
            g(new m(2), {});
          })), E = !!g && !i(function() {
            if (p)
              return p < 74;
            if (u)
              return u < 67;
            if (l)
              return true;
            if (h)
              return h < 602;
            var e3, t3, r3 = new m(516), n3 = Array(516);
            for (e3 = 0; e3 < 516; e3++)
              t3 = e3 % 4, r3[e3] = 515 - e3, n3[e3] = e3 - 2 * t3 + 3;
            for (g(r3, function(e4, t4) {
              return (e4 / 4 | 0) - (t4 / 4 | 0);
            }), e3 = 0; e3 < 516; e3++)
              if (r3[e3] !== n3[e3])
                return true;
          });
          f("sort", function(e3) {
            return e3 !== void 0 && a(e3), E ? g(this, e3) : s(d(this), function(e4) {
              return function(t3, r3) {
                return e4 !== void 0 ? +e4(t3, r3) || 0 : r3 != r3 ? -1 : t3 != t3 ? 1 : t3 === 0 && r3 === 0 ? 1 / t3 > 0 && 1 / r3 < 0 ? 1 : -1 : t3 > r3;
              };
            }(e3));
          }, !E || y);
        }, 600: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(5015), o = r2(2234), i = r2(7193), a = r2(2885), s = n2.aTypedArray;
          (0, n2.exportTypedArrayMethod)("subarray", function(e3, t3) {
            var r3 = s(this), n3 = r3.length, c = i(e3, n3);
            return new (a(r3))(r3.buffer, r3.byteOffset + c * r3.BYTES_PER_ELEMENT, o((t3 === void 0 ? n3 : i(t3, n3)) - c));
          });
        }, 5100: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(4451), o = r2(2598), i = r2(5015), a = r2(6866), s = r2(4899), c = n2.Int8Array, u = i.aTypedArray, l = i.exportTypedArrayMethod, p = [].toLocaleString, h = !!c && a(function() {
            p.call(new c(1));
          });
          l("toLocaleString", function() {
            return o(p, h ? s(u(this)) : u(this), s(arguments));
          }, a(function() {
            return [1, 2].toLocaleString() != new c([1, 2]).toLocaleString();
          }) || !a(function() {
            c.prototype.toLocaleString.call([1, 2]);
          }));
        }, 7866: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(5015).exportTypedArrayMethod, o = r2(6866), i = r2(4451), a = r2(1705), s = i.Uint8Array, c = s && s.prototype || {}, u = [].toString, l = a([].join);
          o(function() {
            u.call({});
          }) && (u = function() {
            return l(this);
          });
          var p = c.toString != u;
          n2("toString", u, p);
        }, 6467: function(e2, t2, r2) {
          r2(5209)("Uint8", function(e3) {
            return function(t3, r3, n2) {
              return e3(this, t3, r3, n2);
            };
          });
        }, 2914: function(e2, t2, r2) {
          var n2 = r2(4451), o = r2(772), i = r2(3155), a = r2(2789), s = r2(4034), c = function(e3) {
            if (e3 && e3.forEach !== a)
              try {
                s(e3, "forEach", a);
              } catch (t3) {
                e3.forEach = a;
              }
          };
          for (var u in o)
            o[u] && c(n2[u] && n2[u].prototype);
          c(i);
        }, 2835: function(e2, t2, r2) {
          var n2 = r2(4451), o = r2(772), i = r2(3155), a = r2(6162), s = r2(4034), c = r2(673), u = c("iterator"), l = c("toStringTag"), p = a.values, h = function(e3, t3) {
            if (e3) {
              if (e3[u] !== p)
                try {
                  s(e3, u, p);
                } catch (t4) {
                  e3[u] = p;
                }
              if (e3[l] || s(e3, l, t3), o[t3]) {
                for (var r3 in a)
                  if (e3[r3] !== a[r3])
                    try {
                      s(e3, r3, a[r3]);
                    } catch (t4) {
                      e3[r3] = a[r3];
                    }
              }
            }
          };
          for (var d in o)
            h(n2[d] && n2[d].prototype, d);
          h(i, "DOMTokenList");
        }, 7500: function(e2, t2, r2) {
          var n2 = r2(4723), o = r2(4451), i = r2(2613).setInterval;
          n2({ global: true, bind: true, forced: o.setInterval !== i }, { setInterval: i });
        }, 8800: function(e2, t2, r2) {
          var n2 = r2(4723), o = r2(4451), i = r2(2613).setTimeout;
          n2({ global: true, bind: true, forced: o.setTimeout !== i }, { setTimeout: i });
        }, 2953: function(e2, t2, r2) {
          r2(7500), r2(8800);
        }, 5780: function(e2, t2, r2) {
          "use strict";
          r2(6162);
          var n2 = r2(4723), o = r2(4451), i = r2(416), a = r2(1705), s = r2(7303), c = r2(315), u = r2(7407), l = r2(4954), p = r2(819), h = r2(4476), d = r2(8390), f = r2(9322), m = r2(7505), g = r2(2220), y = r2(3581), E = r2(5449), v = r2(4291), T = r2(4904), _ = r2(2454), O = r2(554), R = r2(1673), I = r2(9504), S = r2(6754), A = r2(5030), N = r2(673), C = r2(6623), b = N("iterator"), M = "URLSearchParams", w = "URLSearchParamsIterator", U = d.set, k = d.getterFor(M), P = d.getterFor(w), x = Object.getOwnPropertyDescriptor, L = function(e3) {
            if (!s)
              return o[e3];
            var t3 = x(o, e3);
            return t3 && t3.value;
          }, j = L("fetch"), D = L("Request"), G = L("Headers"), B = D && D.prototype, H = G && G.prototype, F = o.RegExp, W = o.TypeError, q = o.decodeURIComponent, Z = o.encodeURIComponent, K = a("".charAt), V = a([].join), z = a([].push), J = a("".replace), X = a([].shift), Y = a([].splice), $2 = a("".split), Q = a("".slice), ee = /\+/g, te = Array(4), re = function(e3) {
            return te[e3 - 1] || (te[e3 - 1] = F("((?:%[\\da-f]{2}){" + e3 + "})", "gi"));
          }, ne = function(e3) {
            try {
              return q(e3);
            } catch (t3) {
              return e3;
            }
          }, oe = function(e3) {
            var t3 = J(e3, ee, " "), r3 = 4;
            try {
              return q(t3);
            } catch (e4) {
              for (; r3; )
                t3 = J(t3, re(r3--), ne);
              return t3;
            }
          }, ie = /[!'()~]|%20/g, ae = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+" }, se = function(e3) {
            return ae[e3];
          }, ce = function(e3) {
            return J(Z(e3), ie, se);
          }, ue = h(function(e3, t3) {
            U(this, { type: w, iterator: I(k(e3).entries), kind: t3 });
          }, "Iterator", function() {
            var e3 = P(this), t3 = e3.kind, r3 = e3.iterator.next(), n3 = r3.value;
            return r3.done || (r3.value = t3 === "keys" ? n3.key : t3 === "values" ? n3.value : [n3.key, n3.value]), r3;
          }, true), le = function(e3) {
            this.entries = [], this.url = null, e3 !== void 0 && (T(e3) ? this.parseObject(e3) : this.parseQuery(typeof e3 == "string" ? K(e3, 0) === "?" ? Q(e3, 1) : e3 : _(e3)));
          };
          le.prototype = { type: M, bindURL: function(e3) {
            this.url = e3, this.update();
          }, parseObject: function(e3) {
            var t3, r3, n3, o2, a2, s2, c2, u2 = S(e3);
            if (u2)
              for (r3 = (t3 = I(e3, u2)).next; !(n3 = i(r3, t3)).done; ) {
                if (a2 = (o2 = I(v(n3.value))).next, (s2 = i(a2, o2)).done || (c2 = i(a2, o2)).done || !i(a2, o2).done)
                  throw W("Expected sequence with length 2");
                z(this.entries, { key: _(s2.value), value: _(c2.value) });
              }
            else
              for (var l2 in e3)
                g(e3, l2) && z(this.entries, { key: l2, value: _(e3[l2]) });
          }, parseQuery: function(e3) {
            if (e3)
              for (var t3, r3, n3 = $2(e3, "&"), o2 = 0; o2 < n3.length; )
                (t3 = n3[o2++]).length && (r3 = $2(t3, "="), z(this.entries, { key: oe(X(r3)), value: oe(V(r3, "=")) }));
          }, serialize: function() {
            for (var e3, t3 = this.entries, r3 = [], n3 = 0; n3 < t3.length; )
              e3 = t3[n3++], z(r3, ce(e3.key) + "=" + ce(e3.value));
            return V(r3, "&");
          }, update: function() {
            this.entries.length = 0, this.parseQuery(this.url.query);
          }, updateURL: function() {
            this.url && this.url.update();
          } };
          var pe = function() {
            f(this, he);
            var e3 = arguments.length > 0 ? arguments[0] : void 0;
            U(this, new le(e3));
          }, he = pe.prototype;
          if (l(he, { append: function(e3, t3) {
            A(arguments.length, 2);
            var r3 = k(this);
            z(r3.entries, { key: _(e3), value: _(t3) }), r3.updateURL();
          }, delete: function(e3) {
            A(arguments.length, 1);
            for (var t3 = k(this), r3 = t3.entries, n3 = _(e3), o2 = 0; o2 < r3.length; )
              r3[o2].key === n3 ? Y(r3, o2, 1) : o2++;
            t3.updateURL();
          }, get: function(e3) {
            A(arguments.length, 1);
            for (var t3 = k(this).entries, r3 = _(e3), n3 = 0; n3 < t3.length; n3++)
              if (t3[n3].key === r3)
                return t3[n3].value;
            return null;
          }, getAll: function(e3) {
            A(arguments.length, 1);
            for (var t3 = k(this).entries, r3 = _(e3), n3 = [], o2 = 0; o2 < t3.length; o2++)
              t3[o2].key === r3 && z(n3, t3[o2].value);
            return n3;
          }, has: function(e3) {
            A(arguments.length, 1);
            for (var t3 = k(this).entries, r3 = _(e3), n3 = 0; n3 < t3.length; )
              if (t3[n3++].key === r3)
                return true;
            return false;
          }, set: function(e3, t3) {
            A(arguments.length, 1);
            for (var r3, n3 = k(this), o2 = n3.entries, i2 = false, a2 = _(e3), s2 = _(t3), c2 = 0; c2 < o2.length; c2++)
              (r3 = o2[c2]).key === a2 && (i2 ? Y(o2, c2--, 1) : (i2 = true, r3.value = s2));
            i2 || z(o2, { key: a2, value: s2 }), n3.updateURL();
          }, sort: function() {
            var e3 = k(this);
            C(e3.entries, function(e4, t3) {
              return e4.key > t3.key ? 1 : -1;
            }), e3.updateURL();
          }, forEach: function(e3) {
            for (var t3, r3 = k(this).entries, n3 = y(e3, arguments.length > 1 ? arguments[1] : void 0), o2 = 0; o2 < r3.length; )
              n3((t3 = r3[o2++]).value, t3.key, this);
          }, keys: function() {
            return new ue(this, "keys");
          }, values: function() {
            return new ue(this, "values");
          }, entries: function() {
            return new ue(this, "entries");
          } }, { enumerable: true }), u(he, b, he.entries, { name: "entries" }), u(he, "toString", function() {
            return k(this).serialize();
          }, { enumerable: true }), p(pe, M), n2({ global: true, constructor: true, forced: !c }, { URLSearchParams: pe }), !c && m(G)) {
            var de = a(H.has), fe = a(H.set), me = function(e3) {
              if (T(e3)) {
                var t3, r3 = e3.body;
                if (E(r3) === M)
                  return t3 = e3.headers ? new G(e3.headers) : new G(), de(t3, "content-type") || fe(t3, "content-type", "application/x-www-form-urlencoded;charset=UTF-8"), O(e3, { body: R(0, _(r3)), headers: R(0, t3) });
              }
              return e3;
            };
            if (m(j) && n2({ global: true, enumerable: true, dontCallGetSet: true, forced: true }, { fetch: function(e3) {
              return j(e3, arguments.length > 1 ? me(arguments[1]) : {});
            } }), m(D)) {
              var ge = function(e3) {
                return f(this, B), new D(e3, arguments.length > 1 ? me(arguments[1]) : {});
              };
              B.constructor = ge, ge.prototype = B, n2({ global: true, constructor: true, dontCallGetSet: true, forced: true }, { Request: ge });
            }
          }
          e2.exports = { URLSearchParams: pe, getState: k };
        }, 4333: function(e2, t2, r2) {
          r2(5780);
        }, 4264: function(e2, t2, r2) {
          "use strict";
          r2(796);
          var n2, o = r2(4723), i = r2(7303), a = r2(315), s = r2(4451), c = r2(3581), u = r2(1705), l = r2(7407), p = r2(9451), h = r2(9322), d = r2(2220), f = r2(3399), m = r2(3235), g = r2(8264), y = r2(9985).codeAt, E = r2(6611), v = r2(2454), T = r2(819), _ = r2(5030), O = r2(5780), R = r2(8390), I = R.set, S = R.getterFor("URL"), A = O.URLSearchParams, N = O.getState, C = s.URL, b = s.TypeError, M = s.parseInt, w = Math.floor, U = Math.pow, k = u("".charAt), P = u(/./.exec), x = u([].join), L = u(1 .toString), j = u([].pop), D = u([].push), G = u("".replace), B = u([].shift), H = u("".split), F = u("".slice), W = u("".toLowerCase), q = u([].unshift), Z = "Invalid scheme", K = "Invalid host", V = "Invalid port", z = /[a-z]/i, J = /[\d+-.a-z]/i, X = /\d/, Y = /^0x/i, $2 = /^[0-7]+$/, Q = /^\d+$/, ee = /^[\da-f]+$/i, te = /[\0\t\n\r #%/:<>?@[\\\]^|]/, re = /[\0\t\n\r #/:<>?@[\\\]^|]/, ne = /^[\u0000-\u0020]+|[\u0000-\u0020]+$/g, oe = /[\t\n\r]/g, ie = function(e3) {
            var t3, r3, n3, o2;
            if (typeof e3 == "number") {
              for (t3 = [], r3 = 0; r3 < 4; r3++)
                q(t3, e3 % 256), e3 = w(e3 / 256);
              return x(t3, ".");
            }
            if (typeof e3 == "object") {
              for (t3 = "", n3 = function(e4) {
                for (var t4 = null, r4 = 1, n4 = null, o3 = 0, i2 = 0; i2 < 8; i2++)
                  e4[i2] !== 0 ? (o3 > r4 && (t4 = n4, r4 = o3), n4 = null, o3 = 0) : (n4 === null && (n4 = i2), ++o3);
                return o3 > r4 && (t4 = n4, r4 = o3), t4;
              }(e3), r3 = 0; r3 < 8; r3++)
                o2 && e3[r3] === 0 || (o2 && (o2 = false), n3 === r3 ? (t3 += r3 ? ":" : "::", o2 = true) : (t3 += L(e3[r3], 16), r3 < 7 && (t3 += ":")));
              return "[" + t3 + "]";
            }
            return e3;
          }, ae = {}, se = f({}, ae, { " ": 1, '"': 1, "<": 1, ">": 1, "`": 1 }), ce = f({}, se, { "#": 1, "?": 1, "{": 1, "}": 1 }), ue = f({}, ce, { "/": 1, ":": 1, ";": 1, "=": 1, "@": 1, "[": 1, "\\": 1, "]": 1, "^": 1, "|": 1 }), le = function(e3, t3) {
            var r3 = y(e3, 0);
            return r3 > 32 && r3 < 127 && !d(t3, e3) ? e3 : encodeURIComponent(e3);
          }, pe = { ftp: 21, file: null, http: 80, https: 443, ws: 80, wss: 443 }, he = function(e3, t3) {
            var r3;
            return e3.length == 2 && P(z, k(e3, 0)) && ((r3 = k(e3, 1)) == ":" || !t3 && r3 == "|");
          }, de = function(e3) {
            var t3;
            return e3.length > 1 && he(F(e3, 0, 2)) && (e3.length == 2 || (t3 = k(e3, 2)) === "/" || t3 === "\\" || t3 === "?" || t3 === "#");
          }, fe = function(e3) {
            return e3 === "." || W(e3) === "%2e";
          }, me = {}, ge = {}, ye = {}, Ee = {}, ve = {}, Te = {}, _e = {}, Oe = {}, Re = {}, Ie = {}, Se = {}, Ae = {}, Ne = {}, Ce = {}, be = {}, Me = {}, we = {}, Ue = {}, ke = {}, Pe = {}, xe = {}, Le = function(e3, t3, r3) {
            var n3, o2, i2, a2 = v(e3);
            if (t3) {
              if (o2 = this.parse(a2))
                throw b(o2);
              this.searchParams = null;
            } else {
              if (r3 !== void 0 && (n3 = new Le(r3, true)), o2 = this.parse(a2, null, n3))
                throw b(o2);
              (i2 = N(new A())).bindURL(this), this.searchParams = i2;
            }
          };
          Le.prototype = { type: "URL", parse: function(e3, t3, r3) {
            var o2, i2, a2, s2, c2, u2 = this, l2 = t3 || me, p2 = 0, h2 = "", f2 = false, y2 = false, E2 = false;
            for (e3 = v(e3), t3 || (u2.scheme = "", u2.username = "", u2.password = "", u2.host = null, u2.port = null, u2.path = [], u2.query = null, u2.fragment = null, u2.cannotBeABaseURL = false, e3 = G(e3, ne, "")), e3 = G(e3, oe, ""), o2 = m(e3); p2 <= o2.length; ) {
              switch (i2 = o2[p2], l2) {
                case me:
                  if (!i2 || !P(z, i2)) {
                    if (t3)
                      return Z;
                    l2 = ye;
                    continue;
                  }
                  h2 += W(i2), l2 = ge;
                  break;
                case ge:
                  if (i2 && (P(J, i2) || i2 == "+" || i2 == "-" || i2 == "."))
                    h2 += W(i2);
                  else {
                    if (i2 != ":") {
                      if (t3)
                        return Z;
                      h2 = "", l2 = ye, p2 = 0;
                      continue;
                    }
                    if (t3 && (u2.isSpecial() != d(pe, h2) || h2 == "file" && (u2.includesCredentials() || u2.port !== null) || u2.scheme == "file" && !u2.host))
                      return;
                    if (u2.scheme = h2, t3)
                      return void (u2.isSpecial() && pe[u2.scheme] == u2.port && (u2.port = null));
                    h2 = "", u2.scheme == "file" ? l2 = Ce : u2.isSpecial() && r3 && r3.scheme == u2.scheme ? l2 = Ee : u2.isSpecial() ? l2 = Oe : o2[p2 + 1] == "/" ? (l2 = ve, p2++) : (u2.cannotBeABaseURL = true, D(u2.path, ""), l2 = ke);
                  }
                  break;
                case ye:
                  if (!r3 || r3.cannotBeABaseURL && i2 != "#")
                    return Z;
                  if (r3.cannotBeABaseURL && i2 == "#") {
                    u2.scheme = r3.scheme, u2.path = g(r3.path), u2.query = r3.query, u2.fragment = "", u2.cannotBeABaseURL = true, l2 = xe;
                    break;
                  }
                  l2 = r3.scheme == "file" ? Ce : Te;
                  continue;
                case Ee:
                  if (i2 != "/" || o2[p2 + 1] != "/") {
                    l2 = Te;
                    continue;
                  }
                  l2 = Re, p2++;
                  break;
                case ve:
                  if (i2 == "/") {
                    l2 = Ie;
                    break;
                  }
                  l2 = Ue;
                  continue;
                case Te:
                  if (u2.scheme = r3.scheme, i2 == n2)
                    u2.username = r3.username, u2.password = r3.password, u2.host = r3.host, u2.port = r3.port, u2.path = g(r3.path), u2.query = r3.query;
                  else if (i2 == "/" || i2 == "\\" && u2.isSpecial())
                    l2 = _e;
                  else if (i2 == "?")
                    u2.username = r3.username, u2.password = r3.password, u2.host = r3.host, u2.port = r3.port, u2.path = g(r3.path), u2.query = "", l2 = Pe;
                  else {
                    if (i2 != "#") {
                      u2.username = r3.username, u2.password = r3.password, u2.host = r3.host, u2.port = r3.port, u2.path = g(r3.path), u2.path.length--, l2 = Ue;
                      continue;
                    }
                    u2.username = r3.username, u2.password = r3.password, u2.host = r3.host, u2.port = r3.port, u2.path = g(r3.path), u2.query = r3.query, u2.fragment = "", l2 = xe;
                  }
                  break;
                case _e:
                  if (!u2.isSpecial() || i2 != "/" && i2 != "\\") {
                    if (i2 != "/") {
                      u2.username = r3.username, u2.password = r3.password, u2.host = r3.host, u2.port = r3.port, l2 = Ue;
                      continue;
                    }
                    l2 = Ie;
                  } else
                    l2 = Re;
                  break;
                case Oe:
                  if (l2 = Re, i2 != "/" || k(h2, p2 + 1) != "/")
                    continue;
                  p2++;
                  break;
                case Re:
                  if (i2 != "/" && i2 != "\\") {
                    l2 = Ie;
                    continue;
                  }
                  break;
                case Ie:
                  if (i2 == "@") {
                    f2 && (h2 = "%40" + h2), f2 = true, a2 = m(h2);
                    for (var T2 = 0; T2 < a2.length; T2++) {
                      var _2 = a2[T2];
                      if (_2 != ":" || E2) {
                        var O2 = le(_2, ue);
                        E2 ? u2.password += O2 : u2.username += O2;
                      } else
                        E2 = true;
                    }
                    h2 = "";
                  } else if (i2 == n2 || i2 == "/" || i2 == "?" || i2 == "#" || i2 == "\\" && u2.isSpecial()) {
                    if (f2 && h2 == "")
                      return "Invalid authority";
                    p2 -= m(h2).length + 1, h2 = "", l2 = Se;
                  } else
                    h2 += i2;
                  break;
                case Se:
                case Ae:
                  if (t3 && u2.scheme == "file") {
                    l2 = Me;
                    continue;
                  }
                  if (i2 != ":" || y2) {
                    if (i2 == n2 || i2 == "/" || i2 == "?" || i2 == "#" || i2 == "\\" && u2.isSpecial()) {
                      if (u2.isSpecial() && h2 == "")
                        return K;
                      if (t3 && h2 == "" && (u2.includesCredentials() || u2.port !== null))
                        return;
                      if (s2 = u2.parseHost(h2))
                        return s2;
                      if (h2 = "", l2 = we, t3)
                        return;
                      continue;
                    }
                    i2 == "[" ? y2 = true : i2 == "]" && (y2 = false), h2 += i2;
                  } else {
                    if (h2 == "")
                      return K;
                    if (s2 = u2.parseHost(h2))
                      return s2;
                    if (h2 = "", l2 = Ne, t3 == Ae)
                      return;
                  }
                  break;
                case Ne:
                  if (!P(X, i2)) {
                    if (i2 == n2 || i2 == "/" || i2 == "?" || i2 == "#" || i2 == "\\" && u2.isSpecial() || t3) {
                      if (h2 != "") {
                        var R2 = M(h2, 10);
                        if (R2 > 65535)
                          return V;
                        u2.port = u2.isSpecial() && R2 === pe[u2.scheme] ? null : R2, h2 = "";
                      }
                      if (t3)
                        return;
                      l2 = we;
                      continue;
                    }
                    return V;
                  }
                  h2 += i2;
                  break;
                case Ce:
                  if (u2.scheme = "file", i2 == "/" || i2 == "\\")
                    l2 = be;
                  else {
                    if (!r3 || r3.scheme != "file") {
                      l2 = Ue;
                      continue;
                    }
                    if (i2 == n2)
                      u2.host = r3.host, u2.path = g(r3.path), u2.query = r3.query;
                    else if (i2 == "?")
                      u2.host = r3.host, u2.path = g(r3.path), u2.query = "", l2 = Pe;
                    else {
                      if (i2 != "#") {
                        de(x(g(o2, p2), "")) || (u2.host = r3.host, u2.path = g(r3.path), u2.shortenPath()), l2 = Ue;
                        continue;
                      }
                      u2.host = r3.host, u2.path = g(r3.path), u2.query = r3.query, u2.fragment = "", l2 = xe;
                    }
                  }
                  break;
                case be:
                  if (i2 == "/" || i2 == "\\") {
                    l2 = Me;
                    break;
                  }
                  r3 && r3.scheme == "file" && !de(x(g(o2, p2), "")) && (he(r3.path[0], true) ? D(u2.path, r3.path[0]) : u2.host = r3.host), l2 = Ue;
                  continue;
                case Me:
                  if (i2 == n2 || i2 == "/" || i2 == "\\" || i2 == "?" || i2 == "#") {
                    if (!t3 && he(h2))
                      l2 = Ue;
                    else if (h2 == "") {
                      if (u2.host = "", t3)
                        return;
                      l2 = we;
                    } else {
                      if (s2 = u2.parseHost(h2))
                        return s2;
                      if (u2.host == "localhost" && (u2.host = ""), t3)
                        return;
                      h2 = "", l2 = we;
                    }
                    continue;
                  }
                  h2 += i2;
                  break;
                case we:
                  if (u2.isSpecial()) {
                    if (l2 = Ue, i2 != "/" && i2 != "\\")
                      continue;
                  } else if (t3 || i2 != "?")
                    if (t3 || i2 != "#") {
                      if (i2 != n2 && (l2 = Ue, i2 != "/"))
                        continue;
                    } else
                      u2.fragment = "", l2 = xe;
                  else
                    u2.query = "", l2 = Pe;
                  break;
                case Ue:
                  if (i2 == n2 || i2 == "/" || i2 == "\\" && u2.isSpecial() || !t3 && (i2 == "?" || i2 == "#")) {
                    if ((c2 = W(c2 = h2)) === ".." || c2 === "%2e." || c2 === ".%2e" || c2 === "%2e%2e" ? (u2.shortenPath(), i2 == "/" || i2 == "\\" && u2.isSpecial() || D(u2.path, "")) : fe(h2) ? i2 == "/" || i2 == "\\" && u2.isSpecial() || D(u2.path, "") : (u2.scheme == "file" && !u2.path.length && he(h2) && (u2.host && (u2.host = ""), h2 = k(h2, 0) + ":"), D(u2.path, h2)), h2 = "", u2.scheme == "file" && (i2 == n2 || i2 == "?" || i2 == "#"))
                      for (; u2.path.length > 1 && u2.path[0] === ""; )
                        B(u2.path);
                    i2 == "?" ? (u2.query = "", l2 = Pe) : i2 == "#" && (u2.fragment = "", l2 = xe);
                  } else
                    h2 += le(i2, ce);
                  break;
                case ke:
                  i2 == "?" ? (u2.query = "", l2 = Pe) : i2 == "#" ? (u2.fragment = "", l2 = xe) : i2 != n2 && (u2.path[0] += le(i2, ae));
                  break;
                case Pe:
                  t3 || i2 != "#" ? i2 != n2 && (i2 == "'" && u2.isSpecial() ? u2.query += "%27" : u2.query += i2 == "#" ? "%23" : le(i2, ae)) : (u2.fragment = "", l2 = xe);
                  break;
                case xe:
                  i2 != n2 && (u2.fragment += le(i2, se));
              }
              p2++;
            }
          }, parseHost: function(e3) {
            var t3, r3, n3;
            if (k(e3, 0) == "[") {
              if (k(e3, e3.length - 1) != "]")
                return K;
              if (t3 = function(e4) {
                var t4, r4, n4, o2, i2, a2, s2, c2 = [0, 0, 0, 0, 0, 0, 0, 0], u2 = 0, l2 = null, p2 = 0, h2 = function() {
                  return k(e4, p2);
                };
                if (h2() == ":") {
                  if (k(e4, 1) != ":")
                    return;
                  p2 += 2, l2 = ++u2;
                }
                for (; h2(); ) {
                  if (u2 == 8)
                    return;
                  if (h2() != ":") {
                    for (t4 = r4 = 0; r4 < 4 && P(ee, h2()); )
                      t4 = 16 * t4 + M(h2(), 16), p2++, r4++;
                    if (h2() == ".") {
                      if (r4 == 0)
                        return;
                      if (p2 -= r4, u2 > 6)
                        return;
                      for (n4 = 0; h2(); ) {
                        if (o2 = null, n4 > 0) {
                          if (!(h2() == "." && n4 < 4))
                            return;
                          p2++;
                        }
                        if (!P(X, h2()))
                          return;
                        for (; P(X, h2()); ) {
                          if (i2 = M(h2(), 10), o2 === null)
                            o2 = i2;
                          else {
                            if (o2 == 0)
                              return;
                            o2 = 10 * o2 + i2;
                          }
                          if (o2 > 255)
                            return;
                          p2++;
                        }
                        c2[u2] = 256 * c2[u2] + o2, ++n4 != 2 && n4 != 4 || u2++;
                      }
                      if (n4 != 4)
                        return;
                      break;
                    }
                    if (h2() == ":") {
                      if (p2++, !h2())
                        return;
                    } else if (h2())
                      return;
                    c2[u2++] = t4;
                  } else {
                    if (l2 !== null)
                      return;
                    p2++, l2 = ++u2;
                  }
                }
                if (l2 !== null)
                  for (a2 = u2 - l2, u2 = 7; u2 != 0 && a2 > 0; )
                    s2 = c2[u2], c2[u2--] = c2[l2 + a2 - 1], c2[l2 + --a2] = s2;
                else if (u2 != 8)
                  return;
                return c2;
              }(F(e3, 1, -1)), !t3)
                return K;
              this.host = t3;
            } else if (this.isSpecial()) {
              if (e3 = E(e3), P(te, e3))
                return K;
              if (t3 = function(e4) {
                var t4, r4, n4, o2, i2, a2, s2, c2 = H(e4, ".");
                if (c2.length && c2[c2.length - 1] == "" && c2.length--, (t4 = c2.length) > 4)
                  return e4;
                for (r4 = [], n4 = 0; n4 < t4; n4++) {
                  if ((o2 = c2[n4]) == "")
                    return e4;
                  if (i2 = 10, o2.length > 1 && k(o2, 0) == "0" && (i2 = P(Y, o2) ? 16 : 8, o2 = F(o2, i2 == 8 ? 1 : 2)), o2 === "")
                    a2 = 0;
                  else {
                    if (!P(i2 == 10 ? Q : i2 == 8 ? $2 : ee, o2))
                      return e4;
                    a2 = M(o2, i2);
                  }
                  D(r4, a2);
                }
                for (n4 = 0; n4 < t4; n4++)
                  if (a2 = r4[n4], n4 == t4 - 1) {
                    if (a2 >= U(256, 5 - t4))
                      return null;
                  } else if (a2 > 255)
                    return null;
                for (s2 = j(r4), n4 = 0; n4 < r4.length; n4++)
                  s2 += r4[n4] * U(256, 3 - n4);
                return s2;
              }(e3), t3 === null)
                return K;
              this.host = t3;
            } else {
              if (P(re, e3))
                return K;
              for (t3 = "", r3 = m(e3), n3 = 0; n3 < r3.length; n3++)
                t3 += le(r3[n3], ae);
              this.host = t3;
            }
          }, cannotHaveUsernamePasswordPort: function() {
            return !this.host || this.cannotBeABaseURL || this.scheme == "file";
          }, includesCredentials: function() {
            return this.username != "" || this.password != "";
          }, isSpecial: function() {
            return d(pe, this.scheme);
          }, shortenPath: function() {
            var e3 = this.path, t3 = e3.length;
            !t3 || this.scheme == "file" && t3 == 1 && he(e3[0], true) || e3.length--;
          }, serialize: function() {
            var e3 = this, t3 = e3.scheme, r3 = e3.username, n3 = e3.password, o2 = e3.host, i2 = e3.port, a2 = e3.path, s2 = e3.query, c2 = e3.fragment, u2 = t3 + ":";
            return o2 !== null ? (u2 += "//", e3.includesCredentials() && (u2 += r3 + (n3 ? ":" + n3 : "") + "@"), u2 += ie(o2), i2 !== null && (u2 += ":" + i2)) : t3 == "file" && (u2 += "//"), u2 += e3.cannotBeABaseURL ? a2[0] : a2.length ? "/" + x(a2, "/") : "", s2 !== null && (u2 += "?" + s2), c2 !== null && (u2 += "#" + c2), u2;
          }, setHref: function(e3) {
            var t3 = this.parse(e3);
            if (t3)
              throw b(t3);
            this.searchParams.update();
          }, getOrigin: function() {
            var e3 = this.scheme, t3 = this.port;
            if (e3 == "blob")
              try {
                return new je(e3.path[0]).origin;
              } catch (e4) {
                return "null";
              }
            return e3 != "file" && this.isSpecial() ? e3 + "://" + ie(this.host) + (t3 !== null ? ":" + t3 : "") : "null";
          }, getProtocol: function() {
            return this.scheme + ":";
          }, setProtocol: function(e3) {
            this.parse(v(e3) + ":", me);
          }, getUsername: function() {
            return this.username;
          }, setUsername: function(e3) {
            var t3 = m(v(e3));
            if (!this.cannotHaveUsernamePasswordPort()) {
              this.username = "";
              for (var r3 = 0; r3 < t3.length; r3++)
                this.username += le(t3[r3], ue);
            }
          }, getPassword: function() {
            return this.password;
          }, setPassword: function(e3) {
            var t3 = m(v(e3));
            if (!this.cannotHaveUsernamePasswordPort()) {
              this.password = "";
              for (var r3 = 0; r3 < t3.length; r3++)
                this.password += le(t3[r3], ue);
            }
          }, getHost: function() {
            var e3 = this.host, t3 = this.port;
            return e3 === null ? "" : t3 === null ? ie(e3) : ie(e3) + ":" + t3;
          }, setHost: function(e3) {
            this.cannotBeABaseURL || this.parse(e3, Se);
          }, getHostname: function() {
            var e3 = this.host;
            return e3 === null ? "" : ie(e3);
          }, setHostname: function(e3) {
            this.cannotBeABaseURL || this.parse(e3, Ae);
          }, getPort: function() {
            var e3 = this.port;
            return e3 === null ? "" : v(e3);
          }, setPort: function(e3) {
            this.cannotHaveUsernamePasswordPort() || ((e3 = v(e3)) == "" ? this.port = null : this.parse(e3, Ne));
          }, getPathname: function() {
            var e3 = this.path;
            return this.cannotBeABaseURL ? e3[0] : e3.length ? "/" + x(e3, "/") : "";
          }, setPathname: function(e3) {
            this.cannotBeABaseURL || (this.path = [], this.parse(e3, we));
          }, getSearch: function() {
            var e3 = this.query;
            return e3 ? "?" + e3 : "";
          }, setSearch: function(e3) {
            (e3 = v(e3)) == "" ? this.query = null : (k(e3, 0) == "?" && (e3 = F(e3, 1)), this.query = "", this.parse(e3, Pe)), this.searchParams.update();
          }, getSearchParams: function() {
            return this.searchParams.facade;
          }, getHash: function() {
            var e3 = this.fragment;
            return e3 ? "#" + e3 : "";
          }, setHash: function(e3) {
            (e3 = v(e3)) != "" ? (k(e3, 0) == "#" && (e3 = F(e3, 1)), this.fragment = "", this.parse(e3, xe)) : this.fragment = null;
          }, update: function() {
            this.query = this.searchParams.serialize() || null;
          } };
          var je = function(e3) {
            var t3 = h(this, De), r3 = _(arguments.length, 1) > 1 ? arguments[1] : void 0, n3 = I(t3, new Le(e3, false, r3));
            i || (t3.href = n3.serialize(), t3.origin = n3.getOrigin(), t3.protocol = n3.getProtocol(), t3.username = n3.getUsername(), t3.password = n3.getPassword(), t3.host = n3.getHost(), t3.hostname = n3.getHostname(), t3.port = n3.getPort(), t3.pathname = n3.getPathname(), t3.search = n3.getSearch(), t3.searchParams = n3.getSearchParams(), t3.hash = n3.getHash());
          }, De = je.prototype, Ge = function(e3, t3) {
            return { get: function() {
              return S(this)[e3]();
            }, set: t3 && function(e4) {
              return S(this)[t3](e4);
            }, configurable: true, enumerable: true };
          };
          if (i && (p(De, "href", Ge("serialize", "setHref")), p(De, "origin", Ge("getOrigin")), p(De, "protocol", Ge("getProtocol", "setProtocol")), p(De, "username", Ge("getUsername", "setUsername")), p(De, "password", Ge("getPassword", "setPassword")), p(De, "host", Ge("getHost", "setHost")), p(De, "hostname", Ge("getHostname", "setHostname")), p(De, "port", Ge("getPort", "setPort")), p(De, "pathname", Ge("getPathname", "setPathname")), p(De, "search", Ge("getSearch", "setSearch")), p(De, "searchParams", Ge("getSearchParams")), p(De, "hash", Ge("getHash", "setHash"))), l(De, "toJSON", function() {
            return S(this).serialize();
          }, { enumerable: true }), l(De, "toString", function() {
            return S(this).serialize();
          }, { enumerable: true }), C) {
            var Be = C.createObjectURL, He = C.revokeObjectURL;
            Be && l(je, "createObjectURL", c(Be, C)), He && l(je, "revokeObjectURL", c(He, C));
          }
          T(je, "URL"), o({ global: true, constructor: true, forced: !a, sham: !i }, { URL: je });
        }, 1884: function(e2, t2, r2) {
          r2(4264);
        }, 4255: function(e2) {
          e2.exports = r2;
          var t2 = null;
          try {
            t2 = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports;
          } catch (e3) {
          }
          function r2(e3, t3, r3) {
            this.low = 0 | e3, this.high = 0 | t3, this.unsigned = !!r3;
          }
          function n2(e3) {
            return (e3 && e3.__isLong__) === true;
          }
          r2.prototype.__isLong__, Object.defineProperty(r2.prototype, "__isLong__", { value: true }), r2.isLong = n2;
          var o = {}, i = {};
          function a(e3, t3) {
            var r3, n3, a2;
            return t3 ? (a2 = 0 <= (e3 >>>= 0) && e3 < 256) && (n3 = i[e3]) ? n3 : (r3 = c(e3, (0 | e3) < 0 ? -1 : 0, true), a2 && (i[e3] = r3), r3) : (a2 = -128 <= (e3 |= 0) && e3 < 128) && (n3 = o[e3]) ? n3 : (r3 = c(e3, e3 < 0 ? -1 : 0, false), a2 && (o[e3] = r3), r3);
          }
          function s(e3, t3) {
            if (isNaN(e3))
              return t3 ? y : g;
            if (t3) {
              if (e3 < 0)
                return y;
              if (e3 >= d)
                return O;
            } else {
              if (e3 <= -f)
                return R;
              if (e3 + 1 >= f)
                return _;
            }
            return e3 < 0 ? s(-e3, t3).neg() : c(e3 % h | 0, e3 / h | 0, t3);
          }
          function c(e3, t3, n3) {
            return new r2(e3, t3, n3);
          }
          r2.fromInt = a, r2.fromNumber = s, r2.fromBits = c;
          var u = Math.pow;
          function l(e3, t3, r3) {
            if (e3.length === 0)
              throw Error("empty string");
            if (e3 === "NaN" || e3 === "Infinity" || e3 === "+Infinity" || e3 === "-Infinity")
              return g;
            if (typeof t3 == "number" ? (r3 = t3, t3 = false) : t3 = !!t3, (r3 = r3 || 10) < 2 || 36 < r3)
              throw RangeError("radix");
            var n3;
            if ((n3 = e3.indexOf("-")) > 0)
              throw Error("interior hyphen");
            if (n3 === 0)
              return l(e3.substring(1), t3, r3).neg();
            for (var o2 = s(u(r3, 8)), i2 = g, a2 = 0; a2 < e3.length; a2 += 8) {
              var c2 = Math.min(8, e3.length - a2), p2 = parseInt(e3.substring(a2, a2 + c2), r3);
              if (c2 < 8) {
                var h2 = s(u(r3, c2));
                i2 = i2.mul(h2).add(s(p2));
              } else
                i2 = (i2 = i2.mul(o2)).add(s(p2));
            }
            return i2.unsigned = t3, i2;
          }
          function p(e3, t3) {
            return typeof e3 == "number" ? s(e3, t3) : typeof e3 == "string" ? l(e3, t3) : c(e3.low, e3.high, typeof t3 == "boolean" ? t3 : e3.unsigned);
          }
          r2.fromString = l, r2.fromValue = p;
          var h = 4294967296, d = h * h, f = d / 2, m = a(1 << 24), g = a(0);
          r2.ZERO = g;
          var y = a(0, true);
          r2.UZERO = y;
          var E = a(1);
          r2.ONE = E;
          var v = a(1, true);
          r2.UONE = v;
          var T = a(-1);
          r2.NEG_ONE = T;
          var _ = c(-1, 2147483647, false);
          r2.MAX_VALUE = _;
          var O = c(-1, -1, true);
          r2.MAX_UNSIGNED_VALUE = O;
          var R = c(0, -2147483648, false);
          r2.MIN_VALUE = R;
          var I = r2.prototype;
          I.toInt = function() {
            return this.unsigned ? this.low >>> 0 : this.low;
          }, I.toNumber = function() {
            return this.unsigned ? (this.high >>> 0) * h + (this.low >>> 0) : this.high * h + (this.low >>> 0);
          }, I.toString = function(e3) {
            if ((e3 = e3 || 10) < 2 || 36 < e3)
              throw RangeError("radix");
            if (this.isZero())
              return "0";
            if (this.isNegative()) {
              if (this.eq(R)) {
                var t3 = s(e3), r3 = this.div(t3), n3 = r3.mul(t3).sub(this);
                return r3.toString(e3) + n3.toInt().toString(e3);
              }
              return "-" + this.neg().toString(e3);
            }
            for (var o2 = s(u(e3, 6), this.unsigned), i2 = this, a2 = ""; ; ) {
              var c2 = i2.div(o2), l2 = (i2.sub(c2.mul(o2)).toInt() >>> 0).toString(e3);
              if ((i2 = c2).isZero())
                return l2 + a2;
              for (; l2.length < 6; )
                l2 = "0" + l2;
              a2 = "" + l2 + a2;
            }
          }, I.getHighBits = function() {
            return this.high;
          }, I.getHighBitsUnsigned = function() {
            return this.high >>> 0;
          }, I.getLowBits = function() {
            return this.low;
          }, I.getLowBitsUnsigned = function() {
            return this.low >>> 0;
          }, I.getNumBitsAbs = function() {
            if (this.isNegative())
              return this.eq(R) ? 64 : this.neg().getNumBitsAbs();
            for (var e3 = this.high != 0 ? this.high : this.low, t3 = 31; t3 > 0 && (e3 & 1 << t3) == 0; t3--)
              ;
            return this.high != 0 ? t3 + 33 : t3 + 1;
          }, I.isZero = function() {
            return this.high === 0 && this.low === 0;
          }, I.eqz = I.isZero, I.isNegative = function() {
            return !this.unsigned && this.high < 0;
          }, I.isPositive = function() {
            return this.unsigned || this.high >= 0;
          }, I.isOdd = function() {
            return (1 & this.low) == 1;
          }, I.isEven = function() {
            return (1 & this.low) == 0;
          }, I.equals = function(e3) {
            return n2(e3) || (e3 = p(e3)), (this.unsigned === e3.unsigned || this.high >>> 31 != 1 || e3.high >>> 31 != 1) && this.high === e3.high && this.low === e3.low;
          }, I.eq = I.equals, I.notEquals = function(e3) {
            return !this.eq(e3);
          }, I.neq = I.notEquals, I.ne = I.notEquals, I.lessThan = function(e3) {
            return this.comp(e3) < 0;
          }, I.lt = I.lessThan, I.lessThanOrEqual = function(e3) {
            return this.comp(e3) <= 0;
          }, I.lte = I.lessThanOrEqual, I.le = I.lessThanOrEqual, I.greaterThan = function(e3) {
            return this.comp(e3) > 0;
          }, I.gt = I.greaterThan, I.greaterThanOrEqual = function(e3) {
            return this.comp(e3) >= 0;
          }, I.gte = I.greaterThanOrEqual, I.ge = I.greaterThanOrEqual, I.compare = function(e3) {
            if (n2(e3) || (e3 = p(e3)), this.eq(e3))
              return 0;
            var t3 = this.isNegative(), r3 = e3.isNegative();
            return t3 && !r3 ? -1 : !t3 && r3 ? 1 : this.unsigned ? e3.high >>> 0 > this.high >>> 0 || e3.high === this.high && e3.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(e3).isNegative() ? -1 : 1;
          }, I.comp = I.compare, I.negate = function() {
            return !this.unsigned && this.eq(R) ? R : this.not().add(E);
          }, I.neg = I.negate, I.add = function(e3) {
            n2(e3) || (e3 = p(e3));
            var t3 = this.high >>> 16, r3 = 65535 & this.high, o2 = this.low >>> 16, i2 = 65535 & this.low, a2 = e3.high >>> 16, s2 = 65535 & e3.high, u2 = e3.low >>> 16, l2 = 0, h2 = 0, d2 = 0, f2 = 0;
            return d2 += (f2 += i2 + (65535 & e3.low)) >>> 16, h2 += (d2 += o2 + u2) >>> 16, l2 += (h2 += r3 + s2) >>> 16, l2 += t3 + a2, c((d2 &= 65535) << 16 | (f2 &= 65535), (l2 &= 65535) << 16 | (h2 &= 65535), this.unsigned);
          }, I.subtract = function(e3) {
            return n2(e3) || (e3 = p(e3)), this.add(e3.neg());
          }, I.sub = I.subtract, I.multiply = function(e3) {
            if (this.isZero())
              return g;
            if (n2(e3) || (e3 = p(e3)), t2)
              return c(t2.mul(this.low, this.high, e3.low, e3.high), t2.get_high(), this.unsigned);
            if (e3.isZero())
              return g;
            if (this.eq(R))
              return e3.isOdd() ? R : g;
            if (e3.eq(R))
              return this.isOdd() ? R : g;
            if (this.isNegative())
              return e3.isNegative() ? this.neg().mul(e3.neg()) : this.neg().mul(e3).neg();
            if (e3.isNegative())
              return this.mul(e3.neg()).neg();
            if (this.lt(m) && e3.lt(m))
              return s(this.toNumber() * e3.toNumber(), this.unsigned);
            var r3 = this.high >>> 16, o2 = 65535 & this.high, i2 = this.low >>> 16, a2 = 65535 & this.low, u2 = e3.high >>> 16, l2 = 65535 & e3.high, h2 = e3.low >>> 16, d2 = 65535 & e3.low, f2 = 0, y2 = 0, E2 = 0, v2 = 0;
            return E2 += (v2 += a2 * d2) >>> 16, y2 += (E2 += i2 * d2) >>> 16, E2 &= 65535, y2 += (E2 += a2 * h2) >>> 16, f2 += (y2 += o2 * d2) >>> 16, y2 &= 65535, f2 += (y2 += i2 * h2) >>> 16, y2 &= 65535, f2 += (y2 += a2 * l2) >>> 16, f2 += r3 * d2 + o2 * h2 + i2 * l2 + a2 * u2, c((E2 &= 65535) << 16 | (v2 &= 65535), (f2 &= 65535) << 16 | (y2 &= 65535), this.unsigned);
          }, I.mul = I.multiply, I.divide = function(e3) {
            if (n2(e3) || (e3 = p(e3)), e3.isZero())
              throw Error("division by zero");
            var r3, o2, i2;
            if (t2)
              return this.unsigned || this.high !== -2147483648 || e3.low !== -1 || e3.high !== -1 ? c((this.unsigned ? t2.div_u : t2.div_s)(this.low, this.high, e3.low, e3.high), t2.get_high(), this.unsigned) : this;
            if (this.isZero())
              return this.unsigned ? y : g;
            if (this.unsigned) {
              if (e3.unsigned || (e3 = e3.toUnsigned()), e3.gt(this))
                return y;
              if (e3.gt(this.shru(1)))
                return v;
              i2 = y;
            } else {
              if (this.eq(R))
                return e3.eq(E) || e3.eq(T) ? R : e3.eq(R) ? E : (r3 = this.shr(1).div(e3).shl(1)).eq(g) ? e3.isNegative() ? E : T : (o2 = this.sub(e3.mul(r3)), i2 = r3.add(o2.div(e3)));
              if (e3.eq(R))
                return this.unsigned ? y : g;
              if (this.isNegative())
                return e3.isNegative() ? this.neg().div(e3.neg()) : this.neg().div(e3).neg();
              if (e3.isNegative())
                return this.div(e3.neg()).neg();
              i2 = g;
            }
            for (o2 = this; o2.gte(e3); ) {
              r3 = Math.max(1, Math.floor(o2.toNumber() / e3.toNumber()));
              for (var a2 = Math.ceil(Math.log(r3) / Math.LN2), l2 = a2 <= 48 ? 1 : u(2, a2 - 48), h2 = s(r3), d2 = h2.mul(e3); d2.isNegative() || d2.gt(o2); )
                d2 = (h2 = s(r3 -= l2, this.unsigned)).mul(e3);
              h2.isZero() && (h2 = E), i2 = i2.add(h2), o2 = o2.sub(d2);
            }
            return i2;
          }, I.div = I.divide, I.modulo = function(e3) {
            return n2(e3) || (e3 = p(e3)), t2 ? c((this.unsigned ? t2.rem_u : t2.rem_s)(this.low, this.high, e3.low, e3.high), t2.get_high(), this.unsigned) : this.sub(this.div(e3).mul(e3));
          }, I.mod = I.modulo, I.rem = I.modulo, I.not = function() {
            return c(~this.low, ~this.high, this.unsigned);
          }, I.and = function(e3) {
            return n2(e3) || (e3 = p(e3)), c(this.low & e3.low, this.high & e3.high, this.unsigned);
          }, I.or = function(e3) {
            return n2(e3) || (e3 = p(e3)), c(this.low | e3.low, this.high | e3.high, this.unsigned);
          }, I.xor = function(e3) {
            return n2(e3) || (e3 = p(e3)), c(this.low ^ e3.low, this.high ^ e3.high, this.unsigned);
          }, I.shiftLeft = function(e3) {
            return n2(e3) && (e3 = e3.toInt()), (e3 &= 63) == 0 ? this : e3 < 32 ? c(this.low << e3, this.high << e3 | this.low >>> 32 - e3, this.unsigned) : c(0, this.low << e3 - 32, this.unsigned);
          }, I.shl = I.shiftLeft, I.shiftRight = function(e3) {
            return n2(e3) && (e3 = e3.toInt()), (e3 &= 63) == 0 ? this : e3 < 32 ? c(this.low >>> e3 | this.high << 32 - e3, this.high >> e3, this.unsigned) : c(this.high >> e3 - 32, this.high >= 0 ? 0 : -1, this.unsigned);
          }, I.shr = I.shiftRight, I.shiftRightUnsigned = function(e3) {
            if (n2(e3) && (e3 = e3.toInt()), (e3 &= 63) == 0)
              return this;
            var t3 = this.high;
            return e3 < 32 ? c(this.low >>> e3 | t3 << 32 - e3, t3 >>> e3, this.unsigned) : c(e3 === 32 ? t3 : t3 >>> e3 - 32, 0, this.unsigned);
          }, I.shru = I.shiftRightUnsigned, I.shr_u = I.shiftRightUnsigned, I.toSigned = function() {
            return this.unsigned ? c(this.low, this.high, false) : this;
          }, I.toUnsigned = function() {
            return this.unsigned ? this : c(this.low, this.high, true);
          }, I.toBytes = function(e3) {
            return e3 ? this.toBytesLE() : this.toBytesBE();
          }, I.toBytesLE = function() {
            var e3 = this.high, t3 = this.low;
            return [255 & t3, t3 >>> 8 & 255, t3 >>> 16 & 255, t3 >>> 24, 255 & e3, e3 >>> 8 & 255, e3 >>> 16 & 255, e3 >>> 24];
          }, I.toBytesBE = function() {
            var e3 = this.high, t3 = this.low;
            return [e3 >>> 24, e3 >>> 16 & 255, e3 >>> 8 & 255, 255 & e3, t3 >>> 24, t3 >>> 16 & 255, t3 >>> 8 & 255, 255 & t3];
          }, r2.fromBytes = function(e3, t3, n3) {
            return n3 ? r2.fromBytesLE(e3, t3) : r2.fromBytesBE(e3, t3);
          }, r2.fromBytesLE = function(e3, t3) {
            return new r2(e3[0] | e3[1] << 8 | e3[2] << 16 | e3[3] << 24, e3[4] | e3[5] << 8 | e3[6] << 16 | e3[7] << 24, t3);
          }, r2.fromBytesBE = function(e3, t3) {
            return new r2(e3[4] << 24 | e3[5] << 16 | e3[6] << 8 | e3[7], e3[0] << 24 | e3[1] << 16 | e3[2] << 8 | e3[3], t3);
          };
        }, 7969: function(e2) {
          "use strict";
          function t2() {
            this._listeners = {};
          }
          e2.exports = t2, t2.prototype.on = function(e3, t3, r2) {
            return (this._listeners[e3] || (this._listeners[e3] = [])).push({ fn: t3, ctx: r2 || this }), this;
          }, t2.prototype.off = function(e3, t3) {
            if (e3 === void 0)
              this._listeners = {};
            else if (t3 === void 0)
              this._listeners[e3] = [];
            else
              for (var r2 = this._listeners[e3], n2 = 0; n2 < r2.length; )
                r2[n2].fn === t3 ? r2.splice(n2, 1) : ++n2;
            return this;
          }, t2.prototype.emit = function(e3) {
            var t3 = this._listeners[e3];
            if (t3) {
              for (var r2 = [], n2 = 1; n2 < arguments.length; )
                r2.push(arguments[n2++]);
              for (n2 = 0; n2 < t3.length; )
                t3[n2].fn.apply(t3[n2++].ctx, r2);
            }
            return this;
          };
        }, 6728: function(e2) {
          "use strict";
          e2.exports = function(e3, t2) {
            for (var r2 = new Array(arguments.length - 1), n2 = 0, o = 2, i = true; o < arguments.length; )
              r2[n2++] = arguments[o++];
            return new Promise(function(o2, a) {
              r2[n2] = function(e4) {
                if (i)
                  if (i = false, e4)
                    a(e4);
                  else {
                    for (var t3 = new Array(arguments.length - 1), r3 = 0; r3 < t3.length; )
                      t3[r3++] = arguments[r3];
                    o2.apply(null, t3);
                  }
              };
              try {
                e3.apply(t2 || null, r2);
              } catch (e4) {
                i && (i = false, a(e4));
              }
            });
          };
        }, 5889: function(e2) {
          "use strict";
          var t2 = e2.exports;
          t2.length = function(e3) {
            var t3 = e3.length;
            if (!t3)
              return 0;
            for (var r3 = 0; --t3 % 4 > 1 && e3.charAt(t3) === "="; )
              ++r3;
            return Math.ceil(3 * e3.length) / 4 - r3;
          };
          for (var r2 = new Array(64), n2 = new Array(123), o = 0; o < 64; )
            n2[r2[o] = o < 26 ? o + 65 : o < 52 ? o + 71 : o < 62 ? o - 4 : o - 59 | 43] = o++;
          t2.encode = function(e3, t3, n3) {
            for (var o2, i2 = null, a = [], s = 0, c = 0; t3 < n3; ) {
              var u = e3[t3++];
              switch (c) {
                case 0:
                  a[s++] = r2[u >> 2], o2 = (3 & u) << 4, c = 1;
                  break;
                case 1:
                  a[s++] = r2[o2 | u >> 4], o2 = (15 & u) << 2, c = 2;
                  break;
                case 2:
                  a[s++] = r2[o2 | u >> 6], a[s++] = r2[63 & u], c = 0;
              }
              s > 8191 && ((i2 || (i2 = [])).push(String.fromCharCode.apply(String, a)), s = 0);
            }
            return c && (a[s++] = r2[o2], a[s++] = 61, c === 1 && (a[s++] = 61)), i2 ? (s && i2.push(String.fromCharCode.apply(String, a.slice(0, s))), i2.join("")) : String.fromCharCode.apply(String, a.slice(0, s));
          };
          var i = "invalid encoding";
          t2.decode = function(e3, t3, r3) {
            for (var o2, a = r3, s = 0, c = 0; c < e3.length; ) {
              var u = e3.charCodeAt(c++);
              if (u === 61 && s > 1)
                break;
              if ((u = n2[u]) === void 0)
                throw Error(i);
              switch (s) {
                case 0:
                  o2 = u, s = 1;
                  break;
                case 1:
                  t3[r3++] = o2 << 2 | (48 & u) >> 4, o2 = u, s = 2;
                  break;
                case 2:
                  t3[r3++] = (15 & o2) << 4 | (60 & u) >> 2, o2 = u, s = 3;
                  break;
                case 3:
                  t3[r3++] = (3 & o2) << 6 | u, s = 0;
              }
            }
            if (s === 1)
              throw Error(i);
            return r3 - a;
          }, t2.test = function(e3) {
            return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e3);
          };
        }, 3072: function(e2) {
          e2.exports = n2;
          var t2, r2 = /\/|\./;
          function n2(e3, t3) {
            r2.test(e3) || (e3 = "google/protobuf/" + e3 + ".proto", t3 = { nested: { google: { nested: { protobuf: { nested: t3 } } } } }), n2[e3] = t3;
          }
          n2("any", { Any: { fields: { type_url: { type: "string", id: 1 }, value: { type: "bytes", id: 2 } } } }), n2("duration", { Duration: t2 = { fields: { seconds: { type: "int64", id: 1 }, nanos: { type: "int32", id: 2 } } } }), n2("timestamp", { Timestamp: t2 }), n2("empty", { Empty: { fields: {} } }), n2("struct", { Struct: { fields: { fields: { keyType: "string", type: "Value", id: 1 } } }, Value: { oneofs: { kind: { oneof: ["nullValue", "numberValue", "stringValue", "boolValue", "structValue", "listValue"] } }, fields: { nullValue: { type: "NullValue", id: 1 }, numberValue: { type: "double", id: 2 }, stringValue: { type: "string", id: 3 }, boolValue: { type: "bool", id: 4 }, structValue: { type: "Struct", id: 5 }, listValue: { type: "ListValue", id: 6 } } }, NullValue: { values: { NULL_VALUE: 0 } }, ListValue: { fields: { values: { rule: "repeated", type: "Value", id: 1 } } } }), n2("wrappers", { DoubleValue: { fields: { value: { type: "double", id: 1 } } }, FloatValue: { fields: { value: { type: "float", id: 1 } } }, Int64Value: { fields: { value: { type: "int64", id: 1 } } }, UInt64Value: { fields: { value: { type: "uint64", id: 1 } } }, Int32Value: { fields: { value: { type: "int32", id: 1 } } }, UInt32Value: { fields: { value: { type: "uint32", id: 1 } } }, BoolValue: { fields: { value: { type: "bool", id: 1 } } }, StringValue: { fields: { value: { type: "string", id: 1 } } }, BytesValue: { fields: { value: { type: "bytes", id: 1 } } } }), n2("field_mask", { FieldMask: { fields: { paths: { rule: "repeated", type: "string", id: 1 } } } }), n2.get = function(e3) {
            return n2[e3] || null;
          };
        }, 525: function(e2, t2, r2) {
          var n2, o, i = e2.exports;
          function a(e3, t3, r3, i2) {
            var a2 = i2.m, s2 = i2.d, c = i2.types, u = i2.ksi, l = u !== void 0;
            if (e3.resolvedType)
              if (e3.resolvedType instanceof n2) {
                for (var p = l ? s2[r3][u] : s2[r3], h = e3.resolvedType.values, d = Object.keys(h), f = 0; f < d.length; f++)
                  if (!(e3.repeated && h[d[f]] === e3.typeDefault || d[f] != p && h[d[f]] != p)) {
                    l ? a2[r3][u] = h[d[f]] : a2[r3] = h[d[f]];
                    break;
                  }
              } else {
                if (typeof (l ? s2[r3][u] : s2[r3]) != "object")
                  throw TypeError(e3.fullName + ": object expected");
                l ? a2[r3][u] = c[t3].fromObject(s2[r3][u]) : a2[r3] = c[t3].fromObject(s2[r3]);
              }
            else {
              var m = false;
              switch (e3.type) {
                case "double":
                case "float":
                  l ? a2[r3][u] = Number(s2[r3][u]) : a2[r3] = Number(s2[r3]);
                  break;
                case "uint32":
                case "fixed32":
                  l ? a2[r3][u] = s2[r3][u] >>> 0 : a2[r3] = s2[r3] >>> 0;
                  break;
                case "int32":
                case "sint32":
                case "sfixed32":
                  l ? a2[r3][u] = 0 | s2[r3][u] : a2[r3] = 0 | s2[r3];
                  break;
                case "uint64":
                  m = true;
                case "int64":
                case "sint64":
                case "fixed64":
                case "sfixed64":
                  o.Long ? l ? a2[r3][u] = o.Long.fromValue(s2[r3][u]).unsigned = m : a2[r3] = o.Long.fromValue(s2[r3]).unsigned = m : typeof (l ? s2[r3][u] : s2[r3]) == "string" ? l ? a2[r3][u] = parseInt(s2[r3][u], 10) : a2[r3] = parseInt(s2[r3], 10) : typeof (l ? s2[r3][u] : s2[r3]) == "number" ? l ? a2[r3][u] = s2[r3][u] : a2[r3] = s2[r3] : typeof (l ? s2[r3][u] : s2[r3]) == "object" && (l ? a2[r3][u] = new o.LongBits(s2[r3][u].low >>> 0, s2[r3][u].high >>> 0).toNumber(m) : a2[r3] = new o.LongBits(s2[r3].low >>> 0, s2[r3].high >>> 0).toNumber(m));
                  break;
                case "bytes":
                  typeof (l ? s2[r3][u] : s2[r3]) == "string" ? l ? o.base64.decode(s2[r3][u], a2[r3][u] = o.newBuffer(o.base64.length(s2[r3][u])), 0) : o.base64.decode(s2[r3], a2[r3] = o.newBuffer(o.base64.length(s2[r3])), 0) : (l ? s2[r3][u] : s2[r3]).length && (l ? a2[r3][u] = s2[r3][u] : a2[r3] = s2[r3]);
                  break;
                case "string":
                  l ? a2[r3][u] = String(s2[r3][u]) : a2[r3] = String(s2[r3]);
                  break;
                case "bool":
                  l ? a2[r3][u] = Boolean(s2[r3][u]) : a2[r3] = Boolean(s2[r3]);
              }
            }
          }
          function s(e3, t3, r3, i2) {
            var a2 = i2.m, s2 = i2.d, c = i2.types, u = i2.ksi, l = i2.o, p = u !== void 0;
            if (e3.resolvedType)
              e3.resolvedType instanceof n2 ? p ? s2[r3][u] = l.enums === String ? c[t3].values[a2[r3][u]] : a2[r3][u] : s2[r3] = l.enums === String ? c[t3].values[a2[r3]] : a2[r3] : p ? s2[r3][u] = c[t3].toObject(a2[r3][u], l) : s2[r3] = c[t3].toObject(a2[r3], l);
            else {
              var h = false;
              switch (e3.type) {
                case "double":
                case "float":
                  p ? s2[r3][u] = l.json && !isFinite(a2[r3][u]) ? String(a2[r3][u]) : a2[r3][u] : s2[r3] = l.json && !isFinite(a2[r3]) ? String(a2[r3]) : a2[r3];
                  break;
                case "uint64":
                  h = true;
                case "int64":
                case "sint64":
                case "fixed64":
                case "sfixed64":
                  typeof a2[r3][u] == "number" ? p ? s2[r3][u] = l.longs === String ? String(a2[r3][u]) : a2[r3][u] : s2[r3] = l.longs === String ? String(a2[r3]) : a2[r3] : p ? s2[r3][u] = l.longs === String ? o.Long.prototype.toString.call(a2[r3][u]) : l.longs === Number ? new o.LongBits(a2[r3][u].low >>> 0, a2[r3][u].high >>> 0).toNumber(h) : a2[r3][u] : s2[r3] = l.longs === String ? o.Long.prototype.toString.call(a2[r3]) : l.longs === Number ? new o.LongBits(a2[r3].low >>> 0, a2[r3].high >>> 0).toNumber(h) : a2[r3];
                  break;
                case "bytes":
                  p ? s2[r3][u] = l.bytes === String ? o.base64.encode(a2[r3][u], 0, a2[r3][u].length) : l.bytes === Array ? Array.prototype.slice.call(a2[r3][u]) : a2[r3][u] : s2[r3] = l.bytes === String ? o.base64.encode(a2[r3], 0, a2[r3].length) : l.bytes === Array ? Array.prototype.slice.call(a2[r3]) : a2[r3];
                  break;
                default:
                  p ? s2[r3][u] = a2[r3][u] : s2[r3] = a2[r3];
              }
            }
          }
          i._configure = function() {
            n2 = r2(582), o = r2(9935);
          }, i.fromObject = function(e3) {
            var t3 = e3.fieldsArray;
            return function(e4) {
              return function(r3) {
                if (r3 instanceof this.ctor)
                  return r3;
                if (!t3.length)
                  return new this.ctor();
                for (var i2 = new this.ctor(), s2 = 0; s2 < t3.length; ++s2) {
                  var c, u = t3[s2].resolve(), l = u.name;
                  if (u.map) {
                    if (r3[l]) {
                      if (typeof r3[l] != "object")
                        throw TypeError(u.fullName + ": object expected");
                      i2[l] = {};
                    }
                    var p = Object.keys(r3[l]);
                    for (c = 0; c < p.length; ++c)
                      a(u, s2, l, o.merge(o.copy(e4), { m: i2, d: r3, ksi: p[c] }));
                  } else if (u.repeated) {
                    if (r3[l]) {
                      if (!Array.isArray(r3[l]))
                        throw TypeError(u.fullName + ": array expected");
                      for (i2[l] = [], c = 0; c < r3[l].length; ++c)
                        a(u, s2, l, o.merge(o.copy(e4), { m: i2, d: r3, ksi: c }));
                    }
                  } else
                    (u.resolvedType instanceof n2 || r3[l] != null) && a(u, s2, l, o.merge(o.copy(e4), { m: i2, d: r3 }));
                }
                return i2;
              };
            };
          }, i.toObject = function(e3) {
            var t3 = e3.fieldsArray.slice().sort(o.compareFieldsById);
            return function(r3) {
              return t3.length ? function(i2, a2) {
                a2 = a2 || {};
                for (var c, u, l = {}, p = [], h = [], d = [], f = 0; f < t3.length; ++f)
                  t3[f].partOf || (t3[f].resolve().repeated ? p : t3[f].map ? h : d).push(t3[f]);
                if (p.length && (a2.arrays || a2.defaults))
                  for (f = 0; f < p.length; ++f)
                    l[p[f].name] = [];
                if (h.length && (a2.objects || a2.defaults))
                  for (f = 0; f < h.length; ++f)
                    l[h[f].name] = {};
                if (d.length && a2.defaults)
                  for (f = 0; f < d.length; ++f)
                    if (u = (c = d[f]).name, c.resolvedType instanceof n2)
                      l[u] = a2.enums = String ? c.resolvedType.valuesById[c.typeDefault] : c.typeDefault;
                    else if (c.long)
                      if (o.Long) {
                        var m = new o.Long(c.typeDefault.low, c.typeDefault.high, c.typeDefault.unsigned);
                        l[u] = a2.longs === String ? m.toString() : a2.longs === Number ? m.toNumber() : m;
                      } else
                        l[u] = a2.longs === String ? c.typeDefault.toString() : c.typeDefault.toNumber();
                    else
                      c.bytes ? l[u] = a2.bytes === String ? String.fromCharCode.apply(String, c.typeDefault) : Array.prototype.slice.call(c.typeDefault).join("*..*").split("*..*") : l[u] = c.typeDefault;
                var g = false;
                for (f = 0; f < t3.length; ++f) {
                  u = (c = t3[f]).name;
                  var y, E, v = e3._fieldsArray.indexOf(c);
                  if (c.map) {
                    if (g || (g = true), i2[u] && (y = Object.keys(i2[u]).length))
                      for (l[u] = {}, E = 0; E < y.length; ++E)
                        s(c, v, u, o.merge(o.copy(r3), { m: i2, d: l, ksi: y[E], o: a2 }));
                  } else if (c.repeated) {
                    if (i2[u] && i2[u].length)
                      for (l[u] = [], E = 0; E < i2[u].length; ++E)
                        s(c, v, u, o.merge(o.copy(r3), { m: i2, d: l, ksi: E, o: a2 }));
                  } else
                    i2[u] != null && i2.hasOwnProperty(u) && s(c, v, u, o.merge(o.copy(r3), { m: i2, d: l, o: a2 })), c.partOf && a2.oneofs && (l[c.partOf.name] = u);
                }
                return l;
              } : function() {
                return {};
              };
            };
          };
        }, 3888: function(e2, t2, r2) {
          var n2, o, i;
          function a(e3) {
            return "missing required '" + e3.name + "'";
          }
          function s(e3) {
            return function(t3) {
              var r3 = t3.Reader, s2 = t3.types, c = t3.util;
              return function(t4, u) {
                t4 instanceof r3 || (t4 = r3.create(t4));
                for (var l, p = u === void 0 ? t4.len : t4.pos + u, h = new this.ctor(); t4.pos < p; ) {
                  var d = t4.uint32();
                  if (e3.group && (7 & d) == 4)
                    break;
                  for (var f = d >>> 3, m = 0, g = false; m < e3.fieldsArray.length; ++m) {
                    var y = e3._fieldsArray[m].resolve(), E = y.name, v = y.resolvedType instanceof n2 ? "int32" : y.type;
                    if (f == y.id) {
                      if (g = true, y.map)
                        t4.skip().pos++, h[E] === c.emptyObject && (h[E] = {}), l = t4[y.keyType](), t4.pos++, o.long[y.keyType] != null ? o.basic[v] == null ? h[E][typeof l == "object" ? c.longToHash(l) : l] = s2[m].decode(t4, t4.uint32()) : h[E][typeof l == "object" ? c.longToHash(l) : l] = t4[v]() : o.basic[v] == null ? h[E] = s2[m].decode(t4, t4.uint32()) : h[E] = t4[v]();
                      else if (y.repeated)
                        if (h[E] && h[E].length || (h[E] = []), o.packed[v] != null && (7 & d) == 2)
                          for (var T = t4.uint32() + t4.pos; t4.pos < T; )
                            h[E].push(t4[v]());
                        else
                          o.basic[v] == null ? y.resolvedType.group ? h[E].push(s2[m].decode(t4)) : h[E].push(s2[m].decode(t4, t4.uint32())) : h[E].push(t4[v]());
                      else
                        o.basic[v] == null ? y.resolvedType.group ? h[E] = s2[m].decode(t4) : h[E] = s2[m].decode(t4, t4.uint32()) : h[E] = t4[v]();
                      break;
                    }
                  }
                  g || (console.log("t", d), t4.skipType(7 & d));
                }
                for (m = 0; m < e3._fieldsArray.length; ++m) {
                  var _ = e3._fieldsArray[m];
                  if (_.required && !h.hasOwnProperty(_.name))
                    throw i.ProtocolError(a(_), { instance: h });
                }
                return h;
              };
            };
          }
          e2.exports = s, s._configure = function() {
            n2 = r2(582), o = r2(4696), i = r2(9935);
          };
        }, 9929: function(e2, t2, r2) {
          var n2, o;
          function i(e3) {
            return function(t3) {
              var r3 = t3.Writer, i2 = t3.types, a = t3.util;
              return function(t4, s) {
                s = s || r3.create();
                for (var c = e3.fieldsArray.slice().sort(a.compareFieldsById), u = 0; u < c.length; u++) {
                  var l = c[u], p = e3._fieldsArray.indexOf(l), h = l.resolvedType instanceof n2 ? "uint32" : l.type, d = o.basic[h], f = t4[l.name];
                  if (l.resolvedType instanceof n2 && typeof f == "string" && (f = i2[p].values[f]), l.map) {
                    if (f != null && t4.hasOwnProperty(l.name))
                      for (var m = Object.keys(f), g = 0; g < m.length; ++g)
                        s.uint32((l.id << 3 | 2) >>> 0).fork().uint32(8 | o.mapKey[l.keyType])[l.keyType](m[g]), d === void 0 ? i2[p].encode(f[m[g]], s.uint32(18).fork()).ldelim().ldelim() : s.uint32(16 | d)[h](f[m[g]]).ldelim();
                  } else if (l.repeated) {
                    if (f && f.length)
                      if (l.packed && o.packed[h] !== void 0) {
                        s.uint32((l.id << 3 | 2) >>> 0).fork();
                        for (var y = 0; y < f.length; y++)
                          s[h](f[y]);
                        s.ldelim();
                      } else
                        for (var E = 0; E < f.length; E++)
                          d === void 0 ? l.resolvedType.group ? i2[p].encode(f[E], s.uint32((l.id << 3 | 3) >>> 0)).uint32((l.id << 3 | 4) >>> 0) : i2[p].encode(f[E], s.uint32((l.id << 3 | 2) >>> 0).fork()).ldelim() : s.uint32((l.id << 3 | d) >>> 0)[h](f[E]);
                  } else
                    (!l.optional || f != null && t4.hasOwnProperty(l.name)) && (l.optional || f != null && t4.hasOwnProperty(l.name) || console.warn("\u6CE8\u610F\u5566!!!\u5F88\u5927\u6982\u7387\u4F1A\u62A5\u9519 \u7C7B\u578B:", t4.$type ? t4.$type.name : "\u4E0D\u6653\u5F97", "\u6CA1\u6709\u8BBE\u7F6E\u5BF9\u5E94\u7684\u5C5E\u6027:", l.name, "\u68C0\u67E5\u662F\u4E0D\u662Fproto\u6587\u4EF6\u5C5E\u6027\u8BBE\u7F6E\u4E3A\u4E86required"), d === void 0 ? l.resolvedType.group ? i2[p].encode(f, s.uint32((l.id << 3 | 3) >>> 0)).uint32((l.id << 3 | 4) >>> 0) : i2[p].encode(f, s.uint32((l.id << 3 | 2) >>> 0).fork()).ldelim() : s.uint32((l.id << 3 | d) >>> 0)[h](f));
                }
                return s;
              };
            };
          }
          e2.exports = i, i._configure = function() {
            n2 = r2(582), o = r2(4696);
          };
        }, 582: function(e2, t2, r2) {
          e2.exports = i;
          var n2 = r2(5998);
          ((i.prototype = Object.create(n2.prototype)).constructor = i).className = "Enum";
          var o = r2(2476);
          function i(e3, t3, r3, o2, i2) {
            if (n2.call(this, e3, r3), t3 && typeof t3 != "object")
              throw TypeError("values must be an object");
            if (this.valuesById = {}, this.values = Object.create(this.valuesById), this.comment = o2, this.comments = i2 || {}, this.reserved = void 0, t3)
              for (var a = Object.keys(t3), s = 0; s < a.length; ++s)
                typeof t3[a[s]] == "number" && (this.valuesById[this.values[a[s]] = t3[a[s]]] = a[s]);
          }
          i.fromJSON = function(e3, t3) {
            var r3 = new i(e3, t3.values, t3.options, t3.comment, t3.comments);
            return r3.reserved = t3.reserved, r3;
          }, i.prototype.toJSON = function(e3) {
            var t3 = !!e3 && Boolean(e3.keepComments);
            return util.toObject(["options", this.options, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : void 0, "comment", t3 ? this.comment : void 0, "comments", t3 ? this.comments : void 0]);
          }, i.prototype.add = function(e3, t3, r3) {
            if (!util.isString(e3))
              throw TypeError("name must be a string");
            if (!util.isInteger(t3))
              throw TypeError("id must be an integer");
            if (this.values[e3] !== void 0)
              throw Error("duplicate name '" + e3 + "' in " + this);
            if (this.isReservedId(t3))
              throw Error("id " + t3 + " is reserved in " + this);
            if (this.isReservedName(e3))
              throw Error("name '" + e3 + "' is reserved in " + this);
            if (this.valuesById[t3] !== void 0) {
              if (!this.options || !this.options.allow_alias)
                throw Error("duplicate id " + t3 + " in " + this);
              this.values[e3] = t3;
            } else
              this.valuesById[this.values[e3] = t3] = e3;
            return this.comments[e3] = r3 || null, this;
          }, i.prototype.remove = function(e3) {
            if (!util.isString(e3))
              throw TypeError("name must be a string");
            var t3 = this.values[e3];
            if (t3 == null)
              throw Error("name '" + e3 + "' does not exist in " + this);
            return delete this.valuesById[t3], delete this.values[e3], delete this.comments[e3], this;
          }, i.prototype.isReservedId = function(e3) {
            return o.isReservedId(this.reserved, e3);
          }, i.prototype.isReservedName = function(e3) {
            return o.isReservedName(this.reserved, e3);
          };
        }, 9286: function(e2, t2, r2) {
          e2.exports = u;
          var n2, o, i, a, s = r2(5998);
          ((u.prototype = Object.create(s.prototype)).constructor = u).className = "Field";
          var c = /^required|optional|repeated$/;
          function u(e3, t3, r3, n3, a2, u2, l) {
            if (i.isObject(n3) ? (l = a2, u2 = n3, n3 = a2 = void 0) : i.isObject(a2) && (l = u2, u2 = a2, a2 = void 0), s.call(this, e3, u2), !i.isInteger(t3) || t3 < 0)
              throw TypeError("id must be a non-negative integer");
            if (!i.isString(r3))
              throw TypeError("type must be a string");
            if (n3 !== void 0 && !c.test(n3 = n3.toString().toLowerCase()))
              throw TypeError("rule must be a string rule");
            if (a2 !== void 0 && !i.isString(a2))
              throw TypeError("extend must be a string");
            this.rule = n3 && n3 !== "optional" ? n3 : void 0, this.type = r3, this.id = t3, this.extend = a2 || void 0, this.required = n3 === "required", this.optional = !this.required, this.repeated = n3 === "repeated", this.map = false, this.message = null, this.partOf = null, this.typeDefault = null, this.defaultValue = null, this.long = !!i.Long && o.long[r3] !== void 0, this.bytes = r3 === "bytes", this.resolvedType = null, this.extensionField = null, this.declaringField = null, this._packed = null, this.comment = l;
          }
          u.fromJSON = function(e3, t3) {
            return new u(e3, t3.id, t3.type, t3.rule, t3.extend, t3.options, t3.comment);
          }, Object.defineProperty(u.prototype, "packed", { get: function() {
            return this._packed === null && (this._packed = this.getOption("packed") !== false), this._packed;
          } }), u.prototype.setOption = function(e3, t3, r3) {
            return e3 === "packed" && (this._packed = null), s.prototype.setOption.call(this, e3, t3, r3);
          }, u.prototype.toJSON = function(e3) {
            var t3 = !!e3 && Boolean(e3.keepComments);
            return i.toObject(["rule", this.rule !== "optional" && this.rule || void 0, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", t3 ? this.comment : void 0]);
          }, u.prototype.resolve = function() {
            if (this.resolved)
              return this;
            if ((this.typeDefault = o.defaults[this.type]) === void 0 && (this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type), this.resolvedType instanceof a ? this.typeDefault = null : this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]]), this.options && this.options.default != null && (this.typeDefault = this.options.default, this.resolvedType instanceof n2 && typeof this.typeDefault == "string" && (this.typeDefault = this.resolvedType.values[this.typeDefault])), this.options && (this.options.packed !== true && (this.options.packed === void 0 || !this.resolvedType || this.resolvedType instanceof n2) || delete this.options.packed, Object.keys(this.options).length || (this.options = void 0)), this.long)
              this.typeDefault = i.Long.fromNumber(this.typeDefault, this.type.charAt(0) === "u"), Object.freeze && Object.freeze(this.typeDefault);
            else if (this.bytes && typeof this.typeDefault == "string") {
              var e3;
              i.utf8.write(this.typeDefault, e3 = i.newBuffer(i.utf8.length(this.typeDefault)), 0), this.typeDefault = e3;
            }
            return this.map ? this.defaultValue = i.emptyObject : this.repeated ? this.defaultValue = i.emptyArray : this.defaultValue = this.typeDefault, this.parent instanceof a && (this.parent.ctor.prototype[this.name] = this.defaultValue), s.prototype.resolve.call(this);
          }, u.d = function(e3, t3, r3, n3) {
            return typeof t3 == "function" ? t3 = i.decorateType(t3).name : t3 && typeof t3 == "object" && (t3 = i.decorateEnum(t3).name), function(o2, a2) {
              i.decorateType(o2.constructor).add(new u(a2, e3, t3, r3, { default: n3 }));
            };
          }, u._configure = function() {
            a = r2(192), n2 = r2(582), o = r2(4696), i = r2(9935);
          };
        }, 1283: function(e2) {
          function t2(e3) {
            return typeof Float32Array != "undefined" ? function() {
              var t3 = new Float32Array([-0]), r3 = new Uint8Array(t3.buffer), n3 = r3[3] === 128;
              function o2(e4, n4, o3) {
                t3[0] = e4, n4[o3] = r3[0], n4[o3 + 1] = r3[1], n4[o3 + 2] = r3[2], n4[o3 + 3] = r3[3];
              }
              function i2(e4, n4, o3) {
                t3[0] = e4, n4[o3] = r3[3], n4[o3 + 1] = r3[2], n4[o3 + 2] = r3[1], n4[o3 + 3] = r3[0];
              }
              function a(e4, n4) {
                return r3[0] = e4[n4], r3[1] = e4[n4 + 1], r3[2] = e4[n4 + 2], r3[3] = e4[n4 + 3], t3[0];
              }
              function s(e4, n4) {
                return r3[3] = e4[n4], r3[2] = e4[n4 + 1], r3[1] = e4[n4 + 2], r3[0] = e4[n4 + 3], t3[0];
              }
              e3.writeFloatLE = n3 ? o2 : i2, e3.writeFloatBE = n3 ? i2 : o2, e3.readFloatLE = n3 ? a : s, e3.readFloatBE = n3 ? s : a;
            }() : function() {
              function t3(e4, t4, r3, n3) {
                var o2 = t4 < 0 ? 1 : 0;
                if (o2 && (t4 = -t4), t4 === 0)
                  e4(1 / t4 > 0 ? 0 : 2147483648, r3, n3);
                else if (isNaN(t4))
                  e4(2143289344, r3, n3);
                else if (t4 > 34028234663852886e22)
                  e4((o2 << 31 | 2139095040) >>> 0, r3, n3);
                else if (t4 < 11754943508222875e-54)
                  e4((o2 << 31 | Math.round(t4 / 1401298464324817e-60)) >>> 0, r3, n3);
                else {
                  var i2 = Math.floor(Math.log(t4) / Math.LN2);
                  e4((o2 << 31 | i2 + 127 << 23 | 8388607 & Math.round(t4 * Math.pow(2, -i2) * 8388608)) >>> 0, r3, n3);
                }
              }
              function a(e4, t4, r3) {
                var n3 = e4(t4, r3), o2 = 2 * (n3 >> 31) + 1, i2 = n3 >>> 23 & 255, a2 = 8388607 & n3;
                return i2 === 255 ? a2 ? NaN : o2 * (1 / 0) : i2 === 0 ? 1401298464324817e-60 * o2 * a2 : o2 * Math.pow(2, i2 - 150) * (a2 + 8388608);
              }
              e3.writeFloatLE = t3.bind(null, r2), e3.writeFloatBE = t3.bind(null, n2), e3.readFloatLE = a.bind(null, o), e3.readFloatBE = a.bind(null, i);
            }(), typeof Float64Array != "undefined" ? function() {
              var t3 = new Float64Array([-0]), r3 = new Uint8Array(t3.buffer), n3 = r3[7] === 128;
              function o2(e4, n4, o3) {
                t3[0] = e4, n4[o3] = r3[0], n4[o3 + 1] = r3[1], n4[o3 + 2] = r3[2], n4[o3 + 3] = r3[3], n4[o3 + 4] = r3[4], n4[o3 + 5] = r3[5], n4[o3 + 6] = r3[6], n4[o3 + 7] = r3[7];
              }
              function i2(e4, n4, o3) {
                t3[0] = e4, n4[o3] = r3[7], n4[o3 + 1] = r3[6], n4[o3 + 2] = r3[5], n4[o3 + 3] = r3[4], n4[o3 + 4] = r3[3], n4[o3 + 5] = r3[2], n4[o3 + 6] = r3[1], n4[o3 + 7] = r3[0];
              }
              function a(e4, n4) {
                return r3[0] = e4[n4], r3[1] = e4[n4 + 1], r3[2] = e4[n4 + 2], r3[3] = e4[n4 + 3], r3[4] = e4[n4 + 4], r3[5] = e4[n4 + 5], r3[6] = e4[n4 + 6], r3[7] = e4[n4 + 7], t3[0];
              }
              function s(e4, n4) {
                return r3[7] = e4[n4], r3[6] = e4[n4 + 1], r3[5] = e4[n4 + 2], r3[4] = e4[n4 + 3], r3[3] = e4[n4 + 4], r3[2] = e4[n4 + 5], r3[1] = e4[n4 + 6], r3[0] = e4[n4 + 7], t3[0];
              }
              e3.writeDoubleLE = n3 ? o2 : i2, e3.writeDoubleBE = n3 ? i2 : o2, e3.readDoubleLE = n3 ? a : s, e3.readDoubleBE = n3 ? s : a;
            }() : function() {
              function t3(e4, t4, r3, n3, o2, i2) {
                var a2 = n3 < 0 ? 1 : 0;
                if (a2 && (n3 = -n3), n3 === 0)
                  e4(0, o2, i2 + t4), e4(1 / n3 > 0 ? 0 : 2147483648, o2, i2 + r3);
                else if (isNaN(n3))
                  e4(0, o2, i2 + t4), e4(2146959360, o2, i2 + r3);
                else if (n3 > 17976931348623157e292)
                  e4(0, o2, i2 + t4), e4((a2 << 31 | 2146435072) >>> 0, o2, i2 + r3);
                else {
                  var s;
                  if (n3 < 22250738585072014e-324)
                    e4((s = n3 / 5e-324) >>> 0, o2, i2 + t4), e4((a2 << 31 | s / 4294967296) >>> 0, o2, i2 + r3);
                  else {
                    var c = Math.floor(Math.log(n3) / Math.LN2);
                    c === 1024 && (c = 1023), e4(4503599627370496 * (s = n3 * Math.pow(2, -c)) >>> 0, o2, i2 + t4), e4((a2 << 31 | c + 1023 << 20 | 1048576 * s & 1048575) >>> 0, o2, i2 + r3);
                  }
                }
              }
              function a(e4, t4, r3, n3, o2) {
                var i2 = e4(n3, o2 + t4), a2 = e4(n3, o2 + r3), s = 2 * (a2 >> 31) + 1, c = a2 >>> 20 & 2047, u = 4294967296 * (1048575 & a2) + i2;
                return c === 2047 ? u ? NaN : s * (1 / 0) : c === 0 ? 5e-324 * s * u : s * Math.pow(2, c - 1075) * (u + 4503599627370496);
              }
              e3.writeDoubleLE = t3.bind(null, r2, 0, 4), e3.writeDoubleBE = t3.bind(null, n2, 4, 0), e3.readDoubleLE = a.bind(null, o, 0, 4), e3.readDoubleBE = a.bind(null, i, 4, 0);
            }(), e3;
          }
          function r2(e3, t3, r3) {
            t3[r3] = 255 & e3, t3[r3 + 1] = e3 >>> 8 & 255, t3[r3 + 2] = e3 >>> 16 & 255, t3[r3 + 3] = e3 >>> 24;
          }
          function n2(e3, t3, r3) {
            t3[r3] = e3 >>> 24, t3[r3 + 1] = e3 >>> 16 & 255, t3[r3 + 2] = e3 >>> 8 & 255, t3[r3 + 3] = 255 & e3;
          }
          function o(e3, t3) {
            return (e3[t3] | e3[t3 + 1] << 8 | e3[t3 + 2] << 16 | e3[t3 + 3] << 24) >>> 0;
          }
          function i(e3, t3) {
            return (e3[t3] << 24 | e3[t3 + 1] << 16 | e3[t3 + 2] << 8 | e3[t3 + 3]) >>> 0;
          }
          e2.exports = t2(t2);
        }, 4939: function(e2) {
          e2.exports = r2;
          var t2 = null;
          try {
            t2 = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports;
          } catch (e3) {
          }
          function r2(e3, t3, r3) {
            this.low = 0 | e3, this.high = 0 | t3, this.unsigned = !!r3;
          }
          function n2(e3) {
            return (e3 && e3.__isLong__) === true;
          }
          r2.prototype.__isLong__, Object.defineProperty(r2.prototype, "__isLong__", { value: true }), r2.isLong = n2;
          var o = {}, i = {};
          function a(e3, t3) {
            var r3, n3, a2;
            return t3 ? (a2 = 0 <= (e3 >>>= 0) && e3 < 256) && (n3 = i[e3]) ? n3 : (r3 = c(e3, (0 | e3) < 0 ? -1 : 0, true), a2 && (i[e3] = r3), r3) : (a2 = -128 <= (e3 |= 0) && e3 < 128) && (n3 = o[e3]) ? n3 : (r3 = c(e3, e3 < 0 ? -1 : 0, false), a2 && (o[e3] = r3), r3);
          }
          function s(e3, t3) {
            if (isNaN(e3))
              return t3 ? y : g;
            if (t3) {
              if (e3 < 0)
                return y;
              if (e3 >= d)
                return O;
            } else {
              if (e3 <= -f)
                return R;
              if (e3 + 1 >= f)
                return _;
            }
            return e3 < 0 ? s(-e3, t3).neg() : c(e3 % h | 0, e3 / h | 0, t3);
          }
          function c(e3, t3, n3) {
            return new r2(e3, t3, n3);
          }
          r2.fromInt = a, r2.fromNumber = s, r2.fromBits = c;
          var u = Math.pow;
          function l(e3, t3, r3) {
            if (e3.length === 0)
              throw Error("empty string");
            if (e3 === "NaN" || e3 === "Infinity" || e3 === "+Infinity" || e3 === "-Infinity")
              return g;
            if (typeof t3 == "number" ? (r3 = t3, t3 = false) : t3 = !!t3, (r3 = r3 || 10) < 2 || 36 < r3)
              throw RangeError("radix");
            var n3;
            if ((n3 = e3.indexOf("-")) > 0)
              throw Error("interior hyphen");
            if (n3 === 0)
              return l(e3.substring(1), t3, r3).neg();
            for (var o2 = s(u(r3, 8)), i2 = g, a2 = 0; a2 < e3.length; a2 += 8) {
              var c2 = Math.min(8, e3.length - a2), p2 = parseInt(e3.substring(a2, a2 + c2), r3);
              if (c2 < 8) {
                var h2 = s(u(r3, c2));
                i2 = i2.mul(h2).add(s(p2));
              } else
                i2 = (i2 = i2.mul(o2)).add(s(p2));
            }
            return i2.unsigned = t3, i2;
          }
          function p(e3, t3) {
            return typeof e3 == "number" ? s(e3, t3) : typeof e3 == "string" ? l(e3, t3) : c(e3.low, e3.high, typeof t3 == "boolean" ? t3 : e3.unsigned);
          }
          r2.fromString = l, r2.fromValue = p;
          var h = 4294967296, d = h * h, f = d / 2, m = a(1 << 24), g = a(0);
          r2.ZERO = g;
          var y = a(0, true);
          r2.UZERO = y;
          var E = a(1);
          r2.ONE = E;
          var v = a(1, true);
          r2.UONE = v;
          var T = a(-1);
          r2.NEG_ONE = T;
          var _ = c(-1, 2147483647, false);
          r2.MAX_VALUE = _;
          var O = c(-1, -1, true);
          r2.MAX_UNSIGNED_VALUE = O;
          var R = c(0, -2147483648, false);
          r2.MIN_VALUE = R;
          var I = r2.prototype;
          I.toInt = function() {
            return this.unsigned ? this.low >>> 0 : this.low;
          }, I.toNumber = function() {
            return this.unsigned ? (this.high >>> 0) * h + (this.low >>> 0) : this.high * h + (this.low >>> 0);
          }, I.toString = function(e3) {
            if ((e3 = e3 || 10) < 2 || 36 < e3)
              throw RangeError("radix");
            if (this.isZero())
              return "0";
            if (this.isNegative()) {
              if (this.eq(R)) {
                var t3 = s(e3), r3 = this.div(t3), n3 = r3.mul(t3).sub(this);
                return r3.toString(e3) + n3.toInt().toString(e3);
              }
              return "-" + this.neg().toString(e3);
            }
            for (var o2 = s(u(e3, 6), this.unsigned), i2 = this, a2 = ""; ; ) {
              var c2 = i2.div(o2), l2 = (i2.sub(c2.mul(o2)).toInt() >>> 0).toString(e3);
              if ((i2 = c2).isZero())
                return l2 + a2;
              for (; l2.length < 6; )
                l2 = "0" + l2;
              a2 = "" + l2 + a2;
            }
          }, I.getHighBits = function() {
            return this.high;
          }, I.getHighBitsUnsigned = function() {
            return this.high >>> 0;
          }, I.getLowBits = function() {
            return this.low;
          }, I.getLowBitsUnsigned = function() {
            return this.low >>> 0;
          }, I.getNumBitsAbs = function() {
            if (this.isNegative())
              return this.eq(R) ? 64 : this.neg().getNumBitsAbs();
            for (var e3 = this.high != 0 ? this.high : this.low, t3 = 31; t3 > 0 && (e3 & 1 << t3) == 0; t3--)
              ;
            return this.high != 0 ? t3 + 33 : t3 + 1;
          }, I.isZero = function() {
            return this.high === 0 && this.low === 0;
          }, I.eqz = I.isZero, I.isNegative = function() {
            return !this.unsigned && this.high < 0;
          }, I.isPositive = function() {
            return this.unsigned || this.high >= 0;
          }, I.isOdd = function() {
            return (1 & this.low) == 1;
          }, I.isEven = function() {
            return (1 & this.low) == 0;
          }, I.equals = function(e3) {
            return n2(e3) || (e3 = p(e3)), (this.unsigned === e3.unsigned || this.high >>> 31 != 1 || e3.high >>> 31 != 1) && this.high === e3.high && this.low === e3.low;
          }, I.eq = I.equals, I.notEquals = function(e3) {
            return !this.eq(e3);
          }, I.neq = I.notEquals, I.ne = I.notEquals, I.lessThan = function(e3) {
            return this.comp(e3) < 0;
          }, I.lt = I.lessThan, I.lessThanOrEqual = function(e3) {
            return this.comp(e3) <= 0;
          }, I.lte = I.lessThanOrEqual, I.le = I.lessThanOrEqual, I.greaterThan = function(e3) {
            return this.comp(e3) > 0;
          }, I.gt = I.greaterThan, I.greaterThanOrEqual = function(e3) {
            return this.comp(e3) >= 0;
          }, I.gte = I.greaterThanOrEqual, I.ge = I.greaterThanOrEqual, I.compare = function(e3) {
            if (n2(e3) || (e3 = p(e3)), this.eq(e3))
              return 0;
            var t3 = this.isNegative(), r3 = e3.isNegative();
            return t3 && !r3 ? -1 : !t3 && r3 ? 1 : this.unsigned ? e3.high >>> 0 > this.high >>> 0 || e3.high === this.high && e3.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(e3).isNegative() ? -1 : 1;
          }, I.comp = I.compare, I.negate = function() {
            return !this.unsigned && this.eq(R) ? R : this.not().add(E);
          }, I.neg = I.negate, I.add = function(e3) {
            n2(e3) || (e3 = p(e3));
            var t3 = this.high >>> 16, r3 = 65535 & this.high, o2 = this.low >>> 16, i2 = 65535 & this.low, a2 = e3.high >>> 16, s2 = 65535 & e3.high, u2 = e3.low >>> 16, l2 = 0, h2 = 0, d2 = 0, f2 = 0;
            return d2 += (f2 += i2 + (65535 & e3.low)) >>> 16, h2 += (d2 += o2 + u2) >>> 16, l2 += (h2 += r3 + s2) >>> 16, l2 += t3 + a2, c((d2 &= 65535) << 16 | (f2 &= 65535), (l2 &= 65535) << 16 | (h2 &= 65535), this.unsigned);
          }, I.subtract = function(e3) {
            return n2(e3) || (e3 = p(e3)), this.add(e3.neg());
          }, I.sub = I.subtract, I.multiply = function(e3) {
            if (this.isZero())
              return g;
            if (n2(e3) || (e3 = p(e3)), t2)
              return c(t2.mul(this.low, this.high, e3.low, e3.high), t2.get_high(), this.unsigned);
            if (e3.isZero())
              return g;
            if (this.eq(R))
              return e3.isOdd() ? R : g;
            if (e3.eq(R))
              return this.isOdd() ? R : g;
            if (this.isNegative())
              return e3.isNegative() ? this.neg().mul(e3.neg()) : this.neg().mul(e3).neg();
            if (e3.isNegative())
              return this.mul(e3.neg()).neg();
            if (this.lt(m) && e3.lt(m))
              return s(this.toNumber() * e3.toNumber(), this.unsigned);
            var r3 = this.high >>> 16, o2 = 65535 & this.high, i2 = this.low >>> 16, a2 = 65535 & this.low, u2 = e3.high >>> 16, l2 = 65535 & e3.high, h2 = e3.low >>> 16, d2 = 65535 & e3.low, f2 = 0, y2 = 0, E2 = 0, v2 = 0;
            return E2 += (v2 += a2 * d2) >>> 16, y2 += (E2 += i2 * d2) >>> 16, E2 &= 65535, y2 += (E2 += a2 * h2) >>> 16, f2 += (y2 += o2 * d2) >>> 16, y2 &= 65535, f2 += (y2 += i2 * h2) >>> 16, y2 &= 65535, f2 += (y2 += a2 * l2) >>> 16, f2 += r3 * d2 + o2 * h2 + i2 * l2 + a2 * u2, c((E2 &= 65535) << 16 | (v2 &= 65535), (f2 &= 65535) << 16 | (y2 &= 65535), this.unsigned);
          }, I.mul = I.multiply, I.divide = function(e3) {
            if (n2(e3) || (e3 = p(e3)), e3.isZero())
              throw Error("division by zero");
            var r3, o2, i2;
            if (t2)
              return this.unsigned || this.high !== -2147483648 || e3.low !== -1 || e3.high !== -1 ? c((this.unsigned ? t2.div_u : t2.div_s)(this.low, this.high, e3.low, e3.high), t2.get_high(), this.unsigned) : this;
            if (this.isZero())
              return this.unsigned ? y : g;
            if (this.unsigned) {
              if (e3.unsigned || (e3 = e3.toUnsigned()), e3.gt(this))
                return y;
              if (e3.gt(this.shru(1)))
                return v;
              i2 = y;
            } else {
              if (this.eq(R))
                return e3.eq(E) || e3.eq(T) ? R : e3.eq(R) ? E : (r3 = this.shr(1).div(e3).shl(1)).eq(g) ? e3.isNegative() ? E : T : (o2 = this.sub(e3.mul(r3)), i2 = r3.add(o2.div(e3)));
              if (e3.eq(R))
                return this.unsigned ? y : g;
              if (this.isNegative())
                return e3.isNegative() ? this.neg().div(e3.neg()) : this.neg().div(e3).neg();
              if (e3.isNegative())
                return this.div(e3.neg()).neg();
              i2 = g;
            }
            for (o2 = this; o2.gte(e3); ) {
              r3 = Math.max(1, Math.floor(o2.toNumber() / e3.toNumber()));
              for (var a2 = Math.ceil(Math.log(r3) / Math.LN2), l2 = a2 <= 48 ? 1 : u(2, a2 - 48), h2 = s(r3), d2 = h2.mul(e3); d2.isNegative() || d2.gt(o2); )
                d2 = (h2 = s(r3 -= l2, this.unsigned)).mul(e3);
              h2.isZero() && (h2 = E), i2 = i2.add(h2), o2 = o2.sub(d2);
            }
            return i2;
          }, I.div = I.divide, I.modulo = function(e3) {
            return n2(e3) || (e3 = p(e3)), t2 ? c((this.unsigned ? t2.rem_u : t2.rem_s)(this.low, this.high, e3.low, e3.high), t2.get_high(), this.unsigned) : this.sub(this.div(e3).mul(e3));
          }, I.mod = I.modulo, I.rem = I.modulo, I.not = function() {
            return c(~this.low, ~this.high, this.unsigned);
          }, I.and = function(e3) {
            return n2(e3) || (e3 = p(e3)), c(this.low & e3.low, this.high & e3.high, this.unsigned);
          }, I.or = function(e3) {
            return n2(e3) || (e3 = p(e3)), c(this.low | e3.low, this.high | e3.high, this.unsigned);
          }, I.xor = function(e3) {
            return n2(e3) || (e3 = p(e3)), c(this.low ^ e3.low, this.high ^ e3.high, this.unsigned);
          }, I.shiftLeft = function(e3) {
            return n2(e3) && (e3 = e3.toInt()), (e3 &= 63) == 0 ? this : e3 < 32 ? c(this.low << e3, this.high << e3 | this.low >>> 32 - e3, this.unsigned) : c(0, this.low << e3 - 32, this.unsigned);
          }, I.shl = I.shiftLeft, I.shiftRight = function(e3) {
            return n2(e3) && (e3 = e3.toInt()), (e3 &= 63) == 0 ? this : e3 < 32 ? c(this.low >>> e3 | this.high << 32 - e3, this.high >> e3, this.unsigned) : c(this.high >> e3 - 32, this.high >= 0 ? 0 : -1, this.unsigned);
          }, I.shr = I.shiftRight, I.shiftRightUnsigned = function(e3) {
            if (n2(e3) && (e3 = e3.toInt()), (e3 &= 63) == 0)
              return this;
            var t3 = this.high;
            return e3 < 32 ? c(this.low >>> e3 | t3 << 32 - e3, t3 >>> e3, this.unsigned) : c(e3 === 32 ? t3 : t3 >>> e3 - 32, 0, this.unsigned);
          }, I.shru = I.shiftRightUnsigned, I.shr_u = I.shiftRightUnsigned, I.toSigned = function() {
            return this.unsigned ? c(this.low, this.high, false) : this;
          }, I.toUnsigned = function() {
            return this.unsigned ? this : c(this.low, this.high, true);
          }, I.toBytes = function(e3) {
            return e3 ? this.toBytesLE() : this.toBytesBE();
          }, I.toBytesLE = function() {
            var e3 = this.high, t3 = this.low;
            return [255 & t3, t3 >>> 8 & 255, t3 >>> 16 & 255, t3 >>> 24, 255 & e3, e3 >>> 8 & 255, e3 >>> 16 & 255, e3 >>> 24];
          }, I.toBytesBE = function() {
            var e3 = this.high, t3 = this.low;
            return [e3 >>> 24, e3 >>> 16 & 255, e3 >>> 8 & 255, 255 & e3, t3 >>> 24, t3 >>> 16 & 255, t3 >>> 8 & 255, 255 & t3];
          }, r2.fromBytes = function(e3, t3, n3) {
            return n3 ? r2.fromBytesLE(e3, t3) : r2.fromBytesBE(e3, t3);
          }, r2.fromBytesLE = function(e3, t3) {
            return new r2(e3[0] | e3[1] << 8 | e3[2] << 16 | e3[3] << 24, e3[4] | e3[5] << 8 | e3[6] << 16 | e3[7] << 24, t3);
          }, r2.fromBytesBE = function(e3, t3) {
            return new r2(e3[4] << 24 | e3[5] << 16 | e3[6] << 8 | e3[7], e3[0] << 24 | e3[1] << 16 | e3[2] << 8 | e3[3], t3);
          };
        }, 8365: function(e2, t2, r2) {
          e2.exports = o;
          var n2 = r2(9935);
          function o(e3, t3) {
            this.lo = e3 >>> 0, this.hi = t3 >>> 0;
          }
          var i = o.zero = new o(0, 0);
          i.toNumber = function() {
            return 0;
          }, i.zzEncode = i.zzDecode = function() {
            return this;
          }, i.length = function() {
            return 1;
          };
          var a = o.zeroHash = "\0\0\0\0\0\0\0\0";
          o.fromNumber = function(e3) {
            if (e3 === 0)
              return i;
            var t3 = e3 < 0;
            t3 && (e3 = -e3);
            var r3 = e3 >>> 0, n3 = (e3 - r3) / 4294967296 >>> 0;
            return t3 && (n3 = ~n3 >>> 0, r3 = ~r3 >>> 0, ++r3 > 4294967295 && (r3 = 0, ++n3 > 4294967295 && (n3 = 0))), new o(r3, n3);
          }, o.from = function(e3) {
            if (typeof e3 == "number")
              return o.fromNumber(e3);
            if (typeof e3 == "string" || e3 instanceof String) {
              if (!n2.Long)
                return o.fromNumber(parseInt(e3, 10));
              e3 = n2.Long.fromString(e3);
            }
            return e3.low || e3.high ? new o(e3.low >>> 0, e3.high >>> 0) : i;
          }, o.prototype.toNumber = function(e3) {
            if (!e3 && this.hi >>> 31) {
              var t3 = 1 + ~this.lo >>> 0, r3 = ~this.hi >>> 0;
              return t3 || (r3 = r3 + 1 >>> 0), -(t3 + 4294967296 * r3);
            }
            return this.lo + 4294967296 * this.hi;
          }, o.prototype.toLong = function(e3) {
            return n2.Long ? new n2.Long(0 | this.lo, 0 | this.hi, Boolean(e3)) : { low: 0 | this.lo, high: 0 | this.hi, unsigned: Boolean(e3) };
          };
          var s = String.prototype.charCodeAt;
          o.fromHash = function(e3) {
            return e3 === a ? i : new o((s.call(e3, 0) | s.call(e3, 1) << 8 | s.call(e3, 2) << 16 | s.call(e3, 3) << 24) >>> 0, (s.call(e3, 4) | s.call(e3, 5) << 8 | s.call(e3, 6) << 16 | s.call(e3, 7) << 24) >>> 0);
          }, o.prototype.toHash = function() {
            return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 & this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24);
          }, o.prototype.zzEncode = function() {
            var e3 = this.hi >> 31;
            return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ e3) >>> 0, this.lo = (this.lo << 1 ^ e3) >>> 0, this;
          }, o.prototype.zzDecode = function() {
            var e3 = -(1 & this.lo);
            return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ e3) >>> 0, this.hi = (this.hi >>> 1 ^ e3) >>> 0, this;
          }, o.prototype.length = function() {
            var e3 = this.lo, t3 = (this.lo >>> 28 | this.hi << 4) >>> 0, r3 = this.hi >>> 24;
            return r3 === 0 ? t3 === 0 ? e3 < 16384 ? e3 < 128 ? 1 : 2 : e3 < 2097152 ? 3 : 4 : t3 < 16384 ? t3 < 128 ? 5 : 6 : t3 < 2097152 ? 7 : 8 : r3 < 128 ? 9 : 10;
          };
        }, 1435: function(e2, t2, r2) {
          e2.exports = a;
          var n2, o, i = r2(9286);
          function a(e3, t3, r3, n3, a2, s) {
            if (i.call(this, e3, t3, n3, void 0, void 0, a2, s), !o.isString(r3))
              throw TypeError("keyType must be a string");
            this.keyType = r3, this.resolvedKeyType = null, this.map = true;
          }
          ((a.prototype = Object.create(i.prototype)).constructor = a).className = "MapField", a.fromJSON = function(e3, t3) {
            return new a(e3, t3.id, t3.keyType, t3.type, t3.options, t3.comment);
          }, a.prototype.toJSON = function(e3) {
            var t3 = !!e3 && Boolean(e3.keepComments);
            return o.toObject(["keyType", this.keyType, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", t3 ? this.comment : void 0]);
          }, a.prototype.resolve = function() {
            if (this.resolved)
              return this;
            if (n2.mapKey[this.keyType] === void 0)
              throw Error("invalid key type: " + this.keyType);
            return i.prototype.resolve.call(this);
          }, a.d = function(e3, t3, r3) {
            return typeof r3 == "function" ? r3 = o.decorateType(r3).name : r3 && typeof r3 == "object" && (r3 = o.decorateEnum(r3).name), function(n3, i2) {
              o.decorateType(n3.constructor).add(new a(i2, e3, t3, r3));
            };
          }, a._configure = function() {
            n2 = r2(4696), o = r2(9935);
          };
        }, 339: function(e2, t2, r2) {
          "use strict";
          var n2;
          function o(e3) {
            if (e3)
              for (var t3 = Object.keys(e3), r3 = 0; r3 < t3.length; ++r3)
                this[t3[r3]] = e3[t3[r3]];
          }
          e2.exports = o, o.create = function(e3) {
            return this.$type.create(e3);
          }, o.encode = function(e3, t3) {
            return arguments.length ? arguments.length == 1 ? this.$type.encode(arguments[0]) : this.$type.encode(arguments[0], arguments[1]) : this.$type.encode(this);
          }, o.encodeDelimited = function(e3, t3) {
            return this.$type.encodeDelimited(e3, t3);
          }, o.decode = function(e3) {
            return this.$type.decode(e3);
          }, o.decodeDelimited = function(e3) {
            return this.$type.decodeDelimited(e3);
          }, o.verify = function(e3) {
            return this.$type.verify(e3);
          }, o.fromObject = function(e3) {
            return this.$type.fromObject(e3);
          }, o.toObject = function(e3, t3) {
            return e3 = e3 || this, this.$type.toObject(e3, t3);
          }, o.prototype.toJSON = function() {
            return this.$type.toObject(this, n2.toJSONOptions);
          }, o.set = function(e3, t3) {
            o[e3] = t3;
          }, o.get = function(e3) {
            return o[e3];
          }, o._configure = function() {
            n2 = r2(9935);
          };
        }, 484: function(e2, t2, r2) {
          "use strict";
          e2.exports = i;
          var n2, o = r2(5998);
          function i(e3, t3, r3, i2, a, s, c, u) {
            if (n2.isObject(a) ? (c = a, a = s = void 0) : n2.isObject(s) && (c = s, s = void 0), t3 !== void 0 && !n2.isString(t3))
              throw TypeError("type must be a string");
            if (!n2.isString(r3))
              throw TypeError("requestType must be a string");
            if (!n2.isString(i2))
              throw TypeError("responseType must be a string");
            o.call(this, e3, c), this.type = t3 || "rpc", this.requestType = r3, this.requestStream = !!a || void 0, this.responseType = i2, this.responseStream = !!s || void 0, this.resolvedRequestType = null, this.resolvedResponseType = null, this.comment = u;
          }
          ((i.prototype = Object.create(o.prototype)).constructor = i).className = "Method", i.fromJSON = function(e3, t3) {
            return new i(e3, t3.type, t3.requestType, t3.responseType, t3.requestStream, t3.responseStream, t3.options, t3.comment);
          }, i.prototype.toJSON = function(e3) {
            var t3 = !!e3 && Boolean(e3.keepComments);
            return n2.toObject(["type", this.type !== "rpc" && this.type || void 0, "requestType", this.requestType, "requestStream", this.requestStream, "responseType", this.responseType, "responseStream", this.responseStream, "options", this.options, "comment", t3 ? this.comment : void 0]);
          }, i.prototype.resolve = function() {
            return this.resolved ? this : (this.resolvedRequestType = this.parent.lookupType(this.requestType), this.resolvedResponseType = this.parent.lookupType(this.responseType), o.prototype.resolve.call(this));
          }, i._configure = function() {
            n2 = r2(9935);
          };
        }, 2476: function(e2, t2, r2) {
          e2.exports = l;
          var n2, o, i, a, s, c = r2(5998);
          function u(e3, t3) {
            if (e3 && e3.length) {
              for (var r3 = {}, n3 = 0; n3 < e3.length; ++n3)
                r3[e3[n3].name] = e3[n3].toJSON(t3);
              return r3;
            }
          }
          function l(e3, t3) {
            c.call(this, e3, t3), this.nested = void 0, this._nestedArray = null;
          }
          function p(e3) {
            return e3._nestedArray = null, e3;
          }
          ((l.prototype = Object.create(c.prototype)).constructor = l).className = "Namespace", l.fromJSON = function(e3, t3) {
            return new l(e3, t3.options).addJSON(t3.nested);
          }, l.arrayToJSON = u, l.isReservedId = function(e3, t3) {
            if (e3) {
              for (var r3 = 0; r3 < e3.length; ++r3)
                if (typeof e3[r3] != "string" && e3[r3][0] <= t3 && e3[r3][1] >= t3)
                  return true;
            }
            return false;
          }, l.isReservedName = function(e3, t3) {
            if (e3) {
              for (var r3 = 0; r3 < e3.length; ++r3)
                if (e3[r3] === t3)
                  return true;
            }
            return false;
          }, Object.defineProperty(l.prototype, "nestedArray", { get: function() {
            return this._nestedArray || (this._nestedArray = i.toArray(this.nested));
          } }), l.prototype.toJSON = function(e3) {
            return i.toObject(["options", this.options, "nested", u(this.nestedArray, e3)]);
          }, l.prototype.addJSON = function(e3) {
            if (e3)
              for (var t3, r3 = Object.keys(e3), i2 = 0; i2 < r3.length; ++i2)
                t3 = e3[r3[i2]], this.add((t3.fields !== void 0 ? a.fromJSON : t3.values !== void 0 ? n2.fromJSON : t3.methods !== void 0 ? s.fromJSON : t3.id !== void 0 ? o.fromJSON : l.fromJSON)(r3[i2], t3));
            return this;
          }, l.prototype.get = function(e3) {
            return this.nested && this.nested[e3] || null;
          }, l.prototype.getEnum = function(e3) {
            if (this.nested && this.nested[e3] instanceof n2)
              return this.nested[e3].values;
            throw Error("no such enum: " + e3);
          }, l.prototype.add = function(e3) {
            if (!(e3 instanceof o && e3.extend !== void 0 || e3 instanceof a || e3 instanceof n2 || e3 instanceof s || e3 instanceof l))
              throw TypeError("object must be a valid nested object");
            if (this.nested) {
              var t3 = this.get(e3.name);
              if (t3) {
                if (!(t3 instanceof l && e3 instanceof l) || t3 instanceof a || t3 instanceof s)
                  throw Error("duplicate name '" + e3.name + "' in " + this);
                for (var r3 = t3.nestedArray, i2 = 0; i2 < r3.length; ++i2)
                  e3.add(r3[i2]);
                this.remove(t3), this.nested || (this.nested = {}), e3.setOptions(t3.options, true);
              }
            } else
              this.nested = {};
            return this.nested[e3.name] = e3, e3.onAdd(this), p(this);
          }, l.prototype.remove = function(e3) {
            if (!(e3 instanceof c))
              throw TypeError("object must be a ReflectionObject");
            if (e3.parent !== this)
              throw Error(e3 + " is not a member of " + this);
            return delete this.nested[e3.name], Object.keys(this.nested).length || (this.nested = void 0), e3.onRemove(this), p(this);
          }, l.prototype.define = function(e3, t3) {
            if (i.isString(e3))
              e3 = e3.split(".");
            else if (!Array.isArray(e3))
              throw TypeError("illegal path");
            if (e3 && e3.length && e3[0] === "")
              throw Error("path must be relative");
            for (var r3 = this; e3.length > 0; ) {
              var n3 = e3.shift();
              if (r3.nested && r3.nested[n3]) {
                if (!((r3 = r3.nested[n3]) instanceof l))
                  throw Error("path conflicts with non-namespace objects");
              } else
                r3.add(r3 = new l(n3));
            }
            return t3 && r3.addJSON(t3), r3;
          }, l.prototype.resolveAll = function() {
            for (var e3 = this.nestedArray, t3 = 0; t3 < e3.length; )
              e3[t3] instanceof l ? e3[t3++].resolveAll() : e3[t3++].resolve();
            return this.resolve();
          }, l.prototype.lookup = function(e3, t3, r3) {
            if (typeof t3 == "boolean" ? (r3 = t3, t3 = void 0) : t3 && !Array.isArray(t3) && (t3 = [t3]), i.isString(e3) && e3.length) {
              if (e3 === ".")
                return this.root;
              e3 = e3.split(".");
            } else if (!e3.length)
              return this;
            if (e3[0] === "")
              return this.root.lookup(e3.slice(1), t3);
            var n3 = this.get(e3[0]);
            if (n3) {
              if (e3.length === 1) {
                if (!t3 || t3.indexOf(n3.constructor) > -1)
                  return n3;
              } else if (n3 instanceof l && (n3 = n3.lookup(e3.slice(1), t3, true)))
                return n3;
            } else
              for (var o2 = 0; o2 < this.nestedArray.length; ++o2)
                if (this._nestedArray[o2] instanceof l && (n3 = this._nestedArray[o2].lookup(e3, t3, true)))
                  return n3;
            return this.parent === null || r3 ? null : this.parent.lookup(e3, t3);
          }, l.prototype.lookupType = function(e3) {
            var t3 = this.lookup(e3, [a]);
            if (!t3)
              throw Error("no such type: " + e3);
            return t3;
          }, l.prototype.lookupEnum = function(e3) {
            var t3 = this.lookup(e3, [n2]);
            if (!t3)
              throw Error("no such Enum '" + e3 + "' in " + this);
            return t3;
          }, l.prototype.lookupTypeOrEnum = function(e3) {
            var t3 = this.lookup(e3, [a, n2]);
            if (!t3)
              throw Error("no such Type or Enum '" + e3 + "' in " + this);
            return t3;
          }, l.prototype.lookupService = function(e3) {
            var t3 = this.lookup(e3, [s]);
            if (!t3)
              throw Error("no such Service '" + e3 + "' in " + this);
            return t3;
          }, l._configure = function() {
            n2 = r2(582), o = r2(9286), i = r2(9935), a = r2(192), s = r2(9447);
          };
        }, 5998: function(e2, t2, r2) {
          "use strict";
          var n2, o;
          function i(e3, t3) {
            if (!n2.isString(e3))
              throw TypeError("name must be a string");
            if (t3 && !n2.isObject(t3))
              throw TypeError("options must be an object");
            this.options = t3, this.name = e3, this.parent = null, this.resolved = false, this.comment = null, this.filename = null;
          }
          e2.exports = i, i.className = "ReflectionObject", Object.defineProperties(i.prototype, { root: { get: function() {
            for (var e3 = this; e3.parent !== null; )
              e3 = e3.parent;
            return e3;
          } }, fullName: { get: function() {
            for (var e3 = [this.name], t3 = this.parent; t3; )
              e3.unshift(t3.name), t3 = t3.parent;
            return e3.join(".");
          } } }), i.prototype.toJSON = function() {
            throw Error();
          }, i.prototype.onAdd = function(e3) {
            this.parent && this.parent !== e3 && this.parent.remove(this), this.parent = e3, this.resolved = false;
            var t3 = e3.root;
            t3 instanceof o && t3._handleAdd(this);
          }, i.prototype.onRemove = function(e3) {
            var t3 = e3.root;
            t3 instanceof o && t3._handleRemove(this), this.parent = null, this.resolved = false;
          }, i.prototype.resolve = function() {
            return this.resolved || this.root instanceof o && (this.resolved = true), this;
          }, i.prototype.getOption = function(e3) {
            if (this.options)
              return this.options[e3];
          }, i.prototype.setOption = function(e3, t3, r3) {
            return r3 && this.options && this.options[e3] !== void 0 || ((this.options || (this.options = {}))[e3] = t3), this;
          }, i.prototype.setOptions = function(e3, t3) {
            if (e3)
              for (var r3 = Object.keys(e3), n3 = 0; n3 < r3.length; ++n3)
                this.setOption(r3[n3], e3[r3[n3]], t3);
            return this;
          }, i.prototype.toString = function() {
            var e3 = this.constructor.className, t3 = this.fullName;
            return t3.length ? e3 + " " + t3 : e3;
          }, i._configure = function(e3) {
            o = r2(4685), n2 = r2(9935);
          };
        }, 9735: function(e2, t2, r2) {
          e2.exports = a;
          var n2, o, i = r2(5998);
          function a(e3, t3, r3, n3) {
            if (Array.isArray(t3) || (r3 = t3, t3 = void 0), i.call(this, e3, r3), t3 !== void 0 && !Array.isArray(t3))
              throw TypeError("fieldNames must be an Array");
            this.oneof = t3 || [], this.fieldsArray = [], this.comment = n3;
          }
          function s(e3) {
            if (e3.parent)
              for (var t3 = 0; t3 < e3.fieldsArray.length; ++t3)
                e3.fieldsArray[t3].parent || e3.parent.add(e3.fieldsArray[t3]);
          }
          ((a.prototype = Object.create(i.prototype)).constructor = a).className = "OneOf", a.fromJSON = function(e3, t3) {
            return new a(e3, t3.oneof, t3.options, t3.comment);
          }, a.prototype.toJSON = function(e3) {
            var t3 = !!e3 && Boolean(e3.keepComments);
            return o.toObject(["options", this.options, "oneof", this.oneof, "comment", t3 ? this.comment : void 0]);
          }, a.prototype.add = function(e3) {
            if (!(e3 instanceof n2))
              throw TypeError("field must be a Field");
            return e3.parent && e3.parent !== this.parent && e3.parent.remove(e3), this.oneof.push(e3.name), this.fieldsArray.push(e3), e3.partOf = this, s(this), this;
          }, a.prototype.remove = function(e3) {
            if (!(e3 instanceof n2))
              throw TypeError("field must be a Field");
            var t3 = this.fieldsArray.indexOf(e3);
            if (t3 < 0)
              throw Error(e3 + " is not a member of " + this);
            return this.fieldsArray.splice(t3, 1), (t3 = this.oneof.indexOf(e3.name)) > -1 && this.oneof.splice(t3, 1), e3.partOf = null, this;
          }, a.prototype.onAdd = function(e3) {
            i.prototype.onAdd.call(this, e3);
            for (var t3 = 0; t3 < this.oneof.length; ++t3) {
              var r3 = e3.get(this.oneof[t3]);
              r3 && !r3.partOf && (r3.partOf = this, this.fieldsArray.push(r3));
            }
            s(this);
          }, a.prototype.onRemove = function(e3) {
            for (var t3, r3 = 0; r3 < this.fieldsArray.length; ++r3)
              (t3 = this.fieldsArray[r3]).parent && t3.parent.remove(t3);
            i.prototype.onRemove.call(this, e3);
          }, a.d = function() {
            for (var e3 = new Array(arguments.length), t3 = 0; t3 < arguments.length; )
              e3[t3] = arguments[t3++];
            return function(t4, r3) {
              o.decorateType(t4.constructor).add(new a(r3, e3)), Object.defineProperty(t4, r3, { get: o.oneOfGetter(e3), set: o.oneOfSetter(e3) });
            };
          }, a._configure = function() {
            n2 = r2(9286), o = r2(9935);
          };
        }, 7845: function(e2, t2, r2) {
          "use strict";
          var n2, o, i, a, s, c, u, l, p, h, d;
          e2.exports = I, I.filename = null, I.defaults = { keepCase: false };
          var f = /^[1-9][0-9]*$/, m = /^-?[1-9][0-9]*$/, g = /^0[x][0-9a-fA-F]+$/, y = /^-?0[x][0-9a-fA-F]+$/, E = /^0[0-7]+$/, v = /^-?0[0-7]+$/, T = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/, _ = /^[a-zA-Z_][a-zA-Z_0-9]*$/, O = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)+$/, R = /^(?:\.[a-zA-Z][a-zA-Z_0-9]*)+$/;
          function I(e3, t3, r3) {
            t3 instanceof o || (r3 = t3, t3 = new o()), r3 || (r3 = I.defaults);
            var S, A, N, C, b, M = n2(e3, r3.alternateCommentMode || false), w = M.next, U = M.push, k = M.peek, P = M.skip, x = M.cmnt, L = true, j = false, D = t3, G = r3.keepCase ? function(e4) {
              return e4;
            } : d.camelCase;
            function B(e4, t4, r4) {
              var n3 = I.filename;
              return r4 || (I.filename = null), Error("illegal " + (t4 || "token") + " '" + e4 + "' (" + (n3 ? n3 + ", " : "") + "line " + M.line + ")");
            }
            function H() {
              var e4, t4 = [];
              do {
                if ((e4 = w()) !== '"' && e4 !== "'")
                  throw B(e4);
                t4.push(w()), P(e4), e4 = k();
              } while (e4 === '"' || e4 === "'");
              return t4.join("");
            }
            function F(e4) {
              var t4 = w();
              switch (t4) {
                case "'":
                case '"':
                  return U(t4), H();
                case "true":
                case "TRUE":
                  return true;
                case "false":
                case "FALSE":
                  return false;
              }
              try {
                return function(e5, t5) {
                  var r4 = 1;
                  switch (e5.charAt(0) === "-" && (r4 = -1, e5 = e5.substring(1)), e5) {
                    case "inf":
                    case "INF":
                    case "Inf":
                      return r4 * (1 / 0);
                    case "nan":
                    case "NAN":
                    case "Nan":
                    case "NaN":
                      return NaN;
                    case "0":
                      return 0;
                  }
                  if (f.test(e5))
                    return r4 * parseInt(e5, 10);
                  if (g.test(e5))
                    return r4 * parseInt(e5, 16);
                  if (E.test(e5))
                    return r4 * parseInt(e5, 8);
                  if (T.test(e5))
                    return r4 * parseFloat(e5);
                  throw B(e5, "number", true);
                }(t4);
              } catch (r4) {
                if (e4 && O.test(t4))
                  return t4;
                throw B(t4, "value");
              }
            }
            function W(e4, t4) {
              var r4, n3;
              do {
                !t4 || (r4 = k()) !== '"' && r4 !== "'" ? e4.push([n3 = q(w()), P("to", true) ? q(w()) : n3]) : e4.push(H());
              } while (P(",", true));
              P(";");
            }
            function q(e4, t4) {
              switch (e4) {
                case "max":
                case "MAX":
                case "Max":
                  return 536870911;
                case "0":
                  return 0;
              }
              if (!t4 && e4.charAt(0) === "-")
                throw B(e4, "id");
              if (m.test(e4))
                return parseInt(e4, 10);
              if (y.test(e4))
                return parseInt(e4, 16);
              if (v.test(e4))
                return parseInt(e4, 8);
              throw B(e4, "id");
            }
            function Z() {
              if (S !== void 0)
                throw B("package");
              if (S = w(), !O.test(S))
                throw B(S, "name");
              D = D.define(S), P(";");
            }
            function K() {
              var e4, t4 = k();
              switch (t4) {
                case "weak":
                  e4 = N || (N = []), w();
                  break;
                case "public":
                  w();
                default:
                  e4 = A || (A = []);
              }
              t4 = H(), P(";"), e4.push(t4);
            }
            function V() {
              if (P("="), C = H(), !(j = C === "proto3") && C !== "proto2")
                throw B(C, "syntax");
              P(";");
            }
            function z(e4, t4) {
              switch (t4) {
                case "option":
                  return Y(e4, t4), P(";"), true;
                case "message":
                  return function(e5, t5) {
                    if (!_.test(t5 = w()))
                      throw B(t5, "type name");
                    var r4 = new i(t5);
                    J(r4, function(e6) {
                      if (!z(r4, e6))
                        switch (e6) {
                          case "map":
                            !function(e7) {
                              P("<");
                              var t6 = w();
                              if (h.mapKey[t6] === void 0)
                                throw B(t6, "type");
                              P(",");
                              var r5 = w();
                              if (!O.test(r5))
                                throw B(r5, "type");
                              P(">");
                              var n3 = w();
                              if (!_.test(n3))
                                throw B(n3, "name");
                              P("=");
                              var o2 = new s(G(n3), q(w()), t6, r5);
                              J(o2, function(e8) {
                                if (e8 !== "option")
                                  throw B(e8);
                                Y(o2, e8), P(";");
                              }, function() {
                                ee(o2);
                              }), e7.add(o2);
                            }(r4);
                            break;
                          case "required":
                          case "optional":
                          case "repeated":
                            X(r4, e6);
                            break;
                          case "oneof":
                            !function(e7, t6) {
                              if (!_.test(t6 = w()))
                                throw B(t6, "name");
                              var r5 = new c(G(t6));
                              J(r5, function(e8) {
                                e8 === "option" ? (Y(r5, e8), P(";")) : (U(e8), X(r5, "optional"));
                              }), e7.add(r5);
                            }(r4, e6);
                            break;
                          case "extensions":
                            W(r4.extensions || (r4.extensions = []));
                            break;
                          case "reserved":
                            W(r4.reserved || (r4.reserved = []), true);
                            break;
                          default:
                            if (!j || !O.test(e6))
                              throw B(e6);
                            U(e6), X(r4, "optional");
                        }
                    }), e5.add(r4);
                  }(e4, t4), true;
                case "enum":
                  return function(e5, t5) {
                    if (!_.test(t5 = w()))
                      throw B(t5, "name");
                    var r4 = new u(t5);
                    J(r4, function(e6) {
                      switch (e6) {
                        case "option":
                          Y(r4, e6), P(";");
                          break;
                        case "reserved":
                          W(r4.reserved || (r4.reserved = []), true);
                          break;
                        default:
                          !function(e7, t6) {
                            if (!_.test(t6))
                              throw B(t6, "name");
                            P("=");
                            var r5 = q(w(), true), n3 = {};
                            J(n3, function(e8) {
                              if (e8 !== "option")
                                throw B(e8);
                              Y(n3, e8), P(";");
                            }, function() {
                              ee(n3);
                            }), e7.add(t6, r5, n3.comment);
                          }(r4, e6);
                      }
                    }), e5.add(r4);
                  }(e4, t4), true;
                case "service":
                  return function(e5, t5) {
                    if (!_.test(t5 = w()))
                      throw B(t5, "service name");
                    var r4 = new l(t5);
                    J(r4, function(e6) {
                      if (!z(r4, e6)) {
                        if (e6 !== "rpc")
                          throw B(e6);
                        !function(e7, t6) {
                          var r5 = t6;
                          if (!_.test(t6 = w()))
                            throw B(t6, "name");
                          var n3, o2, i2, a2, s2 = t6;
                          if (P("("), P("stream", true) && (o2 = true), !O.test(t6 = w()))
                            throw B(t6);
                          if (n3 = t6, P(")"), P("returns"), P("("), P("stream", true) && (a2 = true), !O.test(t6 = w()))
                            throw B(t6);
                          i2 = t6, P(")");
                          var c2 = new p(s2, r5, n3, i2, o2, a2);
                          J(c2, function(e8) {
                            if (e8 !== "option")
                              throw B(e8);
                            Y(c2, e8), P(";");
                          }), e7.add(c2);
                        }(r4, e6);
                      }
                    }), e5.add(r4);
                  }(e4, t4), true;
                case "extend":
                  return function(e5, t5) {
                    if (!O.test(t5 = w()))
                      throw B(t5, "reference");
                    var r4 = t5;
                    J(null, function(t6) {
                      switch (t6) {
                        case "required":
                        case "repeated":
                        case "optional":
                          X(e5, t6, r4);
                          break;
                        default:
                          if (!j || !O.test(t6))
                            throw B(t6);
                          U(t6), X(e5, "optional", r4);
                      }
                    });
                  }(e4, t4), true;
              }
              return false;
            }
            function J(e4, t4, r4) {
              var n3 = M.line;
              if (e4 && (e4.comment = x(), e4.filename = I.filename), P("{", true)) {
                for (var o2; (o2 = w()) !== "}"; )
                  t4(o2);
                P(";", true);
              } else
                r4 && r4(), P(";"), e4 && typeof e4.comment != "string" && (e4.comment = x(n3));
            }
            function X(e4, t4, r4) {
              var n3 = w();
              if (n3 !== "group") {
                if (!O.test(n3))
                  throw B(n3, "type");
                var o2 = w();
                if (!_.test(o2))
                  throw B(o2, "name");
                o2 = G(o2), P("=");
                var s2 = new a(o2, q(w()), n3, t4, r4);
                J(s2, function(e5) {
                  if (e5 !== "option")
                    throw B(e5);
                  Y(s2, e5), P(";");
                }, function() {
                  ee(s2);
                }), e4.add(s2), j || !s2.repeated || h.packed[n3] === void 0 && h.basic[n3] !== void 0 || s2.setOption("packed", false, true);
              } else
                !function(e5, t5) {
                  var r5 = w();
                  if (!_.test(r5))
                    throw B(r5, "name");
                  var n4 = d.lcFirst(r5);
                  r5 === n4 && (r5 = d.ucFirst(r5)), P("=");
                  var o3 = q(w()), s3 = new i(r5);
                  s3.group = true;
                  var c2 = new a(n4, o3, r5, t5);
                  c2.filename = I.filename, J(s3, function(e6) {
                    switch (e6) {
                      case "option":
                        Y(s3, e6), P(";");
                        break;
                      case "required":
                      case "optional":
                      case "repeated":
                        X(s3, e6);
                        break;
                      default:
                        throw B(e6);
                    }
                  }), e5.add(s3).add(c2);
                }(e4, t4);
            }
            function Y(e4, t4) {
              var r4 = P("(", true);
              if (!O.test(t4 = w()))
                throw B(t4, "name");
              var n3 = t4;
              r4 && (P(")"), n3 = "(" + n3 + ")", t4 = k(), R.test(t4) && (n3 += t4, w())), P("="), $2(e4, n3);
            }
            function $2(e4, t4) {
              if (P("{", true))
                do {
                  if (!_.test(b = w()))
                    throw B(b, "name");
                  k() === "{" ? $2(e4, t4 + "." + b) : (P(":"), k() === "{" ? $2(e4, t4 + "." + b) : Q(e4, t4 + "." + b, F(true)));
                } while (!P("}", true));
              else
                Q(e4, t4, F(true));
            }
            function Q(e4, t4, r4) {
              e4.setOption && e4.setOption(t4, r4);
            }
            function ee(e4) {
              if (P("[", true)) {
                do {
                  Y(e4, "option");
                } while (P(",", true));
                P("]");
              }
              return e4;
            }
            for (; (b = w()) !== null; )
              switch (b) {
                case "package":
                  if (!L)
                    throw B(b);
                  Z();
                  break;
                case "import":
                  if (!L)
                    throw B(b);
                  K();
                  break;
                case "syntax":
                  if (!L)
                    throw B(b);
                  V();
                  break;
                case "option":
                  if (!L)
                    throw B(b);
                  Y(D, b), P(";");
                  break;
                default:
                  if (z(D, b)) {
                    L = false;
                    continue;
                  }
                  throw B(b);
              }
            return I.filename = null, { package: S, imports: A, weakImports: N, syntax: C, root: t3 };
          }
          I._configure = function() {
            n2 = r2(8869), o = r2(4685), i = r2(192), a = r2(9286), s = r2(1435), c = r2(9735), u = r2(582), l = r2(9447), p = r2(484), h = r2(4696), d = r2(9935);
          };
        }, 1444: function(e2) {
          var t2 = e2.exports, r2 = t2.isAbsolute = function(e3) {
            return /^(?:\/|\w+:)/.test(e3);
          }, n2 = t2.normalize = function(e3) {
            var t3 = (e3 = e3.replace(/\\/g, "/").replace(/\/{2,}/g, "/")).split("/"), n3 = r2(e3), o = "";
            n3 && (o = t3.shift() + "/");
            for (var i = 0; i < t3.length; )
              t3[i] === ".." ? i > 0 && t3[i - 1] !== ".." ? t3.splice(--i, 2) : n3 ? t3.splice(i, 1) : ++i : t3[i] === "." ? t3.splice(i, 1) : ++i;
            return o + t3.join("/");
          };
          t2.resolve = function(e3, t3, o) {
            return o || (t3 = n2(t3)), r2(t3) ? t3 : (o || (e3 = n2(e3)), (e3 = e3.replace(/(?:\/|^)[^/]+$/, "")).length ? n2(e3 + "/" + t3) : t3);
          };
        }, 8997: function(e2) {
          e2.exports = function(e3, t2, r2) {
            var n2 = r2 || 8192, o = n2 >>> 1, i = null, a = n2;
            return function(r3) {
              if (r3 < 1 || r3 > o)
                return e3(r3);
              a + r3 > n2 && (i = e3(n2), a = 0);
              var s = t2.call(i, a, a += r3);
              return 7 & a && (a = 1 + (7 | a)), s;
            };
          };
        }, 8494: function(e2, t2, r2) {
          e2.exports = s;
          var n2, o, i = r2(9935);
          function a(e3, t3) {
            return RangeError("index out of range: " + e3.pos + " + " + (t3 || 1) + " > " + e3.len);
          }
          function s(e3) {
            this.buf = e3, this.pos = 0, this.len = e3.length;
          }
          var c, u = typeof Uint8Array != "undefined" ? function(e3) {
            return e3 instanceof Uint8Array || Array.isArray(e3) ? new s(e3) : (typeof ArrayBuffer != "undefined" && e3 instanceof ArrayBuffer && console.warn(""), new s(new Uint8Array(e3)));
          } : function(e3) {
            if (Array.isArray(e3))
              return new s(e3);
          };
          function l() {
            var e3 = new n2(0, 0), t3 = 0;
            if (!(this.len - this.pos > 4)) {
              for (; t3 < 3; ++t3) {
                if (this.pos >= this.len)
                  throw a(this);
                if (e3.lo = (e3.lo | (127 & this.buf[this.pos]) << 7 * t3) >>> 0, this.buf[this.pos++] < 128)
                  return e3;
              }
              return e3.lo = (e3.lo | (127 & this.buf[this.pos++]) << 7 * t3) >>> 0, e3;
            }
            for (; t3 < 4; ++t3)
              if (e3.lo = (e3.lo | (127 & this.buf[this.pos]) << 7 * t3) >>> 0, this.buf[this.pos++] < 128)
                return e3;
            if (e3.lo = (e3.lo | (127 & this.buf[this.pos]) << 28) >>> 0, e3.hi = (e3.hi | (127 & this.buf[this.pos]) >> 4) >>> 0, this.buf[this.pos++] < 128)
              return e3;
            if (t3 = 0, this.len - this.pos > 4) {
              for (; t3 < 5; ++t3)
                if (e3.hi = (e3.hi | (127 & this.buf[this.pos]) << 7 * t3 + 3) >>> 0, this.buf[this.pos++] < 128)
                  return e3;
            } else
              for (; t3 < 5; ++t3) {
                if (this.pos >= this.len)
                  throw a(this);
                if (e3.hi = (e3.hi | (127 & this.buf[this.pos]) << 7 * t3 + 3) >>> 0, this.buf[this.pos++] < 128)
                  return e3;
              }
            throw Error("invalid varint encoding");
          }
          function p(e3, t3) {
            return (e3[t3 - 4] | e3[t3 - 3] << 8 | e3[t3 - 2] << 16 | e3[t3 - 1] << 24) >>> 0;
          }
          function h() {
            if (this.pos + 8 > this.len)
              throw a(this, 8);
            return new n2(p(this.buf, this.pos += 4), p(this.buf, this.pos += 4));
          }
          s.create = i.Buffer ? function(e3) {
            return (s.create = function(e4) {
              return i.Buffer.isBuffer(e4) ? new (void 0)(e4) : u(e4);
            })(e3);
          } : u, s.prototype._slice = i.Array.prototype.subarray || i.Array.prototype.slice, s.prototype.uint32 = (c = 4294967295, function() {
            if (c = (127 & this.buf[this.pos]) >>> 0, this.buf[this.pos++] < 128)
              return c;
            if (c = (c | (127 & this.buf[this.pos]) << 7) >>> 0, this.buf[this.pos++] < 128)
              return c;
            if (c = (c | (127 & this.buf[this.pos]) << 14) >>> 0, this.buf[this.pos++] < 128)
              return c;
            if (c = (c | (127 & this.buf[this.pos]) << 21) >>> 0, this.buf[this.pos++] < 128)
              return c;
            if (c = (c | (15 & this.buf[this.pos]) << 28) >>> 0, this.buf[this.pos++] < 128)
              return c;
            if ((this.pos += 5) > this.len)
              throw this.pos = this.len, a(this, 10);
            return c;
          }), s.prototype.int32 = function() {
            return 0 | this.uint32();
          }, s.prototype.sint32 = function() {
            var e3 = this.uint32();
            return e3 >>> 1 ^ -(1 & e3) | 0;
          }, s.prototype.bool = function() {
            return this.uint32() !== 0;
          }, s.prototype.fixed32 = function() {
            if (this.pos + 4 > this.len)
              throw a(this, 4);
            return p(this.buf, this.pos += 4);
          }, s.prototype.sfixed32 = function() {
            if (this.pos + 4 > this.len)
              throw a(this, 4);
            return 0 | p(this.buf, this.pos += 4);
          }, s.prototype.float = function() {
            if (this.pos + 4 > this.len)
              throw a(this, 4);
            var e3 = i.float.readFloatLE(this.buf, this.pos);
            return this.pos += 4, e3;
          }, s.prototype.double = function() {
            if (this.pos + 8 > this.len)
              throw a(this, 4);
            var e3 = i.float.readDoubleLE(this.buf, this.pos);
            return this.pos += 8, e3;
          }, s.prototype.bytes = function() {
            var e3 = this.uint32(), t3 = this.pos, r3 = this.pos + e3;
            if (r3 > this.len)
              throw a(this, e3);
            return this.pos += e3, Array.isArray(this.buf) ? this.buf.slice(t3, r3) : t3 === r3 ? new this.buf.constructor(0) : this._slice.call(this.buf, t3, r3);
          }, s.prototype.string = function() {
            var e3 = this.bytes();
            return o.read(e3, 0, e3.length);
          }, s.prototype.skip = function(e3) {
            if (typeof e3 == "number") {
              if (this.pos + e3 > this.len)
                throw a(this, e3);
              this.pos += e3;
            } else
              do {
                if (this.pos >= this.len)
                  throw a(this);
              } while (128 & this.buf[this.pos++]);
            return this;
          }, s.prototype.skipType = function(e3) {
            switch (e3) {
              case 0:
                this.skip();
                break;
              case 1:
                this.skip(8);
                break;
              case 2:
                this.skip(this.uint32());
                break;
              case 3:
                for (; (e3 = 7 & this.uint32()) != 4; )
                  this.skipType(e3);
                break;
              case 5:
                this.skip(4);
                break;
              default:
                throw Error("invalid wire type " + e3 + " at offset " + this.pos);
            }
            return this;
          }, s._configure = function() {
            n2 = r2(8365), o = r2(1498);
            var e3 = i.Long ? "toLong" : "toNumber";
            i.merge(s.prototype, { int64: function() {
              return l.call(this)[e3](false);
            }, uint64: function() {
              return l.call(this)[e3](true);
            }, sint64: function() {
              return l.call(this).zzDecode()[e3](false);
            }, fixed64: function() {
              return h.call(this)[e3](true);
            }, sfixed64: function() {
              return h.call(this)[e3](false);
            } });
          };
        }, 4685: function(e2, t2, r2) {
          e2.exports = p;
          var n2 = r2(2476);
          ((p.prototype = Object.create(n2.prototype)).constructor = p).className = "Root";
          var o, i, a, s = r2(9286), c = r2(582), u = r2(9735), l = r2(9935);
          function p(e3) {
            n2.call(this, "", e3), this.deferred = [], this.files = [], this.names = [];
          }
          function h() {
          }
          p.fromJSON = function(e3, t3) {
            return e3 = typeof e3 == "string" ? JSON.parse(e3) : e3, t3 || (t3 = new p()), e3.options && t3.setOptions(e3.options), t3.addJSON(e3.nested);
          }, p.prototype.resolvePath = l.path.resolve, p.prototype.parseFromPbString = function e3(t3, r3, n3) {
            typeof r3 == "function" && (n3 = r3, r3 = void 0);
            var o2 = this;
            if (!n3)
              return l.asPromise(e3, o2, t3, r3);
            var s2 = null;
            if (typeof t3 == "string")
              s2 = JSON.parse(t3);
            else {
              if (typeof t3 != "object")
                return void console.log("pb\u683C\u5F0F\u8F6C\u5316\u5931\u8D25");
              s2 = t3;
            }
            function c2(e4, t4) {
              if (n3) {
                var r4 = n3;
                n3 = null, r4(e4, t4);
              }
            }
            function u2(e4, t4) {
              try {
                if (l.isString(t4) && t4.charAt(0) === "{" && (t4 = JSON.parse(t4)), l.isString(t4)) {
                  i.filename = e4;
                  var n4, a2 = i(t4, o2, r3), s3 = 0;
                  if (a2.imports)
                    for (; s3 < a2.imports.length; ++s3)
                      p2(n4 = a2.imports[s3]);
                  if (a2.weakImports) {
                    for (s3 = 0; s3 < a2.weakImports.length; ++s3)
                      n4 = a2.weakImports[s3];
                    p2(n4);
                  }
                } else
                  o2.setOptions(t4.options).addJSON(t4.nested);
              } catch (e5) {
                c2(e5);
              }
              c2(null, o2);
            }
            function p2(e4) {
              o2.names.indexOf(e4) > -1 || (o2.names.push(e4), e4 in a && u2(e4, a[e4]));
            }
            u2(s2.name, s2.pbJsonStr);
          }, p.prototype.load = function e3(t3, r3, n3) {
            typeof r3 == "function" && (n3 = r3, r3 = void 0);
            var o2 = this;
            if (!n3)
              return l.asPromise(e3, o2, t3, r3);
            var s2 = n3 === h;
            function c2(e4, t4) {
              if (n3) {
                var r4 = n3;
                if (n3 = null, s2)
                  throw e4;
                r4(e4, t4);
              }
            }
            function u2(e4, t4) {
              try {
                if (l.isString(t4) && t4.charAt(0) === "{" && (t4 = JSON.parse(t4)), l.isString(t4)) {
                  i.filename = e4;
                  var n4, a2 = i(t4, o2, r3), u3 = 0;
                  if (a2.imports)
                    for (; u3 < a2.imports.length; ++u3)
                      (n4 = o2.resolvePath(e4, a2.imports[u3])) && p2(n4);
                  if (a2.weakImports)
                    for (u3 = 0; u3 < a2.weakImports.length; ++u3)
                      (n4 = o2.resolvePath(e4, a2.weakImports[u3])) && p2(n4, true);
                } else
                  o2.setOptions(t4.options).addJSON(t4.nested);
              } catch (e5) {
                c2(e5);
              }
              s2 || d2 || c2(null, o2);
            }
            function p2(e4, t4) {
              var r4 = e4.lastIndexOf("google/protobuf/");
              if (r4 > -1) {
                var i2 = e4.substring(r4);
                i2 in a && (e4 = i2);
              }
              if (!(o2.files.indexOf(e4) > -1))
                if (o2.files.push(e4), e4 in a)
                  s2 ? u2(e4, a[e4]) : (++d2, setTimeout(function() {
                    --d2, u2(e4, a[e4]);
                  }));
                else if (s2) {
                  var p3;
                  try {
                    p3 = l.fs.readFileSync(e4).toString("utf8");
                  } catch (e5) {
                    return void (t4 || c2(e5));
                  }
                  u2(e4, p3);
                } else
                  ++d2, l.fetch(e4, function(r5, i3) {
                    --d2, n3 && (r5 ? t4 ? d2 || c2(null, o2) : c2(r5) : u2(e4, i3));
                  });
            }
            var d2 = 0;
            l.isString(t3) && (t3 = [t3]);
            for (var f2, m = 0; m < t3.length; ++m)
              (f2 = o2.resolvePath("", t3[m])) && p2(f2);
            if (s2)
              return o2;
            d2 || c2(null, o2);
          }, p.prototype.loadSync = function(e3, t3) {
            if (!l.isNode)
              throw Error("not supported");
            return this.load(e3, t3, h);
          }, p.prototype.resolveAll = function() {
            if (this.deferred.length)
              throw Error("unresolvable extensions: " + this.deferred.map(function(e3) {
                return "'extend " + e3.extend + "' in " + e3.parent.fullName;
              }).join(", "));
            return n2.prototype.resolveAll.call(this);
          };
          var d = /^[A-Z]/;
          function f(e3, t3) {
            var r3 = t3.parent.lookup(t3.extend);
            if (r3) {
              var n3 = new s(t3.fullName, t3.id, t3.type, t3.rule, void 0, t3.options);
              return n3.declaringField = t3, t3.extensionField = n3, r3.add(n3), true;
            }
            return false;
          }
          p.prototype._handleAdd = function(e3) {
            if (e3 instanceof s)
              e3.extend === void 0 || e3.extensionField || f(0, e3) || this.deferred.push(e3);
            else if (e3 instanceof c)
              d.test(e3.name) && (e3.parent[e3.name] = e3.values);
            else if (!(e3 instanceof u)) {
              if (e3 instanceof o)
                for (var t3 = 0; t3 < this.deferred.length; )
                  f(0, this.deferred[t3]) ? this.deferred.splice(t3, 1) : ++t3;
              for (var r3 = 0; r3 < e3.nestedArray.length; ++r3)
                this._handleAdd(e3._nestedArray[r3]);
              d.test(e3.name) && (e3.parent[e3.name] = e3);
            }
          }, p.prototype._handleRemove = function(e3) {
            if (e3 instanceof s) {
              if (e3.extend !== void 0)
                if (e3.extensionField)
                  e3.extensionField.parent.remove(e3.extensionField), e3.extensionField = null;
                else {
                  var t3 = this.deferred.indexOf(e3);
                  t3 > -1 && this.deferred.splice(t3, 1);
                }
            } else if (e3 instanceof c)
              d.test(e3.name) && delete e3.parent[e3.name];
            else if (e3 instanceof n2) {
              for (var r3 = 0; r3 < e3.nestedArray.length; ++r3)
                this._handleRemove(e3._nestedArray[r3]);
              d.test(e3.name) && delete e3.parent[e3.name];
            }
          }, p._configure = function() {
            o = r2(192), i = r2(7845), a = r2(3072), s = r2(9286), c = r2(582), u = r2(9735), l = r2(9935);
          };
        }, 889: function(e2) {
          e2.exports = {};
        }, 7325: function(e2, t2, r2) {
          "use strict";
          e2.exports = o;
          var n2 = r2(9935);
          function o(e3, t3, r3) {
            if (typeof e3 != "function")
              throw TypeError("rpcImpl must be a function");
            n2.EventEmitter.call(this), this.rpcImpl = e3, this.requestDelimited = Boolean(t3), this.responseDelimited = Boolean(r3);
          }
          (o.prototype = Object.create(n2.EventEmitter.prototype)).constructor = o, o.prototype.rpcCall = function e3(t3, r3, o2, i, a) {
            if (!i)
              throw TypeError("request must be specified");
            var s = this;
            if (!a)
              return n2.asPromise(e3, s, t3, r3, o2, i);
            if (s.rpcImpl)
              try {
                return s.rpcImpl(t3, r3[s.requestDelimited ? "encodeDelimited" : "encode"](i).finish(), function(e4, r4) {
                  if (e4)
                    return s.emit("error", e4, t3), a(e4);
                  if (r4 !== null) {
                    if (!(r4 instanceof o2))
                      try {
                        r4 = o2[s.responseDelimited ? "decodeDelimited" : "decode"](r4);
                      } catch (e5) {
                        return s.emit("error", e5, t3), a(e5);
                      }
                    return s.emit("data", r4, t3), a(null, r4);
                  }
                  s.end(true);
                });
              } catch (e4) {
                return s.emit("error", e4, t3), void setTimeout(function() {
                  a(e4);
                }, 0);
              }
            else
              setTimeout(function() {
                a(Error("already ended"));
              }, 0);
          }, o.prototype.end = function(e3) {
            return this.rpcImpl && (e3 || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
          };
        }, 9447: function(e2, t2, r2) {
          "use strict";
          e2.exports = s;
          var n2, o, i, a = r2(2476);
          function s(e3, t3) {
            a.call(this, e3, t3), this.methods = {}, this._methodsArray = null;
          }
          function c(e3) {
            return e3._methodsArray = null, e3;
          }
          ((s.prototype = Object.create(a.prototype)).constructor = s).className = "Service", s.fromJSON = function(e3, t3) {
            var r3 = new s(e3, t3.options);
            if (t3.methods)
              for (var o2 = Object.keys(t3.methods), i2 = 0; i2 < o2.length; ++i2)
                r3.add(n2.fromJSON(o2[i2], t3.methods[o2[i2]]));
            return t3.nested && r3.addJSON(t3.nested), r3.comment = t3.comment, r3;
          }, s.prototype.toJSON = function(e3) {
            var t3 = a.prototype.toJSON.call(this, e3), r3 = !!e3 && Boolean(e3.keepComments);
            return o.toObject(["options", t3 && t3.options || void 0, "methods", a.arrayToJSON(this.methodsArray, e3) || {}, "nested", t3 && t3.nested || void 0, "comment", r3 ? this.comment : void 0]);
          }, Object.defineProperty(s.prototype, "methodsArray", { get: function() {
            return this._methodsArray || (this._methodsArray = o.toArray(this.methods));
          } }), s.prototype.get = function(e3) {
            return this.methods[e3] || a.prototype.get.call(this, e3);
          }, s.prototype.resolveAll = function() {
            for (var e3 = this.methodsArray, t3 = 0; t3 < e3.length; ++t3)
              e3[t3].resolve();
            return a.prototype.resolve.call(this);
          }, s.prototype.add = function(e3) {
            if (this.get(e3.name))
              throw Error("duplicate name '" + e3.name + "' in " + this);
            return e3 instanceof n2 ? (this.methods[e3.name] = e3, e3.parent = this, c(this)) : a.prototype.add.call(this, e3);
          }, s.prototype.remove = function(e3) {
            if (e3 instanceof n2) {
              if (this.methods[e3.name] !== e3)
                throw Error(e3 + " is not a member of " + this);
              return delete this.methods[e3.name], e3.parent = null, c(this);
            }
            return a.prototype.remove.call(this, e3);
          }, s.prototype.create = function(e3, t3, r3) {
            for (var n3, a2 = new i.Service(e3, t3, r3), s2 = 0; s2 < this.methodsArray.length; ++s2) {
              var c2 = o.lcFirst((n3 = this._methodsArray[s2]).resolve().name).replace(/[^$\w_]/g, "");
              a2[c2] = o.codegen(["r", "c"], o.isReserved(c2) ? c2 + "_" : c2)("return this.rpcCall(m,q,s,r,c)")({ m: n3, q: n3.resolvedRequestType.ctor, s: n3.resolvedResponseType.ctor });
            }
            return a2;
          }, s._configure = function() {
            n2 = r2(484), o = r2(9935), i = r2(7325);
          };
        }, 8869: function(e2) {
          e2.exports = p;
          var t2 = /[\s{}=;:[\],'"()<>]/g, r2 = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g, n2 = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g, o = /^ *[*/]+ */, i = /^\s*\*?\/*/, a = /\n/g, s = /\s/, c = /\\(.?)/g, u = { 0: "\0", r: "\r", n: "\n", t: "	" };
          function l(e3) {
            return e3.replace(c, function(e4, t3) {
              switch (t3) {
                case "\\":
                case "":
                  return t3;
                default:
                  return u[t3] || "";
              }
            });
          }
          function p(e3, c2) {
            e3 = e3.toString();
            var u2 = 0, p2 = e3.length, h = 1, d = null, f = null, m = 0, g = false, y = [], E = null;
            function v(e4) {
              return Error("illegal " + e4 + " (line " + h + ")");
            }
            function T(t3) {
              return e3.charAt(t3);
            }
            function _(t3, r3) {
              d = e3.charAt(t3++), m = h, g = false;
              var n3, s2 = t3 - (c2 ? 2 : 3);
              do {
                if (--s2 < 0 || (n3 = e3.charAt(s2)) === "\n") {
                  g = true;
                  break;
                }
              } while (n3 === " " || n3 === "	");
              for (var u3 = e3.substring(t3, r3).split(a), l2 = 0; l2 < u3.length; ++l2)
                u3[l2] = u3[l2].replace(c2 ? i : o, "").trim();
              f = u3.join("\n").trim();
            }
            function O(t3) {
              var r3 = R(t3), n3 = e3.substring(t3, r3);
              return /^\s*\/{1,2}/.test(n3);
            }
            function R(e4) {
              for (var t3 = e4; t3 < p2 && T(t3) !== "\n"; )
                t3++;
              return t3;
            }
            function I() {
              if (y.length > 0)
                return y.shift();
              if (E)
                return function() {
                  var t3 = E === "'" ? n2 : r2;
                  t3.lastIndex = u2 - 1;
                  var o3 = t3.exec(e3);
                  if (!o3)
                    throw v("string");
                  return u2 = t3.lastIndex, S(E), E = null, l(o3[1]);
                }();
              var o2, i2, a2, d2, f2;
              do {
                if (u2 === p2)
                  return null;
                for (o2 = false; s.test(a2 = T(u2)); )
                  if (a2 === "\n" && ++h, ++u2 === p2)
                    return null;
                if (T(u2) === "/") {
                  if (++u2 === p2)
                    throw v("comment");
                  if (T(u2) === "/")
                    if (c2) {
                      if (d2 = u2, f2 = false, O(u2)) {
                        f2 = true;
                        do {
                          if ((u2 = R(u2)) === p2)
                            break;
                          u2++;
                        } while (O(u2));
                      } else
                        u2 = Math.min(p2, R(u2) + 1);
                      f2 && _(d2, u2), h++, o2 = true;
                    } else {
                      for (f2 = T(d2 = u2 + 1) === "/"; T(++u2) !== "\n"; )
                        if (u2 === p2)
                          return null;
                      ++u2, f2 && _(d2, u2 - 1), ++h, o2 = true;
                    }
                  else {
                    if ((a2 = T(u2)) !== "*")
                      return "/";
                    d2 = u2 + 1, f2 = c2 || T(d2) === "*";
                    do {
                      if (a2 === "\n" && ++h, ++u2 === p2)
                        throw v("comment");
                      i2 = a2, a2 = T(u2);
                    } while (i2 !== "*" || a2 !== "/");
                    ++u2, f2 && _(d2, u2 - 2), o2 = true;
                  }
                }
              } while (o2);
              var m2 = u2;
              if (t2.lastIndex = 0, !t2.test(T(m2++)))
                for (; m2 < p2 && !t2.test(T(m2)); )
                  ++m2;
              var g2 = e3.substring(u2, u2 = m2);
              return g2 !== '"' && g2 !== "'" || (E = g2), g2;
            }
            function S(e4) {
              y.push(e4);
            }
            function A() {
              if (!y.length) {
                var e4 = I();
                if (e4 === null)
                  return null;
                S(e4);
              }
              return y[0];
            }
            return Object.defineProperty({ next: I, peek: A, push: S, skip: function(e4, t3) {
              var r3 = A();
              if (r3 === e4)
                return I(), true;
              if (!t3)
                throw v("token '" + r3 + "', '" + e4 + "' expected");
              return false;
            }, cmnt: function(e4) {
              var t3 = null;
              return e4 === void 0 ? m === h - 1 && (c2 || d === "*" || g) && (t3 = f) : (m < e4 && A(), m !== e4 || g || !c2 && d !== "/" || (t3 = f)), t3;
            } }, "line", { get: function() {
              return h;
            } });
          }
          p.unescape = l;
        }, 192: function(e2, t2, r2) {
          e2.exports = E;
          var n2, o, i, a, s, c, u, l, p, h, d, f, m, g, y = r2(2476);
          function E(e3, t3) {
            y.call(this, e3, t3), this.fields = {}, this.oneofs = void 0, this.extensions = void 0, this.reserved = void 0, this.group = void 0, this._fieldsById = null, this._fieldsArray = null, this._oneofsArray = null, this._ctor = null;
          }
          function v(e3) {
            return e3._fieldsById = e3._fieldsArray = e3._oneofsArray = null, delete e3.encode, delete e3.decode, delete e3.verify, e3;
          }
          ((E.prototype = Object.create(y.prototype)).constructor = E).className = "Type", Object.defineProperties(E.prototype, { fieldsById: { get: function() {
            if (this._fieldsById)
              return this._fieldsById;
            this._fieldsById = {};
            for (var e3 = Object.keys(this.fields), t3 = 0; t3 < e3.length; ++t3) {
              var r3 = this.fields[e3[t3]], n3 = r3.id;
              if (this._fieldsById[n3])
                throw Error("duplicate id " + n3 + " in " + this);
              this._fieldsById[n3] = r3;
            }
            return this._fieldsById;
          } }, fieldsArray: { get: function() {
            return this._fieldsArray || (this._fieldsArray = u.toArray(this.fields));
          } }, oneofsArray: { get: function() {
            return this._oneofsArray || (this._oneofsArray = u.toArray(this.oneofs));
          } }, ctor: { get: function() {
            return this._ctor || (this.ctor = E.generateConstructor(this));
          }, set: function(e3) {
            var t3 = e3.prototype;
            t3 instanceof i || ((e3.prototype = new i()).constructor = e3, u.merge(e3.prototype, t3)), e3.$type = e3.prototype.$type = this, u.merge(e3, i, true), u.merge(e3.prototype, i, true), this._ctor = e3;
            for (var r3 = 0; r3 < this.fieldsArray.length; ++r3)
              this._fieldsArray[r3].resolve();
            var n3 = {};
            for (r3 = 0; r3 < this.oneofsArray.length; ++r3) {
              var o2 = this._oneofsArray[r3].resolve().name, a2 = function(e4) {
                for (var t4 = {}, r4 = 0; r4 < e4.length; ++r4)
                  t4[e4[r4]] = 0;
                return { setter: function(r5) {
                  if (!(e4.indexOf(r5) < 0)) {
                    t4[r5] = 1;
                    for (var n4 = 0; n4 < e4.length; ++n4)
                      e4[n4] !== r5 && delete this[e4[n4]];
                  }
                }, getter: function() {
                  for (var e5 = Object.keys(this), r5 = e5.length - 1; r5 > -1; --r5)
                    if (t4[e5[r5]] === 1 && this[e5[r5]] !== void 0 && this[e5[r5]] !== null)
                      return e5[r5];
                } };
              }(this._oneofsArray[r3].oneof);
              n3[o2] = { get: a2.getter, set: a2.setter };
            }
            r3 && Object.defineProperties(e3.prototype, n3);
          } } }), E.generateConstructor = function(e3) {
            return function(t3) {
              for (var r3, n3 = 0; n3 < e3.fieldsArray.length; n3++)
                (r3 = e3._fieldsArray[n3]).map ? this[r3.name] = {} : r3.repeated && (this[r3.name] = []);
              if (t3)
                for (var o2 = Object.keys(t3), i2 = 0; i2 < o2.length; ++i2)
                  t3[o2[i2]] != null && (this[o2[i2]] = t3[o2[i2]]);
            };
          }, E.fromJSON = function(e3, t3) {
            var r3 = new E(e3, t3.options);
            r3.extensions = t3.extensions, r3.reserved = t3.reserved;
            for (var i2 = Object.keys(t3.fields), s2 = 0; s2 < i2.length; ++s2)
              r3.add((t3.fields[i2[s2]].keyType !== void 0 ? g.fromJSON : o.fromJSON)(i2[s2], t3.fields[i2[s2]]));
            if (t3.oneofs)
              for (i2 = Object.keys(t3.oneofs), s2 = 0; s2 < i2.length; ++s2)
                r3.add(a.fromJSON(i2[s2], t3.oneofs[i2[s2]]));
            if (t3.nested)
              for (i2 = Object.keys(t3.nested), s2 = 0; s2 < i2.length; ++s2) {
                var c2 = t3.nested[i2[s2]];
                r3.add((c2.id !== void 0 ? o.fromJSON : c2.fields !== void 0 ? E.fromJSON : c2.values !== void 0 ? n2.fromJSON : c2.methods !== void 0 ? d.fromJSON : y.fromJSON)(i2[s2], c2));
              }
            return t3.extensions && t3.extensions.length && (r3.extensions = t3.extensions), t3.reserved && t3.reserved.length && (r3.reserved = t3.reserved), t3.group && (r3.group = true), t3.comment && (r3.comment = t3.comment), r3;
          }, E.prototype.toJSON = function(e3) {
            var t3 = y.prototype.toJSON.call(this, e3), r3 = !!e3 && Boolean(e3.keepComments);
            return { options: t3 && t3.options || void 0, oneofs: y.arrayToJSON(this.oneofsArray, e3), fields: y.arrayToJSON(this.fieldsArray.filter(function(e4) {
              return !e4.declaringField;
            }), e3) || {}, extensions: this.extensions && this.extensions.length ? this.extensions : void 0, reserved: this.reserved && this.reserved.length ? this.reserved : void 0, group: this.group || void 0, nested: t3 && t3.nested || void 0, comment: r3 ? this.comment : void 0 };
          }, E.prototype.resolveAll = function() {
            for (var e3 = this.fieldsArray, t3 = 0; t3 < e3.length; )
              e3[t3++].resolve();
            var r3 = this.oneofsArray;
            for (t3 = 0; t3 < r3.length; )
              r3[t3++].resolve();
            return y.prototype.resolveAll.call(this);
          }, E.prototype.get = function(e3) {
            return this.fields[e3] || this.oneofs && this.oneofs[e3] || this.nested && this.nested[e3] || null;
          }, E.prototype.add = function(e3) {
            if (this.get(e3.name))
              throw Error("duplicate name '" + e3.name + "' in " + this);
            if (e3 instanceof o && e3.extend === void 0) {
              if (this._fieldsById && this._fieldsById[e3.id])
                throw Error("duplicate id " + e3.id + " in " + this);
              if (this.isReservedId(e3.id))
                throw Error("id " + e3.id + " is reserved in " + this);
              if (this.isReservedName(e3.name))
                throw Error("name '" + e3.name + "' is reserved in " + this);
              return e3.parent && e3.parent.remove(e3), this.fields[e3.name] = e3, e3.message = this, e3.onAdd(this), v(this);
            }
            return e3 instanceof a ? (this.oneofs || (this.oneofs = {}), this.oneofs[e3.name] = e3, e3.onAdd(this), v(this)) : y.prototype.add.call(this, e3);
          }, E.prototype.remove = function(e3) {
            if (e3 instanceof o && e3.extend === void 0) {
              if (!this.fields || this.fields[e3.name] !== e3)
                throw Error(e3 + " is not a member of " + this);
              return delete this.fields[e3.name], e3.parent = null, e3.onRemove(this), v(this);
            }
            if (e3 instanceof a) {
              if (!this.oneofs || this.oneofs[e3.name] !== e3)
                throw Error(e3 + " is not a member of " + this);
              return delete this.oneofs[e3.name], e3.parent = null, e3.onRemove(this), v(this);
            }
            return y.prototype.remove.call(this, e3);
          }, E.prototype.isReservedId = function(e3) {
            return y.isReservedId(this.reserved, e3);
          }, E.prototype.isReservedName = function(e3) {
            return y.isReservedName(this.reserved, e3);
          }, E.prototype.create = function(e3) {
            return new this.ctor(e3);
          }, E.prototype.setup = function() {
            for (var e3 = this.fullName, t3 = [], r3 = 0; r3 < this.fieldsArray.length; ++r3)
              t3.push(this._fieldsArray[r3].resolve().resolvedType);
            this.encode = p(this)({ Writer: s, types: t3, util: u }), this.decode = h(this)({ Reader: c, types: t3, util: u }), this.verify = l(this)({ types: t3, util: u }), this.fromObject = m.fromObject(this)({ types: t3, util: u }), this.toObject = m.toObject(this)({ types: t3, util: u });
            var n3 = f[e3];
            if (n3) {
              var o2 = Object.create(this);
              o2.fromObject = this.fromObject, this.fromObject = n3.fromObject.bind(o2), o2.toObject = this.toObject, this.toObject = n3.toObject.bind(o2);
            }
            return this;
          }, E.prototype.encode = function(e3, t3) {
            return this.setup().encode(e3, t3);
          }, E.prototype.encodeDelimited = function(e3, t3) {
            return this.encode(e3, t3 && t3.len ? t3.fork() : t3).ldelim();
          }, E.prototype.decode = function(e3, t3) {
            return this.setup().decode(e3, t3);
          }, E.prototype.decodeDelimited = function(e3) {
            return e3 instanceof c || (e3 = c.create(e3)), this.decode(e3, e3.uint32());
          }, E.prototype.verify = function(e3) {
            return this.setup().verify(e3);
          }, E.prototype.fromObject = function(e3) {
            return this.setup().fromObject(e3);
          }, E.prototype.toObject = function(e3, t3) {
            return this.setup().toObject(e3, t3);
          }, E.d = function(e3) {
            return function(t3) {
              u.decorateType(t3, e3);
            };
          }, E._configure = function() {
            n2 = r2(582), o = r2(9286), i = r2(339), a = r2(9735), s = r2(5244), c = r2(8494), u = r2(9935), l = r2(5484), p = r2(9929), h = r2(3888), d = r2(9447), f = r2(7834), m = r2(525), g = r2(1435);
          };
        }, 4696: function(e2, t2, r2) {
          "use strict";
          var n2 = e2.exports, o = r2(9935), i = ["double", "float", "int32", "uint32", "sint32", "fixed32", "sfixed32", "int64", "uint64", "sint64", "fixed64", "sfixed64", "bool", "string", "bytes"];
          function a(e3, t3) {
            var r3 = 0, n3 = {};
            for (t3 |= 0; r3 < e3.length; )
              n3[i[r3 + t3]] = e3[r3++];
            return n3;
          }
          n2.basic = a([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2]), n2.defaults = a([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, false, "", o.emptyArray, null]), n2.long = a([0, 0, 0, 1, 1], 7), n2.mapKey = a([0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2], 2), n2.packed = a([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0]), n2._configure = function() {
            o = r2(9935);
          };
        }, 1498: function(e2) {
          "use strict";
          var t2 = e2.exports;
          t2.length = function(e3) {
            for (var t3 = 0, r2 = 0, n2 = 0; n2 < e3.length; ++n2)
              (r2 = e3.charCodeAt(n2)) < 128 ? t3 += 1 : r2 < 2048 ? t3 += 2 : (64512 & r2) == 55296 && (64512 & e3.charCodeAt(n2 + 1)) == 56320 ? (++n2, t3 += 4) : t3 += 3;
            return t3;
          }, t2.read = function(e3, t3, r2) {
            if (r2 - t3 < 1)
              return "";
            for (var n2, o = null, i = [], a = 0; t3 < r2; )
              (n2 = e3[t3++]) < 128 ? i[a++] = n2 : n2 > 191 && n2 < 224 ? i[a++] = (31 & n2) << 6 | 63 & e3[t3++] : n2 > 239 && n2 < 365 ? (n2 = ((7 & n2) << 18 | (63 & e3[t3++]) << 12 | (63 & e3[t3++]) << 6 | 63 & e3[t3++]) - 65536, i[a++] = 55296 + (n2 >> 10), i[a++] = 56320 + (1023 & n2)) : i[a++] = (15 & n2) << 12 | (63 & e3[t3++]) << 6 | 63 & e3[t3++], a > 8191 && ((o || (o = [])).push(String.fromCharCode.apply(String, i)), a = 0);
            return o ? (a && o.push(String.fromCharCode.apply(String, i.slice(0, a))), o.join("")) : String.fromCharCode.apply(String, i.slice(0, a));
          }, t2.write = function(e3, t3, r2) {
            for (var n2, o, i = r2, a = 0; a < e3.length; ++a)
              (n2 = e3.charCodeAt(a)) < 128 ? t3[r2++] = n2 : n2 < 2048 ? (t3[r2++] = n2 >> 6 | 192, t3[r2++] = 63 & n2 | 128) : (64512 & n2) == 55296 && (64512 & (o = e3.charCodeAt(a + 1))) == 56320 ? (n2 = 65536 + ((1023 & n2) << 10) + (1023 & o), ++a, t3[r2++] = n2 >> 18 | 240, t3[r2++] = n2 >> 12 & 63 | 128, t3[r2++] = n2 >> 6 & 63 | 128, t3[r2++] = 63 & n2 | 128) : (t3[r2++] = n2 >> 12 | 224, t3[r2++] = n2 >> 6 & 63 | 128, t3[r2++] = 63 & n2 | 128);
            return r2 - i;
          };
        }, 9935: function(e2, t2, r2) {
          var n2 = e2.exports, o = r2(889);
          n2.LongBits = r2(8365), n2.Long = r2(4939), n2.pool = r2(8997), n2.float = r2(1283), n2.asPromise = r2(6728), n2.EventEmitter = r2(7969), n2.path = r2(1444), n2.base64 = r2(5889), n2.utf8 = r2(1498), n2.compareFieldsById = function(e3, t3) {
            return e3.id - t3.id;
          }, n2.toArray = function(e3) {
            if (e3) {
              for (var t3 = Object.keys(e3), r3 = new Array(t3.length), n3 = 0; n3 < t3.length; )
                r3[n3] = e3[t3[n3++]];
              return r3;
            }
            return [];
          }, n2.toObject = function(e3) {
            for (var t3 = {}, r3 = 0; r3 < e3.length; ) {
              var n3 = e3[r3++], o2 = e3[r3++];
              o2 !== void 0 && (t3[n3] = o2);
            }
            return t3;
          }, n2.isString = function(e3) {
            return typeof e3 == "string" || e3 instanceof String;
          }, n2.isReserved = function(e3) {
            return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(e3);
          }, n2.isObject = function(e3) {
            return e3 && typeof e3 == "object";
          }, n2.Array = typeof Uint8Array != "undefined" ? Uint8Array : Array, n2.oneOfGetter = function(e3) {
            for (var t3 = {}, r3 = 0; r3 < e3.length; ++r3)
              t3[e3[r3]] = 1;
            return function() {
              for (var e4 = Object.keys(this), r4 = e4.length - 1; r4 > -1; --r4)
                if (t3[e4[r4]] === 1 && this[e4[r4]] !== void 0 && this[e4[r4]] !== null)
                  return e4[r4];
            };
          }, n2.oneOfSetter = function(e3) {
            return function(t3) {
              for (var r3 = 0; r3 < e3.length; ++r3)
                e3[r3] !== t3 && delete this[e3[r3]];
            };
          }, n2.merge = function(e3, t3, r3) {
            for (var n3 = Object.keys(t3), o2 = 0; o2 < n3.length; ++o2)
              e3[n3[o2]] !== void 0 && r3 || (e3[n3[o2]] = t3[n3[o2]]);
            return e3;
          }, n2.decorateType = function(e3, t3) {
            if (e3.$type)
              return t3 && e3.$type.name !== t3 && (n2.decorateRoot.remove(e3.$type), e3.$type.name = t3, n2.decorateRoot.add(e3.$type)), e3.$type;
            Type || (Type = r2(192));
            var o2 = new Type(t3 || e3.name);
            return n2.decorateRoot.add(o2), o2.ctor = e3, Object.defineProperty(e3, "$type", { value: o2, enumerable: false }), Object.defineProperty(e3.prototype, "$type", { value: o2, enumerable: false }), o2;
          }, n2.emptyArray = Object.freeze ? Object.freeze([]) : [], n2.emptyObject = Object.freeze ? Object.freeze({}) : {}, n2.longToHash = function(e3) {
            return e3 ? n2.LongBits.from(e3).toHash() : n2.LongBits.zeroHash;
          }, n2.copy = function(e3) {
            if (typeof e3 != "object")
              return e3;
            var t3 = {};
            for (var r3 in e3)
              t3[r3] = e3[r3];
            return t3;
          }, n2.deepCopy = function e3(t3) {
            if (typeof t3 != "object")
              return t3;
            var r3 = {};
            for (var n3 in t3)
              r3[n3] = e3(t3[n3]);
            return r3;
          }, n2.ProtocolError = function(e3) {
            function t3(e4, r3) {
              if (!(this instanceof t3))
                return new t3(e4, r3);
              Object.defineProperty(this, "message", { get: function() {
                return e4;
              } }), Error.captureStackTrace ? Error.captureStackTrace(this, t3) : Object.defineProperty(this, "stack", { value: new Error().stack || "" }), r3 && merge(this, r3);
            }
            return (t3.prototype = Object.create(Error.prototype)).constructor = t3, Object.defineProperty(t3.prototype, "name", { get: function() {
              return e3;
            } }), t3.prototype.toString = function() {
              return this.name + ": " + this.message;
            }, t3;
          }, n2.toJSONOptions = { longs: String, enums: String, bytes: String, json: true }, n2.Buffer = null, n2.newBuffer = function(e3) {
            return typeof e3 == "number" ? new n2.Array(e3) : typeof Uint8Array == "undefined" ? e3 : new Uint8Array(e3);
          }, n2.stringToBytes = function(e3) {
            var t3, r3, n3 = [];
            t3 = e3.length;
            for (var o2 = 0; o2 < t3; o2++)
              (r3 = e3.charCodeAt(o2)) >= 65536 && r3 <= 1114111 ? (n3.push(r3 >> 18 & 7 | 240), n3.push(r3 >> 12 & 63 | 128), n3.push(r3 >> 6 & 63 | 128), n3.push(63 & r3 | 128)) : r3 >= 2048 && r3 <= 65535 ? (n3.push(r3 >> 12 & 15 | 224), n3.push(r3 >> 6 & 63 | 128), n3.push(63 & r3 | 128)) : r3 >= 128 && r3 <= 2047 ? (n3.push(r3 >> 6 & 31 | 192), n3.push(63 & r3 | 128)) : n3.push(255 & r3);
            return n3;
          }, n2.byteToString = function(e3) {
            if (typeof e3 == "string")
              return e3;
            for (var t3 = "", r3 = e3, n3 = 0; n3 < r3.length; n3++) {
              var o2 = r3[n3].toString(2), i = o2.match(/^1+?(?=0)/);
              if (i && o2.length == 8) {
                for (var a = i[0].length, s = r3[n3].toString(2).slice(7 - a), c = 1; c < a; c++)
                  s += r3[c + n3].toString(2).slice(2);
                t3 += String.fromCharCode(parseInt(s, 2)), n3 += a - 1;
              } else
                t3 += String.fromCharCode(r3[n3]);
            }
            return t3;
          }, n2.isInteger = Number.isInteger || function(e3) {
            return typeof e3 == "number" && isFinite(e3) && Math.floor(e3) === e3;
          }, Object.defineProperty(n2, "decorateRoot", { get: function() {
            return o.decorated || (o.decorated = new (r2(4685))());
          } });
        }, 5484: function(e2, t2, r2) {
          var n2, o;
          function i(e3, t3) {
            return e3.name + ": " + t3 + (e3.repeated && t3 !== "array" ? "[]" : e3.map && t3 !== "object" ? "{k:" + e3.keyType + "}" : "") + " expected";
          }
          function a(e3, t3, r3, a2) {
            var s2 = a2.types;
            if (e3.resolvedType)
              if (e3.resolvedType instanceof n2) {
                if (Object.keys(e3.resolvedType.values).indexOf(r3) < 0)
                  return i(e3, "enum value");
              } else {
                var c2 = s2[t3].verify(r3);
                if (c2)
                  return e3.name + "." + c2;
              }
            else
              switch (e3.type) {
                case "int32":
                case "uint32":
                case "sint32":
                case "fixed32":
                case "sfixed32":
                  if (!o.isInteger(r3))
                    return i(e3, "integer");
                  break;
                case "int64":
                case "uint64":
                case "sint64":
                case "fixed64":
                case "sfixed64":
                  if (!(o.isInteger(r3) || r3 && o.isInteger(r3.low) && o.isInteger(r3.high)))
                    return i(e3, "integer|Long");
                  break;
                case "float":
                case "double":
                  if (typeof r3 != "number")
                    return i(e3, "number");
                  break;
                case "bool":
                  if (typeof r3 != "boolean")
                    return i(e3, "boolean");
                  break;
                case "string":
                  if (!o.isString(r3))
                    return i(e3, "string");
                  break;
                case "bytes":
                  if (!(r3 && typeof r3.length == "number" || o.isString(r3)))
                    return i(e3, "buffer");
              }
          }
          function s(e3, t3) {
            switch (e3.keyType) {
              case "int32":
              case "uint32":
              case "sint32":
              case "fixed32":
              case "sfixed32":
                if (!o.key32Re.test(t3))
                  return i(e3, "integer key");
                break;
              case "int64":
              case "uint64":
              case "sint64":
              case "fixed64":
              case "sfixed64":
                if (!o.key64Re.test(t3))
                  return i(e3, "integer|Long key");
                break;
              case "bool":
                if (!o.key2Re.test(t3))
                  return i(e3, "boolean key");
            }
          }
          function c(e3) {
            return function(t3) {
              return function(r3) {
                var n3;
                if (typeof r3 != "object" || r3 === null)
                  return "object expected";
                var c2, u = {};
                e3.oneofsArray.length && (c2 = {});
                for (var l = 0; l < e3.fieldsArray.length; ++l) {
                  var p, h = e3._fieldsArray[l].resolve(), d = r3[h.name];
                  if (!h.optional || d != null && r3.hasOwnProperty(h.name))
                    if (h.map) {
                      if (!o.isObject(d))
                        return i(h, "object");
                      var f = Object.keys(d);
                      for (p = 0; p < f.length; ++p) {
                        if (n3 = s(h, f[p]))
                          return n3;
                        if (n3 = a(h, l, d[f[p]], t3))
                          return n3;
                      }
                    } else if (h.repeated) {
                      if (!Array.isArray(d))
                        return i(h, "array");
                      for (p = 0; p < d.length; ++p)
                        if (n3 = a(h, l, d[p], t3))
                          return n3;
                    } else {
                      if (h.partOf) {
                        var m = h.partOf.name;
                        if (u[h.partOf.name] === 1 && c2[m] === 1)
                          return h.partOf.name + ": multiple values";
                        c2[m] = 1;
                      }
                      if (n3 = a(h, l, d, t3))
                        return n3;
                    }
                }
              };
            };
          }
          e2.exports = c, c._configure = function() {
            n2 = r2(582), o = r2(9935);
          };
        }, 7834: function(e2, t2, r2) {
          var n2, o = t2;
          o[".google.protobuf.Any"] = { fromObject: function(e3) {
            if (e3 && e3["@type"]) {
              var t3 = this.lookup(e3["@type"]);
              if (t3) {
                var r3 = e3["@type"].charAt(0) === "." ? e3["@type"].substr(1) : e3["@type"];
                return this.create({ type_url: "/" + r3, value: t3.encode(t3.fromObject(e3)).finish() });
              }
            }
            return this.fromObject(e3);
          }, toObject: function(e3, t3) {
            if (t3 && t3.json && e3.type_url && e3.value) {
              var r3 = e3.type_url.substring(e3.type_url.lastIndexOf("/") + 1), o2 = this.lookup(r3);
              o2 && (e3 = o2.decode(e3.value));
            }
            if (!(e3 instanceof this.ctor) && e3 instanceof n2) {
              var i = e3.$type.toObject(e3, t3);
              return i["@type"] = e3.$type.fullName, i;
            }
            return this.toObject(e3, t3);
          } }, o._configure = function() {
            n2 = r2(339);
          };
        }, 5244: function(e2, t2, r2) {
          e2.exports = u;
          var n2, o = r2(9935), i = r2(1498);
          function a(e3, t3, r3) {
            this.fn = e3, this.len = t3, this.next = void 0, this.val = r3;
          }
          function s() {
          }
          function c(e3) {
            this.head = e3.head, this.tail = e3.tail, this.len = e3.len, this.next = e3.states;
          }
          function u() {
            this.len = 0, this.head = new a(s, 0, 0), this.tail = this.head, this.states = null;
          }
          function l(e3, t3, r3) {
            t3[r3] = 255 & e3;
          }
          function p(e3, t3) {
            this.len = e3, this.next = void 0, this.val = t3;
          }
          function h(e3, t3, r3) {
            for (; e3.hi; )
              t3[r3++] = 127 & e3.lo | 128, e3.lo = (e3.lo >>> 7 | e3.hi << 25) >>> 0, e3.hi >>>= 7;
            for (; e3.lo > 127; )
              t3[r3++] = 127 & e3.lo | 128, e3.lo = e3.lo >>> 7;
            t3[r3++] = e3.lo;
          }
          function d(e3, t3, r3) {
            t3[r3] = 255 & e3, t3[r3 + 1] = e3 >>> 8 & 255, t3[r3 + 2] = e3 >>> 16 & 255, t3[r3 + 3] = e3 >>> 24;
          }
          u.create = o.Buffer ? function() {
            return (u.create = function() {
              return new (void 0)();
            })();
          } : function() {
            return new u();
          }, u.alloc = function(e3) {
            return new o.Array(e3);
          }, o.Array !== Array && (u.alloc = o.pool(u.alloc, o.Array.prototype.subarray)), u.prototype._push = function(e3, t3, r3) {
            return this.tail = this.tail.next = new a(e3, t3, r3), this.len += t3, this;
          }, p.prototype = Object.create(a.prototype), p.prototype.fn = function(e3, t3, r3) {
            for (; e3 > 127; )
              t3[r3++] = 127 & e3 | 128, e3 >>>= 7;
            t3[r3] = e3;
          }, u.prototype.uint32 = function(e3) {
            return this.len += (this.tail = this.tail.next = new p((e3 >>>= 0) < 128 ? 1 : e3 < 16384 ? 2 : e3 < 2097152 ? 3 : e3 < 268435456 ? 4 : 5, e3)).len, this;
          }, u.prototype.int32 = function(e3) {
            return e3 < 0 ? this._push(h, 10, n2.fromNumber(e3)) : this.uint32(e3);
          }, u.prototype.sint32 = function(e3) {
            return this.uint32((e3 << 1 ^ e3 >> 31) >>> 0);
          }, u.prototype.uint64 = function(e3) {
            var t3 = n2.from(e3);
            return this._push(h, t3.length(), t3);
          }, u.prototype.int64 = u.prototype.uint64, u.prototype.sint64 = function(e3) {
            var t3 = n2.from(e3).zzEncode();
            return this._push(h, t3.length(), t3);
          }, u.prototype.bool = function(e3) {
            return this._push(l, 1, e3 ? 1 : 0);
          }, u.prototype.fixed32 = function(e3) {
            return this._push(d, 4, e3 >>> 0);
          }, u.prototype.sfixed32 = u.prototype.fixed32, u.prototype.fixed64 = function(e3) {
            var t3 = n2.from(e3);
            return this._push(d, 4, t3.lo)._push(d, 4, t3.hi);
          }, u.prototype.sfixed64 = u.prototype.fixed64, u.prototype.float = function(e3) {
            return this._push(o.float.writeFloatLE, 4, e3);
          }, u.prototype.double = function(e3) {
            return this._push(o.float.writeDoubleLE, 8, e3);
          };
          var f = o.Array.prototype.set ? function(e3, t3, r3) {
            t3.set(e3, r3);
          } : function(e3, t3, r3) {
            for (var n3 = 0; n3 < e3.length; ++n3)
              t3[r3 + n3] = e3[n3];
          };
          u.prototype.bytes = function(e3) {
            var t3 = e3.length >>> 0;
            if (!t3)
              return this._push(l, 1, 0);
            if (o.isString(e3)) {
              var r3 = u.alloc(t3 = i.length(e3));
              i.write(e3, r3, 0), e3 = r3;
            }
            return this.uint32(t3)._push(f, t3, e3);
          }, u.prototype.string = function(e3) {
            var t3 = i.length(e3);
            return t3 ? this.uint32(t3)._push(i.write, t3, e3) : this._push(l, 1, 0);
          }, u.prototype.fork = function() {
            return this.states = new c(this), this.head = this.tail = new a(s, 0, 0), this.len = 0, this;
          }, u.prototype.reset = function() {
            return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new a(s, 0, 0), this.len = 0), this;
          }, u.prototype.ldelim = function() {
            var e3 = this.head, t3 = this.tail, r3 = this.len;
            return this.reset().uint32(r3), r3 && (this.tail.next = e3.next, this.tail = t3, this.len += r3), this;
          }, u.prototype.finish = function() {
            for (var e3 = this.head.next, t3 = this.constructor.alloc(this.len), r3 = 0; e3; )
              e3.fn(e3.val, t3, r3), r3 += e3.len, e3 = e3.next;
            return t3;
          }, u._configure = function() {
            n2 = r2(8365), r2(5889), i = r2(1498);
          };
        } }, t = {};
        function r(n2) {
          var o = t[n2];
          if (o !== void 0)
            return o.exports;
          var i = t[n2] = { exports: {} };
          return e[n2](i, i.exports, r), i.exports;
        }
        r.amdO = {}, r.n = function(e2) {
          var t2 = e2 && e2.__esModule ? function() {
            return e2.default;
          } : function() {
            return e2;
          };
          return r.d(t2, { a: t2 }), t2;
        }, r.d = function(e2, t2) {
          for (var n2 in t2)
            r.o(t2, n2) && !r.o(e2, n2) && Object.defineProperty(e2, n2, { enumerable: true, get: t2[n2] });
        }, r.g = function() {
          if (typeof globalThis == "object")
            return globalThis;
          try {
            return this || new Function("return this")();
          } catch (e2) {
            if (typeof window == "object")
              return window;
          }
        }(), r.o = function(e2, t2) {
          return Object.prototype.hasOwnProperty.call(e2, t2);
        }, r.r = function(e2) {
          typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
        };
        var n = {};
        return function() {
          "use strict";
          r.r(n), r.d(n, { default: function() {
            return ze;
          } }), r(739);
          var e2 = {};
          function t2() {
            e2.converter._configure(), e2.decoder._configure(), e2.encoder._configure(), e2.Field._configure(), e2.MapField._configure(), e2.Message._configure(), e2.Namespace._configure(), e2.Method._configure(), e2.ReflectionObject._configure(), e2.OneOf._configure(), e2.parse._configure(), e2.Reader._configure(), e2.Root._configure(), e2.Service._configure(), e2.verifier._configure(), e2.Type._configure(), e2.types._configure(), e2.wrappers._configure(), e2.Writer._configure();
          }
          e2.build = "minimal", e2.Writer = r(5244), e2.encoder = r(9929), e2.Reader = r(8494), e2.util = r(9935), e2.rpc = r(7325), e2.roots = r(889), e2.verifier = r(5484), e2.tokenize = r(8869), e2.parse = r(7845), e2.common = r(3072), e2.ReflectionObject = r(5998), e2.Namespace = r(2476), e2.Root = r(4685), e2.Enum = r(582), e2.Type = r(192), e2.Field = r(9286), e2.OneOf = r(9735), e2.MapField = r(1435), e2.Service = r(9447), e2.Method = r(484), e2.converter = r(525), e2.decoder = r(3888), e2.Message = r(339), e2.wrappers = r(7834), e2.types = r(4696), e2.util = r(9935), e2.configure = t2, e2.load = function(t3, r2, n2) {
            return typeof r2 == "function" ? (n2 = r2, r2 = new e2.Root()) : r2 || (r2 = new e2.Root()), r2.load(t3, n2);
          }, e2.loadSync = function(t3, r2) {
            return r2 || (r2 = new e2.Root()), r2.loadSync(t3);
          }, e2.parseFromPbString = function(t3, r2, n2) {
            return typeof r2 == "function" ? (n2 = r2, r2 = new e2.Root()) : r2 || (r2 = new e2.Root()), r2.parseFromPbString(t3, n2);
          }, t2();
          var o = e2, i = r(4255), a = r.n(i), s = (r(7758), r(9900), r(2645), r(3094), r(7858), r(8826), r(529), r(9894), r(2953), r(4286), r(6260), r(7680), r(2914), r(441), r(6494), r(5839)), c = r(3038), u = r(4122), l = (r(4593), r(3776), r(3836), r(6162), r(796), r(2835), r(5645), r(2397), r(2621), r(4440), r(6467), r(5068), r(8640), r(8320), r(6382), r(7163), r(3485), r(1126), r(4870), r(8290), r(7781), r(3994), r(6903), r(3703), r(3188), r(5223), r(890), r(7174), r(9501), r(7089), r(7962), r(600), r(5100), r(7866), r(3940), r(75), r(6601), r(2289), r(6784), r(3458)), p = r.n(l), h = r(3406), d = r(6447), f = ["public", "members_only", "allow_user_invites", "invite_need_confirm"], m = { name: "name", title: "name", description: "description", public: "public", members_only: "approval", allow_user_invites: "allowInvites", max_users: "maxUsers", invite_need_confirm: "inviteNeedConfirm", custom: "ext", last_modified: "lastModified" }, g = function(e3) {
            var t3 = this.root.lookup("easemob.pb.MUCBody").decode(e3.payload), r2 = t3.operation;
            d.kg.debug("onMucMessage", t3), function(e4) {
              var r3, n2, o2, i2, a2, s2, c2 = this;
              return t3.isThread ? (o2 = { id: t3.mucId.name, name: t3.mucName, operation: "", parentId: t3.mucParentId.name, operator: t3.from.name, userName: t3.to.length ? t3.to[0].name : "" }, i2 = { chatThreadId: t3.mucId.name, chatThreadName: t3.mucName, operation: "", parentId: t3.mucParentId.name }) : (n2 = { type: "", owner: t3.from.name, gid: t3.mucId.name, from: t3.from.name, fromJid: t3.from, to: t3.to.length ? t3.to[0].name : "", toJid: t3.to, chatroom: t3.isChatroom, status: t3.status }, a2 = { operation: "", id: t3.mucId.name, from: t3.from.name }, t3.isChatroom && ((r3 = t3 == null ? void 0 : t3.eventInfo) === null || r3 === void 0 ? void 0 : r3.ext) && (s2 = JSON.parse(t3.eventInfo.ext))), ({ 44: function() {
                var e5;
                a2.operation = "removeChatRoomAttributes", a2.attributes = s2.result.successKeys, s2.result.successKeys.length > 0 && ((e5 = c2.eventHandler) === null || e5 === void 0 || e5.dispatch("onChatroomEvent", a2));
              }, 43: function() {
                var e5;
                a2.operation = "updateChatRoomAttributes";
                var t4 = {};
                s2.result.successKeys.forEach(function(e6) {
                  t4[e6] = s2.properties[e6];
                }), a2.attributes = t4, s2.result.successKeys.length > 0 && ((e5 = c2.eventHandler) === null || e5 === void 0 || e5.dispatch("onChatroomEvent", a2));
              }, 42: function() {
              }, 41: function() {
              }, 40: function() {
              }, 39: function() {
              }, 38: function() {
                var e5;
                i2.operation = "chatThreadNameUpdate", (e5 = c2.eventHandler) === null || e5 === void 0 || e5.dispatch("onMultiDeviceEvent", i2);
              }, 37: function() {
                var e5;
                o2.operation = "userRemove", (e5 = c2.eventHandler) === null || e5 === void 0 || e5.dispatch("onChatThreadChange", o2);
              }, 36: function() {
                var e5;
                i2.operation = "chatThreadLeave", (e5 = c2.eventHandler) === null || e5 === void 0 || e5.dispatch("onMultiDeviceEvent", i2);
              }, 35: function() {
                var e5;
                i2.operation = "chatThreadJoin", (e5 = c2.eventHandler) === null || e5 === void 0 || e5.dispatch("onMultiDeviceEvent", i2);
              }, 34: function() {
                var e5;
                i2.operation = "chatThreadDestroy", (e5 = c2.eventHandler) === null || e5 === void 0 || e5.dispatch("onMultiDeviceEvent", i2);
              }, 33: function() {
                var e5;
                i2.operation = "chatThreadCreate", (e5 = c2.eventHandler) === null || e5 === void 0 || e5.dispatch("onMultiDeviceEvent", i2);
              }, 32: function() {
                var e5, r4, o3, i3;
                n2.type = t3.isChatroom ? "rmChatRoomMute" : "rmGroupMute", c2.onPresence && c2.onPresence(n2), t3.isChatroom ? (e5 = c2.eventHandler) === null || e5 === void 0 || e5.dispatch("onChatroomChange", n2) : (r4 = c2.eventHandler) === null || r4 === void 0 || r4.dispatch("onGroupChange", n2), a2.operation = "unmuteAllMembers", t3.isChatroom ? (o3 = c2.eventHandler) === null || o3 === void 0 || o3.dispatch("onChatroomEvent", a2) : (i3 = c2.eventHandler) === null || i3 === void 0 || i3.dispatch("onGroupEvent", a2);
              }, 31: function() {
                var e5, r4, o3, i3;
                n2.type = t3.isChatroom ? "muteChatRoom" : "muteGroup", c2.onPresence && c2.onPresence(n2), t3.isChatroom ? (e5 = c2.eventHandler) === null || e5 === void 0 || e5.dispatch("onChatroomChange", n2) : (r4 = c2.eventHandler) === null || r4 === void 0 || r4.dispatch("onGroupChange", n2), a2.operation = "muteAllMembers", t3.isChatroom ? (o3 = c2.eventHandler) === null || o3 === void 0 || o3.dispatch("onChatroomEvent", a2) : (i3 = c2.eventHandler) === null || i3 === void 0 || i3.dispatch("onGroupEvent", a2);
              }, 30: function() {
                var e5, r4, o3, i3;
                n2.type = t3.isChatroom ? "rmUserFromChatRoomWhiteList" : "rmUserFromGroupWhiteList", c2.onPresence && c2.onPresence(n2), t3.isChatroom ? (e5 = c2.eventHandler) === null || e5 === void 0 || e5.dispatch("onChatroomChange", n2) : (r4 = c2.eventHandler) === null || r4 === void 0 || r4.dispatch("onGroupChange", n2), a2.operation = "removeAllowlistMember", t3.isChatroom ? (o3 = c2.eventHandler) === null || o3 === void 0 || o3.dispatch("onChatroomEvent", a2) : (i3 = c2.eventHandler) === null || i3 === void 0 || i3.dispatch("onGroupEvent", a2);
              }, 29: function() {
                var e5, r4, o3, i3;
                n2.type = t3.isChatroom ? "addUserToChatRoomWhiteList" : "addUserToGroupWhiteList", c2.onPresence && c2.onPresence(n2), t3.isChatroom ? (e5 = c2.eventHandler) === null || e5 === void 0 || e5.dispatch("onChatroomChange", n2) : (r4 = c2.eventHandler) === null || r4 === void 0 || r4.dispatch("onGroupChange", n2), a2.operation = "addUserToAllowlist", t3.isChatroom ? (o3 = c2.eventHandler) === null || o3 === void 0 || o3.dispatch("onChatroomEvent", a2) : (i3 = c2.eventHandler) === null || i3 === void 0 || i3.dispatch("onGroupEvent", a2);
              }, 28: function() {
                var e5, r4, o3, i3;
                n2.type = "deleteFile", c2.onPresence && c2.onPresence(n2), t3.isChatroom ? (e5 = c2.eventHandler) === null || e5 === void 0 || e5.dispatch("onChatroomChange", n2) : (r4 = c2.eventHandler) === null || r4 === void 0 || r4.dispatch("onGroupChange", n2), a2.operation = "deleteFile", t3.isChatroom ? (o3 = c2.eventHandler) === null || o3 === void 0 || o3.dispatch("onChatroomEvent", a2) : (i3 = c2.eventHandler) === null || i3 === void 0 || i3.dispatch("onGroupEvent", a2);
              }, 27: function() {
                var e5, r4, o3, i3;
                n2.type = "uploadFile", c2.onPresence && c2.onPresence(n2), t3.isChatroom ? (e5 = c2.eventHandler) === null || e5 === void 0 || e5.dispatch("onChatroomChange", n2) : (r4 = c2.eventHandler) === null || r4 === void 0 || r4.dispatch("onGroupChange", n2), a2.operation = "uploadFile", t3.isChatroom ? (o3 = c2.eventHandler) === null || o3 === void 0 || o3.dispatch("onChatroomEvent", a2) : (i3 = c2.eventHandler) === null || i3 === void 0 || i3.dispatch("onGroupEvent", a2);
              }, 26: function() {
                var e5, r4, o3, i3;
                n2.type = "deleteAnnouncement", c2.onPresence && c2.onPresence(n2), t3.isChatroom ? (e5 = c2.eventHandler) === null || e5 === void 0 || e5.dispatch("onChatroomChange", n2) : (r4 = c2.eventHandler) === null || r4 === void 0 || r4.dispatch("onGroupChange", n2), a2.operation = "deleteAnnouncement", t3.isChatroom ? (o3 = c2.eventHandler) === null || o3 === void 0 || o3.dispatch("onChatroomEvent", a2) : (i3 = c2.eventHandler) === null || i3 === void 0 || i3.dispatch("onGroupEvent", a2);
              }, 25: function() {
                var e5, r4, o3, i3;
                n2.type = "updateAnnouncement", c2.onPresence && c2.onPresence(n2), t3.isChatroom ? (e5 = c2.eventHandler) === null || e5 === void 0 || e5.dispatch("onChatroomChange", n2) : (r4 = c2.eventHandler) === null || r4 === void 0 || r4.dispatch("onGroupChange", n2), a2.operation = "updateAnnouncement", t3.isChatroom ? (o3 = c2.eventHandler) === null || o3 === void 0 || o3.dispatch("onChatroomEvent", a2) : (i3 = c2.eventHandler) === null || i3 === void 0 || i3.dispatch("onGroupEvent", a2);
              }, 24: function() {
                var e5, r4, o3, i3;
                n2.type = "removeMute", c2.onPresence && c2.onPresence(n2), t3.isChatroom ? (e5 = c2.eventHandler) === null || e5 === void 0 || e5.dispatch("onChatroomChange", n2) : (r4 = c2.eventHandler) === null || r4 === void 0 || r4.dispatch("onGroupChange", n2), a2.operation = "unmuteMember", t3.isChatroom ? (o3 = c2.eventHandler) === null || o3 === void 0 || o3.dispatch("onChatroomEvent", a2) : (i3 = c2.eventHandler) === null || i3 === void 0 || i3.dispatch("onGroupEvent", a2);
              }, 23: function() {
                var e5, r4, o3, i3;
                n2.type = "addMute", c2.onPresence && c2.onPresence(n2), t3.isChatroom ? (e5 = c2.eventHandler) === null || e5 === void 0 || e5.dispatch("onChatroomChange", n2) : (r4 = c2.eventHandler) === null || r4 === void 0 || r4.dispatch("onGroupChange", n2), a2.operation = "muteMember", t3.isChatroom ? (o3 = c2.eventHandler) === null || o3 === void 0 || o3.dispatch("onChatroomEvent", a2) : (i3 = c2.eventHandler) === null || i3 === void 0 || i3.dispatch("onGroupEvent", a2);
              }, 22: function() {
                var e5, r4, o3, i3;
                n2.type = "removeAdmin", c2.onPresence && c2.onPresence(n2), t3.isChatroom ? (e5 = c2.eventHandler) === null || e5 === void 0 || e5.dispatch("onChatroomChange", n2) : (r4 = c2.eventHandler) === null || r4 === void 0 || r4.dispatch("onGroupChange", n2), a2.operation = "removeAdmin", t3.isChatroom ? (o3 = c2.eventHandler) === null || o3 === void 0 || o3.dispatch("onChatroomEvent", a2) : (i3 = c2.eventHandler) === null || i3 === void 0 || i3.dispatch("onGroupEvent", a2);
              }, 21: function() {
                var e5, r4, o3, i3;
                n2.type = "addAdmin", c2.onPresence && c2.onPresence(n2), t3.isChatroom ? (e5 = c2.eventHandler) === null || e5 === void 0 || e5.dispatch("onChatroomChange", n2) : (r4 = c2.eventHandler) === null || r4 === void 0 || r4.dispatch("onGroupChange", n2), a2.operation = "setAdmin", t3.isChatroom ? (o3 = c2.eventHandler) === null || o3 === void 0 || o3.dispatch("onChatroomEvent", a2) : (i3 = c2.eventHandler) === null || i3 === void 0 || i3.dispatch("onGroupEvent", a2);
              }, 20: function() {
                var e5, r4, o3, i3;
                n2.type = "changeOwner", c2.onPresence && c2.onPresence(n2), t3.isChatroom ? (e5 = c2.eventHandler) === null || e5 === void 0 || e5.dispatch("onChatroomChange", n2) : (r4 = c2.eventHandler) === null || r4 === void 0 || r4.dispatch("onGroupChange", n2), a2.operation = "changeOwner", t3.isChatroom ? (o3 = c2.eventHandler) === null || o3 === void 0 || o3.dispatch("onChatroomEvent", a2) : (i3 = c2.eventHandler) === null || i3 === void 0 || i3.dispatch("onGroupEvent", a2);
              }, 19: function() {
                var e5, r4, o3, i3;
                n2.type = "direct_joined", n2.groupName = t3.mucName, c2.onPresence && c2.onPresence(n2), t3.isChatroom ? (e5 = c2.eventHandler) === null || e5 === void 0 || e5.dispatch("onChatroomChange", n2) : (r4 = c2.eventHandler) === null || r4 === void 0 || r4.dispatch("onGroupChange", n2), a2.operation = "directJoined", a2.name = t3.mucName, t3.isChatroom ? (o3 = c2.eventHandler) === null || o3 === void 0 || o3.dispatch("onChatroomEvent", a2) : (i3 = c2.eventHandler) === null || i3 === void 0 || i3.dispatch("onGroupEvent", a2);
              }, 18: function() {
                var e5, r4, o3, i3;
                n2.type = t3.isChatroom ? "leaveChatRoom" : "leaveGroup", c2.onPresence && c2.onPresence(n2), t3.isChatroom ? (e5 = c2.eventHandler) === null || e5 === void 0 || e5.dispatch("onChatroomChange", n2) : (r4 = c2.eventHandler) === null || r4 === void 0 || r4.dispatch("onGroupChange", n2), a2.operation = "memberAbsence", t3.isChatroom ? (o3 = c2.eventHandler) === null || o3 === void 0 || o3.dispatch("onChatroomEvent", a2) : (i3 = c2.eventHandler) === null || i3 === void 0 || i3.dispatch("onGroupEvent", a2);
              }, 17: function() {
                var e5, r4, o3, i3;
                n2.type = t3.isChatroom ? "memberJoinChatRoomSuccess" : "memberJoinPublicGroupSuccess", c2.onPresence && c2.onPresence(n2), t3.isChatroom ? (e5 = c2.eventHandler) === null || e5 === void 0 || e5.dispatch("onChatroomChange", n2) : (r4 = c2.eventHandler) === null || r4 === void 0 || r4.dispatch("onGroupChange", n2), a2.operation = "memberPresence", t3.isChatroom ? (o3 = c2.eventHandler) === null || o3 === void 0 || o3.dispatch("onChatroomEvent", a2) : (i3 = c2.eventHandler) === null || i3 === void 0 || i3.dispatch("onGroupEvent", a2);
              }, 16: function() {
                var e5, r4;
                n2.type = "unblock", c2.onPresence && c2.onPresence(n2), t3.isChatroom ? (e5 = c2.eventHandler) === null || e5 === void 0 || e5.dispatch("onChatroomChange", n2) : (r4 = c2.eventHandler) === null || r4 === void 0 || r4.dispatch("onGroupChange", n2);
              }, 15: function() {
                var e5, r4;
                n2.type = "block", c2.onPresence && c2.onPresence(n2), t3.isChatroom ? (e5 = c2.eventHandler) === null || e5 === void 0 || e5.dispatch("onChatroomChange", n2) : (r4 = c2.eventHandler) === null || r4 === void 0 || r4.dispatch("onGroupChange", n2);
              }, 14: function() {
                var e5, r4, o3, i3, s3, u2 = t3.isChatroom;
                if (!u2) {
                  var l2 = JSON.parse(((e5 = t3 == null ? void 0 : t3.eventInfo) === null || e5 === void 0 ? void 0 : e5.ext) || "{}", function(e6, t4) {
                    return e6 === "last_modified" ? Number(t4) : f.includes(e6) ? t4 === "true" || t4 === true : t4;
                  });
                  a2.detail = n2.detail = {}, Object.keys(l2).forEach(function(e6) {
                    var t4 = m[e6];
                    if (t4) {
                      var r5 = l2[e6];
                      a2.detail && (a2.detail[t4] = r5), n2.detail && (n2.detail[t4] = r5);
                    }
                  });
                }
                n2.type = "update", c2.onPresence && c2.onPresence(n2), u2 ? (r4 = c2.eventHandler) === null || r4 === void 0 || r4.dispatch("onChatroomChange", n2) : (o3 = c2.eventHandler) === null || o3 === void 0 || o3.dispatch("onGroupChange", n2), a2.operation = "updateInfo", u2 ? (i3 = c2.eventHandler) === null || i3 === void 0 || i3.dispatch("onChatroomEvent", a2) : (s3 = c2.eventHandler) === null || s3 === void 0 || s3.dispatch("onGroupEvent", a2);
              }, 13: function() {
                var e5, r4, o3, i3;
                n2.type = "allow", n2.reason = t3.reason, c2.onPresence && c2.onPresence(n2), t3.isChatroom ? (e5 = c2.eventHandler) === null || e5 === void 0 || e5.dispatch("onChatroomChange", n2) : (r4 = c2.eventHandler) === null || r4 === void 0 || r4.dispatch("onGroupChange", n2), a2.operation = "unblockMember", t3.isChatroom ? (o3 = c2.eventHandler) === null || o3 === void 0 || o3.dispatch("onChatroomEvent", a2) : (i3 = c2.eventHandler) === null || i3 === void 0 || i3.dispatch("onGroupEvent", a2);
              }, 12: function() {
                var e5, r4;
                n2.type = "ban", c2.onPresence && c2.onPresence(n2), t3.isChatroom ? (e5 = c2.eventHandler) === null || e5 === void 0 || e5.dispatch("onChatroomChange", n2) : (r4 = c2.eventHandler) === null || r4 === void 0 || r4.dispatch("onGroupChange", n2);
              }, 11: function() {
                var e5, r4;
                n2.type = "getBlackList", c2.onPresence && c2.onPresence(n2), t3.isChatroom ? (e5 = c2.eventHandler) === null || e5 === void 0 || e5.dispatch("onChatroomChange", n2) : (r4 = c2.eventHandler) === null || r4 === void 0 || r4.dispatch("onGroupChange", n2);
              }, 10: function() {
                var e5, r4, o3, i3;
                n2.type = "removedFromGroup", n2.kicked = n2.to, c2.onPresence && c2.onPresence(n2), t3.isChatroom ? (e5 = c2.eventHandler) === null || e5 === void 0 || e5.dispatch("onChatroomChange", n2) : (r4 = c2.eventHandler) === null || r4 === void 0 || r4.dispatch("onGroupChange", n2), a2.operation = "removeMember", t3.isChatroom ? (o3 = c2.eventHandler) === null || o3 === void 0 || o3.dispatch("onChatroomEvent", a2) : (i3 = c2.eventHandler) === null || i3 === void 0 || i3.dispatch("onGroupEvent", a2);
              }, 9: function() {
                var e5, r4, o3, i3;
                n2.type = "invite_decline", n2.kicked = n2.to, c2.onPresence && c2.onPresence(n2), t3.isChatroom ? (e5 = c2.eventHandler) === null || e5 === void 0 || e5.dispatch("onChatroomChange", n2) : (r4 = c2.eventHandler) === null || r4 === void 0 || r4.dispatch("onGroupChange", n2), a2.operation = "rejectInvite", t3.isChatroom ? (o3 = c2.eventHandler) === null || o3 === void 0 || o3.dispatch("onChatroomEvent", a2) : (i3 = c2.eventHandler) === null || i3 === void 0 || i3.dispatch("onGroupEvent", a2);
              }, 8: function() {
                var e5, r4, o3, i3;
                n2.type = "invite_accept", n2.kicked = n2.to, c2.onPresence && c2.onPresence(n2), t3.isChatroom ? (e5 = c2.eventHandler) === null || e5 === void 0 || e5.dispatch("onChatroomChange", n2) : (r4 = c2.eventHandler) === null || r4 === void 0 || r4.dispatch("onGroupChange", n2), a2.operation = "acceptInvite", t3.isChatroom ? (o3 = c2.eventHandler) === null || o3 === void 0 || o3.dispatch("onChatroomEvent", a2) : (i3 = c2.eventHandler) === null || i3 === void 0 || i3.dispatch("onGroupEvent", a2);
              }, 7: function() {
                var e5, r4, o3, i3;
                n2.type = "invite", n2.kicked = n2.to, n2.groupName = t3.mucName, c2.onPresence && c2.onPresence(n2), t3.isChatroom ? (e5 = c2.eventHandler) === null || e5 === void 0 || e5.dispatch("onChatroomChange", n2) : (r4 = c2.eventHandler) === null || r4 === void 0 || r4.dispatch("onGroupChange", n2), a2.operation = "inviteToJoin", a2.name = t3.mucName, t3.isChatroom ? (o3 = c2.eventHandler) === null || o3 === void 0 || o3.dispatch("onChatroomEvent", a2) : (i3 = c2.eventHandler) === null || i3 === void 0 || i3.dispatch("onGroupEvent", a2);
              }, 6: function() {
                var e5, r4;
                n2.type = "joinPublicGroupDeclined", c2.onPresence && c2.onPresence(n2), t3.isChatroom ? (e5 = c2.eventHandler) === null || e5 === void 0 || e5.dispatch("onChatroomChange", n2) : (r4 = c2.eventHandler) === null || r4 === void 0 || r4.dispatch("onGroupChange", n2);
              }, 5: function() {
                var e5, r4, o3, i3;
                n2.type = "joinPublicGroupSuccess", c2.onPresence && c2.onPresence(n2), t3.isChatroom ? (e5 = c2.eventHandler) === null || e5 === void 0 || e5.dispatch("onChatroomChange", n2) : (r4 = c2.eventHandler) === null || r4 === void 0 || r4.dispatch("onGroupChange", n2), a2.operation = "acceptRequest", t3.isChatroom ? (o3 = c2.eventHandler) === null || o3 === void 0 || o3.dispatch("onChatroomEvent", a2) : (i3 = c2.eventHandler) === null || i3 === void 0 || i3.dispatch("onGroupEvent", a2);
              }, 4: function() {
                var e5, r4, o3, i3;
                n2.type = "joinGroupNotifications", n2.reason = t3.reason, c2.onPresence && c2.onPresence(n2), t3.isChatroom ? (e5 = c2.eventHandler) === null || e5 === void 0 || e5.dispatch("onChatroomChange", n2) : (r4 = c2.eventHandler) === null || r4 === void 0 || r4.dispatch("onGroupChange", n2), a2.operation = "requestToJoin", t3.isChatroom ? (o3 = c2.eventHandler) === null || o3 === void 0 || o3.dispatch("onChatroomEvent", a2) : (i3 = c2.eventHandler) === null || i3 === void 0 || i3.dispatch("onGroupEvent", a2);
              }, 3: function() {
                var e5, r4;
                n2.type = "leave", c2.onPresence && c2.onPresence(n2), t3.isChatroom ? (e5 = c2.eventHandler) === null || e5 === void 0 || e5.dispatch("onChatroomChange", n2) : (r4 = c2.eventHandler) === null || r4 === void 0 || r4.dispatch("onGroupChange", n2);
              }, 2: function() {
                var e5, r4;
                n2.type = "join", c2.onPresence && c2.onPresence(n2), t3.isChatroom ? (e5 = c2.eventHandler) === null || e5 === void 0 || e5.dispatch("onChatroomChange", n2) : (r4 = c2.eventHandler) === null || r4 === void 0 || r4.dispatch("onGroupChange", n2);
              }, 1: function() {
                var e5, r4, o3, i3;
                n2.type = "deleteGroupChat", c2.onPresence && c2.onPresence(n2), t3.isChatroom ? (e5 = c2.eventHandler) === null || e5 === void 0 || e5.dispatch("onChatroomChange", n2) : (r4 = c2.eventHandler) === null || r4 === void 0 || r4.dispatch("onGroupChange", n2), a2.operation = "destroy", t3.isChatroom ? (o3 = c2.eventHandler) === null || o3 === void 0 || o3.dispatch("onChatroomEvent", a2) : (i3 = c2.eventHandler) === null || i3 === void 0 || i3.dispatch("onGroupEvent", a2);
              } }[e4] || function() {
                console.error("No match operation ".concat(e4));
              })();
            }.call(this, r2);
          }, y = r(1688), E = function(e3) {
            var t3, r2, n2, o2, i2, a2, c2 = this.root.lookup("easemob.pb.StatisticsBody").decode(e3.payload);
            switch (c2.operation) {
              case 0:
                this.onStatisticMessage && this.onStatisticMessage(c2), (t3 = this.eventHandler) === null || t3 === void 0 || t3.dispatch("onStatisticMessage", c2);
                break;
              case 1:
                a2 = s.Z.create({ type: u.E.WEBIM_CONNCTION_USER_REMOVED, message: "user has been removed" }), this.logOut = true, this.onError && this.onError(a2), (r2 = this.eventHandler) === null || r2 === void 0 || r2.dispatch("onError", a2);
                break;
              case 2:
                a2 = s.Z.create({ type: u.E.WEBIM_CONNCTION_USER_LOGIN_ANOTHER_DEVICE, message: "the user is already logged on another device" }), this.logOut = true, this.onError && this.onError(a2), (n2 = this.eventHandler) === null || n2 === void 0 || n2.dispatch("onError", a2);
                break;
              case 3:
                a2 = s.Z.create({ type: u.E.WEBIM_CONNCTION_USER_KICKED_BY_CHANGE_PASSWORD, message: "the user was kicked by changing password" }), this.logOut = true, this.onError && this.onError(a2), (o2 = this.eventHandler) === null || o2 === void 0 || o2.dispatch("onError", a2);
                break;
              case 4:
                a2 = s.Z.create({ type: u.E.WEBIM_CONNCTION_USER_KICKED_BY_OTHER_DEVICE, message: "the user was kicked by other device" }), this.logOut = true, this.onError && this.onError(a2), (i2 = this.eventHandler) === null || i2 === void 0 || i2.dispatch("onError", a2);
                break;
              default:
                d.kg.error("handleStatisticsMsg:", c2);
            }
          }, v = (r(1367), r(3718));
          function T(e3) {
            var t3, r2 = [], n2 = [], o2 = e3.data;
            o2 && o2.values && o2.values.forEach(function(e4) {
              Object.entries(e4.status).forEach(function(e5) {
                n2.push({ device: e5[0], status: Number(e5[1]) });
              }), r2.push({ userId: e4.uid, lastTime: Number(e4.last_time), expire: Number(e4.expiry), ext: e4.ext, statusDetails: n2 });
            }), this.onPresenceStatusChange && this.onPresenceStatusChange(r2), (t3 = this.eventHandler) === null || t3 === void 0 || t3.dispatch("onPresenceStatusChange", r2);
          }
          function _(e3) {
            var t3 = this;
            e3.data.forEach(function(e4) {
              var r2, n2 = { from: e4.from, to: e4.to, chatType: e4.channel_type === "chat" ? "singleChat" : "groupChat", messageId: e4.messageId, reactions: e4.reactions, ts: e4.ts };
              (r2 = t3.eventHandler) === null || r2 === void 0 || r2.dispatch("onReactionChange", n2);
            });
          }
          function O(e3) {
            var t3, r2, n2, o2;
            if (e3.data) {
              var i2 = e3.data, a2 = { id: i2.id || "", name: i2.name || "", parentId: i2.muc_parent_id || "", messageId: i2.msg_parent_id || "", timestamp: i2.timestamp || 0, operator: i2.from || "", operation: "" };
              switch (i2.operation) {
                case "create":
                  a2.operation = "create", a2.createTimestamp = a2.timestamp, a2.messageCount = 0, (t3 = this.eventHandler) === null || t3 === void 0 || t3.dispatch("onChatThreadChange", a2);
                  break;
                case "update_msg":
                  a2.operation = "update", a2.messageCount = i2.message_count, i2.last_message && JSON.stringify(i2.last_message) !== "{}" ? a2.lastMessage = (0, v.w)(i2.last_message) : JSON.stringify(i2.last_message) === "{}" && (a2.lastMessage = {}), (r2 = this.eventHandler) === null || r2 === void 0 || r2.dispatch("onChatThreadChange", a2);
                  break;
                case "update":
                  a2.operation = "update", a2.messageCount = i2.message_count, (n2 = this.eventHandler) === null || n2 === void 0 || n2.dispatch("onChatThreadChange", a2);
                  break;
                case "delete":
                  a2.operation = "destroy", (o2 = this.eventHandler) === null || o2 === void 0 || o2.dispatch("onChatThreadChange", a2);
              }
            }
          }
          function R(e3) {
            var t3, r2 = e3.data;
            if (r2.resource !== this.clientResource) {
              var n2 = { operation: "deleteRoaming", conversationId: r2.to, chatType: r2.chatType === "chat" ? "singleChat" : "groupChat", resource: r2.resource };
              (t3 = this.eventHandler) === null || t3 === void 0 || t3.dispatch("onMultiDeviceEvent", n2);
            }
          }
          var I = function(e3) {
            var t3 = c.P6.parseNotify(e3.payload);
            switch (e3.from.name, e3.to.name, t3.type) {
              case "presence":
                T.call(this, t3);
                break;
              case "reaction":
                _.call(this, t3);
                break;
              case "thread":
                O.call(this, t3);
                break;
              case "roaming_delete":
                R.call(this, t3);
                break;
              default:
                d.kg.error("unexpected notify type: ".concat(t3.type));
            }
          }, S = r(2558), A = r(8669);
          function N(e3) {
            return N = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e4) {
              return typeof e4;
            } : function(e4) {
              return e4 && typeof Symbol == "function" && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
            }, N(e3);
          }
          var C = function() {
            return C = Object.assign || function(e3) {
              for (var t3, r2 = 1, n2 = arguments.length; r2 < n2; r2++)
                for (var o2 in t3 = arguments[r2])
                  Object.prototype.hasOwnProperty.call(t3, o2) && (e3[o2] = t3[o2]);
              return e3;
            }, C.apply(this, arguments);
          };
          function b() {
            var e3 = "webim", t3 = "", r2 = "", n2 = [], o2 = new Date().valueOf();
            this.deviceId === "webim" ? (r2 = "random_" + o2.toString(), e3 = this.deviceId + "_" + r2, t3 = this.deviceId) : e3 = t3 = r2 = "webim_" + this.deviceId, this.context.jid && (this.context.jid.clientResource = e3);
            var i2 = this.root.lookup("easemob.pb.Provision"), a2 = i2.decode(n2);
            a2.compressType = this.compressType, a2.encryptType = this.encryptType, a2.osType = this.osType, a2.version = this.version, a2.deviceName = t3, a2.resource = e3, a2.deviceUuid = r2, a2.auth = "$t$" + this.token, a2.actionVersion = "v2.0", a2 = i2.encode(a2).finish();
            var s2 = this.root.lookup("easemob.pb.MSync"), c2 = s2.decode(n2);
            return c2.version = this.version, c2.guid = this.context.jid, c2.auth = "$t$" + this.token, c2.command = 3, c2.deviceId = t3, c2.serviceId = this.dataReport.getServiceId(), c2.encryptType = this.encryptType, c2.payload = a2, s2.encode(c2).finish();
          }
          function M(e3, t3) {
            var r2 = this, n2 = c.P6.getEnvInfo();
            if (n2.platform === "web" || n2.platform === "zfb" || n2.platform === "dd") {
              for (var o2 = "", i2 = 0; i2 < e3.length; i2++)
                o2 += String.fromCharCode(e3[i2]);
              return o2 = p().btoa(o2), n2.platform === "web" ? o2 : { data: o2, isBuffer: false, complete: function() {
              }, fail: function(e4) {
                e4.errMsg !== "sendSocketMessage:fail taskID not exist" && e4.errMsg !== "SocketTast.send:fail SocketTask.readyState is not OPEN" || (d.kg.debug("send message fail and reconnect"), r2.reconnect()), t3 && r2._msgHash && r2._msgHash[t3] && r2._msgHash[t3].fail({ id: t3 });
              } };
            }
            var a2 = e3;
            return { data: a2.buffer.slice(a2.byteOffset, a2.byteOffset + a2.byteLength), fail: function(e4) {
              e4.errMsg !== "sendSocketMessage:fail taskID not exist" && e4.errMsg !== "SocketTast.send:fail SocketTask.readyState is not OPEN" || r2.reconnect(), t3 && r2._msgHash && r2._msgHash[t3] && r2._msgHash[t3].fail({ id: t3 });
            } };
          }
          function w(e3, t3) {
            switch (e3.ns) {
              case 0:
                E.call(this, e3);
                break;
              case 1:
                h.Z.call(this, e3, t3);
                break;
              case 2:
                g.call(this, e3);
                break;
              case 3:
                y.Z.handleRosterMsg.call(this, e3);
                break;
              case 4:
                this.registerConfrIQHandler && this.registerConfrIQHandler(e3, t3, this);
                break;
              case 5:
                I.call(this, e3);
                break;
              default:
                d.kg.error("distributeMeta", e3);
            }
          }
          function U(e3, t3) {
            for (var r2 = function(r3) {
              var o3 = new (a())(e3[r3].id.low, e3[r3].id.high, e3[r3].id.unsigned).toString();
              if (n2._load_msg_cache.some(function(e4) {
                return e4.msgId === o3;
              }))
                return "continue";
              var i2 = e3[r3].from.name, s2 = e3[r3].to ? e3[r3].to.name : "", c2 = !!e3[r3].to && e3[r3].to.domain.indexOf("conference") !== -1;
              n2._load_msg_cache.length <= n2.max_cache_length || n2._load_msg_cache.shift(), n2._load_msg_cache.push({ msgId: o3, from: i2, to: s2, isGroup: c2 }), w.call(n2, e3[r3], t3);
            }, n2 = this, o2 = 0; o2 < e3.length; o2++)
              r2(o2);
          }
          function k(e3) {
            var t3 = this.root.lookup("easemob.pb.CommUnreadDL");
            if (t3 = t3.decode(e3.payload), this.grantType === "agoraToken") {
              var r2 = new (a())(t3.timestamp.low, t3.timestamp.high, t3.timestamp.unsigned).toString();
              this.compareTokenExpireTime(Number(r2), this.expirationTime);
            }
            if (t3.unread.length === 0)
              H.call(this);
            else
              for (var n2 = 0; n2 < t3.unread.length; n2++)
                L.call(this, t3.unread[n2].queue);
          }
          function P() {
            var e3 = [], t3 = this.root.lookup("easemob.pb.StatisticsBody"), r2 = t3.decode(e3);
            r2.operation = 0, r2 = t3.encode(r2).finish();
            var n2 = this.root.lookup("easemob.pb.Meta").decode(e3);
            n2.id = new Date().valueOf(), n2.ns = 0, n2.payload = r2;
            var o2 = this.root.lookup("easemob.pb.CommSyncUL"), i2 = o2.decode(e3);
            i2.meta = n2, i2 = o2.encode(i2).finish();
            var a2 = this.root.lookup("easemob.pb.MSync"), s2 = a2.decode(e3);
            return s2.version = this.version, s2.encryptType = [0], s2.command = 0, s2.payload = i2, a2.encode(s2).finish();
          }
          function x(e3) {
            var t3 = [], r2 = this.root.lookup("easemob.pb.CommSyncUL"), n2 = r2.decode(t3);
            n2.queue = e3, n2 = r2.encode(n2).finish();
            var o2 = this.root.lookup("easemob.pb.MSync"), i2 = o2.decode(t3);
            return i2.version = this.version, i2.encryptType = this.encryptType, i2.command = 0, i2.payload = n2, o2.encode(i2).finish();
          }
          function L(e3) {
            d.kg.debug("sendBackqueue");
            var t3 = x.call(this, e3);
            te.call(this, t3);
          }
          function j(e3, t3) {
            var r2 = [], n2 = this.root.lookup("easemob.pb.CommSyncUL"), o2 = n2.decode(r2);
            o2.queue = t3, o2.key = new (a())(e3.low, e3.high, e3.unsigned).toString(), o2 = n2.encode(o2).finish();
            var i2 = this.root.lookup("easemob.pb.MSync"), s2 = i2.decode(r2);
            return s2.version = this.version, s2.encryptType = this.encryptType, s2.command = 0, s2.payload = o2, i2.encode(s2).finish();
          }
          function D(e3, t3) {
            d.kg.debug("sendLastSession");
            var r2 = j.call(this, e3, t3);
            te.call(this, r2);
          }
          function G(e3) {
            var t3, r2 = this.root.lookup("easemob.pb.Provision").decode(e3.payload);
            if (this.context.jid && (this.context.jid.clientResource = r2.resource), this.clientResource = r2.resource, r2.status.errorCode === 0) {
              if (this.onOpened && this.onOpened(), (t3 = this.eventHandler) === null || t3 === void 0 || t3.dispatch("onConnected"), this.grantType === "agoraToken") {
                var n2 = Date.now();
                this.expiresIn = this.expirationTime - n2, this.tokenExpireTimeCountDown(this.expiresIn);
              }
              B.call(this), W.call(this), F.call(this), H.call(this);
            } else
              this.onError && this.onError({ type: u.E.WEBIM_CONNECTION_ERROR, message: "provision error", data: r2 });
          }
          function B() {
            if (this.unSendMsgArr.length > 0) {
              for (var e3 = 0; e3 < this.unSendMsgArr.length; e3++) {
                var t3 = this.unSendMsgArr[e3];
                ee.call(this, t3);
              }
              this.unSendMsgArr = [];
            }
          }
          function H() {
            var e3 = P.call(this);
            te.call(this, e3);
          }
          function F() {
            var e3 = Z.call(this);
            te.call(this, e3);
          }
          function W() {
            var e3 = this;
            q.call(this), this.heartBeatID = setInterval(function() {
              F.call(e3);
            }, this.heartBeatWait);
          }
          function q() {
            clearInterval(this.heartBeatID);
          }
          function Z() {
            var e3 = this.root.lookup("easemob.pb.MSync"), t3 = e3.decode([]);
            return t3.version = this.version, t3.encryptType = this.encryptType, t3.command = 1, e3.encode(t3).finish();
          }
          function K(e3, t3) {
            return e3.some(function(e4) {
              return e4.name === t3.name;
            });
          }
          function V(e3) {
            var t3 = this, r2 = this.root.lookup("easemob.pb.CommNotice").decode(e3.payload);
            K(this._queues, r2.queue) || this.clientResource === r2.queue.clientResource && r2.queue.name === this.context.userId || (this._queues.push(r2.queue), this.qTimer && clearTimeout(this.qTimer), this.qTimer = setTimeout(function() {
              var e4 = r2.queue;
              K(t3._queues, e4) && (L.call(t3, r2.queue), d.kg.debug("\u2B07q:", e4));
            }, 1e4), this._queues.length === 1 && L.call(this, r2.queue));
          }
          function z(e3) {
            return t3 = this, r2 = void 0, o2 = function() {
              var t4, r3, n3, o3, i2, a2, s2, u2;
              return function(e4, t5) {
                var r4, n4, o4, i3, a3 = { label: 0, sent: function() {
                  if (1 & o4[0])
                    throw o4[1];
                  return o4[1];
                }, trys: [], ops: [] };
                return i3 = { next: s3(0), throw: s3(1), return: s3(2) }, typeof Symbol == "function" && (i3[Symbol.iterator] = function() {
                  return this;
                }), i3;
                function s3(i4) {
                  return function(s4) {
                    return function(i5) {
                      if (r4)
                        throw new TypeError("Generator is already executing.");
                      for (; a3; )
                        try {
                          if (r4 = 1, n4 && (o4 = 2 & i5[0] ? n4.return : i5[0] ? n4.throw || ((o4 = n4.return) && o4.call(n4), 0) : n4.next) && !(o4 = o4.call(n4, i5[1])).done)
                            return o4;
                          switch (n4 = 0, o4 && (i5 = [2 & i5[0], o4.value]), i5[0]) {
                            case 0:
                            case 1:
                              o4 = i5;
                              break;
                            case 4:
                              return a3.label++, { value: i5[1], done: false };
                            case 5:
                              a3.label++, n4 = i5[1], i5 = [0];
                              continue;
                            case 7:
                              i5 = a3.ops.pop(), a3.trys.pop();
                              continue;
                            default:
                              if (!((o4 = (o4 = a3.trys).length > 0 && o4[o4.length - 1]) || i5[0] !== 6 && i5[0] !== 2)) {
                                a3 = 0;
                                continue;
                              }
                              if (i5[0] === 3 && (!o4 || i5[1] > o4[0] && i5[1] < o4[3])) {
                                a3.label = i5[1];
                                break;
                              }
                              if (i5[0] === 6 && a3.label < o4[1]) {
                                a3.label = o4[1], o4 = i5;
                                break;
                              }
                              if (o4 && a3.label < o4[2]) {
                                a3.label = o4[2], a3.ops.push(i5);
                                break;
                              }
                              o4[2] && a3.ops.pop(), a3.trys.pop();
                              continue;
                          }
                          i5 = t5.call(e4, a3);
                        } catch (e5) {
                          i5 = [6, e5], n4 = 0;
                        } finally {
                          r4 = o4 = 0;
                        }
                      if (5 & i5[0])
                        throw i5[1];
                      return { value: i5[0] ? i5[1] : void 0, done: true };
                    }([i4, s4]);
                  };
                }
              }(this, function(l2) {
                switch (l2.label) {
                  case 0:
                    if (t4 = c.P6.getEnvInfo(), this.name !== "miniCore")
                      return [3, 7];
                    u2 = this.root.lookup("easemob.pb.MSync"), r3 = void 0, l2.label = 1;
                  case 1:
                    return l2.trys.push([1, 5, , 6]), Object.prototype.toString.call(e3.data) !== "[object Blob]" ? [3, 3] : [4, e3.data.arrayBuffer()];
                  case 2:
                    return r3 = l2.sent(), [3, 4];
                  case 3:
                    d.kg.debug("received message: ".concat(e3.data)), l2.label = 4;
                  case 4:
                    return [3, 6];
                  case 5:
                    throw l2.sent(), new Error("decode message fail.");
                  case 6:
                    return n3 = new Uint8Array(r3), [2, u2.decode(n3)];
                  case 7:
                    if (t4.platform === "web" || t4.platform === "zfb" || t4.platform === "dd") {
                      for (o3 = p().atob(e3.data), i2 = [], a2 = 0, s2 = o3.length; a2 < s2; ++a2)
                        i2.push(o3.charCodeAt(a2));
                      return [2, (u2 = this.root.lookup("easemob.pb.MSync")).decode(i2)];
                    }
                    return [2, (u2 = this.root.lookup("easemob.pb.MSync")).decode(e3.data)];
                  case 8:
                    return [2];
                }
              });
            }, new ((n2 = void 0) || (n2 = Promise))(function(e4, i2) {
              function a2(e5) {
                try {
                  c2(o2.next(e5));
                } catch (e6) {
                  i2(e6);
                }
              }
              function s2(e5) {
                try {
                  c2(o2.throw(e5));
                } catch (e6) {
                  i2(e6);
                }
              }
              function c2(t4) {
                var r3;
                t4.done ? e4(t4.value) : (r3 = t4.value, r3 instanceof n2 ? r3 : new n2(function(e5) {
                  e5(r3);
                })).then(a2, s2);
              }
              c2((o2 = o2.apply(t3, r2 || [])).next());
            });
            var t3, r2, n2, o2;
          }
          function J(e3) {
            var t3 = this;
            e3.then(function(e4) {
              switch (e4.command) {
                case 0:
                  X.call(t3, e4);
                  break;
                case 1:
                  k.call(t3, e4);
                  break;
                case 2:
                  V.call(t3, e4);
                  break;
                case 3:
                  G.call(t3, e4);
                  break;
                default:
                  d.kg.error("unexpected msync command: ".concat(e4.command));
              }
            });
          }
          function X(e3) {
            var t3, r2, n2, o2, i2, c2, l2, p2, h2, d2, f2 = this.root.lookup("easemob.pb.CommSyncDL");
            f2 = f2.decode(e3.payload);
            var m2 = new (a())(f2.serverId.low, f2.serverId.high, f2.serverId.unsigned).toString(), g2 = new (a())(f2.metaId.low, f2.metaId.high, f2.metaId.unsigned).toString();
            if (f2.metas.length !== 0)
              try {
                U.call(this, f2.metas, f2.status);
              } catch (e4) {
                var y2 = s.Z.create({ type: u.E.WEBIM_LOAD_MSG_ERROR, message: "decode message error", data: e4 });
                this.onError && this.onError(y2), (t3 = this.eventHandler) === null || t3 === void 0 || t3.dispatch("onError", y2);
              } finally {
                if (f2.isLast) {
                  var E2 = -1;
                  (_2 = this._queues.some(function(e4, t4) {
                    return e4.name === f2.name && (E2 = t4, true);
                  })) && E2 > 0 && this._queues.splice(E2, 1), this._queues.length > 0 && (L.call(this, this._queues[0]), this.qTimer && clearTimeout(this.qTimer));
                } else
                  D.call(this, f2.nextKey, f2.queue);
              }
            else if (f2.isLast) {
              var v2 = -1;
              (_2 = this._queues.some(function(e4, t4) {
                return e4.name === f2.queue.name && (v2 = t4, true);
              })) && this._queues.splice(v2, 1), this._queues.length > 0 && (L.call(this, this._queues[0]), this.qTimer && clearTimeout(this.qTimer));
            } else if (f2.status && f2.status.errorCode === 0) {
              var T2 = -1, _2 = this._queues.some(function(e4, t4) {
                var r3;
                return e4.name === ((r3 = f2.queue) === null || r3 === void 0 ? void 0 : r3.name) && (T2 = t4, true);
              });
              if (_2 && this._queues.splice(T2, 1), this._queues.length > 0 && (L.call(this, this._queues[0]), this.qTimer && clearTimeout(this.qTimer)), (I2 = S.Nl.get(g2)) && ((0, I2.rpt)({ isEndApi: true, data: { isSuccess: 1, requestName: I2.requestName, requestMethod: "WEBSOCKET", requestUrl: this.url, code: A.dd.success } }), S.Nl.delete(g2)), this._msgHash[g2]) {
                S.TJ.has(g2) && (S.TJ.get(g2).rpt({ isEndApi: true, data: { isSuccess: 1, requestMethod: "WEBSOCKET", requestUrl: this.url, code: A.dd.success, msgId: m2 } }), S.TJ.delete(g2));
                try {
                  ((r2 = this._msgHash[g2]) === null || r2 === void 0 ? void 0 : r2.resolve) instanceof Function && this._msgHash[g2].resolve({ localMsgId: g2, serverMsgId: m2 }), ((n2 = this._msgHash[g2]) === null || n2 === void 0 ? void 0 : n2.success) instanceof Function && this._msgHash[g2].success(g2, m2);
                } catch (e4) {
                  y2 = s.Z.create({ type: u.E.WEBIM_CONNCTION_CALLBACK_INNER_ERROR, message: "when executing success function error", data: e4 }), this.onError && this.onError(y2), (o2 = this.eventHandler) === null || o2 === void 0 || o2.dispatch("onError", y2);
                }
                this.onReceivedMessage && this.onReceivedMessage({ id: g2, mid: m2, to: this._msgHash[g2].to, time: 0 }), (i2 = this.eventHandler) === null || i2 === void 0 || i2.dispatch("onReceivedMessage", { id: g2, mid: m2, to: this._msgHash[g2].to }), delete this._msgHash[g2];
              }
            } else if (f2.status && f2.status.errorCode === 15)
              ((c2 = this._msgHash[g2]) === null || c2 === void 0 ? void 0 : c2.fail) instanceof Function && this._msgHash[g2].fail({ type: u.E.SERVICE_NOT_ALLOW_MESSAGING_MUTE, reason: "you were muted" }), this._msgHash[g2].reject instanceof Function && this._msgHash[g2].reject({ type: u.E.SERVICE_NOT_ALLOW_MESSAGING_MUTE, reason: "you were muted" });
            else if (f2.status && f2.status.errorCode === 1) {
              var O2 = void 0;
              switch (f2.status.reason) {
                case "blocked":
                  O2 = u.E.PERMISSION_DENIED;
                  break;
                case "group not found":
                  O2 = u.E.GROUP_NOT_EXIST;
                  break;
                case "not in group or chatroom":
                  O2 = u.E.GROUP_NOT_JOINED;
                  break;
                case "exceed recall time limit":
                  O2 = u.E.MESSAGE_RECALL_TIME_LIMIT;
                  break;
                case "message recall disabled":
                  O2 = u.E.SERVICE_NOT_ENABLED;
                  break;
                case "not in group or chatroom white list":
                  O2 = u.E.SERVICE_NOT_ALLOW_MESSAGING;
                  break;
                case "nonroster":
                  O2 = u.E.USER_NOT_FRIEND, f2.status.reason = "not contact";
                  break;
                case "group is disabled":
                  O2 = u.E.GROUP_IS_DISABLED, f2.status.reason = "group is disabled";
                  break;
                default:
                  O2 = f2.status.reason.includes("moderation") ? u.E.MESSAGE_MODERATION_BLOCKED : u.E.SERVER_UNKNOWN_ERROR;
              }
              if (this._msgHash[g2]) {
                var R2 = s.Z.create({ type: O2, message: f2.status.reason || "", data: { id: g2, mid: m2 } });
                this._msgHash[g2].reject instanceof Function && this._msgHash[g2].reject(R2), this._msgHash[g2].fail instanceof Function && this._msgHash[g2].fail({ type: O2, reason: f2.status.reason ? f2.status.reason : "", data: { id: g2, mid: m2 } });
              }
            } else if (f2.status && f2.status.errorCode === 7)
              f2.status.reason === "sensitive words" && this._msgHash[g2] ? (R2 = s.Z.create({ type: u.E.MESSAGE_INCLUDE_ILLEGAL_CONTENT, message: "sensitive words", data: { id: g2, mid: m2 } }), this._msgHash[g2].reject instanceof Function && this._msgHash[g2].reject(R2), this._msgHash[g2].fail instanceof Function && this._msgHash[g2].fail({ type: u.E.MESSAGE_INCLUDE_ILLEGAL_CONTENT, data: { id: g2, mid: m2, reason: "sensitive words" } })) : f2.status.reason === "blocked by mod_antispam" && this._msgHash[g2] ? (R2 = s.Z.create({ type: u.E.MESSAGE_INCLUDE_ILLEGAL_CONTENT, message: "blocked by mod_antispam", data: { id: g2, mid: m2 } }), this._msgHash[g2].reject instanceof Function && this._msgHash[g2].reject(R2), this._msgHash[g2].fail instanceof Function && this._msgHash[g2].fail({ type: u.E.MESSAGE_INCLUDE_ILLEGAL_CONTENT, data: { id: g2, mid: m2, reason: "blocked by mod_antispam" } })) : f2.status.reason === "user is mute" && this._msgHash[g2] ? (R2 = s.Z.create({ type: u.E.USER_MUTED_BY_ADMIN, message: "user is mute", data: { id: g2, mid: m2 } }), this._msgHash[g2].reject instanceof Function && this._msgHash[g2].reject(R2), this._msgHash[g2].fail instanceof Function && this._msgHash[g2].fail(R2)) : f2.status.reason === "traffic limit" && this._msgHash[g2] && (R2 = s.Z.create({ type: u.E.MESSAGE_CURRENT_LIMITING, message: "traffic limit", data: { id: g2, mid: m2 } }), this._msgHash[g2].reject instanceof Function && this._msgHash[g2].reject(R2), this._msgHash[g2].fail instanceof Function && this._msgHash[g2].fail(R2));
            else if (f2.status && f2.status.errorCode === 19)
              this._msgHash[g2] && (S.TJ.has(g2) && (S.TJ.get(g2).rpt({ isEndApi: true, data: { isSuccess: 0, requestMethod: "WEBSOCKET", requestUrl: this.url, code: u.E.MESSAGE_EXTERNAL_LOGIC_BLOCKED, codeDesc: f2.status.reason || "", msgId: m2 } }), S.TJ.delete(g2)), R2 = s.Z.create({ type: u.E.MESSAGE_EXTERNAL_LOGIC_BLOCKED, message: f2.status.reason || "", data: { id: g2, mid: m2 } }), this._msgHash[g2].reject instanceof Function && this._msgHash[g2].reject(R2), this._msgHash[g2].fail instanceof Function && this._msgHash[g2].fail({ type: u.E.MESSAGE_EXTERNAL_LOGIC_BLOCKED, data: { id: g2, mid: m2, reason: f2.status.reason } }));
            else if (this._msgHash[g2]) {
              S.TJ.has(g2) && (S.TJ.get(g2).rpt({ isEndApi: true, data: { isSuccess: 0, requestMethod: "WEBSOCKET", requestUrl: this.url, code: u.E.WEBIM_LOAD_MSG_ERROR, codeDesc: ((l2 = f2.status) === null || l2 === void 0 ? void 0 : l2.reason) || "", msgId: m2 } }), S.TJ.delete(g2));
              try {
                R2 = s.Z.create({ type: u.E.WEBIM_LOAD_MSG_ERROR, message: ((p2 = f2.status) === null || p2 === void 0 ? void 0 : p2.reason) || "", data: { id: g2, mid: m2, reason: f2.status && f2.status.reason } }), this._msgHash[g2].reject instanceof Function && this._msgHash[g2].reject(R2), this._msgHash[g2].fail instanceof Function && this._msgHash[g2].fail({ type: u.E.WEBIM_LOAD_MSG_ERROR, data: { errorCode: f2.status && f2.status.errorCode, reason: f2.status && f2.status.reason } });
              } catch (e4) {
                y2 = s.Z.create({ type: u.E.WEBIM_CONNCTION_CALLBACK_INNER_ERROR, message: "when executing fail function error", data: e4 }), this.onError && this.onError(y2), (h2 = this.eventHandler) === null || h2 === void 0 || h2.dispatch("onError", y2);
              }
              delete this._msgHash[g2];
            } else {
              var I2;
              S.TJ.has(g2) && (S.TJ.get(g2).rpt({ isEndApi: true, data: { isSuccess: 0, requestMethod: "WEBSOCKET", requestUrl: this.url, code: u.E.WEBIM_CONNCTION_CALLBACK_INNER_ERROR, codeDesc: "on message error", msgId: m2 } }), S.TJ.delete(g2)), (I2 = S.Nl.get(g2)) && ((0, I2.rpt)({ isEndApi: true, data: { isSuccess: 0, requestName: I2.requestName, requestMethod: "WEBSOCKET", requestUrl: this.url, code: A.dd.failed, codeDesc: "on message error" } }), S.Nl.delete(g2)), y2 = s.Z.create({ type: u.E.WEBIM_CONNCTION_CALLBACK_INNER_ERROR, message: "on message error" }), this.onError && this.onError(y2), (d2 = this.eventHandler) === null || d2 === void 0 || d2.dispatch("onError", y2);
            }
          }
          function Y(e3) {
            var t3 = [], r2 = this.root.lookup("easemob.pb.KeyValue"), n2 = [];
            for (var o2 in e3) {
              var i2 = r2.decode(t3);
              i2.key = o2, N(e3[o2]) === "object" ? (i2.type = 8, i2.stringValue = JSON.stringify(e3[o2])) : typeof e3[o2] == "string" ? (i2.type = 7, i2.stringValue = e3[o2]) : typeof e3[o2] == "boolean" ? (i2.type = 1, i2.varintValue = e3[o2] === true ? 1 : 0) : Number.isInteger(e3[o2]) ? (i2.type = 2, i2.varintValue = e3[o2]) : (i2.type = 6, i2.doubleValue = e3[o2]), n2.push(i2);
            }
            return n2;
          }
          function $2(e3) {
            var t3, r2, n2 = [];
            if (this.root) {
              var o2, i2 = this.root.lookup("easemob.pb.MessageBody.Content").decode(n2);
              switch (o2 = !e3.group && ((t3 = e3 == null ? void 0 : e3.chatType) === null || t3 === void 0 ? void 0 : t3.toLowerCase()) !== "groupchat" || e3.roomType ? e3.group && e3.roomType || ((r2 = e3 == null ? void 0 : e3.chatType) === null || r2 === void 0 ? void 0 : r2.toLowerCase()) === "chatroom" ? "chatRoom" : "singleChat" : "groupChat", e3.type) {
                case "txt":
                  i2.type = 0, i2.text = e3.msg;
                  break;
                case "img":
                  i2.type = 1, e3.body ? (i2.displayName = e3.body.filename, i2.remotePath = e3.body.url, i2.secretKey = e3.body.secret, i2.fileLength = e3.body.file_length, i2.size = e3.body.size, i2.thumbnailDisplayName = e3.body.filename) : e3.file ? (i2.displayName = e3.file.filename, i2.remotePath = e3.file.url, i2.secretKey = e3.file.secret, i2.fileLength = e3.file.file_length, i2.size = e3.file.size, i2.thumbnailDisplayName = e3.file.filename) : (i2.displayName = e3.filename, i2.remotePath = e3.url, i2.secretKey = e3.secret, i2.fileLength = e3.file_length, i2.size = e3.size, i2.thumbnailDisplayName = e3.filename);
                  break;
                case "video":
                  i2.type = 2, i2.displayName = e3.body.filename, i2.remotePath = e3.body.url, i2.secretKey = e3.body.secret, i2.fileLength = e3.body.file_length, i2.duration = e3.body.length, i2.thumbnailDisplayName = e3.body.filename;
                  break;
                case "loc":
                  i2.type = 3, i2.latitude = e3.lat, i2.longitude = e3.lng, i2.address = e3.addr, i2.buildingName = e3.buildingName, i2.latitude = e3.lat;
                  break;
                case "audio":
                  i2.type = 4, i2.displayName = e3.body.filename, i2.remotePath = e3.body.url, i2.secretKey = e3.body.secret, i2.fileLength = e3.body.file_length, i2.duration = e3.body.length, i2.thumbnailDisplayName = e3.body.filename;
                  break;
                case "file":
                  i2.type = 5, i2.displayName = e3.body.filename, i2.remotePath = e3.body.url, i2.secretKey = e3.body.secret, i2.fileLength = e3.body.file_length, i2.size = e3.body.size, i2.thumbnailDisplayName = e3.body.filename;
                  break;
                case "cmd":
                  i2.type = 6, i2.action = e3.action;
                  break;
                case "custom":
                  i2.type = 7, i2.customEvent = e3.customEvent, i2.customExts = Y.call(this, e3.customExts);
              }
              var a2 = [];
              e3.ext && (a2 = Y.call(this, e3.ext));
              var s2 = this.root.lookup("easemob.pb.MessageBody"), c2 = s2.decode(n2);
              c2.from = { name: this.context.jid.name }, c2.to = { name: e3.to }, e3.type === "channel" ? c2.type = 7 : e3.type === "recall" ? (c2.type = 6, c2.ackMessageId = e3.ackId) : e3.type === "delivery" ? (c2.type = 5, c2.ackMessageId = e3.ackId) : e3.type === "read" ? (c2.type = 4, c2.ackMessageId = e3.ackId, o2 === "groupChat" && (c2.msgConfig = { allowGroupAck: true }, c2.ackContent = e3.ackContent)) : o2 === "chatRoom" ? c2.type = 3 : o2 === "groupChat" ? (c2.type = 2, e3.msgConfig && (c2.msgConfig = { allowGroupAck: true })) : o2 === "singleChat" && (c2.type = 1), c2.contents = [i2], c2.ext = a2;
              var l2 = function(e4) {
                var t4 = {};
                return "translations" in e4 && (t4.translations = e4.translations), "isChatThread" in e4 && e4.isChatThread && (t4.thread = {}), Object.keys(t4).length > 0 ? JSON.stringify(t4) : "";
              }(e3);
              l2 && (c2.meta = l2), c2 = s2.encode(c2).finish();
              var p2 = this.root.lookup("easemob.pb.Meta").decode(n2);
              p2.id = e3.id;
              var h2 = "easemob.com";
              o2 !== "chatRoom" && o2 !== "groupChat" || (h2 = "conference.easemob.com"), p2.to = { appKey: this.appKey, name: e3.to, domain: h2 }, o2 === "chatRoom" && (p2.ext = Y.call(this, function(e4) {
                return { chatroom_msg_tag: e4.priority === "high" ? 0 : e4.priority === "low" ? 2 : 1 };
              }(e3))[0]), p2.ns = 1, p2.payload = c2;
              var d2 = this.root.lookup("easemob.pb.CommSyncUL"), f2 = d2.decode(n2);
              f2.meta = p2, f2 = d2.encode(f2).finish();
              var m2 = this.root.lookup("easemob.pb.MSync"), g2 = m2.decode(n2);
              return g2.version = this.version, g2.encryptType = this.encryptType, g2.command = 0, g2.payload = f2, m2.encode(g2).finish();
            }
            e3.fail && e3.fail({ type: u.E.WEBIM_CONNCTION_CLIENT_OFFLINE, message: "Not logged in" });
          }
          function Q(e3) {
            var t3 = this;
            if (!e3.file)
              return e3;
            var r2 = C({}, e3);
            return r2.accessToken = this.token, r2.appKey = this.appKey, r2.apiUrl = this.apiUrl, r2.body && r2.body.url ? $2.call(this, r2) : new Promise(function(n2, o2) {
              var i2 = r2.onFileUploadComplete;
              r2.onFileUploadComplete = function(n3) {
                var o3, a2;
                if (n3.entities[0]["file-metadata"]) {
                  var s2 = n3.entities[0]["file-metadata"]["content-length"];
                  r2.file_length = s2, r2.filetype = n3.entities[0]["file-metadata"]["content-type"], s2 > 204800 && (r2.thumbnail = true);
                }
                r2.body = { type: r2.type || "file", secret: n3.entities[0]["share-secret"], filename: r2.file.filename || r2.filename, url: (t3.isHttpDNS ? t3.apiUrl + n3.uri.substr(n3.uri.indexOf("/", 9)) : n3.uri) + "/" + n3.entities[0].uuid, length: r2.length || 0, filetype: r2.filetype || r2.file.filetype, file_length: ((a2 = (o3 = r2.file) === null || o3 === void 0 ? void 0 : o3.data) === null || a2 === void 0 ? void 0 : a2.size) || 0, size: { width: r2.width || 0, height: r2.height || 0 } }, r2.file.url = n3.uri, e3.secret = n3.entities[0]["share-secret"];
                var c2 = (t3.isHttpDNS ? t3.apiUrl + n3.uri.substr(n3.uri.indexOf("/", 9)) : n3.uri) + "/" + n3.entities[0].uuid;
                e3.url = c2, n3.url = c2, r2.type === "img" && (e3.thumb = "".concat(c2, "?thumbnail=true"), n3.thumb = "".concat(c2, "?thumbnail=true")), i2 instanceof Function && i2(n3, r2.id);
                var u2 = $2.call(t3, r2);
                S.TJ.size <= S.F3 && S.TJ.set(r2.id, { rpt: t3.dataReport.geOperateFun({ operationName: A.fI.SEND_MSG }) }), te.call(t3, u2);
              }, c.P6.uploadFile.call(t3, r2, A.fI.UPLOAD_MSG_ATTACH);
            });
          }
          function ee(e3) {
            var t3 = this;
            return new Promise(function(r2, n2) {
              var o2, i2;
              if (t3.logOut)
                return n2({ type: u.E.WEBIM_CONNECTION_CLOSED, message: "not login" });
              if (!e3.id || typeof e3.id != "string" || e3.id === "")
                return n2({ type: u.E.MESSAGE_PARAMETER_ERROR, message: 'Missing required parameter: "id"' });
              if (!e3.to || typeof e3.to != "string" || e3.to === "")
                return n2({ type: u.E.MESSAGE_PARAMETER_ERROR, message: 'Missing required parameter: "to"' });
              var a2 = e3.type === "file" || e3.type === "img" || e3.type === "audio" || e3.type === "video", s2 = e3.type === "delivery" || e3.type === "read" || e3.type === "channel";
              if (e3.id && ((!a2 && !s2 || a2 && t3.useOwnUploadFun) && S.TJ.size <= S.F3 && S.TJ.set(e3.id, { rpt: t3.dataReport.geOperateFun({ operationName: e3.type === "recall" ? A.fI.SEND_RECALL_MSG : A.fI.SEND_MSG }) }), t3._msgHash[e3.id] = C(C({}, e3), { resolve: r2, reject: n2 })), a2 && e3.file)
                return Q.call(t3, e3);
              if (e3.type === "txt" && ((o2 = e3.msgConfig) === null || o2 === void 0 ? void 0 : o2.languages) && Array.isArray((i2 = e3.msgConfig) === null || i2 === void 0 ? void 0 : i2.languages) && e3.msgConfig.languages.length > 0) {
                var c2 = t3.translateMessage || t3.translation.translateMessage;
                if (!c2)
                  throw new Error("there is no method to translate message");
                c2({ text: e3.msg, languages: e3.msgConfig.languages }).then(function(r3) {
                  var n3, o3 = (n3 = r3.data[0]) === null || n3 === void 0 ? void 0 : n3.translations;
                  o3 = o3.map(function(e4) {
                    return { code: e4.to, text: e4.text };
                  }), e3.translations = o3;
                  var i3 = $2.call(t3, e3);
                  te.call(t3, i3, e3.id);
                }).catch(function(e4) {
                  n2(e4);
                });
              } else {
                var l2 = $2.call(t3, e3);
                te.call(t3, l2, e3.id);
              }
            });
          }
          function te(e3, t3) {
            if (!this.isOpened())
              return this.unSendMsgArr.push(e3), !this.logOut && this.autoReconnectNumTotal < this.autoReconnectNumMax && (this.autoReconnectNumTotal <= this.socketHost.length && this.isHttpDNS || !this.isHttpDNS) && (d.kg.debug("need to reconnect", this.autoReconnectNumTotal, this.autoReconnectNumMax), this.offLineSendConnecting = true, this.reconnect()), void (this.onError && this.onError({ type: u.E.WEBIM_CONNCTION_DISCONNECTED, message: "websocket has been disconnected" }));
            var r2;
            r2 = this.name === "miniCore" ? e3 : M.call(this, e3, t3), this.sock.send(r2);
          }
          var re = function(e3, t3) {
            return e3.send = ee, e3.sendMsg = ee, d.kg.debug("init Msync by ".concat(e3.name)), { generateProvision: b.bind(e3), base64transform: M.bind(e3), distributeMeta: w.bind(e3), decodeMeta: U.bind(e3), decodeUnreadDL: k.bind(e3), _rebuild: P.bind(e3), _lastsession: j.bind(e3), receiveProvision: G.bind(e3), isInQueue: K.bind(e3), decodeNotice: V.bind(e3), decodeMSync: z.bind(e3), distributeMSync: J.bind(e3), encodeChatMsg: $2.bind(e3), upLoadFile: Q.bind(e3), send: ee.bind(e3), stopHeartBeat: q.bind(e3) };
          }, ne = function() {
            function e3(e4, t3, r2) {
              this.handlerData = {}, this.handlerData = {}, e4.addEventHandler = this.addEventHandler.bind(this), e4.removeEventHandler = this.removeEventHandler.bind(this);
            }
            return e3.prototype.addEventHandler = function(e4, t3) {
              this.handlerData[e4] = t3;
            }, e3.prototype.removeEventHandler = function(e4) {
              delete this.handlerData[e4];
            }, e3.prototype.dispatch = function(e4, t3) {
              for (var r2 in d.kg.debug("dispatch event: " + e4, t3 || ""), this.handlerData) {
                var n2 = this.handlerData[r2][e4];
                n2 && n2(t3);
              }
            }, e3;
          }(), oe = function() {
          };
          function ie(e3) {
            this.onOpened = e3.onOpened || oe, this.onPresence = e3.onPresence || oe, this.onTextMessage = e3.onTextMessage || oe, this.onPictureMessage = e3.onPictureMessage || oe, this.onAudioMessage = e3.onAudioMessage || oe, this.onVideoMessage = e3.onVideoMessage || oe, this.onFileMessage = e3.onFileMessage || oe, this.onLocationMessage = e3.onLocationMessage || oe, this.onCmdMessage = e3.onCmdMessage || oe, this.onCustomMessage = e3.onCustomMessage || oe, this.onReceivedMessage = e3.onReceivedMessage || oe, this.onDeliveredMessage = e3.onDeliveredMessage || oe, this.onReadMessage = e3.onReadMessage || oe, this.onRecallMessage = e3.onRecallMessage || oe, this.onChannelMessage = e3.onChannelMessage || oe, this.onError = e3.onError || oe, this.onOffline = e3.onOffline || oe, this.onOnline = e3.onOnline || oe, this.onStatisticMessage = e3.onStatisticMessage || oe, this.onContactInvited = e3.onContactInvited || oe, this.onContactAgreed = e3.onContactAgreed || oe, this.onContactRefuse = e3.onContactRefuse || oe, this.onContactDeleted = e3.onContactDeleted || oe, this.onContactAdded = e3.onContactAdded || oe, this.onTokenWillExpire = e3.onTokenWillExpire || oe, this.onTokenExpired = e3.onTokenExpired || oe, this.onClosed = e3.onClosed || oe, this.onPresenceStatusChange = e3.onPresenceStatusChange || oe;
          }
          r(5233);
          var ae = { biz: "", debug: false, token: "" }, se = "https://data-reporting.agora.io/report", ce = "https://data-reporting.sh.agoralab.co/report", ue = function(e3) {
            var t3 = Number(A.C8[e3]);
            return t3 === A.C8.USER_LOGIN ? "MANUALLOGIN" : t3 === A.C8.MSYNC_SENDMESSAGE ? "SENDMESSAGE" : t3 > A.C8.UNKNOWOPERATION && t3 < A.C8.REST_OPERATE ? "REST" : t3 > A.C8.REST_OPERATE && t3 < A.C8.MSYNC_OPERATE ? "MESSAGE" : t3 > A.C8.MSYNC_OPERATE && t3 < A.C8.ROSTER_OPERATE ? "ROSTER" : t3 > A.C8.ROSTER_OPERATE && t3 < A.C8.USER_OPERATE ? "USER" : t3 > A.C8.USER_OPERATE && t3 < A.C8.GROUP_OPERATE ? "GROUP" : t3 > A.C8.GROUP_OPERATE && t3 < A.C8.CHATROOM_OPERATE ? "CHATROOM" : "OPERATION";
          }, le = function() {
            return new Date().getTime();
          }, pe = function(e3) {
            return [c.iw.BAIDU, c.iw.WX, c.iw.DD, c.iw.ZFB, c.iw.TT, c.iw.QUICK_APP, c.iw.UNI].includes(e3.platform);
          }, he = function() {
            return e3 = 1, t3 = 99999, e3 = Math.ceil(e3), t3 = Math.floor(t3), Math.floor(Math.random() * (t3 - e3)) + e3;
            var e3, t3;
          }, de = {}, fe = 1e3, me = function() {
            function e3(e4) {
              this.eventQueue = [], this.stock = fe, this.config = e4, this.governor();
            }
            return e3.prototype.add = function(e4) {
              this.stock <= 0 ? console.warn("Event Report limit ".concat(fe, " per minute")) : (this.eventQueue.push(e4), this.consume(), this.stock -= 1);
            }, e3.prototype.consume = function() {
              var e4 = this;
              this.eventQueue.length !== 0 && (this.timer && this.eventQueue.length <= 10 && clearTimeout(this.timer), this.timer = setTimeout(function() {
                var t3, r2 = e4.eventQueue.splice(0, 10), n2 = r2.filter(function(e5) {
                  return e5.appId === r2[0].appId;
                }), o2 = r2.filter(function(e5) {
                  return e5.appId !== r2[0].appId;
                });
                (t3 = e4.eventQueue).unshift.apply(t3, o2), e4.batchSend(n2);
              }, 1e3));
            }, e3.prototype.governor = function() {
              var e4 = this, t3 = setInterval(function() {
                e4.stock = fe;
              }, 6e4);
              typeof addEventListener != "undefined" && addEventListener("beforeunload", function() {
                clearInterval(t3);
              });
            }, e3.prototype.batchSend = function(e4) {
              var t3, r2;
              if (e4 === void 0 && (e4 = []), e4.length !== 0)
                try {
                  var n2 = e4.map(function(e5) {
                    e5.biz, e5.appId;
                    var t4 = e5.eventId, r3 = function(e6, t5) {
                      var r4 = {};
                      for (var n3 in e6)
                        Object.prototype.hasOwnProperty.call(e6, n3) && t5.indexOf(n3) < 0 && (r4[n3] = e6[n3]);
                      if (e6 != null && typeof Object.getOwnPropertySymbols == "function") {
                        var o2 = 0;
                        for (n3 = Object.getOwnPropertySymbols(e6); o2 < n3.length; o2++)
                          t5.indexOf(n3[o2]) < 0 && Object.prototype.propertyIsEnumerable.call(e6, n3[o2]) && (r4[n3[o2]] = e6[n3[o2]]);
                      }
                      return r4;
                    }(e5, ["biz", "appId", "eventId"]);
                    return { eventId: Number(t4), body: r3 };
                  });
                  !function(e5, t4) {
                    try {
                      var r3 = t4.biz, n3 = t4.appId, o2 = t4.data, i2 = t4.debug, a2 = t4.onSuccess;
                      if (!r3)
                        throw new Error("biz is not defined");
                      de.global || (de = c.P6.getEnvInfo());
                      var s2 = de;
                      if (pe(s2)) {
                        var u2 = { url: i2 ? ce : se, data: o2, method: "POST", success: function() {
                          a2 == null || a2();
                        }, fail: function() {
                        }, complete: function() {
                        } }, l2 = { token: e5, appid: n3 != null ? n3 : "", sendts: "".concat(Math.floor(new Date().getTime() / 1e3)), biz: r3, debug: "".concat(i2) };
                        if (s2.platform === "zfb" || s2.platform === "dd" ? u2.headers = l2 : u2.header = l2, s2.platform === "dd")
                          return s2.global.httpRequest(u2);
                        s2.global.request(u2);
                      } else {
                        var p2 = new XMLHttpRequest();
                        p2.onreadystatechange = function() {
                          p2.readyState === 2 && (a2 == null || a2());
                        }, p2.open("POST", i2 ? ce : se), p2.setRequestHeader("Content-Type", "application/json"), p2.setRequestHeader("token", e5), p2.setRequestHeader("appid", n3 != null ? n3 : ""), p2.setRequestHeader("sendts", "".concat(Math.floor(new Date().getTime() / 1e3))), p2.setRequestHeader("biz", r3), p2.setRequestHeader("debug", "".concat(i2)), p2.send(JSON.stringify(o2));
                      }
                    } catch (e6) {
                      console.error(e6);
                    }
                  }(this.config.token, { biz: (t3 = e4[0]) === null || t3 === void 0 ? void 0 : t3.biz, appId: (r2 = e4[0]) === null || r2 === void 0 ? void 0 : r2.appId, data: n2, debug: this.config.debug, onSuccess: this.consume.bind(this) });
                } catch (e5) {
                  console.error(e5);
                }
            }, e3;
          }(), ge = function() {
            return ge = Object.assign || function(e3) {
              for (var t3, r2 = 1, n2 = arguments.length; r2 < n2; r2++)
                for (var o2 in t3 = arguments[r2])
                  Object.prototype.hasOwnProperty.call(t3, o2) && (e3[o2] = t3[o2]);
              return e3;
            }, ge.apply(this, arguments);
          }, ye = new (function() {
            function e3(e4) {
              this.inited = false, this.appId = "", this.biz = "", this.eventQueue = {}, this.config = ae, e4 && this.init(e4);
            }
            return e3.prototype.init = function(e4) {
              var t3;
              if (e4 === void 0 && (e4 = {}), !e4.biz || !e4.token)
                throw new Error("Event Report: biz or token is not defined");
              try {
                this.appId = (t3 = e4.appId) !== null && t3 !== void 0 ? t3 : "", this.biz = e4.biz, this.config = ge(ge({}, ae), e4), this.eventQueue = new me(this.config), this.log(e4), this.inited = true;
              } catch (e5) {
                console.error(e5);
              }
            }, e3.prototype.send = function(e4, t3, r2) {
              var n2;
              if (t3 === void 0 && (t3 = {}), this.inited) {
                var o2 = ge(ge({}, t3), { eventId: Number(e4), biz: this.biz, appId: (n2 = r2 == null ? void 0 : r2.appId) !== null && n2 !== void 0 ? n2 : this.appId });
                this.eventQueue.add(o2), this.log(o2);
              } else
                console.error("Event Report: init is not called");
            }, e3.prototype.log = function(e4) {
              try {
                if (this.config.debug) {
                  var t3 = e4.payload, r2 = function(e5, t4) {
                    var r3 = {};
                    for (var n2 in e5)
                      Object.prototype.hasOwnProperty.call(e5, n2) && t4.indexOf(n2) < 0 && (r3[n2] = e5[n2]);
                    if (e5 != null && typeof Object.getOwnPropertySymbols == "function") {
                      var o2 = 0;
                      for (n2 = Object.getOwnPropertySymbols(e5); o2 < n2.length; o2++)
                        t4.indexOf(n2[o2]) < 0 && Object.prototype.propertyIsEnumerable.call(e5, n2[o2]) && (r3[n2[o2]] = e5[n2[o2]]);
                    }
                    return r3;
                  }(e4, ["payload"]);
                  console.log("%c Event Report: ".concat(this.config.biz, " "), "background: #8A97FC; color: #fff"), console.table(r2), t3 && (console.info("payload:"), console.table(t3));
                }
              } catch (e5) {
                console.error(e5);
              }
            }, e3;
          }())(), Ee = function() {
            return Ee = Object.assign || function(e3) {
              for (var t3, r2 = 1, n2 = arguments.length; r2 < n2; r2++)
                for (var o2 in t3 = arguments[r2])
                  Object.prototype.hasOwnProperty.call(t3, o2) && (e3[o2] = t3[o2]);
              return e3;
            }, Ee.apply(this, arguments);
          }, ve = { requestName: "", subrequestid: "1", requestMethod: "GET", requestUrl: "", requestElapse: 0, code: 0, codeDesc: "", isLastApi: 0, isSuccess: 1 }, Te = function() {
            function e3(e4) {
              this.platform = c.P6.getEnvInfo(), this.isReportDt = e4.isReport || false, this.isCollectDt = true, pe(this.platform) && !this.isReportDt && (this.isCollectDt = false), this.eventQueue = [], this.accessChannel = S.yK, this.options = function(e5, t3) {
                t3.platform || (t3 = c.P6.getEnvInfo());
                var r2 = e5.org, n2 = e5.appkey, o2 = e5.deviceId, i2 = e5.sdkVersion, a2 = (navigator === null || navigator === void 0 ? void 0 : navigator.userAgent) || "".concat(t3.platform, "_mini_program");
                return { org: r2, appkey: n2, deviceId: o2, sdkServiceId: "sid_".concat(c.P6.getUniqueId(), "_").concat(he()), did: a2, sdkVersion: i2, os: S.Wc, sdkProduct: A.aC.web };
              }(e4, this.platform), this.sid = this.options.sdkServiceId, this.init(e4);
            }
            return e3.getInstance = function() {
              return e3.instance;
            }, e3.prototype.getServiceId = function() {
              return this.sid || "sid_0";
            }, e3.prototype.setIsReportDt = function(e4) {
              this.isReportDt = e4, e4 && this.rptEventQueue();
            }, e3.prototype.setIsCollectDt = function(e4) {
              this.isCollectDt = e4, e4 || (this.eventQueue = []);
            }, e3.prototype.rptEventQueue = function() {
              var e4 = this;
              this.eventQueue.length && this.eventQueue.forEach(function(t3, r2) {
                ye.send(t3.eventId, t3.dt), r2 >= e4.eventQueue.length - 1 && (e4.eventQueue = []);
              });
            }, e3.prototype.init = function(t3) {
              e3.instance || (e3.instance = this, ye.init({ biz: S.el, token: S.$x, appId: t3.appkey, debug: false }), this.reportInit());
            }, e3.prototype.reportInit = function() {
              if (this.isCollectDt) {
                var e4 = this.options, t3 = e4.did, r2 = e4.os, n2 = e4.sdkVersion, o2 = e4.deviceId;
                this.reportData(S.iB.INIT, { did: t3, os: r2, sdkVersion: n2, deviceId: o2 });
              }
            }, e3.prototype.geOperateFun = function(e4) {
              var t3 = this;
              if (!this.isCollectDt)
                return function() {
                };
              var r2 = 1, n2 = 0, o2 = "", i2 = le(), a2 = e4.uid, s2 = e4.operationName;
              a2 && (this.uid = a2);
              var u2 = { uid: this.uid, operationId: "opr_".concat(c.P6.getUniqueId(), "_").concat(he()), requestid: "req_".concat(c.P6.getUniqueId(), "_").concat(he()), operationName: s2 };
              return function(e5) {
                var a3, l2, p2, h2;
                if (e5.data.isSuccess ? (n2 = 0, o2 = "") : (e5.data.code === 0 && (e5.data.code = S.Tp), n2 = (a3 = e5.data.code) !== null && a3 !== void 0 ? a3 : n2, o2 = (l2 = e5.data.codeDesc) !== null && l2 !== void 0 ? l2 : o2), ((p2 = e5.data) === null || p2 === void 0 ? void 0 : p2.accessChannel) && (t3.accessChannel = (h2 = e5.data) === null || h2 === void 0 ? void 0 : h2.accessChannel), e5.isRetry ? (r2++, e5.data.subrequestid = "".concat(r2)) : (u2.requestid = "req_".concat(c.P6.getUniqueId(), "_").concat(he()), r2 = 1), e5.data.isLastApi) {
                  var d2 = le();
                  e5.data.requestElapse = d2 - i2, e5.data.requestMethod = "", e5.data.subrequestid = "0", e5.data.code = n2 === 200 ? 0 : n2, e5.data.codeDesc = o2;
                } else
                  e5.data.requestName || (e5.data.requestName = s2);
                e5.data.requestElapse || (e5.data.requestElapse = le() - i2), t3.reportData.call(t3, S.iB.API, Ee(Ee(Ee(Ee({}, ve), u2), e5.data), { accessChannel: t3.accessChannel, operationType: ue(s2) })), e5.isEndApi && t3.reportData.call(t3, S.iB.API, Ee(Ee(Ee({}, u2), ve), { isSuccess: e5.data.isSuccess, isLastApi: 1, subrequestid: "0", requestMethod: "", code: n2 === 200 ? 0 : n2, codeDesc: o2, requestElapse: e5.data.requestElapse, accessChannel: t3.accessChannel, operationType: ue(s2) }));
              };
            }, e3.prototype.reportData = function(e4, t3) {
              return r2 = this, n2 = void 0, i2 = function() {
                var r3, n3, o3, i3, a2, s2, u2, l2;
                return function(e5, t4) {
                  var r4, n4, o4, i4, a3 = { label: 0, sent: function() {
                    if (1 & o4[0])
                      throw o4[1];
                    return o4[1];
                  }, trys: [], ops: [] };
                  return i4 = { next: s3(0), throw: s3(1), return: s3(2) }, typeof Symbol == "function" && (i4[Symbol.iterator] = function() {
                    return this;
                  }), i4;
                  function s3(i5) {
                    return function(s4) {
                      return function(i6) {
                        if (r4)
                          throw new TypeError("Generator is already executing.");
                        for (; a3; )
                          try {
                            if (r4 = 1, n4 && (o4 = 2 & i6[0] ? n4.return : i6[0] ? n4.throw || ((o4 = n4.return) && o4.call(n4), 0) : n4.next) && !(o4 = o4.call(n4, i6[1])).done)
                              return o4;
                            switch (n4 = 0, o4 && (i6 = [2 & i6[0], o4.value]), i6[0]) {
                              case 0:
                              case 1:
                                o4 = i6;
                                break;
                              case 4:
                                return a3.label++, { value: i6[1], done: false };
                              case 5:
                                a3.label++, n4 = i6[1], i6 = [0];
                                continue;
                              case 7:
                                i6 = a3.ops.pop(), a3.trys.pop();
                                continue;
                              default:
                                if (!((o4 = (o4 = a3.trys).length > 0 && o4[o4.length - 1]) || i6[0] !== 6 && i6[0] !== 2)) {
                                  a3 = 0;
                                  continue;
                                }
                                if (i6[0] === 3 && (!o4 || i6[1] > o4[0] && i6[1] < o4[3])) {
                                  a3.label = i6[1];
                                  break;
                                }
                                if (i6[0] === 6 && a3.label < o4[1]) {
                                  a3.label = o4[1], o4 = i6;
                                  break;
                                }
                                if (o4 && a3.label < o4[2]) {
                                  a3.label = o4[2], a3.ops.push(i6);
                                  break;
                                }
                                o4[2] && a3.ops.pop(), a3.trys.pop();
                                continue;
                            }
                            i6 = t4.call(e5, a3);
                          } catch (e6) {
                            i6 = [6, e6], n4 = 0;
                          } finally {
                            r4 = o4 = 0;
                          }
                        if (5 & i6[0])
                          throw i6[1];
                        return { value: i6[0] ? i6[1] : void 0, done: true };
                      }([i5, s4]);
                    };
                  }
                }(this, function(p2) {
                  switch (p2.label) {
                    case 0:
                      return p2.trys.push([0, 3, , 4]), r3 = le(), n3 = 0, e4 !== S.iB.API ? [3, 2] : [4, (h2 = this.platform, new Promise(function(e5) {
                        var t4;
                        h2.platform || (h2 = c.P6.getEnvInfo());
                        var r4 = "";
                        if (h2.platform === c.iw.WEB) {
                          var n4 = navigator.connection;
                          (n4 == null ? void 0 : n4.type) ? (n4 == null || n4.type, r4 = A.td.WIFI) : (n4 == null ? void 0 : n4.effectiveType) && (r4 = A.td[n4.effectiveType.toLocaleUpperCase()]), e5(r4);
                        } else
                          h2.platform === c.iw.NODE ? (r4 = A.td.UNKNOWN, e5(r4)) : (t4 = h2.global) === null || t4 === void 0 || t4.getNetworkType({ success: function(t5) {
                            r4 = A.td[t5.networkType.toLocaleUpperCase()], e5(r4);
                          } });
                      }))];
                    case 1:
                      n3 = p2.sent(), p2.label = 2;
                    case 2:
                      return o3 = this.options, i3 = o3.appkey, a2 = o3.sdkServiceId, s2 = o3.sdkProduct, u2 = Ee({ lts: r3, net: n3, appkey: i3, sdkServiceId: a2, sdkProduct: s2 }, t3), this.isReportDt ? ye.send(e4, u2) : this.isCollectDt && this.eventQueue.push({ eventId: e4, dt: u2 }), [3, 4];
                    case 3:
                      return l2 = p2.sent(), console.warn(l2), [3, 4];
                    case 4:
                      return [2];
                  }
                  var h2;
                });
              }, new ((o2 = void 0) || (o2 = Promise))(function(e5, t4) {
                function a2(e6) {
                  try {
                    c2(i2.next(e6));
                  } catch (e7) {
                    t4(e7);
                  }
                }
                function s2(e6) {
                  try {
                    c2(i2.throw(e6));
                  } catch (e7) {
                    t4(e7);
                  }
                }
                function c2(t5) {
                  var r3;
                  t5.done ? e5(t5.value) : (r3 = t5.value, r3 instanceof o2 ? r3 : new o2(function(e6) {
                    e6(r3);
                  })).then(a2, s2);
                }
                c2((i2 = i2.apply(r2, n2 || [])).next());
              });
              var r2, n2, o2, i2;
            }, e3;
          }(), _e = r(4556), Oe = r(91), Re = r(3721), Ie = r(7378), Se = r(2346), Ae = r(2868), Ne = r(4961), Ce = function() {
            return Ce = Object.assign || function(e3) {
              for (var t3, r2 = 1, n2 = arguments.length; r2 < n2; r2++)
                for (var o2 in t3 = arguments[r2])
                  Object.prototype.hasOwnProperty.call(t3, o2) && (e3[o2] = t3[o2]);
              return e3;
            }, Ce.apply(this, arguments);
          }, be = c.P6.getEnvInfo(), Me = be.platform === "web", we = function() {
          }, Ue = function() {
            function e3(t3) {
              var r2;
              if (this.name = "connection", this.isDebug = t3.isDebug || false, this.isReport = false, this.isHttpDNS = t3.isHttpDNS === void 0 ? Me : t3.isHttpDNS, this.heartBeatWait = t3.heartBeatWait || 3e4, this.autoReconnectNumMax = t3.autoReconnectNumMax || 5, this.refreshDNSIntervals = this.autoReconnectNumMax < 5 ? this.autoReconnectNumMax : 5, this.delivery = t3.delivery || false, this.dnsArr = ["https://rs.easemob.com", "https://rs.chat.agora.io", "http://59.110.89.59", "http://39.97.193.190", "http://39.97.193.187"], this.dnsIndex = 0, this.dnsTotal = this.dnsArr.length, this.restHosts = [], this.restTotal = 0, this.restIndex = 0, this.hostIndex = 0, this.socketHost = [], this.hostTotal = 0, this.times = 1, this.autoReconnectNumTotal = 0, this.domain = "easemob.com", this.appKey = t3.appKey, this.appName = "", this.orgName = "", this.token = "", this.grantType = "", this.apiUrl = t3.apiUrl || "", this.url = t3.url || "", this.https = t3.https || typeof window != "undefined" && ((r2 = window.location) === null || r2 === void 0 ? void 0 : r2.protocol) === "https:", this.version = "4.1.2", this.deviceId = t3.deviceId || "webim", this.osType = 16, this.useOwnUploadFun = t3.useOwnUploadFun || false, this.compressType = [0], this.encryptType = [0], this.clientResource = "", this.expiresIn = 0, this.expirationTime = 0, this.logOut = true, this.context = { jid: { appKey: "", clientResource: "", domain: "easemob.com", name: "" }, userId: "", appKey: "", status: 0, restTokenData: "", appName: "", orgName: "", root: {}, accessToken: "" }, this._msgHash = {}, this._msgPromiseHash = {}, this._queues = [], this._load_msg_cache = [], this.unSendMsgArr = [], this.mr_cache = {}, typeof this.appKey != "string" || this.appKey.split("#").length !== 2)
                throw Error("Illegal appKey: ".concat(this.appKey));
              var n2 = this.appKey.split("#");
              this.orgName = n2[0], this.appName = n2[1], this.listen = ie.bind(this), this.mSync = this.usePlugin(re), this.eventHandler = this.usePlugin(ne), Object.assign(e3.prototype, _e), Object.assign(e3.prototype, Oe), Object.assign(e3.prototype, Re), Object.assign(e3.prototype, Ie), Object.assign(e3.prototype, Se), Object.assign(e3.prototype, Ae), Object.assign(e3.prototype, Ne), this.dataReport = new Te({ appkey: this.appKey, org: this.orgName, sdkVersion: this.version, deviceId: this.deviceId, isReport: this.isReport });
              var o2 = 0, i2 = this;
              Object.defineProperty(c.P6, "ajaxUnconventionalErrorTimes", { set: function(e4) {
                e4 !== 0 && (d.kg.debug("rest api request fail times: ".concat(e4)), (o2 = e4) % 5 == 0 && this.isHttpDNS && (d.kg.debug("refresh dns config when rest request fail."), Be.call(i2, "refresh", {}, {})));
              }, get: function() {
                return o2;
              } });
            }
            return e3.prototype.usePlugin = function(e4, t3) {
              if (!t3)
                return new e4(this);
              this[t3] = new e4(this);
            }, e3.prototype.listen = function(e4) {
            }, e3.prototype.addEventHandler = function(e4, t3) {
            }, e3.prototype.removeEventHandler = function(e4) {
            }, e3.prototype.registerUser = function(e4) {
              var t3 = this;
              return new Promise(function(r2, n2) {
                var o2 = t3.dataReport.geOperateFun({ uid: e4.username, operationName: A.fI.REGISTER });
                if (t3.isHttpDNS) {
                  t3.dnsIndex = 0;
                  var i2 = Ce(Ce({}, e4), { user: e4.username, pwd: e4.password, promise: { resolve: r2, reject: n2 } });
                  Be.call(t3, "signup", i2, { rpt: o2 });
                } else
                  i2 = Ce(Ce({}, e4), { promise: { resolve: r2, reject: n2 } }), ke.call(t3, i2, { rpt: o2 });
              });
            }, e3.prototype.open = function(e4) {
              var t3 = this;
              return d.kg.debug("open"), new Promise(function(r2, n2) {
                if (De.call(t3, e4)) {
                  e4.accessToken && (t3.token = e4.accessToken);
                  var o2 = Ce(Ce({}, e4), { promise: { resolve: r2, reject: n2 } }), i2 = t3.dataReport.geOperateFun({ uid: e4.user, operationName: A.fI.LOGIN });
                  t3.isHttpDNS ? Be.call(t3, "login", o2, { rpt: i2 }) : Pe.call(t3, o2, { rpt: i2 });
                }
              });
            }, e3.prototype.isOpened = function() {
              return this.sock && this.sock.readyState === 1 || false;
            }, e3.prototype.close = function() {
              this.logOut = true, this.context.status = u.E.STATUS_CLOSING, this.sock && this.sock.close(), this.stopHeartBeat(), this.rejectMessage(), this.context.status = u.E.STATUS_CLOSED, this._load_msg_cache = [], this.unSendMsgArr = [], this._queues = [], this._msgHash = {}, this.mr_cache = {}, this.token = "", this.context.accessToken = "";
            }, e3.prototype.stopHeartBeat = function() {
              clearInterval(this.heartBeatID);
            }, e3.prototype._checkOpenParams = function(e4) {
              return De.call(this, e4);
            }, e3.prototype.clear = function() {
              this.restTotal = 0, this.restIndex = 0, this.hostIndex = 0, this.hostTotal = 0;
            }, e3.prototype.heartBeat = function() {
            }, e3.prototype.renewToken = function(e4) {
              var t3 = this;
              return this.isOpened() ? this.getChatToken(e4).then(function(e5) {
                var r2 = Date.now();
                return t3.expirationTime = e5.expire_timestamp, t3.expiresIn = e5.expire_timestamp - r2, t3.token = e5.access_token, t3.context.accessToken = e5.access_token, t3.clearTokenTimeout(), t3.tokenExpireTimeCountDown(t3.expiresIn), { status: true, token: e5.access_token, expire: e5.expire_timestamp };
              }) : Promise.reject({ status: false });
            }, e3.prototype.clearTokenTimeout = function() {
              d.kg.debug("clearTokenTimeout"), this.tokenWillExpireTimer && clearTimeout(this.tokenWillExpireTimer), this.tokenExpiredTimer && clearTimeout(this.tokenExpiredTimer);
            }, e3.prototype.tokenExpireTimeCountDown = function(e4) {
              var t3 = this;
              e4 > Math.pow(2, 31) - 1 && (e4 = Math.pow(2, 31) - 1), this.tokenWillExpireTimer = setTimeout(function() {
                var r2;
                t3.onTokenWillExpire && t3.onTokenWillExpire(), (r2 = t3.eventHandler) === null || r2 === void 0 || r2.dispatch("onTokenWillExpire"), d.kg.info("onTokenWillExpire", e4);
              }, e4 / 2), this.tokenExpiredTimer = setTimeout(function() {
                var r2;
                d.kg.info("onTokenExpired", e4), t3.onTokenExpired && t3.onTokenExpired(), (r2 = t3.eventHandler) === null || r2 === void 0 || r2.dispatch("onTokenExpired"), t3.close();
              }, e4);
            }, e3.prototype.compareTokenExpireTime = function(e4, t3) {
              var r2, n2 = Number(t3) - Number(e4);
              d.kg.debug("compareTokenExpireTime", n2), n2 <= this.expiresIn / 2 && n2 > 0 ? (this.onTokenWillExpire && this.onTokenWillExpire(), (r2 = this.eventHandler) === null || r2 === void 0 || r2.dispatch("onTokenWillExpire"), d.kg.info("onTokenWillExpire", n2)) : n2 <= 0 && (this.closeByTokenExpired(), d.kg.info("closeByTokenExpired", n2));
            }, e3.prototype.closeByTokenExpired = function() {
              var e4;
              d.kg.info("closed By TokenExpired"), this.onTokenExpired && this.onTokenExpired(), (e4 = this.eventHandler) === null || e4 === void 0 || e4.dispatch("onTokenExpired"), this.close();
            }, e3.prototype.rejectMessage = function() {
              var e4 = this, t3 = Object.keys(this._msgHash);
              if (t3.length > 0) {
                var r2 = s.Z.create({ type: u.E.MESSAGE_WEBSOCKET_DISCONNECTED, message: "websocket disconnected" });
                t3.forEach(function(t4) {
                  e4._msgHash[t4].reject instanceof Function && e4._msgHash[t4].reject(r2), e4._msgHash[t4].fail instanceof Function && e4._msgHash[t4].fail(r2), delete e4._msgHash[t4];
                });
              }
            }, e3.prototype.reconnect = function() {
              var e4 = this;
              d.kg.info("reconnect: time", this.times), d.kg.info("reconnect sock.readyState: ", this.sock.readyState), this.sock.readyState !== 0 && this.sock.readyState !== 1 && (this.rejectMessage(), this.isHttpDNS && (this.hostIndex, this.socketHost.length), this.hostIndex++, this.hostIndex >= this.socketHost.length - 1 && (this.hostIndex = this.socketHost.length - 1), setTimeout(function() {
                d.kg.info("login sock.readyState: ", e4.sock.readyState), e4.sock.readyState !== 1 && (e4.sock.close(), je.call(e4, { access_token: e4.context.accessToken }), e4.autoReconnectInterval += e4.times * e4.times, e4.times++);
              }, 500 * this.times), this.autoReconnectNumTotal++);
            }, e3.prototype.send = function(e4) {
              return Promise.resolve(null);
            }, e3.max_cache_length = 100, e3._getSock = function() {
            }, e3;
          }();
          function ke(e3, t3) {
            var r2 = this, n2 = t3.rpt, o2 = t3.isRetry, i2 = e3.promise, a2 = this.apiUrl + "/" + this.orgName + "/" + this.appName + "/users", l2 = { requestName: A.c.RESISTER, requestUrl: a2 }, p2 = e3.error || we;
            if (!this.orgName && !this.appName) {
              var h2 = s.Z.create({ type: u.E.WEBIM_CONNCTION_APPKEY_NOT_ASSIGN_ERROR, message: "signup error" });
              p2(h2);
            }
            var d2 = { headers: { "Content-type": "application/json" }, url: a2, dataType: "json", data: JSON.stringify({ username: e3.username, password: e3.password, nickname: e3.nickname || "" }), success: function(t4) {
              e3.success && e3.success(t4);
              var r3 = Ce(Ce({}, t4), { type: u.E.REQUEST_SUCCESS });
              i2.resolve && i2.resolve(r3);
              var a3 = t4.extraInfo, s2 = a3.httpCode, c2 = a3.elapse;
              n2({ isEndApi: true, isRetry: o2, data: Ce(Ce({}, { requestElapse: c2, isSuccess: 1, code: s2 }), l2) });
            }, error: function(t4) {
              var a3 = t4.extraInfo, s2 = a3.elapse, c2 = a3.httpCode, u2 = a3.errDesc;
              return n2({ isRetry: o2, data: Ce(Ce({}, { requestElapse: s2, isSuccess: 0, code: c2, codeDesc: u2 }), l2) }), r2.isHttpDNS && r2.restIndex + 1 < r2.restTotal ? (r2.restIndex++, He.call(r2), ke.call(r2, e3, { rpt: n2, isRetry: o2 }), Promise.reject(t4)) : (n2({ data: { isLastApi: 1, isSuccess: 0 } }), r2.clear(), i2.reject && i2.reject(t4), p2(t4));
            } };
            return c.P6.ajax(d2).catch(function(e4) {
              i2.reject && i2.reject(e4);
            });
          }
          function Pe(e3, t3) {
            var r2 = this;
            if (De.call(this, e3) && !this.isOpened()) {
              var n2 = t3.rpt, o2 = t3.isRetry;
              Ge.call(this, e3), this.user = e3.user;
              var i2 = e3.promise, a2 = this.context.appName, l2 = this.context.orgName, p2 = this.apiUrl + "/" + l2 + "/" + a2 + "/token";
              if (e3.agoraToken)
                this.grantType = "agoraToken", this.getChatToken(e3.agoraToken).then(function(t4) {
                  d.kg.info("getChatToken result:", t4), r2.expirationTime = t4.expire_timestamp, r2.token = t4.access_token, r2.context.accessToken = t4.access_token, r2.context.restTokenData = t4.access_token;
                  var o3 = t4.extraInfo, a3 = o3.httpCode, s2 = o3.elapse;
                  i2.resolve({ accessToken: t4.access_token, expireTimestamp: t4.expire_timestamp });
                  var c2 = { requestName: A.c.LOGIN_BY_AGORA_TOKEN, requestUrl: p2, requestElapse: s2, isSuccess: 1, code: a3 };
                  n2({ data: c2 }), je.call(r2, Ce(Ce({}, e3), { access_token: t4.access_token }), n2);
                }).catch(function(e4) {
                  var t4, o3 = s.Z.create({ type: u.E.WEBIM_CONNCTION_GETROSTER_ERROR, message: "get chat token fail", data: e4 });
                  i2.reject(o3), r2.onError && r2.onError(o3), (t4 = r2.eventHandler) === null || t4 === void 0 || t4.dispatch("onError", o3);
                  var a3 = e4.extraInfo, c2 = a3.elapse, l3 = a3.httpCode, h3 = a3.errDesc, d2 = { requestName: A.c.LOGIN_BY_AGORA_TOKEN, requestUrl: p2, requestElapse: c2, isSuccess: 0, code: l3, codeDesc: h3 };
                  n2({ data: d2 }), n2({ data: { isLastApi: 1, isSuccess: 0 } });
                });
              else if (e3.accessToken)
                this.grantType = "accessToken", this.token = e3.accessToken, this.context.accessToken = e3.accessToken, this.context.restTokenData = e3.accessToken, i2.resolve({ accessToken: e3.accessToken }), je.call(this, e3, n2);
              else {
                this.grantType = "password";
                var h2 = { grant_type: "password", username: e3.user, password: e3.pwd, timestamp: +new Date() }, f2 = JSON.stringify(h2), m2 = { headers: { "Content-type": "application/json" }, url: p2, dataType: "json", data: f2, success: function(t4) {
                  typeof e3.success == "function" && e3.success(t4), r2.token = t4.access_token, r2.context.restTokenData = t4.access_token, r2.context.accessToken = t4.access_token, r2.expiresIn = t4.expires_in, r2.clearTokenTimeout(), r2.tokenExpireTimeCountDown(r2.expiresIn), i2.resolve({ accessToken: t4.access_token, duration: t4.expires_in });
                  var a3 = t4.extraInfo, s2 = a3.httpCode, c2 = a3.elapse, u2 = { requestName: A.c.LOGIN_BY_PWD, requestElapse: c2, requestUrl: p2, isSuccess: 1, code: s2 };
                  n2({ isRetry: o2, data: u2 }), je.call(r2, t4, n2);
                }, error: function(t4) {
                  var a3, c2 = t4.extraInfo, l3 = c2.elapse, h3 = c2.httpCode, d2 = c2.errDesc, f3 = { requestName: A.c.LOGIN_BY_PWD, requestElapse: l3, requestUrl: p2, isSuccess: 0, code: h3, codeDesc: d2 };
                  if (n2({ isRetry: o2, data: f3 }), r2.isHttpDNS && r2.restIndex + 1 < r2.restTotal)
                    return r2.restIndex++, He.call(r2), void Pe.call(r2, e3, { rpt: n2, isRetry: true });
                  n2({ data: { isLastApi: 1, isSuccess: 0 } }), r2.clear(), t4.error && t4.error_description ? (a3 = s.Z.create({ type: u.E.WEBIM_CONNCTION_OPEN_USERGRID_ERROR, message: t4.error_description, data: t4 }), r2.onError && r2.onError(a3)) : (a3 = s.Z.create({ type: u.E.WEBIM_CONNCTION_OPEN_ERROR, message: t4.error_description, data: t4 }), r2.onError && r2.onError(a3)), typeof e3.error == "function" && e3.error(a3), i2.reject(a3);
                }, version: "4.0.8" };
                c.P6.ajax(m2).catch(function(e4) {
                  console.warn(e4);
                });
              }
              c.P6.listenNetwork(xe.bind(this), Le.bind(this));
            }
          }
          function xe() {
            var e3;
            d.kg.debug("online"), this.onOnline && this.onOnline(), (e3 = this.eventHandler) === null || e3 === void 0 || e3.dispatch("onOnline"), this.sock && this.sock.readyState !== 1 && (d.kg.debug("sock.readyState:", this.sock.readyState), !this.logOut && this.reconnect());
          }
          function Le() {
            var e3;
            d.kg.debug("offline"), this.onOffline && this.onOffline(), (e3 = this.eventHandler) === null || e3 === void 0 || e3.dispatch("onOffline");
          }
          function je(e3, t3) {
            var r2 = this, n2 = this._getSock();
            this.sock = n2;
            var o2 = function() {
              var e4;
              d.kg.debug("websockt onOpen"), r2.logOut = false, t3 && t3({ data: { isLastApi: 1, isSuccess: 1, accessChannel: (e4 = r2.socketHost[r2.hostIndex]) === null || e4 === void 0 ? void 0 : e4.channel } }), be.platform !== "zfb" && be.platform !== "dd" || (r2.sock.readyState = 1);
              var o3 = c.P6.flow([r2.mSync.generateProvision, r2.mSync.base64transform])();
              try {
                n2.send(o3);
              } catch (e5) {
                var i3 = s.Z.create({ type: u.E.SDK_RUNTIME_ERROR, message: "send message error", data: e5 });
                r2.onError && r2.onError(i3);
              }
            }, i2 = function() {
              var e4, t4;
              if (d.kg.debug("websocket onClose"), be.platform !== "zfb" && be.platform !== "dd" || (r2.sock.readyState = 3), !r2.logOut && r2.autoReconnectNumTotal < r2.autoReconnectNumMax) {
                r2.reconnect();
                var n3 = { type: u.E.WEBIM_CONNCTION_DISCONNECTED, message: "websocket has been disconnected" };
                r2.onError && r2.onError(n3), r2.autoReconnectNumTotal % r2.refreshDNSIntervals == 0 && be.platform === "web" && r2.isHttpDNS && (d.kg.debug("refresh dns config when websocket close"), Be.call(r2, "refresh", {}, {}));
              } else
                r2.logOut ? (r2.clear(), r2.onClosed && r2.onClosed(), (e4 = r2.eventHandler) === null || e4 === void 0 || e4.dispatch("onDisconnected"), r2.mSync.stopHeartBeat(), r2.autoReconnectInterval = 0, r2.times = 1, r2.autoReconnectNumTotal = 0, r2.hostIndex = 0) : (n3 = { type: u.E.WEBIM_CONNCTION_DISCONNECTED, message: "websocket has been disconnected" }, r2.onError && r2.onError(n3), r2.onClosed && r2.onClosed(), (t4 = r2.eventHandler) === null || t4 === void 0 || t4.dispatch("onDisconnected"), r2.mSync.stopHeartBeat(), d.kg.debug("reconnect fail"), r2.autoReconnectInterval = 0, r2.times = 1, r2.autoReconnectNumTotal = 0, r2.hostIndex = 0);
            }, a2 = function(e4) {
              var t4 = r2.mSync, n3 = t4.decodeMSync, o3 = t4.distributeMSync;
              c.P6.flow([n3, o3])(e4);
            };
            be.platform === "web" ? (n2.onopen = o2, n2.onclose = i2, n2.onmessage = a2) : (n2.onOpen(o2), n2.onMessage(a2), n2.onClose(i2), n2.onError(function(e4) {
              var n3;
              d.kg.debug("mini program sock on error", e4), r2.onError && r2.onError({ type: u.E.WEBIM_CONNECTION_ERROR, message: "on socket error", data: e4 }), !r2.logOut && r2.autoReconnectNumTotal < r2.autoReconnectNumMax && r2.sock.readyState !== 3 && (d.kg.debug("sock.onError reconnect", r2.autoReconnectNumTotal, r2.autoReconnectNumMax), r2.reconnect(), r2.autoReconnectNumTotal % r2.refreshDNSIntervals == 0 && be.platform === "web" && r2.isHttpDNS && (d.kg.debug("refresh dns config when websocket error"), Be.call(r2, "refresh", {}, {}))), t3 && t3({ data: { isLastApi: 1, isSuccess: 0, accessChannel: (n3 = r2.socketHost[r2.hostIndex]) === null || n3 === void 0 ? void 0 : n3.channel } });
            }));
          }
          function De(e3) {
            if (e3.user === "") {
              var t3 = s.Z.create({ type: u.E.WEBIM_CONNCTION_USER_NOT_ASSIGN_ERROR, message: "the user cannot be empty" });
              return this.onError && this.onError(t3), false;
            }
            var r2 = this.appKey.split("#");
            return !(r2.length !== 2 || !r2[0] || !r2[1]) || (t3 = s.Z.create({ type: u.E.WEBIM_CONNCTION_APPKEY_NOT_ASSIGN_ERROR, message: "the appKey is illegal" }), this.onError && this.onError(t3), false);
          }
          function Ge(e3) {
            this.context.jid = { appKey: this.appKey, name: e3.user, domain: this.domain, clientResource: this.clientResource };
            var t3 = this.appKey.split("#"), r2 = t3[0], n2 = t3[1];
            this.context.root = this.root, this.context.userId = e3.user, this.context.appKey = this.appKey, this.context.appName = n2, this.context.orgName = r2;
          }
          function Be(e3, t3, r2) {
            var n2 = this, o2 = r2.rpt, i2 = r2.isRetry, a2 = this.dnsArr[this.dnsIndex] + "/easemob/server.json", s2 = { url: a2, dataType: "json", type: "GET", data: { app_key: encodeURIComponent(this.appKey) }, success: function(r3) {
              var s3 = r3.extraInfo, c2 = s3.elapse, u2 = s3.httpCode, l2 = { requestUrl: a2, requestName: A.c.GET_DNS, requestElapse: c2, isSuccess: 1, code: u2 };
              (r3 == null ? void 0 : r3.enableDataReport) === "true" ? (n2.dataReport.setIsCollectDt(true), n2.dataReport.setIsReportDt(true)) : (n2.dataReport.setIsReportDt(false), n2.dataReport.setIsCollectDt(false)), o2 && o2({ isRetry: i2, data: l2 });
              var p2 = r3.rest.hosts, h2 = n2.https ? "https" : "http";
              if (d.kg.info("httpType: " + h2), !p2)
                return Promise.reject(false);
              for (var f2 = p2.filter(function(e4) {
                if (e4.protocol === h2)
                  return e4;
              }), m2 = 0; m2 < f2.length; m2++)
                if (f2[m2].protocol === h2) {
                  var g2 = f2[m2];
                  f2.splice(m2, 1), f2.unshift(g2);
                }
              n2.restHosts = f2, n2.restTotal = f2.length;
              var y2 = r3["msync-ws"].hosts;
              if (!y2)
                return Promise.reject(false);
              var E2 = y2.filter(function(e4) {
                return e4.protocol === h2 && e4;
              });
              n2.socketHost = E2, n2.hostTotal = E2.length, He.call(n2), e3 !== "refresh" && (e3 === "login" ? Pe.call(n2, t3, { rpt: o2 }) : ke.call(n2, t3, { rpt: o2 }));
            }, error: function(r3) {
              var s3 = r3.extraInfo, c2 = s3.elapse, u2 = s3.httpCode, l2 = s3.errDesc, p2 = { requestUrl: a2, requestName: A.c.GET_DNS, isSuccess: 0, code: u2, codeDesc: l2, requestElapse: c2 };
              o2 && o2({ isRetry: i2, data: p2 }), d.kg.debug("getHttpDNS fail: " + n2.dnsIndex), n2.dnsIndex++, n2.dnsIndex < n2.dnsTotal && Be.call(n2, e3, t3, { rpt: o2, isRetry: true });
            } };
            return c.P6.ajax(s2).catch(function(e4) {
              console.warn(e4);
            });
          }
          function He() {
            var e3, t3;
            if (this.restIndex > this.restTotal)
              return d.kg.debug("restIndex > restTotal"), "";
            var r2 = "", n2 = this.restHosts[this.restIndex], o2 = n2.domain, i2 = n2.ip, a2 = n2.port, s2 = this.https ? "https:" : "http:";
            return i2 && typeof window != "undefined" && ((e3 = window === null || window === void 0 ? void 0 : window.location) === null || e3 === void 0 ? void 0 : e3.protocol) === "http:" ? r2 = s2 + "//" + i2 + ":" + a2 : (r2 = s2 + "//" + o2, a2 && a2 !== "80" && a2 !== "443" && (r2 += ":".concat(a2)), typeof window == "undefined" || window.location || (r2 = "https://" + o2), typeof window != "undefined" && window.location && ((t3 = window.location) === null || t3 === void 0 ? void 0 : t3.protocol) === "file:" && (r2 = "https://" + o2)), typeof window == "undefined" && (r2 = s2 + "//" + o2), this.apiUrl = r2, r2;
          }
          var Fe = r(4816), We = c.P6.getEnvInfo(), qe = We.global;
          o.util.Long = a(), o.configure();
          var Ze = o.Root.fromJSON({ nested: { easemob: { nested: { pb: { nested: { MessageBody: { fields: { type: { type: "Type", id: 1 }, from: { type: "JID", id: 2 }, to: { type: "JID", id: 3 }, contents: { rule: "repeated", type: "Content", id: 4 }, ext: { rule: "repeated", type: "KeyValue", id: 5 }, ackMessageId: { type: "uint64", id: 6 }, msgConfig: { type: "MessageConfig", id: 7 }, ackContent: { type: "string", id: 8 }, meta: { type: "string", id: 9 } }, nested: { Content: { fields: { type: { type: "Type", id: 1 }, text: { type: "string", id: 2 }, latitude: { type: "double", id: 3 }, longitude: { type: "double", id: 4 }, address: { type: "string", id: 5 }, displayName: { type: "string", id: 6 }, remotePath: { type: "string", id: 7 }, secretKey: { type: "string", id: 8 }, fileLength: { type: "int32", id: 9 }, action: { type: "string", id: 10 }, params: { rule: "repeated", type: "KeyValue", id: 11 }, duration: { type: "int32", id: 12 }, size: { type: "Size", id: 13 }, thumbnailRemotePath: { type: "string", id: 14 }, thumbnailSecretKey: { type: "string", id: 15 }, thumbnailDisplayName: { type: "string", id: 16 }, thumbnailFileLength: { type: "int32", id: 17 }, thumbnailSize: { type: "Size", id: 18 }, customEvent: { type: "string", id: 19 }, customExts: { rule: "repeated", type: "KeyValue", id: 20 }, buildingName: { type: "string", id: 21 } }, nested: { Type: { values: { TEXT: 0, IMAGE: 1, VIDEO: 2, LOCATION: 3, VOICE: 4, FILE: 5, COMMAND: 6, CUSTOM: 7 } }, Size: { fields: { width: { type: "double", id: 1 }, height: { type: "double", id: 2 } } } } }, Type: { values: { NORMAL: 0, CHAT: 1, GROUPCHAT: 2, CHATROOM: 3, READ_ACK: 4, DELIVER_ACK: 5, RECALL: 6, CHANNEL_ACK: 7 } }, MessageConfig: { fields: { allowGroupAck: { type: "bool", id: 1 } } } } }, KeyValue: { oneofs: { value: { oneof: ["varintValue", "floatValue", "doubleValue", "stringValue"] } }, fields: { key: { type: "string", id: 1 }, type: { type: "ValueType", id: 2 }, varintValue: { type: "int64", id: 3 }, floatValue: { type: "float", id: 4 }, doubleValue: { type: "double", id: 5 }, stringValue: { type: "string", id: 6 } }, nested: { ValueType: { values: { BOOL: 1, INT: 2, UINT: 3, LLINT: 4, FLOAT: 5, DOUBLE: 6, STRING: 7, JSON_STRING: 8 } } } }, JID: { fields: { appKey: { type: "string", id: 1 }, name: { type: "string", id: 2 }, domain: { type: "string", id: 3 }, clientResource: { type: "string", id: 4 } } }, ConferenceBody: { fields: { sessionId: { type: "string", id: 1 }, operation: { type: "Operation", id: 2 }, conferenceId: { type: "string", id: 3 }, type: { type: "Type", id: 4 }, content: { type: "string", id: 5 }, network: { type: "string", id: 6 }, version: { type: "string", id: 7 }, identity: { type: "Identity", id: 8 }, duration: { type: "string", id: 9 }, peerName: { type: "string", id: 10 }, endReason: { type: "EndReason", id: 11 }, status: { type: "Status", id: 12 }, isDirect: { type: "bool", id: 13 }, controlType: { type: "StreamControlType", id: 14 }, routeFlag: { type: "int32", id: 15 }, routeKey: { type: "string", id: 16 } }, nested: { Status: { fields: { errorCode: { type: "int32", id: 1 } } }, Operation: { values: { JOIN: 0, INITIATE: 1, ACCEPT_INITIATE: 2, ANSWER: 3, TERMINATE: 4, REMOVE: 5, STREAM_CONTROL: 6, MEDIA_REQUEST: 7 } }, Type: { values: { VOICE: 0, VIDEO: 1 } }, Identity: { values: { CALLER: 0, CALLEE: 1 } }, EndReason: { values: { HANGUP: 0, NORESPONSE: 1, REJECT: 2, BUSY: 3, FAIL: 4, UNSUPPORTED: 5, OFFLINE: 6 } }, StreamControlType: { values: { PAUSE_VOICE: 0, RESUME_VOICE: 1, PAUSE_VIDEO: 2, RESUME_VIDEO: 3 } } } }, MSync: { fields: { version: { type: "Version", id: 1, options: { default: "MSYNC_V1" } }, guid: { type: "JID", id: 2 }, auth: { type: "string", id: 3 }, compressAlgorimth: { type: "uint32", id: 4 }, crypto: { type: "uint32", id: 5 }, userAgent: { type: "string", id: 6 }, pov: { type: "uint64", id: 7 }, command: { type: "Command", id: 8 }, deviceId: { type: "uint32", id: 10 }, encryptType: { rule: "repeated", type: "EncryptType", id: 11, options: { packed: false } }, encryptKey: { type: "string", id: 12 }, payload: { type: "bytes", id: 9 } }, nested: { Version: { values: { MSYNC_V1: 0, MSYNC_V2: 1 } }, Command: { values: { SYNC: 0, UNREAD: 1, NOTICE: 2, PROVISION: 3 } } } }, EncryptType: { values: { ENCRYPT_NONE: 0, ENCRYPT_AES_128_CBC: 1, ENCRYPT_AES_256_CBC: 2 } }, CommSyncUL: { fields: { meta: { type: "Meta", id: 1 }, key: { type: "uint64", id: 2 }, queue: { type: "JID", id: 3 }, isRoam: { type: "bool", id: 4 }, lastFullRoamKey: { type: "uint64", id: 5 } } }, CommSyncDL: { fields: { status: { type: "Status", id: 1 }, metaId: { type: "uint64", id: 2 }, serverId: { type: "uint64", id: 3 }, metas: { rule: "repeated", type: "Meta", id: 4 }, nextKey: { type: "uint64", id: 5 }, queue: { type: "JID", id: 6 }, isLast: { type: "bool", id: 7 }, timestamp: { type: "uint64", id: 8 }, isRoam: { type: "bool", id: 9 } } }, CommNotice: { fields: { queue: { type: "JID", id: 1 } } }, CommUnreadUL: { fields: {} }, CommUnreadDL: { fields: { status: { type: "Status", id: 1 }, unread: { rule: "repeated", type: "MetaQueue", id: 2 }, timestamp: { type: "uint64", id: 3 } } }, MetaQueue: { fields: { queue: { type: "JID", id: 1 }, n: { type: "uint32", id: 2 } } }, Meta: { fields: { id: { type: "uint64", id: 1 }, from: { type: "JID", id: 2 }, to: { type: "JID", id: 3 }, timestamp: { type: "uint64", id: 4 }, ns: { type: "NameSpace", id: 5 }, payload: { type: "bytes", id: 6 }, routetype: { type: "RouteType", id: 7 }, ext: { type: "KeyValue", id: 8 }, meta: { type: "bytes", id: 9 } }, nested: { NameSpace: { values: { STATISTIC: 0, CHAT: 1, MUC: 2, ROSTER: 3, CONFERENCE: 4, NOTIFY: 5, QUERY: 6 } }, RouteType: { values: { ROUTE_ALL: 0, ROUTE_ONLINE: 1 } } } }, Status: { fields: { errorCode: { type: "ErrorCode", id: 1 }, reason: { type: "string", id: 2 }, redirectInfo: { rule: "repeated", type: "RedirectInfo", id: 3 } }, nested: { ErrorCode: { values: { OK: 0, FAIL: 1, UNAUTHORIZED: 2, MISSING_PARAMETER: 3, WRONG_PARAMETER: 4, REDIRECT: 5, TOKEN_EXPIRED: 6, PERMISSION_DENIED: 7, NO_ROUTE: 8, UNKNOWN_COMMAND: 9, PB_PARSER_ERROR: 10, BIND_ANOTHER_DEVICE: 11, IM_FORBIDDEN: 12, TOO_MANY_DEVICES: 13, PLATFORM_LIMIT: 14, USER_MUTED: 15, ENCRYPT_DISABLE: 16, ENCRYPT_ENABLE: 17, DECRYPT_FAILURE: 18, PERMISSION_DENIED_EXTERNAL: 19 } } } }, RedirectInfo: { fields: { host: { type: "string", id: 1 }, port: { type: "uint32", id: 2 } } }, Provision: { fields: { osType: { type: "OsType", id: 1 }, version: { type: "string", id: 2 }, networkType: { type: "NetworkType", id: 3 }, appSign: { type: "string", id: 4 }, compressType: { rule: "repeated", type: "CompressType", id: 5, options: { packed: false } }, encryptType: { rule: "repeated", type: "EncryptType", id: 6, options: { packed: false } }, encryptKey: { type: "string", id: 7 }, status: { type: "Status", id: 8 }, deviceUuid: { type: "string", id: 9 }, isManualLogin: { type: "bool", id: 10 }, password: { type: "string", id: 11 }, deviceName: { type: "string", id: 12 }, resource: { type: "string", id: 13 }, auth: { type: "string", id: 14 }, serviceId: { type: "string", id: 16 }, actionVersion: { type: "string", id: 17 } }, nested: { OsType: { values: { OS_IOS: 0, OS_ANDROID: 1, OS_LINUX: 2, OS_OSX: 3, OS_WIN: 4, OS_OTHER: 16 } }, NetworkType: { values: { NETWORK_NONE: 0, NETWORK_WIFI: 1, NETWORK_4G: 2, NETWORK_3G: 3, NETWORK_2G: 4, NETWORK_WIRE: 5 } }, CompressType: { values: { COMPRESS_NONE: 0, COMPRESS_ZLIB: 1 } } } }, MUCBody: { fields: { mucId: { type: "JID", id: 1 }, operation: { type: "Operation", id: 2 }, from: { type: "JID", id: 3 }, to: { rule: "repeated", type: "JID", id: 4 }, setting: { type: "Setting", id: 5 }, reason: { type: "string", id: 6 }, isChatroom: { type: "bool", id: 7 }, status: { type: "Status", id: 8 }, isThread: { type: "bool", id: 9 }, mucParentId: { type: "JID", id: 10 }, mucName: { type: "string", id: 11 }, eventInfo: { type: "EventInfo", id: 12 } }, nested: { Operation: { values: { CREATE: 0, DESTROY: 1, JOIN: 2, LEAVE: 3, APPLY: 4, APPLY_ACCEPT: 5, APPLY_DECLINE: 6, INVITE: 7, INVITE_ACCEPT: 8, INVITE_DECLINE: 9, KICK: 10, GET_BLACKLIST: 11, BAN: 12, ALLOW: 13, UPDATE: 14, BLOCK: 15, UNBLOCK: 16, PRESENCE: 17, ABSENCE: 18, DIRECT_JOINED: 19, ASSIGN_OWNER: 20, ADD_ADMIN: 21, REMOVE_ADMIN: 22, ADD_MUTE: 23, REMOVE_MUTE: 24, UPDATE_ANNOUNCEMENT: 25, DELETE_ANNOUNCEMENT: 26, UPLOAD_FILE: 27, DELETE_FILE: 28, ADD_USER_WHITE_LIST: 29, REMOVE_USER_WHITE_LIST: 30, BAN_GROUP: 31, REMOVE_BAN_GROUP: 32, THREAD_CREATE: 33, THREAD_DESTROY: 34, THREAD_JOIN: 35, THREAD_LEAVE: 36, THREAD_KICK: 37, THREAD_UPDATE: 38, THREAD_PRESENCE: 39, THREAD_ABSENCE: 40, DISABLE_GROUP: 41, ABLE_GROUP: 42, SET_METADATA: 43, DELETE_METADATA: 44 } }, Setting: { fields: { name: { type: "string", id: 1 }, desc: { type: "string", id: 2 }, type: { type: "Type", id: 3 }, maxUsers: { type: "int32", id: 4 }, owner: { type: "string", id: 5 } }, nested: { Type: { values: { PRIVATE_OWNER_INVITE: 0, PRIVATE_MEMBER_INVITE: 1, PUBLIC_JOIN_APPROVAL: 2, PUBLIC_JOIN_OPEN: 3, PUBLIC_ANONYMOUS: 4 } } } }, Status: { fields: { errorCode: { type: "ErrorCode", id: 1 }, description: { type: "string", id: 2 } }, nested: { ErrorCode: { values: { OK: 0, PERMISSION_DENIED: 1, WRONG_PARAMETER: 2, MUC_NOT_EXIST: 3, USER_NOT_EXIST: 4, UNKNOWN: 5 } } } }, EventInfo: { fields: { eventType: { type: "EventType", id: 1, options: { default: "EVENT_NONE" } }, ext: { type: "string", id: 2 } }, nested: { EventType: { values: { EVENT_NONE: 0, CIRCLE_CHANNEL: 1 } } } } } }, RosterBody: { fields: { operation: { type: "Operation", id: 1 }, status: { type: "Status", id: 2 }, from: { type: "JID", id: 3 }, to: { rule: "repeated", type: "JID", id: 4 }, reason: { type: "string", id: 5 }, rosterVer: { type: "string", id: 6 }, biDirection: { type: "bool", id: 7 } }, nested: { Operation: { values: { GET_ROSTER: 0, GET_BLACKLIST: 1, ADD: 2, REMOVE: 3, ACCEPT: 4, DECLINE: 5, BAN: 6, ALLOW: 7, REMOTE_ACCEPT: 8, REMOTE_DECLINE: 9 } }, Status: { fields: { errorCode: { type: "ErrorCode", id: 1 }, description: { type: "string", id: 2 } }, nested: { ErrorCode: { values: { OK: 0, USER_NOT_EXIST: 1, USER_ALREADY_FRIEND: 2, USER_ALREADY_BLACKLIST: 3 } } } } } }, StatisticsBody: { fields: { operation: { type: "Operation", id: 1 }, os: { type: "OsType", id: 2 }, version: { type: "string", id: 3 }, network: { type: "NetworkType", id: 4 }, imTime: { type: "uint32", id: 5 }, chatTime: { type: "uint32", id: 6 }, location: { type: "string", id: 7 } }, nested: { Operation: { values: { INFORMATION: 0, USER_REMOVED: 1, USER_LOGIN_ANOTHER_DEVICE: 2, USER_KICKED_BY_CHANGE_PASSWORD: 3, USER_KICKED_BY_OTHER_DEVICE: 4 } }, OsType: { values: { OS_IOS: 0, OS_ANDROID: 1, OS_LINUX: 2, OS_OSX: 3, OS_WIN: 4, OS_OTHER: 16 } }, NetworkType: { values: { NETWORK_NONE: 0, NETWORK_WIFI: 1, NETWORK_4G: 2, NETWORK_3G: 3, NETWORK_2G: 4, NETWORK_WIRE: 5 } } } } } } } } } });
          Ue.prototype.root = Ze;
          var Ke = function(e3) {
            this.onOpen = qe.onSocketOpen, this.onClose = qe.onSocketClose, this.onMessage = qe.onSocketMessage, this.onError = qe.onSocketError, this.close = qe.closeSocket, this.send = qe.sendSocketMessage, this.connectSocket = qe.connectSocket, this.readyState = 0, this.connect = function() {
              qe.connectSocket({ url: e3.url, header: { "content-type": "application/json" }, success: function(e4) {
              }, fail: function() {
              } });
            };
          };
          Ue.prototype._getSock = function() {
            var e3;
            return this.sock && this.sock.close && this.sock.close(), (e3 = We.platform === "zfb" || We.platform === "dd" ? new Ke(this) : qe.connectSocket({ url: this.url, header: { "content-type": "application/json" }, success: function(e4) {
            }, fail: function(e4) {
              e4.errMsg.indexOf("suspend");
            }, complete: function() {
            } })).connect && e3.connect(), e3;
          }, Ue.prototype.getUniqueId = c.P6.getUniqueId, Ue.prototype.deviceId = "miniProgram_" + We.platform;
          var Ve = d.kg.getLogger("defaultLogger");
          Ve.setConfig({ useCache: false, maxCache: 3145728 }), Ve.enableAll(), c.P6.ajax = c.P6.wxRequest;
          var ze = { connection: Ue, message: Fe.Message, utils: c.P6, logger: Ve, statusCode: u.E };
        }(), n;
      }();
    });
  }
});

// dep:@_sdk_4_1_2_js
init_define_process_env_UNI_STAT_TITLE_JSON();
var sdk_4_1_2_js_default = require__();
export {
  sdk_4_1_2_js_default as default
};
//# sourceMappingURL=@_sdk_4_1_2_js.js.map
