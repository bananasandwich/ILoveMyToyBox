var messages = [
    'that my hands smell like you hours after touching you.',
    'how you surprise me with food all the time.',
    'how sweet and innocent you look sleeping on my chest.',
    'your cute little feet and how they feel in my hands.',
    'how wild and playful your natural hair makes you look.',
    'the way you always ask how you can make me happy when I\'m feeling down.',
    'how perfectly your body fits mine, no matter how we\'re positioned.',
    'how much life your laugh and smile brings to everyone around you.',
    'how unapologetically savage you can turn without warning.',
    'that you strip down and snuggle with your buggas every day when you get home.',
    'all the weird little sounds you make.',
    'holding eye contact with you in the middle of dev meetings.',
    'when you sweetly climb into my lap and I cradle all of you.',
    'how soft your lips feel on my skin.',
    'how willing you are to take risks with me. (when jail isn\'t entirely certain)',
    'that you are so damn skilled at playing Super Mario.',
    'knowing that you, the woman of my dreams, even exist.',
    'that you like a little pain with your pleasure.',
    'the way you treasure the gifts I give you.',
    'that we have so many memories all around Roswell.',
    'how special it makes me feel when you bump or rub my leg when nobody is looking.',
    'that you\'re goofy enough to grab me from behind and thrust into my ass.',
    'that you take such good care of yourself.',
    'that you wear certain outfits, knowing they will drive me completely crazy with passion.',
    'meeting up with you at the office after getting tipsy at the brewery.',
    'that you can hold an intelligent conversation about coding.',
    'that you are such a cute little bookworm.',
    'that you enjoy being pampered almost as much as I enjoy pampering you.',
    'that you were telling the truth when you said you were a lady in the streets.',
    'how, without fail, you always need a nap after a few orgasms.',
    'the way you bite my neck, ears, and lip to turn me on, regardless of where we are.',
    'closing your door and making out, grinding, and fucking when nobody is around.',
    'that you savagely rip Greg\'s ego to shreds on occasion.',
    'that we engaged in criminal activity and got away with it. Punk ass cop.',
    'that you enjoy giving just as much as receiving.',
    'how incredibly adorable you are when you rant about work.',
    'getting a quick 2-second look at you every morning as you walk past my door.',
    'when you rest your head on my shoulder at work. It\'s the sweetest feeling.',
    'laying you back and hearing you moan softly while I lick you.',
    'how perfectly smooth and pure your skin is.',
    'brushing your hair off your shoulders and kissing your neck softly.',
    'feeling the stress leave your body as I massage your shoulders and neck.',
    'how we have claimed the beanbag in your office and completely covered it in our love.',
    'the looks you give me when you are dying to have sex.',
    'coming to your office every morning and finally getting to full on hug and kiss you for the first time that day.',
    'that you genuinely care for the people in your life.',
    'going to lunch with you every day and getting to kiss you in public.',
]

var index;
$(document).ready(function(){
    index = Math.floor(Math.random() * messages.length)
    setMessage(index)

    window.addEventListener('resize', positionElements);
    document.body.addEventListener("touchmove", function(event) {
        event.preventDefault();
        event.stopPropagation();
    }, false);
    
    positionElements();
})

function positionElements(){
    var topRightSloth = $('#topRightSloth');
    topRightSloth.css({
        'top': '-50px',
        'left': window.innerWidth - topRightSloth.width()
    })

    var iLove = $('#iLove');
    iLove.css({
        'top': (window.innerHeight * .3) - iLove.height() + 'px'
    })

}

function nextMessage(){
    index++;
    setMessage(index);
}

function prevMessage(){
    index--;
    setMessage(index);
}

function setMessage(i){
    index = i >= messages.length ? 0 : i < 0 ? messages.length - 1 : i;
    $('#message').text('...' + messages[index]);
}