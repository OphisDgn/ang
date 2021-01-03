function getStudentList() {
  var xhr = new XMLHttpRequest(); 
  xhr.open('GET', 'http://127.0.0.1:8000/api/students/1');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      var reponse = JSON.parse(xhr.responseText);
      alert(reponse.name);
    }
  };
  xhr.send();
}
