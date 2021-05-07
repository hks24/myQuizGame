class Question{
    constructor(){
       this.input1 = createInput("Enter Your Name");
       this.input2 = createInput("Enter Your Answer");
       this.button = createButton('Submit');
       this.question = createElement('h3');
       this.title = createElement('h1');
       this.option1 = createElement('h4');
       this.option2 = createElement('h4');
       this.option3 = createElement('h4');
       this.option4 = createElement('h4');

      
    }
    hide() {
        this.input2.hide();
        this.button.hide();
        this.input1.hide();
        this.title.hide();
    }
    display() {
      
        this.title.html("My Quiz Game");
        this.title.position(350,20)
        
        this.question.html("Question:- What start and ends with letter 'e', but has only one letter?");
        this.question.position(150,80);

        this.option1.html("1:Everyone");
        this.option1.position(150,100);

        this.option2.html("2:Envelope");
        this.option2.position(150,120);
        
        this.option3.html("2:Estimate");
        this.option3.position(150,140);

        this.option4.html("2:Example");
        this.option4.position(150,160);

        this.input1.position(150,230);
        this.input2.position(350,230);
        this.button.position(200,300);


        this.button.mousePressed(() => {
            this.input1.hide();
            this.title.hide();
            this.button.hide();

            contestent.name = this.input1.value();
            contestentCount += 1;
            contestent.index = contestentCount;
            contestent.update();
            contestent.updateCount(contestentCount);
        });

       
    }
}