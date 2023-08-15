function UploadFile(fileInputElem, fileId, BufferChunkSize, controllerURL, succesFunc, errorFunc, setProgresBar,fExData) {    
    if (fileInputElem.value == '') {
        errorFunc("Field 'File' is required");
        return;
    }
    var FileChunk = [];
    var file = fileInputElem.files[0];
    var MaxFileSizeMB = 1;
    var FileStreamPos = 0;
    var EndPos = BufferChunkSize;
    var Size = file.size;

    // add to the FileChunk array until we get to the end of the file
    while (FileStreamPos < Size) {
        // "slice" the file from the starting position/offset, to  the required length
        FileChunk.push(file.slice(FileStreamPos, EndPos));
        FileStreamPos = EndPos; // jump by the amount read
        EndPos = FileStreamPos + BufferChunkSize; // set next chunk length
    }
    // get total number of "files" we will be sending
    var TotalParts = FileChunk.length;


    var FilePartName = fileId;
    clearError();
    // document.getElementById('progress').style.visibility = 'visible';
    UploadFileChunk(FileChunk, FilePartName, 0, TotalParts, "", controllerURL, succesFunc, errorFunc,setProgresBar,fExData);

}

function UploadFileChunk(Chunk, FileName, part, partCount, stamp, controllerURL, succesFunc, errorFunc,setProgresBar,fExData) {
    var FD = new FormData();    
    var percent = partCount / 100;
    
    if (!!setProgresBar)
        setProgresBar(part / percent);
    if (Chunk.length == 0) {
        if (!!setProgresBar)
            setProgresBar(100);        
        succesFunc("Create plugin success");
        return;
    }    
    if (!!fExData)
    {
        for(var key in fExData)
        {
            FD.append(key, fExData[key]);
        }
    }
    FD.append('file', Chunk.shift(), FileName);
    $.ajax({
        type: "POST",
        url: controllerURL,
        contentType: false,
        processData: false,
        data: FD,
        error: function (xhr, status, error) {
            if (error != null)
            errorFunc(error);
        },
        success: function (response) {
            if (response != null && response.length == 0) {
                UploadFileChunk(Chunk, FileName, part + 1, partCount, response, controllerURL, succesFunc, errorFunc, setProgresBar);
            }
            else {
                if (response != null && response.length > 0) {
                    errorFunc(response);
                } else
                    if (Chunk.length != 0)
                        errorFunc("send request Error");
                    else {
                        setProgresBar(100);
                        succesFunc("Create plugin success");

                    }
            }
        }
    });
}

function createTempFile(controllerURL, succesFunc, errorFunc) {
    var FD = new FormData();
    $.ajax({
        type: "POST",
        url: controllerURL,
        contentType: false,
        processData: false,
        data: FD,
        error: function (xhr, status, error) {
            errorFunc(error);
        },
        success: function (response) {
            succesFunc(response);
        }
    }
    );
}
