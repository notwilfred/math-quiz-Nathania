function send(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    acutual_answer=parseInt(number1) * parseInt(number2);
    }
    questionturn="player1"
    answerturn="player2"
    function check(){
    get_answer=document.getElementById("input_check_box").value;
    if (getanswer==acutual_answer)
    
    if (answerturn=="player1"){
    update_player1_score=player1_score +1;
    document.getElementById("player1_score").innerHTML=update_player1_score;
    }
    else{
        update_player2_score=player2_score +1;
        document.getElementById("player2_score").innerHTML=update_player2_score;
    }
    
    
    if (questionturn=="player1"){
        questionturn="player2";
        document.getElementById("player_question").innerHTML="question turn-"+ player2_name;
        }
    else{
        questionturn="player1";
        document.getElementById("player_question").innerHTML="question turn-"+ player1_name;
    }
        
    }