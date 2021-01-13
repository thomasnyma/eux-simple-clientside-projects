const billeder = [ 'billeder/a.jpg', 'billeder/b.jpg', 'billeder/c.jpg', 'billeder/d.jpg', 'billeder/e.jpg', 'billeder/f.jpg', 'billeder/g.jpg',  ];
let billedeStor = false;
let billedeNummer = 0;

window.addEventListener( 'load', () => {
    document.getElementById( 'KnapTilbage' ).onclick = GalleriBilledeTilbage;
    document.getElementById( 'KnapFrem' ).onclick = GalleriBilledeFrem;
    document.getElementById( 'GalleriBillede' ).onclick = GalleriBilledeStor;

    GalleriLavThumbnails();
});

function GalleriBilledeTilbage() {
    if ( billedeNummer == 0 ) {
        billedeNummer = billeder.length - 1;
    } else {
        billedeNummer -= 1;
    }
    document.getElementById( 'GalleriBillede' ).src = billeder[ billedeNummer ];
}

function GalleriBilledeFrem() {
    if ( billedeNummer ==  billeder.length - 1) {
        billedeNummer = 0;
    } else {
        billedeNummer += 1;
    }
    document.getElementById( 'GalleriBillede' ).src = billeder[ billedeNummer ];
}

function GalleriLavThumbnails() {
    let AntalBilleder = billeder.length;
    let ThumbnailNummer = 0;

    while ( ThumbnailNummer < AntalBilleder ) {
        document.getElementById( 'GalleriThumbnails' ).innerHTML += '<a onclick="GalleriBilledeSkift(' + ThumbnailNummer + ')"></a>';
        ThumbnailNummer += 1;
    }
}

function GalleriBilledeSkift( SkiftBilledeNummer ) {
    document.getElementById( 'GalleriBillede' ).src = billeder[ SkiftBilledeNummer ];
}

function GalleriBilledeStor() {
    if ( billedeStor == false ) {
        document.getElementById( 'Galleri' ).style.position = 'fixed';
        billedeStor = true;
    } else {
        document.getElementById( 'Galleri' ).style.position = 'relative';
        billedeStor = false;
    }
}