var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
// TypeScript file
var CreateRoomUI = (function (_super) {
    __extends(CreateRoomUI, _super);
    function CreateRoomUI() {
        var _this = _super.call(this) || this;
        //UI구성이 끝난시점에서 button들을 정의하고 event를 붙이기
        // this.addEventListener( eui.UIEvent.COMPLETE, this.uiCompHandler, this );
        _this.skinName = "resource/custom_skins/createRoomUISkin.exml";
        return _this;
    }
    return CreateRoomUI;
}(eui.Component));
__reflect(CreateRoomUI.prototype, "CreateRoomUI");
//# sourceMappingURL=CreateRoomUI.js.map