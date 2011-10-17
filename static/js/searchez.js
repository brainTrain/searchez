$(document).ready(function() {
/* 
var jsonFile = $.ajax(
                  {
                    url: "loggly.php",
                    dataType: 'json',
                    async: false
                  }).responseText;
 
var pJSON = $.parseJSON(jsonFile);
var looper = pJSON.numFound;
//document.write(looper); 

var ip=new Array();
 
for (i=0;i<looper;i++) {
 
    ip[i] = { value: pJSON.data[i].ip, label: (i+1)+"-"+pJSON.data[i].ip }; 

 
 // document.write(ip[i]); 
}
 
function numberSort(a,b) {
    return a-b;
}
*/ 
        VS.init({
          container  : $('.visual_search'),
          query      : 'ip: "50.0.134.114" browser: "Chrome"',
          unquotable : [
            'text',
            'ip',
            'isjson',
            'inputname',
            'browser',
            'inputid'
          ],
          callbacks  : {
            search : function(query) {},
            facetmatches : function() {
              return [ 'browser', 'isjson', 'inputid', 'ip', 'inputname' ];
            },
            valueMatches : function(category) {
              switch (category) {
                case 'ip':
                  return [ '50.0.134.114', 'NUMBERAZ', 'MUNBORZ'];

                case 'isjson':
                  return [ 'true', 'false'];

                case 'inputname':
                  return [ 'http-bossemails' ];

                case 'browser':
                  return [ "IE", "Chrome", "Safari", "Firefox" ];

                case 'inputid':
                  return [ "3819" ];
              }
            }
          }
        });
      });
