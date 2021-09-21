let questionsList;
let questions;
let width = 1242;
let height = 2208;

let title = "WHY?"
let titleX = 10;
let titleY = 10;

// text
let text_size = 35;
let textX = 10;
let textY = 10;
let text_width = 200;
let text_height = 100;
let offsetY = text_size / 5 + text_size;

//button
let gui;
let buttons;
let buttonX = 50;
let buttonY = 50;
let buttonW = width - 2*buttonX;
let buttonH = text_size*1.8;
let buttonOffset = buttonH + 5;

function preload() {
    questionsList = loadStrings('data/2_chatbots.txt');
}

function setup() {
    createCanvas(width, height);
    //fullscreen();
    colorMode(RGB, 255, 255, 255, 1);
    background(100);

    newQuestions();


    newButtons();
}

function draw() {
    clear();
    background(100);

    showTitle();

    showButtons();

    for (let i in questions) {
        let q = questions[i];
        //console.log(q);
        //q.show();
    }
}

function showTitle() {
    textSize(70);
    textStyle(BOLD);
    textAlign(LEFT, TOP);
    fill(color(255, 204, 0));
    text(title, titleX, titleY);
}

function newQuestions() {
    let text_color = color(255, 204, 0);

    questions = new Array();
    for (let i in questionsList) {
        questions.push(new Questions(textX, textY = textY + offsetY, text_width, text_height, questionsList[i], text_size, text_color));
        //console.log(questions[i]);
    }
}

function newButtons() {
    gui = createGui();
    buttons = new Array();
    for (let i in questionsList) {
        let b = createButton(questionsList[i], buttonX, buttonY = buttonY + buttonOffset, buttonW, buttonH);
        b.labelOn = "嗯嗯是啊是啊";
        b.setStyle({
            fillBg: color("#FF0000"),
            rounding: 10,
            textSize: text_size,
        });
        buttons.push(b);
    }
}

function showButtons() {
    drawGui();
}

class Questions { // 一个问题
    constructor(x, y, x2, y2, textContent, size, col) {
        this.x = x;
        this.y = y;
        this.x2 = x2;
        this.y2 = y2;
        this.textContent = textContent;
        this.size = size;
        this.col = col;

        this.len = 0;
        for (let i in textContent) {
            //console.log(i);
            this.len++;
        }
        //console.log(this.len);
    }

    show() {
        noStroke();
        textAlign(LEFT, TOP);
        textSize(this.size);
        textStyle(NORMAL);
        fill(this.col);

        text(this.textContent, this.x, this.y, this.x2, this.y2);
    }

    move() {}

    run() {
        this.show();
    }
}