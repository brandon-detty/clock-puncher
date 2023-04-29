import { Auth, google } from 'googleapis';

import authorize from './authorize.js';

async function getData(auth: Auth.OAuth2Client | Auth.BaseExternalAccountClient) {
  const sheets = google.sheets({ version: 'v4', auth });
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: '1cD9ypq3HZtJ5qx_qdN8RSOFW_kYVKTCheSMXjF6X9OA',
    range: '2023-05!A1:A2',
  });
  const rows = res.data.values;
  if (!rows || rows.length === 0) {
    console.log('No data found.');
    return;
  }
  rows.forEach((row) => {
    // Print columns A and E, which correspond to indices 0 and 4.
    console.log(`${row[0]}`);
  });
}

export default () => authorize().then(getData).catch(console.error);
