const mapContainer = document.getElementById('map');
const mapOption = {
  center: new daum.maps.LatLng(37.554477, 126.970419),
  level: 3,
};

let map = new daum.maps.Map(mapContainer, mapOption);

let infoWindow = new daum.maps.InfoWindow({
  zIndex: 1,
});

let markerList = [];

let ps = new daum.maps.services.Places();

function searchPlaces() {
  let keyword = $('#keyword').val();
  ps.keywordSearch(keyword, placesSearchCB);
}

function placesSearchCB(data, status) {
  if (status === daum.maps.services.Status.OK) {
    console.log(data);
  } else if (status === daum.maps.services.Status.ZERO_RESULT) {
    alert('검색 결과가 존재하지 않습니다');
    return;
  } else if (status === daum.maps.services.Status.ERROR) {
    alert('검색 도중 오류가 발생했습니다.');
    return;
  }
}

searchPlaces();
