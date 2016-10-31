pragma Singleton
import QtQuick 2.0

Object {

    FontLoader {
        source: "./fontawesome-webfont.ttf"
    }

    property string fontFamily: "FontAwesome"

    property string addressBook : "\uf2b9"
}
