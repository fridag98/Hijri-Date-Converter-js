//<script src="https://rawgit.com/abdennour/hijri-date/master/cdn/hijri-date-latest.min.js" type="text/javascript" ></script>
//sudo npm install hijri-date
require('hijri-date');

//the method toHijri() returns a day ahead therefore convert the gregorian date a day before
//return hijri date as an object with all its properties
function hijriDateConverter(date){
	date.setDate(date.getDate()-1);
	var dateBefore = date;
	return dateBefore.toHijri();
}

//return the hijri number of the day from the gregorian date received
function hijriDateConverterParts(year, month, day){
	var hijriDate = new Date(year, month, day).toHijri();
    hijriDate.subtractDay();
    return hijriDate._date;
}

//return the name of the month in hijri. Subtract 1 to find on the array.
function hijriMonthConverter(number){
	var months = ['Muharram','Safar','Rabi al-Awwal','Rabi al-Thani','Yumada al-Wula','Yumada al-Thania','Rayab','Sha abán','Ramadán','Shawwal','Du al-Qa da','Du al-Hiyya'];
	return months[number-1];
}

//return the name of the weekDay in hijri. Subtract 1 to find on the array.
function hijriWeekDayConverter(number){
	var days = ["Al-ithnáyn", "Al-thalatha", "Al-arba'a", "Al-jamís", "Al-yuma'a", "As-sabt", "Al-áhad"];
	return days[number-1];
}
