// JavaScript File
var P1 = document.getElementById("P1");
var messi = document.getElementById("messi");
var img = document.getElementById("img");
var stats = document.getElementById("stats");
var Legend = document.getElementById("Legend");
var howto = document.getElementById("howto");
//var(name) creates a variable
//getElementById finds the ID you're looking for and links it to the variable I created


messi.addEventListener("click", function(){
    img.innerHTML = '<center><img src="picture/Messi.png" width="500px"></img></center>';
    P1.innerHTML = '<p>' + "Lionel Messi born 24 June 1987 is an Argentine professional footballer who plays as a forward for Spanish club FC Barcelona and the Argentina national team. Often considered the best player in the world and regarded by many as the greatest of all time, Messi is the only player in history to win five FIFA Ballon d'Or awards, four of which he won consecutively, and a record-tying four European Golden Shoes. He has won 29 trophies with Barcelona, including eight La Liga titles, four UEFA Champions League titles, and five Copas del Rey. Both an amazing goalscorer and a creative playmaker, Messi holds the records for most official goals 360 scored in La Liga, a La Liga season of 50 goals and a club football season in Europe of 73 goals, a calendar year of 91 goals, as well as those for most assists made in La Liga with 139 asits and the Copa América of 11 assists. He has scored over 600 senior career goals for club and country.</p>";
    stats.innerHTML = '<img src="picture/MessiNational.png" width="500px"></img>'+'<img src="picture/MessiBarca.png" width="750px"></img>';
 Legend.innerHTML = '<p>' + "Legend: Apps= Appearances, Goals= Goals scored, Argentina U20= Players that are 20 years old playing against other 20 year old players from other countries, Argentina U23= Players that are 23 years old playing against other 23 year old players from other countries, Argentina= The official Argentina National team. </p>";
    
});
//addEventListener basically watches/listens for an event. For example when you click it reacts to your click and brings up the info.
//innerHTML linked to any variable changes to the HTML I replcae it with. So img.innerHTML will be replced with img src="picture/Messi.png".


var PualoDyabala = document.getElementById("PualoDyabala");



PualoDyabala.addEventListener("click", function(){
    img.innerHTML = '<center><img src="picture/PD.png" width="500px"></img></center>';
    P1.innerHTML = '<p>' + "Paulo Dybala was born on November 15, 1993 in Laguna Larga, Argentina. The earliest life story I could find was that he was in the Instituto Atletico Central Cordoba for young boys from 2003-2011. Then in 2011 he went into Instituto Atletico Central Cordoba U19 for 19 year old men. Every futbol player went through/will go through a U19 which is one all 19 year old players play a season of futbol and this is the time when scouts find the players they want and sign them. On July 20, 2012 he was signed to US Palermo in the Serie A league in Italy for 11,900,000 euros. Then, on July 1, 2015 Juventus a team also in the Serie A league signed Paulo Dybala for 40,000,000 euros and has been with the same team since. And his current price is 70,000,000 euros because currently at 24 yrs old he is an amazing player has skill and the potential to be a Legend. He is left footed and plays mainly in the CAM(Center Attacking MIdfielder)position. He also plays for the Argentinian national team. He also has a contract with Nike. Paulo Dybala is a 2x Serie A Champion, 2x Serie A Cup Winner, Italian Super Cup Winner, Italienischer Zweitligameister, and  Top Scorer.</p>";
     stats.innerHTML = '<img src="picture/PDstats.png" width="1000px"></img>';
      Legend.innerHTML = '<p>' + "Legend: GP= Games Played, GS= Games Started, G= Goals Scored, PKG= Penalty Kick Goals,  YC= Yellow Cards, RC= Red Cards, MP= Minutes Played.</p>";
});


var RomeluLukaku = document.getElementById("RomeluLukaku");



RomeluLukaku.addEventListener("click", function(){
    img.innerHTML = '<center><img src="picture/RL.png" width="500px"></img></center>';
    P1.innerHTML = '<p>' + "Romelu Lukaku was born on may 13, 1993 in ANtwerpen, Belgium. The earliest I can find is that in 2008 he was in the Belgium First Division A up until 2012. Then Chelsea had bought him for 22M euros on August 9, 2012. Then that exact year Chelsea put Lukaku on loan to West Bromwich to give him more experience. Then again the next year they put him on loan to Everton. After being with Everton for a year Everton bought Lukaku for 35M euros on July 7, 2014. After having three amazing years with Everton and he became one of the best strikers in the Premier English League Manchester United bought Lukaku for 84.7M euros on July 9, 2017 and has been doing pretty well so far.  Throughout his career he is a 2x First Division A Belgium winner, FA Cup winner, and a UEFA Champions League winner.</p>";
     stats.innerHTML = '<img src="picture/RLstats.png" width="700px"></img>';
      Legend.innerHTML = '<p>' + "Legend: Apps= Appearances, (Sub)= # of times Substituted</p>";
    
});


var StephCurry = document.getElementById("StephCurry");



StephCurry.addEventListener("click", function(){
    img.innerHTML = '<center><img src="picture/SC.png" width="500px"></img></center>';
    P1.innerHTML = '<p>' + "Steph Curry was born in Ohio in 1988 to former NBA player Dell Curry, Stephen Curry garnered national attention for his impressive play at Davidson College then he was drafted in 2009 by the Golden State Warriors. He got MVP and won the NBA Championship in 2015 by leading the Golden State Warriors to 73 wins, breaking league record . Then in 2016 Steph Curry became the only person to get MVP by unanimous vote and 1 of 11 to win the MVP award two times in a row.</p>";
     stats.innerHTML = '<img src="picture/SCstats.png" width="1300px"></img>';
      Legend.innerHTML = '<p>' + "Legend: Season= If listed as single number, the year the season ended, ★= Indicates All-Star for league, Age= Age of Player at the start of February 1st of that season, Tm = Team, Lg= League, Pos= Position, G= Games, GS= Games Started, MP= Minutes Played, FG= Field Goals, FGA= Field Goal Attempts, FG%= Field Goal Percentage, 3P= 3-Point Field Goals, 3PA= 3-Point Field Goal Attempts, 3P%= 3-Point Field Goal Percentage, 2P= 2-Point Field Goals, 2PA= 2-point Field Goal Attempts, 2P%= 2-Point Field Goal Percentage, eFG%= Effective Field Goal Percentage. This statistic adjusts for the fact that a 3-point field goal is worth one more point than a 2-point field goal. FT= Free Throws, FTA= Free Throw Attempts, FT%= Free Throw Percentage, ORB= Offensive Rebounds, DRB= Defensive Rebounds, TRB= Total Rebounds, AST= Assists, STL= Steals, BLK= Blocks, TOV= Turnovers, PF= Personal Fouls, PTS= Points.</p>";
    
});


var BusterPosey = document.getElementById("BusterPosey");



BusterPosey.addEventListener("click", function(){
    img.innerHTML = '<center><img src="picture/BP.jpg"width="500px"></img></center>';
    P1.innerHTML = '<p>' + "Buster Posey was born on March 27, 1987 in Leesburg, GA. He attended Lee County HS in Leesburg, GA. He was accepted into Florida State University in Tallahassee, FL. In 2008 the San Francisco Giants drafted Posey in the 1st round 5th pick. He was drafted as a catcher but also plays first base he also bats right and throws right. He has won MVP, Rookie of the Year, Gold Glove, 3x Silver Slugger, Batting Title, 5x All-Star, and 3x World Series Champion with the San Francisco Giants.</p>";
     stats.innerHTML = '<img src="picture/BPBatting.png" width="1000px">' + '</img> <img src="picture/BPFielding.png" width="1000px"></img>';
      Legend.innerHTML = '<p>' + "Legend Standard Batting: Year= A Star indicates an all-star that season.(A Ring indicates the player appeared in WS for winning team.), Age= Player’s age, Lg=  League(AL=American League, NL= National League), G= Games Played(This includes all times that the player appeared on the lineup card. Pitchers in non-DH games that appeared on the lineup card but didn't bat will still have a game in this column.), PA= Plate Appearances, AB= At Bats, R= Runs Scored/Allowed, H= Hits/Hits Allowed, 2B= Doubles Hit/Allowed, 3B= Triples Hit/Allowed, HR= Home Runs Hit/Allowed, RBI= Runs Batted In, SB= Stolen Bases, CS= Caught Stealing, BB= Bases on Balls/Walks, SO= Strikeouts, BA= Hits/At Bats, OBP= (H + BB + HBP)/(At Bats + BB + HBP + SF), SLG= Total Bases/At Bats or (1B + 2*2B + 3*3B + 4*HR)/AB, OPS= On-Base + Slugging Percentages, OPS+= OPS+(100*[OBP/lg OBP + SLG/lg SLG - 1]Adjusted to the player’s ballpark(s)), TB= Total Bases(Singles + 2 x Doubles + 3 x Triples + 4 x Home Runs.), GDP= Double Plays Grounded Into(Only includes standard 6-4-3, 4-3, etc. double plays.), HBP= (Times Hit by a Pitch.), SH= Sacrifice Hits (Sacrifice Bunts), SF= Sacrifice Flies, IBB= Intentional Bases on Balls, Pos= Position(’*’ indicates position played in 2/3rds of team games, ’/’ less than 10 games played.), Awards= Summary of how player did in awards voting that year.(GG - Gold Glove, SS - Silver Slugger, MVP - Most Valuable Player, CYA - Cy Young Award, ROY - Rookie of the Year)</p>" + '<p>' + "Legend Standard Fielding:Year= A Star indicates an all-star that season.(A Ring indicates the player appeared in WS for winning team.), Age= Player’s age at midnight of June 30th of that year, Pos= Position, Lg= League(AL - American League, NL - National League), G= Games Played(This includes all times that the player appeared on the lineup card. Pitchers in non-DH games that appeared on the lineup card but didn't bat will still have a game in this column.), GS= Games Started, CG= Complete Game, Inn= Innings Played in Field, Ch= Defensive Chances(Putouts + Assists + Errors), PO= Putouts, A= Assists, E= Errors Committed, DP= Double Plays Turned, Fld%= Fielding Percentage(Putouts + Assists) / (Putouts + Assists + Errors), Rtot= Total Zone Total Fielding Runs Above Avg(The number of runs above or below average the player was worth based on the number of plays made. This number combines the Rtz, Rdp, Rof, Rcatch numbers into a total defensive contribution.), Rdrs= BIS Defensive Runs Saved Above Avg(The number of runs above or below average the player was worth based on the number of plays made. This number combines the Rpm, Rbdp, Rbof, Rbcatch numbers into a total defensive contribution.), Rtot/yr= Total Zone Total Fielding Runs Above Avg per 1,200 Inn(The number of runs above or below average the fielder was worth per 1,200 Innings (approx 135 games).This number combines the Rtz, Rdp, Rof, Rcatch numbers into a total defensive contribution.), Rdrs/yr= BIS Defensive Runs Saved Above Avg per 1,200 Inn(The number of runs above or below average the fielder was worth per 1,200 Innings (approx 135 games). This number combines the Rpm, Rbdp, Rbof, Rbcatch numbers into a total defensive contribution.), RF/9= Range Factor per 9 Inn(9 * (Putouts + Assists) / Innings Played), RF/G= Range Factor per Game((Putouts + Assists) / Games Played), lgFld%= League Fielding Percentage(The fielding percentage of the league at this position.), lgRF9= League Range Factor per 9 Inn(Average Range Factor the league, 9 * (Putouts + Assists) / Innings Played), lgRFG= League Range Factor per Game(Average Range Factor for the league for chances per game(Putouts + Assists) / Games Played), PB= Passed Balls, WP= Wild Pitches, SB= Stolen Bases, CS= Caught Stealing, CS%= Caught Stealing Percentage(CS / (SB + CS)), lgCS%= League Caught Stealing Percentage(League Expected CS / Players SB + Players CS), PO= Pickoffs(Runner picked off a base. May include cases they were safe on an error. Also includes Pickoff Caught Stealing plays.), Awards= Summary of how player did in awards voting that year.(GG - Gold Glove, SS - Silver Slugger, MVP - Most Valuable Player, CYA - Cy Young Award, ROY - Rookie of the Year)</p>";
});



var CamNewton = document.getElementById("CamNewton");



CamNewton.addEventListener("click", function(){
    img.innerHTML = '<center><img src="picture/CN.png" width="500px"></img></center>';
    P1.innerHTML = '<p>' + "Cam Newton was born May 11, 1989 in College Park, GA. He attended Westlake HS in GA. Then he was accepted into Auburn University in Georgia. Coming into the 2011 NFL draft he was drafted in the 1st round and 1st overall pick by the Carolina Panthers and has been with them ever since. Cam Newton is a quarterback who is a right handed thrower he is 6’6 and 260lbs. He has taken the Panthers to the playoffs three times and has won the NFC South division and the NFC championship(which is going into the Finals but lost). Cam Newton himself has been a 3x Pro Bowl player, 1x All-Pro player, and 1x MVP.</p>";
     stats.innerHTML = '<img src="picture/CNstats.png" width="1000px"></img>';
      Legend.innerHTML = '<p>' + "Legend: GP= Games Played, CMP= Completions, ATT= Pass Attempts, CMP%= Completions Percentage, YDS= Passing Yards, AVG= Yards per pass attempt, TD= Passing Touchdowns, LNG= Longest Pass Play, INT= Interceptions Thrown, FUM= Total Fumbles, QBR= Total QuarterBack Rating, RAT= Passer(QB) Rating</p>";
    
});



howto.addEventListener("click", function(){
    img.innerHTML = '';
    P1.innerHTML = '<p>' + "HTML:</p>"+'<p>'+'<img src="picture/HTML.png" width="800px"></img>'+'</p>'+'<p>'+"So the top section is from HTML. The first half is the navbar and the buttons. In the navbar you give it an ID and put the name/word you want to show on the button itself. The second half is The divs, divs on my webpage were used to set up sections for text.images to be displayed when a viewer clicks a button. So for example div id=img sections off the images. The img src=ME.jpg is the image on the home page and the same code above it that is blank is an image that I will be putting in. Another part is minor but important the center code which centers text/images.</p>";
     stats.innerHTML = '<p>'+"CSS:</p>"+'<p>'+'<img src="picture/CSS.png" width="1000px"></img>'+"</p>"+'<p>'+"The CSS is main part of the navbar the display:inline-block is what made the navabr in one line instead of a list. The section that is #P1, #Stats, and #Legend are the styling for images and text in the javascript. For example #P1 creates color font(white), background color(black), position of text, size of the border, and padding. And P1 connects with the P1.innerhtml in my javascript. Another for navbar is the border color and size, which is border:12px ridge purple. And the background color of inside the navbar would be white. Lastly, the background image its just background: url(insert url of image) no repeat center fixed; background-size: cover; which makes th ebackground not repeated image and that it covers th ewhole back screen.   </p>";
      Legend.innerHTML = '<p>' + "Javascript:</p>"+'<p>'+'<img src="picture/Javascript.png" width="1000px"></img>'+"</p>"+'<p>'+"The var(name) creates the variable, and the getElementById finds the ID you're looking for and links it to the variable I created. The addEventListener basically watches/listens for an event. For example when you click it reacts to your click and brings up the info. And the innerHTML linked to any variable changes to the HTML I replace it with. So img.innerHTML will be replced with img src=picture/Messi.png</p>"+'<p>' + "Resources:</p>"+'<p>'+'<p>'+"<li>"+'<a href= "https://www.w3schools.com/js/">W3schools</a>'+'</li>'+"</p>"+"About Me Page</p>"+'<p>'+"<li>"+'<a href= "http://www.espnfc.com/player/45843/lionel-messi">Messi Summary</a>'+'</li>'+"</p>"+'<p>'+"<li>"+'<a href= "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=2&cad=rja&uact=8&ved=0ahUKEwj8oPfvsJHXAhVlrVQKHeJ8A6QQFggrMAE&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FLionel_Messi&usg=AOvVaw2_WUn7Mhn-IWt-jVcMAtrE">Messi Stats</a>'+'</li>'+"</p>"+'<p>'+"<li>"+'<a href= "http://int.soccerway.com/players/paulo-dybala/201072/">Dybala Summary</a>'+'</li>'+"</p>"+'<p>'+"<li>"+'<a href= "http://www.foxsports.com/soccer/paulo-dybala-player-stats">Dybala Stats</a>'+'</li>'+"</p>"+'<p>'+"<li>"+'<a href= "https://www.premierleague.com/players/4290/Romelu-Lukaku/overview">Lukakau</a>'+'</li>'+"</p>"+'<p>'+"<li>"+'<a href= "https://www.basketball-reference.com/players/c/curryst01.html">Stephen Curry</a>'+'</li>'+"</p>"+'<p>'+"<li>"+'<a href= "https://www.baseball-reference.com/players/p/poseybu01.shtml">Buster Posey</a>'+'</li>'+"</p>"+'<p>'+"<li>"+'<a href= "http://www.nfl.com/player/camnewton/2495455/careerstats">Cam Newton</a>'+'</li>'+"</p>";
});