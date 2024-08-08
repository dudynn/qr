$(document).ready(function() {
  $('#generate-btn').click(function() {
    // 입력된 텍스트 가져오기
    var text = $('#text-input').val();

    // QR 코드 생성
    $('#qrcode').empty();
    new QRCode(document.getElementById('qrcode'), text);
  });
});