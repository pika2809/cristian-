class Form {

    constructor() {
        this.title = createElement("h2");
        this.truebtn = createButton('True');
        this.falsebtn = createButton('False');
        this.question = createDiv('');
      
    }
    hide(){
        this.title.hide();
        this.truebtn.hide();
        this.falsebtn.hide();
    }
  
    display(){
        this.question.id = "question-text"
        
        this.title.html("Go Corona");
        this.title.position(130, 0);
  
        this.truebtn.position(150, 160);
        this.falsebtn.position(250, 160);
        this.truebtn.id = "True";
        this.falsebtn.id = "False";
  
    }
  }
  