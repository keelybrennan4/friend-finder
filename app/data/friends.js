
//function Friend(name, photo, answer1, answer2, answer3, answer4, answer5, answer6) {
  //this.name = name;
  //this.photo = url;
  //this.q1 = answer1;
  //this.question2 = answer2;
  //this.question3 = answer3;
  //this.question4 = answer4;
  //this.question5 = answer5;
  //this.question6 = answer6;
//}

//var person = new Friend("Keely", "url", 2, 1, 5, 4, 1, 3);
//console.log(new Friend);

var friend = {
      name: $("#name").val(),
      photo: $("#photo").val(),
      scores: [
        $("#q1").val(),
        $("#q2").val(),
        $("#q3").val(),
        $("#q4").val(),
        $("#q5").val(),
        $("#q6").val(),
        $("#q7").val(),
        $("#q8").val(),
        $("#q9").val(),
        $("q10").val(),
      ]
    }
    //make an AJAX post to the friends API with user input values 
    $.post("/api/friends", userData, function(data){

    //get results from AJAX post so that the best match's name and pic are displayed 
    $("#match-name").text(data.name);
    $("#match-img").attr("src", data.photo);
    $("#results").modal("toggle");
    });
    
  //}else{
  //  alert("Error! Please complete the fields before submitting!");
  //}
  //});


  var friends = [
    {
      routeName: "darthmaul",
      name: "Darth Maul",
      role: "Sith Lord",
      age: 200,
      forcePoints: 1200
    },
    {
      routeName: "obiwankenobi",
      name: "Obi Wan Kenobi",
      role: "Jedi Master",
      age: 55,
      forcePoints: 1350
    }
  ];

