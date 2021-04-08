const topTextInput = document.getElementById('top-text');
const bottomTextInput = document.getElementById('bottom-text');
const topTextSizeInput = document.getElementById('top-text-size-input');
const bottomTextSizeInput = document.getElementById('bottom-text-size-input');
const imageInput = document.getElementById('image-input');
const generateBtn = document.getElementById('generate-btn');
var downloadButton = document.getElementById('download');
var downbtn= document.getElementById('download-button');
const img = new Image();;
var brightBar= document.getElementById('brightness-bar');
var fontSize;
const canvas = document.getElementById('meme-canvas');
const ctx = canvas.getContext('2d');
var cp1=document.getElementById('colorpicker-1');
var cp2=document.getElementById('colorpicker-2');

function generateMeme(img, topText, bottomText, topTextSize, bottomTextSize) {
  
 
    canvas.width = img.width;
    canvas.height = img.height;
  
    
    canvas.width = img.width;
    canvas.height = img.height;
  
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.drawImage(img, 0, 0);
  
   


    ctx.fillStyle = cp1.value;
    ctx.strokeStyle = cp1.value;
    ctx.textAlign = 'center';
  
   
    fontSize = canvas.width * topTextSize;
    ctx.font = `${fontSize}px Impact`;
    ctx.lineWidth = fontSize / 20;
   
    ctx.setAttrubute
    ctx.textBaseline = 'top';
    topText.split('\n').forEach((t, i) => {
      ctx.fillText(t, canvas.width / 2, i * fontSize, canvas.width);
      ctx.strokeText(t, canvas.width / 2, i * fontSize, canvas.width);
    });
  
    fontSize = canvas.width * bottomTextSize;
    ctx.font = `${fontSize}px Impact`;
    ctx.lineWidth = fontSize / 20;


    ctx.fillStyle = cp2.value;
    ctx.strokeStyle = cp2.value;
  
    ctx.textBaseline = 'bottom';
    bottomText.split('\n').reverse().forEach((t, i) => { 
      ctx.fillText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width);
      ctx.strokeText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width);
    });



   






  downbtn.setAttribute('style','opacity:1; text-decoration:none;',);
  
  downloadButton.setAttribute( 'href', canvas.toDataURL('image/png', 1) );

  
  }
  
  window.addEventListener('DOMContentLoaded', () => {
    
    
    
    topTextInput.defaultValue = 'Top\nValue';
    bottomTextInput.defaultValue = 'Bottom\nValue';
  
    downbtn.setAttribute('style','opacity:0')
    generateBtn.addEventListener('click', () => {
      
      const reader = new FileReader();
      reader.onload = () => {
        
        img.src = reader.result;
        img.onload = () => {
          generateMeme(img, topTextInput.value, bottomTextInput.value, topTextSizeInput.value, bottomTextSizeInput.value);
        };
      };
      reader.readAsDataURL(imageInput.files[0]);
    });
  });
 topTextSizeInput.addEventListener('input', () => {
    generateMeme(img, topTextInput.value, bottomTextInput.value, topTextSizeInput.value, bottomTextSizeInput.value);
  }
  )

  bottomTextSizeInput.addEventListener('input', () => {
    generateMeme(img, topTextInput.value, bottomTextInput.value, topTextSizeInput.value, bottomTextSizeInput.value);
  }
  )

  cp1.addEventListener('input', () => {
    generateMeme(img, topTextInput.value, bottomTextInput.value, topTextSizeInput.value, bottomTextSizeInput.value);
  }
  )
  cp2.addEventListener('input', () => {
    generateMeme(img, topTextInput.value, bottomTextInput.value, topTextSizeInput.value, bottomTextSizeInput.value);
  }
  )
  topTextInput.addEventListener('input', () => {
    generateMeme(img, topTextInput.value, bottomTextInput.value, topTextSizeInput.value, bottomTextSizeInput.value);
  }
  )
  bottomTextInput.addEventListener('input', () => {
    generateMeme(img, topTextInput.value, bottomTextInput.value, topTextSizeInput.value, bottomTextSizeInput.value);
  }
  )
  