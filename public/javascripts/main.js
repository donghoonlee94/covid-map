var mapOptions = {
  center: new naver.maps.LatLng(37.3595704, 127.105399),
  zoom: 10,
};

var map = new naver.maps.Map('map', mapOptions);

const data = [
  {
    title: '용산역',
    address: '용산',
    lat: 37.529886729250464,
    lng: 126.96476069965748,
  },
  {
    title: '서울역',
    address: '서울역',
    lat: 37.55518868281098,
    lng: 126.97049755353969,
  },
];

for (let i in data) {
  const target = data[i];
  const latlng = new naver.maps.LatLng(target.lat, target.lng);

  let marker = new naver.maps.Marker({
    map: map,
    position: latlng,
    icon: {
      content: `<div class="marker"></div>`,
    },
  });
}
