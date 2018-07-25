import getQuery from '../helpers/get-query.js';

const chart = (id) => {
    return new Promise((resolve, reject) => {
        getQuery('opposition').then((data) => {
            let obj = data.aggregations.grounds.buckets;
            let labels = [];
            let values = ['avg runs against opposition'];
            obj.forEach((val) => {
                if (val.key === -1 || val.key === -2) {
                    return;
                }
                values.push(val.runs.value / val.doc_count);
                labels.push(val.key);
            });
            let graph = {
                bindto: `#${id}`,
                padding: {
                    top: 50,
                    bottom: 40
                },
                transition: {
                    duration: 500
                },
                data: {
                    columns: [
                        values
                    ],
                    type: 'bar'
                },
                axis: {
                    x: {
                        type: 'category',
                        tick: {
                            rotate: 90,
                            multiline: false
                        },
                        categories: labels
                    }
                }
            }
            resolve(graph);
        }).catch((error) => {
            reject(error);
        });
    });
};

export default chart;