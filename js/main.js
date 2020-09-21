$(document).ready(function(){
  console.log("ready");

});

$('.tipso').tipso();

$('.channels').tipso({
  titleContent:'Channels',
  width:150,
});

$('.referrals').tipso({
  titleContent:'Referrals',
  width:150,
});

$('.my-news-ticker').AcmeTicker({
  controls: {
    prev: $('.acme-news-ticker-prev'),
    toggle: $('.acme-news-ticker-pause'),
    next: $('.acme-news-ticker-next')
  },
  type:'vertical'
});
