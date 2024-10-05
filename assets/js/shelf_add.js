let gbApiKey;
let airtableToken;
let airtableBase;

if (localStorage.gbApiKey) {
  gbApiKey = localStorage.gbApiKey;
}
if (localStorage.airtableToken) {
  airtableToken = localStorage.airtableToken;
}
if (localStorage.airtableBase) {
  airtableBase = localStorage.airtableBase;
}

const baseUrl = "https://www.giantbomb.com/api";
const gamesSearchUrl =
  baseUrl +
  "/games/?api_key=" +
  gbApiKey +
  "&format=jsonp&json_callback=searchCallback&field_list=name,original_release_date,site_detail_url&limit=10&offset=0&filter=name:";
const Airtable = require("airtable");
Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: airtableToken,
});
const base = new Airtable({ apiKey: airtableToken }).base(airtableBase);

const searchField = document.querySelector("#search");
const submitButton = document.querySelector("#submit");

searchField.addEventListener("keydown", logKey);

const searchAction = async () => {
  let searchQueryTerm = document.getElementById("search").value;
  const searchQueryUrl = encodeURI(gamesSearchUrl + searchQueryTerm);
  console.log(searchQueryUrl);

  const response = await fetch(searchQueryUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log(response);
};

function logKey(event) {
  if (event.keyCode == 13) {
    searchAction();
  }
}

submitButton.addEventListener("click", (event) => {
  searchAction();
});

// $("#submit").click(function () {
//   var query = document.getElementById("search").value;
//   $.ajax({
//     url: encodeURI(gamesSearchUrl + query),
//     dataType: "jsonp",
//   });
// });

// function searchCallback(data) {
//   $("#results").empty();
//   $.each(data.results, function (i, data) {
//     var div_data =
//       '<tr><td><span class="game-name"><a href="' +
//       data.site_detail_url +
//       '" target="_blank" rel="noopener noreferrer">' +
//       data.name +
//       '</a></span><br/><span class="game-date">' +
//       data.original_release_date +
//       '</span><input type="submit" value="Send to Airtable" class="send-button airtable-' +
//       i +
//       '"></tr>';
//     $(div_data).appendTo("#results");
//   });
//
//   $(".airtable-0").click(function () {
//     base("Games").create(
//       {
//         Name: data.results[0].name,
//         Vintage: data.results[0].original_release_date,
//       },
//       function (err, record) {
//         if (err) {
//           console.log(err);
//           return;
//         }
//       }
//     );
//   });
//
//   $(".airtable-1").click(function () {
//     base("Games").create(
//       {
//         Name: data.results[1].name,
//         Vintage: data.results[1].original_release_date,
//       },
//       function (err, record) {
//         if (err) {
//           console.log(err);
//           return;
//         }
//       }
//     );
//   });
//
//   $(".airtable-2").click(function () {
//     base("Games").create(
//       {
//         Name: data.results[2].name,
//         Vintage: data.results[2].original_release_date,
//       },
//       function (err, record) {
//         if (err) {
//           console.log(err);
//           return;
//         }
//       }
//     );
//   });
//
//   $(".airtable-3").click(function () {
//     base("Games").create(
//       {
//         Name: data.results[3].name,
//         Vintage: data.results[3].original_release_date,
//       },
//       function (err, record) {
//         if (err) {
//           console.log(err);
//           return;
//         }
//       }
//     );
//   });
//
//   $(".airtable-4").click(function () {
//     base("Games").create(
//       {
//         Name: data.results[4].name,
//         Vintage: data.results[4].original_release_date,
//       },
//       function (err, record) {
//         if (err) {
//           console.log(err);
//           return;
//         }
//       }
//     );
//   });
//
//   $(".airtable-5").click(function () {
//     base("Games").create(
//       {
//         Name: data.results[5].name,
//         Vintage: data.results[5].original_release_date,
//       },
//       function (err, record) {
//         if (err) {
//           console.log(err);
//           return;
//         }
//       }
//     );
//   });
//
//   $(".airtable-6").click(function () {
//     base("Games").create(
//       {
//         Name: data.results[6].name,
//         Vintage: data.results[6].original_release_date,
//       },
//       function (err, record) {
//         if (err) {
//           console.log(err);
//           return;
//         }
//       }
//     );
//   });
//
//   $(".airtable-7").click(function () {
//     base("Games").create(
//       {
//         Name: data.results[7].name,
//         Vintage: data.results[7].original_release_date,
//       },
//       function (err, record) {
//         if (err) {
//           console.log(err);
//           return;
//         }
//       }
//     );
//   });
//
//   $(".airtable-8").click(function () {
//     base("Games").create(
//       {
//         Name: data.results[8].name,
//         Vintage: data.results[8].original_release_date,
//       },
//       function (err, record) {
//         if (err) {
//           console.log(err);
//           return;
//         }
//       }
//     );
//   });
//
//   $(".airtable-9").click(function () {
//     base("Games").create(
//       {
//         Name: data.results[9].name,
//         Vintage: data.results[9].original_release_date,
//       },
//       function (err, record) {
//         if (err) {
//           console.log(err);
//           return;
//         }
//       }
//     );
//   });
// }
