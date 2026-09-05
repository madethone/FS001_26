document.addEventListener("DOMContentLoaded", function () {

    const menu = [
        'Home',
        'Vision',
        'Mission',
        'About Us',
        'Contact Us'
    ];

    const colors = [
        'Orange',
        'Blue',
        'Brown',
        'Gray',
        'Purple'
    ]

    //Loop menu from array
    menu.forEach((m) => {
        document.querySelector('nav').innerHTML += `<a href="#${m}">${m}</>`;
    })

    //Apply style

    // document.querySelector('#vision-section')
    // document.getElementById('vision-section').style.backgroundColor = 'Green';
    // document.getElementById('vision-section').style.color = 'White';

    //Vision article styel
    let visionArticleStyle = document.getElementById('vision-article').style;
    visionArticleStyle.backgroundColor = 'Green';
    visionArticleStyle.color = 'white';
    visionArticleStyle.padding = '10px';
    visionArticleStyle.border = '1px solid black';

    let indexColor = 0;

    //Get event when user click on mission article
    document.getElementById('vision-article').addEventListener('click', function () {

        indexColor += 1;//indexColor = indexColor + 1;

        console.log(indexColor)

        if (indexColor === colors.length) {
            indexColor = 0;
        }

        console.log(indexColor);

        visionArticleStyle.backgroundColor = colors[indexColor];

    })


    //Mission article style
    let missionArticleElement = document.querySelectorAll('#mission-article');
    console.log(missionArticleElement);

    missionArticleElement.forEach((ele) => {
        ele.style.backgroundColor = 'Gray';
        ele.style.color = 'white';
        ele.style.padding = '10px';
        ele.style.border = '1px solid green';
    })


    //Add new article element
    document.getElementById('add-article').addEventListener('click',() => {
        let articlce = document.createElement('article');
        articlce.textContent = 'Hello';
        articlce.style.backgroundColor = 'Green';
        articlce.style.padding = '10px';
        articlce.style.color = 'white';

        console.log(articlce);
        
        document.getElementById('contact-section').appendChild(articlce);
    })

    document.getElementById('remove-contact-section').addEventListener('click',() => {
        document.getElementById('contact-section').remove();
    })


    ///

    ////


    ///

});
