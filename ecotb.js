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
    window.open(url, '_blank');
}

let settings = {
    bibleUrlPrefix: 'https://www.biblegateway.com/passage/?search=',
    bibleUrlPostfix: '&version=NIV'
};