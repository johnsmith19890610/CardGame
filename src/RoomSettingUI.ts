// TypeScript file
class RoomSettingUI extends eui.Component{

    constructor( ) {
        super();

        //UI구성이 끝난시점에서 button들을 정의하고 event를 붙이기
        // this.addEventListener( eui.UIEvent.COMPLETE, this.uiCompHandler, this );
        this.skinName = "resource/custom_skins/roomSettingUISkin.exml";
    }
}