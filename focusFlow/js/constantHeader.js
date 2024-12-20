function loadHeader (){
    let header=`
    <style>
        body {
            margin: 0px;
            padding: 0px;
        }

        header{
            background-color: #734DFF;
            height: 60px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-right: 15px;
            padding-left: 15px;
        }

        #logo{
            height: 100%;
        }

        #quickAccess{
            display: flex;
            justify-content: space-between;
            width: 197px;
        }

        #profileNMenu{
            width: 88px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        #profileIcon{
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background-image: ;
            background-size: cover;
            background-position: center;
            border: solid 2px white;
        }


    </style>
    <header id="header">
        <img id="logo" src="assets/Logo gold.png"/>
        <div id="quickAccess">
        <img id="homeIcon" src="assets/homeIcon.svg"/>    
        <img id="reminderIcon" src="assets/reminderIcon.svg"/>
        <img id="promodoroIcon" src="assets/promodoroIcon.svg"/>
        <img id="taskIcon" src="assets/taskIcon.svg"/>
        </div>
        <div id="profileNMenu">
            <img id="menuIcon" src="assets/menuIcon.svg"/>
            <div id="profileIcon"></div>
        </div>   
    </header>
    `
    document.body.insertAdjacentHTML("afterbegin",header)
}
