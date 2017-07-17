var storage = window.localStorage;
var hasRanBefore = storage.getItem('hasRanBefore');

if(hasRanBefore==null){
	//it means that it is firstTime
	console.log("first time");
	storage.setItem('hasRanBefore',true);
	var jsonData = '{"data":[{"title":"Surat Mahanagar Palika","users":[{"name":"Moolchand  Jain","number":9825161917,"dob":"1972-06-26T00:00:00.000Z"},{"name":"Pratap Goplani","number":9825459810,"dob":"1958-01-07T00:00:00.000Z"},{"name":"Pukhraj Nagda","number":9879240351,"dob":"1974-05-01T00:00:00.000Z"},{"name":"Nitin Patel","number":9687644001,"dob":"1976-09-29T00:00:00.000Z"},{"name":"Himmatbhai Kava","number":9879527005,"dob":"1955-01-18T00:00:00.000Z"},{"name":"Rajan Desai","number":9033162377,"dob":"1965-08-04T00:00:00.000Z"},{"name":"Vijay Gheewala","number":9427473396,"dob":"1965-06-30T00:00:00.000Z"},{"name":"Rajendeep Singh","number":9824117123,"dob":"1971-09-10T00:00:00.000Z"},{"name":"Subhash Sharma","number":9328292052,"dob":"1972-07-13T00:00:00.000Z"},{"name":"Trilok Chandswami","number":9374718173,"dob":"1961-10-01T00:00:00.000Z"},{"name":"Ramkrishna Patil","number":9979940880,"dob":"1964-01-18T00:00:00.000Z"},{"name":"Anil Patel","number":9825510968,"dob":"1975-01-10T00:00:00.000Z"},{"name":"Champakbhai Maviya","number":9824114711,"dob":"1960-08-04T00:00:00.000Z"},{"name":"Anshul Patel","number":9228204341,"dob":"1973-12-20T00:00:00.000Z"},{"name":"Dhanjibhai Somani","number":9825021026,"dob":"1965-05-01T00:00:00.000Z"},{"name":"Girish Rajgor","number":9228467007,"dob":"1975-04-07T00:00:00.000Z"},{"name":"Ramesh Khanijo","number":9426153347,"dob":"1962-11-06T00:00:00.000Z"},{"name":"Amitpuri Gosai","number":9725048411,"dob":"1977-01-07T00:00:00.000Z"},{"name":"Jashvant Parmar","number":9723581764,"dob":"1964-03-24T00:00:00.000Z"},{"name":"Champaklal Nagda","number":9727899172,"dob":"1969-02-25T00:00:00.000Z"},{"name":"Ishwarbhai Mahajan","number":9723064723,"dob":"1975-05-21T00:00:00.000Z"},{"name":"Jayantbhai Chaliyawala","number":9825054156,"dob":null},{"name":"Shantidasbhai ","number":9428150538,"dob":"1969-09-19T00:00:00.000Z"},{"name":"Dinesh Morya","number":null,"dob":null},{"name":"Jivaram Bhai","number":7567009282,"dob":"1965-06-17T00:00:00.000Z"},{"name":"Dharmendra Bhai","number":9427133042,"dob":"1973-09-07T00:00:00.000Z"},{"name":"Kamlesh Bhai","number":null,"dob":null}]},{"title":"Nadiyad Vibhag","users":[{"name":"Anand Shah","number":9426273040,"dob":"1976-01-12T00:00:00.000Z"},{"name":"Bhavesh Panchal","number":9913296736,"dob":"1974-09-25T00:00:00.000Z"},{"name":"Jayraj Joshi","number":7623037817,"dob":"1972-08-05T00:00:00.000Z"},{"name":"Yogesh Jani","number":9558295583,"dob":"1974-04-10T00:00:00.000Z"},{"name":"Ashokkumar Joshi","number":9879261520,"dob":"1969-03-21T00:00:00.000Z"},{"name":"Manojkumar Patel","number":7041599234,"dob":"1973-11-17T00:00:00.000Z"},{"name":"Jaydip Gor","number":9825019991,"dob":"1967-08-19T00:00:00.000Z"},{"name":"Manharlal Nayi","number":9228840009,"dob":"1954-09-15T00:00:00.000Z"},{"name":"Ravindrakumar Patel","number":9874385522,"dob":"1963-08-15T00:00:00.000Z"},{"name":"Narendra Patil","number":9427041969,"dob":"1973-03-03T00:00:00.000Z"},{"name":"Kamlesh Sutariya","number":9427857430,"dob":"1966-07-03T00:00:00.000Z"},{"name":"Nitin Jani","number":9157710881,"dob":"1959-07-31T00:00:00.000Z"},{"name":"Rakeshkumar Patel","number":9825584116,"dob":"1971-06-05T00:00:00.000Z"},{"name":"Dineshbhai Dali","number":9426816131,"dob":"1976-05-31T00:00:00.000Z"},{"name":"Dr. Krushnaprasad Niroba","number":9427853675,"dob":"1954-08-10T00:00:00.000Z"},{"name":"Dr. Keshavbhai Kamaliya","number":9427558899,"dob":"1964-10-26T00:00:00.000Z"},{"name":"Jitendra Brahmbhatt","number":9427330477,"dob":"1967-10-01T00:00:00.000Z"},{"name":"Paresh Prajapati","number":9427004851,"dob":"1971-06-02T00:00:00.000Z"},{"name":"Alkesh Gelot","number":9426045556,"dob":"1976-06-20T00:00:00.000Z"},{"name":"Kalpeshbhai Patel","number":8140323460,"dob":"1974-10-07T00:00:00.000Z"},{"name":"Nitin Shah","number":7383723311,"dob":"1965-05-17T00:00:00.000Z"},{"name":"Shantibhai Patel","number":9824485316,"dob":null},{"name":"Kalidas Panchal","number":9925218775,"dob":null},{"name":"Dayabhai Patel","number":9925981943,"dob":null},{"name":"Jayantibhai Patel","number":9427854587,"dob":null},{"name":"Viral Varaiya","number":9726340951,"dob":null},{"name":"Rajendra Raval","number":9825019991,"dob":null},{"name":"Dharmeshbhai Mehta","number":9429843549,"dob":"1969-01-18T00:00:00.000Z"}]},{"title":"Junagadh-Bhavnagar-Gandhinagar Vibhag","users":[{"name":"Manubhai lakhatria","number":9429968185,"dob":"1958-08-30T00:00:00.000Z"},{"name":"Siddhraj Zala","number":9427088906,"dob":"1969-12-22T00:00:00.000Z"},{"name":"Riteshbhai Soni","number":9427045913,"dob":"1970-10-23T00:00:00.000Z"},{"name":"Vashrambhai Kavjariya","number":9824875137,"dob":"1962-06-01T00:00:00.000Z"},{"name":"Kanubhai Vekaria","number":9426783010,"dob":"1969-07-12T00:00:00.000Z"},{"name":"Pradipbhai kanzariya","number":8735879301,"dob":"1975-10-04T00:00:00.000Z"},{"name":"Vashrambhai Rajabhai","number":9998949052,"dob":null},{"name":"Ramnik Jivrajbhai","number":9426967799,"dob":"1966-06-01T00:00:00.000Z"},{"name":"Bhavesh Vekaria","number":9624444999,"dob":"1976-09-30T00:00:00.000Z"},{"name":"Mansukh Vaghela","number":8154058499,"dob":null},{"name":"Hardevsingh Gohil","number":9427496349,"dob":"1957-09-01T00:00:00.000Z"},{"name":"Satishnandlal Kulavat","number":9725048437,"dob":"1971-12-24T00:00:00.000Z"},{"name":"Prema Bhai","number":9427837644,"dob":null},{"name":"Vinod Isotiya","number":9913084052,"dob":"1977-01-04T00:00:00.000Z"},{"name":"Dr. Mukesh Patel","number":9537288837,"dob":"1972-06-05T00:00:00.000Z"},{"name":"Yogendra Shah","number":9427247099,"dob":null},{"name":"Kanjibhai Kanadan","number":9898814257,"dob":"1971-02-01T00:00:00.000Z"},{"name":"Kuman Khunt","number":9879012963,"dob":"1959-07-02T00:00:00.000Z"},{"name":"Vinod Vinzuda","number":9426852505,"dob":"1965-05-29T00:00:00.000Z"},{"name":"Daresh Parsadga","number":9426717676,"dob":"1967-08-01T00:00:00.000Z"}]},{"title":"Navsari Vibhag","users":[{"name":"Hitesh Lad","number":9327742823,"dob":"1971-06-25T00:00:00.000Z"},{"name":"Hitesh Bhandari","number":9925664209,"dob":"1972-09-22T00:00:00.000Z"},{"name":"Rajan Bhatt","number":886428452,"dob":"1966-07-24T00:00:00.000Z"},{"name":"Gangadharan Thiya","number":9426869089,"dob":"1960-04-25T00:00:00.000Z"},{"name":"Tejsingh Bhadoria","number":9586674487,"dob":"1976-04-04T00:00:00.000Z"},{"name":"Narayan Patel","number":9925186355,"dob":null},{"name":"Mukesh Rathod","number":9687807368,"dob":"1972-05-15T00:00:00.000Z"},{"name":"Ramesh Avinashi","number":7600115785,"dob":"1961-06-01T00:00:00.000Z"},{"name":"Rameshchandra Soni","number":9427868699,"dob":null},{"name":"Jayant Joshi","number":9979170173,"dob":"1965-11-07T00:00:00.000Z"},{"name":"Balvir Tandel","number":9909100444,"dob":null},{"name":"Anandbhai","number":9898587532,"dob":null}]},{"title":"Mehsana Kutch Vibhag","users":[{"name":"Jagdish Patel","number":9925292961,"dob":"1976-01-15T00:00:00.000Z"},{"name":"Kumbha Patel","number":9723720189,"dob":"1971-06-01T00:00:00.000Z"},{"name":"Dilipsingh Vaghela","number":9427044441,"dob":"1978-11-04T00:00:00.000Z"},{"name":"Dr. Chandansinh Chavda","number":9427201522,"dob":"1974-12-21T00:00:00.000Z"},{"name":"Bhuraji Rathod","number":9426898434,"dob":"1972-05-31T00:00:00.000Z"},{"name":"Praveen Patel","number":9427897166,"dob":"1975-11-26T00:00:00.000Z"},{"name":"Rambhai Madi","number":9427309756,"dob":null},{"name":"Nareshkumar Joshi","number":9427064903,"dob":"1973-10-28T00:00:00.000Z"},{"name":"Ishwargiri Goswami","number":9978199326,"dob":null},{"name":"Sujalal Thakkar","number":9979425005,"dob":"1959-06-20T00:00:00.000Z"},{"name":"Rajubhai Prajapati","number":9824532314,"dob":"1976-06-01T00:00:00.000Z"},{"name":"Kamlesh Prajapati","number":9427547348,"dob":"1975-08-04T00:00:00.000Z"},{"name":"Manubhai Desai","number":9429936600,"dob":"1955-11-10T00:00:00.000Z"},{"name":"Dr. Sanjaykumar Desai","number":9978405325,"dob":"1976-05-28T00:00:00.000Z"},{"name":"Shankar Godiv","number":9427477361,"dob":null},{"name":"Chagan Chaudhary","number":9913070776,"dob":"1958-06-01T00:00:00.000Z"},{"name":"Kiranbhai Darji","number":9428946436,"dob":null},{"name":"Motibhai Desai","number":9909403718,"dob":"1989-06-01T00:00:00.000Z"},{"name":"Sanjay Desai","number":null,"dob":null},{"name":"Bhavesh Joshi","number":null,"dob":null},{"name":"Shavan Trivedi","number":null,"dob":null},{"name":"Jivanbhai Aahir","number":9925498199,"dob":null},{"name":null,"number":null,"dob":null}]},{"title":"Karnavati Vibhag","users":[{"name":"Dipesh Thakar","number":9898765319,"dob":"1974-01-29T00:00:00.000Z"},{"name":"Manish Patel","number":9427614340,"dob":"1978-10-02T00:00:00.000Z"},{"name":"Mahendra Prajapati","number":9247614881,"dob":"1972-12-05T00:00:00.000Z"},{"name":"Dr. Ragnesh Desai","number":9825274126,"dob":"1975-12-29T00:00:00.000Z"},{"name":"Amrut Saneki","number":9099477191,"dob":null},{"name":"Vinod Patel","number":9898042537,"dob":"1959-06-01T00:00:00.000Z"},{"name":"Jagdish Koy","number":9376146793,"dob":"1960-04-07T00:00:00.000Z"},{"name":"Bhupendra Chudasama","number":9924633512,"dob":null},{"name":"Champak Soni","number":9898779415,"dob":"1960-08-12T00:00:00.000Z"},{"name":"Rushiraj Bhatt","number":9925255755,"dob":"1972-11-05T00:00:00.000Z"},{"name":"Manibhai Patel","number":9427593035,"dob":"1952-06-01T00:00:00.000Z"},{"name":"Bharat Panchal","number":9879618478,"dob":"1956-04-30T00:00:00.000Z"}]},{"title":"Vadodara Vibhag","users":[{"name":"Viral Chaudhary","number":9374107017,"dob":"1976-12-05T00:00:00.000Z"},{"name":"Sharad Patel","number":9898576928,"dob":"1969-05-10T00:00:00.000Z"},{"name":"Ramesh Shah","number":7874056589,"dob":"1973-06-30T00:00:00.000Z"},{"name":"Eknath Balavde","number":8511779436,"dob":"1955-06-27T00:00:00.000Z"},{"name":"Jagdish Bhai","number":9427697193,"dob":"1972-11-29T00:00:00.000Z"},{"name":"Vasant Bhai","number":9714428771,"dob":"1974-04-12T00:00:00.000Z"},{"name":"Satishchandra Bhai","number":null,"dob":null},{"name":"Divyakant Bhai","number":9898015842,"dob":"1966-07-11T00:00:00.000Z"},{"name":"Narendrasinh Gadhvi","number":null,"dob":null},{"name":"Avinash Bhai","number":9824257752,"dob":"1957-07-15T00:00:00.000Z"},{"name":"Rajendrasinh Raj","number":9925481209,"dob":null},{"name":"Rasikkumar Mohandas","number":9898472971,"dob":"1973-06-01T00:00:00.000Z"},{"name":"Dhanjibhai Patel","number":9429036280,"dob":"1956-02-05T00:00:00.000Z"},{"name":"Ashok Jadhav","number":9224185764,"dob":"1975-06-30T00:00:00.000Z"},{"name":"Chandrasinh Chauhan","number":9427786795,"dob":"1974-01-02T00:00:00.000Z"},{"name":"Navinchandra Shah","number":9925213140,"dob":"1959-03-29T00:00:00.000Z"},{"name":"Govindbhai Solanki","number":8238775771,"dob":"1953-06-01T00:00:00.000Z"},{"name":"Maulik Bhavsar","number":9898041828,"dob":"1972-11-22T00:00:00.000Z"},{"name":"Nilesh Joshi","number":7878444427,"dob":"1978-03-03T00:00:00.000Z"},{"name":"Ashok Patel","number":9428815373,"dob":null}]}]}'
	storage.setItem("jsonData",jsonData);
}else{
	console.log("more than one time");
}

var d = JSON.parse(storage.getItem("jsonData"));

d = d.data;
//if first time
if(!hasRanBefore){
	d.forEach(function(part){
		part.users.forEach(function(user){
			if(user.dob){
				user.dob = user.dob.slice(8,10)+"-"+user.dob.slice(5,7)+"-"+user.dob.slice(0,4);
			}
		});
	});
	storage.setItem("jsonData",JSON.stringify({data:d}));
}

var users = [];

function createSortedUsers(){
	users = [];
	d.forEach(function(part,i){
		part.users.forEach(function(user,j){
			if(user.dob && user.number){
				var temp = user.dob.split("-");
				var year = temp[2];
				var month = parseInt(temp[1])-1;
				var day = temp[0];
				var tempDate = new Date();
				var dateNow = new Date(tempDate.getFullYear(),tempDate.getMonth(),tempDate.getDate());
				var compDate = new Date(tempDate.getFullYear(),month,day);
				var newDate = new Date(year,month,day);
				if((dateNow.getMonth()<newDate.getMonth())  || (dateNow.getMonth() == newDate.getMonth()  && dateNow.getDate() < newDate.getDate())){
					users.push({
						name:user.name,
						number:user.number,
						dob:newDate,
						titleIndex:i,
					});
				}
			}
		})
	});
	users.sort(dateSort);
	return users[0];
}

function dateSort(a,b){
	if(a.dob.getMonth()!=b.dob.getMonth()){
		return a.dob.getMonth() - b.dob.getMonth();
	}else{
		return a.dob.getDate() - b.dob.getDate();
	}
}
createSortedUsers();
// console.table(users);
//d is now containing all of the data required
var vm;
var app = {
	// Application Constructor
	initialize: function() {
		document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
		this.setupVue();
		document.addEventListener("backbutton", vm.cancel, false);
	},
	onDeviceReady: function() {
		this.receivedEvent('deviceready');
		cordova.plugins.backgroundMode.on('deactivate', function(){
			createSortedUsers();
			vm.nextBirthdayUser = users[0];
			vm.handleBirthday();
		});
		cordova.plugins.backgroundMode.excludeFromTaskList();
		cordova.plugins.backgroundMode.enable();
		cordova.plugins.backgroundMode.setDefaults({
		    title: 'SmsApp',
		    text: 'App Running in Background',
		});
		if(!hasRanBefore){
			vm.getPermforSms();
		}
	},
	receivedEvent: function(id) {
		console.log('Received Event: ' + id);
	},
	setupVue:function(){

		 vm = new Vue({
			el:"#app",
			data:{
				jsonData:d,
				titleSelected:false,
				titleIndex:null,
				userIndex:null,
				smthingSelected:false,
				newUserFormSelected:false,
				editUserFormSelected:false,
				smsFormSelected:false,
				nextBirthdayUser : users[0],
				birthdaytimeout:null,
				usersLength:users.length,
				message:"जन्मदिन की शुभकामनाएं !\n\nमाना की अघेंरा घना है, पर  दिया जलाना  कहां मना है!\nस्वस्थ रहो. खुश रहो.\n\n-मूलचंद जैन\nसरल मार्केटिंग",
			},
			methods:{
				titleClicked:function(index){
					this.titleSelected = true;
					this.smthingSelected = true;
					this.titleIndex = index ;
				},
				cancel:function(){
					this.titleSelected = false;
					this.newUserFormSelected = false;
					this.editUserFormSelected = false;
					this.smthingSelected = false;
					this.smsFormSelected = false;
					this.titleIndex = null;
					this.userIndex = null;
				},
				addNewUserClicked:function(){
					this.newUserFormSelected = true;
					this.smthingSelected = true;
					this.titleSelected = false;
				},
				editsmsClicked:function(){
					this.smsFormSelected = true;
					this.smthingSelected = true;
					this.titleSelected = false;
				},
				editUserClicked:function(index){
					this.userIndex = index;
					this.editUserFormSelected = true;
					this.smthingSelected = true;
					this.titleSelected = false;
					var v = this;
					setTimeout(function(){
						var user = v.jsonData[v.titleIndex].users[v.userIndex];
						document.getElementById('editName').value = user.name;
						document.getElementById('editNumber').value = user.number;
						document.getElementById('editDob').value = user.dob.split("-").reverse().join("-");
					},250);
				},
				deleteUser:function(index){
					this.jsonData[this.titleIndex].users.splice(index,1);
					this.saveChanges();
				},
				addNewUser:function(){
					var user={
						name:document.getElementById('newName').value,
						number:document.getElementById('newNumber').value,
						dob:document.getElementById('newDob').value.split("-").reverse().join("-")
					}
					var index = this.titleIndex;
					this.jsonData[this.titleIndex].users.push(user);
					this.cancel();
					this.saveChanges();
					this.titleClicked(index);
				},
				editUser:function(){
					var user=this.jsonData[this.titleIndex].users[this.userIndex];
						user.name =document.getElementById('editName').value;
						user.number=document.getElementById('editNumber').value;
						user.dob = document.getElementById('editDob').value.split("-").reverse().join("-");
					var index = this.titleIndex;
					this.cancel();
					this.saveChanges();
					this.titleClicked(index);
				},
				saveChanges:function(){
					storage.setItem("jsonData",JSON.stringify({'data':this.jsonData}));
					createSortedUsers();
					this.nextBirthdayUser = users[0];
					this.handleBirthday();
				},
				sendSms: function(user) {
					var number = user.number;
					var message = this.message;
					//CONFIGURATION
					var options = {
						replaceLineBreaks: false, // true to replace \n by a new line, false by default
						android: {
							// intent: 'INTENT'  // send SMS with the native android SMS messaging
							intent: '' // send SMS without open any other app
						}
					};
					var success = function () { 
					// navigator.notification.alert(
					//     'Message sent to '+number+' !',  // message
					//     function(){console.log("works");},         // callback
					//     'SMS',            // title
					//     'Ok'                  // buttonName
					// 	);
					};
					var error = function (e) { 
						// navigator.notification.alert(
						//     'SMS Error',  // message
						//     function(){},         // callback
						//     'SMS',            // title
						//     'Ok'                  // buttonName
						// );
					};
					sms.send(number, message, options, success, error);
				},
				getPermforSms:function(){
					sms.send();
				},
				handleBirthday:function(){
					if(this.birthdaytimeout){
						clearTimeout(this.birthdaytimeout);
					}
					var dateNow = new Date();
					var newDate = new Date(dateNow.getFullYear(),this.nextBirthdayUser.dob.getMonth(),this.nextBirthdayUser.dob.getDate());
					var timeoutTime = newDate - dateNow + 5000;	//adding 5 seconds to avoid precision errors
					var that = this;
					this.birthdaytimeout=
					setTimeout(function(){
						that.sendSms(that.nextBirthdayUser)
						createSortedUsers();
						this.nextBirthdayUser = users[0];
						if(this.nextBirthdayUser){
							this.handleBirthday();
						}else{
							//if no users birthday is left, we will wait for the ear to finish, and let the new cycle start
							waitForNewYear();
						}
					},timeoutTime);	
				},
				waitForNewYear:function(){
					var now = new Date();
					var timeoutTime = new Date(now.getFullYear+1,0,1) - now;
					var that = this;
					setTimeout(function(){
						that.handleBirthday();
					},timeoutTime);
				}
			},
			created:function(){
				createSortedUsers();
				this.nextBirthdayUser = users[0];
				this.handleBirthday();
			}
		});
	}
};

app.initialize();