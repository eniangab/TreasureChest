function toggleContent(e){
    var headId = e.path[0].id;
    var contentId = headId.split('_')[0];
    var content = document.getElementById(contentId);
    
    if(content && content.style.display === "none"){
        content.style.display = "block";
    }else if(content){
        content.style.display = "none";
    }
}

function  openBibleRef(bookVerse){
    var url = settings.bibleUrlPrefix + bookVerse + settings.bibleUrlPostfix;
    var urlp = settings.biblePortalUrlPrefix + bookVerse + settings.biblePortalUrlPostfix;
    //window.open(url, '_blank');
    window.open(urlp, '_blank');
}

let settings = {
    bibleUrlPrefix: 'https://www.biblegateway.com/passage/?search=', //gateway
    bibleUrlPostfix: '&version=NIV1984',
    biblePortalUrlPrefix: 'https://bibleportal.com/passage?search=',
    biblePortalUrlPostfix: '&version=NIV1984'
};