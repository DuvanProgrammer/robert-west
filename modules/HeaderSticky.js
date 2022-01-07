const stickyHeader = () => {
    const HeaderPrincipal = document.getElementById('rw-header-p')
    if(HeaderPrincipal){
        window.onscroll = function() {
            let y = window.scrollY;
            if(y > 100){
                HeaderPrincipal.classList.add('rwHeaderFixed')
            } else {
                HeaderPrincipal.classList.remove('rwHeaderFixed')
            }
        };
    }
}

export default stickyHeader