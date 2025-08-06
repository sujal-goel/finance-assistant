import { NextResponse } from 'next/server'
import { GoogleAuth } from 'google-auth-library'
import { google } from 'googleapis'

export async function POST(request) {
  try {
    const formData = await request.json()
    
    // Validate environment variables
    if (!process.env.GOOGLE_SHEETS_ID || process.env.GOOGLE_SHEETS_ID === 'your_google_sheets_id_here') {
      throw new Error('Google Sheets ID not configured. Please set GOOGLE_SHEETS_ID in your .env.local file.')
    }

    if (!process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL) {
      throw new Error('Google Service Account credentials not configured. Please set the required environment variables.')
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
    })

    const sheets = google.sheets({ version: 'v4', auth })
    
    // Prepare data for Google Sheets
    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    const rowData = [
      timestamp,
      formData.firstName || '',
      formData.lastName || '',
      formData.email || '',
      formData.phone || '',
      formData.annualIncome || '',
      formData.employmentType || '',
      formData.city || '',
      formData.currentInvestments || '',
      formData.taxSavingGoal || '',
      formData.investmentExperience || '',
      formData.riskTolerance || '',
      formData.investmentHorizon || '',
      formData.primaryGoal || '',
      formData.suggestions || '',
      formData.subscribeNewsletter ? 'Yes' : 'No'
    ]

    // Add data to Google Sheets
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_ID,
      range: 'Sheet1!A:P', // Adjust range as needed
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [rowData],
      },
    })

    return NextResponse.json({ 
      success: true, 
      message: 'Form data successfully submitted to Google Sheets',
      sheetResponse: response.data
    })

  } catch (error) {
    console.error('Error submitting to Google Sheets:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to submit form data',
        error: error.message 
      },
      { status: 500 }
    )
  }
}
