import getQuery from '../helpers/get-query.js';
import hashMap from '../helpers/hash-map.js';

const chart = (id) => {
    return new Promise((resolve, reject) => {
        getQuery('innings').then((data) => {
            let obj = data.aggregations.grounds.buckets;
            let map = new hashMap();
            let values = [];
            obj.forEach((prop) => {
                map.put(prop.key, (prop.runs.value/prop.doc_count).toFixed(2));
            });
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
                },
                pie: {
                    label: {
                        format: function (value, ratio, id) {
                            return value;
                        }
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