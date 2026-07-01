const SHEET_NAME = 'respuestas';
const STUDY_KEY = 'PET_2026_V2';

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);

  try {
    const body = JSON.parse((e && e.postData && e.postData.contents) ? e.postData.contents : '{}');

    if (body.study_key !== STUDY_KEY) {
      return jsonResponse({ ok: false, error: 'invalid_study_key' });
    }

    const rowObject = body.row || {};
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);

    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
    }

    const incomingHeaders = Object.keys(rowObject);
    let headers = [];

    if (sheet.getLastRow() >= 1 && sheet.getLastColumn() >= 1) {
      headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].filter(String);
    }

    if (headers.length === 0) {
      headers = incomingHeaders;
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    } else {
      let changed = false;
      incomingHeaders.forEach(function(header) {
        if (headers.indexOf(header) === -1) {
          headers.push(header);
          changed = true;
        }
      });
      if (changed) {
        sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      }
    }

    const row = headers.map(function(header) {
      return rowObject[header] !== undefined ? rowObject[header] : '';
    });

    sheet.appendRow(row);

    return jsonResponse({ ok: true });
  } catch (err) {
    return jsonResponse({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return jsonResponse({ ok: true, message: 'Percepcion Temporal endpoint activo' });
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
