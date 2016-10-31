import QtQuick 2.5
import FontAwesome 1.0

Rectangle {

    width: 360
    height: 360

    Text {
        text: FontAwesome.addressBook
        font.pointSize: 36
        anchors.fill: parent
        verticalAlignment: Text.AlignVCenter
        horizontalAlignment: Text.AlignHCenter
        font.family: FontAwesome.fontFamily
    }

}
