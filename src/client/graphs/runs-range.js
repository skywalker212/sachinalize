import getQuery from '../helpers/get-query.js';
import hashMap from '../helpers/hash-map.js';

const chart = (id) => {
    return new Promise((resolve, reject) => {
        getQuery('runs-range').then((data) => {
            let obj = data.aggregations.sachin.buckets;
            let map = new hashMap();
            let values = [];
            for (let prop in obj) {
                map.put(prop, obj[prop]['doc_count']);
            }
            obj = map.getObj();
            for (let prop in obj) {
                if (obj.hasOwnProperty(prop)) {
                    values.push([prop, obj[prop][1]]);
                }
            }
            let graph = {
                bindto: `#${id}`,
                padding: {
                    top: 50,
                    right: 100,
                    bottom: 40,
                    left: 100,
                },
                transition: {
                    duration: 500
                },
                data: {
                    columns: values,
                    type: 'pie'
                }
            }
            resolve(graph);
        }).catch((error) => {
            reject(error);
        });
    });
};

export default chart;