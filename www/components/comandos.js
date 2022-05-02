window.onload = function(){
    document.querySelector("#scan").addEventListener('click', function(){
        cordova.plugins.barcodeScanner.scan(
            function (result) {
                if(result.text == '280720550'){
                    document.querySelector("#dados").innerHTML = "<br><h1> Informações do produto escaneado:  </h1> <p><strong>Nome do Produto:</strong> iPad Mini Wi-Fi 64Gb -Cinza Espacial</p><img src="https://m.media-amazon.com/images/I/41NSqWg13AL._SL500_.jpg" style="height = 200px;"> ";
                }else{
                    document.querySelector("#dados").innerHTML = "<br><h1> Produto não encontrado... </h1>";
                }
            },
            function(error) {
                alert("Scanning failed: " + error);
            },
            {
                preferFrontCamera : false, // iOS and Android
                showFlipCameraButton : true, // iOS and Android
                showTorchButton : true, // iOS and Android
                torchOn: false, // Android, launch with the torch switched on (if available)
                saveHistory: true, // Android, save scan history (default false)
                prompt : "Place a barcode inside the scan area", // Android
                resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
                formats : " CODE_39", // default: all but PDF_417 and RSS_EXPANDED
                orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
                disableAnimations : true, // iOS
                disableSuccessBeep: false // iOS and Android
            }
        );
    });
}
