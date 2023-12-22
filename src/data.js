// --------- this data is for menu 
export const menu =  [
{
    id:1,
    title:"Main",
    listItems:[
        {
        id:1,
        title:'Homepage',
        url:"/",
        icon:'🏠',
        },
        {
        id:2,
        title:'Profile',
        url:"/users/1",
        icon:'👤',
        },
    ],
},



{
    id:2,
    title:"Lists",
    listItems:[
        {
        id:1,
        title:'Users',
        url:"/users",
        icon:'👥',
        },
        {
        id:2,
        title:'Products',
        url:"/products",
        icon:'🧰',
        },
        {
        id:3,
        title:'Orders',
        url:"/orders",
        icon:'🅾️',
        },
        {
        id:4,
        title:'Posts',
        url:"/posts",
        icon:'📭',
        },
    ],
},



{
    id:3,
    title:"General",
    listItems:[
        {
        id:1,
        title:'Elements',
        url:"/",
        icon:'🚃',
        },
        
        {
        id:2,
        title:'Notes',
        url:"/",
        icon:'📝',
        },
        {
        id:3,
        title:'Forms',
        url:"/",
        icon:'🗒️',
        },
        {
        id:4,
        title:'Calender',
        url:"/",
        icon:'📆',
        },
    ],
},




{
    id:4,
    title:"Maintenance",
    listItems:[
        {
        id:1,
        title:'Settings',
        url:"/",
        icon:'⚙️',
        },
        
        {
        id:2,
        title:'Backups',
        url:"/",
        icon:'🔙',
        },
      
    ],
},



{
    id:5,
    title:"Analytics",
    listItems:[
        {
        id:1,
        title:'Charts',
        url:"/",
        icon:'📊',
        },
        {
        id:2,
        title:'Logs',
        url:"/products",
        icon:'🪵',
        }
    ],
},



]






//-------- this is data of box 1
export const topDealUsers = [

 {
    id:1,
    img:'🧑‍🚒',
    username:'Joe Root',
    email:'ael@gmail.com',
    amount:'3.566'
 },
 {
    id:2,
    img:'🧑‍🚒',
    username:'Joe Root',
    email:'ael@gmail.com',
    amount:'3.566'
 },
 {
    id:3,
    img:'🧑‍🚒',
    username:'Joe Root',
    email:'ael@gmail.com',
    amount:'3.566'
 },
 {
    id:4,
    img:'🧑‍🚒',
    username:'Joe Root',
    email:'ael@gmail.com',
    amount:'3.566'
 },
 {
    id:5,
    img:'🧑‍🚒',
    username:'Joe Root',
    email:'ael@gmail.com',
    amount:'3.566'
 },
 {
    id:6,
    img:'🧑‍🚒',
    username:'Joe Root',
    email:'ael@gmail.com',
    amount:'3.566'
 },
 {
    id:7,
    img:'🧑‍🚒',
    username:'Joe Root',
    email:'ael@gmail.com',
    amount:'3.566'
 },

]




//------ this is box2 data 

export const chartBoxUser = {
   
    color:"#8884d8",
    icon:"🧑‍🚒",
    title:"Total Users",
    number: "11.234",
    dataKey:"users",
    percentage: '45%',
    chartData: [
        {name:"Sun", users: 400 },
        {name:"Mon", users: 600 },
        {name:"Tue", users: 700 },
        {name:"Wed", users: 400 },
        {name:"Thur", users: 500 },
        {name:"Fri", users: 450 },
        {name:"Sat", users: 500 },
    ]

}


//------ this is box3 data 

export const chartBoxUserProduct = {
   
    color:"#8884d8",
    icon:"🧑‍🚒",
    title:"Total Users",
    number: "11.234",
    dataKey:"users",
    percentage: '45%',
    chartData: [
        {name:"Sun", users: 400 },
        {name:"Mon", users: 600 },
        {name:"Tue", users: 700 },
        {name:"Wed", users: 400 },
        {name:"Thur", users: 500 },
        {name:"Fri", users: 450 },
        {name:"Sat", users: 500 },
    ]

}



//------ this is box5 data 

export const chartBoxUserRevenue = {
   
    color:"#8884d8",
    icon:"🧑‍🚒",
    title:"Total Users",
    number: "11.234",
    dataKey:"users",
    percentage: '45%',
    chartData: [
        {name:"Sun", users: 400 },
        {name:"Mon", users: 600 },
        {name:"Tue", users: 700 },
        {name:"Wed", users: 400 },
        {name:"Thur", users: 500 },
        {name:"Fri", users: 450 },
        {name:"Sat", users: 500 },
    ]

}



//------ this is box6 data 


export const chartBoxUserConversions = {
   
    color:"#8884d8",
    icon:"🧑‍🚒",
    title:"Total Users",
    number: "11.234",
    dataKey:"users",
    percentage: '45%',
    chartData: [
        {name:"Sun", users: 400 },
        {name:"Mon", users: 600 },
        {name:"Tue", users: 700 },
        {name:"Wed", users: 400 },
        {name:"Thur", users: 500 },
        {name:"Fri", users: 450 },
        {name:"Sat", users: 500 },
    ]

}


export const barChartBoxVisit = {
  
    title:"Total Visits",
    color:"#FF8042",
    dataKey:"visit",
    chartData:[
        {
            name:"Sun",
            visit:4000,
        },
        {
            name:"Mon",
            visit:6000,
        },
        {
            name:"Tue",
            visit:4000,
        },
        {
            name:"Wed",
            visit:2000,
        },
        {
            name:"Thur",
            visit:9000,
        },
        {
            name:"Fri",
            visit:3000,
        },
        {
            name:"Sat",
            visit:2000,
        },
    ]


}


export const barChartBoxRevenue = {
    title: "Profit Earned",
    color: "#8884d8",
    dataKey: "profit",  // This should be "profit" to match the key in chartData
    chartData: [
      {
        name: "Sunday",
        profit: 4000,  // Corrected key to "profit"
      },
      {
        name: "Mon",
        profit: 6000,
      },
      {
        name: "Tue",
        profit: 4000,
      },
      {
        name: "Wed",
        profit: 2000,
      },
      {
        name: "Thur",
        profit: 9000,
      },
      {
        name: "Fri",
        profit: 3000,
      },
      {
        name: "Sat",
        profit: 2000,
      },
    ],
  };
