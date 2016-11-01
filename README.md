# FontAwesome.pri

FontAwesome.pri bundle FontAwesome font and icon table into a single module for QML project.

Features
--------

 1. Installable by qpm
 2. Work well with Qt Quick Designer. Able to show icons in "Design" mode
 3. Auto completion of icon name works in Qt Creator.
 
Example
-------
 
 ```
import QtQuick 2.0
import FontAwesome 1.0

Text {
  // The font will be loaded once the singleton object, FontAwesome, is referred in the application.
  text: FontAwesome.addressBook
  font.family: FontAwesome.fontFamily 
}
```
 
![Screenshot](https://raw.githubusercontent.com/benlau/fontawesome.pri/master/docs/designmode.png)

Installation
------------

Install FontAwesome.pri by qpm:

    qpm install font.awesome.pri
    
Add "qrc://" to your QML import path

    engine.addImportPath("qrc:///"); // QQmlEngine

API
---

**FontAwesome**

FontAwesome is a signleton object. 
Once it is referred in your code, it will load the font into memory. 
Then it will be available for all other components.
Therefore, it is recommended to refer it on main.qml.

**FontAwesome.fontFamily**

It hold the font name. You may pass to the `font.family` in Text component

**Icon Table**

Moreover, FontAwesome object also hold a icon table. 
For complete icon list, please check the source of [FontAwesome.qml](https://github.com/benlau/fontawesome.pri/blob/master/FontAwesome/FontAwesome.qml) file.
