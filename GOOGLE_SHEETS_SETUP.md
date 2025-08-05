# Google Sheets Integration Setup Guide

## Overview
Your registration form is now integrated with Google Sheets to automatically save form submissions. Follow this guide to set up the integration.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Zenith Finance - User Registrations" (or any name you prefer)
4. Set up column headers in the first row:
   - A1: Timestamp
   - B1: First Name
   - C1: Last Name
   - D1: Email
   - E1: Phone
   - F1: Annual Income
   - G1: Employment Type
   - H1: City
   - I1: Current Investments
   - J1: Tax Saving Goal
   - K1: Investment Experience
   - L1: Risk Tolerance
   - M1: Investment Horizon
   - N1: Primary Goal
   - O1: Suggestions
   - P1: Newsletter Subscription

## Step 2: Get Google Sheets ID

1. Look at your Google Sheet URL
2. Copy the ID from the URL (between `/d/` and `/edit`)
   
   Example URL: `https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit`
   
   The ID is: `1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms`

## Step 3: Set Up Google Cloud Project

### Option A: Service Account Method (Recommended)

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select an existing one
3. Enable the Google Sheets API:
   - Go to "APIs & Services" > "Library"
   - Search for "Google Sheets API"
   - Click on it and press "Enable"

4. Create a Service Account:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "Service Account"
   - Fill in the details and create
   - Click on the created service account
   - Go to "Keys" tab > "Add Key" > "Create new key"
   - Choose JSON format and download

5. Share your Google Sheet with the service account:
   - Open your Google Sheet
   - Click "Share" button
   - Add the service account email (found in the JSON file)
   - Give "Editor" permission

### Option B: API Key Method (Simpler but less secure)

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Enable the Google Sheets API (same as above)
3. Create an API Key:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Copy the generated key

4. Make your Google Sheet publicly readable:
   - Open your Google Sheet
   - Click "Share" > "Change to anyone with the link"
   - Set permission to "Viewer"

## Step 4: Configure Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` and add your values:

### For Service Account Method:
```
GOOGLE_SERVICE_ACCOUNT_KEY_FILE=./google-service-account.json
GOOGLE_SHEETS_ID=your_actual_sheets_id_here
```

### For API Key Method:
```
GOOGLE_SHEETS_API_KEY=your_actual_api_key_here
GOOGLE_SHEETS_ID=your_actual_sheets_id_here
```

3. If using Service Account method, place your downloaded JSON key file in the project root and name it `google-service-account.json`

## Step 5: Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to your registration form
3. Fill out and submit the form
4. Check your Google Sheet to see if the data appears

## Security Notes

- Never commit your `.env.local` file or service account JSON to version control
- The `.gitignore` file should already exclude these files
- For production, use environment variables provided by your hosting platform
- Service Account method is more secure as it doesn't require making your sheet public

## Troubleshooting

### Common Issues:

1. **"Permission denied" error**: Make sure you've shared the sheet with the service account email
2. **"Sheet not found" error**: Double-check your GOOGLE_SHEETS_ID
3. **"API not enabled" error**: Ensure Google Sheets API is enabled in Google Cloud Console
4. **Authentication errors**: Verify your service account JSON file path and permissions

### Error Logs:
Check the browser console and terminal for detailed error messages when testing the form submission.

## Next Steps

Once the integration is working:
1. You can access and analyze user data in your Google Sheet
2. Set up automated email notifications when new users register
3. Create charts and dashboards in Google Sheets to track registrations
4. Export data for further analysis or import into CRM systems

## Support

If you encounter issues:
1. Check the error messages in browser console
2. Verify all environment variables are set correctly
3. Ensure the Google Sheet has the correct column headers
4. Test with a simple form submission first
