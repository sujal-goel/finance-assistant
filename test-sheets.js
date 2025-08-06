// Test script to verify Google Sheets setup
// Run this with: node test-sheets.js

const { GoogleAuth } = require('google-auth-library');
const { google } = require('googleapis');
require('dotenv').config({ path: '.env.local' });

async function testSheetsConnection() {
  try {
    console.log('🔍 Testing Google Sheets connection...\n');
    
    // Check environment variables
    console.log('📋 Environment Variables:');
    console.log('GOOGLE_SHEETS_ID:', process.env.GOOGLE_SHEETS_ID);
    console.log('GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL:', process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL);
    console.log('');
    
    if (!process.env.GOOGLE_SHEETS_ID || process.env.GOOGLE_SHEETS_ID === 'your_google_sheets_id_here') {
      console.log('❌ ERROR: GOOGLE_SHEETS_ID not set properly in .env.local');
      console.log('Please follow these steps:');
      console.log('1. Create a Google Sheet');
      console.log('2. Copy the ID from the URL');
      console.log('3. Update GOOGLE_SHEETS_ID in .env.local');
      return;
    }

    if (!process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL) {
      console.log('❌ ERROR: Google Service Account credentials not configured');
      console.log('Please set the required environment variables in .env.local');
      return;
    }

    // Create credentials object from environment variables
    const credentials = {
      type: process.env.GOOGLE_SERVICE_ACCOUNT_TYPE,
      project_id: process.env.GOOGLE_SERVICE_ACCOUNT_PROJECT_ID,
      private_key_id: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY_ID,
      private_key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY.replace(/\\n/g, '\n'),
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL,
      client_id: process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_ID,
      auth_uri: process.env.GOOGLE_SERVICE_ACCOUNT_AUTH_URI,
      token_uri: process.env.GOOGLE_SERVICE_ACCOUNT_TOKEN_URI
    }

    // Initialize Google Sheets API
    const auth = new GoogleAuth({
      credentials: credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    
    console.log('🔗 Attempting to connect to Google Sheets...');
    
    // Try to get sheet info
    const sheetInfo = await sheets.spreadsheets.get({
      spreadsheetId: process.env.GOOGLE_SHEETS_ID,
    });
    
    console.log('✅ SUCCESS! Connected to Google Sheet:');
    console.log('Title:', sheetInfo.data.properties.title);
    console.log('Sheets:', sheetInfo.data.sheets.map(s => s.properties.title));
    console.log('');
    
    // Try to read existing data
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEETS_ID,
      range: 'Sheet1!A1:P1',
    });
    
    if (response.data.values && response.data.values.length > 0) {
      console.log('📊 Existing headers found:', response.data.values[0]);
    } else {
      console.log('📝 No headers found. You may need to add column headers.');
    }
    
  } catch (error) {
    console.log('❌ ERROR:', error.message);
    
    if (error.message.includes('ENOENT')) {
      console.log('\n🔧 Fix: Make sure the google-service-account.json file exists in your project root');
    } else if (error.message.includes('Not Found')) {
      console.log('\n🔧 Fix: Check your Google Sheets ID - the sheet might not exist or not be shared with your service account');
    } else if (error.message.includes('permission')) {
      console.log('\n🔧 Fix: Make sure you\'ve shared your Google Sheet with the service account email');
    }
    
    console.log('\n📖 Full setup guide: GOOGLE_SHEETS_SETUP.md');
  }
}

testSheetsConnection();
