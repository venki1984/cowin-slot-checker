const appConstants = {
    mailHeader: `
    <table style="border: 1px solid #333; border-collapse: collapse">
    <thead>
    <th  style="border: 1px solid #333;border-collapse: collapse;"> Center Name </th>
    <th  style="border: 1px solid #333;border-collapse: collapse;"> Address </th>
    <th  style="border: 1px solid #333;border-collapse: collapse;"> Pincode </th>
    <th  style="border: 1px solid #333;border-collapse: collapse;"> Type </th>
    <th style="border: 1px solid #333;border-collapse: collapse;"> Start Time </th>
    <th  style="border: 1px solid #333;border-collapse: collapse;"> End Time </th>
    <th  style="border: 1px solid #333;border-collapse: collapse;"> Details </th>
    </thead>`,
    mailFooter: `
    </table>
    <style>
    table {
                    border: 1px solid #333;border-collapse: collapse
                    }
        tr {
            border: 1px solid #333;border-collapse: collapse
        }
        td {
            border: 1px solid #333;border-collapse: collapse
        }
    </style>
    `,
    sessionDetailsHeader: `<table>
        <tr>
        <th>Vaccine</th>
        <th>Min. Age</th>
        <th>Date</th>
        <th>Capacity</th>
        </tr>
    `,
    sessionDetailsFooter: `</table>`,
}
module.exports = appConstants;