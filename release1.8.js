warned = false
setInterval(function(){window.top.document.title = "OWoT + Jupiter"},1)
alert('Welcome to Jupiter!')
writeCharTo=(char,color,tileX,tileY,charX,charY)=>{writeBuffer.push([tileY,tileX,charY,charX,getDate,char,nextObjId,color])}; 
menu.addOption("Flush",_=>{flushWrites()});
menu.addEntry('<h5 id="writebuffermeter">█▬█ █▄█ █▬█</h5>');setInterval(_=>{document.getElementById('writebuffermeter').innerText="Writebuffer Length:"+writeBuffer.length},0)
! function() {
    w.setFlushInterval(0);
    var e = [..."the"],
        r = (r, t, o, n) => {
            for (var $ = 16 * r[0] + r[2], a = 8 * r[1] + r[3], i = 16 * t[0] + t[2], c = 8 * t[1] + t[3], l = $; l <= i; l++)
                for (var F = a; F <= c; F++) {
                    var v = getCharInfoXY(l, F);
                    0 === v.protection && writeCharToXY("█", Math.floor(Math.random() * 16777215), l, F)
                }
        };
    menu.addOption("Colored Static", () => {
        var e = RegionSelection();
        e.init(), e.onselection(r), e.startSelection()
    }), console.log('Check the menu for the button')
}();

function generateRandomHexAndConvert() {
    const randomHex = Math.floor(Math.random() * 0xff).toString(16).padStart(2, '0');
    const repeatedHex = randomHex.repeat(3);
    const decimal = parseInt(repeatedHex, 16);
    return decimal;
}! function() {
    w.setFlushInterval(0);
    var e = [..."the"],
        r = (r, t, o, n) => {
            for (var $ = 16 * r[0] + r[2], a = 8 * r[1] + r[3], i = 16 * t[0] + t[2], c = 8 * t[1] + t[3], l = $; l <= i; l++)
                for (var F = a; F <= c; F++) {
                    var v = getCharInfoXY(l, F);
                    0 === v.protection && writeCharToXY("█", generateRandomHexAndConvert(), l, F)
                }
        };
    menu.addOption("Black and White Static", () => {
        var e = RegionSelection();
        e.init(), e.onselection(r), e.startSelection()
    }), console.log('Check the menu for the other button')
}();
! function() {
    w.setFlushInterval(0);
    var e = [..."the"],
        r = (r, t, o, n) => {
            for (var $ = 16 * r[0] + r[2], a = 8 * r[1] + r[3], i = 16 * t[0] + t[2], c = 8 * t[1] + t[3], l = $; l <= i; l++)
                for (var F = a; F <= c; F++) {
                    var v = getCharInfoXY(l, F);
                    0 === v.protection && writeCharToXY("█", 15658734, l, F)
                }
        };
    menu.addOption("Fake Member Protect", () => {
        var e = RegionSelection();
        e.init(), e.onselection(r), e.startSelection()
    }), console.log('why do you read these')
}();
! function() {
    w.setFlushInterval(0);
    var e = [..."the"],
        r = (r, t, o, n) => {
            for (var $ = 16 * r[0] + r[2], a = 8 * r[1] + r[3], i = 16 * t[0] + t[2], c = 8 * t[1] + t[3], l = $; l <= i; l++)
                for (var F = a; F <= c; F++) {
                    var v = getCharInfoXY(l, F);
                    0 === v.protection && writeCharToXY("█", 14540253, l, F)
                }
        };
    menu.addOption("Fake Owner Protect", () => {
        var e = RegionSelection();
        e.init(), e.onselection(r), e.startSelection()
    }), console.log('please just stop looking at console')
}();
! function() {
    w.setFlushInterval(0);
    var e = [..."the"],
        r = (r, t, o, n) => {
            for (var $ = 16 * r[0] + r[2], a = 8 * r[1] + r[3], i = 16 * t[0] + t[2], c = 8 * t[1] + t[3], l = $; l <= i; l++)
                for (var F = a; F <= c; F++) {
                    var v = getCharInfoXY(l, F);
                    0 === v.protection && writeCharToXY(" ", 0, l, F)
                }
        };
    menu.addOption("Wiper", () => {
        var e = RegionSelection();
        e.init(), e.onselection(r), e.startSelection()
    }), console.log('the')
}();
! function() {
    w.setFlushInterval(0);
    var e = [..."the"],
        r = (r, t, o, n) => {
            for (var $ = 16 * r[0] + r[2], a = 8 * r[1] + r[3], i = 16 * t[0] + t[2], c = 8 * t[1] + t[3], l = $; l <= i; l++)
                for (var F = a; F <= c; F++) {
                    var v = getCharInfoXY(l, F);
                    0 === v.protection && writeCharToXY("█", 0, l, F)
                }
        };
    menu.addOption("Censorfag-inator", () => {
        var e = RegionSelection();
        e.init(), e.onselection(r), e.startSelection()
    }), console.log('...')
}();
function getcol() {
 const hexColor = prompt("Enter a hexadecimal color (e.g., #FFFFFF):");




 // Convert hex to decimal
 col = parseInt(hexColor, 16);
}

! function() {
    w.setFlushInterval(0);
    var e = [..."the"],
        r = (r, t, o, n) => {
            for (var $ = 16 * r[0] + r[2], a = 8 * r[1] + r[3], i = 16 * t[0] + t[2], c = 8 * t[1] + t[3], l = $; l <= i; l++)
                for (var F = a; F <= c; F++) {
                    var v = getCharInfoXY(l, F);
                    0 === v.protection && writeCharToXY("█", col, l, F)
                }
        };
    menu.addOption("Make a colored box", () => {
        var e = RegionSelection();
        getcol()
        e.init(), e.onselection(r), e.startSelection()
    }), console.log('the j')
}();
! function() {
    w.setFlushInterval(0);
    var e = [..."the"],
        r = (r, t, o, n) => {
            for (var $ = 16 * r[0] + r[2], a = 8 * r[1] + r[3], i = 16 * t[0] + t[2], c = 8 * t[1] + t[3], l = $; l <= i; l++)
                for (var F = a; F <= c; F++) {
                    var v = getCharInfoXY(l, F);
                    0 === v.protection && writeCharToXY("█", (((Math.abs(l)%8)^(Math.abs(-F%8)))*32), l, F)
                }
        };
    menu.addOption("XOR paster", () => {
        var e = RegionSelection();
        e.init(), e.onselection(r), e.startSelection()
    }), console.log('xored')
}();
function tintStatic(inputColor) {
  // Generate a random grayscale color with consistent lightness
  const grayscale = Math.floor(Math.random() * 256);
  const grayscaleHex = grayscale.toString(16).padStart(2, '0');
  const grayscaleColor = `#${grayscaleHex}${grayscaleHex}${grayscaleHex}`;

  // Parse the input color into RGB components
  const inputColorRgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(inputColor);
  const inputRed = parseInt(inputColorRgb[1], 16);
  const inputGreen = parseInt(inputColorRgb[2], 16);
  const inputBlue = parseInt(inputColorRgb[3], 16);

  // Blend the grayscale and input colors
  const blendedRed = Math.floor((grayscale + inputRed) / 2);
  const blendedGreen = Math.floor((grayscale + inputGreen) / 2);
  const blendedBlue = Math.floor((grayscale + inputBlue) / 2);

  // Convert the blended color to a hex string
  const blendedHex = blendedRed.toString(16).padStart(2, '0') +
                       blendedGreen.toString(16).padStart(2, '0') +
                       blendedBlue.toString(16).padStart(2, '0');

  return parseInt(blendedHex,16);
}
function getcolhex() {
 const hexColor = prompt("Enter a hexadecimal color (e.g., #FFFFFF):");




 // Convert hex to hex
 colh = hexColor
}
! function() {
    w.setFlushInterval(0);
    var e = [..."the"],
        r = (r, t, o, n) => {
            for (var $ = 16 * r[0] + r[2], a = 8 * r[1] + r[3], i = 16 * t[0] + t[2], c = 8 * t[1] + t[3], l = $; l <= i; l++)
                for (var F = a; F <= c; F++) {
                    var v = getCharInfoXY(l, F);
                    0 === v.protection && writeCharToXY("█", tintStatic(colh), l, F)
                }
        };
    menu.addOption("Tinted Static", () => {
        getcolhex();
        var e = RegionSelection();
        e.init(), e.onselection(r), e.startSelection()
    }), console.log('tinty')
}();
setInterval(function(){if (!state.worldModel.pathname && !warned){alert('WARNING! IF YOU DO NOT WANT TO BE RATELIMITED, DO NOT SPAM USING THIS.'); warned = true}}, 1)
! function() {
    w.setFlushInterval(0);
    var e = [..."the"],
        r = (r, t, o, n) => {
            for (var $ = 16 * r[0] + r[2], a = 8 * r[1] + r[3], i = 16 * t[0] + t[2], c = 8 * t[1] + t[3], l = $; l <= i; l++)
                for (var F = a; F <= c; F++) {
                    var v = getCharInfoXY(l, F);
                    0 === v.protection && writeCharToXY(String.fromCharCode(Math.floor(Math.random() * 65536)), Math.floor(Math.random() * 16777215), l, F)
                }
        };
    menu.addOption("Unicode", () => {
        var e = RegionSelection();
        e.init(), e.onselection(r), e.startSelection()
    }), console.log('the')
}();
! function() {
    w.setFlushInterval(0);
    var e = [..."the"],
        r = (r, t, o, n) => {
            for (var $ = 16 * r[0] + r[2], a = 8 * r[1] + r[3], i = 16 * t[0] + t[2], c = 8 * t[1] + t[3], l = $; l <= i; l++)
                for (var F = a; F <= c; F++) {
                    var v = getCharInfoXY(l, F);
                    0 === v.protection && writeCharToXY(chosenUnicode, 0, l, F)
                }
        };
    menu.addOption("Create Unicode Block", () => {
        var e = RegionSelection();
        chosenUnicode = prompt("Insert a Unicode character. (Note: Only the first character will be used if it's a string.)")
        e.init(), e.onselection(r), e.startSelection()
    }), console.log('the')
}();
! function() {
    count = 0
    w.setFlushInterval(0);
    var e = [..."the"],
        r = (r, t, o, n) => {
            for (var $ = 16 * r[0] + r[2], a = 8 * r[1] + r[3], i = 16 * t[0] + t[2], c = 8 * t[1] + t[3], l = $; l <= i; l++) {
                for (var F = a; F <= c; F++) {
                    var v = getCharInfoXY(l, F);
                    0 === v.protection && writeCharToXY(chosenUnicode.charAt(count%chosenUnicode.length), 0, l, F)

                };  count++}
        };
    menu.addOption("Create Unicode String Block", () => {
        var e = RegionSelection();
        chosenUnicode = prompt("Insert a Unicode string.")
        e.init(), e.onselection(r), e.startSelection()
    }), console.log('the')
}();
! function() {
    w.setFlushInterval(0);
    var e = [..."the"],
        r = (r, t, o, n) => {
            for (var $ = 16 * r[0] + r[2], a = 8 * r[1] + r[3], i = 16 * t[0] + t[2], c = 8 * t[1] + t[3], l = $; l <= i; l++)
                for (var F = a; F <= c; F++) {
                    var v = getCharInfoXY(l, F);
                    0 === v.protection && writeCharToXY(v.char, 0, l, F)
                }
        };
    menu.addOption("Remove Colors", () => {
        var e = RegionSelection();
        e.init(), e.onselection(r), e.startSelection()
    }), console.log('wahhhh i hate color')
}();
! function() {
    w.setFlushInterval(0);
    var e = [..."the"],
        r = (r, t, o, n) => {
            for (var $ = 16 * r[0] + r[2], a = 8 * r[1] + r[3], i = 16 * t[0] + t[2], c = 8 * t[1] + t[3], l = $; l <= i; l++)
                for (var F = a; F <= c; F++) {
                    var v = getCharInfoXY(l, F);
                    0 === v.protection && writeCharToXY(v.char, Math.floor(Math.random() * 16777215), l, F)
                }
        };
    menu.addOption("Add Colors", () => {
        var e = RegionSelection();
        e.init(), e.onselection(r), e.startSelection()
    }), console.log('yayyy i love color !!!')
}();
! function() {
    w.setFlushInterval(0);
    var e = [..."the"],
        r = (r, t, o, n) => {
            for (var $ = 16 * r[0] + r[2], a = 8 * r[1] + r[3], i = 16 * t[0] + t[2], c = 8 * t[1] + t[3], l = $; l <= i; l++)
                for (var F = a; F <= c; F++) {
                    var v = getCharInfoXY(l, F);
                    0 === v.protection && writeCharToXY(v.char, generateRandomHexAndConvert(), l, F)
                }
        };
    menu.addOption("Add Static (Keeps Characters)", () => {
        var e = RegionSelection();
        e.init(), e.onselection(r), e.startSelection()
    }), console.log('yayyy i love tatic !!!')
}();
! function() {
    w.setFlushInterval(0);
    var e = [..."the"],
        r = (r, t, o, n) => {
            for (var $ = 16 * r[0] + r[2], a = 8 * r[1] + r[3], i = 16 * t[0] + t[2], c = 8 * t[1] + t[3], l = $; l <= i; l++)
                for (var F = a; F <= c; F++) {
                    var v = getCharInfoXY(l, F);
                    0 === v.protection && writeCharToXY("█", v.color, l, F)
                }
        };
    menu.addOption("Add Blocks (Keeps Colors)", () => {
        var e = RegionSelection();
        e.init(), e.onselection(r), e.startSelection()
    }), console.log('yayyy i love bolcks !!!')
}();
! function() {
    w.setFlushInterval(0);
    var e = [..."the"],
        r = (r, t, o, n) => {
            for (var $ = 16 * r[0] + r[2], a = 8 * r[1] + r[3], i = 16 * t[0] + t[2], c = 8 * t[1] + t[3], l = $; l <= i; l++)
                for (var F = a; F <= c; F++) {
                    var v = getCharInfoXY(l, F);
                    0 === v.protection && writeCharToXY(v.char, v.color+Math.floor(Math.random()*(intensity*3)-intensity*2), l, F)
                }
        };
    menu.addOption("Color Offset", () => {
        intensity = prompt('How intense do you want the offset to be?')
        var e = RegionSelection();
        e.init(), e.onselection(r), e.startSelection()
    }), console.log('the')
}();

! function() {
    w.setFlushInterval(0);
    var e = [..."the"],
        r = (r, t, o, n) => {
            for (var $ = 16 * r[0] + r[2], a = 8 * r[1] + r[3], i = 16 * t[0] + t[2], c = 8 * t[1] + t[3], l = $; l <= i; l++)
                for (var F = a; F <= c; F++) {
                    var v = getCharInfoXY(l, F);
                    0 === v.protection && writeCharToXY(v.char, 16777216, l, F)
                }
        };
    menu.addOption("hide (not delete) text", () => {
        var e = RegionSelection();
        e.init(), e.onselection(r), e.startSelection()
    }), console.log('the')
}();

