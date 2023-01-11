enum PrintMedia {
    Newspaper = 1,
    Newsletter,
    Magazine,
    Book
}

function getMedia(mediaName: string): PrintMedia {
    if (  mediaName === 'Forbes' || mediaName === 'Outlook') {
        return PrintMedia.Magazine;
    } else {
        return PrintMedia.Newspaper;
    }
 }

let mediaType: PrintMedia = getMedia('Forbes');
console.log(mediaType);