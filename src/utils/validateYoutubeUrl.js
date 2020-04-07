export default function validateYoutubeUrl(url) {    
    if (url !== undefined || url !== '') {        
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|\?v=)([^#&?]*).*/;
        var match = url.match(regExp);
        if (match && match[2].length === 11) {
            return {result: true, videoId: match[2]};       
        } else {
            return {result: false};
        }
    }
}