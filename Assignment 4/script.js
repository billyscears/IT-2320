var Main = {};

Main.BandA = function(bandName, singer, guitarist, bassist, drummer)
{
    this.BandName = bandName;   
    this.Singer = singer;
    this.Guitarist = guitarist;
    this.Bassist = bassist;
    this.Drummer = drummer;
}

Main.BandB = function(bandName, singer, guitarist, leadGuitarist, bassist, drummer, turntablist)
{
    this.BandName = bandName;   
    this.Singer = singer;
    this.Guitarist = guitarist;
    this.LeadGuitarist = leadGuitarist;
    this.Bassist = bassist;
    this.Drummer = drummer;
    this.Turntablist = turntablist;
}
 
Main.BandA.prototype.GetFullBand1 = function()
{
	return this.BandName + " comprises..." + "<br/>" +
           "Singer/Guitarist: " + this.Singer + "<br/>" + 
           "Guitarist: " + this.Guitarist + "<br/>" + 
           "Bassist: " + this.Bassist + "<br/>" + 
           "Drummer: " + this.Drummer; 
}

Main.BandA.prototype.GetFullBand2 = function()
{
	return this.BandName + " comprises..." + "<br/>" +
           "Singer: " + this.Singer + "<br/>" + 
           "Guitarist: " + this.Guitarist + "<br/>" + 
           "Bassist: " + this.Bassist + "<br/>" + 
           "Drummer: " + this.Drummer; 
}

Main.BandB.prototype.GetFullBand3 = function()
{
	return this.BandName + " comprises..." + "<br/>" +
           "Singer: " + this.Singer + "<br/>" + 
           "Guitarist/Singer/Piano: " + this.Guitarist + "<br/>" + 
           "Guitarist: " + this.LeadGuitarist + "<br/>" + 
           "Bassist: " + this.Bassist + "<br/>" + 
           "Drummer: " + this.Drummer + "<br/>" + 
           "Turntables: " + this.Turntablist;
}

Main.Metallica = new Main.BandA("Metallica", "James Hetfield", "Kirk Hammett", "Robert Trujillo", "Lars Ulrich");

Main.TheSmashingPumpkins = new Main.BandA("The Smashing Pumpkins", "Billy Corgan", "James Iha", "D'arcy Wretzky", "Jimmy Chamberlin");

Main.Tool = new Main.BandA("Tool", "Maynard James Keenan", "Adam Jones", "Justin Chancellor", "Danny Carey");

Main.LinkinPark = new Main.BandB("Linkin Park", "Chester Bennington", "Mike Shinoda", "Brad Delson", "Dave Farrel", "Rob Bourdon", "Joe Hahn");

document.body.innerHTML = Main.Metallica.GetFullBand1();
document.body.innerHTML += "<br/><br/>";

document.body.innerHTML += Main.TheSmashingPumpkins.GetFullBand1();
document.body.innerHTML += "<br/><br/>";

document.body.innerHTML += Main.Tool.GetFullBand2();
document.body.innerHTML += "<br/><br/>";

document.body.innerHTML += Main.LinkinPark.GetFullBand3();
document.body.innerHTML += "<br/><br/>";

document.body.innerHTML += "Three of my favorite guitarists are: " + Main.Metallica.Guitarist + ", " + Main.TheSmashingPumpkins.Singer + ", and " + Main.Tool.Guitarist + ".";