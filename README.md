# FontAwesome.pri

FontAwesome.pri bundle FontAwesome font and icons table into a single project for QML project.

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
   
    
