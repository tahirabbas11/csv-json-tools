import { promises as fs } from 'fs';
import * as path from 'path';

export async function csvToJson(csvFilePath: string, separator: string = ','): Promise<any[]> {
    try {
        const extname = path.extname(csvFilePath).toLowerCase();
        if (extname !== '.csv') {
            throw new Error("Please provide a CSV file.");
        }

        const csvData = await fs.readFile(csvFilePath, 'utf-8');

        if (!csvData) {
            throw new Error("CSV is empty.");
        }

        const lines = csvData.split('\n');
        const headers = lines[0].trim().split(separator).map(header => header.trim().replace(/\s/g, '_'));
        const jsonData: any[] = [];

        for (let i = 1; i < lines.length; i++) {
            if (lines[i].trim() === '') {
                continue; // Skip empty rows
            }
            const data = lines[i].trim().split(separator);
            const obj: any = {};
            for (let j = 0; j < headers.length; j++) {
                // Check if data[j] exists before calling trim() and remove extra spaces
                obj[headers[j]] = data[j] ? data[j].trim() : '';
            }
            jsonData.push(obj);
        }
        return jsonData;
    } catch (error) {
        console.error('// Error occurred while processing the file:', error);
        return []; // or return { error: error.message } if you prefer object
    }
}
