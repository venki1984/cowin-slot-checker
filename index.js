const axios = require('axios');
const emailer = require('./emailer');
const cron = require('node-cron');
const appConstants = require('./constants');
const utils = require('./utils');

const configPincode = [{
    pincode: 600095,
    mailid: ['shravan2688@gmail.com', 'venki1984@gmail.com'],
}, {
    pincode: 560066,
    mailid: ['venki1984@gmail.com'],
}];

const requestConfig = {
                    headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36'        
}};
const getAvailability = () => {
    try {
        for (let item of configPincode) {
            const result =  axios.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${item.pincode}&date=${utils.getTodayDate()}`, requestConfig).then((result) => {
            let data = result.data;
            data = data.centers;
            let message = appConstants.mailHeader;
            let body = ``;       
            let htmlEnd = appConstants.mailFooter;     
            for (let i = 0; i <= data.length -1 ; i++) {
                let sessionDetails = appConstants.sessionDetailsHeader;
                const sessionDetailsEnd = appConstants.sessionDetailsFooter;
                for (let j = 0; j < data[i].sessions.length; j++) {
                    sessionDetails += `
                        <tr>
                            <td>${data[i].sessions[j].vaccine}</td>
                            <td>${data[i].sessions[j].min_age_limit}</td>
                            <td>${data[i].sessions[j].date}</td>
                            <td>${data[i].sessions[j].available_capacity}</td>
                        </tr>
                    `;
                }
                body += `
                    <tr>
                        <td>${data[i].name}</td>
                        <td>${data[i].address}</td>
                        <td>${data[i].pincode}</td>
                        <td style="font-weigh:bold">${data[i].fee_type}</td>
                        <td>${data[i].from}</td>
                        <td>${data[i].to}</td>
                        <td>${sessionDetails}${sessionDetailsEnd}</td>
                    </tr>
                `;
            }
            emailer.sendMail('venki1984@gmail.com', item.mailid, 'Slot Availability', message+body+htmlEnd);
        }).catch((err) => {
            console.log(err);
        });
        }
    } catch (e) {
        console.log(e);
    }
}
cron.schedule('* * * * *', () => {
    getAvailability();
  });
