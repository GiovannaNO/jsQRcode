window.onload = function(){
    document.querySelector("#scan").addEventListener('click', function(){
        cordova.plugins.barcodeScanner.scan(
            function (result) {
                if(result.text == '280720550'){
                    document.querySelector("#dados1").innerHTML = "<hr><h2>Informações do produto escaneado:</h2><p><strong>Nome do produto:</strong> iPad Mini Wi-Fi 64Gb -Cinza Espacial</p>";
                    document.getElementById("img").src = 'img/Imagem1.jpg';
                    document.querySelector("#dados2").innerHTML = "<p><strong>Valor:</strong> <em>R$ 3.499,00</em></p><p><strong>Descrição:</strong> Processador A12 Bionic com arquitetura de 64 bits Neural Engine Coprocessador M12 integrado.</p><p><strong>Sistema operacional:</strong> iOS</p><p><strong>Tamanho da tela:</strong> 7.9''</p><p><strong>Tecnologia:</strong> Wi-Fi</p><p><strong>Resolução da câmera:</strong><br>-Câmera traseira: 8MP;<br>-Câmera frontal: 7MP.</p><table><tr><td>GPS</td><td>Sim</td></tr><tr><td>Grava vídeos</td><td>Sim</td></tr><tr><td>Câmera traseira</td><td>Sim</td></tr><tr><td>Câmera frontal</td><td>Sim</td></tr><tr><td>Memória Flash</td><td>64GB</td></tr><tr><td>Funciona como celular</td><td>Não</td></tr></table><br>";
                }else if(result.text == '989895555'){
                    document.querySelector("#dados1").innerHTML = "<hr><h2>Informações do produto escaneado:</h2><p><strong>Nome do produto:</strong> Samsung Galaxy J8 Dual Chip 4g 64gb Tela 6</p>";
                    document.getElementById("img").src = 'img/Imagem2.jpg';
                    document.querySelector("#dados2").innerHTML = "<p><strong>Valor:</strong> <em>R$ 1.888,00</em></p><p><strong>Velocidade do Processador:</strong> 1.8GHz</p><p><strong>Tipo de Processador:</strong> OctaCore</p><p><strong>Tamanho (Tela Principal):</strong> 153.6mm (6.0'')</p><p><strong>Resolução da câmera:</strong><br>-Câmera Traseira: 16.0 MP + 5.0 MP</p><table><tr><td>Memória RAM</td><td>4GB</td></tr><tr><td>Memória Total Interna</td><td>64GB</td></tr><tr><td>Memória Disponível</td><td>50.6GB</td></tr></table>";
                }else if(result.text == '85236987'){
                    document.querySelector("#dados1").innerHTML = "<hr><h2>Informações do produto escaneado:</h2><p><strong>Nome do produto:</strong> Motorola One XT1941 Branco 64GB</p>";
                    document.getElementById("img").src = 'img/Imagem3.jpg';
                    document.querySelector("#dados2").innerHTML = "<p><strong>Valor:</strong> <em>⨂</em></p><p><strong>Sistema operacional:</strong> Android 8.1 Oreo</p><p><strong>Processador:</strong> Qualcomm Snapdragon 625 (MSM8953) Octa-Core de 2.0 GHz</p><p><strong>Memória interna:</strong> 64 GB Total (parte usada para o sistema operacional e aplicativos pré-instalados)</p><h5>Características Gerais:</h5><ul><li>- Tela Max Vision e design ao máximo</li><li>- Câmera dupla e armazenamento ilimitado</li><li>- Android One: primeiro do Brasil, atualizado e seguro</li><li>- Carregamento ultrarrápido TurboPower</li><li>- Últimas inovações do Google incorporadas</li><li>- Leitor Biométrico (Impressão Digital)</li></ul><table><tr><td>Memória RAM</td><td>4GB</td></tr><tr><td>Tecnologia GSM</td><td>3G e 4G</td></tr><tr><td>Cor</td><td>Branco</td></tr></table><br>";
                }else if(result.text == '85369877444'){
                    document.querySelector("#dados1").innerHTML = "<hr><h2>Informações do produto escaneado:</h2><p><strong>Nome do produto:</strong> Asus Zenfone Max Pro M1</p>";
                    document.getElementById("img").src = 'img/Imagem4.jpg';
                    document.querySelector("#dados2").innerHTML = "<p><strong>Valor:</strong> <em>R$ 1.199,00</em></p><p><strong>Sistema operacional:</strong> Android 8.1 Oreo</p><p><strong>Processador:</strong> Qualcomm Snapdragon SDM636 1,8 GHz, 2 Mb Cache</p><p><strong>Tela:</strong> 6,0'' Led Backlight Ips panel (1080x2160)</p><table><tr><td>Memória interna</td><td>64GB</td></tr><tr><td>Memória expansiva</td><td>2TB Sd</td></tr><tr><td>Memória RAM</td><td>4GB</td></tr><tr><td>Tipo de Chip</td><td>Nano</td></tr><tr><td>Dual Chip</td><td>Sim</td></tr><tr><td>Conectividade</td><td>3G, 4G, Wi-Fi</td></tr><tr><td>Câmera Frontal</td><td>8MP</td></tr><tr><td>Câmera Traseira</td><td>16+5MP</td></tr></table><br>";
                }else{
                    document.querySelector("#dados1").innerHTML = "<hr><h2>Produto escaneado não encontrado...</h2>";
                    document.getElementById("img").src = 'img/erro.png';
                    document.querySelector("#dados2").innerHTML = "<p>Tente escanear novamente ou escanear um código válido.</p>";
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
