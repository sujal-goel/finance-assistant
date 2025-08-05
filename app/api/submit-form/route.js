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

    if (!process.env.GOOGLE_SERVICE_ACCOUNT_KEY_FILE) {
      throw new Error('Google Service Account key file not configured. Please set GOOGLE_SERVICE_ACCOUNT_KEY_FILE in your .env.local file.')
    }
    
    // Initialize Google Sheets API
    const auth = new GoogleAuth({
      keyFile: process.env.GOOGLE_SERVICE_ACCOUNT_KEY_FILE, // Path to service account key file
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

// Alternative method using Google Sheets API key instead of service account
export async function POST_WITH_API_KEY(request) {
  try {
    const formData = await request.json()
    
    // Using API key method (simpler but less secure)
    const sheets = google.sheets({ 
      version: 'v4', 
      auth: process.env.GOOGLE_SHEETS_API_KEY 
    })
    
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

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_ID,
      range: 'Sheet1!A:P',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [rowData],
      },
    })

    return NextResponse.json({ 
      success: true, 
      message: 'Form data successfully submitted to Google Sheets' 
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
