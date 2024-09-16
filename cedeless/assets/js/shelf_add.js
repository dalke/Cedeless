if (localStorage.gbApiKey) {
  GBApiKey = localStorage.gbApiKey;
}
if (localStorage.airtableToken) {
  AirtableToken = localStorage.airtableToken;
}
if (localStorage.airtableBase) {
  AirtableBase = localStorage.airtableBase;
}

const baseUrl = "https://www.giantbomb.com/api";
const gamesSearchUrl = baseUrl + '/games/?api_key=' + GBApiKey + '&format=jsonp&json_callback=searchCallback&field_list=name,original_release_date,site_detail_url&limit=10&offset=0&filter=name:';
const Airtable = require('airtable');
Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: AirtableToken
})
const base = new Airtable({ apiKey: AirtableToken }).base(AirtableBase);

$('#search').keydown(function(event){    
    if(event.keyCode==13){
       $('#submit').trigger('click');
    }
});

$("#submit").click(function() {
  var query = document.getElementById("search").value;
  $.ajax({
    url: encodeURI(gamesSearchUrl + query),
    dataType: "jsonp",
  });
});

function searchCallback(data) {
  $("#results").empty();
  $.each(data.results, function(i, data) {
      var div_data = "<tr><td><span class=\"game-name\"><a href=\"" + data.site_detail_url + "\" target=\"_blank\" rel=\"noopener noreferrer\">" + data.name + "</a></span><br/><span class=\"game-date\">" + data.original_release_date + "</span><input type=\"submit\" value=\"Send to Airtable\" class=\"send-button airtable-" + i + "\"></tr>";
      $(div_data).appendTo("#results");
  });

  $(".airtable-0").click(function() {
    base('Games').create({
      "Name": data.results[0].name,
      "Vintage": data.results[0].original_release_date
    }, function(err, record) {
        if (err) { console.log(err); return; }
    });
  });

  $(".airtable-1").click(function() {
    base('Games').create({
      "Name": data.results[1].name,
      "Vintage": data.results[1].original_release_date
    }, function(err, record) {
        if (err) { console.log(err); return; }
    });
  });

  $(".airtable-2").click(function() {
    base('Games').create({
      "Name": data.results[2].name,
      "Vintage": data.results[2].original_release_date
    }, function(err, record) {
        if (err) { console.log(err); return; }
    });
  });

  $(".airtable-3").click(function() {
    base('Games').create({
      "Name": data.results[3].name,
      "Vintage": data.results[3].original_release_date
    }, function(err, record) {
        if (err) { console.log(err); return; }
    });
  });

  $(".airtable-4").click(function() {
    base('Games').create({
      "Name": data.results[4].name,
      "Vintage": data.results[4].original_release_date
    }, function(err, record) {
        if (err) { console.log(err); return; }
    });
  });

  $(".airtable-5").click(function() {
    base('Games').create({
      "Name": data.results[5].name,
      "Vintage": data.results[5].original_release_date
    }, function(err, record) {
        if (err) { console.log(err); return; }
    });
  });

  $(".airtable-6").click(function() {
    base('Games').create({
      "Name": data.results[6].name,
      "Vintage": data.results[6].original_release_date
    }, function(err, record) {
        if (err) { console.log(err); return; }
    });
  });

  $(".airtable-7").click(function() {
    base('Games').create({
      "Name": data.results[7].name,
      "Vintage": data.results[7].original_release_date
    }, function(err, record) {
        if (err) { console.log(err); return; }
    });
  });

  $(".airtable-8").click(function() {
    base('Games').create({
      "Name": data.results[8].name,
      "Vintage": data.results[8].original_release_date
    }, function(err, record) {
        if (err) { console.log(err); return; }
    });
  });

  $(".airtable-9").click(function() {
    base('Games').create({
      "Name": data.results[9].name,
      "Vintage": data.results[9].original_release_date
    }, function(err, record) {
        if (err) { console.log(err); return; }
    });
  });
};