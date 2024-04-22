function setup() {
  createCanvas(windowWidth, windowHeight);
  // 產生一個文字框
  inputElement = createInput("淡江大學(●'◡'●)❤") 
  inputElement.position(50,30) //文字框位置:(50,50)
  inputElement.style("font-size","50px") //網頁中文字size
  inputElement.style("color","#c9ada7")
  inputElement.style("width","450px")
  //inputElement.style("background-color","#f7b801") //文字框背景顏色
  //inputElement.style("border","3px solid #f7b801") //設定文字框邊框

  //產生一個滑桿
  sliderElement= createSlider(10,50,20,0.01) //最小值，最大值，預設值，間距
  sliderElement.position(550,50)

  //產生一個按鈕
  btnElement =createButton("瘋狂")
  btnElement.position(730,40)
  btnElement.style("font-size","25px")
  btnElement.mousePressed(goCrazy) //按鈕按下時，須執行goCrazy

  //產生一個顏色選擇器
  colorPickerElement = createColorPicker("#c9ada7") //設定預設顏色
  colorPickerElement.position(850,45)
 
  
}
var randomValue = 0
var stop = true
function goCrazy(){
  if(stop){
    randomValue=3
    btnElement.html("停止");
    stop = false
  }
   else
   {
     randomValue=0  
     btnElement.html("瘋狂");
     stop = true
   }
 }
function draw() {
  background("#fefae0");
  txts = inputElement.value()  //傳入輸入之文字
  fill(colorPickerElement.value())
  txt_width = sliderElement.value()
  textSize(txt_width)
  textLenght=textWidth(txts)+50 // 計算文字長度
  for(y=140;y<height;y=y+txt_width+20){ 
  for(x=0;x<width;x=x+textLenght){
  text(txts,x+random(-randomValue,randomValue),y+random(-randomValue,randomValue))  //將文字顯示於視窗中心
    }
  }
}
