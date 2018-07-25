import getQuery from '../helpers/get-query.js';

const chart = (id) => {
    return new Promise((resolve, reject) => {
        getQuery('year').then((data) => {
            let obj = data.aggregations.runs_in_years.buckets;
            let labels = [];
            let values = ['runs'];
            obj.forEach((val) => {
                values.push(val.runs.value);
                labels.push(new Date(val.key).getFullYear());
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