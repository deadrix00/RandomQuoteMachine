var twitter="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=";
var quoteText = "";
var num = 0;
$(document).ready(function(){
        $(".quote-text").on("click",function(){prompt("do you like the quote ?");});
        $.getJSON("quote.json",function(json){
                $("#new-quote-button").on("click",function(){
                        num = Math.floor(Math.random()*(json.length-1));
                        var element = JSON.stringify(json);
                        var allQuote = [];
                        json.forEach(function(val){
                                allQuote.push(val);
                                console.log(allQuote);
                                num = Math.floor(Math.random()*(allQuote.length-1));
                                var values = Object.values(allQuote[num]);
                                $(".author-change").html(values[1]);
                                $(".quote-text").html(values[0]);
                                console.log(values[1]);
                                twitter = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="+"'"+values[0]+"'"+"---"+values[1];
                                $("a").attr("href",twitter);
                        });
                });
        });
});
