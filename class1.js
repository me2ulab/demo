var users={
	username:"ibrahim",
	password:1234
};
var database=[
	{
		username:"ibrahim",
		password:1234
	},
	{
		username:"oritoke",
		password:1234
	},
	{
		username:"akanbi",
		password:4321
	}
];
var newsfeed=[
	{
		username:"Tola",
		timeline:"c++"
	},
	{
		username:"Tolu",
		timeline:"Javascripts"
	},
	{
		username:"Toli",
		timeline:"Python"
	}
];
function listFeed(feed)
{
	document.write(feed.username +':'+feed.timeline);
	document.
}

function isValid(user,pass)
{
	for(var i=0;i<database.length;i++)
	{
			if(user===database[i].username && pass===database[i].password)
				{
					return true;
					
				}

	}
		return false;
	
}
var userName=prompt("Enter your user name");
var passWord=Number(prompt("Enter your password"));
function signIn(username,password)
{
	if(isValid(username,password))
		{
			newsfeed.forEach(listFeed);
		}
	else{
	alert("Invalid username or password");
		}
}

signIn(userName,passWord);

//Loops
/*var todos=["wash plate","brush your teesth","got to mosque"];
for(var i=0;i<todos.length;i++)
{
	console.log(todos[i]+'!');
}
todos.forEach(function (todo) {
	console.log(todo);
});
function logTodo(todo,i)
{
	console.log(todo,i);
}
todos.forEach(logTodo);*/