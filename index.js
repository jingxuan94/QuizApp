function showQuestion(){
  let temp = document.getElementById('startSec');
  let newHTML = `
  <div class="row justify-content-center">
    <div class = "text-center answer">
      <h5 class="display-5">What is a correct syntax to output "Hello World" in C#?</h5><br>
      <form class = "text-left">
        <input type="radio" name="1stQ" value="1" id="1st" class="1stQ">
        <label for "1st">print ("Hello");</label><br>
        <input type="radio" name="1stQ" value="2" id="2nd" class="1stQ">
        <label for "2nd">System.out.printIn("Hello World");</label><br>
        <input type="radio" name="1stQ" value="3" id="3rd" class="1stQ">
        <label for "3rd">Console.WriteLine("Hello World");</label><br>
        <input type="radio" name="1stQ" value="4" id="4th" class="1stQ">
        <label for "4th">cout<<"Hello World";</label><br>
      </form>
      <div class="row justify-content-end py-5">
        <button type="button" class="btn btn-primary" onclick="checkAnswer()">Submit</button>
      </div>
    </div>
  </div>`;
  temp.innerHTML = newHTML;
}

function checkAnswer(){
  let temp = document.getElementsByClassName('answer')[0];
  let newHTML ="";
  if (document.getElementById('3rd').checked){
     newHTML = "<h3>You are correct!!</h3>";
  }else{
    newHTML = "<h3>Sorry, you are wrong</h3>";
  }
  temp.innerHTML = newHTML.concat(`
    <div class = "py-5">
      <button type="button" class="btn btn-primary btn-lg" onclick="showQuestion()">Back to Question</button>
    </div>
  `);
}
