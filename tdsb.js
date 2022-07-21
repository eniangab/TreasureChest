/* The Devotional Study Bible */
        document.addEventListener('DOMContentLoaded', docReady, false);
        function docReady () {
            //collapse contents on load
            document.getElementById("ibrc").style.display = "none";
            document.getElementById("ebotb").style.display = "none";
            //document.getElementById("ecotb").style.display = "none";
        }

        function toggleContent(e){
            var headId = e.path[1].id;
            var contentId = headId.split('_')[0];
            var content = document.getElementById(contentId);
            
            if(content && content.style.display === "none"){
                content.style.display = "block";
            }else if(content){
                content.style.display = "none";
            }
        }
        // window.addEventListener('DOMContentLoaded', (event) => {
        //     console.log('DOM fully loaded and parsed');
        // });