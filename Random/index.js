document.getElementById('random').onclick = () => {
    let x = Math.floor((Math.random() * 4) + 1);


    if (x === 1) {
        
           
        document.getElementsByTagName('h3')[0]
            .innerText = 'Hữu'
         return;
    }
    if (x === 2) {
        
        document.getElementsByTagName('h3')[0]
            .innerText = 'Ngọc'
        return;
    }
    if (x === 3) {
        
        document.getElementsByTagName('h3')[0]
            .innerText = 'Na'
        return;
    }
    else {
        
        document.getElementsByTagName('h3')[0]
            .innerText = 'Hiền'
        return;
    }
}




