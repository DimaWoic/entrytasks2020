function printTriangle() {
    sharp = '# ';
    space = ' ';
    count = 5;
    c_space = 5;


    for(let i=0; i<count; i++) {
    space = space + ' ';
    }

    for(let i=0; i<count; i++) {
    console.log(space + sharp);
    sharp = sharp + '# ';  
    space = space.slice(0, c_space);
    c_space = c_space - 1;
    }
}    
