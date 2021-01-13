window.addEventListener( 'load', () => {
    MenuPunktAktiv();
});

MenuPunktAktiv = () => {
    const current = '' + window.location;
    const nav = document.getElementById( 'HovedMenu' );
    const anchor = nav.getElementsByTagName( 'a' );

    if( current.search( '.html' ) == -1 ) {
        current = current + 'index.html';
    }

    for( let i = 0; i < anchor.length; i++ ) {
        if( current.toLowerCase() == anchor[i].href.toLowerCase() ) {
            anchor[i].className = 'active';
        }
    }
}