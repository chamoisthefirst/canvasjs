const canvas = {
    create:function(width, height, name){
        if(!name){
            name = "canvasjs_default";
        }
        let newCanvas = document.createElement('canvas');
        newCanvas.id=`canvasjs_${name}`;
        newCanvas.width = width;
        newCanvas.height = height;
        document.body.appendChild(newCanvas);
    },
    write:function (name, data){
        if(name === 0){
            name = "canvasjs_default";
        }
        let c = document.getElementById(`canvasjs_${name}`).getContext('2d');
        
        for(let y = 0; y < data.length; y++){
            for(let x = 0; x < data[x].length; x+=9){
                let curPixel = [parseInt(`${data[y][x]}${data[y][x+1]}${data[y][x+2]}`),parseInt(`${data[y][x+3]}${data[y][x+4]}${data[y][x+5]}`),parseInt(`${data[y][x+6]}${data[y][x+7]}${data[y][x+8]}`)];
                c.fillStyle = `rgba(${curPixel.join(", ")})`;
                c.fillRect(x/9,y,1,1);
            }
        }
    },
    rect:function (x, y, width, height, fill, name){
        if(!name){
            name = "canvasjs_default";
        }
        let c = document.getElementById(`canvasjs_${name}`).getContext('2d');
        c.fillStyle = `rgba(${fill})`;
        c.fillRect(x, y, width, height);
    }
}


// const canvas = {
//     backgroundColor:'ffffff',
//     width:600,
//     height:600,
//     create:function(name, width, height){
//         const screen = document.createElement('div');
//         screen.id=`canvasjs_${name}`;
//         screen.style.display='inline';

        

//         const disp = document.createElement('canvas');
//         disp.id=`canvasjs_${name}_display`;
//         disp.style.width=`${width}px`;
//         disp.style.height=`${height}px`;
//         disp.style.backgroundColor='#000';
//         screen.appendChild(disp);

//         document.getElementById('output').appendChild(screen);
//     },
//     write:function (name, data){
//         let width = data[0].length;
//         const screen = document.createElement("div");
//         screen.style.backgroundColor='#000';
//         screen.style.width=`${width/3}px`
    
//         for(var i = 0; i < data.length; i++){
//             for(var j = 0; j < data[i].length; j+=3){
//                 let curPixel = `#${data[i][j]}${data[i][j+1]}${data[i][j+2]}`;
//                 const pixel = document.createElement("canvas");
//                 // pixel.style.color=curPixel;
//                 pixel.style.backgroundColor=curPixel;
//                 pixel.classList.add("pixel");
//                 // pixel.innerText=".";
//                 // pixel.style.fontSize=`${fontSize}px`;
//                 pixel.style.width=`1px`;
//                 pixel.style.height=`1px`;
//                 screen.appendChild(pixel);
//             }
//         }
    
//         document.getElementById(`canvasjs_${name}_display`).appendChild(screen);
    
//     },
//     read:function(){
//         return 
//     }
// }