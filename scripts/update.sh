#!/bin/sh
# Update FontAwesome.pri from // https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/scss/_variables.scss

PROPERTIES=`mktemp`
node convert.js _variables.scss > $PROPERTIES
sed "/Icons/ r $PROPERTIES" template > ../FontAwesome/FontAwesome.qml