// aggregate runs in ranges of 25

module.exports = {
    "size": 0,
    "aggs": {
        "sachin": {
            "range": {
                "field": "batting_score",
                "keyed": true,
                "ranges": [{
                        "key": "didn't play",
                        "from": -3,
                        "to": -1
                    },
                    {
                        "key": "0-25",
                        "from": 0,
                        "to": 26
                    },
                    {
                        "key": "26-50",
                        "from": 25,
                        "to": 51
                    },
                    {
                        "key": "51-75",
                        "from": 51,
                        "to": 76
                    },
                    {
                        "key": "76-100",
                        "from": 76,
                        "to": 101
                    },
                    {
                        "key": "101-125",
                        "from": 101,
                        "to": 126
                    },
                    {
                        "key": "126-150",
                        "from": 125,
                        "to": 151
                    },
                    {
                        "key": "151-175",
                        "from": 151,
                        "to": 176
                    },
                    {
                        "key": "176-200",
                        "from": 176,
                        "to": 201
                    },
                    {
                        "key": "200-INF",
                        "from": 200
                    }
                ]
            }
        }
    }
}