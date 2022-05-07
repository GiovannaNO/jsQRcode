window.onload = function(){
    document.querySelector("#scan").addEventListener('click', function(){
        cordova.plugins.barcodeScanner.scan(
            function (result) {
                if(result.text == '280720550'){
                    document.querySelector("#dados1").innerHTML = "<hr><h2>Informações do produto escaneado:</h2><p><strong>Nome do produto:</strong> iPad Mini Wi-Fi 64Gb -Cinza Espacial</p>";
                    document.getElementById("img").src = 'img/Imagem1.jpg';
                    document.querySelector("#dados2").innerHTML = "<p><strong>Valor:</strong> <em>R$ 3.499,00</em></p><p><strong>Descrição:</strong> Processador A12 Bionic com arquitetura de 64 bits Neural Engine Coprocessador M12 integrado.</p><p><strong>Sistema operacional:</strong> iOS</p><p><strong>Tamanho da tela:</strong> 7.9''</p><p><strong>Tecnologia:</strong> Wi-Fi</p><p><strong>Resolução da câmera:</strong><br>-Câmera traseira: 8MP;<br>-Câmera frontal: 7MP.</p><table><tr><td>GPS</td><td>Sim</td></tr><tr><td>Grava vídeos</td><td>Sim</td></tr><tr><td>Câmera traseira</td><td>Sim</td></tr><tr><td>Câmera frontal</td><td>Sim</td></tr><tr><td>Memória Flash</td><td>64GB</td></tr><tr><td>Funciona como celular</td><td>Não</td></tr></table><br>";
                }else if(result.text == '989895555'){
                    document.querySelector("#dados").innerHTML = "<br><h1> Informações do produto escaneado:  </h1> <p><strong>Nome do Produto:</strong> Samsung Galaxy J8 Dual Chip 4g 64gb Tela 6</p><p>Valor: <em>R$ R$ 1.888,00</em></p><p><strong>Descrição:</strong><br>Velocidade do Processador: 1.8GHz</p><p>Tipo de Processador: OctaCore</p><p>Tamanho (Tela Principal): 153.6mm (6.0)</p><p>Resolução (Tela Principal):1480 x 720 (HD+)</p><p>CâmeraResolução -Câmera Traseira: 16.0 MP + 5.0 MP<br>Memória RAM(GB): 4 GB</p><p>Memória Total Interna (GB) -64 GB*</p><p>Memória Disponível (GB)  -50.6 GB</p>";
                }else if(result.text == '85236987'){
                    document.querySelector("#dados").innerHTML = "<br><h1>Informações do produto escaneado:  </h1> <p><strong>Nome do Produto:</strong> Motorola One XT1941 Branco 64GB</p><p>Valor:<p><strong>Descrição:</strong><br>Sistema Operacional Android 8.1 Oreo</p><p>Processador Qualcomm Snapdragon 625 (MSM8953) Octa-Core de 2.0 GHz</p><p>RAM 4GB</p><p>Tecnologia GSM, 3G e 4G</p><p>Memória interna 64 GB Total sendo uma parte usada para o sistema operacional e aplicativos pré-instalados<br>Cor Branco</p><p>Memória Total Interna (GB) -64 GB*</p><p>Memória Disponível (GB)  -50.6 GB</p>";
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
