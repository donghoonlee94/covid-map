var mapOptions = {
  center: new naver.maps.LatLng(37.3595704, 127.105399),
  zoom: 10,
};

var map = new naver.maps.Map('map', mapOptions);

$.ajax({
  url: '/location',
  type: 'GET',
}).done((res) => {
  if (res.message !== 'success') return;
  const { data } = res;

  let markerList = [];
  let infoWindowList = [];

  const getClickHandler = (i) => () => {
    const marker = markerList[i];
    const infowindow = infoWindowList[i];
    if (infowindow.getMap()) {
      infowindow.close();
    }
    {
      infowindow.open(map, marker);
    }
  };

  const getClickMap = (i) => () => {
    const infoWindow = infoWindowList[i];
    infoWindow.close();
  };

  for (let i in data) {
    const target = data[i];
    const latlng = new naver.maps.LatLng(target.lat, target.lng);

    let marker = new naver.maps.Marker({
      map: map,
      position: latlng,
      icon: {
        content: `<div class="marker"></div>`,
        anchor: new naver.maps.Point(7.5, 7.5),
      },
    });

    const content = `
    <div class="info-window_wrap">
      <div class="info-window_title">${target.title}</div>
      <div class="info-window_address">${target.address}</div>
    </div>
    `;

    const infoWindow = new naver.maps.InfoWindow({
      content,
      backgroundColor: '#00ff0000',
      borderColor: '#00ff0000',
      anchorSize: new naver.maps.Size(0, 0),
    });

    markerList.push(marker);
    infoWindowList.push(infoWindow);
  }

  for (let i = 0, ii = markerList.length; i < ii; i++) {
    naver.maps.Event.addListener(markerList[i], 'click', getClickHandler(i));
    naver.maps.Event.addListener(map, 'click', getClickMap(i));
  }
});
