var chance = 6
var luncharray = ["Sri Petaling <br> Mixed Rice <br> 杂饭", "Uncle Jang", "Murni", "Serdang <br> Mixed Rice <br> 杂饭", "Sri Petaling <br> Fishhead Mihun <br> 鱼头米粉", "Serdang <br> Fishhead Mihun <br> 鱼头米粉", "Serdang <br> Yong Taufu", "Serdang Industry <br> Chicken Rice" , "Serdang <br> Yong Taufu" , "Owls Cafe" , "OUG Porridge" , "OUG <br> Ah Loi <br> 亞来" , "Burger King" , "Mcd" , "KFC" , "Pizzahut" , "Dominos Pizza" , "Endah Perade <br> Chicken rice" , "Wan Tan Mee <br> 雲吞面" , "Serdang <br> Yong Taufu" ,"Kuchai <br> Fishhead Mihun <br> 鱼头米粉", "有間麵館" , "Wisma Scope ", "Maybank Cafe" , "SAN Francisco", "Mixed Rice <br> 杂饭", "Bah Ku Teh <br> 肉骨茶", "Kinrara <br> Yong Taufu" , "Kuchai Basil Cafe", "Vegetarian Mixed Rice <br> 斋杂饭", "肥陶" , "大家食堂 <br> vegetarian", "Mixed Rice <br> 杂饭", "Popo Kitchen", "Korean Food", "Thai Food", "猪脚醋", "spaghetti", "Vegetarian <br> 文献坊", "Mixed Rice <br> 杂饭"]


function randomlunch() {
	chance --;
	if (chance == 0) {
		alert("Don't Spam Me Please :(")
		chance = luncharray.length
	}
	else {
		
		
		var randomNumber = Math.round(Math.random() * luncharray.length)
		
		document.getElementById("output001").innerHTML = luncharray[randomNumber] 

	}
}



