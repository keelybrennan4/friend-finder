//use to link css styling at the top of each sheet
app.use(express.static(path.join(__dirname,'public')))

var friends = [
  {
  name: "joe",
  photo: "url..",
  scores: [
      4,
      5,
      2,
      1,
      4,
      5,
      1,
      1,
      2,
      1,
  ]
  }
];


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

