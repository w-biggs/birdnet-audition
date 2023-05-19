#include "json2.js";

function exportFile() {
  try {
    const document = app.activeDocument;
    const filePath = $.getenv('temp') + "/" + document.id + ".wav";

    const exportParams = new WaveDocumentExportParameters();
    exportParams.fileFormat = null;
    exportParams.includeMetadata = true;
    exportParams.sampleTypeConversion = null;

    const exportResult = document.exportDocument(filePath, exportParams);

    if (exportResult.error) {
      alert(JSON.stringify(exportResult));
      return false;
    }

    return filePath;
  } catch (e) {
    alert("Line: " + e.line);
    alert("File: " + e.fileName);
    alert("Message: " + e.message);
  }
}
