/*GET START*/
function getATMSettings(url, seccessCallBack,errorCallBack)
{
    var FD = new FormData();
    $.ajax({
        type: "GET",
        cache: false,
        url: url,
        contentType: false,
        processData: false,
        data: FD,
        error: function (xhr, status, error) {
            showError(error);
        },
        success: function (response) {
            if (response !== null && response.length !== 0) {            
                try
                {
                    seccessCallBack(JSON.parse(response));
                }catch(e)
                {
                    errorCallBack('Get monitoring data ERROR');
                }
            }
            else {            
                errorCallBack('Request ERROR');
            }
        }
    });
}

function getATMMonitoringData(url, seccessCallBack, errorCallBack) {
    var FD = new FormData();
    
    $.ajax({
        cache: false,
        type: "GET",
        url: url,
        contentType: false,
        processData: false,
        data: FD,
        error: function (xhr, status, error) {            
            errorCallBack(error);
        },
        success: function (response) {
        
            if (response !== null && response.length !== 0) {
                try
                {
                    setDebug(response);
                    seccessCallBack(JSON.parse(response));
                }catch(e)
                {
                    errorCallBack('Get monitoring data ERROR');
                }
            }
            else {
                errorCallBack('Request ERROR');
            }
        }
    });
}

function getLastEvents(url, seccessCallBack, errorCallBack)
{
    var FD = new FormData();
    $.ajax({
        type: "GET",
        cache: false,
        url: url,
        contentType: false,
        processData: false,
        data: FD,
        error: function (xhr, status, error) {
            errorCallBack(error);
        },
        success: function (response) {
            if (response !== null && response.length !== 0) {
                try {
                    seccessCallBack(JSON.parse(response));
                } catch (e) {
                    errorCallBack('Get events data ERROR:'+e);
                }
            }
            else {
                errorCallBack('Request ERROR');
            }
        }
    });
}

function getATMHistory(url, seccessCallBack, errorCallBack)
{
   
    var FD = new FormData();
    $.ajax({
        type: "GET",
        cache: false,
        url: url,
        contentType: false,
        processData: false,
        data: FD,
        error: function (xhr, status, error) {
            errorCallBack(error);
        },
        success: function (response) {
            if (response !== null && response.length !== 0) {
                try {
                    
                    seccessCallBack(JSON.parse(response));
                } catch (e) {
                    errorCallBack('Get configuration history ERROR:' + e);
                }
            }
            else {
                errorCallBack('Request ERROR');
            }
        }
    });
}

function getTags()
{
    var FD = new FormData();
    $.ajax({
        type: "GET",
        cache: false,
        url: tagListURL,
        contentType: false,
        processData: false,
        data: FD,
        error: function (xhr, status, error) {
            showError(error);
        },
        success: function (response) {
            if (response !== null && response.length !== 0) {
                try {                    
                    setTags(JSON.parse(response));
                } catch (e) {
                    showError('Get configuration history ERROR:' + e);
                }
            }
            else {
                showError('Request ERROR');
            }
        }
    });
}

function getNameById(url,elem) {
    
    var FD = new FormData();
    
    $.ajax({
        type: "GET",
        cache: false,
        url: url,
        contentType: false,
        processData: false,
        data: FD,
        error: function (xhr, status, error) {
            
            return 'Unknown';
        },
        success: function (response) {
            if (response !== null && response.length !== 0) {
                try {                    
                        elem.innerText = response;
                } catch (e) {
                   return 'Unknown';
                }
            }
            else {
                return 'Unknown';
            }
        }
    });
}

function getActionsByPackage(url, id, callBackSuccess,callBackError,index) {    
    var FD = new FormData();

    $.ajax({
        type: "GET",
        cache: false,
        url: url + id,
        contentType: false,
        processData: false,
        data: FD,
        error: function (xhr, status, error) {
            callBackError(error);
            return;
        },
        success: function (response) {
            if (response !== null && response.length !== 0) {
                try {
                    callBackSuccess(response,index);
                } catch (e) {
                    callBackError(e,index);
                }
            }
            else {
                callBackError('');
                return;
            }
        }
    });
}

function getMonitoringListData(url,queryString,successCallBack,errorCallBack)
{            
    var FD = new FormData();  
  
    FD.append('query', queryString);
    hideError();
    showLoader();
    $.ajax({
        type: "POST",
        url: url,//,
        contentType: false,
    processData: false,
    data: FD,
    error: function (xhr, status, error) {
        errorCallBack(error);       
    },
    success: function (response) {
        if (response != null && response.length != 0) {
            successCallBack(response);
           
        }
        else {
            errorCallBack('Request ERROR');          
        }
    }
    });
    document.getElementById('searchBtn').focus();
}

function getRequest(url,successCallBack,errorCallBack)
{   
    $.ajax({
        type: "GET",
        cache: false,
        url: url,
        contentType: false,
        processData: false,        
        error: function (xhr, status, error) {
            errorCallBack(xhr, status,error);
        },
        success: function (response) {            
            successCallBack(response);
        }
    });
}

/*GET END*/

/*SET START*/
function submitForm(formData,url,seccessCallBack,errorCallBack)
{
    $.ajax({
        type: "POST",
        url: url,
        contentType: false,
        processData: false,
        data: formData,
        error: function (xhr, status, error) {
            errorCallBack(xhr, status, error);
        },
        success: function (response) {        
            seccessCallBack(response);        
        }
    });
}
/*SET END*/
