// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed
// set the provider you want from Web3.providers
window.web3 = new Web3(window.web3 
    ? window.web3.currentProvider
    : new Web3.providers.HttpProvider("https://ropsten.infura.io/PLYBbzr9GHtjF1vnKqkg "))
//    : new Web3.providers.HttpProvider('http://127.0.0.1:7545'))

let ABI = [{"constant":true,"inputs":[{"name":"_interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"InterfaceId_ERC165","outputs":[{"name":"","type":"bytes4"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"exists","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_caps","type":"uint256[]"},{"name":"_rates","type":"uint256[]"},{"name":"_maxPerSale","type":"uint8"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"quantity","type":"uint256"},{"indexed":false,"name":"tokenType","type":"uint256"},{"indexed":true,"name":"owner","type":"address"}],"name":"saleTokenSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"quantity","type":"uint256"},{"indexed":false,"name":"tokenType","type":"uint256"},{"indexed":false,"name":"owner","type":"address"}],"name":"courtesyTokenSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"}],"name":"OwnershipRenounced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":true,"name":"_tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_approved","type":"address"},{"indexed":true,"name":"_tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_operator","type":"address"},{"indexed":false,"name":"_approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"constant":false,"inputs":[{"name":"_tokenType","type":"uint256"},{"name":"_quantity","type":"uint256"}],"name":"saleToken","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenType","type":"uint256"},{"name":"_quantity","type":"uint256"},{"name":"_to","type":"address"}],"name":"courtesyToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenType","type":"uint256"}],"name":"checkRates","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"checkMaxPerSale","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"checkMaxTokenTypes","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"checkTokenType","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_address","type":"address"}],"name":"checkOwnedTokens","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenType","type":"uint256"}],"name":"checkCaps","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenType","type":"uint256"}],"name":"checkMinted","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]
let contractAddress = '0x68dbc3e199954484f1ae38bf3ec90ffac14a8104'

var contractInstance = web3.eth.contract(ABI).at(contractAddress)

var saleTokenEvent = contractInstance.saleTokenSuccess({owner: web3.eth.accounts[0]}, {fromBlock: 'latest', toBlock: 'latest'})

function watchSuccess(){
    var text
    saleTokenEvent.watch( (err, result) => {
        if (err) {
            text = 'Ocurrió un error. Tu transacción fue rechazada, por favor intenta de nuevo.'
        } else {
            text = 'Tu orden se emitió correctamnte:\n' + result.args.quantity.toString(10)
                + ' boletos para la localidad ' + result.args.tokenType.toString(10) 
                + ', abonados a la cuenta ' + result.args.owner 
                + '.\nEl hash de la transacción es ' + result.transactionHash
        }
        window.alert(text)
    })
}


function saleToken(){
    var quantity = web3.toBigNumber(document.getElementById('ticketQuantity').value)
    var tokenType = web3.toBigNumber(document.getElementById('ticketType').value)
    contractInstance.checkRates(tokenType, (err, rate) => {
        if (err) {
            console.log(err)
            window.alert(err.message)
            return
        };
        var _value = web3.toBigNumber(web3.toBigNumber(rate) * quantity)
        var transactionObject = {
            'gas': 6500000,
            'from': web3.eth.accounts[0],
            'value': _value
        }
        window.alert('Confirma la transacción en Metamask si estás de acuerdo\n- Cantidad de entradas: ' 
            + quantity + '\n- Localidad: ' + tokenType + '\n- Monto: ' + web3.fromWei(_value, 'ether') + ' ETH')
        contractInstance.saleToken(tokenType, quantity, transactionObject, (err, transactionHash) => {
            if (err) {
                if (err.message.search('soldOut') > -1 ) window.alert('No quedan suficientes boletos para esa localidad')
                else {
                    console.log('Ocurrió un error: ' + err)
                }
            } else {
                watchSuccess()
            }
        })
    })
}

function myTokens(){
    contractInstance.checkOwnedTokens(web3.eth.accounts[0], function(err, ids){
        var types = []
        var headers = ['ID', 'Localidad']
        if (err) {
            window.alert(err.message)
            return
        };
        if(ids.length == 0) {
            var item = document.createElement('P')
            item.setAttribute('id', 'item')
            var text = 'Todavía no tienes entradas'
            item.appendChild(document.createTextNode(text))
            if(document.getElementById('oldTable')) {
                document.getElementById('listado').replaceChild(item, document.getElementById('oldTable'))
            } else if (document.getElementById('item')) {
                document.getElementById('listado').replaceChild(item, document.getElementById('item'))
            } else {
                document.getElementById('listado').appendChild(item)
            }
        }
        ids.forEach((id) => {
            contractInstance.checkTokenType(id, function(err, type){
                types.push(type)
                if (types.length == ids.length) {
                    makeTable(headers, ids, types)
                }
            })
        })
    })
}

function makeTable(headers, ids, types) {
    var table = document.createElement('TABLE')
    table.setAttribute('id', 'oldTable')
    table.setAttribute('class', 'table table-striped')
    var thead = document.createElement('thead')
    var tr0 = document.createElement('TR')
    thead.appendChild(tr0)
    table.appendChild(thead)
    headers.forEach((header) => {
        var headerElement = document.createElement('th')
        var text = document.createTextNode(header)
        headerElement.appendChild(text)
        table.appendChild(headerElement)
    })
    var tbody = document.createElement('tbody')
    ids.forEach((id, i) => {
        var tr = document.createElement('TR')
        tbody.appendChild(tr)
        var td1 = document.createElement('TD')
        var text1 = document.createTextNode(id)
        td1.appendChild(text1)
        tr.appendChild(td1)
        var td2 = document.createElement('TD')
        var text2 = document.createTextNode(types[i])
        td2.appendChild(text2)
        tr.appendChild(td2)
        tbody.appendChild(tr)
    })
    table.appendChild(tbody)
    if(document.getElementById('oldTable')){
        document.getElementById('listado').replaceChild(table, document.getElementById('oldTable'))
    } else if (document.getElementById('item')) {
        document.getElementById('listado').replaceChild(table, document.getElementById('item'))
    } else {
        document.getElementById('listado').appendChild(table)
    }
}
// Add smooth scrolling on all links inside the navbar
$("#navbar a").on('click', function(event) {
  
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
  
      // Prevent default anchor click behavior
      event.preventDefault();
  
      // Store hash
      var hash = this.hash;
  
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
  
      // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
  
    } // End if
  
  });