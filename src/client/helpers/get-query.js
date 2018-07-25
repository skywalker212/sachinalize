import $ from 'jquery';

const getQuery = (type) => {
    return new Promise((resolve, reject) => {
        $.get('/aggregation', {
            type
        }, (data) => {
            resolve(data);
        }).fail((err) => {
            reject(err);
        });
    });
}

export default getQuery;