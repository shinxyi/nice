$(document).ready(function(){

  $('button').click(function(){
    $.get("https://api.github.com/users/kellenmather", displayName, 'json')
  })
})

function displayName(data) {
  console.log(data);
  html = '';
  html += '<p>' + data.login + '</p>';
  $('p').html(html);
}
