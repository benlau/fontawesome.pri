# FontAwesome.pri

FontAwesome.pri bundle FontAwesome font and icons table into a single project for QML project.

Remarks: This project is still under development

Features
--------

 1. Available in qpm 
 2. Work well with Qt Quick Designer. Able to show icons in "Design" mode
 3. Auto completion of icon name works in Qt Creator.
 
Example
-------
 
 ```
import FontAwesome 1.0

Text {
  text: FontAwesome.addressBook
  family: FontAwesome.fontFamily
}
```
 
 TODO: Screenshot
 
